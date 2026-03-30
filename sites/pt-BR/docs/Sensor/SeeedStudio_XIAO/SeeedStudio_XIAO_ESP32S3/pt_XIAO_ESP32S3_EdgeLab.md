---
description: Introdução ao SenseCraft Model Assistant com o Seeed Studio XIAO ESP32S3.
title: SenseCraft Model Assistant com XIAO ESP32S3 (Sense)
keywords:
  - esp32s3
  - xiao
  - tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_edgelab
last_update:
  date: 10/04/2023
  author: LynnL4
createdAt: '2023-04-10'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_edgelab/
---

# Primeiros Passos com SenseCraft Model Assistant e Seeed Studio XIAO ESP32S3

## Introdução

[SenseCraft Model Assistant](https://edgelab.readthedocs.io/en/latest/) é um projeto open-source focado em IA embarcada. Otimizamos excelentes algoritmos do OpenMMLab para cenários do mundo real e tornamos a implementação mais amigável ao usuário, alcançando inferência mais rápida e precisa em dispositivos embarcados.

## Hardware Necessário

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display for XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Cabo Type-C

## Software Necessário

- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- Código de Exemplo: [SenseCraft Model Assistant-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## Como Instalar

### Instalar ESP-IDF

Siga as instruções do [guia de primeiros passos do ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) para configurar a toolchain e o próprio ESP-IDF.

Os próximos passos assumem que essa instalação foi bem-sucedida e que as [variáveis de ambiente do IDF estão configuradas](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables). Especificamente,

- a variável de ambiente `IDF_PATH` está definida
- o `idf.py` e as ferramentas Xtensa-esp32 (por exemplo, `xtensa-esp32-elf-gcc`) estão em `$PATH`

### obter submódulos

Acesse o diretório raiz do projeto e execute o seguinte comando para obter os submódulos:

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## Como Usar

### Compilar o exemplo

Vá para o diretório de exemplo (`examples/<example_name>`) e compile o exemplo.

Defina o IDF_TARGET (para o alvo ESP32-S3, é necessária a versão do IDF `release/v4.4`)

```
idf.py set-target esp32s3
```

Configure o exemplo

```
idf.py menuconfig
```

- Selecione o módulo de câmera em `Component config` -> `SenseCraft Model Assistant Configuration` -> `Camera Configuration` -> `Select Camera Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- Selecione o módulo de LCD em `Component config` -> `SenseCraft Model Assistant Configuration` -> `LCD Configuration` -> `Select LCD Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png)

Para compilar, execute:

```
idf.py build
```

### Carregar e executar o exemplo

Para gravar o firmware (substitua `/dev/ttyUSB0` pela porta serial do dispositivo):

```
idf.py --port /dev/ttyUSB0 flash
```

Monitore a saída serial:

```
idf.py --port /dev/ttyUSB0 monitor
```

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
