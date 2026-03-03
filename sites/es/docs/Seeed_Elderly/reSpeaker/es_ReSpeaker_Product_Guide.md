---
description: Guía de productos ReSpeaker
title: Guía de productos reSpeaker
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

# **Guía de productos ReSpeaker**

## El ecosistema de voz abierto para desarrolladores

[![All ReSpeaker Dev Boards](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **Elegir tu ReSpeaker**

Así que ya sabes un poco sobre el propósito y el uso de la línea ReSpeaker, ya sea por nuestra [página de soluciones](https://wiki.seeedstudio.com/es/ReSpeaker_Solutions/) o nuestra [página de introducción](https://wiki.seeedstudio.com/es/ReSpeaker/), pero ¿qué producto(s) se ajustan realmente a tus necesidades? No te preocupes: esta página autoconsciente está aquí para ayudarte.

## **Las tres categorías**

Actualmente la línea ReSpeaker tiene 3 categorías principales de placas. Aunque las tres categorías están diseñadas para ayudar a habilitar la interfaz de voz, cada una de ellas está pensada para integrarse en los proyectos de forma diferente.

- Solución SBC
- Solución de matriz de micrófonos
- y soluciones de matriz de micrófonos para Raspberry Pi

### **Solución SBC**

![SBC Solution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

Para proyectos que giran completamente en torno a la interacción por voz, la línea ReSpeaker Core es ideal. Funcionando como SBC, no solo son capaces de escuchar la voz y realizar DSP basado en software para el procesamiento de audio de front-end, sino también de controlar el proceso general del proyecto. Desde manipular hardware hasta ejecutar código avanzado de aplicaciones de usuario, la línea ReSpeaker Core está diseñada para ser el centro de sus proyectos.

Sugerido para: Desarrolladores, Empresas

**La [ReSpeaker Core v2.0](https://wiki.seeedstudio.com/es/ReSpeaker_Core_v2.0/)** ofrece una potencia de procesamiento significativa, así como una matriz circular integrada de 6 micrófonos. En el centro de la placa se encuentra el módulo principal, que contiene el SoC, la memoria (RAM) y la PMU. En los bordes exteriores de la placa están los periféricos, incluidos conectores, módulos WiFi, LED y la matriz de micrófonos. Esto permite una fácil personalización y hace que la ReSpeaker Core v2.0 sea una excelente solución de placa todo en uno para proyectos, reduciendo el coste al llevar los proyectos a escala.

### **Solución de matriz de micrófonos**

![MicArraySolution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

La línea ReSpeaker Mic Array utiliza DSP por hardware para la aceleración de front-end, devolviendo voz limpia al sistema en el que se integra. Esto la hace ideal para añadir a proyectos existentes que se beneficiarían de una interfaz de voz.

Sugerido para: Desarrolladores, Maker Pros, Empresas

**[La ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/es/ReSpeaker_Mic_Array_v2.0/)** es una matriz circular de micrófonos impulsada por el XMOS XVF3000. Incorpora procesamiento de audio de front-end habilitado por hardware y es compatible con la mayoría de los sistemas operativos comunes, incluidos Windows, macOS y muchas distribuciones de Linux. También es capaz de salida de audio, lo que, cuando se utiliza, permite AEC. La configuración de los micrófonos también se puede configurar y personalizar.

### **Soluciones de matriz de micrófonos para Raspberry Pi**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

Hemos creado varias Shields ReSpeaker para la Raspberry Pi. Para los usuarios que quieren experimentar con comandos de voz simples, crear su propio Amazon Echo o Google Home, o desarrollar en la Raspberry Pi, las matrices de micrófonos para la Raspberry Pi son una excelente elección. Al igual que otros productos ReSpeaker, estos también se pueden personalizar.

Sugerido para: Makers, Maker Pros, Desarrolladores

El **[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/es/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** es ideal para proyectos que están fijos contra una pared. Capaz de detección de voz de 180°, este kit puede detectar la ubicación relativa o centrarse en una dirección específica mientras ignora otras entradas de voz. La matriz tiene un cable flexible que permite colocarla en numerosas orientaciones y ofrece más opciones para el diseño de la carcasa. A diferencia de otras placas, esta contiene solo un único LED azul.

Características destacadas:

- Matriz lineal de 4 micrófonos
- Cable plano para colocación flexible
- 1 x LED azul
- 2 x conectores Grove (I2C y digital)
- 1 x conector de audio de 3,5 mm (estéreo)
- 1 x conector de altavoz JST (mono)

El **[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/es/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** es ideal para proyectos que puedan colocarse en el centro de las personas. Capaz de detección de voz de 360°, este kit puede detectar la ubicación relativa o centrarse en una dirección específica mientras ignora otras entradas de voz. La matriz tiene un cable flexible que permite colocarla en numerosas orientaciones y ofrece más opciones para el diseño de la carcasa.

Características destacadas:

- Matriz circular de 6 micrófonos
- Cable plano para colocación flexible
- 12 x LED RGB
- 2 x conectores Grove (I2C y digital)
- 1 x conector de audio de 3,5 mm (estéreo)
- 1 x conector de altavoz JST (mono)

El **[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/es/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)** (circular) es capaz de detección de voz de 360°. Sin embargo, a diferencia de las otras placas, no tiene capacidad de salida de audio, por lo que la Raspberry Pi debe encargarse por completo de toda la salida de audio. La placa incorpora 4 micrófonos, 12 LED RGB y 2 conectores Grove.

Características destacadas:

- Matriz circular de 4 micrófonos
- 12 LED RGB
- 2 x conectores Grove (I2C y GPIO)

:::note
No hay interfaz de salida de audio en la ReSpeaker 4-Mic Array para Raspberry Pi. Es solo para captura de voz. Puedes usar el [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) en la Raspberry Pi para la salida de audio. Si tu proyecto requiere una salida de audio de mayor calidad, selecciona un producto diferente.
:::

La **[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT/)** es una excelente opción de nivel de entrada. Es importante tener en cuenta que, a diferencia de los otros elementos de esta categoría, la 2-Mic HAT no puede detectar la dirección del hablante; está diseñada solo para entrada de voz de campo lejano.

Características destacadas:

- Micrófonos duales
- Cable plano para colocación flexible
- 3 x LED RGB
- 2 x conectores Grove (I2C y digital)
- 1 x conector de audio de 3,5 mm (estéreo)
- 1 x conector de altavoz JST (mono)

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
