---
title: Grove-Doppler-Radar
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Doppler-Radar/
slug: /Grove-Doppler-Radar
sku: 109020021
last_update:
  date: 05/28/2026
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/Grove-Doppler-Radar/
---

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

¿Cómo construirías un sistema que pudiera calcular la distancia hacia un objeto o detectar si hay movimiento presente? Normalmente usarías un sensor ultrasónico o LiDAR para la medición de distancia y un sensor de movimiento PIR para la detección de movimiento. ¿Y si te dijéramos que hay un módulo todo en uno que puede realizar todas estas funciones con mayor precisión y también funciones como la detección de velocidad de objetos en movimiento y la detección de ángulo de objetos? ¿Lo creerías? Estábamos cansados de usar estos módulos tradicionales para aplicaciones de detección de movimiento y queríamos ofrecerte una mejor solución, integrando nuevas tecnologías. Pues bien… Por primera vez en la historia de Grove, ¡estamos muy emocionados de traerte un módulo Grove basado en tecnología de radar!

Este es el Grove – Doppler Radar.

El Grove – Doppler Radar está basado en el BGT24LTR11 Silicon Germanium MMIC, que es un transceptor de radar de 24GHz. Está controlado por un MCU XMC1302 basado en Arm® Cortex®-M0. Viene en un paquete compacto y funciona con un consumo de energía muy bajo, proporcionando mediciones de alta precisión. La alta frecuencia de este módulo permite una gran penetración a través de objetos y, por lo tanto, este módulo no necesita estar expuesto al exterior al desplegarlo, sino que puede colocarse detrás de un objeto. Esto, a su vez, es extremadamente útil en sistemas de seguridad. Además, puede operar en condiciones climáticas adversas como altas temperaturas, polvo y lluvia.

## Características

- El primer sensor basado en radar de la familia Grove
- Tamaño compacto para un fácil despliegue
- Diseño ligero, adecuado para aplicaciones en UAV
- Bajo consumo de energía para un uso prolongado
- MMIC transceptor de 24GHz para mediciones de alta precisión
- Respuesta rápida mediante ondas electromagnéticas
- Protección ESD para evitar fallos del sistema causados por descargas ESD
- Alta penetración que permite desplegarlo detrás de un objeto
- Mantiene la operación en condiciones climáticas adversas (temperatura, luz, polvo, lluvia)

## Especificaciones

|Elemento|Valor|
|---|---|
|MMIC |BGT24LTR11|
|MCU |XMC1302 Arm® Cortex®-M0|
|Frecuencia de transmisión |Mín: 24GHz|
|Típica|21.125GHz|
|Máx|24.25GHz|
|Potencia de salida (EIRP) |7dBm @ 25°C|
|Tiempo de actualización| 300ms|
|Interfaz de comunicación |UART (115200)|
|Distancia de detección |10m @ 0dBsm|
|Campo de detección estándar|65° / horizontal (-6dB); 22° / vertical (-6dB)|
|Voltaje de alimentación |3.3-5V|
|Peso|5g|

## Aplicaciones

- Hogar inteligente
- Edificio inteligente
- Puerta automática
- Control de iluminación
- Robótica industrial
- Sistemas de alarma contra intrusos
- UAV

### ¿Cómo funciona la tecnología de radar Doppler en este módulo?

El radar Doppler funciona enviando un haz de ondas de radiación electromagnética desde el transmisor (antena TX), con una frecuencia precisa, hacia un objeto en movimiento. Una vez que la onda de radiación electromagnética entra en contacto con un objeto, viaja de regreso hacia el receptor (antena RX). Sin embargo, cuando la onda se refleja en el objeto en movimiento, la onda ahora tiene una frecuencia diferente en comparación con la frecuencia original que emitió. Entonces, el cambio en esta frecuencia se puede usar para calcular la velocidad del objeto en movimiento.

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png)

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeros pasos

#### Materiales requeridos

| Seeeduino XIAO | Grove-Doppler-Radar| Placa de expansión XIAO|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png)
|[Consigue uno ahora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Próximamente](https://www.seeedstudio.com/)|

#### Descripción general del hardware

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png)

#### Descripción de los pines de los encabezados externos

|Número de pin|Nombre de señal|Descripción de pin|
|---|---|----|
|1| DIV_OUT |Salida del divisor de frecuencia desde el BGT24LTR11 |
|2|GND|Tierra|
|3|VCC_5V_EXT|Pin de alimentación de entrada externa +5.0V (máximo=5.5V)|
|4|VTUNE|Voltaje de sintonización de frecuencia VCO|
|5|IFQ_HG|Salida de señal analógica del canal Q del BGT24LTR11 - segunda etapa de ganancia|
|6|IFI_HG|Salida de señal analógica del canal I del BGT24LTR11 - segunda etapa de ganancia|
|7|PWM_OUT|GPIO configurable externamente por el usuario con CCU4|
|8|OUT1|Pin GPIO externo (configurable por el usuario)|
|9|OUT2|Pin GPIO externo (configurable por el usuario)|

#### Conexión de hardware

![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg)

:::tip
    Conecta suavemente el cable USB y la interfaz del Doppler Radar en la interfaz de la placa de expansión Seeeduino XIAO, de lo contrario podrías dañar el puerto.

- **Paso 1.** Conecta el Doppler Radar a la placa de expansión Seeeduino XIAO con un cable Grove.

- **Paso 2.** Conecta Seeeduino XIAO al PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Serial Monitor** en tu Arduino IDE.

:::

#### Software

:::tip
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga el [código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip).

- **Paso 2.** Copia el archivo completo **Seeed_Arduino_DopplerRadar** y pégalo en la carpeta de librerías de tu Arduino IDE.

- **Paso 3.** Abre el archivo **BGT24LTR11_DETECTION_TARGET** con tu Arduino IDE.

- **Paso 4.** Carga la demostración. Si no sabes cómo cargar el código, por favor revisa [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

#### Código de software

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
  Si todo va bien, puedes ir al **Serial Monitor** para ver un resultado como el siguiente:
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

## Recursos

- **[ZIP]** [Librería de código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)

## Soporte técnico y debate sobre el producto

 si tienes algún problema técnico, envía el problema a nuestro [forum](http://forum.seeedstudio.com/).

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
