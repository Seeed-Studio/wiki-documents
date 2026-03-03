---
description: Xadow - Adaptador Grove
title: Xadow - Adaptador Grove
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Grove_Adaptor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/X_adaptor_01.jpg) 

El Adaptador Xadow Grove es un dispositivo que convierte la interfaz Grove a la Interfaz Xadow para ser compatible con el Sistema Xadow. Puede lograr esta función: la señal analógica de dos interfaces analógicas Grove se enviará por el bus I2C de Xadow a través de ADC. La señal de la Interfaz I2C Grove se dirigirá directamente al bus I2C de Xadow sin conversión. La conversión A/D basada en ADCC121C021, un ADC de precisión de 12 bits, crea alta precisión.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html)

##  Especificaciones
---
*   Voltaje de Trabajo： 3.3V

*   Resolución A/D：12 bit

*   Tasa de Muestreo： 188.9 ksps

*   Dirección I2C variable

*   Dimensiones: 25.43mm x 20.35mm

##  Demostración
---
A continuación te mostraremos cómo leer el valor de salida de los módulos Grove usando el Adaptador Xadow Grove.

**Medir Señal Analógica**

Si mides la señal analógica que emiten los módulos Grove, necesitas conectar el módulo Grove a la Interfaz analógica Grove donde están marcadas como "A0" y "A1".

**La Instalación de Hardware debe ser:**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor2.jpg)

Aquí el sensor de gas Grove que emite señal analógica está conectado a AO, por lo que la Dirección I2C aplicada al código de prueba es 0x58(por defecto). En otras palabras, la Dirección I2C debe ser 0x59 cuando el Sensor de Gas Grove se conecte a la interfaz A1.

**El código de prueba es:**
```
<pre>
#include <Wire.h>
#include <Streaming.h>

#define ADDR_ADC121             0x58

#define V_REF 3.00

#define REG_ADDR_RESULT         0x00
#define REG_ADDR_ALERT          0x01
#define REG_ADDR_CONFIG         0x02
#define REG_ADDR_LIMITL         0x03
#define REG_ADDR_LIMITH         0x04
#define REG_ADDR_HYST           0x05
#define REG_ADDR_CONVL          0x06
#define REG_ADDR_CONVH          0x07

unsigned int getData;
float analogVal=0;         // convert
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_CONFIG);                // Configuration Register
    Wire.write(0x20);
    Wire.endTransmission();
}

void read_adc()     //unsigned int *data
{

    Wire.beginTransmission(ADDR_ADC121);        // transmit to device
    Wire.write(REG_ADDR_RESULT);                // get result
    Wire.endTransmission();

    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device
    delay(1);
    if(Wire.available()<=2)
    {
        getData = (Wire.read()&0x0f)<<8;
        getData |= Wire.read();
    }
    Serial.print("getData:");
    Serial.println(getData);
    delay(5);
    Serial.print("The analog value is:");
    Serial.print(getData*V_REF*2/4096);
    Serial.println("V");
}
void setup()
{
    Serial.begin(9600);
    Wire.begin();
    init_adc();
}

void loop()
{
    read_adc();//adcRead);
    delay(50);
}</pre>
```

Sube el código a la Placa Principal Xadow, luego abre el monitor serie para observar el valor de salida：

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Xadow_Grove_Adaptor_Result.png)

**Medir Señal I2C**

Necesitas conectar el módulo Grove a la interfaz I2C del Adaptador Grove Xadow cuando el modo de comunicación del módulo Grove es I2C. Ahora el servidor del Adaptador Grove Xadow está entregando señal al bus I2C Xadow sin ADC.
Tomando como ejemplo el Sensor de Luz Digital Grove, aprendamos su uso.

**Instalación de Hardware：**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor1.jpg)


**Descargar el código：**

<!-- *   Descarga la [Digital_Light_Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor) del Sensor de Luz Digital Grove desde el sitio web de Github e instálala en tu Librería de Arduino. Consulta [Cómo instalar la Librería de Arduino](/es/How_to_install_Arduino_Library) en la página wiki, te familiarizarás con la instalación.
*   Abre el código después de terminar la instalación. -->

```
<pre>
/* Digital Light sensor demo V1.0
* Connect the sensor to I2C port of Arduino to use.
*
* By:https://www.seeedstudio.com
*/
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
void setup()
{
  Wire.begin();
  Serial.begin(9600);
  TSL2561.init();
}

void loop()
{
  unsigned long  Lux;
  TSL2561.getLux();
  Serial.print("The Light value is: ");
  Serial.println(TSL2561.calculateLux(0,0,1));
  delay(1000);
  }</pre>
```

*   Abre el monitor serie para observar el valor LUX. Cambia artificialmente la intensidad de luz del entorno circundante, verás el cambio obvio del valor de salida.


![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Digital_Light_Sensor_Score_Picture.jpg)

<!-- El IC ADC ADC121C021 usado en Xadow Grove Adaptor ha sido adoptado en Grove - I2C ADC. Por supuesto, la forma de cambiar la dirección I2C es la misma. Por favor consulta la [parte de Referencia](/es/Grove-I2C_ADC#Reference) de Grove - I2C ADC sobre el método de variación. Además, "0" y "1" en la placa son el área de variación de dirección de la interfaz A0, "2" y "3" son el área de variación de dirección de la interfaz A1. -->


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
*   [Archivo Eagle de Xadow Grove Adaptor](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

*   [Hoja de datos del IC A/DC ADC121C021](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

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
