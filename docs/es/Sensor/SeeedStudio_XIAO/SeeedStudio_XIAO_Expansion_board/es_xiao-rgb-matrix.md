---
description: Primeros pasos con la MATRIZ RGB 6x10 para XIAO
title: Primeros pasos con la MATRIZ RGB 6x10 para XIAO
keywords:
- XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/rgb_matrix_for_xiao
last_update:
  date: 08/11/2023
  author: Citric
---

# Primeros pasos con la MATRIZ RGB 6x10 para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

Presentamos la "MATRIZ RGB 6x10 para XIAO" - una deslumbrante adición a la serie de productos XIAO de Seeed Studio. Ahora, con la MATRIZ RGB 6x10, tienes el poder de iluminar tus proyectos con un espectro de colores. Compuesta por 60 LEDs WS2812 meticulosamente organizados, esta matriz no se trata solo de estética; es una herramienta para dar vida a tus visiones creativas. Ya sea que estés creando una pieza de arte interactiva, diseñando un sistema de notificaciones dinámico, o simplemente desees agregar un toque de color a tus creaciones, esta matriz es tu lienzo. Diseñada para una integración perfecta con el controlador principal XIAO, su adaptabilidad se destaca aún más con la inclusión de pads de soldadura VCC, GND y DIN, asegurando flexibilidad en una multitud de escenarios.

## Introducción

### Características

- 60 LEDs WS2812: Organizados en una cuadrícula de 6x10, estos LEDs son perfectos para crear pantallas vibrantes.
- Diseño Compacto: Cada LED mide solo 1mm x 1mm, ofreciendo una pantalla de alta densidad sin ocupar mucho espacio.
- Conexión Versátil: Aunque está diseñada para el controlador principal XIAO, también hemos incluido pads de soldadura VCC, GND y DIN para aplicaciones más amplias.
- Capacidades RGB: Cada LED puede mostrar una amplia gama de colores, dándote la libertad de crear pantallas dinámicas y coloridas.

### Especificaciones

- Tipo de LED: WS2812
- Número de LEDs: 60
- Disposición: 6 filas x 10 columnas
- Tamaño del LED: 1mm x 1mm
- Puerto de Conexión para XIAO: D0
- Pads Adicionales: VCC, GND, DIN, DOUT

### Aplicaciones

- Pantallas Interactivas: Usa la matriz de LEDs para retroalimentación visual dinámica en tus proyectos.
- Notificaciones: Crea notificaciones o alertas coloridas para tus dispositivos.
- Instalaciones Artísticas: Incorpora la matriz de LEDs en piezas de arte para un toque moderno.
- Tecnología Portátil: Integra en ropa o accesorios para un aspecto futurista.
- Juegos: Mejora las experiencias de juego con efectos visuales vibrantes.
- Iluminación General: Usa para iluminación ambiental o para crear ambiente en varios entornos.

## Primeros Pasos

Bienvenido a la guía de inicio rápido para la MATRIZ RGB 6x10 para XIAO. Esta guía tiene como objetivo ayudarte a configurar y comenzar con tu nueva placa de expansión de matriz LED en conjunto con el controlador principal XIAO RP2040.

### Preparación del Hardware

Al recibir tu producto, será necesario realizar algunas soldaduras. Hemos proporcionado dos cabezales de pines con el paquete. Necesitarás soldar estos cabezales en la placa de expansión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

Una vez completada la soldadura, puedes proceder a conectar la placa de expansión al controlador principal XIAO RP2040.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::caution
Por favor, ten especial cuidado al conectar, no conectes mientras el XIAO esté alimentado, y no conectes incorrectamente los pines de alimentación. De lo contrario, es probable que la placa se queme.
:::

### Preparación del Software

Este tutorial utilizará XIAO RP2040 como maestro, si estás usando XIAO RP2040 por primera vez, por favor lee su Wiki de Primeros Pasos.

- [Seeed Studio XIAO RP2040 con Arduino](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/)

Mientras tanto, todos los programas de ejemplo proporcionados en este tutorial también funcionarán en otros XIAOs, y también puedes configurar el entorno de desarrollo de Arduino con anticipación según el XIAO que estés usando.

## Descripción General de la Biblioteca de Arduino

:::tip

Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la biblioteca.

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— Constructor de NeoPixel cuando la longitud, pin y tipo de píxel son conocidos en tiempo de compilación.

  **Parámetros de entrada**:

  - `n`: Número de NeoPixels en la tira.
  - `p`: Número de pin de Arduino que controlará la entrada de datos del NeoPixel.
  - `t`: Tipo de píxel -- suma las constantes NEO_* definidas en Adafruit_NeoPixel.h, por ejemplo `NEO_GRB+NEO_KHZ800` para NeoPixels que esperan un flujo de datos de 800 KHz (vs 400 KHz) con bytes de color expresados en orden verde, rojo, azul por píxel.

  **Valor de retorno**: Objeto Adafruit_NeoPixel. Llama a la función `begin()` antes de usar.

- `void begin(void)` —— Configura el pin del NeoPixel para salida.

- `void show(void)` —— Transmite los datos de píxel en RAM a los NeoPixels.

- `void setPin(int16_t p)` —— Establece/cambia el número de pin de salida del NeoPixel. El pin anterior, si existe, se establece como INPUT y el nuevo pin se establece como OUTPUT.

  **Parámetros de entrada**:

  - `p`: Número de pin de Arduino (-1 = sin pin).

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— Establece el color de un píxel usando componentes separados de rojo, verde, azul y blanco (solo para NeoPixels RGBW).

  **Parámetros de entrada**:

  - `n`: Índice del píxel, comenzando desde 0.
  - `r`: Brillo rojo, 0 = mínimo (apagado), 255 = máximo.
  - `g`: Brillo verde, 0 = mínimo (apagado), 255 = máximo.
  - `b`: Brillo azul, 0 = mínimo (apagado), 255 = máximo.
  - `w` (Opcional): Brillo blanco, 0 = mínimo (apagado), 255 = máximo, ignorado si se usan píxeles RGB.

- `void setPixelColor(uint16_t n, uint32_t c)` —— Establece el color de un píxel usando un valor RGB o RGBW 'empaquetado' de 32 bits.

  **Parámetros de entrada**:

  - `n`: Índice del píxel, comenzando desde 0.
  - `c`: Valor de color de 32 bits. El byte más significativo es blanco (para píxeles RGBW) o ignorado (para píxeles RGB), el siguiente es rojo, luego verde, y el byte menos significativo es azul.

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— Llena toda o parte de la tira NeoPixel con un color.

  **Parámetros de entrada**:

  - `c`: Valor de color de 32 bits. El byte más significativo es blanco (para píxeles RGBW) o ignorado (para píxeles RGB), el siguiente es rojo, luego verde, y el byte menos significativo es azul. Si todos los argumentos no se especifican, esto será 0 (apagado).
  - `first`: Índice del primer píxel a llenar, comenzando desde 0. Debe estar dentro de los límites, no se realiza recorte. 0 si no se especifica.
  - `count`: Número de píxeles a llenar, como un valor positivo. Pasar 0 o dejar sin especificar llenará hasta el final de la tira.

- `void setBrightness(uint8_t b)` —— Ajusta el brillo de salida. No afecta inmediatamente lo que se muestra actualmente en los LEDs. La siguiente llamada a `show()` refrescará los LEDs a este nivel.

  **Parámetros de entrada**:

  - `b`: Configuración de brillo, 0=mínimo (apagado), 255=más brillante.

- `void clear(void)` ——  Llena toda la tira NeoPixel con 0 / negro / apagado.

- `void updateLength(uint16_t n)` —— Cambia la longitud de un objeto de tira Adafruit_NeoPixel previamente declarado. Los datos antiguos se desasignan y los nuevos datos se limpian. El número de pin y el formato de píxel no cambian.

  **Parámetros de entrada**:

  - `n`: Nueva longitud de la tira, en píxeles.

- `void updateType(neoPixelType t)` —— Cambia el formato de píxel de un objeto de tira Adafruit_NeoPixel previamente declarado. Si el formato cambia de una de las variantes RGB a una variante RGBW (o RGBW a RGB), los datos antiguos se desasignarán y los nuevos datos se limpiarán. De lo contrario, los datos antiguos permanecerán en RAM y no se reordenarán al nuevo formato, por lo que es recomendable seguir con `clear()`.

  **Parámetros de entrada**:

  - `t`: Tipo de píxel -- suma las constantes NEO_* definidas en Adafruit_NeoPixel.h, por ejemplo `NEO_GRB+NEO_KHZ800` para NeoPixels que esperan un flujo de datos de 800 KHz (vs 400 KHz) con bytes de color expresados en orden verde, rojo, azul por píxel.

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— Convierte valores separados de rojo, verde y azul en un solo color RGB "empaquetado" de 32 bits.

  **Parámetros de entrada**:

  - `r`: Brillo rojo, 0 a 255.
  - `g`: Brillo verde, 0 a 255.
  - `b`: Brillo azul, 0 a 255.

  **Retorno**: Valor RGB empaquetado de 32 bits, que luego puede asignarse a una variable para uso posterior o pasarse a la función `setPixelColor()`. El formato RGB empaquetado es predecible, independientemente del orden de colores de la tira LED.

### Instalación

- **Método Uno**

La **[Biblioteca Adafruit NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)** se usará en este tutorial, puedes buscarla en el administrador de bibliotecas de Arduino y descargarla e instalarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **Método Dos**

Descarga la biblioteca a través del botón de abajo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Dado que has descargado la biblioteca zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo cual significa que la biblioteca se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Demo: Luces Secuenciales

El siguiente programa de ejemplo se utiliza para lograr el efecto de luces secuenciales, donde las perlas de lámpara se encenderán secuencialmente una por una. Este programa es compatible con todos los XIAO.

```cpp
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 60 // Popular NeoPixel ring size

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // Time (in milliseconds) to pause between pixels

void setup() {
  // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.
  // Any other board, you can remove this part (but no harm leaving it):
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // END of Trinket-specific code.

  pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
}

void loop() {
  pixels.clear(); // Set all pixel colors to 'off'

  // The first NeoPixel in a strand is #0, second is 1, all the way up
  // to the count of pixels minus one.
  for(int i=0; i<NUMPIXELS; i++) { // For each pixel...

    // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
    // Here we're using a moderately bright green color:
    pixels.setPixelColor(i, pixels.Color(0, 10, 0));

    pixels.show();   // Send the updated pixel colors to the hardware.

    delay(DELAYVAL); // Pause before next pass through loop
  }
}
```

Sube el programa y si todo va bien, puedes ver las perlas de luz encenderse una por una.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Este programa reduce especialmente el brillo de las perlas de luz, si el brillo se eleva al máximo, mirar directamente las perlas de luz durante mucho tiempo puede causar daño a tus ojos.
:::

## Empalme de múltiples placas de luz

RGB MATRIX para XIAO soporta múltiples extensiones de empalme con suministro de energía garantizado. Puedes empalmar múltiples placas de luz en secuencia como se indica en la figura a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::caution
Cuando múltiples paneles de luz se empalman juntos, pueden calentarse y tener poca alimentación. En este momento, las placas de luz pueden mostrar anomalías, en este caso, por favor suministra energía adicional a las placas de luz para asegurar que cada placa de luz pueda tener una entrada estable de 5V.
:::

## Recursos

- **[ZIP]** [Archivo Eagle PCB&SCH](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [Hoja de datos - WS2812B](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf)

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
