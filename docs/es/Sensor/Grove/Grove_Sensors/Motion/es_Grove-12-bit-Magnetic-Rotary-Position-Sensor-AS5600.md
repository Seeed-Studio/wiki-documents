---
description: Grove - Sensor de Posición Rotativa Magnético de 12 bits / Codificador (AS5600)
title: Grove - Sensor de Posición Rotativa Magnético de 12 bits / Codificador (AS5600)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-preview.jpg)

El Grove - AS5600 es un sensor de posición rotativa magnético sin contacto programable de 12 bits de alta resolución. El Grove - AS5600 puede funcionar como un potenciómetro magnético o un codificador magnético con excelente confiabilidad y durabilidad.

Comparado con el potenciómetro/codificador tradicional, el Grove - AS5600 tiene ventajas significativas: alta precisión, sin contacto, sin limitación de ángulo de rotación. Todas esas ventajas lo hacen adecuado para aplicaciones de medición de ángulo sin contacto, como el brazo robótico, cabezal de trípode, control de lazo cerrado de motor, posicionamiento de eje de máquina herramienta.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Característica

- Sin contacto, sin limitación de ángulo de rotación
- Alta resolución de 12 bits, 4096 posiciones por vuelta
- Grove I2C, Salida PWM/Analógica
- Gran flexibilidad en excursión angular: Ángulo máximo programable desde 18° hasta 360°

## Especificación

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura ambiente de operación| -40 – 125℃|
|Corriente de entrada|-100-100mA|
|Flexibilidad|Ángulo máximo programable desde 18°-360°|
|Interfaz|I2C(Dirección I2C por defecto: 0x36) y No Cambiable|
|Salida|Salida analógica/PWM|
|Resolución de salida|DAC de 12 bits|

## Principio de Funcionamiento

Grove - AS5600 se basa en el Efecto Hall, el sensor Hall integrado puede detectar cambios en la dirección del campo magnético, por lo tanto tampoco hay límite en el ángulo de rotación. La información de dirección del campo magnético es amplificada por el amplificador, con la ayuda del A/D de 12 bits integrado, el módulo AS5600 puede generar 4096 posiciones por vuelta. La salida es seleccionable, puedes usar la interfaz I2C para generar los datos RAW o generar la onda PWM/onda analógica a través del pin OUT. Mientras tanto, el ángulo máximo también es programable, puedes establecer el ángulo máximo desde 18° hasta 360°, lo que significa que la precisión angular medida es de hasta 18/4096.

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-show-NS.jpg)

:::note
El AS5600 tiene ciertos requisitos para el campo magnético a medir. Por favor usa un imán de tamaño similar al chip. El módulo debe medirse lo más cerca posible del campo magnético y el centro del sensor AS5600 debe estar alineado con el centro del campo magnético. La distancia vertical es preferiblemente de 0.5 mm a 3 mm.
:::

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-2.jpg)

## Descripción General del Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" /></a></p>
</figure>
</div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Sensor/Codificador de Posición Rotativa Magnética de 12 bits (AS5600)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-thumbnail.jpg)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Sensor/Codificador de Posición Rotativa Magnética de 12 bits (AS5600) al puerto **I2C** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/HardwarePic.jpg)

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600) desde Github.

:::note
Consulta Cómo instalar librería para [instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para Arduino.
:::

- **Paso 2.** Reinicia el IDE de Arduino. Abre el ejemplo **readAngle** a través de la ruta: **File** → **Examples** → **Seeed_AS5600-master** → **readAngle**. A través de esta demostración, podemos leer los ángulos de un imán debajo del sensor.

El código del ejemplo readAngle es el siguiente:

```cpp
#include <Wire.h>
#include <AS5600.h>
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

AMS_5600 ams5600;

int ang, lang = 0;

void setup()
{
  SERIAL.begin(115200);
  Wire.begin();
  SERIAL.println(">>>>>>>>>>>>>>>>>>>>>>>>>>> ");
  if(ams5600.detectMagnet() == 0 ){
    while(1){
        if(ams5600.detectMagnet() == 1 ){
            SERIAL.print("Current Magnitude: ");
            SERIAL.println(ams5600.getMagnitude());
            break;
        }
        else{
            SERIAL.println("Can not detect magnet");
        }
        delay(1000);
    }
  }
}
/*******************************************************
/* Function: convertRawAngleToDegrees
/* In: angle data from AMS_5600::getRawAngle
/* Out: human readable degrees as float
/* Description: takes the raw angle and calculates
/* float value in degrees.
/*******************************************************/
float convertRawAngleToDegrees(word newAngle)
{
  /* Raw data reports 0 - 4095 segments, which is 0.087 of a degree */
  float retVal = newAngle * 0.087;
  ang = retVal;
  return ang;
}
void loop()
{
    SERIAL.println(String(convertRawAngleToDegrees(ams5600.getRawAngle()),DEC));
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **115200**.

- **Paso 5.** El resultado debería ser así cuando detecte un imán debajo del sensor:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/AS5600%20with%20Calibrators.gif"/></div>

:::note
Aquí se usa un calibrador. El archivo 2D del Calibrador está listado en Recursos, ¡así que siéntete libre de descargarlo y cortarlo con láser tú mismo!
:::

## FAQ

**P1#** ¿Cómo lograr la máxima precisión?

**R1:** Asegúrate de que el sensor Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) esté a una distancia/posición fija del imán. Rota el imán para ir desde el ángulo 0 hasta el ángulo 360 la primera vez para asegurar que el posicionamiento sea correcto.

La librería [AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600) también proporciona una función de prueba completa para operar el sensor.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo de esquemático del Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip)
- **[PDF]** [Hoja de datos del AS5600](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Magnetic%20Rotary%20Position%20Sensor%20AS5600%20Datasheet.pdf)
- **[DWG]** [Calibrador del Grove - 12 bit Magnetic Rotary Position Sensor(AS5600)](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012%20bit%20Magnetic%20Rotary%20Position%20Sensor(AS5600)%20Calibrator.dwg)

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
