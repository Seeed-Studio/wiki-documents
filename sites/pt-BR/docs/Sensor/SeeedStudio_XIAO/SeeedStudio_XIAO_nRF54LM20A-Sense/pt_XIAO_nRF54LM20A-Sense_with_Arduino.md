---
title: XIAO nRF54LM20A Sense com Arduino
description: Este artigo apresenta como desenvolver com o Seeed Studio XIAO nRF54LM20A Sense usando a IDE Arduino.
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
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_arduino/
---

# Seeed Studio XIAO nRF54LM20A Sense com Arduino

Esta seção orienta você pela preparação de hardware e software necessária para o desenvolvimento com Arduino. Seguindo as etapas abaixo, você configurará seu ambiente de desenvolvimento, ajustará a IDE Arduino e preparará sua placa XIAO para programação. Quando a configuração estiver concluída, você poderá compilar, enviar e testar rapidamente os sketches de exemplo fornecidos.

## Introdução

### Preparação de hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

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
                  Adquira agora 🖱️
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

O XIAO nRF54LM20A oferece suporte ao desenvolvimento com a IDE Arduino. Antes de começar, instale e configure a IDE Arduino.

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que consulte [Introdução ao Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

- **Passo 1.** Baixe e instale a versão estável da IDE Arduino de acordo com o seu sistema operacional.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Passo 2.** Inicie o aplicativo Arduino.

- **Passo 3.** Abra **Arduino IDE** > **Settings**, encontre **Additional Boards Manager URLs** e adicione a seguinte URL:

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **Passo 4.** Vá em **Tools** > **Board** > **Boards Manager**, procure por **nRF54L15 Boards** e instale.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **Passo 5.** Após conectar a placa, selecione a seguinte placa na IDE Arduino:

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### Enviar programa

O exemplo a seguir usa um programa simples de piscar LED.

**Passo 1.** Selecione o código de exemplo **Blink** para teste.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Clique em **Upload** para compilar e enviar o sketch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

Demonstração do efeito:

Depois de enviar o programa e pressionar o botão de reset, o indicador L piscará em intervalos de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>



## Digital

Pinos digitais são comumente usados para controlar sensores e atuadores externos alternando entre níveis lógicos alto e baixo. Esta seção usa um Grove Button e um Grove Buzzer com o Grove Base for XIAO para demonstrar a entrada e saída digital básicas no XIAO nRF54LM20A.

### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A, **D0 / P1.00** pode ser usado para o Grove Button e **D1 / P1.31** pode ser usado para o Grove Buzzer.

:::tip

- Para o pinout do XIAO nRF54LM20A, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver os detalhes.

:::

Crie um novo sketch Arduino e envie o código a seguir.

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

Depois de enviar o sketch, pressione o botão. O buzzer irá apitar e o Serial Monitor exibirá o status do botão e do buzzer.

:::tip

Defina a taxa de baud do Serial Monitor para **115200**.

:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.png" style={{width:800, height:'auto'}}/></div>

## PWM

PWM gera uma forma de onda digital temporizada em uma frequência fixa e altera o ciclo de trabalho para aproximar um sinal de controle analógico. É comumente usado para controle de ângulo de servo, ajuste de brilho de LED, controle de velocidade de motor e outras aplicações que precisam de controle de saída suave.

### Preparação de hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A, **D0 / P1.00** pode ser usado como pino de controle PWM para o **Grove Servo**.

:::tip

- Para o pinout do XIAO nRF54LM20A, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver detalhes.

:::

Crie um novo sketch Arduino para implementar o controle de servo por PWM e configurar parâmetros como o período do PWM.

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

Após o upload do sketch, o servo gira de 0° a 180° a cerca de 33 graus por segundo e depois gira de volta para 0°.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_1.gif" style={{width:800, height:'auto'}}/></div>

Enquanto isso, o ângulo atual do servo será impresso via porta serial USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_2.png" style={{width:800, height:'auto'}}/></div>

## Analógico

A entrada analógica é baseada em um conversor analógico-digital (ADC), que converte uma tensão contínua de um sensor externo em um valor digital. O valor bruto do ADC pode então ser mapeado para medições práticas, como umidade do solo, tensão da bateria ou temperatura.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A, **A0 / P1.00** pode ser usado como um pino de entrada analógica.

:::tip

- Para o pinout do XIAO nRF54LM20A, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver detalhes.

:::

Crie um novo sketch Arduino, leia o valor analógico de **A0 / P1.00** e imprima o valor bruto do ADC pela serial USB a cada 500 ms.

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

Após gravar o programa, insira o Grove-Capacitive Soil Moisture Sensor em plantas de vaso domésticas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_3.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
Abra o assistente de porta serial no seu computador e observe os valores de saída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

Tabela de leitura de referência de tensão
| Status     | Tensão de saída do sensor | Valor bruto de ADC esperado|
| -------------- | -------------- | ---------------- |
| No ar (seco) | ~2.0–2.4V      | ~3400–4095       |
| Em solo úmido       | ~1.3–1.8V      | ~2200–3000       |
| Totalmente imerso em água   | ~0.8–1.2V      | ~1365–2048       |

:::

:::caution

Devido a diferenças individuais nos componentes, medições de módulos diferentes no mesmo ambiente podem variar.

:::

## UART

O receptor/transmissor assíncrono universal (UART) é um protocolo serial assíncrono padrão. Ele não requer um clock compartilhado; ambos os dispositivos se comunicam usando a mesma taxa de baud configurada. Com TX e RX conectados de forma cruzada e GND compartilhado, o UART fornece um link full-duplex simples para logs de console, depuração de módulos e comunicação ponto a ponto de baixa largura de banda.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A, **D6 / P1.08** e **D7 / P1.09** podem ser usados como pinos TX e RX para comunicação UART externa.

:::tip

- Para o pinout do XIAO nRF54LM20A, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver detalhes.

:::

Crie um novo sketch Arduino. O exemplo envia uma mensagem de inicialização através do UART externo, ecoa os caracteres recebidos e imprime periodicamente uma mensagem de heartbeat.

<details>

<summary>Sketch Arduino</summary>

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

1. Faça a fiação de acordo com a ordem da tabela

| XIAO nRF54LM20A | CH340 |
| --------------- | ----- |
| VBUS            | 5V    |
| GND             | GND   |
| P1.08 - TX      | RX    |
| P1.09 - RX      | TX    |

2. Abra o software de monitoramento de porta serial no seu computador. A UART externa imprimirá as informações dos pinos configurados na inicialização. Por padrão, a string `[Heartbeat #number] UART running...` será impressa periodicamente. Se você digitar caracteres na ferramenta serial externa e pressionar Enter, a placa irá ecoar a linha recebida.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_uart_1.png" style={{width:800, height:'auto'}}/></div>

## I2C

I2C é um protocolo de comunicação síncrono e half-duplex que utiliza duas linhas: SDA para dados e SCL para clock. Vários dispositivos podem compartilhar o mesmo barramento por meio de endereçamento, tornando o I2C uma escolha comum para sensores, IMUs, módulos de temperatura e umidade e pequenos displays OLED.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Placa de expansão base Seeed Studio para XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

De acordo com o pinout do XIAO nRF54LM20A, **D4 / P1.03** e **D5 / P1.07** podem ser configurados como pinos I2C SDA e SCL.

:::tip

- Para o pinout do XIAO nRF54LM20A, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver os detalhes.

:::

1. Instale as seguintes bibliotecas em **Arduino IDE** > **Tools** > **Manage Libraries...**:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/11.png" style={{width:400, height:'auto'}}/></div>

- Adafruit SSD1306
- Adafruit GFX Library
- Adafruit BusIO

2. Crie um novo sketch Arduino para inicializar o OLED e exibir texto.

<details>

<summary>Sketch Arduino</summary>

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

Após a execução do programa, o texto **Hello XIAO nRF54LM20A** será exibido no OLED, e o status de inicialização será impresso pela porta serial USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_mux_5.jpg" style={{width:800, height:'auto'}}/></div>

## SPI

SPI é um protocolo de comunicação síncrono, full-duplex e de alta velocidade. Ele utiliza uma linha SCLK dedicada para temporização, linhas MOSI e MISO para dados e uma linha CS/SS para selecionar o dispositivo alvo. Como o SPI pode fornecer alta taxa de transferência com hardware simples, ele é amplamente utilizado para armazenamento flash, cartões SD, displays de alta taxa de atualização e sensores de alta velocidade.

### Preparação de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
        <th>Round Display para Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparação de software

:::tip

- Para o pinout do XIAO nRF54LM20A, clique em [XIAO nRF54LM20A Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver os detalhes.

:::

1. Instale as seguintes bibliotecas em **Arduino IDE** > **Tools** > **Manage Libraries...**:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/10.png" style={{width:400, height:'auto'}}/></div>

- Adafruit GC9A01A
- Adafruit GFX Library
- Adafruit BusIO

2. Crie um novo sketch Arduino e escreva a lógica de preenchimento de tela com cor sólida.

<details>

<summary>Sketch Arduino</summary>

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

Após enviar o sketch, o programa atualiza a tela na sequência vermelho, laranja, amarelo, verde, ciano, azul e magenta, e então exibe padrões listrados coloridos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:600, height:'auto'}}/></div>

A saída do Serial Monitor é mostrada abaixo:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/8-spi-4.png" style={{width:600, height:'auto'}}/></div>

## Agradecimentos especiais

Agradecimentos especiais a **lolren** por contribuir com a adaptação do Arduino para o XIAO nRF54LM20A. O código e o README são claros e úteis. Se você quiser saber mais sobre o uso do XIAO nRF54LM20A com Arduino, consulte os links do GitHub abaixo.

- [Repositório do Arduino Core](https://github.com/lolren/nrf54-arduino-core)
- [Página inicial do autor no GitHub](https://github.com/lolren)


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
