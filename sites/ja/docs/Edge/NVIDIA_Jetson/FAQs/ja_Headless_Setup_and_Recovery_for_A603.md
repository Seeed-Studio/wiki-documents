---
description: A603 Jetson キャリアボードを W6 Micro-USB 経由で完全ヘッドレス動作させ、ホストのインターネットを共有し、キーボードなしで不正なブート設定から復旧する方法
title: A603 向けヘッドレスセットアップ、インターネット共有、およびブート復旧
keywords:
  - reComputer
  - A603
  - ヘッドレス
  - USB ガジェット
  - リカバリ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /headless_setup_and_recovery_for_a603
last_update:
  date: 08/07/2026
  author: Jonathan van der Maas
---

A603 は W6 Micro-USB ポート経由だけでプロビジョニングおよび操作が可能で、フラッシュ後はモニタ、キーボード、Ethernet ケーブル、WiFi モジュールのいずれも不要です。このページでは、JetPack 6.2 (L4T R36.4.3) における完全ヘッドレスのワークフローを説明します。USB ガジェットネットワーク経由での SSH アクセス、ホストコンピュータ経由でボードにインターネットを提供する方法、そしてブートメニューがキーボード入力を一切受け付けないボードで、不正なブート設定から復旧する方法を扱います。

## USB ガジェットネットワーク経由での SSH

フラッシュ後、ボードは毎回のブート時に W6 Micro-USB ポート上で USB ガジェットネットワークを自動的に立ち上げます。追加の設定は不要です。

```
Jetson   l4tbr0   192.168.55.1
Host     (USB)    192.168.55.100
```

W6 をホストに接続し、ボードへ SSH 接続します。

```bash
ssh <username>@192.168.55.1
```

実用上の注意点:

- ケーブルはデータ通信対応の Micro-USB ケーブルである必要があります。給電専用ケーブルは、電気的には「何も起きていない」状態と区別がつきません。ボードには電源が入りますが、ホスト側にはネットワークインターフェースが現れません。インターフェースが表示されない場合は、他のデバイスでケーブルをテストしてから、他の原因をデバッグしてください。
- USB ハブはガジェットリンクに対して透過であり、問題なく動作します。
- macOS ではインターフェースは "Linux for Tegra" ハードウェアポートとして現れます。Linux ではアドレス 192.168.55.100 を持つ `usb0`/`enx...` インターフェースとして現れます。
- ガジェットインターフェースがホストから消えることは、ボードの電源が実際に切れたことを確認する確実な方法です。これは、A603 には筐体から見える電源 LED がないため有用です。電源を抜く前に、`sudo poweroff` で正しくシャットダウンし、約 15 秒待ってからインターフェースが消えたことを確認してください。

## ホスト経由でボードにインターネットを提供する

ボードのデフォルトルートはすでにホスト (192.168.55.100) を指しているため、ホスト側ではパケットを転送し、自身のアップリンクから NAT して外へ出すだけで済みます。

Linux ホストの場合:

```bash
sudo sysctl -w net.ipv4.ip_forward=1
sudo iptables -t nat -A POSTROUTING -o <uplink, e.g. wlan0> -j MASQUERADE
```

macOS ホストの場合、pf は 2 点について厳密です。ルールの順序（Apple の anchor の後に `nat` ルールを置くと "Rules must be in order" で失敗するため、変換セクション内に置く必要があります）と、Apple の組み込み anchor（読み込むルールセット内で再宣言しないと、macOS 自身のファイアウォールルールが上書きされてしまいます）です。以下は動作するルールセットです。

```bash
sudo sysctl -w net.inet.ip.forwarding=1
cat > /tmp/pf-jetson.conf <<'EOF'
scrub-anchor "com.apple/*"
nat-anchor "com.apple/*"
nat on en0 inet from 192.168.55.0/24 to any -> (en0)
rdr-anchor "com.apple/*"
dummynet-anchor "com.apple/*"
anchor "com.apple/*"
load anchor "com.apple" from "/etc/pf.anchors/com.apple"
EOF
sudo pfctl -f /tmp/pf-jetson.conf
sudo pfctl -E
```

`en0` はホストのアップリンクインターフェースに置き換えてください。sysctl と pf のルールセットはいずれもホストの再起動後には保持されないため、再起動のたびに再実行する必要があります。

:::note
NAT を有効にした後、ボード上の `apt` がハングする場合: NAT は IPv4 のみですが、DNS は Ubuntu ミラーに対してまず IPv6 アドレスを返し、apt はそれを試してからフォールバックします。apt を IPv4 に固定します。

```bash
echo 'Acquire::ForceIPv4 "true";' | sudo tee /etc/apt/apt.conf.d/99force-ipv4
```
:::

## キーボードなしでのブート実験

A603 の UEFI/extlinux ブートメニューは、タイムアウトの全期間にわたり、有線・無線を問わずいかなるポートからのキーボード入力も受け付けません。`/boot/extlinux/extlinux.conf` の `DEFAULT` が指しているものが、常にブートされます。

:::caution
テストしていないブートエントリを `DEFAULT` が指したままにしないでください。そのエントリが USB ガジェットネットワークを壊してしまうと（カスタムカーネルやデバイスツリーで起こり得ます）、ボードはキーボードのフォールバックもなく到達不能となり、復旧には後述の RCM 手順が必要になります。
:::

ブート実験を安全に行うためのセーフティネットとして、既知の正常なエントリを毎回のブートから約 180 秒後に `DEFAULT` に戻す systemd タイマーを用意します。ただし、キープ用フラグファイルが存在する場合は除きます。

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /boot/extlinux/extlinux.conf
```

oneshot サービスとタイマー（`OnBootSec=180`）を用いると、任意の実験におけるワークフローは次のようになります。

1. `sudo rm /etc/a603-keep-boot-default`（セーフティネットを有効化）
2. `DEFAULT` を実験用エントリに向けてから再起動
3. うまく動作した場合: `sudo touch /etc/a603-keep-boot-default` を実行し、`DEFAULT` を再度実験用エントリに設定します（タイマーがあなたの SSH ログイン前にすでに元に戻している可能性があるので確認してください）
4. ボードに到達できなくなった場合: 電源を入れ直すと、ボードは自動的に既知の正常なエントリからブートします

カーネルやデバイスツリーで実験を行う前に、標準のカーネルと DTB をバックアップし、それぞれの md5 ハッシュを記録しておくことで、どのファイルがどれであるかを常に証明できるようにしておきましょう。

## USB やキーボードなしでの最後の手段による復旧

ボードが USB がまったく動作しないものをブートしてしまった場合でも、RCM（リカバリモード）を使えばヘッドレスで復旧できます。

1. A603 にはリカバリボタンがありません。電源投入中に W7 ピン 3 (FORCE_RECOVERY) と W7 ピン 4 (GND) をショートさせ、約 2 秒間保持してから離します。ホスト側で `lsusb` を実行し、`0955:7523` が表示されることを確認します。
2. 対応する L4T BSP (`Linux_for_Tegra`) を持つ Linux ホストから、フラッシュを行わずにフラッシュ用 initrd をブートします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --initrd --showlogs \
     jetson-orin-nano-devkit-super internal
```

3. initrd は独自の USB ネットワークを立ち上げます。リンクローカルアドレス経由で root/root で SSH 接続し、NVMe をマウントしてブート設定を修正します。

```bash
mount /dev/nvme0n1p1 /mnt
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /mnt/boot/extlinux/extlinux.conf
```

:::caution
initrd だけが必要な場合は、`--flash-only` や `--network usb0` を指定しないでください。`--network usb0` を付けるとスクリプトは実際のフラッシュ処理に進み、中断されたフラッシュによって QSPI が消去され、ブートチェーン全体が壊れる可能性があります。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
