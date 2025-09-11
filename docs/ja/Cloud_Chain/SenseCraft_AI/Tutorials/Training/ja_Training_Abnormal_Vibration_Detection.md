---
description: 異常振動検出の使用方法を紹介します。
title: 異常振動検出
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /ja/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 08/14/2025
  author: lian
---

# 振動異常検出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

最小の病変が致命的な疾患につながるように、最も深刻な工学災害は、しばしば一見取るに足らない異常から始まります。これらの異常は実際には十分な警告と兆候を提供しています。振動はそのような重要な指標の一つです - 亀裂、詰まり、過負荷、摩耗はすべて独特の振動パターンを示します。私たちが選択すれば、振動信号を収集し、数学とアルゴリズムを巧みに使用してそれらを分析することで、破滅的で高コストな災害を防ぐことができます。

## はじめに

振動異常検出キットをご紹介します。これは、リアルタイムで異常な振動パターンを監視・識別するように設計された軽量インテリジェントソリューションです。最小限の訓練データでデバイスの正常な振動シグネチャを学習することで、機械的故障、摩耗、または障害の早期警告を提供し、破滅的な損傷が発生する前に防止します。産業機械の予知保全、車両の安全監視、橋梁/建物の構造健全性評価、製造/実験装置の精度確保、スマート家電/IoTデバイスでの異常検出に最適です。
<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

まずこのビデオをご覧になって、初期的な理解を得てください。

---

## 応用シナリオ

### 回転機器の予知保全

- ポンプ
- エアコンプレッサー
- ファン
- モーター
- ギアボックス

### 自動コンベアベルト

### HVAC/冷凍設備

- 冷凍コンプレッサー
- 冷却塔
- 換気モーター

### 車両・ロボティクス

- 農業用トラクター
- AGV/AMRシステム

### データセンター・建物HVACシステム

- チラーユニット
- 二次ポンプ
- 冷却塔
- 大規模UPS防音キャビネット

### 家庭用・コンシューマーグレード機器

- 洗濯機/乾燥機の不均衡アラート
- ガレージローラーの摩耗予測

---

## 動作原理

デモンストレーションビデオで示されているように、キットは3つのハードウェアモジュールで構成されており、SenseCraft AIプラットフォームに依存してファームウェアをダウンロードし、設定を行います。

- <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO with embedded battery management chip**</a>
- <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>

**キット:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

一貫した規則的な振動を持つオブジェクトに加速度センサーを取り付けます。そして、Groveケーブルを介して加速度センサーをMCU（この場合はXIAO ESP32-S3）に接続します。MCUは加速度センサーからの3軸データをリアルタイムで収集・分析します。短時間だけ正常な振動データを収集することで、システムはオブジェクトが異常な振動を経験しているかどうかを自動的に判定することを学習できます。

コンピューターに接続すると、センサーデータと検出結果がUSB（またはその他の方法）を介してSenseCraftコンソールに送信されます。コンソールでは、デバイスの現在の状態を監視できます。デバイスが異常状態にある場合、アラートが表示されます。さらに、コンソールでは学習した「正常振動」データを将来の使用のために保存できるだけでなく、異常が発生したときに信号を送るためのGPIO出力状態（LEDライトの起動など）を設定することもできます。

ここでは振動異常検出アルゴリズムの詳細な説明を提供します ---- **ジャイロスコープユークリッド距離異常検出（GEDAD）**アルゴリズムは、当初ジャイロスコープ用に開発されましたが、現在は3軸加速度センサーに拡張されており、元の名前を保持しています。GEDADアルゴリズムは2つのコアフェーズで構成されています：**学習**と**推論**。

---

### 2.1 データ取得と前処理

プロセスはデータ取得から始まります。振動データは3軸加速度センサーからI2C経由で収集され、循環バッファに格納されます。その後、データは係数を乗算し、別の係数ベータを加算する線形変換を受けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_1.png"/></div>

---

### 2.2 学習フェーズ

学習フェーズの目的は、測定デバイスの正常振動のベースラインテンプレートを確立することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

1. **テンプレート生成:** まず、完全な正常動作サイクルをカバーするサイズの3軸加速度データセットを収集し、テンプレートデータとして使用します。
2. **距離計算:** アルゴリズムは、テンプレートの各チャンネル内の同一位置から短いデータセグメントまたは*チャンク*と呼ばれるものをランダムにサンプリングします。各チャンクは、定義されたストライドで対応するチャンネルのテンプレート全体にスライドし、各位置でユークリッド（L2）距離を計算します。
3. **閾値計算:** 次に、これらの距離から外れ値をフィルタリングします（例：σ規則を使用；具体的には、指定された制限未満の値）。各チャンネルについて、残りの距離をソートして最小値を特定します。その後、これらの距離から各チャンネルの平均閾値を計算し、正常状態と異常状態の境界を定義します。
4. **パラメータ校正:** 最後に、追加パラメータ*K*を決定します。これは、後続の比較中にユークリッド距離が閾値を下回る連続インスタンスの中央値カウントを見つけることで行われます。このパラメータは、次のフェーズでの検出精度を向上させるために保存されます。

---

### 2.3 推論フェーズ

推論中、アルゴリズムはリアルタイムの3軸加速度データを確立されたテンプレートデータと比較し、正常な「指紋」と一致しない振動を特定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

- プロセスは訓練と似ていますが、ランダムにサンプリングされたチャンクの代わりに、リアルタイムデータセグメントを比較に使用します。
- リアルタイムデータセグメントがテンプレートの一部と十分に類似している場合（つまり、ユークリッド距離が閾値を下回る場合）、振動は正常と判断されます。
- 逆に、テンプレート全体との比較後も距離が閾値を上回ったままの場合、システムは振動を異常としてフラグを立てます。

実際の計算はより複雑で、チャネル間の異常スコアの融合とパラメータ*K*の使用を含みます。

---

### 2.4 まとめと今後の課題

要約すると、アルゴリズムの利点は以下の通りです：

- 高速な「訓練」速度
- 低い計算オーバーヘッド
- 低消費電力組み込みデバイスへの適合性
- 訓練に必要な正常データが少量

また、**高速フーリエ変換（FFT）**を使用して周波数成分を分析し、時間-周波数特性と平均振幅を考慮するなどの工学的最適化も探求しています。今後の作業では、アルゴリズムの精度、効率性、堅牢性のさらなる向上に焦点を当てます。

---

## 3. 使用方法

### 3.1 準備

#### 3.1.1 ハードウェア

- キット - **キット：** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>
- 1本のUSB-Cデータケーブル（デバイスの電源供給とデータ伝送用）
- 1台のコンピュータ（SenseCraft AIへのアクセス用）
- 監視対象オブジェクト（例：モーター、家電製品）

#### 3.1.2 SenseCraft AIログイン

1. ブラウザを開き、<a href="https://sensecraft.seeed.cc/ai/home" target="_blank">**SenseCraft AI**</a>の公式ウェブサイトにアクセスし、アカウントとパスワードでログインします（アカウントをお持ちでない場合は、まず登録プロセスを完了する必要があります）。
2. XIAO ESP32S3 Senseデバイスのワークスペースに入り、「Vibration」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

3. 接続を確認します。接続が良好で、ファームウェアが正しいものであれば、デバイス情報が表示されます。デバイスの現在のファームウェアがVisionファームウェアまたはその他のファームウェアの場合、インターフェースのファームウェア書き込みボタンを通じて、直接Vibration Anomaly Detection（VAD）ファームウェアに更新できます。

---

### 3.2 SenseCraft AIのUI

プラットフォームのUIは4つのコア領域に分かれています：

1. **デバイス情報エリア：** インターフェースの上部に位置し、デバイスID、デバイス名、デバイスファームウェアバージョン、デバイスのデフォルト電源オン推論、およびGPIOピン制御を表示します。
2. **パラメータと収集設定エリア：** アルゴリズムパラメータのウィンドウサイズの設定と正常振動の収集機能を含みます。
3. **振動データ可視化エリア：** リアルタイム振動加速度データを波形グラフで表示します（横軸は時間軸、縦軸は加速度値）。
4. **検出出力エリア：** 正常および異常ステータスの検出結果（それぞれ0と1で表現）と、異常振動の波形グラフ（横軸は時間軸、縦軸は0〜1の範囲での異常表示）を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

---

### 3.3 詳細な操作プロセス

#### 3.3.1 デバイス接続と初期化

1. データケーブルを介してXIAO ESP32S3 Senseをコンピュータに接続します。
2. SenseCraft AIインターフェースの「Connect」ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>
3. システムは自動的にデバイス情報を照会するコマンドを送信し、デバイスは対応する応答情報を返します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>
4. デバイス情報が表示されたら、パラメータ設定に進みます：
   - ユーザーはウィンドウサイズを設定できます。デフォルト値は192で、範囲は192〜768です。この時点では、デフォルト値で開始してください。後のステップで検出結果が不安定すぎる場合は、このパラメータを調整するために戻ってきてください。パラメータが最適値であることを確認した後、最後に「Save」ボタンをクリックすることを忘れないでください。
:::tip note
ウィンドウが小さすぎると振動パターンの学習が不十分になる可能性があり、ウィンドウが大きすぎると推論時間が増加します。
:::
---

#### 3.3.2 正常振動データ収集（モデル訓練）

- 「Collect Normal Vibration」ボタンをクリックして、正常振動データの収集（訓練）を開始します。
- 収集が完了するまで待ち、「Normal vibration collection succeeded」メッセージが表示されることを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

- 収集した正常振動データを保存します。「Save」ボタンは、パラメータと学習した「モデル」の両方をMCUのフラッシュに保存し、電源サイクル間で持続させます。

---

#### 3.3.3 異常振動検出

- 「Detect」をクリックしてリアルタイム検出を開始します。
- 検出結果を確認します。プラットフォームはリアルタイム振動データと検出結果（正常または異常）を表示します。「異常」結果は潜在的な異常が検出されたことを意味します。ユーザーは異常パターンに対する信頼度に応じて、直接使用するか、さらなる検証を行うかを選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>
- 満足できる場合はデプロイメントステップに進み、そうでなければパラメータ調整に戻るか、正常データを再収集してください。

---

#### 3.3.4 デプロイメント

現在、ファームウェアはGPIOで結果状態を出力できます。必要に応じてGPIO番号を選択し、「Default Power-On Inference Mode」を有効にすることを忘れないでください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>
**GPIOの使用方法：**  
現在、XIAO ESP32S3 SenseのGPIO 1、2、3、21（LED）、41、42が利用可能です。異常状態のアクティブレベルを設定できます。例えば、LEDを点灯するように設定することで、異常な振動が検出されたときにLEDが点灯します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace8.png"/></div>
---

### 3.4 パラメータ調整ガイド

ユーザーに2つのコアアルゴリズムパラメータ、**ウィンドウサイズ**と**異常閾値**を提供しています。これらのパラメータは、異常検出アルゴリズムのリアルタイム性能、堅牢性、精度に直接影響します。

#### 3.4.1 ウィンドウサイズ

ウィンドウサイズは、アルゴリズムの学習フェーズで正常状態のテンプレートを確立するために各チャンネルから収集されるサンプルデータポイントの数として定義されます。これはアルゴリズムの効果における重要な要因です。

- 範囲：192から768の整数。デフォルト値は192です。デフォルトのセンサーサンプリングレート100Hzを仮定すると、この範囲は1.92から7.68秒の時間窓に対応します。
- 調整原理：ウィンドウサイズは、正常条件下でのオブジェクトの少なくとも1つの完全な振動サイクルを包含する必要があります。オブジェクトの振動周期が長い場合、ウィンドウサイズを増加させる必要があります。その結果、アルゴリズムの学習と推論時間が増加し、その逆も同様です。

通常、振動周期は正常条件下での「異常振動検出」エリアの「加速度」チャートを観察することで決定できます。まず、全体的な曲線が規則的で繰り返しパターンを示すかどうかを観察します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

- パターンがある場合、チャート下のスライダーを使用して1つまたは2つの完全な振動サイクルを分離します。その後、曲線上にマウスを置いて2つの類似点間の時間差を計算することで周期の長さを決定できます。
- 周期を識別するのが困難な場合、ウィンドウサイズを最大値768に設定して、アルゴリズムがすべての潜在的な振動パターンを捉えることを確保できます。
:::tip note
一般的に、「周期」とは、オブジェクトの運動、発達、または変化中に固定間隔で繰り返される特性を指します。
:::

---

#### 3.4.2 異常閾値

異常閾値は、現在の状態が異常かどうかを判断するためにアルゴリズムが使用する値として定義されます。これはアルゴリズムの精度と堅牢性に直接影響します。

- 範囲：0.0から1.0の浮動小数点数。デフォルト値は0.5です。
- 調整原理：異常閾値は特定のアプリケーション要件に基づいて調整する必要があり、最適値の決定には多くの場合複数の実験が必要です。

一般的に、異常閾値が低いと偽陽性が多くなり、閾値が高いと偽陰性が生じる可能性があります。センサーをより敏感にするには異常閾値を下げ、逆に誤報を減らすには閾値を上げることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

センサー感度を向上させるために、二分探索法を使用してより効率的に最適な異常閾値を見つけることができます。手順は以下の通りです：

- 初期異常閾値を0.5に設定し、出力を観察します。状態がまだ「正常」の場合、閾値が高すぎる可能性があります。
- 異常閾値を上限（0.5）の半分、つまり0.25に下げ、再び出力を観察します。
- 状態が「正常」のままの場合、現在の値を新しい上限として設定し、そうでなければ新しい下限として設定します。
- 次に、異常閾値を現在の上限と下限の中点に調整し、出力を観察します。
- 出力が「異常」の場合、現在の閾値が低すぎるため、この値を新しい下限として設定します。出力が「正常」の場合、この値を新しい上限として設定します。
- 現在の異常閾値で望ましい感度レベルで一貫して「正常」状態を生成するまで、ステップ4と5を繰り返します。

---

#### 3.4.3 その他の考慮事項

現在のアルゴリズムの実装に基づくと、3つの回転自由度の変化が異常検出の主要な決定要因であり、並進自由度の変動は最小限の影響しか与えません。したがって、デバイスの配置環境が変化する場合（特にその向き）、新しい学習プロセスを開始し、パラメータを再調整することがしばしば必要になります。パラメータ調整を通じて望ましい検出精度を達成するのが困難な場合、パラメータを再調整する前に正常振動状態を再学習することも試すことができます。

---

## オープンソース

<a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab: AcousticsLabは音響と振動解析のためのクロスプラットフォームフレームワークです。</a>

私たちのアルゴリズムとファームウェアは現在オープンソースです。問題や提案がございましたら、お気軽に<a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a>を提出してください。

---

## 今後の展開

今後予定されている機能には以下が含まれます：

- 複数の最先端/最新の深層学習ベースの振動異常検知アルゴリズムを追加。
- WiFi + MQTTによるデータと結果レポートをサポート。
- より多くのMCUと加速度センサーをサポート。

興味のある機能の提案や<a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>の提出をお気軽にお寄せください。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
