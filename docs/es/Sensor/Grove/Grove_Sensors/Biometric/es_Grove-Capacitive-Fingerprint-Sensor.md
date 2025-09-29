---
description: Grove - Escáner/Sensor de Huellas Dactilares Capacitivo
title: Grove - Escáner/Sensor de Huellas Dactilares Capacitivo
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Capacitive-Fingerprint-Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-connect.jpg" /></div>

El Grove - Escáner/Sensor de Huellas Dactilares Capacitivo está basado en el módulo de reconocimiento de huellas dactilares semiconductor KCT203, que incluye un MCU de alto rendimiento, un sensor de huellas dactilares vertical tipo RF push, y un dispositivo de detección táctil. Este módulo presenta muchas ventajas como tamaño pequeño, plantilla de huella dactilar pequeña, bajo consumo de energía, alta confiabilidad, reconocimiento rápido de huellas dactilares, etc. Además, vale la pena mencionar que hay una hermosa luz RGB alrededor de este módulo para indicar si el reconocimiento de huellas dactilares es exitoso.

El sistema está equipado con un algoritmo de huellas dactilares de alto rendimiento, y la función de auto-aprendizaje es notable. Después de cada reconocimiento exitoso de huella dactilar, los valores de características de desafío más recientes pueden integrarse en la base de datos de huellas dactilares para mejorar continuamente las características de las huellas dactilares, haciendo la experiencia mejor.

Agregamos el circuito de cambio de nivel de potencia en la placa controladora Grove para que este módulo pueda trabajar con sistemas de 3.3V y 5V. Y con la ayuda del conector UART Grove y la biblioteca de Arduino que ofrecemos, puedes construir tu propio sensor/escáner de huellas dactilares Arduino fácilmente.

Ya hemos lanzado el sensor óptico de huellas dactilares Grove, esta vez te traemos el Grove - Escáner/Sensor de Huellas Dactilares Capacitivo. Entonces, ¿cuál es la diferencia? Bueno, te mostramos los méritos y deméritos de ambos sensores para que puedas elegir el mejor para satisfacer tus necesidades.

Producto|Ventaja|Desventaja
-----|-----|----
[Grove - Escáner/Sensor de Huellas Dactilares Capacitivo](https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html)|Puede identificar características biológicas, solo identifica cuerpos vivos, alta seguridad, tamaño pequeño, bajo consumo de energía, alta precisión|Pobre resistencia a la abrasión, fácilmente susceptible al sudor, manchas, desgaste de dedos, etc.
[Grove - Sensor Óptico de Huellas Dactilares](https://www.seeedstudio.com/Grove-Fingerprint-Sensor.html)|Fuerte resistencia a la abrasión, buena adaptabilidad ambiental, y buena estabilidad|Tamaño grande, alto consumo de energía, y precisión relativamente baja, no puede identificar el cuerpo vivo, baja seguridad

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Almacenamiento interno de 2KByte: soporta hasta 100 huellas dactilares
- Poderosa función de auto-aprendizaje: mientras más lo uses, más preciso es el reconocimiento
- Nivel de seguridad seleccionable
- Tamaño pequeño, bajo consumo de energía, 10uA para modo de espera

Los nuevos sensores tienen algoritmos internos actualizados para mejorar la precisión del reconocimiento, pero las bibliotecas y códigos utilizados no han cambiado.

## Aplicaciones

- Dispositivos de cerradura con huella dactilar: cerraduras de puertas, cajas fuertes, cerraduras de volante, candados, cerraduras de armas, etc.
- Registro de huella dactilar, sistema de control de acceso

## Especificaciones

|Parámetro|Valor|
|---|---|
|CPU|GD32|
|Almacenamiento de Plantillas de Huella Dactilar|Máx. 100|
|Conector|Grove UART|
|Resolución del Sensor|508 DPI|
|Píxeles del Sensor|160*160|
|Tasa de Falso Rechazo|&lt;1%|
|Tasa de Falsa Aceptación|&lt;0.005%|
|Tiempo de Respuesta de Coincidencia (Modo 1:N)|&lt;350ms|
|Tiempo de Respuesta de Coincidencia (Modo 1:1)|&lt;7ms|
|Tamaño del Sensor|Φ14.9mm|
|Tamaño del Marco|Φ19mm|
|Consumo de Energía|Velocidad completa: ≤40 mA; Suspensión: ≤12uA|
|Voltaje de Operación|3.3V/5V|
|Temperatura de Operación|-20~70℃|
|Protección ESD|Sin contacto 15KV, contacto 8KV|

## Distribución de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-pin.jpg" /></div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

| Seeeduino V4.2 | Base Shield | Grove - Capacitive Fingerprint Scanner/Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove - Capacitive Fingerprint Scanner/Sensor al puerto **D2** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/connect.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Capacitive Fingerprint Scanner/Sensor |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| D3             | Blanco             | RX  |
| D2             | Amarillo           | TX  |

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Seeed_Arduino_KCT202](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Seeed_Arduino_KCT202 --> full_process**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/path.jpg" /></div>

    2. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp

/*

    Copyright (c) 2019 Seeed Technology Co., Ltd.
    Website    : www.seeed.cc
    Author     : downey
    Create Time: Jun 2019
    Change Log :

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#elif defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
    #define uart Serial
    FingerPrint_KCT202<Uart, Serial_> kct202;
#elif defined(ARDUINO_ARCH_SAMD)
    #define debug  SerialUSB
    #define uart Serial1
    FingerPrint_KCT202<Uart, Serial_> kct202;
#else
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#endif


Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

void setup(void) {
    debug.begin(115200);
    kct202.begin(uart, debug);
}

uint16_t finger_num;
void loop() {
    //The first param is the finger-print ID to check.
    //if set 0xffff,indicates that search for all the finger-print templates and try to match.
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                                 LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    debug.println(" ");
    debug.println("Please put your finger on the touchpad.");
    debug.println("To verify your finger print.");
    debug.println(" ");
    debug.println(" ");
    debug.println(" ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
        debug.println("Verify ok!");
        debug.print("Your finger temp id = ");
        debug.println(finger_num, HEX);
    }
    delay(2000);
}
```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses la primera forma.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

- **Paso 6.** Por favor pon tu dedo en el panel táctil.

:::tip
Si todo va bien, cuando abras el Monitor Serie, puede mostrarse como se indica a continuación:
:::

```cpp
Usage:
    Please put your finger on the touchpad
    Repeat for 4 times or pressed continuously
 
 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.0.0.0.C. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.1.0.E. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.1.0.F. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.2.0.F. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.2.0.10. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.3.0.10. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.3.0.11. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.4.0.11. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.4.0.12.EF.1.FF.FF.FF.FF.7.0.5.0.4.F0.1.0.EF.1.FF.FF.FF.FF.7.0.5.0.5.F1.1.2.EF.1.FF.FF.FF.FF.7.0.5.0.6.F2.1.4. 
 
Register ok!
Uart===> : EF.1.FF.FF.FF.FF.1.0.8.32.0.FF.FF.0.7.2.40. 
 
 
Please put your finger on the touchpad.
To verify your finger print.
 
 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.0.0.0.0.0.0.F. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.1.0.0.0.0.0.10. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.5.0.1.0.64.0.79. 
 
Verify ok!
Your finger temp id = 1
Uart===> : EF.1.FF.FF.FF.FF.1.0.3.D.0.11. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.3.0.0.A. 
 
Operation succed.
Delete ok!
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/reg/Grove-Capacitive-Fingerprint-Scanner_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Archivo eagle del Escáner/Sensor de Huellas Dactilares Capacitivo](https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/res/Grove-Capacitive-Fingerprint-Scanner_SCH&PCB.zip)

- **[Zip]** [Grove - Código del Escáner/Sensor de Huellas Dactilares Capacitivo](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202/archive/master.zip)

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
