---
description: 配線不要のホーム/オフィス無痛エネルギー監視
title: Home Assistantを使用した非侵襲的AC電力監視
keywords:
    - CT
    - energy consumption monitoring
    - Home Assistant
slug: /ja/non_invasive_ct_energy_consumption
sidebar_position: 2
last_update:
    date: 08/18/2025
    author: Spencer
---

## 1. ソリューション概要

このガイドでは、一般的なハードウェアモジュールとHome Assistantスマートホームプラットフォームを使用して、**非侵襲的**AC電力計測システムを実装するソリューションについて説明します。

### 目標と価値

現代の細かなエネルギー管理とスマートホーム自動化の追求において、従来の壁面メーターやスマートプラグには明確な制限があります。標準的な電力メーターは、家庭の電力消費量の「粗粒度」の合計のみを提供します。スマートプラグは個々の機器を監視できますが、その「侵襲的」な性質（デバイスとコンセントの間に配置する必要がある）により、特に直接配線された機器や手の届きにくい場所にある機器での使用が制限されます。

このソリューションは、これらの問題点に対処するように設計されています。その核となる価値は以下にあります：

- **非侵襲的展開**: 電源を切断したり、既存の電気回路を変更したりする必要がありません。対象機器の**単一**電源線にスプリットコア変流器（CT）を単純にクランプするだけで測定を開始できます。これにより、設置の複雑さと安全リスクが大幅に軽減されます。
- **細かな計測**: エアコン、ウォーターポンプ、3Dプリンターなどの特定のAC機器に対して「デバイスレベル」のエネルギー監視を実現します。電流、電力、総エネルギー消費量を含む正確なリアルタイムデータを取得します。
- **低コスト・高統合**: コスト効率の高い**XIAO ESP32-C6**モジュールと標準CTセンサーを利用します。ESPHomeを介してHome Assistantなどの主流IoTエコシステムとシームレスに統合し、データ可視化、自動化、リモートアラートを可能にします。

### 対象読者

このガイドは主に以下の方を対象としています：

- **スマートホーム愛好家**: 高消費電力または重要な機器からのエネルギーデータをHome Assistantに統合し、高度な自動化と省エネ戦略を実現したい個人。
- **開発者・システムインテグレーター**: クライアントにカスタムのデバイスレベルエネルギー監視ソリューションを提供する必要がある専門家。
- **メーカー・小規模ワークショップ運営者**: 3Dプリンターやレーザーカッターなどの機器の動作状況とエネルギー消費量を監視したいユーザー。
- **エネルギー監査員・保守エンジニア**: 「エネルギーバンパイア」（高待機電力）を発見するためのエネルギー監査を実行したり、予防保守のために異常電流監視を使用したりする専門家。

### 期待される成果

ユーザーは物理世界からデジタルアプリケーションまでの完全なデータパイプラインを構築し、以下を実現します：

1. **リアルタイムデータ監視**: Home AssistantまたはMQTT互換プラットフォームで、1つまたは複数の対象デバイスの瞬時電流、有効電力、総エネルギー消費量をリアルタイムで表示します。
2. **ローカルまたはクラウドデータ**: Wi-Fi経由で監視データをローカルサーバー（Home Assistantを実行するRaspberry PiやNUCなど）またはクラウドベースのIoTプラットフォームに安全に送信します。
3. **インテリジェント自動化**: 正確な電力と電流データに基づいてHome Assistantで強力な自動化シナリオを作成します。例えば：
    - 3Dプリンターの電力消費が1分以上5W未満に低下した場合、印刷が完了したと判断し、自動的に電源をオフにしてモバイル通知を送信します。
    - ウォーターポンプの電流が通常範囲を一貫して上回っている場合、潜在的な停止に対するアラートを送信し、モーター損傷を防ぎます。

### システムアーキテクチャ

![xx](https://mermaid.ink/svg/pako:eNqNVc1u00AQfpXVcgHJblLbcVwLVTIuKEiEFhp-BOGwsceJhb0brTdNS-kLoEpFgDhwgR54AC4IibfhBeARGHvd1C6_e9rZnfnmm_nG60MaiRioT6eSzWfk1t0xJ7iKxUQfzMSigMdj-uP9yQcyEDl0tpMkjYBc53upFDwHrsb0iY4qV5xKiFQqOBldOz8NQsT49u6UWFb3PlpkRyxBtgNhD3GrVK--khGTU1AkmM-zlPEIrk5kZ_PyTti5IdN4Cp0gvNKKRkjT3KxB9DHwWG8ulJQLniohq0yvX5ChNlM-JQMm4yWT8B8FhaMq_s0x7sgu8EJITTHMWD6HmKA_IwWiZkCWCNGm-_BmsK0JnFZ7bCfI6QEZgoIa6Prujm2ZodsOxGxlnWXM36vkoJZCPq2SHL8kt7VJRpLxIk-LAgtqAUuxwNSa02fyIDVvpORudbZy-1OqSHAlRVbFvv34_csJCfUJCXE6Lsr823YOAj1jp9WMkQD5FYpxpVuxmzOp9M1OxlQiZN7uSsyK2USgepr_J3KvAElulskTdjY8QzFJUQwcqc4DmLQBBoEenzOc3xash4uYa-bm8zENF1JieZX4KPOYPkdxtGOlqFl56UaWYlYfz_DOaHSldNXt1u56XwfcEhHLzuQqPQdBk0OUsaLYgqQms6sOsKQkzTL_UpKAC65RYOefQmk6uGrTXKaxmvnWfP8CTP0xNHHATewkWeE4juetzHOcXwjVA9di1E28BiPPi6J_M6qnqV1Z0m1VxtgfcRpodY8MfBsa3Wo6hCOj0qrZheZ9rUyztOb1IDBWE9PiTQ18T9OY-kouwKA5yJyVJj0sw8dUzSDHV8bHbcxKmcf8CGPmjD8SIj8Lw-zTGfUTlhVoLeYxU7CVMvzo8tUpjmAMMhQLrqi_7lYY1D-k-9Q3e-vOWt_uez3X7dme3e0b9ID6tr2xZq13-xt9y-451kbvyKDPqqzra57juF1rw7Ec1-3bPc-gEJeNGep_RPWrOPoJefADGA)

**データフロー説明:**

1. **物理センシング**: 対象機器が正常に動作し、電源コード（具体的には**ライブ線**）を通してAC電流を引き込みます。
2. **信号取得**: CTセンサーがこの単一電源線に非侵襲的にクランプされます。電磁誘導により、主電流に正確に比例する小さな二次電流を生成します。
3. **A/D変換・計算**: XIAO Wi-FiエネルギーメーターがCTセンサーからのアナログ信号を受信します。オンボードエネルギー計測チップセットがこの信号をサンプリングして変換し、電流、電力、その他のメトリクスのRMS値を計算します。
4. **無線送信**: オンボードの**ESP32-C6**チップがローカルWi-Fiネットワークに接続し、ESPHomeネイティブAPIまたはMQTTプロトコルを使用して処理されたデータを公開します。
5. **データ消費・アプリケーション**: Home Assistantサーバーがこのデータを購読し、センサーエンティティとして表示し、履歴を記録し、自動化と通知をトリガーするために使用します。

## 2. ハードウェア選択

詳細な仕様については、製品wikiをご覧ください：[Seeed Studio 2チャンネル Wi-Fi AC エネルギーメーター Wiki](/ja/2_channel_wifi_ac_energy_meter)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/2_channel_wifi_ac_energy_meter/">
            <strong><span><font color={'FFFFFF'} size={"4"}> 製品Wikiを見る 🖱️</font></span></strong>
    </a>
</div>

### 非侵襲型変流器（CT）

CTセンサーは、私たちの「非侵襲型」測定システムの基盤です。電気回路の「聴診器」のような役割を果たし、導体と直接物理的に接触することなく電流の流れを「聞く」ことができます。

#### 動作原理

**電磁誘導**の原理で動作し、変圧器と同じ仕組みです。

1. **一次巻線**: CTセンサーを電力線にクランプすると、その線自体が1回巻き（N=1）の「一次巻線」として機能します。
2. **磁界**: 交流電流が線を流れると、その周りに交流磁界が発生します。
3. **二次巻線**: CTセンサー内部にはフェライトコアと細く巻かれた銅線のコイルがあります。これが「二次巻線」を形成します。
4. **誘導電流**: 一次線からの交流磁界がコアを通過し、ファラデーの電磁誘導の法則により、二次巻線に小さいながらも正確に比例したAC電流が誘導されます。

**主な利点**: 全プロセスは磁気結合のみで行われ、物理的な電気接続はありません。これにより「非侵襲型」で安全かつ便利になります。

#### 設置ガイドライン

不適切な設置は、不正確な読み取りやゼロ読み取りの最も一般的な原因です。

:::danger 安全第一！

CTセンサーをクランプまたは調整する前に、対応する回路ブレーカーをオフにする必要があります。電圧テスターを使用して、対象の線が完全に無電圧であることを確認してください。安全は常に最優先事項です。

:::

- **方向性**

  CTセンサーのケーシングには通常、矢印（->）またはP1 -> P2マークがあり、電流の「正」の流れ方向を示しています。正確な有効電力読み取り（力率を考慮）のために、すべてのセンサーが電流源に対して同じ方向に設置されていることを確認してください（例：電流がP1からP2に流れる）。

- **クランプ位置**

  これは最も重要で、エラーが起こりやすいステップです。

  - **正しい方法**: CTセンサーが絶縁線の**1本だけ**—**活線**または**中性線**のいずれかにクランプされていることを確認してください。
  - **間違った方法**: 複数の導体（活線、中性線、接地線）を含む電力ケーブル全体の外装にCTセンサーをクランプしないでください。
  - **理由**: 単相AC回路では、活線と中性線の電流は任意の瞬間において大きさは等しく方向は反対です。両方をクランプすると、それらの磁界は完全に相殺されます。正味の磁界はゼロになり、センサーは電流を誘導せず、常にゼロ読み取りになります。

  **図:**

  ```plaintext
  // CORRECT Installation
  // Clamp around the Live wire ONLY
         Power Cable
  ------------------ L (Live) ----->>> Current Flow
  /`---\
  | CT | --[ CLAMPED ]--
  \`---/
  ------------------ N (Neutral)----
  
  // INCORRECT Installation
  // Clamped around the entire cable
         Power Cable Jacket
  /`------------------`\
  |    --- L --->      |
  /`---\  (Magnetic fields cancel out)
  | CT | --[ CLAMPED ]--
  \`---/  <--- N ---      |
  \`------------------`/
  // Result: Reading is 0
  ```

### XIAO 2チャンネル Wi-Fi AC エネルギーメーター

CT センサーが「感覚器官」であるとすれば、XIAO Wi-Fi エネルギーメーターはシステムの「脳」と「通信ハブ」です。

#### 主要な利点

- **超コンパクト & デュアルチャンネル**: Seeed Studio XIAO シリーズの小さな「スタンプ」フォームファクターを継承し、スペースに制約のある電気ボックスやデバイス筐体への統合が非常に簡単です。デュアルチャンネル設計により、単一のモジュールで2つの独立したAC回路を監視でき、非常にコスト効率が高いです。
- **強力な接続性 & IoT 統合**: 高性能な **ESP32-C6** コアを搭載し、**Wi-Fi 6、Bluetooth 5、Zigbee、Thread** のネイティブサポートを提供します。これにより、ローカルネットワークに簡単に接続し、ESPHome や MQTT などの標準プロトコルを介して Home Assistant などの IoT プラットフォームにデータをシームレスにプッシュできます。また、今後の **Matter** エコシステムにも対応しています。
- **成熟したプラットフォーム上に構築**: エネルギーメーターは ESPHome を使用して直接設定およびフラッシュできます。ESPHome は、複雑な低レベルプログラミングをシンプルな YAML 設定ファイルに抽象化する強力で成熟したオープンソースプロジェクトです。ユーザーは C++ コードを書くことなく、センサーの定義、ネットワークの設定、Home Assistant との統合を行うことができ、参入障壁を大幅に下げています。

## 3. 使用例とサンプル

デバイスデータを Home Assistant に正常に統合したので、これらの数値はもはや孤立した数字ではなく、無限の自動化アイデアの強力なトリガーとなります。

:::note

サンプルの entity_id 値を独自の値に置き換えることを忘れないでください。

:::

### シナリオ 1: 「エネルギーバンパイア」を見つけるためのホームエネルギー監査

- **問題**: 月々の電気料金が高いが、どの機器が原因なのか不明で、特にスタンバイモードで電力を消費している機器が分からない。

- **解決策**: 冷蔵庫、エアコン、ホームエンターテイメントセンター、コンピューターなど、高消費電力または常時稼働デバイスの電源コードに CT センサーを順次クランプし、数日間データを収集する。

- **実装**:

  1. **長期トレンド分析**: Home Assistant の内蔵 **Energy Dashboard** を使用して、各デバイスの1日、1週間、または1ヶ月の総消費量を明確に視覚化します。これにより、最大のエネルギー消費機器を簡単に特定できます。
  2. **スタンバイ電力の特定**: 電力センサーの履歴グラフを調べることで、デバイスの正確なスタンバイ電力消費を特定できます。例えば、ホームシアターシステムが「オフ」の状態でも継続的に15Wを消費していることを発見するかもしれません。

- **自動化例**（スマートアラート）:

  ```YAML
  # Home Assistant Automation: High Standby Power Alert
  alias: High Standby Power Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      above: 10 # Power threshold in Watts
      for: "00:10:00" # For a duration of 10 minutes
  condition:
    - condition: time
      after: "02:00:00"
      before: "06:00:00"
  action:
    - service: notify.mobile_app_your_phone_name # Replace with your notification service
      data:
        title: "High Standby Power Detected"
        message: "The entertainment center's standby power has been above 10W for 10 minutes. Consider unplugging it."
  ```

### シナリオ 2: ワークショップやメイカースペースでのスマートデバイス監視

- **問題**: 3Dプリンティングやレーザーカッティングなどの長時間実行されるタスクは、完了したか失敗したかを確認するために頻繁な手動チェックが必要です。

- **解決策**: 3Dプリンターやレーザーカッターのリアルタイム電力消費を監視します。これらのデバイスには明確な電力プロファイルがあります：予熱中のピーク、動作中の安定した変動、完了時の非常に低いスタンバイレベルへの低下。

- **自動化の例**（タスク完了通知と自動シャットダウン）:

  ```YAML
  # Home Assistant Automation: 3D Print Job Finished
  alias: 3D Print Job Finished
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      below: 8 # Power threshold for a completed job in Watts
      for: "00:03:00" # For 3 minutes to confirm stable state
  condition:
    # Ensure the device's power dropped from a higher working state
    - condition: template
      value_template: "{{ trigger.from_state.state | float(0) > 50 }}"
  action:
    # 1. Send a mobile notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "3D Print Complete!"
        message: "Your 3D print job has finished. The printer will power down in 15 minutes."
    # 2. Wait for the print to cool down
    - delay: "00:15:00"
    # 3. Turn off the smart plug connected to the printer
    - service: switch.turn_off
      target:
        entity_id: switch.3d_printer_plug
  ```

### シナリオ 3: 重要機器の予知保全

- **問題**: 水槽ポンプやサーバー冷却ファンなどの重要機器の故障は、高額な損害につながる可能性があります。

- **解決策**: これらのモーター駆動デバイスが消費する**電流**を継続的に監視します。正常動作時、電流は予測可能な範囲内に留まります。機械的な停止やベアリング故障が発生すると、モーターの負荷が劇的に増加し、電流の異常なスパイクを引き起こします。

- **自動化例**（ポンプ停止アラート）:

  ```YAML
  # Home Assistant Automation: Water Pump Stall Alert
  alias: Water Pump Stall Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_2_current
      above: 1.5 # Set a danger threshold (e.g., normal is 0.8A)
      for: "00:00:05" # For 5 seconds to filter out initial startup spikes
  action:
    # 1. Send a high-priority notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "‼️ URGENT ALERT: Pump May Be Stalled ‼️"
        message: "Pump current is abnormally high at {{ trigger.to_state.state }}A. Please check immediately!"
    # 2. (Optional) Cut power to the pump to prevent motor burnout
    - service: switch.turn_off
      target:
        entity_id: switch.water_pump_plug
  ```

### シナリオ4: 共有スペースでの公平な従量課金

- **問題**: コワーキングスペースやメイカースペースで、CNCマシンや大型レーザーカッターなどの高電力機器の使用に対してメンバーに公平に課金する方法。
- **解決策**: 総エネルギー消費センサーを活用し、デバイスの使用量をキロワット時（kWh）で正確に記録します。
- **実装**:
  1. **データログ**: Home Assistantが履歴センサーデータを自動的にログします。
  2. **請求サイクル**: Home Assistantのツール（例：ユーティリティメーターヘルパー）を使用して、日次、週次、月次、または手動の請求サイクルを簡単に作成できます。
  3. **コスト計算**: 各請求サイクルの終了時に、管理者がその期間中に消費された総kWhを読み取り、地域の電気料金を掛けて請求額を決定します。

## 4. FAQ

<details>
<summary>Q1: この解決策で三相電力を監視できますか？</summary>

**いいえ。** このガイドのハードウェアとソフトウェアは**単相AC電力**用に設計されており、これは住宅や小規模商業施設で最も一般的な電気サービスの種類です。三相電力監視には、3つの電流と電圧チャンネルを同期的に測定し、位相差を処理できる専用ハードウェアが必要で、この解決策の範囲を超えています。

</details>

<details>
<summary>Q2: 5A以上を消費する機器（例：エアコンやキッチン回路）を監視する必要がある場合はどうすればよいですか？</summary>

もちろん可能です。CTセンサーをアップグレードしてソフトウェアを再校正するだけです：

1. **ハードウェアのアップグレード**: 標準の5A CTセンサーを、20A、50A、または100A（メインフィードの監視用）などのより大きな定格の分割コアCTに交換します。購入時は、新しいCTが**電流出力タイプ**（例：`100A:50mA`）であることを確認し、XIAO Energy Meterの入力ポートとの互換性を維持してください。

2. **ソフトウェアの再校正**: 新しいCTは異なる変換比を持つため、ESPHome設定ファイルの校正パラメータを更新する必要があります。
    - **校正方法**: 校正手順については、公式ESPHomeセンサーコンポーネントドキュメントを参照してください。

</details>

<details>
<summary>Q3: Wi-Fi接続が不安定でデバイスが頻繁にオフラインになる場合はどうすればよいですか？</summary>

Wi-Fiの問題は通常、物理環境とソフトウェア設定の2つの領域をチェックすることで対処できます：

1. **物理環境の確認**:
    - **信号強度**: デバイスの設置場所、特に金属製の電気ボックス内では、Wi-Fi受信が悪い可能性があります。デバイス近くの信号強度をスマートフォンで確認してください。ルーターを近づけるか、Wi-Fi中継器やメッシュノードの追加を検討してください。
    - **アンテナ配置**: **ESP32-C6**のオンボードアンテナが金属部品によって完全に遮蔽されていないことを確認してください。

2. **ソフトウェア設定の最適化**: ESPHome YAMLファイルにいくつかのオプションを追加して、ネットワークの安定性を向上させることができます。

```yaml
wifi:
  ssid: "Your_WiFi_SSID"
  password: "Your_WiFi_Password"

  # -- Stability Enhancements --
  # 1. Set a static IP to avoid issues with DHCP leases
  manual_ip:
    static_ip: 192.168.1.100
    gateway: 192.168.1.1
    subnet: 255.255.255.0

  # 2. Disable Wi-Fi power-saving mode to keep the connection active (this slightly increases power consumption)
  power_save_mode: none

# If the device can't connect to the API or Wi-Fi for 30 mins, 
# it will automatically reboot to try and recover.
api:
  reboot_timeout: 30min

ota:
  # ...
```

</details>
