---
description: Grove - Mixer Pack V2
title: Grove - Mixer Pack V2
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mixer_Pack_V2
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mixer_Pack_V2/
---
![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/U8GUZNb9TVZ14lLRW6ialXEV.jpg)

<!-- The [Grove - Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) is a stand-alone, Lego-like electronics kit that consists of 13 select Grove modules from the [ Grove System](/pt-br/Grove_System "GROVE System") developed by [Seeed Studio](https://www.seeedstudio.com/depot/). These mini-modules can be used as building blocks to create electronic circuits and prototypes quite rapidly without necessarily using a Microcontroller board such as a [Seeeduino](/pt-br/Seeeduino "Seeeduino") or an [ Arduino](/pt-br/Arduino "Main Page"). -->

Os 13 módulos Grove incluídos são uma combinação de módulos sensores, atuadores, módulos lógicos e de alimentação que são extremamente fáceis de usar e divertidos de trabalhar. Em poucos minutos, você pode projetar novos circuitos e montar protótipos funcionais.

Conectando diferentes módulos de entrada e saída, é possível criar uma variedade de projetos. Por exemplo, um sensor de som ou de luz pode ser usado como entrada para acionar uma saída, como acender um LED ou ativar um pequeno circuito de motor DC. Módulos de portas lógicas podem adicionar mais flexibilidade à lógica por meio da qual as entradas irão acionar as saídas.

Esses módulos são pequenos e coloridos pedaços de eletrônica, e é muito divertido brincar com eles, tanto para crianças quanto para adultos.

Com o [Grove - Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14), você pode aprender facilmente os conceitos básicos de eletrônica e também melhorar sua capacidade prática de aplicar esses conceitos. Esta é a maneira perfeita de se inserir no maravilhoso mundo da eletrônica, trabalhando em seus próprios projetos interativos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mixer-Pack-V2-(Electronic-blocks%2Cwithout-Arduino%2Cplug-and-play-system)-p-1867.html)

## Desembalando

**Você encontrará o seguinte ao abrir este Grove mixer pack:**

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2_photo-2-.jpg)

- **[Um Manual do Mixer](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Handbook.pdf)** que o ajudará a começar rapidamente seus projetos. Ele inclui informações básicas sobre todos os módulos Grove incluídos no kit e também mostra como montar alguns projetos de exemplo.

- **13 Módulos Grove:**

<!-- 1.  1x [Grove - DC Jack Power](/pt-br/Grove-DC_Jack_Power "Grove - DC Jack Power")

2.  1x [Grove - Recorder](/pt-br/Grove_Recorder "Grove - Recorder")

3.  1x [Grove - LED String Light](/pt-br/Grove-LED_String_Light "Grove - LED String Light")

4.  1x [Grove - Mini Fan](/pt-br/Grove-Mini_Fan "Grove - Mini Fan")

5.  1x [Grove - NOT](/pt-br/Grove-NOT "Grove - NOT")

6.  1x [Grove - OR](/pt-br/Grove-OR "Grove - OR")

7.  1x [Grove - AND](/pt-br/Grove-AND "Grove - AND")

8.  1x [Grove - Buzzer](/pt-br/Grove-Buzzer "Grove - Buzzer")

9.  1x [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor")

10.  1x [Grove - Red LED](/pt-br/Grove-Red_LED "Grove - Red LED")

11.  1x [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor")

12.  1x [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")

13.  1x [Grove - Button](/pt-br/Grove-Button "Grove - Button") -->

- **Acessórios de módulos Grove:**

<!-- 1.  1x DC Motor to work with the [Grove - Mini Fan](/pt-br/Grove-Mini_Fan "Grove - Mini Fan") module

2.  1x Colorful Fan that fits onto the DC Motor

3.  1x Small Audio Speaker to work with the [Grove - Recorder](/pt-br/Grove_Recorder "Grove - Recorder") module

4.  1x LED String Light to work with the [Grove - LED String Light](/pt-br/Grove-LED_String_Light "Grove - LED String Light") module

5.  7x [Grove Cables](/pt-br/Grove_System/#grove-cables-"GROVE-System") (3x 200mm, 3x 50mm, 1x Branch Cable) -->

## Uso

É bem fácil montar circuitos Grove usando os módulos Grove do seu Mixer Pack.

Todos os circuitos são montados combinando os seguintes quatro tipos de módulos:

1. Módulos de Alimentação
 Estes fornecem energia ao circuito. O [Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) inclui 1 módulo de alimentação - o Grove - DC Jack Power. Não importa o que você esteja montando, você sempre precisará usar este módulo.

2. Módulos de Entrada
 Estes são normalmente usados para enviar entradas sensoriais ao circuito. O [Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) possui 4 módulos de entrada: um sensor de luz, um sensor de som, um potenciômetro deslizante e uma chave momentânea. Com base nas entradas recebidas desses módulos, você pode escolher acionar uma ação usando um módulo de saída.

3. Módulos de Saída
 Disparos vindos dos módulos de entrada podem ser convertidos em ações usando módulos de saída. O [Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) possui 5 módulos de saída - uma luz de LED, uma luz de cordão de LED, um gravador de som, um motor de ventilador e um buzzer.

4. Módulos de Portas Lógicas
 Esses são usados em conjunto com módulos de entrada e podem ser usados para aprimorar a lógica para acionar uma saída específica. O [Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) possui 3 módulos de portas lógicas - um para cada função de porta AND, OR e NOT.

### Montando o seu primeiro circuito

Você pode montar um circuito Grove usando os módulos Grove em 3 passos simples:

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-concept-3.jpg)

**Siga estes passos para montar um circuito Grove usando os módulos Grove:**

PASSO 1 - Conecte o módulo de alimentação a uma fonte de energia
 Antes de tudo, conecte uma fonte de energia confiável ao módulo de alimentação. Você pode usar uma bateria de 9 V que se conecta ao módulo Grove - DC Jack Power usando o cabo conector de bateria de 9 V que vem com o kit. Alternativamente, você pode usar um adaptador de tomada comum, como um adaptador de 5V/1A usado para carregar celulares. Depois de conectar o módulo de alimentação Grove a uma fonte de energia, coloque a chave ON/OFF do módulo na posição ON. Um LED verde na placa do módulo de alimentação deve acender. Se isso não acontecer, verifique novamente suas conexões e a fonte de energia. Se o LED verde acender, isso significa que você tem uma fonte de alimentação confiável funcionando. Coloque a chave novamente na posição OFF agora e prossiga para o próximo passo.

PASSO 2 - Conecte o módulo de entrada ao módulo de alimentação
 Usando um cabo Grove de 4 pinos, conecte o módulo de entrada que você deseja usar em seu circuito ao módulo de alimentação. Coloque o módulo de alimentação à sua frente e coloque o módulo de entrada à esquerda do módulo de alimentação. Em seguida, usando um cabo Grove de 4 pinos, conecte uma das pontas ao módulo de entrada e a outra ponta ao conector Grove do lado esquerdo do módulo de alimentação. Por exemplo, para usar uma chave momentânea para ligar e desligar um LED, conecte o módulo Grove - Button ao lado esquerdo do módulo de alimentação usando um cabo Grove de 4 pinos.
O módulo de entrada pode ser conectado diretamente ao módulo de alimentação ou por meio de um módulo de porta lógica.

PASSO 3 - Conecte o módulo de saída ao módulo de alimentação
Usando um cabo Grove de 4 pinos, conecte o módulo de saída que você deseja usar em seu circuito ao módulo de alimentação. Coloque o módulo de alimentação à sua frente com o módulo de entrada já conectado ao lado esquerdo do módulo de alimentação. Em seguida, usando um cabo Grove de 4 pinos, conecte uma das pontas ao módulo de saída e a outra ponta ao conector Grove do lado direito do módulo de alimentação. Por exemplo, para montar um circuito que acenda um LED, conecte o módulo Grove - Red LED ao lado direito do módulo de alimentação usando um cabo Grove.
O módulo de saída sempre se conecta diretamente ao módulo de alimentação desta maneira.

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step1.jpg)

- PASSO 1

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step2.jpg)

- PASSO 2

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step3.jpg)

- PASSO 3

<!-- You now have completed building your Grove circuit. Turn back ON the ON/OFF switch on the [Grove - DC Jack Power](/pt-br/Grove-DC_Jack_Power "Grove - DC Jack Power") module now and watch your circuit come alive! -->

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-momentarySwitch-RedLED.jpg)

Pressione a chave momentânea para acender o LED

### Usando módulos de portas lógicas

Os módulos de portas lógicas podem ser usados para aprimorar a lógica com base na qual um módulo de entrada ou um conjunto de módulos de entrada pode ser usado para acionar uma saída desejada. Eles são normalmente colocados entre o módulo de entrada e o módulo de alimentação em um circuito Grove.

Existem três tipos de módulos de portas lógicas:

#### Módulo Grove - NOT

Este é o mais simples de todos os módulos de portas lógicas e se conecta a um módulo de entrada. Ele simplesmente recebe o sinal gerado por um módulo de entrada e o inverte. Um sinal ALTO de um módulo de entrada é convertido em um sinal BAIXO. Um sinal BAIXO do módulo de entrada é convertido em um sinal ALTO indo em direção ao módulo de saída.

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-LightSensorNOT-RedLED-ON.jpg)

<!-- Using [Grove - NOT](/pt-br/Grove-NOT "Grove - NOT") logic gate -->

Uso típico:_ Um sensor de luz baseado em [LDR](https://en.wikipedia.org/wiki/Photoresistor), como o módulo Grove - Light Sensor, gera um sinal ALTO em luz intensa e um sinal BAIXO no escuro. Portanto, ele pode ser usado para ligar um LED em luz intensa e desligá-lo no escuro. Porém, você pode querer um circuito em que as luzes de LED acendam no escuro e permaneçam apagadas em luz intensa. Isso pode ser feito adicionando um módulo Grove - NOT entre o módulo de entrada Grove - Light Sensor e o módulo Grove - DC Jack Power. Com a porta NOT em uso, você observará que, em luz intensa, quando o LDR apresenta baixa resistência e o sinal gerado pelo módulo sensor de luz é ALTO, a porta NOT o inverte para um sinal BAIXO e as luzes de LED **não** acendem mais em luz intensa. Alternativamente, quando está escuro e o LDR apresenta alta resistência e o sinal gerado pelo módulo sensor de luz é BAIXO, a porta NOT converte o sinal BAIXO em um sinal ALTO, fazendo com que as luzes de LED acendam no escuro.

#### Módulo Grove - OR

Este módulo pode ser conectado a dois módulos de entrada. Sua finalidade é gerar um sinal HIGH quando pelo menos um dos dois módulos de entrada conectados a ele fornecer um sinal HIGH. Se o sinal recebido de ambos os módulos de entrada for LOW, a porta OR fornece um sinal LOW para o módulo de saída.

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-or-usage.jpg)

<!-- Using [Grove - OR](/pt-br/Grove-OR "Grove - OR") logic gate -->

<!-- Typical Usage:_ Use this when you need one of two sensory inputs to trigger an output. For example, lets say you want to build a circuit that lights up some LED lights either on music OR when you manually switch them on. To build such a circuit, you will need two input modules - the [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor") and the [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"). These two input modules can then be connected to the left-side of the [Grove - OR](/pt-br/Grove-OR "Grove - OR") gate module. The output from this logic gate module will connect to the left-side of the power module, while the right-side will be connected to the LED lights module ([Grove - Red LED](/pt-br/Grove-Red_LED "Grove - Red LED") or [Grove - LED String Light](/pt-br/Grove-LED_String_Light "Grove - LED String Light")). Now, when you switch ON the circuit, observe what happens. You will see that the LED lights turn ON either when there is some sound or music that is detected by the sound sensor OR when you manually move the slider on the [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") from minimum voltage (GND) to maximum (VCC). This also implies that if the [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") is supplying a HIGH signal to the LED lights, then no matter what the input from the sound sensor is, the LED lights will always stay ON. Alternatively, if the [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") is supplying a LOW signal to the LED lights, then the LED lights will flash based on whether the output from the sound sensor is HIGH or LOW. -->

#### Módulo Grove - AND

Este módulo pode ser conectado a dois módulos de entrada. Sua finalidade é gerar um sinal HIGH somente quando ambos os dois módulos de entrada conectados a ele fornecerem um sinal HIGH. Se o sinal recebido de qualquer um dos dois módulos de entrada for LOW, a porta AND fornece um sinal LOW para o módulo de saída.

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-and-usage.jpg)

<!-- Using [Grove - AND](/pt-br/Grove-AND "Grove - AND") logic gate

Typical Usage:_ Use this when you need two sensory inputs to trigger an output. For example, lets say you want to build a circuit that lights up some LED lights either on music but only in the dark. To build such a circuit, you will need two input modules - the [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor") and the [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor") (The [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor") module will be used in conjunction with the [Grove - NOT](/pt-br/Grove-NOT "Grove - NOT") logic gate so that lights switch ON only in the dark). These input side modules can then be connected to the left-side of the [Grove - AND](/pt-br/Grove-AND "Grove - AND") gate module. The output from this logic gate module will connect to the left-side of the power module, while the right-side will be connected to the LED lights module ([Grove - Red LED](/pt-br/Grove-Red_LED "Grove - Red LED") or [Grove - LED String Light](/pt-br/Grove-LED_String_Light "Grove - LED String Light")). Now, when you switch ON the circuit, observe what happens. You will see that the LED lights turn ON when it is both dark AND there is some sound or music playing. This also implies that even if the [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor") is supplying a HIGH signal to the LED lights when it detects sound or music, then unless the [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor") detects darkness, the LED lights will always stay OFF. Only when it is dark AND there is sound or music detected by the sound sensor will the LED lights will flash. -->

## Detalhes dos Módulos Grove

### Grove - DC Jack Power

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Power_photo1.jpg)

O módulo Grove - DC Jack Power alimenta todos os outros módulos do Mixer Pack. Uma fonte de alimentação pode ser conectada a ele por meio de um conector DC cilíndrico padrão. A fonte de alimentação pode ser uma bateria de 9 V ou qualquer adaptador de parede de 5.5-20 V. O módulo pode alcançar uma corrente de saída contínua de 2 A em uma ampla faixa de alimentação de entrada, com excelente regulação de carga e de linha.

### Grove - Recorder

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Recoder_photo1.jpg)

O módulo Grove - Recorder pode gravar de 8 a 20 segundos de áudio e reproduzi-lo. O tempo de gravação padrão é de 10 segundos. O módulo usa armazenamento não volátil, o que significa que o som ou áudio gravado não é perdido quando o módulo é desligado. Ele permanece armazenado na memória e, quando o módulo é ligado novamente, o mesmo som ou áudio pode ser reproduzido. O módulo é muito fácil de controlar - basta pressionar o botão de pressão on-board para gravar e conectar o alto-falante incluído no kit para ouvir a reprodução.

### Grove - LED String Light

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/RGB_String_photo1.jpg)

O módulo Grove - LED String Light é essencialmente um driver de LED para as luzes de cordão de LED incluídas no seu mixer pack. A tensão de operação do módulo é 3,3 V/5 V, mas a luz de cordão requer uma entrada de 12 V. Este módulo, portanto, usa um Conversor DC-DC step up para fornecer a tensão necessária para acender as luzes de cordão de LED. A luz de cordão de LED que acompanha é uma luz de cordão RGB de 5 metros de comprimento que você pode usar para iluminar uma árvore de Natal ou decorar uma parte da sua casa.

### Grove - Mini Fan

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mini_Fan_photo1.jpg)

O módulo Grove - Mini Fan é um driver de motor DC baseado no microcontrolador AVR Atmega168. Ele pode ser usado para acionar o motor DC que está incluído no seu mixer pack. O ventilador de pás macias também incluído no kit pode ser acoplado ao motor para fazer um projeto divertido com crianças. Por ter pás macias, o ventilador é totalmente seguro e não há chance de qualquer ferimento. Para projetos avançados, o microcontrolador neste módulo também pode ser reprogramado para acionar um motor de servo.

### Grove - NOT

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/NOT_photo1.jpg)

O módulo Grove - NOT fornece a função de uma porta lógica NOT. O módulo NOT tem uma entrada à esquerda e uma saída à direita. Quando o sinal de entrada para o módulo é HIGH, a saída é LOW. Quando o sinal de entrada para o módulo é LOW, a saída é HIGH.

### Grove - OR

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_OR.jpg)

O módulo Grove - OR fornece a função de uma porta lógica OR. Ele tem duas entradas à esquerda e uma saída à direita. A saída deste módulo de porta lógica OR passa para HIGH quando recebe um sinal HIGH em qualquer uma das duas entradas.

### Grove - AND

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/AND_photo1.jpg)

O módulo Grove - AND fornece a função de uma porta lógica AND. Ele tem duas entradas à esquerda e uma saída à direita. A saída deste módulo de porta lógica AND passa para HIGH somente quando recebe um sinal HIGH de ambas as entradas.

### Grove - Buzzer

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Buzzer1.jpg)

O módulo Grove - Buzzer tem um buzzer piezoelétrico como componente principal. O piezo pode ser conectado a saídas digitais e emitirá um tom quando a saída for HIGH. Alternativamente, ele pode ser conectado a uma saída analógica de modulação por largura de pulso para gerar vários tons e efeitos.

### Grove - Light Sensor

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-Light_Sensor_photo.jpg)

<!-- The [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor") module incorporates a Light Dependent Resistor (LDR). Typically, the resistance of the light sensor will decrease when the ambient light intensity increases. -->

### Grove - Red LED

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-LED_Photo.jpg)

<!-- The [Grove - Red LED](/pt-br/Grove-Red_LED "Grove - Red LED") module is similar to the Grove - LED module in that it houses an LED light source. In addition, it also has a potentiometer on-board to manage the input voltage to the LED and to adjust its brightness. The module also has mounting holes for the LED and the LED is not soldered onto the PCB. This means you can remove the Red LED that comes with the mixer pack and use any other LED of any other color or size as well. You can also use this module to add a pilot lamp for indicating power or signal presence for [Arduino](/pt-br/Arduino "Arduino") or [Seeeduino](/pt-br/Seeeduino "Seeeduino") based projects. -->

### Grove - Sound Sensor

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-Sound_Sensor_photo1.jpg)

<!-- The [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor") module is based on using a simple [electret microphone](https://en.wikipedia.org/wiki/Electret_microphone) microphone as a sound sensor. It can be used to detect the sound strength of the environment. -->

### Grove - Slide Potentiometer

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Sliding1.JPG)

O módulo Grove - Slide Potentiometer incorpora um resistor variável linear com resistência total de 10 KΩ. Quando você move a alavanca de um lado para o outro, sua tensão de saída variará de 0 V até o Vcc que você aplicar. Ele se conecta aos outros módulos Grove por meio de um cabo Grove padrão de 4 pinos. Três dos pinos são conectados a OUT (Pino 1), Vcc (Pino 3) e GND (Pino 4), enquanto o quarto pino (Pino 2) é conectado a um LED indicador verde. O LED é usado para representar visualmente a variação de resistência no potenciômetro.

### Grove - Button

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Button1.jpg)

O módulo Grove - Button incluído neste mixer pack é uma versão mais recente do módulo Grove - Button da [Seeed Studio](https://www.seeedstudio.com). Ele contém um botão "liga/desliga momentâneo" independente. “Momentâneo” significa que o botão retorna sozinho após ser solto. O botão gera um sinal ALTO quando pressionado e BAIXO quando solto. O botão envia sinais para o pino SIG da interface Grove enquanto o NC não é usado.

## Projetos de exemplo

Os módulos e acessórios do Grove Mixer Pack podem ser usados para construir muitos projetos divertidos. Alguns exemplos de projetos que você pode fazer também são fornecidos no [Mixer Handbook](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Handbook.pdf) que você recebeu junto com o kit. Alguns projetos também estão listados abaixo.

## LED Fotosensível

<!-- *   Part list:

        *   1x [Grove - DC Jack Power](/pt-br/Grove-DC_Jack_Power "Grove - DC Jack Power")

        *   1x [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor")

        *   1x [Grove - Red LED](/pt-br/Grove-Red_LED "Grove - Red LED") -->

**Siga estas instruções gráficas passo a passo para construir seu projeto:**

1.Alinhe os módulos de que você precisará para o circuito

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage1.jpg)

2.Conecte os módulos usando os cabos Grove de 4 pinos

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage2.jpg)

3.Teste o circuito

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage3.jpg)

## Pisca-pisca que brilha no escuro

**Lista de Peças:**

<!-- - 1x [Grove - DC Jack Power](/pt-br/Grove-DC_Jack_Power "Grove - DC Jack Power")

- 1x [Grove - Light Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor")

- 1x [Grove - NOT](/pt-br/Grove-NOT "Grove - NOT")

- 1x [Grove - LED String Light](/pt-br/Grove-LED_String_Light "Grove - LED String Light") module along with the LED String lights -->

**Siga estas instruções gráficas passo a passo para construir seu projeto:**

1.Alinhe os módulos de que você precisará para o circuito

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage4.jpg)

2.Conecte os módulos usando os cabos Grove de 4 pinos e ligue o sistema

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage5.jpg)

3.Teste o circuito

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage6.jpg)

## Outras Ideias de Projetos

Aqui estão alguns outros projetos que você pode experimentar:

1. **Luzes que piscam com a música**
_Dica:_ Use uma combinação do sensor de som e das luzes de cordão de LED. Você consegue fazer as luzes piscarem em sincronia com a música? Se você toca algum instrumento musical, como piano, veja como as luzes reagem quando você toca.

2. **Luzes que piscam com a música, mas somente quando está escuro**
_Dica:_ Use uma combinação dos sensores de som e de luz junto com luzes de cordão de LED. Você consegue adivinhar quais módulos de portas lógicas precisará usar com os 2 sensores? Você precisará de dois!

3. **Adicione uma luz de LED ao seu capacete de bicicleta**
_Dica:_ O circuito para isso é o mesmo do projeto Luzes Fotosensíveis mostrado acima. Use uma bateria de 9 V para tornar seu projeto portátil!

4. **Use um buzzer piezo como buzina de bicicleta**
<!-- _Hint:_ Press on a button to sound a squeaky horn! Use a 9V battery to make your project portable. Explore what happens when you replace the [Grove - Button](/pt-br/Grove-Button "Grove - Button") with a [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"). -->

5. **Torne-se um espião!**
_Dica:_ Use o gravador de som e grave secretamente a voz de alguém e reproduza para essa pessoa.
6. **Deixe uma mensagem carinhosa para sua mãe antes de ir para a escola**
_Dica:_ Use o gravador de som como você fez no projeto acima. Desta vez, grave sua mensagem favorita para alguém querido (mãe, pai, irmão... qualquer pessoa) com sua própria voz e avise que eles podem reproduzi-la quando você não estiver por perto!!

7. **Reviva um antigo carrinho de brinquedo com motor quebrado**
_Dica:_ Você tem um antigo carrinho de brinquedo motorizado que parou de funcionar? É bem provável que o motor ainda funcione bem e que o problema seja outra coisa. Veja se você consegue abrir o brinquedo e extrair o motor acoplado às rodas e ligá-lo usando um módulo Grove - Mini Fan. Experimente usar uma bateria de 9 V para alimentação e o potenciômetro deslizante para variar a velocidade.

8. **Ventilador pessoal com velocidade variável**
_Dica:_ Este é bem fácil e não deve exigir nenhuma dica ;) Proteja-se do calor com este projeto!

## Disponibilidade

---
Disponível no [SeeedStudio Bazaar](https://www.seeedstudio.com/depot/):

- [Comprar Grove Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Recursos

- [Grove Mixer Pack V2 Grove - Schematics dos Módulos (zip de pdfs)](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_sch_pdf.zip)

- [Grove Mixer Pack V2 Grove - Schematics dos Módulos (zip de arquivos Eagle)](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_Eagle.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
