---
description: Cómo detectar el toque de dedo
title: Cómo detectar el toque de dedo

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_to_detect_finger_touch
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---
<!-- ---
name: How to detect finger touch
category: Tutorial
bzurl:
oldwikiname: How to detect finger touch
prodimagename:  
surveyurl: https://www.research.net/r/How_to_detect_finger_touch
sku:
--- -->

## Cómo Medir la Capacitancia

El sistema completo de medición de capacitancia está compuesto por almohadillas de electrodos sensores conectadas a las entradas sensoras del MPR121, y el MPR121 comunicándose con el procesador anfitrión a través del bus I2C y salida de interrupción.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-1.jpg)

La capacitancia medida en cada canal sensor es la capacitancia total a tierra que puede ser la combinación de la capacitancia parásita de fondo a tierra (Cb) y la capacitancia inducida por el toque del dedo a tierra (Cx). El MPR121 utiliza un esquema de corriente de carga DC constante para la medición de capacitancia. Cada canal se carga y luego se descarga completamente a tierra periódicamente para medir la capacitancia. Todos los canales se miden secuencialmente, cuando un canal está en el período de carga/descarga y medición, los otros canales están cortocircuitados a tierra.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/500px-2.jpg)

La cantidad de carga (Q) aplicada es programable estableciendo la corriente de carga (I) y el tiempo de carga (T). Una vez que el electrodo está cargado, el voltaje pico (V) al final de la carga es medido por el ADC interno de 10 bits. Este voltaje V es inversamente proporcional a la capacitancia (C) en el canal sensor.

```
 C = Q/V = (I*T)/V
```

Es decir, si cargamos el capacitor externo con un valor determinado de corriente (I) y tiempo (T), y obtenemos el voltaje (V), podemos obtener el valor de capacitancia. Usando esta forma, el rango medible de C puede ser calculado.

## Cómo Funciona la Detección Táctil

Los datos en bruto del ADC pasan por 3 niveles de filtrado digital para filtrar el ruido de alta frecuencia y baja frecuencia encontrado. El filtro de primer nivel es un filtro de promedio móvil simple, el resultado del filtro de segundo nivel es de 10 bits y se almacena en los registros de datos de salida como la capacitancia inmediata de cada entrada sensora, el resultado del filtro de tercer nivel es un contenido de frecuencia aún más bajo del cambio de señal usando la salida del filtro de segundo nivel, utilizado principalmente como el valor de línea base que representa la variación de capacitancia a largo plazo y el cambio ambiental lento como la humedad atmosférica y la suciedad para la detección táctil.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-3.jpg)

El toque y liberación se determina comparando la desviación de capacitancia inmediata que es la desviación de los datos de salida filtrados de segundo nivel del electrodo con respecto al valor de línea base. Si la desviación supera el umbral establecido, entonces se detecta un estado de toque o liberación y se reporta en el registro de estado. Los umbrales de toque y liberación son independientes y programables individualmente para cada electrodo, proporcionando histéresis e independencia del electrodo. La configuración de antirrebote puede usarse para filtrado adicional de ruido para proporcionar detección de toque y liberación libre de interferencias.

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-4.jpg)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>