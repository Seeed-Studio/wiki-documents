---
sidebar_position: 9
description: This article describes how to send the recognition results of a model over MQTT.
title: Model Output Via MQTT
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# Configuring Model Output via MQTT on SenseCraft AI for XIAO ESP32S3 Sense

This wiki article provides a step-by-step guide on how to configure model output using MQTT (Message Queuing Telemetry Transport) for the XIAO ESP32S3 Sense board on the SenseCraft AI platform. MQTT is a lightweight messaging protocol that enables efficient communication between devices. By following these instructions, you will learn how to set up MQTT communication and retrieve model inference results from your XIAO ESP32S3 Sense.

## Prerequisites

Before you begin, ensure that you have the following:

1. XIAO ESP32S3 Sense board
2. USB-C data cable for connecting the XIAO board to your computer
3. A third-party MQTT client, such as MQTTX, installed on your computer

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Step 1. Access the SenseCraft AI Vision Workspace and connect the XIAO ESP32S3 Sense

Open your web browser and navigate to the SenseCraft AI Vision Workspace page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

Select the XIAO ESP32S3 Sense board from the available devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

Using the USB-C cable, connect your XIAO ESP32S3 Sense board to your computer. Once connected, click the **Connect** button located in the top-left corner of the SenseCraft AI Vision Workspace page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Step 2. Ensure a Model is Loaded on the XIAO ESP32S3 Sense

Before proceeding, make sure that your XIAO ESP32S3 Sense board has a trained model loaded. If you haven't loaded a model yet, refer to the SenseCraft AI documentation on how to train and deploy models to your device.

- [Using a model for XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/sensecraft_ai_pretrained_models_for_xiao/)

If you want to use your own trained model, you can refer to the following two Wikis.

- [Type of training - Classification](https://wiki.seeedstudio.com/sensecraft_ai_training_classification/)
- [Type of training - Object Detection](https://wiki.seeedstudio.com/sensecraft_ai_training_object_detection/)

## Step 3. Configure MQTT Output

In the left sidebar of the Vision Workspace page, click on the **Output** option. From the available output options, select **MQTT** to access the MQTT configuration settings.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## Step 4. Set Up MQTT Configuration

Click on the **Configuration** button at the bottom of the MQTT output section. A configuration window will appear, prompting you to enter the following information:

- **SSID**: Enter the name of your Wi-Fi network.
- **Password**: Provide the password for your Wi-Fi network.
- **Encryption**: Choose the encryption type for your Wi-Fi network (e.g., AUTO).
- **MQTT**: Select "Yes" to enable MQTT communication.

Fill in the MQTT configuration fields:

- **Host**: Enter the hostname or IP address of your MQTT broker (e.g., broker.emqx.io).
- **Port**: Specify the port number for MQTT communication (e.g., 1883).
- **Client ID**: Provide a unique client ID for your XIAO ESP32S3 Sense (e.g., xiao_esp32s3).
- **User Name**: Enter your MQTT username, if required by your MQTT broker.
- **Password**: Provide your MQTT password, if required by your MQTT broker.
- **SSL**: Choose whether to enable SSL encryption. If your MQTT broker supports SSL, you can select "Yes" to enhance communication security.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

Click the **Apply** button to save the configuration.

:::caution
This step will require a network connection, please connect an antenna for XIAO ESP32S3 Sense.
:::

If everything is configured smoothly, you should be able to see the following information on the website.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## Step 5. Set Up MQTT Client (MQTTX)

Launch the [MQTTX application](https://mqttx.app/) on your computer.

Create a new connection with the following settings:

- Host: Enter the same hostname or IP address used in the SenseCraft AI platform (e.g., broker.emqx.io).
- Port: Specify the port number for MQTT communication (e.g., 1883).
- Client ID: Provide a unique client ID for your MQTTX instance (e.g., seeed_computer).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

Click the **Connect** button to establish a connection with the MQTT broker.

## Step 6. Subscribe to MQTT Topic

In the MQTTX application, click on the **New Subscribe** button to create a new subscription. Enter the topic `sscma/v0/#` and click **Subscribe**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

This topic will be used to receive model inference information from your XIAO ESP32S3 Sense.

## Step 7. Send Command to Retrieve Model Inference Results

In the MQTTX application, navigate to the device topic channel. You can get it by clicking the **Query device's topic** button on SenseCraft AI's MQTT page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

Send the command `AT+INVOKE=-1,0` to trigger the model inference on your XIAO ESP32S3 Sense.

:::tip
Please make sure you are sending the correct topic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

If you find that you still don't have any model recognition related data to report, try sending the command in HEX format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

The XIAO ESP32S3 Sense will process the command and publish the model inference results to the subscribed topic. In the MQTTX application, you will receive the inference results under the `sscma/v0/#` topic.

**Example**:

Let's say your trained model is designed to detect objects in an image. When you send the 'AT+INVOKE=-1,0' command, the XIAO ESP32S3 Sense will capture an image, run the model inference, and publish the results via MQTT. The inference results may include information such as the detected objects, their bounding boxes, and confidence scores. For instance, the MQTT message payload could be:

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

For a detailed description of the JSON format read the documentation **[here](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**.

:::tip
In the device's firmware, there is a set of established communication protocols that specify the format of the model results output, and what the user can do with the models. Due to space issues, we won't be expanding on the specifics of these protocols in this wiki, we'll be detailing this section through documentation on Github. If you are interested in more in-depth development, please go **[here](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**.
:::

To decode the base64-encoded image:

1. Copy the base64-encoded string from the "image" field in the JSON object.

2. Visit the website `https://base64.guru/converter/decode/image` in your web browser.

3. Paste the copied base64-encoded string into the "Base64 string" textarea on the website.

4. Click the **Decode Base64 to Image** button.

5. The decoded image will appear below the button, and you can view or download it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## Conclusion

By following this step-by-step guide, you have learned how to configure model output using MQTT on the SenseCraft AI platform for the XIAO ESP32S3 Sense board. You can now retrieve model inference results via MQTT and integrate them into your applications or systems. Remember to ensure a stable Wi-Fi connection and correctly configure your MQTT broker and client settings for seamless communication.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
