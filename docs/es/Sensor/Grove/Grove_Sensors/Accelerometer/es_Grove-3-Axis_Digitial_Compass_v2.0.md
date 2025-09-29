---
description: Grove - Brújula Digital de 3 Ejes v2.0
title: Grove - Brújula Digital de 3 Ejes v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Digitial_Compass_v2.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_doc/101020492/main_page.jpg" alt="pir" width={600} height="auto" /></p>

El Grove - Brújula Digital de 3 Ejes es un sensor de brújula digital basado en el Bosch BMM150. Permite la medición del campo magnético en tres ejes perpendiculares y la salida se puede leer a través de las interfaces I2C y SPI, perfectamente adecuado para aplicaciones móviles de 3 ejes.

Esta es la segunda generación del Grove - Brújula Digital de 3 Ejes, comparado con la primera versión, esta versión puede satisfacer perfectamente los requisitos exigentes de todas las aplicaciones de 3 ejes mientras que el precio es casi la mitad de la primera versión, muy rentable.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)

## Características

- Alta resolución
- Alta precisión de rumbo
- Fácil de usar

## Especificaciones

| Elemento                     | Valor                                 |
|------------------------------|---------------------------------------|
| Voltaje de Funcionamiento   | 3.3V / 5V                             |
| Rango de campo magnético típico | ±1300μT(eje x, y),  ±2500μT(eje z)  |
| Resolución de campo magnético | 0.3μT                                 |
| Grados de Salida             | 0º ~ 360º                             |
| Interfaz                     | I2C                                   |
| Temperatura de Funcionamiento | -40℃ a +85 ℃                        |
| Dimensiones                  | 20mm x 20mm x 15mm                    |
|Dirección I2C|0x13|

:::note
    Si deseas usar múltiples dispositivos I2C, consulta [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros pasos

### Jugar con Arduino

#### 　Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove-3-Axis_Digitial_Compass_v2.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Paso 2.** Conecta Grove-3-Axis_Digitial_Compass_v2.0 al puerto **I2C** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

    <!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
     Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino_v4 | Grove-3-Axis_Digitial_Compass_v2.0  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

<div class="admonition warning">
<p class="admonition-title">Precaución</p>
Conecte el cable USB con cuidado, de lo contrario puede dañar la interfaz. Utilice el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no está seguro sobre el cable que tiene, puede hacer clic <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html">aquí</a> para comprar
</div>

#### Software

**Paso 1.** Descargue la [biblioteca](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150) desde Github.

**Paso 2.** Consulte [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

**Paso 3.** Cree un nuevo sketch de Arduino y pegue los códigos a continuación o abra el código directamente por la ruta: **File->Examples->Grove_3_Axis_Compass_V2.0_BMM150-master->compass**

Aquí está el código

```c
/**
 * This example
*/

#include <Arduino.h>
#include <Wire.h>
// libraries
#include "bmm150.h"
#include "bmm150_defs.h"

BMM150 bmm = BMM150();

void setup()
{
  Serial.begin(9600);

  if(bmm.initialize() == BMM150_E_ID_NOT_CONFORM) {
    Serial.println("Chip ID can not read!");
    while(1);
  } else {
    Serial.println("Initialize done!");
  }

}

void loop()
{
  bmm150_mag_data value;
  bmm.read_mag_data();

  value.x = bmm.raw_mag_data.raw_datax;
  value.y = bmm.raw_mag_data.raw_datay;
  value.z = bmm.raw_mag_data.raw_dataz;

  float xyHeading = atan2(value.x, value.y);
  float zxHeading = atan2(value.z, value.x);
  float heading = xyHeading;

  if(heading < 0)
    heading += 2*PI;
  if(heading > 2*PI)
    heading -= 2*PI;
  float headingDegrees = heading * 180/M_PI;
  float xyHeadingDegrees = xyHeading * 180 / M_PI;
  float zxHeadingDegrees = zxHeading * 180 / M_PI;

  Serial.print("Heading: ");
  Serial.println(headingDegrees);

  delay(100);
}
```

**Paso 4.** Sube el código. Si no sabes cómo subir el código, por favor consulta [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

**Paso 5.** Abre el monitor serie para recibir los datos del sensor

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial.jpg" alt="pir" width={600} height="auto" /></p>

**Paso 6.** Dentro de estos 3 segundos, por favor inclina y rota la brújula hacia adelante y hacia atrás en cada eje, como se muestra en la imagen a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/calibrate.jpg" alt="pir" width={600} height="auto" /></p>

El tiempo del período de calibración se puede cambiar a través del parámetro timeout en la función **calibrate(uint16_t timeout)**.

:::note
      ¡La brújula necesita ser calibrada, de lo contrario obtendrás datos inexactos! Por favor asegúrate de haber realizado el Paso 5.
:::

**Paso 7.** Finalmente, verás algo como la siguiente imagen.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/ardu_serial2.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    El valor de rumbo está en el rango de 0º ~ 360º, este valor es para el eje Y, 0º significa que el eje Y apunta al Norte, 90º significa que el eje Y apunta al Oeste, 180º significa que el eje Y apunta al Sur, 270º significa que Y apunta al Este.
:::
¡Disfruta tu brújula!

### Jugar con Raspberry Pi (Con Grove Base Hat para Raspberry Pi)

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Brújula de 3 ejes|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2-p-3034.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta la brújula de 3 ejes al puerto I2C del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Compass_Hat.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- **Paso 1**. Sigue [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo e instalar grove.py en tu raspberry pi.

- **Paso 2**. Ejecuta los siguientes comandos para ejecutar el código.

```
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_3_axis_compass_bmm150
```

A continuación se muestra el código grove_3_axis_compass_bmm150.py.

```python
from __future__ import print_function
import time
import bmm150
import math


def main():
    device = bmm150.BMM150()  # Bus number will default to 1
    while (1):
        x, y, z = device.read_mag_data()

        heading_rads = math.atan2(x, y)

        heading_degrees = math.degrees(heading_rads)

        print("Magnetometer x: {0:.2f}".format(x), end=' ')
        print(" y: {0:.2f}".format(y), end=' ')
        print(" z: {0:.2f}".format(z), end=' ')
        print(" uT")

        print('heading(axis_Y point to): {0:.2f} degree'.format(heading_degrees))
        time.sleep(.250)

if __name__ == '__main__':
    main()
```

:::success
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ grove_3_axis_compass_bmm150
Magnetometer x: -34.12  y: 36.71  z: -21.25  uT
heading(axis_Y point to): 317.10 degree
Magnetometer x: -34.49  y: 38.20  z: -16.32  uT
heading(axis_Y point to): 317.92 degree
Magnetometer x: -34.12  y: 38.20  z: -9.87  uT
heading(axis_Y point to): 318.23 degree
Magnetometer x: -32.64  y: 38.94  z: -5.69  uT
heading(axis_Y point to): 320.03 degree
Magnetometer x: -31.52  y: 38.20  z: -2.28  uT
heading(axis_Y point to): 320.47 degree
Magnetometer x: -29.67  y: 38.20  z: 0.38  uT
heading(axis_Y point to): 322.16 degree
Magnetometer x: -26.33  y: 38.20  z: 4.55  uT
heading(axis_Y point to): 325.42 degree
^CExiting


```

Puedes salir de este programa simplemente presionando ++ctrl+c++.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Librería]**  [Grove-3_Axis_Compass_V2.0 lib](https://github.com/Seeed-Studio/Grove_3_Axis_Compass_V2.0_BMM150)
- **[PDF]** [BST-BMM150-Datasheet](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Datasheet.pdf)

- **[Zip]** [Grove-3-Axis Digital Compass v2_Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/res/Eagle File.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
