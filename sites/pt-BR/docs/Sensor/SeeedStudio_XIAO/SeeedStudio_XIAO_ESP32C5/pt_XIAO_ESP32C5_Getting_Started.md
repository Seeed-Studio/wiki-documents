---
title: Introdução ao Seeed Studio XIAO ESP32-C5
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_getting_started
last_update:
  date: 11/26/2025
  author: Zeller
  sidebar_position: 0
createdAt: '2025-12-15'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_getting_started/
---
## Introdução

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Especificações

<table>
    <thead>
        <tr>
            <th>Item</th>
            <th>Seeed Studio XIAO ESP32-C5</th>
            <th>Seeed Studio XIAO ESP32-S3</th>
            <th>Seeed Studio XIAO ESP32-C3</th>
            <th>Seeed Studio XIAO ESP32-C6</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processador</th>
            <td>ESP32-C5 RISC-V 32-bit @240 MHz</td>
            <td>ESP32R8N8 32-bit Xtensa LX7 dual-core @240 MHz</td>
            <td>ESP32-C3 32-bit RISC-V @160 MHz</td>
            <td>ESP32-C6 32-bit RISC-V @160 MHz</td>
        </tr>
        <tr>
            <th>Conectividade sem fio</th>
            <td>**Wi-Fi 6 de banda dupla 2,4 GHz e 5 GHz** e Bluetooth 5 (LE)</td>
            <td>Wi-Fi 2,4 GHz e Bluetooth 5 (LE)</td>
            <td>Wi-Fi 2,4 GHz e Bluetooth 5 (LE)</td>
            <td> 2,4 GHz Wi-Fi 6, Bluetooth 5 (LE)</td>
        </tr>
        <tr>
            <th>Memória</th>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>400 KB SRAM, 4 MB Flash</td>
            <td>512KB SRAM , 4MB Flash</td>
        </tr>
        <tr>
            <th>Interfaces</th>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
        </tr>
        <tr>
            <th>Pinos PWM/Analógicos</th>
            <td>11 / 5</td>
            <td>11 / 9</td>
            <td>11 / 4</td>
            <td>11 / 7</td>
        </tr>
        <tr>
            <th>Botões onboard</th>
            <td>Botão Reset / Boot</td>
            <td>Botão Reset / Boot</td>
            <td>Botão Reset / Boot</td>
            <td>Botão Reset / Botão Boot</td>
        </tr>
        <tr>
            <th>LEDs onboard</th>
            <td>LED de carga / USER LED</td>
            <td>LED de carga / USER LED</td>
            <td>LED de carga</td>
            <td>LED de carga / USER LED</td>
        </tr>
        <tr>
            <th>Chip de carga da bateria</th>
            <td>SGM40567</td>
            <td>SGM40567</td>
            <td>ETA4054S2F</td>
            <td>SGM40567</td>
        </tr>
    </tbody>
</table>

### Recursos

- **CPU poderosa:** ESP32-C5, processador RISC-V de 32 bits, single-core, que opera a até 240 MHz
- **Subsistema Wi-Fi completo:** Subsistema Wi-Fi 6 de banda dupla (2,4 GHz e 5 GHz) em conformidade com IEEE 802.11 a/b/g/n/ac/ax, com suporte a Station, SoftAP, operação simultânea SoftAP+Station e modo promíscuo (monitor).
- **Subsistema Bluetooth LE:** Suporta recursos do Bluetooth 5 e Bluetooth mesh
- **Melhor desempenho de RF:** Antena RF externa incluída.
- **Chip de carregamento de bateria:** Suporta gerenciamento de carga e descarga de bateria de lítio.
- **Ricos recursos on-chip:** 384 KB de SRAM on-chip, 320 KB de ROM
- **Tamanho ultrapequeno:** Tão pequeno quanto um polegar (21 x 17,8 mm), formato clássico da série XIAO para dispositivos vestíveis e projetos compactos
- **Recursos de segurança confiáveis**: Aceleradores de hardware criptográfico com suporte a AES-128/256, hashing da família SHA, HMAC, periférico dedicado de assinatura digital e Secure Boot (V2).
- **Interfaces ricas**: 1×I2C, 1×SPI, 2×UART, até 11×GPIO (compatíveis com PWM), 5×canais ADC e uma interface de almofadas de conexão JTAG (pads no lado inverso).
- Componentes em um único lado, design para montagem em superfície

## Visão geral do hardware

<table align="center">
 <tr>
     <th>Diagrama de indicação do XIAO ESP32-C5</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/front.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de pinos do XIAO ESP32-C5</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/PinList_1.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

 ## **Mapa de pinos**
| Pino XIAO              | Função    | Pino do chip | Funções alternativas      | Descrição                    |
| :--------------------: | :-------: | :-------: | :----------------------: | :-------------------------- |
| 5V                     | VBUS       |           |                          | Entrada/Saída de energia     |
| GND                    |            |           |                          |                              |
| 3V3                    | 3V3_OUT    |           |                          | Saída de energia             |
| D0                     | Analógico  | GPIO1     | LP_UART_DSRN, LP_GPIO1   | GPIO, ADC                    |
| D1                     |            | GPIO0     | LP_UART_DTRN, LP_GPIO0   | GPIO                         |
| D2                     |            | GPIO25    |                          | GPIO                         |
| D3                     |            | GPIO7     | SDIO_DATA1               | GPIO                         |
| D4                     | SDA        | GPIO23    |                          | GPIO, dados I2C              |
| D5                     | SCL        | GPIO24    |                          | GPIO, clock I2C              |
| D6                     | TX         | GPIO11    |                          | GPIO, transmissão UART       |
| D7                     | RX         | GPIO12    |                          | GPIO, recepção UART          |
| D8                     | SCK        | GPIO8     | TOUCH7                   | GPIO, clock SPI              |
| D9                     | MISO       | GPIO9     | TOUCH8                   | GPIO, dados SPI              |
| D10                    | MOSI       | GPIO10    | TOUCH9                   | GPIO, dados SPI              |
| MTDO                   |            | GPIO5     | LP_UART_TXD, LP_GPIO5    | JTAG                         |
| MTDI                   |            | GPIO3     | LP_I2C_SCL, LP_GPIO3     | JTAG, ADC                    |
| MTCK                   |            | GPIO4     | LP_UART_RXD, LP_GPIO4    | JTAG, ADC                    |
| MTMS                   |            | GPIO2     | LP_I2C_SDA, LP_GPIO2     | JTAG, ADC                    |
| ADC_BAT                |            | GPIO6    |                          | Ler o valor de tensão da bateria   |
| ADC_CRL                |            | GPIO26    |                          | Controla (ativa/desativa) o circuito de medição para economizar energia.   |
| Reset                  |            | CHIP_EN   |                          | EN                           |
| Boot                   |            | GPIO28    |                          | Entrar no modo Boot          |
| U.FL-R-SMT1            |            | LNA_IN    |                          | Antena UFL                   |
| CHARGE_LED             |            | VCC_3V3   |                          | CHG-LED_Vermelho             |
| USER_LED               |            | GPIO27    |                          | Luz do usuário_Amarela       |
## Primeiros passos

Para permitir que você comece a usar o XIAO ESP32-C5 mais rapidamente, leia a preparação de hardware e software abaixo para preparar o XIAO.

### Hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-5884.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir o [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Software

A ferramenta de programação recomendada para o XIAO ESP32-C5 é a Arduino IDE, portanto você precisa concluir a instalação do Arduino como parte da preparação de software.

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

- **Passo 1.** Baixe e instale a versão estável da Arduino IDE de acordo com o seu sistema operacional.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Passo 2.** Inicie o aplicativo Arduino.
- **Passo 3.**  Abra BOARDS MANAGER -> Pesquise **esp32** -> Instale a versão 3.3.5 ou uma versão superior

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### Carregar programa

Vamos pegar como exemplo abaixo um programa de iluminação

**Passo 1.** Selecione **XIAO_ESP32C5** e a PORTA. Se você não souber qual é a PORTA, pode reconectar e remover o XIAO_ESP3-2C5 para verificar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Cole o código no seu Sketch

**LED_BUILTIN** corresponde ao **LED L** na placa de desenvolvimento.

```cpp
void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**Passo 3.** Clique e faça o upload

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_1.png" style={{width:800, height:'auto'}}/></div><br/>

Demonstração do efeito:

Depois de fazer o upload do programa, você verá o LED indicador L piscando em intervalos de 1 segundo e, ao mesmo tempo, o monitor serial imprimirá LED ON e LED OFF.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## Modo de sono profundo

O XIAO ESP32-C5 possui funções de sono profundo e de despertar. Este exemplo utiliza um disparo em nível alto no pino **D0** para acordar o dispositivo do sono profundo.<br/>
É importante observar que esta é uma opção configurável, pois o hardware suporta tanto disparos em nível alto quanto em nível baixo para acomodar diferentes projetos de circuito.

```cpp
#define WAKEUP_PIN D0 // LP_GPIO1

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    case ESP_SLEEP_WAKEUP_GPIO : Serial.println("Wakeup caused by GPIO"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000);

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();

  pinMode(WAKEUP_PIN, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);

  uint64_t mask = 1ULL << WAKEUP_PIN;
  esp_deep_sleep_enable_gpio_wakeup(mask, ESP_GPIO_WAKEUP_GPIO_HIGH);

  digitalWrite(LED_BUILTIN, LOW);
  delay(100);
  digitalWrite(LED_BUILTIN, HIGH);

  delay(2000);  //Delay time depends on the serial port / Give the PC time to stabilize
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
}

void loop(){}
```

Se você for rápido o suficiente para ligar o monitor serial antes que o XIAO entre em sono profundo, poderá ver a mensagem de saída como mostrado abaixo. Isso significa que o XIAO agora está **adormecido**. Em seguida, você também pode visualizá-lo e ativá-lo pressionando o botão. Você também pode observar o estado ligado-desligado do **LED L** para verificar se o dispositivo foi despertado. Assim que for despertado, ele exibirá um efeito de piscar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Após entrar no modo de sono profundo, a porta do XIAO desaparecerá e você precisará acordá-lo para ver novamente o número da porta!
:::

:::caution
O XIAO ESP32-C5 suporta despertar por GPIO e por temporizador. Para evitar a perda de capacidades de depuração de hardware e o aumento da dificuldade na gravação de firmware durante o desenvolvimento de baixo consumo, é altamente recomendável que os pinos JTAG (MTMS, MTDI, MTCK, MTDO) sejam reservados para uso dedicado e não sejam utilizados como fontes de despertar para o modo de sono profundo.
:::

## Uso da bateria

O XIAO ESP32-C5 é capaz de usar uma bateria de lítio de 3,7 V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de fiação.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
:::

**Instruções sobre o uso de baterias:**

1. Utilize baterias qualificadas que atendam às especificações.
2. O XIAO pode ser conectado ao seu computador por meio de cabo de dados enquanto utiliza a bateria; fique tranquilo, pois o XIAO possui um chip de proteção de circuito integrado, o que é seguro.
3. Quando o XIAO ESP32-C5 é alimentado por uma bateria, o **LED C** acenderá. Você pode usar isso como base para determinar se o gerenciamento de carregamento foi realizado.

### Verificar a tensão da bateria

O XIAO ESP32-C5 está equipado com o chip de carregamento de bateria SGM40567 e o chip de aquisição de tensão de bateria TPS22916CYFPR. Você pode habilitar o **BAT_VOLT_PIN_EN** para ativar a função de aquisição de tensão da bateria e ler a tensão da bateria através do **BAT_VOLT_PIN**.

:::tip
No XIAO ESP32C5, o pino correspondente a BAT_VOLT_PIN é o GPIO6, e o pino correspondente a BAT_VOLT_PIN_EN é o GPIO26.
:::

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(BAT_VOLT_PIN, INPUT);         // Configure A0 as ADC input
  pinMode(BAT_VOLT_PIN_EN , OUTPUT);
  digitalWrite(BAT_VOLT_PIN_EN , HIGH);
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(BAT_VOLT_PIN ); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

- **`analogReadMilliVolts(BAT_Voltage_Read)`**

  - Esta função é usada para ler a tensão analógica atual do pino `BAT_VOLT_PIN` e retornar um valor de tensão calibrado em milivolts (mV).
  - Diferente da `analogRead()` convencional, que fornece apenas um valor bruto de ADC, `analogReadMilliVolts()` aplica automaticamente os parâmetros de calibração de fábrica incorporados no chip. Isso resulta em maior precisão, melhor linearidade na medição de tensão e elimina a necessidade de conversão manual de ADC para tensão.
  - Durante o processo de amostragem de tensão, é realizada uma **amostragem repetida 16 vezes** por meio de um loop `for`, e os resultados são acumulados. O objetivo da amostragem múltipla é suprimir ruídos transitórios e erros discretos, melhorando assim a estabilidade da medição. Por fim, o valor acumulado é dividido pelo número de amostras (16) para obter um valor de tensão médio mais suave e confiável.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
De acordo com o datasheet, a faixa efetiva de medição do ESP32-C5 cobre 0~3300 mV. Portanto, o circuito interno de aquisição de tensão da bateria do XIAO ESP32-C5 é projetado com dois resistores de 100K para divisão de tensão, permitindo a leitura precisa dos valores.
:::

## Recursos

**Projeto de Hardware**
- **📄[Datasheet]** [Espressif ESP32-C5 Datasheet](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf )
- **📄[Esquemático]** [XIAO ESP32-C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.pdf )
- **🗃️[Arquivos de Projeto de PCB]** [XIAO ESP32-C5 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [XIAO ESP32-C5 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/XIAO_ESP32C5_Pinout.xlsx )

**Projeto Mecânico**
- **📄[Modelo 3D]** [XIAO ESP32-C5 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32-c5-1 )

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
