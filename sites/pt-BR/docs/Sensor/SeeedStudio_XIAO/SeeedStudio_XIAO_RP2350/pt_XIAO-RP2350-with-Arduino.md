---
description: Usando Arduino na sua placa XIAO RP2350
title: Introdução ao Seeed Studio XIAO RP2350 (Arduino)
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550_XIAO_RP2350-45font_1.webp
slug: /xiao_rp2350_arduino
sidebar_position: 1
last_update:
  date: 2024-10-30T01:39:16.136Z
  author: Spencer
createdAt: '2024-10-30'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/pt-br/xiao_rp2350_arduino/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 com Arduino

A placa Seeed Studio XIAO RP2350 agora oferece suporte à programação via Arduino, graças ao [arduino-pico core](https://github.com/earlephilhower/arduino-pico). Este guia ajudará você a configurar e começar a usar o Arduino na sua placa RP2350.

## Recursos

- **Placa MCU poderosa:** Equipada com um chip Raspberry Pi RP2350 com dois núcleos Arm Cortex-M33 simétricos @ 150MHz com FPU.
- **Recursos de segurança aprimorados:** Boot seguro integrado e bootloader criptografado garantem a segurança da aplicação.
- **Suporte de software:** Compatível com C/C++ e MicroPython, garantindo desenvolvimento e prototipagem de projetos com facilidade.
- **Ricos recursos onboard:** Integra um LED RGB, 2MB de Flash, 520kB de SRAM e 19 GPIOs multifunção (Analógico, Digital, I²C, UART, SPI, PWM).
- **8 novos IOs expandidos:** Em comparação com os MCUs XIAO anteriores, a adição de 8 pinos IO na parte traseira suporta aplicações mais complexas.
- **Projeto de energia eficiente:** Consumo ultrabaixo de apenas 50μA em modo de suspensão, permitindo alimentação por bateria. A medição direta da tensão da bateria via IO interno aprimora o sistema de gerenciamento de bateria (BMS).
- **Design compacto do tamanho de um polegar:** Medindo 21 x 17,8 mm, adotando o formato clássico XIAO da Seeed Studio, ideal para aplicações com restrição de espaço.
- **Amigável à produção:** Design SMD (Surface Mount Device) com todos os componentes na frente e furos em forma de selo em ambos os lados, facilitando a produção em massa eficiente.

## Especificações

<table>
  <tr>
    <th>Produto</th>
    <td>XIAO RP2040</td>
    <td>XIAO RP2350</td>
  </tr>
  <tr>
    <th>Processador</th>
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
    <td>1x LED de usuário<br/>1x LED de alimentação<br/>1x LED RGB</td>
    <td>1x LED de usuário<br/>1x LED de alimentação<br/>1x LED RGB</td>
  </tr>
  <tr>
    <th>Interface</th>
    <td>11 pinos (todos PWM):<br/>4x Analógico<br/>11x Digital<br/>1x I²C<br/>1x UART<br/>1x SPI</td>
    <td>19 pinos (todos PWM):<br/>3x Analógico<br/>19x Digital<br/>2x I²C<br/>2x UART<br/>2x SPI</td>
  </tr>
  <tr>
    <th>Botão</th>
    <td>1x botão RESET<br/>1x botão BOOT</td>
    <td>1x botão RESET<br/>1x botão BOOT</td>
  </tr>
  <tr>
    <th>Segurança</th>
    <td>-</td>
    <td>OTP, Secure Boot, Arm TrustZone</td>
  </tr>
  <tr>
    <th>Compatibilidade de software</th>
    <td>Suporta Micropython / Arduino / CircuitPython</td>
    <td>Suporta Micropython / Arduino / C,C++</td>
  </tr>
  <tr>
    <th>Temperatura de trabalho</th>
    <td>-20°C-70°C</td>
    <td>-20°C-70°C</td>
  </tr>
  <tr>
    <th>Dimensões</th>
    <td>21x17.8 mm</td>
    <td>21x17.8 mm</td>
  </tr>
</table>

## Visão geral do hardware

<div class="table-center">
<table align="center">
 <tr>
     <th>Pinagem frontal do XIAO RP2350</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>Pinagem traseira do XIAO RP2350</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>Componentes do XIAO RP2350</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

Precisa de mais detalhes sobre a pinagem? Navegue até [Assets and Resources](#assets--resources) abaixo.


## **Mapa de pinos**
| Pino XIAO               | Função    | Pino do chip | Funções alternativas | Descrição                            |
| :---------------------: | :-------: | :----------: | :------------------: | :---------------------------------- |
| 5V                      | VBUS       |              |                    | Entrada/Saída de energia             |
| GND                     |            |              |                    |                                      |
| 3V3                     | 3V3_OUT    |              |                    | Saída de energia                     |
| D0                      | Analógico  | GPIO26       |                    | GPIO, ADC                            |
| D1                      | Analógico  | GPIO27       |                    | GPIO, ADC                            |
| D2                      | Analógico  | GPIO28       |                    | GPIO, ADC                            |
| D3                      | SPIO_CSn   | GPIO5        |                    | GPIO, SPI                            |
| D4                      | SDA1       | GPIO6        |                    | GPIO, dados I2C                      |
| D5                      | SCL1       | GPIO7        |                    | GPIO, clock I2C                      |
| D6                      | TX0        | GPIO0        |                    | GPIO, transmissão UART               |
| D7                      | RX0        | GPIO1        |                    | GPIO, recepção UART                  |
| D8                      | SPIO_SCK   | GPIO2        |                    | GPIO, clock SPI                      |
| D9                      | SPIO_MISO  | GPIO4        |                    | GPIO, dados SPI                      |
| D10                     | SPIO_MOSI  | GPIO3        |                    | GPIO, dados SPI                      |
| D11                     | RX1        | GPIO21       |                    | GPIO, recepção UART                  |
| D12                     | TX1        | GPIO20       |                    | GPIO, transmissão UART               |
| D13                     | SCL0       | GPIO17       |                    | GPIO, clock I2C                      |
| D14                     | SDA0       | GPIO16       |                    | GPIO, dados I2C                      |
| D15                     | SPI1_MOSI  | GPIO11       |                    | GPIO, dados SPI                      |
| D16                     | SPI1_MISO  | GPIO12       |                    | GPIO, dados SPI                      |
| D17                     | SPI1_SCK   | GPIO10       |                    | GPIO, clock SPI                      |
| D18                     | SPI1_Csn   | GPIO9        | Csn                |                                      |
| ADC_BAT                 |            | GPIO29       |                    | Ler o valor de tensão da bateria     |
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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Segure Boot -> Conecte o cabo -> Solte Boot</em></div></div>

</TabItem>

<TabItem value="method2" label="Método 2: Enquanto conectado ao computador">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/><div style={{ marginTop: '-8px' }}><em>Segure Boot -> Clique em Reset -> Solte Boot</em></div></div>

</TabItem>
</Tabs>

1. Abra a IDE Arduino e crie um novo sketch.
2. Escreva seu código. Por exemplo, use o código de exemplo `Blink`.
3. Vá em **Tools** > **Port** e selecione a porta onde seu RP2350 está conectado.

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>


## Ativos e recursos


**Design de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2350 Datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf )
- **📄[Esquemático]** [XIAO RP2350 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf )
- **🗃️[Arquivos de design de PCB]** [XIAO RP2350 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip )
- **🗃️[Bibliotecas de design de PCB]** 
  - [Pegadas KiCad da série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]** [XIAO RP2350 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx )

**Design mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO RP2350 em DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf )
- **🔗[Modelo 3D]** [Modelo 3D do XIAO RP2350](https://grabcad.com/library/seeed-studio-xiao-rp2350-2 )

**Software e ferramentas**
- **📄[Firmware de teste]** [Firmware de teste de baixo consumo do XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )

**Outros**
- **📄[Documento]** [Getting Started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf )  
  - Um guia abrangente para configurar e programar placas Raspberry Pi Pico, ideal para iniciantes que desejam aprender MicroPython ou C/C++.
- **📄[Documento]** [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf )  
  - O livro que documenta os tutoriais de configuração do MicroPython e as APIs
- **📄[Documento]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf )  
  - O livro que documenta as APIs do Pico C/C++ SDK
 - **📄[arduino-pico GitHub]**(https://github.com/earlephilhower/arduino-pico)
- **📄[Documentação do núcleo Arduino-Pico]**(https://arduino-pico.readthedocs.io/en/latest/install.html)

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
