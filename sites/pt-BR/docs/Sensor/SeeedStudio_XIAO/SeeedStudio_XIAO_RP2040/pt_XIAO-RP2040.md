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

O Seeed Studio XIAO RP2040 é tão pequeno quanto o Seeed Studio XIAO SAMD21, mas é mais poderoso. Por um lado, ele traz o poderoso processador Dual-core RP2040, cujo clock flexível pode operar até 133 MHz, sendo um microcontrolador de baixo consumo de energia. No Seeed Studio XIAO RP2040 há também 264KB de SRAM e 2MB de memória Flash on-board, o que permite armazenar e executar mais programas. Por outro lado, esta pequena placa tem bom desempenho de processamento, mas necessita de menos energia.  
Em resumo, ele é projetado em um tamanho minúsculo, tão pequeno quanto um polegar (21x17.8mm), e pode ser usado em dispositivos vestíveis e projetos de pequeno porte.

Existem 14 pinos GPIO no Seeed Studio XIAO RP2040, dos quais há 11 pinos digitais, 4 pinos analógicos, 11 pinos PWM, 1 interface I2C, 1 interface UART, 1 interface SPI, 1 interface de almofada de ligação SWD.

O Seeed Studio XIAO RP2040 é compatível com a placa de expansão Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## **Recursos**

- MCU poderosa: processador Dual-core ARM Cortex M0+, clock flexível operando até 133 MHz
- Recursos ricos on-chip: 264KB de SRAM e 2MB de memória Flash on-board
- Compatibilidade flexível: Suporta Micropython/Arduino/CircuitPython
- Operação fácil de projetos: design compatível com protoboard e SMD, sem componentes na parte de trás
- Tamanho pequeno: Tão pequeno quanto um polegar (21x17.8mm) para dispositivos vestíveis e projetos de pequeno porte.
- Múltiplas interfaces: 11 pinos digitais, 4 pinos analógicos, 11 pinos PWM, 1 interface I2C, 1 interface UART, 1 interface SPI, 1 interface de almofada de ligação SWD.

## **Especificações**

| Nome do Produto | Seeed Studio XIAO RP2040 |
|-------------|-------------------------|
| **Chipset** | [Silicon - Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040) |
| **Processador** | Processador Dual Cortex M0+ operando a até 133 MHz |
| **RAM** | 264KB SRAM |
| **Flash** | 2MB Flash Onboard |
| **Interface** | Pino GPIO x14<br/>Pino Digital x11<br/>Pino Analógico x4<br/>I2C x1<br/>UART x1<br/>SPI x1<br/>PWM x11 |
| **Onboard** | LED de usuário (3 cores) x1<br/>LED de alimentação x1<br/>LED RGB x1<br/>Botão de Reset x1<br/>Botão de Boot x1 |
| **Conectividade sem fio** | / |
| **Alimentação** | Tensão de entrada (Type-C): 5V<br/>Tensão de entrada (BAT): 5V |
| **Modo de baixo consumo (Típ.)** | / |
| **Compatibilidade de software** | Arduino, PlatformIO, MicroPython, CircuitPython, tinyGo, Rust, Zephyr, [Exhibition for XIAO Series \| Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/xiao_topic_page/) |
| **Temperatura de trabalho** | -20°C-70°C |
| **Dimensões** | 21x17.8mm |
| **Variantes** | [Seeed Studio XIAO RP2040 3PCS Pack \| Save 10% for tiny Mic...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html)<br/>[Seeed Studio XIAO RP2040 Pre-Soldered \| Plug-and-Play mini ...](https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html) |

## **Visão geral de hardware**

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinpin.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
Para pinos de I/O gerais:
A tensão de trabalho do MCU é 3,3V. Uma tensão de entrada conectada aos pinos de I/O gerais pode causar danos ao chip se for maior que 3,3V.

Para pinos de alimentação:
O circuito conversor DC-DC integrado, capaz de transformar a tensão de 5V em 3,3V, permite alimentar o dispositivo com uma fonte de 5V via VIN-PIN e 5V-PIN.

Atualmente, o XIAO RP2040 só suporta alimentação por bateria e não pode ser conectado à porta Type-C enquanto uma bateria estiver conectada, pois isso pode representar um risco de segurança.

Por favor, preste atenção ao usar, não remova a tampa de blindagem.
:::

## **Mapa de pinos**
| Pino XIAO        | Função     | Pino do Chip          | Descrição                          |
| :-------------: | :---------: | :---------------: | :---------------------------------- |
| 5V              | VBUS        |                                       | Entrada/Saída de alimentação                   |
| GND             |             |                                       |                                      |
| 3V3             | 3V3_OUT     |                                       | Saída de alimentação                         |
| D0              | Analógico      | GPIO26                                   | GPIO, ADC                            |
| D1              | Analógico      | GPIO27                                   | GPIO, ADC                            |
| D2              | Analógico      | GPIO28                                   | GPIO, ADC                            |
| D3              | Analógico      | GPIO29                                   | GPIO, ADC                            |
| D4              | SDA         | GPIO6                                    | GPIO, Dados I2C                       |
| D5              | SCL         | GPIO7                                    | GPIO, Clock I2C                      |
| D6              | TX          | GPIO0                                    | GPIO, Transmissão UART                  |
| D7              | RX,CSn      | GPIO1                                    | GPIO, Recepção UART, CSn               |
| D8              | SCK         | GPIO2                                    | GPIO, Clock SPI                      |
| D9              | MISO        |GPIO4                                    | GPIO, Dados SPI                       |
| D10             | MOSI        | GPIO3                                    | GPIO, Dados SPI                       |
| Reset           |             | RUN                                   | RUN                                  |
| Boot            |             | RP2040_BOOT                           | Entrar no modo Boot                      |
| CHARGE_LED      |             | VCC_3V3                               | CHG-LED_Vermelho                          |
| RGB LED         |             | GPIO12                       | LED RGB                              |
| USER_LED_R      |             | GPIO17                           | Pino de LED RGB vermelho controlado pelo usuário      |
| USER_LED_B      |             | GPIO25                            | Pino de LED RGB azul controlado pelo usuário     |
| USER_LED_G      |             | GPIO16                          | Pino de LED RGB verde controlado pelo usuário    |

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

Atenção: O comportamento dos LEDs monocromáticos programáveis integrados (eles são vermelho, azul e verde) é invertido em relação ao de um Arduino. No Seeed Studio XIAO RP2040, o pino deve ser colocado em nível baixo para habilitar.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**Projeto de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Esquemático]** [XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[Arquivos de projeto de PCB]** 
  - [ XIAO RP2040 Projeto KiCad](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [XIAO RP2040 Projeto Eagle](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [XIAO Series Pegadas KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series Símbolos SCH KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]** [XIAO RP2040 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**Projeto mecânico**
- **📄[Dimensões 2D]** [XIAO RP2040 Dimensão em DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[Modelo 3D]** [ XIAO RP2040 Modelo 3D](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos do curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
