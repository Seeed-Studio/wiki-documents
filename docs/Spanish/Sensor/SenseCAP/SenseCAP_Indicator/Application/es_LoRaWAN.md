---
description: To preview LoRaWAN feature of SenseCAP Indicator
title: LoRaWAN Nodo Final - SenseCAP Indicator
keywords:
- indicator
- Touch
- Screen
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png
slug: /es/SenseCAP_Indicator_Application_LoRaWAN
toc_max_heading_level: 4
sidebar_position: 4
last_update:
  date: 2024-01-15T17:29:20.793Z
  author: Guillermo
tags:
  - device
categories:
  - SenseCAP
---

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>

## Demo Práctico

En esta sección, exploraremos la funcionalidad básica LoRaWAN (*Clase C* y *OTAA*) del SenseCAP Indicator mediante una demostración práctica. El proceso se divide en tres pasos principales:

1. [Obtener el Firmware](#flash_firmware): Personalizar e instalar el firmware según sea necesario.
2. [Registrar el Dispositivo](#HEAD_register_device): Añadir tu dispositivo a un Servidor de Red LoRaWAN.
3. [Configurar las Credenciales LoRaWAN](#configure_credentials): Introducir los datos de red necesarios en tu SenseCAP Indicator.

Antes de comenzar, repasemos algunos conceptos sobre LoRaWAN.

## LoRaWAN

LoRaWAN es un protocolo de red de área amplia y bajo consumo (LPWA) que conecta inalámbricamente dispositivos alimentados por batería a internet a través de grandes regiones o redes. Es parte del sistema inalámbrico LoRa y opera en un espectro sin licencia, soportando comunicación de largo alcance con ancho de banda limitado. Se caracteriza por comunicación de largo alcance (hasta 16 km aprox.), larga vida de batería (hasta 10 años), bajo costo y bajo consumo con un tamaño de carga útil que varía entre 51 y 241 bytes según los datos[^1].

[^1]: [Una Introducción Suave a Gateways y Nodos LoRaWAN](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="LoRaWAN Framework " />
<div style={{ marginTop: '-8px' }}><em>LoRaWAN Network Framework</em></div>

</div>  

## Sistema de Percepción Avanzado

El "Sistema de Percepción Avanzado" de Seeed Studio es una [solución IoT](/SenseCAP_introduction) que ofrece un conjunto integral de herramientas de sensado, redes, computación en el borde y nube diseñadas para mejorar la percepción ambiental en diversas industrias. Este sistema, equipado con una variedad de módulos y dispositivos[^2], actúa como los "ojos y oídos" digitales, facilitando una comprensión transformadora del mundo real.

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="Advanced Perception System" />
<div style={{ marginTop: '-8px' }}><em>Estructura de Red LoRaWAN</em></div>
<br/>
</div>

El equipo SenseCAP se enfoca principalmente en componentes de Sensores y Redes, comprometidos a entregar soluciones industriales a medida y de alta calidad. Su trabajo ha dado lugar a reconocidas ofertas como la innovadora [Solución Smart Village](https://www.seeedstudio.com/smart-village), valorada por su practicidad y diseño visionario.

En el ámbito de la red Helium, sus contribuciones son especialmente notables. Dispositivos como SenseCAP M1, M2 y M4 no solo son hotspots Helium de alto rendimiento; también permiten a los usuarios ganar criptomoneda HNT mientras construyen una infraestructura inalámbrica LoRaWAN® descentralizada. El SenseCAP M4 Square destaca por su capacidad de operar múltiples Apps Web 3.0, facilitando el despliegue de sistemas multi-aplicación complejos.[^3]

Apoyándose en esta profunda experiencia y constante interacción con clientes diversos, el equipo SenseCAP ha decidido integrar la funcionalidad LoRa en el SenseCAP Indicator.

[^2]: [Productos SenseCAP - Bazaar](https://www.seeedstudio.com/SenseCAP-c-1825.html)  
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

Veamos más de cerca la funcionalidad LoRaWAN del [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html).

## Visión General

| Característica                  | Detalles                                                      |
|:------------------------------:|:-------------------------------------------------------------|
| Transceptores de Radio         | SX1262                                                       |
| Clases Soportadas              | Clase A/B/C                                                  |
| Bandas de Frecuencia Soportadas | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| Versión Mac de LoRaWAN         | 1.0.4/1.1.0                                                  |
| Stack LoRaWAN para dispositivo | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| Documentación                  | [Documentación LoRaMac](http://stackforce.github.io/LoRaMac-doc/) |

<!-- |Regional parameters|RP002-1.0.3| -->

## Paso 1. Obtener el Firmware {#flash_firmware}

### 1.1 Descargar Firmware:

Para comenzar, descarga el firmware LoRaWAN, `indicator_lorawan.bin`, para el SenseCAP Indicator desde la página de Releases de GitHub.

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::info Interested in custom firmware?
The [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) provides insights on building your own. You can access and modify the [source code](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) to suit your specific needs.
:::

:::info ¿Interesado en firmware personalizado?
La [Guía de Programación ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) ofrece información para construir tu propio firmware. Puedes acceder y modificar el [código fuente](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) para ajustarlo a tus necesidades específicas.
:::

### 1.2 Flashear el Firmware:

Para flashear el firmware en el SenseCAP Indicator, descárgalo primero y luego usa esptool (o `esptool.py` si tienes un entorno ESP-IDF) para flashearlo (para una guía completa, consulta las [instrucciones](/SenseCAP_Indicator_Application_LoRaWAN)).

**Flashear firmware en Windows usando esptool:**

Usa el siguiente comando en el símbolo del sistema de Windows para flashear el firmware:

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

Por ejemplo, si tu carpeta `flash_bin` está en la unidad `D:` y contiene la siguiente estructura:

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

Tu comando lucirá así:

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

Si tienes múltiples puertos y necesitas especificar uno usa los argumentos `-p` o `--port`. 

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>

:::note
Los usuarios de Mac deben reemplazar `./esptool.exe` por `./esptool`.

Si tienes problemas durante el flasheo, considera reducir la **velocidad de baudios** o consulta [estos pasos para solución de problemas](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device).
:::

Una vez que el firmware se haya flasheado correctamente, obtén los parámetros esenciales como el Device EUI y APPkey desde el Servidor de Red LoRaWAN en los pasos siguientes.

## Paso 2. Registrar el Dispositivo en el Servidor de Red LoRaWAN {#HEAD_register_device}

> Antes de comenzar, asegúrate de que tu dispositivo esté dentro del área de cobertura de una red LoRaWAN.

Esta sección te guiará para conectarte a un servidor de red LoRaWAN local. Usaremos la plataforma [ChirpStack](https://www.chirpstack.io/) como ejemplo, junto con el [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html). *Si usas otro servidor de red, el procedimiento será similar*; necesitarás recopilar la información esencial para la activación:

- OTAA (Activación por aire):
  - DevEUI
  - AppKey
  - JoinEUI/AppEUI (requiere Mac versión 1.1.0)
- ABP (Activación por Personalización):
  - DevEUI
  - DevAddr
  - AppSKey
  - NwkSKey

<!-- lorawan --eui c53364863bca6cad --app_key 220a52c272e2b1151ef5b626c0dab025 -->
<!-- lorawan --eui 97752c0092d12add --apps_key 22222222222222222222222222222222 --nwks_key 11111111111111111111111111111111 --dev_addr 33333333 -->

### 2.1 Configurar el Gateway SenseCAP LoRaWAN

Para configurar tu gateway SenseCAP, accede a su interfaz web donde comenzarás a configurar un servidor de red ChirpStack. A continuación se muestra una guía visual de la página de configuración:

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>

Después de ajustar las configuraciones, haz clic en `Save & Apply` para guardar los cambios. Luego podrás acceder a la interfaz ChirpStack usando la URL proporcionada (por ejemplo, http://192.168.1.102:8080).

Usa las siguientes credenciales por defecto para iniciar sesión:

- **Usuario:** `admin`
- **Contraseña:** `admin`

Para más detalles y opciones avanzadas, visita la [Guía de Configuración del Gateway SenseCAP M2 LNS](https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).

### 2.2 Configurar el Servidor de Red Local (ChirpStack)

Consulta la documentación de ChirpStack para conocer las características detalladas y el soporte de versiones LoRaWAN: [Documentación del Servidor de Red ChirpStack](https://www.chirpstack.io/network-server/features/lorawan-versions/).

Pasos para configurar tu servidor local con ChirpStack:

1. **[Crear un Perfil de Dispositivo](#create_dev_profile):** Estandariza las configuraciones y capacidades de tus dispositivos, asegurando comunicación efectiva en la red.
2. **[Agregar una Aplicación](#add_appication):** Organiza y administra tus dispositivos agrupándolos según propósito o características comunes.
3. **[Registrar un dispositivo bajo una aplicación](#register_device):** Vincula tu dispositivo a las configuraciones y reglas de manejo de datos de tu aplicación, asegurando su correcto funcionamiento en la red.

#### 2.2.1 Crear un Perfil de Dispositivo {#create_dev_profile}

Para crear un nuevo perfil de dispositivo, en la sección `Device profiles`, ve a 'Tenant' en la barra lateral y selecciona 'Device profiles'.

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>

Crear un perfil de dispositivo es crucial para que tu equipo comunique eficazmente en la red LoRaWAN. Esto implica seleccionar parámetros técnicos que afectan rendimiento y compatibilidad. Así puedes configurarlo:

- **Versión MAC:** Indica la versión del protocolo de Control de Acceso al Medio que usa tu dispositivo. Este protocolo es esencial para la gestión del acceso a la red. Puedes elegir entre las versiones v1.0.4 y v1.1.0.
- **Revisión de Parámetros Regionales:** Parámetros específicos según la ubicación geográfica de tu dispositivo, garantizando cumplimiento con regulaciones locales y especificaciones de la red.

**Elección de la versión MAC**

La versión MAC seleccionada es fundamental porque determina el conjunto de credenciales que tu dispositivo necesitará:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='Versión MAC 1.0.4'>

  Necesitarás las siguientes credenciales:

  - **DevEUI:** Identificador único asignado a tu dispositivo, garantizando unicidad global.
  - **AppKey:** Clave secreta utilizada para cifrar y asegurar las comunicaciones de tu dispositivo.

</TabItem>

<TabItem value='Versión MAC 1.1.0'>

  Tu dispositivo requerirá estas credenciales:

  - **DevEUI:** Identificador único global para tu dispositivo.
  - **AppEUI/JoinEUI:** Identificador único para la aplicación a la que tu dispositivo se conecta.
  - **AppKey:** Clave criptográfica usada para asegurar las comunicaciones.

</TabItem>
</Tabs>

**Elección de la Revisión de Parámetros Regionales**

Al configurar un perfil de dispositivo para la red LoRaWAN, la versión de los Parámetros Regionales (RP) que elijas es crucial para asegurar que tu dispositivo opere conforme a los estándares y especificaciones regionales.

**Configuración Actual**

Por ahora, estamos configurando un perfil de dispositivo con Versión MAC `1.0.4` y Revisión de Parámetros Regionales `RP002-1.0.2`.

:::info Revisión de Parámetros Regionales
Para configurar un perfil de dispositivo en la red LoRaWAN, `RP002-1.0.2` es una opción adecuada para necesidades actuales. `RP002-1.0.3` es recomendada por el [código](https://github.com/Lora-net/LoRaMac-node/blob/v4.7.0/src/mac/region/Region.h) según la especificación `v4.7.0` de LoRaMac-node.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>

Comprender y configurar correctamente estos elementos es clave para que tu dispositivo se comunique de manera efectiva y segura en la red LoRaWAN.

Para usar un dispositivo tipo **Clase C**, es importante habilitar explícitamente esta funcionalidad en el perfil de dispositivo.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>

**Función Decoder**

Para que los datos transmitidos por tu dispositivo sean significativos y legibles, es fundamental implementar un decodificador dentro del perfil del dispositivo. Este decodificador traducirá los datos binarios en bruto a un formato interpretable, permitiéndote comprender y utilizar la información enviada.

<details>

<summary>Haz clic para copiar Decoder.js</summary>

El decodificador proviene del [repositorio GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js)

```js
function decodeUplink(input) {
    var decoded = {
        data:[]
    };
    var type;
    var floatNumber;

    if ( (input.bytes.length  % 5) !== 0) {
        decoded.data.push({
            type: "error",
            Value: -1
        });

        return { data: decoded }
    }

    const arrayBuffer = new ArrayBuffer(4);
    const dataView = new DataView(arrayBuffer);
    
    for(let j =0 ; j < input.bytes.length; j+=5) {
        var num =0;
        switch ( input.bytes[j]) {
            case 0:
                type = 'Temp';
                num  = 2;
                break;
            case 1:
                type = 'Humidity';
                num  = 2;
                break;
            case 2:
                type = 'CO2';
                num  = 0;
                break;
            case 3:
                type = 'TVOC';
                num  = 0;
                break;
            case 4:
                type = 'Light';
                num  = 0;
                break;
            default:
                type = 'unknown';
                break;
        }
        for (let i = 0; i < 4; i++) {
            dataView.setUint8(i, input.bytes[j+i+1]);
        }
        floatNumber = dataView.getFloat32(0, true); 
        decoded.data.push({
            type:  type,
            Value: floatNumber.toFixed(num)
        });
    }
    return { data: decoded }
}

function encodeDownlink(input) {
  return {
    bytes: [225, 230, 255, 0]
  };
}
```

</details>

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_decoder.png"/>
</div>

Una vez creado el perfil del dispositivo, el siguiente paso es agregar una aplicación.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_profile.png"/>
</div>

#### 2.2.2 Agregar una Aplicación {#add_appication}

Crea y configura una aplicación dentro de tu Servidor de Red LoRaWAN para gestionar tus dispositivos.

Para crear una nueva aplicación, dirígete a la sección `Tenant` en la barra lateral y selecciona `Application`.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

Para completar la creación, asigna un `Nombre` y, opcionalmente, proporciona una descripción.

#### 2.2.3 Registrar un Dispositivo en una Aplicación {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

Haz clic en el botón `Add device` dentro de tu aplicación.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>

Para agregar un dispositivo, debes especificar un `Nombre`, proporcionar el `DevEUI` y seleccionar el `Device Profile` que creaste previamente.

Puedes optar por generar automáticamente el `DevEUI` o utilizar uno existente desde tu dispositivo.

Para este proceso, utilizaremos el `DevEUI` generado automáticamente. Tras enviar estos datos, el dispositivo se añadirá a la aplicación y se te redirigirá automáticamente a la sección de claves OTAA.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>

Haz clic en el botón para generar una **AppKey** aleatoria o bien utiliza una clave existente. Asegúrate de contar con todas las credenciales necesarias. Para *MAC Version 1.0.4*, las credenciales requeridas son:

- **DevEUI (Ejemplo):** `5d61e4648dc926e2`
- **AppKey (Ejemplo):** `ec2b966c2c4bbe94a6ef79d0479db0e5`

Con estos datos, podemos ejecutar el comando:

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

Para comandos adicionales y asistencia, consulta la sección [console command](#commands).

## Paso 3. Configurar SenseCAP Indicator para Conectarse a la Red {#configure_credentials}

Para establecer la conexión con tu SenseCAP Indicator, puedes usar cualquier **herramienta de consola serial** ([Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom), [Putty](https://www.putty.org/), etc.), o simplemente usar `idf monitor` (sigue las [instrucciones detalladas en la documentación de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html)):

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>

:::caution
Asegúrate de que tu dispositivo **no haya iniciado ya** la conexión LoRaWAN antes de este paso.  
Si ya lo ha hecho, deberás detenerla.
:::

Introduce los comandos con las credenciales dentro de la consola.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

Ahora deberías poder ver las claves en tu SenseCAP Indicator. Si es necesario, realiza las actualizaciones correspondientes.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

Una vez que presiones el botón *Join*, podrás observar el proceso de conexión directamente desde la *consola*, lo que te permitirá monitorear y verificar el establecimiento exitoso de la conexión.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

## Paso 4: **Enviar y Recibir Mensajes** {#uplink_and_downlink}

En esta sección te guiaremos para monitorear las comunicaciones de *subida (uplink)* y *bajada (downlink)* entre tu dispositivo y la red LoRaWAN.[^4]

[^4]: [Guía Técnica: Envío y Recepción de Mensajes con LoRaWAN®](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/sending-and-receiving-messages-with-lorawan/sending-and-receiving-messages/)

### Mensaje de Uplink

Los mensajes de *uplink* son fundamentales en una red LoRaWAN, ya que permiten que dispositivos como el SenseCAP Indicator transmitan datos al servidor de red. Estos mensajes son esenciales para reportar *datos de sensores*, estado del dispositivo y otra información de telemetría.

<details>

<summary>El Concepto de Mensaje de Uplink</summary>

**Uplink en LoRaWAN:**

En una red LoRaWAN, un mensaje de *uplink* es cualquier comunicación iniciada por un dispositivo final (como el SenseCAP Indicator) y enviada al servidor de red a través de un gateway. Estos mensajes se utilizan típicamente para transmitir lecturas de sensores o el estado del dispositivo.

1. **Recolección de Datos**: El SenseCAP Indicator recopila datos de sus sensores o procesos internos. Esto puede incluir mediciones ambientales, estado del dispositivo u otras métricas relevantes.

2. **Empaquetado de Datos**: Los datos recopilados se empaquetan en un *formato predefinido* adecuado para la transmisión. Esto puede implicar codificar los datos para optimizar el tamaño del payload y garantizar una transmisión eficiente.

3. **Envío del Mensaje**: El dispositivo transmite el mensaje de uplink a través de la red LoRaWAN. Esta transmisión generalmente está programada a intervalos específicos (por ejemplo, cada 5 minutos) o se activa por ciertos eventos (por ejemplo, una lectura que exceda un umbral).

**Recepción y Procesamiento en el Servidor de Red:**

Una vez que el mensaje de uplink es enviado por el SenseCAP Indicator, es recibido por el servidor de red LoRaWAN a través de un gateway. El servidor procesa el mensaje de la siguiente manera:

1. **Recepción del Mensaje**: El servidor de red recibe el mensaje desde el gateway y lo decodifica.

2. **Procesamiento y Análisis de Datos**: Tras la decodificación, el servidor procesa los datos, lo cual puede incluir registrarlos, activar alertas o realizar análisis adicionales. Los datos pueden incluir diversos tipos de información como lecturas de temperatura, niveles de humedad u otros datos según las capacidades del dispositivo.

3. **Acciones de Respuesta**: Con base en los datos recibidos, el servidor de red puede tomar acciones, como enviar un mensaje de *downlink* al dispositivo con instrucciones o actualizaciones. Esta respuesta puede ser automática (según reglas predefinidas) o manual, realizada por un usuario que esté monitoreando el sistema.

</details>

#### Mensaje de Uplink: envío de datos del sensor

En el contexto de la demostración LoRaWAN utilizando el SenseCAP Indicator, el mensaje de *uplink* puede consistir en datos sencillos del sensor, como lecturas de temperatura o humedad.

Una vez que el proceso de *join* ha sido exitoso, puedes visualizar los registros en la sección `LoRaWAN frames` para monitorear la transmisión de datos y obtener un resumen detallado de la comunicación del dispositivo con la red.

:::tip
Navega a la sección *LoRaWAN frames* del dispositivo dentro de la aplicación que has creado y localiza tu dispositivo específico. Aquí podrás monitorear y gestionar los paquetes de datos que son transmitidos y recibidos por tu dispositivo, asegurando una comunicación fluida y correcta dentro de la red LoRaWAN.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

Ahora, con la función de decodificador activada, deberías poder ver los datos ya interpretados en la sección de eventos (puedes desplegarla presionando el botón `+up`). Esto te permitirá comprender y analizar de forma más efectiva los datos entrantes desde tu dispositivo.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

### Mensaje de Downlink

El proceso de *downlink* en la red LoRaWAN es fundamental para la comunicación bidireccional, permitiendo la transmisión de datos y comandos desde el servidor de red de vuelta al dispositivo SenseCAP Indicator. Esta capacidad es especialmente útil para ejecutar comandos operativos, realizar cambios de configuración o actualizaciones de firmware.

<details>

<summary>El Concepto de Mensaje de Downlink</summary>

**Downlink en LoRaWAN:**

En un entorno de demostración LoRaWAN, los mensajes de *downlink* se utilizan para controlar una bombilla animada en el SenseCAP Indicator, permitiendo a los usuarios encenderla o apagarla. Sin embargo, esta funcionalidad puede extenderse para ejecutar comandos o configuraciones específicas según sea necesario.

**Envío de un Mensaje de Downlink**

1. **Iniciar un mensaje de Downlink**: Para enviar un mensaje de downlink, normalmente se utiliza la interfaz del servidor de red. Navega a la sección donde puedas programar mensajes de downlink para tu dispositivo.

2. **Formato del mensaje**: Asegúrate de que el mensaje esté formateado de acuerdo con las especificaciones requeridas por el SenseCAP Indicator. Esto puede incluir formatos específicos de payload o métodos de codificación, según la función del mensaje.

3. **Programar el mensaje**: Tras redactar el mensaje, prográmalo para ser enviado en un momento apropiado. El tiempo puede depender de varios factores, como el horario de transmisión de datos del dispositivo o su ventana de actividad esperada.

**Recepción y procesamiento del mensaje de Downlink en el dispositivo**

Una vez que el servidor de red LoRaWAN transmite el mensaje de downlink, el SenseCAP Indicator lo recibirá durante su próxima ventana de recepción. El dispositivo procesa el mensaje de la siguiente forma:

1. **Recepción del mensaje**: El SenseCAP Indicator escucha mensajes de downlink durante ventanas de recepción predefinidas. Es fundamental que el dispositivo esté en estado receptivo durante estos periodos.

2. **Procesamiento del mensaje**: Al recibir un mensaje de downlink, el dispositivo procesará su contenido. Esto puede implicar cambiar una configuración, actualizar un parámetro o activar una acción como cambiar el estado de un relé o ajustar un umbral de sensor[^5].

[^5]: [Función TxData - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L445)

3. **Retroalimentación y confirmación**: Si el mensaje de downlink requiere confirmación (en el caso de un *downlink confirmado*), el dispositivo enviará una confirmación en su próximo mensaje de uplink.

</details>

#### Mensaje de Demostración: Controlar una Bombilla

En esta demostración, se ilustra cómo los mensajes de downlink pueden utilizarse para controlar una bombilla simulada en el Indicator a través de la red LoRaWAN. Este ejemplo muestra la aplicación práctica de la comunicación *downlink* para la gestión remota de dispositivos.

**1. Descripción del escenario:**

- En esta demo, el SenseCAP Indicator está configurado con una bombilla virtual, que representa un dispositivo simple y controlable.
- La bombilla tiene dos estados: 'encendida' y 'apagada', controlados mediante mensajes de downlink enviados desde el servidor de red LoRaWAN.

**2. Preparar el mensaje de Downlink:**

- Para controlar la bombilla, se define una estructura específica de payload para el mensaje de downlink. Por simplicidad, asumimos lo siguiente:
  - Enviar el payload `0001` enciende la bombilla.
  - Enviar el payload `0000` apaga la bombilla.

- Estos payloads están codificados en un formato que el SenseCAP Indicator entiende y al que puede reaccionar[^6].

[^6]: [Función lorawan_rx_data_handle - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L591C33-L591C33)

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bulb_payload.png"/>
</div>

**3. Enviar el mensaje de Downlink:**

- A través de la interfaz del servidor de red, puedes programar el mensaje de downlink con el payload correspondiente.
- El mensaje se pone en cola y se envía al SenseCAP Indicator durante su siguiente ventana de recepción disponible (por lo tanto, hay un pequeño retraso).

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/queue_packet.png"/>
</div>

**4. Recepción del mensaje de Downlink:**

Para encender la bombilla, se programa un downlink con payload `0001`. Para apagarla, se usa el payload `0000`. En este caso, ya se había enviado un mensaje downlink `0001`, y ahora se envía uno con `0000` para apagar la bombilla.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/console_bulb.png"/>
</div>

Y puedes ver que la bombilla está ahora **apagada**.

## Funcionalidades por Explorar {#function}

El SenseCAP Indicator cuenta con una amplia gama de funcionalidades que esperan ser exploradas. En esta demostración, mostramos cómo subir datos de sensores y cómo utilizar mensajes de *downlink* para controlar la bombilla virtual del SenseCAP Indicator.

**Capacidades clave por descubrir:**

**1. Recepción y ejecución de comandos:**

- El SenseCAP Indicator recibe eficientemente los mensajes *downlink*.
- Procesa estos mensajes, interpretando comandos como encender o apagar la bombilla virtual.
- El estado de la bombilla cambia en consecuencia, ofreciendo una simulación realista del control de dispositivos.

**2. Confirmación y verificación:**

- Tras ejecutar el comando, el SenseCAP Indicator envía un mensaje de *uplink* como confirmación.
- Esta confirmación puede rastrearse a través de la interfaz del servidor de red, asegurando que el comando fue recibido y ejecutado correctamente.

**3. Aplicaciones prácticas:**

- Esta sencilla demostración resalta la utilidad de los mensajes *downlink* en la manipulación de dispositivos IoT.
- Muestra un aspecto clave de los ecosistemas IoT: la capacidad de dirigir y gestionar dispositivos de forma remota, demostrando su valor práctico.

Esta demostración es solo el comienzo. El SenseCAP Indicator ofrece una plataforma versátil para diversas aplicaciones IoT, desde monitoreo ambiental hasta automatización inteligente. Al profundizar en sus capacidades, podrás desbloquear todo el potencial de esta potente herramienta, abriendo paso a soluciones innovadoras y un mayor control en tus proyectos IoT. ¡Te animamos a experimentar y descubrir las múltiples formas en que el SenseCAP Indicator puede potenciar tus iniciativas!

## Página de Comandos de Consola {#commands}

<!-- check the [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md)): -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>

Aquí tienes una introducción al comando de terminal para configurar la red LoRaWAN, presentado como una entrada de manual:

### **lorawan**
Este comando configura la información de red LoRaWAN para un dispositivo. Permite establecer diversos parámetros necesarios tanto para OTAA (*Over-the-Air Activation*) como para ABP (*Activation By Personalization*).

##### Uso:
```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### Opciones:

- `--eui=`: Establece el EUI (Identificador Único Extendido) del dispositivo. Requiere 8 dígitos hexadecimales, con el bit más significativo (MSB) primero.

- `--join_eui=`: Establece el JOIN EUI (anteriormente conocido como APP EUI), que es un identificador de aplicación en OTAA. Requiere 8 dígitos hexadecimales, con MSB primero.

- `--app_key=`: Establece la APP KEY, una clave criptográfica utilizada en el proceso de unión OTAA. Requiere 16 dígitos hexadecimales, con MSB primero.

- `--dev_addr=`: Establece la Dirección del Dispositivo para ABP. Es un identificador de 4 dígitos hexadecimales, con MSB primero.

- `--apps_key=`: Establece la APPS KEY para ABP, que se utiliza para cifrar los datos de la aplicación. Requiere 16 dígitos hexadecimales, con MSB primero.

- `--nwks_key=`: Establece la NWKS KEY para ABP, que se utiliza para cifrar los datos de red y para la autenticación del dispositivo. Requiere 16 dígitos hexadecimales, con MSB primero.

## Preguntas Frecuentes

<details>
<summary>¿El SenseCAP Indicator puede funcionar como Gateway LoRaWAN?</summary>

No, el SenseCAP Indicator no está diseñado para funcionar como una Gateway LoRaWAN según el transceptor LoRa SX1262. Es principalmente un dispositivo final dentro de la arquitectura de red LoRaWAN. Una Gateway LoRaWAN suele tener diferentes capacidades de hardware y software, diseñadas para conectar múltiples dispositivos finales como el SenseCAP Indicator al servidor de red. Si buscas una Gateway LoRaWAN, considera dispositivos diseñados específicamente para ese propósito.
</details>

<details>
<summary>¿Por qué el servidor de red no envía un `joinAccept`?</summary>

**Nota:** Existen algunos escenarios en los que un dispositivo puede no recibir un `joinAccept` desde el servidor de red:

- **Cambio de frecuencia:** Si cambias la configuración de frecuencia pero mantienes las mismas credenciales en el servidor de red, es posible que el dispositivo no se sincronice correctamente.

- **Memoria del dispositivo borrada:** Si has borrado la memoria flash del dispositivo pero sigues usando las mismas credenciales, esto puede causar problemas de sincronización.

En ambos casos, es crucial asegurarse de que los *nonces* (números únicos por sesión) del dispositivo OTAA estén sincronizados. Para resolverlo, utiliza la función `Flush OTAA device nonces` en tu servidor de red. Esta acción reiniciará los *nonces* y ayudará a restablecer una conexión adecuada.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>
</details>

<details>
<summary>¿Qué FPort se debe usar para enviar un mensaje *downlink*?</summary>

En la configuración actual de nuestra demostración LoRaWAN, no hay un puerto predefinido para enviar mensajes *downlink*. El código de la demo está diseñado para ser flexible y puede adaptarse a tus necesidades específicas.

Si necesitas procesar mensajes en un puerto específico de cierta manera, tienes la opción de modificar el código según lo requieras. Esta personalización permite un manejo adaptado de mensajes *downlink* según el puerto, brindándote mayor control sobre cómo el dispositivo interpreta y responde a estas comunicaciones.
</details>

<details>
<summary>¿Cómo usar la versión MAC 1.1.0?</summary>

Para utilizar las funciones de la versión MAC 1.1.0 de LoRaWAN, es necesario configurar adecuadamente los ajustes criptográficos. Puedes hacerlo utilizando el comando `idf.py menuconfig` para habilitar la opción `USE LRWAN_1_1_X_CRYPTO`.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/menuconfig_110.png"/>
</div>

La implementación de la versión `1.1.0` en LoRaWAN requiere algoritmos criptográficos específicos para mayor seguridad. Al habilitar esta opción, aseguras que tu dispositivo sea compatible con las características de seguridad avanzadas y los protocolos introducidos en esta versión.
</details>

## Servicio ODM

Seeed Studio ofrece un servicio integral de ODM (fabricación de diseño original) para facilitar personalizaciones rápidas y escalado de soluciones adaptadas a distintas necesidades. Si estás buscando adaptar tu proyecto con funciones especializadas o necesitas asistencia para escalar tus operaciones eficientemente, no dudes en contactarnos. Para consultas e información detallada, escríbenos a **iot@seeed.cc**. Estamos aquí para ayudarte a convertir tus ideas en realidad.

## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para ayudarte!**

Si encuentras algún problema o tienes preguntas al seguir este tutorial, no dudes en ponerte en contacto con nuestro equipo de soporte técnico. ¡Siempre estamos disponibles para ayudarte!

Únete a nuestro [canal oficial de Discord de Seeed](https://discord.gg/kpY74apCWj) para hacer tus preguntas, o participa en las [discusiones en GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartir tus experiencias y sugerencias.
