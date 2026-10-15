---
description: Seeed Studio XIAO RP2040 com PlatformIO
title: XIAO RP2040 com PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.webp
slug: /xiao_rp2040_with_platform_io
last_update:
  date: 04/08/2025
  author: Hugo
createdAt: '2024-08-27'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/pt-br/xiao_rp2040_with_platform_io/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/rp2040_with_platformio.jpg" /></div>

## Introdução ao PlatformIO

PlatformIO é uma plataforma de desenvolvimento que integra muitos tipos de placas de desenvolvimento e possui boa escalabilidade. Se a plataforma não tiver o tipo de placa de que você precisa, você pode adicionar manualmente o tipo de placa de desenvolvimento. O código que você escreve no Arduino pode ser usado aqui, basta adicionar a biblioteca correspondente.

Neste wiki, vamos apresentar como instalar e executar o código de exemplo no PlatformIO.

## Usar PlatformIO para XIAO RP2040

### Etapa 1. Baixar o VS Code

Baixe de acordo com o sistema que você está usando o [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Etapa 2. Instalar a extensão PlatformIO

Abra o VSCode, clique em Extensions, depois pesquise por PlatformIO e selecione para instalar. Após a conclusão da instalação, reinicie o VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Etapa 3. Instalar o pacote de plataforma platform-seeedboards

As placas da série Seeed Studio XIAO usam uma plataforma PlatformIO personalizada, portanto você precisa instalar manualmente o pacote de plataforma correspondente.

- Execute o seguinte comando para uma instalação nova:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- Se você já usou anteriormente placas da série Seeed Studio XIAO no PlatformIO, execute o comando abaixo para atualizar:


```bash
pio pkg uninstall -g -p "SeeedStudio"
pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

Como alternativa, você pode fazer substituições com base em projetos existentes.

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
```

:::

### Etapa 4. Criar qualquer projeto no PlatformIO

Abra a extensão PlatformIO e selecione Create New Project.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

### Etapa 4. Compilar e Gravar

Copie o seguinte programa para `main.c` e faça o upload para a placa.

```cpp
#include <Arduino.h>

void setup() {
    pinMode(PIN_LED, OUTPUT);
}

void loop() {
    digitalWrite(PIN_LED, HIGH);
    delay(1000);
    digitalWrite(PIN_LED, LOW);
    delay(1000);
}
```
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/pio_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>