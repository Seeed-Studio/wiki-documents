---
description: Primeros pasos con Seeed Studio XIAO ESP32C3
title: Primeros pasos con Seeed Studio XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO_ESP32C3_Getting_Started
sku: 113991054
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

# Primeros pasos con Seeed Studio XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## Introducción

**Seeed Studio XIAO ESP32C3** es una mini placa de desarrollo IoT basada en el chip de modo dual WiFi/Bluetooth **ESP32-C3** de Espressif, que cuenta con una **CPU RISC-V de 32 bits** que ofrece un potente rendimiento de cómputo con su arquitectura eficiente. Tiene un excelente rendimiento de radiofrecuencia, soportando **WiFi IEEE 802.11 b/g/n** y protocolos **Bluetooth 5 (BLE)**. Esta placa viene incluida con una antena externa para aumentar la intensidad de señal para sus aplicaciones inalámbricas. También tiene un **factor de forma pequeño y exquisito** combinado con un **diseño montable en superficie de un solo lado**. Está equipada con interfaces ricas y tiene **11 E/S digitales** que pueden usarse como **pines PWM** y **4 E/S analógicas** que pueden usarse como **pines ADC**. Soporta cuatro interfaces serie como **UART, I2C y SPI**. También hay un pequeño **botón de reset** y un **botón de modo bootloader** en la placa. XIAO ESP32C3 es totalmente compatible con el [Grove Shield para Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) y la [placa de expansión Seeeduino XIAO](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-Expansion-Board) excepto por la placa de expansión Seeeduino XIAO, los contactos de resorte SWD en la placa no serán compatibles.

Con respecto a las características destacadas anteriormente, XIAO ESP32C3 se posiciona como una **mini placa de desarrollo IoT de alto rendimiento, bajo consumo y costo-efectiva**, adecuada para **aplicaciones IoT de bajo consumo y aplicaciones portátiles inalámbricas**.

¡Esta wiki te mostrará cómo puedes comenzar rápidamente con XIAO ESP32C3!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

### Especificaciones

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
            <td>ESP32-C3 32-bit RISC-V @160MHz</td>
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
            <td>400KB SRAM, 4MB Flash integrada</td>
            <td>32KB SRAM 256KB FLASH</td>
            <td>264KB SRAM 2MB Flash integrada</td>
            <td>256KB RAM, 1MB Flash 2MB Flash integrada</td>
            <td>256KB RAM,1MB Flash 2MB Flash integrada</td>
        </tr>
        <tr>
            <th>Sensores Integrados</th>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>6 DOF IMU (LSM6DS3TR-C), Micrófono PDM</td>
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
            <th>Pines PWM/Analógicos</th>
            <td>11/4</td>
            <td>11/11</td>
            <td>11/4</td>
            <td>11/6</td>
            <td>11/6</td>
        </tr>
        <tr>
            <th>Botones Integrados</th>
            <td>Botón Reset/ Boot</td>
            <td>N/A</td>
            <td>Botón Reset/ Boot</td>
            <td>Botón Reset</td>
            <td>Botón Reset</td>
        </tr>
        <tr>
            <th>LEDs Integrados</th>
            <td>LED de Carga</td>
            <td>N/A</td>
            <td>RGB a todo color/ LED 3-en-uno</td>
            <td>LED 3-en-uno/ LED de Carga</td>
            <td>LED 3-en-uno/ LED de Carga</td>
        </tr>
        <tr>
            <th>Chip de Carga de Batería</th>
            <td>ETA4054S2F</td>
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

### Características

- **CPU Potente:** ESP32-C3, procesador de núcleo único RISC-V de 32 bits que opera hasta 160 MHz
- **Subsistema Wi-Fi completo:** Cumple con el protocolo IEEE 802.11b/g/n y soporta modo Station, modo SoftAP, modo SoftAP + Station, y modo promiscuo
- **Subsistema Bluetooth LE:** Soporta características de Bluetooth 5 y Bluetooth mesh
- **Ultra Bajo Consumo:** El consumo en modo deep sleep es de aproximadamente 43μA
- **Mejor rendimiento RF:** Incluye antena RF externa
- **Chip de carga de batería:** Soporta gestión de carga y descarga de batería de litio
- **Recursos abundantes en chip:** 400KB de SRAM, y 4MB de memoria flash integrada
- **Tamaño ultra pequeño:** Tan pequeño como un pulgar (21x17.8mm) factor de forma clásico de la serie XIAO para dispositivos portátiles y proyectos pequeños
- **Características de seguridad confiables:** Aceleradores de hardware criptográfico que soportan AES-128/256, Hash, RSA, HMAC, firma digital y arranque seguro
- **Interfaces abundantes:** 1xI2C, 1xSPI, 2xUART, 11xGPIO(PWM), 4xADC, 1xJTAG interfaz de pad de conexión
- Componentes de un solo lado, diseño de montaje superficial

## Descripción general del hardware

> *A3(GP105) - Utiliza ADC2, que puede volverse inoperativo debido a señales de muestreo falsas. Para lecturas analógicas confiables, use ADC1(A0/A1/A2) en su lugar. Consulte la hoja de datos del ESP32-C3.

<table align="center">
 <tr>
     <th>Diagrama de indicación frontal del XIAO ESP32C3</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Diagrama de indicación trasera del XIAO ESP32C3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de pines del XIAO ESP32C3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div></td>
        <!--
        Descripción de la imagen: Esta imagen es el diagrama oficial de pines de la placa de desarrollo Seeed Studio XIAO ESP32-C3.
        El diagrama muestra:
        - La vista superior de la placa XIAO ESP32-C3.
        - Mapeo de pines GPIO, etiquetas digitales/analógicas, pines de alimentación y roles específicos de función (I2C, UART, SPI).
        - Etiquetas codificadas por colores para cada tipo de pin.
        Distribución de pines de izquierda a derecha (como se ve en la imagen):
        === PINES DEL LADO IZQUIERDO (de arriba a abajo) ===
        - GPIO2    | A0  | D0   → Capacidad analógica (ADC1)
        - GPIO3    | A1  | D1   → Capacidad analógica (ADC1)
        - GPIO4    | A2  | D2   → Capacidad analógica (ADC1)
        - GPIO5    | A3 (tachado) | D3 → Capacidad analógica vía ADC2 (no recomendado)
        - GPIO6    | SDA | D4   → Línea de datos I2C
        - GPIO7    | SCL | D5   → Línea de reloj I2C
        - GPIO21   | TX  | D6   → UART TX (Transmisión)
        === PINES DEL LADO DERECHO (de arriba a abajo) ===
        - 5V       → Entrada/salida de alimentación
        - GND      → Tierra
        - 3V3      → Salida de alimentación de 3.3V
        - D10      | MOSI | GPIO10 → SPI MOSI (sin capacidad analógica)
        - D9       | MISO | GPIO9  → SPI MISO (sin capacidad analógica)
        - D8       | SCK  | GPIO8  → Reloj SPI (sin capacidad analógica)
        - D7       | RX   | GPIO20 → UART RX (Recepción)
        === Leyenda de colores de función de pines (como se muestra en la imagen) ===
        - Azul: Etiquetas de pines digitales (D0–D10)
        - Rosa: Etiquetas de pines analógicos (A0–A2); A3 está tachado debido a la inestabilidad del ADC2
        - Verde: Número GPIO
        - Verde azulado: Función I2C (SDA, SCL)
        - Gris: Función UART (TX, RX)
        - Púrpura: Función SPI (MOSI, MISO, SCK)
        - Negro: GND
        - Rojo: Pines de alimentación (5V, 3V3)
        === Nota al pie en la imagen ===
        "A3(GPIO5) - Usa ADC2, que puede volverse inoperativo debido a señales de muestreo falsas. 
        Para lecturas analógicas confiables, use ADC1 en su lugar. Consulte la hoja de datos del ESP32-C3."
        === Notas ===
        - Solo A0, A1 y A2 son pines analógicos oficialmente soportados usando ADC1.
        - A3 (GPIO5) está tachado y desaconsejado debido a problemas de confiabilidad del ADC2.
        - GPIO0, GPIO1 no se muestran como pines analógicos en esta imagen, aunque técnicamente tienen capacidad ADC1.
        - Los GPIOs 8–10, 20–21 no son utilizables para entrada analógica.
        - Esta distribución ayuda a los desarrolladores a identificar funciones de pines seguras y recomendadas al diseñar circuitos o escribir firmware.
        Fin de la descripción del diagrama de pines del XIAO ESP32-C3.
        -->
 </tr>
</table>

### Pines de Alimentación

- 5V - Esta es la salida de 5v del puerto USB. También puedes usar esto como entrada de voltaje, pero debes tener algún tipo de diodo (schottky, señal, potencia) entre tu fuente de alimentación externa y este pin con ánodo a la batería, cátodo al pin 5V.
- 3V3 - Esta es la salida regulada del regulador integrado. Puedes extraer 700mA
- GND - Tierra de alimentación/datos/señal

### Pines de Configuración

Según el manual del chip del ESP32C3, **GPIO2**, **GPIO8** y **GPIO9** en el chip son Pines de Configuración, las configuraciones de nivel alto y bajo de estos pines pueden permitir que el chip entre en diferentes modos de arranque, por favor presta atención a este punto cuando uses estos pines, de lo contrario puede evitar que tu XIAO cargue o ejecute el programa todo el tiempo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## Primeros pasos

Primero, vamos a conectar XIAO ESP32C3 a la computadora, conectar un LED a la placa y cargar un código simple desde Arduino IDE para verificar si la placa está funcionando bien haciendo parpadear el LED conectado.

### Preparación del Hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x Computadora
- 1 x Cable USB Type-C

:::tip

Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

- **Paso 1.** Conecta XIAO ESP32C3 a tu computadora mediante un cable USB Type-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Paso 2.** Conecta un LED al pin D10 como sigue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**Nota:** Asegúrate de conectar una resistencia (aproximadamente 150Ω) en serie para limitar la corriente a través del LED y prevenir el exceso de corriente que puede quemar el LED

### Preparación del Software

- **Paso 1.** Descarga e instala la última versión de Arduino IDE según tu sistema operativo

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **Paso 2.** Inicia la aplicación Arduino

- **Paso 3.** Añade el paquete de placas ESP32 a tu Arduino IDE

Navega a **File > Preferences**, y completa **"Additional Boards Manager URLs"** con la url de abajo:
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

Navega a **Tools > Board > Boards Manager...**, escribe la palabra clave "**esp32**" en el cuadro de búsqueda, selecciona la última versión de **esp32**, e instálala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **Paso 4.** Selecciona tu placa y puerto

**Placa**

Navega a **Tools > Board > ESP32 Arduino** y selecciona "**XIAO_ESP32C3**". La lista de placas es un poco larga y necesitas desplazarte hasta abajo para alcanzarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**Puerto**

Navega a **Tools > Port** y selecciona el nombre del puerto serie del XIAO ESP32C3 conectado. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware).

### Ejecuta tu primer programa Blink

- **Paso 1.** Copia el código de abajo a Arduino IDE

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

Una vez subido, verás el LED conectado parpadeando con un retraso de 1 segundo entre cada parpadeo. Esto significa que la conexión es exitosa y ahora puedes explorar más proyectos con XIAO ESP32C3!

## Uso de Batería

El XIAO ESP32C3 es capaz de usar una batería de litio de 3.7V como entrada de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
Por favor ten cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar.
:::

**Instrucciones sobre el uso de baterías:**

1. Por favor usa baterías calificadas que cumplan con las especificaciones.
2. XIAO puede conectarse a tu dispositivo de computadora a través del cable de datos mientras usa la batería, ten la seguridad de que XIAO tiene un chip de protección de circuito incorporado, que es seguro.
3. El XIAO ESP32C3 no tendrá ningún LED encendido cuando esté alimentado por batería (a menos que hayas escrito un programa específico), por favor no juzgues si el XIAO ESP32C3 está funcionando o no por la condición del LED, por favor júzgalo razonablemente por tu programa.
4. Lo sentimos, actualmente no tenemos forma de ayudarte a verificar el nivel restante de batería a través de software (porque no hay más pines de chip disponibles), necesitas cargar la batería regularmente o usar un multímetro para verificar el nivel de batería.

### Verificar el voltaje de la batería

Debido a la limitación del número de pines en el ESP32C3, los ingenieros no tenían pines adicionales para asignar a la batería para la medición de voltaje con el fin de asegurar que el XIAO ESP32C3 tenga el mismo número de GPIOs que los otros de la serie XIAO disponibles.

Pero si prefieres usar un pin separado para la medición del voltaje de la batería, puedes consultar la operación genial de [msfujino](https://forum.seeedstudio.com/u/msfujino). También nos gustaría dar un agradecimiento especial a [msfujino](https://forum.seeedstudio.com/u/msfujino) por toda la experiencia y esfuerzos compartidos para el XIAO ESP32C3.

La idea básica de operación es: El voltaje de la batería fue dividido por 1/2 con 200k y conectado al puerto A0 para que el voltaje pudiera ser monitoreado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

La hoja de datos dice nominalmente 2500mV de conversión AD de escala completa, pero hay una gran variación de chip a chip, en realidad ±10%. Mi chip era de 2700mV de escala completa.

Afortunadamente, el valor de corrección calibrado para cada chip está escrito en el área de fusible, y al usar la función `analogReadMilliVolts()`, puedo leer el valor de voltaje corregido sin hacer nada especial.

El resultado de la conversión AD y el voltaje medido por el multímetro concuerdan bien entre sí con un error de aproximadamente 5 mV, lo cual no es un problema en el uso práctico.

Además, durante la comunicación en particular, ocurrieron errores tipo pico, que tuvieron que ser promediados 16 veces para eliminarlos.

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
Lo anterior es del usuario del foro de Seeed Studio **msfujino**, publicado originalmente en:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
Recomendamos que tengas buenas habilidades prácticas y mejores habilidades de soldadura antes de intentar medir el voltaje de la batería basándote en lo anterior, y ten cuidado con acciones peligrosas como cortocircuitar las baterías.
:::

## Modo de sueño profundo y despertar

El XIAO ESP32C3 está diseñado para soportar el modo de sueño profundo y las funciones de despertar. Para el uso de estas dos funciones, proporcionamos los siguientes ejemplos de uso.

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

Si eres lo suficientemente rápido para activar el monitor serie antes de que el XIAO entre en modo de sueño profundo, entonces puedes ver la salida del mensaje como se muestra a continuación. Esto significa que el XIAO ahora está "dormido".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
¡Después de entrar en modo de sueño profundo, el puerto del XIAO desaparecerá y necesitarás despertarlo para ver su número de puerto nuevamente!
:::

En el programa, estamos usando un nivel bajo de **D1** para despertar. Esto significa que podemos conectar un botón al pin D1 y el XIAO se despertará cuando presionemos el botón.

:::caution
Actualmente el XIAO ESP32C3 solo soporta despertar por GPIO, y los únicos pines que soportan despertar son D0~D3. Este programa puede no funcionar en otros pines.
:::

## Solución de problemas

### P1: Mi Arduino IDE se queda colgado al subir código a la placa

Puedes intentar primero reiniciar la placa haciendo clic en el **BOTÓN RESET** una vez mientras la placa está conectada a tu PC. Si eso no funciona, mantén presionado el **BOTÓN BOOT**, conecta la placa a tu PC mientras mantienes presionado el botón **BOOT**, y luego suéltalo para entrar en **modo bootloader**.

### P2: Mi placa no aparece como un dispositivo serie en Arduino IDE

Sigue la misma respuesta que para **P1** arriba.

### P3: Quiero volver a flashear el bootloader con el firmware de fábrica

Puedes simplemente conectar la placa a una PC vía **USB Type-C** y volver a flashear el bootloader con el firmware de fábrica usando **ESP RF Test Tool**.

- **Paso 1.** Mantén presionado el **BOTÓN BOOT** y conecta el XIAO ESP32C3 a la PC para entrar en **modo bootloader**

- **Paso 2.** Después de que esté conectado, suelta el BOTÓN BOOT

- **Paso 3.** Visita [esta página](https://www.espressif.com/en/support/download/other-tools) y descarga **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 4.** Extrae el **.zip**, navega a `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` y abre **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Paso 5.** Selecciona **ESP32C3** como el ChipType, tu puerto COM, **115200** como el BaudRate y haz clic en **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

Verás la siguiente salida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **Paso 6.** Selecciona **Flash** y haz clic en **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **Paso 7.** Descarga el [firmware de fábrica del XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) y selecciónalo.

- **Paso 8.** Finalmente haz clic en **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

Verás la siguiente salida cuando el flasheo sea exitoso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## Repositorio GitHub de MicroPython

- [Repositorio MicroPython de XIAO ESP32C3](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## Recursos

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

- 📄**[PDF]** [Hoja de datos del ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)
- 📄 **[PDF]** [Esquemático del Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)
- 🗃️ **[ZIP]** [Librerías KiCAD del Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Librerías Eagle del Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)
- 🗃️ **[ZIP]** [Firmware de fábrica del Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- 📄 **[DXF]** [Dimensiones del Seeed Studio XIAO ESP32C3 en DXF](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)
- 📄 **[LBR]** [Huella Eagle del Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)
- 📄 **[XLSX]** [Hoja de pines del Seeed Studio XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)
- 🔗 **[STEP]** [Modelo 3D del Seeed Studio XIAO ESP32C3](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)
- 🔗 **[GitHub]** [Librería MicroPython del Seeed Studio XIAO ESP32C3](https://github.com/IcingTomato/micropython_xiao_esp32c3)
- 🔗 **[Enlace]** [Platform IO para Seeed Studio XIAO ESP32](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html)
- 🔗 **[WiKi]** [Primera mirada al Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)  Una excelente introducción al XIAO ESP32C3, cubriendo características clave y uso básico.
- 📚 **[Ebook]** [XIAO: Gran Potencia, Placa Pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/) Excelente guía para dominar Arduino y TinyML en placas XIAO.
- 🔗 **[Kicad]** [Huella del Seeed Studio XIAO ESP32C3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## Recursos del Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Gran Potencia, Placa Pequeña Dominando Arduino y TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
