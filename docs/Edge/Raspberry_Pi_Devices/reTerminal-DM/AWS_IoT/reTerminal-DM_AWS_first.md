---
description: AWS IoT Core Intergate With reTerminal DM
title: AWS IoT Core Intergate With reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
keywords:
- AWS
- Getting Start
- Cloud
slug: /reTerminal-DM_AWS_first
last_update:
  date: 11/22/2023
  author: Kasun Thushara
---
## Introduction 

AWS IoT Core is a service that assists in securely connecting and managing Internet of Things (IoT) devices. It enables devices to communicate with each other and with the cloud, facilitating the development of smart and connected applications. AWS IoT Core streamlines the integration of IoT devices into the broader AWS ecosystem, offering a reliable and scalable platform for building IoT solutions. In this guide, we will discuss how to connect our reTerminal DM to the AWS IoT cloud.

## Getting Start

Before you start this project, you may need to prepare your hardware and software in advance as described here.

### Hardware preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software Preparation

We recommend installing the **Bullesye** version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this [**guide**](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/)

#### Install Mqtt library
In your terminal type :

```sh
sudo pip3 install "paho-mqtt<2.0.0"
```

:::note

If you are trying to use Bookworm OS, which is the latest OS as of the time of writing this wiki, you may need to use a virtual environment for installing python libraries. Please follow this [**link**](https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi) for more updates.

:::

## Create AWS Account 

If you don't have an AWS account, you can easily create one. Please follow [**this link**](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html) for guidance on how to set up your account.

## Register the device 



- **Step 1**: Search IoT core and navigate to it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/searchbar.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 2**: Next in the side bar navigate to **Manage** topic and under **All Devices** go to **Things**.

:::info
**What is a Thing?**

AWS IoT refers to Internet of Things (IoT) devices as "things" on the AWS platform. Each IoT device, such as the reTerminal Device in this context, is represented as a "thing" in AWS. Importantly, once created, the name of a "thing" cannot be changed.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingsslidebar.PNG" style={{width:200, height:300}}/></div>

- **Step 3**: Next press on Create things 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthings.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 4**: We are going to create for single reTerminal Device. So click Create Single Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createsinglething.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 5**: Give a thing name.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingname.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 6**: Also A thing type for your reference in the future

:::info
**What is a Thing Type?**

Thing types enable you to store descriptions and configuration information that are common to all things associated with the same thing type. This simplifies the management of things in the registry. For instance, you can define a 'Factory_HMI' thing type. For this demonstration we used pi as a thing type.
:::
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingtype.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthingtype.PNG" style={{width:400, height:300}}/></div>

- **Step 7** : Generate Certificates 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/configurecertificate.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 8**:  To Attach policies you need to create. click on **Create policy**

:::info
AWS IoT Core policies are JSON documents following IAM policy conventions. They support named policies, enabling multiple identities to reference the same policy document. Named policies are versioned for easy rollback.
These policies provide control over access to the AWS IoT Core data plane, encompassing operations such as connecting to the AWS IoT Core message broker, sending/receiving MQTT messages, and accessing or updating a thing's Device Shadow.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createpolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 9**:  Give an appropriate name to the policy and set policy effect Policy action and Policy resources as following.

:::info
The policy includes:

**Effect**: Specifies whether the action is allowed or denied.

**Action**: Specifies the specific action that the policy permits or denies.

**Resource**: Specifies the resource or resources on which the action is allowed or denied.


:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createapolicy.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 10**: Attach Policy by policy that you made and press **Create thing**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/policycreatething.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 11**:Next you can download certificates and keys. Make sure to download **Device certificate, Private and Public keys and Root CA certificate.** 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/certicates.PNG" style={{width:600, height:450}}/></div>

- **Step 12** : Attach to the thing (reTerminal DM ) 
For that go to **Security** >> **Certificates**

:::info

When you create and enroll a certificate independently from an AWS IoT thing, it lacks policies for AWS IoT operations and isn't associated with any thing object. This explains how to establish these connections for a registered certificate. The certificate authenticates the device with AWS IoT for connection. Linking the certificate to a thing resource creates the relationship between the device (via the certificate) and the thing resource. To grant the device permission for AWS IoT actions, such as connecting and publishing messages, it's essential to attach a suitable policy to the device's certificate.

:::

After selecting the thing that you made from **Actions** drop down menu then press **Attach to thing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attach_policy.PNG" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachtothing.PNG" style={{width:600, height:'auto'}}/></div>

**Step 13**: Attach the policy also. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachpolicy.PNG" style={{width:600, height:'auto'}}/></div>

## Test MQTT

To accomplish this, download our [test Python file](https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py). Ensure that your device certificates, key files (public and private keys), root access file, and this Python file are in the same folder on your reTerminal Device. Additionally, you need to modify the connection URL.

To do that :

- **Step 01** :Go to Settings
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/settings.PNG" style={{width:200, height:300}}/></div>

- **Step 02** : Then you will find the URL 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/weburl.PNG" style={{width:800, height:'auto'}}/></div>

- **Step 03** : Replace those file names with yours and run the file

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/cosw1.PNG" style={{width:800, height:'auto'}}/></div>


## Test the Connection 

Go to MQTT test Client under the **Test** tab and type the topic name to subscribe. In this case it is device/data.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/mqtttest.PNG" style={{width:800, height:'auto'}}/></div>

The output is some thing like this. The massage from reterminal DM is pop up in the console.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/seeedop.PNG" style={{width:800, height:'auto'}}/></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>










