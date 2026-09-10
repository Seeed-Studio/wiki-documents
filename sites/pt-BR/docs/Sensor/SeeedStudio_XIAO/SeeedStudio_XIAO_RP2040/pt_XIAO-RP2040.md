---
description: Visão geral
title: Introdução à Série Seeed Studio XIAO RP2040
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-45font_1.webp
slug: /XIAO-RP2040
sku: 102010428, 100045204
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/pt-br/XIAO-RP2040/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução à Série Seeed Studio XIAO RP2040

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RP2040</th>
   <th>Seeed Studio XIAO RP2040 Plus</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xiao-rp2040-plus-pre.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Plus-p-6932.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Visão geral

A série Seeed Studio XIAO RP2040 inclui o **XIAO RP2040** e o **XIAO RP2040 Plus**. Ambas as placas são alimentadas pelo mesmo microcontrolador Raspberry Pi RP2040, que possui um processador Arm Cortex-M0+ dual-core rodando a até 133 MHz e 264 KB de SRAM. Cada placa também inclui 2 MB de memória Flash onboard. Como resultado, elas oferecem o mesmo desempenho de processamento central e compartilham o mesmo ecossistema de software do RP2040.

As principais diferenças entre as duas placas são o número de GPIOs expostos, as conexões periféricas disponíveis e os recursos de gerenciamento de energia onboard.

O XIAO RP2040 padrão usa o footprint XIAO comum de 14 pinos, composto por 11 pinos GPIO e três pinos de alimentação. Seus 11 pinos de E/S digitais são compatíveis com PWM, sendo que quatro também suportam entrada analógica. A placa fornece interfaces I2C, UART, SPI e SWD em um formato compacto de 21 × 17,8 mm.

O XIAO RP2040 Plus mantém o mesmo layout XIAO comum de 14 pinos e adiciona 15 pads de solda GPIO na parte traseira e nas laterais da placa. Isso aumenta o número total de pinos de E/S digitais expostos de 11 para 26. Ele também adiciona uma segunda interface I2C, pads dedicados para USB D+/D− e conexões relacionadas à bateria, incluindo BAT+, BAT− e BAT_EN.

Para aplicações alimentadas por bateria, o XIAO RP2040 Plus integra um PMIC onboard, um indicador de carregamento de bateria e proteção contra retorno de corrente de BAT para 3V3. Esses recursos adicionais tornam a versão Plus mais adequada para placas-carrier personalizadas, montagem SMD, dispositivos alimentados por bateria e projetos que exigem mais recursos de E/S.

O Seeed Studio XIAO RP2040 é compatível com a placa de expansão Seeed Studio XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- **Poderoso MCU RP2040:** Processador Arm Cortex-M0+ dual-core rodando a até 133 MHz
- **Ricos recursos de memória:** 264 KB de SRAM e 2 MB de memória Flash onboard
- **Ampla compatibilidade de software:** Suporta Arduino, PlatformIO, MicroPython, CircuitPython, TinyGo, Rust, Zephyr e mais
- **Footprint XIAO comum:** Ambas as versões mantêm o layout XIAO padrão de 14 pinos, incluindo 11 pinos GPIO e três pinos de alimentação
- **Formato compacto:** Design do tamanho de um polegar de 21 × 17,8 mm para dispositivos vestíveis e aplicações com restrição de espaço
- **Interfaces do XIAO RP2040 padrão:** 11 pinos de E/S digitais, quatro pinos de entrada analógica, 11 pinos compatíveis com PWM, I2C, UART, SPI e SWD
- **E/S expandida do XIAO RP2040 Plus:** Adiciona 15 pads GPIO para um total de 26 pinos de E/S digitais, juntamente com uma segunda interface I2C e pads dedicados para USB D+/D−
- **Gerenciamento de bateria integrado:** O XIAO RP2040 Plus inclui um PMIC onboard, indicação de carregamento de bateria, conexões dedicadas de bateria e proteção contra retorno de corrente de BAT para 3V3
- **Opções flexíveis de montagem:** Pinos comuns compatíveis com protoboard combinados com bordas metalizadas e pads compatíveis com SMD para placas-carrier personalizadas

## Especificações

<table>
  <thead>
    <tr>
      <th>Nome do produto</th>
      <th>Seeed Studio XIAO RP2040</th>
      <th>Seeed Studio XIAO RP2040 Plus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Chipset</strong></td>
      <td colspan="2">
        <a href="https://www.raspberrypi.com/documentation/microcontrollers/silicon.html#rp2040">
          Raspberry Pi RP2040
        </a>
      </td>
    </tr>
    <tr>
      <td><strong>Processador</strong></td>
      <td colspan="2">Dual Cortex-M0+ até 133 MHz</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">264 KB SRAM</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB Flash onboard</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td>
        Pino GPIO x14<br/>
        Pino digital × 11<br/>
        Pino analógico × 4<br/>
        Pino PWM × 11<br/>
        I2C × 1<br/>
        UART × 1<br/>
        SPI × 1
      </td>
      <td>
        Pino GPIO x29<br/>
        Pad GPIO adicional × 15<br/>
        Pino digital x26<br/>
        Pino analógico × 4<br/>
        PWM × 26<br/>
        I2C × 2<br/>
        UART × 1<br/>
        SPI × 1
      </td>
    </tr>
    <tr>
      <td><strong>Onboard</strong></td>
      <td>
        LED de usuário × 1<br/>
        LED de alimentação × 1<br/>
        LED verde × 1<br/>
        LED azul × 1<br/>
        LED vermelho × 1<br/>
        LED RGB × 1<br/>
        Botão de reset × 1<br/>
        Botão de boot × 1
      </td>
      <td>
        LED de usuário × 1<br/>
        LED de alimentação × 1<br/>
        LED de carga (indicador de carregamento da bateria) × 1<br/>
        LED RGB × 1<br/>
        Botão de reset × 1<br/>
        Botão de boot × 1
      </td>
    </tr>
    <tr>
      <td><strong>Gerenciamento de bateria (PMIC)</strong></td>
      <td>Nenhum</td>
      <td>PMIC onboard</td>
    </tr>
    <tr>
      <td><strong>Alimentação</strong></td>
      <td colspan="2">
        Tensão de entrada (Type-C): 5V<br/>
        Tensão de entrada (BAT): 5V
      </td>
    </tr>
    <tr>
      <td><strong>Proteção contra retorno de corrente de BAT para 3V3</strong></td>
      <td>Não</td>
      <td>Sim</td>
    </tr>
    <tr>
      <td><strong>Compatibilidade de software</strong></td>
      <td colspan="2">
        Arduino, PlatformIO, MicroPython, CircuitPython, TinyGo, Rust, Zephyr e
        <a href="https://wiki.seeedstudio.com/pt-br/xiao_topic_page/">mais por vir</a>
      </td>
    </tr>
    <tr>
      <td><strong>Temperatura de trabalho</strong></td>
      <td colspan="2">-40°C a 85°C</td>
    </tr>
    <tr>
      <td><strong>Dimensões</strong></td>
      <td colspan="2">21 x 17,8 mm</td>
    </tr>
    <tr>
      <td><strong>Variantes</strong></td>
      <td>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-3PCS-p-5942.html">
          Pacote Seeed Studio XIAO RP2040 3PCS
        </a>
        <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-RP2040-Pre-Soldered-p-6333.html">
          Seeed Studio XIAO RP2040 pré-soldado
        </a>
      </td>
      <td>Seeed Studio XIAO RP2040 Plus</td>
    </tr>
  </tbody>
</table>

## Visão geral de hardware

<Tabs>
<TabItem value="XIAO RP2040" label="XIAO RP2040" default>

### Frente do XIAO RP2040

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso do XIAO RP2040

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO_RP2040_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value="XIAO RP2040 Plus" label="XIAO RP2040 Plus">

### Frente do XIAO RP2040 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Front.png" style={{width:1000, height:'auto'}}/></div>

### Verso do XIAO RP2040 Plus

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/XIAO-RP2040-Plus-Back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

:::caution
Para pinos de E/S gerais:
A tensão de trabalho do MCU é 3,3 V. Uma tensão de entrada conectada aos pinos de E/S gerais pode causar danos ao chip se for maior que 3,3 V.

Para pinos de alimentação:
O circuito conversor DC-DC integrado capaz de transformar 5 V em 3,3 V permite alimentar o dispositivo com uma fonte de 5 V via VIN-PIN e 5V-PIN.

Atualmente, o XIAO RP2040 só suporta alimentação por bateria e não pode ser conectado ao Type-C enquanto uma bateria estiver conectada, pois isso pode representar um risco de segurança.

Por favor, preste atenção ao usar, não levante a tampa de blindagem.
:::

## **Mapa de pinos**

| Pino XIAO | Função                | XIAO RP2040  | XIAO RP2040 Plus | Descrição                                                     |
| :--------- | :--------------------- | :----------- | :---------------- | :----------------------------------------------------------- |
| 5V         | VBUS                   | VBUS         | VBUS              | Entrada/saída de alimentação USB 5 V                         |
| GND        | GND                    | GND          | GND               | Terra                                                        |
| 3V3        | 3V3_OUT                | 3V3_OUT      | 3V3_OUT           | Saída de alimentação de 3,3 V                                |
| D0         | A0                     | GPIO26       | GPIO26            | GPIO, ADC0                                                   |
| D1         | A1                     | GPIO27       | GPIO27            | GPIO, ADC1                                                   |
| D2         | A2                     | GPIO28       | GPIO28            | GPIO, ADC2                                                   |
| D3         | A3                     | GPIO29       | GPIO29            | GPIO, ADC3                                                   |
| D4         | SDA0                   | GPIO6        | GPIO6             | GPIO, dados I2C0                                             |
| D5         | SCL0                   | GPIO7        | GPIO7             | GPIO, clock I2C0                                             |
| D6         | TX                     | GPIO0        | GPIO0             | GPIO, transmissão UART                                       |
| D7         | RX                     | GPIO1        | GPIO1             | GPIO, recepção UART                                          |
| D8         | SCK                    | GPIO2        | GPIO2             | GPIO, clock SPI                                              |
| D9         | MISO                   | GPIO4        | GPIO4             | GPIO, entrada de dados SPI                                   |
| D10        | MOSI                   | GPIO3        | GPIO3             | GPIO, saída de dados SPI                                     |
| D11        | —                      | —            | —                 | Não disponível como pino externo                             |
| D12        | GPIO                   | —            | GPIO18            | GPIO de expansão exclusivo da versão Plus                    |
| D13        | SCL1                   | —            | GPIO21            | Clock I2C1 exclusivo da versão Plus                          |
| D14        | SDA1                   | —            | GPIO20            | Dados I2C1 exclusivos da versão Plus                         |
| D15        | GPIO                   | —            | GPIO19            | GPIO de expansão exclusivo da versão Plus                    |
| D16        | GPIO                   | —            | GPIO22            | GPIO de expansão exclusivo da versão Plus                    |
| D17        | GPIO                   | —            | GPIO23            | GPIO de expansão exclusivo da versão Plus                    |
| D18        | —                      | —            | —                 | Não disponível como pino externo                             |
| D19        | GPIO                   | —            | GPIO5             | GPIO de expansão exclusivo da versão Plus                    |
| D20        | GPIO                   | —            | GPIO13            | GPIO de expansão exclusivo da versão Plus                    |
| D21        | GPIO                   | —            | GPIO14            | GPIO de expansão exclusivo da versão Plus                    |
| D22        | GPIO                   | —            | GPIO15            | GPIO de expansão exclusivo da versão Plus                    |
| D23        | GPIO                   | —            | GPIO16            | GPIO de expansão exclusivo da versão Plus                    |
| D24        | GPIO                   | —            | GPIO17            | GPIO de expansão exclusivo da versão Plus                    |
| D25        | GPIO                   | —            | GPIO10            | GPIO de expansão exclusivo da versão Plus                    |
| D26        | GPIO                   | —            | GPIO9             | GPIO de expansão exclusivo da versão Plus                    |
| D27        | GPIO                   | —            | GPIO8             | GPIO de expansão exclusivo da versão Plus                    |
| Reset      | RUN                    | RUN          | RUN               | Entrada de reset                                             |
| Boot       | RP2040_BOOT            | RP2040_BOOT  | RP2040_BOOT       | Entrar no modo bootloader                                    |
| USER_LED_R | Canal vermelho         | GPIO17       | —                 | Controle direto do canal vermelho do LED RGB no XIAO RP2040  |
| USER_LED_G | Canal verde            | GPIO16       | —                 | Controle direto do canal verde do LED RGB no XIAO RP2040     |
| USER_LED_G | Canal azul             | GPIO25       | —                 | Controle direto do canal azul do LED RGB no XIAO RP2040      |
| RGB_LED    | Dados WS2812B          | —            | GPIO12/NEOPIX     | Controle de dados de cor WS2812B de fio único    |
| RGB_EN     | Habilitar WS2812B      | —            | GPIO11            | Habilita a alimentação do WS2812B; não é um pino de dados de cor |
| User LED   | LED controlado pelo usuário | —       | GPIO25            | LED de usuário separado no XIAO RP2040 Plus                  |
| BAT_EN     | Habilitar bateria      | —            | GPIO24            | Controle de alimentação da bateria na versão Plus            |
| CHARGE_LED | Indicador de carregamento | —         | —                 | LED de status de carregamento controlado por hardware; não é um GPIO de usuário |
| SWDIO      | Depuração SWD          | SWDIO        | RP2040_SWDIO      | Dados Serial Wire Debug                                      |
| SWCLK      | Depuração SWD          | SWCLK        | RP2040_SWCLK      | Clock Serial Wire Debug                                      |
| USB_D+     | USB                    | -            | USB_DP      | Dados positivos USB 1.1 Full-Speed                           |
| USB_D-     | USB                    | -            | USB_DM      | Dados negativos USB 1.1 Full-Speed                           |

### Entrar no modo Bootloader

Às vezes, a porta do Seeed Studio XIAO RP2040 pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

- Pressione e segure o botão **B**.
- Conecte o Seeed Studio XIAO PR2040 ao seu computador.
- O computador exibirá uma unidade de disco.

Neste ponto, o chip entra no modo Bootloader e a porta de gravação aparece novamente. Como o chip RP2040 possui duas partições, uma é o Bootloader e a outra é o programa do usuário. O produto grava um código de bootloader na memória do sistema quando sai de fábrica. Podemos alternar os modos executando as etapas acima.

### Resetar

Se você quiser resetar o Seeed Studio XIAO RP2040, execute os seguintes passos:

- Conecte o Seeed Studio XIAO RP2040 ao seu computador.
- Pressione os pinos **R** **uma vez**.

Atenção: O comportamento dos LEDs monocromáticos programáveis integrados (eles são vermelho, azul e verde) é o inverso daquele em um Arduino. No Seeed Studio XIAO RP2040, o pino precisa ser puxado para nível baixo para habilitar.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.png" alt="pir" width={800} height="auto" /></p>

## Uso da bateria

:::note

Somente o XIAO RP2040 Plus possui um conector de bateria BAT em sua parte traseira, por favor, observe isso.

:::

O XIAO RP2040 Plus é capaz de usar uma bateria de lítio de 3,7 V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de fiação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::caution

Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem. Se a bateria estiver com carga, nunca a solde diretamente na placa, pois isso pode queimar a placa de circuito. Um curto-circuito enquanto o circuito estiver energizado representa um risco significativo; é recomendável usar um adaptador.

:::

### Exemplo de leitura da tensão da bateria

De acordo com o esquemático, o XIAO RP2040 Plus usa o CI carregador de bateria de íon-lítio **SGM40567-4.2XG/TR** para fornecer carregamento de corrente constante e tensão constante para uma bateria de íon-lítio de célula única. O status de carregamento é indicado pelo piscar do **Charge_LED**.<br/>

O circuito de medição da tensão da bateria usa um chaveador de carga **TPS22916CNYFPR** para habilitar ou desabilitar o caminho de medição. Quando a tensão da bateria precisa ser medida, o MCU habilita o caminho de medição através de **BAT_EN (GPIO24)**, reduzindo assim o consumo da bateria enquanto o dispositivo está em modo de espera.<br/>

Além disso, um chaveador analógico **SGM4875XXDM6G/TR** é usado para alternar o canal de entrada do ADC. Controlado por **GPIO24/BAT_EN**, ele seleciona se o sinal de medição da bateria ou outro sinal de entrada analógica é conectado ao pino **A3 (GPIO29) ADC**, permitindo o uso multiplexado do pino do ADC.

:::tip

Quando o pino A3 é usado como entrada ADC para medir a tensão da bateria, ele não pode ser usado como um pino de E/S de uso geral ao mesmo tempo. Certifique-se de levar isso em conta ao atribuir os pinos.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_charge.png" style={{width:800, height:'auto'}}/></div>
<br/>

A tensão da bateria é medida usando um circuito divisor resistivo. A tensão lida pelo ADC é metade da tensão real da bateria, portanto o software deve multiplicar a medição do ADC por 2 para obter a tensão real da bateria.

<details>

<summary>Exemplo de leitura da bateria</summary>

```c
constexpr float ADC_VREF = 3.3f;
constexpr float ADC_MAX  = 4095.0f;
constexpr float DIVIDER_RATIO = 2.0f;  // 10k / 10k voltage divider

float readBatteryVoltage() {
  // Enable voltage divider circuit and analog switch simultaneously
  digitalWrite(BAT_EN, HIGH);

  // Wait for U2 output, RC filter and ADC input to stabilize
  delay(10);

  // Discard one possibly stale ADC reading
  analogRead(A3);

  // Multiple sampling and averaging to reduce noise
  uint32_t sum = 0;
  constexpr int samples = 16;

  for (int i = 0; i < samples; i++) {
    sum += analogRead(A3);
    delay(2);
  }

  // Turn off immediately after measurement to avoid continuous power consumption by divider resistors
  digitalWrite(BAT_EN, LOW);

  float adcRaw = sum / (float)samples;
  float a3Voltage = adcRaw * ADC_VREF / ADC_MAX;

  return a3Voltage * DIVIDER_RATIO;
}

void setup() {
  Serial.begin(115200);

  pinMode(BAT_EN, OUTPUT);
  digitalWrite(BAT_EN, LOW);  // Disable detection circuit by default

  analogReadResolution(12);   // RP2040 Plus ADC: 0~4095
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

- Resultado da medição da tensão da bateria: A tensão medida de uma bateria de íon-lítio pode diferir do valor nominal impresso na bateria. Sempre considere o valor realmente medido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_plus_battery_detection.png" style={{width:800, height:'auto'}}/></div>
<br/>

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

### XIAO RP2040

**Projeto de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Esquemático]** [XIAO RP2040 Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf )
- **🗃️[Arquivos de projeto de PCB]** 
  - [ XIAO RP2040 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.3_SCH&PCB_20260304.zip )
  - [XIAO RP2040 Eagle Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip )
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]** [XIAO RP2040 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx )

**Projeto mecânico**
- **📄[Dimensões 2D]** [XIAO RP2040 Dimension in DXF](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip )
- **📄[Modelo 3D]** [ XIAO RP2040 3D Model](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip )

### XIAO RP2040 Plus

**Projeto de hardware**
- **📄[Datasheet]** [Raspberry Pi RP2040 Datasheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf )
- **📄[Esquemático]** [XIAO RP2040 Plus Schematic](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_SCH.pdf )
- **🗃️[Arquivos de projeto de PCB]** 
  - [ XIAO RP2040 Plus KiCad Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
  - [XIAO RP2040 Plus Eagle Project](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040-Plus_V1.0_SCH&PCB.zip)
- **🗃️[Bibliotecas de projeto de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de pinagem]** [XIAO RP2040 Plus Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-Plus-pinout.xlsx)

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
