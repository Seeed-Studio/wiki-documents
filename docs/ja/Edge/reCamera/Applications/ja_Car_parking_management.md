---
title: reCamera を使用した AI 駐車スロット監視デモ
description: この Wiki では、reCamera を使用した AI ベースの駐車スロット監視デモを紹介し、リアルタイムの駐車可能性検出と可視化を実演します。
keywords:
    - Parking Slot Detection
    - reCamera
    - AI Edge Vision
    - Smart Parking
slug: /ja/ai_parking_slot_monitoring_demo_with_recamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2025-12-17
    author: John Xiang
---

# reCamera を使用した AI 駐車管理デモ

## はじめに

駐車可能性は、**商業駐車場**、**住宅ガレージ**、**工業団地**、**キャンパス駐車管理**などのシナリオにおいて一般的な要件であり、運営者とユーザーはどの駐車スペースが占有されているか、または利用可能かを迅速に把握したいと考えています。

このプロジェクトは、以下のアプリケーション機能に焦点を当てたすぐに使えるデモを提供します：

- **駐車スロット検出**: カメラビュー内の各駐車スペースの占有状況を検出します。
- **手ブレ防止 / 安定化**: 視覚的なジッターと短期的な検出変動を減らし、結果をより安定させます。
- **カウントと要約**: 利用可能なスロット数など、現在の駐車状況を自動的に要約します。
- **画面上の可視化**: 検出結果とスロット状況をプレビューインターフェースに直接表示し、迅速な検証とデモンストレーションを可能にします。


## ハードウェア準備

この駐車管理デモを実行するには、**reCamera デバイス 1 台**のみが必要です。  
すべての reCamera バリアントがサポートされています。

展開ニーズに基づいて、**任意のバージョンの reCamera** を選択できます：

- reCamera 2002 シリーズ (Wi-Fi)
- reCamera Gimbal (パン・チルト)
- reCamera HQ PoE (Ethernet + PoE)

> **注意:**  
> PoE バージョンは Wi-Fi をサポートしておらず、PoE 対応スイッチを介して同じローカルネットワークに接続する必要があります。

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

まず、公式の入門ガイドに従って reCamera の基本設定を完了してください：[reCamera 基本設定](https://wiki.seeedstudio.com/ja/recamera_getting_started/)

初期セットアップを完了した後、デバイスが電源に接続され、ネットワークに正しく接続されていることを確認してください。  
次に、reCamera 管理インターフェースにアクセスし、**Node-RED ワークフロー**ページに入ります。

以下に示すように Node-RED ワークフローインターフェースに正常にアクセスできれば、設定が正常に完了したことを意味します。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### ステップ 2: ワークフローファイルのダウンロードとアップロード

このデモは**事前設定されたワークフローファイル**を提供しており、必要なすべてのノードと接続がすでに設定されています。  
Node-RED ノードを手動で作成または設定する必要は**ありません**。

**SenseCraft AI プラットフォーム**からワークフローファイルをダウンロードし、reCamera に直接インポートしてください。Sensecraft AI チュートリアルについては、リンク [SenseCraft AI reCamera ダッシュボードへのアクセス](https://wiki.seeedstudio.com/ja/recamera_getting_started/#access-recamera-preview-dashboard) を参照してください。  

ワークフローをインポートした後：

- すべての検出、可視化、データ処理ノードが使用可能になります。
- 追加のパラメータ設定は必要ありません。
- デプロイ後すぐにデモを起動できます。

ワークフローが正常にアップロードされデプロイされると、reCamera は自動的にバックグラウンドで駐車スロット監視デモの実行を開始します。このワークフローは**エンドツーエンドの駐車スロット監視パイプライン**として設計されており、完全に reCamera 上で実行されます。高レベルのロジックは以下の通りです：

1. **ビデオ入力**  
   カメラは継続的にビデオフレームをキャプチャし、AI 推論ノードに送信します。

2. **AI 検出**  
   検出モデルは駐車関連オブジェクトを識別し、クラスラベル（`free` / `car`）と信頼度スコアを持つバウンディングボックスを出力します。

3. **スロット関連付けと安定化**  
   - 検出されたボックスは **IoU（Intersection over Union）** を使用してフレーム間でマッチングされます。
   - 各スロットは、固定フレーム数で一貫して検出された後にのみ*安定状態*に入ります。
   - 短期的な欠落は許容され、誤った状態変化を防ぎます。

4. **スロットプール管理**  
   - 各駐車スロットは、位置、状態履歴、安定性カウンターと共にスロットプールに保存されます。
   - 長時間消失したスロットは自動的に削除されます。

5. **可視化レイヤー**  
   - バウンディングボックス、中心マーカー、ラベル、ステータスパネルが SVG オーバーレイとしてレンダリングされます。
   - 可視化は WebSocket を介してリアルタイムで更新されます。

6. **自動バックグラウンド実行**  
   デプロイされると、ワークフローは手動トリガーなしでバックグラウンドで自動実行されます。

検出結果は以下に示されています：

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


表示された結果から、以下の要素を観察できます：

- **バウンディングボックス**  
  各駐車スロットは検出された領域に関連付けられています。システムは AI モデル出力に基づいて、各領域を `free` または `car` として分類します。

- **中心マーカー（円）**  
  各*安定した*駐車スロットの中心に円が描かれます。  
  - **緑の円**は空きスロットを示します  
  - **赤の円**は占有スロットを示します  

- **スロットラベルと座標**  
  各スロットには中心座標 `(x, y)` と共にラベル（例：`Slot1`、`Slot2`、`Slot3`）が付けられます。  
  これらのラベルは、Node-RED を介して提供するスロット名リストからマッピングされます。

- **ステータスパネル（左上角）**  
  オーバーレイパネルは全体的なステータスを要約します：
  - **監視スロット**: 現在追跡されているすべてのスロット
  - **空きスロット**: マルチフレーム検証後に空きと確認されたスロット

システムは、一時的な遮蔽、照明変化、または検出ノイズによって引き起こされるちらつき結果を避けるために、マルチフレーム安定化メカニズムを使用します。
:::note
現在の駐車スロット検出ロジックは、**横に並んだ 3 つの隣接する駐車スロット**専用に設計されています。このデモでは、**reCamera は駐車スペースの前に設置**され、上からの（鳥瞰図）ビューではなく、車両に直接向けられています。  

その結果、スロット関連付け、中心点位置決定、安定性ロジックは**正面ビュー視点**に最適化されています。オーバーヘッドカメラや異なる駐車レイアウトを使用する予定の場合、スロットマッピングと検出ロジックを適宜調整する必要があります。
:::


## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！特定のカスタマイズ目標に関するガイダンスが必要な場合や、ワークフローをさらに拡張したい場合は、お気軽にお問い合わせください。弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
