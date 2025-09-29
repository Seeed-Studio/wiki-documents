---
description: IRリモコン
title: IRリモコン
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/IR_Remote
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: IRリモコン
category: チュートリアル
oldwikiname:  IRリモコン
prodimagename:  
surveyurl: https://www.research.net/r/IR_Remote
--- -->
IR（赤外線）は非常に一般的な通信手段です。このデモでは、IR送信および受信モジュールの使用方法を紹介します。

多くの家庭用電化製品はIRリモコンで制御されています。例えば、テレビやエアコンなどです。

IRモジュールを使用して、これらの電化製品を制御することも可能です。

**必要なハードウェア：**

* Arduino

* IR送信機

* IR受信機

* ボタン

**回路：**

IR送信機をD3に接続し、IR受信機をA4に接続します。

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_1.png)

**コード：**

コードは2つの部分に分かれています：リモコンの値を取得する部分とコマンドを送信する部分です。

リモコンの値を取得する：

IRSendRevライブラリのrevTestを開き、シリアルモニタを開きます。リモコンを手に取り、ボタンを押すと、一連の数字が表示されます。

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_2.png)

この一連の数字が必要な値です。これをメモしておき、後で使用します。

コマンドを送信する：

Arduino IDEを開き、[ファイル] -> [スケッチブック] -> [infrared]をクリックします。

テレビの電源オン/オフキーの値を取得した場合は、赤外線送信機をテレビに向けてボタンを押してください。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>