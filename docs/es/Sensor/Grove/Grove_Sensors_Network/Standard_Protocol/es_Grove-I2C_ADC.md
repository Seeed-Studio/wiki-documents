---
title: Grove - I2C ADC
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-I2C_ADC/
slug: /es/Grove-I2C_ADC
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-RGB-LED-Stick-20-WS2813-Mini/img/ssd.jpg)

Grove - I2C ADC es un módulo ADC de precisión de 12 bits basado en ADC121C021. Te ayuda a aumentar la precisión del valor recolectado del sensor analógico proporcionando un voltaje de referencia constante. Debido a que su dirección es cambiable, puedes usar hasta 9 I2C ADC al mismo tiempo como máximo. Por otro lado, este módulo proporciona función de suspensión automática que reduce considerablemente el consumo de energía.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-ADC.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Versión

|Versión|Dirección I2C Predeterminada|
|---|---|
|Grove - I2C ADC v1.0/v1.1|0x55|
|Grove - I2C ADC v1.2|0x50|

## Características

- Bajo consumo de energía
- Alta precisión
- Modo de apagado automático
- Dirección modificable

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

-------------

| Elemento         | Típico | Unidad |
|------------------|--------|--------|
| Voltaje de Trabajo | 5.0    | VDC    |
| Resolución       | 12     | Bit    |
| Tasa de Muestreo | 188.9  | ksps   |
| Dimensión        | 40X20  | mm     |


## Plataformas Compatibles

-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción General del Hardware

------------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Interface.png) -->
**J1:** utilizado para conectar la interfaz IIC de Arduino como interfaz de salida del Grove - I2C ADC.

**J2:** utilizado para conectar sensor analógico como interfaz de entrada del Grove - I2C ADC.

**U1:** IC ADC121C021, Convertidor Analógico-Digital de 12 bits

**El área de línea negra se utiliza para configurar la dirección IIC. ADDR0 y ADDR1 se envían conectados a L. Puedes cambiarlos a "H" o flotante mediante una pequeña modificación en la placa (flotante significa no conectar ni "H" ni "L"). Encuentra detalles en la Referencia.**

## Primeros Pasos

---------------

### Con Arduino

Grove - I2C ADC tiene dos interfaces: conector de entrada (J2) y conector de salida (J1). Conecta un sensor analógico a su conector de entrada y conecta el I2C ADC a Arduino/Seeeduino también mediante cables Grove.

Tomemos Grove - Sensor de Gas como ejemplo, y ahora aprendemos cómo leer datos del sensor usando Grove - I2C ADC.
La instalación del hardware debería ser así:

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_gas_sensor_data_using_I2C_ADC.jpg)

Ahora puedes leer el valor del sensor de gas usando el código a continuación.

```
#include <Wire.h>
 
#define ADDR_ADC121             0x50 // For v1.0 & v1.1, I2C address is 0x55
 
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
{  read_adc();//adcRead);
   delay(50);
}
```

En el código anterior, definimos el Vref como 3.0V que está determinado por el módulo ADC I2C. Este voltaje de referencia es más preciso que uno generado por el microcontrolador. Y puedes hacerlo más preciso midiendo el voltaje entre VA y GND y usar ese valor para reemplazar 3.00 en el código anterior.

Ahora puedes subir el código.

Después, abre el monitor serie y lee los valores:

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

<div class="admonition note">
<p class="admonition-title">note</p>
La dirección del Grove - I2C ADC es cambiable, lo que significa que puedes redefinir su dirección. Eso requiere alguna modificación de hardware en la placa. Si estás pensando en usar más de un ADC I2C al mismo tiempo, sigue las instrucciones en la parte de Referencia a continuación para hacerlo. El número máximo de ADCs I2C que se pueden usar simultáneamente es 9, pero solo hay 4 conectores I2C en el Grove - Base Shield V1.2, así que si quieres usar más de 4 ADC I2C, toma un <a href="/es/Grove-I2C_Hub">Grove - I2C Hub</a> para crear más conectores I2C.
</div>
### Con Beaglebone Green

Para comenzar a editar programas que residen en BBG, puedes usar el IDE Cloud9.
Como un ejercicio simple para familiarizarse con el IDE Cloud9, crear una aplicación simple para hacer parpadear uno de los 4 LEDs programables por el usuario en el BeagleBone es un buen comienzo.

Si esta es tu primera vez usando el IDE Cloud9, por favor sigue este [**enlace**](/es/BeagleBone_Green).

**Paso1:** Configura el conector Grove - UART como un conector Grove - GPIO, solo sigue este [**enlace**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html).

**Paso2:** Haz clic en el "+" en la parte superior derecha para crear un nuevo archivo.

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/C9_newfile.jpg)

**Paso3:** Copia y pega el siguiente código en la nueva pestaña

```
from Adafruit_I2C import Adafruit_I2C
import time
 
ADDR_ADC121 = 0x50
 
REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07
 
i2c = Adafruit_I2C(ADDR_ADC121)           
 
class I2cAdc:
    def __init__(self):
        i2c.write8(REG_ADDR_CONFIG, 0x20)
 
    def read_adc(self):
        "Read ADC data 0-4095."
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data
 
if __name__ == '__main__':
    # Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green.
    adc = I2cAdc()
    while True:
        print 'sensor value ', adc.read_adc()
        time.sleep(.2)
```

**Paso 4:** Guarda el archivo haciendo clic en el icono del disco y dándole un nombre con la extensión .py.

**Paso 5:** Conecta el ADC I2C Grove al socket I2C Grove en BBG.

**Paso 6:** Ejecuta el código. Encontrarás que la terminal muestra el valor AD cada 2 segundos.

Referencia
----------

### Configuración de Dirección I2C

El ADC I2C tiene una dirección de hardware de siete bits que está determinada por ADR0 y ADR1. ADR0 y ADR1 están conectados a L dentro de la placa por defecto. Pero puedes cambiarlo. Por ejemplo, usa un cuchillo para cortar la conexión entre L y ADR0 (como se muestra en la imagen a continuación), entonces haces que el estado de ADR0 sea Flotante (no conectado a nada). Y si soldas ADR0 y H en este momento, entonces haces que el valor de ADR0 sea H.

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Change_I2C_Address.jpg)

Puedes encontrar la relación entre la dirección I2C de hardware y los valores de ADR0 y ADR1 en la siguiente tabla.

<table border="1" cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">
Dirección Esclavo[A6 - A0]
</th>
<th colspan="2" scope="col">
Estado de entradas ADR0 y ADR1
</th>
</tr>
<tr>
<td scope="col">
ADR1
</td>
<td scope="col">
ADR0
</td>
</tr>
<tr>
<td scope="row">
1010000(0x50)
</td>
<td>
Flotante
</td>
<td>
Flotante
</td>
</tr>
<tr>
<td scope="row">
1010001(0x51)
</td>
<td>
Flotante
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010010(0x52)
</td>
<td>
Flotante
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1010100(0x54)
</td>
<td>
L
</td>
<td>
Flotante
</td>
</tr>
<tr>
<td scope="row">
1010101(por defecto 0x55)
</td>
<td>
L
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1010110(0x56)
</td>
<td>
L
</td>
<td>
H
</td>
</tr>
<tr>
<td scope="row">
1011000(0x58)
</td>
<td>
H
</td>
<td>
Flotante
</td>
</tr>
<tr>
<td scope="row">
1011001(0x59)
</td>
<td>
H
</td>
<td>
L
</td>
</tr>
<tr>
<td scope="row">
1011010(0x5A)
</td>
<td>
H
</td>
<td>
H
</td>
</tr>
</table>


### ¿Cuánto aumenta la precisión el ADC I2C?

Aquí hay un experimento que realizamos para darte una idea de cuánto aumenta la precisión de un sensor analógico el ADC I2C. Primero, revisemos los valores recolectados directamente a través del puerto analógico en Arduino/Seeeduino desde un Sensor de Gas Grove (MQ5)

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_Gas_Sensor_data.jpg)

Subimos el código a continuación para obtener los datos.

```
    /*
     * Grove - Gas Sensor(MQ5)  
     *
     * The Gas Sensor detect the related Gas density, 
     * Arduino get the result by analogread. the gas Density is 
     * 0~1, larger the output is, the denser the gas.
     * Connect the Sensor to A0 in this demo;
     * 
     *  By: https://www.seeedstudio.com
    */
    #define Vref 4.95
    void setup() {
      Serial.begin(9600);
    }
     
    void loop() {
      float vol;
      int sensorValue = analogRead(A0);
      vol=(float)sensorValue/1023*Vref;
      Serial.print("The sensorValue is ");
      Serial.println(sensorValue);
      Serial.print("The analog value is ");
      Serial.print(vol);
      Serial.println("V");
      delay(100);
    }
```

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Read_ADC_2.jpg)

Por defecto, Vref es generado por Arduino que es teóricamente 5V. Pero en realidad ese es un valor flotante que resulta en la desviación de los datos finales. Este tipo de inexactitud se evita cuando se usa Grove - I2C ADC, porque proporciona un estricto 3.0V como Vref.
Para contrastar, en la misma condición, los valores del sensor recolectados por el circuito con Grove - I2C ADC en el osciloscopio se muestran a continuación:

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/IIC_ADC_Read_Result.jpg)

Para averiguar cuál resultado está más cerca de la condición real, aquí usamos un multímetro para medir el voltaje entre el pin SIG y el pin GND del sensor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/img/Measure_the_real_sensor_value_using_DMM.JPG)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

--------

- [Archivo Eagle de I2C ADC](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/I2C_ADC_Eagle_File.zip)
- [Hoja de Datos ADC121C021](https://files.seeedstudio.com/wiki/Grove-I2C_ADC/res/ADC121C021_Datasheet.pdf)

## Proyecto

**Monitor de Temperatura BeagleBone Green en Artik Cloud** Publica valores del Sensor de Temperatura Grove recolectados por un BeagleBone Green a Artik Cloud.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/LaurenceHR/beaglebone-green-temperature-monitor-on-artik-cloud-08ca3b/embed' width='350'></iframe>

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_I2C_ADC -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
