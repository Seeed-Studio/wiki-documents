---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title: Ubidots Integrado(via Helium)
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 8/16/2023
  author: Jessie
createdAt: '2023-08-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_Ubidots_Helium/
---


Este artigo irá ilustrar o processo de conexão do [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) ao Ubidots por meio do Helium LNS.

<div align="right">
Escrito por Juan David Tangarife - Da Equipe Ubidots
</div>

[Source](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads/intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### Requisitos

Uma conta Ubidots ativa
Um [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)
Uma conta ativa no console Helium com alguns DC
Um celular que suporte Google Play Store ou AppStore, bem como Bluetooth.

### Instalar o aplicativo SenseCAP Mate e configurar o tracker

Escaneie o seguinte código QR. Ele levará você à página oficial de download do aplicativo SenseCAP Mate da Seeed Studio.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

Depois que ele estiver instalado, ative o Bluetooth no seu celular e abra o aplicativo. Se você ainda não tiver uma conta, será necessário se registrar para usar o aplicativo.

Depois disso, pressione e segure o botão do tracker por pelo menos 3 segundos ou até o LED começar a piscar. Em seguida, na lista de dispositivos, selecione **Tracker T1000**

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

Toque no seu dispositivo:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

Vá até a aba **settings** e depois até a aba **LoRa**. Lá, selecione como _platform_ **Helium** e selecione o _Frequency plan_ de acordo com seus requisitos, além disso, certifique-se de copiar o **Device EUI, APP EUI** e **APP Key**, pois você irá precisar deles em etapas posteriores. Quando terminar, toque no botão **Send** para salvar as configurações.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### Registrar o tracker no Helium LNS

Faça login no seu console Helium, depois, vá até a seção **“Devices”** e clique no botão **“Add device”**

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

Preencha os campos obrigatórios, como o nome do dispositivo**,** as credenciais LoRaWAN, etc. Em seguida, clique no botão **Save Device**.
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### Criar a função de decodificação no Helium

O próximo passo é configurar a função que irá decodificar os bytes brutos em um formato legível por humanos. Vá até a aba **Function** no painel do lado esquerdo. Em seguida, clique no botão **Add New Function** e dê um nome a ela:
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

A Seeed Studio fornece um decodificador específico para este dispositivo no seguinte [repositório](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js). Cole esse decodificador no campo de texto e então salve as alterações.

### Criar a integração com o Ubidots

Vá até a seção **Integrations**, depois clique em **Add integration** e procure pela integração Ubidots:
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

Clique em **+Add integration**
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

Digite seu token Ubidots no campo correspondente, depois clique no botão **Continue** e aguarde a mensagem pop-up de confirmação. Depois disso, dê um nome à sua integração e clique no botão **Add Integration**:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

Após realizar esta etapa, um novo **plugin Helium** será criado na sua conta Ubidots.

### Criar o fluxo para conectar a integração ao Ubidots

Vá até a seção **Flows** e, em seguida, no menu suspenso no canto superior esquerdo, arraste e solte o dispositivo, a função de decodificação e a integração na área em branco, depois conecte os pontos, como mostra o GIF abaixo:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

Neste exemplo, tanto o dispositivo quanto a função de decodificação são chamados de "sensecap-lorawan-tracker", e a integração é chamada de "send data to ubidots".

Como o objeto JSON retornado pelo decodificador da Seeed Studio não é compatível com o esquema do Ubidots, é necessária uma transformação após extrair os dados de interesse.  
Vá até a seção de decodificação do seu plugin Helium, exclua todo o código de lá e substitua-o pelo seguinte:  

```cpp
#Set to true in order to enable hotspot information
HOTSPOT_INFO_ENABLE = False

def format_payload(args):

    messages = args.get("decoded", {}).get("payload", {}).get("data", {}).get("messages", [])
    ubidots_payload = {}

    error = assert_error(messages[0][0])
    if error is not None:
        return error

    if HOTSPOT_INFO_ENABLE:
        hotspot_info = args.get('hotspots', None)
        ubidots_payload['SNR'] = hotspot_info[0].get('snr') if hotspot_info is not None else None
        ubidots_payload['RSSI'] = hotspot_info[0].get('rssi') if hotspot_info is not None else None
        ubidots_payload["port"] = args.get("port", None)
        ubidots_payload['Frame Counter'] = args.get('fcnt', None)

    for msg in messages:
        for sensor in msg:
            message_type = sensor.get("type", None)
            value = sensor.get("measurementValue")
            if message_type == "Latitude" or message_type == "Longitude":
                position = ubidots_payload.setdefault("position", {})
                position.update({message_type.lower(): value})
                continue
            elif message_type == "Timestamp":
                ubidots_payload["timestamp"] = value
                continue
            ubidots_payload[message_type] = value

    print(ubidots_payload)
    return ubidots_payload


def assert_error(data : dict):
    if "error" in data:
        return {"ERROR" : { "value" :  data["errorCode"], "context" : { "status" : data["error"]}}}
    return None
```

Se tudo tiver sido conectado corretamente, você deverá ver isto em um dispositivo recém-criado no Ubidots
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>
