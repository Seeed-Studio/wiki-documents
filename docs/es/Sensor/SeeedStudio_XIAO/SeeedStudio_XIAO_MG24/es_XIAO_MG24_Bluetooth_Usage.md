---
description: Uso de Bluetooth con Seeed Studio XIAO MG24.
title: Uso de Bluetooth con Seeed Studio XIAO MG24
keywords:
- MG24
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble-cover.webp
slug: /es/xiao_mg24_bluetooth
last_update:
  date: 02/8/2025
  author: Hugo
---

# Uso de Bluetooth con Seeed Studio XIAO MG24

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO MG24</th>
			<th>Seeed Studio XIAO MG24 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

El Seeed Studio XIAO MG24 es una placa de desarrollo robusta que soporta Bluetooth LE 5.3 y Bluetooth mesh, convirtiéndolo en una opción ideal para una amplia gama de aplicaciones IoT que requieren conectividad inalámbrica. Aprovechando su rendimiento RF excepcional, el XIAO MG24 ofrece comunicación inalámbrica confiable y de alta velocidad a través de varias distancias, convirtiéndolo en una solución versátil tanto para aplicaciones de corto alcance como de largo alcance. En este tutorial, exploraremos las características fundamentales de las capacidades Bluetooth del XIAO MG24, incluyendo cómo escanear dispositivos Bluetooth cercanos, establecer una conexión Bluetooth, y transmitir y recibir datos a través de esa conexión.

## Método para cambiar antenas

El Seeed Studio XIAO MG24 tiene dos opciones de antena: una antena interna y una antena externa. Por conveniencia, puedes elegir usar la antena interna, y para mejorar la intensidad de la señal, puedes optar por la antena externa. A continuación se presenta el método para cambiar entre las dos antenas.

PB04 se usa para seleccionar entre usar la antena integrada o una antena externa. Antes de eso, necesitas configurar PB05 a nivel alto para activar esta función. Si PB04 se configura a nivel bajo, usa la antena integrada; si se configura a nivel alto, usa la antena externa. Por defecto es nivel bajo. Si quieres configurarlo alto, puedes consultar el código a continuación.
```cpp
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  // turn on this antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, HIGH);
```

## Uso de Bluetooth Low Energy (BLE)

Bluetooth Low Energy, BLE para abreviar, es una variante de Bluetooth que conserva energía. La aplicación principal de BLE es la transmisión de pequeñas cantidades de datos a corta distancia (ancho de banda bajo). A diferencia de Bluetooth que siempre está encendido, BLE permanece en modo de suspensión constantemente excepto cuando se inicia una conexión.

Debido a sus propiedades, BLE es adecuado para aplicaciones que necesitan intercambiar pequeñas cantidades de datos periódicamente funcionando con una pila de botón. Por ejemplo, BLE es de gran utilidad en las industrias de salud, fitness, seguimiento, balizas, seguridad y automatización del hogar.

Esto hace que consuma muy poca energía. BLE consume aproximadamente 100 veces menos energía que Bluetooth (dependiendo del caso de uso).

Sobre la parte BLE del XIAO MG24, introduciremos su uso en las siguientes secciones.

- [Algunos conceptos fundamentales](#algunos-conceptos-fundamentales) -- Primero conoceremos algunos conceptos que pueden usarse frecuentemente en BLE para ayudarnos a entender el proceso de ejecución y el pensamiento de los programas BLE.
- [Escáner BLE](#escáner-ble) -- Esta sección explicará cómo buscar dispositivos Bluetooth cercanos e imprimirlos en el monitor serie.
- [Servidor/cliente BLE](#servidor-cliente-ble) -- Esta sección explicará cómo usar XIAO MG24 como Servidor y Cliente para enviar y recibir mensajes de datos especificados. También se usará para recibir o enviar mensajes desde el teléfono a XIAO.
<!-- - [Intercambio de Datos de Sensores BLE](#intercambio-de-datos-de-sensores-ble) -- Esta es la última sección del tutorial completo donde revisaremos un ejemplo de sensor para explicar cómo enviar los datos del sensor a través de BLE. -->

### Algunos conceptos fundamentales

#### Servidor y Cliente

Con Bluetooth Low Energy, hay dos tipos de dispositivos: el servidor y el cliente. El XIAO MG24 puede actuar como cliente o como servidor.

El servidor anuncia su existencia, por lo que puede ser encontrado por otros dispositivos, y contiene los datos que el cliente puede leer. El cliente escanea los dispositivos cercanos, y cuando encuentra el servidor que está buscando, establece una conexión y escucha los datos entrantes. Esto se llama comunicación punto a punto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/ble.png" style={{width:800, height:'auto'}}/></div>

#### Atributo

Atributo es en realidad un fragmento de datos. Cada dispositivo Bluetooth se usa para proporcionar un servicio, y el servicio es una colección de datos, la colección puede llamarse una base de datos, cada entrada en la base de datos es un Atributo, así que aquí traduzco Atributo como entradas de datos. Puedes imaginar un dispositivo Bluetooth como una tabla, cada fila dentro de la tabla es un Atributo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

Cuando dos dispositivos Bluetooth establecen una conexión, necesitan un protocolo para determinar cómo comunicarse. GATT (Generic Attribute Profile) es tal protocolo que define cómo se transmiten los datos entre dispositivos Bluetooth.

En el protocolo GATT, las funciones y propiedades de un dispositivo se organizan en estructuras llamadas servicios, características y descriptores. Un servicio representa un conjunto de funciones y características relacionadas proporcionadas por un dispositivo. Cada servicio puede incluir múltiples características, que definen una cierta propiedad o comportamiento del servicio, como datos de sensores o comandos de control. Cada característica tiene un identificador único y un valor, que puede ser leído o escrito para comunicarse. Los descriptores se usan para describir metadatos de las características, como el formato y el permiso de acceso de los valores de las características.

Al usar el protocolo GATT, los dispositivos Bluetooth pueden comunicarse en diferentes escenarios de aplicación, como transmitir datos de sensores o controlar dispositivos remotos.

#### Característica BLE

ATT, nombre completo protocolo de atributos. Al final, ATT está compuesto por un grupo de comandos ATT, es decir, comandos de solicitud y respuesta, ATT también es la capa superior del paquete nulo de Bluetooth, es decir, ATT es donde analizamos más el paquete Bluetooth.

Comando ATT, formalmente conocido como ATT PDU (Protocol Data Unit). Incluye 4 categorías: leer, escribir, notificar e indicar. Estos comandos pueden dividirse en dos tipos: si requiere una respuesta, entonces será seguido por una solicitud; por el contrario, si solo requiere un ACK pero no una respuesta, entonces no será seguido por una solicitud.

Service y Characteristic se definen en la capa GATT. El lado Service proporciona el Service, el Service son los datos, y los datos son el atributo, y el Service y Characteristic son la presentación lógica de los datos, o los datos que el usuario puede ver se transforman eventualmente en Service y Characteristic.

Echemos un vistazo a cómo se ven el servicio y la característica desde una perspectiva móvil. nRF Connect es una aplicación que nos muestra muy visualmente cómo debería verse cada paquete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

Como puedes ver, en la especificación Bluetooth, cada aplicación Bluetooth específica está compuesta por múltiples Services, y cada Service está compuesto por múltiples Characteristics. Una Characteristic consiste en un UUID, Properties y un Value.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Properties se usan para describir los tipos y permisos de operaciones en una característica, como si soporta leer, escribir, notificar, y así sucesivamente. Esto es similar a las cuatro categorías incluidas en un ATT PDU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Cada servicio, característica y descriptor tienen un UUID (Universally Unique Identifier). Un UUID es un número único de 128 bits (16 bytes). Por ejemplo:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

Existen UUID abreviados para todos los tipos, servicios y perfiles especificados en el [SIG (Grupo de Interés Especial de Bluetooth)](https://www.bluetooth.com/specifications/gatt/services). Pero si tu aplicación necesita su propio UUID, puedes generarlo usando este [sitio web generador de UUID](https://www.uuidgenerator.net/).

### Escáner BLE

Crear un escáner BLE XIAO MG24 es simple. El siguiente es un programa de ejemplo para crear un escáner.

```cpp
/*
   BLE scan example

   The example scans for other BLE devices and prints out the address, RSSI, channel and name for each found device.

   Find out more on the Silabs BLE API usage at: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   This example only works with the 'BLE (Silabs)' protocol stack variant.

   Compatible boards:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   Author: Tamas Jozsi (Silicon Labs)
 */
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup() {
  Serial.begin(115200);
}

void loop() {
  
}

static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
      // Print a welcome message
      Serial.begin(115200);

      // turn on this antenna function
      pinMode(RF_SW_PW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PW_PIN, HIGH);

      delay(100);
      // HIGH -> Use external antenna / LOW -> Use built-in antenna
      pinMode(RF_SW_PIN, OUTPUT); 
      digitalWrite(RF_SW_PIN, HIGH);

      Serial.println();
      Serial.println("Silicon Labs BLE scan example");
      Serial.println("BLE stack booted");
      // Start scanning for other BLE devices
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active,  // mode
                                        16,                              // interval (value * 0.625 ms)
                                        16);                             // window (value * 0.625 ms)
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Started scanning...");
      break;

    // This event is received when we scan the advertisement of another BLE device
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | Address: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | Channel: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | Name: ");
      Serial.println(get_complete_local_name_from_ble_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));
      break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * Finds the complete local name in BLE advertisements
 *
 * @param[in] response BLE response event received from scanning
 *
 * @return The complete local name if found, "N/A" otherwise
 *****************************************************************************/
static String get_complete_local_name_from_ble_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  // Go through the response data
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // If the length exceeds the maximum possible device name length
    if (advertisement_length > 29) {
      continue;
    }

    // Type 0x09 = Complete Local Name, 0x08 Shortened Name
    // If the field type matches the Complete Local Name
    if (advertisement_type == 0x09) {
      // Copy the device name
      char device_name[advertisement_length + 1];
      memcpy(device_name, response->data.data + i + 2, advertisement_length);
      device_name[advertisement_length] = '\0';
      return String(device_name);
    }
    // Jump to next advertisement record
    i = i + advertisement_length + 1;
  }
  return "N/A";
}

#ifndef BLE_STACK_SILABS
#error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

:::tip
Cabe señalar que 'BLE (Silabs)' en 'Tools > Protocol stack' debe seleccionarse antes de la compilación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/tool_select.png" style={{width:800, height:'auto'}}/></div>
:::

Ahora puedes seleccionar la placa madre XIAO MG24 y subir el programa. Si el programa funciona sin problemas, abre el monitor serie y establece la velocidad de baudios a 115200, podrás ver el siguiente resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/scan_result.png" style={{width:700, height:'auto'}}/></div>

Este programa imprime el nombre, dirección MAC, canal y señal del dispositivo Bluetooth escaneado.

#### Anotación del programa

Este ejemplo demuestra cómo escanear dispositivos Bluetooth Low Energy (BLE) cercanos utilizando la pila BLE de Silicon Labs, imprimiendo la dirección, RSSI (Indicador de Intensidad de Señal Recibida), canal y nombre de cada dispositivo descubierto.

El código comienza definiendo una función manejadora de eventos `sl_bt_on_event`, que procesa varios eventos de Bluetooth Low Energy (BLE) generados por la pila BLE. Esta función utiliza una declaración switch para diferenciar entre tipos de eventos, como cuando el dispositivo BLE se inicia y cuando recibe reportes de anuncios de dispositivos cercanos. Al recibir el evento de arranque, inicializa la comunicación serie, configura los pines GPIO para el control de antena, e inicia el escaneo de dispositivos BLE con parámetros especificados.

Cuando el proceso de escaneo detecta un reporte de anuncio de un dispositivo BLE, se activa el caso `sl_bt_evt_scanner_legacy_advertisement_report_id`. En este caso, la función incrementa un contador para cada dispositivo detectado y extrae información clave, incluyendo la dirección del dispositivo, RSSI, canal y nombre local. Utiliza la función auxiliar `get_complete_local_name_from_ble_advertisement` para recuperar el nombre completo del dispositivo de los datos de anuncio, que luego se imprime en la salida serie.

La función auxiliar `get_complete_local_name_from_ble_advertisement`, itera a través de los datos de anuncio para localizar el campo de nombre local completo. Verifica cada registro de anuncio para el tipo que corresponde al nombre local completo y lo devuelve como una cadena. Si no se encuentra el nombre completo, la función devuelve "N/A." Este enfoque sistemático permite a la aplicación descubrir e identificar efectivamente dispositivos BLE cercanos, proporcionando información valiosa durante el proceso de escaneo.

### Servidor/cliente BLE

Como se mencionó anteriormente, XIAO MG24 puede actuar tanto como servidor como cliente. Echemos un vistazo al programa como servidor y cómo usarlo. Después de subir el siguiente programa a XIAO, actuará como servidor y enviará un mensaje "Hello World" a todos los dispositivos Bluetooth conectados a XIAO.

```cpp
//Server Code
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

bool notification_enabled = false;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);
  Serial.println("Silicon Labs BLE send hello world example");

  // turn on the antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  if (notification_enabled) {
    // Send a notification every two seconds with the message 'hello world'
    send_helloworld_notification();
  }
  delay(2000);
}

static void ble_initialize_gatt_db();
static void ble_start_advertising();

static const uint8_t advertised_name[] = "XIAO_MG24 Server";  // Name of your BLE device
static uint16_t gattdb_session_id;
static uint16_t generic_access_service_handle;
static uint16_t name_characteristic_handle;
static uint16_t my_service_handle;
static uint16_t led_control_characteristic_handle;
static uint16_t notify_characteristic_handle;

/**************************************************************************/ /**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt) {
  switch (SL_BT_MSG_ID(evt->header)) {
    // -------------------------------
    // This event indicates the device has started and the radio is ready.
    // Do not call any stack command before receiving this boot event!
    case sl_bt_evt_system_boot_id:
      {
        Serial.println("BLE stack booted");

        // Initialize the application specific GATT table
        ble_initialize_gatt_db();

        // Start advertising
        ble_start_advertising();
        Serial.println("BLE advertisement started");
      }
      break;

    // -------------------------------
    // This event indicates that a new connection was opened
    case sl_bt_evt_connection_opened_id:
      Serial.println("BLE connection opened");
      break;

    // -------------------------------
    // This event indicates that a connection was closed
    case sl_bt_evt_connection_closed_id:
      Serial.println("BLE connection closed");
      // Restart the advertisement
      ble_start_advertising();
      Serial.println("BLE advertisement restarted");
      break;

    // -------------------------------
    // This event indicates that the value of an attribute in the local GATT
    // database was changed by a remote GATT client
    case sl_bt_evt_gatt_server_attribute_value_id:
      // Check if the changed characteristic is the LED control
      if (led_control_characteristic_handle == evt->data.evt_gatt_server_attribute_value.attribute) {
        Serial.println("LED control characteristic data received");
        // Check the length of the received data
        if (evt->data.evt_gatt_server_attribute_value.value.len == 0) {
          break;
        }
        // Get the received byte
        uint8_t received_data = evt->data.evt_gatt_server_attribute_value.value.data[0];
        // Turn the LED on/off according to the received data
        // If we receive a '0' - turn the LED off
        // If we receive a '1' - turn the LED on
        if (received_data == 0x00) {
          digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
          Serial.println("LED off");
        } else if (received_data == 0x01) {
          Serial.println("LED on");
          digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
        }
      }
      break;

    // -------------------------------
    // This event is received when a GATT characteristic status changes
    case sl_bt_evt_gatt_server_characteristic_status_id:
      // If the 'Notify' characteristic has been changed
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == notify_characteristic_handle) {
        // The client just enabled the notification - send notification of the current state
        if (evt->data.evt_gatt_server_characteristic_status.client_config_flags & sl_bt_gatt_notification) {
          Serial.println("change notification enabled");
          notification_enabled = true;
        } else {
          Serial.println("change notification disabled");
          notification_enabled = false;
        }
      }
      break;

    // -------------------------------
    // Default event handler
    default:
      break;
  }
}

/**************************************************************************/ /**
 * Sends a BLE notification the the client if notifications are enabled 
 *****************************************************************************/
static void send_helloworld_notification() {
  uint8_t str[12] = "Hello World";
  sl_status_t sc = sl_bt_gatt_server_notify_all(notify_characteristic_handle,
                                                sizeof(str),
                                                (const uint8_t *)&str);
  if (sc == SL_STATUS_OK) {
    Serial.println("Send notification!");
  }
}

/**************************************************************************/ /**
 * Starts BLE advertisement
 * Initializes advertising if it's called for the first time
 *****************************************************************************/
static void ble_start_advertising() {
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // Create an advertising set
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // Set advertising interval to 100ms
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,  // minimum advertisement interval (milliseconds * 1.6)
      160,  // maximum advertisement interval (milliseconds * 1.6)
      0,    // advertisement duration
      0);   // maximum number of advertisement events
    app_assert_status(sc);

    init = false;
  }

  // Generate data for advertising
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // Start advertising and enable connections
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);
}

/**************************************************************************/ /**
 * Initializes the GATT database
 * Creates a new GATT session and adds certain services and characteristics
 *****************************************************************************/
static void ble_initialize_gatt_db() {
  sl_status_t sc;
  // Create a new GATT database
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Add the Generic Access service to the GATT DB
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &generic_access_service_handle);
  app_assert_status(sc);

  // Add the Device Name characteristic to the Generic Access service
  // The value of the Device Name characteristic will be advertised
  const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              generic_access_service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              device_name_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(advertised_name) - 1,
                                              sizeof(advertised_name) - 1,
                                              advertised_name,
                                              &name_characteristic_handle);
  app_assert_status(sc);

  // Start the Generic Access service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
  app_assert_status(sc);

  // Add my BLE service to the GATT DB
  // UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
  const uuid_128 my_service_uuid = {
    .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
  };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(my_service_uuid),
                                my_service_uuid.data,
                                &my_service_handle);
  app_assert_status(sc);

  // Add the 'LED Control' characteristic to the Blinky service
  // UUID: 5b026510-4088-c297-46d8-be6c736a087a
  const uuid_128 led_control_characteristic_uuid = {
    .data = { 0x7a, 0x08, 0x6a, 0x73, 0x6c, 0xbe, 0xd8, 0x46, 0x97, 0xc2, 0x88, 0x40, 0x10, 0x65, 0x02, 0x5b }
  };
  uint8_t led_char_init_value = 0;
  sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                               my_service_handle,
                                               SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE,
                                               0x00,
                                               0x00,
                                               led_control_characteristic_uuid,
                                               sl_bt_gattdb_fixed_length_value,
                                               1,                            // max length
                                               sizeof(led_char_init_value),  // initial value length
                                               &led_char_init_value,         // initial value
                                               &led_control_characteristic_handle);

  // Start the Blinky service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // Add the 'Notify' characteristic to my BLE service
  // UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
  const uuid_128 btn_report_characteristic_uuid = {
    .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
  };
  uint8_t notify_char_init_value = 0;
  sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                               my_service_handle,
                                               SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY,
                                               0x00,
                                               0x00,
                                               btn_report_characteristic_uuid,
                                               sl_bt_gattdb_fixed_length_value,
                                               1,                               // max length
                                               sizeof(notify_char_init_value),  // initial value length
                                               &notify_char_init_value,         // initial value
                                               &notify_characteristic_handle);

  // Start my BLE service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
  app_assert_status(sc);

  // Commit the GATT DB changes
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
#error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

Mientras tanto, puedes buscar y descargar la aplicación **nRF Connect** en las principales tiendas de aplicaciones móviles, que permite a tu teléfono buscar y conectarse a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

Después de descargar el software, sigue los pasos que se muestran a continuación para buscar y conectar XIAO_MG24, y verás el anuncio "Hello World".

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-1.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-2.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-3.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-4.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>


Si quieres usar otro XIAO MG24 como cliente para recibir mensajes del servidor, entonces puedes usar el siguiente procedimiento para el XIAO cliente.

```cpp
// Client Code
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

// Connection states
enum conn_state_t {
  ST_BOOT,
  ST_SCAN,
  ST_CONNECT,
  ST_SERVICE_DISCOVER,
  ST_CHAR_DISCOVER,
  ST_READY
};

conn_state_t connection_state = ST_BOOT;
uint8_t connection_handle = __UINT8_MAX__;
uint32_t blinky_service_handle = __UINT32_MAX__;
uint16_t led_control_char_handle = __UINT16_MAX__;
bool gatt_procedure_in_progress = false;

// If there's no built-in button set a pin where a button is connected
#ifndef BTN_BUILTIN
#define BTN_BUILTIN D0
#endif

void setup() {
  // Set the built-in LED as output
  pinMode(LED_BUILTIN, OUTPUT);
  // Turn the built-in LED off
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  // Set the built-in button as input
  pinMode(BTN_BUILTIN, INPUT);
  // Start Serial
  Serial.begin(115200);

  // turn on the antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);
  digitalWrite(RF_SW_PIN, LOW);
}

void loop() {
  // Static variable for remembering the previous state of the button
  static uint8_t btn_state_prev = LOW;
  // If the connection is fully established and we don't have any ongoing GATT procedures
  if (connection_state == ST_READY && !gatt_procedure_in_progress) {
    // Read the current state of the button
    uint8_t btn_state = digitalRead(BTN_BUILTIN);
    // If the current state is different than the previous state
    if (btn_state_prev != btn_state) {
      // Update the previous state
      btn_state_prev = btn_state;
      // Invert the state (the SL board buttons give a 0 when pressed and 1 when released)
      uint8_t btn_state_inv = !btn_state;
      // Log the state change
      Serial.print("Sending button state: ");
      Serial.println(btn_state_inv);
      // Send the new state over BLE by writing the other device's LED Control characteristic
      sl_status_t sc = sl_bt_gatt_write_characteristic_value(connection_handle, led_control_char_handle, sizeof(uint8_t), &btn_state_inv);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
    }
  }
}

// Blinky service
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 blinky_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// LED Control characteristic
// UUID: 5b026510-4088-c297-46d8-be6c736a087a
const uuid_128 led_control_characteristic_uuid = {
  .data = { 0x7a, 0x08, 0x6a, 0x73, 0x6c, 0xbe, 0xd8, 0x46, 0x97, 0xc2, 0x88, 0x40, 0x10, 0x65, 0x02, 0x5b }
};
const uint8_t advertised_name[] = "XIAO_MG24 Server";

static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response);

/**************************************************************************/ /**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt) {
  static uint32_t scan_report_num = 0u;
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
      // Print a welcome message
      Serial.println();
      Serial.println("Silicon Labs BLE light switch client example");
      Serial.println("BLE stack booted");
      // Start scanning for other BLE devices
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Started scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is received when we scan the advertisement of another BLE device
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      scan_report_num++;
      Serial.print(" -> #");
      Serial.print(scan_report_num);
      Serial.print(" | Address: ");
      for (int i = 5; i >= 0; i--) {
        Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
        if (i > 0) {
          Serial.print(":");
        }
      }
      Serial.print(" | RSSI: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.rssi);
      Serial.print(" dBm");
      Serial.print(" | Channel: ");
      Serial.print(evt->data.evt_scanner_legacy_advertisement_report.channel);
      Serial.print(" | Name: ");
      Serial.println(find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report)));

      // If we find the other devices's name
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("Target device found!");
        Serial.print("Forming a connection to ");
        for (int i = 5; i >= 0; i--) {
          Serial.printf("%02x", evt->data.evt_scanner_legacy_advertisement_report.address.addr[i]);
          if (i > 0) {
            Serial.print(":");
          }
        }
        Serial.println(" ");

        // Stop scanning
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // Connect to the device
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        // app_assert_status(sc);
        connection_state = ST_CONNECT;

        Serial.println("We are now connected to the BLE Server");
      }
      break;

    // This event is received when a BLE connection has been opened
    case sl_bt_evt_connection_opened_id:
      Serial.println("Connection opened");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      connection_handle = evt->data.evt_connection_opened.connection;
      // Discover Health Thermometer service on the connected device
      sc = sl_bt_gatt_discover_primary_services_by_uuid(connection_handle,
                                                        sizeof(blinky_service_uuid),
                                                        blinky_service_uuid.data);
      app_assert_status(sc);
      gatt_procedure_in_progress = true;
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // This event is received when a BLE connection has been closed
    case sl_bt_evt_connection_closed_id:
      Serial.println("Connection closed");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      connection_handle = __UINT8_MAX__;
      // Restart scanning
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Restarted scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is generated when a new service is discovered
    case sl_bt_evt_gatt_service_id:
      Serial.println("GATT service discovered");
      // Store the handle of the discovered Thermometer Service
      blinky_service_handle = evt->data.evt_gatt_service.service;
      break;

    // This event is generated when a new characteristic is discovered
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("GATT charactersitic discovered");
      // Store the handle of the discovered Temperature Measurement characteristic
      led_control_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // This event is received when a GATT procedure completes
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATT procedure completed");
      gatt_procedure_in_progress = false;

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATT service discovery finished");
        // Discover thermometer characteristic on the connected device
        sc = sl_bt_gatt_discover_characteristics_by_uuid(evt->data.evt_gatt_procedure_completed.connection,
                                                         blinky_service_handle,
                                                         sizeof(led_control_characteristic_uuid.data),
                                                         led_control_characteristic_uuid.data);
        app_assert_status(sc);
        gatt_procedure_in_progress = true;
        connection_state = ST_CHAR_DISCOVER;
        break;
      }

      if (connection_state == ST_CHAR_DISCOVER) {
        Serial.println("GATT characteristic discovery finished");
        connection_state = ST_READY;
        break;
      }
      break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************/ /**
 * Finds a configured name in BLE advertisements
 *
 * @param[in] response BLE response event received from scanning
 *
 * @return true if found, false otherwise
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t* response) {
  int i = 0;
  bool found = false;

  // Go through the response data
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // Type 0x09 = Complete Local Name, 0x08 Shortened Name
    // If the field type matches the Complete Local Name
    if (advertisement_type == 0x09) {
      // Check if device name matches
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // Jump to next advertisement record
    i = i + advertisement_length + 1;
  }
  return found;
}

#ifndef BLE_STACK_SILABS
#error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

El programa anterior convertirá XIAO en un cliente y buscará dispositivos Bluetooth cercanos. Cuando el UUID del dispositivo Bluetooth coincida con el UUID que proporcionaste, se conectará al dispositivo y obtendrá su valor característico.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result.png" style={{width:800, height:'auto'}}/></div>


#### Anotación del programa

Echemos un vistazo rápido a cómo funciona el código de ejemplo del servidor BLE. Comienza importando las librerías necesarias para las capacidades BLE. Luego, necesitas definir un UUID para el Servicio y la Característica.

```c
// Add my BLE service to the GATT DB
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 my_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};

// Add the 'Notify' characteristic to my BLE service
// UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
const uuid_128 btn_report_characteristic_uuid = {
  .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
};
```

Puedes dejar los UUIDs predeterminados, o puedes ir a [uuidgenerator.net](https://www.uuidgenerator.net/) para crear UUIDs aleatorios para tus servicios y características.

Luego, creas un dispositivo BLE llamado "XIAO_MG24 Server". Puedes cambiar este nombre por el que prefieras. En la siguiente línea, estableces el dispositivo BLE como un servidor. Después de eso, creas un servicio para el servidor BLE con el UUID definido anteriormente.

```c
sl_status_t sc;
// Create a new GATT database
sc = sl_bt_gattdb_new_session(&gattdb_session_id);
app_assert_status(sc);

// Add the Generic Access service to the GATT DB
const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(generic_access_service_uuid),
                              generic_access_service_uuid,
                              &generic_access_service_handle);
app_assert_status(sc);

// Add the Device Name characteristic to the Generic Access service
// The value of the Device Name characteristic will be advertised
const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                            generic_access_service_handle,
                                            SL_BT_GATTDB_CHARACTERISTIC_READ,
                                            0x00,
                                            0x00,
                                            device_name_characteristic_uuid,
                                            sl_bt_gattdb_fixed_length_value,
                                            sizeof(advertised_name) - 1,
                                            sizeof(advertised_name) - 1,
                                            advertised_name,
                                            &name_characteristic_handle);
app_assert_status(sc);

// Start the Generic Access service
sc = sl_bt_gattdb_start_service(gattdb_session_id, generic_access_service_handle);
app_assert_status(sc);

// Add my BLE service to the GATT DB
// UUID: de8a5aac-a99b-c315-0c80-60d4cbb51224
const uuid_128 my_service_uuid = {
  .data = { 0x24, 0x12, 0xb5, 0xcb, 0xd4, 0x60, 0x80, 0x0c, 0x15, 0xc3, 0x9b, 0xa9, 0xac, 0x5a, 0x8a, 0xde }
};
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(my_service_uuid),
                              my_service_uuid.data,
                              &my_service_handle);
app_assert_status(sc);
```

Luego, estableces la característica para ese servicio. Como puedes ver, también usas el UUID definido anteriormente, y necesitas pasar como argumentos las propiedades de la característica. En este caso, son: READ y NOTIFY.

```c
// Add the 'Notify' characteristic to my BLE service
// UUID: 61a885a4-41c3-60d0-9a53-6d652a70d29c
const uuid_128 btn_report_characteristic_uuid = {
  .data = { 0x9c, 0xd2, 0x70, 0x2a, 0x65, 0x6d, 0x53, 0x9a, 0xd0, 0x60, 0xc3, 0x41, 0xa4, 0x85, 0xa8, 0x61 }
};
uint8_t notify_char_init_value = 0;
sc = sl_bt_gattdb_add_uuid128_characteristic(gattdb_session_id,
                                              my_service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY,
                                              0x00,
                                              0x00,
                                              btn_report_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              1,                               // max length
                                              sizeof(notify_char_init_value),  // initial value length
                                              &notify_char_init_value,         // initial value
                                              &notify_characteristic_handle);

// Start my BLE service
sc = sl_bt_gattdb_start_service(gattdb_session_id, my_service_handle);
app_assert_status(sc);

// Commit the GATT DB changes
sc = sl_bt_gattdb_commit(gattdb_session_id);
app_assert_status(sc);
```

Después de crear la característica, puedes establecer su valor con el método `sl_bt_gatt_server_notify_all()`. En este caso estamos estableciendo el valor al texto "Hello World". Puedes cambiar este texto por lo que gustes. En proyectos futuros, este texto puede ser una lectura de sensor, o el estado de una lámpara, por ejemplo.

Finalmente, puedes iniciar el servicio, y la publicidad, para que otros dispositivos BLE puedan escanear y encontrar este dispositivo BLE.

```c
// Start advertising
ble_start_advertising();
```

Este es solo un ejemplo simple de cómo crear un servidor BLE. La función de este programa es enviar notificaciones cada dos segundos, con el contenido siendo "Hello World".


### Intercambio de Datos de Sensores BLE

A continuación, pasaremos al mundo real para completar un caso. En este caso, utilizaremos la función `getCPUTemp()` del XIAO MG24 para medir la temperatura del MCU actual, y luego enviar el valor de temperatura del MCU a otro XIAO MG24 vía Bluetooth para simular un termómetro de salud.

Necesitamos preparar dos XIAO, uno como servidor y uno como cliente. Aquí está el programa de ejemplo como servidor. El XIAO como servidor tiene las siguientes tareas principales.
- Primero, usar la función `getCPUTemp()` para obtener la temperatura actual del MCU;
- Segundo, crear el servidor Bluetooth;
- Tercero, anunciar los valores de temperatura a través de Bluetooth;
- Cuarto, mostrar la temperatura en tiempo real.

```c
// server

/*
   BLE health thermometer example

   The example implements a minimal BLE Health Thermometer profile to provide temperature measurements over BLE

   On startup the sketch will start a BLE advertisement with the configured name, then
   it will accept any incoming connection. When a device is connected and enables indications for the
   health thermometer characteristic, then the device will send it's CPU temperature readings as thermometer data.
   With the EFR Connect app you can test this functionality by going to the "Demo" tab and selecting "Health Thermometer".
   Alternatively, you can test this example by flashing an other BLE board with the 'ble_health_thermometer_client' demo
   and have the two boards exchange the temperature measurements over BLE.

   Find out more on the API usage at: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   This example only works with the 'BLE (Silabs)' protocol stack variant.

   You can test the thermometer device with the EFR Connect app:
    - https://play.google.com/store/apps/details?id=com.siliconlabs.bledemo
    - https://apps.apple.com/us/app/efr-connect-ble-mobile-app/id1030932759

   Compatible boards:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   Author: Tamas Jozsi (Silicon Labs)
 */
 
#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

static void handle_temperature_indication();
static void ble_initialize_gatt_db();
static void ble_start_advertising();

const uint8_t advertised_name[] = "XIAOMG24_BLE";
uint8_t connection_handle = 0u;
uint16_t temp_measurement_characteristic_handle = 0u;
bool indication_enabled = false;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);
  
  // turn on this antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
  handle_temperature_indication();
}

/**************************************************************************//**
 * Sends a BLE indication with the current temperature to the connected device
 * if enabled, then waits for a second
 *****************************************************************************/
static void handle_temperature_indication()
{
  // Return immediately if indications are not enabled
  if (!indication_enabled) {
    return;
  }

  // Get the current CPU temperature
  float temperature = getCPUTemp();

  // Convert the temperature to an IEEE 11073 float value
  int32_t millicelsius = (int32_t)(temperature * 1000);
  uint8_t buffer[5];
  uint32_t tmp_value = ((uint32_t)millicelsius & 0x00ffffffu) | ((uint32_t)(-3) << 24);
  buffer[0] = 0;
  buffer[1] = tmp_value & 0xff;
  buffer[2] = (tmp_value >> 8) & 0xff;
  buffer[3] = (tmp_value >> 16) & 0xff;
  buffer[4] = (tmp_value >> 24) & 0xff;

  // Send the indication
  sl_bt_gatt_server_send_indication(connection_handle, temp_measurement_characteristic_handle, sizeof(buffer), buffer);

  // Log the temperature
  Serial.print("Temperature indication sent - current temperature: ");
  Serial.print(temperature);
  Serial.println(" C");

  // Wait for a second
  delay(1000);
}

/**************************************************************************//**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
    {
      // Print a welcome message
      Serial.begin(115200);
      Serial.println();
      Serial.println("Silicon Labs BLE health thermometer example");
      Serial.println("BLE stack booted");
      // Initialize the application specific GATT DB
      ble_initialize_gatt_db();
      // Start advertising
      ble_start_advertising();
    }
    break;

    // This event is received when a BLE connection has been opened
    case sl_bt_evt_connection_opened_id:
      // Store the connection handle which will be needed for sending indications
      connection_handle = evt->data.evt_connection_opened.connection;
      Serial.println("Connection opened");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      break;

    // This event is received when a BLE connection has been closed
    case sl_bt_evt_connection_closed_id:
      // Reset stored values
      connection_handle = 0u;
      indication_enabled = false;
      Serial.println("Connection closed");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // Restart the advertisement
      ble_start_advertising();
      break;

    // This event is received when a GATT characteristic status changes
    case sl_bt_evt_gatt_server_characteristic_status_id:
    {
      // If the temperature measurement characteristic has been changed
      if (evt->data.evt_gatt_server_characteristic_status.characteristic == temp_measurement_characteristic_handle) {
        uint16_t client_config_flags = evt->data.evt_gatt_server_characteristic_status.client_config_flags;
        uint8_t status_flags = evt->data.evt_gatt_server_characteristic_status.status_flags;
        if ((client_config_flags == 0x02) && (status_flags == 0x01)) {
          // If indication was enabled (0x02) in the client config flags, and the status flag shows that it's a change
          Serial.println("Temperature indication enabled");
          indication_enabled = true;
        } else if ((client_config_flags == 0x00) && (status_flags == 0x01)) {
          // If indication was disabled (0x00) in the client config flags, and the status flag shows that it's a change
          Serial.println("Temperature indication disabled");
          indication_enabled = false;
        }
      }
    }
    break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * Starts BLE advertisement
 * Initializes advertising if it's called for the first time
 *****************************************************************************/
static void ble_start_advertising()
{
  static uint8_t advertising_set_handle = 0xff;
  static bool init = true;
  sl_status_t sc;

  if (init) {
    // Create an advertising set
    sc = sl_bt_advertiser_create_set(&advertising_set_handle);
    app_assert_status(sc);

    // Set advertising interval to 100ms
    sc = sl_bt_advertiser_set_timing(
      advertising_set_handle,
      160,   // minimum advertisement interval (milliseconds * 1.6)
      160,   // maximum advertisement interval (milliseconds * 1.6)
      0,     // advertisement duration
      0);    // maximum number of advertisement events
    app_assert_status(sc);

    init = false;
  }

  // Generate data for advertising
  sc = sl_bt_legacy_advertiser_generate_data(advertising_set_handle, sl_bt_advertiser_general_discoverable);
  app_assert_status(sc);

  // Start advertising and enable connections
  sc = sl_bt_legacy_advertiser_start(advertising_set_handle, sl_bt_advertiser_connectable_scannable);
  app_assert_status(sc);

  Serial.print("Started advertising as '");
  Serial.print((const char*)advertised_name);
  Serial.println("'...");
}

/**************************************************************************//**
 * Initializes the GATT database
 * Creates a new GATT session and adds certain services and characteristics
 *****************************************************************************/
static void ble_initialize_gatt_db()
{
  sl_status_t sc;
  uint16_t gattdb_session_id;
  uint16_t service_handle;
  uint16_t device_name_characteristic_handle;
  uint16_t temp_type_characteristic_handle;

  // Create a new GATT database
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Generic Access service
  const uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(generic_access_service_uuid),
                                generic_access_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // Device Name characteristic
  const sl_bt_uuid_16_t device_name_characteristic_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              device_name_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(advertised_name) - 1,
                                              sizeof(advertised_name) - 1,
                                              advertised_name,
                                              &device_name_characteristic_handle);
  app_assert_status(sc);

  sc = sl_bt_gattdb_start_service(gattdb_session_id, service_handle);
  app_assert_status(sc);

  // Health Thermometer service
  const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                sizeof(thermometer_service_uuid),
                                thermometer_service_uuid,
                                &service_handle);
  app_assert_status(sc);

  // Temperature Measurement characteristic
  const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
  uint8_t temp_initial_value[5] = { 0, 0, 0, 0, 0 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_INDICATE,
                                              0x00,
                                              0x00,
                                              temp_measurement_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              5,
                                              5,
                                              temp_initial_value,
                                              &temp_measurement_characteristic_handle);
  app_assert_status(sc);

  // Temperature Type characteristic
  const sl_bt_uuid_16_t temp_type_characteristic_uuid = { .data = { 0x1D, 0x2A } };
  // Temperature type: body (2)
  uint8_t temp_type_initial_value = 2;
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service_handle,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0x00,
                                              0x00,
                                              temp_type_characteristic_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              1,
                                              1,
                                              &temp_type_initial_value,
                                              &temp_type_characteristic_handle);
  app_assert_status(sc);

  // Start the Health Thermometer service
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service_handle);
  app_assert_status(sc);

  // Commit the GATT DB changes
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
  #error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

Después de cargar el programa para uno de los XIAO, si el programa funciona sin problemas, entonces puedes sacar tu teléfono y usar la aplicación nRF Connect para buscar el dispositivo Bluetooth llamado **XIAOMG24_BLE**, conectarlo, y hacer clic en el botón que se muestra a continuación, recibirás la información de datos de temperatura.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEServer-5.jpg" style={{width:300, height:'auto'}}/></div>

A continuación, necesitamos sacar nuestro otro XIAO, que actúa como cliente para recopilar y mostrar nuestros datos.

```c
// client

/*
   BLE health thermometer client example

   The example connects to another board running the 'BLE Health Thermometer' example and reads the temperature through BLE

   On startup the sketch will start a scanning for the other board running the 'ble_health_thermometer' example and
   advertising as "Thermometer Example". Once the other board is found, it establishes a connection,
   discovers it's services and characteristics, then subscribes to the temperature measurements.
   After the subscription the example starts receiving the temperature data from the other board periodically,
   and prints it to Serial.

   Find out more on the API usage at: https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/

   This example only works with the 'BLE (Silabs)' protocol stack variant.

   Compatible boards:
   - Arduino Nano Matter
   - SparkFun Thing Plus MGM240P
   - xG27 DevKit
   - xG24 Explorer Kit
   - xG24 Dev Kit
   - BGM220 Explorer Kit
   - Ezurio Lyra 24P 20dBm Dev Kit
   - Seeed Studio XIAO MG24 (Sense)

   Author: Tamas Jozsi (Silicon Labs)
 */

#define RF_SW_PW_PIN PB5
#define RF_SW_PIN PB4

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.begin(115200);

  // turn on this antenna function
  pinMode(RF_SW_PW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PW_PIN, HIGH);

  delay(100);

  // HIGH -> Use external antenna / LOW -> Use built-in antenna
  pinMode(RF_SW_PIN, OUTPUT);  
  digitalWrite(RF_SW_PIN, LOW);
}

void loop()
{
}

// Connection states
enum conn_state_t {
  ST_BOOT,
  ST_SCAN,
  ST_CONNECT,
  ST_SERVICE_DISCOVER,
  ST_CHAR_DISCOVER,
  ST_REQUEST_INDICATION,
  ST_RECEIVE_DATA
};

// IEEE 11073 float structure
typedef struct {
  uint8_t mantissa_l;
  uint8_t mantissa_m;
  int8_t mantissa_h;
  int8_t exponent;
} IEEE_11073_float;

static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t *response);
static float translate_IEEE_11073_temperature_to_float(IEEE_11073_float const *IEEE_11073_value);

const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
const uint8_t advertised_name[] = "XIAOMG24_BLE";

uint32_t thermometer_service_handle = __UINT32_MAX__;
uint16_t temp_measurement_char_handle = __UINT16_MAX__;
conn_state_t connection_state = ST_BOOT;

/**************************************************************************//**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    // This event is received when the BLE device has successfully booted
    case sl_bt_evt_system_boot_id:
      // Print a welcome message
      Serial.println();
      Serial.println("Silicon Labs BLE health thermometer client example");
      Serial.println("BLE stack booted");
      // Start scanning for other BLE devices
      sc = sl_bt_scanner_set_parameters(sl_bt_scanner_scan_mode_active, 16, 16);
      app_assert_status(sc);
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Started scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is received when we scan the advertisement of another BLE device
    case sl_bt_evt_scanner_legacy_advertisement_report_id:
      Serial.println("BLE scan report received");
      // If we find the other devices's name
      if (find_complete_local_name_in_advertisement(&(evt->data.evt_scanner_legacy_advertisement_report))) {
        Serial.println("Target device found");
        // Stop scanning
        sc = sl_bt_scanner_stop();
        app_assert_status(sc);
        // Connect to the device
        sc = sl_bt_connection_open(evt->data.evt_scanner_legacy_advertisement_report.address,
                                   evt->data.evt_scanner_legacy_advertisement_report.address_type,
                                   sl_bt_gap_phy_1m,
                                   NULL);
        app_assert_status(sc);
        connection_state = ST_CONNECT;
      }
      break;

    // This event is received when a BLE connection has been opened
    case sl_bt_evt_connection_opened_id:
      Serial.println("Connection opened");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
      // Discover Health Thermometer service on the connected device
      sc = sl_bt_gatt_discover_primary_services_by_uuid(evt->data.evt_connection_opened.connection,
                                                        sizeof(thermometer_service_uuid),
                                                        thermometer_service_uuid);
      app_assert_status(sc);
      connection_state = ST_SERVICE_DISCOVER;
      break;

    // This event is received when a BLE connection has been closed
    case sl_bt_evt_connection_closed_id:
      Serial.println("Connection closed");
      digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
      // Restart scanning
      sc = sl_bt_scanner_start(sl_bt_scanner_scan_phy_1m,
                               sl_bt_scanner_discover_generic);
      app_assert_status(sc);
      Serial.println("Restarted scanning...");
      connection_state = ST_SCAN;
      break;

    // This event is generated when a new service is discovered
    case sl_bt_evt_gatt_service_id:
      Serial.println("GATT service discovered");
      // Store the handle of the discovered Thermometer Service
      thermometer_service_handle = evt->data.evt_gatt_service.service;
      break;

    // This event is generated when a new characteristic is discovered
    case sl_bt_evt_gatt_characteristic_id:
      Serial.println("GATT charactersitic discovered");
      // Store the handle of the discovered Temperature Measurement characteristic
      temp_measurement_char_handle = evt->data.evt_gatt_characteristic.characteristic;
      break;

    // This event is received when a GATT procedure completes
    case sl_bt_evt_gatt_procedure_completed_id:
      Serial.println("GATT procedure completed");

      if (connection_state == ST_SERVICE_DISCOVER) {
        Serial.println("GATT service discovery finished");
        // Discover thermometer characteristic on the connected device
        sc = sl_bt_gatt_discover_characteristics_by_uuid(evt->data.evt_gatt_procedure_completed.connection,
                                                         thermometer_service_handle,
                                                         sizeof(temp_measurement_characteristic_uuid.data),
                                                         temp_measurement_characteristic_uuid.data);
        app_assert_status(sc);
        connection_state = ST_CHAR_DISCOVER;
        break;
      }

      if (connection_state == ST_CHAR_DISCOVER) {
        Serial.println("GATT characteristic discovery finished");
        // Enable temperature measurement indications
        sc = sl_bt_gatt_set_characteristic_notification(evt->data.evt_gatt_procedure_completed.connection,
                                                        temp_measurement_char_handle,
                                                        sl_bt_gatt_indication);
        app_assert_status(sc);
        connection_state = ST_REQUEST_INDICATION;
        break;
      }

      if (connection_state == ST_REQUEST_INDICATION) {
        Serial.println("Temperature measurement indications enabled");
        connection_state = ST_RECEIVE_DATA;
      }
      break;

    // This event is received when a characteristic value was received (like an indication)
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("GATT data received");
      // Get the received data from the event
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // Convert it back to float
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // Print to Serial
      Serial.print("Received temperature: ");
      Serial.print(temperature);
      Serial.println(" C");

      sc = sl_bt_gatt_send_characteristic_confirmation(evt->data.evt_gatt_characteristic_value.connection);
      app_assert_status(sc);
    }
    break;

    // Default event handler
    default:
      Serial.print("BLE event: 0x");
      Serial.println(SL_BT_MSG_ID(evt->header), HEX);
      break;
  }
}

/**************************************************************************//**
 * Finds a configured name in BLE advertisements
 *
 * @param[in] response BLE response event received from scanning
 *
 * @return true if found, false otherwise
 *****************************************************************************/
static bool find_complete_local_name_in_advertisement(sl_bt_evt_scanner_legacy_advertisement_report_t *response)
{
  int i = 0;
  bool found = false;

  // Go through the response data
  while (i < (response->data.len - 1)) {
    uint8_t advertisement_length = response->data.data[i];
    uint8_t advertisement_type = response->data.data[i + 1];

    // Type 0x09 = Complete Local Name, 0x08 Shortened Name
    // If the field type matches the Complete Local Name
    if (advertisement_type == 0x09) {
      // Check if device name matches
      if (memcmp(response->data.data + i + 2, advertised_name, strlen((const char*)advertised_name)) == 0) {
        found = true;
        break;
      }
    }
    // Jump to next advertisement record
    i = i + advertisement_length + 1;
  }
  return found;
}

/**************************************************************************//**
 * Translates a IEEE-11073 temperature value to float
 *
 * @param[in] IEEE_11073_value the IEEE 11073 float value to convert
 *
 * @return the converted value in float, NAN on failure
 *****************************************************************************/
static float translate_IEEE_11073_temperature_to_float(IEEE_11073_float const *IEEE_11073_value)
{
  int32_t mantissa = 0;
  uint8_t mantissa_l;
  uint8_t mantissa_m;
  int8_t mantissa_h;
  int8_t exponent;

  // Wrong Argument: NULL pointer is passed
  if (!IEEE_11073_value) {
    return NAN;
  }

  // Caching Fields
  mantissa_l = IEEE_11073_value->mantissa_l;
  mantissa_m = IEEE_11073_value->mantissa_m;
  mantissa_h = IEEE_11073_value->mantissa_h;
  exponent =  IEEE_11073_value->exponent;

  // IEEE-11073 Standard NaN Value Passed
  if ((mantissa_l == 0xFF) && (mantissa_m == 0xFF) && (mantissa_h == 0x7F) && (exponent == 0x00)) {
    return NAN;
  }

  // Converting a 24bit Signed Value to a 32bit Signed Value
  mantissa |= mantissa_h;
  mantissa <<= 8;
  mantissa |= mantissa_m;
  mantissa <<= 8;
  mantissa |= mantissa_l;
  mantissa <<= 8;
  mantissa >>= 8;

  return ((float)mantissa) * pow(10.0f, (float)exponent);
}

#ifndef BLE_STACK_SILABS
  #error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

Finalmente, si los programas del Servidor y Cliente se ejecutan sin problemas, puedes ver la siguiente información impresa por el Cliente a través del puerto serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Bluetooth/BLEClient_result-1.png" style={{width:700, height:'auto'}}/></div>

#### Anotación del programa

Para los programas anteriores, seleccionaremos las partes más importantes para explicar. Comenzaremos con el programa del servidor.

Al inicio del programa, definimos el nombre del servidor Bluetooth, este nombre puede ser el nombre que establezcas, pero necesitas recordarlo porque necesitas confiar en este nombre para buscar este dispositivo Bluetooth.

```c
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

En las secciones anteriores del tutorial, hemos hablado de que bajo el servidor habrá Characteristic, y bajo Characteristic estarán los valores y el resto del contenido. Por lo tanto, necesitamos seguir este principio cuando creamos anuncios.

```c
// Health Thermometer service
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
sc = sl_bt_gattdb_add_service(gattdb_session_id,
                              sl_bt_gattdb_primary_service,
                              SL_BT_GATTDB_ADVERTISED_SERVICE,
                              sizeof(thermometer_service_uuid),
                              thermometer_service_uuid,
                              &service_handle);
app_assert_status(sc);

// Temperature Measurement characteristic
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
uint8_t temp_initial_value[5] = { 0, 0, 0, 0, 0 };
sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                            service_handle,
                                            SL_BT_GATTDB_CHARACTERISTIC_INDICATE,
                                            0x00,
                                            0x00,
                                            temp_measurement_characteristic_uuid,
                                            sl_bt_gattdb_fixed_length_value,
                                            5,
                                            5,
                                            temp_initial_value,
                                            &temp_measurement_characteristic_handle);
app_assert_status(sc);
```

En el programa anterior, puedes ver que `sl_bt_gattdb_add_service()` se usa para crear un servidor. El parámetro es un UUID específico: **0x1809**. En las reglas de GATT, **0x1809** indica datos de tipo termómetro, y el UUID de la misma Característica: **0x2A1C** también tiene un significado especial. En GATT, indica la medición de temperatura. Esto se ajusta al caso de nuestros valores de temperatura, por lo que aquí lo estoy definiendo como tal. Puedes leer [aquí](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf) qué significan algunos de los UUIDs específicos que GATT ha preparado para nosotros.

Por supuesto, también puedes establecer los UUIDs sin seguir el estándar GATT, solo necesitas asegurarte de que estos dos valores sean únicos y no afecten la capacidad de tu cliente para encontrar los valores reconociendo estos UUIDs. Puedes ir a [uuidgenerator.net](https://www.uuidgenerator.net/) para crear UUIDs aleatorios para tus servicios y características.

Finalmente, medimos y anunciamos el valor de temperatura del MCU una vez por segundo en el `loop`.

El siguiente paso es el programa Cliente, que parecerá mucho más complicado.

Al comienzo del programa, sigue siendo contenido muy familiar. Necesitas asegurarte de que este contenido sea consistente con lo que has configurado en el lado del servidor.

```c
const uint8_t thermometer_service_uuid[] = { 0x09, 0x18 };
const sl_bt_uuid_16_t temp_measurement_characteristic_uuid = { .data = { 0x1C, 0x2A } };
const uint8_t advertised_name[] = "XIAOMG24_BLE";
```

A continuación, escribiremos una función manejadora de eventos de la pila Bluetooth, que principalmente maneja tareas de callback activadas por varios eventos Bluetooth, incluyendo la inicialización de dispositivos Bluetooth, conexión y desconexión de Bluetooth, y búsqueda de dispositivos Bluetooth cercanos.

```c
/**************************************************************************//**
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t *evt)
```

El siguiente proceso es clave para encontrar valores de temperatura en el servidor. Primero, después de localizar exitosamente nuestro UUID del servidor y encontrar el UUID de la característica bajo el servidor, procesaremos los datos obtenidos, como se muestra en el siguiente fragmento de código. Finalmente, imprimir los datos procesados a través del puerto serie. Este método de análisis tiene una correspondencia uno a uno con la estructura de datos de Bluetooth.

```c
void sl_bt_on_event(sl_bt_msg_t *evt)
{
  sl_status_t sc;

  switch (SL_BT_MSG_ID(evt->header)) {
    
    ...

    // This event is received when a characteristic value was received (like an indication)
    case sl_bt_evt_gatt_characteristic_value_id:
    {
      Serial.println("GATT data received");
      // Get the received data from the event
      uint8_t* char_value = &(evt->data.evt_gatt_characteristic_value.value.data[0]);
      // Convert it back to float
      float temperature = translate_IEEE_11073_temperature_to_float((IEEE_11073_float *)(char_value + 1));
      // Print to Serial
      Serial.print("Received temperature: ");
      Serial.print(temperature);
      Serial.println(" C");

      sc = sl_bt_gatt_send_characteristic_confirmation(evt->data.evt_gatt_characteristic_value.connection);
      app_assert_status(sc);
    }
    break;

    ...
  
  }
}
```


:::tip
El ejemplo anterior proporciona el ejemplo más simple de un solo valor para un solo sensor, obtenido de Silicon Labs. Si deseas obtener una comprensión más profunda del uso de la API BLE de SiliconLabs, recomendamos leer el tutorial aquí.

- [Referencia de la API del Stack Bluetooth de SiliconLabs](https://docs.silabs.com/bluetooth/latest/bluetooth-stack-api/)
:::


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
