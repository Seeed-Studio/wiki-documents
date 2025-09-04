---
description: Grove - Acelerómetro Analógico de 3 Ejes 40g (ADXL356C)
title: Grove - Acelerómetro Analógico de 3 Ejes 40g (ADXL356C)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/101020638-preview.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/101020638-preview.png" alt="pir" width={600} height="auto" /></p>

Puedes encontrar una variedad de [acelerómetros de 3 ejes](https://www.seeedstudio.com/tag/accelerometer.html) en nuestro sitio web que pueden satisfacer diferentes escenarios y necesidades. Esta vez, te traemos los acelerómetros de tres ejes de la serie ADXL de ADI de grado industrial, alta estabilidad, alta precisión y bajo consumo de energía.

El Grove - Acelerómetro Analógico de 3 Ejes ±40g (ADXL356C) es un acelerómetro [MEMS](https://www.seeedstudio.com/tag/MEMS.html) de salida analógica. Este sensor tiene dos rangos de medición seleccionables: ±10g, ±40g. Solo necesitas hacer un poco de trabajo de calibración para obtener un resultado relativamente preciso. El puerto grove integrado puede generar datos analógicos de dos canales: uno para el eje Z, uno para el eje X/Y. Puedes elegir generar la señal del eje X o del eje Y con el interruptor integrado. También puedes usar el orificio de soldadura de 4 pines para generar los ejes X/Y/Z al mismo tiempo. El consumo de energía de este sensor es extremadamente bajo, 150 μA en modo de operación normal e incluso solo 21 μA en modo de espera. Puedes cambiar el modo de operación cambiando la conexión de la almohadilla en la parte posterior.

La serie de acelerómetros ADXL de ADI incluye cuatro productos que satisfarán tus diferentes necesidades de rango y salida:

Producto|Rango de Medición|Puerto de Salida|Consumo de Energía
-----|-----|----|----
[Grove - Acelerómetro Analógico de 3 Ejes ±20g (ADXL356B)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html)|±10 / ±20g|Analógico|modo de medición:150 μA / modo de espera:21 μA
[Grove - Acelerómetro Analógico de 3 Ejes ±40g (ADXL356C)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|±10g / ±40g|Analógico|modo de medición:150 μA / modo de espera:21 μA
[Grove - Acelerómetro Digital de 3 Ejes ±40g (ADXL357)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html)|±10g@51200 LSB/g / ±20g@25600 LSB/g / ±40g@12800 LSB/g|Digital I2C|modo de medición:200μA
[Grove - Acelerómetro Digital de 3 Ejes ±200g (ADXL372)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html)|±200g|Digital I2C|modo de medición:22μA

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)

## Características

- Ruido líder en la industria, deriva de offset mínima con la temperatura y estabilidad a largo plazo, permitiendo aplicaciones de precisión con calibración mínima.
- El encapsulado hermético ofrece excelente estabilidad a largo plazo. Offset de 0 g vs. temperatura (todos los ejes): 0.75 mg/°C máximo
- El bajo ruido del ADXL356 en frecuencias más altas es ideal para monitoreo de condición inalámbrico.
- Baja deriva, bajo ruido
- Consumo de energía ultra bajo: Modo de operación normal-150 μA, Modo de espera 21 μA.

## APLICACIONES

- Unidades de medición inercial (IMUs)/sistemas de referencia de altitud y rumbo (AHRSs)
- Sistemas de estabilización de plataforma
- Monitoreo de salud estructural
- Monitoreo de condición
- Imágenes sísmicas
- Detección de inclinación
- Robótica

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura ambiente de operación| -40 – 125℃|
|Rango de Escala Completa de Salida (FSR)|±10g / ±40g|
|Sensibilidad en X<sub>OUT</sub>, Y<sub>OUT</sub>, Z<sub>OUT</sub> / (Ratiométrica a V<sub>1P8ANA)</sub>|±10 g@80 mv/g (Típ.) / ±40 g@20 mv/g (Típ.)|
|Cambio de Sensibilidad debido a la Temperatura|±0.01%/°C  (TA = −40°C a +125°C)|
|OFFSET de 0g / (Referido a V1P8ANA/2)|±125 mg(Típ.)|
|Interfaz de salida|Analógica|

## Pinout

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/pinout2.jpg" alt="pir" width={600} height="auto" /></p>

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield |Grove Acelerómetro de 3 ejes ADXL356C|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
  **1** Por favor conecta el cable USB suavemente, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 
   **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Acelerómetro Analógico de 3 Ejes ±20g (ADXL356B) al puerto **A0** del Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/_DAS3071.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/img/_DAS3071.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga el [Seeed_ADXL_356.ino](https://github.com/linux-downey/Seeed_ADXL356/blob/master/Seeed_ADXL_356/Seeed_ADXL_356.ino) desde Github.

o simplemente puedes copiar el siguiente código.

:::note
       Este código está escrito tanto para ADXL_356B como para ADXL_356C, y si necesitas implementarlos en 356C, por favor cambia la línea `#define MODUEL_RANGE  20` por `#define MODUEL_RANGE  40`, o no funcionará.
:::

```cpp

#include <Arduino.h>

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

float cali_data_xy;
float cali_data_z;
int16_t scale;

#define MODUEL_RANGE           20

#define MODULE_VOL             1.8

#define CALI_BUF_LEN           15
#define CALI_INTERVAL_TIME     250

float cali_buf_xy[CALI_BUF_LEN];
float cali_buf_z[CALI_BUF_LEN];

#define XY_PIN   A0
#define Z_PIN    A1

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
  cali_buf_xy[i] = analogRead(XY_PIN);;
  cali_buf_z[i] = analogRead(Z_PIN);
  delay(CALI_INTERVAL_TIME);
 }
 cali_data_xy =  deal_cali_buf(cali_buf_xy);
 cali_data_z =  (float)deal_cali_buf(cali_buf_z);
 SERIAL.println("Calibration OK!!");
 scale = (float)1000 / (cali_data_z - cali_data_xy);
 cali_data_z -= (float)980 / scale;
 SERIAL.println(cali_data_xy);
 SERIAL.println(cali_data_z);
 SERIAL.println(scale);
 
}


void AccMeasurement(void)
{
 int16_t val_xy = 0;
 int16_t val_z = 0;
 val_xy = analogRead(XY_PIN);
 val_z = analogRead(Z_PIN);
 
 SERIAL.print("Raw data xy  = ");
 SERIAL.println(val_xy);
 SERIAL.print("Raw data z  = ");
 SERIAL.println(val_z);
 SERIAL.println(" ");
 
 val_xy -= cali_data_xy;
 val_z -= cali_data_z;
 SERIAL.print("x or y position acc is ");
 SERIAL.print(val_xy * scale / 1000.0);
 SERIAL.println(" g ");
 SERIAL.print("z position acc is ");
 SERIAL.print(val_z * scale / 1000.0);
 SERIAL.println(" g ");
 SERIAL.println(" ");
 SERIAL.println(" ");
 SERIAL.println(" ");
 delay(1000);
}

void setup()
{
 SERIAL.begin(115200);
 #ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    analogReadResolution(12);
    #endif
 calibration();
 SERIAL.print("Scale = ");
 SERIAL.println(scale);
 
}


void loop()
{
 AccMeasurement();
}

```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 3.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

- **Paso 4. Calibración** Sigue los consejos de calibración en el Monitor Serie, con solo unos pocos pasos la calibración estará terminada

- **Paso 5.** Ahora puedes usar este sensor, y la salida será así:

```cpp
Please Place the module horizontally!
Start calibration........
Calibration OK!!
184.93
185.03
121
Scale = 121
Raw data xy  = 185
Raw data z  = 193
 
x or y position acc is 0.00 g 
z position acc is 0.85 g 
 
 
 
Raw data xy  = 188
Raw data z  = 196
 
x or y position acc is 0.36 g 
z position acc is 1.21 g
```

:::note
        Si usas el puerto Grove para generar los datos, el eje X y el eje Y no pueden generarse al mismo tiempo, puedes usar el interruptor integrado para seleccionar el canal de salida. Si quieres generar X/Y/Z al mismo tiempo, puedes usar el orificio de soldadura de 4 pines.
:::

## FAQ

**P1: ¿Cómo seleccionar el rango de medición de ±10g?**  

R1: Para cambiar el rango de medición necesitas modificar tanto el hardware como el software. Primero, corta la almohadilla trasera que está conectada a ±40g y vuélvela a soldar a ±10g. Luego modifica el código en la línea 12 del bloque de código

```
#define MODUEL_RANGE           40
```

```
\downdownarrows
```

```
#define MODUEL_RANGE           10
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B140g%20(ADXL356C).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo esquemático del Grove - Acelerómetro Analógico de 3 Ejes ±20g (ADXL356C)](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-40g-ADXL356C/res/Grove%20-%203-Axis%20Analog%20Accelerometer%20%C2%B140g%20(ADXL356C).zip)
- **[PDF]** [Hoja de datos del ADXL 356](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer-20g-ADXL356B/res/ADXL356B.pdf)

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
