---
description: Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards
title: Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino-AWS-IOT-Bridge
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# How to Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWSIOT.gif"/></div>
<br />

Gateways are present in most architectural discussions, both in [industrial IoT](https://aws.amazon.com/iot/solutions/industrial-iot/) environments and in the connected home. Today, we'll show you how to implement the [**Mosquitto**](https://mosquitto.org/) Agent **Bridge feature** to enable the use of gateways through the MQTT messaging sets up bi-directional data exchange with [**AWS IoT Core**](https://aws.amazon.com/iot-core/). This will allow your device to communicate locally with the Mosquitto Agent and AWS IoT Core to Benefit from the power of AWS Cloud.

In this tutorial, [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) will be used as example to walk through how to bridge Mosquitto MQTT Broker to AWS IoT.

## Why Bridge MQTT Broker to AWS IoT

If you have older IoT deployments, you may already have devices connected to an MQTT broker, such as [**Mosquitto**](https://mosquitto.org/). In this case, your MQTT agent can be very close to the location of the deployed sensor (local MQTT broker), or in a remote location like the Cloud. You can configure the local gateway to communicate with AWS IoT Core as the following diagram.

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWS-bridge.png"/></div>

## Getting Started

### Building AWS Mosquitto Broker Using Docker

#### Step 1: Setup AWS Account

Navigate to [AWS](https://docs.aws.amazon.com/iot/latest/developerguide/iot-console-signin.html) and setup the account.

Navigate to `User` -> `My Security Credentials`, and obtain **Access Key ID** and **Access Key**.

#### Step 2: Clone the Repository

Clone this [repository](https://github.com/ansonhe97/aws_mosquitto_broker) to a location in your drive.

#### Step 3: Install and Setup AWS CLI

Install AWS CLI from [here](http://docs.aws.amazon.com/cli/latest/userguide/installing.html).

Run `aws configure` in terminal and type in your Region, your Access ID and Keys, as followed:

```sh
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: eu-central-1
Default output format [None]: json
```

#### Step 3: Create an IAM policy for the bridge

Run the following command to create policy for the bridge:

```sh
aws iot create-policy --policy-name bridge --policy-document '{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Action": "iot:*","Resource": "*"}]}'
```

#### Step 4: Create Certificates

Go into the `aws_mosquitto_broker/config/certs` directory and run the following to create certificates:

```sh
cd aws_mosquitto_broker/config/certs

sudo aws iot create-keys-and-certificate --set-as-active --certificate-pem-outfile cert.crt --private-key-outfile private.key --public-key-outfile public.key --region eu-central-1
```

Then you can run the `aws iot list-certificates` to check the created certificates. Copy the ARN in the form of `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`:

```sh
aws iot list-certificates
```

Attach the policy to your certificate. Replace the `{REPLACE_ARN_CERT}` with your copied ARN `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`:

```sh
aws iot attach-principal-policy --policy-name bridge --principal {REPLACE_ARN_CERT}
```

Add read permissions to **private key**, **public key** and **client cert** (inside `certs` folder):

```sh
sudo chmod 644 private.key && sudo chmod 644 public.key && sudo chmod 644 cert.crt
```

Download the root Amazon CA certificate also in the `certs` directory:

```sh
sudo curl https://www.websecurity.digicert.com/content/dam/websitesecurity/digitalassets/desktop/pdfs/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o rootCA.pem
```

#### Step 5: Edit mosquitto custom config file

Rename `awsbridge.conf.sample` to `awsbridge.conf`:

```sh
mv awsbridge.conf.sample awsbridge.conf
```

Edit `config/conf.d/awsbridge.conf` and follow the awsbridge.conf instructions:

```sh
nano config/conf.d/awsbridge.conf
```

**Note:** Run `aws iot describe-endpoint` to get the AWS IoT endpoint.

#### Step 6:  Build Docker File

Go back to the root location `aws_mosquitto_broker` and run the following:

```sh
docker build -t aws_mqtt_broker .
```

**Note:** Make sure you have installed docker on your PC first.

#### Step 7: Run Docker Image

```sh
docker run -ti -p 1883:1883 -p 9001:9001 --name mqtt aws_mqtt_broker
```

Console / Log output:

```sh
1592301141: mosquitto version 1.4.15 (build date 2018-03-04 15:19:39+0000) starting
1592301141: Config loaded from /mosquitto/config/mosquitto.conf.
1592301141: Opening ipv4 listen socket on port 1883.
1592301141: Opening ipv6 listen socket on port 1883.
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic localgateway_to_awsiot
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic both_directions
1592301141: Connecting bridge awsiot (aq53tian3vbby.iot.eu-central-1.amazonaws.com:8883)
1592301141: Bridge bridgeawsiot sending CONNECT
1592301144: Received CONNACK on connection local.bridgeawsiot.
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 1, Topic: awsiot_to_localgateway, QoS: 1)
1592301144: Bridge local.bridgeawsiot sending UNSUBSCRIBE (Mid: 2, Topic: localgateway_to_awsiot)
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 3, Topic: both_directions, QoS: 1)
1592301144: Received SUBACK from local.bridgeawsiot
1592301144: Received UNSUBACK from local.bridgeawsiot
1592301145: Received SUBACK from local.bridgeawsiot
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/dockerbroker.png"/></div>

#### Step 8: Testing the Local Broker

**Publish from AWS IoT console**

1.- From AWS Management Console go to `AWS IoT Services` -> `Test`

2.- Subscribe to topics mentioned in our config file `awsiot_to_localgateway`, `localgateway_to_awsiot` and `both_directions`.

3.- Publish to `awsiot_to_localgateway` topic (hello world).

4.- Review log or console output in our local broker for something like this:

`1493564128: Received PUBLISH from local.bridgeawsiot (d0, q0, r0, m0, 'awsiot_to_localgateway', ... (45 bytes))`

**Note:** Make sure that it is selected the `eu-central-1` as the region.

**Publish from Host**

Workflow: `Local Broker(Host PC)` -> `Docker Gateway` -> `AWS IoT`.

Run the following in terminal to publish from host to AWS IoT:

`mosquitto_pub -h localhost -p 1883 -q 1 -d -t localgateway_to_awsiot  -i clientid1 -m "{\"key\": \"helloFromLocalGateway\"}"`

:::note
Make sure that you have [mosquitto](https://mosquitto.org/download/) installed on your PC.
:::

### Publishing Messages From Wio Terminal

Now, we can use Wio Terminal as one of the end device to publish or subscribe to topics!

#### Installing the Dependent Libraries

This demo relies on the Wio Terminal's Wi-Fi core, please follow [**this**](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/) wiki first.

**STEP.1 Install the Pubsubclient library**

1. Visit the [pubsubclient](https://github.com/knolleary/pubsubclient) repositories and download the entire repo to your local drive.

2. Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `pubsubclient` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

**STEP.2 Install the ArduinoJson Library**

1. Visit the [ArduinoJson](https://github.com/bblanchon/ArduinoJson) repositories and download the entire repo to your local drive.

2. Now, the ArduinoJson library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `ArduinoJson` file that you've have just downloaded.

#### Upload the Arduino Sketch

Download the Arduino Sketch from [**here**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_AWSIoT_Bridge/WioTerminal_AWSIoT_Bridge.ino).

- Configure the Wi-Fi settings `ssid` and `password`.
- Change the `mqttserver` to the IP Address of your MQTT Broker (Your PC's IP Address).

Upload the code and open Serial Monitor to check! Now, if you press the button on Wio Terminal will publish a message to the AWS IoT and you can also see incoming messages from the AWS IoT Console.

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/result.png"/></div>

:::note
Make sure that the local broker docker is up and running the whole time.
:::

## Resources

- [How to Bridge Mosquitto MQTT Broker to AWS IoT](https://aws.amazon.com/cn/blogs/iot/how-to-bridge-mosquitto-mqtt-broker-to-aws-iot/)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br/>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
