---
description: Grove - Sensor de Presión Barométrica de Alta Precisión DPS310
title: Grove - Sensor de Presión Barométrica de Alta Precisión DPS310
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310
last_update:
  date: 1/5/2023
  author: shuxu hu
---

Grove - Sensor de Presión Barométrica de Alta Precisión (DPS310)

<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-wiki.jpg" alt="pir" width={600} height="auto" /></p>

La detección barométrica es muy útil en el sensado ambiental o la medición de altitud. El sensor barómetro Grove está basado en el infineon DPS310, un sensor de presión de aire barométrico digital miniaturizado con alta precisión. Puede medir un rango de presión de 300 a 1200 hPa, con precisión de ±0.002hPa, lo que significa que puedes detectar cambios de altitud dentro de ±2cm como máximo.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Y1.png"  height="48" width="300" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

## BMP280 vs. BME280 vs. DPS310

Ya hemos lanzado el [Grove - Sensor Barómetro (BMP280)](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BMP280/) y [Grove - Sensor Barómetro(BME280)](https://wiki.seeedstudio.com/es/Grove-Barometer_Sensor-BME280/), permítenos mostrarte qué tan poderoso es el Grove-DPS310 a través de la comparación de la tabla a continuación.

| ELEMENTO | Grove-BMP280 | Grove-BME280 | Grove-DPS310 |
|------|--------------|--------------|--------------|
| Rango de Presión    | 300 ~ 1100 hPa | 300 ~ 1100 hPa | 300 ~ 1200 hPa | 
| Rango de Temperatura | -40 ~ 85 ℃  | -40 ~ 85 ℃   | -40 ~ 85 °C   |
| Precisión de Presión |  -  |  -  | ± 0.002 hPa (o ±0.02 m) |
| Precisión de Presión (Absoluta) | ± 1 hPa (o ±8 m) |± 1 hPa (o ±8 m) |± 1 hPa (o ±8 m)|
| Precisión de Presión (Relativa)| ± 0.12 hPa| ± 0.12 hPa| ± 0.06 hPa (o ±0.5 m)|
| Resolución de Presión| 0.18 Pa | 0.18 Pa | 0.06 Pa |
| Humedad|  -  | 0 ~ 100% |  -  |
| Comunicación | I<sup>2</sup>C/SPI | I<sup>2</sup>C/SPI | I<sup>2</sup>C/SPI |

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Presión de aire de operación|300 a 1200hPa|
|Precisión|±0.002hPa|
|Interfaz|I<sup>2</sup>C,SPI|
|Dirección I<sup>2</sup>C|La dirección predeterminada es 0x77, Cuando está en cortocircuito, la dirección es 0x76|


:::note

    Al comunicarse en modo SPI, no seleccione la dirección I<sup>2</sup>C como 0x76, de lo contrario SPI no podrá leer datos normalmente (ya que I<sup>2</sup>C y SPI comparten pines, la dirección I<sup>2</sup>C como 0x76 es equivalente a conectar a tierra el pin MOSI).
:::

## Características

- Alta Precisión de Presión: ± 0.002 hPa (o ±0.02 m)
- Alta Exactitud de Presión: ± 0.06 hPa (o ±0.5 m)-Relativa; ± 1 hPa (o ±8 m)-Absoluta
- Amplio Rango: Presión: 300 –1200 hPa; Temperatura: -40 – 85 °C.
- Fácil de Usar: Grove IIC (con interrupción) / SPI
- Bajo consumo de energía

## Aplicaciones Típicas

- Navegación Interior (detección de pisos, por ejemplo, en centros comerciales y estacionamientos)
- Salud y Deportes (ganancia de elevación precisa y velocidad vertical)
- Navegación Exterior (tiempo de inicio y mejora de precisión del GPS, navegación a estima, por ejemplo, en túneles)
- Estación Meteorológica ('Micro-clima' y pronósticos locales)
- Drones (estabilidad de vuelo y control de altura)

:::tip

    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Descripción General del Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Compatibles

| Arduino | Raspberry Pi | BeagleBone | Wio | LinkIt ONE |
|---------|--------------|------------|-----|------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={600} height="auto" /></p> |<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={600} height="auto" /></p>  |

:::caution

    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note

    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 |Base Shield| Sensor de Presión Barométrica de Alta Precisión |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)|

:::note

    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Sensor de Presión Barométrica de Alta Precisión (DPS310) al puerto **I<sup>2</sup>C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

#### Software

:::note

    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Copia el código en el IDE de Arduino y súbelo.

```cpp
#include <Dps310.h>

Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  Serial.begin(9600);
  while (!Serial);
  Dps310PressureSensor.begin(Wire);
  Serial.println("Init complete!");
}

void loop()
{
  float Detection_array[10];
  uint8_t oversampling = 7;
  int16_t ret;
  int i;
  int size = 10;
  int state1;
  int state2;
/*In the following two cycles, the pressure state at the pre and post time was detected respectively.
  The sampling quantity was 10. The values with large deviation were removed, and the average value was calculated.*/
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state1 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
     ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
       if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state1 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  } 
 state1 = state1 / size;
 delay(100);


      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[0], oversampling);
      state2 = Detection_array[0];
 for (i = 1; i < 9; i++)
  {
      ret = Dps310PressureSensor.measurePressureOnce(Detection_array[i], oversampling);
      if (Detection_array[i] - Detection_array[i - 1] < 5)
      {
        state2 += Detection_array[i];
      }
      else
      {
        size -= 1;
      }
  }
  state2 = state2 / size;
  
 if (ret != 0)
   {
    Serial.print("FAIL! ret = ");
    Serial.println(ret);
   }
/*Calculate the difference in air pressure to determine if you fall*/
    else if (state2 - state1 > 4)
     {
      Serial.println("You fell down. Do you need help?");
      delay(5000);
     }
    else
      Serial.println("It's ok!");
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el monitor serie. Si todo va bien y si simulas una caída, o lo dejas caer al suelo, te dirá si necesitas ayuda.

## Recursos

- **[Librería]** [DPS310-Pressure-Sensor](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310.git)
- **[Hoja de datos]** [DPS310-Datasheet](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/DPS310-datasheet.pdf)
- **[Zip]** [Grove-High-Precision-Barometer-Sensor-(DPS310)](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/res/Grove%20-%20High%20Precision%20Barometer%20Sensor%20(DPS310)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />

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
