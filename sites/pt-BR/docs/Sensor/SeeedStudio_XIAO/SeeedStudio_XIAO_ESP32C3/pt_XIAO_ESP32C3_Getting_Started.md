---
description: Introdução ao Seeed Studio XIAO ESP32C3
title: Introdução ao Seeed Studio XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_Getting_Started
sku: 113991054,102010633,101991467
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
createdAt: '2022-11-22'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução ao Seeed Studio XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## Introdução

**Seeed Studio XIAO ESP32C3** é uma placa de desenvolvimento mini para IoT baseada no chip de modo duplo WiFi/Bluetooth **ESP32-C3** da Espressif, apresentando uma **CPU RISC-V de 32 bits** que oferece desempenho de computação poderoso com sua arquitetura eficiente. Ela possui excelente desempenho de radiofrequência, suportando os protocolos **IEEE 802.11 b/g/n WiFi** e **Bluetooth 5 (BLE)**. Esta placa vem com uma antena externa incluída para aumentar a intensidade do sinal para suas aplicações sem fio. Também possui um **fator de forma pequeno e requintado** combinado com um **design montável em superfície de face única**. Está equipada com interfaces ricas e possui **11 E/S digitais** que podem ser usadas como **pinos PWM** e **4 E/S analógicas** que podem ser usadas como **pinos ADC**. Ela suporta quatro interfaces seriais, como **UART, I2C e SPI**. Há também um pequeno **botão de reset** e um **botão de modo bootloader** na placa. A XIAO ESP32C3 é totalmente compatível com o [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) e com a [placa de expansão Seeeduino XIAO](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-Expansion-Board), exceto que, para a placa de expansão Seeeduino XIAO, os contatos de mola SWD na placa não serão compatíveis.

Com relação aos recursos destacados acima, a XIAO ESP32C3 é posicionada como uma **placa de desenvolvimento mini para IoT de alto desempenho, baixo consumo de energia e custo acessível**, adequada para **aplicações de IoT de baixo consumo de energia e aplicações vestíveis sem fio**.

Este wiki mostrará como você pode começar rapidamente a usar a XIAO ESP32C3!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

### Especificações
<table>
  <tr>
    <th>Parâmetro</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>Processador</td>
    <td>ESP32-C3 SoC<br/>Processador de chip RISC-V single-core de 32 bits com pipeline de quatro estágios que opera em até 160 MHz</td>
  </tr>
  <tr>
    <td>Sem fio</td>
    <td>Subsistema Wi-Fi completo de 2,4GHz<br/>Bluetooth Low Energy 5.0/ Bluetooth Mesh</td>
  </tr>
  <tr>
    <td>Memória interna</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
  </tr>
  <tr>
    <td>Interface</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC<br/>1x Botão de reset<br/>1x Botão de boot</td>
  </tr>
  <tr>
    <td>Dimensões</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <td>Energia (típ.)</td>
    <td>Corrente máxima de saída 3,3V: 500mA<br/>Condição de teste: Entrada do pino BAT @ 3,8V<br/>Capacidade de fornecimento: 3A<br/>Corrente de carga: 380mA (rápida) / 40mA (trickle)<br/>Tensão de entrada (VIN): 5V<br/>Tensão de entrada (BAT): 3,7V</td>
  </tr>
  <tr>
    <td>Consumo de energia em Deep Sleep</td>
    <td>Modo Deep Sleep: 44 μA</td>
  </tr>
  <tr>
    <td>Consumo de energia com Wi-Fi ativado</td>
    <td>Modo ativo: 75 mA<br/>Modo Modem-sleep: 25 mA<br/>Modo Light-sleep: 4 mA</td>
  </tr>
  <tr>
    <td>Consumo de energia com BLE ativado</td>
    <td>Modo Modem-sleep: 27 mA<br/>Modo Light-sleep: 10 mA</td>
  </tr>
  <tr>
    <td>Temperatura de trabalho</td>
    <td>-40°C ~ 85°C</td>
  </tr>
</table>
### Recursos

- **CPU poderosa:** ESP32-C3, processador RISC-V single-core de 32 bits que opera em até 160 MHz
- **Subsistema Wi-Fi completo:** Está em conformidade com o protocolo IEEE 802.11b/g/n e suporta modo Station, modo SoftAP, modo SoftAP + Station e modo promíscuo
- **Subsistema Bluetooth LE:** Suporta recursos do Bluetooth 5 e Bluetooth mesh
- **Ultrabaixo consumo de energia:** O consumo de energia em deep sleep é de cerca de 43μA
- **Melhor desempenho de RF:** Antena RF externa incluída
- **Chip de carregamento de bateria:** Suporta gerenciamento de carga e descarga de bateria de lítio
- **Ricos recursos internos:** 400KB de SRAM e 4MB de memória flash onboard
- **Tamanho ultrapequeno:** Tão pequeno quanto um polegar (21x17.8mm), fator de forma clássico da série XIAO para dispositivos vestíveis e projetos pequenos
- **Recursos de segurança confiáveis:** Aceleradores de hardware criptográfico que suportam AES-128/256, Hash, RSA, HMAC, assinatura digital e boot seguro
- **Interfaces ricas:** 1xI2C, 1xSPI, 2xUART, 11xGPIO(PWM), 4xADC, 1xinterface de almofada de conexão JTAG
- Componentes em um único lado, design para montagem em superfície

## Visão geral do hardware

> *A3(GP105) - Usa ADC2, que pode se tornar inoperante devido a sinais de amostragem falsos. Para leituras analógicas confiáveis, use ADC1(A0/A1/A2). Consulte o datasheet do ESP32-C3.

### Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/XIAO_ESP32-C3_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/XIAO_ESP32-C3_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## Mapa de pinos

| Pino XIAO       | Função   | Pino do chip | Funções alternativas                | Descrição            |
| :-------------: | :-------: | :-------: | :---------------------------------: | :-----------------: |
| 5V              | VBUS      |           |                                     | Entrada/Saída de energia |
| GND             |           |           |                                     |                      |
| 3V3             | 3V3_OUT   |           |                                     | Saída de energia     |
| D0              | Analógico | GPIO2     | ADC1_CH2,                           | GPIO, ADC            |
| D1              | Analógico | GPIO3     | ADC1_CH3                            | GPIO, ADC            |
| D2              | Analógico | GPIO4     | ADC1_CH4, FSPIHD, MTMS              | GPIO, ADC            |
| D3              | Analógico | GPIO5     | ADC2_CH0, FSPIWP, MTDI              | GPIO, ADC            |
| D4              | SDA       | GPIO6     | FSPICLK, MTCK                       | GPIO, I2C Dados      |
| D5              | SCL       | GPIO7     | FSPID, MTDO                         | GPIO, I2C Clock      |
| D6              | TX        | GPIO21    | U0TXD                               | GPIO, UART Transmit  |
| D7              | RX        | GPIO20    | U0RXD                               | GPIO, UART Receive   |
| D8              | SCK       | GPIO8     |                                     | GPIO, SPI Clock      |
| D9              | MISO      | GPIO9     |                                     | GPIO, SPI Dados      |
| D10             | MOSI      | GPIO10    | FSPICS0                             | GPIO, SPI Dados      |
| MTDO            |           | GPIO7     |                             |            JTAG              |
| MTDI            |           | GPIO5     |                        |        JTAG, ADC                  |
| MTCK            |           | GPIO6     |                           |        JTAG, ADC               |
| MTMS            |           | GPIO4     |                            |               JTAG, ADC       |
| Reset           |           | CHIP_EN   |                                     | EN                   |
| Boot            |           | GPIO9     |                                     | Entrar no modo Boot  |
| U.FL-R-SMT1     |           | LNA_IN    |                                     | Antena UFL           |
| Light           |           | VCC_3V3   |                                     | CHG-LED              |

### Pinos de alimentação

- 5V - Esta é a saída de 5V da porta USB. Você também pode usá-la como entrada de tensão, mas deve ter algum tipo de diodo (schottky, sinal, potência) entre sua fonte de alimentação externa e este pino, com o ânodo para a bateria e o cátodo para o pino de 5V.
- 3V3 - Esta é a saída regulada do regulador onboard. Você pode drenar 700mA
- GND - Terra de energia/dados/sinal

### Pinos de strapping

De acordo com o manual do chip do ESP32C3, **GPIO2**, **GPIO8** e **GPIO9** no chip são pinos de strapping; as configurações de nível alto e baixo desses pinos podem permitir que o chip entre em diferentes modos de Boot. Por favor, preste atenção a este ponto ao usar esses pinos, caso contrário isso pode impedir que sua XIAO faça upload ou execute o programa o tempo todo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

Primeiro, vamos conectar a XIAO ESP32C3 ao computador, conectar um LED à placa e enviar um código simples a partir da Arduino IDE para verificar se a placa está funcionando bem, piscando o LED conectado.

### Preparação de hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

:::tip

Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir o [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

- **Passo 1.** Conecte a XIAO ESP32C3 ao seu computador por meio de um cabo USB Tipo-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Passo 2.** Conecte um LED ao pino D10 como a seguir

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**Nota:** Certifique-se de conectar um resistor (cerca de 150Ω) em série para limitar a corrente através do LED e evitar corrente excessiva que possa queimar o LED

### Preparação de software

- **Passo 1.** Baixe e instale a versão mais recente da Arduino IDE de acordo com o seu sistema operacional

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **Passo 2.** Inicie o aplicativo Arduino

- **Passo 3.** Adicione o pacote da placa ESP32 à sua Arduino IDE

Navegue até **File > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

Navegue até **Tools > Board > Boards Manager...**, digite a palavra-chave "**esp32**" na caixa de pesquisa, selecione a versão mais recente de **esp32** e instale-a.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **Passo 4.** Selecione sua placa e porta

**Placa**

Navegue até **Tools > Board > ESP32 Arduino** e selecione "**XIAO_ESP32C3**". A lista de placas é um pouco longa e você precisa rolar até o final para encontrá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**Porta**

Navegue até **Tools > Port** e selecione o nome da porta serial do XIAO ESP32C3 conectado. Provavelmente será COM3 ou superior (**COM1** e **COM2** são geralmente reservadas para portas seriais de hardware).

### Execute seu primeiro programa Blink

- **Passo 1.** Copie o código abaixo para a Arduino IDE

Certifique-se de que seu `D10` esteja conectado a um LED como mostrado no diagrama acima.

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

- **Passo 2.** Clique no botão **Upload** para enviar o código para a placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

Depois de enviado, você verá o LED conectado piscando com um atraso de 1 segundo entre cada piscada. Isso significa que a conexão foi bem-sucedida e agora você pode explorar mais projetos com o XIAO ESP32C3!

## Uso da bateria

O XIAO ESP32C3 é capaz de usar uma bateria de lítio de 3,7 V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de fiação.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento ao soldar.
:::

**Instruções sobre o uso de baterias:**

1. Use baterias qualificadas que atendam às especificações.
2. O XIAO pode ser conectado ao seu computador por meio de cabo de dados enquanto usa a bateria; fique tranquilo, o XIAO possui um chip de proteção de circuito integrado, que é seguro.
3. O XIAO ESP32C3 não terá nenhum LED aceso quando estiver alimentado por bateria (a menos que você tenha escrito um programa específico), portanto, não julgue se o XIAO ESP32C3 está funcionando ou não pela condição do LED; avalie isso de forma adequada pelo seu programa.
4. Desculpe, atualmente não temos como ajudá-lo a verificar o nível restante da bateria por meio de software (porque não há mais pinos de chip disponíveis); você precisa carregar a bateria regularmente ou usar um multímetro para verificar o nível da bateria.

### Verifique a tensão da bateria

Devido à limitação do número de pinos no ESP32C3, os engenheiros não tinham pinos extras para alocar à bateria para medição de tensão, a fim de garantir que o XIAO ESP32C3 tivesse o mesmo número de GPIOs disponíveis que as outras séries XIAO.

Mas se você preferir usar um pino separado para medição da tensão da bateria, pode consultar a operação genial de [msfujino](https://forum.seeedstudio.com/u/msfujino). Também gostaríamos de agradecer especialmente a [msfujino](https://forum.seeedstudio.com/u/msfujino) por toda a experiência e esforços compartilhados para o XIAO ESP32C3.

A ideia básica de operação é: a tensão da bateria foi dividida por 1/2 com 200k e conectada à porta A0 para que a tensão pudesse ser monitorada.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

A folha de dados diz nominalmente 2500 mV de conversão AD em escala total, mas há uma grande variação de chip para chip, na verdade ±10%. Meu chip tinha 2700 mV de escala total.

Felizmente, o valor de correção calibrado para cada chip é escrito na área de fusíveis e, usando a função `analogReadMilliVolts()`, posso ler o valor de tensão corrigido sem fazer nada especial.

O resultado da conversão AD e a tensão medida pelo multímetro concordam bem entre si, com um erro de cerca de 5 mV, o que não é um problema no uso prático.

Além disso, especialmente durante a comunicação, ocorreram erros em forma de picos, que tiveram que ser suavizados por média 16 vezes para removê-los.

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
O conteúdo acima é do usuário **msfujino** do fórum da Seeed Studio, publicado originalmente em:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
Recomendamos que você tenha boas habilidades práticas e melhores habilidades de soldagem antes de tentar medir a tensão da bateria com base no acima, e seja cauteloso com ações perigosas, como curto-circuitar baterias.
:::

## Modo de sono profundo e despertar

O XIAO ESP32C3 foi projetado para suportar o modo de sono profundo e funções de despertar. Para o uso dessas duas funções, fornecemos os seguintes exemplos de uso.

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

Se você for rápido o suficiente para ligar o monitor serial antes que o XIAO entre em sono profundo, então poderá ver a mensagem de saída como mostrado abaixo. Isso significa que o XIAO agora está "dormindo".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
Depois de entrar no modo de sono profundo, a porta do XIAO desaparecerá e você precisará acordá-lo para ver novamente o número da porta!
:::

No programa, estamos usando um nível baixo em **D1** para despertar. Isso significa que podemos conectar um botão ao pino D1 e o XIAO acordará quando pressionarmos o botão.

:::caution
O XIAO ESP32-C3 suporta despertar por GPIO e por temporizador, e os pinos que suportam despertar são D0~D3.
:::

## Solução de problemas

### P1: Minha Arduino IDE trava ao enviar código para a placa

Você pode primeiro tentar reiniciar a placa clicando uma vez no **RESET BUTTON** enquanto a placa estiver conectada ao seu PC. Se isso não funcionar, mantenha pressionado o **BOOT BUTTON**, conecte a placa ao seu PC enquanto mantém o botão **BOOT** pressionado e, em seguida, solte-o para entrar no **modo bootloader**.

### P2: Minha placa não está aparecendo como um dispositivo serial na Arduino IDE

Siga a mesma resposta da **P1** acima.

### P3: Quero regravar o bootloader com o firmware de fábrica

Você pode simplesmente conectar a placa a um PC via **USB Type-C** e regravar o bootloader com o firmware de fábrica usando a **ESP RF Test Tool**.

- **Passo 1.** Mantenha pressionado o **BOOT BUTTON** e conecte o XIAO ESP32C3 ao PC para entrar no **modo bootloader**

- **Passo 2.** Depois que estiver conectado, solte o BOOT BUTTON

- **Passo 3.** Visite [esta página](https://www.espressif.com/en/support/download/other-tools) e baixe **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Passo 4.** Extraia o arquivo **.zip**, navegue até `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` e abra **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Passo 5.** Selecione **ESP32C3** como o ChipType, sua porta COM, **115200** como o BaudRate e clique em **open**

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

## Repositório MicroPython no GitHub

- [Repositório MicroPython do XIAO ESP32C3](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## Recursos

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

**Projeto de Hardware**
- **📄[Datasheet]** [Datasheet do Espressif ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf )
- **📄[Esquemático]** [Esquemático do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_SCH_260116.pdf )
- **🗃️[Arquivos de Projeto de PCB]** 
  - [Projeto KiCad do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_KiCad_260116.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Folha de Pinagem do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx )

**Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO ESP32-C3 em DXF](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip )
- **🗃️[Dimensões 2D]** [Dados dos Pads Inferiores do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32C3_v1.2_Dimensioning.zip )
- **📄[Modelo 3D]** [Modelo 3D do XIAO ESP32-C3](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1 )

**Software e Ferramentas**
- **🗃️[Firmware de Fábrica]** [Firmware de Fábrica do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin )
- **🔗[Biblioteca MicroPython]** [Biblioteca MicroPython do XIAO ESP32-C3](https://github.com/IcingTomato/micropython_xiao_esp32c3 )
- **🔗[Platform IO]** [PlatformIO para Seeed Studio XIAO ESP32-C3](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html )

**Outros**
- **🔗[Wiki]** [Primeiro Contato com o Seeed Studio XIAO ESP32-C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html )  
  - Uma ótima introdução ao XIAO ESP32C3, cobrindo recursos principais e uso básico.
- **📄[Documento]** [Relatório de Baixo Consumo de Energia do XIAO ESP32-C3](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/Low_Power_Consumption.pdf )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos do Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
