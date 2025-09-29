---
description: Grove-6-Axis_Accelerometer&Gyroscope(BMI088)
title: Grove - 6-Axis Accelerometer&Gyroscope(BMI088)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-6-Axis_Accelerometer&Gyroscope_BMI088
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg" alt="pir" width={600} height="auto" /></p>

El Grove - 6-Axis Accelerometer&Gyroscope(BMI088) es una Unidad de Medición Inercial (IMU) de alto rendimiento de 6 DoF (grados de libertad). Este sensor está basado en el BOSCH BMI088, que es un IMU de alto rendimiento con alta supresión de vibraciones. El sensor de 6 ejes combina un giroscopio triaxial de 16 bits y un acelerómetro triaxial de 16 bits. Especialmente, puedes usar este sensor en aplicaciones de drones y robótica en entornos exigentes.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html)

## Características

- El BM1088 está diseñado para drones, robótica y aplicaciones industriales con requisitos de rendimiento desafiantes.
- Amplio rango de medición de aceleración (hasta 24g)
- El acelerómetro presenta un TCO bajo de 0.2 mg/K y ruido espectral bajo de solo 230 pg/sqrt(Hz) en el rango de medición más amplio de ± 24 g

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Rango de medición y sensibilidad|**Acelerómetro** : ±3g @10920 LSB/g / ±6g @5460 LSB/g / ±12g @2730 LSB/g / ±24g @1365 LSB/g / **Giroscopio** : ±125°/s @262.1 LSB/°/s / ±250°/s @131.1 LSB/°/s / ±500°/s @65.5 LSB/°/s / ±1000°/s @32.8 LSB/°/s / ±2000°/s @16.4 LSB/°/s|
|Rango de Temperatura de Operación|-40℃ ~ +85℃|
|Desplazamiento Cero|**Acelerómetro** : ±30 mg **Giroscopio**: ±1°/s|
|TCO|**Acelerómetro** :±0.2 mg/K **Giroscopio**: ±0.015°/s/K|
|Interfaz externa| I^2^C|
|Dirección I^2^C|              **Acelerómetro**: 0x19        (predeterminada) \\   0x18(opcional)   **Giroscopio**:  ±1°/s0x69(predeterminada) \\  0x68(opcional)|

## Aplicaciones Típicas

- Drones y juguetes voladores
- Robots industriales, hoverboards
- Aplicaciones domésticas (p. ej. aspiradoras, robots sociales, etc.)

## Descripción General del Hardware

### Distribución de Pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### Esquemático

**Alimentación**

<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

El rango de voltaje de operación del BMI088 es de 2.4-3.6V, por lo que utilizamos el chip [XC6206P30](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para proporcionar un estable 3.0V. La entrada del XC6206P30 va desde 1.8V hasta 6.0V, por lo que puedes usar este módulo con tu Arduino tanto en 3.3V como en 5V.

**Circuito de desplazador de nivel bidireccional**
<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg" alt="pir" width={600} height="auto" /></p>

Este es un circuito típico de desplazador de nivel bidireccional para conectar dos secciones de voltaje diferentes de un bus I^2^C. El bus I<sup>2</sup>C de este sensor usa 3.3V, si el bus I<sup>2</sup>C del Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q1** y **Q2** son MOSFET de canal N [CJ2102](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/CJ2102.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove (BMI088) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - 6-Axis Accelerometer&Gyroscope(BMI088) al puerto **I^2^C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove   | Grove (BMI088) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| SDA            | Blanco             | SDA |
| SCL            | Amarillo           | SCL |

#### Software

:::note
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Seeed_BMI088](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove 6-Axis Accelerometer&Gyroscope --> BM1088_Example**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>
    2. Ábrelo en tu computadora haciendo clic en **BM1088_Example.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Grove_6Axis_Accelerometer_And_Gyroscope_BMI088-master\examples\BMI088_Example**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

 3. O, simplemente puedes hacer clic en el icono
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)   -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
 en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp

#include "BMI088.h"

float ax = 0, ay = 0, az = 0;
float gx = 0, gy = 0, gz = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    Serial.begin(115200);
    
    while(!Serial);
    Serial.println("BMI088 Raw Data");
    
    while(1)
    {
        if(bmi088.isConnection())
        {
            bmi088.initialize();
            Serial.println("BMI088 is connected");
            break;
        }
        else Serial.println("BMI088 is not connected");
        
        delay(2000);
    }
}

void loop(void)
{    
    bmi088.getAcceleration(&ax, &ay, &az);
    bmi088.getGyroscope(&gx, &gy, &gz);
    temp = bmi088.getTemperature();
    
    Serial.print(ax);
    Serial.print(",");
    Serial.print(ay);
    Serial.print(",");
    Serial.print(az);
    Serial.print(",");
    
    Serial.print(gx);
    Serial.print(",");
    Serial.print(gy);
    Serial.print(",");
    Serial.print(gz);
    Serial.print(",");
    
    Serial.print(temp);
    
    Serial.println();
    
    delay(50);
}
```

:::note
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::success
     Si todo va bien, cuando abras el Monitor Serie, puede mostrarse como se indica a continuación:
:::

```cpp
BMI088 Raw Data
BMI088 is connected
394.41,-383.06,818.66,1.71,-4.88,-2.93,27
390.20,-385.25,830.38,5.49,0.24,1.83,27
388.37,-380.31,826.54,0.73,2.93,7.57,27
395.51,-384.16,823.79,-0.85,-5.74,5.98,27
385.80,-386.72,824.52,3.78,-5.00,1.59,27
395.51,-384.52,824.71,1.46,3.17,10.86,27
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 6-Axis Accelerometer&Gyroscope(BMI088) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip)

- **[Zip]** [Librería Seeed BMI088](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088/archive/master.zip)

- **[PDF]** [Hoja de Datos BMI088](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/BMI088.pdf)

- **[PDF]** [HOJA DE DATOS XC6206](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<iframe width={560} height={315} src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
