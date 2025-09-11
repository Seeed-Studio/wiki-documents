---
description: Wio Tracker 1110 を TTN に接続する
title: TTN に接続する
keywords:
- トラッカー
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/connect_wio_tracker_to_TTN
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[The Things Stack(TTS)](https://www.thethingsnetwork.org/) は、LoRaWAN® ソリューションにおける重要なコンポーネントである LoRaWAN® ネットワークサーバースタックです。本章では、Wio Tracker 1110 開発ボードを The Things Network に接続する方法を説明します。

## 開発ボードの設定

TTS に接続する前に、SenseCAP Mate アプリでボードの基本パラメータを設定する必要があります。詳細は [Get Started](https://wiki.seeedstudio.com/ja/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway) を参照してください。

* プラットフォームを TTN に設定し、`Device EUI`、`APP EUI`、`APP Key` をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

## The Things Stack の設定

### ステップ 1: アプリケーションの作成

Applications ページに移動し、"+Create application" をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application ID を入力し、Create Application をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

### ステップ 2: デバイスの登録

`Device EUI`、`APP EUI`、`APP Key` を貼り付け、デバイスに応じた `frequency plan` を選択し、`Register end device` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/register-wio.png" alt="pir" width={800} height="auto" /></p>

:::tip
`JoinEUI` は以前 `AppEUI` と呼ばれていましたが、同じものです。
:::

### ステップ 3: デコーダーの設定

`Payload formatters` に移動し、Formatter タイプを `Custom Javascript formatter` に設定し、以下のコードをコピーします。

<details>

<summary>TTN 用</summary>

```cpp
function decodeUplink (input) {
    const bytes = input['bytes']
    const fport = parseInt(input['fPort'])
    const bytesString = bytes2HexString(bytes)
    const originMessage = bytesString.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    }
    if (fport === 199 || fport === 192) {
        decoded.messages.push({fport: fport, payload: bytesString})
        return { data: decoded }
    }
    if (fport !== 5) {
        decoded.valid = false
        return { data: decoded }
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

    for (let i = 0; i < messageValue.length; i++) {
        let remainMessage = messageValue
        let dataId = remainMessage.substring(0, 2).toUpperCase()
        let dataValue
        let dataObj = {}
        let packageLen
        switch (dataId) {
            case '12':
                packageLen = getInt(remainMessage.substring(8, 10)) * 2 + 10
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, 8) + remainMessage.substring(10, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '13':
                packageLen = 24
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '14':
                packageLen = 74
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '15':
                packageLen = 60
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '16':
                packageLen = 18
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '17':
                let byteCount = parseInt(remainMessage.substring(2, 4), 16)
                packageLen = getInt(remainMessage.substring(2, 4)) * 2
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(4, packageLen)
                messageValue = remainMessage.substring(packageLen)
                if (isNaN(byteCount) || byteCount < 13 || (byteCount - 9) % 4 !== 0 || byteCount > 49) {
                    continue
                }
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '18':
                packageLen = 56
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            default:
                return frameArray
        }
        if (dataValue.length < 2) {
            break
        }
        frameArray.push(dataObj)
    }
    return frameArray
}

function deserialize (dataId, dataValue) {
    let measurementArray = []
    let eventList = []
    let measurement = {}
    let collectTime = parseInt(new Date().getTime() / 1000)
    let groupId = 0
    let shardFlag = {}
    let payload = ''
    let value
    let result = []
    let dataArr = []
    switch (dataId) {
        case '12':
            shardFlag = getShardFlag(dataValue.substring(0, 2))
            groupId = getInt(dataValue.substring(2, 6))
            payload = dataValue.substring(6)
            measurement = {
                measurementId: '6152',
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'gnss-ng payload',
                measurementValue: payload
            }
            measurementArray.push(measurement)
            break
        case '13':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            shardFlag = getShardFlag(dataValue.substring(16, 18))
            groupId = getInt(dataValue.substring(18, 22))
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            })
            break
        case '14':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))}
            ]
            break
        case '15':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'BLE Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
            ]
            break
        case '16':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray.push({
                measurementId: '3576',
                timestamp: collectTime,
                type: 'Positioning Status',
                measurementValue: getPositingStatus(dataValue.substring(0, 2))
            })
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '4200',
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(2, 8))
            })
            break
        case '17':
            collectTime = getUTCTimestamp(dataValue.substring(6, 14))
            value = getUnsignedSensorValue(dataValue.substring(0, 6))
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4208',
                    measureTime: collectTime,
                    type: 'Custom Event Status',
                    measurementValue: value
                })
            }
            let initId = 4165
            for (let i = 14; i < dataValue.length; i += 8) {
                value = getUnsignedSensorValue(dataValue.substring(i, i + 8))
                if (value !== null) {
                    measurementArray.push({
                        timestamp: collectTime,
                        measurementId: initId++,
                        type: 'Custom Measurement Type',
                        measurementValue: value
                    })
                }
            }
            break
        case '18':
            collectTime = getUTCTimestamp(dataValue.substring(6, 14))
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            })
            value = getSignSensorValue(dataValue.substring(14, 18), 10)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4097',
                    timestamp: collectTime,
                    type: 'Air Temperature',
                    measurementValue: value
                })
            }
            value = getUnsignedSensorValue(dataValue.substring(18, 20), 1)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4098',
                    timestamp: collectTime,
                    type: 'Air Humidity',
                    measurementValue: value
                })
            }
            value = getUnsignedSensorValue(dataValue.substring(20, 26), 1)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4101',
                    timestamp: collectTime,
                    type: 'Barometric Pressure',
                    measurementValue: value
                })
            }
            value = getUnsignedSensorValue(dataValue.substring(26, 30), 1)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4115',
                    timestamp: collectTime,
                    type: 'Distance',
                    measurementValue: value
                })
            }
            value = getUnsignedSensorValue(dataValue.substring(30, 34), 100)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4190',
                    timestamp: collectTime,
                    type: 'UV Index',
                    measurementValue: value
                })
            }
            value = getUnsignedSensorValue(dataValue.substring(34, 38), 1)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4206',
                    timestamp: collectTime,
                    type: 'VOC_INDEX',
                    measurementValue: value
                })
            }
            value = getUnsignedSensorValue(dataValue.substring(38, 42), 1)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4207',
                    timestamp: collectTime,
                    type: 'Noise',
                    measurementValue: value
                })
            }
            value = getSignSensorValue(dataValue.substring(42, 46), 100)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4150',
                    timestamp: collectTime,
                    type: ' AccelerometerX',
                    measurementValue: value
                })
            }
            value = getSignSensorValue(dataValue.substring(46, 50), 100)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4151',
                    timestamp: collectTime,
                    type: 'AccelerometerY',
                    measurementValue: value
                })
            }
            value = getSignSensorValue(dataValue.substring(50, 54), 100)
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4152',
                    timestamp: collectTime,
                    type: 'AccelerometerZ',
                    measurementValue: value
                })
            }
            break
    }
    return measurementArray
}

function getMotionId (str) {
    return getInt(str)
}

function getPositingStatus (str) {
    let status = getInt(str)
    switch (status) {
        case 0:
            return {id:status, statusName:"位置取得成功。"}
        case 1:
            return {id:status, statusName:"GNSS スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 2:
            return {id:status, statusName:"Wi-Fi スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 3:
            return {id:status, statusName:"Wi-Fi + GNSS スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 4:
            return {id:status, statusName:"GNSS + Wi-Fi スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 5:
            return {id:status, statusName:"Bluetooth スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 6:
            return {id:status, statusName:"Bluetooth + Wi-Fi スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 7:
            return {id:status, statusName:"Bluetooth + GNSS スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 8:
            return {id:status, statusName:"Bluetooth + Wi-Fi + GNSS スキャンがタイムアウトし、位置取得に失敗しました。"}
        case 9:
            return {id:status, statusName:"Location Server が GNSS 位置を解析できませんでした。"}
        case 10:
            return {id:status, statusName:"Location Server が Wi-Fi 位置を解析できませんでした。"}
        case 11:
            return {id:status, statusName:"Location Server が Bluetooth 位置を解析できませんでした。"}
        case 12:
            return {id:status, statusName:"精度が低いため GNSS 位置の解析に失敗しました。"}
        case 13:
            return {id:status, statusName:"時間同期に失敗しました。"}
        case 14:
            return {id:status, statusName:"古いアルマナックのため位置取得に失敗しました。"}
    }
    return getInt(str)
}

function getShardFlag (str) {
    let bitStr = getByteArray(str)
    return {
        count: parseInt(bitStr.substring(0, 4), 2),
        index: parseInt(bitStr.substring(4), 2)
    }
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
        return '-' + str2 / divisor
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
    let event = []
    for (let i = 0; i < bitArr.length; i++) {
        if (bitArr[i] !== '1') {
            continue
        }
        switch (i){
            case 0:
                event.push({id:1, eventName:"移動開始イベント。"})
                break
            case 1:
                event.push({id:2, eventName:"移動終了イベント。"})
                break
            case 2:
                event.push({id:3, eventName:"静止イベント。"})
                break
            case 3:
                event.push({id:4, eventName:"衝撃イベント。"})
                break
            case 4:
                event.push({id:5, eventName:"温度イベント。"})
                break
            case 5:
                event.push({id:6, eventName:"光イベント。"})
                break
            case 6:
                event.push({id:7, eventName:"SOS イベント。"})
                break
            case 7:
                event.push({id:8, eventName:"1回押下イベント。"})
                break
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

function getUTCTimestamp(str){
    return parseInt(loraWANV2PositiveDataFormat(str)) * 1000
}
function getUnsignedSensorValue (str, dig = 1) {
    if (isNull(str)) {
        return null
    }
    return parseInt(str, 16) / dig
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
function loraWANV2PositiveDataFormat (str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    return parseInt(str2, 2) / divisor
}
```
</details>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/c-decoder.png" alt="pir" width={800} height="auto" /></p>


### ステップ 4: データを確認する

デバイスがネットワークに接続しようとすると、ブリージングライトが点滅します。デバイスがネットワークに正常に接続されると、ブリージングライトが速く点滅し、軽快で楽しいメロディーが流れます。

その後、TTS コンソールでデータを確認することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>


## リソース

[Wio Tracker 1110 開発ボード用 TTN デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/WM1110/TTN/SenseCAP_WM1110_TTN_Decoder.js)