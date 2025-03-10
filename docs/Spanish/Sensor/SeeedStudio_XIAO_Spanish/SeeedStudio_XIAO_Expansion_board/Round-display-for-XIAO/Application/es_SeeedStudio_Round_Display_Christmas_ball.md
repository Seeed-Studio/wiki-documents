---
description: XIAO Round Dislay Christmas Ball
title: Crea una pequeña Esfera Navideña para tu árbol de Navidad
keywords:
- XIAO
- Round Dislay
- Christmas
image: https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif
slug: /es/round_display_christmas_ball
last_update:
  date: 02/16/2025
  author: Guillermo
---

# Pantalla Redonda Seeed Studio para XIAO Bola de Navidad

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif" style={{width:400, height:'auto'}}/>
</div>

En este tutorial te voy a mostrar cómo puedes crear una bola de Navidad con nieve cayendo y fondos de imagen cambiantes.

El programa realiza lo siguiente:
- Muestra una imagen de fondo almacenada como un arreglo C.
- Simula partículas de nieve cayendo sobre la imagen, con un efecto de viento.
- Detecta la entrada táctil y cambia entre un conjunto de imágenes de fondo.
- Utiliza doble buffer para animaciones suaves.

## Preparación del Entorno
### Hardware
Para el proyecto, necesitamos:
- [Pantalla Redonda Seeed Studio para XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)

Estoy usando el XIAO ESP32S3 debido a la memoria. PNGDEC requiere algo de memoria para funcionar (~40kbytes).

### Preparación del Software

Para usar la Pantalla Redonda, dirígete a [Comenzando con la Pantalla Redonda para XIAO](https://wiki.seeedstudio.com/get_start_round_display/#getting-started) para instalar las bibliotecas necesarias.

Prueba algunos de los ejemplos para verificar que todo esté funcionando bien.

### Bibliotecas
Para este proyecto, vamos a usar las bibliotecas que vienen incluidas con la [Pantalla Redonda Seeed Studio para XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

Instala todas las bibliotecas según lo especificado en el tutorial [Comenzando con la Pantalla Redonda para XIAO](https://wiki.seeedstudio.com/get_start_round_display/#getting-started).
Después de eso, necesitas lo siguiente:
- Biblioteca PNGdec.
- **Actualiza la biblioteca LVGL** (o no instales la que está en el GitHub de Seeed Studio).

## Imágenes
Nuestras imágenes son archivos PNG almacenados en arreglos de Flash. Se muestran usando la biblioteca PNGdec.

**Todas las imágenes deben ser PNG**

Estas son las imágenes que he usado, todas generadas por IA.
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png" style={{width:200, height:'auto'}}/>
</div>

Nuestras imágenes de fondo deben estar preparadas para que TFT_eSPI pueda mostrarlas y se ajusten bien a la Pantalla Redonda para XIAO.

### Preparar las imágenes
#### Redimensionar Imágenes
Nuestra Pantalla Redonda para XIAO tiene una resolución de 240x240. Necesitamos redimensionar las imágenes. Voy a mostrar cómo hacerlo usando [GIMP](https://www.gimp.org/)

1. Abre la imagen.
2. Ve a **Imagen > Escalar Imagen**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg" style={{width:600, height:'auto'}}/></div>

3. Establece el ancho y la altura a 240. Debido a que está seleccionada la opción **Mantener proporción** (la cadena), una vez que cambies el **ancho**, la **altura** también cambiará.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg" style={{width:400, height:'auto'}}/></div>

4. Presiona el botón **Escalar**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg" style={{width:400, height:'auto'}}/></div>

5. Guarda la imagen (voy a sobrescribir la anterior).
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg" style={{width:400, height:'auto'}}/></div>

#### Crear los Arreglos Flash

**NOTA:** Estas instrucciones están dentro del ejemplo Flash_PNG de TFT_eSPI.

Para crear el arreglo Flash, ve a [Convertidor de archivo a arreglo estilo C](https://notisrac.github.io/FileToCArray/)

Los pasos ahora son:
1. Sube la imagen usando **Explorar**. Después de subir la imagen
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg" style={{width:800, height:'auto'}}/></div>

2. Necesitamos establecer algunas opciones
- **Tratar como binario**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg" style={{width:800, height:'auto'}}/></div>

Las demás opciones se desactivan.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg" style={{width:600, height:'auto'}}/></div>

3. Cambia el **Tipo de dato** a **char**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg" style={{width:800, height:'auto'}}/></div>

4. Presiona convertir. Esto convertirá la imagen a un arreglo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg" style={{width:800, height:'auto'}}/></div>

5. Ahora puedes presionar el botón **Guardar como archivo** para guardar tu imagen y agregarla a tu Sketch de Arduino o presionar el botón **Copiar al portapapeles**.
Si **Copias al portapapeles**, deberás presionar los 3 puntos en el lado derecho del editor de Arduino y elegir **Nueva pestaña**.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg" style={{width:400, height:'auto'}}/></div>

Dale un nombre (generalmente el nombre de tu imagen con la extensión .h).
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg" style={{width:600, height:'auto'}}/></div>

Terminarás con todas tus imágenes como archivos *.h*.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg" style={{width:800, height:'auto'}}/></div>

## Código
Aquí está el código para la bola de Navidad.
Una pequeña explicación de las funciones principales del código. El código también incluye algunos comentarios.

### Encabezados y bibliotecas
Comenzamos incluyendo algunas bibliotecas.
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
Recuerda que necesitas tener instaladas las bibliotecas de Seeed Studio.

### Imágenes de fondo
Aquí están las funciones para gestionar las imágenes de fondo.
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
- Struct: Cada imagen de fondo se almacena como una estructura Background que contiene:
  - data: Puntero a los datos PNG.
  - size: Tamaño del archivo PNG.

- Array: El arreglo backgrounds almacena todas las imágenes de fondo. La variable currentBackground rastrea la imagen de fondo actualmente mostrada.

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

2. Actualización de partículas
```cpp
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Variación de velocidad
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed; // Movimiento hacia abajo
    particles[i].x += random(-1, 2);      // Efecto de viento
    // Lógica de envolvimiento
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
  - Efecto de caída: Cada partícula se mueve hacia abajo.
  - Efecto de viento: Añade una leve deriva horizontal.
  - Lógica de envolvimiento: Las partículas se reinician en la parte superior cuando salen por la parte inferior.

3. Renderizado de partículas:
```cpp
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}
```
- Renderiza cada partícula como un pequeño círculo blanco.

### Decodificación PNG
```cpp
int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);
if (rc != PNG_SUCCESS) {
  Serial.println("¡Error al abrir el archivo PNG!");
  return;
}
png.decode(NULL, 0);
```
- Carga y decodifica el PNG de fondo actual usando la función *png.openFLASH()*.

### Interacción táctil
```cpp
if (chsc6x_is_pressed()) {
  currentBackground = (currentBackground + 1) % numBackgrounds; // Cambia entre fondos
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
  sprite.createSprite(240, 240); // Coincide con el tamaño de la pantalla
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  initParticles();
}
```
- Inicializa la pantalla, la entrada táctil y las partículas de nieve

- **Bucle principal:**
```cpp
void loop() {
  sprite.fillScreen(TFT_BLACK);
  // Renderiza el fondo y la nieve
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                             backgrounds[currentBackground].size,
                             pngDrawToSprite);
  if (rc == PNG_SUCCESS) {
    png.decode(NULL, 0);
    updateParticles();
    renderParticlesToSprite();
    sprite.pushSprite(0, 0);
  }
  // Maneja la entrada táctil
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds;
    delay(300);
  }
  delay(10); // ~100 FPS
}
```
- Limpia el sprite, renderiza el cuadro actual (fondo + partículas) y revisa la entrada del usuario.

### Doble búfer
Para reducir el parpadeo y mejorar la suavidad de la animación de los copos de nieve, usamos **doble búfer**.

Esto nos permite dibujar en un búfer fuera de pantalla antes de mostrarlo en la pantalla.
#### Doble búfer aquí
En este proyecto, la clase TFT_eSprite de la biblioteca TFT_eSPI implementa el doble búfer.
1. **Creación del sprite**
- El sprite (búfer fuera de pantalla) se crea en la función setup():
```cpp
sprite.createSprite(240, 240); // Coincide con el tamaño de la pantalla
```
2. **Dibujo del búfer**
- Todas las operaciones de dibujo (renderizado del fondo y animación de partículas de nieve) se hacen en el sprite:
```cpp
sprite.fillScreen(TFT_BLACK); // Limpia el sprite
renderParticlesToSprite();   // Dibuja las partículas de nieve
```

3. **Actualización de la pantalla**
- Después de que el cuadro se haya dibujado completamente en el sprite, se muestra en la pantalla con una sola operación:
```cpp
sprite.pushSprite(0, 0);
```
- Esto transfiere el contenido del búfer a la pantalla al instante.

4. **Reutilización**
- El sprite se reutiliza para cada cuadro limpiándolo al principio del *loop()*:
```cpp
sprite.fillScreen(TFT_BLACK);
```
### Ventajas de usar Doble Búfer
- Animación suave de la nieve: Las partículas de nieve caen sin parpadeo.
- Cambio dinámico de fondo: Los cambios de fondo activados por toque ocurren sin demoras visibles ni artefactos.
- Renderizado eficiente: Dibujar en memoria (RAM) es más rápido que actualizar directamente la pantalla línea por línea.

**Aquí está el código completo del proyecto**:
```cpp
/**
*
* Para crear las imágenes como arreglos C, visita:
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

// Instancias del decodificador PNG y la pantalla TFT
PNG png;
//TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft); // Búfer fuera de pantalla

#define MAX_IMAGE_WIDTH 240 

// Fondos para la bola de nieve
struct Background {
  const uint8_t *data;
  size_t size;
};

// Definir los fondos con conversión explícita
const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};
const size_t numBackgrounds = sizeof(backgrounds) / sizeof(backgrounds[0]);

int currentBackground = 0; // Índice del fondo actual

// Propiedades de las partículas de nieve
const int numParticles = 100; // Número de partículas de nieve
struct Particle {
  int16_t x, y;   // Posición
  int16_t speed;  // Velocidad vertical
};
Particle particles[numParticles];

// Función para dibujar el PNG en el sprite (callback para el decodificador PNG)
void pngDrawToSprite(PNGDRAW *pDraw) {
  uint16_t lineBuffer[MAX_IMAGE_WIDTH];
  png.getLineAsRGB565(pDraw, lineBuffer, PNG_RGB565_BIG_ENDIAN, 0xffffffff);
  sprite.pushImage(0, pDraw->y, pDraw->iWidth, 1, lineBuffer);
}

// Inicializa las partículas de nieve
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8); // Velocidad aleatoria para cada copo de nieve
  }
}

// Actualiza las posiciones de las partículas de nieve
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Variación aleatoria en la velocidad
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed;
    particles[i].x += random(-1, 2); // Efecto viento

    // Envolver en la pantalla
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}

// Renderiza las partículas de nieve en el sprite
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}

void setup() {
  Serial.begin(115200);
  Serial.println("\n\nUsando la librería PNGdec con interacción táctil");

  // Inicializa TFT
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // Coincide con el tamaño de la pantalla

  // Inicializa el pin de interrupción táctil
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // Inicializa las partículas
  initParticles();

  Serial.println("Configuración completa.");
}

void loop() {
  // Limpia el sprite para el nuevo cuadro
  sprite.fillScreen(TFT_BLACK);

  // Renderiza el fondo actual en el sprite  
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);


  if (rc != PNG_SUCCESS) {
    Serial.println("¡Error al abrir el archivo PNG!");
    return;
  }
  png.decode(NULL, 0); // Decodifica y renderiza el fondo

  // Actualiza y renderiza las partículas de nieve
  updateParticles();
  renderParticlesToSprite();

  // Muestra el sprite en la pantalla
  sprite.pushSprite(0, 0);

  // Revisa la entrada táctil usando chsc6x_is_pressed
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds; // Cicla entre los fondos
    delay(300); // Retraso de rebote
  }

  delay(10); // ~100 FPS
}
```

Ahora puedes usar tus propias imágenes para crear una bola de Navidad mágica.

## ✨ Proyecto Contribuyente

- Este proyecto está apoyado por el [Proyecto Contribuyente](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [Bruno Santos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?sliceBy%5Bvalue%5D=feiticeir0&pane=issue&itemId=90657934&issue=Seeed-Studio%7Cwiki-documents%7C1993) y su trabajo será [exhibido](https://wiki.seeedstudio.com/contributors/).

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
