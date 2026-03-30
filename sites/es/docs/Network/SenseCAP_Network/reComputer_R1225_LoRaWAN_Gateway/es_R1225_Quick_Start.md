---
description: Inicio rápido de la pasarela LoRaWAN reComputer R1225
title: Inicio rápido de la pasarela LoRaWAN reComputer R1225
keywords:
  - Gateway
  - SenseCAP
  - Controlador de borde
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/13/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/es/r1225_quick_start/
updatedAt: '2026-03-26'
---

# Inicio rápido

## Conexión de alimentación

### Alimentado por un adaptador de corriente

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

El reComputer R1225 se alimenta con un voltaje de CA nominal de 12&#126;24 V o un voltaje de CC de 9&#126;36V. La fuente de alimentación se conecta a través del conector de bloque de terminales de alimentación de 2 pines. Para conectar a tierra el reComputer R1225, el cable de tierra se puede fijar al tornillo ubicado en la esquina superior izquierda del terminal de alimentación.

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

## Acceder al Seeed Gateway OS

### Acceso a través del router

- Paso 1: Conecta tu R1225 a un cable Ethernet y conecta tu PC al mismo router

:::note
 Tu PC y el dispositivo deben estar conectados al mismo router/red.
:::

#### Diagrama de conexión de red

Cuando uses el R1225 por primera vez, si hay routers y cables Ethernet cerca, puedes optar por conectar el R1225 a la red mediante una conexión por cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了Wifi，即使不插网线，也可以通过访问路由器分配的IP进入管理界面-->

:::tip
Durante la configuración inicial, si has configurado Wi-Fi, puedes acceder a la interfaz Luci introduciendo la dirección IP del R1225, incluso si no has conectado un cable Ethernet, siempre que tu ordenador y el R1225 estén conectados a la misma red Wi-Fi.
:::

- Paso 2: Obtén la dirección IP de tu dispositivo

Consulta la dirección IP de tu dispositivo en la página de administración de tu router.

- Paso 3: Obtén el nombre de usuario y la contraseña de tu dispositivo

  - Nombre de usuario: admin
  - Contraseña: null  (**No se requiere contraseña para el primer inicio de sesión**)

- Paso 4: Iniciar sesión en Luci

Introduce la dirección IP de tu dispositivo en un navegador para entrar en la página de Luci.
Luego introduce el nombre de usuario y la contraseña de tu dispositivo para iniciar sesión y haz clic en el botón Login.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

### Acceso a través del punto de acceso AP del dispositivo

- Paso 1: Enciende el R1225

- Paso 2: Conéctate al punto de acceso AP

  - SSID : R1225-XXXX (**últimos 4 dígitos del SN**)
  - Contraseña : 1234567890

Cuando el reComputer R1225 se enciende por primera vez, habilita automáticamente el modo de punto de acceso. El SSID predeterminado para el punto de acceso es “R1225-XXXX (**últimos 4 dígitos del SN**)”, y la contraseña predeterminada es “1234567890”; conecta tu ordenador a este punto de acceso AP.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Paso 3: Obtén el nombre de usuario y la contraseña de tu dispositivo

  - Nombre de usuario: admin
  - contraseña: null  (**No se requiere contraseña para el primer inicio de sesión**)

- Paso 4: Iniciar sesión en Luci

Introduce la dirección IP (192.168.168.1) en tu navegador para entrar en la consola local.  
Luego introduce el nombre de usuario y la contraseña de tu dispositivo y haz clic en el botón Login.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## Configuración de red del R1225

### Conexión Ethernet

<!--补充图片和内容-->

### Conexión WIFI

- Paso 1: Haz clic en `Network` - `Wireless`

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Paso 2: Haz clic en el botón `Scan` para escanear la WIFI

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Paso 3: Selecciona tu WI-FI para unirte a la red

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Paso 4: Envía la contraseña de la Wi-Fi y luego haz clic en `Submit` y Save

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Paso 5: Haz clic en `Save & Apply` para aplicar tu configuración

### Conexión celular (para la versión 4G)

- Paso 1: Inserta tu tarjeta SIM en la ranura para tarjeta Nano-SIM

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Paso 2: Inicia sesión en la página de Luci y haz clic en `Network` - `Cellular`

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Paso 3: Configura la información de APN y haz clic en `Save & Apply` para aplicar tu configuración

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## Configuración LoRaWAN del R1225

- Paso 1: Haz clic en `LoRa` - `LoRa Network`

- Paso 2: Marca `Enable LoRa functionality`

- Paso 3: Haz clic en `Save & Apply` para aplicar tu configuración

### Ajustes del plan de canales

- Paso : Navega a `LoRa` > `Channel Plan`

- Paso : Selecciona `Region` y `Channel-plan`

- Paso : Haz clic en `Save & Apply` para aplicar tu configuración

### Seleccionar la plataforma Chirpstack integrada

:::tip
El R1225 viene con ChirpStack (servidor de red LoRaWAN de código abierto) preinstalado.
:::

- Paso : Selecciona `Platform Type` - `ChirpStack`

- Paso : Comprueba el **EUI**

- Paso : Haz clic en `Open ChirpStack Application Server` en la esquina inferior izquierda

- Paso : Inicia sesión en la plataforma en la nube de Chirpstack
  - Nombre de usuario/correo electrónico: admin
  - Contraseña: admin

El nombre de usuario y la contraseña predeterminados son ambos “admin”

Luego haz clic en `Submit` para ir a la interfaz de la plataforma Chirpstack

### Vincular la pasarela LoRaWAN R1225

- Paso : Navega a `Gateway` > `Add gateway`

  - Nombre de la pasarela: Un nombre para tu pasarela

  - ID de la pasarela (EUI64): El EUI de la pasarela se puede encontrar en la etiqueta del dispositivo o en la consola local

  - Intervalo de estadísticas (seg): El intervalo esperado en segundos en el que la pasarela envía sus estadísticas

Luego haz clic en `Submit`

### Comprobar el estado de conexión de la pasarela
