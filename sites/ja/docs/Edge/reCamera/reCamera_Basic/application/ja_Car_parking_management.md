---
title: reCamera を用いた AI 駐車スペース監視デモ
description: この Wiki では、reCamera を使用した AI ベースの駐車スペース監視デモを紹介し、リアルタイムな空き駐車枠検出と可視化を実現する方法を説明します。
keywords:
  - 駐車スペース検出
  - reCamera
  - AI エッジビジョン
  - スマートパーキング
slug: /ai_parking_slot_monitoring_demo_with_recamera
sku: 100029708,102991896
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 3
last_update:
  date: 2025-12-17
  author: John Xiang
createdAt: '2025-12-31'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/ai_parking_slot_monitoring_demo_with_recamera/
---

# reCamera を用いた AI 駐車管理デモ

## はじめに

駐車可能状況の把握は、**商業駐車場**、**集合住宅のガレージ**、**工業団地**、**キャンパスの駐車管理** などのシナリオで共通するニーズであり、運営者や利用者はどの駐車枠が使用中か、どの枠が空いているかを素早く把握したいと考えています。

本プロジェクトでは、以下のアプリケーション機能に焦点を当てた、すぐに使えるデモを提供します。

- **駐車スペース検出**: カメラ画角内の各駐車枠の占有状態を検出します。
- **手ぶれ補正 / 安定化**: 視覚的な揺れや短期的な検出のばらつきを低減し、結果をより安定させます。
- **カウントと集計**: 利用可能な駐車枠数など、現在の駐車状況を自動的に集計します。
- **画面上での可視化**: 検出結果と各枠の状態をプレビュー画面上に直接表示し、素早い確認とデモンストレーションを可能にします。


## ハードウェアの準備

この駐車管理デモを実行するには、**1 台の reCamera デバイス**だけが必要です。  
すべての reCamera バリエーションがサポートされています。

導入ニーズに応じて、**任意のバージョンの reCamera** を選択できます。

- reCamera 2002 シリーズ（Wi-Fi）
- reCamera Gimbal（パン・チルト）
- reCamera HQ PoE（Ethernet + PoE）

> **注意:**  
> PoE バージョンは Wi-Fi をサポートしておらず、PoE 対応スイッチを介して同一ローカルネットワークに接続する必要があります。

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## デモのセットアップ 
### ステップ 1: reCamera の設定

まず、公式の入門ガイドに従って reCamera の基本設定を完了してください: [reCamera Basic Configuration](https://wiki.seeedstudio.com/ja/recamera_getting_started/)

初期セットアップが完了したら、デバイスの電源がオンになっており、ネットワークに正しく接続されていることを確認します。  
その後、reCamera の管理インターフェースにアクセスし、**Node-RED workflow** ページに入ります。

下図のように Node-RED のワークフロー画面に正常にアクセスできれば、設定は正常に完了しています。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### ステップ 2: ワークフローファイルのダウンロードとアップロード

このデモでは、**事前設定済みのワークフローファイル**を提供しており、必要なノードと接続はすべてあらかじめ構成されています。  
Node-RED のノードを手動で作成したり設定したりする必要は**ありません**。

ワークフローファイルは **SenseCraft AI プラットフォーム** からダウンロードし、そのまま reCamera にインポートしてください。SenseCraft AI のチュートリアルについては、[Access SenseCraft AI reCamera Dashboards](https://wiki.seeedstudio.com/ja/recamera_getting_started/#access-recamera-preview-dashboard) を参照してください。  

ワークフローをインポートすると、次のようになります。

- すべての検出、可視化、データ処理ノードがすぐに使用可能になります。
- 追加のパラメータ設定は不要です。
- デプロイ後すぐにデモを起動できます。

ワークフローのアップロードとデプロイが正常に完了すると、reCamera はバックグラウンドで自動的に駐車スペース監視デモを実行し始めます。このワークフローは、**エンドツーエンドの駐車スペース監視パイプライン**として設計されており、すべて reCamera 上で動作します。高レベルのロジックは次のとおりです。

1. **ビデオ入力**  
   カメラが連続的にビデオフレームを取得し、AI 推論ノードに送信します。

2. **AI 検出**  
   検出モデルが駐車に関連する物体を識別し、クラスラベル（`free` / `car`）と信頼度スコア付きのバウンディングボックスを出力します。

3. **駐車枠の対応付けと安定化**  
   - 検出されたボックスは **IoU (Intersection over Union)** を用いてフレーム間でマッチングされます。
   - 各駐車枠は、一定数のフレームで一貫して検出された後にのみ *安定状態* に入ります。
   - 短時間の見逃しは許容され、誤った状態変化を防ぎます。

4. **駐車枠プール管理**  
   - 各駐車枠は、その位置、状態履歴、安定度カウンタとともに枠プールに保存されます。
   - 長時間消失した枠は自動的に削除されます。

5. **可視化レイヤー**  
   - バウンディングボックス、中心マーカー、ラベル、ステータスパネルが SVG オーバーレイとして描画されます。
   - 可視化は WebSocket を介してリアルタイムに更新されます。

6. **自動バックグラウンド実行**  
   一度デプロイすると、ワークフローは手動トリガーなしでバックグラウンドで自動的に実行されます。

検出結果の例を以下に示します。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test1.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test2.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test3.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test4.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test5.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test6.jpg" />
</div>


表示された結果から、次の要素を確認できます。

- **バウンディングボックス**  
  各駐車枠には検出された領域が対応付けられます。システムは AI モデルの出力に基づき、各領域を `free` または `car` として分類します。

- **中心マーカー（円）**  
  各 *安定した* 駐車枠の中心に円が描画されます。  
  - **緑の円** は空き枠を示します  
  - **赤い円** は使用中の枠を示します  

- **駐車枠ラベルと座標**  
  各枠には `Slot1`、`Slot2`、`Slot3` のようなラベルと、その中心座標 `(x, y)` が付与されます。  
  これらのラベルは、Node-RED を通じて指定した枠名リストからマッピングされます。

- **ステータスパネル（左上）**  
  オーバーレイパネルには全体のステータスが集約表示されます。
  - **Monitoring Slots**: 現在トラッキング中のすべての枠
  - **Free Slots**: 複数フレームでの検証を経て空きと確定した枠

本システムは、短時間の遮蔽、照明変化、検出ノイズによる結果のちらつきを防ぐため、マルチフレーム安定化メカニズムを採用しています。
:::note
現在の駐車スペース検出ロジックは、**横一列に並んだ 3 台分の隣接駐車枠** に特化して設計されています。このデモでは、**reCamera は駐車スペースの正面に設置され、車両に正対する形** で使用されており、真上からの俯瞰（鳥瞰）ビューは使用していません。  

その結果、駐車枠の対応付け、中心点の位置決め、および安定化ロジックは、**正面ビューの視点** に最適化されています。オーバーヘッドカメラや異なる駐車レイアウトで使用する場合は、駐車枠のマッピングや検出ロジックをそれに応じて調整する必要があるかもしれません。
:::


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。特定のカスタマイズ目標に関するガイダンスが必要な場合や、ワークフローをさらに拡張したい場合は、いつでもお気軽にお問い合わせください。お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまな形でサポートを提供いたします。私たちは、異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
