---
description: Este proyecto combina el XIAO ESP32S3 y Grove Vision AI V2 para crear un dispositivo compacto de detección de personas. El módulo V2, equipado con un modelo de detección de personas, identifica la presencia humana y envía los resultados al ESP32S3. El microcontrolador luego procesa la información y reenvía las alertas de detección a una cuenta de Telegram designada, proporcionando notificaciones en tiempo real cada vez que se detecta una persona en el área monitoreada.
title: Despliega Grove Vision AI V2 Para Notificarte Vía Telegram
image: https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/headimage2.png
slug: /es/grove_vision_ai_v2_telegram
last_update:
  date: 05/27/2024
  author: Allen
---

<div class="table-center">
<iframe width="400" height="700" src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/xiao_telegram.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Este proyecto combina el XIAO ESP32S3 y Grove Vision AI V2 para crear un dispositivo compacto de detección de personas. El módulo V2, equipado con un modelo de detección de personas, identifica la presencia humana y envía los resultados al ESP32S3. El microcontrolador luego procesa la información y reenvía las alertas de detección a una cuenta de Telegram designada, proporcionando notificaciones en tiempo real cada vez que se detecta una persona en el área monitoreada.

## Material Requerido

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>Grove Vision AI V2 Kit</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Parte 1. API de Telegram

Si queremos enviar algo a Telegram, necesitamos obtener el **Token** y **ChatId** de Telegram para acceder a la API de Telegram. Así que obtengámoslos en los siguientes pasos.

### Paso 1. Usar BotFather para crear un nuevo bot

Abre tu Telegram y ve a la página de BotFather, envía **/start** y BotFather te dará algunos comentarios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/2.png" style={{width:500, height:'auto'}}/></div>

Haz clic en el enlace **/newbot**. BotFather creará un nuevo bot para ti y deberías darle un nombre a tu bot según la regla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/3.png" style={{width:500, height:'auto'}}/></div>

### Paso 2. Obtener tu Token y ChatId

Según el paso anterior, BotFather te dará algunos comentarios cuando hayas creado tu bot. Encontrarás el **Token** en los comentarios y el formato sería como: **123456789:AoUJnnpoFlkkdfJbCXlo...**. Y luego usa tu Token para acceder a este enlace para obtener tu **ChatId**.

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

Encontrarás tu **ChatId** siguiendo la imagen de abajo. El ChatId sería como: **12234556**. **Guarda tu Token y ChatId**, los usaremos más tarde.

:::tip
Si no ves nada en esta página, por favor envía algo a tu bot y actualiza esta página de nuevo.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/1.png" style={{width:1000, height:'auto'}}/></div>

## Parte 2. Modelo de Detección de Personas

#### Paso 3. Elegir modelo

Primero, necesitamos abrir la página principal del Asistente de Modelos de IA SenseCraft.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir a SenseCraft AI</font></span></strong></a>
</div>
<br />

Elige el modelo que quieres desplegar y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/4.png" style={{width:1000, height:'auto'}}/></div>

Puedes ver la descripción de este modelo aquí y si te conviene, haz clic en el botón **Deploy Model** en el lado derecho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 4. Conectar el módulo y cargar un modelo adecuado

Por favor usa un cable tipo Type-C para conectar Grove Vision AI V2 a tu computadora y luego haz clic en el botón **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

Haz clic en el botón **Confirm**. En la esquina superior izquierda de esta página, puedes seleccionar **USB Single Serial**. Luego haz clic en el botón **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

Por favor permanece en esta página por 1-2 minutos hasta que el modelo se cargue exitosamente. Ten en cuenta que cambiar a otra pestaña de página durante este proceso puede resultar en una carga fallida (nuestro equipo está trabajando activamente en resolver este problema, y se solucionará pronto).

### Paso 5. Observaciones

Una vez que el modelo se carga exitosamente, podrás ver la transmisión en vivo de la cámara Grove Vision AI V2 en la Vista Previa a la izquierda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/6.png" style={{width:800, height:'auto'}}/></div>

¡Felicitaciones! Hasta ahora todo bien, a continuación vamos a escribir algo de código para enviar algo a Telegram vía la serie XIAO ESP32.

## Parte 3. Enviar Notificación a Telegram

### Paso 6. Instalación

Primero, conecta XIAO ESP32S3 a Grove Vision AI V2 vía pin, y luego conecta la antena a XIAO ESP32S3. Finalmente, conecta el XIAO ESP32S3 a tu computadora vía cable Type-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/8.png" style={{width:500, height:'auto'}}/></div>

### Paso 7. Codificación

Primero necesitamos descargar la [Librería SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA) en esta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/10.png" style={{width:1000, height:'auto'}}/></div>

Y luego necesitamos agregar este paquete zip al IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/11.png" style={{width:800, height:'auto'}}/></div>

Ahora, crea un nuevo sketch en el IDE de Arduino y pega el siguiente código al sketch y cárgalo.

:::tip
Por favor cambia a tu Wi-Fi 2.4G **ssid**, **password** y tu Telegram **Token**, **ChatId** guardados anteriormente.
:::

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Seeed_Arduino_SSCMA.h>

//change to your ssid and password
const char* ssid = "xxx";
const char* password = "xxx";

//change to your token and chatid
const String botToken = "xxx";
const String chatId = "xxx";

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
    WiFi.begin(ssid, password); 
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Connecting to WiFi...");
    }
}

void loop()
{
    if (!AI.invoke()){
      for (int i = 0; i < AI.boxes().size(); i++){
          //Get the model inference
          if(AI.boxes()[i].score>70){
            Serial.println("People detected");
            //Call the function to send the monitering result to Telegram
            if(WiFi.status() == WL_CONNECTED) {
              sendMessage("People Detected");
              delay(1000);
            }
          }
      }
    }
}

//The function that access Telegram and send some message
void sendMessage(String text) {
  String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  String payload = "{\"chat_id\":\"" + chatId + "\",\"text\":\"" + text + "\"}";
  
  HTTPClient http;
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  
  int statusCode = http.POST(payload);
  if (statusCode == 200) {
    Serial.println("Message sent successfully!");
  } else {
    Serial.println("Failed to send message.");
  }
  http.end();
}
```

Después de cargar el código, abre el monitor serie y usa Grove Vision AI V2 para detectar personas. Verás los siguientes resultados cuando Vision AI V2 haya detectado personas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/7.png" style={{width:800, height:'auto'}}/></div>

Ahora, abre la página de chat de tu bot en Telegram y verás algunos mensajes enviados desde XIAO ESP32S3. También puedes usar un power bank para suministrar electricidad como en el video.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/9.png" style={{width:500, height:'auto'}}/></div>

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