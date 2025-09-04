---
description: Kit de Inicio Grove para BeagleBone® Green
title: Kit de Inicio Grove para BeagleBone® Green
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Starter_Kit_for_BeagleBone_Green
last_update:
  date: 1/10/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_bbg_start_kit.jpg)

El Kit de Inicio Grove para BeagleBone® Green es un kit de nivel básico para principiantes, que puede ayudarte a explorar BBG y crear proyectos innovadores. Es la mejor opción para novatos para desarrollar algunos proyectos geniales y construir prototipos integrados en BBG. Aquí hay una colección de sensores, actuadores y shields que hemos usado exitosamente con BeagleBone® Green.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Starter-Kit-for-SeeedStudio-BeagleBone-Green-p-2526.html)

Ideas de Aplicación
-------------------

Si quieres hacer algunos proyectos increíbles con BeagleBone® Green y Groves, aquí hay algunos proyectos para tu referencia.

| **Demo de Luz Inteligente con BBG y Kit de Inicio BBG(HA)**                                               | **Una Aplicación IoT con BBG y Kit de Inicio BBG**                     |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/BBG_starter_kit1.png)                              | ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/图片1.png)  |
| [¡Hazlo AHORA!](https://www.seeedstudio.com/recipe/363-smart-light-demo-with-bbg-amp-bbg-start-kit-ha.html) | [¡Hazlo AHORA!](https://www.seeedstudio.com/recipe/367-an-iot-application-with-bbg-amp-bbg-start-kit.html)        |

Lista de Partes
---------------

### Grove - Hub I2C

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2c_hub_b.jpg)

El Hub I2C Grove es un módulo de extensión Grove para conectar múltiples dispositivos I2C al socket I2C Grove.

Se puede usar con cable Universal de 4 Pines a X2 4 Pines y conecta hasta 7 dispositivos I2C lo cual puede cubrir la mayoría de propósitos de desarrollo.

Si quieres saber más información sobre este módulo por favor haz clic [**aquí**](/es/Grove-I2C_Hub).

### Grove - Botón

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button1.jpg)

Esta nueva versión del botón Grove contiene un botón independiente, que está configurado con resistor pull-down – listo para usar con nuestros microcontroladores como entrada digital. El botón señala el cable SIG(D1), NC(D2) no se usa en este Grove.

**Esquemático del Botón**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buttonsch.jpg)

### Grove - ADC I2C

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2C_ADC_01.jpg)

Grove - ADC I2C es un módulo ADC de precisión de 12 bits basado en ADC121C021.

Te ayuda a aumentar la precisión del valor recolectado del sensor analógico proporcionando un voltaje de referencia constante.

Debido a que su dirección es cambiable, puedes usar hasta 9 ADC I2C al mismo tiempo como máximo.

Por otro lado, este módulo proporciona función de suspensión automática que reduce considerablemente el consumo de energía.
<!-- Si quieres saber más información sobre este módulo por favor haz clic [**aquí**](/es/Grove-I2C_ADC). -->

### Grove - Sensor de Temperatura

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_temp.jpg)

El Grove - Sensor de Temperatura usa un termistor para detectar la temperatura ambiente.

La resistencia de un termistor aumentará cuando la temperatura ambiente disminuya.

Es esta característica la que usamos para calcular la temperatura ambiente.

El rango detectable de este sensor es -40 - 125ºC, y la precisión es ±1.5ºC.

Y debes conectarlo al Puerto J2 del Grove - ADC I2C.
Si quieres saber más información sobre este módulo por favor haz clic [**aquí**](/es/Grove-Temperature_Sensor_V1.2).

### Grove - Sensor de Sonido

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Twig-Sound-sensor.jpg)

Grove - Sensor de Sonido puede detectar la intensidad del sonido del ambiente.

El componente principal del módulo es un micrófono simple, que está basado en el amplificador LM358 y un micrófono electret.

La salida de este módulo es analógica y debes conectarlo al Puerto J2 del Grove - ADC I2C.
Si quieres saber más información sobre este módulo por favor haz clic [**aquí**](/es/Grove-Sound_Sensor).

### Grove - Acelerómetro Digital de 3 Ejes(±16g)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/3-axis_Accelerometer_ADXL345.jpg)

Este es un acelerómetro digital de alta resolución que te proporciona una resolución máxima de 3.9mg/LSB y un amplio rango de medición de ±16g.

Está basado en un IC avanzado de 3 ejes ADXL345. No te preocupes por implementarlo en tu proyecto de detección de caída libre, porque es lo suficientemente robusto para sobrevivir hasta 10,000g de impacto.

Mientras tanto, es lo suficientemente ágil para detectar toques simples y dobles. Es ideal para detección de movimiento, detección de gestos así como robótica.

Si quieres saber más información sobre este módulo por favor haz clic [**aquí**](/es/Grove-3-Axis_Digital_Accelerometer-16g).

### Grove - Relé

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_relay.jpg)

El Relé Grove es un interruptor digital normalmente abierto que controla un relé capaz de conmutar voltajes y corrientes mucho más altos que tus placas BBG.

Cuando se establece en HIGH, el LED se encenderá y el relé se cerrará permitiendo que fluya la corriente.

La capacidad de voltaje pico es 250V a 10 Amperios.

:::caution
Por favor ten mucho cuidado cuando trabajes with voltajes de red— si tienes dudas contacta a un profesional como un electricista licenciado para ayuda.
:::

**Esquemático del Relé**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Relaysch.jpg)

### Grove - Zumbador

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzer1.jpg)

Este es un Grove simple pero divertido de usar.

El piezo puede conectarse a salidas digitales, y emitirá un tono cuando la salida esté en alto.

Alternativamente puede conectarse a una salida analógica de modulación por ancho de pulso para generar varios tonos y efectos.

**Esquemático del Zumbador Grove**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzersch.jpg)

### Grove - LED RGB Encadenable

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Chanbalelednb1.jpg)

El LED RGB Encadenable está basado en el chip P9813 que es un chip controlador de LED de fuente de luz de color completo, y puede proporcionar corriente constante y salida modulada de 256 grises.

Transmisión por cable (DATA y CLK), reciclaje incorporado, puede mejorar la distancia de transmisión.

<!-- Si quieres saber más información sobre este módulo por favor haz clic [**aquí**](/es/Grove-Chainable_RGB_LED/). -->

### Grove - Pantalla OLED 0.96"

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Oled1281281.jpg)

Es un módulo de pantalla OLED de matriz de puntos 96×96 de 16 colores en escala de grises con interfaz I2C de 4 pines compatible con Grove.

Grove - OLED 96 x 96 está construido con el módulo OLED de matriz de puntos 96 x 96 LY120 y el IC controlador SSD1327.

Comparando con LCD, las pantallas OLED son más competitivas, las cuales tienen una serie de ventajas como alto brillo, auto-emisión, alta relación de contraste, contorno delgado/fino, amplio ángulo de visión, amplio rango de temperatura y bajo consumo de energía.

Si quieres saber más información sobre este módulo por favor haz clic [**aquí**](/es/Grove-OLED_Display_0.96inch).

:::tip
Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Ejemplos
--------

Para comenzar a editar programas que residen en tu placa, puedes usar el IDE Cloud9.
Como un ejercicio simple para familiarizarse con el IDE Cloud9, crear una aplicación simple para hacer parpadear uno de los 4 LEDs programables por el usuario en el BeagleBone® es un buen comienzo.

Si esta es tu primera vez usando el IDE Cloud9, por favor sigue este [**enlace**](/es/BeagleBone_Green).

### Cómo usar Grove - Button en BBG

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button_on_bbg.jpg)

**Paso1:** Configura el conector Grove - UART como un conector Grove - GPIO, solo sigue este [**enlace**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html).

**Paso2:** Haz clic en el "+" en la parte superior derecha para crear un nuevo archivo.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9_newfile.jpg)

**Paso3:** Copia y pega el siguiente código en la nueva pestaña

```
import time
import Adafruit_BBIO.GPIO as GPIO
 
# Nota: Usa P9_22(UART2_RXD) como GPIO.
# Conecta el Botón Grove al puerto Grove UART del BeagleBone® Green.
Button = "P9_22"            # GPIO P9_22
GPIO.setup(Button, GPIO.IN)
 
if __name__== '__main__':
    while True:
        if GPIO.input(Button):
            print "Button is pressed."
            time.sleep(1)
        else:
            print "Button is unstuck."
            time.sleep(1)
```

**Paso4:** Guarda el archivo haciendo clic en el icono del disco y dándole al archivo un nombre con la extensión .py.

**Paso5:** Ejecuta el código.

:::note
El uso de los otros módulos Grove es similar al Botón Grove.
:::

Recursos
--------

- [Código de Ejemplo del kit de inicio Grove para BBG](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>