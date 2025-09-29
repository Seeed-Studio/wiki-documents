---
description: Uso de WiFi con Seeed Studio XIAO ESP32C6.
title: Uso de WiFi
keywords:
  - esp32c6
  - xiao
  - arduino
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_wifi_usage_esp32c6
sidebar_position: 3
last_update:
  date: 04/11/2024
  author: Spencer
---

# Uso de WiFi con Seeed Studio XIAO ESP32C6

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

El Seeed Studio XIAO ESP32C6 es una placa de desarrollo embebida que cuenta con un rendimiento de RF excepcional, gracias a su soporte para comunicación inalámbrica dual de Wifi de 2.4GHz - 802.11b/g/n y Bluetooth Low Energy (BLE) 5.0. Esta capacidad permite al XIAO ESP32C6 proporcionar conectividad inalámbrica confiable y de alta velocidad para una amplia gama de aplicaciones de Internet de las Cosas (IoT). La placa cuenta con una antena cerámica integrada, que elimina la necesidad de una antena externa y simplifica el proceso de diseño. El chip ESP32C6 también ofrece bajo consumo de energía, haciéndolo adecuado para dispositivos IoT alimentados por batería. En este tutorial, exploraremos cómo aprovechar las capacidades Wi-Fi del XIAO ESP32C6 para conectarse a una red Wi-Fi y realizar tareas básicas de red.

:::tip
GPIO14 se utiliza para seleccionar entre usar la antena integrada o una antena externa. Antes de eso, necesitas configurar GPIO3 a nivel bajo para activar esta función. Si GPIO14 se configura a nivel bajo, utiliza la antena integrada; si se configura a nivel alto, utiliza la antena externa. Por defecto es nivel bajo. Si quieres configurarlo alto, puedes consultar el código a continuación.

```cpp
void setup() {
  pinMode(3, OUTPUT);
  digitalWrite(3, LOW);//turn on this function
  delay(100);
  pinMode(14, OUTPUT); 
  digitalWrite(14, HIGH);//use external antenna
}
```

:::

## Las interfaces comunes de la biblioteca WiFi

ESP32-C6 proporciona una amplia gama de funciones de red WiFi. Generalmente, podemos ver las funciones de la biblioteca WiFi en el paquete integrado del ESP32 y elegir la función correspondiente para lograr la funcionalidad deseada. A continuación, listaremos algunas interfaces comúnmente utilizadas e introduciremos su uso.

### Función WiFi genérica

- `WiFiGenericClass::getHostname()` -- Es una función en la biblioteca WiFi para ESP32 que devuelve el nombre de host del dispositivo como una cadena. El nombre de host es un nombre único que identifica el dispositivo en la red. Esta función recupera el nombre de host que fue previamente establecido usando `WiFiGenericClass::setHostname()`. Si no se ha establecido ningún nombre de host, se devolverá el nombre de host predeterminado.

- `WiFiGenericClass::persistent(bool persistent)` -- Es un método que se utiliza para habilitar o deshabilitar el modo persistente de la biblioteca WiFi ESP32. Cuando el modo persistente está habilitado, la configuración Wi-Fi se almacena en memoria no volátil (NVM) y se conserva incluso después de un ciclo de energía o reinicio. Cuando el modo persistente está deshabilitado, la configuración se almacena en RAM y se pierde después de un ciclo de energía o reinicio.

 	- **Parámetros de Entrada**
  		- **persistent**: Si el argumento es true, el modo persistente está habilitado. Si el argumento es false, el modo persistente está deshabilitado.

- `WiFiGenericClass::enableLongRange(bool enable)` -- La función se utiliza para habilitar o deshabilitar la característica de Largo Alcance (LR) del módulo WiFi. Cuando está habilitada, la característica LR permite al módulo conectarse a redes WiFi que están más lejos de lo usual, pero con velocidades de datos más bajas.

 	- **Parámetros de Entrada**
  		- **enable**: El parámetro debe establecerse en true para habilitar la característica y false para deshabilitarla.

- `WiFiGenericClass::mode(wifi_mode_t m)` -- La función se utiliza para establecer el modo WiFi del dispositivo.

 	- **Parámetros de Entrada**
  		- **m**: El parámetro m especifica el modo a establecer, que puede ser una de las siguientes constantes definidas en el enum wifi_mode_t:
   			- **WIFI_MODE_NULL**: Deshabilita tanto los modos de estación WiFi como de punto de acceso.
   			- **WIFI_MODE_STA**: Habilita el modo de estación WiFi para conectarse a una red WiFi existente.
   			- **WIFI_MODE_AP**: Habilita el modo de punto de acceso para crear una nueva red WiFi.
   			- **WIFI_MODE_APSTA**: Habilita tanto los modos de estación WiFi como de punto de acceso.

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- La función establece el modo de ahorro de energía para el módulo WiFi.

 	- **Parámetros de Entrada**
  		- **sleepType**: El parámetro sleepType es un tipo enumerado que especifica el tipo de modo de ahorro de energía a usar. Hay tres posibles tipos de suspensión:
   			- **WIFI_PS_NONE**: Este es el modo de suspensión predeterminado, en el cual el módulo WiFi no entra en modo de ahorro de energía.
   			- **WIFI_PS_MIN_MODEM**: En este modo, el módulo WiFi apaga su módem mientras mantiene la conexión al punto de acceso (AP).
   			- **WIFI_PS_MAX_MODEM**: En este modo, el módulo WiFi apaga tanto el módem como la estación, lo que resulta en una desconexión del AP.

### Funciones STA

- `WiFiSTAClass::status()` -- Devuelve el estado de conexión.

 	- **Salida**: uno de los valores definidos en wl_status_t.
  		- **WL_NO_SHIELD**: Este código de estado indica que el módulo Wi-Fi no está presente.
    - **WL_IDLE_STATUS**: Este código de estado indica que el módulo Wi-Fi no está realizando ninguna operación.
    - **WL_NO_SSID_AVAIL**: Este código de estado indica que no se encontraron redes Wi-Fi durante el escaneo.
    - **WL_SCAN_COMPLETED**: Este código de estado indica que el escaneo Wi-Fi se ha completado exitosamente.
    - **WL_CONNECTED**: Este código de estado indica que el ESP32 está conectado exitosamente a una red Wi-Fi.
    - **WL_CONNECT_FAILED**: Este código de estado indica que la conexión a la red Wi-Fi falló.
    - **WL_CONNECTION_LOST**: Este código de estado indica que la conexión a la red Wi-Fi se perdió.
    - **WL_DISCONNECTED**: Este código de estado indica que el ESP32 estaba previamente conectado a una red Wi-Fi, pero actualmente no está conectado a ninguna red.

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- Inicia la conexión Wifi con un AP WPA2 Enterprise.

 	- **Parámetros de Entrada** (Opcional)
  		- **ssid**: Puntero a la cadena SSID.
  		- **method**: El método de autenticación de WPA2 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)
  		- **wpa2_identity**: Puntero a la entidad
  		- **wpa2_username**: Puntero al nombre de usuario
  		- **wpa2_password**: Puntero a la contraseña.
  		- **ca_pem**: Puntero a una cadena con el contenido de un archivo .pem con certificado CA
  		- **client_crt**: Puntero a una cadena con el contenido de un archivo .crt con certificado de cliente
  		- **client_key**: Puntero a una cadena con el contenido de un archivo .key con clave de cliente
  		- **channel**: Opcional. Canal del AP
  		- **bssid**: Opcional. BSSID / MAC del AP
  		- **connect**: Opcional. llamar connect

- `WiFiSTAClass::reconnect()` -- Forzará una desconexión y luego comenzará a reconectarse al AP.

 	- **Salida**: True/False.

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- Desconectar de la red.

 	- **Parámetros de Entrada**
  		- **wifioff**: wifioff `true` para apagar la radio Wi-Fi.
  		- **eraseap**: eraseap `true` para borrar la configuración del AP de la memoria NVS.
 
 	- **Salida**: True/False.

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- Cambiar la configuración IP deshabilitando el cliente dhcp.

 	- **Parámetros de Entrada**
  		- **local_ip**: Configuración de ip estática.
  		- **gateway**: Configuración de gateway estático.
  		- **subnet**: Máscara de subred estática.
  		- **dns1**: Servidor DNS estático 1.
  		- **dns2**: Servidor DNS estático 2.

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- Obsoleto. Configurar la estación ESP32 para conectarse al AP (que está registrado) automáticamente o no cuando se enciende. Habilitar auto-conexión por defecto.

- **Parámetros de Entrada**
  - **autoConnect**: autoConnect bool.

 	- **Salida**: False.

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- Esperar a que la conexión WiFi alcance un resultado.

 	- **Parámetros de Entrada**
  		- **timeoutLength**: El parámetro especifica la cantidad máxima de tiempo a esperar para que se establezca una conexión, en milisegundos.

 	- **Salida**: uno de los valores definidos en wl_status_t.

- `WiFiSTAClass::localIP()` -- Obtener la dirección IP de la interfaz de estación.

 	- **Salida**: IPAddress IP de estación.

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- Obtener la dirección MAC de la interfaz de estación.

 	- **Parámetros de Entrada**
  		- **mac** (Opcional): Puntero a array uint8_t con longitud WL_MAC_ADDR_LENGTH.

 	- **Salida**: Puntero a uint8_t *.

- `WiFiSTAClass::SSID()` -- Devolver el SSID actual asociado con la red.

 	- **Salida**: SSID.

- `WiFiSTAClass::RSSI(void)` -- Devolver el RSSI actual de la red.

 	- **Salida**: RSSI.

### Funciones AP

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- Esta es una función en la biblioteca WiFi del ESP32-C6. Se utiliza para configurar un SoftAP (punto de acceso por software), que permite a otros dispositivos conectarse al ESP32-C6 y acceder a sus recursos.

 	- **Parámetros de Entrada**
  		- **ssid**:              Puntero al SSID (máx 63 char).
    - **passphrase**:        (Para WPA2 mín 8 char, para abierto usar NULL).
    - **channel**:           Número de canal WiFi, 1 - 13.
    - **ssid_hidden**:       Ocultación de red (0 = difundir SSID, 1 = ocultar SSID).
    - **max_connection**:    Máx clientes conectados simultáneamente, 1 - 4.

 	- **Salida**: True/False.

- `WiFiAPClass::softAPgetStationNum()` -- Obtener el conteo de las Estaciones / clientes que están conectados a la interfaz softAP.

 	- **Salida**: Conteo de estaciones.

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- Una función para configurar SoftAP.

 	- **Parámetros de Entrada**
  		- **local_ip**:      IP del punto de acceso.
  		- **gateway**:       IP de puerta de enlace.
  		- **subnet**:        Máscara de subred.

 	- **Salida**: True/False.

- `WiFiAPClass::softAPIP()` -- Obtener la dirección IP de la interfaz softAP.

 	- **Salida**: IPAddress IP softAP.

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- Obtener la dirección MAC de la interfaz softAP.

 	- **Parámetros de Entrada**
  		- **mac** (Opcional):   Puntero a array uint8_t con longitud WL_MAC_ADDR_LENGTH.

 	- **Salida**: Puntero a uint8_t* o String mac.

### Función de Escaneo WiFi

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- Iniciar escaneo de redes WiFi disponibles.

 	- **Parámetros de Entrada**
  		- **async**: El parámetro es un valor booleano que determina si el escaneo debe realizarse de forma asíncrona. Si se establece en true, la función regresa inmediatamente y los resultados del escaneo pueden obtenerse más tarde llamando a la función getScanResults(). Si se establece en false, la función se bloqueará hasta que el escaneo esté completo.
  		- **show_hidden**: El parámetro es un valor booleano que determina si la función debe incluir redes ocultas en los resultados del escaneo.
  		- **passive**: El parámetro es un valor booleano que determina si la función debe realizar un escaneo pasivo. Si se establece en true, la función no transmitirá ningún paquete durante el escaneo, lo que puede tomar más tiempo pero puede ser útil en ciertas situaciones.
  		- **max_ms_per_chan**: El parámetro es el tiempo máximo a gastar escaneando cada canal en milisegundos.
  		- **channel**: El parámetro es el canal Wi-Fi a escanear. Si se establece en 0, la función escaneará todos los canales disponibles.
  		- **ssid**: El parámetro es un puntero a una cadena terminada en null que contiene el SSID de la red a buscar. Si se establece en nullptr, la función escaneará todas las redes disponibles.
  		- **bssid**: El parámetro es un puntero a un array de 6 bytes que contiene la dirección MAC del punto de acceso a buscar. Si se establece en nullptr, la función escaneará todos los puntos de acceso.

 	- **Salida**: El valor de retorno de esta función es un entero que indica el número de redes escaneadas.

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- Carga toda la información de un wifi escaneado en los parámetros ptr.

 	- **Parámetros de Entrada**
  		- **i**: La función se utiliza para recuperar información sobre una red escaneada en un índice especificado i.
  		- **ssid**: El parámetro ssid es una referencia a una variable String donde la función almacena el SSID de la red.
  		- **encType**: El parámetro encType es una referencia a una variable uint8_t donde la función almacena el tipo de cifrado de la red (0 = abierto, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK).
  		- **rssi**: El parámetro rssi es una referencia a una variable int32_t donde la función almacena la indicación de intensidad de señal recibida (RSSI) de la red.
  		- **bssid**: El parámetro bssid es una referencia a un puntero uint8_t* donde la función almacena el BSSID (dirección MAC) de la red.
  		- **channel**: El parámetro channel es una referencia a una variable int32_t donde la función almacena el número de canal de la red.

 	- **Salida**: True/False.

- `WiFiScanClass::SSID(uint8_t i)` -- Devolver el SSID descubierto durante el escaneo de red.

 	- **Parámetros de Entrada**
  		- **i**: Especificar de qué elemento de red se quiere obtener la información.

 	- **Salida**: Cadena SSID del elemento especificado en la lista de redes escaneadas.

- `WiFiScanClass::RSSI(uint8_t i)` -- Devolver el RSSI de las redes descubiertas durante scanNetworks.

 	- **Parámetros de Entrada**
  		- **i**: Especificar de qué elemento de red se quiere obtener la información.

 	- **Salida**: Valor con signo del RSSI del elemento especificado en la lista de redes escaneadas.

### Funciones WiFi Client

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- Esta función se utiliza en la biblioteca WiFiClient para conectarse a una dirección IP remota y puerto con un valor de timeout especificado.

 	- **Parámetros de Entrada**
  		- **ip**:   La dirección IP del servidor al que conectarse.
  		- **port**: El número de puerto del servidor al que conectarse.
  		- **timeout** (Opcional): El tiempo máximo a esperar para que se establezca la conexión, en milisegundos. Si la conexión no se establece dentro de este tiempo, la función devolverá un error. Si timeout se establece en 0, la función esperará indefinidamente a que se establezca la conexión.

- `WiFiClient::stop()` -- La función se utiliza para desconectar el cliente del servidor y liberar el socket/puerto utilizado por el cliente. Una vez que se llama a la función, el cliente ya no puede enviar o recibir datos.

- `WiFiClient::setTimeout(uint32_t seconds)` -- La función establece el número máximo de segundos que el cliente esperará para que se establezca una conexión o se reciban datos. Si la conexión o transferencia de datos toma más tiempo que el timeout especificado, la conexión se cerrará.

 	- **Parámetros de Entrada**
  		- **seconds**:   El número de segundos para el timeout.

- `WiFiClient::write(uint8_t data)` -- Escribe un solo byte de datos al servidor conectado a través de la instancia WiFiClient. O `WiFiClient::write(const uint8_t *buf, size_t size)`.

 	- **Parámetros de Entrada**
  		- **data**:   Es un solo byte de datos que necesita ser enviado a través de la conexión de red establecida.

- `WiFiClient::read()` -- La función lee un solo byte de datos entrantes del servidor conectado. Devuelve el byte leído como un valor entero. Si no hay datos disponibles, devuelve -1. O `read(uint8_t *buf, size_t size)`.

 	- **Salida**: Un valor entero que indica el número de bytes recibidos. Si el valor de retorno es 0, significa que el servidor ha cerrado la conexión.

- `WiFiClient::peek()` -- La función se utiliza para verificar si hay datos disponibles para ser leídos del servidor sin realmente leerlos.

 	- **Salida**: Devuelve el siguiente byte de datos entrantes sin eliminarlo del buffer de recepción. Si no hay datos disponibles, devuelve -1.

- `WiFiClient::available()` -- La función se utiliza para verificar cuántos bytes de datos están disponibles para ser leídos del servidor.

 	- **Salida**: Devuelve un valor entero que representa el número de bytes disponibles para ser leídos.

### Función WiFi Server

- `WiFiServer::stopAll()` -- Esta función es un método de la clase WiFiServer en la biblioteca WiFi de Arduino. Este método detiene todas las instancias de servidor que se crean usando la clase WiFiServer. Es útil cuando quieres detener todos los servidores a la vez en lugar de llamar al método `stop()` para cada instancia individualmente.

- `WiFiServer::begin(uint16_t port, int enable)` -- La función se utiliza para iniciar un servidor en el puerto especificado. El servidor escuchará las conexiones de clientes entrantes.

 	- **Parámetros de Entrada**
  		- **port**: El número de puerto en el que escuchar.
  		- **enable** (Opcional): Una bandera para indicar si el servidor debe habilitarse inmediatamente después de iniciarse. Esta bandera está establecida en true por defecto.

- `WiFiServer::hasClient()` -- La función se utiliza para verificar si hay conexiones de clientes entrantes disponibles en el servidor. Esta función puede usarse en un bucle para verificar continuamente nuevas conexiones.

 	- **Salida**: Devuelve un objeto WiFiClient si un cliente se ha conectado o un puntero NULL si no hay clientes esperando conectarse.

- `WiFiServer::end()` -- La función se utiliza para detener el servidor y liberar los recursos asociados. Una vez llamada, el servidor ya no puede aceptar nuevas conexiones de clientes. Cualquier conexión de cliente existente permanecerá abierta hasta que sea cerrada por el cliente o el servidor. `WiFiServer::close()` y `WiFiServer::stop()` tienen la misma función.

### Funciones WiFi Multiple

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- Se utiliza para agregar un nuevo punto de acceso (AP) a la lista de APs disponibles a los que el objeto WiFiMulti intentará conectarse.

 	- **Parámetros de Entrada**
  		- **ssid**: Puntero al SSID (máximo 63 caracteres).
  		- **passphrase**: (para WPA2 mínimo 8 caracteres, para abierto usar NULL).

 	- **Salida**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- La función intenta conectarse a uno de los puntos de acceso guardados en orden secuencial hasta que se conecta exitosamente a uno.

 	- **Parámetros de Entrada**
  		- **connectTimeout**: El parámetro especifica la cantidad máxima de tiempo a esperar por una conexión en milisegundos. Si connectTimeout se establece en 0, la función no tendrá timeout e intentará conectarse indefinidamente.

 	- **Salida**: estado

## Escanear redes WiFi cercanas

El siguiente es un programa de ejemplo que utiliza el XIAO ESP32C6 para escanear redes WiFi cercanas.

:::info
XIAO C6 solo admite la banda de `2.4GHz`.
:::

En tu Arduino IDE, ve a **File > Examples > WiFi > WiFiScan**. Esto cargará un sketch que escanea redes WiFi dentro del rango de tu XIAO ESP32C6.

Esto puede ser útil para verificar si la red WiFi a la que intentas conectarte está dentro del rango de tu placa u otras aplicaciones. Tu proyecto WiFi puede no funcionar a menudo porque puede no ser capaz de conectarse a tu router debido a una señal WiFi insuficiente.

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("Starting Wi-Fi scan...");

  // WiFi.scanNetworks will return the number of networks found
  int numNetworks = WiFi.scanNetworks();
  Serial.println("Scan done");

  if (numNetworks == 0) {
    Serial.println("No networks found");
  } else {
    Serial.print(numNetworks);
    Serial.println(" networks found");
    for (int i = 0; i < numNetworks; i++) {
      // Print SSID and RSSI for each network found
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // Wait a bit before scanning again
  delay(5000);
}
```

Sube y ejecuta el programa, y deberías ver que el monitor serie imprime las redes WiFi cercanas que pueden ser encontradas por el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Lo primero que necesitas hacer para usar las funcionalidades WiFi del XIAO ESP32C6 es incluir la librería **WiFi.h** en tu código, como sigue:

```cpp
#include <WiFi.h>
```

El XIAO ESP32C6 puede actuar como Estación WiFi, Punto de Acceso o ambos. Para establecer el modo WiFi, usa `WiFi.mode()` y establece el modo deseado como argumento.

```cpp
WiFi.mode(WIFI_STA);
```

Cuando el ESP32 se configura como una estación Wi-Fi, puede conectarse a otras redes (como tu router).

`WiFi.scanNetworks()` devuelve el número de redes encontradas. Después del escaneo, puedes acceder a los parámetros de cada red. `WiFi.SSID()` imprime el SSID de una red específica.

`WiFi.RSSI()` devuelve el RSSI de esa red. RSSI significa Indicador de Intensidad de Señal Recibida. Es una medida estimada del nivel de potencia que un dispositivo cliente RF está recibiendo de un punto de acceso o router.

Finalmente, `WiFi.encryptionType()` devuelve el tipo de cifrado de la red. Ese ejemplo específico pone un * en el caso de redes abiertas. Sin embargo, esa función puede devolver una de las siguientes opciones (no solo redes abiertas):

- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## Conectar a una red WiFi

Para conectar el ESP32 a una red Wi-Fi específica, debes conocer su SSID y contraseña. Además, esa red debe estar dentro del rango WiFi del ESP32 (para verificar eso, puedes usar el ejemplo anterior para escanear redes WiFi).

Lo siguiente es un ejemplo de usar el XIAO ESP32C6 para conectarse a una red especificada. Donde la función `initWiFi()` desempeña el papel de conectarse a la red en el programa.

> Para conectarte a una red Wi-Fi, puedes usar la función `WiFi.begin()`. Esta función toma el SSID y la contraseña de la red como argumentos.

```cpp
#include "WiFi.h"

// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();
}

void loop() {
  // Your code here
}
```

Carga y ejecuta el programa para abrir el monitor serie. Al conectarse a la red, el monitor serie imprimirá una cadena de puntos hasta que la conexión sea exitosa, luego se imprimirá la dirección IP del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Echemos un vistazo rápido a cómo funciona esta función.

Primero, establece el modo WiFi. Si el XIAO ESP32C6 se conectará a otra red (punto de acceso/hotspot) debe estar en modo estación.

```cpp
WiFi.mode(WIFI_STA);
```

Luego, usa `WiFi.begin()` para conectarte a una red. Debes pasar como argumentos el SSID de la red y su contraseña:

```cpp
WiFi.begin(ssid, password);
```

Conectarse a una red WiFi puede tomar un tiempo, por lo que usualmente agregamos un bucle while que sigue verificando si la conexión ya fue establecida usando `WiFi.status()`. Cuando la conexión se establece exitosamente, retorna `WL_CONNECTED`.

Si quieres obtener la intensidad de la conexión WiFi, puedes simplemente llamar `WiFi.RSSI()` después de una conexión WiFi.

## Uso de softAP

Si configuras el XIAO ESP32C6 como un punto de acceso (hotspot), puedes conectarte al ESP32 usando cualquier dispositivo con capacidades WiFi sin la necesidad de conectarte a tu router.

En palabras simples, cuando configuras el XIAO ESP32C6 como un punto de acceso creas su propia red WiFi y los dispositivos WiFi cercanos (estaciones) pueden conectarse a ella (como tu smartphone o tu computadora).

En tu Arduino IDE, ve a **File > Examples > WiFi > WiFiAccessPoint**. Este ejemplo te mostrará cómo usar el XIAO ESP32C6 para crear un hotspot y controlar el interruptor de encendido/apagado de una luz a través de una página web simple conectada al hotspot.

:::note

1. Hicimos algunos cambios menores al programa de ejemplo comentando LED_BUILTIN, porque el XIAO ESP32C6 tiene su propio indicador de usuario y no necesitamos un LED externo.
2. El LED solo se apagará cuando el pin del LED de usuario en el XIAO ESP32C6 se configure a un nivel alto, y solo se encenderá cuando el pin se configure a un nivel bajo.
3. También necesitas modificar el nombre del hotspot y la contraseña en el programa a los que desees.

:::

```cpp
/*
  WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

  Steps:
  1. Connect to the access point "yourAp"
  2. Point your web browser to http://192.168.4.1/H to turn the LED on or http://192.168.4.1/L to turn it off
     OR
     Run raw TCP "GET /H" and "GET /L" on PuTTY terminal with 192.168.4.1 as IP address and 80 as port

  Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // Set the GPIO pin where you connected your test LED or comment this line out if your dev board has a built-in LED

// Set these to your desired credentials.
const char *ssid = "XIAO_ESP32C6";
const char *password = "password";

WiFiServer server(80);


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  // You can remove the password parameter if you want the AP to be open.
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Server started");
}

void loop() {
  WiFiClient client = server.available();   // listen for incoming clients

  if (client) {                             // if you get a client,
    Serial.println("New Client.");           // print a message out the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        if (c == '\n') {                    // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
            client.print("Click <a href=\"/H\">here</a> to turn ON the LED.<br>");
            client.print("Click <a href=\"/L\">here</a> to turn OFF the LED.<br>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {    // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /H" or "GET /L":
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /H turns the LED on
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /L turns the LED off
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
```

Después de cargar y ejecutar el programa, XIAO ESP32C6 creará un punto de acceso llamado "XIAO_ESP32C6". Puedes conectarte a esta red usando tu computadora o teléfono, con la contraseña "password". Luego, abre "192.168.4.1" en un navegador para acceder a la página web que controla el interruptor del LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

Hay una sección en el `setup()` para configurar el ESP32 como un punto de acceso usando el método `softAP()`:

```cpp
WiFi.softAP(ssid, password);
```

A continuación, necesitamos obtener la dirección IP del punto de acceso usando el método softAPIP() e imprimirla en el Monitor Serie.

```cpp
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

Estos son los fragmentos de código que necesitas incluir en tus sketches del servidor web para configurar el XIAO ESP32C6 como un punto de acceso.

## Uso de WiFi y MQTT

El XIAO ESP32C6 es una placa madre potente que soporta el protocolo MQTT, lo que lo convierte en una excelente opción para proyectos de IoT que requieren comunicación confiable y eficiente entre dispositivos.

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

// Replace with your network credentials
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// MQTT broker IP address
const char* mqtt_server = "test.mosquitto.org";

// Initialize the WiFi and MQTT client objects
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // Connect to WiFi network
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  // Set the MQTT broker server IP address and port
  client.setServer(mqtt_server, 1883);

  // Connect to MQTT broker
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
    } else {
      Serial.print("Failed to connect to MQTT broker, rc=");
      Serial.print(client.state());
      Serial.println(" retrying in 5 seconds");
      delay(5000);
    }
  }

  // Subscribe to MQTT topic
  client.subscribe("test/topic");
}

void loop() {
  // Check if the MQTT client is connected
  if (!client.connected()) {
    // Reconnect to MQTT broker
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
      // Subscribe to MQTT topic after reconnection
      client.subscribe("test/topic");
    }
  }

  // Handle MQTT messages
  client.loop();

  // Publish a message to the MQTT broker
  client.publish("test/topic", "Hello from XIAO ESP32C6");
  delay(5000);
}
```

En este programa de ejemplo, XIAO ESP32C6 se conecta a la red a través de WiFi y se conecta a un broker MQTT especificado, se suscribe al tema **test/topic**, y publica un mensaje al tema cada 5 segundos.

Cuando XIAO ESP32C6 recibe un mensaje del broker MQTT, puede ser procesado en la función de callback `client.onMessage`. Necesitas reemplazar las variables `ssid`, `password`, `mqtt_server`, etc. en el programa de ejemplo con tu propia información de red y servidor MQTT.

:::tip
La dirección del servidor MQTT proporcionada en el programa de muestra es `test.mosquitto.org`, solo para propósitos de prueba. Por favor no envíes ninguna información personal a esta dirección, ya que cualquiera puede usar este enlace para obtener tu información.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>

## Uso de WiFi & HTTP/HTTPS

Esta parte puede referirse al ejemplo que escribimos para XIAO ESP32C3 para acceder a ChatGPT, que proporciona una introducción detallada al uso de WiFiClient y HTTPClient.

- [Aprende a usar WiFiClient y HTTPClient en XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT en acción](https://wiki.seeedstudio.com/es/xiaoesp32c3-chatgpt)

## WiFi Mesh

De acuerdo con la [documentación de Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html):

"ESP-MESH es un protocolo de red construido sobre el protocolo Wi-Fi. ESP-MESH permite que numerosos dispositivos (referidos como nodos) distribuidos sobre un área física grande (tanto en interiores como exteriores) estén interconectados bajo una sola WLAN (Red de Área Local Inalámbrica). ESP-MESH es auto-organizativo y auto-reparable, lo que significa que la red puede ser construida y mantenida de forma autónoma."

En una arquitectura de red Wi-Fi tradicional, un solo nodo (punto de acceso – usualmente el router) está conectado a todos los otros nodos (estaciones). Cada nodo puede comunicarse entre sí usando el punto de acceso. Sin embargo, esto está limitado a la cobertura wi-fi del punto de acceso. Cada estación debe estar en el rango para conectarse directamente al punto de acceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/42.png" style={{width:800, height:'auto'}}/></div>

Con ESP-MESH, los nodos no necesitan conectarse a un nodo central. Los nodos son responsables de retransmitir las transmisiones de cada uno. Esto permite que múltiples dispositivos se distribuyan sobre un área física grande. Los nodos pueden auto-organizarse y hablar dinámicamente entre sí para asegurar que el paquete alcance su destino final. Si cualquier nodo es removido de la red, es capaz de auto-organizarse para asegurar que los paquetes alcancen su destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/43.png" style={{width:800, height:'auto'}}/></div>

La [biblioteca painlessMesh](https://gitlab.com/painlessMesh/painlessMesh) nos permite crear una red mesh con las placas ESP32 de manera fácil.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

Si aparece una ventana solicitándonos descargar algunos paquetes dependientes para usar esta biblioteca, también necesitamos descargarlos juntos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

Si esta ventana no aparece, necesitarás instalar las siguientes dependencias de biblioteca:

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (por bblanchon)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

Para comenzar con ESP-MESH, primero experimentaremos con el ejemplo básico de la biblioteca. Este ejemplo crea una red mesh en la cual todas las placas transmiten mensajes a todas las otras placas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

Antes de subir el código, puedes configurar las variables `MESH_PREFIX` (es como el nombre de la red MESH) y `MESH_PASSWORD` (puedes configurarlo como quieras).

Luego, recomendamos que cambies la siguiente línea para cada placa para identificar fácilmente el nodo que envió el mensaje. Por ejemplo, para el nodo 1, cambia el mensaje como sigue:

```cpp
String msg = "Hi from node 1 ";
```

Bien, a continuación usaremos dos XIAO ESP32C6 como ejemplo. El diagrama conceptual después de la conexión en red es aproximadamente el siguiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

Sube el programa por separado a los dos XIAO, abre el monitor del puerto serie y establece la velocidad de baudios a 115200. (Si hay dos XIAO, es posible que necesites software de puerto serie adicional), si el programa funciona sin problemas, verás los siguientes resultados:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

Comienza incluyendo la biblioteca painlessMesh. Luego, agrega los detalles de la malla. El `MESH_PREFIX` se refiere al nombre de la malla. El `MESH_PASSWORD`, como su nombre sugiere, es la contraseña de la malla. Todos los nodos en la malla deben usar el mismo `MESH_PREFIX` y `MESH_PASSWORD`. El `MESH_PORT` se refiere al puerto TCP en el que quieres que funcione el servidor de malla. El valor predeterminado es **5555**.

Se recomienda evitar usar `delay()` en el código de red de malla. Para mantener la malla, algunas tareas necesitan realizarse en segundo plano. Usar `delay()` detendrá estas tareas y puede causar que la malla pierda estabilidad/se desintegre. En su lugar, se recomienda usar `TaskScheduler` para ejecutar tus tareas, que es usado en painlessMesh mismo. La siguiente línea crea un nuevo `Scheduler` llamado `userScheduler`.

```cpp
Scheduler userScheduler; // to control your personal task
```

Crea un objeto `painlessMesh` llamado mesh para manejar la red de malla.

```cpp
painlessMesh  mesh;
```

Crea una tarea llamada `taskSendMessage` responsable de llamar a la función `sendMessage()` cada segundo mientras el programa esté ejecutándose.

```cpp
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

La función `sendMessage()` envía un mensaje a todos los nodos en la red de mensajes (difusión).

```cpp
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

El mensaje contiene el texto "Hello from node 1" seguido del ID del chip de la placa.

Para difundir un mensaje, simplemente usa el método `sendBroadcast()` en el objeto mesh y pasa como argumento el mensaje (msg) que quieres enviar.

```cpp
mesh.sendBroadcast(msg);
```

Cada vez que se envía un nuevo mensaje, el código cambia el intervalo entre mensajes (de uno a cinco segundos).

```cpp
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

A continuación, se crean varias funciones de callback que serán llamadas cuando ocurran eventos específicos en la malla. La función `receivedCallback()` imprime el remitente del mensaje (from) y el contenido del mensaje (`msg.c_str()`).

```cpp
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

La función `newConnectionCallback()` se ejecuta cada vez que un nuevo nodo se une a la red. Esta función simplemente imprime el ID del chip del nuevo nodo. Puedes modificar la función para realizar cualquier otra tarea.

```cpp
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

La función `changedConnectionCallback()` se ejecuta cada vez que cambia una conexión en la red (cuando un nodo se une o abandona la red).

```cpp
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

La función `nodeTimeAdjustedCallback()` se ejecuta cuando la red ajusta la hora, para que todos los nodos estén sincronizados. Imprime el desplazamiento.

```cpp
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

En el `setup()`, inicializa el monitor serie. Elige los tipos de mensajes de depuración deseados:

```cpp
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // all types on

mesh.setDebugMsgTypes( ERROR | STARTUP );  // set before init() so that you can see startup messages
```

Inicializa la malla con los detalles definidos anteriormente.

```cpp
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

Asigna todas las funciones de callback a sus eventos correspondientes.

```cpp
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

Finalmente, añade la función taskSendMessage al userScheduler. El planificador es responsable de manejar y ejecutar las tareas en el momento adecuado.

```cpp
userScheduler.addTask(taskSendMessage);
```

Finalmente, habilita el taskSendMessage, para que el programa comience a enviar los mensajes a la malla.

```cpp
taskSendMessage.enable();
```

Para mantener la malla funcionando, añade `mesh.update()` al `loop()`.

```cpp
void loop() {
  // it will run the user scheduler as well
  mesh.update();
}
```

## Citas y Referencias

Este artículo se basa en el contenido web de **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32 y lo utiliza verificado en el Seeed Studio XIAO ESP32C6.

¡Agradecimientos especiales a los autores de **Random Nerd Tutorials** por su arduo trabajo!

La siguiente es la referencia al enlace del artículo original, te invitamos a aprender más sobre la red ESP32 a través del siguiente enlace al artículo original.

- [ESP32 Useful Wi-Fi Library Functions (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publish and Subscribe with Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH with ESP32 and ESP8266: Getting Started (painlessMesh library)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

Para más información sobre el uso de la placa de desarrollo ESP32, por favor lee el sitio web oficial de Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

Y consulta estas documentaciones para más detalles sobre la API de Arduino:

- [WiFi - Arduino Reference](https://www.arduino.cc/en/Reference/WiFi)
- [Wi-Fi API - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

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
