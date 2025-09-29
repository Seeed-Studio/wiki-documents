---
description: Grove - Sensor de Luz Solar
title: Grove - Sensor de Luz Solar
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Sunlight_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_sensor_view.jpg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Sensor de Luz Solar es un sensor de luz digital multicanal, que tiene la capacidad de detectar luz UV, luz visible y luz infrarroja.

Este dispositivo está basado en el SI1151, un nuevo sensor de SiLabs. El Si1151 es un sensor de bajo consumo, basado en reflectancia, de proximidad infrarroja, índice UV y luz ambiente con interfaz digital I2C y salida de interrupción de evento programable. Este dispositivo ofrece un excelente rendimiento bajo un amplio rango dinámico y una variedad de fuentes de luz incluyendo luz solar directa.

Grove - Sensor de Luz Solar incluye un conector Grove integrado, que te ayuda a conectarlo fácilmente a tu Arduino. Puedes usar este dispositivo para hacer algunos proyectos que necesiten detectar la luz, como un detector UV simple.

El chip principal del dispositivo ha sido actualizado al SI1151, el tutorial para el SI1145 aún permanece.

## Versión

| Versión del Producto             | Cambios                                                            | Fecha de Lanzamiento |
|----------------------------------|--------------------------------------------------------------------|----------------------|
| Grove - Sensor de Luz Solar v1.0     | Inicial                                                            | Feb 12 2020          |
| Grove - Sensor de Luz Solar v2.0     | reemplazar Si1145 con Si1151-AB00-GMR                             | Jul 27 2021          |

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

Los sensores industriales de la serie SenseCAP S210x proporcionan una experiencia lista para usar para la detección ambiental. Por favor consulta el Sensor de Intensidad de Luz Inalámbrico S2102 con mayor rendimiento y robustez para la detección de intensidad de luz. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><strong>Sensor Industrial SenseCAP</strong></td></tr>
    <tr>
      <td>
      <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 Light</strong></a></td>
    </tr>
  </tbody></table>

## Características

---

- Sensor de luz digital
- Amplio rango de detección de espectro para mejorar la precisión.
- Configuración programable que lo hace versátil para varias aplicaciones.
- Detecta la luz solar directamente
- Compatible con Grove
- Interfaz I2C (7-bit)

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

---
|||
|---|---|
|Voltaje de Operación |3.0-5.5V|
|Corriente de Trabajo |3.5mA|
|Longitud de Onda |280-950nm|
|Dirección I2C por Defecto| 0x60|
|Temperatura de Operación| -45-85℃|

## Descripción General del Hardware

---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Hardware_overview.jpg" /></div>

- Conector Grove - una interfaz de 4 pines, contiene VCC, GND, SDA y SCL
- LED - pin del controlador LED
- INT - una salida de interrupción programable
- SI1151 - IC

## Primeros Pasos

---
Después de esta sección, puedes hacer funcionar el Sensor de Luz Solar Grove con solo unos pocos pasos.

### SI1145 - Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 |Sensor de Luz Solar Grove|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
Si esta es tu primera vez usando Arduino, por favor pon la mano [aquí](https://wiki.seeedstudio.com/es/Getting_Started_with_Seeeduino) para comenzar tu viaje con Arduino.
:::

**Conectando hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
Si necesitas conectar más módulos en la placa de control principal, puedes necesitar un [Grove base shield](https://wiki.seeedstudio.com/es/Base_Shield_V2/) que hará tu trabajo más fácil.
:::

**Descarga**

Haz clic [aquí](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master) para descargar la biblioteca y luego [añádela](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) al Arduino.

Inicia Arduino IDE y haz clic en **File>Examples>Grove_Sunlight_Sensor>SI1145DEMO** para abrir el código de prueba.

```cpp
/*
    This is a demo to test Grove - Sunlight Sensor library

*/

#include <Wire.h>

#include "Arduino.h"
#include "SI114X.h"

SI114X SI1145 = SI114X();

void setup() {

    Serial.begin(115200);
    Serial.println("Beginning Si1145!");

    while (!SI1145.Begin()) {
        Serial.println("Si1145 is not ready!");
        delay(1000);
    }
    Serial.println("Si1145 is ready!");
}

void loop() {
    Serial.print("//--------------------------------------//\r\n");
    Serial.print("Vis: "); Serial.println(SI1145.ReadVisible());
    Serial.print("IR: "); Serial.println(SI1145.ReadIR());
    //the real UV value must be div 100 from the reg value , datasheet for more information.
    Serial.print("UV: ");  Serial.println((float)SI1145.ReadUV() / 100);
    delay(1000);
}

```

Haz clic en Tools>Board para elegir Arduino UNO y selecciona el puerto serie respectivo.

Ahora haz clic en Upload(CTRL+U) para grabar el código de prueba. Por favor consulta [**aquí**](https://wiki.seeedstudio.com/es/Arduino_Common_Error) para cualquier mensaje de error.

**Revisar Resultados**

Después de que se complete la carga, abre el Monitor Serie de tu Arduino IDE, puedes obtener los datos:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - luz visible, unidad en lm
    IR - luz infrarroja, unidad en lm
    UV - índice UV
:::

Ahora, pon el Grove - Sunlight Sensor bajo el sol para ver si es un buen día.

### SI1151 - Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 |Grove - Sunlight Sensor|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
Si esta es tu primera vez usando Arduino, por favor pon la mano [aquí](https://wiki.seeedstudio.com/es/Getting_Started_with_Seeeduino) para comenzar tu viaje con Arduino.
:::

**Conectando hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
Si necesitas conectar más módulos en la placa de control principal, puedes necesitar un [Grove base shield](https://wiki.seeedstudio.com/es/Base_Shield_V2/) que hará tu trabajo más fácil.
:::

**Descarga**

Haz clic [aquí](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master) para descargar la biblioteca y luego [añádela](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) al Arduino.

Inicia Arduino IDE y haz clic en **File>Examples>Grove_Sunlight_Sensor>SI1151** para abrir el código de prueba.

```cpp
#include "Si115X.h"

Si115X si1151;

/**
 * Setup for configuration
 */
void setup()
{
    Wire.begin();
    Serial.begin(115200);
    if (!si1151.Begin()) {
        Serial.println("Si1151 is not ready!");
        while (1) {
            delay(1000);
            Serial.print(".");
        };
    }
    else {
        Serial.println("Si1151 is ready!");
    }
}

/**
 * Loops and reads data from registers
 */
void loop()
{
    Serial.print("IR: ");
    Serial.println(si1151.ReadIR());
    Serial.print("Visible: ");
    Serial.println(si1151.ReadVisible());

    delay(500);
}
```

Haz clic en Tools>Board para elegir Arduino UNO y selecciona el puerto serie respectivo.

Ahora haz clic en Upload(CTRL+U) para grabar el código de prueba. Por favor consulta [**aquí**](https://wiki.seeedstudio.com/es/Arduino_Common_Error) para cualquier mensaje de error.

**Revisar Resultados**

Después de que se complete la carga, abre el Monitor Serie de tu Arduino IDE, puedes obtener los datos:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - luz visible, unidad en lm
    IR - luz infrarroja, unidad en lm
    UV - índice UV
:::

Ahora, pon el Grove - Sunlight Sensor bajo el sol para ver si es un buen día.


### SI1145 - Jugar con Raspberry Pi

**Materiales requeridos**

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|Grove - Sunlight Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**Conectando el hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**Paso 1.** Conecta Grove - Sunlight Sensor al puerto **I2C** del Grove - Base Hat para Raspberry Pi, conectado a la Raspberry Pi 4 Model B. Y luego conecta la Raspberry Pi 4 Model B con una PC.

**Paso 2.** Después de acceder al sistema de Raspberry Pi, clona con git **[Seeed_Python_SI114X](https://github.com/Seeed-Studio/Seeed_Python_SI114X)** e instala **grove.py** insertando el siguiente comando:

```shell
pip3 install Seeed-grove.py
```

O en sistemas GNU/Linux compatibles como la Raspberry Pi, puedes instalar el controlador localmente desde PyPI:

```Shell
pip3 install seeed-python-si114x
```

**Paso 3.** Para instalar en todo el sistema (esto puede ser requerido en algunos casos):

```Shell
sudo pip3 install seeed-python-si114x
```

Y puedes insertar el siguiente comando para actualizar el controlador localmente desde PyPI:

```Shell
pip3 install --upgrade seeed-python-si114x
```

**Software**

```python
import seeed_si114x
import time
import signal
def handler(signalnum, handler):
    print("Please use Ctrl C to quit")
def main():
    SI1145 = seeed_si114x.grove_si114x()
    print("Please use Ctrl C to quit")
    signal.signal(signal.SIGTSTP, handler) # Ctrl-z
    signal.signal(signal.SIGQUIT, handler) # Ctrl-\
    while True:
        print('Visible %03d UV %.2f IR %03d' % (SI1145.ReadVisible , SI1145.ReadUV/100 , SI1145.ReadIR),end=" ")
        print('\r', end='')
        time.sleep(0.5)
if __name__  == '__main__':
    main()
```

Antes de ejecutar el código de demostración, debes verificar el número i2c correspondiente de la placa:

```Shell
ls /dev/i2c*
```

Si el dispositivo i2c funciona correctamente, habrá:

```Shell
/dev/i2c-1
```

**Si NO**, usa el comando **sudo raspi-config** y reinicia para habilitar el dispositivo i2c:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**Paso 4.** Ejecuta la demostración con el siguiente comando:

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
El resultado se mostrará de la siguiente manera si todo va bien:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/outcome.png" /></div>

:::note
**Visible** se refiere a **luz visible del ambiente** y **UV** se refiere a **Índice Ultravioleta (UV)** mientras que **IR** significa **luz infrarroja del ambiente**.
:::

### SI1151 - Jugar con Raspberry Pi

**Materiales requeridos**

| Raspberry Pi 4 Model B |Grove - Base Hat para Raspberry Pi|Grove - Sensor de Luz Solar|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**Conectando el hardware**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**Paso 1.** Conecta Grove - Sunlight Sensor al puerto **I2C** del Grove - Base Hat para Raspberry Pi, conectado a la Raspberry Pi 4 Model B. Y luego conecta la Raspberry Pi 4 Model B con una PC.

**Paso 2.** Después de acceder al sistema de Raspberry Pi, haz git clone de la **[librería Grove_Sunlight_Sensor](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/Si1151)**

```Shell
git clone git clone git@github.com:Seeed-Studio/Grove_Sunlight_Sensor.git -b Si1151 Si1151_library
```

Antes de ejecutar el código de demostración, debes verificar el número i2c correspondiente de la placa:

```Shell
ls /dev/i2c*
```

Si el dispositivo i2c funciona correctamente, habrá:

```Shell
/dev/i2c-1
```

**Si NO**, usa el comando **sudo raspi-config** y reinicia para habilitar el dispositivo i2c:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**Paso 3.** Ejecuta la demostración con el siguiente comando:

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 seeed_si115x.py
```

:::tip
El resultado se mostrará de la siguiente manera si todo va bien:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/Sunlighttu.png" /></div>

:::note
**Visible** se refiere a **luz visible del ambiente** y **UV** se refiere al **Índice Ultravioleta (UV)** mientras que **IR** significa **luz infrarroja del ambiente**.
:::

## Referencias

**Espectro**

El contenido de este capítulo se obtuvo de [**Wikipedia - Espectro**](https://en.wikipedia.org/wiki/Spectrum), haz clic para ver la página original.

Un espectro (plural espectros) es una condición que no se limita a un conjunto específico de valores sino que puede variar infinitamente dentro de un continuo. La palabra se usó por primera vez científicamente en el campo de la óptica para describir el arcoíris de colores en la luz visible cuando se separa usando un prisma. A medida que avanzó la comprensión científica de la luz, llegó a aplicarse a todo el espectro electromagnético.

Desde entonces, el espectro se ha aplicado por analogía a temas fuera de la óptica. Así, uno podría hablar sobre el espectro de opinión política, o el espectro de actividad de un medicamento, o el espectro del autismo. En estos usos, los valores dentro de un espectro pueden no estar asociados con números o definiciones precisamente cuantificables. Tales usos implican una amplia gama de condiciones o comportamientos agrupados y estudiados bajo un solo título para facilitar la discusión.

En la mayoría de los usos modernos del espectro hay un tema unificador entre los extremos en cada extremo. Algunos usos más antiguos de la palabra no tenían un tema unificador, pero llevaron a los modernos a través de una secuencia de eventos establecida a continuación. Los usos modernos en matemáticas sí evolucionaron de un tema unificador, pero esto puede ser difícil de reconocer.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_spectrum.jpg" /></div>

**Lumen**

El contenido de este capítulo se obtuvo de [**Wikipedia - Lumen (unidad)**](https://en.wikipedia.org/wiki/Lumen_(unit)), haz clic para ver la página original.

El lumen (símbolo: lm) es la unidad derivada del SI de flujo luminoso, una medida de la "cantidad" total de luz visible emitida por una fuente. El flujo luminoso difiere de la potencia (flujo radiante) en que las mediciones de flujo luminoso reflejan la sensibilidad variable del ojo humano a diferentes longitudes de onda de luz, mientras que las mediciones de flujo radiante indican la potencia total de todas las ondas electromagnéticas emitidas, independientemente de la capacidad del ojo para percibirla. Los lúmenes están relacionados con los lux en que un lux es un lumen por metro cuadrado.

**Índice ultravioleta**

El contenido de este capítulo se obtuvo de [**Wikipedia - Índice ultravioleta**](https://en.wikipedia.org/wiki/Ultraviolet_index), haz clic para ver la página original.

El índice ultravioleta o Índice UV es una medición estándar internacional de la intensidad de la radiación ultravioleta (UV) que produce quemaduras solares en un lugar y momento particulares. La escala fue desarrollada por científicos canadienses en 1992, luego adoptada y estandarizada por la Organización Mundial de la Salud y la Organización Meteorológica Mundial de la ONU en 1994. Se usa principalmente en pronósticos diarios dirigidos al público general, y está cada vez más disponible como pronóstico por horas también.

El Índice UV está diseñado como una escala lineal abierta, directamente proporcional a la intensidad de radiación UV que causa quemaduras solares en la piel humana. Por ejemplo, si un individuo de piel clara (sin protector solar o bronceado) comienza a quemarse en 30 minutos con Índice UV 6, entonces ese individuo debería esperar quemarse en aproximadamente 15 minutos con Índice UV 12 – el doble de UV, el doble de rápido.

El propósito del Índice UV es ayudar a las personas a protegerse efectivamente de la radiación UV, que tiene beneficios para la salud con moderación pero en exceso causa quemaduras solares, envejecimiento de la piel, daño al ADN, cáncer de piel, inmunosupresión,[1] y daño ocular como cataratas (ver la sección Efectos relacionados con la salud humana de la radiación ultravioleta). Las organizaciones de salud pública recomiendan que las personas se protejan (por ejemplo, aplicando protector solar en la piel y usando sombrero y gafas de sol) si pasan tiempo considerable al aire libre cuando el Índice UV es 3 o mayor; ver la tabla a continuación para recomendaciones más detalladas.

Cuando el Índice UV predicho del día está dentro de varios rangos numéricos, las recomendaciones para protección son las siguientes:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/uv%20index.png" /></div>

**Notas de precaución**

Al interpretar el Índice UV y las recomendaciones, ten en cuenta que:

- La intensidad de radiación UV que llega a la superficie de la tierra depende del ángulo del sol en el cielo. Cada día, el sol alcanza su ángulo más alto (mayor intensidad, sombras más cortas) al mediodía solar, que solo corresponde aproximadamente a las 12:00 en los relojes. Esto se debe a las diferencias entre el tiempo solar y el tiempo local en una zona horaria dada. En general, el riesgo UV es alto cuando el sol está lo suficientemente directamente arriba que las sombras de las personas son más cortas que su altura.
- Del mismo modo, la intensidad UV puede ser mayor o menor para superficies en diferentes ángulos respecto a la horizontal. Por ejemplo, si las personas están caminando o paradas al aire libre, la exposición UV a los ojos y superficies verticales de la piel, como la cara, puede ser realmente más severa cuando el sol está más bajo, como al final de un día de verano, o tardes de invierno en una pista de esquí. Esto es en parte consecuencia del hecho de que el equipo de medición en el que se basa el índice es una superficie horizontal plana.
- La intensidad UV puede casi duplicarse con el reflejo de la nieve u otras superficies brillantes como agua, arena o concreto.
- Las recomendaciones dadas son para adultos promedio con piel ligeramente bronceada. Aquellos con piel más oscura tienen más probabilidades de resistir mayor exposición solar, mientras que se necesitan precauciones adicionales para niños, personas mayores, adultos particularmente de piel clara, y aquellos que tienen mayor sensibilidad solar por razones médicas o por exposición UV en días anteriores. (La recuperación de la piel de la radiación UV generalmente toma dos días o más para completar su curso.)
- Debido a la forma en que se calcula el Índice UV, técnicamente expresa el riesgo de desarrollar quemaduras solares, que son causadas principalmente por radiación UVB. Sin embargo, la radiación UVA también causa daño (fotoenvejecimiento, melanoma). Bajo algunas condiciones, incluyendo la mayoría de las camas de bronceado, el nivel UVA puede ser desproporcionadamente mayor que lo descrito por el Índice UV. El uso de protector solar de amplio espectro (UVA/UVB) puede ayudar a abordar esta preocupación.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Esquemático en PDF](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0.pdf)
- [Esquemático en Archivo Eagle](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip)
- [Hoja de datos Si1145](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Si1145-46-47.pdf)
- [Repositorio Github para Grove - Sensor de Luz Solar](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor)
- [Espectro](https://en.wikipedia.org/wiki/Spectrum)
- [Lumen (unidad)](https://en.wikipedia.org/wiki/Lumen_(unit))
- [Índice ultravioleta](https://en.wikipedia.org/wiki/Ultraviolet_index)
- [Grove - Sensor de Luz Solar v2.0](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/Grove-SunlightSensorv2.0.zip)
- [Hoja de Datos SI1151-AB00-GMR](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/SI1151-AB00-GMR.pdf)

## Proyecto

**¡El Cubo Ambiental! ¡Conoce la Tierra Bajo Tus Pies!** Un cubo con todos los sensores necesarios, adecuado para una amplia gama de aplicaciones como la agricultura. ¡Conoce la tierra bajo tus pies!

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed" width="350"></iframe>

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

