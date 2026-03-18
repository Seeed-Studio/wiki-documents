---
description: GPRS Shield V2.0
title: GPRS Shield V2.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /GPRS_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/GPRS_Shield_V2.0/
---

<!-- ---
name: GPRS Shield V2.0
category: Discontinued
bzurl: https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html
oldwikiname:  GPRS Shield V2.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V2
sku:  113030000
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GRPS_SLD.jpg)

Conecte seu Arduino à rede de telefonia celular GSM/GPRS com o GPRS shield! Agora você pode usar seu Arduino/Seeeduino ou outras placas principais para discar um número de telefone ou enviar uma mensagem de texto para seu amigo por meio de comandos AT fáceis de usar. Esta nova versão apresenta um módulo GSM/GPRS de baixo consumo quad-band SIM900, bem como uma antena PCB compacta. Enquanto isso, foram feitas melhorias nas interfaces e no circuito básico para torná-lo mais conciso e confiável. E há duas opções para você comunicar o GPRS shield com a placa principal -- UART ou [SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html)

## Versão

---

| Revisão | Descrições                                               | Lançamento   |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | Lançamento público inicial (beta)                        | 3 Mar, 2011  |
| v1.2     | Adicionada porta de software para ligar/desligar o SIM90 | 2 Dec, 2011  |
| v1.4     | Redesenho do circuito de fonte de alimentação, novo layout da PCB | 30 Aug, 2012 |
| v2.0     | Suporte quad band e redesenho da antena PCB              | 3 Feb, 2013  |
| v3.0     | Mudança do soquete Arduino para o padrão mais recente do Arduino Uno | 20 Mar, 2015 |

**Qual é a diferença entre a V2.0 e a versão anterior?**

- Mudança na aparência

  - A V2.0 adota um contorno de shield padrão, bem como uma capa protetora;
  - A antena tipo “duck” é substituída por uma antena PCB compacta;
  - As interfaces de microfone e fone de ouvido são substituídas por um conector de headset 2 em 1 na V2.0.

- Mudança na Circuitaria de Alimentação

  - Substituir o circuito LDO original por circuito DC-DC. A dissipação de calor fica menor e a eficiência fica maior, chegando a mais de 80%. Enquanto isso, o conector EXT_PWR da V1.0 foi removido. A V2.0 agora pode puxar corrente diretamente do Arduino sem adaptador adicional de 5V.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Power_circuit.jpg)

- Circuito de Partida Suave

  - O circuito de partida suave é adicionado na nova versão para suavizar o choque de energia no momento em que o shield é ligado, evitando que o shield tenha problema de reinicialização inesperada.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Soft-start_circuit.jpg)

- Revisão da Antena

  - A potência máxima de transmissão do SIM900 é 30dBm(1w). Contudo, a potência de saída da V1.0 é apenas 0,4W. Nesta nova versão, a potência de transmissão é aumentada para acima de 29dBm (0,8w+), oferecendo uma transmissão de sinal mais confiável e estável.

## Especificações

---

| Item                    | Valor                                                                          |
|-------------------------|--------------------------------------------------------------------------------|
| Compatível              | Arduino UNO/Seeeduino diretamente; Outras placas principais via jumpers       |
| Interface selecionável  | UART, Software serial                                                          |
| Suporte quad band       | 850/900/1800/1900MHz                                                           |
| Suporte de comunicação  | Padrão - GSM 07.07 & 07.05 e Avançado - Comandos AT SIMCOM                    |
| Temperatura de operação | -40°C a +85 °C                                                                 |
| Suporte a protocolos    | Protocolo 0710 MUX, protocolo TCP/UDP embarcado, FTP/HTTP, FOTA, MMS, AT embarcado |
| Certificação do SIM900  | CE, IC, FCC, ROHS, PTCRB, GCF, ICASA, REACH, AT&T                              |
| Dimensões               | 68,58 * 53,34mm                                                                 |
| Fonte de alimentação    | 5v via pino 5V, 6,5~12v via pino Vin                                           |

## Cuidados

---

- Certifique-se de que seu cartão SIM esteja ativado.
- O GPRS Shield não vem com proteções ESD. Tenha cuidado especial ao manuseá-lo em clima seco.

## Visão geral do hardware

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Shild_V2_hardware_overview.jpg)

- A configuração padrão de fábrica para o UART do GPRS Shield é 19200 bps 8-N-1. (Pode ser alterada usando comandos AT).
- Seleção de porta serial
  - Há duas opções para você comunicar o GPRS shield com a placa principal ao conectar os dois jumpers nas posições SWserial ou HWserial. Se usar SWserial, D7 e D8 serão usados pelo SIM900 do GPRS Shield; se usar HWserial, D0 (RX) e D1 (TX) serão usados.

    ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_serial_port.png)

- Ligar/desligar via D9
  - Pad JP dessoldado por padrão. Solde-o se quiser usar software para ligar/desligar o GPRS shield. Defina o D9 em nível alto, isso significa que o botão está sendo pressionado. O pad do JP fica ao lado da porta ISP.
- Breakout do SIM900
  - Alguns pinos do SIM900 são disponibilizados ao lado da porta ISP, são eles LINEIN_R, LINEIN_L, ADC, PWM1, PWM2, GPIO1~GPIO6, GND, FW_update (DISP_CLK, DISP_DATA, DISP_D/C, DISP_CS), RI, DCD, DSR, CTS, VDD_EXT, LDTR, LRTS. E esses pinos são conectados diretamente a partir do SIM900 sem qualquer configuração.

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Break.png)

- Suporte para bateria do RTC
  - Ele pode fornecer 3 volts para VRTC do SIM900 a partir de uma bateria CR1220.
- Alimentação
  - Substituir o circuito LDO original por circuito DC-DC -- TD1410. A dissipação de calor fica menor e a eficiência fica maior, chegando a mais de 80%+. Enquanto isso, a saída pode chegar a 4,15V/2A. E há duas entradas de fonte de alimentação:
5v pin: O circuito de partida suave é adicionado na nova versão para suavizar o choque de energia no momento em que o shield é ligado, evitando que o shield tenha problema de reinicialização inesperada. Para mudanças mais detalhadas, consulte Leitura Relacionada : Versão
  - Pino Vin: A faixa de tensão de entrada é entre 6,5v e 12v.
- Antena
  - O tipo de conector de antena é IPEX, e a potência máxima de transmissão do SIM900 é 30dBm(1w). Para mais informações, consulte [a Especificação da Antena GPRS](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Antenna_of_GPRS_.pdf).
- Descrição do status dos LEDs
  <dl><dd><table cellspacing="0">
  <tr>
    <th scope="col">**LED**</th>
    <th scope="col">**Status**</th>
    <th scope="col">**Função**</th>
  </tr>
  <tr>
    <th scope="row">Indicador de ligado (Verde)</th>
    <td>Off</td>
    <td>A alimentação do GPRS Shield está desligada</td>
  </tr>
  <tr>
    <td></td>
    <td>On</td>
    <td>A alimentação do GPRS Shield está ligada</td>
  </tr>
  <tr>
    <th scope="row">Indicador de status (Vermelho)</th>
    <td>Off</td>
    <td>Alimentação desligada</td>
  </tr>
  <tr>
    <td></td>
    <td>On</td>
    <td>Alimentação ligada</td>
  </tr>
  <tr>
    <th scope="row">Indicador de rede (Verde)</th>
    <td>Off</td>
    <td>O SIM900 não está funcionando</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms On/800ms Off</td>
    <td>O SIM900 não encontrou a rede</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms On/3000ms Off</td>
    <td>O SIM900 encontrou a rede</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms On/300ms Off</td>
    <td>Comunicação GPRS</td>
  </tr>
  </table></dd></dl>

## Primeiros Passos

---

### Se divertindo com Comandos AT

Quando você recebe o GPRS Shield, qual seria a primeira coisa que você quer fazer com ele? Enviar um texto (SMS)? Ou ligar para alguém (headset necessário)? Você pode fazer tudo isso conversando com o GPRS Shield usando Comandos AT - uma linguagem especial que ele entende.

Comandos AT são comandos textuais simples enviados ao modem GPRS pela sua interface serial (UART), então você pode usar qualquer software de terminal serial para se comunicar com ele.

#### Instalação de hardware

- **Insira um cartão SIM ativado no suporte de cartão SIM** - Suporte de 6 pinos para cartões SIM. Tanto cartões SIM de 1,8 volts quanto de 3,0 volts são suportados pelo SIM900 - o tipo de tensão do cartão SIM é detectado automaticamente.
  - Insira o cartão SIM no suporte
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM.JPG)
  - Trave o suporte do cartão SIM
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM2.JPG)

- **Certifique-se de que o pad da antena esteja travado corretamente**

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSANT.JPG)

- **Configuração da porta de comunicação**
O GPRS shield pode ser controlado via porta serial de hardware ou porta serial por software do Arduino. Aqui usamos a porta serial por software como padrão. Escolha-a inserindo os jumpers conforme abaixo.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSserial.JPG)

- **Conecte ao Arduino** - O GPRS Shield, como qualquer outro shield bem projetado, é empilhável.

- **Ligue o Arduino** - Ligue o Arduino por cabo USB ou conector DC. O LED indicador de ligado deve acender assim que for conectado.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSshieldV2.png)

#### Software

Vamos nos divertir controlando o GPRS shield com comandos AT.

O GPRS Shield vem com todos os acessórios de que você precisa para começar a enviar dados pela rede GSM, exceto uma placa Arduino e um cartão SIM GSM. Se você quiser fazer chamadas de voz, também vai precisar de um headset com microfone.

**Passo 1: Criando um ambiente de teste para o GPRS Shield**

:::note
Quase todos os comandos AT devem ser enviados seguidos de **carriage return** e você precisa selecionar a opção "+CR" no terminal de porta serial.
:::

Para fazer experimentos com comandos AT, você vai precisar de uma forma de ligar e se comunicar com seu GPRS Shield. A melhor maneira de fazer isso é usando uma placa Arduino Duemilanove descrita abaixo. Os mesmos passos são aplicáveis para [Seeeduino](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/) ou [Seeeduino Stalker](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_V3.1/).

- Siga as etapas anteriores de instalação de hardware para configurar o sistema de hardware;
- Certifique-se de que os jumpers GPRS_TX &amp; GPRS_RX no GPRS Shield estejam montados na posição SWSerial – assim GPRS_TX será conectado a D7(RX) e GPRS_RX a D8(TX).
- Conecte o Arduino Duemilanove (ou Seeeduino) ao seu computador por um cabo USB.
- O microcontrolador ATmega328P na placa Duemilanove possui apenas uma UART, que é usada para se comunicar com o PC. O que precisamos é de um Sketch Arduino rodando dentro do ATmega328P que emule uma segunda porta serial (UART) usando software serial nos pinos digitais D8 e D7. Toda a comunicação passará pela porta serial por software e pela porta serial de hardware real. Fazendo isso, todos os dados vindos do computador (conectado à UART de hardware real) serão encaminhados para o GPRS Shield (conectado à UART por software). Então poderemos enviar comandos AT para controlar o GPRS Shield. O diagrama em blocos que descreve esse esquema é mostrado abaixo.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_aurduino_uart.jpg)

Para desenvolver tal programa, precisamos usar a biblioteca SoftwareSerial. Aqui está o código de demonstração.

```cpp
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

- Envie o sketch para a placa Arduino. Se você não souber como enviar o código, siga as [instruções](https://wiki.seeedstudio.com/pt-br/Upload_Code/).
- Baixe e abra a [ferramenta serial](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Sscom32E.zip) se você ainda não tiver uma. Escolha a porta COM correta para o Arduino e configure-a para operar a **19200** 8-N-1 e então clique em "Open COM". Você também pode usar o AT Command Tester para enviar comandos AT. Clique [aqui](https://wiki.seeedstudio.com/pt-br/AT_Command_Tester_Application/) se tiver interesse nele.
- Ligue o SIM900 pressionando o botão de energia por cerca de 2 segundos. O LED vermelho estará aceso. O verde ao lado piscará. Se o shield se conectar à rede com sucesso, o LED verde piscará a cada 3 segundos.
- Você deverá encontrar a mensagem no monitor serial como abaixo, que é enviada pelo SIM900 para informar que ele se conectou à rede.

```txt
RDY

+CFUN: 1

+CPIN: READY

Call Ready

```

Se você não conseguir ver as mensagens no monitor serial, deverá clicar na opção "send new", que adicionará um retorno de carro ao final do comando AT, e então enviar o comando AT "AT+IPR=19200" para definir a taxa de transmissão do SIM900.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_set_baud_rate.jpg)

**Etapa 2: Enviando uma mensagem de texto (SMS)**

Agora que nosso ambiente de teste está pronto, vamos brincar manualmente com alguns comandos AT antes de seguir para programar o Arduino para fazer isso. Vamos tentar enviar um SMS para começar.

- Crie a configuração conforme descrito na Etapa 1 acima.
- Através do seu software de terminal serial, envie **AT+CMGF=1** e pressione a tecla Enter. O GPRS Shield pode enviar SMS em dois modos: modo Texto e modo PDU (ou binário). Como queremos enviar uma mensagem legível por humanos, selecionaremos o modo texto. O GPRS Shield responderá com **OK**.
- Clique na opção "send new" e envie **AT+CMGS="+18888888888"**. Isso instruirá o GPRS Shield a começar a aceitar texto para uma nova mensagem; os números significam o número de telefone especificado (substitua o número pelo número de telefone do celular de destino). O GPRS Shield enviará um '_**&gt;'**_ para lembrar você de digitar a mensagem. Observe que números de telefone em qualquer comando AT devem seguir o formato [E.123 format](https://en.wikipedia.org/wiki/E.123) format.

- Comece a digitar sua mensagem, após terminar a digitação, clique na opção "send hex" e então envie o hex: **1A**. O modem aceitará a mensagem e responderá com **OK**. Alguns instantes depois, a mensagem deverá ser recebida no aparelho cujo número você especificou. Eu enviei "How are you ?". Você pode verificar o histórico clicando em "EXT". O histórico de comandos é listado abaixo de "Set Multi Char".

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Send_a_text_message.jpg)

:::note
Se, apesar de seguir as etapas especificadas acima, você não conseguir receber a mensagem no aparelho de destino, talvez seja necessário definir o número do Centro de Mensagens SMS. Envie o seguinte comando entre os comandos AT+CMGF e AT+CMGS: AT+CSCA="+18888888888". Substitua o número de telefone especificado pelo número do Centro de SMS do seu provedor de serviço GSM. O número do centro de mensagens é específico para cada provedor de serviço. Você pode obtê-lo ligando para o serviço de atendimento ao cliente do seu provedor GSM e pedindo esse número.
:::

**Etapa 3: Fazer uma chamada telefônica com comandos AT**

- Reinicie o SIM900 ao alternar de envio de textos para realização de chamadas telefônicas.
- Substitua o número de telefone pelo seu número de destino no comando “ATD18888888888;”(sem as aspas) e pressione a tecla Enter para enviá-lo. Se tiver sucesso, uma mensagem "ATH OK" aparecerá como na imagem abaixo. Caso contrário, "No CRRLIER" aparecerá em seu lugar. A razão pode ser número de telefone inexistente ou formato de comando incorreto.

**Etapa 4: Explorando mais a fundo**

Agora que você já teve uma amostra de como os comandos AT funcionam, pode experimentar outros comandos antes de começar a desenvolver sketches para Arduino usando o GPRS Shield.

Isso envolve criar um sketch para enviar essa mesma sequência de comandos AT (em seu nome) pela porta serial para o GPRS Shield, a fim de executar a mesma tarefa de enviar um SMS, fazer uma chamada ou enviar dados por uma conexão GPRS.

Você pode consultar o [manual de referência dos comandos AT](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf) para descobrir a sequência de comandos. Se você desenvolver um sketch Arduino e perceber que o GPRS Shield não age como o esperado, então será necessário verificar seus comandos AT e sua sequência. Para fazer isso, recarregue o sketch de retransmissão serial anexado acima na seção de primeiros passos no ATmega328P e digite manualmente os comandos AT e verifique a saída. As respostas enviadas de volta pelo GPRS Shield ajudarão você a depurar a sequência de comandos AT.

:::note
Um programa em C para executar a mesma tarefa também foi desenvolvido e anexado: [Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip").
:::

O programa foi desenvolvido em um PC com Windows. O [AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725) foi usado como IDE e o [WinAVR](http://winavr.sourceforge.net/) foi usado como compilador. O arquivo ZIP contém um projeto AVRStudio4. O compilador C (WinAVR) gerará um Intel Hex (.hex). Para enviar esse arquivo .hex a uma placa Arduino fora da IDE do Arduino, será necessário um programa capaz de se comunicar com o bootloader da placa Arduino. O [XLoader](http://xloader.russemotto.com/) é um programa desse tipo, que roda no Windows e pode enviar arquivos .hex gerados por vários compiladores para uma placa Arduino.

##### Notas sobre a biblioteca SoftwareSerial

Com o Arduino você deve conseguir usar a biblioteca SoftwareSerial incluída na distribuição (em vez de NewSoftSerial). No entanto, você deve estar ciente de que o buffer reservado para mensagens recebidas é codificado como 64 bytes no cabeçalho da biblioteca, "SoftwareSerial.h":

```
 define _SS_MAX_RX_BUFF 64 // RX buffer size
```

Isso significa que, se o módulo GPRS receber mais dados do que o buffer, você provavelmente os perderá por estouro de buffer! Por exemplo, ao ler um SMS do módulo com "AT+CMGR=xx" (xx é o índice da mensagem), você pode nem ver a parte da mensagem porque as informações de cabeçalho anteriores (como número de telefone e hora) ocupam muito espaço. A correção parece ser alterar manualmente **_SS_MAX_RX_BUFF** para um valor mais alto (mas razoável, para não usar toda a sua memória!)

A [biblioteca Softwareserial](https://arduino.cc/hu/Reference/SoftwareSerial) tem as seguintes limitações (retiradas da página do Arduino). Se usar múltiplas portas seriais por software, apenas uma pode receber dados por vez.
Isso significa que, se você tentar adicionar outro dispositivo serial, como o Grove serial LCD, poderá obter erros de comunicação, a menos que elabore seu código cuidadosamente.

##### Como enviar uma mensagem de texto ou discar um número de telefone usando comandos AT

Neste exemplo, criaremos um sketch Arduino para permitir que você envie uma mensagem de texto ou disque um número de telefone para uma chamada de voz quando digitar 't' ou 'd', respectivamente, na janela de comunicação serial do Arduino.

###### Comandos AT para enviar uma mensagem de texto

Observando o conjunto de comandos do SIM900, podemos ver que para enviar uma mensagem de texto precisamos primeiro definir o formato de SMS, o que é feito usando o comando AT+CMGF.

O comando AT+CMGF pode assumir um de dois valores: 0 ou 1 para "modo PDU" e "modo texto", respectivamente. No "modo texto", as mensagens SMS são representadas como texto legível. No "modo PDU", as mensagens SMS são representadas como sequências binárias codificadas em caracteres hexadecimais. Usaremos o "modo texto" neste exemplo, então o comando que precisamos enviar para o GPRS Shield é:

**AT+CMGF=1\r**

Agora que definimos o formato de SMS, podemos prosseguir para enviar a mensagem de texto. Para enviar a mensagem de texto usamos o comando AT+CMGS. De acordo com o conjunto de comandos AT do SIM900, o comando CMGS segue este formato:

**AT+CMGS=&lt;da&gt;[,&lt;toda&gt;]&lt;CR&gt;**

onde &lt;da&gt; é o endereço de destino (número de telefone), &lt;toda&gt; é o tipo opcional de endereço de destino, e &lt;CR&gt; é o caractere de retorno de carro '\r'. Depois que enviarmos este comando, o GPRS Shield responderá com o caractere '>' sinalizando para inserirmos a mensagem propriamente dita.

:::note
O número de telefone deve incluir o código do país, por exemplo, para um número dos EUA (555)123-4567 o valor de &lt;da&gt; deve ser +15551234567
:::

###### Comando(s) Para uma Chamada de Voz

De acordo com a folha de comandos AT do SIM900, o comando usado para discar um número para uma chamada de voz é "ATD+xxxxxxxxxx;" onde "xxxxxxxxxxx" é o número de telefone com código do país incluído. Um ponto e vírgula deve ser enviado para configurar uma chamada de voz; omiti-lo configurará uma chamada de dados ou fax.

O código Arduino para enviar uma mensagem de texto simples ou fazer uma chamada de voz é mostrado abaixo. Não se esqueça de alterar o número de telefone "xxxxxxxxxx" e a mensagem "How are you today?" para os seus próprios valores.

###### Código Arduino

```cpp
  #include <SoftwareSerial.h>


  SoftwareSerial gprsSerial(7,8);

  void setup()
  {
    gprsSerial.begin(19200); // GPRS shield baud rate
    Serial.begin(19200);   
    delay(500);
  }

  void loop()
  {

    if (Serial.available()) // if there is incoming serial data
     switch(Serial.read()) // read the character
     {
       case 't': // if the character is 't'
         SendTextMessage(); // send the text message
         break;
       case 'd': // if the character is 'd'
         DialVoiceCall(); // dial a number
         break;

     }

    if (gprsSerial.available()){ // if the shield has something to say
      Serial.write(gprsSerial.read()); // display the output of the shield
    }
  }

  /*
  * Name: SendTextMessage
  * Description: Send a text message to a number
  */
  void SendTextMessage()
  {
    Serial.println("Sending Text...");
    gprsSerial.print("AT+CMGF=1\r"); // Set the shield to SMS mode
    delay(100);
    // send sms message, the phone number needs to include the country code e.g. if a U.S. phone number such as (540) 898-5543 then the string must be:
    // +15408985543
    gprsSerial.println("AT+CMGS = \"+xxxxxxxxxx\"");
    delay(100);
    gprsSerial.println("How are you today?"); //the content of the message
    delay(100);
    gprsSerial.print((char)26);//the ASCII code of the ctrl+z is 26 (required according to the datasheet)
    delay(100);
    gprsSerial.println();
    Serial.println("Text Sent.");
  }

  /*
  * Name: DialVoiceCall()
  * Description: Can call/dial a phone number
  */
  void DialVoiceCall()
  {
    gprsSerial.println("ATD+xxxxxxxxxx;");//dial the number, must include country code
    delay(100);
    gprsSerial.println();
  }
```

## FAQ

Aqui está o FAQ do GPRS Shield que lista as perguntas frequentes; leia-o antes de usar:

- Por que o GPRS Shield não consegue funcionar com o Stalker v2.1/2.0 via porta serial por software (D7/D8)?

    O Stalker v2.1/2.0 já usa os pinos digitais (D7/D8); você precisa conectar GPRS_TX/GPRS_RX a outros pinos digitais como porta serial por software. E esse problema foi resolvido na versão Stalker 2.2.

- Por que o I2C não pode ser usado quando eu montei o GPRS Shield no Stalker ou em outras placas Arduino?

    Porque o GPRS Shield entra em conflito com outro módulo via I2C. O GPRS Shield não usa a porta I2C, você pode desconectar a conexão da porta I2C do SIM900 para A4/A5.  

## Projetos Relacionados

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

Este é um demo feito com o GPRS Shield V2.0.

Com este demo, fazemos um telefone móvel chamado Arduino Phone usando Arduino, GPRS Shield e outros módulos.

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_gas.jpg)
Este é um demo feito com o GPRS Shield V2.0.

Com este demo, podemos receber SMS quando houver vazamento de gás em casa.
[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=242)

## Visualizador Online de Esquemáticos

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático e PCB do GPRS Shield v2.0 em formato Eagle](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip)
- **[PDF]** [Esquemático do GPRS Shield v2.0 em formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_V2_Schematic.pdf)
- **[PDF]** [PCB do GPRS Shield v2.0 em formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRSshield%20V2%20PCB.pdf)
- **[Library]** [Biblioteca GPRS_Shield no gitHub - baseada em Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Library]** [Biblioteca GPRS_SIM900 no gitHub - Não Suli](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Document]** [AT Commands v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf)
- **[Document]** [SIM900 Hardware Design](https://wiki.seeedstudio.com/pt-br/images/e/e3/SIM900_HD_V1.05.pdf)
- **[Datasheet]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Datasheet]** [SIM900 Datasheeet](https://www.seeedstudio.com/document/SIM900datasheeet.zip)
- **[Tools]** [Firmware e ferramenta do SIM900 (firmware:1137B08SIM900M64_ST)](https://wiki.seeedstudio.com/pt-br/images/8/87/SIM900_firmware_and_tool.zip)

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
