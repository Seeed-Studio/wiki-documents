---
description: Quick_Start
title: Inicio Rápido
keywords:
- gateway
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
---


## Conexión POE

SenseCAP M2 soporta PoE (Power on Ethernet) y es compatible con el estándar IEEE 802.3 af.

:::tip
Necesitarás tener un switch PoE adicional que proporcione alimentación DC de 40V-57V como PSE (Power Sourcing Equipment) si tu módem/router no soporta PoE.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## Configuración de Red del Gateway

Conecta la antena y el adaptador de alimentación al gateway.
El LED de alimentación se mostrará en rojo, y en aproximadamente 15s, el indicador en la parte superior parpadeará en verde, indicando que el gateway se está iniciando.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

Hay dos formas de conectarse a Internet. Elige la que funcione para ti.

### Conexión Ethernet

Conecta el cable Ethernet al puerto Ethernet, y el indicador en la parte superior mostrará verde sólido si el gateway se conecta exitosamente a internet.

### Conexión WIFI

Hay dos formas para que los usuarios accedan a la página de configuración Luci.

#### Acceso vía router

- Paso 1: Conecta tu dispositivo a un cable Ethernet, y conecta tu PC al mismo router.

:::note Tu PC y dispositivo deben estar conectados al mismo router/red.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Obtén la Dirección IP de tu dispositivo

Verifica la Dirección IP de tu dispositivo en la página de administración de tu router.

- Paso 3: Obtén el Nombre de Usuario y Contraseña de tu dispositivo

Puedes encontrar el Nombre de Usuario y Contraseña en la etiqueta de tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Iniciar sesión en Luci

Ingresa la Dirección IP de tu dispositivo en un navegador para entrar a la página Luci.
Luego ingresa el nombre de usuario y contraseña de tu dispositivo para iniciar sesión.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### Acceso vía hotspot AP del dispositivo

- Paso 1: Activa el hotspot AP del dispositivo.

Presiona el botón por 5s hasta que el indicador azul parpadee lentamente para entrar al modo de configuración.

- Paso 2: Conéctate al hotspot AP.
El nombre del hotspot AP es SenseCAP_XXXXXX (dirección MAC de 6 cifras), la contraseña predeterminada es 12345678; conecta tu computadora a este hotspot AP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- Paso 3: Obtén el Nombre de Usuario y Contraseña de tu dispositivo

Puedes encontrar el Nombre de Usuario y Contraseña en la etiqueta de tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Iniciar sesión en la Consola Local

Ingresa la Dirección IP (192.168.168.1) en tu navegador para entrar a la Consola Local. Luego ingresa el nombre de usuario y contraseña de tu dispositivo, y haz clic en el botón Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### Conectar a una WIFI

- Paso 1: Haz clic en `Network` - `Wireless`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Haz clic en el botón `Scan` para escanear la WIFI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Selecciona tu WI-FI para unirte a la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- Paso 4: Envía la contraseña del Wi-Fi, y luego haz clic en `Submit` y Save.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en Save and Apply para aplicar tu configuración.

El indicador en la parte superior mostrará verde sólido si el gateway se conecta exitosamente a la WIFI.

### Conexión Celular (para versión 4G)

- Paso 1: Inserta tu tarjeta SIM en la ranura de tarjeta Nano-SIM

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- Paso 2: Inicia sesión en la página Luci, y haz clic en `Network` - `Cellular`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Configura la información APN, y haz clic en `Save and Apply` para aplicar tu configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
Para reducir el consumo de datos, por favor revisa [Configuración de Modo de Bajo Consumo de Datos](https://wiki.seeedstudio.com/es/traffic_saving_config).
:::

### Configuración del Plan de Canales

Navega a `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Selecciona la Región y el plan de frecuencia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Después de configurar, haz clic en `Save&Apply`.

### Verificando el Estado de Conexión del Gateway

Después de encender el gateway, hay dos formas para verificar el estado de funcionamiento del gateway:

#### Indicador LED

<table>
<tr><th colspan="2" valign="top"><b>Modo</b></th><th colspan="1" valign="top"><b>Descripción</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>Verde</p></td><td colspan="1" valign="top">Sólido</td><td colspan="1" valign="top">El gateway está saludable y la conexión a internet está bien conectada.</td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">El gateway se está iniciando, por favor espera.</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>Azul</p></td><td colspan="1" valign="top"><p></p><p>Sólido</p></td><td colspan="1" valign="top"><p>El gateway está listo para la conexión a internet.</p><p>Se necesita configuración adicional.</p></td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">Modo de configuración, y saldrá automáticamente después de 5 mins si no hay actividad.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Parpadeo rápido</p></td><td colspan="1" valign="top">Presiona el botón por 30s hasta que el indicador muestre parpadeo rápido activará el restablecimiento de fábrica.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Naranja</p></td><td colspan="1" valign="top"><p></p><p>Parpadeo lento</p></td><td colspan="1" valign="top">El firmware se está actualizando, y por favor no apagues el gateway o desconectes el internet.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Blanco</p></td><td colspan="1" valign="top"><p></p><p>Sólido</p></td><td colspan="1" valign="top">El gateway solo tiene un firmware de fábrica, y será actualizado al firmware más reciente automáticamente cuando se conecte a internet.</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>Rojo</p></td><td colspan="1" valign="top">Sólido</td><td colspan="1" valign="top">Problema de hardware o falla de conexión a internet.</td></tr>
<tr><td colspan="1" valign="top">Parpadeo lento</td><td colspan="1" valign="top">Gateway no conectado al LNS.</td></tr>
</table>

#### SenseCAP Mate APP

En la aplicación SenseCAP Mate, el `Estado en línea` indica `En línea` cuando el gateway está conectado a la red.
Por favor, consulte el siguiente capítulo para obtener la aplicación SenseCAP.

## Vincular el gateway

La aplicación SenseCAP Mate APP admite configuración de dispositivos y gestión remota.

- Paso 1: Descargar la aplicación SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- Paso 2: Iniciar sesión en la aplicación
Si es la primera vez que usa la plataforma SenseCAP, por favor registre una cuenta primero.

:::tip
Por favor seleccione Global en Ubicación del Servidor.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- Paso 3: Agregar dispositivo

Haga clic en el `+` en la esquina superior derecha y seleccione Agregar dispositivo
Luego escanee el código QR en la etiqueta de su gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

Configure el nombre y la ubicación de su dispositivo. Luego confirme su configuración.
Después de la vinculación exitosa, verá su gateway en el directorio de Dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## Conectar los sensores SenseCAP

- Paso 1: Agregar dispositivo

Haga clic en el `+` en la esquina superior derecha y seleccione Agregar dispositivo
Luego escanee el código QR en la etiqueta de su gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- Paso 2: Seleccionar el plan de frecuencia

Haga clic en `Configuración`, establezca la plataforma y la frecuencia, la frecuencia debe coincidir con la frecuencia de su gateway.

ej: Si su gateway es versión US915, entonces necesita configurar su sensor a frecuencia US915.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 Multi-Platform Gateway no puede conectarse a la red Helium.
:::

Para más configuraciones sobre sensores SenseCAP, por favor consulte: Sensores SenseCAP

## Portal SenseCAP y aplicación Mate

La aplicación SenseCAP Mate APP y el Portal SenseCAP pueden usarse para verificar el estado de su dispositivo y la gestión de dispositivos.

- [SenseCAP Mate APP para iOS en App Store](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [SenseCAP Mate APP para Android en Google Play Store](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [Portal SenseCAP](https://sensecap.seeed.cc/portal/)

### Información del Gateway

Verifique la información del gateway en el Portal SenseCAP y la aplicación SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### Datos del sensor

Verifique los datos del sensor en el Portal SenseCAP y la aplicación SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
