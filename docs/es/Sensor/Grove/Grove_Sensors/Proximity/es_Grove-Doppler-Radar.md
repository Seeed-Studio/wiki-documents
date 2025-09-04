---
title: Grove-Doppler-Radar
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Doppler-Radar/
slug: /es/Grove-Doppler-Radar
last_update:
  date: 01/04/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

¿Cómo construirías un sistema que pudiera calcular la distancia hacia un objeto o detectar si hay movimiento presente? Normalmente usarías un Sensor Ultrasónico o LiDAR para medición de distancia y un Sensor de Movimiento PIR para detección de movimiento. ¿Qué pasaría si te dijéramos que hay un módulo todo-en-uno que podría realizar todas estas funciones con mayor precisión y también realizar funciones como detección de velocidad de objetos en movimiento y detección de ángulo de objetos? ¿Lo creerías? Estábamos cansados de usar estos módulos tradicionales para aplicaciones de detección de movimiento y queríamos ofrecerte una mejor solución, integrando nuevas tecnologías. Bueno... ¡Por primera vez en la historia de Grove, estamos muy emocionados de traerte un Módulo Grove basado en Tecnología de Radar!

Este es el Grove – Doppler Radar.

El Grove – Doppler Radar está basado en el BGT24LTR11 Silicon Germanium MMIC que es un transceptor de radar de 24GHz. Es impulsado por un MCU XMC1302 basado en Arm® Cortex®-M0. Viene en un paquete compacto y funciona con muy bajo consumo de energía, proporcionando mediciones de alta precisión. La alta frecuencia de este módulo permite una alta penetración a través de objetos y por lo tanto este módulo no necesita estar expuesto al exterior al desplegarlo, sino detrás de un objeto. Esto, a su vez, es extremadamente útil en sistemas de seguridad. Además, es capaz de operar en condiciones climáticas adversas como altas temperaturas, polvo y lluvia.

## Características

- El primer sensor basado en radar en la Familia Grove
- Tamaño compacto para fácil despliegue
- Diseño ligero, adecuado para aplicaciones UAV
- Bajo consumo de energía para uso prolongado
- Transceptor MMIC de 24GHz para mediciones de alta precisión
- Respuesta rápida usando ondas electromagnéticas
- Protección ESD para evitar fallas del sistema causadas por descargas ESD
- Alta penetración que permite desplegarlo detrás de un objeto
- Mantiene la operación a través de condiciones climáticas adversas (temperatura, luz, polvo, lluvia)

## Especificaciones

|Elemento|Valor|
|---|---|
|MMIC |BGT24LTR11|
|MCU |XMC1302 Arm® Cortex®-M0|
|Frecuencia de Transmisión |Mín: 24GHz|
|Típica|21.125GHz|
|Máx|24.25GHz|
|Potencia de Salida (EIRP) |7dBm @ 25°C|
|Tiempo de Actualización| 300ms|
|Interfaz de Comunicación |UART (115200)|
|Distancia de Detección |10m @ 0dBsm|
|Campo de Detección Estándar|65° / horizontal (-6dB); 22° / vertical (-6dB)|
|Voltaje de Alimentación |3.3-5V|
|Peso|5g|

## Aplicaciones

- Hogar Inteligente
- Edificio Inteligente
- Puerta Automática
- Control de Iluminación
- Robótica Industrial
- Sistemas de Alarma contra Intrusos
- UAV

### ¿Cómo Funciona la Tecnología de Radar Doppler en Este Módulo?

El radar Doppler funciona enviando un haz de ondas de radiación electromagnética desde el transmisor (Antena TX), con una frecuencia precisa, hacia un objeto en movimiento. Una vez que la onda de radiación electromagnética entra en contacto con un objeto, viaja de vuelta hacia el receptor (Antena RX). Sin embargo, cuando la onda se refleja desde el objeto en movimiento, la onda ahora tiene una frecuencia diferente comparada con la frecuencia original que emitió. Entonces el cambio en esta frecuencia puede ser usado para calcular la velocidad del objeto en movimiento.

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png)

## Plataforma Soportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

#### Materiales Requeridos

| Seeeduino XIAO | Grove-Doppler-Radar| XIAO Expansion Board|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Próximamente](https://www.seeedstudio.com/)|

#### Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

#### Descripción de pines de conectores externos

|Número de pin|Nombre de señal|Descripción del pin|
|---|---|----|
|1| DIV_OUT |Salida del divisor de frecuencia del BGT24LTR11 |
|2|GND|Tierra|
|3|VCC_5V_EXT|Pin de alimentación de entrada externa +5.0V (máximo=5.5V)|
|4|VTUNE|Voltaje de sintonización de frecuencia VCO|
|5|IFQ_HG|Salida de señal analógica del canal Q del BGT24LTR11 - segunda etapa de ganancia|
|6|IFI_HG|Salida de señal analógica del canal I del BGT24LTR11 - segunda etapa de ganancia|
|7|PWM_OUT|GPIO externo configurable por el usuario con CCU4|
|8|OUT1|Pin GPIO externo (configurable por el usuario)|
|9|OUT2|Pin GPIO externo (configurable por el usuario)|

#### Conexión de Hardware

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

:::tip
    Por favor conecta el cable USB, la interfaz del Radar Doppler en la interfaz de la placa de expansión Seeeduino XIAO con cuidado, de lo contrario podrías dañar el puerto.

- **Paso 1.** Conecta el Radar Doppler a la placa de expansión Seeeduino XIAO con un cable Grove.

- **Paso 2.** Conecta el Seeeduino XIAO a la PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Monitor Serie** en tu Arduino IDE.

:::

#### Software

:::tip
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga el [código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip).

- **Paso 2.** Copia todo el archivo **Seeed_Arduino_DopplerRadar** y pégalo en tu archivo de biblioteca del Arduino IDE.

- **Paso 3.** Abre el archivo **BGT24LTR11_DETECTION_TARGET** con tu Arduino IDE.

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

#### Código de Software

```cpp
#include "GBT24LTR11.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    GBT24LTR11<SoftwareSerial> GBT;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    GBT24LTR11<Uart> GBT;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    GBT24LTR11<HardwareSerial> GBT;
#endif

void setup() {
    // put your setup code here, to run once:
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODE 0 -->detection target mode
        MODE 1 -->I/Q ADC mode
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // put your main code here, to run repeatedly:
    uint16_t state = 0;
    ShowSerial.print("target speed:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    //2 --> target approach
    //1 --> target leave
    //0 --> Not Found target
    if (state == 2) {
        ShowSerial.println("target approach");
    } else if (state == 1) {
        ShowSerial.println("target leave");
    }
    delay(200);
}
```

:::success
  Si todo va bien, puedes ir al **Monitor Serie** para ver un resultado como el siguiente:
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 3</b>. <i> Ningún objeto acercándose</i></figcaption>
</figure>
</div>

Y si hay un objeto acercándose al radar o pasando cerca, el resultado cambiará como se muestra a continuación:

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 3</b>. <i>Objeto acercándose</i></figcaption>
</figure>
</div>

:::note
    La precisión mínima de velocidad que el sensor es capaz de detectar es 52cm/s, lo que equivale a 0.52m/s, 3.6km/h y 2.23mph. Además, los resultados devueltos por la función getSpeed() son múltiplos de 52cm/s y son valores absolutos en consecuencia.
:::

## Recursos

- **[ZIP]** [Biblioteca de código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)

## Soporte Técnico y Discusión de Productos

 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
