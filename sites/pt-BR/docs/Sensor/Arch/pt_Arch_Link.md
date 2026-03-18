---
description: Arch Link
title: Arch Link
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Link
sku: 110080001, 102080006
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Arch_Link/
---

![](https://files.seeedstudio.com/wiki/Arch_Link/img/1020800061.jpg)

**Arch Link** é uma placa de desenvolvimento compatível com mbed baseada na interface Ethernet Nordic nRF51822 e WIZnet W5500. Com o formato Arduino, conectores Grove e interface para micro SD, é extremamente fácil criar um dispositivo Bluetooth de baixa energia.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-Link-p-2511.html)

Recursos
--------

- compatível com mbed
  - IDE online
  - SDK em C/C++ fácil de usar
  - Bibliotecas práticas
- CMSIS DAP baseado em LPC11U35
  - Programação por arrastar e soltar (Drag-n-drop)
  - Depuração usando o padrão CMSIS DAP
  - Porta serial virtual USB para comunicação
- Formato Arduino com conectores Grove
  - Conectores I2C e UART na placa
- Nordic nRF51822 SoC de RF 2,4 GHz/Bluetooth® 4.0 de baixa energia multiprotocolo
  - Processador ARM Cortex M0
  - 256kB de flash/16kB de RAM
  - Mapeamento de E/S configurável para E/S digitais
- WIZnet W5500 Ethernet
  - Suporta os seguintes protocolos Hardwired TCP/IP: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
  - Suporta modo de economia de energia
  - Suporta Wake on LAN sobre UDP
  - Suporta interface Serial Peripheral de alta velocidade (SPI MODE 0, 3)
  - 32 Kbytes de memória interna para buffers de Tx/Rx
  - PHY Ethernet 10BaseT/100BaseTX embutido
  - com conector RJ45
- Conector USB Micro B
- Conector para cartão Micro SD

Visão geral do hardware
------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Arch_link_pinout.png)

Primeiros passos
-----------

![](https://files.seeedstudio.com/wiki/Arch_Link/img/Get_started_with_mbed.png)

1. Clique [neste link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) para **fazer login ou se cadastrar no mbed**
2. Importe o programa mbed_blinky
3. Clique no ícone **Compile** na barra de ferramentas superior para compilar o programa e, em seguida, faça o download do arquivo hex compilado.
4. Arraste e solte o arquivo hex baixado no disco MBED

Você pode abrir o **main.cpp** para alterar o programa. Por exemplo, use o código a seguir para piscar o LED a cada 0,1 s

```cpp
#include "mbed.h"

DigitalOut led(p30);           // on-board led is connected to p30

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If you are get a compiling error that 'device.h' is not found, try to update the mbed library to the latest revision in your program.</p>
</div>

Aplicações
------------

1. Color Pixels, uma fita de LED colorida, pode ser controlada por telefone celular.

    - Hardware
        - Arch Link
        - [Digital RGB LED Strip](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        - Dispositivo Android com BLE

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Ble_color_pixels_bb.png)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Color_pixels_app.png)

    - Faça funcionar

        1. Baixe [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2. Copie o arquivo hex para o disco MBED do seu Arch BLE
        3. Baixe [o app Color Pixels para Android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)

Se você quiser alterar o programa, clique [neste link](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) para importar o programa Color Pixels para o IDE online do mbed.

Se o dispositivo BLE estiver sendo desconectado com frequência, podemos melhorar a estabilidade alterando os parâmetros BLE - Advertising Duration (main.cpp), Min Interval e Max Interval (nRF51822/projectconfig.h)

```cpp
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< Minimum acceptable connection interval */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< Maximum acceptable connection interval */
```

2. Você pode usar o Arch Link como um painel da web.

    - Hardware
        - Arch Link
        - [Grove - Temperature&Humidity Sensor Pro](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-Pro-p-838.html)

    ![](https://files.seeedstudio.com/wiki/Arch_Link/img/Web_dashboard_bb.png)

    - Faça funcionar

        1. Baixe [Web_Dashboard_Arch_Link.hex](http://tangram.qiniudn.com/Web_Dashboard_Arch_Link.hex)
        2. Copie o arquivo hex para o disco MBED do seu Arch Link
        3. Conecte o Grove - Temperature&Humidity Sensor Pro ao conector Grove I2C
        4. Conecte o Arch Link ao seu PC por meio de um cabo USB
        5. Abra um navegador da web e acesse [http://mbed.org/media/uploads/yihui/web_dashboard.html](http://mbed.org/media/uploads/yihui/web_dashboard.html)

Se você quiser alterar o programa, clique [neste link](https://mbed.org/compiler/#import:/teams/Seeed/code/Web_Dashboard/;platform:Seeed-Arch-Link) para importar o programa Web Dashboard para o IDE online do mbed.

## Visualizador de esquemático online

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

-   [Página da plataforma de desenvolvimento Arch Link no mbed](https://developer.mbed.org/platforms/Seeed-Arch-Link/)
-   [Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_pdf.pdf)
-   [Arquivos de esquemático e placa em formato EAGLE](https://files.seeedstudio.com/wiki/Arch_Link/res/Arch_Link_v1.0_Eagle.zip)
-   [Firmware LPC11U35](https://files.seeedstudio.com/wiki/Arch_Link/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
-   [App Seeed BLE Color Pixels para Android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
-   [Código-fonte do app BLE Color Pixels](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Link -->

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
