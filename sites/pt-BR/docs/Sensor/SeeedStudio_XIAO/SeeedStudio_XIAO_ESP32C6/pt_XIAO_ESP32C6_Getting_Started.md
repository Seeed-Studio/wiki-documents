---
description: Introdução ao Seeed Studio XIAO ESP32C6.
title: Introdução ao Seeed Studio XIAO ESP32C6
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
  - XIAO
  - ESP32C6
  - Seeeduino
slug: /xiao_esp32c6_getting_started
sku: 113991254,102010636,101991470
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 08/05/2024
  author: Spencer
createdAt: '2024-03-29'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introdução ao Seeed Studio XIAO ESP32C6

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introdução

O Seeed Studio XIAO ESP32C6 é alimentado pelo altamente integrado [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6), construído sobre **dois processadores RISC-V de 32 bits**, com um processador de alto desempenho (HP) **rodando até 160 MHz**, e um processador RISC-V de 32 bits de baixo consumo (LP), que pode ser clockado até 20 MHz. Há **512KB de SRAM e 4 MB de Flash no chip**, permitindo mais espaço de programação e trazendo mais possibilidades para cenários de controle de IoT.

O XIAO ESP32C6 é **nativamente compatível com Matter graças à sua conectividade sem fio aprimorada**. A pilha sem fio suporta **WiFi 6 de 2,4 GHz, Bluetooth® 5.3, Zigbee e Thread (802.15.4)**. Como o primeiro membro da família XIAO compatível com Thread, é uma escolha perfeita para construir projetos compatíveis com Matter, alcançando assim interoperabilidade em casas inteligentes.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### Especificações
<table>
  <tr>
    <th>Produto</th>
    <td>XIAO ESP32-C6</td>
    <td><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html ">XIAO ESP32-C3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html ">XIAO ESP32-S3</a></td>
  </tr>
  <tr>
    <th>Processador</th>
    <td>Espressif ESP32-C6 SoC<br/>dois processadores RISC-V de 32 bits, com o de alto desempenho rodando até 160 MHz e o de baixo consumo clockado até 20 MHz</td>
    <td>Espressif ESP32-C3 SoC<br/>processador RISC-V single-core de 32 bits com pipeline de quatro estágios que opera até 160 MHz</td>
    <td>Espressif ESP32-S3R8 SoC<br/>processador Xtensa LX7 dual-core de 32 bits rodando até 240 MHz</td>
  </tr>
  <tr>
    <th rowspan="3">Sem fio</th>
    <td>Subsistema Wi-Fi 6 completo de 2,4GHz</td>
    <td>Subsistema Wi-Fi completo de 2,4GHz</td>
    <td>Subsistema Wi-Fi completo de 2,4GHz</td>
  </tr>
  <tr>
    <td colspan="3">Bluetooth Low Energy 5.0</td>
  </tr>
  <tr>
    <td>Zigbee, Thread, IEEE 802.15.4</td>
    <td>/</td>
    <td>/</td>
  </tr>
  <tr>
    <th>Memória no chip</th>
    <td>512KB SRAM &amp; 4MB Flash</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
    <td>8MB PSRAM &amp; 8MB Flash</td>
  </tr>
  <tr>
    <th rowspan="2">Interface</th>
    <td>1x UART<br/>1x LP_UART<br/>1x IIC<br/>1x LP_IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>7x ADC<br/>1x SDIO</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x User LED<br/>1x Charge LED</td>
  </tr>
  <tr>
    <td colspan="3">1x botão de Reset<br/>1x botão de Boot</td>
  </tr>
  <tr>
    <th>Dimensões</th>
    <td colspan="3">21 x 17.8mm</td>
  </tr>
  <tr>
    <th>Alimentação</th>
    <td colspan="3">Tensão de entrada (Type-C): 5V<br/>Tensão de entrada (BAT): 3.7V</td>
  </tr>
  <tr>
    <th>Modelo de Consumo de Energia (Típ.)<br/>(Alimentação: 3.8V)</th>
    <td>Modo Modem-sleep: 30 mA<br/>Modo Light-sleep: 3.1 mA<br/>Modo Deep Sleep: 15 μA</td>
    <td>Modo Modem-sleep: 24 mA<br/>Modo Light-sleep: 3 mA<br/>Modo Deep Sleep: 44 μA</td>
    <td>Modo Modem-sleep: 27 mA<br/>Modo Light-sleep: 2 mA<br/>Modo Deep Sleep: 14 μA</td>
  </tr>
  <tr>
    <th>Temperatura de trabalho</th>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 65°C</td>
  </tr>
</table>

> [XIAO ESP32-S3 vs ESP32-C3 vs ESP32-C6: Qual é o melhor para o seu projeto?](https://www.seeedstudio.com/blog/2026/01/14/xiao-esp32-s3-c3-c6-comparison/)

### Recursos

- **Conectividade aprimorada**: Integra conectividade de rádio Wi-Fi 6 (802.11ax) de ***2.4*** GHz, Bluetooth 5(LE) e IEEE 802.15.4, permitindo a aplicação dos protocolos **Thread** e **Zigbee**.
- **Compatível nativamente com Matter**: Suporta a construção de projetos de casa inteligente compatíveis com Matter, garantindo interoperabilidade entre diferentes dispositivos inteligentes.
- **Segurança criptografada no chip**: Utiliza o ESP32-C6 para fornecer recursos de boot seguro, criptografia e Trusted Execution Environment (TEE), aprimorando a segurança de projetos de casa inteligente.
- **Desempenho RF excepcional**: Possui uma antena integrada com alcance BLE/Wi-Fi de até *80m* e oferece uma interface para conexão de uma antena UFL externa, garantindo conectividade confiável.
- **Aproveitamento do consumo de energia**: Oferece quatro modos de operação, incluindo um modo de deep sleep com consumo tão baixo quanto *15* μA, além de suporte para gerenciamento de carga de bateria de lítio.
- **Processadores RISC-V duplos**: Incorpora dois processadores RISC-V de 32 bits, com o processador de alto desempenho capaz de rodar até 160 MHz e o processador de baixo consumo até *20 MHz*.
- **Designs clássicos XIAO**: Mantém o formato do tamanho de um polegar de 21 x 17.8mm e o design de montagem em um único lado, ideal para projetos com espaço limitado, como dispositivos vestíveis.

## Visão geral do hardware

### Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAO_ESP32-C6_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAO_ESP32-C6_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

:::tip RF Switch

O recurso **RF Switch** permite alternar entre a antena cerâmica integrada e uma antena externa configurando o `GPIO14`. Para habilitar essa função, *você deve primeiro definir o `GPIO3` para nível baixo*, pois isso ativa o controle do RF switch.  

- **GPIO14 em nível baixo (configuração padrão)**: O dispositivo usa a antena cerâmica integrada.
- **GPIO14 em nível alto**: O dispositivo alterna para a antena externa.  

Por padrão, o `GPIO14` é definido para nível baixo, habilitando a antena integrada. Para usar uma antena externa, defina o `GPIO14` para nível alto. Consulte o código de exemplo abaixo para obter orientação sobre como configurar `GPIO3` e `GPIO14` para ativar a antena externa:

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW); // digitalWrite(3, LOW); // Activate RF switch control

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // Use external antenna
}
```


:::

## Mapa de pinos

| Pino XIAO                | Função    | Pino do chip | Funções alternativas | Descrição                           |
| :---------------------: | :-------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS      |           |                    | Entrada/Saída de alimentação        |
| GND                     |           |           |                    |                                      |
| 3V3                     | 3V3_OUT   |           |                    | Saída de alimentação                |
| D0                      | Analógico | GPIO0     | LP_GPIO0           | GPIO, ADC                            |
| D1                      | Analógico | GPIO1     | LP_GPIO1           | GPIO, ADC                            |
| D2                      | Analógico | GPIO2     | LP_GPIO2           | GPIO, ADC                            |
| D3                      | Digital   | GPIO21    | SDIO_DATA1         | GPIO                                 |
| D4                      | SDA       | GPIO22    | SDIO_DATA2         | GPIO, dados I2C                      |
| D5                      | SCL       | GPIO23    | SDIO_DATA3         | GPIO, clock I2C                      |
| D6                      | TX        | GPIO16    |                    | GPIO, transmissão UART               |
| D7                      | RX        | GPIO17    |                    | GPIO, recepção UART                  |
| D8                      | SCK       | GPIO19    | SPI_CLK           | GPIO, clock SPI                      |
| D9                      | MISO      | GPIO20    | SPI_MISO          | GPIO, dados SPI                      |
| D10                     | MOSI      | GPIO18    | SPI_MOSI           | GPIO, dados SPI                      |
| MTDO                    |           | GPIO7     |                    | JTAG                                 |
| MTDI                    |           | GPIO5     |                    | JTAG, ADC                            |
| MTCK                    |           | GPIO6     |                    | JTAG, ADC                            |
| MTMS                    |           | GPIO4     |                    | JTAG, ADC                            |
| EN                      |           | CHIP_PU   |                    | Reset                                |
| Boot                    |           | GPIO9     |                    | Entrar no modo Boot                  |
| RF Switch Port Select   |           | GPIO14    |                    | Alternar entre a antena integrada e a antena UFL |
| RF Switch Power         |           | GPIO3     |                    | Alimentação                          |
| Light                   |           | GPIO15    |                    | Luz do usuário                       |
## Primeiros passos

Para permitir que você comece mais rápido com o XIAO ESP32C6, leia a preparação de hardware e software abaixo para preparar o XIAO.

### Preparação de hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

:::tip
Alguns cabos USB podem apenas fornecer energia e não transferem dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir o [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

#### Soldar o header

O XIAO ESP32C6 é enviado sem pinos de header por padrão, você precisa preparar seus próprios pinos de header e soldá-los nos pinos correspondentes do XIAO para que possa conectá-lo à placa de expansão ou ao sensor.

Devido ao tamanho reduzido do XIAO ESP32C6, tenha cuidado ao soldar os headers, não deixe pinos diferentes grudarem entre si e não deixe a solda encostar no shield ou em outros componentes. Caso contrário, isso pode fazer com que o XIAO entre em curto-circuito ou não funcione corretamente, e as consequências causadas por isso serão de responsabilidade do usuário.

#### Modo BootLoader

Às vezes usamos o programa errado e o XIAO parece perder as portas ou não funcionar corretamente. O comportamento específico é:

- Conectado ao computador, mas nenhum número de porta é encontrado para o XIAO.
- O computador está conectado e o número da porta aparece, mas o upload do programa falha.

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO no modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e falhas de upload. O método específico é:

- **Passo 1**. Pressione e segure o botão BOOT no XIAO ESP32C6 sem soltá-lo.
- **Passo 2**. Mantenha o botão BOOT pressionado e então conecte ao computador através do cabo de dados. Solte o botão BOOT após conectar ao computador.
- **Passo 3**. Faça o upload do programa **Blink** para verificar o funcionamento do XIAO ESP32C6.

#### Reset

Quando o programa rodar de forma anormal, você pode pressionar Reset uma vez durante a energização para que o XIAO volte a executar o programa carregado.

Quando você pressiona e mantém pressionada a tecla BOOT enquanto liga a placa e, em seguida, pressiona a tecla Reset uma vez, você também pode entrar no modo BootLoader.

### Preparação de Software

A ferramenta de programação recomendada para o XIAO ESP32C6 é o Arduino IDE, portanto você precisa concluir a instalação do Arduino como parte da preparação de software.

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).

E o pacote on-board para o XIAO ESP32C6 requer pelo menos a versão **2.0.8** para estar disponível.

:::

- **Passo 1.** Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>

  <br></br>
- **Passo 2.** Inicie o aplicativo Arduino.
- **[Passo 3](#add-board).**  Adicione o pacote on-board do XIAO ESP32C6 ao Arduino IDE e clique em `OK`.
- **Passo 4.** Feche o Arduino IDE e abra-o novamente.

#### Adicionar a placa XIAO-C6 {#add-board}

Para instalar a placa XIAO ESP32C6, siga estes passos:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. Adicione a URL do gerenciador de placas acima nas preferências do seu Arduino IDE, que é retirada de [Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide).

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. Baixe o pacote de placa XIAO ESP32C6.

:::note
Disponível apenas se a versão da placa esp32 for maior que `3.0.0`.
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. Opte pela variante `XIAO_ESP32C6`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

Agora divirta-se programando ✨.

#### Execute seu primeiro programa Blink

- **Passo 1.** Inicie o aplicativo Arduino.

- **Passo 2.** Navegue até **File > Examples > 01.Basics > Blink** e abra o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **Passo 3.** Selecione o modelo de placa como **XIAO ESP32C6** e selecione o número de porta correto para fazer o upload do programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

Depois que o programa for carregado com sucesso, você verá a seguinte mensagem de saída e poderá observar que o LED laranja no lado direito do XIAO ESP32C6 está piscando.

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## Uso da bateria

A série XIAO ESP32C6 possui um chip de gerenciamento de energia integrado, permitindo que seja alimentada independentemente por uma bateria ou que carregue a bateria através de sua porta USB.

Para conectar uma bateria ao seu XIAO, recomendamos usar uma bateria de lítio recarregável de 3,7 V qualificada. Ao soldar a bateria, distinga cuidadosamente entre os terminais positivo e negativo. A almofada do eletrodo negativo deve estar localizada no lado esquerdo, próxima à marcação em silk screen "D8", enquanto a almofada do eletrodo positivo deve estar localizada no lado direito, próxima à marcação em silk screen "D5".

:::caution
Ao usar alimentação por bateria, não haverá tensão presente no pino de 5V.
:::

:::tip Luz indicadora vermelha

O XIAO ESP32C6 possui uma luz indicadora vermelha para carregamento da bateria, semelhante ao [XIAO ESP32S3](/pt-br/xiao_esp32s3_getting_started/#uso-da-bateria):

O comportamento da luz vermelha para o XIAO ESP32C6 é o seguinte:

- Quando nenhuma bateria está conectada:
  - A luz vermelha acende quando o cabo Tipo-C é conectado e apaga após 30 segundos.
- Quando uma bateria está conectada e o cabo Tipo-C é conectado para carregamento:
  - A luz vermelha pisca.
- Quando a bateria está totalmente carregada através da conexão Tipo-C:
  - A luz vermelha apaga.

:::

## Leitura da tensão da bateria

Para monitorar a tensão da bateria no XIAO ESP32C6, de forma semelhante ao [XIAO ESP32C3](/pt-br/XIAO_ESP32C3_Getting_Started/#verificar-a-tensão-da-bateria), você precisará soldar um resistor de 200k em uma configuração de 1:2. Essa configuração reduz a tensão pela metade, permitindo o monitoramento seguro através da porta analógica A0.

### Código de exemplo

O código abaixo inicializa o ADC na porta A0 e faz a média de 16 leituras para calcular a tensão da bateria, ajustando para a razão de atenuação 1:2 do divisor de tensão.

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // Configure A0 as ADC input
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

Este código faz 16 medições a partir do ADC, calcula a média e então compensa a razão 1:2 do divisor de tensão para fornecer a tensão da bateria em volts com três casas decimais de precisão.

## Modo de deep sleep e wake-up

O XIAO ESP32C6 possui um modo de deep sleep completo e função de wake-up. Aqui mostraremos dois dos exemplos mais comuns oferecidos pelo ESP.

### Demo1: Deep Sleep com Wake Up Externo

Este código mostra como usar o deep sleep com um gatilho externo como fonte de wake up e como armazenar dados na memória RTC para usá-los após reinicializações.

```cpp
/*
Hardware Connections
======================
Push Button to GPIO 0 pulled down with a 10K Ohm
resistor

NOTE:
======
Bit mask of GPIO numbers which will cause wakeup. Only GPIOs
which have RTC functionality can be used in this bit map.
For different SoCs, the related GPIOs are:
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // GPIO 0 bitmask for ext1

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

  /*
  First we configure the wake up source
  We set our ESP32 to wake up for an external trigger.
  There are two types for ESP32, ext0 and ext1, ext0 
  don't support ESP32C6 so we use ext1.
  */

  //If you were to use ext1, you would use it like
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

### Demo2: Modo Deep Sleep com Despertar por Timer

O ESP32 oferece um modo de deep sleep para uma economia de energia eficaz, já que energia é um fator importante para aplicações de IoT. Nesse modo, as CPUs, a maior parte da RAM e todos os periféricos digitais que são acionados a partir de APB_CLK são desligados. As únicas partes do chip que ainda podem permanecer ligadas são: o controlador RTC, os periféricos RTC e as memórias RTC.

Este código demonstra o deep sleep mais básico com um timer para acordá‑lo e como armazenar dados na memória RTC para usá‑los após reinicializações.

```cpp
/*
Simple Deep Sleep with Timer Wake Up
=====================================
This code is under Public Domain License.

Author:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  5        /* Time ESP32 will go to sleep (in seconds) */

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

  /*
  First we configure the wake up source
  We set our ESP32 to wake up every 5 seconds
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) +
  " Seconds");

  /*
  Next we decide what all peripherals to shut down/keep on
  By default, ESP32 will automatically power down the peripherals
  not needed by the wakeup source, but if you want to be a poweruser
  this is for you. Read in detail at the API docs
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  Left the line commented as an example of how to configure peripherals.
  The line below turns off all RTC peripherals in deep sleep.
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("Configured all RTC Peripherals to be powered down in sleep");

  /*
  Now that we have setup a wake cause and if needed setup the
  peripherals state in deep sleep, we can now start going to
  deep sleep.
  In the case that no wake up sources were provided but deep
  sleep was started, it will sleep forever unless hardware
  reset occurs.
  */
  Serial.println("Going to sleep now");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

:::tip
Se você quiser aprender a usar mais funções do modo deep sleep e de despertar, pode encontrar mais programas de exemplo escritos oficialmente para o chip pela ESP na Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## Recursos

**Projeto de Hardware**
- **📄[Datasheet]** [Espressif ESP32-C6 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf )
- **📄[Esquemático]** [XIAO ESP32-C6 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH_260114.pdf )
- **🗃️[Arquivos de Projeto de PCB]** [XIAO ESP32-C6 KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH&PCB_260114.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [XIAO ESP32-C6 Pinout Sheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx )

**Projeto Mecânico**
- **📄[Modelo 3D]** [XIAO ESP32-C6 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1 )

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Recursos do Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
