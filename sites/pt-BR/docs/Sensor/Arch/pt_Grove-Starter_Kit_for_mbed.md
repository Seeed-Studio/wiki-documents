---
description: Grove - Kit Inicial para mbed
title: Grove - Kit Inicial para mbed
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Starter_Kit_for_mbed
sku: 110990421
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Starter_Kit_for_mbed/
---

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Grove%20Starter%20Kit%20for%20mbed%201.jpg)

**Sobre mbed e Grove**

mbed é uma plataforma de desenvolvimento de código aberto para prototipagem rápida com microcontroladores. Ela fornece bibliotecas de software gratuitas, projetos de hardware e ferramentas de desenvolvimento para criar projetos com muita facilidade e rapidez.

Grove é uma plataforma de eletrônica modular para prototipagem rápida que não envolve soldagem ou uso de protoboard.

**Sobre este kit**

Este kit foi projetado para que você comece a usar mbed o mais rápido possível. Ele contém muitos módulos Grove plug-n-play para começar a explorar o mundo mbed. Um dos objetivos é se divertir e ganhar confiança com hardware e software ao longo da jornada.

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Começando
---
Tudo o que você precisa para começar é:
- Este kit
- [Uma Arch](https://www.seeedstudio.com/Arch-p-1561.html)
- [Um cabo USB Micro B](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)
- Um computador com acesso à Internet

### Olá, mundo

1.Clique neste [link](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:https://mbed.org/users/viswesr/code/Arch_GPIO_Ex1;platform:Seeeduino-Arch) para **se registrar ou fazer login no mbed**, então você terá acesso ao compilador online do mbed.

2.Importe o programa e abra main.cpp, você verá o código.

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Import_arch_gpio_ex1.png)

3.No IDE online do mbed, clique em "Compile" na barra de ferramentas superior (ou use CTRL + D) para compilar o código e o arquivo binário - Arch_GPIO_Ex1_LPC11U24.bin.

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Compile_mbed_program.png)

4.Conecte a placa Arch ao computador e **mantenha o botão pressionado por alguns segundos**, uma unidade USB chamada CRP DISABLD irá aparecer.

5.Exclua firmware.bin e copie Arch_GPIO_Ex1_LPC11U24.bin para a unidade USB.

6.**Pressione rapidamente** o botão, o programa será executado e um LED começará a piscar.

```
#include "mbed.h"

/* Configure a GPIO pin as output for controlling a LED. 'led' is user assigned name and
 'LED1' is a internal name given to a port pin P1_8 in this Arch platform. */
DigitalOut led(LED1);

int main()
{
    while(1) {
        led = 1;    // Switch ON the LED.
        wait(0.5);  // Wait for 0.5 Seconds.
        led = 0;    // Switch OFF the LED.
        wait(0.5);  // Wait for 0.5 Seconds.
    }
}
```

O programa acima usa a classe **DigitalOut** e a função **wait()** do SDK mbed C/C++. LED1 é um pseudônimo do pino de E/S **P1_8** e está rotulado como D1 na placa Arch. O estado de LED1 é alterado escrevendo-se 0 ou 1 em **led**. A função **wait()** produz um atraso em segundos. O estado do **led** é continuamente alternado a cada 0,5 segundos dentro do loop infinito **while()**.

Mais detalhes sobre **DigitalOut** podem ser encontrados na [página DigitalOut do manual do mbed](https://developer.mbed.org/handbook/DigitalOut). Da mesma forma, a função wait() é documentada na [página wait](https://developer.mbed.org/handbook/Wait).

### Piano de Frutas

Um piano construído com uma cesta de frutas, um microcontrolador e um computador.

A ideia vem do [Makey Makey](http://makeymakey.com/), mas usa hardware e software diferentes. É usado um microcontrolador compatível com mbed e com USB.

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Piano.png)
![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Fruit_Piano_Hardware.jpg)

**Hardware**
- Uma placa Arch
- Uma cesta de frutas
- Um computador com alimentação AC
- Alguns fios

**Software**
1. Clique neste [link](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:http://mbed.org/teams/Seeed/code/Fruit_Piano;platform:Seeeduino-Arch) para importar o programa para o compilador online do mbed.
2. Compile o código e faça o download do arquivo binário - Fruit_Piano_LPC11U24.bin.
3. Conecte a placa Arch ao computador e mantenha o botão pressionado por alguns segundos, uma unidade USB chamada CRP DISABLD irá aparecer.
4. Exclua firmware.bin e copie Arch_GPIO_Ex1_LPC11U24.bin para a unidade USB.
5. Pressione rapidamente o botão para executar o programa
6. Conecte alguns maças ou bananas aos pinos A0 - A5 (P0_11 - P0_14, P0_16, P0_22) da placa Arch
7. Abra o [Fruit Piano](http://xiongyihui.github.io/piano/) e toque.


## Mais, Passo a Passo
---
- [Entrada Digital - Botão: use um botão para controlar um LED](https://developer.mbed.org/teams/Seeed/wiki/Button)
- [Entrada Analógica - Potenciômetro: use um potenciômetro para controlar o piscar de um LED](https://developer.mbed.org/teams/Seeed/wiki/Potentiometer)
- [Medição de Temperatura: use um sensor de temperatura analógico para fazer um termômetro](https://developer.mbed.org/teams/Seeed/wiki/Analog-Temperature-Sensor)
- [Saída PWM - Buzzer: use um buzzer para tocar uma melodia](https://developer.mbed.org/teams/Seeed/wiki/Grove-Buzzer)
- [Display: faça um relógio digital](https://developer.mbed.org/teams/Seeed/wiki/Grove-4-Digit-Display)
- [Um termômetro](https://developer.mbed.org/teams/Seeed/wiki/Thermometer)
- [Teclado infravermelho](https://developer.mbed.org/teams/Seeed/wiki/Infrared-keybaord)
- [Luz colorida](https://developer.mbed.org/teams/Seeed/wiki/Grove-Chainable-RGB-LED)
- [Temperatura controla a cor](https://developer.mbed.org/teams/Seeed/wiki/Temperature-Color)

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
