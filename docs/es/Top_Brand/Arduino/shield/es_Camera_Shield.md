---
description: Camera_Shield
title: Camera Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Camera_Shield
last_update:
  date: 01/10/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield.jpg" alt="pir" width={600} height="auto" /></p>

Camera Shield es la primera placa shield que soporta fotografía, está basada en la solución de **VC0706 + OV7725**, el primero es un procesador de cámara de alto rendimiento con funciones mejoradas de procesamiento de imagen y tiene integrado el códec JPEG cableado, y el segundo es una cámara VGA de 1/4 de pulgada de alto rendimiento de un solo chip y procesador de imagen en un paquete de huella pequeña. Hemos escrito nuestra biblioteca para controlar el Camera Shield vía UART/SPI, lo que hace posible tomar fotos fácilmente con tu placa Arduino. ¡Ven y úsalo para tomar una foto!

## Especificaciones

---

* Totalmente Compatible con Arduino o Seeeduino

* Resolución de Imagen Fija: (640x480) Salida JPEG

* Control de Bus Serie de Alta Velocidad: UART/SPI

* Interfaz de Tarjeta MicroSD Integrada

* Fuente de Alimentación: 5 V

## Interfaz de Hardware

---
Camera Shield puede ser controlado vía interfaz SPI o UART.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface2.png" alt="pir" width={600} height="auto" /></p>

## Primeros Pasos

---
Aquí hay una breve introducción para usar Camera Shield.

1. Descarga el archivo de [biblioteca Camera Shield](https://github.com/Seeed-Studio/Camera_Shield_VC0706) desde gitHub y luego extrae el archivo de biblioteca a tu carpeta de bibliotecas de Arduino.

2. Abre la carpeta de ejemplos en libraries/Camera_Shield_VC0706, encontrarás el ejemplo snapshot, haz doble clic en el archivo snapshot.ino para abrirlo con el IDE de arduino.

3. Organizamos la biblioteca para hacer posible controlar el Camera Shield vía Software Serial/Hardware Serial/SPI, puedes hacer tu elección modificando el código.

```cpp
#include "SoftwareSerial.h"
#include <VC0706_UART.h>
#include <SD.h>
#include <SPI.h>
#define SS_SD  10

//use software serial
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
//use hardware serial
//VC0706 cam = VC0706(&Serial1);

void setup()
{
    Serial.begin(9600);
    Serial.println("VC0706 Camera Snapshot Test ...");

    if (!SD.begin(SS_SD)) {
        Serial.println("SD Card init failed...");
        return;
    }
    if(true == cameraInit()){
        snapShot();
    }else{
        Serial.println("camera init error...");
    }
}

void loop()
{
    //nothing to do
}

bool cameraInit()
{
    cam.begin(BaudRate_19200);
    char *reply = cam.getVersion();
    if (reply == 0) {
        Serial.println("Failed to get version");
        return false;
    } else {
        Serial.println("version:");
        Serial.println("-----------------");
        Serial.println(reply);
        Serial.println("-----------------");
        return true;
    }
}

void snapShot()
{
    Serial.println("Snap in 3 secs...");
    delay(3000);
    if (! cam.takePicture()){
        Serial.println("Failed to snap!");
    }else {
        Serial.println("Picture taken!");
    }
    // Create an image with the name IMAGExx.JPG
    char filename[13];
    strcpy(filename, "IMAGE00.JPG");
    for (int i = 0; i < 100; i++) {
        filename[5] = '0' + i/10;
        filename[6] = '0' + i%10;
        // create if does not exist, do not open existing, write, sync after write
        if (! SD.exists(filename)) {
            break;
        }
    }
    // Open the file for writing
    File imgFile = SD.open(filename, FILE_WRITE);
    Serial.print("create ");
    Serial.println(filename);
    uint16_t jpglen = cam.getFrameLength();
    Serial.print("wait to fetch ");
    Serial.print(jpglen, DEC);
    Serial.println(" byte image ...");
    int32_t time = millis();
    cam.getPicture(jpglen);
    uint8_t *buffer;
    while(jpglen != 0){
        uint8_t bytesToRead = min(32, jpglen);
        buffer = cam.readPicture(bytesToRead);
        imgFile.write(buffer, bytesToRead);
        //Serial.print("Read ");  Serial.print(bytesToRead, DEC); Serial.println(" bytes");
        jpglen -= bytesToRead;
    }
    imgFile.close();
    time = millis() - time;
    Serial.println("Done!");
    Serial.print("Took "); Serial.print(time); Serial.println(" ms");
    cam.resumeVideo();
}
```

**usar Serial por Hardware o Serial por Software para la comunicación**

usamos Serial (Serial por Software o Serial por hardware) para comunicarnos con Camera Shield, puedes generar tu aplicación como se muestra a continuación:

```cpp
//use software serial
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
```

o si quieres usar el puerto serie por hardware, puedes hacerlo como se muestra a continuación:

```cpp
//use hardware serial
VC0706 cam = VC0706(&Serial1);
```

Utilizamos el puerto serie por software de forma predeterminada. Si el puerto serie por hardware es tu elección, necesitas modificar el código en el archivo de cabecera VC0706_UART. Cambia

```cpp
#define USE_SOFTWARE_SERIAL         1
```

a

```cpp
#define USE_SOFTWARE_SERIAL         0
```

**Usar UART o SPI para transmisión de datos**

Normalmente, puedes tomar una foto siguiendo los siguientes pasos:

```cpp
cam.takePicture();
uint16_t jpglen = cam.getFrameLength();
cam.getPicture(jpglen);
buffer = cam.readPicture(bytesToRead);
```

y te permitimos leer datos a través de dos modos:

* 1. UART —— modo más lento. Software Serial solo soporta velocidad de baudios de 9600/19200. Hardware Serial puede ser 115200/38400/19200/9600. Tomará aproximadamente 30s obtener una imagen si eliges el modo uart y a velocidad de 19200 baudios.
* 2. SPI —— modo más rápido. Solo tomará aproximadamente 1s o 2s obtener toda la imagen de vuelta.

Puedes elegir tu modo en el archivo de cabecera VC0706_UART. Usamos el modo SPI por defecto.

```cpp
#define TRANSFER_BY_SPI             1
```

change it to

```cpp
#define TRANSFER_BY_SPI             0
```

para usar el modo UART.

4. Apila el Camera Shield sobre Arduino e inserta una tarjeta micro-SD en el Camera Shield, debes prestar atención a los jumpers serie que definiste en tu código.

5. Compila el sketch y súbelo a tu placa arduino. Abre el puerto Serie del IDE de Arduino, puedes ver la información de depuración mostrada desde el puerto Serie. y el LED de estado de la tarjeta SD parpadeará rápidamente durante la transferencia de datos.

6. Cuando el programa termine, extrae la tarjeta SD e insértala en tu computadora, puedes ver tus fotos. ¡Diviértete!

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Librería del Camera Shield en gitHub](https://github.com/Seeed-Studio/Camera_Shield_VC0706)

* [Esquemático del Camera Shield](https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip)

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
