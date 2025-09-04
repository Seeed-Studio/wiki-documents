---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: Preguntas Frecuentes
keywords:
- Tracker
- FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/faq_for_SenseCAP_T1000
last_update:
  date: 9/20/2023
  author: Jessie
---


## Relacionado con la Ubicación

### Precisión del Posicionamiento GPS

Los satélites GPS transmiten sus señales en el espacio con cierta precisión, pero lo que recibes depende de factores adicionales, incluyendo la geometría satelital, el bloqueo de señales, las condiciones atmosféricas y las características/calidad de diseño del receptor.

Muchas cosas pueden degradar la precisión del posicionamiento GPS. Las causas comunes incluyen:

* Bloqueo de señal satelital debido a edificios, puentes, árboles, etc.
* Uso en interiores o subterráneo
* Señales reflejadas en edificios o paredes ("multitrayectoria")

Por lo tanto, en un área amplia y sin obstrucciones obtendrás una mejor señal GPS, consiguiendo así resultados de posicionamiento más precisos.

### ¿Por qué no hay datos de ubicación GPS?

* La ubicación GPS puede no estar disponible cuando el rastreador está en interiores. El posicionamiento GNSS requiere un entorno exterior abierto. Si estás en interiores, la ubicación GPS puede agotarse debido a la señal débil. Asegúrate de que el dispositivo esté colocado al aire libre para la precisión del GPS.

* Asegura la instalación correcta del dispositivo orientando el dispositivo con su parte frontal hacia arriba para evitar la obstrucción de la posición de la antena

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>


### ¿Por qué la ubicación Wi-Fi o Bluetooth no se muestra en el mapa de la App SenseCAP?

* La ubicación Wi-Fi requiere un servicio de análisis de mapas de terceros, que debe ser invocado por los usuarios para el análisis. Actualmente, la App Mate solo admite la visualización de posicionamiento GNSS.

* El posicionamiento Bluetooth depende de balizas Bluetooth y sus respectivas ubicaciones para un seguimiento preciso.
bloquear la posición de la antena. 


## Relacionado con la Red

### Red Helium

:::caution note
Para usuarios que operan con la región **EU868**/**RU864**:

**No se recomienda** establecer el intervalo de carga a menos de 4 minutos.

Si estableces un intervalo de carga de menos de 4 minutos, puedes notar una desalineación de marca de tiempo entre el enlace ascendente del dispositivo y la hora actual.
:::

**Aquí está la justificación**:

Dada la restricción del [ciclo de trabajo del 1%](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) en EU868, el dispositivo debe esperar pacientemente aproximadamente 4 minutos para cada transmisión de enlace ascendente. Además, la red Helium inicia correcciones de velocidad de datos y potencia solo después de acumular 20 paquetes de enlace ascendente consecutivos marcados con el bit [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) establecido en 1.

Así que si el intervalo de carga que estableces es menor a 4 minutos, los datos en tiempo real se almacenarán temporalmente en RAM y se mantendrán hasta que la red Helium active las correcciones de velocidad de datos y potencia antes de cargar.


### Cómo obtener las claves

En la página de configuración, selecciona una plataforma diferente a SenseCAP para obtener las claves.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## Relacionado con el Botón

### Unirse a la Red

Mantén presionado el botón durante 3 segundos, la luz verde parpadeará lentamente, luego presiona el botón una vez, la luz verde respirará, y entonces el dispositivo intentará unirse a la red LoRaWAN.

### Reinicio forzado

Mantén presionado el botón, luego conecta el cable de carga, suelta el botón después de conectar, la luz verde respirará, y entonces el dispositivo se reiniciará forzosamente.

## Relacionado con la Batería

### Duración de la Batería

La duración de la batería depende de factores como el intervalo de enlace ascendente, el uso del sensor, la distancia de transmisión LoRa y la temperatura de funcionamiento. La duración prevista de la batería se basa en un entorno de trabajo típico (25°C) y sirve como referencia. La duración real de la batería puede variar.

#### EU868(1C/SF12)

|Intervalo de Subida|1 minuto|5 minutos|60 minutos|1 día|
|--|--|--|--|--|
|Duración de la Batería(día)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|Intervalo de Carga|1 minuto|5 minutos |60 minutos|1 día|
|--|--|--|--|--|
|Duración de la Batería(días)|3.02|37.52|117.32|210.7|


Para cálculos detallados de duración de la batería, consulte el [Formulario de Cálculo de Duración de la Batería](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).


### Estado de Carga

|Estado|Indicador|
|----|----|
|Cargando| El LED parpadeará una vez cada 3 segundos.|
|Completamente cargado| El LED permanecerá siempre encendido.|
|Anomalía de carga|Cuando el dispositivo se carga por debajo de 0 ° C o por encima de 45 ° C, el dispositivo entrará en el estado de protección de carga y no se podrá cargar.<br/>El LED parpadeará rápidamente.|

:::caution Alarma de anomalía de carga
Si el indicador `parpadea rápidamente` durante la carga, puede ser que el voltaje de alimentación sea insuficiente o haya mal contacto.

Por favor, verifique su fuente de alimentación o pruebe con otro adaptador de corriente.
:::

### ¿Cuánto tiempo tarda en cargarse completamente?

Normalmente tarda aproximadamente **2 horas** en cargarse completamente.

### ¿Puede continuar subiendo datos mientras se carga?

Sí, puede continuar subiendo datos mientras se carga.


## Relacionado con Sensores

### Sin datos del sensor

Para ahorrar energía, la función del sensor de temperatura/luz está deshabilitada por defecto, por lo que necesita habilitarla primero en la aplicación SenseCAP Mate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>


## Datos en Caché

### Cómo funciona

Cuando la señal LoRaWAN es débil o no hay cobertura de red, los datos se guardarán en el dispositivo. Cuando el dispositivo regrese a un área con cobertura de red LoRaWAN, enviará primero los datos en tiempo real, y luego subirá los datos en caché.

Durante cada período de subida, subirá primero la ubicación más reciente, y luego los datos en caché.
Solo se suben unos pocos paquetes de datos históricos por ciclo, por lo que esto no afectará el ciclo de trabajo.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### Nota

Dado que el dispositivo solo puede almacenar en caché aproximadamente 1,000 datos sin conexión, si está en un lugar sin cobertura de red LoRaWAN durante mucho tiempo, cuando los datos sin conexión alcancen el límite, algunos datos antiguos serán sobrescritos por datos nuevos, por lo que puede 'perder' algunos datos.


## Cómo configurar en lote

Por favor, consulte la [Guía de Inicio Rápido](https://wiki.seeedstudio.com/es/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) para configurar el primer dispositivo, y luego haga clic en el módulo `Template` en la esquina superior derecha.


Haga clic en `Save as Template`, nombre su plantilla y luego haga clic en `Confirm`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

Cuando configure otros dispositivos más tarde, puede seleccionar directamente la plantilla que guardó.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>


Si desea compartir su plantilla con otros, puede elegir `Copy Link to Share` o `Download Template`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>


Otros usuarios pueden elegir usar su plantilla copiando la URL compartida o importando el archivo de plantilla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## Error de marca de tiempo

Si encuentra que la marca de tiempo en la carga útil es incorrecta, por favor actualice el firmware a la versión más reciente.

Consulte [Actualización de Firmware y Notas de Lanzamiento](https://wiki.seeedstudio.com/es/fm_release_for_SenseCAP_T1000/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## Integración

La integración de una aplicación se puede realizar de varias maneras, dependiendo de tus necesidades y objetivos. Aquí tienes algunas opciones de integración comunes:

* **API de SenseCAP**:

Usar una Interfaz de Programación de Aplicaciones (API) es una forma común de permitir que tu aplicación se comunique con otras aplicaciones o servicios, puedes conectar tu dispositivo a SenseCAP Cloud y luego usar la API de SenseCAP para obtener los datos.

La API de SenseCAP es para que los usuarios gestionen dispositivos IoT y datos. Combina tres tipos de métodos de API: protocolo HTTP, protocolo MQTT, y protocolo WebSocket.

Consulta [API de SenseCAP](https://wiki.seeedstudio.com/es/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) para más detalles.

* **Servidor de Red LoRaWAN**：

Puedes usar el [gateway multi-plataforma SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), entonces puedes usar directamente el Servidor de Red LoRaWAN integrado para la integración.

Consulta la [Configuración LNS](https://wiki.seeedstudio.com/es/SenseCAP_m2_LNS_config) para más detalles.

