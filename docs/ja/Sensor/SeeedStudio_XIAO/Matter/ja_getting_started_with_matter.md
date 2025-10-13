---
description: EspressifのMatterデプロイメントツールを使用してMatterライティングを素早く体験する方法の紹介。
title: XIAO ESP32でMatterを素早く始める
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/getting_started_with_matter
last_update:
  date: 05/11/2024
  author: Citric
---

# XIAO ESP32シリーズでMatterを素早く始める

:::tip
この記事は、Seeed Studio XIAO ESP32開発Matterシリーズの2番目のチュートリアルです。ESP-IDF環境をまだ設定していない場合は、最初に最初のチュートリアルをお読みください：

- **[Espressif ESP-IDFを使用したXIAOでの開発](https://wiki.seeedstudio.com/ja/xiao_idf)**

このチュートリアルは、XIAO ESP32C3、XIAO ESP32S3に適用されます。EspressifによるXIAO ESP32C6のMatterサンプルは、GPIO8ピンがピンアウトされていないため、一時的に利用できません。
:::

スマートホーム技術の世界において、Matterはゲームチェンジャーとして登場し、デバイス間のコミュニケーションと相互作用の方法を革命的に変えることを約束しています。Matterは、さまざまなメーカーのスマートホームデバイス間でシームレスな相互運用性を可能にするオープンソースの標準化されたプロトコルです。共通の言語とフレームワークを提供することで、MatterはIoTデバイスの開発と展開を簡素化し、より接続された使いやすいスマートホーム体験を創造することを目指しています。

開発者や愛好家として、あなたはMatterの可能性を探求し、独自のMatter対応デバイスの構築を始めることを熱望しているかもしれません。そこで、XIAO ESP32シリーズとESPLaunchPadが登場します。XIAO ESP32シリーズ、特にXIAO ESP32C3、XIAO ESP32S3、XIAO ESP32C6は、Matterデバイスを作成するための理想的なプラットフォームを提供するコンパクトで強力な開発ボードです。堅牢な機能と豊富な周辺インターフェースにより、これらのボードはMatterプロジェクトに必要なハードウェア基盤を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

開発プロセスを合理化し、よりアクセスしやすくするために、Espressif SystemsはESPLaunchPadを導入しました。これは、ESP32デバイスのファームウェアフラッシュとプロビジョニングを簡素化する包括的なプラットフォームです。ESPLaunchPadは、ESP RainMakerエコシステムの力を活用し、スマートフォンアプリを使用してデバイスを簡単に設定・制御できるようにします。XIAO ESP32シリーズとESPLaunchPadを組み合わせることで、Matter開発を素早く始め、この変革的なプロトコルの利点を体験できます。

このチュートリアルでは、ESPLaunchPadを使用してXIAO ESP32ボードにファームウェアを素早くフラッシュし、QRコードを使用してiPhoneとペアリングするプロセスをガイドします。これらの手順に従うことで、電話とXIAO ESP32デバイス間の接続を確立し、シームレスに制御・操作できるようになります。この実践的な体験により、Matterとスマートホームエコシステムにおけるその可能性についての基礎的な理解を得ることができます。

このチュートリアルを通じて、以下のことを学びます：

1. XIAO ESP32ボードをセットアップし、ファームウェアフラッシュの準備をする。
2. ESPLaunchPadを使用してXIAO ESP32デバイスにMatterファームウェアを簡単にフラッシュする。
3. QRコードを使用してXIAO ESP32ボードをiPhoneとペアリングする。
4. iPhoneアプリを使用してMatterデバイスを制御・操作する。
5. 実践的な設定でMatterの基本機能と能力を探求する。

このチュートリアルの終わりまでに、MatterとXIAO ESP32シリーズおよびESPLaunchPadを使用したその実装について確実な理解を得ることができます。この画期的なプロトコルの力を活用した革新的なスマートホームソリューションを作成し、Matter開発をさらに進めるための知識とスキルを身につけることができます。

それでは、XIAO ESP32シリーズとESPLaunchPadを使用したMatterの世界への刺激的な旅に飛び込みましょう！

## ソフトウェアの準備

このチュートリアルで使用がサポートされているシステムとバージョンを以下に示します。

- **ホスト**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) または macOS 10.15 以降。

<!-- MatterのESPLaunchPadは**Windowsではサポートされていません**。 -->

## ハードウェアの準備

このチュートリアルの最後では、XIAO ESP32シリーズをMatterエンドポイントとしてApple Homeに追加し、AppleのエコシステムでLEDストリップを制御する方法を紹介します。現在のところ、このチュートリアルは以下のXIAOをサポートしており、このコースの内容に直接選択できます。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

XIAOに加えて、WS281xモデルのライトバーまたはライトビーズも必要です。現在Espressifが提供しているライトの例は単一のビーズのみをサポートしているため、ストリップまたはビーズのどちらを使用しても、1つのライトのみが点灯します。配線を簡単にするために、Grove Base for XIAOの購入もお勧めします。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Base for XIAO</th>
   <th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

**XIAO ESP32C3** を使用している場合は、LEDストリップをピン **D8** に接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

**XIAO ESP32S3** を使用している場合は、LEDストリップをピン **D9** に接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

このチュートリアルでは **XIAO ESP32C3** を例として使用し、ファームウェアのフラッシュ方法、デバイスの追加方法、その他の手順について概要を説明します。

## ビデオチュートリアル

<div class="video-container">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ステップ1. XIAO ESP32用Matterファームウェアのフラッシュ

USBケーブルを使用してXIAO ESP32C3ボードをコンピュータに接続します。ボードがコンピュータによって適切に認識されていることを確認してください。

<!-- :::caution
Windowsコンピュータは使用しないでください。WindowsコンピュータではFlashボタンが常にグレーアウトされていることがわかります。
::: -->

コンピュータでESPLaunchPadウェブサイトを開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPLaunchPADに移動</font></span></strong>
    </a>
</div>

<br />

**Select Application**で**light**を選択し、**ESP Chipset Type**で**ESP32C3**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png" style={{width:800, height:'auto'}}/></div>

次に、右上角の**Connect**ボタンをクリックし、コンピュータに接続したXIAOデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

次に、下の**flash**ボタンをクリックし、ファームウェアのアップロードが完了するまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

ファームウェアのアップロードが完了すると、いくつかのアクション警告ボックスとQRコードが表示されます。**Done**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

次に、画面右側の**Reset Device**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

デバッグメッセージが表示されたら、すべてが順調に進んでいることを意味します。これでデバイスのバインディングに進むことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## ステップ 2. iPhone Home APPでコードをスキャンしてデバイスを追加する

デバイス追加のセクションでは、Appleのデバイスを例に説明します（手元にあるのがそれだけなので）。もし[Googleのデバイス](https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid)や[Amazonのデバイス](https://developer.amazon.com/en-US/alexa/matter)をお持ちの場合は、それらも使用できるかもしれません。

この記事のように、iPhone用のHome APPを使用してデバイスを追加したい場合は、ホームハブとしてAppleデバイスが必要です。現在Home Hubでサポートされているデバイスは、HomePodとApple TVです。詳細については[Appleのウェブサイト](https://support.apple.com/en-hk/102557)をお読みください。このチュートリアルでは、Home APPでHome Hubをすでに追加していることを前提としています。

Home APPはiOSデバイスにデフォルトでインストールされています。削除したことがある場合は、App Storeで[再度検索](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB)してダウンロードできます。

iPhoneでHome Appを開きます。画面右上の**+**ボタンをタップします。メニューから**Add or Scan Accessory**を選択します。iPhoneのカメラを使用して、XIAO ESP32C3に付属のQRコードをスキャンします。Home AppがMatter Accessoryを認識し、新しいアクセサリとして表示します。**Add to Home**をタップして、XIAO ESP32C3をHome Appに追加します。以下の詳細な操作画像を参照してください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Page 1</th>
      <th>Page 2</th>
      <th>Page 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Page 4</th>
      <th>Page 5</th>
      <th>Page 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Page 7</th>
      <th>Page 8</th>
      <th>Page 9</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## ステップ3. Home APPでXIAOを使用する

Home Appで、新しく追加されたXIAO ESP32C3アクセサリを見つけます。アクセサリをタップしてコントロールにアクセスします。明度スライダーを使用して、接続されたライトの明度を調整します。カラーアイコンをタップしてライトの色を変更します。様々な事前定義された色から選択するか、カラーピッカーを使用してカスタム色を作成できます。XIAO ESP32C3に接続されたライトは、Home Appで行われた調整にリアルタイムで応答します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

おめでとうございます！ESPLaunchPadを使用してXIAO ESP32C3ボードにライトファームウェアを正常にフラッシュし、iPhoneのHome Appとペアリングしました。これで、iPhoneから直接接続されたライトの明度と色を制御でき、パーソナライズされた便利な照明体験を作成できます。

Home Appで利用可能なより高度な機能とカスタマイズオプションを自由に探索し、XIAO ESP32C3ボードと互換性のある異なるライトアクセサリを実験してください。この基盤により、スマートホームセットアップをさらに拡張し、真に接続された自動化された生活空間を作成できます。

## トラブルシューティング

### Q1: Home APPでデバイスへの接続が長時間失敗する。

長時間デバイスへの接続に失敗する場合は、ファームウェアをアップロードした後にログメッセージが表示されることを確認してください。この時点で長時間デバイスをペアリングしていない場合、XIAOがスタンバイモードに入る可能性があります。その場合、XIAOのResetボタンを押すか、ESPLaunchPadのReset Deviceを使用してデバイスを再起動する必要があります。その後、再度追加を試してください。

それ以外に、ネットワークの問題がある可能性があります。XIAOとiPhoneが同じLAN下にあることを確認してください。そして両方とも2.4GHzネットワークに接続する必要があり、5GHzネットワークは使用できません。設定が完了した後、電話は他のネットワークを使用できます。しかし、XIAOは2.4GHzネットワークのみをサポートします。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
