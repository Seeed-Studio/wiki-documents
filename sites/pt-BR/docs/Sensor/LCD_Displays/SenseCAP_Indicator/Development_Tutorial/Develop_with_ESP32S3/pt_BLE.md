---
description: BLE
title: BLE
keywords:
  - SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_ESP32_BLE
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_ESP32_BLE/
---
# **BLE**

[**Examples**](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)

Este [diretório](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth) contém uma série de exemplos de projetos que demonstram a funcionalidade Bluetooth e fornecem código que você pode copiar e adaptar para seus próprios projetos.

**Usando Exemplos**

Antes de compilar um exemplo, certifique-se de seguir o Guia de Primeiros Passos do ESP-IDF para garantir que você tenha o ambiente de desenvolvimento necessário.

Compilar um exemplo é o mesmo que compilar qualquer outro projeto:

- Passo 1: Acesse o diretório do novo exemplo que você deseja compilar.

Execute o seguinte comando para selecionar o chip de destino correto para compilar antes de abrir o menu de configuração do projeto:

`idf.py set-target esp32s3`

(Por padrão, o alvo é esp32. Para ver todas as opções, consulte idf.py set-target --help)

- Passo 2: Execute o seguinte comando para abrir o menu de configuração do projeto:

`idf.py menuconfig`

A maioria dos exemplos possui aqui uma seção de "Configuração do Exemplo" específica do projeto (por exemplo, para definir o SSID e a senha do WiFi a serem usados)

- Passo 3: Compile o exemplo:

`idf.py build`

Siga as instruções exibidas para fazer o flash, ou execute
`idf.py -p PORT flash`

# **Suporte Técnico**

Não se preocupe, estamos aqui para ajudar! Visite nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um grande pedido ou necessidade de personalização, entre em contato com iot@seeed.cc
