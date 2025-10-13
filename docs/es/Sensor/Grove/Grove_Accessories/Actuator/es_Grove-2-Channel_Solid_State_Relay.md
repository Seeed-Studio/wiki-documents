---
title: Grove - Relé de Estado Sólido de 2 Canales
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-2-Channel_Solid_State_Relay/
slug: /es/Grove-2-Channel_Solid_State_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/mian.jpg)

En lugar de usar bobinas, los relés de estado sólido empaquetados (SSR) utilizan dispositivos semiconductores de potencia como tiristores y transistores, que proporcionan una velocidad de conmutación mucho más rápida que los relés mecánicos. El **Grove - Relé de Estado Sólido de 2 Canales** está basado en el módulo de alta calidad **G3MC202P**, que te permite usar 5VDC para controlar MAX. 240VAC. Este módulo tiene dos canales, puedes controlarlos por separado. Con la ayuda de la interfaz Grove, se vuelve muy conveniente usar el SSR con tu arduino.

Según diferentes escenarios de aplicación, hemos preparado una serie de relés de estado sólido para ti.

[Grove - Relé de Estado Sólido V2](https://wiki.seeedstudio.com/es/Grove-Solid_State_Relay_V2)

Grove - Relé de Estado Sólido de 2 Canales

[Grove - Relé de Estado Sólido de 4 Canales](https://wiki.seeedstudio.com/es/Grove-4-Channel_Solid_State_Relay)

[Grove - Relé de Estado Sólido de 8 Canales](https://wiki.seeedstudio.com/es/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Relé de Estado Sólido de 2 Canales | Inicial                                                                                               | Ago 2018      |

## Características

- Ventajas sobre los relés mecánicos:

  - Los relés de estado sólido tienen velocidades de conmutación rápidas comparados con los relés mecánicos, y no tienen contactos físicos que se desgasten
  - Operación totalmente silenciosa
  - La ausencia de contactos físicos significa que no hay chispas, lo que permite su uso en ambientes explosivos, donde es crítico que no se generen chispas durante la conmutación
  - Mayor vida útil, incluso si se activa muchas veces, ya que no hay partes móviles que se desgasten ni contactos que se deterioren o acumulen carbón
  - SSR compacto, de perfil delgado y construcción monobloque con un marco de terminales todo en uno que incorpora una PCB, terminales y disipador de calor, que es mucho más pequeño que los relés mecánicos, y puede integrar más canales

- Desventajas:

  - Cuando está cerrado, mayor resistencia (generando calor), y mayor ruido eléctrico
  - Cuando está abierto, menor resistencia, y corriente de fuga inversa
  - Solo funciona para carga AC

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de entrada de operación|4~6V|
|Voltaje de Entrada Nominal|5V|
|Voltaje de Carga Nominal|100 a 240 VAC 50/60 Hz|
|Rango de Voltaje de Carga|75 a 264 VAC 50/60 Hz||
|Corriente de carga|0.1 a 2 A por interruptor|
|Corriente de fuga|1.5 mA máx. (a 200 VAC)|
|Resistencia de Aislamiento|1,000 MΩ mín. (a 500 VDC)|
|Tiempo de Operación|1/2 del ciclo de la fuente de alimentación de carga +1 ms máx.|
|Tiempo de Liberación|1/2 del ciclo de la fuente de alimentación de carga + 1 ms máx.|
|Temperatura de Almacenamiento|-30°C a 100°C (sin formación de hielo o condensación)|
|Temperatura de Operación|-30°C a 80°C (sin formación de hielo o condensación)|
|Humedad de Operación| 45% a 85%RH|
|Interfaz de Entrada|Digital|
|Puerto de Salida|Dos DIP Hembra Azul de 2 pines |
|Cruce por Cero|compatible|
|Certificación|UL /  CSA|
|Tamaño|L: 40mm W: 40mm H: 23mm|
|Peso|16.0g|
|Tamaño del paquete|L: 115mm W: 65mm H: 50mm|
|Peso bruto|138g|

:::note
        Puedes prestar atención a la **Corriente de fuga**, 1.5mA es lo suficientemente fuerte para alimentar un LED de baja potencia, por lo que cuando el relé está apagado, el LED aún puede emitir una luz tenue.
:::

## Aplicaciones

- Operaciones que requieren conmutación de baja latencia, por ejemplo, control de luces de escenario
- Dispositivos que requieren alta estabilidad, por ejemplo, dispositivos médicos, señales de tráfico
- Situaciones que requieren a prueba de explosiones, anticorrosión, a prueba de humedad, por ejemplo, industrias del carbón y química.

## Descripción del Hardware

### Mapa de Pines

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/schematic_.jpg)

**K1** es el módulo de relé. Cuando se aplica un voltaje de 5V entre **INT+** e **INT-**, el relé se encenderá. Entonces **LOAD1** se conectará a **LOAD2**. Usamos un transistor NPN **Q2**(BC817-40) para controlar el voltaje entre **INT+** e **INT-**.

**CTR1** es la señal de control del Arduino u otra placa. Es bajada por la resistencia de 10k R7, si no hay señal, la 'Compuerta'(puerto 1) de **Q2** será 0v, y Q2 se apaga, de modo que K1 se apagará. Si **CTR1** se convierte en 5v, entonces Q2 se encenderá. **INT-** de k1 se conectará al GND del sistema, para K1 habrá 5V entre **INT+** e **INT-**, por lo que K1 se encenderá, y **LOAD1** se conectará a **LOAD2**.

:::note
        En esta sección solo te mostramos parte del esquemático, para el documento completo por favor consulta los [Recursos](#resources)
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - 2-Channel Solid State Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** Necesitas preparar dos ventiladores por ti mismo.
:::

- **Paso 1.** Conecta el Grove - 2-Channel Solid State Relay al puerto **D2** del Grove-Base Shield.

- **Paso 2.** Corta un cable, un extremo se conecta a **LOAD1** del switch1, y el otro extremo se conecta a **LOAD2** del switch1.

- **Paso 3.** Corta otro cable, un extremo se conecta a **LOAD1** del switch2, y el otro extremo se conecta a **LOAD2** del switch2.

- **Paso 4.** Conecta el **LOAD1** del switch1 a la alimentación, y conecta el **LOAD2** del switch1 al Fan1

- **Paso 5.** Conecta el **LOAD1** del switch2 a la alimentación, y conecta el **LOAD2** del switch2 al Fan2

- **Paso 6.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 7.** Conecta el Seeeduino a la PC mediante un cable Micro-USB.

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/connect.jpg)

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Abre el IDE de Arduino y crea un nuevo archivo, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include <Arduino.h>
uint8_t channel1 = 2;
uint8_t channel2 = 3;
void setup() {
  pinMode(channel1, OUTPUT);
  pinMode(channel2, OUTPUT);
}
void loop() {
  digitalWrite(channel1, HIGH);
  digitalWrite(channel2, LOW);
  delay(2000);
  digitalWrite(channel1, LOW);
  digitalWrite(channel2, HIGH);
  delay(2000);
}
```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
    Verás los dos LEDs integrados encenderse y apagarse alternativamente, dos ventiladores se encenderán y apagarán alternativamente.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos eagle de Grove - 2-Channel Solid State Relay](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip)
- **[PDF]** [Hoja de datos de G3MC202P](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
