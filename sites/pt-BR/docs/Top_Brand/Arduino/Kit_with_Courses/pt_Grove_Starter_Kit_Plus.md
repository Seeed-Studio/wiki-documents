---
description: Grove - Starter Kit Plus
title: Grove - Starter Kit Plus
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Starter_Kit_Plus
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Starter_Kit_Plus/
---


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Starter_Kit_Plus.jpeg)

Bem-vindo ao mundo do Grove! Grove é uma coleção de vários sensores e atuadores modulares que ajudam você a mergulhar e aproveitar o mundo da eletrônica sem complicação. Antes de falarmos sobre esses módulos Grove um por um, você precisa se acomodar e finalizar alguns preparativos.

**1. O que é Arduino?**

Arduino é uma plataforma de desenvolvimento de código aberto flexível e fácil de aprender que goza de grande fama entre makers, geeks e artistas de arte interativa. Ela impulsionou a prosperidade do atual movimento maker. Incontáveis projetos criativos ganham vida em torno do Arduino e de sua comunidade colaborativa, incluindo o nosso sistema Grove. Para começar com Arduino, você precisa primeiro ter um. Arduino e seus clones estão disponíveis em inúmeros sites e até em lojas físicas. Uma pesquisa no Google é suficiente para você conseguir um.

**2. Instalação da IDE Arduino**

Arduino também é o nome de uma IDE de programação baseada em C/C++. Depois de obter o seu Arduino, você deve instalar a IDE. Dependendo da versão do sistema operacional, a instalação específica varia. Felizmente a equipe Arduino nos fornece um guia de instalação detalhado para a maioria dos sistemas operacionais:

[https://arduino.cc/en/Guide/HomePage](https://arduino.cc/en/Guide/HomePage)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Arduino_1.jpg)

**3. Referência da Linguagem**

Mas e se você não tiver ideia do que é a linguagem de programação? A equipe Arduino também fornece um site bom e abrangente para você aprender:

[https://arduino.cc/en/Reference/HomePage](https://arduino.cc/en/Reference/HomePage)

Agora você já está pronto para a exploração do Grove.

### 1. Introdução à Grove Base Shield

A Grove base shield é conectada a um Arduino e é a base do sistema Grove. Todas as portas de E/S do Arduino são expostas e adaptadas para 22 conectores Grove que incluem E/S digitais, E/S analógicas e portas especializadas (I2C, SPI, UART).

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-base_shield_v1.3.jpeg)

No centro, cercadas pelas linhas amarelas, há 13 portas de E/S digitais. Elas podem ser usadas para ler e controlar módulos Grove digitais, como o sensor de luz e LEDs. Algumas das portas de E/S digitais também podem ser usadas como saídas PWM (modulação por largura de pulso). Gerando ondas PWM, o Arduino pode controlar o movimento de um motor de passo ou variar gradualmente o brilho de um LED. Dentro das linhas verdes, no lado esquerdo, existem 5 portas de entrada analógica. Entradas analógicas são tipicamente usadas para ler sensores analógicos, como um potenciômetro ou um sensor de temperatura, mas essas portas também podem ser usadas como portas de E/S digitais. Por fim, as portas especializadas estão contornadas em vermelho: duas portas I2C, uma porta SPI e uma porta UART. Você usará essas portas especiais com módulos Grove mais sofisticados, como o acelerômetro de 3 eixos e o módulo Bluetooth serial.

Os sensores compatíveis com Grove contidos neste kit usarão uma das seguintes portas: uma porta digital, uma porta analógica ou uma porta I2C. Consulte as instruções de fiação e o código de exemplo abaixo para cada sensor Grove. Dez cabos Grove estão incluídos neste kit. Basta conectar os cabos Grove aos sensores e à base shield. Isso permite operações plug and play sem soldagem.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/GroveCable.jpg)

### 2. Grove – Button(P)**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgpushb1.jpg)

**Descrição**

Servindo como um botão onipresente, este é uma peça básica para mãos preguiçosas. Basta conectá-lo à base shield. Pronto, você tem um botão limpo e sem fios.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/ButtonPicture.jpg)

Este exemplo mostra como ligar ou desligar um LED por meio deste botão.

```
<pre>int button = 3;   //attach a button to digital pin 3
int LED = 7;      //attach an LED to digital pin 7

void setup()
{
    pinMode(button, INPUT);  //define button an INPUT device
    pinMode(LED, OUTPUT);    //define LED an OUTPUT device
}

void loop()
{
    int buttonState = digitalRead(button);  //read the status of the button
    if(buttonState == 1)
    digitalWrite(LED,1);
    else
    digitalWrite(LED,0);
}</pre>
```

**Dicas**

Este é um botão momentâneo. Isso significa que ele só gera nível ALTO enquanto é pressionado. Assim que solto, ele deixa de gerar nível ALTO e passa a gerar nível BAIXO. Este é um recurso favorito para projetos como codificadores Morse, mas se você prefere um botão estável, siga para o Grove – Switch(P) abaixo.

### 3. Grove – Switch(P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/SwitchP.jpg)

**Descrição**

Esta chave é um pequeno slide SPDT. Você pode alternar o sinal para BAIXO ou ALTO através dela. Diferente do Grove – Button(P) acima, esta gera estados estáveis.
**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Switch1.jpg)

Você pode substituir totalmente o Grove – Button(P) por esta chave sem ajustar uma linha sequer em seu exemplo.

**Dicas**

“P” significa “panel mount” (montagem em painel). Para módulos Grove que incluem um “P” em seu nome, o objetivo de design é um dispositivo de interface humana (HID) limpo e sem fios.

### 4. Grove – Touch Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TouchSensor.jpg)

**Descrição**

Este sensor de toque é outro substituto para um botão comum. Quando você toca a área circular nesta placa, ele gera nível ALTO. Melhor que o botão, o sensor de toque não tem problema de desgaste.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Touch1.jpg)

Você pode substituir totalmente o Grove – Button(P) por esta chave sem ajustar uma linha sequer em seu exemplo.

**Dicas**

Este sensor de toque mede a mudança de capacitância em sua área sensível para determinar sua saída. Portanto, quer você toque a placa pela frente ou por trás, o resultado continua o mesmo. Se você precisar de uma versão “P”, basta virá-la e pronto!

### 5. Grove – Magnetic Switch

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Magnetic_Switch.jpg)

**Descrição**

A chave magnética Grove detecta a presença de um ímã. Ela usa um CT10, uma chave de polo simples e arremate simples (SPST). Chaves magnéticas (também conhecidas como chaves Reed) são usadas em sensores de portas e janelas para sistemas de alarme contra intrusão, em laptops modernos para detectar quando a tampa está fechada e em sensores de velocidade em rodas de bicicleta. Quando o campo magnético ambiente atinge seu limiar, ela gera nível ALTO em seu pino de sinal.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/MagneticSwitch1.jpg)

Você pode substituir totalmente o Grove – Button(P) por esta chave sem ajustar uma linha sequer em seu exemplo.

**Dicas**

Em algumas aplicações, chaves magnéticas substituíram as chaves mecânicas tradicionais e têm menos desgaste.

### 6. Grove – Red LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-LED.jpg)

**Descrição**

LED é a peça mais familiar para iniciantes, sem “uma das”. Nós os usamos para indicar, para criar efeitos de luz e assim por diante. Este kit inclui LEDs de 3 cores para atender às suas necessidades básicas de exibição e demonstração.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/LEDKit.jpg)

Já usamos um LED como indicador nos exemplos acima. E aqui vamos fazer alguns efeitos de luz além da simples operação ligar/desligar, fazendo o LED variar gradualmente de brilho.

```
<pre>/* This is an example code from Arduino, you can open it via this path in Arduino IDE: File --> Example --> 1.Basic --> Fade */

int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void setup()
{
    // declare pin 9 to be an output:
    pinMode(9, OUTPUT);
}

void loop()
{
    // set the brightness of pin 9:
    analogWrite(9, brightness);
    // change the brightness for next time through the loop:
    brightness = brightness + fadeAmount;
    // reverse the direction of the fading at the ends of the fade:
    if (brightness == 0 || brightness == 255)
    {
        fadeAmount = -fadeAmount ;
    }
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
}</pre>
```

**Dicas**

Esta série de LEDs tem 6 cores para atender a diferentes preferências. Todos são capazes de “Panel Mount” e os outros LEDs não incluídos neste kit são:

1. Grove – Purple LED(3mm);
2. Grove – White LED(5mm);
3. Grove – Multi Color Flash LED(5mm).

### 7. Grove – Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grovebuzzer.jpg)

**Descrição**

O buzzer, ou alto-falante piezoelétrico, é provavelmente o primeiro componente eletrônico que emite som. Além de ser usado como alarme ou indicador, o buzzer é totalmente capaz de tocar uma música. Experimente e divirta-se!

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/BuzzerKit1.jpg)

Este é um breve exemplo do Oomlout.com, tocando para você uma cantiga infantil bem conhecida – “Twinkle Twinkle Little Star”.

```
<pre>/* Melody
 * (cleft) 2005 D. Cuartielles for K3
 *
 * This example uses a piezo speaker to play melodies.  It sends
 * a square wave of the appropriate frequency to the piezo, generating
 * the corresponding tone.
 *
 * The calculation of the tones is made following the mathematical
 * operation:
 *
 *       timeHigh = period / 2 = 1 / (2 * toneFrequency)
 *
 * where the different tones are described as in the table:
 *
 * note  frequency  period  timeHigh
 * c          261 Hz          3830  1915
 * d          294 Hz          3400  1700
 * e          329 Hz          3038  1519
 * f          349 Hz          2864  1432
 * g          392 Hz          2550  1275
 * a          440 Hz          2272  1136
 * b          493 Hz          2028 1014
 * C         523 Hz         1912  956
 *
 * https://arduino.cc/en/Tutorial/Melody
 */

int speakerPin = 9;

int length = 15; // the number of notes
char notes[] = "ccggaagffeeddc "; // a space represents a rest
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(speakerPin, HIGH);
        delayMicroseconds(tone);
        digitalWrite(speakerPin, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}

void setup()
{
    pinMode(speakerPin, OUTPUT);
}

void loop() {
    for (int i = 0; i < length; i++) {
        if (notes[i] == ' ')
        {
            delay(beats[i] * tempo); // rest
        }
        else
        {
            playNote(notes[i], beats[i] * tempo);
        }

        // pause between notes
        delay(tempo / 2);
    }
}</pre>
```

**Dicas**

Como o buzzer piezo funciona? Normalmente há dois discos cerâmicos em cada buzzer piezo. Quando tensões são aplicadas a eles, eles se atraem ou se repelem. A vibração do ar causada pelo movimento desses discos emite som. Quando a frequência da vibração muda, a frequência do som mudará junto.

### 8. Grove – Vibrator

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Gvib.jpg)

**Descrição**

Este é um micro motor de vibração adequado para indicadores não audíveis. Quando definido como High, este motor pode criar o efeito de vibração, assim como o modo de vibração do seu telefone.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Vibrator1.jpg)

Você pode usá-lo totalmente como um LED, mas também pode criar alguns ritmos com ele. Envie o exemplo do buzzer para este vibrador e confira a versão vibratória de “Twinkle Twinkle Little Star”.

**Dicas**

A potência de uma unidade é bastante limitada. Quer algo maior? Uma matriz de vibradores vale a pena tentar.

### 9. Grove – Rotary Angle Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Rotary_Angle_Sensor.jpg)

**Descrição**

Este é um potenciômetro rotativo linear de 10Kohm. Ele tem uma faixa ativa de 300 graus. Também projetado como um dispositivo HID, o recurso de “montagem em painel” foi adicionado. Mas antes de se tornar um HID adorável e amigável, faça você mesmo um botão giratório para ele!

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Rotaty1.jpg)

Este exemplo mostra como ler o sensor de ângulo rotativo.

```
<pre>int potentiometer = 0;

void setup()
{
    Serial.begin(9600); //set the serial communication frequency at 9600 bits per sec
    pinMode(potentiometer, INPUT);
}

void loop()
{
    int value = analogRead(potentiometer);
    Serial.println(value); //print the value on the serial monitor screen
    delay(1000); //wait 1000ms before printing next value
}</pre>
```

**Dicas**

O potenciômetro rotativo parece bastante semelhante ao encoder rotativo. Mas na verdade eles não são nada iguais.
Funcionalmente, o potenciômetro rotativo é essencialmente um potenciômetro deslizante, apenas em formato circular. Ele reflete a posição de forma analógica como um potenciômetro deslizante faz. Mas o encoder rotativo conta o ângulo que ele girou anotando, digamos, um clique, e então fornece os dados processados pelo chip na placa de forma analógica ou digital.

Você também pode notar a diferença em seus exteriores. O potenciômetro rotativo tem uma faixa ativa, digamos 300 graus. Mas o encoder rotativo pode simplesmente girar e girar em uma direção.

### 10. Grove - Sound Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound_Sensor.jpg)

**Descrição**

O sensor de som Grove é um microfone elétrico que permite que seu projeto responda aos sons ambientais. A placa contém um potenciômetro para controlar o nível de entrada de som.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound1.jpg)

Este exemplo define um limite para um LED. Quando a intensidade do som ambiente atinge o limite pré-ajustado, o LED acende.

```
<pre>int ledPin = 9;                       //attach a LED to Digital 12
int thresholdValue = 0;                 // the threshold to turn on or off the LED

void setup()
{
    pinMode(ledPin, OUTPUT);          //set the LED on Digital 12 as an OUTPUT
}

void loop()
{
    int sensorValue = analogRead(A0); //read the sensorValue on Analog 0
    if(sensorValue>thresholdValue)
    digitalWrite(ledPin,HIGH);
    delay(200);
    digitalWrite(ledPin,LOW);
}</pre>
```

**Dicas**

O microfone elétrico coleta a intensidade do som para todas as frequências. E o potenciômetro atua como o porteiro. Quando você o gira completamente no sentido horário, ele deixa tudo passar, e quando você o gira completamente no sentido anti-horário, nada consegue passar.

### 11. Grove – Light Sensor (P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Light_SensorP1.jpg)

**Descrição**

O sensor de luz, também conhecido como resistor dependente de luz (LDR), é um sensor comumente usado em uma grande variedade de aplicações, desde projetos DIY até automação industrial. Normalmente a resistência do sensor de luz diminui quando a intensidade da luz ambiente aumenta.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Light1.jpg)

Este exemplo ligará um LED quando a intensidade da luz cair abaixo do limite pré-ajustado. O sensor de luz é conectado ao pino analógico 0 do Arduino (o conector Grove analógico inferior esquerdo) e o LED é conectado ao conector Grove digital 12 no base shield.

```
<pre>int ledPin=12;                  //attach a LED to Digital 12
int thresholdvalue=400;       //the threshold to turn on or off the LED

void setup()
{
    pinMode(ledPin,OUTPUT);           //set the LED on Digital 12 as an OUTPUT
}

void loop()
{
    int sensorValue = analogRead(0); //the light sensor is attached to analog 0
    if(sensorValue<thresholdvalue)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}</pre>
```

**Dicas**

A saída do sensor de luz analógico varia de 0 a 1023, mas a saída não é linear com a intensidade da luz ambiente. Abaixo está uma tabela para ajudá-lo a entender o que a saída realmente significa.

<table cellspacing="0" width="80%">
  <tbody>
    <tr>
      <th scope="col">Sensor Value</th>
      <th scope="col">Illuminance (LUX)</th>
      <th scope="col">Description (adapted from Wikipedia)</th>
    </tr>
    <tr>
      <td>100</td>
      <td>&lt;1</td>
      <td></td>
    </tr>
    <tr>
      <td>200</td>
      <td>~1</td>
      <td>Lua cheia acima da cabeça em latitudes tropicais</td>
    </tr>
    <tr>
      <td>300</td>
      <td>~3</td>
      <td>Crepúsculo na cidade</td>
    </tr>
    <tr>
      <td>400</td>
      <td>~6</td>
      <td></td>
    </tr>
    <tr>
      <td>500</td>
      <td>~10</td>
      <td></td>
    </tr>
    <tr>
      <td>600</td>
      <td>~15</td>
      <td></td>
    </tr>
    <tr>
      <td>700</td>
      <td>~35</td>
      <td>Sala de estar da família</td>
    </tr>
    <tr>
      <td>800</td>
      <td>~80</td>
      <td>Luz de prédio de escritórios no corredor</td>
    </tr>
    <tr>
      <td>900</td>
      <td>&gt;100</td>
      <td>Dia muito escuro e nublado</td>
    </tr>
  </tbody>
</table>

### 12. Grove – Temperature Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgtemp1.jpg)

**Descrição**

O sensor de temperatura Grove usa um termistor para determinar a temperatura ambiente. A faixa de detecção deste sensor é entre -40 e 125 graus Celsius com uma precisão de ±1,5℃. No entanto, ele não fornece diretamente o valor da temperatura. Para obter o valor específico de temperatura, usaremos a fórmula no código abaixo.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TemperatureKit1.jpg)

Este exemplo mostra como converter a saída bruta do sensor em um valor específico de temperatura. Você pode ver os dados de saída em Celsius no monitor serial.

```
<pre>int a;
int del=1000;                // duration between temperature readings
float temperature;
int B=3975;                  //B value of the thermistor
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a;
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
    delay(del);
    Serial.println(temperature);
}</pre>
```

**Dicas**

De onde vem a função intrínseca para encontrar a temperatura? É uma variação da equação de Steinhart-Hart, uma aproximação amplamente usada que fornece T (temperatura) como função de R (resistência do termistor). A equação original é:

Todos os três parâmetros na equação acima podem ser descritos por um parâmetro: B. Na indústria as pessoas caracterizam termistores pelo valor B, como definido em nosso exemplo. Portanto, a função embutida é na verdade uma variação baseada na equação do parâmetro B.

### 13. Grove – Relay

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Twig-Relay1.jpg)

**Descrição**

Relay é uma ferramenta útil para ampliar a capacidade de controle do seu Arduino! Envie o sinal de controle através da interface Grove, e o relay controlará o abrir/fechar do circuito externo conectado aos terminais de parafuso. A tensão do circuito externo pode chegar até 220V! Então pegue este relay e comece alguns projetos realmente pesados!

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/RelayKit1.jpg)

A seguir está um exemplo de uso de um botão para controlar o relay.

```
<pre>const int buttonPin = 3;     // the button is attached to digital pin 3
const int relayPin =  9;     // the relay is attached to digital pin 9
int buttonState = 0;

void setup()
{
    pinMode(relayPin, OUTPUT);
    pinMode(tiltPin, INPUT);
}

void loop()
{
    // read the state of the button:
    buttonState = digitalRead(buttonPin);
    if (buttonState == 1)   digitalWrite(relayPin, HIGH);
    else   digitalWrite(relayPin, LOW);
    delay(10);
}</pre>
```

**Dicas**

Relay é uma chave mecânica controlada eletronicamente. O tamanho de um varia de acordo com sua capacidade de conduzir corrente. Quanto maior o relay (basicamente apenas a parte da caixa plástica), maior a corrente que ele pode conduzir.

### 14. Grove – Screw Terminal

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-screw_terminal.jpg)

**Descrição**

Esta é uma pequena ferramenta para o caso de você precisar unir o sistema Grove de prototipagem rápida com outros circuitos de prototipagem. Aperte os fios de sinal de que você precisa nos terminais de parafuso. Então você pode usar o circuito externo como um módulo Grove comum.

### 15. Grove – Servo

[[![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo.jpg)

**Descrição**

Servo é definitivamente um dispositivo de controle de movimento divertido para se brincar! Através de uma biblioteca de servo incorporada na Arduino IDE, você pode posicioná-lo em qualquer ponto entre 0 e 180 graus. Com 4 eixos em formatos diferentes inclusos, este servo está pronto para movimentar um pequeno ventilador, levantar um objeto ou imitar o ponteiro de um relógio.

**Exemplo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo1.jpg)

Servo é um tipo de atuador analógico. Porém, o Arduino não pode gerar sinal analógico. Para aproximar o sinal analógico exigido pelo atuador analógico, o Arduino adota PWM (Pulse Width Modulization) para lidar com isso. Nem todas as portas Grove podem ser usadas como saídas analógicas. As portas disponíveis são D3, D5, D6, D9, D10 e D11. Aqui está um exemplo de como usamos um potenciômetro para controlar a posição do servo.

```
<pre>#include <Servo.h>
Servo groveServo; //create a object

int potentiometer = 0;
int shaft;

void setup()
{
    groveServo.attach(3); //the servo is attached to D3
    pinMode(potentiometer, INPUT);
}

void loop()
{
    shaft = analogRead(potentiometer);
    shaft = map(shaft, 0, 1023, 0, 179);
    //analog input data range from 1~1023, but servo
    groveServo.write(shaft);             //only reflects to data ranging from 1~179.
    delay(15);
}</pre>
```

**Dicas**

Dentro da caixa de engrenagens há um conjunto de engrenagens. Quando o servo estiver funcionando, não tente inverter sua direção bruscamente com a mão, pois isso pode causar danos permanentes às engrenagens.

## Projetos de Demonstração

---

### 1. Uma Xícara de Flores

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/A_Cup_of_Flower.jpg)

**Descrição**

Você gostaria de uma xícara de flores para aliviar seu coração exausto? Este projeto é composto por Grove – LED e um Grove – Touch Sensor. Quando o sensor é tocado, esses adoráveis LEDs vão brilhar com um efeito de luz quente e confortável.

**Lista de Materiais**

<dl>
  <dd>1. Arduino x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – LED x 6;</dd>
  <dd>4. Grove – Touch Sensor x 1;</dd>
  <dd>5. Papel colorido 6 x 6cm x 6;</dd>
  <dd>6. Bateria de 9V &amp; clipe para bateria de 9V x 1.</dd>
</dl>

!!!Note
     O número de LEDs é arbitrário. Há três deles contidos no kit básico. Mas você pode aumentar ou diminuir dependendo do volume da sua xícara. Eu tenho uma xícara grande aqui, então adicionei mais três do nosso site.

**Passos**

**1. Dobre Os Botões de Flor**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Fold_the_buds.jpg)

Escolha um padrão de flor de que você goste e siga os passos para criar alguns deles. Uma pesquisa no Google pode ajudar bastante a encontrar um. Há muitos entusiastas e artistas de origami na Internet que gostam de compartilhar seus artesanatos.

Eu escolhi tulipa aqui, mas girassol, rosa e lírio também parecem ótimos!

Ao dobrar o botão de flor, você precisa deixar um pequeno furo em sua base para o cabo Grove passar.

**2. Montagem**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Set_up.jpg)

Conecte os botões de flor e o sensor de toque ao Grove – Base Shield com o cabo Grove de 10cm. Em seguida, faça o upload do código para o seu controlador.

```
<pre>void setup()
{
    pinMode(2, OUTPUT);
    pinMode(4, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(13, OUTPUT);
    pinMode(9, INPUT); //pin of touch sensor
}

void loop()
{
    int switchState = digitalRead(9);
    if(switchState == HIGH)
    {
        digitalWrite(2, HIGH);
        digitalWrite(4, HIGH);
        digitalWrite(6, HIGH);
        digitalWrite(7, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(13, HIGH);
    }
    else
    {
        digitalWrite(2, LOW);
        digitalWrite(4, LOW);
        digitalWrite(6, LOW);
        digitalWrite(7, LOW);
        digitalWrite(11, LOW);
        digitalWrite(13, LOW);
    }
    delay(100);
}</pre>
```

**3. Ligue &amp; Arrume Tudo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Battery.jpg)

Use uma bateria portátil de 9V para fornecer energia às flores e acomode-a na xícara. Pronto! Aproveite sua xícara de flores!

### 2. How You Doing

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/How_you_doing.jpg)

(baixado de think.bigchief.it)

**Descrição**

Como você cumprimenta um amigo? Big Chief diria “o que é melhor do que um aperto de mão?”. Quando um desses brinquedos de papel Big Chief encostar as costas nos outros, eles vão chacoalhar para dizer oi!

**Lista de Materiais**

<dl>
  <dd>1. Arduini x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – Magnetic Switch x 1;</dd>
  <dd>4. Grove – Vibrator x 1;</dd>
  <dd>5. Brinquedos de papel x 2;</dd>
  <dd>6. Ímã x 1;</dd>
  <dd>7. Bateria de 9V &amp; clipe para bateria de 9V x 1.</dd>
</dl>

:::note
    O número de LEDs é arbitrário. Há três deles contidos no kit básico. Mas você pode aumentar ou diminuir dependendo do volume da sua xícara. Eu tenho uma xícara grande aqui, então adicionei mais três do nosso site.
:::
**Passos**

**1. Imprima!**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Print_it_out.jpg)

Escolha um padrão de que você goste na Internet. Certifique-se de que haja espaço suficiente para um ímã ou um interruptor magnético mais um vibrador. Assim como a flor de origami acima, você pode encontrar toneladas deles na Internet.

**2. Coloque Os Órgãos Dentro**

Concentre-se ao cortar os brinquedos de papel. Só assim você poderá obter um bem acabado. Depois disso, é hora de colocar alguns órgãos neles.
Eu colei um ímã nas costas do Big Chief A (vamos chamá-lo assim!). Eu o prendi lá com fita adesiva dupla face.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck1.jpg)

E para o Big Chief B, eu colei um interruptor magnético nas costas dele, na mesma posição que o A, e um vibrador em seus pés.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck2.jpg)

**3. Cole Tudo**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck3.jpg)

Siga cuidadosamente as instruções na folha impressa. Conecte os cabos Grove aos dois módulos Grove que usamos no Big Chief B. Então você terá dois brinquedos de papel fofos como acima.

**4. Envie o Programa**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck4.jpg)

Envie o código abaixo para o seu Arduino. Ao fazer isso, você lhes dá vida.

```
<pre>void setup()
{
    pinMode(11, INPUT);
    pinMode(9, OUTPUT);
}

void loop()
{
    int sensorState = digitalRead(11);
    if (sensorState == 1) digitalWrite(9, HIGH);
    else digitalWrite(9, LOW);
    delay(100);
}</pre>
```

## Projetos Relacionados

Se você quiser fazer alguns projetos incríveis com o Grove - Starter Kit Plus, aqui estão alguns projetos para referência.

Temos esta peça disponível no [geppetto](https://geppetto.seeedstudio.com/), design eletrônico modular fácil com Seeed e Geppeto. Construa agora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

### Intel Edison Live Temperature Display

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Intel_Edison_Live_Temperature_Display.jpg)

Este é um demo de IoT feito com Intel Edison e Grove - Starter Kit Plus.
A Intel lançou um Intel IoT Developer Kit que você pode adquirir para ajudar desenvolvedores e entusiastas a colocarem as mãos em um kit simples e começarem a desenvolver aplicações para uso no mundo cotidiano.

[<font color="#FF0000">**Eu quero fazer isso.**</font>](https://www.seeedstudio.com/recipe/94-intel-edison-live-temperature-display.html)

### Compartilhe Seus Projetos Incríveis Conosco

Nascido com o espírito de fazer e compartilhar, isso é o que acreditamos que torna alguém um maker.

E é apenas por causa disso que a comunidade de código aberto pode ser tão próspera como é hoje.

Não importa quem você é e o que você fez, hacker, maker, artista ou engenheiro,

desde que você comece a compartilhar seus trabalhos com os outros,

você está fazendo parte da comunidade de código aberto e está dando a sua contribuição.

Agora compartilhe seus projetos incríveis conosco no [Recipe](https://www.seeedstudio.com/recipe/), e ganhe a chance de se tornar um Usuário Core da Seeed.

- Usuários Core são aqueles que demonstram grande interesse e contribuições significativas nos produtos Seeed.
- Cooperamos com nossos Usuários Core no desenvolvimento de nossos novos produtos, ou seja, em outras palavras, os Usuários Core terão a chance de experimentar quaisquer novos produtos da Seeed antes de seu lançamento oficial e, em troca, esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E, na maioria dos casos, se nossos Usuários Core tiverem boas ideias para fazer coisas, ofereceremos peças de hardware, serviços de PCBA, bem como suporte técnico. Além disso, uma cooperação comercial futura com os Usuários Core é altamente possível.

<font color="#FF0000">Para obter mais informações sobre Usuário Core, envie um e-mail para: recipe@seeed.cc</font>

## Suporte Técnico &amp; Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
