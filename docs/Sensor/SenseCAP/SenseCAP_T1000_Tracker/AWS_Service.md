---
description: Connect SenseCAP T1000 Tracker to AWS
title: SenseCAP T1000 Tracker & AWS
keywords:
- Tracker
- AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_Tracker_AWS
last_update:
  date: 8/31/2023
  author: Jessie
---


[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) provides the cloud services that connect your IoT devices to other devices and AWS cloud services. AWS IoT provides device software that can help you integrate your IoT devices into AWS IoT-based solutions. If your devices can connect to AWS IoT, AWS IoT can connect them to the cloud services that AWS provides.


Login to [AWS IoT console](https://console.aws.amazon.com/iot/home)

:::info
If you do not have an AWS account, click [here](https://portal.aws.amazon.com/billing/signup) to create one.
:::


## Add Gateway

Navigate to `Internet of Things`, then click `IoT Core`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

On the left menu,select `LPWAN devices` → `Gateways`, click `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>


`Gateway's EUI`: The EUI of your gateway, you can find it on the device label.<br/>
`Frequency`: The gateway's frequency band.<br/>
`Name`: Name your gateway(optional)<br/>
`SubBand`: Optionally, you can also specify LoRaWAN configuration data such as the subbands that you want to use and filters that can control the flow of traffic. For more information, see [Configure position of wireless resources with AWS IoT Core for LoRaWAN](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html).



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## Configure your gateway

### Gateway Certificate

To authenticate your gateway so that it can securely communicate with AWS IoT, your LoRaWAN gateway must present a private key and certificate to AWS IoT Core for LoRaWAN.

Click `Create certificate`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

Download and save the certificate files and the server trust certificates.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

There shoule be four files inside, you'll use them later to configure the gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>


### Gateway Permission

If you haven't created the IoTWirelessGatewayCertManagerRole IAM role for your account, create the role before you continue adding the gateway. 
Your gateways won't be able to communicate with AWS IoT without this role.

Choose the Role: `IoT Wireless Gateway Cert Manager Role`, then submit the configuration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>


Copy the CUPS URL, we will use it in the next step.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### Gateway Configuration

Login to the Luci configure page of the gateway, check [Get_Started](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) for more details.

Navigate to `LoRa` > `LoRa Network`.

`Mode`: Basic Station<br/>
`Gateway EUI`: Your gateway eui<br/>
`Server`: CUPS Server<br/>
`URL`: The CUPS URL we copied before<br/>
`Authentication Mode`: TLS Server and Client Authentication


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

Copy the content of the certificate file we downloaded before(the certificate can be opened in text form).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>



Navigate to the Gateways page and choose the gateway you've added.

In the LoRaWAN specific details section of the Gateway details page, you'll see the connection status and the date and time the last uplink was received.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>



## Add Profiles

Device and service profiles can be defined to describe common device configurations. These profiles describe configuration parameters that are shared by devices to make it easier to add those devices. AWS IoT Core for LoRaWAN supports device profiles and service profiles.

### Add devices profiles

Navigate to `Devices` > `Profiles`, click `Add device profile`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Provide a Device profile name, select the Frequency band (RfRegion)that you're using for the device and gateway, and keep the other settings to the default values.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### Add service profiles

Navigate to `Devices` > `Profiles`, click `Add service profile`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

It's recommend that you leave the setting `AddGWMetaData` enabled so that you'll receive additional gateway metadata for each payload, such as RSSIand SNR for the data transmission.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>


### Add Destination

Navigate to `Devices` > `Destination`, click `Add destination`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

`Publish to AWS IoT Core message broker`

Permissions: Select an existing service role > `IoT Wireless Gateway Cert Manager Role`

:::info
Adestination name can only have alphanumeric, - (hyphen)and _ (underscore) characters and it can't have any spaces.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

## Add LoRaWAN Devices

### Add wireless device

Navigate to `LPWAN devices` > `Devices`, click `Add wireless device`.

`Wireless device specification`: OTAAv1.0x

`DevEUI/APP EUI/APP key`: can be found in the SenseCAP Mate APP, check [Get_Started](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/#get-started) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

Select the device profile and destination you created in the previous step. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>


Navigate to the Devices page and choose the device you added before.

In the Details section of the Wireless devices details page, you'll see the date received.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>


## Configure the decoder


The SenseCAP Tracker will uplink the payload via LoRaWAN network，and the payload is under a specified format to save the bandwidth, which may make it challenging to read. To address this, we offer a dedicated decoder that users can employ to accurately decode the data.


Navigae to `Settings`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/settings.png" alt="pir" width={800} height="auto" /></p>

Record the “`Endpoint`” address in the page, you will need it in the next step.

For example:[a39w0g3w5os1ti-ats.iot.us-east-1.amazonaws.com](http://a39w0g3w5os1ti-ats.iot.us-east-1.amazonaws.com/).


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/settings2.png" alt="pir" width={800} height="auto" /></p>


### Create Message Rules

Navigate to `Message routing` tab → `Rules`, and click `Create Rule` button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

Name your rule and submit it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>


`SQL version`:2016-03-23<br/>
`SQL statement`: 
```cpp
SELECT * FROM “lorawan-device”
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>


Scroll down to `Rule actions` section, and select “`Lambda`” from “Action 1”, then click `Create a Lambda function`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Author from scratch`<br/>
`Function name`: Name your function.<br/>
`Runtime`: Node.js 14.x<br/>
`Architexture`: x86_64

Click `Create function` button to create a new function.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

On the following funcition config page, remove all the code and replace it with the following script,  then click `Deploy` button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

<details> 
<summary>Lambda Function Script</summary>

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

In the third line of the script, you need to replace the address in single quotes with the `Endpoint` address you recorded in the previous step.

```cpp
endpoint: 'your Endpoint'
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/settings2.png" alt="pir" width={800} height="auto" /></p>

### Configure the Permission

Click `Configuration` → `Permissions` → `Edit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

Click `View the xxxxxxxxxxx` role at the bottom.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

Click `Add permissions` → `Attach policies`.

Search “[AdministratorAccess](https://us-east-1.console.aws.amazon.com/iamv2/home#/policies/details/arn%3Aaws%3Aiam%3A%3Aaws%3Apolicy%2FAdministratorAccess)”, check the box left it, and then click “Add Permissions”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

Go back to `Create rule` page, click refresh button and select the lambda function you created.

Then, click `Create` and complete the rule creation.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

Check the data on page `MQTT test client`, input `#` and click `Subscribe` button, you will see the data.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview.png" alt="pir" width={800} height="auto" /></p>




## Resource

[SenseCAP T1000 Tracker Decoder for AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)


