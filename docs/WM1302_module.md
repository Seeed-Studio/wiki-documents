![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/6/3/6341617247242_.pic_hd.jpg)

<p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

!!!Notes
        We has recently released the LoRa-E5 Series based on LoRa-E5 module. Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [LoRa-E5 Module](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). To learn more on creating a LoRaWAN End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).


WM1302 module is a new generation of LoRaWAN gateway module with mini-PCIe form-factor. Based on the Semtech® SX1302 baseband LoRaWAN® chip, WM1302 unlocks the greater potential capacity of long-range wireless transmission for gateway products. It features higher sensitivity, less power consumption, and lower operating temperature than the previous SX1301 and SX1308 LoRa® chip. 


WM1302 LoRaWAN gateway module has SPI and USB versions on both US915 and EU868 frequency bands, enable you to have a wide-range of LoRaWAN frequency plans options to choose including EU868, US915, AS923, AS920, AU915, KR920, and IN865.


WM1302 module is CE, FCC and Telec certified, which helps simplify the development and certification process of the LoRaWAN gateway devices.
 
 
WM1302 is designed for M2M and IoT applications and can be widely applied in LPWAN gateway supported scenarios. It would be a perfect choice for you to significantly reduce the technical difficulties and time-consumption when developing the LoRa gateway devices, including LoRaWAN gateway, miner hotspots, etc.


## Features

- **Powered by Semtech® SX1302 baseband LoRa® chip**, extremely low power consumption and high performance.
- **Mini-PCIe form factor with the standard 52-pin golden finger**, easy to integrate with various gateway devices. 
- **Ultra-low operating temperature**, no additional heat dissipation needed, reducing the size of LoRaWAN gateway.
- **High sensitivity** down to -139 dBm @SF12 with SX1250 TX/RX front-end; TX power up to 26 dBm @3.3V.
- **Certified with CE, FCC, and TELEC**. Simplify the final product certification process.

## Harware Overview 

Diagram:

![](https://files.seeedstudio.com/products/114992550/diagram.png)

Pinout:

![](https://files.seeedstudio.com/products/114992550/2761616575877_.pic_hd.jpg)

![](https://files.seeedstudio.com/products/113990934/3331616653395_.pic_hd.jpg)


## Specification


<style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-ev79{background-color:#efefef;border-color:#9b9b9b;color:#333333;text-align:left;vertical-align:top}
.tg .tg-4onr{background-color:#efefef;border-color:#9b9b9b;color:#343434;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-f42p{border-color:#9b9b9b;color:#333333;text-align:left;vertical-align:top}
--></style>
<table class="tg">
<thead>
<tr><th class="tg-4onr">Region</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">Frequency</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">Sensitivity</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">TX Power</td>
    <td class="tg-f42p">26 dBm (with 3.3V power supply)</td>
    <td class="tg-f42p">25 dBm (with 3.3V power supply)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LEDs</td>
    <td class="tg-f42p" colspan="2">Power: Green Config: Red TX: Green RX: Blue</td>
  </tr>
  <tr>
    <td class="tg-4onr">Form Factor</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, 52pin Golden Finger</td>
  </tr>
  <tr>
    <td class="tg-4onr">Power Consumption (SPI version)</td>
    <td class="tg-f42p" colspan="2">Standby: 7.5 mA<br />TX maximum power: 415 mA<br />RX: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">Power Consumption (USB version)</td>
    <td class="tg-f42p" colspan="2">Standby: 20 mA<br />TX maximum power: 425 mA<br />RX: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT(Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">Support</td>
  </tr>
  <tr>
    <td class="tg-4onr">Antenna Connector</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">Operating Temperature</td>
    <td class="tg-f42p" colspan="2">-40°C to 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">Dimensions</td>
    <td class="tg-f42p" colspan="2">30 mm (width) × 50.95 mm (length)</td>
  </tr>
  <tr>
    <td class="tg-4onr">Certification</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>



## Application

- LPWAN Gateway devices development

- Any long-distance wireless communication application development

- LoRa and LoRaWAN application learn and research

## Dimension

![](https://files.seeedstudio.com/products/114992550/dimension.png)


## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>