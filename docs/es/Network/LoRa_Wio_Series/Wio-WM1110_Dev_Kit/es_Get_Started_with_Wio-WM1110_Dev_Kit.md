---
description: Comenzar con el Kit de Desarrollo Wio-WM1110
title: Comenzar con el Kit de Desarrollo Wio-WM1110
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_Wio-WM1110_Dev_Kit
sidebar_position: 2
last_update:
  date: 8/7/2023
  author: Jessie
---

## Preparación

- Kit de Desarrollo Wio-WM1110 x 1
- Computadora x 1
- Cable USB Tipo-C x 1
- Programador de Depuración J-Link x 1

### Conexión del Dispositivo

Conecte la Placa de Desarrollo Wio-WM1110 al Programador de Depuración J-Link de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png" alt="pir" width={800} height="auto" /></p>

:::info Conexión:
**3V3** (Placa de Desarrollo Wio-WM1110) -> **VTref** (Programador de Depuración J-Link Pin 1)  
**CLK** (Placa de Desarrollo Wio-WM1110) -> **SWCLK** (Programador de Depuración J-Link Pin 9)  
**DIO** (Placa de Desarrollo Wio-WM1110) -> **SWDIO** (Programador de Depuración J-Link Pin 7)  
**GND** (Placa de Desarrollo Wio-WM1110) -> **GND** (Programador de Depuración J-Link GND)
:::

### Configure su cadena de herramientas

Antes de poder comenzar a desarrollar, las siguientes herramientas son necesarias para esta Guía de Inicio.

#### SEGGER Embedded Studio (SES)

SES es una solución todo en uno para gestionar, construir, probar e implementar aplicaciones embebidas. Esto significa operaciones de desarrollo fluidas y eficientes gracias a su amplia gama de características. El potente gestor de proyectos permite la gestión de proyectos grandes y pequeños. Las características de control de versiones permiten el despliegue automático de aplicaciones.

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Descarga</span></a>

:::tip
Se recomienda usar la versión 5.68.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### Paquete de Software y Documentación SEGGER J-Link

<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>Paquete de Software y Documentación SEGGER J-Link-Descarga</span></a>

#### nRF5 SDK

El nRF5 SDK proporciona un entorno de desarrollo rico para dispositivos de la Serie nRF5 al incluir una amplia selección de controladores, bibliotecas, ejemplos para periféricos, SoftDevices y protocolos de radio propietarios.

Todos los ejemplos de código incluidos en el SDK están adaptados para compilar y ejecutar en el Kit de Desarrollo Wio-WM1110.

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-Descarga</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Paquete de Ejemplos de Seeed

Seeed proporciona un proyecto de ejemplo para que los desarrolladores puedan comenzar más rápidamente. Este ejemplo incluye comunicación LoRaWAN, adquisición de información de posicionamiento, adquisición de datos de sensores a bordo, etc.

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Ejemplo de Seeed-Descarga</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>

## Ejecutando una Primera Prueba

**Agregar archivo de ejemplo de Seeed al SDK nRF5**

Copia el [archivo de ejemplo de Seeed](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board) a la siguiente ruta del SDK nRF5:
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

Construyamos el proyecto "ses_blinky" para verificar si tu cadena de herramientas está configurada correctamente.
Importa el proyecto "ses_blinky".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png" alt="pir" width={800} height="auto" /></p>

**Compilando la aplicación de prueba**

Selecciona "Build" > "Compile project_target".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>

**Programando la aplicación de prueba**

Después de compilar la aplicación, puedes programarla en la placa de desarrollo.

Haz clic en "Target" -- "Connect J-Link"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png" alt="pir" width={800} height="auto" /></p>

Haz clic en "Build" -- "Build and Run" para construir el proyecto blinky.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png" alt="pir" width={800} height="auto" /></p>

Verás "Download successful" cuando se haya completado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png" alt="pir" width={800} height="auto" /></p>

Entonces los 2 LEDs en la placa parpadearán como sigue.

<div align="center"><img width={253} src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif" /></div>

## Comenzar

Este capítulo te guiará a través de mostrar información de ubicación actual en Node-Red vía TTN, y explica cómo configurar todos los servidores requeridos (Servidor de Red (NS) y un Servidor de Aplicación (AS)).

**Arquitectura y Flujo de Datos**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png" alt="pir" width={800} height="auto" /></p>

### Configurar las Claves

Antes de que un dispositivo pueda comunicarse vía el NS, necesitamos registrarlo con las 3 claves.

Wio-WM1110 DK permite a los usuarios establecer el DevEUI, AppEUI y AppKey, esto es requerido en los siguientes pasos, así que puedes definir nuestros propios parámetros en el archivo 'lorawan_key_config.h', luego flashearlo en el DK.

Archivo ubicado en:
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

O puedes obtener las claves generadas por TTN, luego llenar el archivo 'lorawan_key_config.h' y ejecutarlo en el DK.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

### Servicios de Módem y Geolocalización LoRa Cloud™

Los Servicios de Módem y Geolocalización LoRa Cloud proporcionan un conjunto completo de características de gestión del ciclo de vida para dispositivos LoRa® operando en una red LoRaWAN. Estas características incluyen pero no se limitan a:

- Telemetría integral del dispositivo
- Configuración del dispositivo y aplicación
- Sincronización de reloj
- Servicios avanzados de transporte de datos con robustez contra pérdida de paquetes y fragmentación transparente de datos (streaming de buffer y carga de archivos).
- Geolocalización

Para comenzar, ve al [portal LoRa Cloud™](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244) y regístrate para una cuenta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

#### Paso 1: Crear un Propietario

Para crear un token, primero necesitas crear un propietario.
Navega a la página DEVICE OWNERS.
Haz clic en CREATE NEW OWNER.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Obtener un Token

Se requiere un token para que el servidor de aplicación autentique llamadas al servidor de Servicios de Módem y Geolocalización LoRa Cloud.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>

#### Paso 3: URL de API

La URL de Servicios de Módem y Geolocalización LoRa Cloud depende de la región en la cual el dispositivo será desplegado.
Haz clic en "Manage Tokens", luego puedes verificar la URL de API:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>

:::tip
Cuando se reciben datos de un dispositivo, se registra automáticamente con el servidor de Servicios de Módem y Geolocalización LoRa Cloud. Esto significa que el dispositivo no necesita ser registrado de antemano.
:::

### Servidor de Red LoRaWAN® (TTN)

Actualmente usamos [The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)

Para comenzar, regístrate para una cuenta con The Things Industries o The Things Network.

#### Paso 1: Crear una aplicación

Navega a la página Applications, haz clic en "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Ingresa un ID de Aplicación, haz clic en Crear Aplicación para guardar tus cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Registrar el Dispositivo

Haz clic en "Registrar dispositivo final".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Configura los siguientes parámetros:

**Plan de Frecuencia**: Selecciona el plan de frecuencia apropiado para la región objetivo

**Versión LoRaWAN**: Especificación LoRaWAN 1.0.3

**Versión de Parámetros Regionales**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI: Los cuales definiste en el archivo 'lorawan_key_config.h' en la configuración anterior.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

#### Paso 3: Crear Credenciales

El servidor de red The Things Network V3 requiere que generes una contraseña MQTT única. En la página de Aplicación de la consola:

- Haz clic en Integraciones y luego en MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>

- Selecciona Generar nueva clave API.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>

- Copia los valores de los siguientes campos: Dirección del Servidor, Nombre de Usuario y Contraseña.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

### Servidor de Aplicación

El servidor de aplicación maneja los datos de aplicación y las tramas de gestión de dispositivos. Como no hay conexión de fondo entre el servidor de red LoRaWAN® y los Servicios de Módem y Geolocalización de LoRa Cloud™, todos los uplinks relacionados con el tráfico del módem deben ser reenviados por el servidor de aplicación a los Servicios de Módem y Geolocalización de Lora Cloud.

Usamos Node-RED como servidor de aplicación. Node-RED es una herramienta de programación visual basada en navegador que permite la creación rápida de prototipos. Construido sobre Node.js, Node-RED puede usarse para conectar flujos usando una amplia gama de nodos. Estos nodos pueden luego desplegarse al tiempo de ejecución de Node-RED con un solo clic.

#### Instalar Node.js®

Para instalar Node-RED localmente necesitarás una <a  href="https://nodered.org/docs/faq/node-versions" target="_blank"><span> Versión de Node Soportada </span></a>

Descarga la última versión LTS 16.x de Node.js desde el sitio oficial de <a  href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a>
 Te ofrecerá la mejor versión para tu sistema.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png" alt="pir" width={600} height="auto" /></p>

Al instalar Node.js, si estás usando una computadora que no ha tenido ningún entorno de programación instalado, recomendaríamos que marques la casilla para instalar las herramientas necesarias mientras instalas Node.js, lo cual te ahorrará muchos problemas necesarios.

La forma más fácil de instalar Node-RED es usando la herramienta de gestión de paquetes de Node, npm. Sin embargo, no recomendamos instalar Node-RED con npm 1.x, sino más bien actualizarlo a la última versión npm 2.x.

:::note
En Windows (Requiere Windows 10 y superior), usa el atajo Win+R y escribe cmd en la ventana emergente para abrir la terminal y ejecutar el siguiente comando.
:::

Si estás usando MacOS o Linux, por favor ejecuta el siguiente comando en la terminal y añade sudo al frente del comando para usuarios no root.

```cpp
npm install -g npm@2.x
```

Una vez instalado, abre un símbolo del sistema y ejecuta el siguiente comando para asegurar que Node.js y npm estén instalados correctamente.

```cpp
node --version && npm --version
```

Deberías recibir una salida que se vea similar a:

```cpp
> v18.7.0
> 9.6.5
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png" alt="pir" width={600} height="auto" /></p>

#### Instalar Node-RED

Instalar Node-RED como un módulo global añade el comando node-red a la ruta de tu sistema. Ejecuta lo siguiente en el símbolo del sistema:

```cpp
npm install -g --unsafe-perm node-red
```

Si Node-RED está instalado como un paquete npm global, entonces ejecuta el comando node-red directamente:

```cpp
node-red
```

Esto te permitirá ver el editor de Node-RED en http://localhost:1880.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png" alt="pir" width={600} height="auto" /></p>

La interfaz de usuario tiene tres áreas clave:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png" alt="pir" width={800} height="auto" /></p>

- **Paleta**: Aquí es donde puedes seleccionar nodos; estos son bloques funcionales que se pueden arrastrar y soltar, y luego se pueden vincular entre sí para crear un flujo.
- **Flujo**: Este es el código fuente del programa. En este panel, puedes vincular nodos entre sí para crear una aplicación.
- **Barra lateral**: La barra lateral muestra cualquier información de ayuda o depuración disponible para el nodo seleccionado.

#### Instalar librerías

Para configurar la demostración, instalaremos 2 librerías adicionales:

- [node-red-contrib-loracloud-utils](https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils): Maneja conexiones a servidores LoRa Cloud™

- [node-red-contrib-web-worldmap](https://www.npmjs.com/package/node-red-contrib-web-worldmap): Página web de mapa mundial para trazar "cosas" en él

Haz clic en el menú en la esquina superior derecha y selecciona "Manage palette".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png" alt="pir" width={800} height="auto" /></p>

Selecciona Install en el menú Palette.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png" alt="pir" width={800} height="auto" /></p>

Busca "node-red-contrib-loracloud-utils" e instala.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png" alt="pir" width={800} height="auto" /></p>

Repite estos pasos para instalar las librerías "node-red-contrib-web-worldmap".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png" alt="pir" width={800} height="auto" /></p>

#### Importar el Flujo

El paquete de Seeed incluye ejemplos útiles para guiarte a través de este proyecto de ejemplo, solo necesitas importar estos 2 archivos de configuración.

```
.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json

.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png" alt="pir" width={800} height="auto" /></p>

Luego verás los siguientes flujos:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png" alt="pir" width={800} height="auto" /></p>

#### Configurar el Flujo

**Configurando el Servidor de Red LoRaWAN (MQTT)**
Todos los conectores del servidor de red están activados por defecto; sin embargo, la conexión MQTT debe configurarse por separado.
Antes de comenzar, obtén los datos requeridos:
- Dirección del servidor MQTT
- Puerto MQTT
- Nombre de usuario MQTT
- Contraseña MQTT

Estos datos se pueden obtener en **Paso 3: Crear Credenciales**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

Haz doble clic en el nodo "TTN v3-Uplinks" y edita el nodo MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>

Puedes encontrar el Servidor y Puerto en el [paso anterior](https://wiki.seeedstudio.com/es/Wio-WM1110_Dev_Kit_Server_Configuration/#step-3-create-credentials:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password.).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png" alt="pir" width={800} height="auto" /></p>

Luego añade el nombre de usuario y contraseña a "Security".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png" alt="pir" width={800} height="auto" /></p>

Haz clic en Add y luego en Done.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png" alt="pir" width={600} height="auto" /></p>

Haz doble clic en el nodo "TTN joinReq" y selecciona el servidor MQTT que añadimos en el paso anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png" alt="pir" width={800} height="auto" /></p>

**Configuración del Servicio de Módem y Geolocalización**

Para configurar el servidor, los valores MGS URL y MGS TOKEN del [paso anterior](https://wiki.seeedstudio.com/es/Wio-WM1110_Dev_Kit_Server_Configuration/#step-2-get-a-token)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png" alt="pir" width={800} height="auto" /></p>

Completa el EUI de tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

Haz clic en el botón "Deploy" para desplegar el flujo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png" alt="pir" width={800} height="auto" /></p>

#### Vista de Datos

Haz clic en "Debug" para ver los datos devueltos por los Servicios de Módem y Geolocalización de LoRa Cloud:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>

**Geolocalización**

Para mostrar el mapa, añade `/worldmap` a la URL en tu navegador web.
Por ejemplo: http://127.0.0.1:1880/worldmap

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>

## Recursos

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

[SEGGER J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

## Soporte Técnico

**¿Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
