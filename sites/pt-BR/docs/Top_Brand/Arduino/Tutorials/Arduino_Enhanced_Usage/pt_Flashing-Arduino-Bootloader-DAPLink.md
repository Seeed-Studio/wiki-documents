---
description: Gravando o Bootloader do Arduino usando DAP Link
title: Gravando o Bootloader do Arduino usando DAP Link
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Flashing-Arduino-Bootloader-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Flashing-Arduino-Bootloader-DAPLink/
---

# Gravando o Bootloader do Arduino usando DAP Link

Este é o tutorial da Wiki sobre como usar o DAP link (OpenOCD) para gravar o Bootloader do Arduino em placas Arduino. Se o bootloader da sua placa Arduino for interrompido, você pode usar este guia para regravar o bootloader.

## Preparações

1. Antes de mais nada, você deve seguir primeiro o guia [**How to use Arduino Borads as DAPLink Device**](https://wiki.seeedstudio.com/pt-br/Arduino-DAPLink/) para transformar uma das suas placas SAMD em um dispositivo DAP-Link. Depois que você tiver configurado e **feito o upload do programa daplink Arduino ino**, pode voltar para este tutorial da wiki.

2. Conecte o hardware de destino ao dispositivo DAP Link (placa SAMD) de acordo com as configurações de pinos.

     - SWO > SWO
     - CLK > CLK
     - GND > GND

Isso poderá parecer algo assim, onde a Seeeduino XIAO é o dispositivo DAP Link e a Seeeduino Cortex M0+ é o alvo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/examples.png"/></div>

## Primeiros Passos

Neste exemplo, a Seeeduino XIAO atua como um dispositivo DAPLink e é usada para gravar o Bootloader do Arduino para a Seeeduino Lotus Cortex M0+.

- No Terminal, navegue até a **localização raiz do caminho da biblioteca da placa Arduino** e encontre o caminho do OpenOCD dentro desse caminho. Deve ser algo como:

```sh
cd ~/Library/Arduino15/packages/arduino/tools/openocd/
cd 0.10.0-arduino7/bin # Version might vary here
```

- Execute o OpenOCD com scripts específicos:

**Nota:** Talvez você precise mudar `ansonhe` para o seu nome de usuário ou ajustar para o caminho correto.

```sh
./openocd -s ../share/openocd/scripts/ -f /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/variants/arduino_zero/openocd_scripts/arduino_zero.cfg
```

Se tudo correr bem, você deverá ver algo como o seguinte:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/server.png"/></div>

Agora o servidor está ativo e em execução!

- Deixe o terminal anterior e abra um novo terminal. Também navegue até a localização raiz do caminho das placas Arduino. Em seguida, navegue até o caminho do arm-gcc:

```sh
cd ~/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

- Sob esse caminho, você pode executar o seguinte:

```sh
./arm-none-eabi-gdb
```

- Já dentro do gdb, conecte-se ao alvo usando:

```sh
target remote localhost:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/target.png"/></div>

- Carregue o Bootloader do Arduino a partir do caminho raiz da biblioteca da placa Arduino:

> Você também pode encontrar o bootloader para as placas Seeed SAMD aqui: [https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders](https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders)

**Nota:** Talvez você precise mudar `ansonhe` para o seu nome de usuário ou ajustar para o caminho correto.

```sh
file /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/bootloaders/zero/samd21_sam_ba.elf
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/file.png"/></div>

- Grave o bootloader no alvo:

```sh
load
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/load.png"/></div>

- Redefina o dispositivo de destino pressionando os botões de reset e você deverá ver que a porta COM apareceu. Agora o Bootloader do Arduino foi gravado na Seeeduino Lotus Cortex M0+ usando a Seeeduino XIAO como dispositivo DAPLink!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/ports.png"/></div>

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
