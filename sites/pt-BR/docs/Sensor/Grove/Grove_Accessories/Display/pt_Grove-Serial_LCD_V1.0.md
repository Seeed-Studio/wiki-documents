---
description: Grove Serial LCD V1.0
title: Grove Serial LCD V1.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Serial_LCD_V1.0
last_update:
  date: 1/29/2023
  author: jianjing Huang
createdAt: '2023-01-29'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Serial_LCD_V1.0/
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/Lcdnew1.jpg)

Grove - Serial LCD V1.0 é a nova versão dos nossos LCDs seriais. Em uma única placa estão acoplados um LCD 16x2 e um circuito embarcado baseado em um PIC HD44780. O PIC on‑board recebe uma entrada serial TTL e imprime no LCD os caracteres que recebe. A biblioteca também permite vários comandos especiais para que você possa limpar a tela, ajustar o brilho da luz de fundo, ligar/desligar o display e muito mais.

Este LCD é um ótimo presente, porque pode ser usado em muitos projetos diferentes!

## Recursos ##

- Muito fácil de usar.

- taxa de baud:9600

- Conexão de 4 pinos (2 I/Os e 2 pinos de alimentação).

- Design de API semelhante à biblioteca LiquidCrystal do Arduino.

- O módulo retorna automaticamente ao modo de escuta.

- Acompanha um rico conjunto de aplicações de demonstração.

- Controle de luz de fundo para economizar energia.

## Ideias de Aplicação ##

- Display LCD para Seeeduino / Arduino / qualquer placa de microcontrolador.

- Displays de hora e temperatura com um RTC e sensor de temperatura.

- Display de aceleração com um acelerômetro.

- Display de ângulo de direção com uma bússola.

- O limite é a sua imaginação.

- Display de status vital de CPU de PC: pode ser interligado ao PC com um transceptor UART adequado.

## Especificação ##

 |Item| Min| Tip| Máx|Unidade|
 |--|--|--|--|--|
 |Tensão de operação| 4.7| 5| 5.5| V|
 |Protocolo de comunicação| UART||| -|
 |Controle de luz de fundo|Sim|||-|
 |Corrente de trabalho:Luz de fundo LIGADA|70|75| 80|mA|
 |Corrente de trabalho:Luz de fundo DESLIGADA|15|20| 25| mA|

## Uso ##

### Instalação de Hardware ###

- Certifique-se de que a tensão de operação do [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) esteja ajustada para 5V

- Conecte o Serial LCD ao [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) (title=undefined) UART por software (Pino 11, Pino 12) através do terminal da **Grove Base board** usando o conector de 4 pinos.

- Pressione o botão Reset após fazer o upload do firmware para o Seeeduino.

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD010.jpg)

### Programação ###

A biblioteca Serial LCD fornece um conjunto rico de APIs para interagir com o módulo Serial LCD. Todas as operações que podem ser realizadas com LCDs normais podem ser obtidas enviando comandos e dados em série. As APIs são projetadas de forma semelhante à biblioteca LiquidCrystal do Arduino, para migração imediata para o driver Serial LCD. A interação com o módulo Serial LCD começa com a inicialização, na qual o módulo Serial LCD envia instruções ao MCU para iniciar a comunicação. Após a inicialização, o LCD entra em modo de trabalho, onde começa a aceitar comandos e dados para exibição. Os comandos e respostas envolvidos na interação são resumidos em [1]

### Aplicações de Demonstração ###

Baixe a [SerialLCD Library](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/SerialLCD_Library.zip) e descompacte‑a na pasta libraries da IDE do Arduino pelo caminho: ..\arduino-1.0.1\libraries, então você pode brincar com seu próprio sistema de display.

Se você tiver Arduino 1.0 ou posterior, NewSoftSerial está incluída no core do Arduino (com o nome SoftwareSerial).
Nota: Quando você tiver conectado o Serial LCD ao Grove e feito o download do exemplo para o Seeeduino/arduino, certifique‑se de resetar primeiro o Seeeduino/arduino.

Demo 1: Hello World

```
This sketch prints "hello, world!" on the first row and time in seconds, elapsed from RESET on second row. This uses begin(),
setCursor(row,col) and print() functions.

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0):
  slcd.setCursor(0, 1);
  // print the number of seconds since reset:
  slcd.print(millis()/1000,DEC);
}
```

SAÍDA:

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_helloworld_example.gif)

Demo 2: Exibir intermitentemente

```
This sketch prints "hello World!" to the LCD and uses the display() and noDisplay() functions to switch on and off the display.

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the display:
  slcd.noDisplay();
  delay(1000);
   // Turn on the display:
  slcd.display();
  delay(1000);
}
```

SAÍDA:
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_display_example.gif)

Demo 3: Blink

```
This sketch prints "hello World!" to the LCD and makes the cursor block blink with Blink() and noBlink() functions.
```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up :
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the blinking cursor:
  slcd.noBlink();
  delay(1000);
   // Turn on the blinking cursor:
  slcd.blink();
  delay(1000);
}
```

SAÍDA:
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_blink_example.gif)

Demo 4: Exibição de Cursor

```
This sketch prints "hello World!" to the LCD and uses the cursor() and noCursor() methods to switch on and off the cursor.

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the cursor:
  slcd.noCursor();
  delay(1000);
   // Turn on the cursor:
  slcd.cursor();
  delay(1000);
}
```

SAÍDA:
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_cursor_example.gif)

Demo 5: Exibir direção do fluxo de texto e posição do cursor

```
This sketch prints "Seeeduino" twice to the LCD. This sketch uses the setCursor(col,row), leftToRight() and rightToLeft() methods
 to demonstrate cursor position and text flow direction (left-to-right and right-to-left).

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  slcd.begin();
  // Turn on the backlight
  slcd.backlight();
  // Switch on the cursor:
  slcd.cursor();
}

void loop() {
    //Set cursor at 0th Row, 0th Column (Top-Left Corner of LCD)
    slcd.setCursor(0,0);
    //Set the text flow direction left-to-right
    slcd.leftToRight();
    slcd.print("Seeeduino");

    //Set cursor at 1st Row, 15th Column (Bottom-Right Corner of LCD)
    slcd.setCursor(15,1);
    //Set the text flow direction right-to-left
    slcd.rightToLeft();
    slcd.print("Seeeduino");

}
```

SAÍDA:
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_textflow_setcursor_example.jpg)

## Referência ##

A **Serial LCD library** fornece um conjunto completo de instruções para explorar os recursos do **LCD1602**. O driver SerialLCD usa a biblioteca **NewSoftSerial** para implementar a lógica UART. O acesso às APIs é feito primeiro criando um objeto da classe **SerialLCD** fornecendo as portas seriais por software (Rx e Tx):

```
SerialLCD slcd(11,12);// Assign 11 and 12 as RxD and TxD lines of Software Serial Port.
```

**Descrição das funções:**
1.begin()

Esta função é usada para inicializar o módulo Serial LCD.

Exemplo:

```
slcd.begin(); // Intialize LCD
```

2.print()

Imprime o texto no LCD. Ela possui duas formas:

Exemplo:

```
slcd.print(data);  // Data can be any text
slcd.print(data,BASE); // BASE can be BIN, DEC, OCT or HEX
slcd.print(float_data,2);//show float data,Decimal digits(1-3)
```

3.clear()

Limpa o display.

Exemplo:

```
slcd.clear();  // Clear the Screen
```

4.home()

Define o cursor para o canto superior esquerdo.

Exemplo:

```
slcd.home();  // go to home
```

5.noDisplay()

Desliga o display sem limpar a RAM.

Exemplo:

```
slcd.noDisplay();  // Blank the Display
```

6.display()

Liga o display após o noDisplay(). O texto existente na RAM é restaurado.

Exemplo:

```
slcd.display();  // Display the text in RAM
```

7.noBlink()

Desliga o cursor piscante do LCD.

Exemplo:

```
slcd.noBlink();  // Disable cursor blinking
```

8.blink()

Exibe um cursor de LCD piscante. Se usado com SLCD_CURSOR_ON, o resultado será diferente em displays diferentes.

Exemplo:

```
slcd.blink();  // Enable cursor blinking
```

9.noCursor()

Oculta o cursor do LCD.

Exemplo:

```
slcd.noCursor();  // Disable cursor display
```

10.cursor()

Mostra o cursor do LCD.

Exemplo:

```
slcd.cursor();  // Enable cursor display
```

11.scrollDisplayLeft()

Rola o conteúdo do display (texto e cursor) uma posição para a esquerda.

Exemplo:

```
slcd.scrollDisplayLeft();  // Scroll Left
```

12.scrollDisplayRight()

Rola o conteúdo do display (texto e cursor) uma posição para a direita

Exemplo:

```
slcd.scrollDisplayRight();  // Scroll Right
```

13.leftToRight()

Define a direção do texto escrito no LCD para "esquerda‑para‑direita", o padrão. Isso indica que os caracteres subsequentes escritos no display irão da esquerda para a direita, mas não afeta o texto já exibido anteriormente.

Exemplo:

```
slcd.leftToRight();  // Set the text flow direction left to right
```

14.rightToLeft()

Define a direção do texto escrito no LCD para "da direita para a esquerda". Isso indica que os caracteres subsequentes escritos no display irão da direita para a esquerda, mas não afeta o texto exibido anteriormente.

Exemplo:

```
preslcd.rightToLeft();  // Set the text flow direction right to left
```

15.autoscroll()

Ligar a rolagem automática do texto do LCD. Isso faz com que cada caractere no display empurre os caracteres anteriores em uma posição. Se a direção atual do texto for da esquerda para a direita (padrão), o display rola para a esquerda.

Exemplo:

```
slcd.autoscroll();  // Enable Auto Scroll
```

16.noAutoscroll()

Desligar a rolagem automática do texto do LCD.

Exemplo:

```
slcd.noAutoscroll();  // Disable Auto Scroll
```

17.setCursor()

Define o cursor para a posição (Coluna,Linha).

Exemplo:

```
slcd.setCursor(Col,Row);  // Scroll to X,Y position
```

18.noPower()

Desliga a alimentação do LCD e a luz de fundo, mas a alimentação do MCU permanece ligada.

Exemplo:

```
slcd.noPower();  // Turn off the LCD power and the backlight
```

19.power()

Liga a alimentação do LCD, mas não a luz de fundo.  

Exemplo:

```
slcd.power();  // Turn on the LCD power
```

20.noBacklight()

Desliga a luz de fundo.  

Exemplo:

```
slcd.noBacklight();  // Turn off the backlight
```

21.backlight()

Liga a luz de fundo.

Exemplo:

```
slcd.backlight();  // Turn on the backlight
```

22.noPower() (new)

Desliga a alimentação do LCD e a luz de fundo, mas a alimentação do MCU permanece ligada.

Exemplo:

```

slcd.noPower();  // Turn off the LCD power and the backlight

```

23.power() (new)

Liga a alimentação do LCD, mas não a luz de fundo.

Exemplo:

```

slcd.power();  // Turn on the LCD power

```

24.noBacklight() (new)

Desliga a luz de fundo.

Exemplo:

```

slcd.noBacklight();  // Turn off the backlight

```

25.backlight() (new)

Liga a luz de fundo.

Exemplo:

```

slcd.backlight();  // Turn on the backlight

```

## Rastreador de Versão ##

 |Revisão|Descrições|Lançamento|
 |--|--|--|
 |v1.0b|Segunda versão|20 Mar 2011|

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Arquivos de Esquemático e Placa](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip)
- **[Library]** [Biblioteca SerialLCD para v1.0b e v1.1b](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/New_SerialLCD_Library_.zip)
- **[repository]** [repositório github para SerialLCD](https://github.com/Seeed-Studio/Grove_SerialLCD)
- **[Library]**  [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)
- **[Library]** [uma pequena correção para a biblioteca v1.0b](https://github.com/ydirson/Wiring/commit/60e58003e8c1dc9be81d0f58b1d0f3ef9fad1446) para `begin()` não seguir o protocolo correto

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
