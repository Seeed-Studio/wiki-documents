---
description: SenseCraft HMI - Seeed のノーコード・ビジュアルインターフェース設計プラットフォームを使用して、reTerminal E シリーズからすべての XIAO ePaper ドライバボードまで、互換性のあるあらゆる Seeed ePaper 製品を駆動します。
title: SenseCraft HMI を使う
keywords:
  - ePaper ディスプレイ
  - SenseCraft HMI
  - reTerminal
  - EE02
  - EE03
  - EE04
  - EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCraft HMI を使う

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) は、Seeed Studio が提供する強力なクラウドベースのインターフェース設計プラットフォームで、画面を備えたデバイス向けに、**コードを書くことなく**プロフェッショナルなビジュアルインターフェースを作成できます。直感的なドラッグ＆ドロップエディタ、あらかじめ用意されたテンプレート、AI を活用したデザイン機能により、SenseCraft HMI はあなたのハードウェアを、美しい情報表示、ダッシュボード、デジタルサイネージ、あるいはコントロールパネルへと変身させます。

このガイドは、**すべての互換性のある Seeed ePaper 製品**で SenseCraft HMI を使用するための唯一の信頼できる情報源です。ファームウェアのステップで一度だけハードウェアを選択すれば、その後のワークフローはすべてのデバイスで同一です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

## 対応ハードウェア

SenseCraft HMI は、以下の Seeed ePaper 製品で箱から出してすぐに動作します。reTerminal E シリーズには HMI ファームウェアがあらかじめ書き込まれており、XIAO ePaper Display Board（EE02–EE05）ファミリは、ブラウザ上の SenseCraft HMI Tools ページから書き込みを行います。

<div class="table-center">
  <table align="center">
    <tr>
      <th>製品ライン</th>
      <th>開封直後の体験</th>
      <th>対象スクリーン</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>HMI ファームウェアをプリインストール済み — 電源を入れてペアリングするだけ</td>
      <td>一体型 7.5" / 7.3" / 10.3" / 13.3" パネル</td>
    </tr>
    <tr>
      <td><strong>EE02</strong></td>
      <td>SenseCraft HMI Tools ページから書き込み</td>
      <td>13.3" Spectra 6（カラー）</td>
    </tr>
    <tr>
      <td><strong>EE03</strong></td>
      <td>SenseCraft HMI Tools ページから書き込み</td>
      <td>10.3" モノクロ（高速リフレッシュ）</td>
    </tr>
    <tr>
      <td><strong>EE04</strong></td>
      <td>SenseCraft HMI Tools ページから書き込み</td>
      <td>24 ピン / 50 ピン汎用 — 多くのサイズに対応</td>
    </tr>
    <tr>
      <td><strong>EE05</strong></td>
      <td>SenseCraft HMI Tools ページから書き込み</td>
      <td>24 ピン / 50 ピン汎用（最新）</td>
    </tr>
  </table>
</div>

この記事では、最も多くの機能をカバーしているため、主なハードウェア例として **XIAO ePaper Display Board (ESP32-S3) – EE04** と **7.3" Spectra 6** ディスプレイの組み合わせを使用します。すべての手順は、各タブで示すわずかな違いを除き、他の製品にも同様に適用できます。

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.3" Spectra 6 E-Ink</th>
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

### EE04 / EE05 — 対応スクリーン一覧

XIAO ePaper Display Board EE04 / EE05 は、**24 ピン** と **50 ピン** の 2 種類のコネクタオプションを備え、幅広いスクリーンサイズをサポートします。以下の一覧から、お使いのディスプレイに対応するものを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

<Tabs groupId="hmi-connector">
<TabItem value="24pin" label="24 ピンコネクタ" default>

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip 電源を入れる前にジャンパを **24 Pin** に設定する
誤ったジャンパ設定を使用すると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。
:::

</TabItem>
<TabItem value="50pin" label="50 ピンコネクタ">

- [7.3-Inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>

:::tip 電源を入れる前にジャンパを **50 Pin** に設定する
誤ったジャンパ設定を使用すると、ePaper が表示されなかったり、異常な内容が表示されたりする可能性があります。電源を入れる前に、必ずジャンパ位置を再確認してください。
:::

</TabItem>
</Tabs>

## ステップ 1: SenseCraft HMI アカウントを登録する

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) ページ右上のボタンをクリックして、アカウントを作成します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 2: デバイスに HMI ファームウェアを入れる

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E シリーズ" default>

reTerminal **E1001 / E1002 / E1003 / E1004** には、SenseCraft HMI ファームウェアがあらかじめ書き込まれています。デバイスの電源を入れ、ステップ 3（ネットワーク設定）までスキップしてください。

以前に別のファームウェア（たとえば TRMNL）を書き込んでいる場合は、SenseCraft HMI Tools ページから HMI に戻すことができます。

1. [SenseCraft HMI デバイスページ](https://sensecraft.seeed.cc/hmi/device) を開き、使用している reTerminal モデルを選択します。
2. 最新の **HMI** ファームウェアビルドを選択します（デバイスをクリーンな状態にしたい場合は **Full Flash** を使用します）。
3. デバイスを USB-C でコンピュータに接続し、画面のシリアルポートに関する指示に従います。

</TabItem>
<TabItem value="ee04" label="EE02 / EE03 / EE04 / EE05">

登録後、上部メニューバーの **Tools** をクリックして、ファームウェア書き込みセクションに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
XIAO ePaper Display Board EE04 / EE05 は、以下の ePaper スクリーンを標準でサポートしています。

- [1.54-inch ePaper - Monochrome 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch ePaper - Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch ePaper - Quadruple Color 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9-inch ePaper - Monochrome 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [2.9-inch ePaper - Quadruple Color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [4.2-inch ePaper - Monochrome 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch ePaper - Monochrome 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch ePaper - Monochrome 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [7.3-inch Spectra 6 ePaper 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

EE02 は 13.3" Spectra 6 専用、EE03 は 10.3" 高速リフレッシュ対応モノクロ専用として出荷されます。
:::

書き込みの流れは、どのスクリーンサイズでも同一です — 使用するパネルに合ったファームウェアビルドを選択してください。以下の例では、**7.3" フルカラー・ディスプレイ（800×480）** を使用します。

**ステップ 1.** Tools ページで **7.3" Full-Color Display 800×480** の項目を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 2.** 最新のファームウェアを選択します（例：`EE04_7_3_color_1.0.5`）。

:::tip
SenseCraft HMI プラットフォームは定期的にアップデートされています。常に最新バージョンのファームウェアを選択して、最高の互換性と性能を確保してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** **Flash** をクリックしてファームウェアを書き込みます。

Flash をクリックすると、プラットフォームにポート選択ウィンドウが表示されます。お使いのデバイスに対応するポートを選択してください。

- **Full Flash**：Wi-Fi ネットワークやユーザーパネルデータを含む、保存されているすべての情報を消去します。

:::tip
ポートが表示されない場合は、ボード上の **RESET** ボタンを押して接続を更新してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 4.** ディスプレイ出力を確認します。

書き込み後、ePaper ディスプレイが一瞬ちらつき、下図の QR コード画面が表示されます。2 つの QR コードは、それぞれユーザーガイドと Wi-Fi セットアップページにリンクしています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

この時点では、まだ設定は完了していません。続けて、以下の **ステップ 3：ネットワーク設定** に進んでください。

</TabItem>
</Tabs>

## ステップ 3：ネットワーク設定

Wi-Fi ペアリングの手順は、HMI ファームウェアを実行しているすべての Seeed ePaper 製品で共通です。

**ステップ 1.** スマートフォンまたはコンピュータを、デバイスの Wi-Fi アクセスポイントに接続します。AP 名はデバイスの画面に表示されます（パスワード不要）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

**ステップ 2.** 接続後、ePaper 画面上の QR コードをスキャンします。スマートフォンは自動的に Wi-Fi 設定ページへリダイレクトされるはずです。自動で開かない場合は、ブラウザを開き `192.168.4.1` にアクセスしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**ステップ 3.** お使いのローカル Wi-Fi ネットワークを選択し、パスワードを入力してから **Connect** をクリックします。

:::tip
XIAO ESP32-S3 ファミリーは **2.4 GHz Wi-Fi** ネットワークのみをサポートします。5 GHz ネットワークには対応していません。
:::

**ステップ 4.** 接続が完了すると、画面にペアコードが表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## ステップ 4：デバイスを SenseCraft HMI に追加する

**ステップ 1.** **Workspace** セクションに移動し、**Add Device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

**ステップ 2.** デバイスに名前を付け、デバイス画面に表示されているペアコードを入力し、**Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** ペアリングが完了すると、Workspace にデバイスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

これで、SenseCraft HMI でダッシュボードのデザインを開始できます。

## ダッシュボードの作成

SenseCraft HMI プラットフォームは、コンテンツの設計とカスタマイズのための強力なツールを提供します。5 つのコアとなる構成要素を以下に説明します。完全なリファレンスについては、[SenseCraft HMI documentation](https://sensecraft-hmi-docs.seeed.cc/en/) を参照してください。

:::note
以下のデモでは 7.3 インチ画面を使用しています。別のサイズを使用する場合は、次の点に注意してください：

- 画面のフレックスケーブルの向き（表裏）を確認する。
- ピンヘッダの本数がデバイスのコネクタと一致していることを確認する。
- 対応するサイズのカバーキャップを使用する。
- フレックスケーブルを取り付ける際に、曲げすぎたり過度に折り曲げたりしない。
:::

### AI Generator

AI にダッシュボードのデザインを任せましょう。表示したい情報を説明すると、AI Generator が魅力的で機能的なレイアウトを自動生成します。天気表示、カレンダー、ToDo リスト、インフォメーションパネルなどを、手作業でデザインすることなく作成するのに最適です。

[AI Generator について詳しく見る →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>

**ePaper ディスプレイ結果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### Gallery

ePaper ディスプレイをデジタルフォトフレームに変身させましょう。お気に入りの画像をアップロードすると、プラットフォームが ePaper 用に最適化します。カスタムの切り替え時間を設定したスライドショーも作成できます。

[Gallery について詳しく見る →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>

**ePaper ディスプレイ結果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### Canvas

Canvas を使って、ダッシュボードをゼロから設計します。ドラッグ＆ドロップのインターフェースで、次のような機能を提供します：

- フォントやサイズをカスタマイズできるテキストブロック
- 画像プレースホルダー
- 時刻、日付、天気用のウィジェット
- データ可視化ツール
- レイアウト構成用の図形や区切り線

[Canvas について詳しく見る →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>

**ePaper ディスプレイ結果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### RSS フィード連携

RSS フィードをダッシュボードに追加して、お気に入りのニュースソースや Web サイトの最新情報を常にチェックしましょう。複数のソースから見出し、要約、または記事全文を表示できます。

おすすめのソース：

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

[RSS フィード連携について詳しく見る →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>

**ePaper ディスプレイ結果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

### Web コンテンツ表示

任意の Web URL を ePaper ダッシュボード上に直接埋め込むことができます。まだネイティブの HMI プラグインがないツールやページを、そのまま表示するのに最適です。

[Web コンテンツ表示について詳しく見る →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

**ePaper ディスプレイ結果：**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3-Inch ePaper Display</em></p>
</div>

## リファレンス & リソース

- [Getting Started with SenseCraft HMI (official docs)](https://sensecraft-hmi-docs.seeed.cc/en/) — SenseCraft HMI の使い方をより深く理解し、その機能を最大限に引き出してプロジェクトを強化しましょう。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
