---
title: Seeed Studio XIAO MG24 Sense sensor integrado
description: Este artículo describe cómo usar el micrófono en el XIAO MG24 Sense.
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /es/xiao_mg24_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 3
---

# Uso del sensor integrado del Seeed Studio XIAO MG24 Sense

## XIAO MG24 Sense IMU

### Descripción general de los sensores integrados

Los sensores **IMU de 6 ejes (Unidad de Medición Inercial)** como el **LSM6DS3TR-C** integran acelerómetros y giroscopios para medir el movimiento y la orientación de un objeto en el espacio tridimensional. Específicamente, el LSM6DS3TR-C tiene las siguientes características:

**Función del acelerómetro:**

- Mide la aceleración de un objeto a lo largo de los ejes X, Y y Z. Es capaz de detectar el movimiento del objeto (por ejemplo, reposo, aceleración, desaceleración) y cambios de inclinación (por ejemplo, ángulo del objeto).
- Se puede usar para detectar la marcha, cambios de posición, vibraciones, etc.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**Función del giroscopio:**

- Mide la velocidad angular de un objeto alrededor de los ejes X, Y y Z, es decir, la rotación del objeto.
- Se puede usar para detectar rotación, velocidad de rotación y cambio de dirección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- El **ángulo del eje X (Roll)** es el ángulo en la dirección de rotación alrededor del eje X.
- El **ángulo del eje Y (Pitch)** es el ángulo en la dirección de rotación alrededor del eje Y.
- El **ángulo del eje Z (Yaw)** es el ángulo en la dirección de rotación alrededor del eje Z.

### Preparación del software

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Haz clic en el enlace de descarga de github para obtener el controlador del sensor de seis ejes.

### Implementación del código

```cpp

#include <LSM6DS3.h>
#include <Wire.h>

//Create a instance of class LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);    //I2C device address 0x6A
float aX, aY, aZ, gX, gY, gZ;
const float accelerationThreshold = 2.5; // threshold of significant in G's
const int numSamples = 119;
int samplesRead = numSamples;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  while (!Serial);

  pinMode(PD5,OUTPUT);
  digitalWrite(PD5,HIGH);
  //Call .begin() to configure the IMUs
  if (myIMU.begin() != 0) {
    Serial.println("Device error");
  } else {
    Serial.println("aX,aY,aZ,gX,gY,gZ");
  }
}

void loop() {
  // wait for significant motion
  while (samplesRead == numSamples) {
    // read the acceleration data
    aX = myIMU.readFloatAccelX();
    aY = myIMU.readFloatAccelY();
    aZ = myIMU.readFloatAccelZ();

    // sum up the absolutes
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);

    // check if it's above the threshold
    if (aSum >= accelerationThreshold) {
      // reset the sample read count
      samplesRead = 0;
      break;
    }
  }

  // check if the all the required samples have been read since
  // the last time the significant motion was detected
  while (samplesRead < numSamples) {
    // check if both new acceleration and gyroscope data is
    // available
    // read the acceleration and gyroscope data

    samplesRead++;

    // print the data in CSV format
    Serial.print(myIMU.readFloatAccelX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatAccelZ(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroX(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroY(), 3);
    Serial.print(',');
    Serial.print(myIMU.readFloatGyroZ(), 3);
    Serial.println();

    if (samplesRead == numSamples) {
      // add an empty line if it's the last sample
      Serial.println();
    }
  }
}
```

:::tip

Debido a la actualización de la biblioteca LSM6DS3, si previamente has añadido esta biblioteca al usuario, necesitarás volver a descargar la versión 2.0.4 o superior y añadir el archivo ZIP a Arduino.

:::

### Descripción General de Funciones

- **Incluir Bibliotecas**

  ```cpp
    #include <LSM6DS3.h> 
    #include <Wire.h>
  ```

  - Incluye la biblioteca para comunicarse con el sensor LSM6DS3.
  - Incluye la biblioteca para comunicación I2C.

- **Crear Instancia del Sensor**
  - `LSM6DS3 myIMU(I2C_MODE, 0x6A)` Crea una instancia de la clase LSM6DS3 para el sensor IMU, especificando el modo de comunicación I2C y la dirección del dispositivo 0x6A.

- **Variables y Constantes**
  - `float aX, aY, aZ, gX, gY, gZ`: Variables para almacenar datos del acelerómetro y giroscopio.
  - `const float accelerationThreshold = 2.5`: El valor umbral en G's para detectar movimiento significativo.
  - `const int numSamples = 119`: El número de muestras a recopilar después de detectar movimiento significativo.
  - `int samplesRead = numSamples`: Inicializa el contador de muestras al número total de muestras, indicando que aún no se han recopilado datos.

- **Configuraciones Básicas**

  ```cpp
    pinMode(PD5,OUTPUT);
    digitalWrite(PD5,HIGH);
  ```

  - Activa el pin de habilitación del giroscopio.

- **Procesamiento de Datos**

    ```cpp
    aX = myIMU.readFloatAccelX();:
    aY = myIMU.readFloatAccelY();:
    aZ = myIMU.readFloatAccelZ();:
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);
    ```

  - Lee la aceleración a lo largo de X.
  - Lee la aceleración a lo largo de Y.
  - Lee la aceleración a lo largo de Z.
  - Calcula la suma de los valores absolutos de los datos de aceleración，`fabs()` devuelve el valor absoluto.

  ```cpp
    // check if it's above the threshold
    if (aSum >= accelerationThreshold) {
      // reset the sample read count
      samplesRead = 0;
      break;
    }
  ```

  - Si la suma de los valores absolutos de aceleración es mayor o igual al umbral establecido, reinicia el contador de muestras samplesRead a 0 y sale del bucle.

- **Verificar Datos**

  ```cpp
  while (samplesRead < numSamples) {
    samplesRead++;
    .
    .
    .
    .
    .
    if (samplesRead == numSamples) {
      // add an empty line if it's the last sample
      Serial.println();
    }
  }
  ```

  - Ir a otro bucle y verificar si se ha leído el número requerido de muestras.
  - Aumentar el conteo de samplesRead.
  - Si todas las muestras han sido leídas, imprimir una línea en blanco para separar la salida de datos.

### Gráfico de Resultados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/six_resutl.png" style={{width:700, height:'auto'}}/></div>

### Más

Si quieres más código de ejemplo, por favor haz clic: **"File" -> Example -> Seeed Arduino LSM6DS3"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/33.png" style={{width:500, height:'auto'}}/></div>

## IMU Demo Avanzado

### Preparación de Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeeduino-XIAO-Expansion-Board</th>
   <th>Seeed Studio XIAO MG24 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Preparación de Software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/arduino_mouse.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Necesitamos seleccionar la pila correspondiente en la barra de herramientas para grabar el programa.
:::

<details>

<summary>Código del Programa</summary>

```cpp
#include <LSM6DS3.h>
#include "Wire.h"

#define DEVICE_NAME "XIAO MG24 Mouse"

#define IMU_ACC_X_THRESHOLD 10
#define IMU_ACC_Y_THRESHOLD 10

// Mouse button events
#define LMB_PRESSED 1

// HID report data
struct mouse_data {
  int8_t delta_x;
  int8_t delta_y;
  uint8_t buttons;
};
static mouse_data report;

// HID report data buffer
static uint8_t report_array[] = { 0x00, 0x00, 0x00 };

static uint8_t connection_handle = SL_BT_INVALID_CONNECTION_HANDLE;
static uint32_t bonding_handle = SL_BT_INVALID_BONDING_HANDLE;
static uint16_t hid_report;

// Device information service
const uint8_t manufacturer[] = "Silicon Labs";
const uint8_t model_no[] = "1";
const uint8_t serial_no[] = "1";
const uint8_t hw_rev[] = "1";
const uint8_t fw_rev[] = "1";
const uint8_t sw_rev[] = "1";

static bd_addr ble_address = { 0x00u, 0x00u, 0x00u, 0x00u, 0x00u, 0x00u };
static bool button_press = false;
static bool button_press_prev = false;
static int32_t acc_x = 0, acc_y = 0;
static sl_status_t sc = SL_STATUS_OK;

static void ble_initialize_gatt_db();
static void ble_start_advertising();
static void mouse_button_callback();

// Optionally connect a button for left click
#define MOUSE_BUTTON D1

LSM6DS3 myIMU(I2C_MODE, 0x6A);

void setup()
{
  // Initialize report data
  memset(&report, 0, sizeof(report));

  // Enable the IMU power
  pinMode(PD5, OUTPUT);
  digitalWrite(PD5, HIGH);
  delay(300);

  pinMode(MOUSE_BUTTON, INPUT_PULLUP);
  attachInterrupt(MOUSE_BUTTON, mouse_button_callback, CHANGE);

  Serial.begin(115200);

  Serial.println("XIAO MG24 BLE mouse");

  myIMU.begin();
  Serial.println("---");
  Serial.println("IMU initialized");
}

void loop()
{
  // Update 'left mouse button' bit
  if (button_press) {
    report.buttons |= LMB_PRESSED;
    if (!button_press_prev) {
      button_press_prev = true;
      Serial.println("Button pressed");
    }
  } else {
    button_press_prev = false;
    report.buttons &= ~LMB_PRESSED;
  }

  // Change x and y for correct orientation of the boards
  acc_y = (int32_t)(myIMU.readFloatAccelX() * 10.0f);
  acc_x = (int32_t)(myIMU.readFloatAccelY() * 10.0f * -1.0f);

  // In case the acceleration value would surpass the threshold value
  // in positive or negative direction assign the threshold value
  if (acc_x > IMU_ACC_X_THRESHOLD) {
    report.delta_x = IMU_ACC_X_THRESHOLD;
  } else if (acc_x < (-1 * IMU_ACC_X_THRESHOLD)) {
    report.delta_x = (-1 * IMU_ACC_X_THRESHOLD);
  } else {
    report.delta_x = acc_x;
  }

  if (acc_y > IMU_ACC_Y_THRESHOLD) {
    report.delta_y = IMU_ACC_Y_THRESHOLD;
  } else if (acc_y < (-1 * IMU_ACC_Y_THRESHOLD)) {
    report.delta_y = (-1 * IMU_ACC_Y_THRESHOLD);
  } else {
    report.delta_y = acc_y;
  }

  memcpy(report_array, &report, sizeof(report));
  if (connection_handle != SL_BT_INVALID_CONNECTION_HANDLE && bonding_handle != SL_BT_INVALID_BONDING_HANDLE) {
    // Indicate report data change with GATT notification
    sc = sl_bt_gatt_server_notify_all(hid_report, sizeof(report_array), report_array);
    if (sc != SL_STATUS_OK) {
      Serial.print("sl_bt_gatt_server_notify_all() returned with error code 0x");
      Serial.println(sc, HEX);
    } else {
      Serial.print("cursor [delta-X: ");
      Serial.print(report.delta_x, DEC);
      Serial.print(" delta-Y: ");
      Serial.print(report.delta_y, DEC);
      Serial.print(" ] LMB: ");
      Serial.println(report.buttons, HEX);
    }
  }
}

/******************************************************************************
 * Mouse button callback
 *****************************************************************************/
void mouse_button_callback()
{
  if (digitalRead(MOUSE_BUTTON) == LOW) {
    button_press = true;
  } else {
    button_press = false;
  }
}

/******************************************************************************
 * Bluetooth stack event handler
 * Called when an event happens on BLE the stack
 *
 * @param[in] evt Event coming from the Bluetooth stack
 *****************************************************************************/
void sl_bt_on_event(sl_bt_msg_t* evt)
{
  sl_status_t sc = SL_STATUS_OK;
  uint8_t ble_address_type;

  switch (SL_BT_MSG_ID(evt->header)) {
    // -------------------------------
    // This event indicates the device has started and the radio is ready
    case sl_bt_evt_system_boot_id:
    {
      // Get BLE address and address type
      sc = sl_bt_system_get_identity_address(&ble_address, &ble_address_type);
      app_assert_status(sc);

      // Print welcome message
      Serial.begin(115200);
      Serial.println();
      Serial.println("BLE stack booted");

      // Initialize the application specific GATT DB
      ble_initialize_gatt_db();

      // HID input devices requires mandatory secure level and bonding
      sc = sl_bt_sm_configure(0, sl_bt_sm_io_capability_noinputnooutput);
      app_assert_status(sc);

      // Allow bonding
      sc = sl_bt_sm_set_bondable_mode(1);
      app_assert_status(sc);

      ble_start_advertising();
    }
    break;

    // -------------------------------
    // This event indicates that a BLE connection has been opened
    case sl_bt_evt_connection_opened_id:
    {
      // Store the connection handle which will be needed for sending indications
      connection_handle = evt->data.evt_connection_opened.connection;
      bonding_handle = evt->data.evt_connection_opened.bonding;
      Serial.print("Connection opened - handle 0x");
      Serial.println(connection_handle, HEX);

      if (bonding_handle == SL_BT_INVALID_BONDING_HANDLE) {
        Serial.println("Connection not bonded yet");
      } else {
        Serial.println("Connection bonded");
      }

      Serial.println("Increase security");
      sc = sl_bt_sm_increase_security(evt->data.evt_connection_opened.connection);
      app_assert_status(sc);
    }
    break;

    // -------------------------------
    // This event indicates that bonding was successful
    case sl_bt_evt_sm_bonded_id:
    {
      Serial.print("Bonded - handle: 0x");
      Serial.print(evt->data.evt_sm_bonded.connection, HEX);
      bonding_handle = evt->data.evt_sm_bonded.bonding;
      connection_handle = evt->data.evt_sm_bonded.connection;

      Serial.print(" - security mode: 0x");
      Serial.println(evt->data.evt_sm_bonded.security_mode, HEX);
    }
    break;

    // -------------------------------
    // This event indicates that a BLE connection has closed
    case sl_bt_evt_connection_closed_id:
    {
      Serial.print("Connection closed - handle: 0x");
      Serial.print(connection_handle, HEX);
      Serial.print(" reason: 0x");
      Serial.println(evt->data.evt_connection_closed.reason, HEX);

      connection_handle = SL_BT_INVALID_CONNECTION_HANDLE;
      bonding_handle = SL_BT_INVALID_BONDING_HANDLE;

      sc = sl_bt_sm_delete_bondings();
      Serial.println("Deleted bondings");
      app_assert_status(sc);

      ble_start_advertising();
    }
    break;

    // -------------------------------
    // This event indicates that the connection parameters have changed
    case sl_bt_evt_connection_parameters_id:
    {
      Serial.print("Set connection parameters, security_mode: ");
      Serial.println(evt->data.evt_connection_parameters.security_mode, HEX);
    }
    break;

    // -------------------------------
    // This event indicates that bonding has failed
    case sl_bt_evt_sm_bonding_failed_id:
    {
      Serial.print("Bonding failed, reason: 0x");
      Serial.println(evt->data.evt_sm_bonding_failed.reason, HEX);
      Serial.println("Delete bondings.");

      sc = sl_bt_sm_delete_bondings();
      app_assert_status(sc);

      Serial.println("Bondings deleted");
      Serial.print("Close connection - handle: 0x");
      Serial.println(evt->data.evt_sm_bonding_failed.connection, HEX);
    }
    break;

    // -------------------------------
    // Default event handler
    default:
      break;
  }
}

/******************************************************************************
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
      160,  // Minimum advertisement interval (milliseconds * 1.6)
      160,  // Maximum advertisement interval (milliseconds * 1.6)
      0,    // Advertisement duration
      0);   // Maximum number of advertisement events
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
  Serial.print(DEVICE_NAME);
  Serial.print("' address: ");
  // Print address in format 'FF:FF:FF:FF:FF:FF'
  for (uint8_t i = (sizeof(bd_addr) - 1); i > 0; i--) {
    Serial.print(ble_address.addr[i], HEX);
    Serial.print(":");
  }
  Serial.println(ble_address.addr[0], HEX);
}

/******************************************************************************
 * Initializes the GATT database
 * Creates a new GATT session and adds certain services and characteristics
 *****************************************************************************/
static void ble_initialize_gatt_db()
{
  sl_status_t sc;
  uint16_t gattdb_session_id;
  uint16_t service;
  uint16_t characteristic;
  uint16_t descriptor;

  // Create a new GATT database
  sc = sl_bt_gattdb_new_session(&gattdb_session_id);
  app_assert_status(sc);

  // Generic access service
  uint8_t generic_access_service_uuid[] = { 0x00, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                2,
                                generic_access_service_uuid,
                                &service);
  app_assert_status(sc);

  // Device name characteristic
  sl_bt_uuid_16_t device_name_uuid = { .data = { 0x00, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE),
                                              0,
                                              0,
                                              device_name_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              strlen(DEVICE_NAME),
                                              strlen(DEVICE_NAME),
                                              (uint8_t *)DEVICE_NAME,
                                              &characteristic);
  app_assert_status(sc);

  // Appearance characteristic
  sl_bt_uuid_16_t appearence_uuid = { .data = { 0x01, 0x2A } };
  const uint8_t appearance_value[] = { 0xC2, 0x03 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              appearence_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              2,
                                              sizeof(appearance_value),
                                              appearance_value,
                                              &characteristic);
  app_assert_status(sc);

  // Generic access service start
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // Battery service
  const uint8_t battery_service_uuid[] = { 0x0F, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                0,
                                sizeof(battery_service_uuid),
                                battery_service_uuid,
                                &service);
  app_assert_status(sc);

  // Battery level characteristic
  const sl_bt_uuid_16_t battery_level_uuid = { .data = { 0x19, 0x2A } };
  const uint8_t battery_level_init_value = 100;
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              battery_level_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(battery_level_init_value),
                                              sizeof(battery_level_init_value),
                                              &battery_level_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // Characteristic presentation format descriptor
  const sl_bt_uuid_16_t chara_presentation_format_descriptor_uuid = { .data = { 0x04, 0x29 } };
  const uint8_t chara_presentation_format_value[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          0,
                                          chara_presentation_format_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(chara_presentation_format_value),
                                          sizeof(chara_presentation_format_value),
                                          chara_presentation_format_value,
                                          &descriptor);
  app_assert_status(sc);

  // Client characteristic configuration descriptor
  const sl_bt_uuid_16_t client_configuration_descriptor_uuid = { .data = { 0x02, 0x29 } };
  const uint8_t client_configuration_value[] = { 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          (SL_BT_GATTDB_DESCRIPTOR_READ | SL_BT_GATTDB_DESCRIPTOR_WRITE),
                                          0,
                                          client_configuration_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(client_configuration_value),
                                          sizeof(client_configuration_value),
                                          client_configuration_value,
                                          &descriptor);
  app_assert_status(sc);

  // Battery service start
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // Device information service
  const uint8_t device_info_service_uuid[] = { 0x0A, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                0,
                                sizeof(device_info_service_uuid),
                                device_info_service_uuid,
                                &service);
  app_assert_status(sc);

  // Manufacturer name string characteristic
  const sl_bt_uuid_16_t manufacturer_uuid = { .data = { 0x29, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              manufacturer_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(manufacturer) - 1),
                                              (sizeof(manufacturer) - 1),
                                              manufacturer,
                                              &characteristic);
  app_assert_status(sc);

  // Model number string characteristic
  const sl_bt_uuid_16_t model_no_uuid = { .data = { 0x24, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              model_no_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(model_no) - 1),
                                              (sizeof(model_no) - 1),
                                              model_no,
                                              &characteristic);
  app_assert_status(sc);

  // Serial number string characteristic
  const sl_bt_uuid_16_t serial_no_uuid = { .data = { 0x25, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              serial_no_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(serial_no) - 1),
                                              (sizeof(serial_no) - 1),
                                              serial_no,
                                              &characteristic);
  app_assert_status(sc);

  // Hardware revision string characteristic
  const sl_bt_uuid_16_t hw_rev_uuid = { .data = { 0x27, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              hw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(hw_rev) - 1),
                                              (sizeof(hw_rev) - 1),
                                              hw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // Firmware revision string characteristic
  const sl_bt_uuid_16_t fw_rev_uuid = { .data = { 0x26, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              fw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(fw_rev) - 1),
                                              (sizeof(fw_rev) - 1),
                                              fw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // Software revision string characteristic
  const sl_bt_uuid_16_t sw_rev_uuid = { .data = { 0x28, 0x2A } };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              sw_rev_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              (sizeof(sw_rev) - 1),
                                              (sizeof(sw_rev) - 1),
                                              sw_rev,
                                              &characteristic);
  app_assert_status(sc);

  // System ID characteristic
  const sl_bt_uuid_16_t sys_id_uuid = { .data = { 0x23, 0x2A } };
  const uint8_t sys_id_initial_value[] = { 0x12, 0x34, 0x56, 0xFF, 0xFE, 0x9A, 0xBC, 0xDE };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              sys_id_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(sys_id_initial_value),
                                              sizeof(sys_id_initial_value),
                                              sys_id_initial_value,
                                              &characteristic);
  app_assert_status(sc);

  // PnP ID characteristic
  const sl_bt_uuid_16_t pnp_id_uuid = { .data = { 0x50, 0x2A } };
  const uint8_t pnp_id_initial_value[] = { 0x02, 0x10, 0xC4, 0x00, 0x01, 0x00, 0x01 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              pnp_id_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(pnp_id_initial_value),
                                              sizeof(pnp_id_initial_value),
                                              pnp_id_initial_value,
                                              &characteristic);
  app_assert_status(sc);

  // Device information service start
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // HID service
  uint8_t hid_service_uuid[] = { 0x12, 0x18 };
  sc = sl_bt_gattdb_add_service(gattdb_session_id,
                                sl_bt_gattdb_primary_service,
                                SL_BT_GATTDB_ADVERTISED_SERVICE,
                                2,
                                hid_service_uuid,
                                &service);
  app_assert_status(sc);

  // Protocol mode characteristic
  sl_bt_uuid_16_t hid_protocol_mode_uuid = { .data = { 0x4E, 0x2A } };
  const uint8_t hid_protocol_mode_init_value[] = { 1 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE_NO_RESPONSE),
                                              0,
                                              0,
                                              hid_protocol_mode_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_protocol_mode_init_value),
                                              sizeof(hid_protocol_mode_init_value),
                                              hid_protocol_mode_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID report characteristic
  const sl_bt_uuid_16_t hid_report_uuid = { .data = { 0x4D, 0x2A } };
  const uint8_t hid_report_init_value[] = { 0x00, 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              (SL_BT_GATTDB_CHARACTERISTIC_READ | SL_BT_GATTDB_CHARACTERISTIC_WRITE | SL_BT_GATTDB_CHARACTERISTIC_NOTIFY),
                                              0,
                                              0,
                                              hid_report_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_report_init_value),
                                              sizeof(hid_report_init_value),
                                              hid_report_init_value,
                                              &characteristic);
  app_assert_status(sc);
  hid_report = characteristic;

  // HID report reference descriptor
  const sl_bt_uuid_16_t hid_report_reference_desc_uuid = { .data = { 0x08, 0x29 } };
  const uint8_t hid_report_reference_desc_init_val[] = { 0x00, 0x01 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          SL_BT_GATTDB_ENCRYPTED_READ,
                                          hid_report_reference_desc_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(hid_report_reference_desc_init_val),
                                          sizeof(hid_report_reference_desc_init_val),
                                          hid_report_reference_desc_init_val,
                                          &descriptor);
  app_assert_status(sc);

  // HID report map characteristic
  const sl_bt_uuid_16_t hid_report_map_uuid = { .data = { 0x4B, 0x2A } };
  const uint8_t hid_report_map_init_value[] = { 0x05, 0x01, // Usage page (Generic Desktop)
                                                0x09, 0x02, // Usage (Mouse)
                                                0xA1, 0x01, // Collection (Application)
                                                0x09, 0x01, //   UsageId (Pointer)
                                                0xA1, 0x00, //   Collection (Physical)
                                                0x09, 0x30, //     UsageId (x)
                                                0x09, 0x31, //     UsageId (y)
                                                0x15, 0x80, //     LogicalMinimum(-128)
                                                0x25, 0x7F, //     LogicalMaximum(127)
                                                0x95, 0x02, //     ReportCount(2)
                                                0x75, 0x08, //     ReportSize(8)
                                                0x81, 0x06, //     Input(Data, Variable, Relative, NoWrap, Linear, PreferredState, NoNullPosition, BitField)
                                                0x05, 0x09, //     UsagePage(Button)
                                                0x19, 0x01, //     UsageIdMin(Button 1)
                                                0x29, 0x03, //     UsageIdMax(Button 3)
                                                0x15, 0x00, //     LogicalMinimum(0)
                                                0x25, 0x01, //     LogicalMaximum(1)
                                                0x95, 0x03, //     ReportCount(3)
                                                0x75, 0x01, //     ReportSize(1)
                                                0x81, 0x02, //     Input(Data, Variable, Absolute, NoWrap, Linear, PreferredState, NoNullPosition, BitField)
                                                0x95, 0x01, //     ReportCount(1)
                                                0x75, 0x05, //     ReportSize(5)
                                                0x81, 0x03, //     Input(Constant, Variable, Absolute, NoWrap, Linear, PreferredState, NoNullPosition, BitField)
                                                0xC0,       //   EndCollection()
                                                0xC0 };     // EndCollection()
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              SL_BT_GATTDB_ENCRYPTED_READ,
                                              0,
                                              hid_report_map_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_report_map_init_value),
                                              sizeof(hid_report_map_init_value),
                                              hid_report_map_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID external report reference descriptor
  const sl_bt_uuid_16_t hid_external_report_reference_descriptor_uuid = { .data = { 0x07, 0x29 } };
  const uint8_t hid_external_report_reference_value[] = { 0x00, 0x00 };
  sc = sl_bt_gattdb_add_uuid16_descriptor(gattdb_session_id,
                                          characteristic,
                                          SL_BT_GATTDB_DESCRIPTOR_READ,
                                          0,
                                          hid_external_report_reference_descriptor_uuid,
                                          sl_bt_gattdb_fixed_length_value,
                                          sizeof(hid_external_report_reference_value),
                                          sizeof(hid_external_report_reference_value),
                                          hid_external_report_reference_value,
                                          &descriptor);
  app_assert_status(sc);

  // HID information characteristic
  const sl_bt_uuid_16_t hid_info_uuid = { .data = { 0x4A, 0x2A } };
  const uint8_t hid_info_init_value[] = { 0x01, 0x11, 0x00, 0x02 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_READ,
                                              0,
                                              0,
                                              hid_info_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_info_init_value),
                                              sizeof(hid_info_init_value),
                                              hid_info_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID control point characteristic
  const sl_bt_uuid_16_t hid_control_point_uuid = { .data = { 0x4C, 0x2A } };
  const uint8_t hid_control_point_init_value[] = { 0x00 };
  sc = sl_bt_gattdb_add_uuid16_characteristic(gattdb_session_id,
                                              service,
                                              SL_BT_GATTDB_CHARACTERISTIC_WRITE_NO_RESPONSE,
                                              0,
                                              0,
                                              hid_control_point_uuid,
                                              sl_bt_gattdb_fixed_length_value,
                                              sizeof(hid_control_point_init_value),
                                              sizeof(hid_control_point_init_value),
                                              hid_control_point_init_value,
                                              &characteristic);
  app_assert_status(sc);

  // HID service start
  sc = sl_bt_gattdb_start_service(gattdb_session_id, service);
  app_assert_status(sc);

  // Commit the GATT DB changes
  sc = sl_bt_gattdb_commit(gattdb_session_id);
  app_assert_status(sc);
}

#ifndef BLE_STACK_SILABS
  #error "This example is only compatible with the Silicon Labs BLE stack. Please select 'BLE (Silabs)' in 'Tools > Protocol stack'."
#endif
```

</details>

### Gráfico de Resultados

Cuando presionamos el botón en la placa de expansión, ¡podemos observar que el evento del ratón se activa!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/hid_mouse.gif" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 Sense Micrófono(Demo de Seeed Studio)

### Descripción General de los Sensores Integrados

**Sensor de Micrófono** como el **MSM381ACT001** es un micrófono MEMS (Sistemas Micro-Electro-Mecánicos) diseñado para capturar señales de audio con **alta sensibilidad y bajo ruido**. Específicamente, el MSM381ACT001 tiene las siguientes características:

**Función del Micrófono:**

- Captura ondas sonoras y las convierte en señales eléctricas, permitiendo la detección de entrada de audio en varios entornos.
- Cuenta con un amplio rango de respuesta de frecuencia, típicamente de 20 Hz a 20 kHz, adecuado para una variedad de aplicaciones de audio, incluyendo reconocimiento de voz y reproducción de música.

**Características Clave**

- Alta Sensibilidad: Capaz de detectar sonidos débiles, haciéndolo ideal para aplicaciones que requieren captura de audio precisa.
- Bajo Ruido: Diseñado para proporcionar una alta relación señal-ruido (SNR), asegurando una salida de audio clara incluso en entornos ruidosos.
- Tamaño Compacto: La tecnología MEMS permite un factor de forma pequeño, facilitando la integración fácil en dispositivos portátiles como teléfonos inteligentes y dispositivos vestibles.
- Salida Digital: Ofrece opciones de salida de señal digital (por ejemplo, I2S), simplificando la interfaz con procesadores de señal digital (DSPs) y microcontroladores.

### Preparación del Software

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_Mic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Haz clic en el enlace de descarga de github para obtener el controlador del sensor de micrófono.

:::tip
Actualmente necesitamos modificar manualmente el archivo de reemplazo, la descarga directa posterior de la librería se puede usar, por favor espera a que actualicemos nuestro wiki.
:::

- **[Archivos de Reemplazo]** [gsdk.a](https://files.seeedstudio.com/wiki/mg24_mic/gsdk_v2.a)

**Cambiando la ruta del archivo**

- **/Users/tunombre/Library/Arduino15/packages/SiliconLabs/hardware/silabs/2.2.0/variants/xiao_mg24/ble_silabs/**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/file.png" style={{width:350, height:'auto'}}/></div>

### Implementación del Código

```cpp
#include <mic.h>
#if defined(WIO_TERMINAL)
#include "processing/filters.h"
#endif

// Settings
#if defined(WIO_TERMINAL)
#define DEBUG 1                 // Enable pin pulse during ISR  
#define SAMPLES 16000*3
#elif defined(ARDUINO_ARCH_NRF52840)
#define DEBUG 1                 // Enable pin pulse during ISR  
#define SAMPLES 800
#elif defined(ARDUINO_SILABS)
#define DEBUG 1                 // Enable pin pulse during ISR  
#define SAMPLES 800
#endif

mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
#if defined(WIO_TERMINAL)
  .debug_pin = 1                // Toggles each DAC ISR (if DEBUG is set to 1)
#elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN                // Toggles each DAC ISR (if DEBUG is set to 1)
#elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN                // Toggles each DAC ISR (if DEBUG is set to 1)  
#endif
};

#if defined(WIO_TERMINAL)
DMA_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_ARCH_NRF52840)
NRF52840_ADC_Class Mic(&mic_config);
#elif defined(ARDUINO_SILABS)
MG24_ADC_Class Mic(&mic_config);
#endif

int16_t recording_buf[SAMPLES];
volatile uint8_t recording = 0;
volatile static bool record_ready = false;

#if defined(WIO_TERMINAL)
FilterBuHp filter;
#endif

void setup() {

  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("Mic initialization failed");
    while (1);
  }

  Serial.println("Mic initialization done.");

}

void loop() { 

#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {

    Serial.println("Starting sampling");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
  Serial.println("Finished sampling");
  
  for (int i = 0; i < SAMPLES; i++) {
    
  //int16_t sample = filter.step(recording_buf[i]);
  int16_t sample = recording_buf[i];
  Serial.println(sample);
  }
  
  record_ready = false; 
  }
}

static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  
  static uint32_t idx = 0;
  // Copy samples from DMA buffer to inference buffer
#if defined(WIO_TERMINAL)
  if (recording) 
#endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
  
      // Convert 12-bit unsigned ADC value to 16-bit PCM (signed) audio value
#if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      //recording_buf[idx++] = (int16_t)(buf[i] - 1024) * 16;  
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
#endif

      if (idx >= SAMPLES){ 
      idx = 0;
      recording = 0;
      record_ready = true;
      break;
     } 
    }
  }

}
```

### Descripción General de la Función

**Configuración del Micrófono**

  ```cpp
  mic_config_t mic_config{
  .channel_cnt = 1,
  .sampling_rate = 16000,
  .buf_size = 1600,
  #if defined(WIO_TERMINAL)
  .debug_pin = 1
  #elif defined(ARDUINO_ARCH_NRF52840)
  .debug_pin = LED_BUILTIN
  #elif defined(ARDUINO_SILABS)
  .debug_pin = LED_BUILTIN
  #endif
};
  ```

- mic_config_t: Define una estructura de configuración del micrófono.
- channel_cnt: establecer a 1 para mono.
- sampling_rate: Establecer a 16000 Hz para la frecuencia de muestreo.
- buf_size: establecer a 1600 para el tamaño del búfer.
- ebug_pin: establecer el pin de depuración según la plataforma, usado para indicación de señal durante la depuración.

**Instanciación del micrófono**

  ```cpp
  #if defined(WIO_TERMINAL)
  DMA_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_ARCH_NRF52840)
  NRF52840_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_SILABS)
  MG24_ADC_Class Mic(&mic_config);
  #endif
  ```

- Compilación condicional: crear las instancias de clase de micrófono apropiadas para diferentes plataformas, usando la configuración previamente definida.

**Búferes de grabación y banderas**

  ```cpp
  int16_t recording_buf[SAMPLES];
  volatile uint8_t recording = 0;
  volatile static bool record_ready = false;
  ```

- recording_buf: Define un array de SAMPLES para almacenar muestras de grabación.
- recording: una variable volátil que marca si la grabación está actualmente en progreso para prevenir la optimización del compilador.
- record_ready: una variable estática volátil que indica si la grabación está completa y lista para procesamiento adicional.

**Ejemplo de Filtro (para WIO Terminal)**

  ```cpp
  #if defined(WIO_TERMINAL)
  FilterBuHp filter;
  #endif
  ```

- Si está en el WIO Terminal, crea una instancia de un filtro pasa-altos para el procesamiento de filtros.

**setup**

  ```cpp
  void setup() {
  Serial.begin(115200);
  while (!Serial) {delay(10);}
  
#if defined(WIO_TERMINAL)  
  pinMode(WIO_KEY_A, INPUT_PULLUP);
#endif

  Mic.set_callback(audio_rec_callback);

  if (!Mic.begin()) {
    Serial.println("Mic initialization failed");
    while (1);
  }

  Serial.println("Mic initialization done.");
}
  ```

  -Inicializar Puerto Serie: Iniciar comunicación serie a 115200 baudios y esperar a que el puerto serie esté listo.

- Establecer Modo de Pin: En WIO Terminal, establecer los pines de tecla en modo de entrada pull-up.
- Establecer función de callback: llamar Mic.set_callback(audio_rec_callback) para especificar la función de callback al grabar audio.
- Inicializar el micrófono: llamar Mic.begin(), si la inicialización falla, imprimir un mensaje de error y entrar en un bucle infinito.

**loop**

  ```cpp
  void loop() { 
#if defined(WIO_TERMINAL)  
if (digitalRead(WIO_KEY_A) == LOW && !recording) {
    Serial.println("Starting sampling");
    recording = 1;
    record_ready = false;  
}
#endif

#if defined(WIO_TERMINAL)  
  if (!recording && record_ready)
#elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
  if (record_ready)
#endif  
  {
    Serial.println("Finished sampling");
    
    for (int i = 0; i < SAMPLES; i++) {
      int16_t sample = recording_buf[i];
      Serial.println(sample);
    }
    
    record_ready = false; 
  }
}
  ```

- Detectar Tecla: En el WIO Terminal, comienza a grabar cuando detecta que se ha presionado una tecla y no está grabando.
- Muestreo finalizado: Imprime "Finished sampling" si no está grabando y record_ready está establecido en true.
- Itera a través del búfer de grabación e imprime cada valor de muestra.

**Función de callback de grabación de audio**

  ```cpp
  static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {
  static uint32_t idx = 0;
  #if defined(WIO_TERMINAL)
  if (recording) 
  #endif
  {
    for (uint32_t i = 0; i < buf_len; i++) {
      #if defined(WIO_TERMINAL)
      recording_buf[idx++] = filter.step((int16_t)(buf[i] - 1024) * 16);
      #elif defined(ARDUINO_ARCH_NRF52840) || defined(ARDUINO_SILABS)
      recording_buf[idx++] = buf[i];
      #endif

      if (idx >= SAMPLES){ 
        idx = 0;
        recording = 0;
        record_ready = true;
        break;
      } 
    }
  }
}
  ```

- Función de callback: llamada durante la grabación de audio, responsable de copiar muestras del buffer DMA al buffer de grabación.
- Compilación Condicional: Procesa la entrada usando filtros si está en el WIO Terminal.
- Convierte valores ADC de 12 bits sin signo a valores de audio PCM de 16 bits (con signo).
- Llenado de Muestras: copia muestras en recording_buf y actualiza el índice idx.
- Finalizar grabación: si el número de muestras llenadas alcanza SAMPLES, reinicia el índice, marca el final de la grabación y establece record_ready a true.

### Gráfico de Resultados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result1.png" style={{width:680, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result.png" style={{width:680, height:'auto'}}/></div>

Aquí está la forma de onda del sonido reconocido, cuando soplas, puedes ver claramente que la amplitud de oscilación de la forma de onda se vuelve más grande.

### Más

Si quieres más código de ejemplo, Por favor Haz Clic: -> **"Example -> Seeed Arduino Mic"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/34.png" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/35.png" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 Sense Micrófono(Demo de Silicon Labs)

:::tip
Necesitamos descargar el paquete de placa más reciente (2.3.0) para poder encontrar el código oficial más reciente en el ejemplo
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24download.jpg" style={{width:400, height:'auto'}}/></div>

### Preparación del Software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24mic.jpg" style={{width:500, height:'auto'}}/></div>

### Implementación del Código

```cpp
/*
   Analog microphone volume example

   The example showcases the usage of analog MEMS microphones and dims the
   on-board LED based on the microphone's input volume.
   This example is compatible with all Silicon Labs Arduino boards, however
   it requires an analog microphone on-board or connected to the specified pin.

   Author: Áron Gyapjas (Silicon Labs)
 */

#include <SilabsMicrophoneAnalog.h>

// This configuration is for the MSM381ACT001 microphone on the Seeed Studio XIAO MG24
// Change it according to your hardware
#define MIC_DATA_PIN  PC9
#define MIC_PWR_PIN   PC8
#define NUM_SAMPLES   128
#define MIC_VALUE_MIN 735
#define MIC_VALUE_MAX 900

// Buffers for storing samples
uint32_t mic_buffer[NUM_SAMPLES];
uint32_t mic_buffer_local[NUM_SAMPLES];

volatile bool data_ready_flag = false;
MicrophoneAnalog micAnalog(MIC_DATA_PIN, MIC_PWR_PIN);
void mic_samples_ready_cb();
void calculate_and_display_voice_level();

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);

  micAnalog.begin(mic_buffer, NUM_SAMPLES);
  Serial.println("Microphone initialized...");

  micAnalog.startSampling(mic_samples_ready_cb);
  Serial.println("Sampling started...");
}

void loop()
{
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_voice_level();
  }
}

// Called when the requested amount of samples are available from the microphone
void mic_samples_ready_cb()
{
  // Copy data to the local buffer in order to prevent it from overwriting
  memcpy(mic_buffer_local, mic_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}

void calculate_and_display_voice_level() {
  // Rolling average for smoothing the voice level
  static uint32_t rolling_average = 0u;

  // Stop sampling in order to prevent overwriting the current data
  micAnalog.stopSampling();

  // Get the average of the sampled values
  uint32_t voice_level = (uint32_t)micAnalog.getAverage(mic_buffer_local, NUM_SAMPLES);
  // Adjust the voice level relative to minimum/maximum of the microphone's output
  voice_level = constrain(voice_level, MIC_VALUE_MIN, MIC_VALUE_MAX);
  // Calculate the rolling average
  rolling_average = (voice_level + rolling_average) / 2;

  // Map the current average level to brightness
  int brightness = map(rolling_average, MIC_VALUE_MIN, MIC_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(LED_BUILTIN, 255 - brightness);
  } else {
    analogWrite(LED_BUILTIN, brightness);
  }
  // Print the average voice level (you can use the Serial Plotter to view this value on a graph)
  Serial.println(rolling_average);

  // Restart sampling
  micAnalog.startSampling(mic_samples_ready_cb);
}

```

### Descripción general de funciones

***Introducción del archivo de cabecera***

```cpp
#include <SilabsMicrophoneAnalog.h>
```

- Incluye el archivo de cabecera `SilabsMicrophoneAnalog.h`, que contiene las funciones de biblioteca y definiciones necesarias para usar el micrófono analógico.

***Configuración de hardware***

```cpp
#define MIC_DATA_PIN  PC9
#define MIC_PWR_PIN   PC8
#define NUM_SAMPLES   128
#define MIC_VALUE_MIN 735
#define MIC_VALUE_MAX 900
```

- `MIC_DATA_PIN`: Define el pin de datos del micrófono como `PC9`.

- `MIC_PWR_PIN`: Define el pin de alimentación del micrófono como `PC8`.

- `NUM_SAMPLES`: Define el número de muestras por muestreo como 128.

- `MIC_VALUE_MIN` y `MIC_VALUE_MAX`: Definen el rango mínimo y máximo de la salida del micrófono.

***Definición del Buffer***

```cpp
uint32_t mic_buffer[NUM_SAMPLES];
uint32_t mic_buffer_local[NUM_SAMPLES];
```

- `mic_buffer`: Utilizado para almacenar datos de muestra sin procesar recopilados del micrófono.

- `mic_buffer_local`: Utilizado para almacenar temporalmente datos de muestra para evitar sobrescritura.

***Definiciones de banderas y objetos***

```cpp
volatile bool data_ready_flag = false;
MicrophoneAnalog micAnalog(MIC_DATA_PIN, MIC_PWR_PIN);
```

- `data_ready_flag`: Una bandera para indicar si los nuevos datos de muestra están listos.

- `micAnalog`: Crea un objeto MicrophoneAnalog para controlar el micrófono.

***Declaración de Función de Callback***

```cpp
void mic_samples_ready_cb();
void calculate_and_display_voice_level();
```

- `mic_samples_ready_cb()`: Una función de callback llamada cuando el muestreo está completo.

- `calculate_and_display_voice_level()`: Una función para calcular el volumen y controlar el brillo del LED.

***función setup()***

```cpp
void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);

  micAnalog.begin(mic_buffer, NUM_SAMPLES);
  Serial.println("Microphone initialized...");

  micAnalog.startSampling(mic_samples_ready_cb);
  Serial.println("Sampling started...");
}
```

- Inicializa la comunicación serie con una velocidad de baudios de 115200.

- Establece el pin del LED integrado en modo de salida.

- Inicializa el micrófono y especifica el búfer de muestra.

- Inicia el muestreo y establece la función de callback para cuando el muestreo esté completo.

***función loop()***

```cpp
void loop()
{
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_voice_level();
  }
}
```

- Verifica si `data_ready_flag` es `true`, indicando que hay nuevos datos listos.

- Si hay nuevos datos disponibles, llama a la función `calculate_and_display_voice_level()` para procesar los datos.

```cpp

void mic_samples_ready_cb()
{
  memcpy(mic_buffer_local, mic_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}
```

Copia datos de muestra de `mic_buffer` a `mic_buffer_local` para evitar sobrescritura.

Establece `data_ready_flag` a `true` para indicar que hay nuevos datos listos.

```cpp

void calculate_and_display_voice_level() {
  static uint32_t rolling_average = 0u;

  micAnalog.stopSampling();

  uint32_t voice_level = (uint32_t)micAnalog.getAverage(mic_buffer_local, NUM_SAMPLES);
  voice_level = constrain(voice_level, MIC_VALUE_MIN, MIC_VALUE_MAX);
  rolling_average = (voice_level + rolling_average) / 2;

  int brightness = map(rolling_average, MIC_VALUE_MIN, MIC_VALUE_MAX, 0, 255);
  if (LED_BUILTIN_ACTIVE == LOW) {
    analogWrite(LED_BUILTIN, 255 - brightness);
  } else {
    analogWrite(LED_BUILTIN, brightness);
  }
  Serial.println(rolling_average);

  micAnalog.startSampling(mic_samples_ready_cb);
}
```

- Detiene el muestreo para evitar la sobrescritura de datos.

- Calcula el promedio de los datos de muestra y lo limita entre `MIC_VALUE_MIN` y `MIC_VALUE_MAX`.

- Calcula un promedio móvil para suavizar los cambios de volumen.

- Mapea el promedio móvil al rango de brillo del LED (0 a 255) y ajusta el brillo del LED.

- Envía el promedio móvil por serie para observar los cambios de volumen.

- Reinicia el muestreo para recopilar nuevos datos de audio.

### Gráfico de Resultados

Cuando soplamos en el micrófono, podemos ver que el led en la parte superior se iluminará y oscurecerá con el sonido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic.gif" style={{width:500, height:'auto'}}/></div>

### Más

Si deseas más código de ejemplo, por favor haz clic: -> **"Example -> SilabsMicrophoneAnalog -> MicrophoneVolume"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_arduino.jpg" style={{width:500, height:'auto'}}/></div>

## Recursos

### Para Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Hoja de datos del IMU de 6 ejes de Seeed Studio (LSM6DS3TR-C)](https://statics3.seeedstudio.com/fusion/opl/sheets/314040211.pdf)
- 📄 **[PDF]** [Hoja de datos del Micrófono Analógico de Seeed Studio (MSM381ACT001)](https://files.seeedstudio.com/wiki/mg24_mic/312030602_MEMSensing_MSM381ACT001_Datasheet.pdf)

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
