# Seeed SOM – STM32MP157C 
![](https://media-cdn.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/p/e/perspective-19.png)
SOM - STM32MP157C is the SOM based on STM32MP157C, STM32MP157C is a dual-core arm-cortex-a7 core processor operating at 650Mhz, the processor is also integrated with the Arm cortex-m4 coprocessor, Arm cortex-m4 integrates FPU and MPU. Cortex-a7 mainly does things at the operating system level, Cortex-m handles things at the MCU level. It can reach the optimal state at any time, making it suitable for various application scenarios.

<p style=":center"><a href="https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.1e729b66GJVV3r&id=533937368398" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Dual-core Arm-Cortex-A7 core processor with Cortex-M4 integrated
- Open-source hardware/SDK/API/BSP/OS
- ODYSSEY – STM32MP157C SoM
- 4GB eMMC, rich interfaces for development

## Application

- Industrial (CAN-Ethernet gateways etc)
- White goods(refrigerators, microwaves etc)
- Medical(data loggers etc)
- High-end wearables(VR device etc)
- Smart Home Devices

## Specification

|Item|Value|
|----|------|
|MPU(STM32MP157C)|1 x 32-bit dual-core Arm Cortex-A7 <br>1 x 32-bit Arm Cortex-M4 with FPU/MPU|
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

|Pin Package Number|Pin Number|Pin Name|Pin Type|Optional Function|Additional Function|
|:------:|:------:|:------:|:------:|:------:|:------:|
|-|1|5V_VIN|S|-|-|
|-|2|3V3|S|-|-|
|-|3|5V_VIN|S|-|-|
|-|4|3V3|S|-|-|
|-|5|5V_VIN|S|-|-|
|-|6|3V3|S|-|-|
|-|7|5V_VIN|S|-|-|
|-|8|3V3|S|-|-|
|-|9|5V_VIN|S|-|-|
|-|10|3V3|S|-|-|
|-|11|5V_VIN|S|-|-|
|-|12|VDD|S|-|-|
|-|13|5V_VIN|S|-|-|
|-|14|VDD|S|-|-|
|-|15|5V_VIN|S|-|-|
|-|16|VBUS_OTG|S|-|-|
|-|17|BST_OUT|S|-|-|
|-|18|VBUS_OTG|S|-|-|
|-|19|BST_OUT|S|-|-|
|-|20|VBUS_SW|S|-|-|
|-|21|BST_OUT|S|-|-|
|-|22|VBUS_SW|S|-|-|
|-|23|1V8_AUDIO|S|-|-|
|-|24|VBUS_SW|S|-|-|
|-|25|1V2_HDMI|S|-|-|
|-|26|VBAT|S|-|-|
|-|27|3V3_HDMI|S|-|-|
|-|28|VBAT|S|-|-|
|-|29|-|-|-|-|
|-|30|-|-|-|-|
|R4|31|VREF+|S|-|-|
|AC4|32|PF14|I/O|TRACED6, DFSDM1_CKIN6,I2C4_SCL, I2C1_SCL,ETH1_GMII_RXD6, FMC_A8,EVENTOUT|ADC2_INP6,ADC2_INN2|
|Y5|33|PF13|I/O|TRACED5, DFSDM1_DATIN6,I2C4_SMBA, I2C1_SMBA,DFSDM1_DATIN3,ETH1_GMII_RXD5, FMC_A7,EVENTOUT|ADC2_INP2|
|Y4|34|PF15|I/O|TRACED7, I2C4_SDA,I2C1_SDA, ETH1_GMII_RXD7,FMC_A9, EVENTOUT|-|
|-|35|GND|S|-|-|
|L3|36|PD14|I/O|TIM4_CH3, SAI3_MCLK_B,UART8_CTS,FMC_AD0/FMC_D0,EVENTOUT|-|
|U3|37|ANA0|A|-|ADC1_INP0,ADC1_INN1,ADC2_INP0,ADC2_INN1|
|J2|38|PD15|I/O|TIM4_CH4, SAI3_MCLK_A,UART8_CTS,FMC_AD1/FMC_D1,LCD_R1,EVENTOUT|-|
|U4|39|ANA1|A|-|ADC1_INP1,ADC2_INP1|
|R2|40|PWR_ON|O|-|PWR_ONLP|
|-|41|-|-|-|-|
|-|42|GND|S|-|-|
|-|43|-|-|-|-|
|-|44|PA14|I/O|DBTRGO, DBTRGI, MCO2, EVENTOUT|-|
|-|45|PONKEYN|I|-|-|
|-|46|-|-|-|-|
|-|47|-|-|-|-|
|-|48|-|-|-|-|
|-|49|-|-|-|-|
|-|50|-|-|-|-|
|-|51|-|-|-|-|
|-|52|-|-|-|-|
|-|53|-|-|-|-|
|-|54|-|-|-|-|
|-|55|-|-|-|-|
|-|56|-|-|-|-|
|-|57|-|-|-|-|
|-|58|-|-|-|-|
|-|59|-|-|-|-|
|-|60|-|-|-|-|
|-|61|-|-|-|-|
|-|62|-|-|-|-|
|-|63|-|-|-|-|
|-|64|-|-|-|-|
|-|65|-|-|-|-|
|-|66|-|-|-|-|
|-|67|-|-|-|-|
|-|68|-|-|-|-|
|-|69|-|-|-|-|
|-|70|-|-|-|-|

- **7.70-PIN connector:** You can find the function for each pin from the table below:

|Pin Package Number|Pin Number|Pin Name|Pin Type|Optional Function|Additional Function|
|:------:|:------:|:------:|:------:|:------:|:------:|
|-|1|5V_VIN|S|-|-|
|-|2|3V3|S|-|-|
|-|3|5V_VIN|S|-|-|
|-|4|3V3|S|-|-|
|-|5|5V_VIN|S|-|-|
|-|6|3V3|S|-|-|
|-|7|5V_VIN|S|-|-|
|-|8|3V3|S|-|-|
|-|9|5V_VIN|S|-|-|
|-|10|3V3|S|-|-|
|-|11|5V_VIN|S|-|-|
|-|12|VDD|S|-|-|
|-|13|5V_VIN|S|-|-|
|-|14|VDD|S|-|-|
|-|15|5V_VIN|S|-|-|
|-|16|VBUS_OTG|S|-|-|
|-|17|BST_OUT|S|-|-|
|-|18|VBUS_OTG|S|-|-|
|-|19|BST_OUT|S|-|-|
|-|20|VBUS_SW|S|-|-|
|-|21|BST_OUT|S|-|-|
|-|22|VBUS_SW|S|-|-|
|-|23|1V8_AUDIO|S|-|-|
|-|24|VBUS_SW|S|-|-|
|-|25|1V2_HDMI|S|-|-|
|-|26|VBAT|S|-|-|
|-|27|3V3_HDMI|S|-|-|
|-|28|VBAT|S|-|-|
|-|29|-|-|-|-|
|-|30|-|-|-|-|
|R4|31|VREF+|S|-|-|
|AC4|32|PF14|I/O|TRACED6, DFSDM1_CKIN6,I2C4_SCL, I2C1_SCL,ETH1_GMII_RXD6, FMC_A8,EVENTOUT|ADC2_INP6,ADC2_INN2|
|Y5|33|PF13|I/O|TRACED5, DFSDM1_DATIN6,I2C4_SMBA, I2C1_SMBA,DFSDM1_DATIN3,ETH1_GMII_RXD5, FMC_A7,EVENTOUT|ADC2_INP2|
|Y4|34|PF15|I/O|TRACED7, I2C4_SDA,I2C1_SDA, ETH1_GMII_RXD7,FMC_A9, EVENTOUT|-|
|-|35|GND|S|-|-|
|L3|36|PD14|I/O|TIM4_CH3, SAI3_MCLK_B,UART8_CTS,FMC_AD0/FMC_D0,EVENTOUT|-|
|U3|37|ANA0|A|-|ADC1_INP0,ADC1_INN1,ADC2_INP0,ADC2_INN1|
|J2|38|PD15|I/O|TIM4_CH4, SAI3_MCLK_A,UART8_CTS,FMC_AD1/FMC_D1,LCD_R1,EVENTOUT|-|
|U4|39|ANA1|A|-|ADC1_INP1,ADC2_INP1|
|R2|40|PWR_ON|O|-|PWR_ONLP|
|-|41|-|-|-|-|
|-|42|GND|S|-|-|
|-|43|-|-|-|-|
|-|44|PA14|I/O|DBTRGO, DBTRGI, MCO2, EVENTOUT|-|
|-|45|PONKEYN|I|-|-|
|-|46|-|-|-|-|
|-|47|-|-|-|-|
|-|48|-|-|-|-|
|-|49|-|-|-|-|
|-|50|-|-|-|-|
|-|51|-|-|-|-|
|-|52|-|-|-|-|
|-|53|-|-|-|-|
|-|54|-|-|-|-|
|-|55|-|-|-|-|
|-|56|-|-|-|-|
|-|57|-|-|-|-|
|-|58|-|-|-|-|
|-|59|-|-|-|-|
|-|60|-|-|-|-|
|-|61|-|-|-|-|
|-|62|-|-|-|-|
|-|63|-|-|-|-|
|-|64|-|-|-|-|
|-|65|-|-|-|-|
|-|66|-|-|-|-|
|-|67|-|-|-|-|
|-|68|-|-|-|-|
|-|69|-|-|-|-|
|-|70|-|-|-|-|

- **8.70-PIN connector:** You can find the function for each pin from the table below:

|Pin Package Number|Pin Number|Pin Name|Pin Type|Optional Function|Additional Function|
|:------:|:------:|:------:|:------:|:------:|:------:|
|-|1|5V_VIN|S|-|-|
|-|2|3V3|S|-|-|
|-|3|5V_VIN|S|-|-|
|-|4|3V3|S|-|-|
|-|5|5V_VIN|S|-|-|
|-|6|3V3|S|-|-|
|-|7|5V_VIN|S|-|-|
|-|8|3V3|S|-|-|
|-|9|5V_VIN|S|-|-|
|-|10|3V3|S|-|-|
|-|11|5V_VIN|S|-|-|
|-|12|VDD|S|-|-|
|-|13|5V_VIN|S|-|-|
|-|14|VDD|S|-|-|
|-|15|5V_VIN|S|-|-|
|-|16|VBUS_OTG|S|-|-|
|-|17|BST_OUT|S|-|-|
|-|18|VBUS_OTG|S|-|-|
|-|19|BST_OUT|S|-|-|
|-|20|VBUS_SW|S|-|-|
|-|21|BST_OUT|S|-|-|
|-|22|VBUS_SW|S|-|-|
|-|23|1V8_AUDIO|S|-|-|
|-|24|VBUS_SW|S|-|-|
|-|25|1V2_HDMI|S|-|-|
|-|26|VBAT|S|-|-|
|-|27|3V3_HDMI|S|-|-|
|-|28|VBAT|S|-|-|
|-|29|-|-|-|-|
|-|30|-|-|-|-|
|R4|31|VREF+|S|-|-|
|AC4|32|PF14|I/O|TRACED6, DFSDM1_CKIN6,I2C4_SCL, I2C1_SCL,ETH1_GMII_RXD6, FMC_A8,EVENTOUT|ADC2_INP6,ADC2_INN2|
|Y5|33|PF13|I/O|TRACED5, DFSDM1_DATIN6,I2C4_SMBA, I2C1_SMBA,DFSDM1_DATIN3,ETH1_GMII_RXD5, FMC_A7,EVENTOUT|ADC2_INP2|
|Y4|34|PF15|I/O|TRACED7, I2C4_SDA,I2C1_SDA, ETH1_GMII_RXD7,FMC_A9, EVENTOUT|-|
|-|35|GND|S|-|-|
|L3|36|PD14|I/O|TIM4_CH3, SAI3_MCLK_B,UART8_CTS,FMC_AD0/FMC_D0,EVENTOUT|-|
|U3|37|ANA0|A|-|ADC1_INP0,ADC1_INN1,ADC2_INP0,ADC2_INN1|
|J2|38|PD15|I/O|TIM4_CH4, SAI3_MCLK_A,UART8_CTS,FMC_AD1/FMC_D1,LCD_R1,EVENTOUT|-|
|U4|39|ANA1|A|-|ADC1_INP1,ADC2_INP1|
|R2|40|PWR_ON|O|-|PWR_ONLP|
|-|41|-|-|-|-|
|-|42|GND|S|-|-|
|-|43|-|-|-|-|
|-|44|PA14|I/O|DBTRGO, DBTRGI, MCO2, EVENTOUT|-|
|-|45|PONKEYN|I|-|-|
|-|46|-|-|-|-|
|-|47|-|-|-|-|
|-|48|-|-|-|-|
|-|49|-|-|-|-|
|-|50|-|-|-|-|
|-|51|-|-|-|-|
|-|52|-|-|-|-|
|-|53|-|-|-|-|
|-|54|-|-|-|-|
|-|55|-|-|-|-|
|-|56|-|-|-|-|
|-|57|-|-|-|-|
|-|58|-|-|-|-|
|-|59|-|-|-|-|
|-|60|-|-|-|-|
|-|61|-|-|-|-|
|-|62|-|-|-|-|
|-|63|-|-|-|-|
|-|64|-|-|-|-|
|-|65|-|-|-|-|
|-|66|-|-|-|-|
|-|67|-|-|-|-|
|-|68|-|-|-|-|
|-|69|-|-|-|-|
|-|70|-|-|-|-|

## Resourses
-----
- **[PDF]** [STM32MP157C Datasheet](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/stm32mp157c.pdf)
- **[SCH]** [Seeed STM32MP157C SOM](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>