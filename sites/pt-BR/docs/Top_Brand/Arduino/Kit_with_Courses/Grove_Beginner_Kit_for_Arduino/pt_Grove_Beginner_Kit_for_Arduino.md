---
description: Grove Beginner Kit for Arduino(EOL)
title: Grove Beginner Kit for Arduino(EOL)
keywords:
  - Kit com Cursos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Beginner_Kit_for_Arduino
sku: 110020171
last_update:
  date: 2/14/2023
  author: hushuxu
createdAt: '2023-02-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Beginner_Kit_for_Arduino/
---


## SISTEMA GROVE

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove é um sistema de prototipagem modular que consiste em uma unidade base e vários módulos com conectores padronizados. A unidade base é geralmente um microprocessador que permite a comunicação, o processamento e o controle da entrada ou saída dos módulos Grove. Cada módulo Grove normalmente realiza uma única função, variando de um simples botão a um sensor de batimentos cardíacos mais complexo. O conector Grove padronizado permite ao usuário montar unidades Grove com uma abordagem de blocos de montar; em comparação com sistemas baseados em jumpers ou solda, é muito mais fácil montar ou desmontar, o que simplifica o processo de aprendizagem para experimentação, construção e prototipagem.
Também fornecemos Grove to Pin Header Converter ou Grove Base HAT disponíveis para diversas plataformas de desenvolvimento, para aqueles que desejam usar módulos de sensores e atuadores Grove sem uma Grove System Development Board.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Os usuários do sistema Grove precisam ter pelo menos algum conhecimento básico de eletrônica; caso contrário, é necessário passar por este tutorial básico para aprender algumas operações básicas no sistema Grove. A primeira parte deste tutorial consiste em uma lista de informações básicas sobre os componentes incluídos no kit inicial, seguida pela configuração básica da Arduino IDE para o Seeeduino Lotus. Em seguida, as 11 sessões de tutorial fornecem a operação básica de cada componente individual do kit inicial e as aplicações ao combinar vários módulos, o que dá ao aluno alguma percepção e conhecimento básico sobre como conectar e programar com o sistema Grove.

## Grove Beginner Kit for Arduino

Grove Beginner Kit for Arduino contém uma Seeeduino Lotus V1.1 Dev Board (compatível com Arduino) e 8 módulos. As informações detalhadas são listadas abaixo.

### Placa de Desenvolvimento

#### Seeeduino Lotus V1.1

Seeeduino Lotus é uma placa de desenvolvimento com microcontrolador ATMEGA328 AVR; é a combinação de Seeeduino e Grove Base Shield. Ela usa um microcontrolador Atmel ATmege328-MU e o chip CP2102N; ATmege328-MU é um microcontrolador AVR de 8 bits de alto desempenho e baixo consumo de energia, e CP2102N é um chip conversor USB para Serial que permite que você se comunique com o Seeeduino Lotus usando um cabo micro-USB. O Seeeduino Lotus possui 14 entradas/saídas digitais (6 podem ser usadas como saídas PWM) e 7 entradas/saídas analógicas, uma conexão micro USB, um cabeçalho ICSP, 12 conectores Grove e um botão de reset.

**Recursos**

- Totalmente compatível com Arduino UNO
- Microcontrolador ATmega328
- 2 conectores Grove on-board
- 14 pinos de E/S digitais (6 saídas PWM)
- 6 entradas analógicas
- Conector ISP
- Compatível com Shield Arduino UNO-R3
- Programação e alimentação via Micro USB
- Tensão de operação de 5V
- Compatível com Windows, Mac OS e Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: Um LED está conectado ao pino D13 da placa. Ele pode ser usado como um indicador de LED on-board para programas/sketches.

USB Input: A porta USB é usada para conectar a placa ao seu PC para programação e alimentação. Micro USB é um tipo de porta USB muito comum, podendo ser encontrada na maioria dos celulares Android e outros dispositivos. Você provavelmente tem dezenas desses cabos espalhados pela sua casa.

Reset: Este botão está convenientemente colocado na lateral para permitir que você reinicie a placa Seeeduino mesmo quando um shield estiver conectado em cima. Já o botão em outras placas Arduino é colocado na parte superior, o que torna difícil alcançá-lo com um shield acoplado.

Pinos de Alimentação, Pinos Analógicos e Pinos Digitais: Esses headers extras estão disponíveis quando você quiser conectar outros sensores e atuadores sem conector Grove e, principalmente, os headers de alimentação são usados quando você quiser alimentar mais sensores/dispositivos.

Conectores Grove: A Seeed Studio tem uma variedade de sensores/dispositivos que podem usar essas conexões Analógica, Digital, I2C e UART. Além disso, vendemos conectores Grove independentes para ajudar você a fazer suas próprias conexões de sensores.

ICSP: Esta é a conexão ICSP para o ATmega328P, localizada na posição padrão ICSP/SPI para hardwares compatíveis com Arduino Uno, Due, Mega e Leonardo. Os pinos SPI desta porta – MISO, SCK e MOSI – também estão conectados aos pinos digitais 12, 13 e 11, respectivamente, assim como no Arduino Uno.

USB 2 Uart: Pinout de USB-2-Uart. Esses pads podem ser usados para interagir com outros dispositivos UART, colocando o ATmega328 on-board em modo de reset. Isso faz com que o Seeeduino Lotus possa ser usado como uma placa utilitária USB2UART.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Release Date      |        2018/03       |     2016/02    |
|     Microcontroller    |      ATMega328P      |   ATMega328P   |
|    Operating Voltage   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Power supply interface |       Micro USB      |  USB, DC Port  |
|    Grove Connectors    |          12          |      None      |

#### Sensores

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

Este módulo usa um buzzer piezo como componente principal; ele pode produzir um tom de alta frequência quando está conectado à saída digital e o nível lógico é definido como Alto; caso contrário, pode produzir vários tons de acordo com as frequências geradas pela saída analógica PWM que estiver conectada a ele. (nota: a faixa de frequência que o ouvido humano normal consegue distinguir é entre 20 Hz e 20 kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

O Grove-Tilt Switch é o equivalente a um botão e é usado como entrada digital. Dentro do tilt switch há um par de esferas que fazem contato com os pinos quando o invólucro está na posição vertical. Ao inclinar o invólucro, as esferas deixam de se encostar, não fazendo mais a conexão. Ele é ligado à linha SIG; o pino NC não é usado neste módulo Grove.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED é baseado no chip P9813, que é um driver de LED de cores completas. Ele fornece 3 drivers de corrente constante, bem como saída modulada de 256 tons de cinza. Ele se comunica com um MCU usando transmissão de 2 fios (Data e Clock). Essa transmissão de 2 fios pode ser usada para encadear módulos adicionais Grove - Chainable RGB LED. A regeneração de clock integrada aumenta a distância de transmissão. Este módulo Grove é adequado para qualquer projeto baseado em LEDs coloridos.

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

O Grove - Light sensor integra um fotoresistor (resistor dependente de luz) para detectar a intensidade da luz. A resistência do fotoresistor diminui quando a intensidade da luz aumenta. Um chip LM358 de dupla OpAmp na placa produz uma tensão correspondente à intensidade da luz (isto é, baseada no valor de resistência). O sinal de saída é um valor analógico; quanto mais clara a luz, maior o valor.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

O Grove-Line finder é projetado para robôs seguidores de linha. Ele possui um LED emissor de IR e um fototransistor sensível a IR. Ele pode enviar sinal digital para um microcontrolador, de modo que o robô possa seguir uma linha preta em fundo branco, ou vice-versa.

**[Grove - LCD RGB Backlight](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

Este módulo Grove - LCD RGB Backlight é um display LCD de 16 caracteres e 2 linhas; ele usa interface de barramento I2C para se comunicar com a placa de desenvolvimento, reduzindo assim os pinos de cabeçalho de 10 para 2, o que é muito conveniente para o sistema Grove. Este módulo de display LCD também suporta caracteres personalizados; você pode criar e exibir um símbolo de coração ou um boneco de palito neste módulo LCD por meio de uma simples configuração de código.

**[Grove - Temperature & Humidity Sensor(DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

Este sensor de temperatura e umidade fornece uma saída digital pré-calibrada. Um elemento sensor capacitivo exclusivo mede a umidade relativa e a temperatura é medida por um termistor de coeficiente de temperatura negativo (NTC). Ele possui excelente confiabilidade e estabilidade em longo prazo. Observe que este sensor não funciona para temperaturas abaixo de 0 grau.

**[Grove - 3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5-p-765.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

O acelerômetro digital de 3 eixos é a parte chave em projetos como detecção de orientação, detecção de gestos e detecção de movimento. Este acelerômetro digital de 3 eixos (±1.5g) é baseado no módulo de baixo consumo de energia da Freescale, MMA7660FC. Ele apresenta resistência a choques de até 10.000g e taxa configurável de amostras por segundo. Para aplicações em geral que não exigem uma faixa de medição muito grande, esta é uma ótima escolha porque é durável, economiza energia e tem bom custo-benefício.

## PRIMEIROS PASSOS

### Requisitos mínimos

- Kit inicial Grove
- Cabo micro USB
- Computador com Arduino IDE

### Tutorial básico

#### Configuração básica do Arduino IDE

**Passo 1.**  Instale o driver USB para Serial para o Seeeduino Lotus V1.1

Seeeduino Lotus Versão 1.1 e superior, que adota o chip CP2102N USB para serial, adiciona suporte para a maioria dos sistemas operacionais, incluindo Windows, MacOS e Linux, faça o download e instale o driver correspondente ao seu sistema operacional.
Links de download:
Site oficial: [CP210x USB to UART Bridge VCP Drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/logo.jpg)

**Instalar driver**

Windows:

Extraia/descompacte o arquivo de driver comprimido baixado, abra a pasta extraída e selecione instalar o driver correspondente de acordo com a arquitetura do seu sistema operacional, neste caso selecionamos 64 bits, usuários de SO de 32 bits devem selecionar o arquivo _x86, siga o assistente de instalação para concluir.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win3.png)

Mac OS:

Dê um clique duplo no arquivo “Silicon Labs VCP Driver.pkg” e siga o assistente de instalação para concluir.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac2.png)

**Passo 2.** Baixe e instale o [Arduino IDE](https://www.arduino.cc/en/Main/Software)

Por favor, baixe e instale o Arduino IDE de acordo com o seu sistema operacional.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard.png)

<b id="step3">Step 3.</b> Adicionar biblioteca para Seeeduino Lotus

- Abra Arduino | Preferences, na janela de preferências, na página de configurações, encontre Additional Boards Manager URLS, copie e cole a Library URL na caixa de texto, em seguida pressione ok para efetivar.
Library URL: [https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard3.png)

- Abra Tools | Board: | Boards Manager, pesquise por Seeeduino AVR e clique em install para instalar a biblioteca Seeeduino AVR. Se você não conseguir ver o Seeeduino AVR listado na janela Boards Manager, repita o primeiro passo e certifique-se de que a URL que você inseriu está correta.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard4.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard5.png)

- Abra Tools | Board: sob a lista secundária você deverá encontrar a seção Seeeduino AVR Boards como mostrado, e selecione a placa correta de acordo com o seu ambiente de desenvolvimento, neste tutorial devemos selecionar Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard6.png)

**Passo 4.** Conecte o Seeeduino Lotus

Conecte o Seeeduino Lotus e o computador através de um cabo Micro-USB, o LED verde de alimentação no Seeeduino Lotus deve acender.

![with micro-USB](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/usb.jpg)

**Passo 5.** Configure o IDE para o Seeeduino Lotus

Siga os passos mostrados anteriormente, selecione “Seeeduino Lotus” em Boards Manager.

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port. Para descobrir o dispositivo serial correto, você pode desconectar sua placa Arduino e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial. A entrada que você selecionar deve conter “SLAB_USB”.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard07.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard7.png)

Defina “Tools | Programmer” como “AVR ISP”.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard8.png)

### Demo Blink

Após toda a configuração básica do Arduino IDE, agora podemos testar o código de demonstração blink na placa de desenvolvimento Seeeduino Lotus. Observação: você deve concluir as etapas acima para continuar o seguinte.

**Selecionar Demo Blink no Menu**

Selecione File | Examples | 01 Basics | Blink na barra de menu, o código de exemplo blink deve aparecer na nova janela.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard9.png)

**Carregar código**

Certifique-se de que a placa, a porta e o programador corretos estejam selecionados no menu tools.
Agora podemos carregar o código na placa de desenvolvimento Lotus pressionando o ícone de seta para a direita no canto superior esquerdo do IDE.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard10.png)

Quando o código for carregado com sucesso, o texto “avrdude done. Thank you.” deverá aparecer na janela de log do IDE.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard11.png)

Agora você deverá ver o LED embutido piscando em um intervalo de um segundo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/blink.jpg)

**Explicação do código blink**

void setup() é a função de configuração que é executada apenas uma vez quando você pressiona reset ou liga a placa.

```cpp

void setup() {
}

```

inicializa o pino digital LED_BUILTIN como uma saída.

```cpp

pinMode(LED_BUILTIN, OUTPUT);

```

void loop() é a função de loop que roda continuamente para sempre.

```cpp

void loop() {
}

```

digitalWrite() serve para definir o pino LED_BUILTIN com nível de tensão HIGH, o que significa ligar o LED. Da mesma forma, para desligar o LED basta definir o nível de tensão como LOW, alterando o código de HIGH para LOW.

```cpp

digitalWrite(LED_BUILTIN, HIGH);
digitalWrite(LED_BUILTIN, LOW);

```

delay() significa pausar o programa, o número dentro dos parênteses significa a quantidade de tempo (em milissegundos) para pausar (delay).

```cpp

delay(1000);

```

## Tutorial de 10 sessões do Grove Starter Kit

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/kit.jpg)

### Objetivo

Esta seção consiste em 10 tutoriais, que podem ser divididos em duas partes: as primeiras 8 sessões apresentam a operação básica de cada módulo individual deste kit inicial, e as últimas 2 sessões usam casos de exemplo para mostrar como os módulos podem ser combinados e aplicados em aplicações do mundo real.

### Pré-requisito

O conhecimento fundamental sobre como operar o Seeeduino Lotus com o Arduino IDE e a habilidade de programação são essenciais para este tutorial. Portanto, certifique-se de ter concluído o tutorial de configuração básica acima e instalado com sucesso o driver USB para serial no seu sistema operacional para o Seeeduino Lotus, ter finalizado o demo Blink LED e garantir que ele esteja funcionando plenamente com a placa Seeeduino Lotus.

### Resultados de aprendizagem

- Ser capaz de operar o Arduino IDE para escrever código para o Seeeduino Lotus V1.1 para controlar módulos do Grove Starter Kit.
- Ser capaz de identificar o tipo de módulos incluídos neste Kit e suas aplicações.
- Ser capaz de demonstrar cada componente do Grove Starter Kit e utilizar o módulo relevante em seus próprios projetos após este tutorial

### Sessão 1: Grove - Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

**Objetivo** 

Usar o buzzer para gerar algum ruído e também definir frequência específica para produzir alguns tons.

**Conhecimento chave**

- O módulo Buzzer é um atuador.
- Usar sinal digital para produzir som de buzina
- Produzir tom específico definindo a frequência adequadamente
- Usar a função tone(pin, frequency, duration) para fazer o buzzer tocar música
- Aprender como usar “for loop” no Arduino IDE

**Requisitos de hardware**

Preparados pelo usuário

- Cabo micro-USB
- Um computador com Arduino IDE e driver serial-para-USB instalados

Incluídos no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Módulo Grove – Buzzer 

**Conexão de hardware**

**Passo 1.** Use o cabo Grove para conectar o módulo Grove - Buzzer à porta D6 do Seeeduino Lotus

![D6 with seeeduino](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

**Passo 2.** Conecte o Seeeduino Lotus ao computador por um cabo micro USB.

**Programação de software** 

**Exemplo 1**: Usar lógica digital alta/baixa para fazer o buzzer “buzinar”

Passo 1: Copie e cole o código a seguir no Arduino IDE

```
//assign buzzer as pin 6
#define buzzer 6

void setup()
{
  //set buzzer as output
  pinMode(buzzer, OUTPUT);
}

void loop()
{ //turn on buzzer(set logic level high)
  digitalWrite(buzzer, HIGH);
  //wait 1s
  delay(1000);
  //turn off buzzer(set logic level low)
  digitalWrite(buzzer, LOW);
  //wait 1s
  delay(1000);
}

```

Passo 2: Carregar o código no Seeeduino Lotus

Passo 3: Observar o resultado

:::success
 When the code finishes upload, you can hear “buzz” with a 1 second gap in between sound.
:::
**Exemplo 2**: Usar frequências diferentes para fazer o buzzer gerar tons diferentes.

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//assign buzzer as pin 6 
#define buzzer 6                

void setup()
{
  /* tone(pin, frequency, duration) */
  //set buzzer pin to play 264Hz for 300ms
  tone(buzzer, 262, 300);
  //wait 1s
  delay(1000);

  //set buzzer pin to play 297Hz for 300ms
  tone(buzzer, 294, 300);
  //wait 1s
  delay(1000);

  //set buzzer pin to play 330Hz for 300ms
  tone(buzzer, 330, 300);
  //wait 1s
  delay(1000);
}

void loop()
{
  // no need to repeat the tone.
}

```

Etapa 2: Faça o upload do código para o Seeeduino Lotus

Etapa 3: Observe o resultado

:::success
 Quando o upload do código terminar, você deverá ouvir o buzzer fazendo o som de “Dó, Ré, Mi”.
:::
**Exemplo 3**: Use a função tone(pin, frequency, duration) para fazer música com o buzzer 

Etapa 1: copie e cole o código a seguir na Arduino IDE

```cpp

// initalise the frequency of the notes
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

//assign buzzer as pin 6
#define buzzer 6

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

void setup() {
  // iterate over the notes of the melody:
  for (int thisNote = 0 ; thisNote < 25 ; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / noteDurations[thisNote];
    tone(buzzer, melody[thisNote], noteDuration);

    // to distinguish the notes, set a minimum time between them.
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    noTone(buzzer);
  }
}

void loop() {
  // no need to repeat the melody.
}

```

Etapa 2: Faça o upload do código para o Seeeduino Lotus

Etapa 3: Observe o resultado

:::success
 Quando o upload do código terminar, você deverá ouvir uma melodia do buzzer, por favor, tente adivinhar que música é essa.
:::

**Exploração adicional**

Por favor, confira o repositório GitHub de Brett Hagman "[Tone](https://github.com/bhagman/Tone)" para criar tons e músicas.

### Sessão 2: Grove - Tilt Switch

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

**Objetivo** 
Usar o módulo tilt switch para ligar/desligar o LED embutido no Seeeduino Lotus, e também usar o tilt switch para fazer o módulo buzzer da sessão anterior apitar.

**Conhecimentos principais**

- O Tilt Switch é um módulo de entrada de sinal
- A operação no tilt switch
- usa a função digitalRead(pin) para obter o sinal lógico de entrada do tilt switch, que é HIGH quando ligado e LOW quando desligado.
- função if(condition){}else{} e operador de comparação como != (diferente de), &lt; (menor que), &lt;= (menor ou igual a), == (igual a), &gt; (maior que) e &gt;= (maior ou igual a).

**Requisitos de hardware**

Preparar por conta própria

- cabo micro-USB
- um computador com Arduino IDE e driver serial-para-USB instalado

Incluídos no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Grove – Tilt Switch
- Grove – Buzzer

**Conexão de hardware**

Etapa 1: Conecte o Grove – Tilt Switch à porta D5 do Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_ard.jpg)

Etapa 2: Conecte o Seeeduino Lotus ao computador com um cabo micro USB

**Programação de software** 
**Exemplo 1**: Observe o comportamento do tilt switch usando o Serial Monitor

Etapa 1: copie e cole o código a seguir na Arduino IDE

```cpp

//assign name tiltswitchPin to pin 5
#define tiltswitchPin 5
//creates a integer variable called 'val' to store read value
int val;

void setup()
{
  //set pinMode of tiltswitchPin to input
  pinMode(tiltswitchPin, INPUT);
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}

void loop()
{ //read the tilt switch input
  val = digitalRead(tiltswitchPin);
  //display the tilt switch status, 1 is on, 0 is off.
  Serial.println(val);
}

```

Etapa 2: Faça o upload do código para o Seeeduino Lotus

Etapa 3: Abra o Serial Monitor

para abrir o serial monitor, selecione Tools | Serial Monitor na barra de menu ou simplesmente clique no ícone de lupa na barra de ferramentas. Observação: aguarde o término do upload do código antes de abrir o serial monitor.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard12.png)

Etapa 4: Observe o resultado

Por favor, incline o tilt switch em ambas as direções; você deverá ver “1” ou “0” exibidos no serial monitor. Agora você pode encontrar a orientação correta do tilt switch para ligar/desligar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard13.png)

**Exemplo 2**: Use o tilt switch para ligar/desligar o LED embutido

Etapa 1: copie e cole o código a seguir na Arduino IDE

```cpp

//set title of pin 5 as tiltSwitch
#define tiltSwitch 5

void setup()
{ //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
  //set pin 13(Builtin LED) as output pin
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{ //read the status of tilt switch
  if (HIGH == digitalRead(tiltSwitch)) {
    /*
       if the logic level of tilt switch
       is high turn on the builtin LED
    */
    digitalWrite(LED_BUILTIN, HIGH);
  } else
  {
    //otherwise turn off the builtin LED
    digitalWrite(LED_BUILTIN, LOW);
  }
}

```

Etapa 2: Faça o upload do código para o Seeeduino Lotus

Etapa 3: Observe o resultado

:::success
 Agora você deve ser capaz de ligar/desligar o LED integrado no Seeeduino Lotus inclinando o tilt switch na orientação correta.
:::
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)

**Exemplo 3**: Use o tilt switch para pausar e reproduzir o toque do buzzer
Conecte o módulo Grove – Buzzer à porta D6 do Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_tilt.jpg)

Etapa 1: copie e cole o código a seguir na Arduino IDE

```cpp

// initalise the frequency of the notes
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

//set title of pin 5 as tiltSwitch
#define tiltSwitch 5
//set title of pin 6 as buzzer
#define buzzer 6
// set variable currentNote to store latest note played
int currentNote;

void setup()
{
  //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
}

void loop()
{
  /*read the status of tilt switch
if the logic level of tilt switch
is high, start play music */
  if (HIGH == digitalRead(tiltSwitch)) {

for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
  // to calculate the note duration, take one second divided by the note type.
  //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
  int noteDuration = 1000 / noteDurations[thisNote];
  tone(buzzer, melody[thisNote], noteDuration);

  // to distinguish the notes, set a minimum time between them.
  int pauseBetweenNotes = noteDuration * 1.30;
  delay(pauseBetweenNotes);

  /*reset the currentNote to the 0
is the music is finished*/
  if (thisNote >= 24) {
currentNote = 0;
  }

  /*druing the music read the status
of tilt switch if the logic level
of tilt switch is LOW, stop play
music and store the previous played
tone and jump to next tone*/
  if (LOW == digitalRead(tiltSwitch)) {

//store the current note(thisNote) to currentNote
currentNote = thisNote;
//set the next note ready to play by increase currentNote by 1 increament
currentNote ++;
/*reset the currentNote to the beginning
  is the music is finished*/
if (currentNote >= 25)
{
  //restart the music from beginning by reset the currentNote to 0,
  currentNote = 0;
}
//if the tilt switch is set to logic level low, stop play music
break;
  }
}
  }
}

```

Etapa 2: Faça o upload do código para o Seeeduino Lotus

Etapa 3: Observe o resultado

:::success
 Agora você deve ser capaz de pausar o toque inclinando o tilt switch para a posição desligado, e retomar o tom musical inclinando o tilt switch para a posição ligado.
:::
**Exploração adicional**

Após esta sessão, você pode fixar o módulo sensor tilt switch na tampa da sua caixa de ferramentas. Assim, quando você levantar a tampa, o tilt switch será acionado para ligar; então você pode definir um atraso por um curto período para ativar o buzzer e emitir alguns tons que lembrem você de que a tampa ainda está aberta, para que você não se esqueça de fechá-la depois de terminar de usar a caixa de ferramentas.

### Sessão 3: Grove – Chainable RGB LED

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**Objetivo** 

Usar código para controlar o Chainable RGB LED para mostrar cores diferentes e alternar entre as cores usando o tilt switch.

**Conhecimentos principais**

- O Grove – Chainable RGB LED é um atuador
- Importar biblioteca para o módulo Grove
- Usar a função setColorHSB() para controlar o matiz, a saturação e o brilho do módulo LED
- Usar a função setColorRGB() para controlar a cor e o brilho do módulo LED
- Usar a operação % (módulo) para encontrar o resto, por exemplo, 5%2=1, 9%3=0.
- Usar a função switch(val)…case…;

**Requisitos de hardware** 

Preparar por conta própria

- cabo micro-USB
- computador com Arduino IDE e driver serial-para-USB instalado

Incluídos no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Grove – Chainable RGB LED
- Grove – Tilt Switch
- Grove – Buzzer

**Conexão de hardware**

Etapa 1: Conecte o Grove – Chainable RGB LED à porta D7 do Seeeduino Lotus. Observação: conecte a porta G|V|DI|CI do LED como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_ard.jpg)

Etapa 2: Conecte o Seeeduino Lotus ao computador com um cabo micro USB.

**Programação de software**

**Adicionar Biblioteca**

As etapas abaixo mostram como adicionar a [library](https://github.com/pjpmarques/ChainableLED/archive/v1.2.zip) para o Grove – Chainable RGB LED.

Passo 1: Abra o repositório do Github a partir da URL da Library e baixe o arquivo zip

Encontre “Clone or download | Download ZIP” na página do Github, você deve escolher apenas Download ZIP e lembre-se do caminho do arquivo em que você baixou e salvou o arquivo zip.

Passo 2: Selecione “include Library | Add .ZIP Library..

Selecione Sketch | Include Library | Add .ZIP Library…, na nova janela pop-up selecione o arquivo zip que você baixou na última etapa e clique em choose.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard14.png)

Passo 3: Teste se a biblioteca foi adicionada com sucesso

Selecione e abra File | Examples | ChainableLED-1.2 | CycleTroughColors

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard15.png)

Carregar Código: Clique para carregar o código

:::success
  se o módulo de LED estiver alternando entre diferentes cores, então você saberá que carregou a Library com sucesso.
:::
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

Conclusão: O método de adicionar biblioteca permite que o usuário adicione facilmente drivers de sensores de terceiros e bibliotecas feitas pelos fabricantes de módulos de sensores, por exemplo, nesta sessão de tutorial, usamos a função setColorRGB(byte led, byte red, byte green, byte blue), que é uma das funções implementadas pela Seeed Studio; isso reduz o custo de desenvolvimento do usuário quando ele adota um novo módulo de sensor. Você precisará adicionar mais bibliotecas para os outros módulos Grove mais tarde.

**Exemplo 1**: Use a função setColorHSB para mudar a cor do LED

Passo 1: copie e cole o código a seguir na Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  //initialise ChainableLED leds
  leds.init();
}
//initialise hue as float point with value of 0.0
float hue = 0.0;
//initialise up as boolean with value of true
boolean up = true;

void loop()
{
  /*for loop is used for loop through
    each LED connected to the chain
    in this case there is only one LED
  */
  for (byte i = 0; i < NUM_LEDS; i++) {

    /*setColorHSB(byte led, float hue, float saturation, float brightness);
       in this case set the first and only chainableLED 0 with changing hue
       and full saturation and half brightness
    */
    leds.setColorHSB(i, hue, 1, 0.5);
    //    delay for 50ms for each color
    delay(50);

    /*if up is true increase
      hue at 0.025 interval
      otherwise decrease hue
      at 0.025 interval
    */
    if (up) {
      hue += 0.025;
    }
    else
    {
      hue -= 0.025;
    }
    /*
      if hue is greater than 1.0
       and up is true set up to false,
       otherwise if hue is less or
       equal to 0.0 and up is not
       ture(! means is not) set up
       to true
    */
    if (hue >= 1.0 && up)
    {
      up = false;
    }
    else if (hue <= 0.0 && !up)
    {
      up = true;
    }
  }
}

```

Passo 2: Carregue o código no Seeeduino Lotus

Passo 3: Observe o resultado

Você deve ver que a cor do LED está mudando de acordo com o valor de hue, que está aumentando em incrementos de 0,025 e, quando o valor de hue chega a 1, o valor de hue deve diminuir em decrementos de 0,025 até que o valor se torne 0, e cada cor deve acender por 50 milissegundos.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

**Exemplo 2**: Use a função setColorRGB para mudar a cor e o brilho do LED

Passo 1: copie e cole o código a seguir na Arduino IDE

```cpp

/*
   Example of using the ChainableRGB library for controlling a Grove RGB.
   This code fades in an out colors in a strip of leds.
*/

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  //initialise ChainableLED leds
  leds.init();
}
//initialise power as byte with value of 0
byte power = 0;

void loop()
{
  /*for loop is used for loop through
    each LED connected to the chain
    in this case there is only one LED
  */
  for (byte i = 0; i < NUM_LEDS; i++)
  {
    /*
      % means modulo operation to find remainder
      eg 0 % 2 = 0, 1 % 2 = 1,  2 % 2 = 0...
      setColorRGB(byte led, byte red, byte green, byte blue);
      so in this case the even number of the LED chain
      will fading green color, odd number of the LED
      chain will fading red color, since we count the
      first LED as 0.
    */
    if (i % 2 == 0)
      //brighter red color from 0 to full power
      leds.setColorRGB(i, power, 0, 0);
    else
      //dimmer green color from full power to 0
      leds.setColorRGB(i, 0, 255 - power, 0);
  }
  //set power increment as 10
  power += 10;
  //light 0.5s for each brightness
  delay(500);
}

```

Passo 2: Carregue o código no Seeeduino Lotus

Passo 3: Observe o resultado

você deverá ver que o LED vermelho aumenta o brilho a cada 0,5 s, porque nós apenas definimos o valor para a variável red na função setColorRGB(byte led, byte red, byte green ,byte blue).

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg2.jpg)

Se mudarmos as variáveis red e green deste:

```cpp
leds.setColorRGB(i, power, 0, 0);
```

para isto:

```cpp
leds.setColorRGB(i, power, 255-power, 0);
```

por favor observe a diferença.

**Exemplo 3**: Use o tilt switch para controlar o LED e o Buzzer

Conecte o Grove – Tilt Switch à porta D5 do Seeeduino Lotus.

Conecte o módulo Grove – Buzzer à porta D6 do Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_buzzer_tilt.jpg)

Passo 1: copie e cole o código a seguir na Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

// initalise the frequency of the notes
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

//set title of pin 5 as tiltSwitch
#define tiltSwitch 5
//set title of pin 6 as buzzer
#define buzzer 6

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

// set variable currentNote to store latest note played
int currentNote;
//initialise hue as float point with value of 0.0
float hue = 0.0;
//initialise up as boolean with value of true
boolean up = true;
//initialise power as byte with value of 0
byte power = 0;
//initialise color as integer with value of 0
int color = 0;

void setup()
{
  //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
  //initialise ChainableLED leds
  leds.init();
}

void loop()
{
  /*read the status of tilt switch
    if the logic level of tilt switch
    is high, start play music */
  if (HIGH == digitalRead(tiltSwitch)) {

    for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
      // to calculate the note duration, take one second divided by the note type.
      //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
      int noteDuration = 1000 / noteDurations[thisNote];
      tone(buzzer, melody[thisNote], noteDuration);

      // to distinguish the notes, set a minimum time between them.
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);

      /*reset the currentNote to the 0
        is the music is finished*/
      if (thisNote >= 24) {
        currentNote = 0;
      }

      /*set the LED to loop through
        different colors with different hue*/
      leds.setColorHSB(0, hue, 1, 0.5);

      /*if up is true increase
        hue at 0.025 interval
        otherwise decrease hue
        at 0.025 interval
      */
      if (up) {
        hue += 0.025;
      }
      else
      {
        hue -= 0.025;
      }
      /*if hue is greater than 1.0
         and up is true set up to false,
         otherwise if hue is less or
         equal to 0.0 and up is not
         ture(! means is not) set up
         to true
      */
      if (hue >= 1.0 && up)
      {
        up = false;
      }
      else if (hue <= 0.0 && !up)
      {
        up = true;
      }

      /*druing the music read the status
        of tilt switch if the logic level
        of tilt switch is LOW, stop play
        music and store the previous played
        tone and jump to next tone*/
      if (LOW == digitalRead(tiltSwitch)) {
        /* use switch...case to set the LED loop through three colors
           Red when color = 0 enters case 0
           Green when color = 1 enters case 1
           Blue when color = 2 enters case 2
           reset color to 0 if color is greater or equals 3
        */
        if (color >= 3) {
          color = 0;
        }
        switch (color) {
          case 0:
            //set LED to Red
            leds.setColorRGB(0, 255, 0, 0);
            break;
          case 1:
            //set LED to Green
            leds.setColorRGB(0, 0, 255, 0);
            break;
          case 2:
            //set LED to Blue
            leds.setColorRGB(0, 0, 0, 255);
            break;
        }
        //increase color by 1 increment everytime enter this condition
        color ++;

        //store the thisNote to currentNote
        currentNote = thisNote;
        //set the next note ready to play by increase currentNote by 1 increament
        currentNote ++;
        /*reset the currentNote to the beginning
          is the music is finished*/
        if (currentNote >= 25)
        {
          //restart the music from beginning by reset the currentNote to 0,
          currentNote = 0;
        }
        //if the tilt switch is set to logic level low, stop playing music
        break;
      }
    }
  }
}

```

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

Ao inclinar o interruptor de inclinação, você deverá ver que, quando o interruptor de inclinação está ligado, o LED muda de cor e o tom do buzzer também muda; quando o interruptor de inclinação está desligado, o LED alterna entre Vermelho, Verde e Azul e o buzzer para.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg3.jpg)

**Explorar mais**

Depois desta sessão, você já pode combinar os módulos das três primeiras sessões e transformá-los em uma caixa de presente de aniversário, onde você pode colocar o sensor de interruptor de inclinação na tampa da caixa; quando a caixa é aberta, o interruptor de inclinação é acionado, então o buzzer começa a tocar a música de aniversário e o LED começa a piscar luzes coloridas.

### Sessão 4: Grove - Sensor de Luz

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

**Objetivo** 

Usar o módulo sensor de luz para ligar/desligar o módulo LED RGB encadeável e controlar o brilho do LED de acordo com a intensidade da luz ambiente.

**Conhecimentos principais**

- O módulo Sensor de Luz é um módulo de entrada de sinal analógico
- use a função map(value, fromLow, fromHigh, toLow, toHigh) para remapear o número de saída analógica de uma faixa para outra de forma mais clara e prática.
- usar o sensor de luz como um interruptor de luz
- usar o sensor de luz para controlar o brilho do LED detectando o brilho ambiente

**Requisito de hardware** 

Preparar por conta própria

- cabo micro-USB
- um computador com Arduino IDE e driver serial-para-USB instalado

Incluídos no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Grove – Sensor de Luz
- Grove – LED RGB Encadeável

**Conexão de hardware**

Passo 1: Conecte o módulo Grove – Sensor de Luz à porta A0 do Seeeduino Lotus

Passo 2: Conecte o Grove – LED RGB Encadeável à porta D7 do Seeeduino Lotus

Passo 3: Conecte o Seeeduino Lotus ao computador por um cabo micro USB

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_rgb.jpg)

**Programação de software**

**Exemplo 1**: Usa o sensor de luz para ligar/desligar o LED conforme o brilho da luz ambiente

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED, set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//naming analog pin A0 as LightSensor
#define LightSensor A0

void setup()
{
  //initialise ChainableLED leds
  leds.init();
}

void loop()
{
  //read the value of Light Sensor and store to value
  int value = analogRead(LightSensor);
  //if Sensor reading is less than 150 turn on LED
  if (value < 150) {
    //turn on LED
    leds.setColorRGB(0, 10, 10, 10);
    //delay for 1s
    delay(1000);
  } else
  {
    //turn off LED
    leds.setColorRGB(0, 0, 0, 0);
    //delay for 1s
    delay(1000);
  }
}

```

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

Observe que, se a luz ambiente estiver muito forte, você pode usar a mão para cobrir o módulo do sensor de luz; então o LED deve acender. Quando a luz ambiente faz com que o valor de leitura do sensor de luz fique maior que 150, o LED deve apagar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg1.jpg)

**Exemplo 2**: Usa o sensor de luz para controlar o brilho do LED

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

#define LightSensor A0

void setup()
{
  //initialise ChainableLED leds
  leds.init();
  Serial.begin(9400);
}

//initialise hue as float point with value of 0.0
float hue = 0.0;
//initialise up as boolean with value of true
boolean up = true;

void loop()
{
  //read the value of Light Sensor and store to value
  int value = analogRead(LightSensor);
  /*map(value, fromLow, fromHigh, toLow, toHigh)
    Re-maps a number from one range to another
    In this case maping the analog value of light sensor
    ranging from 0-800 to 100-0, so when the brightness
    of surrounding enviroment is high so the sensor reading
    value is high, therefore the maped value should be opposite,
    so the birghtness LED should be dimmer.
    the brightness of chainable LED only accept float number, so
    we divide the maped value with 100. 
  */
  float value_float = map(value, 0, 800, 50, 0) / 100.0;
  /*setColorHSB(byte led, float hue, float saturation, float brightness);
   * use the maped value(value_float) as brightness
  */
  leds.setColorHSB(0, hue, 1, value_float);
  delay(100);

  /*if up is true increase
    hue at 0.025 interval
    otherwise decrease hue
    at 0.025 interval
  */
  if (up) {
    hue += 0.025;
  }
  else
  {
    hue -= 0.025;
  }
  /*if hue is greater than 1.0
     and up is true set up to false,
     otherwise if hue is less or
     equal to 0.0 and up is not
     ture(! means is not) set up
     to true
  */
  if (hue >= 1.0 && up)
  {
    up = false;
  }
  else if (hue <= 0.0 && !up)
  {
    up = true;
  }
}

```

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

O brilho do LED deve diminuir quando o brilho do ambiente aumenta. Quando o brilho ambiente diminui, o brilho do LED deve aumentar. Como mostrado, o LED escurece quando há uma luz forte incidindo sobre o sensor de luz, caso contrário o LED fica brilhante.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg2.jpg)

**Explorar mais**

Agora você pode integrar este módulo sensor de luz no seu sistema de iluminação de corredor para controlar o brilho da luz; durante o dia, o sensor de luz detecta a luz do sol e então reduz o brilho da luz do corredor para baixo, o que não apenas economiza energia, mas também prolonga a vida útil das lâmpadas.

### Sessão 5: Grove - Line Finder

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

**Objetivo** 

Usar o line finder para detectar linha preta e controlar a cor do LED de acordo com o fato de o line finder detectar ou não a linha preta.

**Conhecimentos principais**

- Grove – Line Finder é um módulo de entrada de sinal digital
- Revisar como usar o Serial Monitor
- Usar módulo de entrada de sinal para controlar o Grove – LED RGB Encadeável

**Requisito de hardware** 

Preparar por conta própria

- cabo micro-USB
- um computador com Arduino IDE e driver serial-para-USB instalado

Incluídos no kit

- Grove – Line Finder
- Grove – LED RGB Encadeável

**Conexão de hardware**

Passo 1: Conecte o módulo Grove – Line Finder à porta D3 do Seeeduino Lotus

Passo 2: Conecte o Seeeduino Lotus ao computador por um cabo micro USB

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_ard.jpg)

**Programação de software**

**Exemplo 1**: Usa o Serial Monitor para exibir e testar o sinal de saída do line finder

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//naming pin3 as singalPin
#define signalPin 3

void setup() {
  // initialize the digital pin as an input:
  pinMode(signalPin, INPUT);
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}

void loop() {
  //read the line detector input 
  int val = digitalRead(signalPin);

  //display the line detector status, 1 is black, 0 is white.
  Serial.println(val);
}

```

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

Observe que você deve manter pelo menos 5 cm de distância entre o objeto a ser detectado e o line finder; para testar o line finder você deve colar uma faixa de fita isolante preta em um papel branco ou azulejos (ou usar objetos pretos). Agora aponte o line finder para o objeto preto, o Serial Monitor deve exibir 0, e se você afastar o line finder do objeto preto, o Serial Monitor deve exibir 1.

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg1_1.jpg)

**Exemplo 2**: Usa o Line detector para ligar ou desligar o módulo Grove – LED RGB Encadeável.

Conecte o Grove – LED RGB Encadeável à porta D7 do Seeeduino Lotus

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_rgb.jpg)

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//naming pin3 as lineFinder
#define lineFinder 3

void setup() {
  // initialize the digital pin as an input:
  pinMode(lineFinder, INPUT);
  //initialise ChainableLED leds
  leds.init();
}

void loop() {
  /*read the line detector input
   * if detected black(HIGH) turn on LED
  */
  if (HIGH == digitalRead(lineFinder))
  {
    //turn off LED
    leds.setColorRGB(0, 10, 10, 10);
  }

  /*read the line detector input
   * if reading Logic low turn off LED
  */
  if (LOW == digitalRead(lineFinder))
  {
    //turn off LED
    leds.setColorRGB(0, 0, 0, 0);
  }
}

```

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

Você deverá ver que, se o line finder detectar a linha preta, o LED deve apagar; caso contrário, o LED deve acender se o line finder não conseguir detectar a linha preta.

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg2.jpg)

**Exemplo 3**: Usa o line finder para controlar o LED para emitir Vermelho ou Verde

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add ChainableLED library to this project
#include <ChainableLED.h>

//set the number of leds linked to the chain
#define NUM_LEDS  1

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//naming pin3 as lineFinder
#define lineFinder 3

void setup() {
  // initialize the digital pin as an input:
  pinMode(lineFinder, INPUT);
  //initialise ChainableLED leds
  leds.init();
}

void loop() {
  /*read the line detector input
   * if detected black(HIGH) set Green LED
  */
  if (HIGH == digitalRead(lineFinder))
  {
    //Green LED
    leds.setColorRGB(0, 0, 255, 0);
  }

  /*read the line detector input
   * if reading Logic low set Red LED
  */
  if (LOW == digitalRead(lineFinder))
  {
    //Red LED
    leds.setColorRGB(0, 255, 0, 0);;
  }
}

```

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

Você deve notar que, quando o sensor de linha detecta a linha preta, o LED emitirá luz vermelha; caso contrário, se o sensor de linha não conseguir encontrar a linha preta, o LED deverá emitir luz verde.

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg3.jpg)

**Exploração adicional**

Agora você pode montar o seu próprio carrinho seguidor de linha usando este módulo seguidor de linha e dois motores com um driver de motor (ponte H). Assim, quando o seguidor de linha detectar a linha preta, ative um lado do motor da roda; quando o seguidor de linha sair da linha preta, pare o lado em rotação do motor da roda e ative o outro lado do motor da roda. Dessa forma, o carrinho seguirá a linha preta com a frente do carro virando constantemente para a esquerda ou para a direita.

### Sessão 6: Grove - LCD RGB Backlight

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

**Objetivo** 

Usar a tela Grove - LCD RGB Backlight para exibir “Hello World” e alguns caracteres personalizados.

**Conhecimentos-chave**

- Revisar como adicionar biblioteca
- Dominar o posicionamento de caracteres e usar código binário para gerar caracteres personalizados.
- Exibir texto rolando na tela LCD
- Usar o código de caracteres embutido do LCD para exibir caracteres especiais, por exemplo, o símbolo de grau “ ° ”

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/chartable.png)

**Requisito de hardware** 

Auto-preparado

- Cabo micro-USB
- Um computador com Arduino IDE e driver serial-para-USB instalados

Incluído no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Grove - LCD RGB Backlight

**Conexão de hardware**

Passo 1: Conecte o módulo Grove - LCD RGB Backlight à porta I2C do Seeeduino Lotus. Observação: é a porta I2C seguida por um ponto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_ard.jpg)

Passo 2:  Conecte o Seeeduino Lotus ao computador com um cabo micro USB.

**Programação de software**

**Adicionar biblioteca**

Adicione a [biblioteca](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) para a tela Grove - LCD RGB Backlight

Siga as instruções do tutorial 3 sobre como <a href="#step3">adicionar biblioteca</a>.

**Exemplo 1**: Exibir Hello World

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//include the rgb_lcd library
#include "rgb_lcd.h"

//assign name lcd to rgb_lcd
rgb_lcd lcd;

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);

    // Print Hello, World! to the LCD.
    lcd.print("Hello, World!");
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

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

Você deverá ver “Hello, World!” exibido na primeira linha e um contador regressivo na segunda linha.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/helloworld.jpg)

**Exemplo 2**: Exibir o logo da Seeed Studio e usar o código de caracteres embutido para exibir texto

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add LCD library
#include "rgb_lcd.h"

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

/*draw customise character
  in this case is the seeed studio logo
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  //initialise the lcd screen;
  // set up the lcd's number of columns and rows:
  lcd.begin(16, 2);

  /*create and assign numbers of
    each seeed studio logo elements
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);


  /* set the cursor to column 4, line 0
    note: line 0 is the first row, since counting begins with 0
    same rule apply to the column as well
  */
  lcd.setCursor(4, 0);
  //Print I and a space to the LCD at column 4, line 0
  lcd.print("I ");
  //set the cursor to column 6, line 0
  lcd.setCursor(6, 0);
  /* Print LOVE by using the LCD character lookup table
     note write() method is mentt to send raw bytes
     print() is mostly intended to format data as ascii.
     this is different way of display text on lcd.
  */
  //character 76 is L on lookup table
  lcd.write(76);
  //the hex number 0x4F(is 79) associates with O on lookup table
  lcd.write(0x4F);
  //character 86 is V on lookup table
  lcd.write(86);
  //character 69 is E on lookup table
  lcd.write(69);
  //set the cursor to column 10, line 0
  lcd.setCursor(10, 0);
  //Print a space and Grove to the LCD
  lcd.write(" Grove");
  //set the cursor to column 4, line 1
  lcd.setCursor(4, 1);
  //Print text Seeed Studio to the LCD
  lcd.print("Seeed Studio");

  //display seeed studio logo
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);
}

void loop()
{

}

```

Passo 2: Envie o código para o Seeeduino Lotus

Passo 3: Observe o resultado

Você verá o logo da Seeed Studio exibido nos primeiros 8 blocos, seguido de “I Love Grove” na primeira linha e “Seeed Studio” na segunda linha.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_seeed.jpg)

**Exemplo 3**: Texto rolando no display LCD

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp


//add LCD library
#include "rgb_lcd.h"

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

/*draw customise character
  in this case is the seeed studio logo
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //wait for 1s
  delay(1000);
}

void loop()
{

  /*create and assign numbers of
    each seeed studio logo elements
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);

  /* set the cursor to column 4, line 0
    note: line 0 is the first row, since counting begins with 0
    same rule apply to the column as well
  */
  lcd.setCursor(4, 0);
  //Print I and a space to the LCD at column 4, line 0
  lcd.print("I ");
  //set the cursor to column 6, line 0
  lcd.setCursor(6, 0);
  /* Print LOVE by using the LCD character lookup table
     note write() method is mentt to send raw bytes
     print() is mostly intended to format data as ascii.
     this is different way of display text on lcd.
  */
  //character 76 is L on lookup table
  lcd.write(76);
  //the hex number 0x4F(is 79) associates with O on lookup table
  lcd.write(0x4F);
  //character 86 is V on lookup table
  lcd.write(86);
  //character 69 is E on lookup table
  lcd.write(69);
  //set the cursor to column 10, line 0
  lcd.setCursor(10, 0);
  //Print a space and Grove to the LCD
  lcd.write(" Grove");
  //set the cursor to column 4, line 1
  lcd.setCursor(4, 1);
  //Print text Seeed Studio to the LCD
  lcd.print("Seeed Studio");

  //display seeed studio logo
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);

  // scroll 16 positions (string length) to the left
  // to move it offscreen left:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // scroll one position left:
    lcd.scrollDisplayLeft();
    // wait a bit:
    delay(200);
  }

  // scroll 32 positions (string length + display length) to the right
  // to move it offscreen right:
  for (int positionCounter = 0; positionCounter < 32; positionCounter++) {
    // scroll one position right:
    lcd.scrollDisplayRight();
    // wait a bit:
    delay(200);
  }

  // scroll 16 positions (display length + string length) to the left
  // to move it back to center:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // scroll one position left:
    lcd.scrollDisplayLeft();
    // wait a bit:
    delay(200);
  }
}

```

Passo 2: Carregue o código no Seeeduino Lotus

Passo 3: Observe o resultado

Você deverá ver o display rolando o texto, primeiro da direita para a esquerda até que todo o texto desapareça no final do lado esquerdo da tela, então o texto rolará de volta da esquerda para a direita.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_scroll.jpg)

**Exploração adicional**

Este [website](https://maxpromer.github.io/LCD-Character-Creator/) ajuda você a gerar caracteres personalizados para tela LCD controlada por Arduino.

### Sessão 7: Grove - Sensor de Temperatura e Umidade (DHT11)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

**Objetivo**

Usar o módulo sensor DHT11 para detectar a temperatura e umidade do ambiente e exibir os dados de saída do DHT11 na tela LCD.

**Conhecimento-chave**

- DHT11 é um módulo de sensor digital
- revisar como operar o Serial Monitor e a tela LCD
- adicionar a biblioteca DHT11 e a configuração inicial para o DHT11
- usar o Serial Monitor e a tela LCD para exibir dados do sensor DHT11

**Requisitos de hardware**

Preparar por conta própria

- cabo micro-USB
- um computador com Arduino IDE e driver serial-para-USB instalado

Incluído no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Grove – Sensor de Temperatura e Umidade (DHT11)

**Conexão de hardware**

Passo 1: Conecte o módulo Grove – Sensor de Temperatura e Umidade (DHT11) à porta D2 do Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_ard.jpg)

Passo 2: Conecte o Seeeduino Lotus ao computador com um cabo micro USB

**Programação de software**

**Adicionar** [Library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip)

**Exemplo 1**: Usa o Serial Monitor para monitorar a temperatura e a umidade do ambiente

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add DHT sensor library
#include <DHT.h>

//set digital pin2 as DHTPIN
#define DHTPIN 2
//set the sensor type as DHT 11
#define DHTTYPE DHT11

/*assign dht as the name of DHT sensor
  set the sensor pin as DHTPIN(pin2),
  set the sensor type as DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  //initialise the dht sensor
  dht.begin();
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
  //wait for 2s to initialise the board
  delay(2000);
}

void loop() {
  //store the humidity value to h
  int h = dht.readHumidity();
  //store the temperature value to t(in Celsius)
  int t = dht.readTemperature();
  //store the converted temperature value in fahrenheit to f
  int f = dht.convertCtoF(t);
  //display the title Temperature in C:
  Serial.print("Temperature in C: ");
  //display the temperature value t
  Serial.print(t);
  /* note the difference Serial.print()
     and Serial.println(),
     Serial.print() print the data in the same line
     Serial.println() print the data on the new line
     display the temperature unit ºC and change new line
  */
  Serial.println("ºC");
  //display the title Temperature in F:
  Serial.print("Temperature in F: ");
  //display the temperature value f
  Serial.print(f);
  //display the temperature unit ºF and change new line
  Serial.println("ºF");
  //display the title Humidity:
  Serial.print("Humidity: ");
  //display the Humidity value h
  Serial.print(h);
  //display the % sign
  Serial.println("%");
}

```

Passo 2: Carregue o código no Seeeduino Lotus

Passo 3: Abra o Serial Monitor

Passo 4: Observe o resultado

Você deverá ver um texto similar com os dados de temperatura e umidade exibidos no Serial Monitor como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result1.png)

**Exemplo 2**: Usa a tela LCD para exibir dados do sensor DHT11

Primeiro conecte o módulo Grove - LCD RGB Backlight à porta I2C. do Seeeduino Lotus nota: é a porta I2C seguida por um ponto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_lcd.png)

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add DHT sensor library
#include <DHT.h>
//add LCD library
#include <rgb_lcd.h>

//set digital pin2 as DHTPIN
#define DHTPIN 2
//set the sensor type as DHT 11
#define DHTTYPE DHT11

/*assign dht as the name of DHT sensor
  set the sensor pin as DHTPIN(pin2),
  set the sensor type as DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

void setup() {
  //initialise the dht sensor
  dht.begin();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //wait for 2s
  delay(2000);
}

void loop() {
  //store the humidity value to h
  int h = dht.readHumidity();
  //store the temperature value to t(in Celsius)
  int t = dht.readTemperature();

  //set the LCD cursor to column 0, line 0
  lcd.setCursor(0, 0);
  //Print text temperature: to the LCD
  lcd.print("Temperature:");
  //set the LCD cursor to column 12, line 0
  lcd.setCursor(12, 0);
  //Print temperature value t to the LCD
  lcd.print(t);
  //set the LCD cursor to column 14, line 0
  lcd.setCursor(14, 0);
  //Print temperature º is character 223 on lookup table
  lcd.write(223);
  //Print C to the LCD
  lcd.print("C");

  //set the LCD cursor to column 0, line 1
  lcd.setCursor(0, 1);
  //Print text Humidity: to the LCD
  lcd.print("Humidity: ");
  //set the LCD cursor to column 10, line 1
  lcd.setCursor(10, 1);
  //Print humidity value h to the LCD
  lcd.print(h);
  //set the LCD cursor to column 12, line 1
  lcd.setCursor(12, 1);
  //Print sign % to the LCD
  lcd.print("%");
}

```

Passo 2: Carregue o código no Seeeduino Lotus

Passo 3: Observe o resultado

você pode ver a temperatura e umidade atuais do ambiente exibidas na tela LCD.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_result.jpg)

**Exploração adicional**

Após esta sessão, você pode construir sua própria estação meteorológica usando o sensor DHT11 e o display Grove - LCD RGB Backlight.

### Sessão 8: Grove - Acelerômetro Digital de 3 Eixos

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

**Objetivo** 

Aprender como operar o acelerômetro digital de 3 eixos observando os dados de saída exibidos na tela LCD.

**Conhecimento-chave**

- Usa o Serial Monitor para mostrar o offset e o valor de aceleração do acelerômetro de 3 eixos, descobrindo as relações entre os dados de saída e a posição do acelerômetro de 3 eixos
- Usa os dados de offset do acelerômetro de 3 eixos para calcular os valores de pitch e roll, e observar a mudança dos dados em relação à posição do acelerômetro de 3 eixos.
- Aprender como usar o tilt switch para alternar entre páginas da tela LCD, de modo que a grande quantidade de dados do acelerômetro de 3 eixos possa ser exibida claramente.

**Requisitos de hardware**

Preparar por conta própria

- cabo micro-USB
- um computador com Arduino IDE e driver serial-para-USB instalado

Incluído no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Grove – Acelerômetro Digital de 3 Eixos
- Grove - LCD RGB Backlight
- Grove – Tilt Switch 

**Conexão de hardware**

Passo 1: Conecte o Grove – Acelerômetro Digital de 3 Eixos à porta I2C.. do Seeeduino Lotus nota: é a porta I2C seguida por dois pontos.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_ard.jpg)

Passo 2: Conecte o Seeeduino Lotus ao computador com um cabo micro USB.

**Programação de software**

**Adicionar Biblioteca**

Adicione a [3-axis accelerometer driver Library](https://github.com/Seeed-Studio/Accelerometer_MMA7660/archive/master.zip) ao Arduino IDE

**Exemplo 1**: Usa o Serial Monitor para mostrar os dados de saída do acelerômetro de 3 eixos

Passo 1: copie e cole o código a seguir no Arduino IDE

```cpp

//add accelemeter library
#include "MMA7660.h"

//assign accelemeter as the name of MMA7660 accelemeter
MMA7660 accelemeter;

void setup()
{
  //initialise the accelemeter
  accelemeter.init();
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}
void loop()
{
  //initialise x, y, z as int8_t
  int8_t x;
  int8_t y;
  int8_t z;
  //initialise ax, ay, az as float
  float ax, ay, az;
  //get x y z offset value from accelemeter
  accelemeter.getXYZ(&x, &y, &z);
  //display title x =
  Serial.print("x = ");
  //display value of x
  Serial.println(x);
  //display title y =
  Serial.print("y = ");
  //display value of y
  Serial.println(y);
  //display title z =
  Serial.print("z = ");
  //display value of z
  Serial.println(z);

  //get ax ay az acceleration value from accelemeter
  accelemeter.getAcceleration(&ax, &ay, &az);
  //display title accleration of X/Y/Z: 
  Serial.println("accleration of X/Y/Z: ");
  //display value of ax
  Serial.print(ax);
  //display unit g
  Serial.println(" g");
  //display value of ay
  Serial.print(ay);
  //display unit g
  Serial.println(" g");
  //display value of az
  Serial.print(az);
  //display unit g
  Serial.println(" g");
  //display ************* as divider to make thing prettier
  Serial.println("*************");
  //wait for 0.5s
  delay(500);
}

```

Passo 2: Carregue o código no Seeeduino Lotus

Passo 3: Abra o Serial Monitor

Passo 4: Observe o resultado

Observe as mudanças de dados posicionando o acelerômetro de 3 eixos de acordo com as imagens abaixo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result3.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result5.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result7.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result9.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result11.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result12.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result13.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result14.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result15.png)

**Exemplo 2**: Usa os dados do acelerômetro de 3 eixos para calcular o valor de Pitch e Roll

Conhecimento de fundo:

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/aircraft.png)

conforme mostrado na figura acima:

Pitch (eixo transversal) θ: tem sua origem no centro de gravidade e é direcionado para a direita, paralelo a uma linha traçada de ponta de asa a ponta de asa. O movimento em torno desse eixo é chamado de pitch. Um movimento positivo de pitch eleva o nariz da aeronave e abaixa a cauda. Os profundores são o principal controle de pitch. (Aircraft principal axes 2018)

Yaw (eixo vertical) ψ: tem sua origem no centro de gravidade e é direcionado para a parte inferior da aeronave, perpendicular às asas e à linha de referência da fuselagem. O movimento em torno desse eixo é chamado de yaw. Um movimento positivo de yaw move o nariz da aeronave para a direita. O leme é o principal controle de yaw. (Aircraft principal axes 2018)

Roll (eixo longitudinal) Φ: tem sua origem no centro de gravidade e é direcionado para a frente, paralelo à linha de referência da fuselagem. O movimento em torno desse eixo é chamado de roll. Um deslocamento angular em torno desse eixo é chamado de bank.[3] Um movimento positivo de roll levanta a asa esquerda e abaixa a asa direita. (Aircraft principal axes 2018)

Passo 1: copie e cole o seguinte código no Arduino IDE

```cpp

#include <Wire.h>
//add accelemeter library
#include "MMA7660.h"

//assign accelemeter as the name of MMA7660 accelemeter
MMA7660 accelemeter;

//set value 0.5 to alpha
const float alpha = 0.5;

//initialise fXg, fYg, fZg as double with value of 0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//initialise pitch and roll as double
double pitch, roll;

void setup()
{
  //initialise the accelemeter
  accelemeter.init();
  // opens serial port, sets data rate to 9600 bps
  Serial.begin(9600);
}
void loop()
{
  //initialise x, y, z as int8_t
  int8_t x;
  int8_t y;
  int8_t z;
  //get x y z offset value from accelemeter
  accelemeter.getXYZ(&x, &y, &z);

  //Low Pass Filter to reduce the noise
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  //Roll & Pitch Equations
  roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  //display title roll =
  Serial.print("roll = ");
  //display the roll value
  Serial.println(roll);
  //display title pitch =
  Serial.print("pitch = ");
  //display the pitch value
  Serial.println(pitch);
  delay(500);
}

```

Passo 2: Faça upload do código para o Seeeduino Lotus

Passo 3: Observe o resultado

Por favor, coloque o acelerômetro de 3 eixos sobre uma superfície nivelada, como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis.jpg)

Observe os dados de Roll
Por favor, vire o acelerômetro de 3 eixos para cima/para baixo de acordo com as setas verdes na figura acima; agora o valor de roll deve aumentar quando você virar para baixo, diminuir quando virar para cima; além disso, o valor de roll é positivo quando vira para baixo na origem (colocado paralelo ao nível da água), e negativo quando vira para cima.

Observe os dados de Pitch
Por favor, incline o acelerômetro de 3 eixos para a esquerda/direita de acordo com as setas vermelhas na figura acima; agora o valor de pitch deve aumentar quando você inclinar para a direita, diminuir quando inclinar para a esquerda; além disso, o valor de pitch é positivo quando inclinar para a direita em relação à origem (colocado paralelo ao nível da água), e negativo quando inclinar para a esquerda.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result16.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result17.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result18.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result19.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result20.png)

Agora podemos usar o acelerômetro de 3 eixos para controlar ou corrigir a direção de aviões ou carros, convertendo os dados de pitch e roll em sinal de controle para acionar o atuador; a mesma tecnologia é aplicada ao ajuste automático de tela em telefones celulares quando você inclina o telefone de retrato para paisagem.

**Exemplo 3**: Usa a tela LCD para exibir os dados de saída do acelerômetro de 3 eixos

Por favor, conecte o Grove – Tilt Switch à porta D5 do Seeeduino Lotus, e conecte o módulo Grove - LCD RGB Backlight à porta I2C do Seeeduino Lotus. NOTA: é a porta I2C seguida por um ponto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_lcd_tilt.jpg)

Aqui usamos o tilt switch para mudar a página na tela LCD para mostrar diferentes conjuntos de dados; quando o tilt switch está em ON a tela LCD exibirá os dados de X, Y, Z Roll e Pitch. Quando o tilt switch está na posição OFF a tela LCD exibirá os dados de aceleração de aX, aY, aZ em cada direção, relativamente.

Passo 1: copie e cole o seguinte código no Arduino IDE

```cpp

//add accelemeter library
#include "MMA7660.h"
//add LCD library
#include <rgb_lcd.h>


//assign name tiltswitchPin to pin 5
#define tiltswitchPin 5

//assign accelemeter as the name of MMA7660 accelemeter
MMA7660 accelemeter;
//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

//set value 0.5 to alpha
const float alpha = 0.5;

//initialise fXg, fYg, fZg as double with value of 0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//initialise pitch and roll as double

void setup()
{
  //initialise the accelemeter
  accelemeter.init();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //set pinMode of tiltswitchPin to input
  pinMode(tiltswitchPin, INPUT);
  //wait for 2s
  delay(2000);

}
void loop()
{
  /*if tilt switch is on display X, Y, Z, Roll and Pitch data
    if tilt switch is off display X, Y, Z acceleration data
  */
  if (HIGH == digitalRead(tiltswitchPin))
  {
    //initialise x, y, z as int8_t, pitch and roll as double
    int8_t x;
    int8_t y;
    int8_t z;
    double roll;
    double pitch;
    //get x y z offset value from accelemeter
    accelemeter.getXYZ(&x, &y, &z);

    //Low Pass Filter to reduce the noise
    fXg = x * alpha + (fXg * (1.0 - alpha));
    fYg = y * alpha + (fYg * (1.0 - alpha));
    fZg = z * alpha + (fZg * (1.0 - alpha));

    //Roll & Pitch Equations
    roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
    pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
    //reset the lcd screen
    lcd.clear();
    //set the LCD cursor to column 0, line 0
    lcd.setCursor(0, 0);
    //display text x:
    lcd.print("x:");
    //display value of x
    lcd.print(x);
    //set the LCD cursor to column 5, line 0
    lcd.setCursor(5, 0);
    //display text y:
    lcd.print("y:");
    //display value of y
    lcd.print(y);
    //set the LCD cursor to column 10, line 0
    lcd.setCursor(10, 0);
    //display text z:
    lcd.print("z:");
    //display value of z
    lcd.print(z);

    //set the LCD cursor to column 0, line 1
    lcd.setCursor(0, 1);
    //display text R:
    lcd.print("R:");
    //display value of roll
    lcd.print(roll);
    //set the LCD cursor to column 8, line 1
    lcd.setCursor(8, 1);
    //display text P:
    lcd.print("P:");
    //display value of pitch
    lcd.print(pitch);
  } else
  {
    //initialise ax, ay, az as float
    float ax, ay, az;
    //get ax ay az acceleration value from accelemeter
    accelemeter.getAcceleration(&ax, &ay, &az);
    //reset the lcd screen
    lcd.clear();
    //set the LCD cursor to column 0, line 0
    lcd.setCursor(0, 0);
    //display text ax:
    lcd.print("ax:");
    //display value of ax
    lcd.print(ax);
    //set the LCD cursor to column 8, line 0
    lcd.setCursor(8, 0);
    //display text ay:
    lcd.print("ay:");
    //display value of ay
    lcd.print(ay);
    //set the LCD cursor to column 0, line 1
    lcd.setCursor(0, 1);
    //display text az:
    lcd.print("az:");
    //display value of az
    lcd.print(az);
  }
  //wait 0.5s
  delay(500);
}

```

Passo 2: Faça upload do código para o Seeeduino Lotus

Passo 3: Observe o resultado

Primeiro, por favor teste se o tilt switch está mudando a página da tela LCD. Então você pode girar o acelerômetro de 3 eixos para observar a mudança dos dados de acordo com as rotações, familiarizando-se com os dados de saída associados às orientações do acelerômetro de 3 eixos.

Exibir a velocidade, pitch e roll quando o tilt switch está ligado/desligado:

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_tilt_on&off.jpg)

**Explore Mais**

Depois de brincar com o módulo de acelerômetro digital, você pode imaginar que o acelerômetro é um dos módulos mais importantes que podem ser encontrados em sistemas de guiagem de foguetes, juntamente com outros módulos como GPS e giroscópios etc. O acelerômetro também é usado em telefones celulares para detectar se o seu telefone está no modo retrato ou paisagem, assim a tela pode ser inclinada e ajustada de acordo.

### Sessão 9: Jardim Inteligente

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden.png)

**Objetivo**

Criar um sistema de sensor e lembrete de Jardim Inteligente combinando módulos do kit inicial Grove

**Conhecimentos-chave**

- aprender como combinar múltiplos módulos em uma única aplicação
- aprender como programar múltiplos dispositivos na Arduino IDE
- adotar múltiplos módulos para detectar e analisar o ambiente de plantio, melhorando as habilidades de pensamento lógico

**Análise de caso de uso**

**Módulo sensor**

Usar o módulo DHT11 para monitorar o ambiente ao redor da planta e usar o sensor de luz para detectar a intensidade de luz ao redor.

**Módulo atuador**

Usar o buzzer para emitir diferentes tons e o LCD para notificar diferentes mensagens de aviso:

- aviso 1: a temperatura ambiente é maior que 38°C
- aviso 2: a umidade ambiente é menor que 40%
- aviso 3: a intensidade de luz é menor que 50
- aviso 4: lembrar o usuário de regar a planta

Usar o display LCD para mostrar:

- estado 1: Mostrar temperatura
- estado 2: Mostrar umidade
- estado 3: lembrar o usuário de regar a planta

Usar o tilt switch para redefinir os avisos.

**Fluxograma**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart.png)

**Requisitos de hardware**

Preparação própria

 - cabo micro-USB
 - um computador com Arduino IDE e driver serial‑para‑USB instalados
 - estrutura de acrílico DIY

Incluído no kit

 - Placa de desenvolvimento Seeeduino Lotus V1.1
 - Cabo Grove
 - Grove – Buzzer
 - Grove – Chainable RGB LED
 - Grove – Light Sensor
 - Grove - LCD RGB Backlight
 - Grove – Temperature &Humidity Sensor(DHT11)
 - Grove – Tilt Switch

**Conexão de hardware**

Passo 1:
Conectar o módulo Grove – Buzzer à porta D6 do Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

Conectar o Grove – Chainable RGB LED à porta D7 do Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)

Conectar o módulo Grove – Light Sensor à porta A0 do Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect2.jpg)

Conectar o módulo Grove - LCD RGB Backlight à porta I2C do Seeeduino Lotus. Observação: é a porta I2C seguida por um ponto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect3.jpg)

Conectar o módulo Grove – Temperature &Humidity Sensor(DHT11) à porta D2 do Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect4.jpg)

Conectar o Grove – Tilt Switch à porta D5 do Seeeduino Lotus.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect5.jpg)

Fixar todos os componentes juntos na Estrutura de Acrílico DIY

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden3.png)

Passo 2: Conectar o Seeeduino Lotus ao computador com um cabo micro USB.

**Programação de software**

Passo 1: Adicione a [TimeLib Library](https://github.com/PaulStoffregen/Time/archive/master.zip) na Arduino IDE
Para mais informações, visite o [tutorial Arduino TimeLib](http://playground.arduino.cc/code/time)

Passo 2: copie e cole o código a seguir na Arduino IDE

```cpp

//add DHT sensor library
#include <DHT.h>
//add LCD library
#include <rgb_lcd.h>
//add ChainableLED library to this project
#include <ChainableLED.h>
//add Timelib library
#include <TimeLib.h>

//assign default time as epoch time 1514764800 which is 00:00:00 Jan 1 2018
long DEFAULT_TIME = 1514764800;
long waterTime = DEFAULT_TIME + 86400;

//set the number of leds linked to the chain
#define NUM_LEDS  1

//assign LightSensor as A0
#define LightSensor A0
//set digital pin2 as DHTPIN
#define DHTPIN 2
//set title of pin 5 as tiltSwitch
#define tiltSwitch 5
//assign buzzer as pin 6
#define buzzer 6

//set the sensor type as DHT 11
#define DHTTYPE DHT11

/*assign dht as the name of DHT sensor
  set the sensor pin as DHTPIN(pin2),
  set the sensor type as DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

void setup()
{
  //
  setTime(DEFAULT_TIME);
  //initialise the dht sensor
  dht.begin();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //initialise ChainableLED leds
  leds.init();
  //set pin 5(tilt switch) as input pin
  pinMode(tiltSwitch, INPUT);
  delay(1000);
}
int mode = 0;
void loop()
{
  //-------------DHT---------------------
  //store the humidity value to h
  int h = dht.readHumidity();

  //store the temperature value to t(in Celsius)
  int t = dht.readTemperature();

  int value = analogRead(LightSensor);
  float value_float = map(value, 0, 800, 50, 0) / 100.0;

  leds.setColorHSB(0, 0, 0, value_float);

  //initialise mode to 0, then set to case 0;

  //temperature exceed 38 degrees, then set to case 1;
  if (t > 38) {
    mode = 1;
  }
  //Humidity is less than 40 %, then set to case 2;
  if (h < 40)
  {
    mode = 2;
  }
  //LightSensor reading value is less than 50, then set to case 3;
  if (value < 50)
  {
    mode = 3;
  }
  //current time is greate or equals to waterTime(24 hour ahead), then set to case 4;
  if (now() >= waterTime  ) {
    mode = 4;
  }

  switch (mode) {
    case 0:
      //set the LCD cursor to column 0, line 0
      lcd.clear();
      lcd.setCursor(0, 0);
      //Print text temperature: to the LCD
      lcd.print("Temperature:");
      //set the LCD cursor to column 12, line 0
      lcd.setCursor(12, 0);
      //Print temperature value t to the LCD
      lcd.print(t);
      //set the LCD cursor to column 14, line 0
      lcd.setCursor(14, 0);
      //Print temperature º is character 223 on lookup table
      lcd.write(223);
      //Print C to the LCD
      lcd.print("C");

      //set the LCD cursor to column 0, line 1
      lcd.setCursor(0, 1);
      //Print text Humidity: to the LCD
      lcd.print("Humidity: ");
      //set the LCD cursor to column 10, line 1
      lcd.setCursor(10, 1);
      //Print humidity value h to the LCD
      lcd.print(h);
      //set the LCD cursor to column 12, line 1
      lcd.setCursor(12, 1);
      //Print sign % to the LCD
      lcd.print("%");
      break;
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Temperature too ");
      lcd.setCursor(0, 1);
      lcd.print("High!!");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 2:
      tone(buzzer, 294, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Warning! Too Dry");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 3:
      tone(buzzer, 330, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Not Enough Light");
      lcd.setCursor(0, 1);
      lcd.print("Check the LED..");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 4:
      tone(buzzer, 349, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to water");
      lcd.setCursor(0, 1);
      lcd.print("the plants");
      if (HIGH == digitalRead(tiltSwitch))
      {
        waterTime = now() + 86400;
        mode = 0;
      }
      break;

  }
}

```

Passo 3: Carregar o código no Seeeduino Lotus

Passo 4: Observar o resultado

Em condição normal, o LED emite luz branca e a tela LCD mostra temperatura e umidade.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden.png)

4 estados de aviso

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden2.png)
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden4.png)

Aviso com LED vermelho

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden5.png)

Redefinir os avisos usando o tilt switch

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden6.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden7.png)

### Sessão 10: Smart Cup

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**Objetivo**

Criar um copo inteligente usando buzzer, LED RGB, Acelerômetro de 3 Eixos e tela LCD; ele lembrará o usuário de beber água em um determinado período de tempo, o copo inteligente também pode detectar se o usuário consumiu água, e a tela LCD exibirá uma contagem regressiva para lembrar o usuário de quando será a próxima vez de beber água.

**Conhecimentos-chave**

- revisar a TimeLib Library sobre como configurar e controlar o tempo com o Lotus.
- revisar exibição e rolagem de texto na tela LCD
- revisar a operação if…else… e switch…case… com os operadores lógicos || (ou) e && (e).
- examinar mais a fundo as aplicações da leitura dos valores de pitch e roll do Acelerômetro de 3 Eixos.
- usar o método do exemplo BlinkWithoutDelay para evitar o uso da função Delay, que faz a função de atraso atrapalhar o temporizador do sistema.
- aprender como criar e chamar função personalizada; o resultado de retorno pode ser Boolean (true/false), ou um valor da variável usando return X.

**Análise de caso de uso**

**Módulo sensor**

Ao comparar os dados de arfagem (pitch) e rolagem (roll) das leituras do acelerômetro de 3 eixos para detectar se a garrafa está inclinada ou não, é possível reconhecer se o usuário está bebendo água ou não. Se a garrafa estiver inclinada, o próximo passo é detectar se a garrafa foi colocada de volta na mesa; assim que a garrafa estiver na mesa, os dados de arfagem e rolagem do acelerômetro de 3 eixos irão calibrar os valores máximo e mínimo para comparação.

**Módulo atuador**

Usa o buzzer para emitir diferentes tons para lembrar diferentes estados:

- estado 1: quando a contagem regressiva de 30 min terminar, o buzzer irá apitar para lembrar o usuário de beber água
- estado 2: o buzzer irá apitar se a garrafa não estiver parada na mesa.

Usa o display LCD

- estado 1: temporizador em contagem regressiva
- estado 2: lembrar o usuário de beber água
- estado 3: parabenizar o usuário por beber água
- estado 4: dizer ao usuário para colocar a água de volta assim que terminar de beber

**Fluxograma**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart1.png)

**Requisitos de hardware**

Preparar por conta própria

- cabo micro-USB
- um computador com Arduino IDE e driver serial-para-USB instalados

Incluído no kit

- Placa de desenvolvimento Seeeduino Lotus V1.1
- Cabo Grove
- Grove – Buzzer
- Grove – LED RGB em cadeia
- Grove - LCD RGB Backlight
- Grove – Acelerômetro Digital de 3 Eixos

**Conexão de hardware**

Passo 1:
Conecte o módulo Grove - Buzzer à porta D6 do Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

Conecte o Grove – Chainable RGB LED à porta D7 do Seeeduino Lotus

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)

Conecte o módulo Grove - LCD RGB Backlight à porta I2C do Seeeduino Lotus. Observação: é a porta I2C seguida por um ponto.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect6.jpg)

Conecte o Grove – Acelerômetro Digital de 3 Eixos à porta I2C do Seeeduino Lotus. Observação: é a porta I2C seguida por dois pontos.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect7.jpg)

Fixe todos os componentes juntos em um copo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**Programação de software**

Passo 1: Adicione a [TimeLib Library]( https://github.com/PaulStoffregen/Time/archive/master.zip) ao Arduino IDE

Copie e cole o código a seguir no Arduino IDE

```cpp

//add LCD library
#include <rgb_lcd.h>
//add accelerometer library
#include "MMA7660.h"
//add Timelib library
#include <TimeLib.h>
//add ChainableLED library to this project
#include <ChainableLED.h>

//assign default time as epoch time 1514764800 which is 00:00:00 Jan 1 2018
long DEFAULT_TIME = 1514764800;
//set drinkTime at 30mins(1800s) after default time
//long drinkTime = DEFAULT_TIME + 1800;
long drinkTime = DEFAULT_TIME + 10;
int lastDrink, seconds;
//will store lastest time in milliseconds
unsigned long previousMillis = 0;

//set the number of leds linked to the chain
#define NUM_LEDS  1

//assign buzzer as pin 6
#define buzzer 6

//assign accelerometer as the name of MMA7660 accelerometer
MMA7660 accelerometer;

//assign lcd as the name of rgb_lcd screen
rgb_lcd lcd;

/*assign leds as the name of
  the ChainableLED set the
  pin of the ChainableLED to
  pin7(clock pin) and pin8(data pin)
  and number of the leds*/
ChainableLED leds(7, 8, NUM_LEDS);

//set motion check tolerance value
int tolerance = 50;
//initalise the calibrated and moveDetedted as false
boolean calibrated = false;
boolean moveDetected = false;

//set int8_t for accelerometer reading value x, y, z
int8_t x;
int8_t y;
int8_t z;

//initialise fXg, fYg, fZg as double with value of 0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//initialise pitch and roll as double
double p, r;

//Accelerometer limits
double rMin; //Minimum roll Value
double rMax; //Maximum roll Value
double rVal; //Current roll Value

double pMin; //Minimum pitch Value
double pMax; //Maximum pitch Value
double pVal; //Current pitch Value

//set value 0.5 to alpha for low pass filter tolerance
const float alpha = 0.5;

//iinitialise mode to set the default switch case to first(count from 0)
int mode = 0;

void setup()
{
  //set the system time to 00:00:00 Jan 1 2018
  setTime(DEFAULT_TIME);
  //initialise the accelerometer
  accelerometer.init();
  //initialise ChainableLED leds
  leds.init();
  //initialise the lcd screen;
  //set up the lcd's number of columns and rows:
  lcd.begin(16, 2);
  //calibrate the accelerometer for at the begining
  calibrateAccel();
  //wait for 2
  delay(2000);
}

//setup accelerometer reading function output mapped value of roll and pitch
void Accel() {
  accelerometer.getXYZ(&x, &y, &z);

  //Low Pass Filter to reduce the noise
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  r  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  p = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  r = map(r, -90, 90, 0, 180);
  p = map(p, -90, 90, 0, 180);
  return r;
  return p;
}

//setup function for calibrate the accelerometer
void calibrateAccel() {
  //reset moveDetected to false
  moveDetected = false;

  //call accelerometer reading funtion
  Accel();

  //assign the reading of roll and pitch
  rVal = r;
  rMin = rVal;
  rMax = rVal;

  pVal = p;
  pMin = pVal;
  pMax = pVal;

  //calibrate the Accelerometer
  for (int i = 0; i < 50; i++) {
    //call accelerometer reading funtion
    Accel();
    /*--calibrate roll---*/
    //assign the reading of roll to rVal
    rVal = r;
    //evaluate if the new reading is greater than stored Maximum value
    if (rVal > rMax) {
      //if new reading value is greater save new value to rMax
      rMax = rVal;
      //evaluate if the new reading is less than stored Minimum value
    } else if (rVal < rMin) {
      //if new reading value is less save new value to rMin
      rMin = rVal;
    }

    /*--calibrate pitch---*/
    //assign the reading of pitch to pVal
    pVal = p;
    //evaluate if the new reading is greater than stored Maximum value
    if (pVal > pMax) {
      //if new reading value is greater save new value to pMax
      pMax = pVal;
      //evaluate if the new reading is less than stored Minimum value
    } else if (pVal < pMin) {
      //if new reading value is less save new value to pMin
      pMin = pVal;
    }
    //Delay 10ms between readings
    delay(10);
  }
  //set the calibrated to true
  calibrated = true;
}

//drinking function check if the bottle is tilting output ture/false
boolean drinking() {
  //initialise tilting as false
  boolean tilting = false;
  //reading from accelerometer
  Accel();

  rVal = r;
  pVal = p;
  /*evaluate if new roll value is greater than the maximum value or
     less than the minimum value saved previously.
     || means or
     if rolling is happening then set tilting to ture
     if pitch is happening then set tilting to ture
  */
  if (rVal > (rMax + tolerance) || rVal < (rMin - tolerance)) {
    tilting = true;
  }

  if (pVal > (pMax + tolerance) || pVal < (pMin - tolerance)) {
    tilting = true;
  }
  //output tilting
  return tilting;
}

//mothin function
void Motion() {
  //don't check for movement until recalibrated again
  calibrated = false;
}

void loop()
{
  /*evaluate if current time is greate or equals
    to drinkTime(30mins ahead), then switch to case 1;
    its time to drink
  */
  if (now() >= drinkTime  ) {
    //switch to case 1
    mode = 1;
  }
  //evaluate if the accelerometer is calibrated
  if (calibrated) {
    //evaluate if the bottle is tilted
    if (drinking()) {
      //switch to case 2
      mode = 2;
      //set moveDetected to true
      moveDetected = true;
    }
  }
  //evaluate if the moveDetected is true
  if (moveDetected) {
    //call motion function
    Motion();
  }
  //save current time in millisecond
  unsigned long currentMillis = millis();
  switch (mode) {
    /*Case 0:
      mode to display countdonw time if nothing happened
    */
    case 0:
      //minutes to drink water
      lastDrink = (drinkTime - now()) / 60;
      //seconds to drink water
      seconds = (drinkTime - now()) % 60;

      leds.setColorHSB(0, 0, 0, 0);

      /*refesh the LCD for 1s without using delay, refer
         to Example "BlinkWithoutDelay", so the system
         won't stop and wait
      */
      if (currentMillis - previousMillis >= 1000) {
        // save the last time you refreshed the LCD
        previousMillis = currentMillis;
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Countdown to dri");
        lcd.setCursor(0, 1);
        lcd.print("nk water: ");
        lcd.setCursor(10, 1);
        lcd.print(lastDrink);
        lcd.print(":");
        lcd.print(seconds);
      }
      break;
    /*Case 1:
       reached 30mins time to drink some water
       with buzzer alarm and LCD display time
       to drink some water
    */
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to drink");
      lcd.setCursor(0, 1);
      lcd.print("Some water");
      break;
    /*Case 2:
       detect if the wate bottle is tilted
       therefore user is drinking some water
       and recalibrate the sensor(accelerometer)
       once the bottle has been put on a flat
       surface if the bottle is still tilted or
       not sitting flat(accelerometer reading
       is not around 90 degrees), enter case 3
       detected the bottle is resting still enter
       to case 0 and reset the drink time to 30mins
       ahead
    */
    case 2:
      //stop buzzer
      noTone(buzzer);
      //update drinkTime
      drinkTime = now() + 1800;
      leds.setColorRGB(0, 0, 255, 0);
      //display message
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Well Done remind");
      lcd.setCursor(0, 1);
      lcd.print("you in 30mins");
      //wait for 5s for user to drink
      delay(5000);
      //reading accelerometer value
      Accel();
      //evaluate if the bottle is resting on flat
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        //evaluate if the accelerometer calibrated
        if (!calibrated) {
          //calibrate accelerometer
          calibrateAccel();
        }
        else
        { //switch to mode 0
          mode = 0;
          //update drinkTime
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      else
      { //if bottle is not resting on flat switch to mode 3
        mode = 3;
        leds.setColorRGB(0, 0, 0, 0);
      }
      break;
    /*case 3
       if the bottle is not resting on flat surface,
       display message with scrolling "plaase put
       down water bottle when finished!", then check
       if the bottle is resting still, if so, recalibrate
       accelerometer and once recalibrated switch back to
       case 0 and reset drink time to 30mins ahead
    */
    case 3:
      //update drinkTime
      drinkTime = now() + 1800;

      leds.setColorRGB(0, 0, 0, 255);
      //display message with autoscroll
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Please put down water");
      lcd.setCursor(0, 1);
      lcd.print("bottle when finished!");
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // scroll one position left:
        lcd.scrollDisplayLeft();
        // wait a bit:
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // scroll one position right:
        lcd.scrollDisplayRight();
        // wait a bit:
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // scroll one position left:
        lcd.scrollDisplayLeft();
        // wait a bit:
        delay(200);
      }

      //reading accelerometer value
      Accel();
      //evaluate if the bottle is resting on flat
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        //evaluate if the accelerometer calibrated
        if (!calibrated) {
          //calibrate accelerometer
          calibrateAccel();
        }
        else
        { //switch to mode 0
          mode = 0;
          //update drinkTime
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      break;
  }
  delay(1);
}


```

Etapa 2: Carregar o código no Seeeduino Lotus

Etapa 3: Observar o resultado

Os 4 estados do copo inteligente

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup2.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup4.png)

## REFERÊNCIA

Eixos principais da aeronave. Acessado em 27 de novembro de 2018. [https://en.wikipedia.org/wiki/Aircraft_principal_axes](https://en.wikipedia.org/wiki/Aircraft_principal_axes).

## APÊNDICE

Toda a [programação](https://github.com/peterpanstechland/Grove_starter_kit.git) deste documento está disponível no Github.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
