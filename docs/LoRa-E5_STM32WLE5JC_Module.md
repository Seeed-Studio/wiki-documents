![LORA E5](https://files.seeedstudio.com/products/317990687/image/lora-e5_Preview-07.png)

## Product Introduction
LoRa-E5 is a low-cost, ultra-low power, extremely compact, and high-performance LoRaWAN Module designed by Seeed Technology Co., Ltd. **It contains ST system-level package chip STM32WLE5JE, which is the world first SoC integrated with the combo of LoRa RF and MCU chip.** This module is also embedded with ARM Cortex M4 ultra-low-power MCU and LoRa SX126X, and therefore supports (G)FSK mode and LoRa. 62.5kHz, 125kHz, 250kHz, and 500kHz bandwidth can be used in LoRa® mode, making it suitable for the design of various IoT nodes, supporting EU868 and US915.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)

![SIZE COMPARE](https://files.seeedstudio.com/products/317990687/image/3111605248180_.pic.jpg)
*(extremely compacted size, smaller than 1 euro coin)*

## Features
* **Ultra-low Power Consumption**: as low as 2.1uA sleep current (WOR mode)
* **Extremely Compacted Size**: 12mm * 12mm * 2.5mm 28 pins SMT
* **High Performance**: TXOP=22dBm@868/915MHz; -136.5dBm sensitivity for SF12 with 125KHz BW
* **Long Distance Use**: 158dB link budget
* **Wireless Connectivity**: Embedded LoRaWAN® protocol, AT command, support global LoRaWAN® frequency plan
* **Worldwide Compatibility**: wide frequency range; EU868/US915/AU915/AS923/KR920/IN865
* **Great Flexibility**: For customers who want to develop software on the MCU of the module, other GPIOs of the MCU can be easily manipulated, including UART, I2C, ADC, etc. These rich GPIO interfaces are useful for users who need to expand peripherals.
* **FCC and CE Certified**

## Applications
* Works for LoRaWAN sensor nodes and any wireless communication application.

![applications](https://files.seeedstudio.com/products/317990687/image/application.png)

## Specifications
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-2fdn{border-color:#9b9b9b;text-align:left;vertical-align:top}
.tg .tg-e2cz{background-color:#9b9b9b;border-color:#9b9b9b;color:#ffffff;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-e2cz">ITEMs</th>
    <th class="tg-e2cz">Parameter</th>
    <th class="tg-e2cz" colspan="4">Specifications</th>
    <th class="tg-e2cz">Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-2fdn" rowspan="2">Structure</td>
    <td class="tg-2fdn">Size</td>
    <td class="tg-2fdn" colspan="4">12(W)*12(L)*2.5(H)</td>
    <td class="tg-2fdn">mm</td>
  </tr>
  <tr>
    <td class="tg-2fdn">Package</td>
    <td class="tg-2fdn" colspan="4">28 pins, SMT</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="18">Electrical Characteristics</td>
    <td class="tg-2fdn">power supply</td>
    <td class="tg-2fdn" colspan="4">3.3V type</td>
    <td class="tg-2fdn">V</td>
  </tr>
  <tr>
    <td class="tg-2fdn">sleep current</td>
    <td class="tg-2fdn" colspan="4">2.1uA(WDT on)</td>
    <td class="tg-2fdn">uA</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="3">Operation current (Transmitter+MCU)</td>
    <td class="tg-2fdn" colspan="4">50mA @10dBm in 434MHz type</td>
    <td class="tg-2fdn" rowspan="3">mA</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">111mA @22dBm in 470MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">111mA @22dBm in 868MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="3">Operation current (Receiver+MCU)</td>
    <td class="tg-2fdn" colspan="4">6.7mA @BW125kHz, 868MHz type</td>
    <td class="tg-2fdn" rowspan="3">mA</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">6.7mA @BW125kHz, 434MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">6.7mA @BW125kHz, 470MHz type</span></td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="3">Output power</td>
    <td class="tg-2fdn" colspan="4">10dBm max @434MHz</td>
    <td class="tg-2fdn" rowspan="3">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4">22dBm max @470MHz</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4">22dBm max @868MHz</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="5">Sensitivity</td>
    <td class="tg-2fdn" colspan="4">@SF12, BW125kHz</td>
    <td class="tg-2fdn" rowspan="5">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn">Fr(MHz)</td>
    <td class="tg-2fdn">min</td>
    <td class="tg-2fdn">type</td>
    <td class="tg-2fdn">max</td>
  </tr>
  <tr>
    <td class="tg-2fdn">434</td>
    <td class="tg-2fdn">-</td>
    <td class="tg-2fdn">-134.5</td>
    <td class="tg-2fdn">-136</td>
  </tr>
  <tr>
    <td class="tg-2fdn">470</td>
    <td class="tg-2fdn">-</td>
    <td class="tg-2fdn">-136.5</td>
    <td class="tg-2fdn">-137.5</td>
  </tr>
  <tr>
    <td class="tg-2fdn">868</td>
    <td class="tg-2fdn">-</td>
    <td class="tg-2fdn">-135</td>
    <td class="tg-2fdn">-137</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="2">Harmonics</td>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">&lt; -36dBm below 1GHz</span></td>
    <td class="tg-2fdn">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn" colspan="4"><span style="font-weight:400;font-style:normal">&lt; -40dBm above 1GHz</span></td>
    <td class="tg-2fdn">dBm</td>
  </tr>
  <tr>
    <td class="tg-2fdn" rowspan="6">Interface </td>
    <td class="tg-2fdn">RFIO</td>
    <td class="tg-2fdn" colspan="4">RF port</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">UART</td>
    <td class="tg-2fdn" colspan="4">3 group of UART, include 2 pins</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">I2C</td>
    <td class="tg-2fdn" colspan="4">1 group of I2C, include 2 pins</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">ADC</td>
    <td class="tg-2fdn" colspan="4">1 ADC Input, include 1 pins, 12-bit 1Msps</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">NRST</td>
    <td class="tg-2fdn" colspan="4">Manual reset pin input</td>
    <td class="tg-2fdn"></td>
  </tr>
  <tr>
    <td class="tg-2fdn">SPI</td>
    <td class="tg-2fdn" colspan="4">1 group of SPI, include 4 pins</td>
    <td class="tg-2fdn"></td>
  </tr>
</tbody>
</table>

## Dimensions

![d](https://files.seeedstudio.com/products/317990687/image/lora-e5_Size-08.png)

## Sources

[LoRa-E5 Datasheet](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf)
[LoRa-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
[STM32WLE5JB Datasheet](https://files.seeedstudio.com/products/317990687/res/stm32wle5jb%20datasheet.pdf)