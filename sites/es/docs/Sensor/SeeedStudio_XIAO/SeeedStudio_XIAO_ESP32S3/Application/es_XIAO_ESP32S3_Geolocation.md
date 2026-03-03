---
description: Creando un rastreador de posicionamiento global ultra-compacto con el XIAO ESP32S3.
title: Rastreador de Geolocalización con XIAO ESP32S3 (Sense)
keywords:
- location
- tracker
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 06/14/2023
  author: Citric
---

# Rastreador de Geolocalización con XIAO ESP32S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

Los rastreadores caseros en el mercado a menudo enfrentan varios problemas. Por ejemplo, la precisión de rastreo es pobre, son voluminosos y tienen requisitos exigentes para el entorno en el que se usa el rastreador. XIAO ha atraído a numerosos creadores con su excelente control de volumen. Entonces, ¿podemos hacer un Rastreador que pueda posicionarse globalmente usando XIAO, y solo XIAO?

En este tutorial exploraremos dos de las formas más populares de implementar XIAO (sin el módulo GPS) para crear un rastreador sorprendente.

## Descripción General

Este artículo introducirá dos tipos de posicionamiento, uno es obtener información de ubicación desde la dirección IP de la red a la que XIAO está conectado, para lograr el posicionamiento. El otro es usando el sistema de posicionamiento Wi-Fi (comúnmente conocido como WiPS o WFPS).

- **Método 1: Localizar por dirección IP**

El principio de localizar una dirección IP involucra usar una base de datos que mapea direcciones IP a ubicaciones físicas. Este proceso es comúnmente conocido como geolocalización.

La búsqueda de dirección IP involucra usar una búsqueda DNS inversa para recuperar el nombre de dominio asociado con la dirección IP. El nombre de dominio puede entonces ser usado para identificar la ubicación geográfica del servidor que aloja el sitio web o servicio.

El mapeo de dirección IP involucra usar una base de datos que mapea direcciones IP a ubicaciones físicas. La base de datos puede contener información como la ciudad, región y país asociados con cada dirección IP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

La precisión de la geolocalización por dirección IP puede variar dependiendo del método usado y la calidad de los datos disponibles. En general, la geolocalización por dirección IP es más precisa para dispositivos fijos como computadoras de escritorio y servidores, que típicamente están asociados con una ubicación física fija. Los dispositivos móviles como smartphones y tablets pueden ser más difíciles de localizar con precisión, ya que pueden moverse y conectarse a diferentes redes Wi-Fi.

- **Método 2: Localizar por [WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system)**

El sistema de posicionamiento Wi-Fi es un sistema de geolocalización que usa las características de puntos de acceso Wi-Fi cercanos y otros puntos de acceso inalámbricos para descubrir dónde está ubicado un dispositivo.

Se usa donde la navegación satelital como GPS es inadecuada debido a varias causas incluyendo multitrayectoria y bloqueo de señal en interiores, o donde adquirir una posición satelital tomaría demasiado tiempo. Tales sistemas incluyen GPS asistido, servicios de posicionamiento urbano a través de bases de datos de puntos de acceso, y sistemas de posicionamiento interior. El posicionamiento Wi-Fi aprovecha el rápido crecimiento a principios del siglo XXI de puntos de acceso inalámbricos en áreas urbanas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

La técnica de localización más común y extendida usada para posicionamiento con puntos de acceso inalámbricos está basada en medir la intensidad de la señal recibida (indicación de intensidad de señal recibida o RSSI) y el método de "huella digital". Los parámetros típicos útiles para geolocalizar el punto de acceso inalámbrico incluyen su SSID y dirección MAC. La precisión depende del número de puntos de acceso cercanos cuyas posiciones han sido ingresadas en la base de datos. La base de datos de puntos de acceso Wi-Fi se llena correlacionando datos de ubicación GPS de dispositivos móviles con direcciones MAC de puntos de acceso Wi-Fi. Las posibles fluctuaciones de señal que pueden ocurrir pueden aumentar errores e imprecisiones en la trayectoria del usuario. Para minimizar fluctuaciones en la señal recibida, hay ciertas técnicas que pueden ser aplicadas para filtrar el ruido.

Esta es la base teórica para la capacidad de XIAO de obtener una posición sin la ayuda de un módulo GPS. También compararemos la mejor manera de obtener posicionamiento con la ayuda de los dos métodos anteriores, combinado con el uso del Round Display, que muestra las coordenadas como un mapa en la pantalla. A continuación está la tabla de contenidos y un resumen del artículo.

- [Conectar a la red y obtener IP pública con el XIAO ESP32S3](#conectar-a-la-red-y-obtener-ip-pública-con-el-xiao-esp32s3)
- [Obtener coordenadas de ubicación con la plataforma ipstack](#obtener-coordenadas-de-ubicación-con-la-plataforma-ipstack)
- [Descargar imágenes estáticas de Google Maps vía servicio HTTPS](#descargar-imágenes-estáticas-de-google-maps-vía-servicio-https)
- [Mostrar el mapa de ubicación en el Round Display](#mostrar-el-mapa-de-ubicación-en-el-round-display)
- [Posicionamiento usando el método WFPS](#posicionamiento-usando-el-método-wfps)
- [Actualizaciones en vivo de la ubicación más reciente](#actualizaciones-en-vivo-de-la-ubicación-más-reciente)

## Comenzando

Para completar exitosamente este proyecto, es posible que necesites usar el siguiente hardware. Cualquiera de los XIAO ESP32s es compatible.

<div style={{textAlign:'center'}}>
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
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
          </div>
        </td>
    </tr>
  </table>
</div>

Además de esto, puedes preparar adicionalmente una pequeña batería de litio, tarjeta microSD y carcasa. Para formar un Tracker completo.

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## Conectar a la red y obtener IP pública con el XIAO ESP32S3

:::tip
Si no estás familiarizado con las capacidades de red del XIAO ESP32S3, puedes leer sobre [Uso de WiFi con Seeed Studio XIAO ESP32S3 (Sense)](https://wiki.seeedstudio.com/es/xiao_esp32s3_wifi_usage/).
:::

En el tutorial sobre el uso básico del XIAO ESP32S3, hemos dominado el uso del XIAO ESP32S3 para conectar a la red.

```cpp
#include <WiFi.h>

// For network
const char* ssid = "<YOUR_WIFI_SSID_HERE>";
const char* password = "<YOUR_WIFI_PW_HERE>";

void setup() {
  Serial.begin(115200);

  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
}

void loop() {
}
```

La esencia fundamental de usar direcciones IP para buscar ubicaciones es obtener la dirección IP del XIAO. Entonces puede ser natural pensar que necesitamos usar la función `WiFi.localIP()` para buscarla.

En realidad, sin embargo, el router asignará al XIAO una dirección IP interna, algo como 192.168.xxx.xxx, que no puede ser consultada para información de ubicación. Lo que necesitamos es una IP pública. Así que necesitamos usar lo siguiente.

```cpp
// Get local IP address
IPAddress publicIP;
if (WiFi.hostByName("ip-api.com", publicIP)) {
    Serial.print("Public IP address: ");
    Serial.println(publicIP);
} else {
    Serial.println("Failed to get public IP address");
    return;
}
```

Entonces podemos obtener el siguiente efecto, que es el primer paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## Obtener coordenadas de ubicación con la plataforma ipstack

El uso de direcciones IP para ubicación generalmente se requiere para información de bibliotecas de servidores públicos. Podemos obtener esta información del servidor con la ayuda de la interfaz API de algunas plataformas. Por ejemplo, en este tutorial, usaremos la plataforma [ipstack](https://ipstack.com).

ipstack ofrece una API de geolocalización IP potente y en tiempo real capaz de buscar datos de ubicación precisos y evaluar amenazas de seguridad originadas desde direcciones IP riesgosas. Los resultados se entregan en milisegundos en formato JSON o XML.

ipstack ofrece un servicio de búsqueda gratuito/de pago, la [lista de precios](https://ipstack.com/product) se puede encontrar en la imagen a continuación. En este ejemplo, solo estamos mostrando ejemplos y usar el **servicio gratuito (100 consultas/mes)** es suficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### Paso 1. Obtener la Clave de Acceso API de ipstack

Si esta es tu primera vez usando ipstack entonces necesitarás [registrarte para una nueva cuenta](https://ipstack.com/signup/free).

Una vez que te hayas registrado e iniciado sesión podrás ver tu Clave API, por favor cópiala y guárdala en un lugar seguro donde la usaremos más tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### Paso 2. Aprender cómo usar la API de ipstack

ipstack proporciona [documentación](https://ipstack.com/documentation) detallada explicando cómo usar la API de ipstack.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

Muy simple, ¿verdad? Solo envía la **dirección del servidor + dirección IP + Clave API**.

A continuación necesitamos saber qué tipo de mensaje JSON nos devolverá ipstack y extraer la información que necesitamos como ciudad, país y latitud y longitud.

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

### Paso 3. Obtener las coordenadas de la dirección IP a través del servicio http

Para resumir, comenzamos instalando la biblioteca **ArduinoJSON**. Se puede buscar y descargar directamente desde el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

Luego escribimos la función `getLocation()`, que usamos para obtener la información del país, ciudad y latitud y longitud devuelta por ipstack, e imprimirla.

```cpp
// For ipstack
const char* IPStack_key = "<YOUR_API_KEY_HERE>";
String ip_address;

// Obtain the approximate coordinate position based on the current IP address of XIAO.
bool getLocation(){
  // Make HTTP request to IPStack API
  HTTPClient http;
  String url = "http://api.ipstack.com/" + String(ip_address) + "?access_key=" + String(IPStack_key);
  Serial.println("Requesting URL: " + url);
  http.begin(url);
  int httpCode = http.GET();

  // Parse JSON response
  if (httpCode == 200) {
    String payload = http.getString();
    Serial.println("Response payload: " + payload);
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    String country_name = doc["country_name"].as<String>();
    String region_name = doc["region_name"].as<String>();
    String city = doc["city"].as<String>();
    latitude = doc["latitude"].as<double>();
    longitude = doc["longitude"].as<double>();
    Serial.println("Country: " + country_name);
    Serial.println("Region: " + region_name);
    Serial.println("City: " + city);
    Serial.println("Latitude: " + String(latitude));
    Serial.println("Longitude: " + String(longitude));
    http.end(); // Close connection
    return true;
  } else {
    Serial.println("HTTP error code: " + String(httpCode));
    http.end(); // Close connection
    return false;
  }
}
```

En el programa anterior, por favor reemplaza la clave API de ipstack con la tuya propia.

A continuación, podemos ver qué tan precisa es la ubicación por dirección IP. Los [puntos marcados en rojo](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu) en el mapa a continuación son la ubicación exacta de donde estoy por dirección IP. Y el otro extremo de la línea roja es la ubicación real de donde estoy. Hay una diferencia de 2.4 km entre ellos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

Se puede ver que el error en este tipo de posicionamiento está en el rango de kilómetros, lo cual está lejos de lo que esperaríamos de un rastreador.


## Descargar imágenes estáticas de Google Maps a través del servicio HTTPS

Las coordenadas de latitud y longitud no son intuitivas para hablar desde nuestro punto de vista. Incluso si contienen información sobre países y ciudades. Así que nos preguntamos si sería posible marcar estas coordenadas de latitud y longitud en un mapa y mostrarlas en la pantalla. Entonces encontramos el servicio de mapas de Google Cloud.

Antes de comenzar, creo que es importante que entiendas los [precios del servicio de Google Maps](https://mapsplatform.google.com/pricing/) para decidir si proceder.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

Si eres un usuario registrado por primera vez, tendrás **\$300** de crédito gratuito. Aquí estamos usando principalmente la Maps Static API, que cuesta **\$2.00 por 1000** llamadas.

### Paso 4. [Configura tu proyecto de Google Cloud](https://developers.google.com/maps/documentation/elevation/cloud-setup) y completa las instrucciones de configuración que siguen

### Paso 5. Habilita la API de Google Maps

Necesitas una clave API de google para validar con la API de Google. Navega a [Google Developers Console](https://console.developers.google.com/apis) para habilitar la API de GeoLocation. Sin esta clave API obtendrás un error como respuesta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

Una vez que tengas la API, por favor mantenla en un lugar seguro, la usaremos en pasos de programación posteriores.

:::note
Si tienes preocupaciones sobre el entorno en el que actualmente estás usando la API, puedes activar restricciones en las llamadas API para evitar cargos adicionales por uso indebido. Activar ciertas restricciones puede requerir cambios en tu programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## Mostrar el mapa de ubicación en el Round Display

:::tip
Si estás usando Round Display para XIAO por primera vez, entonces puede que necesites consultar el [Wiki aquí](https://wiki.seeedstudio.com/es/get_start_round_display/) para configurar tu entorno Arduino para la pantalla redonda.
:::

### Paso 6. Aprende cómo llamar a la API de Google Cloud Static Maps

Haz clic [aquí](https://developers.google.com/maps/documentation/maps-static/overview) para leer la documentación de la API de Google Cloud Static Maps.

La documentación proporciona un código de ejemplo para usar la API como sigue:

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Una URL de la API estática de Maps debe tener la siguiente forma:

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

La API de Maps Static define imágenes de mapas usando los siguientes parámetros de URL:

- `center` (requerido si no hay marcadores presentes) define el centro del mapa, equidistante de todos los bordes del mapa. Este parámetro toma una ubicación como un par `{latitud,longitud}` separado por comas (ej. "40.714728,-73.998672") o una dirección de cadena (ej. "ayuntamiento, nueva york, ny") identificando una ubicación única en la superficie de la tierra.
- `zoom` (requerido si no hay marcadores presentes) define el nivel de zoom del mapa, que determina el nivel de magnificación del mapa. Este parámetro toma un valor numérico correspondiente al nivel de zoom de la región deseada.
- `size` (requerido) define las dimensiones rectangulares de la imagen del mapa. Este parámetro toma una cadena de la forma `{valor_horizontal}x{valor_vertical}`.
- `maptype` (opcional) define el tipo de mapa a construir. Hay varios valores posibles de maptype, incluyendo roadmap, satellite, hybrid, y terrain.
- `markers` (opcional) define uno o más marcadores para adjuntar a la imagen en ubicaciones especificadas. Este parámetro toma una definición de marcador única con parámetros separados por el carácter de tubería (|). Múltiples marcadores pueden ser colocados dentro del mismo parámetro markers siempre que exhiban el mismo estilo; puedes añadir marcadores adicionales de estilos diferentes añadiendo parámetros markers adicionales. Nota que si proporcionas marcadores para un mapa, no necesitas especificar los parámetros center y zoom (normalmente requeridos).
- `key` (requerido) te permite monitorear el uso de la API de tu aplicación en Google Cloud Console, y asegura que Google pueda contactarte sobre tu aplicación si es necesario.

:::tip
Solo se muestran arriba los parámetros más básicos, si tienes la necesidad de personalizar este mapa estático puedes hacer clic **[aquí](https://developers.google.com/maps/documentation/maps-static/start)** para leer la lista completa de parámetros.
:::

En resumen, podemos entonces unir todo para formar una cadena completa para enviar.

```cpp
// For google static maps
const char * host = "maps.googleapis.com";
const String defaultPath = "/maps/api/staticmap?center=";
const String Googlemaps_key = "<YOUR_API_KEY_HERE>";
int zoomLevel = 14;
double latitude;
double longitude;

// Stitching to form commands sent to Google Maps
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

Por favor, reemplaza el código anterior con tu propia API de Google Cloud Maps.

### Paso 7. La imagen devuelta se obtiene vía HTTPS y se escribe en la tarjeta microSD

Necesitamos un medio de almacenamiento lo suficientemente grande para contener las imágenes fijas devueltas para que puedan leerse en el programa que las muestra en pantalla. La Pantalla Redonda tiene soporte para tarjetas microSD.

```cpp
// Static images of coordinates from Google Cloud Services
bool getStaticMapImage(const char *host, const char *path, String fileName){
  int contentLength = 0;
  int httpCode;

  WiFiClientSecure client;

  client.setCACert(GlobalSignCA);
  client.connect(host, 443);

  Serial.printf("Trying: %s:443...", host);
  
  if(!client.connected()){
    client.stop();
    Serial.printf("*** Can't connect. ***\n-------\n");
    return false;
  }

  Serial.println("HTTPS Connected!");
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
    Serial.println(F("FILE OPEN FAILED"));
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
  Serial.println("DOWNLOAD END");
  return (remaining == 0 ? true : false);
}
```

### Paso 8. Mostrar imágenes JPEG en la Round Display

En general, la biblioteca de gráficos TFT compatible con Round Display solo admite mostrar imágenes en formato BMP, si necesitamos mostrar imágenes en otros formatos, necesitamos usar algunas bibliotecas de terceros, aquí usamos la biblioteca **[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)**.

Por favor descarga esta biblioteca como un archivo zip y agrégala a tu entorno de Arduino.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Reescribimos nuestro programa haciendo referencia al programa de ejemplo proporcionado por el repositorio:

```cpp
// This next function will be called during decoding of the jpeg file to
// render each block to the TFT.  If you use a different TFT library
// you will need to adapt this function to suit.
bool tft_output(int16_t x, int16_t y, uint16_t w, uint16_t h, uint16_t* bitmap)
{
   // Stop further decoding as image is running off bottom of screen
  if ( y >= tft.height() ) return 0;

  // This function will clip the image block rendering automatically at the TFT boundaries
  tft.pushImage(x, y, w, h, bitmap);

  // Return 1 to decode next block
  return 1;
}

void setup() {
  // Initialise the TFT
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BLACK);
  tft.setSwapBytes(true); // We need to swap the colour bytes (endianess)

  // Initialise SD before TFT
  if (!SD.begin(SD_CS)) {
    Serial.println(F("SD.begin failed!"));
    return;
  }
  Serial.println("\r\nInitialisation done.");

  // The jpeg image can be scaled by a factor of 1, 2, 4, or 8
  TJpgDec.setJpgScale(1);

  // The decoder must be given the exact name of the rendering function above
  TJpgDec.setCallback(tft_output);

  if(WiFi.status() == WL_CONNECTED){
    if(getLocation() && getStaticMapImage(host, getPath().c_str(), mapFile)){
      TJpgDec.drawSdJpg(0, 0, mapFile);
    }
  }
}
```

El programa completo para este proyecto se puede encontrar en esta ocasión.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Ejecuta el programa y podrás ver la salida del monitor serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

La pantalla también mostrará una imagen de la ubicación correspondiente a tu dirección IP.

## Posicionamiento usando el método WFPS

Como hemos comparado en los pasos anteriores, la precisión de la ubicación usando direcciones IP es realmente lamentable. Así que a continuación, mejoremos el procedimiento usando el método WFPS y veamos si hay un cambio en la precisión.

Por supuesto, este algoritmo es difícil de implementar para nosotros y aún dependemos de la [API de Geolocalización](https://developers.google.com/maps/documentation/geolocation/overview) en el servicio de Google Maps.

La API de Geolocalización es un servicio que acepta una solicitud HTTPS con las torres de telefonía celular y puntos de acceso WiFi que un cliente móvil puede detectar. Devuelve coordenadas de latitud/longitud y un radio que indica la precisión del resultado para cada entrada válida.

En la comunidad, **[gmag11](https://github.com/gmag11)** y su equipo han escrito bibliotecas que pueden llamar a este servicio directamente. Podemos usarla directamente aquí.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Mientras tanto, necesitarás la biblioteca **QuickDebug** para los mensajes de depuración.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

A continuación, solo necesitamos modificar la función `getLocation()`.

```cpp
//For google geolocation
WifiLocation location (Googlemaps_key);

// Set time via NTP, as required for x.509 validation
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("Waiting for NTP time sync: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
    Serial.print ("\n");
    Serial.print ("Current time: ");
    Serial.print (asctime (&timeinfo));
}

// Get the exact coordinates of XIAO by WiFi location method
void getLocation(){
  setClock();
  location_t loc = location.getGeoFromWiFi();

  Serial.println("Location request data");
  Serial.println(location.getSurroundingWiFiJson()+"\n");
  Serial.println ("Location: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
  latitude = loc.lat;
  longitude = loc.lon;
  Serial.println ("Accuracy: " + String (loc.accuracy));
  Serial.println ("Result: " + location.wlStatusStr (location.getStatus ()));
}
```

Veamos cómo las coordenadas obtenidas mediante WFPS difieren de la posición real.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

¡La desviación en la posición ya está alrededor de 1 km! Este rendimiento es incluso mejor que algunos módulos GPS.


## Actualizaciones en vivo de la ubicación más reciente

Así que para el paso final, terminemos este rastreador de posicionamiento global. Hagamos que implemente una actualización automática del mapa.

:::tip
¡Por favor ten una estimación del consumo de tarifas de tu servicio de Google Cloud al usar este programa, de lo contrario las llamadas frecuentes a la API pueden resultar en una facturación elevada!
:::

```cpp
void loop() {
  // Make sure you pay attention to the number of API calls! This could cost you extra spending!
  
  if(WiFi.status() == WL_CONNECTED){
    getLocation();
    if(latitude != last_latitude || longitude != last_longitude){  // Update of the location image is performed only when the location is updated
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

En el bucle principal, obtendremos la red circundante cada 10 segundos y actualizaremos las coordenadas de ubicación actuales. Si las coordenadas de ubicación devueltas son diferentes de la última vez, entonces el mapa se descargará nuevamente y se actualizará en la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

Con nuestra carcasa impresa en 3D, ¡realmente parece un rastreador!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

Finalmente, el código completo del programa para obtener posicionamiento a través del método WFPS está disponible en el botón de abajo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## Recursos

- **[GITHUB]** [Código Fuente](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)
- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [Diseño de carcasa XIAO ESP32S3 Sense (inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)


## Solución de Problemas

### P1: ¿Por qué no obtengo la dirección IP exacta usando la función `WiFi.hostByName()`?

Al usar la función WiFi.hostByName() para consultar la dirección IP pública del router, asegúrate de que tu router pueda ser resuelto a la dirección IP correspondiente por el resolvedor DNS. Si tu router usa servidores DNS proporcionados por tu ISP, puedes encontrar fallas en la resolución DNS. En este caso, puedes intentar usar servidores DNS alternativos, como los servidores DNS públicos de Google 8.8.8.8 o 8.8.4.4.

Si aún no puedes consultar la dirección IP pública correcta, puede deberse a problemas de conectividad de red u otros problemas de configuración de red. Puedes intentar los siguientes métodos para resolver el problema:

1. Probar servicios alternativos de consulta de dirección IP pública: Si estás usando el servicio api.ipify.org para consultar la dirección IP pública y aún no puedes obtener la dirección IP correcta, puedes intentar usar servicios alternativos de consulta de dirección IP pública, como ip-api.com o whatismyip.com.

2. Verificar la configuración del router: Verifica la configuración de tu router para asegurar que las funciones NAT y reenvío de puertos estén configuradas correctamente y no bloqueen el acceso a redes externas. También puedes intentar habilitar la funcionalidad UPnP en el router para configurar automáticamente el reenvío de puertos.

3. Reiniciar el router y el dispositivo ESP32S3: A veces, reiniciar el router y el dispositivo ESP32S3 puede resolver problemas de conectividad de red y configuración.

Si esto aún no resuelve el problema, recomendamos usar el segundo método o asignar un valor al XIAO directamente después de que el router consulte la IP pública.

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


