---
description: Primeiros passos com a Série Seeed Studio XIAO ESP32S3.
title: Primeiros passos com a Série Seeed Studio XIAO ESP32S3
keywords:
  - esp32s3
  - xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_getting_started
sku: 113991114, 113991115, 114010001, 102010634, 102010635, 102010671
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
createdAt: '2023-03-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros passos com a Série Seeed Studio XIAO ESP32S3

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32S3</th>
  <th>Seeed Studio XIAO ESP32S3 Sense</th>
  <th>Seeed Studio XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3plus.png" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
   </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html" target="_blank">
   <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## Introdução

A Série Seeed Studio XIAO são placas de desenvolvimento diminutas, que compartilham uma estrutura de hardware semelhante, em que o tamanho é literalmente do tamanho de um polegar. O codinome "XIAO" aqui representa metade de sua característica "Tiny" (minúsculo), e a outra metade será "Puissant" (potente).

Seeed Studio XIAO ESP32S3 Sense integra sensor de câmera, microfone digital e suporte a cartão SD. Combinando poder de computação de ML embarcado e capacidade de fotografia, esta placa de desenvolvimento pode ser uma ótima ferramenta para começar com IA inteligente de voz e visão.

:::tip
A **câmera OV2640** foi descontinuada e o XIAO ESP32S3 Sense subsequente utiliza o modelo de câmera **OV3660**. No entanto, o código de exemplo da Wiki para a câmera ainda se aplica.
:::

### Especificação
<table>
  <tr>
    <th>Produto</th>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">XIAO ESP32-S3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">XIAO ESP32-S3 Sense</a></td>
    <td><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html">XIAO ESP32-S3 Plus</a></td>
  </tr>
  <tr>
    <th>Processador</th>
    <td colspan="3">ESP32-S3R8<br/>Processador Xtensa LX7 dual-core, 32 bits que opera até 240 MHz</td>
  </tr>
  <tr>
    <th>Wireless</th>
    <td colspan="3">Subsistema completo de Wi-Fi 2,4GHz<br/>Bluetooth Low Energy 5.0 / Bluetooth Mesh</td>
  </tr>
  <tr>
    <th>Sensores Integrados</th>
    <td>/</td>
    <td>1x sensor de câmera OV3660<br/>1x Microfone Digital</td>
    <td>/</td>
  </tr>
  <tr>
    <th>Memória</th>
    <td>8MB PSRAM &amp; 8MB Flash no chip</td>
    <td>8MB PSRAM &amp; 8MB Flash no chip<br/>Slot para cartão SD onboard, suportando 32GB FAT</td>
    <td>8MB PSRAM &amp; 16MB Flash no chip</td>
  </tr>
  <tr>
    <th>Interface</th>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x LED de Usuário<br/>1x LED de Carga<br/>1x Botão de Reset<br/>1x Botão de Boot</td>
    <td>1x UART<br/>1x IIC<br/>1x IIS<br/>1x SPI<br/>11x GPIOs (PWM)<br/>9x ADC<br/>1x LED de Usuário<br/>1x LED de Carga<br/>1x Conector B2B (com 2 GPIOs adicionais)<br/>1x Botão de Reset<br/>1x Botão de Boot</td>
    <td>2x UART<br/>1x IIC<br/>1x IIS<br/>2x SPI<br/>18x GPIOs (PWM)<br/>9x ADC<br/>1x LED de Usuário<br/>1x LED de Carga<br/>1x Conector B2B<br/>1x Botão de Reset<br/>1x Botão de Boot</td>
  </tr>
  <tr>
    <th>Dimensões</th>
    <td>21 x 17,8mm</td>
    <td>21 x 17,8 x 15mm (com placa de expansão)</td>
    <td>21 x 17,8mm</td>
  </tr>
  <tr>
    <th>Alimentação (Típ.)</th>
    <td colspan="3">Tensão de entrada (Type-C): 5V<br/>Tensão de entrada (BAT): 3,7V</td>
  </tr>
  <tr>
    <th rowspan="4">Consumo de Energia</th>
    <td>Tensão de operação do circuito:<br/>- Type-C: 5V@19mA<br/>- BAT: 3,8V@22mA</td>
    <td>Tensão de operação do circuito:<br/>`- Type-C: 5V@38.3mA`<br/>`- BAT: 3.8V@43.2mA (with expansion board)`</td>
    <td>Tensão de operação do circuito:<br/>- Type-C: 5V@28mA<br/>- BAT: 3,8V@35mA</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Aplicação Web de Webcam:<br/>- Type-C:<br/>-- Consumo médio de energia: 5V/~140mA<br/>-- Pico de consumo de energia (Captura de Imagem): 5V/~347mA<br/>- Bateria:<br/>-- Consumo médio de energia: 3,8V/~155mA<br/>-- Pico de consumo de energia (Captura de Imagem): 3,8V/~366mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Gravação de microfone &amp; escrita em cartão SD:<br/>- Type-C:<br/>-- Consumo médio de energia: 5V/54,58mA<br/>-- Pico de consumo de energia: 5V/86,7mA<br/>- Bateria:<br/>-- Consumo médio de energia: 3,8V/64,5mA<br/>-- Pico de consumo de energia: 3,8V/109,3mA</td>
    <td>/</td>
  </tr>
  <tr>
    <td>50mA(Rápido) / 3,8mA(Trickle)</td>
    <td>/</td>
    <td>Corrente de carga:<br/>100mA(Rápido) / 0,9mA(Trickle)</td>
  </tr>
  <tr>
    <th>Modelo de Baixo Consumo de Energia (Típ.)<br/>(Alimentação: 3,8V)</th>
    <td>Modo Modem-sleep: 27mA<br/>Modo Light-sleep: 2mA<br/>Modo Deep Sleep: 14μA</td>
    <td>Modo Modem-sleep: 44mA<br/>Modo Light-sleep: 5mA<br/>Modo Deep Sleep: 3mA</td>
    <td>Modo Modem-sleep: 3,8V/31,6 mA<br/>Modo Light-sleep: 3,8V/2,45 mA<br/>Modo Deep Sleep: 3,8V/33,51 μA</td>
  </tr>
  <tr>
    <th>Consumo de Energia com Wi-Fi Ativado (Típ.)</th>
    <td>Modo Ativo: 100 mA</td>
    <td>Modo Ativo: 110 mA (com placa de expansão)</td>
    <td>Modo Ativo: 81 mA</td>
  </tr>
  <tr>
    <th>Consumo de Energia com BLE Ativado (Típ.)</th>
    <td>Modo Ativo: 85 mA</td>
    <td>Modo Ativo: 102 mA (com placa de expansão)</td>
    <td>Modo Ativo: 101 mA</td>
  </tr>
  <tr>
    <th>Temperatura de Trabalho</th>
    <td colspan="3">-20°C ~ 65°C</td>
  </tr>
</table>

### Recursos

- **Placa MCU poderosa**: Incorpora o chip processador ESP32S3 de 32 bits, dual-core, Xtensa operando até 240 MHz, com múltiplas portas de desenvolvimento montadas, suportando Arduino / MicroPython
- **Funcionalidade Avançada** (para Sense): Sensor de câmera **OV2640 removível para resolução de 1600x1200** e **sensor de câmera OV3660 para 2048x1536** compatível com sensor de câmera OV5640, integrando microfone digital adicional
- **Projeto de Energia Elaborado**: Capacidade de gerenciamento de carga de bateria de lítio, oferecendo 4 modelos de consumo de energia que permitem modo de deep sleep com consumo de energia tão baixo quanto 14μA
- **Ótima Memória para mais Possibilidades**: Oferece 8MB PSRAM e 8MB FLASH (16MB na versão **Plus**), suportando slot para cartão SD para memória externa FAT de 32GB (apenas para XIAO ESP32S3)
- **Desempenho RF excepcional**: Suporta comunicação sem fio dual 2,4GHz Wi-Fi e BLE, suportando comunicação remota de 100m+ quando conectado com antena U.FL
- **Design compacto do tamanho do polegar**: 21 x 17,8mm, adotando o formato clássico do XIAO, adequado para projetos com espaço limitado, como dispositivos vestíveis

<table align="center">
 <tr>
     <th>Item</th>
     <th style={{width:300, height:'auto'}}>Câmera OV3660</th>
        <th style={{width:300, height:'auto'}}>Câmera OV2640</th>
 </tr>
    <tr>
        <th>Consumo Máx. de Energia em (640*480)</th>
        <td align="center">Modo Ativo: <strong>~ 0,6A</strong></td>
        <td align="center">Modo Ativo: <strong>~ 0,65A</strong></td>
    </tr>
    <tr>
        <th>Consumo Médio de Energia em (640*480)</th>
        <td align="center">Modo Ativo: <strong>~ 0,12A</strong></td>
        <td align="center">Modo Ativo: <strong>~ 0,24A</strong></td>
    </tr>
    <tr>
        <th>Consumo Mín. de Energia em (640*480)</th>
        <td align="center">Modo Ativo: <strong>~ 0,12A</strong></td>
        <td align="center">Modo Ativo: <strong>~ 0,15A</strong></td>
    </tr>
</table>

## Visão Geral de Hardware

Antes de tudo começar, é bastante essencial ter alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do Seeed Studio XIAO ESP32S3.

<Tabs>
<TabItem  value="(Sense)" label="XIAO ESP32S3/XIAO ESP32S3 Sense" default>

<table align="center">
 <tr>
     <th>Diagrama de indicação frontal do XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Diagrama de indicação traseira do XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de pinos do XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

**Mapa de Pinos**
| Pino XIAO               | Função           | Pino do Chip                                           | Funções Alternativas | Descrição                            |
| :---------------------: | :-------------: | :----------------------------------------------------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |                                                        |                    | Entrada/Saída de Energia             |
| GND                     |                  |                                                        |                    |                                      |
| 3V3                     | 3V3_OUT          |                                                        |                    | Saída de Energia                     |
| D0                      | Analógico        | GPIO1                                                  | TOUCH1             | GPIO, ADC                            |
| D1                      | Analógico        | GPIO2                                                  | TOUCH2             | GPIO, ADC                            |
| D2                      | Analógico        | GPIO3                                                  | TOUCH3             | GPIO, ADC                            |
| D3                      | Analógico        | GPIO4                                                  | TOUCH4             | GPIO, ADC                            |
| D4                      | Analógico,SDA    | GPIO5                                                  | TOUCH5             | GPIO, I2C Dados, ADC                 |
| D5                      | Analógico,SCL    | GPIO6                                                  | TOUCH6             | GPIO, I2C Clock, ADC                 |
| D6                      | TX               | GPIO43                                                 |                    | GPIO, UART Transmitir                |
| D7                      | RX               | GPIO44                                                 |                    | GPIO, UART Receber                   |
| D8                      | Analógico,SCK    | GPIO7                                                  | TOUCH7             | GPIO, Clock SPI, ADC                 |
| D9                      | Analógico,MISO   | GPIO8                                                  | TOUCH8             | GPIO, Dados SPI, ADC                 |
| D10                     | Analógico,MOSI   | GPIO9                                                 | TOUCH9             | GPIO, Dados SPI, ADC                 |
| D11                     | Analógico        | GPIO42                                                 | TOUCH12            | GPIO, ADC                            |
| D12                     | Analógico        | GPIO41                                                 | TOUCH13            | GPIO, ADC                            |
| MTDO                    |                  | GPIO40                                                 |                    | JTAG                                 |
| MTDI                    |                  | GPIO41                                                 |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39                                                 |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42                                                 |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU                                                |                    |                                      |
| Boot                    |                  | GPIO0                                                  |                    | Entrar em modo Boot                  |
| U.FL-R-SMT1             |                  | LNA_IN                                                 |                    | Antena UFL                           |
| CHARGE_LED              |                  |                                                |                    | LED de Carga                         |
| USER_LED                |                  | GPIO21                                                 |                    | Luz de Usuário                       |
| Digital microphone_CLK  |                  | GPIO42                                                 |                    | pino de clock PDM para MIC           |
| Digital microphone_DATA |                  | GPIO41                                                 |                    | pino de dados PDM para MIC           |
| Onboard SD Card__CS     |                  | GPIO3                                                  |                    | pino de seleção de chip do cartão SD |
| Onboard SD Card_SCK     |                  | GPIO7                                                  |                    | pino de clock do cartão SD           |
| Onboard SD Card_MISO    |                  | GPIO8                                                  |                    | pino de entrada de dados do cartão SD|
| Onboard SD Card Slot_MOSI |                | GPIO10                                                 |          |      pino de saída de dados do cartão SD      |

**Câmera**
| Pino do Chip  | Descrição                          |
| :-------: | :---------------------------------- |
| GPIO10    | Pino de clock relacionado à câmera  |
| GPIO11    | Pino de dados de vídeo da câmera (Y8) |
| GPIO12    | Pino de dados de vídeo da câmera (Y7) |
| GPIO13    | Pino de clock de pixel da câmera    |
| GPIO14    | Pino de dados de vídeo da câmera (Y6) |
| GPIO15    | Pino de dados de vídeo da câmera (Y2) |
| GPIO16    | Pino de dados de vídeo da câmera (Y5) |
| GPIO17    | Pino de dados de vídeo da câmera (Y3) |
| GPIO18    | Pino de dados de vídeo da câmera (Y4) |
| GPIO40    | Pino de dados I2C para a câmera     |
| GPIO39    | Pino de clock I2C para a câmera     |
| GPIO38    | Pino de sincronismo vertical da câmera |
| GPIO47    | Pino de sincronismo horizontal da câmera |
| GPIO48    | Pino de dados de vídeo da câmera (Y9) |
</TabItem>
<TabItem value="Plus" label="XIAO ESP32S3 Plus" default>

<table align="center">
 <tr>
  <th>Diagrama de indicação frontal do XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_front.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <th>Diagrama de indicação traseira do XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_back.png
  " style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
 <th>Lista de pinos do XIAO ESP32S3 Plus</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/plus_pinout.png
  " style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>


**Mapa de Pinos**

| Pino XIAO               | Função          | Pino do Chip | Funções Alternativas | Descrição                            |
| :---------------------: | :-------------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS             |           |                    | Entrada/Saída de energia             |
| GND                     |                  |           |                    |                                      |
| 3V3                     | 3V3_OUT          |           |                    | Saída de energia                     |
| D0                      | Analógico        | GPIO1     |                    | GPIO, ADC                            |
| D1                      | Analógico        | GPIO2     |                    | GPIO, ADC                            |
| D2                      | Analógico        | GPIO3     |                    | GPIO, ADC                            |
| D3                      | Analógico        | GPIO4     |                    | GPIO, ADC                            |
| D4                      | Analógico, SDA   | GPIO5     |                    | GPIO, Dados I2C, ADC                 |
| D5                      | Analógico, SCL   | GPIO6     |                    | GPIO, Clock I2C, ADC                 |
| D6                      | TX               | GPIO43    |                    | GPIO, Transmissão UART               |
| D7                      | RX               | GPIO44    |                    | GPIO, Recepção UART                  |
| D8                      | Analógico, SCK   | GPIO7     |                    | GPIO, Clock SPI, ADC                 |
| D9                      | Analógico, MISO  | GPIO8     |                    | GPIO, Dados SPI, ADC                 |
| D10                     | Analógico, MOSI  | GPIO9    |                    | GPIO, Dados SPI, ADC                 |
| D11                     |                  | GPIO38    |                    | GPIO, ADC                            |
| D12                     |                  | GPIO39    |                    | GPIO, ADC                            |
| D13                     |                  | GPIO40    |                    |                                      |
| D14                     |                  | GPIO41    |                    |                                      |
| D15                     |                  | GPIO42    |                    |                                      |
| D16                     |                  | GPIO10    |                    |                                      |
| D17                     |                  | GPIO13    |                    |                                      |
| D18                     |                  | GPIO12    |                    |                                      |
| D19                     |                  | GPIO11    |                    |                                      |
| MTDO                    |                  | GPIO40    |                    | JTAG                                 |
| MTDI                    |                  | GPIO41    |                    | JTAG, ADC                            |
| MTCK                    |                  | GPIO39    |                    | JTAG, ADC                            |
| MTMS                    |                  | GPIO42    |                    | JTAG, ADC                            |
| Reset                   |                  | CHIP_PU   |                    |                                      |
| Boot                    |                  | GPIO0     |                    | Entrar no modo de boot               |
| ADC_BAT                 |                  | GPIO10    |                    | Ler o valor de tensão da bateria     |
| U.FL-R-SMT1             |                  | LNA_IN    |                    | Antena UFL                           |
| CHARGE_LED              |                  | VCC_3V3   |                    | CHG-LED                              |
| USER_LED                |                  | GPIO21    |                    | Luz do usuário                       |

</TabItem>

</Tabs>

:::caution
- Embora o XIAO ESP32-S3 atribua GPIO41 e GPIO42 aos pinos A11 e A12, devido à natureza do chip ESP32-S3, os pinos A11 e A12 não suportam funcionalidade de ADC. Certifique-se de distingui-los e diferenciá-los.

- O conector B2B do XIAO ESP32S3 Plus é compatível com a [placa de extensão Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html), mas não com a placa de sensor de câmera Plug-in.
:::

### Pinos de Alimentação

- 5V - Esta é a saída de 5 V da porta USB. Você também pode usar este pino como entrada de tensão, mas deve haver algum tipo de diodo (schottky, sinal, potência) entre sua fonte de alimentação externa e este pino, com o ânodo para a bateria e o cátodo para o pino de 5 V.
- 3V3 - Esta é a saída regulada do regulador onboard. Você pode consumir 700 mA
- GND - Terra de energia/dados/sinal

### Pinos de Configuração (Strapping)

A cada inicialização ou reset, um chip requer alguns parâmetros iniciais de configuração, como em qual modo de boot carregar o chip, tensão da memória flash, etc. Esses parâmetros são passados pelos pinos de configuração (strapping). Após o reset, os pinos de configuração funcionam como pinos de E/S normais.

Os parâmetros controlados pelos pinos de configuração dados no reset do chip são os seguintes:

- **Modo de boot do chip** – GPIO0 e GPIO46
- **Tensão VDD_SPI** – GPIO45
- **Impressão de mensagens da ROM** – GPIO46
- **Fonte de sinal JTAG** – GPIO3

GPIO0, GPIO45 e GPIO46 estão conectados aos resistores internos fracos de pull-up/pull-down do chip no reset.
Esses resistores determinam os valores de bit padrão dos pinos de configuração. Além disso, esses resistores determinam os valores de bit se os pinos de configuração estiverem conectados a um circuito externo de alta impedância.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/110.png" style={{width:400, height:'auto'}}/></div>

Para alterar os valores de bit, os pinos de configuração devem ser conectados a resistores externos de pull-down/pull-up. Se o ESP32-S3 for usado como um dispositivo por um MCU host, os níveis de tensão dos pinos de configuração também podem ser controlados pelo MCU host.

Todos os pinos de configuração possuem travas. No reset do sistema, as travas amostram os valores de bit de seus respectivos pinos de configuração e os armazenam até que o chip seja desligado ou desligado por completo. Os estados das travas não podem ser alterados de nenhuma outra forma. Isso torna os valores dos pinos de configuração disponíveis durante toda a operação do chip e os pinos são liberados para serem usados como pinos de E/S normais após o reset.

Em relação aos requisitos de temporização para os pinos de configuração, há parâmetros como tempo de setup e tempo de retenção (hold).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/111.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/112.png" style={{width:600, height:'auto'}}/></div>

## Primeiros Passos

Para que você possa começar mais rapidamente com o XIAO ESP32S3, leia a preparação de hardware e software abaixo para preparar o XIAO.

1. **XIAO ESP32S3**

O programa de fábrica pré-definido na versão normal é o programa de acendimento por pino de toque. Quando você energizar o XIAO, toque em alguns de seus pinos e o indicador laranja de usuário acenderá.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/105.jpg" style={{width:600, height:'auto'}}/></div>

2. **XIAO ESP32S3 Sense**

O XIAO ESP32S3 Sense é enviado com o programa de exemplo WebCam pré-instalado. Você pode usar esse programa dando ao XIAO uma boa instalação de antena e ligando-o. Para mais detalhes, você pode ler a Wiki sobre este programa.

- [Transmissão de Vídeo](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_camera_usage#project-ii-video-streaming)

:::note
A partir de **junho de 2025**, o firmware de fábrica do XIAO ESP32S3 Sense habilita um Wi‑Fi AP padrão com as seguintes credenciais:

- **SSID:** `XIAO_ESP32S3_Sense`
- **Password:** `seeedstudio`
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:900, height:'auto'}}/></div>

### Preparação de Hardware

#### Soldar o header

O XIAO ESP32S3 é enviado sem pinos de header por padrão, você precisa preparar seus próprios pinos de header e soldá-los nos pinos correspondentes do XIAO para que possa conectá-lo à placa de expansão ou ao sensor.

Devido ao tamanho miniaturizado do XIAO ESP32S3, tenha cuidado ao soldar os headers, não deixe pinos diferentes grudarem entre si e não deixe a solda encostar no shield ou em outros componentes. Caso contrário, isso pode fazer com que o XIAO entre em curto‑circuito ou não funcione corretamente, e as consequências disso serão de responsabilidade do usuário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

#### Instalação da antena

No canto inferior esquerdo da frente do XIAO ESP32S3, há um "WiFi/BT Antenna Connector" separado. Para obter um sinal melhor de WiFi/Bluetooth, você precisa pegar a antena que vem dentro da embalagem e instalá-la no conector.

Existe um pequeno truque para a instalação da antena: se você simplesmente pressioná-la com força para baixo, vai perceber que é muito difícil de encaixar e seus dedos vão doer! A maneira correta de instalar a antena é encaixar primeiro um lado do conector da antena no bloco do conector, depois pressionar levemente o outro lado, e a antena será instalada.

Para remover a antena é o mesmo caso, não use força bruta para puxar a antena diretamente, faça força para levantar de um lado, assim a antena sai com facilidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

#### Instalação das placas de expansão (para Sense)

Se você estiver comprando o XIAO ESP32S3 Sense, então também deve vir incluída uma placa de expansão. Esta placa de expansão possui um sensor de câmera 1600x1200 OV2640/2048x1536 OV3660, slot de cartão SD onboard e microfone digital.

Instalando a placa de expansão com o XIAO ESP32S3 Sense, você pode usar as funções presentes na placa de expansão.

Instalar a placa de expansão é muito simples, você só precisa alinhar o conector da placa de expansão com o conector B2B do XIAO ESP32S3, pressionar com firmeza e ouvir um "clique", e a instalação estará completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

Agora temos uma nova e poderosa câmera totalmente compatível com o XIAO ESP32S3 Sense, a OV5640, disponível em nossas prateleiras, e se você a adquirir, poderá substituir a câmera para usá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

Se você precisar conhecer as informações detalhadas de parâmetros da ov5640, pode consultar a tabela a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Todos os programas sobre câmeras no Wiki são compatíveis com as câmeras OV5640, OV2640 e OV3660.
:::

#### Instalando o dissipador de calor atualizado

Garanta o resfriamento ideal do seu XIAO ESP32S3 Sense instalando nosso dissipador de calor atualizado. Este novo design foi feito para resolver as deficiências de resfriamento observadas nos modelos anteriores, especialmente durante operações intensivas como o uso da câmera. O feedback destacou que o dissipador de calor original não dissipava o calor de forma adequada, levando ao desenvolvimento de uma solução mais eficiente.

<details>
<summary>Clique para ver a comparação de desempenho</summary>

Nossos testes demonstraram os benefícios do dissipador de calor atualizado em relação à configuração original:

| Amostra de teste        | Temperatura máxima no lado traseiro |
| --------------------- | ----------------------------------- |
| **Sem dissipador de calor** | 63.6°C                            |
| **Com dissipadores duplos** | 53.5°C (🔻10°C)                  |

***Detalhes do teste:***

- **Ambiente**: Sala com ar-condicionado (aproximadamente 27°C)
- **Ferramenta de medição de temperatura**: Termopar OMEGA CL3515R
- **Local de medição**: Pad térmico traseiro do XIAO ESP32S3
- **Firmware de teste**: WebCamera
- **Fonte de alimentação**: Type-C 5V
- **Duração da operação**: 1 hora

***Resultado principal:***

- O dispositivo equipado com o dissipador de calor manteve operação estável por mais de uma hora, atingindo sua temperatura máxima sem degradação de desempenho.
- Durante o teste com o WebCamera no modo SVGA (800x600):
  - O XIAO ESP32S3 operou de forma estável.
  - A saída de vídeo foi fluida.
  - Houve uma redução significativa na temperatura, garantindo desempenho confiável sem queda de frames ou desconexões.

</details>

***Reúna os seguintes itens antes de iniciar a instalação:***

- Dissipador de calor escolhido (simples ou duplo)
- Um ESP32S3 limpo

Certifique-se de que seu dispositivo esteja desligado e desconectado de qualquer fonte de alimentação antes de começar.

:::tip notice

***Observação de compra:*** Ao comprar seu XIAO ESP32S3 Sense, é importante observar que somente **modelos equipados com câmera** vêm com um dissipador de calor incluído. Se você tiver uma versão do ESP32S3 que não inclui câmera, será necessário comprar um dissipador de calor separadamente.

***Dica de instalação:*** Priorize cobrir o Thermal PAD com o dissipador de calor, pois ele fica diretamente acima do chip ESP32S3, a principal fonte de calor. Um alinhamento adequado garante dissipação ideal de calor e, além disso, mantenha os pinos BAT o mais desobstruídos possível.
:::

Agora, vamos começar o processo de instalação:

***Passo 1. Prepare o dissipador de calor:***
Comece removendo a capa protetora do dissipador de calor para expor o adesivo térmico. Isso vai preparar o dissipador para uma fixação segura ao chip ESP32S3.

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/heat-sink.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/remove-heat-sink-cover.jpg" style={{width:400, height:'auto'}}/></div></td>

***Passo 2. Monte o dissipador de calor:***

<Tabs>
  <TabItem value="single" label="Single Heat Sink" default>

Esta opção menor e compacta é suficiente para uso comum e permite acesso total a todos os pinos GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-single-heat-sink-install.jpg" style={{width:400, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="dual" label="Dual Heat Sinks">

A opção maior oferece resfriamento superior, o que é ideal para tarefas de alto desempenho, mas pode limitar o acesso a alguns pinos GPIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/pin-dual-heat-sink-install.png" style={{width:400, height:'auto'}}/></div>

:::note
Se você quiser usar o pino BAT do XIAO ESP32S3 Plus, neste caso o dissipador de calor duplo não é adequado para ele.
:::

  </TabItem>
</Tabs>

***Passo 3: Inspeção final e teste***

Após a instalação, certifique-se de que tudo esteja devidamente fixado, sem risco de curto‑circuito. Verifique se o dissipador de calor está corretamente alinhado e firmemente preso.

### Preparação de Software

A ferramenta de programação recomendada para o XIAO ESP32S3 é o Arduino IDE, portanto, como parte da preparação de software, você precisará concluir a instalação do Arduino.

:::tip
Se esta for a sua primeira vez usando o Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

- **Passo 1.** Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **Passo 2.** Inicie o aplicativo Arduino.

- **Passo 3.** Adicione o pacote de placas ESP32 ao seu Arduino IDE.

<Tabs>
<TabItem value='For Windows'>

Navegue até **File > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png" style={{width:800, height:'auto'}}/></div>

Navegue até **Tools > Board > Boards Manager...**, digite a palavra‑chave **esp32** na caixa de pesquisa, selecione a versão mais recente de **esp32** e instale‑a.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
O pacote on-board para o XIAO ESP32S3 requer a versão **2.0.8** ou superior para estar disponível.
:::

- **Passo 4.** Selecione sua placa e porta.

Na parte superior do Arduino IDE, você pode selecionar a porta diretamente. Esta provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware).

</TabItem>
<TabItem value='For Mac OS'>

Navegue até **Arduino IDE > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Navegue até **Tools > Board > Boards Manager...**, digite a palavra-chave **esp32** na caixa de pesquisa, selecione a versão mais recente de **esp32** e instale-a.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png" style={{width:1000, height:'auto'}}/></div>

:::caution
O pacote onboard para o XIAO ESP32S3 requer a versão **2.0.8** ou superior para estar disponível.
:::

- **Step 4.** Selecione sua placa e porta.

Na parte superior da Arduino IDE você pode selecionar diretamente a porta. Provavelmente será aquela com "usbmodem" ou "usbserial" no nome. Se você não tiver certeza, desconecte e conecte novamente para ver qual porta está faltando.

</TabItem>
</Tabs>

<!-- :::tip
We have now submitted a merge request to ESP32 and will be able to search and use XIAO ESP32S3 in the Arduino IDE when ESP32 releases the next version of the on-board package update.

Until then, you can manually add the XIAO ESP32S3 on-board package to the Arduino directory to use it.
:::

<div class="github_container" style={{textAlign: 'center'}}><a class="github_item" href="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/XIAO_ESP32S3_Package.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download the Package</font></span></strong></a></div>

After you have downloaded the above zip, please unzip it and you will see two files. One is the **XIAO_ESP32S3 folder**, and the other is **boards.txt**.

- **Under Windows PC**

    The default onboard package storage path for ESP32 in Windows is:

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/8.png" style={{width:600, height:'auto'}}/></div>

    `C:\Users\${UserName}\AppData\Local\Arduino15\packages\esp32\hardware\esp32\2.0.7\variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/7.png" style={{width:800, height:'auto'}}/></div>

- **Under MacOS PC**

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7`

    We need to copy the download **boards.txt** file to the above path, overwriting the original **boards.txt** file in this path.

    `~/Library/Arduino15/packages/esp32/hardware/esp32/2.0.7/variants`

    Then go to the **variants folder** and copy the **XIAO_ESP32S3 folder** to it.

- **Step 4.** Close the Arduino IDE and reopen it.-->

<Tabs>
<TabItem value="(Sense)" label="for XIAO ESP32S3 (Sense)" default>

Além disso, pesquise por **xiao** na placa de desenvolvimento à esquerda. selecione **XIAO_ESP32S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Plus" label="for XIAO ESP32S3 Plus" default>

Será lançado em breve; fique atento para futuras atualizações.

</TabItem>
</Tabs>

Com essa preparação, você pode começar a escrever programas para o XIAO ESP32S3 para compilar e fazer upload.

### BootLoader Mode

Às vezes, usar o programa errado pode fazer com que o XIAO perca sua porta ou não funcione corretamente. Problemas comuns incluem:

- O XIAO está conectado ao computador, mas *nenhum número de porta* é encontrado.
- O XIAO está conectado e um número de porta aparece, mas o *upload do programa falha*.

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO em modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e falhas de upload. O método específico é:

- **Step 1**. Pressione e segure o botão `BOOT` no XIAO ESP32S3 sem soltá-lo.
- **Step 2**. Mantenha o botão `BOOT` pressionado e, em seguida, conecte ao computador através do cabo de dados. Solte o botão `BOOT` após conectar ao computador.
- **Step 3**. Faça o upload do programa **File > Examples > 01.Basics > Blink** para verificar o funcionamento do XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

### Reset

Quando o programa roda de forma anormal, você pode pressionar `Reset` uma vez durante a energização para que o XIAO reexecute o programa carregado.

Quando você pressiona e mantém pressionada a tecla `BOOT` enquanto liga e, em seguida, pressiona a tecla `Reset` uma vez, você também pode entrar no modo BootLoader.

### Execute seu primeiro programa Blink

Até agora, acredito que você tenha uma boa compreensão dos recursos e do hardware do XIAO ESP32S3. Em seguida, vamos pegar o programa Blink mais simples como exemplo e realizar o primeiro piscar para o seu XIAO ESP32S3!

- **Step 1.** Inicie o aplicativo Arduino.
- **Step 2.** Navegue até **File > Examples > 01.Basics > Blink** e abra o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Step 3.** Selecione o modelo de placa para **XIAO ESP32S3** e selecione o número de porta correto para fazer o upload do programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/12.png" style={{width:1000, height:'auto'}}/></div>

Quando o programa for carregado com sucesso, você verá a seguinte mensagem de saída e poderá observar que o LED laranja no lado direito do XIAO ESP32S3 está piscando.

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/13.png" style={{width:800, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/14.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

Parabéns, você aprendeu como escrever e carregar programas para o XIAO ESP32S3!

:::note
O LED só apagará quando o pino do LED do usuário no XIAO ESP32S3 for definido em nível alto, e só acenderá quando o pino for definido em nível baixo.
:::

## Battery Usage

A série XIAO ESP32S3 possui um chip de gerenciamento de energia integrado que permite que o XIAO ESP32S3 seja alimentado independentemente usando uma bateria ou que carregue a bateria através da porta USB do XIAO ESP32S3.

Se você quiser conectar a bateria ao XIAO, recomendamos que você compre uma bateria de lítio recarregável de 3,7 V qualificada. Ao soldar a bateria, tenha cuidado para distinguir entre os terminais positivo e negativo. O terminal negativo da fonte de alimentação deve ser o lado mais próximo da porta USB, e o terminal positivo da fonte de alimentação é o lado mais afastado da porta USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/16.jpg" style={{width:400, height:'auto'}}/></div>

:::note
Como todos os pinos GPIO do XIAO ESP32S3 têm suas próprias funções atribuídas, não temos um GPIO configurado para o pino da bateria. Isso significa que não podemos obter a tensão da bateria em nível de software lendo o valor analógico de um dos GPIOs. Se necessário, você pode considerar conectar os terminais positivo e negativo da bateria a dois dos pinos para medir a tensão da bateria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/17.png" style={{width:800, height:'auto'}}/></div>
:::

:::caution
Quando você usa alimentação por bateria, não haverá tensão no pino de 5V.
:::

Ao mesmo tempo, projetamos uma luz indicadora vermelha para o carregamento da bateria, que através da exibição do indicador informa ao usuário o estado atual da bateria durante o carregamento.

1. Quando o XIAO ESP32S3 não está conectado à bateria, a luz vermelha acende quando o cabo Type-C é conectado e apaga após 30 segundos.
2. A luz vermelha pisca quando a bateria está conectada e o cabo Type-C é conectado para carregamento.
3. Ao conectar o Type-C para carregar totalmente a bateria, a luz vermelha apaga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/104.jpg" style={{width:600, height:'auto'}}/></div>

## UF2 BootLoader

Entendemos que alguns usuários desejam gravar arquivos UF2 diretamente no XIAO, o que permitirá o processo de gravação em lote de programas. Aqui descreveremos esse método.

<Tabs>
<TabItem value="method1" label="Method I" default>

:::note
Este método está atualmente disponível apenas em sistemas Windows.
:::

**Step 1**: Baixar e Extrair o Script

Baixe o arquivo zip de script necessário e extraia-o para sua máquina local:

*https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/xiaos3-bin2uf2.zip*

**Step 2**: Converter Arquivos BIN em Arquivos UF2

Após compilar e salvar um programa Arduino, você pode exportar o arquivo binário `BIN`. Este arquivo será gerado na pasta do seu projeto Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/106.png" style={{width:600, height:'auto'}}/></div>

Copie o arquivo `BIN` para o diretório **xiaos3-bin2uf2** que você extraiu anteriormente. Em seguida, execute o script **convert_uf2.bat** para gerar um arquivo UF2, o que exigirá o nome do seu arquivo `bin`.

**Step 3**: Entrar no Modo UF2 BootLoader

Conecte o XIAO ao seu computador e execute o script **boot_uf2.bat**. O XIAO aparecerá no seu computador como uma unidade USB, indicando que ele entrou com sucesso no modo UF2 BootLoader.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/107.png" style={{width:800, height:'auto'}}/></div>

**Passo 4**: Copiar o arquivo UF2 para o XIAO ESP32S3

Acesse a unidade USB do XIAO ESP32S3 e copie para ela o arquivo UF2 convertido. Quando a cópia for concluída, a unidade USB do XIAO desaparecerá automaticamente e o programa começará a ser executado.

:::tip

1. Certifique-se de que seu programa foi compilado e está em execução corretamente; caso contrário, o arquivo UF2 pode não ser executado como esperado.
2. Um arquivo UF2 de exemplo para Blink é fornecido na pasta **xiaos3-bin2uf2**. Quando carregado, o LED laranja no XIAO ESP32S3 piscará. Você pode usar esse arquivo UF2 como teste.

:::

**Passo 5**: Entrar novamente no modo UF2 BootLoader

Se você precisar entrar novamente no modo UF2 BootLoader para enviar outro arquivo UF2, pressione rapidamente o botão **Reset** seguido do botão **Boot**. Não há necessidade de executar o script boot_uf2.bat novamente.

:::note
Pressione Reset e depois Boot, rapidamente!
:::

</TabItem>

<TabItem value="method2" label="Método II" >

O projeto é composto pela personalização do bootloader de 2º estágio do IDF e pelo aplicativo de fábrica UF2 como bootloader de 3º estágio.

**Nota:** como o IDF está sendo ativamente desenvolvido e muda com muita frequência, ele está incluído como submódulo em lib/esp-idf; execute o script de exportação ali para configurar corretamente o seu ambiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/adafruit/tinyuf2/tree/master/ports/espressif" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div>

</TabItem>
</Tabs>

## Solução de Problemas

### P1: O que devo fazer se o envio do programa falhar / o programa rodar de forma anormal / a porta do dispositivo não for encontrada?

Se você encontrar o problema acima, é recomendável que primeiro tente pressionar o botão de reset no XIAO ESP32S3 para tentar fazer o programa voltar a rodar. Se o problema persistir, verifique novamente o seu programa e leia os métodos fornecidos em **[BootLoader Mode](#Modo-BootLoader)** para restaurar o dispositivo.

### P2: Por que meu XIAO apresenta o problema de não ficar nivelado nos cantos arredondados? Isso é um problema de qualidade?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/corners.png" style={{width:500, height:'auto'}}/></div>

Antes de tudo, deve-se observar que isso não é um problema de qualidade e não afetará o funcionamento normal do XIAO.

O XIAO ESP32S3 é o mais complexo de todos os XIAO devido ao seu alto nível de integração, e a placa de circuito impresso (PCB) precisa ser montada em conjunto na produção de fábrica. Devido ao alto nível de integração, a conexão da placa de emenda só pode ser colocada nos quatro cantos arredondados, o que leva ao problema de cantos arredondados irregulares mostrado na imagem. Tentaremos aprimorar o processo para garantir que esse problema seja resolvido nas produções subsequentes.

### P3: Como gravar no XIAO ESP32S3 o firmware de fábrica fornecido na seção de recursos?

O script fornecido na seção de recursos oferece suporte ao Windows. Após baixar o arquivo zip, você encontrará os seguintes arquivos:

<Tabs>
<TabItem value="normal" label="Firmware de fábrica do XIAO ESP32S3" >

```shell
.
├── boot_app0.bin
├── esp32_flasher.py
├── esptool.exe
├── project_config.json
├── xiao_esp32s3_firmware.bin
├── xiao_esp32s3_firmware.bootloader.bin
├── xiao_esp32s3_firmware.partitions.bin
└── xiao_esp32s3_firmware_win.bat
```

</TabItem>
<TabItem value="sense" label="Firmware de fábrica do XIAO ESP32S3 Sense" >

```shell
.
├── CameraWebServer.bin
├── boot_app0.bin
├── bootloader.bin
├── esp32_flasher.py
├── esptool.exe
├── partition-table.bin
├── project_config.json
└── xiao_esp32s3_sense_firmware_win.bat
```

</TabItem>
</Tabs>

Para gravar o firmware, basta executar o arquivo `.bat` apropriado. Se o processo de gravação falhar, copie a linha de comando exibida no prompt e execute-a manualmente no terminal em que os arquivos estão localizados.

## Recursos

### Para Seeed Studio XIAO ESP32-S3

**Projeto de Hardware**
- **📄[Datasheet]** [Espressif ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[Schematic]** [Esquemático do XIAO ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH_260115.pdf )
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto KiCad do XIAO ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_V1.3_SCH&PCB_260115.7z )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Planilha de Pinagem do XIAO ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO ESP32-S3 em DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf )
- **🗃️[Modelo 3D]** [Modelo 3D do XIAO ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip )

**Software e Ferramentas**
- **🗃️[Firmware de Fábrica]** [Firmware de Fábrica do XIAO ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip )

### Para Seeed Studio XIAO ESP32-S3 Sense

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->
**Projeto de Hardware**
- **📄[Datasheet]** [Espressif ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[Schematic]** [Esquemático do XIAO ESP32-S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/new-XIAO%20ESP32S3%20Sense_v1.3_SCH_260210(1).pdf)
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto KiCad do XIAO ESP32-S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/new-XIAO%20ESP32S3%20Sense_v1.3_SCH&PCB_260210(1).zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Planilha de Pinagem do XIAO ESP32-S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO ESP32-S3 Sense em DXF (Topo)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf )
- **📄[Dimensões 2D]** [Dimensões do XIAO ESP32-S3 Sense em DXF (Base)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf )
- **🗃️[Modelo 3D]** [Modelo 3D do XIAO ESP32-S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip )
- **📄[Modelo 3D]** [Modelo 3D de Impressão 3D da Caixa Roxa do XIAO ESP32-S3 Sense (Topo)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp )
- **📄[Modelo 3D]** [Modelo 3D de Impressão 3D da Caixa Roxa do XIAO ESP32-S3 Sense (Base)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp )

**Software e Ferramentas**
- **🗃️[Firmware de Fábrica]** [Firmware de Fábrica do XIAO ESP32-S3 Sense](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-firmware-20240814.zip )

### Para Seeed Studio XIAO ESP32-S3 Plus

**Projeto de Hardware**
- **📄[Datasheet]** [Espressif ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf )
- **📄[Schematic]** [Esquemático do XIAO ESP32-S3 Plus](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_SCH_260115.pdf )
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto KiCad do XIAO ESP32-S3 Plus](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.1_KiCad_260115.zip )
  - [Projeto KiCad da Base XIAO Plus (com terminais inferiores expostos)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [Projeto KiCad da Base XIAO Plus (sem terminais inferiores expostos)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Planilha de Pinagem do XIAO ESP32-S3 Plus](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO ESP32-S3 Plus em DXF (Topo)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf )
- **📄[Dimensões 2D]** [Dimensões do XIAO ESP32-S3 Plus em DXF (Base)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf )
- **🔗[Modelo 3D]** [Modelo 3D do XIAO ESP32-S3 Plus](https://grabcad.com/library/seeed-studio-xiao-esp32s3-plus-1/files )

### Para Seeed Studio XIAO ESP32-S3 Sense Camera

**Projeto de Hardware**
- **[OV3660]** 
  - **📄[Datasheet]** [Especificação do Módulo de Câmera OV3660](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/OV3660_Camera_Module_Specification.pdf)
  - **📄[Datasheet]** [Datasheet do Sensor CMOS OV3660](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV3660_datasheet.pdf )
- **[OV5640]** 
  - **📄[Datasheet]** [Especificação do Módulo de Câmera OV5640](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/new-res/OV5640_Camera_Module_Specification.pdf )
  - **📄[Datasheet]** [Datasheet do Sensor CMOS OV5640](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV5640_datasheet.pdf )
- **[OV2640]** 
  - **📄[Datasheet]** [Datasheet do Sensor CMOS OV2640](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/OV2640_datasheet.pdf )
## Recursos do Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Grande Potência, Placa Pequena Dominando Arduino e TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

### Outros

- **[STP]** [XIAO ESP32S3 Sense design da caixa (parte superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense design da caixa (parte inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

*O restante do material open source está sendo compilado, portanto fique ligado!*

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
