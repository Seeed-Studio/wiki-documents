![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png)

<p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

LoRa-E5 mini is a compacted-sized development board suitable for the rapid testing and building of small-size prototyping and helps you design your ideal LoRaWAN wireless IoT device with a long-distance transmission range. 

LoRa-E5 mini is embedded with [LoRa-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), which delivers the world-first combo of LoRa RF and MCU chip into one single tiny chip and is FCC and CE certified. It is powered by ARM Cortex-M4 core and Semtech SX126X LoRa chip and supports LoRaWAN protocol on the worldwide frequency and (G)FSK, BPSK, (G)MSK, and LoRa modulations. 

Learn more about [LoRa-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) here.

More comparison between the LoRa-E5 and LoRa RFM95 chip:

![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)

LoRa-E5 mini leads out all GPIOs of LoRa-E5, including UART, ADC, SPI, IIC, and etc. It contains RESET and BOOT buttons and is use-friendly. Supporting LoRaWAN protocol, LoRa-E5 mini features ultra-long-range transmission and ultra-low power consumption: it is able to achieve a transmission range of up to 10 km, and the sleep current of LoRa-E5 modules on board is as low as 2.1 uA(WOR mode). It is designed with industrial standards with a wide working temperature at -40 ℃ ~ 85℃, high sensitivity between -116.5dBm ~ -136 dBm, and power output up to +20.8 dBm at 3.3V.
 
Other than the LoRa-E5 mini, we also provide other choices including the LoRa-E5 Development Board carrying more complex interfaces and features to unlock the more powerful performance of the LoRa-E5 module.  It provides a broader range of access protocols and superabundant types of interfaces. Thus you are able to test and prototype the module rapidly with RS-485, Grove interfaces, and rich GPIOs.  (Learn more about LoRa-E5 Development Board)
 
Since LoRa-E5 is a LoRaWAN chip with an MCU, there are three main ways to utilize the LoRa-E5 mini:
 
1. Connect LoRa-E5 mini to PC and control by AT commands

There is a built-in USB to UART function on board, you could connect the LoRa-E5 mini to your PC with a USB type C cable, and use serial communication software to send AT commands and read data from the board.

 
2. Connect LoRa-E5 mini to another mainboard via UART and control by AT commands

For example, connect LoRa-E5 mini to Seeeduino XIAO and the Expansion Board via UART, and send AT commands and read data from Seeeduino XIAO through Arduino IDE serial monitor.

 
3. User Application Development by using SDK

Develop your own LoRa development board with MCU function by using STM32Cube Programmer, which is the SDK officially provided by STMicroelectronics. To download this SDK resource, please find the resources in learning and document down below.

With all the outstanding features listed above, the LoRa-E5 mini will be a superior choice for IoT device development, testing, prototyping, and applications in long-distance, ultra-low power consumption IoT scenarios like smart agriculture, smart office, and smart industry.

If you are unfamiliar with LoRa and LoRaWAN technology, please check out this blog [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) in detail.


## Features

- Full GPIOs led out from the Lora-E5 STM32WLE5JC

- Global LoRaWAN® and LoRa frequency plan supported

- Long-distance transmission range to 10km (ideal value in open area)

- Mini and compact size, suitable for rapid testing and building small size prototype

- Convenient RESET and BOOT buttons on board

## Harware Overview 

![](https://files.seeedstudio.com/products/317990687/image/2991615286709_.pic_hd.jpg)

![](https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg)



## Specification


<style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-6cwf{background-color:#c0c0c0;border-color:#efefef;color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-g9rn{background-color:#ffffff;border-color:#efefef;color:#343434;text-align:left;vertical-align:top}
--></style>
<table class="tg">
<thead>
<tr><th class="tg-6cwf">Parameters</th><th class="tg-6cwf">Specifications</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">size</td>
<td class="tg-g9rn">50*23mm</td>
</tr>
<tr>
<td class="tg-g9rn">voltage - supply</td>
<td class="tg-g9rn">3.7V - 5V</td>
</tr>
<tr>
<td class="tg-g9rn">power - output</td>
<td class="tg-g9rn">up to +20.8 dBm at 3.3V</td>
</tr>
<tr>
<td class="tg-g9rn">working frequency</td>
<td class="tg-g9rn">868/915MHz</td>
</tr>
<tr>
<td class="tg-g9rn">protocol</td>
<td class="tg-g9rn">LoRaWAN</td>
</tr>
<tr>
<td class="tg-g9rn">sensitivity</td>
<td class="tg-g9rn">-116.5 dBm ~ -136 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / 2P-2.54mm Hole / 1*12P-2.54mm Header*2 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">modulation</td>
<td class="tg-g9rn">LoRa, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">working temperature</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">current</td>
<td class="tg-g9rn">LoRa-E5 module sleep current as low as 2.1uA (WOR mode)</td>
</tr>
</tbody>
</table>
<div></div>
<div></div>
<div></div>
<style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-f2tp{background-color:#c0c0c0;border-color:#c0c0c0;color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-uu1j{background-color:#ffffff;border-color:#c0c0c0;color:#343434;text-align:left;vertical-align:top}
--></style>
<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">Part List:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">LoRa-E5 mini *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Antenna(EU868/US915) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Sticker *1 </td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">1X12pin male pin headers *2</td>
</tr>
</tbody>
</table>


## Application

- LoRa-E5 module Easy testing
- Rapid small-dimension prototyping of LoRa devices with LoRa-E5
- Any long-distance wireless communication application development
- LoRa and LoRaWAN application learn and research


![](https://files.seeedstudio.com/products/317990687/image/application.png)



## Resources

LoRa-E5 mini Datasheet: 
- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">LoRa-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">LoRa-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">LoRa-E5 mini v1.0.sch</a></p>

LoRa-E5 Datasheet: 

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">LoRa-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">LoRa-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

LoRa-E5 Certifications:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">LoRa-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">LoRa-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">LoRa-E5-HF FCC Certification -DTS</a></p>

Relevant SDK: 

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32Cube MCU Package for STM32WL series</a></p>



## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>