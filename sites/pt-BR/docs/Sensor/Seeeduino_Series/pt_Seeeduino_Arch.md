---
description: Seeeduino Arch
title: Seeeduino Arch
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Arch
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Arch/
---

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_01.jpg)

**Seeeduino Arch** é uma placa de desenvolvimento compatível com [mbed](http://mbed.org/handbook/mbed-SDK) que combina as vantagens do mbed SDK e do formato físico do Arduino. Com o Seeeduino Arch, você pode usar o mbed C/C++ SDK, bibliotecas e ferramentas de desenvolvimento online otimizadas para criar rapidamente um protótipo.
Seeeduino Arch possui aparência padrão de Arduino e conectores Grove. É conveniente conectar Shields existentes e produtos Grove ao Seeeduino Arch.

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/seeeduino-arch-p-1561.html)  

## Características

- compatível com mbed

       1.ferramentas de desenvolvimento online

       2.SDK C/C++ fácil de usar

       3.muitas bibliotecas e projetos publicados

- Aparência padrão de Arduino, dois conectores Grove

    1.disponível com shields compatíveis com 3,3V

    2.um grande número de módulos Grove

- Programação por arrastar e soltar

- MCU NXP LPC11U24

     1.Core ARM Cortex-M0 de baixo consumo

     2.48MHz, 32KB Flash, 8KB RAM, 4KB EEPROM

     3.Dispositivo USB, 2xSPI, UART, I2C

## Especificação

<table  cellspacing="0" width="100%">
<tr>
<th scope="col">Item</th>
<th scope="col">Típico</th>
</tr>
<tr>
<th scope="row">Tensão de Trabalho</th>
<td>7 ~ 12V</td>
</tr>
<tr>
<th scope="row">Microcontrolador</th>
<td>LPC11U24</td>
</tr>
<tr>
<th scope="row">Memória Flash</th>
<td>32kB</td>
</tr>
<tr>
<th scope="row">EEPROM</th>
<td>4kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>8kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>1</td>
</tr>
<tr>
<th scope="row">I2C</th>
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
<th scope="row">Tensão Máxima de Entrada de E/S Digital</th>
<td>5.0V</td>
</tr></table>

## Pinagem

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_Pinout.png)

Há **uma versão monocromática]** para você imprimir.

## Comparar Seeeduino Arch com Arduino

Tanto Seeedduino quanto Arduino são plataformas usadas para criar prototipagem rápida. No entanto, ainda há diferenças entre eles. Podemos obter mais informações sobre eles comparando a partir da tabela a seguir.
<center>
<table  cellspacing="0" width="100%">
<tr>
<th scope="col">Item</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">Arduino</th>
</tr>
<tr>
<th scope="row">Microcontrolador</th>
<td>MCU ARM Cortex-M series</td>
<td>Principalmente MCU AVR de 8 bits, usando a nova família de MCU Due Cortex-M3.</td>
</tr>
<tr>
<th scope="row">Especificação de hardware</th>
<td>Tamanho e pinos padronizados para montar protótipos modulares com facilidade</td>
<td>Tamanho e pinos padronizados para montar protótipos modulares com facilidade</td>
</tr>
<tr>
<th scope="row">Ambiente de desenvolvimento</th>
<td>Ferramenta de desenvolvimento online para colaborar e compartilhar facilmente, pode exportar o projeto para local para desenvolvimento e depuração. Poderosa e ainda assim simples.</td>
<td>Arduino IDE, fácil de usar, simples porém funcional.</td>
</tr>
<tr>
<th scope="row">Desenvolver e depurar</th>
<td>Suporta importação de bibliotecas, exportação de projetos, controle de versão, depuração e outras funções.</td>
<td>Bibliotecas e código de aplicação são separados, adequado para escrever código simples, sem função de depuração.</td>
</tr>
</table>
</center>
O Seeeduino Arch é compatível com Arduino em hardware. Agora compartilhamos a distribuição de pinos de ambos.
<center>
<table cellspacing="0" width="100%">
<tr>
<th scope="col">Arduino</th>
<th scope="col">Seeeduino Arch</th>
<th scope="col">Descrição</th>
</tr>
<tr>
<th scope="row">D0</th>
<td>P0_18</td>
<td rowspan="14">E/S Digital</td>
</tr>
<tr>
<th scope="row">D1</th>
<td>P0_19</td>
</tr>
<tr>
<th scope="row">D2</th>
<td>P0_17</td>
</tr>
<tr>
<th scope="row">D3</th>
<td>P1_17</td>
</tr>
<tr>
<th scope="row">D4</th>
<td>P1_18</td>
</tr>
<tr>
<th scope="row">D5</th>
<td>P1_24</td>
</tr>
<tr>
<th scope="row">D6</th>
<td>P1_25</td>
</tr>
<tr>
<th scope="row">D7</th>
<td>P1_5</td>
</tr>
<tr>
<th scope="row">D8</th>
<td>P1_26</td>
</tr>
<tr>
<th scope="row">D9</th>
<td>P1_27</td>
</tr>
<tr>
<th scope="row">D10</th>
<td>P0_2</td>
</tr>
<tr>
<th scope="row">D11</th>
<td>P1_29</td>
</tr>
<tr>
<th scope="row">D12</th>
<td>P0_8</td>
</tr>
<tr>
<th scope="row">D13</th>
<td>P0_9</td>
</tr>
<tr>
<th scope="row">SDA</th>
<td>P0_5</td>
<td rowspan="2">I2C</td>
</tr>
<tr>
<th scope="row">SCL</th>
<td>P0_4</td>
</tr>
<tr>
<th scope="row">A0</th>
<td>P0_11</td>
<td rowspan="7">Analógico</td>
</tr>
<tr>
<th scope="row">A1</th>
<td>P0_12</td>
</tr>
<tr>
<th scope="row">A2</th>
<td>P0_13</td>
</tr>
<tr>
<th scope="row">A3</th>
<td>P0_14</td>
</tr>
<tr>
<th scope="row">A4</th>
<td>P0_16</td>
</tr>
<tr>
<th scope="row">A5</th>
<td>P0_22</td>
</tr>
<tr>
<th scope="row">A6</th>
<td>P0_23</td>
</tr>
<tr>
<th scope="row">1-MISO1</th>
<td>P1_21</td>
<td rowspan="6">SPI1</td>
</tr>
<tr>
<th scope="row">2-SCK</th>
<td>P1_20</td>
</tr>
<tr>
<th scope="row">3-RESET</th>
<td>P1_23</td>
</tr>
<tr>
<th scope="row">4-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">5-MOSI</th>
<td>P1_22</td>
</tr>
<tr>
<th scope="row">6-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">1-SWDIO</th>
<td>P0_15</td>
<td rowspan="6">Interface SWD 2X3</td>
</tr>
<tr>
<th scope="row">2-VCC</th>
<td>/</td>
</tr>
<tr>
<th scope="row">3-SWCLK</th>
<td>P0_10</td>
</tr>
<tr>
<th scope="row">4-</th>
<td>P1_4</td>
</tr>
<tr>
<th scope="row">5-nRET</th>
<td>P0_0</td>
</tr>
<tr>
<th scope="row">6-GND</th>
<td>/</td>
</tr>
<tr>
<th scope="row">D+</th>
<td>USB_DP</td>
<td rowspan="5">USB&amp;ISP</td>
</tr>
<tr>
<th scope="row">D-</th>
<td>USB_DM</td>
</tr>
<tr>
<th scope="row">VBUS</th>
<td>P0_3</td>
</tr>
<tr>
<th scope="row">CONNECT</th>
<td>P0_6</td>
</tr>
<tr>
<th scope="row">ISP</th>
<td>P0_1</td>
</tr>
<tr>
<th scope="row">RX</th>
<td>P1_14</td>
<td rowspan="2">UART Grove</td>
</tr>
<tr>
<th scope="row">TX</th>
<td>P1_13</td>
</tr>
<tr>
<th scope="row">AREF</th>
<td>P0_7</td>
<td>/</td>
</tr>
</table>
</center>

## Primeiros Passos

**Seeeduino Arch** é compatível com **mbed** em software. Você pode usar a abrangente biblioteca de firmware e bastante código de exemplo oferecidos pelo mbed SDK. Se você não está familiarizado com a plataforma **mbed** e o SDK **mbed**, clique [aqui](https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started) para obter um bom entendimento.

O **Seeeduino Arch** pode usar o IDE online gratuito e o compilador C++ do mbed. Este compilador é construído sobre o mecanismo otimizado do compilador ARMCC. Isso ajuda você a colocar seu programa em funcionamento rapidamente, e nenhuma instalação de software é necessária. Fazer download de programas é tão simples quanto usar um pendrive USB (nenhum programador externo é necessário).  

Além do IDE e compilador online, os usuários podem fazer uso de muitos compiladores/IDEs offline disponíveis para microcontroladores ARM Cortex M, como ARM Embedded GCC, Keil MDK ARM, IAR Embedded Workbench, etc.

Além disso, escrever uma biblioteca não é uma tarefa difícil para iniciantes. Você pode clicar [aqui](http://mbed.org/cookbook/Writing-a-Library) para aprender como escrever uma biblioteca mbed.

Aqui mostramos um demonstração simples: **water lights** usando Seeeduino Arch para você começar.

### Demo: Water Lights

- Clique no logotipo "mbed Enabled" para registrar uma conta para o Seeeduino Arch.
[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Mbedenabled.jpg)](https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&amp;firmware=999999)

- Abra [https://mbed.org/compiler/](https://mbed.org/compiler/) e você obterá o mbed online IDE. Antes de programar, é melhor você ler mbed Complier Getting started.
![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Open_Compiler.jpg)

- Clique em "New" para criar um novo programa e selecione o dispositivo "mbed NXP LPC11U24". Acredito que esta imagem explica melhor.
![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Compiler.jpg)

Abaixo está o meu código para controlar os quatro LEDs do seeeduino arch.

```c
#include "mbed.h"
DigitalOut  led1(LED1);
DigitalOut  led2(LED2);
DigitalOut  led3(LED3);
DigitalOut  led4(LED4);


int main() {
while(1) {
led1 = !led1;
wait(0.5);
led2 = !led2;
wait(0.5);
led3 = !led3;
wait(0.5);
led4 = !led4;
wait(0.5);


```

- Agora você pode compilar o código. Se o código tiver erros, ele irá alertá-lo e fornecer ajuda. E você pode achar que as ajudas são exatamente o que você precisa.
![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Error_prompt.jpg)

- Depois de compilar o código com sucesso, salve o arquivo bin.

- Agora você precisa pressionar o botão de reset por um tempo longo, ele automaticamente aparecerá como uma unidade USB chamada CRP DISABLD.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/A_usb_device.jpg)

- Vá até o CRP DISABLD. Agora você precisa excluir o arquivo de firmware e adicionar o arquivo bin waterLights_LPC11U24 ao CRP DISABLD. Lembre-se de resetar o Microcontrolador para iniciá-lo após fazer download de um novo programa, agora o seeeduino arch executará o programa waterLight. Você pode experimentar.

O mbed C/C++ SDK fornece a plataforma de software e [bibliotecas](http://mbed.org/cookbook/Homepage) que também podem ser aplicadas ao seeeduino Arch. Assim, você pode usar esse recurso disponível para construir suas aplicações. E estamos ansiosos para compartilhar mais programas seus combinando Seeeduino arch, Shield e módulos Grove.

**Nota:**

Se você usar Seeeduino Arch em MAC ou Linux, leia a nota de aplicação --- [USB ISP programming](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x).

## Programando o Seeeduino Arch no Windows, Linux ou Mac

Seeeduino Arch não possui uma interface mbed. Ele usa USB In-System-Programming(ISP) para atualizar o firmware.

Para entrar no modo USB ISP, conecte o Arch ao seu computador e pressione seu botão por um tempo longo, então aparecerá um disco chamado "CRP DISABLD".

- no Windows

1. exclua firmware.bin no disco "CRP DISABLD".

2. copie um novo firmware para o disco.

- no Linux

1. se o disco não estiver montado, monte o disco em **\{mnt_dir\}**

2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**

- no Mac você precisará usar o Terminal para executar o seguinte script para copiar o seu arquivo .bin para o seu Arch

1. **dd if=\{new_firmare.bin\} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

     Se você quiser, também pode criar um aplicativo do **Automator** para suportar arrastar e soltar o arquivo para sua placa. Basta criar um "_Run Shell Script_" com o seguinte comando:

    if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

     Você também precisará mudar a opção `"Pass Input"` de `"to stdin"` para `"as arguments"`—sem isso você receberá um erro `"The action 'Run Shell Script' encountered an error"` ou `"dd: no value specified for if (1)"` no log.

    Além disso, uma forma aprimorada do script é:

    **`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

    Que deve lidar com espaços no caminho do arquivo e usa apenas o primeiro arquivo fornecido.

Pressione o botão _muito_ rapidamente para executar o novo firmware.

## Função múltipla para o botão on-board

Por padrão, o botão on-board tem duas funções: pressionar rapidamente para resetar, pressionar e segurar para entrar no modo ISP. Podemos adicionar mais funções!

Por exemplo, use [multifunction_for_reset_button](http://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) para obter:

1. clique único - ligar LED1

2. clique duplo - ligar LED2

3. clique longo   - resetar

4. clique e depois ligue a alimentação - entrar no modo ISP

## Aplicações

- [Usar o Seeeduino Arch como um adaptador de depuração para depurar outro Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)

- [Detectar ambiente](https://mbed.org/users/yihui/notebook/sense-environment/)

- [Brincar com Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)

- [Brincar com Grove - Ultrasonic ranger](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]**   [Arquivos Eagle do Seeeduino Arch](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip)

- **[PDF]**[Seeeduino_Arch_V1.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_V1.0.pdf)

- **[Datasheet]**  [Datasheet do LPC11U2x](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11U2x_datasheet.pdf)

- **[PDF]**   [LPC11Uxx User Manaul](https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11UxxUserManual.pdf)

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
