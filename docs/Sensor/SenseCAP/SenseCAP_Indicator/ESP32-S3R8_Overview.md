---
description: ESP32-S3R8 Overview
title: ESP32-S3R8 Overview
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 5/01/2023
  author: Yvonne
---


# **ESP32-S3R8 Overview**

ESP32-S3 is a highly integrated system-on-chip (SoC) that combines a powerful CPU, 2.4 GHz Wi-Fi, and Bluetooth 5.0 capabilities, also includes a range of input/output pins and interfaces, such as UART, SPI, I2C, and PWM, which allow it to interface with other devices and sensors.


## **4-inch Touch Screen**

The SenseCAP Indicator is equipped with a 4-inch touch screen, which can customize the UI interface you need.
In this tutorial, we will guide you on how to use the LvGL (Light and Versatile Graphics Library) graphics library for SenseCAP Indicator.



### **Basic of the LCD**


**Pixel Coordinates Systems**

A digital 2-D image is made up of rows and columns of pixels. A pixel in the image is specified by saying which column and which row the pixel is in. In simple terms, a pixel can be identified by a pair of integers providing the column number and the row number. 

Conventionally, columns are numbered from the top left to right, starting from zero, but in some cases, it can also start from other corners(by setting rotation).

**16-bit colour model**

Pixels also expressed in colour form, so also better to cover some colour models. The 16 bit colour model is good for MCUs to work with so this is a good start. The colour model consists of 3 colour components - Red, Green, and Blue. Depending on the colour model, these 3 colour components will be stored into 16 bits variable.



| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Data** | Red   | Red   | Red   | Red   | Red   | Green   | Green   | Green   | Green   | Green   | Green   | Blue   | Blue   | Blue   | Blue   | Blue   |




**LCD Screen Initialisation**

To initialise the LCD screen on SenseCAP Indicator:

```
lcd init:
bsp_board_init()
```











### **Create your own UI**


**LvGL**

[LvGL](https://docs.lvgl.io/master/intro/index.html) is an open-source graphics library providing everything you need to create an embedded GUI with easy-to-use graphical elements, beautiful visual effects, and a low memory footprint.

#### **Example Code**

We provide the demo code of the UI interface, and [lvGL example file](https://docs.lvgl.io/master/examples.html) are many sample codes for drawing UI for reference, you can modify the sample code or customize your own UI.


```
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "bsp_board.h"
#include "lv_demos.h"
#include "lv_port.h"
#include "ui_demo1.h"
#include "ui_demo2.h"

#define LOG_MEM_INFO        1

static const char *TAG = "app_main";

void app_main(void)
{
    ESP_LOGI("TAG", "system start");

    ESP_ERROR_CHECK(bsp_board_init());
    lv_port_init();

#if CONFIG_LCD_AVOID_TEAR
    ESP_LOGI(TAG, "Avoid lcd tearing effect");
#if CONFIG_LCD_LVGL_FULL_REFRESH
    ESP_LOGI(TAG, "LVGL full-refresh");
#elif CONFIG_LCD_LVGL_DIRECT_MODE
    ESP_LOGI(TAG, "LVGL direct-mode");
#endif
#endif

    lv_port_sem_take();
    lv_demo_widgets();      /* A widgets example. This is what you get out of the box */
    //lv_demo_music();        /* A modern, smartphone-like music player demo. */
    //lv_demo_stress();       /* A stress test for LVGL. */
    //lv_demo_benchmark();    /* A demo to measure the performance of LVGL or to compare different settings. */
    // ui_demo1_init();         /* A demo to show virtual printer (must be 800*480)*/
    //ui_demo2_init();         /* A demo to show virtual tuner
                                /* (must be 480*800, set LCD_EVB_SCREEN_ROTATION_90 in menuconfig)*/
    lv_port_sem_give();

#if LOG_MEM_INFO
    static char buffer[128];    /* Make sure buffer is enough for `sprintf` */
    while (1) {
        sprintf(buffer, "   Biggest /     Free /    Total\n"
                "\t  DRAM : [%8d / %8d / %8d]\n"
                "\t PSRAM : [%8d / %8d / %8d]",
                heap_caps_get_largest_free_block(MALLOC_CAP_INTERNAL),
                heap_caps_get_free_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_total_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_largest_free_block(MALLOC_CAP_SPIRAM),
                heap_caps_get_free_size(MALLOC_CAP_SPIRAM),
                heap_caps_get_total_size(MALLOC_CAP_SPIRAM));
        ESP_LOGI("MEM", "%s", buffer);

        vTaskDelay(pdMS_TO_TICKS(10000));
    }
#endif
}
```



**Squareline Studio(Optional)**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) is a multi-platform design tool that uses a visual interface to help designers and developers work quickly and efficiently. SquareLine Studio makes it possible by creating the perfect code for your projects. Whether you use C or Python, you can export code for both.

If you need to create a more complex or advanced UI interface, it‘s recommended that you use Squareline Studio for development.


[Squareline Studio Installation](https://docs.squareline.io/docs/introduction/install)



We provide a demo project for the UI page:

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

**Replace with your own UI**


* Step 1:You can make changes in our demo project, or create a new UI page

Open the demo project and make changes:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

Create a new project:

**Note**:The resolution of the screen is 480*480.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>



* Step 2:Export your finished page as UI files


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>



* Step 3:Remove all the original UI files and copy your onw UI files to this direct. 


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

* Step 4:Build and Flash the project

Run the following command to build, flash and monitor the project:

`idf.py -p PORT build flash monitor` 




## **Wi-Fi**






[**Examples**](https://github.com/espressif/esp-idf/tree/master/examples/wifi)

This [directory](https://github.com/espressif/esp-idf/tree/master/examples/wifi) contains a series of project examples that demonstrate Wi-Fi functionality and provides code that you can copy and adapt into your own projects.

**Using Examples**

Before building an example, be sure to follow the ESP-IDF Getting Started Guide to ensure you have the required development environment.

Building an example is the same as building any other project:

- Step 1: Change into the directory of the new example you'd like to build.

Run the following command to select the correct chip target to build before opening the project configuration menu:

`idf.py set-target esp32s3`

(By default the target is esp32. For all options see idf.py set-target --help)

- Step 2: Run the following command to open the project configuration menu:

`idf.py menuconfig`

Most examples have a project-specific "Example Configuration" section here (for example, to set the WiFi SSID & password to use)

- Step 3: Build the example:

`idf.py build`

Follow the printed instructions to flash, or run `idf.py -p PORT flash`


## **BLE**







[**Examples**](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)

This [directory](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth) contains a series of project examples that demonstrate Bluetooth functionality and provides code that you can copy and adapt into your own projects.

**Using Examples**

Before building an example, be sure to follow the ESP-IDF Getting Started Guide to ensure you have the required development environment.

Building an example is the same as building any other project:

- Step 1: Change into the directory of the new example you'd like to build.

Run the following command to select the correct chip target to build before opening the project configuration menu:

`idf.py set-target esp32s3`

(By default the target is esp32. For all options see idf.py set-target --help)

- Step 2: Run the following command to open the project configuration menu:

`idf.py menuconfig`

Most examples have a project-specific "Example Configuration" section here (for example, to set the WiFi SSID & password to use)

- Step 3: Build the example:

`idf.py build`

Follow the printed instructions to flash, or run `idf.py -p PORT flash`


## **LoRa**

The SenseCAP indicator is embedded with SX1262 LoRa module, which can realize the p2p communication.

**Send Data Packets**

This example code demonstrates a basic example of how to use the LoRa radio module in transmit mode to send data packets in LoRa mode. It defines the frequency, bandwidth, spreading factor, coding rate, preamble length, and other parameters of the LoRa modulation scheme.



```
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "radio.h"
#include "bsp_board.h"

#define RF_FREQUENCY                                868000000 // Hz
#define LORA_BANDWIDTH                              0         // [0: 125 kHz,
                                                              //  1: 250 kHz,
                                                              //  2: 500 kHz,
                                                              //  3: Reserved]
#define LORA_SPREADING_FACTOR                       12         // [SF7..SF12]
#define LORA_CODINGRATE                             1         // [1: 4/5,
                                                              //  2: 4/6,
                                                              //  3: 4/7,
                                                              //  4: 4/8]
#define LORA_PREAMBLE_LENGTH                        8         // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT                         5         // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON                  false
#define LORA_IQ_INVERSION_ON                        false

static RadioEvents_t RadioEvents;

static const char *TAG = "app_main";

void OnTxDone( void )
{
    ESP_LOGI(TAG, "OnTxDone");
}

void demo_lora_tx(void)
{
    int cnt = 0;
    ESP_LOGI(TAG, "system start");
    ESP_LOGI(TAG, "demo lora tx");
    ESP_ERROR_CHECK(bsp_board_init());
    
    RadioEvents.TxDone = OnTxDone;
    Radio.Init( &RadioEvents );
    
    Radio.SetChannel( RF_FREQUENCY );
    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,
                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,
                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );

    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    while(1) {
        printf("send... %d\n", cnt++);
        Radio.Send( "1234567890", sizeof("1234567890") );
        vTaskDelay(5000 / portTICK_PERIOD_MS);
    }
}
```




**Receive Data Packets**

This example code sets up a LoRa receiver using the SX126x radio module and logs the received packets to the console. It can be used as a starting point for developing LoRa applications that require receiving data over long distances with low power consumption.


```
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "esp_log.h"
#include "radio.h"
#include "bsp_board.h"

#define RF_FREQUENCY                                868000000 // Hz
#define LORA_BANDWIDTH                              0         // [0: 125 kHz,
                                                              //  1: 250 kHz,
                                                              //  2: 500 kHz,
                                                              //  3: Reserved]
#define LORA_SPREADING_FACTOR                       7         // [SF7..SF12]
#define LORA_CODINGRATE                             1         // [1: 4/5,
                                                              //  2: 4/6,
                                                              //  3: 4/7,
                                                              //  4: 4/8]
#define LORA_PREAMBLE_LENGTH                        8         // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT                         5         // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON                  false
#define LORA_IQ_INVERSION_ON                        false

static RadioEvents_t RadioEvents;

static const char *TAG = "app_main";

void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )
{
    int i = 0;
    ESP_LOGI(TAG, "rssi:%d dBm, snr:%d dB, len:%d, payload:", rssi, snr, size);
    for( i = 0; i < size; i++) {
        printf("0x%x ",payload[i] );
    }
    printf("\n");
}

void demo_lora_rx(void)
{
    int cnt = 0;
    ESP_LOGI(TAG, "system start");
    ESP_LOGI(TAG, "demo lora rx continue");
    bsp_sx126x_init();
    
    RadioEvents.RxDone = OnRxDone;
    Radio.Init( &RadioEvents );
    
    Radio.SetChannel( RF_FREQUENCY );
    Radio.SetTxConfig( MODEM_LORA,22, 0, LORA_BANDWIDTH,
                                   LORA_SPREADING_FACTOR, LORA_CODINGRATE,
                                   LORA_PREAMBLE_LENGTH, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   true, 0, 0, LORA_IQ_INVERSION_ON, 3000 );

    Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                                   LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                                   LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                                   0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    Radio.Rx( 0 );
    while(1) {
        printf("cnt: %d\n", cnt++);
        vTaskDelay(10000 / portTICK_PERIOD_MS);
    }
}

```



# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！
if you have large order requirment, please contact iot@seeed.cc
