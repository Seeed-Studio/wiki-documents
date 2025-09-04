---
description: Guía de Productos ReSpeaker
title: Guía de Productos ReSpeaker
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

# **Guía de Productos ReSpeaker**

## El Ecosistema de Voz Abierto para Desarrolladores

[![All ReSpeaker Dev Boards](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **Eligiendo tu ReSpeaker**

Así que ya sabes un poco sobre el propósito y uso de la línea ReSpeaker - ya sea desde nuestra [página de soluciones](https://wiki.seeedstudio.com/es/ReSpeaker_Solutions/) o nuestra [página de introducción](https://wiki.seeedstudio.com/es/ReSpeaker/), pero ¿qué producto(s) realmente se ajustan a tus necesidades? No te preocupes - esta página autoconsciente está aquí para ayudar.

## **Las Tres Categorías**

Actualmente la línea ReSpeaker tiene 3 categorías principales de placas. Aunque las tres categorías están diseñadas para ayudar a habilitar interfaces de voz, cada una está diseñada para integrarse en proyectos de manera diferente.

- Solución SBC
- Solución de Array de Micrófonos
- y Soluciones de Array de Micrófonos para Raspberry Pi

### **Solución SBC**

![SBC Solution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

Para proyectos que giran completamente en torno a la interacción por voz, la línea ReSpeaker Core es ideal. Funcionando como SBCs no solo son capaces de escuchar la voz, realizar DSP basado en software para el procesamiento de audio front-end, sino también de controlar el proceso general del proyecto. Desde manipular hardware hasta ejecutar código de aplicación de usuario avanzado, la línea ReSpeaker Core está diseñada para ser el centro de sus proyectos.

Sugerido para: Desarrolladores, Empresas

**El [ReSpeaker Core v2.0](https://wiki.seeedstudio.com/es/ReSpeaker_Core_v2.0/)** cuenta con un poder de procesamiento significativo así como un array circular integrado de 6 micrófonos. En el centro de la placa está el módulo core, que contiene el SoC, memoria (RAM), y PMU. en los bordes exteriores de la placa están los periféricos, incluyendo conectores, módulos WiFi, LEDs, y el array de micrófonos. Esto permite una fácil personalización y hace del ReSpeaker Core v2.0 una excelente solución de placa todo-en-uno para proyectos, reduciendo el costo al mover proyectos a escala.

### **Solución de Array de Micrófonos**

![MicArraySolution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

La línea ReSpeaker Mic Array usa DSP de hardware para aceleración front end, devolviendo voz limpia al sistema en el que está integrada. Esto la hace ideal para añadir a proyectos existentes que se beneficiarían de una interfaz de voz.

Sugerido para: Desarrolladores, Maker Pros, Empresas

**[El ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/es/ReSpeaker_Mic_Array_v2.0/)** es un array circular de micrófonos alimentado por el XMOS XVF3000. Cuenta con procesamiento de audio front-end habilitado por hardware y es compatible con la mayoría de sistemas operativos comunes incluyendo Windows, macOS, y muchas distribuciones Linux. También es capaz de salida de audio, lo que cuando se usa permite AEC. La configuración del micrófono también puede ser configurada y personalizada.

### **Soluciones de Array de Micrófonos para Raspberry Pi**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

Hemos creado varios ReSpeaker Shields para la Raspberry Pi. Para usuarios que quieren experimentar con comandos de voz simples, crear su propio Amazon Echo o Google Home, o desarrollar en la Raspberry Pi, los arrays de micrófonos para la Raspberry Pi son una excelente opción. Similar a otros productos ReSpeaker, estos también pueden ser personalizados.

Sugerido para: Makers, Maker Pros, Desarrolladores

El **[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/es/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** es genial para proyectos que están estacionarios contra una pared. Capaz de detección de voz de 180°, este kit puede detectar ubicación relativa, o enfocarse en una dirección específica mientras ignora otras entradas de voz. El array tiene un cable flexible permitiendo que sea colocado en numerosas orientaciones y permitiendo más opciones para el diseño de carcasas. A diferencia de otras placas, esta contiene solo un LED azul.

Características Notables:

- Array Lineal de 4 Micrófonos
- Cable de Cinta para Colocación Flexible
- 1 x LED Azul
- 2 x Conectores Grove (I2C & Digital)
- 1 x Jack de Audio de 3.5mm (Estéreo)
- 1 x Conectores de Altavoz JST (Mono)

El **[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/es/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** es genial para proyectos que pueden ser colocados en el centro de las personas. Capaz de detección de voz de 360°, este kit puede detectar ubicación relativa, o enfocarse en una dirección específica mientras ignora otras entradas de voz. El array tiene un cable flexible permitiendo que sea colocado en numerosas orientaciones y permitiendo más opciones para el diseño de carcasas.

Características Notables:

- Array Circular de 6 Micrófonos
- Cable de Cinta para Colocación Flexible
- 12 x LEDs RGB
- 2 x Conectores Grove (I2C & Digital)
- 1 x Jack de Audio de 3.5mm (Estéreo)
- 1 x Conectores de Altavoz JST (Mono)

El **[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/es/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)** (circular) es capaz de detección de voz de 360°. Sin embargo, a diferencia de las otras placas no tiene capacidad de salida de audio, requiriendo que la Raspberry Pi soporte todo el audio de salida sola. La placa cuenta con 4 micrófonos, 12 LEDs RGB, y 2 conectores grove.

Características Notables:

- Array Circular de 4 Micrófonos
- 12 LEDs RGB
- 2 x conectores Grove (I2C & GPIO)

:::note
No hay interfaz de salida de audio en ReSpeaker 4-Mic Array para Raspberry Pi. Es solo para captura de voz. Puedes usar el [jack de auriculares](https://www.raspberrypi.org/documentation/configuration/audio-config.md) en Raspberry Pi para salida de audio. Si tu proyecto requiere salida de audio de mayor calidad por favor selecciona un producto diferente.
:::

El **[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT/)** es una excelente opción de nivel básico. Es importante tener en cuenta que, a diferencia de otros elementos en esta categoría, el 2-Mic HAT no puede detectar la dirección del hablante, está diseñado únicamente para entrada de voz de campo lejano.

Características Destacadas:

- Micrófonos Duales
- Cable de Cinta para Colocación Flexible
- 3 x LEDs RGB
- 2 x Conectores Grove (I2C y Digital)
- 1 x Conector de Audio de 3.5mm (Estéreo)
- 1 x Conectores de Altavoz JST (Mono)

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
