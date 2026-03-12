---
description: Neste tutorial, embarcaremos em uma jornada para explorar o desenvolvimento de aplicações Zigbee usando a placa de desenvolvimento XIAO ESP32C6. A XIAO ESP32C6 é uma placa compacta, porém poderosa, que possui o chip ESP32-C6, o qual oferece conectividade Wi-Fi e Bluetooth Low Energy (BLE) integrada. Ao aproveitar o ESP Zigbee SDK, podemos utilizar todo o potencial da XIAO ESP32C6 e estender suas capacidades para incluir funcionalidade Zigbee.
title: Guia Rápido de Zigbee com XIAO ESP32C6 (Arduino)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /xiao_esp32c6_zigbee_arduino
last_update:
  date: 11/25/2024
  author: Spencer
createdAt: '2024-07-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_zigbee_arduino/
---

## Visão Geral

Este tutorial orienta você na implementação de aplicações [Zigbee](https://en.wikipedia.org/wiki/Zigbee) na placa de desenvolvimento **XIAO ESP32C6** da Seeed Studio. Alimentada pelo chip ESP32-C6, esta placa combina conectividade **Wi-Fi**, **Bluetooth Low Energy (BLE)** e **Zigbee**, tornando-a perfeita para **aplicações de IoT**. Os exemplos neste guia utilizam o **esp-arduino Zigbee SDK** para dar vida à funcionalidade Zigbee.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### O que Você Vai Aprender

:::note Prerequisite: Arduino Development Setup

Se você ainda não preparou sua Arduino IDE, consulte o **[Guia de Primeiros Passos](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#software-preparation)**. Certifique-se de que a **versão da placa esp-arduino** seja **v3.0.6 ou posterior**, que oferece suporte à funcionalidade Zigbee.

:::

Este guia se concentra nos conceitos essenciais do uso de Zigbee com o XIAO ESP32C6, garantindo um entendimento claro de suas aplicações práticas:

1. [Visão Geral do Zigbee](#zigbee_overview): Entenda o protocolo Zigbee e sua estrutura de rede.
2. [Exemplos Zigbee no Arduino](#examples): Implemente exemplos Zigbee como lâmpadas e interruptores no ESP32-C6.

## Visão Geral do Zigbee {#zigbee_overview}

Zigbee é um protocolo de comunicação sem fio de **baixa potência** e **baixa largura de banda**, baseado no padrão IEEE 802.15.4. Ele é voltado para cenários de IoT, como **automação residencial**, **cidades inteligentes** e **controle industrial**, oferecendo robustas capacidades de rede mesh para comunicação confiável em ambientes dinâmicos.

### Modelo de Dados Zigbee

A comunicação Zigbee depende da **Zigbee Cluster Library (ZCL)**, que define como os dispositivos organizam suas funcionalidades e interagem. Os principais componentes incluem:

1. **Tipos de Dispositivo**
    Dispositivos Zigbee (por exemplo, interruptores, sensores, lâmpadas) são predefinidos com comportamentos específicos, agrupados em **Clusters** funcionais.

2. **Clusters**
    Clusters são agrupamentos lógicos de:

   - **Atributos**: Representam estados do dispositivo, como brilho ou temperatura.
   - **Comandos**: Disparam ações, como ligar uma luz ou ajustar o brilho para 50%.

   Exemplos:

   - **Cluster On/Off**: Controla estados binários como energia.
   - **Cluster de Controle de Nível**: Ajusta intensidade ou brilho.
   - **Cluster de Medição de Temperatura**: Envia leituras de temperatura.
   - **Cluster de Cenas**: Salva e recupera configurações predefinidas.

3. **Atributos e Comandos**
    Atributos armazenam dados do dispositivo (por exemplo, estado, configuração), enquanto comandos iniciam ações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Arquitetura de Rede Zigbee

Uma rede Zigbee consiste em três tipos principais de nós:

1. **Zigbee Coordinator (ZC)**  
   - Atua como o hub central da rede.  
   - Lida com a criação da rede, autenticação de dispositivos e alocação de endereços.  
   - Responsável por inicializar e gerenciar a rede.  
   - Cada rede Zigbee pode ter apenas **um Coordenador**.  

2. **Zigbee Router (ZR)**  
   - Estende o alcance da rede retransmitindo mensagens entre dispositivos.  
   - Permite que dispositivos adicionais entrem na rede.  
   - Normalmente é alimentado pela rede elétrica para garantir operação contínua e retransmissão confiável de mensagens.  
   - Roteadores alimentados por bateria são possíveis, mas menos comuns devido às maiores demandas de energia.  

3. **Zigbee End Device (ZED)**  
   - Dispositivos leves e eficientes em energia que se comunicam com um nó pai (Coordenador ou Roteador).  
   - Não roteiam mensagens para outros dispositivos.  
   - Otimizados para operação com bateria e normalmente entram em modos de suspensão para economizar energia.

:::note

- **Endereçamento e Roteamento**:
  - Zigbee usa um esquema de endereçamento de 16 bits. Os dispositivos se comunicam por meio de uma mistura de endereçamento direto e indireto.  
  - As decisões de roteamento são tomadas pelos Roteadores usando algoritmos como AODV (Ad hoc On-demand Distance Vector).  

- **Gerenciamento de Energia**:
  - Dispositivos Finais Zigbee são otimizados para baixo consumo de energia. Eles frequentemente operam em modo de suspensão e só acordam quando necessário.  
  - Roteadores e o Coordenador geralmente são alimentados pela rede elétrica para disponibilidade constante.

:::

#### Topologias de Rede

Zigbee oferece suporte a três topologias de rede principais, dependendo dos requisitos da aplicação e do ambiente:

#### 1. Topologia em Malha (Mesh)

- Um único Coordenador e múltiplos Roteadores formam uma rede robusta e auto-recuperável.  
- Os dispositivos podem redirecionar dinamicamente as mensagens se um caminho de comunicação for interrompido, garantindo alta confiabilidade.  
- Ideal para redes de grande escala que exigem ampla cobertura e redundância.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Principais Características**:  
  - Redirecionamento dinâmico garante alta confiabilidade.  
  - Suporta redes grandes com cobertura escalável.  
  - Mecanismos de auto-recuperação aumentam a tolerância a falhas.  

#### 2. Topologia em Árvore

- O Coordenador atua como a raiz de uma estrutura hierárquica, com Roteadores formando os ramos.  
- Cada ramo pode ter múltiplos Dispositivos Finais ou Roteadores adicionais, criando uma estrutura em árvore.  
- A comunicação depende de caminhos hierárquicos, o que introduz possíveis pontos únicos de falha.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Principais Características**:  
  - Funciona bem em ambientes estruturados.  
  - Mais fácil de configurar e gerenciar do que uma rede em malha.  
  - Vulnerável à falha de um ramo, o que pode desconectar sub-redes inteiras.  

#### 3. Topologia em Estrela

- Todos os dispositivos se comunicam diretamente com o Coordenador.  
- Simples de implantar, mas o Coordenador é um ponto único de falha.  
- Mais adequada para redes pequenas, em que os dispositivos estão próximos ao Coordenador.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Principais Características**:  
  - Fácil de configurar e gerenciar.  
  - Escalabilidade limitada devido às restrições de alcance e capacidade de dispositivos.  
  - A dependência do Coordenador para toda a comunicação reduz a tolerância a falhas.  

Depois de ter uma visão rápida desses conceitos, vamos começar com o desenvolvimento Zigbee no XIAO ESP32C6.

## Exemplos em Arduino {#examples}

Consulte [Exemplos Zigbee - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)

### Exemplo 1: Lâmpada e Interruptor de Luz {#Light_Bulb_switch}

Primeiro, prepare dois XIAO ESP32C6, um como **Zigbee Light Bulb** e o outro como **Zigbee Light Switch**.

Use os exemplos `Zigbee_On_Off_Light` e `Zigbee_On_Off_Switch` para entender como dispositivos habilitados para Zigbee interagem em cenários do mundo real. Pronto para começar? Vamos mergulhar no desenvolvimento!

#### Zigbee Light Bulb

Certifique-se de ter escolhido `Zigbee ED(end device)` para o modo Zigbee.

algumas constantes:

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN` é usado para controlar o LED embutido.
- `BUTTON_PIN` é para o botão de restauração de fábrica.
- `ZIGBEE_LIGHT_ENDPOINT` representa o endpoint Zigbee da lâmpada, que atua como um identificador de serviço na rede.

##### Definir o Dispositivo de Luz Zigbee

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

Esta linha define um objeto `ZigbeeLight` com um ID de endpoint. Endpoints são usados para representar diferentes funcionalidades dentro de um dispositivo Zigbee.

##### Função de Controle de Estado do Dispositivo

A função `setLED()` controla o status do LED:

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

A função `setLED()` aceita um valor booleano e define o estado do LED de acordo com ele, ligando ou desligando com base no valor de entrada.

##### Função `setup()`

A função `setup()` inicializa o dispositivo, incluindo o LED, o botão e as configurações Zigbee.

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

Primeiro, configuramos o pino do LED como saída e o desligamos inicialmente.

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

O pino do botão é configurado como entrada com resistor pull-up interno.

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

Isto define o fabricante e o nome do modelo para o dispositivo, o que ajuda a identificá-lo na rede Zigbee.

```cpp
  zbLight.onLightChange(setLED);
```

Isto registra `setLED()` como uma função de callback, que é chamada sempre que houver uma alteração no estado da luz.

```cpp
  Zigbee.addEndpoint(&zbLight);
```

Adicionamos `zbLight` como um endpoint ao núcleo Zigbee. Isso permite que outros dispositivos Zigbee interajam com este endpoint.

```cpp
  Zigbee.begin();
```

Por fim, chamamos `Zigbee.begin()` para inicializar a pilha Zigbee e iniciar o dispositivo como um dispositivo final na rede.

##### Função `loop()`

O loop principal lida com os pressionamentos do botão para realizar uma restauração de fábrica:

```cpp
void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    delay(100);  // Key debounce handling
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

Este código verifica se o botão está pressionado:

- Se estiver pressionado, ele aguarda 100 ms (para tratamento de debounce).
- Se o botão permanecer pressionado por mais de 3 segundos, ele aciona uma redefinição de fábrica chamando `Zigbee.factoryReset()`.

Este recurso é útil para os usuários quando precisam reconfigurar o dispositivo devido a problemas de rede ou pareamento.

:::tip
As rotinas oficiais ainda estão sendo continuamente atualizadas, nossa documentação pode não conseguir sincronizar os programas mais recentes de imediato; se houver qualquer discrepância, consulte **[os exemplos de programas da Espressif](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**.
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* RGB LED functions **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Arduino functions **************************/
void setup() {
  // Init LED and turn it OFF (if LED_PIN == RGB_BUILTIN, the rgbLedWrite() will be used under the hood)
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // Init button for factory reset
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  //Optional: set Zigbee device name and model
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // Set callback function for light change
  zbLight.onLightChange(setLED);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeLight endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbLight);

  // When all EPs are registered, start Zigbee. By default acts as ZIGBEE_END_DEVICE
  log_d("Calling Zigbee.begin()");
  Zigbee.begin();
}

void loop() {
  // Checking button for factory reset
  if (digitalRead(BUTTON_PIN) == LOW) {  // Push button pressed
    // Key debounce handling
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // If key pressed for more than 3secs, factory reset Zigbee and reboot
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Interruptor de Luz Zigbee

Aqui, o XIAO ESP32C6 atua como o **Coordenador Zigbee**, responsável por controlar outros dispositivos Zigbee. Aqui, o **Interruptor Zigbee** representa o controlador, que se vincula a um dispositivo de iluminação Zigbee e o controla por meio de comandos como ligar ou desligar a luz.

##### Inclusões e Definições

```cpp
#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))
```

- `SWITCH_ENDPOINT_NUMBER` é definido como `5`. Ele representa o endpoint do interruptor. Assim como no exemplo da lâmpada, o número do endpoint é usado para definir a função específica dentro de um dispositivo Zigbee.
- `GPIO_INPUT_IO_TOGGLE_SWITCH` refere-se ao pino GPIO `9`, que funciona como o botão do interruptor.
- `PAIR_SIZE()` é uma macro usada para calcular o tamanho de um determinado array, usada aqui para lidar com configurações de botões.

##### Tipos de Configuração do Interruptor e Funções

O código define várias enumerações e estruturas de dados relacionadas à funcionalidade do interruptor:

```cpp
typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;
```

- **`SwitchFunction`** enumera diferentes funções que o interruptor pode executar, como ligar, desligar, alternar, ajustar o brilho da luz etc.
- **`SwitchData`** é uma struct que associa um pino GPIO a uma função específica, o que permite melhor organização ao adicionar vários botões com funcionalidades diferentes.
- **`SwitchState`** representa diferentes estados do interruptor durante a interação do usuário (por exemplo, ocioso, pressionado, liberado).

##### Instanciando o Interruptor Zigbee

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`** é um array que define as funções dos botões. Aqui, o botão conectado ao `GPIO 9` será usado para alternar a luz entre ligada e desligada.
- **`zbSwitch`** cria uma instância de `ZigbeeSwitch`, com o número de endpoint `5`.

##### Funções Zigbee e Tratamento de Interrupção de GPIO

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // Sends a toggle command to the light.
  }
}
```

**`onZbButton()`** é chamada sempre que um botão é pressionado. Neste caso, ela envia um comando Zigbee para alternar o estado da luz.

###### Tratamento de Eventos de GPIO

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`** é a rotina de serviço de interrupção (ISR) para tratar interrupções do pino GPIO. Ela coloca um evento em uma fila sempre que o botão é pressionado.

```cpp
static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}
```

**`enableGpioInterrupt()`** ativa ou desativa a interrupção GPIO, dependendo se o parâmetro `enabled` é `true` ou `false`.

##### Função Setup

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");
  zbSwitch.allowMultipleBinding(true);

  Zigbee.addEndpoint(&zbSwitch);
  Zigbee.setRebootOpenNetwork(180);

  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }
  Serial.println();
}
```

- **Inicialização da Comunicação Serial**: Inicializa a serial para depuração.
- **Informações do Dispositivo**: Define fabricante e modelo, permite que vários dispositivos sejam vinculados e adiciona um endpoint ao núcleo Zigbee.
- **Inicialização da Rede**: Abre a rede Zigbee por `180` segundos após o reinício para permitir que dispositivos se juntem.
- **Inicialização do Botão**: Configura os pinos GPIO para os botões, cria uma fila para tratar interrupções de GPIO e associa interrupções aos botões.
- **Aguardar Vinculação (Binding)**: O coordenador aguarda até se vincular a um dispositivo de iluminação antes de prosseguir. Uma vez vinculado, ele imprime as informações do dispositivo vinculado.

##### Função Loop

```cpp
void loop() {
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

- A **função loop** gerencia os pressionamentos de botão lendo da fila de interrupções (`gpio_evt_queue`) e atualizando o `buttonState` de acordo.
- Quando o botão é pressionado e liberado (`SWITCH_RELEASE_DETECTED`), o callback `onZbButton()` é chamado para alternar a luz.
- A cada **10 segundos**, os dispositivos de iluminação vinculados são impressos para fins de monitoramento.

:::tip
As rotinas oficiais ainda estão sendo continuamente atualizadas, nossa documentação pode não conseguir sincronizar os programas mais recentes imediatamente; em caso de qualquer discrepância, consulte **[Espressif's program examples](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**.
:::

```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "Zigbee coordinator mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* Switch configuration */
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR)    (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;

static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};

ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);

/********************* Zigbee functions **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // Send toggle command to the light
    zbSwitch.lightToggle();
  }
}

/********************* GPIO functions **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}

static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}

/********************* Arduino functions **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  //Optional: set Zigbee device name and model
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  //Optional to allow multiple light to bind to the switch
  zbSwitch.allowMultipleBinding(true);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeSwitch endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbSwitch);

  //Open network for 180 seconds after boot
  Zigbee.setRebootOpenNetwork(180);

  // Init button switch
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* create a queue to handle gpio event from isr */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // When all EPs are registered, start Zigbee with ZIGBEE_COORDINATOR mode
  log_d("Calling Zigbee.begin()");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  //Wait for switch to bound to a light:
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // Optional: read manufacturer and model name from the bound light
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  //List all bound lights
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // Handle button switch in loop()
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* check if there is any queue received, if yes read out the buttonSwitch */
  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        /* callback to button_handler */
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  // print the bound lights every 10 seconds
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### Demonstração

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="Exemplo de lâmpada/interruptor XIAO Zigbee"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

Parabéns por concluir com sucesso o seu projeto de iluminação controlada por Zigbee! Há muitas outras aplicações emocionantes de Zigbee esperando para serem exploradas por você. Continue com o ótimo trabalho!

## Referência

- [Zigbee Examples- Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [Arduino Core for ESP32 gets a Zigbee wrapper library](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte, garantindo que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
