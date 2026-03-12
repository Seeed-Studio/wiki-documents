---
description: Primeiros Passos com Seeed Studio XIAO ESP32C3
title: Primeiros Passos com Seeed Studio XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_Getting_Started
sku: 113991054,102010633,101991467
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
createdAt: '2022-11-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/
---

# Primeiros Passos com Seeed Studio XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## Introdução

**Seeed Studio XIAO ESP32C3** é uma mini placa de desenvolvimento IoT baseada no chip de modo duplo WiFi/Bluetooth **ESP32-C3** da Espressif, com uma **CPU RISC-V de 32 bits** que oferece alto desempenho computacional com sua arquitetura eficiente. Possui excelente desempenho de radiofrequência, suportando os protocolos **IEEE 802.11 b/g/n WiFi** e **Bluetooth 5 (BLE)**. Esta placa inclui uma antena externa para aumentar a intensidade do sinal em suas aplicações sem fio. Também possui um **formato pequeno e elegante** combinado com um **design de montagem em superfície de face única**. Está equipada com interfaces ricas e possui **11 E/S digitais** que podem ser usadas como **pinos PWM** e **4 E/S analógicas** que podem ser usadas como **pinos ADC**. Suporta quatro interfaces seriais como **UART, I2C e SPI**. Há também um pequeno **botão de reset** e um **botão de modo bootloader** na placa. O XIAO ESP32C3 é totalmente compatível com o [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) e a [Placa de Expansão Seeeduino XIAO](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-Expansion-Board), exceto que os contatos de mola SWD da placa de expansão Seeeduino XIAO não serão compatíveis.

Com relação às características destacadas acima, o XIAO ESP32C3 é posicionado como uma **mini placa de desenvolvimento IoT de alto desempenho, baixo consumo e custo acessível**, adequada para **aplicações IoT de baixo consumo e aplicações vestíveis sem fio**.

Este wiki mostrará como você pode começar rapidamente com o XIAO ESP32C3!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

### Especificações
<table>
  <tr>
    <th>Parâmetro</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>Processador</td>
    <td>ESP32-C3 SoC<br/>Processador chip RISC-V single-core 32 bits com pipeline de quatro estágios que opera a até 160 MHz</td>
  </tr>
  <tr>
    <td>Sem Fio</td>
    <td>Subsistema Wi-Fi 2.4GHz completo<br/>Bluetooth Low Energy 5.0/ Bluetooth Mesh</td>
  </tr>
  <tr>
    <td>Memória On-chip</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
  </tr>
  <tr>
    <td>Interface</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC<br/>1x Botão de Reset<br/>1x Botão de Boot</td>
  </tr>
  <tr>
    <td>Dimensões</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <td>Alimentação (Típ.)</td>
    <td>Corrente de Saída Máxima 3.3V: 500mA<br/>Condição de Teste: Entrada no Pino BAT @ 3.8V<br/>Capacidade de Fonte: 3A<br/>Corrente de carregamento: 380mA (Rápido) / 40mA (Trickle)<br/>Tensão de entrada (VIN): 5V<br/>Tensão de entrada (BAT): 3.7V</td>
  </tr>
  <tr>
    <td>Consumo em Deep Sleep</td>
    <td>Modo Deep Sleep: 44 μA</td>
  </tr>
  <tr>
    <td>Consumo com Wi-Fi Ativado</td>
    <td>Modo Ativo: 75 mA<br/>Modo Modem-sleep: 25 mA<br/>Modo Light-sleep: 4 mA</td>
  </tr>
  <tr>
    <td>Consumo com BLE Ativado</td>
    <td>Modo Modem-sleep: 27 mA<br/>Modo Light-sleep: 10 mA</td>
  </tr>
  <tr>
    <td>Temperatura de Operação</td>
    <td>-40°C ~ 85°C</td>
  </tr>
</table>
### Características

- **CPU Poderosa:** ESP32-C3, processador single-core RISC-V de 32 bits que opera a até 160 MHz
- **Subsistema Wi-Fi completo:** Compatível com o protocolo IEEE 802.11b/g/n e suporta modo Station, modo SoftAP, modo SoftAP + Station e modo promíscuo
- **Subsistema Bluetooth LE:** Suporta recursos do Bluetooth 5 e Bluetooth mesh
- **Ultra Baixo Consumo:** O consumo em deep sleep é de aproximadamente 43μA
- **Melhor desempenho de RF:** Antena RF externa incluída
- **Chip de carregamento de bateria:** Suporta gerenciamento de carga e descarga de bateria de lítio
- **Recursos on-chip abundantes:** 400KB de SRAM e 4MB de memória flash na placa
- **Tamanho ultra pequeno:** Do tamanho de um polegar (21x17.8mm), formato clássico da série XIAO para dispositivos vestíveis e projetos pequenos
- **Recursos de segurança confiáveis:** Aceleradores de hardware criptográfico que suportam AES-128/256, Hash, RSA, HMAC, assinatura digital e boot seguro
- **Interfaces ricas:** 1xI2C, 1xSPI, 2xUART, 11xGPIO(PWM), 4xADC, 1x interface de pad de ligação JTAG
- Componentes de face única, design de montagem em superfície

## Visão geral do hardware

> *A3(GP105) - Usa ADC2, que pode ficar inoperante devido a sinais de amostragem falsos. Para leituras analógicas confiáveis, use ADC1(A0/A1/A2). Consulte o datasheet do ESP32-C3.

<table align="center">
 <tr>
     <th>Diagrama de indicação frontal do XIAO ESP32C3</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Diagrama de indicação traseira do XIAO ESP32C3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pinos do XIAO ESP32C3</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div></td>
        <!--
        Image Description: This image is the official pinout diagram of the Seeed Studio XIAO ESP32-C3 development board.
        The diagram shows:
        - The top view of the XIAO ESP32-C3 board.
        - GPIO pin mappings, digital/analog labels, power pins, and function-specific roles (I2C, UART, SPI).
        - Color-coded labels for each pin type.
        Pin layout from left to right (as seen in the image):
        === LEFT SIDE PINS (top to bottom) ===
        - GPIO2    | A0  | D0   → Analog-capable (ADC1)
        - GPIO3    | A1  | D1   → Analog-capable (ADC1)
        - GPIO4    | A2  | D2   → Analog-capable (ADC1)
        - GPIO5    | A3 (crossed out) | D3 → Analog-capable via ADC2 (not recommended)
        - GPIO6    | SDA | D4   → I2C data line
        - GPIO7    | SCL | D5   → I2C clock line
        - GPIO21   | TX  | D6   → UART TX (Transmit)
        === RIGHT SIDE PINS (top to bottom) ===
        - 5V       → Power input/output
        - GND      → Ground
        - 3V3      → 3.3V power output
        - D10      | MOSI | GPIO10 → SPI MOSI (not analog-capable)
        - D9       | MISO | GPIO9  → SPI MISO (not analog-capable)
        - D8       | SCK  | GPIO8  → SPI clock (not analog-capable)
        - D7       | RX   | GPIO20 → UART RX (Receive)
        === Pin Function Color Legend (as shown in image) ===
        - Blue: Digital pin labels (D0–D10)
        - Pink: Analog pin labels (A0–A2); A3 is crossed out due to ADC2 instability
        - Green: GPIO number
        - Teal: I2C function (SDA, SCL)
        - Gray: UART function (TX, RX)
        - Purple: SPI function (MOSI, MISO, SCK)
        - Black: GND
        - Red: Power pins (5V, 3V3)
        === Footnote in Image ===
        "A3(GPIO5) - Uses ADC2, which may become inoperative due to false sampling signals. 
        For reliable analog reads, use ADC1 instead. Refer to the ESP32-C3 datasheet."
        === Notes ===
        - Only A0, A1, and A2 are officially supported analog pins using ADC1.
        - A3 (GPIO5) is crossed out and discouraged due to ADC2 reliability issues.
        - GPIO0, GPIO1 are not shown as analog pins in this image, though technically ADC1-capable.
        - GPIOs 8–10, 20–21 are not usable for analog input.
        - This layout helps developers identify safe and recommended pin functions when designing circuits or writing firmware.
        End of XIAO ESP32-C3 pinout description.
        -->
 </tr>
</table>

 ## **Mapa de Pinos**
| Pino XIAO       | Função    | Pino do Chip | Funções Alternativas                 | Descrição            |
| :-------------: | :-------: | :-------: | :---------------------------------: | :-----------------: |
| 5V              | VBUS      |           |                                     | Entrada/Saída de Energia |
| GND             |           |           |                                     |                      |
| 3V3             | 3V3_OUT   |           |                                     | Saída de Energia     |
| D0              | Analógico | GPIO2     | ADC1_CH2,                           | GPIO, ADC            |
| D1              | Analógico | GPIO3     | ADC1_CH3                            | GPIO, ADC            |
| D2              | Analógico | GPIO4     | ADC1_CH4, FSPIHD, MTMS              | GPIO, ADC            |
| D3              | Analógico | GPIO5     | ADC2_CH0, FSPIWP, MTDI              | GPIO, ADC            |
| D4              | SDA       | GPIO6     | FSPICLK, MTCK                       | GPIO, Dados I2C      |
| D5              | SCL       | GPIO7     | FSPID, MTDO                         | GPIO, Clock I2C      |
| D6              | TX        | GPIO21    | U0TXD                               | GPIO, Transmissão UART |
| D7              | RX        | GPIO20    | U0RXD                               | GPIO, Recepção UART  |
| D8              | SCK       | GPIO8     |                                     | GPIO, Clock SPI      |
| D9              | MISO      | GPIO9     |                                     | GPIO, Dados SPI      |
| D10             | MOSI      | GPIO10    | FSPICS0                             | GPIO, Dados SPI      |
| MTDO            |           | GPIO7     |                             |            JTAG              |
| MTDI            |           | GPIO5     |                        |        JTAG, ADC                  |
| MTCK            |           | GPIO6     |                           |        JTAG, ADC               |
| MTMS            |           | GPIO4     |                            |               JTAG, ADC       |
| Reset           |           | CHIP_EN   |                                     | EN                   |
| Boot            |           | GPIO9     |                                     | Entrar no Modo Boot  |
| U.FL-R-SMT1     |           | LNA_IN    |                                     | Antena UFL           |
| Light           |           | VCC_3V3   |                                     | CHG-LED              |
### Pinos de Alimentação

- 5V - Esta é a saída de 5V da porta USB. Você também pode usar isso como entrada de tensão, mas deve ter algum tipo de diodo (schottky, sinal, potência) entre sua fonte de alimentação externa e este pino, com o anodo na bateria e o catodo no pino 5V.
- 3V3 - Esta é a saída regulada do regulador integrado. Você pode consumir 700mA
- GND - Terra de alimentação/dados/sinal

### Pinos de Strapping

De acordo com o manual do chip ESP32C3, **GPIO2**, **GPIO8** e **GPIO9** no chip são Pinos de Strapping; as configurações de nível alto e baixo desses pinos podem fazer o chip entrar em diferentes modos de Boot. Por favor, preste atenção a este ponto ao usar esses pinos, caso contrário pode impedir que seu XIAO faça upload ou execute o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## Primeiros Passos

Primeiro, vamos conectar o XIAO ESP32C3 ao computador, conectar um LED à placa e fazer upload de um código simples pelo Arduino IDE para verificar se a placa está funcionando corretamente, fazendo o LED conectado piscar.

### Preparação do Hardware

Você precisará preparar o seguinte:

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x Computador
- 1 x Cabo USB Type-C

:::tip

Alguns cabos USB só fornecem energia e não conseguem transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar o [Seeed USB Type-C com suporte USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

- **Passo 1.** Conecte o XIAO ESP32C3 ao seu computador via cabo USB Type-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Passo 2.** Conecte um LED ao pino D10 conforme mostrado abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**Nota:** Certifique-se de conectar um resistor (cerca de 150Ω) em série para limitar a corrente pelo LED e evitar corrente excessiva que pode queimar o LED

### Preparação do Software

- **Passo 1.** Baixe e instale a versão mais recente do Arduino IDE de acordo com seu sistema operacional

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **Passo 2.** Inicie o aplicativo Arduino

- **Passo 3.** Adicione o pacote de placa ESP32 ao seu Arduino IDE

Navegue até **File > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

Navegue até **Tools > Board > Boards Manager...**, digite a palavra-chave "**esp32**" na caixa de pesquisa, selecione a versão mais recente do **esp32** e instale-a.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **Passo 4.** Selecione sua placa e porta

**Placa**

Navegue até **Tools > Board > ESP32 Arduino** e selecione "**XIAO_ESP32C3**". A lista de placas é um pouco longa e você precisa rolar até o final para encontrá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**Porta**

Navegue até **Tools > Port** e selecione o nome da porta serial do XIAO ESP32C3 conectado. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware).

### Execute seu primeiro programa Blink

- **Passo 1.** Copie o código abaixo para o Arduino IDE

Certifique-se de que seu `D10` está conectado a um LED conforme mostrado no diagrama acima.

```cpp

// define led according to pin diagram in article
const int led = D10; // there is no LED_BUILTIN available for the XIAO ESP32C3.

void setup() {
  // initialize digital pin led as an output
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // turn the LED on 
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off
  delay(1000);               // wait for a second
}
```

- **Passo 2.** Clique no botão **Upload** para fazer upload do código para a placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

Após o upload, você verá o LED conectado piscando com um intervalo de 1 segundo entre cada piscar. Isso significa que a conexão foi bem-sucedida e agora você pode explorar mais projetos com o XIAO ESP32C3!

## Uso da Bateria

O XIAO ESP32C3 é capaz de usar uma bateria de lítio de 3,7V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de conexão.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
Por favor, tome cuidado para não causar curto-circuito nos terminais positivo e negativo e queimar a bateria e o equipamento ao soldar.
:::

**Instruções sobre o uso de baterias:**

1. Por favor, use baterias qualificadas que atendam às especificações.
2. O XIAO pode ser conectado ao seu computador via cabo de dados enquanto usa a bateria; fique tranquilo, pois o XIAO possui um chip de proteção de circuito integrado, o que é seguro.
3. O XIAO ESP32C3 não terá nenhum LED aceso quando alimentado por bateria (a menos que você tenha escrito um programa específico); por favor, não julgue se o XIAO ESP32C3 está funcionando ou não pela condição do LED, julgue de forma razoável pelo seu programa.
4. Lamentamos, mas atualmente não temos como ajudá-lo a verificar o nível restante da bateria por software (porque não há mais pinos de chip disponíveis); você precisa carregar a bateria regularmente ou usar um multímetro para verificar o nível da bateria.

### Verificar a tensão da bateria

Devido à limitação do número de pinos no ESP32C3, os engenheiros não tinham pinos extras para alocar à bateria para medição de tensão, a fim de garantir que o XIAO ESP32C3 tenha o mesmo número de GPIOs que os outros da série XIAO disponíveis.

Mas se você preferir usar um pino separado para medição de tensão da bateria, pode consultar a operação genial de [msfujino](https://forum.seeedstudio.com/u/msfujino). Também gostaríamos de agradecer especialmente a [msfujino](https://forum.seeedstudio.com/u/msfujino) por toda a experiência e esforços compartilhados para o XIAO ESP32C3.

A ideia básica de operação é: A tensão da bateria foi dividida por 1/2 com 200k e conectada à porta A0 para que a tensão pudesse ser monitorada.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

O datasheet indica nominalmente 2500mV em escala completa para conversão AD, mas há uma grande variação de chip para chip, na verdade ±10%. Meu chip tinha 2700mV em escala completa.

Felizmente, o valor de correção calibrado para cada chip é gravado na área de fusíveis e, usando a função `analogReadMilliVolts()`, posso ler o valor de tensão corrigido sem fazer nada especial.

O resultado da conversão AD e a tensão medida pelo multímetro concordam bem entre si, com um erro de cerca de 5 mV, o que não é um problema no uso prático.

Além disso, especialmente durante a comunicação, ocorreram erros em forma de pico, que precisaram ser calculados como média de 16 vezes para removê-los.

A seguir está o procedimento para testar a tensão da bateria.

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // ADC with correction   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // attenuation ratio 1/2, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
O conteúdo acima é do usuário do fórum Seeed Studio **msfujino**, originalmente publicado em:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
Recomendamos que você tenha boas habilidades práticas e melhores habilidades de soldagem antes de tentar medir a tensão da bateria com base no exposto acima, e tome cuidado com ações perigosas como curto-circuitar baterias.
:::

## Modo de sono profundo e despertar

O XIAO ESP32C3 foi projetado para suportar funções de modo de sono profundo e despertar. Para o uso dessas duas funções, fornecemos os seguintes exemplos de uso.

```cpp
#define BUTTON_PIN_BITMASK 0x200000000 // 2^33 in hex

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  esp_deep_sleep_enable_gpio_wakeup(BIT(D1), ESP_GPIO_WAKEUP_GPIO_LOW);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

Se você for rápido o suficiente para abrir o monitor serial antes de o XIAO entrar em sono profundo, poderá ver a saída de mensagens conforme mostrado abaixo. Isso significa que o XIAO está agora "dormindo".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
Após entrar no modo de sono profundo, a porta do XIAO desaparecerá e você precisará acordá-lo para ver o número da porta novamente!
:::

No programa, estamos usando um nível baixo em **D1** para acordar. Isso significa que podemos conectar um botão ao pino D1 e o XIAO acordará quando pressionarmos o botão.

:::caution
O XIAO ESP32-C3 suporta despertar por GPIO e por temporizador, e os pinos que suportam despertar são D0~D3.
:::

## Solução de Problemas

### P1: Meu Arduino IDE trava ao fazer upload de código para a placa

Você pode primeiro tentar reiniciar a placa clicando no **BOTÃO RESET** uma vez enquanto a placa está conectada ao seu PC. Se isso não funcionar, segure o **BOTÃO BOOT**, conecte a placa ao seu PC enquanto segura o botão **BOOT** e, em seguida, solte-o para entrar no **modo bootloader**.

### P2: Minha placa não aparece como dispositivo serial no Arduino IDE

Siga a mesma resposta da **P1** acima.

### P3: Quero regravar o bootloader com o firmware de fábrica

Você pode simplesmente conectar a placa a um PC via **USB Type-C** e regravar o bootloader com o firmware de fábrica usando o **ESP RF Test Tool**.

- **Passo 1.** Segure o **BOTÃO BOOT** e conecte o XIAO ESP32C3 ao PC para entrar no **modo bootloader**

- **Passo 2.** Após a conexão, solte o BOTÃO BOOT

- **Passo 3.** Visite [esta página](https://www.espressif.com/en/support/download/other-tools) e baixe o **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 4.** Extraia o **.zip**, navegue até `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` e abra o **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Passo 5.** Selecione **ESP32C3** como ChipType, sua porta COM, **115200** como BaudRate e clique em **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

Você verá a seguinte saída

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **Passo 6.** Selecione **Flash** e clique em **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **Passo 7.** Baixe o [firmware de fábrica do XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) e selecione-o.

- **Passo 8.** Por fim, clique em **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

Você verá a seguinte saída quando a gravação for bem-sucedida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## Repositório GitHub do MicroPython

- [Repositório MicroPython do XIAO ESP32C3](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## Recursos

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

**Design de Hardware**
- **📄[Datasheet]** [Datasheet do Espressif ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf )
- **📄[Esquemático]** [Esquemático do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_SCH_260116.pdf )
- **🗃️[Arquivos de Design PCB]** 
  - [Projeto KiCad do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_KiCad_260116.zip )
- **🗃️[Bibliotecas de Design PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [Símbolos de Esquemático KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Tabela de Pinagem do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx )

**Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO ESP32-C3 em DXF](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip )
- **🗃️[Dimensões 2D]** [Dados do Pad Inferior do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32C3_v1.2_Dimensioning.zip )
- **📄[Modelo 3D]** [Modelo 3D do XIAO ESP32-C3](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1 )

**Software e Ferramentas**
- **🗃️[Firmware de Fábrica]** [Firmware de Fábrica do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin )
- **🔗[Biblioteca MicroPython]** [Biblioteca MicroPython do XIAO ESP32-C3](https://github.com/IcingTomato/micropython_xiao_esp32c3 )
- **🔗[Platform IO]** [PlatformIO para Seeed Studio XIAO ESP32-C3](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html )

**Outros**
- **🔗[Wiki]** [Primeiro Olhar sobre o Seeed Studio XIAO ESP32-C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html )  
  - Uma ótima introdução ao XIAO ESP32C3, cobrindo recursos principais e uso básico.
- **📄[Documento]** [Relatório de Consumo de Energia do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/Low_Power_Consumption.pdf )

## Recursos do Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
