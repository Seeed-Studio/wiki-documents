---
description: Grove - Sensor de Color I2C
title: Grove - Sensor de Color I2C
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-I2C_Color_Sensor
last_update:
  date: 12/29/2025
  author: Brandy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" /></div>

Este módulo está basado en el sensor de color TCS3414CS con salida digital I2C. Basado en la matriz de 8\*2 de fotodiodos filtrados y convertidores analógico-digitales de 16 bits, puedes medir la cromaticidad del color de la luz ambiental o el color de los objetos. De los 16 fotodiodos, 4 tienen filtros rojos, 4 tienen filtros verdes, 4 tienen filtros azules y 4 no tienen filtro (transparente). Con el pin de entrada de sincronización, una fuente de luz pulsada externa puede proporcionar un control de conversión síncrono preciso.

:::note
Ten en cuenta que la última versión V2.0 ha reemplazado el IC con TCS3472 y la biblioteca antigua también ha sido actualizada. Si estás usando la versión V2.0, por favor usa la [nueva biblioteca](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472).
:::





Características
--------

- Interfaz compatible con Grove
- Salida digital de 16 bits con I2C
- Entrada SYNC sincroniza el ciclo de integración con fuentes de luz moduladas
- Rango de temperatura de funcionamiento -40°C a 85°C
- Función de interrupción programable con configuraciones de umbral superior e inferior definidas por el usuario
- Cumple con RoHS

:::tip
Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
-------------

| Parámetro | Valor/Rango            |
|-----------|------------------------|
| Tamaño PCB  | 2.0 cm \* 4.0 cm       |
| Interfaz | Conector de pines de 2.0mm |
| VCC       | 3.3 - 6.0 V            |
| Velocidad I2C | 400 kHz                |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Primeros Pasos
---------------

Los siguientes documentos ayudan al usuario a comenzar con Grove.

- [Prefacio - Primeros Pasos](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Introducción a Grove](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

### Conexiones de Hardware

Los productos Grove tienen un ecosistema y todos tienen el mismo conector que se puede conectar al Grove Base Shield. Conecta este módulo al puerto I2C del Base Shield. Sin embargo, también puedes conectar Grove - Sensor de Color I2C a Arduino sin Base Shield usando cables jumper.

| Arduino UNO | Grove - Sensor de Color I2C |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

Instalación de Software
---------------------

Descarga Arduino e instala el controlador de Arduino

Primeros Pasos con Seeeduino/Arduino

Demostraciones
-----

Este módulo se puede usar para detectar el color de la fuente de luz o el color de los objetos. Cuando se usa para detectar el color de la fuente de luz, el interruptor LED debe estar apagado, y la fuente de luz debe iluminar el sensor directamente. Cuando se usa para detectar el color de las cosas, el LED debe estar encendido y debes poner el objeto en la parte superior de la carcasa muy cerca. La teoría de detectar el color de los objetos es la Teoría de Detección Reflectiva. Como en la imagen de abajo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg" /></div>

### Biblioteca del Sensor de Color

Hemos creado una biblioteca para ayudarte a comenzar a jugar rápidamente con el Seeeduino/Arduino, en esta sección te mostraremos cómo configurar la biblioteca.

#### Configuración

1. Descarga el [código de la biblioteca como archivo zip](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor) desde la página de github Grove_I2C_Color_Sensor. Si estás usando la última versión V2.0 (IC es TCS3472), por favor usa esta [nueva biblioteca](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
2. Descomprime el archivo descargado en tu …/arduino/libraries.
3. Renombra la carpeta descomprimida "Color_Sensor"
4. Inicia el IDE de Arduino (o reinicia si está abierto).

#### Descripción de la función

Esta es la función más importante/útil en la biblioteca, te invitamos a mirar los archivos .h y .cpp tú mismo para ver todas las funciones disponibles.

##### Leer datos RGB a través de la función de biblioteca

**readRGB(int \*red, int \*green, int \*blue)**

- **red:** La dirección de variable para guardar R.
- **green:** La dirección de variable para guardar G.
- **blue:** La dirección de variable para guardar B.

```
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
    }
}
```

### Ejemplos/Aplicaciones del Sensor de Color

Este ejemplo muestra cómo usar las características de Grove - Sensor de Color I2C y mostrar el color detectado con un [LED RGB Encadenable Grove](/es/Grove-Chainable_RGB_LED/).

:::note
Si no has descargado la <a href="https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED">biblioteca Grove-Chainable RGB LED</a> a tu IDE de Arduino antes, por favor descarga y configura la biblioteca primero.
:::

- Abre File->Examples->Color_Sensor->example->ColorSensorWithRGB-LED sketch para un ejemplo completo, o copia y pega el código de abajo en un nuevo sketch de Arduino.

**Descripción**: Este ejemplo puede medir la cromaticidad del color de la luz ambiental o el color de los objetos, y a través del LED RGB Encadenable Grove, mostrar el color detectado.

También puedes usar otros módulos de visualización para mostrar el color detectado por Grove - Sensor de Color I2C.

```
#include <Wire.h>
#include <GroveColorSensor.h>
#include <ChainableLED.h>

#define CLK_PIN   7
#define DATA_PIN  8
#define NUM_LEDS  1            //The number of Chainable RGB LED

ChainableLED leds(CLK_PIN, DATA_PIN, NUM_LEDS);

void setup()
{
    Serial.begin(9600);
    Wire.begin();
}

void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
        for(int i = 0; i<NUM_LEDS; i++)
        {
            leds.setColorRGB(i, red, green, blue);
        }
    }
}
```

- Sube el código a la placa de desarrollo.
- Entonces Grove_-_Chainable_RGB_LED mostraría el color que es detectado.

### Jugar con Raspberry Pi 

#### Hardware

- **Paso 1**. Cosas usadas en este proyecto:

| Raspberry pi | Grove Base Hat para RasPi| Grove-I2C_Color_Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-I2C-Color-Sensor-p-854.html)|

- **Paso 2**. Conecta el Grove Base Hat al Raspberry.
- **Paso 3**. Conecta el Grove-I2C_Color al puerto **I2C** del Base Hat.
- **Paso 4**. Conecta el Raspberry Pi a la PC a través del cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/Color.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Sigue [Setting Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.
- **Paso 2**. Entra al entorno virtual relevante.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Paso 3**. Ejecuta el siguiente comando para ejecutar el código.

- Lo siguiente es para verificar el código grove_i2c_color_sensor_v2.py.

```
less grove_i2c_color_sensor_v2.py
```

```python
import time
from grove.i2c import Bus


_CMD      = 0x80
_AUTO     = 0x20

_ENABLE   = 0x00
_ATIME    = 0x01
_WTIME    = 0x03
_AILT     = 0x04
_AIHT     = 0x06
_PERS     = 0x0C
_CONFIG   = 0x0D
_CONTROL  = 0x0F
_ID       = 0x12
_STATUS   = 0x13
_CDATA    = 0x14
_RDATA    = 0x16
_GDATA    = 0x18
_BDATA    = 0x1A

_AIEN       = 0x10
_WEN        = 0x08
_AEN        = 0x02
_PON        = 0x01

_GAINS  = (1, 4, 16, 60)


class GroveI2cColorSensorV2:
    """Driver for Grove I2C Color Sensor (TCS34725)"""

    def __init__(self, bus=1, address=0x29):
        self.address = address
        self.bus = Bus(bus)

        self.awake = False

        if self.id not in (0x44, 0x4D):
            raise ValueError('Not find a Grove I2C Color Sensor V2')

        self.set_integration_time(24)
        self.set_gain(4)

    def wakeup(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable | _PON | _AEN)
        time.sleep(0.0024)

        self.awake = True

    def sleep(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable & ~_PON)

        self.awake = False

    def is_awake(self):
        return self._read_byte(_ENABLE) & _PON

    def set_wait_time(self, t):
        pass

    @property
    def id(self):
        return self._read_byte(_ID)

    @property
    def integration_time(self):
        steps = 256 - self._read_byte(_ATIME)
        return steps * 2.4

    def set_integration_time(self, t):
        """Set the integration time of the sensor"""
        if t < 2.4:
            t = 2.4
        elif t > 614.4:
            t = 614.4

        steps = int(t / 2.4)
        self._integration_time = steps * 2.4
        self._write_byte(_ATIME, 256 - steps)

    @property
    def gain(self):
        """The gain control. Should be 1, 4, 16, or 60.
        """
        return _GAINS[self._read_byte(_CONTROL)]

    def set_gain(self, gain):
        if gain in _GAINS:
            self._write_byte(_CONTROL, _GAINS.index(gain))

    @property
    def raw(self):
        """Read RGBC registers
        return 16 bits red, green, blue and clear data
        """

        if not self.awake:
            self.wakeup()

        while not self._valid():
            time.sleep(0.0024)

        data = tuple(self._read_word(reg) for reg in (_RDATA, _GDATA, _BDATA, _CDATA))
        return data

    @property
    def rgb(self):
        """Read the RGB color detected by the sensor.  Returns a 3-tuple of
        red, green, blue component values as bytes (0-255).
        """
        r, g, b, clear = self.raw
        if clear:
            r = int(255 * r / clear)
            g = int(255 * g / clear)
            b = int(255 * b / clear)
        else:
            r, g, b = 0, 0, 0
        return r, g, b

    def _valid(self):
        """Check if RGBC is valid"""
        return self._read_byte(_STATUS) & 0x01

    def _read_byte(self, address):
        command = _CMD | address
        return self.bus.read_byte_data(self.address, command)

    def _read_word(self, address):
        command = _CMD | _AUTO | address
        return self.bus.read_word_data(self.address, command)

    def _write_byte(self, address, data):
        command = _CMD | address
        self.bus.write_byte_data(self.address, command, data)

    def _write_word(self, address, data):
        command = _CMD | _AUTO | address
        data = [(data >> 8) & 0xFF, data & 0xFF]
        self.bus.write_i2c_block_data(self.address, command, data)


Grove = GroveI2cColorSensorV2


def main():
    sensor = GroveI2cColorSensorV2()

    print('Raw data of red-filtered, green-filtered, blue-filtered and unfiltered photodiodes')
    while True:
        # r, g, b = sensor.rgb
        r, g, b, clear = sensor.raw
        print((r, g, b, clear))
        time.sleep(1.0)

if __name__ == '__main__':
    main()
```
- Ejecuta este código
```

python grove_i2c_color_sensor_v2.py

```

Si todo va bien, verás el siguiente fenómeno.😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/color_result.png" alt="pir" width={600} height="auto" /></p>







Otra Referencia
---------------

Este módulo está basado en el sensor de color TCS3414CS. El sensor de color digital TCS3414CS devuelve datos de cuatro canales: rojo(R), verde(G), azul(B) y claro(C)(sin filtrar). La respuesta de los canales rojo, verde y azul (RGB) puede usarse para determinar las coordenadas de cromaticidad (x, y) de una fuente particular. Estos estándares están establecidos por la Commission Internationale de l'Eclairage (CIE). La CIE es la principal organización internacional relacionada con el color y la medición del color. Para adquirir el color de un objeto dado usando TCS3414CS, primero debemos mapear la respuesta del sensor (RGB) a los valores de triestímulo CIE (XYZ). Luego es necesario calcular las coordenadas de cromaticidad (x, y).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png" /></div>

Resumen del Proceso de Cálculo de Cromaticidad

Las ecuaciones para hacer la transformación:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png" /></div>

Ecuaciones de Transformación

- Cuando obtenemos las coordenadas (x, y), por favor consulta la siguiente figura para obtener el color recomendado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg" /></div>

## Preguntas Frecuentes

**P1: ¿Cómo entender los comandos? Por ejemplo, REG_GREEN_LOW = 0xD0**

R1: Desde la imagen adjunta, puedes ver qué hay en el comando. Cuando uses el comando de protocolo de byte, debe ser como 0x80+ADDRESS. Por ejemplo, REG_TIMING( 01h ) = 0x81
Para lectura de byte y bloque, el comando debe ser 0xC0+ADDRESS, REG_GREEN_LOW( 10h ) = 0xD0.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png" /></div>

# Archivo Eagle del Grove-I2C Color Sensor V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Archivo Eagle del Grove-I2C Color Sensor V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Recursos

---------

- **[Librería]**[Librería para Grove - I2C Color Sensor V1.2](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)
- **[Librería]**[Librería para Grove - I2C Color Sensor V2.0](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
- **[Eagle]**[Archivo Eagle del Grove-I2C Color Sensor V1.2](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip)
- **[Eagle]**[Archivo Eagle del Grove-I2C Color Sensor V2.0](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip)
- **[Hoja de Datos]**[Hoja de Datos TCS3414-A](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf)
- **[Hoja de Datos]**[Hoja de Datos TCS3472](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Color_Sensor -->

## Soporte Técnico y Discusión del Producto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
