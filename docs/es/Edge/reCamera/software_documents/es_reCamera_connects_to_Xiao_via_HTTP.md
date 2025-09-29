---
description: Este wiki demuestra cómo conectar a XIAO vía HTTP en reCamera para ejecutar un proyecto C++.
title: reCamera se conecta a XIAO vía HTTP
keywords:
  - Http
  - reCamera
  - XIAO
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /es/recamera_connects_to_xiao_via_http
last_update:
  date: 07/11/2025
  author: Liangyuxin

no_comments: false # for Disqus
---

# reCamera se conecta a XIAO vía HTTP

Este documento demuestra cómo habilitar la comunicación entre la reCamera y [XIAO](https://wiki.seeedstudio.com/es/SeeedStudio_XIAO_Series_Introduction/) vía HTTP, transmitiendo datos a [XIAO](https://wiki.seeedstudio.com/es/SeeedStudio_XIAO_Series_Introduction/) para que puedas integrar la reCamera en tus propios proyectos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/1.png" /></div>

## Preparación

### reCamera

#### API HTTP y conexión de red

**En primer lugar**, prepara el proyecto supervisor C++ de tu reCamera y el entorno de ejecución.

- **Paso 1.** Descarga el proyecto [Supervisor_add_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Supervisor_add_detection_http.7z), compílalo y copia el archivo **.exe** al directorio del terminal de reCamera.(Para instrucciones detalladas, consulta el wiki: [Detección de objetos YOLO en tiempo real usando reCamera basado en Cpp / Preparación del entorno / Pre-compilación](https://wiki.seeedstudio.com/es/real_time_yolo_object_detection_using_recamera_based_on_cpp/).) Este es un proyecto supervisor, solo usaremos la interfaz de detección YOLO de fotos para fines de demostración. Si tienes tu propio proyecto, puedes agregar nuevas APIs HTTP y código de proyecto dentro de este proyecto.

- **Paso 2.** Conecta la reCamera a la PC usando un cable USB, usa **MobaXterm** para acceder al terminal de reCamera (**192.168.42.1**), y navega a **/etc/init.d/** para eliminar los tres programas de inicio automático: **S93sscma-supervisor, S03node-red, y S91sscma-node**.(Para instrucciones detalladas, consulta el wiki: [Detección de objetos YOLO en tiempo real usando reCamera basado en Cpp / Preparación del entorno / Preparación de reCamera](https://wiki.seeedstudio.com/es/real_time_yolo_object_detection_using_recamera_based_on_cpp/).)

**En segundo lugar**, reCamera y XIAO deben estar en la misma red de área local (LAN) de 2.4GHz para comunicarse. ReCamera tiene una tarjeta de red inalámbrica interna que puede conectarse a WiFi. Típicamente, puedes conectarte a WiFi a través de la [web Node-RED](http://192.168.42.1/#/workspace) de la cámara. Sin embargo, cuando ejecutas un proyecto C++ personalizado, debes deshabilitar Node-RED y reiniciar reCamera.(Referencia: [Seeed Studio Wiki](https://wiki.seeedstudio.com/es/real_time_yolo_object_detection_using_recamera_based_on_cpp/)). Por lo tanto, necesitamos establecer la conexión WiFi vía el terminal de Linux.

```
cd /etc/
ls
```

Puedes ver el **wpa_supplicant.conf** :
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/2.png" /></div>
También puedes verlo en el directorio de archivos de la izquierda:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/3.png" /></div>

Arrastra el/los archivo(s) al escritorio y ábrelo con el Bloc de notas. Añade la red como se muestra en la imagen, y cámbiala por tu SSID y contraseña.
**Nota** : No incluyas espacios adicionales a ningún lado del signo igual.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/4.png" /></div>

Elimina el archivo original en el terminal de reCamera: /etc/.

```
sudo rm wpa_supplicant.conf
```

Abre el powershell de windows de tu PC y copia el archivo al terminal de reCamera: **/home/recamera/**:

```
scp "C:\Users\{your username}\Desktop\wpa_supplicant.conf" recamera@192.168.42.1:/home/recamera
```

Copia el archivo desde **/home/recamera/** a : **/etc/**:

```
sudo scp wpa_supplicant.conf /etc/
```

Reinicia la reCamera. Luego, ejecuta el programa.

```
sudo ./Supervisor_add_detection_http
```

Asegúrate de que tu reCamera esté conectada a tu red WiFi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/5.png" /></div>

### XIAO

#### Conexión de red y envío de solicitudes HTTP

Es necesario descargar [Arduino](https://www.arduino.cc/en/software) para flashear el programa para XIAO (ESP32-C3).

**Paso 1.** Descarga e instala la última versión del [IDE de Arduino](https://www.arduino.cc/en/software/) según tu sistema operativo. Inicia la aplicación Arduino.

**Paso 2.** Añade el paquete de placas ESP32 a tu IDE de Arduino
Navega a **Archivo > Preferencias**, y completa **"URLs adicionales del gestor de placas"** con la url de abajo:
**https://jihulab.com/esp-mirror/espressif/arduino-esp32.git**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/6.png" /></div>

Navega a **Herramientas > Placa > Gestor de placas...**, escribe la palabra clave "**esp32**" en el cuadro de búsqueda, selecciona la última versión de **esp32**, e instálala.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/12.png" /></div>

**Paso 3.** Selecciona tu placa y puerto

**Placa**
Navega a **Herramientas > Placa > ESP32 Arduino** y selecciona "**XIAO_ESP32C3**". La lista de placas es un poco larga y necesitas desplazarte hasta abajo para encontrarla.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/13.png" /></div>

**Puerto**
Navega a **Herramientas > Puerto** y selecciona el nombre del puerto serie del XIAO ESP32C3 conectado. Es probable que sea COM3 o superior (**COM1** y **COM2** están usualmente reservados para puertos serie de hardware).

**Paso 4.** Escribe el siguiente programa y haz clic en el botón de subida para compilar y subir. La reCamera y XIAO deben estar en la misma red de área local (LAN) de 2.4GHz para comunicarse.

```
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 60 // Popular NeoPixel ring size
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500

const char* ssid = {"your wifi name"};     
const char* password = {"your wifi password"}; 
const char* apiUrl = "http://{"your wifi ip"}/modeldetector";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
  #endif
  // END of Trinket-specific code.

  pixels.begin();
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(apiUrl); 
    http.addHeader("Content-Type", "application/json"); 


    int httpCode = http.GET();
    if (httpCode > 0) {
      String payload = http.getString(); 
      Serial.println("HTTP Response:");
      // Serial.println(payload); 

      DynamicJsonDocument doc(1024); 
      DeserializationError error = deserializeJson(doc, payload);
      if (error) {
        Serial.print("JSON read failed: ");
        Serial.println(error.c_str());
      } 
      else {
      Serial.print("Code:  ");
      Serial.println(doc["Code"].as<String>());      
      Serial.print("Msg:  ");
      Serial.println(doc["Msg"].as<String>());
      Serial.print("Target:  ");
      Serial.println(doc["Target"].as<String>());
      Serial.print("Score:  ");
      Serial.println(doc["Score"].as<String>());
      Serial.print("Release_duration:  ");
      Serial.print(doc["Release_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Capture_duration:  ");
      Serial.print(doc["Capture_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Image_preprocessing_duration:  ");
      Serial.print(doc["Image_preprocessing_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Detection_duration:  ");
      Serial.print(doc["Detection_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Total Duration:  ");
      Serial.print(doc["Duration"].as<String>());
      Serial.println("ms");


      if (doc["Target"].as<String>().indexOf("person") != -1){
          pixels.clear();
          pixels.show();
          int smileyLEDs[] = {21,26,29,32,35,39};
          int numLEDs = sizeof(smileyLEDs) / sizeof(smileyLEDs[0]);

          for (int i = 0; i < numLEDs; i++) {
              pixels.setPixelColor(smileyLEDs[i], pixels.Color(2, 2, 0)); // yellow
          }
          pixels.show();

          printf("Target contains 'person'\n");
        } else {
            pixels.clear();
            pixels.show();
            printf("Target does not contain 'person'\n");
        }
    }


    } else {
      pixels.clear();
      pixels.show();
      Serial.print("HTTP get failed: ");
      Serial.println(httpCode);
    }
    http.end(); 
  } else {
    pixels.clear();
    pixels.show();
    Serial.println("WiFi disconnected");
  }

  delay(5000);
}


```

**Nota**: Modifica con el nombre de tu WiFi (SSID), contraseña y dirección IP wlan0 de reCamera.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/7.png" /></div>

Espera a que se complete la carga, y puedes ver que XIAO se ha conectado exitosamente a WiFi en el **monitor serie**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/9.png" /></div>

## Ejecución

Asegúrate de que tu reCamera esté ejecutando el proyecto Supervisor y se haya conectado exitosamente a WiFi.

```
sudo ./Supervisor_add_detection_http
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/10.png" /></div>

Puedes ver los resultados Json del servicio HTTP en el **monitor serie** de XIAO.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/11.png" /></div>

Cuando una persona mira hacia la cámara, XIAO muestra una cara sonriente, realizando así una cámara sonriente que puedes hacer tú mismo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/14.png" /></div>

Para más detalles, consulta nuestro [repositorio de GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


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
