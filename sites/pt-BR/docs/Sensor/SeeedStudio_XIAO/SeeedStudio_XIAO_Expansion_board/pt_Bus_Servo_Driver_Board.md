---
description: |
  Uma placa controladora versátil da Seeed Studio projetada para controlar servos de barramento serial para aplicações em robótica. Ela possui uma configuração crítica de jumper que deve ser ajustada dependendo do método de conexão (USB ou UART direto).
title: Bus Servo Driver Board
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/9.webp
slug: /bus_servo_driver_board
sku: 108090023,108090003,114993612,105990190,101090141,101090142,100067882
keywords:
  - Servos de barramento
  - Robótica
  - UART
  - Conexão USB
  - Configurações de jumper
last_update:
  author: Citric
  date: 05/27/2025
createdAt: '2025-04-03'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/bus_servo_driver_board/
---

# Primeiros passos com a Bus Servo Driver Board / XIAO Bus Servo Adapter

Este wiki abrange dois produtos relacionados: a **Bus Servo Driver Board** e o **XIAO Bus Servo Adapter**.

- A **Bus Servo Driver Board** **não** inclui um microcontrolador XIAO ESP32-C3 integrado, nem acompanha um gabinete impresso em 3D. Ela foi projetada para funcionar como uma placa de interface de servos de barramento de uso geral, permitindo que você conecte e controle servos por meio de um controlador externo de sua escolha.

- O **XIAO Bus Servo Adapter**, por outro lado, **inclui** o XIAO ESP32-C3 como controlador principal e vem com um gabinete impresso em 3D. Com esta versão, você pode controlar diretamente os servos de barramento usando o XIAO integrado, tornando-a uma solução mais integrada e pronta para uso em projetos de robótica.

Consulte o restante deste guia para obter detalhes sobre a configuração e o uso de ambos os produtos.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Bus Servo Driver Board</th>
        <th>XIAO Bus Servo Adapter</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/5.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Bus-Servo-Adapter-for-XIAO-p-6397.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introdução

A Bus Servo Driver Board / XIAO Bus Servo Adapter é uma solução de hardware compacta e poderosa da Seeed Studio, projetada para acionar servos de barramento serial para projetos de robótica e automação. Com suporte à comunicação UART, ela permite controle preciso e feedback de múltiplos servos da série ST/SC, incluindo a série SCS da Feetech (veja o [site oficial da série Feetech SCS/STS/TTL](https://www.feetechrc.com/en/scs_ttl_Servo.html)). Isso a torna ideal para aplicações como braços robóticos, hexápodes, robôs humanoides e robôs com rodas que exigem feedback de ângulo e carga dos servos.

Este guia foca na configuração de hardware, conexões físicas, principais especificações e **configurações críticas de jumper** para ajudar os usuários a integrar a placa em seus projetos de forma eficaz.

:::warning Aviso de Segurança

Sempre desconecte a alimentação antes de conectar ou desconectar servos ou fiação. Certifique-se de que a tensão de entrada corresponda aos requisitos dos servos para evitar danos.

:::

## Visão geral do hardware

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Bus Servo Driver Board" label="Bus Servo Driver Board">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/2.png" style={{width:800, height:'auto'}}/></div>

A Bus Servo Driver Board possui vários pontos de conexão principais:

**Entrada:**

- **DC IN (5.5 * 2.1mm):** Esta é a entrada de alimentação para a placa e para os servos conectados. Conecte aqui uma fonte de alimentação de 5&#126;12V. *É crucial que a tensão dessa fonte de alimentação corresponda aos requisitos de tensão de seus servos.* Por exemplo, os servos da série ST normalmente operam em 9V, enquanto os servos da série SC podem exigir 12V.

**Saída:**

- **Interface de servo:** Esta porta dedicada é onde você conecta seus servos de barramento das séries ST/SC. Certifique-se de que o conector esteja devidamente alinhado.

**Interface de controle:**

- **UART (RX/TX):** Esses pinos fornecem comunicação serial para controlar os servos. O método de conexão e as configurações de jumper dependem do seu dispositivo hospedeiro. Veja abaixo para mais detalhes.

</TabItem>

<TabItem value="XIAO Bus Servo Adapter" label="XIAO Bus Servo Adapter">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/4.png" style={{width:800, height:'auto'}}/></div>

**Entrada:**

- **DC IN (5.5 * 2.1mm):** Esta é a entrada de alimentação para a placa e para os servos conectados. Conecte aqui uma fonte de alimentação de 5~12V. *É crucial que a tensão dessa fonte de alimentação corresponda aos requisitos de tensão de seus servos.* Por exemplo, os servos da série ST normalmente operam em 9V, enquanto os servos da série SC podem exigir 12V.

**Saída:**

- **Interface de servo:** Esta porta dedicada é onde você conecta seus servos de barramento das séries ST/SC. Certifique-se de que o conector esteja devidamente alinhado.

</TabItem>

</Tabs>

## Primeiros passos

### Selecionando o modo de operação da placa controladora **(Apenas para Bus Servo Driver Board)**

:::tip
Para o XIAO Bus Servo Adapter, você não precisa modificar nenhum circuito para usar o XIAO ESP32-C3 incluído para controlar os servos; você pode pular diretamente esta parte.
:::

A Bus Servo Driver Board oferece dois métodos principais de conexão: conexão UART direta e conexão USB por meio de um adaptador USB‑para‑UART. *A configuração correta do jumper é essencial para o funcionamento adequado.*

#### Conexão UART (para MCUs, XIAO, ESP32, etc.)

Este método é usado ao conectar diretamente aos pinos UART de um microcontrolador (MCU), como um ESP32, Arduino, Seeed Studio XIAO ou um computador de placa única.

- **Fiação:**
  - Conecte o pino `RX` da Driver Board ao pino `TX` (D7) do seu dispositivo hospedeiro.
  - Conecte o pino `TX` da Driver Board ao pino `RX` (D6) do seu dispositivo hospedeiro.
  - Para dispositivos como o Seeed Studio XIAO, você pode conectar o XIAO diretamente aos headers fornecidos, garantindo o alinhamento correto dos pinos. Isso elimina a necessidade de fios Dupont separados para a conexão UART.

- **Configuração de jumper (crítica):**

  - Não há necessidade de usar um jumper de 2,54 mm para fazer o curto‑circuito do pino de 2 pinos na parte frontal da placa. (Por padrão, ele não está em curto)
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

- **Alimentando o dispositivo hospedeiro:** Seu dispositivo hospedeiro (por exemplo, Raspberry Pi Zero, ESP32, XIAO) exigirá sua própria fonte de alimentação separada.

#### Conexão USB

Este método é usado ao conectar a um computador ou computador de placa única com porta USB (por exemplo, um PC ou Raspberry Pi 4B). Você simplesmente conecta a placa de controle ao computador usando um cabo USB.

- **Fiação:**
  - Basta conectar a placa de controle ao seu computador usando um cabo USB.

- **Configuração de jumper (crítica):**

  - **Passo 1.** Localize o jumper de solda na parte de trás da placa. **Para comunicação USB, você deve garantir que as duas ilhas estejam conectadas (existe uma ponte de solda entre elas).**

  - Ilhas no lado traseiro para a versão 1:

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/7.jpg" style={{width:400, height:'auto'}}/></div>

  - Ilhas no lado traseiro para a versão 2:

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png" style={{width:400, height:'auto'}}/></div>

  - **Passo 2.** Use um jumper de 2,54 mm para fazer o curto‑circuito do pino de 2 pinos na parte frontal da placa. (Por padrão, ele não está em curto)
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

### Componentes necessários (antes de começar)

Antes de conectar qualquer coisa, certifique-se de ter o seguinte:

- **Bus Servo Driver Board / XIAO Bus Servo Adapter**
- **Servos de barramento compatíveis das séries ST/SC**: veja o [site oficial da série Feetech SCS/STS/TTL](https://www.feetechrc.com/en/scs_ttl_Servo.html).
- **Fonte de alimentação de 5~12V:** Uma bateria ou adaptador de energia. *A tensão deve corresponder às especificações do seu servo.*
- **Dispositivo hospedeiro:**
  - **Para UART direto:** Um dispositivo com capacidade UART, como um Raspberry Pi, Arduino, ESP32 ou Seeed Studio XIAO.
  - **Para USB:** Um computador (PC, Mac, Linux) ou um computador de placa única como o Raspberry Pi 4B, *mais* um adaptador USB‑para‑UART.

:::note
Para o XIAO Bus Servo Adapter, o XIAO ESP32-C3 é integrado, portanto não há necessidade de preparar um dispositivo hospedeiro.
:::

- **Cabos/adaptadores de conexão:** Fios jumper (fios Dupont) se estiver usando UART direto (exceto ao usar XIAO com conexão direta pelos headers). Um adaptador USB‑para‑UART se estiver usando o método de conexão USB.

:::caution
Se estiver usando servos da série SC, confirme se a fonte de alimentação corresponde aos requisitos de tensão deles. A etiqueta de entrada DC da placa é adaptada para servos da série ST, mas também suporta tensões da série SC. **Configurações incorretas de jumper impedirão a comunicação com a placa controladora.**
:::

## Controlando servos via USB

Esta seção descreve como controlar múltiplos servos de barramento por meio da Bus Servo Driver Board usando uma conexão USB.

### Visão geral do princípio de funcionamento

A Bus Servo Driver Board funciona recebendo comandos seriais (UART) do seu dispositivo hospedeiro (como um PC, Raspberry Pi ou microcontrolador) via USB. Esses comandos são então encaminhados para os servos de barramento conectados. Enviando os comandos apropriados do protocolo serial, você pode controlar a posição, a velocidade e outros parâmetros de cada servo individualmente.

A própria placa não interpreta nem gera sinais de controle de servo de forma autônoma; em vez disso, atua como uma ponte transparente entre o hospedeiro e os servos. Isso significa que você é responsável por enviar os pacotes de comando corretos de acordo com o protocolo de comunicação dos seus servos.

### Referência de Exemplo

Para um exemplo prático de como enviar comandos para servos de barramento Feetech (séries ST/SC/STS/TTL), você pode consultar o seguinte exemplo em Python:  
[lerobot/common/robot_devices/motors/feetech.py on GitHub](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/motors/feetech.py)

Este exemplo demonstra como construir e enviar pacotes seriais para controlar servos Feetech. Você pode adaptar o código para a sua própria plataforma host e linguagem de programação conforme necessário.

> **Nota:**  
>
> - O formato específico de comando e o protocolo podem variar dependendo do modelo do seu servo.  
> - Consulte a documentação oficial do seu servo para obter o protocolo serial correto e a estrutura de comandos.  
> - Você precisará escrever ou adaptar um programa driver que atenda aos requisitos do seu servo.

Para mais detalhes sobre o protocolo das séries Feetech SCS/STS/TTL, consulte a [documentação oficial da Feetech](https://www.feetechrc.com/en/scs_ttl_Servo.html).

## Controlando Servos via XIAO

Em seguida, descrevemos como enviar sinais para controlar o movimento do servo por meio do XIAO e como usar a biblioteca.

### Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/workloads/scservo" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

- `SMS_STS(uint8_t id)` —— Criar um objeto de servo com o ID especificado.  
  Parâmetros: `uint8_t id` (ID do servo)  
  Saída: nenhuma

- `void WritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— Definir a posição, o tempo e a velocidade de destino para o servo.  
  Parâmetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`  
  Saída: nenhuma

- `void RegWritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— Definir a posição, o tempo e a velocidade de destino para o servo, mas executar depois com o comando Action.  
  Parâmetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`  
  Saída: nenhuma

- `void RegWriteAction()` —— Executar todos os comandos RegWritePos registrados.  
  Parâmetros: nenhum  
  Saída: nenhuma

- `void WriteSpe(uint8_t id, int16_t Speed)` —— Definir a velocidade de rotação do servo.  
  Parâmetros: `uint8_t id`, `int16_t Speed`  
  Saída: nenhuma

- `void WritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— Definir posição, tempo, velocidade e aceleração.  
  Parâmetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`, `uint8_t ACC`  
  Saída: nenhuma

- `void RegWritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— Registrar posição, tempo, velocidade e aceleração para executar depois.  
  Parâmetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`, `uint8_t ACC`  
  Saída: nenhuma

- `void RegWriteActionEx()` —— Executar todos os comandos RegWritePosEx registrados.  
  Parâmetros: nenhum  
  Saída: nenhuma

- `int16_t ReadPos(uint8_t id)` —— Ler a posição atual do servo.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (posição)

- `int16_t ReadSpeed(uint8_t id)` —— Ler a velocidade atual do servo.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (velocidade)

- `int16_t ReadLoad(uint8_t id)` —— Ler a carga atual do servo.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (carga)

- `int16_t ReadVoltage(uint8_t id)` —— Ler a tensão atual do servo.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (tensão)

- `int16_t ReadTemper(uint8_t id)` —— Ler a temperatura atual do servo.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (temperatura)

- `int16_t ReadMove(uint8_t id)` —— Verificar se o servo está em movimento.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (1: em movimento, 0: parado)

- `int16_t ReadCurrent(uint8_t id)` —— Ler a corrente elétrica do servo.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (corrente)

- `void SetID(uint8_t id, uint8_t newid)` —— Definir um novo ID para o servo.  
  Parâmetros: `uint8_t id`, `uint8_t newid`  
  Saída: nenhuma

- `void Load(uint8_t id)` —— Ativar o torque do servo.  
  Parâmetros: `uint8_t id`  
  Saída: nenhuma

- `void Unload(uint8_t id)` —— Desativar o torque do servo.  
  Parâmetros: `uint8_t id`  
  Saída: nenhuma

- `int16_t ReadTorque(uint8_t id)` —— Ler o status de torque do servo.  
  Parâmetros: `uint8_t id`  
  Saída: `int16_t` (1: ativado, 0: desativado)

- `void LEDAlarm(uint8_t id, uint8_t enable)` —— Definir o status do alarme de LED.  
  Parâmetros: `uint8_t id`, `uint8_t enable`  
  Saída: nenhuma

- `void Reset(uint8_t id)` —— Restaurar o servo para as configurações de fábrica.  
  Parâmetros: `uint8_t id`  
  Saída: nenhuma

- `void LockEprom(uint8_t id)` —— Bloquear a EEPROM do servo.  
  Parâmetros: `uint8_t id`  
  Saída: nenhuma

- `void UnlockEprom(uint8_t id)` —— Desbloquear a EEPROM do servo.  
  Parâmetros: `uint8_t id`  
  Saída: nenhuma

### Exemplo com XIAO

Agora que instalamos nossa biblioteca e entendemos as funções básicas, vamos executar alguns exemplos para o nosso 产品名称 e ver como ele se comporta.

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Para usar o **Seeed Studio XIAO ESP32-C3** nas rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#software-setup)** para concluir a adição.

**Passo 3.** Complete a fiação conforme mostrado. Se você precisar conectar vários servos, pode usar os cabos que acompanham os servos para concluir a conexão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/8.jpg" style={{width:600, height:'auto'}}/></div>

#### Controlar múltiplos servos

```cpp
#include <SCServo.h>

// Define the correct serial port for your target board
#if defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
#define COMSerial Serial0
#else
#define COMSerial Serial1
#endif

// Define RX/TX pins for the servo bus (for reference)
// Note: On ESP32, pins are usually specified in COMSerial.begin().
// For example: COMSerial.begin(1000000, SERIAL_8N1, S_RXD, S_TXD);
// If your board uses the default pins for Serial1, no extra specification is needed.
#define S_RXD D7
#define S_TXD D6

#define SERVO_NUM 2 // Number of servos

SMS_STS st; // Servo control object

// --- Servo Configuration ---
byte ID[SERVO_NUM] = {1, 2};                // IDs of the servos
u16 Speed[SERVO_NUM] = {1500, 1500};         // Set a medium speed for the servos
byte ACC[SERVO_NUM] = {50, 50};             // Set a medium acceleration for the servos
s16 Pos[SERVO_NUM] = {2048, 2048};           // Servo position array, initialized to the midpoint (2048)

void setup()
{
  // Start the main serial port for debugging and receiving commands
  Serial.begin(115200);
  // Wait a moment for the Serial Monitor to connect
  delay(2000); 
  Serial.println("--- Servo Control Program Start ---");

  // Start the serial port for controlling the servos
  COMSerial.begin(1000000, SERIAL_8N1);
  st.pSerial = &COMSerial; // Associate the control object with the serial port

  Serial.println("Checking servo connection status...");
  for (int i = 0; i < SERVO_NUM; i++) {
    if (st.Ping(ID[i]) != -1) {
      Serial.print("Servo with ID ");
      Serial.print(ID[i]);
      Serial.println(" is connected.");
    } else {
      Serial.print("Error: Servo with ID ");
      Serial.print(ID[i]);
      Serial.println(" is not responding!");
    }
  }

  // --- Power-on Self-Test ---
  // This section makes the servos move automatically on power-up to confirm they are working correctly.
  Serial.println("\nExecuting power-on self-test movement...");

  // 1. Move to position 1024
  Serial.println("Moving to position 1024...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 1024;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for the movement to complete

  // 2. Move to position 3072
  Serial.println("Moving to position 3072...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 3072;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for the movement to complete

  // 3. Return to center position (2048) to prepare for user commands
  Serial.println("Returning to center position (2048)...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 2048;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(1500);

  Serial.println("\n--- Initialization Complete ---");
  Serial.println("Enter 'j' to decrease the angle, or 'k' to increase it.");
  Serial.println("-----------------------------------");
}

void loop()
{
  // Check if the user has sent a command via the Serial Monitor
  if (Serial.available()) {
    String input = Serial.readString();
    input.trim(); // Remove extra spaces or newlines

    bool shouldMove = false; // Flag to indicate if a valid command was received

    if (input.startsWith("j")) {
      Serial.println("Received command: 'j'. Decreasing angle.");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] -= 512; // Move a small step for easy observation
        if (Pos[i] < 0) {
          Pos[i] = 0; // Prevent going below the minimum range
        }
      }
      shouldMove = true;
    } else if (input.startsWith("k")) {
      Serial.println("Received command: 'k'. Increasing angle.");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] += 512; // Move a small step
        if (Pos[i] > 4095) {
          Pos[i] = 4095; // Prevent going above the maximum range
        }
      }
      shouldMove = true;
    } else {
      Serial.print("Unknown command: '");
      Serial.print(input);
      Serial.println("'. Please enter 'j' or 'k'.");
    }

    // If a valid command was received, send the new positions to the servos
    if (shouldMove) {
      Serial.print("Moving servos to new positions: [");
      for(int i = 0; i < SERVO_NUM; i++){
        Serial.print(Pos[i]);
        if(i < SERVO_NUM - 1) Serial.print(", ");
      }
      Serial.println("]");

      st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
    }
  }
}
```

Este exemplo demonstra como controlar vários servos de barramento Feetech da série SCS usando o XIAO e a biblioteca SCServo. O código inicializa dois servos, calibra-os e permite que o usuário ajuste suas posições interativamente por meio de comandos seriais. Quando você envia 'j' ou 'k' pelo monitor serial, o código diminui ou aumenta o ângulo de todos os servos conectados, respectivamente. A posição atual de cada servo é rastreada e atualizada de acordo, e as novas posições são enviadas aos servos usando a função `SyncWritePosEx`.

Como personalizar para o seu próprio projeto:

- **Número de servos**: Altere o valor de `Servo_Num` e atualize os vetores ID, Speed, ACC e Pos para corresponder ao número e aos IDs dos seus servos.
IDs dos servos: Modifique o vetor ID para corresponder aos IDs dos seus servos conectados.

- **Velocidade e aceleração**: Ajuste os vetores Speed e ACC para definir diferentes velocidades e acelerações para cada servo.

- **Pinos seriais**: Se você usar pinos diferentes para UART, atualize as definições de S_RXD e S_TXD.

- **Lógica de movimento**: Você pode alterar a lógica na função `loop()` para implementar comportamentos mais complexos ou específicos do projeto, como responder a diferentes comandos seriais, adicionar feedback de sensores ou integrar com outros hardwares.

- **Posição inicial**: Defina os valores iniciais no vetor `Pos` para estabelecer as posições iniciais dos seus servos.

## FAQs

:::tip

Recomenda-se ler estas FAQs antes de iniciar o seu projeto. Elas abordam dúvidas comuns e possíveis problemas.

:::

<details>
<summary>E se a tensão da fonte de alimentação não corresponder ao meu servo?</summary>

A placa e o servo podem funcionar incorretamente ou sofrer danos. Sempre combine a tensão de entrada com os requisitos do seu servo.
</details>

<details>
<summary>Posso conectar vários servos ao mesmo tempo?</summary>

Sim, vários servos são suportados, mas certifique-se de que sua fonte de alimentação pode lidar com a corrente combinada.

</details>

<br/>

## Recursos

- **[PDF]** [Esquemático da Placa Controladora de Servo de Barramento](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf)

### Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
