---
description: SenseCAP T2000 Tracker を AWS に接続
title: AWS IoT Core への接続
keywords:
  - SenseCAP_T2000_tracker
  - AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_All_Model.webp
slug: /sensecap_t2000_tracker_aws
sku: 100082900,100057727,100087298
last_update:
  date: 1/29/2026
  author: Janet
createdAt: '2026-01-06'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/ja/sensecap_t2000_tracker_aws/
---

# AWS IoT Core への接続

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) は、IoT デバイスを他のデバイスや AWS クラウドサービスに接続するクラウドサービスを提供します。AWS IoT は、IoT デバイスを AWS IoT ベースのソリューションに統合するのに役立つデバイスソフトウェアを提供します。デバイスが AWS IoT に接続できる場合、AWS IoT はそれらを AWS が提供するクラウドサービスに接続できます。

[AWS IoT コンソール](https://console.aws.amazon.com/iot/home)にログインします

:::info
AWS アカウントをお持ちでない場合は、[こちら](https://portal.aws.amazon.com/billing/signup)をクリックして作成してください。
:::

## ゲートウェイの追加

`Internet of Things` に移動し、`IoT Core` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

左側のメニューで、`LPWAN devices` → `Gateways` を選択し、`Add gateway` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>

`Gateway's EUI`: ゲートウェイの EUI。デバイスラベルで確認できます。<br/>
`Frequency`: ゲートウェイの周波数帯域。<br/>
`Name`: ゲートウェイに名前を付けます（オプション）<br/>
`SubBand`: オプションで、使用したいサブバンドやトラフィックフローを制御するフィルターなどの LoRaWAN 設定データも指定できます。詳細については、[AWS IoT Core for LoRaWAN でワイヤレスリソースの位置を設定する](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html)を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイの設定

### ゲートウェイ証明書

ゲートウェイが AWS IoT と安全に通信できるように認証するには、LoRaWAN ゲートウェイは AWS IoT Core for LoRaWAN に秘密鍵と証明書を提示する必要があります。

`Create certificate` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

証明書ファイルとサーバー信頼証明書をダウンロードして保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

内部に4つのファイルがあるはずです。これらは後でゲートウェイの設定に使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイ権限

アカウントに IoTWirelessGatewayCertManagerRole IAM ロールを作成していない場合は、ゲートウェイの追加を続行する前にロールを作成してください。
このロールがないと、ゲートウェイは AWS IoT と通信できません。

ロールを選択します：`IoT Wireless Gateway Cert Manager Role`、その後設定を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>

CUPS URL をコピーします。次のステップで使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイ設定

ゲートウェイの Luci 設定ページにログインします。詳細については [Get_Started](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) を確認してください。

`LoRa` > `LoRa Network` に移動します。

`Mode`: Basic Station<br/>
`Gateway EUI`: ゲートウェイ EUI<br/>
`Server`: CUPS Server<br/>
`URL`: 先ほどコピーした CUPS URL<br/>
`Authentication Mode`: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

先ほどダウンロードした証明書ファイルの内容をコピーします（証明書はテキスト形式で開くことができます）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

Gateways ページに移動し、追加したゲートウェイを選択します。

Gateway details ページの LoRaWAN specific details セクションで、接続状態と最後のアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>

## プロファイルの追加

デバイスプロファイルとサービスプロファイルを定義して、一般的なデバイス設定を記述できます。これらのプロファイルは、デバイス間で共有される設定パラメータを記述し、それらのデバイスの追加を容易にします。AWS IoT Core for LoRaWAN は、デバイスプロファイルとサービスプロファイルをサポートしています。

### デバイスプロファイルの追加

`Devices` > `Profiles` に移動し、`Add device profile` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

デバイスプロファイル名を入力し、デバイスとゲートウェイで使用している周波数帯域（RfRegion）を選択し、その他の設定はデフォルト値のままにしておきます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### サービスプロファイルの追加

`Devices` > `Profiles` に移動し、`Add service profile` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

データ送信の RSSI や SNR などの追加のゲートウェイメタデータを各ペイロードで受信できるように、`Add gateway meta data` 設定を有効のままにしておくことをお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>

### 宛先の追加

`LPWAN Devices` > `Destination` に移動し、`Add destination` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/add-destination.png" alt="pir" width={800} height="auto" /></p>

ここで `Publish to AWS IoT Core Message Broker` を選択し、宛先の `MQTT topic` に名前を付けます

**Permissions:** 既存のサービスロールを選択 > `IoT Wireless Gateway Cert Manager Role`

:::info
宛先名には英数字、-（ハイフン）、_（アンダースコア）文字のみを使用でき、スペースを含めることはできません。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/add-destination2.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN デバイスの追加

### ワイヤレスデバイスの追加

`LPWAN devices` > `LoRaWAN`> `Devices` に移動し、`Add wireless device` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/add-device-2.png" alt="pir" width={800} height="auto" /></p>

`Wireless device specification`: OTAA v1.0x

`DevEUI / AppEUI / AppKey`: SenseCraft APP で確認できます。詳細については [Get_Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T2000_tracker/#lora-parameters-setup) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/add-device.png" alt="pir" width={800} height="auto" /></p>

前のステップで作成したデバイスプロファイルと宛先を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/add-device-3.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/add-device-4.png" alt="pir" width={800} height="auto" /></p>

Devices ページに移動し、先ほど追加したデバイスを選択します。

Wireless devices details ページの Details セクションで、受信日を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## デコーダーの設定

### メッセージルールの作成

`Message routing` タブ → `Rules` に移動し、`Create Rule` ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

ルールに名前を付けて送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder.png" alt="pir" width={800} height="auto" /></p>

`SQL version`: 2016-03-23<br/>
`SQL statement`: SELECT * FROM **"YourDestinationTopic"**

ここでは [宛先の追加](#宛先の追加) に従って `t2000-raw` を入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder2.png" alt="pir" width={800} height="auto" /></p>

`Rule actions` セクションまでスクロールし、`Action 1` から `Lambda` を選択し、`Create a Lambda function` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder3.png" alt="pir" width={800} height="auto" /></p>

`Function name`: 関数に名前を付けます。<br/>
`Runtime`: Node.js 24.x<br/>
`Architexture`: x86_64

`Create function` ボタンをクリックして新しい関数を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder4.png" alt="pir" width={800} height="auto" /></p>

関数を作成すると、関数の設定ページに移動します。後で設定するので、ルールページに戻ります。

Refreshボタンをクリックし、以前に作成したLambda関数を選択します。次に`Next`をクリックしてStep 4に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder5.png" alt="pir" width={800} height="auto" /></p>

ルールの詳細がすべて正しいことを確認し、`Create`をクリックしてルールを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder6.png" alt="pir" width={800} height="auto" /></p>

### Lambda関数の設定

`Message routing`タブ → `Rules`に戻り、以前に作成したルールを選択します。

`Actions`から`Lambda`をクリックし、リンクをクリックしてLambda関数設定ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder8.png" alt="pir" width={800} height="auto" /></p>

以下の関数設定ページで、`index.mjs`ファイルを`index.js`に名前を変更し、すべてのコードを削除して[Resource](#resource)のスクリプトに置き換え、`Deploy`ボタンをクリックします。

<details>

<summary>AWS用デコーダー</summary>

```cpp
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const client = new IoTDataPlaneClient({
//Replace the region according to your device.
    "region": "us-east-1"
});

function decodeUplink (input) {
    const bytes = Buffer.from(input, 'base64');
    console.log("bytes: ", bytes)
    const bytesString = bytes2HexString(bytes)
    const originMessage = bytesString.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return { data: decoded }
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return { data: decoded }
}

function messageAnalyzed (messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack (messageValue) {
    let frameArray = []
    const FIXED_LENGTH_PACKAGES = {
        '27': 92, '28': 60, '29': 24, '2A': 12, '2B': 46, '2E': 34, '31': 30, '32': 18
    }
    const DYNAMIC_LENGTH_PACKAGES = {
        '2C': {minLen: 32, scanCountPos: [30, 32], baseLen: 23, itemLen: 7},
        '2D': {minLen: 32, scanCountPos: [30, 32], baseLen: 23, itemLen: 7},
        '2F': {minLen: 20, scanCountPos: [18, 20], baseLen: 17, itemLen: 7},
        '30': {minLen: 20, scanCountPos: [18, 20], baseLen: 17, itemLen: 7}
    }

    for (let i = 0; i < messageValue.length; i++) {
        let remainMessage = messageValue
        let dataId = remainMessage.substring(0, 2).toUpperCase()
        let dataValue
        let dataObj = {}

        if (dataId === '0C') {
            dataValue = ''
            messageValue = remainMessage.substring(2)
            dataObj = {'dataId': dataId, 'dataValue': ''}
        } else if (dataId === '0D') {
            dataValue = remainMessage.substring(2, 10)
            messageValue = remainMessage.substring(10)
            dataObj = {'dataId': dataId, 'dataValue': dataValue}
        } else if (FIXED_LENGTH_PACKAGES[dataId]) {
            let packageLen = FIXED_LENGTH_PACKAGES[dataId]
            if (remainMessage.length < packageLen) {
                return frameArray
            }
            dataValue = remainMessage.substring(2, packageLen)
            messageValue = remainMessage.substring(packageLen)
            dataObj = {'dataId': dataId, 'dataValue': dataValue}
        } else if (DYNAMIC_LENGTH_PACKAGES[dataId]) {
            let config = DYNAMIC_LENGTH_PACKAGES[dataId]
            if (remainMessage.length < config.minLen) {
                return frameArray
            }
            let scanCount = parseInt(remainMessage.substring(config.scanCountPos[0], config.scanCountPos[1]), 16)
            let packageLen = (config.baseLen + (scanCount - 1) * config.itemLen) * 2
            if (remainMessage.length < packageLen) {
                return frameArray
            }
            dataValue = remainMessage.substring(2, packageLen)
            messageValue = remainMessage.substring(packageLen)
            dataObj = {'dataId': dataId, 'dataValue': dataValue}
        } else {
            return frameArray
        }

        if (dataValue.length < 2 && dataObj.dataId !== '0C') {
            break
        }
        frameArray.push(dataObj)
    }
    return frameArray
}

function deserialize (dataId, dataValue) {
    let measurementArray = []
    let eventList = []
    let timestamp = 0
    let value = null
    let motionId = 0
    let scanMax = 0
    let interval = 0
    let workMode = 0
    let heartbeatInterval = 0
    let periodicInterval = 0
    let eventInterval = 0
    switch (dataId) {
        case '0C':
            measurementArray.push({type: "timeSync"})
            break
        case '0D':
            let errorCode = getInt(dataValue)
            let error = ''
            switch (errorCode) {
                case 1:
                    error = 'FAILED TO OBTAIN THE UTC TIMESTAMP'
                    break
                case 2:
                    error = 'ALMANAC TOO OLD'
                    break
                case 3:
                    error = 'DOPPLER ERROR'
                    break
            }
            measurementArray.push({errorCode, error})
            break
        case '27':
            measurementArray.push(...getUpT2000(dataValue))
            break
        case '28':
            interval = 0
            workMode = getInt(dataValue.substring(0, 2))
            heartbeatInterval = getMinsByMin(dataValue.substring(4, 8))
            periodicInterval = getMinsByMin(dataValue.substring(8, 12))
            eventInterval = getMinsByMin(dataValue.substring(12, 16))
            switch (workMode) {
                case 0:
                    interval = heartbeatInterval
                    break
                case 1:
                    interval = periodicInterval
                    break
                case 2:
                    interval = eventInterval
                    break
            }
            measurementArray = [
                {
                    measurementId: '3940', measurementValue: workMode
                }, {
                    measurementId: '3965', measurementValue: getPositioningStrategy(dataValue.substring(2, 4))
                }, {
                    measurementId: '3942', measurementValue: heartbeatInterval
                }, {
                    measurementId: '3943', measurementValue: periodicInterval
                }, {
                    measurementId: '3944', measurementValue: eventInterval
                }, {
                    measurementId: '3974', measurementValue: getInt(dataValue.substring(16, 18))
                }, {
                    measurementId: '3976', measurementValue: getInt(dataValue.substring(18, 20))
                }, {
                    measurementId: '3977', measurementValue: getInt(dataValue.substring(20, 22))
                }, {
                    measurementId: '3900', measurementValue: interval
                }, {
                    measurementId: '3978', measurementValue: getInt(dataValue.substring(22, 24))
                }, {
                    measurementId: '3979', measurementValue: dataValue.substring(26, 26 + getInt(dataValue.substring(24, 26)) * 2)
                }
            ]
            // measurementArray.push(measurement)
            break
        case '29':
            measurementArray.push({
                measurementId: '3946', measurementValue: getInt(dataValue.substring(0, 2))
            })
            measurementArray.push({
                measurementId: '3947', measurementValue: getSensorValue(dataValue.substring(2, 6), 1)
            })
            measurementArray.push({
                measurementId: '3948', measurementValue: getMinsByMin(dataValue.substring(6, 10))
            })
            measurementArray.push({
                measurementId: '3949', measurementValue: getInt(dataValue.substring(10, 12))
            })
            measurementArray.push({
                measurementId: '3950', measurementValue: getMinsByMin(dataValue.substring(12, 16))
            })
            measurementArray.push({
                measurementId: '3951', measurementValue: getInt(dataValue.substring(16, 18))
            })
            measurementArray.push({
                measurementId: '3952', measurementValue: getInt(dataValue.substring(18, 22))
            })
            break
        case '2A':
            measurementArray.push({
                measurementId: '3000', measurementValue: getBattery(dataValue.substring(0, 2))
            })
            measurementArray.push({
                measurementId: '3940', measurementValue: getWorkingMode(dataValue.substring(2, 4))
            })
            measurementArray.push({
                measurementId: '3965', measurementValue: getPositioningStrategy(dataValue.substring(4, 6))
            })
            measurementArray.push({
                measurementId: '3974', measurementValue: getInt(dataValue.substring(6, 8))
            })
            measurementArray.push({
                measurementId: '3976', measurementValue: getInt(dataValue.substring(8, 10))
            })
            break
        case '2B':
            eventList = getEventStatus(dataValue.substring(0, 4))
            motionId = getMotionId(dataValue.substring(4, 6))
            timestamp = getUTCTimestamp(dataValue.substring(6, 14))
            parseAccelerometerData(dataValue, 14, timestamp, motionId, measurementArray)
            parseLocationData(dataValue, 26, timestamp, motionId, measurementArray)
            parseBatteryData(dataValue, 42, timestamp, motionId, measurementArray)
            parseEventData(eventList, timestamp, motionId, measurementArray)
            break
        case '2C':
        case '2D':
            eventList = getEventStatus(dataValue.substring(0, 4))
            motionId = getMotionId(dataValue.substring(4, 6))
            timestamp = getUTCTimestamp(dataValue.substring(6, 14))
            parseAccelerometerData(dataValue, 14, timestamp, motionId, measurementArray)
            parseBatteryData(dataValue, 26, timestamp, motionId, measurementArray)
            scanMax = getInt(dataValue.substring(28, 30))
            parseScanData(scanMax, dataValue, 30, dataId === '2C' ? '5001' : '5002', timestamp, motionId, measurementArray)
            parseEventData(eventList, timestamp, motionId, measurementArray)
            break
        case '2E':
            eventList = getEventStatus(dataValue.substring(0, 4))
            motionId = getMotionId(dataValue.substring(4, 6))
            timestamp = getUTCTimestamp(dataValue.substring(6, 14))
            parseLocationData(dataValue, 14, timestamp, motionId, measurementArray)
            parseBatteryData(dataValue, 30, timestamp, motionId, measurementArray)
            parseEventData(eventList, timestamp, motionId, measurementArray)
            break
        case '2F':
        case '30':
            eventList = getEventStatus(dataValue.substring(0, 4))
            motionId = getMotionId(dataValue.substring(4, 6))
            timestamp = getUTCTimestamp(dataValue.substring(6, 14))
            parseBatteryData(dataValue, 14, timestamp, motionId, measurementArray)
            scanMax = getInt(dataValue.substring(16, 18))
            parseScanData(scanMax, dataValue, 18, dataId === '2F' ? '5001' : '5002', timestamp, motionId, measurementArray)
            parseEventData(eventList, timestamp, motionId, measurementArray)
            break
        case '31':
            eventList = getEventStatus(dataValue.substring(2, 6))
            timestamp = getUTCTimestamp(dataValue.substring(6, 14))
            measurementArray.push({
                measurementId: '3576',
                timestamp,
                motionId,
                measurementValue: getPositingStatus(dataValue.substring(0, 2))
            })
            parseAccelerometerData(dataValue, 14, timestamp, motionId, measurementArray)
            parseBatteryData(dataValue, 26, timestamp, motionId, measurementArray)
            parseEventData(eventList, timestamp, motionId, measurementArray)
            break
        case '32':
            eventList = getEventStatus(dataValue.substring(2, 6))
            timestamp = getUTCTimestamp(dataValue.substring(6, 14))
            measurementArray.push({
                measurementId: '3576',
                timestamp,
                motionId,
                measurementValue: getPositingStatus(dataValue.substring(0, 2))
            })
            parseBatteryData(dataValue, 14, timestamp, motionId, measurementArray)
            parseEventData(eventList, timestamp, motionId, measurementArray)
            break
    }
    if (measurementArray.length > 0) {
        for (let frag of measurementArray) {
            if (frag.measurementId) {
                frag.type = getTypeByMeasurementId(frag.measurementId)
            }
        }
    }
    return measurementArray
}

function parseAccelerometerData (dataValue, startPos, timestamp, motionId, measurementArray) {
    const accelerometerIds = ['4210', '4211', '4212']
    for (let i = 0; i < 3; i++) {
        let value = getSignSensorValue(dataValue.substring(startPos + i * 4, startPos + (i + 1) * 4), 1)
        if (value !== null) {
            measurementArray.push({
                measurementId: accelerometerIds[i],
                timestamp,
                motionId,
                measurementValue: value
            })
        }
    }
}

function parseBatteryData (dataValue, pos, timestamp, motionId, measurementArray) {
    measurementArray.push({
        measurementId: '3000',
        timestamp,
        motionId,
        measurementValue: '' + getBattery(dataValue.substring(pos, pos + 2))
    })
}

function parseEventData (eventList, timestamp, motionId, measurementArray) {
    if (eventList && eventList.length > 0) {
        measurementArray.push({
            measurementId: '4200',
            timestamp,
            motionId,
            measurementValue: eventList
        })
    }
}

function parseLocationData (dataValue, startPos, timestamp, motionId, measurementArray) {
    measurementArray.push({
        measurementId: '4197',
        timestamp,
        motionId,
        measurementValue: '' + getSensorValue(dataValue.substring(startPos, startPos + 8), 1000000)
    })
    measurementArray.push({
        measurementId: '4198',
        timestamp,
        motionId,
        measurementValue: '' + getSensorValue(dataValue.substring(startPos + 8, startPos + 16), 1000000)
    })
}

function parseScanData (scanMax, dataValue, startPos, measurementId, timestamp, motionId, measurementArray) {
    if (scanMax && scanMax > 0) {
        measurementArray.push({
            measurementId,
            timestamp,
            motionId,
            measurementValue: getMacAndRssiObj(dataValue.substring(startPos))
        })
    }
}

function getTypeByMeasurementId (measurementId) {
    const TYPE_MAP = {
        '3000': 'Battery',
        '3502': 'Firmware Version',
        '3001': 'Hardware Version',
        '3940': 'Work Mode',
        '3965': 'Positioning Strategy',
        '3942': 'Heartbeat Interval',
        '3943': 'Periodic Interval',
        '3944': 'Event Interval',
        '3974': '3X Sensor Enable',
        '3976': 'Anti-Theft',
        '3977': 'GNSS Scan Timeout',
        '3900': 'Uplink Interval',
        '3978': 'BLE Scan Timeout',
        '3979': 'UUID Filter',
        '3946': 'Motion Enable',
        '3947': 'Any Motion Threshold',
        '3948': 'Motion Start Interval',
        '3949': 'Static Enable',
        '3950': 'Device Static Timeout',
        '3951': 'Shock Enable',
        '3952': 'Shock Threshold',
        '4210': 'AccelerometerX',
        '4211': 'AccelerometerY',
        '4212': 'AccelerometerZ',
        '4197': 'Longitude',
        '4198': 'Latitude',
        '4200': 'Event Status',
        '5001': 'Wi-Fi Scan',
        '5002': 'BLE Scan',
        '3576': 'Positioning Status'
    }
    return TYPE_MAP[measurementId] || ''
}

function getMotionId (str) {
    return getInt(str)
}

function getPositingStatus (str) {
    let status = getInt(str)
    const STATUS_MAP = {
        0: "locate successful.",
        1: "The GNSS scan timed out.",
        2: "The Wi-Fi scan timed out.",
        3: "The Wi-Fi + GNSS scan timed out.",
        4: "The GNSS + Wi-Fi scan timed out.",
        5: "The Bluetooth scan timed out.",
        6: "The Bluetooth + Wi-Fi scan timed out.",
        7: "The Bluetooth + GNSS scan timed out.",
        8: "The Bluetooth + Wi-Fi + GNSS scan timed out.",
        9: "Location Server failed to parse the GNSS location.",
        10: "Location Server failed to parse the Wi-Fi location.",
        11: "Location Server failed to parse the Bluetooth location.",
        12: "Failed to parse location due to the poor accuracy.",
        13: "Time synchronization failed.",
        14: "Failed due to the old Almanac.",
        15: "The GNSS +Bluetooth scan timed out."
    }
    if (STATUS_MAP[status] !== undefined) {
        return {id: status, statusName: STATUS_MAP[status]}
    }
    return getInt(str)
}

function getUpT2000 (messageValue) {
    let interval = 0
    let workMode = getInt(messageValue.substring(10, 12))
    let heartbeatInterval = getMinsByMin(messageValue.substring(14, 18))
    let periodicInterval = getMinsByMin(messageValue.substring(18, 22))
    let eventInterval = getMinsByMin(messageValue.substring(22, 26))
    switch (workMode) {
        case 0:
            interval = heartbeatInterval
            break
        case 1:
            interval = periodicInterval
            break
        case 2:
            interval = eventInterval
            break
    }
    let data = [
        {
            measurementId: '3000', measurementValue: getBattery(messageValue.substring(0, 2))
        }, {
            measurementId: '3502', measurementValue: getSoftVersion(messageValue.substring(2, 6))
        }, {
            measurementId: '3001', measurementValue: getHardVersion(messageValue.substring(6, 10))
        }, {
            measurementId: '3940', measurementValue: workMode
        }, {
            measurementId: '3965', measurementValue: getPositioningStrategy(messageValue.substring(12, 14))
        }, {
            measurementId: '3942', measurementValue: heartbeatInterval
        }, {
            measurementId: '3943', measurementValue: periodicInterval
        }, {
            measurementId: '3944', measurementValue: eventInterval
        }, {
            measurementId: '3974', measurementValue: getInt(messageValue.substring(26, 28))
        }, {
            measurementId: '3976', measurementValue: getInt(messageValue.substring(28, 30))
        }, {
            measurementId: '3977', measurementValue: getInt(messageValue.substring(30, 32))
        }, {
            measurementId: '3900', measurementValue: interval
        }, {
            measurementId: '3978', measurementValue: getInt(messageValue.substring(54, 56))
        }, {
            measurementId: '3979', measurementValue: messageValue.substring(58, 58 + getInt(messageValue.substring(56, 58)) * 2)
        }
    ]
    let motionSetting = getMotionSetting(messageValue.substring(32, 42))
    let staticsSetting = getStaticSetting(messageValue.substring(42, 48))
    let shockSetting = getShockSetting(messageValue.substring(48, 54))
    data = [...data, ...motionSetting, ...staticsSetting, ...shockSetting]
    return data
}

function getMotionSetting (str) {
    return [
        {measurementId: '3946', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3947', measurementValue: getSensorValue(str.substring(2, 6), 1)},
        {measurementId: '3948', measurementValue: getMinsByMin(str.substring(6, 10))},
    ]
}

function getStaticSetting (str) {
    return [
        {measurementId: '3949', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3950', measurementValue: getMinsByMin(str.substring(2, 6))}
    ]
}

function getShockSetting (str) {
    return [
        {measurementId: '3951', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3952', measurementValue: getInt(str.substring(2, 6))}
    ]
}

function getBattery (batteryStr) {
    return loraWANV2DataFormat(batteryStr)
}
function getSoftVersion (softVersion) {
    return `${loraWANV2DataFormat(softVersion.substring(0, 2))}.${loraWANV2DataFormat(softVersion.substring(2, 4))}`
}
function getHardVersion (hardVersion) {
    return `${loraWANV2DataFormat(hardVersion.substring(0, 2))}.${loraWANV2DataFormat(hardVersion.substring(2, 4))}`
}

function getMinsByMin (str) {
    return getInt(str)
}

function getSensorValue (str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function isNull (str) {
    if (str.substring(0, 1) !== '8') {
        return false
    }
    for (let i = 1; i < str.length; i++) {
        if (str.substring(i, i + 1) !== '0') {
            return false
        }
    }
    return true
}

function getSignSensorValue (str, dig = 1) {
    if (isNull(str)) {
        return null
    }
    return loraWANV2DataFormat(str, dig)
}

function bytes2HexString (arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}
function loraWANV2DataFormat (str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return parseFloat('-' + str2 / divisor)
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform (data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary (arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

function getMacAndRssiObj (pair) {
    let pairs = []
    if (pair.length % 14 === 0) {
        for (let i = 0; i < pair.length; i += 14) {
            let mac = getMacAddress(pair.substring(i, i + 12))
            if (mac) {
                let rssi = getInt8RSSI(pair.substring(i + 12, i + 14))
                pairs.push({mac: mac, rssi: rssi})
            } else {
                continue
            }
        }
    }
    return pairs
}

function getMacAddress (str) {
    if (str.toLowerCase() === 'ffffffffffff') {
        return null
    }
    let macArr = []
    for (let i = 1; i < str.length; i++) {
        if (i % 2 === 1) {
            macArr.push(str.substring(i - 1, i + 1))
        }
    }
    let mac = ''
    for (let i = 0; i < macArr.length; i++) {
        mac = mac + macArr[i]
        if (i < macArr.length - 1) {
            mac = mac + ':'
        }
    }
    return mac
}

function getInt8RSSI (str) {
    return loraWANV2DataFormat(str)
}

function getInt (str) {
    return parseInt(str, 16)
}

function getEventStatus (str) {
    let bitStr = getByteArray(str)
    let bitArr = []
    for (let i = 0; i < bitStr.length; i++) {
        bitArr[i] = bitStr.substring(i, i + 1)
    }
    bitArr = bitArr.reverse()
    const EVENT_MAP = {
        0: {id: 1, eventName: "Start moving event."},
        1: {id: 2, eventName: "End movement event."},
        2: {id: 3, eventName: "Motionless event."},
        3: {id: 4, eventName: "Shock event."},
        4: {id: 5, eventName: "Temperature event."},
        5: {id: 6, eventName: "Light event."},
        6: {id: 7, eventName: "SOS event."},
        7: {id: 8, eventName: "Press once event."},
        8: {id: 9, eventName: "disassembled event"}
    }
    let event = []
    for (let i = 0; i < bitArr.length; i++) {
        if (bitArr[i] === '1' && EVENT_MAP[i]) {
            event.push(EVENT_MAP[i])
        }
    }
    return event
}

function getByteArray (str) {
    let bytes = []
    for (let i = 0; i < str.length; i += 2) {
        bytes.push(str.substring(i, i + 2))
    }
    return toBinary(bytes)
}

function getWorkingMode (workingMode) {
    return getInt(workingMode)
}

function getPositioningStrategy (strategy) {
    return getInt(strategy)
}

function getUTCTimestamp(str){
    return parseInt(loraWANV2PositiveDataFormat(str)) * 1000
}

function loraWANV2PositiveDataFormat (str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    return parseInt(str2, 2) / divisor
}

exports.handler = async (event) => {
    try {
        const lorawan_info = event["WirelessMetadata"]["LoRaWAN"];
        const lorawan_data = event["PayloadData"];
        const resolved_data = decodeUplink(lorawan_data, lorawan_info["FPort"])["data"];
        console.log("decoded message:", JSON.stringify(resolved_data))

        // publish all measurement data
        const input = { // PublishRequest
            topic: 'tracker/measurement',
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                eui: lorawan_info["DevEui"],
                timestamp: lorawan_info["Timestamp"],
                data: resolved_data
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```

</details>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder9.png" alt="pir" width={800} height="auto" /></p>

デコーダーを設定した後、`Configuration` → `Permissions` → `Edit`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder10.png" alt="pir" width={800} height="auto" /></p>

下部の`View the xxxxxxxxxxx`ロールをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder11.png" alt="pir" width={800} height="auto" /></p>

`Add permissions` → `Attach policies`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder12.png" alt="pir" width={800} height="auto" /></p>

`AdministratorAccess`を検索し、左側のチェックボックスにチェックを入れ、`Add Permissions`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder13.png" alt="pir" width={800} height="auto" /></p>

### データの確認

`MQTT test client`ページでデータを確認し、`#`を入力して`Subscribe`ボタンをクリックすると、データが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/create-decoder14.png" alt="pir" width={800} height="auto" /></p>

T2000 Trackerの生ペイロードは`t2000-raw`から公開され、デコードされたデータは`tracker/measurement`から公開されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/check-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/T2000_Tracker/Connect_to_AWS/check-data2.png" alt="pir" width={800} height="auto" /></p>

## リソース

[SenseCAP T2000 Tracker Decoder for AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T2000/AWS/SenseCAP_T2000_AWS_Decoder.js)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
