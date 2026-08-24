---
title: Uso de WiFi
description: Uso de WiFi con Seeed Studio XIAO ESP32-C5
keywords:
  - xiao
  - esp32c5
  - wifi_usage
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_wifi_usage
sidebar_class_name: hidden
last_update:
  date: 01/06/2026
  author: Zeller
createdAt: '2025-12-30'
updatedAt: '2026-01-20'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_wifi_usage/
---

# Uso de WiFi con Seeed Studio XIAO ESP32-C5

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

El Seeed Studio XIAO ESP32-C5 es compatible con Wi-Fi de doble banda de 2,4 GHz y 5 GHz, e incorpora una radio Wi-Fi 6 (802.11ax) de doble banda con compatibilidad retroactiva con los estándares 802.11a/b/g/n/ac. Además, esta placa de desarrollo admite conectividad de antena U.FL, diseñada para mejorar el rendimiento de la conexión inalámbrica del XIAO ESP32-C5. En este tutorial, exploraremos cómo aprovechar la funcionalidad Wi-Fi del XIAO ESP32-C5 para conectarse a una red Wi-Fi y realizar tareas básicas de red.<br/>
El siguiente tutorial utiliza el Arduino IDE para la compilación y la carga. Si aún no tienes experiencia con el Arduino IDE, visita [Getting Started with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/es/xiao_esp32c5_getting_started/).<br/>

## Introducción

### Instalación de la antena

Dentro del embalaje del Seeed Studio XIAO ESP32-C5, hay un **conector de antena Wi-Fi/BT** dedicado. Para obtener una intensidad óptima de la señal WiFi/Bluetooth, debes sacar la antena incluida en el paquete y conectarla al conector.<br/>
<!-- :::tip
If you want to achieve a stronger signal gain effect, you can purchase and install **2.4G/5G External Antenna with RP-SMA Male Connector** — it delivers much higher gain than the built-in FPC Antenna included in the package!
:::
<div class="table-center">
 <table>
  <tr>
   <th>2.4G/5G External Antenna with RP-SMA Male Connector</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div> -->

## Interfaces comunes de la biblioteca WiFi

- XIAO ESP32-C5 proporciona una amplia gama de funciones de red Wi-Fi. En general, podemos consultar las funciones de la biblioteca WiFi en el paquete integrado del ESP32 y elegir la función correspondiente para lograr la funcionalidad deseada. A continuación, enumeraremos algunas interfaces de uso común e introduciremos su uso.

:::tip
Si deseas comenzar directamente con el tutorial de uso de Wi-Fi, puedes saltar a [WiFi Usage Examples](#WiFi-Usage-Examples).
:::

### Función genérica de WiFi

- `WiFiGenericClass::getHostname()` -- Es una función de la biblioteca WiFi para ESP32 que devuelve el nombre de host del dispositivo como una cadena. El nombre de host es un nombre único que identifica el dispositivo en la red. Esta función recupera el nombre de host que se estableció previamente usando `WiFiGenericClass::setHostname()`. Si no se ha establecido ningún nombre de host, se devolverá el nombre de host predeterminado.

- `WiFiGenericClass::persistent(bool persistent)` -- Es un método que se utiliza para habilitar o deshabilitar el modo persistente de la biblioteca WiFi del ESP32. Cuando el modo persistente está habilitado, la configuración de Wi-Fi se almacena en memoria no volátil (NVM) y se conserva incluso después de un ciclo de alimentación o un reinicio. Cuando el modo persistente está deshabilitado, la configuración se almacena en la RAM y se pierde después de un ciclo de alimentación o un reinicio.

 	- **Parámetros de entrada**
  		- **persistent**: Si el argumento es true, el modo persistente se habilita. Si el argumento es false, el modo persistente se deshabilita.

- `WiFiGenericClass::enableLongRange(bool enable)` -- La función se utiliza para habilitar o deshabilitar la función de largo alcance (Long Range, LR) del módulo WiFi. Cuando está habilitada, la función LR permite que el módulo se conecte a redes WiFi que están más alejadas de lo habitual, pero con menores velocidades de datos.

 	- **Parámetros de entrada**
  		- **enable**: El parámetro debe establecerse en true para habilitar la función y en false para deshabilitarla.

- `WiFiGenericClass::mode(wifi_mode_t m)` -- La función se utiliza para establecer el modo WiFi del dispositivo.

 	- **Parámetros de entrada**
  		- **m**: El parámetro m especifica el modo a configurar, que puede ser una de las siguientes constantes definidas en el enum wifi_mode_t:
   			- **WIFI_MODE_NULL**: Desactiva tanto el modo estación WiFi como el modo punto de acceso.
   			- **WIFI_MODE_STA**: Habilita el modo estación WiFi para conectarse a una red WiFi existente.
   			- **WIFI_MODE_AP**: Habilita el modo punto de acceso para crear una nueva red WiFi.
   			- **WIFI_MODE_APSTA**: Habilita tanto el modo estación WiFi como el modo punto de acceso.

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- La función establece el modo de ahorro de energía para el módulo WiFi.

 	- **Parámetros de entrada**
  		- **sleepType**: El parámetro sleepType es un tipo enumerado que especifica el tipo de modo de ahorro de energía que se va a utilizar. Hay tres tipos de suspensión posibles:
   			- **WIFI_PS_NONE**: Este es el modo de suspensión predeterminado, en el que el módulo WiFi no entra en modo de ahorro de energía.
   			- **WIFI_PS_MIN_MODEM**: En este modo, el módulo WiFi apaga su módem mientras mantiene la conexión con el punto de acceso (AP).
   			- **WIFI_PS_MAX_MODEM**: Habilita el modo de ahorro de energía Wi-Fi más agresivo. Puede aumentar significativamente el tiempo de suspensión, pero puede introducir mayor latencia y menor rendimiento, y en algunas redes puede afectar a la estabilidad de la conexión.

### Funciones STA

- `WiFiSTAClass::status()` -- Devuelve el estado de la conexión.

 	- **Salida**: uno de los valores definidos en wl_status_t.
  		- **WL_NO_SHIELD**: Este código de estado indica que el módulo Wi-Fi no está presente.
    - **WL_IDLE_STATUS**: Este código de estado indica que el módulo Wi-Fi no está realizando ninguna operación.
    - **WL_NO_SSID_AVAIL**: Este código de estado indica que no se encontraron redes Wi-Fi durante el escaneo.
    - **WL_SCAN_COMPLETED**: Este código de estado indica que el escaneo Wi-Fi se ha completado correctamente.
    - **WL_CONNECTED**: Este código de estado indica que el ESP32 está conectado correctamente a una red Wi-Fi.
    - **WL_CONNECT_FAILED**: Este código de estado indica que la conexión a la red Wi-Fi falló.
    - **WL_CONNECTION_LOST**: Este código de estado indica que se perdió la conexión con la red Wi-Fi.
    - **WL_DISCONNECTED**: Este código de estado indica que el ESP32 estaba previamente conectado a una red Wi-Fi, pero actualmente no está conectado a ninguna red.

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- Inicia la conexión WiFi con un punto de acceso WPA2 Enterprise.

 	- **Parámetros de entrada** (Opcionales)
  		- **ssid**: Puntero a la cadena SSID.
  		- **method**: El método de autenticación de WPA2 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)
  		- **wpa2_identity**: Puntero a la entidad.
  		- **wpa2_username**: Puntero al nombre de usuario.
  		- **wpa2_password**: Puntero a la contraseña.
  		- **ca_pem**: Puntero a una cadena con el contenido de un archivo .pem con el certificado de la CA.
  		- **client_crt**: Puntero a una cadena con el contenido de un archivo .crt con el certificado de cliente.
  		- **client_key**: Puntero a una cadena con el contenido de un archivo .key con la clave de cliente.
  		- **channel**: Opcional. Canal del AP.
  		- **bssid**: Opcional. BSSID / MAC del AP.
  		- **connect**: Opcional. Llamar a connect.

- `WiFiSTAClass::reconnect()` -- Forzará una desconexión y luego comenzará a reconectarse al AP.

 	- **Salida**: True/False.

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- Desconectarse de la red.

 	- **Parámetros de entrada**
  		- **wifioff**: wifioff `true` para apagar la radio Wi-Fi.
  		- **eraseap**: eraseap `true` para borrar la configuración del AP de la memoria NVS.

 	- **Salida**: True/False.

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- Cambia la configuración de IP deshabilitando el cliente DHCP.

 	- **Parámetros de entrada**
  		- **local_ip**: Configuración de IP estática.
  		- **gateway**: Configuración de puerta de enlace estática.
  		- **subnet**: Máscara de subred estática.
  		- **dns1**: Servidor DNS estático 1.
  		- **dns2**: Servidor DNS estático 2.

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- Obsoleto. Configura la estación ESP32 para conectarse automáticamente o no al AP (que está registrado) cuando se enciende. La auto-conexión está habilitada de forma predeterminada.

 	- **Parámetros de entrada**
  		- **autoConnect**: Booleano autoConnect.

 	- **Salida**: False.

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- Espera a que la conexión WiFi alcance un resultado.

 	- **Parámetros de entrada**
  		- **timeoutLength**: El parámetro especifica la cantidad máxima de tiempo de espera para que se establezca una conexión, en milisegundos.

 	- **Salida**: uno de los valores definidos en wl_status_t.

- `WiFiSTAClass::localIP()` -- Obtiene la dirección IP de la interfaz de estación.

 	- **Salida**: IPAddress de la IP de la estación.

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- Obtiene la dirección MAC de la interfaz de estación.

 	- **Parámetros de entrada**
  		- **mac** (Opcional): Puntero a un array uint8_t con longitud WL_MAC_ADDR_LENGTH.

 	- **Salida**: Puntero a uint8_t *.

- `WiFiSTAClass::SSID()` -- Devuelve el SSID actual asociado con la red.

 	- **Output**: SSID.

- `WiFiSTAClass::RSSI(void)` -- Devuelve el RSSI actual de la red.

 	- **Output**: RSSI.

### Funciones de AP

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- Esta es una función de la biblioteca WiFi de XIAO ESP32-C5. Se utiliza para configurar un SoftAP (punto de acceso programado), que permite que otros dispositivos se conecten al XIAO ESP32-C5 y accedan a sus recursos.

 	- **Input Parameters**
  		- **ssid**:              Puntero al SSID (máx. 63 caracteres).
    - **passphrase**:        (Para WPA2 mín. 8 caracteres, para abierto usar NULL).
    - **channel**:           Número de canal WiFi, 1 - 13.
    - **ssid_hidden**:       Enmascaramiento de red (0 = difundir SSID, 1 = ocultar SSID).
    - **max_connection**:    Máximo de clientes conectados simultáneamente, 1 - 4.

 	- **Output**: True/False.

- `WiFiAPClass::softAPgetStationNum()` -- Obtiene el número de estaciones / clientes que están conectados a la interfaz softAP.

 	- **Output**: Conteo de estaciones.

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- Una función para configurar el SoftAP.

 	- **Input Parameters**
  		- **local_ip**:      IP del punto de acceso.
  		- **gateway**:       IP de la puerta de enlace.
  		- **subnet**:        Máscara de subred.

 	- **Output**: True/False.

- `WiFiAPClass::softAPIP()` -- Obtiene la dirección IP de la interfaz softAP.

 	- **Output**: IPAddress IP del softAP.

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- Obtiene la dirección MAC de la interfaz softAP.

 	- **Input Parameters**
  		- **mac** (Optional):   Puntero a un array de uint8_t con longitud WL_MAC_ADDR_LENGTH.

 	- **Output**: Puntero a uint8_t* o String mac.

### Función de escaneo WiFi

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- Inicia el escaneo de las redes WiFi disponibles.

 	- **Input Parameters**
  		- **async**: El parámetro es un valor booleano que determina si el escaneo debe realizarse de forma asíncrona. Si se establece en true, la función devuelve inmediatamente y los resultados del escaneo se pueden obtener más tarde llamando a la función getScanResults(). Si se establece en false, la función se bloqueará hasta que el escaneo se complete.
  		- **show_hidden**: El parámetro es un valor booleano que determina si la función debe incluir redes ocultas en los resultados del escaneo.
  		- **passive**: El parámetro es un valor booleano que determina si la función debe realizar un escaneo pasivo. Si se establece en true, la función no transmitirá ningún paquete durante el escaneo, lo que puede tardar más pero puede ser útil en ciertas situaciones.
  		- **max_ms_per_chan**: El parámetro es el tiempo máximo que se dedicará a escanear cada canal en milisegundos.
  		- **channel**: El parámetro es el canal Wi-Fi que se va a escanear. Si se establece en 0, la función escaneará todos los canales disponibles.
  		- **ssid**: El parámetro es un puntero a una cadena terminada en null que contiene el SSID de la red a buscar. Si se establece en nullptr, la función escaneará todas las redes disponibles.
  		- **bssid**: El parámetro es un puntero a un array de 6 bytes que contiene la dirección MAC del punto de acceso a buscar. Si se establece en nullptr, la función escaneará todos los puntos de acceso.

 	- **Output**: El valor de retorno de esta función es un entero que indica el número de redes escaneadas.

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- Carga toda la información de una red WiFi escaneada en los parámetros puntero.

 	- **Input Parameters**
  		- **i**: La función se utiliza para obtener información sobre una red escaneada en el índice i especificado.
  		- **ssid**: El parámetro ssid es una referencia a una variable String donde la función almacena el SSID de la red.
  		- **encType**: El parámetro encType es una referencia a una variable uint8_t donde la función almacena el tipo de cifrado de la red (0 = abierta, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK).
  		- **rssi**: El parámetro rssi es una referencia a una variable int32_t donde la función almacena la intensidad de la señal recibida (RSSI) de la red.
  		- **bssid**: El parámetro bssid es una referencia a un puntero uint8_t* donde la función almacena el BSSID (dirección MAC) de la red.
  		- **channel**: El parámetro channel es una referencia a una variable int32_t donde la función almacena el número de canal de la red.

 	- **Output**: True/False.

- `WiFiScanClass::SSID(uint8_t i)` -- Devuelve el SSID descubierto durante el escaneo de la red.

 	- **Input Parameters**
  		- **i**: Especifica de qué elemento de red se desea obtener la información.

 	- **Output**: Cadena SSID del elemento especificado en la lista de redes escaneadas.

- `WiFiScanClass::RSSI(uint8_t i)` -- Devuelve el RSSI de las redes descubiertas durante el scanNetworks.

 	- **Input Parameters**
  		- **i**: Especifica de qué elemento de red se desea obtener la información.

 	- **Output**: Valor con signo del RSSI del elemento especificado en la lista de redes escaneadas.

### Funciones de cliente WiFi

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- Esta función se utiliza en la biblioteca WiFiClient para conectarse a una dirección IP y puerto remotos con un valor de tiempo de espera especificado.

 	- **Input Parameters**
  		- **ip**:   La dirección IP del servidor al que conectarse.
  		- **port**: El número de puerto del servidor al que conectarse.
  		- **timeout** (Optional): El tiempo máximo de espera para que se establezca la conexión, en milisegundos. Si la conexión no se establece dentro de este tiempo, la función devolverá un error. Si timeout se establece en 0, la función esperará indefinidamente a que se establezca la conexión.

- `WiFiClient::stop()` -- La función se utiliza para desconectar el cliente del servidor y liberar el socket/puerto utilizado por el cliente. Una vez que se llama a la función, el cliente ya no puede enviar ni recibir datos.

- `WiFiClient::setTimeout(uint32_t timeout_ms)` -- La función establece el número máximo de milisegundos que el cliente esperará a que se establezca una conexión o se reciban datos. Si la conexión o la transferencia de datos tarda más que el tiempo de espera especificado, la conexión se cerrará.

 	- **Input Parameters**
  		- **timeout_ms**:   El número de milisegundos para el tiempo de espera.

- `WiFiClient::write(uint8_t data)` -- Escribe un solo byte de datos en el servidor conectado a través de la instancia WiFiClient. O `WiFiClient::write(const uint8_t *buf, size_t size)`.

 	- **Input Parameters**
  		- **data**:   Es un solo byte de datos que debe enviarse a través de la conexión de red establecida.

- `WiFiClient::read()` -- La función lee un solo byte de datos entrantes desde el servidor conectado. Devuelve el byte leído como un valor entero. Si no hay datos disponibles, devuelve -1. O `read(uint8_t *buf, size_t size)`.

 	- **Output**: Un valor entero que indica el número de bytes recibidos. Si el valor de retorno es 0, significa que el servidor ha cerrado la conexión.

- `WiFiClient::peek()` -- La función se utiliza para comprobar si hay datos disponibles para ser leídos desde el servidor sin leerlos realmente.

 	- **Output**: Devuelve el siguiente byte de datos entrantes sin eliminarlo del búfer de recepción. Si no hay datos disponibles, devuelve -1.

- `WiFiClient::available()` -- La función se utiliza para comprobar cuántos bytes de datos están disponibles para ser leídos desde el servidor.

 	- **Output**: Devuelve un valor entero que representa el número de bytes disponibles para leer.

### Función de servidor WiFi

- `WiFiServer::stopAll()` -- Esta función es un método de la clase WiFiServer en la biblioteca WiFi de Arduino. Este método detiene todas las instancias de servidor que se han creado usando la clase WiFiServer. Es útil cuando se desea detener todos los servidores a la vez en lugar de llamar al método `stop()` para cada instancia individualmente.

- `WiFiServer::begin(uint16_t port, int enable)` -- La función se utiliza para iniciar un servidor en el puerto especificado. El servidor escuchará conexiones de clientes entrantes.

 	- **Input Parameters**
  		- **port**: El número de puerto en el que escuchar.
  		- **enable** (Optional): Una marca para indicar si el servidor debe habilitarse inmediatamente después de iniciarse. Esta marca se establece en true de forma predeterminada.

- `WiFiServer::hasClient()` -- La función se utiliza para comprobar si hay conexiones de clientes entrantes disponibles en el servidor. Esta función se puede utilizar en un bucle para comprobar continuamente si hay nuevas conexiones.

 	- **Output**: Devuelve un objeto WiFiClient si un cliente se ha conectado o un puntero NULL si no hay clientes esperando para conectarse.

- `WiFiServer::end()` -- La función se utiliza para detener el servidor y liberar los recursos asociados. Una vez llamada, el servidor ya no puede aceptar nuevas conexiones de clientes. Cualquier conexión de cliente existente permanecerá abierta hasta que sea cerrada por el cliente o el servidor. `WiFiServer::close()` y `WiFiServer::stop()` tienen la misma función.

### Funciones WiFi múltiples

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- Se utiliza para añadir un nuevo punto de acceso (AP) a la lista de AP disponibles a los que el objeto WiFiMulti intentará conectarse.

 	- **Input Parameters**
  		- **ssid**: Puntero al SSID (máx. 63 caracteres).
  		- **passphrase**: (para WPA2 mín. 8 caracteres, para abierto usar NULL).

 	- **Output**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- La función intenta conectarse a uno de los puntos de acceso guardados en orden secuencial hasta que se conecte correctamente a uno.

 	- **Input Parameters**
  		- **connectTimeout**: El parámetro especifica la cantidad máxima de tiempo de espera para una conexión en milisegundos. Si connectTimeout se establece en 0, la función no expirará y tratará de conectarse indefinidamente.

 	- **Output**: estado

## Ejemplos de uso de WiFi

A continuación, usaremos el XIAO ESP32-C5 para demostrar cómo utilizar algunas funciones básicas de Wi-Fi.

### Escanear red

El XIAO ESP32-C5 es compatible con Wi-Fi de doble banda de 2.4 GHz y 5 GHz, y puede escanear las redes Wi-Fi de 2.4 GHz y 5 GHz circundantes, así como sus intensidades de señal en modo de escaneo.

#### Programa

A continuación se muestra un programa de ejemplo para mostrarte cómo el XIAO ESP32-C5 escanea las redes Wi-Fi circundantes.

- Código de referencia

<details>

<summary>WiFiScan.ino</summary>

```cpp
/*
 *  This sketch demonstrates how to scan WiFi networks. For chips that support 5GHz band, separate scans are done for all bands.
 *  The API is based on the Arduino WiFi Shield library, but has significant changes as newer WiFi functions are supported.
 *  E.g. the return value of `encryptionType()` different because more modern encryption is supported.
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);
  // Enable Station Interface
  WiFi.STA.begin();
  Serial.println("Setup done");
}

void ScanWiFi() {
  Serial.println("Scan start");
  // WiFi.scanNetworks will return the number of networks found.
  int n = WiFi.scanNetworks();
  Serial.println("Scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    Serial.println("Nr | SSID                             | RSSI | CH | Encryption");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("open"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("unknown");
      }
      Serial.println();
      delay(10);
    }
  }

  // Delete the scan result to free memory for code below.
  WiFi.scanDelete();
  Serial.println("-------------------------------------");
}
void loop() {
  Serial.println("-------------------------------------");
  Serial.println("Default wifi band mode scan:");
  Serial.println("-------------------------------------");
#if ESP_IDF_VERSION >= ESP_IDF_VERSION_VAL(5, 4, 2)
  WiFi.setBandMode(WIFI_BAND_MODE_AUTO);
#endif
  ScanWiFi();
#if CONFIG_SOC_WIFI_SUPPORT_5G
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("2.4 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_2G_ONLY);
  ScanWiFi();
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("5 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_5G_ONLY);
  ScanWiFi();
#endif
  // Wait a bit before scanning again.
  delay(10000);
}
```

</details>

#### Presentación del efecto

- Después de cargar el programa, abre el Monitor Serie del Arduino IDE y se mostrará la información de las redes Wi-Fi escaneadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_1.png" style={{width:800, height:'auto'}}/></div>

### Conexión a una red Wi-Fi

Dentro de la cobertura Wi-Fi, puedes conectarte a una red Wi-Fi específica mediante el modo STA compatible con el XIAO ESP32-C5, siempre que conozcas el SSID y la PASSWORD de la red Wi-Fi de destino.

#### Programa

A continuación se proporciona un programa de ejemplo para mostrarte cómo el XIAO ESP32-C5 se conecta a una red Wi-Fi especificada.

:::tip
XIAO ESP32-C5 es compatible con Wi-Fi de doble banda (2.4 GHz y 5 GHz), lo que te permite elegir la conexión según tu red doméstica.
:::

- Código de referencia

```cpp
#include <WiFi.h>

// Replace with your network credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

void setup() {
    Serial.begin(115200);

    // Explicitly set mode to Station
    WiFi.mode(WIFI_STA);

    Serial.printf("Connecting to %s ", ssid);
    WiFi.begin(ssid, password);

    // Wait for connection
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("\nCONNECTED!");

    // Print connection details
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
    Serial.print("Subnet Mask: ");
    Serial.println(WiFi.subnetMask());
    Serial.print("Gateway IP: ");
    Serial.println(WiFi.gatewayIP());
    Serial.print("DNS IP: ");
    Serial.println(WiFi.dnsIP());

    // C5 Specific: Check which band and channel we are on
    Serial.print("Channel: ");
    Serial.println(WiFi.channel());
    Serial.print("RSSI (Signal Strength): ");
    Serial.println(WiFi.RSSI());
}

void loop() {
    // Check if WiFi is still connected
    if (WiFi.status() != WL_CONNECTED) {
        Serial.println("WiFi lost. Reconnecting...");
        WiFi.disconnect();
        WiFi.reconnect();
    }
    delay(5000);
}
```

#### Presentación del efecto

- Después de cargar el programa, abre el Monitor Serie del Arduino IDE y se mostrará información como la dirección IP de la red Wi-Fi conectada.
- Estoy conectado a la red de 5 GHz en mi entorno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_2.png" style={{width:800, height:'auto'}}/></div>

### Modo AP

El XIAO ESP32-C5 puede funcionar como un punto de acceso para que otros dispositivos se conecten. En otras palabras, puedes usar dispositivos con Wi-Fi para conectarte al XIAO ESP32-C5 sin conectarte a tu router.

En pocas palabras, cuando configuras el XIAO ESP32-C5 como un punto de acceso, creas su propia red Wi-Fi independiente, a la que los dispositivos Wi-Fi cercanos (estaciones) pueden conectarse (como tu smartphone o tu ordenador).

#### Programa

A continuación se presenta un programa de ejemplo para mostrarte cómo el XIAO ESP32-C5 crea un punto de acceso y permite que otros dispositivos se conecten a él.

- Código de referencia

```cpp
#include <WiFi.h>

const char* ap_ssid = "XIAO ESP32-C5";
const char* ap_password = "password1234";

int previous_station_count = 0;

void setup() {
    Serial.begin(115200);

    // Initialize built-in LED pin
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW); // Initial state: LED off

    // Set mode to Access Point
    WiFi.mode(WIFI_AP);

    // Configure AP
    // Arguments: SSID, Password, Channel (1-13 for 2.4G), Hidden (0/1), Max Connections
    // Note: Forcing 5GHz AP usually requires lower-level IDF calls in current Arduino Core,
    // so this will likely default to 2.4GHz.
    bool result = WiFi.softAP(ap_ssid, ap_password, 1, 0, 4);

    if (result) {
        Serial.println("AP Started Successfully");
    } else {
        Serial.println("AP Start Failed");
    }

    // Print IP Address of the AP (Default is usually 192.168.4.1)
    Serial.print("AP IP Address: ");
    Serial.println(WiFi.softAPIP());
}

void loop() {
    // Get current number of connected stations
    int current_station_count = WiFi.softAPgetStationNum();
    Serial.printf("Stations connected: %d\n", current_station_count);

    // Check if any device has connected or disconnected
    if (current_station_count > 0 && previous_station_count == 0) {
        // New device connected, turn on LED
        digitalWrite(LED_BUILTIN, HIGH);
        Serial.println("Device connected - LED ON");
    } else if (current_station_count == 0 && previous_station_count > 0) {
        // All devices disconnected, turn off LED
        digitalWrite(LED_BUILTIN, LOW);
        Serial.println("All devices disconnected - LED OFF");
    }

    previous_station_count = current_station_count;
    delay(2000);
}
```

#### Presentación del efecto

- Después de compilar y cargar el programa, puedes descubrir el punto de acceso AP mediante la función WLAN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_3.png" style={{width:800, height:'auto'}}/></div>

- Tras una conexión correcta, el Monitor Serie imprimirá la dirección IP y el LED USER integrado se encenderá simultáneamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_4.png" style={{width:800, height:'auto'}}/></div>

### Uso de WiFi y MQTT

El protocolo MQTT se utiliza ampliamente en dispositivos IoT, y el XIAO ESP32-C5 es compatible con este protocolo, lo que significa que puedes usar el XIAO ESP32-C5 para desarrollar muchos proyectos IoT interesantes.

#### Programa

A continuación se presentará un programa de referencia para mostrarte cómo usar el protocolo MQTT con el XIAO ESP32-C5.

- Instala la biblioteca `PubSubClient`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_1.png" style={{width:600, height:'auto'}}/></div>

- Código de referencia

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// Using a public MQTT broker for demonstration
const char* mqtt_server = "broker.emqx.io";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

// Callback function: Executed when a message is received
void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.print("] ");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}

void reconnect() {
    // Loop until we're reconnected
    while (!client.connected()) {
        Serial.print("Attempting MQTT connection...");
        String clientId = "ESP32C5Client-";
        clientId += String(random(0xffff), HEX);

        // Attempt to connect
        if (client.connect(clientId.c_str())) {
            Serial.println("connected");
            // Once connected, subscribe to a topic
            client.subscribe("esp32c5/test/topic");
        } else {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            delay(5000);
        }
    }
}

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nWiFi Connected");

    // Configure MQTT Server
    client.setServer(mqtt_server, mqtt_port);
    client.setCallback(callback);
}

void loop() {
    if (!client.connected()) {
        reconnect();
    }
    client.loop();

    // Publish a message every 2 seconds
    static unsigned long lastMsg = 0;
    unsigned long now = millis();
    if (now - lastMsg > 2000) {
        lastMsg = now;
        Serial.println("Publishing message...");
        client.publish("esp32c5/test/topic", "Hello from XIAO ESP32-C5");
    }
}
```

#### Presentación del efecto

- Descarga cualquier software que sea compatible con el cliente broker MQTTX; aquí se utiliza MQTTX  [MQTTx](https://mqttx.app/downloads)

- Abre MQTTX y añade la información del cliente. Aquí se utiliza la dirección de cliente predeterminada, por lo que solo necesitas añadir el ID de cliente `ESP32C5Client` y establecer el nombre del cliente de prueba; el resto de las configuraciones se pueden mantener por defecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_5.png" style={{width:800, height:'auto'}}/></div><br/>

- Sube el código y conéctate usando MQTTX. Después de una conexión exitosa, haz clic en `New Subscription` en el lado izquierdo para añadir una suscripción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_6.png" style={{width:800, height:'auto'}}/></div><br/>

- Configura la información de la suscripción: introduce `esp32c5/test/topic` y selecciona 0 o 1 para QoS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_7.png" style={{width:800, height:'auto'}}/></div><br/>

- Después de una configuración exitosa, podrás ver los mensajes publicados por el XIAO ESP32-C5 (actuando como cliente) cada 2 segundos. También puedes enviar mensajes al cliente después de seleccionar un tema, y el cliente los publicará al recibirlos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
broker.emqx.io es un broker público compartido por todos los usuarios. Cualquiera que se suscriba al mismo tema puede ver tus mensajes. Está destinado solo a fines de prueba y no es adecuado para transmitir datos sensibles.
:::

### WiFi y HTTP /HTTPS

- Puedes consultar el ejemplo que escribimos para el XIAO ESP32C3 para acceder a ChatGPT, que detalla cómo usar WiFiClient y HTTPClient: [Aprende a usar WiFiClient y HTTPClient en XIAO ESP32C3 - XIAO ESP32C3 y ChatGPT en acción](https://wiki.seeedstudio.com/es/xiaoesp32c3-chatgpt/)

- Si solo quieres explorar el uso sencillo de HTTP, también puedes seguir los pasos siguientes para realizar pruebas y verificación.

#### Programa

- Instala la biblioteca `HTTPClient`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_2.png" style={{width:600, height:'auto'}}/></div><br/>

- Código de referencia

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h> // Required for HTTPS

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// HTTPS Endpoint
const char* serverUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Root CA Certificate (Optional for simple testing if setInsecure is used)
// To be secure, you should use the actual root CA of the website.
// For this example, we will use setInsecure().

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nConnected");
}

void loop() {
    if ((WiFi.status() == WL_CONNECTED)) {

        // 1. Create WiFiClientSecure object
        WiFiClientSecure client;

        // IGNORE SSL certificate validation (Good for testing, NOT for production)
        client.setInsecure(); 

        // 2. Create HTTPClient object
        HTTPClient http;

        Serial.print("[HTTPS] begin...\n");

        // 3. Initialize connection
        if (http.begin(client, serverUrl)) { 
            Serial.print("[HTTPS] GET...\n");

            // 4. Send GET request
            int httpCode = http.GET();

            // 5. Check return code
            if (httpCode > 0) {
                Serial.printf("[HTTPS] GET... code: %d\n", httpCode);

                if (httpCode == HTTP_CODE_OK || httpCode == 301 || httpCode == 302) {
                    String payload = http.getString();
                    Serial.println(payload);
                }
            } else {
                Serial.printf("[HTTPS] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
            }

            // 6. Close connection
            http.end();
        } else {
            Serial.printf("[HTTPS] Unable to connect\n");
        }
    }

    delay(10000);
}
```

#### Presentación del efecto

:::tip
`https://jsonplaceholder.typicode.com` es un servicio gratuito de prueba de API REST simulada, diseñado específicamente para fines de desarrollo y prueba. No admite la modificación permanente ni la persistencia de datos reales.
:::

- Sube el código, luego puedes abrir `https://jsonplaceholder.typicode.com/todos/1` y la herramienta Serial Monitor en el IDE de Arduino para comprobar si la información es consistente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_9.png" style={{width:800, height:'auto'}}/></div>

### WiFi-Mesh

A continuación se muestra la introducción oficial de **ESP-WIFI-MESH** por parte de Espressif Systems:

ESP-WIFI-MESH es una red de comunicación inalámbrica con nodos organizados en una topología de malla utilizando la función AP-STA simultánea en los SoC de Espressif. Proporciona una red de autoformación y autorreparación, con facilidad de despliegue. La topología de red de ESP-WIFI-MESH puede escalar hasta 1000 nodos en áreas grandes, sin requerir ningún soporte específico de infraestructura Wi-Fi. ESP-WIFI-MESH también se puede utilizar para cubrir puntos ciegos de Wi-Fi en escenarios de despliegue doméstico donde la señal Wi-Fi no puede llegar.

Para obtener información más detallada, consulta el enlace oficial de Espressif Systems:

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

A continuación, te mostraré un ejemplo de ESP-Mesh, y para este ejemplo, necesitas preparar al menos dos dispositivos ESP32.

#### Programa

- Instala la biblioteca `Alteriom PainlessMesh`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_3.png" style={{width:600, height:'auto'}}/></div>

- Instala la biblioteca `AsyncTCP`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_4.png" style={{width:600, height:'auto'}}/></div>

- Código de referencia

```cpp
#include "painlessMesh.h"

#define   MESH_PREFIX     "ESP32_C5_MESH"
#define   MESH_PASSWORD   "mesh_password123"
#define   MESH_PORT       5555

painlessMesh  mesh;
Scheduler userScheduler; // to control your personal task

void sendMessage(); // Prototype

// Define a task to send messages every 1 second
Task taskSendMessage(1000, TASK_FOREVER, &sendMessage);

void sendMessage() {
    String msg = "Hello from node ";
    msg += mesh.getNodeId();
    mesh.sendBroadcast(msg);
    Serial.printf("Sent broadcast: %s\n", msg.c_str());
}

// Callback: When a message is received
void receivedCallback( uint32_t from, String &msg ) {
    Serial.printf("Received from %u msg=%s\n", from, msg.c_str());
}

// Callback: When a new connection is established
void newConnectionCallback(uint32_t nodeId) {
    Serial.printf("New Connection, nodeId = %u\n", nodeId);
}

// Callback: When connection changes
void changedConnectionCallback() {
    Serial.printf("Changed connections\n");
}

// Callback: Time adjustment
void nodeTimeAdjustedCallback(int32_t offset) {
    Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(), offset);
}

void setup() {
    Serial.begin(115200);

    // Debug messages
    mesh.setDebugMsgTypes( ERROR | STARTUP );  

    // Initialize Mesh
    mesh.init( MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT );

    // Register Callbacks
    mesh.onReceive(&receivedCallback);
    mesh.onNewConnection(&newConnectionCallback);
    mesh.onChangedConnections(&changedConnectionCallback);
    mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);

    // Add task to scheduler
    userScheduler.addTask( taskSendMessage );
    taskSendMessage.enable();
}

void loop() {
    // Keep the mesh network running
    mesh.update();
}
```

#### Presentación del efecto

- Sube el código a dos dispositivos XIAO ESP32-C5 y abre cualquier herramienta de puerto serie para comprobar los resultados.

El dispositivo 1 de XIAO ESP32-C5 inicia la formación de la red y envía mensajes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_10.png" style={{width:800, height:'auto'}}/></div><br/>

El dispositivo 2 de XIAO ESP32-C5 se une a la red y recibe los mensajes enviados desde el dispositivo 1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_11.png" style={{width:800, height:'auto'}}/></div>

### Ejemplo: Concentrador doméstico inteligente IoT

A partir de los ejemplos de Wi-Fi anteriores, ya debes haber dominado cómo usar Wi-Fi en el XIAO ESP32-C5. A continuación, se presentará un ejemplo para mostrarte cómo implementar un concentrador de control de hogar inteligente utilizando el modo Wi-Fi AP y servicios de red HTTP — específicamente, cómo usar el XIAO ESP32-C5 como un concentrador de control de hogar inteligente para monitorizar el estado de tu hogar.

- Instala la biblioteca `ESPAsyncWebServer`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_5.png" style={{width:600, height:'auto'}}/></div><br/>

- Sube el código y conéctate al punto de acceso `XIAO ESP32-C5`.

<details>

<summary>Código de referencia</summary>

```cpp
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <DNSServer.h>

const char* ssid = "XIAO ESP32-C5";  // Hotspot name
const char* password = "12345678";  // Hotspot password (empty for no password, configurable)

DNSServer dnsServer;
AsyncWebServer server(80);

// HTML content for temporary website (You can modify the content here, e.g., add redirect to external website)
// const char index_html[] PROGMEM = R"rawliteral(
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Temporary Website</title>
//     <meta charset="UTF-8">
//     <!-- Optional: Add automatic redirect to external website -->
//     <!-- <meta http-equiv="refresh" content="5;url=https://example.com"> -->
// </head>
// <body>
//     <h1>Welcome to XIAO ESP32-C5 Temporary Website!</h1>
//     <p>You have connected to XIAO-ESP32-C5 hotspot. This is custom content.</p>
//     <form action="/" method="POST">
//         <input type="submit" value="Continue">
//     </form>
// </body>
// </html>
// )rawliteral";

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>XIAO ESP32-C5 Control Center</title>
  <style>
    :root {
      --bg-color: #121212;
      --card-bg: #1e1e1e;
      --text-main: #e0e0e0;
      --text-sub: #a0a0a0;
      --accent: #00e5ff; /* Neon Blue */
      --active: #00ff9d; /* Active Green */
      --danger: #ff4081; /* Warning Red */
    }

    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      margin: 0;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    h1 {
      font-weight: 300;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
      text-align: center;
    }

    p.subtitle {
      color: var(--text-sub);
      font-size: 0.9rem;
      margin-top: 0;
      margin-bottom: 30px;
      text-align: center;
    }

    /* Container Layout */
    .container {
      width: 100%;
      max-width: 400px; /* Suitable width for mobile devices */
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Status Panel */
    .status-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .card {
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 15px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      border: 1px solid #333;
      transition: transform 0.2s;
    }

    .card:active {
      transform: scale(0.98);
    }

    .card-icon {
      font-size: 24px;
      margin-bottom: 5px;
      display: block;
    }

    .card-value {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--accent);
    }

    .card-label {
      font-size: 0.8rem;
      color: var(--text-sub);
    }

    /* Control Button Area */
    .control-group {
      background-color: var(--card-bg);
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #333;
    }

    .control-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #333;
    }

    .control-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    /* Switch Style */
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 26px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #333;
      transition: .4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: var(--accent);
      box-shadow: 0 0 10px var(--accent);
    }

    input:checked + .slider:before {
      transform: translateX(24px);
    }

    /* Main Button */
    .main-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(45deg, var(--accent), #00b8d4);
      border: none;
      border-radius: 30px;
      color: #000;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .main-btn:active {
      opacity: 0.9;
      transform: scale(0.98);
    }

  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>XIAO ESP32-C5</h1>
      <p class="subtitle">IoT Smart Home Hub</p>
    </header>

    <div class="status-grid">
      <div class="card">
        <span class="card-icon">📡</span>
        <div class="card-value">Online</div>
        <div class="card-label">System Status</div>
      </div>
      <div class="card">
        <span class="card-icon">🌡️</span>
        <div class="card-value" id="temp-val">26.5°C</div>
        <div class="card-label">Indoor Temperature</div>
      </div>
      <div class="card">
        <span class="card-icon">💧</span>
        <div class="card-value">58%</div>
        <div class="card-label">Air Humidity</div>
      </div>
      <div class="card">
        <span class="card-icon">⏱️</span>
        <div class="card-value">12ms</div>
        <div class="card-label">Latency</div>
      </div>
    </div>

    <div class="control-group">
      <div class="control-item">
        <span>Living Room Main Light</span>
        <label class="switch">
          <input type="checkbox" id="btn-light" onchange="toggleDevice('light', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Air Purifier</span>
        <label class="switch">
          <input type="checkbox" id="btn-fan" onchange="toggleDevice('fan', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Auto Mode</span>
        <label class="switch">
          <input type="checkbox" checked onchange="toggleDevice('auto', this)">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <form action="/" method="POST">
       <button type="submit" class="main-btn">Enter Advanced Settings</button>
    </form>

  </div>

  <script>
    // Simple JavaScript for demo interaction
    function toggleDevice(device, element) {
      var state = element.checked ? "ON" : "OFF";
      console.log(device + " is now " + state);

      // You can add fetch request to send to ESP32 here
      // fetch('/toggle?device=' + device + '&state=' + state);
    }

    // Simulate dynamic data fluctuation effect
    setInterval(() => {
        const temp = 26 + (Math.random() * 0.5);
        document.getElementById('temp-val').innerText = temp.toFixed(1) + "°C";
    }, 3000);
  </script>
</body>
</html>
)rawliteral";

// Handle all requests and redirect to temporary page
class CaptiveRequestHandler : public AsyncWebHandler {
public:
    CaptiveRequestHandler() {}
    virtual ~CaptiveRequestHandler() {}

    bool canHandle(AsyncWebServerRequest *request) {
        return true;  // Handle all requests
    }

    void handleRequest(AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);  // Return HTML content
    }
};

void setup() {
    Serial.begin(115200);
    delay(10);

    // Set to AP (Access Point) mode
    WiFi.mode(WIFI_AP);
    WiFi.softAP(ssid, password);

    Serial.println("Hotspot created: " + String(ssid));
    Serial.print("IP Address: ");
    Serial.println(WiFi.softAPIP());

    // Start DNS server, redirect all domains to local IP
    dnsServer.start(53, "*", WiFi.softAPIP());

    // Configure Web Server: redirect all not found requests to temporary page
    server.addHandler(new CaptiveRequestHandler()).setFilter(ON_AP_FILTER);  // Only in AP mode
    server.onNotFound([](AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);
    });

    server.begin();
    Serial.println("Web Server started");

    server.on("/toggle", HTTP_GET, [](AsyncWebServerRequest *request){
    String device = request->getParam("device")->value();
    String state = request->getParam("state")->value();

    Serial.print("Device: ");
    Serial.print(device);
    Serial.print(" State: ");
    Serial.println(state);

    if(device == "light" && state == "ON") {
        digitalWrite(LED_BUILTIN, LOW); // Assume LOW level turns on the LED
    } else {
        digitalWrite(LED_BUILTIN, HIGH);
    }

    request->send(200, "text/plain", "OK");
});
}

void loop() {
    dnsServer.processNextRequest();  // Process DNS requests
    delay(10);
}
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_12.png" style={{width:800, height:'auto'}}/></div><br/>

- Introduce la dirección IP para ir a la página web.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_13.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Los controles y sensores que se muestran en la página web son personalizables. Puedes añadir otros nuevos y modificar la página web generada según tus necesidades específicas. Para referencia: [ESPAsyncWebServer](https://github.com/lacamera/ESPAsyncWebServer)
:::

:::tip
El punto de acceso (AP) generado por la XIAO ESP32-C5 no puede conectarse a Internet de forma predeterminada. Si se requiere conectividad a Internet, puedes adoptar cualquiera de los dos métodos siguientes:<br/>
Método 1: Conecta la XIAO ESP32-C5 a Home Assistant. Para referencia: [Connecting XIAO ESP32-C5 to Home Assistant](https://wiki.seeedstudio.com/es/xiao_esp32c5_homeassistant/)<br/>
Método 2: Utiliza un servicio MQTT para subir datos a un servidor en la nube. Ten en cuenta que este método puede requerir la compra de una cierta cantidad de créditos de servicio. Para referencia: [Goole Cloud](https://cloud.google.com/)<br/>
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
