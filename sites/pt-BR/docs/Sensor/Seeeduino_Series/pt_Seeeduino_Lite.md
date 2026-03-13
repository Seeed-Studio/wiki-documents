---
description: Seeeduino Lite
title: Seeeduino Lite
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Lite
sku: 102010008
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Lite/
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/400px-Lite_01.jpg)

Seeeduino Lite é um microcontrolador baseado no ATmega32U4. Assim como o Arduino Leonardo, ele dispensa um processador secundário necessário para comunicação USB-serial. E isso permite que o Seeeduino Lite apareça para o computador como um dispositivo USB, como teclado e mouse. Derivado do Leonardo, também incorporamos detalhes personalizados da série Seeeduino ao Seeeduino Lite, como tensão de operação selecionável, conectores Grove integrados e assim por diante. Ele possui 20 E/S digitais (7 das quais podem fornecer saída PWM), uma conexão micro USB, um conector de alimentação, um cabeçalho ICSP e um botão de reset. Ele contém tudo o que é necessário para suportar o microcontrolador; basta conectá-lo a um computador com um cabo USB ou alimentá-lo com um adaptador CA-CC para começar.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html)


## Especificações
---
- Microcontrolador: ATmega32u4
- Tensão de Operação: 5V
- Tensão de Entrada (recomendada): 7-12V
- Tensão de Entrada (limites): 6-20V
- Pinos Digitais de E/S: 20
- Canais PWM: 7
- Canais de Entrada Analógica: 12
- Corrente CC por Pino de E/S: 40 mA
- Corrente CC para Pino de 3,3V: 50 mA
- Memória Flash: 32 KB (ATmega32u4), dos quais 4 KB usados pelo bootloader
- SRAM: 2,5 KB (ATmega32u4)
- EEPROM: 1 KB (ATmega32u4)
- Velocidade de Clock: 16 MHz

## Interface
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Seeeduino_Lite_Intrface_Function.jpg)

**U1:** CI 78M05, regulador de tensão positivo de três terminais.

**U3:** CI LD1117, um regulador de tensão de baixa queda capaz de fornecer até 800mA de corrente de saída.

**U5:** CI Atmega32U4, microcontrolador AVR de 8 bits com 32K Bytes de Flash ISP e controladora USB.


## Instalação do Driver
---

:::note
    Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino)
:::


Baixe os arquivos de driver aqui: [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver).

Conecte o Seeeduino Lite ao seu computador através de um cabo micro USB.

Aguarde o aviso de novo hardware encontrado. Se o instalador não iniciar automaticamente, vá até o Gerenciador de Dispositivos do Windows e encontre a entrada do Seeeduino Lite.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Unknow_Device.jpg)

Clique com o botão direito e escolha Atualizar driver. Quando for perguntado se deseja instalar automaticamente ou a partir de um local específico, selecione "Browse my computer for driver software".

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Update_Driver.jpg)

Escolha "Search for the best driver in these locations" e marque a caixa "incude this location in the search". Clique no botão Browse e navegue até o driver que você baixou. Selecione a pasta de drivers e clique em OK.


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Browse_Driver_Location.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Successfully_Update_Driver.jpg)

Substitua dois arquivos no caminho do Arduino. Abra o diretório Arduino-1.0.1/hardware/arduino/cores/arduino e substitua o arquivo: USBCore.cpp pelo novo USBCore.cpp. E substitua o arquivo: boards.txt pelo novo boards.txt no caminho: Arduino-1.0.1/hardware/arduino. Agora você pode programar e usar o Seeeduino Lite como usa outras placas Arduino.



## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Seeeduino Lite](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip).
- [novo boards.txt](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [novo USBCore.cpp](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [Arquivo de Driver do Lite](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Signed_USB_Serial_Driver-master.zip).

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
