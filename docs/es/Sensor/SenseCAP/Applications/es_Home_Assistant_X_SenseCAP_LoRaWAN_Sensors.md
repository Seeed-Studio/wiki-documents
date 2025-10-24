---
description: Tango with Home Assistant and SenseCAP Sensors
title: Tango with Home Assistant and SenseCAP Sensors
keywords:
- LoRaWAN
- Sensor
- Home Assistant
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/home_assistant_with_sensecap_lorawan_sensors
last_update:
  date: 9/14/2023
  author: Jessie
---

Comparte una forma de integrar sensores LoRaWAN® en Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={800} height="auto" /></p>

Ya hay suficientes dispositivos inteligentes (sensores, luces, interruptores) en el ecosistema de hogar inteligente, y es posible que ya tengas múltiples aplicaciones de Apple Homekit, Google Home y Amazon Alexa para servir diferentes dispositivos. Es muy necesario conectar todos ellos entre sí en un solo lugar. Leí las noticias recientemente en septiembre de 2022 de que matter 1.0 fue lanzado con el objetivo de unificar el ecosistema. Sin embargo, esto definitivamente tomará tiempo.

En realidad, antes de que matter fuera lanzado hace años, [Home Assistant](https://www.home-assistant.io/) es una de las mejores plataformas para construir un ecosistema de hogar inteligente completamente personalizado, integrando dispositivos principales y estableciendo reglas de automatización para hacer de tu hogar un lugar mejor y más inteligente. Eso es definitivamente algo que quiero aprender y compartir la experiencia.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

En esta serie de artículos, compartiré cómo construyo un hogar inteligente decente en Home Assistant y uso sensores de los productos SenseCAP de Seeed Studio. Y este es el primer hito.

Ejecutar un home assistant desde cero e integrar sensores meteorológicos SenseCAP.

Aquí están los pasos para llegar allí:

- Instalar home assistant en una Raspberry Pi
- Incorporar el sensor SenseCAP con la App
- Agregar integración MQTT y suscribirse a los datos de SenseCAP
- Agregar entidades con diferentes valores de medición de sensores.
- Crear un panel de datos de sensores

### Instalar home assistant en una Raspberry Pi

Para comenzar con Home Assistant, el [tutorial oficial](https://www.home-assistant.io/getting-started/) es muy útil.

Hay muchos dispositivos y plataformas para ejecutar home assistant, resulta que tengo una Raspberry Pi sin usar, así que comenzaré desde [aquí](https://www.home-assistant.io/installation/raspberrypi).

En lugar de usar Balena etcher para flashear la tarjeta SD, prefiero usar el [Raspberry Pi Imager](https://www.raspberrypi.com/software/) oficial, es ligero y simple de usar.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527038/image_xXpG0MaQJS.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Consigue una tarjeta Micro SD de más de 32GB y conéctala a tu computadora, aquí uso MacBook como ejemplo.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527041/image_vb64IHZx5B.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Navega a otros OS de propósito específico y selecciona Home Assistant y Home Automation.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527042/image_xf5OXUliuo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Selecciona Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527044/image_tIB5zVlxm5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Selecciona la versión del OS de Home Assistant para RPi4

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527045/image_UQdhYJt88T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Luego selecciona la unidad de tarjeta SD, ten cuidado y NO elijas el disco incorrecto, lo cual puede formatear tu unidad y perder todos los datos valiosos.

<img src="https://hackster.imgix.net/uploads/attachments/1527046/image_Le62Kc3fGH.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />
<img src="https://hackster.imgix.net/uploads/attachments/1527047/image_tiE1gwdlBw.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

Puede tomar un tiempo descargar la imagen de Home Assistant dependiendo de la velocidad de tu internet.

Luego inserta la tarjeta micro SD en la Raspberry Pi y conecta un cable ethernet a ella. Enciéndela, el LED rojo debería permanecer rojo y el LED verde comenzará a parpadear, si el LED verde no parpadea, eso indica que algo salió mal durante el flasheo de la imagen.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527053/image_UaCcGJHjzs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

ve a `http://homeassistant.local:8123/` y espera a que termine la instalación.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527051/image_rEn7iALm78.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={400} height="auto" /></p>

Sigue este [enlace](https://www.home-assistant.io/getting-started/onboarding/) para registrar tu cuenta de Home Assistant e iniciar sesión.

¡Bingo! Finalmente, tienes tu Home Assistant instalado.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527055/image_5mAwRA0PMG.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Incorporar el sensor SenseCAP con la App

SenseCAP es una serie de dispositivos sensores industriales y productos gateway, entre los cuales, los sensores LoRaWAN S210x están principalmente construidos para escenarios de largo alcance y alimentados por batería.

Quiero usar la nueva [Estación Meteorológica S2120](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) recién lanzada, e instalarla en la parte superior de mi techo, que tiene 6 pisos de altura, por lo que la característica de comunicación de larga distancia de LoRa hizo el trabajo muy bien. Ya viene con todos los accesorios para una instalación rápida.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527056/image_61yawsK9oe.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

La Estación Meteorológica funciona como un dispositivo LoRaWAN estándar, por lo que puedo usar un [gateway LoRaWAN interior SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) en mi hogar, tiene una antena de 3dBi con una base magnética.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527058/image_BRnDKw5tLD.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

A continuación, descarga la aplicación SenseCAP Mate y registra una cuenta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

solo para tu referencia, este video proviene de Seeed Studio que demuestra el proceso básico de incorporación.

<div class="video-container">
<iframe class="youtube-video" src="https://youtu.be/TUQ9UmF7e7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Conecta el gateway LoRaWAN M2 a internet con un cable ethernet y conecta la antena antes de encenderlo, cuando veas que el LED RGB del panel permanece verde, eso significa que el gateway está configurado correctamente.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527070/image_zEm7RxadAf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Ahora déjame incorporar el gateway LoRaWAN M2

- Abre la aplicación Mate y ve a la pestaña "device"<br/>
- Haz clic en el ícono "+" en la esquina superior derecha para escanear el código QR del gateway, que está en la etiqueta del dispositivo.<br/>
- Nombra tu dispositivo y establece la ubicación.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527073/image_xoxYLPEmeE.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

de la misma manera, escanea el código QR para incorporar el sensor meteorológico S2120. toca el sensor S2120, ahora puedo ver los datos meteorológicos.

- Temperatura del Aire
- Humedad del Aire
- Intensidad de Luz
- Presión Barométrica
- Dirección del Viento
- Velocidad del Viento
- Lluvia por Hora
- Índice UV

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527082/image_Tr85o39OKT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
y ahora es hora de ir a mi techo e instalarlo en un poste.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527110/img_3683_qMfEaREbxR.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

También tengo otro [Sensor de CO2, Temperatura y Humedad S2103](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) y [Sensor de Humedad del Suelo, Temperatura y EC S2105](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html), comparten los mismos beneficios en la serie S210x y el proceso de incorporación es el mismo. y son de alta calidad con estándares industriales.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527107/image_Q55T2OnZjs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

así que también los agrego a la aplicación SenseCAP Mate y los instalo en mi dormitorio y maceta.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527108/image_rkLg6bXCX9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Ahora, tengo todo configurado en el lado del sensor SenseCAP.

### Agregar integración MQTT

- **¿Por qué necesito que los datos del sensor se integren en Home Assistant?**

`Puedo aprovechar el flujo de automatización en Home Assistant, y la aplicación SenseCAP actualmente no tiene esa característica.`

- **¿Cuál es el proceso para obtener los datos de SenseCAP en Home Assistant?**

`Obtener la clave API de tu cuenta SenseCAP<br/>
Leer la documentación de la API de flujo abierto de SenseCAP (MQTT)<br/>
Agregar integración MQTT en Home Assistant<br/>
Suscribirse a los datos de SenseCAP vía MQTT y usando la clave API<br/>`

- **Ahora, vamos al Portal SenseCAP, aquí puedes encontrar tu**

`OrgID` = ID de Organización<br/>
`Password` = Claves API de acceso

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527113/image_Q3vkEnuKU2.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Mi información de suscripción MQTT es:

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527114/image_V4qotIEmN1.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Regresa a la interfaz web de Home Assistant.

hay muchas integraciones en Home Assistant

https://www.home-assistant.io/integrations/

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527115/image_igs1T1yKAk.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Hoy usaré la integración MQTT para suscribirme a datos en formato JSON y usar la [integración de sensor MQTT](https://www.home-assistant.io/integrations/sensor.mqtt/) para vincular el valor del sensor a una entidad específica.

Ve a configuración y entra en Dispositivos y Servicios

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527116/image_udflzRbXDp.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
Haz clic en el botón agregar integración y busca MQTT

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527118/image_VPTvmh0hMc.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Recuerda habilitar la configuración avanzada, si olvidas ingresar el Client ID, la configuración fallará.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527120/image_y4yAFffD4f.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

luego, puedes probar si la suscripción funciona, haciendo clic en el botón CONFIGURE y escuchando el tema

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527123/image_Fku83wMfdA.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527121/image_G5lZNHW9P5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

espera un momento, aparecerá el mensaje del sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527122/image_5pGjBZ4ZqZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>
Hasta ahora, el cliente MQTT se ha configurado exitosamente.

### Agregar entidades

Agregaré múltiples entidades para almacenar datos de medición de sensores, por ejemplo, crear una nueva entidad "Temperatura del aire" y tomar el valor de medición del mensaje JSON MQTT del S2120. y agregar las otras entidades de sensores de manera similar.

Terminaré esto editando el archivo de configuración de Home Assistant

```cpp
configuration.yaml
```

ve a la configuración y muévete a Complementos, luego

<img src="https://hackster.imgix.net/uploads/attachments/1527130/image_em25CYMJaj.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" /><img src="https://hackster.imgix.net/uploads/attachments/1527131/image_DfFNubnQaf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

instálalo y habilita mostrar en la barra lateral, y haz clic en iniciar.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527132/image_RNwnNZNnBX.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

ahora esta es la parte importante para modificar el archivo YAML con los siguientes scripts

```cpp
mqtt:
  sensor:
    - name: "Air Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4097"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Air Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4098"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Light Intensity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4099"
      unit_of_measurement: "Lux"
      value_template: "{{ value_json.value }}"
    - name: "Barometric Pressure"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4101"
      unit_of_measurement: "Pa"
      value_template: "{{ value_json.value }}"
    - name: "Wind Direction"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4104"
      unit_of_measurement: "°"
      value_template: "{{ value_json.value }}"
    - name: "Wind Speed"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4105"
      unit_of_measurement: "m/s"
      value_template: "{{ value_json.value }}"
    - name: "Rainfall Hourly"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4113"
      unit_of_measurement: "mm/hour"
      value_template: "{{ value_json.value }}"
    - name: "UV Index"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4190"
      unit_of_measurement: "UV"
      value_template: "{{ value_json.value }}"
    - name: "Soil Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Soil Moisture"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%"
      value_template: "{{ value_json.value }}"
    - name: "Electrical Conductivity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "dS/m"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room CO2"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.value }}"
```

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527133/image_sWi5PsDmyl.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

guárdalo y ve a las herramientas de desarrollador para verificar si el archivo YAML es correcto.

luego, reinicia Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527134/image_4eyghWeM61.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

después de reiniciar, asegúrate de que MQTT esté escuchando el tema de SenseCAP

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527135/image_2zfIHuOxvC.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

luego, ve a Configuración -> Dispositivos y Servicios -> Entidades

¡¡¡wow~~~ todas las mediciones de los sensores están listadas ahí.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527136/image_nf7n2EARnh.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Crear un panel de datos de sensores

El último paso es agregar entidades de sensores a un panel.

ve a la vista general y encuentra "Editar Panel"

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527137/image_aUUUbBvb9V.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Elige la tarjeta de entidades, esta tarjeta puede incluir múltiples valores de sensores en una tarjeta.

Crearé tres tarjetas para cada sensor

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527138/image_Ebs1nBNDow.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Finalmente, he hecho la integración más básica y muestro los datos de los sensores SenseCAP en Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527146/image_zV3lKcDL3T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

A continuación, dedicaré más tiempo a optimizar la interfaz de usuario y hacer que se vea hermosa.

y usar ESP32 para agregar nuevos sensores a Home Assistant.

### Recursos

[Tango con Home Assistant y Sensores SenseCAP](https://www.hackster.io/Pistachio9to5/tango-with-home-assistant-and-sensecap-sensors-1ee587)
