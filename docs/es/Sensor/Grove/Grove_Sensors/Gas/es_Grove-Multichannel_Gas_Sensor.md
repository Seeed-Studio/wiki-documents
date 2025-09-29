---
description: Grove - Sensor de Gas Multicanal
title: Grove - Sensor de Gas Multicanal
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Multichannel_Gas_Sensor
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor2.png" />
      </td>
    </tr>
  </tbody></table>

Grove – El sensor de gas multicanal es un sensor de detección ambiental con un MiCS-6814 integrado que puede detectar muchos gases nocivos, y tres gases pueden medirse simultáneamente debido a sus múltiples canales, por lo que puede ayudarte a monitorear la concentración de más de un gas.

Este sensor pertenece al **sistema Grove**, y puedes conectarlo al **Base shield** y trabajar con Arduino directamente sin cables de puente. La interfaz es I2C, así que conéctalo al puerto I2C del Base shield, luego puedes comenzar a trabajar con él.

<div class="admonition caution">
<p class="admonition-title">Precaución</p>
El valor del sensor solo refleja la tendencia aproximada de la concentración de gas en un rango de error permisible, NO representa la concentración exacta de gas. La detección de ciertos componentes en el aire generalmente requiere un instrumento más preciso y costoso, lo cual no se puede hacer con un solo sensor de gas. Si tu proyecto está dirigido a obtener la concentración de gas a un nivel muy preciso, entonces no recomendamos este sensor de gas.
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html)

:::tip
     Hemos actualizado el producto a [Multichannel Gas Sensor v2](https://wiki.seeedstudio.com/es/Grove-Multichannel-Gas-Sensor-V2/) con documentos más detallados y más módulos de sensores a bordo. Además, hemos lanzado la [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/es/Seeed_Gas_Sensor_Selection_Guide/), te ayudará a elegir el sensor de gas que mejor se adapte a tus necesidades.
:::

## Antes del uso

### Lectura relacionada

Te sugerimos leer estos conocimientos antes de usar el sensor de gas, te ayudará a aprender más sobre Arduino y nuestros productos, y también te permitirá usar hardware de código abierto más fácilmente.

- Comenzando con Arduino
- Qué es el sistema Grove
- ¿Por qué necesito un Base shield?

Después de leer eso sabrás cómo usar el Base shield con productos Grove para trabajar bien con Arduino. ¡Comencemos!

### Para estar preparado

Este tutorial incluirá algunos productos necesarios:

- Arduino UNO R3 o Seeeduino v4
- Base Shield
- Grove - Sensor de Gas Multicanal

Descripción general del hardware
-----------------

<!-- <center>
![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png)
</center> -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Multi_sensor1.png" alt="pir" width={600} height="auto" /></p>

Cuatro pines se señalan en la figura anterior

| Etiqueta del Pin | Descripción             |
|------------------|-------------------------|
| GND              | Conectar a tierra       |
| VCC              | Fuente de alimentación: 3.3V - 5V |
| SDA              | Datos I2C               |
| SCL              | Reloj I2C               |

La fuente de alimentación está entre 3.3V y 5V, por lo que este sensor puede ser compatible con un microcontrolador cuyo voltaje de salida sea de 3.3V.

Características
-------

- Tres elementos de detección completamente independientes en un paquete
- Construido con ATmega168PA
- Interfaz I2C con dirección programable
- La potencia de calentamiento se puede apagar para bajo consumo
- Gases detectables
  - Monóxido de carbono CO 1 – 1000ppm
  - Dióxido de nitrógeno NO2 0.05 – 10ppm
  - Etanol C2H6OH 10 – 500ppm
  - Hidrógeno H2 1 – 1000ppm
  - Amoníaco NH3 1 – 500ppm
  - Metano CH4 &gt;1000ppm
  - Propano C3H8 &gt;1000ppm
  - Iso-butano C4H10 &gt;1000ppm

Diagrama de Bloques
-------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_block_diagram.jpg" alt="pir" width={600} height="auto" /></p>

Plataformas Compatibles
<!-- -------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Características Eléctricas
--------------------------

| Elemento      | Condición  | Mín. | Típ. | Máx. | Unidad |
|---------------|------------|------|------|------|--------|
| Voltaje       | -          | 3.1  | 3.3  | 5.25 | V      |
| Ondulación    | @Potencia Máx | -    | 80   | 100  | mV     |
| Potencia de Calentamiento | -          | -    | -    | 88   | mW     |
| Potencia Máx  | -          | -    | -    | 150  | mW     |
| Precisión ADC | -          | -    | 10   | -    | Bits   |
| Velocidad I2C | -          | -    | 100  | 400  | kHz    |
| VIL           | @I2C       | -0.5 | -    | 0.99 | V      |
| VIH           | @I2C       | 2.31 | -    | 5.25 | V      |

### Rendimiento sensor RED

| Característica sensor RED        | Símbolo | Típ | Mín | Máx  | Unidad |
|----------------------------------|---------|-----|-----|------|--------|
| Resistencia de detección en aire | R0      | -   | 100 | 1500 | kΩ     |
| Rango típico de detección de CO  | FS      | -   | 1   | 1000 | ppm    |
| Factor de sensibilidad           | SR      | -   | 1.2 | 50   | -      |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Red_sensor.jpg" alt="pir" width={600} height="auto" /></p>

### Rendimiento sensor OX

| Característica sensor OX         | Símbolo | Típ | Mín  | Máx | Unidad |
|-----------------------------------|---------|-----|------|-----|--------|
| Resistencia de detección en aire | R0      | -   | 0.8  | 20  | kΩ     |
| Rango típico de detección de NO2 | FS      | -   | 0.05 | 10  | ppm    |
| Factor de sensibilidad           | SR      | -   | 2    | -   | -      |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/OX_sensor.jpg" alt="pir" width={600} height="auto" /></p>

### Rendimiento del sensor NH3

| Característica del sensor NH3        | Símbolo | Típ | Mín | Máx  | Unidad |
|--------------------------------------|---------|-----|-----|------|--------|
| Resistencia de detección en el aire  | R0      | -   | 10  | 1500 | kΩ     |
| Rango típico de detección de NH3     | FS      | -   | 1   | 300  | ppm    |
| Factor de sensibilidad               | SR      | -   | 1.5 | 15   | -      |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/NH3_sensor.jpg" alt="pir" width={600} height="auto" /></p>

Primeros Pasos
-------------

:::warning
    El sensor necesita precalentarse al menos 10 minutos antes de obtener datos estables.
:::
**Instalación de Hardware:**

1.Conecta Grove - Multichannel Gas Sensor a Seeeduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-MultiChannelGasSensor.jpg" alt="pir" width={600} height="auto" /></p>

**Subir Código:**

2.Descarga [Arduino Library & Grove/Xadow firmware](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor/archive/master.zip) e [instálala](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) en Arduino Library.

3.Abre el código directamente por la ruta:File -> Example -> Mutichannel_Gas_Sensor-> ReadSensorValue_Grove.

El código de ReadSensorValue_Grove se proporciona a continuación.

```c
// Read Data from Grove - Multichannel Gas Sensor
#include <Wire.h>
#include "MutichannelGasSensor.h"

void setup()
{
    Serial.begin(115200);  // start serial for output
    Serial.println("power on!");
    gas.begin(0x04);//the default I2C address of the slave is 0x04 ; for verison 2 of the multichannel gas sensor the i2c address is 0x08
    gas.powerOn();
    Serial.print("Firmware Version = ");
    Serial.println(gas.getVersion());
}

void loop()
{
    float c;

    c = gas.measure_NH3();
    Serial.print("The concentration of NH3 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CO();
    Serial.print("The concentration of CO is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_NO2();
    Serial.print("The concentration of NO2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C3H8();
    Serial.print("The concentration of C3H8 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C4H10();
    Serial.print("The concentration of C4H10 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_CH4();
    Serial.print("The concentration of CH4 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_H2();
    Serial.print("The concentration of H2 is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    c = gas.measure_C2H5OH();
    Serial.print("The concentration of C2H5OH is ");
    if(c>=0) Serial.print(c);
    else Serial.print("invalid");
    Serial.println(" ppm");

    delay(1000);
}
```

4.Sube el código. Recuerda seleccionar Seeeduino Uno desde el menú Herramientas | Placa del entorno de Arduino, y selecciona el puerto serie correcto que Arduino está usando.

Al abrir el monitor serie, puedes ver los datos en bruto leídos del sensor.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Mutichannel_Gas_Sensor_Grove_Print.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Actualizar Firmware
-----------------

Este módulo grove tiene un MCU ATmega168 que está flasheado con un firmware de fábrica. La versión ha sido actualizada a V2 el 11 de noviembre de 2016.
Sube el código de abajo para detectar la versión de tu sensor.

```c
// Get firmware version of Grove Multichannel Gas Sensor
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    Serial.begin(115200);
    gas.begin(SENSOR_ADDR);
    
    unsigned char version = gas.getVersion();
    Serial.print("Version = ");
    Serial.println(version);    
}

void loop()
{
    // nothing to do
}
```

Si la versión de tu sensor es V1, te recomendamos actualizarla a V2 para obtener un mejor rendimiento.

Para actualizar el firmware, necesitas:

- Un Arduino UNO/Seeeduino V3/
- 6 cables dupont
- Soldador

Hay un pad ICSP en la parte posterior de la placa, necesitas conectar esos pads a una placa Arduino.

| Sensor | Arduino |
|--------|---------|
| MISO   | D12     |
| SCK    | D13     |
| NRST   | D10     |
| GND    | GND     |
| MOSI   | D11     |
| VCC    | 5V      |

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_connect.jpeg" alt="pir" width={600} height="auto" /></p>

Luego abre el ejemplo **UpdateFrimware** en tu Arduino, abre el monitor serie y obtendrás información impresa.
Ingresa una 'g' para comenzar.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/firmware_done.png" alt="pir" width={600} height="auto" /></p>

calibración
--------------

Si siempre obtienes un valor no auténtico, por favor intenta calibrar el sensor.
Abre el ejemplo **calibration** y súbelo a tu Arduino, abre el monitor serie para obtener información cuando esté calibrando.

:::note
    La calibración se ha realizado antes de que los módulos salgan de fábrica. Si quieres recalibrar, por favor asegúrate de que las condiciones del aire sean frescas. Y la calibración puede necesitar desde minutos hasta media hora. 
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Grove - Sensor de Gas Multicanal v1.0 sch](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_sch.pdf)
- [Archivos eagle del Grove - Sensor de Gas Multicanal](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/Grove-Multichannel_Gas_Sensor_v1.0_eagle_files.zip)
- [Librería de Arduino y firmware Grove/Xadow](https://github.com/Seeed-Studio/Mutichannel_Gas_Sensor)
- [Hoja de datos MiCS-6814](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/res/MiCS-6814_Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Multichannel_Gas_Sensor -->

FAQ
---------

* **P1. Cómo cambiar la dirección I2C del módulo**

  - *R1. Abre el ejemplo I2C_Address y ejecútalo.*

- **P2. Cambié la dirección I2C y desafortunadamente olvidé cuál es.**

  - *R2. No te preocupes por eso, ejecuta el ejemplo factory_setting para hacerlo por defecto. Ten en cuenta que los datos de calibración también se restablecerán a configuración de fábrica.*

- **P3. ¿Funciona el sensor de gas multicanal con Wio GPS y Wio LTE?**

  - *R3. Sí, por favor consulta el código a continuación.

Wio GPS:

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (12)
#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```

Wio LTE:

```
#include <Wire.h>
#include "MutichannelGasSensor.h"

#define WIOLTE_GROVE_PIN (26)
#define SENSOR_ADDR     0X04        // default to 0x04

void setup()
{
    // SerialUSB.begin(115200);
    pinMode(WIOLTE_GROVE_PIN, OUTPUT);
    digitalWrite(WIOLTE_GROVE_PIN, HIGH);
    delay(2000);
    gas.begin(SENSOR_ADDR);     // 
}

void loop()
{
    float R0_NH3, R0_CO, R0_NO2;
    float Rs_NH3, Rs_CO, Rs_NO2;
    float ratio_NH3, ratio_CO, ratio_NO2;
    
    R0_NH3 = gas.getR0(0);
    R0_CO  = gas.getR0(1);
    R0_NO2 = gas.getR0(2);
    
    Rs_NH3 = gas.getRs(0);
    Rs_CO  = gas.getRs(1);
    Rs_NO2 = gas.getRs(2);
    
    ratio_NH3 = Rs_NH3/R0_NH3;
    ratio_CO  = Rs_CO/R0_CO;
    ratio_NO2 = Rs_NH3/R0_NO2;
    
    SerialUSB.println("R0:");
    SerialUSB.print(R0_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(R0_CO);
    SerialUSB.print('\t');
    SerialUSB.println(R0_NO2);
    
    SerialUSB.println("Rs:");
    SerialUSB.print(Rs_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(Rs_CO);
    SerialUSB.print('\t');
    SerialUSB.println(Rs_NO2);
    
    SerialUSB.println("ratio:");
    SerialUSB.print(ratio_NH3);
    SerialUSB.print('\t');
    SerialUSB.print(ratio_CO);
    SerialUSB.print('\t');
    SerialUSB.println(ratio_NO2);

    SerialUSB.println("------------------------");
    delay(1000);
}
```

## Proyectos

**Smart Crops: ¡Implementando IoT en la Agricultura Convencional!**: Nuestra misión con la naturaleza es preservarla, diseñando e implementando tecnologías y métodos de monitoreo con la ayuda de IoT a través de Helium.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

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

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
