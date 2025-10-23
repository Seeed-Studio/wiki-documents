---
title: Sensor - Light(introducción)
description: Sensor - Light(introducción)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor_light
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

# Guía de Selección de Sensores de Luz Seeed

Aquí en Seeed, hemos lanzado diferentes Sensores de Luz y esto puede causar problemas para algunos de ustedes donde no saben cuál elegir y cuál es adecuado para sus necesidades. ¡Aquí viene la solución! Por favor revisen la comparación en este sitio para más referencia.

Para todos los sensores de Luz en nuestro bazar, por favor hagan clic en [Etiqueta de Luz del Bazar](https://www.seeedstudio.com/tag/light.html) para revisar.

## Qué es un Sensor de Luz

Un sensor de luz es un dispositivo fotoeléctrico que convierte la energía lumínica (fotones) detectada en energía eléctrica (electrones). ¿Parece simple? ¡Hay más en un sensor de luz que solo su definición. Viene en diferentes tipos, se usa en varias aplicaciones y más!

### Glosario de términos

Antes de comenzar con la guía de sensores de luz de hoy, tendremos que entender los siguientes términos que están comúnmente asociados con la luz. Lo he simplificado para una comprensión más fácil:

### Candela

- Originado del término velas, candela se refiere a la intensidad luminosa; qué tan fuerte es la luz para el ojo desnudo
  
- Mientras mayor sea la intensidad luminosa, mayor es la sensibilidad para nuestros ojos

### Lumen

- Mide la cantidad total de luz visible de una fuente de luz a través de la relación entre la intensidad luminosa y el ángulo que llena un haz de luz
- Comúnmente usado para calificar el brillo de una bombilla
- Para decirlo simplemente Lumen = Cantidad total de luz emitida en todas las direcciones

### Lux

- Usado para medir la iluminancia, el área donde se extiende el flujo luminoso
- Es similar al Lumen pero toma en cuenta el área de superficie
- Para decirlo simplemente, Lux = cantidad total de luz que cae en una superficie particular

:::note
Si aún están confundidos entre Lumen y Lux, aquí hay una representación gráfica:
:::

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-88.png"/></div>

*Referencia: [Lux vs Lumen](https://www.waveformlighting.com/home-residential/what-is-the-difference-between-lux-and-lumens)*

### Cuáles son los tipos de sensor de luz

Hay diferentes tipos de sensores de luz disponibles; principalmente Fotorresistores, Fotodiodos y Fototransistores. ¿Suena técnico? ¡Lo desglosaré con las explicaciones a continuación!

**1. Fotorresistores (LDR)**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Photoresistors_-_three_sizes_-_mm_scale.jpg"/></div>

El tipo de sensor de luz más común que se usa en un circuito de sensor de luz son los fotorresistores, también conocidos como resistor dependiente de luz (LDR). Los fotorresistores se usan para simplemente detectar si una luz está encendida o apagada y comparar niveles de luz relativos a lo largo de un día.

**¿De qué están hechos los fotorresistores?**

- Un material semiconductor de alta resistencia llamado células de sulfuro de cadmio, altamente sensible a la luz visible e infrarroja cercana

**¿Cómo funcionan los fotorresistores?**

<div align="center"><img src="https://www.edgefx.in/wp-content/uploads/2015/02/Light-Intensity-vs-LDR-Resistance.jpg"/></div>

Como su nombre sugiere, los fotorresistores funcionan de manera similar a sus resistores regulares, pero en su lugar el cambio de resistencia depende de la cantidad de luz a la que está expuesto.

- Alta intensidad de luz causa una menor resistencia entre la célula de sulfuro de cadmio
- La baja intensidad de luz resulta en una mayor resistencia entre las células de sulfuro de cadmio

Este principio de funcionamiento se puede ver en aplicaciones como lámparas de calle, donde en el día, la mayor intensidad de luz resulta en menor resistencia y no se produce luz.

**2. Fotodiodos**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fotodio.jpg/220px-Fotodio.jpg"/></div>

Los fotodiodos son otro tipo de sensor de luz. Pero en lugar de usar el cambio en resistencia como el LDR, es más complejo a la luz, cambiando fácilmente la luz en un flujo de corrientes eléctricas.

También conocido como fotodetector, sensor de foto.

**¿De qué están hechos los fotodiodos?**

- Los fotodiodos están hechos principalmente de materiales de silicio y germanio y comprenden filtros ópticos, lentes incorporados y áreas de superficie

**¿Cómo funcionan los fotodiodos?**

Los fotodiodos funcionan en el principio de funcionamiento llamado efecto fotoeléctrico interno. Para decirlo simplemente, cuando un haz de luz golpea, los electrones se aflojan, causando agujeros de electrones que resultan en corriente eléctrica fluyendo a través.

- Mientras más brillante sea la luz presente, más fuerte será la corriente eléctrica.

**Aplicaciones de sensores de luz de fotodiodo**

Dado que la corriente generada por los fotodiodos es directamente proporcional a la intensidad de la luz, lo hace favorable para la detección de luz que requiere cambios rápidos de respuesta a la luz.

Dado que los fotodiodos son sensibles a la luz infrarroja, también es aplicable para más usos.

Aquí hay algunas de las aplicaciones del fotodiodo:

- Electrónicos de consumo que van desde reproductores de discos compactos hasta detectores de humo e incluso dispositivos de control remoto
- Aplicaciones médicas como equipos/instrumentos usados para propósitos de medición y análisis
- Sistemas de energía solar como paneles solares

**3. Fototransistores**

El último tipo de sensor de luz que exploraremos hoy es el fototransistor. El sensor de luz fototransistor puede describirse como un fotodiodo + amplificador. Con la amplificación añadida, la sensibilidad a la luz es mucho mejor en los fototransistores.

Sin embargo, no se desempeña mejor en la detección de niveles de luz bajos comparado con los fotodiodos.
Dado que ambos tipos de sensores de luz comparten un principio de funcionamiento similar, ¡consulten la explicación anterior!

## Sensores de Luz en Seeed

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" alt="Seeed Light Sensor Selection Guide" title="Seeed Light Sensor Selection Guide" />
    <figcaption><b>Figura 2</b>. <i>Sensores de Luz en Seeed</i></figcaption>
  </a>
</figure>
</div>

### Cuál es el Mejor Para Ti

| Producto | [Grove - Light Sensor v1.1](https://www.seeedstudio.com/Grove-Light-Sensor-P-v1-1.html) | [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) | [Grove - Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html) | [Grove - Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html) | [Grove - I2C UV Sensor (VEML6070)](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-VEML6070.html) | [Grove - Light&Color&Proximity Sensor](https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html) |
|-----------------------|---------------------------|---------------------------|------------------------------|-------------------------|----------------------------------|--------------------------------------|
| Miniatura | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>      | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>  |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>                     |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Grove_sunlight_sensor_view.jpg" /></div>                                     | <div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>                                       |<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div> |
| Interfaz | Analógica | Analógica | Digital | I2C | I2C | I2C |
| Longitud de Onda Pico | 540nm | 540nm | / | 280-950nm | 320-410 nm | / |
| Temperatura de Operación | -40°C a 85°C | -40°C a 85°C | -40°C a 85°C | -40°C a 85°C | -40°C a 85°C | -30～85°C |
| Lux Máx. [klx] | / | / | 0.1 - 40,000 LUX | / | / | / |
| Sensibilidad UVA | / | / | / | / | 5 μW/cm2/paso(típico) | 60|

### Visión Rápida

### Opción de bajo costo: [Grove – Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedimg2016-10po8b7qd0xnlnchgogziq9g3d.jpg" /></div>

¡Comenzando la lista de sensores de luz disponibles aquí mismo en Seeed está el Grove – Light Sensor v1.2! ¡Junto con su bajo precio de \$2.90, viene un fotodiodo altamente sensible y confiable para tus necesidades de detección de luz!

Fácilmente emparejable con tu placa Arduino a través de nuestro sistema plug and play Grove, ¡te ahorrarás algunos problemas de conectar cables jumper y soldarlo!

**Sus características incluyen:**

- Chip dual OpAmp LM358 a bordo
- Módulo analógico
- Puerto grove integrado para fácil interfaz
- Salida de señal eléctrica convertible
- Depende del ADC en tu placa controladora, por ejemplo, puede generar 0-255 para un ADC de 8 bits)
- Factor de forma pequeño
- Reconoce espectro más amplio

### Opción de salida de señal digital: [Grove – Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881092_3.jpg" /></div>

¡Si estás buscando una opción de salida de señal digital junto con un rango de espectro de luz seleccionable, el Grove – Digital Light Sensor es el indicado para ti!

Basado en el convertidor de luz a digital I2C TSL2561 que hace la salida de señal digital, ¡este módulo sensor de luz cuenta con diodos duales sensibles a la luz, donde puedes cambiar entre 3 modos para tomar tu lectura!

Estos tres modos son modo infrarrojo, espectro completo y modo visible humano
El modo visible humano te da lecturas cercanas a las sensaciones de tu ojo

**Sus características incluyen:**

- Amplio rango dinámico: 0.1 – 40,000 LUX
- Amplio rango de temperatura de operación: -40°C a 85°C
- Salida digital de alta resolución de 16 bits a 400 kHz I2C Fast-Mode
- Función de interrupción programable con configuraciones de umbral superior e inferior definidas por el usuario
- Modos de detección seleccionables

### Opción de detección de luz solar: [Grove – Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" /></div>

Aunque está hecho para detección directa de luz solar con UV, este sensor de luz digital es adecuado para una variedad de otras fuentes de luz también, incluyendo luz visible e infrarroja.

Basado en el sensor SI1145 de SiLabs, es un sensor de proximidad infrarroja de baja potencia basado en reflectancia, índice UV y luz ambiente con una interfaz digital I2C y salida de interrupción de evento programable.

Dado que el rendimiento es clave, ¡este sensor de luz ofrece un amplio rango dinámico y de detección de espectro para coronarlo todo!

**Sus Características Incluyen:**

- Sensor de luz digital
- Amplio rango de detección de espectro
- Configuración programable
- Suministro de 3.3/5V
- Detecta luz solar directamente
- Compatible con Grove
- Interfaz I2C (7-bit)

## Ideas de Aplicación

- Medición de luz
- Detector de luz
- Interruptor controlado por luz
- Dispositivo domótico inteligente
- Detección de luz ambiental
- Control de retroiluminación para panel de pantalla
- Control de iluminación de teclado

## Proyectos Útiles

**Grove - Introducción a un Sensor de Luz**:

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed" width="350"></iframe>

**¡El Cubo Ambiental! Conoce la Tierra Bajo Ti usando Sigfox**: Un cubo con todos los sensores necesarios, adecuado para una amplia gama de aplicaciones como agricultura, monitoreo, etc.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed" width="350"></iframe>

**Solución Seeed LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width="350"></iframe>

**Controlador Hidropónico IoT Intel Edison**: Un Controlador de Hidroponía habilitado para IoT usando el Intel Edison durante el Hackathon IoT de Boston.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed" width="350"></iframe>

**COI - Medidor de Transmisión de Luz**: El producto terminado usa el sensor de luz proporcionado en el Kit de Inicio Grove Plus para medir cambios en la intensidad de luz.

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed" width="350"></iframe>

**¡El Cubo Ambiental! ¡Conoce la Tierra Bajo Ti!** Un cubo con todos los sensores necesarios, adecuado para una amplia gama de aplicaciones como agricultura. ¡Conoce la tierra bajo ti!

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed" width="350"></iframe>

## Recursos

### Tutoriales sobre Grove - Sensor de Luz v1.1

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

- [¿Qué es un sensor de luz? Tipos, Usos, Guía Arduino](https://www.seeedstudio.com/blog/2020/01/08/what-is-a-light-sensor-types-uses-arduino-guide/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>