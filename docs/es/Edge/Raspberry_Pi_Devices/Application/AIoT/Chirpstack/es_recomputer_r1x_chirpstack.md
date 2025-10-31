---
description: Aprende cómo construir un gateway LoRaWAN usando ChirpStack en reComputer R11 con Raspberry Pi. Configura el gateway R1X00, Packet Forwarder y sensores SenseCAP S2101 para transmitir datos IoT vía MQTT. Accede a tus dispositivos LoRa y aplicaciones de forma segura desde cualquier lugar del mundo.

title: Integración de Gateway ChirpStack R1X con SenseCAP S2101

keywords:
- ChripStack
- LoRa-WAN
- Raspberry-Pi 
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /es/chirpstack_lora_gateway_r1x00
last_update:
  date: 9/18/2025
  author: Kasun Thushara
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/overall.jpg" alt="pir" width={700} height="auto" /></p>

Esta guía te lleva a través de la configuración de una solución completa de gateway LoRaWAN usando ChirpStack en el controlador edge Seeed reComputer R11, alimentado por Raspberry Pi. Con el módulo concentrador LoRa WM1302, el dispositivo R1X funciona como un gateway potente capaz de comunicación inalámbrica confiable de largo alcance. Al configurar el Semtech Packet Forwarder, los datos LoRa pueden transmitirse sin problemas a ChirpStack, que gestiona las capas de red y aplicación. Usaremos Docker para simplificar la instalación y despliegue de los servicios ChirpStack, asegurando una configuración modular y escalable. Finalmente, el sistema se integra con MQTT, habilitando transmisión de datos IoT segura y en tiempo real desde dispositivos LoRa como el sensor SenseCAP S2101 a aplicaciones accesibles desde cualquier lugar del mundo.

## Hardware Requerido

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## Guía de Instalación de Docker

**1. Actualizar Paquetes del Sistema**

```bash
sudo apt update
sudo apt upgrade
```

**2. Instalar Docker**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. Agregar Usuario al Grupo Docker**

```bash
sudo usermod -aG docker ${USER}
```

**4. Reiniciar Sistema**

```bash
sudo reboot
```

**5. Verificar Instalación**

```bash
docker run hello-world
```

**6. Instalar Docker Compose**

```bash
sudo apt install docker-compose
```

## Ejecutar Packet Forwarder

El **concentrador LoRa WM1302** requiere el **Semtech Packet Forwarder** para retransmitir datos entre el módulo LoRa y ChirpStack. El reComputer R11 proporciona una guía de configuración precompilada para módulos LoRa.

Consulta la Wiki oficial de Seeed para los pasos de instalación:
[Guía del Módulo LoRa Seeed reComputer R11](https://wiki.seeedstudio.com/es/recomputer_r/#lora-module)

Una vez instalado, sigue los pasos a continuación para configurar y ejecutar el Packet Forwarder.

**1. Modificar Configuración**

Abre el archivo de configuración correspondiente a tu región LoRa. Por ejemplo, para **US915**:

```bash
nano global_conf.json.sx1250.US915
```

Actualiza la sección **gateway_conf** para apuntar a tu servidor ChirpStack:

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "localhost",
    "serv_port_up": 1700,
    "serv_port_down": 1700
}
```

> Reemplaza `AA555A0000000000` con tu ID de Gateway real. Lo mantendremos como está
> Usa el archivo JSON correcto para tu región LoRaWAN, dependiendo del módulo que hayas comprado.

Guarda el archivo y sal:

- Presiona **CTRL + X**,
- Luego **Y**,
- Y finalmente **Enter**.

**2. Iniciar Packet Forwarder**

Ejecuta el Packet Forwarder usando la configuración actualizada:

```bash
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

## Iniciar Gateway

Para descargar el archivo docker Compose necesitas visitar esta página en reComputer y descargarlo. [Enlace](https://www.chirpstack.io/docs/getting-started/docker.html)

Luego modifica la banda de frecuencia según tu configuración en el archivo yaml

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

Después de instalar ChirpStack, puedes registrar tu **gateway LoRa R11** y comenzar a procesar datos.

**Iniciar Servicios ChirpStack**

Si no están ejecutándose ya, lanza todos los servicios ChirpStack:

```bash
sudo docker-compose up -d
```

Verifica que los contenedores estén ejecutándose:

```bash
sudo docker ps
```

---

**Acceder a la Interfaz Web de ChirpStack**

1. Abre un navegador web y navega a:

```
http://localhost:8080/
```

2. Inicia sesión con las credenciales predeterminadas:

```
Username: admin
Password: admin
```

---

## Agregar tu Gateway

1. En la interfaz de ChirpStack, ve a **Gateways → Create Gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image1.png" alt="pir" width={800} height="auto" /></p>

2. Ingresa los siguientes detalles:

   - **Gateway ID**: `AA555A0000000000` (reemplaza con tu ID de Gateway real)
   - **Name**: Dale un nombre descriptivo a tu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image2.png" alt="pir" width={800} height="auto" /></p>

3. Haz clic en **Create Gateway** para registrarlo.

4. Después de esto, podrás ver el gateway en la interfaz de ChirpStack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image3.png" alt="pir" width={800} height="auto" /></p>

## Agregar Perfil de Dispositivo

Para conectar un dispositivo LoRaWAN (ej., **SenseCAP S2101**) a ChirpStack, primero necesitas crear un **Perfil de Dispositivo**.

1. Navega a **Device Profiles → Create Device Profile**

2. Ingresa los siguientes detalles:

   - **Name**: Dale un nombre descriptivo a tu perfil de dispositivo
   - **Region**: Selecciona la región/sub-banda que coincida con tu dispositivo y gateway (ej., `US915`)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image4.png" alt="pir" width={800} height="auto" /></p>

3. Navega a la pestaña **Codec**:

   - Selecciona **JavaScript Functions**
   - Pega el codec para tu dispositivo

> ⚠️ El codec es específico para tu dispositivo LoRa. Por ejemplo, si estás usando **Seeed S201x**, puedes usar el código a continuación.
> Si estás usando un dispositivo diferente, consulta al fabricante para el codec correcto.

4. Copia y pega el codec en la sección **Uplink/Downlink Codec** y guarda el perfil.

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

## Agregar Dispositivo

Una vez que se crea el **Device Profile**, puedes registrar tu dispositivo LoRaWAN con ChirpStack.

1. Navega a **Tenant → Application** y haz clic en **Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image6.png" alt="pir" width={800} height="auto" /></p>  

2. Ingresa un **Name** para tu aplicación y guárdala
3. Abre tu aplicación recién creada y haz clic en **Add Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image7.png" alt="pir" width={800} height="auto" /></p>

4. Ingresa los siguientes detalles:

   - **Device EUI**: Pega el EUI de tu dispositivo LoRa (encontrado en la hoja de datos del dispositivo o software de configuración, por ejemplo, aplicación SenseCAP)
   - **Device Profile**: Selecciona el perfil de dispositivo que creaste anteriormente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image8.png" alt="pir" width={800} height="auto" /></p>

5. Ingresa la **Application Key** y haz clic en **Submit**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image9.png" alt="pir" width={800} height="auto" /></p>

## Verificar Estado del Dispositivo

Después de agregar tu dispositivo LoRaWAN, puedes verificar que esté correctamente conectado y transmitiendo datos.

1. Navega a tu aplicación y selecciona el dispositivo que agregaste
2. Ve a la pestaña **Events**

   - Deberías ver un **join packet** cuando el dispositivo se una exitosamente a la red

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image10.png" alt="pir" width={800} height="auto" /></p>

3. Haz clic en los paquetes para ver **información detallada**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image11.png" alt="pir" width={500} height="auto" /></p>

- Por ejemplo, puedes ver los **datos de temperatura y humedad** reportados por dispositivos como el SenseCAP S2101

## Integración MQTT

ChirpStack usa **MQTT** para transmitir datos de dispositivos LoRaWAN a aplicaciones o paneles de control. Puedes monitorear estos mensajes en tiempo real.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image12.png" alt="pir" width={800} height="auto" /></p>

1. Conecta tu PC a la **misma red** que el gateway reComputer R11
2. Usa un cliente MQTT como **MQTT Explorer** para suscribirte a temas
3. Configura el cliente MQTT:

   - **Host**: Dirección IP de tu reComputer R11
   - **Port**: `1883`
4. Una vez conectado, verás un **árbol de temas** representando tus dispositivos, por ejemplo:

```
application/c853ffcd-53f0-4de3-83b9-5467ff895f76/device/2cf7f1c043500402/event/up
```

5. Expandir el tema mostrará **mensajes uplink** que contienen datos del sensor, como temperatura y humedad para dispositivos como el SenseCAP S2101

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image13.png" alt="pir" width={800} height="auto" /></p>

## Integración con Node-RED

Puedes visualizar datos de dispositivos LoRaWAN en **Node-RED** usando nodos MQTT y funciones personalizadas.

1. Abre **Node-RED** y arrastra un nodo **MQTT IN** al flujo

2. Configura el nodo MQTT:

   - **Server**: IP de tu reComputer R11 (por ejemplo, `10.0.0.208`)
   - **Port**: `1883`
   - **Topic**: `application/+/device/+/event/up`

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image15.png" alt="pir" width={600} height="auto" /></p>

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image14.png" alt="pir" width={600} height="auto" /></p>

3. Agrega un **nodo Function** para decodificar la carga útil del mensaje MQTT

   - Por ejemplo, extrae **temperatura** y **humedad** del objeto JSON

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

4. Conecta **dos nodos de salida** desde el nodo Function, uno para temperatura y otro para humedad

5. Conecta cada salida a un **nodo Gauge** o cualquier otro nodo de visualización en Node-RED para mostrar las lecturas del sensor

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image16.png" alt="pir" width={600} height="auto" /></p>
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image17.png" alt="pir" width={600} height="auto" /></p>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
