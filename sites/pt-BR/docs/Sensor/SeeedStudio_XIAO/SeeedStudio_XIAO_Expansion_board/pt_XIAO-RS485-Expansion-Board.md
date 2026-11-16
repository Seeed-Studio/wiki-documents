---
description: Este guia ajudará você a configurar rapidamente a Seeed Studio XIAO RS485 Expansion Board e começar a usar a comunicação RS485.
title: Placa de Expansão RS485 para XIAO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /XIAO-RS485-Expansion-Board
sku: 113991354
last_update:
  date: 10/20/2026
  author: Zeller
createdAt: '2024-11-26'
updatedAt: '2026-10-20'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RS485-Expansion-Board/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução à Seeed Studio XIAO-RS485-Expansion-Board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html"
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
  </table>
</div>


:::tip

- A versão V1.1 e anteriores usam **controle de direção por software**. Consulte o [exemplo de direção software-para-software](#software-direction-to-software-direction).

:::

## Recursos

- **Compatível com Seeed Studio XIAO**: Projetada para as placas de desenvolvimento Seeed Studio XIAO.
- **Comunicação de longa distância**: Suporta comunicação RS-485 em distâncias de até 1.200 m (aproximadamente 3.937 ft).
- **Entrada DC de 5V ou 12V**: Suporta qualquer uma das tensões de alimentação, com um circuito onboard que converte 12V para 5V.
- **Dois terminais de 3 pinos**: Terminais separados para sinais RS-485 (A, B, GND) e alimentação (INT, 5V, 12V).
- **Design compacto**: Aproximadamente do tamanho de duas placas XIAO, o que a torna adequada para projetos com restrição de espaço.
- **Controle de direção selecionável**: Configure a comutação de transmissão/recepção RS-485 automática por hardware ou controlada por software por meio dos resistores de 0 Ω onboard. A placa é enviada configurada para controle automático de direção por hardware por padrão.
- **LEDs de atividade RX/TX**: Indicam recepção e transmissão de dados.
- **LEDs de alimentação de 5V e 12V**: Indicam a presença da tensão de entrada correspondente.

## Visão geral de hardware

<Tabs>
<TabItem value="XIAO RS485 Expansion Board " label="XIAO RS485 Expansion Board " default>

- Diagrama de indicação da XIAO RS485 Expansion Board V1.2 - Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- Diagrama de indicação da XIAO RS485 Expansion Board V1.2 - Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Materiais preparados

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RS485-Expansion-Board × 2</th>
   <th>Seeed Studio XIAO ESP32-C3 × 2 </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


### Esquemático de conexão

- A XIAO RS-485 Expansion Board V1.2 usa o transceptor TP8485E-SR. Os sinais RS-485 são mapeados para os pinos do XIAO da seguinte forma: `RS485_TX` para D4, `RS485_RX` para D5 e `RS485_DE` para D2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_sch_1.png" style={{width:700, height:'auto'}}/></div>
<br/>
<div class="table-center">
  <table align="center">
    <tr>
        <th>Conexões entre duas placas de expansão RS485</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_connect.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- **Chave 5V OUT/IN**: Controla a direção da alimentação no terminal de 5V. Defina como `OUT` quando esta placa fornecer 5V para outro dispositivo, ou como `IN` quando esta placa receber 5V pelo terminal. 
- **Chave 120R**: Defina como `ON` para conectar o resistor de terminação de 120 Ω onboard entre as linhas A e B do RS-485, ou como `NC` para desconectá-lo. Para cabos longos, ative a terminação nas duas extremidades físicas do barramento; deixe-a desconectada nas placas intermediárias.
- **INT**: Conexão de interrupção reservada.

:::tip

- A V1.2 é configurada para **controle automático de direção por hardware** por padrão, portanto o sketch não precisa alternar a direção por meio do pino D2. Para usar controle de direção por software, altere a posição dos resistores de 0 Ω onboard.

:::

- Localização do resistor de zero ohm para direção automática por hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Hardware.png" style={{width:600, height:'auto'}}/></div>

- Localização do resistor de zero ohm para direção manual por software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Software.png" style={{width:600, height:'auto'}}/></div>

## Visão geral de software

Neste projeto, o XIAO ESP32C3 se comunica com a placa de expansão RS485 usando D4 (GPIO6) e D5 (GPIO7).

### Direção automática por hardware para direção automática por hardware

Quando o controle automático de direção por hardware é selecionado, o sketch não precisa controlar o pino DE.

**1. Código do transmissor**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware sender ready");
  delay(500);
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` inicia a saída serial USB para o monitor serial.
- `Serial1.begin(9600, SERIAL_8N1, D5, D4)` inicia a comunicação RS-485 a 9600 baud. D5 é RX e D4 é TX.
- A placa controla a direção de transmissão automaticamente, portanto este sketch não usa o pino D2.
- `Serial1.println()` envia uma linha de texto a cada segundo. `Serial.println()` exibe o status de envio local via USB; ele não confirma que o receptor recebeu a mensagem.

**2. Código do receptor**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware receiver ready");
  delay(500);
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` exibe mensagens via USB. `Serial1` recebe dados do transceptor RS-485 através do pino D5.
- `Serial1.available()` verifica se há bytes recebidos aguardando no buffer da UART.
- `Serial1.readStringUntil('\n')` lê até uma nova linha ou até o tempo limite. `message.trim()` remove espaços em branco ao redor, incluindo o retorno de carro enviado por `println()`.
- Se a mensagem resultante não estiver vazia, `Serial.print()` e `Serial.println()` a exibem no monitor serial USB.
- A placa controla a direção automaticamente, portanto este sketch não usa o pino D2.

**3. Resultados do teste**

- Abra o monitor serial USB de cada XIAO para visualizar as mensagens enviadas e recebidas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.png" style={{width:600, height:'auto'}}/></div>

- Durante a transferência de dados, os indicadores TX e RX onboard piscam para mostrar a atividade correspondente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### Direção automática por hardware para direção por software

**1. Código do transmissor**

```cpp
#include <Arduino.h>

// Hardware -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Software sender ready");
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` inicia a saída serial USB. `Serial1.begin(9600, SERIAL_8N1, D5, D4)` inicia a UART RS-485 com RX em D5 e TX em D4.
- Esta placa usa controle automático de direção por hardware, portanto o transmissor não precisa operar o pino D2.
- Em `loop()`, `Serial1.println()` envia uma linha de texto pela RS-485 uma vez por segundo.
- `Serial.println()` exibe o status de envio local via USB. Verifique o monitor serial do receptor para confirmar o recebimento.

**2. Código do receptor**

Com o controle de direção por software, configure D2 como saída e mantenha-o em LOW no receptor para habilitar o modo de recepção.

```cpp
#include <Arduino.h>

// Hardware -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Hardware -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` é usado para o monitor serial USB, enquanto `Serial1` recebe dados RS-485 através de D5.
- `pinMode(D2, OUTPUT)` configura D2 para controle de direção. Manter D2 em LOW seleciona o modo de recepção.
- `Serial1.available()` verifica se há dados em buffer. `readStringUntil('\n')` lê uma linha, e `trim()` remove espaços em branco ao redor.
- `message.length() > 0` filtra mensagens vazias. O texto recebido válido é exibido através do monitor serial USB.


**3. Resultados do teste**

- Abra o monitor serial USB de cada XIAO para visualizar as mensagens enviadas e recebidas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-r.png" style={{width:600, height:'auto'}}/></div>

- Durante a transferência de dados, os indicadores TX e RX onboard piscam para mostrar a atividade correspondente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### Direção por software para direção por software

No controle de direção por software, D2 seleciona o modo de operação: LOW para receber e HIGH para transmitir.

**1. Código do transmissor**

```cpp
#include <Arduino.h>

// Software -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 controls transmit/receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software sender ready");
}

void loop() {
  digitalWrite(D2, HIGH); // Enable RS485 transmission.
  delayMicroseconds(100); // Allow the transceiver to switch.
  Serial1.println("Hello from software sender"); // Send over the RS485 bus.
  Serial1.flush(true); // Wait for TX only; keep RX buffer intact.
  digitalWrite(D2, LOW); // Return to receive mode.
  Serial.println("Sent: Hello from software sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial` exibe o status via USB. `Serial1` envia dados RS-485 através de D4 a 9600 baud.
- D2 controla a direção: LOW seleciona o modo de recepção e HIGH seleciona o modo de transmissão.
- Antes de enviar, o sketch define D2 como HIGH e espera brevemente para o transceptor mudar de modo.
- `Serial1.println()` envia o texto. `Serial1.flush(true)` aguarda o término da transmissão UART sem limpar os dados recebidos.
- Após a transmissão, o sketch define D2 como LOW e exibe o status de envio local via USB.

**2. Código do receptor**

```cpp
#include <Arduino.h>

// Software -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial.begin(115200)` inicia a saída serial USB. `Serial1.begin(9600, SERIAL_8N1, D5, D4)` inicia a UART RS-485 com RX em D5 e TX em D4.
- D2 é configurado para controle de direção e mantido em LOW para que o transceptor permaneça em modo de recepção.
- Quando `Serial1.available()` indica dados em buffer, `readStringUntil('\n')` lê uma linha.
- `trim()` remove espaços em branco ao redor. Se a mensagem não estiver vazia, o sketch a exibe via USB.

**3. Resultados do teste**

- Abra o monitor serial USB de cada XIAO para visualizar as mensagens enviadas e recebidas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_r-t-r.png" style={{width:600, height:'auto'}}/></div>

- Durante a transferência de dados, os indicadores TX e RX onboard piscam para mostrar a atividade correspondente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

## Recursos

- **📄[Schematic]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.2](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH_20260917.pdf)
- **🗃️[PCB Design Files]** [Seeed Studio XIAO-RS485-Expansion-Board V1.2 Project](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH&PCB_20260917.zip)
<br/>

- **📄[Schematic]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.1](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)
- **🗃️[KiCad Schematic]** [Seeed Studio XIAO-RS485-Expansion-Board V1.1 SCH](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
