---
title: Primeiros Passos com o Seeed Studio XIAO MG24
description: ''
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /xiao_mg24_getting_started
sku: 102010590,102010610,102010693,102010690,102010691,102010692
keywords:
  - XIAO
  - MG24
last_update:
  date: 10/17/2024
  author: Jason
sidebar_position: 0
createdAt: '2024-11-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_mg24_getting_started/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg" style={{width:600, height:'auto'}}/></div>
<br />

# Primeiros Passos com o Seeed Studio XIAO MG24(Sense)

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO MG24</th>
   <th>Seeed Studio XIAO MG24 Sense</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop0.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/shop.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introdução

**Seeed Studio XIAO MG24** é uma placa de desenvolvimento mini baseada no MG24 da Silicon Labs. O XIAO MG24 é baseado no **núcleo ARM Cortex-M33**, arquitetura **RISC de 32 bits** com velocidade de clock máxima de 78 MHz, suportando instruções DSP e operações de ponto flutuante FPU, possuindo poderoso poder de computação e acelerador de hardware **AL/ML MVP** integrado, que consegue processar algoritmos de IA/aprendizado de máquina de forma eficiente. Além disso, possui excelente desempenho de RF, com **potência de transmissão de até +19,5 dBm** e sensibilidade de recepção tão **baixa quanto -105,4 dBm**. Ele suporta vários protocolos de IoT e transmissão sem fio, como **Matter, Thread, Zigbee, Bluetooth LE 5.3, Bluetooth mesh** etc.

### Especificação

<table>
  <tr>
    <th>Produto</th>
    <td>XIAO MG24</td>
    <td><a href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">XIAO MG24 Sense</a></td>
  </tr>
  <tr>
    <th>Processador</th>
    <td colspan="2">Silicon Labs EFR32MG24<br/>ARM Cortex-M33 @ 78MHz</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td colspan="2">256kB</td>
  </tr>
  <tr>
    <th>Flash</th>
    <td colspan="2">1536KB + 4MB Embarcada</td>
  </tr>
  <tr>
    <th>LEDs</th>
    <td colspan="2">1x LED de Usuário<br/>1x LED de Alimentação</td>
  </tr>
  <tr>
    <th>Sensores</th>
    <td>-</td>
    <td>1x Microfone Analógico Embarcado<br/>1x IMU Embarcado de 6 Eixos</td>
  </tr>
  <tr>
    <th>Interface</th>
    <td colspan="2">22 pinos (todos PWM):<br/>19x Analógico<br/>19x Digital<br/>1x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>Botão</th>
    <td colspan="2">1x Botão de RESET</td>
  </tr>
  <tr>
    <th>Segurança</th>
    <td colspan="2">Aceleração Criptográfica por Hardware, Gerador de Números Verdadeiramente Aleatórios, ARM® TrustZone®, Boot Seguro, Desbloqueio Seguro de Depuração etc.</td>
  </tr>
  <tr>
    <th>Baixo Consumo (Típ.)</th>
    <td colspan="2">1,95 μA</td>
  </tr>
  <tr>
    <th>Normal (Típ.)</th>
    <td colspan="2">6,71 mA</td>
  </tr>
  <tr>
    <th>Sleep (Típ.)</th>
    <td colspan="2">1,91 mA</td>
  </tr>
  <tr>
    <th>Compatibilidade de Software</th>
    <td colspan="2">Arduino IDE</td>
  </tr>
  <tr>
    <th>Antena Suportada</th>
    <td colspan="2">Antena Cerâmica MAX 2,4 GHz: 4,97 dBi</td>
  </tr>
  <tr>
    <th>Temperatura de Trabalho</th>
    <td colspan="2">-20°C~70°C</td>
  </tr>
  <tr>
    <th>Dimensões</th>
    <td colspan="2">21×17,8 mm</td>
  </tr>
</table>

### Recursos

- **CPU poderosa**: núcleo ARM Cortex-M33, com velocidade de clock máxima de 78 MHz, suportando instruções DSP e operações de ponto flutuante FPU, arquitetura RISC de 32 bits.
- **Ultrabaixo consumo de energia**: corrente de RX 4,6 mA / corrente de TX 5 mA (0 dBm), múltiplos modos de sono de baixo consumo
- **IA poderosa**: acelerador de hardware AI/ML MVP integrado, capaz de processar algoritmos de IA/aprendizado de máquina de forma eficiente.
- **Transmissão sem fio multiestilo**: transceptor sem fio multiprotocolo de 2,4 GHz integrado, suportando múltiplos protocolos de IoT como Matter, OpenThread, Zigbee, Bluetooth LE 5.3, Bluetooth mesh etc.
- **Melhor desempenho de RF**: excelente desempenho de RF, com potência de transmissão de até +19,5 dBm e sensibilidade de recepção tão baixa quanto -105,4 dBm (250 kbps DSSS)
- **Segurança poderosa**: recursos de segurança avançados do Secure Vault, incluindo boot seguro, criptografia, geração de números aleatórios, à prova de violação, depuração segura etc.
- **Tamanho ultrapequeno**: 21 x 17,8 mm.
- **Ricos recursos on-chip**: máximo de 1536 KB de Flash e 256 KB de RAM, com amplo espaço de armazenamento.
- **Interfaces ricas**: integrado com ADC de 12 bits 1 Msps, sensor de temperatura, comparador analógico, DCDC e outros periféricos ricos, e até 22 pinos, 2 USART, 2 UART de baixo consumo, 1 IIC e outras interfaces.

## Visão geral de hardware

<table align="center">
 <tr>
     <th>Diagrama de indicação do XIAO MG24 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24sense_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
   <tr>
     <th>Diagrama de indicação do XIAO MG24</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24_pinlist.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pinos do XIAO MG24/ XIAO MG24(Sense)</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/modifyMG24.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip
  A diferença entre as duas placas de desenvolvimento é que o MG24 Sense possui um sensor de microfone e um sensor de aceleração de seis eixos, enquanto o MG24 não possui.
:::

- 5V - Esta é a saída de 5 V da porta USB. Você também pode usar isto como entrada de tensão, mas deve haver algum tipo de diodo (schottky, sinal, potência) entre sua fonte de alimentação externa e este pino, com o ânodo para a bateria e o cátodo para o pino de 5 V.
- 3V3 - Esta é a saída regulada do regulador embarcado.
- GND - Terra de alimentação/dados/sinal

## **Mapa de Pinos**
| Pino XIAO               | Função           | Pino do Chip | Funções Alternativas | Descrição                          |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | Entrada/Saída de Alimentação        |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | Saída de Alimentação                |
| D0                      | Analógico        | PC00      |                    | GPIO, ADC                            |
| D1                      | Analógico        | PC01      |                    | GPIO, ADC                            |
| D2                      | Analógico        | PC02      |                    | GPIO, ADC                            |
| D3                      | Analógico        | PC03      |                    | GPIO, SPI, ADC                       |
| D4                      | Analógico,SDA    | PC04      |                    | GPIO, Dados I2C, ADC                 |
| D5                      | Analógico,SCL    | PC05      |                    | GPIO, Clock I2C, ADC                 |
| D6                      | Analógico,TX0    | PC06      |                    | GPIO, Transmissão UART, ADC          |
| D7                      | Analógico,RX0    | PC07      |                    | GPIO, Recepção UART, ADC             |
| D8                      | Analógico,SCK0   | PA03      |                    | GPIO, Clock SPI, ADC                 |
| D9                      | Analógico,MISO0  | PA04      |                    | GPIO, Dados SPI, ADC                 |
| D10                     | Analógico,MOSI0  | PA05      |                    | GPIO, Dados SPI, ADC                 |
| D11                     | Analógico        | PA09      | SAMD11_TX          | GPIO, Recepção UART, ADC             |
| D12                     | Analógico        | PA08      | SAMD11_RX          | GPIO, Transmissão UART, ADC          |
| D13                     | Analógico        | PB02      |                    | GPIO, Clock I2C, ADC                 |
| D14                     | Analógico        | PB03      |                    | GPIO, Dados I2C, ADC                 |
| D15                     | Analógico,MOSI1  | PB00      |                    | GPIO, Dados SPI, ADC                 |
| D16                     | Analógico,MISO1  | PB01      |                    | GPIO, Dados SPI, ADC                 |
| D17                     | Analógico,SCK1   | PA00      |                    | GPIO, Clock SPI, ADC                 |
| D18                     | Analógico,CS     | PD02      | Csn                | GPIO, Csn, ADC               |
| ADC_BAT                 |                  | PD04      |                    | Ler o valor de tensão da BAT        |
| RF Switch Port Select   |                  | PB04      |                    | Alternar entre a antena embarcada e a antena UFL |
| RF Switch Power         |                  | PB05      |                    | Alimentação de RF                    |
| Reset                   |                  | RESET     |                    | RESET                                |
| CHARGE_LED              |                  | VBUS      |                    | CHG-LED_Vermelho                     |
| USER_LED                |                  | PA07      |                    | Luz do Usuário_Amarelo               |


## Primeiros passos

Para permitir que você comece a usar o XIAO MG24 mais rapidamente, leia a preparação de hardware e software abaixo para preparar o XIAO.

### Procedimento de fábrica

Nós pré-programamos cada novo XIAO MG24 e XIAO MG24 Sense com um programa de fábrica simples.

1. **XIAO MG24**

O programa de fábrica pré-definido na versão normal é o Blink Light. Quando você ligar o XIAO, o indicador laranja do usuário acenderá.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

2. **XIAO MG24 Sense**

O programa de fábrica pré-definido na versão normal é: Quanto mais alto você gritar, mais brilhante a luz ficará.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/99.gif" style={{width:500, height:'auto'}}/></div>

### Preparação de Hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

:::tip
Alguns cabos USB podem apenas fornecer energia e não transferem dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Preparação de Software

A ferramenta de programação recomendada para o XIAO MG24 é o Arduino IDE, portanto você precisa concluir a instalação do Arduino como parte da preparação de software.

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

- **Passo 1.** Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

- **Passo 2.** Inicie o aplicativo Arduino.
- **[Passo 3](#add-board).**  Adicione o pacote da placa XIAO MG24 ao Arduino IDE e clique em `OK`.
- **Passo 4.** Feche o Arduino IDE e abra-o novamente.

#### Adicionar a placa XIAO MG24 {#add-board}

Para instalar a placa XIAO MG24, siga estas etapas:

```
https://siliconlabs.github.io/arduino/package_arduinosilabs_index.json 
```

1. Adicione a URL do gerenciador de placas acima às preferências do seu Arduino IDE.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/13(1).png" style={{width: 'auto', height: 'auto'}}/></div>

2. Baixe o pacote de placa XIAO MG24.

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/14(1).png" style={{width: 'auto', height: 'auto'}}/></div>

:::tip
Se você não conseguir encontrá-la depois de digitar, reabra o Arduino IDE.
:::

3. Opte pela variante `XIAO_MG24`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/15.png" style={{width:1000, height:'auto'}}/></div>

Agora aproveite a programação ✨.

#### Execute seu primeiro programa Blink

- **Passo 1.** Inicie o aplicativo Arduino.

- **Passo 2.** Navegue até **File > Examples > 01.Basics > Blink** e abra o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/12(1).png" style={{width:1000, height:'auto'}}/></div>

- **Passo 3.** Selecione o modelo de placa como **XIAO MG24** e selecione a porta correta para fazer o upload do programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/16.png" style={{width:1000, height:'auto'}}/></div>

Depois que o programa for enviado com sucesso, você verá a seguinte mensagem de saída e poderá observar que o LED laranja no lado direito do XIAO MG24 está piscando.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Código Blink MG24</th>
   <th>Exibição de piscar do LED</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/7.png" style={{width:700, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/8.gif" style={{width:400, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

## Uso da Bateria

O XIAO MG24 possui um chip de gerenciamento de energia integrado que permite que o XIAO MG24 seja alimentado de forma independente usando uma bateria ou que a bateria seja carregada através da porta USB do XIAO MG24.

Se você quiser conectar a bateria ao XIAO, recomendamos que compre uma bateria de lítio recarregável qualificada de 3,7 V. Ao soldar a bateria, tenha cuidado para distinguir entre os terminais positivo e negativo. O terminal negativo da fonte de alimentação deve ser o lado mais próximo da porta USB, e o terminal positivo da fonte de alimentação é o lado afastado da porta USB.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/4444.png" alt="pir" width="800" height="auto"/></div>

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
:::

**Instruções sobre o uso de baterias:**

1. Utilize baterias qualificadas que atendam às especificações.
2. O XIAO pode ser conectado ao seu computador por meio de um cabo de dados enquanto utiliza a bateria; fique tranquilo, o XIAO possui um chip de proteção de circuito integrado, que é seguro.
3. O XIAO MG24 não terá nenhum LED aceso quando estiver alimentado por bateria (a menos que você tenha escrito um programa específico), portanto, não julgue se o XIAO MG24 está funcionando ou não pela condição do LED; avalie de forma adequada pelo seu programa.
4. No momento, não temos como ajudá-lo a verificar o nível restante da bateria por meio de software (porque não há mais pinos de chip disponíveis), você precisa carregar a bateria regularmente ou usar um multímetro para verificar o nível da bateria.

Ao mesmo tempo, projetamos uma luz indicadora vermelha para o carregamento da bateria, que, por meio da exibição do indicador, informa ao usuário o estado atual da bateria durante o carregamento.

1. Quando o XIAO MG24 não está conectado à bateria, a luz vermelha acende quando o cabo Tipo-C é conectado e apaga após 30 segundos.
2. A luz vermelha pisca quando a bateria está conectada e o cabo Tipo-C é conectado para carregamento.
3. Ao conectar o Tipo-C para carregar totalmente a bateria, a luz vermelha se apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/battery_mg24.jpg" style={{width:600, height:'auto'}}/></div>

## Leitura da Tensão da Bateria

**Código de software**

```cpp
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  Serial.begin(115200);
  pinMode(PD3, OUTPUT);
  digitalWrite(PD3, HIGH);
}

void loop() {
  int voltageValue = analogRead(PD4);
  float voltage = voltageValue * (2 * 3.3 / 4095.0);

  Serial.print("Voltage: ");
  Serial.print(voltage, 2);
  Serial.println(" V");
  delay(1000);  // delay in between reads for stability
}
```

**Resultado da Exibição**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/55.png" alt="pir" width="800" height="auto"/></div>

## Exemplo de Deep Sleep e Sleep

#### Demo1 : Modo Sleep e despertar

```cpp

/*
   ArduinoLowPower timed sleep example

   The example shows the basic usage of the Arduino Low Power library by putting the device to sleep for a period of time.
   The device will enter sleep mode for 2000ms. During sleep the CPU is stopped but the RAM retains its contents.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Sleep with timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to sleep at %lu\n", millis());
  LowPower.sleep(2000);
  Serial.printf("Woke up at %lu\n", millis());
}
```

#### Demo2 : Modo Deep Sleep e despertar

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */

#include "ArduinoLowPower.h"

void setup()
{
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  Serial.println("Deep sleep timed wakeup");
}

void loop()
{
  digitalWrite(LED_BUILTIN, LED_BUILTIN_ACTIVE);
  delay(500);
  digitalWrite(LED_BUILTIN, LED_BUILTIN_INACTIVE);
  delay(500);

  Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(10000);
}


```

#### Demo3 : Modo Deep Sleep com flash e despertar

:::tip
Se você quiser configurar o flash para deep sleep, você precisa habilitar o registrador 0xb9
:::

```cpp
/*
   ArduinoLowPower deep sleep example with external or timed wakeup

   The example shows the basic usage of the Arduino Low Power library by putting the device into deep sleep.
   The device will remain in deep sleep until the sleep timer expires.
   During deep sleep the whole device is powered down except for a minimal set of peripherals (like the Back-up RAM and RTC).
   This means that the CPU is stopped and the RAM contents are lost - the device will start from the beginning of the sketch after waking up.

   This example is compatible with all Silicon Labs Arduino boards.

   Author: Tamas Jozsi (Silicon Labs)
 */
#include <Arduino.h>
#include "ArduinoLowPower.h"

#define CS_PIN PA6
#define CLK_PIN PA3
#define MOSI_PIN PA5
#define MISO_PIN PA4

#define READ_DATA 0x03
#define WRITE_ENABLE 0x06
#define PAGE_PROGRAM 0x02
#define SECTOR_ERASE 0x20

void sendSPI(byte data) {
  for (int i = 0; i < 8; i++) {
    digitalWrite(MOSI_PIN, data & 0x80);
    data <<= 1;
    digitalWrite(CLK_PIN, HIGH);
    delayMicroseconds(1);
    digitalWrite(CLK_PIN, LOW);
    delayMicroseconds(1);
  }
}

void writeEnable() {
  digitalWrite(CS_PIN, LOW);
  sendSPI(WRITE_ENABLE);
  digitalWrite(CS_PIN, HIGH);
}

void setup()
{
  //Serial.begin(115200);
  pinMode(PA7, OUTPUT);
  digitalWrite(PA7, LOW);

  pinMode(CS_PIN, OUTPUT);
  pinMode(CLK_PIN, OUTPUT);
  pinMode(MOSI_PIN, OUTPUT);
  pinMode(MISO_PIN, INPUT);


  //SW
  pinMode(PD3, OUTPUT);
  pinMode(PB5, OUTPUT);
  pinMode(PB1, OUTPUT);
  pinMode(PB0, OUTPUT);
  pinMode(PA6, OUTPUT);
  digitalWrite(PD3, LOW); //VBAT
  digitalWrite(PB5, LOW); //RF_SW
  digitalWrite(PB1, LOW); //IMU
  digitalWrite(PB0, LOW); //MIC
  digitalWrite(PA6, HIGH);  //FLASH

  //Serial.println("Deep sleep timed wakeup");
  writeEnable();
  digitalWrite(CS_PIN, LOW);
  sendSPI(0xB9);
  digitalWrite(CS_PIN, HIGH);
}

void loop()
{
  delay(12000);  
  digitalWrite(PA7, HIGH);
  delay(500);

  //Serial.printf("Going to deep sleep for 10s at %lu\n", millis());
  LowPower.deepSleep(600000);
}

```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/100.png" style={{width:1000, height:'auto'}}/></div>

### Prevenindo que o XIAO MG24 seja Bloqueado Durante o Deep Sleep

O **XIAO MG24** é uma poderosa placa de microcontrolador da Seeed Studio, mas usuários relataram problemas em que o dispositivo se torna sem resposta ("bricked") após entrar no modo Deep Sleep. Este tutorial explica a causa do problema, fornece um método detalhado de recuperação e oferece medidas preventivas para evitar bloquear o seu XIAO MG24.

O XIAO MG24 entra em um **modo Deep Sleep** (EM4) para economizar energia, mas em alguns casos ele não consegue acordar corretamente, impedindo o envio de novos sketches. Diferente de outras placas XIAO, o MG24 não possui um **botão BOOT** dedicado nem um método documentado para entrar no modo boot, o que torna a recuperação desafiadora.

#### Medidas Preventivas

Para evitar bloquear o seu XIAO MG24 ao usar o modo Deep Sleep, siga estes passos:

1. Use o Pino de Escape (PC1)

O XIAO MG24 possui um **mecanismo de escape** embutido para evitar o bloqueio. Se o **PC1** for puxado para **nível BAIXO** durante o reset, o dispositivo entra em um loop infinito, permitindo que você envie um novo sketch.  

- Conecte o **PC1** ao **GND** antes de resetar o dispositivo.  
- Após o reset, envie o seu sketch enquanto o dispositivo estiver no loop.  

2. Modifique o Seu Sketch
Adicione o código a seguir ao seu sketch para detectar uma chave do usuário e entrar em um loop infinito se ela for pressionada. Isso permite que você envie um novo sketch enquanto o dispositivo está em loop:

```cpp
#define USER_SW  PC3   // Example pin for user switch

void setup() {
  // Other setup code...

  pinMode(USER_SW, INPUT_PULLUP);
  if (digitalRead(USER_SW) == LOW) {
    Serial.println("Enable to upload new sketch");
    while (true) {
      digitalWrite(LED_BUILTIN, LOW);
      delay(50);
      digitalWrite(LED_BUILTIN, HIGH);
      delay(50);
    }
  }
}
```

3. Evite Colocar a Flash em Sleep Desnecessariamente

Garanta que o seu sketch não coloque a memória flash em modo de sleep (`Deep Power Down`), a menos que seja absolutamente necessário. Isso pode evitar problemas ao enviar novos sketches.

#### Agradecimentos

Agradecimentos especiais à **comunidade Seeed Studio** por suas valiosas contribuições e soluções para este problema. Os métodos de recuperação e as medidas preventivas discutidos neste tutorial foram desenvolvidos com base em ideias de membros da comunidade como **[msfujino](https://forum.seeedstudio.com/u/msfujino)** e **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso)**.  

Para mais detalhes e discussões, visite o tópico original no fórum:  
[DeepSleep bricks XIAO_MG24 - Seeed Studio Forum](https://forum.seeedstudio.com/t/deepsleep-bricks-xiao-mg24/284889)

## Recuperando um Dispositivo Bloqueado

O XIAO MG24 é atualmente o único modelo XIAO equipado com um chip de porta serial. Ao contrário de outros modelos XIAO, ele não possui um botão BOOT nem um método de recuperação por BOOT. Essa falha de projeto pode causar problemas quando o dispositivo entra em modo de sleep ou encontra anomalias de software, tornando impossível enviar um programa via porta serial. Para resolver isso, fornecemos um método para acordar a porta serial e restaurar a funcionalidade.

### Solução para Windows

1. **Baixar e Extrair o Pacote**  
   - Baixe o arquivo ZIP fornecido.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_windows.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - Extraia o conteúdo para uma pasta no seu computador.

2. **Conectar o XIAO MG24**  
   - Use um cabo USB para conectar o XIAO MG24 sem resposta ao seu computador.

3. **Executar o Script**  
   - Abra a pasta extraída e localize o script `flash_erase.bat`.  
   - Clique duas vezes no script para executá-lo.  
   - O script irá apagar a memória flash e resetar o dispositivo.

4. **Verificar a Recuperação**  
   - Depois que o script terminar, o XIAO MG24 deverá estar restaurado e pronto para uso.

### Solução para macOS

1. **Baixar e Extrair o Pacote**  
   - Baixe o arquivo ZIP fornecido (o link será adicionado aqui).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_MG24/xiao_mg24_flash_erase_macos.zip" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o ZIP 🖱️</font></span></strong>
    </a>
</div><br />
   - Extraia o conteúdo para uma pasta no seu computador.

2. **Conectar o XIAO MG24**  
   - Use um cabo USB para conectar o XIAO MG24 sem resposta ao seu computador.

3. **Permitir Acesso ao Terminal**  
   - Abra **System Preferences** > **Security & Privacy** > **Privacy**.  
   - Em **Accessibility**, certifique-se de que o **Terminal** está autorizado a controlar o seu computador.  
   - Se o Terminal não estiver listado, clique no botão **+** para adicioná-lo manualmente.

4. **Executar o Script**  
   - Abra o **Terminal**.  
   - Navegue até a pasta extraída usando o comando `cd`. Por exemplo:  

     ```bash
     cd /path/to/extracted/folder
     ```  

   - Execute o script `xiao_mg24_erase.sh` usando o seguinte comando:  

     ```bash
     ./xiao_mg24_erase.sh
     ```  

   - O script usará o OpenOCD para apagar a memória flash e resetar o dispositivo.  

5. **Verificar a Recuperação**  
   - Depois que o script terminar, o XIAO MG24 deverá estar restaurado e pronto para uso.

:::note

- Se o macOS não conseguir reconhecer o OpenOCD, certifique-se de que o OpenOCD está instalado e de que o caminho correto é usado no script.  
- Os scripts fornecidos são projetados especificamente para o XIAO MG24 e não devem ser usados com outros modelos XIAO.  

:::

## Recursos

### Para Seeed Studio XIAO MG24

**Projeto de Hardware**
- **📄[Datasheet]** [Silicon Labs EFR32MG24 Datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF )
- **📄[Reference Manual]** [Silicon Labs EFR32MG24 Reference Manual](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf )
- **📄[Schematic]** [XIAO MG24 Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf )
- **🗃️[PCB Design Files]** [XIAO MG24 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MG24_v1.0_KiCad_260114.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

### Para Seeed Studio XIAO MG24 Sense

**Projeto de Hardware**
- **📄[Datasheet]** [Silicon Labs EFR32MG24 Datasheet](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF )
- **📄[Reference Manual]** [Silicon Labs EFR32MG24 Reference Manual](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf )
- **📄[Schematic]** [XIAO MG24 Sense Schematic](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf )
- **🗃️[PCB Design Files]** [XIAO MG24 Sense KiCad Project](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MG24_v1.0_KiCad_260114.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
