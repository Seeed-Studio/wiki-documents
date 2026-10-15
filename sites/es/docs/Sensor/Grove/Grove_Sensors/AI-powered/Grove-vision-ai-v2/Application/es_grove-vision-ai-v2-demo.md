---
description: Algunos ejemplos usando Grove Vision AI V2 y la serie XIAO ESP32.
title: Ejemplos para Grove Vision AI V2 y XIAO ESP32
keywords:
  - xiao
  - vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_demo
sku: 101021112,E23011220,104990982
last_update:
  date: 04/16/2024
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/grove_vision_ai_v2_demo/
---

# Ejemplos para Grove Vision AI V2 y XIAO ESP32

Desbloquea el potencial de la computación en el borde y explora el fascinante mundo de la visión AI con la poderosa combinación del Grove Vision AI V2 y el MCU de la serie XIAO ESP32. En este tutorial, te guiaremos a través de 2~3 demos cautivadores que muestran la integración perfecta de estas tecnologías de vanguardia.

Ya seas un desarrollador experimentado o un entusiasta curioso, estos demos te proporcionarán experiencia práctica en el aprovechamiento de las capacidades del Grove Vision AI V2 y XIAO ESP32. Desde detección y reconocimiento de objetos hasta análisis inteligente de escenas, descubrirás cómo crear aplicaciones innovadoras que empujan los límites de lo que es posible.

Prepárate para embarcarte en un viaje emocionante mientras desentrañamos los secretos de la visión AI y te empoderamos para construir tus propios proyectos revolucionarios. ¡Sumerjámonos y liberemos la magia del Grove Vision AI V2 y XIAO ESP32 juntos!

Esta descripción de apertura tiene como objetivo captar la atención del lector, destacar los componentes clave (Grove Vision AI V2 y XIAO ESP32), y proporcionar un vistazo de lo que cubrirá el tutorial. Enfatiza las posibilidades emocionantes de combinar estas tecnologías y anima a los lectores a explorar los demos con entusiasmo. Siéntete libre de adaptar y modificar el párrafo para que se ajuste mejor al estilo y tono de tu tutorial.

## Comenzando

### Preparación del Hardware

Los tutoriales y procedimientos en este artículo pueden ser utilizados en productos de la serie XIAO ESP32 (XIAO ESP32S3, XIAO ESP32C3, XIAO ESP32C6, etc.), y puedes elegir cualquiera de los productos de la serie XIAO ESP32 para completar los contenidos de este tutorial.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Además del MCU maestro, necesitamos preparar el Grove Vision AI V2 y las cámaras compatibles para completar el contenido de este proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

Si deseas usar otra cámara, puedes leer [la lista de cámaras compatibles aquí](https://wiki.seeedstudio.com/es/Grove-vision-ai-v2-camera-supported/) para obtener más información.


### Preparación del Software

Si esta es tu primera vez usando el producto Grove Vision AI V2, te recomendamos leer el Wiki a continuación para aprender y usar SenseCraft AI y entender cómo subir modelos. Y aprender cómo instalar la biblioteca de Arduino para Grove Vision AI V2.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/grove_vision_ai_v2_software_support/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Ir al Wiki</font></span></strong>
    </a>
</div>


## Proyecto I: Crear un Ventilador que Sigue Rostros

En esta emocionante demostración, te mostraremos cómo crear un ventilador que sigue rostros y que automáticamente sigue cada uno de tus movimientos, asegurando que una brisa refrescante siempre esté dirigida hacia ti.

Usando el Grove Vision AI V2, aprovecharemos la magia del reconocimiento facial para detectar y rastrear tu rostro en tiempo real. El Vision AI V2 continuamente emitirá las coordenadas de tu rostro, proporcionando los datos necesarios para el posicionamiento preciso del ventilador.

### Paso 1. Subir modelos de reconocimiento facial al Grove Vision AI V2

Para este proyecto vamos a hacer un ventilador que sigue rostros, así que lo que necesitamos usar para el Grove Vision AI V2 es un modelo de reconocimiento facial. Puedes subir este modelo usando SenseCraft AI y observar la detección en la ventana de vista previa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Preparar ventiladores y estructuras rotatorias

Dado que la estructura del ventilador no es fácil de modificar, para la estructura de dirección del ventilador, planeamos hacer un chasis de dirección horizontal controlado por un servo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/2.jpg" style={{width:400, height:'auto'}}/></div>

Luego, usando láminas acrílicas y pegamento termofusible, pegamos el ventilador al servo base.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/3.jpg" style={{width:400, height:'auto'}}/></div>

Los cables del servo están conectados al pin D6 del XIAO ESP32 y se alimentan con 5V. El Grove Vision AI V2 simplemente se conecta a la interfaz IIC del XIAO a través de la interfaz Grove. Aquí también usamos la [Placa Base de Expansión para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) para facilitar el cableado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/4.jpg" style={{width:400, height:'auto'}}/></div>

Finalmente, no olvides pegar la cámara del Grove Vision AI V2 en el centro del ventilador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/5.jpg" style={{width:400, height:'auto'}}/></div>

### Paso 3. Subir programa para XIAO

A continuación se muestra el programa completo para este proyecto, por favor compila y sube este programa para la serie XIAO ESP32.

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA Infer;

void stop_rotate(void)
{
    digitalWrite(D6, HIGH);
    delayMicroseconds(1500);
    digitalWrite(D6, LOW);
}

void servo_rotate(int rtime, bool revers = false)
{
    uint32_t sleep;
    if (revers)
    {
        sleep = 2500;
    }
    else
    {
        sleep = 500;
    }
    digitalWrite(D6, HIGH);

    delayMicroseconds(sleep);
    digitalWrite(D6, LOW);
    delay(30 * rtime);
    stop_rotate();
}

void setup()
{
    Infer.begin();
    Serial.begin(9600);
    pinMode(D6, OUTPUT);
}

void loop()
{
    if (!Infer.invoke())
    {
        if (Infer.boxes().size() > 0)
        {
            if (Infer.boxes()[0].x < 80)
            {
                servo_rotate(1, true);
            }
            else if (Infer.boxes()[0].x > 140)
            {
                servo_rotate(1, false);
            }
            Serial.print("X==>>");
            Serial.print(Infer.boxes()[0].x);
            Serial.print("Y==>>");
            Serial.println(Infer.boxes()[0].y);
        }
    }
}
```

Si el programa se ejecuta sin problemas, deberías ver el efecto mostrado a continuación.

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project1.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
La rotación y el ángulo del servo pueden variar de un servo a otro, por lo que realiza algunos ajustes apropiados dependiendo del servo que estés usando, que puede necesitar ser ajustado.
:::


### Anotación del programa

El código está estructurado de la siguiente manera:

1. Inclusión de Librerías:
   - `Seeed_Arduino_SSCMA.h`: Habilita la inferencia con el Grove Vision AI V2.

2. Declaración de Objetos:
   - `SSCMA Infer`: Crea una instancia de la clase SSCMA para inferencia.

3. Función stop_rotate:
   - Detiene la rotación del motor servo enviando un ancho de pulso específico.

4. Función servo_rotate:
   - Rota el motor servo por una duración y dirección especificadas.
   - `rtime`: Determina la duración de rotación en unidades de 30 milisegundos.
   - `revers`: Especifica la dirección de rotación (true para reversa, false para adelante).

5. Función Setup:
   - Inicializa el Grove Vision AI V2, comunicación serial, y configura el pin del motor servo (D0) como salida.

6. Función Loop:
   - Invoca continuamente el proceso de inferencia.
   - Si se detecta un objeto:
     - Si la coordenada x del objeto es menor que 80, el motor servo rota en dirección reversa por una duración corta.
     - Si la coordenada x del objeto es mayor que 140, el motor servo rota en dirección adelante por una duración corta.
   - Imprime las coordenadas x e y del objeto detectado al monitor serial.

Para modificar el código y personalizar el sistema de seguimiento de objetos, puedes:

1. Ajustar los valores umbral (80 y 140) en la función loop para cambiar el rango dentro del cual el motor servo permanece estacionario.

2. Modificar la función `servo_rotate` para ajustar la duración de rotación y velocidad del motor servo.

3. Personalizar el comportamiento del sistema basado en la posición del objeto. Por ejemplo, puedes añadir condiciones adicionales o acciones dependiendo de las coordenadas x e y del objeto detectado.

4. Extender el código para controlar motores servo adicionales o realizar otras acciones basadas en la posición del objeto.


## Proyecto II: Bloqueo/Desbloqueo Automático de PC

Mejora la seguridad y conveniencia de tu computadora con este proyecto de bloqueo/desbloqueo automático de pantalla usando el Grove Vision AI V2 y XIAO ESP32. Esta configuración innovadora asegura que tu pantalla permanezca bloqueada cuando estés ausente y se desbloquee rápidamente cuando regreses, proporcionando una experiencia de usuario fluida y segura.

### Paso 1. Subir modelos de reconocimiento facial al Grove Vision AI V2

Para este proyecto, desbloquearemos/bloquearemos la PC basándonos en la presencia de alguien frente a la computadora, por lo que lo que necesitamos usar para el Grove Vision AI V2 es un modelo de reconocimiento facial. Puedes subir este modelo usando SenseCraft AI y observar la detección en la ventana de vista previa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. XIAO se conecta a la computadora y sube el programa para XIAO

A continuación se muestra el programa completo para este proyecto, por favor compila y sube este programa para la serie XIAO ESP32.

```cpp
#include "USB.h"
#include <USBHIDKeyboard.h>
#include <Seeed_Arduino_SSCMA.h>

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
// Set the screen pause time when no one is around, unit: ms
#define SCREEN_TIME 10000

SSCMA Infer;
USBHIDKeyboard Keyboard;

extern char password[] = "YOUR_COMPUTER_PASSWORD";
extern uint pass_size = 6;
unsigned long times;

bool locked = false; 

void lockPC() {
  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(KEY_DELETE);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);
  
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = true;
}

void unlockPC (){
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);
  for(int i = 0; i < pass_size; i++){
    Keyboard.press(password[i]);
    delay(KEY_DEBOUNCE);
    Keyboard.releaseAll();
  }
  delay(KEY_WAIT);
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = false;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Scanning...");

  // Start HID
  Keyboard.begin();
  USB.begin();
  Infer.begin();

  times = millis();
}

void loop() {
  // put your main code here, to run repeatedly:
  if (!Infer.invoke()) {
    if (Infer.boxes().size() > 0) {
      if (locked) {
        unlockPC();
        Serial.println("Unlock");
      }
      times = millis();
    } else {
      if ((millis() - times) > SCREEN_TIME && !locked) {
        lockPC();
        Serial.println("Lock");
      }
    }
  } else {
    if ((millis() - times) > SCREEN_TIME && !locked) {
      lockPC();
      Serial.println("Lock");
    }
  }
}
```

Si el programa funciona correctamente, deberías ver el efecto mostrado a continuación.

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
1. Este programa solo funciona en computadoras Windows, si tienes una computadora con otro sistema, es posible que necesites cambiar el comando para apagar la pantalla.

2. Si tu computadora Windows está configurada con un método de desbloqueo diferente al desbloqueo por huella dactilar o contraseña, el código para desbloquearla puede no funcionar.
:::

### Anotación del programa

El código está estructurado de la siguiente manera:

1. Incluir las librerías necesarias:
   - `USB.h`: Maneja la comunicación USB.
   - `USBHIDKeyboard.h`: Habilita la funcionalidad de teclado USB HID.
   - `Seeed_Arduino_SSCMA.h`: Proporciona capacidades de inferencia para la detección de personas.

2. Definir constantes:
   - `KEY_DEBOUNCE`: Tiempo de rebote para las entradas del teclado.
   - `KEY_WAIT`: Tiempo de espera entre entradas del teclado.
   - `SCREEN_TIME`: Duración de tiempo sin la presencia de una persona antes de bloquear la pantalla.

3. Crear instancias de las clases SSCMA (Infer) y USBHIDKeyboard (Keyboard).

4. Declarar variables:
   - `password[]`: Almacena la contraseña de la computadora para desbloquear.
   - `pass_size`: Almacena la longitud de la contraseña.
   - `times`: Almacena la marca de tiempo de la última detección de persona.
   - `locked`: Rastrea el estado actual de bloqueo de la computadora.

5. función lockPC:
   - Simula el atajo de teclado (Win+L) para bloquear la computadora.
   - Espera las duraciones `KEY_DEBOUNCE` y `KEY_WAIT`.
   - Presiona la tecla return para confirmar la acción de bloqueo.
   - Actualiza la variable locked para indicar el estado bloqueado.

6. función unlockPC:
   - Presiona la tecla return para iniciar el proceso de desbloqueo.
   - Espera las duraciones `KEY_DEBOUNCE` y `KEY_WAIT`.
   - Simula escribir la contraseña carácter por carácter.
   - Presiona la tecla return para confirmar la entrada de la contraseña.
   - Actualiza la variable locked para indicar el estado desbloqueado.

7. función Setup:
   - Inicializa la comunicación serie.
   - Inicia el teclado USB (Keyboard) y el motor de inferencia (Infer).
   - Establece la marca de tiempo inicial para la detección de personas.

8. función Loop:
   - Invoca el motor de inferencia (Infer).
   - Si se detecta una persona:
     - Si la computadora está bloqueada, llama a la función `unlockPC` para desbloquearla.
     - Actualiza la marca de tiempo de la última detección de persona.
   - Si no se detecta ninguna persona:
     - Si el tiempo desde la última detección de persona excede `SCREEN_TIME` y la computadora no está bloqueada, llama a la función `lockPC` para bloquearla.
   - Si la inferencia falla:
     - Si el tiempo desde la última detección de persona excede `SCREEN_TIME` y la computadora no está bloqueada, llama a la función `lockPC` para bloquearla.

Para personalizar el código según tus requerimientos, puedes hacer los siguientes cambios:

1. Actualizar la contraseña:
   - Reemplaza `YOUR_COMPUTER_PASSWORD` con tu contraseña real de la computadora.
   - Modifica `pass_size` para que coincida con la longitud de tu contraseña.

2. Ajustar las constantes:
   - Modifica `KEY_DEBOUNCE` y `KEY_WAIT` para cambiar el tiempo de las entradas del teclado.
   - Modifica `SCREEN_TIME` para cambiar la duración de tiempo sin la presencia de una persona antes de bloquear la pantalla.

3. Personalizar el proceso de bloqueo y desbloqueo:
   - En las funciones `lockPC` y `unlockPC`, puedes modificar los atajos de teclado o secuencias de entrada para que coincidan con tu sistema operativo específico o configuraciones de seguridad.

4. Integrar funcionalidad adicional:
   - Puedes extender el código para incluir acciones adicionales o notificaciones cuando la computadora esté bloqueada o desbloqueada.
   - Por ejemplo, puedes enviar un correo electrónico, activar una alarma o registrar los eventos.

## Proyecto III: Ratón Controlado por Gestos

Transforma tu experiencia de interacción humano-computadora con este revolucionario proyecto de ratón controlado por gestos utilizando el Grove Vision AI V2 y XIAO ESP32. Despídete de la entrada tradicional del ratón y adopta una forma más intuitiva y natural de navegar por tu computadora.

El Grove Vision AI V2 toma el protagonismo en este proyecto, utilizando sus capacidades avanzadas de visión por computadora para detectar y rastrear los gestos de la mano del usuario. Mediante el empleo de algoritmos sofisticados, puede reconocer movimientos específicos de la mano y traducirlos en acciones correspondientes del ratón.

### Paso 1. Subir modelos de reconocimiento de gestos al Grove Vision AI V2

Para este proyecto, operaremos el ratón basado en gestos, por lo que lo que necesitamos usar para el Grove Vision AI V2 es un modelo de reconocimiento de gestos. Puedes subir este modelo usando SenseCraft AI y observar la detección en la ventana de vista previa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/6.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. XIAO se conecta a la computadora y sube el programa para XIAO

A continuación se muestra el programa completo para este proyecto, por favor compila y sube este programa para la serie XIAO ESP32.

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include "USBHIDMouse.h"
#include "USB.h"

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
#define RESET_NUM 3
#define LEFT_CLICK_TARGET 0
#define MOVE_TARGET 1
#define RIGHT_CLICK_TARGET 2

SSCMA Infer;
USBHIDMouse Mouse;

int X = 0, Y = 0;
int8_t mx, my;
bool clicked = false;
int reset_mouse = RESET_NUM;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Infer.begin();
  
  // initialize mouse control:
  Mouse.begin();
  USB.begin();
}

void move_mouse(int mx, int my) {
  Mouse.move(mx, my);
}

void loop() {
  if (!Infer.invoke()) {
    Serial.println("INVOKE SUCCESS:");
    if (Infer.boxes().size() == 0) {
      if (reset_mouse <= 0) {
        X = 0;
        Y = 0;
      } else {
        reset_mouse -= 1;
      }
    }

    for (int i = 0; i < Infer.boxes().size() && i < 1; i++) {
      reset_mouse = RESET_NUM;
      if (Infer.boxes()[i].target == MOVE_TARGET) {
//        Mouse.press(MOUSE_RIGHT);
        if (X == 0 && Y == 0) {
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
        } else {
          mx = Infer.boxes()[i].x - X;
          my = Infer.boxes()[i].y - Y;
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
          move_mouse(-mx * 2, my * 2);
          clicked = false;
        }
      } else if (Infer.boxes()[i].target == LEFT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_LEFT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_LEFT);
        delay(KEY_WAIT);
        clicked = true;
      } else if (Infer.boxes()[i].target == RIGHT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_RIGHT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_RIGHT);
        delay(KEY_WAIT);
        clicked = false;
      }
    }

  } else {
    Serial.println("INVOKE FAILE!");
  }
}
```

Si el programa se ejecuta sin problemas, deberías ver el efecto mostrado a continuación.

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project3.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Anotación del programa

El código está estructurado de la siguiente manera:

1. Incluir las librerías necesarias:
   - `Seeed_Arduino_SSCMA.h`: Proporciona capacidades de inferencia para detección de objetivos.
   - `USBHIDMouse.h`: Habilita la funcionalidad de ratón USB HID.
   - `USB.h`: Maneja la comunicación USB.

2. Definir constantes:
   - `KEY_DEBOUNCE`: Tiempo de antirrebote para clics del ratón.
   - `KEY_WAIT`: Tiempo de espera entre clics del ratón.
   - `RESET_NUM`: Número de fotogramas sin objetivos detectados antes de restablecer la posición del ratón.
   - `LEFT_CLICK_TARGET`, `MOVE_TARGET`, `RIGHT_CLICK_TARGET`: IDs de objetivo para diferentes acciones.

3. Crear instancias de las clases SSCMA (Infer) y USBHIDMouse (Mouse).

4. Declarar variables:
   - `X`, `Y`: Almacenan la posición actual del ratón.
   - `mx`, `my`: Almacenan los deltas de movimiento del ratón.
   - `clicked`: Rastrea el estado del clic.
   - `reset_mouse`: Contador para restablecer la posición del ratón.

5. Función setup:
   - Inicializar la comunicación serie.
   - Comenzar el motor de inferencia (Infer) y el ratón USB (Mouse).

6. Función move_mouse:
   - Mueve el ratón por los deltas especificados (`mx`, `my`).

7. Función loop:
   - Invocar el motor de inferencia (Infer).
   - Si la inferencia es exitosa y no se detectan objetivos, restablecer la posición del ratón después de `RESET_NUM` fotogramas.
   - Iterar a través de los objetivos detectados (limitado a 1 en este código):
     - Si el objetivo es `MOVE_TARGET`:
       - Actualizar la posición del ratón basándose en las coordenadas del objetivo.
       - Calcular los deltas de movimiento del ratón (mx, my).
       - Mover el ratón en consecuencia.
     - Si el objetivo es `LEFT_CLICK_TARGET` y no se ha hecho clic ya:
       - Realizar un clic izquierdo del ratón.
       - Esperar las duraciones `KEY_DEBOUNCE` y `KEY_WAIT`.
     - Si el objetivo es `RIGHT_CLICK_TARGET` y no se ha hecho clic ya:
       - Realizar un clic derecho del ratón.
       - Esperar las duraciones `KEY_DEBOUNCE` y `KEY_WAIT`.
   - Si la inferencia falla, imprimir un mensaje de error.

Para personalizar el código según tus requerimientos, puedes hacer los siguientes cambios:

1. Ajustar las constantes:
   - Modificar `KEY_DEBOUNCE` y `KEY_WAIT` para cambiar el tiempo de los clics del ratón.
   - Modificar `RESET_NUM` para cambiar el número de fotogramas sin objetivos detectados antes de restablecer la posición del ratón.
   - Actualizar `LEFT_CLICK_TARGET`, `MOVE_TARGET`, y `RIGHT_CLICK_TARGET` para que coincidan con tus IDs de objetivo específicos.

2. Modificar la lógica de manejo de objetivos:
   - En la función loop, puedes añadir, eliminar o modificar las condiciones y acciones basándose en los objetivos detectados.
   - Por ejemplo, puedes añadir botones adicionales del ratón, implementar doble-clics, o activar diferentes acciones basándose en IDs de objetivo específicos.

3. Personalizar el movimiento del ratón:
   - En la función `move_mouse`, puedes modificar el comportamiento del movimiento del ratón ajustando los factores de multiplicación (`-mx * 2`, `my * 2`) o añadiendo lógica adicional.

4. Integrar funcionalidad adicional:
   - Puedes extender el código para incluir controles de teclado, controles de medios, o cualquier otra característica deseada utilizando las librerías y funciones apropiadas.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
