---
description: Grove Teclado Capacitivo de 12 Canais (ATtiny1616)
title: Grove Teclado Capacitivo de 12 Canais (ATtiny1616)
keywords:
  - Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-
sku: 101020636
last_update:
  date: 1/19/2023
  author: jianjing Huang
createdAt: '2023-01-19'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki.jpg)

O Teclado Capacitivo Grove de 12 botões é construído em torno do ATtiny1616, um processador AVR® de 8 bits rodando a até 16 MHz. O ATtiny1616 é um chip de baixo consumo e alto desempenho com controlador de toque periférico QTouch® integrado, que suporta interfaces de toque capacitivo com detecção de proximidade e blindagem ativa. Com este módulo, você pode facilmente criar um teclado de senha para Arduino ou um teclado de telefone DIY.  

Nós fizemos este teclado no formato 3x4, exatamente como o layout de um teclado de celular. O teclado tradicional requer 3 linhas verticais e 4 linhas horizontais para varredura, o que ocupará 7 pinos de E/S do microcontrolador. Com a ajuda do ATtiny1616 e do conector Grove, apenas dois pinos, RX e TX, são suficientes para o Grove - Teclado Capacitivo de 12 Canais. Você pode facilmente usar este módulo com um microcontrolador com interface UART por hardware, ou pode usar a UART por software para ler a entrada dos botões com dois pinos de E/S normais.

Em resumo, o Teclado Capacitivo Grove de 12 botões é um módulo fácil de usar que requer pouquíssimo código, especialmente quando você o utiliza com [placas principais compatíveis com Grove](https://www.seeedstudio.com/seeeduino-boards-c-987.html); sem solda, apenas conectar e usar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Controlador ATtiny1616 de baixo consumo
- Compatível com 3,3 V / 5 V
- Toque capacitivo, alta sensibilidade
- Teclado de 12 botões
- Conector Grove UART de 4 pinos
- LED indicador on-board

## Aplicações

- Teclado de telefone
- Acesso por senha
- Interface de entrada estendida

## Pinagem

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" alt="Touch Keypad hardware" title="hardware overview" />
    <figcaption><b>Figura 1</b>. <i>Visão geral do hardware</i></figcaption>
  </a>
</figure>
</div>

## Especificação

|Parâmetro|Valor|
|---|---|
|Tensão de alimentação|3,3 V / 5 V|
|CPU| CPU AVR® de 8 bits @ 16 MHz|
|Tipo de sensor|Teclado de Toque Capacitivo|
|Quantidade de botões|12|
|Faixa de temperatura de operação|-40°C a 105°C|
|Interface de saída|UART|
|Interface de gravação de firmware|UPDI|

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield |Grove Teclado Capacitivo de 12 botões|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 com a Base Shield.

:::note
**1** Por favor, conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use um cabo USB com 4 fios internos; cabos com 2 fios não conseguem transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexão de Hardware

- **Passo 1.** Conecte o Grove Teclado Capacitivo de 12 Canais à porta **D2** da Base Shield.

> Se você estiver usando uma placa SAM, então você deve conectar à porta **UART**. Consulte a Tabela 1 para mais detalhes.

|Placa|Tipo de UART|Porta de conexão|
|-----|---------|------------|
|Placa AVR (como Seeeduino V4.2|UART por software|D2,D3|
|Placa SAM (como Seeeduino Lotus M0+|UART por hardware|UART|

<div align="center"><b>Tabela 1.</b><i>Seleção de Porta UART</i></div>

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki-connect.jpg)

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe o [12_Channel_Keypad.ino](https://github.com/Seeed-Studio/Seeed_ATtiny1616/blob/master/12_Channel_Keypad.ino) no Github.

- **Passo 2**. Em seguida, abra `12_Channel_Keypad.ino` ou simplesmente copie o código a seguir para um novo sketch do Arduino.

```cpp
#include "SoftwareSerial.h"

#if defined(ARDUINO_ARCH_AVR)
#define SERIAL Serial
SoftwareSerial mySerial(2,3);
#define TRANS_SERIAL  mySerial
#elif defined(ARDUINO_ARCH_SAMD)
#define SERIAL SerialUSB
#define TRANS_SERIAL  Serial
#else

#endif


//RX=2,TX=3(D2) Software Serial Port

void setup() {
 TRANS_SERIAL.begin(9600); 

    SERIAL.begin(9600);  // start serial for output
    SERIAL.println("Version:v1.0");
}

void loop() {
    printData();
}

/*
* data mapping:E1---1；E2---2；E3---3；E4---4；E5---5；E6---6；
*              E7---7；E8---8；E9---9；EA---*；EB---0；EC---#；
*/
void printData() {
    while(TRANS_SERIAL.available()) {
        uint8_t data = TRANS_SERIAL.read();
        switch(data) {
                case 0xE1 :
                    SERIAL.println("1");
                    break;
                case 0xE2 :
                    SERIAL.println("2");
                    break;
                case 0xE3 :
                    SERIAL.println("3");
                    break;
                case 0xE4 :
                    SERIAL.println("4");
                    break;
                case 0xE5 :
                    SERIAL.println("5");
                    break;
                case 0xE6 :
                    SERIAL.println("6");
                    break;
                case 0xE7 :
                    SERIAL.println("7");
                    break;
                case 0xE8 :
                    SERIAL.println("8");
                    break;
                case 0xE9 :
                    SERIAL.println("9");
                    break;
                case 0xEA :
                    SERIAL.println("*");
                    break;
                case 0xEB :
                    SERIAL.println("0");
                    break;
                case 0xEC :
                    SERIAL.println("#");
                    break;
                default:
                    break;
            }
    }

}

```

- **Passo 3.** Faça o upload do exemplo. Se você não sabe como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas `ctrl`+`shift`+`m` ao mesmo tempo. Defina a taxa de baud para **9600**.

:::tip
Agora, toque no teclado e o monitor exibirá a tecla correspondente.
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/arduino-output.jpg" alt="grove keypad demo" title="output" />
  </figure>
</div>

### Brincar com Raspberry Pi

**Materiais necessários**

| Raspberry pi | Grove Base Hat para RasPi| Grove Teclado Capacitivo de 12 botões |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

- **Passo 1**. Conecte o Grove Base Hat no Raspberry.

- **Passo 2**. Conecte o teclado Grove 12 button Capacitive Touch Keypad à porta **UART** do Base Hat.

- **Passo 3**. Ligue o Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pii-connect.jpg)

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

##### Configuração de UART

Antes de começar, precisamos configurar o UART do Raspberry Pi.

- Passo 1. Habilite o **UART0** do Raspberry Pi3.

```
sudo nano /boot/config.txt
```

Depois adicione o conteúdo `dtoverlay=pi3-disable-bt` ao final do **config.txt**

Pressione `ctrl`+`x` para sair do nano e pressione `y` para salvar a modificação.

- Passo 2. Desabilite o serviço do sistema para usar o UART0.

```
sudo systemctl disable hciuart
```

:::note
Pi3-disable-bt desabilita o dispositivo Bluetooth e restaura o UART0/ttyAMA0 para os GPIOs 14 e 15. Também é necessário desabilitar o serviço do sistema que inicializa o modem para que ele não use o UART: sudo systemctl disable hciuart.
:::

- Passo 3. Exclua o `console=serial0,115200` em **cmdline.txt**.

```
sudo nano /boot/cmdline.txt
```

Depois exclua `console=serial0,115200` neste arquivo.

:::note
        Se você não conseguir encontrar `console=serial0,115200` neste arquivo txt, apenas pule esta etapa.
:::

- Passo 4. Reinicie o Raspberry Pi

```
sudo reboot
```

Para mais detalhes, verifique a documentação oficial [Raspberry Pi UART Config](https://www.raspberrypi.org/documentation/configuration/uart.md)

##### Demo no Raspberry Pi

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.

Depois que o ambiente do sistema for configurado com sucesso, você verá um prompt como este:

```cpp
Running setup.py install for grove.py ... done
Successfully installed grove.py-0.6
#######################################################
  Lastest Grove.py from github install complete   !!!!!
#######################################################

```

Agora, digite 'ls', você poderá encontrar a pasta **grove.py** no diretório raiz.

```cpp
pi@raspberrypi:~ $ ls
01_HelloRPi            Desktop    MagPi         rpi_apa102driver
01_HelloRPi.cpp        Documents  Music         Templates
4mics_hat              Downloads  ofxGPIO       Videos
apa102_led.c           env        Pictures      wiringpi_apa102
bcm2835-1.50           grove.py   Public        wiringpi_apa102.cpp
bcm2835-1.50.tar.gz    led        python_games
bcm2835-1.50.tar.gz.1  led1       respeaker

```

- **Passo 3**. Execute os seguintes comandos para rodar o demo.

```
cd grove.py/grove
python grove_12_channel_touch_keypad.py

```

:::tip
    Em seguida, toque no teclado, o terminal exibirá a tecla correspondente.
:::

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/grove-py-result.jpg)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo de esquema do Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip)
- **[PDF]** [Folha de dados do ATtiny1616](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/ATtiny1616-1617_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
