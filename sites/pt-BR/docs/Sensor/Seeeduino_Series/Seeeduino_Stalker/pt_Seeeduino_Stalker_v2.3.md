---
description: Seeeduino Stalker v2.3
title: Seeeduino Stalker v2.3
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Stalker_v2.3
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_v2.3/
---


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)

Seeeduino Stalker é um nó de **Rede de Sensores Sem Fio** compatível com Arduino e rico em recursos. Sua estrutura modular e periféricos integrados o tornam conveniente para registrar dados de sensores com carimbo de data/hora de forma periódica. O Seeeduino Stalker vem com um sensor de temperatura, RTC com energia de backup, soquete para cartão SD, soquete Bee e carregador de bateria Solar LiPoimer Ion. O Seeeduino Stalker é um bom candidato para todos os seus projetos de rastreamento, monitoramento e controle.
A revisão 2.3 é quase a mesma que a revisão 2.2, o motivo da atualização é corrigir o bug adicionando um diodo retificador entre LI_BAT e USB5V.

Modelo: [ARD104D2P](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-p-727.html?cPath=80)

**Abaixo estão as edições anteriores：**

- [Seeeduino Stalker v1.0](https://seeeddoc.github.io/Seeeduino_Stalker_v1.0/)
- **Seeeduino Stalker v2.0b** : Versão beta, nova e aprimorada, com mais recursos

  - [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/) : Versão final não beta (pequenas melhorias na serigrafia inferior)

  - [Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/) : RTC DS3231, suporte para CR2032, novo soquete para cartão SD

  - [Seeeduino_Stalker_v2.2](https://seeeddoc.github.io/Seeeduino_Stalker_v2.2/): Mudança no método de leitura do status de carga da bateria

  - [Seeeduino_Stalker_v2.3](https://seeeddoc.github.io/Seeeduino_Stalker_v2.3/): Adicionado um diodo retificador entre LI_BAT e USB5V.

**E o Seeeduino Stalker é uma boa ferramenta nas seguintes áreas:**

- Rede de Sensores Sem Fio (usando **XBee** - comprado separadamente)

- Registro de GPS (usando **GPSBee** - comprado separadamente)

- Sistema de Aquisição de Dados capaz de se comunicar com um aplicativo em execução em iPhone/Android Phone/Nokia Phone (usando [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)  - comprado separadamente)

- Controle Remoto por RF (usando [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)  - comprado separadamente)

- Como uma simples plataforma de computação física compatível com Arduino ([UartSBee](https://seeeddoc.github.io/UartSBee/)  deve ser comprado separadamente para programação)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_and_the_Bees.jpg)

**NOTA:**

- Observe que o [UartSBee](https://seeeddoc.github.io/UartSBee/)  não pode ser inserido no soquete da série Bee presente no Seeeduino Stalker. O [UartSBee](https://seeeddoc.github.io/UartSBee/)  é destinado a fazer a interface entre os outros módulos Bee (mostrados na foto acima) e um computador e ele próprio não pode ser inserido no soquete destinado a esses outros módulos Bee. Há um cabeçalho de pinos de 5 vias separado presente tanto no UartSBee quanto no Seeeduino Stalker para fazer a interface entre eles. Este cabeçalho de pinos é composto de: VCC (para fornecer energia ao Stalker), TXD, RXD, DTR (para controlar o sinal de Reset do Stalker) e GND.

- O produto é fornecido como está, sem um invólucro isolante. Observe as precauções de ESD especialmente em clima seco (baixa umidade).

- Desative as portas seriais de bluetooth ao usar uma máquina de desenvolvimento baseada em Windows para evitar que a IDE do Arduino congele.

## Especificações ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.2_diagram.jpg)

- Microcontrolador: ATmega328P

- Cristal onboard: 8 MHz

- Tamanho da PCB: 92,71mm X 60,96mm

- Indicadores: Reset, Alimentação, LED em PB5 (Pino 13 do Arduino)

- Fonte de alimentação: 3,7–5V

- Conector de Alimentação: JST 2,0mm/ USB

- Contagem de E/S: 20

- Entrada ADC: 4 canais dedicados (ADC0~ADC3, resolução de 10 bits)

- Conectividade: I2C, UART, SPI

- Precisão do RTC: ±2ppm de 0°C a +40°C / ±3,5ppm de -40°C a +85°C

- Precisão do sensor de temperatura DS3231: ±3°C

- Tensão de entrada JST da bateria: 3,5–4,2V

- Tensão de entrada JST solar: 4,6–6V

- Consumo global de corrente: Veja a [nota](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_v2.3)

- Taxa de baud UART (durante a programação): 115200 bps

## Demonstração ##

### Primeiros Passos ###

As etapas a seguir ajudarão você a montar os recursos de hardware e software para começar a usar o Seeeduino Stalker

#### Etapa 1: Adquirindo o Hardware ####

Você precisará do seguinte hardware para executar seu primeiro programa.

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeduino_Stalker_v2.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Uartsb40.jpg)|
|---|---|
|**Seeeduino Stalker v2.e**|**UartsBee v4.0**    Necessário para programar o Seeeduino Stalker.[Compre Aqui](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|**Cabo Mini USB**      Você provavelmente já tem um desses por aí ou, se não tiver, compre um [aqui](https://www.seeedstudio.com/depot/mini-usb-cable-110cm-p-252.html). Usaremos este cabo para conectar o UartsBee a uma das portas USB do seu computador.|**Fio jumper dupla face de 1 pino (fêmea-fêmea)** Necessário para conectar o UartsBee ao Seeeduino Stalker. Você talvez já tenha alguns espalhados pela sua bancada. Caso não, você pode comprar um colorido [aqui](https://www.seeedstudio.com/depot/1-pin-dualfemale-jumper-wire-100mm-50pcs-pack-p-260.html?cPath=175_187).|

#### Etapa 2: Instalando os drivers e conectando o hardware ####

1.[UartSBee](https://seeeddoc.github.io/UartSBee/)  é como o canivete suíço multifuncional do mundo da Computação Física. Há um procedimento muito detalhado para usar o UartSBee tanto para usuários de Windows quanto de GNU/Linux [aqui](https://seeeddoc.github.io/UartSBee/) . No nosso caso ele irá desempenhar três funções:

- Permitir que programemos o Seeeduino Stalker.

- Permitir que nos comuniquemos com o Seeeduino Stalker.

- Fornecer energia (a partir da alimentação USB do seu computador) ao Seeeduino Stalker (incluindo quaisquer periféricos conectados a ele).

2.As duas primeiras funções do UartSBee (programação e comunicação) são realizadas por meio de um circuito integrado chamado FT232RL que está presente nele. Antes que o FT232RL possa ser usado para esses propósitos, seus drivers (certos programas de livre acesso do fabricante do FT232RL) devem ser instalados em seu PC com Windows/Ubuntu. Portanto, antes de prosseguir, baixe o arquivo de instalação do driver [a partir daqui](https://www.ftdichip.com/Drivers/VCP.htm) e instale-o em seu PC com Windows. (Drivers para OS X também estão disponíveis e são necessários para OS X)

3.O UartSBee possui um regulador de tensão onboard e uma chave que permite selecionar qual tensão (5,0V ou 3,3V) você deseja fornecer à placa de circuito alvo. No nosso caso a placa de circuito alvo é o Seeeduino Stalker, então você precisará ajustar esta chave deslizante para 5,0 volts

4.O esquema de conexão do nosso hardware é "**Computer**→(Mini USB Cable)→**UartSBee** →(Flat Ribbon Cable)→**Seeeduino Stalker**". Os fios jumper devem ser conectados entre o UartSBee e o Seeeduino Stalker antes de conectar o UartSBee ao computador. Consulte as fotos abaixo e certifique-se de que os sinais se alinhem conforme mostrado na tabela (**Nota: Os pinos TXD e RXD devem ser conectados cruzados conforme mostrado na tabela**).

5.Em seguida, conecte o cabo Mini USB do UartSBee ao seu computador. Se você estiver usando um PC com Windows, o balão "Found New Hardware" aparecerá e, em poucos instantes, os drivers para o FT232RL (ou seja, o UartSBee) serão instalados.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_Uartsbee_3.1_Connection.jpg)

 Jumper Wire connections

 |Seeeduino Stalker||UartSBee|
 |---|---|---|
 |USB5V| ↔  |VCC|
|RXD  |  ↔  |TXD|
| TXD  |  ↔  |RXD|
| GND| ↔  |GND|
 |DTR| ↔  |DTR|

### Notas de Conexão ###

- **Soquete da série Bee** - 2*10 pinos, passo de 2,0mm (que irá se conectar – um de cada vez – a qualquer um dos **módulos sem fio**: **XBee** , [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) , **GPSBee** ou **RFBee**.) A comunicação com esses módulos é feita via UART.

- **Interface serial** – Para economizar espaço e reduzir custos, a conectividade USB&lt;-&gt;Serial não é fornecida por padrão. Você pode usar o [UartSBee](https://seeeddoc.github.io/UartSBee/)  baseado em FT232 ou outras placas adaptadoras de USB para serial para fazer a programação ou comunicar-se com o PC.

- **LED de usuário** – Um LED foi fornecido onboard para uso em sua aplicação conforme desejado.

- **Interface I2C**: O CI de mudança de nível I2C onboard fornece tradução de tensão entre dispositivos de 3,3V e 5V. Isso permite que você conecte um dispositivo I2C ao Stalker quando ele estiver operando em 3,3 Volts. A tensão de operação do dispositivo I2C depende da tensão externa (LIPO_BAT e USB5V).

- **Interface Grove** – Adiciona interface Grove que usa D7/D8. Isso permite que você conecte módulos Grove de 3,3V e 5,0V ao Stalker quando ele estiver operando em 3,3 Volts. A tensão de operação do módulo Grove depende da tensão externa (LIPO_BAT e USB5V).

### Jumpers e Conectores ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.3_bottom.jpg)

#### Relacionado ao Cartão microSD (Cartão TransFlash) ####

- **CS_TF**(Tipo de jumper: **ponte de solda antiga - 2 vias**, Localização: **Parte inferior**, Estado de fábrica: **SS e PB2 conectados por uma trilha fina**)
Este jumper é um jumper de duas vias composto por três pads: PB1, SS e PB2. SS é o sinal Chip Select do cartão microSD. Por padrão, SS está conectado por uma trilha fina ao PB2 - Pino digital 10 (PB2) do microcontrolador. Se, em vez disso, você quiser conectar o sinal Chip Select do cartão microSD ao pino digital 9 (PB1), basta cortar a trilha entre PB2 e SS e colocar uma gota de solda entre SS e PB1.

- **POWER_TF**(Tipo de jumper: **ponte de solda**, Localização: **Parte inferior**, Estado de fábrica: **Desconectado**)

  Por padrão, EN está conectado ao VCC para alimentar sempre o cartão TF. Se você quiser controlar a alimentação do cartão TF com o pino digital 4(PD4) do microcontrolador, basta colocar uma gota de solda entre EN e PD4.   Por outro lado, se você quiser que o cartão TF esteja sempre disponível, alimentado por padrão, corte a solda que você colocou.

#### Relacionado ao Módulo Bee ####

- **POWER_BEE**(Tipo de jumper: **Ponte de solda**, Localização: **Parte inferior**, Estado de fábrica: **Desconectado**)
Por padrão, EN é conectado ao VCC para sempre alimentar o xbee. Se você quiser controlar a alimentação do xbee com o pino digital 5 (PD5) do microcontrolador, basta colocar uma gota de solda entre EN e PD5. Por outro lado, se você quiser que o xbee esteja sempre disponível, alimentado por padrão, corte a solda que você colocou.

#### Relacionado ao Módulo Bee - Somente relacionado a XBee ####

- **WIRELESS_PROGRAMMING**(Tipo de jumper: **Ponte de solda**, Localização: **Parte inferior**, Estado de fábrica: **Conectado por uma trilha fina**)
Você pode usar os módulos XBee da Digi para programar sem fio o ATmega328P no seu Seeeduino Stalker. Um módulo XBee deve ser configurado e instalado no seu Seeeduino Stalker e outro módulo XBee deve ser conectado ao seu notebook via um UartSBee. O pino DIO3 no Seeeduino Stalker será usado para controlar o pino Reset do ATmega328P. Este jumper permite que você habilite ou desabilite (padrão: habilitado) o controle do pino Reset do ATmega328P pelo pino DIO3 do módulo XBee. Você pode cortar a trilha entre as ilhas deste jumper se não quiser que o pino DIO3 controle o pino Reset do ATmega328P. Lady Ada tem um bom [tutorial](http://www.ladyada.net/make/xbee/arduino.html) sobre como programar remotamente seu produto baseado em Arduino usando XBee. (NOTA: Ambos os XBee – o que está no Stalker e o que está conectado ao PC – devem ser pré-configurados uma vez usando o software X-CTU antes do uso.)

- **RSSI_STATUS**(Tipo de jumper: **Ponte de solda**, Localização: **Parte superior**, Estado de fábrica: **conectado por uma trilha fina**)
Um LED vermelho presente na parte superior da placa de circuito impresso (PCB) está conectado ao pino RSSI (Received Signal Strength Indicator) do módulo XBee. O XBee gera um sinal PWM neste pino que é diretamente proporcional à qualidade do enlace RF quando o último pacote foi recebido por ele. Esse sinal PWM, quando aplicado ao LED, varia o seu brilho de acordo com a qualidade do enlace RF – quanto melhor o enlace, mais brilhante o LED. Como esse LED consome energia, você pode cortar a trilha entre as ilhas deste jumper para economizar energia da bateria em campo. O valor de RSSI também está disponível via UART usando o comando DB (medido em -dBm). (NOTA: O valor DB apenas indica a intensidade do sinal recebido do último salto. Se uma transmissão abranger múltiplos saltos, o valor DB não fornece indicação do caminho total da transmissão, nem da qualidade do pior enlace – ele apenas indica a qualidade do último enlace e deve ser usado com moderação.)

#### Relacionado ao LED do Usuário ####

- **D13_LED**(Tipo de jumper: **Ponte de solda**, Localização: **Parte inferior**, Estado de fábrica: **conectado por uma trilha fina**)
Um LED vermelho presente na parte superior da PCB está conectado ao Pino Digital 13 (PB5) do microcontrolador. O LED está livre para ser usado por você em seu programa para qualquer finalidade que desejar. Como esse LED consome energia, você pode cortar a trilha entre as ilhas deste jumper para economizar energia da bateria em campo e usar o Pino Digital 13 para outros propósitos, como controlar um shield.

#### Relacionado à Bateria ####

- **CH_STATUS**(Tipo de jumper: **Ponte de solda**, Localização: **Parte superior**, Estado de fábrica: **conectado por uma trilha fina**)
Dois LEDs presentes na placa Seeeduino Stalker indicam o status de carregamento da bateria LiPo. O LED SMD vermelho está conectado ao pino CHRG (ou CH) do CI carregador de bateria de lítio (CN3083 ou CN3063) que, quando aceso, indica que o ciclo de carregamento da bateria está ativo. O LED SMD verde está conectado ao pino DONE (ou OK) do CI carregador de bateria de lítio (CN3083 ou CN3063) que, quando aceso, indica que a bateria está totalmente carregada. Ao operar o Seeeduino Stalker em campo, você pode cortar a trilha que conecta as ilhas CH_STATUS para desconectar esses LEDs de C_VIN e, assim, economizar energia que, de outra forma, seria consumida ao acender esses LEDs.

#### Relacionado ao Relógio em Tempo Real (RTC) ####

- **INT**(Tipo de jumper: **Ponte de solda**, Localização: **Parte inferior**, Estado de fábrica: **Desconectado**)
Feche este jumper para permitir que o Relógio em Tempo Real (RTC) desperte o ATmega328P em um horário especificado. Este jumper conectará INT do chip RTC (DS3231) a PD2 (INT0) do ATmega328P.

- **RST/32K**(Tipo de jumper: **Ponte de solda - 2 vias**, Localização: **Parte inferior**, Estado de fábrica: **Desconectado**)
Se a ponte de solda estiver conectada a RST, o RTC será resetado se PD3 (Pino Digital 3) for para LOW.
O 32K é uma saída de 32 kHz do RTC em PD3 (Pino Digital 3 / INT1).

## Programação ##

Você deve definir o tipo de placa como **Arduino Pro ou Pro Mini (3.3V, 8MHz) w/ ATmega 328**

### RTC e Temperatura ###

- Baixe e instale a biblioteca DS3231 e os sketches disponíveis na seção de recursos. A biblioteca DS3231 inclui uma versão modificada da classe DateTime por Jean-Claude Wippler na **JeeLabs**
- Os sketches de demonstração fazem uso da biblioteca Arduino fat16lib para acessar o cartão SD. Instale a Biblioteca FAT16 a partir da **página do projeto fat16lib**.

#### Ajustar Data/Hora ####

- Defina a placa Arduino como `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328` no menu Tools-->Board da IDE do Arduino.

- Abra o exemplo adjust.pde da biblioteca DS3231

- Defina a data/hora atual usando o objeto da classe DateTime, dt, no exemplo:

- `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6));`
    Ex:-`DateTime dt(2011, 11, 10, 15, 18, 0, 5);`
- `DateTime dt(__DATE__, __TIME__); // Uses the compile time to set the clock`

- compile e faça o upload para o Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_adjust.png)

#### Obter Data/Hora Atual ####

- Defina a placa Arduino como `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328` no menu Tools-->Board da IDE do Arduino.

- Abra o exemplo now.pde da biblioteca DS3231

- A data/hora atual é lida do DS3231 usando a função `RTC.now()`.

    Ex:- `DateTime now = RTC.now();`

- compile e faça o upload para o Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_now.png)

#### Leitura de Temperatura do DS3231 ####

---

- Defina a placa Arduino como `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328` no menu Tools-->Board da IDE do Arduino.

- Abra o exemplo temperature.pde da biblioteca DS3231

- A temperatura atual em °C é lida do DS3231 usando a função `RTC.getTemperature()`.

- O registrador de temperatura do DS3231 é normalmente atualizado apenas uma vez a cada 64 segundos.

- Portanto, uma conversão forçada precisa ser iniciada usando `RTC.convertTemperature()`
- Ex:-

```
RTC.convertTemperature();             //convert current temperature into registers
Serial.print(RTC.getTemperature());   //read registers and display the temperature
Serial.println("deg C");

```

- compile e faça o upload para o Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_temp.png)

#### Interrupções do DS3231 ####

Este exemplo é uma demonstração da detecção de interrupção a partir da saída INT do DS3231. Esse recurso é útil para funcionalidade de registrador de dados (data logger), em que o MCU é colocado em modo de suspensão quando não está em uso e o INT do DS3231 acorda a CPU periodicamente. Isso prolonga a energia da bateria. Toda a operação está documentada no código.

- Solde os pinos PD2 e INT do jumper INT.

- Isso conecta o pino de saída de interrupção do DS3231 ao pino INT0 do ATmega328.

- Defina a placa Arduino como `Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328` no menu Tools-->Board da IDE do Arduino.

- Abra o exemplo interrupts.pde da biblioteca DS3231

- compile e faça o upload para o Stalker.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_interrupts.png)

### Lendo o Status de Carregamento ###

Conectada a bateria e o painel solar ao Stalker, a bateria pode ser carregada via painel solar e USB5v. A menor tensão de entrada para carregar a bateria é 4,4 V, portanto, se você estiver usando painel solar, deve colocá-lo em um local aberto com sol suficiente. Em seguida, faça o upload do seguinte código para o Staler para ler o status de carregamento do Stalker.

```
void setup()
{
  Serial.begin(57600);
  analogReference(INTERNAL);
  //analogRead(6);
}

void loop()
{
  char CH_status_print[][4]=
  {
    "off","on ","ok ","err"
  };
  unsigned char CHstatus = read_charge_status();//read the charge status
  Serial.print("charge status -->");
  Serial.println(CH_status_print[CHstatus]);
  delay(500);
}


unsigned char read_charge_status(void)
{
  unsigned char CH_Status=0;
  unsigned int ADC6=analogRead(6);
  if(ADC6>900)
  {
    CH_Status = 0;//sleeping
  }
  else if(ADC6>550)
  {
    CH_Status = 1;//charging
  }
  else if(ADC6>350)
  {
    CH_Status = 2;//done
  }
  else
  {
    CH_Status = 3;//error
  }
  return CH_Status;
}

```

### Lendo a Tensão da Bateria ###

Se você quiser saber a tensão da sua bateria no Pino Analógico 7, este é um exemplo simples.

```
void setup(){
    Serial.begin(57600);
    analogReference(INTERNAL);
}

void loop() {

float voltage;
int BatteryValue;

    BatteryValue = analogRead(A7);
    voltage = BatteryValue * (1.1 / 1024)* (10+2)/2;  //Voltage devider

    Serial.print("Battery Voltage -> ");
    Serial.print(voltage);
    Serial.print("V   ");
    Serial.println();

    delay(500);
}

```

### Usando uma Biblioteca de Bateria ###

Há uma biblioteca disponível para tensão da bateria, porcentagem e mais.

```
/*
Battery.cpp (Version 0.3) - Library for Battery infos on Seeeduino Stalker V2.3
Created by Stefan, March 2013.

Notes:
 - read lipo battery voltage -> analog pin 7
 - current capacity (in %)
 - charging status -> analog pin 6
 - flashing LED for battery indication
*/

#include <Battery.h>

int LEDPin=13;
int flashesforfull=10; // 1 blink =10%
int chcnt=0;

Battery battery;

void setup(){
  Serial.begin(57600);
  Serial.println("Battery Library for Seeeduino Stalker V2.3");
}

void loop(){
  battery.update();
  battery.ledflashStatus(LEDPin,flashesforfull);
  float voltage = battery.getVoltage();
  int percentage = battery.getPercentage();
  char* CS = battery.getChStatus();
  bool ch = battery.isCharging();
  if(ch) chcnt++;

  Serial.print("battery: ");
  Serial.print(voltage);
  Serial.print("V  -> ");
  Serial.print(percentage);
  Serial.print("%     Charge Status: ");
  Serial.print(CS);
  Serial.print("     charging counter: ");
  Serial.println(chcnt);
  delay(2000);

}
```

### Exemplos de Data Logger ###

A principal aplicação do Stalker é o registro de dados de sinais de sensores, como temperatura, juntamente com o carimbo de data e hora. Fornecemos 3 sketches juntamente com a biblioteca DS3231 demonstrando 3 implementações diferentes. Esses sketches colocam o MCU em modo de suspensão quando não estão executando operação de amostragem / registro de dados. A implementação completa está muito bem documentada no código. A seção a seguir fornece uma visão geral:

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_SolarPanel.png)
Seeeduino Stalker v2.1 SolarPanel.png

1.StalkerV21_DataLogger_Periodic.pde

- Este sketch registra periodicamente dados de temperatura no cartão SD configurado pela função `RTC.enableInterrupts(periodicity)`.
- A periodicidade é fornecida usando constantes predefinidas EverySecond ou EveryMinute ou EveryHour
- Este sketch produz saída detalhada, ou seja, os vários eventos que ocorrem dentro do MCU são exibidos no terminal serial.

2.StalkerV21_DataLogger_5min.pde

- Este sketch registra dados de temperatura usando o cartão SD configurado pela função `RTC.enableInterrupts(h, m, s)`.
- A periodicidade é fornecida usando h, m e s. Uma vez que uma interrupção é detectada, o horário da próxima interrupção é atualizado avançando os valores de h, m e s. A classe DateTime é muito útil para isso.
- ex:- `interruptTime = DateTime(interruptTime.get() + 300); //decide the time for next interrupt`
- Este sketch também produz saída detalhada, ou seja, os vários eventos que ocorrem dentro do MCU são exibidos no terminal serial.

3.StalkerV21_DataLogger_15Sec_NoSerialPort.pde

- Este é semelhante ao sketch anterior, com intervalo de registro de dados diferente. Todo o código relacionado à porta serial está comentado para reduzir o consumo de energia.
- Não há redução significativa no consumo de energia ao remover o código relacionado à porta serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Stalker_v2.1_datalogger_flowchart.png)

##### Uma nota sobre consumo de energia #####

A captura de tela a seguir mostra a medição de consumo de corrente do **Stalker** @ entrada de 3,3 V conectada ao LIPO_BAT. Em uma aplicação real o LIPO_BAT é conectado a uma bateria LiPo de 3,7 V. Portanto, considere a seguinte medição com certa cautela!!!
Aqui no [fórum](https://forum.seeedstudio.com/viewtopic.php?f=16&amp;t=3911&amp;hilit=Stalker) há algumas discussões sobre consumo de energia.
Parece que apenas o RTC tem uma Corrente de Alimentação em Standby de 110µA. [Aqui](http://www.gammon.com.au/forum/?id=11497) há algumas informações sobre baixo consumo de energia.

Mas não fique triste agora, mesmo que você chegue a uma corrente média de 1 mA, você terá 980 mAh/1 mA = 980h = **40,8** dias sem carregar

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Seeeduino_Stalker_v2.1_datalogger_15S_Current_Measurement.png)

- Vemos picos de modo ativo a cada 15 segundos. No modo ativo o MCU amostra a temperatura e a armazena no cartão SD.

- O consumo de corrente em modo de suspensão é de **95,82 uA** @ 3,3 V (isto é, **316,206 uW** de consumo de energia). Observe que o VCC do cartão SD ainda está energizado nesta demonstração. Para reduzir ainda mais a corrente em modo de suspensão, desligue o cartão SD usando o pino de habilitação do LDO reconfigurando o jumper POWER_TF. Isso também pode aumentar o tempo necessário para o cartão SD estabilizar quando o VCC é aplicado.

- O consumo de corrente no pico de modo ativo é de **22,43 mA** @ 3,3 V (isto é, **74,019 mW** de consumo de energia)

- O consumo de corrente no segundo pico de modo ativo é de **3,64 mA** @ 3,3 V (isto é, **12,012 mW** de consumo de energia)

- O modo ativo dura **400mS** ou 0,4 segundos.

 Nota: Se você comprar o "microSD Card Reader (in a capsule)", você não precisará do "Mini USB cable", uma vez que o primeiro também funciona

## Recursos ##

### Acessórios ###

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/StalkerEnclosure600.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Microsdcard2gb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Smartcable_04_LRG.jpg) |
|---|---|---|
|[Water-proof Enclosurefor Seeeduino Stalker v2.0](https://www.seeedstudio.com/depot/seeeduino-stalker-v2-enclosure-p-734.html?cPath=178_184) | [SanDisk 2GB microSD Card](https://www.seeedstudio.com/depot/sandisk-microsd-card-2gb-p-546.html?cPath=178_182)|[microSD Card Reader(in a capsule)](https://www.seeedstudio.com/depot/sd-card-reading-miniusb-cable-in-a-capsule-p-575.html?cPath=190)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Miniusbcable.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/JumperWire100n.jpg)|
|[Mini USB cable for use with UartSBee while programming](https://www.seeedstudio.com/depot/mini-usb-cable-100cm-p-252.html?cPath=178_179)|[Single wire - Jumper Wires](https://www.seeedstudio.com/depot/6-pin-dualfemale-jumper-wire-100mm-5-pcs-pack-p-129.html?cPath=175_187)|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Lithium-lon-polymer-batteries2A.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/img/Solar-panel55.jpg) |
|[Bateria de Polímero de Lítio (LiPo)](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=Lithium+Ion+polymer+Battery&amp;x=51&amp;y=12)|[Painel Solar para carregar bateria LiPo via Stalker](https://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&amp;search_in_description=0&amp;keyword=solar+panel&amp;x=0&amp;y=0)|

### Datasheets dos Componentes ###

- [DS3231](http://datasheets.maxim-ic.com/en/ds/DS3231.pdf) - Relógio de Tempo Real com sensor de temperatura digital na placa Seeeduino Stalker v2.1
- [CN3063](http://www.openhacks.com/uploadsproductos/dse-cn3063.pdf) - Controlador de carregamento para baterias de lítio (carregamento usando painel solar)
- [Si2305DS](http://www.vishay.com/docs/70833/70833.pdf) - MOSFET de canal P, 1,25 W, 1,8 V (G-S).

## FAQ ##

Aqui está o FAQ do Seeeduino Stalker, os usuários podem listar aqui as Perguntas Frequentes, como no exemplo abaixo:

1.O switch definido pelo usuário foi removido na versão 2.x do Seeeduino Stalker?

   Sim, removemos o botão do usuário na versão 2.x

2.Na versão 1.0 do Seeeduino Stalker o microcontrolador podia ser despertado do modo de suspensão via interrupção do módulo Bee. Esse mesmo recurso também está disponível na versão 2.0?

   Na versão anterior (isto é, 1.0), o microcontrolador podia ser despertado na recepção de pacote de dados RF pelo módulo Bee através do seu pino 15, que estava conectado ao INT0 (PD2) do microcontrolador. Na versão mais recente, o pino INT0 (PD2) do microcontrolador está conectado por um jumper ([INT_RTC](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/#Real_Time_Clock_.28RTC.29_Related) ) ao pino INT do chip RTC, que pode despertá‑lo em um horário pré-configurado (ou periodicamente). Como o Seeeduino Stalker é destinado ao uso como nó de rede de sensores sem fio, esta modificação será útil em casos em que o microcontrolador deve acordar periodicamente para transmitir leituras de sensores e voltar a dormir.

3.Os cabeçalhos de pinos I2C na Versão 1.0 do Seeeduino Stalker permitiam conexão fácil a dispositivos externos de 3,3 V e também de 5,0 V. O mesmo recurso está disponível na versão 2.x?

   Sim, na verdade nós o melhoramos - anteriormente o PCA9306 era usado para tradução de nível no barramento I2C. Mas agora usamos MOSFETs de canal N para tradução - esta técnica tem muitas vantagens (consulte a Nota de Aplicação **AN97055** da NXP.

4.Não há datasheet em inglês para o CN3083, o que eu faço?

   Usamos o CN3083 na revisão beta da versão 2.1 do Seeeduino Stalker (v2.1). A versão final v2.0 terá o CN3063. O datasheet do CN3083 está disponível apenas em chinês. Por outro lado, o CN3063 tem um datasheet em inglês e está anexado acima. Ambas as peças, CN3063 e CN3083, são muito semelhantes em operação.

5.Acho a explicação dos jumpers relacionados à bateria dada acima um pouco confusa, preciso de uma explicação mais simples.

  BAT_READ - Permite que você leia a tensão da bateria via pino Analógico 7 do microcontrolador usando seu conversor Analógico‑Digital embutido.

  CH_READ e CH_STATUS não estão mais conectados aos pinos Digitais (6 e 7) e sim ao pino Analógico 6, cada um com um resistor, portanto eles funcionam como mostrado no exemplo acima

   CH_STATUS - Os dois sinais acima (CH_READ e OK_READ) também têm LEDs conectados a eles. O jumper CH_STATUS permite que você desative esses LEDs e diminua o consumo de energia.

## Licenciamento ##

Esta documentação é licenciada sob a licença Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob várias licenças de código aberto, veja os arquivos de código-fonte para detalhes.

## Visualizador Online do Esquemático do Stalker v2.3

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do Stalker v2.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

### Biblioteca e Arquivo Eagle ###

**Nota:** Se você quiser usar os sketches de Datalogger, primeiro deve baixar e instalar o Fat16lib Arduino 1.0 Version de **fat16lib**

- **[Software]** [SeeeduinoStalker_Software(Arduino_1.0).zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/SeeeduinoStalkerV2.1_Software-Arduino_1.0-.zip)

- **[Software]** [SeeeduinoStalker_BatteryLibrary_V0.3](https://drive.google.com/file/d/0B_woEJs7VW-hc2dBcUJfOVlDTk0/edit?usp=sharing)

- **[Eagle]**[Stalker v2.3 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.3_Eagle_Files.zip)

- **[PDF]**[Stalker v2.3 PCB](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3.pdf)

- **[PDF]**[Stalker v2.3 SCH](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker%20v2.3%20SCH.pdf)

- **[Eagle]**[Stalker v2.2 Eagle Files.zip](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v2.3/res/Stalker_v2.2_eagle.zip)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
