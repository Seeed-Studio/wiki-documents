---
description: Grove Shield para Seeed Studio XIAO con chip de gestión de batería integrado
title: Grove Shield para XIAO con chip de gestión de batería
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
sku: 103020312
last_update:
  date: 7/17/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-07-20'
url: https://wiki.seeedstudio.com/es/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## Descripción general

Seeed Studio Grove Base para XIAO es una placa de extensión Grove plug-and-play para **[Seeed Studio XIAO](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/)**. Con el chip de gestión de batería integrado y la almohadilla de conexión de la batería, puedes alimentar fácilmente tu Seeed Studio XIAO con una batería de litio y recargarla. Los 8 conectores Grove integrados incluyen dos Grove I2C y uno UART. Actúa como un puente entre Seeed Studio XIAO y el sistema Grove de Seeed. La almohadilla de conexión Flash SPI te permite añadir memoria Flash a Seeed Studio XIAO para ampliar su espacio de memoria, proporcionando a Seeed Studio XIAO más posibilidades.

Con el chip de gestión de batería integrado y la almohadilla de conexión de la batería, puedes alimentar fácilmente tu Seeed Studio XIAO con una batería de litio de 3,7 V y recargarla, haciendo que tus proyectos, especialmente los wearables, sean más flexibles y portátiles. Incluso puedes partir la placa a través de las perforaciones de la PCB integradas según tus necesidades reales del proyecto (solo 25*39 mm de dimensión después de partirla), haciéndola aún más pequeña y reduciendo también el peso de 13 g a 10 g.
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

Como placa de extensión, la Seeed Studio Grove Base para XIAO también saca todos los 14 pines de Seeed Studio XIAO, y su interruptor de encendido integrado y el indicador de estado de carga la hacen más fácil de usar. El Shield incluso reserva la almohadilla de conexión para SPI-Flash para desarrolladores avanzados que puedan necesitar añadir Flash a Seeed Studio XIAO para ampliar su espacio de memoria, proporcionando a Seeed Studio XIAO más posibilidades.

Con el factor de forma de Seeed Studio XIAO, todas las placas Seeed Studio XIAO son compatibles tanto con el [Grove Shield for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) como con la [Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Hay una ligera diferencia entre los pines y, consultando el Pinout, es fácil de gestionar.

:::note
Este producto no incluye una placa Seeed Studio XIAO, haz clic [here](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) si necesitas una.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

#### Descripción de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### Descripción del pinout

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## Características

- Función integrada de carga y gestión de batería de litio
- Conectores Grove ( Grove IIC x 2, Grove UART x 1 ), los 14 GPIO sacados
- Diseño compacto y separable
- Almohadilla de conexión Flash SPI reservada
- Interruptor de encendido integrado e indicador luminoso de estado de carga

## Especificaciones

|Elemento|Valor|
|---|---|
|Tensión de funcionamiento|3,3 V / batería de litio de 3,7 V|
|Capacidad de carga|800 mA|
|Corriente de carga| 500 mA (máx.)|
|Temperatura de funcionamiento|- 40°C a 85°C|
|Temperatura de almacenamiento|-55°C a 150°C|
|Interfaz Grove|I2C *2 / UART* 1|

## Aplicaciones

- Dispositivos wearables
- Prototipado rápido
- Pruebas de módulos Grove
- Proyectos que requieren tamaño reducido

## Plataformas compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeros pasos

### Materiales necesarios

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base para XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1. -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Descripción de los pines de los encabezados externos para Grove-Doppler Radar

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

|Número de pin|Nombre de señal|Descripción del pin|
|---|---|----|
|1| DIV_OUT |Salida del divisor de frecuencia desde el BGT24LTR11 |
|2|GND|Tierra|
|3|VCC_5V_EXT|Pin de alimentación de entrada externa +5,0 V (máximo = 5,5 V)|
|4|VTUNE|Tensión de ajuste de frecuencia del VCO|
|5|IFQ_HG|Salida de señal analógica del canal Q del BGT24LTR11 - segunda etapa de ganancia|
|6|IFI_HG|Salida de señal analógica del canal I del BGT24LTR11 - segunda etapa de ganancia|
|7|PWM_OUT|GPIO configurable externamente por el usuario con CCU4|
|8|OUT1|Pin GPIO externo (configurable por el usuario)|
|9|OUT2|Pin GPIO externo (configurable por el usuario)|

### Conexión de hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
Conecta suavemente el cable USB y la interfaz del Doppler Radar a la interfaz de la placa de expansión Seeed Studio XIAO, de lo contrario podrías dañar el puerto.
:::

- **Paso 1.** Conecta el Doppler Radar a la placa de expansión Seeed Studio XIAO con un cable Grove.

- **Paso 2.** Conecta Seeed Studio XIAO al PC mediante un cable USB.

- **Paso 3.** Descarga el código, consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Serial Monitor** en tu Arduino IDE.

### Software

:::note
Si es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga el [código de demostración](https://github.com/Seeed-Studio/Seeed_Arduino_DopplerRadar).

- **Paso 2.** Copia todo el archivo **Seeed_Arduino_DopplerRadar** y pégalo en la carpeta de librerías de tu Arduino IDE.

- **Paso 3.** Abre el archivo **BGT24LTR11_DETECTION_TARGET** con tu Arduino IDE.

- **Paso 4.** Sube la demo. Si no sabes cómo subir el código, consulta [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

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
La precisión mínima de velocidad que el sensor es capaz de detectar es de 52 cm/s, lo que equivale a 0,52 m/s, 3,6 km/h y 2,23 mph. Además, los resultados devueltos por la función getSpeed() son múltiplos de 52 cm/s y son valores absolutos en consecuencia.
:::

## Recursos

- **[ZIP]** [Biblioteca de código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) Protocolo de comunicación del módulo de radar v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [Hoja de datos ETA 3410](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)
- **[ZIP]** [Grove Shield para Seeeduino XIAO v1.2 SCH y PCB (KiCad)](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.2_KiCad_SCH_PCB.zip)
- **[PDF]** [Esquemático de Grove Shield para Seeeduino XIAO v1.0](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0_SCH.pdf)

## Proyecto

<p><div class="video-container">
<iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
</div></p>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
