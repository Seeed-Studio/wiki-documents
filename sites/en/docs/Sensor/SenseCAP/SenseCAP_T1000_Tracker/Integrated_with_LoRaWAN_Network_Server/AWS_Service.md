---
description: Connect SenseCAP T1000 Tracker to AWS
title: AWS Cloud Services
keywords:
- Tracker
- AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /SenseCAP_T1000_Tracker_AWS
last_update:
  date: 12/4/2024
  author: Leo
---

# Using AWS Cloud Services for SenseCAP T1000 Tracker

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

Here select `Publish to AWS IoT Core Message Broker` and name the destination's `MQTT topic`

Permissions: Select an existing service role > `IoT Wireless Gateway Cert Manager Role`

:::info
A destination name can only have alphanumeric, - (hyphen) and _ (underscore) characters and it can't have any spaces.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="pir" width={800} height="auto" /></p>

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

### Create Message Rules

Navigate to `Message routing` tab → `Rules`, and click `Create Rule` button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

Name your rule and submit it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>

`SQL version`: 2016-03-23<br/>
`SQL statement`: SELECT * FROM **"YourDestinationTopic"**

Here we fill in `t1000-raw` according to [Add Destination](#add-destination)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>

Scroll down to `Rule actions` section, and select `Lambda` from `Action 1`, then click `Create a Lambda function`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Function name`: Name your function.<br/>
`Runtime`: Node.js 20.x<br/>
`Architexture`: x86_64

Click `Create function` button to create a new function.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

After creating the function, it goes to the function's config page. We will configure it later so just go back to the rules page.

Click the Refresh button and select the Lambda function you create before. Then click `Next` to Step 4.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="pir" width={800} height="auto" /></p>

Check that all details of the rule are correct, then click `Create` to create the rule.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="pir" width={800} height="auto" /></p>

### Configure the Lambda Function

Back to `Message routing` tab → `Rules`, select the rule you created before.

Click `Lambda` from `Actions` and then click the link to go to the Lambda function configuration page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="pir" width={800} height="auto" /></p>

On the following funcition config page, rename the `index.mjs` file to `index.js`, remove all the code and replace it with the script from [Resource](#resource), then click `Deploy` button.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

:::tip Note
Replace the `region` and `device id` according to your device.
:::

After configuring the decoder, Click `Configuration` → `Permissions` → `Edit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

Click `View the xxxxxxxxxxx` role at the bottom.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

Click `Add permissions` → `Attach policies`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

Search `AdministratorAccess`, check the box left it, and then click `Add Permissions`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

### Check the data

Check the data on page `MQTT test client`, input `#` and click `Subscribe` button, you will see the data.

The raw payload of T1000 Tracker publish from `t1000-raw` and the decoded data publish from `tracker/measurement`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="pir" width={800} height="auto" /></p>

## Resource

[SenseCAP T1000 Tracker Decoder for AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)
