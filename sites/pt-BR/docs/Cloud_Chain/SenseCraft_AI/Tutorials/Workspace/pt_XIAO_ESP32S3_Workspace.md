---
description: Espaço de Trabalho do XIAO ESP32S3 na Plataforma SenseCraft AI
title: Espaço de Trabalho do XIAO ESP32S3 na Plataforma SenseCraft AI
keywords:
  - Cloud and Chain
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /sensecraft-ai/xiao-esp32s3-workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/xiao-esp32s3-workspace/
---

## Primeiros Passos

### Conectar o XIAO ESP32S3

1. Alinhe o conector na placa de expansão do sensor de câmera com o conector B2B no XIAO ESP32S3 Sense e pressione-o para instalar o sensor de câmera.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

2. Conecte o XIAO ESP32S3 Sense ao seu computador via USB e selecione a unidade de depuração USB JAG/serial para conectar o dispositivo.

:::note

Por favor, use Chrome, Opera ou Edge para implantar modelos de IA no XIAO ESP32S3 Sense e no Grove Vision AI v2.

:::

3. Depois que o dispositivo estiver conectado, ele irá ler as informações do dispositivo, as informações do modelo e executar o modelo para inferência. Os usuários podem ajustar as configurações de Confidence e IoU para refinar a precisão da inferência do modelo.

- Confidence：Confidence refere-se ao nível de certeza ou probabilidade atribuído por um modelo às suas previsões
- IoU：IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas delimitadoras verdadeiras

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image5.png)

### Substituir o Modelo de IA

Se você precisar substituir o modelo que está sendo executado atualmente no dispositivo, a plataforma SenseCrfat AI oferece duas maneiras de fazer isso

1. Selecione um modelo disponível publicamente na plataforma SenseCraft AI ou um modelo na conta do usuário para substituí-lo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image6.png)

2. Envie diretamente um modelo para substituição.

- Model Name：insira um nome
- Model File ：Envie um modelo no formato tflite
- ID Object: Classe de reconhecimento do modelo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image7.png)

### Saída

Defina uma condição para que, quando o alvo detectado atender aos critérios, o LED amarelo no XIAO ESP32S3 acenda.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image8.png)

Exemplo: Se o dispositivo detectar Face e a confiança for maior que 43, acenda o LED amarelo do dispositivo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image9.png)

## **Suporte Técnico**

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
