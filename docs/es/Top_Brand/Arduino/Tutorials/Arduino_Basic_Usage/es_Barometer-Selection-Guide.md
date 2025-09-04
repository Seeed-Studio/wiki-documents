---
description: Guía de Selección de Sensores Barómetros Seeed
title: Guía de Selección de Sensores Barómetros Seeed

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Barometer-Selection-Guide
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Guía de Selección de Sensores Barómetros Seeed

Hemos lanzado varios tipos de sensores barómetros en los últimos años. Puede que encuentres difícil elegir entre ellos. ¡Entendemos tu situación y echemos un vistazo detallado a ellos para determinar cuál es el más adecuado para ti!

Para todos los sensores barómetros en nuestro bazar, por favor haz clic en [Etiqueta Barómetro del Bazar](https://www.seeedstudio.com/tag/Barometer.html) para verificar.

## Qué es un Barómetro

Un barómetro es un instrumento meteorológico ampliamente utilizado que mide la presión atmosférica (también conocida como presión del aire o presión barométrica) -- el peso del aire en la atmósfera. Es uno de los sensores básicos incluidos en las estaciones meteorológicas. Los barómetros han evolucionado a través de los siglos y vienen en todas las formas y tamaños. También se utiliza en más industrias que solo los sectores meteorológicos y climáticos.

Por ejemplo, hoy en día la mayoría de los teléfonos móviles tendrán barómetros digitales incorporados, los cuales son el tipo principal de barómetro en el campo de la electrónica.

<div align="center">
<img src="https://files.seeedstudio.com/products/101020812/img/baro%20produced.2019-12-11%2011_05_01.gif" />
</div>

### Cómo Funciona un Barómetro Digital

Un barómetro digital utiliza una celda de detección (es decir, un chip) para medir la temperatura del aire. Este chip será vital y es sensible a la presión atmosférica que influye en su capacidad para conducir/transmitir electricidad.

El cambio de volumen afecta la fuerza de la corriente que fluye a través de él, y la presión del aire se calcula midiendo la fuerza de la corriente. El pequeño tamaño y la versatilidad de la batería de prueba permite que se integre en una variedad de dispositivos para diversos propósitos.

La foto de abajo muestra un sensor barómetro típico con un chip incorporado (DPS310):

<div align="center">
<img width="{400}" src="https://github.com/SeeedDocument/Grove-High-Precision-Barometer-Sensor-DPS310/raw/master/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" />
<figcaption><b>Figura 1</b>. <i>Sensor Barómetro Típico</i></figcaption>
</div>

## Sensores Barómetros en Seeed

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" alt="Guía de Selección de Barómetros Seeed" title="Guía de Selección de Barómetros Seeed" /><figcaption><b>Figura 2</b>. <i>Sensores Barómetros en Seeed</i></figcaption></a>
</figure>
</div>

### Cuál es el Mejor Para Ti

| Especificaciones               | [Grove - BMP280](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)   | [Grove - BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)  | [Grove - DPS310](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)      | [Grove - HP206F](https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html)    |
|------------------------------|-----------------|-----------------|---------------------|-------------------|
| **Imagen en Miniatura**              |     ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg)            |      ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg)           |                ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg)     |       ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg)            |
| **Rango de Presión**               | 300 ~ 1100hPa   | 300 ~ 1100hPa   | 300 ~ 1200hPa       | 700 ~ 1100hPa     |
| **Rango de Temperatura**            | -40 ～ 85°C     | -40 ～ 85°C     | -40 ～ 85°C         | -40 ～ 85°C       |
| **Precisión de Presión**           | /               | /               | ± 0.002hPa (±0.02m) | /                 |
| **Exactitud de Presión (Absoluta)** | ± 1hPa (o ±8m) | ± 1hPa (o ±8m) | ± 1hPa (o ±8m)     | ± 1.5hPa (o ±8m) |
| **Exactitud de Presión (Relativa)** | ± 0.12 hPa      | ± 0.12 hPa      | ± 0.06 hPa          | ± 0.06 hPa        |
| **Resolución de Presión**          | 0.18Pa          | 0.18Pa          | 0.06Pa              | 0.01hPa           |
| **Humedad**                     | /               | 0 ~ 100%        | /                   | /                 |
| **Interfaz de Comunicación**       | I2C / SPI       | I2C / SPI       | I2C / SPI           | I2C               |

### Información Rápida

De la tabla anterior, **Rango de Presión**, **Precisión de Presión (Relativa)** y **Resolución de Presión** son los aspectos vitales de los sensores de barómetro. Por tales razones, puedes elegir el que sea más adecuado para tus necesidades. Además, también necesitas considerar la interfaz de comunicación. En nuestro caso, la comunicación I2C está disponible para todos los barómetros y SPI también está disponible para la mayoría de ellos.

:::note
La comunicación SPI puede operar más rápido que I2C, lo cual puede ser una ventaja en algunas situaciones.
:::

Para añadir más, [Grove - Temp&Humi&Barometer Sensor (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) tiene características adicionales para medir con precisión de ±1% para temperatura y ±3% para humedad para ciertas necesidades.

## Ideas de Aplicación

- Navegación Interior (Detección de pisos, por ejemplo, en centros comerciales y estacionamientos)
- Salud y Deportes (Ganancia de elevación precisa y velocidad vertical)
- Navegación Exterior (Tiempo de inicio y mejora de precisión del GPS, navegación a estima, por ejemplo, en túneles)
- Estación Meteorológica ('Micro-clima' y pronósticos locales)
- Drones (Estabilidad de vuelo y control de altura)

## Proyectos Útiles

**Seeed LoRa IoTea Solution**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Sistema de alarma inteligente hecho con BBG (IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**Sistema de Monitoreo para Cultivos Inteligentes** Diseña y construye un sistema para monitorear el estado de tus cultivos usando el Netduino 3 WiFi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>

## Recurso

- Referencia

  - [How a Barometer Works and Helps Forecast Weather](https://www.thoughtco.com/how-barometers-measure-air-pressure-3444416)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>