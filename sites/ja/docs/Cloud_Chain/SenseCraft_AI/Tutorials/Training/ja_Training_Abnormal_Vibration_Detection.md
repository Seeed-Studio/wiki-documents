---
description: 異常振動検出の使用方法を紹介します。
title: 異常振動検出
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /ja/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
---

# 振動異常検出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

最小の病変が致命的な疾患につながるように、最も深刻な工学的災害は、しばしば一見取るに足らない異常から始まります。振動は重要な指標です—亀裂、詰まり、過負荷、摩耗はすべて独特の振動パターンを示します。

このチュートリアルでは、**振動異常検出キット**を紹介します。これは、リアルタイムで異常な振動パターンを監視・識別するために設計された軽量インテリジェントソリューションです。最小限の訓練データでデバイスの正常な振動シグネチャを学習し、機械的故障の早期警告を提供します。

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. 準備

異常検出を開始する前に、以下のハードウェアとソフトウェア環境が準備されていることを確認してください。

### ハードウェア要件

このソリューションは3つのハードウェアモジュールで構成されています。

- **MCU:** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- **拡張ボード:** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO**</a>（内蔵バッテリー管理付き）
- **センサー:** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>
- **ケーブル:** USB-Cデータケーブル1本
- **対象オブジェクト:** 一定の規則的な振動を持つデバイス（例：モーター、ファン）。

**完全なキットを入手:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

### ソフトウェアセットアップ

1. ブラウザを開き、<a href="https://sensecraft.seeed.cc/ai/home" target="_blank">**SenseCraft AI**</a>にアクセスします。
2. アカウントでログインします（アカウントをお持ちでない場合は登録してください）。
3. **XIAO ESP32S3 Sense**ワークスペースに入り、**"Vibration"**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. ステップバイステップガイド

以下の手順に従って、デバイスに「正常な」振動を認識させ、異常を検出するように訓練します。

### ステップ1: 接続と初期化

1. **組み立て:** Grove Shieldを介して加速度計をXIAO ESP32-S3に接続します。センサーを対象オブジェクトにしっかりと取り付けます。
2. **接続:** XIAO ESP32S3をUSB経由でコンピューターに接続します。SenseCraft AIインターフェースの**"Connect"**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **確認:** システムがデバイス情報を表示します。
    * *注意:* ファームウェアが正しくない場合は、インターフェースのburnボタンを使用して**Vibration Anomaly Detection (VAD) firmware**に更新してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### ステップ2: 設定

接続すると、パラメータ設定エリアが表示されます。
* **Window Size:** デフォルトは**192**です。今のところこのデフォルト値を保持してください。
    * *ヒント:* ウィンドウが小さすぎると学習不足につながり、大きすぎると推論時間が増加します。後で調整できます。

### ステップ3: 訓練（正常データの収集）

デバイスは「正常」がどのような感じかを学習する必要があります。

1. 対象オブジェクトが**正常状態**で動作していることを確認します。
2. **"Collect Normal Vibration"**をクリックします。
3. 成功メッセージ「Normal vibration collection succeeded」を待ちます。
4. **"Save"**をクリックします。これによりモデルがMCUのフラッシュメモリに保存されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### ステップ4: 異常検出

1. **"Detect"**をクリックしてリアルタイム監視を開始します。
2. **検出出力エリア**を観察します：
    * **Normal:** 振動パターンが学習したモデルと一致します。
    * **Abnormal:** 潜在的な異常が検出されました（アラートが表示されます）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### ステップ5: デプロイメントとGPIO

異常が発生したときに外部ハードウェアをトリガーするようにデバイスを設定できます。

1. **GPIO Configuration**セクションを見つけます。
2. ピン（例：Pin 21のLED）を選択し、異常状態のアクティブレベルを設定します。
3. **"Default Power-On Inference Mode"**を有効にします。これにより、デバイスはコンピューター接続なしでバッテリー電源で自動的に動作できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. パラメータ調整ガイド

検出が敏感すぎる（誤報）または十分に敏感でない場合は、パラメータを調整する必要があります。

### 調整用UI概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

UIはデータの可視化に役立ちます：
1.  **デバイス情報:** 上部エリア。
2.  **設定:** パラメータと収集設定。
3.  **可視化:** リアルタイム波形（時間 vs. 加速度）。
4.  **出力:** 検出結果（正常は0、異常は1）。

### 主要パラメータ

#### 1. Window Size
分析の1「サイクル」のサンプルポイント数を定義します。
* **デフォルト:** 192（100Hzで約1.92秒）。
* **調整方法:** ウィンドウは少なくとも1つの完全な振動サイクルをカバーする必要があります。波形チャートを使用して機械の振動周期を測定してください。機械の振動が遅い場合は、Window Sizeを増加させます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Anomaly Threshold
検出の感度を定義します。
* **範囲:** 0.0から1.0（デフォルト: 0.5）。
* **調整方法:**
    * **誤報が多すぎる場合?** 閾値を上げます（例：0.6または0.7）。
    * **異常を見逃す場合?** 閾値を下げます（例：0.3または0.4）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. アルゴリズムと理論

*このセクションでは、「Collect」と「Detect」ボタンの背後にある技術を説明します。基本的な使用には必須ではありません。*

システムは**Gyroscope Euclidean Distance Anomaly Detection (GEDAD)**アルゴリズムを使用し、3軸加速度計に適応させています。これは2つのフェーズで構成されています：

### フェーズ1: 学習
アルゴリズムは正常振動のベースラインテンプレートを確立します。
1.  **テンプレート生成:** 正常な3軸加速度データのセットを収集します。
2.  **閾値計算:** アルゴリズムはテンプレート全体でデータの「チャンク」をスライドさせ、ユークリッド（L2）距離を計算します。その後、統計的に正常な変動と異常を分離する閾値を決定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### フェーズ2: 推論
リアルタイム検出中、入力データは学習したテンプレートと比較されます。
* リアルタイムデータのユークリッド距離がテンプレートに対する閾値を下回る場合、**正常**です。
* 距離が閾値を上回り続ける場合、**異常**としてフラグが立てられます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**利点:**
* 高速な訓練速度。
* 低い計算オーバーヘッド（ESP32S3に適している）。
* 訓練に最小限のデータが必要。

---

## 5. 応用シナリオ

振動異常検出キットは、さまざまな分野での予知保全と安全監視に最適です：

* **産業:** ポンプ、エアコンプレッサー、ファン、モーター、ギアボックス。
* **HVAC:** 冷凍コンプレッサー、冷却塔。
* **ロボティクス:** AGV/AMRシステム、農業用トラクター。
* **データセンター:** チラーユニット、サーバー冷却。
* **コンシューマー:** 洗濯機のバランスアラート、ガレージドア機構。

---

## オープンソースとサポート

**ソースコード:** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

私たちのアルゴリズムとファームウェアはオープンソースです。WiFi + MQTTレポートやFFT分析などの機能を積極的に開発しています。<a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a>や<a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>をお気軽に提出してください。

**技術サポート:**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
