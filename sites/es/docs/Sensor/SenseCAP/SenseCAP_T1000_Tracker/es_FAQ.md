---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: Preguntas frecuentes
keywords:
- Tracker
- FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /faq_for_SenseCAP_T1000
sku: 114993073,114993106,114993207,114993208
last_update:
  date: 2/14/2026
  author: Janet
---


## Relacionado con la ubicación

### Precisión del posicionamiento GPS

Los satélites GPS transmiten sus señales en el espacio con cierta precisión, pero lo que recibes depende de factores adicionales, como la geometría de los satélites, el bloqueo de la señal, las condiciones atmosféricas y las características/calidad del diseño del receptor.

Muchas cosas pueden degradar la precisión del posicionamiento GPS. Las causas comunes incluyen:

- Bloqueo de la señal de los satélites debido a edificios, puentes, árboles, etc.
- Uso en interiores o bajo tierra
- Señales reflejadas en edificios o paredes ("multipath")

Por lo tanto, en un área amplia y sin obstrucciones obtendrás una mejor señal GPS y, por consiguiente, resultados de posicionamiento más precisos.

### ¿Por qué no hay datos de ubicación GPS?

- Es posible que la ubicación GPS no esté disponible cuando el tracker está en interiores. El posicionamiento GNSS requiere un entorno exterior abierto. Si estás en interiores, la ubicación GPS puede exceder el tiempo de espera debido a la señal débil. Asegúrate de que el dispositivo esté colocado en exteriores para obtener precisión GPS.

- Asegura una instalación adecuada del dispositivo orientándolo con la parte frontal hacia arriba para evitar la obstrucción de la posición de la antena

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### ¿Por qué la ubicación por Wi‑Fi o Bluetooth no se muestra en el mapa de la SenseCAP App?

- La ubicación por Wi‑Fi requiere un servicio de análisis de mapas de terceros, que debe ser invocado por los usuarios para el análisis. Actualmente, la Mate App solo admite la visualización de posicionamiento GNSS.

- El posicionamiento por Bluetooth depende de balizas Bluetooth y de sus respectivas ubicaciones para un seguimiento preciso. bloquea la posición de la antena.

## Relacionado con la red

### Red Helium

:::caution note
Para los usuarios que operan en la región **EU868**/**RU864**:

**No se recomienda** establecer el intervalo de carga a menos de 4 minutos.

Si configuras un intervalo de carga de menos de 4 minutos, puedes notar una desalineación de la marca de tiempo entre el uplink del dispositivo y la hora actual.
:::

**Esta es la razón**:

Dada la restricción del [1% duty cycle](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) en EU868, el dispositivo debe esperar pacientemente aproximadamente 4 minutos para cada transmisión uplink. Además, la red Helium inicia las correcciones de tasa de datos y potencia solo después de acumular 20 paquetes uplink consecutivos marcados con el bit [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) establecido en 1.

Por lo tanto, si el intervalo de carga que configuras es inferior a 4 minutos, los datos en tiempo real se almacenarán temporalmente en la RAM y se mantendrán hasta que la red Helium active las correcciones de tasa de datos y potencia antes de cargarlos.

### Cómo obtener las claves

En la página de configuración, selecciona una plataforma distinta de SenseCAP para obtener las claves.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## Relacionado con el botón

### Unirse a la red

Mantén presionado el botón durante 3 segundos, la luz verde parpadeará lentamente, luego presiona el botón una vez, la luz verde respirará y entonces el dispositivo intentará unirse a la red loRaWAN.

### Reinicio forzado

Mantén presionado el botón y luego conecta el cable de carga, suelta el botón después de conectar, la luz verde respirará y entonces el dispositivo se reiniciará de forma forzada.

## Relacionado con la batería

### Vida útil de la batería

La vida útil de la batería depende de factores como el intervalo de uplink, el uso de sensores, la distancia de transmisión LoRa y la temperatura de funcionamiento. La vida útil de la batería prevista se basa en un entorno de trabajo típico (25°C) y sirve como referencia. La vida útil real de la batería puede variar.

#### EU868(1C/SF12)

|Upload Interval|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|Battery Life(day)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|Upload Interval|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|Battery Life(day)|3.02|37.52|117.32|210.7|

Para cálculos detallados de la vida útil de la batería, consulta el [Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).

### Estado de carga

|Status|Indicator|
|----|----|
|Charging| The LED will flash once every 3 seconds.|
|Fully charged| The LED will stay always on.|
|Charging anomaly|When the device is charged below 0 ° C or above 45 ° C, the device will enter the charge protection state and cannot be charged.<br/>The LED will flash rapidly.|

:::caution Charging abnormality Alarm
If the indicator `flashes quickly` while charging, it may be that the power voltage is insufficient or poor contact.

Please check your power supply or try another power adaptor.
:::

### ¿Cuánto tiempo tarda en cargarse completamente?

Normalmente tarda unas **2 horas** en cargarse por completo.

### ¿Puede seguir cargando datos mientras se está cargando?

Sí, puede seguir cargando datos mientras se está cargando.

## Relacionado con el sensor

### Sin datos de sensor

Para ahorrar energía, la función del sensor de temperatura/luz está desactivada de forma predeterminada, por lo que primero debes activarla en la SenseCAP Mate APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## Datos en caché

### Cómo funciona

Cuando la señal LoRaWAN es débil o no hay cobertura de red, los datos se guardarán en el dispositivo. Cuando el dispositivo regrese a un área con cobertura de red LoRaWAN, enviará primero los datos en tiempo real y luego cargará los datos en caché.

Durante cada período de carga, cargará primero la ubicación más reciente y luego los datos en caché.
Solo se cargan unos pocos paquetes de datos históricos por ciclo, por lo que esto no afectará al duty cycle.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### Nota

Dado que el dispositivo solo puede almacenar en caché alrededor de 1.000 datos sin conexión, si estás en un lugar sin cobertura de red LoRaWAN durante mucho tiempo, cuando los datos sin conexión alcancen el límite, algunos datos antiguos serán sobrescritos por datos nuevos, por lo que podrías "perder" algunos datos.

## Cómo configurar por lotes

Consulta el [Quick Start](https://wiki.seeedstudio.com/es/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) para configurar el primer dispositivo y luego haz clic en el módulo `Template` en la esquina superior derecha.

Haz clic en `Save as Template`, pon nombre a tu plantilla y luego haz clic en `Confirm`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

Cuando configures otros dispositivos más tarde, podrás seleccionar directamente la plantilla que guardaste.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

Si deseas compartir tu plantilla con otros, puedes elegir `Copy Link to Share` o `Download Template`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

Otros usuarios pueden optar por usar tu plantilla copiando la URL compartida o importando el archivo de plantilla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## Cómo salir del modo DFU

Después de un fallo en la actualización del firmware, el dispositivo puede entrar en modo DFU. Puedes ver el nombre del dispositivo `SENSECAP_GR_DFU_XXXX` en la app SenseCraft y los LED continúan parpadeando.

- En modo DFU, el dispositivo saldrá automáticamente después de 3 minutos de inactividad.

- Si deseas salir inmediatamente, puedes mantener presionado el botón durante 3 segundos y el dispositivo se reiniciará y volverá al funcionamiento normal.

Si descubres que el dispositivo no puede salir del modo DFU a pesar de presionar una vez, mantener presionado durante 3 segundos o mantener presionado durante 10 segundos, sigue estos pasos:

**Paso 1:Conectar el dispositivo en la SenseCraft APP**

Sigue los pasos anteriores para acceder a la página de configuración Bluetooth en el T1000, conecta el dispositivo y luego podrás ver la siguiente página:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**Paso 2:Cargar el archivo de firmware**

Haz clic en `Upload Firmware File`, elige el archivo bin para grabar el firmware.

Para obtener el archivo de firmware más reciente, contacta con **techsupport@seeed.io**

## Error de marca de tiempo

Si encuentras que la marca de tiempo en el payload es incorrecta, actualiza el firmware a la última versión.

Consulta [Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/es/fm_release_for_SenseCAP_T1000/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## Integración

La integración de una aplicación se puede realizar de diversas maneras, según tus necesidades y objetivos. Aquí hay algunas opciones de integración comunes:

- **SenseCAP API**:

El uso de una Application Programming Interface (API) es una forma común de permitir que tu aplicación se comunique con otras aplicaciones o servicios; puedes conectar tu dispositivo a SenseCAP Cloud y luego usar la SenseCAP API para obtener los datos.

SenseCAP API está destinada a que los usuarios gestionen dispositivos y datos de IoT. Combina tres tipos de métodos API: protocolo HTTP, protocolo MQTT y protocolo WebSocket.

Consulta [SenseCAP API](https://wiki.seeedstudio.com/es/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) para más detalles.

- **LoRaWAN Network Server**：

Puedes usar el [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), y entonces podrás usar directamente el LoRaWAN Network Server integrado para la integración.

Consulta la [LNS Configuration](https://wiki.seeedstudio.com/es/SenseCAP_m2_LNS_config) para más detalles.
