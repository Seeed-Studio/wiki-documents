---
description: JetPack 6.2 上の A603 Jetson キャリアボードで Arducam Jetvariety カメラ (OV9281) を使用する
title: Arducam OV9281 (Jetvariety) カメラを A603 Jetson キャリアボードで使用する
keywords:
  - reComputer
  - Arducam
  - OV9281
  - Jetvariety
  - A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /use_arducam_ov9281_camera_with_a603_jetson_carrier_board
last_update:
  date: 07/08/2026
  author: Jonathan van der Maas
createdAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/use_arducam_ov9281_camera_with_a603_jetson_carrier_board/
updatedAt: '2026-08-11'
---

Arducam Jetvariety カメラは公式には NVIDIA 開発キットのキャリアボードのみをサポートしており、A603 はサポート対象外です。また Arducam のインストーラーが導入するオーバーレイは A603 では動作しません。カメラ自体は、小さなカスタム Device Tree を構築すれば問題なく動作します。このページでは、JetPack 6.2 (L4T R36.4.3) 上での Arducam OV9281 (B0223) の動作構成、その標準オーバーレイが失敗する理由、およびボード上のすべての USB を無効化してしまう落とし穴について説明します。

結果: `/dev/video0` 上の OV9281、GREY / Y10 / Y16 フォーマット、1280x800・1280x720・640x400、最大 80 fps、外部トリガー利用可能。

## Arducam 純正オーバーレイが A603 で動作しない理由

1. A603 の単一の CSI コネクタは i2c-2 (`i2c@3180000`) 上の `serial_a` です。Arducam の開発キット向けオーバーレイは、センサーノードを `cam_i2cmux` ノード配下の `serial_b`/`serial_c` に接続しますが、このボードではその mux が一度もインスタンス化されないため、センサーノードは一切プローブされません。エラーメッセージも出ず、カメラが単に現れないだけです。
2. Jetvariety コントローラは i2c アドレス `0x0c` で応答します。`i2cdetect -y -r 2` で確認してください。
3. A603 BSP は独自に再ビルドしたカーネルを同梱し、NVIDIA の Device Tree ファイル名を再利用しているため、変更すべき Tree は開発キット用ではなく A603 用のものです。

## まずはブートの安全確保

:::caution
Arducam のインストーラーは、独自カーネルと開発キット用 Device Tree を組み合わせたブートエントリ（一般に `JetsonIO` とラベル付け）を追加します。このエントリで A603 をブートすると、USB ガジェットネットワークやキーボードを含むすべての USB ポートが無効になります。A603 の UEFI/extlinux ブートメニューはキーボード入力を一切受け付けないため、`/boot/extlinux/extlinux.conf` の `DEFAULT` が指しているものが常にブートされます。テストしていないエントリを `DEFAULT` に設定したままにしないでください。この状態からの復旧には、別のマシンからフラッシュ用 initrd を RCM ブートする必要があります（W7 のピン 3 と 4 にリカバリジャンパを装着）。
:::

作業を始める前に、元のカーネルと DTB をバックアップし、さらに systemd タイマーを導入することを検討してください。このタイマーは、keep フラグファイルが存在しない限り、毎回のブートから約 180 秒後に `DEFAULT` を既知の正常エントリへリセットします。

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT seeed/' /boot/extlinux/extlinux.conf
```

任意のブート実験のワークフロー: keep フラグを削除し、`DEFAULT` を実験用エントリに向けて再起動します。うまく動作したら、keep フラグを再作成します。ボードにアクセスできなくなった場合は電源を入れ直してください。自動的に既知の正常エントリへ戻ります。

## 動作する構成

`/boot/extlinux/extlinux.conf` 内のブートエントリ:

```
LABEL arducam
      MENU LABEL Arducam kernel + A603 sensor-swapped DTB
      LINUX /boot/arducam/Image
      FDT /boot/kernel_a603-arducam.dtb
      APPEND ${cbootargs} root=/dev/nvme0n1p1 rw rootwait rootfstype=ext4 ...
```

- カーネル: Arducam の `arducam-nvidia-l4t-kernel` パッケージに含まれるもの（インストーラーが取得）。`arducam-csi2` Jetvariety ドライバが含まれています。
- DTB: 下記の手順でビルドしたカスタム DTB。extlinux の `FDT` 行は、このボードではパーティションの DTB を上書きすることに注意してください。

### Device Tree の方針: センサーだけを入れ替え、それ以外は維持する

Arducam のカメラグラフを A603 の Tree に移植しようとすると、phandle や配線の不整合で失敗します。うまくいくのはその逆のアプローチです。すなわち、A603 が持つ完全なボード適合済みカメラグラフ（CSI チャネル、VI 配線、ports と endpoints、phandle 群、すべてがボードが標準対応する IMX219 用に構成済み）をそのまま維持し、センサーノードの識別情報だけを入れ替えます。

1. 既存の A603 DTB を逆コンパイル: `dtc -I dtb -O dts -o seeed.dts <stock DTB>`
2. Arducam のセンサーブロックを含む任意の DTB（たとえばオーバーレイから）を逆コンパイルし、その中の `mode0` ノードを取得します
3. `seeed.dts` の `i2c@3180000` 内で、`rbpcv2_imx219_a@10` ノードを `arducam_a@0c` ノードに置き換えます:
   - `compatible = "arducam,arducam-csi2"`, `reg = <0x0c>`, `sensor_model = "arducam-csi2"`, `use_sensor_mode_id = "true"`
   - 元の `devnode`、`reset-gpios`、`phandle` および `ports` ブロック全体はそのまま残します。これによりすべての phandle が有効なままになります
   - Arducam の `mode0` ブロックを挿入し、`tegra_sinterface` を `"serial_a"` に変更します
4. `cam0-rst` GPIO hog を `output-low` から `output-high` に切り替えます（既存の Tree はカメラをリセット状態に保持しています）
5. `tegra-camera-platform` のパス文字列と `__symbols__` を `.../rbpcv2_imx219_a@10` から `.../arducam_a@0c` に更新します
6. 再コンパイルしてインストール: `dtc -I dts -O dtb -o /boot/kernel_a603-arducam.dtb a603-arducam.dts`

この変換を自動で行う Python スクリプトが [このリポジトリ](https://github.com/vdmaas98/a603-arducam) で公開されています。

dmesg における成功のサイン:

```
arducam-csi2 2-000c: firmware version: 0x10003
arducam-csi2 2-000c: Sensor ID: 0x9281
arducam-csi2 2-000c: sensor arducam-csi2 2-000c registered
```

## ソフトウェアをデバッグする前にリボンケーブルを確認する

センサーが i2c に応答しない場合は、まず物理層を確認してください:

- カメラ側では、リボンケーブルの金メッキ端子がカメラ PCB から離れる向きになっている必要があり、両方のラッチが完全かつ均等に閉じている必要があります。
- 決定的な診断方法は、遊端での電源テストです。リボンケーブルを A603 側だけに挿し、カメラ側は接続せずにボードの電源を入れ、マルチメータで遊端の最外側の端子を測定します。3.3 V が読めれば、ボード・ケーブル・ボード側の向きがすべて正常であり、残る不具合はカメラ側に限定されます。
- ケーブル: 22 ピン、タイプ A（両端とも同じ面に金メッキ端子）、ストレート配線。

## キャプチャ

:::note
ドライバのデフォルトの露光時間とゲインでは真っ黒なフレームになり、故障したカメラと全く同じ見た目になります。値は新しいストリームが開くたびにリセットされるため、キャプチャと同じ `v4l2-ctl` 呼び出しの中でコントロールを設定してください。
:::

```bash
v4l2-ctl -d /dev/video0 --set-fmt-video=width=1280,height=800,pixelformat=GREY \
  --set-ctrl exposure=10000 --set-ctrl analogue_gain=400 \
  --stream-mmap --stream-count=10 --stream-to=/tmp/frames.raw
```

範囲: `exposure` 1 ～ 65523、`analogue_gain` 100 ～ 1500。その他に利用可能なもの: `trigger_mode`（外部トリガー）、`frame_rate` 5 ～ 80、水平および垂直反転。

この手法は OV9281 B0223 で検証しましたが、Jetvariety の設計ではモードロジックが Device Tree ではなくカメラのオンボードコントローラ側にあるため、A603 上の他の Jetvariety モジュールにも適用できるはずです。


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
