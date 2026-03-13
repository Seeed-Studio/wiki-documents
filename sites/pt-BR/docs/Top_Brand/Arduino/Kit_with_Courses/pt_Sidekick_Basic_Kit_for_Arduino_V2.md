---
description: Kit Básico Sidekick para Arduino V2
title: Kit Básico Sidekick para Arduino V2
keywords:
  - Kit com Cursos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sidekick_Basic_Kit_for_Arduino_V2
sku: 110060025
last_update:
  date: 2/17/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sidekick_Basic_Kit_for_Arduino_V2/
---

<!-- ---
name: Sidekick Basic Kit for Arduino V2
category: Arduino
bzurl: https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html
oldwikiname:   Sidekick Basic Kit for Arduino V2
prodimagename:  BasicKit.jpg
surveyurl: https://www.research.net/r/Sidekick_Basic_Kit_for_Arduino_V2
sku:  110060025
--- -->
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/BasicKit.jpg)

O Kit Básico Sidekick para Arduino foi projetado para ser usado com sua placa Arduino / Seeeduino / Seeeduino ADK / Maple Lilypad ou qualquer placa de MCU. Ele contém tudo o que é necessário para um usuário iniciante conectar seu computador a um Arduino. Inclui muitos dos acessórios mais populares para projetos de faça-você-mesmo (DIY): como protoboard, jumpers, LEDs coloridos, resistores, buzzer, etc.
Todos esses componentes vêm em sua própria caixa prática, fáceis de transportar e com bagunça mínima.

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Conteúdo do Kit

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Basic_Kit_for_Arduino_Photo_11.jpg)

| Item                    | Quantidade                     |
|-------------------------|--------------------------------|
| Protoboard              | 1                              |
| LED verde               | 5                              |
| LED vermelho            | 5                              |
| LED RGB ânodo comum     | 1                              |
| Capacitor cerâmico      | 10nF x 10 + 100nF x 10         |
| Capacitor de alumínio   | 100uF x 5                      |
| Resistor                | 330R x 10 + 1k x 10 + 10k x 10 |
| Chave de inclinação     | 1                              |
| Termistor               | 1                              |
| Fotoresistor            | 1                              |
| Diodo                   | 1                              |
| Buzzer                  | 1                              |
| Botão                   | 1                              |
| Chave                   | 5                              |
| Mini Servo              | 1                              |
| Potenciômetro com knob  | 1                              |
| Fio jumper para protoboard | 5x longo, 20 x curto        |
| Caixa                   | 4                              |

## Revisão de Eletrônica Básica

**Corrente e Tensão**

Corrente é a taxa de fluxo de carga elétrica em um condutor. Tensão é a diferença de potencial (força elétrica motriz) aplicada entre dois pontos para conduzir corrente. Corrente é expressa em Amperes (A) e Tensão é expressa em Volts (V).

**Resistor**

Resistores são obstáculos ao fluxo de corrente em um condutor. Eles são usados para limitar o fluxo de corrente para um dispositivo eletrônico, como uma lâmpada. A resistência ao fluxo de corrente é expressa em Ohms (Ω). Eles são divididos em **resistor fixo** e **resistor variável (POT)**.

- **Conectando Resistores**

    Resistores podem ser conectados de dois tipos diferentes: em paralelo ou em série entre si.

- **Resistores em Série**

    Quando os resistores são conectados em série, a resistência equivalente total será igual à soma de todos os valores dos resistores em série.

- **Resistores em Paralelo**

    Em paralelo, o recíproco da resistência equivalente total é igual à soma dos recíprocos de cada resistor.

**Lei de Ohm**

As relações entre Corrente, Tensão e Resistência são regidas pela Lei de Ohm - que afirma que "A corrente através de um condutor (I Amperes) entre dois pontos é diretamente proporcional à diferença de potencial ou tensão entre esses dois pontos (V Volts), e inversamente proporcional à resistência entre eles (R Ohms)"
ou seja, I = V / R. Logo, V = IR ou R = V / I. O seguinte triângulo da Lei de Ohm pode ser usado para lembrar a relação entre V, I e R. A linha vertical indica operação de multiplicação e a linha horizontal indica operação de divisão.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Ohm-s_law_triange.jpg)

ex.: Portanto, para saber a corrente I, dividimos V por R.

**Protoboard**

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Breadboard_.jpg)

**Protoboard** é um dispositivo de prototipagem para circuitos eletrônicos. É muito útil para conectar componentes eletrônicos e fazer um circuito sem solda. A protoboard consiste em linhas e colunas de furos com contatos metálicos para inserir componentes. A protoboard fornecida com o Kit Básico Sidekick para Arduino é organizada em colunas de **2 X 30 furos** e linhas de **4 X vinte furos**. Esses furos são conectados internamente de uma maneira ilustrada abaixo.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Breadboard_Internal_Connections.jpg)

**Resistores Fixos**

Os resistores fornecidos com o Kit Básico são feitos de carbono e são do tipo valor fixo. O valor da resistência é marcado por faixas coloridas. Você pode obter o valor a partir da tabela de código de cores de resistores.

- A _primeira faixa_ indica o **primeiro dígito** do valor da resistência.

- A _segunda faixa_ indica o **segundo dígito**.

- A _terceira faixa_ indica o valor do **multiplicador** do resistor.

- A _quarta faixa_ indica o **valor de tolerância**.

**Potenciômetro (POT)**

POT é um resistor variável cuja resistência pode ser alterada girando o knob. Ele tem três terminais - os terminais nos lados ambilaterais do resistor são conectados às extremidades de um condutor feito de material resistivo. O terminal do meio é conectado a um cursor que se move sobre o material resistivo. O valor da resistência muda proporcionalmente à posição do knob.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_POT.png)

**Termistores**

Termistores são resistores especiais cuja resistência será alterada com a temperatura ao seu redor. Eles fornecem um meio muito útil e conveniente de detectar a diferença de temperatura.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Thermistor.JPG)

**Resistores Dependentes de Luz (LDR)**

LDR mudará a resistência quando a intensidade da luz que incide sobre ele mudar. Eles também são chamados de fotocélula. Ele oferece resistência máxima quando não há luz incidindo sobre ele e fornece resistência mínima quando exposto à luz intensa. É feito de material fotossensível como sulfeto de cádmio e pode ser conectado ao circuito. Pode ser usado como elemento sensor de luz.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_LDR.JPG)

**Diodos Emissores de Luz**

LEDs acendem quando estão polarizados diretamente. Eles são encapsulados em uma carcaça transparente e vêm em várias cores como vermelho, verde e azul. LEDs são feitos de arseneto fosfeto de gálio e, alterando-se as proporções de arsênio e fósforo, podem ser obtidas cores diferentes. LEDs monocromáticos têm dois terminais, Anodo (+ve) e Catodo (-ve). LEDs tricolores têm 4 terminais - um ânodo e 3 cátodos para cada cor. Os LEDs podem ser usados em painéis de exibição.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_RGB_LED_.JPG)

**Chave**

As chaves são usadas para fechar ou abrir o circuito. As chaves fornecidas com o Kit Básico têm dois tipos - chave tipo push button e chave deslizante.

- **Chave Push Button**

    O circuito ficará fechado enquanto você pressionar a chave push button.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Push_Button_Switch_.JPG)

- **Chave Deslizante**

    A chave deslizante é uma chave simples de duas posições. Ela pode ser usada para abrir ou fechar um circuito ao colocá-la na posição apropriada.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Slide_Switch_.JPG)

- **Chave de Inclinação**

    A chave de inclinação contém dois terminais que são conectados ao circuito, ela _fecha_o circuito quando é_inclinada horizontalmente_enquanto_abre_o circuito quando _inclinada verticalmente_.

**Capacitores**

Capacitores são usados para armazenar carga elétrica. Eles são classificados em dois tipos diferentes: Capacitor eletrolítico e Capacitor de disco cerâmico. Capacitores são expressos em microfarads (uF).

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Capacitor.JPG)

- **Conectando o Capacitor**

    Capacitores podem ser conectados em dois tipos de arranjo em um circuito, como mostrado abaixo.

- **Capacitores em Série**

    A capacitância equivalente total, quando dois ou mais capacitores são conectados em série entre si, é igual à soma dos recíprocos dos valores de capacitância individuais.

- **Capacitores em Paralelo**

    A capacitância equivalente total, quando dois ou mais capacitores estão conectados em paralelo, é igual à soma das capacitâncias individuais.

- **Capacitores Eletrolíticos**

    Capacitores eletrolíticos normalmente têm pequeno volume físico e grande valor de capacitância. Eles são classificados em capacitores eletrolíticos polarizados e não polarizados.
    Metais como alumínio, tântalo, vanádio e bismuto são usados para formar as folhas de ânodo e cátodo.

- **Capacitores de Disco Cerâmico**

    Os Capacitores Cerâmicos usam dielétrico cerâmico com finas películas metálicas como eletrodos ligados à cerâmica. No tipo disco, a prata do capacitor é fixada em ambos os lados da cerâmica para formar as placas condutoras. Os capacitores de disco são usados apenas para pequenos valores de capacitância.

**Buzzer**

Um buzzer é um dispositivo de sinalização sonora, que pode ser mecânico, eletromecânico ou piezoelétrico. Ele produz vários sinais sonoros com base na oscilação do material usado nele. Eles são comumente usados em alarmes e temporizadores.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Buzzer.png)

Conecte o pino longo à tensão positiva e o pino curto ao terra.

O buzzer pode ser conectado a saídas digitais e emitirá um tom quando a saída estiver em nível alto. Alternativamente, ele pode ser conectado a uma saída analógica de modulação por largura de pulso para gerar vários tons e efeitos.

**Diodo**

Um diodo é um material semicondutor que conduz corrente apenas em uma direção. Ele começa a conduzir somente depois que a tensão de alimentação é maior que o _potencial de barreira_. Age como uma chave fechada em condição de polarização direta e age como uma chave aberta quando está em polarização reversa. Os diodos são classificados com base no material semicondutor e podem ser usados para fabricar, tais como diodo de junção PN, diodo zener, diodo emissor de luz etc.

- **Polarização de um diodo**

    Aplicar tensão a um diodo é chamado de polarização de um diodo. O diodo fica **polarizado diretamente (forward biased)** quando uma **tensão positiva de alimentação** é aplicada entre os terminais e começa a conduzir acima de _0,7v para um diodo de silício_ e _0,3v para um diodo de germânio_. Quando uma **tensão negativa** é aplicada entre os terminais de um diodo, diz-se que ele está**_polarizado reversamente_**. O diodo é danificado quando a tensão de polarização reversa excede a tensão de ruptura_._

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Diode.JPG)

**Mini Servo**

Servos são motores DC com engrenagens e sistema de realimentação. Eles são usados no mecanismo de acionamento de robôs.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Mini_Servo_Photo.jpg)

## Lições

**1. Hello World! : O LED Piscando**

- **Hardware**
  - Conecte um LED ao pino digital 8 como mostrado abaixo. O resistor de 330 Ohms limita a corrente que flui para o LED.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_1LED_Blink.jpg)

- **Software**

  - Compile e envie o seguinte sketch:

```cpp
//Blink a LED connected to Digital Pin 8 via a 330 Ohm resitors.

void setup()   {
    pinMode(8, OUTPUT);       // Initialize Arduino Digital Pin 8 as output
}


void loop()
{
    digitalWrite(8, HIGH);   // Switch On LED
    delay(500);              // Wait for half a second
    digitalWrite(8, LOW);    // Switch Off LED
    delay(500);              // Wait for half a second
}
```

**2. Display de LED em Execução**

- **Hardware**

  - Conecte 3 LEDs aos pinos digitais 9, 10 e 11 através de um resistor de 330 Ohms cada.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_3LEDs_Display.jpg)

- **Software**

  - Compile e envie o seguinte sketch:

```cpp
//Running LED display: Three LEDs connected to Digital Pin 9, 10 and 11.

void setup()
{
    pinMode(9, OUTPUT);        // Initialize Arduino Digital Pins 9 as output
    pinMode(10, OUTPUT);       // Initialize Arduino Digital Pins 10 as output
    pinMode(11, OUTPUT);       // Initialize Arduino Digital Pins 11 as output
}


void loop()
{

    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, HIGH);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, LOW);
    digitalWrite(10, HIGH);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, HIGH);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second

}
```

**3. Fale com o Arduino : Conectando uma Chave Pushbutton**

- **Hardware**

  - Conecte um LED ao pino digital 8 como mostrado abaixo. O resistor de 330 Ohms limita a corrente que flui para o LED.

  - Conecte uma das chaves pushbutton ao pino digital 12 e a outra ao GND através de um resistor de 10K.

  - Conecte a outra extremidade do pushbutton a +5V.

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Pushbutton_LED.jpg)

- **Software**

- Compile e envie o seguinte sketch:

```cpp
//Pushbutton switch demo: LED is connected to digital pin 8 and Pushbutton is connected to digital pin 12.
//The LED glows when the button is pressed.

char inputButtonState;

void setup()
{
    pinMode(8, OUTPUT);        // Initialize Arduino Digital Pins 8 as output for connecting LED
    pinMode(12,INPUT);         // Initialize Arduino Digital Pins 12 as input for connecting Pushbutton
}


void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, HIGH);  //Switch on LED
    }
    else
    {
        digitalWrite(8, LOW);   //Switch off LED
    }

}
```

- O exemplo acima demonstra como enviar um sinal para o Arduino. Na verdade, você pode alcançar o mesmo objetivo sem o Arduino. Basta pressionar o botão para fechar o circuito, então vamos inverter os valores HIGH/LOW da seguinte forma:

```cpp
void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, LOW);  //Switch on LED
    }
    else
    {
        digitalWrite(8, HIGH);   //Switch off LED
    }
```

- O LED agora acende com o circuito aberto e apaga com o circuito fechado.

**4 Analógico: POT**

- **Hardware**

  - Conecte o ânodo do LED aos pinos **PWM** através de um resistor de 220 Ohms.

  - Conecte o cátodo do LED ao pino GND.

  - Monte o potenciômetro na protoboard.

  - Conecte o terminal direito do potenciômetro a +5v.

  - Conecte o terminal do meio do potenciômetro a qualquer um dos pinos de entrada analógica (0-5).

  - Conecte o terminal esquerdo do potenciômetro ao terminal de terra.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_potled1.jpg)

- **Software**

  - Conecte o ânodo do LED ao pino digital 5 (em vez de 5V).
  - Compile e envie o seguinte sketch:

```cpp
//Varying the brightness of the LED using a Pot
int value=0;
int mval;
void setup()
{
    pinMode(5, OUTPUT);
}
void loop()
{
    value=analogRead(A1); //read analog value from input A1
    // PWM output given to the LED
    mval = map(value, 0, 1023, 0, 100);
    analogWrite(5,mval);

}
```

**5. Arco-Íris na Mesa: LED Tricolor**

- **Hardware**

    O LED RGB fornecido com o kit básico é do tipo ânodo comum. O terminal mais longo é o ânodo. Os outros três terminais são cátodos para Vermelho, Verde e Azul respectivamente.

  - Conecte os cátodos do LED RGB aos pinos digitais 9, 10 e 11 através de um resistor de 330 Ohms cada.
  - Conecte o ânodo a +5v
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_RGB_LED_Display.jpg)

**Software**

- Compile e envie o seguinte sketch:

```cpp
void setup()  {

}

void loop()  {


    for(int b = 0 ; b <= 255; b=b+5)
    {
        for(int g = 0 ; g <= 255; g=g+5)
        {
            for(int r= 0 ; r <= 255; r=r+5)
            {
                analogWrite(9, b);
                analogWrite(10, g);
                analogWrite(11, r);
                delay(10);

            }
        }
    }

}
```

**6. Música**

- **Hardware**

  - Conecte o ânodo do buzzer ao pino digital 11.

  - Conecte o negativo do buzzer ao GND
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Music.jpg)

- **Software**

  - Compile e envie o seguinte sketch:

```cpp
#define NOTE_D0 98
#define NOTE_D1 294
#define NOTE_D2 330
#define NOTE_D3 350
#define NOTE_D4 393
#define NOTE_D5 441
#define NOTE_D6 495
#define NOTE_D7 556
#define NOTE_DL1 147
#define NOTE_DL2 165
#define NOTE_DL3 175
#define NOTE_DL4 196
#define NOTE_DL5 221
#define NOTE_DL6 248
#define NOTE_DL7 278
#define NOTE_DH1 589
#define NOTE_DH2 661
#define NOTE_DH3 700
#define NOTE_DH4 786
#define NOTE_DH5 882
#define NOTE_DH6 990
#define NOTE_DH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.125
#define SIXTEENTH 0.625

// notes in the melody:
int tune[] =
{
    NOTE_D0,NOTE_D1,NOTE_D2,NOTE_D3,NOTE_D4,NOTE_D5,NOTE_D6,NOTE_D7,
    NOTE_DL1,NOTE_DL2,NOTE_DL3,NOTE_DL4,NOTE_DL5,NOTE_DL6,NOTE_DL7,
    NOTE_DH1,NOTE_DH2,NOTE_DH3,NOTE_DH4,NOTE_DH5,NOTE_DH6,NOTE_DH7,
};
/* note durations: 1 = one note*/

float duration[]=
{1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,};
int length;
int tonePin=11;                // buzzer pin
void setup()
{ Serial.begin(9600);
    pinMode(tonePin,OUTPUT);   //  initialize the digital pin as an output
    length = sizeof(tune)/sizeof(tune[0]);
}
void loop()
{
    for(int x=1;x<length;x++)
    {tone(tonePin,tune[x]);
        delay(400*duration[(x%100)]);    // to distinguish the notes, set a minimum time between them.

        noTone(tonePin); // stop the tone playing:
    }
}
```

**7. Mini Servo**

- **Hardware**

  - Conecte o fio vermelho do servo motor à alimentação de +5v.
  - Conecte o fio preto do servo ao terra.

  - Conecte o fio amarelo do servo a qualquer um dos pinos PWM no Arduino.

  - Conecte o terminal direito do potenciômetro a +5v.

  - Conecte o terminal do meio do potenciômetro a qualquer um dos pinos de entrada analógica (0-5).

  - Conecte o terminal esquerdo do potenciômetro ao terminal de terra.
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Mini_Servo.jpg)

- **Software**

  - Compile e envie o seguinte sketch:

```
// Controlling a servo position using a potentiometer (variable resistor)
// by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 1;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup()
{
    myservo.attach(5);  // attaches the servo on pin 5 to the servo object
    Serial.begin(19200); // some servos doesn't work without Serial
}

void loop()
{
    val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 179);     // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val);                  // sets the servo position according to the scaled value
    delay(15);                           // waits for the servo to get there
}
```

## Funções

- Há uma protoboard sem solda, portanto, não há necessidade de comprar um ferro de solda ou aprender a soldar.

- Há muitos jumpers que são longos e flexíveis com pontas rígidas. Esses jumpers são muito melhores do que os jumpers de fio sólido de comprimento fixo do passado.

- Há muitos LEDs e resistores para o seu primeiro projeto, incluindo um LED RGB, que é um único encapsulamento de LED com três LEDs de cores primárias dentro. Ajustando a intensidade dos diferentes LEDs de cores primárias, as cores se misturam e produzem todas as cores do arco-íris.
- Há até um cartão educativo de instruções para ler os valores dos resistores.
- A chave de inclinação é um dispositivo muito simples com uma pequena esfera de metal dentro. Se o dispositivo for inclinado para um lado, a esfera de metal tocará os contatos elétricos. Este sensor é útil para uma variedade de projetos, como um alarme de ladrão DIY.
- O termistor é útil para projetos quando você quer detectar a temperatura.
- O fotoresistor pode detectar luz e funciona com lâmpadas e luz do sol. Fotoresistores são comumente usados para detectar quando está escuro e acender as luzes à noite.
- O buzzer do kit funciona especialmente bem para tocar o tema do Mario Brothers.
- Há um mini motor de servo. Você pode usá-lo para abrir e fechar um cadeado de segurança, interruptor de luz ou válvula. Você pode até usá-lo para fazer uma mini catapulta.
- O potenciômetro é um ótimo dispositivo de entrada. Você pode usá-lo para controlar o ângulo do braço do Servo ou a intensidade dos LEDs.

## Recursos

- [Série de tutoriais em vídeo de Arduino por Jeremy Blum](https://www.youtube.com/playlist?list=PLA567CE235D39FA84)

## Projetos

**Georgia Tech Primeiros Passos com TI LaunchPad Workshop 2015**: Experimente alguns circuitos básicos em protoboard com um microcontrolador TI

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/launchpad/gtech2015-aa131c/embed' width='350'></iframe>

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
