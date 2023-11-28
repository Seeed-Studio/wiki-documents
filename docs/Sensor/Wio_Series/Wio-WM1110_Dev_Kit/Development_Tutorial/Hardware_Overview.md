---
description: Wio-WM1110 Dev Kit Hardware Overview
title: Hardware Overview
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 8/8/2023
  author: Jessie
---



The Wio WM1110 Dev Kit is an open source platform for building IoT projects. It provides low-power loRa network connection and a full range of location coverage services. This kit also includes a range of sensors and peripherals, making it a versatile platform for building IoT projects.

In this tutorial, we will introduce the hardware overview and how to develop your own application! 


## Hardware Overview

The Wio-WM1110 Dev Kit is based on [Wio-WM1110 Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html),integrates Semtech's LoRa® transceiver and a multi-purpose radio front-end for geolocation, the board has a built-in TH sensor and a 3-axis Accelerometer, also providing connectivity options for a variety of peripherals.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>



## Pinout

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>




## LoRaWAN® Communication

### Setup the keys

Before a device can communicate via the NS, we need to register it with the 3 keys.

Wio-WM1110 DK allows users to set the DevEUI, AppEUI, and AppKey, so you can set up our own parameters in the 'lorawan_key_config.h' file, then flash it onto the DK.

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>


**LoRa Basics Modem LoRaWAN® Class A/C example**

The application will automatically starts a procedure to join a LoRaWAN network see **lorawan_key_config.h**

Once a network is joined (i.e. when the corresponding event is triggered), uplinks are sent periodically. This periodic action is based on the LoRa Basics Modem alarm functionality. Each time the alarm-related event is triggered, the application requests an uplink.

The content of the uplink is the value read out from the charge counter by calling `smtc_modem_get_charge()`.

The application is also capable of displaying data and meta-data of a received downlink.

**Configuration**

Several parameters can be updated in `main_lorawan.h` header file:

| Constant                   | Description                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | LoRaWAN® FPort used for the uplink messages                                    |
| `LORAWAN_CONFIRMED_MSG_ON` | Request a confirmation from the LNS that the uplink message has been received |
| `APP_TX_DUTYCYCLE`         | Delay in second between two uplinks                                           |


## Positioning

### GNSS 

By capturing a short portion of the signal broadcast by the GNSS satellites, and extracting the information required to calculate the device position - the pseudo-ranges. This information is aggregated into a NAV message which can be sent to a back-end system to compute the device position.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

The GNSS scanner of the Wio-WM1110 has two modes of operations: autonomous and assisted.

**GNSS autonomous mode:** Does not require any assistance location or almanac data, and aims to detect strong satellite signals. Therefore it is suitable for outdoor conditions with good sky visibility.

**GNSS assisted mode**：It allows the most efficient GNSS geolocation. Assistance information can build a list of the satellites in view at the current time and location, in order to reduce the GNSS satellites search space, and therefore optimize the time and energy spent geolocating. The assistance information is tailored to an LPWAN network, limiting the data sent, especially the downlink size and frequency. It consists of:  
* LR1110 approximate position 
* Current time 
* Up-to-date reduced size Almanac information (less than 3 months old)


**Geolocation GNSS Example**

This example illustrates the GNSS scan procedure:

- configuration of the LoRa Basics Modem library; and
- execution of GNSS *scan & send* feature using the *GNSS geolocation middleware*.




**GNSS demonstration related configuration**

The `main_geolocation_gnss.h` header file defines several constants to configure geolocation parameters.

| Constant                                 | Comments                                                                                | Possible values  | Default Value |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | If set to `true`: configures the application to autonomously get an assistance position | {`true`,`false`} | `true`        |

If manual mode is selected for assistance position, the following constants define the position to be used.

| Constant                                 | Comments                                                                        | Possible values            | Default Value      |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | The latitude to use for GNSS Assisted scan (decimal degree)                     | Any `float` in [-90, 90]   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | The longitude to use for GNSS Assisted scan (decimal degree)                    | Any `float` in [-180, 180] | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | A text representation of the assistance position, for information printing only | Any constant c-string      | "Grenoble, FRANCE" |

***Note***: The pre-defined assistance position must be within a 150 km range of the actual location.

| Constant                 | Comments                                                                                      | Possible values           | Default Value         |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Defines the duration between the end of a scan & send sequence and the start of next sequence | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | Defines the GNSS scan mode (static or mobile) to be used for scan & send sequences.           | Value in `gnss_mw_mode_t` | `GNSS_MW_MODE_STATIC` |

The GNSS scan mode selected by default is `GNSS_MW_MODE_STATIC`, meaning that
this application example targets non-mobile objects.




### Wi-Fi

By discovering the Wi-Fi b/g/n access points available in the vicinity of the device, and extract MAC addresses allowing to geolocate the device. The objective is to obtain at least 2 MAC addresses, which can be used to position the device, after they have been sent to an online Wi-Fi lookup service


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>


**Geolocation Wi-Fi Example**

This application demonstrates the usage of the Wi-Fi geolocation middleware and
how the LoRa Basics Modem should be configured to meet the prerequisites for
This example illustrates the Wi-Fi scan procedure:

- configuration of the LoRa Basics Modem library; and
- execution of Wi-Fi *scan & send* feature using the *Wi-Fi geolocation middleware*.


**Wi-Fi demonstration related configuration**

The `main_geolocation_wifi.h` header file defines several constants which can be
set to define the configurable parameters of the application.

| Constant           | Comments                                                                                      | Possible values | Default Value |
| ------------------ | --------------------------------------------------------------------------------------------- | --------------- | ------------- |
| `WIFI_SCAN_PERIOD` | Defines the duration between the end of a scan & send sequence and the start of next sequence | `uint32_t`      | 30            |





### GNSS and Wi-Fi

**Geolocation GNSS and Wi-Fi example**
This example illustrates the combination of GNSS and Wi-Fi scan procedures:

- configuration of the LoRa Basics Modem library; and
- concurrent execution of GNSS and Wi-Fi *scan & send* features using the
*GNSS geolocation middleware* and the *Wi-Fi geolocation middleware*.



**Geolocation demonstration related configuration**

The `main_geolocation_gnss_wifi.h` header file defines several constants to configure geolocation parameters.

| Constant                                 | Comments                                                                                | Possible values  | Default Value |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | If set to `true`: configures the application to autonomously get an assistance position | {`true`,`false`} | `false`       |

If manual mode is selected for assistance position, the following constants define the position to be used.

| Constant                                 | Comments                                                                        | Possible values            | Default Value      |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | The latitude to use for GNSS Assisted scan (decimal degree)                     | Any `float` in [-90, 90]   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | The longitude to use for GNSS Assisted scan (decimal degree)                    | Any `float` in [-180, 180] | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | A text representation of the assistance position, for information printing only | Any constant c-string      | "Grenoble, FRANCE" |

***Note***: The pre-defined assistance position must be within a 150 km range of the actual location.

| Constant                 | Comments                                                                                      | Possible values           | Default Value         |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | Defines the duration between the end of a scan & send sequence and the start of next sequence | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | Defines the GNSS scan mode (static or mobile) to be used for scan & send sequences.           | Value in `gnss_mw_mode_t` | `GNSS_MW_MODE_MOBILE` |

The GNSS scan mode selected by default is `GNSS_MW_MODE_MOBILE`, meaning that this application example targets mobile objects.


## BLE

Low Energy Bluetooth (BLE), also known as Bluetooth Low Energy, is a wireless communication technology designed to provide a low-power and low-complexity communication method for devices that require long-term power supply, low data transfer rates, and short communication distances. Optimized based on Bluetooth technology, BLE has lower power consumption and a simpler protocol stack, making it suitable for low-power and Internet of Things (IoT) applications.

The Wio-WM1110 has a Low Energy Bluetooth based on the nRF52840 chip.


**Testing with the Bluetooth routine**

There is a 'Bluetooth: Peripheral UART' sample on the SDK. The test requires that you have connected to the sample and have the connected terminal emulator open.

The BLE demo located at:
`nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/ble_app_uart/pca10056/s140/ses/`


* [Testing with a mobile device](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_mobile.html)

* [Testing with a computer](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_desktop.html)





## On-board Sensors

### TH Sensor(SHT41)

SHT41 is a digital humidity and temperature sensor, it communicates with a microcontroller or other digital device through an I2C interface.

The SHT41 sensor is commonly used in a wide range of applications, including HVAC systems, weather stations, indoor air quality monitoring, and industrial process control. Its small size, low power consumption, and high accuracy make it a popular choice for many different types of projects.


|  | Range | Accuracy |
| -------- | -------- | -------- |
|Temperature  | -40~125°C |0.2°C|
| Humidity | 0~100%RH |1.8%RH|



**Code:**

This example provides functions for initializing the sensor, reading temperature and humidity values, and setting the temperature unit.

Here's a brief summary of the functions defined in this code:


**SHT41Init**: a function that initializes the sensor by resetting it and waiting for 1ms before proceeding.

**SHT41GetTemperature, SHT41GetHumidity, and SHT41GetTempAndHumi**: functions for reading temperature and/or humidity values from the sensor. These functions convert the raw sensor values to a float value in degrees Celsius or Fahrenheit, depending on the current temperature unit setting.

**SHT41SetTemperatureUnit and SHT41GetTemperatureUnit**: functions for setting and getting the temperature unit.
crc8: an internal function that calculates the CRC-8 checksum of a byte array.


    
### 3-axis Accelerometer(LIS3DHTR)


The LIS3DHTR is a high-performance sensor that measures acceleration in three dimensions and provides accurate and reliable readings.

The LIS3DHTR sensor communicates with a microcontroller or other digital device through an I2C or SPI interface. It also includes advanced features such as programmable interrupts and a wide range of power-saving modes to help minimize power consumption.



| Range | Bandwidth | Sensitivity(LSB/g) |
| -------- | -------- | -------- | 
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)


    
## Grove


There are 3 Grove interfaces in the DK, which can be connected to 400+ Grove modules, and supports ADC/UART and IIC transmission protocols.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>


### Grove IIC

There is a Grove IIC port on the DK, with `SDA` on pin 27 and `SCL` on pin 26. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

To connect to a Grove IIC module, the sensor power must be enabled：`I2C_PWR` (pin 7). This pin controls the pull-up voltage on the IIC signal line:

```cpp
#define IIC_POWER          7
```
TWI needs to be enabled in the `sdk_config.h` file before usage.

```cpp
// <e> TWI_ENABLED - nrf_drv_twi - TWI/TWIM peripheral driver - legacy layer
//==========================================================
#ifndef TWI_ENABLED
#define TWI_ENABLED 1
#endif
// <e> TWI0_ENABLED - Enable TWI0 instance
//==========================================================
#ifndef TWI0_ENABLED
#define TWI0_ENABLED 1
#endif
// <q> TWI0_USE_EASY_DMA  - Use EasyDMA (if present)
#ifndef TWI0_USE_EASY_DMA
#define TWI0_USE_EASY_DMA 1
#endif
// </e>
// <e> TWI1_ENABLED - Enable TWI1 instance
//==========================================================
#ifndef TWI1_ENABLED
#define TWI1_ENABLED 1
#endif
// <q> TWI1_USE_EASY_DMA  - Use EasyDMA (if present)
 #ifndef TWI1_USE_EASY_DMA
#define TWI1_USE_EASY_DMA 1
#endif
```

**Example code**

This example reads the value of the [SHT41 Temperature and Humidity sensor](https://wiki.seeedstudio.com/Grove-SHT4x/) through the IIC interface, and prints it to the serial monitor.


```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_error.h"
#include "sht41.h"
#include "nrf_drv_twi.h"

int main(void)
{   
    float   temp = 0;
    float   humi = 0;
    hal_i2c_master_init( );
    hal_gpio_init_out( SENSOR_POWER, HAL_GPIO_SET ); 
    nrf_delay_ms(10);

    SHT41Init();
    
    while(1){
        SHT41GetTempAndHumi(&temp,&humi);
        nrf_delay_ms(1000);  
        printf("temperature:%.3f humidity:%.3f\n",temp,humi);
    }

}
```

Then you will get the temperature and humidity values:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/valueSHT41.png" alt="pir" width={500} height="auto" /></p>


### Grove UART


The Wio-WM1110 DK has two UART peripherals, namely `uart0` and `uart1`.  `uart0` pins are connected to the CH340C for debugging purposes, while `uart1` serves as a Grove UART Port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>


Referring to the schematic, TXD is located on pin 8 and RXD is on pin 6. 


```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

:::tip Note
Except for analog interfaces like ADC, the nRF52840 chip has fixed pins for other digital peripherals. However, other digital peripherals can be remapped to any pin. For example, the RXD and TXD pin configurations can be swapped.
:::

UART needs to be enabled in the `sdk_config.h` file before usage:

```cpp
/ <e> NRFX_UARTE_ENABLED - nrfx_uarte - UARTE peripheral driver
//==========================================================
#ifndef NRFX_UARTE_ENABLED
#define NRFX_UARTE_ENABLED 1
#endif
// <o> NRFX_UARTE0_ENABLED - Enable UARTE0 instance 
#ifndef NRFX_UARTE0_ENABLED
#define NRFX_UARTE0_ENABLED 1
#endif

// <o> NRFX_UARTE1_ENABLED - Enable UARTE1 instance 
#ifndef NRFX_UARTE1_ENABLED
#define NRFX_UARTE1_ENABLED 1
#endif

// <e> UART_ENABLED - nrf_drv_uart - UART/UARTE peripheral driver - legacy layer
//==========================================================
#ifndef UART_ENABLED
#define UART_ENABLED 1
#endif
```



**Example code**

The following sample code implements the functions of serial port transmission and reception with feedback.


```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "smtc_hal.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}


int main(void)
{
    uint32_t err_code;
    uart.comm_params = &commParams;
    uint8_t arr[] = "hello world\n";
    nrf_gpio_cfg_output(LED1);
    nrf_gpio_cfg_output(LED2);
    nrf_gpio_pin_clear(LED1);
    nrf_gpio_pin_clear(LED2);
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );
    
    
    while( 1 )
    {
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
        uart_tx(arr,strlen(arr));
    }
}
            
void uart_handleEvent(app_uart_evt_t * p_event)
{
	uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
	
    else if (p_event->evt_type == APP_UART_DATA_READY)
	{
		app_uart_get(&uart,&dat); 
		app_uart_put(&uart,dat); 
	}
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
	{
		nrf_gpio_pin_toggle(LED1);
	}
}
```




### Grove ADC

There are eight ADC peripherals (0~7) on the DK, `ADC6` and `ADC7` are used as the Grove ADCT Port. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_adc.png" alt="pir" width={300} height="auto" /></p>

:::tip Note
ADC pins are fixed and cannot be remapped.
:::

The corresponding relationships for ADC pins are shown in the table below:


|ADC0|ADC1|ADC2|ADC3|ADC4|ADC5|ADC6|ADC7|
|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|2|3|4|5|28|29|30|31


SAADC needs to be enabled in the `sdk_config.h` file before usage:

```cpp
// <e> SAADC_ENABLED - nrf_drv_saadc - SAADC peripheral driver - legacy layer
//==========================================================
#ifndef SAADC_ENABLED
#define SAADC_ENABLED 1
#endif
// <e> NRFX_SAADC_ENABLED - nrfx_saadc - SAADC peripheral driver
//==========================================================
#ifndef NRFX_SAADC_ENABLED
#define NRFX_SAADC_ENABLED 1
#endif
// <o> SAADC_CONFIG_RESOLUTION  - Resolution
 
// <0=> 8 bit 
// <1=> 10 bit 
// <2=> 12 bit 
// <3=> 14 bit 

#ifndef SAADC_CONFIG_RESOLUTION
#define SAADC_CONFIG_RESOLUTION 2
#endif
```

**Example code**

This is an example program for ADC6, which implements the function of reading the analog input value of a single channel of the ADC6 pin and outputting the measured ADC value through the UART:



```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"
#include "nrf_drv_saadc.h"
#define     LED1                     13
#define     LED2                     14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}

void ADC_Interrupt(nrfx_saadc_evt_t const *p_event){
    
}

void uart_handleEvent(app_uart_evt_t * p_event)
{
	uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
	
    else if (p_event->evt_type == APP_UART_DATA_READY)
	{
		app_uart_get(&uart,&dat); 
		//app_uart_put(&uart,dat); 
	}
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
	{
		//nrf_gpio_pin_toggle(LED1);
	}
}

int main(void)
{
    nrf_saadc_value_t  saadc_val = 0; 
    uint8_t arr[32];
    nrf_saadc_channel_config_t channel_config = 
    {                                                   
        .resistor_p = NRF_SAADC_RESISTOR_DISABLED,      
        .resistor_n = NRF_SAADC_RESISTOR_DISABLED,      
        .gain       = NRF_SAADC_GAIN1_6,                
        .reference  = NRF_SAADC_REFERENCE_INTERNAL,     
        .acq_time   = NRF_SAADC_ACQTIME_10US,           
        .mode       = NRF_SAADC_MODE_SINGLE_ENDED,      
        .burst      = NRF_SAADC_BURST_DISABLED,         
        .pin_p      = NRF_SAADC_INPUT_AIN6,       
        .pin_n      = NRF_SAADC_INPUT_DISABLED          
    };
    
    nrf_drv_saadc_init(NULL, ADC_Interrupt);
    nrf_drv_saadc_channel_init(0, &channel_config);

    uart.comm_params = &commParams;
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );

    nrf_gpio_cfg_output(LED2);
    while( 1 )
    {
        nrf_drv_saadc_sample_convert (0,&saadc_val);
        sprintf(arr,"value:%d\n",saadc_val);
        uart_tx(arr,strlen(arr));
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
    }
}

```






## Resources

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)


## Tech Support

**Need help with your Wio-WM1110 Dev Kit? We're here to assist you!**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>