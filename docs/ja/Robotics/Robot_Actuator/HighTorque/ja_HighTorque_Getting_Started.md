---
description: HighTorque Motors 入門ガイド
title: HighTorque Motors 入門ガイド
keywords:
- actuator
- motor
- arm
- robotics
image:   https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /ja/hightorque_getting_started
last_update:
  date: 12/04/2025
  author: Tienjuiwong
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note バージョン互換性

このマニュアルは **High Torque Commissioning Assistant v0.11.1** 以降に適用されます。
High Torque Commissioning Assistant はモーターファームウェア **v3.1.0** 以降に対応しています。

:::

## 1. モーター使用ガイドライン

### 🔌 モーターハードウェア配線

:::warning 重要な安全注意事項
接続を行う前に、必ず電源が切断されていることを確認してください。
:::

| **仕様** | **値** |
|---|---|
| **定格電圧** | 24VDC |
| **通信** | FDCAN（USB-Cモジュール経由） |
| **モーターモデル** | 5047、4438など |

#### 接続手順

1. **電源接続** 🔌
   24V電源をFDCANモジュールに接続します

2. **モーターインターフェース** 🔌
   **GH1.25-3Pケーブル**を使用してモーターXT30（2+2）インターフェースをFDCANモジュールに接続します

3. **PC接続** 💻
   **USB-C**でFDCANモジュールをコンピューターに接続します

![モーター接続概要](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_1.png)

![詳細配線ガイド](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_2.png)

## 2. High Torque Motor Commissioning Assistant の使用方法と説明

### 🎛️ 共通機能

| **機能** | **説明** |
|---|---|
| **🔄 USBCAN Device 再接続** | USBCANデバイスをスキャンして接続し、接続されたモーターを検出します |
| **🆔 Motor ID** | 現在接続されているモーターのドロップダウンセレクター |
| **⚙️ Motor Calibration** | モーターを再キャリブレーションします（⚠️ **モーターは無負荷である必要があります**） |
| **🎯 Reset Current Motor Zero** | 現在の位置をゼロ基準として設定します |
| **💾 Update Motor Firmware** | 新しいファームウェアをダウンロードしてモーターにフラッシュします |
| **📊 Output Information** | イベントとエラーのリアルタイムログコンソール |

:::danger ⚠️ 重要な警告
**Motor Calibration** は **無負荷** でモーターに何も取り付けられていない状態で実行する必要があります。これを怠ると、エンコーダーオフセット計算が不正確になります。
:::

![共通機能インターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_1.png)

:::info 操作ガイド
**Read Parameters** を使用して現在の設定を取得し、**Write Parameters** を使用して変更をモーターに保存します。
:::

| **パラメーターグループ** | **説明** |
|---|---|
| **📋 Basic Information** | モデル、極対数、減速比、ファームウェアバージョンを表示 |
| **🛡️ Motor Protection** | 過電圧（V）および過温度（°C）制限 |
| **⚖️ PID Adjustment** | Kp、Ki、Kd係数 + i_limit（積分制限） |
| **🆔 Modify Motor ID** | モーターIDを変更（再識別が必要） |
| **📍 Motor Position Range** | 位置MAX/MIN制限（無制限の場合は `nan` に設定） |
| **🚀 Rotation Limits** | 速度（rev/s）、加速度（rev/s²）、電流（A）制限 |

:::warning 注意
Position Range および Rotation Limits セクションで無制限動作を行う場合は、値を `nan` に設定してください。
:::

![パラメーター設定 - 基本](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_1.png)

![パラメーター設定 - 詳細](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_2.png)

### 🔧 モーターデバッグ

異なる動作モードでデバッグします（詳細は[モーター動作モード](#モーター動作モード)を参照）。

| **機能** | **説明** |
|---|---|
| **📈 Motor Running Mode** | **"Add Waveform"** をクリックして位置、速度、トルク、温度をリアルタイムで可視化 |
| **📊 Motor Status** | FDCANフレーム情報（float、int16、int32、CANフレーム） |
| **🛠️ Generate Frame** | 開発用のカスタムCANフレームを作成 |
| **🛑 Stop & Brake** | モーター停止動作を制御 |

#### フレーム生成タイプ

<Tabs>
  <TabItem value="numeric" label="数値タイプ">
    **float、int16、int32**

    実装例とデータタイプ処理については、このセクションのFDCANプロトコル例を参照してください
  </TabItem>
  <TabItem value="can" label="CANフレーム">
    **CANフレーム**

    CANフレーム生成と処理例については、プロトコル実装ガイドを参照してください
  </TabItem>
</Tabs>

#### Stop & Brake 制御

| **制御** | **動作** |
|---|---|
| **🛑 Stop** | 3相すべてを切断 - モーターは慣性で停止 |
| **⚡ Brake** | 3相すべてをグランドに短絡 - モーターは**即座に**停止 |

![デバッグ - 波形ビュー](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_1.png)

![デバッグ - ステータス監視](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_2.png)

### 🎮 モーター動作モード

<Tabs>
  <TabItem value="position" label="1️⃣ 位置モード">
    **位置モード** 🎯

    モーターシャフトの精密な角度制御を提供します。目標位置を回転数で入力し、送信をクリックします。モーターは位置ループPID制御を使用して指定された正確な位置に移動します。

    **適用例：** ロボット関節、CNC機械、アクチュエーターシステム

    ![位置モードインターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_1.png)
  </TabItem>

  <TabItem value="velocity" label="2️⃣ 速度モード">
    **速度モード** 🔄

    負荷変動に関係なく（容量内で）一定の回転速度を維持します。目標速度をrev/sで入力し、送信をクリックします。モーターは設定された加速度制限を使用して指定された速度まで加速します。

    **適用例：** コンベアベルト、ファン、回転テーブル

    ![速度モードインターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_2.png)
  </TabItem>

  <TabItem value="torque" label="3️⃣ トルクモード">
    **トルクモード** 💪

    出力トルクを直接制御します。モーターは速度に関係なく指定されたトルク値を維持しようとします。外部抵抗が設定トルクを超える場合、モーターはシステムを保護するために停止します。

    **単位：** ニュートンメートル（Nm）

    **適用例：** テンション システム、圧入作業、負荷保持

    ![トルクモードインターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_3.png)
  </TabItem>

  <TabItem value="voltage" label="4️⃣ 電圧モード">
    **電圧モード** ⚡

    モーターに印加されるQ軸電圧を直接制御します。この高度なモードはカスタム制御アルゴリズムを可能にし、通常は研究用途や特殊制御システムで使用されます。

    **単位：** ボルト（V）

    ![電圧モードインターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_4.png)
  </TabItem>

  <TabItem value="current" label="5️⃣ 電流モード">
    **電流モード** 🔋

    モーター巻線を流れるQ軸電流を制御します。このモードは、電流が磁場強度の基本的な駆動力であるため、トルクモードよりもトルク生成をより直接的に制御できます。

    **単位：** アンペア（A）

    **適用例：** 精密トルク制御アプリケーション

    ![電流モードインターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_5.png)
  </TabItem>

  <TabItem value="position-speed-torque" label="6️⃣ 位置+速度+トルク">
    **位置、速度、最大トルク** 🎛️

    安全で制御された動作のために位置制御と速度およびトルク制限を組み合わせたハイブリッドモード。モーターは出力トルクが最大制限を超えないことを確保しながら、目標速度で指定された位置に移動します。

    **適用例：** ロボットグリッパー、ドアアクチュエーター、力制限アプリケーション

    トルク制限が不要な場合は、最大トルクを `nan` に設定してください。

    ![位置+速度+トルクモードインターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_6.png)
  </TabItem>

  <TabItem value="trapezoidal" label="7️⃣ 台形制御">
    **台形制御** 📈

    制御された加速および減速フェーズでスムーズなS字カーブ軌道を生成します。モーターは：1）最大速度まで均等に加速、2）一定速度を維持、3）目標位置で正確に停止するために均等に減速します。

    **適用例：** ピックアンドプレース作業、CNC位置決め、精密自動化

    ![台形制御インターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_7.png)
  </TabItem>

  <TabItem value="motion-control" label="8️⃣ モーション制御">
    **モーション制御モード** 🤖

    次の式を使用した高度なPIDベース制御モード：

    **モーター出力トルク = Kp × 位置誤差 + Kd × 速度誤差 + フィードフォワードトルク**

    このモードは高度なモーション制御のために位置誤差（P項）と速度誤差（D項）を組み合わせます。

    **適用例：** 高精度アプリケーション、サーボプレス、力制御組立

    ![モーション制御モードインターフェース](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_8.png)
  </TabItem>
</Tabs>

---

## 3. 🔌 FDCANプロトコル解析

:::info プロトコルリファレンス
このセクションでは、基本的なモーター制御操作に必要なFDCANプロトコル情報を説明します。包括的なレジスターマッピングと高度なプロトコルの詳細については、モーター制御ドキュメントを参照してください。
:::

### 例：int32データフレーム速度モード

**int32データフレーム速度モード**を例に取ります：

```hex
01000a0a2000000080204e0000
```

---

### **1️⃣ サブフレーム1** - モーターモード設定

このサブフレームはモーター動作モードを設定します。

| **フィールド** | **値** | **説明** |
|---|---|---|
| **0x01** | ヘッダー | 最初のサブフレームの開始 |
| **ビット7-4** | `0000` | モーターレジスターへの書き込み操作 |
| **ビット3-0** | `0001` | データタイプ **int8_t**、1データ単位 |
| **0x00** | レジスターアドレス | **モーターモード設定**レジスター |
| **0x0a** | データ | モーターを**速度モード**に設定 |

---

### **2️⃣ サブフレーム2** - モーションパラメーター

このサブフレームはモーションパラメーター（位置と速度の目標値）を設定します。

| **フィールド** | **値** | **説明** |
|---|---|---|
| **0x02** | ヘッダー | 2番目のサブフレームの開始 |
| **ビット 7-4** | `0000` | 書き込み操作 |
| **ビット 3-0** | `0010` | データタイプ **int32_t**、2データユニット |
| **0x20** | レジスタ開始 | 位置ターゲットレジスタ（0x20） |
| **0x00 0x00 0x00 0x80** | 位置データ | **0x80000000** = 位置 **無制限/NaN** |
| **0x20 0x4e 0x00 0x00** | 速度データ | **0x00004e20** = **20000**（10進数） |

:::success 単位変換
**速度計算：**
- **10進値：** 20000
- **LSB重み：** 単位あたり0.00001 rev/s
- **目標速度：** 20000 × 0.00001 = **0.2 rev/s**
:::

---

## 📚 付録

### ⚠️ モーターエラーコードリファレンス

:::info ステータスコード 0 = 正常動作
ゼロ以外の値はエラーを示します。具体的な原因と解決策については、以下の表を参照してください。
:::

| **コード** | **エラー名** | **説明** | **解決策** |
|---|---|---|---|
| **32** | 🔧 キャリブレーション故障 | キャリブレーション中にエンコーダーが磁石を検出できない | 磁石が適切に取り付けられていることを確認し、無負荷で再キャリブレーションを実行 |
| **33** | ⚡ モータードライバー故障 | 電圧不足または電流不足 | 電源電圧と電流容量を確認 |
| **34** | 🔺 過電圧 | バス電圧が制限を超過 | 電源電圧定格を確認 |
| **35** | 📡 エンコーダー故障 | エンコーダー読み取りエラー | エンコーダーの接続と配線を確認 |
| **36** | 🚫 モーター未キャリブレーション | モーターがキャリブレーションされていない | 無負荷でキャリブレーション手順を実行 |
| **37** | 📊 PWMサイクル制限超過 | 内部ファームウェアエラー | 技術サポートに連絡 |
| **38** | 🌡️ 過温度 | 温度が最大制限を超過 | モーターを冷却し、冷却を確認 |
| **39** | 🎯 範囲外 | 定義された制限外での位置制御 | 位置範囲パラメータを調整 |
| **40** | 🔋 低電圧 | 供給電圧が低すぎる | 電源と接続を確認 |
| **41** | ⚙️ 設定変更 | 動作中に重要な設定が変更された | パラメータを変更する前にモーターを停止 |
| **42** | 🔄 角度無効 | 有効な整流エンコーダーがない | エンコーダーの機能と接続を確認 |
| **43** | 📍 位置無効 | 有効な出力エンコーダーがない | 出力エンコーダーの接続を確認 |

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
