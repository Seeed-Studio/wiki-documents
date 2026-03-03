---
description: Xadow - Duino
title: Xadow - Duino
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Duino
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.JPG)

El Xadow Duino está especialmente diseñado para construir increíbles dispositivos de iluminación con el popular LED RGB WS2812B. Basado en el MCU ATmega32u4 y con micro USB integrado, el Xadow Duino te permite controlar los LEDs RGB directamente desde el software en "RePhone Kit Create" o programar la placa con Arduino IDE para que funcione de forma independiente. A diferencia de otros módulos adicionales, esta placa tiene su propio conector de batería (tipo JST1.0), que te permite alimentarla de muchas maneras:
- Vía USB 5V (si la batería está conectada, también cargaría la batería simultáneamente)
- Vía batería Lipo 3.7V
- Vía pines de conexión
- Vía Xadow GSM+BLE

[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

## Características
---
- Capaz de funcionar como un Arduino
- Plug-and-play si se conecta con RePhone Kit Create
- Diseño de código abierto y modular
- Delgado y pequeño
- Especialmente diseñado para WS2812B
- Conectores Xadow de 11 pines integrados para conexión completamente flexible con otros módulos Xadow
- Apilable, encadenable y cosible con otros módulos Xadow
- Elección perfecta para amantes de los LEDs

## Especificaciones
---
|Elemento|Detalles|
|---|---|
|**Microcontrolador**|	ATmega32u4
|**Fuente de Alimentación**	|5V vía USB, consumo de corriente es 1.5A máximo /3.3 ~ 4.2V vía conector de batería, consumo de corriente es 1.5A máximo /3.3 ~ 6V vía pines de conexión, consumo de corriente es 500 mA máximo / 3.3 ~ 4.2 V vía Xadow GSM+BLE, consumo de corriente es 500 mA máximo
|**Corriente de Carga**|	500 mA
|**Memoria Flash	**|32 KB (ATmega32u4) de los cuales 4 KB son usados por el bootloader
|**SRAM	**|2.5 KB (ATmega32u4)
|**EEPROM**	|1 KB (ATmega32u4)
|**Velocidad de Reloj**|	16 MHz
|**Conector**	|2 × Conector Xadow de 11 pines Pads de soldadura para LED RGB WS2812b
|**Interfaces**|	Interfaz con Xadow GSM+BLE a través de / I2C (dirección de 7 bits 0x23)
|**Dimensiones**	|25.37mm × 20.30mm / 1"× 0.8"

## Descripción del Hardware
---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.png)

La imagen a continuación ilustra las definiciones de pines del conector Xadow de 11 pines, pines de conexión soldables en el Xadow Duino.

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Pin_definitions.png)

## Iluminar las Cosas
---
**Controla el WS2812B con tu 'RePhone Kit Create**

La forma más fácil de controlar el WS2812B es usar el software integrado en 'RePhone Kit Create', que proporciona una aplicación de 'Control de Actuador' que te permite iluminar el WS2812B de tres maneras diferentes:

 1. Monocromático.
 2. Marquesina.
 3. Arcoíris.

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_WS2812B.png)

**Configurar Si Esto Entonces Aquello**

En 'If This Then That' puedes establecer diferentes condiciones para activar el Xadow Duino para iluminar el WS2812B en un modo especificado.

**Programarlo con Arduino IDE**

También puedes personalizar tus fuentes de luz programando con el Arduino IDE

## Usar Xadow Duino con Arduino IDE
---
Para usar Xadow Duino con Arduino IDE, hay algunos pasos simples que necesitarías seguir:
1. [Descargar los archivos del controlador](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)
2. Por favor consulta la página de Descargar Arduino e instalar controlador de Arduino para instalar el controlador correctamente

Después de que hayas instalado correctamente el controlador, Abre **Administrador de dispositivos** haciendo clic en el botón **Inicio**, haciendo clic en **Panel de control**, haciendo clic en **Sistema y seguridad**, y luego, bajo **Sistema**, haciendo clic en **Administrador de dispositivos**. Si se te solicita una contraseña de administrador o confirmación, escribe la contraseña o proporciona confirmación. Ahora deberías poder ver los **puertos COM** en tu **'Administrador de dispositivos'** como：
- **Xadow Clip(COM20)** (El número COM podría ser diferente en tu PC.)

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Com_PORT.png)

3.Ahora descarga los [Nombres de archivos Xadow](https://github.com/freespace/Files_For_Seeed_Main_Board)
, descomprímelo y ubícate en ...**\Files_For_Seeed_Main_Board-master.7z\Files_For_Seeed_Main_Board-master\v1.6.3\seeeduino\**, copia la carpeta llamada **seeeduino** en ...**\arduino-1.6.6\hardware\** donde hayas instalado tu Arduino IDE. La versión de Arduino IDE podría ser diferente, aquí usé Arduino IDE 1.6.6

4.Ahora intentemos encender algunos LEDs, conecta tu Xadow Duino a la computadora con un micro USB, abre Arduino IDE, selecciona **Herramientas** ==> **Placa** ==> **Seeeduino Xadow**:

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Board.jpg)

luego selecciona el **Puerto** como **COM20(Seeeduino Xadow)** :

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Port.jpg)

5. Copia el siguiente código, si no tienes las librerías WS2812b, descárgalas aquí:

```c
#include <Adafruit_NeoPixel.h>

#define PIN 5   //the Xadow Duino used DIN/D5/PC6 to control the WS2812b

// Parameter 1 = number of pixels in strip
// Parameter 2 = pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_RGB     Pixels are wired for RGB bitstream
//   NEO_GRB     Pixels are wired for GRB bitstream
//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)
//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip)
Adafruit_NeoPixel strip = Adafruit_NeoPixel(60, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'

  // it is very important to set D13 as OUTPUT & HIGH as we want it to act as 'GND'
  pinMode(13,OUTPUT);
  digitalWrite(13,HIGH);
}

void loop() {
// Some example procedures showing how to display to the pixels:
  colorWipe(strip.Color(255, 0, 0), 50); // Red
  colorWipe(strip.Color(0, 255, 0), 50); // Green
  colorWipe(strip.Color(0, 0, 255), 50); // Blue
  rainbow(20);
  rainbowCycle(20);
}

// Fill the dots one after the other with a color
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, c);
      strip.show();
      delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// Slightly different, this makes the rainbow equally distributed throughout
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  if(WheelPos < 85) {
   return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
  } else if(WheelPos < 170) {
   WheelPos -= 85;
   return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else {
   WheelPos -= 170;
   return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
}
```

## Comunidad RePhone
---
[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone).

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respuestas, hacemos cosas interesantes, nos preocupamos unos por otros, y compartimos nuestras experiencias.

**Preguntas Frecuentes**

Algunas preguntas frecuentes en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone) son recopiladas y respondidas en el tema "Preguntas Frecuentes de RePhone (FAQ)", el tema se mantendrá actualizándose cada vez que surja una nueva FAQ.


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
Mantendremos actualizando el código fuente en nuestra página de github:

- [Código Fuente para Xadow Duino](https://github.com/WayenWeng/Xadow_Duino/)

El diagrama esquemático de Xadow Duino se proporciona en el siguiente enlace:

- [Archivos de Esquemas de Xadow Duino](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip)

Consulta más información sobre el fascinante LED RGB WS2812B:

- [WS2812B](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/WS2812B%20Datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
