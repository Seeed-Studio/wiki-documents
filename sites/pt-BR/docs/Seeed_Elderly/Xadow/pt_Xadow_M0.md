---
description: Xadow - M0
title: Xadow - M0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_M0
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_M0/
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadowm0.jpg)

<!-- Xadow - M0 is an mbed enabled development board with [Xadow]() form factor. [Xadow]() is a series of flexible electronic modules including sensors, displays and etc. Several Xadow modules can be cascaded to create interactive objects. -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-M0-mbed-enabled-ARM-Cortex-M0-board-for-Rapid-Prototyping-p-1880.html)

## Recursos
---
- compatível com mbed
 - ferramentas de desenvolvimento on-line
 - SDK de C/C++ fácil de usar
 - muitas bibliotecas e projetos publicados
- fator de forma Xadow
 - extremamente pequeno e flexível
 - conexão em cascata
- programação Drag-n-drop
- MCU NXP LPC11U35
 - Núcleo ARM Cortex-M0 de baixo consumo
 - 48MHz, 64KB Flash, 10KB RAM, 4KB EEPROM
 - Dispositivo USB, 2xSPI, UART, I2C
- Integrado com acelerômetro: ADXL345

## Especificação
---
- Tensão de trabalho: 3,3V
- Corrente CC por pino de E/S: 20mA
- Pinos digitais de E/S: 16
- Canais de entrada analógica: 2
- Temperatura de operação: -20~70 ℃
- Dimensões: 25,43mm x 20,35mm


## Pinout
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadow_M0_Pinout.png)

## Primeiros Passos
---
1.Clique neste link para se cadastrar ou fazer login no mbed e, em seguida, importe o programa xadow_m0_blinky para o compilador on-line do mbed.

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Import_xadow_m0_blinky.png)

2.No IDE on-line do mbed, clique em "Compile" (ou use CTRL + D) para compilar o código e baixar um arquivo binário.

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Compile_mbed_program.png)

3.Conecte a placa ao computador e **pressione o botão por um longo tempo**, uma unidade USB chamada **CRP DISABLD** aparecerá.

4.Exclua o arquivo **firmware.bin** da unidade CRP DISABLD e copie o arquivo baixado para a unidade.

5.**Pressione rapidamente o botão**, o programa será executado e um LED piscará.

Você pode abrir **main.cpp** para alterar o código. Por exemplo, use o código a seguir para fazer o LED piscar a cada 0,1 segundo.
```
#include "mbed.h"

DigitalOut blue(P0_20);

int main() {
    while(1) {
        blue = 1;         // Switch ON the LED.
        wait(0.1);        // Wait for 0.1 Seconds.
        blue = 0;         // Switch OFF the LED.
        wait(0.1);        // Wait for 0.1 Seconds.
    }
}
```

## Função múltipla para o botão on-board
---
Por padrão, o botão on-board tem duas funções: pressionar rapidamente para resetar, pressionar por um longo tempo para entrar no modo ISP. Podemos adicionar mais funções!

Por exemplo, use [multifunction_for_reset_button](https://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) para obter:
- clique único - ligar o LED1
- clique duplo - ligar o LED2
- clique longo - resetar
- clicar e então ligar a alimentação - entrar no modo ISP

## Programando Arch no Windows, Linux ou Mac
---
O Arch não tem uma interface mbed. Ele usa USB In-System-Programming (ISP) para atualizar o firmware.

Para entrar no modo USB ISP, conecte o Arch ao seu computador e pressione seu botão por um longo tempo, e então um disco chamado "CRP DISABLD" aparecerá.
- no Windows
  1. exclua firmware.bin no disco "CRP DISABLD".
  2. copie um novo firmware para o disco.
- no Linux
  1. se o disco não estiver montado, monte o disco em \{mnt_dir\}
  2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**
- no Mac você precisará usar o Terminal para executar o seguinte script para copiar seu arquivo .bin para o seu Arch
  1. **dd if=\{new_firmare.bin\} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

Se você quiser, também pode criar um aplicativo **Automator** para permitir arrastar e soltar o arquivo para a sua placa. Basta criar um "Run Shell Script" com o seguinte comando:
dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

Você também precisará alterar a opção "Pass Input" de "to stdin" para "as arguments" — sem isso você receberá um erro "The action 'Run Shell Script' encountered an error" ou "dd: no value specified for if (1)" no log.

Além disso, uma forma aprimorada do script é:
- **dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

Que deve lidar com espaços no caminho do arquivo e usar apenas o primeiro arquivo fornecido.


## Visualizador de Esquemático On-line

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recurso
---
- [File:Xadow M0 Schematic.zip](https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
