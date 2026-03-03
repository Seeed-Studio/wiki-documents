---
title: Dfu-util
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Dfu-util/
slug: /ja/Dfu-util
last_update:
  date: 05/15/2025
  author: gunengyu
---


## dfu-util を使用したファームウェアの更新

[DSO Nano](/ja/DSO_Nano "DSO Nano") に dfu ファイルをダウンロードするには、dfu-util 0.5 以降が必要です。古いバージョンの dfu-util は動作しません。DSO Nano や ST Micro のマイクロコントローラをベースにした多くのデバイスは、DFU 標準と互換性のない ST Micro 独自の DFU 拡張 (DfuSe) を使用しています。

Ubuntu 10.04 用の dfu-util 0.8 パッケージは [Tormod's PPA](https://launchpad.net/~tormodvolden/+archive/ppa/+packages?field.series_filter=lucid) で見つけることができます。適切な .deb パッケージをダウンロードしてインストールしてください。同じパッケージは、後の Ubuntu バージョンや Debian unstable でも問題なくインストールできるはずです。他のオペレーティングシステムでは、dfu-util のホームページに記載されている手順に従って自分でビルドする必要があるかもしれません。

コンピュータから Nano に .dfu ファームウェアファイルをダウンロードするには、以下のコマンドを実行します。

```
dfu-util -a 0 -D your-firmware-file.dfu
```

成功するまで数回再実行する必要があるかもしれません。「permission denied」というエラーが表示された場合は、コマンドラインの先頭に「sudo 」を付けてください。
必要なすべてのファームウェアファイル（APP と LIB）について、このコマンドを繰り返すことを忘れないでください。

## 非 DfuSe ファイルを DfuSe デバイスにダウンロードする（上級者向け）

標準の DFU デバイスは、コンピュータからの生のバイナリファイルを受け取り、それをフラッシュメモリの適切な場所にロードします。
一方、DfuSe では、アドレスは .dfu ファイルによって指定され、コンピュータがデバイスにどこにロードするかを指示する必要があります。

したがって、生のバイナリファイルを DfuSe デバイスにダウンロードするには、ターゲットアドレスを知っている必要があります。

例：生のバイナリファイルをダウンロードする場合（開発中の場合）：

```
dfu-util -a 0 --dfuse-address 0x08004000 -D your-lib.bin
dfu-util -a 0 --dfuse-address 0x0800C000 -D your-app.bin
```

## dfu-util をソースからビルドする方法

dfu-util ホームページの [ビルド手順](http://dfu-util.sourceforge.net/build.html) を参照してください。

## リンク

元のフォーラム投稿と議論：

* [Linux 手順](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1353&amp;start=10)

* [Mac OS X 特定の手順](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1364)

公式ホームページ

* [dfu-util ホームページ](http://dfu-util.sourceforge.net/)

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>