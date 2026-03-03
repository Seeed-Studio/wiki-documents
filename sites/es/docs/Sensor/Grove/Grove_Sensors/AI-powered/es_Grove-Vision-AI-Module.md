---
description: Grove - Módulo Vision AI
title: Grove Vision AI Module
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Vision-AI-Module
sku: 114992866
last_update:
  date: 3/22/2023
  author: Citric
---

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::warning **[Versión de Placa Actualizada]** 
Como parte de nuestro compromiso con la mejora continua, hemos evolucionado nuestra línea de productos, y el soporte para esta versión ha concluido. Te animamos a explorar y comprar el **Grove Vison AI V2** para una experiencia mejorada. Si actualmente estás usando V1 y experimentas alguna dificultad, no dudes en contactar a nuestro equipo de soporte postventa. Estamos comprometidos a brindarte nuestra mejor asistencia.
:::


## Introducción

El Sensor Módulo Grove Vision AI representa una cámara AI del tamaño de un pulgar, sensor personalizado que ya tiene instalado algoritmo ML para detección de personas, y otros modelos personalizados. Siendo fácilmente desplegado y mostrado en minutos, funciona bajo modelo de ultra bajo consumo, y proporciona dos formas de transmisión de señal y múltiples módulos integrados, todo lo cual lo hace perfecto para comenzar con cámara con IA.

En esta wiki, te mostraremos cómo utilizar el Sensor módulo Grove Vision AI conectando seeed studio XIAO Series y Arduino, para detectar personas, panda, y luego mostrarlo en el sitio web.

### Especificación

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style> -->
<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">Parámetros</th>
    <th class="tg-c3ow">Descripción</th>
    <th class="tg-c3ow">Nota</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" rowspan="3">Conector</td>
    <td class="tg-0pky">Grove (base Grove para Arduino)</td>
    <td class="tg-0pky">Carga 5V y Transmisión de Datos</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>Socket doble fila 7 pines (seeed duino XIAO)</span></td>
    <td class="tg-0pky">Carga 5V y Transmisión de Datos</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>USB Type-C</span></td>
    <td class="tg-0pky">Carga 5V y Grabación de Firmware</td>
  </tr>
  <tr>
    <td class="tg-0pky">Modo de Comunicación</td>
    <td class="tg-0pky">IIC</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">Procesador</td>
    <td class="tg-0pky">Himax HX6537-A </td>
    <td class="tg-0pky"><span>DSP 400Mhz (consumo de energía ultra bajo)</span></td>
  </tr>
  <tr>
    <td class="tg-0pky">Sensor de Cámara</td>
    <td class="tg-0pky">Chip OV2640</td>
    <td class="tg-0pky">Relación de Resolución 1600*1200</td>
  </tr>
  <tr>
    <td class="tg-0pky">Micrófono</td>
    <td class="tg-0pky">Chip MSM261D3526H1CPM</td>
    <td class="tg-0pky">Sensibilidad -26dBFs</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sensor Acelerómetro</td>
    <td class="tg-0pky">Sensor STLSM6DS3TR-C</td>
    <td class="tg-0pky">Acelerómetro 3D y giroscopio 3D</td>
  </tr>
</tbody>
</table>

### Característica

- Cámara AI Fácil de Usar: Aplica algoritmo de Aprendizaje Automático Edge en el sensor de cámara perfectamente para detectar objetos
- Plug and Play: Realiza un esfuerzo sin complicaciones para ejecutar la función completa y mostrar en minutos
- Consumo de Energía Ultra-bajo: Se activa mientras detecta objetos en movimiento para ahorrar energía
- Sensor de Cámara Compacto con AI: El dispositivo en sí es del tamaño de un pulgar, basado en visión, y adecuado para Inteligencia Edge
- Diseño de Sensor Personalizado: Soporta modelos ML personalizados definidos por usuarios
- Dos Transmisiones de Señal Soportadas: Consulta la conexión elegante de seeed studio XIAO y la base Grove para conexión simple de Arduino
- Sensor de Cámara Integrado: Incorpora chip OV2640 con relación de resolución 1600*1200
- Micrófono Integrado: Incorpora chip MSM261D3526H1CPM con sensibilidad -26dBFs
- Sensor Acelerómetro Integrado: Incorpora sensor STLSM6DS3TR-C para acelerómetro 3D y giroscopio 3D detectado
- 32 MB SPI Flash de Ultra Bajo Consumo Integrado
- Un cable para toda la salida de datos: Representa la conexión simplificada de la familia Grove para solo un cable Grove requerido entre el sensor y la placa única

## Descripción General del Hardware

Asumimos que podrías querer conocer algunos parámetros básicos del producto. Las siguientes tablas presentan información sobre las características y pinout del Sensor Módulo AI Vision Grove.

| Característica                         | Valor     | Unidad      |
| :-------:                              | :-------: | :-------: |
| Voltaje de Operación                      |   5    |     V       |
| Velocidad   |    115200     |          |
| Interfaz I2C                          | seeed studio XIAO & Arduino   | -         |
| Suministro de Energía | conector dual de 7 pines & Type-C    | -         |
| Interfaz de Descarga y Grabación de Firmware | Type-C    | -         |
| Dimensiones                             |   40*20*13        | mm        |

### Descripción General del Pinout

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout1.png" style={{width:800, height:'auto'}}/></div>

- 2 —— BL702
- 3 —— MIC MSM261D3526H1CPM
- 4 —— 6-axis LSM6DS3TR-C
- 5 —— SPI Flash
- 9 —— USB tipo C
- 10 —— Conector hembra dual de 7 pines
- 11 —— **Botón de reinicio**
- 12 —— **Botón BOOT**
- 13 —— **Botón USER**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout2.png" style={{width:800, height:'auto'}}/></div>

- 1 —— HX6537-A
- 6 —— Conector de cámara
- 7 —— Chip DC-DC
- 8 —— Conector Grove
- 14 —— Luz de alimentación
- 15 —— Luz indicadora de grabación

## Primeros Pasos

Te mostraremos la función básica del módulo, y luego te introduciremos la forma personalizada en la que puedes construir tu propio modelo ML. Pero antes de aplicar completamente el módulo a nuestros proyectos, nos llevará varios pasos preparar el módulo.

### Preparación

**Hardware**

- Sensor Módulo Grove Vision AI
- PC **host Windows** (probado en Win10)
- Cable tipo C

### Descripción General de la Librería Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

El código que usamos aquí proporciona varios métodos de clasificación y modelos seleccionables, incluyendo modelos personalizados. El predeterminado que seleccionamos aquí es el método de detección de objetos y modelo pre-entrenado.

*Seeed Studio desarrollará más métodos y modelos en el futuro previsible, mantente atento con nosotros.*

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

1. `if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1))` - Aquí es donde podemos seleccionar nuestros métodos de clasificación y los modelos.

  Puedes cambiar `ALGO_OBJECT_DETECTION` a `ALGO_OBJECT_COUNT` o `ALGO_IMAGE_CLASSIFICATION`.

  Mientras tanto, si también grabas tu modelo personalizado (firmware) en el módulo, puedes cambiar `MODEL_EXT_INDEX_1` a `MODEL_EXT_INDEX_2` o 3, 4, según lo hayas nombrado.

2. `object_detection_t data` - Este es el conjunto de datos struct donde se almacena el resultado de salida.

  Si cambias el método de clasificación, necesitas cambiar `object_detection_t` correspondientemente a `image_classification_t` o `object_count_t`.

3. `uint8_t len = ai.get_result_len()` - El "len" aquí significa cuántas caras humanas detecta.

4. `object_detection_t data` - Los datos aquí representan un formato **struct** y el tipo es "object_detection_t" que está predefinido.

  Mientras tanto, si eliges otros métodos de clasificación, necesitas cambiarlo a `image_classification_t data` o `object_count_t data`.

5. `Serial.print(data.confidence)` - El formato **struct** no puede ser usado directamente para imprimir, debe apuntar al tipo específico que está definido en el archivo de cabecera.

```cpp
typedef struct
{
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    uint8_t confidence;
    uint8_t target;
} object_detection_t;
```

:::tip
La "confianza" que queremos imprimir aquí muestra cuánta "confianza" tiene la cámara para detectar el objeto.
:::

### Instalación de la Biblioteca

Dado que hemos descargado la biblioteca en formato zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la biblioteca se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la biblioteca se ha instalado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

### Actualización de la Biblioteca

En el futuro previsible, optimizaremos y actualizaremos la biblioteca del producto para funciones más interesantes. De acuerdo con los métodos de instalación de biblioteca proporcionados anteriormente, aquí te presentamos la forma de actualizar.

Actualizaremos el enlace cuando la biblioteca sea optimizada. Puedes **eliminar la carpeta de biblioteca original** en la carpeta de tu computadora, luego descargar la versión más reciente, descomprimirla y colocarla en el directorio de bibliotecas del Arduino IDE. (**...\Arduino\libraries. ....** es la ruta que configuraste para Arduino)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" style={{width:600, height:'auto'}}/></div>

## Ejemplo de Seeed Studio XIAO / Seeeduino / Arduino

Ahora que tenemos nuestra biblioteca instalada y el firmware grabado, podemos ejecutar algunos ejemplos con el sensor del módulo AI Grove en Seeed Studio XIAO nRF52840 y Seeeduino V4.2 para ver cómo se comporta.

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y agrégala al Arduino IDE.

- Si quieres usar **Seeeduino** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software) para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup) para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para terminar de agregarlo.

### Demo 1 Detección Humana con Seeed Studio XIAO nRF52840 / Seeeduino / Arduino

En esta demostración, detectaremos rostros humanos y contaremos cuántas personas detecta el módulo tanto en <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><span>Seeed Studio XIAO nRF52840 Sense</span></a> como en Seeeduino V4.2 (Arduino UNO). Mientras tanto, Seeed Studio proporciona un [sitio web](https://vision-ai-demo.seeed.cn/) para mostrar lo que ve el módulo.

#### Materiales Requeridos

- **Para seeed studio XIAO BLE Sense**

|    Seeed Studio XIAO nRF52840 Sense          | Grove AI Camera  |
|--------------|--------------|
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong></a></div> |

- **Para Seeeduino V4.2**

| Seeeduino V4.2 | Base Shield | Grove AI Camera|
|--------------|-------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:210, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a></div> |

#### Pasos de Operación

- **Paso 3 (Seeed Studio XIAO).** Prepara un cable Type-C y conéctalo a una placa de la serie seeed studio XIAO. Conéctalo pin por pin al Módulo AI Grove y usa otro cable Type-C para conectar el módulo.

  Ambos cables Type-C deben estar conectados con la PC. Al final, la dirección del conector Type-C en el módulo debe ser la misma que el conector Type-C en el seeed studio XIAO samd21. Por ejemplo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI11.JPG" style={{width:600, height:'auto'}}/></div>

- **Paso 3 (Arduino).** Prepara un cable Grove y conéctalo a una placa Arduino. Usa otro cable Type-C para conectar el módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI13.png" style={{width:400, height:'auto'}}/></div>

- **Paso 4.** Sube el programa.

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);

   Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }
}

void loop()
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state();
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       int time1 = millis() - tick;
       Serial.print("Time consuming: ");
       Serial.println(time1);
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result

          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
        }
     }
     else
     {
       Serial.println("No identification");
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}
```

Abre el monitor serie y establece la velocidad de baudios en 115200 y el resultado de la detección de personas debería mostrarse continuamente. Mientras tanto, la imagen que es capturada por el módulo también se mostrará en el [sitio web](https://vision-ai-demo.seeed.cn/). La salida exitosa continua debería ser como:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI12.png" style={{width:400, height:'auto'}}/></div>

En el [sitio web](https://vision-ai-demo.seeed.cn/) de visualización, puedes ver que dos caras están enmarcadas con número dual. El número 0 significa la cara humana que el módulo detectó, y el otro número significa la confianza.

:::note
No todos los navegadores soportan la visualización de resultados de Vision AI. Por favor consulta la tabla a continuación para el soporte de cada navegador principal.

| Chrome | Edge | Firefox | Opera | Safari |
|--------|------|---------|-------|--------|
| Soporta | Soporta | No soporta |  Soporta | No soporta |

:::


## Acerca de los Modelos

Seeed Studio ha proporcionado un modelo preentrenado de detección de personas y proporcionará más modelos en el futuro previsible. Puedes usarlos directamente para conocer rápidamente la cámara AI.

Puedes encontrar nuestro firmware y modelos para Grove Vision AI en las siguientes ubicaciones.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Modelo</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Firmware Predeterminado: Modelo de Detección de Personas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI20.png" style={{width:800, height:'auto'}}/></div>

### Más Modelos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/2.png" style={{width:800, height:'auto'}}/></div>

Estamos manteniendo y actualizando continuamente más modelos útiles, por lo que puedes estar atento a este repositorio.

:::tip
Típicamente, los archivos de modelo están en formato **UF2** y tienen un sufijo en el formato **pre_num**.
:::

### Modelos Personalizados

Si quieres personalizar tu propio modelo, puedes consultar <a href="https://github.com/Seeed-Studio/yolov5-swift" target="_blank"><span>aquí</span></a> que está impulsado por YOLOV5.

O consulta [el tutorial aquí](https://wiki.seeedstudio.com/es/Train-Deploy-AI-Model-Grove-Vision-AI/) y entrena tu propio modelo para satisfacer tus necesidades.


## Reemplazo de nuevos modelos

Los modelos de entrenamiento están todos representados como archivo ".uf2", que es lo que necesitamos.

:::tip
Típicamente, los archivos de modelo están en formato **UF2** y tienen un sufijo en el formato **pre_num**.
:::

- **Paso 1**. Conecta el módulo a la PC host con un cable Type-C y **haz doble clic** en el botón BOOT del módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

  Aparecerá un disco "GROVEAI".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **Paso 2**. Por favor copia el archivo `.uf2` del Modelo al disco GROVEAI para completar la grabación del firmware.

Podemos ver que el LED de Trabajo en el módulo parpadea rápidamente, eso significa que el proceso está en curso. Después de que el disco desaparezca, el proceso de grabación del firmware ha terminado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI10.png" style={{width:600, height:'auto'}}/></div>

- **Paso 3**. Por favor modifica el programa según el modelo que estés usando.

En la demostración que proporcionamos, dentro de la función `setup()` se está inicializando el modelo llamando a `ai.begin()`.

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` tiene dos argumentos, el tipo de modelo y el número de modelo. La numeración es generalmente diferente para diferentes modelos. Es decir, el número de modelo del programa de ejemplo solo se aplica al **Modelo de Detección de Personas**, si usas otros modelos, entonces el número ya no es `0x11`.

:::caution
Si encuentras el mensaje de error "Algo begin failed." al usar la demostración, primero debes verificar si el número de modelo es incorrecto.
:::

Entonces, ¿cómo determinas el número de modelo? Nuestros ingenieros de I+D han proporcionado un documento introductorio detallado para que los desarrolladores lo lean.

- [Protocolo](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

Pero si no quieres leer un artículo tan largo, una forma simple de determinar esto es estar atento al último número del modelo en Release, que es el número que necesitamos.

Por ejemplo, para el modelo **pfld_meter_pre_5.uf2**, el último dígito es **5**, lo que significa que el número de modelo es **5**. Puedes usar 

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

directamente, o reescríbelo como hexadecimal 

```cpp
ai.begin(ALGO_ OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```


## Procesamiento de Excepciones

Si has encontrado una situación imprevista en el uso real, o si lo has usado incorrectamente y has experimentado un resultado diferente al tratamiento médico. Por favor, consulta los siguientes pasos para solucionar problemas e intentar reparar el módulo.

### Parte 1. Verificar la Versión del BootLoader

Es posible que necesites detectar si la versión del BootLoader necesita ser actualizada para decidir si la actualización debe realizarse. El método para verificar el número de versión es el siguiente.

Conecta el Grove Vision AI a tu computadora a través del puerto USB-C. Luego haz doble clic en el botón Boot hasta que la computadora muestre una unidad flash USB llamada GROVEAI.

Abre esta unidad de disco y abre el archivo **INFO_UF2.TXT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/3.png" style={{width:1000, height:'auto'}}/></div>

Como se muestra en la figura, puedes ver el número de versión del Bootloader en la primera línea. A partir de septiembre de 2023, el número de versión más reciente del BootLoader debería ser **v2.0.1**. Si también verificas el mismo número de versión, entonces en principio no necesitas hacer el siguiente segundo paso.

### Parte 2. Actualizar el BootLoader

Si tu Grove Vision AI no es reconocido por tu computadora y se comporta como si no tuviera número de puerto, entonces es posible que necesites actualizar el BootLoader.

- **Paso 1**. Descarga el archivo `.bin` del BootLoader en la PC con Windows.

Por favor descarga la versión más reciente del archivo BootLoader en el enlace de abajo. El nombre del BootLoader es usualmente `tinyuf2-grove_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/tinyuf2-grove_vision_ai_v2.0.1.bin" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar BootLoader</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Este es el firmware que controla el chip BL702 que construye la conexión entre la computadora y el chip Himax. La versión más reciente del BootLoader ahora ha solucionado el problema de que Vision AI no pueda ser reconocido por Mac y Linux.

- **Paso 2**. Descarga y abre el software [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar), selecciona **BL702/704/706**, y luego haz clic en **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **Paso 3**. Haz clic en **View**, elige **MCU** primero. Ve a **Image file**, haz clic en **Browse** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **Paso 4**. Asegúrate de que no haya otros dispositivos conectados a la PC. Luego mantén presionado el botón Boot en el módulo, conéctalo a la PC.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI05.png" style={{width:600, height:'auto'}}/></div>

  Podemos ver que la luz de 5V y la luz LED de 3.3V se encienden en la parte posterior del módulo, luego suelta el botón Boot.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI06.png" style={{width:600, height:'auto'}}/></div>

- **Paso 5**. Regresa al software BLDevCube en la PC, haz clic en **Refresh** y elige un puerto apropiado. Luego haz clic en **Open UART** y establece **Chip Erase** en **True**, luego haz clic en **Create&Program**, espera a que el proceso termine.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

- **Paso 6**. Se recomienda verificar el número de versión de Vision AI nuevamente para asegurar que se esté usando el BootLoader más reciente.

### Parte 3. Restaurar el Firmware de Fábrica

:::tip
Si alguna vez cargar firmware en la versión más reciente de Windows 11 ha dejado el dispositivo inutilizable, es posible que necesites consultar la sección sobre [Actualizar BootLoader](#step-2-update-bootloader).
:::

- **Paso 1**. Borrar firmware

:::caution
Puedes intentar omitir este paso y copiar el firmware directamente al Vision AI, si funciona, entonces no tienes que borrar el firmware original. Si falla, es posible que necesites borrar el firmware.
:::

Por favor usa la placa madre Arduino que tengas, se recomiendan la serie Seeed Studio XIAO, Wio Terminal o Seeeduino. Conecta el Grove Vision AI a la placa madre a través de la interfaz IIC.

Abre el Arduino IDE y carga el programa para borrar el firmware.

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>
WEI wei(Wire);

void setup()
{
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
    {
        /* code */
    }
    delay(1000);
    Serial.println("Press any key to start erase");
}

void loop()
{
    if (Serial.available())
    {
        while (Serial.available())
        {
            Serial.read();
        }
        uint32_t id = wei.ID();
        Serial.print("ID: 0x");
        Serial.println(id, HEX);
        wei.enter_bootloader();
        Serial.println("Erase");
        wei.erase();
        Serial.println("Erase done");
    }
}
```

Abre el monitor serie, introduce algunos caracteres aleatorios, como "a", haz clic en enviar, entonces la operación de borrado comenzará a ejecutarse. Si ves el siguiente mensaje, entonces demuestra que el borrado del firmware fue exitoso. Podemos ir al siguiente paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI23.png" style={{width:800, height:'auto'}}/></div>

- **Paso 2**. Conecta el módulo al PC host con un cable Type-C y **haz doble clic** en el botón BOOT del módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

Aparecerá un disco "GROVEAI".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **Paso 3**. Descarga el firmware de fábrica.

Por favor descarga la última versión del firmware de fábrica en el enlace de abajo. El nombre del firmware de fábrica es usualmente `grove_ai_without_crc_vxx.uf2` o `grove_ai_vxx.uf2`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
A partir de septiembre de 2023, la última versión del firmware es **grove_ai_v02-00.uf2**.
:::

- **Paso 4**. Flashea el firmware de fábrica.

Copia el archivo `grove_ai_without_crc_vxx.uf2` o `grove_ai_vxx.uf2` al disco GROVEAI para completar el flasheo del firmware.

Las tres partes anteriores necesitan ser juzgadas y ejecutadas en orden, cuando los pasos anteriores se ejecuten, puedes hacer tu operación nuevamente, si aún hay problemas, por favor contacta a nuestro equipo de soporte técnico.

## Solución de Problemas

### P1: ¿Cuál es el método principal de conexión?

- a. Conecta primero el microcontrolador y el módulo.
- b. Conecta segundo el microcontrolador con el PC host.
- c. Conecta el módulo con el PC host al final.

### P2: ¿Por qué no puedo ver la visualización de imagen en el sitio web? ¿Ni la detección?

- a. ¿Está el módulo calentándose? Conectar solo el módulo causará problemas de calor y hará que el módulo no funcione por un momento.
- b. ¿Está conectando después del método correcto?

### P3: ¿Por qué Grove Vision AI de repente obtiene un error "Algo begin failed." un día mientras está en uso?

En la demostración que proporcionamos, dentro de la función `setup()` está inicializando el modelo llamando `ai.begin()`.

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` tiene dos argumentos, el tipo de modelo y el número de modelo. La numeración es generalmente diferente para diferentes modelos. Es decir, el número de modelo del programa de ejemplo solo se aplica al **Modelo de Detección de Personas**, si usas otros modelos, entonces el número ya no es `0x11`.

:::caution
Si encuentras el mensaje de error "Algo begin failed." al usar la demostración, primero debes verificar si el número de modelo es incorrecto.
:::

Entonces, ¿cómo determinas el número de modelo? Nuestros ingenieros de I+D han proporcionado un documento introductorio detallado para que los desarrolladores lo lean.

- [Protocolo](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

Pero si no quieres leer un artículo tan largo, una forma simple de determinar esto es estar atento al último número del modelo en Release, que es el número que necesitamos.

Por ejemplo, para el modelo **pfld_meter_pre_5.uf2**, el último dígito es **5**, lo que significa que el número de modelo es **5**. Puedes usar 

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

directamente, o reescríbelo como hexadecimal 

```cpp
ai.begin(ALGO_ OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```

## Recursos
- **[PDF]** [Diagrama del Circuito](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.pdf)
- **[Zip]** [Diagrama de Diseño](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.zip)

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

