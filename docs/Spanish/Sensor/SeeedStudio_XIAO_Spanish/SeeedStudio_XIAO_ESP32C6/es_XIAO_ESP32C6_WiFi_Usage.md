---
description: WiFi usage with Seeed Studio XIAO ESP32C6.
title: Uso de WiFI con XIAO ESP32C6 de Seeed Studio
keywords:
  - esp32c6
  - xiao
  - arduino
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_wifi_usage_esp32c6
sidebar_position: 3
last_update:
  date: 02/08/2024
  author: Guillermo
---

# Uso de WiFI con XIAO ESP32C6 de Seeed Studio

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

La XIAO ESP32C6 de Seeed Studio es una placa de desarrollo embebida que ofrece un rendimiento excepcional en RF, gracias a su soporte para Wifi de 2.4GHz - 802.11b/g/n y Bluetooth de Baja Energía (BLE) 5.0, con comunicación inalámbrica dual. Esta capacidad permite que el XIAO ESP32C6 proporcione conectividad inalámbrica confiable y de alta velocidad para una amplia gama de aplicaciones de Internet de las Cosas (IoT). La placa cuenta con una antena cerámica integrada, lo que elimina la necesidad de una antena externa y simplifica el proceso de diseño. El chip ESP32C6 también ofrece un bajo consumo de energía, lo que lo hace adecuado para dispositivos IoT alimentados por batería. En este tutorial, exploraremos cómo aprovechar las capacidades de Wi-Fi del XIAO ESP32C6 para conectarse a una red Wi-Fi y realizar tareas básicas de red.

:::tip
El GPIO14 se utiliza para seleccionar entre la antena integrada o una antena externa. Antes de eso, debes configurar el GPIO3 en nivel bajo para activar esta función. Si el GPIO14 se configura en nivel bajo, se utiliza la antena integrada; si se configura en nivel alto, se utiliza la antena externa. El valor predeterminado es nivel bajo. Si deseas configurarlo en nivel alto, puedes referirte al siguiente código.
```cpp
void setup() {
  pinMode(3, OUTPUT);
  digitalWrite(3, LOW); // activar esta función
  delay(100);
  pinMode(14, OUTPUT); 
  digitalWrite(14, HIGH); // usar antena externa
}
```
:::

### Las interfaces comunes de la biblioteca WiFi

El ESP32-C6 ofrece una amplia gama de funciones para redes WiFi. Generalmente, podemos ver las funciones de la biblioteca WiFi en el paquete incorporado del ESP32 y elegir la función correspondiente para lograr la funcionalidad deseada. A continuación, listamos algunas interfaces comúnmente usadas y describimos su uso.

### Función WiFi genérica

- `WiFiGenericClass::getHostname()` -- Es una función en la biblioteca WiFi para ESP32 que devuelve el nombre del host del dispositivo como una cadena. El nombre del host es un nombre único que identifica el dispositivo en la red. Esta función recupera el nombre del host que se configuró previamente usando `WiFiGenericClass::setHostname()`. Si no se ha configurado un nombre de host, se devolverá el nombre de host predeterminado.

- `WiFiGenericClass::persistent(bool persistent)` -- Es un método que se usa para habilitar o deshabilitar el modo persistente de la biblioteca WiFi del ESP32. Cuando el modo persistente está habilitado, la configuración Wi-Fi se almacena en memoria no volátil (NVM) y se mantiene incluso después de un ciclo de energía o un reinicio. Cuando el modo persistente está deshabilitado, la configuración se almacena en RAM y se pierde después de un ciclo de energía o un reinicio.

	- **Parámetros de entrada**
		- **persistent**: Si el argumento es verdadero, se habilita el modo persistente. Si el argumento es falso, se deshabilita el modo persistente.

- `WiFiGenericClass::enableLongRange(bool enable)` -- La función se usa para habilitar o deshabilitar la función de Largo Alcance (LR) del módulo Wi-Fi. Cuando está habilitada, la función LR permite que el módulo se conecte a redes Wi-Fi que están más lejos de lo habitual, pero con tasas de datos más bajas.

	- **Parámetros de entrada**
		- **enable**: El parámetro debe configurarse en verdadero para habilitar la función y en falso para deshabilitarla.

- `WiFiGenericClass::mode(wifi_mode_t m)` -- La función se usa para configurar el modo Wi-Fi del dispositivo.

	- **Parámetros de entrada**
		- **m**: El parámetro m especifica el modo a configurar, que puede ser uno de los siguientes valores definidos en el enumerado wifi_mode_t:
			- **WIFI_MODE_NULL**: Deshabilita tanto los modos de estación Wi-Fi como el de punto de acceso.
			- **WIFI_MODE_STA**: Habilita el modo estación Wi-Fi para conectarse a una red Wi-Fi existente.
			- **WIFI_MODE_AP**: Habilita el modo punto de acceso para crear una nueva red Wi-Fi.
			- **WIFI_MODE_APSTA**: Habilita tanto los modos estación Wi-Fi como el de punto de acceso.

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- La función configura el modo de ahorro de energía para el módulo Wi-Fi.

	- **Parámetros de entrada**
		- **sleepType**: El parámetro sleepType es un tipo enumerado que especifica el tipo de modo de ahorro de energía a utilizar. Hay tres tipos de sueño posibles:
			- **WIFI_PS_NONE**: Este es el modo de sueño predeterminado, en el que el módulo Wi-Fi no entra en modo de ahorro de energía.
			- **WIFI_PS_MIN_MODEM**: En este modo, el módulo Wi-Fi apaga su módem mientras mantiene la conexión con el punto de acceso (AP).
			- **WIFI_PS_MAX_MODEM**: En este modo, el módulo Wi-Fi apaga tanto el módem como la estación, lo que resulta en una desconexión del AP.

### Funciones STA

- `WiFiSTAClass::status()` -- Devuelve el estado de la conexión.

	- **Salida**: uno de los valores definidos en wl_status_t.
		- **WL_NO_SHIELD**: Este código de estado indica que el módulo Wi-Fi no está presente.
    	- **WL_IDLE_STATUS**: Este código de estado indica que el módulo Wi-Fi no está realizando ninguna operación.
    	- **WL_NO_SSID_AVAIL**: Este código de estado indica que no se encontraron redes Wi-Fi durante el escaneo.
    	- **WL_SCAN_COMPLETED**: Este código de estado indica que el escaneo Wi-Fi se completó correctamente.
    	- **WL_CONNECTED**: Este código de estado indica que el ESP32 está conectado exitosamente a una red Wi-Fi.
    	- **WL_CONNECT_FAILED**: Este código de estado indica que la conexión a la red Wi-Fi falló.
    	- **WL_CONNECTION_LOST**: Este código de estado indica que la conexión con la red Wi-Fi se perdió.
    	- **WL_DISCONNECTED**: Este código de estado indica que el ESP32 estuvo conectado previamente a una red Wi-Fi, pero no está actualmente conectado a ninguna red.

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- Inicia la conexión WiFi con un AP WPA2 Enterprise.

	- **Parámetros de entrada** (Opcionales)
		- **ssid**: Puntero a la cadena SSID.
		- **method**: El método de autenticación de WPA2 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS).
		- **wpa2_identity**: Puntero a la entidad.
		- **wpa2_username**: Puntero al nombre de usuario.
		- **wpa2_password**: Puntero a la contraseña.
		- **ca_pem**: Puntero a una cadena con el contenido de un archivo .pem con el certificado de CA.
		- **client_crt**: Puntero a una cadena con el contenido de un archivo .crt con el certificado del cliente.
		- **client_key**: Puntero a una cadena con el contenido de un archivo .key con la clave del cliente.
		- **channel**: Opcional. Canal del AP.
		- **bssid**: Opcional. BSSID / MAC del AP.
		- **connect**: Opcional. Llamar a conectar.

- `WiFiSTAClass::reconnect()` -- Forzará una desconexión y luego comenzará a reconectar con el AP.

	- **Salida**: Verdadero/Falso.

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- Se desconecta de la red.

	- **Parámetros de entrada**
		- **wifioff**: wifioff `true` para apagar el radio Wi-Fi.
		- **eraseap**: eraseap `true` para borrar la configuración del AP de la memoria NVS.
	
	- **Salida**: Verdadero/Falso.

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- Cambia la configuración IP deshabilitando el cliente DHCP.

	- **Parámetros de entrada**
		- **local_ip**: Configuración de IP estática.
		- **gateway**: Configuración de puerta de enlace estática.
		- **subnet**: Configuración de máscara de subred estática.
		- **dns1**: Servidor DNS estático 1.
		- **dns2**: Servidor DNS estático 2.

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- Desaprobado. Configura la estación ESP32 para conectarse automáticamente al AP (que está grabado) cuando se enciende. Conectar automáticamente por defecto.

	- **Parámetros de entrada**
		- **autoConnect**: bool autoConnect.

	- **Salida**: Falso.

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- Espera a que la conexión WiFi llegue a un resultado.

	- **Parámetros de entrada**
		- **timeoutLength**: El parámetro especifica el tiempo máximo para esperar a que se establezca una conexión, en milisegundos.

	- **Salida**: uno de los valores definidos en wl_status_t.

- `WiFiSTAClass::localIP()` -- Obtiene la dirección IP de la interfaz de estación.

	- **Salida**: Dirección IP de la estación.

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- Obtiene la dirección MAC de la interfaz de estación.

	- **Parámetros de entrada**
		- **mac** (Opcional): Puntero a un arreglo uint8_t con longitud WL_MAC_ADDR_LENGTH.

	- **Salida**: Puntero a uint8_t *.

- `WiFiSTAClass::SSID()` -- Devuelve el SSID actual asociado con la red.

	- **Salida**: SSID.

- `WiFiSTAClass::RSSI(void)` -- Devuelve el RSSI de la red actual.

	- **Salida**: RSSI.

### Funciones de AP

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- Esta es una función de la biblioteca WiFi del ESP32-C6. Se utiliza para configurar un SoftAP (punto de acceso software), lo que permite que otros dispositivos se conecten al ESP32-C6 y accedan a sus recursos.

	- **Parámetros de entrada**
		-  **ssid**:              Apunta al SSID (máximo 63 caracteres).
 		-  **passphrase**:        (Para WPA2 mínimo 8 caracteres, para redes abiertas usar NULL).
 		-  **channel**:           Número de canal WiFi, 1 - 13.
 		-  **ssid_hidden**:       Ocultamiento de la red (0 = SSID visible, 1 = SSID oculto).
 		-  **max_connection**:    Máximo número de clientes conectados simultáneamente, 1 - 4.

	- **Salida**: Verdadero/Falso.

- `WiFiAPClass::softAPgetStationNum()` -- Obtiene la cantidad de estaciones/clientes conectados a la interfaz softAP.

	- **Salida**: Número de estaciones.

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- Función para configurar el SoftAP.

	- **Parámetros de entrada**
		- **local_ip**:      IP del punto de acceso.
		- **gateway**:       IP del gateway.
		- **subnet**:        Máscara de subred.

	- **Salida**: Verdadero/Falso.

- `WiFiAPClass::softAPIP()` -- Obtiene la dirección IP de la interfaz softAP.

	- **Salida**: Dirección IP de softAP.

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- Obtiene la dirección MAC de la interfaz softAP.

	- **Parámetros de entrada**
		- **mac** (Opcional):   Apunta a un arreglo de uint8_t con longitud WL_MAC_ADDR_LENGTH.

	- **Salida**: Apunta a uint8_t* o String mac.

### Función de Escaneo WiFi

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- Inicia el escaneo de redes WiFi disponibles.

	- **Parámetros de entrada**
		- **async**: El parámetro es un valor booleano que determina si el escaneo debe realizarse de manera asincrónica. Si se establece en verdadero, la función devuelve inmediatamente y los resultados del escaneo pueden obtenerse más tarde llamando a la función getScanResults(). Si se establece en falso, la función bloqueará hasta que el escaneo esté completo.
		- **show_hidden**: El parámetro es un valor booleano que determina si la función debe incluir redes ocultas en los resultados del escaneo.
		- **passive**: El parámetro es un valor booleano que determina si la función debe realizar un escaneo pasivo. Si se establece en verdadero, la función no transmitirá paquetes durante el escaneo, lo que puede hacer que dure más, pero puede ser útil en ciertas situaciones.
		- **max_ms_per_chan**: El parámetro es el tiempo máximo para escanear cada canal en milisegundos.
		- **channel**: El parámetro es el canal Wi-Fi a escanear. Si se establece en 0, la función escaneará todos los canales disponibles.
		- **ssid**: El parámetro es un puntero a una cadena terminada en null que contiene el SSID de la red a escanear. Si se establece en nullptr, la función escaneará todas las redes disponibles.
		- **bssid**: El parámetro es un puntero a un arreglo de 6 bytes que contiene la dirección MAC del punto de acceso a escanear. Si se establece en nullptr, la función escaneará todos los puntos de acceso.

	- **Salida**: El valor devuelto por esta función es un número entero que indica la cantidad de redes escaneadas.

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- Carga toda la información de una red escaneada en los parámetros de punteros.

	- **Parámetros de entrada**
		- **i**: La función se usa para recuperar información sobre una red escaneada en un índice especificado i.
		- **ssid**: El parámetro ssid es una referencia a una variable String donde la función almacena el SSID de la red.
		- **encType**: El parámetro encType es una referencia a una variable uint8_t donde la función almacena el tipo de cifrado de la red (0 = abierta, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK).
		- **rssi**: El parámetro rssi es una referencia a una variable int32_t donde la función almacena el indicador de la intensidad de la señal recibida (RSSI) de la red.
		- **bssid**: El parámetro bssid es una referencia a un puntero uint8_t* donde la función almacena el BSSID (dirección MAC) de la red.
		- **channel**: El parámetro channel es una referencia a una variable int32_t donde la función almacena el número de canal de la red.

	- **Salida**: Verdadero/Falso.

- `WiFiScanClass::SSID(uint8_t i)` -- Devuelve el SSID descubierto durante el escaneo de redes.

	- **Parámetros de entrada**
		- **i**: Especifica de qué red se desea obtener la información.

	- **Salida**: Cadena SSID del ítem especificado en la lista de redes escaneadas.

- `WiFiScanClass::RSSI(uint8_t i)` -- Devuelve el RSSI de las redes descubiertas durante el escaneo.

	- **Parámetros de entrada**
		- **i**: Especifica de qué red se desea obtener la información.

	- **Salida**: Valor firmado de RSSI del ítem especificado en la lista de redes escaneadas.

### Funciones de WiFi Cliente

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- Esta función se usa en la biblioteca WiFiClient para conectarse a una dirección IP remota y un puerto con un valor de tiempo de espera especificado.

	- **Parámetros de entrada**
		- **ip**: La dirección IP del servidor al que se conectará.
		- **port**: El número de puerto del servidor al que se conectará.
		- **timeout** (Opcional): El tiempo máximo que se esperará para establecer la conexión, en milisegundos. Si la conexión no se establece dentro de este tiempo, la función devolverá un error. Si el tiempo de espera se establece en 0, la función esperará indefinidamente para establecer la conexión.

- `WiFiClient::stop()` -- Esta función se usa para desconectar al cliente del servidor y liberar el socket/puerto utilizado por el cliente. Una vez que se llama a esta función, el cliente ya no puede enviar ni recibir datos.

- `WiFiClient::setTimeout(uint32_t seconds)` -- Esta función establece el número máximo de segundos que el cliente esperará para que se establezca una conexión o para recibir datos. Si la conexión o la transferencia de datos tarda más que el tiempo de espera especificado, la conexión se cerrará.

	- **Parámetros de entrada**
		- **seconds**: El número de segundos para el tiempo de espera.

- `WiFiClient::write(uint8_t data)` -- Escribe un solo byte de datos en el servidor conectado a través de la instancia WiFiClient. O `WiFiClient::write(const uint8_t *buf, size_t size)`.

	- **Parámetros de entrada**
		- **data**: Es un solo byte de datos que debe enviarse a través de la conexión de red establecida.

- `WiFiClient::read()` -- La función lee un solo byte de datos entrantes del servidor conectado. Devuelve el byte leído como un valor entero. Si no hay datos disponibles, devuelve -1. O `read(uint8_t *buf, size_t size)`.

	- **Salida**: Un valor entero que indica la cantidad de bytes recibidos. Si el valor de retorno es 0, significa que el servidor ha cerrado la conexión.

- `WiFiClient::peek()` -- La función se usa para verificar si hay datos disponibles para leer del servidor sin leerlos realmente.

	- **Salida**: Devuelve el siguiente byte de datos entrantes sin eliminarlo del búfer de recepción. Si no hay datos disponibles, devuelve -1.

- `WiFiClient::available()` -- La función se usa para verificar cuántos bytes de datos están disponibles para leer desde el servidor.

	- **Salida**: Devuelve un valor entero que representa la cantidad de bytes disponibles para ser leídos.

### Función de WiFi Server

- `WiFiServer::stopAll()` -- Esta función es un método de la clase WiFiServer en la biblioteca WiFi de Arduino. Este método detiene todas las instancias de servidor creadas usando la clase WiFiServer. Es útil cuando se quiere detener todos los servidores a la vez en lugar de llamar al método `stop()` para cada instancia individualmente.

- `WiFiServer::begin(uint16_t port, int enable)` -- Esta función se usa para iniciar un servidor en el puerto especificado. El servidor escuchará las conexiones entrantes de clientes.

	- **Parámetros de entrada**
		- **port**: El número de puerto para escuchar.
		- **enable** (Opcional): Una bandera que indica si el servidor debe habilitarse inmediatamente después de ser iniciado. Esta bandera está establecida en verdadero por defecto.

- `WiFiServer::hasClient()` -- La función se usa para verificar si hay conexiones entrantes de clientes disponibles en el servidor. Esta función puede usarse en un bucle para comprobar continuamente las nuevas conexiones.

	- **Salida**: Devuelve un objeto WiFiClient si un cliente se ha conectado o un puntero NULL si no hay clientes esperando para conectarse.

- `WiFiServer::end()` -- Esta función se usa para detener el servidor y liberar los recursos asociados. Una vez llamada, el servidor ya no podrá aceptar nuevas conexiones de clientes. Cualquier conexión de cliente existente permanecerá abierta hasta que se cierre por parte del cliente o del servidor. `WiFiServer::close()` y `WiFiServer::stop()` tienen la misma función.

### Funciones Múltiples de WiFi

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- Se usa para agregar un nuevo punto de acceso (AP) a la lista de APs disponibles a los que el objeto WiFiMulti intentará conectarse.

	- **Parámetros de entrada**
		- **ssid**: Puntero al SSID (máximo 63 caracteres).
		- **passphrase**: (para WPA2 mínimo 8 caracteres, para redes abiertas usa NULL).

	- **Salida**: Verdadero/Falso.

- `WiFiMulti::run(uint32_t connectTimeout)` -- La función intenta conectarse a uno de los puntos de acceso guardados de manera secuencial hasta que se conecte con éxito a uno.

	- **Parámetros de entrada**
		- **connectTimeout**: El parámetro especifica el tiempo máximo de espera para una conexión, en milisegundos. Si connectTimeout se establece en 0, la función no tendrá tiempo de espera y continuará intentando conectarse indefinidamente.

	- **Salida**: Estado.

## Escanear redes WiFi cercanas

El siguiente es un programa de ejemplo que usa el XIAO ESP32C6 para escanear redes WiFi cercanas.

:::info
El XIAO C6 solo soporta la banda de `2.4GHz`.
:::

En tu IDE de Arduino, ve a **Archivo > Ejemplos > WiFi > WiFiScan**. Esto cargará un sketch que escaneará las redes WiFi dentro del rango de tu XIAO ESP32C6.

Esto puede ser útil para verificar si la red WiFi a la que intentas conectar está dentro del rango de tu placa u otras aplicaciones. Tu proyecto de WiFi podría no funcionar a menudo porque puede no poder conectarse a tu router debido a una señal WiFi insuficiente.

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);

  // Establecer WiFi en modo estación y desconectarse de un AP si estaba previamente conectado
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Configuración completa");
}

void loop() {
  Serial.println("Iniciando escaneo Wi-Fi...");

  // WiFi.scanNetworks devolverá el número de redes encontradas
  int numNetworks = WiFi.scanNetworks();
  Serial.println("Escaneo completo");

  if (numNetworks == 0) {
    Serial.println("No se encontraron redes");
  } else {
    Serial.print(numNetworks);
    Serial.println(" redes encontradas");
    for (int i = 0; i < numNetworks; i++) {
      // Imprimir SSID y RSSI para cada red encontrada
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

  // Esperar un poco antes de volver a escanear
  delay(5000);
}
```

Carga y ejecuta el programa, y deberías ver que el monitor serie imprime las redes Wi-Fi cercanas que pueden ser detectadas por el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Lo primero que debes hacer para usar las funcionalidades Wi-Fi del XIAO ESP32C6 es incluir la biblioteca **WiFi.h** en tu código, de la siguiente manera:

```cpp
#include <WiFi.h>
```

El XIAO ESP32C6 puede funcionar como Estación Wi-Fi, Punto de Acceso o ambos. Para configurar el modo Wi-Fi, usa `WiFi.mode()` y establece el modo deseado como argumento.

```cpp
WiFi.mode(WIFI_STA);
```

Cuando el ESP32 está configurado como estación Wi-Fi, puede conectarse a otras redes (como tu enrutador).

`WiFi.scanNetworks()` devuelve el número de redes encontradas. Después del escaneo, puedes acceder a los parámetros de cada red. `WiFi.SSID()` imprime el SSID de una red específica.

`WiFi.RSSI()` devuelve el RSSI de esa red. RSSI significa Indicador de Fuerza de Señal Recibida. Es una medida estimada del nivel de potencia que un dispositivo cliente RF está recibiendo de un punto de acceso o enrutador.

Finalmente, `WiFi.encryptionType()` devuelve el tipo de encriptación de la red. Ese ejemplo específico coloca un * en el caso de redes abiertas. Sin embargo, esa función puede devolver una de las siguientes opciones (no solo redes abiertas):
- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## Conectar a una red Wi-Fi

Para conectar el ESP32 a una red Wi-Fi específica, debes conocer su SSID y contraseña. Además, esa red debe estar dentro del alcance de WiFi del ESP32 (para verificar eso, puedes usar el ejemplo anterior para escanear redes Wi-Fi).

El siguiente es un ejemplo de cómo usar el XIAO ESP32C6 para conectarse a una red especificada. Donde la función `initWiFi()` cumple el papel de conectar a la red en el programa.

> Para conectarte a una red Wi-Fi, puedes usar la función `WiFi.begin()`. Esta función toma el SSID y la contraseña de la red como argumentos.

```cpp
#include "WiFi.h"

// Reemplaza con las credenciales de tu red
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);  // Establece el modo Wi-Fi como estación
  WiFi.begin(ssid, password);  // Conecta al Wi-Fi con el SSID y la contraseña proporcionados
  Serial.print("Conectando a WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {  // Espera hasta que la conexión sea exitosa
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());  // Imprime la dirección IP local del ESP32
}

void setup() {
  Serial.begin(115200);  // Inicializa la comunicación serial

  // Establece Wi-Fi en modo estación y desconecta de una AP si estaba previamente conectado
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();  // Llama a la función para conectar al Wi-Fi
}

void loop() {
  // Tu código aquí
}
```

Sube y ejecuta el programa para abrir el monitor serial. Al conectar con la red, el monitor serial imprimirá una cadena de puntos hasta que la conexión sea exitosa, luego se imprimirá la dirección IP del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Echemos un vistazo rápido a cómo funciona esta función.

Primero, establece el modo WiFi. Si el XIAO ESP32C6 se conectará a otra red (punto de acceso/hotspot), debe estar en modo estación.

```cpp
WiFi.mode(WIFI_STA);
```

Luego, usa `WiFi.begin()` para conectarte a una red. Debes pasar como argumentos el SSID de la red y su contraseña:

```cpp
WiFi.begin(ssid, password);
```

Conectarse a una red WiFi puede tomar un tiempo, por lo que generalmente se agrega un bucle `while` que sigue verificando si la conexión ya se ha establecido utilizando `WiFi.status()`. Cuando la conexión se establece correctamente, devuelve `WL_CONNECTED`.

Si deseas obtener la intensidad de la señal de WiFi, puedes simplemente llamar a `WiFi.RSSI()` después de una conexión WiFi.

## Uso de softAP

Si configuras el XIAO ESP32C6 como un punto de acceso (hotspot), podrás conectarte al ESP32 utilizando cualquier dispositivo con capacidad WiFi sin necesidad de conectarte a tu router.

En pocas palabras, cuando configuras el XIAO ESP32C6 como un punto de acceso, creas su propia red WiFi y los dispositivos WiFi cercanos (estaciones) pueden conectarse a ella (como tu smartphone o tu computadora).

En tu Arduino IDE, ve a **Archivo > Ejemplos > WiFi > WiFiAccessPoint**. Este ejemplo te mostrará cómo usar el XIAO ESP32C6 para crear un hotspot y controlar el interruptor de encendido/apagado de una luz a través de una página web simple conectada al hotspot.

:::note
Aquí tienes una breve explicación de los puntos mencionados:

1. **Cambios en el programa de ejemplo**: Modificaste el ejemplo comentando `LED_BUILTIN`, ya que el XIAO ESP32C6 tiene su propio LED indicador, eliminando la necesidad de uno externo.

2. **Comportamiento del LED**: El LED del usuario en el XIAO ESP32C6 se apagará cuando el pin del LED del usuario se establezca en un nivel alto y se encenderá cuando se establezca en un nivel bajo. Esta inversión del comportamiento del control del LED se debe a la forma en que está configurado el pin.

3. **Modificar las credenciales del hotspot**: También ajustaste el nombre del hotspot y la contraseña en el programa para que se adapten a tus preferencias, permitiendo que los dispositivos se conecten a tu hotspot personalizado.
:::

```cpp
/*
  WiFiAccessPoint.ino crea un punto de acceso WiFi y proporciona un servidor web en él.

  Pasos:
  1. Conéctate al punto de acceso "yourAp"
  2. Dirige tu navegador web a http://192.168.4.1/H para encender el LED o http://192.168.4.1/L para apagarlo
     O
     Ejecuta TCP crudo "GET /H" y "GET /L" en el terminal PuTTY con 192.168.4.1 como dirección IP y 80 como puerto

  Creado para arduino-esp32 el 04 de julio de 2018
  por Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // Establece el pin GPIO donde conectaste tu LED de prueba o comenta esta línea si tu placa de desarrollo tiene un LED incorporado

// Establece estas credenciales con las que deseas.
const char *ssid = "XIAO_ESP32C6";
const char *password = "password";

WiFiServer server(80);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configurando el punto de acceso...");

  // Puedes eliminar el parámetro de contraseña si deseas que el AP sea abierto.
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("Dirección IP del AP: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Servidor iniciado");
}

void loop() {
  WiFiClient client = server.available();   // escuchar a los clientes entrantes

  if (client) {                             // si recibes un cliente,
    Serial.println("Nuevo Cliente.");        // imprime un mensaje en el puerto serie
    String currentLine = "";                // crea una cadena para contener los datos entrantes del cliente
    while (client.connected()) {            // bucle mientras el cliente esté conectado
      if (client.available()) {             // si hay bytes para leer del cliente,
        char c = client.read();             // lee un byte, luego
        Serial.write(c);                    // imprímelo en el monitor serie
        if (c == '\n') {                    // si el byte es un carácter de nueva línea

          // si la línea actual está en blanco, has recibido dos caracteres de nueva línea seguidos.
          // eso significa el final de la solicitud HTTP del cliente, así que envía una respuesta:
          if (currentLine.length() == 0) {
            // Los encabezados HTTP siempre comienzan con un código de respuesta (por ejemplo, HTTP/1.1 200 OK)
            // y un tipo de contenido para que el cliente sepa qué esperar, luego una línea en blanco:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // el contenido de la respuesta HTTP sigue al encabezado:
            client.print("Haz clic <a href=\"/H\">aquí</a> para ENCENDER el LED.<br>");
            client.print("Haz clic <a href=\"/L\">aquí</a> para APAGAR el LED.<br>");

            // La respuesta HTTP termina con otra línea en blanco:
            client.println();
            // salir del bucle while:
            break;
          } else {    // si has recibido una nueva línea, entonces limpia currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // si recibes cualquier otro carácter que no sea el de retorno de carro,
          currentLine += c;      // añádelo al final de currentLine
        }

        // Verifica si la solicitud del cliente fue "GET /H" o "GET /L":
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /H enciende el LED
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /L apaga el LED
        }
      }
    }
    // cerrar la conexión:
    client.stop();
    Serial.println("Cliente Desconectado.");
  }
}
```

Después de cargar y ejecutar el programa, el XIAO ESP32C6 creará un punto de acceso con el nombre "XIAO_ESP32C6". Puedes conectarte a esta red usando tu computadora o teléfono, con la contraseña "password". Luego, abre "192.168.4.1" en un navegador para acceder a la página web que controla el interruptor del LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

Hay una sección en el `setup()` para configurar el ESP32 como un punto de acceso utilizando el método `softAP()`:

```cpp
WiFi.softAP(ssid, password);
```

Luego, necesitamos obtener la dirección IP del punto de acceso utilizando el método `softAPIP()` y mostrarla en el Monitor Serial.

```cpp
IPAddress myIP = WiFi.softAPIP();
Serial.print("Dirección IP del AP: ");
Serial.println(myIP);
server.begin();
```

Estos son los fragmentos de código que necesitas incluir en tus bocetos de servidor web para configurar el XIAO ESP32C6 como un punto de acceso.

## Uso de WiFi y MQTT

El XIAO ESP32C6 es una placa poderosa que soporta el protocolo MQTT, lo que la convierte en una excelente opción para proyectos de IoT que requieren comunicación confiable y eficiente entre dispositivos.

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

// Reemplaza con las credenciales de tu red
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// Dirección IP del servidor MQTT
const char* mqtt_server = "test.mosquitto.org";

// Inicializa los objetos del cliente WiFi y MQTT
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // Conectar a la red WiFi
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a WiFi...");
  }

  Serial.println("Conectado a WiFi");

  // Establecer la dirección IP del servidor MQTT y el puerto
  client.setServer(mqtt_server, 1883);

  // Conectar al servidor MQTT
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Conectado al servidor MQTT");
    } else {
      Serial.print("Falló la conexión al servidor MQTT, rc=");
      Serial.print(client.state());
      Serial.println(" reintentando en 5 segundos");
      delay(5000);
    }
  }

  // Suscribirse al tema MQTT
  client.subscribe("test/topic");
}

void loop() {
  // Verificar si el cliente MQTT está conectado
  if (!client.connected()) {
    // Reconectar al servidor MQTT
    if (client.connect("ESP32Client")) {
      Serial.println("Conectado al servidor MQTT");
      // Suscribirse al tema MQTT después de la reconexión
      client.subscribe("test/topic");
    }
  }

  // Manejar los mensajes MQTT
  client.loop();

  // Publicar un mensaje al servidor MQTT
  client.publish("test/topic", "Hola desde XIAO ESP32C6");
  delay(5000);
}
```

En este programa de ejemplo, el XIAO ESP32C6 se conecta a la red a través de WiFi y se conecta a un servidor MQTT especificado, se suscribe al tema **test/topic** y publica un mensaje en el tema cada 5 segundos.

Cuando el XIAO ESP32C6 recibe un mensaje del servidor MQTT, se puede procesar en la función de retorno de llamada `client.onMessage`. Es necesario reemplazar las variables `ssid`, `password`, `mqtt_server`, etc. en el programa de ejemplo con la información de tu propia red y servidor MQTT.

:::tip
La dirección del servidor MQTT proporcionada en el programa de ejemplo es `test.mosquitto.org`, solo para fines de prueba. Por favor, no envíes información personal a esta dirección, ya que cualquiera puede usar este enlace para obtener tu información.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>


## Uso de WiFi & HTTP/HTTPS

Esta sección puede hacer referencia al ejemplo que escribimos para XIAO ESP32C3 para acceder a ChatGPT, que proporciona una introducción detallada sobre el uso de WiFiClient y HTTPClient.

- [Aprende a usar WiFiClient y HTTPClient en XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT en acción](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt)

## WiFi Mesh

Según la [documentación de Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html):

"ESP-MESH es un protocolo de red construido sobre el protocolo Wi-Fi. ESP-MESH permite que numerosos dispositivos (llamados nodos) distribuidos sobre un área física grande (tanto en interiores como en exteriores) se interconecten bajo una única WLAN (Red Local Inalámbrica). ESP-MESH es autoorganizado y auto reparador, lo que significa que la red puede construirse y mantenerse de forma autónoma."

En una arquitectura de red Wi-Fi tradicional, un solo nodo (punto de acceso, generalmente el router) está conectado a todos los demás nodos (estaciones). Cada nodo puede comunicarse entre sí utilizando el punto de acceso. Sin embargo, esto está limitado por la cobertura Wi-Fi del punto de acceso. Cada estación debe estar dentro del alcance para conectarse directamente al punto de acceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/42.png" style={{width:800, height:'auto'}}/></div>

Con ESP-MESH, los nodos no necesitan conectarse a un nodo central. Los nodos son responsables de retransmitir las transmisiones de los demás. Esto permite que múltiples dispositivos se distribuyan por un área física grande. Los nodos pueden autoorganizarse y comunicarse dinámicamente entre sí para asegurarse de que el paquete llegue a su nodo de destino final. Si algún nodo es removido de la red, puede autoorganizarse para garantizar que los paquetes lleguen a su destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/43.png" style={{width:800, height:'auto'}}/></div>

La [biblioteca painlessMesh](https://gitlab.com/painlessMesh/painlessMesh) nos permite crear una red en malla con las placas ESP32 de manera sencilla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

Si aparece una ventana emergente que nos solicita descargar algunos paquetes dependientes para utilizar esta biblioteca, también debemos descargarlos juntos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

Si esta ventana no aparece, tendrás que instalar las siguientes dependencias de la biblioteca:

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (por bblanchon)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

Para comenzar con ESP-MESH, primero experimentaremos con el ejemplo básico de la biblioteca. Este ejemplo crea una red de malla en la que todas las placas envían mensajes a todas las demás placas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

Antes de cargar el código, puedes configurar las variables `MESH_PREFIX` (es como el nombre de la red MESH) y `MESH_PASSWORD` (puedes establecerla como desees).

Luego, te recomendamos que cambies la siguiente línea en cada placa para identificar fácilmente el nodo que envió el mensaje. Por ejemplo, para el nodo 1, cambia el mensaje de la siguiente manera:

```cpp
String msg = "Hi from node 1 ";
```

De acuerdo, ahora utilizaremos dos XIAO ESP32C6 como ejemplo. El diagrama conceptual después de establecer la red es aproximadamente el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

Sube el programa de manera separada a las dos XIAO, abre el monitor de puerto serie y ajusta la velocidad de baudios a 115200. (Si tienes dos XIAO, es posible que necesites software adicional de puertos seriales). Si el programa se ejecuta correctamente, verás los siguientes resultados:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

Comienza incluyendo la biblioteca `painlessMesh`. Luego, agrega los detalles de la red mesh. El `MESH_PREFIX` hace referencia al nombre de la red mesh. El `MESH_PASSWORD`, como su nombre indica, es la contraseña de la red mesh. Todos los nodos en la red mesh deben usar el mismo `MESH_PREFIX` y `MESH_PASSWORD`. El `MESH_PORT` se refiere al puerto TCP en el que deseas que se ejecute el servidor mesh. El valor predeterminado es **5555**.

Se recomienda evitar el uso de `delay()` en el código de la red mesh. Para mantener la red mesh, algunas tareas deben ejecutarse en segundo plano. El uso de `delay()` detendrá la ejecución de estas tareas y puede hacer que la red mesh pierda estabilidad o se desarme. En su lugar, se recomienda usar `TaskScheduler` para ejecutar tus tareas, que es utilizado por `painlessMesh` en sí. La siguiente línea crea un nuevo `Scheduler` llamado `userScheduler`.

```cpp
Scheduler userScheduler; // para controlar tus tareas personales
```

Crea un objeto `painlessMesh` llamado `mesh` para manejar la red mesh.

```cpp
painlessMesh  mesh;
```

Crea una tarea llamada `taskSendMessage` que se encargue de llamar a la función `sendMessage()` cada segundo mientras el programa esté en ejecución.

```cpp
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

La función `sendMessage()` envía un mensaje a todos los nodos en la red de mensajes (broadcast).

```cpp
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

El mensaje contiene el texto “Hello from node 1” seguido por el ID del chip de la placa.

Para transmitir un mensaje, simplemente usa el método `sendBroadcast()` del objeto `mesh` y pasa como argumento el mensaje (`msg`) que deseas enviar.

```cpp
mesh.sendBroadcast(msg);
```

Cada vez que se envía un nuevo mensaje, el código cambia el intervalo entre mensajes (de uno a cinco segundos).

```cpp
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

A continuación, se crean varias funciones de callback que se llamarán cuando ocurran eventos específicos en la red mesh. La función `receivedCallback()` imprime el emisor del mensaje (`from`) y el contenido del mensaje (`msg.c_str()`).

```cpp
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("Received from: %u msg=%s\n", from, msg.c_str());
}
```

La función `newConnectionCallback()` se ejecuta cada vez que un nuevo nodo se une a la red. Esta función simplemente imprime el ID del chip del nuevo nodo, pero puedes modificarla para realizar otras tareas.

```cpp
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

La función `changedConnectionCallback()` se ejecuta cuando una conexión cambia en la red (cuando un nodo se une o se va de la red).

```cpp
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

La función `nodeTimeAdjustedCallback()` se ejecuta cuando la red ajusta la hora, de modo que todos los nodos se sincronicen. Imprime el desfase de tiempo.

```cpp
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

En el `setup()`, inicializa el monitor serial. Elige los tipos de mensajes de depuración que deseas ver:

```cpp
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // todos los tipos activados

mesh.setDebugMsgTypes( ERROR | STARTUP );  // establecer antes de init() para ver los mensajes de inicio
```

Inicializa la red mesh con los detalles definidos previamente.

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

Finalmente, agrega la función `taskSendMessage` al `userScheduler`. El scheduler es responsable de manejar y ejecutar las tareas en el momento adecuado.

```cpp
userScheduler.addTask(taskSendMessage);
```

Finalmente, habilita la tarea `taskSendMessage` para que el programa comience a enviar los mensajes a la red mesh.

```cpp
taskSendMessage.enable();
```

Para mantener la red mesh funcionando, agrega `mesh.update()` al `loop()`.

```cpp
void loop() {
  // también ejecutará el scheduler de usuario
  mesh.update();
}
```
## Citas y Referencias

Este artículo se basa en el contenido web de **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32 y se ha verificado en el Seeed Studio XIAO ESP32C6.

¡Un agradecimiento especial a los autores de **Random Nerd Tutorials** por su arduo trabajo!

A continuación, se presenta el enlace de referencia al artículo original. Te invitamos a aprender más sobre la red ESP32 a través del siguiente enlace al artículo original.

- [Funciones útiles de Wi-Fi en ESP32 (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publicar y Suscribirse con Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH con ESP32 y ESP8266: Primeros pasos (biblioteca painlessMesh)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

Para más información sobre cómo utilizar la placa de desarrollo ESP32, consulta el sitio web oficial de Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

Y consulta estas documentaciones para obtener más detalles sobre la API de Arduino:

- [WiFi - Referencia de Arduino](https://www.arduino.cc/en/Reference/WiFi)
- [Wi-Fi API - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>






