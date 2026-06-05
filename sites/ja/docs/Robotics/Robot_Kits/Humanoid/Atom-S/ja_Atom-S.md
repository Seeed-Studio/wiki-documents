---
description: Atom-S の使用を開始する。
title: Atom-S 入門ガイド
keywords:
  - ヒューマノイド
  - ロボティクス
  - Atom S
  - XIAO ESP32-S3
  - サーボ
image: https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp
slug: /atom_s
last_update:
  date: 5/22/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/ja/atom_s/
---

# Atom-S 入門ガイド

## はじめに
Atom-S は、開発者、メイカー、教育機関向けに設計された 10 自由度（DOF）のオープンソース二足歩行ヒューマノイドロボットキットです。ロボットは 10 個の Fashionstar RA8-U25H-M バスサーボで駆動され、完全オープンソースの 3D プリント構造を採用し、Seeed Studio XIAO ESP32-S3 メインコントローラと Grove 拡張ボードを搭載しています。工場出荷時に完全な制御ファームウェアがプリインストールされています。最大の特長は、インストール不要の Web ベース視覚モーションエディタであり、ブラウザから直接、サーボのリアルタイムデバッグ、ティーチングモーションの記録、JSON のエクスポートが行え、Arduino、STM32、Raspberry Pi などのプラットフォームで容易に再現できます。付属の RUC-01 アダプタボードは 5 V / 3.3 V の安定化電源と UART インターフェースを提供し、Bluetooth および Web リモートコントロールをサポートします。箱から出してすぐに使えるため、デスクトップロボット開発やアルゴリズム検証に理想的なプラットフォームです。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/product_photo.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Atom-S-p-6711.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 1. 製品概要

- **DOF レイアウト**: 腕、胴体、脚をカバーする 10 自由度を備えています。
- **構造と外観**: 完全 3D プリント構造で、公式に公開された STP / STL モデルファイルにより、部品交換、構造補強、外観デザインの変更が容易です。
- **関節アクチュエータ**: 10 個の Fashionstar RA8-U25H-M バスサーボを採用し、バス通信により配線をシンプルかつクリーンにします。
- **Web モーションエディタ**: ブラウザベースのコントロールパネルで、サーボのリアルタイムデバッグとティーチングモードによるプログラミングをサポートします。完成したモーショングループは標準的な `.json` ファイルとしてエクスポートでき、Arduino、STM32、Raspberry Pi プラットフォームで容易にパースできます。
- **すぐに使える構成**: デフォルトのメインコントローラとして Seeed Studio XIAO ESP32-S3 を搭載し、工場出荷時にデモプログラムが書き込まれています。
- **マルチモジュール拡張**: Seeed Studio XIAO 拡張ボードと組み合わせることで、オンボードの Grove インターフェースから Seeed Grove センサやコントローラを接続できます。
- **クロスプラットフォーム互換性**: RUC-01 アダプタボードは 5 V / 3.3 V 電源出力と UART インターフェースを提供し、シリアルポート機能を持つ任意のコントローラと通信できます。
- **エコシステム拡張性**: Seeed Studio XIAO 拡張ボード上の Grove インターフェースを活用することで、ビジョン、環境センシングなどの Grove エコシステムの各種センサおよび制御モジュールを迅速に統合できます。
- **クロスプラットフォーム互換性**: 標準の RUC-01 ドライバアダプタボードは、5 V / 3.3 V の安定化出力と汎用 UART 通信インターフェースを提供し、外部の Raspberry Pi、STM32、Arduino、ESP32、PC プラットフォームとの接続を容易にします。

## 2. 仕様

| パラメータ | 値 |
| --------------- | ---------------------------------------------------------------- |
| 自由度 (DOF) | 10 |
| シャーシ | 3D プリント |
| サーボ | RA8-U25H-M バスサーボ |
| サーボ電源 / インターフェースボード | RUC-01、4 つのバスサーボポート、5 V / 3.3 V コントローラ電源、およびシリアル (Grove) を提供 |
| メインコントローラ | Seeed Studio XIAO ESP32-S3 + Seeed Studio XIAO 拡張ボード |
| 通信方式 | 非同期シリアル通信 (UART) |
| 外形寸法 | 154 × 105 × 283 mm |

## 3. 同梱物

| 品目 | 数量 |
| ------------------------- | ---- |
| 10-DOF ロボット（組立済み） | 1 |
| KM ネジ M2 × 7 mm | 10 |
| KB ネジ M2 × 7 mm | 10 |
| PM ネジ M3 × 6 mm | 2 |
| サーボケーブル 200 mm 3 ピン | 2 |

:::tip
**10-DOF ロボットアセンブリ内容**

- RA8-U25H-M × 10
- 構造部品（キット）× 1
- RUC-01 アダプタボード × 1
- Seeed XIAO ESP32-S3 × 1
- Seeed XIAO 拡張ボード × 1

:::

## 4. 外形寸法

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/dimensions.png" />
</div>

---

## 5. ハードウェアアーキテクチャ

### 駆動 & 電源（RUC-01 インターフェースボード）

ロボット全体の電源および通信ハブとして機能し、バス管理と電源分配を担当します。

- **サーボバス**: オンボードに 4 つのバスサーボポートを備え、デイジーチェーン拡張をサポートし、信号と電源の両方を供給します。
- **PC 設定インターフェース**: USB Type-C により、PC ホストへ直接接続して設定が可能です。
- **システム電源**: 電圧変換を行い、メインコントローラボードへ安定した電源を供給します。
- **通信インターフェース**: 上位メインコントローラからのコマンドを受信する標準 UART シリアルポート。

### ロジックコントローラ & 拡張（MCU + Grove 拡張ボード）

ロボットの「頭脳」として、制御アルゴリズムの実行とセンサデータ処理を担当します。

- **コア MCU**: 小型ながら高性能な Seeed Studio XIAO シリーズ開発ボード。
- **エコシステム拡張**: Grove 拡張ボードにより、多数の I/O インターフェースを引き出します。
- **主な機能**: ロボットの運動学プログラムを実行し、Grove インターフェース経由でセンサ（超音波、ビジョン、音声など）を接続してインタラクティブな機能を実現します。

### データフロー

**デバッグ / 編集モード**

```
PC --(USB)--> RUC-01 --(Bus)--> Servos
```

*説明: サーボ角度の調整とモーショングループの保存は、XIAO メインコントローラを経由せず、PC ソフトウェアから直接行います。*

**自律動作モード**

```
Sensor / Remote --(Signal)--> XIAO --(UART Command)--> RUC-01 --(Bus)--> Servos
```

*説明: XIAO がセンサフィードバックまたは事前に保存されたコードに基づいてロボットを自律制御します。*

### 汎用通信インターフェースリファレンス（クロスプラットフォーム開発の必読事項）

このキットではデフォルトのメインコントローラとして XIAO ESP32S3 を使用していますが、RUC-01 インターフェースボードは任意の外部コントローラに対して開かれています。基本的な通信には、メインコントローラと RUC-01 間で 4 本の配線だけが必要です。

- **5 V / 3.3 V**: RUC-01 はメインコントローラへ安定した電源を逆供給できます。
- **GND**: 共通グラウンド。
- **RX / TX**: 制御コマンドの送受信およびサーボフィードバックの読み取りを行う標準的な非同期シリアル通信 (UART)。


| No. | インターフェース説明 | No. | インターフェース説明 |
| ---- | ------------------------------------ | ---- | ----------------------------------------------------- |
| ① | メイン電源スイッチ | ⑤ | アダプタボード通信用 UART / Grove インターフェース（メインコントローラ ⑧ に接続） |
| ② | 電源入力ポート | ⑥ | メインコントローラ ESP32S3 Type-C データポート（ファームウェア書き込み） |
| ③ | サーボポート × 4 | ⑦ | Seeed XIAO ESP32S3 メインコントローラボード |
| ④ | Type-C データポート（サーボデバッグ用、PC に接続） | ⑧ | メインコントローラ通信用 UART / Grove インターフェース（RUC-01 インターフェースボード ⑤ に接続） |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/hardware_interface.webp" />
</div>

:::warning
RUC-01 インターフェースボード上の Type-C ポート ④ 付近のトグルスイッチおよび図の左側に示されている 2 つの Type-C ポートは、他用途向けに予約されており、本プロジェクトでは**使用しません**。誤って操作しないようご注意ください。
:::

## 6. 機械構造

- 構造概要 & デフォルトサーボ ID

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/servo_id_mapping.webp" />
</div>

- 全サーボのゼロ度姿勢

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/zero_pose.png" />
</div>

---

## 7. 図面 & モデルデータのダウンロード

完全な 3D プリントデータを入手するには、次のページをご覧ください: [MakerWorld - Atom S](https://makerworld.com/zh/models/2394805-atom-s#profileId-2624069)

:::tip
今後、より充実した組立動画や図解マニュアルを順次公開していきます。このページの更新をぜひチェックしてください。
:::

## 8. 最初のデモを動かしてみよう

### 開封後すぐに試せるクイックスタートガイド

:::tip
Atom S は、工場出荷時に基本制御プログラムが書き込まれ、初期組立も完了しています。電源とスマートフォンを用意するだけで、ロボットの動きやリモートコントロール機能をすぐに体験できます。
:::

### ハードウェア電源の準備

配送制限により、キットには標準でバッテリーが含まれていません。開始前に互換性のあるバッテリーを用意し、ロボット背面の電源ポートに接続してください。

- **バッテリ仕様**: 3S 12.6 V Li-Po（リチウムポリマー）バッテリー
- **バッテリコネクタタイプ**: T プラグ
- **電源投入チェック**: 電源を接続すると、メインコントローラボード（XIAO ESP32S3）上のインジケータ LED が点灯し、システムが起動したことを示します。

### Web リモートコントローラへの接続

スマートフォンまたは Bluetooth 対応 PC で Bluetooth を有効にし、OS に応じて互換性のあるブラウザを選択してください。Web リモートは基盤となる Web Bluetooth API に依存しているため、ブラウザの互換性が重要です。

- **PC（Windows / macOS）**: Google Chrome または Microsoft Edge を使用してください。
- **Android**: Google Chrome を使用してください。システム標準ブラウザや WeChat のスキャンからの起動は使用しないでください。
- **iOS**: Safari、Chrome、Edge は Web Bluetooth をサポートしていません。App Store から Bluefy など WebBLE プロトコルをサポートするサードパーティブラウザをダウンロードしてください。

**アクセス URL**: [Remote Controller](https://wiki.fashionrobo.com/ps2v2/)

- 未接続状態:

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_disconnected.png" />
</div>

- 画面上部の **SYSTEM LINK** ボタンをタップしてデバイスを検索・接続します。
- 表示された Bluetooth デバイス一覧から **ESP32_Pro_Remote** という名前のデバイスを選択し、ペアリングをタップします。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_pairing.png" />
</div>

- 接続済み：接続が完了すると、ロボットは自動的に「おじぎ」動作を行い、デフォルトの直立姿勢に戻ります。これにより、システムが準備完了であることを示します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_connected.png" />
</div>

### 最初の連続モーションティーチングシーケンスを始める

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_layout.webp" />
</div>

Web 仮想ゲームパッドを使うことで、コードを書くことなく、ロボットに素早く連続モーションシーケンスを教えることができます：

- **準備**：左上の **HOME** ボタンをタップして、ロボットが標準的な初期直立姿勢になっていることを確認します。
- **関節のロック解除**：左上の **RELAX** ボタンをタップして、ロボットをダンピングモードにします。この時点で、すべてのサーボの電源が切られ、各関節を手動で動かすことができます。
- **最初のフレームを記録**：ロボットのポーズを手動で取らせ、**Left ◀** 方向キーをタップして現在のポーズを記録します。
- **後続フレームを記録**：ロボットのポーズを変更し、再度 **Left ◀** をタップします。この操作を繰り返してモーションフレームのシーケンスを記録します。デフォルトで最大 100 フレームまでサポートされます。
- **モーションシーケンスを再生**：すべてのポーズを記録したら、**Right ▶** 方向キーをタップすると、ロボットは記録されたすべての動作をスムーズに再生します。
- **再生速度の調整**：再生が速すぎる、または遅すぎる場合は、**Up ▲**（加速）または **Down ▼**（減速）をタップしてモーション速度を調整します。
- **ワンキー・デモ**：右側の **Square □** ボタンをタップすると、工場出荷時のデフォルトデモモーションを直接再生します。

:::tip
クイック体験を完了し、さらにモーション JSON のエクスポート、メインコントローラロジックの変更、または他のコントローラとの接続を行いたい場合は、以下のセクションを続けてお読みください。
:::

## 9. カスタムモーション開発のコアワークフロー

### ポーズ設計とデータエクスポート（Web Motion Editor）

- **接続と読み取り**：PC ブラウザから RUC-01 インターフェースボードに接続し、ロボットのサーボ状態をリアルタイムで読み取ります。

  [Motion Editor](https://wiki.fashionrobo.com/uartbasic/robotstudiopro/)
- **ロック解除とティーチング**：ワンクリックでサーボの電源を切りダンピングモードにし、ロボットを手動で動かして各フレームのポーズを記録します。
- **配置と微調整**：キーフレーム間の実行時間とインターバルを調整し、ソフトウェア内でリアルタイム再生してモーションの滑らかさを最適化します。
- **JSON エクスポート**：モーションが正しいことを確認したら、モーショングループ全体を標準的な `.json` ファイルとしてエクスポートします。

### データ統合とファームウェア書き込み（ESP32 メインコントローラ）

- **オープンソース**：付属の ESP32 メインコントローラプロジェクトのソースコードを Arduino IDE で開きます。
- **コードの置き換え**：エクスポートした `.json` データをすべてコピーし、`Robot.ino` ファイル内の既存の `jsonData` 変数の内容を置き換えます。
- **コンパイルと書き込み**：プロジェクトを再コンパイルし、更新されたファームウェアを ESP32S3 メインコントローラボードに書き込みます。

### 無線リモコンとトリガー実行（Web Remote Terminal）

- **無線接続**：スマートフォンで [Remote Controller](https://wiki.fashionrobo.com/ps2v2/) の Web リモコンを開き、ロボットとペアリングします。
- **ワンキートリガー**：インターフェース上の **Square □** ボタン（コマンド `0x10`）をタップすると、ロボットはデータケーブルなしで、新しく設計したモーションシーケンスを自律的かつ連続的に実行します。

### Motion Editor ガイド

#### エディタレイアウト

3 つの主要モジュール：

1. シリアルポートの接続 / 切断とメッセージステータス
2. サーボステータス / 角度の問い合わせと制御
3. モーショングループの最適化とインポート / エクスポート

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_layout.webp" />
</div>

#### コントロールリファレンス

シリアルポートの接続 / 切断

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_connect.png" />
</div>

リアルタイムポーズページ

- **レイアウト**：キャンバス上で各サーボコントロールをドラッグしてロボットパーツを配置します。ID は一対一で対応しており、クリックしてレイアウトをロックします。
- **スキャン**：オンラインのすべてのサーボを再スキャンします。
- **チェック**：過電圧 / 低電圧保護、スタール（ロック）、その他の異常状態を確認します。
- **一度読み取り**：現在の角度を一度だけ読み取ります。
- **ステータスカラー**：緑 = 角度制御、赤 = 解放 / ダンピング。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/editor_realtime_posture.png" />
</div>

ドラッグによる角度制御：

- **リアルタイム読み取り**：サーボ角度を連続的に読み取ります。
- **速度**：ドラッグ中の速度を制限し、過度な動作を防ぎます。
- **ロック解除モード**：ティーチング用にサーボを解放します（電源オフ解放 / ダンピング解放）。

<div align="center">
    <img width={800}
    src="C:\Users\seeed\Desktop\Atom-S-Final\images2\servo_angle_control.webp" />
</div>

モーショングループページ

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_1.png" />
</div>

以下で各ボタンについて説明します：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/action_group_page_2.png" />
</div>


#### エディタからオフラインモーションへ（XIAO ESP32S3 Sense）

- **1.** 「Connect」をクリックしてシリアルポートを開きます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/connect_serial_port.png" />
</div>

- **2.** 対象のシリアルポートを選択します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/select_serial_port.webp" />
</div>

- **3.** ロボット上のすべてのサーボをスキャンします。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/scan_all_servos.webp" />
</div>

- **4.** 「Release All」をクリックして、すべてのサーボの電源を切り手動で位置決めできるようにするか、必要なサーボだけをロック解除します。
- **5.** 「Time」と「Interval」を設定します。
- **6.** 各編集後に「Add Current」をクリックして、グループに追加します。
- **7.** 再生して確認します。

:::info
**注意**

各モーションフレームは個別に編集（角度、時間、インターバル）および検証できます。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/edit_action_frame.webp" />
</div>

- **8.** 「Export (JSON)」をクリックしてモーショングループをエクスポートします。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/export_action_group.webp" />
</div>

- **9.** エクスポートした JSON を開き、`frames` の内容（外側の `[]` を含む）をコピーします。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/copy_json_frames.webp" />
</div>

- **10.** プログラム内の `jsonData` をコピーした内容で置き換えます。コンパイルと書き込み後、Bluetooth ゲームパッドからロボットを制御できます（詳細は「Robot Control Parameters」を参照）。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/replace_jsondata_code.png" />
</div>

### ロボット制御パラメータ（必要に応じて調整）

#### デフォルト値

- `BAUDRATE`: UART ボーレート。
- `SERVO_NUM`: サーボの数。

```
#define BAUDRATE               115200     /* Baud rate */
#define SERVO_NUM              10         /* Total number of servos */
```

#### Bluetooth（使用する場合）

- `BLE_NAME`: ゲームパッド名。
- `BLE_UUID`: ゲームパッド UUID。

```
/* Bluetooth settings -- modify according to actual conditions */
#define BLE_NAME               "LOOKBON"  /* Bluetooth name */
#define BLE_UUID               "AE02"     /* ID for Bluetooth data reception */
```

#### Web Remote（使用する場合）

- `SERVICE_UUID`: サービス ID。
- `CHARACTERSTIC_UUID`: キャラクタリスティック ID。

```
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID           "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID    "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

#### ティーチングモード

- `MAX_ACTIONNUM`: ティーチングモードで許可されるモーションフレームの最大数。
- `Default_RobotRunSpeed_Demonstration`: デフォルトの実行速度。
- `MIN_RobotRunSpeed_Demonstration`: 最も遅い実行速度。
- `MAX_RobotRunSpeed_Demonstration`: 最も速い実行速度。
- `Adjust_RobotRunSpeed_Step`: ティーチングモードでの速度調整ステップ値（1 ステップあたり ±200）。

```
#define MAX_ACTIONNUM                         100   /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration   1000  /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration       5000  /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration       500   /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step             200   /* Step value for adjusting teaching run speed */
```

#### データフィールド（必要に応じてカスタマイズ）

- `RemoteControl_DefaultDemoAction`: デフォルトのデモモーション（エディタからエクスポート）。
- `RemoteControl_Exe`: ティーチングモード実行コマンド。
- `RemoteControl_Record`: ティーチングモード記録コマンド。
- `RemoteControl_Damping`: ダンピングモードコマンド。
- `RemoteControl_Reset`: リセットコマンド。
- `RemoteControl_ReduceRunSpeed`: ティーチングモード実行速度を下げる。
- `RemoteControl_AddRunSpeed`: ティーチングモード実行速度を上げる。

Bluetooth に関する注意：実際のコントローラデータはお使いのデバイスに依存します。必要に応じてコード内でボタンを定義してください。

```
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0xA1   /* Default demonstration motion */
#define RemoteControl_Exe                     0xA2   /* Teaching mode execution command */
#define RemoteControl_Record                  0xA3   /* Record motion command */
#define RemoteControl_Damping                 0xA4   /* Damping mode command */
#define RemoteControl_Reset                   0xA5   /* Robot reset command */
#define RemoteControl_ReduceRunSpeed          0xA6   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0xA7   /* Increase teaching run speed */
```

Web リモートに関する注意：同様に、統合前にデータおよびボタンのマッピングを必ず確認してください。

```
/* Web remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
#define RemoteControl_DefaultDemoAction       0x10   /* Default demonstration motion */
#define RemoteControl_Exe                     0x08   /* Teaching mode execution command */
#define RemoteControl_Record                  0x04   /* Record motion command */
#define RemoteControl_ReduceRunSpeed          0x02   /* Decrease teaching run speed */
#define RemoteControl_AddRunSpeed             0x01   /* Increase teaching run speed */

#define RemoteControl_Damping                 0x04   /* Damping mode command */
#define RemoteControl_Reset                   0x08   /* Robot reset command */
```

#### リセット角度

- `ROBOT_RESET_POSITION_0` ~ `ROBOT_RESET_POSITION_9`: サーボ ID 0～9 のゼロ位置（ロボットのリセットポーズ）。

注意：これらはロボットのリセットポーズに合わせて変更してください。

```
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 0;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = 0;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

### リモートコントロール リファレンス

#### Bluetooth ゲームパッド

1. ゲームパッドの電源ボタンを長押しして電源を入れ、MCU（XIAO_ESP32S3）とペアリングします。
2. ペアリングが成功すると、ロボットがおじぎしてリセットします。

モーション機能：

- "Run Motion": 内蔵モーションを実行します。
- "Reset Robot": リセットポーズに戻します。
- "Damping Mode": 関節を自由に動かせるティーチング状態に入ります。
- "Record Teaching Motion": 現在のモーションを記録します。
- "Execute Teaching Motion": 記録済みモーションを実行します（デフォルトではクリアされません）。
- "Decrease Teaching Speed": 実行速度を下げます（右腕サーボ ID 6 のスイングで速度を示します）。
- "Increase Teaching Speed": 実行速度を上げます（右腕サーボ ID 6 のスイングで速度を示します）。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_1.webp" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/bluetooth_controller_2.webp" />
</div>

## 10. 標準メインコントローラ ファームウェア書き込みガイド（Seeed Studio XIAO ESP32S3 ベース）

:::tip
このセクションは標準の XIAO ESP32S3 メインコントローラ環境にのみ適用されます。プロジェクトで STM32 や Raspberry Pi を使用している場合は、付録のマルチプラットフォーム Fashionstar サーボ制御 SDK を直接参照してください。
:::

### 開発環境のセットアップ（Arduino IDE）

公式 Arduino ウェブサイトから最新の Arduino IDE をダウンロードしてインストールします。Arduino IDE 2.x を推奨します。

### ESP32 ハードウェアサポートパッケージの導入

まず Arduino IDE の Preferences を開きます：

- Windows: `File > Preferences`
- macOS: `Arduino IDE > Settings...` または `Preferences...`

"Additional Boards Manager URLs" に次の URL を入力します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduino_preferences.png" />
</div>

### ESP32 ビルド環境の展開（バージョン要件厳守）

- `Tools > Board > Boards Manager` を開きます
- `esp32` を検索します
- `Espressif Systems` 提供のパッケージを見つけます
- **バージョン 3.3.5 を手動で選択してインストールします**

:::warning
最新バージョンをそのままインストールしないでください。本プロジェクトの Bluetooth とバスドライバの組み合わせにはバージョン 3.3.5 が必要であり、これ以外では Bluetooth やバス通信がコンパイルエラーや異常動作を起こす可能性があります。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/esp32_board_manager.webp" />
</div>

### 必要なライブラリのインストール（ArduinoJson と ArduinoBLE）

システムは JSON パースと Bluetooth サービスのために、以下のサードパーティライブラリに依存しています：

- `ArduinoJson`
- `ArduinoBLE`

インストール方法：

- `Sketch > Include Library > Manage Libraries...` を開きます
- `ArduinoJson` を検索してインストールします
- `ArduinoBLE` を検索してインストールします

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinojson_library.png" />
</div>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/arduinoble_library.png" />
</div>

### Fashion Star サーボ コアドライバ SDK の展開

下位ドライバを正しく呼び出すため、公式 SDK を手動でインストールする必要があります：

- 同梱の資料パッケージ内から `fashionstar-uart-servo-arduino-sdk-V2.rar` を探します
- アーカイブを解凍します
- SDK フォルダ全体を Arduino のデフォルトライブラリディレクトリにコピーします

**デフォルトライブラリパス**：

- Windows: `C:\Users\Username\Documents\Arduino\libraries`
- macOS: `~/Documents/Arduino/libraries`

コピー後、Arduino IDE を完全に閉じてから再度開き、ローカルライブラリを再読み込みさせます。

### ボードの選択とコンパイル / 書き込み

- XIAO ESP32S3 を Type-C データケーブルで PC に接続します
- `Tools > Board > esp32` を開き、`XIAO_ESP32S3` を選択します
- `Tools > Port` を開き、メインコントローラボードに対応するポートを選択します

ポート名は通常次のように表示されます：

- Windows: `COM3`、`COM5` など
- macOS: `/dev/cu.usbmodem...` または `/dev/cu.usbserial...`

最後に、Arduino IDE でプロジェクトのソースコード（`.ino`）を開き、左上の Upload ボタンをクリックし、コンソールに "Upload successful" と表示されるまで待ちます。

---

## 11. 低レベル制御パラメータ設定仕様（標準メインコントローラ Seeed Studio XIAO ESP32S3 ベース）

Arduino IDE でプロジェクトのソースコードを開いた後、以下のマクロ定義および定数を、実際のプロジェクト要件に応じて変更できます。各パラメータがどのファイルに存在するかを確認し、誤って変更しないようにしてください。

### 基本ハードウェアパラメータ
`Control.h` 内にあります

- `BAUDRATE`: メインコントローラと RUC-01 間の通信に使用するシリアルボーレート
- `SERVO_NUM`: ロボットサーボの総数

```cpp
/* User-modifiable robot data area */
/* define */
#define BAUDRATE 115200 /* Baud rate */
#define SERVO_NUM 10    /* Total number of servos */
```

### UART 物理ピンのリマッピング
`Robot.ino` 内にあります

- `TX_PIN` / `RX_PIN`: ESP32S3 と RUC-01 アダプタボード間の通信に使用するシリアルピン

```cpp
/* Serial1 -- GPIO D6 = GPIO43 D7 = GPIO44 */
#define TX_PIN 43
#define RX_PIN 44
```

### Web リモート Bluetooth 通信パラメータ
`Robot.ino` および `Control.h` 内にあります

- `BLE_NAME`: Bluetooth ブロードキャスト名
- `SERVICE_UUID` / `CHARACTERISTIC_UUID`: Web リモートとメインコントローラが通信を確立するために使用するサービス UUID とキャラクタリスティック UUID

```cpp
/* Set Bluetooth name */
BLE.setLocalName("ESP32_Pro_Remote");
/* ESP32 Service UUID and Characteristic UUID */
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

### ティーチングモード パラメータリファレンス
`Control.h` 内にあります

- `MAX_ACTIONNUM`: ティーチングモードで記録可能なモーションフレームの最大数
- `Default_RobotRunSpeed_Demonstration`: デフォルトの実行速度
- `MIN / MAX_RobotRunSpeed_Demonstration`: 速度調整の上下限
- `Adjust_RobotRunSpeed_Step`: 速度を増減させる際のステップ値

```cpp
#define MAX_ACTIONNUM 100                        /* Maximum number of teaching motion frames */
#define Default_RobotRunSpeed_Demonstration 1000 /* "Default" teaching run speed */
#define MIN_RobotRunSpeed_Demonstration 5000     /* "Slowest" teaching run speed */
#define MAX_RobotRunSpeed_Demonstration 500      /* "Fastest" teaching run speed */
#define Adjust_RobotRunSpeed_Step 200            /* Step value for adjusting teaching run speed */
```

### ボタンデータおよびコマンドマクロ定義
`Control.h` 内にあります

ワイヤレスリモート通信では、Web リモートはボタン状態を 2 つの独立した変数にパックします：

- `btn_Main`: メイン操作エリアのボタン
- `btn_border`: システム制御エリアのボタン

そのため、一部の 16 進コマンドは両方のエリアに現れる場合がありますが、対応する変数が異なるため競合しません。

```cpp
/* Bluetooth remote control commands -- modify functions according to different commands -- adjust based on actual conditions */
/* The following commands correspond to btn_Main (red hexadecimal labels in the mapping diagram) */
#define RemoteControl_DefaultDemoAction 0x10 /* Default demonstration motion command (Square button) */
#define RemoteControl_Exe               0x08 /* Teaching mode execution command (D-pad Right) */
#define RemoteControl_Record            0x04 /* Record motion frame command (D-pad Left) */
#define RemoteControl_ReduceRunSpeed    0x02 /* Decrease teaching run speed (D-pad Down) */
#define RemoteControl_AddRunSpeed       0x01 /* Increase teaching run speed (D-pad Up) */

/* The following commands correspond to btn_border (yellow hexadecimal labels in the mapping diagram) */
#define RemoteControl_Damping           0x04 /* Damping / release mode command (RELAX button) */
#define RemoteControl_Reset             0x08 /* Robot reset command (HOME button) */
```

### モーショングループデータ マウント領域
`Robot.ino` 内にあります

モーションエディタからエクスポートした `.json` データを `jsonData` 変数内にコピーし、`R(` と `)`;` を保持します：

```cpp
/* Default demonstration motion */
const char* jsonData = R"(
[
  // Paste the JSON data exported from the motion editor here, completely replacing this section
  {"angles":[{"id":0,"angle":0},{"id":1,"angle":0} ... ],"time":2000,"delay":500}
]
)";
```

### JSON バッファ割り当てサイズ
`Control.cpp` 内にあります

モーションシーケンスが長すぎると、実行時メモリが不足したり、JSON パースに失敗する可能性があります。この場合は、`DynamicJsonDocument` の容量を適切に増やしてください：

```cpp
/* Create a JSON document object with sufficient space allocated */
DynamicJsonDocument doc(4096);
```

モーションの複雑さに応じて、`8192` 以上に増やしてください。

### ロボットのリセット角度パラメータとゼロ点補正
`Control.h` 内にあります

`ROBOT_RESET_POSITION_0 ~ 9`：それぞれサーボ ID 0〜9 のゼロ初期角度に対応します

:::tip
機械組立ての公差により、各ロボットの絶対ゼロ位置にはわずかな個体差があります。ロボットの直立姿勢を確認したうえで、これらのパラメータを微調整して補正することを推奨します。
:::

```cpp
/* Robot reset angle settings -- modify according to actual conditions */
constexpr float ROBOT_RESET_POSITION_0 = 0;
constexpr float ROBOT_RESET_POSITION_1 = 0;
constexpr float ROBOT_RESET_POSITION_2 = 0;
constexpr float ROBOT_RESET_POSITION_3 = 0;
constexpr float ROBOT_RESET_POSITION_4 = 0;
constexpr float ROBOT_RESET_POSITION_5 = 0;
constexpr float ROBOT_RESET_POSITION_6 = 90;
constexpr float ROBOT_RESET_POSITION_7 = 0;
constexpr float ROBOT_RESET_POSITION_8 = -90;
constexpr float ROBOT_RESET_POSITION_9 = 0;
```

## 12. Web リモートターミナル機能辞書と下位レベルマッピング

:::tip
ブラウザ互換性と基本的な Bluetooth ペアリング手順については、まず本書の第 2 章を参照してください。本章では主に、制御インターフェース上のボタン配置と、後続の二次開発を容易にするための下位レベルの 16 進マッピング関係について説明します。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/humanoid/atom-s/web_remote_keys.webp" />
</div>

### システム制御エリア
対応するコード変数：`btn_border`

このエリアは主にインターフェースの上部および端に配置されており、ロボットのグローバル状態を制御するために使用されます：

- **HOME** (`0x08`)：現在のモーションを中断し、ロボットをデフォルトのキャリブレーション済み直立姿勢に戻し、メモリ上のティーチングデータを消去します
- **RELAX** (`0x04`)：ダンピング／フリーモードに入り、すべてのサーボの保持トルクを解除して、手動ティーチングを容易にします
- **その他の黄色ラベルボタン**：`L1`、`L2`、`R1`、`R2`、`L3`、`R3` など。これらは現行の工場出荷デモではモーションが割り当てられておらず、開発者が必要に応じて拡張できます

### メイン操作エリア
対応するコード変数：`btn_Main`

メイン操作エリアには方向キーと右側のファンクションキーが含まれており、主にモーションの作成と実行を担当します：

- **方向キー 左 ◀** (`0x04`)：現在のモーションフレームを記録
- **方向キー 右 ▶** (`0x08`)：現在記録されているモーションシーケンスを再生
- **方向キー 上 ▲** (`0x01`)：実行速度を上げる
- **方向キー 下 ▼** (`0x02`)：実行速度を下げる
- **四角 □** (`0x10`)：メインコントローラの Flash に事前保存されているデフォルトの `jsonData` モーションを実行
- **その他の赤色ラベルボタン**：`△`、`○`、`×` など。これらは現行ファームウェアでは未定義であり、必要に応じて下位レベルコードでマッピングできます

## FAQ

> 元の Web サイトページは作成中です。利用可能になり次第、内容が追加されます。

### よくある質問

**Q1: Atom-S にはどのようなバッテリーを使用すべきですか？**

A: XT60 コネクタ付きの標準的な 2S または 3S Li-Po（リチウムポリマー）バッテリーを推奨します。

**Q2: XIAO ESP32-S3 を別のメインコントローラに置き換えることはできますか？**

A: 本設計は XIAO ESP32-S3 に最適化されていますが、十分な GPIO を備えた任意の ESP32 開発ボードであれば、わずかな変更で使用できます。

**Q3: ファームウェアはどのように更新しますか？**

A: XIAO ESP32-S3 を USB でコンピュータに接続し、Arduino IDE または PlatformIO を開いて新しいプログラムを書き込みます。

**Q4: モーションエディタはどこにありますか？**

A: Web モーションエディタにはブラウザからアクセスできます。詳細な操作については、第 7.1 章を参照してください。

---

### 一般的なトラブルシューティング

#### ファームウェア書き込みが反応しない／フリーズする

- **症状**：Arduino IDE が `A fatal error occurred: Failed to connect` と表示する、または書き込み処理が停止したままになる
- **対処**：
  - USB ケーブルを接続したままにする
  - 開発ボード上の BOOT ボタンを長押しする
  - IDE の **Upload** ボタンをクリックする
  - コンソールに `Connecting...` が表示される、または転送進行状況の表示が始まったら BOOT ボタンを離す

#### Web ターミナルで Bluetooth デバイスを列挙できない

- **症状**：「Find Device」をクリックしても、Bluetooth デバイス一覧が空のまま
- **トラブルシューティング**：
  - `Web Bluetooth API` をサポートするブラウザを使用しているか確認する
  - Windows ユーザー：OS バージョンが少なくとも Win10（1703 以降）であることを確認する
  - macOS ユーザー：システムの「プライバシーとセキュリティ」設定で、ブラウザに Bluetooth 権限が付与されているか確認する

#### 関節が弱い／姿勢を保持できない

- **症状**：ファームウェアは正常に動作し通信も確立しているが、ロボットが荷重を十分に支えられない
- **トラブルシューティング**：
  - 3S バッテリーの充放電能力が十分か確認する
  - バス配線が緩んでいないか、逆接続になっていないか確認する
  - サーボを交換した場合は、10 個すべてのサーボ ID（0〜9）がプロジェクト定義と一致しているか確認し、ID 競合を避ける
