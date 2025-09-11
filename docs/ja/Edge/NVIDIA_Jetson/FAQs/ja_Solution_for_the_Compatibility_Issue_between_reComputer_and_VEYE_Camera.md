---
description: reComputer と VEYE カメラ間の互換性問題に対する解決策
title: reComputer と VEYE カメラ間の互換性問題に対する解決策
keywords:
- reComputer
- VEYE カメラ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

この問題は、USBハブチップのファームウェアの問題に起因していることが判明しました。

具体的な手順は以下の通りです：

**STEP 1.** SSHを使用してリモートでJetsonデバイスにログインします。アップグレードプロセス中は、USBインターフェースに外部デバイスを接続しないことが必要です。

**STEP 2.** [カメラドライバ](https://files.seeedstudio.com/wiki/reComputer/Hard_ware/VEYE_Camera/vl822-fw.tar.bz2)をJetsonシステムにコピーする方法を見つけます。USBドライブを使用してコピーする場合は、コピー完了後にUSBドライブを取り外すことを忘れないでください。

**STEP 3.** 以下の手順に従ってアップグレードを実行します。
```sh
$ tar -xjvf vl822-fw.tar.bz2
$ cd vl822-fw
```
その後、`readme.md`ファイルの指示に従ってファームウェアをインストールしてください。

**STEP 4.** 電源をオフにし、5秒待ってから再び電源をオンにします。その後、以下のコマンドを実行してUSBハブファームウェアのバージョンを確認します。
```sh
$ ./run_2822_ver.sh
```

**STEP 5.** おめでとうございます、アップグレードは成功しました。これで、i2cdetectを使用して0x3bでVEYEカメラを検出できるようになります。





## 技術サポート

ご不明な点がございましたら、ぜひ[フォーラム](https://forum.seeedstudio.com/)に問題を投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>