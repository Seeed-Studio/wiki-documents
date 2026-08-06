---
description: Workspace Grove Vision AI v2 na plataforma SenseCraft AI
title: Workspace Grove Vision AI v2 na plataforma SenseCraft AI
keywords:
  - Nuvem e Cadeia
  - SenseCraft
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
sidebar_class_name: hidden
slug: /sensecraft-ai/grove-vision-ai-v2-workspace
aliases:
  - /grove_vision_ai_v2_workspace
last_update:
  date: 08/22/2024
  author: Frank
createdAt: '2024-08-21'
updatedAt: '2025-09-04'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/grove-vision-ai-v2-workspace/
---

## Introdução

### Conectar Grove-Vision AI v2

1. Conecte o Grove - Vision AI V2 à câmera por meio do cabo de conexão CSI.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

2. Conecte o Grove - Vision AI V2 ao seu computador via USB e selecione a unidade de depuração USB Single/serial para conectar.

:::note

Use Chrome, Opera ou Edge para implantar modelos de IA no XIAO ESP32S3 Sense e no Grove Vision AI v2.

:::

3. Depois que o dispositivo estiver conectado, ele lerá as informações do dispositivo, as informações do modelo e executará o modelo para inferência. Os usuários podem ajustar as configurações de Confidence e IoU para refinar a precisão da inferência do modelo.

- Confidence: Confidence refere-se ao nível de certeza ou probabilidade atribuído por um modelo às suas previsões
- IoU: IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas delimitadoras reais

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image11.png)

### Substituir modelo de IA

Se você precisar substituir o modelo que está sendo executado atualmente no dispositivo, a plataforma SenseCrfat AI oferece duas maneiras de fazer isso

1. Selecione um modelo disponível publicamente na plataforma SenseCraft AI ou um modelo na conta do usuário para substituí-lo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image12.png)

2. Envie diretamente um modelo para substituição.

- Model Name: insira um nome
- Model File: envie um modelo no formato tflite
- ID Object: classe de reconhecimento do modelo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image13.png)

### Configuração

Se você precisar enviar os resultados de inferência do dispositivo para o seu próprio serviço MQTT ou para a plataforma Sensecraft Data, configure o Wi-Fi e o MQTT. Em seguida, usaremos a plataforma Sensecraft Data como exemplo.

1. Insira um Wi-Fi 2,4G válido.
2. Acesse a [plataforma SenseCraft Data](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) e faça login.

:::note

Você pode usar a mesma conta para fazer login tanto no Sensecraft AI quanto na plataforma Sensecraft Data.

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image14.png)

3. Acesse a página Development Kit e clique no botão "Create Development Kit".
4. Insira o nome do dispositivo e selecione "Grove-Vision AI v2" como o tipo de dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image15.png)

5. Depois que o dispositivo for criado, clique em "connect" e, em seguida, copie e cole Host, Port, clientId, Username e Password na sequência.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image16.jpg)

6. Após preencher o formulário, clique no botão Save. Quando o dispositivo aplicar as alterações com sucesso, vá para a página Process. Você verá o IP Address e o Service Status: MQTT connected.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image17.png)

7. Agora você pode retornar à página Development Kit da plataforma Sensecraft Data. Clique no EUI do dispositivo para entrar nos detalhes do dispositivo, onde você poderá ver os resultados de inferência.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image18.png)

### Saída

Defina uma condição para que, quando o alvo detectado atender aos critérios, o LED amarelo no XIAO ESP32S3 acenda.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image19.png)

Exemplo: se o dispositivo detectar Face e a confiança for maior que 43, acenda o LED amarelo do dispositivo

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image20.png)

### Treinar

SenseCraft AI integra YoLo-World para gerar rapidamente modelos de IA de classe única com base na classe inserida pelo usuário, que podem ser implantados diretamente em dispositivos Grove-Vision AI v2.

### Geração rápida

1. Insira a classe, clique no botão Quick Generate e aguarde a geração do modelo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image21.png)

2. Após a geração do modelo, você pode selecionar o modelo e clicar no botão Deploy to device para gravar o modelo gerado no dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image22.jpg)

3. Visualize o resultado da inferência

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image23.png)

### Capture to Train

O modelo gerado rapidamente pode não ter alta precisão. Você pode clicar em Capture to Train para tirar e coletar imagens do alvo. Envie as imagens coletadas para o Yolo-World para treinamento otimizado. O modelo otimizado terá melhor precisão.

1. Use a câmera Grove-Vision AI v2 para mirar no alvo e clique no botão Capture para coletar imagens.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image24.png)

2. Selecione e confirme o alvo nas imagens capturadas.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image25.png)

3. Repita as etapas 1-2 para coletar pelo menos 10 fotos para treinamento. Após coletar as imagens, clique no botão Train Model.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image26.png)

4. Quando o modelo for gerado, selecione o modelo recém-gerado, implante-o no dispositivo e verifique os resultados de inferência.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image27.png)

## **Suporte técnico**

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
