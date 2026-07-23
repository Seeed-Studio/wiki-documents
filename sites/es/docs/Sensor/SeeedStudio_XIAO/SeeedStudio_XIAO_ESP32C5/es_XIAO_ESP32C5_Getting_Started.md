---
title: Primeros pasos con Seeed Studio XIAO ESP32-C5
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_getting_started
last_update:
  date: 7/9/2026
  author: Zeller
  sidebar_position: 0
createdAt: '2025-12-15'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_getting_started/
---
## Introducción

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Especificaciones

<table>
    <thead>
        <tr>
            <th>Elemento</th>
            <th>Seeed Studio XIAO ESP32-C5</th>
            <th>Seeed Studio XIAO ESP32-S3</th>
            <th>Seeed Studio XIAO ESP32-C3</th>
            <th>Seeed Studio XIAO ESP32-C6</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Procesador</th>
            <td>ESP32-C5 RISC-V de 32 bits @240 MHz</td>
            <td>ESP32R8N8 Xtensa LX7 de 32 bits de doble núcleo @240 MHz</td>
            <td>ESP32-C3 RISC-V de 32 bits @160 MHz</td>
            <td>ESP32-C6 RISC-V de 32 bits @160 MHz</td>
        </tr>
        <tr>
            <th>Conectividad inalámbrica</th>
            <td>**Wi-Fi 6 de doble banda de 2.4 GHz y 5 GHz** y Bluetooth 5 (LE)</td>
            <td>Wi-Fi de 2.4 GHz y Bluetooth 5 (LE)</td>
            <td>Wi-Fi de 2.4 GHz y Bluetooth 5 (LE)</td>
            <td> Wi-Fi 6 de 2.4 GHz, Bluetooth 5 (LE)</td>
        </tr>
        <tr>
            <th>Memoria</th>
            <td>8 MB PSRAM y 8 MB Flash</td>
            <td>8 MB PSRAM y 8 MB Flash</td>
            <td>400 KB SRAM, 4 MB Flash</td>
            <td>512KB SRAM , 4MB Flash</td>
        </tr>
        <tr>
            <th>Interfaces</th>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
        </tr>
        <tr>
            <th>Pines PWM/Analógicos</th>
            <td>11 / 5</td>
            <td>11 / 9</td>
            <td>11 / 4</td>
            <td>11 / 7</td>
        </tr>
        <tr>
            <th>Botones integrados</th>
            <td>Botón de reinicio / Boot</td>
            <td>Botón de reinicio / Boot</td>
            <td>Botón de reinicio / Boot</td>
            <td>Botón de reinicio / Botón de Boot</td>
        </tr>
        <tr>
            <th>LEDs integrados</th>
            <td>LED de carga / LED de USUARIO</td>
            <td>LED de carga / LED de USUARIO</td>
            <td>LED de carga</td>
            <td>LED de carga / LED de USUARIO</td>
        </tr>
        <tr>
            <th>Chip de carga de batería</th>
            <td>SGM40567</td>
            <td>SGM40567</td>
            <td>ETA4054S2F</td>
            <td>SGM40567</td>
        </tr>
    </tbody>
</table>

### Características

- **CPU potente:** ESP32-C5, procesador RISC-V de 32 bits de un solo núcleo que funciona hasta 240 MHz
- **Subsistema Wi-Fi completo:** Subsistema Wi-Fi 6 de doble banda (2.4 GHz y 5 GHz) compatible con IEEE 802.11 a/b/g/n/ac/ax, que admite Station, SoftAP, operación concurrente SoftAP+Station y modo promiscuo (monitor).
- **Subsistema Bluetooth LE:** Admite funciones de Bluetooth 5 y Bluetooth mesh
- **Mejor rendimiento RF:** Antena RF externa incluida.
- **Chip de carga de batería:** Admite la gestión de carga y descarga de baterías de litio.
- **Ricos recursos en chip:** 384 KB de SRAM en chip, 320 KB de ROM
- **Tamaño ultra pequeño:** Tan pequeño como un pulgar (21x17.8mm), factor de forma clásico de la serie XIAO para dispositivos portátiles y proyectos pequeños
- **Funciones de seguridad fiables**: Aceleradores de hardware criptográfico que admiten AES-128/256, hash de la familia SHA, HMAC, un periférico dedicado de firma digital y Secure Boot (V2).
- **Interfaces ricas**: 1×I2C, 1×SPI, 2×UART, hasta 11×GPIO (compatibles con PWM), 5×canales ADC y una interfaz de almohadilla de conexión JTAG (almohadillas en el lado inverso).
- Componentes en un solo lado, diseño para montaje en superficie

## Descripción general del hardware

### Parte frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Parte trasera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/XIAO_ESP32-C5_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## Mapa de pines

| Pin XIAO                | Función   | Pin del chip  | Funciones alternativas       | Descripción                  |
| :--------------------: | :-------: | :-------: | :----------------------: | :-------------------------- |
| 5V                     | VBUS       |           |                          | Entrada/Salida de alimentación           |
| GND                    |            |           |                          |                              |
| 3V3                    | 3V3_OUT    |           |                          | Salida de alimentación                 |
| D0                     | Analógico     | GPIO1     | LP_UART_DSRN, LP_GPIO1   | GPIO, ADC                    |
| D1                     |            | GPIO0     | LP_UART_DTRN, LP_GPIO0   | GPIO                         |
| D2                     |            | GPIO25    |                          | GPIO                         |
| D3                     |            | GPIO7     | SDIO_DATA1               | GPIO                         |
| D4                     | SDA        | GPIO23    |                          | GPIO, datos I2C               |
| D5                     | SCL        | GPIO24    |                          | GPIO, reloj I2C              |
| D6                     | TX         | GPIO11    |                          | GPIO, transmisión UART          |
| D7                     | RX         | GPIO12    |                          | GPIO, recepción UART           |
| D8                     | SCK        | GPIO8     | TOUCH7                   | GPIO, reloj SPI              |
| D9                     | MISO       | GPIO9     | TOUCH8                   | GPIO, datos SPI               |
| D10                    | MOSI       | GPIO10    | TOUCH9                   | GPIO, datos SPI               |
| MTDO                   |            | GPIO5     | LP_UART_TXD, LP_GPIO5    | JTAG                         |
| MTDI                   |            | GPIO3     | LP_I2C_SCL, LP_GPIO3     | JTAG, ADC                    |
| MTCK                   |            | GPIO4     | LP_UART_RXD, LP_GPIO4    | JTAG, ADC                    |
| MTMS                   |            | GPIO2     | LP_I2C_SDA, LP_GPIO2     | JTAG, ADC                    |
| ADC_BAT                |            | GPIO6    |                          | Leer el valor de voltaje de la batería   |
| ADC_CRL                |            | GPIO26    |                          | Controla (habilita/deshabilita) el circuito de medición para ahorrar energía.   |
| Reset                  |            | CHIP_EN   |                          | EN                           |
| Boot                   |            | GPIO28    |                          | Entrar en modo Boot              |
| U.FL-R-SMT1            |            | LNA_IN    |                          | Antena UFL                  |
| CHARGE_LED             |            | VCC_3V3   |                          | CHG-LED_Red                  |
| USER_LED               |            | GPIO27    |                          | Luz de usuario_Amarilla            |
## Primeros pasos

Para permitirte comenzar más rápido con la XIAO ESP32-C5, lee la preparación de hardware y software a continuación para preparar la XIAO.

### Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html)
- 1 x Ordenador
- 1 x Cable USB tipo C

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes consultar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Software

La herramienta de programación recomendada para la XIAO ESP32-C5 es el Arduino IDE, por lo que debes completar la instalación de Arduino como parte de la preparación del software.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE según tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Paso 2.** Inicia la aplicación Arduino.
- **Paso 3.**  Abre BOARDS MANAGER -> Busca **esp32** -> Instala la versión 3.3.5 o una versión superior

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### Cargar programa

Tomemos como ejemplo un programa de iluminación a continuación

**Paso 1.** Selecciona **XIAO_ESP32C5** y el PUERTO. Si no conoces el PUERTO, puedes volver a insertar y retirar la XIAO_ESP3-2C5 para comprobarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Pega el código en tu Sketch

**LED_BUILTIN** corresponde al **LED L** en la placa de desarrollo.

```cpp
void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**Paso 3.** Haz clic y sube

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_1.png" style={{width:800, height:'auto'}}/></div><br/>

Demostración del efecto:

Después de subir el programa, verás que el indicador L parpadea a intervalos de 1 segundo y, al mismo tiempo, el monitor serie imprimirá LED ON y LED OFF.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## Modo de sueño profundo

El XIAO ESP32-C5 incorpora funciones de sueño profundo y de activación. En este ejemplo se utiliza un disparo de nivel alto en el pin **D0** para despertar el dispositivo del sueño profundo.<br/>
Es importante tener en cuenta que esta es una opción configurable, ya que el hardware admite tanto disparos de nivel alto como de nivel bajo para adaptarse a diferentes diseños de circuito.

```cpp
#define WAKEUP_PIN D0 // LP_GPIO1

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    case ESP_SLEEP_WAKEUP_GPIO : Serial.println("Wakeup caused by GPIO"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000);

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();

  pinMode(WAKEUP_PIN, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);

  uint64_t mask = 1ULL << WAKEUP_PIN;
  esp_deep_sleep_enable_gpio_wakeup(mask, ESP_GPIO_WAKEUP_GPIO_HIGH);

  digitalWrite(LED_BUILTIN, LOW);
  delay(100);
  digitalWrite(LED_BUILTIN, HIGH);

  delay(2000);  //Delay time depends on the serial port / Give the PC time to stabilize
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
}

void loop(){}
```

Si eres lo suficientemente rápido como para encender el monitor serie antes de que el XIAO entre en sueño profundo, entonces podrás ver el mensaje de salida como se muestra a continuación. Esto significa que el XIAO ahora está **dormido**. Luego también puedes verlo y activarlo presionando el botón. También puedes observar el estado de encendido y apagado del **LED L** para comprobar si el dispositivo se ha despertado. Una vez que se despierte, mostrará un efecto de parpadeo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Después de entrar en el modo de sueño profundo, el puerto del XIAO desaparecerá y tendrás que despertarlo para volver a ver su número de puerto.
:::

:::caution
El XIAO ESP32-C5 admite activación por GPIO y por temporizador. Para evitar la pérdida de capacidades de depuración de hardware y el aumento de la dificultad en el flasheo de firmware durante el desarrollo de bajo consumo, se recomienda encarecidamente que los pines JTAG (MTMS, MTDI, MTCK, MTDO) se reserven para uso exclusivo y no se empleen como fuentes de activación para el modo de sueño profundo.
:::

## Uso de la batería

El XIAO ESP32-C5 es capaz de utilizar una batería de litio de 3,7 V como entrada de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
Ten cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar.
:::

**Instrucciones sobre el uso de baterías:**

1. Utiliza baterías calificadas que cumplan con las especificaciones.
2. El XIAO se puede conectar a tu dispositivo informático mediante un cable de datos mientras usas la batería; ten la seguridad de que el XIAO tiene un chip de protección de circuito incorporado, lo cual es seguro.
3. Cuando el XIAO ESP32-C5 se alimenta con una batería, el **LED C** se encenderá. Puedes usar esto como base para determinar si se ha realizado la gestión de carga.

### Comprobar el voltaje de la batería

El XIAO ESP32-C5 está equipado con el chip de carga de batería SGM40567 y el chip de adquisición de voltaje de batería TPS22916CYFPR. Puedes habilitar el **BAT_VOLT_PIN_EN** para activar la función de adquisición de voltaje de la batería y leer el voltaje de la batería a través del **BAT_VOLT_PIN**.

:::tip
En el XIAO ESP32C5, el pin correspondiente a BAT_VOLT_PIN es GPIO6, y el pin correspondiente a BAT_VOLT_PIN_EN es GPIO26.
:::

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(BAT_VOLT_PIN, INPUT);         // Configure A0 as ADC input
  pinMode(BAT_VOLT_PIN_EN , OUTPUT);
  digitalWrite(BAT_VOLT_PIN_EN , HIGH);
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(BAT_VOLT_PIN ); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

- **`analogReadMilliVolts(BAT_Voltage_Read)`**

  - Esta función se utiliza para leer el voltaje analógico actual desde el pin `BAT_VOLT_PIN` y devolver un valor de voltaje calibrado en milivoltios (mV).
  - A diferencia de la función convencional `analogRead()`, que solo proporciona un valor ADC bruto, `analogReadMilliVolts()` aplica automáticamente los parámetros de calibración de fábrica integrados en el chip. Esto da como resultado una mayor precisión, una mejor linealidad en la medición de voltaje y elimina la necesidad de una conversión manual de ADC a voltaje.
  - Durante el proceso de muestreo de voltaje, se realiza un **muestreo repetido 16 veces** mediante un bucle `for`, y los resultados se acumulan. El propósito del muestreo múltiple es suprimir el ruido transitorio y los errores discretos, mejorando así la estabilidad de la medición. Finalmente, el valor acumulado se divide por el número de muestras (16) para obtener un valor de voltaje promedio más suave y fiable.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
Según la hoja de datos, el rango efectivo de medición del ESP32-C5 cubre 0~3300 mV. Por lo tanto, el circuito de adquisición de voltaje de batería incorporado del XIAO ESP32-C5 está diseñado con dos resistencias de 100K para la división de voltaje, lo que permite una lectura precisa de los valores.
:::

## Recursos

**Diseño de hardware**
- **📄[Hoja de datos]** [Espressif ESP32-C5 Datasheet](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf )
- **📄[Esquemático]** [XIAO ESP32-C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.pdf )
- **🗃️[Archivos de diseño de PCB]** [XIAO ESP32-C5 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.zip )
- **🗃️[Librerías de diseño de PCB]** 
  - [XIAO Serie Huellas KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [XIAO Serie Símbolos SCH KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pines]** [XIAO ESP32-C5 Hoja de pines](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/XIAO_ESP32C5_Pinout.xlsx )

**Diseño mecánico**
- **📄[Modelo 3D]** [XIAO ESP32-C5 Modelo 3D](https://grabcad.com/library/seeed-studio-xiao-esp32-c5-1 )

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
