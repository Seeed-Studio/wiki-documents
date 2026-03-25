---
description: Primeros pasos con Seeed Studio XIAO ESP32C3
title: Primeros pasos con Seeed Studio XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_Getting_Started
sku: 113991054,102010633,101991467
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con Seeed Studio XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## Introducción

**Seeed Studio XIAO ESP32C3** es una placa de desarrollo mini para IoT basada en el chip de doble modo WiFi/Bluetooth **ESP32-C3** de Espressif, que incorpora una **CPU RISC-V de 32 bits** que ofrece un potente rendimiento de cómputo gracias a su arquitectura eficiente. Tiene un excelente rendimiento de radiofrecuencia, compatible con los protocolos **IEEE 802.11 b/g/n WiFi** y **Bluetooth 5 (BLE)**. Esta placa incluye una antena externa para aumentar la intensidad de la señal en tus aplicaciones inalámbricas. También cuenta con un **factor de forma pequeño y exquisito** combinado con un **diseño de montaje en superficie de un solo lado**. Está equipada con interfaces ricas y dispone de **11 E/S digitales** que pueden utilizarse como **pines PWM** y **4 E/S analógicas** que pueden utilizarse como **pines ADC**. Es compatible con cuatro interfaces serie como **UART, I2C y SPI**. También hay un pequeño **botón de reinicio** y un **botón de modo bootloader** en la placa. XIAO ESP32C3 es totalmente compatible con la [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) y la [Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-Expansion-Board) excepto por la Seeeduino XIAO Expansion board, cuyos contactos de resorte SWD en la placa no serán compatibles.

Con respecto a las características destacadas anteriormente, XIAO ESP32C3 se posiciona como una **placa de desarrollo mini para IoT de alto rendimiento, bajo consumo y rentable**, adecuada para **aplicaciones IoT de bajo consumo y aplicaciones portátiles inalámbricas**.

Este wiki te mostrará cómo puedes empezar rápidamente con XIAO ESP32C3.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

### Especificaciones
<table>
  <tr>
    <th>Parámetro</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>Procesador</td>
    <td>ESP32-C3 SoC<br/>Procesador de chip de un solo núcleo RISC-V de 32 bits con una canalización de cuatro etapas que funciona hasta 160 MHz</td>
  </tr>
  <tr>
    <td>Inalámbrico</td>
    <td>Subsistema Wi-Fi completo de 2.4GHz<br/>Bluetooth Low Energy 5.0/ Bluetooth Mesh</td>
  </tr>
  <tr>
    <td>Memoria en chip</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
  </tr>
  <tr>
    <td>Interfaz</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC<br/>1x Botón de reinicio<br/>1x Botón de arranque</td>
  </tr>
  <tr>
    <td>Dimensiones</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <td>Potencia (típ.)</td>
    <td>Corriente máxima de salida 3.3V: 500mA<br/>Condición de prueba: Entrada del pin BAT @ 3.8V<br/>Capacidad de fuente: 3A<br/>Corriente de carga: 380mA (rápida) / 40mA (trickle)<br/>Voltaje de entrada (VIN): 5V<br/>Voltaje de entrada (BAT): 3.7V</td>
  </tr>
  <tr>
    <td>Consumo de energía en Deep Sleep</td>
    <td>Modo Deep Sleep: 44 μA</td>
  </tr>
  <tr>
    <td>Consumo de energía con Wi-Fi habilitado</td>
    <td>Modo activo: 75 mA<br/>Modo Modem-sleep: 25 mA<br/>Modo Light-sleep: 4 mA</td>
  </tr>
  <tr>
    <td>Consumo de energía con BLE habilitado</td>
    <td>Modo Modem-sleep: 27 mA<br/>Modo Light-sleep: 10 mA</td>
  </tr>
  <tr>
    <td>Temperatura de trabajo</td>
    <td>-40°C ~ 85°C</td>
  </tr>
</table>
### Características

- **CPU potente:** ESP32-C3, procesador RISC-V de 32 bits de un solo núcleo que funciona hasta 160 MHz
- **Subsistema WiFi completo:** Cumple con el protocolo IEEE 802.11b/g/n y admite los modos Station, SoftAP, SoftAP + Station y modo promiscuo
- **Subsistema Bluetooth LE:** Admite funciones de Bluetooth 5 y Bluetooth mesh
- **Ultrabajo consumo de energía:** El consumo de energía en deep sleep es de aproximadamente 43μA
- **Mejor rendimiento RF:** Incluye antena RF externa
- **Chip de carga de batería:** Admite la gestión de carga y descarga de baterías de litio
- **Recursos ricos en chip:** 400KB de SRAM y 4MB de memoria flash integrada
- **Tamaño ultrapequeño:** Tan pequeño como un pulgar (21x17.8mm), factor de forma clásico de la serie XIAO para dispositivos portátiles y proyectos pequeños
- **Funciones de seguridad fiables:** Aceleradores de hardware criptográfico que admiten AES-128/256, Hash, RSA, HMAC, firma digital y arranque seguro
- **Interfaces ricas:** 1xI2C, 1xSPI, 2xUART, 11xGPIO(PWM), 4xADC, 1x interfaz de almohadilla de conexión JTAG
- Componentes en un solo lado, diseño de montaje en superficie

## Descripción general del hardware

> *A3(GP105) - Usa ADC2, que puede quedar inoperativo debido a señales de muestreo falsas. Para lecturas analógicas fiables, utiliza ADC1(A0/A1/A2) en su lugar. Consulta la hoja de datos del ESP32-C3.

<table align="center">
 <tr>
     <th>Diagrama de indicación frontal de XIAO ESP32C3</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Diagrama de indicación trasera de XIAO ESP32C3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de pines de XIAO ESP32C3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div></td>
        <!--
        Image Description: This image is the official pinout diagram of the Seeed Studio XIAO ESP32-C3 development board.
        The diagram shows:
        - The top view of the XIAO ESP32-C3 board.
        - GPIO pin mappings, digital/analog labels, power pins, and function-specific roles (I2C, UART, SPI).
        - Color-coded labels for each pin type.
        Pin layout from left to right (as seen in the image):
        === LEFT SIDE PINS (top to bottom) ===
        - GPIO2    | A0  | D0   → Analog-capable (ADC1)
        - GPIO3    | A1  | D1   → Analog-capable (ADC1)
        - GPIO4    | A2  | D2   → Analog-capable (ADC1)
        - GPIO5    | A3 (crossed out) | D3 → Analog-capable via ADC2 (not recommended)
        - GPIO6    | SDA | D4   → I2C data line
        - GPIO7    | SCL | D5   → I2C clock line
        - GPIO21   | TX  | D6   → UART TX (Transmit)
        === RIGHT SIDE PINS (top to bottom) ===
        - 5V       → Power input/output
        - GND      → Ground
        - 3V3      → 3.3V power output
        - D10      | MOSI | GPIO10 → SPI MOSI (not analog-capable)
        - D9       | MISO | GPIO9  → SPI MISO (not analog-capable)
        - D8       | SCK  | GPIO8  → SPI clock (not analog-capable)
        - D7       | RX   | GPIO20 → UART RX (Receive)
        === Pin Function Color Legend (as shown in image) ===
        - Blue: Digital pin labels (D0–D10)
        - Pink: Analog pin labels (A0–A2); A3 is crossed out due to ADC2 instability
        - Green: GPIO number
        - Teal: I2C function (SDA, SCL)
        - Gray: UART function (TX, RX)
        - Purple: SPI function (MOSI, MISO, SCK)
        - Black: GND
        - Red: Power pins (5V, 3V3)
        === Footnote in Image ===
        "A3(GPIO5) - Uses ADC2, which may become inoperative due to false sampling signals. 
        For reliable analog reads, use ADC1 instead. Refer to the ESP32-C3 datasheet."
        === Notes ===
        - Only A0, A1, and A2 are officially supported analog pins using ADC1.
        - A3 (GPIO5) is crossed out and discouraged due to ADC2 reliability issues.
        - GPIO0, GPIO1 are not shown as analog pins in this image, though technically ADC1-capable.
        - GPIOs 8–10, 20–21 are not usable for analog input.
        - This layout helps developers identify safe and recommended pin functions when designing circuits or writing firmware.
        End of XIAO ESP32-C3 pinout description.
        -->
 </tr>
</table>

 ## **Mapa de pines**
| Pin XIAO        | Función  | Pin del chip  | Funciones alternativas                  | Descripción          |
| :-------------: | :-------: | :-------: | :---------------------------------: | :-----------------: |
| 5V              | VBUS      |           |                                     | Entrada/Salida de alimentación   |
| GND             |           |           |                                     |                      |
| 3V3             | 3V3_OUT   |           |                                     | Salida de alimentación         |
| D0              | Analógico    | GPIO2     | ADC1_CH2,                           | GPIO, ADC            |
| D1              | Analógico    | GPIO3     | ADC1_CH3                            | GPIO, ADC            |
| D2              | Analógico    | GPIO4     | ADC1_CH4, FSPIHD, MTMS              | GPIO, ADC            |
| D3              | Analógico    | GPIO5     | ADC2_CH0, FSPIWP, MTDI              | GPIO, ADC            |
| D4              | SDA       | GPIO6     | FSPICLK, MTCK                       | GPIO, Datos I2C       |
| D5              | SCL       | GPIO7     | FSPID, MTDO                         | GPIO, Reloj I2C      |
| D6              | TX        | GPIO21    | U0TXD                               | GPIO, Transmisión UART  |
| D7              | RX        | GPIO20    | U0RXD                               | GPIO, Recepción UART   |
| D8              | SCK       | GPIO8     |                                     | GPIO, Reloj SPI      |
| D9              | MISO      | GPIO9     |                                     | GPIO, Datos SPI       |
| D10             | MOSI      | GPIO10    | FSPICS0                             | GPIO, Datos SPI       |
| MTDO            |           | GPIO7     |                             |            JTAG              |
| MTDI            |           | GPIO5     |                        |        JTAG, ADC                  |
| MTCK            |           | GPIO6     |                           |        JTAG, ADC               |
| MTMS            |           | GPIO4     |                            |               JTAG, ADC       |
| Reset           |           | CHIP_EN   |                                     | EN                   |
| Boot            |           | GPIO9     |                                     | Entrar en modo Boot      |
| U.FL-R-SMT1     |           | LNA_IN    |                                     | Antena UFL          |
| Light           |           | VCC_3V3   |                                     | CHG-LED              |
### Pines de alimentación

- 5V - Esta es la salida de 5V desde el puerto USB. También puedes usarla como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, de señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo a la batería y el cátodo al pin de 5V.
- 3V3 - Esta es la salida regulada del regulador integrado. Puedes extraer 700mA
- GND - Tierra de alimentación/datos/señal

### Pines de configuración (Strapping Pins)

Según el manual del chip del ESP32C3, **GPIO2**, **GPIO8** y **GPIO9** en el chip son Strapping Pins; las configuraciones de nivel alto y bajo de estos pines pueden permitir que el chip entre en diferentes modos de arranque (Boot). Por favor, presta atención a este punto cuando uses estos pines, de lo contrario puede impedir que tu XIAO cargue o ejecute el programa todo el tiempo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## Primeros pasos

Primero, vamos a conectar XIAO ESP32C3 al ordenador, conectar un LED a la placa y subir un código sencillo desde Arduino IDE para comprobar si la placa funciona correctamente haciendo parpadear el LED conectado.

### Preparación de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x Ordenador
- 1 x Cable USB Type-C

:::tip

Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

- **Paso 1.** Conecta XIAO ESP32C3 a tu ordenador mediante un cable USB Type-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Paso 2.** Conecta un LED al pin D10 como se indica a continuación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**Nota:** Asegúrate de conectar una resistencia (alrededor de 150Ω) en serie para limitar la corriente a través del LED y evitar un exceso de corriente que pueda quemar el LED.

### Preparación de software

- **Paso 1.** Descarga e instala la última versión de Arduino IDE de acuerdo con tu sistema operativo

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **Paso 2.** Inicia la aplicación Arduino

- **Paso 3.** Añade el paquete de placas ESP32 a tu Arduino IDE

Ve a **File > Preferences**, y rellena **"Additional Boards Manager URLs"** con la siguiente URL:
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

Ve a **Tools > Board > Boards Manager...**, escribe la palabra clave "**esp32**" en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **Paso 4.** Selecciona tu placa y puerto

**Placa**

Ve a **Tools > Board > ESP32 Arduino** y selecciona "**XIAO_ESP32C3**". La lista de placas es un poco larga y necesitas desplazarte hasta el final para encontrarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**Puerto**

Ve a **Tools > Port** y selecciona el nombre del puerto serie del XIAO ESP32C3 conectado. Probablemente será COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos serie de hardware).

### Ejecuta tu primer programa Blink

- **Paso 1.** Copia el siguiente código en Arduino IDE

Asegúrate de que tu `D10` esté conectado a un LED como se muestra en el diagrama anterior.

```cpp

// define led according to pin diagram in article
const int led = D10; // there is no LED_BUILTIN available for the XIAO ESP32C3.

void setup() {
  // initialize digital pin led as an output
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // turn the LED on 
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off
  delay(1000);               // wait for a second
}
```

- **Paso 2.** Haz clic en el botón **Upload** para subir el código a la placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

Una vez subido, verás el LED conectado parpadear con un retardo de 1 segundo entre cada parpadeo. Esto significa que la conexión es correcta y ahora puedes explorar más proyectos con XIAO ESP32C3.

## Uso de la batería

El XIAO ESP32C3 es capaz de usar una batería de litio de 3,7V como entrada de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
Por favor, ten cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar.
:::

**Instrucciones sobre el uso de baterías:**

1. Utiliza baterías calificadas que cumplan con las especificaciones.
2. XIAO se puede conectar a tu dispositivo informático mediante un cable de datos mientras usas la batería; ten la seguridad de que XIAO tiene un chip de protección de circuito integrado, lo cual es seguro.
3. El XIAO ESP32C3 no tendrá ningún LED encendido cuando funcione con batería (a menos que hayas escrito un programa específico), por favor no juzgues si el XIAO ESP32C3 está funcionando o no por el estado del LED, júzgalo razonablemente según tu programa.
4. Lo sentimos, actualmente no tenemos forma de ayudarte a comprobar el nivel restante de la batería mediante software (porque no hay más pines de chip disponibles), necesitas cargar la batería regularmente o usar un multímetro para comprobar el nivel de la batería.

### Comprobar el voltaje de la batería

Debido a la limitación del número de pines en el ESP32C3, los ingenieros no tenían pines adicionales para asignar a la batería para la medición de voltaje, con el fin de garantizar que el XIAO ESP32C3 tenga el mismo número de GPIO que los otros XIAO Serie disponibles.

Pero si prefieres usar un pin separado para la medición del voltaje de la batería, puedes consultar la ingeniosa operación de [msfujino](https://forum.seeedstudio.com/u/msfujino). También nos gustaría dar un agradecimiento especial a [msfujino](https://forum.seeedstudio.com/u/msfujino) por toda la experiencia y esfuerzos compartidos para el XIAO ESP32C3.

La idea básica de funcionamiento es: El voltaje de la batería se dividió por 1/2 con 200k y se conectó al puerto A0 para que se pudiera monitorizar el voltaje.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

La hoja de datos indica nominalmente 2500mV de conversión AD a escala completa, pero hay una gran variación de un chip a otro, en realidad ±10%. Mi chip tenía 2700mV a escala completa.

Afortunadamente, el valor de corrección calibrado para cada chip está escrito en el área de fusibles, y usando la función `analogReadMilliVolts()`, puedo leer el valor de voltaje corregido sin hacer nada especial.

El resultado de la conversión AD y el voltaje medido por el multímetro concuerdan bien entre sí con un error de unos 5 mV, lo cual no es un problema en el uso práctico.

Además, especialmente durante la comunicación, se produjeron errores en forma de picos, que tuvieron que promediarse 16 veces para eliminarlos.

El siguiente es el procedimiento para probar el voltaje de la batería.

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // ADC with correction   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // attenuation ratio 1/2, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
Lo anterior proviene del usuario del foro de Seeed Studio **msfujino**, publicado originalmente en:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
Recomendamos que tengas buenas habilidades prácticas y mejores habilidades de soldadura antes de intentar medir el voltaje de la batería basándote en lo anterior, y que seas cauteloso con acciones peligrosas como cortocircuitar baterías.
:::

## Modo de sueño profundo y activación

El XIAO ESP32C3 está diseñado para soportar el modo de sueño profundo y las funciones de activación. Para el uso de estas dos funciones, proporcionamos los siguientes ejemplos de uso.

```cpp
#define BUTTON_PIN_BITMASK 0x200000000 // 2^33 in hex

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

  esp_deep_sleep_enable_gpio_wakeup(BIT(D1), ESP_GPIO_WAKEUP_GPIO_LOW);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

Si eres lo suficientemente rápido para encender el monitor serie antes de que el XIAO entre en modo de sueño profundo, entonces podrás ver el mensaje de salida como se muestra a continuación. Esto significa que el XIAO ahora está "dormido".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
Después de entrar en el modo de sueño profundo, el puerto del XIAO desaparecerá y tendrás que despertarlo para ver de nuevo su número de puerto.
:::

En el programa, estamos usando un nivel bajo en **D1** para despertar. Esto significa que podemos conectar un botón al pin D1 y el XIAO se despertará cuando presionemos el botón.

:::caution
El XIAO ESP32-C3 admite el despertar por GPIO y por temporizador, y los pines que admiten el despertar son D0~D3.
:::

## Solución de problemas

### P1: Mi Arduino IDE se queda atascado al subir código a la placa

Primero puedes intentar reiniciar la placa haciendo clic una vez en el **RESET BUTTON** mientras la placa está conectada a tu PC. Si eso no funciona, mantén presionado el **BOOT BUTTON**, conecta la placa a tu PC mientras mantienes presionado el botón **BOOT**, y luego suéltalo para entrar en el **bootloader mode**.

### P2: Mi placa no aparece como un dispositivo serie en Arduino IDE

Sigue la misma respuesta que para la **P1** anterior.

### P3: Quiero volver a grabar el bootloader con el firmware de fábrica

Simplemente puedes conectar la placa a un PC mediante **USB Type-C** y volver a grabar el bootloader con el firmware de fábrica usando **ESP RF Test Tool**.

- **Paso 1.** Mantén presionado el **BOOT BUTTON** y conecta el XIAO ESP32C3 al PC para entrar en **bootloader mode**

- **Paso 2.** Después de que esté conectado, suelta el BOOT BUTTON

- **Paso 3.** Visita [esta página](https://www.espressif.com/en/support/download/other-tools) y descarga **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 4.** Extrae el **.zip**, navega a `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` y abre **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Paso 5.** Selecciona **ESP32C3** como ChipType, tu puerto COM, **115200** como BaudRate y haz clic en **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

Verás la siguiente salida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **Paso 6.** Selecciona **Flash** y haz clic en **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **Paso 7.** Descarga el [firmware de fábrica del XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) y selecciónalo.

- **Paso 8.** Finalmente haz clic en **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

Verás la siguiente salida cuando la grabación se haya realizado correctamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## Repositorio de GitHub de MicroPython

- [Repositorio de MicroPython para XIAO ESP32C3](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## Recursos

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

**Diseño de hardware**
- **📄[Hoja de datos]** [Espressif ESP32-C3 Datasheet](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf )
- **📄[Esquemático]** [XIAO ESP32-C3 Schematic](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_SCH_260116.pdf )
- **🗃️[Archivos de diseño de PCB]** 
  - [Proyecto KiCad de XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_KiCad_260116.zip )
- **🗃️[Librerías de diseño de PCB]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [Hoja de pines de XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx )

**Mecánico**
- **📄[Dimensiones 2D]** [Dimensiones 2D de XIAO ESP32-C3 en DXF](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip )
- **🗃️[Dimensiones 2D]** [Datos de las almohadillas inferiores de XIAO ESP32-C3](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32C3_v1.2_Dimensioning.zip )
- **📄[Modelo 3D]** [Modelo 3D de XIAO ESP32-C3](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1 )

**Software y herramientas**
- **🗃️[Firmware de fábrica]** [Firmware de fábrica de XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin )
- **🔗[Librería MicroPython]** [Librería MicroPython de XIAO ESP32-C3](https://github.com/IcingTomato/micropython_xiao_esp32c3 )
- **🔗[Platform IO]** [PlatformIO para Seeed Studio XIAO ESP32-C3](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html )

**Otros**
- **🔗[Wiki]** [First Look at the Seeed Studio XIAO ESP32-C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html )  
  - Una gran introducción al XIAO ESP32C3, que cubre las características clave y el uso básico.
- **📄[Documento]** [Informe sobre el bajo consumo de energía del XIAO ESP32-C3](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/Low_Power_Consumption.pdf )

<JetsonLeadQuote
  buttonText="Solicitar presupuesto personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
