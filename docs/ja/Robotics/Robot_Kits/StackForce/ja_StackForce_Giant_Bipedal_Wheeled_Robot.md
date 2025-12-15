---
description: StackForce Giant Bipedal Wheeled Robot プロフェッショナル開発ガイド、高度な機能、詳細な開発チュートリアル、API ドキュメント、実用的なアプリケーション事例を含む
title: StackForce Giant Bipedal Wheeled Robot
keywords:
- StackForce
- Wheel-legged Robot
- Professional Development
- Advanced Robotics
- Artificial Intelligence
- Autonomous Navigation
slug: /ja/stackforce_giant_bipedal_wheeled_robot
last_update:
  date: 12/12/2025
  author: TienjuiWong
translation:
    skip: [zh-CN]
---

# StackForce Giant Bipedal Wheeled Robot 開発ガイド

:::tip
このガイドは、プロフェッショナルな開発者と研究者向けに設計されており、基本的なセットアップから高度なアプリケーション開発まで完全なソリューションを提供します。初心者の方は、Mini バージョンから始めることをお勧めします。
:::

## 📋 目次

- [製品概要](#製品概要)
- [BOM 部品表](#BOM-部品表)
- [コア機能](#コア機能)
- [クイックスタート](#クイックスタート)
- [リモートコントロール操作ガイド](#リモートコントロール操作ガイド)
- [システムデバッグガイド](#システムデバッグガイド)
- [ハードウェア組み立て](#ハードウェア組み立て)

## 製品概要

### 製品ポジショニング

StackForce Giant Bipedal Wheeled Robot は、StackForce 軽量ロボット開発プラットフォーム上に構築されたプロフェッショナルグレードのホイール脚ロボットシステムです。Mini バージョンと比較して、フルバージョンはハードウェア構成、ソフトウェア機能、拡張機能において大幅な改善があり、プロフェッショナル開発、学術研究、商用アプリケーション向けに特別に設計されています。

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114001333722578&bvid=BV1MhKKeBEJX&cid=28481814826&p=1"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>

### コア技術アーキテクチャ

#### デュアルチップ協調制御システム
- **S1 メインコントロールチップ**: モーター制御、FOC アルゴリズム実行、モーション制御を担当
- **S3 コプロセッサチップ**: サーボ制御、センサー融合、無線通信を担当

#### 全方向運動学モデル
- クォータニオンベースの姿勢計算アルゴリズム
- リアルタイム逆運動学解法

#### インテリジェントバランスアルゴリズム
- 適応型 PID 制御
- 動的重心調整
- 複雑地形適応安定化

## BOM 部品表

### 大型ホイール脚構造部品表

| 項目名 | 数量 | 備考 |
|-----------|----------|-------|
| **電子部品** | | |
| StackForce メインコントロールボード | 1 | |
| StackForce 高電流ボード A | 1 | |
| StackForce 高電流ボード B | 1 | |
| StackForce サーボボード | 1 | |
| StackForce CAN ボード | 1 | |
| StackForce IO 拡張ボード | 1 | |
| StackForce ホールボード | 1 | |
| **カーボンファイバー構造部品** | | |
| サイドパネル | 2 | 5mm 厚 |
| サイドパネルベースフレーム | 2 | 3mm 厚 |
| フロントガイド | 4 | 5mm 厚 |
| バッフル | 2 | 3mm 厚 |
| **PLA 3D プリント部品** | | |
| 上脚 | 4 | |
| 下脚 | 4 | |
| 前面/背面パネル | 4 | |
| 前面/背面パネルコネクタ | 4 | |
| バッフルコネクタ | 4 | |
| メインコントロールベース | 1 | |
| モーターカバー | 4 | |
| カバープレート V1 | 2 | |
| カバープレート V2 | 2 | |
| バッテリーコンパートメント | 1 | |
| バッテリーカバー | 1 | |
| **CNC 加工部品** | | |
| 脚コネクタ 30 | 2 | |
| 脚コネクタ 40 | 2 | |
| **アルミプロファイル** | | |
| 40*30*100 1mm 厚 | 4 | 穴あけ加工が必要 |
| 60*20*320mm 1mm 厚 | 2 | 穴あけ加工が必要 |
| **ファスナー** | | |
| M2*10 | 1 | 丸頭黒 |
| M3*8 | 4 | 丸頭 |
| M3*8 | 32 | 黒、六角穴付き |
| M3*10 | 12 | 黒、六角穴付き |
| M3*14 | 16 | 黒、六角穴付き |
| M3*20 | 12 | 黒、六角穴付き |
| M3*25 | 24 | 黒、六角穴付き |
| M3*40 | 16 | 黒、六角穴付き |
| M3*45 | 8 | 黒、六角穴付き |
| M3*50 | 8 | 黒、六角穴付き |
| M3*50 | 8 | 黒、皿頭 |
| M4*30 | 44 | 黒、六角穴付き |
| M4*30 | 2 | 黒丸頭 |
| 銅柱 | 22 | M3*8+4 |
| セットスクリュー | 4 | 10*M8*30 |
| M3 ナット | 10 | 黒 |
| M3 ロックナット | 54 | 黒 |
| M4 ロックナット | 20 | 黒 |
| M6 ロックナット | 4 | |
| M8 ロックナット | 4 | |
| 外ねじベアリング | 4 | 9C2L15M6 |
| F6000ZZ ベアリング | 8 | 10*26*8 |
| **モーター** | | |
| ハブモーター 5.5 インチ 24v | 2 | |
| GIM6010-8-標準バージョン | 4 | |

## コア機能

### 1. 🚀 高性能ハードウェアプラットフォーム

#### メインコントロールシステム
- **デュアルチップアーキテクチャ**: S1 + S3 協調処理
- **リアルタイム性能**: マイクロ秒レベルの応答時間
- **拡張インターフェース**: 豊富な I2C、SPI、PWM インターフェース

#### モーション制御システム
- **FOC ベクトル制御**: 精密トルク制御

### 2. 🧠 インテリジェント知覚システム

#### センサー構成
- **高精度 IMU**: 9 軸センサー融合
- **磁気エンコーダー**: 14 ビット精度位置フィードバック

### 3. 🌐 強力な通信機能

#### 無線通信
- **WiFi 6**: 高速データ伝送
- **Bluetooth 5.2**: 低消費電力接続
- **カスタムプロトコル**: リモートコントローラー接続用効率的通信プロトコルスタック

#### 有線インターフェース
- **USB Type-C**: シリアルデバッグ
- **CAN Bus**: モーター駆動

### 4. 🔧 柔軟な開発サポート

#### 開発ツールチェーン
- **PlatformIO**: プロフェッショナル組み込み開発環境
- **ROS/ROS2**: Robot Operating System 互換性

#### オープンソースエコシステム
- **完全オープンソース**: 制御コードはオープンソース
- **モジュラー設計**: 機能拡張を促進

## クイックスタート

### システム要件

#### ハードウェア要件
- StackForce フルバージョンロボットキット
- Ubuntu 20.04+ または Windows 10+ がインストールされたコンピューター
- 最低 8GB RAM、100GB の利用可能ストレージ容量

#### ソフトウェア要件
- Visual Studio Code
- PlatformIO IDE Extension


## リモートコントロール操作ガイド

### 1. 受信機配線

下図は受信機の出力配線順序を示しています。次の 3 本のワイヤーのみが必要です：**CH1/PPM**、**GND**、**VCC**。

受信機の出力順序：**CH1/PPM**、**GND**、**VCC**

拡張ボードには 40 ピンがあり、GND と 3V3 が中央列にあります。下図に示すとおりです。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_01.png" />
</div>

### 2. 受信機とリモートコントロール周波数ペアリング

周波数ペアリングの前に、まずリモートコントロールの電源を切り、次に 10 秒以内に受信機の電源を 3 回オン/オフしてペアリングモードに入ります。受信機のインジケーターライトが点灯し、1 秒後に消灯します。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_02.png" />
</div>

次に、リモートコントロールの有効スイッチを下に倒して信号送信を有効にし、リモートコントロールの左ジョイスティックを最下位置まで下に倒してから、リモートコントロールの電源を入れます。周波数ペアリングが成功します。周波数ペアリング成功後、受信機のインジケーターライトが消灯します。

### 3. リモートコントロール基本使用説明

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_03.png" />
</div>

#### ジョイスティックとスイッチ機能

| コントローラー | 機能 | 説明 |
|------------|----------|-------------|
| **有効ジョイスティック** | リモートコントロールが信号を送信するかどうか | ロボットを制御する前に倒す必要があります |
| **左ジョイスティック（上/下）** | ロボットの高さを制御 | 上で上昇、下で下降 |
| **左ジョイスティック（左/右）** | ロボット脚の両側の高さを制御 | ショルダースイング機能を有効にする必要があります |
| **右ジョイスティック（上/下）** | ロボットの前進/後退移動を制御 | 上で前進、下で後退 |
| **右ジョイスティック（左/右）** | ロボットの左/右旋回を制御 | 左旋回、右旋回 |

#### 左ジョイスティックと左ノブの使用

- **左ノブを時計回りに上まで回したとき**: 左ジョイスティックを下に倒すとショルダースイング機能が有効になり、上に倒すと無効になります
- **左ノブを反時計回りに下まで回したとき**: 下に倒すとロボットがジャンプし、上に倒すとジャンプが無効になります

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/M_04.png" />
</div>

#### 右ジョイスティックと右ノブ

- **右ジョイスティックには 3 つのポジションがあります**:
  - 上位置: ハブモーター無効
  - 中位置: ハブモーター有効
  - 下位置: 自己安定化メカニズム作動

- **右ノブ**: バランス偏差調整

### 4. ロボット電源投入操作手順

#### 詳細操作プロセス

1. **リモートコントロール準備**
   - リモートコントロールの左ジョイスティックを最下位置に倒してから、リモートコントロールの電源を入れます
   - ロボットの脚が吊り下げられ、地面と平行になっていることを確認します
   - ロボットの脚は自然に垂れ下がり、キャリブレーション用にホイールの回転がスムーズであることを確認します

2. **ロボット電源投入**
   - ロボットの電源スイッチを入れます
   - ハブモーターキャリブレーションの完了を待ちます

3. **メインコントロールボードリセット**
   - 左ジョイスティックを最上位置まで倒して、メインコントロールボードの S3 チップをリセットします
   - キャリブレーション完了を待ちます

4. **脚の収縮**
   - 左ジョイスティックを最下位置まで倒してロボットの脚を収縮させます
   - ロボットを地面に置きます

5. **ハブモーター作動**
   - 右ジョイスティックを中位置に倒してハブモーターを開始します
   - ロボットがバランスを保てない場合は、ロボットがバランスを保つまでリモートコントロールの右ノブを微調整します

:::warning
**重要な注意事項**:
- リモートコントロールバッテリーを過放電させないでください
- マルチメーターを使用してバッテリー電圧を測定できます
- 通常の放電範囲は一般的に 25-21V です
- 電圧が 21V を下回った場合は、速やかに充電してください
- 上記の手順が理解できない場合は、技術スタッフに連絡してロボット電源投入操作ビデオを視聴してください！
:::

## システムデバッグガイド

:::tip
このセクションでは、関節モーターボードの ID 番号をラベルとして説明に使用します。配線図に従って厳密に接続してください。
:::

### 1. 配線ガイド

:::tip
**配線図** - 図に従って厳密に配線し、各接続が正しいことを確認してください
:::

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_01.png" alt="全体配線図" />
</div>

#### 1. ハブモーター配線

**ハブモーター三相線とホール三相線の配線：**
- ハブモーター三相線の溶接順序（左から右へ）：**緑、黄、青**
- エンコーダー線の順序（左から右へ）：**黄、緑、青、黒、赤**

**詳細配線図：**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_02.png" alt="Motor wiring detail image 1" />
        <p>図1：モーター三相線配線</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_03.png" alt="Motor wiring detail image 2" />
        <p>図2：エンコーダー配線詳細</p>
      </td>
    </tr>
  </table>
</div>

**左右ハブモーター配線割り当て：**
- **左ハブモーター**：
  - 三相線 → 高電流ボードB
  - ホールエンコーダー線 → ホールボードM0ポート

**左右ホイール詳細配線方式：**

<div align="center">
  <table>
    <tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_04.png" alt="Left hub motor wiring" />
        <p>左ハブモーター配線方式</p>
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_05.png" alt="Right hub motor wiring" />
        <p>右ハブモーター配線方式</p>
      </td>
    </tr>
  </table>
</div>

### 2. S1ファームウェア書き込み

#### 書き込み前の準備

:::warning
**重要な注意事項** - USBケーブルの挿入方向が重要です。間違った挿入はデバイス損傷の原因となる可能性があります
:::

1. USBケーブルのtype-cヘッドを**継ぎ目側を下向きにして**メイン制御ボードのtype-cインターフェースに挿入します
2. メイン制御ボードのインジケーターライトを確認します：
   - メイン制御ボードが**黄色に点灯**している場合 → 正常、直接書き込み可能
   - メイン制御ボードが**緑色に点灯**している場合 → 隣の白いセルフロックボタンを押して黄色ライトに切り替えます

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_06.png" alt="USB cable insertion direction diagram"  />
  <p>⚠️ USBケーブルの挿入方向に注意</p>
</div>

#### 書き込み手順

**ステップ1：書き込みツールを開く**
1. `flash_download_tool_3.9.2.exe`ツールをダブルクリックして開きます
2. ツールが開いた後、ダイアログがポップアップするので、**ESP32**を選択します

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_07.png" alt="Flashing tool startup interface"  />
</div>

**ステップ2：ファームウェアファイルを選択**
1. 最初の行の三点リーダー（📁アイコン）をクリックします
2. ポップアップしたフォルダで`target.bin`ファイルを選択します

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_08.png" alt="Firmware file selection interface"  />
</div>

**ステップ3：書き込みパラメータを設定**

:::info
**パラメータ設定チェックリスト** - 書き込み成功を確保するため、以下のパラメータに従って設定してください
:::

以下のパラメータを設定します：
1. ✅ **ファイルパスを選択**（自動表示）
2. ✅ **選択をチェック**
3. ✅ **書き込みアドレス**：`0x00`
4. ✅ **クロック周波数**：`80MHz`
5. ✅ **フラッシュモード**：`QIO`
6. ✅ **シリアルポート選択**：デバイスマネージャーでCH340対応ポートを確認
7. ✅ **ボーレート**：`921600`

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_09.png" alt="Flashing parameter configuration 1"  />
        <p>📋 パラメータ設定ステップ1</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_10.png" alt="Flashing parameter configuration 2"  />
        <p>📋 パラメータ設定ステップ2</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_11.png" alt="Flashing parameter configuration 3"  />
        <p>📋 パラメータ設定ステップ3</p>
      </td>
    </tr>
  </table>
</div>

**ステップ4：書き込み結果を確認**
書き込み成功後：
1. ボードを組み立てて配線を接続します
2. シリアルアシスタント（VOFA）を開いて対応するポートを選択します
3. ロボットの電源を入れます：
   - まずリモコンの電源を入れます
   - リモコンの左ジョイスティックを上に倒します
   - 右上のレバーを上（L位置）に倒します
4. S1チップのリセットボタンを押します（赤い枠で示された位置）

:::success
**確認手順** - 書き込み完了後、以下の手順に従って確認してください
:::

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_12.png" alt="S1 chip reset button position"  />
        <p>✅ S1チップリセットボタン位置</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_14.png" alt="Serial debugging assistant interface"  />
        <p>📊 シリアルデバッグアシスタントインターフェース</p>
      </td>
    </tr>
  </table>
</div>

シリアル出力情報が下図のようになっていれば、ハブモーターの配線が正しく、S1ファームウェアの書き込みが成功したことを意味します。

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_13.png" alt="Flashing success verification information"  />
  <p>🎉 書き込み成功！このメッセージが表示されれば全て正常です</p>
</div>


### 3. 終端抵抗の確認

#### 関節モータードライバーボードID番号

関節モータードライバーボードは出荷前にファームウェアが書き込まれており、CAN ID番号のラベルが貼られています：

| 関節位置 | CAN ID番号 |
|----------------|---------------|
| 左前関節モータードライバーボード | 0x04 |
| 右前関節モータードライバーボード | 0x03 |
| 左後関節モータードライバーボード | 0x02 |
| 右後関節モータードライバーボード | 0x01 |

#### 接続と終端抵抗設定

1. **XT30（2+2）ケーブル接続を使用**：
   - 4つの関節モータードライバーボードを直列に接続します
   - 配線において**モータードライバーボードの1つだけの終端抵抗を開く**必要があります
   - 他の3つは終端抵抗を開く必要はありません

2. **CANボード終端抵抗チェック**：
   - CANボードの終端抵抗が開いているかどうかを確認します
   - マルチメーターの抵抗モードを使用してCANボードのHとL端子の抵抗を測定します
   - 正常な抵抗は**約60Ω**である必要があります

3. **トラブルシューティング**：
   - 抵抗が正しくない場合、他の3つの関節モータードライバーボードの背面にある終端抵抗スイッチが閉じているかどうかを確認します
   - 終端抵抗が1つだけ開いた状態であることを確認します


### 4. ゼロ位置の校正

#### ステップ1：コード設定の変更

**can.cppファイル内：**
1. 下にスクロールして`CAN_control()`関数を見つけます

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_15.png" alt="CAN_control function in can.cpp file"  />
  <p>📝 can.cpp内の重要なコード位置</p>
</div>

**main.cppファイル内：**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_16.png" alt="posInit function in main.cpp file"  />
  <p>📝 main.cpp内の重要なコード位置</p>
</div>

#### ステップ2：ハードウェア準備と書き込み

1. **ロボット準備**：
   - まず関節モーターの脚を自然に垂直下向きに垂らします
   - USBケーブルをメイン制御ボードに挿入します（type-cインターフェースの継ぎ目がある側を下、継ぎ目がない側を上にすることに注意）
   - 挿入後、メイン制御ボードS3シリアルポートが**緑色ライト**を点灯する必要があります
   - 黄色に点灯している場合は、メイン制御ボードの白いボタンを押してS3チップに切り替えます

2. **プログラム書き込み**：
   - 変更したプログラムを書き込みます

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_17.png" alt="Hardware preparation completed diagram"  />
  <p>🔧 ハードウェア準備完了状態</p>
</div>

3. **電源投入テスト**：
   - プログラム書き込み後、シリアルアシスタントを開きます
   - ロボットの電源を入れます（リモコンの右上レバーを上（L）に倒します）
   - S3チップをリセットします
   - シリアルポートで出力される関節モーターの初期角度がすべて0付近であることを確認します

4. **角度データの確認**：
   - ロボットの大きなアームの1つを振ります
   - どのデータが変化するかが、その大きなアーム位置の角度データに対応します

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_18.png" alt="Serial output angle data verification"  />
  <p>📊 シリアル出力 - 角度データ確認</p>
</div>

#### ステップ3：ゼロ位置設定の完了

**main.cppファイル内：**

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_19.png" alt="main.cpp zero position setting completed"  />
  <p>✅ main.cppゼロ位置設定完了</p>
</div>

**can.cppファイル内：**
1. `posInit()`をコメントアウトした後、can.cppファイルの`CAN_Control()`関数内のCANコマンド送信を**コメント解除**する必要があります
2. 関節モーター電気角の出力を**コメントアウト**します

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_20.png" alt="can.cpp final configuration"  />
  <p>✅ can.cpp 最終設定完了</p>
</div>

#### ステップ 4: 最終調整

1. **プログラムを S3 チップに再フラッシュ**
2. **制御テスト**:
   - ロボットの電源を入れる
   - 脚の高さジョイスティックを制御する
   - 脚の高さの変化が左ジョイスティックの制御に従うかを観察する
3. **高さバランス調整**:
   - ロボットを地面に置く
   - ロボットの脚を最小まで収縮させる
   - ロボット平面の両側の高さが一致しているかを観察する
   - 一致していない場合は、robot.cpp ファイルの `leftY` と `rightY` の値を調整する

**高さバランス調整図:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_21.png" alt="Height adjustment before and after comparison 1"  />
        <p>⚖️ 高さ調整図 - 調整前</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_22.png" alt="Height adjustment before and after comparison 2"  />
        <p>⚖️ 高さ調整図 - 調整後</p>
      </td>
    </tr>
  </table>
</div>

### 5. PID パラメータ値のデバッグ

#### デバッグ準備

**PID パラメータデバッグインターフェース:**

<div align="center">
  <table>
    <tr>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_23.png" alt="PID parameter debugging step 1"  />
        <p>🔧 PID デバッグ手順 - 関数コメント</p>
      </td>
      <td >
        <img src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/picture/D_24.png" alt="PID parameter debugging step 2"  />
        <p>🔧 PID デバッグ手順 - パラメータ出力</p>
      </td>
    </tr>
  </table>
</div>

#### デバッグ手順

**3つの高さ値で PID パラメータをデバッグ:**

| 高さ値 | 対応位置 | パラメータ入力 |
|--------|----------|----------------|
| 0 | 最低点 | pid0 |
| 100 | 中点 | pid1 |
| 200 | 最高点 | pid2 |

**各 pid パラメータには以下が含まれます:**
- 速度ループ Kp
- 直立ループ Kp
- 直立ループ Kd
- ロボット X 軸 Kp

#### デバッグプロセス

1. **各高さを個別にデバッグ**:
   - 3つの異なる高さ値の PID パラメータ値を個別にデバッグする
   - 各高さでロボットがバランスを保てることを確認する

2. **パラメータ入力**:
   - デバッグした3つの高さ値の PID パラメータを順番に PID 線形フィッティング関数に入力する
   - 最低点の PID パラメータ値を pid0 に入力する
   - 中点の PID パラメータ値を pid1 に入力する
   - 最高点の PID パラメータ値を pid2 に入力する

3. **最終検証**:
   - デバッグ完了後、PID 線形フィッティング関数の**コメントアウトを解除**する
   - プログラムを S3 プログラムにフラッシュする
   - ロボット電源投入手順に従ってロボットの電源を入れる
   - 地上で PID パラメータがロボットの動作バランスと操作要件を満たすことを検証する

:::tip
操作ビデオを参照する必要がある場合は、グループ内の技術スタッフに連絡してロボット電源投入操作ビデオを入手してください！
:::

## ハードウェア組み立て

### 詳細組み立てガイド

#### 組み立て文書とビデオ

##### 📄 組み立て文書
- [📗 詳細組み立てマニュアル（英語版）](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLegRobot_NewVersion_Controller_Instructions.en.docx)
- [📘 詳細組み立てマニュアル（中国語版）](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/LargeWheelLegRobot_NewVersion_Controller_Instructions.zh.docx)
- [📋 部品表 BOM（中国語版）](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_Chinese.xlsx)
- [📋 部品表 BOM（英語版）](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/LargeWheelLeg_BOM_English.xlsx)

##### 🔧 開発ツール
- [⚙️ VSCode + PIO 環境設定チュートリアル](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/Environment%20Configuration%20Tutorial.docx)
- [📦 MingW64 ツールキット](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/VScode_PIO_environment_tutorial/mingw64.7z)
- [🔌 CH340 ドライバインストールガイド](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH340_install.docx)
- [💾 CH340 ドライバパッケージ](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/ch340_driver_installation/CH341SER.ZIP)

##### 💻 ファームウェアとプログラム
- [⚡ S1 ファームウェアフラッシュツール](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/S1_Firmware_Flashing_Tool.zip)
- [🔧 最新コントローラプログラム](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_New_version.zip)
- [🔧 ジョイントデバッグプログラム](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/ESP32S3_SF_Bipedal_Wheel_lagency.zip)
- [🖼️ プログラムデバッグスクリーンショット](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/debugging_programs/picture/)

##### 📚 技術文書
- [🔩 ジョイントモータ制御説明](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF-MOTOR_CONTROL.md)
- [📦 ジョイントモータ文書パッケージ](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/joint_motor_documentation/SF_Motor.zip)

##### 🗂️ 3D モデルと回路図
- [📐 ロボット 3D モデル（STP 形式）](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/large_wheel_leg_robot_model_files/stackforce000_asm.stp)
- [🔌 メイン制御ボード回路図](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/StackForce_Main_Control_Board.pdf)
- [🔌 CAN/485 拡張ボード回路図](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/SCH_StackForce_CAN_485.pdf)
- [🔌 サーボ IMU モジュール回路図](https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/LargeWheelLeg/en_version/schematics/Multi_Servo_IMU_Module.pdf)

##### 🎥 ビデオチュートリアル

<iframe
  src="//player.bilibili.com/player.html?isOutside=true&aid=114124914695505&bvid=BV12c9RYuEzw&cid=28754184592&p=2"
  width="100%"
  height="480"
  scrolling="no"
  border="0"
  frameborder="no"
  framespacing="0"
  allowfullscreen="true"
  style={{borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
</iframe>


### 詳細組み立て手順

#### フェーズ 1: 機械フレームワーク構築
- ベース構造の組み立て
- ホイール脚コンポーネントの取り付け
- メインボディフレームワークの接続

#### フェーズ 2: 電子システム統合
- メイン制御システム（S1/S3 ボード）の取り付け
- センサモジュールの設定
- 通信インターフェースのセットアップ

#### フェーズ 3: システムデバッグ
- ハードウェア自己診断の実行
- システム機能の検証

## まとめ

StackForce 巨大二足歩行ホイールロボットは、ホイール脚ロボット技術の最新開発レベルを表しています。私たちは開発者に最も強力なツールと最も包括的なサポートを提供し、ロボット技術の発展を共に推進することに取り組んでいます。

学生、研究者、エンジニアのいずれであっても、StackForce は無限の可能性を持つ革新的なプラットフォームを提供できます。皆様が素晴らしいアプリケーションを作成されることを楽しみにしています！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
