---
description: 異常振動検知の使用方法を紹介します。
title: 異常振動検知
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
createdAt: '2025-08-14'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection/
---

# 振動異常検知

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

ごく小さな病変が致命的な病気につながるのと同じように、最も深刻な工学的災害は一見取るに足らない異常から発生することがよくあります。振動は重要な指標であり、破断、詰まり、過負荷、摩耗などはすべて固有の振動パターンとして現れます。

このチュートリアルでは、**Vibration Anomaly Detection Kit** を紹介します。これは、異常な振動パターンをリアルタイムで監視・識別するために設計された軽量なインテリジェントソリューションです。最小限の学習データで装置の正常な振動シグネチャを学習し、機械故障の早期警告を提供します。

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. 準備

異常検知を開始する前に、以下のハードウェアおよびソフトウェア環境が準備できていることを確認してください。

### ハードウェア要件

このソリューションは 3 つのハードウェアモジュールで構成されます。

- **MCU:** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- **拡張ボード:** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO**</a>（バッテリーマネジメント内蔵）
- **センサ:** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>
- **ケーブル:** USB-C データケーブル 1 本
- **対象物:** 一定の規則的な振動を持つ装置（例：モーター、ファン）。

**キット一式を入手:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

### ソフトウェアセットアップ

1. ブラウザを開き、<a href="https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home" target="_blank">**SenseCraft AI**</a> にアクセスします。
2. アカウントでログインします（未登録の場合は登録してください）。
3. **XIAO ESP32S3 Sense** ワークスペースに入り、**"Vibration"** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. ステップバイステップガイド

以下の手順に従って、装置に「正常」な振動を学習させ、異常を検知できるようにします。

### ステップ 1: 接続と初期化

1. **組み立て:** 加速度センサを Grove Shield 経由で XIAO ESP32-S3 に接続します。センサを対象物にしっかりと固定します。
2. **接続:** XIAO ESP32S3 を USB でコンピュータに接続します。SenseCraft AI のインターフェースで **"Connect"** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **確認:** システムにデバイス情報が表示されます。
    * *Note:* ファームウェアが正しくない場合は、インターフェース上の書き込みボタンを使用して **Vibration Anomaly Detection (VAD) firmware** に更新してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### ステップ 2: 設定

接続が完了すると、パラメータ設定エリアが表示されます。
* **Window Size:** 既定値は **192** です。まずはこのまま使用してください。
    * *Tip:* ウィンドウが小さすぎると学習が不十分になり、大きすぎると推論時間が長くなります。後から調整できます。

### ステップ 3: 学習（正常データの収集）

装置は「Normal」がどのような状態かを学習する必要があります。

1. 対象物が **正常状態** で動作していることを確認します。
2. **"Collect Normal Vibration"** をクリックします。
3. "Normal vibration collection succeeded" という成功メッセージが表示されるまで待ちます。
4. **"Save"** をクリックします。これによりモデルが MCU のフラッシュメモリに保存されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### ステップ 4: 異常検知

1. **"Detect"** をクリックしてリアルタイム監視を開始します。
2. **検知出力エリア** を確認します：
    * **Normal:** 振動パターンが学習済みモデルと一致しています。
    * **Abnormal:** 潜在的な異常が検知されます（アラートが表示されます）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### ステップ 5: デプロイと GPIO

異常発生時に外部ハードウェアをトリガーするようにデバイスを設定できます。

1. **GPIO Configuration** セクションを見つけます。
2. ピンを選択し（例：Pin 21 上の LED）、異常状態でのアクティブレベルを設定します。
3. **"Default Power-On Inference Mode"** を有効にします。これにより、バッテリー駆動時にコンピュータへ接続しなくても自動的に動作します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. パラメータ調整ガイド

検知が過敏すぎる（誤警報が多い）、あるいは鈍感すぎると感じる場合は、パラメータを調整する必要があります。

### 調整用 UI の概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

この UI により、データを可視化できます：
1.  **Device Info:** 画面上部エリア。
2.  **Settings:** パラメータおよび収集設定。
3.  **Visualization:** リアルタイム波形（時間 vs 加速度）。
4.  **Output:** 検知結果（Normal は 0、Abnormal は 1）。

### 主要パラメータ

#### 1. Window Size
1 回の解析「サイクル」に含まれるサンプル点数を定義します。
* **既定値:** 192（100Hz の場合、約 1.92 秒）。
* **調整方法:** ウィンドウは少なくとも 1 周期分の振動をカバーする必要があります。波形チャートを使用して機械の振動周期を測定してください。機械の振動が遅い場合は Window Size を大きくします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Anomaly Threshold
検知の感度を定義します。
* **範囲:** 0.0 ～ 1.0（既定値: 0.5）。
* **調整方法:**
    * **誤警報が多すぎますか？** しきい値を上げます（例：0.6 や 0.7 に設定）。
    * **異常を見逃しますか？** しきい値を下げます（例：0.3 や 0.4 に設定）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. アルゴリズムと理論

*このセクションでは "Collect" と "Detect" ボタンの背後にある技術について説明します。基本的な利用だけであれば読み飛ばしても構いません。*

本システムは、3 軸加速度センサ向けに適応させた **Gyroscope Euclidean Distance Anomaly Detection (GEDAD)** アルゴリズムを使用しています。これは次の 2 つのフェーズで構成されます：

### フェーズ 1: 学習
アルゴリズムは正常な振動のベースラインテンプレートを構築します。
1.  **テンプレート生成:** 正常な 3 軸加速度データのセットを収集します。
2.  **しきい値計算:** アルゴリズムはテンプレート上を「チャンク」でスライドさせながらユークリッド距離（L2 距離）を計算します。その後、正常なばらつきと異常とを分離するしきい値を統計的に決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### フェーズ 2: 推論
リアルタイム検知中は、入力データが学習済みテンプレートと比較されます。
* リアルタイムデータのユークリッド距離がテンプレートに対してしきい値未満であれば、**Normal** と判定されます。
* 距離がしきい値を上回り続ける場合は、**Abnormal** としてフラグが立てられます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**利点:**
* 学習が高速。
* 計算負荷が低い（ESP32S3 に適合）。
* 学習に必要なデータ量が少ない。

---

## 5. 適用シナリオ

Vibration Anomaly Detection Kit は、さまざまな分野での予知保全および安全監視に最適です：

* **産業分野:** ポンプ、エアコンプレッサー、ファン、モーター、ギアボックス。
* **HVAC:** 冷凍コンプレッサー、冷却塔。
* **ロボティクス:** AGV/AMR システム、農業用トラクター。
* **データセンター:** チラー装置、サーバー冷却。
* **コンシューマ:** 洗濯機のバランスアラート、ガレージドア機構。

---

## オープンソースとサポート

**ソースコード:** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

私たちのアルゴリズムとファームウェアはオープンソースです。現在、WiFi + MQTT レポーティングや FFT 解析などの機能を積極的に開発しています。ぜひ <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> や <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a> を送ってください。

**技術サポート:**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
