---
description: SenseCraft HMI を使用して、対応する Seeed ePaper ディスプレイデバイス向けのノーコードダッシュボードを設計およびデプロイします。
title: SenseCraft HMI を使う
keywords:
  - ePaper ディスプレイ
  - SenseCraft HMI
  - ノーコードダッシュボード
  - reTerminal
  - XIAO ePaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 06/15/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/EE04_with_hmi/
updatedAt: '2026-06-15'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCraft HMI を使う

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) は、ePaper ディスプレイデバイス向けの Seeed Studio 製ノーコードインターフェース設計プラットフォームです。ブラウザ上でダッシュボード、画像ギャラリー、カレンダー、RSS ページ、Web コンテンツページ、その他の常時表示情報画面を設計し、Wi-Fi 経由で対応デバイスにデプロイできます。

この Wiki は ePaper ディスプレイのアプリケーションガイドです。Seeed の ePaper デバイスから動作する SenseCraft HMI ページまでの最短ルートを説明し、1 枚の ePaper ディスプレイボードと 1 枚の ePaper スクリーンを使用したハードウェア構成を例として扱います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI を開く</font></span></strong>
    </a>
</div><br />

## このガイドを使うタイミング

SenseCraft HMI を対応する Seeed ePaper 製品と一緒に使い、次のワークフローをすばやく完了したいときに、このガイドを使用してください：

1. SenseCraft HMI ファームウェアを確認または書き込む。
2. デバイスを Wi-Fi に接続する。
3. デバイスを SenseCraft HMI ワークスペースに追加する。
4. 最初のページを ePaper ディスプレイにデプロイする。

アカウント設定、エディタの詳細、テンプレート、データウィジェット、リリースノートなどを含む完全なプラットフォームマニュアルについては、[公式 SenseCraft HMI ドキュメント](https://sensecraft-hmi-docs.seeed.cc/en/overview/)を参照してください。

## 始める前に

SenseCraft HMI を使用する前に、次の項目を準備してください：

- 対応する Seeed ePaper ディスプレイデバイス。
- SenseCraft アカウント。[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) のログインページから作成できます。
- 2.4 GHz の Wi-Fi ネットワーク。
- デバイスにファームウェア書き込みが必要な場合は USB-C データケーブル。
- SenseCraft HMI Web ツールからのシリアルポート書き込みをサポートするブラウザを実行しているコンピュータ。

:::tip
ePaper 製品ごとに使用する HMI ファームウェアビルドは異なります。必ず、お使いのデバイスと画面サイズに正確に一致するファームウェアを選択してください。
:::

## 公式 SenseCraft HMI ドキュメント

SenseCraft HMI には専用のドキュメントサイトがあります。ePaper ディスプレイのクイックスタートフローにはこの Wiki を使用し、プラットフォーム全体の手順には公式ドキュメントを使用してください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>トピック</th>
      <th>このトピックを使う場面</th>
      <th>リンク</th>
    </tr>
    <tr>
      <td>概要</td>
      <td>SenseCraft HMI が何であり、何ができるかを理解したいとき。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">概要を開く</a></td>
    </tr>
    <tr>
      <td>対応ハードウェア</td>
      <td>現在のデバイスおよび画面の対応リストを確認したいとき。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/" target="_blank" rel="noopener noreferrer">対応ハードウェアを開く</a></td>
    </tr>
    <tr>
      <td>はじめに</td>
      <td>公式のアカウント作成、ファームウェア、接続、デプロイのフローに従いたいとき。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/" target="_blank" rel="noopener noreferrer">はじめにを開く</a></td>
    </tr>
    <tr>
      <td>ワークスペースとキャンバス</td>
      <td>エディタレイアウト、ウィジェット、データソース、ページ作成フローについて学びたいとき。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">ワークスペースガイドを開く</a></td>
    </tr>
    <tr>
      <td>AI 生成</td>
      <td>テキストプロンプトから画像やページレイアウトを生成したいとき。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">AI 生成を開く</a></td>
    </tr>
    <tr>
      <td>リリースノート</td>
      <td>最新のプラットフォームおよびファームウェアの更新内容を確認したいとき。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/release_note/" target="_blank" rel="noopener noreferrer">リリースノートを開く</a></td>
    </tr>
  </table>
</div>

## ハードウェア構成の例

以下の手順では、**XIAO ePaper Display Board (ESP32-S3) - EE04** と **7.3" Spectra 6 ePaper display** を例として使用します。他の対応 Seeed ePaper デバイスも同じプラットフォームフローに従いますが、ファームウェアビルド、画面サイズ、ハードウェア構成は異なる場合があります。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board (ESP32-S3) - EE04</th>
      <th>7.3" Spectra 6 ePaper Display</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
この例は対応リストではありません。現在の対応ハードウェアおよびファームウェアのマトリクスについては、必ず [SenseCraft HMI Supported Hardware ページ](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/)を参照してください。
:::

## ステップ 1: HMI ファームウェアを確認または書き込む

最初のステップは、お使いの ePaper デバイスが SenseCraft HMI ファームウェアを実行していることを確認することです。

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E シリーズ" default>

reTerminal E シリーズは、箱から出してすぐに SenseCraft HMI と連携できるように設計されています。デバイスの電源を入れ、[ステップ 2: デバイスを Wi-Fi に接続する](#step-2-connect-the-device-to-wi-fi) に進んでください。

以前に別のファームウェアを書き込んだことがある場合は、[SenseCraft HMI デバイスページ](https://sensecraft.seeed.cc/hmi/device)を開き、デバイスモデルを選択して、画面の指示に従ってファームウェアを操作してください。

:::tip
保存されている Wi-Fi 情報、ペアリングデータ、既存のデバイスコンテンツを消去したい場合にのみ、**Full Flash** を使用してください。
:::

</TabItem>
<TabItem value="display-board" label="ePaper Display Board + Screen">

ディスプレイボードと別体の ePaper スクリーンを使用する場合は、ボードとパネルに対応した HMI ファームウェアを書き込んでください。

**ステップ 1.** [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) にサインインし、上部メニューから **Tools** を開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/256.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 2.** お使いのディスプレイに対応するファームウェアエントリを選択します。この例では、**7.3" Full-Color Display 800 x 480** エントリを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** お使いのハードウェアに対して利用可能な最新のファームウェアバージョンを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 4.** ボードを USB-C データケーブルでコンピュータに接続し、**Flash** をクリックします。

**Flash** をクリックすると、ブラウザにシリアルポート選択ウィンドウが表示されます。お使いのデバイスに対応するポートを選択してください。

:::tip
ポートが表示されない場合は、ボード上の **RESET** ボタンを押してから再試行してください。また、使用している USB-C ケーブルがデータ転送に対応していることを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 5.** ePaper ディスプレイがリフレッシュされ、セットアップ用 QR コードが表示されるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ステップ 2: デバイスを Wi-Fi に接続する

デバイスが HMI ファームウェアを実行していることを確認したら、ローカルの Wi-Fi ネットワークに接続します。

**ステップ 1.** ePaper スクリーンに表示されている Wi-Fi アクセスポイントに、スマートフォンまたはコンピュータを接続します。この一時的なアクセスポイントにパスワードは不要です。

アクセスポイント名はデバイスタイプによって異なります。別体スクリーン付きの ePaper Display Board の場合、名前は `ePaper DIY Kit-xxxx` のように表示されることがあります。reTerminal E シリーズデバイスの場合、名前は `reTerminal E100x-xxxx` のように表示されることがあります。どちらの場合も、`xxxx` は通常 MAC アドレスの末尾 4 文字を表します。

<div class="table-center">
  <table align="center">
    <tr>
      <th>ePaper Display Board + Screen</th>
      <th>reTerminal E シリーズ</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:360, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:360, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>AP 名の例: <code>ePaper DIY Kit-xxxx</code></td>
      <td>AP 名の例: <code>reTerminal E100x-xxxx</code></td>
    </tr>
  </table>
</div>

**ステップ 2.** ePaper スクリーン上の QR コードをスキャンします。設定ページが自動的に開かない場合は、ブラウザを開き `192.168.4.1` にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**ステップ 3.** ローカルの Wi-Fi ネットワークを選択し、パスワードを入力して **Connect** をクリックします。

:::tip
2.4 GHz の Wi-Fi ネットワークを使用してください。多くの ESP32-S3 ベースのデバイスは 5 GHz の Wi-Fi ネットワークには接続できません。
:::

**ステップ 4.** デバイスがネットワークに参加し、ペアコードが表示されるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## ステップ 3: デバイスを SenseCraft HMI に追加する

Wi-Fi の設定が完了したら、デバイスを SenseCraft HMI ワークスペースに追加します。

**ステップ 1.** **Device** ページを開き、**Add Device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/255.png" style={{width:700, height:'auto'}}/></div>

**ステップ 2.** デバイス名と ePaper 画面に表示されているペアコードを入力し、**Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** デバイスが Panel に表示されていることを確認します。

## ステップ 4: 最初のページをデプロイする

デバイスがペアリングされると、SenseCraft HMI から ePaper 画面へコンテンツをデプロイできます。

最も手早く始める方法は、既存のテンプレートまたは組み込みの作成ツールのいずれかを使用することです。エディタの詳細なフローについては、[公式入門ガイド](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/)に従ってください。

<div class="table-center">
  <table align="center">
    <tr>
      <th>機能</th>
      <th>用途</th>
      <th>公式ガイド</th>
    </tr>
    <tr>
      <td>Canvas</td>
      <td>テキスト、画像、ウィジェット、図形、データソースからページを作成します。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">ガイドを開く</a></td>
    </tr>
    <tr>
      <td>AI Generation</td>
      <td>テキストプロンプトから画像やレイアウトを生成します。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">ガイドを開く</a></td>
    </tr>
    <tr>
      <td>Gallery</td>
      <td>アップロードした画像やスライドショー形式のコンテンツを表示します。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">ドキュメントを開く</a></td>
    </tr>
    <tr>
      <td>RSS</td>
      <td>RSS フィードから見出しや記事コンテンツを表示します。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">ドキュメントを開く</a></td>
    </tr>
    <tr>
      <td>Web Content</td>
      <td>Web ページや Web ベースの情報パネルを ePaper ディスプレイ上にレンダリングします。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">ドキュメントを開く</a></td>
    </tr>
  </table>
</div>

以下の例は、7.3 インチ ePaper ディスプレイにデプロイされた SenseCraft HMI ページを示しています。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="SenseCraft HMI page on a 7.3 inch ePaper display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 インチ ePaper ディスプレイでの結果例</em></p>
</div>

## トラブルシューティング

### Q1: フラッシュ中にコンピュータがデバイスを検出しないのはなぜですか？

これは通常、ブラウザがシリアルポートにアクセスできないか、ケーブルが充電のみに対応しているか、ボードが正しい USB 状態になっていないことを意味します。

- データ転送に対応した USB-C ケーブルを使用してください。
- USB ハブ経由ではなく、デバイスをコンピュータに直接接続してください。
- **RESET** ボタンを押してから、ポート選択ウィンドウを再度開いてください。
- 現在使用しているブラウザが Web シリアルフラッシングをサポートしていない場合は、Chromium ベースのブラウザを試してください。

### Q2: デバイスが Wi-Fi に接続できないのはなぜですか？

最も一般的な原因は、サポートされていない Wi-Fi バンドを使用しているか、パスワードを誤って入力していることです。

- 2.4 GHz の Wi-Fi ネットワークを使用してください。
- Wi-Fi パスワードを注意深く再入力してください。
- セットアップ中はデバイスをルーターの近くに移動してください。
- 以前にデバイスを設定していた場合、保存されたネットワーク設定を消去して最初からやり直したいときにのみ **Full Flash** を使用してください。

### Q3: フラッシュ後に画面に期待したセットアップ用 QR コードが表示されないのはなぜですか？

ファームウェアが接続されている画面と一致していないか、画面が正しく接続されていない可能性があります。

- SenseCraft HMI Tools ページで、デバイスモデル、画面サイズ、ファームウェア項目を再確認してください。
- ePaper フレックスケーブルを再接続する前に、ボードの電源を切ってください。
- フレックスケーブルの向きとコネクタの種類がハードウェアに合っていることを確認してください。
- 一致するファームウェアを再度フラッシュし、ePaper のリフレッシュが完了するまで待ちます。

### Q4: デプロイしたページがエディタのプレビューと異なって見えるのはなぜですか？

ePaper パネルによって、解像度、色の表現能力、グレースケールの挙動、リフレッシュ特性が異なります。

- ターゲット画面と同じ解像度でページを作成してください。
- 画面解像度が低い場合は、非常に小さなテキストは避けてください。
- モノクロまたはグレースケール画面では、コントラストの高い色を使用してください。
- エディタとデプロイの詳細については、公式ドキュメントを確認してください。

## リソース

- [SenseCraft HMI プラットフォーム](https://sensecraft.seeed.cc/hmi)
- [SenseCraft HMI 公式ドキュメント](https://sensecraft-hmi-docs.seeed.cc/en/overview/)
- [SenseCraft HMI 対応ハードウェア](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/)
- [SenseCraft HMI 入門ガイド](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/)
- [SenseCraft HMI リリースノート](https://sensecraft-hmi-docs.seeed.cc/en/release_note/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
