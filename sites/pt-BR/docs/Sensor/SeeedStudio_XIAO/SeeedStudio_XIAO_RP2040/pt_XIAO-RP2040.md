---
description: Visão geral
title: Introdução ao Seeed Studio XIAO RP2040
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução ao Seeed Studio XIAO RP2040

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" alt="pir" width={600} height="auto" /></p>

O Seeed Studio XIAO RP2040 é tão pequeno quanto o Seeed Studio XIAO SAMD21, mas é mais poderoso. Por um lado, ele traz o poderoso processador Dual-core RP2040, cujo clock flexível pode operar até 133 MHz, sendo um microcontrolador de baixo consumo de energia. No Seeed Studio XIAO RP2040 há também 264KB de SRAM e 2MB de memória Flash on-board, o que permite armazenar e executar programas maiores. Por outro lado, esta pequena placa tem bom desempenho de processamento, mas necessita de menos energia.  
Em resumo, ele é projetado em um tamanho minúsculo, tão pequeno quanto um polegar (21x17,8 mm), e pode ser usado para dispositivos vestíveis e projetos compactos.

Há 14 pinos GPIO no Seeed Studio XIAO RP2040, dos quais 11 são pinos digitais, 4 pinos analógicos, 11 pinos PWM, 1 interface I2C, 1 interface UART, 1 interface SPI e 1 interface de almofada de ligação SWD.

O Seeed Studio XIAO RP2040 é compatível com a placa de expansão Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## **Recursos**

- MCU poderosa: processador Dual-core ARM Cortex M0+ com clock flexível de até 133 MHz
- Ricos recursos on-chip: 264KB de SRAM e 2MB de memória Flash on-board
- Compatibilidade flexível: Suporta Micropython/Arduino/CircuitPython
- Operação de projeto facilitada: design compatível com protoboard e SMD, sem componentes na parte traseira
- Tamanho reduzido: Tão pequeno quanto um polegar (21x17,8 mm) para dispositivos vestíveis e projetos compactos.
- Múltiplas interfaces: 11 pinos digitais, 4 pinos analógicos, 11 pinos PWM, 1 interface I2C, 1 interface UART, 1 interface SPI, 1 interface de almofada de ligação SWD.

## **Especificações**

| Product Name | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **Chipset** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **Processor** | Processador Dual Cortex M0+ operando a até 133 MHz |
| **RAM** | 264KB SRAM |
| **Flash** | 2MB Flash on-board |
| **Interface** | Pino GPIO x14<br/>Pino digital x11<br/>Pino analógico x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **Onboard** | LED de usuário (3 cores) x1<br/>LED de alimentação x1<br/>LED RGB x1<br/>Botão de reset x1<br/>Botão de boot x1 |
| **Wireless Connectivity** | / |
| **Power** | Tensão de entrada (Type-C): 5V<br/>Tensão de entrada (BAT): 5V |
| **Low Power Mode(Typ.)** | / |
| **Software Compatibility** | Arduino, PlatformIO, MicroPython, CircuitPython, tinyGo, Rust, Zephyr, [Exhibition for XIAO Series \| Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/xiao_topic_page/) |
| **Working Temperature** | -20°C-70°C |
| **Dimensions** | 21x17,8 mm |
| **Varients** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **Visão geral de hardware**

### Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Para pinos de I/O gerais:
A tensão de trabalho do MCU é 3,3 V. Uma tensão de entrada conectada aos pinos de I/O gerais pode causar danos ao chip se for superior a 3,3 V.

Para pinos de alimentação:
O circuito conversor DC-DC integrado, capaz de transformar 5 V em 3,3 V, permite alimentar o dispositivo com uma fonte de 5 V através dos pinos VIN-PIN e 5V-PIN.

O XIAO RP2040 atualmente só suporta alimentação por bateria e não pode ser conectado à porta Type-C enquanto uma bateria estiver conectada, pois isso pode representar um risco de segurança.

Por favor, preste atenção ao usar e não levante a tampa de blindagem.
:::

## **Mapa de pinos**
| XIAO Pin        | Function     | Chip Pin          | Description                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | Entrada/Saída de alimentação         |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | Saída de alimentação                 |
| D0              | Analog      | GPIO26                                   | GPIO, ADC                            |
| D1              | Analog      | GPIO27                                   | GPIO, ADC                            |
| D2              | Analog      | GPIO28                                   | GPIO, ADC                            |
| D3              | Analog      | GPIO29                                   | GPIO, ADC                            |
| D4              | SDA         | GPIO6                                    | GPIO, dados I2C                      |
| D5              | SCL         | GPIO7                                    | GPIO, clock I2C                      |
| D6              | TX          | GPIO0                                    | GPIO, transmissão UART               |
| D7              | RX,CSn      | GPIO1                                    | GPIO, recepção UART, CSn             |
| D8              | SCK         | GPIO2                                    | GPIO, clock SPI                      |
| D9              | MISO        |GPIO4                                    | GPIO, dados SPI                      |
| D10             | MOSI        | GPIO3                                    | GPIO, dados SPI                      |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | Entrar no modo Boot                  |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Red                          |
| RGB LED         |             | GPIO12                       | LED RGB                              |
| USER_LED_R      |             | GPIO17                           | Pino de LED RGB vermelho controlado pelo usuário |
| USER_LED_B      |             | GPIO25                            | Pino de LED RGB azul controlado pelo usuário |
| USER_LED_G      |             | GPIO16                          | Pino de LED RGB verde controlado pelo usuário |

### **Entrar no modo Bootloader**

Às vezes, a porta do Seeed Studio XIAO RP2040 pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

- Pressione e segure o botão "B".
- Conecte o Seeed Studio XIAO PR2040 ao seu computador.
- O computador exibirá uma unidade de disco.

Neste ponto, o chip entra no modo Bootloader e a porta de gravação aparece novamente. Como o chip RP2040 possui duas partições, uma é o Bootloader e a outra é o programa do usuário. O produto grava um código de bootloader na memória do sistema quando sai de fábrica. Podemos alternar os modos executando as etapas acima.

### **Reset**

Se você quiser resetar o Seeed Studio XIAO RP2040, execute os seguintes passos:

- Conecte o Seeed Studio XIAO RP2040 ao seu computador.
- Pressione os pinos "R" **uma vez**.

Atenção: O comportamento dos LEDs monocromáticos programáveis integrados (vermelho, azul e verde) é invertido em relação ao de um Arduino. No Seeed Studio XIAO RP2040, o pino deve ser colocado em nível baixo para ser ativado.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**Projeto de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Schematic]** [Esquemático do XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[Arquivos de projeto de PCB]** 
  - [Projeto KiCad do XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [Projeto Eagle do XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [Footprints KiCad da série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]** [Folha de pinagem do XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**Projeto mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO RP2040 em DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[Modelo 3D]** [Modelo 3D do XIAO RP2040](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos do curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
