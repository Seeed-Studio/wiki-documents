---
description: SeeedのGithubからダウンロードしたデモを使用するためのガイド
title: Seeed StudioのGithubからデモを使用する方法

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Guide_to_use_demos_downloaded_from_Seeed-s_Github
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---


SeeeduinoのGithubからデモを頻繁に使用する必要がある場合、初心者にとってデモをうまく実行するのは少し難しいことがあります。
そこで、デモを迅速に実行するための手順を示します。

## はじめに

1. [SeeedのGithub](https://github.com/Seeed-Studio)サイトからサンプルコードやライブラリ、ヘッダーファイルをダウンロードできます。

2. Githubで「Download Zip」という名前のボタンをクリックします。

3. ダウンロードしたZIPファイルを解凍します。

4. 解凍したファイル名から「-master」を2回削除します。

5. 解凍したファイルのフォルダ _xxx_ をライブラリフォルダにコピーします（デフォルトでは、これはSketchbookの場所と同じで、File &gt; Preferenceをクリックすることで確認できます）。

6. Windowsでは通常「My Documents\Arduino\libraries」と呼ばれます。Macユーザーの場合は「Documents/Arduino/libraries」と呼ばれることが多いです。Linuxでは、Sketchbook内の「libraries」フォルダになります。

7. ダウンロードしたZIPファイル（最初に「-master」を削除）を使用してZIPライブラリを追加します。

![](https://files.seeedstudio.com/wiki/Guide_to_use_demos_downloaded_from_Seeed-s_Github/img/Add_ZIP_library.png)

8. サブディレクトリ _**example**_ 内の _**.ino**_ ファイルを開きます。
9. デモをコンパイルまたはメインコントローラーボードにアップロードします。

**ヒント:** Arduinoが _foo.h_ ファイルを見つけられないと表示した場合は、ライブラリファイル（主にヘッダーファイル）を **zip** 形式で圧縮して追加してください。

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>