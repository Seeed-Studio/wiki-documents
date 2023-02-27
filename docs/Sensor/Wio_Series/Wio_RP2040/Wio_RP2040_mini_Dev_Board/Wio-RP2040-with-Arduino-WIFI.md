---
title: Wio RP2040 mini Dev Board with Arduino
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-RP2040-with-Arduino-WIFI/
slug: /Wio-RP2040-with-Arduino-WIFI
last_update:
  date: 01/11/2022
  author: gunengyu
---
# **Wio RP2040 mini Dev Board with Arduino**

Here we gonna use Wio RP2040 mini Dev Board to transmit data through MQTT and Socket with Arduino. 


## **Hardware**

Materials required

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) x1
- Computer x1
- USB typc C cable x1

:::tip
    Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
- Step 1. Prepare a Wio RP2040 mini Dev Board and a Type-C cable.
- Step 2. **Press and hold** the 'boot' button while you are going to connect the board to computer. 

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)


- Step 3. Connect and check if a disk appears on the computer.

If all goes well, the red power LED on Wio RP2040 mini Dev Board should be turn on and a disk should appear on the computer.


## **Software**

Before we start to upload the code and transmit data, you may want to set up the server first.

### **Communicate with MQTT**

MQTT is a Client-Server publish/subscribe messaging transport protocol. Clients can use it as a publisher, a subscriber, or both.

#### **Configure the MQTT server**

Download the [MQTTX server software](https://github.com/emqx/MQTTX/) and install it on the computer, and then configure the MQTT server. If you can not download the server through the website in your country/region, please prepare the MQTT server by yourself.

---

We will use the free server of "mqtt.p2hp.com" in this project.

**Online server** 

- Address: mqtt.p2hp.com
- Ports: 1883 (TCP), 8083 (WebSocket)
- Type: EMQ
- MQTT V3.1.1/V5.0 compatible

---

Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

After the connection is successful, there will be a pop-up in the upper right corner of the software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

Then set the topic and message below. In this project, we use MQTT to receive or send the messages with Wio RP2040 mini Dev Board. 

Fill in the 'topic' as "temperature".

:::note
    The 'topic' we wirte here is very improtant. Publisher or subscriber can not transmit data unless the 'topics' between them are the same. You will find out more when you upload the code.
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window5.png)

Preparations have been completed and the MQTT server is set up. Now we are going to upload the code.

#### **Arduino code with MQTT**

:::note
    If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::
- **Step 1. Install an Arduino Software**

<p style={{}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

:::note
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.
:::
- **Step 2. Download and open the MQTT example**

You can download [MQTT.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/MQTT.ino) here and open it. 

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window.png)

- **Step 3. Add Wio RP2040 mini Dev Board to your Arduino IDE**

Click on **File > Preference**, and fill Additional Boards Manager URLs with the URL below: 

https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window2.png)

Click **Tools-> Board-> Boards Manager...**, and write the keyword "**XIAO RP2040**" in the searching blank. Find the "Seeed XIAO RP2040" and install it.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl2.png)

- **Step 4. Select the corresponding board**

After installing the board, click **Tools-> Board**, find "**Wio RP2040 Mini Dev Board**" and select it.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

Once the board is connected to the computer, there is **no need** to select a port. Because the computer will write a **.uf2 file** to the board at the first uploading, after that it will automatically select the port.

- **Step 5. Upload the program**
You can now upload the code and open MQTTX to see the results.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window6.png)

- **Furthermore**

If you send some messages through MQTT, you may see it on Serial Monitor in Arduino, as long as the 'topics' between them are the same.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window16.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window8.png)

### **Communicate with Socket**

Now we try using a computer to build a TCP server to send or receive messages through Socket. The software we used here is [NetAssist](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/NetAssist.exe).

#### **Configure the TCP server**

- Double click the downloaded '.exe' file and open NetAssist.

- Select 'TCP Server' in the upper left corner to set the 'Protocol'.

- Fill in the 'Local host addr' and 'Local host port' below.
 
- Once all is set up, click 'Open' to enter the Server.

:::note
    The **'Local host addr'** and **'Local host port'** here are improtant as well as the **'topic'** in MQTT. You wouldn't get the message unless these parameters are the same as the code.
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window14.png)

Preparations have been completed and the MQTT server is set up. Now we are going to upload the code.

#### **Arduino code with Socket**

- **Step 1. Download and open the Socket example**

You can download [Socket.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Socket.ino) here and open it. 

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window10.png)

- **Step 2. Select the corresponding board**

After installing the board, click **Tools-> Board**, find "**Wio RP2040 Mini Dev Board**" and select it.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

Once the board is connected to the computer, there is **no need** to select a port. Because the computer will write **.uf2 file** to the board at the first uploading, after that it will automatically select the port.
       
- **Step 3. Upload the program**
You can now upload the code and open NetAssist to see the results.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window13.png)

- **Furthermore**

If you send some messages through NetAssist, you may see it on NetAssist, as long as the 'Local Host Addr' and 'Local Host Port' between them are the same.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window15.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window11.png)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
