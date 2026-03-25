---
description: Mesh Bee
title: Mesh Bee
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Mesh_Bee
sku: 114990002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Mesh_Bee/
---

## Bem-vindo ao Wiki do MeshBee

---
Este é um recurso da comunidade, destinado a reunir documentação, demonstrações e links para boas fontes de informação sobre:

 1. Arquitetura de firmware do MeshBee;
 2. Guia inicial do MeshBee;
 3. Casos de uso e exemplos do MeshBee;

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Mesh_bee.jpg)

Mesh Bee é um transceptor sem fio de 2,4GHz da seeed studio. Ele é baseado na nova série de microcontroladores sem fio JN516x da NXP e oferece suporte à pilha de rede ZigBee Pro. O firmware de fábrica encapsula a complicada operação da pilha ZigBee em alguns comandos seriais fáceis de usar e transforma o Mesh Bee em um nó de comunicação serial transparente que pode fazer parte de uma simples conexão ponto a ponto ou de uma complexa rede em malha. Além disso, Mesh Bee é totalmente open hardware e open source, o que significa que você pode personalizar o firmware conforme suas necessidades. Você pode usar o núcleo ARM do JN516x para controlar dispositivos e o JenOS para simplificar seu desenvolvimento. O ambiente de desenvolvimento e as ferramentas da NXP são todas gratuitas. Mesh Bee vai lhe proporcionar muita diversão.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/s/Mesh%20Bee%20-%20Open%20Source%20Zigbee%20Pro%20Module%20with%20MCU%20(JN5168).html)

## 2. Características

---

- Alcance: Interno/Urbano: até 30m; Externo linha de visada: até 100m;
- Sensibilidade do Receptor: -95dBm
- Taxa de Transmissão de Dados: 4800, 9600, 19200, 38400, 57600, 115200 (bps)
- Frequência de Operação: faixa de 2,4GHz não licenciada
- Tipo de comunicação: Ponto a Ponto ou Rede Estrela ou Rede em Malha
- Suporte a OTA: atualizar o firmware do nó pelo ar
- Interface Serial Fácil de Usar e portas de expansão ricas
- Comando AT Fácil de Usar: Configurar rede ZigBee, Definir Taxa de Baud Serial, etc.
- Hardware e Firmware de código aberto
- CPU RISC programável de 32 bits: clock de 32M, 256KB Flash, 32KB RAM, 4KB EEPROM
- Soquete compatível com o Xbee, assim você pode conectá-lo em qualquer soquete Xbee como uma substituição rápida.

Nota: Mesh Bee não se comunicará com Xbee, pois as versões da pilha ZigBee que eles utilizam são diferentes.

## 3. Especificações

---

| Especificação | Valor |
|--------------|-------|
| Microprocessador | JN5168 (CPU RISC de 32 bits, velocidade de clock de 32MHz) |
| Recursos | 256kB/32kB/4kB (Flash/RAM/EEPROM) |
| Tamanho da PCB | 24,5mmx30,5mmx0,8mm |
| Dimensão Externa | 24,5mmx30,5mmx9,77mm |
| Indicadores | Não |
| Fonte de alimentação | 3,3V |
| Contagem de IO | 12 |
| Entrada ADC | 3(2 multiplexando com IO) |
| Interfaces | UARTx2, SPI, I2C |
| Interface de programação | UART+MISO |
| Conectividade | Soquete compatível com XBee |
| Protocolo de Comunicação | Uart(TTL) |
| Faixa de Frequência de Operação | 2,4GHz |
| Pilha/Software | RF4CE, JenNet-IP , ZigBee Pro |

### 3.1 Características Elétricas

| Especificação | Mín | Típ | Máx | Unidade |
|--------------|-----|-----|-----|------|
| Tensão Máxima de Entrada | -0,3 | | 3,6 | V |
| Tensão de Entrada de Trabalho | 2,0 | 3,3 | 3,6 | V |
| Corrente de Transmissão | | 15 | | mA |
| Corrente de Recepção | | 17 | | mA |
| Corrente em Deep Sleep | | 0,12 | | uA |
| Temperatura de Operação | -40 | | | |

## 4. Definição dos pinos

| Nome do Pino | Funções Alternativas | Tipo | Descrição |
|----------|-------------------|------|-------------|
| 3V3 | - | Entrada de alimentação | VCC, +3,3V |
| TX1 | D14 | Saída | Porta Uart1 Tx; IO Digital 14 |
| RX1 | D15 | Entrada | Porta Uart Rx; IO Digital 15 |
| DO1 | SPIMISO | Entrada/Saída | Saída Digital 1; Entrada SPI Master In Slave Out |
| !RST | - | Entrada | Porta de reset |
| D11 | PWM1 | Entrada/Saída | IO Digital 11 (uso padrão: Indicador RSSI); Saída PWM1 |
| DO0 | SPICLK | Saída | Saída Digital 0; Saída de Clock SPI Master |
| D18 | SPIMOSI | Entrada/Saída | IO Digital 18; Saída SPI Master Out Slave In |
| VRef | ADC2 | Entrada | Tensão de referência do periférico analógico; entrada ADC 2 |
| GND | - | GND | GND |
| TX0 | D6 | Entrada/Saída | Porta Uart0 Tx; IO Digital 6 |
| D12 | CTS0 | Entrada/Saída | IO Digital 12; Entrada UART 0 Clear To Send |
| D9 | - | Entrada/Saída | IO Digital 9 (uso padrão: Indicador de Ligado/Sono do Mesh Bee) |
| RX0 | D7 | Entrada/Saída | Porta Uart0 Rx; IO Digital 7 |
| D10 | - | Entrada/Saída | IO Digital 10 (uso padrão: Indicador de Associação de Rede) |
| D13 | RTS0 | Entrada/Saída | IO Digital 13; Saída UART 0 Request To Send |
| D1 | SPISEL2; ADC4 | Entrada/Saída | IO Digital 1; Saída SPI Master Select 2; entrada ADC 4 |
| D0 | SPISEL1; ADC3 | Entrada/Saída | IO Digital 0; Saída SPI Master Select 1; entrada ADC 3 |
| D16 | SCL | Entrada/Saída | IO Digital 16; clock I2C |
| D17 | SDA | Entrada/Saída | IO Digital 17; dados I2C |

Nota: Apenas as funções alternativas importantes estão listadas, podem existir mais, por favor consulte o data sheet do JN516x.

Nota2: Pinos relacionados a SPI podem ser usados como IO digital somente se você souber como desabilitar a unidade de flash externa.

## 5. Uso

---

### 5.1 Instalação de Hardware

O Mesh Bee possui um soquete Bee geral. Assim, você pode usá-lo exatamente como XBee ou RFBee etc. Uma coisa a notar é que os pinos não são 100% compatíveis entre si, exceto por parte deles.
Se você é iniciante na série Bee, siga [este link](/pt-br/Grove_Cape_for_BeagleBone_Series "Grove_Cape_for_BeagleBone_Series") para aprender sobre a Série Bee e [este link](/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node#Usage-"RFbee-V1.1---Wireless-Arduino-compatible-node") para saber como instalar o Bee com outro hardware.

### 5.2 Como atualizar o firmware

O firmware padrão pré-gravado no Mesh Bee é um firmware de coordenador devido à conveniência de fabricação e venda. Você deve gravar o firmware de roteador / dispositivo final por conta própria. E é simples o bastante para makers como você.

JN516x possui uma interface específica de download de firmware com uma UART e alguns outros pinos, então você precisa de um **programador** para gravá-lo. Nós fornecemos isso com o [UartSBee v5](/pt-br/UartSBee_v5 "UartSBee v5"). O UartSBee v5 possui a maior parte dos recursos da versão v4 e, além disso, um programador para o Mesh Bee.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/UartSBee_V05.jpg)

Para atualizar o firmware, siga os passos:

- Passo 1: Baixe o firmware mais recente do github;

  - [Mesh_Bee#9.1_Firmware_Downloads](/pt-br/Mesh_Bee#91-Downloads-de-Firmware-"Mesh-Bee")

- Passo 2: Configure o UartSBee v5 com o FT_Prog;

  - Baixe o FT_Prog: [File:FT Prog v2.8.2.0.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/FT_Prog_v2.8.2.0.zip "File:FT Prog v2.8.2.0.zip") e instale. (Apenas Windows)

  - Conecte o UartSBee v5 ao PC, abra o FT_Prog e configure-o assim:

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/FT_Prog.jpg)

- Passo 3: Mude o SW1 para a posição "3V3" e o SW3 para a posição "Prog";

- Passo 4: Conecte o módulo Mesh Bee no UartSBee v5 ;

-Passo 5: Grave o firmware com o "Jennic Flash Programmer";

Baixe o Jennic Flash Programmer: [File:Jennic flash programmer.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Jennic_flash_programmer.zip "File:Jennic flash programmer.zip") e descompacte. (Apenas Windows)

Abra "FlashGUI.exe" -&gt; navegue até o arquivo bin do firmware

-&gt; selecione a porta COM do UartSBee v5 (se não existir, clique no botão Refresh)

-&gt; as outras seleções como na imagem a seguir -&gt; marque "Connect"

-&gt; as informações do dispositivo e o endereço MAC serão detectados

-&gt; clique no botão "Program"

-&gt; Uma pequena janela de ferramenta aparecerá e o progresso do download será exibido

-&gt; fim.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer1.jpg)

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer3.png)

### 5.3 Comandos AT &amp; Configuração

#### 5.3.1 Comandos AT

O Mesh Bee pode ser configurado com comandos AT por enquanto. O método de configuração via API binária pode ser fornecido conforme suas necessidades. Portanto, por favor, poste seus requisitos no [grupo de discussão](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group) se você precisar deste recurso. Tomaremos a decisão de desenvolvimento com base nas suas opiniões.

**Baixe o manual de comandos AT:** [File:AT command manual for Mesh Bee V1.0.pdf](https://files.seeedstudio.com/wiki/Mesh_Bee/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf "File:AT command manual for Mesh Bee V1.0.pdf")

#### 5.3.2 Configuração

O Mesh Bee suporta o padrão ZigBee Pro, que pode construir uma rede em malha com um grande número de nós. Você pode precisar de alguns conceitos básicos de ZigBee para configurá-lo de forma mais eficaz. Mas aqui está um guia de como formar uma simples rede ponto a ponto. Qualquer pessoa pode fazer isso sem qualquer conhecimento básico de ZigBee.

<big>Passo 1: Prepare dois módulos Mesh Bee e um UartSBee v5;</big>

<big>Passo 2: Grave o firmware de Dispositivo Final em um dos dois Mesh Bee, consulte 5.2 Como atualizar o firmware;</big>

<big>Passo 3: Configure o nó coordenador;</big>

Para configurar um nó Mesh Bee, você deve primeiro conectá-lo ao PC. Há muitas maneiras de fazer isso. Se você tiver um UartSBee v5, isso fica muito fácil. Basta conectar o coordenador ao UartSBee v5 e mudar o SW3 para o lado "Uart".

Além disso, você pode usar qualquer dispositivo USB-para-TTL. O ponto básico é que o Mesh Bee se comunica com o exterior através da UART1(TX1&amp;RX1) e o nível de tensão da UART1 é 3,3V. Tensões mais altas podem queimar o IO.

Após a conexão dos fios, abra uma ferramenta serial, selecione a porta COM e defina a taxa de baud para 115200(padrão).

Envie "+++" para colocar o Mesh Bee no modo de comando AT. Observe que você deve configurar sua ferramenta serial para enviar o caractere CR.

Envie o comando "ATPA1".

Pressione o botão de reset do UartSBee v5 para reiniciar o Mesh Bee.

Aguarde até que o LED "ASSOC" do UartSBee v5 acenda. Pronto, o coordenador concluiu a formação da rede ZigBee. Você pode enviar o comando "ATIF" para visualizar as informações da rede.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Configure_coo2.png)

Envie o comando "ATEX" para sair do modo AT e entrar no modo de transmissão de dados. Agora o nó coordenador está configurado.

<big>Passo 4: Configure o nó de dispositivo final;</big>

Primeiro, conecte à UART1 do dispositivo final com baud rate 115200. Observe que, se você tiver apenas 1 UartSBee v5 e quiser configurar o dispositivo final com o mesmo, você deve ligar o coordenador novamente depois de desconectá-lo do UartSBee v5. O coordenador deve estar sempre ligado porque ele mantém a rede ZigBee criada. Se ele desligar, a rede se perde.

Envie "+++" para o dispositivo final.

-&gt; Em seguida, envie o comando "ATAJ1".

-&gt; Envie o comando "ATRS"

-&gt; Aguarde alguns segundos

-&gt; O LED "ASSOC" do UartSBee v5 acende (configurar com UartSBee v5).

-&gt; Envie o comando "ATIF", verifique o "PANID" da seção "3. belonging to"; se o "PANID" não for 0x0000, então o dispositivo final ingressou na rede ZigBee.

Agora envie o comando "ATEX" para sair do modo AT.

Pronto, o dispositivo final está bem configurado.

<big>Passo 5: Testar a conexão;</big>

Conecte os dois nós (coordenador &amp; dispositivo final) com uma ferramenta serial. Envie dados de um lado e verifique se os mesmos dados são recebidos do outro lado.

As informações da conexão serão salvas de forma persistente mesmo após desligar a alimentação.

### 5.4 Guia de OTA

Mesh Bee suporta atualização de firmware over-the-air. Ou seja, depois que você terminar a configuração da rede, o firmware do roteador/dispositivo final pode ser atualizado por OTA.

<big>Passo 1: Gravar um novo firmware na flash externa do coordenador. </big>

Para realizar este passo tudo o que você deve fazer é muito parecido com [5.2 How to update firmware](/pt-br/Mesh_Bee#52-How-to-update-firmware-"Mesh-Bee"), a única diferença é escolher "External" para "Flash Select".

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_External.jpg)

<big>Passo 2: Certifique-se de que a rede está corretamente configurada e que os nós podem se comunicar entre si.</big>

Configure os nós da rede conforme descrito em [5.3.2_Configuration](/pt-br/Mesh_Bee#53-AT-commands--configuration-"Mesh-Bee"). Envie o comando "ATLA" para ver os nós na rede.

<big>Passo 3: Disparar o processo de OTA. </big>

Envie o comando "ATDAxxxx" para definir o endereço de destino (xxxx é o endereço curto do nó cujo firmware será atualizado)

-&gt; Envie "ATOR200" para definir o intervalo dos pacotes OTA para 200ms/pacote. Mais lento será melhor.

-&gt; Envie "ATOT" para disparar o processo de download OTA

-&gt; Envie "ATOS" para monitorar o andamento do download ou envie "ATOA" para abortar o download, se desejar.

Quando o download terminar, o nó de destino será reiniciado e o novo firmware passará a valer. Você pode enviar o comando "ATLA" para confirmar a versão de FW do destino.

### 5.5 Exemplo

Este exemplo é compatível apenas com o firmware v1.0; para versões posteriores de firmware, consulte o Cook Book, que pode ser baixado na seção Resources.

Este é um exemplo simples de controle remoto com 2 nós Mesh Bee.

<big>Passo 1: Preparar os materiais</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example0.jpg)

São eles:

- [Seeeduino v3](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7) x2

- XBee shield x2 , versão 1/2, a imagem acima mostra [XBee Shield v1](https://www.seeedstudio.com/depot/xbee-shield-p-419.html?cPath=73) e [XBee Shield v2](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)

- Mesh Bee x2 (a imagem acima mostra a versão protótipo; a versão final pode ser diferente na cor)

- UartSBee v5 x1

- [Rotary Angle](https://www.seeedstudio.com/depot/grove-rotary-angle-sensor-p-770.html?cPath=85_52) x1

- [Servo](https://www.seeedstudio.com/depot/grove-servo-p-1241.html?cPath=39_41) x1

- Cabos

<big>Passo 2: Configurar os nós Mesh Bee</big>

Consulte [5.3.2_Configuration](/pt-br/Mesh_Bee#532-Configuration-"Mesh-Bee") para configurar uma conexão p2p.

<big>Passo 3: Montar o lado do Servo (controlado) </big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example1.jpg)

Conecte o fio de sinal (amarelo) do servo ao Digital 10, o fio vermelho ao VCC e o fio preto/marrom ao GND

-&gt; Conecte "XB_TX" ao D0 e conecte "XB_RX" ao D1 (significa usar a UART de hardware do seeeduino)

-&gt; Conecte o Mesh Bee (coordenador) no soquete Bee do XBee shield

-&gt; Não se esqueça de conectar o XBee shield ao Seeeduino D:

<big>Passo 4: Montar o lado de controle</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example2.jpg)

Conecte o fio de sinal (amarelo) do Rotary Angle ao A0, o fio vermelho ao VCC e o fio preto ao GND

-&gt; Mova o switch "USB_UART_M..8" do XBee Shield v1 para o lado direito (M..8) e o switch "D11/12_XBEE_UART" para o lado direito (X_RX_X_TX)

-&gt; Conecte o Mesh Bee (dispositivo final) no soquete Bee do XBee shield

-&gt; Conecte o XBee Shield ao Seeeduino

<big>Passo 5: Programar</big>

MeshBeeDemo_servo:

```
#include <Servo.h>
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(11, 12); // RX, TX

Servo myservo;  // create servo object to control a servo
// a maximum of eight servo objects can be created

int pos = 0;    // variable to store the servo position
unsigned int sensorValue = 0;  // variable to store the value coming from the sensor
unsigned char cmd;
unsigned int lastSensorValue = 0;

void setup()
{
    Serial.begin(115200);
    //mySerial.begin(9600);
    myservo.attach(10);  // attaches the servo on pin 9 to the servo object

    //config Mesh Bee
    Serial.println("atex");

}


void loop()
{
    if (read_msg(&cmd, &sensorValue))
    {
        if (cmd ==  CMD_POS)
        {

            if (lastSensorValue != sensorValue)
            {
                lastSensorValue = sensorValue;
                //Serial.println(sensorValue);
                pos = map(sensorValue, 0, 1023, 0, 180);
                myservo.write(pos);
            }
        }
    }
    //delay(10);
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                //available packet
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

MeshBeeDemo_analogInput:

```
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(10, 11); // RX, TX

int sensorPin = A0;    // select the input pin for the potentiometer
int sensorValue = 0;  // variable to store the value coming from the sensor
int lastSensorValue = 0;

void send_msg(unsigned char cmd, unsigned int msg);
boolean read_msg(unsigned char *cmd, unsigned int *msg);

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(115200);

    Serial.println("+++");
    Serial.println("ATTM1");  //set Mesh Bee into unicast tx mode
    Serial.println("ATDA0000");  //set the unicast address to COO
    Serial.println("ATEX");  //exit the AT command mode

    // set the data rate for the SoftwareSerial port
    //mySerial.begin(9600);
    //mySerial.println("Hello, world?");
}

void loop() // run over and over
{
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    if (sensorValue != lastSensorValue || 1)
    {
        //Serial.println(sensorValue);
        send_msg(CMD_POS, (unsigned int)sensorValue);
        lastSensorValue = sensorValue;
        delay(50);
    }
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                //available packet
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example3.gif)

### 5.6 Nota de uso

ZigBee é um protocolo de transmissão em rede de baixa potência &amp; baixa velocidade. Portanto, ele não é projetado para situações de alta velocidade.

A especificação de taxa de dados da rede Mesh Bee com 2~3 nós:

| Direção de Transmissão | Método de Transmissão | Período do Pacote (ms) | Tamanho Máx. do Pacote (bytes) |
|----------------------|----------------------|-------------------------|--------------------------------|
| COO/ROU | Broadcast | 250 | 50 |
| COO/ROU -&gt; END | Unicast | 40 | 50 |
| END | Broadcast | 150 | 50 |
| END -&gt; COO/ROU | Unicast | 20 | 25 |
| END -&gt; COO/ROU | Unicast | 40 | 50 |

A taxa de dados será menor para uma rede maior.

## 6. Desenvolvimento

O maior recurso que queremos apresentar é que o Mesh Bee suporta reprogramação. É muito empolgante ter um módulo ZigBee programável com um preço tão razoável.

Mesh Bee usa o chip chamado JN5168 com um núcleo RISC de 32 bits e recursos abundantes:

- Flash/RAM/EEPROM: 256kB/32kB/4kB

- Porta SPI mestre com três saídas de seleção

- Porta SPI escrava

- 2x UART's

- 5x PWM (4x timer &amp; 1x contador)

- I2C

- ADC de 4 canais e 10 bits

- Comparador

- Sensor de bateria &amp; temperatura

Com o nosso UartSBee v5 você pode reprogramar o Mesh Bee facilmente. Há apenas um pequeno passo de aprender alguns documentos da NXP antes de começar a usar bem.

### 7.1 Arquitetura de software

Esta é a arquitetura de software do Mesh Bee.

Você pode desenvolver uma aplicação stand-alone em AUPS. A aplicação do usuário consiste em duas funções ao estilo arduino no nível superior: setup &amp; loop, que funcionam exatamente como as do arduino.

Também apresentamos o Suli. Suli significa Seeed Unified Library Interface. Passaremos a usar o Suli para nossos futuros lançamentos de drivers/bibliotecas de módulos. Isso significa que nossa biblioteca/driver compatível com Suli se adaptará a todas as plataformas que o Suli suporta. Dê uma olhada em [https://github.com/Seeed-Studio/Suli](https://github.com/Seeed-Studio/Suli) para mais informações.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeArchitecture0603.jpg)

### 7.2 Ambiente de Desenvolvimento

A NXP fornece um ambiente de desenvolvimento em escala completa, ferramentas e documentos. O ambiente de desenvolvimento consiste no SDK toolchain e no SDK da pilha ZigBee.

Acesse o site da NXP para obter todos esses recursos com uma página de descrição detalhada: [http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

Nota: O firmware de fábrica do Mesh Bee é desenvolvido sobre o perfil Smart Energy.

Para criar o ambiente de desenvolvimento, você deve baixar:

- JN-SW-4041    SDK Toolchain

- JN-SW-4064    ZigBee Smart Energy SDK

- JN-SW-4067-JN516x ZigBee Home Automation SDK

e então instalá-los em um PC com Windows (instale o JN-SW-4064 após o JN-SW-4041).

Para editar o arquivo .oscfgdiag e o arquivo .zpscfg, você deve instalar os plugins do eclipse de acordo com o guia na seção 6.2.2 em &lt;[SDK Installation and User Guide.pdf](https://files.seeedstudio.com/wiki/Mesh_Bee/res/SDK_Installation_and_User_Guide.pdf)&gt;.

Nota2: Infelizmente, apenas a toolchain para Windows está disponível agora. Para usuários de Linux e Mac, uma VM com Windows pode ser a sua escolha.

### 7.3 Guia de Programação

Programar o JN5168 exige algum conhecimento básico, então é difícil explicar em poucas palavras. Explorar a fundo os documentos oficiais talvez seja indispensável.

Recursos oficiais da NXP:

Guias do Usuário

- **JN-UG-3048 &lt;ZigBee PRO Stack User Guide&gt; Apresenta conceitos essenciais do ZigBee PRO e detalha as APIs ZigBee PRO para desenvolver aplicações.**

- JN-UG-3059 &lt;ZigBee PRO Smart Energy API User Guide&gt; Apresenta ZigBee Smart Energy (SE) e detalha a API SE para desenvolver aplicações.

- **JN-UG-3075 &lt;JenOS User Guide&gt;       Detalha as APIs JenOS usadas no código de aplicação ZigBee PRO para gerenciar recursos do SO.**

- JN-UG-3077 &lt;ZigBee Cluster Library User Guide&gt; Descreve a implementação da NXP da ZigBee Cluster Library (ZCL).

Application Notes

- JN-AN-1135 &lt;Smart Energy HAN Solutions Application Note&gt; Fornece e descreve exemplos de soluções Smart Energy Home Area Network

Documentação Relacionada

- **JN-DS-JN516x &lt;JN516x Datasheet&gt; Detalha a série de microcontroladores JN516x.**

- **JN-UG-3087 &lt;JN516x Integrated Peripherals API User Guide&gt; Detalha a JN516x Integrated Peripherals API, usada no código de aplicação para interagir com os periféricos integrados no chip JN516x.**

Página de download: [http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

### 7.4 Contribuição

[![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeFirmwareProject.png)](https://seeed-studio.github.io/Mesh_Bee/)

## 8. Grupo de Discussão

Criamos um grupo do Google para discussões gerais sobre o Mesh Bee e tópicos relacionados ao desenvolvimento. Acesse este link para ver o que está acontecendo por lá: [https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 9. Recursos

- [Arquivo Eagle para Mesh Bee v1.0](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip)

- [Manual de comandos AT para Mesh Bee V1.0](https://files.seeedstudio.com/wiki/Mesh_Bee/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf)

- [Datasheet do JN5168](https://files.seeedstudio.com/wiki/Mesh_Bee/res/JN516X.pdf)

- [Cook Book para v1004](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_Cook_Book.pdf)

- [Manual do Usuário para v1004](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_User_Manual_v0.3.pdf)

### 9.1 Downloads de Firmware

**v1001 (firmware de fábrica, a versão mais estável até agora):**

Firmware do coordenador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin)

Firmware do roteador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin)

Firmware do dispositivo final: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin)

**v1004**

Firmware do coordenador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin)

Firmware do roteador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin)

Firmware do dispositivo final: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin)

**Sincronize com nosso desenvolvimento e lançamentos:**

[https://github.com/Seeed-Studio/Mesh_Bee/releases](https://github.com/Seeed-Studio/Mesh_Bee/releases)

**Mais informações sobre o firmware do Mesh Bee:**

- [Código-fonte do firmware Mesh Bee no Github](https://github.com/Seeed-Studio/Mesh_Bee)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
