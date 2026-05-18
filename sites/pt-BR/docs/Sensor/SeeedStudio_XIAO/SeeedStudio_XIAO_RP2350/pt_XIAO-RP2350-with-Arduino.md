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
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/xiao_rp2350_arduino/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO RP2350 com Arduino

A placa Seeed Studio XIAO RP2350 agora oferece suporte à programação via Arduino, graças ao [arduino-pico core](https://github.com/earlephilhower/arduino-pico). Este guia ajudará você a configurar e começar a usar o Arduino na sua placa RP2350.

## Recursos

- **Placa MCU poderosa:** Equipada com um chip Raspberry Pi RP2350 com dois núcleos Arm Cortex-M33 simétricos @ 150MHz com FPU.
- **Recursos de segurança aprimorados:** Secure boot integrado e bootloader criptografado garantem a segurança da aplicação.
- **Suporte de software:** Compatível com C/C++ e MicroPython, garantindo desenvolvimento e prototipagem de projetos com facilidade.
- **Ricos recursos onboard:** Integra um LED RGB, 2MB de Flash, 520kB de SRAM e 19 GPIOs multifunção (Analógico, Digital, I²C, UART, SPI, PWM).
- **8 novos IOs expandidos:** Em comparação com os MCUs XIAO anteriores, a adição de 8 pinos IO na parte traseira suporta aplicações mais complexas.
- **Projeto de energia eficiente:** Consumo ultrabaixo de apenas 50μA em modo de suspensão, permitindo alimentação por bateria. A medição direta da tensão da bateria via IO interno aprimora o sistema de gerenciamento de bateria (BMS).
- **Design compacto do tamanho de um polegar:** Medindo 21 x 17,8 mm, adotando o formato clássico XIAO da Seeed Studio, ideal para aplicações com restrição de espaço.
- **Amigável à produção:** Design SMD (Surface Mount Device) com todos os componentes na frente e furos em forma de selo em ambos os lados, facilitando a produção em massa eficiente.

## Especificação

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
     <th>Pinout frontal do XIAO RP2350</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>Pinout traseiro do XIAO RP2350</th>
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

Precisa de mais detalhes sobre os pinouts? Navegue até [Assets and Resources](#assets--resources) abaixo.


## **Mapa de pinos**
| Pino XIAO               | Função    | Pino do chip | Funções alternativas | Descrição                            |
| :---------------------: | :-------: | :----------: | :------------------: | :---------------------------------- |
| 5V                      | VBUS       |              |                    | Entrada/Saída de energia             |
| GND                     |            |              |                    |                                      |
| 3V3                     | 3V3_OUT    |              |                    | Saída de energia                     |
| D0                      | Analógico  | GPIO26       |                    | GPIO, ADC                            |
| D1                      | Analógico  | GPIO27       |                    | GPIO, ADC                            |
| D2                      | Analógico  | GPIO28       |                    | GPIO, ADC                            |
| D3                      | SPI0_CSn   | GPIO5        |                    | GPIO, SPI                            |
| D4                      | SDA1       | GPIO6        |                    | GPIO, dados I2C                      |
| D5                      | SCL1       | GPIO7        |                    | GPIO, clock I2C                      |
| D6                      | TX0        | GPIO0        |                    | GPIO, transmissão UART               |
| D7                      | RX0        | GPIO1        |                    | GPIO, recepção UART                  |
| D8                      | SPI0_SCK   | GPIO2        |                    | GPIO, clock SPI                      |
| D9                      | SPI0_MISO  | GPIO4        |                    | GPIO, dados SPI                      |
| D10                     | SPI0_MOSI  | GPIO3        |                    | GPIO, dados SPI                      |
| D11                     | RX1        | GPIO21       |                    | GPIO, recepção UART                  |
| D12                     | TX1        | GPIO20       |                    | GPIO, transmissão UART               |
| D13                     | SCL0       | GPIO17       |                    | GPIO, clock I2C                      |
| D14                     | SDA0       | GPIO16       |                    | GPIO, dados I2C                      |
| D15                     | SPI1_MOSI  | GPIO11       |                    | GPIO, dados SPI                      |
| D16                     | SPI1_MISO  | GPIO12       |                    | GPIO, dados SPI                      |
| D17                     | SPI1_SCK   | GPIO10       |                    | GPIO, clock SPI                      |
| D18                     | SPI1_Csn   | GPIO9        | Csn                |                                      |
| ADC_BAT                 |            | GPIO29       |                    | Ler o valor de tensão da bateria     |
| ADC_BAT_EN              |            | GPIO19       |                    | Habilitar detecção de tensão da BAT  | 
| Reset                   |            | RUN          |                    | RUN                                  |
| Boot                    |            | RP2040_BOOT  |                    | Entrar no modo Boot                  |
| CHARGE_LED              |            | NCHG         |                    | CHG-LED_Vermelho                     |
| RGB LED                 |            | GPIO22       |                    | LED RGB                              |
| USER_LED                |            | GPIO25       |                    | Luz de usuário_Amarela               |
## Pré-requisitos

Para começar, certifique-se de ter:

- Uma placa RP2350
- A Arduino IDE
- Um cabo USB

## Configurando o software

### 1. Instale a Arduino IDE

Baixe e instale a versão mais recente da Arduino IDE no site oficial: [Arduino Software](https://www.arduino.cc/en/software).

### 2. Adicione o suporte à placa RP2350

1. Abra a Arduino IDE e navegue até **File** > **Preferences**.
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

1. Abra a Arduino IDE e crie um novo sketch.
2. Escreva seu código. Por exemplo, use o código de exemplo `Blink`.
3. Vá em **Tools** > **Port** e selecione a porta onde seu RP2350 está conectado.

<div style={{ textAlign: 'center' }}>
<img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/arduino-firmware-upload.png" style={{ width: 680, height: 'auto', "border-radius": '12.8px' }} />
</div>

## Verificação de Desempenho em Baixo Consumo

O design de alimentação do XIAO RP2350 oferece excelente desempenho em cenários de baixo consumo de energia e pode ser amplamente aplicado a várias aplicações de baixo consumo.

### Conexão da bateria

O XIAO RP2350 pode ser alimentado por uma bateria de lítio de 3,7 V. Você pode consultar o diagrama abaixo para a fiação.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_1.png" alt="pir" width="800" height="auto"/></div>

:::caution
Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
:::

### Grave o firmware

No circuito de amostragem da bateria do XIAO RP2350, é adotada uma solução de amostragem de tensão baseada no SX1801CCR. Um circuito divisor de tensão é formado por dois resistores de 470 kΩ, resultando em uma taxa de divisão de tensão de 2. O programa usa 3,3 V como tensão de referência, e a tensão real da bateria pode ser calculada por meio da fórmula de restauração de tensão.

O exemplo a seguir usa uma abordagem de reinicialização por watchdog para simular sono profundo, já que a IDE Arduino não consegue integrar facilmente a biblioteca pico-extras necessária para o sono profundo real.

<details>
<summary>Programa</summary>

```cpp
#include <Arduino.h>
#include "hardware/powman.h"
#include "hardware/adc.h"
#include "hardware/watchdog.h"

// ── Pin Definitions ──────────────────────────────────────────────
#define BAT_ADC_EN    19
#define BAT_ADC_READ  29
#define SLEEP_SEC     30

#define VOLTAGE_DIVIDER_RATIO  2.0f
#define VBAT_LOW_THRESHOLD     3.5f
#define SCRATCH_MAGIC          0xDEADBEEF

// ── Global voltage storage (can be output via other methods, e.g., LED alert) ──────────
static float g_vbat   = 0.0f;
static bool  g_lowBat = false;

// ── Disable ADC Peripheral ──────────────────────────────────────
static void disableADC() {
    adc_run(false);
    hw_clear_bits(&adc_hw->cs, ADC_CS_EN_BITS);
}

// ── Read Battery Voltage ─────────────────────────────────────────
static float readVbat() {
    digitalWrite(BAT_ADC_EN, HIGH);
    delayMicroseconds(500);

    adc_init();
    adc_gpio_init(BAT_ADC_READ);
    adc_select_input(3);
    analogReadResolution(12);
    (void)analogRead(BAT_ADC_READ);   // Discard the first reading

    int32_t sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += analogRead(BAT_ADC_READ);
        delayMicroseconds(200);
    }

    digitalWrite(BAT_ADC_EN, LOW);    // ★ Disable voltage divider immediately after sampling
    disableADC();

    return ((float)sum / 5.0f / 4095.0f * 3.3f) * VOLTAGE_DIVIDER_RATIO;
}

// ── Shut Down All Unnecessary Peripherals ─────────────────────────
static void shutdownPeripherals() {
    // ADC
    digitalWrite(BAT_ADC_EN, LOW);
    disableADC();

    // Pull down all unused pins to eliminate floating leakage
    const uint8_t unused[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18};
    for (uint8_t pin : unused) {
        pinMode(pin, INPUT_PULLDOWN);
    }

    // Reduce frequency to 18MHz to significantly reduce dynamic power consumption
    set_sys_clock_khz(18000, false);
}

// ── Low-Power Wait (Watchdog Reboot to Simulate Sleep) ───────────
static void sleepWithReboot(uint32_t seconds) {
    // Start POWMAN Timer (LPOSC 1kHz)
    if (!powman_timer_is_running()) powman_timer_start();
    powman_timer_set_1khz_tick_source_lposc();

    // Store wake-up target time in scratch registers
    uint64_t wake_ms = powman_timer_get_ms() + (uint64_t)seconds * 1000ULL;
    watchdog_hw->scratch[4] = SCRATCH_MAGIC;
    watchdog_hw->scratch[5] = (uint32_t)(wake_ms & 0xFFFFFFFF);
    watchdog_hw->scratch[6] = (uint32_t)(wake_ms >> 32);

    shutdownPeripherals();

    // Watchdog timeout reboot (max 8.3s), CPU waits in low-frequency WFE
    rp2040.wdt_begin(8300);
    while (true) {
        __wfe();
    }
}

// ─────────────────────────────────────────────────────────────────
void setup() {
    // First action on power-up: pull ADC_EN low
    pinMode(BAT_ADC_EN, OUTPUT);
    digitalWrite(BAT_ADC_EN, LOW);
    pinMode(BAT_ADC_READ, INPUT);

    // ── Check if waking up from sleep reboot ───────────────────────
    if (watchdog_hw->scratch[4] == SCRATCH_MAGIC) {
        if (!powman_timer_is_running()) powman_timer_start();
        powman_timer_set_1khz_tick_source_lposc();

        uint64_t wake_ms = (uint64_t)watchdog_hw->scratch[5]
                         | ((uint64_t)watchdog_hw->scratch[6] << 32);
        uint64_t now_ms  = powman_timer_get_ms();

        if (now_ms < wake_ms) {
            // Not time to wake up yet, continue waiting
            sleepWithReboot((uint32_t)((wake_ms - now_ms) / 1000 + 1));
            // Will not return
        }

        // Time to wake up, clear flag
        watchdog_hw->scratch[4] = 0;
    }

    // ── Restore normal frequency, execute application logic ───────
    set_sys_clock_khz(125000, true);

    // Sample voltage
    g_vbat   = readVbat();
    g_lowBat = (g_vbat < VBAT_LOW_THRESHOLD);

    // TODO: Process sampling results here
    // Example: Turn on LED alert for low battery
    // if (g_lowBat) { digitalWrite(LED_PIN, HIGH); delay(100); ... }

    // Enter sleep mode 2 seconds after power-up
    delay(2000);
}

void loop() {
    sleepWithReboot(SLEEP_SEC);
    // Will not return; restarts from setup() after wake-up
}
```

</details>
<br/>
Em seguida, você pode enviar o programa.

Como alternativa, você pode usar nosso firmware pré-escrito para verificação e teste de desempenho.

Baixe o [Firmware de Teste de Baixo Consumo do XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 ), arraste-o para o sistema de arquivos.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_2.png" alt="pir" width="800" height="auto"/></div>

### Resultado

Após testes e verificação com instrumentos, a corrente média do XIAO RP2350 é de **53 μA** ao entrar no modo de baixo consumo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/low_power_4.jpg" alt="pir" width="800" height="auto"/></div>
<br/>

:::tip

1. A corrente média em modo de baixo consumo medida por diferentes instrumentos pode variar. Consulte os resultados reais do teste.
2. Este resultado de teste é obtido após gravar o firmware de teste de baixo consumo.
3. Para testes de consumo de energia, a fiação de teste deve ser conectada à interface BAT no lado traseiro.
4. Como a IDE Arduino tem dificuldade em integrar a biblioteca pico-extras (que contém pico/sleep.h necessário para sono profundo), é recomendável usar o Pico SDK ou o framework PlatformIO + arduino-pico para desenvolvimento de ultra baixo consumo.

:::

## Ativos e Recursos

**Projeto de Hardware**
- **📄[Datasheet]** [Raspberry Pi RP2350 Datasheet](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf )
- **📄[Esquemático]** [Esquemático do XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf )
- **🗃️[Arquivos de Projeto de PCB]** [Projeto KiCad do XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip )
- **🗃️[Bibliotecas de Projeto de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Diagrama de Pinagem]** [Folha de Pinagem do XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx )

**Projeto Mecânico**
- **📄[Dimensões 2D]** [Dimensões do XIAO RP2350 em DXF](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf )
- **🔗[Modelo 3D]** [Modelo 3D do XIAO RP2350](https://grabcad.com/library/seeed-studio-xiao-rp2350-2 )

**Software e Ferramentas**
- **📄[Firmware de Teste]** [Firmware de Teste de Baixo Consumo do XIAO RP2350](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2 )

**Outros**
- **📄[Documento]** [Introdução à Série Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf )  
  - Um guia abrangente para configurar e programar placas Raspberry Pi Pico, ideal para iniciantes que desejam aprender MicroPython ou C/C++.
- **📄[Documento]** [SDK Python da Série Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf )  
  - O livro que documenta os tutoriais de configuração do MicroPython e as APIs
- **📄[Documento]** [SDK C/C++ da Série Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf )  
  - O livro que documenta as APIs do Pico C/C++ SDK
 - **📄[arduino-pico GitHub]**(https://github.com/earlephilhower/arduino-pico)
- **📄[Documentação do Core Arduino-Pico]**(https://arduino-pico.readthedocs.io/en/latest/install.html)

## Suporte e Discussão

Obrigado por usar os produtos Seeed! Oferecemos vários canais para suporte e discussão com a comunidade:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
