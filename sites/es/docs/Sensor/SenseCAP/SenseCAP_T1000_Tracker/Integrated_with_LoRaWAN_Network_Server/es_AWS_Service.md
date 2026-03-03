---
description: Conectar el SenseCAP T1000 Tracker a AWS
title: Servicios en la Nube de AWS
keywords:
- Tracker
- AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /es/SenseCAP_T1000_Tracker_AWS
last_update:
  date: 12/4/2024
  author: Leo
---

# Uso de Servicios en la Nube de AWS para el SenseCAP T1000 Tracker

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) proporciona los servicios en la nube que conectan tus dispositivos IoT a otros dispositivos y servicios en la nube de AWS. AWS IoT proporciona software de dispositivo que puede ayudarte a integrar tus dispositivos IoT en soluciones basadas en AWS IoT. Si tus dispositivos pueden conectarse a AWS IoT, AWS IoT puede conectarlos a los servicios en la nube que AWS proporciona.

Inicia sesión en la [consola de AWS IoT](https://console.aws.amazon.com/iot/home)

:::info
Si no tienes una cuenta de AWS, haz clic [aquí](https://portal.aws.amazon.com/billing/signup) para crear una.
:::

## Agregar Gateway

Navega a `Internet of Things`, luego haz clic en `IoT Core`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

En el menú izquierdo, selecciona `LPWAN devices` → `Gateways`, haz clic en `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>

`Gateway's EUI`: El EUI de tu gateway, puedes encontrarlo en la etiqueta del dispositivo.<br/>
`Frequency`: La banda de frecuencia del gateway.<br/>
`Name`: Nombra tu gateway (opcional)<br/>
`SubBand`: Opcionalmente, también puedes especificar datos de configuración LoRaWAN como las subbandas que deseas usar y filtros que pueden controlar el flujo de tráfico. Para más información, consulta [Configure position of wireless resources with AWS IoT Core for LoRaWAN](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## Configurar tu gateway

### Certificado del Gateway

Para autenticar tu gateway de modo que pueda comunicarse de forma segura con AWS IoT, tu gateway LoRaWAN debe presentar una clave privada y certificado a AWS IoT Core for LoRaWAN.

Haz clic en `Create certificate`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

Descarga y guarda los archivos de certificado y los certificados de confianza del servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

Debe haber cuatro archivos dentro, los usarás más tarde para configurar el gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>

### Permisos del Gateway

Si no has creado el rol IAM IoTWirelessGatewayCertManagerRole para tu cuenta, crea el rol antes de continuar agregando el gateway.
Tus gateways no podrán comunicarse con AWS IoT sin este rol.

Elige el Rol: `IoT Wireless Gateway Cert Manager Role`, luego envía la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>

Copia la URL CUPS, la usaremos en el siguiente paso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### Configuración del Gateway

Inicia sesión en la página de configuración Luci del gateway, consulta [Get_Started](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) para más detalles.

Navega a `LoRa` > `LoRa Network`.

`Mode`: Basic Station<br/>
`Gateway EUI`: El EUI de tu gateway<br/>
`Server`: CUPS Server<br/>
`URL`: La URL CUPS que copiamos antes<br/>
`Authentication Mode`: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

Copia el contenido del archivo de certificado que descargamos antes (el certificado se puede abrir en forma de texto).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

Navega a la página de Gateways y elige el gateway que has agregado.

En la sección de detalles específicos de LoRaWAN de la página de detalles del Gateway, verás el estado de conexión y la fecha y hora en que se recibió el último uplink.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>

## Agregar Perfiles

Los perfiles de dispositivo y servicio se pueden definir para describir configuraciones comunes de dispositivos. Estos perfiles describen parámetros de configuración que son compartidos por los dispositivos para facilitar la adición de esos dispositivos. AWS IoT Core para LoRaWAN admite perfiles de dispositivo y perfiles de servicio.

### Agregar perfiles de dispositivos

Navega a `Devices` > `Profiles`, haz clic en `Add device profile`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Proporciona un nombre de perfil de dispositivo, selecciona la banda de frecuencia (RfRegion) que estás usando para el dispositivo y la puerta de enlace, y mantén las otras configuraciones en los valores predeterminados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### Agregar perfiles de servicio

Navega a `Devices` > `Profiles`, haz clic en `Add service profile`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

Se recomienda que dejes habilitada la configuración `AddGWMetaData` para que recibas metadatos adicionales de la puerta de enlace para cada carga útil, como RSSI y SNR para la transmisión de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>

### Agregar Destino

Navega a `Devices` > `Destination`, haz clic en `Add destination`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Aquí selecciona `Publish to AWS IoT Core Message Broker` y nombra el `MQTT topic` del destino

Permisos: Selecciona un rol de servicio existente > `IoT Wireless Gateway Cert Manager Role`

:::info
Un nombre de destino solo puede tener caracteres alfanuméricos, - (guión) y _ (guión bajo) y no puede tener espacios.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="pir" width={800} height="auto" /></p>

## Agregar Dispositivos LoRaWAN

### Agregar dispositivo inalámbrico

Navega a `LPWAN devices` > `Devices`, haz clic en `Add wireless device`.

`Wireless device specification`: OTAAv1.0x

`DevEUI/APP EUI/APP key`: se pueden encontrar en la aplicación SenseCAP Mate, consulta [Get_Started](https://wiki.seeedstudio.com/es/Get_Started_with_SenseCAP_T1000_tracker/#get-started) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

Selecciona el perfil de dispositivo y el destino que creaste en el paso anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

Navega a la página de Dispositivos y elige el dispositivo que agregaste anteriormente.

En la sección Detalles de la página de detalles de dispositivos inalámbricos, verás la fecha de recepción.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Configurar el decodificador

### Crear Reglas de Mensaje

Navega a la pestaña `Message routing` → `Rules`, y haz clic en el botón `Create Rule`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

Nombra tu regla y envíala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>

`SQL version`: 2016-03-23<br/>
`SQL statement`: SELECT * FROM **"TuTopicoDeDestino"**

Aquí llenamos `t1000-raw` según [Agregar Destino](#add-destination)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>

Desplázate hacia abajo a la sección `Rule actions`, y selecciona `Lambda` desde `Action 1`, luego haz clic en `Create a Lambda function`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Function name`: Nombra tu función.<br/>
`Runtime`: Node.js 20.x<br/>
`Architexture`: x86_64

Haz clic en el botón `Create function` para crear una nueva función.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

Después de crear la función, va a la página de configuración de la función. La configuraremos más tarde, así que simplemente regresa a la página de reglas.

Haz clic en el botón Refresh y selecciona la función Lambda que creaste antes. Luego haz clic en `Next` para ir al Paso 4.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="pir" width={800} height="auto" /></p>

Verifica que todos los detalles de la regla sean correctos, luego haz clic en `Create` para crear la regla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="pir" width={800} height="auto" /></p>

### Configurar la Función Lambda

Regresa a la pestaña `Message routing` → `Rules`, selecciona la regla que creaste antes.

Haz clic en `Lambda` desde `Actions` y luego haz clic en el enlace para ir a la página de configuración de la función Lambda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="pir" width={800} height="auto" /></p>

En la siguiente página de configuración de función, renombra el archivo `index.mjs` a `index.js`, elimina todo el código y reemplázalo con el script de [Recurso](#resource), luego haz clic en el botón `Deploy`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

:::tip Nota
Reemplaza la `region` y el `device id` según tu dispositivo.
:::

Después de configurar el decodificador, haz clic en `Configuration` → `Permissions` → `Edit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `View the xxxxxxxxxxx` role en la parte inferior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Add permissions` → `Attach policies`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

Busca `AdministratorAccess`, marca la casilla a su izquierda, y luego haz clic en `Add Permissions`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

### Verificar los datos

Verifica los datos en la página `MQTT test client`, ingresa `#` y haz clic en el botón `Subscribe`, verás los datos.

La carga útil sin procesar del T1000 Tracker se publica desde `t1000-raw` y los datos decodificados se publican desde `tracker/measurement`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="pir" width={800} height="auto" /></p>

## Recurso

[Decodificador SenseCAP T1000 Tracker para AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)
