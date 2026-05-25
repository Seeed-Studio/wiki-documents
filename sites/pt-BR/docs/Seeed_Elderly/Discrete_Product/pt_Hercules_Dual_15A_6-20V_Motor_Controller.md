---
description: Controlador de Motor Hercules Duplo 15A 6-20V
title: Controlador de Motor Hercules Duplo 15A 6-20V
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Hercules_Dual_15A_6-20V_Motor_Controller
sku: 105010000
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Hercules_Dual_15A_6-20V_Motor_Controller/
---

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Hercules_03.jpg)

O Controlador de Motor Hercules Duplo 15A 6-20V é uma placa de controle de acionamento de motor de alta corrente, incluindo processador microcontrolador, circuito de acionamento de motor, circuito de carregamento e circuito de proteção. Ele oferece uma solução completa para alimentação, controle e acionamento.

Comparado com o L298, seu controlador de motor em meia ponte IR2104 e o N-MOSFET têm grande vantagem para acionar dispositivos de carga pesada com corrente de saída de até 15A. O controlador de motor Hercules Duplo é projetado para ampla faixa de alimentação, portanto a bateria lipo universal de 7,4~11,1V usada em carros de controle remoto e aeromodelos também pode ser aplicada. O fusível protegerá a placa em caso de sobrecarga, e o LED correspondente mostrará o status de proteção.

Este controlador de motor é compatível com Arduino. E o melhor de tudo é que ele se concentra em alta expansão. As portas Grove padrão reservadas trazem a você um acesso conveniente a módulos abundantes na plataforma de carro motorizado, como Servo e Encoder, permitindo assim múltiplas funções para que você possa construir criações versáteis.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Hercules-Dual-15A-6-20V-Motor-Controller-p-1515.html)

Características
--------

- Circuito de acionamento em ponte completa baseado em MOSFET com suporte a dois canais independentes, cada canal até 15A
- LED mostra o status de proteção do fusível
- Várias portas Grove, conectando-se convenientemente a servo, encoder e sensores
- Controlador ATMega328, compatível com Arduino

Especificações
--------------

| Item                      | Min | Típico  | Máx  | Unidade |
|---------------------------|-----|---------|------|--------|
| Tensão de Trabalho        | 6.0 | -       | 20.0 | VCC    |
| Corrente do Motor por Canal | - | -       | 15   | A      |
| Tensão de I/O             | -   | 5       | -    | VCC    |
| Lógica de I/O (TTL)       | -   | 5       | -    | VCC    |
| Faixa de Temperatura      | -40 |         | +125 | °C     |

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Controller_Interface_Function.jpg)

**A:** Conectores de Encoder.

**B:** Conectores Grove.

**C**: Conectores de Servo.

**D:** CI ATMega328P.

**E:** Conector SPI.

**F:** Conector de Programação.

**G:** Botão de Reset.

**H:** Fusível de Queima do Motor do Canal 1.

**J:** Fusível de Queima do Motor do Canal 2.

**K:** Bornes de Parafuso do Motor DC Canal 1.

**L:** Bornes de Parafuso do Motor DC Canal 2.

**M:** Bornes de Parafuso de Entrada da Bateria.

Uso
-----

### Visão Geral dos Conectores

**Conectores de Encoder**

Há encoders nos motores da [plataforma Hercules](https://wiki.seeedstudio.com/pt-br/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) para medir a velocidade do motor. Esses dois conectores são usados para conectar esses encoders. O header também fornece 5VCC para alimentar o encoder.

**Conectores Grove**

Esses conectores de Servo são configurados para headers padrão de servo GND, +5V e Sinal para controlar o ângulo do servo.

**Bornes de Parafuso de Entrada da Bateria**

Os conectores da bateria são marcados com GND e VM no borne de parafuso de entrada. VM é o lado positivo da bateria. O GND é o lado negativo da bateria. Certifique-se de que a faixa de tensão de entrada esteja entre 6~20V para evitar qualquer dano.

**Bornes de Parafuso do Motor**

Os bornes de parafuso do motor são marcados com M1A / M1B para o canal 1 e M2A / M2B para o canal 2. Não há polaridade específica para os motores. Se o motor girar no sentido oposto ao desejado, você pode inverter os fios do motor para inverter a rotação. Observe que os J21&J20, J22&J23 são conectados em paralelo, ou seja, você deve conectar os 2 motores esquerdos do [Hercules](https://wiki.seeedstudio.com/pt-br/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) a um canal e os 2 motores direitos ao outro canal.

### O Uso

<div class="admonition note">
<p class="admonition-title">Note</p>
O controlador não pode ser alimentado diretamente pelo conector de programação que se conecta ao PC para download de código.
</div>

O controlador deve ser alimentado pelos bornes de parafuso de energia J1, por baterias ou uma fonte DC (6-20V). O controlador usa 2 fusíveis de ação lenta de 15A para proteger as pontes em “H”. Após conectar a fonte de alimentação:

- Conecte um Motor DC aos Bornes de Parafuso do Canal 1.
- Conecte o controlador ao seu computador com o UartSBee V4 e um cabo USB.

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/IMG_0204-1-.JPG)

- Carregue a [Biblioteca do Controlador de Motor](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip) e execute o programa "motorDriverDemo".

```
    #include "motordriver_4wd.h"
    #include <seeed_pwm.h>

    void setup()
    {
        MOTOR.init(); //Init all pin
    }

    void loop()
    {
        MOTOR.setSpeedDir(DIRF, 80); //Set motor 1 and motor 2 direction:DIRF, Speed:80 (range:0-100).
        delay(3000);
        MOTOR.setSpeedDir(DIRR, 80); //Set motor 1 and motor 2 direction:DIRR, Speed:80 (range:0-100).
        delay(3000);
    }
```

<div className="admonition note">
  <p className="admonition-title">Note</p>
  O motor possui dois sentidos de rotação: DIRF (frente) e DIRR (ré). Se o motor girar no sentido oposto, você pode inverter os fios do motor para inverter a rotação.
</div>

- Desconecte o controlador do seu computador.
- Conecte o controlador a uma bateria ou fonte DC pelos bornes de parafuso de entrada da bateria.
- Agora você pode ver o motor girar em uma certa velocidade.

### Referência

O "motorDriverDemo" contém algumas funções. Para entender como cada linha afeta o resultado, você precisa estudar cuidadosamente os comentários. Consulte as funções abaixo definidas na biblioteca motodriver_4wd.

**1. setStop1()**

Descrição: Para o motor 1

**2. setStop2()**

Descrição: Para o motor 2

**3. void setSpeedDir(int ispeed, unsigned char dir)**

Descrição: Define a velocidade e a direção do motor1 e do motor2

**4. void setSpeedDir1(int ispeed, unsigned char dir)**

Descrição: Define a velocidade e a direção do motor1

**5. void setSpeedDir2(int ispeed, unsigned char dir)**

Descrição: Define a velocidade e a direção do motor2

Uso Expandido
------------

Com base no Controlador de Motor Hercules Duplo 15A 6-20V, projetamos um Carro de Controle Remoto que possui grande potência e bom efeito de amortecimento.

### Controle remoto

**Itens Necessários:**

- Módulo RFBee
- Grove - Thumb Joystick
- Grove - XBee Carrier
- Bateria

Módulo RFBee: Usado para enviar dados remotamente.

Um Grove - Thumb Joystick: Usado para controlar o carro remotamente.

Grove - XBee Carrier: Oferece conveniência para usar o RFbee. Podemos usar o conector MiniUSB para enviar código para o RFBee.

<div class="admonition note">
<p class="admonition-title">Note</p>
Você pode conectar ao PC usando um cabo USB para substituir a Bateria.
</div>

- Conecte o RFBee ao soquete Bee do Grove - XBee Carrier.
- Baixe a [Biblioteca RFBee](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/RFBee_Library.zip) e descompacte-a na pasta libraries da IDE Arduino pelo caminho: ..\arduino-1.0.1\libraries.
- Baixe e envie o demo: [Remote lvc](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Remote_lvc.zip) para um RFbee. Antes de enviar, você precisa selecionar Tools->Board->Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega168 e escolher a porta serial correta no menu Tools.
- Conecte o Grove - Thumb Joystick ao conector Grove IIC do Grove - XBee Carrier.
- Conecte a bateria ao conector de Bateria do Grove - XBee Carrier.

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Remote_Control.jpg)

<div className="admonition note">
  <p className="admonition-title">Note</p>
  Você pode consultar a função de interface do wiki do Grove - XBee Carrier para o conector.
</div>

### Receptor

**Itens Necessários:**

- Módulo RFBee
- Grove - XBee Carrier
- Controlador de Motor Hercules Duplo 15A 6-20V

Módulo RFBee: Usado para enviar dados remotamente.

Grove - XBee Carrier: Oferece conveniência para usar o RFbee. Podemos usar o conector MiniUSB para enviar código para o RFBee.

O Controlador de Motor 15A 6-20V: Aciona o motor para girar.

- Conecte o RFBee ao soquete Bee do Grove - XBee Carrier.
- Conecte o IIC do Grove - XBee Carrier ao conector IIC do Controlador de Motor.
- Conecte quatro motores a Motor1A/Motor1B (Motor2A/Motor2B).

Usamos a **plataforma robótica móvel 4WD hercules** para o controlador de motor, como mostrado abaixo:
![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Car_Body.jpg)

- Envie o código para outro módulo RFBee.

```
    // demo of rfbee send and recv
    #include <Arduino.h>
    #include <EEPROM.h>
    #include <RFBeeSendRev.h>
    #include <RFBeeCore.h>
    #include <Wire.h>

    #define FRAMESTART1                 0x53                // data frame start1
    #define FRAMESTART2                 0x01                // data frame start2
    #define FRAMEEND1                   0x2f                // data frame end1
    #define FRAMEEND2                   0x45                // data frame end2

    void sendToI2C(unsigned char ilen, unsigned char *idata)
    {
        Wire.beginTransmission(4);                           // transmit to device #4
        for(int i = 0; i<ilen; i++) {Wire.write(idata[i]);}  // sends one byte
        Wire.endTransmission();                              // stop transmitting

    }

    void setup(){

        pinMode(10, OUTPUT);
        RFBEE.init();
        Wire.begin();
        Serial.begin(38400);
        Serial.println("ok");
    }

    unsigned char rxData1[200];               // data len
    unsigned char len1;                       // len
    unsigned char srcAddress1;
    unsigned char destAddress1;
    char rssi1;
    unsigned char lqi1;
    int result1;

    unsigned char cntGetDta = 5;

    void loop()
    {
        if(RFBEE.isDta())
        {
            result1 = receiveData(rxData1, &len1, &srcAddress1, &destAddress1, (unsigned char *)&rssi1 , &lqi1);
            Serial.println(len1);
            for(int i = 0; i< len1; i++)
            {
                Serial.print(rxData1[i]);Serial.print("\t");
            }

            Serial.println();

            sendToI2C(6, rxData1);
        }
    }
```

- A biblioteca [Motodriver 4wd.zip](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motodriver_4wd.zip) para o controlador de motor. Antes de enviar o código, você precisa selecionar Tools->Board->Arduino Duemilanove w/ ATmega328.

### Resultado

O carro de controle remoto baseado no controlador de motor Hercules Dual 15A 6-20V e na plataforma robótica móvel 4WD hercules pode carregar um recipiente de água com capacidade de 19 L.

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot.jpg)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo Eagle do Controlador do Robô 4WD](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip)
- [4WD Robot Controller Schematic.pdf](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/4WD_Robot_Controller_Schematic.pdf)
- [Biblioteca do Controlador de Motor](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
