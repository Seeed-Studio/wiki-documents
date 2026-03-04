---
description: Comenzar con el Rastreador LoRaWAN
title: Comenzar con el Rastreador LoRaWAN
keywords:
- Tracker
- LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /get_started_with_lorawan_tracker
sku: 114993591
sidebar_position: 2
last_update:
  date: 1/9/2026
  author: Janet
---

# Comenzar con el Rastreador LoRaWAN

Este capítulo te muestra cómo configurar rápidamente tu SenseCAP T1000-E LoRaWAN Tracker con la App SenseCraft.
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

## Descripción General del Hardware

### Diagrama

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/diagram.png" alt="pir" width={800} height="auto" /></p>

### Descripciones de Pines

|No.|Nombre|Función|Descripción|
| :- | :- | :- | :- |
|1|P0.00|XL1|Conexión para cristal de 32.768 kHz|
|2|P0.01|XL2|Conexión para cristal de 32.768 kHz|
|3|P0.02|<p>E/S Digital</p><p>Entrada analógica</p>|Detección de nivel de batería|
|4|P0.03|<p>E/S Digital</p><p>Entrada analógica</p>|E/S LED Rojo|
|5|P0.04|<p>E/S Digital</p><p>Entrada analógica</p>|Detección de voltaje VCC|
|6|P0.05|<p>E/S Digital</p><p>Entrada analógica</p>|Detección de inserción de cargador, debe configurarse sin pullup o pulldown|
|7|P0.06|E/S Digital|E/S de tecla, debe configurarse como input_pulldown|
|8|P0.07|E/S Digital|LR1110 BUSY|
|9|P0.08|E/S Digital|AG3335 VRTC EN|
|10|P0.09|Entrada NFC|NC|
|11|P0.10|Entrada NFC|NC|
|12|P0.11|E/S Digital|SPI SCK|
|13|P0.12|E/S Digital|SPI CS|
|14|P0.13|E/S Digital|UART1 TX Para AG3335|
|15|P0.14|E/S Digital|UART1 RX Para AG3335|
|16|P0.15|E/S Digital|AG3335 RTC Interrupt|
|17|P0.16|E/S Digital|UART1 TX Para debug|
|18|P0.17|E/S Digital|UART1 RX Para debug|
|19|P0.18|Reset|Reset|
|20|P0.19|E/S Digital|QSPI Clock para FLASH|
|21|P0.20|E/S Digital|QSPI CS para FLASH|
|22|P0.21|E/S Digital|QSPI IO0 para FLASH|
|23|P0.22|E/S Digital|QSPI IO1 para FLASH|
|24|P0.23|E/S Digital|QSPI IO2 para FLASH|
|25|P0.24|E/S Digital|E/S LED Verde|
|26|P0.25|E/S Digital|Buzzer PWM|
|27|P0.26|E/S Digital|I2C SDA|
|28|P0.27|E/S Digital|I2C SCL|
|29|P0.28|<p>E/S Digital</p><p>Entrada analógica</p>|NC|
|30|P0.29|<p>E/S Digital</p><p>Entrada analógica</p>|Entrada ADC del Sensor de Luz|
|31|P0.30|<p>E/S Digital</p><p>Entrada analógica</p>|NC|
|32|P0.31|<p>E/S Digital</p><p>Entrada analógica</p>|Entrada ADC del Sensor de Temperatura|
|33|P1.00|E/S Digital|QSPI IO3 para FLASH|
|34|P1.01|E/S Digital|LR1110 DIO9|
|35|P1.02|E/S Digital|Interrupción del Acelerómetro|
|36|P1.03|E/S Digital|Estado del Cargador|
|37|P1.04|E/S Digital|Cargador Completo|
|38|P1.05|E/S Digital|Habilitación del Buzzer|
|39|P1.06|E/S Digital|Habilitación VCC del Sensor|
|40|P1.07|E/S Digital|Habilitación del Acelerómetro|
|41|P1.08|E/S Digital|SPI MISO|
|42|P1.09|E/S Digital|SPI MOSI|
|43|P1.10|E/S Digital|LR1110 RESET|
|44|P1.11|E/S Digital|AG3335 PWR EN|
|45|P1.12|E/S Digital|AG3335 SLEEP Interrupt|
|46|P1.13|E/S Digital|Habilitación de Flash|
|47|P1.14|E/S Digital|AG3335 RESETB OUT|
|48|P1.15|E/S Digital|AG3335 Reset|

## Descripción General del Firmware Demo

### Descripción de Posicionamiento

|**Ubicación**|**Descripción**|
| - | - |
|GNSS|Cargar información de longitud y latitud.<br/>(Normalmente no hay señal GPS en interiores, por lo que se recomienda probar el dispositivo al aire libre para obtener la ubicación)|
|Wi-Fi|Cargar la dirección MAC e información RSSI del AP Wi-Fi.|
|Bluetooth|Cargar la dirección MAC e información RSSI del beacon Bluetooth.|

### Botón

|**Acción del Botón**|**Descripción**|
| - | - |
|Presión larga por 3 segundos|Encender/apagar|
|Hacer clic en el botón 3 veces|Activar/desactivar Bluetooth|-|
|Doble clic|Activar/desactivar alerta SOS|
|Hacer clic una vez|Cargar datos de ubicación/batería/sensor|

### LED

<table>
  <tr>
    <th colspan="2" valign="top"><b>Estado del LED</b></th>
    <th colspan="1" valign="top"><b>Descripción</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">LED Rojo</td>
    <td colspan="1" valign="top">Sólido</td>
    <td colspan="1" valign="top">Cargando</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Parpadeo</td>
    <td colspan="1" valign="top">Carga anormal</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="4">LED Verde</td>
    <td colspan="1" valign="top">Sólido</td>
    <td colspan="1" valign="top">
      <p>Dispositivo en modo DFU.</p>
      <p>Reinicia el dispositivo para salir del modo DFU (Mantén presionado el botón, luego suéltalo inmediatamente después de conectar el cable de carga)</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">
      <p>Encendido 500ms/Apagado 1s</p>
    </td>
    <td colspan="1" valign="top">Bluetooth encendido</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Respiración</td>
    <td colspan="1" valign="top">Uniéndose a la red LoRaWAN</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Parpadeo rápido por 2s y luego apagado</td>
    <td colspan="1" valign="top">Se unió exitosamente a la red LoRaWAN</td>
  </tr>
</table>

### Función del Sensor

El SenseCAP T1000 Tracker está equipado con 3 sensores: Sensor de temperatura, Sensor de luz y Acelerómetro de 3 ejes.
Puedes elegir habilitar o deshabilitar estos sensores:

:::note
Cuando los sensores están encendidos, el dispositivo consumirá más energía.
:::

|**Sensor**|**Descripción**|
| - | - |
|Temperatura|<p>Sensor de temperatura independiente integrado.</p><p>Puede haber algún retraso en la medición de temperatura aquí, porque está separado de la carcasa.</p><p>Rango: -20 a 60℃; Precisión: ± 1℃(mín 0.5℃, máx 1℃); Resolución: 0.1℃</p>|
|Luz|<p>El sensor de luz no es el valor real de lúmenes monitoreado, sino un porcentaje de la luz desde oscuridad hasta cantidad. Principalmente puede usarse para monitoreo anti-demolición y algún monitoreo sensible a la luz.</p><p>Rango: 0 a 100%, (0% es oscuro, 100% es más brillante)</p>|
|Acelerómetro de 3 Ejes|Al establecer el valor de aceleración, se activan eventos de movimiento y eventos de choque.|

### Batería

La duración de la batería depende de factores como el intervalo de enlace ascendente, uso del sensor, distancia de transmisión LoRa y temperatura de operación. La duración prevista de la batería se basa en un ambiente de trabajo típico (25°C) y sirve como referencia. La duración real de la batería puede variar.

**EU868(1C/SF12)**

|Intervalo de Carga|1 minuto|5 minutos|60 minutos|1 día|
|--|--|--|--|--|
|Duración de Batería(día)|2.46|11.72|84.68|184.86|

**US915(1C/SF9)**

|Intervalo de Carga|1 minuto|5 minutos|60 minutos|1 día|
|--|--|--|--|--|
|Duración de Batería(día)|2.89|13.66|92.59|186.83|

## Comenzar

Presiona el botón por 3s para encender el dispositivo, una melodía ascendente indica que el dispositivo se ha encendido exitosamente.

### Conectar vía App

- **Paso 1:** Descargar la App `SenseCraft`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

Inicia sesión en la APP SenseCraft.

:::tip
Selecciona la Ubicación del Servidor como `Global`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/global-version.png" alt="pir" width={200} height="auto" /></p>
:::

- **Paso 2:** Agregar Dispositivo

Haz clic en la pestaña `Add Device` en la parte superior derecha, luego escanea el código QR en la etiqueta del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config.png" alt="pir" width={800} height="auto" /></p>

### Configurar el Dispositivo

- Navega a la página `User` -> `Device Bluetooth Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/config-ppa.png" alt="pir" width={200} height="auto" /></p>

- **Haz clic en el botón 3 veces** para entrar al modo de configuración. Nombre del dispositivo: **T1000-E xxxx**(los últimos cuatro dígitos de la dirección MAC).

#### Configuración Rápida

Para un inicio rápido con la `nube SenseCAP`, puedes seleccionar `Quick Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-config.png" alt="pir" width={800} height="auto" /></p>

Configura el `Frequency Plan` según tu región, y establece el `Uplink Interval` que desees.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/quick-1.png" alt="pir" width={200} height="auto" /></p>

#### Configuración Avanzada

Para uso avanzado, por favor selecciona `Advanced Configuration`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/advan-config.png" alt="pir" width={800} height="auto" /></p>

Puedes ver la información actual del dispositivo, que incluye el `device EUI`, `versión de hardware/software`, `batería`, etc.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/info-dev.png" alt="pir" width={250} height="auto" /></p>

Navega a `Settings` para configurar los parámetros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/setting-page.png" alt="pir" width={600} height="auto" /></p>

- **Configuración LoRa**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>Parámetros</b></th>
    <th colspan="1" valign="top"><b>Descripción</b></th>
  </tr>
  <tr>
    <td colspan="1" rowspan="5">Plataforma</td>
    <td colspan="1" valign="top">SenseCAP for The Things Network（por defecto）</td>
    <td colspan="1" valign="top">
      <p>Un servidor TTN propietario de SenseCAP. Listo para usar cuando se empareja con un gateway SenseCAP. </p>
      <a href="https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html" target="_blank"><span>Gateway Exterior SenseCAP</span></a><br />
      <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><span>Gateway Interior SenseCAP</span></a>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">SenseCAP for Helium</td>
    <td colspan="1" valign="top">
      <p>Una consola privada de Helium de SenseCAP. </p>
      <p>Listo para usar con SenseCAP Mate App y Portal.</p>
    </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Helium</td>
    <td colspan="1" valign="top">Servidor Público de Helium</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">The Things Network</td>
    <td colspan="1" valign="top">Servidor Público TTN</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Other Platform</td>
    <td colspan="1" valign="top">Otro Servidor de Red LoRaWAN</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Plan de Frecuencia</td>
    <td colspan="1" valign="top">EU868/US915/AU915/KR920/IN865/AS923-1/AS923-2/AS923-3/AS923-4</td>
    <td colspan="1" valign="top">EU868 por defecto</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Política de Paquetes</td>
    <td colspan="1" valign="top">1C</td>
    <td colspan="1" valign="top">Habilitado por defecto</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">LoRaWAN ADR</td>
    <td colspan="1" valign="top">Habilitado por defecto</td>
    <td colspan="1" valign="top">Habilitado por defecto</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Restaurar Configuración LoRa</td>
    <td colspan="1" valign="top">Habilitado por defecto</td>
    <td colspan="1" valign="top">Habilitado por defecto</td>
  </tr>
</table>

- **Configuración General**

<table>
  <tr>
    <th colspan="1"></th>
    <th colspan="1" valign="top"><b>Parámetros</b></th>
    <th colspan="1" valign="top"><b>Descripción</b></th>
  </tr>
  <tr>
    <td colspan="1">Acelerómetro de 3 ejes</td>
    <td colspan="1" valign="top">Habilitar/Deshabilitar, deshabilitado por defecto</td>
    <td colspan="1" valign="top">Cargar los datos del acelerómetro de 3 ejes</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">Modo de Reporte SOS</td>
    <td colspan="1" valign="top">Único (por defecto)</td>
    <td colspan="1" valign="top">Cargar datos y reportar evento SOS una vez.<br/>Alarma del zumbador por 3 segundos </td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Continuo</td>
    <td colspan="1" valign="top">Cargar datos y reportar evento SOS cada minuto, termina después de 30 veces.<br/>Alarma del zumbador por 30 segundos</td>
  </tr>
  <tr>
    <td colspan="1">Intervalo de Enlace Ascendente (min)</td>
    <td colspan="1" valign="top">1-10080min, 60min por defecto</td>
    <td colspan="1" valign="top">Cargar datos a intervalos.<br/>Cuanto mayor sea la frecuencia, mayor será el consumo de energía</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="7">Estrategia de Geolocalización</td>
    <td colspan="1" valign="top">Solo GNSS (por defecto)</td>
    <td colspan="1" valign="top">Utiliza únicamente sistemas de satélites GPS para determinar la posición</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Solo Wi-Fi</td>
    <td colspan="1" valign="top">Cargar la dirección MAC e información RSSI del AP Wi-Fi</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Solo Bluetooth</td>
    <td colspan="1" valign="top">Cargar la dirección MAC e información RSSI del beacon Bluetooth</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS + Wi-Fi</td>
    <td colspan="1" valign="top">Utiliza posicionamiento GPS primero, si GPS falla, entonces utiliza Wi-Fi en un ciclo de geolocalización</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + GNSS</td>
    <td colspan="1" valign="top">Utiliza posicionamiento Bluetooth primero, si Bluetooth falla, entonces utiliza GNSS en un ciclo de geolocalización</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi</td>
    <td colspan="1" valign="top">Utiliza posicionamiento Bluetooth primero, si Bluetooth falla, entonces utiliza Wi-Fi en un ciclo de geolocalización</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Bluetooth + Wi-Fi + GNSS</td>
    <td colspan="1" valign="top">Utilizar Bluetooth, Wi-Fi y GNSS para posicionamiento por turnos (cambiar al siguiente tipo de posicionamiento después de que un tipo de posicionamiento falle)</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">GNSS(GPS)</td>
    <td colspan="1" valign="top">Tiempo Máximo de Escaneo GNSS (s)</td>
    <td colspan="1" valign="top">10-120s, 30s por defecto</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Escaneo IBeacon</td>
    <td colspan="1" valign="top">Número máximo de escaneos BLE</td>
    <td colspan="1" valign="top">3-5, 3 por defecto</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Tiempo de Espera de Escaneo (s)</td>
    <td colspan="1" valign="top">3-10s, 3s por defecto</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">UUID de Grupo (Hex)</td>
    <td colspan="1" valign="top">Establecer Filtro UUID, hasta 16 bytes. <br/>Por ejemplo, si se establece como '01 020304', filtrará beacons con el patrón '0102 03 04 xx xx xx ...'</td>
  </tr>
  <tr>
    <td colspan="1" valign="top">Escaneo Wi-Fi</td>
    <td colspan="1" valign="top">Número máximo de escaneos Wi-Fi</td>
    <td colspan="1" valign="top">3-5, 3 por defecto</td>
  </tr>
</table>

### Vista de Datos del Dispositivo

#### Aplicación SenseCraft

Verificar la Ubicación en la APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_view.png" alt="pir" width={800} height="auto" /></p>

#### Portal SenseCAP

La función principal del Portal SenseCAP es gestionar dispositivos SenseCAP y almacenar datos. Está construido sobre Azure, un servicio en la nube seguro y confiable de Microsoft. Los usuarios pueden solicitar una cuenta y vincular todos los dispositivos a esta cuenta. El Portal SenseCAP proporciona un portal web y API. El portal web incluye Panel de Control, Gestión de Dispositivos, Gestión de Datos y Gestión de Claves de Acceso. La API está abierta a los usuarios para desarrollo adicional.

- **Panel de Control:** Incluye Resumen de Dispositivos, Anuncios, Datos de Escena y Gráfico de Datos, etc.
- **Gestión de Dispositivos:** Gestionar dispositivos SenseCAP.
- **Gestión de Datos:** Gestionar datos, incluyendo sección de Tabla de Datos y Gráfico, proporcionando métodos para buscar datos.
- **Sistema de Subcuentas:** Registrar subcuentas con diferentes permisos.
- **Gestión de Claves de Acceso:** Gestionar Clave de Acceso (para acceder al servicio API), incluyendo Crear Clave, Actualizar Clave y Verificar Clave.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portal_page.png" alt="pir" width={800} height="auto" /></p>

##### Vista de Datos del Dispositivo

Iniciar sesión en [Portal SenseCAP](http://sensecap.seeed.cc)

Si has creado una cuenta a través de la APP, puedes iniciar sesión directamente.

1) Seleccionar registrar cuenta, ingresar información de correo electrónico y hacer clic en "register", el correo de registro será enviado al buzón del usuario

2) Abrir el correo "SenseCAP...", hacer clic en el enlace de salto, completar la información relevante y completar el registro

3) Regresar a la interfaz de inicio de sesión y completar el inicio de sesión

Consultar [Guía de Usuario del Portal SenseCAP](https://sensecap-docs.seeed.cc/quickstart.html) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/portaldata1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_view2.png" alt="pir" width={800} height="auto" /></p>

## API SenseCAP

La API SenseCAP es para que los usuarios gestionen dispositivos IoT y datos. Incluye 3 tipos de métodos API: protocolo HTTP, protocolo MQTT y protocolo Websocket.

- Con la API HTTP, los usuarios pueden gestionar dispositivos LoRa, para obtener datos en bruto o datos históricos.
- Con la API MQTT, los usuarios pueden suscribirse a los datos de medición en tiempo real del sensor a través del protocolo MQTT.
- Con la API Websocket, los usuarios pueden obtener datos de medición en tiempo real de sensores a través del protocolo Websocket.

Por favor consultar [Guía de Usuario de API](https://sensecap-docs.seeed.cc/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/api_page.png" alt="pir" width={800} height="auto" /></p>

## Decodificador

- **[Decodificador para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000E_TTN_Decoder.js)**
- **[Decodificador para Helium](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/Helium/SenseCAP_T1000E_Helium_Decoder.js)**

## Recursos

[GitHub](https://github.com/Seeed-Studio/Seeed-Tracker-T1000-E-for-LoRaWAN-dev-board)
