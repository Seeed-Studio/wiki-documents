---
sidebar_position: 9
description: Este artigo descreve como enviar os resultados de reconhecimento de um modelo via MQTT.
title: Saída de Modelo via MQTT
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao/
---

# Configurando a saída de modelo via MQTT no SenseCraft AI para XIAO ESP32S3 Sense

Este artigo da wiki fornece um guia passo a passo sobre como configurar a saída de modelo usando MQTT (Message Queuing Telemetry Transport) para a placa XIAO ESP32S3 Sense na plataforma SenseCraft AI. MQTT é um protocolo de mensagens leve que permite comunicação eficiente entre dispositivos. Seguindo estas instruções, você aprenderá como configurar a comunicação MQTT e obter os resultados de inferência do modelo do seu XIAO ESP32S3 Sense.

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte:

1. Placa XIAO ESP32S3 Sense
2. Cabo de dados USB-C para conectar a placa XIAO ao seu computador
3. Um cliente MQTT de terceiros, como o MQTTX, instalado no seu computador

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Etapa 1. Acessar o workspace do XIAO ESP32S3 Sense e conectar o dispositivo

Acesse o workspace do XIAO ESP32S3 Sense via **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`**, ou use o [link direto para o workspace](https://sensecraft.seeed.cc/ai/device/local/32).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

Usando o cabo USB-C, conecte sua placa XIAO ESP32S3 Sense ao computador. Depois de conectada, clique no botão **Connect** localizado no canto superior esquerdo da página do workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## Etapa 2. Certificar-se de que um modelo está carregado no XIAO ESP32S3 Sense

Antes de prosseguir, verifique se sua placa XIAO ESP32S3 Sense tem um modelo treinado carregado. Se você ainda não carregou um modelo, consulte a documentação do SenseCraft AI sobre como treinar e implantar modelos no seu dispositivo.

- [Usando um modelo para XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_pretrained_models_for_xiao/)

Se você quiser usar seu próprio modelo treinado, pode consultar as duas Wikis a seguir.

- [Tipo de treinamento - Classificação](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_classification/)
- [Tipo de treinamento - Detecção de Objetos](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_training_object_detection/)

## Etapa 3. Configurar a saída MQTT

Na barra lateral esquerda da página do workspace, clique na opção **Output**. Entre as opções de saída disponíveis, selecione **MQTT** para acessar as configurações de MQTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 4. Configurar o MQTT

Clique no botão **Configuration** na parte inferior da seção de saída MQTT. Uma janela de configuração aparecerá, solicitando que você insira as seguintes informações:

- **SSID**: Insira o nome da sua rede Wi-Fi.
- **Password**: Forneça a senha da sua rede Wi-Fi.
- **Encryption**: Escolha o tipo de criptografia da sua rede Wi-Fi (por exemplo, AUTO).
- **MQTT**: Selecione "Yes" para habilitar a comunicação MQTT.

Preencha os campos de configuração MQTT:

- **Host**: Insira o hostname ou endereço IP do seu broker MQTT (por exemplo, broker.emqx.io).
- **Port**: Especifique o número da porta para comunicação MQTT (por exemplo, 1883).
- **Client ID**: Forneça um Client ID exclusivo para o seu XIAO ESP32S3 Sense (por exemplo, xiao_esp32s3).
- **User Name**: Insira seu nome de usuário MQTT, se for exigido pelo seu broker MQTT.
- **Password**: Forneça sua senha MQTT, se for exigida pelo seu broker MQTT.
- **SSL**: Escolha se deseja habilitar a criptografia SSL. Se o seu broker MQTT suportar SSL, você pode selecionar "Yes" para aumentar a segurança da comunicação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

Clique no botão **Apply** para salvar a configuração.

:::caution
Esta etapa exigirá uma conexão de rede, conecte uma antena ao XIAO ESP32S3 Sense.
:::

Se tudo estiver configurado corretamente, você deverá conseguir ver as seguintes informações no site.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 5. Configurar o cliente MQTT (MQTTX)

Abra o [aplicativo MQTTX](https://mqttx.app/) no seu computador.

Crie uma nova conexão com as seguintes configurações:

- Host: Insira o mesmo hostname ou endereço IP usado na plataforma SenseCraft AI (por exemplo, broker.emqx.io).
- Port: Especifique o número da porta para comunicação MQTT (por exemplo, 1883).
- Client ID: Forneça um Client ID exclusivo para sua instância do MQTTX (por exemplo, seeed_computer).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

Clique no botão **Connect** para estabelecer uma conexão com o broker MQTT.

## Etapa 6. Assinar o tópico MQTT

No aplicativo MQTTX, clique no botão **New Subscribe** para criar uma nova assinatura. Insira o tópico `sscma/v0/#` e clique em **Subscribe**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

Este tópico será usado para receber informações de inferência de modelo do seu XIAO ESP32S3 Sense.

## Etapa 7. Enviar comando para obter os resultados de inferência do modelo

No aplicativo MQTTX, navegue até o canal de tópico do dispositivo. Você pode obtê-lo clicando no botão **Query device's topic** na página MQTT do SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

Envie o comando `AT+INVOKE=-1,0` para acionar a inferência do modelo no seu XIAO ESP32S3 Sense.

:::tip
Certifique-se de que você está enviando para o tópico correto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

Se você perceber que ainda não há nenhum dado relacionado ao reconhecimento do modelo sendo reportado, tente enviar o comando em formato HEX.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

O XIAO ESP32S3 Sense processará o comando e publicará os resultados de inferência do modelo no tópico assinado. No aplicativo MQTTX, você receberá os resultados de inferência sob o tópico `sscma/v0/#`.

**Exemplo**:

Vamos supor que seu modelo treinado seja projetado para detectar objetos em uma imagem. Quando você enviar o comando 'AT+INVOKE=-1,0', o XIAO ESP32S3 Sense capturará uma imagem, executará a inferência do modelo e publicará os resultados via MQTT. Os resultados de inferência podem incluir informações como os objetos detectados, seus bounding boxes e pontuações de confiança. Por exemplo, o payload da mensagem MQTT pode ser:

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

Para uma descrição detalhada do formato JSON, leia a documentação **[aqui](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**.

:::tip
No firmware do dispositivo, há um conjunto de protocolos de comunicação estabelecidos que especificam o formato da saída dos resultados do modelo e o que o usuário pode fazer com os modelos. Devido a questões de espaço, não entraremos em detalhes sobre esses protocolos nesta wiki; detalharemos esta seção por meio de documentação no Github. Se você estiver interessado em um desenvolvimento mais aprofundado, acesse **[aqui](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**.
:::

Para decodificar a imagem codificada em base64:

1. Copie a string codificada em base64 do campo "image" no objeto JSON.

2. Acesse o site `https://base64.guru/converter/decode/image` no seu navegador.

3. Cole a string codificada em base64 copiada na área de texto "Base64 string" no site.

4. Clique no botão **Decode Base64 to Image**.

5. A imagem decodificada aparecerá abaixo do botão, e você poderá visualizá-la ou baixá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## Conclusão

Seguindo este guia passo a passo, você aprendeu como configurar a saída de modelo usando MQTT na plataforma SenseCraft AI para a placa XIAO ESP32S3 Sense. Agora você pode obter os resultados de inferência do modelo via MQTT e integrá-los em suas aplicações ou sistemas. Lembre-se de garantir uma conexão Wi-Fi estável e configurar corretamente as definições do seu broker e cliente MQTT para uma comunicação sem interrupções.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
