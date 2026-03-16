---
description: Introdução ao Kit de Sensor de Detecção de Respiração e Batimentos Cardíacos mmWave de 60 GHz com XIAO ESP32C6 (MR60BHA2)
title: Introdução ao MR60BHA2
keywords:
  - mmwave
  - radar
  - MR60BHA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg
slug: /getting_started_with_mr60bha2_mmwave_kit
sku: 114993387
sidebar_position: 0
last_update:
  date: 08/19/2024
  author: Spencer
createdAt: '2024-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60bha2_mmwave_kit/
---

# Introdução ao Kit de Sensor de Detecção de Respiração e Batimentos Cardíacos mmWave de 60 GHz com XIAO ESP32C6 (MR60BHA2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2.jpg" style={{width:500, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div><br />

Apresentamos nossos avançados **Módulos de Sensor mmWave** para XIAO, projetados para fornecer soluções de monitoramento de ponta tanto para [detecção de quedas](https://wiki.seeedstudio.com/pt-br/getting_started_with_mr60fda2_mmwave_kit/) quanto para monitoramento de batimentos cardíacos. Alimentados pelo robusto microcontrolador XIAO ESP32 com conectividade Wi-Fi e Bluetooth integrada, esses módulos oferecem capacidades de detecção precisas e confiáveis. Seja para monitorar quedas em tempo real ou acompanhar batimentos cardíacos com alta sensibilidade, nossos módulos são equipados com tecnologia de última geração, incluindo LEDs RGB personalizáveis e detecção de luz ambiente. Com opções fáceis de expansão por meio de portas Grove GPIO, esses módulos versáteis são perfeitos para uma ampla gama de aplicações, desde integração em casas inteligentes até monitoramento de saúde.

## Recursos

- **Wi-Fi e Bluetooth habilitados**: Ambos os módulos são alimentados pelo XIAO ESP32 com firmware ESPHome pré-gravado, garantindo configuração rápida e personalização.
<!-- - **Fall Detection Module**:
  - **Precise Fall Detection**: Covers a 3x3x3 meter area with a 100° x 40° detection angle.
  - **Static Presence Detection**: Monitors stationary individuals up to 6 meters away. -->
- **Módulo de Detecção de Batimentos Cardíacos**:
  - **Monitoramento sensível de batimentos cardíacos**: Detecta batimentos cardíacos a até 1,5 metros.
  - **Detecção de presença estática**: Monitora indivíduos parados a até 6 metros de distância.
- **Sensoriamento ambiental**:
  - **Sensor de Luz BH1750**: Mede a luz ambiente de 1 a 65.535 lux.
  - **LED RGB WS2812**: LED personalizável para feedback visual e projetos DIY.
- **Conectividade expansível**: Inclui portas Grove GPIO para adição de sensores e módulos adicionais.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/human-caring.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/environmental-inductor.jpg" style={{height:'auto', "border-radius": '3.8px'}}/></div> -->

## Especificações

| **Parâmetros gerais**   |                                      |
| ------------------------ | ------------------------------------ |
| **Firmware mmWave**      | Detecção de respiração e batimentos cardíacos |
| **Faixa de detecção**      | Detecção de presença humana estática: até 6 metros<br />Detecção de respiração e batimentos cardíacos: 1,5 metro|
| **MCU**                  | Seeed Studio XIAO ESP32C6 |
| **LED**                  | LED RGB WS2812 |
| **Botão**               | Reset |
| **Sensor de luz**         | BH1750 Faixa: de 1 a 65.535 lux com medições ajustáveis até 100.000 lux |
| **Conectividade**         | 1 porta GPIO (D0, D10) |
| **Espaçamento do cabeçalho de pinos**   | 2,54 mm |
| **Fonte de alimentação**         | Entrada 5V/1A |
| **Consumo de energia**    | 0,5 W: modo de espera<br />0,8 W: modo de ativação<br />1,4 W: funcionamento com estado do Grove Relay |

## Aplicações

- Sistemas de segurança
- Monitoramento de saúde
- Automação residencial inteligente
- Cuidados com idosos

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/application.jpg" style={{width:'auto', height:'auto', "border-radius": '2.8px'}}/></div> -->

## Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/hardware-overview.jpg" style={{"border-radius": '12.8px'}}/></div><br />

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/6-mmWave-size.jpg" style={{width:'auto', height:'auto', "border-radius": '6.6px'}}/></div> -->

## Primeiros passos

### Método de instalação e faixa de detecção

:::caution
Recomenda-se que o radar mais recente de respiração e frequência cardíaca seja utilizado apenas em cenários de sono. Evite utilizar as funções de respiração e frequência cardíaca do radar enquanto estiver sentado à escrivaninha ou durante exercícios, pois isso pode resultar em imprecisões significativas.
:::

Instalação inclinada. Para necessidades de detecção de respiração e frequência cardíaca durante o sono, pode-se adotar um método de instalação inclinada. O radar deve ser instalado a uma altura de 1 m diretamente acima da cabeceira da cama, inclinado para baixo em 45° em direção ao meio da cama, e a distância entre o radar e a cavidade torácica deve ser mantida dentro de 1,5 m. A direção normal do radar deve estar alinhada com a posição principal de detecção para garantir que o radar consiga detectar os dados de respiração e batimentos cardíacos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/tilt_installation.png" style={{width:600, height:'auto'}}/></div>

:::note
Use este módulo em um espaço aberto e mantenha-o afastado dos seguintes cenários dentro da faixa de detecção para evitar interferências no módulo:

- Vários radares instalados muito próximos uns dos outros  
- Vento movimentando cortinas e balançando plantas
- Fluxo de água e película de água  
- Grandes áreas de metal e reflexos de espelhos  
- Detecção através de vidro e tábuas finas de madeira  
- Local de instalação sujeito a vibrações  
- Uso de fontes de alimentação de baixa qualidade  

:::

### Preparação de software (Arduino)

:::info Atenção

Por padrão, o MR60BHA2 vem pré-montado com o [XIAO ESP32C6](/pt-br/xiao_esp32c6_getting_started), mas é compatível com vários outros microcontroladores para comunicação e integração.

:::

Se esta é a sua primeira vez usando Arduino com a série XIAO, siga o guia de configuração apropriado para sua placa:

- **XIAO ESP32S3**: Consulte o [Guia de Introdução ao XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/).
- **XIAO ESP32C3**: Siga o guia [Introdução ao Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/).
- **XIAO ESP32C6**: Siga o guia [Introdução ao Seeed Studio XIAO ESP32C6](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/).

Depois que sua placa estiver configurada, prossiga com as seguintes etapas:

1. **Baixe a biblioteca Seeed mmWave**:

   - Baixe a [biblioteca Seeed mmWave](https://github.com/Love4yzp/Seeed-mmWave-library) do GitHub.

  <div class="github_container" style={{textAlign: 'center'}}>
      <a class="github_item" href="https://github.com/Love4yzp/Seeed-mmWave-library" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
      </a>
  </div>
2. **Instale a biblioteca na IDE Arduino**:
   - Abra a IDE Arduino.
   - Navegue até **Sketch > Include Library > Add .ZIP Library...**.
   - Selecione o arquivo `.zip` baixado para instalar a biblioteca.
3. **Conecte sua placa XIAO**:
   - Conecte sua placa XIAO ao computador via USB.
   - Na IDE Arduino, vá em **Tools > Board** e selecione o modelo da sua placa XIAO.
   - Escolha a porta correta em **Tools > Port**.
4. **Carregue um exemplo de sketch**:
   - Vá em **File > Examples > Seeed Arduino mmWave**.
   - Selecione o exemplo relevante para Detecção de Batimentos Cardíacos.
   - Revise o código e faça os ajustes necessários.
5. **Envie o sketch**:
   - Clique em **Upload** para gravar o código na sua placa XIAO.
   - Abra o **Serial Monitor** na IDE Arduino para visualizar os dados do sensor em tempo real.

<!-- ## Hardware Connections -->

### Uso

Esta seção fornece trechos de código de exemplo para ajudar você a começar rapidamente a usar a biblioteca Seeed Arduino mmWave com várias funcionalidades, incluindo monitoramento de respiração, controle de LED RGB e detecção de luz.

#### Módulo de respiração

Este exemplo demonstra como usar o sensor **MR60BHA2** para monitorar respiração e batimentos cardíacos.

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
```

A saída será a seguinte no Monitor Serial do Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/breathing_and_heartbeat_detection_resize.png" style={{width:700, height:'auto'}}/></div>

Se os dados retornados não forem `0`, isso indica a existência de um ser vivo dentro do alcance de detecção.

#### Detecção de Humanos

Este exemplo demonstra como usar o sensor **MR60BHA2** para detecção de humanos.

:::caution
Certifique-se de ter [atualizado o firmware](#atualizar-o-firmware-do-módulo) do módulo MR60BHA2 para a versão mais recente.  
O firmware mais recente adiciona detecção de presença humana e funções relacionadas a objetos humanos.
:::

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

SEEED_MR60BHA2 mmWave;

void setup() {
  Serial.begin(115200);
  mmWave.begin(&mmWaveSerial);
}

void loop() {
  if (mmWave.update(100)) {
    if (mmWave.isHumanDetected()) {
        Serial.printf("-----Human Detected-----\n");
    }

    PeopleCounting target_info;
    if (mmWave.getPeopleCountingTargetInfo(target_info)) {
        Serial.printf("-----Got Target Info-----\n");
        Serial.printf("Number of targets: %zu\n", target_info.targets.size());

        for (size_t i = 0; i < target_info.targets.size(); i++) {
            const auto& target = target_info.targets[i];
            Serial.printf("Target %zu:\n", i + 1);
            Serial.printf("  x_point: %.2f\n", target.x_point);
            Serial.printf("  y_point: %.2f\n", target.y_point);
            Serial.printf("  dop_index: %d\n", target.dop_index);
            Serial.printf("  cluster_index: %d\n", target.cluster_index);
            Serial.printf("  move_speed: %.2f cm/s\n", target.dop_index * RANGE_STEP);
        }
    }
    // delay(500);
  }
}
```

A saída será a seguinte no Monitor Serial do Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/people-counting-target-info.png" style={{width:700, height:'auto'}}/></div>

:::note
A respiração e a frequência cardíaca podem ser detectadas dentro de 1,5 metros, e a presença pode ser detectada em um alcance de 1,5 a 6 metros.  
Quando houver pessoas dentro do alcance de 1,5 m, o módulo entrará no modo de detecção de batimentos cardíacos e respiração.
Nesse modo, a sensibilidade da função de detecção de humanos pode diminuir.  
:::

<!-- 
### Fall Module

This example shows how to use the **MR60FDA2** sensor for fall detection.

```cpp
#include <Arduino.h>
#include "Seeed_Arduino_mmWave.h"

#ifdef ESP32
#  include <HardwareSerial.h>
HardwareSerial mmWaveSerial(0);
#else
#  define mmWaveSerial Serial1
#endif

SEEED_MR60FDA2 mmWave;

void setup() {
Serial.begin(115200);
mmWave.begin(&mmWaveSerial);

delay(1000);

uint32_t sensitivity = 15;
float height = 3.0, threshold = 1.0;
float rect_XL, rect_XR, rect_ZF, rect_ZB;

if (mmWave.setInstallationHeight(height)) {
 Serial.printf("setInstallationHeight success: %.2f\n", height);
} else {
 Serial.println("setInstallationHeight failed");
}

if (mmWave.setThreshold(threshold)) {
 Serial.printf("setThreshold success: %.2f\n", threshold);
} else {
 Serial.println("setThreshold failed");
}

if (mmWave.setSensitivity(sensitivity)) {
 Serial.printf("setSensitivity success %d\n", sensitivity);
} else {
 Serial.println("setSensitivity failed");
}

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

void loop() {
if (mmWave.update(100)) {
 bool is_human = mmWave.getHuman();
 if (is_human) {
   Serial.printf("People Exist: %s\n", is_human ? "true" : "false");
 }

 bool is_fall = mmWave.getFall();
 if (is_fall) {
   Serial.printf("isFall: %s\n", is_fall ? "true" : "false");
 }
}
}
``` -->

#### Piscar LED RGB

Este exemplo demonstra como controlar um LED RGB usando a biblioteca NeoPixel.

- **Passo 1.** Baixe a biblioteca `Adafruit_NeoPixel`

Vá para **Sketch > Include Liarbry > Manage Libraries...** e pesquise por **Adafruit_NeoPixel**, instale a versão mais recente.

- **Passo 2.** Copie o código a seguir para um novo sketch:

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

- **Passo 3.** Selecione a placa correta e a porta correspondente para enviar o programa.

Assim que o programa for enviado com sucesso, você verá o LED RGB no lado direito dos módulos do sensor mmWave piscando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/blink_rgb_led.gif" style={{width:700, height:'auto'}}/></div>

#### Sensor de Luz (BH1750)

Este exemplo mostra como ler valores de intensidade de luz usando o sensor BH1750.

- **Passo 1.** Baixe a biblioteca `hp_BH1750`

Vá para **Sketch > Include Liarbry > Manage Libraries...** e pesquise por **hp_BH1750**, instale a versão mais recente.

- **Passo 2.** Copie o código a seguir para um novo sketch:

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

- **Passo 3.** Selecione a placa correta e a porta correspondente para enviar o programa.

A saída será a seguinte no Monitor Serial do Arduino:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light_sensor.png" style={{width:700, height:'auto'}}/></div>

<!-- ## API Explanation -->

## API do Módulo de Respiração

Este exemplo usa a classe `SEEED_MR60BHA2` para interagir com o sensor MR60BHA2 para monitoramento de batimentos cardíacos e respiração. Aqui está o que cada função principal faz:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Inicializa o sensor para comunicação utilizando a interface serial especificada. Ela configura a conexão entre a placa XIAO e o sensor MR60BHA2.

- **`mmWave.update(100)`**:
  - Atualiza os dados do sensor. O parâmetro `100` é um valor de tempo limite em milissegundos, especificando por quanto tempo aguardar o sensor fornecer novos dados. Se novos dados estiverem disponíveis dentro desse intervalo, a função retorna `true`.

- **`mmWave.getHeartBreathPhases(float &total_phase, float &breath_phase, float &heart_phase)`**:
  - Obtém as informações de fase relacionadas às atividades de respiração e batimentos cardíacos.
  - `total_phase` representa o deslocamento de fase geral, enquanto `breath_phase` e `heart_phase` são específicos para as atividades de respiração e batimento cardíaco, respectivamente.

- **`mmWave.getBreathRate(float &rate)`**:
  - Busca a taxa de respiração atual detectada pelo sensor. A taxa é retornada na variável de referência `rate`.

- **`mmWave.getHeartRate(float &rate)`**:
  - Obtém a frequência cardíaca atual detectada pelo sensor. A taxa é retornada na variável de referência `rate`.

- **`mmWave.getDistance(float &distance)`**:
  - Obtém a distância do sensor até o objeto detectado (por exemplo, o corpo humano). Esta função é útil para entender o alcance do sinal detectado.

- **`mmWave.getPeopleCountingPointCloud(PeopleCounting& point_cloud)`**:
  - Obtém informações sobre nuvens de pontos. Ela apenas realiza o recebimento do tipo de mensagem; é normal que não haja dados.
  - A estrutura `PeopleCounting` contém um vetor de alvos detectados. Cada alvo inclui os seguintes atributos:
    - `x_point` : Coordenada X do alvo (em metros).
    - `y_point` : Coordenada Y do alvo (em metros).
    - `dop_index` : Índice Doppler, representando a velocidade do alvo.
      - A velocidade real de movimento (em cm/s) pode ser calculada como: `dop_index * RANGE_STEP`, onde `RANGE_STEP` é a resolução de velocidade.
    - `cluster_index` : ID do agrupamento (cluster) do alvo, usado para identificar alvos individuais na cena.

- **`mmWave.getPeopleCountingTartgetInfo(PeopleCounting& target_info)`**:
  - Obtém informações sobre os alvos detectados.
  - A estrutura `PeopleCounting` contém um vetor de alvos detectados. Cada alvo inclui os seguintes atributos:
    - `x_point` : Coordenada X do alvo (em metros).
    - `y_point` : Coordenada Y do alvo (em metros).
    - `dop_index` : Índice Doppler, representando a velocidade do alvo.
      - A velocidade real de movimento (em cm/s) pode ser calculada como: `dop_index * RANGE_STEP`, onde `RANGE_STEP` é a resolução de velocidade.
    - `cluster_index` : ID do agrupamento (cluster) do alvo, usado para identificar alvos individuais na cena.

- **`mmWave.isHumanDetected()`**:
  - Retorna se um humano foi detectado.

<!-- 
### Fall Module API

This example uses the `SEEED_MR60FDA2` class to interface with the MR60FDA2 sensor for fall detection. Here’s what each key function does:

- **`mmWave.begin(&mmWaveSerial)`**:
  - Initializes the sensor for communication, similar to the breath module, setting up the serial connection between the XIAO board and the MR60FDA2 sensor.

- **`mmWave.setInstallationHeight(float height)`**:
  - Define a altura de instalação do radar, o que é crucial para uma detecção de quedas precisa. O parâmetro `height` especifica a altura (em metros) na qual o sensor é instalado, com uma faixa válida normalmente entre 1 e 5 metros.

- **`mmWave.setThreshold(float threshold)`**:
  - Define o limiar de detecção de quedas. Esse valor determina a sensibilidade do radar em termos de detectar quedas com base na altura e na distância em relação ao sensor.

- **`mmWave.setSensitivity(uint32_t sensitivity)`**:
  - Ajusta a sensibilidade do radar para detecção de quedas. O valor de sensibilidade geralmente varia de 3 a 10, com valores mais altos tornando o sensor mais responsivo a possíveis quedas.

- **`mmWave.getRadarParameters(float &height, float &threshold, uint32_t &sensitivity)`**:
  - Obtém os parâmetros de configuração atuais do radar, incluindo altura de instalação, limiar de detecção de quedas e configurações de sensibilidade. Esses parâmetros são retornados por meio das variáveis de referência.

- **`mmWave.getHuman()`**:
  - Verifica se há presença humana detectada pelo radar. Retorna `true` se um humano for detectado e `false` caso contrário.

- **`mmWave.getFall()`**:
  - Determina se uma queda foi detectada. Esta função retorna `true` se uma queda for detectada e `false` se não for.-->

## Atualização de firmware do módulo

:::caution
Modificar o firmware do radar é uma operação arriscada, portanto, certifique-se de ler esta seção com atenção antes de seguir cada etapa cuidadosamente. Esteja ciente de que, se uma etapa não for executada corretamente, o radar pode ser inutilizado (bricked) ou ficar inutilizável.

**Observação especial, se você comprou o Fall Radar MR60FDA2, por favor, não faça o flash do firmware de forma não autorizada pelo método a seguir, isso certamente irá danificar o seu dispositivo!!!!**
:::

:::tip
Se você preferir não ler o texto, também pode consultar **[o vídeo](https://youtu.be/uic8__FFzos)** para atualizar o firmware. Como o firmware ESPHome para o XIAO será sobrescrito abaixo, talvez você precise regravar o firmware ESPHome para o XIAO nesta [página da web](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/) após atualizar o firmware do radar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uic8__FFzos?si=ijBJOLMk9Z5szwSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
:::

Primeiro, conecte os módulos XIAO ESP32C6 e MR60BHA2. Em seguida, use o código a seguir para programar o XIAO.

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
A função do código acima é transmitir de forma transparente a porta serial do módulo para a porta serial USB do XIAO, de modo a atualizar o firmware do módulo através do XIAO.  
Conecte o XIAO ao seu PC durante o processo de atualização.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/passthrough-mode.png" style={{width:700, height:'auto'}}/></div>

Você verá os dados originais enviados pelo módulo.

Em seguida, você precisa baixar e descompactar a ferramenta OTA e o firmware aqui.

:::note
O firmware 1.6.12 possui a seguinte atualização:

1. Corrigida a perda de alvo quando está parado dentro de 1,5 metro.

2. Otimizada a estabilidade de rastreamento para alvos em movimento entre 0–3 metros, resolvendo imprecisões anteriores nas coordenadas do alvo. No entanto, a taxa de atualização dos relatórios foi reduzida.

3. Precisão da respiração e frequência cardíaca — Nenhuma atualização nesta versão. A otimização contínua do treinamento de aprendizado de máquina relacionado está em andamento. Uma atualização de firmware para melhorar a precisão da respiração e da frequência cardíaca será lançada por volta do final do mês. O algoritmo anterior de respiração e frequência cardíaca tinha problemas fundamentais, que foram resolvidos.

:::

- **Ferramenta de atualização de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)

<details>

<summary>Clique aqui para visualizar a versão antiga</summary>

- **Firmware MR60BHA2 v1.6.4**: [MR60BHA2_eeprom_1.6.4.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.4.bin)

:::note
O firmware 1.6.4 possui a seguinte atualização:

1. Otimizado o recurso de detecção de respiração e frequência cardíaca, corrigindo o bug em que pequenos movimentos do corpo causavam perda de dados.  
2. Reforçada a função de detecção de presença 3D: respiração e frequência cardíaca podem ser detectadas dentro de 1,5 metro, e a presença pode ser detectada em uma faixa de 1,5 a 6 metros.  
3. Adicionado recurso de detecção de pessoas, capaz de detectar até três indivíduos em um raio de 6 metros.

:::

- **Firmware MR60BHA2 v1.6.5**: [MR60BHA2_eeprom_1.6.5.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.5.bin)

:::note
O firmware 1.6.5 possui a seguinte atualização:

1. Corrigido o problema em que respiração e frequência cardíaca às vezes não eram detectadas quando o corpo humano estava em repouso.

:::

- **Firmware MR60BHA2 v1.6.10**: [MR60BHA2_eeprom_1.6.10.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.10.bin)

:::note
O firmware 1.6.10 possui a seguinte atualização:

1. Otimizadas as mecânicas de respiração para resolver o problema em que a duração da apneia não diminuía.
2. Adicionada funcionalidade de coleta de dados.

:::

</details>

1. Verifique e conecte à porta serial (defina a taxa de transmissão para 115200)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/1-check-and-connect-serial.png" style={{width:700, height:'auto'}}/></div>

2. Clique em "REQUEST UPDATE" para entrar no modo de atualização:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/2-request-update.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/3-upgrade-confirm.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/4-baudrate-confirm.png" style={{width:700, height:'auto'}}/></div>

3. Se "C" ou "43" for impresso, isso significa que o módulo entrou no modo de atualização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/5-module-enter-upgrade-mode.png" style={{width:700, height:'auto'}}/></div>

4. Selecione o firmware a ser atualizado. Após a seleção, ele entrará automaticamente no estado de atualização.

Após a conclusão da atualização, o módulo irá automaticamente retornar ao modo normal. Se isso não ocorrer, desligue e reinicie, e então use a ferramenta OTA para visualizar os dados da porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/6-open-file.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/7-choose-file.png" style={{width:700, height:'auto'}}/></div>

5. Após a conclusão da atualização, você pode usar a ferramenta OTA para ler a versão e os dados brutos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware-update/8-flash-done.png" style={{width:700, height:'auto'}}/></div>

6. Você precisa regravar o firmware do XIAO ESP32C6 após a conclusão da atualização.

:::tip
Se, nas etapas acima, você tiver operado incorretamente causando uma anomalia e tiver sido incapaz de tentar gravar o firmware novamente, e o radar não estiver funcionando corretamente, então o radar pode ter sido danificado (bricked) devido a firmware corrompido. A única maneira de tentar recuperar o dispositivo é consultar os arquivos e a documentação **[aqui](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)**. No entanto, entenda que não fornecemos suporte técnico e assistência para dispositivos danificados devido a operação incorreta.
:::

## Aberto para Personalização

Quer personalizar o kit para se adequar às suas aplicações exclusivas?

Para mais informações sobre geração de dados de nuvem de pontos 3D e configuração de zona de interferência ao personalizar módulos mmWave, a Seeed fornece serviços de P&D, personalização e fabricação ponta a ponta para desenvolvimento rápido do conceito à produção. Entre em contato conosco em [iot@seeed.cc](mailto:iot@seeed.cc) para saber mais.

:::danger Descrição do Serviço Personalizado
O firmware e os algoritmos do radar não são de código aberto, e parâmetros complexos do radar, como nuvem de pontos 3D, distância de detecção, alcance etc., exigem serviços personalizados, que podem envolver taxas adicionais de personalização e MOQs.
:::

## Recursos

- **STL**: [Case 3D mmWave](https://files.seeedstudio.com/wiki/mmwave-for-xiao/Seeed_Studio_60GHz_mmWave_Human_Fall_Breating_and_Heartbeat_Detection_Sensor-MR60FDA2_MR60BHA2_Enclosure.stl)
- **Repositório GitHub**: Acesse todo o código-fonte e a documentação na [página GitHub da Seeed mmWave Library](https://github.com/Love4yzp/Seeed-mmWave-library).
- **Documentação ESPHome**: Para mais personalização e integração, consulte a [documentação do ESPHome](https://esphome.io/).
- **Ferramenta de atualização de firmware MR60BHA2**: [MR60BHA2_OTA.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_OTA.zip)
- **Firmware MR60BHA2 v1.6.12**: [MR60BHA2_eeprom_1.6.12.bin](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/MR60BHA2_eeprom_1.6.12.bin)
- **Software GUI MR60BHA2**: [Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/firmware/Seeed_Studio_mmWave_Sensor_MR60BHA2_GUI.zip)
- **mmWave Sensor SCH V1.0**: [mmWave_Sensor_SCH_V1.0.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/sch/mmWave_Sensor_SCH_V1.0.pdf)
- **Especificação Técnica do Módulo MR60BHA2**: [MR60BHA2_Breathing_and_Heartbeat_Module.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/MR60BHA2_Breathing_and_Heartbeat_Module.pdf)
- **Manual da Interface Tiny Frame MR60BHA2**: [Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/datasheet/Seeed_Studio_Tiny_Frame_Interface_Breathing_and_Heartbeat.pdf)
- **Método de Recuperação de Firmware do Radar via Jlink**: [Radar_Firmware_Recovery_Method-Jlink.zip](https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/Radar_Firmware_Recovery_Method-Jlink.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
