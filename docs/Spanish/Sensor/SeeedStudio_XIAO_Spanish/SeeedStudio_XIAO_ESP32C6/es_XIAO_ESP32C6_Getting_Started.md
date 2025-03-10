---
description: Getting Started with Seeed Studio XIAO ESP32C6.
title: Introducción a XIAO ESP32C6 de Seeed Studio 
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
- XIAO
- ESP32C6
- Seeeduino
slug: /es/xiao_esp32c6_getting_started
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 02/08/2024
  author: Guillermo
---

# Introducción a XIAO ESP32C6 de Seeed Studio

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
        ">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introduction

## Introducción

El Seeed Studio XIAO ESP32C6 está alimentado por el altamente integrado [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6), basado en **dos procesadores RISC-V de 32 bits**, con un procesador de alto rendimiento (HP) que **funciona hasta 160 MHz**, y un procesador de bajo consumo (LP) de 32 bits, que puede ser cronometrado hasta 20 MHz. El chip cuenta con **512 KB de SRAM y 4 MB de Flash**, lo que permite más espacio para programar y ofrece más posibilidades para los escenarios de control IoT.

El XIAO ESP32C6 es **nativo de Matter gracias a su conectividad inalámbrica mejorada**. La pila inalámbrica admite **WiFi 6 de 2.4 GHz, Bluetooth® 5.3, Zigbee y Thread (802.15.4)**. Como el primer miembro de la familia XIAO compatible con Thread, es ideal para crear proyectos compatibles con Matter, logrando así la interoperabilidad en hogares inteligentes.

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

## Comparación de especificaciones

<table class="sp-table-c6">
    <thead>
        <tr>
            <th colspan="2">Products</th>
            <th><Highlight color="#92c52a">XIAO ESP32C6</Highlight></th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="2" rowspan="2">Processor</th>
            <td>Espressif ESP32-C6 SoC</td>
            <td>Espressif ESP32-C3 SoC</td>
            <td>Espressif ESP32-S3R8</td>
        </tr>
        <tr>
            <td>Two 32-bit RISC-V processors, with the high-performance one running up to 160 MHz, and the low-power one clocking up to 20 MHz</td>
            <td>RISC-V single-core 32-bit chip processor with a four-stage pipeline that operates at up to 160 MHz</td>
            <td>Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="3">Wireless</th>
            <td>Complete 2.4GHz <strong>Wi-Fi 6</strong> subsystem</td>
            <td colspan="2">Complete 2.4GHz Wi-Fi subsystem</td>
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
            <th colspan="2" rowspan="1" >On-chip Memory</th>
            <td>512KB SRAM &amp; 4MB Flash</td>
            <td>400KB SRAM &amp; 4MB Flash</td>
            <td>8M PSRAM &amp; 8MB Flash</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="2" >Interface</th>
            <td>1x UART,1x LP_UART, 1x IIC, 1x LP_IIC, 1x SPI,11x GPIO(PWM), 7x ADC, 1xSDIO</td>
            <td>1x UART, 1x IIC, 1x SPI,11x GPIO(PWM), 4x ADC</td>
            <td>1x UART, 1x IIC, 1x IIS, 1x SPI,11x GPIO(PWM), 9x ADC, 1x User LED, 1x Charge LED</td>
        </tr>
        <tr>
            <td colspan="3">1x Reset button, 1x Boot button</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">Dimensions</th>
            <td colspan="3">21 x 17.8 mm</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">Power</th>
            <th colspan="1">Input voltage</th>
            <td colspan="3">Type-C: 5V<br></br>BAT: 4.2V</td>
        </tr>
        <tr>
            <th>Circuit operating Voltage (ready to operate)</th>
            <td colspan="2">USB:5V@9mA<br></br>BAT:3.8V@9mA</td>
            <td>Type-C: 5V@19mA<br></br>BAT: 3.8V@22mA</td>
        </tr>
        <tr>
            <th>Charging battery current</th>
            <td>100mA</td>
            <td>350mA</td>
            <td>100mA</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">Power Consumption Model(Supply Power: 3.8V)</th>
            <th>Modem-sleep Model</th>
            <td>~ 30 mA</td>
            <td>~ 24 mA</td>
            <td>~ 25 mA</td>
        </tr>
        <tr>
            <th> Light-sleep Model</th>
            <td>~ 2.5 mA</td>
            <td>~ 3 mA</td>
            <td>~ 2 mA</td>
        </tr>
        <tr>
            <th> Deep Sleep Model</th>
            <td>~ 15 μA</td>
            <td>~ 44 μA</td>
            <td>~ 14 μA</td>
        </tr>
        <tr>
            <th colspan="2">Working Temperature</th>
            <td colspan="2">-40°C ~ 85°C</td>
            <td>-40°C ~ 65°C</td>
        </tr>
    </tbody>
</table>

## Características

- **Conectividad mejorada**: Integra conectividad inalámbrica ***2.4*** GHz Wi-Fi 6 (802.11ax), Bluetooth 5 (LE) y radio IEEE 802.15.4, lo que permite la aplicación de los protocolos **Thread** y **Zigbee**.
- **Nativo de Matter**: Admite la creación de proyectos de hogares inteligentes compatibles con Matter, asegurando la interoperabilidad entre diferentes dispositivos inteligentes.
- **Seguridad encriptada en el chip**: Utiliza el ESP32-C6 para proporcionar arranque seguro, encriptación y características de Trusted Execution Environment (TEE), mejorando la seguridad en proyectos de hogares inteligentes.
- **Excelente rendimiento RF**: Cuenta con una antena integrada que ofrece un alcance de *hasta 80 m* en BLE/Wi-Fi y una interfaz para conectar una antena externa UFL, asegurando conectividad confiable.
- **Aprovechamiento del consumo de energía**: Ofrece cuatro modos de funcionamiento, incluido un modo de suspensión profunda con un consumo tan bajo como *15* μA, además de soportar la gestión de carga de baterías de litio.
- **Procesadores RISC-V duales**: Incorpora dos procesadores RISC-V de 32 bits, con el procesador de alto rendimiento capaz de funcionar hasta 160 MHz y el procesador de bajo consumo hasta *20 MHz*.
- **Diseño clásico de XIAO**: Mantiene el tamaño compacto de 21 x 17.8 mm y el diseño de montaje de un solo lado, ideal para proyectos con limitaciones de espacio como dispositivos portátiles.

## Resumen de hardware

<table align="center">
 <tr>
     <th>XIAO ESP32C6 Diagrama</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C6 Lista de Pines</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip RF Switch

La función **RF Switch** te permite alternar entre la antena cerámica integrada y una antena externa mediante la configuración de `GPIO14`. Para habilitar esta función, *primero debes configurar `GPIO3` en un nivel bajo*, ya que esto activa el control del interruptor RF.

- **Nivel bajo de GPIO14 (Configuración predeterminada)**: El dispositivo utiliza la antena cerámica integrada.
- **Nivel alto de GPIO14**: El dispositivo cambia a la antena externa.

Por defecto, `GPIO14` está configurado en un nivel bajo, lo que habilita la antena integrada. Para usar una antena externa, configura `GPIO14` en un nivel alto. Consulta el código de ejemplo a continuación para obtener orientación sobre cómo configurar `GPIO3` y `GPIO14` para activar la antena externa:

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW) // digitalWrite(3, LOW); // Activa RF switch control

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // Usa antena externa
}
```

:::

## Empezando

Para permitirte comenzar más rápido con el XIAO ESP32C6, por favor lee la preparación de hardware y software a continuación para preparar el XIAO.

### Preparación de Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x Computadora
- 1 x Cable USB Tipo-C
:::tip
Algunos cables USB solo pueden suministrar energía y no transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Tipo-C compatible con USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

#### Soldar los pines

El XIAO ESP32C6 se envía sin los pines soldados por defecto, por lo que necesitas preparar tus propios pines y soldarlos en los pines correspondientes del XIAO para que puedas conectarlo a la placa de expansión o al sensor.

Debido al tamaño reducido del XIAO ESP32C6, ten cuidado al soldar los pines, no pegues pines diferentes entre sí ni sueldes sobre el escudo o sobre otros componentes. De lo contrario, esto podría causar un cortocircuito en el XIAO o hacer que no funcione correctamente, y las consecuencias de esto serán responsabilidad del usuario.

### Modo BootLoader

Hay ocasiones en las que usamos el programa incorrecto y el XIAO parece perder puertos o no funcionar correctamente. La manifestación específica es:

- Conectado a la computadora, pero no se encuentra el número de puerto para el XIAO.
- La computadora está conectada y aparece el número de puerto, pero la carga del programa falla.

Cuando te encuentres con las dos situaciones anteriores, puedes intentar poner el XIAO en modo BootLoader, lo cual puede solucionar la mayoría de los problemas de dispositivos no reconocidos y cargas fallidas. El método específico es:

- **Paso 1**. Mantén presionado el botón BOOT del XIAO ESP32C6 sin soltarlo.
- **Paso 2**. Mantén presionado el botón BOOT y luego conéctalo a la computadora mediante el cable de datos. Suelta el botón BOOT después de conectar el XIAO a la computadora.
- **Paso 3**. Sube el programa **Blink** para verificar el funcionamiento del XIAO ESP32C6.

### Reset

Cuando el programa no funcione correctamente, puedes presionar Reset una vez durante el encendido para que el XIAO vuelva a ejecutar el programa cargado.

Cuando mantienes presionado el botón BOOT mientras enciendes el XIAO y luego presionas el botón Reset una vez, también puedes ingresar al modo BootLoader.

### Preparación de Software

La herramienta de programación recomendada para el XIAO ESP32C6 es el Arduino IDE, por lo que necesitas completar la instalación de Arduino como parte de la preparación del software.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente consultar [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

Además, el paquete para XIAO ESP32C6 requiere al menos la versión **2.0.8** para estar disponible.

:::

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE según tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
      </a>
  </div>

  <br></br>
- **Paso 2.** Inicia la aplicación de Arduino.
- **[Paso 3](#add-board).** Añade el paquete de la placa XIAO ESP32C6 al Arduino IDE y haz clic en `OK`.
- **Paso 4.** Cierra el Arduino IDE y vuelve a abrirlo.

#### Añadir la Placa XIAO-C6 {#add-board}

Para instalar la placa XIAO ESP32C6, sigue estos pasos:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. Añade la URL del gestor de placas mencionada arriba a las preferencias de tu Arduino IDE, la cual puedes encontrar en [Instalación - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide).

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. Descarga el paquete de la placa XIAO ESP32C6.

:::note
Disponible solo si la versión de la placa esp32 es mayor que `3.0.0`.
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. Elige la variante `XIAO_ESP32C6`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

Ahora disfruta programando ✨.

## Ejecuta tu primer programa Blink

- **Paso 1.** Inicia la aplicación de Arduino.

- **Paso 2.** Navega a **Archivo > Ejemplos > 01.Básicos > Blink**, y abre el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3.** Selecciona el modelo de placa como **XIAO ESP32C6**, y selecciona el número de puerto correcto para cargar el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el programa se haya cargado correctamente, verás el siguiente mensaje de salida y podrás observar que el LED naranja en el lado derecho del XIAO ESP32C6 está parpadeando.

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## Uso de la Batería

La serie XIAO ESP32C6 cuenta con un chip de gestión de energía integrado, lo que le permite alimentarse de forma independiente mediante una batería o cargar la batería a través de su puerto USB.

Para conectar una batería a tu XIAO, recomendamos utilizar una batería recargable de litio de 3.7V calificada. Al soldar la batería, distingue cuidadosamente entre los terminales positivo y negativo. El pad del electrodo negativo debe estar ubicado en el lado izquierdo cerca de la marca de serigrafía "D8", mientras que el pad del electrodo positivo debe estar ubicado en el lado derecho cerca de la marca de serigrafía "D5".

:::caution
Cuando se utiliza energía de la batería, no habrá voltaje presente en el pin de 5V.
:::

:::tip Luz Indicadora Roja

El XIAO ESP32C6 tiene una luz indicadora roja para la carga de la batería, similar al [XIAO ESP32S3](/xiao_esp32s3_getting_started/#battery-usage):

El comportamiento de la luz roja en el XIAO ESP32C6 es el siguiente:

- Cuando no hay batería conectada:
  - La luz roja se enciende cuando se conecta el cable Type-C y se apaga después de 30 segundos.
- Cuando se conecta una batería y se conecta el cable Type-C para cargarla:
  - La luz roja parpadea.
- Cuando la batería está completamente cargada a través de la conexión Type-C:
  - La luz roja se apaga.

:::

## Lectura del Voltaje de la Batería

Para monitorear el voltaje de la batería en el XIAO ESP32C6, similar al [XIAO ESP32C3](/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), necesitarás soldar una resistencia de 200k en una configuración 1:2. Esta configuración reduce el voltaje a la mitad, permitiendo una medición segura a través del puerto analógico A0.

### Código de Ejemplo

El código a continuación inicializa el ADC en el puerto A0 y promedia 16 lecturas para calcular el voltaje de la batería, ajustándose a la relación de atenuación 1:2 del divisor de voltaje.

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // Configura A0 como entrada ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // Lee y acumula el voltaje del ADC
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Ajusta por el divisor 1:2 y convierte a voltios
  Serial.println(Vbattf, 3);                  // Muestra el voltaje con 3 decimales
  delay(1000);                                // Espera 1 segundo
}
```

Este código toma 16 mediciones del ADC, las promedia y luego compensa por la relación 1:2 del divisor de voltaje para mostrar el voltaje de la batería en voltios con tres decimales de precisión.

## Modo de sueño profundo y despertar

El XIAO ESP32C6 tiene un modo de sueño profundo completo y una función de despertar. A continuación, se muestran dos de los ejemplos más comunes que ofrece el ESP.

### Demo1: Sueño profundo con despertar externo

Este código muestra cómo usar el sueño profundo con un disparador externo como fuente de despertar y cómo almacenar datos en la memoria RTC para usarlos a través de reinicios.

```cpp
/*
Conexiones de hardware
=======================
Botón pulsador en GPIO 0 con una resistencia de 10K Ohm
conectada a tierra

NOTA:
======
Máscara de bits de los números GPIO que causarán el despertar. Solo los GPIOs
que tienen funcionalidad RTC pueden ser usados en esta máscara de bits.
Para diferentes SoCs, los GPIOs relacionados son:
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // Máscara de bits GPIO 0 para ext1

RTC_DATA_ATTR int bootCount = 0;

/*
Método para imprimir la razón por la cual el ESP32
ha despertado del sueño
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Despertó por señal externa usando RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Despertó por señal externa usando RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Despertó por temporizador"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Despertó por el touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Despertó por programa ULP"); break;
    default : Serial.printf("El despertar no fue causado por sueño profundo: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); // Toma algo de tiempo para abrir el monitor serial

  // Incrementa el número de reinicios y lo imprime en cada reinicio
  ++bootCount;
  Serial.println("Número de arranque: " + String(bootCount));

  // Imprime la razón del despertar del ESP32
  print_wakeup_reason();

  /*
  Primero configuramos la fuente de despertar
  Configuramos nuestro ESP32 para despertar con un disparador externo.
  Hay dos tipos para ESP32, ext0 y ext1, ext0 
  no es soportado en ESP32C6, por lo que usamos ext1.
  */

  // Si fueras a usar ext1, lo usarías de la siguiente manera
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  // Ahora entramos en sueño
  Serial.println("Ahora entrando en sueño profundo");
  esp_deep_sleep_start();
  Serial.println("Esto nunca será impreso");
}

void loop(){
  // Esto no será llamado
}
```

### Demo2: Sueño profundo con despertar por temporizador

El ESP32 ofrece un modo de sueño profundo para un ahorro de energía efectivo, ya que la energía es un factor importante para las aplicaciones de IoT. En este modo, los CPUs, la mayor parte de la RAM y todos los periféricos digitales que están sincronizados con el APB_CLK se apagan. Las únicas partes del chip que pueden permanecer encendidas son: el controlador RTC, los periféricos RTC y las memorias RTC.

Este código muestra el modo más básico de sueño profundo con un temporizador para despertarlo y cómo almacenar datos en la memoria RTC para usarlos después de los reinicios.

```cpp
/*
Sueño profundo simple con despertar por temporizador
===================================================
Este código está bajo la Licencia de Dominio Público.

Autor:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* Factor de conversión de microsegundos a segundos */
#define TIME_TO_SLEEP  5        /* Tiempo en que el ESP32 se pondrá a dormir (en segundos) */

RTC_DATA_ATTR int bootCount = 0;

/*
Método para imprimir la razón por la cual el ESP32
ha sido despertado del sueño
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Despertó por una señal externa usando RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Despertó por una señal externa usando RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Despertó por el temporizador"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Despertó por el touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Despertó por el programa ULP"); break;
    default : Serial.printf("El despertar no fue causado por el sueño profundo: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); // Tomar un poco de tiempo para abrir el Monitor Serial

  // Incrementar el número de arranques e imprimirlo en cada reinicio
  ++bootCount;
  Serial.println("Número de arranque: " + String(bootCount));

  // Imprimir la razón del despertar para el ESP32
  print_wakeup_reason();

  /*
  Primero configuramos la fuente de despertar
  Establecemos el ESP32 para despertar cada 5 segundos
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Configurado el ESP32 para dormir durante " + String(TIME_TO_SLEEP) +
  " segundos");

  /*
  Luego decidimos qué periféricos apagar/encender
  Por defecto, el ESP32 apagará automáticamente los periféricos
  no necesarios para la fuente de despertar, pero si deseas ser un usuario avanzado,
  esto es para ti. Lee en detalle en la documentación de la API
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  Dejamos la línea comentada como ejemplo de cómo configurar los periféricos.
  La línea a continuación apaga todos los periféricos RTC en el sueño profundo.
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("Configurados todos los periféricos RTC para apagarse en el sueño");

  /*
  Ahora que hemos configurado la causa del despertar y, si es necesario, configurado el
  estado de los periféricos en el sueño profundo, podemos comenzar a entrar en
  sueño profundo.
  En caso de que no se proporcionen fuentes de despertar pero se inicie el sueño profundo,
  se dormirá para siempre a menos que ocurra un reinicio de hardware.
  */
  Serial.println("Ahora entrando en modo de sueño");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("Esto nunca se imprimirá");
}

void loop(){
  //Esto no se llamará
}
```

:::tip
Si deseas aprender a usar más del modo de sueño profundo y las funciones de despertar, puedes encontrar más programas de ejemplo escritos oficialmente para el chip por ESP en el IDE de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## Recursos

- **[PDF]** [Hoja de datos ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf)

- **[ZIP]** [Bibliotecas KiCAD Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH&PCB_24028.zip)

- **[PDF]** [Esquema Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

- **[XLSX]** [Hoja de pines Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)

- **[ZIP]** [Archivos de Certificación Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/SeeedStudio_XIAO_ESP32C6_Certification.zip)

- 🔗 **[Kicad]** [Huella Seeed Studio XIAO ESP32C6](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Gran poder, placa pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el mejor soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
