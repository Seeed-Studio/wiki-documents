---
description: XIAO Round Dislay Christmas Ball
title: Crea una pequeña Bola de Navidad para tu Árbol de Navidad
keywords:
- XIAO
- Round Dislay
- Christmas
image: https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif
slug: /es/round_display_christmas_ball
last_update:
  date: 12/08/2024
  author: Bruno Santos
---

# Bola de Navidad con Seeed Studio Round Display para XIAO

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif" style={{width:400, height:'auto'}}/>
</div>

En este tutorial te voy a mostrar cómo puedes crear una bola de Navidad con nieve cayendo e imágenes de fondo que cambian.

El programa realiza lo siguiente:

- Muestra una imagen de fondo almacenada como un array de C.
- Simula partículas de nieve cayendo sobre la imagen, con un efecto de viento.
- Detecta entrada táctil y recorre un conjunto de imágenes de fondo.
- Usa doble buffer para animaciones suaves.

## Preparación del Entorno

### Hardware

Para el proyecto, vamos a necesitar:

- [Seeed Studio Round Display Para XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)

Estoy usando el XIAO ESP32S3 debido a la memoria. El PNGDEC requiere un poco de memoria para ejecutarse ~40kbytes.

### Preparación del Software

Para usar el Round Display, dirígete a [Comenzando con Round Display para XIAO](https://wiki.seeedstudio.com/es/get_start_round_display/#getting-started) para instalar las librerías necesarias.

Prueba algunos de los ejemplos para ver si todo funciona bien.

### Librerías

Para este proyecto, vamos a usar las librerías que vienen incluidas con el [Seeed Studio Round Display Para XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

Instala todas las librerías como se especifica en el tutorial [Comenzando con Round Display para XIAO](https://wiki.seeedstudio.com/es/get_start_round_display/#getting-started).
Después de eso, necesitas lo siguiente:

- Librería PNGdec.
- **Actualizar librería LVGL** (o no instalar la del github de Seeed Studio)

## Imágenes

Nuestras imágenes son imágenes PNG almacenadas en Arrays Flash. Se muestran usando la librería PNGdec.

**Todas las imágenes deben ser PNG**

Aquí están las imágenes que he usado - todas son generadas por IA
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png" style={{width:200, height:'auto'}}/>
</div>

Nuestras imágenes de fondo necesitan ser preparadas para que TFT_eSPI pueda mostrarlas y encajen bien en el Round Display para XIAO.

### Preparar imágenes

#### Redimensionar Imágenes

Nuestro Round Display para XIAO tiene una resolución de 240x240. Necesitamos redimensionar las imágenes. Voy a mostrar cómo hacerlo usando [GIMP](https://www.gimp.org/)

1. Abre la imagen
2. Ve a **Imagen > Escalar Imagen**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg" style={{width:600, height:'auto'}}/></div>

3. Establece Ancho y Alto a 240. Porque **Mantener Proporción** está seleccionado (la cadena), una vez que cambies el **ancho**, la **altura** también debería cambiar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg" style={{width:400, height:'auto'}}/></div>

4. Presiona el botón **Escalar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg" style={{width:400, height:'auto'}}/></div>

5. Guarda la imagen (voy a sobrescribir la anterior)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg" style={{width:400, height:'auto'}}/></div>

#### Crear los Arrays Flash

**NOTA:** Estas instrucciones están dentro del ejemplo Flash_PNG de TFT_eSPI.

Para crear el array flash, ve a [Convertidor de archivo a array estilo C](https://notisrac.github.io/FileToCArray/)

Los pasos ahora son:

1. Sube la imagen usando **Examinar**. Después de subir la imagen

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg" style={{width:800, height:'auto'}}/></div>

2. Necesitamos establecer algunas opciones

- **Tratar como binario**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg" style={{width:800, height:'auto'}}/></div>

Todas las otras opciones se ponen en gris.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg" style={{width:600, height:'auto'}}/></div>

3. Cambiemos el **Tipo de datos** a **char**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg" style={{width:800, height:'auto'}}/></div>

4. Presiona convertir. Esto convertirá la imagen a un array.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg" style={{width:800, height:'auto'}}/></div>

5. Ahora puedes presionar el botón **Guardar como archivo** para guardar tu imagen y añadirla a tu Sketch de Arduino o presionar el botón **Copiar al portapapeles**
Si **Copias al portapapeles**, tendrás que presionar los 3 puntos en el lado derecho del editor de Arduino y elegir **Nueva Pestaña**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg" style={{width:400, height:'auto'}}/></div>

Dale un nombre (generalmente el nombre de tu imagen con extensión .h)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg" style={{width:600, height:'auto'}}/></div>

Terminarás con todas tus imágenes como archivos *.h*.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg" style={{width:800, height:'auto'}}/></div>

## Código

Aquí está el código para la bola de Navidad.
Una pequeña explicación de las funciones principales del código. El código también incluye algunos comentarios.

### Encabezados y librerías

Comenzamos incluyendo algunas librerías.

```cpp
#include <PNGdec.h>
#include <TFT_eSPI.h>
#include <Wire.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"
```

Recuerda que necesitas tener las librerías de Seeed Studio instaladas.

### Imágenes de fondo

Aquí están las funciones para gestionar las imágenes de fondo

```cpp
struct Background {
  const uint8_t *data;
  size_t size;
};

const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};

```

- Estructura: Cada imagen de fondo se almacena como una estructura Background que contiene:
  - data: Puntero a los datos PNG.
  - size: Tamaño del archivo PNG.

- Array: El array backgrounds almacena todas las imágenes de fondo. La variable currentBackground rastrea el fondo actualmente mostrado.

### Simulación de partículas de nieve

1. Inicialización de partículas

```cpp
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8);
  }
}
```

- Inicializa *numParticles* con posiciones y velocidades aleatorias.

2. Actualizaciones de partículas

```cpp
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Speed variation
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed; // Move down
    particles[i].x += random(-1, 2);      // Wind effect
    // Wrap-around logic
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}
```

- Actualiza las posiciones de las partículas con:
  - Efecto de Caída: Cada partícula se mueve hacia abajo.
  - Efecto de Viento: Añade una ligera deriva horizontal.
  - Reinicio Circular: Las partículas se reinician en la parte superior cuando salen por la parte inferior.

3. Renderizado de partículas:

```cpp
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}
```

- Renderiza cada partícula como un pequeño círculo blanco

### Decodificación PNG

```cpp
int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);
if (rc != PNG_SUCCESS) {
  Serial.println("Failed to open PNG file!");
  return;
}
png.decode(NULL, 0);
```

- Carga y decodifica el fondo actual PNG usando la función *png.openFLASH()*

### Touch interaction

```cpp
if (chsc6x_is_pressed()) {
  currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle backgrounds
  delay(300); // Debounce
}
```

- Detecta un evento táctil usando *chsc6x_is_pressed()* y cambia la imagen de fondo incrementando *currentBackground*

### Configuración y bucle

- **Configuración:**

```cpp
void setup() {
  Serial.begin(115200);
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // Match display size
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  initParticles();
}
```

- Inicializa la pantalla, entrada táctil y partículas de nieve

- **Bucle principal:**

```cpp
void loop() {
  sprite.fillScreen(TFT_BLACK);
  // Render background and snow
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                             backgrounds[currentBackground].size,
                             pngDrawToSprite);
  if (rc == PNG_SUCCESS) {
    png.decode(NULL, 0);
    updateParticles();
    renderParticlesToSprite();
    sprite.pushSprite(0, 0);
  }
  // Handle touch input
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds;
    delay(300);
  }
  delay(10); // ~100 FPS
}
```

- Limpia el sprite, renderiza el frame actual (fondo + partículas), y verifica la entrada del usuario.

### Doble buffer

Para reducir el parpadeo y mejorar la suavidad de la animación de los copos de nieve, utilizamos **doble buffer**.

Esto nos permite dibujar en un buffer fuera de pantalla antes de mostrarlo en la pantalla.

#### Doble buffer aquí

En este proyecto, la clase TFT_eSprite de la biblioteca TFT_eSPI implementa el doble buffer.

1. **Creación del sprite**

- El sprite (buffer fuera de pantalla) se crea en la función setup():

```cpp
sprite.createSprite(240, 240); // Match display size
```

2. **Dibujando el búfer**

- Todas las operaciones de dibujo (renderizado de fondo y animación de partículas de nieve) se realizan en el sprite:

```cpp
sprite.fillScreen(TFT_BLACK); // Clear the sprite
renderParticlesToSprite();   // Draw snow particles
```

3. **Actualizando la pantalla**

- Después de que el marco esté completamente dibujado en el sprite, se envía a la pantalla en una sola operación:

```cpp
sprite.pushSprite(0, 0);
```

- Esto transfiere el contenido del búfer a la pantalla instantáneamente.

4. **Reutilización**

- El sprite se reutiliza para cada fotograma limpiándolo al inicio del *loop()*:

```cpp
sprite.fillScreen(TFT_BLACK);
```

### Ventajas de Usar Doble Buffer

- Animación de Nieve Suave: Las partículas de nieve que caen se actualizan sin problemas y sin parpadeo.
- Cambio Dinámico de Fondo: Los cambios de fondo activados por toque ocurren sin retrasos visibles o artefactos.
- Renderizado Eficiente: Dibujar en memoria (RAM) es más rápido que actualizar directamente la pantalla línea por línea.

**Aquí está el código completo para el proyecto**:

```cpp
/**
*
* To create the images as C arrays, visit:
* https://notisrac.github.io/FileToCArray/
*
*/
#include <PNGdec.h>
#include <TFT_eSPI.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

// PNG decoder and TFT display instances
PNG png;
//TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft); // Off-screen buffer

#define MAX_IMAGE_WIDTH 240 

// Backgrounds for the snow globe
struct Background {
  const uint8_t *data;
  size_t size;
};

// Define the backgrounds with explicit casting
const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};
const size_t numBackgrounds = sizeof(backgrounds) / sizeof(backgrounds[0]);

int currentBackground = 0; // Index of the current background

// Snow particle properties
const int numParticles = 100; // Number of snow particles
struct Particle {
  int16_t x, y;   // Position
  int16_t speed;  // Vertical speed
};
Particle particles[numParticles];

// Function to draw PNG to the sprite (callback for PNG decoder)
void pngDrawToSprite(PNGDRAW *pDraw) {
  uint16_t lineBuffer[MAX_IMAGE_WIDTH];
  png.getLineAsRGB565(pDraw, lineBuffer, PNG_RGB565_BIG_ENDIAN, 0xffffffff);
  sprite.pushImage(0, pDraw->y, pDraw->iWidth, 1, lineBuffer);
}

// Initialize snow particles
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8); // Random speed for each snowflake
  }
}

// Update snow particle positions
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Random variation in speed
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed;
    particles[i].x += random(-1, 2); // Wind effect

    // Wrap around screen
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}

// Render snow particles to the sprite
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}

void setup() {
  Serial.begin(115200);
  Serial.println("\n\nUsing the PNGdec library with touch interaction");

  // Initialize TFT
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // Match display size

  // Initialize touch interrupt pin
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // Initialize particles
  initParticles();

  Serial.println("Setup complete.");
}

void loop() {
  // Clear the sprite for the new frame
  sprite.fillScreen(TFT_BLACK);

  // Render the current background to the sprite  
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);


  if (rc != PNG_SUCCESS) {
    Serial.println("Failed to open PNG file!");
    return;
  }
  png.decode(NULL, 0); // Decode and render background

  // Update and render snow particles
  updateParticles();
  renderParticlesToSprite();

  // Push the sprite to the display
  sprite.pushSprite(0, 0);

  // Check for touch input using chsc6x_is_pressed
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle through backgrounds
    delay(300); // Debounce delay
  }

  delay(10); // ~100 FPS
}
```

Ahora puedes usar tus propias imágenes para crear una Bola de Navidad mágica.

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias [Bruno Santos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?sliceBy%5Bvalue%5D=feiticeir0&pane=issue&itemId=90657934&issue=Seeed-Studio%7Cwiki-documents%7C1993) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
