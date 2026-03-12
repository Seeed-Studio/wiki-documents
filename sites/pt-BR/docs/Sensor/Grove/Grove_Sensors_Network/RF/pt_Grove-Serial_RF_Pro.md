---
title: Grove - Serial RF Pro
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Sensor_communication/
slug: /Grove-Serial_RF_Pro
sku: 113020000
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Serial_RF_Pro/
---
![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Twigrf.jpg)

Grove-Serial RF Pro é um transceptor FSK transparente de baixo custo e alto desempenho, operando em 433/470/868/915 MHz, e o melhor desempenho é em 433M (padrão). Há uma interface UART que torna fácil realizar a transmissão de dados sem fio apenas fornecendo os dados UART. É flexível para os usuários configurarem taxa de baud da UART, frequência, potência de saída, taxa de dados, desvio de frequência, largura de banda de recepção etc. É a sua escolha ideal para projetar produtos de transmissão de dados sem fio que podem ser amplamente usados no campo de transmissão de dados sem fio.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)

## Rastreador de Versão

<table>
<tr>
<th> Revisão</th>
<th> Descrições</th>
<th> Lançamento</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> Lançamento público inicial</td>
<td width="200px"> N/A</td>
</tr>
</table>

## Recursos

---

* Compatível com Grove
* Alta potência de saída
* Alta potência de saída
* Tamanho pequeno
* Maior distância de transmissão

## Ideias de Aplicação

---

* Sistema de controle remoto e medição remota
* Medidor sem fio
* Controle de acesso
* Sistema de identificação
* Coleta de dados
* Eletrodoméstico de TI
* Sistema de monitoramento de bebês

## Especificação

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item</th>
<th scope="col"> Mín</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidade</th>
</tr>
<tr>
<td scope="row">Tensão de trabalho</td>
<td> 4.75</td>
<td> 5.0</td>
<td> 5.25</td>
<td> VDC</td>
</tr>
<tr>
<td scope="row"> Corrente em modo de suspensão</td>
<td colspan="3"> 1</td>
<td> uA</td>
</tr>
<tr>
<td scope="row"> Potência de saída</td>
<td> 1</td>
<td> -</td>
<td> 20</td>
<td> dB</td>
</tr>
<tr>
<td scope="row"> Velocidade de comunicação</td>
<td> 1.2</td>
<td>  -</td>
<td> 115.2</td>
<td> Kbps</td>
</tr>
<tr>
<td scope="row"> Distância de transmissão (Máx)</td>
<td colspan="3"> 1</td>
<td> Km</td>
</tr>
<tr>
<td scope="row"> Sensibilidade</td>
<td colspan="3"> -117</td>
<td> dBm</td>
</tr>
<tr>
<td scope="row"> Protocolo de comunicação</td>
<td colspan="3">  UART</td>
<td> /</td>
</tr>
<tr>
<td scope="row"> Temperatura de operação</td>
<td> -40</td>
<td>  -</td>
<td> +85</td>
<td> ℃</td>
</tr>
</table>

## Função da Interface

---
![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Serial_RF_Pro1.jpg)

<table >
<tr>
<th> Tipo de pad (nível lógico 5V)</th>
<th> Descrição</th>
</tr>
<tr>
<td width="100px"> G(GND)</td>
<td width="450px"> Porta de aterramento</td>
</tr>
<tr>
<td> EN(ENABLE)</td>
<td> Defina nível baixo para modo normal como transceptor de dados (padrão é baixo com 10k para GND).
Defina nível alto para colocar em modo de suspensão.</td>
</tr>
<tr>
<td> CON(CONFIG)</td>
<td> Defina nível baixo para modo de configuração (conectar ao GND).
Defina nível alto para comunicação (padrão é alto).</td>
</tr>
<tr>
<td> RX</td>
<td> Entrada de dados UART</td>
</tr>
<tr>
<td> TX</td>
<td> Saída de dados UART</td>
</tr>
<tr>
<td> V(VCC)</td>
<td> Projetado para alimentação de 5V(+)</td>
</tr>
<tr>
<td> AT</td>
<td> Pino de antena</td>
</tr>
</table>

## Primeiros Passos

---
Aqui mostramos duas unidades Grove RF Pro transmitindo/recebendo dados mutuamente. Você precisa de duas unidades Grove RF Pro e dois Seeeduino para fazer a demonstração.

* Conecte um Grove - Serial RF Pro à UART do [Grove - Base Shield](https://wiki.seeedstudio.com/pt-br/Base_Shield_V2/) e encaixe o Grove - Base Shield no Seeeduino.

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Rfdemo.jpg)

* Conecte o outro Grove - Serial RF Pro ao Seeeduino usando o mesmo método.

### Métodos de Configuração e Consulta

O módulo estará pronto para o estado de configuração se o pino ENABLE estiver em nível baixo e o pino CONFIG estiver em nível baixo. Ele estará em modo de configuração
se os LEDs vermelho e verde permanecerem acesos. Então você pode configurar e consultar o módulo.

* Conecte o pino CON a LOW/GND para entrar no modo de configuração.

* Envie comando para modificar e consultar a configuração do módulo. Para a descrição das instruções de configuração e consulta, veja [Referência](https://wiki.seeedstudio.com/pt-br/Grove-Serial_RF_Pro/#reference).

O formato da instrução de configuração é AA+FA+[instruction]+[parameter]. A instrução tem 1 byte, o parâmetro é o dado HEX de 0–4 bytes (em ordem big-endian, com o byte alto antes do byte baixo).

**Nota:**

1) Lembre-se da velocidade de transferência UART (padrão é 9600, é melhor não alterar) se você fizer alguma mudança, ou você não conseguirá controlar o módulo. A velocidade de transferência das instruções mudará de acordo se a velocidade de transferência da UART for alterada. A faixa de velocidade de transferência das instruções é de 1,2 Kbps – 115,2 Kbps.

2) Descrição da função dos LEDs:

- Os LEDs vermelho e verde piscarão quando houver alimentação e o módulo estiver funcionando.
* O módulo estará pronto para o modo de configuração se o pino EN(ENABLE) estiver em nível baixo (padrão é baixo), e o pino CON(Config) estiver em nível baixo. Quando estiver no modo de configuração, os LEDs vermelho e verde permanecerão ambos acesos de forma contínua. - Os LEDs verde e vermelho não ficarão acesos de forma contínua se o módulo não estiver em modo de configuração.
* O LED vermelho pisca quando o módulo está transmitindo, o LED vermelho apagará quando a transmissão terminar.
* O LED verde fica apagado quando o módulo está aguardando dados a serem recebidos, o LED verde piscará uma vez quando o módulo receber dados.

### Modo de Comunicação

Carregue o código abaixo no Seeeduino. Clique [aqui](https://wiki.seeedstudio.com/pt-br/Upload_Code) se você não souber como carregar.

```
//send data routine

// link between the computer and the SoftSerial Shield
//at 9600 bps 8-N-1
//Computer is connected to Hardware UART
//SoftSerial Shield is connected to the Software UART:D2&D3

#include <SoftwareSerial.h>

SoftwareSerial SoftSerial(11, 10); // TX, RX
int buffer[64];
int count=0;
void setup()
{
    SoftSerial.begin(9600);               // the SoftSerial baud rate
    Serial.begin(9600);             // the Serial port of Arduino baud rate.

}

void loop()
{
    delay(1000);
    SoftSerial.write(0xAA);
    SoftSerial.write(0xFA);
    SoftSerial.write(0xE1);

    if (SoftSerial.available())              // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())          // reading data into char array
        {
            buffer[count++]=SoftSerial.read();     // writing data into array
            if(count == 64)break;
        }
        for (int i=0; i<count; i++) {
            Serial.print(buffer[i],HEX);            // if no data transmission ends, write buffer to hardware serial port
        }
        clearBufferArray();              // call clearBufferArray function to clear the stored data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());       // write it to the SoftSerial shield
    Serial.println("...");
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```

* Você pode ver o que é mostrado abaixo após abrir o monitor serial.

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Communication_result.jpg)

## Referência

---
A tabela a seguir lista os comandos e respostas envolvidos na interação com o Serial RF Pro v0.9b.

<table>
  <tbody><tr>
      <th>Instrução (HEX)</th>
      <th>Descrição</th>
      <th>Instrução de configuração (HEX)</th>
      <th>Valor de retorno</th>
      </tr>
    <tr>
      <td>F0</td>
      <td>Redefinir para os parâmetros padrão (exceto velocidade de transferência UART), sem parâmetro em seguida</td>
      <td width="400px">AA FA F0</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>E1</td>
      <td>Ler o parâmetro de configuração atual, sem parâmetro em seguida</td>
      <td>AA FA E1</td>
      <td>16 bytes: (**seguindo a ordem abaixo**) <pre>working frequency-4 bytes,{"\n"}wireless data rate-4 bytes,{"\n"}receiving bandwidth-2 bytes,{"\n"}frequency deviation-1 byte,{"\n"}transmission power-1 byte,{"\n"}UART transfer speed-4 bytes{"\n"}</pre></td>
      </tr>
    <tr>
      <td>D2</td>
      <td>Configurar frequência de trabalho, [parameter] 4 bytes, [parameter] unidade: Hz. Faixa de configuração: *HM-TRP-433: 414000000–454000000 Hz; * HM-TRP-470: 450000000–490000000 Hz; *HM-TRP-868: 849000000–889000000 Hz; * HM-TRP-915: 895000000–935000000 Hz</td>
      <td>Exemplo: *Instrução de configuração: AA FA D2 **36 89 CA C0**, configura a frequência como 915000000 Hz.(**0x36 89 CA C0=915000000**) * Instrução de configuração: AA FA D2 **19 DE 50 80**, configura a frequência como 434000000 Hz.(**0x19 DE 50 80=434000000**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>C3</td>
      <td>Configurar taxa de dados sem fio, [parameter] 4 bytes, [parameter] unidade: bps. Faixa de configuração: 1200–115200 bps</td>
      <td>Exemplo: *Instrução de configuração: AA FA C3 **00 00 25 80**, configura a velocidade de transferência como 9600 bps.(**0x00 00 25 80=9600**) * Instrução de configuração: AA FA C3 **00 00 96 00**, configura a velocidade de transferência como 38400 bps.(**0x00 00 96 00=38400**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>B4</td>
      <td>Configurar largura de banda de recepção, [parameter] 2 bytes, [parameter] unidade: KHz Faixa de configuração: 30–620 KHz</td>
      <td>Exemplo: *Instrução de configuração: AA FA B4 **00 69**, configura a banda de recepção como 105 KHz.(**0x00 69=105**) * Instrução de configuração: AA FA B4 **01 2C**, configura a banda de recepção como 300 KHz.(**0x01 2C=300**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>A5</td>
      <td>Configurar desvio de frequência, [parameter] 1 byte, [parameter] unidade: KHz Faixa de configuração: 10–160 KHz</td>
      <td>Exemplo: *Instrução de configuração: AA FA A5 **23**, configura a frequência de modulação como 35 KHz.(**0x23=35**) * Instrução de configuração: AA FA A5 **32**, configura a frequência de modulação como 50 KHz.(**0x32=50**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>96</td>
      <td>Configurar potência de transmissão, [parameter]1 byte, nível 0~7 Faixa de configuração: nível 0-7 (1-20 dBm)</td>
      <td>Exemplo: *Instrução de configuração: AA FA 96 **07**, configurar potência de transmissão como nível 7 (+20 dBm) *   Instrução de configuração: AA FA 96 **03**, configurar potência de transmissão como nível 3 (+8 dBm) <pre>Transmission power level{"     "}Transmission power{"\n"}7{"                                 "}+20dBm{"\n"}6{"                                 "}+17dBm{"\n"}5{"                                 "}+14dBm{"\n"}4{"                                 "}+11dBm{"\n"}3{"                                 "}+8dBm{"\n"}2{"                                 "}+5dBm{"\n"}1{"                                 "}+2dBm{"\n"}0{"                                 "}+1dBm{"\n"}</pre></td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>1E</td>
      <td>Configurar velocidade de transferência UART, [parameter]4 byte, unidade de [parameter]: bps Faixa de configuração: 1200-115200 bps</td>
      <td>Exemplo: *Instrução de configuração: AA FA 1E **00 00 25 80**, configurar velocidade como 9600bps. (**0x00 00 25 80=9600**) *   Instrução de configuração: AA FA 1E **00 00 96 00**, configurar velocidade como 38400bps. (**0x00 00 96 00=38400**)</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>87</td>
      <td>Intensidade do sinal sem fio ao receber dados úteis, não possui [parameter]</td>
      <td>Instrução de configuração: AA FA 87<br /><img src="https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/WirelesssignalstrengthRSSI.jpg" /></td>
      <td>O valor de RSSI é de 8 bits, faixa: 0-255</td>
      </tr>
    <tr>
      <td>78</td>
      <td>Intensidade do sinal sem fio de interferência, não possui [parameter]<br />Nota:<br />*Índice de modulação: h = Fd/Rb, a faixa é 0,5 ~ 32.<br />*   Se h &gt; 1, BW =Rb+2Fd; Se h &lt; 1, BW =2Rb+ Fd.</td>
      <td>Instrução de configuração: AA FA 78</td>
      <td>O valor de RSSI é de 8 bits, faixa: 0-255</td>
      </tr>
</tbody>
</table>

## Recursos

* **[Code]** [Serial RF Pro Demo Code](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/Grove-Serial_RF_Pro_Demo_Code.zip)

* **[Datasheet]** [HopeRF HM-TRP Series 100mW Transceiver modules V1.0 Datasheet](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/HM-TRP-RS232_enV1.0_20120604.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
