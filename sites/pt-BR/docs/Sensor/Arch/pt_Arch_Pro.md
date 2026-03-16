---
description: Arch Pro
title: Arch Pro
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Pro
sku: 102080002
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Arch_Pro/
---

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro.jpg)

Arch Pro é uma placa de desenvolvimento habilitada para mbed para prototipagem rápida. É uma variante do mbed LPC1768 com Ethernet integrada, USB Host/Device, conectores Grove e fator de forma Arduino. Com uma variedade de Shields e módulos Grove e muitas bibliotecas de software para Arch Pro, você pode implementar aplicações de Ethernet, USB Host/Device e NFC de forma rápida e fácil.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Pro-p-1677.html)

Recursos
--------

-   compatível com mbed
    -   Ferramentas de desenvolvimento online
    -   SDK de C/C++ fácil de usar
    -   Bibliotecas práticas

-   Fator de forma Arduino com dois conectores Grove
-   Programação "arrastar e soltar"
-   Depuração usando CMSIS-DAP
-   Serial virtual USB para comunicação

Especificações
-------------

| Parâmetro       | Valor/Disponibilidade                          |
|-----------------|-----------------------------------------------|
| MCU             | Variante NXP LPC1768 (com núcleo ARM Cortex-M3) |
| Clock Speed     | 100 MHz                                       |
| Flash           | 512 KB                                        |
| RAM             | 64KB                                          |
| UART            | 4 unid.                                       |
| I2C             | 3 unid.                                       |
| SPI             | 2 unid.                                       |
| Ethernet        | Sim                                           |
| USB Host/Device | Sim                                           |

 Plataformas Compatíveis
-----------------

-   mbed.

Ideias de Aplicação
-----------------

-   [Ethernet](https://mbed.org/handbook/Ethernet-Interface)
-   [USB Host](https://mbed.org/handbook/USBHost) ou [Device](https://mbed.org/handbook/USBDevice)
-   [NFC](https://mbed.org/users/yihui/notebook/rapid-prototyping-with-nfc/)
-   [RTOS](https://mbed.org/handbook/RTOS)
-   [Lua](http://mbed.org/users/jsnyder/notebook/elua-preliminary-port/)

Visão Geral do Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_v1_pinout.png)

Há [uma versão monocromática](https://seeed-studio.github.io/Artwork/images/arch_pro_v1_pinout_mono.png) para você imprimir.

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  <p>A serigrafia do Arch Pro para os conectores Grove está rotulada como 3V3 na parte superior da PCB e 5V na parte inferior. O Vcc do Grove é por padrão 3V3, mas pode ser alterado para 5V movendo o R50 para o R51. O pino Vcc do SPI pode ser definido populando o R52 (3V3) ou o R53 (5V) com 0R - nenhum deles é populado por padrão.</p>
</div>


Primeiros Passos
---------------

Como o Arch Pro é compatível com mbed LPC1768, pode-se usar o SDK mbed C/C++, bibliotecas e ferramentas de desenvolvimento online para construir rapidamente um protótipo.
Aqui mostramos como acender um LED. Isso pode ser feito em menos de 10 minutos.

Passo um: cadastre-se em uma conta mbed.

-   Abra [mbed.org](https://developer.mbed.org/), clique em Login ou signup. Se você já estiver registrado, clique diretamente em login.

Passo dois: entre nas ferramentas de desenvolvimento online.

-   Clique em Compiler, ele abrirá o IDE mbed online. Antes de programar, é melhor ler o [Getting started](https://developer.mbed.org/getting-started/) do mbed Complier.

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Open_Compiler.jpg)

Passo três: edite o código.

-   Clique em "New" no canto superior esquerdo para criar um programa e edite um programa de piscar em arquivo main.cpp.

```
#include "mbed.h"

DigitalOut  led1(LED1);

int main() {
    while(1) {
        led1 = !led1; 
        wait(0.5); 
    }
}
```

Passo quatro: adicione um dispositivo.

-   Clique em "No device selected" no canto superior direito, depois clique no botão "Add a device" no canto inferior esquerdo, como visto na figura abaixo.

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  Se você já tiver usado um dispositivo mbed, ele será visto no canto superior direito em vez de "No device selected".
</div>


![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备.jpg)

-   Uma página pop-up aparece com uma lista de dispositivos como mostrado abaixo. Selecione "mbed LPC1768".

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/选择设备1.jpg)

-   Entre na página do mbed LPC1768 e clique em "Add to mbed Compiler". Agora você adicionou com sucesso o Mbed LPU1768. Retorne à página do mbed compiler e clique em "No device selected". Depois de clicar em "LPC1768" no canto inferior esquerdo, uma tela aparece como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Arch_Pro/img/Arch_pro_add_platform.png)

-   Você pode ver a placa selecionada no mbed online compiler depois de clicar em "Select Platform".

Passo cinco: compile e faça o download.

-   Clique em "Compile". Em caso de compilação bem-sucedida, o IDE mbed gera um arquivo bin. Salve o arquivo bin no seu PC.

Passo seis: atualize o firmware.

-   Conecte a interface USB (ao lado de 'BUTTON') do Arch Pro ao seu PC usando um cabo USB Micro B; ele aparece automaticamente como um dispositivo USB chamado MBED.
-   Copie o arquivo bin gerado para o dispositivo MBED (no seu PC). Agora o dispositivo USB desaparece e reaparece.
-   Pressione o BUTTON do Arch Pro, você verá um LED piscando.

Depuração
-----

Para habilitar a depuração SWD ou obter mensagens de depuração através da serial virtual USB, instale [o driver do mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

Atualizar ou Restaurar Firmware
--------------------------

A versão mais recente de firmware para o Arch Pro é a v0221, compilada em 28 de janeiro de 2015. Para verificar a versão e a data de compilação do seu firmware, abra o MBED.HTM ou DETAILS.TXT do seu disco MBED em um editor de texto.

-   [Firmware v221 2015-01-28 para Arch Pro](https://developer.mbed.org/media/uploads/yihui/lpc11u35_lpc1768_if_mbed_20150128.bin) Corrige o bug de sistema de arquivos somente leitura do Mac OS X 10.10 Yosemite
-   [Firmware v0203 2014-09-02 para Arch Pro](https://github.com/xiongyihui/CMSIS-DAP/raw/arch_pro/interface/mdk/lpc11u35/lpc11u35_lpc1768_if_mbed_bootloader.bin)

Para atualizar:

-   É necessário um computador com Windows ou Linux.
-   Baixe o firmware mais recente.
-   Pressione e segure o BUTTON do Arch Pro e ligue-o.
-   Um disco chamado MBED LOADER aparecerá.
-   Arraste e solte o firmware baixado no disco.

<div class="admonition note">
<p class="admonition-title">Notas</p>
<p>LocalFileSystem não funciona: Como o Arch Pro não possui flash externa para armazenar arquivos, o LocalFileSystem não está disponível para esta placa.</p>
<p>P0_27 e P0_28 não funcionam com DigitalOut: P0_28 e P0_27 são E/S digitais de dreno aberto para compatibilidade com I2C. Resistores de pull-up externos são necessários para fornecer funcionalidade de saída.</p>
<p>Comunicação Serial USB: No Windows, instale o driver de porta serial do mbed para Windows para usar a Comunicação Serial USB. Dê uma olhada em <a href="https://developer.mbed.org/handbook/Windows-serial-configuration">Windows Serial Configuration</a></p>
</div>


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Recursos
---------

-   [Esquemático Arch Pro V1.0 em PDF](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0_Schematic.pdf)
-   [Arquivos EAGLE do Arch Pro V1.0](https://files.seeedstudio.com/wiki/Arch_Pro/res/Arch_Pro_V1.0.zip)
-   [LPC1768 datasheet](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC1769_68_67_66_65_64_63.pdf)
-   [LPC17xx User Manual](https://files.seeedstudio.com/wiki/Arch_Pro/res/LPC17xxUserManual.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Pro -->


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
