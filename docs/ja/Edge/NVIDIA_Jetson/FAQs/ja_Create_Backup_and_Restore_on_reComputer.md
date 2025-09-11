---
description: このガイドでは、reComputer J3011でシステムをバックアップおよび復元する方法を説明します。これにより、設定済みの環境やソフトウェアを新しいデバイスに移行できます。バックアッププロセスには、リカバリモードへの移行、JetPack BSPのダウンロード、バックアップスクリプトを使用したデータのコピーが含まれます。復元時には、新しいSSDを挿入し、再度リカバリモードに入り、復元コマンドを実行します。このプロセスにより、設定済みのシステム環境を効率的に複製できます。
title: reComputerでのバックアップと復元の作成
keywords:
- jetson
- BSP
- L4T
- バックアップ
- 復元
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /ja/create_backup_and_restore_on_recomputer
last_update:
  date: 05/15/2025
  author: Zibo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputerでのバックアップと復元の作成

## はじめに
reComputerは、最大275TOPSの最新AI性能をエッジに提供する強力でコンパクトなインテリジェントエッジボックスです。ビジネスに必要なソフトウェアや環境をreComputerに設定・インストールした後、新しいreComputerにプロジェクトを複製する必要がある場合、ソフトウェアを再インストールするのは効率的ではありません。このWikiページでは、[reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html)を使用して、既存のソフトウェアと環境をバックアップし、新しいreComputerに復元・移植する方法を紹介します。

:::note
テストプラットフォームはreComputer J3011であり、JetPack 5.1.3を参考として提供しています。
:::

## 前提条件
- Ubuntuホストコンピュータ
- USB Type-Cデータ転送ケーブル
- reComputer J3011 (JetPack 5.1.3 OS搭載)

:::info
reComputerに必要なソフトウェアとアプリケーションをインストールおよび設定済みであること。これらの変更がデバイスの起動機能を損なわないことを確認してください。変更後にデバイスを再起動して安定性を確認することを推奨します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
上記のスクリーンショットのように、jtopソフトウェアをインストールしており、ターミナルでこれらのコマンドを直接使用できます。
<a id="Recovery"></a>
:::

## システムのバックアップ

**ステップ1.** デバイスをリカバリモードに設定する方法については、この[Wikiページ](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)を参照してください。

**ステップ2.** Jetsonモジュールに対応するJetPack BSPを取得します。JetPack 5.1.3の場合、[NVIDIA公式サイト](https://developer.nvidia.com/embedded/jetson-linux-r3550)からJetson Linux R35.5.0 BSPをダウンロードしてください。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**ステップ3.** BSPファイルを解凍してLinux_for_Tegraディレクトリにアクセスします。

```bash
tar -xvzf jetson-linux-*.tbz2
# JetPack 5.1.3の場合: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>
  

**ステップ4.** Linux_for_Tegraの内容をJetPackフラッシュパッケージディレクトリ（例: mfi_recomputer-orin）にコピーします。
:::note
「フラッシュパッケージディレクトリ」は、システムをフラッシュするプロセスで使用されるディレクトリファイルです。
:::

既存のファイルを保持するために`-rn`オプションを使用します:
```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**ステップ5.** JetPackフラッシュパッケージディレクトリに移動します:

```bash
cd /path/to/mfi_recomputer-orin
```
**ステップ6.** ストレージデバイスと希望するバックアップ名を指定してバックアップスクリプトを実行します:
```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```
:::info
-b `<target_board>` をデバイス名に置き換えてください。
:::

:::note
JetPackフラッシュパッケージディレクトリに移動し、`xxx.conf`ファイルを見つけることができます。
`xxx`は`<target_board>`です。
```bash
ls | grep *.conf
```
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

完了するまでしばらくお待ちください。
すべてが正常に進行すると、以下のスクリーンショットのような内容がターミナルに表示されます:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>


:::note
このプロセス中、デバイスはフラッシュプロセスのように何度も再起動する可能性があります。仮想マシンやWSLの使用は推奨されません。接続が失われ、バックアップ/復元プロセスが失敗する可能性があるためです。欠損ファイルが発生する場合がありますが、`recomputer-orin.conf`を開いて存在しないファイルを削除できます。通常、これらは一時的なデバイスツリーオーバーレイオブジェクトファイルであり、バックアップおよび復元結果には影響しません。ただし、BSPに変更を加えた場合は、オーバーレイファイルを統合する必要があります。
:::

## システムの復元

**ステップ 1.** 新しい空の [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) を reComputer に挿入します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**ステップ 2.** [以前説明した](#Recovery) 強制リカバリーモードに入ります。

**ステップ 3.** ホストシステムで JetPack フラッシングパッケージのディレクトリに移動し、以下のコマンドをホストで実行します：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

すべてが正常に進むと、以下のスクリーンショットのような出力がターミナルに表示されます：
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**ステップ 4.** Jetson デバイスの電源を入れ、以前設定したユーザー名とパスワードを使用します。そして、以前インストールしたソフトウェアをいくつかテストします。これが正常に動作すれば、復元は成功です。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
以前のシステムで jtop をインストールしていたため、新しいシステムのターミナルで直接 jtop を起動できます。

:::info
さらに、以下のケースでバックアップと復元がテストされています：  
- 元の SSD にバックアップを復元する。  
- 別の SSD にバックアップを復元する。  
- 同じキャリアボードで、同じバッチの Jetson モジュールを使用し、異なる SSD にバックアップを復元する。
:::

## リソース
- [J401 キャリアボードに JetPack OS をフラッシュする](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 回路図](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio エッジ AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson サンプル](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-初心者向けガイド](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>