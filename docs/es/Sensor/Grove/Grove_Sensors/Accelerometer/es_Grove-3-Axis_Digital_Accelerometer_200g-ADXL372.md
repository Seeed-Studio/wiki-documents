---
description: Grove - Acelerómetro Digital de 3 Ejes 200g (ADXL372)
title: Grove - Acelerómetro Digital de 3 Ejes 200g (ADXL372)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/101020632-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/101020632-preview.png" alt="pir" width={600} height="auto" /></p>

Puedes encontrar una variedad de [acelerómetros de 3 ejes](https://www.seeedstudio.com/tag/accelerometer.html) en nuestro sitio web que pueden satisfacer diferentes escenarios y necesidades. Esta vez, te traemos los acelerómetros de tres ejes de la serie ADXL de ADI de grado industrial, alta estabilidad, alta precisión y bajo consumo de energía.

El Grove - Acelerómetro Digital de 3 Ejes ±200g (ADXL372) es un acelerómetro [MEMS](https://www.seeedstudio.com/tag/MEMS.html) de salida digital de ultra bajo consumo, puede proporcionar una salida de 12 bits con un factor de escala de 100 mg/LSB. La característica más notable de este sensor es su consumo de energía ultra bajo (solo 22μA en modo de medición) y su amplio rango de medición (±200g). Todos los datos se envían a través del puerto Grove I2C, la dirección I2C es modificable. Para satisfacer una gama más amplia de necesidades de medición, la frecuencia de muestreo se puede seleccionar entre 400Hz/800Hz/1600Hz/3200Hz/6400Hz, y el ancho de banda se puede seleccionar entre 200Hz/400Hz/800Hz/1600Hz/3200Hz. Además de ser utilizado como medición de aceleración, también puedes usar este módulo para detección de impactos y choques.

La Serie de Acelerómetros ADXL de ADI incluye cuatro productos que satisfarán tus diferentes necesidades de rango y salida:

Producto|Rango de Medición|Puerto de Salida|Consumo de Energía
-----|-----|----|----
[Grove - Acelerómetro Analógico de 3 Ejes ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|Analógico|modo de medición:150 μA / modo de espera:21 μA
[Grove - Acelerómetro Analógico de 3 Ejes ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|Analógico|modo de medición:150 μA / modo de espera:21 μA
[Grove - Acelerómetro Digital de 3 Ejes ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|Digital I2C|modo de medición:200μA
[Grove - Acelerómetro Digital de 3 Ejes ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|Digital I2C|modo de medición:22μA

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)

## Características

- Amplio rango de medición: ±200g
- Consumo de energía ultrabajoː 22 μA a 3200 Hz ODR
- Relación de sobremuestreo y ancho de banda seleccionables
- FIFO integrado profundo para minimizar la carga del procesador host
- Convertidor analógico-digital (ADC) integrado de 12 bits

## APLICACIONES

- Nodos edge portátiles de Internet de las Cosas (IoT)
- Detección de conmociones y traumatismos craneales
- Detección de impactos y choques
- Evaluación de la salud de activos

## Pinout

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura ambiente de funcionamiento| -40 – 125℃|
|Sensibilidad en X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> / (Ratiométrica a V<sub>1P8ANA)</sub>|±50mg/°C(Operación Normal.) / ±35mg/°C(Modo de Bajo Ruido.)|
|Cambio de Sensibilidad debido a la Temperatura|±0.01%/°C  (TA = −40°C a +125°C)|
|OFFSET de 0g|±1g(.Típ)|
|Interfaz de salida|Digital|

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

| Seeeduino V4.2 | Base Shield |Grove Acelerómetro de 3 ejes ADXL372|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Acelerómetro Analógico de 3 Ejes ±200g (ADXL372) al puerto **I2c** del Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/_DAS3075.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/_DAS3075.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la [librería Seeed_ADXL_372](https://github.com/Seeed-Studio/Accelerometer_ADXL372) desde Github.

- **Paso 2**. Consulta Cómo [instalar librería](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3**. Luego abre `example/ADXL_372/continuous_reading`
<!-- ![Alt text](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/1555913126073.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/1555913126073.png" alt="pir" width={600} height="auto" /></p>

```cpp
//continuous_reading.ino

#include "Wire.h"
#include "adxl372.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SERIALUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif


float cali_data[3];

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf[3][CALI_BUF_LEN];


ADXL372 acc;
xyz_t xyz;

float deal_cali_buf(float *buf)
{
 float cali_val = 0;
 
 for(int i = 0;i < CALI_BUF_LEN;i++)
 {
  cali_val += buf[i];
 }
 cali_val = cali_val/CALI_BUF_LEN;
 return (float)cali_val;
}


void calibration(void)
{
 SERIAL.println("Please Place the module horizontally!");
 delay(1000);
 SERIAL.println("Start calibration........");
 
  
 for(int i=0;i<CALI_BUF_LEN;i++)
 {
  while (!(acc.status() & DATA_READY)); 
  acc.read(&xyz);
  cali_buf[0][i] = xyz.x;
  cali_buf[1][i] = xyz.y;
  cali_buf[2][i] = xyz.z;
  delay(CALI_INTERVAL_TIME);
  SERIAL.print('.');
 }
 SERIAL.println('.');
 for(int i=0;i<3;i++)
 {
  cali_data[i] =  deal_cali_buf(cali_buf[i]);
  if(2 == i){
      
   cali_data[i] -= 10;
  }
  SERIAL.println(cali_data[i]);
 }
 SERIAL.println("Calibration OK!!");
}


void setup() {
  SERIAL.begin(115200);

  acc.begin();
  
  SERIAL.println(acc.id(), HEX);
  acc.timing_ctrl(RATE_400);
  acc.measurement_ctrl(BW_200, true);
  acc.power_ctrl(MEASUREMENT_MODE);
  acc.setActiveTime(10);

  calibration();
}

void loop() {
  if (acc.status() & DATA_READY) {
    acc.read(&xyz);
    SERIAL.print("X position acc = ");
    SERIAL.print((xyz.x - cali_data[0]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Y position acc = ");
    SERIAL.print((xyz.y - cali_data[1]) / 10.0);
    SERIAL.println(" g ");
    SERIAL.print("Z position acc = ");
    SERIAL.print((xyz.z - cali_data[2]) / 10.0);
    SERIAL.println(" mg ");
  }
  SERIAL.println("   ");
  SERIAL.println("   ");
  delay(1000);
}
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).
- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

- **Paso 6. Calibración** espera la calibración, en solo unos segundos la calibración estará terminada

- **Paso 7.** Ahora puedes usar este sensor, y la salida será así:

```cpp
Please Place the module horizontally!
Start calibration........
................
18.07
-10.73
-40.13
Calibration OK!!
X position acc = 0.09 g 
Y position acc = 0.17 g 
Z position acc = 1.31 mg 
   
   
X position acc = -0.11 g 
Y position acc = -0.03 g 
Z position acc = 1.31 mg 
   


```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo esquemático Grove-3-Axis_Digital_Accelerometer-200g-ADXL372](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)
- **[PDF]** [Hoja de datos ADXL 372](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip)

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
