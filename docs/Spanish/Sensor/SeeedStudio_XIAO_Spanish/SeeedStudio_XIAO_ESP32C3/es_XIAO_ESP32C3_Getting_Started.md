---
description: Getting Started with Seeed Studio XIAO ESP32C3
title: Comenzando con  XIAO ESP32C3 de Seeed Studio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO_ESP32C3_Getting_Started
last_update:
  date: 02/03/2025
  author: Guillermo
---

# Comenzando con  XIAO ESP32C3 de Seeed Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

La **XIAO ESP32C3 de Seeed Studio** es una placa de desarrollo IoT miniatura basada en el chip dual WiFi/Bluetooth **ESP32-C3** de Espressif. El ESP32-C3 es una **CPU RISC-V de 32 bits**, que incluye una **FPU** (Unidad de Punto Flotante) para **aritmética de precisión simple de 32 bits** con un gran poder de cómputo. Tiene un excelente rendimiento en radiofrecuencia, soportando los protocolos **WiFi IEEE 802.11 b/g/n** y **Bluetooth 5 (BLE)**. Esta placa incluye una antena externa para aumentar la intensidad de la señal en tus aplicaciones inalámbricas. También tiene un **formato pequeño y exquisito** combinado con un **diseño de montaje superficial de un solo lado**. Está equipada con interfaces ricas y tiene **11 pines digitales I/O** que pueden usarse como **pines PWM** y **3 pines analógicos I/O** que pueden usarse como **pines ADC**. Soporta cuatro interfaces seriales como **UART, I2C y SPI**. Además, tiene un pequeño **botón de reinicio** y un **botón de modo bootloader** en la placa. La XIAO ESP32C3 es completamente compatible con el [Grove Shield para Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) y la [placa de expansión Seeeduino XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board), excepto que los contactos SWD en la placa de expansión Seeeduino XIAO no son compatibles.

Con respecto a las características mencionadas anteriormente, la XIAO ESP32C3 está posicionada como una **placa de desarrollo IoT miniatura de alto rendimiento, bajo consumo y costo efectivo**, adecuada para **aplicaciones IoT de bajo consumo y aplicaciones inalámbricas portátiles**.

¡Esta wiki te mostrará cómo puedes comenzar rápidamente con el XIAO ESP32C3!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong><span><font color={'FFFFFF'} size={"4"}> Consígue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **CPU potente:** ESP32-C3, procesador RISC-V de 32 bits de un solo núcleo que opera a hasta 160 MHz
- **Subsistema completo de Wi-Fi:** Cumple con el protocolo IEEE 802.11b/g/n y soporta modo Estación, modo SoftAP, modo SoftAP + Estación y modo promiscuo
- **Subsistema Bluetooth LE:** Soporta características de Bluetooth 5 y malla Bluetooth
- **Ultra bajo consumo:** El consumo de energía en modo de sueño profundo es de aproximadamente 43μA
- **Mejor rendimiento en RF:** Antena externa incluida
- **Chip de carga de batería:** Soporta gestión de carga y descarga de baterías de litio
- **Ricos recursos integrados:** 400KB de SRAM y 4MB de memoria flash integrada
- **Tamaño ultra pequeño:** Tan pequeño como un pulgar (21x17.8mm), diseño clásico de la serie XIAO para dispositivos portátiles y proyectos pequeños
- **Funciones de seguridad confiables:** Aceleradores de hardware criptográfico que soportan AES-128/256, Hash, RSA, HMAC, firma digital y arranque seguro
- **Interfaces ricas:** 1xI2C, 1xSPI, 2xUART, 11xGPIO (PWM), 4xADC, 1xinterfaz de almohadilla de unión JTAG
- **Componentes de un solo lado:**  diseño de montaje superficial

## Comparación de especificaciones

<table>
    <thead>
        <tr>
            <th>Elemento</th>
            <th>Seeed Studio XIAO ESP32C3</th>
            <th>Seeeduino XIAO</th>
            <th>Seeed XIAO RP2040</th>
            <th>Seeed XIAO nRF52840</th>
            <th>Seeed XIAO nRF52840 Sense</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Procesador</th>
            <td>ESP32-C3 RISC-V de 32 bits @160MHz</td>
            <td>SAMD21 M0+@48MHz</td>
            <td>RP2040 Dual-core M0+@133Mhz</td>
            <td>nRF52840 M4F@64MHz</td>
            <td>nRF52840 M4F@64MHz</td>
        </tr>
        <tr>
            <th>Conectividad Inalámbrica</th>
            <td>WiFi y Bluetooth 5 (BLE)</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
        </tr>
        <tr>
            <th>Memoria</th>
            <td>400KB SRAM, 4MB de Flash en placa</td>
            <td>32KB SRAM, 256KB FLASH</td>
            <td>264KB SRAM, 2MB de Flash en placa</td>
            <td>256KB RAM, 1MB Flash, 2MB de Flash en placa</td>
            <td>256KB RAM, 1MB Flash, 2MB de Flash en placa</td>
        </tr>
        <tr>
            <th>Sensores Integrados</th>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>IMU de 6 ejes (LSM6DS3TR-C), micrófono PDM</td>
        </tr>
        <tr>
            <th>Interfaces</th>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
        </tr>
        <tr>
            <th>Pines PWM/Análogos</th>
            <td>11/4</td>
            <td>11/11</td>
            <td>11/4</td>
            <td>11/6</td>
            <td>11/6</td>
        </tr>
        <tr>
            <th>Botones en placa</th>
            <td>Botón de Reset/ Boot</td>
            <td>N/A</td>
            <td>Botón de Reset/ Boot</td>
            <td>Botón de Reset</td>
            <td>Botón de Reset</td>
        </tr>
        <tr>
            <th>LEDs en placa</th>
            <td>LED de carga</td>
            <td>N/A</td>
            <td>LED RGB completo/ LED 3-en-1</td>
            <td>LED 3-en-1/ LED de carga</td>
            <td>LED 3-en-1/ LED de carga</td>
        </tr>
        <tr>
            <th>Chip de carga de batería</th>
            <td>Integrado</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>BQ25101</td>
            <td>BQ25101</td>
        </tr>
        <tr>
            <th>Lenguajes de Programación</th>
            <td>Arduino/ MicroPython</td>
            <td>Arduino/ CircuitPython</td>
            <td colspan="3" align="center">Arduino/ MicroPython/ CircuitPython</td>
        </tr>
    </tbody>
</table>

## Descripción del hardware

### Diagrama de pines

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div>

*A3(GP105) - Usa ADC2, que puede volverse inoperativo debido a señales de muestreo erróneas. Para lecturas analógicas confiables, usa ADC1 (A0/A1/A2) en su lugar. Consulta la hoja de datos de ESP32-C3.

### Descripción de los componentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:500, height:'auto'}}/></div>

### Pines de alimentación

- **5V** - Este es el voltaje de 5V que proviene del puerto USB. También puedes usarlo como una entrada de voltaje, pero debes tener algún tipo de diodo (Schottky, señal, de potencia) entre tu fuente de alimentación externa y este pin, con el ánodo hacia la batería y el cátodo hacia el pin de 5V.
- **3V3** - Esta es la salida regulada del regulador a bordo. Puedes consumir hasta 700mA.
- **GND** - Tierra de alimentación/datos/señales.

### Pines de arranque

Según el manual del chip ESP32-C3, **GPIO2**, **GPIO8** y **GPIO9** en el chip son Pines de Arranque (Strapping Pins). Las configuraciones de nivel alto y bajo de estos pines pueden permitir que el chip entre en diferentes modos de arranque. Presta atención a este detalle cuando uses estos pines, ya que, de lo contrario, podría evitar que tu XIAO cargue o ejecute el programa correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>


## Comenzando

Primero, vamos a conectar la XIAO ESP32C3 a la computadora, conectar un LED a la placa y cargar un código simple desde Arduino IDE para verificar si la placa funciona correctamente al hacer parpadear el LED conectado.

### Configuración del software

- **Paso 1.** Descarga e instala la versión más reciente de Arduino IDE según tu sistema operativo.

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **Paso 2.** Abre la aplicación de Arduino

- **Paso 3.** Añade el paquete de placas ESP32 a tu Arduino IDE

Navega a **Archivo > Preferencias**, y llena el campo **"URLs adicionales para el gestor de placas"** con la siguiente URL:
*<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json>*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

Navega a **Herramientas > Placa > Gestor de placas...**, escribe la palabra clave "**esp32**" en el cuadro de búsqueda, selecciona la última versión de **esp32** e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **Paso 4.** Selecciona tu placa y puerto

**Placa**

Navega a **Herramientas > Placa > ESP32 Arduino** y selecciona "**XIAO_ESP32C3**". La lista de placas es un poco larga, por lo que necesitarás desplazarte hasta el final para encontrarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**Puerto**

Navega a **Herramientas > Puerto** y selecciona el nombre del puerto serie del XIAO ESP32C3 conectado. Este probablemente será **COM3** o superior (generalmente **COM1** y **COM2** están reservados para puertos seriales de hardware).

### Configuración de hardware

Necesitarás preparar lo siguiente:

- 1 x [XIAO ESP32C3 de Seeed Studio](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x Computadora
- 1 x Cable USB Tipo-C

:::tip

Algunos cables USB solo pueden suministrar energía y no transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes conseguir el [Cable USB Tipo-C de Seeed, que soporta USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

- **Paso 1.** Conecta el XIAO ESP32C3 a tu computadora mediante un cable USB Tipo-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Paso 2.** Conecta un LED al pin D10 de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**Nota:** Asegúrate de conectar una resistencia (alrededor de 150Ω) en serie para limitar la corriente a través del LED y evitar que el exceso de corriente queme el LED.

### Hacer parpadear el LED

- **Paso 1.** Copia el siguiente código en Arduino IDE

Asegúrate de que tu `D10` esté conectado a un LED como se muestra en el diagrama anterior.

```cpp

const int led = D10; // No hay un LED integrado en la XIAO ESP32C3.

void setup() {
  // Inicia un pin digital como output (sálida)
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // Prende el LED
  delay(1000);               // Espera un segundo
  digitalWrite(led, LOW);    // Apaga el LED
  delay(1000);               // Espera un segundo
}
```

- **Paso 2.** Haz clic en el botón **Subir** para cargar el código a la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

Una vez cargado, verás que el LED conectado parpadea con un retraso de 1 segundo entre cada parpadeo. Esto significa que la conexión ha sido exitosa y ahora puedes explorar más proyectos con la XIAO ESP32C3.

## Uso de la Batería

La XIAO ESP32C3 es capaz de usar una batería de litio de 3.7V como fuente de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
Por favor, ten cuidado de no hacer un cortocircuito entre los terminales positivo y negativo, ya que podría quemar la batería y el equipo al soldar.
:::

**Instrucciones sobre el uso de baterías:**

1. Por favor, utiliza baterías calificadas que cumplan con las especificaciones.
2. La XIAO puede conectarse a tu dispositivo mediante un cable de datos mientras usa la batería. No te preocupes, XIAO tiene un chip de protección incorporado, lo cual es seguro.
3. La XIAO ESP32C3 no tendrá ningún LED encendido cuando esté alimentado por batería (a menos que hayas programado algo específico). No juzgues si el XIAO ESP32C3 está funcionando o no por el estado del LED, juzga razonablemente por tu programa.
4. Lo sentimos, actualmente no podemos ayudarte a verificar el nivel de batería restante a través del software (porque no hay pines disponibles en el chip). Necesitarás cargar la batería regularmente o usar un multímetro para comprobar el nivel de la batería.

### Verificar el voltaje de la batería

Debido a la limitación en el número de pines del ESP32C3, los ingenieros no tuvieron pines adicionales para asignar a la medición de voltaje de la batería con el fin de asegurar que la XIAO ESP32C3 tenga la misma cantidad de GPIOs que las otras versiones de la serie XIAO disponibles.

Sin embargo, si prefieres usar un pin separado para medir el voltaje de la batería, puedes referirte al genial trabajo de de [msfujino](https://forum.seeedstudio.com/u/msfujino). También nos gustaría dar un agradecimiento especial a [msfujino](https://forum.seeedstudio.com/u/msfujino) por toda la experiencia y los esfuerzos compartidos para la XIAO ESP32C3.

La idea básica de la operación es: El voltaje de la batería se divide por 1/2 con una resistencia de 200k y se conecta al puerto A0 para que se pueda monitorear el voltaje..

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

La hoja de datos dice que la conversión AD tiene un valor nominal de 2500mV para el rango completo, pero hay una gran variación de chip a chip, en realidad ±10%. Mi chip tenía un valor de 2700mV para el rango completo.

Afortunadamente, el valor de corrección calibrado para cada chip está escrito en el área de fusibles, y al usar la función `analogReadMilliVolts()`, puedo leer el valor de voltaje corregido sin necesidad de hacer nada especial.

El resultado de la conversión AD y el voltaje medido por el multímetro coinciden bien entre sí, con un error de alrededor de 5 mV, lo cual no es un problema en el uso práctico.

Además, durante la comunicación en particular, ocurrieron errores tipo picos, que tuvieron que promediarse 16 veces para eliminarlos.

El siguiente es el procedimiento para probar el voltaje de la batería.

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // ADC con corrección   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // ratio de 1/2 de atenuación, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
Lo anterior es del usuario **msfujino** en el foro de Seeed Studio, publicado originalmente en:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
Recomendamos que tengas buenas habilidades prácticas y mejor destreza en soldadura antes de intentar medir el voltaje de la batería basado en lo anterior, y ten cuidado con acciones peligrosas como cortocircuitar las baterías.
:::

## Modo de sueño profundo y despertador

La XIAO ESP32C3 está diseñada para soportar el modo de sueño profundo y las funciones de despertador. Para el uso de estas dos funciones, proporcionamos los siguientes ejemplos de uso.

```cpp
#define BUTTON_PIN_BITMASK 0x200000000 // 2^33 in hex

RTC_DATA_ATTR int bootCount = 0;

/*
Método para imprimir la razón por la cual el ESP32 ha sido despertado del sueño
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
  delay(1000); // Toma un segundo en abrir la terminal

  // Incrementar el número de inicio e imprimirlo cada reinicio
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  // Imprima el motivo de activación del ESP32
  print_wakeup_reason();

  esp_deep_sleep_enable_gpio_wakeup(BIT(D1), ESP_GPIO_WAKEUP_GPIO_LOW);

  // Vete a dormir ahora
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  // Esto no se va a llamar
}
```

Si eres lo suficientemente rápido para encender el monitor serie antes de que el XIAO entre en sueño profundo, entonces podrás ver el mensaje de salida como se muestra a continuación. Esto significa que el XIAO ahora está "dormido".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
¡Después de entrar en el modo de sueño profundo, el puerto del XIAO desaparecerá y tendrás que despertarlo para ver su número de puerto nuevamente!
:::

En el programa, estamos utilizando un nivel bajo en **D1** para despertar. Esto significa que podemos conectar un botón al pin D1 y el XIAO se despertará cuando presionemos el botón.

:::caution
"Actualmente, la XIAO ESP32C3 solo soporta el despertar mediante GPIO, y los únicos pines que soportan el despertar son D0 a D3. Este programa puede no funcionar en otros pines."
:::

## Preguntas y Respuestas

Aquí tienes la traducción:

### P1: Mi IDE de Arduino está bloqueado al cargar el código en la placa

Puedes intentar primero reiniciar la placa presionando una vez el **BOTÓN DE REINICIO** mientras la placa está conectada a tu PC. Si eso no funciona, mantén presionado el **BOTÓN DE BOOT**, conecta la placa al PC mientras mantienes presionado el **BOTÓN DE BOOT**, y luego suéltalo para ingresar al **modo bootloader**.

### P2: Mi placa no aparece como un dispositivo serial en el IDE de Arduino

Sigue la misma respuesta que para **P1** arriba.

### P3: Quiero reflashear el bootloader con el firmware de fábrica

Puedes simplemente conectar la placa a un PC mediante **USB Tipo-C** y reflashear el bootloader con el firmware de fábrica utilizando **ESP RF Test Tool**.

- **Paso 1.** Mantén presionado el **BOTÓN DE BOOT** y conecta el XIAO ESP32C3 al PC para ingresar al **modo bootloader**

- **Paso 2.** Después de que se haya conectado, suelta el **BOTÓN DE BOOT**

- **Paso 3.** Visita [esta página](https://www.espressif.com/en/support/download/other-tools) y descarga **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 4.** Extrae el **.zip**, navega a `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` y abre **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Paso 5.** Selecciona **ESP32C3** como el ChipType, tu puerto COM, **115200** como la tasa de baudios y haz clic en **open**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

Verás el siguiente mensaje

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **Paso 6.** Selecciona **Flash** y haz clic en **Select Bin**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **Paso 7.** Descarga el [firmware de fábrica de XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) y selecciona el archivo.

- **Paso 8.** Finalmente, haz clic en **Load Bin**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

Verás la siguiente salida cuando el flasheo sea exitoso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## Repositorio de MicroPython en GitHub

- [Repositorio de MicroPython para XIAO ESP32C3](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## Recursos

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

- 📄**[PDF]** [ESP32C3 datasheet](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO ESP32C3 Schematic](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCAD Libraries](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagle Libraries](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Factory firmware](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Certification files](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-Certification.zip)
- 📄 **[DXF]** [Seeed Studio XIAO ESP32C3 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO ESP32C3 Eagle footprint](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO ESP32C3 pinout sheet](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)
- 🔗 **[STEP]** [Seeed Studio XIAO ESP32C3 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)
- 🔗 **[GitHub]** [Seeed Studio XIAO ESP32C3 MicroPython Library](https://github.com/IcingTomato/micropython_xiao_esp32c3)
- 🔗 **[Link]** [Platform IO for Seeed Studio XIAO ESP32](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html)
- 🔗 **[WiKi]** [First Look at the Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)  A great intro to the XIAO ESP32C3, covering key features and basic usage.
- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/) Excellent guide for mastering Arduino and TinyML on XIAO boards.
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C3 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## Recursos del curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Gran potencia, placa pequeña, dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
