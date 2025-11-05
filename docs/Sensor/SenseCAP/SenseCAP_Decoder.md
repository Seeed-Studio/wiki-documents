---
description: SenseCAP_Decoder
title: SenseCAP Decoder
keywords:
- SenseCAP_Decoder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Decoder
last_update:
  date: 8/24/2023
  author: Jessie
---

SenseCAP decoder is used for decoding the LoRaWAN messages sent from the SenseCAP LoRaWAN® devices. After decoding, users' applications will get more friendly and readable messages.

### SenseCAP T1000 Tracker

[**SenseCAP T1000**](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig) is a compact LoRaWAN® tracker that utilizes GNSS/Wi-Fi/Bluetooth for precise indoor & outdoor location tracking. It boasts self-geo-adaptive capabilities, local data storage, and an impressive months of battery life. Additionally, it is equipped with temperature, light, and motion sensors, making it ideal for a variety of location-based applications.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️ </font></span></strong>
    </a>
</div>

#### Decoder

<details>

<summary>For TTN(ChirpStack V4)</summary>

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
                type: 'Positing Status',
                measurementValue: '' + getPositingStatus(dataValue.substring(0, 2))
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

<details>

<summary>For Helium</summary>

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
                type: 'Positing Status',
                measurementValue: '' + getPositingStatus(dataValue.substring(0, 2))
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

<details>

<summary>For ChirpStack(V3)</summary>

```cpp
// Decode decodes an array of bytes into an object.
//  - fPort contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
//  - variables contains the device variables e.g. {"calibration": "3.5"} (both the key / value are of type string)
// The function must return an object, e.g. {"temperature": 22.5}
function Decode(fPort, bytes, variables) {
    var bytesString = bytes2HexString(bytes).toLocaleUpperCase();
    var fport = parseInt(fPort);
    var originMessage = bytesString.toLocaleUpperCase();
    var decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    };
    if (fport === 199 || fport === 192) {
        decoded.messages.push({
            fport: fport,
            payload: bytesString
        });
        return {
            data: decoded
        };
    }
    if (fport !== 5) {
        decoded.valid = false;
        return {
            data: decoded
        };
    }
    var measurement = messageAnalyzed(originMessage);
    if (measurement.length === 0) {
        decoded.valid = false;
        return {
            data: decoded
        };
    }
    var _iterator = _createForOfIteratorHelper(measurement),
        _step;
    try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var message = _step.value;
            if (message.length === 0) {
                continue;
            }
            var elements = [];
            var _iterator2 = _createForOfIteratorHelper(message),
                _step2;
            try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var element = _step2.value;
                    if (element.errorCode) {
                        decoded.err = element.errorCode;
                        decoded.errMessage = element.error;
                    } else {
                        elements.push(element);
                    }
                }
            } catch (err) {
                _iterator2.e(err);
            } finally {
                _iterator2.f();
            }
            if (elements.length > 0) {
                decoded.messages.push(elements);
            }
        }
        // decoded.messages = measurement
    } catch (err) {
        _iterator.e(err);
    } finally {
        _iterator.f();
    }
    return {
        data: decoded
    };
}
function messageAnalyzed(messageValue) {
    try {
        var frames = unpack(messageValue);
        var measurementResultArray = [];
        for (var i = 0; i < frames.length; i++) {
            var item = frames[i];
            var dataId = item.dataId;
            var dataValue = item.dataValue;
            var measurementArray = deserialize(dataId, dataValue);
            measurementResultArray.push(measurementArray);
        }
        return measurementResultArray;
    } catch (e) {
        return e.toString();
    }
}
function unpack(messageValue) {
    var frameArray = [];
    for (var i = 0; i < messageValue.length; i++) {
        var remainMessage = messageValue;
        var dataId = remainMessage.substring(0, 2).toUpperCase();
        var dataValue = void 0;
        var dataObj = {};
        var packageLen = void 0;
        switch (dataId) {
            case '01':
                packageLen = 94;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '02':
                packageLen = 32;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '03':
                packageLen = 64;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '04':
                packageLen = 20;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '05':
                packageLen = 10;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '06':
                packageLen = 44;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '07':
                packageLen = 84;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '08':
                packageLen = 70;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '09':
                packageLen = 36;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '0A':
                packageLen = 76;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '0B':
                packageLen = 62;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '0C':
                packageLen = 2;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                break;
            case '0D':
                packageLen = 10;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '0E':
                packageLen = getInt(remainMessage.substring(8, 10)) * 2 + 10;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, 8) + remainMessage.substring(10, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '0F':
                packageLen = 34;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '10':
                packageLen = 26;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '11':
                packageLen = 28;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            default:
                return frameArray;
        }
        if (dataValue.length < 2) {
            break;
        }
        frameArray.push(dataObj);
    }
    return frameArray;
}
function deserialize(dataId, dataValue) {
    var _measurementArray, _measurementArray2, _measurementArray3, _measurementArray4, _measurementArray5, _measurementArray6, _measurementArray7, _measurementArray8, _measurementArray9, _measurementArray10;
    var measurementArray = [];
    var eventList = [];
    var measurement = {};
    var collectTime = 0;
    var groupId = 0;
    var shardFlag = {};
    var payload = '';
    var result = [];
    var dataArr = [];
    switch (dataId) {
        case '01':
            measurementArray = getUpShortInfo(dataValue);
            (_measurementArray = measurementArray).push.apply(_measurementArray, _toConsumableArray(getMotionSetting(dataValue.substring(30, 40))));
            (_measurementArray2 = measurementArray).push.apply(_measurementArray2, _toConsumableArray(getStaticSetting(dataValue.substring(40, 46))));
            (_measurementArray3 = measurementArray).push.apply(_measurementArray3, _toConsumableArray(getShockSetting(dataValue.substring(46, 52))));
            (_measurementArray4 = measurementArray).push.apply(_measurementArray4, _toConsumableArray(getTempSetting(dataValue.substring(52, 72))));
            (_measurementArray5 = measurementArray).push.apply(_measurementArray5, _toConsumableArray(getLightSetting(dataValue.substring(72, 92))));
            break;
        case '02':
            measurementArray = getUpShortInfo(dataValue);
            break;
        case '03':
            (_measurementArray6 = measurementArray).push.apply(_measurementArray6, _toConsumableArray(getMotionSetting(dataValue.substring(0, 10))));
            (_measurementArray7 = measurementArray).push.apply(_measurementArray7, _toConsumableArray(getStaticSetting(dataValue.substring(10, 16))));
            (_measurementArray8 = measurementArray).push.apply(_measurementArray8, _toConsumableArray(getShockSetting(dataValue.substring(16, 22))));
            (_measurementArray9 = measurementArray).push.apply(_measurementArray9, _toConsumableArray(getTempSetting(dataValue.substring(22, 42))));
            (_measurementArray10 = measurementArray).push.apply(_measurementArray10, _toConsumableArray(getLightSetting(dataValue.substring(42, 62))));
            break;
        case '04':
            var interval = 0;
            var workMode = getInt(dataValue.substring(0, 2));
            var heartbeatInterval = getMinsByMin(dataValue.substring(4, 8));
            var periodicInterval = getMinsByMin(dataValue.substring(8, 12));
            var eventInterval = getMinsByMin(dataValue.substring(12, 16));
            switch (workMode) {
                case 0:
                    interval = heartbeatInterval;
                    break;
                case 1:
                    interval = periodicInterval;
                    break;
                case 2:
                    interval = eventInterval;
                    break;
            }
            measurementArray = [{
                measurementId: '3940',
                type: 'Work Mode',
                measurementValue: workMode
            }, {
                measurementId: '3942',
                type: 'Heartbeat Interval',
                measurementValue: heartbeatInterval
            }, {
                measurementId: '3943',
                type: 'Periodic Interval',
                measurementValue: periodicInterval
            }, {
                measurementId: '3944',
                type: 'Event Interval',
                measurementValue: eventInterval
            }, {
                measurementId: '3941',
                type: 'SOS Mode',
                measurementValue: getSOSMode(dataValue.substring(16, 18))
            }, {
                measurementId: '3900',
                type: 'Uplink Interval',
                measurementValue: interval
            }];
            break;
        case '05':
            measurementArray = [{
                measurementId: '3000',
                type: 'Battery',
                measurementValue: getBattery(dataValue.substring(0, 2))
            }, {
                measurementId: '3940',
                type: 'Work Mode',
                measurementValue: getWorkingMode(dataValue.substring(2, 4))
            }, {
                measurementId: '3965',
                type: 'Positioning Strategy',
                measurementValue: getPositioningStrategy(dataValue.substring(4, 6))
            }, {
                measurementId: '3941',
                type: 'SOS Mode',
                measurementValue: getSOSMode(dataValue.substring(6, 8))
            }];
            break;
        case '06':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '4197',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Longitude',
                measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))
            }, {
                measurementId: '4198',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Latitude',
                measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))
            }, {
                measurementId: '4097',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Air Temperature',
                measurementValue: getSensorValue(dataValue.substring(32, 36), 10)
            }, {
                measurementId: '4199',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Light',
                measurementValue: getSensorValue(dataValue.substring(36, 40))
            }, {
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Battery',
                measurementValue: getBattery(dataValue.substring(40, 42))
            }];
            break;
        case '07':
            eventList = getEventStatus(dataValue.substring(0, 6));
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '5001',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Wi-Fi Scan',
                measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))
            }, {
                measurementId: '4097',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Air Temperature',
                measurementValue: getSensorValue(dataValue.substring(72, 76), 10)
            }, {
                measurementId: '4199',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Light',
                measurementValue: getSensorValue(dataValue.substring(76, 80))
            }, {
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Battery',
                measurementValue: getBattery(dataValue.substring(80, 82))
            }];
            break;
        case '08':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '5002',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'BLE Scan',
                measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))
            }, {
                measurementId: '4097',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Air Temperature',
                measurementValue: getSensorValue(dataValue.substring(58, 62), 10)
            }, {
                measurementId: '4199',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Light',
                measurementValue: getSensorValue(dataValue.substring(62, 66))
            }, {
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Battery',
                measurementValue: getBattery(dataValue.substring(66, 68))
            }];
            break;
        case '09':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '4197',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Longitude',
                measurementValue: parseFloat(getSensorValue(dataValue.substring(16, 24), 1000000))
            }, {
                measurementId: '4198',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Latitude',
                measurementValue: parseFloat(getSensorValue(dataValue.substring(24, 32), 1000000))
            }, {
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Battery',
                measurementValue: getBattery(dataValue.substring(32, 34))
            }];
            break;
        case '0A':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '5001',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Wi-Fi Scan',
                measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))
            }, {
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Battery',
                measurementValue: getBattery(dataValue.substring(72, 74))
            }];
            break;
        case '0B':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '5002',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'BLE Scan',
                measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))
            }, {
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Battery',
                measurementValue: getBattery(dataValue.substring(58, 60))
            }];
            break;
        case '0D':
            var errorCode = getInt(dataValue);
            var error = '';
            switch (errorCode) {
                case 1:
                    error = 'FAILED TO OBTAIN THE UTC TIMESTAMP';
                    break;
                case 2:
                    error = 'ALMANAC TOO OLD';
                    break;
                case 3:
                    error = 'DOPPLER ERROR';
                    break;
            }
            measurementArray.push({
                errorCode: errorCode,
                error: error
            });
            break;
        case '0E':
            shardFlag = getShardFlag(dataValue.substring(0, 2));
            groupId = getInt(dataValue.substring(2, 6));
            payload = dataValue.substring(6);
            measurement = {
                measurementId: '6152',
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'gnss-ng payload',
                measurementValue: payload
            };
            measurementArray.push(measurement);
            break;
        case '0F':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            shardFlag = getShardFlag(dataValue.substring(26, 28));
            groupId = getInt(dataValue.substring(28, 32));
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            });
            measurementArray.push({
                measurementId: '4097',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Air Temperature',
                measurementValue: '' + getSensorValue(dataValue.substring(16, 20), 10)
            });
            measurementArray.push({
                measurementId: '4199',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Light',
                measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
            });
            measurementArray.push({
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Battery',
                measurementValue: '' + getBattery(dataValue.substring(24, 26))
            });
            break;
        case '10':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            shardFlag = getShardFlag(dataValue.substring(18, 20));
            groupId = getInt(dataValue.substring(20, 24));
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            });
            measurementArray.push({
                measurementId: '3000',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Battery',
                measurementValue: '' + getBattery(dataValue.substring(16, 18))
            });
            break;
        case '11':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray.push({
                measurementId: '3576',
                timestamp: collectTime,
                type: 'Positing Status',
                measurementValue: '' + getPositingStatus(dataValue.substring(0, 2))
            });
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '4200',
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(2, 8))
            });
            if (!isNaN(parseFloat(getSensorValue(dataValue.substring(16, 20), 10)))) {
                measurementArray.push({
                    timestamp: collectTime,
                    measurementId: '4097',
                    type: 'Air Temperature',
                    measurementValue: '' + getSensorValue(dataValue.substring(16, 20), 10)
                });
            }
            if (!isNaN(parseFloat(getSensorValue(dataValue.substring(20, 24))))) {
                measurementArray.push({
                    timestamp: collectTime,
                    measurementId: '4199',
                    type: 'Light',
                    measurementValue: '' + getSensorValue(dataValue.substring(20, 24))
                });
            }
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '3000',
                type: 'Battery',
                measurementValue: '' + getBattery(dataValue.substring(24, 26))
            });
            break;
    }
    return measurementArray;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function getMotionId(str) {
    return getInt(str);
}
function getPositingStatus(str) {
    return getInt(str);
}
function getUpShortInfo(messageValue) {
    return [{
        measurementId: '3000',
        type: 'Battery',
        measurementValue: getBattery(messageValue.substring(0, 2))
    }, {
        measurementId: '3502',
        type: 'Firmware Version',
        measurementValue: getSoftVersion(messageValue.substring(2, 6))
    }, {
        measurementId: '3001',
        type: 'Hardware Version',
        measurementValue: getHardVersion(messageValue.substring(6, 10))
    }, {
        measurementId: '3940',
        type: 'Work Mode',
        measurementValue: getWorkingMode(messageValue.substring(10, 12))
    }, {
        measurementId: '3965',
        type: 'Positioning Strategy',
        measurementValue: getPositioningStrategy(messageValue.substring(12, 14))
    }, {
        measurementId: '3942',
        type: 'Heartbeat Interval',
        measurementValue: getMinsByMin(messageValue.substring(14, 18))
    }, {
        measurementId: '3943',
        type: 'Periodic Interval',
        measurementValue: getMinsByMin(messageValue.substring(18, 22))
    }, {
        measurementId: '3944',
        type: 'Event Interval',
        measurementValue: getMinsByMin(messageValue.substring(22, 26))
    }, {
        measurementId: '3945',
        type: 'Sensor Enable',
        measurementValue: getInt(messageValue.substring(26, 28))
    }, {
        measurementId: '3941',
        type: 'SOS Mode',
        measurementValue: getSOSMode(messageValue.substring(28, 30))
    }];
}
function getMotionSetting(str) {
    return [{
        measurementId: '3946',
        type: 'Motion Enable',
        measurementValue: getInt(str.substring(0, 2))
    }, {
        measurementId: '3947',
        type: 'Any Motion Threshold',
        measurementValue: getSensorValue(str.substring(2, 6), 1)
    }, {
        measurementId: '3948',
        type: 'Motion Start Interval',
        measurementValue: getMinsByMin(str.substring(6, 10))
    }];
}
function getStaticSetting(str) {
    return [{
        measurementId: '3949',
        type: 'Static Enable',
        measurementValue: getInt(str.substring(0, 2))
    }, {
        measurementId: '3950',
        type: 'Device Static Timeout',
        measurementValue: getMinsByMin(str.substring(2, 6))
    }];
}
function getShockSetting(str) {
    return [{
        measurementId: '3951',
        type: 'Shock Enable',
        measurementValue: getInt(str.substring(0, 2))
    }, {
        measurementId: '3952',
        type: 'Shock Threshold',
        measurementValue: getInt(str.substring(2, 6))
    }];
}
function getTempSetting(str) {
    return [{
        measurementId: '3953',
        type: 'Temp Enable',
        measurementValue: getInt(str.substring(0, 2))
    }, {
        measurementId: '3954',
        type: 'Event Temp Interval',
        measurementValue: getMinsByMin(str.substring(2, 6))
    }, {
        measurementId: '3955',
        type: 'Event Temp Sample Interval',
        measurementValue: getSecondsByInt(str.substring(6, 10))
    }, {
        measurementId: '3956',
        type: 'Temp ThMax',
        measurementValue: getSensorValue(str.substring(10, 14), 10)
    }, {
        measurementId: '3957',
        type: 'Temp ThMin',
        measurementValue: getSensorValue(str.substring(14, 18), 10)
    }, {
        measurementId: '3958',
        type: 'Temp Warning Type',
        measurementValue: getInt(str.substring(18, 20))
    }];
}
function getLightSetting(str) {
    return [{
        measurementId: '3959',
        type: 'Light Enable',
        measurementValue: getInt(str.substring(0, 2))
    }, {
        measurementId: '3960',
        type: 'Event Light Interval',
        measurementValue: getMinsByMin(str.substring(2, 6))
    }, {
        measurementId: '3961',
        type: 'Event Light Sample Interval',
        measurementValue: getSecondsByInt(str.substring(6, 10))
    }, {
        measurementId: '3962',
        type: 'Light ThMax',
        measurementValue: getSensorValue(str.substring(10, 14), 10)
    }, {
        measurementId: '3963',
        type: 'Light ThMin',
        measurementValue: getSensorValue(str.substring(14, 18), 10)
    }, {
        measurementId: '3964',
        type: 'Light Warning Type',
        measurementValue: getInt(str.substring(18, 20))
    }];
}
function getShardFlag(str) {
    var bitStr = getByteArray(str);
    return {
        count: parseInt(bitStr.substring(0, 4), 2),
        index: parseInt(bitStr.substring(4), 2)
    };
}
function getBattery(batteryStr) {
    return loraWANV2DataFormat(batteryStr);
}
function getSoftVersion(softVersion) {
    return "".concat(loraWANV2DataFormat(softVersion.substring(0, 2)), ".").concat(loraWANV2DataFormat(softVersion.substring(2, 4)));
}
function getHardVersion(hardVersion) {
    return "".concat(loraWANV2DataFormat(hardVersion.substring(0, 2)), ".").concat(loraWANV2DataFormat(hardVersion.substring(2, 4)));
}
function getSecondsByInt(str) {
    return getInt(str);
}
function getMinsByMin(str) {
    return getInt(str);
}
function getSensorValue(str, dig) {
    if (str === '8000') {
        return null;
    } else {
        return loraWANV2DataFormat(str, dig);
    }
}
function bytes2HexString(arrBytes) {
    var str = '';
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp;
        var num = arrBytes[i];
        if (num < 0) {
            tmp = (255 + num + 1).toString(16);
        } else {
            tmp = num.toString(16);
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp;
        }
        str += tmp;
    }
    return str;
}
function loraWANV2DataFormat(str) {
    var divisor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var strReverse = bigEndianTransform(str);
    var str2 = toBinary(strReverse);
    if (str2.substring(0, 1) === '1') {
        var arr = str2.split('');
        var reverseArr = arr.map(function (item) {
            if (parseInt(item) === 1) {
                return 0;
            } else {
                return 1;
            }
        });
        str2 = parseInt(reverseArr.join(''), 2) + 1;
        return '-' + str2 / divisor;
    }
    return parseInt(str2, 2) / divisor;
}
function bigEndianTransform(data) {
    var dataArray = [];
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2));
    }
    return dataArray;
}
function toBinary(arr) {
    var binaryData = arr.map(function (item) {
        var data = parseInt(item, 16).toString(2);
        var dataLength = data.length;
        if (data.length !== 8) {
            for (var i = 0; i < 8 - dataLength; i++) {
                data = "0" + data;
            }
        }
        return data;
    });
    return binaryData.toString().replace(/,/g, '');
}
function getSOSMode(str) {
    return loraWANV2DataFormat(str);
}
function getMacAndRssiObj(pair) {
    var pairs = [];
    if (pair.length % 14 === 0) {
        for (var i = 0; i < pair.length; i += 14) {
            var mac = getMacAddress(pair.substring(i, i + 12));
            if (mac) {
                var rssi = getInt8RSSI(pair.substring(i + 12, i + 14));
                pairs.push({
                    mac: mac,
                    rssi: rssi
                });
            } else {
                continue;
            }
        }
    }
    return pairs;
}
function getMacAddress(str) {
    if (str.toLowerCase() === 'ffffffffffff') {
        return null;
    }
    var macArr = [];
    for (var i = 1; i < str.length; i++) {
        if (i % 2 === 1) {
            macArr.push(str.substring(i - 1, i + 1));
        }
    }
    var mac = '';
    for (var _i = 0; _i < macArr.length; _i++) {
        mac = mac + macArr[_i];
        if (_i < macArr.length - 1) {
            mac = mac + ':';
        }
    }
    return mac;
}
function getInt8RSSI(str) {
    return loraWANV2DataFormat(str);
}
function getInt(str) {
    return parseInt(str, 16);
}
function getEventStatus(str) {
    // return getInt(str)
    var bitStr = getByteArray(str);
    var bitArr = [];
    for (var i = 0; i < bitStr.length; i++) {
        bitArr[i] = bitStr.substring(i, i + 1);
    }
    bitArr = bitArr.reverse();
    var event = [];
    for (var _i2 = 0; _i2 < bitArr.length; _i2++) {
        if (bitArr[_i2] !== '1') {
            continue;
        }
        switch (_i2) {
            case 0:
                event.push({
                    id: 1,
                    eventName: "Start moving event."
                });
                break;
            case 1:
                event.push({
                    id: 2,
                    eventName: "End movement event."
                });
                break;
            case 2:
                event.push({
                    id: 3,
                    eventName: "Motionless event."
                });
                break;
            case 3:
                event.push({
                    id: 4,
                    eventName: "Shock event."
                });
                break;
            case 4:
                event.push({
                    id: 5,
                    eventName: "Temperature event."
                });
                break;
            case 5:
                event.push({
                    id: 6,
                    eventName: "Light event."
                });
                break;
            case 6:
                event.push({
                    id: 7,
                    eventName: "SOS event."
                });
                break;
            case 7:
                event.push({
                    id: 8,
                    eventName: "Press once event."
                });
                break;
        }
    }
    return event;
}
function getByteArray(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i += 2) {
        bytes.push(str.substring(i, i + 2));
    }
    return toBinary(bytes);
}
function getWorkingMode(workingMode) {
    return getInt(workingMode);
}
function getPositioningStrategy(strategy) {
    return getInt(strategy);
}
function getUTCTimestamp(str) {
    return parseInt(loraWANV2PositiveDataFormat(str)) * 1000;
}
function loraWANV2PositiveDataFormat(str) {
    var divisor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var strReverse = bigEndianTransform(str);
    var str2 = toBinary(strReverse);
    return parseInt(str2, 2) / divisor;
}
```

</details>

<details>

<summary>For AWS</summary>

```cpp
const AWS = require('aws-sdk');
const iotdata = new AWS.IotData({
    endpoint: 'a39w0g3w5os1ti-ats.iot.us-east-1.amazonaws.com'
});

function decodeUplink (input) {
    // var bytes = input['bytes']
    var bytes = Buffer.from(input, 'base64');
    var bytesString = bytes2HexString(bytes).toLocaleUpperCase()
    var decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    }
    let measurement = messageAnalyzed(bytesString)
    decoded.messages = measurement
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
    let collectTime = 0
    switch (dataId) {
        case '01':
            measurementArray = getUpShortInfo(dataValue)
            break
        case '02':
            measurementArray = getUpShortInfo(dataValue)
            break
        case '03':
            break
        case '04':
            measurementArray = [
                {measurementId: '3940', type: 'Work Mode', measurementValue: getWorkingMode(dataValue.substring(0, 2))},
                {measurementId: '3942', type: 'Heartbeat Interval', measurementValue: getOneWeekInterval(dataValue.substring(4, 8))},
                {measurementId: '3943', type: 'Periodic Interval', measurementValue: getOneWeekInterval(dataValue.substring(8, 12))},
                {measurementId: '3944', type: 'Event Interval', measurementValue: getOneWeekInterval(dataValue.substring(12, 16))},
                {measurementId: '3941', type: 'SOS Mode', measurementValue: getSOSMode(dataValue.substring(16, 18))}
            ]
            break;
        case '05':
            measurementArray = [
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(0, 2))},
                {measurementId: '3940', type: 'Work Mode', measurementValue: getWorkingMode(dataValue.substring(2, 4))},
                {measurementId: '3941', type: 'SOS Mode', measurementValue: getSOSMode(dataValue.substring(6, 8))}
            ]
            break
        case '06':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', type: 'SOS Event', measurementValue: eventList[6]},
                {measurementId: '4197', type: 'Longitude', measurementValue: getSensorValue(dataValue.substring(16, 24), 1000000)},
                {measurementId: '4198', type: 'Latitude', measurementValue: getSensorValue(dataValue.substring(24, 32), 1000000)},
                {measurementId: '4097', type: 'Air Temperature', measurementValue: getSensorValue(dataValue.substring(32, 36), 10)},
                {measurementId: '4199', type: 'Light', measurementValue: getSensorValue(dataValue.substring(36, 40))},
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(40, 42))},
                {type: 'Timestamp', measurementValue: collectTime}
            ]
            break
        case '07':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', type: 'SOS Event', measurementValue: eventList[6]},
                {measurementId: '5001', type: 'Wi-Fi Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '4097', type: 'Air Temperature', measurementValue: getSensorValue(dataValue.substring(72, 76), 10)},
                {measurementId: '4199', type: 'Light', measurementValue: getSensorValue(dataValue.substring(76, 80))},
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(80, 82))},
                {type: 'Timestamp', measurementValue: collectTime}
            ]
            break
        case '08':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', type: 'SOS Event', measurementValue: eventList[6]},
                {measurementId: '5002', type: 'BLE Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '4097', type: 'Air Temperature', measurementValue: getSensorValue(dataValue.substring(58, 62), 10)},
                {measurementId: '4199', type: 'Light', measurementValue: getSensorValue(dataValue.substring(62, 66))},
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(66, 68))},
                {type: 'Timestamp', measurementValue: collectTime}
            ]
            break
        case '09':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', type: 'SOS Event', measurementValue: eventList[6]},
                {measurementId: '4197', type: 'Longitude', measurementValue: getSensorValue(dataValue.substring(16, 24), 1000000)},
                {measurementId: '4198', type: 'Latitude', measurementValue: getSensorValue(dataValue.substring(24, 32), 1000000)},
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(32, 34))},
                {type: 'Timestamp', measurementValue: collectTime}
            ]
            break
        case '0A':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', type: 'SOS Event', measurementValue: eventList[6]},
                {measurementId: '5001', type: 'Wi-Fi Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))},
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(72, 74))},
                {type: 'Timestamp', measurementValue: collectTime}
            ]
            break
        case '0B':
            eventList = getEventStatus(dataValue.substring(0, 6))
            collectTime = getUTCTimestamp(dataValue.substring(8, 16))
            measurementArray = [
                {measurementId: '4200', type: 'SOS Event', measurementValue: eventList[6]},
                {measurementId: '5002', type: 'BLE Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},
                {measurementId: '3000', type: 'Battery', measurementValue: getBattery(dataValue.substring(58, 60))},
                {type: 'Timestamp', measurementValue: collectTime}
            ]
            break
        case '0D':
            let errorCode = getInt(dataValue)
            let error = ''
            switch (errorCode) {
                case 0:
                    error = 'THE GNSS SCAN TIME OUT'
                    break
                case 1:
                    error = 'THE WI-FI SCAN TIME OUT'
                    break
                case 2:
                    error = 'THE WI-FI+GNSS SCAN TIME OUT'
                    break
                case 3:
                    error = 'THE GNSS+WI-FI SCAN TIME OUT'
                    break
                case 4:
                    error = 'THE BEACON SCAN TIME OUT'
                    break
                case 5:
                    error = 'THE BEACON+WI-FI SCAN TIME OUT'
                    break
                case 6:
                    error = 'THE BEACON+GNSS SCAN TIME OUT'
                    break
                case 7:
                    error = 'THE BEACON+WI-FI+GNSS SCAN TIME OUT'
                    break
                case 8:
                    error = 'FAILED TO OBTAIN THE UTC TIMESTAMP'
                    break
            }
            measurementArray.push({errorCode, error})
    }
    return measurementArray
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
            measurementId: '3942', type: 'Heartbeat Interval', measurementValue: getOneWeekInterval(messageValue.substring(14, 18))
        }, {
            measurementId: '3943', type: 'Periodic Interval', measurementValue: getOneWeekInterval(messageValue.substring(18, 22))
        }, {
            measurementId: '3944', type: 'Event Interval', measurementValue: getOneWeekInterval(messageValue.substring(22, 26))
        }, {
            measurementId: '3941', type: 'SOS Mode', measurementValue: getSOSMode(messageValue.substring(28, 30))
        }
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

function getOneWeekInterval (str) {
    return loraWANV2DataFormat(str) * 60
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
    return parseInt(str)
}

/**
 *  1.MOVING_STARTING
 *  2.MOVING_END
 *  3.DEVICE_STATIC
 *  4.SHOCK_EVENT
 *  5.TEMP_EVENT
 *  6.LIGHTING_EVENT
 *  7.SOS_EVENT
 *  8.CUSTOMER_EVENT
 * */
function getEventStatus (str) {
    let bitStr = getByteArray(str)
    let event = []
    for (let i = bitStr.length; i >= 0; i--) {
        if (i === 0) {
            event[i] = bitStr.substring(0)
        } else {
            event[i] = bitStr.substring(i - 1, i)
        }
    }
    return event.reverse()
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

    const params = {
      topic: 'sensecap/t1000',
      payload: JSON.stringify({
        eui: lorawan_info["DevEui"],
        timestamp:  lorawan_info["Timestamp"],
        data: decodeUplink(lorawan_data)["data"]
      }),
      qos: 0
    };

    await iotdata.publish(params).promise();

    return {
      statusCode: 200,
      body: 'Message published successfully'+JSON.stringify(event)
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

### Wio Tracker 1110 Dev Board

The [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) is based on [Wio-WM1110 Wireless Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html) and integrates [Semtech's LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) LoRa® transceiver and a multi-purpose radio front-end for geolocation, it's a user-friendly, LoRa-based tracking development platform.

With its compact size and rich interfaces, the Wio Tracker 1110 Dev Board is conveniently equipped with an onboard antenna for easy deployment. It supports the Arduino development environment and LoRaWAN protocol stack, making it ideal for tracking-related IoT projects.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

#### Decoder

<details>

<summary>For TTN(ChirpStack V4)</summary>

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

<details>

<summary>For Helium</summary>

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

<details>

<summary>For Chirp Stack</summary>

```cpp
function Decode(fPort, bytes, variables) {
    var bytesString = bytes2HexString(bytes).toLocaleUpperCase();
    var fport = parseInt(fPort);
    var originMessage = bytesString.toLocaleUpperCase();
    var decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    };
    if (fport === 199 || fport === 192) {
        decoded.messages.push({
            fport: fport,
            payload: bytesString
        });
        return {
            data: decoded
        };
    }
    if (fport !== 5) {
        decoded.valid = false;
        return {
            data: decoded
        };
    }
    var measurement = messageAnalyzed(originMessage);
    if (measurement.length === 0) {
        decoded.valid = false;
        return {
            data: decoded
        };
    }
    var _iterator = _createForOfIteratorHelper(measurement),
        _step;
    try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var message = _step.value;
            if (message.length === 0) {
                continue;
            }
            var elements = [];
            var _iterator2 = _createForOfIteratorHelper(message),
                _step2;
            try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var element = _step2.value;
                    if (element.errorCode) {
                        decoded.err = element.errorCode;
                        decoded.errMessage = element.error;
                    } else {
                        elements.push(element);
                    }
                }
            } catch (err) {
                _iterator2.e(err);
            } finally {
                _iterator2.f();
            }
            if (elements.length > 0) {
                decoded.messages.push(elements);
            }
        }
        // decoded.messages = measurement
    } catch (err) {
        _iterator.e(err);
    } finally {
        _iterator.f();
    }
    return {
        data: decoded
    };
}
function messageAnalyzed(messageValue) {
    try {
        var frames = unpack(messageValue);
        var measurementResultArray = [];
        for (var i = 0; i < frames.length; i++) {
            var item = frames[i];
            var dataId = item.dataId;
            var dataValue = item.dataValue;
            var measurementArray = deserialize(dataId, dataValue);
            measurementResultArray.push(measurementArray);
        }
        return measurementResultArray;
    } catch (e) {
        return e.toString();
    }
}
function unpack(messageValue) {
    var frameArray = [];
    for (var i = 0; i < messageValue.length; i++) {
        var remainMessage = messageValue;
        var dataId = remainMessage.substring(0, 2).toUpperCase();
        var dataValue = void 0;
        var dataObj = {};
        var packageLen = void 0;
        switch (dataId) {
            case '12':
                packageLen = getInt(remainMessage.substring(8, 10)) * 2 + 10;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, 8) + remainMessage.substring(10, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '13':
                packageLen = 24;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '14':
                packageLen = 74;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '15':
                packageLen = 60;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '16':
                packageLen = 18;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '17':
                var byteCount = parseInt(remainMessage.substring(2, 4), 16);
                packageLen = getInt(remainMessage.substring(2, 4)) * 2;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(4, packageLen);
                messageValue = remainMessage.substring(packageLen);
                if (isNaN(byteCount) || byteCount < 13 || (byteCount - 9) % 4 !== 0 || byteCount > 49) {
                    continue;
                }
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            case '18':
                packageLen = 56;
                if (remainMessage.length < packageLen) {
                    return frameArray;
                }
                dataValue = remainMessage.substring(2, packageLen);
                messageValue = remainMessage.substring(packageLen);
                dataObj = {
                    'dataId': dataId,
                    'dataValue': dataValue
                };
                break;
            default:
                return frameArray;
        }
        if (dataValue.length < 2) {
            break;
        }
        frameArray.push(dataObj);
    }
    return frameArray;
}
function deserialize(dataId, dataValue) {
    var measurementArray = [];
    var eventList = [];
    var measurement = {};
    var collectTime = parseInt(new Date().getTime() / 1000);
    var groupId = 0;
    var shardFlag = {};
    var payload = '';
    var value;
    var result = [];
    var dataArr = [];
    switch (dataId) {
        case '12':
            shardFlag = getShardFlag(dataValue.substring(0, 2));
            groupId = getInt(dataValue.substring(2, 6));
            payload = dataValue.substring(6);
            measurement = {
                measurementId: '6152',
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'gnss-ng payload',
                measurementValue: payload
            };
            measurementArray.push(measurement);
            break;
        case '13':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            shardFlag = getShardFlag(dataValue.substring(16, 18));
            groupId = getInt(dataValue.substring(18, 22));
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                groupId: groupId,
                index: shardFlag.index,
                count: shardFlag.count,
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            });
            break;
        case '14':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '5001',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Wi-Fi Scan',
                measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))
            }];
            break;
        case '15':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray = [{
                measurementId: '4200',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            }, {
                measurementId: '5002',
                timestamp: collectTime,
                motionId: getMotionId(dataValue.substring(6, 8)),
                type: 'BLE Scan',
                measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))
            }];
            break;
        case '16':
            collectTime = getUTCTimestamp(dataValue.substring(8, 16));
            measurementArray.push({
                measurementId: '3576',
                timestamp: collectTime,
                type: 'Positioning Status',
                measurementValue: getPositingStatus(dataValue.substring(0, 2))
            });
            measurementArray.push({
                timestamp: collectTime,
                measurementId: '4200',
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(2, 8))
            });
            break;
        case '17':
            collectTime = getUTCTimestamp(dataValue.substring(6, 14));
            value = getUnsignedSensorValue(dataValue.substring(0, 6));
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4208',
                    measureTime: collectTime,
                    type: 'Custom Event Status',
                    measurementValue: value
                });
            }
            var initId = 4165;
            for (var i = 14; i < dataValue.length; i += 8) {
                value = getUnsignedSensorValue(dataValue.substring(i, i + 8));
                if (value !== null) {
                    measurementArray.push({
                        timestamp: collectTime,
                        measurementId: initId++,
                        type: 'Custom Measurement Type',
                        measurementValue: value
                    });
                }
            }
            break;
        case '18':
            collectTime = getUTCTimestamp(dataValue.substring(6, 14));
            measurementArray.push({
                measurementId: '4200',
                timestamp: collectTime,
                type: 'Event Status',
                measurementValue: getEventStatus(dataValue.substring(0, 6))
            });
            value = getSignSensorValue(dataValue.substring(14, 18), 10);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4097',
                    timestamp: collectTime,
                    type: 'Air Temperature',
                    measurementValue: value
                });
            }
            value = getUnsignedSensorValue(dataValue.substring(18, 20), 1);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4098',
                    timestamp: collectTime,
                    type: 'Air Humidity',
                    measurementValue: value
                });
            }
            value = getUnsignedSensorValue(dataValue.substring(20, 26), 1);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4101',
                    timestamp: collectTime,
                    type: 'Barometric Pressure',
                    measurementValue: value
                });
            }
            value = getUnsignedSensorValue(dataValue.substring(26, 30), 1);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4115',
                    timestamp: collectTime,
                    type: 'Distance',
                    measurementValue: value
                });
            }
            value = getUnsignedSensorValue(dataValue.substring(30, 34), 100);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4190',
                    timestamp: collectTime,
                    type: 'UV Index',
                    measurementValue: value
                });
            }
            value = getUnsignedSensorValue(dataValue.substring(34, 38), 1);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4206',
                    timestamp: collectTime,
                    type: 'VOC_INDEX',
                    measurementValue: value
                });
            }
            value = getUnsignedSensorValue(dataValue.substring(38, 42), 1);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4207',
                    timestamp: collectTime,
                    type: 'Noise',
                    measurementValue: value
                });
            }
            value = getSignSensorValue(dataValue.substring(42, 46), 100);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4150',
                    timestamp: collectTime,
                    type: ' AccelerometerX',
                    measurementValue: value
                });
            }
            value = getSignSensorValue(dataValue.substring(46, 50), 100);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4151',
                    timestamp: collectTime,
                    type: 'AccelerometerY',
                    measurementValue: value
                });
            }
            value = getSignSensorValue(dataValue.substring(50, 54), 100);
            if (value !== null) {
                measurementArray.push({
                    measurementId: '4152',
                    timestamp: collectTime,
                    type: 'AccelerometerZ',
                    measurementValue: value
                });
            }
            break;
    }
    return measurementArray;
}
function getMotionId(str) {
    return getInt(str);
}
function getPositingStatus(str) {
    var status = getInt(str);
    switch (status) {
        case 0:
            return {
                id: status,
                statusName: "Positioning successful."
            };
        case 1:
            return {
                id: status,
                statusName: "The GNSS scan timed out and failed to obtain the location."
            };
        case 2:
            return {
                id: status,
                statusName: "The Wi-Fi scan timed out and failed to obtain the location."
            };
        case 3:
            return {
                id: status,
                statusName: "The Wi-Fi + GNSS scan timed out and failed to obtain the location."
            };
        case 4:
            return {
                id: status,
                statusName: "The GNSS + Wi-Fi scan timed out and failed to obtain the location."
            };
        case 5:
            return {
                id: status,
                statusName: "The Bluetooth scan timed out and failed to obtain the location."
            };
        case 6:
            return {
                id: status,
                statusName: "The Bluetooth + Wi-Fi scan timed out and failed to obtain the location."
            };
        case 7:
            return {
                id: status,
                statusName: "The Bluetooth + GNSS scan timed out and failed to obtain the location."
            };
        case 8:
            return {
                id: status,
                statusName: "The Bluetooth + Wi-Fi + GNSS scan timed out and failed to obtain the location."
            };
        case 9:
            return {
                id: status,
                statusName: "Location Server failed to parse the GNSS location."
            };
        case 10:
            return {
                id: status,
                statusName: "Location Server failed to parse the Wi-Fi location."
            };
        case 11:
            return {
                id: status,
                statusName: "Location Server failed to parse the Bluetooth location."
            };
        case 12:
            return {
                id: status,
                statusName: "Failed to parse the GNSS location due to the poor accuracy."
            };
        case 13:
            return {
                id: status,
                statusName: "Time synchronization failed."
            };
        case 14:
            return {
                id: status,
                statusName: "Failed to obtain location due to the old Almanac."
            };
    }
    return getInt(str);
}
function getShardFlag(str) {
    var bitStr = getByteArray(str);
    return {
        count: parseInt(bitStr.substring(0, 4), 2),
        index: parseInt(bitStr.substring(4), 2)
    };
}
function bytes2HexString(arrBytes) {
    var str = '';
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp;
        var num = arrBytes[i];
        if (num < 0) {
            tmp = (255 + num + 1).toString(16);
        } else {
            tmp = num.toString(16);
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp;
        }
        str += tmp;
    }
    return str;
}
function loraWANV2DataFormat(str) {
    var divisor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var strReverse = bigEndianTransform(str);
    var str2 = toBinary(strReverse);
    if (str2.substring(0, 1) === '1') {
        var arr = str2.split('');
        var reverseArr = arr.map(function (item) {
            if (parseInt(item) === 1) {
                return 0;
            } else {
                return 1;
            }
        });
        str2 = parseInt(reverseArr.join(''), 2) + 1;
        return parseFloat('-' + str2 / divisor);
    }
    return parseInt(str2, 2) / divisor;
}
function bigEndianTransform(data) {
    var dataArray = [];
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2));
    }
    return dataArray;
}
function toBinary(arr) {
    var binaryData = arr.map(function (item) {
        var data = parseInt(item, 16).toString(2);
        var dataLength = data.length;
        if (data.length !== 8) {
            for (var i = 0; i < 8 - dataLength; i++) {
                data = "0" + data;
            }
        }
        return data;
    });
    return binaryData.toString().replace(/,/g, '');
}
function getMacAndRssiObj(pair) {
    var pairs = [];
    if (pair.length % 14 === 0) {
        for (var i = 0; i < pair.length; i += 14) {
            var mac = getMacAddress(pair.substring(i, i + 12));
            if (mac) {
                var rssi = getInt8RSSI(pair.substring(i + 12, i + 14));
                pairs.push({
                    mac: mac,
                    rssi: rssi
                });
            } else {
                continue;
            }
        }
    }
    return pairs;
}
function getMacAddress(str) {
    if (str.toLowerCase() === 'ffffffffffff') {
        return null;
    }
    var macArr = [];
    for (var i = 1; i < str.length; i++) {
        if (i % 2 === 1) {
            macArr.push(str.substring(i - 1, i + 1));
        }
    }
    var mac = '';
    for (var _i = 0; _i < macArr.length; _i++) {
        mac = mac + macArr[_i];
        if (_i < macArr.length - 1) {
            mac = mac + ':';
        }
    }
    return mac;
}
function getInt8RSSI(str) {
    return loraWANV2DataFormat(str);
}
function getInt(str) {
    return parseInt(str, 16);
}
function getEventStatus(str) {
    // return getInt(str)
    var bitStr = getByteArray(str);
    var bitArr = [];
    for (var i = 0; i < bitStr.length; i++) {
        bitArr[i] = bitStr.substring(i, i + 1);
    }
    bitArr = bitArr.reverse();
    var event = [];
    for (var _i2 = 0; _i2 < bitArr.length; _i2++) {
        if (bitArr[_i2] !== '1') {
            continue;
        }
        switch (_i2) {
            case 0:
                event.push({
                    id: 1,
                    eventName: "Start moving event."
                });
                break;
            case 1:
                event.push({
                    id: 2,
                    eventName: "End movement event."
                });
                break;
            case 2:
                event.push({
                    id: 3,
                    eventName: "Motionless event."
                });
                break;
            case 3:
                event.push({
                    id: 4,
                    eventName: "Shock event."
                });
                break;
            case 4:
                event.push({
                    id: 5,
                    eventName: "Temperature event."
                });
                break;
            case 5:
                event.push({
                    id: 6,
                    eventName: "Light event."
                });
                break;
            case 6:
                event.push({
                    id: 7,
                    eventName: "SOS event."
                });
                break;
            case 7:
                event.push({
                    id: 8,
                    eventName: "Press once event."
                });
                break;
        }
    }
    return event;
}
function getByteArray(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i += 2) {
        bytes.push(str.substring(i, i + 2));
    }
    return toBinary(bytes);
}
function getUTCTimestamp(str) {
    return parseInt(loraWANV2PositiveDataFormat(str)) * 1000;
}
function getUnsignedSensorValue(str) {
    var dig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (isNull(str)) {
        return null;
    }
    return parseInt(str, 16) / dig;
}
function isNull(str) {
    if (str.substring(0, 1) !== '8') {
        return false;
    }
    for (var i = 1; i < str.length; i++) {
        if (str.substring(i, i + 1) !== '0') {
            return false;
        }
    }
    return true;
}
function getSignSensorValue(str) {
    var dig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (isNull(str)) {
        return null;
    }
    return loraWANV2DataFormat(str, dig);
}
function loraWANV2PositiveDataFormat(str) {
    var divisor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var strReverse = bigEndianTransform(str);
    var str2 = toBinary(strReverse);
    return parseInt(str2, 2) / divisor;
}
```

</details>

### SenseCAP S210X LoRaWAN Sensors

[SenseCAP S210X](https://www.seeedstudio.com/catalogsearch/result/?q=s210x) is a series of wireless LoRaWAN® sensors. It can cover a transmission range of 2km in urban scenes and 10km in line-of-sight scenes while keeping lower power consumption during the transmission process. Together with a replaceable battery that supports up to 10 years of usage and an industrial IP66 enclosure. It supports -40 ~ 85℃ operating temperature and can be deployed in harsh environments. SenseCAP S210X is compatible with LoRaWAN® V1.0.3 protocol and can work with LoRaWAN® gateway.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/111_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

#### Decoder

<details>

<summary>For TTN(ChirpStack V4)</summary>

```cpp
/**
 * SenseCAP & TTN (new v3) Converter
 *
 * @since 3.0
 * @return Object
 *      @param  Boolean     valid       Indicates whether the payload is a valid payload.
 *      @param  String      err         The reason for the payload to be invalid. 0 means valid, minus means invalid.
 *      @param  String      payload     Hexadecimal string, to show the payload.
 *      @param  Array       messages    One or more messages are parsed according to payload.
 *                              type // Enum:
 *                                   //   - "report_telemetry"
 *                                   //   - "upload_battery"
 *                                   //   - "upload_interval"
 *                                   //   - "upload_version"
 *                                   //   - "upload_sensor_id"
 *                                   //   - "report_remove_sensor"
 *                                   //   - "unknown_message"
 *
 *
 *
 *
 *  @sample-1
 *      var sample = Decoder(["00", "00", "00", "01", "01", "00", "01", "00", "07", "00", "64", "00", "3C", "00", "01", "20", "01", "00", "00", "00", "00", "28", "90"], null);
 *      {
 *        valid: true,
 *        err: 0,
 *        payload: '0000000101000100070064003C00012001000000002890',
 *        messages: [
 *           { type: 'upload_version',
 *             hardwareVersion: '1.0',
 *             softwareVersion: '1.1' },
 *           { type: 'upload_battery', battery: 100 },
 *           { type: 'upload_interval', interval: 3600 },
 *           { type: 'report_remove_sensor', channel: 1 }
 *        ]
 *      }
 * @sample-2
 *      var sample = Decoder(["01", "01", "10", "98", "53", "00", "00", "01", "02", "10", "A8", "7A", "00", "00", "AF", "51"], null);
 *      {
 *        valid: true,
 *        err: 0,
 *        payload: '01011098530000010210A87A0000AF51',
 *        messages: [
 *           { type: 'report_telemetry',
 *             measurementId: 4097,
 *             measurementValue: 21.4 },
 *           { type: 'report_telemetry',
 *             measurementId: 4098,
 *             measurementValue: 31.4 }
 *        ]
 *      }
 * @sample-3
 *      var sample = Decoder(["01", "01", "00", "01", "01", "00", "01", "01", "02", "00", "6A", "01", "00", "15", "01", "03", "00", "30", "F1", "F7", "2C", "01", "04", "00", "09", "0C", "13", "14", "01", "05", "00", "7F", "4D", "00", "00", "01", "06", "00", "00", "00", "00", "00", "4C", "BE"], null);
 *      {
 *        valid: true,
 *        err: 0,
 *        payload: '010100010100010102006A01001501030030F1F72C010400090C13140105007F4D0000010600000000004CBE',
 *        messages: [
 *            { type: 'upload_sensor_id', sensorId: '30F1F72C6A010015', channel: 1 }
 *        ]
 *      }
 */

/**
 * Entry, decoder.js
 */
function decodeUplink (input) {
    var bytes = input['bytes'];
    // // init
    var bytesString = bytes2HexString(bytes)
        .toLocaleUpperCase();
    // var bytesString = input
    var decoded = {
      // valid
      valid: true, err: 0, // bytes
      payload: bytesString, // messages array
      messages: []
    }
  
    // CRC check
    if (!crc16Check(bytesString)) {
      decoded['valid'] = false
      decoded['err'] = -1 // "crc check fail."
      return { data: decoded }
    }
  
    // Length Check
    if ((((bytesString.length / 2) - 2) % 7) !== 0) {
      decoded['valid'] = false
      decoded['err'] = -2 // "length check fail."
      return { data: decoded }
    }
  
    // Cache sensor id
    var sensorEuiLowBytes
    var sensorEuiHighBytes
  
    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString)
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
      var frame = frameArray[forFrame]
      // Extract key parameters
      var channel = strTo10SysNub(frame.substring(0, 2))
      var dataID = strTo10SysNub(frame.substring(2, 6))
      var dataValue = frame.substring(6, 14)
      var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue)
  
      if (checkDataIdIsMeasureUpload(dataID)) {
        // if telemetry.
        decoded.messages.push({
          type: 'report_telemetry', measurementId: dataID, measurementValue: realDataValue
        })
      } else if (isSpecialDataId(dataID) || (dataID === 5) || (dataID === 6)) {
        // if special order, except "report_sensor_id".
        switch (dataID) {
          case 0x00:
            // node version
            var versionData = sensorAttrForVersion(realDataValue)
            decoded.messages.push({
              type: 'upload_version', hardwareVersion: versionData.ver_hardware, softwareVersion: versionData.ver_software
            })
            break
          case 1:
            // sensor version
            break
          case 2:
            // sensor eui, low bytes
            sensorEuiLowBytes = realDataValue
            break
          case 3:
            // sensor eui, high bytes
            sensorEuiHighBytes = realDataValue
            break
          case 7:
            // battery power && interval
            decoded.messages.push({
              type: 'upload_battery', battery: realDataValue.power
            }, {
              type: 'upload_interval', interval: parseInt(realDataValue.interval) * 60
            })
            break
          case 9:
            decoded.messages.push({
              type: 'model_info',
              detectionType: realDataValue.detectionType,
              modelId: realDataValue.modelId,
              modelVer: realDataValue.modelVer
            })
            break
          case 0x120:
            // remove sensor
            decoded.messages.push({
              type: 'report_remove_sensor', channel: 1
            })
            break
          default:
            break
        }
      } else {
        decoded.messages.push({
          type: 'unknown_message', dataID: dataID, dataValue: dataValue
        })
      }
  
    }
  
    // if the complete id received, as "upload_sensor_id"
    if (sensorEuiHighBytes && sensorEuiLowBytes) {
      decoded.messages.unshift({
        type: 'upload_sensor_id', channel: 1, sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
      })
    }
    // return
    return { data: decoded }
  }
  
  function crc16Check (data) {
    return true
  }
  
  // util
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
  
  // util
  function divideBy7Bytes (str) {
    var frameArray = []
    for (var i = 0; i < str.length - 4; i += 14) {
      var data = str.substring(i, i + 14)
      frameArray.push(data)
    }
    return frameArray
  }
  
  // util
  function littleEndianTransform (data) {
    var dataArray = []
    for (var i = 0; i < data.length; i += 2) {
      dataArray.push(data.substring(i, i + 2))
    }
    dataArray.reverse()
    return dataArray
  }
  
  // util
  function strTo10SysNub (str) {
    var arr = littleEndianTransform(str)
    return parseInt(arr.toString()
      .replace(/,/g, ''), 16)
  }
  
  // util
  function checkDataIdIsMeasureUpload (dataId) {
    return parseInt(dataId) > 4096
  }
  
  // configurable.
  function isSpecialDataId (dataID) {
    switch (dataID) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 7:
      case 9:
      case 0x120:
        return true
      default:
        return false
    }
  }
  
  // configurable
  function ttnDataSpecialFormat (dataId, str) {
    var strReverse = littleEndianTransform(str)
    if (dataId === 2 || dataId === 3) {
      return strReverse.join('')
    }
  
    // handle unsigned number
    var str2 = toBinary(strReverse)
    var dataArray = []
    switch (dataId) {
      case 0: // DATA_BOARD_VERSION
      case 1: // DATA_SENSOR_VERSION
        // Using point segmentation
        for (var k = 0; k < str2.length; k += 16) {
          var tmp146 = str2.substring(k, k + 16)
          tmp146 = (parseInt(tmp146.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp146.substring(8, 16), 2) || 0)
          dataArray.push(tmp146)
        }
        return dataArray.join(',')
      case 4:
        for (var i = 0; i < str2.length; i += 8) {
          var item = parseInt(str2.substring(i, i + 8), 2)
          if (item < 10) {
            item = '0' + item.toString()
          } else {
            item = item.toString()
          }
          dataArray.push(item)
        }
        return dataArray.join('')
      case 7:
        // battery && interval
        return {
          interval: parseInt(str2.substr(0, 16), 2), power: parseInt(str2.substr(-16, 16), 2)
        }
      case 9:
        let dataValue = {
          detectionType: parseInt(str2.substring(0, 8), 2),
          modelId: parseInt(str2.substring(8, 16), 2),
          modelVer: parseInt(str2.substring(16, 24), 2)
        }
        // 01010000
        return dataValue
    }
  }
  
  // util
  function ttnDataFormat (str) {
    var strReverse = littleEndianTransform(str)
    var str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
      var arr = str2.split('')
      var reverseArr = []
      for (var forArr = 0; forArr < arr.length; forArr++) {
        var item = arr[forArr]
        if (parseInt(item) === 1) {
          reverseArr.push(0)
        } else {
          reverseArr.push(1)
        }
      }
      str2 = parseInt(reverseArr.join(''), 2) + 1
      return parseFloat('-' + str2 / 1000)
    }
    return parseInt(str2, 2) / 1000
  }
  
  // util
  function sensorAttrForVersion (dataValue) {
    var dataValueSplitArray = dataValue.split(',')
    return {
      ver_hardware: dataValueSplitArray[0], ver_software: dataValueSplitArray[1]
    }
  }
  
  // util
  function toBinary (arr) {
    var binaryData = []
    for (var forArr = 0; forArr < arr.length; forArr++) {
      var item = arr[forArr]
      var data = parseInt(item, 16)
        .toString(2)
      var dataLength = data.length
      if (data.length !== 8) {
        for (var i = 0; i < 8 - dataLength; i++) {
          data = '0' + data
        }
      }
      binaryData.push(data)
    }
    return binaryData.toString()
      .replace(/,/g, '')
  }
  
  // Samples
  // var sample = Decoder(["00", "00", "00", "01", "01", "00", "01", "00", "07", "00", "64", "00", "3C", "00", "01", "20", "01", "00", "00", "00", "00", "28", "90"], null);
  // var sample = Decoder(["01", "01", "10", "98", "53", "00", "00", "01", "02", "10", "A8", "7A", "00", "00", "AF", "51"], null);
  // var sample = Decoder(["01", "01", "00", "01", "01", "00", "01", "01", "02", "00", "6A", "01", "00", "15", "01", "03", "00", "30", "F1", "F7", "2C", "01", "04", "00", "09", "0C", "13", "14", "01", "05", "00", "7F", "4D", "00", "00", "01", "06", "00", "00", "00", "00", "00", "4C", "BE"], null);
  // console.log(sample);
```

</details>

<details>

<summary>For ChirpStack V3</summary>

```cpp
function Decode(fPort, bytes, variables) {
    var bytesString = bytes2HexString(bytes).toLocaleUpperCase();
    var fport = parseInt(fPort);
    // var bytesString = input
    var decoded = {
        // valid
        valid: true,
        err: 0,
        // bytes
        payload: bytesString,
        // messages array
        messages: []
    };

    // CRC check
    if (!crc16Check(bytesString)) {
        decoded['valid'] = false;
        decoded['err'] = -1; // "crc check fail."
        return {
            data: decoded
        };
    }

    // Length Check
    if ((bytesString.length / 2 - 2) % 7 !== 0) {
        decoded['valid'] = false;
        decoded['err'] = -2; // "length check fail."
        return {
            data: decoded
        };
    }

    // Cache sensor id
    var sensorEuiLowBytes;
    var sensorEuiHighBytes;

    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString);
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
        var frame = frameArray[forFrame];
        // Extract key parameters
        var channel = strTo10SysNub(frame.substring(0, 2));
        var dataID = strTo10SysNub(frame.substring(2, 6));
        var dataValue = frame.substring(6, 14);
        var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue);
        if (checkDataIdIsMeasureUpload(dataID)) {
            // if telemetry.
            decoded.messages.push({
                type: 'report_telemetry',
                measurementId: dataID,
                measurementValue: realDataValue
            });
        } else if (isSpecialDataId(dataID) || dataID === 5 || dataID === 6) {
            // if special order, except "report_sensor_id".
            switch (dataID) {
                case 0x00:
                    // node version
                    var versionData = sensorAttrForVersion(realDataValue);
                    decoded.messages.push({
                        type: 'upload_version',
                        hardwareVersion: versionData.ver_hardware,
                        softwareVersion: versionData.ver_software
                    });
                    break;
                case 1:
                    // sensor version
                    break;
                case 2:
                    // sensor eui, low bytes
                    sensorEuiLowBytes = realDataValue;
                    break;
                case 3:
                    // sensor eui, high bytes
                    sensorEuiHighBytes = realDataValue;
                    break;
                case 7:
                    // battery power && interval
                    decoded.messages.push({
                        type: 'upload_battery',
                        battery: realDataValue.power
                    }, {
                        type: 'upload_interval',
                        interval: parseInt(realDataValue.interval) * 60
                    });
                    break;
                case 9:
                    decoded.messages.push({
                        type: 'model_info',
                        detectionType: realDataValue.detectionType,
                        modelId: realDataValue.modelId,
                        modelVer: realDataValue.modelVer
                    });
                    break;
                case 0x120:
                    // remove sensor
                    decoded.messages.push({
                        type: 'report_remove_sensor',
                        channel: 1
                    });
                    break;
                default:
                    break;
            }
        } else {
            decoded.messages.push({
                type: 'unknown_message',
                dataID: dataID,
                dataValue: dataValue
            });
        }
    }

    // if the complete id received, as "upload_sensor_id"
    if (sensorEuiHighBytes && sensorEuiLowBytes) {
        decoded.messages.unshift({
            type: 'upload_sensor_id',
            channel: 1,
            sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
        });
    }
    // return
    return {
        data: decoded
    };
}
function crc16Check(data) {
    return true;
}

// util
function bytes2HexString(arrBytes) {
    var str = '';
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp;
        var num = arrBytes[i];
        if (num < 0) {
            tmp = (255 + num + 1).toString(16);
        } else {
            tmp = num.toString(16);
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp;
        }
        str += tmp;
    }
    return str;
}

// util
function divideBy7Bytes(str) {
    var frameArray = [];
    for (var i = 0; i < str.length - 4; i += 14) {
        var data = str.substring(i, i + 14);
        frameArray.push(data);
    }
    return frameArray;
}

// util
function littleEndianTransform(data) {
    var dataArray = [];
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2));
    }
    dataArray.reverse();
    return dataArray;
}

// util
function strTo10SysNub(str) {
    var arr = littleEndianTransform(str);
    return parseInt(arr.toString().replace(/,/g, ''), 16);
}

// util
function checkDataIdIsMeasureUpload(dataId) {
    return parseInt(dataId) > 4096;
}

// configurable.
function isSpecialDataId(dataID) {
    switch (dataID) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
        case 0x120:
            return true;
        default:
            return false;
    }
}

// configurable
function ttnDataSpecialFormat(dataId, str) {
    var strReverse = littleEndianTransform(str);
    if (dataId === 2 || dataId === 3) {
        return strReverse.join('');
    }

    // handle unsigned number
    var str2 = toBinary(strReverse);
    var dataArray = [];
    switch (dataId) {
        case 0: // DATA_BOARD_VERSION
        case 1:
            // DATA_SENSOR_VERSION
            // Using point segmentation
            for (var k = 0; k < str2.length; k += 16) {
                var tmp146 = str2.substring(k, k + 16);
                tmp146 = (parseInt(tmp146.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp146.substring(8, 16), 2) || 0);
                dataArray.push(tmp146);
            }
            return dataArray.join(',');
        case 4:
            for (var i = 0; i < str2.length; i += 8) {
                var item = parseInt(str2.substring(i, i + 8), 2);
                if (item < 10) {
                    item = '0' + item.toString();
                } else {
                    item = item.toString();
                }
                dataArray.push(item);
            }
            return dataArray.join('');
        case 7:
            // battery && interval
            return {
                interval: parseInt(str2.substr(0, 16), 2),
                power: parseInt(str2.substr(-16, 16), 2)
            };
        case 9:
            var dataValue = {
                detectionType: parseInt(str2.substring(0, 8), 2),
                modelId: parseInt(str2.substring(8, 16), 2),
                modelVer: parseInt(str2.substring(16, 24), 2)
            };
            // 01010000
            return dataValue;
    }
}

// util
function ttnDataFormat(str) {
    var strReverse = littleEndianTransform(str);
    var str2 = toBinary(strReverse);
    if (str2.substring(0, 1) === '1') {
        var arr = str2.split('');
        var reverseArr = [];
        for (var forArr = 0; forArr < arr.length; forArr++) {
            var item = arr[forArr];
            if (parseInt(item) === 1) {
                reverseArr.push(0);
            } else {
                reverseArr.push(1);
            }
        }
        str2 = parseInt(reverseArr.join(''), 2) + 1;
        return parseFloat('-' + str2 / 1000);
    }
    return parseInt(str2, 2) / 1000;
}

// util
function sensorAttrForVersion(dataValue) {
    var dataValueSplitArray = dataValue.split(',');
    return {
        ver_hardware: dataValueSplitArray[0],
        ver_software: dataValueSplitArray[1]
    };
}

// util
function toBinary(arr) {
    var binaryData = [];
    for (var forArr = 0; forArr < arr.length; forArr++) {
        var item = arr[forArr];
        var data = parseInt(item, 16).toString(2);
        var dataLength = data.length;
        if (data.length !== 8) {
            for (var i = 0; i < 8 - dataLength; i++) {
                data = '0' + data;
            }
        }
        binaryData.push(data);
    }
    return binaryData.toString().replace(/,/g, '');
}
```

</details>

<details>

<summary>For Helium</summary>

```cpp
/**
 * Entry, decoder.js
 */
function Decoder (bytes, port) {
    // init
    var bytesString = bytes2HexString(bytes)
      .toLocaleUpperCase()
    // var bytesString = bytes
    var decoded = {
        // valid
        valid: true, err: 0, // bytes
        payload: bytesString, // messages array
        messages: []
    }

    // CRC check
    if (!crc16Check(bytesString)) {
        decoded['valid'] = false
        decoded['err'] = -1 // "crc check fail."
        return decoded
    }

    // Length Check
    if ((((bytesString.length / 2) - 2) % 7) !== 0) {
        decoded['valid'] = false
        decoded['err'] = -2 // "length check fail."
        return decoded
    }

    // Cache sensor id
    var sensorEuiLowBytes
    var sensorEuiHighBytes

    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString)
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
        var frame = frameArray[forFrame]
        // Extract key parameters
        var channel = strTo10SysNub(frame.substring(0, 2))
        var dataID = strTo10SysNub(frame.substring(2, 6))
        var dataValue = frame.substring(6, 14)
        var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue)

        if (checkDataIdIsMeasureUpload(dataID)) {
            // if telemetry.
            decoded.messages.push({
                type: 'report_telemetry', measurementId: dataID, measurementValue: realDataValue
            })
        } else if (isSpecialDataId(dataID) || (dataID === 5) || (dataID === 6) || (dataID === 9)) {
            // if special order, except "report_sensor_id".
            switch (dataID) {
                case 0x00:
                    // node version
                    var versionData = sensorAttrForVersion(realDataValue)
                    decoded.messages.push({
                        type: 'upload_version', hardwareVersion: versionData.ver_hardware, softwareVersion: versionData.ver_software
                    })
                    break
                case 1:
                    // sensor version
                    break
                case 2:
                    // sensor eui, low bytes
                    sensorEuiLowBytes = realDataValue
                    break
                case 3:
                    // sensor eui, high bytes
                    sensorEuiHighBytes = realDataValue
                    break
                case 7:
                    // battery power && interval
                    decoded.messages.push({
                        type: 'upload_battery', battery: realDataValue.power
                    }, {
                        type: 'upload_interval', interval: parseInt(realDataValue.interval) * 60
                    })
                    break
                case 9:
                    decoded.messages.push({
                        type: 'model_info',
                        detectionType: realDataValue.detectionType,
                        modelId: realDataValue.modelId,
                        modelVer: realDataValue.modelVer
                    })
                    break
                case 0x120:
                    // remove sensor
                    decoded.messages.push({
                        type: 'report_remove_sensor', channel: 1
                    })
                    break
                default:
                    break
            }
        } else {
            decoded.messages.push({
                type: 'unknown_message', dataID: dataID, dataValue: dataValue
            })
        }

    }

    // if the complete id received, as "upload_sensor_id"
    if (sensorEuiHighBytes && sensorEuiLowBytes) {
        decoded.messages.unshift({
            type: 'upload_sensor_id', channel: 1, sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
        })
    }

    // return
    //return decoded;
    var datacakeFields = []
    var messages = decoded.messages
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i]
        var id = message.measurementId
        var type = message.type
        var value = message.measurementValue
        switch (type) {
            case 'upload_battery':
                datacakeFields.push({
                    'field': 'BATTERY', 'value': message.battery
                })
                break
            case 'upload_interval':
                datacakeFields.push({
                    'field': 'UPLOAD_INTERVAL', 'value': message.interval
                })
                break
            case 'upload_version':
                datacakeFields.push({
                    'field': 'HARDWARE_VERSION', 'value': message.hardwareVersion
                }, {
                    'field': 'SOFTWARE_VERSION', 'value': message.softwareVersion
                })
                break
            case 'model_info':
                datacakeFields.push({
                    'field': 'MODEL_INFO',
                    'value': { detectionType: message.detectionType, modelId: message.modelId, modelVer: message.modelVer }
                })
                break
        }
        switch (id) {
            case 4097:
                datacakeFields.push({
                    'field': 'TEMPERATURE', 'value': value
                })
                break
            case 4098:
                datacakeFields.push({
                    'field': 'HUMIDITY', 'value': value
                })
                break
            case 4099:
                datacakeFields.push({
                    'field': 'LIGHT_INTENSITY', 'value': value
                })
                break
            case 4100:
                datacakeFields.push({
                    'field': 'CO2', 'value': value
                })
                break
            case 4101:
                datacakeFields.push({
                    'field': 'BAROMETRIC_PRESSURE', 'value': value
                })
                break
            case 4102:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE', 'value': value
                })
                break
            case 4103:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE', 'value': value
                })
                break
            case 4104:
                datacakeFields.push({
                    'field': 'WIND_DIRECTION', 'value': value
                })
                break
            case 4105:
                datacakeFields.push({
                    'field': 'WIND_SPEED', 'value': value
                })
                break
            case 4106:
                datacakeFields.push({
                    'field': 'PH', 'value': value
                })
                break
            case 4107:
                datacakeFields.push({
                    'field': 'LIGHT_QUANTUM', 'value': value
                })
                break
            case 4108:
                datacakeFields.push({
                    'field': 'ELECTRICAL_CONDUCTIVITY', 'value': value
                })
                break
            case 4109:
                datacakeFields.push({
                    'field': 'DISSOLVED_OXYGEN', 'value': value
                })
                break
            case 4110:
                datacakeFields.push({
                    'field': 'SOIL_VOLUMETRIC_WATER_CONTENT', 'value': value
                })
                break
            case 4111:
                datacakeFields.push({
                    'field': 'SOIL_ELECTRICAL_CONDUCTIVITY', 'value': value
                })
                break
            case 4112:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE(SOIL_TEMPERATURE, VWC & EC Sensor)', 'value': value
                })
                break
            case 4113:
                datacakeFields.push({
                    'field': 'RAINFALL_HOURLY', 'value': value
                })
                break
            case 4115:
                datacakeFields.push({
                    'field': 'DISTANCE', 'value': value
                })
                break
            case 4116:
                datacakeFields.push({
                    'field': 'WATER_LEAK', 'value': value
                })
                break
            case 4117:
                datacakeFields.push({
                    'field': 'LIGUID_LEVEL', 'value': value
                })
                break
            case 4118:
                datacakeFields.push({
                    'field': 'NH3', 'value': value
                })
                break
            case 4119:
                datacakeFields.push({
                    'field': 'H2S', 'value': value
                })
                break
            case 4120:
                datacakeFields.push({
                    'field': 'FLOW_RATE', 'value': value
                })
                break
            case 4121:
                datacakeFields.push({
                    'field': 'TOTAL_FLOW', 'value': value
                })
                break
            case 4122:
                datacakeFields.push({
                    'field': 'OXYGEN_CONCENTRATION', 'value': value
                })
                break
            case 4123:
                datacakeFields.push({
                    'field': 'WATER_ELETRICAL_CONDUCTIVITY', 'value': value
                })
                break
            case 4124:
                datacakeFields.push({
                    'field': 'WATER_TEMPERATURE', 'value': value
                })
                break
            case 4125:
                datacakeFields.push({
                    'field': 'SOIL_HEAT_FLUX', 'value': value
                })
                break
            case 4126:
                datacakeFields.push({
                    'field': 'SUNSHINE_DURATION', 'value': value
                })
                break
            case 4127:
                datacakeFields.push({
                    'field': 'TOTAL_SOLAR_RADIATION', 'value': value
                })
                break
            case 4128:
                datacakeFields.push({
                    'field': 'WATER_SURFACE_EVAPORATION', 'value': value
                })
                break
            case 4129:
                datacakeFields.push({
                    'field': 'PHOTOSYNTHETICALLY_ACTIVE_RADIATION_PAR', 'value': value
                })
                break
            case 4130:
                datacakeFields.push({
                    'field': 'ACCELEROMETER', 'value': value
                })
                break
            case 4131:
                datacakeFields.push({
                    'field': 'VOLUME', 'value': value
                })
                break
            case 4133:
                datacakeFields.push({
                    'field': 'SOIL_TENSION', 'value': value
                })
                break
            case 4134:
                datacakeFields.push({
                    'field': 'SALINITY', 'value': value
                })
                break
            case 4135:
                datacakeFields.push({
                    'field': 'TDS', 'value': value
                })
                break
            case 4136:
                datacakeFields.push({
                    'field': 'LEAF_TEMPERATURE', 'value': value
                })
                break
            case 4137:
                datacakeFields.push({
                    'field': 'LEAF_WETNESS', 'value': value
                })
                break
            case 4138:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_10CM', 'value': value
                })
                break
            case 4139:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_20CM', 'value': value
                })
                break
            case 4140:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_30CM', 'value': value
                })
                break
            case 4141:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_40CM', 'value': value
                })
                break
            case 4142:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_10CM', 'value': value
                })
                break
            case 4143:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_20CM', 'value': value
                })
                break
            case 4144:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_30CM', 'value': value
                })
                break
            case 4145:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_40CM', 'value': value
                })
                break
            case 4146:
                datacakeFields.push({
                    'field': 'PM2_5', 'value': value
                })
                break
            case 4147:
                datacakeFields.push({
                    'field': 'PM10', 'value': value
                })
                break
            case 4148:
                datacakeFields.push({
                    'field': 'NOISE', 'value': value
                })
                break
            case 4150:
                datacakeFields.push({
                    'field': 'ACCELEROMETERX', 'value': value
                })
                break
            case 4151:
                datacakeFields.push({
                    'field': 'ACCELEROMETERY', 'value': value
                })
                break
            case 4152:
                datacakeFields.push({
                    'field': 'ACCELEROMETERZ', 'value': value
                })
                break
            case 4175:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_01', 'value': value
                })
                break
            case 4176:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_02', 'value': value
                })
                break
            case 4177:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_03', 'value': value
                })
                break
            case 4178:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_04', 'value': value
                })
                break
            case 4179:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_05', 'value': value
                })
                break
            case 4180:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_06', 'value': value
                })
                break
            case 4181:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_07', 'value': value
                })
                break
            case 4182:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_08', 'value': value
                })
                break
            case 4183:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_09', 'value': value
                })
                break
            case 5100:
                datacakeFields.push({
                    'field': 'SWITCH', 'value': value
                })
                break
            case 9990100:
                datacakeFields.push({
                    'field': 'BATTERY', 'value': message.battery
                })
                break
            case 9990200:
                datacakeFields.push({
                    'field': 'INTERVAL', 'value': message.interval
                })
                break
            case 9990300:
                datacakeFields.push({
                    'field': 'REMOVED', 'value': message.interval
                })
                break
        }
    }
    return datacakeFields
}

function crc16Check (data) {
    var crc16tab = [0x0000, 0x1189, 0x2312, 0x329b, 0x4624, 0x57ad, 0x6536, 0x74bf, 0x8c48, 0x9dc1, 0xaf5a, 0xbed3, 0xca6c, 0xdbe5, 0xe97e, 0xf8f7, 0x1081, 0x0108, 0x3393, 0x221a, 0x56a5, 0x472c, 0x75b7, 0x643e, 0x9cc9, 0x8d40, 0xbfdb, 0xae52, 0xdaed, 0xcb64, 0xf9ff, 0xe876, 0x2102, 0x308b, 0x0210, 0x1399, 0x6726, 0x76af, 0x4434, 0x55bd, 0xad4a, 0xbcc3, 0x8e58, 0x9fd1, 0xeb6e, 0xfae7, 0xc87c, 0xd9f5, 0x3183, 0x200a, 0x1291, 0x0318, 0x77a7, 0x662e, 0x54b5, 0x453c, 0xbdcb, 0xac42, 0x9ed9, 0x8f50, 0xfbef, 0xea66, 0xd8fd, 0xc974, 0x4204, 0x538d, 0x6116, 0x709f, 0x0420, 0x15a9, 0x2732, 0x36bb, 0xce4c, 0xdfc5, 0xed5e, 0xfcd7, 0x8868, 0x99e1, 0xab7a, 0xbaf3, 0x5285, 0x430c, 0x7197, 0x601e, 0x14a1, 0x0528, 0x37b3, 0x263a, 0xdecd, 0xcf44, 0xfddf, 0xec56, 0x98e9, 0x8960, 0xbbfb, 0xaa72, 0x6306, 0x728f, 0x4014, 0x519d, 0x2522, 0x34ab, 0x0630, 0x17b9, 0xef4e, 0xfec7, 0xcc5c, 0xddd5, 0xa96a, 0xb8e3, 0x8a78, 0x9bf1, 0x7387, 0x620e, 0x5095, 0x411c, 0x35a3, 0x242a, 0x16b1, 0x0738, 0xffcf, 0xee46, 0xdcdd, 0xcd54, 0xb9eb, 0xa862, 0x9af9, 0x8b70, 0x8408, 0x9581, 0xa71a, 0xb693, 0xc22c, 0xd3a5, 0xe13e, 0xf0b7, 0x0840, 0x19c9, 0x2b52, 0x3adb, 0x4e64, 0x5fed, 0x6d76, 0x7cff, 0x9489, 0x8500, 0xb79b, 0xa612, 0xd2ad, 0xc324, 0xf1bf, 0xe036, 0x18c1, 0x0948, 0x3bd3, 0x2a5a, 0x5ee5, 0x4f6c, 0x7df7, 0x6c7e, 0xa50a, 0xb483, 0x8618, 0x9791, 0xe32e, 0xf2a7, 0xc03c, 0xd1b5, 0x2942, 0x38cb, 0x0a50, 0x1bd9, 0x6f66, 0x7eef, 0x4c74, 0x5dfd, 0xb58b, 0xa402, 0x9699, 0x8710, 0xf3af, 0xe226, 0xd0bd, 0xc134, 0x39c3, 0x284a, 0x1ad1, 0x0b58, 0x7fe7, 0x6e6e, 0x5cf5, 0x4d7c, 0xc60c, 0xd785, 0xe51e, 0xf497, 0x8028, 0x91a1, 0xa33a, 0xb2b3, 0x4a44, 0x5bcd, 0x6956, 0x78df, 0x0c60, 0x1de9, 0x2f72, 0x3efb, 0xd68d, 0xc704, 0xf59f, 0xe416, 0x90a9, 0x8120, 0xb3bb, 0xa232, 0x5ac5, 0x4b4c, 0x79d7, 0x685e, 0x1ce1, 0x0d68, 0x3ff3, 0x2e7a, 0xe70e, 0xf687, 0xc41c, 0xd595, 0xa12a, 0xb0a3, 0x8238, 0x93b1, 0x6b46, 0x7acf, 0x4854, 0x59dd, 0x2d62, 0x3ceb, 0x0e70, 0x1ff9, 0xf78f, 0xe606, 0xd49d, 0xc514, 0xb1ab, 0xa022, 0x92b9, 0x8330, 0x7bc7, 0x6a4e, 0x58d5, 0x495c, 0x3de3, 0x2c6a, 0x1ef1, 0x0f78]
    var result = false
    var crc = 0
    var dataArray = []
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }

    for (var j = 0; j < dataArray.length; j++) {
        var item = dataArray[j]
        crc = (crc >> 8) ^ crc16tab[(crc ^ parseInt(item, 16)) & 0xFF]
    }
    if (crc === 0) {
        result = true
    }
    return result
}

// util
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

// util
function divideBy7Bytes (str) {
    var frameArray = []
    for (var i = 0; i < str.length - 4; i += 14) {
        var data = str.substring(i, i + 14)
        frameArray.push(data)
    }
    return frameArray
}

// util
function littleEndianTransform (data) {
    var dataArray = []
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    dataArray.reverse()
    return dataArray
}

// util
function strTo10SysNub (str) {
    var arr = littleEndianTransform(str)
    return parseInt(arr.toString()
      .replace(/,/g, ''), 16)
}

// util
function checkDataIdIsMeasureUpload (dataId) {
    return parseInt(dataId) > 4096
}

// configurable.
function isSpecialDataId (dataID) {
    switch (dataID) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
        case 0x120:
            return true
        default:
            return false
    }
}

// configurable
function ttnDataSpecialFormat (dataId, str) {
    var strReverse = littleEndianTransform(str)
    if (dataId === 2 || dataId === 3) {
        return strReverse.join('')
    }

    // handle unsigned number
    var str2 = toBinary(strReverse)

    var dataArray = []
    switch (dataId) {
        case 0: // DATA_BOARD_VERSION
        case 1: // DATA_SENSOR_VERSION
            // Using point segmentation
            for (var k = 0; k < str2.length; k += 16) {
                var tmp146 = str2.substring(k, k + 16)
                tmp146 = (parseInt(tmp146.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp146.substring(8, 16), 2) || 0)
                dataArray.push(tmp146)
            }
            return dataArray.join(',')
        case 4:
            for (var i = 0; i < str2.length; i += 8) {
                var item = parseInt(str2.substring(i, i + 8), 2)
                if (item < 10) {
                    item = '0' + item.toString()
                } else {
                    item = item.toString()
                }
                dataArray.push(item)
            }
            return dataArray.join('')
        case 7:
            // battery && interval
            return {
                interval: parseInt(str2.substr(0, 16), 2), power: parseInt(str2.substr(-16, 16), 2)
            }
        case 9:
            let dataValue = {
                detectionType: parseInt(str2.substring(0, 8), 2),
                modelId: parseInt(str2.substring(8, 16), 2),
                modelVer: parseInt(str2.substring(16, 24), 2)
            }
            // 01010000
            return dataValue

    }
}

// util
function ttnDataFormat (str) {
    var strReverse = littleEndianTransform(str)
    var str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        var arr = str2.split('')
        var reverseArr = []
        for (var forArr = 0; forArr < arr.length; forArr++) {
            var item = arr[forArr]
            if (parseInt(item) === 1) {
                reverseArr.push(0)
            } else {
                reverseArr.push(1)
            }
        }
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return parseFloat('-' + str2 / 1000)
    }
    return parseInt(str2, 2) / 1000
}

// util
function sensorAttrForVersion (dataValue) {
    var dataValueSplitArray = dataValue.split(',')
    return {
        ver_hardware: dataValueSplitArray[0], ver_software: dataValueSplitArray[1]
    }
}

// util
function toBinary (arr) {
    var binaryData = []
    for (var forArr = 0; forArr < arr.length; forArr++) {
        var item = arr[forArr]
        var data = parseInt(item, 16)
          .toString(2)
        var dataLength = data.length
        if (data.length !== 8) {
            for (var i = 0; i < 8 - dataLength; i++) {
                data = '0' + data
            }
        }
        binaryData.push(data)
    }
    return binaryData.toString()
      .replace(/,/g, '')
}
```

</details>

<details>

<summary>For AWS</summary>

```cpp
//Lambda function script

const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const client = new IoTDataPlaneClient({
//Replace the region according to your device.
    "region": "us-east-1"
});
const topic_prefix = 'sensor/s210x/'

function decodeUplink (input) {
    const bytes = Buffer.from(input, 'base64');
    // // init
    var bytesString = bytes2HexString(bytes)
        .toLocaleUpperCase();
    // var bytesString = input
    var decoded = {
        // valid
        valid: true, err: 0, // bytes
        payload: bytesString, // messages array
        messages: []
    }

    // CRC check
    if (!crc16Check(bytesString)) {
        decoded['valid'] = false
        decoded['err'] = -1 // "crc check fail."
        return { data: decoded }
    }

    // Length Check
    if ((((bytesString.length / 2) - 2) % 7) !== 0) {
        decoded['valid'] = false
        decoded['err'] = -2 // "length check fail."
        return { data: decoded }
    }

    // Cache sensor id
    var sensorEuiLowBytes
    var sensorEuiHighBytes

    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString)
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
        var frame = frameArray[forFrame]
        // Extract key parameters
        var channel = strTo10SysNub(frame.substring(0, 2))
        var dataID = strTo10SysNub(frame.substring(2, 6))
        var dataValue = frame.substring(6, 14)
        var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue)

        if (checkDataIdIsMeasureUpload(dataID)) {
            // if telemetry.
            decoded.messages.push({
                type: 'report_telemetry', measurementId: dataID, measurementValue: realDataValue
            })
        } else if (isSpecialDataId(dataID) || (dataID === 5) || (dataID === 6)) {
            // if special order, except "report_sensor_id".
            switch (dataID) {
                case 0x00:
                    // node version
                    var versionData = sensorAttrForVersion(realDataValue)
                    decoded.messages.push({
                        type: 'upload_version', hardwareVersion: versionData.ver_hardware, softwareVersion: versionData.ver_software
                    })
                    break
                case 1:
                    // sensor version
                    break
                case 2:
                    // sensor eui, low bytes
                    sensorEuiLowBytes = realDataValue
                    break
                case 3:
                    // sensor eui, high bytes
                    sensorEuiHighBytes = realDataValue
                    break
                case 7:
                    // battery power && interval
                    decoded.messages.push({
                        type: 'upload_battery', battery: realDataValue.power
                    }, {
                        type: 'upload_interval', interval: parseInt(realDataValue.interval) * 60
                    })
                    break
                case 9:
                    decoded.messages.push({
                        type: 'model_info',
                        detectionType: realDataValue.detectionType,
                        modelId: realDataValue.modelId,
                        modelVer: realDataValue.modelVer
                    })
                    break
                case 0x120:
                    // remove sensor
                    decoded.messages.push({
                        type: 'report_remove_sensor', channel: 1
                    })
                    break
                default:
                    break
            }
        } else {
            decoded.messages.push({
                type: 'unknown_message', dataID: dataID, dataValue: dataValue
            })
        }

    }

    // if the complete id received, as "upload_sensor_id"
    if (sensorEuiHighBytes && sensorEuiLowBytes) {
        decoded.messages.unshift({
            type: 'upload_sensor_id', channel: 1, sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
        })
    }
    // return
    return { data: decoded }
}

function crc16Check (data) {
    return true
}

// util
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

// util
function divideBy7Bytes (str) {
    var frameArray = []
    for (var i = 0; i < str.length - 4; i += 14) {
        var data = str.substring(i, i + 14)
        frameArray.push(data)
    }
    return frameArray
}

// util
function littleEndianTransform (data) {
    var dataArray = []
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    dataArray.reverse()
    return dataArray
}

// util
function strTo10SysNub (str) {
    var arr = littleEndianTransform(str)
    return parseInt(arr.toString()
        .replace(/,/g, ''), 16)
}

// util
function checkDataIdIsMeasureUpload (dataId) {
    return parseInt(dataId) > 4096
}

// configurable.
function isSpecialDataId (dataID) {
    switch (dataID) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
        case 0x120:
            return true
        default:
            return false
    }
}

// configurable
function ttnDataSpecialFormat (dataId, str) {
    var strReverse = littleEndianTransform(str)
    if (dataId === 2 || dataId === 3) {
        return strReverse.join('')
    }

    // handle unsigned number
    var str2 = toBinary(strReverse)
    var dataArray = []
    switch (dataId) {
        case 0: // DATA_BOARD_VERSION
        case 1: // DATA_SENSOR_VERSION
                // Using point segmentation
            for (var k = 0; k < str2.length; k += 16) {
                var tmp146 = str2.substring(k, k + 16)
                tmp146 = (parseInt(tmp146.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp146.substring(8, 16), 2) || 0)
                dataArray.push(tmp146)
            }
            return dataArray.join(',')
        case 4:
            for (var i = 0; i < str2.length; i += 8) {
                var item = parseInt(str2.substring(i, i + 8), 2)
                if (item < 10) {
                    item = '0' + item.toString()
                } else {
                    item = item.toString()
                }
                dataArray.push(item)
            }
            return dataArray.join('')
        case 7:
            // battery && interval
            return {
                interval: parseInt(str2.substr(0, 16), 2), power: parseInt(str2.substr(-16, 16), 2)
            }
        case 9:
            let dataValue = {
                detectionType: parseInt(str2.substring(0, 8), 2),
                modelId: parseInt(str2.substring(8, 16), 2),
                modelVer: parseInt(str2.substring(16, 24), 2)
            }
            // 01010000
            return dataValue
    }
}

// util
function ttnDataFormat (str) {
    var strReverse = littleEndianTransform(str)
    var str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        var arr = str2.split('')
        var reverseArr = []
        for (var forArr = 0; forArr < arr.length; forArr++) {
            var item = arr[forArr]
            if (parseInt(item) === 1) {
                reverseArr.push(0)
            } else {
                reverseArr.push(1)
            }
        }
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return parseFloat('-' + str2 / 1000)
    }
    return parseInt(str2, 2) / 1000
}

// util
function sensorAttrForVersion (dataValue) {
    var dataValueSplitArray = dataValue.split(',')
    return {
        ver_hardware: dataValueSplitArray[0], ver_software: dataValueSplitArray[1]
    }
}

// util
function toBinary (arr) {
    var binaryData = []
    for (var forArr = 0; forArr < arr.length; forArr++) {
        var item = arr[forArr]
        var data = parseInt(item, 16)
            .toString(2)
        var dataLength = data.length
        if (data.length !== 8) {
            for (var i = 0; i < 8 - dataLength; i++) {
                data = '0' + data
            }
        }
        binaryData.push(data)
    }
    return binaryData.toString()
        .replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        const lorawan_info = event["WirelessMetadata"]["LoRaWAN"];
        const device_id = event["WirelessDeviceId"]
        const device_eui = lorawan_info["DevEui"]
        const lorawan_data = event["PayloadData"];
        const resolved_data = decodeUplink(lorawan_data, lorawan_info["FPort"]);

        // publish all measurement data
        const input = { // PublishRequest
            topic: `${topic_prefix}${device_eui}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                eui: device_eui,
                device_id: device_id,
                timestamp: lorawan_info["Timestamp"],
                data: resolved_data.data
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

### SenseCAP S2100 Data Logger

[SenseCAP S2100 Data Logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) is a versatile device that can connect to MODBUS-RTU RS485/Analog/GPIO sensors, allowing for easy transmission of data to the LoRaWAN network. With its LoRa and IP66 design, this device boasts impressive stability and reliability, and can cover a long transmission range while keeping ultra-low power consumption. It is perfect for outdoor use, and can be powered by battery or connected to a 12V external power supply for even greater flexibility. When connected to the 12V power supply, the replaceable built-in battery acts as a backup power source. Additionally, the S2100 Data Logger is optimized for OTA with built-in Bluetooth, making setup and updates quick and simple. To top it off, the S2110 converter enables the S2100 Data Logger to connect to Grove Sensors, making it an excellent choice for DIY industrial-level LoRaWAN sensors and small-scale deployment.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

#### Decoder

<!-- Code -->

import Tabs2 from '@theme/Tabs';
import TabItem2 from '@theme/TabItem';

<Tabs2>
<TabItem2 value="For TTN" label="For TTN">

<details>

<summary>For TTN(ChirpStack V4)</summary>

```cpp
/**
 * Entry, decoder.js
 */
function decodeUplink (input, port) {
    // data split
  
    var bytes = input['bytes']
    // init
    bytes = bytes2HexString(bytes)
      .toLocaleUpperCase()
  
    let result = {
      'err': 0, 'payload': bytes, 'valid': true, messages: []
    }
    let splitArray = dataSplit(bytes)
    // data decoder
    let decoderArray = []
    for (let i = 0; i < splitArray.length; i++) {
      let item = splitArray[i]
      let dataId = item.dataId
      let dataValue = item.dataValue
      let messages = dataIdAndDataValueJudge(dataId, dataValue)
      decoderArray.push(messages)
    }
    result.messages = decoderArray
    return { data: result }
  }
  
  /**
   * data splits
   * @param bytes
   * @returns {*[]}
   */
  function dataSplit (bytes) {
    let frameArray = []
  
    for (let i = 0; i < bytes.length; i++) {
      let remainingValue = bytes
      let dataId = remainingValue.substring(0, 2)
      let dataValue
      let dataObj = {}
      switch (dataId) {
        case '01' :
        case '20' :
        case '21' :
        case '30' :
        case '31' :
        case '33' :
        case '40' :
        case '41' :
        case '42' :
        case '43' :
        case '44' :
        case '45' :
          dataValue = remainingValue.substring(2, 22)
          bytes = remainingValue.substring(22)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        case '02':
          dataValue = remainingValue.substring(2, 18)
          bytes = remainingValue.substring(18)
          dataObj = {
            'dataId': '02', 'dataValue': dataValue
          }
          break
        case '03' :
        case '06':
          dataValue = remainingValue.substring(2, 4)
          bytes = remainingValue.substring(4)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        case '05' :
        case '34':
          dataValue = bytes.substring(2, 10)
          bytes = remainingValue.substring(10)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        case '04':
        case '10':
        case '32':
        case '35':
        case '36':
        case '37':
        case '38':
        case '39':
          dataValue = bytes.substring(2, 20)
          bytes = remainingValue.substring(20)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        default:
          dataValue = '9'
          break
      }
      if (dataValue.length < 2) {
        break
      }
      frameArray.push(dataObj)
    }
    return frameArray
  }
  
  function dataIdAndDataValueJudge (dataId, dataValue) {
    let messages = []
    switch (dataId) {
      case '01':
        let temperature = dataValue.substring(0, 4)
        let humidity = dataValue.substring(4, 6)
        let illumination = dataValue.substring(6, 14)
        let uv = dataValue.substring(14, 16)
        let windSpeed = dataValue.substring(16, 20)
        messages = [{
          measurementValue: loraWANV2DataFormat(temperature, 10), measurementId: '4097', type: 'Air Temperature'
        }, {
          measurementValue: loraWANV2DataFormat(humidity), measurementId: '4098', type: 'Air Humidity'
        }, {
          measurementValue: loraWANV2DataFormat(illumination), measurementId: '4099', type: 'Light Intensity'
        }, {
          measurementValue: loraWANV2DataFormat(uv, 10), measurementId: '4190', type: 'UV Index'
        }, {
          measurementValue: loraWANV2DataFormat(windSpeed, 10), measurementId: '4105', type: 'Wind Speed'
        }]
        break
      case '02':
        let windDirection = dataValue.substring(0, 4)
        let rainfall = dataValue.substring(4, 12)
        let airPressure = dataValue.substring(12, 16)
        messages = [{
          measurementValue: loraWANV2DataFormat(windDirection), measurementId: '4104', type: 'Wind Direction Sensor'
        }, {
          measurementValue: loraWANV2DataFormat(rainfall, 1000), measurementId: '4113', type: 'Rain Gauge'
        }, {
  
          measurementValue: loraWANV2DataFormat(airPressure, 0.1), measurementId: '4101', type: 'Barometric Pressure'
        }]
        break
      case '03':
        let Electricity = dataValue
        messages = [{
          'Battery(%)': loraWANV2DataFormat(Electricity)
        }]
        break
      case '04':
        let electricityWhether = dataValue.substring(0, 2)
        let hwv = dataValue.substring(2, 6)
        let bdv = dataValue.substring(6, 10)
        let sensorAcquisitionInterval = dataValue.substring(10, 14)
        let gpsAcquisitionInterval = dataValue.substring(14, 18)
        messages = [{
          'Battery(%)': loraWANV2DataFormat(electricityWhether),
          'Hardware Version': `${loraWANV2DataFormat(hwv.substring(0, 2))}.${loraWANV2DataFormat(hwv.substring(2, 4))}`,
          'Firmware Version': `${loraWANV2DataFormat(bdv.substring(0, 2))}.${loraWANV2DataFormat(bdv.substring(2, 4))}`,
          'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionInterval)) * 60,
          'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionInterval)) * 60
        }]
        break
      case '05':
        let sensorAcquisitionIntervalFive = dataValue.substring(0, 4)
        let gpsAcquisitionIntervalFive = dataValue.substring(4, 8)
        messages = [{
          'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionIntervalFive)) * 60,
          'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionIntervalFive)) * 60
        }]
        break
      case '06':
        let errorCode = dataValue
        let descZh
        switch (errorCode) {
          case '00':
            descZh = 'CCL_SENSOR_ERROR_NONE'
            break
          case '01':
            descZh = 'CCL_SENSOR_NOT_FOUND'
            break
          case '02':
            descZh = 'CCL_SENSOR_WAKEUP_ERROR'
            break
          case '03':
            descZh = 'CCL_SENSOR_NOT_RESPONSE'
            break
          case '04':
            descZh = 'CCL_SENSOR_DATA_EMPTY'
            break
          case '05':
            descZh = 'CCL_SENSOR_DATA_HEAD_ERROR'
            break
          case '06':
            descZh = 'CCL_SENSOR_DATA_CRC_ERROR'
            break
          case '07':
            descZh = 'CCL_SENSOR_DATA_B1_NO_VALID'
            break
          case '08':
            descZh = 'CCL_SENSOR_DATA_B2_NO_VALID'
            break
          case '09':
            descZh = 'CCL_SENSOR_RANDOM_NOT_MATCH'
            break
          case '0A':
            descZh = 'CCL_SENSOR_PUBKEY_SIGN_VERIFY_FAILED'
            break
          case '0B':
            descZh = 'CCL_SENSOR_DATA_SIGN_VERIFY_FAILED'
            break
          case '0C':
            descZh = 'CCL_SENSOR_DATA_VALUE_HI'
            break
          case '0D':
            descZh = 'CCL_SENSOR_DATA_VALUE_LOW'
            break
          case '0E':
            descZh = 'CCL_SENSOR_DATA_VALUE_MISSED'
            break
          case '0F':
            descZh = 'CCL_SENSOR_ARG_INVAILD'
            break
          case '10':
            descZh = 'CCL_SENSOR_RS485_MASTER_BUSY'
            break
          case '11':
            descZh = 'CCL_SENSOR_RS485_REV_DATA_ERROR'
            break
          case '12':
            descZh = 'CCL_SENSOR_RS485_REG_MISSED'
            break
          case '13':
            descZh = 'CCL_SENSOR_RS485_FUN_EXE_ERROR'
            break
          case '14':
            descZh = 'CCL_SENSOR_RS485_WRITE_STRATEGY_ERROR'
            break
          case '15':
            descZh = 'CCL_SENSOR_CONFIG_ERROR'
            break
          case 'FF':
            descZh = 'CCL_SENSOR_DATA_ERROR_UNKONW'
            break
          default:
            descZh = 'CC_OTHER_FAILED'
            break
        }
        messages = [{
          measurementId: '4101', type: 'sensor_error_event', errCode: errorCode, descZh
        }]
        break
      case '10':
        let statusValue = dataValue.substring(0, 2)
        let { status, type } = loraWANV2BitDataFormat(statusValue)
        let sensecapId = dataValue.substring(2)
        messages = [{
          status: status, channelType: type, sensorEui: sensecapId
        }]
        break
      case '20':
        let initmeasurementId = 4175
        let sensor = []
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiHeadValues = `${modelId}.${detectionType}`
          sensor.push({
            measurementValue: aiHeadValues, measurementId: initmeasurementId
          })
          initmeasurementId++
        }
        messages = sensor
        break
      case '21':
        // Vision AI:
        // AI 识别输出帧
        let tailValueArray = []
        let initTailmeasurementId = 4180
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiTailValues = `${modelId}.${detectionType}`
          tailValueArray.push({
            measurementValue: aiTailValues, measurementId: initTailmeasurementId, type: `AI Detection ${i}`
          })
          initTailmeasurementId++
        }
        messages = tailValueArray
        break
      case '30':
      case '31':
        // 首帧或者首帧输出帧
        let channelInfoOne = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let dataOne = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(4, 12), 1000),
          measurementId: parseInt(channelInfoOne.one),
          type: 'Measurement'
        }
        let dataTwo = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(12, 20), 1000),
          measurementId: parseInt(channelInfoOne.two),
          type: 'Measurement'
        }
        let cacheArrayInfo = []
        if (parseInt(channelInfoOne.one)) {
          cacheArrayInfo.push(dataOne)
        }
        if (parseInt(channelInfoOne.two)) {
          cacheArrayInfo.push(dataTwo)
        }
        cacheArrayInfo.forEach(item => {
          messages.push(item)
        })
        break
      case '32':
        let channelInfoTwo = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let dataThree = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          measurementId: parseInt(channelInfoTwo.one),
          type: 'Measurement'
        }
        let dataFour = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(10, 18), 1000),
          measurementId: parseInt(channelInfoTwo.two),
          type: 'Measurement'
        }
        if (parseInt(channelInfoTwo.one)) {
          messages.push(dataThree)
        }
        if (parseInt(channelInfoTwo.two)) {
          messages.push(dataFour)
        }
        break
      case '33':
        let channelInfoThree = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let dataFive = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(4, 12), 1000),
          measurementId: parseInt(channelInfoThree.one),
          type: 'Measurement'
        }
        let dataSix = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(12, 20), 1000),
          measurementId: parseInt(channelInfoThree.two),
          type: 'Measurement'
        }
        if (parseInt(channelInfoThree.one)) {
          messages.push(dataFive)
        }
        if (parseInt(channelInfoThree.two)) {
          messages.push(dataSix)
        }
  
        break
      case '34':
        let model = loraWANV2DataFormat(dataValue.substring(0, 2))
        let GPIOInput = loraWANV2DataFormat(dataValue.substring(2, 4))
        let simulationModel = loraWANV2DataFormat(dataValue.substring(4, 6))
        let simulationInterface = loraWANV2DataFormat(dataValue.substring(6, 8))
        messages = [{
          'dataloggerProtocol': model,
          'dataloggerGPIOInput': GPIOInput,
          'dataloggerAnalogType': simulationModel,
          'dataloggerAnalogInterface': simulationInterface
        }]
        break
      case '35':
      case '36':
        let channelTDOne = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let channelSortTDOne = 3920 + (parseInt(channelTDOne.one) - 1) * 2
        let channelSortTDTWO = 3921 + (parseInt(channelTDOne.one) - 1) * 2
        messages = [{
          [channelSortTDOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          [channelSortTDTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
        }]
        break
      case '37':
        let channelTDInfoTwo = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let channelSortOne = 3920 + (parseInt(channelTDInfoTwo.one) - 1) * 2
        let channelSortTWO = 3921 + (parseInt(channelTDInfoTwo.one) - 1) * 2
        messages = [{
          [channelSortOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          [channelSortTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
        }]
        break
      case '38':
        let channelTDInfoThree = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let channelSortThreeOne = 3920 + (parseInt(channelTDInfoThree.one) - 1) * 2
        let channelSortThreeTWO = 3921 + (parseInt(channelTDInfoThree.one) - 1) * 2
        messages = [{
          [channelSortThreeOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          [channelSortThreeTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
        }]
        break
      case '39':
        let electricityWhetherTD = dataValue.substring(0, 2)
        let hwvTD = dataValue.substring(2, 6)
        let bdvTD = dataValue.substring(6, 10)
        let sensorAcquisitionIntervalTD = dataValue.substring(10, 14)
        let gpsAcquisitionIntervalTD = dataValue.substring(14, 18)
        messages = [{
          'Battery(%)': loraWANV2DataFormat(electricityWhetherTD),
          'Hardware Version': `${loraWANV2DataFormat(hwvTD.substring(0, 2))}.${loraWANV2DataFormat(hwvTD.substring(2, 4))}`,
          'Firmware Version': `${loraWANV2DataFormat(bdvTD.substring(0, 2))}.${loraWANV2DataFormat(bdvTD.substring(2, 4))}`,
          'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionIntervalTD)) * 60,
          'thresholdMeasureInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionIntervalTD))
        }]
        break
      case '40':
      case '41':
        let lightIntensity = dataValue.substring(0, 4)
        let loudness = dataValue.substring(4, 8)
        // X
        let accelerateX = dataValue.substring(8, 12)
        // Y
        let accelerateY = dataValue.substring(12, 16)
        // Z
        let accelerateZ = dataValue.substring(16, 20)
        messages = [{
          measurementValue: loraWANV2DataFormat(lightIntensity), measurementId: '4193', type: 'Light Intensity'
        }, {
          measurementValue: loraWANV2DataFormat(loudness), measurementId: '4192', type: 'Sound Intensity'
        }, {
  
          measurementValue: loraWANV2DataFormat(accelerateX, 100), measurementId: '4150', type: 'AccelerometerX'
        }, {
  
          measurementValue: loraWANV2DataFormat(accelerateY, 100), measurementId: '4151', type: 'AccelerometerY'
        }, {
  
          measurementValue: loraWANV2DataFormat(accelerateZ, 100), measurementId: '4152', type: 'AccelerometerZ'
        }]
        break
      case '42':
        let airTemperature = dataValue.substring(0, 4)
        let AirHumidity = dataValue.substring(4, 8)
        let tVOC = dataValue.substring(8, 12)
        let CO2eq = dataValue.substring(12, 16)
        let soilMoisture = dataValue.substring(16, 20)
        messages = [{
          measurementValue: loraWANV2DataFormat(airTemperature, 100), measurementId: '4097', type: 'Air Temperature'
        }, {
          measurementValue: loraWANV2DataFormat(AirHumidity, 100), measurementId: '4098', type: 'Air Humidity'
        }, {
          measurementValue: loraWANV2DataFormat(tVOC), measurementId: '4195', type: 'Total Volatile Organic Compounds'
        }, {
          measurementValue: loraWANV2DataFormat(CO2eq), measurementId: '4100', type: 'CO2'
        }, {
          measurementValue: loraWANV2DataFormat(soilMoisture), measurementId: '4196', type: 'Soil moisture intensity'
        }]
        break
      case '43':
      case '44':
        let headerDevKitValueArray = []
        let initDevkitmeasurementId = 4175
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiHeadValues = `${modelId}.${detectionType}`
          headerDevKitValueArray.push({
            measurementValue: aiHeadValues, measurementId: initDevkitmeasurementId, type: `AI Detection ${i}`
          })
          initDevkitmeasurementId++
        }
        messages = headerDevKitValueArray
        break
      case '45':
        let initTailDevKitmeasurementId = 4180
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiTailValues = `${modelId}.${detectionType}`
          messages.push({
            measurementValue: aiTailValues, measurementId: initTailDevKitmeasurementId, type: `AI Detection ${i}`
          })
          initTailDevKitmeasurementId++
        }
        break
      default:
        break
    }
    return messages
  }
  
  /**
   *
   * data formatting
   * @param str
   * @param divisor
   * @returns {string|number}
   */
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
  
  /**
   * Handling big-endian data formats
   * @param data
   * @returns {*[]}
   */
  function bigEndianTransform (data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
      dataArray.push(data.substring(i, i + 2))
    }
    // array of hex
    return dataArray
  }
  
  /**
   * Convert to an 8-digit binary number with 0s in front of the number
   * @param arr
   * @returns {string}
   */
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
    let ret = binaryData.toString()
      .replace(/,/g, '')
    return ret
  }
  
  /**
   * sensor
   * @param str
   * @returns {{channel: number, type: number, status: number}}
   */
  function loraWANV2BitDataFormat (str) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    let channel = parseInt(str2.substring(0, 4), 2)
    let status = parseInt(str2.substring(4, 5), 2)
    let type = parseInt(str2.substring(5), 2)
    return { channel, status, type }
  }
  
  /**
   * channel info
   * @param str
   * @returns {{channelTwo: number, channelOne: number}}
   */
  function loraWANV2ChannelBitFormat (str) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    let one = parseInt(str2.substring(0, 4), 2)
    let two = parseInt(str2.substring(4, 8), 2)
    let resultInfo = {
      one: one, two: two
    }
    return resultInfo
  }
  
  /**
   * data log status bit
   * @param str
   * @returns {{total: number, level: number, isTH: number}}
   */
  function loraWANV2DataLogBitFormat (str) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    let isTH = parseInt(str2.substring(0, 1), 2)
    let total = parseInt(str2.substring(1, 5), 2)
    let left = parseInt(str2.substring(5), 2)
    let resultInfo = {
      isTH: isTH, total: total, left: left
    }
    return resultInfo
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
```

</details>

</TabItem2>
<TabItem2 value="For Helium" label="For Helium">

<details>

<summary>For Helium</summary>

```cpp
/**
 * Entry, decoder.js
 */
function Decoder (bytes, port) {
  // data split

  bytes = bytes2HexString(bytes)
    .toLocaleUpperCase()

  let result = {
    'err': 0, 'payload': bytes, 'valid': true, messages: []
  }
  let splitArray = dataSplit(bytes)
  // data decoder
  let decoderArray = []
  for (let i = 0; i < splitArray.length; i++) {
    let item = splitArray[i]
    let dataId = item.dataId
    let dataValue = item.dataValue
    let messages = dataIdAndDataValueJudge(dataId, dataValue)
    decoderArray.push(messages)
  }
  result.messages = decoderArray
  return { data: result }
}

/**
 * data splits
 * @param bytes
 * @returns {*[]}
 */
function dataSplit (bytes) {
  let frameArray = []

  for (let i = 0; i < bytes.length; i++) {
    let remainingValue = bytes
    let dataId = remainingValue.substring(0, 2)
    let dataValue
    let dataObj = {}
    switch (dataId) {
      case '01' :
      case '20' :
      case '21' :
      case '30' :
      case '31' :
      case '33' :
      case '40' :
      case '41' :
      case '42' :
      case '43' :
      case '44' :
      case '45' :
        dataValue = remainingValue.substring(2, 22)
        bytes = remainingValue.substring(22)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '02':
        dataValue = remainingValue.substring(2, 18)
        bytes = remainingValue.substring(18)
        dataObj = {
          'dataId': '02', 'dataValue': dataValue
        }
        break
      case '03' :
      case '06':
        dataValue = remainingValue.substring(2, 4)
        bytes = remainingValue.substring(4)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '05' :
      case '34':
        dataValue = bytes.substring(2, 10)
        bytes = remainingValue.substring(10)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '04':
      case '10':
      case '32':
      case '35':
      case '36':
      case '37':
      case '38':
      case '39':
        dataValue = bytes.substring(2, 20)
        bytes = remainingValue.substring(20)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      default:
        dataValue = '9'
        break
    }
    if (dataValue.length < 2) {
      break
    }
    frameArray.push(dataObj)
  }
  return frameArray
}

function dataIdAndDataValueJudge (dataId, dataValue) {
  let messages = []
  switch (dataId) {
    case '01':
      let temperature = dataValue.substring(0, 4)
      let humidity = dataValue.substring(4, 6)
      let illumination = dataValue.substring(6, 14)
      let uv = dataValue.substring(14, 16)
      let windSpeed = dataValue.substring(16, 20)
      messages = [{
        measurementValue: loraWANV2DataFormat(temperature, 10), measurementId: '4097', type: 'Air Temperature'
      }, {
        measurementValue: loraWANV2DataFormat(humidity), measurementId: '4098', type: 'Air Humidity'
      }, {
        measurementValue: loraWANV2DataFormat(illumination), measurementId: '4099', type: 'Light Intensity'
      }, {
        measurementValue: loraWANV2DataFormat(uv, 10), measurementId: '4190', type: 'UV Index'
      }, {
        measurementValue: loraWANV2DataFormat(windSpeed, 10), measurementId: '4105', type: 'Wind Speed'
      }]
      break
    case '02':
      let windDirection = dataValue.substring(0, 4)
      let rainfall = dataValue.substring(4, 12)
      let airPressure = dataValue.substring(12, 16)
      messages = [{
        measurementValue: loraWANV2DataFormat(windDirection), measurementId: '4104', type: 'Wind Direction Sensor'
      }, {
        measurementValue: loraWANV2DataFormat(rainfall, 1000), measurementId: '4113', type: 'Rain Gauge'
      }, {

        measurementValue: loraWANV2DataFormat(airPressure, 0.1), measurementId: '4101', type: 'Barometric Pressure'
      }]
      break
    case '03':
      let Electricity = dataValue
      messages = [{
        'Battery(%)': loraWANV2DataFormat(Electricity)
      }]
      break
    case '04':
      let electricityWhether = dataValue.substring(0, 2)
      let hwv = dataValue.substring(2, 6)
      let bdv = dataValue.substring(6, 10)
      let sensorAcquisitionInterval = dataValue.substring(10, 14)
      let gpsAcquisitionInterval = dataValue.substring(14, 18)
      messages = [{
        'Battery(%)': loraWANV2DataFormat(electricityWhether),
        'Hardware Version': `${loraWANV2DataFormat(hwv.substring(0, 2))}.${loraWANV2DataFormat(hwv.substring(2, 4))}`,
        'Firmware Version': `${loraWANV2DataFormat(bdv.substring(0, 2))}.${loraWANV2DataFormat(bdv.substring(2, 4))}`,
        'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionInterval)) * 60,
        'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionInterval)) * 60
      }]
      break
    case '05':
      let sensorAcquisitionIntervalFive = dataValue.substring(0, 4)
      let gpsAcquisitionIntervalFive = dataValue.substring(4, 8)
      messages = [{
        'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionIntervalFive)) * 60,
        'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionIntervalFive)) * 60
      }]
      break
    case '06':
      let errorCode = dataValue
      let descZh
      switch (errorCode) {
        case '00':
          descZh = 'CCL_SENSOR_ERROR_NONE'
          break
        case '01':
          descZh = 'CCL_SENSOR_NOT_FOUND'
          break
        case '02':
          descZh = 'CCL_SENSOR_WAKEUP_ERROR'
          break
        case '03':
          descZh = 'CCL_SENSOR_NOT_RESPONSE'
          break
        case '04':
          descZh = 'CCL_SENSOR_DATA_EMPTY'
          break
        case '05':
          descZh = 'CCL_SENSOR_DATA_HEAD_ERROR'
          break
        case '06':
          descZh = 'CCL_SENSOR_DATA_CRC_ERROR'
          break
        case '07':
          descZh = 'CCL_SENSOR_DATA_B1_NO_VALID'
          break
        case '08':
          descZh = 'CCL_SENSOR_DATA_B2_NO_VALID'
          break
        case '09':
          descZh = 'CCL_SENSOR_RANDOM_NOT_MATCH'
          break
        case '0A':
          descZh = 'CCL_SENSOR_PUBKEY_SIGN_VERIFY_FAILED'
          break
        case '0B':
          descZh = 'CCL_SENSOR_DATA_SIGN_VERIFY_FAILED'
          break
        case '0C':
          descZh = 'CCL_SENSOR_DATA_VALUE_HI'
          break
        case '0D':
          descZh = 'CCL_SENSOR_DATA_VALUE_LOW'
          break
        case '0E':
          descZh = 'CCL_SENSOR_DATA_VALUE_MISSED'
          break
        case '0F':
          descZh = 'CCL_SENSOR_ARG_INVAILD'
          break
        case '10':
          descZh = 'CCL_SENSOR_RS485_MASTER_BUSY'
          break
        case '11':
          descZh = 'CCL_SENSOR_RS485_REV_DATA_ERROR'
          break
        case '12':
          descZh = 'CCL_SENSOR_RS485_REG_MISSED'
          break
        case '13':
          descZh = 'CCL_SENSOR_RS485_FUN_EXE_ERROR'
          break
        case '14':
          descZh = 'CCL_SENSOR_RS485_WRITE_STRATEGY_ERROR'
          break
        case '15':
          descZh = 'CCL_SENSOR_CONFIG_ERROR'
          break
        case 'FF':
          descZh = 'CCL_SENSOR_DATA_ERROR_UNKONW'
          break
        default:
          descZh = 'CC_OTHER_FAILED'
          break
      }
      messages = [{
        measurementId: '4101', type: 'sensor_error_event', errCode: errorCode, descZh
      }]
      break
    case '10':
      let statusValue = dataValue.substring(0, 2)
      let { status, type } = loraWANV2BitDataFormat(statusValue)
      let sensecapId = dataValue.substring(2)
      messages = [{
        status: status, channelType: type, sensorEui: sensecapId
      }]
      break
    case '20':
      let initmeasurementId = 4175
      let sensor = []
      for (let i = 0; i < dataValue.length; i += 4) {
        let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
        let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
        let aiHeadValues = `${modelId}.${detectionType}`
        sensor.push({
          measurementValue: aiHeadValues, measurementId: initmeasurementId
        })
        initmeasurementId++
      }
      messages = sensor
      break
    case '21':
      // Vision AI:
      // AI 识别输出帧
      let tailValueArray = []
      let initTailmeasurementId = 4180
      for (let i = 0; i < dataValue.length; i += 4) {
        let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
        let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
        let aiTailValues = `${modelId}.${detectionType}`
        tailValueArray.push({
          measurementValue: aiTailValues, measurementId: initTailmeasurementId, type: `AI Detection ${i}`
        })
        initTailmeasurementId++
      }
      messages = tailValueArray
      break
    case '30':
    case '31':
      // 首帧或者首帧输出帧
      let channelInfoOne = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
      let dataOne = {
        measurementValue: loraWANV2DataFormat(dataValue.substring(4, 12), 1000),
        measurementId: parseInt(channelInfoOne.one),
        type: 'Measurement'
      }
      let dataTwo = {
        measurementValue: loraWANV2DataFormat(dataValue.substring(12, 20), 1000),
        measurementId: parseInt(channelInfoOne.two),
        type: 'Measurement'
      }
      let cacheArrayInfo = []
      if (parseInt(channelInfoOne.one)) {
        cacheArrayInfo.push(dataOne)
      }
      if (parseInt(channelInfoOne.two)) {
        cacheArrayInfo.push(dataTwo)
      }
      cacheArrayInfo.forEach(item => {
        messages.push(item)
      })
      break
    case '32':
      let channelInfoTwo = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
      let dataThree = {
        measurementValue: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
        measurementId: parseInt(channelInfoTwo.one),
        type: 'Measurement'
      }
      let dataFour = {
        measurementValue: loraWANV2DataFormat(dataValue.substring(10, 18), 1000),
        measurementId: parseInt(channelInfoTwo.two),
        type: 'Measurement'
      }
      if (parseInt(channelInfoTwo.one)) {
        messages.push(dataThree)
      }
      if (parseInt(channelInfoTwo.two)) {
        messages.push(dataFour)
      }
      break
    case '33':
      let channelInfoThree = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
      let dataFive = {
        measurementValue: loraWANV2DataFormat(dataValue.substring(4, 12), 1000),
        measurementId: parseInt(channelInfoThree.one),
        type: 'Measurement'
      }
      let dataSix = {
        measurementValue: loraWANV2DataFormat(dataValue.substring(12, 20), 1000),
        measurementId: parseInt(channelInfoThree.two),
        type: 'Measurement'
      }
      if (parseInt(channelInfoThree.one)) {
        messages.push(dataFive)
      }
      if (parseInt(channelInfoThree.two)) {
        messages.push(dataSix)
      }

      break
    case '34':
      let model = loraWANV2DataFormat(dataValue.substring(0, 2))
      let GPIOInput = loraWANV2DataFormat(dataValue.substring(2, 4))
      let simulationModel = loraWANV2DataFormat(dataValue.substring(4, 6))
      let simulationInterface = loraWANV2DataFormat(dataValue.substring(6, 8))
      messages = [{
         'dataloggerProtocol': model, 'dataloggerGPIOInput': GPIOInput, 'dataloggerAnalogType': simulationModel, 'dataloggerAnalogInterface': simulationInterface
      }]
      break
    case '35':
    case '36':
      let channelTDOne = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
      let channelSortTDOne = 3920 + (parseInt(channelTDOne.one) - 1) * 2
      let channelSortTDTWO = 3921 + (parseInt(channelTDOne.one) - 1) * 2
      messages = [{
        [channelSortTDOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
        [channelSortTDTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
      }]
      break
    case '37':
      let channelTDInfoTwo = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
      let channelSortOne = 3920 + (parseInt(channelTDInfoTwo.one) - 1) * 2
      let channelSortTWO = 3921 + (parseInt(channelTDInfoTwo.one) - 1) * 2
      messages = [{
        [channelSortOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
        [channelSortTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
      }]
      break
    case '38':
      let channelTDInfoThree = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
      let channelSortThreeOne = 3920 + (parseInt(channelTDInfoThree.one) - 1) * 2
      let channelSortThreeTWO = 3921 + (parseInt(channelTDInfoThree.one) - 1) * 2
      messages = [{
        [channelSortThreeOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
        [channelSortThreeTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
      }]
      break
    case '39':
      let electricityWhetherTD = dataValue.substring(0, 2)
      let hwvTD = dataValue.substring(2, 6)
      let bdvTD = dataValue.substring(6, 10)
      let sensorAcquisitionIntervalTD = dataValue.substring(10, 14)
      let gpsAcquisitionIntervalTD = dataValue.substring(14, 18)
      messages = [{
        'Battery(%)': loraWANV2DataFormat(electricityWhetherTD),
        'Hardware Version': `${loraWANV2DataFormat(hwvTD.substring(0, 2))}.${loraWANV2DataFormat(hwvTD.substring(2, 4))}`,
        'Firmware Version': `${loraWANV2DataFormat(bdvTD.substring(0, 2))}.${loraWANV2DataFormat(bdvTD.substring(2, 4))}`,
        'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionIntervalTD)) * 60,
        'thresholdMeasureInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionIntervalTD))
      }]
      break
    case '40':
    case '41':
      let lightIntensity = dataValue.substring(0, 4)
      let loudness = dataValue.substring(4, 8)
      // X
      let accelerateX = dataValue.substring(8, 12)
      // Y
      let accelerateY = dataValue.substring(12, 16)
      // Z
      let accelerateZ = dataValue.substring(16, 20)
      messages = [{
        measurementValue: loraWANV2DataFormat(lightIntensity), measurementId: '4193', type: 'Light Intensity'
      }, {
        measurementValue: loraWANV2DataFormat(loudness), measurementId: '4192', type: 'Sound Intensity'
      }, {

        measurementValue: loraWANV2DataFormat(accelerateX, 100), measurementId: '4150', type: 'AccelerometerX'
      }, {

        measurementValue: loraWANV2DataFormat(accelerateY, 100), measurementId: '4151', type: 'AccelerometerY'
      }, {

        measurementValue: loraWANV2DataFormat(accelerateZ, 100), measurementId: '4152', type: 'AccelerometerZ'
      }]
      break
    case '42':
      let airTemperature = dataValue.substring(0, 4)
      let AirHumidity = dataValue.substring(4, 8)
      let tVOC = dataValue.substring(8, 12)
      let CO2eq = dataValue.substring(12, 16)
      let soilMoisture = dataValue.substring(16, 20)
      messages = [{
        measurementValue: loraWANV2DataFormat(airTemperature, 100), measurementId: '4097', type: 'Air Temperature'
      }, {
        measurementValue: loraWANV2DataFormat(AirHumidity, 100), measurementId: '4098', type: 'Air Humidity'
      }, {
        measurementValue: loraWANV2DataFormat(tVOC), measurementId: '4195', type: 'Total Volatile Organic Compounds'
      }, {
        measurementValue: loraWANV2DataFormat(CO2eq), measurementId: '4100', type: 'CO2'
      }, {
        measurementValue: loraWANV2DataFormat(soilMoisture), measurementId: '4196', type: 'Soil moisture intensity'
      }]
      break
    case '43':
    case '44':
      let headerDevKitValueArray = []
      let initDevkitmeasurementId = 4175
      for (let i = 0; i < dataValue.length; i += 4) {
        let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
        let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
        let aiHeadValues = `${modelId}.${detectionType}`
        headerDevKitValueArray.push({
          measurementValue: aiHeadValues, measurementId: initDevkitmeasurementId, type: `AI Detection ${i}`
        })
        initDevkitmeasurementId++
      }
      messages = headerDevKitValueArray
      break
    case '45':
      let initTailDevKitmeasurementId = 4180
      for (let i = 0; i < dataValue.length; i += 4) {
        let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
        let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
        let aiTailValues = `${modelId}.${detectionType}`
        messages.push({
          measurementValue: aiTailValues, measurementId: initTailDevKitmeasurementId, type: `AI Detection ${i}`
        })
        initTailDevKitmeasurementId++
      }
      break
    default:
      break
  }
  return messages
}

/**
 *
 * data formatting
 * @param str
 * @param divisor
 * @returns {string|number}
 */
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

/**
 * Handling big-endian data formats
 * @param data
 * @returns {*[]}
 */
function bigEndianTransform (data) {
  let dataArray = []
  for (let i = 0; i < data.length; i += 2) {
    dataArray.push(data.substring(i, i + 2))
  }
  // array of hex
  return dataArray
}

/**
 * Convert to an 8-digit binary number with 0s in front of the number
 * @param arr
 * @returns {string}
 */
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
  let ret = binaryData.toString()
    .replace(/,/g, '')
  return ret
}

/**
 * sensor
 * @param str
 * @returns {{channel: number, type: number, status: number}}
 */
function loraWANV2BitDataFormat (str) {
  let strReverse = bigEndianTransform(str)
  let str2 = toBinary(strReverse)
  let channel = parseInt(str2.substring(0, 4), 2)
  let status = parseInt(str2.substring(4, 5), 2)
  let type = parseInt(str2.substring(5), 2)
  return { channel, status, type }
}

/**
 * channel info
 * @param str
 * @returns {{channelTwo: number, channelOne: number}}
 */
function loraWANV2ChannelBitFormat (str) {
  let strReverse = bigEndianTransform(str)
  let str2 = toBinary(strReverse)
  let one = parseInt(str2.substring(0, 4), 2)
  let two = parseInt(str2.substring(4, 8), 2)
  let resultInfo = {
    one: one, two: two
  }
  return resultInfo
}

/**
 * data log status bit
 * @param str
 * @returns {{total: number, level: number, isTH: number}}
 */
function loraWANV2DataLogBitFormat (str) {
  let strReverse = bigEndianTransform(str)
  let str2 = toBinary(strReverse)
  let isTH = parseInt(str2.substring(0, 1), 2)
  let total = parseInt(str2.substring(1, 5), 2)
  let left = parseInt(str2.substring(5), 2)
  let resultInfo = {
    isTH: isTH, total: total, left: left
  }
  return resultInfo
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
```

</details>

</TabItem2>
</Tabs2>

<!-- Code END -->

---

### SenseCAP S2120 8-in-1 Weather Sensor

[SenseCAP S2120 8-in-1 LoRaWAN Weather Sensor](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) measures air temperature, humidity, wind speed, wind direction, rainfall, light intensity, UV index, and barometric pressure. It enables low maintenance cost for its ultra-low power consumption, reliable performance, built-in Bluetooth, and app service for OTA configuration and remote device management. It supports multi-scenario applications like backyard, gardens, smart agriculture, meteorology, smart city, etc.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/o/font_5.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

#### Decoder

<!-- Code -->

import Tabs3 from '@theme/Tabs';
import TabItem3 from '@theme/TabItem';

<Tabs3>
<TabItem3 value="For TTN" label="For TTN">

<details>

<summary>For TTN(ChirpStack V4)</summary>

```cpp
/**
 * Entry, decoder.js
 */
function decodeUplink (input, port) {
  // data split

  var bytes = input['bytes']
  // init
  bytes = bytes2HexString(bytes)
    .toLocaleUpperCase()

  let result = {
    'err': 0, 'payload': bytes, 'valid': true, messages: []
  }
  let splitArray = dataSplit(bytes)
  // data decoder
  let decoderArray = []
  for (let i = 0; i < splitArray.length; i++) {
    let item = splitArray[i]
    let dataId = item.dataId
    let dataValue = item.dataValue
    let messages = dataIdAndDataValueJudge(dataId, dataValue)
    decoderArray.push(messages)
  }
  result.messages = decoderArray
  return { data: result }
}

/**
 * data splits
 * @param bytes
 * @returns {*[]}
 */
function dataSplit (bytes) {
  let frameArray = []

  for (let i = 0; i < bytes.length; i++) {
    let remainingValue = bytes
    let dataId = remainingValue.substring(0, 2)
    dataId = dataId.toLowerCase()
    let dataValue
    let dataObj = {}
    switch (dataId) {
      case '01' :
      case '20' :
      case '21' :
      case '30' :
      case '31' :
      case '33' :
      case '40' :
      case '41' :
      case '42' :
      case '43' :
      case '44' :
      case '45' :
      case '4a' :
        dataValue = remainingValue.substring(2, 22)
        bytes = remainingValue.substring(22)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '02':
      case '4b':
        dataValue = remainingValue.substring(2, 18)
        bytes = remainingValue.substring(18)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '03' :
      case '06':
        dataValue = remainingValue.substring(2, 4)
        bytes = remainingValue.substring(4)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '05' :
      case '34':
        dataValue = bytes.substring(2, 10)
        bytes = remainingValue.substring(10)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '04':
      case '10':
      case '32':
      case '35':
      case '36':
      case '37':
      case '38':
      case '39':
        dataValue = bytes.substring(2, 20)
        bytes = remainingValue.substring(20)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      case '4c':
        dataValue = bytes.substring(2, 14)
        bytes = remainingValue.substring(14)
        dataObj = {
          'dataId': dataId, 'dataValue': dataValue
        }
        break
      default:
        dataValue = '9'
        break
    }
    if (dataValue.length < 2) {
      break
    }
    frameArray.push(dataObj)
  }
  return frameArray
}

function dataIdAndDataValueJudge (dataId, dataValue) {
  let messages = []
  let temperature
  let humidity
  let illumination
  let uv
  let windSpeed
  let windDirection
  let rainfall
  let airPressure
  let peakWind
  let rainAccumulation
  switch (dataId) {
    case '01':
      temperature = dataValue.substring(0, 4)
      humidity = dataValue.substring(4, 6)
      illumination = dataValue.substring(6, 14)
      uv = dataValue.substring(14, 16)
      windSpeed = dataValue.substring(16, 20)
      messages = [{
        measurementValue: loraWANV2DataFormat(temperature, 10), measurementId: '4097', type: 'Air Temperature'
      }, {
        measurementValue: loraWANV2DataFormat(humidity), measurementId: '4098', type: 'Air Humidity'
      }, {
        measurementValue: loraWANV2DataFormat(illumination), measurementId: '4099', type: 'Light Intensity'
      }, {
        measurementValue: loraWANV2DataFormat(uv, 10), measurementId: '4190', type: 'UV Index'
      }, {
        measurementValue: loraWANV2DataFormat(windSpeed, 10), measurementId: '4105', type: 'Wind Speed'
      }]
      break
    case '02':
      windDirection = dataValue.substring(0, 4)
      rainfall = dataValue.substring(4, 12)
      airPressure = dataValue.substring(12, 16)
      messages = [{
        measurementValue: loraWANV2DataFormat(windDirection), measurementId: '4104', type: 'Wind Direction Sensor'
      }, {
        measurementValue: loraWANV2DataFormat(rainfall, 1000), measurementId: '4113', type: 'Rain Gauge'
      }, {

        measurementValue: loraWANV2DataFormat(airPressure, 0.1), measurementId: '4101', type: 'Barometric Pressure'
      }]
      break
    case '03':
      let Electricity = dataValue
      messages = [{
        'Battery(%)': loraWANV2DataFormat(Electricity)
      }]
      break
    case '04':
      let electricityWhether = dataValue.substring(0, 2)
      let hwv = dataValue.substring(2, 6)
      let bdv = dataValue.substring(6, 10)
      let sensorAcquisitionInterval = dataValue.substring(10, 14)
      let gpsAcquisitionInterval = dataValue.substring(14, 18)
      messages = [{
        'Battery(%)': loraWANV2DataFormat(electricityWhether),
        'Hardware Version': `${loraWANV2DataFormat(hwv.substring(0, 2))}.${loraWANV2DataFormat(hwv.substring(2, 4))}`,
        'Firmware Version': `${loraWANV2DataFormat(bdv.substring(0, 2))}.${loraWANV2DataFormat(bdv.substring(2, 4))}`,
        'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionInterval)) * 60,
        'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionInterval)) * 60
      }]
      break
    case '05':
      let sensorAcquisitionIntervalFive = dataValue.substring(0, 4)
      let gpsAcquisitionIntervalFive = dataValue.substring(4, 8)
      messages = [{
        'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionIntervalFive)) * 60,
        'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionIntervalFive)) * 60
      }]
      break
    case '06':
      let errorCode = dataValue
      let descZh
      switch (errorCode) {
        case '00':
          descZh = 'CCL_SENSOR_ERROR_NONE'
          break
        case '01':
          descZh = 'CCL_SENSOR_NOT_FOUND'
          break
        case '02':
          descZh = 'CCL_SENSOR_WAKEUP_ERROR'
          break
        case '03':
          descZh = 'CCL_SENSOR_NOT_RESPONSE'
          break
        case '04':
          descZh = 'CCL_SENSOR_DATA_EMPTY'
          break
        case '05':
          descZh = 'CCL_SENSOR_DATA_HEAD_ERROR'
          break
        case '06':
          descZh = 'CCL_SENSOR_DATA_CRC_ERROR'
          break
        case '07':
          descZh = 'CCL_SENSOR_DATA_B1_NO_VALID'
          break
        case '08':
          descZh = 'CCL_SENSOR_DATA_B2_NO_VALID'
          break
        case '09':
          descZh = 'CCL_SENSOR_RANDOM_NOT_MATCH'
          break
        case '0A':
          descZh = 'CCL_SENSOR_PUBKEY_SIGN_VERIFY_FAILED'
          break
        case '0B':
          descZh = 'CCL_SENSOR_DATA_SIGN_VERIFY_FAILED'
          break
        case '0C':
          descZh = 'CCL_SENSOR_DATA_VALUE_HI'
          break
        case '0D':
          descZh = 'CCL_SENSOR_DATA_VALUE_LOW'
          break
        case '0E':
          descZh = 'CCL_SENSOR_DATA_VALUE_MISSED'
          break
        case '0F':
          descZh = 'CCL_SENSOR_ARG_INVAILD'
          break
        case '10':
          descZh = 'CCL_SENSOR_RS485_MASTER_BUSY'
          break
        case '11':
          descZh = 'CCL_SENSOR_RS485_REV_DATA_ERROR'
          break
        case '12':
          descZh = 'CCL_SENSOR_RS485_REG_MISSED'
          break
        case '13':
          descZh = 'CCL_SENSOR_RS485_FUN_EXE_ERROR'
          break
        case '14':
          descZh = 'CCL_SENSOR_RS485_WRITE_STRATEGY_ERROR'
          break
        case '15':
          descZh = 'CCL_SENSOR_CONFIG_ERROR'
          break
        case 'FF':
          descZh = 'CCL_SENSOR_DATA_ERROR_UNKONW'
          break
        default:
          descZh = 'CC_OTHER_FAILED'
          break
      }
      messages = [{
        measurementId: '4101', type: 'sensor_error_event', errCode: errorCode, descZh
      }]
      break
    case '10':
      let statusValue = dataValue.substring(0, 2)
      let { status, type } = loraWANV2BitDataFormat(statusValue)
      let sensecapId = dataValue.substring(2)
      messages = [{
        status: status, channelType: type, sensorEui: sensecapId
      }]
      break
    case '4a':
      temperature = dataValue.substring(0, 4)
      humidity = dataValue.substring(4, 6)
      illumination = dataValue.substring(6, 14)
      uv = dataValue.substring(14, 16)
      windSpeed = dataValue.substring(16, 20)
      messages = [{
        measurementValue: loraWANV2DataFormat(temperature, 10), measurementId: '4097', type: 'Air Temperature'
      }, {
        measurementValue: loraWANV2DataFormat(humidity), measurementId: '4098', type: 'Air Humidity'
      }, {
        measurementValue: loraWANV2DataFormat(illumination), measurementId: '4099', type: 'Light Intensity'
      }, {
        measurementValue: loraWANV2DataFormat(uv, 10), measurementId: '4190', type: 'UV Index'
      }, {
        measurementValue: loraWANV2DataFormat(windSpeed, 10), measurementId: '4105', type: 'Wind Speed'
      }]
      break
    case '4b':
      windDirection = dataValue.substring(0, 4)
      rainfall = dataValue.substring(4, 12)
      airPressure = dataValue.substring(12, 16)
      messages = [{
        measurementValue: loraWANV2DataFormat(windDirection), measurementId: '4104', type: 'Wind Direction Sensor'
      }, {
        measurementValue: loraWANV2DataFormat(rainfall, 1000), measurementId: '4113', type: 'Rain Gauge'
      }, {

        measurementValue: loraWANV2DataFormat(airPressure, 0.1), measurementId: '4101', type: 'Barometric Pressure'
      }]
      break
    case '4c':
      peakWind = dataValue.substring(0, 4)
      rainAccumulation = dataValue.substring(4, 12)
      messages = [{
        measurementValue: loraWANV2DataFormat(peakWind, 10), measurementId: '4191', type: ' Peak Wind Gust'
      }, {
        measurementValue: loraWANV2DataFormat(rainAccumulation, 1000), measurementId: '4213', type: 'Rain Accumulation'
      }]
      break
    default:
      break
  }
  return messages
}

/**
 *
 * data formatting
 * @param str
 * @param divisor
 * @returns {string|number}
 */
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

/**
 * Handling big-endian data formats
 * @param data
 * @returns {*[]}
 */
function bigEndianTransform (data) {
  let dataArray = []
  for (let i = 0; i < data.length; i += 2) {
    dataArray.push(data.substring(i, i + 2))
  }
  // array of hex
  return dataArray
}

/**
 * Convert to an 8-digit binary number with 0s in front of the number
 * @param arr
 * @returns {string}
 */
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
  let ret = binaryData.toString()
    .replace(/,/g, '')
  return ret
}

/**
 * sensor
 * @param str
 * @returns {{channel: number, type: number, status: number}}
 */
function loraWANV2BitDataFormat (str) {
  let strReverse = bigEndianTransform(str)
  let str2 = toBinary(strReverse)
  let channel = parseInt(str2.substring(0, 4), 2)
  let status = parseInt(str2.substring(4, 5), 2)
  let type = parseInt(str2.substring(5), 2)
  return { channel, status, type }
}

/**
 * channel info
 * @param str
 * @returns {{channelTwo: number, channelOne: number}}
 */
function loraWANV2ChannelBitFormat (str) {
  let strReverse = bigEndianTransform(str)
  let str2 = toBinary(strReverse)
  let one = parseInt(str2.substring(0, 4), 2)
  let two = parseInt(str2.substring(4, 8), 2)
  let resultInfo = {
    one: one, two: two
  }
  return resultInfo
}

/**
 * data log status bit
 * @param str
 * @returns {{total: number, level: number, isTH: number}}
 */
function loraWANV2DataLogBitFormat (str) {
  let strReverse = bigEndianTransform(str)
  let str2 = toBinary(strReverse)
  let isTH = parseInt(str2.substring(0, 1), 2)
  let total = parseInt(str2.substring(1, 5), 2)
  let left = parseInt(str2.substring(5), 2)
  let resultInfo = {
    isTH: isTH, total: total, left: left
  }
  return resultInfo
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
```

</details>

</TabItem3>
<TabItem3 value="For Helium" label="For Helium">

<details>

<summary>For Helium</summary>

```cpp
/**
 * Entry, decoder.js
 */
function Decoder (bytes, port) {
    // data split
  
    bytes = bytes2HexString(bytes)
      .toLocaleUpperCase()
  
    let result = {
      'err': 0, 'payload': bytes, 'valid': true, messages: []
    }
    let splitArray = dataSplit(bytes)
    // data decoder
    let decoderArray = []
    for (let i = 0; i < splitArray.length; i++) {
      let item = splitArray[i]
      let dataId = item.dataId
      let dataValue = item.dataValue
      let messages = dataIdAndDataValueJudge(dataId, dataValue)
      decoderArray.push(messages)
    }
    result.messages = decoderArray
    return { data: result }
  }
  
  /**
   * data splits
   * @param bytes
   * @returns {*[]}
   */
  function dataSplit (bytes) {
    let frameArray = []
  
    for (let i = 0; i < bytes.length; i++) {
      let remainingValue = bytes
      let dataId = remainingValue.substring(0, 2)
      let dataValue
      let dataObj = {}
      switch (dataId) {
        case '01' :
        case '20' :
        case '21' :
        case '30' :
        case '31' :
        case '33' :
        case '40' :
        case '41' :
        case '42' :
        case '43' :
        case '44' :
        case '45' :
          dataValue = remainingValue.substring(2, 22)
          bytes = remainingValue.substring(22)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        case '02':
          dataValue = remainingValue.substring(2, 18)
          bytes = remainingValue.substring(18)
          dataObj = {
            'dataId': '02', 'dataValue': dataValue
          }
          break
        case '03' :
        case '06':
          dataValue = remainingValue.substring(2, 4)
          bytes = remainingValue.substring(4)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        case '05' :
        case '34':
          dataValue = bytes.substring(2, 10)
          bytes = remainingValue.substring(10)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        case '04':
        case '10':
        case '32':
        case '35':
        case '36':
        case '37':
        case '38':
        case '39':
          dataValue = bytes.substring(2, 20)
          bytes = remainingValue.substring(20)
          dataObj = {
            'dataId': dataId, 'dataValue': dataValue
          }
          break
        default:
          dataValue = '9'
          break
      }
      if (dataValue.length < 2) {
        break
      }
      frameArray.push(dataObj)
    }
    return frameArray
  }
  
  function dataIdAndDataValueJudge (dataId, dataValue) {
    let messages = []
    switch (dataId) {
      case '01':
        let temperature = dataValue.substring(0, 4)
        let humidity = dataValue.substring(4, 6)
        let illumination = dataValue.substring(6, 14)
        let uv = dataValue.substring(14, 16)
        let windSpeed = dataValue.substring(16, 20)
        messages = [{
          measurementValue: loraWANV2DataFormat(temperature, 10), measurementId: '4097', type: 'Air Temperature'
        }, {
          measurementValue: loraWANV2DataFormat(humidity), measurementId: '4098', type: 'Air Humidity'
        }, {
          measurementValue: loraWANV2DataFormat(illumination), measurementId: '4099', type: 'Light Intensity'
        }, {
          measurementValue: loraWANV2DataFormat(uv, 10), measurementId: '4190', type: 'UV Index'
        }, {
          measurementValue: loraWANV2DataFormat(windSpeed, 10), measurementId: '4105', type: 'Wind Speed'
        }]
        break
      case '02':
        let windDirection = dataValue.substring(0, 4)
        let rainfall = dataValue.substring(4, 12)
        let airPressure = dataValue.substring(12, 16)
        messages = [{
          measurementValue: loraWANV2DataFormat(windDirection), measurementId: '4104', type: 'Wind Direction Sensor'
        }, {
          measurementValue: loraWANV2DataFormat(rainfall, 1000), measurementId: '4113', type: 'Rain Gauge'
        }, {
  
          measurementValue: loraWANV2DataFormat(airPressure, 0.1), measurementId: '4101', type: 'Barometric Pressure'
        }]
        break
      case '03':
        let Electricity = dataValue
        messages = [{
          'Battery(%)': loraWANV2DataFormat(Electricity)
        }]
        break
      case '04':
        let electricityWhether = dataValue.substring(0, 2)
        let hwv = dataValue.substring(2, 6)
        let bdv = dataValue.substring(6, 10)
        let sensorAcquisitionInterval = dataValue.substring(10, 14)
        let gpsAcquisitionInterval = dataValue.substring(14, 18)
        messages = [{
          'Battery(%)': loraWANV2DataFormat(electricityWhether),
          'Hardware Version': `${loraWANV2DataFormat(hwv.substring(0, 2))}.${loraWANV2DataFormat(hwv.substring(2, 4))}`,
          'Firmware Version': `${loraWANV2DataFormat(bdv.substring(0, 2))}.${loraWANV2DataFormat(bdv.substring(2, 4))}`,
          'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionInterval)) * 60,
          'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionInterval)) * 60
        }]
        break
      case '05':
        let sensorAcquisitionIntervalFive = dataValue.substring(0, 4)
        let gpsAcquisitionIntervalFive = dataValue.substring(4, 8)
        messages = [{
          'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionIntervalFive)) * 60,
          'gpsInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionIntervalFive)) * 60
        }]
        break
      case '06':
        let errorCode = dataValue
        let descZh
        switch (errorCode) {
          case '00':
            descZh = 'CCL_SENSOR_ERROR_NONE'
            break
          case '01':
            descZh = 'CCL_SENSOR_NOT_FOUND'
            break
          case '02':
            descZh = 'CCL_SENSOR_WAKEUP_ERROR'
            break
          case '03':
            descZh = 'CCL_SENSOR_NOT_RESPONSE'
            break
          case '04':
            descZh = 'CCL_SENSOR_DATA_EMPTY'
            break
          case '05':
            descZh = 'CCL_SENSOR_DATA_HEAD_ERROR'
            break
          case '06':
            descZh = 'CCL_SENSOR_DATA_CRC_ERROR'
            break
          case '07':
            descZh = 'CCL_SENSOR_DATA_B1_NO_VALID'
            break
          case '08':
            descZh = 'CCL_SENSOR_DATA_B2_NO_VALID'
            break
          case '09':
            descZh = 'CCL_SENSOR_RANDOM_NOT_MATCH'
            break
          case '0A':
            descZh = 'CCL_SENSOR_PUBKEY_SIGN_VERIFY_FAILED'
            break
          case '0B':
            descZh = 'CCL_SENSOR_DATA_SIGN_VERIFY_FAILED'
            break
          case '0C':
            descZh = 'CCL_SENSOR_DATA_VALUE_HI'
            break
          case '0D':
            descZh = 'CCL_SENSOR_DATA_VALUE_LOW'
            break
          case '0E':
            descZh = 'CCL_SENSOR_DATA_VALUE_MISSED'
            break
          case '0F':
            descZh = 'CCL_SENSOR_ARG_INVAILD'
            break
          case '10':
            descZh = 'CCL_SENSOR_RS485_MASTER_BUSY'
            break
          case '11':
            descZh = 'CCL_SENSOR_RS485_REV_DATA_ERROR'
            break
          case '12':
            descZh = 'CCL_SENSOR_RS485_REG_MISSED'
            break
          case '13':
            descZh = 'CCL_SENSOR_RS485_FUN_EXE_ERROR'
            break
          case '14':
            descZh = 'CCL_SENSOR_RS485_WRITE_STRATEGY_ERROR'
            break
          case '15':
            descZh = 'CCL_SENSOR_CONFIG_ERROR'
            break
          case 'FF':
            descZh = 'CCL_SENSOR_DATA_ERROR_UNKONW'
            break
          default:
            descZh = 'CC_OTHER_FAILED'
            break
        }
        messages = [{
          measurementId: '4101', type: 'sensor_error_event', errCode: errorCode, descZh
        }]
        break
      case '10':
        let statusValue = dataValue.substring(0, 2)
        let { status, type } = loraWANV2BitDataFormat(statusValue)
        let sensecapId = dataValue.substring(2)
        messages = [{
          status: status, channelType: type, sensorEui: sensecapId
        }]
        break
      case '20':
        let initmeasurementId = 4175
        let sensor = []
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiHeadValues = `${modelId}.${detectionType}`
          sensor.push({
            measurementValue: aiHeadValues, measurementId: initmeasurementId
          })
          initmeasurementId++
        }
        messages = sensor
        break
      case '21':
        // Vision AI:
        // AI 识别输出帧
        let tailValueArray = []
        let initTailmeasurementId = 4180
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiTailValues = `${modelId}.${detectionType}`
          tailValueArray.push({
            measurementValue: aiTailValues, measurementId: initTailmeasurementId, type: `AI Detection ${i}`
          })
          initTailmeasurementId++
        }
        messages = tailValueArray
        break
      case '30':
      case '31':
        // 首帧或者首帧输出帧
        let channelInfoOne = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let dataOne = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(4, 12), 1000),
          measurementId: parseInt(channelInfoOne.one),
          type: 'Measurement'
        }
        let dataTwo = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(12, 20), 1000),
          measurementId: parseInt(channelInfoOne.two),
          type: 'Measurement'
        }
        let cacheArrayInfo = []
        if (parseInt(channelInfoOne.one)) {
          cacheArrayInfo.push(dataOne)
        }
        if (parseInt(channelInfoOne.two)) {
          cacheArrayInfo.push(dataTwo)
        }
        cacheArrayInfo.forEach(item => {
          messages.push(item)
        })
        break
      case '32':
        let channelInfoTwo = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let dataThree = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          measurementId: parseInt(channelInfoTwo.one),
          type: 'Measurement'
        }
        let dataFour = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(10, 18), 1000),
          measurementId: parseInt(channelInfoTwo.two),
          type: 'Measurement'
        }
        if (parseInt(channelInfoTwo.one)) {
          messages.push(dataThree)
        }
        if (parseInt(channelInfoTwo.two)) {
          messages.push(dataFour)
        }
        break
      case '33':
        let channelInfoThree = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let dataFive = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(4, 12), 1000),
          measurementId: parseInt(channelInfoThree.one),
          type: 'Measurement'
        }
        let dataSix = {
          measurementValue: loraWANV2DataFormat(dataValue.substring(12, 20), 1000),
          measurementId: parseInt(channelInfoThree.two),
          type: 'Measurement'
        }
        if (parseInt(channelInfoThree.one)) {
          messages.push(dataFive)
        }
        if (parseInt(channelInfoThree.two)) {
          messages.push(dataSix)
        }
  
        break
      case '34':
        let model = loraWANV2DataFormat(dataValue.substring(0, 2))
        let GPIOInput = loraWANV2DataFormat(dataValue.substring(2, 4))
        let simulationModel = loraWANV2DataFormat(dataValue.substring(4, 6))
        let simulationInterface = loraWANV2DataFormat(dataValue.substring(6, 8))
        messages = [{
           'dataloggerProtocol': model, 'dataloggerGPIOInput': GPIOInput, 'dataloggerAnalogType': simulationModel, 'dataloggerAnalogInterface': simulationInterface
        }]
        break
      case '35':
      case '36':
        let channelTDOne = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let channelSortTDOne = 3920 + (parseInt(channelTDOne.one) - 1) * 2
        let channelSortTDTWO = 3921 + (parseInt(channelTDOne.one) - 1) * 2
        messages = [{
          [channelSortTDOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          [channelSortTDTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
        }]
        break
      case '37':
        let channelTDInfoTwo = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let channelSortOne = 3920 + (parseInt(channelTDInfoTwo.one) - 1) * 2
        let channelSortTWO = 3921 + (parseInt(channelTDInfoTwo.one) - 1) * 2
        messages = [{
          [channelSortOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          [channelSortTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
        }]
        break
      case '38':
        let channelTDInfoThree = loraWANV2ChannelBitFormat(dataValue.substring(0, 2))
        let channelSortThreeOne = 3920 + (parseInt(channelTDInfoThree.one) - 1) * 2
        let channelSortThreeTWO = 3921 + (parseInt(channelTDInfoThree.one) - 1) * 2
        messages = [{
          [channelSortThreeOne]: loraWANV2DataFormat(dataValue.substring(2, 10), 1000),
          [channelSortThreeTWO]: loraWANV2DataFormat(dataValue.substring(10, 18), 1000)
        }]
        break
      case '39':
        let electricityWhetherTD = dataValue.substring(0, 2)
        let hwvTD = dataValue.substring(2, 6)
        let bdvTD = dataValue.substring(6, 10)
        let sensorAcquisitionIntervalTD = dataValue.substring(10, 14)
        let gpsAcquisitionIntervalTD = dataValue.substring(14, 18)
        messages = [{
          'Battery(%)': loraWANV2DataFormat(electricityWhetherTD),
          'Hardware Version': `${loraWANV2DataFormat(hwvTD.substring(0, 2))}.${loraWANV2DataFormat(hwvTD.substring(2, 4))}`,
          'Firmware Version': `${loraWANV2DataFormat(bdvTD.substring(0, 2))}.${loraWANV2DataFormat(bdvTD.substring(2, 4))}`,
          'measureInterval': parseInt(loraWANV2DataFormat(sensorAcquisitionIntervalTD)) * 60,
          'thresholdMeasureInterval': parseInt(loraWANV2DataFormat(gpsAcquisitionIntervalTD))
        }]
        break
      case '40':
      case '41':
        let lightIntensity = dataValue.substring(0, 4)
        let loudness = dataValue.substring(4, 8)
        // X
        let accelerateX = dataValue.substring(8, 12)
        // Y
        let accelerateY = dataValue.substring(12, 16)
        // Z
        let accelerateZ = dataValue.substring(16, 20)
        messages = [{
          measurementValue: loraWANV2DataFormat(lightIntensity), measurementId: '4193', type: 'Light Intensity'
        }, {
          measurementValue: loraWANV2DataFormat(loudness), measurementId: '4192', type: 'Sound Intensity'
        }, {
  
          measurementValue: loraWANV2DataFormat(accelerateX, 100), measurementId: '4150', type: 'AccelerometerX'
        }, {
  
          measurementValue: loraWANV2DataFormat(accelerateY, 100), measurementId: '4151', type: 'AccelerometerY'
        }, {
  
          measurementValue: loraWANV2DataFormat(accelerateZ, 100), measurementId: '4152', type: 'AccelerometerZ'
        }]
        break
      case '42':
        let airTemperature = dataValue.substring(0, 4)
        let AirHumidity = dataValue.substring(4, 8)
        let tVOC = dataValue.substring(8, 12)
        let CO2eq = dataValue.substring(12, 16)
        let soilMoisture = dataValue.substring(16, 20)
        messages = [{
          measurementValue: loraWANV2DataFormat(airTemperature, 100), measurementId: '4097', type: 'Air Temperature'
        }, {
          measurementValue: loraWANV2DataFormat(AirHumidity, 100), measurementId: '4098', type: 'Air Humidity'
        }, {
          measurementValue: loraWANV2DataFormat(tVOC), measurementId: '4195', type: 'Total Volatile Organic Compounds'
        }, {
          measurementValue: loraWANV2DataFormat(CO2eq), measurementId: '4100', type: 'CO2'
        }, {
          measurementValue: loraWANV2DataFormat(soilMoisture), measurementId: '4196', type: 'Soil moisture intensity'
        }]
        break
      case '43':
      case '44':
        let headerDevKitValueArray = []
        let initDevkitmeasurementId = 4175
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiHeadValues = `${modelId}.${detectionType}`
          headerDevKitValueArray.push({
            measurementValue: aiHeadValues, measurementId: initDevkitmeasurementId, type: `AI Detection ${i}`
          })
          initDevkitmeasurementId++
        }
        messages = headerDevKitValueArray
        break
      case '45':
        let initTailDevKitmeasurementId = 4180
        for (let i = 0; i < dataValue.length; i += 4) {
          let modelId = loraWANV2DataFormat(dataValue.substring(i, i + 2))
          let detectionType = loraWANV2DataFormat(dataValue.substring(i + 2, i + 4))
          let aiTailValues = `${modelId}.${detectionType}`
          messages.push({
            measurementValue: aiTailValues, measurementId: initTailDevKitmeasurementId, type: `AI Detection ${i}`
          })
          initTailDevKitmeasurementId++
        }
        break
      default:
        break
    }
    return messages
  }
  
  /**
   *
   * data formatting
   * @param str
   * @param divisor
   * @returns {string|number}
   */
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
  
  /**
   * Handling big-endian data formats
   * @param data
   * @returns {*[]}
   */
  function bigEndianTransform (data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
      dataArray.push(data.substring(i, i + 2))
    }
    // array of hex
    return dataArray
  }
  
  /**
   * Convert to an 8-digit binary number with 0s in front of the number
   * @param arr
   * @returns {string}
   */
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
    let ret = binaryData.toString()
      .replace(/,/g, '')
    return ret
  }
  
  /**
   * sensor
   * @param str
   * @returns {{channel: number, type: number, status: number}}
   */
  function loraWANV2BitDataFormat (str) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    let channel = parseInt(str2.substring(0, 4), 2)
    let status = parseInt(str2.substring(4, 5), 2)
    let type = parseInt(str2.substring(5), 2)
    return { channel, status, type }
  }
  
  /**
   * channel info
   * @param str
   * @returns {{channelTwo: number, channelOne: number}}
   */
  function loraWANV2ChannelBitFormat (str) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    let one = parseInt(str2.substring(0, 4), 2)
    let two = parseInt(str2.substring(4, 8), 2)
    let resultInfo = {
      one: one, two: two
    }
    return resultInfo
  }
  
  /**
   * data log status bit
   * @param str
   * @returns {{total: number, level: number, isTH: number}}
   */
  function loraWANV2DataLogBitFormat (str) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    let isTH = parseInt(str2.substring(0, 1), 2)
    let total = parseInt(str2.substring(1, 5), 2)
    let left = parseInt(str2.substring(5), 2)
    let resultInfo = {
      isTH: isTH, total: total, left: left
    }
    return resultInfo
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
```

  </details>

</TabItem3>
</Tabs3>

<!-- Code END -->

---

### SenseCAP A1101 - LoRaWAN Vision AI Sensor

[SenseCAP A1101 - LoRaWAN Vision AI Sensor](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) is a TinyML Edge AI enabled smart image sensor. It supports a variety of AI models such as image recognition, people counting, target detection, meter recoignition etc. It also supports training models with TensorFlow Lite.

<div align="center"><img width ={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

#### Decoder

<!-- Code -->

import Tabs4 from '@theme/Tabs';
import TabItem4 from '@theme/TabItem';

<Tabs4>
<TabItem4 value="For TTN" label="For TTN">

<details>

<summary>For TTN(ChirpStack V4)</summary>

```cpp
/**
 * SenseCAP & TTN (new v3) Converter
 *
 * @since 3.0
 * @return Object
 *      @param  Boolean     valid       Indicates whether the payload is a valid payload.
 *      @param  String      err         The reason for the payload to be invalid. 0 means valid, minus means invalid.
 *      @param  String      payload     Hexadecimal string, to show the payload.
 *      @param  Array       messages    One or more messages are parsed according to payload.
 *                              type // Enum:
 *                                   //   - "report_telemetry"
 *                                   //   - "upload_battery"
 *                                   //   - "upload_interval"
 *                                   //   - "upload_version"
 *                                   //   - "upload_sensor_id"
 *                                   //   - "report_remove_sensor"
 *                                   //   - "unknown_message"
 *
 *
 *
 *
 *  @sample-1
 *      var sample = Decoder(["00", "00", "00", "01", "01", "00", "01", "00", "07", "00", "64", "00", "3C", "00", "01", "20", "01", "00", "00", "00", "00", "28", "90"], null);
 *      {
 *        valid: true,
 *        err: 0,
 *        payload: '0000000101000100070064003C00012001000000002890',
 *        messages: [
 *           { type: 'upload_version',
 *             hardwareVersion: '1.0',
 *             softwareVersion: '1.1' },
 *           { type: 'upload_battery', battery: 100 },
 *           { type: 'upload_interval', interval: 3600 },
 *           { type: 'report_remove_sensor', channel: 1 }
 *        ]
 *      }
 * @sample-2
 *      var sample = Decoder(["01", "01", "10", "98", "53", "00", "00", "01", "02", "10", "A8", "7A", "00", "00", "AF", "51"], null);
 *      {
 *        valid: true,
 *        err: 0,
 *        payload: '01011098530000010210A87A0000AF51',
 *        messages: [
 *           { type: 'report_telemetry',
 *             measurementId: 4097,
 *             measurementValue: 21.4 },
 *           { type: 'report_telemetry',
 *             measurementId: 4098,
 *             measurementValue: 31.4 }
 *        ]
 *      }
 * @sample-3
 *      var sample = Decoder(["01", "01", "00", "01", "01", "00", "01", "01", "02", "00", "6A", "01", "00", "15", "01", "03", "00", "30", "F1", "F7", "2C", "01", "04", "00", "09", "0C", "13", "14", "01", "05", "00", "7F", "4D", "00", "00", "01", "06", "00", "00", "00", "00", "00", "4C", "BE"], null);
 *      {
 *        valid: true,
 *        err: 0,
 *        payload: '010100010100010102006A01001501030030F1F72C010400090C13140105007F4D0000010600000000004CBE',
 *        messages: [
 *            { type: 'upload_sensor_id', sensorId: '30F1F72C6A010015', channel: 1 }
 *        ]
 *      }
 */

/**
 * Entry, decoder.js
 */
function decodeUplink (input) {
    var bytes = input['bytes'];
    // // init
    var bytesString = bytes2HexString(bytes)
        .toLocaleUpperCase();
    // var bytesString = input
    var decoded = {
      // valid
      valid: true, err: 0, // bytes
      payload: bytesString, // messages array
      messages: []
    }
  
    // CRC check
    if (!crc16Check(bytesString)) {
      decoded['valid'] = false
      decoded['err'] = -1 // "crc check fail."
      return { data: decoded }
    }
  
    // Length Check
    if ((((bytesString.length / 2) - 2) % 7) !== 0) {
      decoded['valid'] = false
      decoded['err'] = -2 // "length check fail."
      return { data: decoded }
    }
  
    // Cache sensor id
    var sensorEuiLowBytes
    var sensorEuiHighBytes
  
    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString)
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
      var frame = frameArray[forFrame]
      // Extract key parameters
      var channel = strTo10SysNub(frame.substring(0, 2))
      var dataID = strTo10SysNub(frame.substring(2, 6))
      var dataValue = frame.substring(6, 14)
      var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue)
  
      if (checkDataIdIsMeasureUpload(dataID)) {
        // if telemetry.
        decoded.messages.push({
          type: 'report_telemetry', measurementId: dataID, measurementValue: realDataValue
        })
      } else if (isSpecialDataId(dataID) || (dataID === 5) || (dataID === 6)) {
        // if special order, except "report_sensor_id".
        switch (dataID) {
          case 0x00:
            // node version
            var versionData = sensorAttrForVersion(realDataValue)
            decoded.messages.push({
              type: 'upload_version', hardwareVersion: versionData.ver_hardware, softwareVersion: versionData.ver_software
            })
            break
          case 1:
            // sensor version
            break
          case 2:
            // sensor eui, low bytes
            sensorEuiLowBytes = realDataValue
            break
          case 3:
            // sensor eui, high bytes
            sensorEuiHighBytes = realDataValue
            break
          case 7:
            // battery power && interval
            decoded.messages.push({
              type: 'upload_battery', battery: realDataValue.power
            }, {
              type: 'upload_interval', interval: parseInt(realDataValue.interval) * 60
            })
            break
          case 9:
            decoded.messages.push({
              type: 'model_info',
              detectionType: realDataValue.detectionType,
              modelId: realDataValue.modelId,
              modelVer: realDataValue.modelVer
            })
            break
          case 0x120:
            // remove sensor
            decoded.messages.push({
              type: 'report_remove_sensor', channel: 1
            })
            break
          default:
            break
        }
      } else {
        decoded.messages.push({
          type: 'unknown_message', dataID: dataID, dataValue: dataValue
        })
      }
  
    }
  
    // if the complete id received, as "upload_sensor_id"
    if (sensorEuiHighBytes && sensorEuiLowBytes) {
      decoded.messages.unshift({
        type: 'upload_sensor_id', channel: 1, sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
      })
    }
    // return
    return { data: decoded }
  }
  
  function crc16Check (data) {
    return true
  }
  
  // util
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
  
  // util
  function divideBy7Bytes (str) {
    var frameArray = []
    for (var i = 0; i < str.length - 4; i += 14) {
      var data = str.substring(i, i + 14)
      frameArray.push(data)
    }
    return frameArray
  }
  
  // util
  function littleEndianTransform (data) {
    var dataArray = []
    for (var i = 0; i < data.length; i += 2) {
      dataArray.push(data.substring(i, i + 2))
    }
    dataArray.reverse()
    return dataArray
  }
  
  // util
  function strTo10SysNub (str) {
    var arr = littleEndianTransform(str)
    return parseInt(arr.toString()
      .replace(/,/g, ''), 16)
  }
  
  // util
  function checkDataIdIsMeasureUpload (dataId) {
    return parseInt(dataId) > 4096
  }
  
  // configurable.
  function isSpecialDataId (dataID) {
    switch (dataID) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 7:
      case 9:
      case 0x120:
        return true
      default:
        return false
    }
  }
  
  // configurable
  function ttnDataSpecialFormat (dataId, str) {
    var strReverse = littleEndianTransform(str)
    if (dataId === 2 || dataId === 3) {
      return strReverse.join('')
    }
  
    // handle unsigned number
    var str2 = toBinary(strReverse)
    var dataArray = []
    switch (dataId) {
      case 0: // DATA_BOARD_VERSION
      case 1: // DATA_SENSOR_VERSION
        // Using point segmentation
        for (var k = 0; k < str2.length; k += 16) {
          var tmp146 = str2.substring(k, k + 16)
          tmp146 = (parseInt(tmp146.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp146.substring(8, 16), 2) || 0)
          dataArray.push(tmp146)
        }
        return dataArray.join(',')
      case 4:
        for (var i = 0; i < str2.length; i += 8) {
          var item = parseInt(str2.substring(i, i + 8), 2)
          if (item < 10) {
            item = '0' + item.toString()
          } else {
            item = item.toString()
          }
          dataArray.push(item)
        }
        return dataArray.join('')
      case 7:
        // battery && interval
        return {
          interval: parseInt(str2.substr(0, 16), 2), power: parseInt(str2.substr(-16, 16), 2)
        }
      case 9:
        let dataValue = {
          detectionType: parseInt(str2.substring(0, 8), 2),
          modelId: parseInt(str2.substring(8, 16), 2),
          modelVer: parseInt(str2.substring(16, 24), 2)
        }
        // 01010000
        return dataValue
    }
  }
  
  // util
  function ttnDataFormat (str) {
    var strReverse = littleEndianTransform(str)
    var str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
      var arr = str2.split('')
      var reverseArr = []
      for (var forArr = 0; forArr < arr.length; forArr++) {
        var item = arr[forArr]
        if (parseInt(item) === 1) {
          reverseArr.push(0)
        } else {
          reverseArr.push(1)
        }
      }
      str2 = parseInt(reverseArr.join(''), 2) + 1
      return parseFloat('-' + str2 / 1000)
    }
    return parseInt(str2, 2) / 1000
  }
  
  // util
  function sensorAttrForVersion (dataValue) {
    var dataValueSplitArray = dataValue.split(',')
    return {
      ver_hardware: dataValueSplitArray[0], ver_software: dataValueSplitArray[1]
    }
  }
  
  // util
  function toBinary (arr) {
    var binaryData = []
    for (var forArr = 0; forArr < arr.length; forArr++) {
      var item = arr[forArr]
      var data = parseInt(item, 16)
        .toString(2)
      var dataLength = data.length
      if (data.length !== 8) {
        for (var i = 0; i < 8 - dataLength; i++) {
          data = '0' + data
        }
      }
      binaryData.push(data)
    }
    return binaryData.toString()
      .replace(/,/g, '')
  }
  
  // Samples
  // var sample = Decoder(["00", "00", "00", "01", "01", "00", "01", "00", "07", "00", "64", "00", "3C", "00", "01", "20", "01", "00", "00", "00", "00", "28", "90"], null);
  // var sample = Decoder(["01", "01", "10", "98", "53", "00", "00", "01", "02", "10", "A8", "7A", "00", "00", "AF", "51"], null);
  // var sample = Decoder(["01", "01", "00", "01", "01", "00", "01", "01", "02", "00", "6A", "01", "00", "15", "01", "03", "00", "30", "F1", "F7", "2C", "01", "04", "00", "09", "0C", "13", "14", "01", "05", "00", "7F", "4D", "00", "00", "01", "06", "00", "00", "00", "00", "00", "4C", "BE"], null);
  // console.log(sample);
```

</details>

</TabItem4>
<TabItem4 value="For Helium" label="For Helium">

<details>

<summary>For Helium</summary>

```cpp
/**
 * Entry, decoder.js
 */
function Decoder (bytes, port) {
    // init
    var bytesString = bytes2HexString(bytes)
      .toLocaleUpperCase()
    // var bytesString = bytes
    var decoded = {
        // valid
        valid: true, err: 0, // bytes
        payload: bytesString, // messages array
        messages: []
    }

    // CRC check
    if (!crc16Check(bytesString)) {
        decoded['valid'] = false
        decoded['err'] = -1 // "crc check fail."
        return decoded
    }

    // Length Check
    if ((((bytesString.length / 2) - 2) % 7) !== 0) {
        decoded['valid'] = false
        decoded['err'] = -2 // "length check fail."
        return decoded
    }

    // Cache sensor id
    var sensorEuiLowBytes
    var sensorEuiHighBytes

    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString)
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
        var frame = frameArray[forFrame]
        // Extract key parameters
        var channel = strTo10SysNub(frame.substring(0, 2))
        var dataID = strTo10SysNub(frame.substring(2, 6))
        var dataValue = frame.substring(6, 14)
        var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue)

        if (checkDataIdIsMeasureUpload(dataID)) {
            // if telemetry.
            decoded.messages.push({
                type: 'report_telemetry', measurementId: dataID, measurementValue: realDataValue
            })
        } else if (isSpecialDataId(dataID) || (dataID === 5) || (dataID === 6) || (dataID === 9)) {
            // if special order, except "report_sensor_id".
            switch (dataID) {
                case 0x00:
                    // node version
                    var versionData = sensorAttrForVersion(realDataValue)
                    decoded.messages.push({
                        type: 'upload_version', hardwareVersion: versionData.ver_hardware, softwareVersion: versionData.ver_software
                    })
                    break
                case 1:
                    // sensor version
                    break
                case 2:
                    // sensor eui, low bytes
                    sensorEuiLowBytes = realDataValue
                    break
                case 3:
                    // sensor eui, high bytes
                    sensorEuiHighBytes = realDataValue
                    break
                case 7:
                    // battery power && interval
                    decoded.messages.push({
                        type: 'upload_battery', battery: realDataValue.power
                    }, {
                        type: 'upload_interval', interval: parseInt(realDataValue.interval) * 60
                    })
                    break
                case 9:
                    decoded.messages.push({
                        type: 'model_info',
                        detectionType: realDataValue.detectionType,
                        modelId: realDataValue.modelId,
                        modelVer: realDataValue.modelVer
                    })
                    break
                case 0x120:
                    // remove sensor
                    decoded.messages.push({
                        type: 'report_remove_sensor', channel: 1
                    })
                    break
                default:
                    break
            }
        } else {
            decoded.messages.push({
                type: 'unknown_message', dataID: dataID, dataValue: dataValue
            })
        }

    }

    // if the complete id received, as "upload_sensor_id"
    if (sensorEuiHighBytes && sensorEuiLowBytes) {
        decoded.messages.unshift({
            type: 'upload_sensor_id', channel: 1, sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
        })
    }

    // return
    //return decoded;
    var datacakeFields = []
    var messages = decoded.messages
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i]
        var id = message.measurementId
        var type = message.type
        var value = message.measurementValue
        switch (type) {
            case 'upload_battery':
                datacakeFields.push({
                    'field': 'BATTERY', 'value': message.battery
                })
                break
            case 'upload_interval':
                datacakeFields.push({
                    'field': 'UPLOAD_INTERVAL', 'value': message.interval
                })
                break
            case 'upload_version':
                datacakeFields.push({
                    'field': 'HARDWARE_VERSION', 'value': message.hardwareVersion
                }, {
                    'field': 'SOFTWARE_VERSION', 'value': message.softwareVersion
                })
                break
            case 'model_info':
                datacakeFields.push({
                    'field': 'MODEL_INFO',
                    'value': { detectionType: message.detectionType, modelId: message.modelId, modelVer: message.modelVer }
                })
                break
        }
        switch (id) {
            case 4097:
                datacakeFields.push({
                    'field': 'TEMPERATURE', 'value': value
                })
                break
            case 4098:
                datacakeFields.push({
                    'field': 'HUMIDITY', 'value': value
                })
                break
            case 4099:
                datacakeFields.push({
                    'field': 'LIGHT_INTENSITY', 'value': value
                })
                break
            case 4100:
                datacakeFields.push({
                    'field': 'CO2', 'value': value
                })
                break
            case 4101:
                datacakeFields.push({
                    'field': 'BAROMETRIC_PRESSURE', 'value': value
                })
                break
            case 4102:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE', 'value': value
                })
                break
            case 4103:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE', 'value': value
                })
                break
            case 4104:
                datacakeFields.push({
                    'field': 'WIND_DIRECTION', 'value': value
                })
                break
            case 4105:
                datacakeFields.push({
                    'field': 'WIND_SPEED', 'value': value
                })
                break
            case 4106:
                datacakeFields.push({
                    'field': 'PH', 'value': value
                })
                break
            case 4107:
                datacakeFields.push({
                    'field': 'LIGHT_QUANTUM', 'value': value
                })
                break
            case 4108:
                datacakeFields.push({
                    'field': 'ELECTRICAL_CONDUCTIVITY', 'value': value
                })
                break
            case 4109:
                datacakeFields.push({
                    'field': 'DISSOLVED_OXYGEN', 'value': value
                })
                break
            case 4110:
                datacakeFields.push({
                    'field': 'SOIL_VOLUMETRIC_WATER_CONTENT', 'value': value
                })
                break
            case 4111:
                datacakeFields.push({
                    'field': 'SOIL_ELECTRICAL_CONDUCTIVITY', 'value': value
                })
                break
            case 4112:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE(SOIL_TEMPERATURE, VWC & EC Sensor)', 'value': value
                })
                break
            case 4113:
                datacakeFields.push({
                    'field': 'RAINFALL_HOURLY', 'value': value
                })
                break
            case 4115:
                datacakeFields.push({
                    'field': 'DISTANCE', 'value': value
                })
                break
            case 4116:
                datacakeFields.push({
                    'field': 'WATER_LEAK', 'value': value
                })
                break
            case 4117:
                datacakeFields.push({
                    'field': 'LIGUID_LEVEL', 'value': value
                })
                break
            case 4118:
                datacakeFields.push({
                    'field': 'NH3', 'value': value
                })
                break
            case 4119:
                datacakeFields.push({
                    'field': 'H2S', 'value': value
                })
                break
            case 4120:
                datacakeFields.push({
                    'field': 'FLOW_RATE', 'value': value
                })
                break
            case 4121:
                datacakeFields.push({
                    'field': 'TOTAL_FLOW', 'value': value
                })
                break
            case 4122:
                datacakeFields.push({
                    'field': 'OXYGEN_CONCENTRATION', 'value': value
                })
                break
            case 4123:
                datacakeFields.push({
                    'field': 'WATER_ELETRICAL_CONDUCTIVITY', 'value': value
                })
                break
            case 4124:
                datacakeFields.push({
                    'field': 'WATER_TEMPERATURE', 'value': value
                })
                break
            case 4125:
                datacakeFields.push({
                    'field': 'SOIL_HEAT_FLUX', 'value': value
                })
                break
            case 4126:
                datacakeFields.push({
                    'field': 'SUNSHINE_DURATION', 'value': value
                })
                break
            case 4127:
                datacakeFields.push({
                    'field': 'TOTAL_SOLAR_RADIATION', 'value': value
                })
                break
            case 4128:
                datacakeFields.push({
                    'field': 'WATER_SURFACE_EVAPORATION', 'value': value
                })
                break
            case 4129:
                datacakeFields.push({
                    'field': 'PHOTOSYNTHETICALLY_ACTIVE_RADIATION_PAR', 'value': value
                })
                break
            case 4130:
                datacakeFields.push({
                    'field': 'ACCELEROMETER', 'value': value
                })
                break
            case 4131:
                datacakeFields.push({
                    'field': 'VOLUME', 'value': value
                })
                break
            case 4133:
                datacakeFields.push({
                    'field': 'SOIL_TENSION', 'value': value
                })
                break
            case 4134:
                datacakeFields.push({
                    'field': 'SALINITY', 'value': value
                })
                break
            case 4135:
                datacakeFields.push({
                    'field': 'TDS', 'value': value
                })
                break
            case 4136:
                datacakeFields.push({
                    'field': 'LEAF_TEMPERATURE', 'value': value
                })
                break
            case 4137:
                datacakeFields.push({
                    'field': 'LEAF_WETNESS', 'value': value
                })
                break
            case 4138:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_10CM', 'value': value
                })
                break
            case 4139:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_20CM', 'value': value
                })
                break
            case 4140:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_30CM', 'value': value
                })
                break
            case 4141:
                datacakeFields.push({
                    'field': 'SOIL_MOISTURE_40CM', 'value': value
                })
                break
            case 4142:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_10CM', 'value': value
                })
                break
            case 4143:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_20CM', 'value': value
                })
                break
            case 4144:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_30CM', 'value': value
                })
                break
            case 4145:
                datacakeFields.push({
                    'field': 'SOIL_TEMPERATURE_40CM', 'value': value
                })
                break
            case 4146:
                datacakeFields.push({
                    'field': 'PM2_5', 'value': value
                })
                break
            case 4147:
                datacakeFields.push({
                    'field': 'PM10', 'value': value
                })
                break
            case 4148:
                datacakeFields.push({
                    'field': 'NOISE', 'value': value
                })
                break
            case 4150:
                datacakeFields.push({
                    'field': 'ACCELEROMETERX', 'value': value
                })
                break
            case 4151:
                datacakeFields.push({
                    'field': 'ACCELEROMETERY', 'value': value
                })
                break
            case 4152:
                datacakeFields.push({
                    'field': 'ACCELEROMETERZ', 'value': value
                })
                break
            case 4175:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_01', 'value': value
                })
                break
            case 4176:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_02', 'value': value
                })
                break
            case 4177:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_03', 'value': value
                })
                break
            case 4178:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_04', 'value': value
                })
                break
            case 4179:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_05', 'value': value
                })
                break
            case 4180:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_06', 'value': value
                })
                break
            case 4181:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_07', 'value': value
                })
                break
            case 4182:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_08', 'value': value
                })
                break
            case 4183:
                datacakeFields.push({
                    'field': 'AI_DETECTION_NO_09', 'value': value
                })
                break
            case 5100:
                datacakeFields.push({
                    'field': 'SWITCH', 'value': value
                })
                break
            case 9990100:
                datacakeFields.push({
                    'field': 'BATTERY', 'value': message.battery
                })
                break
            case 9990200:
                datacakeFields.push({
                    'field': 'INTERVAL', 'value': message.interval
                })
                break
            case 9990300:
                datacakeFields.push({
                    'field': 'REMOVED', 'value': message.interval
                })
                break
        }
    }
    return datacakeFields
}

function crc16Check (data) {
    var crc16tab = [0x0000, 0x1189, 0x2312, 0x329b, 0x4624, 0x57ad, 0x6536, 0x74bf, 0x8c48, 0x9dc1, 0xaf5a, 0xbed3, 0xca6c, 0xdbe5, 0xe97e, 0xf8f7, 0x1081, 0x0108, 0x3393, 0x221a, 0x56a5, 0x472c, 0x75b7, 0x643e, 0x9cc9, 0x8d40, 0xbfdb, 0xae52, 0xdaed, 0xcb64, 0xf9ff, 0xe876, 0x2102, 0x308b, 0x0210, 0x1399, 0x6726, 0x76af, 0x4434, 0x55bd, 0xad4a, 0xbcc3, 0x8e58, 0x9fd1, 0xeb6e, 0xfae7, 0xc87c, 0xd9f5, 0x3183, 0x200a, 0x1291, 0x0318, 0x77a7, 0x662e, 0x54b5, 0x453c, 0xbdcb, 0xac42, 0x9ed9, 0x8f50, 0xfbef, 0xea66, 0xd8fd, 0xc974, 0x4204, 0x538d, 0x6116, 0x709f, 0x0420, 0x15a9, 0x2732, 0x36bb, 0xce4c, 0xdfc5, 0xed5e, 0xfcd7, 0x8868, 0x99e1, 0xab7a, 0xbaf3, 0x5285, 0x430c, 0x7197, 0x601e, 0x14a1, 0x0528, 0x37b3, 0x263a, 0xdecd, 0xcf44, 0xfddf, 0xec56, 0x98e9, 0x8960, 0xbbfb, 0xaa72, 0x6306, 0x728f, 0x4014, 0x519d, 0x2522, 0x34ab, 0x0630, 0x17b9, 0xef4e, 0xfec7, 0xcc5c, 0xddd5, 0xa96a, 0xb8e3, 0x8a78, 0x9bf1, 0x7387, 0x620e, 0x5095, 0x411c, 0x35a3, 0x242a, 0x16b1, 0x0738, 0xffcf, 0xee46, 0xdcdd, 0xcd54, 0xb9eb, 0xa862, 0x9af9, 0x8b70, 0x8408, 0x9581, 0xa71a, 0xb693, 0xc22c, 0xd3a5, 0xe13e, 0xf0b7, 0x0840, 0x19c9, 0x2b52, 0x3adb, 0x4e64, 0x5fed, 0x6d76, 0x7cff, 0x9489, 0x8500, 0xb79b, 0xa612, 0xd2ad, 0xc324, 0xf1bf, 0xe036, 0x18c1, 0x0948, 0x3bd3, 0x2a5a, 0x5ee5, 0x4f6c, 0x7df7, 0x6c7e, 0xa50a, 0xb483, 0x8618, 0x9791, 0xe32e, 0xf2a7, 0xc03c, 0xd1b5, 0x2942, 0x38cb, 0x0a50, 0x1bd9, 0x6f66, 0x7eef, 0x4c74, 0x5dfd, 0xb58b, 0xa402, 0x9699, 0x8710, 0xf3af, 0xe226, 0xd0bd, 0xc134, 0x39c3, 0x284a, 0x1ad1, 0x0b58, 0x7fe7, 0x6e6e, 0x5cf5, 0x4d7c, 0xc60c, 0xd785, 0xe51e, 0xf497, 0x8028, 0x91a1, 0xa33a, 0xb2b3, 0x4a44, 0x5bcd, 0x6956, 0x78df, 0x0c60, 0x1de9, 0x2f72, 0x3efb, 0xd68d, 0xc704, 0xf59f, 0xe416, 0x90a9, 0x8120, 0xb3bb, 0xa232, 0x5ac5, 0x4b4c, 0x79d7, 0x685e, 0x1ce1, 0x0d68, 0x3ff3, 0x2e7a, 0xe70e, 0xf687, 0xc41c, 0xd595, 0xa12a, 0xb0a3, 0x8238, 0x93b1, 0x6b46, 0x7acf, 0x4854, 0x59dd, 0x2d62, 0x3ceb, 0x0e70, 0x1ff9, 0xf78f, 0xe606, 0xd49d, 0xc514, 0xb1ab, 0xa022, 0x92b9, 0x8330, 0x7bc7, 0x6a4e, 0x58d5, 0x495c, 0x3de3, 0x2c6a, 0x1ef1, 0x0f78]
    var result = false
    var crc = 0
    var dataArray = []
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }

    for (var j = 0; j < dataArray.length; j++) {
        var item = dataArray[j]
        crc = (crc >> 8) ^ crc16tab[(crc ^ parseInt(item, 16)) & 0xFF]
    }
    if (crc === 0) {
        result = true
    }
    return result
}

// util
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

// util
function divideBy7Bytes (str) {
    var frameArray = []
    for (var i = 0; i < str.length - 4; i += 14) {
        var data = str.substring(i, i + 14)
        frameArray.push(data)
    }
    return frameArray
}

// util
function littleEndianTransform (data) {
    var dataArray = []
    for (var i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    dataArray.reverse()
    return dataArray
}

// util
function strTo10SysNub (str) {
    var arr = littleEndianTransform(str)
    return parseInt(arr.toString()
      .replace(/,/g, ''), 16)
}

// util
function checkDataIdIsMeasureUpload (dataId) {
    return parseInt(dataId) > 4096
}

// configurable.
function isSpecialDataId (dataID) {
    switch (dataID) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
        case 0x120:
            return true
        default:
            return false
    }
}

// configurable
function ttnDataSpecialFormat (dataId, str) {
    var strReverse = littleEndianTransform(str)
    if (dataId === 2 || dataId === 3) {
        return strReverse.join('')
    }

    // handle unsigned number
    var str2 = toBinary(strReverse)

    var dataArray = []
    switch (dataId) {
        case 0: // DATA_BOARD_VERSION
        case 1: // DATA_SENSOR_VERSION
            // Using point segmentation
            for (var k = 0; k < str2.length; k += 16) {
                var tmp146 = str2.substring(k, k + 16)
                tmp146 = (parseInt(tmp146.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp146.substring(8, 16), 2) || 0)
                dataArray.push(tmp146)
            }
            return dataArray.join(',')
        case 4:
            for (var i = 0; i < str2.length; i += 8) {
                var item = parseInt(str2.substring(i, i + 8), 2)
                if (item < 10) {
                    item = '0' + item.toString()
                } else {
                    item = item.toString()
                }
                dataArray.push(item)
            }
            return dataArray.join('')
        case 7:
            // battery && interval
            return {
                interval: parseInt(str2.substr(0, 16), 2), power: parseInt(str2.substr(-16, 16), 2)
            }
        case 9:
            let dataValue = {
                detectionType: parseInt(str2.substring(0, 8), 2),
                modelId: parseInt(str2.substring(8, 16), 2),
                modelVer: parseInt(str2.substring(16, 24), 2)
            }
            // 01010000
            return dataValue

    }
}

// util
function ttnDataFormat (str) {
    var strReverse = littleEndianTransform(str)
    var str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        var arr = str2.split('')
        var reverseArr = []
        for (var forArr = 0; forArr < arr.length; forArr++) {
            var item = arr[forArr]
            if (parseInt(item) === 1) {
                reverseArr.push(0)
            } else {
                reverseArr.push(1)
            }
        }
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return parseFloat('-' + str2 / 1000)
    }
    return parseInt(str2, 2) / 1000
}

// util
function sensorAttrForVersion (dataValue) {
    var dataValueSplitArray = dataValue.split(',')
    return {
        ver_hardware: dataValueSplitArray[0], ver_software: dataValueSplitArray[1]
    }
}

// util
function toBinary (arr) {
    var binaryData = []
    for (var forArr = 0; forArr < arr.length; forArr++) {
        var item = arr[forArr]
        var data = parseInt(item, 16)
          .toString(2)
        var dataLength = data.length
        if (data.length !== 8) {
            for (var i = 0; i < 8 - dataLength; i++) {
                data = '0' + data
            }
        }
        binaryData.push(data)
    }
    return binaryData.toString()
      .replace(/,/g, '')
}
```

</details>

</TabItem4>
</Tabs4>

<!-- Code END -->

---

### How to Use

##### Preparation

Before configuring the decoder, please set up your sensors and gateway correctly according to the product manual, and then connect to the LoRaWAN network server you need.

We take The Things Stack as an example, please configure the decoder according to the following steps:

##### Configure the Payload Decoder

- Navigate to the `Payload Formats` tab of your device.
- Select `Custom` for `Payload Format`
- Copy and paste the whole contents of `decoder.js` to the `decoder` textarea.
- Click `save payload functions`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/decoder-use.png" alt="pir" width={800} height="auto" /></p>

##### Check the Decoded Messages

You may test the decoding script with a sample payload first.

To do this, copy a raw data packet like `01 01 10 98 53 00 00 01 02 10 A8 7A 00 00 AF 51` into the `Payload` text input, and select the `FPort` according to the device manual, then click `Test` button. You will see a successfully parsed JSON structure below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/test-decoder.png" alt="pir" width={800} height="auto" /></p>

Then let's check out the magic of the script. We navigate to the `Live Data` tab, and you can expand any uploaded message to check the `Event Fields` in the payload. These fields are just populated by the script.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/check-data.png" alt="pir" width={800} height="auto" /></p>

If you're subscribing the messages with TTN's MQTT Data API, you will also get parsed JSON payload fields.

```cpp
Client mosq-TCSlhYcKaRCn3cIePE received PUBLISH (d0, q0, r0, m0, 'lorawan868/devices/2cf7f12010700041/up', ... (719 bytes))
lorawan868/devices/2cf7f12010700041/up {"app_id":"lorawan868","dev_id":"2cf7f12010700041","hardware_serial":"2CF7F12010700041","port":2,"counter":1119,"confirmed":true,"payload_raw":"AQEQYG0AAAECEOj9AACWSA==","payload_fields":{"err":0,"messages":[{"measurementId":4097,"measurementValue":28,"type":"report_telemetry"},{"measurementId":4098,"measurementValue":65,"type":"report_telemetry"}],"payload":"010110606D0000010210E8FD00009648","valid":true},"metadata":{"time":"2020-03-13T09:09:45.834032725Z","frequency":867.3,"modulation":"LORA","data_rate":"SF7BW125","airtime":66816000,"coding_rate":"4/5","gateways":[{"gtw_id":"eui-2cf7f11014300001","timestamp":1779605971,"time":"2020-03-13T09:09:45.672666033Z","channel":4,"rssi":-66,"snr":8.8,"rf_chain":0}]}}
```

### Resource

[SenseCAP Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder)
