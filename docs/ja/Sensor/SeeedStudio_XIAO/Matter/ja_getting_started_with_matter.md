---
description: EspressifのMatter Deployment Toolを使用してMatter Lightingを迅速に体験する方法の紹介。
title: XIAO ESP32を使用したMatterの迅速な開始
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/getting_started_with_matter
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32シリーズを使用したMatterの迅速な開始

:::tip
この記事はSeeed Studio XIAO ESP32開発Matterシリーズの第2チュートリアルです。まだESP-IDF環境を構成していない場合は、最初のチュートリアルを先にお読みください：

- **[Espressif ESP-IDFを使用したXIAOでの開発](https://wiki.seeedstudio.com/ja/xiao_idf)**

このチュートリアルはXIAO ESP32C3、XIAO ESP32S3に適用されます。XIAO ESP32C6については、GPIO8ピンがピンアウトされていないため、Espressifが提供するMatterの例は一時的に利用できません。
:::

スマートホーム技術の世界では、Matterは革命的な存在として登場し、デバイス間の通信と相互作用の方法を変革することを約束しています。Matterはオープンソースの標準化されたプロトコルであり、さまざまなメーカーのスマートホームデバイス間でシームレスな相互運用性を可能にします。共通の言語とフレームワークを提供することで、MatterはIoTデバイスの開発と展開を簡素化し、より接続性が高く使いやすいスマートホーム体験を創造することを目指しています。

開発者や愛好家として、Matterの可能性を探求し、自分自身のMatter対応デバイスを構築することに興味があるかもしれません。そこでXIAO ESP32シリーズとESPLaunchPadが登場します。XIAO ESP32シリーズ、特にXIAO ESP32C3、XIAO ESP32S3、XIAO ESP32C6は、コンパクトで強力な開発ボードであり、Matterデバイスを作成するための理想的なプラットフォームを提供します。これらのボードは堅牢な機能と広範な周辺インターフェースを備えており、Matterプロジェクトに必要なハードウェア基盤を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

開発プロセスを簡素化し、よりアクセスしやすくするために、Espressif SystemsはESPLaunchPadを導入しました。これは、ESP32デバイスのファームウェアフラッシングとプロビジョニングを簡素化する包括的なプラットフォームです。ESPLaunchPadはESP RainMakerエコシステムの力を活用し、スマートフォンアプリを使用してデバイスを簡単に構成および制御できるようにします。XIAO ESP32シリーズとESPLaunchPadを組み合わせることで、Matter開発を迅速に開始し、この変革的なプロトコルの利点を体験することができます。

このチュートリアルでは、ESPLaunchPadを使用してXIAO ESP32ボードにファームウェアを迅速にフラッシュし、QRコードを使用してiPhoneとペアリングするプロセスを案内します。この手順に従うことで、電話とXIAO ESP32デバイス間の接続を確立し、シームレスに制御および操作できるようになります。この実践的な体験を通じて、Matterの基本的な理解とスマートホームエコシステムにおけるその可能性を得ることができます。

このチュートリアルを通じて学ぶ内容は以下の通りです：
1. XIAO ESP32ボードをセットアップし、ファームウェアフラッシングの準備をする方法。
2. ESPLaunchPadを使用してMatterファームウェアをXIAO ESP32デバイスに簡単にフラッシュする方法。
3. QRコードを使用してXIAO ESP32ボードをiPhoneとペアリングする方法。
4. iPhoneアプリを使用してMatterデバイスを制御および操作する方法。
5. 実践的な設定でMatterの基本的な機能と能力を探る方法。

このチュートリアルを終える頃には、XIAO ESP32シリーズとESPLaunchPadを使用したMatterの実装についての確かな理解を得ることができます。Matter開発をさらに進め、この画期的なプロトコルの力を活用した革新的なスマートホームソリューションを作成するための知識とスキルを身につけることができます。

それでは、XIAO ESP32シリーズとESPLaunchPadを使用してMatterの世界へのエキサイティングな旅に出発しましょう！

## ソフトウェアの準備

以下は、このチュートリアルで使用するためにサポートされているシステムとバージョンの一覧です。

- **ホスト**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) または macOS 10.15 以降。

<!-- Matter の ESPLaunchPad は **Windows ではサポートされていません**。 -->

## ハードウェアの準備

このチュートリアルの最後では、XIAO ESP32シリーズを Matter エンドポイントとして Apple Home に追加し、Apple のエコシステムを通じて LED ストリップを制御する方法を紹介します。現在、このチュートリアルでは以下の XIAO モデルをサポートしており、コース内容に合わせて直接選択できます。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

XIAO に加えて、WS281x モデルのライトバーまたはライトビーズも必要です。現在、Espressif が提供するライトの例は単一のビーズのみをサポートしているため、ストリップまたはビーズのどちらを使用しても、点灯するのは1つのライトだけです。また、配線を簡単にするために Grove Base for XIAO を使用することをお勧めします。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

XIAO ESP32C3 を使用する場合は、LED ストリップをピン **D8** に接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

XIAO ESP32S3 を使用する場合は、LED ストリップをピン **D9** に接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

このチュートリアルでは、**XIAO ESP32C3** を例として使用し、ファームウェアの書き込み、デバイスの追加、その他の手順を概観します。

## ビデオチュートリアル

<div class="table-center">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ステップ 1. XIAO ESP32 の Matter ファームウェアをフラッシュする

USBケーブルを使用してXIAO ESP32C3ボードをコンピュータに接続します。ボードがコンピュータに正しく認識されていることを確認してください。

<!-- :::caution
Windowsコンピュータを使用しないでください。Windowsコンピュータではフラッシュボタンが常にグレーアウトされていることに気付くでしょう。
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

次に、右上の**Connect**ボタンをクリックし、コンピュータに接続されているXIAOデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

その後、下部の**flash**ボタンをクリックし、ファームウェアのアップロードを待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

ファームウェアのアップロードが完了すると、いくつかのアクションアラートボックスとQRコードが表示されます。**Done**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

次に、画面右側の**Reset Device**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

デバッグメッセージが表示されたら、すべてが非常に順調に進んでいることを意味します。これでデバイスのバインディングを進めることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## ステップ 2. iPhoneのHome APPを使用してコードをスキャンしてデバイスを追加する

デバイスを追加するセクションでは、Appleのデバイスを例として使用します（手元にあるのはこれだけです）。もし[Googleのデバイス](https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid)や[Amazonのデバイス](https://developer.amazon.com/en-US/alexa/matter)をお持ちの場合、それらを使用することもできます。

この記事のように、iPhoneのHome APPを使用してデバイスを追加したい場合は、Appleデバイスをホームハブとして使用する必要があります。現在Home HubでサポートされているデバイスはHomePodとApple TVです。詳細については[Appleのウェブサイト](https://support.apple.com/en-hk/102557)を参照してください。このチュートリアルでは、Home APPにホームハブをすでに追加していることを前提としています。

Home APPはiOSデバイスにデフォルトでインストールされています。もし削除したことがある場合は、[App Storeで再検索](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB)してダウンロードできます。

iPhoneでHome APPを開きます。画面右上の**+**ボタンをタップします。メニューから**Add or Scan Accessory**を選択します。iPhoneのカメラを使用してXIAO ESP32C3に付属のQRコードをスキャンします。Home APPはMatterアクセサリを認識し、新しいアクセサリとして表示します。**Add to Home**をタップしてXIAO ESP32C3をHome APPに追加します。以下の詳細な操作画像を参照してください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>ページ 1</th>
      <th>ページ 2</th>
      <th>ページ 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>ページ 4</th>
      <th>ページ 5</th>
      <th>ページ 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>ページ 7</th>
      <th>ページ 8</th>
      <th>ページ 9</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## ステップ 3. HomeアプリでXIAOを使用する

Homeアプリで、新しく追加されたXIAO ESP32C3アクセサリを見つけます。アクセサリをタップしてそのコントロールにアクセスします。明るさスライダーを使用して、接続されたライトの明るさを調整します。色アイコンをタップしてライトの色を変更します。あらかじめ定義された色から選択するか、カラーピッカーを使用してカスタムカラーを作成することができます。XIAO ESP32C3に接続されたライトは、Homeアプリで行った調整にリアルタイムで反応します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

おめでとうございます！ESPLaunchPadを使用してXIAO ESP32C3ボードにライトのファームウェアを正常に書き込み、iPhoneのHomeアプリとペアリングすることができました。これで、iPhoneから直接接続されたライトの明るさや色を制御でき、個別で便利な照明体験を作り出すことができます。

Homeアプリで利用可能なより高度な機能やカスタマイズオプションを自由に探索し、XIAO ESP32C3ボードと互換性のあるさまざまなライトアクセサリを試してみてください。この基盤をもとに、スマートホームのセットアップをさらに拡張し、真に接続された自動化された生活空間を作り出すことができます。

## トラブルシューティング

### Q1: Homeアプリでデバイスに長時間接続できない場合

デバイスに長時間接続できない場合、ファームウェアをアップロードした後にログメッセージが表示されていることを確認してください。この時点でデバイスを長時間ペアリングしていない場合、XIAOがスタンバイモードに入る可能性があります。その場合は、XIAOのリセットボタンを押すか、ESPLaunchPadの「Reset Device」を使用してデバイスを再起動する必要があります。その後、再度追加を試みてください。

それ以外にも、ネットワークの問題が原因である可能性があります。XIAOとiPhoneが同じLAN内にあることを確認してください。また、両方とも2.4GHzネットワークに接続されている必要があります（5GHzネットワークは不可）。設定が完了した後は、iPhoneは他のネットワークを使用できますが、XIAOは2.4GHzネットワークのみをサポートします。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社は、製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>