---
title: DSO Nano/gcc
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/DSO_Nano-gcc/
slug: /ja/DSO_Nano-gcc
last_update:
  date: 05/15/2025
  author: gunengyu
---


# gcc を使用して DSO Nano ファームウェアをビルドする方法

[DSO Nano](/ja/DSO_Nano "DSO Nano") ファームウェアは、gcc ツールチェーンを使用してビルドできます。gcc 固有のファイルは、ファームウェアソースコードツリーの project/gcc フォルダーにあります。

## ARM クロスビルド gcc ツールチェーンを取得する

多くの人が使用している ARM ツールチェーンは、以下のリンクから入手できる ARM の GCC です：&lt;[https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)&gt;。

Linux 用には、tarball またはインストーラーを選択できます。後者は前者よりもダウンロードサイズがかなり大きいです。いずれの場合も、ツールチェーンの "bin" ディレクトリがパスに含まれていることを確認してください。例えば、tarball を /opt に展開した場合、以下をシェルで入力するか、.bashrc または .pam_environment に追加してください：

```
PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH
```

ツールチェーンが正しく設定されていれば、以下を入力することで：

```
arm-none-eabi-gcc -v
```

コンパイラのバージョンとビルド時のオプションが表示されます。エラーが表示される場合は、続行する前にツールチェーンのインストールを修正してください。

もしお使いのプラットフォームに適した事前ビルド済みの ARM ツールチェーンが見つからない場合、またはツールチェーンを自分でビルドしたい場合は、ソースコードをダウンロードするか、以下を参照してください：[https://open-bldc.org/wiki/Building_ARM_Toolchain](https://open-bldc.org/wiki/Building_ARM_Toolchain)

## ファームウェアソースコードの取得とビルド

現在のところ、Tormod の GitLab ツリーからコードを取得してください：

```
git clone https://gitlab.com/dsonano/dso-firmware.git
cd dso-firmware
```

後で最新の git にツリーを更新したい場合は：

```
git pull
```

### アプリケーション部分のコンパイル

```
cd DS0201_APP/project/gcc
make
```

### ライブラリ部分のコンパイル

```
cd ../../../DS0201_LIB/project/gcc
make clean
make
```

## テスト

[Nano V1 または V2](/ja/Dfu-util "Dfu-util") に dso-lib.bin と dso-app.bin ファイルをダウンロードするには、Dfu-util を使用してください。Nano V3 モデルの場合、dso-lib.hex と dso-app.hex を DFU 仮想 USB ドライブに一度に 1 つずつコピーしてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>