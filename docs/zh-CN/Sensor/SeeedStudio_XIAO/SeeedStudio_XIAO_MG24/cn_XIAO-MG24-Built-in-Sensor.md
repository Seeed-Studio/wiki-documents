---
title: Seeed Studio XIAO MG24 Sense 内置传感器
description: 本文介绍如何使用 XIAO MG24 Sense 上的麦克风。
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /cn/xiao_mg24_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 3
---

# Seeed Studio XIAO MG24 Sense 内置传感器使用方法

## XIAO MG24 Sense IMU

### 内置传感器概述

**6轴 IMU（惯性测量单元）** 传感器如 **LSM6DS3TR-C** 集成了加速度计和陀螺仪，用于测量物体在三维空间中的运动和方向。具体来说，LSM6DS3TR-C 具有以下特性：

**加速度计功能：**

- 测量物体沿 X、Y 和 Z 轴的加速度。它能够感知物体运动（例如，静止、加速、减速）和倾斜变化（例如，物体的角度）。
- 可用于检测步态、位置变化、振动等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**陀螺仪功能：**

- 测量物体围绕 X、Y 和 Z 轴的角速度，即物体的旋转。
- 可用于检测旋转、旋转速率和方向变化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- **X轴角度（Roll）** 是围绕X轴旋转方向的角度。
- **Y轴角度（Pitch）** 是围绕Y轴旋转方向的角度。
- **Z轴角度（Yaw）** 是围绕Z轴旋转方向的角度。

### 软件准备

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

点击 github 下载链接获取六轴传感器驱动库。

### 代码实现

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

由于 LSM6DS3 库的更新，如果您之前已经添加了此库，您需要重新下载 2.0.4 或更高版本并将 ZIP 文件添加到 Arduino。

:::

### 功能概述

- **包含库**

  ```cpp
    #include <LSM6DS3.h> 
    #include <Wire.h>
  ```

  - 包含用于与LSM6DS3传感器通信的库。
  - 包含用于I2C通信的库。

- **创建传感器实例**
  - `LSM6DS3 myIMU(I2C_MODE, 0x6A)` 为IMU传感器创建LSM6DS3类的实例，指定I2C通信模式和设备地址0x6A。

- **变量和常量**
  - `float aX, aY, aZ, gX, gY, gZ`：用于存储加速度计和陀螺仪数据的变量。
  - `const float accelerationThreshold = 2.5`：用于检测显著运动的阈值，单位为G。
  - `const int numSamples = 119`：检测到显著运动后要收集的样本数量。
  - `int samplesRead = numSamples`：将样本计数器初始化为总样本数，表示尚未收集任何数据。

- **基本设置**

  ```cpp
    pinMode(PD5,OUTPUT);
    digitalWrite(PD5,HIGH);
  ```

  - 打开陀螺仪使能引脚。

- **数据处理**

    ```cpp
    aX = myIMU.readFloatAccelX();:
    aY = myIMU.readFloatAccelY();:
    aZ = myIMU.readFloatAccelZ();:
    float aSum = fabs(aX) + fabs(aY) + fabs(aZ);
    ```

  - 读取沿X轴的加速度。
  - 读取沿Y轴的加速度。
  - 读取沿Z轴的加速度。
  - 计算加速度数据绝对值的总和，`fabs()`返回绝对值。

  ```cpp
    // check if it's above the threshold
    if (aSum >= accelerationThreshold) {
      // reset the sample read count
      samplesRead = 0;
      break;
    }
  ```

  - 如果绝对加速度值的总和大于或等于设定的阈值，则将采样计数 samplesRead 重置为 0 并退出循环。

- **检查数据**

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

  - 进入另一个循环并检查是否已读取所需数量的样本。
  - 增加 samplesRead 的计数。
  - 如果所有样本都已读取，打印一个空行来分隔数据输出。

### 结果图表

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/six_resutl.png" style={{width:700, height:'auto'}}/></div>

### 更多内容

如果您想要更多示例代码，请点击：**"File" -> Example -> Seeed Arduino LSM6DS3"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/33.png" style={{width:500, height:'auto'}}/></div>

## IMU 高级演示

### 硬件准备

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 软件准备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/arduino_mouse.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
我们需要在工具栏中选择相应的堆栈来烧录程序。
:::

<details>

<summary>程序代码</summary>

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

### 结果图表

当我们按下扩展板上的按钮时，可以观察到鼠标事件被触发了！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/hid_mouse.gif" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 Sense 麦克风（Seeed Studio 演示）

### 内置传感器概述

**麦克风传感器**如 **MSM381ACT001** 是一款 MEMS（微机电系统）麦克风，设计用于以**高灵敏度和低噪声**捕获音频信号。具体来说，MSM381ACT001 具有以下特性：

**麦克风功能：**

- 捕获声波并将其转换为电信号，能够在各种环境中检测音频输入。
- 具有宽频响范围，通常为 20 Hz 到 20 kHz，适用于各种音频应用，包括语音识别和音乐播放。

**主要特性**

- 高灵敏度：能够检测微弱声音，非常适合需要精确音频捕获的应用。
- 低噪声：设计提供高信噪比（SNR），即使在嘈杂环境中也能确保清晰的音频输出。
- 紧凑尺寸：MEMS 技术允许小型化设计，便于集成到智能手机和可穿戴设备等便携式设备中。
- 数字输出：提供数字信号输出选项（例如 I2S），简化与数字信号处理器（DSP）和微控制器的接口。

### 软件准备

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_Mic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

点击 github 下载链接来驱动麦克风传感器。

:::tip
目前我们需要手动修改替换文件，后续直接下载库即可使用，请等待我们的 wiki 更新。
:::

- **[替换文件]** [gsdk.a](https://files.seeedstudio.com/wiki/mg24_mic/gsdk_v2.a)

**更改文件路径**

- **/Users/yourname/Library/Arduino15/packages/SiliconLabs/hardware/silabs/2.2.0/variants/xiao_mg24/ble_silabs/**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/file.png" style={{width:350, height:'auto'}}/></div>

### 代码实现

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

### Function Overview

**Microphone Configuration**

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

- mic_config_t: 定义麦克风配置结构体。
- channel_cnt: 设置为 1 表示单声道。
- sampling_rate: 设置为 16000 Hz 作为采样频率。
- buf_size: 设置为 1600 作为缓冲区大小。
- debug_pin: 根据平台设置调试引脚，用于调试期间的信号指示。

**麦克风实例化**

  ```cpp
  #if defined(WIO_TERMINAL)
  DMA_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_ARCH_NRF52840)
  NRF52840_ADC_Class Mic(&mic_config);
  #elif defined(ARDUINO_SILABS)
  MG24_ADC_Class Mic(&mic_config);
  #endif
  ```

- 条件编译：为不同平台创建适当的麦克风类实例，使用之前定义的配置。

**录音缓冲区和标志**

  ```cpp
  int16_t recording_buf[SAMPLES];
  volatile uint8_t recording = 0;
  volatile static bool record_ready = false;
  ```

- recording_buf: 定义一个 SAMPLES 数组来存储录音样本。
- recording: 一个 volatile 变量，标记当前是否正在录音，以防止编译器优化。
- record_ready: 一个 volatile 静态变量，指示录音是否完成并准备好进行进一步处理。

**滤波器示例（适用于 WIO Terminal）**

  ```cpp
  #if defined(WIO_TERMINAL)
  FilterBuHp filter;
  #endif
  ```

- 如果在 WIO Terminal 上，创建一个高通滤波器实例用于滤波处理。

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

- 初始化串口：以115200波特率启动串行通信并等待串口准备就绪。

- 设置引脚模式：在WIO Terminal上，将按键引脚设置为输入上拉模式。
- 设置回调函数：调用Mic.set_callback(audio_rec_callback)来指定录制音频时的回调函数。
- 初始化麦克风：调用Mic.begin()，如果初始化失败，打印错误消息并进入死循环。

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

- 检测按键：在 WIO Terminal 上，当检测到按键被按下且未在录音时，开始录音。
- 完成采样：如果未在录音且 record_ready 设置为 true，则打印"Finished sampling"。
- 遍历录音缓冲区并打印每个采样值。

**音频录音回调函数**

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

- 回调函数：在音频录制期间调用，负责将样本从 DMA 缓冲区复制到录制缓冲区。
- 条件编译：如果在 WIO Terminal 上，使用滤波器处理输入。
- 将 12 位无符号 ADC 值转换为 16 位 PCM（有符号）音频值。
- 样本填充：将样本复制到 recording_buf 中并更新索引 idx。
- 完成录制：如果填充的样本数量达到 SAMPLES，重置索引，标记录制结束并将 record_ready 设置为 true。

### 结果图表

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result1.png" style={{width:680, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_result.png" style={{width:680, height:'auto'}}/></div>

这是识别到的声音的波形，当你吹气时，可以清楚地看到波形振荡幅度变大。

### 更多内容

如果你想要更多示例代码，请点击：-> **"Example -> Seeed Arduino Mic"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/34.png" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/35.png" style={{width:500, height:'auto'}}/></div>

## XIAO MG24 Sense 麦克风（Silicon Labs 演示）

:::tip
我们需要下载最新的板载包（2.3.0）才能在示例中找到最新的官方代码
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24download.jpg" style={{width:400, height:'auto'}}/></div>

### 软件准备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mg24mic.jpg" style={{width:500, height:'auto'}}/></div>

### 代码实现

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

### Function Overview

***Header file introduction***

```cpp
#include <SilabsMicrophoneAnalog.h>
```

- 包含 `SilabsMicrophoneAnalog.h` 头文件，该文件包含使用模拟麦克风所需的库函数和定义。

***硬件配置***

```cpp
#define MIC_DATA_PIN  PC9
#define MIC_PWR_PIN   PC8
#define NUM_SAMPLES   128
#define MIC_VALUE_MIN 735
#define MIC_VALUE_MAX 900
```

- `MIC_DATA_PIN`: 定义麦克风数据引脚为 `PC9`。

- `MIC_PWR_PIN`: 定义麦克风电源引脚为 `PC8`。

- `NUM_SAMPLES`: 定义每次采样的样本数为 128。

- `MIC_VALUE_MIN` 和 `MIC_VALUE_MAX`: 定义麦克风输出的最小值和最大值范围。

***缓冲区定义***

```cpp
uint32_t mic_buffer[NUM_SAMPLES];
uint32_t mic_buffer_local[NUM_SAMPLES];
```

- `mic_buffer`：用于存储从麦克风收集的原始采样数据。

- `mic_buffer_local`：用于临时存储采样数据以防止覆盖。

***标志和对象定义***

```cpp
volatile bool data_ready_flag = false;
MicrophoneAnalog micAnalog(MIC_DATA_PIN, MIC_PWR_PIN);
```

- `data_ready_flag`：用于指示新采样数据是否准备就绪的标志。

- `micAnalog`：创建一个 MicrophoneAnalog 对象来控制麦克风。

***回调函数声明***

```cpp
void mic_samples_ready_cb();
void calculate_and_display_voice_level();
```

- `mic_samples_ready_cb()`: 采样完成时调用的回调函数。

- `calculate_and_display_voice_level()`: 计算音量并控制LED亮度的函数。

***setup() 函数***

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

- 以115200的波特率初始化串行通信。

- 将板载LED引脚设置为输出模式。

- 初始化麦克风并指定采样缓冲区。

- 开始采样并设置采样完成时的回调函数。

***loop()函数***

```cpp
void loop()
{
  if (data_ready_flag) {
    data_ready_flag = false;
    calculate_and_display_voice_level();
  }
}
```

- 检查 `data_ready_flag` 是否为 `true`，表示新数据已准备就绪。

- 如果有新数据可用，调用 `calculate_and_display_voice_level()` 函数来处理数据。

```cpp

void mic_samples_ready_cb()
{
  memcpy(mic_buffer_local, mic_buffer, NUM_SAMPLES * sizeof(uint32_t));
  data_ready_flag = true;
}
```

将样本数据从 `mic_buffer` 复制到 `mic_buffer_local` 以防止覆盖。

将 `data_ready_flag` 设置为 `true` 以指示新数据已准备就绪。

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

- 停止采样以防止数据覆盖。

- 计算采样数据的平均值并将其约束在 `MIC_VALUE_MIN` 和 `MIC_VALUE_MAX` 之间。

- 计算滚动平均值以平滑音量变化。

- 将滚动平均值映射到LED亮度范围（0到255）并调整LED亮度。

- 通过串口输出滚动平均值以观察音量变化。

- 重新开始采样以收集新的音频数据。

### 结果图表

当我们对着麦克风吹气时，可以看到顶部的LED会随着声音变亮和变暗。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic.gif" style={{width:500, height:'auto'}}/></div>

### 更多内容

如果您想要更多示例代码，请点击：-> **"Example -> SilabsMicrophoneAnalog -> MicrophoneVolume"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/mic_arduino.jpg" style={{width:500, height:'auto'}}/></div>

## 资源

### 适用于 Seeed Studio XIAO MG24 Sense

- 📄 **[PDF]** [Seeed Studio 6轴IMU(LSM6DS3TR-C) 数据手册](https://statics3.seeedstudio.com/fusion/opl/sheets/314040211.pdf)
- 📄 **[PDF]** [Seeed Studio 模拟麦克风(MSM381ACT001) 数据手册](https://files.seeedstudio.com/wiki/mg24_mic/312030602_MEMSensing_MSM381ACT001_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
