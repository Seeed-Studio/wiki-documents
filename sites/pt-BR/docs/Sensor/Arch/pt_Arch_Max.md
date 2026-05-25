---
description: Arch Max
title: Arch Max
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Max
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Arch_Max/
---



A Arch Max é uma placa de desenvolvimento compatível com mbed para prototipagem rápida.
Ela é baseada em um microcontrolador STM32F407VET6 com um núcleo ARM Cortex-M4F rodando a 168 MHz. Inclui um link aberto para oferecer depuração SWD, programação por arrastar‑e‑soltar (drag-n-drop) e comunicação serial USB.

##   Recursos  

*   Compatível com mbed

    *   Ferramentas de desenvolvimento online

        *   SDK de C/C++ fácil de usar

        *   Muitas bibliotecas e projetos publicados

*   STM32F407VET6 de alto desempenho

    *   MCU ARM Cortex-M4 com FPU a 168 MHz

        *   512 KB de Flash, 192 KB de RAM

*   Link aberto on-board para depuração e programação

    *   Programação por arrastar‑e‑soltar (drag-n-drop)

        *   Comunicação serial USB

        *   Depuração SWD com GDB+ pyOCD/OpenOCD, Keil ou IAR

*   Formato Arduino, compatível com muitos shields

*   Ethernet, USB e slot para cartão SD integrados para conectividade e troca de dados

##   Especificação  

<table cellspacing="0" width="80%">
<tr>
<th scope="col">Item</th>
<th scope="col">Típico</th>
</tr>
<tr>
<th scope="row">Tensão de trabalho</th>
<td>5V</td>
</tr>
<tr>
<th scope="row">Microcontrolador</th>
<td>STM32F407VET6</td>
</tr>
<tr>
<th scope="row">Memória Flash</th>
<td>512kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>192kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>4</td>
</tr>
<tr>
<th scope="row">I2C</th>
<td>3</td>
</tr>
<tr>
<th scope="row">SPI</th>
<td>3</td>
</tr>
<tr>
<th scope="row">CAN</th>
<td>2</td>
</tr>
<tr>
<th scope="row">SDIO</th>
<td>1</td>
</tr>
<tr>
<th scope="row">Interface de câmera</th>
<td>1</td>
</tr>
<tr>
<th scope="row">Eth</th>
<td>1</td>
</tr>
<tr>
<th scope="row">Canais ADC</th>
<td>8</td>
</tr>
<tr>
<th scope="row">Pinos de E/S</th>
<td>40</td>
</tr>
<tr>
<th scope="row">Tensão máxima de entrada de E/S digital</th>
<td>5.0V</td>
</tr>
<tr>
<th scope="row">Dimensões</th>
<td>90mm x 44mm</td>
</tr>
</table>

##   Definição de pinos

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Arch_Max_Pinout.png)

##   Uso

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Get_started_with_mbed.png)

1.  Clique [neste link](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX) para **fazer login ou se cadastrar no mbed**

2.  Importe o programa mbed_blinky

3.  Clique no ícone **Compile** na barra de ferramentas superior para compilar o programa e, em seguida, baixe o arquivo hex compilado.

4.  Arraste e solte (drag-n-drop) o arquivo bin baixado no disco MBED

Você pode abrir **main.cpp** para alterar o programa. Por exemplo, use o código a seguir para piscar o LED a cada 0,1 s

```c
#include "mbed.h"

DigitalOut led(LED1);           // on-board led is connected to D13

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

##   Depuração

Para habilitar a depuração SWD ou obter mensagens de depuração por meio da porta serial virtual USB, instale [o driver do mbed](https://developer.mbed.org/handbook/Windows-serial-configuration).

##   Atualizar ou Restaurar o Firmware

A versão mais recente de firmware para a Arch Max é a v0203 compilada em 8 de outubro de 2014. Para verificar a versão e a data de compilação do seu firmware, abra o arquivo MBED.HTM do seu disco MBED em um editor de texto.

[O firmware v0203 2014-10-08 para Arch Max](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)

*   Mantenha o botão da Arch Max pressionado e ligue a placa

*   Um disco CRP DISABLD será exibido

    *   No Windows, substitua firmware.bin pelo firmware acima

        *   No Linux/Mac, use o comando: **dd if=new_firmware.bin of=firmware.bin conv=notrunc**

##   Versão

<table>
<tr>
<th>Nome</th>
<th>Versão</th>
<th>Observação</th>
</tr>
<tr>
<td>Arch Max v1.0</td>
<td>v1.0</td>
<td>A fonte de alimentação de 5 V não estava conectada à alimentação USB, o usuário deve conectar à alimentação externa (ext-power)</td>
</tr>
<tr>
<td>Arch Max v1.1</td>
<td>v1.1</td>
<td>A fonte de alimentação de 5 V pode se conectar à alimentação USB</td>
</tr>
</table>


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Recursos

- **[Eagle]**  [Arquivo Eagle de esquemáticos para ARCH Max](https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip)
- **[PDF]**[PCB Arch Max](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.pdf)
- **[EAGLE]**[Arch Max sch](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.sch)
- **[Eagle]**  [Placa ARCH Max](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.brd)
- **[Datasheet]**  [Datasheet do STM32F407](https://files.seeedstudio.com/wiki/Arch_Max/res/STM32F407.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
