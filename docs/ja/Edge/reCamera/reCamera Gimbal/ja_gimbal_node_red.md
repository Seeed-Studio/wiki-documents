---
description: reCamera Gimbal 用に作成された Node-RED ノードとフローの紹介。Node-RED を使用してジンバルを開発する場合、このドキュメントはノードを使用してジンバルを制御する方法を理解するためのガイドとなります。
title: ジンバル用 Node-RED ノードとフロー
keywords:
  - AI
  - reCamera
  - ジンバル
  - Node-RED
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.webp
slug: /ja/recamera_gimbal_node_red
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ジンバル用 Node-RED の紹介
このウィキでは、Node-RED ノードを使用してジンバルのモーターを操作および制御する方法について、ステップバイステップで説明します。デバイス上のデフォルトフローは、UI ノードとジンバルノードをどのように組み合わせて使用するかを示すより包括的な例ですが、ここではノードを一つずつ分解して、それぞれの使用方法を説明します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

Node-RED を初めて使用する場合、または Vision AI をジンバル制御に統合する方法を学びたい場合は、[こちらのページ](https://wiki.seeedstudio.com/ja/recamera_develop_with_node-red/)を参照してください。

また、以下の画像に示されているように、ジンバルの軸範囲に注意してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

## ノード
### モーター角度の設定
このノードを使用すると、モーターの目標値を渡すことでジンバルを特定の角度に設定できます。角度が指定されると、ジンバルはそれに応じて動き、目的の位置決めを行います。

例: インジェクトノードを使用してヨーモーターを 50° に移動させる

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_motor_angle.png" /></div>

#### 設定
- 名前: ノードのカスタム名
- 入力: msg、flow、またはグローバル変数を使用して自由に角度値を解析
- 単位: 入力値の形式:
    - 小数で入力: 入力値は小数点付きの角度 (例: 180.23°)
    - 整数で入力: 入力値は 100 分の 1 度を表す整数形式 (例: 18023 = 180.23°)
- モーター選択: 制御するモーターと制御モードを選択:
    - ヨー軸 (左右): 水平方向の動き
    - ピッチ軸 (上下): 垂直方向の動き
    - 絶対位置: モーターを特定の角度に設定
    - 相対オフセット: モーターを相対的な量だけ移動
- 同時にデュアル軸を設定: 単一のコマンドで両方のモーターを制御
    - 絶対位置: 両方のモーターを特定の角度に設定
    - 相対オフセット: 両方のモーターを相対的な量だけ移動

#### 入力

単一軸制御の場合、入力は角度値を表す数値です。

デュアル軸制御の場合、入力は以下の構造を持つ JSON オブジェクトである必要があります:

```json
{
    "yaw_angle": value,           // 水平方向の角度 (度)
    "yaw_speed": speed_value,     // オプション: 0-720
    "pitch_angle": value,         // 垂直方向の角度 (度)
    "pitch_speed": speed_value    // オプション: 0-720
}
```

#### 出力

このノードは出力メッセージを生成しません。モーター角度を設定し、操作結果を反映するステータス表示を更新するだけです。

#### ステータス表示

ノードはステータスに現在の操作を表示します:

- **処理中**: コマンド送信中は青い点と `Processing` テキスト
- **成功**: 操作が正常に完了すると緑の点と操作の詳細:
    - 単一軸の例: `Set Yaw: 90°` または `Offset Pitch: 10°`
    - デュアル軸の例: `Set Yaw: 90°, Pitch: 45°` または `Offset Yaw: 5°, Pitch: 10°`
- **エラー**: 設定に失敗した場合は赤いリングとエラーメッセージ
- **ビジー**: ノードがすでにコマンドを処理中の場合は黄色いリングと `Busy` テキスト

### モーター速度の設定
このノードは、ヨー (水平) またはピッチ (垂直) モーターの速度値を設定します。この速度設定はグローバルコンテキストに保存され、SocketCAN を使用して移動コマンドを送信する際に他のモーター制御ノードで使用されます。

例: スライダーノードを使用して UI スライダーでヨーモーターの速度を調整する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_slider.png" /></div>

ダッシュボードは以下のフローで作成されています:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_nodes.png" /></div>

この例では、範囲を 1-720 に設定する必要があります。これはモーター速度の範囲です。また、次のノードに渡すメッセージ (msg) を確認する必要があります。ここでは `msg.topic` を選択しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/slider_config.png" /></div>

スライダーノードで `msg.topic` を選択したため、スライダーから受信する `msg.topic` に応答する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/speed_config.png" /></div>

#### 設定
入力値を取得する場所を指定できます:

- msg: 受信メッセージのプロパティ (例: payload)
- flow: フローコンテキスト変数
- global: グローバルコンテキスト変数

モーター選択:
- ヨー軸 (左右): 水平方向の動き用モーターの速度を設定
- ピッチ軸 (上下): 垂直方向の動き用モーターの速度を設定

#### 入力
入力は、希望するモーター速度を表す数値である必要があります。カスタム速度が設定されていない場合、デフォルトの速度値は `90` です。値は以下の形式で提供できます:

- 数値: 90
- 数値を含む文字列: "45"

**速度単位**: 速度値は `dps/LSB` (1秒あたりの度数 / 最小有効ビット) で測定され、モーター速度制御の解像度を示します。有効範囲は 0 から 65535 で、ジンバルでは通常 50 から 720 の間の値が使用されます。

**速度の参考値**:

- 遅い動き: 1-120
- 中程度の動き: 120-360
- 速い動き: 360-720

#### 出力
このノードは出力メッセージを生成しません。ただし、以下のグローバルコンテキスト変数を更新します:

- ヨーモーター: can$$currentYawSpeed
- ピッチモーター: can$$currentPitchSpeed

速度値は16進数形式でグローバルコンテキストに保存されます（例：速度90の場合は`5A.00`）。

モーター制御ノードは、CANバスを介してコマンドを送信する際にこれらの値を取得します。

#### ステータス表示
ノードは現在の速度設定をステータスに表示します：

- 設定が成功した場合、緑色の点とともに`Yaw Speed: X`または`Pitch Speed: X`を表示
- 設定が失敗した場合、赤いリングとエラーメッセージを表示。以下の場合にエラーが報告されます：

    - 無効な入力値（数値ではない）
    - 空の入力値

### モーター角度の取得
ノードは、ヨー（水平）またはピッチ（垂直）モーターの現在位置を取得し、角度を出力します。これは、カメラの現在の向きを監視したり、フロー内で位置ベースのロジックを実装するのに役立ちます。

例：ボタンを使用して現在のヨーモーター角度位置を取得する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

ダッシュボードは以下のフローで構成されています：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

`button UI node`が`get motor angle node`をトリガーし、その結果を解析して`text UI node`に送ります。
以下のJSONを空のフローにインポートすることで、この例を取得できます：
```json
[{"id":"24bca102bda2cc7b","type":"ui-button","z":"4c965edca3cbeb30","group":"e339fda5d481fc57","name":"","label":"Get Angle","order":0,"width":0,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"topic","topicType":"msg","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":180,"y":200,"wires":[["254d3292e774ea35"]]},{"id":"e339fda5d481fc57","type":"ui-group","name":"get angle","page":"d682a21c64a5b02a","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"d682a21c64a5b02a","type":"ui-page","name":"Page 1","ui":"a6b81038728cf4fb","path":"/page1","icon":"home","layout":"grid","theme":"d7858d0ba6eee558","breakpoints":[{"name":"Default","px":0,"cols":3},{"name":"Tablet","px":576,"cols":6},{"name":"Small Desktop","px":768,"cols":9},{"name":"Desktop","px":1024,"cols":12}],"order":1,"className":"","visible":"true","disabled":"false"},{"id":"a6b81038728cf4fb","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"headerContent":"page","navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"d7858d0ba6eee558","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094CE","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

#### 設定

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_anlge_node.png" /></div>

モーター選択：

- **ヨー軸（左右）**：水平移動モーターの角度を取得
- **ピッチ軸（上下）**：垂直移動モーターの角度を取得

単位：

- **10進数で出力**：角度値を10進数の度数で出力（例：180.23°）
- **整数で出力**：角度値を度数の百分の一を表す整数形式で出力（例：18023 = 180.23°）

#### 入力
任意の入力メッセージがノードをトリガーし、現在のモーター角度を読み取ります。入力メッセージの内容は使用されません。

#### 出力
ノードは現在の角度値を`msg.payload`プロパティに出力します：

```json
// "10進数で出力"が選択されている場合
{
    "payload": 90.5
}

// "整数で出力"が選択されている場合
{
    "payload": 9050
}
```
単位：

- **生の整数値**：モーター単位（度数の百分の一、ヨーは0-36000、ピッチは0-18000）
- **変換された10進数値**：度数（ヨーは0°から360°、ピッチは0°から180°）

#### ステータス表示
ノードは現在の角度をステータスに表示します：

- クエリ中は青い点で`Reading`を表示
- 取得成功時は緑色の点で`Yaw: X°`または`Pitch: X°`を表示
- 別のクエリが進行中の場合は黄色のリングで`Busy`を表示
- 取得失敗時は赤いリングとエラーメッセージを表示
    - モーターとの通信エラー
    - モーターからの無効な応答
    - 同時リクエスト（`Busy`ステータスを表示）

### モーター速度の取得
ノードは、ヨー（水平）またはピッチ（垂直）モーターのグローバルコンテキストに保存されている現在の速度値を読み取ります。この速度値は、SocketCANを使用して移動コマンドを送信する際に他のモーター制御ノードで使用されます。

例：`injection node`を使用してモーター速度を取得し、デバッグウィンドウに解析する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_speed_flow.png" /></div>

注入ノードをクリックすると、現在のヨーモーター速度がデバッグウィンドウに表示されます。

#### 設定

- ヨー軸（左右）：水平移動モーターの速度設定を取得
- ピッチ軸（上下）：垂直移動モーターの速度設定を取得
- 速度値は`dps/LSB`（1ビットあたりの度数/秒）で測定され、モーター速度制御の解像度を表します。有効範囲は0から65535で、ジンバルの典型的な値は50から720です。

#### 入力
任意の入力メッセージがノードをトリガーし、グローバルコンテキストから現在のモーター速度を読み取ります。入力メッセージの内容は使用されません。

#### 出力
ノードは現在の速度値を`msg.payload`プロパティに出力します：
```json
{
  "payload": 90
}
```

#### ステータス表示
ノードは現在の速度値をステータスに表示します：

- 成功に取得された場合は、`Speed: X` とともに緑の点が表示されます
- 取得に失敗した場合は、エラーメッセージとともに赤いリングが表示されます

### Angle to CAN
このノードは数値の角度値を入力として受け取り、CANバスインターフェースまたはCAN Writeノードに直接送信可能なCANメッセージオブジェクトを生成します。

例: `inject nodes` を使用して、ヨー軸を時計回りまたは反時計回りに30度回転させます。`angle to CAN` ノードは数値をCANコマンドに変換し、`CAN Write` を使用してコマンドを操作します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_flow.png" /></div>

以下のように、injectノードでメッセージペイロードを設定できます:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/counterclockwise.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/clockwise.png" /></div>

そして、angle to CANノードで相対オフセットを設定します:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can.png" /></div>

`CAN write` では、デフォルトのクライアントを追加し、クライアントを選択するだけです。

#### 設定
- モーター選択: 制御するモーターと制御モードを選択します:
    - ヨー軸 (左右): 水平方向の動き
    - ピッチ軸 (上下): 垂直方向の動き
    - 絶対位置: モーターを特定の角度に設定
    - 相対オフセット: モーターを相対的な量だけ移動
- 単位: 入力値の形式:
    - 10進数で入力: 入力値は10進数の角度 (例: 180.23°)
    - 整数で入力: 入力値は角度の百分の一を表す整数形式 (例: 18023 = 180.23°)

#### 入力
角度値のソースを指定します:

- msg.xxx: msg内の値を使用
- flow.xxx: フローコンテキストから値を使用
- global.xxx: グローバルコンテキストから値を使用

入力は、ターゲット角度 (絶対位置の場合) または角度オフセット (相対角度移動の場合) を表す数値である必要があります。

例:

    90.5 - 90.5度に移動 (10進数の角度を使用する場合)
    9050 - 90.5度に移動 (モーター単位を使用する場合)
    -10 - 10度反時計回りに移動 (相対オフセットを使用する場合)
    10 - 10度時計回りに移動 (相対オフセットを使用する場合)

#### 出力
ノードはCANバスに直接送信可能なCANメッセージオブジェクトを出力します:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_debug.png" /></div>

```json
{
  "payload": {
    "id": 0x141,  // モーターID (ヨーの場合は0x141、ピッチの場合は0x142)
    "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]  // コマンドデータ (バイト配列)
  }
}
```

注意: 321はヨーモーターの16進数形式 (ID 141)、322はピッチモーターの16進数形式 (ID 142) です。

##### コマンド形式
出力されるCANメッセージは以下の形式に従います。詳細については、[最新のモーターマニュアル](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf) を参照してください。

##### 絶対位置コマンド:
- **バイト 0**: コマンドタイプ (0xA4)
- **バイト 1**: 方向 (0x00)
- **バイト 2-3**: スピード (2バイト、リトルエンディアン)
- **バイト 4-7**: 角度 (4バイト、リトルエンディアン)

##### 相対オフセットコマンド:
- **バイト 0**: コマンドタイプ (0xA8)
- **バイト 1**: 方向 (0x00)
- **バイト 2-3**: スピード (2バイト、リトルエンディアン)
- **バイト 4-7**: オフセット (4バイト、リトルエンディアン)

##### 角度制限
- **ヨー**: -180° から +180°
- **ピッチ**: -90° から +90°

これらの範囲外の値は自動的に許容範囲に制限されます。

#### ステータス表示
ノードは現在の角度をステータスに表示します:

- 緑の点とともに `command ID` + `motor ID` + `move degrees` が表示されます

### Can Write
CAN Writeノードは、CANバスデバイスにコマンドフレームを送信し、応答フレームを受信することができます。デバイスの状態を照会したり、制御コマンドを送信したり、CANバスデバイスからの応答を監視するのに特に便利です。

使用例は上記の `angle to CAN` ノードとともに示されています。

#### 設定
- 名前: ノードのオプション名
- クライアント: 使用するCANバス設定を選択 (CAN-configノードで設定する必要があります)

#### 入力
入力は以下の2つの形式をサポートします:

##### 形式1: 文字列形式 (推奨)
`ID#DATA` の形式の文字列。IDは16進数のCAN識別子、DATAはドットで区切られた16進数バイトです。

例: `141#c1.0a.64.00.00.00.00.00`

##### 形式2: オブジェクト形式
以下の構造を持つオブジェクト:

```json
{
  "id": "141",
  "data": ["A4", "00", "2C", "01", "50", "46", "00", "00"]
}
```

項目:
- **id**: 16進数のCAN識別子 (0xプレフィックスなしの文字列)
- **data**: 16進数バイトの配列 (0xプレフィックスなし)

#### 出力
ノードは以下の構造を持つオブジェクトを出力します: (各CANコマンドの詳細については、[最新のモーターマニュアル](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf) を参照してください)

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

項目:
- **payload**: `ID#DATA` の形式の文字列
- **details**: 詳細情報を含むオブジェクト:
  - **ID**: CAN識別子 (リクエストと同じ)
  - **data**: 応答バイトの16進数配列
  - **raw**: 応答バイトのドット区切り文字列
- **timestamp**: 応答が受信された時刻
- **topic**: "can-response" に設定

#### 例
リクエスト (入力文字列):
```
141#90.00.00.00.00.00.00.00
```

応答 (出力):
```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

##### 応答処理
ノードはCANデバイスからの応答を待機し、特定のコマンドに関連する応答フレームを自動的にフィルタリングして、関連する応答のみを受信します。

##### タイムアウト
設定されたタイムアウト期間内に応答が受信されない場合、ノードはエラーメッセージを出力します。

##### エラーハンドリング
ノードは以下のケースでエラーを報告します：
- 無効な入力フォーマット
- CANバス通信エラー
- 応答タイムアウト

### CAN to Angle
このノードはCANメッセージオブジェクトを入力として受け取り、モーターID、コマンドタイプ、角度/オフセット値を抽出します。絶対位置コマンド（A4）、相対オフセットコマンド（A8）、およびステータス照会コマンド（94）をサポートします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

#### 設定
Inputフィールドでは、CANメッセージオブジェクトを含むメッセージプロパティ、フローコンテキスト、またはグローバルコンテキスト変数を指定できます。デフォルトでは`msg.payload`を使用します。

#### 入力
入力は以下の構造を持つCANメッセージオブジェクトである必要があります：
```json
{
  "id": 0x141,  // モーターID（16進数形式、例：0x141はYaw、0x142はPitch）
  "data": [...]  // コマンドデータを含むバイト配列（8バイト）
}
```

例：
```json
{
  "id": 0x141,
  "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]
}
```

##### コマンド検証
ノードには、意味のあるデータコマンドのみを処理するための高度な検証機能が含まれています：

- **94コマンド**：残りのバイトがすべてゼロであってはならない（これはクエリを示し、応答ではない）
- **A4/A6コマンド**：2バイト目が0x00または0x01である必要がある（ACK応答の0x2Fなどを除外）
- **A8コマンド**：2バイト目が0x00である必要がある

これらの検証ルールにより、ACK応答や誤った角度計算を引き起こすクエリコマンドの処理を防ぎます。

##### 単位
- **10進数出力**：角度値を10進数の度数で出力（例：180.23°）
- **整数出力**：角度値を度数の百分位を表す整数形式で出力（例：18023 = 180.23°）

#### 出力
ノードはデコードされた情報を含むJSONオブジェクトを出力します：

絶対位置コマンド（A4）で「10進数出力」を選択した場合：
```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 90.5
    }
}
```

絶対位置コマンド（A4）で「整数出力」を選択した場合：
```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 9050
    }
}
```

相対オフセットコマンド（A8）で「10進数出力」を選択した場合：
```json
{
    "payload": {
        "motorId": 0x142,
        "offset": 5.0
    }
}
```

ステータス照会コマンド（94）で「10進数出力」を選択した場合：
```json
{
    "payload": {
        "motorId": 0x141,
        "status": true,
        "angle": 90.5
    }
}
```

##### モーターID
- Yawモーター（水平）：`0x141`
- Pitchモーター（垂直）：`0x142`

##### コマンドタイプ
- `0xA4`: 絶対位置コマンド
- `0xA8`: 相対オフセットコマンド
- `0x94`: ステータス照会コマンド

## デフォルトフローの説明
デフォルトフローは、ダッシュボードUIパレット、ビジョンAIパレット、およびreCameraパレットを使用して、カメラのプレビュー、特定オブジェクトの追跡、モーター制御を行うダッシュボードを形成する例です。ダッシュボードは以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

各機能を分解して、このフローを理解しやすくします。

### 自動追跡

このフローセクションは自動追跡機能を処理します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

- `Model Node`: YOLOモデルを実行し、検出結果（検出ボックスのx, y, w, h, オブジェクトIDなど）を出力します。

- `Function get_target_box Node`: 関数ノードは、目的のオブジェクトのバウンディングボックス情報のみを抽出します。アルゴリズムは通常、最も大きなバウンディングボックス（最も近いまたは最も関連性の高いターゲット）を選択します。

- `Function control_motor Node`: このバウンディングボックスの中心とカメラフレームの中心との間のオフセットを計算します。

- `Set motor offset Node`: オフセット値を受け取り、ターゲットをフレームの中心に保つためにモーターにCANコマンドを解析します。

- `Function get_track_target Node`: YOLOアルゴリズムのオブジェクトIDを実際のオブジェクト名と一致させ、グローバル変数`trackTarget`を更新します。

- `Dropdown List UI Node:` ダッシュボードでドロップダウンリストUIを提供します。ユーザーはリアルタイムでTrackTargetを選択できます。

- `Function save_track_target Node`: ドロップダウンリストの操作からTrackTargetを更新します。

- `Function get_track_enable Node`: グローバル変数`trackEnabled`のステータスを取得します。

- `Track Enable Button Group Node`: ダッシュボードでトグルボタンUIを提供し、ユーザーが自動追跡を有効または無効にできます。

- `Function save_track_enabled Node`: グローバル変数`trackEnabled`が有効かどうかを更新します。

### 手動制御

手動制御フローでは、ユーザーがUIスライダーを操作してジンバルモーターを動かすことができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/manual_control_motors.png" /></div>

- `Joystick Node`: テンプレートUIノードを使用してインタラクション用ジョイスティックを描画し、次のノードに動きデータを解析します。

- `Set dual motor anle Node`: *デュアル軸を同時に設定*構成を選択します。ジョイスティックから解析されたJSONを使用して、モーターの動きを同時に制御します。これは物理的なジンバルの向きではなく、画像の動きを制御します。

- `Get motor angle Node`: デバイスの電源が入ったときにYawおよびPitchモーターの初期位置を取得し、スライダーUIノードと同期します。

- `Get motor speed Node`: デバイスの電源が入ったときにYawモーターの初期速度を取得し、スライダーUIノードと同期します。

- `Slider UI Node`: ダッシュボードでスライダーUIを提供し、ユーザーがモーターを操作できます。ここでは1つの速度スライダーのみを使用して、両方のモーター速度を同時に制御します。2つのノードを使用して、2つのモーターに異なる速度を割り当てることもできます。

- `Set motor angle Node`: スライダーUIノードからデータを受け取り、モーターを特定の位置に実行するためのCANコマンドを解析します。

- `モーター速度設定ノード`: スライダー UI ノードからデータを受け取り、位置コマンドと共に送信する準備ができるようにモーター速度のグローバル変数を更新します。

### ショートカットボタン

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/short_cut_buttons.png" /></div>

- `ボタン UI ノード`: ダッシュボード上でユーザーがジンバルと対話するためのボタン UI を提供します。クリックすると、ノードは以下の割り当てられた値を送信します：
    - スリープ: 
    ```json
    {"yaw_angle":180, "yaw_speed":360, "pitch_angle":175, "pitch_speed":360}
    ```
    - 待機: 
    ```json
    {"yaw_angle":180, "yaw_speed":360,"pitch_angle":90, "pitch_speed":360}
    ```
    - キャリブレーション: exec ノードをトリガー
    - 緊急停止: exec ノードをトリガー

これらのボタンをクリックすると、`trackEnabled` も更新され、自動追跡がオンの場合は停止するように無効化されます。

- `Exec ノード`: システムコマンドを実行し、その出力を返します。このノードを使用してジンバル用の任意の bash スクリプトを実行できます：
    - キャリブレーション: 
    ```bash
    gimbal cali
    ```
    - 緊急停止:
    ```bash
    gimbal stop 1; gimbal stop 2
    ```
    ターミナルで `gimbal` を入力すると、利用可能なすべてのスクリプトを確認できます。

    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

### CAN ノード

この例は UI ノードを持たないためダッシュボードには表示されませんが、以下のノードの使用方法を示すワークスペース内の例です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/eg_using_can.png" /></div>

- `CAN 読み取りノード`: 設定されたインターフェースで CAN メッセージを継続的にリッスンし、それらを標準化された形式で出力します。

- `CAN から角度`: CANbus から読み取った生データをデコードし、角度値に変換します。

- `Inject ノード`: `angle to CAN` ノードに 30 度を解析してモーターを動かします。

- `角度から CAN`: 数値の角度値（この場合は 30）を入力として受け取り、CAN バスインターフェースまたは CAN 書き込みノードに直接送信できる CAN メッセージオブジェクトを生成します。

- `CAN 書き込み`: CAN バスデバイスにコマンドフレームを送信し、応答フレームを受信します。この場合、以下を解析して送信します：
        
    ```json        
    "payload": {
        "id": 0x141,  // モーター ID（16進数形式、Yaw 用は 0x141、Pitch 用は 0x142）
        "data": [0xA8, 0x00, 0x5A, 0x00, 0xb8, 0xb, 0x00, 0x00]  // バイト配列としてのコマンドデータ
    }

    ```
    これにより、30 度反時計回りに回転する CAN コマンドが送信されます。

### PID 制御

PID ノードに関する詳細は、[こちらのドキュメント](https://wiki.seeedstudio.com/ja/recamera_pid_adjustment/#adjust-pid-with-node-red)をご覧ください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>