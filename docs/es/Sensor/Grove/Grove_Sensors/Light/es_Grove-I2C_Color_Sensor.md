---
description: Grove - Sensor de Color I2C
title: Grove - Sensor de Color I2C
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-I2C_Color_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" /></div>

Este módulo está basado en el sensor de color TCS3414CS con salida digital I2C. Basado en la matriz de 8\*2 de fotodiodos filtrados y convertidores analógico-digitales de 16 bits, puedes medir la cromaticidad del color de la luz ambiental o el color de los objetos. De los 16 fotodiodos, 4 tienen filtros rojos, 4 tienen filtros verdes, 4 tienen filtros azules y 4 no tienen filtro (transparente). Con el pin de entrada de sincronización, una fuente de luz pulsada externa puede proporcionar un control de conversión síncrona precisa.

:::note
Ten en cuenta que la última versión V2.0 ha reemplazado el IC con TCS3472 y la biblioteca antigua también ha sido actualizada. Si estás usando la versión V2.0, por favor usa la [nueva biblioteca](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472).
:::


Características
---------------

- Interfaz compatible con Grove
- Salida digital de 16 bits con I2C
- Entrada SYNC sincroniza el ciclo de integración con fuentes de luz moduladas
- Rango de temperatura de funcionamiento -40°C a 85°C
- Función de interrupción programable con configuraciones de umbral superior e inferior definidas por el usuario
- Cumple con RoHS

:::tip
Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
----------------

| Parámetro | Valor/Rango            |
|-----------|------------------------|
| Tamaño PCB| 2.0 cm \* 4.0 cm       |
| Interfaz  | Conector de pin de 2.0mm |
| VCC       | 3.3 - 6.0 V            |
| Velocidad I2C | 400 kHz            |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Primeros Pasos
--------------

Los siguientes documentos ayudan al usuario a comenzar con Grove.

- [Prefacio - Primeros Pasos](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [a Grove](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

### Conexiones de Hardware

Los productos Grove tienen un ecosistema y todos tienen el mismo conector que se puede conectar al Grove Base Shield. Conecta este módulo al puerto I2C del Base Shield. Sin embargo, también puedes conectar Grove - I2C Color Sensor a Arduino sin Base Shield mediante cables puente.

| Arduino UNO | Grove - I2C Color Sensor |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

Instalación de Software
---------------------

Descargar Arduino e instalar el controlador de Arduino

Primeros pasos con Seeeduino/Arduino

Demostraciones
-----

Este módulo se puede usar para detectar el color de la fuente de luz o el color de los objetos. Cuando se usa para detectar el color de la fuente de luz, el interruptor del led debe estar apagado, y la fuente de luz debe iluminar el sensor directamente. Cuando se usa para detectar el color de las cosas, el led debe estar encendido y debes poner el objeto en la parte superior de la carcasa de cerca. La teoría de detección del color de los objetos es la Teoría de Detección Reflectiva. Como la imagen de abajo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg" /></div>

### Biblioteca del Sensor de Color

Hemos creado una biblioteca para ayudarte a empezar a jugar rápidamente con el Seeeduino/Arduino, en esta sección te mostraremos cómo configurar la biblioteca.

#### Configuración

1. Descarga el [código de la biblioteca como un archivo zip](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor) desde la página de github Grove_I2C_Color_Sensor. Si estás usando la última versión V2.0(IC es TCS3472 ), por favor usa esta [nueva biblioteca](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
2. Descomprime el archivo descargado en tu …/arduino/libraries.
3. Renombra la carpeta descomprimida "Color_Sensor"
4. Inicia el IDE de Arduino (o reinicia si está abierto).

#### Descripción de la función

Esta es la función más importante/útil en la biblioteca, te invitamos a mirar los archivos .h y .cpp tú mismo para ver todas las funciones disponibles.

##### Leer datos RGB a través de la función de la biblioteca

**readRGB(int \*red, int \*green, int \*blue)**

- **red:** La dirección de la variable para guardar R.
- **green:** La dirección de la variable para guardar G.
- **blue:** La dirección de la variable para guardar B.

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

Este ejemplo muestra cómo usar las características del Grove - Sensor de Color I2C y mostrar el color detectado con un [LED RGB Encadenable Grove](/es/Grove-Chainable_RGB_LED/).

:::note
Si no has descargado la <a href="https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED">biblioteca del LED RGB Encadenable Grove</a> a tu Arduino IDE antes, por favor descarga y configura la biblioteca primero.
:::

- Abre File->Examples->Color_Sensor->example->ColorSensorWithRGB-LED sketch para un ejemplo completo, o copia y pega el código de abajo en un nuevo sketch de Arduino.

**Descripción**: Este ejemplo puede medir la cromaticidad del color de la luz ambiental o el color de los objetos, y a través del LED RGB Encadenable Grove, mostrar el color detectado.

También puedes usar otros módulos de visualización para mostrar el color detectado por el Grove - Sensor de Color I2C.

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

Otra Referencia
---------------

Este módulo está basado en el sensor de color TCS3414CS. El sensor de color digital TCS3414CS devuelve datos de cuatro canales: rojo(R), verde(G), azul(B) y claro(C)(sin filtrar). La respuesta de los canales rojo, verde y azul (RGB) puede ser usada para determinar las coordenadas de cromaticidad (x, y) de una fuente particular. Estos estándares son establecidos por la Commission Internationale de l'Eclairage (CIE). La CIE es la principal organización internacional relacionada con el color y la medición del color. Para adquirir el color de un objeto dado usando TCS3414CS, primero debemos mapear la respuesta del sensor (RGB) a los valores de triestímulo CIE (XYZ). Entonces es necesario calcular las coordenadas de cromaticidad (x, y).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png" /></div>

Resumen del Proceso de Cálculo de Cromaticidad

Las ecuaciones para hacer la transformación:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png" /></div>

Ecuaciones de Transformación

- Cuando obtenemos las coordenadas (x, y), por favor referencia la figura de abajo para obtener el color recomendado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg" /></div>

## FAQs

**P1: ¿Cómo entender los comandos? Por ejemplo, REG_GREEN_LOW = 0xD0**

R1: De la imagen adjunta, puedes ver qué hay en el comando. Cuando uses el comando de protocolo de byte, debe ser como 0x80+DIRECCIÓN. Por ejemplo, REG_TIMING( 01h ) = 0x81
Para lectura de byte y bloque, el comando debería ser 0xC0+DIRECCIÓN, REG_GREEN_LOW( 10h ) = 0xD0.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png" /></div>

# Grove-I2C Color Sensor Eagle File V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-I2C Color Sensor Eagle File V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Recursos

---------

- **[Library]**[Librería para Grove - I2C Color Sensor V1.2](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)
- **[Library]**[Librería para Grove - I2C Color Sensor V2.0](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V1.2](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V2.0](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip)
- **[Datasheet]**[TCS3414-A Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf)
- **[Datasheet]**[TCS3472 Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Color_Sensor -->

## Soporte Técnico y Discusión de Productos

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

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
