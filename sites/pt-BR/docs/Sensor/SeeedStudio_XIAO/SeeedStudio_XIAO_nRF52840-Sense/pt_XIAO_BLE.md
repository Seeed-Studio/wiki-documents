---
description: Introdução ao Seeed Studio XIAO nRF52840 Series
title: Introdução ao Seeed Studio XIAO nRF52840 Series
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /XIAO_BLE
sku: 102010448, 102010469, 102010632, 102010631, 102010672, 102010694, 101991463, 101991465
last_update:
  date: 9/2/2026
  author: Clara
createdAt: '2023-01-16'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/pt-br/XIAO_BLE/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução ao Seeed Studio XIAO nRF52840 Series

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    <tr>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th>XIAO nRF52840 Plus</th>
      <th>XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> Adquira agora 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

Como o primeiro produto sem fio da família Seeed Studio XIAO, o **Seeed Studio XIAO nRF52840** está equipado com um poderoso **Nordic nRF52840 MCU** que integra conectividade **Bluetooth 5.0**. Ao mesmo tempo, ele possui um **fator de forma pequeno e requintado** que pode ser usado para dispositivos vestíveis e projetos de Internet das Coisas. O **design montável em superfície de um único lado** e a **antena Bluetooth** integrada podem facilitar muito a implantação rápida de projetos de IoT.

Além disso, há uma versão avançada desta placa, o **Seeed  Studio XIAO nRF52840 Sense**. Ela é integrada com dois sensores extras onboard. Um deles é um **microfone digital de Modulação por Densidade de Pulsos (PDM)**. Ele pode receber dados de áudio em tempo real, o que permite seu uso para reconhecimento de áudio. O outro é uma **Unidade de Medição Inercial (IMU) de 6 eixos**, e essa IMU pode ser muito útil em projetos de TinyML, como reconhecimento de gestos. Esses sensores onboard proporcionam grande conveniência para os usuários, enquanto a placa é ultracompacta.

Os recém-atualizados **XIAO nRF52840 Plus e XIAO nRF52840 Sense Plus** oferecem aumentos consideráveis em funcionalidade e usabilidade. O número de pinos multifuncionais foi aumentado para **20**, recursos **I2S** e **SPI** foram adicionados para suportar projetos mais complexos, pinos **NFC** foram expostos para facilitar a integração em aplicações de IoT e de cartões inteligentes, e o pino **BAT** foi reposicionado para melhor conveniência de soldagem, resultando em uma experiência de hardware mais amigável ao usuário.

Comparado ao Seeed Studio XIAO RP2040, o Seeed Studio XIAO nRF52840 contém **interfaces mais ricas**. A primeira coisa a notar é que a **interface de Comunicação por Proximidade (NFC)** é funcional na placa. Em segundo lugar, há um pequeno **botão de reset** ao lado da interface Type-C. Do outro lado, há um **LED 3 em 1 (LED do usuário)** juntamente com um **LED de carga** para indicar o status de carregamento quando uma bateria está conectada. Existem **11 E/S digitais** que podem ser usadas como **pinos PWM** e **6 E/S analógicas** que podem ser usadas como **pinos ADC**. Ele suporta as três interfaces seriais comuns, como **UART, I2C e SPI**. Assim como o Seeed Studio XIAO RP2040, possui uma **flash onboard de 2 MB**, o que significa que também pode ser programado usando **Arduino, MicroPython, CircuitPython ou outras linguagens de programação**.

O Seeed Studio XIAO nRF52840 Sense é compatível com a placa de expansão Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- Capacidades sem fio poderosas: Bluetooth 5.0 com antena onboard
- CPU poderosa: Nordic nRF52840, processador ARM® Cortex®-M4 de 32 bits com FPU, 64 MHz
- Ultra baixo consumo de energia: o consumo em standby é inferior a 5μA
- Chip de carregamento de bateria: suporta gerenciamento de carga e descarga de bateria de lítio
- Flash onboard de 2 MB
- Microfone PDM onboard (apenas no Seeed Studio XIAO nRF52840 Sense)
- IMU LSM6DS3TR-C de 6 eixos onboard (apenas no Seeed Studio XIAO nRF52840 Sense)
- Tamanho ultrapequeno: 21 x 17,8 mm, fator de forma clássico da série Seeed Studio XIAO para dispositivos vestíveis
- Interfaces ricas: 1xUART, 1xI2C, 1xSPI, 1xNFC, 1xSWD, 11xGPIO(PWM), 6xADC no XIAO nRF52840 (Sense); e 2xUART, 1xI2C, 2xSPI, 1xI2S, 1xNFC, 1xSWD, 18xGPIO(PWM), 6xADC no XIAO nRF52840 (Sense) Plus
- Componentes em um único lado, design para montagem em superfície

## Comparação de especificações

<div class="table-center">
 <table align="center">
  <tr>
      <th>Item</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Plus</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
      <th>Processador</th>
      <td colspan="4" align="center">Nordic nRF52840, processador ARM® Cortex®-M4 de 32 bits com FPU, 64 MHz</td>
  </tr>
  <tr>
      <th>Conectividade sem fio</th>
      <td colspan="4" align="center">Bluetooth Low Energy 5.4/
Bluetooth Mesh/NFC</td>
  </tr>
  <tr>
      <th>Memória</th>
      <td colspan="4" align="center">256 KB RAM,1MB Flash 2MB onboard Flash</td>
  </tr>
  <tr>
      <th>Sensores integrados</th>
      <td align="center">N/A</td>
      <td align="center">IMU de 6 DOF (LSM6DS3TR-C), Microfone PDM</td>
      <td align="center">N/A</td>
      <td align="center">IMU de 6 DOF (LSM6DS3TR-C), Microfone PDM</td>
  </tr>
  <tr>
      <th>Interfaces</th>
      <td colspan="2" align="center">1xI2C, 1xUART, 1xSPI</td>
      <td colspan="2" align="center">1xI2C, 2xUART, 2xSPI, 1xI2S</td>
  </tr>
  <tr>
      <th>Pinos PWM/Analógicos </th>
      <td colspan="2" align="center">11/6</td>
      <td colspan="2" align="center">20/6</td>
  </tr>
  <tr>
      <th>Botões onboard</th>
      <td colspan="4" align="center">Botão de reset</td>
  </tr>
  <tr>
      <th>LEDs onboard</th>
      <td colspan="4" align="center">LED 3 em 1/ LED de carga</td>
  </tr>
  <tr>
      <th>Chip de carga de bateria</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>Linguagens de programação</th>
      <td colspan="4" align="center">Arduino/ MicroPython/ CircuitPython</td>
  </tr>
  </table>
</div>

## Visão geral de hardware

<Tabs>
<TabItem value="nRF52840" label="XIAO nRF52840" default>

### XIAO nRF52840 - Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### XIAO nRF52840 - Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pinos**

| Pino XIAO               | Função           | Pino do chip  | Descrição                                           | Nome Arduino |
| :---------------------: | :-------------: | :-------:     | :-------------------------------------------------- | :-------:    |
| 5V                      | VBUS             |               | Entrada/Saída de energia                            |              |
| GND                     |                  |               |                                                      |              |
| 3V3                     | 3V3_OUT          |               | Saída de energia                                    |              |
| D0                      | Analógico        | P0.02         | GPIO, AIN0                                          | 0            |
| D1                      | Analógico        | P0.03         | GPIO, AIN1                                          | 1            |
| D2                      | Analógico        | P0.28         | GPIO, AIN4                                          | 2            |
| D3                      | Analógico        | P0.29         | GPIO, AIN5                                          | 3            |
| D4                      | Analógico, SDA   | P0.04         | GPIO, dados I2C, AIN2                               | 4            |
| D5                      | Analógico, SCL   | P0.05         | GPIO, clock I2C, AIN3                               | 5            |
| D6                      | TX               | P1.11         | GPIO, transmissão UART                              | 7/6          |
| D7                      | RX               | P1.12         | GPIO, recepção UART                                 | 8/7          |
| D8                      | SPI_SCK          | P1.13         | GPIO, clock SPI                                     | 9/8          |
| D9                      | SPI_MISO         | P1.14         | GPIO, dados SPI                                     | 10/9         |
| D10                     | SPI_MOSI         | P1.15         | GPIO, dados SPI                                     | 11/10        |
| NFC1                    |                  | P0.09         | NFC                                                 |              |
| NFC2                    |                  | P0.10         | NFC                                                 |              |
| Reset                   |                  | P0.18         | RESET                                               |              |
| ADC_BAT                 | READ_BAT_ENABLE  | P0.14         | Controle de habilitação para leitura da tensão da bateria |              |
| RF Switch Port Select   |                  | P2.05         | Alternar antena onboard                             |              |
| RF Switch Power         |                  | P2.03         | Alimentação                                         |              |
| CHARGE_LED              |                  | P0.17         | CHG-LED_Red                                         |              |
| USER_LED_R              |                  | P0.26         | Pino do LED RGB vermelho controlado pelo usuário    | 11           |
| USER_LED_B              |                  | P0.06         | Pino do LED RGB azul controlado pelo usuário        | 13/12        |
| USER_LED_G              |                  | P0.30         | Pino do LED RGB verde controlado pelo usuário       | 12/13        |

</TabItem>
<TabItem value="nRF52840Plus" label="XIAO nRF52840 Plus">

### Frente do XIAO nRF52840 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso do XIAO nRF52840 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pinos**

| Pino XIAO               | Função              | Pino do chip | Funções alternativas | Descrição                               | Nome Arduino |
| :---------------------: | :-----------------: | :-------:    | :----------------:   | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                |              |                      | Entrada/Saída de energia                |              |
| GND                     |                     |              |                      |                                          |              |
| 3V3                     | 3V3_OUT             |              |                      | Saída de energia                        |              |
| D0                      | Analógico           | P0.02        |                      | GPIO, ADC                               | 0            |
| D1                      | Analógico           | P0.03        |                      | GPIO, ADC                               | 1            |
| D2                      | Analógico           | P0.28        |                      | GPIO, ADC                               | 2            |
| D3                      | Analógico           | P0.29        |                      | GPIO, ADC                               | 3            |
| D4                      | Analógico, SDA      | P0.04        |                      | GPIO, dados I2C, ADC                    | 4            |
| D5                      | Analógico, SCL      | P0.05        |                      | GPIO, clock I2C, ADC                    | 5            |
| D6                      | TX                  | P1.11        |                      | GPIO, transmissão UART                  | 7/6          |
| D7                      | RX                  | P1.12        |                      | GPIO, recepção UART                     | 8/7          |
| D8                      | SPI_SCK             | P1.13        |                      | GPIO, clock SPI                         | 9/8          |
| D9                      | SPI_MISO            | P1.14        |                      | GPIO, dados SPI                         | 10/9         |
| D10                     | SPI_MOSI            | P1.15        |                      | GPIO, dados SPI                         | 11/10        |
| D11                     | I2S_SD              | P0.15        |                      | GPIO, I2S, ADC                          |              |
| D12                     | I2S_SCK             | P0.19        |                      | GPIO, I2S, ADC                          |              |
| D13                     | I2S_WS              | P1.01        |                      | GPIO, I2S, ADC                          |              |
| D14                     | RX1                 | P0.09        | NFC1                 | GPIO, recepção UART, ADC                |              |
| D15                     | TX1                 | P0.10        | NFC2                 | GPIO, transmissão UART, ADC             |              |
| D16                     | AIN7_BAT            | P0.31        |                      | Pino de leitura ADC da tensão da bateria |              |
| D17                     | SCK1                | P1.03        |                      | GPIO, SPI                               |              |
| D18                     | MISO1               | P1.05        |                      | GPIO, SPI                               |              |
| D19                     | MOSI1               | P1.07        |                      | GPIO, SPI                               |              |
| ADC_BAT                 | READ_BAT_ENABLE     | P0.14        |                      | Controle de habilitação para leitura da tensão da bateria |              |
| Reset                   |                     | P0.18        |                      | RESET                                   |              |
| RF Switch Port Select   |                     | P2.05        |                      | Alternar antena onboard                 |              |
| RF Switch Power         |                     | P2.03        |                      | Energia                                 |              |
| CHARGE_LED              |                     | P0.17        |                      | CHG-LED_Red                             |              |
| USER_LED_R              |                     | P0.26        |                      | Pino de LED RGB vermelho controlado pelo usuário | 11           |
| USER_LED_B              |                     | P0.06        |                      | Pino de LED RGB azul controlado pelo usuário | 13/12        |
| USER_LED_G              |                     | P0.30        |                      | Pino de LED RGB verde controlado pelo usuário | 12/13        |

</TabItem>
<TabItem value="nRF52840Sense" label="XIAO nRF52840 Sense">

### Frente do XIAO nRF52840 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso do XIAO nRF52840 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pinos**

| Pino XIAO               | Função          | Pino do chip  | Descrição                                           | Nome Arduino |
| :---------------------: | :-------------: | :-------:     | :------------------------------------------------- | :-------:    |
| 5V                      | VBUS            |               | Entrada/Saída de energia                           |              |
| GND                     |                 |               |                                                     |              |
| 3V3                     | 3V3_OUT         |               | Saída de energia                                   |              |
| D0                      | Analógico       | P0.02         | GPIO, AIN0                                         | 0            |
| D1                      | Analógico       | P0.03         | GPIO, AIN1                                         | 1            |
| D2                      | Analógico       | P0.28         | GPIO, AIN4                                         | 2            |
| D3                      | Analógico       | P0.29         | GPIO, AIN5                                         | 3            |
| D4                      | Analógico, SDA  | P0.04         | GPIO, dados I2C, AIN2                              | 4            |
| D5                      | Analógico, SCL  | P0.05         | GPIO, clock I2C, AIN3                              | 5            |
| D6                      | TX              | P1.11         | GPIO, transmissão UART                             | 7/6          |
| D7                      | RX              | P1.12         | GPIO, recepção UART                                | 8/7          |
| D8                      | SPI_SCK         | P1.13         | GPIO, clock SPI                                    | 9/8          |
| D9                      | SPI_MISO        | P1.14         | GPIO, dados SPI                                    | 10/9         |
| D10                     | SPI_MOSI        | P1.15         | GPIO, dados SPI                                    | 11/10        |
| NFC1                    |                 | P0.09         | NFC                                                 |              |
| NFC2                    |                 | P0.10         | NFC                                                 |              |
| Reset                   |                 | P0.18         | RESET                                               |              |
| ADC_BAT                 | READ_BAT_ENABLE | P0.14         | Controle de habilitação para leitura da tensão da bateria |              |
| 6 DOF IMU_PWR           |                 | P1.08         | Interruptor de energia do módulo 6D                |              |
| 6 DOF IMU__INT1         |                 | P0.11         | Pino de sinal de interrupção do módulo 6D          |              |
| PDM Microphone_DATA     |                 | P0.16         | Pino de entrada de dados de áudio PDM              |              |
| PDM Microphone_CLK      |                 | P1.00         | Pino de saída de clock de áudio PDM                |              |
| RF Switch Port Select   |                 | P2.05         | Alternar antena onboard                            |              |
| RF Switch Power         |                 | P2.03         | Energia                                             |              |
| CHARGE_LED              |                 | P0.17         | CHG-LED_Red                                         |              |
| USER_LED_R              |                 | P0.26         | Pino de LED RGB vermelho controlado pelo usuário   | 11           |
| USER_LED_B              |                 | P0.06         | Pino de LED RGB azul controlado pelo usuário       | 13/12        |
| USER_LED_G              |                 | P0.30         | Pino de LED RGB verde controlado pelo usuário      | 12/13        |

</TabItem>
<TabItem value="nRF52840SensePlus" label="XIAO nRF52840 Sense Plus">

### Frente do XIAO nRF52840 Sense Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso do XIAO nRF52840 Sense Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_Sense_Plus_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

**Mapa de pinos**

| Pino XIAO               | Função              | Pino do chip | Funções alternativas | Descrição                                | Nome Arduino |
| :---------------------: | :-----------------: | :-------: | :----------------: | :-------------------------------------- | :-------:    |
| 5V                      | VBUS                 |           |                    | Entrada/Saída de energia                |              |
| GND                     |                      |           |                    |                                          |              |
| 3V3                     | 3V3_OUT              |           |                    | Saída de energia                        |              |
| D0                      | Analógico           | P0.02     |                    | GPIO, ADC                                | 0            |
| D1                      | Analógico           | P0.03     |                    | GPIO, ADC                                | 1            |
| D2                      | Analógico           | P0.28     |                    | GPIO, ADC                                | 2            |
| D3                      | Analógico           | P0.29     |                    | GPIO, ADC                                | 3            |
| D4                      | Analógico, SDA       | P0.04     |                    | GPIO, dados I2C, ADC                     | 4            |
| D5                      | Analógico, SCL       | P0.05     |                    | GPIO, clock I2C, ADC                     | 5            |
| D6                      | TX                   | P1.11     |                    | GPIO, transmissão UART                   | 7/6          |
| D7                      | RX                   | P1.12     |                    | GPIO, recepção UART                      | 8/7          |
| D8                      | SPI_SCK              | P1.13     |                    | GPIO, clock SPI                          | 9/8          |
| D9                      | SPI_MISO             | P1.14     |                    | GPIO, dados SPI                          | 10/9         |
| D10                     | SPI_MOSI             | P1.15     |                    | GPIO, dados SPI                          | 11/10        |
| D11                     | I2S_SD               | P0.15     |                    | GPIO, I2S, ADC                           |              |
| D12                     | I2S_SCK              | P0.19     |                    | GPIO, I2S, ADC                           |              |
| D13                     | I2S_WS               | P1.01     |                    | GPIO, I2S, ADC                           |              |
| D14                     | RX1                  | P0.09     | NFC1               | GPIO, recepção UART, ADC                 |              |
| D15                     | TX1                  | P0.10     | NFC2               | GPIO, transmissão UART, ADC              |              |
| D16                     | AIN7_BAT             | P0.31     |                    | Pino de leitura ADC da tensão da bateria |              |
| D17                     | SCK1                 | P1.03     |                    | GPIO, SPI                                |              |
| D18                     | MISO1                | P1.05     |                    | GPIO, SPI                                |              |
| D19                     | MOSI1                | P1.07     |                    | GPIO, SPI                                |              |
| ADC_BAT                 | READ_BAT_ENABLE      | P0.14     |                    | Controle de habilitação para leitura da tensão da bateria |              |
| 6 DOF IMU_PWR           |                      | P1.08     |                    | Interruptor de energia do módulo 6D      |              |
| 6 DOF IMU__INT1         |                      | P0.11     |                    | Pino de sinal de interrupção do módulo 6D |              |
| PDM Microphone_DATA     |                      | P0.16     |                    | Pino de entrada de dados de áudio PDM    |              |
| PDM Microphone_CLK      |                      | P1.00     |                    | Pino de saída de clock de áudio PDM      |              |
| Reset                   |                      | P0.18     |                    | RESET                                    |              |
| RF Switch Port Select   |                      | P2.05     |                    | Alternar antena onboard                  |              |
| RF Switch Power         |                      | P2.03     |                    | Energia                                  |              |
| CHARGE_LED              |                      | P0.17     |                    | CHG-LED_Red                              |              |
| USER_LED_R              |                      | P0.26     |                    | Pino de LED RGB vermelho controlado pelo usuário | 11           |
| USER_LED_B              |                      | P0.06     |                    | Pino de LED RGB azul controlado pelo usuário | 13/12        |
| USER_LED_G              |                      | P0.30     |                    | Pino de LED RGB verde controlado pelo usuário | 12/13        |

</TabItem>
</Tabs>


## Duas bibliotecas Arduino

Seeed Studio XIAO nRF52840 reúne muitas funções em uma única placa minúscula e às vezes pode não executar o melhor delas. Portanto, a Seeed publicou duas bibliotecas Arduino para **maximizar a potência de cada função**. Portanto:

- É recomendado usar a biblioteca `Seeed nRF52 Boards` se você quiser aplicar a **função Bluetooth** e a "**função de baixo consumo de energia**".
- É recomendado usar a biblioteca `Seeed nRF52 mbed-enabled Boards` se você quiser usá-la em **aplicações de Machine Learning embarcadas** ou aplicar a "**função avançada de IMU & PDM**".
- Ambas as bibliotecas oferecem ótimo suporte quando se trata do uso básico, como **LED, Digital, Analógico, Serial, I2C, SPI**.

A definição de pinos suportada por essas duas bibliotecas pode ser um pouco diferente e a Seeed continuará atualizando o wiki até que fique claro.

:::tip

1. Se você usar o pacote onboard de Seeed nRF52 Boards, a função Serial pode não compilar. A solução é adicionar a linha `#include <Adafruit_TinyUSB.h>` no seu código. Você pode baixar este pacote em: https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. Se você preferir uma abordagem mais simples, pode escolher Seeed nRF52 mbed-enabled Boards desde o início. Ela oferece suporte à compilação da função Serial sem a necessidade de modificações adicionais.

:::

## Introdução

Primeiro, vamos conectar o Seeed Studio XIAO nRF52840 (Sense) ao computador e enviar um código simples a partir da IDE Arduino para verificar se a placa está funcionando bem.

### Configuração de hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) ou [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

:::tip
Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir o [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
Conecte o Seeed Studio XIAO nRF52840 (Sense) ao seu computador por meio de um cabo USB Tipo-C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### Configuração de software

- **Passo 1.** Baixe e instale a versão mais recente da IDE Arduino de acordo com o seu sistema operacional

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **Passo 2.** Inicie o aplicativo Arduino

- **Passo 3.** Adicione o pacote de placa Seeed Studio XIAO nRF52840 (Sense) à sua IDE Arduino

Navegue até **File > Preferences**, e preencha **"Additional Boards Manager URLs"** com a URL abaixo:
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width="700" height="auto" /></p>

Navegue até **Tools > Board > Boards Manager...**, digite a palavra-chave "**seeed nrf52**" na caixa de pesquisa, selecione a versão mais recente da placa desejada e instale-a. Você pode instalar ambas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **Passo 4.** Selecione sua placa e porta

**Placa**

Após instalar o pacote de placa, navegue até **Tools > Board** e escolha a placa desejada, continue selecionando "**Seeed XIAO nRF52840 Sense**". Agora terminamos a configuração do Seeed Studio XIAO nRF52840 (Sense) para a IDE Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**Porta**

Navegue até **Tools > Port** e selecione o nome da porta serial do Seeed Studio XIAO nRF52840 (Sense) conectado. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware). A porta serial do Seeed Studio XIAO nRF52840 (Sense) conectado geralmente contém parênteses em que está escrito **Seeed Studio XIAO nRF52840** para **Seeed Studio XIAO nRF52840** ou **Seeed Studio XIAO nRF52840 Sense** para **Seeed Studio XIAO nRF52840 Sense**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **Passo 5.** Navegue até **File > Examples > 01.Basics > Blink** para abrir o exemplo **Blink**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **Passo 6.** Clique no botão **Upload** para enviar o código de exemplo Blink para a placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

Depois de enviado, você verá o LED vermelho embutido piscando com um atraso de 1 segundo entre cada piscada. Isso significa que a conexão foi bem-sucedida e agora você pode explorar mais projetos com o Seeed Studio XIAO nRF52840 (Sense)!

## Brincando com o LED 3 em 1 embutido

O Seeed Studio XIAO nRF52840 (Sense) possui um **LED 3 em 1 onboard** que é programável pelo usuário. Agora você aprenderá como controlar as cores RGB uma a uma usando o Arduino!

Primeiro você precisa entender que o comportamento deste LED não é o usual quando controlado por código. O **LED acende** quando fornecemos um **sinal LOW** e ele **apaga** quando fornecemos um **sinal HIGH**. Isso acontece porque este LED é controlado por um ânodo comum e só acenderá com um sinal de nível baixo.

Um código de exemplo seria:

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

Aqui, mesmo que **HIGH** seja usado, o LED ficará **apagado**. Você precisa substituir **HIGH** por **LOW** para **acender** o LED.

Consulte o seguinte mapeamento de pinos dos LEDs e use-os em seus códigos:

- LED vermelho = LED_BUILTIN ou LED_RED
- LED azul = LED_BLUE
- LED verde = LED_GREEN

## Verificação do consumo de energia

O Seeed Studio XIAO nRF52840 possui baixo consumo de energia e aqui fornecemos um método para verificá-lo. É altamente recomendado usar a biblioteca `Seeed nRF52 Boards` aqui.

- **Passo 1.** Use o gravador **JLink** para gravar o [firmware do bootloader](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) para o Seeed Studio XIAO nRF52840 (Sense).

:::note
Se você estiver usando o firmware de fábrica do Seeed Studio XIAO nRF52840 ou nunca tiver feito alterações no firmware do Seeed Studio XIAO nRF52840, você pode pular esta etapa.
:::

- **Passo 2.** Use a biblioteca `Seeed nRF52 Boards` aqui.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **Passo 3.** Envie o demo deep_sleep aqui e execute-o com o **Arduino**

```cpp
// The MIT License (MIT)
// Copyright (c) 2019 Ha Thach for Adafruit Industries

#include "SdFat.h"
#include "Adafruit_SPIFlash.h"

// Uncomment to run example with custom SPI and SS e.g with FRAM breakout
// #define CUSTOM_CS   A5
// #define CUSTOM_SPI  SPI

#if defined(CUSTOM_CS) && defined(CUSTOM_SPI)
  Adafruit_FlashTransport_SPI flashTransport(CUSTOM_CS, CUSTOM_SPI);

#elif defined(ARDUINO_ARCH_ESP32)
  // ESP32 use same flash device that store code.
  // Therefore there is no need to specify the SPI and SS
  Adafruit_FlashTransport_ESP32 flashTransport;

#else
  // On-board external flash (QSPI or SPI) macros should already
  // defined in your board variant if supported
  // - EXTERNAL_FLASH_USE_QSPI
  // - EXTERNAL_FLASH_USE_CS/EXTERNAL_FLASH_USE_SPI
  #if defined(EXTERNAL_FLASH_USE_QSPI)
    Adafruit_FlashTransport_QSPI flashTransport;

  #elif defined(EXTERNAL_FLASH_USE_SPI)
    Adafruit_FlashTransport_SPI flashTransport(EXTERNAL_FLASH_USE_CS, EXTERNAL_FLASH_USE_SPI);

  #else
    #error No QSPI/SPI flash are defined on your board variant.h !
  #endif
#endif

Adafruit_SPIFlash flash(&flashTransport);


/*  If you want to use a specific flash device, for example for a custom built board, first look for it in Adafruit_SPIFlash\src\flash_devices.h
 *  If it isn't in there you need to create your own definition like the W25Q80DLX_EXAMPLE example below.
 *  These definitions need to be edited to match information on the data sheet of the flash device that you want to use.
 *  If you are not sure what the manufacture ID, memory type and capacity values should be, try running the sketch anyway and look at the serial output
 *  The flash device will report these values to you as a single hexadecimal value (the JDEC ID)
 *  For example, the first device on the list - the W25Q80DLX - will report its JDEC ID as 0xef4014, which is made of these three values:
 *  manufacturer_id = 0xef
 *  memory_type     = 0x40
 *  capacity        = 0x14
 *  With this macro properly defined you can then create an array of device definitions as shown below, this can include any from the list of devices in flash_devices.h, and any you define yourself here
 *  You need to update the variable on line 71 to reflect the number of items in the array
 *  You also need to uncomment line 84 and comment out line 81 so this array will be passed to the flash memory driver. 
 */
//Example of a user defined flash memory device:
//#define W25Q80DLX_EXAMPLE                                                               \
//  {                                                                            \
//    .total_size = (1 << 20), /* 1 MiB */                                       \
//        .start_up_time_us = 5000, .manufacturer_id = 0xef,                     \
//    .memory_type = 0x40, .capacity = 0x14, .max_clock_speed_mhz = 80,         \
//    .quad_enable_bit_mask = 0x02, .has_sector_protection = false,              \
//    .supports_fast_read = true, .supports_qspi = true,                         \
//    .supports_qspi_writes = false, .write_status_register_split = false,       \
//    .single_status_byte = false, .is_fram = false,                             \
//  }

/*
 * Create an array of data structures and fill it with the settings we defined above.
 * We are using two devices, but more can be added if you want.
 */
//static const SPIFlash_Device_t my_flash_devices[] = {
//    W25Q80DLX_EXAMPLE,
//};
/*
 * Specify the number of different devices that are listed in the array we just created. If you add more devices to the array, update this value to match.
 */
//const int flashDevices = 1;


#include <bluefruit.h>

bool deepPowerDown(Adafruit_SPIFlash& flash, Adafruit_FlashTransport& transport) {
  uint32_t id_before = flash.getJEDECID();

  transport.begin();
  transport.runCommand(0xB9);  // SPI deep power-down command
  delay(10);

  uint32_t id_after = flash.getJEDECID();

  return (id_after == 0xFFFFFF || id_after == 0xFFFFFFFF);
}

void setup() {
  flash.begin();
  Bluefruit.begin();

  if (!deepPowerDown(flash, flashTransport)) {
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW);
    while (1) {
      yield();
    }
  }

  flash.end();

  sd_power_system_off();
}

void loop() {
  // nothing to do
}
```

:::tip
Aqui, gostaríamos de expressar nossos agradecimentos especiais ao autor por fornecer o código → ***daCoder*** ←
:::

**Se você quiser saber mais detalhes sobre este exemplo, clique [aqui](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)**

## Corrente de carregamento da bateria

A corrente de carregamento da bateria é selecionável entre 50mA ou 100mA, onde você pode definir o **Pino13** como alto ou baixo para alterá-la para 50mA ou 100mA. A corrente de carregamento baixa é no modo de entrada configurado como NÍVEL ALTO e a corrente de carregamento alta é no modo de saída configurado como NÍVEL BAIXO.

**Baixa corrente de carregamento**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**Alta corrente de carregamento**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## Acessar os pinos SWD para depuração e regravação do bootloader

**Hardware necessário**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**Software necessário**

É necessário baixar o software [Segger](https://www.segger.com/downloads/jlink/) no site.

- **Passo 1.** Use o Jlink para conectar os pinos abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **Passo 2.** Inicie o J-Flash e pesquise por nRF52840, criando um novo projeto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **Passo 3.** Clique em "Target" e depois selecione "Connect".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **Passo 4.** Arraste o arquivo bin ou o [arquivo hex](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) para o software. Em seguida, pressione F4 e F5 nessa ordem. A regravação estará concluída.

## FAQ

### P1: Meu Arduino IDE trava ao enviar código para a placa

Você pode primeiro tentar **resetar** a placa clicando uma vez no "Reset Button". Se isso não funcionar, clique rapidamente duas vezes para entrar no **modo bootloader**. Se isso também não funcionar, desconecte a placa do PC e conecte-a novamente.

### P2: Minha placa não está aparecendo como dispositivo serial no Arduino IDE

Você pode primeiro tentar **resetar** a placa clicando uma vez no "Reset Button". Se isso não funcionar, clique rapidamente duas vezes para entrar no **modo bootloader**.

### P3: Quais são as considerações ao usar o XIAO nRF52840 (Sense) para carregamento de bateria?

No circuito de bateria do XIAO nRF52840 Sense, o **P0.14** é o pino de controle **READ_BAT_ENABLE** e o **P0.31** é o pino de leitura ADC **AIN7_BAT** para medir a tensão da bateria.

Quando P0.14 é configurado como HIGH, o caminho de leitura da tensão da bateria é desativado e P0.31 pode atingir o limite de tensão de entrada de 3,6V, representando risco de danificar o pino P0.31. Para ler a tensão da bateria com segurança, configure P0.14 como LOW (para habilitar o caminho de leitura) e então leia o valor ADC em P0.31.

Recomendamos que os usuários mantenham sempre o P0.14 configurado como LOW ao ler a tensão da bateria e evitem configurar o P0.14 como HIGH durante o carregamento da bateria.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### P4: Como a luz verde se comporta quando ligada?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB Schematic" width="120" height="auto" /></p>

O pino `P0.17` é usado para controlar o comportamento da luz indicadora verde, indicando o status de carregamento:

- Nível baixo: quando o **carregamento** está em andamento.
- Nível alto: quando a bateria **não está carregando** ou está **totalmente carregada**.

Quando está em nível baixo, o LED `RED_CHG` acenderá.

Para mais detalhes, consulte o datasheet do PMIC: [BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf) e o [datasheet do XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf).

## Recursos

### Seeed Studio XIAO nRF52840

**Projeto de Hardware**
- **📄[Datasheet]** [Datasheet Nordic nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[Datasheet]** [Datasheet Flash P25Q16H-UXH-IR](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[Schematic]** [Esquemático do XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Res/260828_XIAO_nRF52840.pdf)
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto KiCad do XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Res/260828_Seeed_Studio_XIAO_nRF52840_v1.2.zip)
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Folha de Pinagem do XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO nRF52840 em DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip )
- **📄[Dimensões 2D]** [Dados do Pad Inferior do XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )

### Seeed Studio XIAO nRF52840 Sense

**Projeto de Hardware**
- **📄[Datasheet]** [Datasheet Nordic nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[Datasheet]** [Datasheet Flash-P25Q16H-UXH-IR](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **📄[Datasheet]** [Datasheet do CI Carregador BQ25101](https://files.seeedstudio.com/wiki/XIAO-BLE/BQ25101.pdf )
- **📄[Datasheet]** [Datasheet do IMU LSM6DS3TR](https://files.seeedstudio.com/wiki/XIAO-BLE/ST_LSM6DS3TR_Datasheet.pdf )
- **📄[Datasheet]** [Datasheet do Microfone MSM261D3526H1CPM](https://files.seeedstudio.com/wiki/XIAO-BLE/mic-MSM261D3526H1CPM-ENG.pdf )
- **📄[Schematic]** [Esquemático do XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_PDF.pdf )
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto KiCad do XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840V1.1-KiCad-Project-260105.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Folha de Pinagem do XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO nRF52840 Sense em DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )
- **📄[Dimensões 2D]** [Dados do Pad Inferior do XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Bottom-pad-positioning.zip )
- **📄[Modelo 3D]** [Modelo 3D do XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip )

**Outros**
- **📄[Documento]** [Relatório de Teste de Distância de Comunicação BLE do XIAO nRF52840 Sense](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf )

### Seeed Studio XIAO nRF52840 (Sense) Plus

**Projeto de Hardware**
- **📄[Datasheet]** [Datasheet Nordic nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf )
- **📄[Datasheet]** [Datasheet Flash-P25Q16H-UXH-IR](https://files.seeedstudio.com/wiki/github_weiruanexample/Flash_P25Q16H-UXH-IR_Datasheet.pdf )
- **🗃️[Schematic]** [Esquemático do XIAO nRF52840 (Sense) Plus](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip )
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto KiCad do XIAO nRF52840 (Sense) Plus](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus.zip )
  - [Projeto KiCad da Base XIAO Plus (com derivação do pad inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip )
  - [Projeto KiCad da Base XIAO Plus (sem derivação do pad inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

**Projeto Mecânico**
- **🗃️[Dimensões 2D]** [Dimensões do XIAO nRF52840 Sense em DXF](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos do Curso

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
