---
description: Comenzando con la Pantalla IPS Grove de 1.2 pulgadas
title: Pantalla IPS Grove de 1.2 pulgadas
keywords:
- ips
- display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove_1.2inch_ips_display
last_update:
  date: 06/13/2023
  author: Stephen Lo
---

# Pantalla IPS Grove de 1.2 pulgadas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/2-Grove-1.2-Inch-IPS-Display-font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-1-2-Inch-IPS-Display-p-5699.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Una Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

La Pantalla IPS Grove de 1.2 pulgadas es una pantalla de cristal líquido serial de 1.2 pulgadas meticulosamente diseñada, presentada por Seeed Studio. Ofreciendo una resolución superior de 240x240, esta pantalla proporciona una representación de imagen cristalina y colorida. La lógica de diseño detrás de esta pantalla es presentar una solución de pantalla simple y de alta calidad para satisfacer las necesidades de varios proyectos DIY o de Internet de las Cosas (IoT).

Adopta una interfaz serial SPI y solo requiere SCK y SDA para la conexión al controlador principal. Esto simplifica las operaciones del usuario y ahorra tiempo de cableado. La pantalla de color RGB mejora aún más cada imagen con colores ricos y vibrantes.

Simultáneamente, la Pantalla IPS Grove de 1.2 pulgadas emplea tecnología IPS de ángulo de visión completo. Independientemente del ángulo desde el cual los usuarios vean, pueden obtener casi la misma experiencia visual. Esto significa que tu proyecto presentará el mejor efecto de pantalla desde todos los ángulos.

Además, hemos elegido ST7789 como el IC controlador para la pantalla y hemos preparado una biblioteca de controladores de código abierto y código de ejemplo para tu conveniencia. Esto te permitirá comenzar rápidamente con el desarrollo de tu proyecto.

## Características

- **Interfaz Simplificada:** La pantalla adopta una interfaz serial SPI y solo requiere las conexiones SCK y SDA al controlador principal. Esto simplifica enormemente la operación del usuario y ahorra tiempo en el cableado.
- **Alta Resolución:** Con una alta resolución de 240x240 píxeles, la pantalla puede proporcionar imágenes claras y vibrantes, mejorando la experiencia visual de tu proyecto.
- **Tecnología IPS de Vista Completa:** La Pantalla IPS Grove de 1.2 pulgadas utiliza tecnología In-Plane-Switching (IPS), que ofrece color consistente y preciso desde todos los ángulos de visión.
- **Color Rico:** La pantalla puede mostrar hasta 65k colores. La pantalla de color RGB añade profundidad y variación a las imágenes, haciéndolas más vibrantes y realistas.
- **Tamaño Compacto:** El tamaño de la pantalla es 24.76x26.8mm, y el tamaño de la placa de circuito es 40x40mm. Su tamaño compacto la hace perfecta para varios proyectos DIY o IoT.
- **Amplio Rango de Voltaje de Entrada:** La placa de circuito puede aceptar un voltaje de entrada de 3.3V o 5V, ofreciendo compatibilidad con una amplia gama de fuentes de alimentación.
- **IC Controlador Confiable:** La pantalla utiliza ST7789 como su IC controlador. Su biblioteca de controladores de código abierto y código de ejemplo facilitan que los usuarios comiencen.
- **Amplia Temperatura de Operación:** El rango de temperatura de trabajo de -20 a 70 grados Celsius hace que esta pantalla sea adecuada para varios entornos.

## Ideas de Aplicación

- **Estación Meteorológica DIY**: La Pantalla IPS Grove de 1.2 Pulgadas puede ser utilizada en una estación meteorológica casera para proporcionar información meteorológica en tiempo real. Puede mostrar íconos y datos ricos y vibrantes, proporcionando una experiencia de usuario atractiva.
- **Pantalla de Arte Digital Personal**: La pantalla puede ser incorporada en un dispositivo de arte digital, donde puede mostrar tus ideas creativas con su pantalla de alta resolución y colorida. Esto la convierte en un componente excelente para proyectos de arte o diseño.
- **Consola de Juegos DIY**: Dada su alta resolución y pantalla de vista completa, la Pantalla IPS Grove de 1.2 Pulgadas es una excelente opción para consolas de juegos caseras. Su pantalla de colores vibrantes mejorará la experiencia de juego.
- **Sistemas de Hogar Inteligente**: La pantalla puede ser integrada en sistemas de hogar inteligente, proporcionando retroalimentación visual clara y vibrante de varias condiciones del hogar o estado del sistema.
- **Proyectos Educativos**: En el sector educativo, la pantalla puede ser utilizada en proyectos de aula para enseñar a los estudiantes sobre gráficos, codificación y electrónica. Su interfaz simple y configuración fácil la hacen ideal para entornos de aprendizaje.
- **Paneles de Control Industrial**: En aplicaciones industriales, la pantalla puede ser utilizada en paneles de control para mostrar información importante o estados, ayudando a los operadores a monitorear y controlar procesos industriales. Su amplio ángulo de visión asegura visibilidad clara desde varias perspectivas.

## Descripción General del Hardware

### Mapa de Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/hw.png" alt="pir" width={500} height="auto" /></p>

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Pantalla IPS Grove de 1.2 Pulgadas |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/Longan-Labs/Grove-1.2-Inch-IPS-Display/main/images/small.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="/es/grove_1.2inch_ips_display" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove-1.2 Inch IPS Display al puerto D7(D7/D8) del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-1.2 Inch IPS Display al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove-1.2 Inch IPS Display |
|---------------|-------------------------|
| 5V            | Rojo (VCC)                    |
| GND           | Negro (GND)                  |
| SDA           | Blanco  (DTA)                 |
| SCK           | Amarillo  (SCK)                |

#### Software

- **Paso 1.** Descarga la Librería de Arduino desde Github.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_ST7789_Fast/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Después de descargar e instalar la librería correctamente, puedes encontrar un programa de ejemplo llamado **ST7789_HelloWorld.ino** en la carpeta de ejemplos. Este programa está diseñado para el Grove-1.2 Inch IPS Display.

```cpp
#include <Adafruit_GFX.h>
#include <Arduino_ST7789_Fast.h>

#define SCK   7
#define SDA   8

Arduino_ST7789 lcd = Arduino_ST7789(SCK, SDA);

void setup(void)
{
    lcd.init();
    lcd.fillScreen(BLACK);

    lcd.setCursor(0, 0);
    lcd.setTextColor(RED,BLACK);
    lcd.setTextSize(3);
    lcd.println("HELLO WORLD");
}

void loop()
{

}
```

- **Paso 4.** Verás "Hello World" impreso en la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/result.jpg" alt="pir" width={400} height="auto" /></p>

## E/S Rápida con Arduino UNO

Operar los pines de E/S de Arduino directamente a través de registros puede proporcionar mayor eficiencia y velocidad, en comparación con usar la función estándar `digitalWrite()`. Sin embargo, este método generalmente requiere un entendimiento más profundo del hardware de Arduino y el funcionamiento de los microcontroladores.

Si deseas utilizar E/S más rápida, necesitarás hacer algunas modificaciones en el archivo `Arduino_ST7789_Fast.h`. Primero, debes cambiar la línea 20 a: `#define FAST_IO 1`. Además, entre las líneas 23 y 26, escribe el código para establecer la E/S en alto y bajo. A continuación se muestra un ejemplo usando D7/D8:

```cpp
#define FAST_IO 1

#if FAST_IO
#define LCD_SCK_SET PORTD |= (1 << PORTD7); // SET SCK HIGH
#define LCD_SDA_SET PORTB |= (1 << PORTB0); // SET SDA HIGH
#define LCD_SCK_CLR PORTD &= ~(1 << PORTD7); // SET SCK LOW
#define LCD_SDA_CLR PORTB &= ~(1 << PORTB0); // SET SDA LOW
#endif
```

A continuación se presenta un breve tutorial sobre cómo usar registros para controlar pines de E/S en Arduino UNO:

Arduino UNO tiene tres puertos, etiquetados como B, C y D. Cada puerto tiene un registro de datos correspondiente, que son PORTB, PORTC y PORTD. Estos registros pueden usarse para controlar directamente los pines de E/S.

Por ejemplo, si quieres establecer el pin digital 13 (correspondiente al 5º bit de PORTB, o PORTB5) en HIGH, puedes escribir lo siguiente:

```cpp
PORTB |= (1 << 5);
```

Esta declaración establece el 5º bit de PORTB a 1 sin cambiar otros bits. Esto se logra mediante el operador OR bit a bit (|=) y el operador de desplazamiento a la izquierda (&lt;&lt;).

De manera similar, si quieres establecer el pin digital 13 a LOW, puedes escribir lo siguiente:

```cpp
PORTB &= ~(1 << 5);
```

Esta declaración establece el 5º bit de PORTB a 0 sin cambiar otros bits. Esto se logra mediante el operador AND bit a bit (&=) y el operador NOT bit a bit (~).

Lo siguiente muestra todos los puertos en Arduino UNO y sus registros correspondientes:

**Puertos Digitales**

- Los puertos digitales 0 - 7 corresponden al registro PORTD, bits PORTD0 a PORTD7
- Los puertos digitales 8 - 13 corresponden al registro PORTB, bits PORTB0 a PORTB5

** Puertos de Entrada Analógica **

- Los puertos de entrada analógica A0 - A5 corresponden al registro PORTC, bits PORTC0 a PORTC5

Los puertos de entrada analógica también pueden funcionar como E/S digital, correspondiendo a los números de pin digital 14 a 19. Por ejemplo, A0 también puede servir como pin digital 14.

Cada registro de E/S también tiene dos registros relacionados para controlar el modo (entrada o salida) de los pines y las resistencias pull-up de los pines de entrada. Por ejemplo, los registros de control para PORTD son DDRD y PIND. El registro DDRx se usa para establecer el modo del pin, y el registro PINx se usa para leer el estado del pin.

Antes de escribir al registro `PORTx`, primero debes asegurarte de que el registro `DDRx` correspondiente esté configurado correctamente. Por ejemplo, si quieres establecer `PD0` como salida y generar HIGH, debes configurar primero el registro `DDRD`:

```cpp
DDRD |= (1 << 0);  // Set PD0 as output
PORTD |= (1 << 0);  // Output HIGH to PD0
```

Esta información se puede encontrar en la hoja de datos del ATmega328P, que es el microcontrolador del Arduino UNO. Si estás usando otro modelo de Arduino, puede que necesites consultar la hoja de datos del microcontrolador respectivo, ya que diferentes microcontroladores pueden tener diferentes diseños de puertos y registros.

Al manipular registros, es esencial ejercer precaución, ya que cualquier operación errónea puede impactar el estado de otros pines o incluso la función del microcontrolador.

Los usuarios que quieran usar el modo de operación de registros de este producto necesitan entender e implementar el conocimiento y habilidades mencionados anteriormente de forma independiente.

## FAQ

### 1. La pantalla no funciona cuando la reprogramo mientras la pantalla está conectada

R: Si tu programa está comunicándose constantemente con la pantalla, la reprogramación puede interrumpir este proceso, causando que la pantalla funcione mal. Puedes intentar apagar la alimentación para restaurar la operación normal de la pantalla.

### 3. ¿Qué tipo de fuente de alimentación debo usar para la pantalla?

R: La placa de circuito puede aceptar un voltaje de entrada de 3.3V o 5V, por lo que puedes usar una fuente de alimentación dentro de este rango.

### 4. ¿Puedo usar la pantalla bajo condiciones de temperatura extrema?

R: La pantalla tiene un rango de temperatura de funcionamiento de -20 a 70 grados Celsius. Sin embargo, para un rendimiento óptimo y longevidad, se recomienda operar la pantalla dentro de condiciones normales de temperatura ambiente.

### 5. Los colores en mi pantalla no se ven bien. ¿Cuál podría ser el problema?

R: Por favor asegúrate de que la pantalla esté correctamente inicializada en tu código y que estés usando los valores de color correctos. Si aún tienes problemas, puede haber un problema con la pantalla o los cables de conexión. Por favor verifica las conexiones o intenta con otra pantalla si está disponible.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo Eagle para Grove-1.2 Inch IPS Display](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar)
- **[PDF]** [Especificaciones ST7789](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/ST7789V_SPEC_V1.2.pdf)

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
