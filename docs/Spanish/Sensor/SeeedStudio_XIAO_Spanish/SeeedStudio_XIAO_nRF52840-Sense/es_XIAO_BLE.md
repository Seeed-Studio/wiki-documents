---
description: Getting Started with Seeed Studio XIAO nRF52840 Series
title: Comenzando con la serie XIAO nRF52840 de Seeed Studio
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /es/XIAO_BLE
last_update:
  date: 2024-11-28T11:15:24+08:00
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comenzando con la serie XIAO nRF52840 de Seeed Studio

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    <tr>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th>XIAO nRF52840 Plus</th>
      <th>XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

Como el primer producto inalámbrico de la familia Seeed Studio XIAO, el **Seeed Studio XIAO nRF52840** está equipado con un potente **MCU Nordic nRF52840** que integra conectividad **Bluetooth 5.0**. Mientras tanto, tiene un **diseño compacto y exquisito** que puede usarse en dispositivos portátiles y proyectos de Internet de las Cosas. El **diseño de montaje en superficie de una sola cara** y la **antena Bluetooth** a bordo facilitan enormemente el despliegue rápido de proyectos IoT. Además, existe una versión avanzada de esta placa, el **Seeed Studio XIAO nRF52840 Sense**. Está integrada con dos sensores adicionales a bordo. Uno de ellos es un **Micrófono Digital de Modulación de Densidad de Pulso (PDM)**. Puede recibir datos de audio en tiempo real, lo que le permite ser utilizado para el reconocimiento de audio. El otro es una **Unidad de Medición Inercial de 6 ejes (IMU)**, la cual puede ser muy útil en proyectos de TinyML como el reconocimiento de gestos. Estos sensores a bordo proporcionan una gran comodidad para los usuarios mientras que la placa es ultracompacta.

Las versiones recién mejoradas **XIAO nRF52840 Plus y XIAO nRF52840 Sense Plus** ofrecen un aumento considerable en funcionalidad y usabilidad. El número de pines multifuncionales se ha incrementado a **20**, se han añadido recursos **I2S** y **SPI** para soportar proyectos más complejos, se han expuesto los **pines NFC** para una integración más fácil en aplicaciones IoT y de tarjetas inteligentes, y el **pin BAT** ha sido reposicionado para una mejor conveniencia al soldar, resultando en una experiencia de hardware más amigable para el usuario. En comparación con Seeed Studio XIAO RP2040, el Seeed Studio XIAO nRF52840 contiene **interfaces más ricas**. Lo primero a destacar es que la **interfaz de Comunicación de Campo Cercano (NFC)** está habilitada en la placa. En segundo lugar, hay un pequeño **botón de reinicio** en el lateral de la interfaz Tipo-C. En el otro lado, se encuentra un **LED 3 en 1 (LED de usuario)** junto con un **LED de carga** para indicar el estado de la carga cuando se conecta una batería. Hay **11 I/O digitales** que pueden ser usados como **pines PWM** y **6 I/O analógicos** que pueden ser usados como **pines ADC**. Soporta las tres interfaces seriales comunes como **UART, I2C y SPI**. Al igual que el Seeed Studio XIAO RP2040, tiene un **flash a bordo de 2 MB**, lo que significa que también puede ser programado usando **Arduino, MicroPython, CircuitPython u otros lenguajes de programación**.

El Seeed Studio XIAO nRF52840 Sense es compatible con la placa de expansión Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Potentes capacidades inalámbricas: Bluetooth 5.0 con antena a bordo
- Potente CPU: Nordic nRF52840, procesador ARM® Cortex®-M4 de 32 bits con FPU, 64 MHz
- Ultra-bajo consumo de energía: El consumo de energía en modo de espera es inferior a 5μA
- Chip de carga de batería: Soporta gestión de carga y descarga de baterías de litio
- Flash a bordo de 2 MB
- Micrófono PDM a bordo (solo en Seeed Studio XIAO nRF52840 Sense)
- IMU LSM6DS3TR-C de 6 ejes a bordo (solo en Seeed Studio XIAO nRF52840 Sense)
- Tamaño ultra pequeño: 21 x 17.8 mm, factor de forma clásico de la serie Seeed Studio XIAO para dispositivos portátiles
- Interfaces ricas: 1xUART, 1xI2C, 1xSPI, 1xNFC, 1xSWD, 11xGPIO (PWM), 6xADC en XIAO nRF52840 (Sense); y 2xUART, 1xI2C, 2xSPI, 1xI2S, 1xNFC, 1xSWD, 18xGPIO (PWM), 6xADC en XIAO nRF52840 (Sense) Plus
- Componentes de un solo lado, diseño de montaje en superficie

## Comparación de especificaciones

<div class="table-center">
	<table align="center">
  <tr>
      <th>Item</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Plus</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
      <th>Procesador</th>
      <td colspan="4" align="center">Nordic nRF52840, ARM® Cortex®-M4 32-bit procesador con FPU, 64 MHz</td>
  </tr>
  <tr>
      <th>Conectividad inalámbrica</th>
      <td colspan="4" align="center">Bluetooth 5.0/BLE/NFC</td>
  </tr>
  <tr>
      <th>Memoria</th>
      <td colspan="4" align="center">256 KB RAM,1MB Flash 2MB onboard Flash</td>
  </tr>
  <tr>
      <th>Sensores incorporados</th>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C), PDM Microphone</td>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C), PDM Microphone</td>
  </tr>
  <tr>
      <th>interfaces</th>
      <td colspan="2" align="center">1xI2C, 1xUART, 1xSPI</td>
      <td colspan="2" align="center">1xI2C, 2xUART, 2xSPI, 1xI2S</td>
  </tr>
  <tr>
      <th>PWM/Pines analógicos</th>
      <td colspan="2" align="center">11/6</td>
      <td colspan="2" align="center">20/6</td>
  </tr>
  <tr>
      <th>Botones integrados</th>
      <td colspan="4" align="center">Botón de reinicio</td>
  </tr>
  <tr>
      <th>LEDs integrados</th>
      <td colspan="4" align="center">LED 3-en-uno/LED de carga</td>
  </tr>
  <tr>
      <th>Chip de carga de batería</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>Lenguajes de programación</th>
      <td colspan="4" align="center">Arduino/ MicroPython/ CircuitPython</td>
  </tr>
  </table>
</div>

## Descripción general del hardware


<Tabs>
<TabItem  value="52540(Sense)" label="XIAO nRF52840/XIAO nRF52840 Sense" default>

<table align="center">
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense diagrama de indicación frontal</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense Diagrama de indicación trasera</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense Lista de pines</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="52840Plus" label="XIAO nRF52840 Plus/XIAO nRF52840 Sense Plus" default>

 <table align="center">
  <tr>
    <th>XIAO nRF52840 Plus Diagrama de indicación frontal</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_front.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus Diagrama de indicación trasero</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_back.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus Lista de pines</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_pinout.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## Dos bibliotecas de Arduino

El Seeed Studio XIAO nRF52840 agrupa muchas funciones en una pequeña placa y, a veces, puede que no ejecute lo mejor de ellas. Por ello, Seeed ha publicado dos bibliotecas de Arduino para **maximizar el poder de cada función**. Así que:

- Se recomienda usar la biblioteca `Seeed nRF52 Boards` si deseas aplicar la **función Bluetooth** y la "**función de bajo consumo energético**".
- Se recomienda usar la biblioteca `Seeed nRF52 mbed-enabled Boards` si deseas usarla en **aplicaciones de Machine Learning embebido** o aplicar "**funciones avanzadas de IMU y PDM**".
- Ambas bibliotecas son muy compatibles para el uso básico, como **LED, Digital, Analógico, Serial, I2C, SPI**.

La definición de pines soportada por estas dos bibliotecas podría ser algo diferente y Seeed continuará actualizando la wiki hasta que quede claro.

:::tip
1. Si utilizas el paquete integrado de Seeed nRF52 Boards, la función Serial puede no compilar. La solución es agregar la línea "#include <Adafruit_TinyUSB.h>" en tu código. Puedes descargar este paquete desde: https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. Si prefieres un enfoque más simple, puedes elegir desde el principio el paquete Seeed nRF52 mbed-enabled Boards. Este soporta la compilación de la función Serial sin la necesidad de modificaciones adicionales.
:::

## Empezando

Primero, vamos a conectar el Seeed Studio XIAO nRF52840 (Sense) al computador y cargar un código simple desde Arduino IDE para comprobar si la placa está funcionando correctamente.

### Configuración de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Computadora
- 1 x Cable USB Tipo-C

:::tip
Algunos cables USB solo pueden suministrar energía y no transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [el soporte USB 3.1 de Seeed USB Tipo-C](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
Conecta el Seeed Studio XIAO nRF52840 (Sense) a tu computadora mediante un cable USB Tipo-C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### Configuración de software

- **Paso 1.** Descarga e instala la versión más reciente de Arduino IDE según tu sistema operativo.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **Paso 2.** Inicia la aplicación Arduino

- **Paso 3.** Agrega el paquete de la placa Seeed Studio XIAO nRF52840 (Sense) a tu Arduino IDE

Navega a **Archivo > Preferencias**, y llena el campo **"URLs adicionales para el gestor de placas"** con la siguiente URL:
    *<https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json>*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={700} height="auto" /></p>

Navega a **Herramientas > Placa > Gestor de placas...**, escribe la palabra clave "**seeed nrf52**" en el cuadro de búsqueda, selecciona la versión más reciente de la placa que deseas y haz clic en instalar. Puedes instalar ambas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **Paso 4.** Selecciona tu placa y puerto

**Placa**

Después de instalar el paquete de la placa, navega a **Herramientas > Placa** y elige la placa que deseas, luego selecciona "**Seeed XIAO nRF52840 Sense**". Ahora hemos terminado de configurar el XIAO nRF52840 (Sense) para Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**Puerto**

Navega a **Herramientas > Puerto** y selecciona el nombre del puerto serial del Seeed Studio XIAO nRF52840 (Sense) conectado. Es probable que sea COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos seriales de hardware). El puerto serial del Seeed Studio XIAO nRF52840 (Sense) conectado suele contener paréntesis con el texto **Seeed Studio XIAO nRF52840** para **Seeed Studio XIAO nRF52840** o **Seeed Studio XIAO nRF52840 Sense** para **Seeed Studio XIAO nRF52840 Sense**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **Paso 5.** Navega a **Archivo > Ejemplos > 01.Básicos > Blink** para abrir el ejemplo **Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **Paso 6.** Haz clic en el botón **Subir** para cargar el código del ejemplo **Blink** en la placa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

Una vez cargado, verás el LED rojo incorporado parpadeando con un retardo de 1 segundo entre cada parpadeo. Esto significa que la conexión fue exitosa y ahora puedes explorar más proyectos con el Seeed Studio XIAO nRF52840 (Sense).

## Jugando con el LED 3-en-1 incorporado

El Seeed Studio XIAO nRF52840 (Sense) tiene un **LED 3-en-1 incorporado** que es programable por el usuario. Ahora aprenderás a controlar los colores RGB uno por uno utilizando Arduino.

Primero debes entender que el comportamiento de este LED no es el habitual cuando se controla por el código. El **LED se enciende** cuando damos una señal **LOW** y se **apaga** cuando damos una señal **HIGH**. Esto se debe a que este LED es controlado por un ánodo común y solo se ilumina con una señal de bajo nivel.

Un código de ejemplo sería:

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

Aquí, aunque se usa **HIGH**, el LED estará **APAGADO**. Necesitas reemplazar **HIGH** por **LOW** para ENCENDER el LED.

Consulta los siguientes mapeos de pines de los LEDs y úsalos en tu código:

- LED Rojo = LED_BUILTIN o LED_RED
- LED Azul = LED_BLUE
- LED Verde = LED_GREEN

## Verificación del Consumo de Energía

El Seeed Studio XIAO nRF52840 tiene bajo consumo de energía y aquí te proporcionamos un método para verificarlo. Se recomienda encarecidamente usar la biblioteca `Seeed nRF52 Boards` en este caso.

- **Paso 1.** Usa el **JLink** Downloader para cargar el [firmware del bootloader](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) para Seeed Studio XIAO nRF52840 (Sense).

:::note
Si estás utilizando el firmware de fábrica del Seeed Studio XIAO nRF52840 o nunca has realizado cambios en el firmware del Seeed Studio XIAO nRF52840, puedes omitir este paso.
:::

- **Paso 2.** Usa la biblioteca `Seeed nRF52 Boards` aquí.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Carga el demo de **deep_sleep** aquí y ejecútalo con **Arduino**.

```cpp
// The MIT License (MIT)
// Copyright (c) 2019 Ha Thach for Adafruit Industries

#include "SdFat.h"
#include "Adafruit_SPIFlash.h"

// Uncomment to run example with custom SPI and SS e.g with FRAM breakout
// #define CUSTOM_CS   A5
// #define CUSTOM_SPI  SPI

#if defined(CUSTOM_CS) && defined(CUSTOM_SPI)
  Adafruit_FlashTransport_SPI flashTransport(CUSTOM_CS, CUSTOM_SPI);

#elif defined(ARDUINO_ARCH_ESP32)
  // ESP32 use same flash device that store code.
  // Therefore there is no need to specify the SPI and SS
  Adafruit_FlashTransport_ESP32 flashTransport;

#else
  // On-board external flash (QSPI or SPI) macros should already
  // defined in your board variant if supported
  // - EXTERNAL_FLASH_USE_QSPI
  // - EXTERNAL_FLASH_USE_CS/EXTERNAL_FLASH_USE_SPI
  #if defined(EXTERNAL_FLASH_USE_QSPI)
    Adafruit_FlashTransport_QSPI flashTransport;

  #elif defined(EXTERNAL_FLASH_USE_SPI)
    Adafruit_FlashTransport_SPI flashTransport(EXTERNAL_FLASH_USE_CS, EXTERNAL_FLASH_USE_SPI);

  #else
    #error No QSPI/SPI flash are defined on your board variant.h !
  #endif
#endif

Adafruit_SPIFlash flash(&flashTransport);


/*  If you want to use a specific flash device, for example for a custom built board, first look for it in Adafruit_SPIFlash\src\flash_devices.h
 *  If it isn't in there you need to create your own definition like the W25Q80DLX_EXAMPLE example below.
 *  These definitions need to be edited to match information on the data sheet of the flash device that you want to use.
 *  If you are not sure what the manufacture ID, memory type and capacity values should be, try running the sketch anyway and look at the serial output
 *  The flash device will report these values to you as a single hexadecimal value (the JDEC ID)
 *  For example, the first device on the list - the W25Q80DLX - will report its JDEC ID as 0xef4014, which is made of these three values:
 *  manufacturer_id = 0xef
 *  memory_type     = 0x40
 *  capacity        = 0x14
 *  With this macro properly defined you can then create an array of device definitions as shown below, this can include any from the list of devices in flash_devices.h, and any you define yourself here
 *  You need to update the variable on line 71 to reflect the number of items in the array
 *  You also need to uncomment line 84 and comment out line 81 so this array will be passed to the flash memory driver. 
 */
//Example of a user defined flash memory device:
//#define W25Q80DLX_EXAMPLE                                                               \
//  {                                                                            \
//    .total_size = (1 << 20), /* 1 MiB */                                       \
//        .start_up_time_us = 5000, .manufacturer_id = 0xef,                     \
//    .memory_type = 0x40, .capacity = 0x14, .max_clock_speed_mhz = 80,         \
//    .quad_enable_bit_mask = 0x02, .has_sector_protection = false,              \
//    .supports_fast_read = true, .supports_qspi = true,                         \
//    .supports_qspi_writes = false, .write_status_register_split = false,       \
//    .single_status_byte = false, .is_fram = false,                             \
//  }

/*
 * Create an array of data structures and fill it with the settings we defined above.
 * We are using two devices, but more can be added if you want.
 */
//static const SPIFlash_Device_t my_flash_devices[] = {
//    W25Q80DLX_EXAMPLE,
//};
/*
 * Specify the number of different devices that are listed in the array we just created. If you add more devices to the array, update this value to match.
 */
//const int flashDevices = 1;


#include <bluefruit.h>
void setup()
{
  flash.begin();
  Bluefruit.begin(); 
  if(flash.deepPowerDown() == false){
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW);
    while(1)
    {
      yield();
    }
  }
  flash.end();

  sd_power_system_off(); 
}

void loop()
{
  // nothing to do
}
```

:::tip
Aquí, nos gustaría expresar nuestro agradecimiento especial al autor por proporcionar el código -> ***daCoder*** <-
:::

**Si desea saber sobre este ejemplo de información más detallada, haz click [aquí](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)**


## Corriente de carga de la batería

La corriente de carga de la batería se puede seleccionar como 50mA o 100mA, donde puedes configurar **Pin13** como alto o bajo para cambiar entre 50mA o 100mA. La corriente de carga baja está en el modelo de entrada configurado como NIVEL ALTO, y la corriente de carga alta está en el modelo de salida configurado como NIVEL BAJO.

**Corriente de carga baja**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**Alta corriente de carga**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## Acceder a los pines SWD para depuración y reflash del bootloader

**Hardware Requerido**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**Software Requerido**

Es necesario descargar el software [Segger](https://www.segger.com/downloads/jlink/) desde el sitio web.

- **Paso 1.** Usa Jlink para conectar los pines a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **Paso 2.** Inicia J-Flash y busca nRF52840, creando un nuevo proyecto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **Paso 3.** Haz clic en "Target" y luego selecciona "Connect".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **Paso 4.** Arrastra el archivo binario o [hex](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) al software. Luego presiona F4 y F5 en ese orden. El reflasheo se completa.

## Preguntas Frecuentes

### P1: Mi Arduino IDE se queda bloqueado al cargar el código en la placa

Puedes intentar **resetear** la placa haciendo clic en el "Botón de reinicio" una vez. Si eso no funciona, haz clic rápidamente dos veces para ingresar al **modo de bootloader**. Si eso tampoco funciona, desconecta la placa del PC y conéctala nuevamente.

### P2: Mi placa no aparece como un dispositivo serial en Arduino IDE

Puedes intentar **resetear** la placa haciendo clic en el "Botón de reinicio" una vez. Si eso no funciona, haz clic rápidamente dos veces para ingresar al **modo de bootloader**.

### P3: ¿Qué consideraciones debo tener al usar XIAO nRF52840 (Sense) para la carga de la batería?

Cuando P0.14 (D14) apaga la función ADC a un nivel alto de 3.3V, P0.31 estará en el límite de voltaje de entrada de 3.6V. Existe el riesgo de quemar el pin P0.31.

Actualmente, para este problema, recomendamos que los usuarios no apaguen la función ADC de P0.14 (D14) o configuren P0.14 (D14) en alto durante la carga de la batería.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### P4: ¿Cómo se comporta la luz verde cuando esta enciendido?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB Schematic" width="120" height="auto" /></p>

El pin `P0.17` se utiliza para controlar el comportamiento de la luz indicadora verde, que muestra el estado de carga:

- **Nivel bajo**: cuando está en proceso de **carga**.
- **Nivel alto**: cuando la batería no está **cargando** o está **totalmente cargada**.

Cuando está en nivel bajo, el LED `RED_CHG` se encenderá.

Para más detalles, consulta el datasheet del PMIC: [BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) y el datasheet del [XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf).

## Recursos

### Seeed Studio XIAO nRF52840

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[PDF]** [nRF52840 datasheet](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Schematic](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle file](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 pinout sheet](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Certification files](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Certification.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


### Seeed Studio XIAO nRF52840 Sense

- **[PDF]** [nRF52840 datasheet](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense Schematic](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle file](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagle footprint](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Sense pinout sheet](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3D Model](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Sense Certification files](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-Certification.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 Sense FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 (Sense) Plus

- **[PDF]** [nRF52840 datasheet](https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_datasheet.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus Schematic ](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.0.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD file](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlAO_nRF52840_KiCAD_file.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlA0_nRF52840_Sense_Dimension_in_DXF.dxf)

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
