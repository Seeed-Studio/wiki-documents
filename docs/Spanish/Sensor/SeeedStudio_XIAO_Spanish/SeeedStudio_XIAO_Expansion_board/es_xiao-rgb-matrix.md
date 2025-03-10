---
description: Comenzando con MATRIZ de 6x10 RGB para XIAO
title: Comenzando con MATRIZ de 6x10 RGB para XIAO
keywords:
- XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/rgb_matrix_for_xiao
last_update:
  date: 02/16/2025
  author: Guillermo
---

# Comenzando con MATRIZ de 6x10 RGB para XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

Presentamos la "MATRIZ RGB 6x10 para XIAO" - una deslumbrante adición a la serie de productos XIAO de Seeed Studio. Ahora, con la MATRIZ RGB 6x10, tendrás el poder de iluminar tus proyectos con un espectro de colores. Compuesta por 60 LEDs WS2812 dispuestos meticulosamente, esta matriz no solo se trata de estética; es una herramienta para dar vida a tus visiones creativas. Ya sea que estés creando una obra de arte interactiva, diseñando un sistema de notificación dinámico, o simplemente quieras añadir un toque de color a tus creaciones, esta matriz es tu lienzo. Adaptada para una integración fluida con el controlador principal XIAO, su versatilidad se destaca aún más con la inclusión de pads de soldadura VCC, GND y DIN, asegurando flexibilidad en una multitud de escenarios.

## Introducción

### Características

- 60 LEDs WS2812: Dispuestos en una cuadrícula de 6x10, estos LEDs son perfectos para crear pantallas vibrantes.
- Diseño Compacto: Cada LED mide solo 1mm x 1mm, ofreciendo una pantalla de alta densidad sin ocupar mucho espacio.
- Conexión Versátil: Aunque está diseñada para el controlador principal XIAO, también hemos incluido pads de soldadura VCC, GND y DIN para aplicaciones más amplias.
- Capacidades RGB: Cada LED puede mostrar una amplia gama de colores, dándote la libertad de crear pantallas dinámicas y coloridas.

### Especificaciones

- Tipo de LED: WS2812
- Número de LEDs: 60
- Disposición: 6 filas x 10 columnas
- Tamaño de LED: 1mm x 1mm
- Puerto de Conexión para XIAO: D0
- Pads Adicionales: VCC, GND, DIN, DOUT

### Aplicaciones

- Pantallas Interactivas: Utiliza la matriz LED para retroalimentación visual dinámica en tus proyectos.
- Notificaciones: Crea notificaciones coloridas o alertas para tus dispositivos.
- Instalaciones Artísticas: Incorpora la matriz LED en obras de arte para un toque moderno.
- Tecnología Portátil: Integra en ropa o accesorios para un look futurista.
- Juegos: Mejora las experiencias de juego con efectos visuales vibrantes.
- Iluminación General: Úsala para iluminación ambiental o para crear atmósferas en diversos entornos.

## Comenzando

Bienvenido a la guía rápida para la MATRIZ RGB 6x10 para XIAO. Esta guía tiene como objetivo ayudarte a configurar y comenzar con tu nueva placa de expansión LED en conjunto con el controlador principal XIAO RP2040.

### Preparación del Hardware

Al recibir tu producto, será necesario realizar algunas soldaduras. Hemos proporcionado dos pines de cabezal con el paquete. Deberás soldar estos pines en la placa de expansión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

Una vez que la soldadura esté completa, puedes proceder a conectar la placa de expansión al controlador principal XIAO RP2040.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::caution
Por favor, ten especial cuidado al conectar, no conectes mientras el XIAO está encendido y no conectes los pines de alimentación incorrectos. De lo contrario, es probable que la placa se dañe.
:::

### Preparación del Software

Este tutorial utilizará el XIAO RP2040 como el controlador principal. Si es la primera vez que usas el XIAO RP2040, por favor lee su Wiki de Introducción.

- [Seeed Studio XIAO RP2040 con Arduino](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/)

Mientras tanto, todos los programas de ejemplo proporcionados en este tutorial funcionarán en otros modelos de XIAO también, y también puedes configurar el entorno de desarrollo de Arduino de antemano según el XIAO que estés utilizando.


## Descripción general de la biblioteca Arduino

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la biblioteca.

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— Constructor NeoPixel cuando se conoce la longitud, el pin y el tipo de píxel en tiempo de compilación.

  **Parámetros de entrada**:

  - `n`: Número de NeoPixels en la tira.
  - `p`: Número de pin de Arduino que gestionará los datos de los NeoPixels.
  - `t`: Tipo de píxel: suma las constantes NEO_* definidas en Adafruit_NeoPixel.h, por ejemplo `NEO_GRB+NEO_KHZ800` para NeoPixels que esperan una transmisión de datos de 800 KHz (frente a 400 KHz) con los bytes de color expresados en el orden verde, rojo, azul por píxel.

  **Valor de retorno**: Objeto Adafruit_NeoPixel. Llama a la función `begin()` antes de usarlo.

- `void begin(void)` —— Configura el pin de NeoPixel para salida.

- `void show(void)` —— Transmite los datos de los píxeles en la RAM a los NeoPixels.

- `void setPin(int16_t p)` —— Establece/cambia el número del pin de salida de NeoPixel. El pin anterior, si lo hay, se establece en INPUT y el nuevo pin se establece en OUTPUT.

  **Parámetros de entrada**:

  - `p`: Número de pin de Arduino (-1 = sin pin).

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— Establece el color de un píxel utilizando componentes separados de rojo, verde, azul y blanco (solo para NeoPixels RGBW).

  **Parámetros de entrada**:

  - `n`: Índice del píxel, comenzando desde 0.
  - `r`: Brillo rojo, 0 = mínimo (apagado), 255 = máximo.
  - `g`: Brillo verde, 0 = mínimo (apagado), 255 = máximo.
  - `b`: Brillo azul, 0 = mínimo (apagado), 255 = máximo.
  - `w` (Opcional): Brillo blanco, 0 = mínimo (apagado), 255 = máximo, ignorado si se usan píxeles RGB.

- `void setPixelColor(uint16_t n, uint32_t c)` —— Establece el color de un píxel usando un valor RGB o RGBW de 32 bits.

  **Parámetros de entrada**:

  - `n`: Índice del píxel, comenzando desde 0.
  - `c`: Valor de color de 32 bits. El byte más significativo es blanco (para píxeles RGBW) o se ignora (para píxeles RGB), luego sigue rojo, verde y el byte menos significativo es azul.

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— Rellena toda o parte de la tira de NeoPixels con un color.

  **Parámetros de entrada**:

  - `c`: Valor de color de 32 bits. El byte más significativo es blanco (para píxeles RGBW) o se ignora (para píxeles RGB), luego sigue rojo, verde y el byte menos significativo es azul. Si no se especifican todos los argumentos, este será 0 (apagado).
  - `first`: Índice del primer píxel a llenar, comenzando desde 0. Debe estar dentro de los límites, no se realiza recorte. 0 si no se especifica.
  - `count`: Número de píxeles a llenar, como valor positivo. Pasar 0 o dejarlo sin especificar llenará hasta el final de la tira.

- `void setBrightness(uint8_t b)` —— Ajusta el brillo de salida. No afecta inmediatamente a lo que se muestra actualmente en los LEDs. La siguiente llamada a `show()` actualizará los LEDs con este nivel de brillo.

  **Parámetros de entrada**:

  - `b`: Ajuste de brillo, 0 = mínimo (apagado), 255 = más brillante.

- `void clear(void)` —— Rellena toda la tira de NeoPixels con 0 / negro / apagado.

- `void updateLength(uint16_t n)` —— Cambia la longitud de un objeto de tira Adafruit_NeoPixel previamente declarado. Los datos antiguos se desalojan y los nuevos se borran. El número de pin y el formato de píxel permanecen sin cambios.

  **Parámetros de entrada**:

  - `n`: Nueva longitud de la tira, en píxeles.

- `void updateType(neoPixelType t)` —— Cambia el formato de píxel de un objeto de tira Adafruit_NeoPixel previamente declarado. Si el formato cambia de una de las variantes RGB a una variante RGBW (o RGBW a RGB), los datos antiguos se desalojarán y los nuevos se borrarán. De lo contrario, los datos antiguos permanecerán en la RAM y no se reorganizarán al nuevo formato, por lo que es recomendable seguir con `clear()`.

  **Parámetros de entrada**:

  - `t`: Tipo de píxel: suma las constantes NEO_* definidas en Adafruit_NeoPixel.h, por ejemplo `NEO_GRB+NEO_KHZ800` para NeoPixels que esperan una transmisión de datos de 800 KHz (frente a 400 KHz) con los bytes de color expresados en el orden verde, rojo, azul por píxel.

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— Convierte los valores separados de rojo, verde y azul en un único color RGB de 32 bits "empaquetado".

  **Parámetros de entrada**:

  - `r`: Brillo rojo, de 0 a 255.
  - `g`: Brillo verde, de 0 a 255.
  - `b`: Brillo azul, de 0 a 255.

  **Valor de retorno**: Valor RGB empaquetado de 32 bits, que luego puede asignarse a una variable para su uso posterior o pasarse a la función `setPixelColor()`. El formato RGB empaquetado es predecible, independientemente del orden de color de la tira de LEDs.

### Instalación

- **Método uno**

Se utilizará la **[Biblioteca Adafruit NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)** en este tutorial. Puedes buscarla en el administrador de bibliotecas de Arduino, descargarla e instalarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **Método dos**

Descargue la biblioteca a través del botón a continuación.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Dado que has descargado la biblioteca en formato zip, abre tu IDE de Arduino, haz clic en **Esquema > Incluir biblioteca > Agregar biblioteca .ZIP**. Selecciona el archivo zip que acabas de descargar, y si la instalación es correcta, verás el mensaje **Biblioteca añadida a tus bibliotecas** en la ventana de notificación. Esto significa que la biblioteca se ha instalado con éxito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Demo: Luces en movimiento

El siguiente programa de ejemplo se utiliza para lograr el efecto de luces en movimiento, donde las lámparas se encenderán secuencialmente una por una. Este programa es compatible con todos los modelos de XIAO.

```cpp
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Requerido para Adafruit Trinket de 16 MHz
#endif

// ¿Qué pin del Arduino está conectado a los NeoPixels?
#define PIN        A0 // En Trinket o Gemma, se sugiere cambiar esto a 1

// ¿Cuántos NeoPixels están conectados al Arduino?
#define NUMPIXELS 60 // Tamaño popular del anillo NeoPixel

// Al configurar la biblioteca NeoPixel, le decimos cuántos píxeles,
// y qué pin usar para enviar señales. Ten en cuenta que para tiras de NeoPixel
// más antiguas, es posible que necesites cambiar el tercer parámetro -- consulta el
// ejemplo strandtest para más información sobre los valores posibles.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // Tiempo (en milisegundos) para pausar entre píxeles

void setup() {
  // Estas líneas son específicamente para soportar el Adafruit Trinket 5V 16 MHz.
  // En cualquier otra placa, puedes eliminar esta parte (pero no hay problema en dejarla):
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // FIN del código específico de Trinket.

  pixels.begin(); // INICIALIZA el objeto de la tira NeoPixel (REQUERIDO)
}

void loop() {
  pixels.clear(); // Establece todos los colores de los píxeles a 'apagado'

  // El primer NeoPixel en una tira es #0, el segundo es 1, hasta el
  // número total de píxeles menos uno.
  for(int i=0; i<NUMPIXELS; i++) { // Para cada píxel...

    // pixels.Color() toma valores RGB, de 0,0,0 hasta 255,255,255
    // Aquí estamos usando un color verde moderadamente brillante:
    pixels.setPixelColor(i, pixels.Color(0, 10, 0));

    pixels.show();   // Envía los colores actualizados de los píxeles al hardware.

    delay(DELAYVAL); // Pausa antes de pasar al siguiente ciclo
  }
}
```

Sube el programa y, si todo va bien, podrás ver cómo las lámparas se encienden una por una.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Este programa reduce especialmente el brillo de las lámparas, ya que si el brillo se ajusta al máximo, mirar directamente las lámparas durante un largo período puede causar daño a tus ojos.
:::

## Empalme de múltiples placas de luz

El **RGB MATRIX** para XIAO admite extensiones de empalme múltiples con suministro de energía garantizado. Puedes empalmar varias placas de luz en secuencia, tal como se indica en la siguiente figura.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::caution
Cuando varias placas de luz están empalmadas, pueden calentarse y quedar sin suficiente potencia. En este caso, las placas de luz pueden mostrar un funcionamiento anómalo. Para solucionar esto, por favor, suministra energía adicional a las placas de luz para garantizar que cada una reciba una entrada estable de 5V.
:::

## Recursos

- **[ZIP]** [Archivo PCB&SCH Eagle](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [Hoja de datos - WS2812B](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf)

## Soporte técnico y discusión sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








