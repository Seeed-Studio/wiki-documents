---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: Preguntas frecuentes
keywords:
  - Tracker
  - Preguntas frecuentes
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /faq_for_SenseCAP_T1000
sku: 114993073,114993106,114993207,114993208
last_update:
  date: 9/19/2026
  author: Janet
createdAt: '2023-09-21'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/faq_for_SenseCAP_T1000/
---


## Relacionado con la ubicación

### Precisión de posicionamiento GPS

Los satélites GPS transmiten sus señales en el espacio con cierta precisión, pero lo que recibes depende de factores adicionales, como la geometría de los satélites, el bloqueo de la señal, las condiciones atmosféricas y las características/calidad del diseño del receptor.

Muchas cosas pueden degradar la precisión del posicionamiento GPS. Las causas comunes incluyen:

- Bloqueo de la señal de los satélites debido a edificios, puentes, árboles, etc.
- Uso en interiores o bajo tierra
- Señales reflejadas en edificios o paredes ("multipath")

Por lo tanto, en un área amplia y sin obstrucciones obtendrás una mejor señal GPS y, por consiguiente, resultados de posicionamiento más precisos.

### ¿Por qué no hay datos de ubicación GPS?

- Es posible que la ubicación GPS no esté disponible cuando el tracker está en interiores. El posicionamiento GNSS requiere un entorno exterior abierto. Si estás en interiores, la ubicación GPS puede agotar el tiempo de espera debido a la señal débil. Asegúrate de que el dispositivo esté colocado en exteriores para obtener precisión GPS.

- Asegura una instalación adecuada del dispositivo orientándolo con la parte frontal hacia arriba para evitar obstruir la posición de la antena

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

Si tu T1000 no proporciona datos de ubicación GNSS, sigue los pasos de resolución de problemas a continuación para comprobar la configuración del dispositivo, el entorno de instalación y el estado de posicionamiento GNSS.


#### 1. Comprueba el entorno de instalación del dispositivo

El rendimiento GNSS puede verse afectado por el entorno de instalación del dispositivo.

Asegúrate de que:

- **La parte frontal del T1000 no esté obstruida**.
- El dispositivo no esté colocado dentro de un recinto metálico ni rodeado de materiales que puedan bloquear significativamente las señales GNSS.
- **No haya objetos metálicos cerca del dispositivo**.
- El dispositivo se pruebe en un **entorno exterior abierto** con una vista despejada del cielo.


#### 2. Aumenta el tiempo de escaneo GNSS

El tiempo de escaneo GNSS determina cuánto tiempo busca el T1000 satélites GNSS durante una operación de posicionamiento.

Si el tiempo de escaneo GNSS es demasiado corto, es posible que el dispositivo no tenga tiempo suficiente para obtener una solución GNSS válida, especialmente cuando el dispositivo se prueba por primera vez o en un entorno con señales GNSS relativamente débiles.

Abre los **ajustes generales** del T1000 en la aplicación SenseCraft y aumenta el **tiempo de escaneo GNSS**.

El tiempo máximo de escaneo GNSS es de **120 segundos**.

> **Consejo:** Para la resolución de problemas, recomendamos usar primero un tiempo de escaneo GNSS más largo para determinar si el problema está relacionado con el tiempo disponible para la adquisición de satélites.

#### 3. Comprueba el estado de posicionamiento GNSS en el payload uplink de LoRaWAN

Si el T1000 aún no proporciona una ubicación, comprueba el **payload uplink bruto de LoRaWAN**.

El payload uplink contiene el resultado de posicionamiento y el estado de posicionamiento. Al comprobar el payload bruto, puedes determinar si:

- El escaneo GNSS agotó el tiempo de espera;
- Se utilizó otro método de posicionamiento;

Por ejemplo, el siguiente payload es un ejemplo de tiempo de espera agotado en el escaneo GNSS:

`110100000064a763a0014100002f`

En este ejemplo, el primer byte 11 indica el estado de posicionamiento y el paquete del sensor, y el segundo byte 01 indica que el escaneo GNSS agotó el tiempo de espera y no logró obtener la ubicación. Puedes encontrar más detalles en la documentación del formato de payload del T1000.


#### 4. Proporciona el payload uplink bruto de LoRaWAN

Si el problema persiste después de comprobar los elementos anteriores, proporciona **varios payloads uplink brutos de LoRaWAN** del T1000 y contacta con nuestro equipo de soporte técnico en techsupport@seeed.io.


### ¿Por qué la ubicación por Wi‑Fi o Bluetooth no se muestra en el mapa de la aplicación SenseCAP?

- La ubicación por Wi‑Fi requiere un servicio de análisis de mapas de terceros, que debe ser invocado por los usuarios para el análisis. Actualmente, la aplicación Mate solo admite la visualización de posicionamiento GNSS.

- El posicionamiento por Bluetooth depende de balizas Bluetooth y de sus respectivas ubicaciones para un seguimiento preciso. bloquea la posición de la antena.

## Relacionado con la red

### Red Helium

:::caution note
Para los usuarios que operan en la región **EU868**/**RU864**:

**No se recomienda** establecer el intervalo de subida en menos de 4 minutos.

Si estableces un intervalo de subida inferior a 4 minutos, puedes notar una desalineación de la marca de tiempo entre el uplink del dispositivo y la hora actual.
:::

**Esta es la razón**:

Dada la restricción del [1% de ciclo de trabajo](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) en EU868, el dispositivo debe esperar pacientemente aproximadamente 4 minutos para cada transmisión uplink. Además, la red Helium inicia las correcciones de tasa de datos y potencia solo después de acumular 20 paquetes uplink consecutivos marcados con el bit [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) establecido en 1.

Por lo tanto, si el intervalo de subida que configuras es inferior a 4 minutos, los datos en tiempo real se almacenarán temporalmente en la RAM y se mantendrán hasta que la red Helium active las correcciones de tasa de datos y potencia antes de subirlos.

### Cómo obtener las claves

En la página de configuración, selecciona una plataforma distinta de SenseCAP para obtener las claves.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## Relacionado con el botón

### Unirse a la red

Mantén pulsado el botón durante 3 segundos, la luz verde parpadeará lentamente, luego pulsa el botón una vez, la luz verde respirará y el dispositivo intentará unirse a la red LoRaWAN.

### Reinicio forzado

Mantén pulsado el botón y luego conecta el cable de carga, suelta el botón después de conectar, la luz verde respirará y el dispositivo se forzará a reiniciarse.

## Relacionado con la batería

### Vida útil de la batería

La vida útil de la batería depende de factores como el intervalo de uplink, el uso de sensores, la distancia de transmisión LoRa y la temperatura de funcionamiento. La vida útil de la batería prevista se basa en un entorno de trabajo típico (25°C) y sirve como referencia. La vida útil real de la batería puede variar.

#### EU868(1C/SF12)

|Intervalo de subida|1 minuto|5 minutos |60 minutos|1 día|
|--|--|--|--|--|
|Vida útil de la batería (día)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|Intervalo de subida|1 minuto|5 minutos |60 minutos|1 día|
|--|--|--|--|--|
|Vida útil de la batería (día)|3.02|37.52|117.32|210.7|

Para cálculos detallados de la vida útil de la batería, consulta el [formulario de cálculo de vida útil de la batería](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).

### Estado de carga

|Estado|Indicador|
|----|----|
|Cargando| El LED parpadeará una vez cada 3 segundos.|
|Totalmente cargado| El LED permanecerá siempre encendido.|
|Anomalía de carga|Cuando el dispositivo se carga por debajo de 0 °C o por encima de 45 °C, el dispositivo entrará en estado de protección de carga y no podrá cargarse.<br/>El LED parpadeará rápidamente.|

:::caution Charging abnormality Alarm
Si el indicador `flashes quickly` mientras se está cargando, puede deberse a que el voltaje de alimentación es insuficiente o a un mal contacto.

Comprueba tu fuente de alimentación o prueba con otro adaptador de corriente.
:::

### ¿Cuánto tiempo tarda en cargarse por completo?

Normalmente tarda alrededor de **2 horas** en cargarse por completo.

### ¿Puede seguir subiendo datos mientras se carga?

Sí, puede seguir subiendo datos mientras se carga.

## Relacionado con el sensor

### Sin datos de sensor

Para ahorrar energía, la función del sensor de temperatura/luz está desactivada de forma predeterminada, por lo que primero debes activarla en la aplicación SenseCAP Mate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## Datos en caché

### Cómo funciona

Cuando la señal LoRaWAN es débil o no hay cobertura de red, los datos se guardarán en el dispositivo. Cuando el dispositivo regrese a un área con cobertura de red LoRaWAN, enviará primero los datos en tiempo real y luego subirá los datos en caché.

Durante cada período de subida, subirá primero la ubicación más reciente y luego los datos en caché.
Solo se suben unos pocos paquetes de datos históricos por ciclo, por lo que esto no afectará al ciclo de trabajo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### Nota

Dado que el dispositivo solo puede almacenar en caché alrededor de 1.000 datos sin conexión, si te encuentras en un lugar sin cobertura de red LoRaWAN durante mucho tiempo, cuando los datos sin conexión alcancen el límite, algunos datos antiguos serán sobrescritos por datos nuevos, por lo que podrías "perder" algunos datos.

## Cómo configurar por lotes

Consulta la [Guía de inicio rápido](https://wiki.seeedstudio.com/es/Get_Started_with_SenseCAP_T1000_tracker/#conectar-a-sensecap-mate-app) para configurar el primer dispositivo y luego haz clic en el módulo `Template` en la esquina superior derecha.

Haz clic en `Save as Template`, pon nombre a tu plantilla y luego haz clic en `Confirm`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

Cuando configures otros dispositivos más adelante, podrás seleccionar directamente la plantilla que guardaste.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

Si deseas compartir tu plantilla con otros, puedes elegir `Copy Link to Share` o `Download Template`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

Otros usuarios pueden optar por usar tu plantilla copiando la URL compartida o importando el archivo de plantilla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## Cómo salir del modo DFU

Después de un fallo en la actualización del firmware, el dispositivo puede entrar en modo DFU. Puedes ver el nombre del dispositivo `SENSECAP_GR_DFU_XXXX` en la aplicación SenseCraft y los LED continúan parpadeando.

- En modo DFU, el dispositivo saldrá automáticamente después de 3 minutos de inactividad.

- Si deseas salir inmediatamente, puedes mantener pulsado el botón durante 3 segundos y el dispositivo se reiniciará y volverá al funcionamiento normal.

Si descubres que el dispositivo no puede salir del modo DFU a pesar de presionar una vez, mantener presionado durante 3 segundos o mantener presionado durante 10 segundos, sigue estos pasos:

**Paso 1: Conectar el dispositivo en la app SenseCraft**

Sigue los pasos anteriores para acceder a la página de configuración de Bluetooth en el T1000, conecta el dispositivo y entonces podrás ver la siguiente página:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000-dfu-mode.png" alt="pir" width={200} height="auto" /></p>

**Paso 2: Cargar archivo de firmware**

Haz clic en `Upload Firmware File`, elige el archivo bin para flashear el firmware.

Para obtener el archivo de firmware más reciente, ponte en contacto con **techsupport@seeed.io**

## Error de marca de tiempo

Si encuentras que la marca de tiempo en la carga útil es incorrecta, actualiza el firmware a la versión más reciente.

Consulta [Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/es/fm_release_for_SenseCAP_T1000/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## Error de aplicación

### ¿Puedo ver el estado y los datos del dispositivo en la app SenseCraft?

Si el dispositivo está conectado a SenseCAP Cloud, puedes ver el estado y los datos del dispositivo, como el estado en línea, los datos de los sensores y la información de posicionamiento, directamente en la app SenseCraft.

Si el dispositivo está conectado a otra plataforma en la nube LoRaWAN, la información y los datos del dispositivo no se sincronizarán con la app SenseCraft. En este caso, debes comprobar el estado correspondiente del dispositivo y los datos de subida en la plataforma LoRaWAN que estés utilizando.

## Integración

La integración de una aplicación se puede realizar de diversas maneras, según tus necesidades y objetivos. Aquí tienes algunas opciones de integración comunes:

- **SenseCAP API**:

El uso de una Interfaz de Programación de Aplicaciones (API) es una forma común de permitir que tu aplicación se comunique con otras aplicaciones o servicios; puedes conectar tu dispositivo a SenseCAP Cloud y luego usar la SenseCAP API para obtener los datos.

SenseCAP API está pensada para que los usuarios gestionen dispositivos y datos de IoT. Combina tres tipos de métodos de API: protocolo HTTP, protocolo MQTT y protocolo WebSocket.

Consulta [SenseCAP API](https://wiki.seeedstudio.com/es/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) para más detalles.

- **Servidor de red LoRaWAN**：

Puedes usar la [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), y entonces podrás usar directamente el Servidor de Red LoRaWAN integrado para la integración.

Consulta la [Configuración de LNS](https://wiki.seeedstudio.com/es/SenseCAP_m2_LNS_config) para más detalles.

## Cómo restablecer el DevNonce en el T1000

Un problema de DevNonce puede producirse cuando el dispositivo ha realizado intentos repetidos de unión OTAA.

Tras intentos de unión repetidos durante mucho tiempo, el contador de DevNonce puede alcanzar su límite y el dispositivo ya no puede unirse con normalidad.

Un caso típico es: 
- El dispositivo se ha utilizado durante mucho tiempo, pero un día deja de poder unirse a la red correctamente, aunque el plan de frecuencias del dispositivo coincida con el plan de frecuencias del gateway. 
- Al comprobar los registros del dispositivo en el lado del servidor, se observan errores repetidos de desbordamiento de DevNonce.

Si el T1000 no puede unirse a la red LoRaWAN debido a un problema de DevNonce, ponte en contacto con el equipo de soporte técnico de Seeed (techsupport@seeed.io). Podemos proporcionar un firmware dedicado para borrar o restablecer el DevNonce, lo que permitirá que el dispositivo vuelva a unirse con normalidad a la red LoRaWAN.

