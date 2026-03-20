---
description: Guia sobre como transferir dados de reconhecimento do Vision AI V2 via RS485
title: Transmissão via RS485 dos dados do Vision AI V2
keywords:
  - RS485
  - Vision AI
image: https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.webp
slug: /grove_vision_ai_v2_rs485
last_update:
  date: 12/19/2024
  author: Jason
createdAt: '2024-12-23'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_rs485/
---



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.jpg" style={{width:500, height:'auto'}}/></div>

:::tip

Se você precisar usar a placa de expansão RS485 em conjunto com o Vision AI V2, será necessário ressoldar novos pinos de header na parte de trás da placa de expansão RS485.

:::


### Preparação de Hardware

<table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Grove Vision AI V2</th>
        <th>Módulo de Câmera OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
        <th>Placa de Expansão RS485 para Seeed Studio XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
        <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

### Método de conexão

Primeiro, prepare duas placas de expansão, duas placas de desenvolvimento da série XIAO e um Vision AI V2, e conecte os pinos correspondentes de acordo com o diagrama. Esta rotina usa o XIAO ESP32C3 como demonstração.

**Passo 1 . Prepare duas placas de expansão RS485 e duas placas de desenvolvimento da série XIAO e conecte os pinos de acordo com a figura a seguir**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connect_modifg.png" style={{width:700, height:'auto'}}/></div>

**Passo 2 . Prepare o Vision AI V2 para ser montado no lado inverso de uma das duas placas de expansão RS485 como transmissor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/11.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Se você estiver usando uma placa de expansão RS485 pela primeira vez e não tiver certeza de como fazer a fiação, clique neste link(https://wiki.seeedstudio.com/pt-br/XIAO-RS485-Expansion-Board/)

Se você não souber como gravar o modelo e adicionar o código de saída do modelo, clique neste link(https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_software_support/), que explicará cada etapa em detalhes

Para um uso melhor posteriormente, não pule estas duas etapas！
:::

## Preparação de Software

### Código do Transmissor

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

HardwareSerial Serial3(1); 

// Define two Serial devices mapped to the two internal UARTs
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

#define enable_pin D2 // Define the enable pin as D2

SSCMA AI;

void setup()
{
    Serial3.begin(115200, SERIAL_8N1, 7, 6); // Initialize Serial3 with 115200 baud rate, 8 data bits, no parity, 1 stop bit
    Serial.begin(9600); // Initialize Serial for debugging output
    AI.begin(&atSerial); // Initialize the AI module with the AT serial

    pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
    digitalWrite(enable_pin, HIGH); // Set the enable pin to high to enable the AI module
}

void loop()
{
    if (!AI.invoke(1, false, true)) { // Invoke the AI to start processing

        Serial.println("invoke success"); // Print success message

        // Print performance metrics
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        // Loop through detected boxes
        for (int i = 0; i < AI.boxes().size(); i++) {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }

        // Loop through detected classes
        for (int i = 0; i < AI.classes().size(); i++) {
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.println(AI.classes()[i].target);

            // Check the target class and send corresponding status
            if (AI.classes()[i].target == 0) {
                String status_a = "no people detected"; // Define status for no people detected
                Serial3.println(status_a); // Send status to Serial3
                Serial.println(status_a); // Print status to Serial monitor
            } else if (AI.classes()[i].target == 1) {
                String status_b = "people detected"; // Define status for people detected
                Serial3.println(status_b); // Send status to Serial3
                Serial.println(status_b); // Print status to Serial monitor
            }
        }
        delay(1000); // Wait for 1 second before the next loop iteration
    }
}
```

### Funções Detalhadas do Código

- **Inclusão de Biblioteca**
  - Inclua a biblioteca `HardwareSerial` para usar a funcionalidade de serial de hardware.
  - Inclua a biblioteca `Seeed_Arduino_SSCMA` para controle do módulo de IA.

- **Criação de Objeto Serial**

    ```cpp
    HardwareSerial Serial3(1); 
    HardwareSerial atSerial(0);
    ```

    Crie os objetos Serial3 e atSerial para comunicação serial.

- **Criação de Objeto de IA**

    ```cpp
    SSCMA AI;
    ```

    Crie uma instância da classe SSCMA para processamento de IA.

- **Métricas de Desempenho**

    ```cpp
    Serial.print("perf: prepocess=");
   Serial.print(AI.perf().prepocess);
   Serial.print(", inference=");
   Serial.print(AI.perf().inference);
   Serial.print(", postpocess=");
   Serial.println(AI.perf().postprocess);
    ```

    Imprima as métricas de desempenho das etapas de processamento de IA: pré-processamento, inferência e pós-processamento.

- **Loop de Caixas Detectadas**

    ```cpp

    for (int i = 0; i < AI.boxes().size(); i++) {
        Serial.print("Box[");
        Serial.print(i);
        Serial.print("] target=");
        Serial.print(AI.boxes()[i].target);
        Serial.print(", score=");
        Serial.print(AI.boxes()[i].score);
        Serial.print(", x=");
        Serial.print(AI.boxes()[i].x);
        Serial.print(", y=");
        Serial.print(AI.boxes()[i].y);
        Serial.print(", w=");
        Serial.print(AI.boxes()[i].w);
        Serial.print(", h=");
        Serial.println(AI.boxes()[i].h);
    }
    ```

    Faça um loop pelas caixas detectadas e imprima seus detalhes, incluindo alvo, pontuação e coordenadas da caixa delimitadora.

- **Loop de Classes Detectadas**

    ```cpp
    for (int i = 0; i < AI.classes().size(); i++) {
       Serial.print("Class[");
       Serial.print(i);
       Serial.print("] target=");
       Serial.println(AI.classes()[i].target);
    ```

    Faça um loop pelas classes detectadas e imprima seus alvos.

- **Definição de Macro**

    ```cpp
    pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
    digitalWrite(enable_pin, LOW);
    ```

    Defina o pino de habilitação como D2.

- **Envio de Mensagem**

    ```cpp
    // Check the target class and send corresponding status
    if (AI.classes()[i].target == 0) {
        String status_a = "no people detected"; // Define status for no people detected
        Serial3.println(status_a); // Send status to Serial3
        Serial.println(status_a); // Print status to Serial monitor
    } else if (AI.classes()[i].target == 1) {
        String status_b = "people detected"; // Define status for people detected
        Serial3.println(status_b); // Send status to Serial3
        Serial.println(status_b); // Print status to Serial monitor
    }
    ```

    Determine se uma pessoa foi detectada; se uma pessoa for detectada, é enviado ao receptor PEOPLE DETECTED, se nenhuma pessoa for detectada, é enviado ao receptor NO PEOPLE DETECTED.

### Código do Receptor

```cpp
#include <HardwareSerial.h>

HardwareSerial Serial3(1); // Use UART2
#define enable_pin D2 // Define the enable pin as D2


void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  Serial3.begin(115200, SERIAL_8N1, 7, 6); // Initialize Serial3 with 115200 baud rate, 8 data bits, no parity, 1 stop bit (RX=D4(GPIO4), TX=D5(GPIO5))

  // Wait for the hardware serial to be ready
  while(!Serial3);
  while(!Serial); // This line is generally unnecessary as Serial.begin() is ready immediately

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, LOW); // Set the enable pin to low to enable the device
}

void loop() {
    delay(100); // Delay for 100 milliseconds
    // Check if there is data available from the hardware serial
    if (Serial3.available()) {
        String receivedData = Serial3.readStringUntil('\n'); // Read string until newline character
        Serial.print("Received data: "); // Print label for received data
        Serial.println(receivedData); // Directly print the received data
    }
}
```

### Funções Detalhadas do Código

- **Inclusão de Biblioteca**
  - Inclua a biblioteca `HardwareSerial` para usar a funcionalidade de serial por hardware.

- **Criação do Objeto Serial**
  - Crie um objeto `Serial3` usando a UART2.

- **Definição de Macro**

    ```cpp
    pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
    digitalWrite(enable_pin, LOW);
    ```

    Defina o pino de habilitação como D2.

- **Função Setup**

    ```cpp
    Serial3.begin(115200, SERIAL_8N1, 7, 6);
    ```

    Inicialize a serial principal e a Serial3, configurando baud rate, bits de dados, etc. esta é a porta serial que se comunica com a vision ai v2 para transferir dados.

    ```cpp
    while(!Serial3);
    while(!Serial); 
    ```

    Aguarde até que todas as portas seriais estejam prontas, defina o pino de habilitação como saída e o coloque em nível baixo para habilitar o dispositivo.

- **Função Loop**
  - `if (Serial3.available());`: Verifique a cada 100 milissegundos se há dados disponíveis na Serial3.
  - `String receivedData = Serial3.readStringUntil('\n');`: Se houver dados disponíveis, leia-os até um caractere de nova linha e imprima os dados recebidos na serial principal.
- **Imprimir resultados**

    ```cpp
    Serial.print("Received data: "); 
    Serial.println(receivedData); 
    ```

    Imprimindo a mensagem do transmissor

### Gráfico de Resultados

No entanto, a câmera enviará **“people detected”** quando reconhecer uma pessoa e **"no people detected"** quando não reconhecer uma pessoa, e o receptor exibirá o resultado do reconhecimento do transmissor na porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/result.png" style={{width:1000, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
