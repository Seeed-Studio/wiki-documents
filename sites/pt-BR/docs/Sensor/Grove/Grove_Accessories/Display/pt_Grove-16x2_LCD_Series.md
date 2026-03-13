---
description: Grove - 16x2 LCD
title: Grove - 16x2 LCD
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-16x2_LCD_Series
sku: 104020113, 104020112, 104020111
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-16x2_LCD_Series/
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 16 x 2 LCD é um display LCD I2C perfeito para Arduino e Raspberry Pi, com alto contraste e fácil de implementar. 16x2 significa duas linhas e cada linha tem 16 colunas, 32 caracteres no total. Com a ajuda do conector I2C Grove, são necessários apenas 2 pinos de sinal e 2 pinos de alimentação. Você nem precisa se preocupar em como conectar esses pinos. Basta conectá-lo à interface I2C no Seeeduino ou Arduino/Raspberry Pi + Base Shield via cabo Grove. Não haverá fiação complicada, soldagem, nem preocupação em queimar o LCD por causa do resistor de limitação de corrente incorreto.

## Versões

|Versão|Pedido|
|---|---|
|The Grove - 16 x 2 LCD (Black on Yellow)|[Buy Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|
|The Grove - 16 x 2 LCD (Black on Red)|[Buy Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html)|
|The Grove - 16 x 2 LCD (White on Blue) |[Buy Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html)|

:::note
         O [Grove - LCD RGB Backlight](https://wiki.seeedstudio.com/pt-br/Grove-LCD_RGB_Backlight/) vem sendo muito bem recebido desde o seu lançamento. Com base no feedback dos clientes, agora trazemos para você um derivado com retroiluminação monocromática mais econômico.
:::
Exceto pela retroiluminação RGB, esses três produtos são quase idênticos ao Grove - LCD RGB Backlight; todos têm 16 caracteres de largura, 2 linhas e retroiluminação de alto brilho.

## Pré-leitura

Uma introdução de **O que é um Grove - 16 x 2 LCD** e **Como ele funciona** é fortemente recomendada antes da leitura, se você não estiver familiarizado com ele. Visite nosso **[blog](https://www.seeedstudio.com/blog/2020/01/20/how-to-use-16x2-lcd-with-arduino-grove-lcd-rgb-backlight/)** para informações detalhadas.

## Recursos

- Construção do display: 16 caracteres * 2 linhas
- Modo de display: STN
- MCU embarcado
- Interface I2C-bus
- Suporta fontes em inglês e japonês

## Especificação

|Item|Valor|
|---|---|
|Tensão de operação|3.3V / 5V|
|Temperatura de operação|0 a 50℃|
|Temperatura de armazenamento|-10 a 60℃|
|Método de acionamento|1/16 duty, 1/5 bias|
|Interface|I^2^C|
|Endereço I^2^C|0X3E|

## Aplicações Típicas

- Display de temperatura
- Display de tempo
- Qualquer projeto que exija um display simples

## Plataformas Suportadas

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={600} height="auto" /></p>|

:::caution
         As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Materiais necessários

| Seeeduino V4.2 | Base Shield|  Grove - 16 x 2 LCD |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

:::note
        * Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

        * Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

#### Visão Geral de Hardware

**Resistor de Pull-Up I2C**

A primeira versão da série Grove - 16 x 2 LCD não tem resistor de pull-up embutido, nem fornece um pad para soldar o resistor de pull-up opcional. Redesenhamos o módulo, e a nova versão possui resistores de pull-up embutidos.  

 Se você tiver uma versão mais antiga em mãos, pode soldar você mesmo um resistor DIP de 10kΩ no pad traseiro do conector Grove. Siga a figura abaixo, solde um resistor DIP de 10kΩ entre os pinos **VCC** e **SCL** e um resistor DIP de 10kΩ entre os pinos **VCC** e **SDA**.

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg" alt="pir" width={600} height="auto" /></p>

**Dimensões**

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg" alt="pir" width={600} height="auto" /></p>

#### Conexão de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

| Seeeduino      |  Cabo Grove       | Grove - 16 x 2 LCD |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V or 3.3V     | Vermelho           | VCC |
| SDA            | Branco             | SDA |
| SCL            | Amarelo            | SCL |

- **Passo 1.** Conecte o Grove - 16 x 2 LCD à porta **I^2^C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino e conecte o Seeeduino ao PC através de um cabo USB.

#### Software

:::tip
   Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) do Github.

:::tip
        O Grove - 16 x 2 LCD compartilha a mesma biblioteca com o [Grove-LCD RGB Backlight](https://wiki.seeedstudio.com/pt-br/Grove-LCD_RGB_Backlight/). O uso é quase o mesmo, exceto que o Grove - 16 x 2 LCD não suporta a API de cor RGB, como **setRGB()**.
:::

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo; você pode abri-lo das três maneiras a seguir：

**1).** Abra-o diretamente na IDE do Arduino pelo caminho: **File --> Examples --> Grove - LCD RGB Backlight --> HelloWorld**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

**2).** Abra-o no seu computador clicando em **HelloWorld.ino**, que você pode encontrar na pasta **XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**, em que **XXXX** é o local onde você instalou a IDE do Arduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

**3).** Ou, você pode simplesmente clicar no ícone

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

no canto superior direito do bloco de código para copiar o código a seguir para um novo sketch na IDE do Arduino.

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

/*
const int colorR = 255;
const int colorG = 0;
const int colorB = 0;
*/

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);

    //lcd.setRGB(colorR, colorG, colorB);

    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}
```

:::note
        * O arquivo de biblioteca pode ser atualizado. Esse código pode não ser aplicável ao arquivo de biblioteca atualizado, portanto recomendamos que você use os dois primeiros métodos.  

        * Como a série **Grove - 16 x 2 LCD** possui apenas retroiluminação monocromática, você precisa comentar o código relacionado à cor RGB. No código de demonstração acima, ou seja, linha 6 e linha 17.
:::

- **Passo 4.** Faça o upload da demonstração. Se você não souber como fazer upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

:::success
        Se tudo correr bem, você verá que o LCD mostra a frase clássica: **hello world**.
:::

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Se você não tiver um Base Shield, o Seeeduino VX Series com interface I2C também funciona.
:::

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1.** Itens usados neste projeto:

<div class="table-center">
 <table>
  <tr>
   <th>Raspberry pi</th>
      <th>Grove Base Hat para RasPi </th>
      <th>Grove - 16x2 LCD</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Passo 2.** Conecte o Grove Base Hat ao Raspberry.
- **Passo 3.** Conecte o Grove - 16 x 2 LCD à porta I2C do Base Hat.
- **Passo 4.** Conecte o Raspberry Pi ao PC por meio de um cabo USB.

#### Software

- **Passo 1.** Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento e instalar o grove.py no seu Raspberry Pi.
- **Passo 2.** Execute os comandos abaixo para rodar o código.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_16x2_lcd
```

A seguir está o código jhd1802.py.

```python

from grove.display.base import *
from grove.i2c import Bus
import time
import sys

# sphinx autoapi required
__all__ = ["JHD1802"]

class JHD1802(Display):
    '''
    Grove - 16 x 2 LCD, using chip JHD1802.
        - Grove - 16 x 2 LCD (Black on Yellow)
        - Grove - 16 x 2 LCD (Black on Red)
        - Grove - 16 x 2 LCD (White on Blue)

    Also, it's our class name,
    which could drive the above three LCDs.

    Args:
        address(int): I2C device address, default to 0x3E.
    '''
    def __init__(self, address = 0x3E):
        self._bus = Bus()
        self._addr = address
        if self._bus.write_byte(self._addr, 0):
            print("Check if the LCD {} inserted, then try again"
                    .format(self.name))
            sys.exit(1)
        self.textCommand(0x02)
        time.sleep(0.1)
        self.textCommand(0x08 | 0x04) # display on, no cursor
        self.textCommand(0x28)

    @property
    def name(self):
        '''
        Get device name

        Returns:
            string: JHD1802
        '''
        return "JHD1802"

    def type(self):
        '''
        Get device type

        Returns:
            int: ``TYPE_CHAR``
        '''
        return TYPE_CHAR

    def size(self):
        '''
        Get display size

        Returns:
            (Rows, Columns): the display size, in characters.
        '''
        # Charactor 16x2
        # return (Rows, Columns)
        return 2, 16

    def clear(self):
        '''
        Clears the screen and positions the cursor in the upper-left corner.
        '''
        self.textCommand(0x01)

    def draw(self, data, bytes):
        '''
        Not implement for char type display device.
        '''
        return False

    def home(self):
        '''
        Positions the cursor in the upper-left of the LCD.
        That is, use that location in outputting subsequent text to the display.
        '''
        self.textCommand(0x02)
        time.sleep(0.2)

    def setCursor(self, row, column):
        '''
        Position the LCD cursor; that is, set the location
        at which subsequent text written to the LCD will be displayed.

        Args:
            row   (int): the row at which to position cursor, with 0 being the first row
            column(int): the column at which to position cursor, with 0 being the first column

 Returns:
     None
        '''
        # print("setCursor: row={}, column={}".format(row,column))
        self.textCommand((0x40 * row) + (column % 0x10) + 0x80)

    def write(self, msg):
        '''
        Write character(s) to the LCD.

        Args:
            msg (string): the character(s) to write to the display

        Returns:
            None
        '''
        for c in msg:
            self._bus.write_byte_data(self._addr,0x40,ord(c))

    def _cursor_on(self, enable):
        if enable:
            self.textCommand(0x0E)
        else:
            self.textCommand(0x0C)


    def textCommand(self, cmd):
        self._bus.write_byte_data(self._addr,0x80,cmd)

def main():
    import time

    lcd = JHD1802()
    rows, cols = lcd.size()
    print("LCD model: {}".format(lcd.name))
    print("LCD type : {} x {}".format(cols, rows))

    lcd.backlight(False)
    time.sleep(1)

    lcd.backlight(True)
    lcd.setCursor(0, 0)
    lcd.write("hello world!")
    lcd.setCursor(0, cols - 1)
    lcd.write('X')
    lcd.setCursor(rows - 1, 0)
    for i in range(cols):
        lcd.write(chr(ord('A') + i))

    time.sleep(3)
    lcd.clear()

if __name__ == '__main__':
    main()

```

```python
(env)pi@raspberrypi:~ grove_16x2_lcd
```

:::tip success
Se tudo correr bem, você conseguirá ver o seguinte resultado
:::

- A luz de fundo será desligada por 1 segundo e, em seguida, será ligada novamente.
- O LCD exibirá:

```
hello world!   X
ABCDEFGHIJKLMNOP
```

- Após 3 segundos, todo o display será limpo e a tela ficará em branco.

Você pode sair deste programa simplesmente pressionando `ctrl`+`c`.

### Brincar com Wio Terminal (ArduPy)

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Wio Terminal | Grove - 16 x 2 LCD |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira Agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira Agora](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

- **Passo 2.** Conecte o Grove - 16 x 2 LCD à porta **I2C** do Wio Terminal.

- **Passo 3.** Conecte o Wio Terminal ao PC por meio de um cabo USB Tipo-C.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Passo 1.** Siga [**ArduPy Getting Started**](https://wiki.seeedstudio.com/pt-br/ArduPy/) para configurar o ambiente de desenvolvimento ArduPy no Wio Terminal.

- **Passo 2.** Certifique-se de que o firmware ArduPy contenha a biblioteca ArduPy do Grove - 16 x 2 LCD usando os comandos a seguir. Para mais informações, siga [**aqui**](https://wiki.seeedstudio.com/pt-br/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-lcd1602
aip build
aip flash
```

- **Passo 3.** Copie o código a seguir e salve-o como `ArduPy-LCD1602.py`:

```python
from arduino import grove_lcd1602
import time

lcd = grove_lcd1602()

def main():
    lcd.print("hello, world!")
    lcd.is_blink_cursor = True
    i = 0
    while True:
        lcd.set_cursor(1, 2) #column 1, row 2
        lcd.print(i)
        time.sleep(1)
        i = i + 1

if __name__ == "__main__":
    main()
```

:::note
       Para mais referências de API, consulte [**aqui**](https://github.com/Seeed-Studio/seeed-ardupy-lcd1602).
:::

- **Passo 4.** Salve o `ArduPy-LCD1602.py` em um local que você conheça. Execute o comando a seguir e **substitua** `<YourPythonFilePath>` pelo local do seu `ArduPy-LCD1602.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-LCD1602.py"
```

- **Passo 5.** Veremos os resultados no Grove - 16 x 2 LCD.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png" alt="pir" width={600} height="auto" /></p>

## Recursos

- **[PDF]** [JDH_1804_Datasheet](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/res/JDH_1804_Datasheet.pdf)

## Projeto

Este é o vídeo de introdução deste produto, com demonstrações simples; você pode experimentar.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Projeto Grove IR Universal Remote**: Tem vários controles remotos? Tem um Arduino? Controle vários dispositivos com apenas um pressionar de um controle remoto Keyes IR.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/ArduinoBasics/grove-ir-universal-remote-project-7ab87f" width={350} />

**Testes de alcance facilitados com o RE-Mote e LCD**: Reduza a quantidade de equipamentos e preparações necessários para testes de campo (2,4GHz e 868MHz), leve tudo o que você precisa na palma da mão.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/alinan/range-tests-made-easy-with-the-re-mote-and-lcd-6e78b3" width={350} />

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
