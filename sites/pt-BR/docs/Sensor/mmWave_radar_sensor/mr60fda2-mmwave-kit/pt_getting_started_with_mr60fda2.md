---
description: Introdução ao Kit de Sensor de Detecção de Queda mmWave de 60GHz com XIAO ESP32C6 (MR60FDA2)
title: Introdução ao MR60FDA2
keywords:
  - mmwave
  - radar
  - MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /getting_started_with_mr60fda2_mmwave_kit
sku: 114993388
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
createdAt: '2024-08-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60fda2_mmwave_kit/
---

# Introdução ao Kit de Sensor de Detecção de Queda mmWave de 60GHz com XIAO ESP32C6 (MR60FDA2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div><br />

Apresentamos nossos avançados **Módulos de Sensor mmWave** para XIAO, projetados para fornecer soluções de monitoramento de ponta tanto para detecção de quedas quanto para monitoramento de [batimentos cardíacos](https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60bha2_mmwave_kit/). Alimentados pelo robusto microcontrolador XIAO ESP32 com conectividade Wi-Fi e Bluetooth integrada, esses módulos oferecem capacidades de detecção precisas e confiáveis. Seja para monitorar quedas em tempo real ou rastrear batimentos cardíacos com alta sensibilidade, nossos módulos são equipados com tecnologia de última geração, incluindo LEDs RGB personalizáveis e detecção de luz ambiente. Com opções de expansão fáceis por meio das portas Grove GPIO, esses módulos versáteis são perfeitos para uma ampla gama de aplicações, desde integração em casas inteligentes até monitoramento de saúde.

## Recursos

- **Wi-Fi e Bluetooth Ativados**: Ambos os módulos são alimentados pelo XIAO ESP32 com firmware ESPHome pré-gravado, garantindo configuração e personalização rápidas.
- **Módulo de Detecção de Queda**:
  - **Detecção de Queda Precisa**: Cobre uma área de 3x3x3 metros com um ângulo de detecção de 100° x 40°.
  - **Detecção de Presença Estática**: Monitora indivíduos parados a até 6 metros de distância.

<!-- - **Heartbeat Detection Module**:
  - **Sensitive Heartbeat Monitoring**: Detects heartbeats from up to 1.5 meters.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->

- **Sensoriamento Ambiental**:
  - **Sensor de Luz BH1750**: Mede a luz ambiente de 1 a 65.535 lux.
  - **LED RGB WS2812**: LED personalizável para feedback visual e projetos DIY.
- **Conectividade Expansível**: Inclui portas Grove GPIO para adicionar sensores e módulos adicionais.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## Especificações

| **Parâmetros Gerais**   |                                      |
| ------------------------ | ------------------------------------ |
| **Firmware mmWave**      | Monitoramento de Detecção de Queda |
| **Faixa de Detecção**      | Detecção de Presença Humana Estática: até 6 metros<br />Detecção de Queda: <br />- faixa de 3x3x3 metros<br />- Campo de Visão (FoV) Horizontal de 120°<br />- FoV Vertical de 100° |
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | LED RGB WS2812 |
| **Botão**               | Reset |
| **Sensor de Luz**         | BH1750 Faixa: 1 a 65.535 lux com medições ajustáveis até 100.000 lux |
| **Conectividade**         | 1 Porta GPIO (D0, D10) |
| **Espaçamento do Header de Pinos**   | 2,54 mm |
| **Fonte de Alimentação**         | Entrada 5V/1A |
| **Consumo de Energia**    | 0,5 W: Modo de Espera<br />0,8 W: Modo de Ativação<br />1,4 W: funcionando com status do Grove Relay |

## Aplicações

- Sistemas de Segurança
- Monitoramento de Saúde
- Automação Residencial Inteligente
- Cuidados com Idosos

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## Visão Geral do Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## Primeiros Passos

### Método de instalação e faixa de detecção

Altura de montagem superior suspensa de 2,2–3,0 m, raio máximo de detecção de 2 m; o lado com o sensor mmWave precisa estar alinhado com a direção de detecção.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_installation.png" style={{width:600, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/top_detect_distant.png" style={{width:600, height:'auto'}}/></div>

:::note
Use este módulo em um espaço aberto e evite os seguintes cenários dentro da faixa de detecção para impedir interferências com o módulo:

- Múltiplos radares instalados muito próximos  
- Vento que movimenta cortinas e balança plantas
- Fluxo de água e película de água  
- Grandes áreas metálicas e reflexos de espelhos  
- Detecção através de vidro e tábuas finas de madeira  
- Local de instalação sujeito a vibrações  
- Uso de fontes de alimentação de baixa qualidade  

:::

### Preparação de Software (Arduino)

:::info Atenção

Por padrão, o MR60BHA2 vem pré-montado com o [XIAO ESP32C6](/pt-br/xiao_esp32c6_getting_started), mas é compatível com vários outros microcontroladores para comunicação e integração.

:::

Se esta é a sua primeira vez usando o Arduino com a série XIAO, siga o guia de configuração apropriado para sua placa:

- **XIAO ESP32S3**: Consulte o [Guia de Introdução ao XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/).
- **XIAO ESP32C3**: Siga o guia [Introdução ao Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/).
- **XIAO ESP32C6**: Siga o guia [Introdução ao Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/).

Depois que sua placa estiver configurada, prossiga com as seguintes etapas:

1. **Baixe a Biblioteca Seeed mmWave**:
   - Baixe a [biblioteca Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library) do GitHub.

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Instale a Biblioteca na Arduino IDE**:
   - Abra a Arduino IDE.
   - Navegue até **Sketch > Include Library > Add .ZIP Library...**.
   - Selecione o arquivo `.zip` baixado para instalar a biblioteca.
3. **Conecte Sua Placa XIAO**:
   - Conecte sua placa XIAO ao computador via USB.
   - Na Arduino IDE, vá em **Tools > Board** e selecione o modelo da sua placa XIAO.
   - Escolha a porta correta em **Tools > Port**.
4. **Carregue um Sketch de Exemplo**:
   - Vá em **File > Examples > Seeed Arduino mmWave**.
   - Selecione o exemplo relevante para Detecção de Queda.
   - Revise o código e faça os ajustes necessários.
5. **Envie o Sketch**:
   - Clique em **Upload** para gravar o código na sua placa XIAO.
   - Abra o **Serial Monitor** na Arduino IDE para visualizar os dados do sensor em tempo real.

<!-- ## Hardware Connections -->

### Uso

Esta seção fornece trechos de código de exemplo para ajudar você a começar rapidamente a usar a Biblioteca Seeed Arduino mmWave com várias funcionalidades, incluindo detecção de quedas, controle de LED RGB e detecção de luz.

<!-- 
### Breath Module

This example demonstrates how to use the **MR60BHA2** sensor for monitoring breathing and heartbeat.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// Set up serial communication depending on the board type
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60BHA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);
}

void loop() {
if (mmWave.update(100)) {
 float total_phase, breath_phase, heart_phase;
 if (mmWave.getHeartBreathPhases(total_phase, breath_phase, heart_phase)) {
   Serial.printf("total_phase: %.2f\t", total_phase);
   Serial.printf("breath_phase: %.2f\t", breath_phase);
   Serial.printf("heart_phase: %.2f\n", heart_phase);
 }

 float breath_rate;
 if (mmWave.getBreathRate(breath_rate)) {
   Serial.printf("breath_rate: %.2f\n", breath_rate);
 }

 float heart_rate;
 if (mmWave.getHeartRate(heart_rate)) {
   Serial.printf("heart_rate: %.2f\n", heart_rate);
 }

 float distance;
 if (mmWave.getDistance(distance)) {
   Serial.printf("distance: %.2f\n", distance);
 }
}
}
``` -->

#### Módulo de Queda

Este exemplo mostra como usar o sensor **MR60FDA2** para detecção de quedas.

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>
#include <hp_BH1750.h>  //inlude the library
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmwaveSerial(0);
#else
#  define mmwaveSerial Serial1
#endif

#define LIGHT_GPIO D0

/****** instance ******/

hp_BH1750 BH1750;  // create the sensor object

SEEED_MR60FDA2 mmWave;

Adafruit_NeoPixel pixels =
    Adafruit_NeoPixel(1, /* pixelPin */ D1, NEO_GRB + NEO_KHZ800);

/****** funtions ******/

void relay_init();
void relay_on();
void relay_off();

/****** variables ******/
uint32_t sensitivity = 15;
float height = 2.8, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

const uint8_t dark_lux = 10;

void setup() {
  bool result;
  Serial.begin(115200);
  mmWave.begin(&mmwaveSerial);
  /* init relay device*/
  relay_init();

  /* init RGB LED */
  pixels.begin();
  pixels.clear();
  pixels.setBrightness(8);
  pixels.show();
  pixels.setPixelColor(0, pixels.Color(125, 125, 125));
  /* init built-in light ambient light sensor */
  BH1750.begin(BH1750_TO_GROUND);  // will be false no sensor found
                                   // | already connected to I2C
  BH1750.calibrateTiming();
  BH1750.start(BH1750_QUALITY_HIGH2,
               254);  // start the first measurement in setup
  /* set mmwave-fall parameters */
  mmWave.setUserLog(0);

  /** set the height of the installation **/
  if (mmWave.setInstallationHeight(height)) {
    Serial.printf("setInstallationHeight success: %.2f\n", height);
  } else {
    Serial.println("setInstallationHeight failed");
  }

  /** Set threshold **/
  if (mmWave.setThreshold(threshold)) {
    Serial.printf("setThreshold success: %.2f\n", threshold);
  } else {
    Serial.println("setThreshold failed");
  }

  /** Set sensitivity **/
  if (mmWave.setSensitivity(sensitivity)) {
    Serial.printf("setSensitivity success %d\n", sensitivity);
  } else {
    Serial.println("setSensitivity failed");
  }

  /** get new parameters of mmwave **/
  if (mmWave.getRadarParameters(height, threshold, sensitivity, rect_XL,
                                rect_XR, rect_ZF, rect_ZB)) {
    Serial.printf("height: %.2f\tthreshold: %.2f\tsensitivity: %d\n", height,
                  threshold, sensitivity);
    Serial.printf(
        "rect_XL: %.2f\trect_XR: %.2f\trect_ZF: %.2f\trect_ZB: %.2f\n", rect_XL,
        rect_XR, rect_ZF, rect_ZB);
  } else {
    Serial.println("getRadarParameters failed");
  }
}

typedef enum {
  EXIST_PEOPLE,
  NO_PEOPLE,
  PEOPLE_FALL,
} MMWAVE_STATUS;

MMWAVE_STATUS status = NO_PEOPLE, last_status = NO_PEOPLE;
float lux = 100;
void loop() {
  /* get status */
  if (mmWave.update(100)) {
    bool is_human, is_fall;
    // Get the human detection status
    if (mmWave.getHuman(is_human)) {
      // Get the fall detection status
      if (mmWave.getFall(is_fall)) {
        // Determine the status based on human and fall detection
        if (!is_human && !is_fall) {
          status = NO_PEOPLE;  // No human and no fall detected
        } else if (is_fall) {
          status = PEOPLE_FALL;  // Fall detected
        } else {
          status = EXIST_PEOPLE;  // Human detected without fall
        }
      }
    }
    // Get the human detection status
    if (!mmWave.getHuman(is_human) && !mmWave.getFall(is_fall)) {
      status = NO_PEOPLE;  // No human and no fall detected
    } else if (is_fall) {
      status = PEOPLE_FALL;  // Fall detected
    } else {
      status = EXIST_PEOPLE;  // Human detected without fall
    }
  }

  switch (status) {
    case NO_PEOPLE:
      Serial.printf("Waiting for people");
      break;
    case EXIST_PEOPLE:
      Serial.printf("PEOPLE !!!");
      break;
    case PEOPLE_FALL:
      Serial.printf("FALL !!!");
      break;
    default:
      break;
  }
  Serial.print("\n");

  /* change interactive Light*/
  if (status != last_status) {  // switching LED
    switch (status) {
      case NO_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 0, 255));  // BLUE
        break;
      case EXIST_PEOPLE:
        pixels.setPixelColor(0, pixels.Color(0, 255, 0));  // GREEN
        break;
      case PEOPLE_FALL:
        pixels.setPixelColor(0, pixels.Color(255, 0, 0));  // RED
        break;
      default:
        break;
    }
    pixels.show();
    last_status = status;
  }

  /* update lux value */
  if (BH1750.hasValue() == true) {
    lux = BH1750.getLux();
    BH1750.start(BH1750_QUALITY_HIGH2, 254);
  }

  Serial.print("LUX: ");
  Serial.print(lux);
  Serial.print("\t");

  if ((status == EXIST_PEOPLE || status == PEOPLE_FALL) && lux < dark_lux) {
    relay_on();
  } else {
    relay_off();
  }
}

void relay_init() {
  pinMode(LIGHT_GPIO, OUTPUT);
}
void relay_on() {
  digitalWrite(LIGHT_GPIO, HIGH);
}
void relay_off() {
  digitalWrite(LIGHT_GPIO, LOW);
}
```

A saída será a seguinte no Monitor Serial do Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/fall_detection.png" style={{width:700, height:'auto'}}/></div>

#### Piscar LED RGB

Este exemplo demonstra como controlar um LED RGB usando a biblioteca NeoPixel.

- **Passo 1.** Baixe a biblioteca `Adafruit_NeoPixel`

Navegue até **Sketch > Include Liarbry > Manage Libraries...**, e pesquise por **Adafruit_NeoPixel**, instale a versão mais recente.

- **Passo 2.** Copie o seguinte código para um novo sketch:

```cpp
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>

const int pixelPin = D1;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(1, pixelPin, NEO_GRB + NEO_KHZ800);

void setup() {
Serial.begin(115200);
pixels.begin();
pixels.clear();
pixels.show();
}

void loop() {
for (int i = 0; i < 10; i++) {
 pixels.setPixelColor(0, pixels.Color(255, 0, 0));
 pixels.show();
 delay(100);
 pixels.setPixelColor(0, pixels.Color(0, 0, 0));
 pixels.show();
 delay(100);
}

for (int i = 255; i >= 0; i--) {
 pixels.setPixelColor(0, pixels.Color(i, 0, 0));
 pixels.show();
 delay(10);
}
}
```

- **Passo 3.** Selecione a placa correta e o número da porta para fazer o upload do programa.

Quando o programa for carregado com sucesso, você verá o LED RGB no lado direito dos módulos de sensor mmWave piscando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### Sensor de Luz (BH1750)

Este exemplo mostra como ler valores de intensidade de luz usando o sensor BH1750.

- **Passo 1.** Baixe a biblioteca `hp_BH1750`

Navegue até **Sketch > Include Liarbry > Manage Libraries...**, e pesquise por **hp_BH1750**, instale a versão mais recente.

- **Passo 2.** Copie o seguinte código para um novo sketch:

```cpp
#include <Arduino.h>
#include <hp_BH1750.h>

hp_BH1750 BH1750;

void setup() {
Serial.begin(9600);

bool avail = BH1750.begin(BH1750_TO_GROUND);

if (!avail) {
 Serial.println("No BH1750 sensor found!");
 while (true) {}
}

Serial.printf("conversion time: %dms\n", BH1750.getMtregTime());
BH1750.start();
}

void loop() {
if (BH1750.hasValue()) {
 float lux = BH1750.getLux();
 Serial.println(lux);

 BH1750.start();
}
}
```

- **Passo 3.** Selecione a placa correta e o número da porta para fazer o upload do programa.

A saída será a seguinte no Monitor Serial do Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

<!-- 
### Breath Module API

This example uses the `SEEED_MR60BHA2` class to interface with the MR60BHA2 sensor for heart and breath monitoring. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**: 
  - Initializes the sensor for communication using the specified serial interface. It sets up the connection between the XIAO board and the MR60BHA2 sensor.

- **`mmWave.update(100)`**:
  - Updates the sensor data. The parameter `100` is a timeout value in milliseconds, specifying how long to wait for the sensor to provide new data. If new data is available within this timeframe, the function returns `true`.

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - Retrieves the phase information related to heart and breath activities. 
  - `total_phase` represents the overall phase shift, while `breath_phase` and `heart_phase` are specific to breathing and heartbeat activities, respectively.

- **`mmWave.getBreathRate(float &rate)`**:
  - Fetches the current breath rate detected by the sensor. The rate is returned in the reference variable `rate`.

- **`mmWave.getHeartRate(float &rate)`**:
  - Retrieves the current heart rate detected by the sensor. The rate is returned in the reference variable `rate`.

- **`mmWave.getDistance(float &distance)`**:
  - Gets the distance from the sensor to the detected object (e.g., human body). This function is useful for understanding the range of the detected signal. -->

## API do módulo de detecção de queda

Este exemplo usa a classe `SEEED_MR60FDA2` para se comunicar com o sensor MR60FDA2 para detecção de quedas. Aqui está o que cada função principal faz:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Inicializa o sensor para comunicação, configurando a conexão serial entre a placa XIAO e o sensor MR60FDA2.

- **`mmWave.setInstallationHeight(float height)`**:
  - Define a altura de instalação do radar, o que é crucial para a detecção precisa de quedas. O parâmetro `height` especifica a altura (em metros) na qual o sensor é instalado, o parâmetro de configuração de inicialização é `2.2 m`, com um intervalo válido normalmente entre 1 e 5 metros.

- **`mmWave.setThreshold(float threshold)`**:
  - Define o limite de detecção de queda. O limite de queda padrão do radar é `0.6 m`. Esse valor determina a sensibilidade do radar em termos de detecção de quedas com base na altura e na distância em relação ao sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Ajusta a sensibilidade do radar para detecção de quedas. O valor inicial de sensibilidade é `3`, que representa uma média de 3 quadros de dados. E o valor normalmente varia de 3 a 10, com valores mais altos tornando o sensor mais responsivo a possíveis quedas.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Obtém os parâmetros atuais de configuração do radar, incluindo altura de instalação, limite de detecção de queda e configurações de sensibilidade. Esses parâmetros são retornados por meio das variáveis de referência.

- **`mmWave.getHuman()`**:
  - Verifica se uma presença humana é detectada pelo radar. Retorna `true` se um humano for detectado, e `false` caso contrário.

- **`mmWave.getFall()`**:
  - Determina se uma queda foi detectada. Esta função retorna `true` se uma queda for detectada e `false` se não for.

## Atualização de firmware do módulo

:::caution
Modificar o firmware do radar é uma operação arriscada, portanto, certifique-se de ler esta seção com atenção antes de seguir cada passo cuidadosamente. Esteja ciente de que, se um passo não for executado corretamente, o radar poderá ficar inutilizável (bricked).

**Observação especial, se você comprou o Radar MR60BHA2, não faça o flash do firmware ilegalmente da maneira a seguir, isso certamente deixará seu dispositivo inutilizável!!!!**
:::

Primeiro, conecte os módulos XIAO ESP32C6 e MR60FDA2 juntos. Em seguida, use o código a seguir para programar o XIAO.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

// If the board is an ESP32, include the HardwareSerial library and create a
// HardwareSerial object for the mmWave serial communication
#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
// Otherwise, define mmWaveSerial as Serial1
#  define mmWaveSerial Serial1
#endif

void setup() {
  // Initialize the serial communication for debugging
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for Serial to initialize
  }

  // Initialize the mmWaveSerial communication
  mmWaveSerial.begin(115200);
}

void loop() {
  // Check if there is data available from mmWaveSerial
  while (mmWaveSerial.available() > 0) {
    char receivedChar = mmWaveSerial.read();
    Serial.write(receivedChar); // Forward data to Serial
  }

  // Check if there is data available from Serial
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    mmWaveSerial.write(receivedChar); // Forward data to mmWaveSerial
  }
}
```

:::tip
A função do código acima é transmitir transparentemente a porta serial do módulo para a porta serial USB do XIAO, de modo a atualizar o firmware do módulo através do XIAO.  
Por favor, conecte o XIAO ao seu PC durante o processo de atualização.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

Você verá os dados originais enviados pelo módulo.

Em seguida, você precisa baixar e descompactar a ferramenta OTA e o firmware aqui.

- **Ferramenta de atualização de firmware MR60FDA2**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **Firmware MR60FDA2 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)

1. Verifique e conecte-se à porta serial (defina a taxa de baud para 115200)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. Clique em "REQUEST UPDATE" para entrar no modo de atualização:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. Se "C" ou "43" for impresso, significa que o módulo entrou no modo de atualização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. Selecione o firmware a ser atualizado. Após a seleção, ele entrará automaticamente no estado de atualização.

Após a conclusão da atualização, ele pulará automaticamente para o modo normal. Se não pular, desligue e reinicie, e então use a ferramenta OTA para visualizar os dados da porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file-fda2.png" style={{width:700, height:'auto'}}/></div>

5. Após a conclusão da atualização, você pode usar a ferramenta OTA para ler a versão e os dados brutos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done-fda2.png" style={{width:700, height:'auto'}}/></div>

6. Você precisa regravar o firmware do XIAO ESP32C6 após a conclusão da atualização.

:::tip
Se, nas etapas acima, você tiver operado de forma incorreta, causando uma anomalia e não conseguir tentar gravar o firmware novamente, e o radar não estiver funcionando corretamente, então o radar pode ter sido “bricado” devido a firmware corrompido. A única maneira de tentar recuperar o dispositivo é consultar os arquivos e a documentação **[here](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**. No entanto, por favor, entenda que não fornecemos suporte técnico e assistência para dispositivos “bricados” devido a operação incorreta.
:::

## Aberto para Customização

Quer criar um kit sob medida para se adequar às suas aplicações exclusivas?

Para mais informações sobre geração de dados de nuvem de pontos 3D e configuração de zonas de interferência ao personalizar módulos mmWave. A Seeed oferece serviços completos de P&D, customização e fabricação para um desenvolvimento rápido, do conceito à produção. Entre em contato conosco em [iot@seeed.cc](mailto:iot@seeed.cc) para saber mais.

:::danger Descrição do Serviço Personalizado
O firmware e os algoritmos do radar não são open source, e parâmetros complexos do radar, como configurações de altura de queda, configurações de posição de montagem, etc., exigem serviços personalizados, que podem envolver taxas de customização adicionais e MOQs.
:::

## Recursos

- **STL**: [Case 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositório GitHub**: Acesse toda a base de código e documentação na [página Seeed mmWave Library no GitHub](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentação ESPHome**: Para mais customização e integração, consulte a [documentação do ESPHome](https://esphome.io/).
- **Ferramenta de atualização de firmware MR60FDA2**: [MR60FDA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_OTA.zip)
- **Firmware MR60FDA2 v4.0.18**: [MR60FDA2_eeprom_v4.0.18.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60FDA2_eeprom_v4.0.18.bin)
- **Software GUI MR60FDA2**: [Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60FDA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificação Técnica do Módulo MR60FDA2**: [MR60FDA2_Fall_Detection_Module_Datasheet.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60FDA2_Fall_Detection_Module_Datasheet.pdf)
- **Manual de Interface Tiny Frame MR60FDA2**: [Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_TinyFrame_Interface_Fall_detection_V1.1.pdf)
- **Método de Recuperação de Firmware do Radar via Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
