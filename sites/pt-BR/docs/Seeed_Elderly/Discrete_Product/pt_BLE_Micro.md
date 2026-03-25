---
description: BLE Micro
title: BLE Micro
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BLE_Micro
sku: 113050012
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BLE_Micro/
---
![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE%20Micro_03.jpg)

O BLE Mcicro é um módulo de baixo custo baseado em ARM Cortex-M0 para projetos Bluetooth® Smart com o SoC nRF51822. O módulo oferece acesso a até 23 pinos GPIO através de ilhas de pinos e incorpora uma antena PCB integrada para minimizar o custo de material, mas também com bom desempenho. Os engenheiros de aplicação podem facilmente utilizar o módulo em suas aplicações sem se preocupar com casamento de impedância específico ou com problemas de projeto de rádio relacionados à soldagem de encapsulamentos de passo fino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Micro-BLE-Module-w%26-Cortex-M0-Based-nRF51822-SoC-p-1975.html)

## Recursos
---
*   Rádio multiprotocolo de 2,4 GHz

*   Processador ARM Cortex M0 de 32 bits

*   256kB flash/16kB RAM

*   Potência de saída programável de +4dBm a -20dBm

*   23 pinos GPIO flexíveis e configuráveis

*   Ampla faixa de tensão de alimentação (1,8 V a 3,6 V)

*   RSSI


## Especificação
---
Especificação|Valor
--|--
Microprocessador|nRF51822 baseado em ARM Cortex M0 de 32 bits
Dimensão externa|13,0mm x 18,5mm x 2,3mm
Fonte de alimentação|3,3V
Taxa de dados no ar|250 kbps, 1 Mbps ou 2 Mbps
Modulação|GFSK
Potência de saída|Programável: +4 a -20dBm em passos de 4dB
Sensibilidade|-92,5dBm Bluetooth Low Energy /96dBm a 250kb/-90dBm a 1Mbs/-85dBm a 2Mbs
Consumo de corrente de rádio LDO a 1,8V|16mA – TX a +4dBM de potência de saída/10,5mA – TX a 0dBm de potência de saída/13mA – RX a 1Mbs
Consumo de corrente de rádio DC-DC a 3V|10,5mA – TX a +4dBm de potência de saída/8,1mA – TX a 0dBm de potência de saída/9,5mA – RX a 1Mbs
Consumo de corrente do sistema|420nA – Sem retenção de RAM/530nA - 8k de retenção de RAM/2μA – Todos os periféricos em modo IDLE
Segurança de hardware|Co-processador AES 128-bit ECB/CCM/AAR
GPIO|23
Periféricos|ADC de 10 bits/Sensor de temperatura/RTC/RNG

## Pinagem
---

Vista inferior do BLE Micro:

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Pinout.png)

Nota: o pino SWDIO também é nRESET.


## Dimensão
---

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Dimension.jpeg)

## Over-The-Air
---
Existem dois lotes de módulos BLE Micro, um com Nordic S110 SoftDevice 6.0 e nome de dispositivo BLE "DfuTarg", e outro com S110 SoftDevice 7.0 e nome de dispositivo BLE "SD7DFU".
O BLE Micro possui um bootloader OTA pré-gravado. Para entrar no modo OTA:

1.  conecte o p18 do BLE Micro ao GND

2.  ligue o BLE Micro

3.  um dispositivo BLE chamado DfuTarg (com SoftDevice 6.0) ou SD7DFU (com SoftDevice 7.0) pode ser escaneado

4.  use o [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) para atualizar o aplicativo BLE

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Ota-ui.png)

## Download e Depuração via interface SWD
---
Podemos fazer download e depurar novos aplicativos do BLE Micro com um [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html) ou um J-Link através da interface SWD. O Arch BLE é um BLE Micro + uma interface CMSIS DAP que fornece recursos como programação por arrastar e soltar, depuração e comunicação por porta serial virtual USB.

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Using_arch_ble_to_flash_ble_micro.png)

## Desenvolver Aplicações
---
Vá para o [projeto Seeedstudio mbed BLE](https://github.com/Seeed-Studio/mbed_ble) (ou [branch SoftDevice 6.0](https://github.com/Seeed-Studio/mbed_ble/tree/softdevice_v6) para começar a desenvolver. Depois de obter o arquivo hex da sua aplicação personalizada, use OTA para atualizar o seu BLE Micro.

Se você estiver familiarizado com Docker, há [um contêiner Docker](https://registry.hub.docker.com/u/skyplabs/ble-micro/) criado por Paul para que você configure a toolchain rapidamente. Você pode usar o [Dockerfile](https://github.com/SkypLabs/ble_micro_dockerfile) para começar.

<!-- If you have an [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html), you can also use [ARM mbed cloud-based IDE](https://developer.mbed.org/compiler/). See also [Arch BLE wiki](/pt-br/Arch_BLE) -->

## BLE UART
---
Por padrão, o BLE Micro atua como um dispositivo de BLE para UART. Ele pode ser conectado a Android ou iOS.

*   Nome do dispositivo BLE: nRF UART

*   UART RX: p7

*   UART TX: p8

*   Baud rate UART: 38400

*   App Android: [nRF UART no Goole Play](https://play.google.com/store/apps/details?id=com.nordicsemi.nrfUARTv2&amp;hl=en)

*   App iOS: [nRF UART no iTunes](https://itunes.apple.com/us/app/nrf-uart/id614594903?mt=8)


## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
*   [PDF do esquemático](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro.pdf)

*   [Arquivo Eagle](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip)

*   [Biblioteca Eagle](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_Eagle_Library.zip)

*   [Firmware](https://files.seeedstudio.com/wiki/BLE_Micro/res/Ble_micro_firmware.zip)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
