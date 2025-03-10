---
description: WiFi usage with Seeed Studio XIAO ESP32S3.
title: Uso de WiFi para XIAO ESP32S3 de Seeed Studio
keywords:
- esp32s3
- xiao
- wifi usage
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_wifi_usage
last_update:
  date: 02/12/2025
  author: Guillermo
---

# Uso de WiFi para XIAO ESP32S3 (Sense) de Seeed Studio 

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
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
	</tr>
</table>

La Seeed Studio XIAO ESP32S3 es una placa de desarrollo embebida que destaca por su excelente rendimiento en radiofrecuencia, gracias a su soporte para Wifi de 2.4GHz - 802.11b/g/n y Bluetooth de baja energía (BLE), lo que permite una comunicación inalámbrica dual. Esta capacidad permite que la XIAO ESP32S3 ofrezca una conectividad inalámbrica confiable y de alta velocidad para una amplia gama de aplicaciones de Internet de las Cosas (IoT). Además, la placa admite la conexión de antena U.FL, lo que puede extender el rango de comunicación a más de 100 metros, lo que la convierte en una opción ideal para proyectos que requieren conectividad inalámbrica de largo alcance. En este tutorial, exploraremos cómo aprovechar las capacidades de Wi-Fi de la XIAO ESP32S3 para conectarse a una red Wi-Fi y realizar tareas básicas de redes.

## Empezando

### Instalación de la antena

En la parte inferior izquierda del frente de la XIAO ESP32S3, se encuentra un conector separado para la "Antena WiFi/BT". Para obtener una mejor señal de WiFi/Bluetooth, necesitas sacar la antena del paquete e instalarla en el conector.

Hay un pequeño truco para la instalación de la antena. Si presionas directamente sobre ella, notarás que es muy difícil presionar y tus dedos te dolerán. La forma correcta de instalar la antena es poner un lado del conector de la antena en el bloque del conector primero, luego presionar un poco el otro lado, y la antena quedará instalada.

Para quitar la antena, el procedimiento es el mismo. No uses fuerza bruta para jalarla directamente, simplemente levanta uno de los lados con cuidado y la antena se soltará fácilmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
Si la antena no está instalada, es posible que no se pueda conectar a la red Wi-Fi.

Si tienes las condiciones, te sugiero que uses una antena de mayor tamaño, ya que te brindará una mejor experiencia.
:::

## Las interfaces más comunes de la biblioteca WiFi

El ESP32-S3 proporciona una amplia gama de funciones para redes WiFi. Generalmente, podemos ver las funciones de la biblioteca WiFi en el paquete incorporado del ESP32 y elegir la función correspondiente para lograr la funcionalidad deseada. A continuación, enumeraremos algunas interfaces comunes y explicaremos su uso.

### Funciones genéricas de WiFi

- `WiFiGenericClass::getHostname()` -- Es una función en la biblioteca WiFi para ESP32 que devuelve el nombre de host del dispositivo como una cadena. El nombre de host es un nombre único que identifica al dispositivo en la red. Esta función recupera el nombre de host que fue configurado previamente usando `WiFiGenericClass::setHostname()`. Si no se ha establecido un nombre de host, se devolverá el nombre de host predeterminado.

- `WiFiGenericClass::persistent(bool persistent)` -- Es un método que se utiliza para habilitar o deshabilitar el modo persistente de la biblioteca WiFi del ESP32. Cuando el modo persistente está habilitado, la configuración de Wi-Fi se almacena en memoria no volátil (NVM) y se conserva incluso después de un ciclo de encendido o un reinicio. Cuando el modo persistente está deshabilitado, la configuración se almacena en la RAM y se pierde después de un ciclo de encendido o reinicio.

	- **Parámetros de entrada**
		- **persistent**: Si el argumento es verdadero, se habilita el modo persistente. Si el argumento es falso, se deshabilita el modo persistente.

- `WiFiGenericClass::enableLongRange(bool enable)` -- Esta función se utiliza para habilitar o deshabilitar la función de largo alcance (LR) del módulo WiFi. Cuando está habilitada, la función LR permite que el módulo se conecte a redes Wi-Fi que están más lejos de lo habitual, pero con tasas de datos más bajas.

	- **Parámetros de entrada**
		- **enable**: El parámetro debe establecerse en verdadero para habilitar la función y en falso para deshabilitarla.

- `WiFiGenericClass::mode(wifi_mode_t m)` -- Esta función se utiliza para establecer el modo Wi-Fi del dispositivo.

	- **Parámetros de entrada**
		- **m**: El parámetro m especifica el modo a configurar, que puede ser uno de los siguientes valores definidos en el enum wifi_mode_t:
			- **WIFI_MODE_NULL**: Desactiva tanto los modos de estación como de punto de acceso Wi-Fi.
			- **WIFI_MODE_STA**: Habilita el modo estación Wi-Fi para conectarse a una red Wi-Fi existente.
			- **WIFI_MODE_AP**: Habilita el modo punto de acceso para crear una nueva red Wi-Fi.
			- **WIFI_MODE_APSTA**: Habilita tanto el modo estación como el de punto de acceso Wi-Fi.

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- Esta función establece el modo de ahorro de energía para el módulo Wi-Fi.

	- **Parámetros de entrada**
		- **sleepType**: El parámetro sleepType es un tipo enumerado que especifica el tipo de modo de ahorro de energía que se utilizará. Existen tres tipos posibles de modos de ahorro de energía:
			- **WIFI_PS_NONE**: Este es el modo de sueño predeterminado, en el que el módulo Wi-Fi no entra en modo de ahorro de energía.
			- **WIFI_PS_MIN_MODEM**: En este modo, el módulo Wi-Fi apaga su módem mientras mantiene la conexión con el punto de acceso (AP).
			- **WIFI_PS_MAX_MODEM**: En este modo, el módulo Wi-Fi apaga tanto el módem como la estación, lo que resulta en una desconexión del AP.

### Funciones STA

- `WiFiSTAClass::status()` -- Devuelve el estado de la conexión.

	- **Salida**: uno de los valores definidos en wl_status_t.
		- **WL_NO_SHIELD**: Este código de estado indica que el módulo Wi-Fi no está presente.
		- **WL_IDLE_STATUS**: Este código de estado indica que el módulo Wi-Fi no está realizando ninguna operación.
		- **WL_NO_SSID_AVAIL**: Este código de estado indica que no se encontraron redes Wi-Fi durante el escaneo.
		- **WL_SCAN_COMPLETED**: Este código de estado indica que el escaneo Wi-Fi se completó con éxito.
		- **WL_CONNECTED**: Este código de estado indica que el ESP32 está conectado correctamente a una red Wi-Fi.
		- **WL_CONNECT_FAILED**: Este código de estado indica que la conexión con la red Wi-Fi falló.
		- **WL_CONNECTION_LOST**: Este código de estado indica que se perdió la conexión con la red Wi-Fi.
		- **WL_DISCONNECTED**: Este código de estado indica que el ESP32 estaba previamente conectado a una red Wi-Fi, pero actualmente no está conectado a ninguna red.

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- Inicia la conexión Wi-Fi con un punto de acceso WPA2 Enterprise.

	- **Parámetros de entrada** (Opcionales)
		- **ssid**: Apunta a la cadena SSID.
		- **method**: El método de autenticación WPA2 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)
		- **wpa2_identity**: Apunta a la entidad.
		- **wpa2_username**: Apunta al nombre de usuario.
		- **wpa2_password**: Apunta a la contraseña.
		- **ca_pem**: Apunta a una cadena con el contenido de un archivo .pem con el certificado CA.
		- **client_crt**: Apunta a una cadena con el contenido de un archivo .crt con el certificado del cliente.
		- **client_key**: Apunta a una cadena con el contenido de un archivo .key con la clave del cliente.
		- **channel**: Opcional. Canal del AP.
		- **bssid**: Opcional. BSSID / MAC del AP.
		- **connect**: Opcional. Llamar a connect.

- `WiFiSTAClass::reconnect()` -- Forzará una desconexión y luego comenzará a reconectar al AP.

	- **Salida**: Verdadero/Falso.

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- Desconecta de la red.

	- **Parámetros de entrada**
		- **wifioff**: Si se establece en verdadero, apaga la radio Wi-Fi.
		- **eraseap**: Si se establece en verdadero, elimina la configuración del AP de la memoria NVS.
	
	- **Salida**: Verdadero/Falso.

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- Cambia la configuración de IP desactivando el cliente DHCP.

	- **Parámetros de entrada**
		- **local_ip**: Configuración de IP estática.
		- **gateway**: Configuración de gateway estático.
		- **subnet**: Máscara de subred estática.
		- **dns1**: Servidor DNS estático 1.
		- **dns2**: Servidor DNS estático 2.

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- Descontinuado. Configura el ESP32 para conectar automáticamente al AP (que está grabado) cuando se enciende. El auto-conectado está habilitado por defecto.

	- **Parámetros de entrada**
		- **autoConnect**: Booleano autoConnect.

	- **Salida**: Falso.

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- Espera a que la conexión Wi-Fi alcance un resultado.

	- **Parámetros de entrada**
		- **timeoutLength**: El parámetro especifica la cantidad máxima de tiempo a esperar para que se establezca una conexión, en milisegundos.

	- **Salida**: Uno de los valores definidos en wl_status_t.

- `WiFiSTAClass::localIP()` -- Obtiene la dirección IP de la interfaz de estación.

	- **Salida**: Dirección IP de la estación.

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- Obtiene la dirección MAC de la interfaz de estación.

	- **Parámetros de entrada**
		- **mac** (Opcional): Apunta a una matriz uint8_t con longitud WL_MAC_ADDR_LENGTH.

	- **Salida**: Apunta a uint8_t *.

- `WiFiSTAClass::SSID()` -- Devuelve el SSID actual asociado con la red.

	- **Salida**: SSID.

- `WiFiSTAClass::RSSI(void)` -- Devuelve la señal RSSI actual de la red.

	- **Salida**: RSSI.

### Funciones de AP

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- Esta es una función en la biblioteca WiFi del ESP32-S3. Se utiliza para configurar un SoftAP (punto de acceso por software), lo que permite que otros dispositivos se conecten al ESP32-S3 y accedan a sus recursos.

	- **Parámetros de entrada**
		-  **ssid**:              Puntero al SSID (máximo 63 caracteres).
 		-  **passphrase**:        (Para WPA2 mínimo 8 caracteres, para redes abiertas usar NULL).
 		-  **channel**:           Número de canal WiFi, 1 - 13.
 		-  **ssid_hidden**:       Ocultamiento de red (0 = transmitir SSID, 1 = ocultar SSID).
 		-  **max_connection**:    Número máximo de clientes conectados simultáneamente, 1 - 4.

	- **Salida**: Verdadero/Falso.

- `WiFiAPClass::softAPgetStationNum()` -- Obtiene la cantidad de estaciones/clientes conectados a la interfaz SoftAP.

	- **Salida**: Número de estaciones.

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- Función para configurar SoftAP.

	- **Parámetros de entrada**
		- **local_ip**:      IP del punto de acceso.
		- **gateway**:       IP del gateway.
		- **subnet**:        Máscara de subred.

	- **Salida**: Verdadero/Falso.

- `WiFiAPClass::softAPIP()` -- Obtiene la dirección IP de la interfaz SoftAP.

	- **Salida**: Dirección IP de SoftAP.

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- Obtiene la dirección MAC de la interfaz SoftAP.

	- **Parámetros de entrada**
		- **mac** (Opcional):   Puntero a un arreglo uint8_t con longitud WL_MAC_ADDR_LENGTH.

	- **Salida**: Puntero a uint8_t* o String con la dirección MAC.

### Función de Escaneo WiFi

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- Inicia el escaneo de redes WiFi disponibles.

	- **Parámetros de entrada**
		- **async**: El parámetro es un valor booleano que determina si el escaneo debe realizarse de forma asincrónica. Si se establece en verdadero, la función retorna inmediatamente y los resultados del escaneo se pueden obtener más tarde llamando a la función getScanResults(). Si se establece en falso, la función bloqueará la ejecución hasta que el escaneo termine.
		- **show_hidden**: El parámetro es un valor booleano que determina si la función debe incluir redes ocultas en los resultados del escaneo.
		- **passive**: El parámetro es un valor booleano que determina si la función debe realizar un escaneo pasivo. Si se establece en verdadero, la función no transmitirá paquetes durante el escaneo, lo que puede tardar más, pero puede ser útil en ciertas situaciones.
		- **max_ms_per_chan**: El parámetro es el tiempo máximo para escanear cada canal en milisegundos.
		- **channel**: El parámetro es el canal Wi-Fi a escanear. Si se establece en 0, la función escaneará todos los canales disponibles.
		- **ssid**: El parámetro es un puntero a una cadena de caracteres nula terminada que contiene el SSID de la red a escanear. Si se establece en nullptr, la función escaneará todas las redes disponibles.
		- **bssid**: El parámetro es un puntero a un arreglo de 6 bytes que contiene la dirección MAC del punto de acceso a escanear. Si se establece en nullptr, la función escaneará todos los puntos de acceso.

	- **Salida**: El valor retornado de esta función es un entero que indica la cantidad de redes escaneadas.

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- Carga toda la información de una red escaneada en los parámetros punteros.

	- **Parámetros de entrada**
		- **i**: La función se usa para obtener información sobre una red escaneada en un índice especificado i.
		- **ssid**: El parámetro ssid es una referencia a una variable de tipo String donde la función almacena el SSID de la red.
		- **encType**: El parámetro encType es una referencia a una variable de tipo uint8_t donde la función almacena el tipo de cifrado de la red (0 = abierta, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK).
		- **rssi**: El parámetro rssi es una referencia a una variable de tipo int32_t donde la función almacena la intensidad de señal recibida (RSSI) de la red.
		- **bssid**: El parámetro bssid es una referencia a un puntero uint8_t* donde la función almacena el BSSID (dirección MAC) de la red.
		- **channel**: El parámetro channel es una referencia a una variable de tipo int32_t donde la función almacena el número de canal de la red.

	- **Salida**: Verdadero/Falso.

- `WiFiScanClass::SSID(uint8_t i)` -- Devuelve el SSID descubierto durante el escaneo de redes.

	- **Parámetros de entrada**
		- **i**: Especificar de qué red se desea obtener la información.

	- **Salida**: Cadena SSID del ítem especificado en la lista de redes escaneadas.

- `WiFiScanClass::RSSI(uint8_t i)` -- Devuelve el RSSI de las redes descubiertas durante el escaneo.

	- **Parámetros de entrada**
		- **i**: Especificar de qué red se desea obtener la información.

	- **Salida**: Valor firmado de RSSI del ítem especificado en la lista de redes escaneadas.

### Funciones del Cliente WiFi

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- Esta función se utiliza en la biblioteca WiFiClient para conectarse a una dirección IP remota y un puerto con un valor de tiempo de espera especificado.

	- **Parámetros de entrada**
		- **ip**: La dirección IP del servidor al que conectarse.
		- **port**: El número de puerto del servidor al que conectarse.
		- **timeout** (Opcional): El tiempo máximo para esperar que se establezca la conexión, en milisegundos. Si la conexión no se establece dentro de este tiempo, la función devolverá un error. Si el timeout se establece en 0, la función esperará indefinidamente para que se establezca la conexión.

- `WiFiClient::stop()` -- La función se utiliza para desconectar al cliente del servidor y liberar el socket/puerto utilizado por el cliente. Una vez llamada, el cliente ya no podrá enviar ni recibir datos.

- `WiFiClient::setTimeout(uint32_t seconds)` -- La función establece el número máximo de segundos que el cliente esperará para que se establezca una conexión o se reciban datos. Si la conexión o transferencia de datos tarda más que el tiempo de espera especificado, la conexión se cerrará.

	- **Parámetros de entrada**
		- **seconds**: El número de segundos para el tiempo de espera.

- `WiFiClient::write(uint8_t data)` -- Escribe un solo byte de datos al servidor conectado a través de la instancia WiFiClient. O `WiFiClient::write(const uint8_t *buf, size_t size)`.

	- **Parámetros de entrada**
		- **data**: Es un solo byte de datos que debe enviarse a través de la conexión de red establecida.

- `WiFiClient::read()` -- La función lee un solo byte de datos entrantes del servidor conectado. Devuelve el byte leído como un valor entero. Si no hay datos disponibles, devuelve -1. O `read(uint8_t *buf, size_t size)`.

	- **Salida**: Un valor entero que indica el número de bytes recibidos. Si el valor de retorno es 0, significa que el servidor ha cerrado la conexión.

- `WiFiClient::peek()` -- La función se utiliza para verificar si hay datos disponibles para leer desde el servidor sin leerlos realmente.

	- **Salida**: Devuelve el siguiente byte de datos entrantes sin eliminarlo del búfer de recepción. Si no hay datos disponibles, devuelve -1.

- `WiFiClient::available()` -- La función se utiliza para verificar cuántos bytes de datos están disponibles para leer desde el servidor.

	- **Salida**: Devuelve un valor entero que representa el número de bytes disponibles para leer.

### Funciones del Servidor WiFi

- `WiFiServer::stopAll()` -- Esta función es un método de la clase WiFiServer en la biblioteca WiFi de Arduino. Este método detiene todas las instancias de servidores que se hayan creado utilizando la clase WiFiServer. Es útil cuando se desea detener todos los servidores a la vez en lugar de llamar al método `stop()` para cada instancia individualmente.

- `WiFiServer::begin(uint16_t port, int enable)` -- La función se utiliza para iniciar un servidor en el puerto especificado. El servidor escuchará las conexiones entrantes de clientes.

	- **Parámetros de entrada**
		- **port**: El número de puerto en el que escuchar.
		- **enable** (Opcional): Una bandera para indicar si el servidor debe habilitarse inmediatamente después de ser iniciado. Esta bandera está configurada en `true` por defecto.

- `WiFiServer::hasClient()` -- La función se utiliza para verificar si hay conexiones de clientes entrantes disponibles en el servidor. Esta función se puede usar en un bucle para verificar continuamente nuevas conexiones.

	- **Salida**: Devuelve un objeto WiFiClient si un cliente se ha conectado o un puntero NULL si no hay clientes esperando para conectarse.

- `WiFiServer::end()` -- La función se utiliza para detener el servidor y liberar los recursos asociados. Una vez llamada, el servidor ya no podrá aceptar nuevas conexiones de clientes. Las conexiones existentes permanecerán abiertas hasta que se cierren ya sea por el cliente o el servidor. `WiFiServer::close()` y `WiFiServer::stop()` tienen la misma función.

### Funciones WiFi Múltiples

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- Esta función se utiliza para agregar un nuevo punto de acceso (AP) a la lista de AP disponibles a los que el objeto WiFiMulti intentará conectarse.

	- **Parámetros de entrada**
		- **ssid**: Puntero al SSID (máximo 63 caracteres).
		- **passphrase**: (para WPA2 mínimo 8 caracteres, para redes abiertas usar NULL).

	- **Salida**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- La función intenta conectarse a uno de los puntos de acceso guardados de manera secuencial hasta que logre establecer una conexión.

	- **Parámetros de entrada**
		- **connectTimeout**: El parámetro especifica el tiempo máximo de espera para establecer una conexión, en milisegundos. Si connectTimeout se establece en 0, la función no tendrá tiempo de espera y continuará intentando conectarse indefinidamente.

	- **Salida**: estado

## Escanear redes WiFi cercanas

El siguiente es un programa de ejemplo que utiliza el XIAO ESP32S3 para escanear redes WiFi cercanas.

En tu IDE de Arduino, ve a **Archivo > Ejemplos > WiFi > WiFiScan**. Esto cargará un boceto que escanea redes WiFi dentro del alcance de tu XIAO ESP32S3.

Esto puede ser útil para verificar si la red WiFi a la que intentas conectarte está dentro del alcance de tu placa o para otras aplicaciones. Tu proyecto WiFi podría no funcionar correctamente si no puede conectarse a tu enrutador debido a una señal WiFi insuficiente.

```c
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Configura WiFi en modo estación y desconéctate de un AP si estaba previamente conectado
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Configuración completada");
}

void loop() {
  Serial.println("Inicio del escaneo");

  // WiFi.scanNetworks devolverá el número de redes encontradas
  int n = WiFi.scanNetworks();
  Serial.println("Escaneo completado");
  if (n == 0) {
      Serial.println("No se encontraron redes");
  } else {
    Serial.print(n);
    Serial.println(" redes encontradas");
    for (int i = 0; i < n; ++i) {
      // Imprime SSID y RSSI de cada red encontrada
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");
      delay(10);
    }
  }
  Serial.println("");

  // Espera un poco antes de escanear nuevamente
  delay(5000);
}
```

Sube y ejecuta el programa, y deberías ver en el monitor serie los redes WiFi cercanas que pueden ser detectadas por el XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Lo primero que debes hacer para utilizar las funcionalidades WiFi del XIAO ESP32S3 es incluir la biblioteca **WiFi.h** en tu código, de la siguiente manera:

```c
#include <WiFi.h>
```

El XIAO ESP32S3 puede funcionar como Estación WiFi, Punto de Acceso o ambos. Para configurar el modo WiFi, utiliza `WiFi.mode()` y establece el modo deseado como argumento.

```c
WiFi.mode(WIFI_STA);
```

Cuando el ESP32 se configura como estación Wi-Fi, puede conectarse a otras redes (como tu enrutador).

`WiFi.scanNetworks()` devuelve el número de redes encontradas. Después del escaneo, puedes acceder a los parámetros de cada red. `WiFi.SSID()` imprime el SSID de una red específica.

`WiFi.RSSI()` devuelve el RSSI de esa red. RSSI significa Indicador de Fuerza de Señal Recibida. Es una medida estimada del nivel de potencia que un dispositivo cliente RF está recibiendo de un punto de acceso o enrutador.

Finalmente, `WiFi.encryptionType()` devuelve el tipo de cifrado de la red. Ese ejemplo específico pone un * en el caso de redes abiertas. Sin embargo, esa función puede devolver una de las siguientes opciones (no solo redes abiertas):
- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## Conectar a una red WiFi

Para conectar el ESP32 a una red Wi-Fi específica, debes conocer su SSID y contraseña. Además, esa red debe estar dentro del alcance de WiFi del ESP32 (para verificar eso, puedes usar el ejemplo anterior para escanear redes WiFi).

A continuación se muestra un ejemplo de cómo usar el XIAO ESP32S3 para conectarse a una red especificada. La función `initWiFi()` cumple el papel de conectar a la red en el programa.

```c
#include "WiFi.h"

// Reemplaza con las credenciales de tu red
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);

  // Establecer el modo WiFi en estación y desconectarse de un AP si estaba previamente conectado
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();
}

void loop() {
  
}
```

Sube y ejecuta el programa para abrir el monitor serie. Al conectarse a la red, el monitor serie imprimirá una serie de puntos hasta que la conexión sea exitosa, luego se imprimirá la dirección IP del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### Anotación del programa

Echemos un vistazo rápido a cómo funciona esta función.

Primero, configura el modo WiFi. Si el XIAO ESP32S3 se va a conectar a otra red (punto de acceso/punto de conexión), debe estar en modo estación.

```c
WiFi.mode(WIFI_STA);
```

Luego, utiliza `WiFi.begin()` para conectarte a una red. Debes pasar como argumentos el SSID de la red y su contraseña:

```c
WiFi.begin(ssid, password);
```

Conectarse a una red WiFi puede tomar un tiempo, por lo que generalmente agregamos un ciclo `while` que sigue verificando si la conexión ya se ha establecido utilizando `WiFi.status()`. Cuando la conexión se establece correctamente, devuelve `WL_CONNECTED`.

Si deseas obtener la fuerza de la conexión WiFi, simplemente puedes llamar a `WiFi.RSSI()` después de que la conexión WiFi se haya establecido.

## Uso de softAP

Si configuras el XIAO ESP32S3 como un punto de acceso (hotspot), puedes conectarte al ESP32 utilizando cualquier dispositivo con capacidades WiFi sin necesidad de conectarte a tu enrutador.

En palabras simples, cuando configuras el XIAO ESP32S3 como un punto de acceso, creas su propia red WiFi y los dispositivos WiFi cercanos (estaciones) pueden conectarse a ella (como tu teléfono móvil o tu computadora).

En tu IDE de Arduino, ve a **Archivo > Ejemplos > WiFi > WiFiAccessPoint**. Este ejemplo te mostrará cómo usar el XIAO ESP32S3 para crear un hotspot y controlar el interruptor de encendido/apagado de una luz a través de una página web simple conectada al hotspot.

:::note
1. Realizamos algunos cambios menores en el programa de ejemplo comentando `LED_BUILTIN`, porque el XIAO ESP32S3 tiene su propio indicador de usuario y no necesitamos un LED externo.
2. El LED solo se apagará cuando el pin del LED del usuario en el XIAO ESP32S3 se establezca en un nivel alto, y solo se encenderá cuando el pin se establezca en un nivel bajo.
3. También necesitas modificar el nombre del hotspot y la contraseña en el programa a los que desees.
:::

```c
/*
  WiFiAccessPoint.ino crea un punto de acceso WiFi y proporciona un servidor web en él.

  Pasos:
  1. Conéctate al punto de acceso "yourAp"
  2. Abre tu navegador web e ingresa http://192.168.4.1/H para encender el LED o http://192.168.4.1/L para apagarlo
     O
     Ejecuta comandos TCP raw "GET /H" y "GET /L" en un terminal PuTTY con 192.168.4.1 como dirección IP y 80 como puerto

  Creado para arduino-esp32 el 04 de julio, 2018
  por Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // Configura el pin GPIO donde conectaste tu LED de prueba o comenta esta línea si tu placa de desarrollo tiene un LED incorporado

// Configura estos valores con tus credenciales deseadas.
const char *ssid = "XIAO_ESP32S3";
const char *password = "password";

WiFiServer server(80);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configurando el punto de acceso...");

  // Puedes eliminar el parámetro de la contraseña si deseas que el AP sea abierto.
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("Dirección IP del AP: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Servidor iniciado");
}

void loop() {
  WiFiClient client = server.available();   // escucha a los clientes entrantes

  if (client) {                             // si recibes un cliente,
    Serial.println("Nuevo Cliente.");        // imprime un mensaje en el puerto serie
    String currentLine = "";                // crea una cadena para almacenar los datos entrantes del cliente
    while (client.connected()) {            // bucle mientras el cliente esté conectado
      if (client.available()) {             // si hay datos para leer del cliente,
        char c = client.read();             // lee un byte y luego
        Serial.write(c);                    // imprímelo en el monitor serie
        if (c == '\n') {                    // si el byte es un carácter de nueva línea

          // si la línea actual está vacía, has recibido dos caracteres de nueva línea seguidos.
          // eso significa el final de la solicitud HTTP del cliente, así que envía una respuesta:
          if (currentLine.length() == 0) {
            // las cabeceras HTTP siempre comienzan con un código de respuesta (por ejemplo, HTTP/1.1 200 OK)
            // y un tipo de contenido para que el cliente sepa qué esperar, luego una línea en blanco:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // el contenido de la respuesta HTTP sigue después de la cabecera:
            client.print("Haz clic <a href=\"/H\">aquí</a> para ENCENDER el LED.<br>");
            client.print("Haz clic <a href=\"/L\">aquí</a> para APAGAR el LED.<br>");

            // La respuesta HTTP termina con otra línea en blanco:
            client.println();
            // rompe el ciclo while:
            break;
          } else {    // si recibiste una nueva línea, limpia la línea actual:
            currentLine = "";
          }
        } else if (c != '\r') {  // si recibes cualquier cosa que no sea un carácter de retorno de carro,
          currentLine += c;      // agrégalo al final de currentLine
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
    // cierra la conexión:
    client.stop();
    Serial.println("Cliente Desconectado.");
  }
}
```

Después de cargar y ejecutar el programa, el XIAO ESP32S3 creará un hotspot llamado "XIAO_ESP32S3". Puedes conectarte a esta red usando tu computadora o teléfono, con la contraseña "password". Luego, abre "192.168.4.1" en un navegador para acceder a la página web que controla el interruptor del LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

Hay una sección en `setup()` para configurar el ESP32 como un punto de acceso utilizando el método `softAP()`:

```c
WiFi.softAP(ssid, password);
```

A continuación, necesitamos obtener la dirección IP del punto de acceso utilizando el método `softAPIP()` y imprimirla en el Monitor Serial.

```c
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

Estos son los fragmentos de código que necesitas incluir en tus bocetos de servidor web para configurar el XIAO ESP32S3 como un punto de acceso.

## Uso de WiFi y MQTT

El XIAO ESP32S3 es una placa poderosa que admite el protocolo MQTT, lo que la convierte en una excelente opción para proyectos de IoT que requieren una comunicación confiable y eficiente entre dispositivos.

```c
#include <WiFi.h>
#include <PubSubClient.h>

// Reemplaza con las credenciales de tu red
const char* ssid = "tu_SSID";
const char* password = "tu_CONTRASEÑA";

// Dirección IP del servidor MQTT
const char* mqtt_server = "test.mosquitto.org";

// Inicializa los objetos WiFi y cliente MQTT
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // Conectarse a la red WiFi
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a WiFi...");
  }

  Serial.println("Conectado a WiFi");

  // Establecer la dirección IP del servidor MQTT y el puerto
  client.setServer(mqtt_server, 1883);

  // Conectarse al servidor MQTT
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Conectado al servidor MQTT");
    } else {
      Serial.print("Error al conectar al servidor MQTT, rc=");
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
      // Suscribirse al tema MQTT después de reconectarse
      client.subscribe("test/topic");
    }
  }

  // Manejar los mensajes MQTT
  client.loop();

  // Publicar un mensaje en el servidor MQTT
  client.publish("test/topic", "Hola desde XIAO ESP32S3");
  delay(5000);
}
```

En este programa de ejemplo, XIAO ESP32S3 se conecta a la red a través de WiFi y se conecta a un servidor MQTT especificado, se suscribe al tema **test/topic** y publica un mensaje en el tema cada 5 segundos.

Cuando XIAO ESP32S3 recibe un mensaje del servidor MQTT, este puede ser procesado en la función de callback `client.onMessage`. Necesitas reemplazar las variables `ssid`, `password`, `mqtt_server`, etc. en el programa de ejemplo con tu propia información de red y servidor MQTT.

:::tip
La dirección del servidor MQTT proporcionada en el programa de ejemplo es `test.mosquitto.org`, solo para fines de prueba. Por favor, no envíes información personal a esta dirección, ya que cualquier persona puede usar este enlace para obtener tu información.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>


## Uso de WiFi & HTTP/HTTPS

Esta parte hace referencia al ejemplo que escribimos para XIAO ESP32C3 para acceder a ChatGPT, que proporciona una introducción detallada al uso de WiFiClient y HTTPClient.

- [Aprende a usar WiFiClient y HTTPClient en XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT en acción](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt)

## WiFi Mesh

Según la [documentación de Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html):

"ESP-MESH es un protocolo de red construido sobre el protocolo Wi-Fi. ESP-MESH permite que numerosos dispositivos (denominados nodos) distribuidos en una amplia área física (tanto interior como exterior) se interconecten bajo una sola red WLAN (Red de Área Local Inalámbrica). ESP-MESH es autoorganizado y auto-curativo, lo que significa que la red puede ser construida y mantenida de manera autónoma."

En una arquitectura tradicional de red Wi-Fi, un solo nodo (punto de acceso – generalmente el router) está conectado a todos los demás nodos (estaciones). Cada nodo puede comunicarse con los demás utilizando el punto de acceso. Sin embargo, esto está limitado a la cobertura Wi-Fi del punto de acceso. Cada estación debe estar dentro del alcance para conectarse directamente al punto de acceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/42.png" style={{width:800, height:'auto'}}/></div>

Con ESP-MESH, los nodos no necesitan conectarse a un nodo central. Los nodos son responsables de retransmitir las transmisiones de los demás. Esto permite que varios dispositivos se distribuyan por un área física extensa. Los nodos pueden autoorganizarse y comunicarse dinámicamente entre sí para asegurar que el paquete llegue a su nodo de destino final. Si algún nodo se retira de la red, es capaz de autoorganizarse para garantizar que los paquetes lleguen a su destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/43.png" style={{width:800, height:'auto'}}/></div>

La [biblioteca painlessMesh](https://gitlab.com/painlessMesh/painlessMesh) nos permite crear una red mesh con las placas ESP32 de manera sencilla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

Si aparece una ventana emergente solicitándonos descargar algunos paquetes dependientes para usar esta biblioteca, también debemos descargarlos todos juntos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

Si esta ventana no aparece, necesitarás instalar las siguientes dependencias de la biblioteca:

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (de bblanchon)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

Para comenzar con ESP-MESH, primero experimentaremos con el ejemplo básico de la biblioteca. Este ejemplo crea una red mesh en la que todas las placas envían mensajes a todas las demás placas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

Antes de cargar el código, puedes configurar las variables `MESH_PREFIX` (es como el nombre de la red MESH) y `MESH_PASSWORD` (puedes ponerle cualquier valor que desees).

Luego, te recomendamos que cambies la siguiente línea para cada placa y así identificar fácilmente el nodo que envió el mensaje. Por ejemplo, para el nodo 1, cambia el mensaje de la siguiente manera:

```c
String msg = "Hi from node 1 ";
```

Está bien, a continuación utilizaremos dos XIAO ESP32S3 como ejemplo. El diagrama conceptual después de la conexión será aproximadamente el siguiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

Carga el programa por separado en las dos XIAO, abre el monitor del puerto serial y configura la velocidad en baudios a 115200. (Si tienes dos XIAO, es posible que necesites software adicional para los puertos seriales). Si el programa funciona correctamente, verás los siguientes resultados:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### Anotación del programa

Comienza incluyendo la biblioteca painlessMesh. Luego, agrega los detalles de la red mesh. El `MESH_PREFIX` se refiere al nombre de la red mesh. El `MESH_PASSWORD`, como su nombre indica, es la contraseña de la red mesh. Todos los nodos en la red mesh deben usar el mismo `MESH_PREFIX` y `MESH_PASSWORD`. El `MESH_PORT` se refiere al puerto TCP en el que deseas que el servidor mesh se ejecute. El valor predeterminado es **5555**.

Se recomienda evitar el uso de `delay()` en el código de la red mesh. Para mantener la red mesh, algunas tareas deben ejecutarse en segundo plano. Usar `delay()` detendrá estas tareas y puede causar que la red pierda estabilidad o se desintegre. En su lugar, se recomienda utilizar `TaskScheduler` para ejecutar tus tareas, que es lo que utiliza painlessMesh. La siguiente línea crea un nuevo `Scheduler` llamado `userScheduler`.

```c
Scheduler userScheduler; // to control your personal task
```

Crea un objeto `painlessMesh` llamado `mesh` para manejar la red mesh.

```c
painlessMesh  mesh;
```

Crea una tarea llamada `taskSendMessage` responsable de llamar a la función `sendMessage()` cada segundo mientras el programa esté en ejecución.

```c
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

La función `sendMessage()` envía un mensaje a todos los nodos en la red mesh (difusión).

```c
void sendMessage() {
  String msg = "Hola desde el nodo 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

El mensaje contiene el texto "Hello from node 1" seguido del ID del chip de la placa.

Para difundir un mensaje, simplemente utiliza el método `sendBroadcast()` en el objeto mesh y pasa como argumento el mensaje (msg) que deseas enviar.

```c
mesh.sendBroadcast(msg);
```

Cada vez que se envía un nuevo mensaje, el código cambia el intervalo entre los mensajes (de uno a cinco segundos).

```c
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

A continuación, se crean varias funciones de callback que se llamarán cuando ocurran eventos específicos en la red mesh. La función `receivedCallback()` imprime el remitente del mensaje (de) y el contenido del mensaje (`msg.c_str()`).

```c
void receivedCallback(uint32_t from, String &msg) {
  Serial.printf("startHere: Recibido de %u msg=%s\n", from, msg.c_str());
}
```

La función `newConnectionCallback()` se ejecuta cada vez que un nuevo nodo se une a la red. Esta función simplemente imprime el ID del chip del nuevo nodo. Puedes modificar la función para realizar cualquier otra tarea.

```c
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: Nueva Conexión, nodeId = %u\n", nodeId);
}
```

La función `changedConnectionCallback()` se ejecuta cada vez que una conexión cambia en la red (cuando un nodo se une o abandona la red).

```c
void changedConnectionCallback() {
  Serial.printf("Conexiones cambiadas\n");
}
```

La función `nodeTimeAdjustedCallback()` se ejecuta cuando la red ajusta el tiempo, para que todos los nodos estén sincronizados. Imprime el desfase (offset).

```c
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Tiempo ajustado %u. Desfase = %d\n", mesh.getNodeTime(), offset);
}
```

En el `setup()`, inicializa el monitor serial. Elige los tipos de mensajes de depuración deseados:

```c
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // todos los tipos habilitados

mesh.setDebugMsgTypes( ERROR | STARTUP );  // configurar antes de init() para ver los mensajes de inicio
```

Inicializa la red mesh con los detalles definidos previamente.

```c
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

Asigna todas las funciones de callback a sus eventos correspondientes.

```c
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

Finalmente, agrega la función `taskSendMessage` al `userScheduler`. El scheduler es responsable de manejar y ejecutar las tareas en el momento adecuado.

```c
userScheduler.addTask(taskSendMessage);
```

Finalmente, habilita la tarea `taskSendMessage`, para que el programa comience a enviar los mensajes a la red mesh.

```c
taskSendMessage.enable();
```

Para mantener la red mesh en funcionamiento, agrega `mesh.update()` al `loop()`.

```c
void loop() {
  // ejecutará el scheduler del usuario también
  mesh.update();
}
```

## Solución de problemas

### P1: ¿Por qué no puedo conectarme al hotspot de XIAO ESP32S3 cuando uso el ejemplo de softAP?

Esto puede ser causado por la insuficiente potencia de la antena de XIAO ESP32S3 o el sobrecalentamiento del dispositivo. Después de realizar pruebas, se ha observado que el chip de XIAO ESP32S3 puede alcanzar una temperatura máxima de 50 grados Celsius al usar este ejemplo. Esto podría generar anormalidades en la red si se ejecuta durante un tiempo prolongado. En este caso, puedes enfriar el dispositivo y probar nuevamente.

Si se descarta el sobrecalentamiento como causa, entonces es posible que la señal de la antena sea el problema. La potencia de la antena incluida no puede soportar un trabajo de red de alta intensidad en general. Si es necesario, puedes comprar una antena de palo adecuada para mejorar la conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/40.jpg" style={{width:600, height:'auto'}}/></div>

## Citas y referencias

Este artículo se basa en el contenido web de **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32, verificado en el Seeed Studio XIAO ESP32S3.

Agradecimientos especiales a los autores de **Random Nerd Tutorials** por su arduo trabajo.

A continuación se presentan los enlaces de referencia al artículo original. Estás invitado a aprender más sobre redes ESP32 a través de estos enlaces:

- [Funciones útiles de Wi-Fi en ESP32 (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publicar y suscribirse con Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH con ESP32 y ESP8266: Introducción (biblioteca painlessMesh)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

Para más información sobre el uso de la placa de desarrollo ESP32, por favor visita el sitio web oficial de Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## Soporte técnico y discusión de productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>






