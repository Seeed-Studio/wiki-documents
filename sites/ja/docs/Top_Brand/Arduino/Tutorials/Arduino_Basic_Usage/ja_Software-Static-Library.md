---
description: Arduino ライブラリの事前コンパイル済みライブラリの使用方法
title: Arduino ライブラリの事前コンパイル済みライブラリの使用方法
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Software-Static-Library
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- # Arduino チュートリアル - Arduinoで静的（事前コンパイル済み）ライブラリを使用する方法 -->

Arduinoの大規模プロジェクトのコンパイル時間を短縮するために、Arduino IDE (>=1.8.6) に導入された新しい機能の1つである **静的（事前コンパイル済み）ライブラリ** を使用することができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Banner.png"/></div>

**事前コンパイル済みライブラリを使用する理由**

- 事前コンパイル済みライブラリを使用すると、ライブラリの機能をソースコードを公開せずに共有することができます。

- 事前コンパイル済みライブラリの唯一の制限は、コンパイルされたボードまたはMCUに対してのみ有効であることです。

## はじめに

Arduinoライブラリを例として取り上げ、それを事前コンパイル済みライブラリに変換してみましょう。ここでは、Arduinoライブラリとして [**Seeed_Arduino_LIS3DHTR**](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) を使用し、ボードオプションとして [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) を使用します。

**ステップ1. Arduinoライブラリの設定**

ライブラリのルートパスに移動し、`library.properties` ファイルを開いて以下を追加し、ファイルを保存します。

```properties
dot_a_linkage=true
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/dot.png"/></div>

**ステップ2. Arduino IDEのセットアップ**

Arduino IDEを開き、**設定** に移動します。「**コンパイルとアップロード時に詳細な出力を表示**」がチェックされていることを確認してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Arduino-IDE.png"/></div>

**ステップ3. 一時ビルド場所とボードフレームワークフラグの取得**

ボードとして **Wio Terminal** を選択します。ライブラリの **#includeディレクティブ** を含む任意のスケッチをコンパイルします。これは最低限のスケッチでも構いません。私の場合は、`#include<LIS3DHTR.h>` です。

コンパイル後、コンパイルログウィンドウを確認し、一時ビルドフォルダの場所を探します。この場所は出力の最終コマンドに表示されます。例えば、私の場合、コマンドは以下の通りです：

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-size -A /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343/pre-compile.ino.elf
```

したがって、一時ビルドパスは以下の通りです：

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/buildpath.png"/></div>

このパスをコピーして後で使用します。また、選択したボードに対してコンパイルされたボードフレームワークフラグを取得するために **`-mcpu=`** フラグを探す必要があります。私の場合、Wio Terminal は以下のようにラベル付けされています：

```sh
-mcpu=cortex-m4
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/mcu.png"/></div>

**ステップ4. `.a` ファイルをライブラリフォルダにコピー**

一時ビルドパスフォルダに移動し、`libraries` -> `Seeed_Arduino_LIS3DHTR` に移動すると、`Seeed_Arduino_LIS3DHTR.a` ファイルが表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/a.png"/></div>

一時ビルドフォルダの `{temporary build folder}/libraries/{library name}` フォルダから **Arduino/libraries/\{library name\}/src/\{Board Framework Flag\}** サブフォルダに `.a` ファイルをコピーします。私の場合は **`src/cortex-m4`** に配置します。

`.a` ファイルの名前を変更し、名前の先頭に "lib" を追加します。私の場合、`libSeeed_Arduino_LIS3DHTR.a` になります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/library.png"/></div>

**ステップ5. 事前コンパイル済みフラグの追加**

次に、`library.properties` に戻り、`dot_a_linkage=true` を削除して以下のフラグを追加します：

```properties
precompiled=true
ldflags=-lSeeed_Arduino_LIS3DHTR
```

ここで、`ldflags` は `-l+\{library name\}` です。

:::note
    フラグではファイル名の「lib」部分を指定しないことに注意してください。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/pre-compiled.png"/></div>

これで、ライブラリフォルダの `src` から **`.cpp`** ファイルを削除すると、Arduino IDEは事前コンパイル済みライブラリを使用します！

### 問題が発生した場合

一部のボードでは `.a` ファイルを `src` フォルダ内のさらに深い場所に配置する必要がある場合があります。例えば、Wio Terminal がそのケースです。同じ問題が発生した場合は、以下の手順に従ってください。

コンパイルログ情報を確認すると、IDEが探しているパスが表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/path.png"/></div>

```
/Users/ansonhe/Documents/Arduino/libraries/Seeed_Arduino_LIS3DHTR/src/cortex-m4/fpv4-sp-d16-hard" does not exist
```

したがって、`libSeeed_Arduino_LIS3DHTR.a` ファイルを `cortex-m4` の下にある `fpv4-sp-d16-hard` に配置するだけです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/finalpath.png"/></div>

これで、Arduinoは事前コンパイル済みライブラリのパスを認識します！

ここでは、静的ライブラリを使用した例を [**こちら**](https://github.com/Seeed-Studio/Seeed_Arduino_MG126) に提供しています。これも参考にしてください。

## リソース

- [共有（動的）ライブラリと静的ライブラリ — パフォーマンスの違い](https://medium.com/@nickteixeira/shared-dynamic-libraries-vs-static-libraries-differences-in-performance-2716f5b3c826#:~:text=Advantages%3A,is%20already%20present%20in%20memory)

## FAQ

- 注意点として、この事前コンパイル済みライブラリ機能は Arduino IDE バージョン **`1.8.6`** 以上でのみサポートされています。そのため、エラーを回避するために Arduino IDE を最新バージョンに更新してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>