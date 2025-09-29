---
description: reComputerとVEYEカメラ間の互換性問題の解決策
title: reComputerとVEYEカメラ間の互換性問題の解決策
keywords:
- reComputer
- VEYE Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera
last_update:
  date: 08/01/2024
  author: Youjiang
---

この問題は、USBハブチップのファームウェア問題に起因することが判明しています。

具体的な手順は以下の通りです：

**ステップ 1.** SSHを使用してJetsonデバイスにリモートログインしてください。アップグレードプロセス中は、USBインターフェースに外部デバイスを接続しないことが要求されるためです。

**ステップ 2.** [カメラドライバー](https://files.seeedstudio.com/wiki/reComputer/Hard_ware/VEYE_Camera/vl822-fw.tar.bz2)をJetsonシステムにコピーする方法を見つけてください。USBドライブを使用してコピーする場合は、コピー完了後にUSBドライブを取り外すことを忘れないでください。

**ステップ 3.** 以下の指示に従ってアップグレードを実行してください。

```sh
tar -xjvf vl822-fw.tar.bz2
cd vl822-fw
```

その後、`readme.md`ファイルに従ってファームウェアをインストールしてください。

**ステップ 4.** 電源を切り、5秒間待ってから再度電源を入れてください。その後、以下のコマンドを実行してUSBハブファームウェアのバージョンを確認してください。

```sh
./run_2822_ver.sh
```

**ステップ 5.** おめでとうございます、アップグレードが成功しました。これで、i2cdetectを使用して0x3bでVEYEカメラを検出できるようになります。

## 技術サポート

お気軽に[フォーラム](https://forum.seeedstudio.com/)に問題を投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
