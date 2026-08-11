---
description: Seeed Studio XIAO SAMD21 com MicroPython
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2025-12-04'
url: https://wiki.seeedstudio.com/pt-br/XIAO-SAMD21-MicroPython/
---

# **Seeed Studio XIAO SAMD21 com MicroPython**

## **Introdução ao MicroPython**

[MicroPython](https://github.com/micropython/micropython/wiki) é um interpretador Python com um recurso parcial de compilação de código nativo. Ele fornece um subconjunto de recursos do Python 3.5, implementado para processadores embarcados e sistemas com recursos limitados. Ele é diferente do CPython e você pode ler mais sobre as diferenças [aqui](https://github.com/micropython/micropython/wiki/Differences).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## Primeiros passos

Primeiro, vamos conectar o Seeed Studio XIAO SAMD21 ao computador e enviar um código simples em MicroPython para verificar se a placa está funcionando bem.

### Configuração de hardware

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Cabo Type‑C x1
- PC x1

### Gravar o firmware

#### Para XIAO SAMD21

- **Passo 1**. Pressione e segure o botão **BOOT** e então conecte o Seeed Studio XIAO SAMD21 ao PC através do cabo Type‑C. Se tudo funcionar bem, um disco **Arduino** será exibido no PC.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **Passo 2**. Grave o firmware

Basta acessar o [Firmware MicroPython do XIAO SAMD21](https://micropython.org/download/SEEED_XIAO_SAMD21/) oficial e baixar o firmware mais recente

Também é possível [compilar seu próprio firmware](https://wiki.seeedstudio.com/pt-br/Compiling_MicroPython_for_embedded_devices/) para garantir segurança e suporte aos recursos mais recentes, mas isso não é necessário.
<br/>
#### Para XIAO SAMD21 Plus

- **Passo 1**. Conecte o XIAO SAMD21 Plus ao seu PC com um cabo Type‑C e, em seguida, pressione o botão Reset duas vezes consecutivas. Se tudo funcionar corretamente, um disco **Arduino** aparecerá no seu PC.

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **Passo 2**. Clique no link abaixo para baixar o firmware e, em seguida, arraste e solte o arquivo `.uf2` no disco **Arduino** para concluir a gravação do firmware.
[XIAO SAMD21 Plus MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_SAMD/img/xiao-samd21-plus-micropython.zip)

### Configuração de software

- **Passo 1**. Baixe e instale a versão mais recente do [editor Thonny](https://thonny.org/) de acordo com o seu sistema operacional

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **Passo 2**. Inicie o Thonny

- **Passo 3**. Clique em **Tools-->Options** para abrir as configurações.

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **Passo 4**. Escolha a interface **Interpreter** e selecione o dispositivo como **MicroPython(generic)** e a porta como **Board CDC @ Port**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/mpy_1.png" /></div>

## Desenvolvimento de software

### Tabela de atribuição de pinos da série SEEED XIAO SAMD21

| Nome do pino MicroPython | GPIO XIAO SAMD21 (ID) | GPIO XIAO SAMD21 Plus (ID) | IRQ<br />SAMD21 / Plus | ADC | Função |
| :--- | :---: | :---: | :---: | :---: | :--- |
| D0 / A0 / A0_D0 | PA02 (2) | PA02 (2) | 2 / 2 | 0 | GPIO, ADC, DAC |
| D1 / A1 / A1_D1 | PA04 (4) | PA04 (4) | 4 / 4 | 4 | GPIO, ADC |
| D2 / A2 / A2_D2 | PA10 (10) | PA10 (10) | 10 / 10 | 18 | GPIO, ADC |
| D3 / A3 / A3_D3 | PA11 (11) | PA11 (11) | 11 / 11 | 19 | GPIO, ADC |
| D4 / A4 / A4_D4 / SDA | PA08 (8) | PA08 (8) | NMI / NMI | 16 | GPIO, ADC, I2C SDA |
| D5 / A5 / A5_D5 / SCL | PA09 (9) | PA09 (9) | 9 / 9 | 17 | GPIO, ADC, I2C SCL |
| D6 / A6 / A6_D6 / TX | PB08 (40) | PB08 (40) | 8 / 8 | 2 | GPIO, ADC, UART TX |
| D7 / A7 / A7_D7 / RX | PB09 (41) | PB09 (41) | 9 / 9 | 3 | GPIO, ADC, UART RX |
| D8 / A8 / A8_D8 / SCK | PA07 (7) | PA07 (7) | 7 / 7 | 7 | GPIO, ADC, SPI SCK |
| D9 / A9 / A9_D9 / MISO | PA05 (5) | PA05 (5) | 5 / 5 | 5 | GPIO, ADC, SPI MISO |
| D10 / A10 / A10_D10 / MOSI | PA06 (6) | PA06 (6) | 6 / 6 | 6 | GPIO, ADC, SPI MOSI |
| D11 / TX_LED | PA19 (19) | — | 3 / — | — | LED TX da placa original |
| D12 / RX_LED | PA18 (18) | PA28 (28) | 2 / 8 | — | LED RX original; GPIO de expansão Plus |
| D13 / USER_LED / SCL1 | PA17 (17) | PA17 (17) | 1 / 1 | — | LED de usuário original; Plus I2C1 SCL |
| D14 / SDA1 | — | PA16 (16) | — / 0 | — | Plus I2C1 SDA |
| D15 | — | PA15 (15) | — / 15 | — | GPIO de expansão Plus |
| D16 | — | PA14 (14) | — / 14 | — | GPIO de expansão Plus |
| D17 | — | PA13 (13) | — / 13 | — | GPIO de expansão Plus |
| D18 | — | PA12 (12) | — / 12 | — | GPIO de expansão Plus |
| D19 / I2S_SD | — | PA19 (19) | — / 3 | — | GPIO Plus e dados I2S |
| D20 / I2S_SCK | — | PA20 (20) | — / 4 | — | GPIO Plus e clock I2S |
| D21 / I2S_WS | — | PA21 (21) | — / 5 | — | GPIO Plus e seleção de palavra I2S |
| D22 | — | PB10 (42) | — / 10 | — | GPIO de expansão Plus |
| D23 | — | PB11 (43) | — / 11 | — | GPIO de expansão Plus |
| D24 | — | PB23 (55) | — / 7 | — | GPIO de expansão Plus |
| D25 | — | PA23 (23) | — / 7 | — | GPIO de expansão Plus |
| D26 | — | PA22 (22) | — / 6 | — | GPIO de expansão Plus |
| D27 | — | PA18 (18) | — / 2 | — | GPIO de expansão Plus |
| RGB_LED | — | PA27 (27) | — / 15 | — | Dados do LED RGB endereçável |
| BUTTON | — | PB22 (54) | — / 6 | — | Botão de usuário Plus |
| SWCLK | PA30 (30) | PA30 (30) | 10 / 10 | — | Clock SWD |
| SWDIO | PA31 (31) | PA31 (31) | 11 / 11 | — | Dados SWD |

:::note
O número entre parênteses em GPIO (ID) refere-se ao ID de pino SAMD do MicroPython, não ao número físico do pino no encapsulamento do MCU.
:::

### Envie seu código

Envie os códigos clicando no botão "Run current script". Na primeira vez, o Thonny perguntará onde você deseja salvar o arquivo de código. Tanto **This Computer** quanto **MicroPython device** funcionam bem.

Se você quiser usar o programa offline, deve salvar o programa no XIAO SAMD21

Pressione e segure Ctrl + Shift + S ao mesmo tempo e, em seguida, selecione salvar em **MicroPython device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>

### TESTE de GPIO (LED)

Precisamos preparar:

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

Copie os códigos a seguir para o Thonny.

Podemos ver que o RX_LED azul acende e pisca uma vez por segundo

```python
from machine import Pin, Timer

led = Pin(18, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1 
    print(Counter)
    led.value(Counter%2)

tim = Timer(-1)
tim.init(period=500, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif" /></div>

### Controle de relés com GPIO

Precisamos preparar:

- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

output_4 = Pin(8, Pin.OUT)
detect_1 = Pin(4, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)
Counter = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    output_4.value(Counter%2)
    print(Counter%2,detect_1.value())
    if detect_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)

tim = Timer(-1)
tim.init(period=200, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>

### Detecção de pessoas para controle automático

Precisamos preparar:

- [Radar Doppler para detecção de pessoas](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

led = Pin(8, Pin.OUT)

input_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)
input_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)

Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    led.value(Counter%2)
    print(input_value_1.value(),input_value_2.value())
    if input_value_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)

tim = Timer(-1)
tim.init(period=50, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>

### Suporte a I2C

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)
devices = i2c.scan()
for device in devices:  
    print("Decimal address: ",device," | Hexa address: ",hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'a') # write 'a' to device with address 0x51
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4)) 

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>

A familiaridade com o MicroPython permite que você faça mais; estamos ansiosos para criar mais valor para você. Sinta-se à vontade para compartilhar seus projetos conosco também!

### Suporte a DAC

Agradecemos a Aleksei Tertychnyi por enviar o código; todas as funcionalidades relacionadas foram desenvolvidas e contribuídas por ele.

```python
from machine import Pin, Timer, DAC

led = Pin(18, Pin.OUT)
counter = 0

dac = DAC(0) #DAC on A0 output

def loop(tim):
    global counter
    led.value(counter%2)
    print('DAC value: ', end =" ")
    print(counter)
    dac.write(counter%1024)
    counter = counter + 1

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=loop)
```

A tensão no **pino A0** começará a aumentar gradualmente; após atingir o máximo em aproximadamente *3,3 V*, cairá para *0 V* e o ciclo se repetirá.

### Suporte a ADC
Exemplo de código MicroPython para ADC:

```python
from machine import Pin, Timer, ADC
led = Pin(18, Pin.OUT)  # digital output for blinking
counter = 0             # simple counter for LED toggle

ADC_CONVERT_V = 1.0 / 65535.0  # conversion factor: raw ADC (16-bit) → voltage (vref=1.0V)

adc = ADC(4, vref=0)   # ADC reads on pin A4, using internal 1.0V reference
adcVoltage = 0.0       # variable to store measured voltage

def fun(tim):
    global counter, adcVoltage  # make sure we update the global variables
    counter += 1                # increment counter
    adcVoltage = adc.read_u16() * ADC_CONVERT_V  # read ADC and convert to voltage
    print(adcVoltage)           # print voltage to REPL
    led.value(counter % 2)      # toggle LED every callback (blink)

tim = Timer(-1)                    # create a virtual timer
tim.init(period=1000,              # callback period in milliseconds (1000 ms = 1 s)
         mode=Timer.PERIODIC,      # periodic callback
         callback=fun)             # function to call
```

## Console de Dispositivo MicroPython

Nosso parceiro **Neil** escreveu um programa de console de linha de comando para o XIAO usando MicroPython. Com este programa, você pode facilmente enviar, baixar e excluir arquivos. Agradecemos a ele por sua contribuição ao XIAO!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba mais</font></span></strong></a></div>

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
