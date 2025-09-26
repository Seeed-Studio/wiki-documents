---
description: reCamera Gimbal用に作成されたNode-REDノードとフローを紹介します。Node-REDでGimbalを開発している場合、このドキュメントはノードを使用してGimbalを制御する方法を理解するためのガイドとなります。
title: Gimbal用Node-REDノードとフロー
keywords:
  - AI
  - reCamera
  - Gimbal
  - Node-RED
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.webp
slug: /ja/recamera_gimbal_node_red
sidebar_position: 3
last_update:
  date: 04/09/2025
  author: Dawn Yao
---

# Gimbal用Node-RED入門

このwikiでは、Node-REDノードを使用してジンバル上のモーターを操作・制御する方法について、ステップバイステップのガイダンスを提供します。デバイス上のデフォルトフローは、UIノードとジンバルノードを組み合わせて使用する方法のより包括的な例ですが、ここではノードを一つずつ分解して、その使用方法を説明します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

Node-REDが初めての方、またはVision AIとジンバル制御の統合方法に興味がある方は、[このページ](https://wiki.seeedstudio.com/ja/recamera_develop_with_node-red/)を参照してください。

また、以下の画像に示すように、Gimbalの軸範囲についても認識しておいてください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

## ノード

### モーター角度を設定

このノードを使用すると、モーターの目標値を渡すことで、ジンバルを特定の角度に設定できます。角度が提供されると、ジンバルは希望する位置決めを実行するために適切に移動します。

例：injectノードを使用してyawモーターを50°に移動

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_motor_angle.png" /></div>

#### 設定

- Name：ノードのカスタム名前。
- Input：msg、flow、またはglobal変数によって角度値を自由に解析。
- Unit：入力値の形式：
  - Input in decimal：入力値は小数度単位（例：180.23°）
  - Input in integer：入力値は度の100分の1を表す整数形式（例：18023 = 180.23°）
- Motor Selection：制御するモーターと制御モードを選択：
  - Yaw Axis (Left and Right)：水平移動

  - Pitch Axis (Up and Down)：垂直移動

  - Absolute Position：モーターを特定の角度に設定
  - Relative Offset：モーターを相対的な量だけ移動
- Set dual axis at the same time：単一のコマンドで両方のモーターを制御
  - Absolute Position：両方のモーターを特定の角度に設定
  - Relative Offset：両方のモーターを相対的な量だけ移動

#### 入力

単軸制御の場合、入力は角度値を表す数値です。

双軸制御の場合、入力は次の構造のJSONオブジェクトである必要があります：

```json
{
    "yaw_angle": value,           // Horizontal angle in degrees
    "yaw_speed": speed_value,     // Optional: 0-720
    "pitch_angle": value,         // Vertical angle in degrees
    "pitch_speed": speed_value    // Optional: 0-720
}
```

#### 出力

このノードは出力メッセージを生成しません。モーター角度を設定し、操作結果を反映するためにステータス表示を更新するだけです。

#### ステータス表示

ノードは現在の操作をステータスに表示します：

- **処理中**: コマンドが送信されているときに青いドットと`Processing`テキスト
- **成功**: 正常に完了したときに緑のドットと操作の詳細：
  - 単軸の例: `Set Yaw: 90°` または `Offset Pitch: 10°`
  - 双軸の例: `Set Yaw: 90°, Pitch: 45°` または `Offset Yaw: 5°, Pitch: 10°`
- **エラー**: 設定が失敗した場合に赤いリングとエラーメッセージ
- **ビジー**: ノードがすでにコマンドを処理している場合に黄色いリングと`Busy`テキスト

### モーター速度設定

このノードは、ヨー（水平）またはピッチ（垂直）モーターの速度値を設定します。この速度設定はグローバルコンテキストに保存され、SocketCANを使用して移動コマンドを送信する際に他のモーター制御ノードによって使用されます。

例：スライダーノードを使用してヨーモーター速度を調整するUIスライダーを作成

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_slider.png" /></div>

ダッシュボードは以下のフローで作成されます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_nodes.png" /></div>

この例では、モーター速度範囲である1-720に範囲を設定することを確認する必要があります。また、次のノードに解析するmsgを確認する必要があります。ここでは`msg.topic`を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/slider_config.png" /></div>

スライダーノードで`msg.topic`を選択したため、スライダーに応答するために`msg.topic`から受信していることを確認する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/speed_config.png" /></div>

#### 設定

入力値を取得する場所を指定できます：

- msg: 受信メッセージのプロパティ（例：payload）
- flow: フローコンテキスト変数
- global: グローバルコンテキスト変数

モーター選択：

- ヨー軸（左右）: 水平移動モーターの速度を設定
- ピッチ軸（上下）: 垂直移動モーターの速度を設定

#### 入力

入力は希望するモーター速度を表す数値である必要があります。カスタム速度が設定されていない場合、デフォルトの速度値は`90`です。値は以下の形式で提供できます：

- 数値: 90
- 数値を含む文字列: "45"

**速度単位**: 速度値は`dps/LSB`（degrees per second / Least Significant Bit）で測定され、これはモーターの速度制御の分解能です。有効範囲は0から65535で、ジンバルの典型的な値は50から720の間です。

**速度参考値**:

- 低速移動: 1-120
- 中速移動: 120-360
- 高速移動: 360-720

#### 出力

このノードは出力メッセージを生成しません。以下のグローバルコンテキスト変数のみを更新します：

- ヨーモーター: can$$currentYawSpeed
- ピッチモーター: can$$currentPitchSpeed

速度値は16進数形式（例：速度90の場合`5A.00`）でグローバルコンテキストに保存されます。

モーター制御ノードは、CANバス経由でコマンドを送信する際にこれらの値を取得します。

#### ステータス表示

ノードは現在の速度設定をステータスに表示します：

- 正常に設定されたときに緑のドットと`Yaw Speed: X`または`Pitch Speed: X`
- 設定が失敗した場合に赤いリングとエラーメッセージ。ノードは以下の場合にエラーを報告します：

  - 無効な入力値（数値でない）
  - 空の入力値

### モーター角度取得

このノードは、ヨー（水平）またはピッチ（垂直）モーターの現在位置を取得し、角度を出力します。これは、カメラの現在の向きを監視したり、フローで位置ベースのロジックを実装したりするのに便利です。

例：ボタンを使用して現在のヨーモーター角度位置を取得

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

ダッシュボードは以下のフローで作成されます：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

`button UIノード`が`get motor angleノード`をトリガーし、その結果を`text UIノード`に解析します。
以下のjsonを空のフローにインポートして、この例を取得することもできます：

```json
[{"id":"24bca102bda2cc7b","type":"ui-button","z":"4c965edca3cbeb30","group":"e339fda5d481fc57","name":"","label":"Get Angle","order":0,"width":0,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"topic","topicType":"msg","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":180,"y":200,"wires":[["254d3292e774ea35"]]},{"id":"e339fda5d481fc57","type":"ui-group","name":"get angle","page":"d682a21c64a5b02a","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"d682a21c64a5b02a","type":"ui-page","name":"Page 1","ui":"a6b81038728cf4fb","path":"/page1","icon":"home","layout":"grid","theme":"d7858d0ba6eee558","breakpoints":[{"name":"Default","px":0,"cols":3},{"name":"Tablet","px":576,"cols":6},{"name":"Small Desktop","px":768,"cols":9},{"name":"Desktop","px":1024,"cols":12}],"order":1,"className":"","visible":"true","disabled":"false"},{"id":"a6b81038728cf4fb","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"headerContent":"page","navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"d7858d0ba6eee558","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094CE","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

#### 設定

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_anlge_node.png" /></div>

モーター選択:

- **Yaw軸（左右）**: 水平移動モーターの角度を取得します
- **Pitch軸（上下）**: 垂直移動モーターの角度を取得します

単位:

- **小数点で出力**: 角度値を小数点度数で出力します（例：180.23°）
- **整数で出力**: 角度値を度数の100分の1を表す整数形式で出力します（例：18023 = 180.23°）

#### 入力

任意の入力メッセージがノードをトリガーして現在のモーター角度を読み取ります。入力メッセージの内容は使用されません。

#### 出力

ノードは`msg.payload`プロパティに現在の角度値を出力します：

```json
// With "Output in decimal" selected
{
    "payload": 90.5
}

// With "Output in integer" selected
{
    "payload": 9050
}
```

単位：

- **生の整数値**: モーター単位（度の100分の1、ヨーは0-36000、ピッチは0-18000）
- **変換された小数値**: 度（ヨーは0°から360°、ピッチは0°から180°）

#### ステータス表示

ノードは現在の角度をステータスに表示します：

- モーターをクエリ中は青いドットと`Reading`
- 正常に取得された場合は緑のドットと`Yaw: X°`または`Pitch: X°`
- 別のクエリが既に進行中の場合は黄色のリングと`Busy`
- 取得に失敗した場合は赤いリングとエラーメッセージ
  - モーターとの通信エラー
  - モーターからの無効な応答
  - 同時リクエスト（`Busy`ステータスを表示）

### モーター速度の取得

このノードは、ヨー（水平）またはピッチ（垂直）モーターのグローバルコンテキストに保存されている現在の速度値を読み取ります。この速度値は、SocketCANを使用して移動コマンドを送信する際に、他のモーター制御ノードによって使用されます。

例：`injection node`を使用してモーター速度を取得し、デバッグウィンドウに解析する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_speed_flow.png" /></div>

injectノードをクリックすると、デバッグウィンドウに現在のヨーモーター速度が表示されます。

#### 設定

- Yaw Axis（左右）：水平移動モーターの速度設定を取得
- Pitch Axis（上下）：垂直移動モーターの速度設定を取得
- 速度値は`dps/LSB`（degrees per second / Least Significant Bit）で測定され、これはモーターの速度制御の分解能です。有効範囲は0から65535で、ジンバルの典型的な値は50から720です。

#### 入力

任意の入力メッセージがノードをトリガーして、グローバルコンテキストから現在のモーター速度を読み取ります。入力メッセージの内容は使用されません。

#### 出力

ノードはmsg.payloadプロパティに現在の速度値を出力します：

```json
{
  "payload": 90
}
```

#### ステータス表示

ノードは現在の速度値をステータスに表示します：

- 正常に取得された場合は緑色のドットと `Speed: X`
- 取得に失敗した場合は赤色のリングとエラーメッセージ

### CANへの角度

このノードは数値の角度値を入力として受け取り、CANバスインターフェースまたはCAN Writeノードに直接送信できるCANメッセージオブジェクトを生成します。

例：`inject nodes`を使用してヨー軸を時計回りまたは反時計回りに30度回転させます。`angle to CAN`ノードは数値をCANコマンドに変換し、`CAN Write`を使用してコマンドを実行します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_flow.png" /></div>

injectノードでメッセージペイロードを以下のように設定できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/counterclockwise.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/clockwise.png" /></div>

そして、angle to CANノードを相対オフセット用に設定します：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can.png" /></div>

`CAN write`については、デフォルトクライアントを追加してクライアントを選択するだけです。

#### 設定

- モーター選択：制御するモーターと制御モードを選択：
  - ヨー軸（左右）：水平方向の動き

  - ピッチ軸（上下）：垂直方向の動き

  - 絶対位置：モーターを特定の角度に設定
  - 相対オフセット：モーターを相対的な量だけ移動
- 単位：入力値の形式：
  - 小数点で入力：入力値は小数点度数（例：180.23°）
  - 整数で入力：入力値は度数の100分の1を表す整数形式（例：18023 = 180.23°）

#### 入力

角度値のソースを指定：

- msg.xxx：msgの値を使用
- flow.xxx：フローコンテキストの値を使用
- global.xxx：グローバルコンテキストの値を使用

入力は目標角度（絶対位置決めの場合）または角度オフセット（相対角度移動の場合）を表す数値である必要があります。

例：

    90.5 - 90.5度に移動（小数点度数を使用する場合）
    9050 - 90.5度に移動（モーター単位を使用する場合）
    -10 - 反時計回りに10度移動（相対オフセットを使用する場合）
    10 - 時計回りに10度移動（相対オフセットを使用する場合）

#### 出力

ノードはCANバスに直接送信できるCANメッセージオブジェクトを出力します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_debug.png" /></div>

```json
{
  "payload": {
    "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
    "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]  // Command data as byte array
  }
}
```

注意：321はヨーモーター（ID 141）の16進形式、322はピッチモーター（ID 142）の16進形式です。

##### コマンド形式

出力CANメッセージは以下の形式に従います。詳細については、[最新のモーターマニュアル](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)をご覧ください：

##### 絶対位置コマンド

- **バイト 0**: コマンドタイプ（0xA4）
- **バイト 1**: 方向（0x00）
- **バイト 2-3**: 速度（2バイト、リトルエンディアン）
- **バイト 4-7**: 角度（4バイト、リトルエンディアン）

##### 相対オフセットコマンド

- **バイト 0**: コマンドタイプ（0xA8）
- **バイト 1**: 方向（0x00）
- **バイト 2-3**: 速度（2バイト、リトルエンディアン）
- **バイト 4-7**: オフセット（4バイト、リトルエンディアン）

##### 角度制限

- **ヨー**: -180°から+180°
- **ピッチ**: -90°から+90°

これらの範囲外の値は、許可された範囲に自動的に制限されます。

#### ステータス表示

ノードは現在の角度をステータスに表示します：

- 緑色のドットと`コマンドID` + `モーターID` + `移動角度`

### Can Write

CAN Writeノードを使用すると、CANバスデバイスにコマンドフレームを送信し、その応答フレームを受信できます。デバイスステータスの照会、制御コマンドの送信、CANバスデバイスからの応答の監視に特に有用です。

使用例は上記の`angle to CAN`ノードで示されています。

#### 設定

- Name: ノードのオプション名
- Client: 使用するCANバス設定を選択（CAN-configノードで設定する必要があります）

#### 入力

入力は2つの形式をサポートします：

##### 形式1: 文字列形式（推奨）

`ID#DATA`形式の文字列。IDは16進数のCAN識別子、DATAはドット区切りの16進バイトです。

例: `141#c1.0a.64.00.00.00.00.00`

##### 形式2: オブジェクト形式

以下の構造を持つオブジェクト：

```json
{
  "id": "141",
  "data": ["A4", "00", "2C", "01", "50", "46", "00", "00"]
}
```

Where:

- **id**: 文字列としてのCAN識別子（0xプレフィックスなしの16進数）
- **data**: 16進数でのデータバイト配列（0xプレフィックスなし）

#### Output

ノードは以下の構造を持つオブジェクトを出力します：（各CANコマンドの詳細については、[最新のモーターマニュアル](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)をご覧ください）

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

場所：

- **payload**: `ID#DATA` 形式の文字列
- **details**: 詳細情報を含むオブジェクト：
  - **ID**: CAN識別子（リクエストと同じ）
  - **data**: 16進数でのレスポンスバイトの配列
  - **raw**: レスポンスバイトのドット区切り文字列
- **timestamp**: レスポンスが受信された時刻
- **topic**: "can-response" に設定

#### 例

リクエスト（入力文字列）：

```
141#90.00.00.00.00.00.00.00
```

レスポンス（出力）：

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

##### レスポンス処理

ノードはCANデバイスからのレスポンスを待機し、レスポンスフレームを自動的にフィルタリングして、特定のコマンドに対する関連するレスポンスを確実に受信できるようにします。

##### タイムアウト

設定されたタイムアウト期間内にレスポンスが受信されない場合、ノードはエラーメッセージを出力します。

##### エラー処理

ノードは以下の場合にエラーを報告します：

- 無効な入力フォーマット
- CANバス通信エラー
- レスポンスタイムアウト

### CAN から角度へ

ノードはCANメッセージオブジェクトを入力として受け取り、モーターID、コマンドタイプ、角度/オフセット値を抽出します。絶対位置コマンド（A4）、相対オフセットコマンド（A8）、ステータスクエリコマンド（94）をサポートしています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

#### 設定

Inputフィールドでは、CANメッセージオブジェクトを含むメッセージプロパティ、フローコンテキスト、またはグローバルコンテキスト変数を指定できます。デフォルトでは`msg.payload`を使用します。

#### 入力

入力は以下の構造を持つCANメッセージオブジェクトである必要があります：

```json
{
  "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
  "data": [...]  // Byte array containing the command data (8 bytes)
}
```

Example:

```json
{
  "id": 0x141,
  "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]
}
```

##### コマンド検証

ノードには、意味のあるデータコマンドのみが処理されることを保証する高度な検証が含まれています：

- **94コマンド**: 残りのすべてのバイトがゼロであってはなりません（これは応答ではなくクエリを示すため）
- **A4/A6コマンド**: 2番目のバイトは有効と見なされるために0x00または0x01である必要があります（0x2FなどのACK応答を除外）
- **A8コマンド**: 2番目のバイトは有効と見なされるために0x00である必要があります

これらの検証ルールは、ACK応答と、不正確な角度計算を引き起こすクエリコマンドの処理を防ぎます。

##### 単位

- **10進数で出力**: 角度値を10進度で出力します（例：180.23°）
- **整数で出力**: 角度値を度の100分の1を表す整数形式で出力します（例：18023 = 180.23°）

#### 出力

ノードは、デコードされた情報を含むJSONオブジェクトを出力します：

「10進数で出力」が選択された絶対位置コマンド（A4）の場合：

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 90.5
    }
}
```

絶対位置コマンド（A4）で「整数で出力」が選択されている場合：

```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 9050
    }
}
```

「10進数で出力」が選択された相対オフセットコマンド（A8）の場合：

```json
{
    "payload": {
        "motorId": 0x142,
        "offset": 5.0
    }
}
```

ステータス照会コマンド（94）で「10進数で出力」が選択されている場合：

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

- ヨーモーター（水平）: `0x141`
- ピッチモーター（垂直）: `0x142`

##### コマンドタイプ

- `0xA4`: 絶対位置コマンド
- `0xA8`: 相対オフセットコマンド
- `0x94`: ステータス問い合わせコマンド

## デフォルトフローの説明

デフォルトフローは、ダッシュボードUIパレット、ビジョンAIパレット、およびreCameraパレットを使用して、カメラのプレビュー、特定のオブジェクトの追跡、およびモーター制御が可能なダッシュボードを構築する方法の例です。ダッシュボードは次のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

このフローをより理解していただくために、各個別機能を詳しく説明します。

### 自動追跡

フローのこの部分は自動追跡機能を処理します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

- `Model Node`: YOLOモデルを実行し、検出ボックスのx、y、w、h、オブジェクトIDなどの検出結果を出力します。

- `Function get_target_box Node`: 関数ノードは、目的のオブジェクトのバウンディングボックス情報のみを抽出します。アルゴリズムは最大のバウンディングボックスを選択し、通常は追跡する最も近いまたは最も関連性の高いターゲットです。

- `Function control_motor Node`: このバウンディングボックスの中心とカメラフレームの中心との間のオフセットを計算します。

- `Set motor offset Node`: オフセット値を受信し、ターゲットをフレームの中心に保つためにモーターへのCANコマンドを解析します。

- `Function get_track_target Node`: YoloアルゴリズムのオブジェクトIDを実際のオブジェクト名と照合し、グローバル変数`trackTarget`を更新します。

- `Dropdown List UI Node:` ダッシュボードにドロップダウンリストUIを提供します。ユーザーはリアルタイムでTrackTargetを選択できます。

- `Function save_track_target Node`: ドロップダウンリストの操作からTrackTargetを更新します。

- `Function get_track_enable Node`: グローバル変数`trackEnabled`のステータスを取得します。

- `Track Enable Button Group Node`: ユーザーが自動追跡を有効または無効にするためのダッシュボードのトグルボタンUIを提供します。

- `Function save_track_enabled Node`: グローバル変数`trackEnabled`が有効かどうかを更新します。

### 手動制御

手動制御フローにより、ユーザーはUIスライダーと対話してジンバルモーターを動かすことができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/manual_control_motors.png" /></div>

- `Joystick Node`: テンプレートUIノードを使用して対話型ジョイスティックを描画し、移動データを次のノードに解析します。

- `Set dual motor anle Node`: *両軸を同時に設定*設定を選択します。ジョイスティックから解析されたjsonを使用して、モーターの動きを同時に制御します。これは物理的なジンバルの実際の向きではなく、画像の動きを制御することに注意してください。

- `Get motor angle Node`: デバイスの電源投入時にヨーおよびピッチモーターの初期位置を取得し、スライダーUIノードと同期します。

-`Get motor speed Node`: デバイスの電源投入時にヨーモーターの初期速度を取得し、スライダーUIノードと同期します。

- `Slider UI Node`: ユーザーがモーターと対話するためのダッシュボードにスライダーUIを提供します。ここでは1つの速度スライダーのみを使用して両方のモーター速度を同時に制御することに注意してください。2つのノードを使用して2つのモーターに異なる速度を割り当てることができます。

- `Set motor angle Node`: スライダーUIノードからデータを受信し、モーターを特定の位置に実行するためのCANコマンドを解析します。

- `Set motor speed Node`: スライダーUIノードからデータを受信し、位置コマンドと一緒に送信する準備ができているモーター速度のグローバル変数を更新します。

### ショートカットボタン

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/short_cut_buttons.png" /></div>

- `Button UI Node`: ユーザーがジンバルと対話するためのダッシュボードにボタンUIを提供します。クリック時に、ノードは割り当てられた値を送信します：
  - Sleep:

    ```json
    {"yaw_angle":180, "yaw_speed":360, "pitch_angle":175, "pitch_speed":360}
    ```

  - Standby:

    ```json
    {"yaw_angle":180, "yaw_speed":360,"pitch_angle":90, "pitch_speed":360}
    ```

  - Calibrate: execノードをトリガー
  - Emergency Stop: execノードをトリガー

これらのボタンをクリックすることで、`trackEnabled`も更新されて無効になり、自動追跡を停止します（有効になっている場合）。

- `Exec Node`: システムコマンドを実行し、その出力を返します。このノードでジンバル用の任意のbashスクリプトを実行できます：
  - Calibrate:

    ```bash
    gimbal cali
    ```

  - Emergency Stop:

    ```bash
    gimbal stop 1; gimbal stop 2
    ```

    ターミナルで`gimbal`と入力すると、利用可能なすべてのスクリプトを表示できます。

    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

### CANノード

この例はUIノードがないため、ダッシュボードには表示されません。これは、以下のノードの使用方法を示すワークスペースの例です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/eg_using_can.png" /></div>

- `CAN read Node`: 設定されたインターフェースでCANメッセージを継続的にリッスンし、標準化された形式で出力します。

- `CAN to angle`: CANバスから読み取った生データを角度値にデコードして変換します。

- `Inject Node`: `angle to CAN`ノードがモーターを動かすために`30`度を解析します。

- `angle to CAN`: 数値角度値（この場合は30）を入力として受け取り、CANバスインターフェースまたはCAN Writeノードに直接送信できるCANメッセージオブジェクトを生成します。

- `CAN Write`: CANバスデバイスにコマンドフレームを送信し、その応答フレームを受信します。この場合、以下を解析します

    ```json
    "payload": {
        "id": 0x141,  // Motor ID in hex format (0x141 for Yaw, 0x142 for Pitch)
        "data": [0xA8, 0x00, 0x5A, 0x00, 0xb8, 0xb, 0x00, 0x00]  // Command data as byte array
    }

    ```

    CANコマンドに変換して30度反時計回りに回転させます。

### PID制御

PIDノードについてのドキュメントは[こちら](https://wiki.seeedstudio.com/ja/recamera_pid_adjustment/#adjust-pid-with-node-red)をご覧ください。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
