---
description: Tricycle Bot
title: Tricycle Bot
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Tricycle_Bot
sku: 110070028
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Tricycle_Bot/
---

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/3.jpg)

O Tricycle Bot é uma plataforma de robô DIY fácil de montar e compatível com Grove para educação. Ele inclui os materiais eletrônicos e estruturais que podem ser montados facilmente seguindo o guia. O Tricycle Bot possui três andares e cinco suportes entre o 2º e o 3º andar; no 3º andar podem ser fixados muitos módulos por meio de parafusos e porcas.

Além disso, você pode fixar a placa Arduino e a protoboard como o coração do robô no 2º andar, e cada suporte pode receber 1–2 módulos Grove plug‑n‑play como as “asas” do robô para reforçar suas funções, como o módulo Grove de LED RGB e ultrassônico. A tensão de alimentação do Tricycle Bot é fornecida por um suporte de bateria de 12 V.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)

:::warning
    Este kit **NÃO** inclui um controlador nem um driver de motor.
:::
## Recursos

- Suporte a múltiplas plataformas
- Suportes compatíveis com Grove
- Fácil de montar
- Opções de controle RF/BLE/Wi‑Fi

## Lista de Peças

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/4.jpg)

|Nome da peça|Especificação|Quantidade|
|:---------|:-----------:|:------:|
|Roda     |Ф64mm*W30mm  |2       |
|Motor DC com redução|/ |2       |
|Roda universal|49\*32\*22mm|1   |
|Suporte de bateria|62\*58\*30mm|1    |
|Abraçadeiras|20.5\*31.8mm|1      |
|Placa inferior (1º andar)|220\*155\*3.8mm|1|
|Placa intermediária (2º andar)|220\*155\*3.8mm|1|
|Placa superior (3º andar)|160\*158\*3.8mm|1|
|Suporte frontal|62\*56\*3.8mm|1      |
|Suporte lateral|62\*31\*3.8mm|4       |
|Rebite_1  |R3090        |4       |
|Espaçadores_2|M3\*22     |6       |
|Espaçadores_3|M3\*55+6   |4       |
|Parafuso_4  |PM3\*8       |14      |
|Parafuso_5  |PM3\*25      |4       |
|Porca_6    |M3\*2.3      |6       |
|Rebite_7  |R2064        |15      |
|Parafuso_8  |KM2\*10      |15      |
|Porca_9    |M2\*1.5      |15      |
|Chave    |/            |2       |
|Chave de fenda|/           |1       |

**Este kit não inclui o Arduino/Genuino 101 nem a protoboard.**

## Instruções de Montagem

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/1.png)

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/2.png)

Você pode fixar quaisquer placas que desejar no Tricycle Bot para acionar esta plataforma de robô, como Arduino, Raspberry Pi e BeagleBone. E, para acionar os motores DC e os módulos Grove, o motor cape e o Grove cape são bons auxiliares para você.

Como há tantas placas para escolher, aqui faremos uma introdução de como escolher a placa adequada para você entre Arduino, Raspberry e BeagleBone.

## Trabalhando com Arduino

Arduino é a plataforma de prototipagem open‑source mais famosa graças ao seu hardware e software fáceis de usar. Acreditamos que você pode criar facilmente um carro robô divertido e criativo com Arduino. E como temos tantos módulos Grove para Arduino, é conveniente expandir as funções do seu carro robô, como efeito de LED, detecção de obstáculos ou controle remoto (RF/Bluetooth/Wi‑Fi).

### [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)
O Seeeduino v4 é uma placa de desenvolvimento de MCU ATmega328 de código aberto e compatível com Arduino. Achamos que o Seeeduino v4 é um dos melhores derivados/compatíveis com Arduino disponíveis. O Seeeduino v4 é rico em recursos, muito mais estável, fácil de usar e até bonito.

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/SeeeduinoV4/master/images/cover.JPG" width="50%" height="50%" />
</div>

### [Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html)
O Motor Shield é um módulo driver para motores que permite usar o Arduino para controlar a velocidade de trabalho e a direção do motor.

<div className="text-center">
  <img src="https://github.com/SeeedDocument/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" width="50%" height="50%" />
</div>

### [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)

Como uma placa de expansão, o Base Shield v2 possui muitos conectores Grove, o que torna conveniente usar módulos Grove em conjunto. E é compatível com uma série de produtos Arduino.

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" width="50%" height="50%" />
</div>

### Módulos Grove Recomendados

|Fita de LED W2812B|Sensor ultrassônico|Seguidor de linha|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/3.jpg)|
|[COMPRE AGORA!](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[COMPRE AGORA!](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|[COMPRE AGORA!](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html)|

|Buzzer|RF serial|Bluetooth serial|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/6.jpg)|
|[COMPRE AGORA!](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|[COMPRE AGORA!](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)|[COMPRE AGORA!](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)|

:::tip
    Clique em [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) para obter mais módulos disponíveis.
:::
## Trabalhando com Raspberry Pi

O Raspberry Pi é atualmente um dos computadores de placa única mais populares; ele tem desempenho de computação muito mais poderoso do que o Arduino. Como o Raspberry Pi é tão popular, você pode encontrar facilmente muitos tutoriais de projetos divertidos.  

### [Raspberry Pi 3](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

O Raspberry Pi 3 inclui LAN sem fio 802.11 b/g/n integrada, Bluetooth Clássico e LE. Você não precisa de periféricos adicionais para torná‑lo sem fio. Ele possui desempenho 10 vezes superior ao do Raspberry Pi 1.

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/seeed/img/2016-08/xuZp3Msf6xeHp96wPFjInzco.jpg" width="50%" height="50%" />
</div>

### [Placa de Motor Raspberry Pi v1.0](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

A Raspberry Pi Motor Board permite acionar dois motores DC com o seu Raspberry Pi, controlando a velocidade e a direção de cada um de forma independente.

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/images/product/103030031%201.jpg" width="50%" height="50%" />
</div>

### [GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)

GrovePi+ é um sistema que leva módulos Grove ao Raspberry Pi. Ele adiciona suporte aos recém‑lançados Raspberry Pi Model B+ e Model A+.

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/product/110060049%2010_03.jpg" width="50%" height="50%" />
</div>

### Módulos Recomendados

|Webcam USB|Display OLED|Módulo GPS|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/3.jpg)|
|[COMPRE AGORA!](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[COMPRE AGORA!](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[COMPRE AGORA!](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
    Clique em [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) para obter mais módulos disponíveis.
:::

## Trabalhando com Placa BeagleBone

BeagleBone também é um dos computadores de placa única com Linux mais populares. Em comparação com o Raspberry, o BeagleBone tem uma vantagem na programação de módulos Grove, graças às suas bibliotecas Mraa e UPM.

### [BeagleBone Green Wireless](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Wireless-p-2650.html)
O SeeedStudio BeagleBone Green Wireless é baseado no design de hardware open‑source do BeagleBone Black, mas possui uma interface WiFi/Bluetooth flexível e de alto desempenho, tornando mais fácil desenvolver controle remoto, como o [BBGW Wi-Fi Car](https://www.instructables.com/id/Super-Quickly-DIY-Web-RC-Car-With-Python-and-Beagl/).

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/BBGW_cover.png" width="50%" height="50%" />
</div>

### [Motor Bridge Cape v1.0](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)
O Motor Bridge Cape pode controlar dois motores de passo ou quatro motores DC escovados com alimentação DC de 6 a 15 V e cerca de 1 A de corrente por motor. Ele também possui seis interfaces de controle de servo e seis I\O de expansão, o que significa que você pode adicionar mais um braço robótico ao seu carro robô.  

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/master/img/Motor_bridge_driver.jpg" width="50%" height="50%" />
</div>

### [Grove Base Cape para BeagleBone v2](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)
Grove Base Cape para BeagleBone v2 é uma placa de expansão do sistema Grove para a plataforma BeagleBone. Este cape torna conveniente conectar muitos transdutores (sensores e atuadores) disponíveis como módulos Grove à plataforma BeagleBone.

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg" width="50%" height="50%" />
</div>

### Módulos Grove Recomendados

|WEBCAM USB|FITA DE LED W2812B|IMU 9DOF|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/3.JPG)|
|[COMPRE AGORA!](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[COMPRE AGORA!](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[COMPRE AGORA!](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

|DISPLAY OLED|SENSOR DIGITAL DE LUZ|MÓDULO GPS|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/6.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[GET ONE NOW!](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
    Clique em [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) para obter mais módulos disponíveis.
:::
## Exemplo Simples

Aqui está um exemplo simples de como fazer um Tricycle Bot com um Arduino UNO.

### Coisas de que precisamos

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/7.png)

- [Arduino UNO](https://www.arduino.cc/en/Main/ArduinoBoardUno) *1
- [Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html) *1
- [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) *1
<!-- - [Tricycle Bot]() *1 -->
- [Digital RGB LED Flexi-Strip](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html) *1
- [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) *1
- [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) *1

### Montagem

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/5.jpg" width="50%" height="50%" />
</div>

1. [Monte o Tricycle Bot.](https://files.seeedstudio.com/wiki/Tricycle_Bot/Tricycle_Bot.md#assembly-introdutions)
2. Fixe os módulos Grove nas laterais e na placa superior.
3. Conecte o Grove Buzzer ao **D4**, o Grove Ultrasonic Ranger ao **D5** e a tira de LED ao **D6** do Base Shield.
4. Pronto!

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/6.jpg" width="50%" height="50%" />
</div>

### Demonstração

Este é o [vídeo](http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV) deste exemplo simples.

<div className="img-wrapper ng-scope" ng-if="fileType === 'video'">
  <video ng-src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" width={700} controls src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" />
</div>

- Este carro de demonstração Tricycle Bot é capaz de detectar o obstáculo à sua frente e fazer uma curva quando a distância for menor que 35 CM.
- Quando o carro estiver em linha reta, a tira de LED piscará em azul, enquanto quando o carro estiver fazendo uma curva, a tira de LED piscará em vermelho e o Grove Buzzer emitirá um som de alerta.

### Programação

- Baixe a biblioteca Arduino de [Motor Shield V2](https://github.com/Seeed-Studio/SeeedMotorShieldV2), [Grove - Ultrasonic Ranger](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger) e [LED Strip](https://github.com/adafruit/Adafruit_NeoPixel).

```
 /*
 * TricycleBotDemo.ino
 *
 * Simple code for Tricycle Bot
 *
 * Copyright (c) 2016 Seeed Technology Limited.
 * MIT license
 *
 */

#include "MotorDriver.h"
#include "Adafruit_NeoPixel.h"
#include "Ultrasonic.h"

#define BEE           4
#define LEDPIN        6
#define LEDNUM        10
#define PIXELS_SPACE  128
#define BRIGHTNESS    150
#define DistanceCM    35

Adafruit_NeoPixel strip = Adafruit_NeoPixel(LEDNUM, LEDPIN, NEO_GRB + NEO_KHZ800);
MotorDriver motor;
Ultrasonic ultrasonic(5);

void setup() {
    // put your setup code here, to run once:
    pinMode(BEE, OUTPUT);
    strip.setBrightness(BRIGHTNESS);
    strip.begin();
    strip.show();
    motor.begin();
    pixelStart();
}

void loop() {

    // put your main code here, to run repeatedly:
    long RangeInCentimeters;
    RangeInCentimeters = ultrasonic.MeasureInCentimeters();

    if (RangeInCentimeters < DistanceCM) {
        turnRight();
        beep();
        pixelState2();
    }
    else {
        goStraight();
        pixelState1();
    }
    delay(100);
}

void goStraight() {
    motor.speed(0, 100);
    motor.speed(1, 100);
}

void turnRight() {
    motor.speed(0, -100);
    motor.speed(1, 100);
}

//go straight
void pixelState1() {
    for (uint32_t t = 0; t < (PIXELS_SPACE * LEDNUM); ++t) {
        for (int i = 0; i < (LEDNUM / 2); i++) {
            strip.setPixelColor(((LEDNUM / 2) - i -1) , triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
            strip.setPixelColor(i + 5, triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
        }
        strip.show();
    }
}

//turn right
void pixelState2() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 250, 0, 0);
            strip.show();
        }
        delay(50);
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 0, 0, 0);
            strip.show();
        }
        delay(50);
    }
}

void pixelStart() {
    for (int i = 0; i < LEDNUM; i++) {
        for (int j = 0; j< 255; j++) {
            strip.setPixelColor(i, 0, j, 0);
            strip.show();
        }
        delay(50);
    }
}

uint32_t triangular_color(uint32_t t) {
    uint32_t c = 0;

    if (t < 256) {
        c = strip.Color(0, 0, t);
    } else if (t < 512) {
        c = strip.Color(0, 0, 511 - t);
    }

    return c;
}

void beep() {
    digitalWrite(BEE, HIGH);
    delay(100);
    digitalWrite(BEE, LOW);
}
```

## Anexos

- [Instruções de Montagem do Tricycle Bot (pdf)](https://files.seeedstudio.com/wiki/Tricycle_Bot/res/Tricycle%20Bot%20Assembly%20Instructions.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
