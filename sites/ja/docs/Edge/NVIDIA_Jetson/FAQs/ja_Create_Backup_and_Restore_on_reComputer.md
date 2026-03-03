---
description: このガイドでは、reComputer J3011でシステムのバックアップと復元を行い、設定済みの環境とソフトウェアを新しいデバイスに転送する方法を説明します。バックアッププロセスには、リカバリモードへの移行、JetPack BSPのダウンロード、バックアップスクリプトを使用したデータのコピーが含まれます。復元時には、新しいSSDを挿入し、再度リカバリモードに入り、復元コマンドを実行します。このプロセスにより、設定済みのシステム環境を効率的に複製できます。
title: reComputerでのバックアップと復元の作成
keywords:
- jetson
- BSP
- L4T
- Backup
- Restore
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /ja/create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
---

# reComputerでのバックアップと復元の作成

## はじめに

reComputerは、エッジに最大275TOPSの最新AI性能をもたらす強力でコンパクトなインテリジェントエッジボックスです。recomputerでビジネスに必要なソフトウェアと環境を設定・インストールし、別の新しいrecomputerからプロジェクトを複製する必要がある場合、ソフトウェアの再インストールは効率的ではありません。そのため、このwikiページでは[reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html)を使用して、recomputerシリーズで既存のソフトウェアと環境をバックアップし、新しいrecomputerに復元・移植を便利に行う方法を紹介します。

:::note
私たちのテストプラットフォームはreComputer J3011で、JetPack 5.1.3を参考として提供しています。
:::

## 前提条件

- Ubuntu ホストコンピュータ
- USB Type-C データ転送ケーブル
- reComputer J3011（JetPack 5.1.3 OS搭載）

:::info
reComputerに必要なソフトウェアとアプリケーションをインストール・設定してください。これらの変更がデバイスの起動機能を損なわないことを確認してください。変更後はデバイスを再起動して安定性を確認することをお勧めします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
上のスクリーンショットのように、jtopソフトウェアをインストールしました。ここでは、ターミナルでこれらのコマンドを直接使用できます。
<a id="Recovery"></a>
:::

## システムのバックアップ

**ステップ 1.** デバイスをリカバリモードに設定します。この[wikiページ](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)を参照してください。

**ステップ 2.** Jetsonモジュールに対応するJetPack BSPを取得します。JetPack 5.1.3の場合、[NVIDIAの公式サイト](https://developer.nvidia.com/embedded/jetson-linux-r3550)からJetson Linux R35.5.0 BSPをダウンロードしてください。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**ステップ 3.** BSPファイルを展開してLinux_for_Tegraディレクトリにアクセスします。

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>
  
**ステップ 4.** Linux_for_Tegra の内容を JetPack フラッシュパッケージディレクトリ（例：mfi_recomputer-orin）にコピーします。
:::note
「フラッシュパッケージディレクトリ」は、システムをフラッシュする過程で使用されるディレクトリファイルです。
:::

既存のファイルを保持するために `-rn` オプションを使用します：

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**ステップ 5.** JetPackフラッシュパッケージディレクトリに移動します：

```bash
cd /path/to/mfi_recomputer-orin
```

**ステップ 6.** バックアップスクリプトを実行し、ストレージデバイスと希望するバックアップ名を指定します：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` をあなたのデバイスに置き換えてください

:::

:::note
Jetpackフラッシュパッケージディレクトリに移動して、`xxx.conf`ファイルを見つけることができます。
`xxx`はあなたの`<target_board>`です

```bash
ls | grep *.conf
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

完了するまで辛抱強く待ちます。
すべてが順調に進めば、ターミナルで以下のスクリーンショットと似たようなものが表示されます：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
このプロセス中、デバイスはフラッシュプロセスのように何度も再起動する可能性があります。仮想マシンやWSLの使用は推奨されません。接続が失われ、バックアップ/復元プロセスが失敗する可能性があるためです。一部のファイルが見つからない場合があります。その場合は `recomputer-orin.conf` を開いて、存在しないファイルを削除できます。
通常、これらは一時的なデバイスツリーオーバーレイオブジェクトファイルであり、バックアップと復元の結果には影響しません。ただし、BSPに変更を加えた場合は、オーバーレイファイルをマージする必要があります。
:::

## システムの復元

**ステップ 1.** 新しい空の[SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)をreComputerに挿入します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**ステップ 2.** [前述の通り](#Recovery)強制リカバリモードに入ります。

**ステップ 3.** ホストシステムで、JetPackフラッシュパッケージディレクトリに移動し、ホストで復元コマンドを実行します：  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

すべてが正常に進むと、ターミナルで以下のスクリーンショットと同様のものが表示されます：
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**ステップ 4.** Jetsonデバイスの電源を入れ、以前に設定したユーザー名とパスワードを使用します。そして、以前にインストールしたソフトウェアをテストします。動作すれば、復元は成功です。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
以前のシステムでjtopをインストールしていたため、新しいシステムのターミナルで直接jtopを起動できます。

:::info
さらに、以下のケースでバックアップと復元がテストされています：

- 元のSSDへのバックアップの復元
- 異なるSSDへのバックアップの復元
- 同じキャリアボード、同じバッチのJetsonモジュール、異なるSSDへのバックアップの復元

:::

## リソース

- [J401キャリアボードにJetPack OSをフラッシュ](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 回路図](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3Dファイル](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetsonシリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetsonシリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetsonデバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetsonサンプル](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
