---
description: Arduinoライブラリのインストール方法
title: Arduinoライブラリのインストール方法

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_install_Arduino_Library
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---


:::note

    このチュートリアルはArduino 1.6.9を基にしています。
:::

ここでは、Arduinoライブラリのインストール方法を説明します。ほとんどすべてのライブラリは[Github](https://github.com/Seeed-Studio)に保存されていることに注意してください。製品がライブラリを必要とする場合、Arduinoライブラリを提供します。例えば、Grove - Buttonのような簡単な製品にはライブラリを書く必要がありません。

## ライブラリのダウンロード

Arduinoライブラリをダウンロードする方法は2つあります。

### 1.製品ページからダウンロード
通常、製品がライブラリを必要とする場合、以下のようなライブラリダウンロードボタンバーが表示されます：

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/library.png)](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip)

ボタンをクリックしてダウンロードを開始します。数秒後にパッケージが取得できます。

### 2.Githubからダウンロード

Githubページからダウンロードする必要がある場合は、**Clone or download > Download ZIP**ボタンをクリックしてライブラリパッケージを取得します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Tutorial_Add_Arduino_Library/images/github_download.png)

## ライブラリの追加

Arduino IDEにライブラリを追加する方法も2つあります。

### 1.ZIPライブラリを追加

ZIPライブラリをダウンロードしたら、Arduino IDEを開き、**Sketch > Include Library > Add .ZIP Library**をクリックします。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png)

ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**Library added to your libraries**と表示されます。これでライブラリが正常にインストールされたことを意味します。

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png)

### 2.ライブラリフォルダを手動で追加
ZIPライブラリを正しく追加できない場合があります。これは、ZIPライブラリのルートフォルダに.cppまたは.hファイルが欠けているため、Arduinoが認識できない場合です。この場合、ZIPファイルを解凍し、ライブラリフォルダを以下のパスにコピーします：**...\Arduino\libraries**。**....\**はArduinoを設定したパスです。私の場合は**D:\Workwork\Software\Arduino\libraries**です。

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png)

### 確認
次に、ライブラリが正しくインストールされているか確認しましょう。

ライブラリを正常に追加すると、Exampleにデモが表示されます。この場合、**File > Example > OLED_Display_96x96-master > OLED_Hello_World**をクリックして例を開き、Verifyボタンをクリックします。エラーがなければ、ライブラリが完全にインストールされたことになります。おめでとうございます！

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/successlly.png)

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>