---
description: このチュートリアルでは、recomputer AI Box用のbalenaOSをコンパイル、設定、書き込みする方法を説明します。
title: reComputer AI R2140用balenaOSの構築
keywords:
  - Edge
  - reComputer R2140
  - balena
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/recomputer_ai_r2140.webp
slug: /ja/recomputer_ai_r2140_balena
last_update:
  date: 11/4/2025
  author: JiahaoLi
---

[balena](https://www.balena.io/)は、開発者がIoTアプリケーションを構築、デプロイ、管理するためのInternet of Things（IoT）プラットフォームです。幅広いデバイスアーキテクチャをサポートし、コンテナ化されたアプリケーションデプロイメント機能を含んでおり、IoTソフトウェアとHostOSの簡単な更新、バグ修正、IoTアプリケーションへの新機能導入を可能にします。balenaは、コードの更新をプッシュし、デバイス設定を管理し、場所やネットワーク条件に関係なく、フィールドでデバイスが確実かつ安全に動作することを保証する統一された方法を提供します。


<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## 入門ガイド

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備


<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

>注意：イメージを書き込むためのSDカードとカードリーダーを準備してください。

### ソフトウェア

- [balenaCloud](https://balena.io)アカウント（こちらでサインアップ）と最初の10台のデバイスを無料で取得。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balena.png" alt="pir" width="800" height="auto" /></div>

- reComputer R2140のメモリをフラッシュするための[balenaEtcher](https://etcher.balena.io/)。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balenaEtcher.png" alt="pir" width="800" height="auto" /></div>

### balena cloudでフリートを作成

フリートを作成するには、以下の画像のプロセスを参照してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/creat_fleet.png" alt="pir" width="800" height="auto" /></div>

### デバイスの追加

新しいreComputer AI R2140を追加するには、以下の画像のプロセスを参照してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/add_device.png" alt="pir" width="800" height="auto" /></div>

### balena OSのインストール

balena OSをインストールするには、以下の画像のプロセスを参照してください：
<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/install_image.png" alt="pir" width="800" height="auto" /></div>


### balena OSのフラッシュ

balena OSをSDカードにフラッシュするには、以下の画像のプロセスを参照してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/flash_image.png" alt="pir" width="800" height="auto" /></div>


以下の画像は、フラッシュが完了した後の様子を示しています：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/finish_image.png" alt="pir" width="800" height="auto" /></div>


### デバイスのテスト

フラッシュしたSDカードをrecomputer AI boxに挿入し、電源を入れてイーサネットケーブルを接続します。2分後、Balena Cloudで新しいデバイスを確認できるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/test_device.png" alt="pir" width="800" height="auto" /></div>


デバイスをクリックすると、以下の画像に示される画面に入り、デバイスをリモートで制御できることを意味します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/resul.png" alt="pir" width="800" height="auto" /></div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
