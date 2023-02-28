---
description: Seeed SOM – STM32MP157C 
title: Seeed Studio SOM STM32MP157C
tags:
  - ODYSSEY
  - Getting started
keywords:
  - ODYSSEY
  - Getting started
image: https://avatars.githubusercontent.com/u/10758833
slug: /SEEED-SOM-STM32MP157C
last_update:
  date: 01/03/2023
  author: w0x7ce

---

![](https://files.seeedstudio.com/wiki/STM32_SoM.png/SoM_thumb.png)

SOM - STM32MP157C is the SOM based on STM32MP157C, STM32MP157C is a dual-core arm-cortex-a7 core processor operating at 650Mhz, the processor is also integrated with the Arm cortex-m4 coprocessor, Arm cortex-m4 integrates FPU and MPU. Cortex-a7 mainly does things at the operating system level, Cortex-m handles things at the MCU level. It can reach the optimal state at any time, making it suitable for various application scenarios.

## Features

- Dual-core Arm-Cortex-A7 core processor with Cortex-M4 integrated
- Open-source hardware/SDK/API/BSP/OS
- ODYSSEY – STM32MP157C SoM
- 4GB eMMC, rich interfaces for development

## Applications

- Industrial (CAN-Ethernet gateways etc)
- White goods(refrigerators, microwaves etc)
- Medical(data loggers etc)
- High-end wearables(VR device etc)
- Smart Home Devices

## Specifications

|Item|Value|
|----|------|
|MPU(STM32MP157C)|1 x 32-bit dual-core Arm Cortex-A7 <br /> 1 x 32-bit Arm Cortex-M4 with FPU/MPU|
|PMU|1 x ST PMIC STPMIC1A |
|RAM|1 x 512MB DDR3 RAM|
|Flash|1 x 4GB EMMC|
|Peripheral Interface|3 x board-to-board 70-Pin connector|
|dimension|38mm x 38mm|

## Hardware

Here are the hardware details for Seeed SoM - STM32MP157C:

![](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/IMG/SOM-overview.png)

- **1.STM32MP157C:** Development board main control chip(Dual architecture processor: Arm® Cortex®-A7 and Cortex®-M4 )

- **2.MT41K256M16TW-107:P:** 512M16bitRAM Memory Chip

- **3.STPMIC1APQR:** Power Management Chip

- **4.EMMC04G-M627:** 4GeMMC Memory

- **5.LED:** When the power supply is successful, the PWR will go on. When the system is running normally, the USER will keep flashing.

- **6.70-PIN connector:** You can find the function for each pin from the table below:

<table style={{tableLayout: 'fixed', width: 597}}>

<!-- <colgroup>
  <col style="width: 100px">
  <col style="width: 90px">
  <col style="width: 130px">
  <col style="width: 70px">
  <col style="width: 240px">
  <col style="width: 140px">
</colgroup> -->

<thead>
  <div>
    Pin <br />Package <br />Number
    Pin <br />Number
    Pin <br />Name
    Pin <br />Type
    Optional Function
    Additional<br />Function
  </div>
</thead>

<tbody>
  <tr>
    <td>-</td>
    <td>1</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>2</td>
    <td>3V3</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>3</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>4</td>
    <td>3V3</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>5</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>6</td>
    <td>3V3</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>7</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>8</td>
    <td>3V3</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>9</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>10</td>
    <td>3V3</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>11</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>12</td>
    <td>VDD</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>13</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>14</td>
    <td>VDD</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>15</td>
    <td>5V_VIN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>16</td>
    <td>VBUS_OTG</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>17</td>
    <td>BST_OUT</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>18</td>
    <td>VBUS_OTG</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>19</td>
    <td>BST_OUT</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>20</td>
    <td>VBUS_SW</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>21</td>
    <td>BST_OUT</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>22</td>
    <td>VBUS_SW</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>23</td>
    <td>1V8_AUDIO</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>24</td>
    <td>VBUS_SW</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>25</td>
    <td>1V2_HDMI</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>26</td>
    <td>VBAT</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>27</td>
    <td>3V3_HDMI</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>28</td>
    <td>VBAT</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>29</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>30</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>R4</td>
    <td>31</td>
    <td>VREF+</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC4</td>
    <td>32</td>
    <td>PF14</td>
    <td>I/O</td>
    <td>
    <div>
      TRACED6,DFSDM1_CKIN6,<br />I2C4_SCL,I2C1_SCL,<br />ETH1_GMII_RXD6,<br />FMC_A8,EVENTOUT
    </div>
    </td>
    <td>
    <div>
    ADC2_INP6,<br />ADC2_INN2
    </div>
  </td>
  </tr>
  <tr>
    <td>Y5</td>
    <td>33</td>
    <td>PF13</td>
    <td>I/O</td>
    <td>
    <div>
      TRACED5,DFSDM1_DATIN6,<br />I2C4_SMBA,I2C1_SMBA,<br />DFSDM1_DATIN3,<br />ETH1_GMII_RXD5,<br />FMC_A7,EVENTOUT
    </div>
  </td>
    <td>ADC2_INP2</td>
  </tr>
  <tr>
    <td>Y4</td>
    <td>34</td>
    <td>PF15</td>
    <td>I/O</td>
    <td>
    <div>
        TRACED7,I2C4_SDA,<br />I2C1_SDA,<br />ETH1_GMII_RXD7,<br />FMC_A9, EVENTOUT
    </div>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>35</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>L3</td>
    <td>36</td>
    <td>PD14</td>
    <td>I/O</td>
    <td>
    <div>
      TIM4_CH3,SAI3_MCLK_B,<br />UART8_CTS,FMC_AD0/<br />FMC_D0,EVENTOUT
    </div>
    </td>
    <td>-</td>
  </tr>
  <tr>
    <td>U3</td>
    <td>37</td>
    <td>ANA0</td>
    <td>A</td>
    <td>-</td>
    <td>
    <div>
      ADC1_INP0,<br />ADC1_INN1,<br />ADC2_INP0,<br />ADC2_INN1
    </div>
    </td>
  </tr>
  <tr>
    <td>J2</td>
    <td>38</td>
    <td>PD15</td>
    <td>I/O</td>
    <td><div>TIM4_CH4,SAI3_MCLK_A,<br />UART8_CTS,FMC_AD1/<br />FMC_D1,LCD_R1,EVENTOUT</div></td>
    <td>-</td>
  </tr>
  <tr>
    <td>U4</td>
    <td>39</td>
    <td>ANA1</td>
    <td>A</td>
    <td>-</td>
    <td>
    <div>
    ADC1_INP1,<br />ADC2_INP1
    </div>
</td>
  </tr>
  <tr>
    <td>R2</td>
    <td>40</td>
    <td>PWR_ON</td>
    <td>O</td>
    <td>-</td>
    <td>PWR_ONLP</td>
  </tr>
  <tr>
    <td>-</td>
    <td>41</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>K2</td>
    <td>42</td>
    <td>PC13</td>
    <td>I/O</td>
    <td>EVENTOUT</td>
    <td>
    <div>
  RTC_OUT1/<br />RTC_TS/<br />RTC_LSCO,<br />TAMP_IN1/<br />TAMP_OUT2/<br />TAMP_OUT3,<br />WKUP3
    </div>
    </td>
  </tr>
  <tr>
    <td>T2</td>
    <td>43</td>
    <td>PA14</td>
    <td>I/O</td>
    <td><div>
  DBTRGO,DBTRGI,MCO2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB3</td>
    <td>44</td>
    <td>PA0</td>
    <td>I/O</td>
    <td><div>
  TIM2_CH1/TIM2_ETR,<br />TIM5_CH1,TIM8_ETR,<br />TIM15_BKIN,USART2_CTS/<br />USART2_NSS,UART4_TX,<br />SDMMC2_CMD,SAI2_SD_B,<br />ETH1_GMII_CRS/<br />ETH1_MII_CRS,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP16,<br />WKUP1
</div>
</td>
  </tr>
  <tr>
    <td>G2</td>
    <td>45</td>
    <td>PZ4</td>
    <td>I/O</td>
    <td><div>
  I2C6_SCL,I2C2_SCL,<br />I2C5_SCL,I2C4_SCL,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>46</td>
    <td>PONKEYN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B6</td>
    <td>47</td>
    <td>PD4</td>
    <td>I/O</td>
    <td><div>
  SAI3_FS_A,USART2_RTS/<br />USART2_DE,SDMMC3_D1,<br />DFSDM1_CKIN0,FMC_NOE,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>48</td>
    <td>GDN</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y9</td>
    <td>49</td>
    <td>PF12</td>
    <td>I/O</td>
    <td><div>
  TRACED4,<br />ETH1_GMII_RXD4,<br />FMC_A6,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP6,<br />ADC1_INN2
</div>
</td>
  </tr>
  <tr>
    <td>M3</td>
    <td>50</td>
    <td>NRST</td>
    <td>I/O</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC11</td>
    <td>51</td>
    <td>PF8</td>
    <td>I/O</td>
    <td><div>
  TRACED12,TIM16_CH1N,<br />SPI5_MISO,SAI1_SCK_B,<br />UART7_RTS/UART7_DE,<br />TIM13_CH1,<br />QUADSPI_BK1_IO0,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C20</td>
    <td>52</td>
    <td>JTMS-SWDIO</td>
    <td>I/O</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>U1</td>
    <td>53</td>
    <td>PF3</td>
    <td>I/O</td>
    <td><div>
  ETH1_GMII_TX_ER,FMC_A3,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B20</td>
    <td>54</td>
    <td>JTCK-SWCLK</td>
    <td>I</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y7</td>
    <td>55</td>
    <td>PG11</td>
    <td>I/O</td>
    <td><div>
  TRACED11,USART1_TX,<br />UART4_TX,SPDIFRX_IN0,<br />ETH1_GMII_TX_EN/<br />ETH1_MII_TX_EN/<br />ETH1_RGMII_TX_CTL/<br />ETH1_RMII_TX_EN,<br />DCMI_D3,LCD_B3,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A20</td>
    <td>56</td>
    <td>JTDI</td>
    <td>I</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>57</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A19</td>
    <td>58</td>
    <td>JTDO-TRACESWO</td>
    <td>O</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>59</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B19</td>
    <td>60</td>
    <td>NJTRST</td>
    <td>I</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB17</td>
    <td>61</td>
    <td>USB_DM1</td>
    <td>A</td>
    <td>-</td>
    <td>USBH_HS_DM1</td>
  </tr>
  <tr>
    <td>-</td>
    <td>62</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC17</td>
    <td>63</td>
    <td>USB_DP1</td>
    <td>A</td>
    <td>-</td>
    <td>USBH_HS_DP1</td>
  </tr>
  <tr>
    <td>Y8</td>
    <td>64</td>
    <td>PB5</td>
    <td>I/O</td>
    <td><div>
  ETH_CLK,TIM17_BKIN,<br />TIM3_CH2,SAI4_D1,<br />I2C1_SMBA,SPI1_MOSI/<br />I2S1_SDO,I2C4_SMBA,<br />SPI3_MOSI/I2S3_SDO,<br />SPI6_MOSI,FDCAN2_RX,<br />SAI4_SD_A,ETH1_PPS_OUT,<br />UART5_RX,DCMI_D10,<br />LCD_G7,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>65</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA10</td>
    <td>66</td>
    <td>PB13</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH1N,DFSDM1_CKOUT,<br />LPTIM2_OUT,SPI2_SCK/<br />I2S2_CK,DFSDM1_CKIN1,<br />USART3_CTS/USART3_NSS,<br />FDCAN2_TX,<br />ETH1_GMII_TXD1/<br />ETH1_MII_TXD1/<br />ETH1_RGMII_TXD1/<br />ETH1_RMII_TXD1,<br />UART5_TX,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB16</td>
    <td>67</td>
    <td>USB_DM2</td>
    <td>A</td>
    <td>-</td>
    <td><div>
  USBH_HS_DM2,<br />OTG_HS_DM
</div>
</td>
  </tr>
  <tr>
    <td>B8</td>
    <td>68</td>
    <td>PD0</td>
    <td>I/O</td>
    <td><div>
  I2C6_SDA,DFSDM1_CKIN6,<br />I2C5_SDA,SAI3_SCK_A,<br />UART4_RX,FDCAN1_RX,<br />SDMMC3_CMD,<br />DFSDM1_DATIN7,<br />FMC_AD2/FMC_D2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC16</td>
    <td>69</td>
    <td>USB_DP2</td>
    <td>A</td>
    <td>-</td>
    <td><div>
  USBH_HS_DP2,<br />OTG_HS_DP
</div>
</td>
  </tr>
  <tr>
    <td>B9</td>
    <td>70</td>
    <td>PD1</td>
    <td>I/O</td>
    <td>
    <div>
      I2C6_SCL,DFSDM1_DATIN6,<br />I2C5_SCL,SAI3_SD_A,<br />UART4_TX,FDCAN1_TX,<br />SDMMC3_D0,DFSDM1_CKIN7,<br />FMC_AD3/FMC_D3,EVENTOUT
    </div>
    </td>
    <td>-</td>
  </tr>
</tbody>
</table>

- **7.70-PIN connector:** You can find the function for each pin from the table below:

<table style={{tableLayout: 'fixed', width: 597}}>

<!-- <colgroup>
<col style="width: 90px">
<col style="width: 80px">
<col style="width: 120px">
<col style="width: 60px">
<col style="width: 280px">
<col style="width: 140px">
</colgroup> -->

<thead>
  <tr>
    <th><div>
  Pin<br />Package<br />Number
</div>
</th>
    <th><div>
  Pin<br />Number
</div>
</th>
    <th><div>
  Pin<br />Name
</div>
</th>
    <th><div>
  Pin<br />Type
</div>
</th>
    <th>Optional Function</th>
    <th><div>
  Additional<br />Function
</div>
</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>D2</td>
    <td>1</td>
    <td>PD6</td>
    <td>I/O</td>
    <td><div>
  TIM16_CH1N,SAI1_D1,<br />DFSDM1_CKIN4,<br />DFSDM1_DATIN1,<br />SPI3_MOSI/I2S3_SDO,<br />SAI1_SD_A,USART2_RX,<br />FMC_NWAIT,DCMI_D10,LCD_B2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB19</td>
    <td>2</td>
    <td>PA12</td>
    <td>I/O</td>
    <td><div>
  TIM1_ETR,I2C6_SDA,I2C5_SDA,<br />UART4_TX,USART1_RTS/<br />USART1_DE,SAI2_FS_B,<br />FDCAN1_TX,LCD_R5,EVENTOUT
</div>
</td>
    <td>OTG_FS_DP</td>
  </tr>
  <tr>
    <td>D7</td>
    <td>3</td>
    <td>PF5</td>
    <td>I/O</td>
    <td><div>
  USART2_TX,SDMMC3_D2,<br />FMC_A5,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA18</td>
    <td>4</td>
    <td>PA11</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH4,I2C6_SCL,I2C5_SCL,<br />SPI2_NSS/I2S2_WS,UART4_RX,<br />USART1_CTS/USART1_NSS,<br />FDCAN1_RX,LCD_R4,<br />EVENTOUT
</div>
</td>
    <td>OTG_FS_DM</td>
  </tr>
  <tr>
    <td>N1</td>
    <td>5</td>
    <td>BOOT0</td>
    <td>I</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>P4</td>
    <td>6</td>
    <td>PI11</td>
    <td>I/O</td>
    <td><div>
  MCO1,I2S_CKIN,LCD_G6,<br />EVENTOUT
</div>
</td>
    <td>WKUP5</td>
  </tr>
  <tr>
    <td>N4</td>
    <td>7</td>
    <td>BOOT1</td>
    <td>I</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC19</td>
    <td>8</td>
    <td>OTG_VBUS</td>
    <td>A</td>
    <td>-</td>
    <td><div>
  OTG_FS_VBUS,<br />OTG_HS_VBUS
</div>
</td>
  </tr>
  <tr>
    <td>M2</td>
    <td>9</td>
    <td>BOOT2</td>
    <td>I</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>10</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>11</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC10</td>
    <td>12</td>
    <td>PD11</td>
    <td>I/O</td>
    <td><div>
  LPTIM2_IN2,I2C4_SMBA,<br />I2C1_SMBA,USART3_CTS/<br />USART3_NSS,<br />QUADSPI_BK1_IO0,SAI2_SD_A,<br />FMC_A16/FMC_CLE,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>F3</td>
    <td>13</td>
    <td>PI5</td>
    <td>I/O</td>
    <td><div>
  TIM8_CH1,SAI2_SCK_A,<br />DCMI_VSYNC,LCD_B5,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y18</td>
    <td>14</td>
    <td>PD12</td>
    <td>I/O</td>
    <td><div>
  LPTIM1_IN1,TIM4_CH1,<br />LPTIM2_IN1,I2C4_SCL,I2C1_SCL,<br />USART3_RTS/USART3_DE,<br />QUADSPI_BK1_IO1,SAI2_FS_A,<br />FMC_A17/FMC_ALE,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>F2</td>
    <td>15</td>
    <td>PI7</td>
    <td>I/O</td>
    <td><div>
  TIM8_CH3,SAI2_FS_A,DCMI_D7,<br />LCD_B7,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB12</td>
    <td>16</td>
    <td>PF7</td>
    <td>I/O</td>
    <td><div>
  TIM17_CH1,SPI5_SCK,<br />SAI1_MCLK_B,UART7_TX,<br />QUADSPI_BK1_IO2,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>F4</td>
    <td>17</td>
    <td>PI6</td>
    <td>I/O</td>
    <td><div>
  TIM8_CH2,SAI2_SD_A,DCMI_D6,<br />LCD_B6,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA13</td>
    <td>18</td>
    <td>PF6</td>
    <td>I/O</td>
    <td><div>
  TIM16_CH1,SPI5_NSS,<br />SAI1_SD_B,UART7_RX,<br />QUADSPI_BK1_IO3,SAI4_SCK_B,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D6</td>
    <td>19</td>
    <td>PE0</td>
    <td>I/O</td>
    <td><div>
  LPTIM1_ETR,TIM4_ETR,<br />LPTIM2_ETR,SPI3_SCK/<br />I2S3_CK,SAI4_MCLK_B,<br />UART8_RX,SAI2_MCLK_A,<br />FMC_NBL0,DCMI_D2,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA11</td>
    <td>20</td>
    <td>PE7</td>
    <td>I/O</td>
    <td><div>
  TIM1_ETR,TIM3_ETR,<br />DFSDM1_DATIN2,UART7_RX,<br />QUADSPI_BK2_IO0,FMC_AD4/<br />FMC_D4,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y10</td>
    <td>21</td>
    <td>PF11</td>
    <td>I/O</td>
    <td><div>
  SPI5_MOSI,SAI2_SD_B,<br />DCMI_D12,LCD_G5,EVENTOUT
</div>
</td>
    <td>ADC1_INP2</td>
  </tr>
  <tr>
    <td>AC13</td>
    <td>22</td>
    <td>PE8</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH1N,DFSDM1_CKIN2,<br />UART7_TX,QUADSPI_BK2_IO1,<br />FMC_AD5/FMC_D5,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y13</td>
    <td>23</td>
    <td>PG9</td>
    <td>I/O</td>
    <td><div>
  DBTRGO,USART6_RX,<br />SPDIFRX_IN3,<br />QUADSPI_BK2_IO2,<br />SAI2_FS_B,FMC_NE2/FMC_NCE,<br />DCMI_VSYNC,LCD_R1,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA9</td>
    <td>24</td>
    <td>PE9</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH1,DFSDM1_CKOUT,<br />UART7_RTS/UART7_DE,<br />QUADSPI_BK2_IO2,FMC_AD6/<br />FMC_D6，EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>25</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y15</td>
    <td>26</td>
    <td>PE10</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH2N,DFSDM1_DATIN4,<br />UART7_CTS,QUADSPI_BK2_IO3,<br />FMC_AD7/FMC_D7,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D18</td>
    <td>27</td>
    <td>PC8</td>
    <td>I/O</td>
    <td><div>
  TRACED0,TIM3_CH3,TIM8_CH3,<br />UART4_TX,USART6_CK,<br />UART5_RTS/UART5_DE,<br />SDMMC1_D0,DCMI_D2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y16</td>
    <td>28</td>
    <td>PB2</td>
    <td>I/O</td>
    <td><div>
  TRACED4,RTC_OUT2,SAI1_D1,<br />DFSDM1_CKIN1,USART1_RX,<br />I2S_CKIN,SAI1_SD_A,<br />SPI3_MOSI/I2S3_SDO,<br />UART4_RX,QUADSPI_CLK,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D17</td>
    <td>29</td>
    <td>PC9</td>
    <td>I/O</td>
    <td><div>
  TRACED1,TIM3_CH4,<br />TIM8_CH4,I2C3_SDA,I2S_CKIN,<br />UART5_CTS,<br />QUADSPI_BK1_IO0,<br />SDMMC1_D1,DCMI_D3,LCD_B2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>30</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D15</td>
    <td>31</td>
    <td>PC10</td>
    <td>I/O</td>
    <td><div>
  TRACED2,DFSDM1_CKIN5,<br />SPI3_SCK/I2S3_CK,USART3_TX,<br />UART4_TX,QUADSPI_BK1_IO1,<br />SAI4_MCLK_B,SDMMC1_D2,<br />DCMI_D8,LCD_R2,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B3</td>
    <td>32</td>
    <td>PH4</td>
    <td>I/O</td>
    <td><div>
  I2C2_SCL,LCD_G5,LCD_G4,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D16</td>
    <td>33</td>
    <td>PC11</td>
    <td>I/O</td>
    <td><div>
  TRACED3,DFSDM1_DATIN5,<br />SPI3_MISO/I2S3_SDI,<br />USART3_RX,UART4_RX,<br />QUADSPI_BK2_NCS,<br />SAI4_SCK_B,SDMMC1_D3,<br />DCMI_D4,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A2</td>
    <td>34</td>
    <td>PH5</td>
    <td>I/O</td>
    <td><div>
  I2C2_SDA,SPI5_NSS,<br />SAI4_SD_B,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D12</td>
    <td>35</td>
    <td>PD2</td>
    <td>I/O</td>
    <td><div>
  TIM3_ETR,I2C5_SMBA,<br />UART4_RX,UART5_RX,<br />SDMMC1_CMD,DCMI_D11,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>J4</td>
    <td>36</td>
    <td>PZ2</td>
    <td>I/O</td>
    <td><div>
  I2C6_SCL,I2C2_SCL,<br />I2C5_SMBA,SPI1_MOSI/<br />I2S1_SDO,I2C4_SMBA,<br />USART1_TX,SPI6_MOSI,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D13</td>
    <td>37</td>
    <td>PC12</td>
    <td>I/O</td>
    <td><div>
  TRACECLK,MCO2,SAI4_D3,<br />SPI3_MOSI/I2S3_SDO,<br />USART3_CK,UART5_TX,<br />SAI4_SD_B,SDMMC1_CK,<br />DCMI_D9,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>G1</td>
    <td>38</td>
    <td>PZ1</td>
    <td>I/O</td>
    <td><div>
  I2C6_SDA,I2C2_SDA,I2C5_SDA,<br />SPI1_MISO/I2S1_SDI,I2C4_SDA,<br />USART1_RX,SPI6_MISO,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>E1</td>
    <td>39</td>
    <td>PI3</td>
    <td>I/O</td>
    <td><div>
  TIM8_ETR,SPI2_MOSI/I2S2_SDO,<br />DCMI_D10,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>G3</td>
    <td>40</td>
    <td>PZ0</td>
    <td>I/O</td>
    <td><div>
  HDP1,UART4_RX,FDCAN1_RX,<br />LCD_VSYNC,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>41</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA14</td>
    <td>42</td>
    <td>PF9</td>
    <td>I/O</td>
    <td><div>
  TRACED13,TIM17_CH1N,<br />SPI5_MOSI,SAI1_FS_B,<br />UART7_CTS,TIM14_CH1,<br />QUADSPI_BK1_IO1,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A17</td>
    <td>43</td>
    <td>DSI_D1N</td>
    <td>A</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>W4</td>
    <td>44</td>
    <td>PH7</td>
    <td>I/O</td>
    <td><div>
  I2C3_SCL,SPI5_MISO,<br />ETH1_GMII_RXD3/<br />ETH1_MII_RXD3/<br />ETH1_RGMII_RXD3,<br />MDIOS_MDC,DCMI_D9,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B17</td>
    <td>45</td>
    <td>DSI_D1P</td>
    <td>A</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y11</td>
    <td>46</td>
    <td>PH6</td>
    <td>I/O</td>
    <td><div>
  TIM12_CH1,I2C2_SMBA,<br />SPI5_SCK,ETH1_GMII_RXD2/<br />ETH1_MII_RXD2/<br />ETH1_RGMII_RXD2,<br />MDIOS_MDIO,DCMI_D8,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>47</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>48</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A16</td>
    <td>49</td>
    <td>DSI_CKN</td>
    <td>A</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>L4</td>
    <td>50</td>
    <td>PI8</td>
    <td>I/O</td>
    <td>EVENTOUT</td>
    <td><div>
  RTC_OUT2/<br />RTC_LSCO,<br />TAMP_IN2/<br />TAMP_OUT3,<br />WKUP4
</div>
</td>
  </tr>
  <tr>
    <td>B16</td>
    <td>51</td>
    <td>DSI_CKP</td>
    <td>A</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>J3</td>
    <td>52</td>
    <td>PZ7</td>
    <td>I/O</td>
    <td><div>
  I2C6_SDA,I2C2_SDA,<br />USART1_TX,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>53</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>H1</td>
    <td>54</td>
    <td>PZ6</td>
    <td>I/O</td>
    <td><div>
  I2C6_SCL,I2C2_SCL,<br />USART1_CK,I2S1_MCK,<br />I2C4_SMBA,USART1_RX,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B15</td>
    <td>55</td>
    <td>DSI_D0N</td>
    <td>A</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>G4</td>
    <td>56</td>
    <td>PZ3</td>
    <td>I/O</td>
    <td><div>
  I2C6_SDA,I2C2_SDA,<br />I2C5_SDA,SPI1_NSS/<br />I2S1_WS,I2C4_SDA,<br />USART1_CTS/USART1_NSS,<br />SPI6_NSS,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C15</td>
    <td>57</td>
    <td>DSI_D0P</td>
    <td>A</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>H2</td>
    <td>58</td>
    <td>PZ5</td>
    <td>I/O</td>
    <td><div>
  I2C6_SDA,I2C2_SDA,<br />I2C5_SDA,I2C4_SDA,<br />USART1_RTS/USART1_DE,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>59</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D8</td>
    <td>60</td>
    <td>PF0</td>
    <td>I/O</td>
    <td><div>
  I2C2_SDA,SDMMC3_D0,<br />SDMMC3_CKIN,FMC_A0,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A14</td>
    <td>61</td>
    <td>PF2</td>
    <td>I/O</td>
    <td><div>
  I2C2_SMBA,SDMMC2_D0DIR,<br />SDMMC3_D0DIR,<br />SDMMC1_D0DIR,FMC_A2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D9</td>
    <td>62</td>
    <td>PF4</td>
    <td>I/O</td>
    <td><div>
  USART2_RX,SDMMC3_D1,<br />SDMMC3_D123DIR,<br />FMC_A4,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA19</td>
    <td>63</td>
    <td>PD13</td>
    <td>I/O</td>
    <td><div>
  LPTIM1_OUT,TIM4_CH2,<br />I2C4_SDA,I2C1_SDA,<br />I2S3_MCK,QUADSPI_BK1_IO3,<br />SAI2_SCK_A,FMC_A18,DSI_TE,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A7</td>
    <td>64</td>
    <td>PD5</td>
    <td>I/O</td>
    <td><div>
  USART2_TX,SDMMC3_D2,<br />FMC_NWE,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C19</td>
    <td>65</td>
    <td>PA15</td>
    <td>I/O</td>
    <td><div>
  DBTRGI,TIM2_CH1/TIM2_ETR,<br />SAI4_D2,SDMMC1_CDIR,CEC,<br />SPI1_NSS/I2S1_WS,<br />SPI3_NSS/I2S3_WS,<br />SPI6_NSS,UART4_RTS/<br />UART4_DE,SDMMC2_D5,<br />SDMMC2_CDIR,<br />SDMMC1_D5,SAI4_FS_A,<br />UART7_TX,LCD_R1,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D10</td>
    <td>66</td>
    <td>PD7</td>
    <td>I/O</td>
    <td><div>
  TRACED6,DFSDM1_DATIN4,<br />I2C2_SCL,DFSDM1_CKIN1,<br />USART2_CK,SPDIFRX_IN0,<br />SDMMC3_D3,FMC_NE1,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D19</td>
    <td>67</td>
    <td>PE4</td>
    <td>I/O</td>
    <td><div>
  TRACED1,SAI1_D2,<br />DFSDM1_DATIN3,TIM15_CH1N,<br />SPI4_NSS,SAI1_FS_A,<br />SDMMC2_CKIN,SDMMC1_CKIN,<br />SDMMC2_D4,SDMMC1_D4,<br />FMC_A20,DCMI_D4,LCD_B
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A5</td>
    <td>68</td>
    <td>PF1</td>
    <td>I/O</td>
    <td><div>
  I2C2_SCL,SDMMC3_CMD,<br />SDMMC3_CDIR,FMC_A1,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>69</td>
    <td>GND</td>
    <td>S</td>
    <td></td>
    <td>-</td>
  </tr>
  <tr>
    <td>B7</td>
    <td>70</td>
    <td>PG15</td>
    <td>I/O</td>
    <td><div>
  TRACED7,SAI1_D2,I2C2_SDA,<br />SAI1_FS_A,USART6_CTS/<br />USART6_NSS,SDMMC3_CK,<br />DCMI_D13,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
</tbody>
</table>

- **8.70-PIN connector:** You can find the function for each pin from the table below:

<table style={{tableLayout: 'fixed', width: 597}}>

<!-- <colgroup>
<col style="width: 90px">
<col style="width: 80px">
<col style="width: 120px">
<col style="width: 60px">
<col style="width: 280px">
<col style="width: 140px">
</colgroup> -->

<thead>
  <tr>
    <th><div>
  Pin<br />Package<br />Number
</div>
</th>
    <th><div>
  Pin<br />Number
</div>
</th>
    <th><div>
  Pin<br />Name
</div>
</th>
    <th><div>
  Pin<br />Type
</div>
</th>
    <th>Optional Function</th>
    <th><div>
  Additional<br />Function
</div>
</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Y3</td>
    <td>1</td>
    <td>PB10</td>
    <td>I/O</td>
    <td><div>
  TIM2_CH3,LPTIM2_IN1,I2C2_SCL,<br />SPI2_SCK/I2S2_CK,<br />DFSDM1_DATIN7,<br />USART3_TX,QUADSPI_BK1_NCS,<br />ETH1_GMII_RX_ER/<br />ETH1_MII_RX_ER,<br />LCD_G4,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC7</td>
    <td>2</td>
    <td>PC4</td>
    <td>I/O</td>
    <td><div>
  DFSDM1_CKIN2,I2S1_MCK,<br />SPDIFRX_IN2,ETH1_GMII_RXD0/<br />ETH1_MII_RXD0/ETH1_RGMII_RXD0/<br />ETH1_RMII_RXD0,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP4,<br />ADC2_INP4
</div>
</td>
  </tr>
  <tr>
    <td>AC5</td>
    <td>3</td>
    <td>PB12</td>
    <td>I/O</td>
    <td><div>
  TIM1_BKIN,I2C6_SMBA,<br />I2C2_SMBA,SPI2_NSS/<br />I2S2_WS,DFSDM1_DATIN1,<br />USART3_CK,USART3_RX,<br />FDCAN2_RX,<br />ETH1_GMII_TXD0/<br />ETH1_MII_TXD0/<br />ETH1_RGMII_TXD0/<br />ETH1_RMII_TXD0,<br />UART5_RX,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB7</td>
    <td>4</td>
    <td>PC5</td>
    <td>I/O</td>
    <td><div>
  SAI1_D3,DFSDM1_DATIN2,<br />SAI4_D4,SAI1_D4,<br />SPDIFRX_IN3,<br />ETH1_GMII_RXD1/<br />ETH1_MII_RXD1/<br />ETH1_RGMII_RXD1/<br />ETH1_RMII_RXD1,<br />SAI4_D3,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP8,<br />ADC1_INN4,<br />ADC2_INP8,<br />ADC2_INN4
</div>
</td>
  </tr>
  <tr>
    <td>W2</td>
    <td>5</td>
    <td>PC3</td>
    <td>I/O</td>
    <td><div>
  TRACECLK,DFSDM1_DATIN1,<br />SPI2_MOSI/I2S2_SDO,<br />ETH1_GMII_TX_CLK/<br />ETH1_MII_TX_CLK,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP13,<br />ADC1_INN12
</div>
</td>
  </tr>
  <tr>
    <td>AB6</td>
    <td>6</td>
    <td>PB0</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH2N,TIM3_CH3,TIM8_CH2N,<br />DFSDM1_CKOUT,UART4_CTS,<br />LCD_R3,ETH1_GMII_RXD2/<br />ETH1_MII_RXD2/<br />ETH1_RGMII_RXD2,MDIOS_MDIO,<br />LCD_G1,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP9,<br />ADC1_INN5,<br />ADC2_INP9,<br />ADC2_INN5
</div>
</td>
  </tr>
  <tr>
    <td>Y14</td>
    <td>7</td>
    <td>PB6</td>
    <td>I/O</td>
    <td><div>
  TIM16_CH1N,TIM4_CH1,I2C1_SCL,<br />CEC,I2C4_SCL,USART1_TX,<br />FDCAN2_TX,QUADSPI_BK1_NCS,<br />DFSDM1_DATIN5,UART5_TX,<br />DCMI_D5,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA7</td>
    <td>8</td>
    <td>PB1</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH3N,TIM3_CH4,TIM8_CH3N,<br />DFSDM1_DATIN1,LCD_R6,<br />ETH1_GMII_RXD3/ETH1_MII_RXD3/<br />ETH1_RGMII_RXD3,MDIOS_MDC,<br />LCD_G0,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP5,<br />ADC2_INP5
</div>
</td>
  </tr>
  <tr>
    <td>W1</td>
    <td>9</td>
    <td>PG1</td>
    <td>I/O</td>
    <td><div>
  TRACED1,ETH1_GMII_TXD5,<br />FMC_A11,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB8</td>
    <td>10</td>
    <td>PA7</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH1N,TIM3_CH2,TIM8_CH1N,<br />SAI4_D1,SPI1_MOSI/I2S1_SDO,<br />SPI6_MOSI,TIM14_CH1,<br />QUADSPI_CLK,ETH1_GMII_RX_DV/<br />ETH1_MII_RX_DV/<br />ETH1_RGMII_RX_CTL/<br />ETH1_RMII_CRS_DV,SAI4_SD_A,<br />EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP7,<br />ADC1_INN3,<br />ADC2_INP7,<br />ADC2_INN3
</div>
</td>
  </tr>
  <tr>
    <td>Y17</td>
    <td>11</td>
    <td>PA10</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH3,SPI3_NSS/I2S3_WS,<br />USART1_RX,MDIOS_MDIO,<br />SAI4_FS_B,DCMI_D1,LCD_B1,<br />EVENTOUT
</div>
</td>
    <td><div>
  OTG_FS_ID,<br />OTG_HS_ID
</div>
</td>
  </tr>
  <tr>
    <td>Y6</td>
    <td>12</td>
    <td>PG5</td>
    <td>I/O</td>
    <td><div>
  TIM1_ETR,ETH1_GMII_CLK125/<br />ETH1_RGMII_CLK125,FMC_A15,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>13</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA4</td>
    <td>14</td>
    <td>PA1</td>
    <td>I/O</td>
    <td><div>
  ETH_CLK,TIM2_CH2,TIM5_CH2,<br />LPTIM3_OUT,TIM15_CH1N,<br />USART2_RTS/USART2_DE,<br />UART4_RX,QUADSPI_BK1_IO3,<br />SAI2_MCLK_B,<br />ETH1_GMII_RX_CLK/<br />ETH1_MII_RX_CLK/<br />ETH1_RGMII_RX_CLK/<br />ETH1_RMII_REF_CLK,LCD_R2,<br />EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP17,<br />ADC1_INN16
</div>
</td>
  </tr>
  <tr>
    <td>K3</td>
    <td>15</td>
    <td>PD8</td>
    <td>I/O</td>
    <td><div>
  DFSDM1_CKIN3,SAI3_SCK_B,<br />USART3_TX,SPDIFRX_IN1,<br />FMC_AD13/FMC_D13,LCD_B7,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>16</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB10</td>
    <td>17</td>
    <td>PB8</td>
    <td>I/O</td>
    <td><div>
  HDP6,TIM16_CH1,TIM4_CH3,<br />DFSDM1_CKIN7,I2C1_SCL,<br />SDMMC1_CKIN,I2C4_SCL,<br />SDMMC2_CKIN,UART4_RX,<br />FDCAN1_RX,SDMMC2_D4,<br />ETH1_GMII_TXD3/<br />ETH1_MII_TXD3/<br />ETH1_RGMII_TXD3,<br />SDMMC1_D4,DCMI_D6,<br />LCD_B6,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB2</td>
    <td>18</td>
    <td>PG4</td>
    <td>I/O</td>
    <td><div>
  TIM1_BKIN2,<br />ETH1_GMII_GTX_CLK/<br />ETH1_RGMII_GTX_CLK,<br />FMC_A14,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>U2</td>
    <td>19</td>
    <td>PA3</td>
    <td>I/O</td>
    <td><div>
  TIM2_CH4,TIM5_CH4,<br />LPTIM5_OUT,<br />TIM15_CH2,USART2_RX,<br />LCD_B2,ETH1_GMII_COL/<br />ETH1_MII_COL,LCD_B5,<br />EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP15,<br />PVD_IN
</div>
</td>
  </tr>
  <tr>
    <td>AA2</td>
    <td>20</td>
    <td>PG13</td>
    <td>I/O</td>
    <td><div>
  TRACED0,LPTIM1_OUT,<br />SAI1_CK2,SAI4_CK1,SPI6_SCK,<br />SAI1_SCK_A,USART6_CTS/<br />USART6_NSS,SAI4_MCLK_A,<br />ETH1_GMII_TXD0/<br />ETH1_MII_TXD0/<br />ETH1_RGMII_TXD0/<br />ETH1_RMII_TXD0,<br />FMC_A24,LCD_R0, EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>E4</td>
    <td>21</td>
    <td>PI4</td>
    <td>I/O</td>
    <td><div>
  TIM8_BKIN,SAI2_MCLK_A,<br />DCMI_D5,LCD_B4,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA1</td>
    <td>22</td>
    <td>PG14</td>
    <td>I/O</td>
    <td><div>
  TRACED1,LPTIM1_ETR,<br />SPI6_MOSI,SAI4_D1,<br />USART6_TX,<br />QUADSPI_BK2_IO3,<br />SAI4_SD_A,ETH1_GMII_TXD1/<br />ETH1_MII_TXD1/<br />ETH1_RGMII_TXD1/<br />ETH1_RMII_TXD1,FMC_A25,<br />LCD_B0,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B5</td>
    <td>23</td>
    <td>PD10</td>
    <td>I/O</td>
    <td><div>
  RTC_REFIN,TIM16_BKIN,<br />DFSDM1_CKOUT,I2C5_SMBA,<br />SPI3_MISO/I2S3_SDI,SAI3_FS_B,<br />USART3_CK,FMC_AD15/<br />FMC_D15,LCD_B3,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y2</td>
    <td>24</td>
    <td>PC2</td>
    <td>I/O</td>
    <td><div>
  DFSDM1_CKIN1,SPI2_MISO/<br />I2S2_SDI,DFSDM1_CKOUT,<br />ETH1_GMII_TXD2/ETH1_MII_TXD2/<br />ETH1_RGMII_TXD2,DCMI_PIXCLK,<br />EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP12,<br />ADC1_INN11
</div>
</td>
  </tr>
  <tr>
    <td>AB11</td>
    <td>25</td>
    <td>PG10</td>
    <td>I/O</td>
    <td><div>
  TRACED10,UART8_CTS,LCD_G3,<br />SAI2_SD_B,QUADSPI_BK2_IO2,<br />FMC_NE3,DCMI_D2,LCD_B2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y1</td>
    <td>26</td>
    <td>PE2</td>
    <td>I/O</td>
    <td><div>
  TRACECLK,SAI1_CK1,I2C4_SCL,<br />SPI4_SCK,SAI1_MCLK_A,<br />QUADSPI_BK1_IO2,<br />ETH1_GMII_TXD3/<br />ETH1_MII_TXD3/<br />ETH1_RGMII_TXD3,<br />FMC_A23,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>K4</td>
    <td>27</td>
    <td>PG12</td>
    <td>I/O</td>
    <td><div>
  LPTIM1_IN1,SPI6_MISO,<br />SAI4_CK2,USART6_RTS/<br />USART6_DE,SPDIFRX_IN1,<br />LCD_B4,SAI4_SCK_A,<br />ETH1_PHY_INTN,FMC_NE4,<br />LCD_B1,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB1</td>
    <td>28</td>
    <td>PB11</td>
    <td>I/O</td>
    <td><div>
  TIM2_CH4,LPTIM2_ETR,<br />I2C2_SDA,DFSDM1_CKIN7,<br />USART3_RX,ETH1_GMII_TX_EN/<br />ETH1_MII_TX_EN/<br />ETH1_RGMII_TX_CTL/<br />ETH1_RMII_TX_EN,<br />DSI_TE,LCD_G5,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>K1</td>
    <td>29</td>
    <td>PD9</td>
    <td>I/O</td>
    <td><div>
  DFSDM1_DATIN3,SAI3_SD_B,<br />USART3_RX,FMC_AD14/<br />FMC_D14,DCMI_HSYNC,<br />LCD_B0,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>30</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>E2</td>
    <td>31</td>
    <td>PI2</td>
    <td>I/O</td>
    <td><div>
  TIM8_CH4,SPI2_MISO/I2S2_SDI,<br />DCMI_D9,LCD_G7,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA6</td>
    <td>32</td>
    <td>PC1</td>
    <td>I/O</td>
    <td><div>
  TRACED0,SAI1_D1,<br />DFSDM1_DATIN0,<br />DFSDM1_CKIN4,SPI2_MOSI/<br />I2S2_SDO,SAI1_SD_A,<br />SDMMC2_CK,ETH1_MDC,<br />MDIOS_MDC,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP11,<br />ADC1_INN10,<br />ADC2_INP11,<br />ADC2_INN10,<br />TAMP_IN3,<br />WKUP6
</div>
</td>
  </tr>
  <tr>
    <td>E3</td>
    <td>33</td>
    <td>PI1</td>
    <td>I/O</td>
    <td><div>
  TIM8_BKIN2,SPI2_SCK/I2S2_CK,<br />DCMI_D8,LCD_G6,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC3</td>
    <td>34</td>
    <td>PA2</td>
    <td>I/O</td>
    <td><div>
  TIM2_CH3,TIM5_CH3,<br />LPTIM4_OUT,TIM15_CH1,<br />USART2_TX,SAI2_SCK_B,<br />SDMMC2_D0DIR,ETH1_MDIO,<br />MDIOS_MDIO,LCD_R1,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP14,<br />WKUP2
</div>
</td>
  </tr>
  <tr>
    <td>C1</td>
    <td>35</td>
    <td>PI0</td>
    <td>I/O</td>
    <td><div>
  TIM5_CH4,SPI2_NSS/I2S2_WS,<br />DCMI_D13,LCD_G5,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>36</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B1</td>
    <td>37</td>
    <td>PH15</td>
    <td>I/O</td>
    <td><div>
  TIM8_CH3N,DCMI_D11,LCD_G4,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC2</td>
    <td>38</td>
    <td>PG0</td>
    <td>I/O</td>
    <td><div>
  TRACED0,DFSDM1_DATIN0,<br />ETH1_GMII_TXD4,FMC_A10,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C3</td>
    <td>39</td>
    <td>PH14</td>
    <td>I/O</td>
    <td><div>
  TIM8_CH2N,UART4_RX,<br />FDCAN1_RX,DCMI_D4,LCD_G3,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>V2</td>
    <td>40</td>
    <td>PG2</td>
    <td>I/O</td>
    <td><div>
  TRACED2,MCO2,TIM8_BKIN,<br />ETH1_GMII_TXD6,FMC_A12,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D1</td>
    <td>41</td>
    <td>PH13</td>
    <td>I/O</td>
    <td><div>
  TIM8_CH1N,UART4_TX,<br />FDCAN1_TX,LCD_G2,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB9</td>
    <td>42</td>
    <td>PG8</td>
    <td>I/O</td>
    <td><div>
  TRACED15,TIM2_CH1/<br />TIM2_ETR,ETH_CLK,TIM8_ETR,<br />SPI6_NSS,SAI4_D2,<br />USART6_RTS/USART6_DE,<br />USART3_RTS/USART3_DE,<br />SPDIFRX_IN2,SAI4_FS_A,<br />ETH1_PPS_OUT,LCD_G7,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C10</td>
    <td>43</td>
    <td>PE6</td>
    <td>I/O</td>
    <td><div>
  TRACED2,TIM1_BKIN2,SAI1_D1,<br />TIM15_CH2,SPI4_MOSI,<br />SAI1_SD_A,SDMMC2_D0,<br />SDMMC1_D2,SAI2_MCLK_B,<br />FMC_A22,DCMI_D7,LCD_G1,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>-</td>
    <td>44</td>
    <td>GND</td>
    <td>S</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C6</td>
    <td>45</td>
    <td>PE14</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH4,SPI4_MOSI,<br />UART8_RTS/UART8_DE,<br />SAI2_MCLK_B,SDMMC1_D123DIR,<br />FMC_AD11/FMC_D11,LCD_G0,<br />LCD_CLK,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B14</td>
    <td>46</td>
    <td>PC6</td>
    <td>I/O</td>
    <td><div>
  HDP1,TIM3_CH1,TIM8_CH1,<br />DFSDM1_CKIN3,I2S2_MCK,<br />USART6_TX,SDMMC1_D0DIR,<br />SDMMC2_D0DIR,SDMMC2_D6,<br />DSI_TE,SDMMC1_D6,DCMI_D0,<br />LCD_HSYNC,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D3</td>
    <td>47</td>
    <td>PE15</td>
    <td>I/O</td>
    <td><div>
  HDP3,TIM1_BKIN,TIM15_BKIN,<br />USART2_CTS/USART2_NSS,<br />UART8_CTS,FMC_NCE2,<br />FMC_AD12/FMC_D12,<br />LCD_R7,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C2</td>
    <td>48</td>
    <td>PH10</td>
    <td>I/O</td>
    <td><div>
  TIM5_CH1,I2C4_SMBA,I2C1_SMBA,<br />DCMI_D1,LCD_R4,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B2</td>
    <td>49</td>
    <td>PH12</td>
    <td>I/O</td>
    <td><div>
  HDP2,TIM5_CH3,I2C4_SDA,<br />I2C1_SDA,DCMI_D3,LCD_R6,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C4</td>
    <td>50</td>
    <td>PH11</td>
    <td>I/O</td>
    <td><div>
  TIM5_CH2,I2C4_SCL,I2C1_SCL,<br />DCMI_D2,LCD_R5,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB5</td>
    <td>51</td>
    <td>PC0</td>
    <td>I/O</td>
    <td><div>
  DFSDM1_CKIN0,LPTIM2_IN2,<br />DFSDM1_DATIN4,SAI2_FS_B,<br />QUADSPI_BK2_NCS,LCD_R5,<br />EVENTOUT
  ADC1_INP10,<br />ADC2_INP10
</div>
</td>
  </tr>
  <tr>
    <td>C8</td>
    <td>52</td>
    <td>PE1</td>
    <td>I/O</td>
    <td><div>
  LPTIM1_IN2,I2S2_MCK,SAI3_SD_B,<br />UART8_TX,FMC_NBL1,DCMI_D3,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>V3</td>
    <td>53</td>
    <td>PA5</td>
    <td>I/O</td>
    <td><div>
  TIM2_CH1/TIM2_ETR,TIM8_CH1N,<br />SAI4_CK1,SPI1_SCK/I2S1_CK,<br />SPI6_SCK,SAI4_MCLK_A,LCD_R4,<br />EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP19,<br />ADC1_INN18,<br />ADC2_INP19,<br />ADC2_INN18,<br />DAC_OUT2
</div>
</td>
  </tr>
  <tr>
    <td>A4</td>
    <td>54</td>
    <td>PE11</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH2,DFSDM1_CKIN4,<br />SPI4_NSS,USART6_CK,SAI2_SD_B,<br />FMC_AD8/FMC_D8,DCMI_D4,<br />LCD_G3,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>C5</td>
    <td>55</td>
    <td>PH9</td>
    <td>I/O</td>
    <td><div>
  TIM12_CH2,I2C3_SMBA,DCMI_D0,<br />LCD_R3,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D14</td>
    <td>56</td>
    <td>PD3</td>
    <td>I/O</td>
    <td><div>
  HDP5,DFSDM1_CKOUT,SPI2_SCK/<br />I2S2_CK,DFSDM1_DATIN0,<br />USART2_CTS/USART2_NSS,<br />SDMMC1_D123DIR,SDMMC2_D7,<br />SDMMC2_D123DIR,SDMMC1_D7,<br />FMC_CLK,DCMI_D5,LCD_G7,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>57</td>
    <td>PH8</td>
    <td>I/O</td>
    <td><div>
  TIM5_ETR,I2C3_SDA,DCMI_HSYNC,<br />LCD_R2,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A3</td>
    <td>58</td>
    <td>PE13</td>
    <td>I/O</td>
    <td><div>
  HDP2,TIM1_CH3,DFSDM1_CKIN5,<br />SPI4_MISO,SAI2_FS_B,<br />FMC_AD10/FMC_D10,DCMI_D6,<br />LCD_DE,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AA3</td>
    <td>59</td>
    <td>PH3</td>
    <td>I/O</td>
    <td><div>
  DFSDM1_CKIN4,QUADSPI_BK2_IO1,<br />SAI2_MCLK_B,ETH1_GMII_COL/<br />ETH1_MII_COL,LCD_R1,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B10</td>
    <td>60</td>
    <td>PB9</td>
    <td>I/O</td>
    <td><div>
  HDP7,TIM17_CH1,TIM4_CH4,<br />DFSDM1_DATIN7,I2C1_SDA,<br />SPI2_NSS/I2S2_WS,I2C4_SDA,<br />SDMMC2_CDIR,UART4_TX,<br />FDCAN1_TX,SDMMC2_D5,<br />SDMMC1_CDIR,SDMMC1_D5,<br />DCMI_D7,LCD_B7,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AB4</td>
    <td>61</td>
    <td>PH2</td>
    <td>I/O</td>
    <td><div>
  LPTIM1_IN2,QUADSPI_BK2_IO0,<br />SAI2_SCK_B,ETH1_GMII_CRS/<br />ETH1_MII_CRS,LCD_R0,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>V4</td>
    <td>62</td>
    <td>PA4</td>
    <td>I/O</td>
    <td><div>
  HDP0,TIM5_ETR,SAI4_D2,<br />SPI1_NSS/I2S1_WS,SPI3_NSS/<br />I2S3_WS,USART2_CK,SPI6_NSS,<br />SAI4_FS_A,DCMI_HSYNC,<br />LCD_VSYNC,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP18,<br />ADC2_INP18,<br />DAC_OUT1
</div>
</td>
  </tr>
  <tr>
    <td>AC14</td>
    <td>63</td>
    <td>PG7</td>
    <td>I/O</td>
    <td><div>
  TRACED5,SAI1_MCLK_A,<br />USART6_CK,UART8_RTS/<br />UART8_DE,QUADSPI_CLK,<br />QUADSPI_BK2_IO3,DCMI_D13,<br />LCD_CLK,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>D11</td>
    <td>64</td>
    <td>PB7</td>
    <td>I/O</td>
    <td><div>
  TIM17_CH1N,TIM4_CH2,I2C1_SDA,<br />I2C4_SDA,USART1_RX,<br />SDMMC2_D1,DFSDM1_CKIN5,<br />FMC_NL,DCMI_VSYNC,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Y12</td>
    <td>65</td>
    <td>PF10</td>
    <td>I/O</td>
    <td><div>
  TIM16_BKIN,SAI1_D3,SAI4_D4,<br />SAI1_D4,QUADSPI_CLK,SAI4_D3,<br />DCMI_D11,LCD_DE,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AC8</td>
    <td>66</td>
    <td>PA6</td>
    <td>I/O</td>
    <td><div>
  TIM1_BKIN,TIM3_CH1,TIM8_BKIN,<br />SAI4_CK2,SPI1_MISO/I2S1_SDI,<br />SPI6_MISO,TIM13_CH1,<br />MDIOS_MDC,SAI4_SCK_A,<br />DCMI_PIXCLK,LCD_G2,EVENTOUT
</div>
</td>
    <td><div>
  ADC1_INP3,<br />ADC2_INP3
</div>
</td>
  </tr>
  <tr>
    <td>T1</td>
    <td>67</td>
    <td>PI10</td>
    <td>I/O</td>
    <td><div>
  HDP0,USART3_CTS/USART3_NSS,<br />ETH1_GMII_RX_ER/<br />ETH1_MII_RX_ER,LCD_HSYNC,<br />EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>N2</td>
    <td>68</td>
    <td>PA13</td>
    <td>I/O</td>
    <td><div>
  DBTRGO,DBTRGI,MCO1,UART4_TX,<br />EVENTOUT
</div>
</td>
    <td>BOOTFAILN</td>
  </tr>
  <tr>
    <td>H4</td>
    <td>69</td>
    <td>PI9</td>
    <td>I/O</td>
    <td><div>
  HDP1,UART4_RX,FDCAN1_RX,<br />LCD_VSYNC,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
  <tr>
    <td>B4</td>
    <td>70</td>
    <td>PE12</td>
    <td>I/O</td>
    <td><div>
  TIM1_CH3N,DFSDM1_DATIN5,<br />SPI4_SCK,SDMMC1_D0DIR,<br />SAI2_SCK_B,FMC_AD9/FMC_D9,<br />LCD_B4,EVENTOUT
</div>
</td>
    <td>-</td>
  </tr>
</tbody>
</table>

## Resourses

-----

- **[PDF]** [STM32MP157C Datasheet](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/stm32mp157c.pdf)
- **[PDF]** [Seeed STM32MP157C SOM Connecter Datasheet](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/SMD+BTB+CONN%3B70P-0.4-L15.52%C3%97W2.97%C3%97H1.14mm_Specification.pdf)
- **[PDF]** [Seeed STM32MP157C SOM v1.0 bottom.pdf](https://files.seeedstudio.com/wiki/SEEED-SOM-STM32MP157C/res/Seeed_SoM-STM32MP157C_v1.0_bottom.pdf)
- **[SCH]** [Seeed STM32MP157C SOM](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
