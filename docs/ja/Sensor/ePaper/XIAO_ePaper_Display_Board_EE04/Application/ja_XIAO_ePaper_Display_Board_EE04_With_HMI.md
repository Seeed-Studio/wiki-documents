---
description: SenseCraft HMI プラットフォームを使用して XIAO EE04 ePaper ディスプレイのビジュアルインターフェース設計を可能にします。
title: SenseCraft HMI を使用した XIAO ePaper ディスプレイボード EE04
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /ja/EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# SenseCraft HMI 概要

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) は、Seeed Studio の強力なクラウドベースのインターフェース設計プラットフォームで、コーディングなしでスクリーンベースのデバイス用のプロフェッショナルなビジュアルインターフェースを作成できます。直感的なドラッグアンドドロップエディタ、事前構築されたテンプレート、AI 搭載の設計機能により、SenseCraft HMI はハードウェアを美しい情報ディスプレイ、ダッシュボード、デジタルサイネージ、コントロールパネルに簡単に変換できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi34.png" style={{width:1000, height:'auto'}}/></div>


## ハードウェア概要

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper ディスプレイボード EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### サポートされている ePaper

#### 24 ピンコネクタ

- [1.54 インチ ePaper - ドットマトリックス 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13 インチ ePaper - フレキシブルモノクロ 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13 インチ ePaper - 4 色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 インチ ePaper - モノカラー 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9 インチ ePaper - 4 色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2 インチ ePaper - モノカラー 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26 インチ ePaper - モノカラー 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83 インチ ePaper - モノカラー 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5 インチ ePaper - モノカラー 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.5 インチ ePaper - 3 色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ePaper ディスプレイボードを使用する際は、ePaper ディスプレイのタイプに応じてジャンパーを設定してください：

- 24 ピン ePaper ディスプレイの場合 → ジャンパーを 24 ピンに設定

⚠️ 間違ったジャンパー設定を使用すると、ePaper の表示が失敗したり、異常な内容が表示される可能性があります。電源を入れる前に、必ずジャンパーの位置を再確認してください。

:::

#### 50 ピンコネクタ

- [7.3 インチ Spectra6 ePaper](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
XIAO ePaper ディスプレイボードを使用する際は、ePaper ディスプレイのタイプに応じてジャンパーを設定してください：
- 50 ピン ePaper ディスプレイの場合 → ジャンパーを 50 ピンに設定

⚠️ 間違ったジャンパー設定を使用すると、ePaper の表示が失敗したり、異常な内容が表示される可能性があります。電源を入れる前に、必ずジャンパーの位置を再確認してください。

:::


## 入門ガイド

:::tip
現在、XIAO ePaper ディスプレイボード（ESP32-S3）- EE04 は、7.5 インチと 7.3 インチモデル用の HMI ファームウェアのみを提供しています。今後アップデートが提供される予定です。
:::

### SenseCraft HMI へのアクセス

ウェブブラウザで [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にアクセスし、アカウントを作成するか `Log in` してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi20.png" style={{width:1000, height:'auto'}}/></div>


### デバイスフラッシャー

トップメニューバーの `Tools` をクリックして、設定ページにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi33.png" style={{width:1000, height:'auto'}}/></div>

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="7.3 フルカラーディスプレイ 800*480" default>

***ステップ 1 .*** 7.3 "フルカラーディスプレイ 800*480 を `選択` します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi7.png" style={{width:1000, height:'auto'}}/></div>

***ステップ 2 .*** 最新の `firmware` を選択し、`Flash` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***ステップ 3 .*** ネットワーク設定のために ePaper 上の QR コードを `スキャン` します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi52.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

:::note
- ファームウェアの更新により、最適なパフォーマンスと最新機能へのアクセスが保証されます。デバイスを初めて使用する前にこの更新を実行することをお勧めします。

- デバイスがシャットダウンまたはスリープ状態の場合、ファームウェアを正常にフラッシュすることはできません。デバイスの正しいポートを選択してもフラッシュファームウェアの進行状況が表示されない場合は、ユニット上部の緑色のボタンを押してデバイスを起動し、再試行する必要があります。

- Full Flash：Full Flash を有効にすると、WiFi ネットワークやユーザーパネルデータを含む、デバイスに保存されているすべての情報がクリアされます。
:::
</TabItem>

<TabItem value="7.5-Inch ePaper Display" label="7.5 モノクロディスプレイ 800*480" default>

***ステップ 1 .*** 7.5 "モノクロディスプレイ 800*480 を `選択` します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi8.png" style={{width:1000, height:'auto'}}/></div>

***ステップ 2 .*** 最新の `firmware` を選択し、`Flash` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi15.png" style={{width:1000, height:'auto'}}/></div>

:::note

- ファームウェアの更新により、最適なパフォーマンスと最新機能へのアクセスが保証されます。デバイスを初めて使用する前にこの更新を実行することをお勧めします。

- デバイスがシャットダウンまたはスリープ状態の場合、ファームウェアを正常にフラッシュすることはできません。デバイスの正しいポートを選択してもフラッシュファームウェアの進行状況が表示されない場合は、ユニット上部の緑色のボタンを押してデバイスを起動し、再試行する必要があります。
:::

</TabItem>

</Tabs>

### ネットワーク設定

***ステップ 1 .*** スマートフォンまたはコンピューターからデバイスの Wi-Fi アクセスポイントに接続します。AP 名は画面に表示されます（パスワード不要）。ネットワーク認証情報は XIAO ePaper ディスプレイボード（ESP32-S3）- EE04 です

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***ステップ 2 .*** 接続後、お使いの電話は自動的に Wi-Fi 設定ページにリダイレクトされるはずです。されない場合は、ブラウザを開いて 192.168.4.1 にアクセスしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***ステップ 3 .*** ローカル Wi-Fi ネットワークを選択してパスワードを入力し、`Connect` をクリックします。

:::tip
XIAO ePaper ディスプレイボード（ESP32-S3）- EE04 は 2.4GHz WiFi ネットワークのみをサポートし、5GHz やその他の帯域はサポートしていません。
:::

***ステップ 4 .*** 接続が成功すると、デバイスは確認音を発し、ペアリングコード画面を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### SenseCraft プラットフォームへの接続

***ステップ 1 .*** ワークスペースセクションに移動し、`Add Device` をクリックします。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***ステップ 2 .*** デバイスに名前を付け、デバイスの画面に表示されているペアリングコードを入力して `Create` をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***ステップ 3 .*** ペアリングが完了すると、デバイスにあなたのデバイスが表示されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi15.png" style={{width:700, height:'auto'}}/></div>


## ダッシュボードの作成

XIAO ePaper ディスプレイボード（ESP32-S3）- EE04 は SenseCraft HMI プラットフォームとシームレスに統合され、デバイス用のコンテンツを作成およびカスタマイズするための強力なツールを提供します。ここでステップバイステップの操作を詳しく説明する代わりに、何が可能かを理解していただくために、プラットフォームの主要機能を探ってみましょう。

:::note
このデモンストレーションでは 7.3 インチ画面を例として使用しています。異なるサイズに交換する場合は、以下の点にご注意ください：

- 画面フレックスケーブルの向き（表と裏）を確認してください。
- ピンヘッダーの数が一致することを確認してください。
- 対応するサイズのカバーキャップを使用してください。
- フレックスケーブルを取り付ける際は、曲げすぎや過度の折り曲げを避けてください。
:::

### SenseCraft HMI 機能 SenseCraft HMI

#### AI ジェネレーター

人工知能にダッシュボードをデザインしてもらいましょう！表示したい情報を簡単に説明するだけで、AI ジェネレーターが自動的に魅力的で機能的なレイアウトを作成します。これは、手動でデザイン作業を行うことなく、天気表示、カレンダー、To-Do リスト、または情報パネルを素早く生成するのに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>

AI ジェネレーター機能について詳しく学ぶ。[詳細](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<br></br>

**ダッシュボードプレビュー**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3インチ ePaper ディスプレイ" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### ギャラリー

ギャラリー機能を使用して、XIAO ePaper Display Board(ESP32-S3) - EE04 をデジタルフォトフレームに変身させましょう。お気に入りの画像をアップロードすると、プラットフォームが ePaper ディスプレイ用に最適化します。カスタム遷移時間でスライドショーを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>

ギャラリー機能について詳しく学ぶ。[詳細](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<br></br>


**ダッシュボードプレビュー**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3インチ ePaper ディスプレイ" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### キャンバス

キャンバスを使用してダッシュボードを一から設計しましょう。ドラッグアンドドロップインターフェースで様々な要素を提供します：

- カスタマイズ可能なフォントとサイズのテキストブロック
- 画像プレースホルダー
- 時刻、日付、天気のウィジェット
- データ可視化ツール
- レイアウト整理のための図形と区切り線

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>

キャンバス機能について詳しく学ぶ。[詳細](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)

<br></br>

**ダッシュボードプレビュー**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3インチ ePaper ディスプレイ" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### RSS フィード統合


ダッシュボードに RSS フィードを追加して、お気に入りのニュースソース、ブログ、またはウェブサイトの最新情報を入手しましょう。RSS 機能により、複数のソースからヘッドライン、要約、または完全な記事を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>

RSS フィード統合について詳しく学ぶ。[詳細](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<br></br>

**ダッシュボードプレビュー**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3インチ ePaper ディスプレイ" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>

#### ウェブコンテンツ表示

人工知能にダッシュボードをデザインしてもらいましょう！表示したい情報を簡単に説明するだけで、AI ジェネレーターが自動的に魅力的で機能的なレイアウトを作成します。これは、手動でデザイン作業を行うことなく、天気表示、カレンダー、To-Do リスト、または情報パネルを素早く生成するのに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

ウェブコンテンツ表示について詳しく学ぶ。[詳細](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<br></br>

**ダッシュボードプレビュー**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3インチ ePaper ディスプレイ" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3インチ ePaper ディスプレイ</em></p>
</div>


## リファレンス & リソース

***SenseCraf HMI***

- [SenseCraft HMI 入門ガイド](https://sensecraft-hmi-docs.seeed.cc/en/)：SenseCraft HMI の使用方法をより深く理解し、その機能を最大限に活用してプロジェクトを向上させるのに役立ちます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
