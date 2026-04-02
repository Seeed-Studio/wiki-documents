---
description: Guía rápida de inicio de la pasarela LoRaWAN reComputer R1225
title: Guía rápida de inicio de la pasarela LoRaWAN reComputer R1225
keywords:
  - Pasarela
  - SenseCAP
  - Controlador de borde
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/25/2026
  author: Kian
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/es/r1225_quick_start/
updatedAt: '2026-03-31'
---
# Guía rápida de inicio

## Conexión de alimentación

### Alimentado por un adaptador de corriente

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

El reComputer R1225 se alimenta con un voltaje de CA nominal de 12&#126;24 V o un voltaje de CC de 9&#126;36V. La fuente de alimentación se conecta a través del conector de bloque de terminales de alimentación de 2 pines. Para conectar a tierra el reComputer R1225, el cable de tierra se puede fijar al tornillo situado en la esquina superior izquierda del terminal de alimentación.

:::note
La solución de alimentación utiliza un diodo rectificador en puente para la protección contra polaridad inversa y es compatible tanto con entradas de CA como de CC. Esto garantiza que **independientemente de cómo se conecten los terminales positivo y negativo de la fuente de alimentación**, el circuito no se dañará. Al usar un rectificador en puente, la polaridad del voltaje de salida permanece fija independientemente de la polaridad de entrada de CC, proporcionando una protección eficaz contra la polaridad inversa.
:::

### Alimentación PoE

Con el módulo PoE instalado, el puerto ETH0 del reComputer R1225 puede admitir alimentación PoE, proporcionando una forma cómoda y eficiente de alimentar el dispositivo a través de Ethernet. Esta opción simplifica el proceso de instalación y reduce la cantidad de cableado necesario, lo que la convierte en una solución ideal para aplicaciones con fuentes de alimentación limitadas o donde no hay tomas de corriente fácilmente disponibles.

- Entrada PoE: Rango 44~57V; Típico 48V
- Salida PoE: 12V, 1.1A máx.

:::tip
Cabe señalar que el módulo PoE proporcionado con el reComputer R1225 cumple con el estándar IEEE 802.3af y puede proporcionar una potencia máxima de 12.95W. **Por lo tanto, si es necesario conectar periféricos de alta potencia como SSD o módulos 4G, la alimentación PoE puede no ser suficiente**. En este caso, se recomienda utilizar en su lugar el terminal de CA/CC para la alimentación, a fin de garantizar un funcionamiento estable y fiable del dispositivo.
:::

## Acceder al Seeed Gateway OS

### Acceso a través del router

- Paso 1: Conecta tu R1225 a un cable Ethernet y conecta tu PC al mismo router

:::note
 Tu PC y el dispositivo deben estar conectados al mismo router/red.
:::

#### Diagrama de conexión de red

Cuando uses el R1225 por primera vez, si hay routers y cables Ethernet cerca, puedes optar por conectar el R1225 a la red mediante una conexión por cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram1.png" alt="pir" width={800} height="auto" /></p>

<!--Add one: if it is not the first connection and WiFi is already connected, even without plugging in the network cable, you can still access the management interface through the IP assigned by the router-->

:::tip
Si se configura Wi-Fi, puedes acceder a la interfaz LuCI a través de la dirección IP del R1225 sin un cable Ethernet, siempre que tu ordenador y el R1225 estén en la misma red.
:::

- Paso 2: Obtén la dirección IP de tu dispositivo

Comprueba la dirección IP de tu dispositivo en la página de administración de tu router.

- Paso 3: Obtén el nombre de usuario y la contraseña de tu dispositivo

  - Nombre de usuario: admin
  - Contraseña: null  (**No se requiere contraseña para el primer inicio de sesión**)

- Paso 4: Iniciar sesión en Luci

Introduce la dirección IP de tu dispositivo en un navegador para entrar en la página de Luci.
Luego introduce el nombre de usuario y la contraseña de tu dispositivo para iniciar sesión y haz clic en el botón Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

### Acceso a través del punto de acceso AP del dispositivo

:::caution
Cuando el R1225 se enciende por primera vez, su punto de acceso Wi-Fi permanece activo durante 5 minutos de forma predeterminada. Después de este tiempo, el punto de acceso del R1225 se apagará automáticamente.
:::

- Paso 1: Enciende el R1225

Conecta la pasarela LoRaWAN reComputer R1225 y el dispositivo se encenderá automáticamente.

- Paso 2: Conéctate al punto de acceso AP

  - SSID : R1225-XXXX (**últimos 4 dígitos del SN**)
  - Contraseña : 1234567890

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_AP.png" alt="pir" width={450} height="auto" /></p>

Cuando el reComputer R1225 se enciende por primera vez, habilita automáticamente el modo de punto de acceso. El SSID predeterminado para el punto de acceso es “R1225-XXXX (**últimos 4 dígitos del SN**)”, y la contraseña predeterminada es “1234567890”; conecta tu ordenador a este punto de acceso AP.

- Paso 3: Obtén la dirección IP de tu dispositivo

Después de conectarte al AP con el SSID R1225-XXXX, haz clic en el icono de detalles en la esquina superior derecha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi.png" alt="pir" width={450} height="auto" /></p>

Haz clic para abrir la página “Network and Internet” en la configuración del sistema y luego desplázate hasta la parte inferior para encontrar la dirección IP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi2.png" alt="pir" width={450} height="auto" /></p>

- Paso 4: Obtén el nombre de usuario y la contraseña de tu dispositivo

  - Nombre de usuario: admin
  - contraseña: null  (**No se requiere contraseña para el primer inicio de sesión**)

- Paso 5: Iniciar sesión en Luci

Introduce la dirección IP (192.168.2.1) en tu navegador para entrar en la consola local.  
Luego introduce el nombre de usuario y la contraseña de tu dispositivo y haz clic en el botón Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

## Configuración de red del R1225

### Conexión Ethernet

Ethernet es plug-and-play y no requiere configuración.
<!--Add pictures and content-->

### Conexión WIFI

- Paso 1: Haz clic en `Network` - `Wi-Fi`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi1.png" alt="pir" width={200} height="auto" /></p>

- Paso 2: Haz clic en el botón `Scan` para escanear el WIFI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi2.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Selecciona tu Wi-Fi para unirte a la red

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi3.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Envía la contraseña de Wi-Fi y luego haz clic en `Submit` y Save

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi5.png" alt="pir" width={800} height="auto" /></p>

- Paso 5: Haz clic en `Save & Apply` para aplicar tu configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi6.png" alt="pir" width={800} height="auto" /></p>

### Conexión celular (para la versión 4G)

- Paso 1: Inserta tu tarjeta SIM en la ranura para tarjeta Nano-SIM

Utiliza el clip para carril DIN que proporcionamos para insertarlo en el pequeño orificio junto a la ranura de la tarjeta SIM y luego inserta tu tarjeta SIM.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE.png" alt="pir" width={400} height="auto" /></p>

- Paso 2: Inicia sesión en la página de Luci y haz clic en `Network` - `LTE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE1.png" alt="pir" width={200} height="auto" /></p>

- Paso 3: Configura la información de APN y haz clic en `Save & Apply` para aplicar tu configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE2.png" alt="pir" width={800} height="auto" /></p>

## Configuración LoRaWAN del R1225

- Paso 1: Haz clic en `LoRa` - `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa1.png" alt="pir" width={200} height="auto" /></p>

- Paso 2: Marca `Enable LoRa functionality`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa2.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Haz clic en `Save & Apply` para aplicar tu configuración

### Configuración del plan de canales

- Paso 1: Ve a `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan1.png" alt="pir" width={200} height="auto" /></p>

- Paso 2: Selecciona `Region` y `Channel-plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan2.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Haz clic en `Save & Apply` para aplicar tu configuración

### Seleccionar la plataforma Chirpstack integrada

:::tip
El R1225 viene con ChirpStack (servidor de red LoRaWAN de código abierto) preinstalado.
:::

- Paso 1: Selecciona `Platform Type` - `ChirpStack`

- Paso 2: Comprueba el **EUI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack1.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Haz clic en `Open ChirpStack Application Server` en la esquina inferior izquierda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack2.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Inicia sesión en la plataforma en la nube de Chirpstack

  - Nombre de usuario/correo electrónico: admin

  - Contraseña: admin

El nombre de usuario y la contraseña predeterminados son ambos “admin”

Luego haz clic en `Submit` para ir a la interfaz de la plataforma Chirpstack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack3.png" alt="pir" width={800} height="auto" /></p>

### Vincular la pasarela R1225 LoRaWAN

- Paso 5: Navega a `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

- Paso 6: Ingresa el `Gateway Name` y `Gateway ID (EUI: 64)`

  - Nombre de la pasarela: Un nombre para tu pasarela

  - Gateway ID(EUI64): El EUI de la pasarela se puede encontrar en la etiqueta del dispositivo o en la consola local

  - Intervalo de estadísticas (seg): El intervalo esperado en segundos en el que la pasarela envía sus estadísticas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en `Submit`

### Comprobar el estado de conexión de la pasarela

Al completar todos los pasos de configuración, la pasarela debería mostrarse como **`Online`** en la plataforma ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack6.png" alt="pir" width={800} height="auto" /></p>

#### Datos de la pasarela

Navega a Gateways y elige la pasarela que quieres comprobar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack7.png" alt="pir" width={800} height="auto" /></p>