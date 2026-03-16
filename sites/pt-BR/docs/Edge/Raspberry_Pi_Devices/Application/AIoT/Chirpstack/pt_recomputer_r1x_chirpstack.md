---
description: Aprenda a criar um gateway LoRaWAN usando ChirpStack no reComputer R11 com tecnologia Raspberry Pi. Configure o gateway R1X00, o Packet Forwarder e os sensores SenseCAP S2101 para transmitir dados de IoT via MQTT. Acesse seus dispositivos e aplicações LoRa com segurança de qualquer lugar do mundo.
title: Integração do Gateway ChirpStack R1X com SenseCAP S2101
keywords:
  - ChripStack
  - LoRa-WAN
  - Raspberry-Pi
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /chirpstack_lora_gateway_r1x00
last_update:
  date: 9/18/2025
  author: Kasun Thushara
createdAt: '2025-09-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/chirpstack_lora_gateway_r1x00/
---

## Introdução

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/overall.jpg" alt="pir" width={700} height="auto" /></p>

Este guia orienta você na configuração de uma solução completa de gateway LoRaWAN usando ChirpStack no controlador de borda Seeed reComputer R11, com tecnologia Raspberry Pi. Com o módulo concentrador LoRa WM1302, o dispositivo R1X funciona como um gateway poderoso, capaz de comunicação sem fio de longa distância confiável. Ao configurar o Semtech Packet Forwarder, os dados LoRa podem ser transmitidos de forma contínua para o ChirpStack, que gerencia as camadas de rede e de aplicação. Usaremos Docker para simplificar a instalação e implantação dos serviços ChirpStack, garantindo uma configuração modular e escalável. Por fim, o sistema é integrado ao MQTT, permitindo transmissão de dados de IoT segura e em tempo real de dispositivos LoRa, como o sensor SenseCAP S2101, para aplicações acessíveis em qualquer lugar do mundo.

## Hardware Necessário

<table align="center">
  <tr>
      <th>reComputer R1X</th>
        <th>Módulo Gateway LoRaWAN WM1302 </th>
        <th>SenseCAP S2101</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/wm1302.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/s210x.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## Guia de Instalação do Docker

**1. Atualizar Pacotes do Sistema**

```bash
sudo apt update
sudo apt upgrade
```

**2. Instalar Docker**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. Adicionar Usuário ao Grupo Docker**

```bash
sudo usermod -aG docker ${USER}
```

**4. Reiniciar o Sistema**

```bash
sudo reboot
```

**5. Verificar Instalação**

```bash
docker run hello-world
```

**6. Instalar Docker Compose**

```bash
sudo apt install docker-compose
```

## Executar o Packet Forwarder

O **concentrador LoRa WM1302** requer o **Semtech Packet Forwarder** para retransmitir dados entre o módulo LoRa e o ChirpStack. O reComputer R11 fornece um guia de configuração pré-compilado para módulos LoRa.

Consulte o Wiki oficial da Seeed para as etapas de instalação:
[Seeed reComputer R11 LoRa Module Guide](https://wiki.seeedstudio.com/pt-br/recomputer_r/#módulo-lora)

Depois de instalado, siga os passos abaixo para configurar e executar o Packet Forwarder.

**1. Modificar Configuração**

Abra o arquivo de configuração correspondente à sua região LoRa. Por exemplo, para **US915**:

```bash
nano global_conf.json.sx1250.US915
```

Atualize a seção **gateway_conf** para apontar para o seu servidor ChirpStack:

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "localhost",
    "serv_port_up": 1700,
    "serv_port_down": 1700
}
```

> Substitua `AA555A0000000000` pelo seu Gateway ID real. Vamos manter como está
> Use o arquivo JSON correto para sua região LoRaWAN, dependendo do módulo que você comprou.

Salve o arquivo e saia:

- Pressione **CTRL + X**,
- Depois **Y**,
- E, por fim, **Enter**.

**2. Iniciar o Packet Forwarder**

Execute o Packet Forwarder usando a configuração atualizada:

```bash
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

## Iniciar o Gateway

Para baixar o arquivo Docker Compose você precisa visitar esta página no reComputer e baixá-lo. [Link](https://www.chirpstack.io/docs/getting-started/docker.html)

Em seguida, modifique a banda de frequência de acordo com suas configurações no arquivo yaml

```yml
 chirpstack-gateway-bridge:
    image: chirpstack/chirpstack-gateway-bridge:4
    restart: unless-stopped
    ports:
      - "1700:1700/udp"
    volumes:
      - ./configuration/chirpstack-gateway-bridge:/etc/chirpstack-gateway-bridge
    environment:
      - INTEGRATION__MQTT__EVENT_TOPIC_TEMPLATE=us915_0/gateway/{{ .GatewayID }}/event/{{ .EventType }}
      - INTEGRATION__MQTT__STATE_TOPIC_TEMPLATE=us915_0/gateway/{{ .GatewayID }}/state/{{ .StateType }}
      - INTEGRATION__MQTT__COMMAND_TOPIC_TEMPLATE=us915_0/gateway/{{ .GatewayID }}/command/#
    depends_on:
      - mosquitto

```

Após instalar o ChirpStack, você pode registrar seu **gateway LoRa R11** e começar a processar dados.

**Iniciar Serviços do ChirpStack**

Se ainda não estiverem em execução, inicie todos os serviços do ChirpStack:

```bash
sudo docker-compose up -d
```

Verifique se os containers estão em execução:

```bash
sudo docker ps
```

---

**Acessar a Web UI do ChirpStack**

1. Abra um navegador web e acesse:

```
http://localhost:8080/
```

2. Faça login com as credenciais padrão:

```
Username: admin
Password: admin
```

---

## Adicionar seu Gateway

1. Na interface do ChirpStack, vá para **Gateways → Create Gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image1.png" alt="pir" width={800} height="auto" /></p>

2. Insira os seguintes detalhes:

   - **Gateway ID**: `AA555A0000000000` (substitua pelo seu Gateway ID real)
   - **Name**: Dê um nome descritivo para o seu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image2.png" alt="pir" width={800} height="auto" /></p>

3. Clique em **Create Gateway** para registrá-lo.

4. Depois disso, você poderá visualizar o gateway na interface do ChirpStack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image3.png" alt="pir" width={800} height="auto" /></p>

## Adicionar Perfil de Dispositivo

Para conectar um dispositivo LoRaWAN (por exemplo, **SenseCAP S2101**) ao ChirpStack, primeiro você precisa criar um **Device Profile**.

1. Navegue até **Device Profiles → Create Device Profile**

2. Insira os seguintes detalhes:

   - **Name**: Dê um nome descritivo para o seu perfil de dispositivo
   - **Region**: Selecione a região/sub-banda que corresponde ao seu dispositivo e gateway (por exemplo, `US915`)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image4.png" alt="pir" width={800} height="auto" /></p>

3. Navegue até a aba **Codec**:

   - Selecione **JavaScript Functions**
   - Cole o codec do seu dispositivo

> ⚠️ O codec é específico para o seu dispositivo LoRa. Por exemplo, se você estiver usando **Seeed S201x**, pode usar o código abaixo.
> Se você estiver usando um dispositivo diferente, consulte o fabricante para obter o codec correto.

4. Copie e cole o codec na seção **Uplink/Downlink Codec** e salve o perfil.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image5.png" alt="pir" width={800} height="auto" /></p>  

<details>
<summary>.js</summary>

```javascript

function decodeUplink(input) {
    return Decode(input.fPort, input.bytes, input.variables);
}

function Decode(fPort, bytes, variables) {
    var bytesString = bytes2HexString(bytes).toLocaleUpperCase();
    var fport = parseInt(fPort);
    var decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    };

    // CRC check
    if (!crc16Check(bytesString)) {
        decoded['valid'] = false;
        decoded['err'] = -1; // "crc check fail."
        return { data: decoded };
    }

    // Length Check
    if ((bytesString.length / 2 - 2) % 7 !== 0) {
        decoded['valid'] = false;
        decoded['err'] = -2; // "length check fail."
        return { data: decoded };
    }

    // Cache sensor id
    var sensorEuiLowBytes;
    var sensorEuiHighBytes;

    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString);
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
        var frame = frameArray[forFrame];
        var channel = strTo10SysNub(frame.substring(0, 2));
        var dataID = strTo10SysNub(frame.substring(2, 6));
        var dataValue = frame.substring(6, 14);
        var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue);

        if (checkDataIdIsMeasureUpload(dataID)) {
            decoded.messages.push({
                type: 'report_telemetry',
                measurementId: dataID,
                measurementValue: realDataValue
            });
        } else if (isSpecialDataId(dataID) || dataID === 5 || dataID === 6) {
            switch (dataID) {
                case 0x00: // node version
                    var versionData = sensorAttrForVersion(realDataValue);
                    decoded.messages.push({
                        type: 'upload_version',
                        hardwareVersion: versionData.ver_hardware,
                        softwareVersion: versionData.ver_software
                    });
                    break;
                case 1: // sensor version
                    break;
                case 2: // sensor eui low
                    sensorEuiLowBytes = realDataValue;
                    break;
                case 3: // sensor eui high
                    sensorEuiHighBytes = realDataValue;
                    break;
                case 7: // battery + interval
                    decoded.messages.push({
                        type: 'upload_battery',
                        battery: realDataValue.power
                    }, {
                        type: 'upload_interval',
                        interval: parseInt(realDataValue.interval) * 60
                    });
                    break;
                case 9:
                    decoded.messages.push({
                        type: 'model_info',
                        detectionType: realDataValue.detectionType,
                        modelId: realDataValue.modelId,
                        modelVer: realDataValue.modelVer
                    });
                    break;
                case 0x120: // remove sensor
                    decoded.messages.push({
                        type: 'report_remove_sensor',
                        channel: 1
                    });
                    break;
                default:
                    break;
            }
        } else {
            decoded.messages.push({
                type: 'unknown_message',
                dataID: dataID,
                dataValue: dataValue
            });
        }
    }

    if (sensorEuiHighBytes && sensorEuiLowBytes) {
        decoded.messages.unshift({
            type: 'upload_sensor_id',
            channel: 1,
            sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
        });
    }

    return { data: decoded };
}

// ---------- Utils ----------
function crc16Check(data) {
    return true;
}

function bytes2HexString(arrBytes) {
    var str = '';
    for (var i = 0; i < arrBytes.length; i++) {
        var num = arrBytes[i];
        var tmp = (num < 0 ? (255 + num + 1) : num).toString(16);
        if (tmp.length === 1) tmp = '0' + tmp;
        str += tmp;
    }
    return str;
}

function divideBy7Bytes(str) {
    var frameArray = [];
    for (var i = 0; i < str.length - 4; i += 14) {
        frameArray.push(str.substring(i, i + 14));
    }
    return frameArray;
}

function littleEndianTransform(data) {
    var arr = [];
    for (var i = 0; i < data.length; i += 2) {
        arr.push(data.substring(i, i + 2));
    }
    return arr.reverse();
}

function strTo10SysNub(str) {
    var arr = littleEndianTransform(str);
    return parseInt(arr.join(''), 16);
}

function checkDataIdIsMeasureUpload(dataId) {
    return parseInt(dataId) > 4096;
}

function isSpecialDataId(dataID) {
    switch (dataID) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
        case 0x120:
            return true;
        default:
            return false;
    }
}

function ttnDataSpecialFormat(dataId, str) {
    var strReverse = littleEndianTransform(str);
    if (dataId === 2 || dataId === 3) {
        return strReverse.join('');
    }

    var str2 = toBinary(strReverse);
    var arr = [];
    switch (dataId) {
        case 0: case 1: // versions
            for (var k = 0; k < str2.length; k += 16) {
                var tmp = str2.substring(k, k + 16);
                tmp = (parseInt(tmp.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp.substring(8, 16), 2) || 0);
                arr.push(tmp);
            }
            return arr.join(',');
        case 4:
            for (var i = 0; i < str2.length; i += 8) {
                var item = parseInt(str2.substring(i, i + 8), 2);
                arr.push(item < 10 ? '0' + item : item.toString());
            }
            return arr.join('');
        case 7:
            return {
                interval: parseInt(str2.substr(0, 16), 2),
                power: parseInt(str2.substr(-16, 16), 2)
            };
        case 9:
            return {
                detectionType: parseInt(str2.substring(0, 8), 2),
                modelId: parseInt(str2.substring(8, 16), 2),
                modelVer: parseInt(str2.substring(16, 24), 2)
            };
    }
}

function ttnDataFormat(str) {
    var strReverse = littleEndianTransform(str);
    var str2 = toBinary(strReverse);
    if (str2[0] === '1') {
        var arr = str2.split('').map(b => b === '1' ? 0 : 1);
        var val = parseInt(arr.join(''), 2) + 1;
        return parseFloat('-' + val / 1000);
    }
    return parseInt(str2, 2) / 1000;
}

function sensorAttrForVersion(dataValue) {
    var arr = dataValue.split(',');
    return { ver_hardware: arr[0], ver_software: arr[1] };
}

function toBinary(arr) {
    return arr.map(item => {
        var bin = parseInt(item, 16).toString(2).padStart(8, '0');
        return bin;
    }).join('');
}

```

</details>

## Adicionar Dispositivo

Depois que o **Perfil de Dispositivo** for criado, você poderá registrar seu dispositivo LoRaWAN no ChirpStack.

1. Navegue até **Tenant → Application** e clique em **Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image6.png" alt="pir" width={800} height="auto" /></p>  

2. Insira um **Nome** para sua aplicação e salve
3. Abra sua aplicação recém-criada e clique em **Add Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image7.png" alt="pir" width={800} height="auto" /></p>

4. Insira os seguintes detalhes:

   - **Device EUI**: Cole o EUI do seu dispositivo LoRa (encontrado no datasheet do dispositivo ou no software de configuração, por exemplo, aplicativo SenseCAP)
   - **Device Profile**: Selecione o perfil de dispositivo que você criou anteriormente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image8.png" alt="pir" width={800} height="auto" /></p>

5. Insira a **Application Key** e clique em **Submit**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image9.png" alt="pir" width={800} height="auto" /></p>

## Verificar Status do Dispositivo

Depois de adicionar seu dispositivo LoRaWAN, você pode verificar se ele está devidamente conectado e transmitindo dados.

1. Navegue até sua aplicação e selecione o dispositivo que você adicionou
2. Vá até a aba **Events**

   - Você deverá ver um **join packet** quando o dispositivo ingressar na rede com sucesso

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image10.png" alt="pir" width={800} height="auto" /></p>

3. Clique nos pacotes para visualizar **informações detalhadas**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image11.png" alt="pir" width={500} height="auto" /></p>

- Por exemplo, você pode ver os **dados de temperatura e umidade** reportados por dispositivos como o SenseCAP S2101

## Integração MQTT

O ChirpStack usa **MQTT** para transmitir dados de dispositivos LoRaWAN para aplicações ou dashboards. Você pode monitorar essas mensagens em tempo real.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image12.png" alt="pir" width={800} height="auto" /></p>

1. Conecte seu PC à **mesma rede** que o gateway reComputer R11
2. Use um cliente MQTT como o **MQTT Explorer** para assinar tópicos
3. Configure o cliente MQTT:

   - **Host**: Endereço IP do seu reComputer R11
   - **Port**: `1883`
4. Uma vez conectado, você verá uma **árvore de tópicos** representando seus dispositivos, por exemplo:

```
application/c853ffcd-53f0-4de3-83b9-5467ff895f76/device/2cf7f1c043500402/event/up
```

5. Ao expandir o tópico, serão exibidas **mensagens uplink** contendo dados dos sensores, como temperatura e umidade de dispositivos como o SenseCAP S2101

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image13.png" alt="pir" width={800} height="auto" /></p>

## Integração com Node-RED

Você pode visualizar os dados dos dispositivos LoRaWAN no **Node-RED** usando nós MQTT e funções personalizadas.

1. Abra o **Node-RED** e arraste um nó **MQTT IN** para o fluxo

2. Configure o nó MQTT:

   - **Server**: IP do seu reComputer R11 (por exemplo, `10.0.0.208`)
   - **Port**: `1883`
   - **Topic**: `application/+/device/+/event/up`

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image15.png" alt="pir" width={600} height="auto" /></p>

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image14.png" alt="pir" width={600} height="auto" /></p>

3. Adicione um **Function node** para decodificar o payload da mensagem MQTT

   - Por exemplo, extraia **temperatura** e **umidade** do objeto JSON

```javascript
   // Get the JSON payload
let data = msg.payload;

if (typeof data === "string") {
    try {
        data = JSON.parse(data);
    } catch (e) {
        node.error("Invalid JSON", msg);
        return [null, null];
    }
}

// Check if "object" and "messages" exist
if (!data.object || !Array.isArray(data.object.messages)) {
    node.warn("No messages found in payload");
    return [null, null];
}

// Find the two measurements
let tempMsg = null;
let humMsg = null;

data.object.messages.forEach(m => {
    if (m.type === "report_telemetry") {
        if (m.measurementId === 4097) {
            tempMsg = { topic: "temperature", payload: m.measurementValue };
        } else if (m.measurementId === 4098) {
            humMsg = { topic: "humidity", payload: m.measurementValue };
        }
    }
});

// Return 2 outputs: [temperature, humidity]
return [tempMsg, humMsg];
```

4. Conecte **dois nós de saída** a partir do Function node, um para temperatura e outro para umidade

5. Conecte cada saída a um **nó Gauge** ou qualquer outro nó de visualização no Node-RED para exibir as leituras dos sensores

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image16.png" alt="pir" width={600} height="auto" /></p>
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image17.png" alt="pir" width={600} height="auto" /></p>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
