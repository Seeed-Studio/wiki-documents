---
title: Usando Grove Vision AI V2 con Comandos AT
hide_title: false
description: Esta guía muestra cómo usar el Grove Vision AI V2 con comandos AT.
keywords:
  - Vision
  - Grove
  - AT
  - SSCMA
image: https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg
slug: /es/grove_vision_ai_v2_at
last_update:
  date: 04/22/2024
  author: Spencer
toc_max_heading_level: 3
---

## Introducción

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

El Grove Vision AI V2 es un potente módulo de cámara AI que permite a los usuarios desplegar modelos listos para usar en aplicaciones de visión. Además de sus capacidades de AI, el Grove Vision AI V2 ofrece varias características de hardware y opciones de uso para mejorar su funcionalidad y facilidad de uso.

![](https://mermaid.ink/svg/pako:eNp1kk9vozAQxb_KyCciRSi4aRe4RemfXWmrVpuqh4qL155St-CJjMk2G-W7r02AZKXmNr_3xuN5mB2TpJDlrNZG1WJdGABL5KLoztIG4Vk3mgw888kkWABLqsheo0PpvBF1CCP3TQA_tcFbqir6o00ZBYIRxyZFroniOO6Fh9_vfsovlFQa3U0_KHAijWe_U42L1lEtus6AcOSxbVUL6xZSYtMsyThLVdRJcNCgF8-tBHCzQeOerC5LtKjCJlaFSJ0OowGj05-8FRJPowT-Msgj2oaMqH4oP1C_atkFWKFsrXbbaLDhfx-GhgkMg_r0qJZt4yu0K7QbLTEaDRgc6K1zse8p3HF85QN_8cxPb_jqFpWwddSV0NXHnR7R3ZMPTDZ8M09wxHOXnyCbMr9tLbTyf-gu2AVzb1hjwXJfKmE_ClaYve8TPuRqayTLnW1xytq18pGvtSitqAdxLcwL0SmyfMc-Wc7jS55m6cXFFU-yNJ0lU7ZlecKTePYtm3vmPMtmfD9lf7vzszg0Z_wyu-LzeZrw_T852RLp)

En esta página, nos enfocaremos en guiar a los usuarios sobre **cómo utilizar efectivamente la biblioteca de Arduino** específicamente diseñada para el Grove Vision AI V2. Cubriremos el proceso de instalación, características clave, y proporcionaremos ejemplos prácticos que demuestran cómo usar las funciones de la biblioteca para controlar y configurar el módulo, permitiendo a los usuarios crear aplicaciones innovadoras basadas en visión con facilidad.

## Firmware y Conjunto de Comandos AT

El Grove Vision AI V2 viene con firmware preinstalado que soporta un conjunto de comandos AT. Este conjunto de comandos permite a los usuarios controlar y configurar la funcionalidad del módulo sin la necesidad de entornos de programación complejos.

La especificación del conjunto de comandos AT se puede encontrar en [SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro). Es importante tener en cuenta que el conjunto de comandos AT puede evolucionar con el tiempo, y las versiones más nuevas del firmware pueden incluir comandos adicionales. Se recomienda mantener el firmware actualizado para acceder a las últimas características.

:::note
Si necesitas flashear un nuevo firmware o actualizar el firmware, puedes navegar al sitio web de [SenseCraft AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process).
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/at-diagram.png" alt="at diagram" width={320} height="auto" /></p>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consultar Protocolo AT</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Biblioteca de Arduino

Para simplificar el uso del conjunto de comandos AT y proporcionar una interfaz amigable para el usuario, está disponible una biblioteca de Arduino llamada [Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA). Esta biblioteca envuelve los comandos AT en funciones fáciles de usar, permitiendo a los usuarios integrar rápidamente el Grove Vision AI V2 en sus proyectos de Arduino.

La biblioteca de Arduino mantiene compatibilidad con el conjunto de comandos AT más reciente, asegurando un enfoque consistente y unificado para interactuar con el módulo. Al utilizar esta biblioteca, los usuarios pueden enfocarse en desarrollar sus aplicaciones sin preocuparse por los detalles de bajo nivel de los comandos AT.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

:::info

<div class="table-center">
<table align="center">
    <tr>
        <td>MCU</td>
        <td>Versión de Placa</td>
        <td>Grove(I2C)</td>
        <td>Pin(Uart)</td>
    </tr>
    <tr>
        <td>SAMD21</td>
        <td>1.8.5</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>RP2040</td>
        <td>3.9.1</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>nRF52840 - nRF52 Boards</td>
        <td>1.1.8</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>nRF52840 - mbed-enabled</td>
        <td>2.9.2</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>ESP32C3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>ESP32S3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
</table>
</div>

\*⚠️: podría no funcionar bien
:::

## Conectar el Grove Vision AI V2

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/i2c-connect.jpg" width={420} height="auto" /></p>

Usando un cable grove para conectar el Grove Vision AI V2 a cualquier placa mcu.

</TabItem>
<TabItem value="uart" label="Compatible con XIAO" default>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" width={420} height="auto" /></p>

De esta manera puedes usar no solo **UART** sino también **I2C** para establecer una conexión.

:::tip Velocidad de Baudios Serial
Para alta capacidad de respuesta, la velocidad de baudios serial del Grove vision v2 es `921600` por defecto.
Así que necesitarás usar serial por hardware en lugar de serial por software para conectar.
:::
</TabItem>
</Tabs>

## *Ejemplo 1:* Capturar una imagen

:::tip ¿la función de invoke?
Consulta [invoke - FAQ](#faq_invoke)
:::

```cpp
// invoke once, no filter, contain image
if (!AI.invoke(1, false, true)){
   if (AI.last_image().length() > 0){
      Serial.print("Last image:");
      Serial.println(AI.last_image());
   }
}
```

`AI.last_image()` es una cadena, que contiene los datos de imagen (JPEG) codificados en base64. [🖱️¿aprender cómo analizarla?](#base64tojpeg)

### Código Completo

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- I2C -->

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    // invoke once, no filter, get image
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("Last image:");
            Serial.println(AI.last_image());
        }
    }
}
```

</TabItem>
<TabItem value="xiao" label="Compatible con XIAO (UART)" default>

<!-- UART Image-->
```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   AI.begin(&atSerial);
   Serial.begin(9600);
}

void loop()
{
    // invoke once, no filter, get image
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("Last image:");
            Serial.println(AI.last_image());
        }
    }
}
```

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>Conectar dispositivos</th>
     <th>Subir firmware</th>
        <th>Monitorear</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## *Ejemplo 2:* Obtener resultado de inferencia

### Código Completo

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // invoke once, no filter, not contain image
    Serial.println("invoke success");
    Serial.print("perf: prepocess=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", inference=");
    Serial.print(AI.perf().inference);
    Serial.print(", postpocess=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("Box[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", score=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", w=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", h=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("Class[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", score=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("Point[");
      Serial.print(i);
      Serial.print("]: target=");
      Serial.print(AI.points()[i].target);
      Serial.print(", score=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("keypoint[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", score=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", box:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", w=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", h=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], points:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
<TabItem value="uart" label="Compatible con XIAO (UART)" default>

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // invoke once, no filter, not contain image
    Serial.println("invoke success");
    Serial.print("perf: prepocess=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", inference=");
    Serial.print(AI.perf().inference);
    Serial.print(", postpocess=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("Box[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", score=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", w=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", h=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("Class[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", score=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("Point[");
      Serial.print(i);
      Serial.print("]: target=");
      Serial.print(AI.points()[i].target);
      Serial.print(", score=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("keypoint[");
      Serial.print(i);
      Serial.print("] target=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", score=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", box:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", w=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", h=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], points:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>Conectar dispositivos</th>
     <th>Cargar firmware</th>
      <th>Monitorear</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## *Ejemplo 3:* Guardar Imágenes JPEG en Tarjeta SD

> Más detalles en la sección [Set action trigger - AT protocol](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md#set-action-trigger-experimental).

El módulo Grove Vision AI V2 permite guardar imágenes JPEG directamente en una tarjeta SD externa. Para garantizar la compatibilidad, se recomienda formatear la tarjeta SD como ***FAT32*** con un tamaño de clúster de `8192` o usar el sistema de archivos **exFAT**. Al guardar imágenes, el módulo crea automáticamente una ruta de guardado predeterminada llamada `Grove Vision AI (V2) Export` si no existe ya.

:::info attention

- Asegúrate de que la versión del firmware sea posterior al 18/4/2024.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/jpeg_format_sd.png" alt="filesystem" width={220} height="auto" /></p>

Dentro de esta ruta de guardado, se crea una nueva carpeta para cada sesión de arranque cuando se activa la acción de guardado, y el nombre de la carpeta es un número incrementado. El nombre de la carpeta más reciente se almacena en un archivo oculto llamado `.sscma` en la ruta de guardado, que *no debe ser modificado por el usuario* para evitar posibles errores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/export_files.png" alt="export files" width={480} height="auto" /></p>

<details>
<summary>Para previsualizar imágenes como streams usando Python</summary>

```python
import os
import platform
import tkinter as tk
from PIL import Image, ImageTk
import time

class ImagePlayer:
    def __init__(self, parent_directory, switch_time=1):
        self.parent_directory = parent_directory
        self.image_files = []
        self.current_index = 0
        self.switch_time = switch_time
        self.root = tk.Tk()
        self.label = tk.Label(self.root)
        self.label.pack()
        self.load_image_files()
    
    def load_image_files(self):
        # Get all subdirectories in the parent directory
        directories = [os.path.join(self.parent_directory, folder) for folder in os.listdir(self.parent_directory) if os.path.isdir(os.path.join(self.parent_directory, folder))]

        # Traverse subdirectories and get image file paths
        for directory in directories:
            image_files = [os.path.join(directory, file) for file in sorted(os.listdir(directory)) if file.endswith(('.jpg', '.jpeg', '.png'))]
            self.image_files.extend(image_files)

    def play_images(self):
        if self.current_index < len(self.image_files):
            image_file = self.image_files[self.current_index]
            image = Image.open(image_file)
            self.display_image(image)
            self.current_index += 1
            self.root.after(int(self.switch_time * 1000), self.play_images)
        else:
            self.root.destroy()

    def display_image(self, image):
        # Adjust the image size to fit the window
        width, height = self.root.winfo_screenwidth(), self.root.winfo_screenheight()
        image.thumbnail((width, height))

        # Convert the image to a format usable by Tkinter
        photo = ImageTk.PhotoImage(image)

        # Display the image in the label
        self.label.config(image=photo)
        self.label.image = photo

    def start(self):
        self.root.geometry("240x240")  # Set the window size
        self.root.title("Image Player")  # Set the window title

        self.root.after(0, self.play_images)  # Start playing the images
        self.root.mainloop()

# Create an ImagePlayer object and provide the parent directory path
parent_directory = r"E:\Grove Vision AI (V2) Export"
player = ImagePlayer(parent_directory, switch_time=0.3)  # Customize the image switch time here (in seconds)

# Start the image player
player.start()
```

</details>

Cuando llamas a `save_jpeg()`, significa que envías un comando AT `AT+ACTION="save_jpeg()"` al módulo Grove Vision AI V2.
Y debes llamarlo solo una vez.

Si ya no quieres almacenar la imagen JPEG, tendrás que limpiar los Action Sets, incluso si reinicias tu módulo Grove Vision AI V2.

<div class="table-center">
<iframe width="380" height="300" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/insert_sd_visionv2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

```cpp
void setup()
{
   atSerial.println("AT+ACTION=\"\""); // Same as `AI.clean_actions()`
   AI.clean_actions(); 
}
```

### Código Completo

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- Guardando Imágenes JPEG en Tarjeta SD -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
  Serial.begin(9600); // Initialize serial port
  AI.begin(); 
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // every invoke it will save jpeg
  if (!AI.invoke(1, false, false)){
    Serial.printf("Record image %d\n", ++cnt);
  } 
}

```

</TabItem>
<TabItem value="uart" label="Compatible con XIAO (UART)" default>

<!-- Guardando Imágenes JPEG en Tarjeta SD -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
  Serial.begin(9600); // Initialize serial port
  AI.begin(&atSerial);
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // every invoke it will save jpeg
  if (!AI.invoke(1, false, true)){
    Serial.printf("Record image %d\n", ++cnt);
  } 
}
```

</TabItem>
<TabItem value="at_actions" label="Verificar acciones AT">

<!-- AT actions -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   Serial.begin(9600); // Initialize serial port
   AI.begin(&atSerial);
   AI.save_jpeg();
}

void loop()
{
  atSerial.println("AT+ACTION?"); // request to get action information

  String str_action = atSerial.readString(); // read the response
  if(str_action.indexOf("save_jpeg") > 0){ // check if the action exists
      Serial.println("save_jpeg exists");
      Serial.println("trigger action: clean_actions");
      AI.clean_actions(); // clean the action
  }else{ // if null, trigger action to save_jpeg again
      Serial.println("save_jpeg doesn't exist");
      Serial.println("trigger action: save_jpeg");
      AI.save_jpeg();
  }
  delay(5000);
}
```

:::tip
si no funciona, por favor verifica si la tarjeta SD está formateada e insertada correctamente.
:::

</TabItem>
</Tabs>

<table align="center">
 <tr>
     <th>Conectar dispositivos</th>
     <th>Subir firmware</th>
      <th>Monitor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

## Imagen Base64 a JPEG {#base64tojpeg}

Hay dos formas de obtener la imagen decodificada cuando intentas obtener la imagen JPEG en programación:

<Tabs>
<TabItem value="esp32" label="ESP32">

Si tu mcu es ESP32, puedes usar el siguiente código para obtener la imagen:

```cpp
#include <string.h>

#include "mbedtls/base64.h"

#include <Seeed_Arduino_SSCMA.h>

#define DECODED_IMAGE_MAX_SIZE(15 * 1024) // choose your own max size_t

static unsigned char jpegImage[DECODED_IMAGE_MAX_SIZE + 1];

size_t decode_base64_image(const unsigned char * p_data, unsigned char * decoded_str) {
  if (!p_data || !decoded_str)
    return 0;

  size_t str_len = strlen((const char * ) p_data);
  size_t output_len = 0;
  // Obtain the decoded length
  int decode_ret = mbedtls_base64_decode(NULL, 0, & output_len, p_data, str_len);
  if (decode_ret == MBEDTLS_ERR_BASE64_INVALID_CHARACTER) {
    Serial.println(TAG, "Invalid character in Base64 string");
    return 0;
  }

  // Check if the decoded length is reasonable
  if (output_len == 0 || output_len > DECODED_IMAGE_MAX_SIZE) {
    Serial.println("Base64 decode output size is too large or zero.");
    return 0;
  }

  // Actual decoding operation
  decode_ret = mbedtls_base64_decode(decoded_str, DECODED_IMAGE_MAX_SIZE, & output_len, p_data, str_len);
  if (decode_ret != 0) {
    Serial.println(TAG, "Failed to decode Base64 string, error: %d", decode_ret);
    return 0;
  }

  Serial.println("str_len: %d, output_len: %d", str_len, output_len);

  return output_len;
}

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(115200);
}

void loop() {
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      Serial.print("Last image:");
      Serial.println(AI.last_image());
      size_t jpegImageSize = decode_base64_image(AI.last_image().c_str(), jpegImage);
      if (jpegImageSize > 0) {
        // your function to display the jpeg image
        display_jpeg_image(jpegImage, jpegImageSize);
      }
    }
  }
}
```

</TabItem>
<TabItem value="arduino" label="Arduino" default>

```cpp
#include <base64.h>

#include <Seeed_Arduino_SSCMA.h>

#define atSerial Serial1 /* Define your Serial interface */

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(115200);
}

void loop() {
  // invoke once, no filter, get image
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      String toEncode = AI.last_image();
      Serial.print("Image Code:");
      Serial.println(toEncode);
      String encoded_jpeg = base64::encode(toEncode);
      // your function to display the jpeg image
      func_display_jpeg(encoded_jpeg);
    }
  }
}
```

</TabItem>
</Tabs>

:::tip ¿Por qué usar codificación Base64?
Base64 es una forma de codificar datos binarios (como imágenes) en una cadena de caracteres ASCII. Esto permite que los datos binarios se incluyan en formatos que no admiten binarios de forma nativa, como JSON.

La codificación Base64 se utiliza para evitar transmitir datos binarios directamente a través de protocolos basados en texto (como HTTP, JSON, XML). También evita la necesidad de bibliotecas de análisis adicionales, ya que la mayoría de los lenguajes de programación tienen funciones integradas de codificación/decodificación Base64. Base64 permite que los datos binarios se transmitan de forma segura como texto ASCII estándar y se decodifiquen fácilmente de vuelta a su forma binaria original.

Hay muchas herramientas en línea que facilitan la decodificación de Base64 a una imagen, como:
[Decodificador en línea Base64](https://base64.guru/converter/decode/image)
Simplemente pega la cadena Base64 en la herramienta y mostrará la imagen decodificada.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/e.g.base64.png" width={420} height="auto" /></p>

## Personalización y desarrollo de SDK

Para usuarios que requieren más personalización y funcionalidad avanzada, el Grove Vision AI V2 también admite el desarrollo de SDK. El chip controlador principal Himax del módulo se puede programar directamente usando el SDK proporcionado, permitiendo proyectos de grado industrial con características altamente personalizadas.

Los usuarios interesados en el desarrollo de SDK pueden consultar los ejemplos existentes, como [sdio_app](https://github.com/Seeed-Studio/sscma-example-we2/tree/main/EPII_CM55M_APP_S/app/scenario_app/sdio_app), que demuestra operaciones SDIO directas. Estos ejemplos sirven como punto de partida para modificar e implementar proyectos personalizados.

Al aprovechar el poder del SDK, los usuarios pueden desbloquear todo el potencial del Grove Vision AI V2 y crear soluciones adaptadas a sus necesidades específicas. Sigue [la página wiki anterior](/es/grove_vision_ai_v2_himax_sdk) para tener más orientación.

## FAQ y solución de problemas

### ¿Cuál es la función de invoke? {#faq_invoke}

Cada vez que se obtienen los valores de datos del Grove Vision V2, se supone que debe llamar a la función `invoke`:

```cpp
/**
 * @brief Invoke the algorithm for a specified number of times
 * 
 * This function invokes the algorithm for a specified number of times and waits for the response and event.
 * The result can be filtered based on the difference from the previous result, and the event reply can be
 * configured to contain only the result data or include the image data as well.
 *
 * @param times The number of times to invoke the algorithm
 * @param filter If true, the event reply will only be sent if the last result is different from the previous result
 *               (compared by geometry and score)
 * @param show If true, the event reply will also contain the image data; if false, the event reply will *only contain* the result data
 * @return int Returns CMD_OK if the invocation is successful and the response and event are received within the timeout;
 *             otherwise, returns CMD_ETIMEDOUT
 *
 * Pattern: AT+INVOKE=<N_TIMES,DIFFERED,RESULT_ONLY>\r
 * Request: AT+INVOKE=1,0,1\r
 */
int SSCMA::invoke(int times, bool filter, bool show);
```

### ¿Qué hace `AI.begin()`? {#faq_begin}

:::info
Si usas `SSCMA.begin()`, por defecto utiliza I2C (Wire) para la comunicación, como se define en el encabezado de la función:

```cpp
bool begin(TwoWire *wire = &Wire, int32_t rst = -1, uint16_t address = I2C_ADDRESS,
      uint32_t wait_delay = 2, uint32_t clock = SSCMA_IIC_CLOCK);
```

:::

## Recursos

- [Manual de referencia de comandos AT](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)
- [Seeed Arduino SSCMA - Librería de Arduino](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)

## Referencias

- [WiseEye2 AI Processor - Himax](https://www.himax.com.tw/products/wiseeye-ai-sensing/wiseeye2-ai-processor/)
- [WIseEye2 Technical Highlights](https://himaxwiseeyeplus.github.io/)

## Contribuir

¡Damos la bienvenida a contribuciones en cualquier forma! Si deseas contribuir a esta página, puedes:

- Reportar errores o sugerir nuevas características abriendo un [issue](https://github.com/Seeed-Studio/wiki-documents/issues)
- Enviar mejoras o correcciones de página creando un [pull request](https://github.com/Seeed-Studio/wiki-documents/pulls)
- Mejorar la documentación sugiriendo ediciones o adiciones
- Ayudar a responder preguntas o proporcionar soporte a otros usuarios
- Compartir el producto con otros que puedan encontrarlo útil

Para comenzar, por favor lee nuestras [Pautas de Contribución](https://raw.githubusercontent.com/Seeed-Studio/wiki-documents/docusaurus-version/CONTRIBUTING.md) para más información sobre cómo contribuir y el proceso para enviar pull requests.

¡Apreciamos todas las contribuciones y te agradecemos por ayudar a mejorarlo!

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
