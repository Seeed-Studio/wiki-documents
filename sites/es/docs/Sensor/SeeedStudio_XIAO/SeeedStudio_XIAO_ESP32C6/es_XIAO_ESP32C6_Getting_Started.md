---
description: Primeros pasos con Seeed Studio XIAO ESP32C6.
title: Primeros pasos con Seeed Studio XIAO ESP32C6
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
  - XIAO
  - ESP32C6
  - Seeeduino
slug: /xiao_esp32c6_getting_started
sku: 113991254,102010636,101991470
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 08/05/2024
  author: Spencer
createdAt: '2024-03-29'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con Seeed Studio XIAO ESP32C6

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introducción

Seeed Studio XIAO ESP32C6 está impulsado por el altamente integrado [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6), basado en **dos procesadores RISC-V de 32 bits**, con un procesador de alto rendimiento (HP) que **funciona hasta 160 MHz**, y un procesador RISC-V de 32 bits de bajo consumo (LP), que puede funcionar hasta 20 MHz. Hay **512KB de SRAM y 4 MB de Flash en el chip**, lo que permite más espacio de programación y aporta más posibilidades a los escenarios de control de IoT.

XIAO ESP32C6 es **nativamente compatible con Matter gracias a su conectividad inalámbrica mejorada**. La pila inalámbrica es compatible con **WiFi 6 de 2,4 GHz, Bluetooth® 5.3, Zigbee y Thread (802.15.4)**. Como el primer miembro de XIAO compatible con Thread, es una opción perfecta para construir proyectos compatibles con Matter, logrando así interoperabilidad en el hogar inteligente.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### Especificaciones
<table>
  <tr>
    <th>Producto</th>
    <td>XIAO ESP32-C6</td>
    <td><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html ">XIAO ESP32-C3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html ">XIAO ESP32-S3</a></td>
  </tr>
  <tr>
    <th>Procesador</th>
    <td>Espressif ESP32-C6 SoC<br/>dos procesadores RISC-V de 32 bits, con el de alto rendimiento funcionando hasta 160 MHz y el de bajo consumo hasta 20 MHz</td>
    <td>Espressif ESP32-C3 SoC<br/>procesador RISC-V monocore de 32 bits con una canalización de cuatro etapas que funciona hasta 160 MHz</td>
    <td>Espressif ESP32-S3R8 SoC<br/>procesador Xtensa LX7 de doble núcleo y 32 bits que funciona hasta 240 MHz</td>
  </tr>
  <tr>
    <th rowspan="3">Inalámbrico</th>
    <td>Subsistema Wi-Fi 6 completo de 2,4 GHz</td>
    <td>Subsistema Wi-Fi completo de 2,4 GHz</td>
    <td>Subsistema Wi-Fi completo de 2,4 GHz</td>
  </tr>
  <tr>
    <td colspan="3">Bluetooth Low Energy 5.0</td>
  </tr>
  <tr>
    <td>Zigbee, Thread, IEEE 802.15.4</td>
    <td>/</td>
    <td>/</td>
  </tr>
  <tr>
    <th>Memoria en chip</th>
    <td>512KB SRAM &amp; 4MB Flash</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
    <td>8MB PSRAM &amp; 8MB Flash</td>
  </tr>
  <tr>
    <th rowspan="2">Interfaz</th>
    <td>1x UART<br/>1x LP_UART<br/>1x IIC<br/>1x LP_IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>7x ADC<br/>1x SDIO</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x User LED<br/>1x Charge LED</td>
  </tr>
  <tr>
    <td colspan="3">1x Reset button<br/>1x Boot button</td>
  </tr>
  <tr>
    <th>Dimensiones</th>
    <td colspan="3">21 x 17.8mm</td>
  </tr>
  <tr>
    <th>Alimentación</th>
    <td colspan="3">Voltaje de entrada (Type-C): 5V<br/>Voltaje de entrada (BAT): 3.7V</td>
  </tr>
  <tr>
    <th>Modelo de consumo de energía (Típ.)<br/>(Alimentación: 3.8V)</th>
    <td>Modelo Modem-sleep: 30 mA<br/>Modelo Light-sleep: 3.1 mA<br/>Modelo Deep Sleep: 15 μA</td>
    <td>Modelo Modem-sleep: 24 mA<br/>Modelo Light-sleep: 3 mA<br/>Modelo Deep Sleep: 44 μA</td>
    <td>Modelo Modem-sleep: 27 mA<br/>Modelo Light-sleep: 2 mA<br/>Modelo Deep Sleep: 14 μA</td>
  </tr>
  <tr>
    <th>Temperatura de trabajo</th>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 65°C</td>
  </tr>
</table>

> [XIAO ESP32-S3 vs ESP32-C3 vs ESP32-C6: ¿Cuál es el mejor para tu proyecto?](https://www.seeedstudio.com/blog/2026/01/14/xiao-esp32-s3-c3-c6-comparison/)

### Características

- **Conectividad mejorada**: Integra conectividad de radio Wi-Fi 6 (802.11ax) de ***2.4*** GHz, Bluetooth 5(LE) e IEEE 802.15.4, lo que permite la aplicación de los protocolos **Thread** y **Zigbee**.
- **Compatibilidad nativa con Matter**: Admite la creación de proyectos de hogar inteligente compatibles con Matter, garantizando la interoperabilidad entre diferentes dispositivos inteligentes.
- **Seguridad cifrada en el chip**: Utiliza el ESP32-C6 para proporcionar funciones de arranque seguro, cifrado y Trusted Execution Environment (TEE), mejorando la seguridad de los proyectos de hogar inteligente.
- **Rendimiento RF sobresaliente**: Incorpora una antena integrada con un alcance BLE/Wi-Fi de hasta *80m* y ofrece una interfaz para conectar una antena UFL externa, garantizando una conectividad fiable.
- **Aprovechamiento del consumo de energía**: Ofrece cuatro modos de funcionamiento, incluido un modo de suspensión profunda con un consumo tan bajo como *15* μA, junto con soporte para la gestión de carga de baterías de litio.
- **Procesadores RISC-V duales**: Incorpora dos procesadores RISC-V de 32 bits, con el procesador de alto rendimiento capaz de funcionar hasta 160 MHz y el procesador de bajo consumo hasta *20 MHz*.
- **Diseños clásicos de XIAO**: Mantiene el factor de forma del tamaño de un pulgar de 21 x 17.8mm y el diseño de montaje en un solo lado, ideal para proyectos con espacio limitado como dispositivos portátiles.

## Descripción general del hardware

### Parte frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAO_ESP32-C6_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAO_ESP32-C6_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

:::tip Conmutador RF

La función de **RF Switch** te permite alternar entre la antena cerámica integrada y una antena externa configurando `GPIO14`. Para habilitar esta función, *primero debes establecer `GPIO3` a nivel bajo*, ya que esto activa el control del conmutador RF.  

- **GPIO14 en nivel bajo (configuración predeterminada)**: El dispositivo utiliza la antena cerámica integrada.
- **GPIO14 en nivel alto**: El dispositivo cambia a la antena externa.  

De forma predeterminada, `GPIO14` está configurado a nivel bajo, habilitando la antena integrada. Para usar una antena externa, establece `GPIO14` a nivel alto. Consulta el código de ejemplo a continuación para obtener orientación sobre cómo configurar `GPIO3` y `GPIO14` para activar la antena externa:

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW); // digitalWrite(3, LOW); // Activate RF switch control

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // Use external antenna
}
```


:::

## Mapa de pines

| Pin XIAO                 | Función   | Pin del chip  | Funciones alternativas | Descripción                          |
| :---------------------: | :-------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS      |           |                    | Entrada/Salida de alimentación       |
| GND                     |           |           |                    |                                      |
| 3V3                     | 3V3_OUT   |           |                    | Salida de alimentación               |
| D0                      | Analógico    | GPIO0     | LP_GPIO0           | GPIO, ADC                            |
| D1                      | Analógico    | GPIO1     | LP_GPIO1           | GPIO, ADC                            |
| D2                      | Analógico    | GPIO2     | LP_GPIO2           | GPIO, ADC                            |
| D3                      | Digital   | GPIO21    | SDIO_DATA1         | GPIO                                 |
| D4                      | SDA       | GPIO22    | SDIO_DATA2         | GPIO, datos I2C                      |
| D5                      | SCL       | GPIO23    | SDIO_DATA3         | GPIO, reloj I2C                      |
| D6                      | TX        | GPIO16    |                    | GPIO, transmisión UART               |
| D7                      | RX        | GPIO17    |                    | GPIO, recepción UART                 |
| D8                      | SCK       | GPIO19    | SPI_CLK           | GPIO, reloj SPI                      |
| D9                      | MISO      | GPIO20    | SPI_MISO          | GPIO, datos SPI                      |
| D10                     | MOSI      | GPIO18    | SPI_MOSI           | GPIO, datos SPI                      |
| MTDO                    |           | GPIO7     |                    | JTAG                                 |
| MTDI                    |           | GPIO5     |                    | JTAG, ADC                            |
| MTCK                    |           | GPIO6     |                    | JTAG, ADC                            |
| MTMS                    |           | GPIO4     |                    | JTAG, ADC                            |
| EN                      |           | CHIP_PU   |                    | Reinicio                             |
| Boot                    |           | GPIO9     |                    | Entrar en modo Boot                  |
| RF Switch Port Select   |           | GPIO14    |                    | Cambiar entre la antena integrada y la antena UFL |
| RF Switch Power         |           | GPIO3     |                    | Alimentación                         |
| Light                   |           | GPIO15    |                    | Luz de usuario                       |
## Primeros pasos

Para permitirte comenzar más rápido con la XIAO ESP32C6, lee la preparación de hardware y software a continuación para preparar la XIAO.

### Preparación de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x Ordenador
- 1 x Cable USB Tipo-C

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

#### Soldar los pines

XIAO ESP32C6 se envía sin pines de cabecera por defecto, necesitas preparar tus propios pines de cabecera y soldarlos a los pines correspondientes del XIAO para que puedas conectarlo a la placa de expansión o al sensor.

Debido al tamaño miniatura del XIAO ESP32C6, ten cuidado al soldar los pines: no juntes pines diferentes y no dejes que la soldadura toque el blindaje u otros componentes. De lo contrario, puede provocar que el XIAO se cortocircuite o no funcione correctamente, y las consecuencias derivadas de ello serán asumidas por el usuario.

#### Modo BootLoader

A veces, cuando usamos el programa equivocado, el XIAO puede parecer perder los puertos o no funcionar correctamente. El comportamiento específico es:

- Conectado al ordenador, pero no se encuentra ningún número de puerto para el XIAO.
- El ordenador está conectado y aparece el número de puerto, pero la carga del programa falla.

Cuando te encuentres con las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, lo que puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Paso 1**. Mantén pulsado el botón BOOT en el XIAO ESP32C6 sin soltarlo.
- **Paso 2**. Mantén pulsado el botón BOOT y luego conéctalo al ordenador mediante el cable de datos. Suelta el botón BOOT después de conectarlo al ordenador.
- **Paso 3**. Carga el programa **Blink** para comprobar el funcionamiento del XIAO ESP32C6.

#### Reinicio

Cuando el programa se ejecuta de forma anómala, puedes pulsar Reset una vez durante el encendido para que el XIAO vuelva a ejecutar el programa cargado.

Cuando mantienes pulsada la tecla BOOT mientras enciendes y luego pulsas la tecla Reset una vez, también puedes entrar en el modo BootLoader.

### Preparación del software

La herramienta de programación recomendada para el XIAO ESP32C6 es el Arduino IDE, por lo que necesitas completar la instalación de Arduino como parte de la preparación del software.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).

Y el paquete integrado para XIAO ESP32C6 requiere al menos la versión **2.0.8** para estar disponible.

:::

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE de acuerdo con tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>

  <br></br>
- **Paso 2.** Inicia la aplicación Arduino.
- **[Paso 3](#add-board).**  Añade el paquete integrado XIAO ESP32C6 al Arduino IDE y haz clic en `OK`.
- **Paso 4.** Cierra el Arduino IDE y vuelve a abrirlo.

#### Añadir la placa XIAO-C6 {#add-board}

Para instalar la placa XIAO ESP32C6, sigue estos pasos:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. Añade la URL del gestor de placas anterior a las preferencias de tu Arduino IDE, que se toma de [Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide).

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. Descarga el paquete de la placa XIAO ESP32C6.

:::note
Solo disponible si la versión de la placa esp32 es superior a `3.0.0`.
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. Elige la variante `XIAO_ESP32C6`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

Ahora disfruta programando ✨.

#### Ejecuta tu primer programa Blink

- **Paso 1.** Inicia la aplicación Arduino.

- **Paso 2.** Navega a **File > Examples > 01.Basics > Blink** y abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa **XIAO ESP32C6** y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se haya cargado correctamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO ESP32C6 está parpadeando.

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## Uso de la batería

La serie XIAO ESP32C6 incorpora un chip de gestión de energía, lo que le permite alimentarse de forma independiente mediante una batería o cargar la batería a través de su puerto USB.

Para conectar una batería a tu XIAO, recomendamos usar una batería de litio recargable de 3,7 V cualificada. Al soldar la batería, distingue cuidadosamente entre los terminales positivo y negativo. La almohadilla del electrodo negativo debe estar situada en el lado izquierdo cerca del serigrafiado "D8", mientras que la almohadilla del electrodo positivo debe estar situada en el lado derecho cerca del serigrafiado "D5".

:::caution
Cuando se utiliza alimentación por batería, no habrá tensión en el pin de 5V.
:::

:::tip Luz indicadora roja

El XIAO ESP32C6 tiene una luz indicadora roja para la carga de la batería, similar al [XIAO ESP32S3](/es/xiao_esp32s3_getting_started/#uso-de-la-batería):

El comportamiento de la luz roja para el XIAO ESP32C6 es el siguiente:

- Cuando no hay batería conectada:
  - La luz roja se enciende cuando se conecta el cable Tipo-C y se apaga después de 30 segundos.
- Cuando una batería está conectada y el cable Tipo-C está enchufado para cargar:
  - La luz roja parpadea.
- Cuando la batería está completamente cargada a través de la conexión Tipo-C:
  - La luz roja se apaga.

:::

## Lectura del voltaje de la batería

Para monitorizar el voltaje de la batería en el XIAO ESP32C6, de forma similar al [XIAO ESP32C3](/es/XIAO_ESP32C3_Getting_Started/#comprobar-el-voltaje-de-la-batería), tendrás que soldar una resistencia de 200k en una configuración 1:2. Esta configuración reduce el voltaje a la mitad, permitiendo una monitorización segura a través del puerto analógico A0.

### Código de ejemplo

El siguiente código inicializa el ADC en el puerto A0 y promedia 16 lecturas para calcular el voltaje de la batería, ajustando la relación de atenuación 1:2 del divisor de voltaje.

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // Configure A0 as ADC input
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

Este código toma 16 mediciones del ADC, las promedia y luego compensa la relación 1:2 del divisor de voltaje para mostrar el voltaje de la batería en voltios con tres decimales de precisión.

## Modo de sueño profundo y activación

El XIAO ESP32C6 tiene un modo de sueño profundo completo y una función de activación. Aquí mostraremos dos de los ejemplos más comunes ofrecidos por el ESP.

### Demo1: Sueño profundo con activación externa

Este código muestra cómo usar el modo de sueño profundo con un disparador externo como fuente de activación y cómo almacenar datos en la memoria RTC para utilizarlos tras los reinicios.

```cpp
/*
Hardware Connections
======================
Push Button to GPIO 0 pulled down with a 10K Ohm
resistor

NOTE:
======
Bit mask of GPIO numbers which will cause wakeup. Only GPIOs
which have RTC functionality can be used in this bit map.
For different SoCs, the related GPIOs are:
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // GPIO 0 bitmask for ext1

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up for an external trigger.
  There are two types for ESP32, ext0 and ext1, ext0 
  don't support ESP32C6 so we use ext1.
  */

  //If you were to use ext1, you would use it like
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

### Demo2: Modo de suspensión profunda con temporizador de activación

ESP32 ofrece un modo de suspensión profunda para un ahorro de energía eficaz, ya que la energía es un factor importante para las aplicaciones de IoT. En este modo, las CPU, la mayor parte de la RAM y todos los periféricos digitales que se sincronizan desde APB_CLK se apagan. Las únicas partes del chip que pueden seguir encendidas son: el controlador RTC, los periféricos RTC y las memorias RTC.

Este código muestra la suspensión profunda más básica con un temporizador para despertarla y cómo almacenar datos en la memoria RTC para utilizarlos tras los reinicios.

```cpp
/*
Simple Deep Sleep with Timer Wake Up
=====================================
This code is under Public Domain License.

Author:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  5        /* Time ESP32 will go to sleep (in seconds) */

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up every 5 seconds
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) +
  " Seconds");

  /*
  Next we decide what all peripherals to shut down/keep on
  By default, ESP32 will automatically power down the peripherals
  not needed by the wakeup source, but if you want to be a poweruser
  this is for you. Read in detail at the API docs
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  Left the line commented as an example of how to configure peripherals.
  The line below turns off all RTC peripherals in deep sleep.
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("Configured all RTC Peripherals to be powered down in sleep");

  /*
  Now that we have setup a wake cause and if needed setup the
  peripherals state in deep sleep, we can now start going to
  deep sleep.
  In the case that no wake up sources were provided but deep
  sleep was started, it will sleep forever unless hardware
  reset occurs.
  */
  Serial.println("Going to sleep now");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

:::tip
Si quieres aprender a utilizar más funciones del modo de suspensión profunda y de activación, puedes encontrar más programas de ejemplo escritos oficialmente para el chip por ESP en el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## Recursos

**Diseño de hardware**
- **📄[Hoja de datos]** [Espressif ESP32-C6 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf )
- **📄[Esquemático]** [XIAO ESP32-C6 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH_260114.pdf )
- **🗃️[Archivos de diseño de PCB]** [XIAO ESP32-C6 KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH&PCB_260114.zip )
- **🗃️[Bibliotecas de diseño de PCB]** 
  - [XIAO Serie huellas de KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Serie símbolos SCH de KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [XIAO ESP32-C6 Pinout Sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx )

**Diseño mecánico**
- **📄[Modelo 3D]** [XIAO ESP32-C6 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1 )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
