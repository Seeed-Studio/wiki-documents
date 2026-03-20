---
description: 豊富なコンテンツを含むドキュメントページを作成します。
title: Wiki テンプレート - 中国語版
keywords:
  - テンプレート
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/name_your_website
last_update:
  date: 03/03/2024
  author: 黎孟度
createdAt: '2024-03-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/name_your_website/
---

> 製品画像：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png" style={{width:1000, height:'auto'}}/></div>


> 購入リンク：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/purchase" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

> ここに製品の紹介を記載します

> 製品の簡単な紹介、メリット、適用シーンなどを含めてください。

> 製品の構成はリストで表示することができます。

| 項目                  |値         |備考      |
| :---------:           |:--------- |:---------:|
| CPU                   |           |           |
| フラッシュメモリ      |           | KB        |
| メモリ                |           |           |
| SRAM                  |           | KB        |
| モジュールストレージ  |           |           |
| キャリアボードストレージ |        |           |
| Wifi                  |           |           |
| ディスプレイ          |           |           |
| Bluetooth             |           |           |

### Features 部分は箇条書きで列挙します。

- 
- 
- 

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握しておくことが非常に重要です。次の表は、製品名称 の特性に関する情報を提供します。

| 特性                                   | 値      | 単位  |
| :-------:                              | :-----: | :---: |
| 動作電圧                               |         | mW    |
| 消費電力                               |         | mA    |
| 出力電圧/電流                          |         | mV/mA |
| 測定範囲                               |         |       |
| 視野角                                 |         |       |
| Rate(ここにはセンサーが返すデフォルトのデータ周波数を記載できます) |         |       |
| デジタル I/O ピン                      | ピンを列挙 | -   |
| アナログ I/O ピン                      | ピンを列挙 | -   |
| I2C インターフェース                   | ピンを列挙 | -   |
| I2C アドレス(もし IIC 通信の場合)      |         |       |
| SPI インターフェース                   | ピンを列挙 | -   |
| UART インターフェース                  | ピンを列挙 | -   |
| 電源供給およびダウンロード用インターフェース | Type-C  | -     |
| 寸法                                   |         | mm    |

> 下にピン配置図を掲載できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" style={{width:1000, height:'auto'}}/></div>


## クイックスタート

> 製品ページの場合は、以下から直接始めることができます：

### 機器の組み立て

> デバイスが使用可能になるまでに部品の取り付けや組み立てが必要な場合は、ここに手順を記載してください。

### 動作環境の準備

> 製品にシステム環境の要件がある場合、サポートされるシステムでの環境構成、例えばドライバのインストールやインストーラの提供などについてここで説明してください。

##### install -Windows

##### install -MacOS

### 起動

> デバイスにファームウェアを書き込む方法がある場合は、ここに手順を記載してください。

### リセット

> デバイスにリセット方法がある場合は、ここに手順を記載してください。

:::note

    > デバイス使用時の注意事項もここに記載できます。

:::

## Arduino ライブラリ概要

:::tip
Arduino を初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

> 製品で使用するライブラリについて大まかに紹介してください。例えば、何に基づいて作成されているか、Arduino IDE から直接ダウンロードできるかどうかなどです。この方法以外に GitHub のダウンロードリンクも添付してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://files.seeedstudio.com/purchase" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 関数

スケッチの開発を始める前に、ライブラリで利用可能な関数を確認しましょう。

- `函数名称` —— 機能、役割、オプション引数、入出力
- 
- 
- 

### デフォルト変数
> 登場するグローバル変数について紹介してください

### インストール

- **方法 1**

zip 形式のライブラリをダウンロードしたら、Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。先ほどダウンロードした zip ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

- **方法 2**

ライブラリマネージャは Arduino IDE バージョン 1.5 以降（1.6.x）から追加されました。'Sketch' メニューの 'Include Library' 内の 'Manage Libraries...' にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Library.png" style={{width:800, height:'auto'}}/></div>

Library Manager を開くと、ワンクリックでインストールできる多数のライブラリが一覧表示されます。自分の製品に対応するライブラリを見つけるには、製品名や 'k type'、'digitizer' などのキーワードで検索すると、目的のライブラリが表示されるはずです。目的のライブラリをクリックすると 'Install' ボタンが表示されます。そのボタンをクリックすると、ライブラリが自動的にインストールされます。インストールが完了したら、Library Manager を閉じます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/library_manager.png" style={{width:1000, height:'auto'}}/></div>



### パッケージのアップグレード

> 将来のアップグレード方法と操作手順を紹介してください。


## Arduino / XIAO サンプル

ライブラリをインストールし、基本的な関数を理解したので、製品名称 がどのように動作するかを確認するために、いくつかのサンプルを実行してみましょう。

> 繰り返しで同じ手順は前の方にまとめて記載します。

**Step 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div>

**Step 2.** 開発ボードのモデルを選択し、Arduino IDE に追加します。

- 以降の手順で **Seeed Studio XIAO SAMD21** を使用したい場合は、追加手順を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照してください。

- 以降の手順で **Seeed Studio XIAO RP2040** を使用したい場合は、追加手順を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照してください。

- 以降の手順で **Seeed Studio XIAO nRF52840** を使用したい場合は、追加手順を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照してください。

- 以降の手順で **Seeed Studio XIAO ESP32-C3** を使用したい場合は、追加手順を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照してください。

- 以降の手順で **Seeed Studio XIAO ESP32S3** を使用したい場合は、追加手順を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照してください。

- 以降の手順で **Seeeduino V4.3** を使用したい場合は、追加手順を完了するために **[this tutorial](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)** を参照してください。

### デモ 1 使用するモジュール名またはプロジェクト名を記載することを推奨

> サンプル 1 の機能と適用シーンの紹介。

#### 必要な材料

> このサンプルを実行するために必要な材料と購入リンクをここに記載します

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> このコードをどのように変更すればどのような動作を実現できるか（拡張性の紹介）や、デモ内に理解しづらい関数の使い方があれば、ここで説明してください。

> 画像を貼り付けて、動作結果を示します。

例

シリアルモニタをボーレート9600で開くと、センサとそれが向いている物体との距離がミリメートルとフィートの両方で表示されます。出力は次の画像のようになります。

### デモ 2 使用しているモジュール名またはプロジェクト名を記載することを推奨

> デモ 2 の機能と適用シーンの紹介。

#### 必要な部材

> ここには本デモを実行するために必要な部材と購入リンクを記載します

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


```cpp
//文件名

代码段

```

> このコードをどのように変更すればどのような動作を実現できるか（拡張性の紹介）。デモ内に理解しづらい関数の使い方がある場合は、ここで説明します。

> 画像を貼り付けて、動作結果を示します。

例

シリアルモニタをボーレート9600で開くと、センサとそれが向いている物体との距離がミリメートルとフィートの両方で表示されます。出力は次の画像のようになります。

## Python パッケージ概要

:::tip

Raspberry Pi を初めて使用する場合は、[Getting Started with Raspberry Pi](https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt) を参照することを強くお勧めします。

:::

> 本文の冒頭で、互換性、テストに使用した Raspberry Pi のモデル、OS バージョンなどの情報、および使用した Python の情報を明記してください。

> その後、導入として簡単な説明を追加してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="超链接" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 関数

スケッチの開発を始める前に、ライブラリで利用可能な関数を確認しましょう。

- `函数名称` —— 機能、役割、オプション引数、入出力
- 
- 
- 

### インストール

#### オンラインワンクリックインストール

ワンクリックインストール、クイックスタート、呼び方は何であれ、以下のコマンド 1 行で、すべての依存関係と最新の grove.py をインストール／更新できます。

:::caution

Raspberrypi OS >= Bullseye を搭載した Raspberry Pi を使用している場合、このコマンドラインは使用できません。

:::

```sh
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::info

すべてが正常に完了すると、次のメッセージが表示されます。

```sh
Successfully installed grove.py-0.5
#######################################################
Lastest Grove.py from github install complete   !!!!!
#######################################################
```

:::

#### ステップバイステップインストール

ワンクリックインストール以外に、すべての依存関係と最新の grove.py をステップバイステップでインストールすることもできます。

:::caution

Raspberrypi OS >= Bullseye を搭載した Raspberry Pi を使用している場合、このコマンドラインは Python3 でのみ使用する必要があります。

:::

```sh
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python3
sudo pip3 install .
```

### 依存関係

> インポートしているライブラリと依存パッケージの情報を紹介します。

### デフォルト変数

> 登場するグローバル変数について説明してください。

### クラス

> 設定している Python コードのクラスについて説明してください。

### パッケージのアップグレード

> 将来のアップグレード方法と操作手順を紹介します。

## Raspberry Pi 例

ライブラリをインストールし、基本的な関数を理解したので、製品名称 の動作を確認するためにいくつかのサンプルを実行してみましょう。

> 繰り返しで同じ手順は前の方にまとめて記載してください。

**Step 1.** 


**Step 2.** 

**Step 3.** 

### デモ 1 使用しているモジュール名またはプロジェクト名を記載することを推奨

> デモ 1 の機能と適用シーンの紹介。

#### 必要な部材

> ここには本デモを実行するために必要な部材と購入リンクを記載します

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

```cpp
//文件名

代码段

```

> このコードをどのように変更すればどのような動作を実現できるか（拡張性の紹介）。デモ内に理解しづらい関数の使い方がある場合は、ここで説明します。

> 画像を貼り付けて、動作結果を示します。

### デモ 2 使用しているモジュール名またはプロジェクト名を記載することを推奨

> デモ 2 の機能と適用シーンの紹介。

#### 必要な部材

> ここには本デモを実行するために必要な部材と購入リンクを記載します

<div class="table-center">
	<table align="center">
		<tr>
			<th>名称</th>
			<th>名称</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="图片链接" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



```cpp
//文件名

代码段

```

> このコードをどのように変更すればどのような動作を実現できるか（拡張性の紹介）。デモ内に理解しづらい関数の使い方がある場合は、ここで説明します。

> 画像を貼り付けて、動作結果を示します。
例


## トラブルシューティング

> 開発からコンテンツを受け取った後、デモを実行する際に自分が遭遇した問題を記録し、ここにまとめておくことで、ユーザーが同じ失敗を避けられるようにします。

## リソース

- **[ファイルタイプ]** [ファイル名](链接)
- **[ファイルタイプ]** [ファイル名](链接)
- **[ファイルタイプ]** [ファイル名](链接)

<!-- ## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p> -->

## テクニカルサポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


## 付録

### HTML テーブル

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th colspan="4">ボタンヘッダ</th>
		</tr>
		<tr>
			<td rowspan="6"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/4_3.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center">1</td>
			<td align="center">PWR BTN</td>
			<td align="center">7</td>
			<td align="center">AUTO ON</td>
		</tr>
		<tr>
			<td align="center">2</td>
			<td align="center">GND</td>
			<td align="center">8</td>
			<td align="center">DIS</td>
		</tr>
		<tr>
			<td align="center">3</td>
			<td align="center">FC REC</td>
			<td align="center">9</td>
			<td align="center">UART TXD</td>
		</tr>
		<tr>
			<td align="center">4</td>
			<td align="center">GND</td>
			<td align="center">10</td>
			<td align="center">UART RXD</td>
		</tr>
		<tr>
			<td align="center">5</td>
			<td align="center">SYS RET</td>
			<td align="center">11</td>
			<td align="center">LED +</td>
		</tr>
		<tr>
			<td align="center">6</td>
			<td align="center">GND</td>
			<td align="center">12</td>
			<td align="center">LED -</td>
		</tr>
	</table>
</div>

### 注釈

<!--这是注释-->

### HTMLテーブルのハイパーリンク

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="购买链接" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

### HTMLテキストのハイパーリンク

<a href="购买链接" target="_blank"><b>今すぐ入手</b></a>


### アンカー

<span id="jump1">プレースホルダー</span>

[**入門ガイド -- コマンドラインに関する特記事項 -- プレースホルダー**](#jump1)

### 文字色のハイライト

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

上記のコードは、Wiki内でハイライトしたい箇所の一番前に配置する必要があります。

<Highlight color="#25c2a0">Docusaurus green</Highlight> と <Highlight color="#1877F2">Facebook blue</Highlight> は、私のお気に入りの色です。


<span style={{backgroundColor: 'red'}}>Foo</span>

## タブ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    これはリンゴです 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    これはオレンジです 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    これはバナナです 🍌
  </TabItem>
</Tabs>

### 分割ウィンドウ

<Tabs>
<TabItem value="Windows" label="Windows">

</TabItem>

<TabItem value="MacOS" label="MacOS">

</TabItem>

<TabItem value="Linux" label="Linux">

</TabItem>

</Tabs>

## 警告とヒント

:::note

**コンテンツ**の一部で _Markdown_ `syntax` を使用しています。 [this `api`](#) を確認してください。

:::


:::tip

**コンテンツ**の一部で _Markdown_ `syntax` を使用しています。 [this `api`](#) を確認してください。

:::


:::info

**コンテンツ**の一部で _Markdown_ `syntax` を使用しています。 [this `api`](#) を確認してください。

:::


:::caution

**コンテンツ**の一部で _Markdown_ `syntax` を使用しています。 [this `api`](#) を確認してください。

:::


:::danger

**コンテンツ**の一部で _Markdown_ `syntax` を使用しています。 [this `api`](#) を確認してください。

:::

## 動画の挿入

<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>








## 折りたたみテキスト

<details>

<summary>クリックしてコード全体をプレビュー</summary>

</details>


## オンライン回路図プレビュー

<div className="altium-ecad-viewer" data-project-src="RAR格式的压缩包URL" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 詳しく見る

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_WiFi_Usage/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div>

## 枠線なしテーブル

<tr class="form_without_frame">
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
	<td class="form_without_frame"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" style={{width:250, height:'auto'}}/></div></td>
</tr>

## 背景色なしテーブル

<div class="table-center">
	<table align="center">
    	<tr class="table-trnobg">
			<th class="table-trnobg"></th>
      		<th class="table-trnobg"></th>
      		<th class="table-trnobg"></th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
      		<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}></font></td>
			<td class="table-trnobg"><font size={"1"}></font></td>
			<td class="table-trnobg"><font size={"1"}></font></td>
    	</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
      		<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>








