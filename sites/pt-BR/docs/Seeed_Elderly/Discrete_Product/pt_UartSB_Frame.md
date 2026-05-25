---
description: UartSB Frame
title: UartSB Frame
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /UartSB_Frame
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/UartSB_Frame/
---
![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Top.jpg)

**UartSB Frame** é um adaptador de programação baseado em USB para **Seeeduino Film** equipado com um soquete FPC. O CI USB UART integrado **FT232RL** pode ser usado para programar ou comunicar com MCUs com lógica de 3,3 V. Ele também funciona como uma placa de breakout de baixa tensão (3,3 V) "FT232RL". **UartSB Frame** também fornece breakouts para os pinos de modo bit-bang do **FT232RL**. Esses pinos de modo Bit-bang (8 pinos de E/S) podem ser usados como substitutos para aplicações que envolvem porta paralela de PC, que hoje em dia é rara.

**Modelo:[PGM31058P](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)**

## Recursos

- Interface serial compatível com USB 2.0.
- Conector FPC de 20 pinos para conectar o **Seeeduino Film**
- E/S compatíveis com 3,3 V.
- Saídas de alimentação dupla de 3,3 V e 5 V.
- Modo Bit-Bang pronto (8 E/S seriais ou como SPI).
- LEDs para TxD, Rxd e alimentação.

## Ideias de Aplicações  

- Gravador para **Seeeduino Film** e placas compatíveis com 3,3 V.
- Adaptador USB para Serial para comunicação com dispositivos seriais de nível 3,3 V.
- Gravador para microcontroladores / CPLDs usando ISP (in-circuit-serial-programming).
- Fonte de alimentação de 3,3 V / 5 V para aplicações MCU em breadboard.
- A alimentação de 5 V pode ser usada para carregar a bateria do Seeeduino Film. (Não use a conexão FPC para esta aplicação)
- Possibilidades infinitas como dispositivo paralelo baseado em USB no modo bit-bang do FT232RL - Conhecido por funcionar como **AVR-ISP**, **JTAG** de baixa velocidade com OpenOCD e como **I2C**

## Cuidados  

<font color="red">**
**</font>

- Conecte o UartSB Frame ao Seeeduino Film somente como mostrado na seção **Seeeduino Film Programmer** "UartSB_Frame#Seeeduino_Film_Programmer").
- Não use FFC (Flat Cable Flexível) para conectar diretamente o UartSB Frame ao Seeeduino Film. Isso inverteria a conexão FPC de 20 pinos.

- Manuseie o conector FPC de 20 pinos com cuidado.

- Use o **UartSB Frame** somente com E/S de 3,3 V.

## Esquemático  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Schematic_1.png)

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Scehmatic_2.png)

## Especificações  

### Principais Especificações  

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">Microprocessor</th>
<td>FT232RL</td>
</tr>
<tr>
<th scope="row">PCB size</th>
<td>35mm x 20mm</td>
</tr>
<tr>
<th scope="row">Indicators</th>
<td>POWER - LED verde, RX e TX - LEDs vermelhos</td>
</tr>
<tr>
<th scope="row">Power supply</th>
<td>3.3V e 5V CC</td>
</tr>
<tr>
<th scope="row">Interface</th>
<td>USB Mini-B, cabeçalho de pinos com passo de 2,54 mm</td>
</tr>
<tr>
<th scope="row">Seeeduino Programming Port</th>
<td>Soquete FPC de 20 pinos</td>
</tr>
<tr>
<th scope="row">Connectivity</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">Communication Protocol</th>
<td>UART, Bit Bang I/O, SPI</td>
</tr>
</table>

### Características Elétricas  

<table>
<tr>
<th>Specification</th>
<th>Minimum</th>
<th>Typical</th>
<th>Maximum</th>
<th>Unit</th>
</tr>
<tr>
<td>Tensão de entrada</td>
<td>-</td>
<td>5</td>
<td>5</td>
<td>Vdc</td>
</tr>
<tr>
<td>Consumo de corrente</td>
<td>-</td>
<td>-</td>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<td>Tensão de saída</td>
<td>3.3</td>
<td>-</td>
<td>5</td>
<td>Vdc</td>
</tr>
</table>

## Definição e Classificação dos Pinos  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Outline_35mmx20mm.png)

<table>
<tr>
<th>Pad Name</th>
<th>Description</th>
</tr>
<tr>
<td width="100px">GND</td>
<td width="450px">Pino de terra</td>
</tr>
<tr>
<td width="100px">3v3</td>
<td width="450px">Fonte de alimentação de 3,3 V</td>
</tr>
<tr>
<td width="100px">5V</td>
<td width="450px">Fonte de alimentação de 5 V pela porta USB</td>
</tr>
<tr>
<td>RXD</td>
<td>Entrada de dados UART</td>
</tr>
<tr>
<td>TXD</td>
<td>Saída de dados UART</td>
</tr>
<tr>
<td width="100px">CTS</td>
<td width="450px">Sinal UART Clear to Send</td>
</tr>
<tr>
<td width="100px">RTS</td>
<td width="450px">Sinal UART Request to Send</td>
</tr>
<tr>
<td width="100px">DTR</td>
<td width="450px">Sinal UART Data Terminal Ready</td>
</tr>
<tr>
<td width="100px">DCD</td>
<td width="450px">Sinal UART Data Carrier Detect</td>
</tr>
<tr>
<td width="100px">DSR</td>
<td width="450px">Sinal UART Data Set Ready</td>
</tr>
</table>

## Uso

### Gravador Seeeduino Film

**UartSB Frame** é projetado exclusivamente para gravar o **Seeeduino Film**. Ele funciona como uma interface USB para porta serial (porta COM) quando conectado ao PC. Esse tipo de configuração pode ser usado para se comunicar com uma porta serial de MCU. Também é útil para programar um MCU que suporte ISP baseado em UART.

- Se os drivers do FT232RL não tiverem sido instalados, siga o procedimento na próxima seção (configurando o UartSB Frame).

- Conecte o Seeeduino Film ao UartSB Frame como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Film_with_UartSB_Frame.jpg)

- Defina o tipo de placa como Arduino Pro ou Pro Mini (3.3V, 8MHz) w/ATMega168 na Arduino IDE

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Arduino_Board_Selection.jpg)

- Envie o sketch.

#### Configurando o UartSB Frame no **Windows**

- No sistema operacional Windows, na primeira vez que você conectar o dispositivo, pode ser solicitado o driver.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Detected_Windows.JPG)

Baixe e instale o driver de **porta COM virtual** no site da FTDI:

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

- Um assistente será aberto para instalar o driver. Escolha "Install from a list or specific location"

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_1.JPG)

- Escolha o caminho do driver baixado

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.JPG)

- Se você baixou um driver sem assinatura, a seguinte janela aparecerá. Apenas clique em "Continue Anyway"

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.1.JPG)

- O driver do **UartSB Frame** foi instalado com sucesso. O Windows atribui um nome de porta **COM** ao **FT232RL**, como **COM10**, **COM11** etc... Verifique o nome exato no Gerenciador de Dispositivos. Neste caso, "**COM16**" foi atribuído ao UartSB Frame

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_3.JPG)

#### Configurando o UartSB Frame no **GNU/Linux**

Todos os **sistemas GNU/Linux** modernos vêm com drivers FT232RL. Para verificar se o UartSB Frame foi detectado, execute o comando **lsusb**. Uma saída semelhante à abaixo deve aparecer.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Lsub.png)

O **GNU/Linux** atribui **/dev/ttyUSB0**, **/dev/ttyUSB1** etc... como nome de dispositivo.  

Para verificar o funcionamento da porta serial, conecte os pinos **TxD** e **RxD** do UartSB Frame e use um aplicativo de terminal como **cutecom** para configurar os parâmetros do dispositivo como mostrado abaixo.

**Taxa de transmissão (Baudrate)**:9600, **Bits de dados (Data bits)**:8, **Bits de parada (Stop bits)**:Nenhum e sem Handshake

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Txd_Rxd_connected.jpg)

Qualquer caractere digitado no terminal será ecoado de volta como mostrado.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartsBee-CuteCom.png)

A mesma funcionalidade pode ser verificada no **Windows** - **Hyperterminal** também.

### Carregador de bateria para Seeeduino Film  

A alimentação USB de 5 V disponível no breakout do **UartSB Frame** pode ser usada para carregar a bateria do **Seeeduino Film**.

- Solde o conector de alimentação do **Seeeduino Film** em 5V e GND do **UartSB Frame**.

- Conecte o conector de alimentação ao jack **CHG**.

- Conecte a bateria ao jack **BAT** do Seeeduino Film.

- Ligue o USB.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Battery_Charging_with_UartSBFrame.jpg)

### Modo BitBang  

Uma característica interessante do UartSB Frame em comparação com outros dispositivos USB-Serial baseados em FT232RL é que todas as E/S Bit-Bang são trazidas para os pinos do cabeçalho.

O modo Bit-Bang é um recurso especial do FT232RL no qual 8 linhas de E/S (**D0 - D7**) podem ser usadas como linhas de E/S bidirecionais de uso geral. Três modos Bit-Bang são suportados pelo FT232RL

- **Modo Bit-Bang Assíncrono**

Qualquer dado escrito no dispositivo é transferido para os pinos de saída configurados. A taxa de transferência de dados é configurada com base no gerador de baud rate. Neste modo, qualquer uma das 8 linhas de E/S pode ser configurada como entrada ou saída.

- **Modo Bit-Bang Síncrono**

Neste modo, os dados são enviados de forma síncrona. Uma entrada é lida antes que um byte de saída seja enviado ao dispositivo. Portanto, para ler a entrada, uma operação de escrita deve ser executada.

- **Modo Bit-Bang CBUS**

Este é um modo especial que requer reprogramação da EEPROM do FT232RL. Ele usa os sinais **C0 - C3**.

O **Modo Bit-Bang** do **FT232RL** está bem documentado na nota de aplicação[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Tabela: Mapeamento de E/S Bit-Bang**

<table>
<tr>
<th>Sinal UartSB Frame</th>
<th>Sinal BitBang I/O</th>
</tr>
<tr>
<td>TxD</td>
<td>D0</td>
</tr>
<tr>
<td>RxD</td>
<td>D1</td>
</tr>
<tr>
<td>RTS</td>
<td>D2</td>
</tr>
<tr>
<td>CTS</td>
<td>D3</td>
</tr>
<tr>
<td>DTR</td>
<td>D4</td>
</tr>
<tr>
<td>DSR</td>
<td>D5</td>
</tr>
<tr>
<td>DCD</td>
<td>D6</td>
</tr>
<tr>
<td>RI</td>
<td>D7</td>
</tr>
</table>

**Operação em Modo BitBang:**

Uma operação simples em modo Bit-Bang Assíncrono é demonstrada no arranjo em breadboard abaixo, no qual o pino DTR (D4) está conectado a um LED. A taxa de piscar do LED é controlada pelo programa de aplicação do lado do PC.

**Circuito do LED Piscante**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_BitBang_demo.jpg)

A imagem acima foi feita com Fritzing.org

**Pinos de E/S Bit Bang (conector ISP) mostrados na camada inferior**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Bottom.jpg)

O modo Bit-Bang requer um driver direto FTDI especial chamado [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm). Este driver precisa ser instalado após remover o driver de Porta COM Virtual do chip FT232RL. No GNU/Linux este driver é executado em modo kernel. Como alternativa ao D2XX, um driver Free Open Source [libFTDI](http://www.intra2net.com/en/developer/libftdi/) está disponível. Ele funciona no Windows, GNU/Linux e Mac OS. Ele é executado em modo usuário no GNU/Linux. Portanto, não há necessidade de remover o driver FT232RL existente.

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB** o libFTDI requer libusb, que pode ser baixado em

[http://www.libusb.org/](http://www.libusb.org/)

O código de exemplo abaixo pode ser compilado de maneira semelhante aos arquivos de exemplo do libFTDI. Uma maneira fácil é copiar o conteúdo do código abaixo para um dos arquivos .c de exemplo existentes e compilar todo o driver usando

./configure

make

 **Exemplo de Código**

Blinky.C: UartSBee v3.1 (FT232RL) modo Bit-Bang - Blinky.

Circuito:
Conecte TXD ao ânodo do LED, conecte uma extremidade do resistor ao GND e a outra extremidade
ao cátodo do LED

```c
#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// 8 bit pin mask for I/O pin </span>
#define TXD 0x01  
#define RXD 0x02  
#define RTS 0x04  
#define CTS 0x08  
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include <stdio.h>;
#include <ftdi.h>;    

int main
{ 
    unsigned char ouputState =0;
    struct ftdi_context ftdic;

    /* 1. Initialize ftdi device context */
    ftdi_init(&ftdic);  

    /* 2. Open the device based of VID/PID pair */

    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) &lt<span ;>0)
    {
        printf("Unable to open UartSBs Frame");
        return1;}

    /* 3. Enable Bit-Bang mode with for DTR line  */
    ftdi_set_bitmode(&ftdic, TXD, BITMODE_BITBANG);

    /* 4. Blink LED every 1 second */
    while(1)</span> <span class="br0">{
        ouputState ^= TXD;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

O modo Bit-Bang do FT232RL pode ser usado para construir portas AVR ISP, JTAG, SPI e I2C. Consulte os links externos.

## Galeria de Imagens

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSBFrame_SeeeduinoFilm_Programming.jpg)

## FAQ  

Liste sua pergunta aqui:

## Suporte  

Se você tiver dúvidas ou outras ideias de design melhores, você pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou **wish** para discutir.

## Rastreador de Versão da Documentação  

<table>
<tr>
<th>Revisão</th>
<th>Descrição</th>
<th>Editor</th>
<th>Data de Lançamento</th>
</tr>
<tr>
<td>V0.9b</td>
<td>Notas de Aplicação Detalhadas</td>
<td>Visweswara R</td>
<td>22 Fev 2010</td>
</tr>
</table>

## Rastreador de Versão de Hardware  

<table>
<tr>
<th>Revisão</th>
<th>Descrição</th>
<th>Data de Lançamento</th>
</tr>
<tr>
<td>UartSBs Frame</td>
<td>0.9b</td>
<td>22 Fev 2010</td>
</tr>
</table>

## Rastreador de Bugs  

O Rastreador de Bugs é o lugar onde você pode publicar quaisquer bugs que ache que possa ter encontrado durante o uso. Por favor, escreva o que você tem a dizer; suas respostas nos ajudarão a melhorar nossos produtos.

## Ideia Adicional  

A Ideia Adicional é o lugar para escrever suas ideias de projeto sobre este produto ou outros usos que você tenha encontrado. Ou você pode escrevê-las na página de Projetos.

## Recursos  

- **[Eagle]**[Arquivos de Esquemático e Placa em Eagle](https://wiki.seeedstudio.com/pt-br/images/d/d3/UartSBs_Frame_Schematic_Board.zip)

- **[PDF]** [Esquemático em PDF](https://wiki.seeedstudio.com/pt-br/images/9/91/UartSBs_0.9b_Schematic.pdf)

## Como comprar  

Clique aqui para comprar o [UartSB Frame](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)

## Licenciamento  

Esta documentação é licenciada sob a licença Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código-fonte para mais detalhes.

## Links Externos  

- **[[2]](https://www.ftdichip.com/Products/ICs/FT232R.htm)**[Página do produto FTDI FT232RL](https://www.ftdichip.com/Products/ICs/FT232R.htm)

- [[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) drivers FTDI Virtual COM Port (VCP)
- [Drivers FTDI D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)

- [Nota de aplicação do modo FTDI Bit-Bang](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Drivers Open Source**

- [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

- [libUSB](http://www.libusb.org/)

**Outras Fontes de informação de aplicação do FT232RL**

- [Hackaday - Introdução ao modo bit-bang](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

- [Implementação FT232R JTAG com OpenOCD](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

- [Exemplo de modo FT232R SPI Bitbang](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
