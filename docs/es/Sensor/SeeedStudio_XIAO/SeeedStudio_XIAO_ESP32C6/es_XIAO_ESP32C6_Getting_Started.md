---
description: Primeros pasos con Seeed Studio XIAO ESP32C6.
title: Primeros pasos con Seeed Studio XIAO ESP32C6
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
- XIAO
- ESP32C6
- Seeeduino
slug: /es/xiao_esp32c6_getting_started
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 08/05/2024
  author: Spencer
---

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

Seeed Studio XIAO ESP32C6 está alimentado por el SoC altamente integrado [ESP32-C6](https://www.espressif.com/en/products/socs/esp32-c6), construido sobre **dos procesadores RISC-V de 32 bits**, con un procesador de alto rendimiento (HP) que **funciona hasta 160 MHz**, y un procesador RISC-V de 32 bits de bajo consumo (LP), que puede funcionar hasta 20 MHz. Hay **512KB de SRAM y 4 MB de Flash en el chip**, permitiendo más espacio de programación y brindando más posibilidades a los escenarios de control IoT.

XIAO ESP32C6 es **nativo de Matter gracias a su conectividad inalámbrica mejorada**. La pila inalámbrica soporta **WiFi 6 de 2.4 GHz, Bluetooth® 5.3, Zigbee, y Thread (802.15.4)**. Como el primer miembro XIAO compatible con Thread, es perfecto para construir proyectos compatibles con Matter, logrando así interoperabilidad en el hogar inteligente.

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

<table class="sp-table-c6">
    <thead>
        <tr>
            <th colspan="2">Productos</th>
            <th><Highlight color="#92c52a">XIAO ESP32C6</Highlight></th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="2" rowspan="2">Procesador</th>
            <td>Espressif ESP32-C6 SoC</td>
            <td>Espressif ESP32-C3 SoC</td>
            <td>Espressif ESP32-S3R8</td>
        </tr>
        <tr>
            <td>Dos procesadores RISC-V de 32 bits, con el de alto rendimiento funcionando hasta 160 MHz, y el de bajo consumo funcionando hasta 20 MHz</td>
            <td>Procesador de chip de núcleo único RISC-V de 32 bits con un pipeline de cuatro etapas que opera hasta 160 MHz</td>
            <td>Procesador dual-core Xtensa LX7 de 32 bits funcionando hasta 240 MHz</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="3">Inalámbrico</th>
            <td>Subsistema completo de 2.4GHz <strong>Wi-Fi 6</strong></td>
            <td colspan="2">Subsistema completo de Wi-Fi de 2.4GHz</td>
        </tr>
        <tr>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
        </tr>
        <tr>
            <td><strong>Zigbee,Thread,IEEE 802.15.4</strong></td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1" >Memoria en chip</th>
            <td>512KB SRAM &amp; 4MB Flash</td>
            <td>400KB SRAM &amp; 4MB Flash</td>
            <td>8M PSRAM &amp; 8MB Flash</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="2" >Interfaz</th>
            <td>1x UART,1x LP_UART, 1x IIC, 1x LP_IIC, 1x SPI,11x GPIO(PWM), 7x ADC, 1xSDIO 2.0 Slave</td>
            <td>1x UART, 1x IIC, 1x SPI,11x GPIO(PWM), 4x ADC</td>
            <td>1x UART, 1x IIC, 1x IIS, 1x SPI,11x GPIO(PWM), 9x ADC, 1x LED de usuario, 1x LED de carga</td>
        </tr>
        <tr>
            <td colspan="3">1x Botón de reinicio, 1x Botón de arranque</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">Dimensiones</th>
            <td colspan="3">21 x 17.8 mm</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">Alimentación</th>
            <th colspan="1">Voltaje de entrada</th>
            <td colspan="3">Type-C: 5V<br></br>BAT: 4.2V</td>
        </tr>
        <tr>
            <th>Voltaje de operación del circuito (listo para operar)</th>
            <td colspan="2">USB:5V@9mA<br></br>BAT:3.8V@9mA</td>
            <td>Type-C: 5V@19mA<br></br>BAT: 3.8V@22mA</td>
        </tr>
        <tr>
            <th>Corriente de carga de batería</th>
            <td>100mA</td>
            <td>350mA</td>
            <td>100mA</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">Modelo de Consumo de Energía (Alimentación: 3.8V)</th>
            <th>Modelo Modem-sleep</th>
            <td>~ 30 mA</td>
            <td>~ 24 mA</td>
            <td>~ 25 mA</td>
        </tr>
        <tr>
            <th> Modelo Light-sleep</th>
            <td>~ 2.5 mA</td>
            <td>~ 3 mA</td>
            <td>~ 2 mA</td>
        </tr>
        <tr>
            <th> Modelo Deep Sleep</th>
            <td>~ 15 μA</td>
            <td>~ 44 μA</td>
            <td>~ 14 μA</td>
        </tr>
        <tr>
            <th colspan="2">Temperatura de Trabajo</th>
            <td colspan="2">-40°C ~ 85°C</td>
            <td>-40°C ~ 65°C</td>
        </tr>
    </tbody>
</table>

### Características

- **Conectividad Mejorada**: Integra conectividad de radio Wi-Fi 6 (802.11ax) de ***2.4*** GHz, Bluetooth 5(LE) e IEEE 802.15.4, permitiendo la aplicación de protocolos **Thread** y **Zigbee**.
- **Matter Nativo**: Soporta la construcción de proyectos de hogar inteligente compatibles con Matter, asegurando la interoperabilidad entre diferentes dispositivos inteligentes.
- **Seguridad Encriptada en Chip**: Utiliza el ESP32-C6 para proporcionar arranque seguro, encriptación y características de Entorno de Ejecución Confiable (TEE), mejorando la seguridad de los proyectos de hogar inteligente.
- **Rendimiento RF Excepcional**: Cuenta con una antena integrada con hasta *80m* de alcance BLE/Wi-Fi y ofrece una interfaz para conectar una antena UFL externa, asegurando conectividad confiable.
- **Aprovechamiento del Consumo de Energía**: Ofrece cuatro modos de funcionamiento, incluyendo un modo de sueño profundo con consumo tan bajo como *15* μA, junto con soporte para gestión de carga de batería de litio.
- **Procesadores RISC-V Duales**: Incorpora dos procesadores RISC-V de 32 bits, con el procesador de alto rendimiento capaz de funcionar hasta 160 MHz y el procesador de bajo consumo hasta *20 MHz*.
- **Diseños XIAO Clásicos**: Mantiene el factor de forma del tamaño de un pulgar de 21 x 17.8mm y diseño de montaje de un solo lado, ideal para proyectos con limitaciones de espacio como dispositivos portátiles.

## Descripción general del hardware

<table align="center">
 <tr>
     <th>Diagrama de indicación XIAO ESP32C6</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pines XIAO ESP32C6</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip Conmutador RF

La función **Conmutador RF** te permite alternar entre la antena cerámica integrada y una antena externa configurando `GPIO14`. Para habilitar esta función, *primero debes establecer `GPIO3` en nivel bajo*, ya que esto activa el control del conmutador RF.

- **GPIO14 Nivel Bajo (Configuración Predeterminada)**: El dispositivo usa la antena cerámica integrada.
- **GPIO14 Nivel Alto**: El dispositivo cambia a la antena externa.

Por defecto, `GPIO14` está configurado en nivel bajo, habilitando la antena integrada. Para usar una antena externa, establece `GPIO14` en nivel alto. Consulta el código de ejemplo a continuación para obtener orientación sobre cómo configurar `GPIO3` y `GPIO14` para activar la antena externa:

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

## Comenzando

Para permitirte comenzar con el XIAO ESP32C6 más rápido, por favor lee la preparación de hardware y software a continuación para preparar el XIAO.

### Preparación de Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x Computadora
- 1 x Cable USB Type-C

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

#### Soldar pines

El XIAO ESP32C6 se envía sin pines soldados por defecto, necesitas preparar tus propios pines y soldarlos a los pines correspondientes del XIAO para que puedas conectar a la placa de expansión o sensor.

Debido al tamaño miniatura del XIAO ESP32C6, por favor ten cuidado al soldar los pines, no pegues diferentes pines juntos, y no pegues soldadura al blindaje u otros componentes. De lo contrario, puede causar que el XIAO tenga un cortocircuito o no funcione correctamente, y las consecuencias causadas por esto serán responsabilidad del usuario.

#### Modo BootLoader

Hay ocasiones cuando usamos el programa incorrecto para hacer que el XIAO parezca perder puertos o no funcione correctamente. El rendimiento específico es:

- Conectado a la computadora, pero no se encuentra número de puerto para el XIAO.
- La computadora está conectada y aparece el número de puerto, pero la carga del programa falla.

Cuando encuentres las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, que puede resolver la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Paso 1**. Presiona y mantén presionado el botón BOOT en el XIAO ESP32C6 sin soltarlo.
- **Paso 2**. Mantén presionado el botón BOOT y luego conéctalo a la computadora a través del cable de datos. Suelta el botón BOOT después de conectar a la computadora.
- **Paso 3**. Carga el programa **Blink** para verificar el funcionamiento del XIAO ESP32C6.

#### Reset

Cuando el programa funciona de manera anormal, puedes presionar Reset una vez durante el encendido para permitir que el XIAO vuelva a ejecutar el programa cargado.

Cuando presionas y mantienes presionada la tecla BOOT mientras enciendes y luego presionas la tecla Reset una vez, también puedes entrar al modo BootLoader.

### Preparación de Software

La herramienta de programación recomendada para el XIAO ESP32C6 es el Arduino IDE, por lo que necesitas completar la instalación de Arduino como parte de la preparación de software.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos altamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).

Y el paquete de placa para el XIAO ESP32C6 requiere al menos la versión **2.0.8** para estar disponible.

:::

- **Paso 1.** Descarga e Instala la versión estable del Arduino IDE según tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>

  <br></br>
- **Paso 2.** Inicia la aplicación Arduino.
- **[Paso 3](#add-board).** Añade el paquete de placa XIAO ESP32C6 al Arduino IDE y haz clic en `OK`.
- **Paso 4.** Cierra el Arduino IDE y ábrelo nuevamente.

#### Añadir la Placa XIAO-C6 {#add-board}

Para instalar la placa XIAO ESP32C6, sigue estos pasos:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. Añade la URL del gestor de placas anterior a las preferencias de tu Arduino IDE, que se toma de [Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide).

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. Descarga el paquete de placa XIAO ESP32C6.

:::note
Solo disponible si la versión de la placa esp32 es mayor que `3.0.0`.
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. Opta por la variante `XIAO_ESP32C6`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

Ahora disfruta programando ✨.

#### Ejecuta tu primer programa Blink

- **Paso 1.** Inicia la aplicación Arduino.

- **Paso 2.** Navega a **File > Examples > 01.Basics > Blink**, abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa **XIAO ESP32C6**, y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se carga exitosamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO ESP32C6 está parpadeando.

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## Uso de la Batería

La serie XIAO ESP32C6 cuenta con un chip de gestión de energía integrado, lo que le permite ser alimentado de forma independiente por una batería o cargar la batería a través de su puerto USB.

Para conectar una batería a tu XIAO, recomendamos usar una batería de litio recargable de 3.7V certificada. Al soldar la batería, distingue cuidadosamente entre los terminales positivo y negativo. La almohadilla del electrodo negativo debe ubicarse en el lado izquierdo cerca de la marca de serigrafía "D8", mientras que la almohadilla del electrodo positivo debe ubicarse en el lado derecho cerca de la marca de serigrafía "D5".

:::caution
Cuando uses alimentación por batería, no habrá voltaje presente en el pin de 5V.
:::

:::tip Luz Indicadora Roja

El XIAO ESP32C6 tiene una luz indicadora roja para la carga de la batería, similar al [XIAO ESP32S3](/es/xiao_esp32s3_getting_started/#battery-usage):

El comportamiento de la luz roja para el XIAO ESP32C6 es el siguiente:

- Cuando no hay batería conectada:
  - La luz roja se enciende cuando se conecta el cable Type-C y se apaga después de 30 segundos.
- Cuando hay una batería conectada y el cable Type-C está enchufado para cargar:
  - La luz roja parpadea.
- Cuando la batería está completamente cargada a través de la conexión Type-C:
  - La luz roja se apaga.

:::

## Lectura del Voltaje de la Batería

Para monitorear el voltaje de la batería en el XIAO ESP32C6, similar al [XIAO ESP32C3](/es/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), necesitarás soldar una resistencia de 200k en una configuración 1:2. Esta configuración reduce el voltaje a la mitad, permitiendo un monitoreo seguro a través del puerto analógico A0.

### Código de Ejemplo

El código a continuación inicializa el ADC en el puerto A0 y promedia 16 lecturas para calcular el voltaje de la batería, ajustando para la relación de atenuación 1:2 del divisor de voltaje.

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

Este código toma 16 mediciones del ADC, las promedia, y luego compensa la relación 1:2 del divisor de voltaje para mostrar el voltaje de la batería en voltios con tres decimales de precisión.

## Modo de sueño profundo y despertar

El XIAO ESP32C6 tiene un modo de sueño profundo completo y función de despertar. Aquí mostraremos dos de los ejemplos más comunes ofrecidos por el ESP.

### Demo1: Sueño Profundo con Despertar Externo

Este código muestra cómo usar el sueño profundo con un disparador externo como fuente de despertar y cómo almacenar datos en la memoria RTC para usarlos después de reinicios.

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

### Demo2: Suspensión Profunda con Despertar por Temporizador

ESP32 ofrece un modo de suspensión profunda para un ahorro efectivo de energía, ya que la energía es un factor importante para las aplicaciones IoT. En este modo, las CPUs, la mayor parte de la RAM y todos los periféricos digitales que son sincronizados desde APB_CLK se apagan. Las únicas partes del chip que aún pueden permanecer encendidas son: el controlador RTC, los periféricos RTC y las memorias RTC.

Este código muestra la suspensión profunda más básica con un temporizador para despertarlo y cómo almacenar datos en la memoria RTC para usarlos después de los reinicios.

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
Si quieres aprender a usar más del modo de sueño profundo y las funciones de despertar, puedes encontrar más programas de muestra escritos oficialmente para el chip por ESP en el Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## Recursos

- **[PDF]** [Hoja de datos del ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf)

- **[ZIP]** [Librerías KiCAD del Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH&PCB_24028.zip)

- **[PDF]** [Esquemático del Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

- **[XLSX]** [Hoja de pines del Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)


- 🔗 **[Kicad]** [FootPrint del Seeed Studio XIAO ESP32C6](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[STEP]** [Archivo Step del Seeed Studio XIAO ESP32C6](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1)


## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Gran Potencia, Placa Pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
