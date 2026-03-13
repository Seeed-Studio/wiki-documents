---
description: BLE Nitrogen
title: BLE Nitrogen
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BLE_Nitrogen
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BLE_Nitrogen/
---

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/cover.png)

Aplicações Zephyr usam a configuração nrf52_nitrogen para rodar no hardware nRF52 Nitrogen. Ela fornece suporte para a CPU Nordic Semiconductor nRF52832 ARM Cortex-M4F e para os seguintes dispositivos:

* NVIC (Controlador de Interrupção Vetorial Aninhada)
* SYSTICK (Relógio do Sistema System Tick)
* UART
* GPIO
* FLASH

O [Nordic Semiconductor Infocenter](http://infocenter.nordicsemi.com/) contém as informações do processador e o datasheet.

É altamente recomendado que você atualize seu ambiente de desenvolvimento com o [SDK](https://www.zephyrproject.org/downloads/tools) mais recente, pois novas funcionalidades são testadas contra as últimas versões.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Nitrogen-p-2711.html)


##Features

* Microcontrolador nRF52832 com 512kB Flash, 64kB RAM
    * Cortex M4
    * BLE
    * NFC
* Alimentação USB com proteção por fusível
* Gerenciamento de bateria
    * Carregador de bateria onboard
    * Conector de bateria
    * LED indicador de carga da bateria
* Depurador SWD onboard LPC11U35
    * Firmware de depurador SWD
    * USB para Uart
    * Atualização de firmware por Drag and Drop
    * Auto reset e execução após atualização de firmware
* Medição de consumo de energia BLE
    * Circuito de medição de corrente onboard
    * Capacidade de medição de 1uA
    * Medição de corrente de até 150mA
* 7 LEDs
    * USR1, BT, PWR, CDC, DAP, MSD, Carga da bateria
* Dois botões de pressão
    * USR e RESET (também para atualização de firmware do LPC11U35)
* Conectores de depuração SWD
    * Conector SWD do nRF52832
    * Conector Uart do nRF52832
* Antena chip onboard
* Tensão de trabalho de 1,8V
* Conector de baixa velocidade 2x20 pinos, passo de 2,0mm
* Totalmente compatível com os padrões 96Boards IoT


##Specifications


| Parâmetro | Valor |
|-----------|-------|
|Chipset	|nRF52832 |
|Clock Speed |	64MHz|
|Flash|	512KB|
|SRAM|	96KB|
|Tensão de Saída Digital	|1.8V|
|Pinos Analógicos|	4|
|Tensão de Entrada Analógica	|1.8V|
|Dimensões|	60x30mm|

##Hardware Overview

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/hardware_ov.png)

1.**Micro USB** - para depuração, programação, alimentação e carga da bateria.

2.**Indicadores LED**

* ***USR1*** - LED controlado pelo usuário, conectado ao P0.29
* ***BT*** - Indicador Bluetooth. Este LED acende quando conectado a um dispositivo.
* ***PWR*** - Acende quando o USB ou a bateria estiver conectada.
* ***CDC*** - Indicador de dados Uart.
* ***DAP*** - Indicador SWD.
* ***MSD*** - Indicador de Armazenamento em Massa/Drag&Drop;

3.**Conector de Bateria** - Um conector JST-1.0 para bateria de lítio de 3,7V

* **Indicador de Carga**
    * PISCANDO: Nenhuma bateria inserida
    * LIGADO: Carregando
    * DESLIGADO: Carga concluída

4.**Botão de Reset** - Pressione para reiniciar o sistema

5.**Botão de Usuário** - Botão de usuário, conectado ao P0.27, pull-up

6.**UART para Depuração**

7.**Antena chip BT**

8.**Conector UFL de antena NFC**

9.**Pinos** - Para detalhes, consulte o mapa de pinos

A.CI - **NRF52832**

B.CI - **LPC11U35**

C.CI - **ETA6003**

##PinMap


[![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)

:::note
    Clique para ver a imagem em tamanho maior.
:::
##Sostware

###Install the Driver

Clique para baixar o [driver para Mbed](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe).

Conecte a placa ao PC via cabo micro USB e dê um clique duplo em mbedWinSerial_16466.exe para instalá-lo; então você encontrará um novo dispositivo no seu gerenciador de dispositivos.

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/install_driver.png)

###Advanced Guide

[![enter image description here](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/guide.png)](https://www.zephyrproject.org/)



## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

* [Esquemáticos em Arquivo Eagle](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip)
* [Esquemáticos em PDF](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE%20Nitrogen%20v1.0_SCH.pdf)
* [Driver para Mbed](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
