---
description: Connect_to_The_Things_Network
title: Heliumに接続
keywords:
- SenseCAP_T1000_tracker
- Helium
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker.webp
slug: /ja/SenseCAP_T1000_tracker_Helium
last_update:
  date: 11/22/2024
  author: Jessie
---

# SenseCAP T1000をHeliumに接続

## デバイス設定

Heliumに接続する前に、SenseCAP Mate APPでデバイスの基本パラメータを設定する必要があります。詳細については[Get Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker)を確認してください。

- プラットフォームを`Helium`に設定し、`Device EUI`/`APP EUI`/`APP Key`をコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/heliumdevice.png" alt="pir" width={300} height="auto" /></p>

## Heliumコンソール設定

Heliumコンソールは新規アカウントの受付を終了しています。T1000をHeliumコンソールに接続する方法の説明は、既にアカウントを持つユーザー向けにここに残されています。新規ユーザーは、上記のChirpStack LNAの手順を参照するか、ここにある2つの既存の例に基づいて、特定のLNAに必要な手順を決定してください。

### 新しいデバイスの追加

[Heliumコンソール](https://console.helium.com)にログインし、`Devices`セクションに移動して`Add device`ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-helium.png" alt="pir" width={800} height="auto" /></p>

デバイス名**、**LoRaWAN認証情報などの必要なフィールドを入力します。<br/>
次に**Save Device**ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-helium2.png" alt="pir" width={800} height="auto" /></p>

### デコーダー関数の作成

次のステップは、生のバイトを人間が読める形式にデコードする関数を設定することです。<br/>
左側のパネルの`Function`タブに移動します。次に`Add New Function`ボタンをクリックして名前を付けます：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

以下のコードをコピーして変更を保存します。

<details>

<summary>Helium用デコーダー</summary>

```cpp
function Decoder (bytes, port) {
    const bytesString = bytes2HexString(bytes)
    const originMessage = bytesString.toLocaleUpperCase()
    const fport = parseInt(port)
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
    // decoded.messages = measurement
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
            case '01':
                packageLen = 94
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '02':
                packageLen = 32
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '03':
                packageLen = 64
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '04':
                packageLen = 20
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '05':
                packageLen = 10
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '06':
                packageLen = 44
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '07':
                packageLen = 84
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '08':
                packageLen = 70
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '09':
                packageLen = 36
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0A':
                packageLen = 76
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0B':
                packageLen = 62
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0C':
                packageLen = 2
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                break
            case '0D':
                packageLen = 10
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '0E':
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
            case '0F':
                packageLen = 34
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '10':
                packageLen = 26
                if (remainMessage.length < packageLen) {
                    return frameArray
                }
                dataValue = remainMessage.substring(2, packageLen)
                messageValue = remainMessage.substring(packageLen)
                dataObj = {
                    'dataId': dataId, 'dataValue': dataValue
                }
                break
            case '11':
                packageLen = 28
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
    let collectTime = 0
    let groupId = 0
    let shardFlag = {}
    let payload = ''
    let result = []
    let dataArr = []
    switch (dataId) {
        case '01':
            measurementArray = getUpShortInfo(dataValue)
            measurementArray.push(...getMotionSetting(dataValue.substring(30, 40)))
            measurementArray.push(...getStaticSetting(dataValue.substring(40, 46)))
            measurementArray.push(...getShockSetting(dataValue.substring(46, 52)))
            measurementArray.push(...getTempSetting(dataValue.substring(52, 72)))
            measurementArray.push(...getLightSetting(dataValue.substring(72, 92)))
            break
        case '02':
            measurementArray = getUpShortInfo(dataValue)
            break
        case '03':
            measurementArray.push(...getMotionSetting(dataValue.substring(0, 10)))
            measurementArray.push(...getStaticSetting(dataValue.substring(10, 16)))
            measurementArray.push(...getShockSetting(dataValue.substring(16, 22)))
            measurementArray.push(...getTempSetting(dataValue.substring(22, 42)))
            measurementArray.push(...getLightSetting(dataValue.substring(42, 62)))
            break
        case '04':
            let interval = 0
            let workMode = getInt(dataValue.substring(0, 2))
            let heartbeatInterval = getMinsByMin(dataValue.substring(4, 8))
            let periodicInterval = getMinsByMin(dataValue.substring(8, 12))
            let eventInterval = getMinsByMin(dataValue.substring(12, 16))
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
                {measurementId: '3940', type: 'Work Mode', measurementValue: workMode},
                {measurementId: '3942', type: 'Heartbeat Interval', measurementValue: heartbeatInterval},
                {measurementId: '3943', type: 'Periodic Interval', measurementValue: periodicInterval},
                {measurementId: '3944', type: 'Event Interval', measurementValue: eventInterval},
                {measurementId: '3941', type: 'SOS Mode', measurementValue: getSOSMode(dataValue.substring(16, 18))},
                {measurementId: '3900', type: 'Uplink Interval', measurementValue: interval}
            ]
            break;
        case '05':
            measurementArray = [
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(0, 2))},
                {measurementId: '3940', type: 'Work Mode', measurementValue: getWorkingMode(dataValue.substring(2, 4))},
                {measurementId: '3965', type: 'Positioning Strategy', measurementValue: getPositioningStrategy(dataValue.substring(4, 6))},
                {measurementId: '3941', type: 'SOS Mode', measurementValue: getSOSMode(dataValue.substring(6, 8))}
            ]
            break
        case '06':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '4197', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Longitude', measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))},
                {measurementId: '4198', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Latitude', measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Air Temperature', measurementValue: getSensorValue(dataValue.substring(32, 36), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Light', measurementValue: getSensorValue(dataValue.substring(36, 40))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Battery', measurementValue: getBattery(dataValue.substring(40, 42))}
            ]
            break
        case '07':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Air Temperature', measurementValue: getSensorValue(dataValue.substring(72, 76), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Light', measurementValue: getSensorValue(dataValue.substring(76, 80))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Battery', measurementValue: getBattery(dataValue.substring(80, 82))}
            ]
            break
        case '08':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'BLE Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '4097', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Air Temperature', measurementValue: getSensorValue(dataValue.substring(58, 62), 10)},
                {measurementId: '4199', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Light', measurementValue: getSensorValue(dataValue.substring(62, 66))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Battery', measurementValue: getBattery(dataValue.substring(66, 68))}
            ]
            break
        case '09':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '4197', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Longitude', measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))},
                {measurementId: '4198', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Latitude', measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Battery', measurementValue: getBattery(dataValue.substring(32, 34))}
            ]
            break
        case '0A':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Battery', measurementValue: getBattery(dataValue.substring(72, 74))}
            ]
            break
        case '0B':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},
                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'BLE Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '3000', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Battery', measurementValue: getBattery(dataValue.substring(58, 60))},
            ]
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
        case '0E':
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
        case '0F':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            shardFlag = getShardFlag(dataValue.substring(26, 28))
            groupId = getInt(dataValue.substring(28, 32))
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
            measurementArray.push({
                measurementId: '4097',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Air Temperature',
                measurementValue: '' + getSensorValue(dataValue.substring(16, 20), 10)
            })
            measurementArray.push({
                measurementId: '4199',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Light',
                measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
            })
            measurementArray.push({
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Battery',
                measurementValue: '' + getBattery(dataValue.substring(24, 26))
            })
            break
        case '10':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            shardFlag = getShardFlag(dataValue.substring(18, 20))
            groupId = getInt(dataValue.substring(20, 24))
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
            measurementArray.push({
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Battery',
                measurementValue: '' + getBattery(dataValue.substring(16, 18))
            })
            break
        case '11':
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
            if (!isNaN(parseFloat(getSensorValue(dataValue.substring(16, 20), 10)))) {
                measurementArray.push({
                    timestamp: collectTime,
                    measurementId: '4097',
                    type: 'Air Temperature',
                    measurementValue: '' + getSensorValue(dataValue.substring(16, 20), 10)
                })
            }
            if (!isNaN(parseFloat(getSensorValue(dataValue.substring(20, 24))))) {
                measurementArray.push({
                    timestamp: collectTime,
                    measurementId: '4199',
                    type: 'Light',
                    measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
                })
            }
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '3000',
                type: 'Battery',
                measurementValue: '' + getBattery(dataValue.substring(24, 26))
            })
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
            return {id:status, statusName:"Positioning successful."}
        case 1:
            return {id:status, statusName:"The GNSS scan timed out and failed to obtain the location."}
        case 2:
            return {id:status, statusName:"The Wi-Fi scan timed out and failed to obtain the location."}
        case 3:
            return {id:status, statusName:"The Wi-Fi + GNSS scan timed out and failed to obtain the location."}
        case 4:
            return {id:status, statusName:"The GNSS + Wi-Fi scan timed out and failed to obtain the location."}
        case 5:
            return {id:status, statusName:"The Bluetooth scan timed out and failed to obtain the location."}
        case 6:
            return {id:status, statusName:"The Bluetooth + Wi-Fi scan timed out and failed to obtain the location."}
        case 7:
            return {id:status, statusName:"The Bluetooth + GNSS scan timed out and failed to obtain the location."}
        case 8:
            return {id:status, statusName:"The Bluetooth + Wi-Fi + GNSS scan timed out and failed to obtain the location."}
        case 9:
            return {id:status, statusName:"Location Server failed to parse the GNSS location."}
        case 10:
            return {id:status, statusName:"Location Server failed to parse the Wi-Fi location."}
        case 11:
            return {id:status, statusName:"Location Server failed to parse the Bluetooth location."}
        case 12:
            return {id:status, statusName:"Failed to parse the GNSS location due to the poor accuracy."}
        case 13:
            return {id:status, statusName:"Time synchronization failed."}
        case 14:
            return {id:status, statusName:"Failed to obtain location due to the old Almanac."}
    }
    return getInt(str)
}

function getUpShortInfo (messageValue) {
    return [
        {
            measurementId: '3000', type: 'Battery', measurementValue: getBattery(messageValue.substring(0, 2))
        }, {
            measurementId: '3502', type: 'Firmware Version', measurementValue: getSoftVersion(messageValue.substring(2, 6))
        }, {
            measurementId: '3001', type: 'Hardware Version', measurementValue: getHardVersion(messageValue.substring(6, 10))
        }, {
            measurementId: '3940', type: 'Work Mode', measurementValue: getWorkingMode(messageValue.substring(10, 12))
        }, {
            measurementId: '3965', type: 'Positioning Strategy', measurementValue: getPositioningStrategy(messageValue.substring(12, 14))
        }, {
            measurementId: '3942', type: 'Heartbeat Interval', measurementValue: getMinsByMin(messageValue.substring(14, 18))
        }, {
            measurementId: '3943', type: 'Periodic Interval', measurementValue: getMinsByMin(messageValue.substring(18, 22))
        }, {
            measurementId: '3944', type: 'Event Interval', measurementValue: getMinsByMin(messageValue.substring(22, 26))
        }, {
            measurementId: '3945', type: 'Sensor Enable', measurementValue: getInt(messageValue.substring(26, 28))
        }, {
            measurementId: '3941', type: 'SOS Mode', measurementValue: getSOSMode(messageValue.substring(28, 30))
        }
    ]
}

function getMotionSetting (str) {
    return [
        {measurementId: '3946', type: 'Motion Enable', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3947', type: 'Any Motion Threshold', measurementValue: getSensorValue(str.substring(2, 6), 1)},
        {measurementId: '3948', type: 'Motion Start Interval', measurementValue: getMinsByMin(str.substring(6, 10))},
    ]
}

function getStaticSetting (str) {
    return [
        {measurementId: '3949', type: 'Static Enable', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3950', type: 'Device Static Timeout', measurementValue: getMinsByMin(str.substring(2, 6))}
    ]
}

function getShockSetting (str) {
    return [
        {measurementId: '3951', type: 'Shock Enable', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3952', type: 'Shock Threshold', measurementValue: getInt(str.substring(2, 6))}
    ]
}

function getTempSetting (str) {
    return [
        {measurementId: '3953', type: 'Temp Enable', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3954', type: 'Event Temp Interval', measurementValue: getMinsByMin(str.substring(2, 6))},
        {measurementId: '3955', type: 'Event Temp Sample Interval', measurementValue: getSecondsByInt(str.substring(6, 10))},
        {measurementId: '3956', type: 'Temp ThMax', measurementValue: getSensorValue(str.substring(10, 14), 10)},
        {measurementId: '3957', type: 'Temp ThMin', measurementValue: getSensorValue(str.substring(14, 18), 10)},
        {measurementId: '3958', type: 'Temp Warning Type', measurementValue: getInt(str.substring(18, 20))}
    ]
}

function getLightSetting (str) {
    return [
        {measurementId: '3959', type: 'Light Enable', measurementValue: getInt(str.substring(0, 2))},
        {measurementId: '3960', type: 'Event Light Interval', measurementValue: getMinsByMin(str.substring(2, 6))},
        {measurementId: '3961', type: 'Event Light Sample Interval', measurementValue: getSecondsByInt(str.substring(6, 10))},
        {measurementId: '3962', type: 'Light ThMax', measurementValue: getSensorValue(str.substring(10, 14), 10)},
        {measurementId: '3963', type: 'Light ThMin', measurementValue: getSensorValue(str.substring(14, 18), 10)},
        {measurementId: '3964', type: 'Light Warning Type', measurementValue: getInt(str.substring(18, 20))}
    ]
}

function getShardFlag (str) {
    let bitStr = getByteArray(str)
    return {
        count: parseInt(bitStr.substring(0, 4), 2),
        index: parseInt(bitStr.substring(4), 2)
    }
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

function getSecondsByInt (str) {
    return getInt(str)
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

function getSOSMode (str) {
    return loraWANV2DataFormat(str)
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
    // return getInt(str)
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
                event.push({id:1, eventName:"Start moving event."})
                break
            case 1:
                event.push({id:2, eventName:"End movement event."})
                break
            case 2:
                event.push({id:3, eventName:"Motionless event."})
                break
            case 3:
                event.push({id:4, eventName:"Shock event."})
                break
            case 4:
                event.push({id:5, eventName:"Temperature event."})
                break
            case 5:
                event.push({id:6, eventName:"Light event."})
                break
            case 6:
                event.push({id:7, eventName:"SOS event."})
                break
            case 7:
                event.push({id:8, eventName:"Press once event."})
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
```

</details>

### データの確認

デバイスがネットワークに接続しようとすると、呼吸ライトが点滅します。デバイスがネットワークに正常に参加すると、呼吸ライトが素早く点滅し、軽やかで陽気なメロディーが鳴ります。

その後、Heliumコンソールでデータを確認できます。

## 注意事項

:::caution note
**EU868**/**RU864**地域で動作するユーザーの場合：

アップロード間隔を4分未満に設定することは**推奨されません**。

アップロード間隔を4分未満に設定すると、デバイスのアップリンクと現在時刻の間でタイムスタンプの不整合が発生する可能性があります。
:::

**理由は以下の通りです**：

EU868における[1%デューティサイクル](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle)制約により、デバイスは各アップリンク送信に対して約4分間辛抱強く待機する必要があります。さらに、Heliumネットワークは[ADR](https://docs.helium.com/console/profiles/#adr-algorithm)ビットが1に設定された20個の連続したアップリンクパケットを蓄積した後にのみ、データレートと電力補正を開始します。

そのため、設定したアップロード間隔が4分未満の場合、リアルタイムデータは一時的にRAMに保存され、Heliumネットワークがデータレートと電力補正をトリガーするまで保持されてからアップロードされます。

## ChirpStack LNS

新規ユーザーの場合、Heliumネットワーク上のデバイスからデータを受信するには、LNS（LoraWANネットワークサーバー）に関連付ける必要があります。通常は[パブリックLNS](https://docs.helium.com/iot/find-a-lns-provider/)の1つを使用し、その多くは**ChirpStack**を使用していますが、独自のLNSをHeliumに接続することも可能です。

一般的なプロセスに精通している方向けのTL;DR;は以下の通りです：

- 適切な地域とコーデック（以下のソースを参照）でデバイスプロファイルを作成<br/>
- `devEUI`、`appKey`、およびAppEUIを含む`app_eui`変数でデバイスを作成。これら3つの値はすべて`SenseCraft`アプリから取得

### デバイスプロファイルの追加

最初のステップは、T1000 TrackerのデバイスプロファイルをChirpStack LNSに追加することです。
これにより、LNSはT1000から受信したパケットをデコードする方法と、その他の多くの設定を認識します。

ChirpStackダッシュボードで`Device Profiles`を選択し、`Add device profile`をクリックします。

![image](https://github.com/user-attachments/assets/7e6984e2-178b-446e-afda-29dd033c662f)

一般タブで、認識できるデバイスプロファイル名を入力し、適切な地域パラメータを選択します。

LoRaWAN MACバージョン：`1.0.4`<br/>

予想されるアップリンク間隔も設定できます。これが主に制御するのは、LNSユーザーインターフェースでデバイスがアクティブ対非アクティブとして表示されるタイミングです。LNSを通じたパケット配信には影響しません。

![image](https://github.com/user-attachments/assets/bb83141f-a447-437b-a29d-27e16a20ce7a)

コーデックタブで`JavaScript functions`を選択し、コーデックを入力します：

:::tip
ChirpStackには2つのバージョンがあります。適切なものを選択してください：

[ChirpStack V4用デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)

[ChirpStack V3用デコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/ChirpStack/SenseCAP_T1000_ChirpStackV3_Decoder.js)
:::

![image](https://github.com/user-attachments/assets/bc572786-9853-4b29-baf1-d6f4349b4aa5)

### アプリケーションとデバイスの追加

次のステップは、アプリケーションを作成し、実際のデバイスを追加することです。

`Applications`セクションに移動し、新しいアプリケーションを追加します。

![image](https://github.com/user-attachments/assets/5dc700c6-7faa-4d65-9d94-aa2543f06254)

次に、アプリケーションにデバイスを追加し、先ほどSenseCraftアプリで取得した`devEUI`を入力します。

![image](https://github.com/user-attachments/assets/93febc5b-bc8f-430b-83e0-55d89690355c)

変数タブで、SenseCraftアプリの`AppEUI`を値として持つ`app_eui`という変数を追加します：

![image](https://github.com/user-attachments/assets/90e529d7-811b-49cd-902d-85e36b2f6313)

送信をクリックすると、`AppKey`を求めるページが表示されます。これも先ほどSenseCraftアプリを使用して取得したものです：

![image](https://github.com/user-attachments/assets/db33a84c-c31f-402f-b9b1-53fa47fc497d)

### デバイス接続の確認

`LoRaWAN frames`タブでスピナーが表示され、パケットが受信/送信されると表示されます。

T1000 Trackerのボタンを押して測定を実行し、LNSに接続するための`join request`を送信します。
これが発生すると、次のような画面が表示されるはずです：

![image](https://github.com/user-attachments/assets/060873cb-c1d8-40bd-9ad3-7333966d3558)

参加プロセスが実行されると、T1000はデータを送信します。LNSはネットワーク周波数などに関する情報を返しますが、その後はデータを含むアップリンクのみが存在するはずです。

## リソース

[Helium用SenseCAP T1000 Trackerデコーダー](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000_Helium_Decoder.js)
