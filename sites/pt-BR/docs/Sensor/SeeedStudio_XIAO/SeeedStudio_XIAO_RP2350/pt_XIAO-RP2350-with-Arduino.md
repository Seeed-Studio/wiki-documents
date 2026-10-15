---
description: Usando Arduino na sua placa XIAO RP2350
title: Introdução ao Seeed Studio XIAO RP2350 (Arduino)
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 05/27/2026
  author: Carla
createdAt: '2024-10-30'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/xiao_rp2350_arduino/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 com Arduino

A placa Seeed Studio XIAO RP2350 agora oferece suporte à programação via Arduino, graças ao [arduino-pico core](https://github.com/earlephilhower/arduino-pico). Este guia ajudará você a configurar e começar a usar o Arduino na sua placa RP2350.

## Recursos

- **Placa MCU poderosa:** Equipada com um chip Raspberry Pi RP2350 com dois núcleos Arm Cortex-M33 simétricos @ 150MHz com FPU.
- **Recursos de segurança aprimorados:** Secure boot integrado e bootloader criptografado garantem a segurança da aplicação.
- **Suporte de software:** Compatível com C/C++ e MicroPython, garantindo desenvolvimento e prototipagem de projetos com facilidade.
- **Ricos recursos onboard:** Integra um LED RGB, 2MB de Flash, 520kB de SRAM e 19 GPIOs multifunção (Analógico, Digital, I²C, UART, SPI, PWM).
- **8 novos IOs expandidos:** Em comparação com os MCUs XIAO anteriores, a adição de 8 pinos IO na parte traseira suporta aplicações mais complexas.
- **Projeto de energia eficiente:** Consumo de energia ultrabaixo de apenas 50μA em modo de suspensão, permitindo alimentação por bateria. A medição direta da tensão da bateria via IO interno aprimora o sistema de gerenciamento de bateria (BMS).
- **Design compacto do tamanho de um polegar:** Medindo 21 x 17,8 mm, adotando o formato clássico XIAO da Seeed Studio, ideal para aplicações com restrição de espaço.
- **Amigável à produção:** Design SMD (Surface Mount Device) com todos os componentes na frente e furos de solda em ambos os lados, facilitando a produção em massa eficiente.

## Especificações

<table>
  <tr>
    <th>Product</th>
    <td>XIAO RP2040</td>
    <td>XIAO RP2350</td>
  </tr>
  <tr>
    <th>Processor</th>
    <td>Raspberry Pi RP2040<br/>Dual Cortex-M0+ @ 133MHz</td>
    <td>Raspberry Pi RP2350<br/>Dual Cortex-M33 @ 150MHz, FPU</td>
  </tr>
  <tr>
    <th>RAM</th>
    <td>264kB SRAM</td>
    <td>520kB SRAM</td>
  </tr>
  <tr>
    <th>Flash</th>
    <td>2MB Onboard</td>
    <td>2MB Flash</td>
  </tr>
  <tr>
    <th>LEDs</th>
    <td>1x user LED<br/>1x power LED<br/>1x RGB LED</td>
    <td>1x user LED<br/>1x power LED<br/>1x RGB LED</td>
  </tr>
  <tr>
    <th>Interface</th>
    <td>11 Pins (All PWM):<br/>4x Analog<br/>11x Digital<br/>1x I²C<br/>1x UART<br/>1x SPI</td>
    <td>19 Pins (All PWM):<br/>3x Analog<br/>19x Digital<br/>2x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>Button</th>
    <td>1x RESET button<br/>1x BOOT button</td>
    <td>1x RESET button<br/>1x BOOT button</td>
  </tr>
  <tr>
    <th>Security</th>
    <td>-</td>
    <td>OTP, Secure Boot, Arm TrustZone</td>
  </tr>
  <tr>
    <th>Software compatibility</th>
    <td>Support Micropython / Arduino / CircuitPython</td>
    <td>Support Micropython / Arduino / C,C++</td>
  </tr>
  <tr>
    <th>Working Temperature</th>
    <td>-20°C-70°C</td>
    <td>-20°C-70°C</td>
  </tr>
  <tr>
    <th>Dimensões</th>
    <td>21x17,8 mm</td>
    <td>21x17,8 mm</td>
  </tr>
</table>

## Visão geral do hardware

### Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO_RP2350_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO_RP2350_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

Precisa de mais detalhes sobre o pinout? Navegue até [Assets and Resources](#assets--resources) abaixo.


## **Mapa de pinos**
| Pino XIAO               | Função    | Pino do chip | Funções alternativas | Descrição                             |
| :---------------------: | :-------: | :----------: | :------------------: | :----------------------------------- |
| 5V                      | VBUS       |              |                    | Entrada/Saída de energia             |
| GND                     |            |              |                    |                                      |
| 3V3                     | 3V3_OUT    |              |                    | Saída de energia                     |
| D0                      | Analógico  | GPIO26       |                    | GPIO, ADC                            |
| D1                      | Analógico  | GPIO27       |                    | GPIO, ADC                            |
| D2                      | Analógico  | GPIO28       |                    | GPIO, ADC                            |
| D3                      | SPI0_CSn   | GPIO5        |                    | GPIO, SPI                            |
| D4                      | SDA1       | GPIO6        |                    | GPIO, dados I2C                      |
| D5                      | SCL1       | GPIO7        |                    | GPIO, clock I2C                      |
| D6                      | TX0        | GPIO0        |                    | GPIO, transmissão UART               |
| D7                      | RX0        | GPIO1        |                    | GPIO, recepção UART                  |
| D8                      | SPI0_SCK   | GPIO2        |                    | GPIO, clock SPI                      |
| D9                      | SPI0_MISO  | GPIO4        |                    | GPIO, dados SPI                      |
| D10                     | SPI0_MOSI  | GPIO3        |                    | GPIO, dados SPI                      |
| D11                     | RX1        | GPIO21       |                    | GPIO, recepção UART                  |
| D12                     | TX1        | GPIO20       |                    | GPIO, transmissão UART               |
| D13                     | SCL0       | GPIO17       |                    | GPIO, clock I2C                      |
| D14                     | SDA0       | GPIO16       |                    | GPIO, dados I2C                      |
| D15                     | SPI1_MOSI  | GPIO11       |                    | GPIO, dados SPI                      |
| D16                     | SPI1_MISO  | GPIO12       |                    | GPIO, dados SPI                      |
| D17                     | SPI1_SCK   | GPIO10       |                    | GPIO, clock SPI                      |
| D18                     | SPI1_Csn   | GPIO9        | Csn                |                                      |
| ADC_BAT                 |            | GPIO29       |                    | Ler o valor de tensão da bateria     |
| ADC_BAT_EN              |            | GPIO19       |                    | Habilitar detecção de tensão da BAT  | 
| Reset                   |            | RUN          |                    | RUN                                  |
| Boot                    |            | RP2040_BOOT  |                    | Entrar no modo Boot                  |
| CHARGE_LED              |            | NCHG         |                    | CHG-LED_Vermelho                     |
| RGB LED                 |            | GPIO22       |                    | LED RGB                              |
| USER_LED                |            | GPIO25       |                    | Luz do usuário_Amarela               |
## Pré-requisitos

Para começar, certifique-se de ter:

- Uma placa RP2350
- A IDE Arduino
- Um cabo USB

## Configurando o software

### 1. Instale a IDE Arduino

Baixe e instale a versão mais recente da IDE Arduino no site oficial: [Arduino Software](https://www.arduino.cc/en/software).

### 2. Adicione o suporte à placa RP2350

1. Abra a IDE Arduino e navegue até **File** > **Preferences**.
2. No campo **Additional Boards Manager URLs**, adicione esta URL:

    ```shell
    https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json
    ```

    <div style={{ textAlign: 'center' }}>
    <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-url.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
    </div>

3. Clique em **OK** para salvar suas configurações.
4. Vá em **Tools** > **Board** > **Boards Manager**.
5. No Boards Manager, pesquise por **pico** e clique em **Install**.
6. Após a instalação, vá em **Tools** > **Board** e selecione a placa mostrada abaixo como sua placa.

:::note
Certifique-se de instalar a versão 4.2.0 ou posterior para suporte completo à placa XIAO RP2350.
:::

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-board-option.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

### 3. Enviando um sketch

Antes de enviar um sketch, coloque seu XIAO RP2350 em modo BOOT. Use um dos métodos abaixo:

<Tabs>
<TabItem value="method1" label="Método 1: Antes de conectar ao computador" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Segure Boot-> Conecte o cabo-> Solte Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="Método 2: Enquanto conectado ao computador">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Segure Boot-> Clique em Reset-> Solte Boot</em></div></div>

</TabItem>
</Tabs>

1. Abra a IDE Arduino e crie um novo sketch.
2. Escreva seu código. Por exemplo, use o código de exemplo `Blink`.
3. Vá em **Tools** > **Port** e selecione a porta em que seu RP2350 está conectado.

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## Verificação de desempenho em baixo consumo

O projeto de alimentação do XIAO RP2350 oferece excelente desempenho em cenários de baixo consumo e pode ser amplamente aplicado a diversas aplicações de baixo consumo.

### Conexão da bateria

O XIAO RP2350 pode ser alimentado por uma bateria de lítio de 3,7 V. Você pode consultar o diagrama abaixo para a fiação.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_1.png" alt="pir" width="800" height="auto"/></div>

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
:::

### Grave o firmware

Você pode usar nosso firmware pré-escrito para verificação e teste de desempenho.

Baixe o [XIAO RP2350 Low Power Test Firmware](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 ), arraste-o para o sistema de arquivos.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_2.png" alt="pir" width="800" height="auto"/></div>

:::note

Este firmware UF2 é compilado a partir de uma fonte de terceiros. Para o código-fonte do firmware, consulte: [pico-examples/powman/powman_timer](https://github.com/peterharperuk/pico-examples/tree/powman/powman/powman_timer)

Este código-fonte de firmware depende do [pico-sdk](https://github.com/raspberrypi/pico-sdk). Antes de usar, você precisa baixar a cadeia de ferramentas relevante em um ambiente Linux seguindo as etapas do README do pico-sdk.

Observe que, devido às rápidas atualizações do pico-sdk e da cadeia de ferramentas, você pode encontrar conflitos de parâmetros de função e outros erros de compilação (esta biblioteca de exemplo não é mantida como uma biblioteca oficial da Raspberry Pi, e pode haver diferenças de versão e de ambiente). Se você só precisa verificar a capacidade de baixo consumo de energia do XIAO RP2350, é recomendável usar diretamente o firmware UF2 para um teste rápido e conveniente.

:::

### Resultado

Após testes e verificações com instrumentos, a corrente média do XIAO RP2350 é de **53 μA** ao entrar no modo de baixo consumo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_4.jpg" alt="pir" width="800" height="auto"/></div>
<br/>

:::tip

1. A corrente média em modo de baixo consumo medida por diferentes instrumentos pode variar. Consulte os resultados reais do teste.
2. Este resultado de teste é obtido após gravar o firmware de teste de baixo consumo.
3. Para testes de consumo de energia, a fiação de teste deve ser conectada à interface BAT no lado traseiro.
4. Como o Arduino IDE tem dificuldade em integrar a biblioteca pico-extras (que contém pico/sleep.h necessário para deep sleep), recomenda-se usar o Pico SDK ou o framework PlatformIO + arduino-pico para desenvolvimento de ultra baixo consumo.

:::

## Ativos e recursos

**Projeto de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2350 Datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf )
- **📄[Esquemático]** [XIAO RP2350 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf )
- **🗃️[Arquivos de projeto de PCB]** [XIAO RP2350 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip )
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]** [XIAO RP2350 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx )

**Projeto mecânico**
- **📄[Dimensões 2D]** [XIAO RP2350 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf )
- **🔗[Modelo 3D]** [XIAO RP2350 3D Model](https://grabcad.com/library/seeed-studio-xiao-rp2350-2 )

**Software e ferramentas**
- **📄[Firmware de teste]** [XIAO RP2350 Low Power Test Firmware](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )

**Outros**
- **📄[Documento]** [Getting Started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf )  
  - Um guia abrangente para configurar e programar placas Raspberry Pi Pico, ideal para iniciantes que desejam aprender MicroPython ou C/C++.
- **📄[Documento]** [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf )  
  - O livro que documenta os tutoriais de configuração do MicroPython e as APIs
- **📄[Documento]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf )  
  - O livro que documenta as APIs do Pico C/C++ SDK
 - **📄[arduino-pico GitHub]**(https://github.com/earlephilhower/arduino-pico)
- **📄[Documentação do Arduino-Pico Core]**(https://arduino-pico.readthedocs.io/en/latest/install.html)

## Suporte e discussão

Obrigado por usar produtos Seeed! Oferecemos vários canais para suporte e discussão com a comunidade:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
