---
description: Arch BLE
title: Arch BLE
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_BLE
sku: 113010002
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Arch_BLE/
---

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE.jpg)

Arch BLE é uma placa de desenvolvimento compatível com mbed baseada no Nordic nRF51822. Com o formato Arduino e conectores Grove, é extremamente fácil criar um dispositivo Bluetooth Low Energy (BLE).

O nRF51822 é uma poderosa solução de chip único multiprotocolo para aplicações sem fio ULP. Ele incorpora o mais recente transceptor de rádio de alto desempenho da Nordic, um MCU ARM Cortex M0 e memória de 256kB flash + 16kB RAM. O nRF51822 oferece suporte às pilhas de protocolo Bluetooth® Low Energy e 2,4 GHz.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-BLE-p-1998.html)

Recursos
--------

-   Compatível com mbed
    -  IDE online
    -  SDK de C/C++ fácil de usar
    -  Bibliotecas práticas
-   CMSIS DAP baseado em LPC11U35
    -  Programação por arrastar e soltar
    -  Depuração usando o padrão CMSIS DAP
    -  Porta serial virtual USB para comunicação
-   Formato Arduino com conectores Grove
-   Nordic nRF51822 SoC RF multiprotocolo Bluetooth® 4.0 Low Energy/2,4 GHz
    -  Processador ARM Cortex M0
    -  256kB flash/16kB RAM
    -  Mapeamento de E/S configurável para E/S digitais
-  Conector USB Micro B

Visão geral do hardware
------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE_Pinout.png)

Primeiros passos
-----------

![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Get_started_with_mbed.png)

1.  Clique [neste link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE) para **fazer login ou se cadastrar no mbed**
2.  Importe o programa mbed_blinky
3.  Clique no ícone **Compile** na barra de ferramentas superior para compilar o programa e, em seguida, faça o download do arquivo hex compilado.
4.  Arraste e solte o arquivo hex baixado no disco MBED

Você pode abrir **main.cpp** para alterar o programa. Por exemplo, use o código a seguir para piscar o LED a cada 0,1 s
```
    #include "mbed.h"

    DigitalOut led(p30);           // on-board led is connected to p30

    int main()
    {
        while (true) {
            led = !led;
            wait(0.1);
        }
    }
```

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  <p>Se você receber um erro de compilação informando que 'device.h' não foi encontrado, tente atualizar a biblioteca mbed para a revisão mais recente no seu programa.</p>
</div>


Aplicações
------------

-  Color Pixels, uma faixa de LED colorida, pode ser controlada por telefone celular.

    *  Hardware
        -  [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
        -  [Digital RGB LED Strip](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)
        -  Dispositivo Android com BLE

    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Ble_color_pixels_bb.png)
    ![](https://files.seeedstudio.com/wiki/Arch_BLE/img/Color_pixels_app.png)


    *  Faça funcionar

        1.  Faça o download de [BLE_Color_Pixels_Arch_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)
        2.  Copie o arquivo hex para o disco MBED do seu Arch BLE
        3.  Faça o download [do aplicativo Color Pixels para Android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)

Se você quiser alterar o programa, clique [neste link](https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE) para importar o programa Color Pixels para o IDE online do mbed.

Se o dispositivo BLE estiver desconectando com frequência, podemos melhorar a estabilidade alterando os parâmetros BLE - Advertising Duration (em main.cpp), Min Interval e Max Interval (em nRF51822/projectconfig.h)


```
#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< Minimum acceptable connection interval */
#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< Maximum acceptable connection interval */
```

-  Um carrinho de brinquedo controlado por telefone celular.

    *  Hardware
        -  [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)
        -  [Shield Bot](https://www.seeedstudio.com/Shield-Bot-p-1380.html)


Atualizar ou restaurar o firmware
--------------------------

A versão mais recente de firmware para o Arch BLE é a v0221, compilada em 02 de março de 2015. Para verificar a versão e a data de compilação do seu firmware, abra o arquivo MBED.HTM do seu disco MBED em um editor de texto.

Registro de alterações:

-   2014-06-26: Primeira versão
-   2014-08-25: Suporte para arrastar e soltar arquivo hex gerado pela ferramenta gcc e sem softdevice
-   2014-10-08: Usar USB EJECT INSET em vez de reconectar o USB, aumentar o buffer de linha de dados intel hex (de 64 bytes para 128 bytes)
-   2015-02-03: Correção do bug de sistema de arquivos somente leitura no Mac OS X 10.10 Yosemite

Problemas conhecidos:

-   Problemas ao baixar *diretamente* o arquivo hex para o disco MBED com o navegador Chrome. A razão é que o Chrome cria um arquivo temporário durante o download. Se você estiver usando o Chrome, salve o arquivo hex em um local diferente e *depois* copie-o para o disco MBED.

Firmware:

-   [Firmware v0221 2015-02-03 para Arch BLE](https://developer.mbed.org/media/uploads/yihui/arch_ble_interface_v221_20150203_2.bin)
-   [Firmware v0203 2014-10-08 para Arch BLE](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)
-   [Firmware v0203 2014-08-25 para Arch BLE](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20140825.bin)

Para gravar um novo firmware:

-   Mantenha pressionado o botão do Arch BLE e ligue-o.
-   Um disco CRP DISABLD irá aparecer.
    -   No Windows, substitua firmware.bin pelo firmware acima.
    -   No Linux/Mac, use o comando: **dd if=\{new_firmware.bin\} of=\{firmware.bin\} conv=notrunc**



## Visualizador online de esquemático

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
---------

-   [Página da plataforma de desenvolvimento Arch BLE mbed](https://developer.mbed.org/platforms/Seeed-Arch-BLE/)
-   [Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_pdf.pdf)
-   [Arquivos de esquemático e de placa em formato EAGLE](https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip)
-   [Firmware LPC11U35](https://files.seeedstudio.com/wiki/Arch_BLE/res/Lpc11u35_nrf51822_if_mbed.bin.zip)
-   [Aplicativo Seeed BLE Color Pixels para Android](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)
-   [Fontes do aplicativo BLE Color Pixels](https://github.com/Seeed-Studio/ble_color_pixels)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_BLE -->

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
