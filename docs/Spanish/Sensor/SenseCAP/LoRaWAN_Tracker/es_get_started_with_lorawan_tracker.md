---
description: Get Started with LoRaWAN Tracker
title: Primeros Pasos con LoRaWAN Tracker
keywords:
- Tracker
- LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /es/get_started_with_lorawan_tracker
sidebar_position: 1
last_update:
  date: 07/21/2025
  author: Guillermo
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

El **T1000-E para LoRaWAN** viene con firmware totalmente de código abierto. Para mejorar la experiencia del usuario, proporcionamos un firmware de demostración preinstalado en los dispositivos fabricados en fábrica. Los usuarios pueden explorar el firmware de demostración para una experiencia inicial y también desarrollar su propio firmware personalizado. Para más detalles sobre el desarrollo personalizado, consulta:  
[LoRaWAN Open Source Firmware](https://wiki.seeedstudio.com/open_source_lorawan/)

### Comparación de versiones de la serie T1000

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## Vista general del hardware

### Diagrama

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/diagram.png" alt="pir" width={800} height="auto" /></p>

### Pin Descriptions

### Descripción de pines

| Nº | Nombre | Función | Descripción |
|----|--------|---------|-------------|
|1|P0.00|XL1|Conexión para cristal de 32.768 kHz|
|2|P0.01|XL2|Conexión para cristal de 32.768 kHz|
|3|P0.02|<p>I/O digital</p><p>Entrada analógica</p>|Detección del nivel de batería|
|4|P0.03|<p>I/O digital</p><p>Entrada analógica</p>|IO del LED rojo|
|5|P0.04|<p>I/O digital</p><p>Entrada analógica</p>|Detección de voltaje VCC|
|6|P0.05|<p>I/O digital</p><p>Entrada analógica</p>|Detección de inserción de cargador (sin pullup/pulldown)|
|7|P0.06|I/O digital|Entrada de botón (configurar como input\_pulldown)|
|8|P0.07|I/O digital|LR1110 BUSY|
|9|P0.08|I/O digital|AG3335 VRTC EN|
|10|P0.09|Entrada NFC|NC|
|11|P0.10|Entrada NFC|NC|
|12|P0.11|I/O digital|SPI SCK|
|13|P0.12|I/O digital|SPI CS|
|14|P0.13|I/O digital|UART1 TX para AG3335|
|15|P0.14|I/O digital|UART1 RX para AG3335|
|16|P0.15|I/O digital|Interrupción RTC AG3335|
|17|P0.16|I/O digital|UART1 TX para depuración|
|18|P0.17|I/O digital|UART1 RX para depuración|
|19|P0.18|Reset|Reinicio|
|20–24|P0.19–P0.23|I/O digital|QSPI para memoria FLASH|
|25|P0.24|I/O digital|IO del LED verde|
|26|P0.25|I/O digital|PWM para buzzer|
|27–28|P0.26–P0.27|I/O digital|I2C SDA / I2C SCL|
|29|P0.28|<p>I/O digital</p><p>Entrada analógica</p>|NC|
|30|P0.29|<p>I/O digital</p><p>Entrada analógica</p>|Entrada ADC del sensor de luz|
|31|P0.30|<p>I/O digital</p><p>Entrada analógica</p>|NC|
|32|P0.31|<p>I/O digital</p><p>Entrada analógica</p>|Entrada ADC del sensor de temperatura|
|33–35|P1.00–P1.02|I/O digital|QSPI / LR1110 DIO9 / Interrupción acelerómetro|
|36–48|P1.03–P1.15|I/O digital|Estado cargador / buzzer / sensores / SPI / AG3335 / FLASH / etc.|


## Descripción del firmware de demostración

### Posicionamiento

|**Ubicación**|**Descripción**|
|------------|----------------|
|GNSS|Carga información de latitud y longitud. (Generalmente no hay señal GPS en interiores, se recomienda probar al aire libre)|
|Wi-Fi|Carga dirección MAC y RSSI del punto de acceso Wi-Fi.|
|Bluetooth|Carga dirección MAC y RSSI de la baliza Bluetooth.|

### Botón

|**Acción**|**Descripción**|
|---------|----------------|
|Mantener presionado 3 segundos|Encender / apagar|
|Presionar 3 veces|Activar / desactivar Bluetooth|
|Doble clic|Activar / desactivar alerta SOS|
|Un clic|Enviar ubicación / batería / datos de sensores|

### LED

<table>
<tr><th colspan="2">Estado del LED</th><th>Descripción</th></tr>
<tr><td rowspan="2">LED rojo</td><td>Encendido</td><td>Cargando</td></tr>
<tr><td>Parpadeando</td><td>Error de carga</td></tr>
<tr><td rowspan="4">LED verde</td><td>Encendido</td><td>Modo DFU. Reinicia para salir (mantén presionado al conectar el cargador)</td></tr>
<tr><td>500 ms encendido / 1 s apagado</td><td>Bluetooth activado</td></tr>
<tr><td>Respiración</td><td>Uniéndose a red LoRaWAN</td></tr>
<tr><td>Parpadeo rápido por 2 s y luego se apaga</td><td>Unido exitosamente a red LoRaWAN</td></tr>
</table>

### Funciones del sensor

El SenseCAP T1000 Tracker integra 3 sensores: temperatura, luz y acelerómetro de 3 ejes. Puedes activarlos o desactivarlos.

:::note
Al activar los sensores, el consumo de energía aumenta.
:::

|**Sensor**|**Descripción**|
|----------|---------------|
|Temperatura|<p>Sensor de temperatura independiente integrado.</p><p>Pueden haber ligeros retrasos en la medición debido a la separación del encapsulado.</p><p>Rango: -20 a 60 °C; Precisión: ±1 °C; Resolución: 0.1 °C</p>|
|Luz|<p>El valor no representa lúmenes reales, sino un porcentaje de brillo (0% oscuro, 100% máximo).</p><p>Útil para monitoreo de manipulación o luz ambiental.</p>|
|Acelerómetro 3 ejes|Detecta movimiento o vibraciones según el umbral de aceleración configurado.|

### Batería

La duración de la batería depende de factores como el intervalo de subida, uso de sensores, distancia de transmisión LoRa y temperatura de operación. Las estimaciones se basan en un entorno típico de 25 °C.

**EU868 (1 canal / SF12)**

|Intervalo de subida|1 minuto|5 minutos|60 minutos|1 día|
|------------------|--------|----------|-----------|------|
|Duración (días)|2.46|11.72|84.68|184.86|

**US915 (1 canal / SF9)**

|Intervalo de subida|1 minuto|5 minutos|60 minutos|1 día|
|------------------|--------|----------|-----------|------|
|Duración (días)|2.89|13.66|92.59|186.83|

## Comenzando

Mantén presionado el botón por 3 segundos para encender el dispositivo, una melodía ascendente indica que el dispositivo se encendió correctamente.

### Conectar mediante la App

* **Paso 1:** Descarga la App `SenseCraft`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

Inicia sesión en la App SenseCraft. 

:::tip
Selecciona la ubicación del servidor como `Global`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/global-version.png" alt="pir" width={200} height="auto" /></p>
:::

* **Paso 2:** Añadir dispositivo

Haz clic en la pestaña `Add Device` en la esquina superior derecha, luego escanea el código QR de la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

### Configurar el dispositivo

* Navega a la página `User` -> `Device Bluetooth Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/config-ppa.png" alt="pir" width={200} height="auto" /></p>

* **Presiona el botón 3 veces** para entrar en modo configuración. Nombre del dispositivo: **T1000-E xxxx** (los últimos cuatro dígitos de la dirección MAC).

#### Configuración rápida

Para un inicio rápido con el `SenseCAP cloud`, puedes seleccionar `Quick Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-config.png" alt="pir" width={800} height="auto" /></p>

Configura el `Frequency Plan` según tu región y establece el `Uplink Interval` deseado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-1.png" alt="pir" width={200} height="auto" /></p>

#### Configuración avanzada

Para uso avanzado, selecciona `Advanced Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/advan-config.png" alt="pir" width={800} height="auto" /></p>

Podrás ver información actual del dispositivo, incluyendo `device EUI`, versión hardware/software, batería, etc.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/info-dev.png" alt="pir" width={250} height="auto" /></p>

Navega a `Settings` para configurar los parámetros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/setting-page.png" alt="pir" width={600} height="auto" /></p>

* **Configuración LoRa**

| Plataforma                          | Parámetro                                     | Descripción                                                                 |
|-------------------------------------|-----------------------------------------------|------------------------------------------------------------------------------|
| Plataforma                          | SenseCAP para The Things Network (por defecto) | Servidor TTN propietario de SenseCAP. Funciona con gateway SenseCAP.<br />[SenseCAP Outdoor Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html)<br />[SenseCAP Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html) |
| Plataforma                          | SenseCAP para Helium                          | Consola privada Helium de SenseCAP. Integrado con SenseCAP Mate App y Portal. |
| Plataforma                          | Helium                                        | Servidor público Helium                                                     |
| Plataforma                          | The Things Network                            | Servidor público TTN                                                        |
| Plataforma                          | Otra plataforma                               | Otro servidor de red LoRaWAN                                               |
| Plan de frecuencia                  | EU868/US915/...                               | Por defecto EU868                                                           |
| Política de paquete                 | 1C                                            | Habilitado por defecto                                                      |
| LoRaWAN ADR                         | Habilitado por defecto                        | Habilitado por defecto                                                      |
| Restaurar configuración LoRa       | Habilitado por defecto                        | Habilitado por defecto                                                      |

* **Configuración general**

<table>
<tr><th></th><th><b>Parámetros</b></th><th><b>Descripción</b></th></tr>
<tr>
  <td>Acelerómetro 3 ejes</td>
  <td>Habilitar/Deshabilitar, deshabilitado por defecto</td>
  <td>Sube datos del acelerómetro de 3 ejes</td>
</tr>
<tr>
  <td rowspan="2">Modo reporte SOS</td>
  <td>Único (por defecto)</td>
  <td>Sube datos y reporta evento SOS una vez.<br/>Alarma del buzzer por 3 segundos</td>
</tr>
<tr>
  <td>Continuo</td>
  <td>Sube datos y reporta evento SOS cada minuto, termina tras 30 veces.<br/>Alarma del buzzer por 30 segundos</td>
</tr>
<tr>
  <td>Intervalo de subida (min)</td>
  <td>1-10080 min, 60 min por defecto</td>
  <td>Sube datos en intervalos.<br/>Más frecuencia implica mayor consumo de energía</td>
</tr>
<tr>
  <td rowspan="7">Estrategia de geolocalización</td>
  <td>Solo GNSS (por defecto)</td>
  <td>Usa únicamente sistema GPS para determinar posición</td>
</tr>
<tr>
  <td>Solo Wi-Fi</td>
  <td>Sube MAC y RSSI del punto de acceso Wi-Fi</td>
</tr>
<tr>
  <td>Solo Bluetooth</td>
  <td>Sube MAC y RSSI de la baliza Bluetooth</td>
</tr>
<tr>
  <td>GNSS + Wi-Fi</td>
  <td>Usa primero GPS; si falla, usa Wi-Fi en un ciclo de geolocalización</td>
</tr>
<tr>
  <td>Bluetooth + GNSS</td>
  <td>Usa primero Bluetooth; si falla, usa GNSS en un ciclo de geolocalización</td>
</tr>
<tr>
  <td>Bluetooth + Wi-Fi</td>
  <td>Usa primero Bluetooth; si falla, usa Wi-Fi en un ciclo de geolocalización</td>
</tr>
<tr>
  <td>Bluetooth + Wi-Fi + GNSS</td>
  <td>Usa Bluetooth, Wi-Fi y GNSS secuencialmente, cambiando tras fallo</td>
</tr>
<tr>
  <td>GNSS (GPS)</td>
  <td>Tiempo máximo escaneo GNSS (s)</td>
  <td>10-120 s, 30 s por defecto</td>
</tr>
<tr>
  <td rowspan="3">Escaneo iBeacon</td>
  <td>Número máximo de escaneos BLE</td>
  <td>3-5, 3 por defecto</td>
</tr>
<tr>
  <td>Tiempo de espera de escaneo (s)</td>
  <td>3-10 s, 3 s por defecto</td>
</tr>
<tr>
  <td>UUID de grupo (Hex)</td>
  <td>Filtro UUID, hasta 16 bytes.<br/>Ejemplo: '01 02 03 04' filtra balizas que empiecen con '01020304...'</td>
</tr>
<tr>
  <td>Escaneo Wi-Fi</td>
  <td>Número máximo de escaneos Wi-Fi</td>
  <td>3-5, 3 por defecto</td>
</tr>
</table>

### Vista de Datos del Dispositivo

#### App SenseCAP Mate

Consulta la ubicación en la APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### Portal SenseCAP

La función principal del Portal SenseCAP es gestionar los dispositivos SenseCAP y almacenar los datos. Está construido sobre Azure, un servicio en la nube seguro y confiable de Microsoft. Los usuarios pueden crear una cuenta y vincular todos sus dispositivos a esta cuenta. El Portal SenseCAP ofrece un portal web y una API. El portal web incluye Panel de control, Gestión de dispositivos, Gestión de datos y Gestión de claves de acceso. La API está abierta para que los usuarios puedan desarrollar aplicaciones adicionales.

- **Panel de control:** Incluye Vista general de dispositivos, Anuncios, Datos de escenas y Gráficos de datos, etc.
- **Gestión de dispositivos:** Administración de dispositivos SenseCAP.
- **Gestión de datos:** Administración de datos, incluyendo tablas y gráficos, con métodos para búsqueda.
- **Sistema de subcuentas:** Registro de subcuentas con diferentes permisos.
- **Gestión de claves de acceso:** Administración de claves para acceso a la API, incluyendo creación, actualización y verificación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Vista de Datos del Dispositivo

Ingresa al [Portal SenseCAP](http://sensecap.seeed.cc)

Si ya creaste una cuenta mediante la APP, puedes iniciar sesión directamente.

1) Selecciona registro de cuenta, ingresa tu correo electrónico y haz clic en "register". Recibirás un correo para activar la cuenta.

2) Abre el correo "SenseCAP…", haz clic en el enlace, completa la información requerida y finaliza el registro.

3) Regresa a la pantalla de inicio de sesión e ingresa con tus datos.

Consulta la [Guía de usuario del Portal SenseCAP](https://sensecap-docs.seeed.cc/quickstart.html) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## API SenseCAP

La API SenseCAP permite gestionar dispositivos IoT y datos. Incluye 3 tipos de métodos API: protocolo HTTP, MQTT y Websocket.

* Con la API HTTP, los usuarios pueden gestionar dispositivos LoRa, obtener datos en crudo o históricos.
* Con la API MQTT, los usuarios pueden suscribirse a datos de medición en tiempo real mediante protocolo MQTT.
* Con la API Websocket, se obtienen datos en tiempo real mediante Websocket.

Consulta la [Guía de usuario de la API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## Decodificador

* **[Decodificador para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000E_TTN_Decoder.js)**
* **[Decodificador para Helium](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000E_Helium_Decoder.js)**

## Recursos

[GitHub](https://github.com/Seeed-Studio/Seeed-Tracker-T1000-E-for-LoRaWAN-dev-board)
