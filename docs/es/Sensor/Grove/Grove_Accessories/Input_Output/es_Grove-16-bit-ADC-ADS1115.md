---
description: Grove - ADC de 4 Canales de 16 bits (ADS1115)
title: Grove - ADC de 4 Canales de 16 bits (ADS1115)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-16-bit-ADC-ADS1115
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

<!-- ---
name: Grove - 4-Channel 16-bit ADC(ADS1115)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 109020041
--- -->

![](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-45.png)

Para microcontroladores sin convertidor analógico-digital, o cuando necesitas un ADC más preciso. Proporcionamos Grove - ADC de 4 canales de 16 bits (ADS1115), un ADC de 4 canales basado en el ADS1115 de Texas Instruments, que es un chip ADC de 16 bits de alta precisión y bajo consumo. Soporta 4 entradas single-ended o 2 entradas diferenciales. Además, tiene un rango de velocidad de datos programable de 8 SPS a 860 SPS con una ganancia programable interna (hasta x16) para señales pequeñas.

El módulo también contiene un puerto Grove que está conectado internamente a su canal 0 y canal 1, lo que facilita su uso con el Ecosistema Grove.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Amplio rango de alimentación: 2.0V ~ 5.5V, soporta sistemas de 3.3 o 5V
- ADC de alta resolución de 16 bits
- Velocidad de Datos Programable: 8 SPS a 860 SPS
- Ganancia Programable Interna: x16 con referencia de voltaje interna de baja deriva y oscilador
- El PGA incorporado es ajustable en ganancia y puede ser controlado por software
- 4 Entradas Single-Ended o 2 Entradas Diferenciales

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de entrada|3.3V / 5V|
|Resolución ADC| 16 Bit |
|Velocidad de Datos Programable|8SPS - 860 SPS|
|Canales| 4 canales de entrada single-ended o 2 canales de entrada diferencial|
|Interfaz|I2C, Dirección por Defecto: 0x48|

## Descripción General del Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-HW.png"/></div>

## Plataformas Compatibles

|Arduino|Raspberry|ArduPy|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|


:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - 16Bit ADC (ADS1115)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

#### Conexión de Hardware

- **Paso 1.** Conecta Grove - 16 Bit ADC(ADS1115) al puerto **I2C** de Grove - Base Shield.

- **Paso 2.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 3.** Conecta Seeeduino a una PC mediante un cable USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-connect.png"/></div>

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la [Biblioteca Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115) desde Github.

:::note
Consulta Cómo instalar biblioteca para [instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para Arduino.
:::

- **Paso 2.** Reinicia el IDE de Arduino. Abre el ejemplo **Seeed_Arduino_ADS1115** a través de la ruta: **File** → **Examples** → **Grove - ADS1115** → **single_ended**.

El código de ejemplo `single_ended` es el siguiente:

```Cpp
#include "ADS1115.h"

#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    ADS1115<SoftwareWire> ads(myWire);//IIC
#else
    #include <Wire.h>
    ADS1115<TwoWire> ads(Wire);//IIC
#endif

void setup(void)
{
    Serial.begin(115200);
    while(!ads.begin(0x48)){
        Serial.print("ads1115 init failed!!!");
        delay(1000);
    }
    //ads.begin(0x49)
    //ads.begin(0x4A)
    //ads.begin(0x4B)

    ads.setOperateMode(ADS1115_OS_SINGLE);
    ads.setOperateStaus(ADS1115_MODE_SINGLE);

  ads.setPGAGain(ADS1115_PGA_6_144);    // 2/3x gain +/- 6.144V  1 bit =  0.1875mV (default)
    // ads.setPGAGain(ADS1115_PGA_4_096); // 1x gain   +/- 4.096V  1 bit =  0.125mV
    // ads.setPGAGain(ADS1115_PGA_2_048); // 2x gain   +/- 2.048V  1 bit =  0.0625mV
    // ads.setPGAGain(ADS1115_PGA_1_024); // 4x gain   +/- 1.024V  1 bit =  0.03125mV
    // ads.setPGAGain(ADS1115_PGA_0_512); // 8x gain   +/- 0.512V  1 bit =  0.015625mV
    // ads.setPGAGain(ADS1115_PGA_0_256); // 16x gain  +/- 0.256V  1 bit =  0.0078125mV

    ads.setSampleRate(ADS1115_DR_8); //8 SPS
    // ads.setSampleRate(ADS1115_DR_16); //16 SPS
    // ads.setSampleRate(ADS1115_DR_32); //32 SPS
    // ads.setSampleRate(ADS1115_DR_64); //64 SPS
    // ads.setSampleRate(ADS1115_DR_128); //128 SPS
    // ads.setSampleRate(ADS1115_DR_250); //250 SPS
    // ads.setSampleRate(ADS1115_DR_475); //475 SPS
    // ads.setSampleRate(ADS1115_DR_860); //860 SPS
}
void loop(void)
{
    int16_t adc0,adc1,adc2,adc3;
    adc0 = ads.getConversionResults(channel0); //P = AIN0, N = GND
    adc1 = ads.getConversionResults(channel1); //P = AIN1, N = GND
    adc2 = ads.getConversionResults(channel2); //P = AIN2, N = GND
    adc3 = ads.getConversionResults(channel3); //P = AIN3, N = GND
    Serial.print("AIN0: "); Serial.println(adc0);
    Serial.print("AIN1: "); Serial.println(adc1);
    Serial.print("AIN2: "); Serial.println(adc2);
    Serial.print("AIN3: "); Serial.println(adc3);
    Serial.println(" ");
    delay(1000);
}
```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

- **Paso 5.** El resultado debería verse así para 4 canales:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/result.gif"/></div>

:::note
En este ejemplo, se establece una ganancia de 2/3x, por lo que es necesario multiplicar el valor por 0.1875mV. Por ejemplo, 10201 x 0.1875mV = 1.91V.
:::

### Jugar Con Raspberry Pi

### Hardware

| Raspberry Pi | Grove Base Hat para RasPi | Grove - ADC de 16 Bits(ADS1115)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Obtener UNO Ahora](#)|

### Software

El Grove - ADC de 16 bits(ADS1115) tiene el mismo uso que el ADC de 16 Bits de 4 Canales para Raspberry Pi (ADS1115) y por lo tanto sigue los tutoriales [**aquí**](https://wiki.seeedstudio.com/es/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/#getting-started).

### Jugar con Wio Terminal

**Materiales requeridos**

| Wio Terminal | Grove - ADC de 16Bits (ADS1115) | Grove - Sensor de Ángulo Rotatorio|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Obtener UNO Ahora](#)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **Paso 1.** Conecta Grove - ADC de 16 Bits(ADS1115) al puerto **I2C** del Wio Terminal.

- **Paso 2.** Conecta el Wio Terminal a una PC mediante un cable USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115-wt.png"/></div>

#### Software

- **Paso 1.** Descarga la [Librería Seeed Arduino ADS1115](https://github.com/Seeed-Studio/Seeed_Arduino_ADS1115) desde Github.

:::note
Sigue [la guía de inicio del Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/) antes de los siguientes pasos.
:::

- **Paso 2.** Descarga el [**código de ejemplo**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal-ADS1115) aquí.

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Ajusta el sensor rotatorio y verás el voltaje correspondiente en la pantalla LCD del Wio Terminal:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/WT-ADS1115.gif"/></div>

### Jugar Con Wio Terminal (ArduPy)

#### Hardware

- **Paso 1.** Prepara las siguientes cosas:

| Wio Terminal | Grove - ADC de 16 Bits(ADS1115) |
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/109020041-preview.png)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Obtener Uno Ahora](#)|

- **Paso 2.** Conecta Grove - 16 Bit ADC(ADS1115) al puerto **I2C** del Wio Terminal.

- **Paso 3.** Conecta el Wio Terminal a la PC a través del cable USB Type-C.

#### Software

- **Paso 1.** Sigue [**ArduPy Getting Started**](https://wiki.seeedstudio.com/es/ArduPy/) para configurar el entorno de desarrollo ArduPy en el Wio Terminal.

- **Paso 2.** Asegúrate de que el firmware ArduPy con la biblioteca ADS1115 esté flasheado en el Wio Terminal. Para más información, por favor sigue [**aquí**](https://wiki.seeedstudio.com/es/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip install Seeed-Studio/seeed-ardupy-ads1115
aip build
aip flash
```

- **Paso 3.** Copia el siguiente código y guárdalo como `ArduPy-ads1115.py`:

Nota: Para más API, por favor consulta [aquí](https://github.com/Seeed-Studio/seeed-ardupy-ads1115).

```python
from arduino import grove_ads1115
import time

ads = grove_ads1115()
ads.setPGAGain(0x0000)

while True:
    print ("The channel0 value is :", ads.channel0)
    print ("The channel1 value is :", ads.channel1)
    print ("The channel2 value is :", ads.channel2)
    print ("The channel3 value is :", ads.channel3)
    time.sleep(1)
```

- **Paso 4.** Guarda el `ArduPy-ads1115.py` en una ubicación que conozcas. Ejecuta el siguiente comando y **reemplaza** `<YourPythonFilePath>` con la ubicación de tu `ArduPy-ads1115.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
```

- **Paso 5.** Veremos el valor ADC mostrado en la terminal como se muestra a continuación:

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ads1115.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
The channel0 value is : 17487.0
The channel1 value is : 3790.0
The channel2 value is : 3170.0
The channel3 value is : 3122.0
The channel0 value is : 17486.0
The channel1 value is : 3272.0
The channel2 value is : 3064.0
The channel3 value is : 3063.0
The channel0 value is : 17486.0
The channel1 value is : 3482.0
The channel2 value is : 3201.0
The channel3 value is : 3185.0
The channel0 value is : 17487.0
The channel1 value is : 17261.0
The channel2 value is : 5055.0
The channel3 value is : 4480.0
The channel0 value is : 11839.0
The channel1 value is : 3540.0
The channel2 value is : 1690.0
The channel3 value is : 1562.0
```

## Precauciones

:::caution
Cuando uses multicanal en **A0** y **A1** en el terminal de tornillo, recuerda no conectar nada en la Interfaz Grove ya que también están usando A0 y A1. ESTO PUEDE SER PELIGROSO CUANDO SE TRABAJA CON BATERÍAS.
:::

1. Durante el uso, el voltaje máximo **no debe exceder 5.5V**.

2. Cuando uses la adquisición multicanal, la frecuencia de muestreo debe configurarse por encima de 250SPS, de lo contrario la frecuencia de muestreo es demasiado lenta, y existe la posibilidad de que el canal anterior no se convierta, el siguiente canal se inicie, resultando en falla de funcionamiento

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Grove - 16 Bit ADC(ADS1115 Archivos de Esquemáticos)](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/Grove-ADS1115.zip)

- **[PDF]** [Hoja de Datos ADS1115 de Texas Instruments](https://files.seeedstudio.com/wiki/Grove-16bit-ADC-ADS1115/ADS1115.pdf)

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
