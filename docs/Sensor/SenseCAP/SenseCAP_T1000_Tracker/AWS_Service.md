---
description: Connect SenseCAP T1000 Tracker to AWS
title: SenseCAP T1000 Tracker & AWS
keywords:
- Tracker
- AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_Tracker_AWS
last_update:
  date: 8/24/2023
  author: Jessie
---




# Create the AWS Account

Go to https://signin.aws.amazon.com/ to create an AWS account. 

This will need your email, name, credit card info.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9248071e-0111-4bf4-b800-9df3991abe01/Untitled.png)

after the registration,  you are ready to go to AWS IoT in the console. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9e5f743-d553-4199-abde-8648b2615e24/Untitled.png)

# Add Gateway in AWS IoT Core for LoRaWAN

On the left menu,select LPWAN devices → Gateways

you can use the SenseCAP M2 gateway

[SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302) - US915](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b98ad083-a3ac-4c34-8356-d021bae0a1c5/Untitled.png)

click add Gateway

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/29520da8-c666-4173-a59b-961c9539eb19/Untitled.png)

Input the Gateway EUI which you can get it in the Gateway admin console

set the frequency plan, US915 for United States and set the sub band as 2

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00041846-86bd-4063-9fd8-ed891c2f088e/Untitled.png)

next, create the certificate, which will be need in the gateway configuration. with this cerificate, the SenseCAP M2 can connect to AWS IoT Core LoRaWAN.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/429f35e8-088f-49c5-a576-0f22ccbd0d5e/Untitled.png)

download and save the certificate files and the server trust certificates.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6b3a2e18-41d6-4362-b102-86db1e9d254d/Untitled.png)

unzip it, there are four files inside.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3274ce4b-9b9d-4cb0-aee5-2aea4cb44935/Untitled.png)

next create a role fro the gateway.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b356b9c5-2ce3-438d-8e17-fdd0c3396441/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4ea4591-b8b9-40e9-b155-7e5f4f673a73/Untitled.png)

copy the CUPs url, this is important, which tells the gateway where the data should be sent to.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6d793332-e63d-4c8e-b620-6a01f43f2894/Untitled.png)

config the SenseCAP M2 with the right selection, and certificate from those downloaded files.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/851dc68d-e323-4e8d-99ab-fe203812b7d3/Untitled.png)

now, you will see the Gateway connected with AWS

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93504adb-97f8-4db0-98bf-ef5e010a0bbd/Untitled.png)

# Add Devices

add SenseCAP Tracker to AWS IoT Core

first, you need to add device profile

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1ff0dc7-bfef-4323-af43-255a9e27ab03/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d2d236d4-e541-461a-91a9-07983f863284/Untitled.png)

and create the device service profile

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa2c3d24-70d5-4d8d-a0f3-fdb972a17786/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69351329-9690-4adb-b94f-948166945c52/Untitled.png)

then add  desination, which will tell where the data should go.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed06b7b1-67c5-4e7a-a5b5-b04322bd6dbb/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/60238551-9588-4054-9edc-8fd92a34da35/Untitled.png)

next, add the detail SenseCAP Tracker T1000

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/70e3d36f-930e-4c2e-bfbc-53064ac9e52d/Untitled.png)

read out the device EUI , Appkey, and AppEUI from the SenseCAP T1000 from the SenseCAP Mate App

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e454e5ad-cd48-4f8b-bc65-32f8007b8cb9/Untitled.jpeg)

and paste it in the AWS

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/54f8d35e-1905-4dcb-8bf5-2b9d66735810/Untitled.png)

select the device profile just created

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c158cdfb-6058-4518-b330-0513378ecf25/Untitled.png)

and select the destination just configured

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0364f6c4-6519-426b-8b2b-4678f6de05fe/Untitled.png)

untill now, the device has been added to AWS IoT Core.

# Decode the Tracker data

The SenseCAP Tracker will uplink the payload via LoRaWAN network，and the payload is under specified format to save the bandwith, so it is hard to read.

So we need to decode it, and save the data somewhere in AWS.

we need to create a rules for the Tracker.

For prepare, you need to record the “`Endpoint`" first, go to AWS IoT core home page, and click “Settings”

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23678ace-8bb4-48f6-b84c-24cb976fbc20/Untitled.png)

Record the “`Endpoint`” address in the page, you will need to use it in the next step.

For example, what I've shown here is [a39w0g3w5os1ti-ats.iot.us-east-1.amazonaws.com](http://a39w0g3w5os1ti-ats.iot.us-east-1.amazonaws.com/).

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/664799ad-43a6-43b0-b0af-b2f0fcc8216f/Untitled.png)

### Create Message Rules

Click Message routing → Rules, and click “Create Rule” button.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/477b92b6-5ada-456c-8284-c2feb3d0bbc1/Untitled.png)

Input a rule name(“`sensecap_lorawan_rule`” for example), and then click “Next”.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/08834105-8318-4110-b6da-d2bf6aaf5065/Untitled.png)

Select “`2016-03-23`” from SQL version, and input the following content, as the contents of “SQL statement”:

`SELECT * FROM “lorawan-device”`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a88583d-c368-4b93-bc7d-512c23904b56/Untitled.png)

Same page, scroll down to “Rule actions” section, and select “`Lambda`” from “Action 1”.

Next is an empty drop-down menu for the “Lambda function”, we need to create a function first, click “Create a Lambda function” and jump to another page.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4714ff51-1732-48ec-874f-154002d830fe/Untitled.png)

Refer to the screenshot below, input “Function name” and select the correct “Runtime”, and then, click “Create function” button to create a new function.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74aa467c-5cea-48be-9ac5-0197bd3b61f3/Untitled.png)

On the following funcition config page, remove all the code and replace it with the script attached at the end of the guide, then click “Deploy” button.

In the third line of the script, you need to replace the address in single quotes with the `Endpoint` address you recorded earlier.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/41be0130-5810-4258-acfe-48f1d394e7ca/Untitled.png)

Click “Configuration” → “Permissions” → “Edit”

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48bd5034-9a5d-4816-beaf-52cce8fef264/Untitled.png)

Click "View the xxxxxxxxxxx role" at the bottom.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/504cb812-54ea-42b1-9e78-5840d5931f63/Untitled.png)

Click “Add permissions” → “Attach policies”.

Search “[AdministratorAccess](https://us-east-1.console.aws.amazon.com/iamv2/home#/policies/details/arn%3Aaws%3Aiam%3A%3Aaws%3Apolicy%2FAdministratorAccess)”, check the box left it, and then click “Add Permissions”.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d36e37b-f0ef-4f9c-99ba-7150403b42c5/Untitled.png)

Go back to “Create rule” page, click refresh button and select the lambda function you created.

Then, click “Create” and complete the rule creation.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/302ae5ad-8c74-40f3-9961-64c791d5d568/Untitled.png)

Watch the data on page “MQTT test client”, input `#` and click “Subscribe” button, you will see the tracker’s data.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be29c5b2-8ba1-4037-8dca-64874f9492a1/Untitled.png)

### Attachments:

- Lambda Function Script
    
    ```jsx
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