---
description: Wi-Fi
title: Wi-Fi
keywords:
  - Tutorial de Desenvolvimento SenseCAP Indicator ESP32
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Indicator_ESP32_Wi-Fi
last_update:
  date: 5/23/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_ESP32_Wi-Fi/
---
# **Wi-Fi**

[**Examples**](https://github.com/espressif/esp-idf/tree/master/examples/wifi)

Este [diretório](https://github.com/espressif/esp-idf/tree/master/examples/wifi) contém uma série de exemplos de projeto que demonstram a funcionalidade de Wi‑Fi e fornecem código que você pode copiar e adaptar em seus próprios projetos.

**Usando exemplos**

Antes de compilar um exemplo, certifique‑se de seguir o Guia de Primeiros Passos do ESP‑IDF para garantir que você tenha o ambiente de desenvolvimento necessário.

Compilar um exemplo é o mesmo que compilar qualquer outro projeto:

- Etapa 1: Acesse o diretório do novo exemplo que você deseja compilar.

Execute o seguinte comando para selecionar o alvo de chip correto a ser compilado antes de abrir o menu de configuração do projeto:

`idf.py set-target esp32s3`

(Por padrão, o alvo é esp32. Para ver todas as opções, consulte idf.py set-target --help)

- Etapa 2: Execute o seguinte comando para abrir o menu de configuração do projeto:

`idf.py menuconfig`

A maioria dos exemplos possui aqui uma seção de "Configuração do Exemplo" específica do projeto (por exemplo, para definir o SSID e a senha do Wi‑Fi a serem usados)

- Etapa 3: Compile o exemplo:

`idf.py build`

Siga as instruções exibidas para fazer o flash ou execute
`idf.py -p PORT flash`

# **Suporte Técnico**

Não se preocupe, nós cobrimos você! Visite nosso [Canal Oficial da Seeed no Discord](https://discord.com/invite/QqMgVwHT3X) para fazer suas perguntas!

Se você tiver um pedido grande ou necessidade de personalização, entre em contato em [iot@seeed.cc](mailto:iot@seeed.cc)
