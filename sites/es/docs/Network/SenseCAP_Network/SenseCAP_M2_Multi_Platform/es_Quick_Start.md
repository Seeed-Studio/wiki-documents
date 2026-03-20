---
description: Inicio_rápido
title: Inicio rápido
keywords:
  - gateway
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
createdAt: '2023-09-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/quick_start_with_M2_MP/
---


## Conexión POE

SenseCAP M2 es compatible con PoE (Power on Ethernet) y cumple con el estándar IEEE 802.3 af.

:::tip
Necesitarás un switch PoE adicional que proporcione alimentación de 40V-57V CC como PSE (Power Sourcing Equipment) si tu módem/router no es compatible con PoE.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## Configuración de red del gateway

Conecta la antena y el adaptador de corriente al gateway.
El LED de encendido se mostrará en rojo y, en unos 15 s, el indicador de la parte superior parpadeará en verde, lo que indica que el gateway se está iniciando.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

Hay dos formas de conectarse a Internet. Elige la que funcione para ti.

### Conexión Ethernet

Conecta el cable Ethernet al puerto Ethernet y el indicador de la parte superior se mostrará en verde fijo si el gateway se conecta correctamente a Internet.

### Conexión WIFI

Hay dos formas para que los usuarios inicien sesión en la página de configuración de Luci.

#### Acceso a través del router

- Paso 1: Conecta tu dispositivo a un cable Ethernet y conecta tu PC al mismo router

:::note
 Tu PC y el dispositivo deben estar conectados al mismo router/red.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Obtén la dirección IP de tu dispositivo

Comprueba la dirección IP de tu dispositivo en la página de administración de tu router.

- Paso 3: Obtén el nombre de usuario y la contraseña de tu dispositivo

Puedes encontrar el nombre de usuario y la contraseña en la etiqueta de tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Inicia sesión en Luci

Introduce la dirección IP de tu dispositivo en un navegador para entrar en la página de Luci.
Luego introduce el nombre de usuario y la contraseña de tu dispositivo para iniciar sesión.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### Acceso mediante hotspot AP del dispositivo

- Paso 1: Enciende el hotspot AP del dispositivo

Mantén pulsado el botón durante 5 s hasta que el indicador azul parpadee lentamente para entrar en el modo de configuración.

- Paso 2: Conéctate al hotspot AP
El nombre del hotspot AP es SenseCAP_XXXXXX (dirección MAC de 6 dígitos), la contraseña predeterminada es 12345678; conecta tu ordenador a este hotspot AP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- Paso 3: Obtén el nombre de usuario y la contraseña de tu dispositivo

Puedes encontrar el nombre de usuario y la contraseña en la etiqueta de tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Inicia sesión en la Consola Local

Introduce la dirección IP (192.168.168.1) en tu navegador para entrar en la Consola Local. Luego introduce el nombre de usuario y la contraseña de tu dispositivo y haz clic en el botón Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### Conectarse a una WIFI

- Paso 1: Haz clic en `Network` - `Wireless`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Haz clic en el botón `Scan` para escanear la WIFI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Selecciona tu WI-FI para unirte a la red

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Introduce la contraseña de la Wi-Fi y luego haz clic en `Submit` y Save

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en Save and Apply para aplicar tu configuración

El indicador de la parte superior se mostrará en verde fijo si el gateway se conecta correctamente a la WIFI

### Conexión celular (para versión 4G)

- Paso 1: Inserta tu tarjeta SIM en la ranura para tarjeta Nano-SIM

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- Paso 2: Inicia sesión en la página de Luci y haz clic en `Network` - `Cellular`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Configura la información de APN y haz clic en `Save and Apply` para aplicar tu configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
Para reducir el consumo de datos, consulta [Low Data Consumption Mode Config](https://wiki.seeedstudio.com/es/traffic_saving_config).
:::

### Configuración del plan de canales

Ve a `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Selecciona la región y el plan de frecuencias.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Después de la configuración, haz clic en `Save&Apply`.

### Comprobar el estado de conexión del gateway

Después de encender el gateway, hay dos formas de comprobar el estado de funcionamiento del gateway:

#### Indicador LED

<table>
<tr><th colspan="2" valign="top"><b>Modo</b></th><th colspan="1" valign="top"><b>Descripción</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>Verde</p></td><td colspan="1" valign="top">Fijo</td><td colspan="1" valign="top">El gateway está en buen estado y la conexión a Internet funciona correctamente.</td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">El gateway se está iniciando, espera por favor.</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>Azul</p></td><td colspan="1" valign="top"><p></p><p>Fijo</p></td><td colspan="1" valign="top"><p>El gateway está listo para la conexión a Internet.</p><p>Se necesita una configuración adicional.</p></td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">Modo de configuración; saldrá automáticamente después de 5 minutos si no hay actividad.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Parpadeo rápido</p></td><td colspan="1" valign="top">Mantén pulsado el botón durante 30 s hasta que el indicador muestre un parpadeo rápido para activar el restablecimiento de fábrica.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Naranja</p></td><td colspan="1" valign="top"><p></p><p>Parpadeo lento</p></td><td colspan="1" valign="top">El firmware se está actualizando; no apagues el gateway ni desconectes Internet.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Blanco</p></td><td colspan="1" valign="top"><p></p><p>Fijo</p></td><td colspan="1" valign="top">El gateway solo tiene un firmware de fábrica y se actualizará automáticamente al firmware más reciente cuando se conecte a Internet.</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>Rojo</p></td><td colspan="1" valign="top">Fijo</td><td colspan="1" valign="top">Problema de hardware o fallo en la conexión a Internet.</td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">El gateway no está conectado al LNS.</td></tr>
</table>

#### APP SenseCAP Mate

En la SenseCAP Mate App, `Online status` indica `Online` cuando el gateway está conectado a la red.
Consulta el siguiente capítulo para obtener la SenseCAP App.

## Vincular el gateway

La SenseCAP Mate APP admite la configuración del dispositivo y la gestión remota.

- Paso 1: Descarga la SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- Paso 2: Inicia sesión en la APP
Si es la primera vez que utilizas la plataforma SenseCAP, primero registra una cuenta.

:::tip
Selecciona Global en Server Location.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- Paso 3: Añadir dispositivo

Haz clic en el `+` en la esquina superior derecha y selecciona Add device
Luego escanea el código QR de la etiqueta de tu gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

Configura el nombre y la ubicación de tu dispositivo. Luego confirma tu configuración.
Después de una vinculación correcta, verás tu gateway en el directorio Device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## Conectar los sensores SenseCAP

- Paso 1: Añadir dispositivo

Haz clic en el `+` en la esquina superior derecha y selecciona Add device
Luego escanea el código QR de la etiqueta de tu gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- Paso 2: Seleccionar el plan de frecuencias

Haz clic en `Settings`, configura la plataforma y la frecuencia; la frecuencia debe coincidir con la frecuencia de tu gateway.

por ejemplo: Si tu gateway es la versión US915, entonces debes configurar tu sensor a la frecuencia US915.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
El SenseCAP M2 Multi-Platform Gateway no puede conectarse a la red Helium.
:::

Para más configuraciones sobre los sensores SenseCAP, consulta: SenseCAP Sensors

## SenseCAP Portal y aplicación Mate

La aplicación SenseCAP Mate y SenseCAP Portal se pueden usar para comprobar el estado de tu dispositivo y para la gestión del dispositivo.

- [SenseCAP Mate APP para iOS en App Store](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [SenseCAP Mate APP para Android en Google Play Store](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### Información de la pasarela

Consulta la información de la pasarela en SenseCAP Portal y en la aplicación SenseCAP Mate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### Datos del sensor

Consulta los datos del sensor en SenseCAP Portal y en la aplicación SenseCAP Mate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
