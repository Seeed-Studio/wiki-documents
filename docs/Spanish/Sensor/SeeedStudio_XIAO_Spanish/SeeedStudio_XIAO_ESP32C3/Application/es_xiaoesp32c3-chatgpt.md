---
description: XIAO ESP32C3-Chatgpt
title: XIAO ESP32C3-Chatgpt
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/xiaoesp32c3-chatgpt
last_update:
  date: 02/05/2025
  author: Guillermo
---
# Aprende a usar WiFiClient y HTTPClient en XIAO ESP32C3 - XIAO ESP32C3 y ChatGPT en acción.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPT es un nuevo modelo de chatbot, una herramienta de procesamiento de lenguaje natural impulsada por tecnología de inteligencia artificial, lanzada por OpenAI, un laboratorio de investigación en inteligencia artificial, el 30 de noviembre de 2022.

Es capaz de llevar a cabo conversaciones aprendiendo y comprendiendo el lenguaje humano, y también puede interactuar según el contexto de la conversación, realmente charlando y comunicándose como un ser humano, e incluso realizando tareas como escribir correos electrónicos, guiones de videos, redacción, traducción y programación.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

En los sistemas embebidos, ChatGPT puede ser una excelente ayuda para asistirte en la escritura de programas simples, o incluso para revisar y corregir errores que aparezcan en el programa.

Lo emocionante es que OpenAI proporciona oficialmente interfaces para llamar a los modelos GPT-3, lo que nos permite invocar estas interfaces e implementar este gran modelo en nuestros propios sistemas embebidos mediante varios métodos.

La XIAO ESP32C3 de Seeed Studio es una placa de desarrollo IoT mini basada en el chip dual WiFi/Bluetooth de Espressif ESP32-C3. Tiene un excelente rendimiento en radiofrecuencia, soportando WiFi IEEE 802.11 b/g/n y los protocolos Bluetooth 5 (LE). Puede soportar perfectamente los servicios de Cliente WiFi y Servidor WiFi proporcionados por el ESP32 de manera oficial. Por supuesto, también es completamente compatible con Arduino.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>


Así que en este tutorial, guiaremos a los usuarios para aprender y usar las bibliotecas WiFiClient y HTTPClient de XIAO ESP32C3, cómo conectarse a la red, cómo publicar páginas web y los conceptos básicos de HTTP GET y POST. El objetivo es llamar a OpenAI ChatGPT y crear tu propio sitio web de preguntas y respuestas.

## Empezando

En este tutorial, usaremos un XIAO ESP32C3 para configurar nuestra propia página de preguntas y respuestas de ChatGPT. En esta página, podrás ingresar tu pregunta y el XIAO ESP32C3 registrará tu pregunta y utilizará el método de llamada a la API proporcionado por OpenAI para enviar un comando de solicitud utilizando HTTP Client y obtener la respuesta de ChatGPT, imprimiéndola en el puerto serial.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

Las tareas de este tutorial se pueden dividir en los siguientes cuatro pasos principales.

1. [Configurar el XIAO ESP32C3 para conectarse a la red](#configurar-el-xiao-esp32c3-para-conectarse-a-la-red): En este paso, aprenderemos el proceso básico de configuración de WiFi utilizando el XIAO ESP32C3 y las operaciones básicas del XIAO ESP32C3, como la configuración de red, la conexión a servicios de red y la obtención de la dirección IP.

2. [Crear la página web embebida](#crear-la-página-web-emebida): En este paso, nos centraremos principalmente en la biblioteca WiFi Client. Usando las funciones GET y POST de esta biblioteca, podemos escribir nuestra propia página web de preguntas y respuestas utilizando HTML y desplegarla sobre el XIAO ESP32C3.

3. [Enviar preguntas a través de la página web incorporada](#enviar-preguntas-a-través-de-la-página-web-incorporada): En este paso, aprenderemos principalmente a usar el método POST en el HTTP Client para enviar las preguntas que planteemos, según el estándar de la API de OpenAI. Nos centraremos en el proceso de cómo recopilar y almacenar las preguntas desde la página web.

4. [Obtener respuestas de ChatGPT](#obtener-respuestas-de-chatgpt): En este paso, aprenderemos a usar el método POST en el HTTP Client y a extraer las respuestas a las preguntas que necesitamos desde los mensajes devueltos. El último paso es ordenar la estructura del código e integrar todo.

### Materiales Requeridos

<table align="center">
 <tr>
     <th>Material</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
 </tr>
 <tr>
     <td align="center"><a href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong>Consigue uno ahora</strong></a></td>
 </tr>
</table>

### Preparación Preliminar

Todos los procedimientos y pasos en este tutorial se han completado utilizando el XIAO ESP32C3. En la fase de preparación, primero necesitamos completar la configuración del entorno para usar el XIAO ESP32C3.

**Paso 1.** Conecta el XIAO ESP32C3 a tu computadora a través de un cable USB Tipo-C.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**Paso 2.** Descarga e instala la versión más reciente del IDE de Arduino según tu sistema operativo.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**Paso 3.** Inicia la aplicación de Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **Paso 4.** Agrega el paquete de la placa ESP32 a tu Arduino IDE

Ve a **Archivo > Preferencias** y llena el campo **"URLs adicionales para el gestor de placas"** con la siguiente URL:
*<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json>*

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

Ve a **Herramientas > Placa > Gestor de placas...**, escribe la palabra clave "**esp32**" en el cuadro de búsqueda, selecciona la versión más reciente de **esp32** e instálala.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **Paso 5.** Selecciona tu placa y puerto

Ve a **Herramientas > Placa > ESP32 Arduino** y selecciona "**XIAO_ESP32C3**". La lista de placas es un poco larga, por lo que necesitarás desplazarte hacia abajo para encontrarla.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

Ve a **Herramientas > Puerto** y selecciona el nombre del puerto serial del XIAO ESP32C3 conectado. Lo más probable es que sea COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos seriales de hardware).

## Configurar el XIAO ESP32C3 para conectarse a la red

El uso de WiFi se ha descrito en detalle en el [tutorial de XIAO ESP32C3 sobre el uso de WiFi](https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network).

Cuando el ESP32 está configurado como una estación Wi-Fi, puede conectarse a otras redes (como tu router). En este escenario, el router asigna una dirección IP única a tu placa ESP.

Lo primero que debes hacer para utilizar las funcionalidades Wi-Fi del ESP32 es incluir la librería WiFi.h en tu código, de la siguiente manera:

```c
#include <WiFi.h>
```

Para conectar el ESP32 a una red Wi-Fi específica, debes conocer su SSID y contraseña. Además, esa red debe estar dentro del rango de Wi-Fi del ESP32.

Primero, configura el modo Wi-Fi. Si el ESP32 se conectará a otra red (punto de acceso/hotspot), debe estar en modo estación.

```c
WiFi.mode(WIFI_STA);
```

Luego, usa `WiFi.begin()` para conectarte a una red. Debes pasar como argumentos el SSID de la red y su contraseña.

Conectarse a una red Wi-Fi puede llevar un tiempo, por lo que generalmente agregamos un bucle `while` que sigue verificando si la conexión ya se ha establecido utilizando `WiFi.status()`. Cuando la conexión se establece correctamente, devuelve `WL_CONNECTED`.

Cuando el ESP32 está configurado como estación Wi-Fi, puede conectarse a otras redes (como tu router). En este escenario, el router asigna una dirección IP única a tu placa ESP32. Para obtener la dirección IP de tu placa, necesitas llamar a `WiFi.localIP()` después de establecer la conexión con tu red.

```c
void WiFiConnect(void){
    WiFi.begin(ssid, password);
    Serial.print("Conectando a ");
    Serial.println(ssid);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connectado!");
    Serial.print("Dirección IP: ");
    Serial.println(WiFi.localIP());
}
```

Las variables `ssid` y `password` contienen el SSID y la contraseña de la red a la que deseas conectarte.

```c
// Remplaza con tus Credenciales de Red
const char* ssid = "REMPLACE_CON_TU_SSID";
const char* password = "REMPLAZA_CON_TU_CONTRASEÑA";
```

Este es un programa muy simple para la conexión WiFi. Sube el programa al XIAO ESP32C3, luego abre el asistente serial y configura la velocidad de baudios a 115200. Si la conexión es exitosa, verás la dirección IP del XIAO impresa en la consola.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

Si estás interesado en leer más sobre las aplicaciones y funciones del ESP32C3 en WiFi, te recomendamos leer <a href="https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/">Funciones útiles de la librería Wi-Fi para ESP32</a>.

## Crear la página web embebida

El ESP32 integra muchas funciones muy útiles de WiFiClient en la librería WiFi, lo que nos permite diseñar y desarrollar páginas web embebidas sin agregar bibliotecas adicionales.

Crea un nuevo objeto WiFiServer para poder usar este objeto y controlar el servidor IoT establecido en el XIAO ESP32C3.

```c
WiFiServer server(80);
WiFiClient client1;
```

En el paso anterior, logramos que el XIAO ESP32C3 se conectara a WiFi. Después de que la conexión WiFi sea exitosa, podrás obtener la dirección IP actual de XIAO desde el monitor serial. En este punto, XIAO ya ha configurado correctamente el servidor web. Puedes acceder a este servidor web a través de la dirección IP de XIAO.

Supongamos que la dirección IP de tu XIAO ESP32C3 es `192.168.7.152`. Entonces, puedes ingresar esta dirección IP en tu navegador.

Al ingresar esta dirección IP, es posible que solo veas una página en blanco. Esto se debe a que aún no hemos publicado el contenido de nuestra página para esa dirección.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

Ahora, creemos un arreglo para almacenar el contenido de la página que queremos diseñar, que es el código HTML, en C.

```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // La conexión se cerrará después de completar la respuesta
// "Refresh: 1\r\n"         // actualiza la página automáticamente cada n segundos
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

Este código nos da el efecto de la página que se muestra en la figura a continuación.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::tip
La sintaxis de HTML para páginas web está fuera del alcance de este tutorial. Puedes aprender a usar HTML por tu cuenta o, alternativamente, podemos utilizar herramientas generadoras existentes para hacer el trabajo de generación de código. Recomendamos utilizar [HTML Generator](https://webcode.tools/generators/html).

Es importante notar que en los programas en C, "\\" y """ son caracteres especiales, y si deseas mantener la funcionalidad de estos caracteres especiales en tu programa, necesitas agregar una barra invertida delante de ellos.
:::

Client1 se refiere al cliente de socket después de que el servidor web se ha establecido. El siguiente código muestra el flujo de procesamiento del servidor web.

```c
client1 = server.available();
if (client1){
    Serial.println("Nuevo cliente.");           // imprimir un mensaje en el puerto serial
    // una solicitud HTTP termina con una línea en blanco
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // Verificar si el cliente está conectado
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  // Enviar el cuerpo de la respuesta al cliente
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
                    // cerrar la conexión:
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // estás comenzando una nueva línea
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // has recibido un carácter en la línea actual
                currentLineIsBlank = false;
            }
        }
    }
}
```

En el programa de ejemplo anterior, necesitamos usar `server.begin()` para iniciar el servidor IoT. La instrucción debe colocarse en la función `setup`.

```c
void setup()
{
    Serial.begin(115200);
 
    // Configurar WiFi en modo estación y desconectar de un AP si estaba conectado previamente
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("¡Configuración de WiFi lista!");
    WiFiConnect();

    // Iniciar el servidor TCP
    server.begin();
}
```

Una vez que el programa anterior se ejecute y se ingrese la dirección IP del XIAO ESP32C3 en el navegador (siempre que tu host también esté en la misma red LAN que el XIAO ESP32C3), entonces comenzará a ejecutarse el paso GET de WiFiClient. En este punto, con la ayuda del método client.print, se enviará el código HTML de la página.

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

Y, diseñamos el cuadro de entrada para que el usuario ingrese la pregunta en la página. La página web obtendrá el estado del botón y almacenará la pregunta ingresada en la variable de tipo string `chatgpt_Q` después de que el usuario ingrese el contenido y haga clic en el botón **Submit**.

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// Cerrar la conexión:
delay(10);
client1.stop();      
```

El efecto de ejecución se muestra a continuación.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## Enviar preguntas a través de la página web integrada

En la página del paso anterior, hay un cuadro de entrada. Este cuadro de entrada es donde necesitamos que el usuario ingrese la pregunta que desea hacer. Lo único que necesitamos hacer es obtener esta pregunta y enviarla a través de la solicitud API proporcionada por OpenAI.

**Paso 1**. Regístrate para obtener una cuenta en OpenAI.

Puedes ir a la dirección de registro de OpenAI haciendo clic [aquí](https://beta.openai.com/signup). Si ya te has registrado anteriormente, puedes omitir este paso.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**Paso 2**. Obtener la API de OpenAI.

Inicia sesión en el [sitio web de OpenAI](https://platform.openai.com/overview), haz clic en tu avatar de cuenta en la esquina superior derecha y luego selecciona **Ver claves de API** o **View API keys**.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

En la nueva página emergente, selecciona **+Crear nueva clave secreta** o **+Create new secret key**, luego copia tu clave y guárdala.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

Mientras tanto, podemos crear variables de tipo cadena en nuestro programa y copiar esta clave aquí.

```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::tip
A partir del 15 de febrero de 2023, OpenAI está ofreciendo **$18** en créditos gratuitos a cada nuevo usuario. Las tarifas detalladas se pueden encontrar en la [documentación de OpenAI](https://openai.com/api/pricing/).
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**Paso 3**. Escribe el programa según las solicitudes HTTP de OpenAI.

OpenAI proporciona instrucciones detalladas sobre el [uso de la API](https://platform.openai.com/docs/api-reference/making-requests) para que los usuarios puedan usar su propia clave de API para llamar a ChatGPT.

De acuerdo con la documentación de ChatGPT, el formato que necesitamos para enviar la solicitud es el siguiente:

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "gpt3.5-turbo-instruct", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

El Protocolo de Transferencia de Hipertexto (HTTP) funciona como un protocolo de solicitud-respuesta entre un cliente y un servidor.  
**GET** se usa para solicitar datos de un recurso especificado. Se usa comúnmente para obtener valores de APIs.  
**POST** se usa para enviar datos a un servidor para crear o actualizar un recurso.  
El ESP32 puede realizar solicitudes HTTP POST usando tres tipos diferentes de cuerpo en la solicitud: codificación URL, objeto JSON o texto plano. Estos son los métodos más comunes y deberían integrarse con la mayoría de las APIs o servicios web.

La información anterior es muy importante y proporciona la base teórica para escribir programas HTTP POST. Al principio, comenzamos importando la biblioteca HTTPClient.

```c
#include <HTTPClient.h>
```

También necesitas escribir el nombre de dominio de OpenAI para que el ESP publique la pregunta a ChatGPT. Y no olvides la clave API de OpenAI.

```c
HTTPClient https;

const char* chatgpt_token = "YOUR_API_KEY";
char chatgpt_server[] = "https://api.openai.com/v1/completions";
```

Necesitamos hacer una solicitud HTTP POST utilizando un objeto JSON.

```c
if (https.begin(chatgpt_server)) {  // HTTPS
    https.addHeader("Content-Type", "application/json"); 
    String token_key = String("Bearer ") + chatgpt_token;
    https.addHeader("Authorization", token_key);
    String payload = String("{\"model\": \"gpt-3.5-turbo-instruct\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); //En lugar de usar TEXT como Payload, se puede usar JSON como Payload.
    httpCode = https.POST(payload);   // iniciar la conexión y enviar el encabezado HTTP
    payload = "";
}
else {
    Serial.println("[HTTPS] No se pudo conectar");
    delay(1000);
}
```

En el programa, enviamos el `payload` al servidor mediante el método `POST()`. `chatgpt_Q` es el contenido de la pregunta que queremos enviar a ChatGPT, el cual estará disponible en la página Obtener Pregunta.

Si estás interesado en más funciones del HTTPClient del ESP32C3, te recomendamos leer [ESP32 HTTP GET y HTTP POST con Arduino IDE](https://randomnerdtutorials.com/esp32-http-get-post-arduino/).

## Obtener respuestas de ChatGPT

El siguiente paso es el último paso de todo el tutorial: cómo obtener la respuesta de ChatGPT y registrarla.

Continuemos leyendo la [documentación de la API](https://platform.openai.com/docs/api-reference/making-requests) proporcionada por OpenAI para entender cómo es la estructura del contenido del mensaje devuelto por ChatGPT. Esto nos permitirá escribir programas para analizar el contenido que necesitamos.

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

Así que ahora podemos estar seguros de que la "Respuesta" que necesitamos debe comenzar con **\n\n** y terminar con **,**. Luego, en el programa, podemos recuperar la posición donde el texto comienza y termina utilizando el método `indexOf()`, y almacenar el contenido de la respuesta devuelta.

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

En resumen, podemos utilizar el método switch con el estado actual del programa para determinar qué paso del programa debemos ejecutar.

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

En este punto, la lógica de todo el programa está estructurada. El código completo del programa se puede obtener haciendo clic en la imagen de abajo. Por favor, no te apresures a cargar el programa, necesitas cambiar el **ssid, la contraseña y el chatgpt_token** del programa por los tuyos.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

¡Entonces, siéntete libre de usarlo!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## ¿Qué sigue?

En este tutorial, proporcionamos el método básico para llamar a la interfaz de OpenAI usando ChatGPT en una placa de desarrollo embebida como el Arduino - XIAO ESP32C3. ¡Ahora puedes dejar volar tu creatividad!

Por ejemplo, ¿podrías considerar agregar una pantalla o un teclado para convertirlo en un dispositivo autónomo que funcione solo para ti? Ven a ver la creatividad de Gavin, ¡él hizo un dispositivo de vigilancia particularmente interesante! También le damos un agradecimiento especial por proporcionar los pasos e ideas necesarios para este tutorial.

- [Gavin - ChatGPT Recorder & Monitor](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

O da un paso más y agrega un módulo de reconocimiento de voz para despedirte del teclado y el ratón de ahora en adelante y crear tu propio asistente de voz, ¡etc.! En resumen, nos encantaría ver cómo compartes tu trabajo con un gran producto como el XIAO ESP32C3.

## Solución de problemas

### P1: ¿Hay alguna limitación geográfica o de red para obtener la respuesta al llamar a la API de OpenAI usando XIAO ESP32C3?

> R: Hasta las pruebas realizadas el 17 de febrero de 2023, los autores en China continental y utilizando la red de China también pueden obtener respuestas de ChatGPT de manera muy fluida, sin restricciones por el momento. Mientras podamos obtener la clave de la API de OpenAI, la llamada se completará sin problemas.

### P2: ¿Por qué recibo errores de Time Out?

> R: Esto puede deberse a que ChatGPT tarda demasiado en responder a un mensaje, lo que puede hacer que el programa piense erróneamente que no está respondiendo.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
