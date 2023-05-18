---
description: This Wiki is about the use of Grove - NFC (ST25DV64).
title: Grove - NFC(ST25DV64)
keywords:
- NFC
- ST25DV64
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-nfc-st25dv64
last_update:
  date: 5/16/2023
  author: Stephen Lo
---

# Grove - NFC (ST25DV64)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={450} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/grove-nfc-st25dv64">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - NFC (ST25DV64) is an innovative and versatile NFC/RFID tag board based on the advanced ST25DV64K chip from STMicroelectronics. This dynamic chip supports ISO/IEC 15693 and NFC Forum Type 5 tag standards, making it compatible with a wide array of NFC-enabled devices.

Designed for makers, DIY enthusiasts, and anyone interested in experimenting with NFC technology, the Grove - NFC (ST25DV64) offers a simple, cost-effective solution for adding NFC functionality to your projects. With its open-source nature, you can not only use this board as is but also tweak it to better fit your specific needs, whether you're building a smart home system, a secure access control device, a contactless payment solution, or an inventory tracking system.

The Grove - NFC (ST25DV64) is more than just an NFC tag. It's also a powerful tool that you can use to learn about NFC technology and its applications. With its rich features, you can explore various aspects of NFC, from data transfer and energy harvesting to data protection and general-purpose output.

This board is designed with convenience in mind. It features the standard Grove connector (HY2.0 - 4Pin), making it easily compatible with other Grove modules. Additionally, it works with both 3.3V and 5V systems, making it a flexible solution for your NFC needs.

Despite its small size, the Grove - NFC (ST25DV64) packs a punch when it comes to storage. It offers 64 Kbits of EEPROM, organized in 2048 blocks of 32 bits each, providing ample space for your data.

Note: Please remember that the Grove - NFC (ST25DV64) does not come with an NFC antenna. You will need to purchase a separate 13.56MHz NFC antenna to use with this product. You can also purchase this antenna from Seeedstudio.

Whether you're new to NFC or an experienced developer looking for an easy-to-use NFC solution, the Grove - NFC (ST25DV64) is an excellent choice. Its open-source software and hardware, combined with its ease of use and versatility, make it an invaluable tool for any NFC project.

:::tip
We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::

## Features

- Based on the ST25DV64K chip, supporting ISO/IEC 15693 and NFC Forum Type 5 tag standards
- 64 Kbits of EEPROM, organized in 2048 blocks of 32 bits each
- Energy harvesting and GPO (General Purpose Output)
- Fast transfer mode and multiple levels of data protection
- Compatible with both 3.3V and 5V systems
- Uses the standard Grove connector (HY2.0 - 4Pin) for easy integration with other Grove modules
- Open-source software and hardware

## Specification

- Chip: ST25DV64K
- Operating frequency: 13.56 MHz
- Protocol: ISO/IEC 15693
- Communication interface: I2C
- Grove connector: 4-pin HY2.0
- Operating voltage: 3.3/5V

## In the Box

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/2.jpg" alt="pir" width={500} height="auto" /></p>

- 1xGrove - NFC(ST25DV64) Board
- 2xGrove Cable(20cm)

## Applications

- **Access Control:** Use the Grove - NFC (ST25DV64) as a key card for access control systems.
- **Smart Home Automation:** Store configuration data on the tag to control smart home devices or trigger specific actions.
- **Contactless Payments:** Integrate the tag into a payment system for contactless transactions.
- **Device Pairing:** Simplify the pairing process between devices by storing connection information on the NFC tag.
- **Inventory Tracking:** Attach the NFC tag to products to store product information and simplify inventory management.

## Hardware Overview

### Pin Map

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/3.png" alt="pir" width={600} height="auto" /></p>

## Getting Started

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Materials required

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.3</th>
			<th>NFC Antenna</th>
      <th>Grove - NFC(ST25DV64)</th>
		</tr>
    <tr>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://raw.githubusercontent.com/Longan-Labs/NFC_ST25DV_RES/main/images/NFC_ANTENNA.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={250} height="auto" /></p></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/NFC-Antenna-p-1805.html?queryID=32009a01d3dd8bba3d47aacebce9f91d&objectID=1138&indexName=bazaar_retailer_products">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



:::note
**1**. Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy.
    
**2**. Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect Grove - NFC (ST25DV64) to **I2C** port  of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

:::note
The Grove - NFC (ST25DV64) does not come with an NFC antenna. Therefore, you will need to purchase a separate 13.56MHz NFC antenna to use with this product. You can also purchase this antenna from Seeedstudio.
:::

| Seeeduino     | Grove - NFC (ST25DV64) |
|---------------|-------------------------|
| 3.3/5V        | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

- **Step 1.** Download the [ST25DV Arduino Library](https://github.com/limengdu/ST25DV) from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** After downloading and installing the library correctly, you can find an example program named `ST25DV_HelloWorld.ino` in the examples folder. This program is designed for the ST25DV module.

```cpp
#include "ST25DVSensor.h"

#define DEV_I2C         Wire
ST25DV st25dv(12, -1, &DEV_I2C);

void setup() {
  const char uri_write_message[] = "seeedstudio.com";       // Uri message to write in the tag
  const char uri_write_protocol[] = URI_ID_0x01_STRING; // Uri protocol to write in the tag
  String uri_write = String(uri_write_protocol) + String(uri_write_message);
  String uri_read;

  // Initialize serial for output.
  Serial.begin(115200);

  // The wire instance used can be omitted in case you use default Wire instance
  if(st25dv.begin() == 0) {
    Serial.println("System Init done!");
  } else {
    Serial.println("System Init failed!");
    while(1);
  }

  if(st25dv.writeURI(uri_write_protocol, uri_write_message, "")) {
    Serial.println("Write failed!");
    while(1);
  }

  delay(100);
  
  if(st25dv.readURI(&uri_read)) {
    Serial.println("Read failed!");
    while(1);
  }

  Serial.println(uri_read.c_str());

  if(strcmp(uri_read.c_str(), uri_write.c_str()) == 0) {
    Serial.println("Successfully written and read!");
  } else {
    Serial.println("Read bad string!");
  }
}

void loop() {  
  //empty loop
} 
```

- **Step 4.** Upload the demo.

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. You will get below result:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/5.png" alt="pir" width={700} height="auto" /></p>


After uploading the provided program to your Arduino, your Grove - NFC (ST25DV64) becomes a fully functioning NFC Tag, which can operate independently. You can remove it from your Arduino board; it doesn't require any additional setup to work.

To test its functionality, you'll need an NFC-enabled smartphone, either Android or Apple. The NFC antenna for this device is located adjacent to the camera. However, if you are unsure about the location of the NFC antenna on your smartphone, it would be beneficial to look it up online.

Place the phone's NFC antenna close to the NFC antenna of the Grove - NFC (ST25DV64). Your smartphone should display a prompt requesting to open a webpage at st.com. This response indicates that your Grove - NFC (ST25DV64) is functioning correctly as an NFC Tag and demonstrates the demo's functionality.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/4.jpg" alt="pir" width={300} height="auto" /></p>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://github.com/Longan-Labs/NFC_ST25DV_RES/raw/main/Grove%20-%20NFC(ST25DV64).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - NFC(ST25DV64)](https://files.seeedstudio.com/wiki/Grove-NFCST25/Grove-NFC(ST25DV64).zip)
- **[PDF]** [ST25DV64K Datasheet](https://files.seeedstudio.com/wiki/Grove-NFCST25/st25dv.pdf)

## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>


