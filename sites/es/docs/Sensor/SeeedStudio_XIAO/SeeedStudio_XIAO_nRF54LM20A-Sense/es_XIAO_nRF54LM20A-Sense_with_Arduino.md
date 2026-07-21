---
title: XIAO nRF54LM20A Sense con Arduino
description: Este artículo presenta cómo desarrollar Seeed Studio XIAO nRF54LM20A Sense con el IDE de Arduino.
keywords:
  - xiao
  - nrf54lm20a
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_arduino
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-07-15'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_arduino/
---

# Seeed Studio XIAO nRF54LM20A Sense con Arduino

Esta sección te guía a través de la preparación de hardware y software necesaria para el desarrollo con Arduino. Siguiendo los pasos a continuación, configurarás tu entorno de desarrollo, ajustarás el IDE de Arduino y prepararás tu placa XIAO para la programación. Una vez completada la configuración, podrás compilar, cargar y probar rápidamente los ejemplos de sketches proporcionados.

## Introducción

### Preparación de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Ordenador
- 1 x Cable USB tipo C

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>


### Software

La XIAO nRF54LM20A es compatible con el desarrollo mediante el IDE de Arduino. Antes de comenzar, instala y configura el IDE de Arduino.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable del IDE de Arduino según tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Paso 2.** Inicia la aplicación de Arduino.

- **Paso 3.** Abre **Arduino IDE** > **Settings**, busca **Additional Boards Manager URLs** y añade la siguiente URL:

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **Paso 4.** Ve a **Tools** > **Board** > **Boards Manager**, busca **nRF54L15 Boards** e instálalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **Paso 5.** Después de conectar la placa, selecciona la siguiente placa en el IDE de Arduino:

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### Cargar programa

El siguiente ejemplo utiliza un sencillo programa de parpadeo.

**Paso 1.** Selecciona el código de ejemplo **Blink** para realizar la prueba.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Haz clic en **Upload** para compilar y cargar el sketch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

Demostración del efecto:

Después de cargar el programa y pulsar el botón de reinicio, el indicador L parpadeará a intervalos de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>



## Digital

Los pines digitales se utilizan comúnmente para controlar sensores y actuadores externos cambiando entre niveles lógicos alto y bajo. Esta sección utiliza un Grove Button y un Grove Buzzer con la Grove Base for XIAO para demostrar la entrada y salida digital básica en la XIAO nRF54LM20A.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout de la XIAO nRF54LM20A, **D0 / P1.00** se puede usar para el Grove Button y **D1 / P1.31** se puede usar para el Grove Buzzer.

:::tip

- Para el pinout de la XIAO nRF54LM20A, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

Crea un nuevo sketch de Arduino y carga el siguiente código.

```cpp
#define BUTTON_PIN 0
#define BUZZER_PIN 1

int last_val = LOW;

void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  Serial.println("=== Grove Button + Buzzer (Digital Mode) ===");

  pinMode(BUTTON_PIN, INPUT);

  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);

  Serial.println("Button:  D0 (input)");
  Serial.println("Buzzer:  D1 (output)");
  Serial.println("Press the button to turn on the buzzer...");
}

void loop() {
  int val = digitalRead(BUTTON_PIN);

  digitalWrite(BUZZER_PIN, val);

  if (val != last_val) {
    Serial.print("Button ");
    Serial.print(val ? "PRESSED " : "released");
    Serial.print(" -> Buzzer ");
    Serial.println(val ? "ON" : "OFF");

    last_val = val;
  }

  delay(10);
}
```

### Resultado

Después de cargar el sketch, pulsa el botón. El zumbador emitirá un pitido y el Monitor Serie mostrará el estado del botón y del zumbador.

:::tip

Configura la velocidad en baudios del Monitor Serie a **115200**.

:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM genera una forma de onda digital temporizada a una frecuencia fija y cambia el ciclo de trabajo para aproximar una señal de control analógica. Se utiliza comúnmente para el control de ángulo de servos, ajuste de brillo de LED, control de velocidad de motores y otras aplicaciones que necesitan un control de salida suave.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout del XIAO nRF54LM20A, **D0 / P1.00** se puede utilizar como pin de control PWM para el **Grove Servo**.

:::tip

- Para el pinout del XIAO nRF54LM20A, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

Crea un nuevo sketch de Arduino para implementar el control del servo por PWM y configurar parámetros como el período PWM.

```cpp
#include <Arduino.h>

#define SERVO_PIN PIN_D0

#define SERVO_FREQ_HZ      50
#define SERVO_PERIOD_US    20000
#define SERVO_MIN_US       500
#define SERVO_MAX_US       2500

#define STEP_FWD_MS        30
#define STEP_RET_MS        30

#define PWM_RESOLUTION     16
#define PWM_MAX_VALUE      65535UL

static void set_angle(int degrees)
{
  if (degrees < 0) degrees = 0;
  if (degrees > 180) degrees = 180;

  uint32_t pulse_us = SERVO_MIN_US +
                      (uint32_t)((uint64_t)degrees *
                                 (SERVO_MAX_US - SERVO_MIN_US) / 180UL);

  uint32_t duty = (uint32_t)((uint64_t)pulse_us *
                             PWM_MAX_VALUE / SERVO_PERIOD_US);

  analogWrite(SERVO_PIN, duty);
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("=== boot ===");
  Serial.println("Servo control started on P1.0 / PIN_D0");

  pinMode(SERVO_PIN, OUTPUT);

  analogWriteResolution(PWM_RESOLUTION);
  analogWritePinFrequency(SERVO_PIN, SERVO_FREQ_HZ);

  set_angle(0);
  delay(500);
}

void loop()
{
  for (int a = 0; a <= 180; a++) {
    set_angle(a);

    Serial.print("Angle: ");
    Serial.print(a);
    Serial.println(" deg");

    delay(STEP_FWD_MS);
  }

  for (int a = 180; a >= 0; a--) {
    set_angle(a);

    Serial.print("Angle: ");
    Serial.print(a);
    Serial.println(" deg");

    delay(STEP_RET_MS);
  }
}
```

### Resultado

Después de cargar el sketch, el servo gira de 0° a 180° a unos 33 grados por segundo y luego vuelve a girar a 0°.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

Mientras tanto, el ángulo actual del servo se imprimirá a través del puerto serie USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_2.png" style={{width:800, height:'auto'}}/></div>

## Analógico

La entrada analógica se basa en un convertidor analógico-digital (ADC), que convierte un voltaje continuo de un sensor externo en un valor digital. El valor ADC bruto puede luego asignarse a mediciones prácticas como humedad del suelo, voltaje de la batería o temperatura.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base para XIAO </th>
        <th>Grove - Sensor Capacitivo de Humedad del Suelo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout del XIAO nRF54LM20A, **A0 / P1.00** se puede utilizar como pin de entrada analógica.

:::tip

- Para el pinout del XIAO nRF54LM20A, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

Crea un nuevo sketch de Arduino, lee el valor analógico desde **A0 / P1.00** e imprime el valor ADC bruto a través de USB serie cada 500 ms.

```cpp
#include <Arduino.h>

#define ADC_PIN A0

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("ADC demo - XIAO nRF54LM20A Arduino");
  Serial.println("Reading analog input on P1.00 / AIN0 / A0");

  analogReadResolution(12);
}

void loop()
{
  int raw = analogRead(ADC_PIN);

  Serial.print("ADC raw: ");
  Serial.println(raw);

  delay(500);
}
```

### Resultado

Después de flashear el programa, inserta el Grove-Capacitive Soil Moisture Sensor en plantas en maceta domésticas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
Abre el asistente de puerto serie en tu ordenador y observa los valores de salida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

Tabla de lectura de referencia de voltaje
| Estado     | Voltaje de salida del sensor | Valor ADC bruto esperado|
| -------------- | -------------- | ---------------- |
| En el aire (seco) | ~2.0–2.4V      | ~3400–4095       |
| En suelo húmedo       | ~1.3–1.8V      | ~2200–3000       |
| Totalmente sumergido en agua   | ~0.8–1.2V      | ~1365–2048       |

:::

:::caution

Debido a las diferencias individuales de los componentes, las mediciones de diferentes módulos en el mismo entorno pueden variar.

:::

## UART

El receptor/transmisor asíncrono universal (UART) es un protocolo serie asíncrono estándar. No requiere un reloj compartido; ambos dispositivos se comunican utilizando la misma velocidad en baudios configurada. Con TX y RX conectados en cruz y GND compartida, UART proporciona un enlace full-dúplex sencillo para registros de consola, depuración de módulos y comunicación punto a punto de bajo ancho de banda.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Convertidor USB a TTL</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout del XIAO nRF54LM20A, **D6 / P1.08** y **D7 / P1.09** se pueden utilizar como pines TX y RX para comunicación UART externa.

:::tip

- Para el pinout del XIAO nRF54LM20A, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

Crea un nuevo sketch de Arduino. El ejemplo envía un mensaje de inicio a través del UART externo, hace eco de los caracteres recibidos e imprime periódicamente un mensaje de latido.

<details>

<summary>Sketch de Arduino</summary>

```cpp
#include <Arduino.h>

#define RX_BUF_SIZE 128
#define TX_BUF_SIZE 256
#define HEARTBEAT_INTERVAL_MS 5000

static char rx_buf[RX_BUF_SIZE];
static size_t rx_buf_pos = 0;
static char tx_buf[TX_BUF_SIZE];

static uint32_t heartbeat_count = 0;
static unsigned long last_heartbeat = 0;

static void uart_send_string(const char *str)
{
  Serial1.print(str);
}

static void handle_complete_line()
{
  rx_buf[rx_buf_pos] = '\0';

  if (rx_buf_pos > 0) {
    Serial.print("Received: ");
    Serial.println(rx_buf);

    uart_send_string("\r\nYou sent: ");
    uart_send_string(rx_buf);
  }

  uart_send_string("\r\n");
  rx_buf_pos = 0;
  memset(rx_buf, 0, sizeof(rx_buf));
}

static void process_rx_byte(char c)
{
  static bool last_was_cr = false;

  if (c == '\r' || c == '\n') {
    if (c == '\n' && last_was_cr) {
      last_was_cr = false;
      return;
    }

    uart_send_string("\r\n");
    handle_complete_line();
    last_was_cr = (c == '\r');
    return;
  }

  last_was_cr = false;

  Serial1.write(c);

  if (rx_buf_pos < RX_BUF_SIZE - 1) {
    rx_buf[rx_buf_pos++] = c;
    return;
  }

  uart_send_string("\r\n[Warning] Input too long, buffer cleared.\r\n");
  rx_buf_pos = 0;
  memset(rx_buf, 0, sizeof(rx_buf));
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("========================================");
  Serial.println("  UART demo for XIAO nRF54LM20A");
  Serial.println("========================================");

  Serial1.begin(115200);

  uart_send_string("\r\n");
  uart_send_string("========================================\r\n");
  uart_send_string("  UART demo for XIAO nRF54LM20A\r\n");
  uart_send_string("========================================\r\n");
  uart_send_string("\r\n");
  uart_send_string("Pin Configuration:\r\n");
  uart_send_string("  TX: P1.08 / D6\r\n");
  uart_send_string("  RX: P1.09 / D7\r\n");
  uart_send_string("  Baud Rate: 115200\r\n");
  uart_send_string("\r\n");
  uart_send_string("Type something and press Enter to see it echoed.\r\n");
  uart_send_string("\r\n");

  Serial.println("UART demo started. Waiting for data...");
  Serial.println("Connect USB-TTL RX to D6/TX, TX to D7/RX, and GND to GND.");

  last_heartbeat = millis();
}

void loop()
{
  while (Serial1.available() > 0) {
    char c = (char)Serial1.read();
    process_rx_byte(c);
  }

  unsigned long now = millis();
  if (now - last_heartbeat >= HEARTBEAT_INTERVAL_MS) {
    last_heartbeat = now;
    heartbeat_count++;

    snprintf(tx_buf, sizeof(tx_buf),
             "\r\n[Heartbeat #%lu] UART running...\r\n",
             (unsigned long)heartbeat_count);

    uart_send_string(tx_buf);

    Serial.print("Heartbeat #");
    Serial.print(heartbeat_count);
    Serial.println(" sent");
  }

  delay(10);
}

```

</details>

### Resultado

1. Cablea según el orden de la tabla

| XIAO nRF54LM20A | CH340 |
| --------------- | ----- |
| VBUS            | 5V    |
| GND             | GND   |
| P1.08 - TX      | RX    |
| P1.09 - RX      | TX    |

2. Abre el software de monitorización de puerto serie en tu ordenador. El UART externo imprimirá la información de los pines configurados al inicio. De forma predeterminada, la cadena `[Heartbeat #number] UART running...` se imprimirá periódicamente. Si escribes caracteres en la herramienta de serie externa y pulsas Enter, la placa hará eco de la línea recibida.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_uart_1.png" style={{width:800, height:'auto'}}/></div>

## I2C

I2C es un protocolo de comunicación síncrono y half-dúplex que utiliza dos líneas: SDA para datos y SCL para reloj. Varios dispositivos pueden compartir el mismo bus mediante direccionamiento, lo que hace que I2C sea una opción común para sensores, IMU, módulos de temperatura y humedad, y pequeñas pantallas OLED.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Placa base de expansión Seeed Studio para XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout del XIAO nRF54LM20A, **D4 / P1.03** y **D5 / P1.07** se pueden configurar como pines SDA y SCL de I2C.

:::tip

- Para el pinout del XIAO nRF54LM20A, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

1. Instala las siguientes bibliotecas desde **Arduino IDE** > **Tools** > **Manage Libraries...**:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/11.png" style={{width:400, height:'auto'}}/></div>

- Adafruit SSD1306
- Adafruit GFX Library
- Adafruit BusIO

2. Crea un nuevo sketch de Arduino para inicializar el OLED y mostrar texto.

<details>

<summary>Arduino sketch</summary>

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define OLED_W 128
#define OLED_H 64
#define OLED_ADDR 0x3C
#define OLED_RESET -1

#define OLED_SDA PIN_D4
#define OLED_SCL PIN_D5

Adafruit_SSD1306 display(OLED_W, OLED_H, &Wire, OLED_RESET);

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println("SSD1306 OLED test with pull-ups");

  Wire.setPins(OLED_SDA, OLED_SCL);
  Wire.begin();
  Wire.setClock(100000);

  pinMode(OLED_SDA, INPUT_PULLUP);
  pinMode(OLED_SCL, INPUT_PULLUP);
  delay(20);

  Serial.print("SDA idle = ");
  Serial.println(digitalRead(OLED_SDA));
  Serial.print("SCL idle = ");
  Serial.println(digitalRead(OLED_SCL));

  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR, true, false)) {
    Serial.println("SSD1306 init failed");
    while (1) {
      delay(1000);
    }
  }

  Serial.println("SSD1306 init OK");

  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);

  display.setCursor(28, 20);
  display.println("Hello XIAO");

  display.setCursor(24, 36);
  display.println("nRF54LM20A");

  display.display();
}

void loop() {
}
```

</details>

### Resultado

Después de que el programa se ejecute, el texto **Hello XIAO nRF54LM20A** se mostrará en el OLED y el estado de inicialización se imprimirá a través del puerto serie USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI es un protocolo de comunicación síncrono, full-dúplex y de alta velocidad. Utiliza una línea SCLK dedicada para la temporización, líneas MOSI y MISO para los datos, y una línea CS/SS para seleccionar el dispositivo objetivo. Debido a que SPI puede proporcionar un alto rendimiento con hardware sencillo, se utiliza ampliamente para almacenamiento flash, tarjetas SD, pantallas de alta frecuencia de actualización y sensores de alta velocidad.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Pantalla redonda para Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

:::tip

- Para el pinout del XIAO nRF54LM20A, haz clic en [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

1. Instala las siguientes bibliotecas desde **Arduino IDE** > **Tools** > **Manage Libraries...**:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/10.png" style={{width:400, height:'auto'}}/></div>

- Adafruit GC9A01A
- Adafruit GFX Library
- Adafruit BusIO

2. Crea un nuevo sketch de Arduino y escribe la lógica de relleno de pantalla de color sólido.

<details>

<summary>Arduino sketch</summary>

```cpp
#include <Arduino.h>
#include <Adafruit_GFX.h>
#include <Adafruit_GC9A01A.h>

#define TFT_CS    PIN_D1
#define TFT_DC    PIN_D3
#define TFT_MOSI  PIN_D10
#define TFT_SCLK  PIN_D8
#define TFT_RST   -1
#define TFT_BL    PIN_D6

#define LCD_W  240
#define LCD_H  240

#define COLOR_BLACK   0x0000U
#define COLOR_WHITE   0xFFFFU
#define COLOR_RED     0xF800U
#define COLOR_GREEN   0x07E0U
#define COLOR_BLUE    0x001FU
#define COLOR_YELLOW  0xFFE0U
#define COLOR_CYAN    0x07FFU
#define COLOR_MAGENTA 0xF81FU
#define COLOR_ORANGE  0xFD20U

Adafruit_GC9A01A tft(TFT_CS, TFT_DC, TFT_MOSI, TFT_SCLK, TFT_RST);

static void fill_screen(uint16_t color)
{
  tft.fillScreen(color);
}

static void demo_solid_colors()
{
  static const uint16_t colors[] = {
    COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
    COLOR_GREEN, COLOR_CYAN, COLOR_BLUE, COLOR_MAGENTA,
  };

  static const char *names[] = {
    "RED", "ORANGE", "YELLOW", "GREEN", "CYAN", "BLUE", "MAGENTA",
  };

  for (int i = 0; i < 7; i++) {
    Serial.print("Solid: ");
    Serial.println(names[i]);

    fill_screen(colors[i]);
    delay(600);
  }
}

static void demo_color_bars()
{
  static const uint16_t bar_colors[] = {
    COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
    COLOR_GREEN, COLOR_BLUE, COLOR_MAGENTA,
  };

  const int BAR_W = LCD_W / 6;

  for (int i = 0; i < 6; i++) {
    tft.fillRect(i * BAR_W, 0, BAR_W, LCD_H, bar_colors[i]);
  }

  Serial.println("Color bars");
  delay(2000);
}

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Serial.println("GC9A01 demo - XIAO nRF54LM20A Arduino");

  pinMode(TFT_BL, OUTPUT);
  digitalWrite(TFT_BL, HIGH);

  tft.begin();
  tft.setRotation(0);
  tft.fillScreen(COLOR_BLACK);

  Serial.println("Display ready, starting demo loop");
}

void loop()
{
  demo_solid_colors();
  demo_color_bars();
}
```

</details>
<br/>

### Resultado

Después de subir el sketch, el programa refresca la pantalla en la secuencia de rojo, naranja, amarillo, verde, cian, azul y magenta, y luego muestra patrones de franjas de colores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:600, height:'auto'}}/></div>

La salida del Serial Monitor se muestra a continuación:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/8-spi-4.png" style={{width:600, height:'auto'}}/></div>

## Agradecimientos especiales

Agradecimientos especiales a **lolren** por contribuir con la adaptación de Arduino para XIAO nRF54LM20A. El código y el README son claros y útiles. Si deseas obtener más información sobre el uso de XIAO nRF54LM20A con Arduino, consulta los enlaces de GitHub que aparecen a continuación.

- [Repositorio del núcleo de Arduino](https://github.com/lolren/nrf54-arduino-core)
- [Página de inicio de GitHub del autor](https://github.com/lolren)


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
