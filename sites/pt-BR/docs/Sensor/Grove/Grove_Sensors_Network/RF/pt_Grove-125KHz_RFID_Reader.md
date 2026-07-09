---
title: Grove - Leitor RFID 125KHz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-125KHz_RFID_Reader/
slug: /Grove-125KHz_RFID_Reader
sku: 113020002
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-125KHz_RFID_Reader/
---

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Grove-125KHz_RFID_Reader.jpg)

Este Grove-125KHz RFID Reader é um módulo usado para ler informações de cartão RFID uem4100 com dois formatos de saída: Uart e Wiegand. Ele possui uma sensibilidade com distância máxima de detecção de 7 cm. Há também [a versão electronic brick](https://www.seeedstudio.com/depot/electronic-brick-125khz-rfid-card-reader-p-702.html?cPath=52) deste módulo. Ele pode ajudar você em projetos como internet das coisas e sistema de controle de acesso.

E você deve usar o módulo abaixo ao utilizar o leitor RFID:

- [RFID tag combo (125khz)](https://www.seeedstudio.com/depot/rfid-tag-combo-125khz-5-pcs-p-700.html?cPath=19_24)

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)

## Versão

| Versão do Produto | Mudanças | Data de Lançamento |
|-----------------|---------|---------------|
| Grove - 125KHz RFID Reader V1.0 | Inicial | Out 2015      |

## Especificações

|Parâmetro| Valor/Faixa|
|:------|:------------------|
|Tensão| 4.75-5.25V|
|Frequência de Trabalho| 125 KHz|
|Distância de Detecção (Máx)|70mm|
|Saída TTL| 9600 baudrate, 8 bits de dados, 1 bit de parada e sem bit de verificação|
|Saída Wiegand|26 bits em formato Wiegand, 1 bit de verificação par, 24 bits de dados e 1 bit de verificação ímpar|

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry

:::caution
    As plataformas mencionadas acima como compatíveis são apenas uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos bibliotecas de software ou exemplos de código apenas para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta for a primeira vez que você trabalha com Arduino, recomendamos fortemente que consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de começar.
:::

### Use com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield | Grove - Leitor RFID 125KHz |
|--------------|-------------|----------------------------|
| ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg) | ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg) | ![enter image description here](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/gr125k_01.jpg) |
| [Compre Agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Compre Agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [Compre Agora](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html) |

- **Passo 2.** Conecte o Grove - Leitor RFID 125KHz à porta **D2** do Grove-Base Shield.
- **Passo 3.** Encaixe o Grove - Base Shield no Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC com um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/RFID_reader.jpg)

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove_Ultrasonic_Ranger ao Seeeduino, como mostrado abaixo.
:::

| Seeeduino | Grove - Leitor RFID 125KHz |
|-----------|-----------------------------|
| 5V        | Vermelho                    |
| GND       | Preto                       |
| D3        | Branco                      |
| D2        | Amarelo                     |

#### Software

- **Passo 1.** Copie o código para a Arduino IDE e faça o upload. Se você não souber como fazer o upload do código, consulte [como fazer upload de código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
/*
  link between the computer and the SoftSerial Shield
  at 9600 bps 8-N-1
  Computer is connected to Hardware UART
  SoftSerial Shield is connected to the Software UART:D2&D3
*/
 
#include <SoftwareSerial.h>
 
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];       // buffer array for data receive over serial port
int count = 0;                    // counter for buffer array
 
void setup()
{
    SoftSerial.begin(9600);     // the SoftSerial baud rate
    Serial.begin(9600);         // the Serial port of Arduino baud rate.
}
 
void loop()
{
    // if date is coming from software serial port ==> data is coming from SoftSerial shield
    if (SoftSerial.available())              
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++] = SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer, count);     // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();             // call clearBufferArray function to clear the stored data from the array
        count = 0;                      // set counter of while loop to zero
    }
    if (Serial.available())             // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());    // write it to the SoftSerial shield
}
void clearBufferArray()                 // function to clear buffer array
{
    // clear all index of array with command NULL
    for (int i=0; i<count; i++)
    {
        buffer[i]=NULL;
    }                  
}
```

- **Passo 2.** Abra o Monitor Serial; as informações do cartão poderão ser exibidas como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Read_Data_.jpg)

## Modo Wiegand

(Jumper ajustado nos dois pinos à direita)  
Você precisará selecionar o jumper para **"W"** para entrar neste modo.  
O [código de demonstração Wiegand](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip) para Seeeduino foi desenvolvido para ler dados Wiegand no modo de interrupção.

No Modo Wiegand, os dados de saída são formatados em **26 bits**, incluindo **24 bits** de informação do cartão e **2 bits** de paridade.

<table border={1}>
  <tbody><tr style={{fontWeight: 'bold'}}>
      <td width={20}>
        bit
      </td>
      <td width={20}>
        0
      </td>
      <td width={20}>
        1
      </td>
      <td width={20}>
        2
      </td>
      <td width={20}>
        3
      </td>
      <td width={20}>
        4
      </td>
      <td width={20}>
        5
      </td>
      <td width={20}>
        6
      </td>
      <td width={20}>
        7
      </td>
      <td width={20}>
        8
      </td>
      <td width={20}>
        9
      </td>
      <td width={20}>
        10
      </td>
      <td width={20}>
        11
      </td>
      <td width={20}>
        12
      </td>
      <td width={20}>
        13
      </td>
      <td width={20}>
        14
      </td>
      <td width={20}>
        15
      </td>
      <td width={20}>
        16
      </td>
      <td width={20}>
        17
      </td>
      <td width={20}>
        18
      </td>
      <td width={20}>
        19
      </td>
      <td width={20}>
        20
      </td>
      <td width={20}>
        21
      </td>
      <td width={20}>
        22
      </td>
      <td width={20}>
        23
      </td>
      <td width={20}>
        24
      </td>
      <td width={20}>
        25
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        PE
      </td>
      <td colSpan={24} rowSpan={1}>
        D
      </td>
      <td>
        P0
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={12} rowSpan={1}>
        E
      </td>
      <td colSpan={12} rowSpan={1}>
        0
      </td>
      <td>
        -
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={8} rowSpan={1}>
        D2[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D1[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D0[7..0]
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody></table>

- **PE** é o bit par, **PO** é o bit ímpar;
- **E** é o bit de dados envolvido na paridade par, **O** é o bit de dados envolvido na paridade ímpar;
- **DX\[7..0\]** é o bit de dados que corresponde ao ID somente leitura do cartão **Mifare@ Standard & Light**.

## Perguntas Frequentes

**P1: Como converter a saída em Número do Cartão?**

R1: Siga os passos abaixo.

- Tome como exemplo o ID: 0009776930;
- ID do Número do Cartão: 0009776930 ------- Decimal [Bit Inicial(00) + Número do Cartão(8 dígitos)]
- Saída: 0700952F229F ------------- Hex [[Bit Inicial(07h) + Número do Cartão(8 dígitos) + Soma de verificação]
- A calculadora para números decimais e hexadecimais está disponível online.

**P2: Como ler tags continuamente?**

R2: O leitor RFID pode ler tags continuamente sem nenhuma configuração. Mantenha a tag a 2,5-4 cm da antena e o leitor poderá ler os dados continuamente. E se a distância for menor que 2,5 cm, o leitor lê os dados apenas uma vez se a tag não for afastada.

## Recursos

- **[Demo]** [Grove - 125KHz RFID Reader Demo](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip)
- **[PDF]** [Declaração de conformidade](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_Declaration%20of%20conformity.pdf)
- **[PDF]** [Relatório de teste](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_test%20report.pdf)

## Projetos

**Projeto de segurança baseado em Arduino usando Cayenne**: Projeto de segurança residencial baseado em Arduino. Alertas por SMS/e-mail quando um intruso é detectado. Mensagens personalizadas para pessoal autorizado.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
