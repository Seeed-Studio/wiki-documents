---
description: UartSBee V4
title: UartSBee V4
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /UartSBee_V4
sku: 103990023
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/UartSBee_V4/
---
 ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Xbs4.jpg)

**UartSBee v4.0** é um adaptador **USB para Serial** compatível com cabo FTDI equipado com soquete BEE (20 pinos 2,0 mm). O **FT232RL** integrado pode ser usado para programar ou comunicar com MCUs. Por outro lado, você pode conectar seu PC a várias aplicações sem fio por meio de um módulo compatível com **Bee**. O UartSBee também fornece breakouts para os pinos de modo bit-bang do **FT232RL**. Esses pinos de modo Bit-bang (8 pinos de E/S) podem ser usados como substitutos para aplicações que envolvem porta paralela de PC, que hoje em dia é rara.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/UartSBee-V4-p-688.html)

## Rastreador de Versão de Hardware

| Revisão | Descrição | Data de Lançamento |
|----------|-------------|--------------|
| UartSBee V3.1 | Excluir o breakout de Bluetooth no lado inferior, reduzir o fator de forma | 02 set. 2010 |
| UartSBee V2.3 | Corrente CC para pino de 3,3 V, até 500 mA fornecidos para melhor suporte ao XBee pro | 21 jul. 2009 |
| UartSBee V2.1 | Lançamento público inicial | 01 fev. 2009 |

## Recursos

---
- Compatível com cabo FTDI.
- Interface Serial compatível com USB 2.0.
- E/S compatíveis com 3,3 V e 5 V.
- Saídas de alimentação dupla de 3,3 V e 5 V.
- Botão de reset para módulos BEE.
- Modo Bit-Bang pronto (8 E/S seriais ou como SPI).
- LEDs para operações UART e BEE.

## Ideias de Aplicações

---
- Adaptador USB para Serial para comunicação com dispositivos seriais de nível TTL/CMOS.
- Programador para Arduino / Seeeduino e placas compatíveis.
- Programador para microcontroladores / CPLDs usando ISP (in-circuit-serial-programming).
- Fonte de alimentação de 3,3 V / 5 V para aplicações de MCU em protoboard
- Adaptador USB para módulos BEE (para função sem fio no PC).
- Possibilidades infinitas como dispositivo paralelo baseado em USB no modo bit-bang do FT232RL - Conhecido por funcionar como **AVR-ISP**, **JTAG** de baixa velocidade com OpenOCD, como **I2C**,

## Cuidados

---

- **UartSBee v3.1** fornece um **seletor de alimentação** (3,3 V ou 5 V) com **chave de alternância**. <u>Antes de conectar</u> a placa a qualquer outro dispositivo, certifique-se de definir a chave de seleção de alimentação para 3,3 V ou 5 V.

## Esquemático

---
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_V4.0_Sch.png)

## Especificações

---

### Especificações Principais

| Especificação | Valor |
|--------------|-------|
| Microprocessador | FT232RL |
| Tamanho da placa | 3,1 cm x 4,1 cm |
| Indicadores | POWER, LED verde. LEDs para Txd e Rxd |
| Fonte de alimentação | 3,3 V e 5 V CC |
| Interface | Mini-B USB, conector de pinos passo 2,54 mm |
| Soquete do adaptador | Conector fêmea de pinos passo 2,0 mm compatível com XBee |
| Conectividade | USB |
| Protocolo de Comunicação | UART, Bit Bang I/O, SPI |
| ROHS | SIM |

### Características Elétricas

| Especificação | Mínimo | Típico | Máximo | Unidade |
|--------------|---------|---------|---------|------|
| Tensão de entrada | - | 5 | 5 | Vcc |
| Consumo de corrente | - | - | 500 | mA |
| Tensão de saída | 3,3 | - | 5 | Vcc |

## Diagrama de Blocos do Sistema

---
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-block-diagram.jpg)

- Uma pequena **chave** de **reset** é fornecida para reinicializar dispositivos compatíveis com **Bee**.
- Além do Breakout **2 x 10** para módulos compatíveis com BEE, pads adicionais para **2 x cabeçalhos de 10 pinos**, **cabeçalho ISP 2 x 3** são fornecidos. Os usuários podem soldar cabeçalhos de pinos conforme apropriado.

## Aplicações

---

### USB – Porta Serial

**UartSBee** é comumente usado como interface USB para Porta Serial (porta COM). Esse tipo de configuração pode ser usado para comunicar com uma porta serial de MCU ou para programar uma MCU que suporte ISP baseado em UART.

**Windows**

- No sistema operacional Windows, na primeira vez que você conectar o dispositivo, talvez seja solicitado o driver.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Detected_Windows.JPG)

Baixe e instale o driver de **porta COM virtual** no site da FTDI:

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

- Um assistente é aberto para instalação do driver. Escolha "Install from a list or specific location"

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_1.JPG)

- Escolha o caminho do driver baixado

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.JPG)

- Se você baixou um driver não assinado, a seguinte janela aparece. Basta clicar em "Continue Anyway"

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.1.JPG)

- O driver do **UartSBee** foi instalado com sucesso. O Windows atribui um nome de porta **COM** ao **FT232RL**, como **COM10**, **COM11** etc... Verifique o nome exato no Gerenciador de Dispositivos. Neste caso "**COM16**" é atribuída ao UartSBee

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_3.JPG)

**GNU/Linux**

Todos os sistemas **GNU/Linux OS** modernos vêm com drivers para FT232RL. Para verificar se o UartSBee foi detectado, emita um comando **lsusb**. Uma saída semelhante à abaixo deve aparecer.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Lsub.png)

O **GNU/Linux** atribui **/dev/ttyUSB0**, **/dev/ttyUSB1** etc... como nome de dispositivo.

Para verificar o funcionamento da porta serial conecte os pinos **TxD** e **RxD** do UartSBee e use um aplicativo de terminal como **cutecom** para configurar os parâmetros do dispositivo como mostrado abaixo.

**Baudrate**:9600, **Data bits**:8, **Stop bits**:None e sem Handshake

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-txd-rxd-connected.JPG)

Qualquer caractere digitado no terminal será ecoado de volta como mostrado.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartsBee-CuteCom.png)

A mesma funcionalidade pode ser verificada no **Windows** - **Hyperterminal** também.

### Fonte de Alimentação 3,3 V / 5 V para MCUs em protoboard e Programador para MCUs / CPLDs

Além das saídas de alimentação de 3,3 V e 5 V fornecidas pelo UartSBee, o nível lógico dos pinos de E/S pode ser selecionado para operações de **5,0 V** **TTL** ou **3,3 V CMOS**. No exemplo abaixo, é demonstrada uma aplicação de microcontrolador baseada em protoboard. Um MCU LPC1343 ARM Cortex-M3 é conectado ao UartSBee. Como este é um dispositivo de 3,3 V, a chave de alternância de alimentação é ajustada para 3,3 V. O LPC1343 pode ser programado via UART. Esta aplicação pode ser estendida para qualquer MCU / CPLDs que suporte gravação baseada em UART ou gravação baseada em SPI (necessita do modo BitBang do FT232R).

**Prototipagem em Protoboard**: **UartSBee v3.1** atuando como fonte de alimentação de 3,3 V e porta de programação UART de 3,3 V para o LPC1343.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_as_uCPowerSupplyAndProgPort_BreadBoard.JPG)

 **Chave**: E/S de 3,3 V selecionada
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UarSBee-Switch_3.3V_selected.jpg)

### Interface de Módulo Bee para aplicação sem fio em PC

**Ad-Ons Sem Fio para PC**

A interface compatível com Bee do UartSBee pode ser usada para conectar módulo Bee como **XBee**, **Bluetooth Bee**, **RF Bee**, **Wifi Bee**, **GPS Bee** ao USB do PC. Isso torna mais fáceis as aplicações sem fio para PC baseadas em Bee. Como a maioria desses módulos Bee suporta interface UART, a programação no PC também é fácil.

**Ad-Ons Sem Fio para MCU**

Esse tipo de arranjo também pode ser usado para interfacear com a UART de microcontroladores (Seeeduino).

Consulte a documentação do módulo Bee para mais informações.

**XBee **Conectado ao**UartSBee                                                                     BluetoothBee **Conectado ao**UartSBee**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee-hardware.jpg) ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/BluetoothBee_with_UartSBee.JPG)

### Modo BitBang

Um recurso interessante do UartSBee v3.1 em comparação com outros dispositivos USB-Serial baseados em FT232RL é que todas as E/S de Bit-Bang são trazidas para os pinos do cabeçalho.

O modo Bit-Bang é um recurso especial do FT232RL no qual 8 linhas de E/S (**D0 - D7**) podem ser usadas como linhas de E/S bidirecionais de uso geral. Três modos Bit-Bang são suportados pelo FT232RL

- **Modo Asíncrono Bit-Bang**

Qualquer dado gravado no dispositivo é enviado para os pinos de saída configurados. A taxa de transferência de dados é configurada com base no gerador de baud rate. Nesse modo, qualquer uma das 8 linhas de E/S pode ser configurada como entrada ou saída.

- **Modo Síncrono Bit-Bang**

Nesse modo os dados são enviados de forma síncrona. Uma entrada é lida antes que um byte de saída seja enviado ao dispositivo. Portanto, para ler a entrada, uma operação de escrita deve ser realizada.

- **Modo CBUS Bit-Bang**

Este é um modo especial que requer reprogramação da EEPROM do FT232RL. Ele usa os sinais **C0 - C3**.

 **O modo Bit-Bang** do **FT232RL** está bem documentado na nota de aplicação[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Tabela: Mapeamento de E/S Bit-Bang**

| Sinal UartSBee | Sinal BitBang I/O |
|-----------------|-------------------|
| TxD | D0 |
| RxD | D1 |
| RTS | D2 |
| CTS | D3 |
| DTR | D4 |
| DSR | D5 |
| DCD | D6 |
| RI | D7 |

**Operação em Modo BitBang:**

Uma simples operação de modo Asynchronous Bit-Bang é demonstrada no arranjo em protoboard abaixo, no qual o pino DTR (D4) é conectado a um LED. A taxa de piscagem do LED é controlada pelo programa de aplicação no lado do PC.

 **Circuito LED Blinky                                                             E/S BitBang do UartSBee V3.1 - Lado Inferior**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_bit-bang-DTR.jpg)   ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_Bottom_Bit_Bang.png)

O modo Bit-Bang requer um driver direto especial da FTDI chamado [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm). Esse driver precisa ser instalado após remover o driver de Porta COM Virtual do chip FT232RL. No GNU/Linux esse driver é executado em modo kernel. Como alternativa ao D2XX, um driver Free Open Source [libFTDI](http://www.intra2net.com/en/developer/libftdi/) está disponível. Ele funciona em Windows, GNU/Linux e Mac OS. É executado em modo usuário no GNU/Linux. Portanto, não há necessidade de remover o driver existente do FT232RL.

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB** libFTDI requer libusb, que pode ser baixado em

[http://www.libusb.org/](http://www.libusb.org/)

O código de exemplo abaixo pode ser compilado de maneira semelhante à dos arquivos de exemplo do libFTDI. Uma forma fácil é copiar o conteúdo do código abaixo para um dos arquivos .c de exemplo existentes e compilar todo o driver usando

./configure

make

 **Exemplo de Código**

```
/*
Blinky.C&nbsp;: UartSBee v3.1 (FT232RL) Bit-Bang mode - Blinky.

Circuit:
Connect DTR to Anode of LED, Connect one end of resistor to GND and other end
to Cathode of the LED
*/

#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// 8 bit pin mask for I/O pin
#define TXD 0x01
#define RXD 0x02
#define RTS 0x04
#define CTS 0x08
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include <stdio.h>
#include <ftdi.h>

int main()
{
    unsigned char ouputState = 0;
    struct ftdi_context ftdic;

    /* 1. Initialize ftdi device context */
    ftdi_init(&ftdic);

    /* 2. Open the device based of VID/PID pair */

    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) < 0)
    {
        printf("Unable to UartSBee v3.1");
        return 1;
    }

    /* 3. Enable Bit-Bang mode with for DTR line  */
    ftdi_set_bitmode(&ftdic, DTR, BITMODE_BITBANG);

    /* 4. Blink LED every 1 second */
    while(1) {
        ouputState ^= DTR;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

O modo Bit-Bang do FT232RL pode ser usado para construir portas AVR ISP, JTAG, SPI e I2C. Consulte os links externos.

**Ideia de Conexão AVR-ISP**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_ISP_Connection_BitBang.jpg)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

[Arquivos de Esquemático e Placa](https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip);

## Links Externos

- [Página do produto FTDI FT232RL](https://www.ftdichip.com/Products/ICs/FT232R.htm)

- [Drivers FTDI Virtual COM Port (VCP)](https://www.ftdichip.com/Drivers/VCP.htm)
- [Drivers FTDI D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)

- [Nota de aplicação do modo FTDI Bit-Bang](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Drivers Open Source**

- [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

- [libUSB](http://www.libusb.org/)

**Outras fontes de informação sobre aplicações do FT232RL**

- [Hackaday - Introdução ao modo bit-bang](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

- [Implementação de JTAG com FT232R usando OpenOCD](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

- [Exemplo de modo SPI Bitbang com FT232R](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

- [Gravando Arduino com modo bitbang do FT232R](http://www.geocities.co.jp/arduino_diecimila/bootloader/index_en.html)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
