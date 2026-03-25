---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated
title: Integração com Ubidots (via TTS)
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Ubidots_TTS
last_update:
  date: 8/16/2023
  author: Jessie
createdAt: '2023-08-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_Ubidots_TTS/
---


[Ubidots](https://ubidots.com/?_gl=1%2a89g1t2%2a_ga%2aMzUzMzM3MDY5LjE2NjE5MzcyMTI.%2a_ga_VEME7QQ5EZ%2aMTY2MzY0Mzc4NS44LjEuMTY2MzY0NTI3MC4wLjAuMA..) é uma plataforma de desenvolvimento de aplicações de IoT de baixo código que permite montar e lançar rapidamente aplicações de IoT sem precisar escrever código ou contratar uma equipe de desenvolvimento de software. Hoje em dia, mais de 40.000 aplicações já conectam os pontos com a Ubidots.

Para atender à crescente necessidade de criação de aplicações de IoT, temos cooperado com a Ubidots e apoiado a comunidade para adicionar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) facilmente à Ubidots por meio da The Things Network.  

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/09/%E5%8D%9A%E5%AE%A2%E6%8F%92%E5%9B%BE.jpg" alt="pir" width={800} height="auto" /></p>

Antes de iniciar a configuração, verifique [Conectar o SenseCAP T1000 ao TTS](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN) para conectar primeiro o seu SenseCAP T1000 Tracker ao TTS.

## Configurar a Ubidots

Para começar, crie uma conta na [Ubidots](https://stem.ubidots.com/accounts/signin/).

Faça login na sua conta Ubidots e localize a aba Devices na parte superior do seu painel. Na lista suspensa, escolha Plugins.

### Plugins da Ubidots

Clique em **+** ou no botão **Create Data Plugin** para criar um novo plugin.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/plugins.png" alt="pir" width={800} height="auto" /></p>

Quando forem apresentados os plugins disponíveis, selecione o plugin **The Things Stack**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/addtts.png" alt="pir" width={800} height="auto" /></p>

Em seguida, você precisa selecionar um token Ubidots. Você pode usar o **Default token** ou também criar um novo token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/default_token.png" alt="pir" width={800} height="auto" /></p>

Para criar um novo token, primeiro clique no seu avatar no canto superior direito e selecione **API Credentials**. Em seguida, selecione **More** abaixo do Default token e adicione um novo token na página de API Credentials.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_toekn.png" alt="pir" width={800} height="auto" /></p>

Selecione **>** para continuar e depois clique na marca de verificação para finalizar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/name-description.png" alt="pir" width={800} height="auto" /></p>

### Configurar o Decoder

Depois de criar o plugin, vá para a seção decoder, exclua todo o código e substitua-o pelo seguinte:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decoding_function.png" alt="pir" width={800} height="auto" /></p>

```cpp
const HOTSPOT_INFO = false;

function handleErrorIfExists(data){
 const error = 'error' in data;
 if (error) {
        const errorMsg = { "error": { "value": data.errorCode, "context" : { "reason": data.error } } };
  return errorMsg;
 }
 return false;
}

function addLat(lat, ubidotsPayload){
 ubidotsPayload.position.context.lat = lat;
}

function addLng(lng, ubidotsPayload){
 ubidotsPayload.position.context.lng = lng;
}

const coordinateActions = {
 "Longitude": addLng,
 "Latitude": addLat,
}

const assignPayloadKeys = (data, ubidotsPayload) => {
 const { type, measurementValue } = data;

 if (type === "Longitude" || type === "Latitude") {
  if (!ubidotsPayload.position) {
   ubidotsPayload.position = { "value": 1, "context": { "lat": undefined, "lng": undefined } };
  }
  coordinateActions[type](measurementValue, ubidotsPayload);
 }
 else if (data.type === "Timestamp") {
  ubidotsPayload.timestamp = data.measurementValue;
 }
 else {
  ubidotsPayload[type] = measurementValue;
 }
};

function buildUbidotsPayload(data){
 const ubidotsPayload = {};
 data.forEach(innerData => {
  innerData.forEach(innerInnerData => {
   assignPayloadKeys(innerInnerData, ubidotsPayload);
  });
 });
 return ubidotsPayload;
}

async function formatPayload(args){

 const data = args.uplink_message.decoded_payload.messages;
 let ubidotsPayload = {};

 const error = handleErrorIfExists(data[0][0]);
 if (error) return error;

 if (HOTSPOT_INFO) {
  const { hotspots, port, fcnt } = args;
  const { snr, rssi } = hotspots[0];
  Object.assign(ubidotsPayload, { SNR: snr, RSSI: rssi, port, 'Frame Counter': fcnt });
 }
 ubidotsPayload = buildUbidotsPayload(data);
 console.log(ubidotsPayload);
 return ubidotsPayload;
};

module.exports = { formatPayload };
```

## Configurar o The Things Stack

Quando você tiver preparado a configuração na Ubidots, será necessário criar uma integração de Webhook no The Things Stack usando o template de Webhook da Ubidots.

No The Things Stack, navegue até **Integrations** → **Webhooks** e clique em **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Escolha o template de Webhook Ubidots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-ubidots.png" alt="pir" width={800} height="auto" /></p>

Dê um nome à sua integração preenchendo o Webhook ID e cole os valores de Plugin ID e token Ubidots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ubi_web.png" alt="pir" width={800} height="auto" /></p>

:::info
Para encontrar o plugin ID, clique no plugin recém-criado e navegue até a aba Decoder à esquerda. O plugin ID está disponível como parte da URL do HTTPs Endpoint (conforme destacado na imagem abaixo).
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ids.png" alt="pir" width={800} height="auto" /></p>

## Monitorar seus Dados

Depois de concluir a integração, navegue até o menu **Devices**. Você verá seu dispositivo final aparecendo na lista de dispositivos finais assim que ele enviar uma mensagem uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check_data_ubi.png" alt="pir" width={800} height="auto" /></p>
