---
description: スケッチブックの使い方
title: スケッチブックの使い方

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_To_Use_Sketchbook
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---


別のドキュメントでは、ライブラリについて詳しく紹介しました。ライブラリは非常に簡単に使用できることがわかります！ライブラリをダウンロードしてArduinoのライブラリディレクトリに配置し、例を開けば動作します。

しかし、時々次のような問題に直面することがあります。面白いデモを作成した場合、このデモにはいくつかのライブラリが含まれている必要があります。そして、このデモを共有したい場合、コードを他の人に送る必要がありますが、コンパイルエラーが発生することがあります。つまり、特定のライブラリが欠けているという問題です。そのため、ライブラリも一緒に送る必要があります。もしデモに多くのライブラリが必要な場合、問題はさらに増えるでしょう。

実際には、Arduinoにはスケッチブックという機能があり、この問題を解決する良い方法となります。スケッチブックは実際にはフォルダであり、どこにでも配置できます。ここではスケッチブックを使用してみましょう。

私はスケッチブックを書きました。以下からダウンロードできます：[こちら](https://github.com/loovee/NFC_ShieldBot_Demo)。  
その内容は無視してください。ここでの目的はスケッチブックに慣れることです。ダウンロードした後、Fドライブに配置します。

Arduino IDEを開き、[ファイル] -> [環境設定]をクリックします。以下の画面が表示されます：

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook1.jpg)

スケッチブックの場所をダウンロードしたコードのディレクトリに設定します。そして[OK]をクリックして操作を完了します。Arduino IDEを閉じて再度開きます。

[ファイル] -> [スケッチブック]を開くと、多くの項目が表示されます。例えば、demo、shield_botなどです。demoをクリックすると、それを開くことができ、デモのコードを見ることができます。このデモには以前見たことのない多くのライブラリが含まれていることがわかります。そしてコンパイルボタンをクリックすると、エラーなしで成功します。不思議なことですか？実際には、NFC_Shieldbot_Demoにはlibrariesというフォルダがあることに気づいたかもしれません。そうです、ライブラリはここにあります。

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook2.jpg)

したがって、デモを作成したい場合は、スケッチブックを作成し、必要なライブラリをスケッチブックのlibrariesフォルダに配置することを試してみてください。数分前にダウンロードしたスケッチブックのように：

![](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook3.jpg)

### リソース

- [PDFファイルをダウンロード](https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/res/How_to_use_Sketchbook.pdf)

## 技術サポートと製品に関する議論
私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>