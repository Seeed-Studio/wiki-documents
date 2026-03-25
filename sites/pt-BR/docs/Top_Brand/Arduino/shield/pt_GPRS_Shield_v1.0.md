---
description: GPRS Shield V1.0
title: GPRS Shield V1.0
keywords:
  - shield Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /GPRS_Shield_v1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/GPRS_Shield_v1.0/
---
<!-- ---
name: GPRS Shield V1.0
category: Shield
bzurl: https://www.seeedstudio.com/depot/gprs-shield-p-779.html
oldwikiname:  GPRS Shield V1.0
prodimagename: gprs-shield-p-779.html
surveyurl: https://www.research.net/r/GPRS_Shield_V1
sku:  103030013
--- -->

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_shield_v1.4.jpg)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

O GPRS Shield oferece uma forma de usar a rede de telefonia celular GSM para receber dados de um local remoto. O shield permite fazer isso por meio de qualquer um dos três métodos:

* Serviço de Mensagens Curtas (SMS)
* Áudio
* Serviço GPRS

O GPRS Shield é compatível com todas as placas que têm o mesmo formato (e pinagem) de uma placa Arduino padrão. O GPRS Shield pode ser configurado e controlado através da UART por comandos AT simples. Baseado no módulo SIM900 da SIMCOM, o GPRS Shield é como um telefone celular. Além dos recursos de comunicação, o GPRS Shield possui 12 GPIOs, 2 PWMs e um ADC.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

## Versão

| Revisão    | Descrições     |Lançamento    |
| :------------- | :------------- |:------------- |
| v0.9b      | Lançamento público inicial (beta)       |3 de mar de 2011       |
| v1.2      | Adicionada porta de software para ligar/desligar o SIM90       |2 de dez de 2011       |
| v1.4     | Redesenho do circuito de fonte de alimentação, novo roteamento do layout da PCB      |30 de ago de 2012       |

## Recursos

* Baseado no módulo SIM900 da [SIMCom](http://simcomm2m.com/En/)
* Quad-Band 850 / 900/ 1800 / 1900 MHz - funciona em redes GSM em todos os países do mundo.
* Controle por comandos AT - Comandos Padrão: GSM 07.07 &amp; 07.05 | Comandos Avançados: Comandos AT da SIMCOM.
* Serviço de Mensagens Curtas - para que você possa enviar pequenas quantidades de dados pela rede (ASCII ou hexadecimal bruto).
* Pilha TCP/UDP embarcada - permite enviar dados para um servidor web.
* Conectores para alto-falante e fone de ouvido - para que você possa enviar sinais DTMF ou reproduzir gravações como em uma secretária eletrônica.
* Suporte para SIM Card e Antena GSM - presentes na placa.
* 12 GPIOs, 2 PWMs e um ADC (lógica de 2,8 volts) - para ampliar seu Arduino.
* Baixo consumo de energia - 1,5 mA (modo sleep)
* Faixa de Temperatura Industrial - -40°C a +85 °C

## Ideias de Aplicação

* Aplicações M2M (Machine 2 Machine) - Para transferir dados de controle usando SMS ou GPRS entre duas máquinas localizadas em duas fábricas diferentes.
* Controle remoto de eletrodomésticos - Envie SMS para ligar ou desligar sua máquina de lavar em casa enquanto você está no escritório.
* Estação meteorológica remota ou Rede de Sensores Sem Fio - Faça isso com o [Seeeduino Stalker](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_V3.1/) e crie um nó sensor capaz de transferir dados de sensores (como de uma estação meteorológica - temperatura, umidade etc.) para um servidor web (como o [pachube.com](http://www.pachube.com)).
* Sistema de Resposta de Voz Interativa - Combine o GPRS Shield com um Decodificador MP3 e um Decodificador DTMF (além de um Arduino) para criar um [Sistema de Resposta de Voz Interativa (IVRS)](https://en.wikipedia.org/wiki/Interactive_voice_response).
* Sistema de Rastreamento de Veículos - Combine o GPRS Shield com um Arduino e um módulo GPS. Depois instale-o no seu carro e publique sua localização ao vivo na internet. Pode ser usado como um alarme automotivo contra roubo.

## Cuidados

* Certifique-se de que seu SIM card esteja desbloqueado.
* O produto é fornecido sem um gabinete isolante. Observe as precauções contra ESD especialmente em clima seco (baixa umidade).
* A configuração padrão de fábrica da UART do GPRS Shield é 19200 bps 8-N-1. (Pode ser alterada por comandos AT).
* Ao usar o GPRS Shield com o [Seeeduino Stalker](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_V3.1/), lembre-se de remover o Jumper **OK_READ** (ou seja, deixá-lo aberto). Isso desconectará o pino OK do CI Carregador de Bateria do pino Digital 7 do microcontrolador e, assim, permitirá comunicação sem impedimentos com o GPRS Shield utilizando a biblioteca NewSoftSerial.

## Especificações

Para as especificações do SIM900, consulte este arquivo PDF: [SIM900_SPEC.pdf](https://wiki.seeedstudio.com/pt-br/images/0/0b/SIM900_SPEC.pdf)

<table  cellspacing="0" width="80%">
<tr>
  <th scope="col">Item</th>
  <th scope="col">Mín</th>
  <th scope="col">Típico</th>
  <th scope="col">Máx</th>
  <th scope="col">Unidade</th>
</tr>
<tr>
  <th scope="row">Tensão</th>
  <td>4.8</td>
  <td>5.0</td>
  <td>5.2</td>
  <td>VCC</td>
</tr>
<tr>
  <th scope="row">Corrente</th>
  <td>/</td>
  <td>50</td>
  <td>450</td>
  <td>mA</td>
</tr>
<tr>
  <th scope="row">Dimensão (com antena)</th>
  <td colspan="3">110x58x19</td>
  <td>mm</td>
</tr>
<tr>
  <th scope="row">Peso Líquido</th>
  <td colspan="3">76±2</td>
  <td>g</td>
</tr>
</table>

## Função da Interface

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_Shield_interface.png)

* **Seleção de alimentação** - seleciona a fonte de alimentação para o GPRS shield (alimentação externa ou 5 V do Arduino)
* **Conector de alimentação** - conecta a uma fonte de alimentação externa de 4,8~5 VCC
* **Interface da antena** - conecta a uma antena externa
* **Seleção da porta serial** - seleciona se a porta serial de software ou a porta serial de hardware será conectada ao GPRS Shield
* **Serial de Hardware** - D0/D1 do Arduino/Seeeduino
* **Serial de Software** - apenas D7/D8 do Arduino/Seeeduino
* **LED de Status** - indica se a alimentação do SIM900 está ligada
* **Luz de rede** - indica o status do SIM900 em relação à conexão à rede
* **UART do SIM900** - quebra dos pinos UART do SIM900
* **Microfone** - converte som em um sinal elétrico
* **Alto-falante** - converte sinal elétrico em som
* **GPIO, PWM e ADC do SIM900** - quebra dos pinos GPIO, PWM e ADC do SIM900
* **Tecla de alimentação** - liga e desliga o SIM900

### Uso dos pinos no Arduino

* **D0** - Não utilizado se você selecionar a porta serial de software para se comunicar com o GPRS Shield
* **D1** - Não utilizado se você selecionar a porta serial de software para se comunicar com o GPRS Shield
* **D7** - Usado se você selecionar a porta serial de software para se comunicar com o GPRS Shield
* **D8** - Usado se você selecionar a porta serial de software para se comunicar com o GPRS Shield
* **D9** - Usado para controlar por software o ligar ou desligar do SIM900
* **Observação:** A4 e A5 estão conectados aos pinos I2C do SIM900. O SIM900 não pode ser acessado via I2C.

## Primeiros Passos

### Status dos LEDs

<table>
  <tbody>
    <tr>
      <th>LED</th>
      <th>Estado</th>
      <th>Função</th>
    </tr>
    <tr>
      <td width="300px" rowSpan={2}>Status</td>
      <td width="300px">Off</td>
      <td width="400px">Desligado</td>
    </tr>
    <tr>
      <td width="300px">On</td>
      <td width="400px">Ligado</td>
    </tr>
    <tr>
      <td width="300px" rowSpan={4}>Netlight</td>
      <td width="300px">Off</td>
      <td width="400px">O SIM900 não está funcionando</td>
    </tr>
    <tr>
      <td width="300px">64ms On/800ms Off</td>
      <td width="400px">O SIM900 não encontra a rede</td>
    </tr>
    <tr>
      <td width="300px">64ms On/3000ms Off</td>
      <td width="400px">O SIM900 encontra a rede</td>
    </tr>
    <tr>
      <td width="300px">64ms On/300ms Off</td>
      <td width="400px">Comunicação GPRS</td>
    </tr>
  </tbody>
</table>

### Instalação de hardware

* **Insira um SIM card desbloqueado no suporte de SIM Card** - Suporte de 6 pinos para SIM Cards. SIM Cards de 1,8 volts e 3,0 volts são suportados pelo SIM900 - o tipo de tensão do SIM card é detectado automaticamente.
  * Insira o SIM Card no suporte
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Insert_an_unlock_SIM_card.jpg)
  * Trave o suporte do SIM Card
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/SIM_card_inserted.jpg)

* **Certifique-se de que a almofada da antena esteja bem encaixada** - Um conector RF coaxial miniatura é apresentado na placa do GPRS Shield para conectar uma antena GSM. O conector presente no GPRS Shield é chamado de [conector U.FL](https://en.wikipedia.org/wiki/Hirose_U.FL). A antena GSM conectada ao GPRS Shield possui um [conector SMA](https://en.wikipedia.org/wiki/SMA_connector) (e não um conector RP-SMA). Um cabo adaptador também é fornecido com o GPRS Shield para interligar a antena à placa. A topologia da conexão é mostrada no diagrama abaixo:

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/The_antenna_pad.jpg)

* **Monte a antena GSM**

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Assemble_GSM_antenna.jpg)

* **Fonte de alimentação para o GPRS shield** - Selecione a fonte de alimentação por meio da chave na placa; você pode selecionar a fonte de 5 V do Arduino ou uma fonte de alimentação externa. Selecione a fonte de 5 V do Arduino como mostrado na figura a seguir:

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_select_5v_of_arduino.jpg)

* **Configurar porta de comunicação** - O GPRS shield pode ser controlado via porta serial de hardware do Arduino ou porta serial de software. Selecione a porta serial de software com os jumpers:

|GPRS se comunica com o Arduino por serial de software| GPRS se comunica com o Arduino por serial de hardware|
|---|---|
|![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_software_serial.jpg) |![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_hardware_serial.jpg) |

* **Conectar ao Arduino UNO R3** - O GPRS Shield, como qualquer outro shield bem projetado, é empilhável como mostrado na foto abaixo.

* GPRS Shield + Arduino UNO R3
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Plug_GPRS_to_arduino.jpg)

### Ligar e desligar

* **Disparo por hardware**
Pressione a tecla de alimentação por cerca de 2 segundos para ligar ou desligar.
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Button_to_power_up_and_down.jpg)

* **Disparo por software**
Você pode ligar/desligar o shield através do pino D9 do Arduino adicionando um disparo por software no seu firmware.

:::note
O JP para o pino 9 no shield deve ser soldado para que seja possível usar o ligar/desligar por software.
:::

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Shixu.jpg)

Quanto ao tempo de ligar/desligar, foi necessário um pulso &gt;1s para acionar a comutação, e um atraso &gt;3,2s para estabilizar o tempo. O seguinte código no seu firmware é necessário para ligar / desligar o shield sem pressionar o botão:

```
void powerUpOrDown()
{
    pinMode(9, OUTPUT);
    digitalWrite(9,LOW);
    delay(1000);
    digitalWrite(9,HIGH);
    delay(2000);
    digitalWrite(9,LOW);
    delay(3000);
}
```

### Primeiros Passos - Diversão com Comandos AT

O GPRS Shield vem com todos os acessórios de que você precisa para começar a enviar dados pela rede GSM, exceto uma placa Arduino e um cartão SIM GSM. Se você quiser fazer chamadas de voz, também precisará de um headset com microfone.

**Passo 1: Criando um setup de teste para o GPRS Shield**

Quando você recebe o seu GPRS Shield, qual seria a primeira coisa que quer fazer com ele? Enviar um texto (SMS)? ou ligar para alguém (headset necessário)? Você pode fazer tudo isso conversando com o GPRS Shield por meio de Comandos AT - que são uma linguagem especial que ele entende. Comandos AT são comandos textuais simples enviados ao modem GPRS através de sua interface serial (UART), então você pode usar qualquer software de terminal serial para se comunicar com ele.

:::note:
Quase todos os comandos AT devem ser enviados seguidos de **carriage return** e você precisa selecionar a opção "+CR" no terminal da porta serial.
:::

Para fazer experimentos com comandos AT, você vai precisar de uma forma de alimentar e se comunicar com o seu GPRS Shield. A melhor maneira de fazer isso é usando uma placa Arduino Duemilanove, conforme descrito abaixo. Os mesmos passos são aplicáveis para o [Seeeduino](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/) ou [Seeeduino Stalker](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_V3.1/).

* Siga os passos de instalação de hardware anteriores para configurar o sistema de hardware;
* Certifique-se de que os jumpers GPRS_TX &amp; GPRS_RX no GPRS Shield estejam montados na posição SWSerial - assim GPRS_TX ficará conectado ao D7(RX) e GPRS_RX ao D8(TX).
* Conecte o Arduino Duemilanove (ou Seeeduino) ao seu computador por um cabo USB.
* O microcontrolador ATmega328P na placa Duemilanove possui apenas uma UART, que é usada para se comunicar com o PC. O que precisamos é de um Sketch Arduino rodando dentro do ATmega328P que emule uma segunda porta serial (UART) usando software serial nos pinos digitais D8 e D7. Toda a comunicação passará pela porta serial por software e pela porta serial de hardware real. Fazendo isso, todos os dados vindos do computador (conectado ao UART de hardware real) serão roteados para o GPRS Shield (conectado ao UART por software). Então poderemos emitir comandos AT para controlar o GPRS Shield. O diagrama de blocos que descreve este esquema é mostrado abaixo.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_aurduino_uart.jpg)

Para desenvolver tal programa, precisamos usar a biblioteca SoftwareSerial. Aqui está o código de demonstração.

```
//Serial Relay - Arduino will patch a
//serial link between the computer and the GPRS Shield
//at 19200 bps 8-N-1
//Computer is connected to Hardware UART
//GPRS Shield is connected to the Software UART

#include <SoftwareSerial.h>

SoftwareSerial GPRS(7, 8);
unsigned char buffer[64]; // buffer array for data recieve over serial port
int count=0;     // counter for buffer array
void setup()
{
    GPRS.begin(19200);               // the GPRS baud rate
    Serial.begin(19200);             // the Serial port of Arduino baud rate.

}

void loop()
{
    if (GPRS.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while(GPRS.available())          // reading data into char array
        {
            buffer[count++]=GPRS.read();     // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);            // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero


    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
    GPRS.write(Serial.read());       // write it to the GPRS shield
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```

* Faça o upload do sketch para a placa Arduino.
* Baixe e instale a [ferramenta serial](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Sscom32E.zip) se você não tiver uma. Escolha a porta COM correta para o Arduino, e configure-a para operar em **19200** 8-N-1 e então clique em "Open COM".
* Você pode ligar ou desligar o SIM900 pressionando o botão por cerca de 2 segundos. Depois de ligar, o LED vermelho ficará aceso, o verde ao lado dele piscará e o shield terá encontrado a rede se piscar a cada 3 segundos.
Aqui está o botão Power_on_and_off.

 ![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Power_on_and_off_for_SIM900.jpg)

 Além disso, você deverá ver mensagens do shield como
 `RDY` `+CFUN: 1` `+CPIN: READY` `Call Ready` no monitor serial. Se você não conseguir ver as mensagens no monitor serial, deve clicar na opção "send new", que adicionará carriage return ao final do comando AT, e então enviar o comando AT "AT+IPR=19200" para definir o baud rate do SIM900.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_set_baud_rate.jpg)

 Observe que o baud rate do GPRS shield e da porta serial do Arduino deve ser o mesmo antes de você configurar o baud rate do GPRS shield.

* Agora, clique na opção "send new", depois digite e envie "AT" (sem as aspas) para a placa Arduino. O GPRS Shield deve responder enviando um "OK" de volta. Isso significa que você configurou com sucesso o seu GPRS Shield. Você pode agora testar vários Comandos AT. (Se você estiver usando o Monitor Serial disponível na IDE do Arduino, defina o final de linha para "Carriage return" juntamente com um baud rate de 19200).

**Passo 2: Enviando uma mensagem de texto (SMS)**

Agora que nosso setup de teste está pronto, vamos brincar manualmente com alguns Comandos AT antes de passar a programar o Arduino para fazer isso. Vamos tentar enviar um SMS para começar.

* Crie o setup conforme descrito no Passo 1 acima.
* Pelo seu software de terminal serial, envie **AT+CMGF=1** e pressione a tecla Enter. O GPRS Shield pode enviar SMS em dois modos: modo Texto e modo PDU (ou binário). Como queremos enviar uma mensagem legível por humanos, vamos selecionar o modo texto. O GPRS Shield responderá com um **OK**.
* Clique na opção "send new" e envie **AT+CMGS="+918446043032"**. Isso instruirá o GPRS Shield a começar a aceitar texto para uma nova mensagem; os números significam o número de telefone especificado (substitua o número pelo número de telefone do aparelho de destino). O GPRS Shield enviará um '_**&gt;'**_ para lembrar você de digitar a mensagem. Observe que os números de telefone em qualquer Comando AT devem seguir o formato [E.123 format](https://en.wikipedia.org/wiki/E.123).

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_send_a_message.jpg)

* Comece a digitar sua mensagem; após terminar a digitação, clique na opção "send hex" e então envie o hex: **1A**. O modem aceitará a mensagem e responderá com um **OK**. Alguns instantes depois, a mensagem deverá ser recebida no aparelho cujo número você especificou. Você pode consultar a figura abaixo.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Gprssendsms1.jpg)

:::note
Se você seguir os passos especificados acima e não conseguir receber a mensagem no aparelho de destino, talvez seja necessário configurar o número do Centro de Mensagens SMS.
:::

Envie o comando **AT+CSCA="+919032055002"** e pressione a tecla Enter. Envie este comando entre os comandos AT+CMGF e AT+CMGS. Substitua o número de telefone especificado no comando acima pelo número do Centro de Mensagens SMS do seu provedor de serviço GSM.

O número do centro de mensagens é específico de cada provedor de serviço (por exemplo, +919032055002 é o número do centro de mensagens da _Tata DoCoMo, Pune, Índia_). Você pode obter o número do centro de mensagens ligando para a central de atendimento do provedor GSM e pedindo essa informação.

**Passo 3: Explorando mais**

Agora que você já teve uma amostra de como os Comandos AT funcionam, pode testar outros comandos antes de começar a desenvolver sketches para Arduino usando o GPRS Shield.

Isso envolve criar um sketch para enviar essa mesma sequência de Comandos AT (em seu nome) pela porta serial ao GPRS Shield para realizar a mesma tarefa de enviar um SMS, fazer uma chamada ou enviar dados por uma conexão GPRS.

Você pode consultar o [manual de referência dos Comandos AT](https://wiki.seeedstudio.com/pt-br/images/a/a0/SIM900_ATC_V1_00.pdf) para descobrir a sequência de comandos. Se você desenvolver um sketch Arduino e perceber que o GPRS Shield não age como o esperado, então será necessário verificar seus Comandos AT e sua sequência. Para fazer isso, recarregue o sketch de repetidor serial anexado acima na seção de primeiros passos no ATmega328P e digite manualmente os Comandos AT, verificando a saída. As respostas enviadas pelo GPRS Shield ajudarão você a depurar a sequência de Comandos AT.

:::note
Um programa em C para realizar a mesma tarefa também foi desenvolvido e anexado: [Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip").
:::

O programa foi desenvolvido em um PC com Windows. O [AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725) foi usado como IDE e o [WinAVR](http://winavr.sourceforge.net/) foi usado como compilador. O arquivo ZIP contém um Projeto AVRStudio4. O compilador C (WinAVR) irá gerar um Intel Hex (.hex). Para enviar esse arquivo .hex para uma placa Arduino fora da Arduino IDE, é necessário um programa capaz de se comunicar com o bootloader da placa Arduino. O [XLoader](http://xloader.russemotto.com/) é um desses programas que roda no Windows e pode fazer upload de arquivos .hex gerados por vários compiladores para uma placa Arduino.

### Notas sobre a biblioteca SoftwareSerial

Com o Arduino 1.0 você deve conseguir usar a biblioteca SoftwareSerial incluída na distribuição (em vez de NewSoftSerial). Entretanto, é preciso estar ciente de que o buffer reservado para mensagens recebidas é codificado como 64 bytes no cabeçalho da biblioteca, "SoftwareSerial.h":

```
 define _SS_MAX_RX_BUFF 64 // RX buffer size
```

Isso significa que, se o módulo GPRS receber mais dados do que o buffer suporta, você provavelmente irá perdê-los por um estouro de buffer! Por exemplo, ao ler um SMS do módulo com "AT+CMGR=xx" (xx é o índice da mensagem), talvez você nem veja a parte da mensagem porque as informações de cabeçalho anteriores (como número de telefone e horário) ocupam muito espaço. A correção parece ser alterar manualmente **_SS_MAX_RX_BUFF** para um valor mais alto (mas razoável, para não usar toda a sua memória!)

A [biblioteca Softwareserial](https://arduino.cc/hu/Reference/SoftwareSerial) tem as seguintes limitações (retiradas da página do Arduino). Se você usar múltiplas portas seriais por software, apenas uma pode receber dados por vez.
Isso significa que, se você tentar adicionar outro dispositivo serial, como o Grove Serial LCD, poderá ter erros de comunicação, a menos que escreva seu código com cuidado.

## Exemplos Simples de Código-Fonte

O código de demonstração abaixo é para o Xduino enviar mensagem SMS, fazer uma chamada de voz, enviar uma requisição http para um site e enviar dados para o pachube. Ele foi testado no Arduino Duemilanove e também funciona em qualquer plataforma compatível; observe que este sketch usa a UART por software do ATmega328P. Siga as etapas abaixo para executar este sketch.

1. Remova o GPRS Shield e faça o download deste sketch para o seu Arduino.
2. Desconecte o Xduino da porta USB para remover a fonte de alimentação.
3. Coloque os jumpers de Serial Port no GPRS Shield na posição SWserial, para usar a porta Serial por software do Arduino.
4. Conecte a antena ao GPRS Shield e insira o cartão SIM.
5. Monte o GPRS Shield no Arduino.
6. Conecte o Arduino ao computador por USB e abra seu software de terminal serial favorito no computador, escolha a porta COM do Arduino e configure para operar em 19200 8-N-1.
7. Digite comandos no terminal para executar funções diferentes; há 4 funções na demonstração:

    * a. Se você digitar **'t'**, a demonstração enviará uma mensagem SMS para outro celular que você definir (você precisa configurar o número no código);
    * b. Se você digitar **'d'**, o programa fará uma chamada para o outro celular que você definir (você precisa configurar o número no código);
    * c. Se você digitar **'h'**, ele enviará uma requisição http para um site que você deseja acessar (é necessário configurar o endereço do site no código); ele retornará uma string do site se tudo correr corretamente;
    * d. Se você digitar **'s'**, ele enviará os dados para o pachube (para detalhes você pode consultar a explicação no código). Eu recomendo fortemente que você digite 'h' antes de digitar 's', porque o envio de dados para o pachube exige algumas configurações; após executar a função de enviar uma requisição http, essas configurações serão feitas.

8. Se o programa retornar erro no terminal depois de você digitar o comando, não se preocupe, apenas tente digitar o comando novamente.

```cpp
/*Note: this code is a demo for how to using gprs shield to send sms message, dial a voice call and
  send a http request to the website, upload data to pachube.com by TCP connection,

  The microcontrollers Digital Pin 7 and hence allow unhindered
  communication with GPRS Shield using SoftSerial Library.
  IDE: Arduino 1.0 or later
  Replace the following items in the code:
  1.Phone number, don't forget add the country code
  2.Replace the Access Point Name
  3. Replace the Pachube API Key with your personal ones assigned
  to your account at cosm.com
  */


#include <SoftwareSerial.h>
#include <String.h>

SoftwareSerial mySerial(7, 8);

void setup()
{
    mySerial.begin(19200);               // the GPRS baud rate
    Serial.begin(19200);    // the GPRS baud rate
    delay(500);
}

void loop()
{
    //after start up the program, you can using terminal to connect the serial of gprs shield,
    //if you input 't' in the terminal, the program will execute SendTextMessage(), it will show how to send a sms message,
    //if input 'd' in the terminal, it will execute DialVoiceCall(), etc.

    if (Serial.available())
    switch(Serial.read())
    {
        case 't':
        SendTextMessage();
        break;
        case 'd':
        DialVoiceCall();
        break;
        case 'h':
        SubmitHttpRequest();
        break;
        case 's':
        Send2Pachube();
        break;
    }
    if (mySerial.available())
    Serial.write(mySerial.read());
}

///SendTextMessage()
///this function is to send a sms message
void SendTextMessage()
{
    mySerial.print("AT+CMGF=1\r");    //Because we want to send the SMS in text mode
    delay(100);
    mySerial.println("AT + CMGS = \"+86138xxxxx615\"");//send sms message, be careful need to add a country code before the cellphone number
    delay(100);
    mySerial.println("A test message!");//the content of the message
    delay(100);
    mySerial.println((char)26);//the ASCII code of the ctrl+z is 26
    delay(100);
    mySerial.println();
}

///DialVoiceCall
///this function is to dial a voice call
void DialVoiceCall()
{
    mySerial.println("ATD + +86138xxxxx615;");//dial the number
    delay(100);
    mySerial.println();
}

///SubmitHttpRequest()
///this function is submit a http request
///attention:the time of delay is very important, it must be set enough
void SubmitHttpRequest()
{
    mySerial.println("AT+CSQ");
    delay(100);

    ShowSerialData();// this code is to show the data from gprs shield, in order to easily see the process of how the gprs shield submit a http request, and the following is for this purpose too.

    mySerial.println("AT+CGATT?");
    delay(100);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"CONTYPE\",\"GPRS\"");//setting the SAPBR, the connection type is using gprs
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"APN\",\"CMNET\"");//setting the APN, the second need you fill in your local apn server
    delay(4000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=1,1");//setting the SAPBR, for detail you can refer to the AT command mamual
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+HTTPINIT"); //init the HTTP request

    delay(2000);
    ShowSerialData();

    mySerial.println("AT+HTTPPARA=\"URL\",\"www.google.com.hk\"");// setting the httppara, the second parameter is the website you want to access
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+HTTPACTION=0");//submit the request
    delay(10000);//the delay is very important, the delay time is base on the return from the website, if the return datas are very large, the time required longer.
    //while(!mySerial.available());

    ShowSerialData();

    mySerial.println("AT+HTTPREAD");// read the data from the website you access
    delay(300);

    ShowSerialData();

    mySerial.println("");
    delay(100);
}

///send2Pachube()///
///this function is to send the sensor data to the pachube, you can see the new value in the pachube after execute this function///
void Send2Pachube()
{
    mySerial.println("AT+CGATT?");
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CSTT=\"CMNET\"");//start task and setting the APN,
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CIICR");//bring up wireless connection
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIFSR");//get local IP adress
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSPRT=0");
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIPSTART=\"tcp\",\"api.cosm.com\",\"8081\"");//start up the connection
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSEND");//begin send data to remote server
    delay(4000);
    ShowSerialData();
    String humidity = "1031";//these 4 line code are imitate the real sensor data, because the demo did't add other sensor, so using 4 string variable to replace.
    String moisture = "1242";//you can replace these four variable to the real sensor data in your project
    String temperature = "30";//
    String barometer = "60.56";//
    mySerial.print("{\"method\": \"put\",\"resource\": \"/feeds/42742/\",\"params\"");//here is the feed you apply from pachube
    delay(500);
    ShowSerialData();
    mySerial.print(": {},\"headers\": {\"X-PachubeApiKey\":");//in here, you should replace your pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print(" \"_cXwr5LE8qW4a296O-cDwOUvfddFer5pGmaRigPsiO0");//pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print("jEB9OjK-W6vej56j9ItaSlIac-hgbQjxExuveD95yc8BttXc");//pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print("Z7_seZqLVjeCOmNbEXUva45t6FL8AxOcuNSsQS\"},\"body\":");
    delay(500);
    ShowSerialData();
    mySerial.print(" {\"version\": \"1.0.0\",\"datastreams\": ");
    delay(500);
    ShowSerialData();
    mySerial.println("[{\"id\": \"01\",\"current_value\": \"" + barometer + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"02\",\"current_value\": \"" + humidity + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"03\",\"current_value\": \"" + moisture + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"04\",\"current_value\": \"" + temperature + "\"}]},\"token\": \"lee\"}");


    delay(500);
    ShowSerialData();

    mySerial.println((char)26);//sending
    delay(5000);//waitting for reply, important! the time is base on the condition of internet
    mySerial.println();

    ShowSerialData();

    mySerial.println("AT+CIPCLOSE");//close the connection
    delay(100);
    ShowSerialData();
}

void ShowSerialData()
{
    while(mySerial.available()!=0)
    Serial.write(mySerial.read());
}
```

## FAQ

Aqui está a FAQ do GPRS Shield que lista as perguntas feitas com frequência, leia-a antes de usar:

* Por que o GPRS Shield não funciona com o Stalker v2.1/2.0 via porta serial por software (D7/D8)?

    O Stalker v2.1/2.0 já utiliza o pino digital (D7/D8), você precisa conectar GPRS_TX/GPRS_RX a outros pinos digitais como porta serial por software. E esse problema foi resolvido na versão Stalker 2.2.

* Por que o I2C não pode ser usado quando eu monto o GPRS Shield no Stalker ou em outras placas Arduino?

    Porque o GPRS Shield entra em conflito com outro módulo via I2C. O GPRS Shield não usa a porta I2C, você pode desconectar a conexão da porta I2C do SIM900 para A4/A5.  

## Projetos Relacionados

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

Este é um demo feito com o GPRS Shield V2.0.

Com este demo, fazemos um telefone móvel chamado Arduino Phone usando Arduino, o GPRS Shield e outros módulos.

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemático do GPRS Shield v1.4 em formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield_Schematic.pdf)

* [PCB do GPRS Shield v1.4 em formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield%20v1.4.pdf)
* [Esquemático e PCB do GPRS Shield v1.4 em formato eagle](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip)
* [Comandos AT v1.00](https://wiki.seeedstudio.com/pt-br/images/a/a0/SIM900_ATC_V1_00.pdf)
* [Comandos AT v1.03](https://wiki.seeedstudio.com/pt-br/images/a/a8/SIM900_AT_Command_Manual_V1.03.pdf)
* [Comandos AT v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/AT_Commands_v1.11.pdf)
* [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
* [Projeto de Hardware do SIM900](https://wiki.seeedstudio.com/pt-br/images/e/e3/SIM900_HD_V1.05.pdf)
* [Firmware e ferramenta do SIM900 (firmware:1137B08SIM900M64_ST)](https://wiki.seeedstudio.com/pt-br/images/8/87/SIM900_firmware_and_tool.zip)
* [SIM900datasheeet](https://www.seeedstudio.com/document/SIM900datasheeet.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
