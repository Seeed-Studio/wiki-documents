---
description: Shield Grove para Seeed Studio XIAO con chip de gestión de batería integrado
title: Shield Grove para XIAO con chip de gestión de batería
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip
sku: 103020312
last_update:
  date: 1/10/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" alt="pir" width={600} height="auto" /></p>

## Descripción general

La Base Grove de Seeed Studio para XIAO es una placa de extensión Grove plug-and-play para **[Seeed Studio XIAO](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/)**. Con el chip de gestión de batería integrado y la almohadilla de conexión de batería, podrías alimentar fácilmente tu Seeed Studio XIAO con batería de litio y recargarla. 8 conectores Grove integrados incluyen dos Grove I2C y uno UART. Actúa como un puente entre Seeed Studio XIAO y el sistema Grove de Seeed. La almohadilla de conexión Flash SPI te permite añadir Flash a Seeed Studio XIAO para expandir su espacio de memoria, proporcionando a Seeed Studio XIAO más posibilidades.

Con el chip de gestión de batería integrado y la almohadilla de conexión de batería, podrías alimentar fácilmente tu Seeed Studio XIAO con batería de litio de 3.7V y recargarla, haciendo tus proyectos, especialmente los portátiles, más flexibles y portátiles. ¡Incluso podrías romper la placa a través de los orificios de perforación PCB integrados según las necesidades reales de tu proyecto (solo 25*39mm de dimensión después de la rotura), haciéndola más pequeña que pequeña y el peso se reduciría de 13g a 10g también!
<!-- 图有问题 
<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/01.png" border={0} /></a></p> -->

Como placa de extensión, la Base Grove de Seeed Studio para XIAO también extrae los 14 pines de Seeed Studio XIAO, y su interruptor de alimentación integrado y luz indicadora de estado de carga la hace más amigable para el usuario. El Shield incluso reserva la almohadilla de conexión SPI-Flash para un desarrollador avanzado que pueda necesitar añadir Flash a Seeed Studio XIAO para expandir su espacio de memoria, proporcionando a Seeed Studio XIAO más posibilidades.

Como factor de forma de Seeed Studio XIAO, todas las placas Seeed Studio XIAO soportan tanto el [Shield Grove para XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) como la [placa de expansión Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). Hay una ligera diferencia entre los pines y refiriéndose al diagrama de pines es fácil de gestionar.

:::note
Este producto no incluye una placa Seeed Studio XIAO, por favor haz clic [aquí](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) si necesitas una.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

#### Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/hardware-overview.png" border={0} /></p>


#### Descripción del diagrama de pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/pinout.png" border={0} /></p>

## Característica

- Función de Carga y Gestión de Batería de Litio Integrada
- Conectores Grove ( Grove IIC x 2, Grove UART x 1 ), todos los 14 GPIO disponibles
- Diseño Compacto y Separable
- Pad de Conexión SPI Flash Reservado
- Interruptor de Alimentación Integrado y Luz Indicadora de Estado de Carga

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de operación|3.3V / Batería de Litio 3.7V|
|Capacidad de Carga|800mA|
|Corriente de carga| 400mA (Máx)|
|Temperatura de Operación|- 40°C a 85°C|
|Temperatura de Almacenamiento|-55°C a 150°C|
|Interfaz Grove|I2C *2 / UART* 1|

## Aplicaciones

- Dispositivos portátiles
- Prototipado rápido
- Pruebas de módulos Grove
- Proyectos que requieren tamaño pequeño

## Plataforma Soportada

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Materiales Requeridos

| Seeed Studio Seeed Studio XIAO | Grove-Doppler-Radar| Seeed Studio Grove Base for XIAO|
|--------------|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|

<!-- Si necesitas usar la parte posterior del Seeed Studio XIAO Grove Shield que proporciona pads para una memoria Flash en paquete SOIC8, por favor solda el PIN1. -->

<!-- 图有问题<p style={{textAlign: 'center'}}><a href="target=&quot;_blank&quot;"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/Grove-shield-XIAO.png" border={0} /></a></p> -->

#### Descripción de pines de cabeceras externas para Grove-Doppler Radar

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png" alt="pir" width={600} height="auto" /></p>

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

### Conexión de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
Por favor conecta el cable USB y la interfaz del Radar Doppler en la placa de expansión Seeed Studio XIAO con cuidado, de lo contrario podrías dañar el puerto.
:::

- **Paso 1.** Conecta el Radar Doppler a la placa de expansión Seeed Studio XIAO con un cable Grove.

- **Paso 2.** Conecta Seeed Studio XIAO a la PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Monitor Serie** en tu Arduino IDE.

### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga el [código de demostración](https://github.com/Seeed-Studio/Seeed_Arduino_DopplerRadar).

- **Paso 2.** Copia todo el archivo **Seeed_Arduino_DopplerRadar** y pégalo en tu archivo de biblioteca de Arduino IDE.

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

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Adjunto de Seeed Studio Grove Base para XIAO](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.rar)
- **[ZIP]** [Biblioteca de código de demostración](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip)
- **[PDF]** [Grove DopplerRadar (BGT24LTR11) Protocolo de comunicación del módulo radar v1.1.pdf](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf)
- **[PDF]** [Hoja de datos ETA 3410](https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf)

## Proyecto

<p><div class="video-container">
<iframe src="https://www.youtube.com/embed/-HMEW2DN6Wg" width="560" height="315" frameborder="0" allowfullscreen=""></iframe>
</div></p>

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
