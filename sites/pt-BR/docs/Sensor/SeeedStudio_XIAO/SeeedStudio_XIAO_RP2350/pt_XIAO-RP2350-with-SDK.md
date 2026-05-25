---
description: 'Usar Pico SDK no XIAO RP2350 '
title: Seeed Studio XIAO RP2350 com C/C++ SDK
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-rp2350-c-cpp-sdk
sidebar_position: 4
last_update:
  date: 2024-08-14T06:27:29.006Z
  author: Spencer
createdAt: '2024-08-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao-rp2350-c-cpp-sdk/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introdução

O Seeed Studio XIAO RP2350, equipado com o microcontrolador RP2350, oferece desempenho robusto em um formato compacto. Este guia fornece etapas essenciais para configurar e usar o C/C++ SDK com o XIAO RP2350.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte:

- Um computador executando Windows, macOS ou Linux.
- Um cabo USB para conectar o XIAO RP2350 ao seu computador.
- Conhecimentos básicos de programação em C/C++.

## Guia de Instalação via Vscode

:::info
Para quem prefere a experiência de desenvolvimento nativa, explore a [Raspberry Pi Pico C/C++ SDK Documentation](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) ou [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk).
:::

Para uma experiência mais fácil e simplificada com programação usando o SDK, especialmente para iniciantes, você pode instalar a extensão [Raspberry Pi Pico](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) para o Visual Studio Code (VSCode).

Esta extensão simplifica o processo de configuração, guiando você pelas instalações necessárias da toolchain, evitando a necessidade de instalar manualmente cada ferramenta individualmente. No entanto, você ainda precisa garantir que seu sistema atenda aos requisitos da plataforma: Windows x64, macOS (Sonoma e mais recente), Linux x64 ou arm64.

Para instruções de instalação detalhadas, adaptadas ao seu sistema operacional, consulte a página [Raspberry Pi Pico Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico).

#### Passo 1: Instale a Extensão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/0-install-pico-extension.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>Instalar Extensão no VSCode</em></div>
<br></br>
</div>

#### Passo 2: Crie um Novo Projeto

Quando a página carregar, você poderá ver o conteúdo necessário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/1-new-example-project.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>Criar um Novo Projeto a partir de Exemplos</em></div>
<br></br>
</div>

Tente criar um projeto via `New Project From Examples`.

#### Passo 3: Configure Seu Projeto

- **Nome:** Normalmente, este será o nome do projeto de exemplo; neste caso, vamos escolher o projeto `blink`.
- **Tipo de Placa:** `Pico 2`
- **Localização:** Escolha onde deseja armazenar seu projeto XIAO RP2350.
- **Versão do SDK:** Deve ser a versão `v2.0.0` ou posterior.
- **Depurador:** Se você planeja usar a interface de depuração SWD, marque a opção SWD Debugger para habilitar a depuração posteriormente.

<Tabs>
<TabItem value="c1" label="Configurar projeto">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/2-create-blink-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="c2" label="Opções Avançadas">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/3-advanced-options.png" style={{width:500, height:'auto'}}/></div>

Se você quiser ajustar com mais precisão a configuração da sua toolchain e evitar o download de recursos redundantes, marque as **Advanced Options**. Aqui, você pode especificar caminhos para ferramentas como Ninja e CMake. Se você ainda não instalou o CMake ou um ambiente Python, ou se preferir não se preocupar com isso, pode pular esta etapa.

Neste exemplo, usarei as versões de sistema já instaladas na minha máquina com Windows e adicionadas ao PATH do sistema. Portanto, seleciono **Use system version**.

</TabItem>
</Tabs>

Se esta for a primeira vez que você executa a configuração, quando clicar em `Create`, a extensão fará o download e gerenciará o SDK para você. No Windows, o SDK normalmente será colocado em `%userprofile%.pico-sdk`. O tempo necessário para configurar depende da velocidade da sua internet. Quando o processo for concluído, uma nova janela será aberta com o seu projeto.

#### Passo 4: Compile o Projeto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/4-blink-example-created.png" style={{width:500, height:'auto'}}/></div>

:::caution Atenção

Na primeira vez que você configurar seu projeto, será necessário modificar manualmente o tipo de placa no projeto CMake, porque a extensão não inclui a placa XIAO RP2350 por padrão. Defina a placa como `seeed_xiao_rp2350`, como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/set-xiao-rp2350-board.png" style={{width:500, height:'auto'}}/></div>

**Depois de modificar o tipo de placa, limpe a pasta `build`** para garantir que ela use a configuração correta de placa de `%userprofile%/.pico-sdk/sdk/2.0.0/src/boards/include/boards/seeed_xiao_rp2350.h`. Em seguida, digite os seguintes comandos para gerar o cache CMake na pasta de build:

```shell
cmake .. # in build folder
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/get-cmake-cache.png" style={{width:500, height:'auto'}}/></div>

Isso permitirá que a tarefa de compilação da extensão funcione corretamente.

:::

<Tabs>
<TabItem value="compile" label="Compilar Projeto">

Agora você pode pressionar o botão **Compile** para construir o projeto. Isso gerará o arquivo `blink.uf2` na pasta `build`, que você pode arrastar e soltar na unidade RP2350 reconhecida pelo seu computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/5-compile-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="run" label="Executar Projeto">

Se o seu dispositivo estiver no modo BOOT, você pode pressionar o botão **Run** para compilar e copiar automaticamente o arquivo `.uf2` para o RP2350, eliminando a necessidade de arrastar e soltar o arquivo manualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/6-run-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

Acabamos de configurar o ambiente de desenvolvimento e criar com sucesso um novo projeto usando a extensão Raspberry Pi Pico para VSCode. Com o projeto pronto e suas ferramentas configuradas, você pode compilar e executar facilmente seu código no XIAO RP2350, tornando seu processo de desenvolvimento mais ágil.

## Exemplo 1: Piscar LED

Para demonstrar o uso básico do SDK, o exemplo a seguir detalha a programação do LED onboard para piscar:

```c title="blink.c"
#include "pico/stdlib.h"

const int sleep_time = 250;

int main() {
    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(sleep_time);
        gpio_put(LED_PIN, 0);
        sleep_ms(sleep_time);
    }
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto', "border-radius": '12.8px'}}/></div>

## Exemplo 2: Piscar RGB

<Tabs>
<TabItem value="ws2812.c" label="ws2812.c">

```c
/**
 * Copyright (c) 2020 Raspberry Pi (Trading) Ltd.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

#include <stdio.h>
#include <stdlib.h>

#include "pico/stdlib.h"
#include "hardware/pio.h"
#include "hardware/clocks.h"
#include "ws2812.pio.h"

#define IS_RGBW true
#define NUM_PIXELS 1

#ifdef PICO_DEFAULT_WS2812_PIN
#define WS2812_PIN PICO_DEFAULT_WS2812_PIN
#else
// default to pin 2 if the board doesn't have a default WS2812 pin defined
#define WS2812_PIN 22
#endif

static inline void put_pixel(uint32_t pixel_grb) {
    pio_sm_put_blocking(pio0, 0, pixel_grb << 8u);
}

static inline uint32_t urgb_u32(uint8_t r, uint8_t g, uint8_t b) {
    return
            ((uint32_t) (r) << 8) |
            ((uint32_t) (g) << 16) |
            (uint32_t) (b);
}

void pattern_snakes(uint len, uint t) {
    for (uint i = 0; i < len; ++i) {
        uint x = (i + (t >> 1)) % 64;
        if (x < 10)
            put_pixel(urgb_u32(0xff, 0, 0));
        else if (x >= 15 && x < 25)
            put_pixel(urgb_u32(0, 0xff, 0));
        else if (x >= 30 && x < 40)
            put_pixel(urgb_u32(0, 0, 0xff));
        else
            put_pixel(0);
    }
}

void pattern_random(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand());
}

void pattern_sparkle(uint len, uint t) {
    if (t % 8)
        return;
    for (int i = 0; i < len; ++i)
        put_pixel(rand() % 16 ? 0 : 0xffffffff);
}

void pattern_greys(uint len, uint t) {
    int max = 100; // let's not draw too much current!
    t %= max;
    for (int i = 0; i < len; ++i) {
        put_pixel(t * 0x10101);
        if (++t >= max) t = 0;
    }
}

typedef void (*pattern)(uint len, uint t);
const struct {
    pattern pat;
    const char *name;
} pattern_table[] = {
        {pattern_snakes,  "Snakes!"},
        {pattern_random,  "Random data"},
        {pattern_sparkle, "Sparkles"},
        {pattern_greys,   "Greys"},
};

int main() {
    //set_sys_clock_48();
    stdio_init_all();

    const int RGB_POWER = 23;
    gpio_init(RGB_POWER);
    gpio_set_dir(RGB_POWER, GPIO_OUT);
    gpio_put(RGB_POWER, 1);

    printf("WS2812 Smoke Test, using pin %d", WS2812_PIN);

    // todo get free sm
    PIO pio = pio0;
    int sm = 0;
    uint offset = pio_add_program(pio, &ws2812_program);

    ws2812_program_init(pio, sm, offset, WS2812_PIN, 800000, IS_RGBW);

    int t = 0;
    while (1) {
        int pat = rand() % count_of(pattern_table);
        int dir = (rand() >> 30) & 1 ? 1 : -1;
        puts(pattern_table[pat].name);
        puts(dir == 1 ? "(forward)" : "(backward)");
        for (int i = 0; i < 1000; ++i) {
            pattern_table[pat].pat(NUM_PIXELS, t);
            sleep_ms(10);
            t += dir;
        }
    }
}
```

</TabItem>
<TabItem value="ws2812.pio" label="ws2812.pio">

```assembly
;
; Copyright (c) 2020 Raspberry Pi (Trading) Ltd.
;
; SPDX-License-Identifier: BSD-3-Clause
;

.program ws2812
.side_set 1

.define public T1 2
.define public T2 5
.define public T3 3

.lang_opt python sideset_init = pico.PIO.OUT_HIGH
.lang_opt python out_init     = pico.PIO.OUT_HIGH
.lang_opt python out_shiftdir = 1

.wrap_target
bitloop:
    out x, 1       side 0 [T3 - 1] ; Side-set still takes place when instruction stalls
    jmp !x do_zero side 1 [T1 - 1] ; Branch on the bit we shifted out. Positive pulse
do_one:
    jmp  bitloop   side 1 [T2 - 1] ; Continue driving high, for a long pulse
do_zero:
    nop            side 0 [T2 - 1] ; Or drive low, for a short pulse
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_program_init(PIO pio, uint sm, uint offset, uint pin, float freq, bool rgbw) {

    pio_gpio_init(pio, pin);
    pio_sm_set_consecutive_pindirs(pio, sm, pin, 1, true);

    pio_sm_config c = ws2812_program_get_default_config(offset);
    sm_config_set_sideset_pins(&c, pin);
    sm_config_set_out_shift(&c, false, true, rgbw ? 32 : 24);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_T1 + ws2812_T2 + ws2812_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}

.program ws2812_parallel

.define public T1 2
.define public T2 5
.define public T3 3

.wrap_target
    out x, 32
    mov pins, !null [T1-1]
    mov pins, x     [T2-1]
    mov pins, null  [T3-2]
.wrap

% c-sdk {
#include "hardware/clocks.h"

static inline void ws2812_parallel_program_init(PIO pio, uint sm, uint offset, uint pin_base, uint pin_count, float freq) {
    for(uint i=pin_base; i<pin_base+pin_count; i++) {
        pio_gpio_init(pio, i);
    }
    pio_sm_set_consecutive_pindirs(pio, sm, pin_base, pin_count, true);

    pio_sm_config c = ws2812_parallel_program_get_default_config(offset);
    sm_config_set_out_shift(&c, true, true, 32);
    sm_config_set_out_pins(&c, pin_base, pin_count);
    sm_config_set_set_pins(&c, pin_base, pin_count);
    sm_config_set_fifo_join(&c, PIO_FIFO_JOIN_TX);

    int cycles_per_bit = ws2812_parallel_T1 + ws2812_parallel_T2 + ws2812_parallel_T3;
    float div = clock_get_hz(clk_sys) / (freq * cycles_per_bit);
    sm_config_set_clkdiv(&c, div);

    pio_sm_init(pio, sm, offset, &c);
    pio_sm_set_enabled(pio, sm, true);
}
%}
```

</TabItem>

<TabItem value="ws2812-cmake" label="CMakeLists.txt">

Copie o trecho a seguir e adicione-o ao final do seu arquivo `CMakeLists.txt`.

```cmake title="CMakeLists.txt"
project(pio_ws2812 C CXX ASM)

# Initialise the Raspberry Pi Pico SDK
pico_sdk_init()

# Add executable target for pio_ws2812
add_executable(pio_ws2812)

# Create a directory for generated files
file(MAKE_DIRECTORY ${CMAKE_CURRENT_LIST_DIR}/generated)

# Generate the PIO header file from ws2812.pio
pico_generate_pio_header(pio_ws2812 ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio OUTPUT_DIR ${CMAKE_CURRENT_LIST_DIR}/generated)

# Add the source file to the pio_ws2812 target
target_sources(pio_ws2812 PRIVATE ws2812.c)

# Link necessary libraries to the pio_ws2812 target
target_link_libraries(pio_ws2812 PRIVATE pico_stdlib hardware_pio)

# Generate additional output formats (e.g., UF2, BIN)
pico_add_extra_outputs(pio_ws2812)

# Optionally, generate a Python file from the PIO assembly for further analysis or documentation
add_custom_command(OUTPUT ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    DEPENDS ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio
    COMMAND pioasm -o python ${CMAKE_CURRENT_LIST_DIR}/ws2812.pio ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py
    VERBATIM)
add_custom_target(pio_ws2812_datasheet DEPENDS ${CMAKE_CURRENT_LIST_DIR}/generated/ws2812.py)
add_dependencies(pio_ws2812 pio_ws2812_datasheet)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/11-ws2812-rgb-cmake.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/rp2350-rgb.gif" style={{width:240, height:'auto', "border-radius": '12.8px' }}/></div>

## Exemplo 3: impressão via UART

:::tip USB Serial
Se você quiser habilitar a saída do `printf` para o seu computador via USB, será necessário configurar o arquivo `CMakeLists.txt` do seu projeto adicionando a seguinte linha:

```cmake
pico_enable_stdio_usb(your_project_name 1)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/10-cmake-usb-enabled.png" alt="CMake USB Enabled" style={{width:400, height:'auto'}}/></div>

Além disso, certifique-se de inicializar a E/S padrão no seu código adicionando `stdio_init_all();` na sua função principal.

:::

```c title="hello_uart.c"
#include "hardware/uart.h"
#include "pico/stdlib.h"
#include <pico/stdio.h>
#include <pico/time.h>
#include <stdio.h>

#define UART_ID uart0
#define BAUD_RATE 115200

// We are using pins 0 and 1, but see the GPIO function select table in the
// datasheet for information on which other pins can be used.
#define UART_TX_PIN 0
#define UART_RX_PIN 1

int main() {
   stdio_init_all();
  // Set up our UART with the required speed.
  uart_init(UART_ID, BAUD_RATE);

  // Set the TX and RX pins by using the function select on the GPIO
  // Set datasheet for more information on function select
  gpio_set_function(UART_TX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_TX_PIN));
  gpio_set_function(UART_RX_PIN, UART_FUNCSEL_NUM(UART_ID, UART_RX_PIN));

  // Use some the various UART functions to send out data
  // In a default system, printf will also output via the default UART

  // Send out a character without any conversions
  uart_putc_raw(UART_ID, 'A');

  // Send out a character but do CR/LF conversions
  uart_putc(UART_ID, 'B');

  // Send out a string, with CR/LF conversions
  uart_puts(UART_ID, " Hello, UART!\n");

  // Print test
  int i = 0;
  for (;;) {
    sleep_ms(500);
    printf("Hello %d", i++);
  }
}
```

## Exemplo 4: ler a tensão da bateria

```c title="hello_adc.c"
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

void init_gpio() {
    const int gpio = 19;

    gpio_init(gpio);
    gpio_set_dir(gpio, GPIO_OUT);
    gpio_put(gpio, 1);
}

int main() {
    stdio_init_all();
    printf("ADC battery Example - GPIO29 A3\n");

    init_gpio();
    adc_init();

    // Make sure GPIO is high-impedance, no pullups etc
    adc_gpio_init(29);
    // Select ADC input 0 (GPIO26)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12);
        uint16_t result = adc_read();
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2);
        sleep_ms(500);
    }
}
```

## Perguntas frequentes (FAQ)

#### Submódulo TinyUSB não inicializado; suporte USB indisponível

**Problema:**
Ao compilar um projeto, você pode ver este aviso:

```plaintext
TinyUSB submodule has not been initialized; USB support will be unavailable
```

**Solução:**

1. **Abra o Terminal** no Linux/macOS ou o Command Prompt/PowerShell/Git Bash no Windows.
2. **Navegue até o diretório do Pico SDK:**

   ```bash
   cd /path/to/your/pico-sdk
   ```

3. **Inicialize o submódulo:**

   ```bash
   git submodule update --init
   ```

Isso irá habilitar o suporte USB no seu projeto.

## Recursos

- 🔗 **[Link]** [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk)
- 📄 **[PDF]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) o livro que documenta as APIs do SDK
- 📄 **[PDF]** [Getting started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)  - documentação oficial da Raspberry Pi.
- 📽️ **[Video]** [Intro to Raspberry Pi Pico and RP2040](https://www.youtube.com/watch?v=B5rQSoOmR5w) -  Um tutorial em vídeo.

## Suporte técnico e discussão sobre o produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  
