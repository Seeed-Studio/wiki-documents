---
description: Placa de Desenvolvimento SeeedStudio GD32 RISC-V
title: Placa de Desenvolvimento SeeedStudio GD32 RISC-V
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SeeedStudio-GD32-RISC-V-Dev-Board
sku: 102991315,102060105
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SeeedStudio-GD32-RISC-V-Dev-Board/
---


![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-all.jpg)

A Placa de Desenvolvimento SeeedStudio GD32 RISC-V é baseada no MCU GD32VF103VBT6, que pode operar a até 108MHz. O dispositivo GD32VF103 é um microcontrolador de uso geral de 32 bits baseado no núcleo RISC-V, ele fornece 128 KB de memória Flash on-chip e 32 KB de memória SRAM. Ao mesmo tempo, oferece uma rica quantidade de recursos de interface: 5x U(S)ART, 2 x I2C, 3 x SPI, 2 x I2S, 2 x CAN2.0, 1 x USBFS.

Nós disponibilizamos todos os pinos de E/S (80 GPIOs no total) do GD32VF103, o que atenderá às suas diversas necessidades de desenvolvimento. Com a flash onboard de 8MB e a EEPROM de 256 bytes, você pode implementar aplicações mais complexas. Além disso, fornecemos abundantes recursos periféricos na placa de desenvolvimento, incluindo um LCD, uma porta USB tipo C, um slot para cartão TF, dois botões de usuário e três LEDs de usuário.

## Recursos

+ GD32VF103VBT6 RISC-V MCU @108MHz
+ 128KB Flash on-chip + 8MB Flash onboard
+ Interface LCD: interface 8080 de 16 bits e interface de controle de tela sensível ao toque SPI
+ USB Tipo C
+ Suporte a GUI
+ Display LCD

## Visão Geral de Hardware

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-pin.jpg)

### Pinout

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/GD32VF-103VBT6-c.jpg)

## Plataformas Suportadas

| PlatformIO IDE                                                                                            |
|-----------------------------------------------------------------------------------------------------|
| ![enter image description here](https://files.seeedstudio.com/wiki/Bazaar_Document/platformio-logo.17fdc3bc.png)  |

## Primeiros Passos

### Use o PlatformIO IDE para um Demo de Teste

#### Hardware

**Materiais necessários**

Placa de Desenvolvimento SeeedStudio GD32 RISC-V, tela LCD resistiva de 2,8 polegadas e 240x320 pixels e um cabo FPC; você pode comprá-los junto com o produto [SeeedStudio GD32 RISC-V kit with LCD](https://www.seeedstudio.com/SeeedStudio-GD32-RISC-V-kit-with-LCD-p-4303.html).

![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/d/gd32vf-103vbt6-connect-2.jpg) <!-- 图片链接有问题-->

[Cabo USB 3.1 Tipo C para A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)

+ **Passo 1**
Conecte o cabo FPC ao display LCD e à Placa de Desenvolvimento SeeedStudio GD32 RISC-V. Ao conectar o cabo FPC, deixe o lado "azul" voltado para cima, como mostrado na imagem acima.

+ **Passo 2**
Conecte o cabo USB Tipo C ao PC e à sua placa GD32.

Agora você concluiu a configuração de hardware.

#### Software

:::note
Como a placa GD32 pode suportar o framework Arduino, mas não é perfeitamente compatível com o Arduino IDE, aqui usamos o PlatformIO IDE para criar um demo simples. A versão para Arduino IDE será atualizada em breve.
:::

+ **Passo 1**
Configure o PlatformIO IDE, o PlatformIO IDE é baseado no Visual Studio Code.
Baixe o [Visual Studio Code](https://code.visualstudio.com/).
Clique no ícone "Extensions", que você pode encontrar no lado esquerdo do Visual Studio Code.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

Digite "platformIO" no mecanismo de busca para instalá-lo.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

+ **Passo 2**
Clique em "Open Project" e encontre o arquivo do seu projeto. Aqui usamos ["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip) como exemplo.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki3.png)

Escolha o framework Arduino e a placa GD32.

+ **Passo 3**
Adicione a ["LCD" library](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip) no PlatformIO IDE. Normalmente o arquivo da biblioteca fica em /C:/user/admin/.platformio/lib/; compacte a biblioteca "LCD" e adicione-a ao caminho de destino. Faça o git clone do [Arduino framework](https://github.com/LynnL4/framework-arduino-gd32v) e adicione-o em /.platformio/packages/... .

+ **Passo 4**
Você pode ver que a coluna de trabalho é colocada no lado esquerdo.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki4.png)

Clique em "main.cpp" e compile o código. O botão de compilação está na parte inferior do Visual Studio Code.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

+ **Passo 5**
O código é compilado em um arquivo binário. Você pode usar a [DFU tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) para fazer o download do arquivo binário para a placa. Além disso, você precisa instalar o firmware DFU para permitir que a placa faça o download do código via DFU. O firmware DFU está no mesmo documento da [DFU tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar).
+ **Passo 6**
Verifique sua placa e conecte-a ao PC através da interface USB tipo C. Certifique-se de que o método de boot da placa esteja correto, com boot0 conectado ao nível alto e boot1 conectado ao terra. Ambos ficam no lado esquerdo da placa GD32, você pode ajustá-los com alguns fios.
+ **Passo 7**
Abra a DFU tool; depois de configurar a placa pelos passos acima, a DFU tool reconhecerá sua placa automaticamente, como mostrado na imagem.

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

Em seguida, você deve adicionar seu arquivo binário na coluna de arquivo de programa APP. O arquivo binário está no caminho \TFT_GD32.pio\build\gd32vf103v-eval.
Escolha o Index 4 e clique em "ok" para fazer o download do código para a placa; após o download, clique em "Leave DFU" para desconectar a placa da DFU tool. Então você verá um demo contando o tempo de processamento gráfico no seu LCD. Ele contém quase todas as APIs na biblioteca "TFT_eSPI".

![enter image description here](https://files.seeedstudio.com/wiki/GD32VF103/img/gd32.gif)

:::note
Se você quiser fazer o download de outro código, basta pressionar o botão de reset na placa, abrir a [DFU tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar), e a DFU tool reconhecerá a placa novamente. Você também pode conectar o boot0 ao terra caso pressione o botão de reset e apague o código da sua placa.
:::

## Recursos

+ **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
+ **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
+ **[Zip]** ["LCD" library](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)
+ **[Zip]** Arquivo de projeto ["TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip)
+ **[Zip]** [DFU Tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)

## Suporte Técnico e Discussão de Produto


<br />Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
