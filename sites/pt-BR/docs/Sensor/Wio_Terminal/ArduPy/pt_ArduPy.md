---
description: A descrição do ArduPy
title: ArduPy com Wio Terminal
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ArduPy
last_update:
  date: 8/7/2023
  author: cessarr
createdAt: '2023-08-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ArduPy/
---

# Introdução ao ArduPy

Para começar a usar o ArduPy, primeiro é necessário instalar **`aip` - ArduPy Integrated Platform**, que é um utilitário para desenvolver ArduPy e interagir com a placa ArduPy. Ele permite que os usuários comecem rapidamente com ardupy. `aip` foi feito para ser uma ferramenta simples de linha de comando. Você pode personalizar o seu próprio firmware ardupy por meio dele, sem precisar conhecer mais detalhes sobre ArduPy.

## Placas Suportadas

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

## Início Rápido com ArduPy

O método a seguir é usado para experimentar o software ArduPy da forma mais simples. Siga os procedimentos para começar agora!

- **ETAPA.1 Entrar no modo bootloader**

Conecte seu dispositivo ao PC via conexão USB. Entre no modo bootloader reiniciando o dispositivo rapidamente.

  1. Para **Wio Terminal**, consulte [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#faq).
  2. Para **Seeeduino XIAO**, consulte [aqui](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#reset).

Deve aparecer uma unidade USB chamada **`Arduino`** no seu PC. Acesse o local da unidade USB Arduino.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/USBdrive.png"/></div>

- **ETAPA.2 Baixar o Firmware ArduPy UF2**

Baixe o firmware ArduPy na forma de arquivos UF2.

  1. Para [Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_wio_terminal_lastest.uf2)
  2. Para [Seeeduino XIAO](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_xiao_lastest.uf2)

e salve-o na sua unidade.

- **ETAPA.3 Gravar o Firmware ArduPy no Dispositivo**

Depois de baixar o firmware para o seu dispositivo, arraste os arquivos `.UF2` para a unidade USB `ARDUINO`. Agora, sua placa desaparecerá do PC. Reinicie a placa e o firmware ArduPy terá sido carregado nela!

- **ETAPA.4 Piscar o dispositivo**

Agora, haverá uma unidade USB chamada **`ARDUPY`** aparecendo no seu PC. Abra `ARDUPY` e você verá um arquivo python `main.py`. Abra o `main.py` com seu editor favorito, como [Microsoft Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/) etc. Copie o código a seguir e salve o `main.py`.

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT)

while True:
    LED.on()
    time.sleep(1)
    LED.off()
    time.sleep(1)
```

Agora você deve ver o LED embutido do seu dispositivo começar a piscar! Veja as seções abaixo para descobrir mais sobre ArduPy! Você aprenderá sobre a ferramenta `ArduPy-aip` e como usar `aip` para compilar e gravar seu próprio firmware nos dispositivos!

## Instalar `aip` no macOS

Para usuários de macOS, você pode simplesmente executar o seguinte no Terminal para instalar o ArduPy-aip:

```sh
pip3 install ardupy-aip
```

**Nota:** certifique-se de que você instalou o **Python 3** no macOS. Para instalar o Python 3, você pode usar o [**Homebrew**](https://brew.sh/), que é um gerenciador de pacotes de software para macOS. Depois de instalar o Homebrew, execute o seguinte para instalar o python 3: **`brew install python3`**. Você também pode baixar e instalar o [Python 3 a partir do site oficial do Python](https://www.python.org/downloads/mac-osx/).


## Instalar `aip` no Windows

Você pode baixar as versões mais recentes do ArduPy para Windows na sessão abaixo. Depois de baixar, extraia o binário `aip` para um diretório que esteja no seu `PATH`.

- [**Para Windows 64 Bits**](https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe)

Ou, se você tiver o ambiente **Python 3**, também pode instalar usando `pip3`:

```sh
pip3 install ardupy-aip
```

## Instalar `aip` no Linux

Para usuários de Linux, você pode simplesmente executar o seguinte no Terminal para instalar o ArduPy-aip:

```sh
pip3 install ardupy-aip
```

**Nota:** verifique se você tem o **Python 3** instalado e se o `pip3` está atualizado.

## ArduPy-aip CLI

`aip` é uma interface de linha de comando para ArduPy; você pode usar o aip para instalar bibliotecas ArduPy, compilar e gravar firmware ArduPy em hardware com facilidade. Basta usar `help` para obter mais informações:

```sh
aip help
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-help.png"/></div>

- Para obter informações da placa (informações do firmware):

```sh
aip board
```

- Para instalar bibliotecas Arduino vinculadas ao ArduPy:

Verifique aqui as [**bibliotecas ArduPy**](https://github.com/Seeed-Studio?q=seeed-ardupy&type=&language=) disponíveis.

```sh
aip install <ArduPy Library Path> 
# Example Usage: 
# aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- Para desinstalar bibliotecas ArduPy:

```sh
aip uninstall <ArduPy Library Path> 
# Example Usage: 
# aip uninstall Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- Para listar bibliotecas ArduPy instaladas

```sh
aip list
```

- Para compilar firmware ArduPy contendo as bibliotecas que você instalou e os recursos básicos do ArduPy. Observe que agora você pode escolher compilar para [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) ou [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)!

```sh
aip build --board=<board>
# For Seeeduino XIAO:
# aip build --board=xiao
# For Wio Terminal:
# aip build --board=wio_terminal
```


- Para gravar o firmware ArduPy no hardware:

```sh
aip flash
```

!!!Note
        Depois dos comandos, você pode usar a flag `-h` para ver mais formas de uso desse comando. Por exemplo, `aip flash -h`.

- Para interagir com a placa (explorador de arquivos baseado em shell):

```sh
aip shell
```

**Nota:** Depois de entrar no ardupy-mpfshell, você pode usar `help` para obter mais informações e comandos.

- Entrando no modo **REPL**:

```sh
aip shell -c "repl"
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"/></div>

- Para executar arquivo Python:

```sh
aip shell -n -c "runfile <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ur.py"
```

- Para carregar arquivos na placa usando o shell:

```sh
aip shell -n -c "put <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

### Executando seu Primeiro Script

Depois de gravar o firmware ArduPy, deve aparecer uma unidade USB chamada **`ARDUPY`** no seu PC. Você pode criar os seguintes arquivos Python para começar.

- **`boot.py`**

Para executar um script MicroPython desde a inicialização, simplesmente nomeie seu projeto como **`boot.py`** na pasta raiz da placa. **Esse script é executado quando o dispositivo é iniciado.**

- **`main.py`**

Este é o script python padrão, mas ele não é executado na inicialização. O `main.py` é executado quando mudanças são salvas em `main.py`, ou seja, ele pode recarregar automaticamente.

### Uso dentro do ardupy-mpfshell

Depois de entrar no ardupy-mpfshell, use `help` para verificar o uso dos comandos. Aqui estão listados alguns comandos úteis:

- Para listar arquivos nos dispositivos:

```sh
ls
```

- Para remover um arquivo (ou um diretório) no dispositivo:

```sh
rm <File/Directory>
```

- Para enviar, por exemplo, o arquivo local `boot.py` para o dispositivo:

```sh
put <YourPythonFilePath> [Path]
```

- Para executar os arquivos, por exemplo `test.py`, no dispositivo:

```sh
execfile test.py
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"/></div>

## Usando o aip para incluir Outros Exemplos de Bibliotecas ArduPy

`aip` é um dos recursos-chave do ArduPy, que pode ser usado para converter bibliotecas Arduino em interface Python para serem usadas no ArduPy. Aqui fornecemos um exemplo de como incluir a biblioteca ArduPy no firmware ArduPy usando o Wio Terminal:

1. Abra o Terminal/Powershell e execute o seguinte para instalar bibliotecas ardupy.

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

2. Compile o firmware:

```sh
aip build --board=wio_terminal
```

**Nota:** O uso para gravação do firmware aparecerá no final da compilação.

3. Grave o firmware "**NOVO**" na placa **copiando o uso a partir do final da compilação**. Aqui o aip procurará automaticamente a placa conectada ao PC e fará o upload do firmware. Se a placa não estiver conectada, aparecerá um erro.

```sh
aip flash
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"/></div>

#### Exemplo de Uso da Biblioteca

Depois que a biblioteca estiver incluída no firmware ArduPy e gravada no dispositivo, você poderá importar e usar o módulo da seguinte forma:

```sh
aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

>Substitua `/Users/ansonhe/Desktop` pelo seu caminho.

onde o `ur.py` é:

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print ("The distance to obstacles in front is:", ur.cm, 'centimeter')
    time.sleep(1)
```

Para mais referências, consulte [seeed-ardupy-ultrasonic-sensor](https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor).

### FAQ

Para mais referências sobre o aip, visite [ardupy-aip](https://github.com/Seeed-Studio/ardupy-aip) para saber mais.

---

## Tempo e Atraso

- Importando o módulo time e usando atraso:

```py
import time

time.sleep(1)           # Delay for 1 second
time.sleep_ms(500)      # Delay for 500 milliseconds
time.sleep_us(500)      # Delay for 500 microseconds
```

- Usando contador de tempo:

```py
import time

time.ticks_ms()          # milliseconds counter
start = time.ticks_us()  # microseconds counter
time.ticks_diff(time.tick_us(), start) # Measure the difference between counters
```

**Nota:** Você pode usar a tecla **`TAB`** para sugerir automaticamente e ver todas as funções disponíveis. Por exemplo, depois de digitar `time.`, pressione **`TAB`** para ver todas as funções em time.

Para mais referências, visite [funções relacionadas a tempo do MicroPython](https://docs.micropython.org/en/latest/library/utime.html).

## Pino e GPIO

### Diagrama de Pinagem do Seeeduino XIAO

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg)

### Diagrama de Pinagem do Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg)

Para fazer referência ao GPIO em ArduPy, basta usar o mapa de pinos físicos do dispositivo que você está usando. Por exemplo, para o Wio Terminal, o Pino 1 é 3.3V e o Pino 2 é 5V.

- Importando Pin e configurando o GPIO:

```py
from machine import Pin
p3 = Pin(3, Pin.OUT)    # Setting Pin 3 as a output pin
p3.on()                 # Setting Pin 3 to HIGH
p3.off()                # Setting Pin 3 to LOW

p3.value(1)             # Setting Pin 3 to HIGH using value method


p5 = Pin(5, Pin.IN)     # Setting Pin 5 as input pin
p5.value()              # Prints the value of the input pin

p3 = Pin(3, Pin.OUT, value=1) # Setting Pin 3 as output pin and HIGH in one line
p5 = Pin(5, Pin.IN, Pin.PULL_UP) # Setting Pin 5 as input with pull-up resistors
```

## Mapa

Para facilitar o acesso aos periféricos das placas, o ArduPy mapeou os mesmos métodos de chamada do Arduino:

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT) # Setting builtin LED as output

while True:
    LED.on()
    time.sleep(1)
    LED.on()
    time.sleep(1)
```

## PWM (Modulação por Largura de Pulso)

Para usar PWM, você deve usar os canais PWM no dispositivo. Consulte novamente o mapa de pinos do dispositivo e indique onde estão os canais PWM.

- Usando PWM:

```py
from machine import Pin, PWM

pwm0 = PWM(Pin(13))     # Creating PWM Channel on Pin 13
pwm0.freq()             # Current frequency
pwm0.freq(1000)         # Sets the frequency to 1000Hz
pwm0.duty()             # Current duty cycle
pwm0.duty(200)          # Sets the duty cycle to 200
pwm0.deinit()           # Switch off PWM on the pin

pwm1 = PWM(Pin(16), freq=1000, duty=200) # PWM in one line
```

## ADC

Para usar ADC no dispositivo, você deve usar os pinos analógicos. Por exemplo, Pino 13(A0) no Wio Terminal.

**Nota: o canal ADC no Wio Terminal é de 10 bits (0-1023).**

- Usando ADC

```py
from machine import ADC, Pin

adc = ADC(Pin(13))      # Crating ADC on Pin 13
adc.read()              # reading ADC value, 0 ~ 1023
```

## DAC

Para usar DAC no dispositivo, você deve usar os pinos DAC ou pinos PWM na placa. Por exemplo, Pino 11(DAC0) no Wio Terminal.

**Nota: o canal DAC no Wio Terminal é de 12 bits (0-4095).**

- Usando DAC:

```py
from machine import DAC, Pin

dac0 = DAC(Pin(11))      # Creating DAC on Pin 11
dac0.write(512)          # Writing value to DAC, 512/4096*3.3 = 0.4125 V

dac1 = DAC(Pin(26), resolution=10)  # Creating DAC on Pin 26 and using 10 bit resolution
dac1.write(1023)                    # Writing max output to DAC, 3.3V
```

**Nota:** Ao usar DAC em pinos PWM, a resolução no canal será de apenas 8 bits.

```py
# Using DAC om PWM Pins
from machine import DAC, Pin

dac2 = DAC(Pin(16))     # Creating DAC on Pin 16
dac2.write(128)         # Writing value to DAC, 128/255*3.3 = 1.65V
```

## LCD

Para o Wio Terminal, o display TFT LCD pode ser usado como a seguir. Para mais referências sobre LCD, visite [**ArduPy LCD API Reference**](https://wiki.seeedstudio.com/pt-br/ArduPy-LCD/).


- Usando o módulo LCD:

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

Nota: Use **`tab`** para ver as funções disponíveis.

---

## Primeiros Passos com a IDE

Como mencionado antes, você pode usar seu editor preferido para escrever seu programa em Python. Para executar e testar o programa facilmente, você pode simplesmente editar o arquivo `main.py` na unidade USB `ARDUPY` (recarregamento automático). Aqui será demonstrado outro exemplo rápido usando o **Wio Terminal**:

>Certifique-se de que você seguiu os procedimentos acima antes da próxima sessão.

1.Abra `main.py` na unidade USB `ARDUPY`.

2.Copie o seguinte código para `main.py` e salve o arquivo.

```py
from machine import LCD
import time, math

DEG2RAD = 0.0174532925
lcd = LCD()
lcd.fillScreen(lcd.color.BLACK)

# DRAW CIRCLE SEGMENTS
# x,y == coords of centre of circle
# start_angle = 0 - 359
# sub_angle   = 0 - 360 = subtended angle
# r = radius
# colour = 16 bit colour value

def fillSegment(x, y, startAngle, subAngle, r, color):
    # Calculate first pair of coordinates for segment start
    sx = math.cos((startAngle - 90) * DEG2RAD)
    sy = math.sin((startAngle - 90) * DEG2RAD)
    x1 = sx * r + x
    y1 = sy * r + y

    # Draw colour blocks every inc degrees
    for i in range(startAngle, startAngle+subAngle, 1):
        # Calculate pair of coordinates for segment end
        x2 = math.cos((i + 1 - 90) * DEG2RAD) * r + x
        y2 = math.sin((i + 1 - 90) * DEG2RAD) * r + y

        lcd.fillTriangle(int(x1), int(y1), int(x2), int(y2), x, y, color)

        # Copy segment end to segment start for next segment
        x1 = x2
        y1 = y2

def main():
    # Draw 4 pie chart segments
    fillSegment(160, 120, 0, 60, 100, lcd.color.RED)
    fillSegment(160, 120, 60, 30, 100, lcd.color.GREEN)
    fillSegment(160, 120, 60 + 30, 120, 100, lcd.color.BLUE)
    fillSegment(160, 120, 60 + 30 + 120, 150, 100, lcd.color.YELLOW)
    time.sleep(1)
    fillSegment(160, 120, 0, 360, 100, lcd.color.BLACK)

if __name__ == "__main__":
    while True:
        main()
```

3.Você deverá ver o Wio Terminal começar a desenhar um gráfico de pizza na tela instantaneamente!

O recarregamento automático pode ser muito útil ao testar pequenos programas.

## Suporte Técnico

Envie qualquer problema técnico para o nosso [fórum](https://forum.seeedstudio.com/)<br /><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a>