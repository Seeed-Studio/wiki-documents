---
description: Introdução ao Seeed Studio XIAO SAMD21 
title: Introdução ao Seeed Studio XIAO SAMD21 Series
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/get_sarted.webp
slug: /Seeeduino-XIAO
sku: 110010004, 102010388, 102010328
last_update:
  date: 6/30/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução ao Seeed Studio XIAO SAMD21 Series

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO SAMD21</th>
   <th>Seeed Studio XIAO SAMD21 Plus</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-plus-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-SAMD21-Plus-p-6933.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Visão geral

O Seeed Studio XIAO SAMD21, que costumava ser chamado de Seeeduino XIAO, é a primeira estreia da [família Seeed Studio XIAO, uma série de poderosas placas de desenvolvimento do tamanho de um polegar compatíveis com Arduino](https://www.seeedstudio.com/xiao-series-page). Ele traz o poderoso ATSAMD21G18A-MU, que é um microcontrolador de baixo consumo de energia. Por outro lado, esta pequena placa tem bom desempenho de processamento, mas consome menos energia. Ela é projetada em um tamanho minúsculo e pode ser usada para dispositivos vestíveis e projetos pequenos.

O Seeed Studio XIAO SAMD21 possui 14 PINs, que podem ser usados como 11 interfaces digitais, 11 interfaces analógicas, 10 interfaces PWM (d1-d10), 1 pino de saída DAC D0, 1 interface de pad SWD, 1 interface I2C, 1 interface SPI, 1 interface UART, indicador de comunicação serial (T/R), LED de piscar (L) por meio de multiplexação de pinos. As cores dos LEDs (Power, L, RX, TX) são verde, amarelo, azul e azul. Além disso, o Seeed Studio XIAO SAMD21 possui uma interface Type-C que pode fornecer energia e fazer o download de código. Há dois botões de reset, você pode curto-circuitá-los para reiniciar a placa.

Alimentado pelo processador ARM Cortex-M0+ de 32 bits SAMD21G18A da Microchip, o XIAO SAMD21 Plus traz flexibilidade e expansibilidade aprimoradas para o pequeno e versátil XIAO SAMD21. Mantendo todos os recursos poderosos, incluindo compatibilidade com Arduino, MicroPython e PlatformIO, a variante Plus apresenta castelações redesenhadas e layout de pads na parte traseira, oferecendo 16 GPIOs adicionais, gerenciamento integrado de bateria de íon de lítio, botões dedicados de Reset e Boot e um LED RGB WS2812 programável onboard. É ideal para projetos avançados de IoT, wearables alimentados por bateria, aplicações embarcadas e designs de SoM prontos para produção.

## Documentações

Existem dois documentos sobre o uso do **Seeed Studio XIAO SAMD21** que se concentram em áreas diferentes, consulte a tabela abaixo para referência:

|[**Documentação da Seeed**](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/)|[**Documentação da Nanase**](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pinagem|Interface|
|Introdução ao Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 com MicroSD Card(SPI)|
|Uso de GPIO do Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 com GPS(UART)|
|Recursos do Seeed Studio XIAO SAMD21|Single Cycle IOBUS|

<!-- ### CircuitPython on Seeed Studio XIAO SAMD21

- Get started with [**CircuitPython on Seeed Studio XIAO SAMD21 **](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-CircuitPython). -->

## Recursos

- MCU poderoso: processador Microchip ATSAMD21G18A Arm® Cortex®-M0+ a 48 MHz, com 256 KB de Flash, 32 KB de SRAM e suporte USB nativo.
- I/O expandido: o XIAO SAMD21 Plus mantém o layout padrão de 14 pinos do XIAO e adiciona 16 GPIOs por meio de castelações SMD traseiras de 1,27 mm, com suporte a PWM, DAC, I2C, UART, SPI, I2S e SWD.
- Gerenciamento de energia integrado: suporta conexão direta de bateria de íon de lítio, carregamento onboard, proteção contra retorno de corrente e indicação de status de carga.
- Desenvolvimento flexível: compatível com Arduino IDE, PlatformIO, CircuitPython e TinyGo.
- Compacto e pronto para o ecossistema: mantém o fator de forma XIAO de 21 × 17,8 mm compatível com breadboard, enquanto adota o layout padronizado da parte traseira do XIAO Plus para placas de expansão e designs de carriers personalizados.

## Especificação

<!-- | Product Name | Seeed Studio XIAO SAMD21 |
|-------------|-------------------------|
| **Chipset** | [Microchip SAMD21G18](https://www.microchip.com/en-us/product/atsamd21g18 ) |
| **Processor** | ARM Cortex-M0+ processor running at up to 48 MHz |
| **RAM** | 32KB SRAM |
| **Flash** | 256KB Flash |
| **Interface** | GPIO Pin x14<br/>Digital Pin x11<br/>Analog Pin x11<br/>DAC x1<br/>I2C x1<br/>UART x1<br/>SPI x1 |
| **Onboard** | User LED x1<br/>Power LED x1<br/>Status LEDs for Serial Communication (TX/RX Indicators) x2 |
| **Wireless Connectivity** | / |
| **Power** | Input voltage (Type-C): 5V<br/>Input voltage (BAT): 5V |
| **Max Output** | 5V@500mA<br/>3.3V@200mA |
| **Software Compatibility** | Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr<br/>[Exhibition for XIAO Series - Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/xiao_topic_page/ ) |
| **Working Temperature** | -40 to 85°C |
| **Dimensions** | 21×17.8mm |
| **Variants** | [Seeed Studio XIAO SAMD21 (Pre-Soldered) - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html  )<br/>[Seeed Studio XIAO SAMD21 - Arduino Microcontroller - SAMD21 Cortex M0+ (3 PCs） - Seeed Studio](https://www.seeedstudio.com/Seeeduino-XIAO-3Pcs-p-4546.html  ) | -->

<table>
  <tbody>
    <tr>
      <th>Product Name</th>
      <td>Seeed Studio XIAO SAMD21</td>
      <td>Seeed Studio XIAO SAMD21 Plus</td>
    </tr>
    <tr>
      <th>Chipset</th>
      <td colspan="2">
        <a href="https://www.microchip.com/en-us/product/atsamd21g18">
          Microchip SAMD21G18
        </a>
      </td>
    </tr>
    <tr>
      <th>Processor</th>
      <td colspan="2">Processador Arm® Cortex®-M0+ rodando a até 48 MHz</td>
    </tr>
    <tr>
      <th>RAM</th>
      <td colspan="2">32 KB SRAM</td>
    </tr>
    <tr>
      <th>Flash</th>
      <td colspan="2">256 KB Flash</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>
        Pino GPIO ×14<br />
        Pino digital ×11<br />
        Pino analógico ×11<br />
        DAC ×1<br />
        I2C ×1<br />
        UART ×1<br />
        SPI ×1
      </td>
      <td>
        Pino GPIO ×30<br />
        Pino digital ×27<br />
        Pino analógico ×11<br />
        DAC ×1<br />
        I2C ×2<br />
        UART ×1<br />
        SPI ×1<br />
        I2S ×1
      </td>
    </tr>
    <tr>
      <th>Onboard</th>
      <td>
        LED de usuário ×1<br />
        LED de alimentação ×1<br />
        LED de status TX/RX ×2
      </td>
      <td>
        LED de usuário ×1<br />
        Botão de reset ×1<br />
        Botão de boot ×1
      </td>
    </tr>
    <tr>
      <th>Battery Management</th>
      <td>Nenhum</td>
      <td>PMIC onboard</td>
    </tr>
    <tr>
      <th>Power</th>
      <td>
        Tensão de entrada (Type-C): 5 V<br />
        Entrada BAT: Não suportado
      </td>
      <td>
        Tensão de entrada (Type-C): 5 V<br />
        Entrada BAT: bateria de íon de lítio/LiPo de célula única de 3,7 V
      </td>
    </tr>
    <tr>
      <th>BAT-to-3V3 Backflow Protection</th>
      <td>Não</td>
      <td>Sim</td>
    </tr>
    <tr>
      <th>Working Temperature</th>
      <td colspan="2">-40°C a 85°C</td>
    </tr>
    <tr>
      <th>Dimensions</th>
      <td colspan="2">21 × 17,8 mm</td>
    </tr>
    <tr>
      <th>Software Compatibility</th>
      <td colspan="2">
        Arduino, PlatformIO, MicroPython, CircuitPython, Zephyr e mais
      </td>
    </tr>
  </tbody>
</table>

## **Visão geral de hardware**

<Tabs>
<TabItem value="XIAO SAMD21" label="XIAO SAMD21" default>

### Frente do XIAO SAMD21

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso do XIAO SAMD21

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_SAMD21_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO SAMD21 Plus" label="XIAO SAMD21 Plus">

### Frente do XIAO SAMD21 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### Verso do XIAO SAMD21 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-SAMD21-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
Para pinos de I/O gerais:
A tensão de operação do MCU é 3,3 V. A tensão de entrada conectada aos pinos de I/O gerais pode causar danos ao chip se for maior que 3,3 V.

Para pinos de alimentação:
O circuito conversor DC-DC integrado capaz de transformar 5 V em 3,3 V permite alimentar o dispositivo com uma fonte de 5 V via VIN-PIN e 5V-PIN.

É fundamental entender que os pads VIN e GND na parte de trás do XIAO SAMD21 não foram projetados para conectar diretamente uma bateria, especialmente uma bateria recarregável de lítio (LiPo/Li-Ion). A placa não possui o circuito essencial de gerenciamento de bateria necessário para uma operação segura. Esses pads são simplesmente um ponto alternativo de entrada de energia que ignora o diodo de proteção integrado da placa. Se você quiser alimentar seu projeto com uma bateria, deve usar um módulo externo dedicado de gerenciamento de bateria que forneça carregamento e proteção e, em seguida, conectar a saída regulada desse módulo ao pino de 5 V do XIAO.

Por favor, preste atenção ao uso, não levante a tampa de proteção.
:::

## Mapa de pinos

<!-- | XIAO Pin        | Function      | Chip Pin  |   Description      |
| :-------:      | :-----:        | :----------:         |       :---:     |
|5V              |VBUS             |                                      | Power Input/Output     |
| GND           |                 |                                      |                          |
| 3V3           |   3V3_OUT              |                                |    Power Output           |
|D0             |  Analog         |   PA02                                |     GPIO, ADC            |
| D1            |   Analog        |   PA04                                |        GPIO, ADC         |
| D2            |     Analog      | PA10                                  |    GPIO, ADC             |
| D3            |    Analog       |  PA11                                 |     GPIO, ADC            |
| D4            |  Analog,SDA   	| PA08		                              | GPIO, I2C Data, ADC        |
| D5            |  Analog,SCL     |	PA09	                                |	GPIO, I2C Clock, ADC       |
| D6            | Analog,TX       |  	PB08	                               |	GPIO, UART Transmit, ADC |  
| D7            |Analog,RX	      |  PB09	                                |   	GPIO, UART Receive, ADC |
|D8             | Analog,SPI_SCK  | 	PA07	                              |	GPIO, SPI Clock, ADC   |
|D9             | Analog,SPI_MISO |  	PA05                                |		GPIO, SPI Data, ADC  |
|D10            | Analog,SPI_MOSI |  PA06	                                | 	GPIO, SPI Data         |
|Reset          |                 |  RES	                                |	RESET                  |
|TX_LED         |                 |   PA19	                              |	TX_LED                 |
|RX_LED         |                 | PA18	                                |	RX_LED                 |
|Power_LED     |          |        VBUS	                                |       	CHG-LED_Red      |
|USER_LED       |                 |   PA17	                              |	User Light_Yellow      | -->

| XIAO Pin    | Function           | XIAO SAMD21   | XIAO SAMD21 Plus | Description                                                |
| :---------- | :----------------- | :------------ | :---------------- | :--------------------------------------------------------- |
| 5V          | VBUS               | VBUS          | VBUS              | Entrada/saída de alimentação USB 5 V                       |
| GND         | GND                | GND           | GND               | Terra                                                      |
| 3V3         | 3V3_OUT            | 3V3_OUT       | 3V3_OUT           | Saída de alimentação de 3,3 V                              |
| D0          | A0 / DAC           | PA02          | PA02              | GPIO, ADC AIN0, saída DAC; sem PWM por hardware            |
| D1          | A1                 | PA04          | PA04              | GPIO, ADC AIN4                                             |
| D2          | A2                 | PA10          | PA10              | GPIO, ADC AIN18                                            |
| D3          | A3                 | PA11          | PA11              | GPIO, ADC AIN19                                            |
| D4          | SDA0               | PA08          | PA08              | GPIO, ADC AIN16, dados I2C                                 |
| D5          | SCL0               | PA09          | PA09              | GPIO, ADC AIN17, clock I2C                                 |
| D6          | TX                 | PB08          | PB08              | GPIO, ADC AIN2, transmissão UART                           |
| D7          | RX                 | PB09          | PB09              | GPIO, ADC AIN3, recepção UART                              |
| D8          | SCK                | PA07          | PA07              | GPIO, ADC AIN7, clock SPI                                  |
| D9          | MISO               | PA05          | PA05              | GPIO, ADC AIN5, entrada de dados SPI                       |
| D10         | MOSI               | PA06          | PA06              | GPIO, ADC AIN6, saída de dados SPI                         |
| D11         | TX_LED             | PA19          | -                 | LED TX interno no XIAO SAMD21; não definido no Plus        |
| D12         | GPIO               | PA18 (RX_LED) | PA28              | GPIO de expansão do Plus                                   |
| D13         | SCL1               | PA17 (USER_LED) | PA17            | GPIO de expansão do Plus e clock I2C1                      |
| D14         | SDA1               | -             | PA16              | GPIO de expansão do Plus e dados I2C1                      |
| D15         | GPIO               | -             | PA15              | GPIO de expansão do Plus                                   |
| D16         | GPIO               | -             | PA14              | GPIO de expansão do Plus                                   |
| D17         | GPIO               | -             | PA13              | GPIO de expansão do Plus                                   |
| D18         | GPIO               | -             | PA12              | GPIO de expansão do Plus                                   |
| D19         | I2S_SD             | -             | PA19              | GPIO de expansão do Plus e dados I2S                       |
| D20         | I2S_SCK            | -             | PA20              | GPIO de expansão do Plus e clock I2S                       |
| D21         | I2S_WS             | -             | PA21              | GPIO de expansão do Plus e seleção de palavra I2S          |
| D22         | GPIO               | -             | PB10              | GPIO de expansão do Plus                                   |
| D23         | GPIO               | -             | PB11              | GPIO de expansão do Plus                                   |
| D24         | GPIO               | -             | PB23              | GPIO de expansão do Plus                                   |
| D25         | GPIO               | -             | PA23              | GPIO de expansão do Plus                                   |
| D26         | GPIO               | -             | PB2               | GPIO de expansão do Plus                                   |
| D27         | GPIO               | -             | PA18              | GPIO de expansão do Plus                                   |
| VBAT_EN     | Battery Enable     | -             | PB2               | Controle de alimentação da bateria no Plus                 |
| AIN11_VBAT  | Voltage Read       | -             | PB3               | Leitura da tensão da bateria no Plus                       |
| Reset       | RESETN             | RESETN        | RESETN            | Entrada de reset ativa em nível baixo, pino 40 do encapsulamento |
| TX_LED      | LED                | PA19          | -                 | Indicador TX da placa original, ativo em nível baixo       |
| RX_LED      | LED                | PA18          | -                 | Indicador RX da placa original, ativo em nível baixo       |
| USER_LED    | LED                | PA17          | -                 | LED de usuário da placa original, ativo em nível baixo     |
| POWER_LED   | Power indicator    | 3V3           | -                 | LED verde de alimentação da placa original; não é um GPIO do MCU |
| RGB_LED     | WS2812B data       | -             | PA27              | Dados do LED RGB endereçável do Plus                       |
| USER_BUTTON | Button             | -             | PB22              | Botão de usuário do Plus, ativo em nível baixo             |
| VBAT_EN     | Battery ADC enable | -             | PB02              | Habilita a medição da tensão da bateria                    |
| AIN11_VBAT  | Battery ADC        | -             | PB03 / AIN11      | Tensão da bateria através de um divisor de 1/2             |
| CHARGE_LED  | Charging indicator | -             | -                 | LED de carregamento controlado por hardware no Plus; não é um GPIO do MCU |
| SWDIO       | SWD debug          | PA31          | PA31              | Dados Serial Wire Debug                                    |
| SWCLK       | SWD debug          | PA30          | PA30              | Clock Serial Wire Debug                                    |

## Entrar no modo Bootloader

### Para XIAO SAMD21

Às vezes, a porta do Seeed Studio XIAO SAMD21 pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

- Conecte o Seeed Studio XIAO SAMD21 ao seu computador.
- Use uma pinça ou fios curtos para curto-circuitar os pinos RST no diagrama duas vezes.
- Os LEDs laranja piscam e acendem.

Neste ponto, o chip entra no modo Bootloader e a porta de gravação aparece novamente. Como o chip samd21 possui duas partições, uma é o Bootloader e a outra é o programa do usuário. O produto grava um código de bootloader na memória do sistema quando sai de fábrica. Podemos alternar os modos executando as etapas acima.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### Para XIAO SAMD21 Plus

Conecte o XIAO SAMD21 Plus ao seu computador. Pressione o botão Reset duas vezes consecutivas para entrar no modo Bootloader.

### Reset

Se você quiser resetar o Seeed Studio XIAO SAMD21, execute as seguintes etapas:

- Conecte o Seeed Studio XIAO SAMD21 ao seu computador.
- Use uma pinça ou fios curtos para curto-circuitar os pinos RST **apenas uma vez**
- Os LEDs laranja piscam e acendem.

Observe: O comportamento do LED embutido é o inverso daquele em um Arduino. No Seeed Studio XIAO SAMD21, o pino precisa ser puxado para nível baixo, enquanto em outros microcontroladores ele precisa ser puxado para nível alto.  

### Interrupção

Todos os pinos no Seeed Studio XIAO SAMD21 suportam interrupções, mas dois pinos não podem ser usados ao mesmo tempo: pino 5 e pino 7. Para mais detalhes sobre interrupção, verifique [aqui](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp).

## Introdução

### Hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO SAMD21</th>
   <th>Seeed Studio XIAO SAMD21 Plus</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/xiao-samd21-plus-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-SAMD21-Plus-p-6933.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Materiais necessários**

- Seeed Studio XIAO SAMD21 x1
- Computador x1
- Cabo USB Type-C x1

:::tip

Alguns cabos USB podem apenas fornecer energia e não conseguem transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- Passo 1. Prepare um Seeed Studio XIAO SAMD21 e um cabo Type-C.

- Passo 2. Conecte o Seeed Studio XIAO SAMD21 ao seu computador. Então o LED de alimentação amarelo deve acender.

### Software

:::note

Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino)
:::

- **Passo 1. Você precisa instalar o software Arduino.**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Inicie o aplicativo Arduino**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note

Se o software Arduino carregar em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::

- **Passo 2. Abra o exemplo Blink**  

Abra o sketch de exemplo de piscar LED: **File > Examples >01.Basics > Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3. Adicione o Seeeduino ao seu Arduino IDE**

Clique em **File > Preference**, e preencha Additional Boards Manager URLs com a URL abaixo:

```url
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

Clique em **Tools-> Board-> Boards Manager...**, digite a palavra‑chave "**Seeed Studio XIAO SAMD21**" no campo de busca. Aparecerá **Seeed SAMD Boards**. Instale-o.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

#### XIAO SAMD21 Blink

- **Passo 4. Selecione sua placa e porta**

Depois de instalar a placa, clique em **Tools-> Board**, encontre **Seeed Studio XIAO** e selecione-a. Agora você já configurou a placa Seeed Studio XIAO SAMD21 para o Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5. Envie o programa**  

Agora, simplesmente clique no botão **Upload** no ambiente. Aguarde alguns segundos e, se o envio for bem‑sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 Alguns segundos após o término do envio, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino para funcionar. Se tiver problemas, consulte as sugestões de solução de problemas.

:::note
The maximum flash size is 8 KB. For more information, refer to the ATSAMD21G18A-MU datasheet in the resources section.
:::

#### XIAO SAMD21 Plus Blink

No XIAO SAMD21 Plus, o pino L (LED) foi removido. Ele foi substituído pelo RGB_LED, que é controlado via pino PA27.

‑ Altere a placa alvo para XIAO M0 Plus.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_1.png" alt="pir" width={800} height="auto" /></p>

- Instale a biblioteca Adafruit_NeoPixel e atualize‑a para a versão mais recente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_2.png" alt="pir" width={800} height="auto" /></p>

‑ Substitua o código pelo trecho abaixo. O pino para o RGB_LED é o PA27, que foi redefinido como PIN_LED_RGB.

:::caution

Os LEDs RGB podem causar fadiga ocular ou lesão se operados com brilho excessivo; é recomendado o uso de proteção ocular adequada.

:::

```cpp
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();

  pinMode(NEOPIXEL_POWER, OUTPUT);
  digitalWrite(NEOPIXEL_POWER, HIGH);

// Set overall brightness (0~255)
// Recommended eye-friendly range: 10~50
  pixels.setBrightness(50);
}


void loop() {

  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(15, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(103, 25, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 242, 205));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(233, 23, 23));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.setPixelColor(0, pixels.Color(12, 66, 101));
  pixels.show();
  delay(400);


  pixels.clear();
  pixels.show();
  delay(500);
}
```

‑ Clique em Upload para gravar o programa. Quando terminar, o RGB‑LED acenderá.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/gst_3.gif" alt="pir" width={600} height="auto" /></p>

:::note
The maximum flash size is 8 KB. For more information, refer to the ATSAMD21G18A-MU datasheet in the resources section.
:::

## Multiplexação de pinos

Não precisamos configurar os pinos nós mesmos, depois de usar os pinos, você pode chamar uma função diretamente.

### Entrada e saída digital

- Use o pino 6 como pino digital:

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

### AnalogRead

- Use o pino 6 como pino analógico:

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

### Serial

- Use o pino 6 como pino TX da UART (pino RX da UART é o pino 7):

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

### I2C

- Use o pino 5 como pino SCL do IIC (pino SDA do IIC é o pino 4):

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

### SPI

- Use o pino 8 como pino SCK do SPI (pino MISO do SPI é o pino 9, pino MOSI do SPI é o pino 10):

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

### QTouch

Para saber como usar o QTouch, fornecemos um projeto de exemplo: [How to Make a Fruit Piano on Seeed Studio XIAO SAMD21 ’s Q-Touch Function](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

### Entrada e saída analógica

Embora ainda tenha "saídas analógicas" baseadas em PWM, o SAMD21 também possui saída analógica verdadeira na forma de um conversor digital‑para‑analógico (DAC). Este módulo pode produzir uma tensão analógica entre 0 e 3,3 V. Ele pode ser usado para produzir áudio com som mais natural ou como uma espécie de "potenciômetro digital" para controlar dispositivos analógicos.

O DAC está disponível apenas no pino A0 do Arduino e é controlado usando analogWrite(A0, `<value>`). O DAC pode ser configurado com resolução de até 10 bits (certifique‑se de chamar [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) na sua função de configuração), o que significa que valores entre 0 e 1023 definirão a tensão em algum ponto entre 0 e 3,3 V.

Além do DAC, os canais ADC do SAMD21 também se destacam em relação ao ATmega328: eles são equipados com resolução de até 12 bits. Isso significa que os valores de entrada analógica podem variar de 0 a 4095, representando uma tensão entre 0 e 3,3 V. Para usar os ADCs no modo de 12 bits, certifique‑se de chamar [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) na sua função de configuração.

**Plotando o DAC pela porta serial**

Aqui está um exemplo que demonstra tanto o DAC quanto o ADC. Para montar o experimento, conecte A0 a A1 — vamos acionar A0 com uma tensão analógica e depois lê‑la com A1. É o circuito mais simples que já colocamos em um tutorial:

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
O Seeed Studio XIAO SAMD21 usando a [**placa de expansão Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

Este sketch produz uma onda senoidal na saída A0, com valores variando de 0 a 3,3 V. Em seguida, ele usa A1 para ler essa saída em seu ADC e convertê‑la em uma tensão entre 0 e 3,3 V.

Você pode, é claro, abrir o monitor serial para ver o fluxo de valores de tensão. Mas se a onda senoidal for difícil de visualizar em forma de texto, experimente o novo Serial Plotter do Arduino, indo em Tools > Serial Plotter.  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

Agradecemos a [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) por enviar o código; todas as funcionalidades relacionadas foram desenvolvidas e contribuídas por ele.

```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
// Frequency of sine wave is about 1.37 Hz

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**Resultado**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## Uso da bateria

:::note

Apenas o XIAO SAMD21 Plus possui um conector de bateria BAT em sua parte traseira, por favor, observe isso.

:::

O XIAO SAMD21 Plus é capaz de usar uma bateria de lítio de 3,7 V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de fiação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

Tenha cuidado para não causar curto‑circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem. Se a bateria estiver com carga, nunca a solde diretamente na placa, pois isso pode queimar a placa de circuito. Um curto‑circuito enquanto o circuito estiver energizado representa um risco significativo; é recomendável usar um adaptador.

:::

### Exemplo de leitura da tensão da bateria

De acordo com o esquemático, o **SGM40567-4.2XG/TR** fornece carregamento para bateria de íon de lítio de célula única com uma corrente de carga de aproximadamente **200 mA**. O **Charge_LED** pisca durante o carregamento.<br/>

A medição da tensão da bateria é controlada pelo chaveador de carga **TPS22916CNYFPR** através de **PB2/VBAT_EN**, reduzindo o consumo de energia em standby. A tensão da bateria é dividida por dois e medida através do pino ADC **PB3/AIN11_VBAT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read.png" style={{width:800, height:'auto'}}/></div>
<br/>

A tensão da bateria é medida usando um circuito divisor de tensão por resistores. A tensão lida pelo ADC é metade da tensão real da bateria, portanto o software deve multiplicar a medição do ADC por 2 para obter a tensão real da bateria.

No core do Arduino, PB02 e PB03 são mapeados para os números de pino 31 e 32, respectivamente. Defina‑os da seguinte forma:

```cpp
// VBAT_EN on PB02
#define PIN_VBAT_EN  (31u)

// AIN11_VBAT on PB03
#define PIN_VBAT_ADC (32u)
```

<details>

<summary>Exemplo de leitura da bateria</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // R5 = R6 = 10 kΩ

float readBatteryVoltage() {
  digitalWrite(PIN_VBAT_EN, HIGH);
  delay(10);

  analogRead(PIN_VBAT_ADC);  // Discard a stale reading

  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(PIN_VBAT_ADC);
    delay(2);
  }

  digitalWrite(PIN_VBAT_EN, LOW);

  float adcRaw = sum / static_cast<float>(samples);
  float adcVoltage = adcRaw * ADC_VREF / ADC_MAX;

  return adcVoltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(PIN_VBAT_EN, OUTPUT);
  digitalWrite(PIN_VBAT_EN, LOW);

  analogReadResolution(12);  // SAMD21 ADC: 0–4095
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery: ");
  Serial.print(batteryVoltage, 3);
  Serial.println(" V");

  delay(1000);
}
```

</details>
<br/>
:::note

Para aplicações de baixo consumo, desabilite **BAT_EN** após a conclusão da medição da tensão da bateria para reduzir o consumo de corrente de repouso causado pelos resistores do divisor de tensão.

:::

- O **Charge_LED** pisca enquanto a bateria está carregando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_detection.gif" style={{width:400, height:'auto'}}/></div>
<br/>

- Resultado da medição da tensão da bateria: a tensão medida de uma bateria de íon de lítio pode diferir do valor nominal impresso na bateria. Sempre considere o valor realmente medido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/battery_read_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## Aplicativo de exemplo

- [Como usar o Seeed Studio XIAO SAMD21 para fazer login no seu Raspberry PI](https://wiki.seeedstudio.com/pt-br/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [Interface de comunicação SPI](https://wiki.seeedstudio.com/pt-br/XIAO-SPI-Communication-Interface)

- [Como recuperar um XIAO travado usando Raspberry Pi](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). Agradecimentos a John_Doe por compartilhar.

## Recursos

### XIAO SAMD21

**Projeto de hardware**
- **📄[Datasheet]** [Atmel SAMD21G18 Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Schematic]** [Esquemático do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)
- **🗃️[Arquivos de projeto de PCB]** 
  - [Projeto KiCad do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO_SAMD21_v2.1_SCH&PCB_20260304.zip)  
  - [Projeto Eagle do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [Footprints da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Folha de pinagem]** [Folha de pinagem do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx )

**Projeto mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO em DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[Modelo 3D]** [Modelo 3D do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

**Software e ferramentas**
- **📄[Firmware de fábrica]** [Firmware de fábrica do XIAO SAMD21](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip )

### XIAO SAMD21 Plus

**Projeto de hardware**
- **📄[Datasheet]** [Atmel SAMD21G18 Datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)
- **📄[Schematic]** [Esquemático do XIAO SAMD21 Plus](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21Plus_260422.pdf)
- **🗃️[Arquivos de projeto de PCB]** 
  - [Projeto KiCad do XIAO SAMD21 Plus](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/202004620_XIAO-SAMD21-Plus_V1.0_SCH&PCB_20260422.zip)  
  - [Projeto Eagle do XIAO SAMD21 Plus](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [Footprints da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Folha de Pinagem]** [XIAO SAMD21 Plus Pinout Sheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-PLUS-pinout_sheet.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [XIAO Dimension in DXF](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar )
- **📄[Modelo 3D]** [XIAO SAMD21 Plus 3D Model](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos do Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
