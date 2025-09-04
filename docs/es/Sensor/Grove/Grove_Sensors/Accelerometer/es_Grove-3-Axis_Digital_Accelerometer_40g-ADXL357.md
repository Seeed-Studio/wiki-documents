---
description: Grove - Acelerómetro Digital de 3 Ejes 40g (ADXL357)
title: Grove - Acelerómetro Digital de 3 Ejes 40g (ADXL357)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png" alt="pir" width={600} height="auto" /></p>

Puedes encontrar una variedad de [acelerómetros de 3 ejes](https://www.seeedstudio.com/tag/accelerometer.html) en nuestro sitio web que pueden satisfacer diferentes escenarios y necesidades. Esta vez, te traemos los acelerómetros de tres ejes de la serie ADXL de ADI de grado industrial, alta estabilidad, alta precisión y bajo consumo.

El Grove - Acelerómetro Digital de 3 Ejes ±40g (ADXL357) es un [MEMS](https://www.seeedstudio.com/tag/MEMS.html) Acelerómetro de salida digital. Este sensor tiene tres rangos de medición y precisiones seleccionables diferentes: ±10g@51200 LSB/g, ±20g@25600 LSB/g, ±40g@12800 LSB/g. Solo necesitas hacer poco trabajo de calibración para obtener un resultado relativamente preciso. Envía todos los datos a través del puerto grove I2C, y la dirección I2C también es seleccionable. Además, también proporcionamos dos pines de salida de interrupción que pueden configurarse en 4 modos.

El Acelerómetro de la Serie ADXL de ADI incluye cuatro productos que satisfarán tus diferentes necesidades de rango y salida:

Producto|Rango de Medición|Puerto de Salida
-----|-----|----
[Grove - Acelerómetro Analógico de 3 Ejes ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|Analógico
[Grove - Acelerómetro Analógico de 3 Ejes ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|Analógico
[Grove - Acelerómetro Digital de 3 Ejes ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|I2C Digital
[Grove - Acelerómetro Digital de 3 Ejes ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|I2C Digital

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)

## Características

- Ruido líder en la industria, deriva mínima de offset sobre temperatura, y estabilidad a largo plazo, permitiendo aplicaciones de precisión con calibración mínima.
- El paquete hermético ofrece excelente estabilidad a largo plazo. Offset de 0 g vs. temperatura (todos los ejes): 0.75 mg/°C máximo
- Densidad de ruido ultrabaja (todos los ejes): 80 μg/√Hz
- Convertidor analógico-digital (ADC) integrado de 20 bits
- Baja deriva, bajo ruido y bajo consumo
- Soporta salida de interrupción de dos canales
- Soporta FIFO(96*21-bit)

## APLICACIONES

- Unidades de medición inercial (IMUs)/sistemas de referencia de altitud y rumbo (AHRSs)
- Sistemas de estabilización de plataforma
- Monitoreo de salud estructural
- Monitoreo de condición
- Imágenes sísmicas
- Detección de inclinación
- Robótica

## Especificación

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura ambiente de operación| -40 – 125℃|
|Sensibilidad en X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> / (Ratiométrica a V<sub>1P8ANA)</sub>|±10 g@80 mv/g (Típ.) / ±20 g@40 mv/g (Típ.) / ±40 g@20 mv/g (Típ.)|
|Cambio de Sensibilidad debido a la Temperatura|±0.01%/°C  (TA = −40°C a +125°C)|
|OFFSET de 0g / (Referido a V1P8ANA/2)|±125 mg(Típ.)|
|Interfaz de salida|Digital|

## Pinout

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeros Pasos

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield |Grove Acelerómetro de 3 ejes ADXL357|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
  **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 
    
 **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Acelerómetro Analógico de 3 Ejes ±20g (ADXL357) al puerto **I2c** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la [librería Seeed_ADXL_357](https://github.com/Seeed-Studio/Seeed_ADXL357B) desde Github.

- **Paso 2**. Consulta Cómo [instalar librería](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3**. Luego abre `example/ADXL_357/basic_demo`
<!-- ![Alt text](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png" alt="pir" width={600} height="auto" /></p>

```cpp
//basic_demo.ino
#include "Seeed_adxl357b.h"


#if defined(ARDUINO_ARCH_AVR)
 #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
 #define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") 
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
 #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
 #define SERIAL SerialUSB
#else
 #pragma message("Not found any architecture.")
 #define SERIAL Serial
#endif


#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250
int32_t cali_buf[3][CALI_BUF_LEN];
int32_t cali_data[3];

float factory;

Adxl357b  adxl357b;


int32_t deal_cali_buf(int32_t *buf)
{
 int32_t cali_val = 0;
 
 for(int i = 0;i < CALI_BUF_LEN;i++)
 {
  cali_val += buf[i];
 }
 cali_val = cali_val/CALI_BUF_LEN;
 return (int32_t)cali_val;
}


void calibration(void)
{
 int32_t x;
 SERIAL.println("Please Place the module horizontally!");
 delay(1000);
 SERIAL.println("Start calibration........");
 
 for(int i=0;i<CALI_BUF_LEN;i++)
 {
  if(adxl357b.checkDataReady())
  {
   if(adxl357b.readXYZAxisResultData(cali_buf[0][i],cali_buf[1][i],cali_buf[2][i]))
   {
   }
  }
  delay(CALI_INTERVAL_TIME);
  // SERIAL.print('.');
 }
 // SERIAL.println('.');
 for(int i=0;i<3;i++)
 {
  cali_data[i] =  deal_cali_buf(cali_buf[i]);
  SERIAL.println(cali_data[i]);
 }
 x = (((cali_data[2] - cali_data[0]) + (cali_data[2] - cali_data[1]))/2);
 factory = 1.0 / (float)x;
 // SERIAL.println(x);
 SERIAL.println("Calibration OK!!");
}


void setup(void)
{
 uint8_t value = 0;
 float t;
 
 SERIAL.begin(115200);
 if(adxl357b.begin())
 {
  SERIAL.println("Can't detect ADXL357B device .");
  while(1);
 }
 SERIAL.println("Init OK!");
 /*Set full scale range to ±40g*/
 adxl357b.setAdxlRange(FOURTY_G);
 /*Switch standby mode to measurement mode.*/
 adxl357b.setPowerCtr(0);
 delay(100);
 /*Read Uncalibration temperature.*/
 adxl357b.readTemperature(t);
 
 SERIAL.print("Uncalibration  temp = ");
 SERIAL.println(t);
 /**/
 calibration();

}


void loop(void)
{
 int32_t x,y,z;
 uint8_t entry = 0;
 if(adxl357b.checkDataReady())
 {
  if(adxl357b.readXYZAxisResultData(x,y,z))
  {
   SERIAL.println("Get data failed!");
  }
  SERIAL.print("X axis = ");
  SERIAL.print(x*factory);
  SERIAL.println('g');
  SERIAL.print("Y axis = ");
  SERIAL.print(y*factory);
  SERIAL.println('g');
  SERIAL.print("Z axis = ");
  SERIAL.print(z*factory);
  SERIAL.println('g');
  
 }
 delay(100);
}


```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

- **Paso 6. Calibración** espera la calibración, en solo unos segundos la calibración estará terminada

- **Paso 7.** Ahora puedes usar este sensor, y la salida será así:

```cpp
Start calibration.......Init OK!
Uncalibration  temp = 29.20
Please Place the module horizontally!
Start calibration........
-1652
11143
6063
Calibration OK!!
X axis = -1.24g
Y axis = 8.50g
Z axis = 4.55g
X axis = -1.21g
Y axis = 8.43g

```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo esquemático Grove-3-Axis_Digital_Accelerometer-40g-ADXL357](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip)
- **[PDF]** [Hoja de datos ADXL 357](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/ADXL357.pdf)

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
