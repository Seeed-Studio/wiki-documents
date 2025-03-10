---
description: Grove Shield for Seeed Studio XIAO with embedded battery management chip
title: Grove Shield para XIAO con chip administrador de batería
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
last_update:
  date: 02/16/2025
  author: Guillermo
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## Resumen

La base Grove para XIAO de Seeed Studio es una placa de expansión plug-and-play para **[Seeed Studio XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO/)**. Con el chip de gestión de batería integrado y la almohadilla de soldadura para batería, puedes alimentar fácilmente tu Seeed Studio XIAO con una batería de litio y recargarla. La placa cuenta con 8 conectores Grove, incluyendo dos Grove I2C y uno UART. Actúa como un puente entre el Seeed Studio XIAO y el sistema Grove de Seeed. La almohadilla de soldadura Flash SPI permite agregar Flash al Seeed Studio XIAO para ampliar su espacio de memoria, ofreciendo más posibilidades para el XIAO.

Con el chip de gestión de batería integrado y la almohadilla de soldadura para batería, puedes alimentar tu Seeed Studio XIAO con una batería de litio de 3.7V y recargarla, lo que hace que tus proyectos, especialmente los portátiles, sean más flexibles y fáciles de transportar. Incluso puedes romper la placa a través de los orificios de estampado de PCB integrados según las necesidades de tu proyecto (solo 25 * 39 mm de dimensión después de romperla), reduciendo su tamaño y peso de 13 g a 10 g.

<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

Como placa de expansión, la base Grove para XIAO de Seeed Studio también expande todos los 14 pines del Seeed Studio XIAO, y su interruptor de encendido integrado y la luz indicadora de estado de carga la hacen más fácil de usar. La placa incluso reserva la almohadilla de soldadura SPI-Flash para desarrolladores avanzados que puedan necesitar agregar Flash al Seeed Studio XIAO para ampliar su espacio de memoria, proporcionando más posibilidades al XIAO.

Debido a su formato, todas las placas Seeed Studio XIAO son compatibles tanto con el [Grove Shield para XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) como con la [placa de expansión Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Existe una pequeña diferencia entre los pines, pero con la referencia al Pinout es fácil gestionarlos.

:::note
Este producto no incluye una placa Seeed Studio XIAO. Si necesitas una, haz clic [aquí](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html).
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

#### Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### Descripción del Pinout

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## Características

- Función de carga y gestión de batería de litio a bordo
- Conectores Grove (Grove IIC x 2, Grove UART x 1), todas las 14 salidas GPIO disponibles
- Diseño compacto y desmontable
- Pad de unión SPI para flash reservado
- Interruptor de encendido y luz indicadora de estado de carga a bordo

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de operación|3.3V / Batería de litio 3.7V|
|Capacidad de carga|800mA|
|Corriente de carga|400mA (Máx)|
|Temperatura de operación|-40°C a 85°C|
|Temperatura de almacenamiento|-55°C a 150°C|
|Interfaz Grove|I2C *2 / UART* 1|

## Aplicaciones

- Dispositivos portátiles
- Prototipado rápido
- Pruebas de módulos Grove
- Proyectos que requieren un tamaño pequeño

## Plataformas soportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Empezando

### Materiales requeridos

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base para XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[Consigue uno ahora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1. -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Descripción de pines del encabezado externo para Grove-Doppler Radar

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>



|Número de pin|Nombre de señal|Descripción del pin|
|---|---|---|
|1|DIV_OUT|Salida del divisor de frecuencia del BGT24LTR11|
|2|GND|Tierra|
|3|VCC_5V_EXT|Pin de suministro de energía de entrada externa +5.0V (máximo = 5.5V)|
|4|VTUNE|Voltaje de sintonización de frecuencia del VCO|
|5|IFQ_HG|Salida de señal analógica del canal Q del BGT24LTR11 - segunda etapa de ganancia|
|6|IFI_HG|Salida de señal analógica del canal I del BGT24LTR11 - segunda etapa de ganancia|
|7|PWM_OUT|GPIO configurable por el usuario con CCU4|
|8|OUT1|Pin GPIO externo (configurable por el usuario)|
|9|OUT2|Pin GPIO externo (configurable por el usuario)|

### Conexión de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
Por favor, conecta suavemente el cable USB y la interfaz del radar Doppler a la interfaz de la placa de expansión Seeed Studio XIAO, de lo contrario, podrías dañar el puerto.
:::

- **Paso 1.** Conecta el radar Doppler a la placa de expansión Seeed Studio XIAO con un cable Grove.

- **Paso 2.** Conecta la placa Seeed Studio XIAO al PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Monitor Serial** de tu IDE de Arduino.

### Software

:::note
Si es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga el [código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.rar).

- **Paso 2.** Copia todo el archivo **Seeed_Arduino_DopplerRadar** y pégalo en la carpeta de bibliotecas de tu IDE de Arduino.

- **Paso 3.** Abre el archivo **BGT24LTR11_DETECTION_TARGET** con tu IDE de Arduino.

- **Paso 4.** Sube el demo. Si no sabes cómo cargar el código, por favor consulta [Cómo cargar código](https://wiki.seeedstudio.com/Upload_Code/).

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
    // pon tu código de configuración aquí, para que se ejecute una vez:
    ShowSerial.begin(9600);
    COMSerial.begin(115200);
    GBT.init(COMSerial);
    while (!ShowSerial)
        ;
    while (!COMSerial)
        ;
    /*
        MODO 0 --> modo de detección de objetivo
        MODO 1 --> modo ADC I/Q
    */
    while (!GBT.setMode(0))
        ;
}

void loop() {
    // pon tu código principal aquí, para que se ejecute repetidamente:
    uint16_t state = 0;
    ShowSerial.print("velocidad del objetivo:");
    ShowSerial.println(GBT.getSpeed());
    state = GBT.getTargetState();
    // 2 --> el objetivo se acerca
    // 1 --> el objetivo se aleja
    // 0 --> Objetivo no encontrado
    if (state == 2) {
        ShowSerial.println("el objetivo se acerca");
    } else if (state == 1) {
        ShowSerial.println("el objetivo se aleja");
    }
    delay(200);
}
```

:::success
  Si todo va bien, puedes ir a **Monitor Serial** para ver un resultado como el siguiente:
:::
<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>Figure 3</b>. <i> No object approaching</i></figcaption>
  </figure>
</div>

Y si hay un objeto acercándose al radar o pasando cerca, el resultado cambiará como se muestra a continuación.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b>Figure 3</b>. <i>Object approaching</i></figcaption>
  </figure>
</div>

:::note
La precisión mínima de velocidad que el sensor es capaz de detectar es de 52 cm/s, lo que equivale a 0.52 m/s, 3.6 km/h y 2.23 mph. Además, los resultados devueltos por la función getSpeed() son múltiplos de 52 cm/s y son valores absolutos en consecuencia.
:::

## Visor esquemático en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Adjunto de Seeed Studio Grove Base para XIAO](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar)
- **[ZIP]** [Biblioteca del código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) Protocolo de comunicación del módulo radar v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [Ficha técnica ETA 3410](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## Proyecto

<p><iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe></p>

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
