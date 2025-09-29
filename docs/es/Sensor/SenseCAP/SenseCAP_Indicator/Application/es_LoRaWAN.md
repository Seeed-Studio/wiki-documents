---
description: Para previsualizar la funcionalidad LoRaWAN del SenseCAP Indicator
title: Nodo Final LoRaWAN - SenseCAP Indicator
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
  author: Spencer
tags:
  - device
categories:
  - SenseCAP
---

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>

## Demostración Práctica

En esta sección, profundizaremos en la funcionalidad básica de LoRaWAN (*Clase C* y *OTAA*) del SenseCAP Indicator a través de una demostración práctica. El proceso se divide en tres pasos principales:

1. [Obtener Firmware](#flash_firmware): Personalizar e instalar el firmware según sea necesario.
2. [Registrar el Dispositivo](#HEAD_register_device): Agregar tu dispositivo a un Servidor de Red LoRaWAN.
3. [Configurar Credenciales LoRaWAN](#configure_credentials): Ingresar los detalles de red necesarios en tu SenseCAP Indicator.

Antes de comenzar, obtengamos algunos antecedentes sobre LoRaWAN.

## LoRaWAN

LoRaWAN se describe como un protocolo de red de Baja Potencia y Área Amplia (LPWA) que conecta de forma inalámbrica dispositivos alimentados por batería a internet a través de grandes regiones o redes. Es parte del sistema inalámbrico LoRa y opera en un espectro libre de licencias, soportando comunicación de largo alcance con ancho de banda limitado. Se caracteriza por comunicación de largo alcance (hasta 10 millas), larga duración de batería (hasta 10 años), bajo costo y bajo consumo de energía con un tamaño de carga útil que va de 51 a 241 bytes dependiendo de los datos[^1].

[^1]: [Una Introducción Suave a Gateways y Nodos LoRaWAN
](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="Marco de Trabajo LoRaWAN " />
<div style={{ marginTop: '-8px' }}><em>Marco de Trabajo de Red LoRaWAN</em></div>

</div>  

## Sistema de Percepción Avanzada

El "Sistema de Percepción Avanzada" de Seeed Studio es una [solución IoT](/es/SenseCAP_introduction) que proporciona una gama integral de herramientas de detección, redes, computación de borde y nube diseñadas para mejorar la conciencia ambiental en diversas industrias. Este sistema, equipado con una variedad diversa de módulos y dispositivos[^2], actúa como los "ojos y oídos" digitales, facilitando una comprensión transformadora del mundo real.

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="Sistema de Percepción Avanzada" />
<div style={{ marginTop: '-8px' }}><em>Capas del Sistema de Percepción Avanzada</em></div>
<br/>
</div>

El Equipo SenseCAP se enfoca principalmente en componentes de Sensor y Red, comprometiéndose a entregar calidad de primera clase y soluciones industriales personalizadas. Su trabajo ha resultado en la creación de ofertas aclamadas, como la innovadora [Solución de Pueblo Inteligente](https://www.seeedstudio.com/smart-village), que ha obtenido elogios por su practicidad y diseño visionario.

En el ámbito de la red Helium, las contribuciones del equipo son particularmente notables. Dispositivos como el SenseCAP M1, M2 y M4 no son solo hotspots Helium de alto rendimiento; son fundamentales para permitir a los usuarios ganar criptomoneda HNT mientras construyen simultáneamente una infraestructura de red LoRaWAN® inalámbrica descentralizada. El SenseCAP M4 Square se destaca por su capacidad de operar múltiples Aplicaciones Web 3.0, simplificando así el despliegue de sistemas complejos de múltiples aplicaciones.[^3]

Aprovechando esta profunda experiencia y el compromiso continuo con una base de clientes diversa, el Equipo SenseCAP ha decidido estratégicamente integrar la funcionalidad LoRa en el SenseCAP Indicator.

[^2]: [Productos SenseCAP - Bazaar](https://www.seeedstudio.com/SenseCAP-c-1825.html)
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

Echemos un vistazo más de cerca a la funcionalidad LoRaWAN del [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html).

## Descripción general

| Característica                   | Detalles                                                     |
|:---:|:---:|
| Transceptores de Radio           | SX1262                                                       |
| Clases Soportadas                | Clase A/B/C                                                  |
| Bandas de Frecuencia Soportadas  | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| Versión Mac LoRaWAN              | 1.0.4/1.1.0                                                  |
| Stack LoRaWAN del Dispositivo Final Adoptado | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| Documentación                    | [Documentación LoRaMac](http://stackforce.github.io/LoRaMac-doc/) |

<!-- |Regional parameters|RP002-1.0.3| -->

## Paso 1. Obtener el Firmware {#flash_firmware}

### 1.1 Descargar el Firmware

Para comenzar, descarga el firmware LoRaWAN, `indicator_lorawan.bin`, para el SenseCAP Indicator desde la página de GitHub Release.

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::info ¿Interesado en firmware personalizado?
La [Guía de Programación ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) proporciona información sobre cómo construir el tuyo propio. Puedes acceder y modificar el [código fuente](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) para adaptarlo a tus necesidades específicas.
:::

### 1.2 Flashear el Firmware

Para flashear el firmware en el SenseCAP Indicator, descárgalo primero y luego usa esptool (o `esptool.py` si tienes un entorno ESP-IDF) para flashearlo (para una guía completa, consulta las [instrucciones](/es/SenseCAP_Indicator_Application_LoRaWAN)).

**Flasheando firmware en Windows usando esptool:**

Usa el comando a continuación en el símbolo del sistema de Windows para flashear el firmware:

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

Por ejemplo, si tu carpeta `flash_bin` está ubicada en la unidad `D:` y contiene la siguiente estructura:

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

Tu comando se verá así:

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

Si tienes múltiples puertos y necesitas especificar uno, usa el argumento `-p` o `--port`:

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>

:::note
Los usuarios de Mac deben reemplazar `./esptool.exe` con `./esptool`.

Si encuentras problemas durante el flasheo, considera reducir la **velocidad de baudios** o consulta [estos pasos de solución de problemas](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device).
:::

Una vez que el firmware se haya flasheado exitosamente, obtén los parámetros esenciales como el Device EUI y APPkey del Servidor de Red LoRaWAN de los pasos siguientes.

## Paso 2. Registrar el Dispositivo en el Servidor de Red LoRaWAN {#HEAD_register_device}

> Antes de comenzar, asegúrate de que tu dispositivo esté dentro del área de cobertura de una red LoRaWAN.

Esta sección te guiará a través de la conexión a un servidor de red LoRaWAN local. Usaremos la plataforma [ChirpStack](https://www.chirpstack.io/) como ejemplo, junto con el [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html). *Si estás empleando un servidor de red diferente, el procedimiento será similar*; necesitarás recopilar la información esencial para la activación:

- OTAA (Activación Over The Air):
  - DevEUI
  - AppKey
  - JoinEUI/AppEUI (Mac Version 1.1.0 necesaria)
- ABP (Activación Por Personalización):
  - DevEUI
  - DevAddr
  - AppSKey
  - NwkSKey

<!-- lorawan --eui c53364863bca6cad --app_key 220a52c272e2b1151ef5b626c0dab025 -->
<!-- lorawan --eui 97752c0092d12add --apps_key 22222222222222222222222222222222 --nwks_key 11111111111111111111111111111111 --dev_addr 33333333 -->
### 2.1 Configurar el Gateway LoRaWAN SenseCAP

Para configurar tu gateway SenseCAP, accede a su interfaz web donde comenzarás a configurar un servidor de red ChirpStack. A continuación se muestra una guía visual que muestra la página de configuración:

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>

Después de ajustar la configuración, haz clic en `Save & Apply` para confirmar tus cambios. Luego puedes acceder a la interfaz ChirpStack usando la URL proporcionada (por ejemplo, `http://192.168.1.102:8080`).

Usa las siguientes credenciales predeterminadas para iniciar sesión:

- **Nombre de usuario:** `admin`
- **Contraseña:** `admin`

Para más detalles y opciones de configuración avanzada, visita la [Guía de Configuración LNS del Gateway SenseCAP M2](https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).

### 2.2 Configurar el Servidor de Red Local (ChirpStack)

Consulta la documentación de ChirpStack para características detalladas y soporte de versiones LoRaWAN: [Documentación del Servidor de Red ChirpStack](https://www.chirpstack.io/network-server/features/lorawan-versions/).

Aquí están los pasos para configurar tu servidor de red local usando ChirpStack:

1. **[Crear un Perfil de Dispositivo](#create_dev_profile):** Esto estandariza la configuración y capacidades de tus dispositivos. Es crucial para asegurar que tus dispositivos se comuniquen efectivamente dentro de la red.
2. **[Añadir una Aplicación](#add_appication):** Esto ayuda a organizar y gestionar tus dispositivos. Las aplicaciones se usan para agrupar dispositivos que comparten el mismo propósito o características, haciendo la gestión más sencilla.
3. **[Registrar un dispositivo bajo una aplicación](#register_device):** Este paso vincula tu dispositivo a la configuración específica y reglas de manejo de datos que has establecido en tu aplicación. Es un paso crítico para asegurar que tu dispositivo opere correctamente dentro de tu red.

#### 2.2.1 Crear un Perfil de Dispositivo {#create_dev_profile}

Para crear un nuevo perfil de dispositivo en `Device profiles`, ve a 'Tenant' en la barra lateral y luego selecciona 'Device profiles'.

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>

Crear un perfil de dispositivo es un paso crucial para asegurar que tu dispositivo se comunique efectivamente a través de la red LoRaWAN. Esto implica seleccionar parámetros técnicos que influyen en el rendimiento y compatibilidad del dispositivo. Aquí te mostramos cómo configurarlo:

- **Versión MAC:** Esto se refiere a la versión del protocolo de Control de Acceso al Medio (MAC) que utiliza tu dispositivo. El protocolo MAC es esencial para gestionar cómo tu dispositivo accede a la red. Puedes seleccionar entre las versiones v1.0.4 y v1.1.0.
- **Revisión de Parámetros Regionales:** Estos son los parámetros específicos que necesitan ser configurados basándose en la ubicación geográfica de tu dispositivo. Aseguran que el dispositivo cumpla con las regulaciones locales y especificaciones de red.

**Elegir Versión MAC**

La versión MAC que selecciones es fundamental ya que determina el conjunto de credenciales que tu dispositivo requerirá:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='MAC Version 1.0.4'>

  Necesitarás las siguientes credenciales:

- **DevEUI:** Este es un identificador único asignado a tu dispositivo, asegurando unicidad global.
- **AppKey:** Una clave secreta usada para cifrar y asegurar las comunicaciones de tu dispositivo.

</TabItem>

<TabItem value='MAC Version 1.1.0'>

  Tu dispositivo requerirá estas credenciales:

- **DevEUI:** Un identificador globalmente único para tu dispositivo.
- **AppEUI/JoinEUI:** Un identificador único para la aplicación a la que se conecta tu dispositivo.
- **AppKey:** La clave criptográfica usada para asegurar las comunicaciones.

</TabItem>
</Tabs>

**Elegir Revisión de Parámetros Regionales**

En el contexto de configurar un perfil de dispositivo para la red LoRaWAN, la versión de Parámetros Regionales (RP) que elijas es crucial para asegurar que tu dispositivo opere en cumplimiento con estándares y especificaciones regionales específicos.

**Configuración Actual**

Por ahora, estamos configurando un perfil de dispositivo con Versión MAC `1.0.4` y Revisión de Parámetros Regionales `RP002-1.0.2`.

:::info Revisión de Parámetros Regionales
Para configurar un perfil de dispositivo en la red LoRaWAN, `RP002-1.0.2` es una opción adecuada para las necesidades actuales. `RP002-1.0.3` es recomendado por el [código](https://github.com/Lora-net/LoRaMac-node/blob/v4.7.0/src/mac/region/Region.h) según la especificación LoRaMac-node `v4.7.0`.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>

Comprender y configurar correctamente los elementos necesarios es clave para asegurar que tu dispositivo se comunique de manera efectiva y segura a través de la red LoRaWAN.

Para usar el tipo de dispositivo **Clase C**, es importante habilitar específicamente esta funcionalidad en tu perfil de dispositivo.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>

**Función Decodificadora**

En efecto, para hacer que los datos de carga útil transmitidos por tu dispositivo sean significativos e interpretables, es esencial implementar un decodificador dentro del perfil del dispositivo. Este decodificador traducirá los datos binarios sin procesar a un formato legible, permitiéndote entender y utilizar efectivamente la información que envía tu dispositivo.

<details>

<summary>Haz clic para copiar Decoder.js</summary>

El decodificador proviene del [repositorio de GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js)

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

Una vez que se crea el perfil del dispositivo, el siguiente paso es agregar una aplicación.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_profile.png"/>
</div>

#### 2.2.2 Agregar una Aplicación {#add_appication}

Crea y configura una aplicación dentro de tu Servidor de Red LoRaWAN para gestionar tus dispositivos.

Para crear una nueva Aplicación, ve a 'Tenant' en la barra lateral y luego selecciona 'Application'.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

Para enviar, establece el Nombre y opcionalmente proporciona una descripción.

#### 2.2.3 Registrar un dispositivo bajo una aplicación {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

Presiona el botón `Add device` en tu aplicación.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>

Para agregar un dispositivo, necesitas especificar un `Name` y proporcionar un `Device EUI` junto con el `Device Profile` que has creado previamente.

Puedes optar por generar automáticamente el Device EUI o usar uno existente de tu dispositivo.

Para este proceso, emplearemos el Device EUI generado automáticamente. Después de enviar estos detalles, el dispositivo será agregado a la aplicación, y serás redirigido automáticamente a la sección de Claves OTAA.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>

Haz clic en el botón para generar una **Clave de Aplicación (AppKey)** aleatoria u opta por usar una preexistente. Asegúrate de tener todas las credenciales y parámetros necesarios. Para *MAC Version 1.0.4*, las credenciales requeridas son:

- **DevEUI (Ejemplo):** `5d61e4648dc926e2`
- **AppKey (Ejemplo):** `ec2b966c2c4bbe94a6ef79d0479db0e5`

Con estos detalles, tenemos el comando:

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

Para comandos adicionales y asistencia, consulte la sección de [comandos de consola](#commands).

## Paso 3. Configurar SenseCAP Indicator para Unirse a la Red{#configure_credentials}

Para establecer una conexión con su SenseCAP Indicator, puede usar cualquier **herramienta serial**([Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom), [Putty](https://www.putty.org/), etc.) o simplemente usar `idf monitor`(siga las [instrucciones detalladas proporcionadas en la documentación de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html)):

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>

:::caution
Asegúrese de que su dispositivo no haya iniciado la conexión LoRaWAN antes de este paso.
Si lo ha hecho, necesitará detenerla.
:::

Ingrese los comandos incluyendo las credenciales en la consola.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

Ahora, debería poder ver las claves en su SenseCAP Indicator. Si es necesario, realice las actualizaciones requeridas a las configuraciones.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

Cuando presione el botón *Join*, podrá observar el proceso de conexión directamente a través de la *consola*, permitiéndole monitorear y verificar el establecimiento exitoso de la conexión.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

## Paso 4 **Envío y Recepción de Mensajes** {#uplink_and_downlink}

En esta sección, le guiaremos a través del proceso de monitoreo de las comunicaciones de enlace ascendente y descendente entre su dispositivo y la red LoRaWAN.[^4]

[^4]: [En Profundidad: Envío y Recepción de Mensajes con LoRaWAN®](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/sending-and-receiving-messages-with-lorawan/sending-and-receiving-messages/)

### Mensaje de Enlace Ascendente

Los mensajes de enlace ascendente son fundamentales en una red LoRaWAN, permitiendo que dispositivos como el SenseCAP Indicator transmitan datos a un servidor de red. Estos mensajes son cruciales para reportar *datos de sensores*, estado del dispositivo y otra información de telemetría.

<details>

<summary>El Concepto de Mensaje de Enlace Ascendente</summary>

**Enlace Ascendente en LoRaWAN:**

En una red LoRaWAN, un mensaje de enlace ascendente es cualquier comunicación iniciada por un dispositivo final (como el SenseCAP Indicator) y enviada al servidor de red a través de una puerta de enlace. Estos mensajes se utilizan típicamente para transmitir lecturas de sensores o estado del dispositivo.

1. **Recolección de Datos**: El SenseCAP Indicator recolecta datos de sus sensores o procesos internos. Esto podría incluir lecturas ambientales, estado del dispositivo u otras métricas relevantes.

2. **Empaquetado de Datos**: Los datos recolectados se empaquetan luego en un *formato predefinido* adecuado para la transmisión. Esto puede involucrar codificar los datos para optimizar el tamaño de la carga útil y asegurar una transmisión eficiente.

3. **Envío del Mensaje**: El dispositivo transmite el mensaje de enlace ascendente a través de la red LoRaWAN. Esta transmisión usualmente se programa basándose en intervalos específicos (ej., cada 5 minutos) o se activa por ciertos eventos (ej., una violación de umbral).

**Recepción y Procesamiento en el Servidor de Red:**

Una vez que el mensaje de enlace ascendente es enviado por el SenseCAP Indicator, es recibido por el servidor de red LoRaWAN vía una puerta de enlace. El servidor de red luego procesa el mensaje de la siguiente manera:

1. **Recepción del Mensaje**: El servidor de red recibe el mensaje de enlace ascendente de la puerta de enlace y lo decodifica.

2. **Procesamiento y Análisis de Datos**: Después de decodificar, el servidor procesa los datos, lo que podría involucrar registrarlos, activar alertas o realizar análisis adicionales. Los datos pueden incluir varios tipos de información como lecturas de temperatura, niveles de humedad u otros datos de sensores, dependiendo de las capacidades del dispositivo.

3. **Acciones de Respuesta**: Basándose en los datos recibidos, el servidor de red puede tomar acción, como enviar un mensaje de enlace descendente al dispositivo con instrucciones o actualizaciones. Esta respuesta puede ser automatizada basándose en reglas predefinidas o activada manualmente por un usuario monitoreando el sistema.

</details>

#### Mensaje de Enlace Ascendente: cargar Datos de Sensores

En el contexto de la demostración LoRaWAN usando el SenseCAP Indicator, el mensaje de enlace ascendente podría consistir en datos simples de sensores, como lecturas de temperatura o humedad.

Una vez que el *proceso de unión* es exitoso, puede ver los registros en la sección `LoRaWAN frames` para monitorear la transmisión de datos y recibir un relato detallado de la comunicación del dispositivo con la red.

:::tip
Navegue a la sección *LoRaWAN frames* de un dispositivo dentro de la aplicación que ha creado, y localice su dispositivo específico. Aquí es donde puede monitorear y gestionar los paquetes de datos que están siendo transmitidos y recibidos por su dispositivo, asegurando una comunicación y operación fluida dentro de la red LoRaWAN.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

Ahora, con la función decodificadora activada, debería poder ver los datos analizados bajo la sección de eventos (puede revelar esto presionando el botón `+up`). Esto le permitirá entender y analizar los datos entrantes de su dispositivo de manera más efectiva.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

### Mensaje de Enlace Descendente

El proceso de enlace descendente en la red LoRaWAN es crítico para la comunicación bidireccional, permitiendo la transmisión de datos y comandos desde el servidor de red de vuelta al dispositivo SenseCAP Indicator. Esta capacidad es particularmente útil para varios comandos operacionales, cambios de configuración o actualizaciones de firmware.

<details>

<summary>El Concepto de Mensaje de Enlace Descendente</summary>

**Enlace Descendente en LoRaWAN:**

En el entorno de demostración de LoRaWAN, los mensajes de enlace descendente se utilizan para controlar una bombilla animada en el SenseCAP Indicator, permitiendo a los usuarios encenderla o apagarla. Sin embargo, esta funcionalidad puede extenderse para ejecutar comandos específicos o configuraciones según sea necesario.

**Enviando un Mensaje de Enlace Descendente**

1. **Iniciando un Mensaje de Enlace Descendente**: Para enviar un mensaje de enlace descendente, típicamente utilizarás la interfaz del servidor de red. Navega a la sección donde puedes programar mensajes de enlace descendente para tu dispositivo.

2. **Formato del Mensaje**: Asegúrate de que el mensaje esté formateado de acuerdo con las especificaciones requeridas por el SenseCAP Indicator. Esto podría incluir formatos de carga útil específicos o métodos de codificación, dependiendo de lo que el mensaje de enlace descendente pretenda hacer.

3. **Programando el Mensaje**: Después de componer el mensaje, prográmalo para ser enviado en un momento apropiado. El tiempo puede depender de varios factores, como el horario de transmisión de datos del dispositivo o su tiempo esperado de actividad.

**Recibiendo y Procesando el Mensaje de Enlace Descendente en el Dispositivo**

Una vez que un mensaje de enlace descendente es transmitido por el servidor de red LoRaWAN, el SenseCAP Indicator lo recibirá durante su siguiente ventana de recepción. El dispositivo procesa el mensaje de la siguiente manera:

1. **Recepción del Mensaje**: El SenseCAP Indicator escucha mensajes de enlace descendente durante ventanas de recepción predefinidas. Es crucial que el dispositivo esté en un estado receptivo durante estos períodos.

2. **Procesando el Mensaje**: Al recibir un mensaje de enlace descendente, el dispositivo procesará el contenido. Esto podría involucrar cambiar una configuración, actualizar un parámetro, o activar una acción como alternar un relé o ajustar un umbral de sensor[^5].

[^5]: [TxData Function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L445)

3. **Retroalimentación y Confirmación**: Si el mensaje de enlace descendente requiere confirmación (en caso de un enlace descendente confirmado), el dispositivo enviará un acuse de recibo en su siguiente mensaje de enlace ascendente.

</details>

#### Mensaje de Demostración: Controlando una Bombilla

En esta demostración, ilustraremos cómo los mensajes de enlace descendente pueden utilizarse para controlar una bombilla simulada en el Indicator a través de la red LoRaWAN. Este ejemplo muestra la aplicación práctica de la comunicación de enlace descendente para la gestión remota de dispositivos.

**1. Resumen del Escenario:**

- En esta demostración, el SenseCAP Indicator está configurado con una bombilla virtual, que representa un dispositivo simple y controlable.
- La bombilla tiene dos estados: 'encendida' y 'apagada', que son controlados a través de mensajes de enlace descendente enviados desde el servidor de red LoRaWAN.

**2. Preparando el Mensaje de Enlace Descendente:**

- Para controlar la bombilla, se define una estructura de carga útil específica para el mensaje de enlace descendente. Por simplicidad, asumamos:
  - Enviar la carga útil `0001` enciende la bombilla.
  - Enviar la carga útil `0000` apaga la bombilla.

- Estas cargas útiles están codificadas en un formato que el SenseCAP Indicator está programado para entender y actuar en consecuencia.[^6]

[^6]: [función lorawan_rx_data_handle - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L591C33-L591C33)

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bulb_payload.png"/>
</div>

**3. Enviando el Mensaje de Enlace Descendente:**

- A través de la interfaz del servidor de red, puedes programar el mensaje de enlace descendente con la carga útil correspondiente.
- El mensaje es entonces puesto en cola y enviado al SenseCAP Indicator durante su siguiente ventana de recepción disponible (por lo que hay retraso).

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/queue_packet.png"/>
</div>

**4. Recibiendo el Mensaje de Enlace Descendente:**

Para encender la bombilla, programas un enlace descendente con carga útil `0001`. Para apagarla, usas la carga útil `0000`. Como había puesto en cola un mensaje de enlace descendente `0001`, ahora quiero enviar un mensaje de enlace descendente `0000` para apagar la bombilla.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/console_bulb.png"/>
</div>

Y puedes ver que la bombilla está **apagada**.

## Funcionalidades esperando ser exploradas {#function}

Hay una amplia gama de funcionalidades en el SenseCAP Indicator esperando ser exploradas. En esta demostración, ilustramos la carga de datos de sensores y el uso de mensajes de enlace descendente para controlar la bombilla virtual del SenseCAP Indicator.

**Capacidades Clave a Explorar:**

**1. Recepción y Ejecución de Comandos:**

- El SenseCAP Indicator recibe eficientemente mensajes de enlace descendente.
- Procesa estos mensajes, interpretando comandos como encender o apagar la bombilla virtual.
- El estado de la bombilla cambia en consecuencia, ofreciendo una simulación realista del control del dispositivo.

**2. Confirmación y Verificación:**

- Después de la ejecución del comando, el SenseCAP Indicator envía de vuelta un mensaje de enlace ascendente como confirmación.
- Este reconocimiento puede ser rastreado a través de la

interfaz del servidor de red, asegurando que el comando fue efectivamente recibido y ejecutado.

**3. Aplicaciones Prácticas:**

- Esta demostración simple subraya la utilidad de los mensajes de enlace descendente LoRaWAN para manipular dispositivos IoT.
- Muestra un aspecto clave de los ecosistemas IoT: la capacidad de dirigir y gestionar dispositivos remotamente, demostrando su valor práctico.

Esta demostración es solo el comienzo. El SenseCAP Indicator ofrece una plataforma versátil para varias aplicaciones IoT, desde monitoreo ambiental hasta automatización inteligente. Al profundizar en sus capacidades, puedes desbloquear todo el potencial de esta poderosa herramienta, allanando el camino para soluciones innovadoras y control mejorado en tus proyectos IoT. Te animamos a experimentar y descubrir las muchas formas en que el SenseCAP Indicator puede mejorar tus esfuerzos IoT.

## Página del Manual de Consola {#commands}

<!-- check the [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md)): -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>

Aquí hay una introducción al comando de terminal para configurar la información de red LoRaWAN, con estilo de entrada de manual:

### **lorawan**

Este comando configura la información de red LoRaWAN para un dispositivo. Te permite establecer varios parámetros requeridos tanto para métodos OTAA (Activación Over-the-Air) como ABP (Activación por Personalización).

##### Uso

```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### Opciones

- `--eui=`: Establece el EUI (Identificador Único Extendido) para el dispositivo. Requiere 8 dígitos hexadecimales, con MSB (Bit Más Significativo) primero.
  
- `--join_eui=`: Establece el JOIN EUI (anteriormente conocido como APP EUI) que es un identificador de aplicación en OTAA. Requiere 8 dígitos hexadecimales, con MSB primero.

- `--app_key=`: Establece la APP KEY, que es una clave criptográfica utilizada en el proceso de unión OTAA. Requiere 16 dígitos hexadecimales, con MSB primero.

- `--dev_addr=`: Establece la Dirección del Dispositivo para ABP. Es un identificador de 4 dígitos hexadecimales, con MSB primero.

- `--apps_key=`: Establece la APPS KEY para ABP, que se utiliza para cifrar cargas útiles de aplicación. Requiere 16 dígitos hexadecimales, con MSB primero.

- `--nwks_key=`: Establece la NWKS KEY para ABP, que se utiliza para cifrar cargas útiles de red y para autenticación del dispositivo. Requiere 16 dígitos hexadecimales, con MSB primero.

## Preguntas Frecuentes

<details>
<summary>¿Puede el SenseCAP Indicator servir como mi Gateway LoRaWAN?</summary>

No, el SenseCAP Indicator no está diseñado para funcionar como un Gateway LoRaWAN según el transceptor lora SX1262. Es principalmente un dispositivo final en la arquitectura de red LoRaWAN. Un Gateway LoRaWAN típicamente tiene diferentes capacidades de hardware y software, diseñado para conectar múltiples dispositivos finales como el SenseCAP Indicator al servidor de red. Si estás buscando un Gateway LoRaWAN, deberías considerar dispositivos específicamente diseñados para este propósito.
</details>

<details>
<summary>¿Por qué el Servidor de Red True no está enviando un joinAccept?</summary>

**Nota:** Hay algunos escenarios donde un dispositivo puede fallar al recibir un `joinAccept` del servidor de red:

- **Cambio de Frecuencia:** Si alteras la configuración de frecuencia pero mantienes las mismas credenciales del dispositivo en el servidor de red, el dispositivo puede no sincronizarse correctamente.

- **Flash del Dispositivo Limpiado:** Si has borrado la memoria flash del dispositivo pero continúas usando las mismas credenciales, esto puede llevar a problemas de sincronización.

En ambos casos, es crucial asegurar que los nonces (número usado una vez) del dispositivo OTAA (Activación Por Aire) estén sincronizados. Para abordar esto, usa la función `Flush OTAA device nonces` en tu servidor de red. Esta acción reiniciará los nonces y ayudará a restablecer una conexión adecuada.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>
</details>

<details>
<summary>¿Qué FPort usar para enviar mensaje de enlace descendente?</summary>

En la configuración actual de nuestra demostración LoRaWAN, no hay un puerto predefinido designado para enviar mensajes de enlace descendente. El código de demostración está diseñado para ser flexible y puede adaptarse a tus necesidades específicas.

Si requieres el procesamiento de mensajes en un puerto específico de una manera particular, tienes la opción de modificar el código en consecuencia. Esta personalización permite el manejo adaptado de mensajes de enlace descendente basado en diferentes puertos, dándote mayor control sobre cómo tu dispositivo interpreta y responde a estas comunicaciones.
</details>

<details>
<summary>¿Cómo usar la Versión MAC 1.1.0?</summary>

Para utilizar las características de la versión MAC LoRaWAN 1.1.0, es necesario configurar las configuraciones criptográficas apropiadamente. Puedes hacer esto usando el comando `idf.py menuconfig` para habilitar la opción `USE LRWAN_1_1_X_CRYPTO`.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/menuconfig_110.png"/>
</div>

La implementación de la versión `1.1.0` en LoRaWAN requiere algoritmos criptográficos específicos para seguridad mejorada. Al establecer esta opción, aseguras que tu dispositivo sea compatible con las características de seguridad mejoradas y protocolos introducidos en esta versión.
</details>

## Servicio ODM

Seeed Studio ofrece un servicio ODM integral de ventanilla única para satisfacer los requisitos de personalización rápida y escalado para diversas necesidades. Si buscas adaptar tu proyecto con características especializadas o necesitas asistencia para escalar tus operaciones de manera eficiente, por favor contáctanos. Para consultas e información más detallada, contáctanos en iot@seeed.cc. Estamos aquí para ayudar a convertir tus ideas únicas en realidad.

## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

Si encuentras algún problema o tienes alguna pregunta mientras sigues este tutorial, por favor no dudes en contactar a nuestro soporte técnico. ¡Siempre estamos aquí para ayudar!

Visita nuestro [Canal Oficial de Discord de Seeed](https://discord.gg/kpY74apCWj) para hacer tus preguntas o las [discusiones de GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartir todo lo que quieras!
