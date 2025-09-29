---
description: Crea una página de documentación con contenido enriquecido.
title: Expansor de E/S para XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/io_expander_for_xiao
last_update:
  date: 09/18/2023
  author: Stephen Lo
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
    </a>
</div><br />

El Expansor de E/S para XIAO es una placa de expansión de última generación diseñada para mejorar las capacidades de la serie Seeed Studio XIAO. Alimentada por el chip MCP23017, esta placa ofrece 16 pines de E/S adicionales, permitiendo a los usuarios expandir sus proyectos sin restricciones. Ya seas un aficionado que busca experimentar con más componentes o un profesional que busca una solución confiable de expansión de E/S, esta placa está diseñada para satisfacer tus necesidades. Su compatibilidad con la serie XIAO asegura una integración perfecta, haciendo que tu proceso de desarrollo sea más fluido y eficiente.

## Características

- Integración Perfecta con XIAO: Diseñada para funcionar perfectamente con la serie Seeed Studio XIAO.
- 16 Pines de E/S Adicionales: Alimentada por el MCP23017, proporciona 16 pines de E/S extra para tus proyectos.
- Interfaz I2C con Dirección Configurable: La dirección I2C por defecto es 0x21, pero puede configurarse a 0x20.
- Diseño Robusto: Construida con materiales de alta calidad para asegurar longevidad y confiabilidad.

## Especificaciones

- Chip: MCP23017
- Número de Pines de E/S: 16
- Protocolo de Comunicación: I2C
- Dirección I2C por Defecto: 0x21 (Configurable a 0x20)
- Voltaje de Operación: 3.3V
- Dimensiones: 21mm x 17mm

## Aplicaciones

El Expansor de E/S para XIAO es versátil y puede usarse en una multitud de aplicaciones, incluyendo pero no limitándose a:

- Sistemas de Automatización del Hogar: Expande el número de dispositivos que puedes controlar en tu configuración de hogar inteligente.
- Robótica: Añade más sensores, motores u otros componentes a tu robot sin quedarte sin pines de E/S.
- Consolas de Juegos: Diseña controladores personalizados u otros periféricos con una gran cantidad de botones e interruptores.
- Sistemas de Control Industrial: Gestiona más dispositivos y sensores en tu configuración industrial.
- Proyectos Educativos: Enseña a los estudiantes sobre microcontroladores y electrónica sin estar limitado por el número de pines de E/S.

## Descripción General del Hardware

Esta sección proporciona una descripción detallada de los diversos componentes e interfaces en la Placa Expansora de E/S XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. Pads Estándar XIAO

Estos son los pads estándar para conectar el microcontrolador XIAO.

### 1. Pads J1

Los pads J1 permiten a los usuarios decidir si conectar los pines RST, INTB e INTA del MCP23017 a los pines D6, D1 y D0 del XIAO mediante soldadura. De arriba hacia abajo, son RST, INTB, INTA.

Por defecto, cuando usas la Placa de Expansión, los Pads de Salida Adicionales en el área 8 están habilitados. Si no quieres habilitarlos, necesitas cortar los dos pads adyacentes en el área J1 con un cuchillo.

### 2. Chip MCP23017

Este es el chip expansor de E/S principal, proporcionando 16 E/S adicionales.

### 3. Pads J2

Este pad es para seleccionar la dirección I2C. La dirección por defecto es 0x21. Si soldas este pad, la dirección puede cambiarse a 0x20.

### 4. Pines de Salida MCP23017

Estos son los pines de salida del chip MCP23017. La definición de cada pin puede verse en la parte posterior de la placa. Van desde PA0 hasta PB7, proporcionando un total de 16 E/S.

### 5. Pads Grove

Si deseas conectar un módulo Grove, puedes soldar el conector Grove proporcionado. Esta interfaz Grove está conectada al bus I2C. Si eliges usar los pines IIC aquí, entonces no podrás usar los pines de E/S extendidos en el área 4.

### 6. Pin VCC

Este es un pin de salida que puede usarse para alimentar otros componentes.

### 7. Pin GND

Este también es un pin de salida que puede usarse para conectar a tierra otros componentes.

### 8. Pads de Salida Adicionales

Estos son algunos pads de salida adicionales, incluyendo GND, INTB, INTA, RST. Si deseas soldar estos pines para usarlos en otro lugar, puedes hacerlo.

## Primeros Pasos

Bienvenido a la guía de inicio rápido para el Expansor de E/S para XIAO. Esta guía tiene como objetivo ayudarte a configurar y comenzar con tu nueva placa expansora de E/S en conjunto con el controlador principal XIAO RP2040.

### Preparación del Hardware

Hay tres formas principales de usar esta placa de expansión,

**Modo 1: SMD**

Si tu XIAO no tiene pines soldados, entonces puedes elegir el método SMD directo para soldar el XIAO y la placa de expansión a la placa PCB para usar la función de expansión de GPIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
Las PCBs mostradas en la imagen son solo para exhibición y no estaban disponibles para la venta al momento del artículo.
:::

**Modo 2: XIAO se conecta directamente con la placa de expansión a través de la fila de pines**

En este enfoque, tienes la opción de soldar cables de conexión directamente a la placa de expansión de GPIO para conectar tu dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>


**Modo 3: XIAO se conecta con la placa de expansión a través de la fila larga de pines, y la placa de expansión se expande soldando la fila de pines**

Con este método de conexión, eres libre de instalar cables DuPont a la placa de expansión de GPIO. Cableado conveniente para tu aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>


Una vez que la soldadura esté completa, puedes proceder a conectar la placa de expansión al controlador principal XIAO RP2040.


Para programar el XIAO RP2040, necesitarás un cable de datos USB TYPE-C. Conecta un extremo al XIAO RP2040 y el otro a tu computadora. Para una guía detallada sobre programar el XIAO RP2040, por favor consulta este [Wiki](https://wiki.seeedstudio.com/es/XIAO-RP2040/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### Preparación del Software

Antes de que puedas comenzar a programar la placa, necesitarás una biblioteca específica para XIAO. Descarga la biblioteca MCP23017 desde este [enlace de GitHub](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library). Una vez descargada, instala la biblioteca en tu entorno de programación.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Demo: Salida de E/S nivel alto y bajo

En el IDE de Arduino, abre un nuevo sketch y copia el siguiente código de ejemplo:

```cpp
#include <Adafruit_MCP23X17.h>

Adafruit_MCP23X17 mcp;

void setup() {
    Serial.begin(9600);
    Serial.println("MCP23xxx Blink Test!");
    if (!mcp.begin_I2C()) {
        Serial.println("Error.");
        while (1);
    }

    Serial.println("Looping...");

    for(int i=0; i<16; i++) {
        mcp.pinMode(i, OUTPUT);
    }
}

void loop() {
    mcp.digitalWrite(15, LOW); //PB7
    mcp.digitalWrite(14, HIGH); //PB6
    mcp.digitalWrite(13, HIGH); //PB5
    mcp.digitalWrite(12, HIGH); //PB4
    mcp.digitalWrite(11, HIGH); //PB3
    mcp.digitalWrite(10, HIGH); //PB2
    mcp.digitalWrite(9, HIGH); //PB1
    mcp.digitalWrite(8, HIGH); //PB0
    mcp.digitalWrite(7, HIGH); //PA7
    mcp.digitalWrite(6, HIGH); //PA6
    mcp.digitalWrite(5, HIGH); //PA5
    mcp.digitalWrite(4, HIGH); //PA4
    mcp.digitalWrite(3, HIGH); //PA3
    mcp.digitalWrite(2, HIGH); //PA2
    mcp.digitalWrite(1, HIGH); //PA1
    mcp.digitalWrite(0, HIGH); //PA0
    delay(1000);
}
```

Sube el código anterior a tu XIAO. Después de que el código se haya subido exitosamente, verás que todos los pines están en alto a 3.3V excepto el pin PB7.

:::caution
Esta placa de expansión solo puede usar entradas y salidas digitales, no funciones PWM o entrada y salida analógica.
:::

### Direccionamiento de Pines

Cuando uses operaciones de pin individual como _pinMode(pinId, dir)_ o _digitalRead(pinId)_ o _digitalWrite(pinId, val)_, entonces los pines se direccionan usando los ID's de abajo. Por ejemplo, para establecer el modo de _GPB0_ entonces usa _pinMode(8, ...)_. **NOTA** El MCP23008 y MCP23S08 solo tienen pines _GPAx_.

| MCP23x17 Pin # | Nombre del Pin | ID del Pin |
| :------------: | :------------: | :--------: |
|       21       |      GPA0      |     0      |
|       22       |      GPA1      |     1      |
|       23       |      GPA2      |     2      |
|       24       |      GPA3      |     3      |
|       25       |      GPA4      |     4      |
|       26       |      GPA5      |     5      |
|       27       |      GPA6      |     6      |
|       28       |      GPA7      |     7      |
|       1        |      GPB0      |     8      |
|       2        |      GPB1      |     9      |
|       3        |      GPB2      |     10     |
|       4        |      GPB3      |     11     |
|       5        |      GPB4      |     12     |
|       6        |      GPB5      |     13     |
|       7        |      GPB6      |     14     |
|       8        |      GPB7      |     15     |

## FAQ

### 1. ¿Por qué mi Expansor de E/S para XIAO no responde?

**Respuesta**: Asegúrate de que el módulo XIAO esté correctamente conectado a la placa de expansión. También, verifica si las librerías necesarias están instaladas y que la placa y puerto correctos estén seleccionados en el IDE de Arduino.

### 2. ¿Puedo usar el Expansor de E/S para XIAO con otros microcontroladores?

**Respuesta**: Sí, el Expansor de E/S está diseñado principalmente para el módulo XIAO, pero puede usarse con otros microcontroladores que soporten comunicación I2C. Podrías necesitar ajustar el código y las conexiones en consecuencia.

### 3. ¿Cómo cambio la dirección I2C del chip MCP23017 en el Expansor de E/S para XIAO?

**Respuesta**: La dirección I2C por defecto está configurada en 0x21. Si quieres cambiarla a 0x20, hay un jumper etiquetado como "J2" en la placa. Necesitarás soldar el jumper J2 para cambiar la dirección.

### 4. Estoy obteniendo ruido o comportamiento errático en mis pines de E/S. ¿Cuál podría ser la causa?

**Respuesta**: Asegúrate de que las conexiones estén seguras y no haya interferencia. Usar resistencias pull-up o pull-down puede ayudar a estabilizar los pines de entrada. También, asegúrate de que la fuente de alimentación sea estable y pueda proporcionar la corriente necesaria para todos los dispositivos conectados.


## Recursos

- **[ZIP]** [Archivo Eagle](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [Hoja de datos - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

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


