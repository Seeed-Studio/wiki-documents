---
description: XIAO ESP32C3-Chatgpt
title: XIAO ESP32C3-Chatgpt
keywords:
  - XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiaoesp32c3-chatgpt
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/xiaoesp32c3-chatgpt/
---
# Aprende a usar WiFiClient y HTTPClient en XIAO ESP32C3 - XIAO ESP32C3 y ChatGPT en acción

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPT es un nuevo modelo de chatbot, una herramienta de procesamiento de lenguaje natural impulsada por tecnología de inteligencia artificial, lanzada por OpenAI, un laboratorio de investigación de inteligencia artificial, el 30 de noviembre de 2022.

Es capaz de llevar a cabo conversaciones aprendiendo y entendiendo el lenguaje humano, y también puede interactuar basándose en el contexto del chat, verdaderamente charlando y comunicándose como un humano, incluso realizando tareas como escribir correos electrónicos, guiones de video, redacción publicitaria, traducción y codificación.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

En sistemas embebidos, ChatGPT puede ser un buen asistente para ayudarnos a escribir programas simples, o incluso verificar y corregir errores que aparecen en el programa.

Lo que es emocionante es que OpenAI proporciona oficialmente interfaces para llamar a los modelos GPT-3, lo que nos permite llamar a estas interfaces y desplegar este gran modelo en nuestros propios sistemas embebidos a través de varios métodos.

Seeed Studio XIAO ESP32C3 es una placa de desarrollo mini IoT basada en el chip de modo dual WiFi/Bluetooth Espressif ESP32-C3. Tiene un excelente rendimiento de radiofrecuencia, soportando WiFi IEEE 802.11 b/g/n, y protocolos Bluetooth 5 (LE). Puede soportar perfectamente los servicios de WiFi Client y WiFi Server proporcionados por ESP32 oficial. Por supuesto, es capaz de soportar Arduino perfectamente.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>


Así que en este tutorial, guiaremos a los usuarios para aprender y usar las librerías WiFiClient y HTTPClient de XIAO ESP32C3, cómo conectarse a la red, cómo publicar páginas web y los fundamentos de HTTP GET y POST. El objetivo es llamar a OpenAI ChatGPT y crear tu propio sitio web de preguntas y respuestas.

## Comenzando

En este tutorial, usaremos un XIAO ESP32C3 para configurar una página de preguntas y respuestas de ChatGPT propia. En esta página, puedes ingresar tu pregunta y XIAO ESP32C3 registrará tu pregunta y usará el método de llamada API proporcionado por OpenAI para enviar un comando de solicitud usando HTTP Client para obtener la respuesta de ChatGPT e imprimirla en el puerto serie.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

Las tareas en este tutorial se pueden dividir en los siguientes cuatro pasos principales.

1. [Configurar el XIAO ESP32C3 para conectarse a la red](#configure-the-xiao-esp32c3-to-connect-to-the-network) : Dentro de este paso, aprenderemos el proceso básico de configuración WiFi usando XIAO ESP32C3 y aprenderemos las operaciones básicas de XIAO ESP32C3 como configuración de red, conexión a servicios de red y obtención de dirección IP.

2. [Construir la página web embebida](#build-the-embedded-web-page) : En este paso, tocamos principalmente la librería WiFi Client. Al usar las funciones GET y POST de esta librería, podemos escribir nuestra propia página web de preguntas y respuestas usando HTML y desplegarla encima de XIAO ESP32C3.

3. [Enviar preguntas a través de la página web integrada](#submit-questions-via-the-built-in-web-page) : En este paso aprenderemos principalmente a usar el método POST en el HTTP Client para hacer POST de las preguntas que hacemos según el estándar de API de OpenAI. enfocaremos nuestra atención principal en el proceso de cómo recopilar y almacenar las preguntas de la página web.

4. [Obtener respuestas de ChatGPT](#get-answers-from-chatgpt) : En este paso aprendemos a usar el método POST en el HTTP Client y extraer las respuestas a las preguntas que necesitamos de los mensajes devueltos. El último paso es ordenar la estructura del código y hacer la integración final.

### Materiales Requeridos

<table align="center">
 <tr>
     <th>Material</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
 </tr>
 <tr>
     <td align="center"><a href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong>Obtener UNO Ahora</strong></a></td>
 </tr>
</table>

### Preparación Preliminar

Todos los procedimientos y pasos en este tutorial han sido completados basándose en el XIAO ESP32C3. En la fase de preparación, primero necesitamos completar la configuración del entorno para usar el XIAO ESP32C3.

**Paso 1.** Conecta el XIAO ESP32C3 a tu computadora mediante un cable USB Type-C.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**Paso 2.** Descarga e instala la última versión del Arduino IDE según tu sistema operativo

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**Paso 3.** Inicia la aplicación Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **Paso 4.** Añade el paquete de placas ESP32 a tu Arduino IDE

Navega a **Archivo > Preferencias**, y completa **"URLs Adicionales del Gestor de Placas"** con la url de abajo:
*[https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json](https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json)*

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

Navega a **Herramientas > Placa > Gestor de Placas...**, escribe la palabra clave "**esp32**" en el cuadro de búsqueda, selecciona la última versión de ****esp32****, e instálala.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **Paso 5.** Selecciona tu placa y puerto

Navega a **Herramientas > Placa > ESP32 Arduino** y selecciona "**XIAO_ESP32C3**". La lista de placas es un poco larga y necesitas desplazarte hasta abajo para encontrarla.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

Navega a **Herramientas > Puerto** y selecciona el nombre del puerto serie del XIAO ESP32C3 conectado. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware).

## Configurar el XIAO ESP32C3 para conectarse a la red

El uso de WiFi ha sido descrito en detalle en el [tutorial del XIAO ESP32C3 sobre el uso de WiFi](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network).

Cuando el ESP32 se configura como una estación Wi-Fi, puede conectarse a otras redes (como tu router). En este escenario, el router asigna una dirección IP única a tu placa ESP.

Lo primero que necesitas hacer para usar las funcionalidades Wi-Fi del ESP32 es incluir la librería WiFi.h en tu código, como sigue:

```c
#include <WiFi.h>
```

Para conectar el ESP32 a una red Wi-Fi específica, debes conocer su SSID y contraseña. Además, esa red debe estar dentro del rango Wi-Fi del ESP32.

Primero, configura el modo Wi-Fi. Si el ESP32 se conectará a otra red (punto de acceso/hotspot) debe estar en modo estación.

```c
WiFi.mode(WIFI_STA);
```

Luego, usa `WiFi.begin()` para conectarte a una red. Debes pasar como argumentos el SSID de la red y su contraseña.

Conectarse a una red Wi-Fi puede tomar un tiempo, por lo que usualmente agregamos un bucle while que sigue verificando si la conexión ya se estableció usando `WiFi.status()`. Cuando la conexión se establece exitosamente, devuelve `WL_CONNECTED`.

Cuando el ESP32 se configura como una estación Wi-Fi, puede conectarse a otras redes (como tu router). En este escenario, el router asigna una dirección IP única a tu placa ESP32. Para obtener la dirección IP de tu placa, necesitas llamar `WiFi.localIP()` después de establecer una conexión con tu red.

```c
void WiFiConnect(void){
    WiFi.begin(ssid, password);
    Serial.print("Connecting to ");
    Serial.println(ssid);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}
```

Las variables `ssid` y `password` contienen el SSID y la contraseña de la red a la que deseas conectarte.

```c
// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

Este es un programa de conexión WiFi muy simple, sube el programa al XIAO ESP32C3, luego abre el asistente serie y establece la velocidad de baudios a 115200. Si la conexión va bien, verás la dirección IP del XIAO impresa.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

Si estás interesado en leer más sobre aplicaciones y funciones del ESP32C3 en WiFi, recomendamos leer [ESP32 Useful Wi-Fi Library Functions](https://randomnerdtutorials.com/esp32-useful-wifi-functions-arduino/).

## Construir la página web embebida

ESP32 integra muchas funciones WiFiClient muy útiles en la biblioteca WiFi, lo que nos permite diseñar y desarrollar páginas web embebidas sin añadir bibliotecas adicionales.

Crea un nuevo objeto WiFiServer para usar este objeto para controlar el servidor IoT establecido por el XIAO ESP32C3.

```c
WiFiServer server(80);
WiFiClient client1;
```

En el paso anterior, hicimos que el XIAO ESP32C3 se conectara a WiFi. después de que la conexión WiFi sea exitosa, podrás obtener la dirección IP actual del XIAO desde el monitor serie. En este momento, XIAO ha configurado exitosamente el servidor web. Puedes acceder a este servidor web a través de la dirección IP del XIAO.

Supongamos que la dirección IP de tu XIAO ESP32C3 es `192.168.7.152`. Entonces puedes ingresar esta dirección IP a través de tu navegador a continuación.

Después de ingresar esta dirección IP, es posible que solo veamos una página en blanco. Esto se debe a que aún no hemos publicado el contenido de nuestra página para esa página.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

Así que ahora vamos a crear un array para almacenar el contenido de la página que queremos diseñar, que es el código HTML, en C.

```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // the connection will be closed after completion of the response
    //"Refresh: 1\r\n"         // refresh the page automatically every n sec
    "\r\n"
    "<!DOCTYPE HTML>\r\n"
    "<html>\r\n"
    "<head>\r\n"
      "<meta charset=\"UTF-8\">\r\n"
      "<title>Cloud Printer: ChatGPT</title>\r\n"
      "<link rel=\"icon\" href=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" type=\"image/x-icon\">\r\n"
    "</head>\r\n"
    "<body>\r\n"
    "<img alt=\"SEEED\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/logo.png\" height=\"100\" width=\"410\">\r\n"
    "<p style=\"text-align:center;\">\r\n"
    "<img alt=\"ChatGPT\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" height=\"200\" width=\"200\">\r\n"
    "<h1 align=\"center\">Cloud Printer</h1>\r\n" 
    "<h1 align=\"center\">OpenAI ChatGPT</h1>\r\n" 
    "<div style=\"text-align:center;vertical-align:middle;\">"
    "<form action=\"/\" method=\"post\">"
    "<input type=\"text\" placeholder=\"Please enter your question\" size=\"35\" name=\"chatgpttext\" required=\"required\"/>\r\n"
    "<input type=\"submit\" value=\"Submit\" style=\"height:30px; width:80px;\"/>"
    "</form>"
    "</div>"
    "</p>\r\n"
    "</body>\r\n"
    "<html>\r\n"
};
```

Este código nos da el efecto de página mostrado en la figura a continuación.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::tip
La sintaxis HTML para páginas web está fuera del alcance de este tutorial. Puedes aprender a usar HTML por tu cuenta, o, alternativamente, podemos usar herramientas de generación existentes para hacer el trabajo de generación de código. Recomendamos usar [HTML Generator](https://webcode.tools/generators/html).
Vale la pena señalar que en programas C, "\\" y """ son caracteres especiales, y si quieres conservar la funcionalidad de estos caracteres especiales en tu programa, necesitas agregar una barra diagonal derecha delante de ellos.
:::

Client1 se refiere al cliente Socket después de que se establece el servidor web, el siguiente código es el flujo de procesamiento del servidor web.

```c
client1 = server.available();
if (client1){
    Serial.println("New Client.");           // print a message out the serial port
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // Check if the client is connected
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  //Send the response body to the client
                }         
                else if(dataStr == "POST"){
                    json_String = "";
                    while(client1.available()){
                        json_String += (char)client1.read();
                    }
                    Serial.println(json_String); 
                    dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
                    chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
                    client1.print(html_page);        
                    // close the connection:
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // you're starting a new line
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // you've gotten a character on the current line
                currentLineIsBlank = false;
            }
        }
    }
}
```

En el programa de ejemplo anterior, necesitamos usar `server.begin()` para iniciar el servidor IoT. La declaración debe colocarse en la función `setup`.

```c
void setup()
{
    Serial.begin(115200);
 
    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("WiFi Setup done!");
    WiFiConnect();

    // Start the TCP server server
    server.begin();
}
```

Una vez que se ejecuta el programa anterior y se ingresa la dirección IP del XIAO ESP32C3 en el navegador (siempre que tu host también necesite estar en la misma LAN que el XIAO ESP32C3), entonces el paso GET de WiFiClient comenzará a ejecutarse. En este punto, con la ayuda del método de impresión del lado del cliente, enviamos el código HTML de la página.

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

Y diseñamos la caja de entrada para la entrada de preguntas en la página, la página web obtendrá el estado del botón y almacenará la pregunta ingresada en la variable de cadena `chatgpt_Q` después de que el usuario ingrese el contenido y haga clic en el botón **Submit**.

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// close the connection:
delay(10);
client1.stop();      
```

El efecto de ejecución se muestra a continuación.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## Enviar preguntas a través de la página web integrada

En la página del paso anterior, hay un cuadro de entrada. El cuadro de entrada es donde necesitamos que el usuario ingrese la pregunta que quiere hacer. Todo lo que necesitamos hacer es obtener esta pregunta y enviarla a través de la solicitud API proporcionada por OpenAI.

**Paso 1**. Registrarse para una cuenta de OpenAI.

Puedes ir a la dirección de registro de OpenAI haciendo clic [aquí](https://beta.openai.com/signup). Si te has registrado para su cuenta antes, entonces puedes omitir este paso.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**Paso 2**. Obtener la API de OpenAI.

Inicia sesión en el [sitio web de OpenAI](https://platform.openai.com/overview), haz clic en tu avatar de cuenta en la esquina superior derecha, y luego selecciona **View API keys**.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

En la nueva página emergente selecciona **+Create new secret key**, luego copia tu clave y guárdala.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

Mientras tanto, podemos crear variables de cadena en nuestro programa y copiar esta clave aquí.

```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::tip
A partir del 15 de febrero de 2023, OpenAI está otorgando **$18** en créditos gratuitos a cada nuevo usuario. Las tarifas detalladas se pueden encontrar en la [documentación](https://openai.com/api/pricing/) de OpenAI.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**Paso 3**. Escribir el programa según las solicitudes HTTP de OpenAI.

OpenAI proporciona [instrucciones de uso de API](https://platform.openai.com/docs/api-reference/making-requests) muy detalladas para que los usuarios puedan usar su propia clave API para llamar a ChatGPT.

Según la documentación de ChatGPT, el formato que necesitamos enviar en la solicitud es el siguiente:

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "gpt3.5-turbo-instruct", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

El Protocolo de Transferencia de Hipertexto (HTTP) funciona como un protocolo de solicitud-respuesta entre un cliente y un servidor.
**GET** se utiliza para solicitar datos de un recurso especificado. A menudo se usa para obtener valores de APIs.
**POST** se utiliza para enviar datos a un servidor para crear/actualizar un recurso.
ESP32 puede realizar solicitudes HTTP POST utilizando tres tipos diferentes de cuerpos de solicitud: codificado por URL, objeto JSON o texto plano. Estos son los métodos más comunes y deberían integrarse con la mayoría de APIs o servicios web.

La información anterior es muy importante y proporciona la base teórica para escribir programas HTTP POST. Al principio, comenzamos importando la biblioteca HTTPClient.

```c
#include <HTTPClient.h>
```

También necesitas escribir el nombre de dominio de OpenAI, para que el ESP publique la pregunta a ChatGPT. Y no olvides la clave API de OpenAI.

```c
HTTPClient https;

const char* chatgpt_token = "YOUR_API_KEY";
char chatgpt_server[] = "https://api.openai.com/v1/completions";
```

Necesitamos hacer una solicitud HTTP POST usando un objeto JSON.

```c
if (https.begin(chatgpt_server)) {  // HTTPS
    https.addHeader("Content-Type", "application/json"); 
    String token_key = String("Bearer ") + chatgpt_token;
    https.addHeader("Authorization", token_key);
    String payload = String("{\"model\": \"gpt-3.5-turbo-instruct\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); //Instead of TEXT as Payload, can be JSON as Paylaod
    httpCode = https.POST(payload);   // start connection and send HTTP header
    payload = "";
}
else {
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
}
```

En el programa, enviamos el `payload` al servidor a través del método `POST()`. `chatgpt_Q` es el contenido de la pregunta que queremos enviar a ChatGPT, que estará disponible en la página Get Question.

Si estás interesado en más características del HTTPClient del ESP32C3, te recomendamos leer [ESP32 HTTP GET and HTTP POST with Arduino IDE](https://randomnerdtutorials.com/esp32-http-get-post-arduino/).

## Obtener respuestas de ChatGPT

El siguiente paso es el último paso de todo el tutorial, cómo obtenemos la respuesta de ChatGPT y la registramos.

Continuemos leyendo la [documentación de la API](https://platform.openai.com/docs/api-reference/making-requests) proporcionada por OpenAI para entender cómo se ve la estructura del contenido del mensaje devuelto por ChatGPT. Esto nos permitirá escribir programas para analizar el contenido que necesitamos.

```shell
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "gpt-3.5-turbo-instruct",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}
```

Según la documentación de referencia proporcionada por OpenAI, sabemos que la ubicación de la respuesta a la pregunta en el mensaje devuelto por la interfaz está en `{"choices": [{"text": "\n\nxxxxxxx",}]}`.

Así que ahora podemos estar seguros de que la "Respuesta" que necesitamos debería comenzar con **\n\n** y terminar con **,**. Entonces, en el programa, podemos recuperar la posición donde comienza y termina el texto usando el método `indexOf()`, y almacenar el contenido de la respuesta devuelta.

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

En resumen, podemos usar el método switch con el estado actual del programa para determinar qué paso del programa deberíamos ejecutar.

```c
typedef enum 
{
  do_webserver_index,
  send_chatgpt_request,
  get_chatgpt_list,
}STATE_;

STATE_ currentState;

switch(currentState){
    case do_webserver_index:
        ...
    case send_chatgpt_request:
        ...
    case get_chatgpt_list:
        ...
}
```

En este punto, toda la lógica del programa está estructurada. El código completo del programa se puede obtener haciendo clic en la imagen de abajo. Por favor, no te apresures a subir el programa, necesitas cambiar el **ssid, password y chatgpt_token** del programa por los tuyos propios.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

¡Entonces, siéntete libre de usarlo!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## ¿Qué sigue?

En este tutorial, proporcionamos el método básico para llamar a la interfaz de OpenAI usando ChatGPT para una placa de desarrollo embebida como Arduino - XIAO ESP32C3. ¡A continuación, puedes dejar volar tu creatividad!

Por ejemplo, ¿podrías considerar agregar una pantalla o teclado para convertirlo en un dispositivo de visualización independiente que funcione solo para ti? Ven a ver la creatividad de Gavin, ¡él hizo un dispositivo de vigilancia particularmente interesante! También le damos un agradecimiento especial por proporcionar los pasos necesarios e ideas para este tutorial.

- [Gavin - ChatGPT Recorder & Monitor](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

O ve un paso más allá y agrega un módulo de reconocimiento de voz para deshacerte del teclado y ratón de ahora en adelante y hacer tu propio asistente de voz, etc. En resumen, ¡nos encantaría ver que compartas tu trabajo con un gran producto como el XIAO ESP32C3!

## Solución de problemas

### P1: ¿Hay alguna limitación en el uso de geografía o red para obtener la respuesta llamando a la API de OpenAI usando XIAO ESP32C3?

> R: A partir de las pruebas del 17 de febrero de 2023, los autores en China continental y usando la red de China también pueden obtener respuestas de ChatGPT muy fluidamente, sin restricciones por ahora. Mientras podamos obtener la clave API de OpenAI, la llamada se completará sin problemas.

### P2: ¿Por qué estoy obteniendo errores de Time Out devueltos?

>R: Esto puede ser porque ChatGPT espera demasiado tiempo para responder a un mensaje, lo que puede causar que el programa piense erróneamente que no está respondiendo.

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
