---
description: Este guia ajudará você a configurar rapidamente a Seeed Studio XIAO RS485 Expansion Board e começar a usar a comunicação RS485.
title: RS485 Expansion Board para XIAO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /XIAO-RS485-Expansion-Board
sku: 113991354
last_update:
  date: 11/20/2024
  author: Jason
createdAt: '2024-11-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RS485-Expansion-Board/
---


# Começando com a Seeed Studio XIAO-RS485-Expansion-Board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

## Visão geral de hardware

### Materiais preparados

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RS485-Expansion-Board</th>
   <th>Seeed Studio XIAO ESP32-C3</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Diagrama de pinagem

<div class="table-center">
  <table align="center">
    <tr>
        <th>Diagrama de indicação da expansão XIAO RS485</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/pinlist.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- CHAVE 5V OUT/IN: Um é a entrada e saída da porta de 5V; quando o escravo define para IN, é usada como entrada; quando o mestre define para OUT, esta porta fornece alimentação externamente e pode ser conectada ao sensor para alimentação do sensor.

- CHAVE 120R: A chave 120R é usada para determinar se o resistor de 120 ohms está em uso ou não. Em ambientes com cabeamento longo, o 485 precisa adicionar um resistor de 120 ohms no início e no fim para fazer o casamento de impedância e garantir a comunicação.

- INT: Porta de interrupção reservada.

:::tip
Quando for usado no modo de entrada, você precisa girar a chave para IN; se for usado no modo de saída, é necessário girar a chave para OUT para evitar queimar o módulo.
:::

### Esquemático de conexão

<div class="table-center">
  <table align="center">
    <tr>
        <th>Conexões de duas placas de expansão RS485</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/connect1.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
Neste projeto, o XIAO ESP32C3 se comunica com a placa de expansão RS485 usando D4 (GPIO6) e D5 (GPIO7).

Se estiver usando uma placa de desenvolvimento diferente, modifique as configurações de pinos correspondentes conforme necessário.
:::

## Visão geral de software

### Código do transmissor

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); 


#define enable_pin D2 // Define the enable pin as D2

void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO6), TX=D5(GPIO7)


  // Wait for the hardware serial to be ready
  while(!mySerial);
  // Wait for the hardware serial to be ready
  while(!Serial);

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, HIGH); // Set the enable pin to high
}

void loop() {
if (Serial.available()) {
    String receivedData = Serial.readStringUntil('\n'); // Read the data from the hardware serial until a newline character

    // If the received data is not empty
    if (receivedData.length() > 0) {
        Serial.println("Send successfully"); // Print a success message
        mySerial.print("Master send information is: "); // Send a prompt message to the hardware serial
        mySerial.println(receivedData); // Send the received data to the hardware serial
    }
  }
}

```

- **Biblioteca HardwareSerial:** Permite a criação de portas seriais adicionais no ESP32, normalmente usadas para comunicação com dispositivos (como sensores ou módulos).
- `HardwareSerial mySerial(1);`: Define um objeto HardwareSerial chamado mySerial, usando D5 e D4 como pinos de recepção e transmissão.
- `#define enable_pin D2`: Define um pino de habilitação usado para controlar o estado de envio e recepção do módulo RS485.

- `setup()`:
  - `Serial.begin(115200`: Inicializa a porta serial de hardware com uma taxa de baud de 115200.
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`: RX=D4(GPIO4), TX=D5(GPIO5).
  - `while(!mySerial)`: Aguarda até que a serial de hardware esteja pronta para comunicação.
  - `while(!Serial)`: Aguarda até que a serial de hardware esteja pronta para comunicação.
  - `pinMode(enable_pin, OUTPUT)`: Configura o enable_pin como um pino de saída para controlar o módulo RS485.
  - `digitalWrite(enable_pin, HIGH)`: Define o enable_pin como HIGH, configurando o módulo RS485 para o modo de envio.

- `loop():`
  - `if (receivedData.length() > 0)`: Verifica se há algum dado disponível para ler da porta serial de hardware.
  - `String receivedData = Serial.readStringUntil('\n');` : Lê os dados da serial de hardware até um caractere de nova linha
  - `Serial.println("Send successfully")`: Imprime uma mensagem de sucesso.
  - `mySerial.print("Master send information is: ")`: Envia uma mensagem de aviso para a serial de hardware.
  - `mySerial.println(receivedData)` :Envia os dados necessários para uma placa de expansão RS485.

### Código do receptor

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); // Use UART2
#define enable_pin D2 // Define the enable pin as D2

void setup() {
  Serial.begin(115200); // Initialize the hardware serial with a baud rate of 115200
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)

  // Wait for the hardware serial to be ready
  while(!Serial);
  // Wait for the hardware serial to be ready
  while(!mySerial);

  pinMode(enable_pin, OUTPUT); // Set the enable pin as an output
  digitalWrite(enable_pin, LOW); // Set the enable pin to low
}

void loop() {
  // Check if there is data available from the hardware serial
  if (mySerial.available()) {
      String receivedData = mySerial.readStringUntil('\n'); // Read strings based on newlines
      Serial.print("Received data: ");
      Serial.println(receivedData); // Direct printing of received data
  }
}

```

- **Biblioteca HardwareSerial:** Permite a criação de portas seriais adicionais no ESP32, normalmente usadas para comunicação com dispositivos (como sensores ou módulos).
- `HardwareSerial mySerial(1);`: Define um objeto HardwareSerial chamado mySerial, usando D5 como RX e D4 como TX.
- `define enable_pin D2`: Define um pino de habilitação usado para controlar o estado de envio e recepção do módulo RS485.

- `setup()`:
  - `Serial.begin(115200`: Inicializa a porta serial de hardware com uma taxa de baud de 115200.
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`RX=D4(GPIO4), TX=D5(GPIO5).
  - `while(!Serial)`: Aguarda até que a porta serial de hardware esteja pronta para comunicação.
  - `while(!mySerial)`: Aguarda até que a porta serial de hardware esteja pronta para comunicação.
  - `pinMode(enable_pin, OUTPUT)`: Configura o enable_pin como um pino de saída para controlar o módulo RS485.
  - `digitalWrite(enable_pin, LOW)`: Define o enable_pin como LOW, configurando o módulo RS485 para o modo de recepção.

- `loop()`:
  - `if (mySerial.available())`: Verifica se há algum dado disponível para ler da porta serial de hardware.
  - `String receivedData = mySerial.readStringUntil('\n');`: Lê strings com base em quebras de linha
  - `Serial.print("Received data: ");`: Imprime uma mensagem na serial de hardware indicando que os dados foram recebidos.
  - `Serial.println(receivedData);`: Imprime os dados enviados para o RS485 receptor.

## Resultado da transmissão RS485

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/rs485_result.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[SCH]** [Esquemático da Seeed Studio XIAO-RS485-Expansion-Board](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)
- **[PDF]** [Esquemático da Seeed Studio XIAO-RS485-Expansion-Board](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
