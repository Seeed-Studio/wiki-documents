---
title: Grove - Controlador de Matriz LED v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-LED_Matrix_Driver_v1.0/
slug: /es/Grove-LED_Matrix_Driver_v1.0
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_view_700_s.jpg)

Grove - Controlador de Matriz LED v1.0 es un controlador UART (Serie) a matriz LED de puntos que incorpora varias funciones gráficas. Solo puede soportar matrices LED de 32×64. Este producto es una interfaz UART compatible con **Grove**. Proporciona APIs fáciles y ricas que abstraen la complejidad del hardware subyacente de control de LED. Todo lo que necesitas es simplemente llamar estas APIs en el código para implementar diferentes funcionalidades para tu proyecto.

Cada punto (es decir, píxel) soporta LEDs de doble color. Puede producir tres colores en total: rojo (color primario), verde (color primario) y amarillo (color mezclado). La corriente de entrada para todos los LEDs puede configurarse de una vez.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-v1.0-p-2645.html)

:::note
Este módulo Grove no soporta cambiar la corriente de entrada de cada LED por separado.
:::

Características
---------------

- Compatible con Grove y fácil de usar
- API altamente abstraída y completa
- Soporta píxel LED de doble color. Tres colores en total (el tercer color es una mezcla de dos colores primarios)
- Interfaz: UART (SoftSerial en Arduino)

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
  
Especificaciones
----------------

| Parámetro                                      | Valor                                                                                                                                                    |
|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Voltaje de operación (V)                       | 3.3–5 Voltios                                                                                                                                           |
| Corriente de operación (mA)                    | Máximo: 28–50 mA                                                                                                                                        |
| Voltaje de salida (del controlador de matriz)  | 3.3 Voltios                                                                                                                                             |
| Funciones de símbolos/gráficos soportadas      | Punto, línea recta, círculo, carácter, cadena, número, emoji, imagen (puedes mostrar estos símbolos llamando la API directamente en el código)        |
| Tamaño de matriz LED soportado                 | 32(fila)×64(columna)                                                                                                                                    |
| Color soportado en cada punto de matriz LED    | LEDs duales (verde y rojo) y un color mezclado (amarillo), y puedes usar solo un LED en cada punto de matriz LED                                       |
| Conector para matriz LED                       | DBSTAR_HUB 08A                                                                                                                                         |
| Protocolo para puerto Grove                    | UART                                                                                                                                                     |
| Temperatura de trabajo                         | -40–80 ℃                                                                                                                                                |
| Dimensiones                                    | 46.5×44 mm                                                                                                                                              |
| Peso                                           | 9 g (para el módulo), 12.5 (para todo el paquete individual)                                                                                           |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción del Hardware
------------------------

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_product_components_described_1200_s.jpg)

- **Conector Grove**, para conectar este producto a la placa de control principal.
- **Puerto de matriz LED (DBSTAR_HUB 08A)**, para conectar la matriz LED. Si no puedes encontrar un conector como este, puedes usar cables jumper como alternativa.

### **El paquete incluye** (partes principales)

| Nombre de las partes                                                                                                          | Cantidad |
|-------------------------------------------------------------------------------------------------------------------------------|----------|
| Grove - LED Matrix Driver v1.0                                                                                           | 1 pieza  |
| [Cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 pieza  |

Primeros Pasos
---------

Ahora ejecutemos algunos ejemplos básicos con este módulo.

### Con Arduino

#### Material requerido

- Grove - LED Matrix Driver v1.0 × 1
- Matriz LED de 32×64 con un LED rojo y uno verde en los puntos de la matriz (una matriz LED de un solo color también funcionará) × 1
- Línea de alimentación (forma de cinta) para × 1
- Adaptador de 5 Voltios (salida) para regular el voltaje de entrada para la matriz LED × 1
- Cable de cinta de 8 pines (hembra) × 1
- Arduino UNO (otros modelos de Arduino también funcionarán) × 1
- [Cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1
- Grove - Base Shield × 1

#### Conexiones

Conecta todas las partes como sigue:

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_front_3600.jpg)

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_connections_back_3600.jpg)

#### Trabajo de Codificación

Puedes encontrar más bocetos de demostración en &lt;https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver&gt; y la biblioteca de desarrollo en &lt;https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver&gt;

1. Un código de demostración típico. Puedes subir el código a la placa de control principal con [Codebender](https://codebender.cc).

<iframe frameBorder={0} height={500} src="https://codebender.cc/embed/sketch:300168" width="50%">
</iframe>

2. Descarga y sube el código. Si no sabes cómo subir un boceto de Arduino, por favor visita &lt;https://www.arduino.cc/en/Guide/Windows&gt; para usuarios de Windows o &lt;https://www.arduino.cc/en/Guide/MacOSX&gt; para usuarios de Mac. Puedes ver el resultado como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/img/Grove-LED_Matrix_Driver_v1.0_wiki_demo_result_view_s.jpg)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo de esquemas](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/Grove_LED_Matrix_Driver_v1.0_Schematics.zip)
- [Hoja de datos STM32F103C8T6](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver_v1.0/res/STM32F03C8T6.pdf)
- [Biblioteca en Github](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver)
- [Firmware para este producto](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver/tree/master/Firmware)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_LED_Matrix_Driver_v1.0 -->

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
