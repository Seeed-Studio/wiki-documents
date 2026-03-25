---
description: Rainbowduino_LED_driver_platform-ATmega328
title: Plataforma de driver de LED Rainbowduino-ATmega328
keywords:
  - Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-02-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Rainbowduino_LED_driver_platform-ATmega328/
---

|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

A placa Rainbowduino é uma placa controladora compatível com Arduino com capacidade profissional de acionamento de LED. Ela irá controlar uma matriz de LED RGB 8x8 (ânodo comum).

* Nenhum circuito externo necessário, conecte e brilhe!

* 24 canais de corrente constante de 120mA cada

* 8 canais de driver de fonte de 500mA cada

* Ampla adaptação de tensão de saída de 6,5V-12VDC

* GPIO e ADC dedicados

* Comunicação UART e I2C por hardware

* Facilmente em cascata

* Pequeno formato e peso leve

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## Modo Autônomo (conectar e brilhar)

---
Hardware necessário:

* 1 x Rainbowduino

* 1 x Matriz de LED RGB

O modo de funcionamento mais simples, sem necessidade de sistemas externos (apenas um adaptador serial TTL para carregar o firmware). O conteúdo da matriz de LED é gerado pelo próprio Rainbowduino.

Caso de uso:

* Animações simples em tempo real calculadas pelo Rainbowduino

* Exibir animações pré‑armazenadas, limitado devido à ROM de 32kb do Rainbowduino

## Modo UART

---
Hardware necessário:

* 1x Rainbowduino

* 1x Matriz de LED RGB

* 1x Conversor de nível TTL

* 1x unidade transmissora UART (Arduino, PC...)

Envie dados (conteúdo da matriz de LED) do seu computador para um Rainbowduino. Como o Rainbowduino não tem um conector USB, mas sim uma conexão serial TTL, você precisa de um conversor de nível serial TTL (BusPirate, UartSBee, Arduino...).

**Caso de uso:**

Quadros gerados por PC ou Arduino exibidos em UMA matriz de LED

## Modo I2C

---
Hardware necessário:

* 1..n x Rainbowduino

* 1..n x Matriz de LED RGB

* 1 x dispositivo mestre I2C (por exemplo, um Arduino)

* Alguns cabos

Envie dados (conteúdo da matriz de LED) do seu computador para múltiplos Rainbowduinos. Uma observação lateral: se você usar um Arduino com um adaptador FTDI USB para Serial (Duemillanove, Diecimila...) – há uma latência de ~16ms para enviar dados do seu computador para o Arduino. O novo Arduino UNO tem uma latência muito menor, ~4ms.

Caso de uso:

Quadros gerados por PC ou Arduino exibidos em **múltiplas** matrizes de LED

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## Cascateamento I2C

---
O Rainbowduino é projetado para fácil cascateamento. Após conectado fisicamente, a alimentação é repassada e você pode controlar a cadeia por I2C. Observe que cada Rainbowduino deve receber um endereço exclusivo para comunicação I2C.

Prepare a conexão de alimentação:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

Rainbowduino em cascata:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## Especificação

---
* Microprocessador: Atmega 328

* Tamanho da PCB: 60mm *60mm* 1,6mm

* Indicadores: Reset, Power, LED do pino 13

* Alimentação: 6,5-12 VDC (9 VDC recomendado)

* Conector de alimentação: blocos de terminais JST de 2 pinos, jacks DC de 3mm

* Conector de alimentação em cascata: blocos de terminais

* Interface de programação: UART / ISP

* Soquetes de matriz de LED: 32

* Soquete de expansão: par de pinos dobrados de 2,54mm

* Protocolos de comunicação: I2C / UART

* RHOS: Sim

* Tensão de entrada: 6,5~12V

* Consumo global de corrente: 600~2000mA

* Canais de corrente constante (cátodo): 24

* Corrente constante por canal (cátodo): 20~120mA

* Corrente do driver de fonte por canal (ânodo comum): 500mA

* Tensão do driver de fonte por canal (ânodo comum): 9~12V

* Canais de driver de fonte: 8

* Quantidade de LEDs acionados: 192

* Tempo de resposta do circuito: 10ns

* Resolução de cor da matriz de LED RGB por ponto: 4096: taxa de baud UART: 115200baud

## Compatibilidade de dispositivos LED

---
Antes de conectar diretamente aos pinos fêmea, verifique se a matriz de pontos RGB é comprovadamente compatível. A preocupação é principalmente com o pinout, onde LEDs da mesma cor ficam em grupo; aqui anexamos o esquema e a demonstração em foto. A sequência de cores pode mudar, já que a lógica de controle é open source e facilmente reprogramável.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

A potência do Rainbowduino vai muito além de acionar uma matriz de pontos RGB. Com 192 saídas e até 120mA de corrente constante, você pode facilmente montar configurações massivas de LED.

A corrente de saída de cada canal (IOUT) é definida por um resistor externo, Rext. A relação entre Iout e Rext é mostrada na figura a seguir. Consulte o datasheet do MBI5168 para mais detalhes. Ajuste o potenciômetro de 1k no sentido horário para reduzir a corrente de saída (mínimo padrão de 20mA para a matriz de pontos RGB), girando no sentido anti‑horário para aumentar a corrente de saída. Os potenciômetros são de um único giro, observe que força excessiva irá quebrá‑los em rotação ilimitada; então você precisará de um multímetro para ajustar. :)

Isso significa que você pode construir sua própria matriz de LED sem quaisquer resistores adicionais.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## Demonstração

---
<big>Requisitos </big>

* Placa Rainbowduino

* Uma matriz RGB de ânodo comum

* Uma placa Arduino (opcional)

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>Preparar o hardware do Rainbowduino </big>

Conecte a matriz de LED RGB ao Rainbowduino e conecte o "Pino 1" ao bloco de conexão vermelho. O Pino 1 é marcado por um ponto de solda quadrado, enquanto os outros pinos usam um ponto de solda redondo.

<big>Carregar Firmware  </big>

1. Primeiro, carregue um código no Arduino:
Para usar o Arduino para carregar o firmware no Rainbowduino, certifique‑se de que o Arduino esteja limpo – precisamos carregar nele um sketch de firmware vazio como mostrado abaixo.

```
void setup() {}

void loop() {}
```

2. Carregar Firmware no Rainbowduino

Abra o firmware do Rainbowduino, **selecione a placa correta** (Tools--&gt;board--&gt; Arduino Duemilanove or Nano w/ ATmega328) e carregue o firmware. Pelo menos essa é a teoria ;)
 Para seu deleite visual, aqui está o esquema de conexão:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

Usamos uma fonte de alimentação externa, porém você também pode usar os 5V do Arduino.

**NOTA:** Se você possui uma placa Rainbowduino v1, precisa selecionar "Arduino Diecimila, Duemilanove, or Nano w/ ATmega168"!

<table >
<tr>
<th>Arduino</th>
<th>Rainbowduino</th>
<th>RESET</th>
<th>DTR</th>
<th>GND</th>
<th>GND</th>
<th>RX</th>
<th>RX</th>
<th>TX</th>
<th>TX</th>
</tr>
</table>

3. Usar UartSB para carregar firmware

Essas capturas de tela mostram como conectar o UartSBee ao Rainbowduino:

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

Se você conectar o UartSBee à porta USB, ele deverá registrar uma nova porta serial. Agora basta carregar seu firmware usando a nova porta serial.

4. Usar um Buspirate para carregar firmware / bootloader

Vou explicar três métodos de programação (todos usando o Buspirate):

* programação através do ISP.
* programação usando avrdude e reset manual (sem necessidade de patch)
* programação através do avrdude com um pequeno patch.

DESCONECTE O RAINBOWDUINO DO DISPLAY E DA ALIMENTAÇÃO.

PASSO 1: Para usar o Buspirate você precisa de uma nova versão do avrdude [[1]](http://download.savannah.gnu.org/releases/avrdude/). Estou usando a versão 5.10, que reconhece a opção de gravador '-c buspirate'. Você pode testar isso com

```
./avrdude -c buspirate -C ./avrdude.conf
```

Se isso reclamar do gravador, então você precisa de uma versão mais recente do buspirate.

PASSO 2: conecte o buspirate ao conector ISP do rainbowduino assim:

<table >
<tr>
<th> Buspirate</th>
<th> ISP</th>
<th> ISP pin</th>
</tr>
<tr>
<td width="80px"> GND</td>
<td width="80px"> GND</td>
<td width="80px"> 6</td>
</tr>
<tr>
<td> +5V</td>
<td> Vcc</td>
<td> 2</td>
</tr>
<tr>
<td> CS</td>
<td> RESET</td>
<td> 5</td>
</tr>
<tr>
<td> MOSI</td>
<td> MOSI</td>
<td> 4</td>
</tr>
<tr>
<td> MISO</td>
<td> MISO</td>
<td> 1</td>
</tr>
<tr>
<td> SCL/CLK</td>
<td> SCK</td>
<td> 3</td>
</tr>
</table>

PASSO 3: encontre o bootloader correto (estou usando o tiny optiboot firmware). Copie esse arquivo para o diretório recém‑compilado do avrdude.

PASSO 4: programe o atmega 328p com

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

Isso leva um tempo muito longo...

Comecei carregando firmwares sem o bootloader e isso funciona bem. O truque é obter os arquivos HEX da IDE do Arduino. Na versão 0.22-Linux eles são armazenados em /tmp/buildXXXXXXXXXXXX e NÃO no diretório de sketches. Basta emitir o comando 'Upload' sem nenhum gravador conectado (pressione &lt;shift&gt; enquanto pressiona o botão 'upload' para obter muitas informações de depuração da IDE do Arduino).

Depois de ter o bootloader no rainbowduino, você pode usar a interface serial transparente do buspirate. Defina o baudrate para 115200 e insira o macro '(3)' para ativar o modo transparente. O buspirate agora age como um conversor USB‑serial (qualquer outro conversor USB‑serial tipo FTDI pode ser usado). O problema com o buspirate é que não há DTR para resetar o arduino. Agora você precisa cronometrar o reset e o upload manualmente. Pressionar reset após iniciar o upload parece funcionar melhor.

```
HiZ>m
1. HiZ
2. 1-WIRE
3. UART
4. I2C
5. SPI
6. JTAG
7. RAW2WIRE
8. RAW3WIRE
9. PC KEYBOARD
10. LCD
(1) >3
Mode selected
Set serial port speed: (bps)
1. 300
2. 1200
3. 2400
4. 4800
5. 9600
6. 19200
7. 38400
8. 57600
9. 115200
10. 31250 (MIDI)
(1) >9
Data bits and parity:
1. 8, NONE *default
2. 8, EVEN
3. 8, ODD
4. 9, NONE
(1) >
Stop bits:
1. 1 *default
2. 2
(1) >
Receive polarity:
1. Idle 1 *default
2. Idle 0
(1) >
Select output type:
1. Open drain (H=Hi-Z, L=GND)
2. Normal (H=3.3V, L=GND)
(1) >2
READY
UART>(3)
UART bridge. Space continues, anything else exits.
Reset to exit.
```

Depois disso, você pode programar o Arduino com o bootloader:

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

Um passo adiante é aplicar um patch no avrdude, no arquivo 'arduino.c'. O BusPirate envia o sinal 'rts' com a polaridade errada para o Arduino, mas ao trocar 1 por 0 e 0 por 1 isso é corrigido. A partir de então você deve escolher 'arduino' como programador em vez de 'stk500v1'.

```
static int arduino_open(PROGRAMMER * pgm, char * port)
{
    fprintf(stderr, "arduino_open...\n");
    strcpy(pgm->port, port);
    serial_open(port, pgm->baudrate? pgm->baudrate: 115200, &pgm->fd);

  /* Clear DTR and RTS to unload the RESET capacitor
   * (for example in Arduino) */
    serial_set_dtr_rts(&pgm->fd, 1);
    usleep(50*1000);
  /* Set DTR and RTS back to high */
    serial_set_dtr_rts(&pgm->fd, 0);
    usleep(50*1000);

  /*
   * drain any extraneous input
   */
    stk500_drain(pgm, 0);

    if (stk500_getsync(pgm) < 0)
    return -1;

    return 0;
}
```

_Observação: altere o tipo de programador usado pela IDE do Arduino no arquivo 'boards.txt'._

Fonte: buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/), Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming), Optiboot [[4]](http://code.google.com/p/optiboot/)

## Firmware Rainbowdunio

<big>Firmware Neorainbowduino</big>

Este pacote de firmware vem com dois firmwares (um para um Arduino, outro para o Rainbowduino) e uma biblioteca de Processing. Você pode enviar dados de qualquer aplicação pela linha serial para o Arduino – o Arduino então envia as imagens para o dispositivo Rainbowduino correspondente. Eu criei uma biblioteca de Processing fácil de usar para começar.

Fonte: [http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**Recursos:**

* Firmware habilitado para I2C (suporta vários Rainbowduinos)

* Biblioteca de Processing, para que você possa controlar facilmente seu Rainbowduino a partir do Processing!

* Envie quadros completos do Processing para o Rainbowduino

* Envie quadros do Processing para sua matriz RGB, cada quadro tem um tamanho de 8x8 pixels, resolução de cor de 12 bits (4096 cores). A conversão de cores é tratada pela biblioteca

* Biblioteca de Processing otimizada – envie quadros para o Rainbowduino apenas quando necessário (economize ~50% do tráfego – claro, depende dos seus quadros)

* Troca de buffer corrigida (sem mais tremulações)

* Adicionado scanner de barramento I2C, encontre seus Rainbowduinos se você esquecer seus endereços

Modos de trabalho suportados: I2C

<big>Requisitos </big>

Este firmware permite que você use o Processing para controlar o Rainbowduino, então é óbvio que você precisa de:

* Software Processing, obtenha-o em [http://processing.org/](http://processing.org/)

<big>Patches para a IDE do Arduino</big>

Como o firmware neorainbowduino envia quadros completos via I2C (92 bytes), precisamos aplicar um patch no tamanho do buffer I2C do Arduino (para otimizar a velocidade de transferência). Espero que o Arduino suporte tamanho de buffer variável em um futuro próximo. Certifique-se de que sua **IDE do Arduino esteja fechada** ao aplicar os patches nos arquivos!

**Arquivo a ser modificado:** Java/libraries/Wire/utility/twi.h

**Motivo:** Aumentar a velocidade I2C de 100kHz para 400kHz, aumentar o tamanho do buffer I2C de 32 bytes para 98 bytes

<big>Arquivo original</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ 100000L
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH 32
#endif
```

<big>Arquivo modificado</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ **400000L**
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH **98**
#endif

```

x

**Arquivo a ser modificado:** Java/libraries/Wire/Wire.h

**Motivo:** Aumentar o tamanho do buffer Serial de 32 bytes para 98 bytes

<table>
<tr>
<th>Arquivo original</th>
<th>Arquivo modificado</th>
</tr>
<tr>
<td width="300px"></td>
<td width="300px"></td>
</tr>
</table>

<pre>#define BUFFER_LENGTH 32</pre>

<pre>#define BUFFER_LENGTH **98**</pre>

<big>Enviar firmware para o Rainbowduino</big>

Envie o firmware (veja Upload Firmware), o arquivo de firmware de que você precisa é **rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde**.

**Observação:** Este firmware usa o protocolo I2C para se comunicar – cada Rainbowduino precisa de um endereço I2C exclusivo. O endereço pode ser configurado editando o arquivo Rainbowduino.h (`#define I2C_DEVICE_ADDRESS 0x06`). Então não se esqueça de alterar o endereço se você enviar este firmware para mais de um Rainbowduino!

<big>Enviar firmware para o Arduino</big>

Desconecte as linhas RX/TX entre o Rainbowduino e o Arduino. Envie o firmware do Arduino **arduinoFw/neoLed/neoLed.pde** para o Arduino.

<big>Interagir com o Rainbowduino</big>

Este capítulo mostrará a você uma **maneira simples de se comunicar** com seu Rainbowduino. Você precisa de um Arduino (funcionando como um gateway serial para I2C) e um Rainbowduino com um endereço I2C de 0x06.

A conexão entre o Rainbowduino e o Arduino deve ser assim:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-neorainbow.png)

Usamos uma fonte de alimentação externa, porém você também pode usar os 5V do Arduino.

<table>
<tr>
<th> Arduino</th>
<th> Rainbowduino</th>
</tr>
<tr>
<td width="150px">RESET</td>
<td width="150px">DTR</td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>Analog IN 4</td>
<td>SDA</td>
</tr>
<tr>
<td>Analog IN 5</td>
<td>SDL</td>
</tr>
</table>

<big>Instalar bibliotecas do Processing </big>

Depois de instalar o software Processing, você precisará instalar a biblioteca neorainbowduino. Você pode encontrar a biblioteca de Processing no diretório **processingLib\distribution\neorainbowduino-x.y\download**. Descompacte o arquivo zip na sua pasta inicial do Processing (há um arquivo README.TXT dentro com instruções detalhadas de como instalar).

Quando você iniciar o Processing, deverá ser capaz de importar a biblioteca neorainbowduino):

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**Exemplo simples**

Aqui está um sketch de Processing bem simples para enviar alguns retângulos aleatórios para o Rainbowduino.

```c
import processing.serial.*;
import com.neophob.lib.rainbowduino.test.*;
import com.neophob.lib.rainbowduino.*;

static final int SIZE = 400;
Rainbowduino r;

void setup() {
    frameRate(15);
    background(0);
    size(SIZE, SIZE);

    //initialize rainbowduino
    List<Integer> list = new ArrayList<Integer>();
    list.add(6);         //use rainbowduino with slave id 6
    try {
        r = new Rainbowduino(this, list);
        System.out.println("ping: "+r.ping());
    } catch (Exception e) {
        println("FAILED to open serial port!!");
        e.printStackTrace();
    }

    smooth();
    noStroke();
}

void draw() {
    //draw some simple stuff on screen
    color c1 = color(128+(int)random(64), 128, (int)random(255));
    fill(c1);

    int size = 80+(int)random(80);
    int x = (int)random(SIZE);
    int y = (int)random(SIZE);
    rect(x, y, size, size);<br>
    //send PApplet to the Rainbowduino lib - and send it to slave id 6
    r.sendRgbFrame((byte)6, this);
}
```

TODO adicionar algumas capturas de tela

**Como funciona o redimensionamento de imagem**

A imagem será redimensionada usando um Filtro de Média de Área (Area Averaging Filter). Portanto, é importante saber que a imagem deve estar corretamente alinhada. Alinhada significa que o resultado fica bom se a imagem puder ser dividida por 8. Aqui está um exemplo bom e um ruim:

|Exemplo bom (alinhado)|Exemplo ruim (não alinhado)
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)
| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)

## Firmware mtXcontrol

Fonte: [http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**Recursos:**

* mtXcontrol é um editor escrito em Processing para criar facilmente sequências de imagens para vários dispositivos de saída contendo matriz de LEDs multicolorida.

Modos de trabalho suportados: ???

## Firmware 3

Fonte: [http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**Recursos:**

* dupla memória buffer sincronizada com a taxa de atualização

* 4 buffers auxiliares

* conjunto de instruções de alto nível

* múltiplo hardware controlado

* protocolo de comunicação I2C

* armazenamento permanente de dados na EEPROM

Modos de trabalho suportados: I2C

## RainbowDashboard

Fonte: [http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**Recursos:**

* Base de código limpa e de fácil manutenção.

* Compatível com o firmware padrão.

* Suporta modo UART (nenhum host Arduino necessário – fale diretamente com o Rainbowduino).

* Operações gráficas com dupla memória buffer.

* Relógio de tempo real por software.

* Animação controlada pelo próprio Rainbowduino.

* Conjunto de caracteres Windows ANSI completo (CP1252).

* Conjunto de comandos de alto nível.

Modos de trabalho suportados: UART

Pode ser facilmente alterado para usar I2C; apenas um arquivo (RainbowDash.pde) precisa ser modificado.

## Como o firmware funciona

<big>Microprocessador - Atmega 168/328</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Schema.png)

<table>
<tr>
<th> PORTD</th>
<th> PORTB</th>
<th> PORTC</th>
</tr>
<tr>
<td width="150px">pin02 / PD0 / RXD</td>
<td width="150px">pin14 / PB0 / INT0</td>
<td width="150px">pin23 / PC0 / SDI</td>
</tr>
<tr>
<td>pin03 / PD1 / TXD</td>
<td>pin15 / PB1 / INT1</td>
<td>pin24 / PC1 / CLK</td>
</tr>
<tr>
<td>pin04 / PD2 / INT0</td>
<td>pin16 / PB2 / INT2</td>
<td>pin25 / PC2 / LE</td>
</tr>
<tr>
<td>pin05 / PD3 / INT19</td>
<td>pin17 / PB3 / INT3</td>
<td>pin26 / PC3 / OE</td>
</tr>
<tr>
<td>pin06 / PD4 / INT20</td>
<td>pin18 / PB4 / INT4</td>
<td>pin27 / PC4 / SDA</td>
</tr>
<tr>
<td>pin11 / PD5 / INT21</td>
<td>pin19 / PB5 / INT5/SCK</td>
<td>pin28 / PC5 / SDL</td>
</tr>
<tr>
<td>pin12 / PD6 / INT22</td>
<td></td>
<td></td>
</tr>
<tr>
<td>pin13 / PD7 / INT23</td>
<td></td>
<td></td>
</tr>
</table>

**PORTB** corresponde aos pinos digitais 8 a 13 do Arduino. Os dois bits mais altos (6 e 7) correspondem aos pinos do cristal e não podem ser usados.

**PORTC** corresponde aos pinos analógicos 0 a 5 do Arduino. Os pinos 6 e 7 são acessíveis somente no Arduino Mini.

**PORTD** corresponde aos pinos digitais 0 a 7 do Arduino.

<big>Driver de LED de Corrente Constante</big>

Este driver usa o MBI5168. O MBI5168 é um [shift register](https://en.wikipedia.org/wiki/Shift_register) de 8 bits. Ele converte os dados seriais em dados paralelos. Todos os 3 MBI5168 compartilham as entradas LE,CLK e OE.

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

<table>
<tr>
<th> Name</th>
<th> Desc</th>
</tr>
<tr>
<td width="50px">OE</td>
<td width="950px">Saída habilitada; quando em nível baixo (ativo), os drivers de saída são habilitados; quando em nível alto, todos os drivers de saída são desligados (apagados).</td>
</tr>
<tr>
<td>LE</td>
<td>Terminal de entrada de estroboscópio de dados. Os dados seriais são transferidos para o respectivo latch quando LE está em nível alto. Os dados são travados quando LE vai para nível baixo.</td>
</tr>
<tr>
<td>SDI</td>
<td>Entrada de dados seriais para o registrador de deslocamento.</td>
</tr>
<tr>
<td>SDO</td>
<td>Saída de dados seriais para o SDI seguinte do próximo CI driver.</td>
</tr>
<tr>
<td>R-EXT</td>
<td>Terminal de entrada usado para conectar um resistor externo para configurar a corrente de saída para todos os canais de saída.</td>
</tr>
<tr>
<td>CLK</td>
<td>Terminal de entrada de clock para deslocamento de dados na borda de subida</td>
</tr>
</table>

<big>Super Source Driver</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>Deslocar dados para fora (shift out)</big>

Para exibir um quadro completo na Matriz de LEDs, o método de interrupção do Rainbowduino precisa ser chamado 128 vezes. Existem 8 linhas e 16 níveis de brilho. Cada vez que o método displayNextLine() é chamado, uma linha é atualizada com o nível de brilho atual. Depois que todas as 8 linhas são atualizadas, o nível de brilho é atualizado. É por isso que essa função precisa de 128 ciclos até que um quadro completo seja preenchido na Matriz de LEDs.

Abaixo você vê a exibição da Matriz de LEDs após 32, 64, 96 e 128 ciclos. Você nota como o brilho é aumentado.
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>Suporta mais de 4096 cores (12 bits)</big>

O firmware padrão (e a maioria dos firmwares de terceiros) suporta resolução de cor de 12 bits. É possível aumentar isso:

<table>
<tr>
<th> Color Resolution</th>
<th> Payload</th>
<th> Brightness Level</th>
</tr>
<tr>
<td width="250px">12 bit (4bit per color), 4096 Colors</td>
<td width="250px">96 bytes (12bit*64=768bit)</td>
<td>16</td>
</tr>
<tr>
<td>15 bit (5bit per color), 32768 Colors</td>
<td>120 bytes (15bit*64=960bit)</td>
<td>32</td>
</tr>
</table>

A vantagem de usar 4 bits por cor é o armazenamento de dados: um byte contém 2 valores de cor – assim, é fácil obter a cor de um buffer de bytes. Usar 5 bits por cor exige mais poder de CPU ou mais espaço de buffer (usar 2 bytes para 3 valores de cor – desperdiçando 1 bit por cor).

Para atingir resolução de cor de 15 bits, o firmware precisa de duas alterações:

* percorrer 32 níveis de brilho em vez de 16

* alterar a função de shift out

## Recursos

---

* [A Huge DIY LED Matrix](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

* [Informações genéricas do Rainbowduino](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

* [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
