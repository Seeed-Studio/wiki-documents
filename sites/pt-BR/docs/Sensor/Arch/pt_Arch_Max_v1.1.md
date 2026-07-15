---
description: Arch Max v1.1
title: Arch Max v1.1
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Max_v1.1
sku: 102110014
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Arch_Max_v1.1/
---


![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_v1.1_product_view.jpg)

O Arch Max é uma placa de desenvolvimento compatível com mbed para prototipagem rápida. Ela é baseada em um microcontrolador STM32F407VET6 com um núcleo ARM Cortex-M4F rodando a 168MHz. Ela fornece debug [Serial Wire Debug](https://en.wikipedia.org/wiki/Joint_Test_Action_Group#Serial_Wire_Debug)(SWD), programação por arrastar‑e‑soltar e comunicação serial USB.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Max-v11-p-2632.html)


Rastreador de Versão
-------

| Nome                       | Versão  | Observação                                                                      |
|----------------------------|---------|---------------------------------------------------------------------------------|
| Arch Max v1.0              | v1.0    | 5V não pode ser alimentado por USB, o usuário deve conectar à alimentação externa |
| Arch Max v1.1              | v1.1    | 5V não pode ser alimentado por USB                                   |



Recursos
--------

-   Compatível com mbed
    -   Ferramentas de desenvolvimento online (inclui IDE)
    -   SDK C/C++ completo e direto
    -   Vários exemplos e tutoriais
-   STM32F407VET6 de alto desempenho
    -   MCU ARM Cortex-M4 com FPU de 168MHz
    -   512 KB de memória Flash, 192 KB de RAM
-   Programação e depuração on-board
    -   Programação por arrastar‑e‑soltar
    -   Comunicação serial USB
    -   Depuração SWD com GDB+ pyOCD/OpenOCD, Keil ou IAR
-   Fator de forma Arduino, compatível com muitos shields
-   Porta Ethernet integrada, USB e slot para cartão SD para conectividade à Internet e troca de dados

Especificações
--------------

| Parâmetro/Item               | Valor         |
|-------------------------------|---------------|
| Tensão de Trabalho            | 5V            |
| Microcontrolador              | STM32F407VET6 |
| Memória Flash                 | 512KB         |
| RAM                           | 192KB         |
| UART                          | 4             |
| I2C                           | 3             |
| SPI                           | 3             |
| CAN                           | 2             |
| SDIO                          | 1             |
| Interface de Câmera           | 1             |
| Eth                           | 1             |
| Canais ADC                    | 8             |
| Pinos de E/S                  | 40            |
| Tensão Máx. de Entrada E/S Digital | 5.0V          |
| Dimensões                     | 90mm x 44mm   |

Visão Geral de Hardware
--------------

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_Pinout.png)

Uso
-----

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Get_started_with_mbed.png)

1.  Clique [aqui](<https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX>) para fazer login ou se inscrever no mbed
2.  Importe o programa mbed_blinky
3.  Clique no ícone **Compile** na barra de ferramentas superior para compilar o programa e depois baixe o arquivo hex compilado.
4.  Arraste e solte o arquivo bin baixado no disco mbed

Você pode abrir **main.cpp** para alterar o programa. Por exemplo, use o código a seguir para piscar o LED a cada 0,1 segundo

```cpp
#include "mbed.h"

DigitalOut led(LED1);          // on-board led is connected to D13

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

<div class="admonition note">
<p class="admonition-title">Nota</p>
<p>Se você obtiver um erro de compilação informando que 'device.h' não foi encontrado, tente atualizar a biblioteca mbed para a revisão mais recente no seu programa.</p>
</div>

## Visualizador de Esquemático Online

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

-   [Página da plataforma de desenvolvimento mbed Arch Max v1.1](https://developer.mbed.org/platforms/Seeed-Arch-Max/)
-   [Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_pdf.pdf)
-   [Arquivos de esquemático e de placa em formato EAGLE](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip)
-   [Firmware LPC11U35](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Lpc11u35_stm32f4xx_if_mbed.bin.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_Max_v1.1 -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
