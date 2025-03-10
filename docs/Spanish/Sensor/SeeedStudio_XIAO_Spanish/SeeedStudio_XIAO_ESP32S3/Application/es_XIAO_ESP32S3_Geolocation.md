---
description: Making an ultra-compact global positioning tracker with the XIAO ESP32S3.
title: Rastreador de Geolocalización con XIAO ESP32S3 (Sense)
keywords:
- location
- tracker
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 02/10/2025
  author: Guillermo
---

# Rastreador de Geolocalización con XIAO ESP32S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

Los rastreadores caseros en el mercado suelen enfrentar varios problemas. Por ejemplo, la precisión del rastreo es baja, son voluminosos y tienen altos requisitos para el entorno en el que se utilizan. XIAO ha atraído a numerosos creadores gracias a su excelente control de volumen. Entonces, ¿podemos hacer un rastreador que se pueda ubicar globalmente utilizando solo XIAO?

En este tutorial exploraremos dos de las formas más populares de desplegar XIAO (sin el módulo GPS) para crear un rastreador sorprendente.

## Resumen

Este artículo presentará dos tipos de posicionamiento, uno es obtener la información de ubicación desde la dirección IP de la red a la que está conectada XIAO, para lograr el posicionamiento. El otro es utilizando el sistema de posicionamiento Wi-Fi (comúnmente conocido como WiPS o WFPS).

- **Método 1: Ubicación por dirección IP**

El principio para ubicar una dirección IP implica utilizar una base de datos que mapea las direcciones IP a ubicaciones físicas. Este proceso es conocido comúnmente como geolocalización.

La búsqueda de la dirección IP implica utilizar una consulta inversa de DNS para obtener el nombre de dominio asociado con la dirección IP. El nombre de dominio puede luego ser utilizado para identificar la ubicación geográfica del servidor que aloja el sitio web o servicio.

El mapeo de direcciones IP implica utilizar una base de datos que vincula direcciones IP con ubicaciones físicas. La base de datos puede contener información como la ciudad, región y país asociados con cada dirección IP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

La precisión de la geolocalización por dirección IP puede variar dependiendo del método utilizado y la calidad de los datos disponibles. En general, la geolocalización por IP es más precisa para dispositivos fijos, como computadoras de escritorio y servidores, que generalmente están asociados con una ubicación física fija. Los dispositivos móviles, como teléfonos inteligentes y tabletas, pueden ser más difíciles de localizar con precisión, ya que pueden moverse y conectarse a diferentes redes Wi-Fi.

- **Método 2: Ubicación por [WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system)**

El sistema de posicionamiento Wi-Fi es un sistema de geolocalización que utiliza las características de los puntos de acceso Wi-Fi cercanos y otros puntos de acceso inalámbricos para descubrir la ubicación de un dispositivo.

Se utiliza cuando la navegación satelital, como GPS, es insuficiente debido a diversas causas, incluyendo el efecto multipath y la obstrucción de señales en interiores, o cuando adquirir una fijación satelital tomaría demasiado tiempo. Estos sistemas incluyen GPS asistido, servicios de posicionamiento urbano a través de bases de datos de puntos de acceso, y sistemas de posicionamiento en interiores. El posicionamiento Wi-Fi aprovecha el rápido crecimiento de los puntos de acceso inalámbricos en áreas urbanas a principios del siglo XXI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

La técnica de localización más común y extendida utilizada para el posicionamiento con puntos de acceso inalámbricos se basa en medir la intensidad de la señal recibida (indicador de la intensidad de la señal recibida o RSSI) y el método de "fingerprinting". Los parámetros típicos útiles para geolocalizar el punto de acceso inalámbrico incluyen su SSID y dirección MAC. La precisión depende del número de puntos de acceso cercanos cuyas posiciones han sido ingresadas en la base de datos. La base de datos de puntos de acceso Wi-Fi se llena correlacionando los datos de ubicación GPS de los dispositivos móviles con las direcciones MAC de los puntos de acceso Wi-Fi. Las posibles fluctuaciones de la señal que pueden ocurrir pueden aumentar los errores y las imprecisiones en el camino del usuario. Para minimizar las fluctuaciones en la señal recibida, existen ciertas técnicas que se pueden aplicar para filtrar el ruido.

Esta es la base teórica para la capacidad de XIAO de obtener una ubicación sin la ayuda de un módulo GPS. También compararemos la mejor manera de obtener el posicionamiento con la ayuda de los dos métodos anteriores, combinados con el uso de la Pantalla Redonda, que muestra las coordenadas como un mapa en la pantalla. A continuación se presenta el índice y un resumen del artículo.

- [Conectar a la red y obtener la IP pública con el XIAO ESP32S3](#Conectar-a-la-red-y-obtener-la-IP-pública-con-el-XIAO-ESP32S3)
- [Obtener las coordenadas de ubicación con la plataforma ipstack](#Obtener-las-coordenadas-de-ubicación-conla-plataforma-ipstack)
- [Descargar imágenes estáticas de Google Maps a través del servicio HTTPS](#Descargar-imágenes-estáticas-de-Google-Maps-a-través-del-servicio-HTTPS)
- [Mostrar el mapa de ubicación en la pantalla redonda](#Mostrar-el-mapa-de-ubicación-en-la-pantalla-redonda)
- [Posicionamiento utilizando el método WFPS](#Posicionamiento-utilizando-el-método-WFPS)
- [Actualizaciones en vivo sobre la última ubicación](#Actualizaciones-en-vivo-sobre-la-última-ubicación)

## Comenzando

Para completar con éxito este proyecto, es posible que necesites utilizar el siguiente hardware. Cualquiera de los XIAO ESP32 es compatible.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display para XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Además de esto, también puedes preparar una pequeña batería de litio, una tarjeta microSD y una carcasa. Para completar la forma del rastreador.

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## Conectar a la red y obtener la IP pública con el XIAO ESP32S3

:::tip
Si no estás familiarizado con las capacidades de red del XIAO ESP32S3, puedes leer sobre [el uso de WiFi con Seeed Studio XIAO ESP32S3 (Sense)](https://wiki.seeedstudio.com/xiao_esp32s3_wifi_usage_spanish/).
:::

En el tutorial sobre el uso básico del XIAO ESP32S3, hemos dominado el uso del XIAO ESP32S3 para conectarnos a la red.

```cpp
#include <WiFi.h>

// Para la red
const char* ssid = "<YOUR_WIFI_SSID_HERE>";
const char* password = "<YOUR_WIFI_PW_HERE>";

void setup() {
  Serial.begin(115200);

  Serial.print("Intentando conectar a ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
  }
  Serial.println("¡Wi-Fi Conectado!");
}

void loop() {
}
```

La esencia principal de usar direcciones IP para buscar ubicaciones es obtener la dirección IP de XIAO. Puede parecer natural pensar que necesitamos usar la función `WiFi.localIP()` para buscarla.

Sin embargo, en realidad, el router asignará a XIAO una dirección IP interna, algo como 192.168.xxx.xxx, que no se puede consultar para obtener información de ubicación. Lo que necesitamos es una IP pública. Así que debemos usar lo siguiente.

```cpp
// Obtener dirección IP local
IPAddress publicIP;
if (WiFi.hostByName("ip-api.com", publicIP)) {
    Serial.print("Dirección IP pública: ");
    Serial.println(publicIP);
} else {
    Serial.println("No se pudo obtener una dirección IP pública");
    return;
}
```

Luego podemos obtener el siguiente efecto, que es el primer paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## Obtener coordenadas de ubicación con la plataforma ipstack

El uso de direcciones IP para la ubicación generalmente requiere información de alguna biblioteca de servidores públicos. Podemos obtener esta información del servidor con la ayuda de la interfaz API de alguna plataforma. Por ejemplo, en este tutorial, utilizaremos la plataforma [ipstack](https://ipstack.com).

ipstack ofrece una poderosa API de IP a geolocalización en tiempo real, capaz de buscar datos de ubicación precisos y evaluar amenazas de seguridad originadas por direcciones IP riesgosas. Los resultados se entregan en milisegundos en formato JSON o XML.

ipstack ofrece un servicio de búsqueda gratuito/de pago, la [lista de precios](https://ipstack.com/product) se puede encontrar en la imagen a continuación. En este ejemplo, solo estamos mostrando ejemplos y usar el **servicio gratuito (100 consultas/mes)** es suficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### Paso 1. Obtener clave de acceso API de ipstack

Si es la primera vez que usas ipstack, necesitarás [registrarte para obtener una nueva cuenta](https://ipstack.com/signup/free).

Una vez que te hayas registrado e iniciado sesión, podrás ver tu clave API. Por favor, cópiala y guárdala en un lugar seguro, ya que la utilizaremos más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### Paso 2. Aprende cómo usar la API de ipstack

ipstack proporciona una [documentación detallada](https://ipstack.com/documentation) que explica cómo utilizar la API de ipstack.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

Muy sencillo, ¿verdad? Solo envía la **dirección del servidor + dirección IP + clave API**.

A continuación, necesitamos saber qué tipo de mensaje JSON nos devolverá ipstack y extraer la información que necesitamos, como ciudad, país, latitud y longitud.

```json
{
  "ip": "134.201.250.155",
  "hostname": "134.201.250.155",
  "type": "ipv4",
  "continent_code": "NA",
  "continent_name": "North America",
  "country_code": "US",
  "country_name": "United States",
  "region_code": "CA",
  "region_name": "California",
  "city": "Los Angeles",
  "zip": "90013",
  "latitude": 34.0453,
  "longitude": -118.2413,
  "location": {
    "geoname_id": 5368361,
    "capital": "Washington D.C.",
    "languages": [
        {
          "code": "en",
...
```

Luego, solo necesitamos extraer la información que necesitamos con la ayuda de la biblioteca ArduinoJSON.

### Paso 3. Obtener las coordenadas de la dirección IP a través del servicio HTTP

Para resumir, comenzamos instalando la biblioteca **ArduinoJSON**. Puedes buscarla y descargarla directamente desde el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

Luego, escribimos la función `getLocation()`, que utilizamos para obtener la información del país, ciudad y las coordenadas de latitud y longitud que devuelve ipstack, y mostrarla en la salida.

```cpp
// Para ipstack
const char* IPStack_key = "<TU_CLAVE_API_AQUÍ>";
String ip_address;

// Obtener la posición aproximada de las coordenadas basada en la dirección IP actual de XIAO.
bool getLocation(){
  // Hacer la solicitud HTTP a la API de IPStack
  HTTPClient http;
  String url = "http://api.ipstack.com/" + String(ip_address) + "?access_key=" + String(IPStack_key);
  Serial.println("Solicitando URL: " + url);
  http.begin(url);
  int httpCode = http.GET();

  // Parsear la respuesta JSON
  if (httpCode == 200) {
    String payload = http.getString();
    Serial.println("Respuesta del payload: " + payload);
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    String country_name = doc["country_name"].as<String>();
    String region_name = doc["region_name"].as<String>();
    String city = doc["city"].as<String>();
    latitude = doc["latitude"].as<double>();
    longitude = doc["longitude"].as<double>();
    Serial.println("País: " + country_name);
    Serial.println("Región: " + region_name);
    Serial.println("Ciudad: " + city);
    Serial.println("Latitud: " + String(latitude));
    Serial.println("Longitud: " + String(longitude));
    http.end(); // Cerrar la conexión
    return true;
  } else {
    Serial.println("Código de error HTTP: " + String(httpCode));
    http.end(); // Cerrar la conexión
    return false;
  }
}
```

En el programa anterior, por favor reemplaza la clave API de ipstack con la tuya propia.

A continuación, podemos observar qué tan precisa es la ubicación por dirección IP. Los [puntos marcados en rojo](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu) en el mapa de abajo son la ubicación exacta de donde me encuentro por dirección IP. Y el otro extremo de la línea roja es la ubicación real de donde me encuentro. Hay una diferencia de 2.4 km entre ellas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

Se puede ver que el error en este tipo de posicionamiento está en el rango de kilómetros, lo cual está lejos de lo que esperaríamos de un rastreador.

## Descargar imágenes estáticas de Google Maps a través del servicio HTTPS

Las coordenadas de latitud y longitud no son intuitivas para hablar de ellas visualmente. Incluso si contienen información sobre países y ciudades. Así que nos preguntamos si sería posible marcar estas coordenadas de latitud y longitud en un mapa y mostrarlas en la pantalla. Luego encontramos el servicio de mapas de Google Cloud.

Antes de comenzar, creo que es importante que entiendas la [tarifa del servicio de Google Maps](https://mapsplatform.google.com/pricing/) para decidir si deseas proceder.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

Si eres un usuario registrado por primera vez, tendrás un **crédito gratuito de $300**. Aquí estamos utilizando principalmente la API de Mapas Estáticos, que cuesta **$2.00 por cada 1000** llamadas.

### Paso 4. [Configura tu proyecto de Google Cloud](https://developers.google.com/maps/documentation/elevation/cloud-setup) y completa las instrucciones de configuración que siguen.

### Paso 5. Habilita la API de Google Maps

Necesitas una clave de API de Google para validar con la API de Google. Dirígete a [Google Developers Console](https://console.developers.google.com/apis) para habilitar la API de Geolocalización. Sin esta clave de API recibirás un error como respuesta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

Una vez que tengas la clave de la API, guárdala en un lugar seguro, la utilizaremos en los siguientes pasos de programación.

:::note
Si tienes preocupaciones sobre el entorno en el que estás utilizando la API, puedes activar restricciones en las llamadas a la API para evitar cargos adicionales por uso indebido. Activar ciertas restricciones puede requerir cambios en tu programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## Mostrar el mapa de la ubicación en la pantalla redonda

:::tip
Si estás utilizando la pantalla redonda para XIAO por primera vez, es posible que necesites consultar el [Wiki aquí](https://wiki.seeedstudio.com/get_start_round_display/) para configurar tu entorno de Arduino para la pantalla redonda.
:::

### Paso 6. Aprende cómo llamar a la API de Mapas Estáticos de Google Cloud

Haz clic [aquí](https://developers.google.com/maps/documentation/maps-static/overview) para leer la documentación de la API de Mapas Estáticos de Google Cloud.

La documentación proporciona un código de ejemplo para usar la API de la siguiente manera:

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Un URL de Maps Static API debe seguir la siguiente forma:

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

La API de Mapas Estáticos define las imágenes de los mapas utilizando los siguientes parámetros de URL:

- `center` (requerido si no hay marcadores) define el centro del mapa, equidistante de todos los bordes del mapa. Este parámetro toma una ubicación como un par de coordenadas {latitud,longitud} separado por coma (por ejemplo, "40.714728,-73.998672") o una dirección en forma de cadena (por ejemplo, "city hall, new york, ny") que identifica una ubicación única en la superficie de la Tierra.
- `zoom` (requerido si no hay marcadores) define el nivel de zoom del mapa, lo que determina el nivel de magnificación del mapa. Este parámetro toma un valor numérico correspondiente al nivel de zoom de la región deseada.
- `size` (requerido) define las dimensiones rectangulares de la imagen del mapa. Este parámetro toma una cadena en el formato `{valor_horizontal}x{valor_vertical}`.
- `maptype` (opcional) define el tipo de mapa a construir. Hay varios valores posibles para maptype, incluidos roadmap (mapa estándar), satellite (satélite), hybrid (híbrido) y terrain (terreno).
- `markers` (opcional) define uno o más marcadores para agregar a la imagen en ubicaciones específicas. Este parámetro toma una única definición de marcador con parámetros separados por el carácter pipe (|). Se pueden colocar varios marcadores dentro del mismo parámetro markers siempre que presenten el mismo estilo; puedes agregar marcadores adicionales con estilos diferentes añadiendo más parámetros de marcadores. Ten en cuenta que si proporcionas marcadores para un mapa, no es necesario especificar los parámetros (normalmente requeridos) center y zoom.
- `key` (requerido) te permite monitorear el uso de la API de tu aplicación en Google Cloud Console y garantiza que Google pueda ponerse en contacto contigo sobre tu aplicación si es necesario.

:::tip
Solo se muestran los parámetros más básicos arriba. Si tienes la necesidad de personalizar este mapa estático, puedes hacer clic **[aquí](https://developers.google.com/maps/documentation/maps-static/start)** para leer la lista completa de parámetros.
:::

En resumen, podemos unir todo para formar un string completo que se enviará.

```cpp
// Para mapas estáticos de Google
const char * host = "maps.googleapis.com";
const String defaultPath = "/maps/api/staticmap?center=";
const String Googlemaps_key = "<TU_API_KEY_AQUI>";
int zoomLevel = 14;
double latitude;
double longitude;

// Unir para formar comandos enviados a Google Maps
String getPath(){
  String newPath = defaultPath;
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&zoom=";
  newPath += String(zoomLevel);
  newPath += "&size=240x240";
  newPath += "&maptype=roadmap";
  newPath += "&markers=size:tiny%7Ccolor:red%7C";
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&format=jpg-baseline";
  newPath += "&key=";
  newPath += Googlemaps_key;
  Serial.println(newPath);
  return newPath;
}
```

Por favor, reemplaza el código anterior con tu propia clave de API de Google Cloud Maps.

### Paso 7. La imagen devuelta se obtiene a través de HTTPS y se escribe en la tarjeta microSD

Necesitamos un medio de almacenamiento lo suficientemente grande como para contener las imágenes estáticas devueltas, para que puedan ser leídas en el programa que las mostrará en la pantalla. La pantalla redonda tiene soporte para tarjetas microSD.

```cpp
// Imágenes estáticas de coordenadas desde los Servicios de Google Cloud
bool getStaticMapImage(const char *host, const char *path, String fileName){
  int contentLength = 0;
  int httpCode;

  WiFiClientSecure client;

  client.setCACert(GlobalSignCA);
  client.connect(host, 443);

  Serial.printf("Intentando: %s:443...", host);
  
  if(!client.connected()){
    client.stop();
    Serial.printf("*** No se puede conectar. ***\n-------\n");
    return false;
  }

  Serial.println("¡Conexión HTTPS exitosa!");
  client.print("GET ");
  client.print(path);
  client.print(" HTTP/1.0\r\nHost: ");
  client.print(host);
  client.print("\r\nUser-Agent: ESP32S3\r\n");
  client.print("\r\n");

  while(client.connected()){
    String header = client.readStringUntil('\n');
    if(header.startsWith(F("HTTP/1."))){
      httpCode = header.substring(9, 12).toInt();
      if(httpCode != 200){
        client.stop();
        return false;
      }
    }
    if(header.startsWith(F("Content-Length: "))){
      contentLength = header.substring(15).toInt();
    }
    if(header == F("\r")){
      break;
    }
    
  }
  if(!(contentLength > 0)){
    client.stop();
    return false;
  }
  fs::File f = SD.open(fileName, "w");
  if(!f){
    Serial.println(F("FALLO AL ABRIR EL ARCHIVO"));
    client.stop();
    return false;
  }
  int remaining = contentLength;
  int received;
  uint8_t buff[512] = {0};
  while(client.available() && remaining > 0){
    received = client.readBytes(buff, ((remaining > sizeof(buff)) ? sizeof(buff) : remaining));
    f.write(buff, received);
    if(remaining > 0){
      remaining -= received;
    }
    yield();
  }
  f.close();
  client.stop();
  Serial.println("FIN DE LA DESCARGA");
  return (remaining == 0 ? true : false);
}
```

### Paso 8. Mostrar imágenes JPEG en el Round Display

En general, la biblioteca gráfica TFT compatible con el Round Display solo admite la visualización de imágenes en formato BMP. Si necesitamos mostrar imágenes en otros formatos, debemos utilizar algunas bibliotecas de terceros. Aquí usamos la biblioteca **[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)**.

Por favor, descarga esta biblioteca como un archivo zip y añádela a tu entorno de Arduino.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga la librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Reescribimos nuestro programa refiriéndonos al programa de ejemplo proporcionado por el repositorio:

```cpp
// Esta función será llamada durante la decodificación del archivo JPEG para
// renderizar cada bloque en el TFT. Si usas una biblioteca de TFT diferente,
// necesitarás adaptar esta función según corresponda.
bool tft_output(int16_t x, int16_t y, uint16_t w, uint16_t h, uint16_t* bitmap)
{
   // Detener la decodificación si la imagen se sale de la pantalla
  if (y >= tft.height()) return 0;

  // Esta función recortará automáticamente el bloque de imagen en los límites del TFT
  tft.pushImage(x, y, w, h, bitmap);

  // Devolver 1 para decodificar el siguiente bloque
  return 1;
}

void setup() {
  // Inicializar el TFT
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BLACK);
  tft.setSwapBytes(true); // Necesitamos intercambiar los bytes de color (endianness)

  // Inicializar la SD antes del TFT
  if (!SD.begin(SD_CS)) {
    Serial.println(F("¡Error al inicializar SD!"));
    return;
  }
  Serial.println("\r\nInicialización completa.");

  // La imagen JPEG puede ser escalada por un factor de 1, 2, 4 u 8
  TJpgDec.setJpgScale(1);

  // El decodificador debe recibir el nombre exacto de la función de renderizado de arriba
  TJpgDec.setCallback(tft_output);

  if(WiFi.status() == WL_CONNECTED){
    if(getLocation() && getStaticMapImage(host, getPath().c_str(), mapFile)){
      TJpgDec.drawSdJpg(0, 0, mapFile);
    }
  }
}
```

El programa completo para este proyecto se puede encontrar aquí

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el codigo</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Ejecutar el programa y verás esto en el monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

La pantalla también mostrará una imagen de la ubicación correspondiente a tu dirección IP.

## Posicionamiento usando el método WFPS

Como hemos comparado en los pasos anteriores, la precisión de la ubicación utilizando direcciones IP es realmente deficiente. Así que, a continuación, mejoraremos el procedimiento utilizando el método WFPS y veremos si hay algún cambio en la precisión.

Por supuesto, este algoritmo es difícil de implementar para nosotros y todavía dependemos de la [API de Geolocalización](https://developers.google.com/maps/documentation/geolocation/overview) en el servicio de Google Maps.

La API de Geolocalización es un servicio que acepta una solicitud HTTPS con las torres de telefonía móvil y los puntos de acceso WiFi que un cliente móvil puede detectar. Devuelve las coordenadas de latitud/longitud y un radio que indica la precisión del resultado para cada entrada válida.

En la comunidad, **[gmag11](https://github.com/gmag11)** y su equipo han escrito bibliotecas que pueden llamar a este servicio directamente. Podemos utilizarla directamente aquí.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Mientras tanto, necesitarás la **biblioteca QuickDebug** para los mensajes de depuración.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

A continuación, solo necesitamos modificar la función `getLocation()`.

```cpp
// Para geolocalización de Google
WifiLocation location (Googlemaps_key);

// Establecer la hora a través de NTP, como se requiere para la validación x.509
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("Esperando la sincronización de la hora NTP: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
    Serial.print ("\n");
    Serial.print ("Hora actual: ");
    Serial.print (asctime (&timeinfo));
}

// Obtener las coordenadas exactas de XIAO mediante el método de ubicación WiFi
void getLocation(){
  setClock();
  location_t loc = location.getGeoFromWiFi();

  Serial.println("Datos de solicitud de ubicación");
  Serial.println(location.getSurroundingWiFiJson()+"\n");
  Serial.println ("Ubicación: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
  latitude = loc.lat;
  longitude = loc.lon;
  Serial.println ("Precisión: " + String (loc.accuracy));
  Serial.println ("Resultado: " + location.wlStatusStr (location.getStatus ()));
}
```

Veamos cómo difieren las coordenadas obtenidas mediante WFPS de la posición real.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

¡¡La desviación en la posición ya está alrededor de 1 km!! ¡Este rendimiento es incluso mejor que el de algunos módulos GPS!

## Actualizaciones en vivo sobre la última ubicación

Entonces, para el paso final, vamos a finalizar este rastreador de posicionamiento global. Permítanle implementar una actualización automática del mapa.

:::tip
Por favor, estima el consumo de tarifa de tu servicio de Google Cloud al usar este programa, ¡de lo contrario, las llamadas frecuentes a la API pueden generar una facturación alta!
:::

```cpp
void loop() {
  // ¡Asegúrate de prestar atención al número de llamadas a la API! ¡Esto podría generar gastos adicionales!

  if(WiFi.status() == WL_CONNECTED){
    getLocation();
    if(latitude != last_latitude || longitude != last_longitude){  // La actualización de la imagen del mapa solo se realiza cuando la ubicación se actualiza
      last_latitude = latitude;
      last_longitude = longitude;
      if(getStaticMapImage(host, getPath().c_str(), mapFile)){
        TJpgDec.drawSdJpg(0, 0, mapFile);
      }
    }
  }
  delay(10000);
}
```

En el bucle principal, obtendremos la red circundante cada 10 segundos y actualizaremos las coordenadas de ubicación actuales. Si las coordenadas de ubicación devueltas son diferentes a las de la última vez, entonces se volverá a descargar el mapa y se actualizará en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

¡Con nuestra carcasa impresa en 3D, realmente parece un rastreador!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

Finalmente, el código completo del programa para obtener la ubicación mediante el método WFPS está disponible en el botón de abajo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## Recursos

- **[GITHUB]** [Código fuente](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)
- **[STP]** [Diseño de carcasa de XIAO ESP32S3 Sense (parte superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [Diseño de carcasa de XIAO ESP32S3 Sense (parte inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

## Solución de problemas

### P1: ¿Por qué no obtengo la dirección IP exacta al usar la función `WiFi.hostByName()`?

Al utilizar la función `WiFi.hostByName()` para consultar la dirección IP pública del enrutador, asegúrate de que tu enrutador pueda resolverse a la dirección IP correspondiente a través del resolutor DNS. Si tu enrutador utiliza servidores DNS proporcionados por tu ISP, podrías enfrentar fallos en la resolución DNS. En este caso, puedes intentar usar servidores DNS alternativos, como los servidores DNS públicos de Google 8.8.8.8 o 8.8.4.4.

Si aún no puedes consultar la dirección IP pública correcta, puede ser debido a problemas de conectividad de red u otros problemas de configuración de red. Puedes intentar los siguientes métodos para resolver el problema:

1. Intenta con servicios alternativos de consulta de IP pública: Si estás utilizando el servicio api.ipify.org para consultar la IP pública y aún no puedes obtener la IP correcta, puedes intentar utilizar otros servicios alternativos, como ip-api.com o whatismyip.com.

2. Verifica la configuración del enrutador: Revisa la configuración de tu enrutador para asegurarte de que las funciones NAT y de reenvío de puertos estén configuradas correctamente y no bloqueen el acceso a redes externas. También puedes intentar habilitar la funcionalidad UPnP en el enrutador para configurar automáticamente el reenvío de puertos.

3. Reinicia el enrutador y el dispositivo ESP32S3: A veces, reiniciar el enrutador y el dispositivo ESP32S3 puede resolver problemas de conectividad de red y configuración.

Si esto aún no resuelve el problema, te recomendamos usar el segundo método o asignar un valor directamente a XIAO después de que el enrutador consulte la IP pública.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



