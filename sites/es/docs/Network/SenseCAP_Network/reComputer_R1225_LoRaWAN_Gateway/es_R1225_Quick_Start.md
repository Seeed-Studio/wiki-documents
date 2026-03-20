---
description: Guía rápida de inicio del Gateway LoRaWAN reComputer R1225
title:  Guía rápida de inicio
keywords:
- Gateway
- SenseCAP
- Controlador de Borde
- reComputer R1225 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/13/2026
  author: Kian
---

## Conexión de alimentación

### Alimentado por un adaptador de corriente

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

El reComputer R1225 se alimenta con un voltaje de CA nominal de 12&#126;24 V o un voltaje de CC de 9&#126;36V. La fuente de alimentación se conecta a través del conector de bloque de terminales de alimentación de 2 pines. Para poner a tierra el reComputer R1225, el cable de tierra se puede fijar al tornillo situado en la esquina superior izquierda del terminal de alimentación.

:::note
La solución de alimentación utiliza un diodo rectificador de puente para la protección contra polaridad inversa y es compatible tanto con entradas de CA como de CC. Esto garantiza que **independientemente de cómo se conecten los terminales positivo y negativo de la fuente de alimentación**, el circuito no se dañará. Al usar un rectificador de puente, la polaridad del voltaje de salida permanece fija independientemente de la polaridad de entrada de CC, proporcionando una protección eficaz contra la polaridad inversa.
:::

### Alimentación PoE

Con el módulo PoE instalado, el puerto ETH0 del reComputer R1225 puede admitir alimentación PoE, proporcionando una forma cómoda y eficiente de alimentar el dispositivo a través de Ethernet. Esta opción simplifica el proceso de instalación y reduce la cantidad de cableado necesario, lo que la convierte en una solución ideal para aplicaciones con fuentes de alimentación limitadas o donde no hay tomas de corriente fácilmente disponibles.

- Entrada PoE: Rango 44~57V; Típico 48V
- Salida PoE: 12V, 1.1A máx.

:::tip
Cabe señalar que el módulo PoE proporcionado con el reComputer R1225 cumple con el estándar IEEE 802.3af y puede proporcionar una potencia máxima de 12.95W. **Por lo tanto, si es necesario conectar periféricos de alta potencia como módulos SSD o 4G, la alimentación PoE puede no ser suficiente**. En este caso, se recomienda utilizar en su lugar el terminal de alimentación de CA/CC para garantizar un funcionamiento estable y fiable del dispositivo.
:::

## Acceder a la interfaz de gestión de Seeed Gateway OS

### Acceso a través del router

- Paso 1: Conecta tu R1225 a un cable Ethernet y conecta tu PC al mismo router

:::note
 Tu PC y el dispositivo deben estar conectados al mismo router/red.
:::

#### Diagrama de conexión de red

Cuando uses el R1225 por primera vez, si hay routers y cables Ethernet cerca, puedes optar por conectar el R1225 a la red mediante una conexión por cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram.png" alt="pir" width={800} height="auto" /></p>

<!--Add one: if it is not the first connection and WiFi is already connected, even without plugging in the network cable, you can still access the management interface through the IP assigned by the router-->

:::tip
Durante la configuración inicial, si has configurado Wi‑Fi, puedes acceder a la interfaz Luci introduciendo la dirección IP del R1225, incluso si no has conectado un cable Ethernet, siempre que tu ordenador y el R1225 estén conectados a la misma red Wi‑Fi.
:::

- Paso 2: Obtén la dirección IP de tu dispositivo

Comprueba la dirección IP de tu dispositivo en la página de administración de tu router.

- Paso 3: Obtén el nombre de usuario y la contraseña de tu dispositivo

  - Nombre de usuario: admin
  - contraseña: null  (**No se requiere contraseña para el primer inicio de sesión**)

- Paso 4: Inicia sesión en Luci

Introduce la dirección IP de tu dispositivo en un navegador para entrar en la página de Luci.
Luego introduce el nombre de usuario y la contraseña de tu dispositivo para iniciar sesión y haz clic en el botón Login.

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>

### Acceso mediante hotspot AP del dispositivo

- Paso 1: Enciende el R1225

- Paso 2: Conéctate al hotspot AP

  - SSID : R1225-XXXX (**últimos 4 dígitos del SN**)
  - contraseña : 1234567890

Cuando el reComputer R1225 se enciende por primera vez, habilita automáticamente el modo hotspot. El SSID predeterminado del hotspot es “R1225-XXXX (**últimos 4 dígitos del SN**)”, y la contraseña predeterminada es “1234567890”; conecta tu ordenador a este hotspot AP.

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={400} height="auto" /></p>

- Paso 3: Obtén el nombre de usuario y la contraseña de tu dispositivo

  - Nombre de usuario: admin
  - contraseña: null  (**No se requiere contraseña para el primer inicio de sesión**)

- Paso 4: Inicia sesión en Luci

Introduce la dirección IP (192.168.168.1) en tu navegador para entrar en la consola local. Luego introduce el nombre de usuario y la contraseña de tu dispositivo y haz clic en el botón Login.

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

## Configuración de red del R1225

### Conexión Ethernet

### Conexión WIFI

- Paso 1: Haz clic en `Network` - `Wireless`

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Paso 2: Haz clic en el botón `Scan` para escanear la WIFI

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Paso 3: Selecciona tu WI-FI para unirte a la red

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Paso 4: Introduce la contraseña de la Wi‑Fi y luego haz clic en `Submit` y Save

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

Luego haz clic en Save and Apply para aplicar tu configuración

El indicador en la parte superior se mostrará en verde fijo si el gateway se conecta correctamente a la WIFI

### Conexión celular (para la versión 4G)

- Paso 1: Inserta tu tarjeta SIM en la ranura para tarjeta Nano‑SIM

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Paso 2: Inicia sesión en la página de Luci y haz clic en `Network` - `Cellular`

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Paso 3: Configura la información de APN y haz clic en `Save and Apply` para aplicar tu configuración

<!--Add image-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

## Configuración LoRaWAN del R1225

### Seleccionar la plataforma Chirpstack integrada

### Ajustes del plan de canales

### Vincular el Gateway LoRaWAN R1225

### Comprobar el estado de conexión del Gateway
