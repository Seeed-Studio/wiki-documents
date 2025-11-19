---
description: SenseCraft HMI プラットフォームを使用して XIAO EE04 ePaper ディスプレイの視覚的インターフェース設計を可能にします。
title: XIAO ePaper Display Board EE04 と SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /ja/EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board EE04 と SenseCraft HMI

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) は、Seeed Studio の強力なクラウドベースのインターフェース設計プラットフォームで、コーディングなしでスクリーンベースのデバイス用のプロフェッショナルな視覚的インターフェースを作成できます。直感的なドラッグアンドドロップエディタ、事前構築されたテンプレート、AI 搭載の設計機能により、SenseCraft HMI はハードウェアを美しい情報ディスプレイ、ダッシュボード、デジタルサイネージ、コントロールパネルに簡単に変換できます。

***XIAO ePaper Display Board(ESP32-S3) - EE04*** の発売により、この機能はさらに拡張されます。SenseCraft HMI の力を基盤として、XIAO ePaper Display Board(ESP32-S3) - EE04 はプラットフォームとシームレスに統合され、ユーザーがカスタマイズされた視覚的インターフェースを簡単に設計・展開できます。この統合により、SenseCraft HMI エディタから直接、エレガントで低消費電力の ePaper ダッシュボード、情報パネル、スマートホームディスプレイを作成できます — 一行のコードも書く必要がありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>


## ハードウェア概要

このチュートリアルでは、XIAO ePaper Display Board (ESP32-S3) - EE04 と 7.3" Spectra™ 6 E-Ink ディスプレイを組み合わせて実習を行います。

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.3" spectra™ 6 E-Ink</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### サポートされる ePaper ディスプレイタイプ

この XIAO ePaper Display Board(ESP32-S3) - EE04 は、24ピンと50ピンの2つのコネクタオプションを提供し、さまざまな画面サイズをサポートします。以下のリストからディスプレイに合うものを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

#### 24ピンコネクタ

- [1.54インチ ePaper - モノクロ 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13インチ ePaper - フレキシブルモノクロ 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13インチ ePaper - 4色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9インチ ePaper - モノクロ 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9インチ ePaper - 4色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2インチ ePaper - モノクロ 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26インチ ePaper - モノクロ 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83インチ ePaper - モノクロ 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5インチ ePaper - モノクロ 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board(ESP32-S3) - EE04 を使用する際は、ePaper ディスプレイタイプに応じてジャンパーを設定してください：

- 24ピン ePaper ディスプレイの場合 → ジャンパーを24ピンに設定

⚠️ 間違ったジャンパー設定を使用すると、ePaper の表示が失敗したり、異常な内容が表示される可能性があります。電源を入れる前に、必ずジャンパーの位置を再確認してください。

:::

#### 50ピンコネクタ

- [7.3インチ Spectra6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
XIAO ePaper Display Board(ESP32-S3) - EE04 を使用する際は、ePaper ディスプレイタイプに応じてジャンパーを設定してください：
- 50ピン ePaper ディスプレイの場合 → ジャンパーを50ピンに設定

⚠️ 間違ったジャンパー設定を使用すると、ePaper の表示が失敗したり、異常な内容が表示される可能性があります。電源を入れる前に、必ずジャンパーの位置を再確認してください。

:::


## 入門ガイド

XIAO ePaper Display Board(ESP32-S3) - EE04 を使用して、独自のインタラクティブ HMI プロジェクトを素早く作成できます。
ボードを接続し、[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) を開いて、ブラウザで直接インターフェースの設計を開始するだけです — コーディングは不要です。

### SenseCraft HMI 登録

まず、右上角のボタンをクリックして [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) プラットフォームでアカウントを登録してください。


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>


### XIAO ePaper Display Board EE04 ファームウェア書き込み

登録完了後、メニューバーの **"Tools"** をクリックしてファームウェア書き込みセクションに入ります。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
現在、XIAO ePaper Display Board(ESP32-S3) - EE04 では以下の ePaper 画面がサポートされています：
- [1.54インチ ePaper - モノクロ 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13インチ ePaper - フレキシブルモノクロ 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13インチ ePaper - 4色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9インチ ePaper - モノクロ 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9インチ ePaper - 4色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2インチ ePaper - モノクロ 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26インチ ePaper - モノクロ 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83インチ ePaper - モノクロ 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5インチ ePaper - モノクロ 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.3インチ Spectra6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)
:::

このページでは、2つの ePaper ディスプレイモデル用のチュートリアルファームウェアが見つかります：**7.3" フルカラーディスプレイ (800×480)**

異なるサイズの ePaper ディスプレイを使用したい場合は、以下と同じ手順に従ってください。

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="7.3 フルカラーディスプレイ 800*480" default>

***ステップ 1 .*** 7.3 "フルカラーディスプレイ 800*480 を`選択`します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

***ステップ 2 .*** 最新のファームウェア `EE04_7_3_color_1.0.5` を選択します
:::tip
SenseCraft HMI プラットフォームは定期的に更新され、新しいファームウェアバージョンが随時リリースされます。

最高の互換性とパフォーマンスを確保するため、必ず最新のファームウェアバージョンを選択して使用してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***ステップ 3 .*** **Flash** をクリックして **7.3" フルカラーディスプレイ (800×480)** ファームウェアを XIAO ePaper Display Board (ESP32-S3) - EE04 にアップロードします。

Flash をクリックすると、プラットフォームはポート選択ウィンドウを表示します。XIAO ePaper Display Board (ESP32-S3) - EE04 に対応するポートを選択して接続を確立してください。

- Full Flash : Full Flash を有効にすると、Wi-Fi ネットワークやユーザーパネルデータを含む、デバイスに保存されたすべての情報がクリアされます。

:::tip
ポートが表示されない場合は、ボード上の RESET ボタンを押して接続を更新してください。
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

***ステップ 4 .*** ディスプレイ出力を確認します

ファームウェアが正常にフラッシュされた後、ePaper ディスプレイが短時間点滅し、以下の画面が表示されます。
2つのQRコードが表示され、それぞれをスキャンすると異なるページに移動します。

- User Guide : [wiki](https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page/)のHMI基本使用方法セクションに移動します。

- Wi-Fi Setup : ローカルネットワーク設定で、デバイスをSenseCraft HMIに接続するよう設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

設定はまだ完了していません。以下の手順に従って**Network Setup**を続行し、設定を完了してください。

</TabItem>

<!-- <TabItem value="7.5-Inch ePaper Display" label="7.5 Monochrome Display 800*480 "default>

***Setp 1 .*** `Select` the 7.5 "Monochrome Display 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi91.png" style={{width:1000, height:'auto'}}/></div>

***Setp 2 .*** Select the latest firmware `EE04_7_5_mono_1.0.5`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi6.png" style={{width:1000, height:'auto'}}/></div>

***Setp 3 .*** Click **Flash** to upload the **7.5 "Monochrome Display 800*480** firmware to the XIAO ePaper Display Board (ESP32-S3) - EE04.

After clicking Flash, the platform will prompt a port selection window. Choose the port corresponding to your XIAO ePaper Display Board (ESP32-S3) - EE04 to establish the connection.

- Full Flash : Enabling Full Flash clears all device stored information, including Wi-Fi networks and user panel datas.

:::tip
If no port appears, simply press the RESET button on the board to refresh the connection.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi66.png" style={{width:1000, height:'auto'}}/></div>


***Setp 4 .*** Check the Display Output

After the firmware has been successfully flashed, the ePaper display will briefly flicker and then show the following screen.
You will see two QR codes, each leading to a different page when scanned.

- User Guide : Navigate to the HMI Basic Usage section in the wiki (wiki)(https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page/)

- Wi-Fi Setup : Under Local Network Settings, set up your device to connect with SenseCraft HMI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

The configuration is not yet complete. Please continue following the steps below to **Network Setup** finish the setup.


</TabItem> -->

</Tabs>

### ネットワーク設定

***ステップ 1 .*** スマートフォンまたはコンピューターからePaper DIY KitのWi-Fiアクセスポイントに接続します。AP名は画面に表示されます（パスワード不要）。ネットワーク認証情報はXIAO ePaper Display Board(ESP32-S3) - EE04です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***ステップ 2 .*** 接続後、インク画面上のQRコードをスキャンすると、お使いの携帯電話が自動的にWi-Fi設定ページにリダイレクトされます。リダイレクトされない場合は、ブラウザを開いて192.168.4.1に移動してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***ステップ 3 .*** ローカルWi-Fiネットワークを選択してパスワードを入力し、`Connect`をクリックします。

:::tip
XIAO ePaper Display Board(ESP32-S3) - EE04は2.4GHz Wi-Fiネットワークのみをサポートし、5GHzやその他の帯域はサポートしていません。
:::

***ステップ 4 .*** 接続が完了すると、画面に対応するペアコードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### SenseCraftプラットフォームに追加

***ステップ 1 .*** Workspaceセクションに移動し、`Add Device`をクリックします。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***ステップ 2 .*** デバイスに名前を付け、デバイス画面に表示されているペアコードを入力して`Create`をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***ステップ 3 .*** ペアリングが完了すると、Workspace下にデバイス名が表示されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

XIAO ePaper Display Board (ESP32-S3) - EE04をデバイスに正常に接続できたので、SenseCraft HMIの基本機能を探索し始めることができます。

## ダッシュボードの作成

XIAO ePaper Display Board(ESP32-S3) - EE04は、デバイス用のコンテンツを作成およびカスタマイズするための強力なツールを提供するSenseCraft HMIプラットフォームとシームレスに統合されます。ここでは段階的な操作を詳しく説明する代わりに、プラットフォームの主要機能を探索して、何が可能かを理解していただきます。

:::note
このデモンストレーションでは7.3インチ画面を例として使用しています。異なるサイズに交換する場合は、以下の点にご注意ください：

- 画面フレックスケーブルの向き（表と裏）を確認してください。
- ピンヘッダーの数が一致することを確認してください。
- 対応するサイズのカバーキャップを使用してください。
- フレックスケーブルを取り付ける際は、曲げすぎや過度な折り曲げを避けてください。
:::

### SenseCraft HMI機能

次に、簡単な使用例でSenseCraft HMIの5つの基本機能を探索します。より詳細な情報については、以下の[SenseCraft HMI概要](https://sensecraft-hmi-docs.seeed.cc/en/)をクリックして、追加機能の詳細な説明をご覧ください。

#### AIジェネレーター

人工知能にダッシュボードをデザインしてもらいましょう！表示したい情報を簡単に説明するだけで、AIジェネレーターが自動的に魅力的で機能的なレイアウトを作成します。これは、手動でデザイン作業を行うことなく、天気表示、カレンダー、ToDoリスト、または情報パネルを素早く生成するのに最適です。

[AIジェネレーター](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)について詳しく学ぶ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>



<br></br>

**ePaper ディスプレイ結果**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### ギャラリー

ギャラリー機能でXIAO ePaper Display Board(ESP32-S3) - EE04をデジタルフォトフレームに変身させましょう。お気に入りの画像をアップロードすると、プラットフォームがePaperディスプレイ用に最適化します。カスタム遷移時間でスライドショーを作成できます。

[ギャラリー](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)について詳しく学ぶ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>


<br></br>


**ePaper ディスプレイ結果**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### キャンバス

キャンバスを使用してダッシュボードをゼロからデザインしましょう。さまざまな要素を提供するドラッグアンドドロップインターフェースです：

- カスタマイズ可能なフォントとサイズのテキストブロック
- 画像プレースホルダー
- 時刻、日付、天気のウィジェット
- データ可視化ツール
- レイアウト整理用の図形と区切り線

[キャンバス](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)について詳しく学ぶ


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**ePaper ディスプレイ結果**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### RSSフィード統合


RSSフィードをダッシュボードに追加することで、お気に入りのニュースソースやウェブサイトの最新情報を入手できます。RSS機能により、複数のソースからヘッドライン、要約、または完全な記事を表示できます。

ここでハイパーリンクをコピーする必要があります。以下の2つの推奨オプションがあります：

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

[RSSフィード統合](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)について詳しく学ぶ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**ePaper ディスプレイ結果**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### ウェブコンテンツ表示

人工知能にダッシュボードをデザインしてもらいましょう！表示したい情報を簡単に説明するだけで、AI ジェネレーターが自動的に魅力的で機能的なレイアウトを作成します。これは、手動でのデザイン作業なしに、天気表示、カレンダー、To-Do リスト、または情報パネルを素早く生成するのに最適です。

[Web Content Display](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)について詳しく学ぶ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

<br></br>

**ePaper ディスプレイ結果**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>


## リファレンス & リソース

***SenseCraf HMI***

- [SenseCraft HMI 入門ガイド](https://sensecraft-hmi-docs.seeed.cc/en/)：SenseCraft HMI の使用方法をより深く理解し、その機能を最大限に活用してプロジェクトを向上させるのに役立ちます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
