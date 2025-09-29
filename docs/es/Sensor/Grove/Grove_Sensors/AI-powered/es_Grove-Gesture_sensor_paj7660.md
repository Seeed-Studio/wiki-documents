---
description: Introducción al sensor de gestos Grove PAJ7660.
title: Grove Sensor de Gestos IR Inteligente (PAJ7660)
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/grove_gesture_paj7660
last_update:
  date: 06/28/2023
  author: Citric
---

# Grove Sensor de Gestos IR Inteligente (PAJ7660)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Sensor de Gestos IR Inteligente Grove es un módulo inteligente de reconocimiento de gestos equipado con un sensor de cámara infrarroja y algoritmo de IA aplicado. Puede detectar más de 15 gestos con detección amplia mientras soporta comunicación tanto IIC como SPI. Este módulo también permite conexión directa con Grove, Type-C y Seeed Studio XIAO.

### Características

- **Sensor de gestos AI compacto**: Equipado con un sensor de cámara infrarroja y aplica algoritmo de IA para lograr detección de gestos, en una placa de tamaño compacto de 4.3cm x 2.1cm
- **Más de 15 gestos con detección amplia**: Soporta varios gestos como empuje de N dedos, pellizco, toque, agarre, rotación, pulgar arriba/abajo, estático, etc., con un rango de detección de 5-40cm
- **Alta compatibilidad**: Compatible con la interfaz de la serie XIAO y el conector Grove a través de comunicación I2C mientras soporta imágenes mostradas en PC a través de comunicación SPI
- **Selección de Voltaje Flexible**: Interfaz Grove Compatible con Sistemas de 3.3V y 5V

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/hardware.png" style={{width:1000, height:'auto'}}/></div>

## Primeros Pasos

### Plano de Operación

La distancia de operación de gestos es de 15 a 30 cm, la más lejana no puede exceder 35 cm. Basado en el FOV del Sensor 78.3° (horizontal) y 62.9°(vertical), y el área de operación es 48 x 36 cm² a 30 cm.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/1.png" style={{width:700, height:'auto'}}/></div>

Además de la distancia al sensor, también necesitas prestar atención a dónde se coloca el sensor. En la parte frontal del sensor, en la esquina superior izquierda, hay una pequeña figura humana. Si ves la figura de pie erguida, entonces la has colocado en la posición correcta. Si está al revés, entonces es probable que no obtengas un resultado de reconocimiento preciso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/13.png" style={{width:400, height:'auto'}}/></div>

### Interferencia de Fondo

Como el ruido de fondo puede impactar la precisión del reconocimiento de gestos, se recomienda evitar objetos de fondo relativamente más reflectivos detrás de la palma. En condiciones normales de reconocimiento de gestos, se recomienda al menos 35cm de distancia entre la palma y el fondo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/2.png" style={{width:600, height:'auto'}}/></div>

### Tipos de Gestos

Todos los tipos de gestos soportados se describen en las siguientes secciones.

#### Definición de Gestos

<div class="table-center">

<table align="center">
  <tr>
   <th>Gesto</th>
   <th>Descripción</th>
            <th>Nota</th>
  </tr>
  <tr>
   <td>N Dedos (N=0~5)</td>
   <td>0 ~ 5 dedos en la parte superior del puño <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/3.png" style={{width:250, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 30 cm <br /> Estático</td>
  </tr>
  <tr>
   <td>Empuje de N Dedos (N=1~5)</td>
   <td>N dedos se mueven hacia adelante hacia el sensor <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/4.png" style={{width:250, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 30 cm <br /> Umbral programable</td>
  </tr>
        <tr>
            <td>Pellizco</td>
            <td>2 dedos se acercan para pellizcar, se abren para soltar <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/5.png" style={{width:100, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 30 cm <br /> Puede usar la coordenada del centro de la palma como cursor y reportar resultado de Pellizco</td>
        </tr>
        <tr>
            <td>Rotación CW/CCW</td>
            <td>Mover la muñeca en un patrón circular <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/6.png" style={{width:150, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 30 cm <br /> El ángulo detectado del gesto se puede configurar, puede reportar valor del ángulo</td>
        </tr>
        <tr>
            <td>Deslizamiento de Mano Derecha o Izquierda</td>
            <td>Deslizar y mover ambas manos alejándolas una de la otra por cierta distancia <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/7.png" style={{width:300, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 30 cm <br /> Umbral programable</td>
        </tr>
        <tr>
            <td>Toque</td>
            <td>Clic de 1 dedo (los dedos desaparecen) <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/8.png" style={{width:200, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 30 cm <br /> Puede usar la coordenada del centro de la palma como cursor</td>
        </tr>
        <tr>
            <td>Agarrar</td>
            <td>5 dedos a 0 dedos <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/9.png" style={{width:200, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 30 cm <br /> Puede usar la coordenada del centro de la palma como cursor <br /> Reportar resultado de Agarrar</td>
        </tr>
        <tr>
            <td>Pulgar Arriba</td>
            <td>Pulgar en la parte superior del puño <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/10.png" style={{width:180, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 25cm</td>
        </tr>
        <tr>
            <td>Pulgar Abajo</td>
            <td>Pulgar en la parte inferior del puño <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/11.png" style={{width:180, height:'auto'}}/></div></td>
            <td>Distancia de Operación 15 a 25cm</td>
        </tr>
 </table>
</div>

#### Modo de Operación por Gestos

Hay 3 modos de gestos: pulgar, cursor y modos de gestos. Cada uno de ellos define tipos específicos de gestos para ciertos escenarios de usuario o aplicaciones. El modo combinado predeterminado incluye todos los gestos excepto los pulgares.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Modo</th>
   <th>Conexión Predeterminada</th>
            <th>Tipos de Gestos</th>
  </tr>
  <tr>
   <td>2</td>
   <td>Modo Pulgar</td>
            <td>Pulgar Arriba/Abajo</td>
  </tr>
  <tr>
   <td>4</td>
   <td>Modo Cursor</td>
            <td>Dedo Estático <br /> Empujar <br /> Rotar <br /> Tocar <br /> Pellizcar <br /> Agarrar</td>
  </tr>
        <tr>
   <td>5</td>
   <td>Modo Gesto (Predeterminado)</td>
            <td>Dedo Estático <br /> Empujar <br /> Deslizar <br /> Rotar <br /> Tocar (bandera IS_SELECT = 1)  <br /> Pellizcar (bandera IS_SELECT = 1) <br /> Agarrar (bandera IS_SELECT = 1)</td>
  </tr>
 </table>
</div>

### Tipos de Hardware

El Sensor de Gestos IR Inteligente Grove soporta una amplia gama de protocolos de comunicación con una opción de IIC, SPI y USB. Los diferentes modos se seleccionan directamente a través de un interruptor DIP de 4 posiciones en la parte posterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/back.png" style={{width:400, height:'auto'}}/></div>

<br />

El diagrama y la tabla a continuación te mostrarán cómo seleccionar el modo que deseas usar con el interruptor DIP de 4 posiciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/12.png" style={{width:300, height:'auto'}}/></div>

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
   <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
  </tr>
  <tr>
   <th>Modo I2C</th>
   <td>ON</td>
            <td>OFF</td>
            <td>ON</td>
            <td>ON</td>
  </tr>
  <tr>
   <th>Modo SPI</th>
   <td>ON</td>
            <td>ON</td>
            <td>ON</td>
            <td>ON</td>
  </tr>
        <tr>
   <th>Modo USB</th>
   <td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
  </tr>
 </table>
</div>

:::note
El cableado y el código también pueden ser ligeramente diferentes cuando se usan diferentes patrones. Te contaremos más sobre esto en los siguientes ejemplos.
:::

## Uso del software de computadora superior

Si quieres conectar el Sensor de Gestos Grove a tu computadora a través de un cable USB y ver el reconocimiento en tiempo real y los resultados, entonces usar el software de computadora superior es lo mejor para ti.

### Paso 1. Descargar y abrir el software

Puedes descargar el software como un archivo zip primero haciendo clic **[aquí](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/GestureDemo_220620_Customer.zip)**. Luego, por favor descomprime el archivo zip descargado, abre la carpeta descomprimida **GestureDemo_220620_Customer** y haz doble clic para ejecutar el archivo **GestureDemo_220620_Customer.exe**.

:::tip
En este punto puede aparecer una ventana de error diciéndonos que el Sensor de Gestos no fue encontrado, simplemente podemos cerrar el mensaje de error.
:::

### Paso 2. Conectar el Sensor de Gestos Grove a la PC

A continuación, asegúrate de que el Sensor de Gestos Grove esté en modo USB girando el interruptor DIP de 4 posiciones completamente a OFF.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/14.png" style={{width:150, height:'auto'}}/></div>

Luego, usando un cable de datos de alta calidad, conecta el puerto USB-C del Sensor de Gestos Grove al puerto USB de tu computadora.

### Paso 3. Ver resultados en el software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/16.png" style={{width:1000, height:'auto'}}/></div>

Una vez conectado a la computadora, hacemos clic en el botón **Run** en la esquina superior izquierda del software y luego seleccionamos el modo **Gesture** para ver los resultados en tiempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/17.png" style={{width:1000, height:'auto'}}/></div>

Los tipos de gestos y su introducción se pueden encontrar en las **[secciones anteriores](#gesture-types)**.

## Descripción general de la biblioteca de Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la biblioteca.

1. `bool init()` —— Esta función inicializa el Sensor de Gestos Grove y devuelve **True** si la inicialización es exitosa y **False** si falla.

2. `bool getResult(paj7620_gesture_t& res)` —— La función sirve para obtener el resultado del reconocimiento del gesto por parte del sensor.

### Instalación

Dado que has descargado la biblioteca zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se instaló exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Demo 1: Conectar sensores al MCU por IIC

### Paso 1. Gira el interruptor DIP de 4 posiciones a la posición IIC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style={{width:100, height:'auto'}}/></div>

La segunda posición de izquierda a derecha necesita configurarse en OFF, todas las demás están en ON.

### Paso 2. Conecta el MCU al Sensor de Gestos Grove mediante el cable Grove

La interfaz IIC es compatible con la serie XIAO y la serie Arduino/Seeeduino. Si estás usando un Arduino/Seeeduino entonces puede que necesites usar un cable Grove para conectar a su interfaz IIC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/18.jpg" style={{width:600, height:'auto'}}/></div>

Si estás usando XIAO, entonces todo es fácil, solo necesitas conectarlo directamente al conector hembra del Sensor de Gestos Grove y usarlo. Ten en cuenta que el puerto USB-C siempre debe estar orientado hacia afuera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### Paso 3. Subir procedimiento

Copia el siguiente programa en el Arduino IDE, selecciona la placa de desarrollo XIAO que estés usando, compila y sube el programa.

#### Código 1: Modo Gesto (Predeterminado)

```cpp
#include "Gesture.h"

pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");
    
    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

Si todo va bien, haz gestos directamente hacia el Sensor de Gestos Grove y mostrará el resultado en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/20.png" style={{width:800, height:'auto'}}/></div>

#### Código 2: Modo Pulgar

```cpp
#include "Gesture.h"

pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

Si todo va bien, haz gestos directamente hacia el Sensor de Gestos Grove y mostrará el resultado en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/21.png" style={{width:800, height:'auto'}}/></div>

:::tip
Hay tres modos diferentes del Sensor de Gestos Grove. Hemos completado el desarrollo del programa para los dos modos independientes y los ponemos a disposición aquí, consulta [Modo de Operación de Gestos](#gesture-operation-mode) para más información sobre las diferencias entre los diferentes modos.
:::

## Demo 2: Conectar sensores a XIAO por SPI

Si deseas usar el enfoque SPI en lugar del IIC, entonces puedes consultar los pasos aquí para completar tu proyecto.

### Paso 1. Gira el interruptor DIP de 4 posiciones a la posición SPI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/SPI.png" style={{width:100, height:'auto'}}/></div>

Todos los interruptores necesitan ser cambiados a la posición ON.

### Paso 2. Conecta el XIAO al Sensor de Gestos Grove

Conecta XIAO directamente al conector hembra del Sensor de Gestos Grove y úsalo. Ten en cuenta que el puerto USB-C siempre debe estar orientado hacia afuera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### Paso 3. Subir procedimiento

Copia el siguiente programa en el Arduino IDE, selecciona la placa de desarrollo XIAO que estés usando, compila y sube el programa.

#### Código 1: Modo Gesto (Predeterminado)

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");
    
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

Si todo va bien, haz gestos directamente hacia el Sensor de Gestos Grove y mostrará el resultado en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/22.png" style={{width:800, height:'auto'}}/></div>

#### Código 2: Modo Pulgar

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

Si todo va bien, haz un gesto directamente hacia el Sensor de Gestos Grove y mostrará el resultado en el monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/23.png" style={{width:800, height:'auto'}}/></div>

:::tip
Hay tres modos diferentes del Sensor de Gestos Grove. Hemos completado el desarrollo del programa para los dos modos independientes y los ponemos a disposición aquí, consulta [Modo de Operación de Gestos](#gesture-operation-mode) para más información sobre las diferencias entre los diferentes modos.
:::

## Recursos

- **[ZIP]** [Esquemático y PCB del Sensor de Gestos Grove](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip)
- **[PDF]** [Esquemático del Sensor de Gestos Grove](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH_PDF.pdf)
- **[Hoja de Datos]** [PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf)

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
