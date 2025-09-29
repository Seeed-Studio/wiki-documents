---
description: RePhone向けJavaScript
title: RePhone向けJavaScript
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/JavaScript_for_RePhone
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhoneは、興味深いプロジェクトを始めるための学習ツールとなります。現在、RePhoneはさまざまな開発環境と開発言語をサポートしており、Eclipse IDEやArduino IDEを使用してC/C++でアプリケーションを構築したり、LuaやJavaScriptを使用して開発することができます。

このWikiは、JavaScriptを使用してRePhoneプロジェクトを開始するためのユーザーガイドです。

ドライバのインストールとファームウェアの更新
----------------------------------

- **ドライバをインストールする**には、**<a href="/ja/JavaScript_for_RePhone" ><span><font color={'000000'} size={"3"}>Arduino IDE for RePhone Kit</font></span></a>のセクション2**を参照してください。

- **ファームウェアを更新する**には、**<a href="/ja/JavaScript_for_RePhone" ><span><font color={'000000'} size={"3"}>Arduino IDE for RePhone Kit</font></span></a>のセクション3**を参照してください。

RePhone向けJavaScriptアプリケーションのダウンロード
-------------------------------------------

**ステップ1.** **JavaScript for RePhone**プロジェクトのGitHubリリースチャンネルにアクセスし、***js_for_rephone_xxx.zip***をダウンロードします。

[RePhone向けJavaScriptをダウンロード](https://github.com/Seeed-Studio/JavaScript_for_RePhone/releases)

**ステップ2.** バッテリーを接続し、Micro USBケーブルでPCに接続して、RePhoneをストレージモードに設定します。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**ステップ3.** ***js_for_rephone_xxx.zip***ファイルを解凍し、RePhoneの5MBディスクにコピーします。また、音楽ファイル（mp3形式）をディスクに入れることもできます。ここでは、'music1.mp3'と'music2.mp3'を入れています。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Lua_1.png)

JavaScriptシェルの使用
--------------------

**ステップ1.** RePhone（Xadow GSM+BLE、セクション2のステップ3の図を参照）の電源キーを***2秒間***押し続けて電源を入れます。その後、シリアルポートのCOM番号を確認します。これは***MTK USB Modem Port***として***デバイスマネージャー***に表示されます。*COM番号はPCによって異なる場合があります*。

**デバイスマネージャー**を開くには、**スタート**ボタンをクリックし、**コントロールパネル**をクリックし、**システムとセキュリティ**をクリックし、その後**システム**の下にある**デバイスマネージャー**をクリックします。管理者パスワードまたは確認を求められた場合は、パスワードを入力するか確認を行います。以下の画像を参照してください。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Check_ports.png)

**ステップ2.** [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)などのシリアルターミナルツールを使用して、RePhone上で動作しているLuaシェルにアクセスします。

PuTTYを使用する場合は、***"implicit CR in every LF"***オプションを有効にすることを忘れないでください。そうしないと、改行が正しく表示されません。RePhoneのLuaシェルはLF ('\n')をEOLとして使用しますが、PuTTYはデフォルトでCR LF ("\r\n")をEOLとして使用します。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Putty_EOL.png)

**ステップ3.** MTK USB Modem Portを開きます（ボーレートはUSB仮想シリアルポートであるため関係ありません）。"print('hello, world')"と入力すると、RePhone上で最初のLuaコードが実行されます。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Lua_Shell.png)

RePhoneに音楽ファイルがある場合は、"audio.play('music.mp3')"と入力して再生します。SIMカードが挿入されている場合は、"gsm.call('電話番号')"で電話をかけたり、"gsm.text('電話番号', 'RePhoneからのメッセージ')"でテキストメッセージを送信できます。

例
--------

1. 音楽を繰り返し再生する。

```
function aplay() { audio.play('music.mp3'); }
t = timer.create(10000, aplay)
```

2. 自動返信メッセージ。

```
function re(f, c) { print('message:', c, ' from:', f); gsm.text(f, 'Thanks for your message'); }
gsm.on_new_message(re)
```

RePhoneコミュニティ
-----------------

[![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、RePhoneユーザーが集まり、温かく快適に会話を楽しみ、技術的な問題を議論し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここにRePhoneコミュニティがあります。

今すぐ[RePhoneコミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone)に参加しましょう！

一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

リソース
---------

- [RePhone向けJavaScriptのソースコード](https://github.com/Seeed-Studio/JavaScript_for_RePhone)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/JavaScript_for_RePhoneから作成されました -->

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>