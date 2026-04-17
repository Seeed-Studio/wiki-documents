---
title: Seeed Studio XIAO RP2350 com MicroPython
description: |
  XIAO RP2350, um microcontrolador de ponta da Seeed Studio. Ele possui um processador dual-core, SRAM e memória flash aumentadas e conectividade aprimorada.
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /getting-started-xiao-rp2350
sku: 102010550,102010637
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 2024-11-22T05:59:15.764Z
createdAt: '2024-08-06'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/getting-started-xiao-rp2350/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
  </a>
</div><br></br>

O XIAO RP2350 reúne a potência do Raspberry Pi RP2350 (dois núcleos Cortex-M33 rodando a 150 MHz com FPU, segurança e criptografia aprimoradas) no clássico formato XIAO. Medindo apenas 21 x 17,8 mm, ele conta com 19 GPIOs multifuncionais, um LED RGB e um Sistema de Gerenciamento de Bateria com consumo ultrabaixo de 50 μA, alimentação por bateria e medição direta da tensão da bateria. Graças ao ecossistema XIAO, o XIAO RP2350 é compatível com uma ampla variedade de complementos, incluindo displays, matriz de LEDs, módulos Grove, barramento CAN, sensores de Visão com IA e sensores mmWave. Com suporte nativo para MicroPython, C e C++, o XIAO RP2350 é perfeito para desenvolvedores de todos os níveis que desejam criar aplicações compactas alimentadas por bateria para controle inteligente, vestíveis, teclados DIY e muito mais.


## Plataformas compatíveis

O XIAO RP2350, alimentado pelo RP2350, oferece suporte ao MicroPython e ao SDK de C/C++ fornecido pela Raspberry Pi. Essa flexibilidade permite que os desenvolvedores escolham sua linguagem e ambiente de programação preferidos para prototipagem e desenvolvimento.

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp logo" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## Primeiros Passos▶️

:::info attention
Esta página se concentra principalmente em usuários de MicroPython. Para quem tem interesse em aprender programação com SDK ou para usuários avançados, vale a pena começar pelo [Raspberry Pi Pico-series C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf). Este guia ajudará você a configurar o ambiente e começar com exemplos de código. Além disso, você pode visitar [XIAO RP2350 with C/C++ SDK](/pt-br/xiao-rp2350-c-cpp-sdk) para instruções mais específicas relacionadas ao XIAO RP2350.
:::

### Etapa 1: Instalando o MicroPython no XIAO RP2350

Para instalar o firmware MicroPython no XIAO RP2350, siga estas etapas:

**Etapa 1.1. Baixe o firmware MicroPython:**  

- Acesse a página [MicroPython Downloads](https://micropython.org/download/SEEED_XIAO_RP2350/).
- Baixe o arquivo de firmware `.uf2` mais recente compatível com o XIAO RP2350.

:::tip
1. O firmware padrão é para arquitetura ARM; se você quiser usar RISC-V, utilize a versão de firmware correspondente no link.

2. Certifique-se de estar usando a versão mais recente do firmware, pois versões mais antigas podem conter diversas vulnerabilidades de software.
:::

**Etapa 1.2. Entrar no modo BOOTSEL:**  

Você pode entrar no modo BOOTSEL no XIAO RP2350 usando qualquer um dos dois métodos abaixo:

<Tabs>
<TabItem value="method1" label="Método 1: Antes de conectar ao computador" default>

1. **Pressione e segure o botão BOOT**:  
   Enquanto o seu XIAO RP2350 estiver desconectado do computador, **pressione e segure** o botão BOOT.
2. **Conecte ao computador**:  
   Mantendo o botão BOOT pressionado, conecte o XIAO RP2350 ao computador usando um cabo USB.
3. **Solte o botão BOOT**:  
   Depois que a placa estiver conectada ao computador, você pode soltar o botão BOOT. O XIAO RP2350 agora deve estar em modo BOOTSEL e o computador o reconhecerá como um dispositivo de armazenamento removível.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Segure Boot-> Conecte o cabo-> Solte Boot</em></div>
</div>

</TabItem>

<TabItem value="method2" label="Método 2: Enquanto conectado ao computador">

1. **Pressione e segure o botão BOOT**:  
   Com o XIAO RP2350 já conectado ao computador, pressione e segure o botão BOOT.
2. **Clique no botão RESET**:  
   Ainda mantendo o botão BOOT pressionado, pressione e solte o botão RESET, que está identificado como "B" no canto inferior direito da placa na imagem acima.
3. **Solte o botão BOOT**:  
   Após pressionar o botão RESET, solte o botão BOOT. O XIAO RP2350 agora deve estar em modo BOOTSEL, e o computador o reconhecerá como um dispositivo de armazenamento removível.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Segure Boot-> Clique em Reset-> Solte Boot</em></div>
</div>

</TabItem>
</Tabs>

**Etapa 1.3. Instalar o firmware:**  

- **Arraste e solte** o arquivo `.uf2` baixado na unidade de armazenamento removível do XIAO RP2350.
- A placa será reiniciada automaticamente após a cópia do arquivo, concluindo a instalação do firmware.

### Etapa 2: Instalando o Thonny IDE

:::tip about MicroPython

[MicroPython](https://micropython.org/) é uma linguagem interpretada semelhante ao [Python](https://www.python.org/). No entanto, diferente do Python, o MicroPython roda diretamente no hardware (bare-metal), fornecendo um prompt interativo (REPL) para executar comandos imediatamente, além da capacidade de rodar e importar scripts do sistema de arquivos interno.

Para conectar à placa XIAO RP2350 e começar a escrever e executar seu código Python, você pode usar qualquer ferramenta de terminal que suporte conexões seriais, como minicom, PuTTY, electerm, warp e outras. Para uma *experiência mais amigável*, você pode usar o **[Thonny](https://thonny.org/)** por sua facilidade de uso, recursos integrados e interface acessível para iniciantes. Assim, você pode aproveitar para escrever e executar seu código Python diretamente no dispositivo.

:::

O Thonny IDE é um editor de Python amigável para iniciantes e excelente para desenvolvimento com MicroPython. Veja como instalá-lo:

1. **Baixar o Thonny:**  
   - Visite a [página de download do Thonny](https://thonny.org/).
   - Escolha o instalador apropriado para o seu sistema operacional (Windows, macOS ou Linux) e faça o download.

2. **Instalar o Thonny:**  
   - **Execute** o instalador baixado.
   - **Siga** as instruções exibidas na tela para concluir o processo de instalação.

3. **Configurar o Thonny para MicroPython:**  
   - **Abra** o Thonny IDE.
   - Observe o canto inferior direito da janela do Thonny.
   - Clique na área de seleção do **interpretador**.
   - Escolha **'MicroPython (RP2040)'** na lista.
   - Certifique-se de que a **Porta** correta esteja selecionada — o Thonny geralmente a detecta automaticamente.

Agora você está pronto para escrever e enviar código MicroPython para o seu XIAO RP2350 usando o Thonny IDE!

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="Console PuTTY">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

Se o seu dispositivo já estiver pronto com MicroPython, vamos começar com um projeto simples:

### Vamos fazê-lo piscar! ✨

Fazer o LED da placa piscar costuma ser o primeiro programa que todo mundo executa. O mesmo vale para o XIAO RP2350.

:::note
O `USER LED`, o LED amarelo do XIAO RP2350, está conectado ao `GPIO25/D19` de acordo com o diagrama esquemático.
Para todas as placas da família XIAO, o `USER LED` **acende** quando definido em `low level` e **apaga** quando definido em `high level`.
:::

<Tabs>
  <TabItem value="blink" label="Piscar" default>

```python showLineNumbers
from machine import Pin # Import the Pin class from the machine module
from time import sleep  # Import the sleep function from the time module

# Initialize GPIO25 as an output pin, which controls the USER LED
led = Pin(25, Pin.OUT) 

# Turn off the LED initially
led.value(1) # led.on() -> high level -> light off
sleep(0.5) # Wait for 0.5 seconds

# Turn on the LED
led.value(0) # led.off() -> low level -> light on
sleep(0.5) # Wait for 0.5 seconds

# Enter an infinite loop
while True:
    # Toggle the LED state (on to off or off to on)
    led.toggle() 
    # Print the current state of the LED
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # Wait for 0.5 seconds before the next toggle
```

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

  </TabItem>
  <TabItem value="pwm" label="Suavizar o brilho de um LED" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# Example using PWM to fade an LED.

import time
from machine import Pin, PWM

# Construct PWM object, with LED on Pin(25).
pwm = PWM(Pin(25))

# Set the PWM frequency.
pwm.freq(1000)

# Fade the LED in and out a few times.
duty = 0
direction = 1
for _ in range(8 * 256):
    duty += direction
    if duty > 255:
        duty = 255
        direction = -1
    elif duty < 0:
        duty = 0
        direction = 1
    pwm.duty_u16(duty * duty)
    time.sleep(0.001)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-fade-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

  </TabItem>
</Tabs>

Depois de copiar o código para o Thonny IDE, como mostrado na imagem abaixo, basta clicar no botão `Run current script` ou pressionar `F5`. Isso executará o trecho de código e você verá o LED no XIAO RP2350 começar a piscar.

### Brinque com LEDs RGB

O XIAO RP2350 vem com um LED RGB integrado que você pode controlar usando MicroPython. Abaixo está um exemplo de como alternar entre diferentes cores:

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# Global brightness variable (0.0 to 1.0)
BRIGHTNESS = 0.1

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)
def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1)               .side(0)    [T3 - 1]
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]
    jmp("bitloop")          .side(1)    [T2 - 1]
    label("do_zero")
    nop()                   .side(0)    [T2 - 1]
    wrap()

# Set up the power pin
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # Turn on power to the LED

# Create the StateMachine with the ws2812 program, outputting on LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# Start the StateMachine, it will wait for data on its FIFO.
sm.active(1)

def set_led_color(color):
    sm.put(array.array("I", [color]), 8)

def random_color():
    return random.randint(0, 255) | (random.randint(0, 255) << 8) | (random.randint(0, 255) << 16)

def interpolate(color1, color2, factor):
    r1, g1, b1 = color1 & 255, (color1 >> 8) & 255, (color1 >> 16) & 255
    r2, g2, b2 = color2 & 255, (color2 >> 8) & 255, (color2 >> 16) & 255
    r = int(r1 + factor * (r2 - r1))
    g = int(g1 + factor * (g2 - g1))
    b = int(b1 + factor * (b2 - b1))
    return (b << 16) | (g << 8) | r

def apply_brightness(color, brightness):
    r, g, b = color & 255, (color >> 8) & 255, (color >> 16) & 255
    r = int(r * brightness)
    g = int(g * brightness)
    b = int(b * brightness)
    return (b << 16) | (g << 8) | r

print("Starting random color transitions with adjustable brightness...")

# Main loop
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 steps for smooth transition
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # Adjust this value to change transition speed
    current_color = next_color

    # Optionally, you can change the brightness here for demo purposes
    # BRIGHTNESS = random.random()  # This will set a random brightness each cycle
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### Bateria e Gerenciamento de Energia

É possível ler a tensão da bateria sem componentes extras? Sim, com o XIAO RP2350, isso é mais fácil do que nunca. Em membros anteriores da família XIAO, como o [XIAO ESP32C3](/pt-br/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), ler a tensão da bateria exigia conexão manual ao *A0* com um resistor.

Mas com o XIAO RP2350, esse processo foi simplificado. Agora você pode usar diretamente o pino `A3/GPIO29` para ler o nível de tensão da bateria, simplificando seu design e desenvolvimento. Apenas lembre-se de configurar o pino `GPIO19` para nível alto, pois isso é necessário para habilitar a leitura do nível da bateria.

Siga este trecho de código para ler a tensão da bateria usando o Pico SDK:

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# Function to initialize the GPIO pin for enabling battery voltage reading
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # Set the pin to high to enable battery voltage reading

def main():
    print("ADC Battery Example - GPIO29 (A3)")

    init_gpio()  # Initialize the enable pin
    adc = ADC(Pin(29))  # Initialize the ADC on GPIO29

    conversion_factor = 3.3 / (65535)  # Conversion factor for 12-bit ADC and 3.3V reference

    while True:
        result = adc.read_u16()  # Read the ADC value
        voltage = result * conversion_factor * 2  # Calculate the voltage, considering the voltage divider (factor of 2)
        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # Delay for 500 milliseconds

if __name__ == '__main__':
    main()
```

  </TabItem>
  <TabItem value="sdk" label="C/C++ SDK">

```c title='adc_bat.c'
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

// Function to initialize the GPIO pin for enabling battery voltage reading
void init_gpio() {
    const int enable_pin = 19; // Pin to enable battery voltage reading

    gpio_init(enable_pin); // Initialize the pin
    gpio_set_dir(enable_pin, GPIO_OUT); // Set the pin as output
    gpio_put(enable_pin, 1); // Set the pin to high to enable battery voltage reading
}

int main() {
    stdio_init_all(); // Initialize standard input/output
    printf("ADC Battery Example - GPIO29 (A3)\n");

    init_gpio(); // Initialize the enable pin
    adc_init(); // Initialize the ADC

    // Initialize the ADC GPIO pin (GPIO29)
    adc_gpio_init(29);
    // Select ADC input 3 (corresponding to GPIO29)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // Conversion factor for 12-bit ADC and 3.3V reference
        uint16_t result = adc_read(); // Read the ADC value
        // Calculate the voltage, considering the voltage divider (factor of 2)
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // Delay for 500 milliseconds
    }
}
```

  </TabItem>
</Tabs>


### Expansão e Aplicações

[A série XIAO](/pt-br/xiao_topic_page) possui uma enorme variedade de periféricos e acessórios de periféricos para você aprender e usar, seja uma tela colorida que permite uma interação perfeita, uma placa integrada com luzes RGB simples e brilhantes e assim por diante, apenas esperando para serem explorados.

Como membro da família XIAO, o XIAO RP2350 faz o mesmo. Claro que, para aproveitar melhor os pinos extras disponibilizados, novos *periféricos e placas* continuarão surgindo, utilizando totalmente o desempenho para o qual ele foi criado.

- 🌟 **[Expandindo com Acessórios](/pt-br/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  Descubra a ampla variedade de complementos e módulos compatíveis com a família XIAO, desde displays e matrizes de LED até módulos Grove e sensores, e aprenda como eles podem aprimorar seus projetos.

### Comunidade e Aprendizado

Além disso, mergulhe na vibrante comunidade Raspberry Pi para expandir seu conhecimento e descobrir novas ideias de projetos. Aproveite os recursos compartilhados pela comunidade, fóruns e tutoriais para enriquecer sua experiência com o XIAO RP2350. Além do Wiki da Seeed Studio, aqui estão alguns outros lugares recomendados para aprender:

- **[Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: Obtenha informações confiáveis e atualizadas sobre o RP2350.
- **[Raspberry Pi Forums](https://www.raspberrypi.org/forums/)**: Interaja com outros entusiastas, faça perguntas e compartilhe seus projetos.
- **[XIAO GitHub Repository](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: Explore o repositório oficial do XIAO para documentação mais centralizada e mais interação com nossa equipe, **Junte-se a nós!**
- **[r/embedded on Reddit](https://www.reddit.com/r/embedded/)**: Junte-se à comunidade de sistemas embarcados, compartilhe ideias e discuta diversos tópicos.
- **[Pico Topic on GitHub](https://github.com/topics/pico)**: Explore repositórios e discussões relacionadas ao Pico.
- **[Hackster.io](https://www.hackster.io/)**: Descubra projetos e tutoriais relacionados a várias plataformas de hardware, incluindo XIAO e Raspberry Pi.
- **[Instructables](https://www.instructables.com/)**: Encontre projetos DIY e guias passo a passo para criar com XIAO e outros hardwares.
- **[Element14 Community](https://www.element14.com/community/)**: Participe de discussões, webinars e projetos relacionados a eletrônica e sistemas embarcados.

E muito mais, você é sempre bem-vindo para compartilhar seus projetos em nosso [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) e [Seeed Studio Forum](https://forum.seeedstudio.com/). Essas plataformas oferecem uma excelente oportunidade para se conectar com outros makers, receber feedback e encontrar inspiração. Seja para obter ajuda na solução de um problema, mostrar sua última criação ou simplesmente fazer parte de uma comunidade acolhedora, o *Discord e o Fórum da Seeed Studio* são os lugares perfeitos para interagir e colaborar.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
