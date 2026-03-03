---
title: Grove - Mini Cámara
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Mini_Camera/
slug: /es/Grove-Mini_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Grove_camera.jpg)

Si estás buscando una cámara de tamaño pequeño, quizás Grove-Mini Cámara sería tu mejor opción. Es una mini cámara que puede ser controlada por Arduino. Tiene procesamiento de imagen integrado para generar imágenes JPEG de 1280\*720. Las fotos capturadas se almacenan en tarjeta SD y puedes leer la información de la tarjeta SD a través de la interfaz Mini USB de 8 pines.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Mini-Camera-p-1578.html)

Características
-------

- Interfaz USB estándar e interfaz Grove
- Alta resolución
- Tamaño diminuto y peso ligero

:::tip
    Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Especificaciones
-------------

| Elemento                     | Parámetro de Rendimiento |
|------------------------------|--------------------------|
| CPU                          | ARM9                     |
| Decodificación de Video      | H.263 Accele             |
| Formato de Video             | AVI                      |
| Codificación de Video        | MPEG4                    |
| Resolución de Video          | 640\*480                 |
| Velocidad de Fotogramas      | 30FPS                    |
| Ejecutar Software            | soporta reproductor AVI  |
| Formato de Foto              | JPEG                     |
| Resolución de Imagen         | 1280\*720                |
| Modo de Carga                | DC5V                     |
| Interfaz de Comunicación de Datos | Mini USB de 8 pines |
| Medio de Almacenamiento      | Micro SD (Máx 32G)      |

Demostración
-------------

A diferencia de las cámaras generales, Grove - Mini Camera puede ser controlada por Arduino/Seeeduino.

Ahora usemos la Grove - Mini camera para lograr esta función: tomar una foto cada vez que alguien se acerque.

Para hacerlo, necesitamos un **Grove - PIR Motion sensor** que puede detectar cualquier movimiento dentro de un cierto alcance.

Comencemos a hacerlo:

- Conecta la tarjeta SD en el socket de la tarjeta SD, la tarjeta SD no está incluida en este Grove y su tamaño no puede ser mayor a 32G.
- Conecta Grove - Mini Camera al puerto D2 del **Grove - Base Shield**, y Grove - PIR Motion Sensor al puerto D5.
- Conecta Grove - Base Shield en Arduino/Seeeduino, luego conecta Arduino/Seeeduino a la PC usando un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Connecting_Picture.JPG)

- Abre Arduino IDE, copia y pega el código de abajo en un nuevo sketch:

```
    /*Using digital 2 to control Camera*/
    /*Using digital 5 to receive sensor signal*/
    #define KEY 2
    #define PIR_MOTION_SENSOR 5  
     
    void setup()
    { 
      Serial.begin(9600);
      pinMode(KEY,OUTPUT);
      pinMode(PIR_MOTION_SENSOR,INPUT);
      delay(100);
      enterStandbyMode();
      makeVideo(5000);

    }
    void loop()
    {
        int sensorValue = digitalRead(PIR_MOTION_SENSOR);
        if(sensorValue == HIGH)  //when the sensor value is HIGH, someone is in here
        {
           takePicture();
               delay(5000);      
        }
    }
    void takePicture(void)
    {
       digitalWrite(KEY,HIGH);
       delay(1000);
       digitalWrite(KEY,LOW);
       delay(1000);
    }
    void enterStandbyMode(void)
    {
      //set the key pin as high level for 2s,enter the standby state  
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
    void makeVideo(long int videoTime)
    {
      //set the key pin as high level for 2s again, from the standby state to video state
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(videoTime); //make a  video for videoTime.Its unit is ms.  
     // stop the video
      digitalWrite(KEY,HIGH);
      delay(1000);
      digitalWrite(KEY,LOW);
      delay(1000);
    }
    void PoweroffMode(void)
    {
      //set the key pin as high level for 5s,enter the poweroff state  
      digitalWrite(KEY,HIGH);
      delay(5000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
```

- Sube el código.
- Ahora debería haber un video en la tarjeta SD porque llamamos la función una vez durante Setup(). Para reproducir el video, puedes conectar directamente la cámara a la PC mediante cable USB o usar un lector para leerla. Y si alguien se acerca cuando está funcionando, también deberías encontrar algunas imágenes en las tarjetas SD.

Referencia
----------

Aquí está la descripción de estados de esta mini cámara. Hay 5 estados de funcionamiento.

**1. Espera:** Establece la tecla como nivel alto durante 2 segundos cuando esté en estado apagado, el LED rojo se encenderá. La mini cámara entra en estado de Espera.

**2. Apagado:** Establece la tecla como nivel alto durante 5 segundos, la cámara entra en estado Apagado, el LED rojo se desvanecerá.

**3. Tomar fotos:** Establece la tecla como nivel alto durante aproximadamente 1000ms cuando esté en estado encendido, la cámara puede tomar una foto. El LED rojo parpadeará una vez para indicarte que se ha tomado una foto. Después, entra automáticamente en estado de espera.

**4. Video:** Establece la tecla como nivel alto durante 2 segundos cuando esté en estado de espera, la cámara entrará en estado de video y el LED rojo parpadeará continuamente. Para detenerlo, establece la tecla como nivel alto durante aproximadamente 1000ms, la cámara entrará en estado de espera.

**5. Almacenamiento de archivos:** Conecta la cámara a la PC usando cable USB, puedes abrir archivos de imagen y archivos de VIDEO. También puedes acceder a los archivos en la tarjeta SD mediante un lector de tarjetas SD.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle de Mini Camera](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mini_Camera -->

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
