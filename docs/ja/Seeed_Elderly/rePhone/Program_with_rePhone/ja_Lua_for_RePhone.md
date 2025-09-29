---
description: RePhone用Lua
title: RePhone用Lua
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Lua_for_RePhone
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhoneは、興味深いプロジェクトを始めるための学習ツールとして活用できます。現在、RePhoneはさまざまな開発環境と開発言語をサポートしており、Eclipse IDEやArduino IDEを使用してC/C++でアプリケーションを構築したり、LuaやJavaScriptを使用することができます。

このWikiは、Luaを使用してRePhoneプロジェクトを始めるためのユーザーガイドです。

ドライバのインストールとファームウェアの更新
----------------------------------

<!-- -   **ドライバのインストール**については、[Arduino_IDE_for_RePhone_Kit](/ja/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")の**セクション2**を参照してください -->

<!-- 
-   **ファームウェアの更新**については、[Arduino_IDE_for_RePhone_Kit](/ja/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")の**セクション3**を参照してください -->

RePhone用Luaアプリケーションのダウンロード
------------------------------------

**ステップ1.** 以下のアイコンをクリックして、GitHubから「Lua for RePhoneアプリケーション」をダウンロードしてください。

[![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Download_Lua_for_RePhone.png)](https://github.com/Seeed-Studio/Lua_for_RePhone/releases)

**ステップ2.** ***lua_for_rephone_xxx.zip*** をクリックしてダウンロードします。

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_for_rephone_download.png)

**ステップ3.** **バッテリーを接続**し、Micro USBケーブルでPCに接続して、RePhoneをストレージモードに設定します。

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**ステップ4.** ***lua_for_rephone_xxx.zip*** ファイルを解凍し、RePhoneの5MBディスクにコピーします。また、音楽ファイル（mp3形式）をディスクに入れることもできます。ここでは「music1.mp3」と「music2.mp3」を入れています。

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_1.png)

Luaシェルの使用
-------------

**ステップ1.** RePhone（Xadow GSM+BLE、セクション2のステップ3の図を参照）の電源キーを***2秒間***押し続けて電源を入れます。その後、シリアルポートのCOM番号を確認します。これは***MTK USB Modem Port***として***デバイスマネージャー***に表示されます。*PCによってCOM番号が異なる場合があります*ので注意してください。

**デバイスマネージャー**を開くには、**スタート**ボタンをクリックし、**コントロールパネル**をクリックし、**システムとセキュリティ**をクリックし、その後**システム**の下にある**デバイスマネージャー**をクリックします。管理者パスワードや確認を求められた場合は、パスワードを入力するか確認を行ってください。以下の画像を参照してください。

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Check_ports.png)

**ステップ2.** [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)などのシリアルターミナルツールを使用して、RePhone上で動作するLuaシェルにアクセスします。

PuTTYを使用する場合は、***"implicit CR in every LF"*** オプションを有効にすることを忘れないでください。そうしないと、改行が正しく表示されません。RePhoneのLuaシェルはLF ('\n')をEOLとして使用しますが、PuTTYはデフォルトでCR LF ("\r\n")をEOLとして使用します。

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Putty_EOL.png)

**ステップ3.** MTK USB Modem Portを開き（ボーレートはUSB仮想シリアルポートのため関係ありません）、"print('hello, world')"と入力すると、RePhone上で最初のLuaコードが実行されます。

![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Lua_Shell.png)

RePhoneに音楽ファイルがある場合は、"audio.play('music.mp3')"と入力して再生できます。SIMカードが挿入されている場合は、"gsm.call('電話番号')"で電話をかけたり、"gsm.text('電話番号', 'RePhoneからのメッセージ')"でテキストメッセージを送信できます。

例
--------

1. 音楽を繰り返し再生する。

```
function play_music()
    audio.play('music.mp3')
end
t = timer.create(10000, play_music)
```

2. 自動返信メッセージ。

```
function reply(from, content)
    print('メッセージを受信:', content)
    print('送信者:', from)
    gsm.text(from, 'メッセージありがとうございます')
end
gsm.on_new_message(reply)
```

RePhoneコミュニティ
-----------------

[![](https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

私たちは、RePhoneユーザー（支援者）が集まり、温かく快適に会話を楽しみ、RePhoneについて議論し、技術的な問題を共有し、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる場所を探してきました。そして、ここにRePhoneコミュニティがあります。

今すぐ[RePhoneコミュニティ](https://community.seeedstudio.com/discover.html?t=RePhone)に参加しましょう！

一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

リソース
---------

- [RePhone用Luaのソースコード](https://github.com/Seeed-Studio/Lua_for_RePhone)


<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Lua_for_RePhoneから作成されました -->

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