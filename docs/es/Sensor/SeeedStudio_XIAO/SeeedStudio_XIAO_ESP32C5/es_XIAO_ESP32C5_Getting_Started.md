---
title: Introducción al Seeed Studio XIAO ESP32-C5
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /es/xiao_esp32c5_getting_started
last_update:
  date: 11/26/2025
  author: Zeller
  sidebar_position: 0
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
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
            <td>ESP32-C5 RISC-V 32-bit @240 MHz</td>
            <td>ESP32R8N8 32-bit Xtensa LX7 dual-core @240 MHz</td>
            <td>ESP32-C3 32-bit RISC-V @160 MHz</td>
            <td>ESP32-C6 32-bit RISC-V @160 MHz</td>
        </tr>
        <tr>
            <th>Conectividad Inalámbrica</th>
            <td>**Wi-Fi 6 de banda dual 2.4 GHz y 5 GHz** y Bluetooth 5 (LE)</td>
            <td>Wi-Fi 2.4 GHz y Bluetooth 5 (LE)</td>
            <td>Wi-Fi 2.4 GHz y Bluetooth 5 (LE)</td>
            <td> Wi-Fi 6 2.4 GHz, Bluetooth 5 (LE)</td>
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
            <th>Botones Integrados</th>
            <td>Botón Reset / Boot</td>
            <td>Botón Reset / Boot</td>
            <td>Botón Reset / Boot</td>
            <td>Botón reset / Botón boot</td>
        </tr>
        <tr>
            <th>LEDs Integrados</th>
            <td>LED de Carga / USER</td>
            <td>LED de Carga / USER</td>
            <td>LED de Carga</td>
            <td>LED de Carga / USER</td>
        </tr>
        <tr>
            <th>Chip de Carga de Batería</th>
            <td>SGM40567</td>
            <td>SGM40567</td>
            <td>ETA4054S2F</td>
            <td>SGM40567</td>
        </tr>
    </tbody>
</table>

### Características

- **CPU Potente:** ESP32-C5, procesador RISC-V de 32 bits de núcleo único que opera hasta 240 MHz
- **Subsistema Wi-Fi completo:** Subsistema Wi-Fi 6 de banda dual (2.4 GHz y 5 GHz) compatible con IEEE 802.11 a/b/g/n/ac/ax, soportando Station, SoftAP, operación concurrente SoftAP+Station, y modo promiscuo (monitor).
- **Subsistema Bluetooth LE:** Soporta características de Bluetooth 5 y Bluetooth mesh
- **Mejor rendimiento RF:** Antena RF externa incluida.
- **Chip de carga de batería:** Soporta gestión de carga y descarga de batería de litio.
- **Recursos abundantes en chip:** 384 KB de SRAM en chip, 320 KB de ROM
- **Tamaño ultra pequeño:** Tan pequeño como un pulgar (21x17.8mm) factor de forma clásico de la serie XIAO para dispositivos portátiles y proyectos pequeños
- **Características de seguridad confiables**: Aceleradores de hardware criptográfico que soportan AES-128/256, hashing de familia SHA, HMAC, un periférico de firma digital dedicado, y Secure Boot (V2).
- **Interfaces abundantes**: 1×I2C, 1×SPI, 2×UART, hasta 11×GPIO (capaces de PWM), 5×canales ADC, y una interfaz de pad de enlace JTAG.
- Componentes de un solo lado, diseño de montaje superficial

## Descripción general del hardware

<table align="center">
 <tr>
     <th>Diagrama de indicación XIAO ESP32-C5</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/front.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pines XIAO ESP32-C5</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/PinList_1.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

## Introducción

Para permitirte comenzar con el XIAO ESP32-C5 más rápido, por favor lee la preparación de hardware y software a continuación para preparar el XIAO.

### Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-5884.html)
- 1 x Computadora
- 1 x Cable USB Type-C

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Software

La herramienta de programación recomendada para el XIAO ESP32-C5 es el Arduino IDE, por lo que necesitas completar la instalación de Arduino como parte de la preparación del software.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable del Arduino IDE según tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Paso 2.** Inicia la aplicación Arduino.
- **Paso 3.**  Abre BOARDS MANAGER -> Busca **esp32** -> Instala la versión 3.3.4 o una versión superior

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### Subir Programa

Tomemos un programa de iluminación como ejemplo a continuación

**Paso 1.** Selecciona **XIAO_ESP32C5** y PORT. Si no conoces el PORT, puedes reinsertar y quitar el XIAO_ESP3-2C5 para verificar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Pega el Código en tu Sketch

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

**Paso 3.** Haz clic y Sube

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_1.png" style={{width:800, height:'auto'}}/></div><br/>

Demostración del efecto:

Después de subir el programa, verás la luz indicadora L parpadeando a intervalos de 1 segundo, y al mismo tiempo, el monitor serie imprimirá LED ON y LED OFF.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## Modo de sueño profundo

El XIAO ESP32-C5 cuenta con funciones de sueño profundo y despertar. Este ejemplo utiliza un disparador de nivel alto en el pin **D0** para despertar el dispositivo del sueño profundo.<br/>
Es importante notar que esta es una opción configurable, ya que el hardware soporta tanto disparadores de nivel alto como de nivel bajo para acomodar diferentes diseños de circuito.

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

Si eres lo suficientemente rápido para activar el monitor serie antes de que el XIAO entre en modo de sueño profundo, entonces puedes ver la salida del mensaje como se muestra a continuación. Esto significa que el XIAO ahora está **dormido**. Luego también puedes verlo y activarlo presionando el botón. También puedes observar el estado de encendido-apagado del **LED L** para verificar si el dispositivo ha sido despertado. Una vez que se despierte, exhibirá un efecto de parpadeo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
¡Después de entrar en modo de sueño profundo, el puerto del XIAO desaparecerá y necesitarás despertarlo para ver su número de puerto nuevamente!
:::

:::caution
Actualmente el XIAO ESP32-C5 solo soporta despertar por GPIO, y los únicos pines que soportan despertar son D0~D1. Este programa puede no funcionar en otros pines.
:::

## Uso de Batería

El XIAO ESP32-C5 es capaz de usar una batería de litio de 3.7V como entrada de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
Por favor ten cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar.
:::

**Instrucciones sobre el uso de baterías:**

1. Por favor usa baterías calificadas que cumplan con las especificaciones.
2. XIAO puede conectarse a tu dispositivo de computadora a través de cable de datos mientras usa la batería, ten la seguridad de que XIAO tiene un chip de protección de circuito incorporado, que es seguro.
3. Cuando XIAO ESP32-C5 es alimentado por una batería, el **LED C** se encenderá. Puedes usar esto como base para determinar si se ha llevado a cabo la gestión de carga.

### Verificar el voltaje de la batería

El XIAO ESP32-C5 está equipado con el chip de carga de batería SGM40567 y el chip de adquisición de voltaje de batería TPS22916CYFPR. Puedes habilitar el **BAT_VOLT_PIN_EN** para activar la función de adquisición de voltaje de batería y leer el voltaje de la batería a través del **BAT_VOLT_PIN**.

:::tip
En el XIAO ESP32C5, el pin correspondiente a BAT_VOLT_PIN es GPIO6, y el pin correspondiente a BAT_VOLT_PIN_EN es GPIO26.
:::

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(BAT_VOLT_PIN, INPUT);         // Configure A0 as ADC input
  pinMode(BAT_VOLT_PIN_EN , OUTPUT);
  digitalWrite(BAT_VOLT_PIN_EN , LOW);
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

  - Esta función se usa para leer el voltaje analógico actual del pin `BAT_VOLT_PIN` y devolver un valor de voltaje calibrado en milivoltios (mV).
  - A diferencia del `analogRead()` convencional, que solo proporciona un valor ADC crudo, `analogReadMilliVolts()` aplica automáticamente los parámetros de calibración de fábrica incorporados en el chip. Esto resulta en mayor precisión, linealidad mejorada en la medición de voltaje, y elimina la necesidad de conversión manual de ADC a voltaje.
  - Durante el proceso de muestreo de voltaje, se realiza un **muestreo repetido 16 veces** a través de un bucle `for`, y los resultados se acumulan. El propósito del muestreo múltiple es suprimir el ruido transitorio y errores discretos, mejorando así la estabilidad de la medición. Finalmente, el valor acumulado se divide por el número de muestras (16) para obtener un valor de voltaje promediado más suave y confiable.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
Según la hoja de datos, el rango de medición efectivo del ESP32-C5 cubre 0~3300 mV. Por lo tanto, el circuito de adquisición de voltaje de batería incorporado del XIAO ESP32-C5 está diseñado con dos resistores de 100K para división de voltaje, permitiendo la lectura precisa de valores.
:::

## Recursos

- **[PDF]** [Hoja de datos ESP32-C5](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf)

<!-- - **[ZIP]** [Seeed Studio XIAO ESP32-C5 KiCAD Libraries](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5_V1.0_SCH&PCB_KiCAD.zip)

- **[PDF]** [Seeed Studio XIAO ESP32-C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_ESP32C5_SCH_251202.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32-C5 pinout sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)

- 🔗**[Kicad]** [Seeed Studio XIAO ESP32-C5 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[STEP]** [Seeed Studio XIAO ESP32-C5 Step file](https://grabcad.com/library/seeed-studio-xiao-esp32-c5-1) -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
