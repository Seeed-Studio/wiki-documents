---
description: Kit Grove para Iniciantes em Arduino
title: Kit Grove para Iniciantes em Arduino
keywords:
  - Kit com Cursos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Beginner-Kit-For-Arduino
sku: 110061162
last_update:
  date: 2/14/2023
  author: hushuxu
createdAt: '2023-02-14'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove-Beginner-Kit-For-Arduino/
---

# Grove Beginner Kit For Arduino

O Grove Beginner Kit for Arduino é um dos melhores kits Arduino para iniciantes. Ele inclui uma placa compatível com Arduino e 10 sensores Arduino adicionais, todos em um único design de PCB. **Todos os módulos foram conectados ao Seeeduino através dos furos de ruptura na PCB, portanto não são necessários cabos Grove para a conexão**. Claro, você também pode destacar os módulos e usar cabos Grove para conectá-los. Você pode construir qualquer projeto Arduino que quiser com este Grove Beginner Kit For Arduino.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Visão Geral de Hardware

**Versão anterior** (Antes de outubro de 2025) ↓

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg" style={{width:1000, height:'auto'}}/></div>

**Nova versão** (Após outubro de 2025) ↓

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip Notas sobre a iteração entre versão nova e antiga
Em comparação com a versão anterior, este novo lançamento atualiza alguns sensores descontinuados. O sensor de temperatura e umidade DHT11 foi substituído pelo sensor de temperatura e umidade DHT20; o sensor de pressão barométrica BMP280 foi substituído pelo sensor de pressão barométrica SPA06-003.
:::

**Nota:** Dimensões - 17,69 * 11,64 * 1,88 cm

1. **[Grove - LED](https://wiki.seeedstudio.com/pt-br/Grove-Red_LED/):** Módulo de LED simples
2. **[Grove - Buzzer](https://wiki.seeedstudio.com/pt-br/Grove-Buzzer/):** Buzzer piezoelétrico
3. **[Grove - OLED Display 0.96"](https://wiki.seeedstudio.com/pt-br/Grove-OLED-Display-0.96-SSD1315/):** Resolução de 128×64 pontos, alto brilho, autoemissão e alta taxa de contraste, tela grande em um design compacto e baixo consumo de energia.
4. **[Grove - Button](https://wiki.seeedstudio.com/pt-br/Grove-Button/):** Botão de pressão momentâneo
5. **[Grove - Rotary Potentiometer](https://wiki.seeedstudio.com/pt-br/Grove-Rotary_Angle_Sensor/):** Potenciômetro ajustável
6. **[Grove - Light](https://wiki.seeedstudio.com/pt-br/Grove-Light_Sensor/):** Detecta a intensidade da luz ambiente
7. **[Grove - Sound](https://wiki.seeedstudio.com/pt-br/Grove-Sound_Sensor/):** Detecta a intensidade do som ambiente
8. **[Grove - Temperature & Humidity Sensor](https://wiki.seeedstudio.com/pt-br/Grove-TemperatureAndHumidity_Sensor/):** Detecta os valores de temperatura e umidade do ambiente. A versão mais antiga usava o sensor DHT11, enquanto versões após 2025.10 usam o sensor DHT20.
9. **Grove - Air Pressure Sensor:** Detecta a pressão atmosférica ambiente

- A versão anterior usava o [BMP280](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BMP280/).
- A nova versão datada de outubro de 2025 usa o [SPA06-003](https://wiki.seeedstudio.com/pt-br/grove_barometer_sensor_spa06_003).

10. **[Grove - 3-Axis Accelerator](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR):** Detecta a aceleração de objetos
11. **[Seeeduino Lotus](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus/):** Placa compatível com Arduino com portas Grove

**Nota:**
        Por padrão, os módulos Grove são conectados ao Seeeduino através dos furos de ruptura da PCB. Isso significa que você não precisa usar cabos Grove para conectar, se não forem destacados. Os pinos padrão são os seguintes:

|Módulos|Interface|Pinos/Endereço|
|---|---|---|
|LED|Digital|D4|
|Buzzer|Digital|D5|
|OLED Display 0.96"|I2C|I2C, 0x78(default)|
|Button|Digital|D6|
|Rotary Potentiometer|Analógico|A0|
|Light|Analógico|A6|
|Sound|Analógico|A2|
|Temperature & Humidity Sensor|Digital|D3|
|Air Pressure Sensor|I2C|I2C, 0x77(default) / 0x76(optional)|
|3-Axis Accelerator|I2C|I2C, 0x19(default)|

### Instruções de Destaque (Breakout)

**Atenção:**
    Tenha cuidado para não cortar suas mãos ao usar uma faca

Se você preferir usar os módulos em outro lugar, basta seguir os procedimentos para destacar os módulos!

**Passo 1**

Use uma faca ou um objeto afiado para cortar nos furos de ruptura que conectam os sensores

**Passo 2**

Balance os módulos para cima e para baixo e eles devem sair com bastante facilidade!

## Lista de Peças

|Módulos|Quantidade|
|---|---|
|**Sensores**||
|Temperature & Humidity Sensors|x1|
|3-Axis Accelerometers|x1|
|Air Pressure|x1|
|Light Sensor|x1|
|Sound Sensor|x1|
|**Módulos de Entrada**||
|Rotary Potentiometer|x1|
|Button|x1|
|**Módulos de Saída**||
|LED|x1|
|Buzzer|x1|
|**Módulo de Display**||
|OLED Display|x1|
|**Cabos Grove**|x6|
|**Cabo Micro USB** (versão anterior) / **Cabo USB** (nova versão datada de outubro de 2025)|x1|

## Objetivos de Aprendizagem

- Conceitos básicos de sistemas de Hardware de Código Aberto.
- Programação básica em Arduino.
- Princípios e métodos de comunicação para sensores.
- Implementação prática de projetos de Hardware de Código Aberto.

### Demo de Desempacotamento Plug and Play

O Grove Beginner Kit possui uma demonstração de desempacotamento plug and play: ao conectar primeiro a alimentação na placa, você tem a chance de experimentar todos os sensores de uma só vez! Use o botão e o potenciômetro rotativo para experimentar cada demonstração de sensor!

![](https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Firmware.jpg)

- **Scroll** -> Girar o Rotary Potentiometer
- **Select** -> Pressionar rapidamente o Button
- **Exit Current Demo** -> Pressionar o Button por tempo longo

Os módulos Buzzer e LED são usados para o aviso de tecla.

## Como Começar com Arduino

### Instalar a Arduino IDE

- A **Arduino IDE** é um ambiente de desenvolvimento integrado para Arduino, usado para programação de software de microcontroladores, gravação, teste e assim por diante.
- Baixe e instale a [Arduino IDE](https://www.arduino.cc/en/Main/Software) para o sistema operacional desejado aqui.

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)

### Instalar o driver USB

- O Arduino se conecta ao PC por meio de um cabo USB. O driver USB depende do tipo de chip USB que você está usando no seu Arduino. *Nota: os chips USB geralmente são impressos na parte de trás da placa de desenvolvimento.*

  - Baixe o [CP2102 USB Driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). **Nota:** Faça o download de acordo com o seu sistema operacional.
  - Após a conclusão da instalação do driver, conecte o Arduino à porta USB do PC com um cabo USB.
    - **Para usuários de Windows:** Você pode vê-lo em `My Computer` -> `Properties` -> `Hardware` -> `Device Management`. Um `COM` irá aparecer.
    - **Para usuários de Mac OS:** Você pode ir até `` no canto superior esquerdo e escolher `About this Mac` -> `System Report...` -> `USB`. Um driver USB CP2102 deve aparecer.
  - Se o driver não estiver instalado, ou se estiver instalado incorretamente (não correspondendo ao modelo do chip), ele aparecerá como um "unknown device" no gerenciador de dispositivos. Neste ponto, o driver deve ser reinstalado.

### Iniciar a Arduino IDE

1.Abra a **Arduino IDE** no seu PC.
2.Clique em `Tools` -> `Board`-> `Arduino AVR Boards`-> `Arduino Uno` para selecionar o modelo correto de placa de desenvolvimento. Selecione **Arduino Uno** como Board.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/uno_board.jpg)

3.Clique em `Tools` -> `Port` para selecionar a porta correta (a porta serial exibida no Gerenciador de Dispositivos na etapa anterior). Neste caso, `COM11` é selecionada. **Para usuários de Mac OS**, deve ser `/dev/cu.SLAB_USBtoUART`.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/port.jpg)

4.Crie um novo arquivo Arduino e nomeie-o `Hello.ino`, depois copie o código a seguir para ele:

```Cpp
void setup() {
  Serial.begin(9600); // initializes the serial port with a baud rate of 9600
}
void loop() {
  Serial.println("hello, world"); // prints a string to a serial port
  delay(1000); //delay of 1 second
}
```

5.No canto superior esquerdo da Arduino IDE, há dois botões, **Verify e Upload**. Primeiro, pressione o botão Verify (✓) para compilar. Após a compilação ser bem-sucedida, pressione o botão Upload (→).

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/func.png)

6.Vá em `Tools` -> `Serial Monitor`, ou clique em **Serial Monitor** no canto superior direito (símbolo de lupa), e você poderá ver os resultados de execução do programa:

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/print.png)

**Nota:** Se você instalou a Arduino IDE portátil a partir do nosso drive USB, você pode encontrar todas as demos de módulos em **Files** -> **Sketch Book**, e todas as bibliotecas dos módulos já vêm pré-instaladas com a Arduino IDE!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sketchbook.png" style={{width:600, height:'auto'}}/></div>

**Nota:**
        Todos os módulos estão pré-cabeados em uma única placa de circuito, portanto não são necessários cabos nem soldagem. No entanto, se você destacar os módulos e quiser conectá-los com cabos Grove, verifique o guia de destaque (Breakout Guide).

## Guia de Aulas

### Lição 1: Piscando com o LED

Concluímos o programa de saída "Hello world". Agora vamos aprender como acender o módulo LED. Sabemos que os três componentes básicos de um sistema de controle são: entrada, controle e saída. Mas acender o LED usa apenas a saída, não a entrada. O Seeeduino é a unidade de controle, o módulo LED é a unidade de saída e o sinal de saída é um sinal digital.

Informações de fundo:

- **O que é sinal digital**

**Sinal digital:** Sinal digital refere-se ao valor cuja amplitude é discreta, sendo a amplitude limitada a um número finito de valores. Em nosso controlador, o sinal digital possui dois estados: LOW(0V) para 0; HIGH(5V) para 1. Portanto, enviar um sinal HIGH para o LED pode acendê-lo.

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/digital.png)

Componentes Envolvidos
    1. Seeeduino Lotus
    2. Grove LED
    3. Cabo Grove (se destacado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED.png)

Conexão de hardware
    - **Conexão do módulo**
        - Conexão padrão por furo de marcação da PCB.
    - Conecte o Seeeduino ao computador através do cabo USB.

-Código de software

    - Abra o Arduino IDE.
    - Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Verifique se não há erros e, então, você pode enviar o código.

```Cpp
//LED Blink
//The LED will turn on for one second and then turn off for one second
int ledPin = 4;
void setup() {
    pinMode(ledPin, OUTPUT);
}
void loop() {
    digitalWrite(ledPin, HIGH);
    delay(1000);
    digitalWrite(ledPin, LOW);
    delay(1000);
}
```

Análise de código

```cpp
setup(){
}
```

A função `setup()` é chamada quando um sketch inicia. Use-a para inicializar variáveis, modos de pino, iniciar o uso de bibliotecas, etc. A função `setup()` será executada apenas uma vez, após cada energização ou reset da placa Arduino.

```cpp
loop(){
}
```

Depois de criar uma função `setup()`, que inicializa e define os valores iniciais, a função `loop()` faz exatamente o que o nome sugere: entra em loop consecutivamente, permitindo que seu programa mude e responda. Use-a para controlar ativamente a placa Arduino.

```cpp
int ledPin = 4;
```

**Descrição:**

Converte um valor para o tipo de dado int.

**Sintaxe:**

int(**x**) ou (int)**x** (conversão de tipo ao estilo C)

**Parâmetros:**

**x**: um valor. Tipos de dados permitidos: qualquer tipo.

Atribui um tipo `int` 4 à variável chamada ledPin.

```cpp
pinMode(ledPin, OUTPUT);
```

**Descrição:**

Configura o pino especificado para se comportar como entrada ou saída. Consulte a página de Pinos Digitais para obter detalhes sobre a funcionalidade dos pinos.

A partir do Arduino 1.0.1, é possível habilitar os resistores de pull-up internos com o modo `INPUT_PULLUP`. Além disso, o modo `INPUT` desabilita explicitamente os pull-ups internos.

**Sintaxe:**

pinMode(**pin, mode**)

**Parâmetros:**

**pin**: o número do pino do Arduino cujo modo será definido.

**mode**: `INPUT`, `OUTPUT` ou `INPUT_PULLUP`.

Definindo ledPin como modo de saída.

```cpp
digitalWrite(ledPin, HIGH);
```

**Descrição:**

Escreve um valor `HIGH` ou `LOW` em um pino digital.

Se o pino tiver sido configurado como OUTPUT com pinMode(), sua tensão será definida para o valor correspondente: 5V (ou 3,3V em placas de 3,3V) para `HIGH`, 0V (terra) para `LOW`.

Se o pino estiver configurado como INPUT, digitalWrite() irá habilitar (HIGH) ou desabilitar (LOW) o pull-up interno no pino de entrada. É recomendado definir pinMode() como `INPUT_PULLUP` para habilitar o resistor de pull-up interno. Consulte o tutorial de Pinos Digitais para mais informações.

Se você não definir pinMode() como OUTPUT e conectar um LED a um pino, ao chamar digitalWrite(HIGH), o LED pode parecer fraco. Sem definir explicitamente pinMode(), digitalWrite() terá habilitado o resistor de pull-up interno, que atua como um grande resistor limitador de corrente.

**Sintaxe:**

digitalWrite(**pin, value**)

**Parâmetros:**

**pin**: o número do pino do Arduino.

**value**: `HIGH` ou `LOW`.

Quando definimos ledPin como saída, HIGH significa enviar nível alto para o pino, o LED acende.

```cpp
digitalWrite(ledPin, LOW);
```

Quando definimos o LED como saída, LOW significa enviar nível baixo para o pino, o LED apaga.

```cpp
delay(1000);
```

**Descrição:**

Pausa o programa pela quantidade de tempo (em milissegundos) especificada como parâmetro. (Há 1000 milissegundos em um segundo.)

**Sintaxe:**

delay(**ms**)

**Parâmetros:**

**ms**: o número de milissegundos para pausar. Tipos de dados permitidos: unsigned long.

Atrasar o programa em 1000 ms (1 s).

**Efeito da demonstração e resultado da impressão serial:**

O módulo LED ficará 1 segundo ligado e 1 segundo desligado.

**Ajuste de brilho do LED:**

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED-res.jpeg" /></div>
  <br />
</div>

No módulo Grove LED, há um **resistor variável que pode ser ajustado usando uma chave de fenda.** Gire-o para fazer a luz do LED ficar mais brilhante!

Guia de breakout

Se os módulos forem destacados da placa, use um cabo Grove para conectar o **Grove LED** à interface digital **D4** do Seeeduino Lotus.  

### Lição 2: Pressionando o botão para acender o LED

A primeira coisa que precisamos saber é que a entrada do botão é um sinal digital, e há apenas dois estados, 0 ou 1, então podemos controlar a saída com base nesses dois estados.

- **Prática:** Usar o botão para ligar e desligar o módulo LED

Componentes envolvidos

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Button
    4. Cabos Grove (se destacados)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Button.png)

Conexão de hardware

    - **Conexão do módulo:**
        - Conexão padrão por furo de marcação da PCB.
    - O Seeeduino é então conectado ao computador por meio de um cabo USB.

- **Análise de hardware**:
  - Entrada: botão
  - Controle: Seeeduino
  - Saída: módulo LED

Tanto o sensor quanto o LED usam sinais digitais, portanto devem ser conectados a interfaces digitais.

- **Código de software**:
  - Abra o Arduino IDE.
  - Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Verifique se não há erros e, então, você pode enviar o código.

```Cpp
//Button to turn ON/OFF LED
//Constants won't change. They're used here to set pin numbers:
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  4;      // the number of the LED pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

Análise de código

```cpp
pinMode(ledPin, OUTPUT);
```

Defina o LED como unidade de saída.

```cpp
pinMode(buttonPin, INPUT);
```

Defina o botão como unidade de entrada.

```cpp
buttonState = digitalRead(buttonPin);
```

**Descrição:**

Lê o valor de um pino digital especificado, `HIGH` ou `LOW`.

**Sintaxe:**

digitalRead(**pin**)

**Parâmetros:**

**pin**: o número do `pin` do Arduino que você deseja ler

Esta função é usada para ler os estados dos pinos digitais, HIGH ou LOW. Quando o botão é pressionado, o estado é HIGH, caso contrário é LOW.

```cpp
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

**Descrição:**

O if…​else permite maior controle sobre o fluxo do código do que a instrução if básica, ao permitir que vários testes sejam agrupados. Uma cláusula else (se existir) será executada se a condição na instrução if resultar em falso. O else pode ser seguido por outro teste if, de modo que vários testes mutuamente exclusivos possam ser executados ao mesmo tempo.

Cada teste prosseguirá para o próximo até que um teste verdadeiro seja encontrado. Quando um teste verdadeiro é encontrado, seu bloco de código associado é executado e o programa então salta para a linha seguinte de toda a construção if/else. Se nenhum teste se mostrar verdadeiro, o bloco else padrão é executado, se estiver presente, e define o comportamento padrão.

Observe que um bloco else if pode ser usado com ou sem um bloco else final e vice‑versa. É permitido um número ilimitado de tais ramificações else if.

**Sintaxe:**

```cpp
if (condition1) {
  // do Thing A
}
else if (condition2) {
  // do Thing B
}
else {
  // do Thing C
}
```

O uso da instrução é: se a expressão lógica entre parênteses for verdadeira, execute a instrução entre chaves após **if**, caso contrário, execute a instrução entre chaves após **else**. Se o estado do botão for alto, o pino do LED gera nível alto e acende o LED, caso contrário apaga o LED.

**Efeito da demonstração e resultado da impressão serial:**

Pressionar o botão ligará o módulo LED.

Guia de breakout

Use um cabo Grove para conectar o Grove LED à interface digital **D4** do Seeeduino Lotus. Conecte o Grove Button à interface digital **D6**.

### Lição 3: Controlando a frequência do piscar

Na última seção, estudamos que o botão tem apenas dois estados, estado ON/OFF correspondendo a 0V e 5V, mas na prática, muitas vezes encontramos a necessidade de muitos estados, não apenas 0V e 5V. Então você precisa usar sinal analógico! O potenciômetro rotativo é um exemplo clássico que usa um sinal analógico.

Informações de fundo:

- **O que é sinal analógico**

**Sinais analógicos:** Os sinais variam continuamente no tempo e em valor, e a amplitude, frequência ou fase do sinal muda continuamente a qualquer momento, como o sinal de som da transmissão atual, ou sinal de imagem, etc. O sinal analógico tem onda senoidal, onda triangular e assim por diante. Os pinos analógicos do seu microcontrolador podem ter entre 0V e 5V mapeados para um intervalo entre 0 e 1023, onde 1023 é mapeado como 5V e 512 é mapeado como 2,5V, etc.

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/analog.png)

Componentes envolvidos
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Rotary Switch
    4. Cabos Grove (se destacados)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/rotary.png)

Conexão de hardware
    - **Conexão do módulo:**
        - Conexão padrão por furo de marcação da PCB.
    - O Seeeduino é então conectado ao computador por meio de um cabo USB.

- **Análise de hardware:**

  - Entrada: potenciômetro rotativo
  - Controle: Seeeduino Lotus
  - Saída: módulo LED

A entrada é um sinal analógico, portanto é conectada à interface de sinal analógico, o módulo LED é conectado à interface de sinal digital.

Software

    - Abra o Arduino IDE.
    - Copie o código a seguir, clique em Verify para verificar se há erros de sintaxe. Verifique se não há erros e, então, você poderá enviar o código para a placa.

```Cpp
//Rotary controls LED
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
int rotaryValue = 0;  // variable to store the value coming from the rotary

void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
  pinMode(rotaryPin, INPUT);
}

void loop() {
  // read the value from the sensor:
  rotaryValue = analogRead(rotaryPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(rotaryValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(rotaryValue);
}
```

Análise de Código

```cpp
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
```

**Descrição:**

Você pode notar que definimos rotatePin e ledPin de maneiras diferentes. Isso ocorre porque o potenciômetro rotativo gera um sinal analógico, e o LED é controlado por um sinal digital.

Para **definir um pino analógico**, use A + o número do pino (por exemplo aqui `A0`).

Para **definir um pino digital**, use apenas o número do pino (por exemplo aqui `4`).

```cpp
rotaryValue = analogRead(rotaryPin);
```

**Descrição:**

Lê o valor do pino analógico especificado. As placas Arduino contêm um conversor analógico‑digital multicanal de 10 bits. Isso significa que ele irá mapear tensões de entrada entre 0 e a tensão de operação (5V ou 3,3V) em valores inteiros entre 0 e 1023. Em um Arduino UNO, por exemplo, isso resulta em uma resolução entre leituras de: 5 volts / 1024 unidades ou 0,0049 volts (4,9 mV) por unidade.

**Sintaxe:**

analogRead(**pin**)

**Parâmetros:**

**pin**: o nome do pino de entrada analógica a ser lido (A0 a A5 na maioria das placas).

**Retorno:** A leitura analógica no pino. Embora seja limitada à resolução do conversor analógico‑digital (0–1023 para 10 bits ou 0–4095 para 12 bits). Tipo de dado: int.

Esta função é usada para ler o valor dos pinos analógicos (a posição do sensor rotativo), o intervalo de valores é: 0 ~ 1023.

```cpp
delay(rotaryValue);
```

Função de atraso. A duração, em milissegundos, do atraso é o valor entre parênteses. Como este valor é o valor do sinal analógico do pino do botão que está sendo lido, o tempo de atraso pode ser controlado pelo botão.

**Efeito da Demonstração e Resultado do Serial Print:**

Girar o potenciômetro mudará a frequência de piscar do LED.

Guia de Breakout

Use um cabo Grove para conectar o LED à interface digital **D4** do Seeeduino Lotus e um cabo Grove para conectar o Grove Rotary Switch à interface de sinal analógico **A0**.

### Lição 4: Fazendo o Buzzer emitir BEEP

Assim como o módulo de LED, o buzzer também é um módulo de saída; em vez de acender, ele produz um som de beep. Isso pode ser usado em muitas situações para fins de indicação. Vamos aprender como gerar som usando o buzzer!

Informações de fundo:

- **Qual é a diferença entre Buzzer Ativo e Passivo**

 Existem dois tipos de buzzers, um é **ativo** e o outro é **passivo**. Tanto buzzers ativos quanto passivos são usados para produzir som em dispositivos eletrônicos.

  O **buzzer ativo** possui uma fonte de oscilação interna que faz o buzzer soar sempre que a alimentação é aplicada. Buzzers ativos são amplamente usados em computadores, impressoras, copiadoras, alarmes, brinquedos eletrônicos, eletrônicos automotivos, telefones, temporizadores e outros dispositivos eletrônicos de sinalização sonora.

  Um **buzzer passivo** não possui fonte interna de oscilação e precisa ser acionado por **uma onda quadrada** e **uma frequência diferente**. Ele atua como um alto‑falante eletromagnético, e o sinal de entrada variável produz som, em vez de gerar um tom automaticamente.

 <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/buzzer-ap.jpg" /></div>

Neste kit, o **Grove-Buzzer é um buzzer passivo**, portanto precisa de um sinal AC para ser controlado. Isso leva à próxima pergunta: como gerar onda quadrada (sinais AC) com Arduino! Bem, uma maneira fácil é usar PWM.

- **O que é PWM**

**Pulse Width Modulation, ou PWM**, é uma técnica para obter resultados analógicos por meios digitais. O controle digital é usado para criar uma onda quadrada, um sinal alternando entre ligado e desligado. Esse padrão liga‑desliga pode simular tensões entre totalmente ligado (5 volts) e desligado (0 volts) alterando a fração de tempo em que o sinal permanece ligado em relação ao tempo em que permanece desligado. A duração do "tempo ligado" é chamada de largura de pulso. Para obter valores analógicos variáveis, você altera, ou modula, essa largura de pulso. Se você repetir esse padrão liga‑desliga rápido o suficiente, o resultado será como se o sinal fosse uma tensão contínua entre 0 e 5V como um sinal AC. *Referência: [Arduino](https://www.arduino.cc/en/tutorial/PWM)*. Este sinal PWM pode então ser usado para controlar o buzzer passivo com facilidade.

Para gerar sinais PWM no Arduino, você pode usar **`analogWrite()`**, em contraste com o uso de `digitalWrite()` para gerar sinais DC.

Há seis pinos digitais no seu Seeeduino que são marcados com o símbolo “~”, o que significa que podem enviar um sinal PWM: 3, 5, 6, 9, 10, 11. Eles são chamados de pinos PWM.

Componentes Envolvidos

    1. Seeeduino Lotus
    2. Grove Buzzer
    3. Cabo Grove (em caso de Breakout)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Buzzer.png)

Conexão de Hardware

    - **Conexão do módulo**
        - Conexão padrão pelo furo de estampagem da PCB.
    - Conecte o Seeeduino ao computador por meio do cabo USB.

Código de Software

    - Abra a Arduino IDE.
    - Copie o código a seguir, clique em Verify para verificar se há erros de sintaxe. Verifique se não há erros e, então, você poderá enviar o código para a placa.

```Cpp
int BuzzerPin = 5;

void setup() {
  pinMode(BuzzerPin, OUTPUT);
}

void loop() {
  analogWrite(BuzzerPin, 128);
  delay(1000);
  analogWrite(BuzzerPin, 0);
  delay(0);
}
```

Análise de Código

```cpp
analogWrite(BuzzerPin, 128);
```

**Descrição:**

Escreve um valor analógico (onda PWM) em um pino. Pode ser usado para acender um LED com diferentes brilhos ou acionar um motor em várias velocidades. Após uma chamada a analogWrite(), o pino gerará uma onda retangular estável com o ciclo de trabalho especificado até a próxima chamada a analogWrite() (ou uma chamada a digitalRead() ou digitalWrite()) no mesmo pino.

**Sintaxe:**

analogWrite(**pin, value**)

**Parâmetros:**

**pin**: o `pin` do Arduino no qual escrever. Tipos de dados permitidos: int.

**value**: o ciclo de trabalho: entre `0` (sempre desligado) e `255` (sempre ligado). Tipos de dados permitidos: int.

Escreve um valor analógico (onda PWM) no buzzer.

**Efeito da Demonstração e Resultado do Serial Print:**

O buzzer emite beeps.

Guia de Breakout

Use um cabo Grove para conectar o Grove Buzzer à interface digital **D5** do Seeeduino Lotus.

-----

Uso de PWM

Agora que aprendemos o uso de PWM, além de usar PWM para controlar o buzzer passivo, também podemos usar PWM para controlar a velocidade do motor e **o brilho das luzes de LED**, etc.

Como indicado no diagrama abaixo, use `analogWrite()` para gerar ondas PWM; quanto maior a porcentagem de ciclo de trabalho, mais brilhante o LED.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/PWM-LED.png" /></div>

No entanto, o módulo de LED no Grove Beginner Kit não pode ser controlado diretamente por PWM, porque o módulo de LED está conectado ao D4 e, como mencionado acima, os pinos PWM são 3, 5, 6, 9, 10, 11, e o pino 4 não é um pino PWM. Se você quiser controlar o LED com PWM, precisa destacá‑lo da placa e usar o cabo Grove para conectá‑lo à porta Grove com função PWM.

Por exemplo, vamos conectar o **Grove-LED ao D3 usando um cabo Grove**:

!!!Note
    O D3 também é interconectado ao Grove-Temperature & Humidity Sensor e, portanto, este exemplo não pode ser usado junto com o Grove-Temperature & Humidity Sensor.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/pwmled-connect.png" /></div>

```cpp
int LED = 3; // Cable connection from LED to D3
int Potentiometer = A0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(Potentiometer, INPUT);
}

void loop() {
  int potentioValue, Value;
  potentioValue = analogRead(Potentiometer);
  Value = map(potentioValue, 0, 1023, 0, 255); //Mapping potentiometer value to PWM signal value
  analogWrite(LED, Value);
}
```

**Compile e envie** o código e você deverá conseguir girar o botão e ajustar o brilho do LED usando sinais PWM!

Análise de Código

```cpp
Value = map(potentioValue, 0, 1023, 0, 255);
```

**Descrição:**

Remapeia um número de um intervalo para outro. Ou seja, um valor de **fromLow** será mapeado para **toLow**, um valor de **fromHigh** para **toHigh** e valores intermediários para valores intermediários, etc.

Não restringe os valores ao intervalo, porque valores fora do intervalo às vezes são intencionais e úteis. A função `constrain()` pode ser usada antes ou depois desta função, se limites aos intervalos forem desejados.

Observe que os "limites inferiores" de qualquer intervalo podem ser maiores ou menores que os "limites superiores", portanto a função `map()` pode ser usada para inverter um intervalo de números, por exemplo

**y = map(x, 1, 50, 50, 1);**

A função também lida bem com números negativos, de modo que este exemplo

**y = map(x, 1, 50, 50, -100);**

também é válido e funciona bem.

A função map() usa matemática inteira, portanto não gerará frações, mesmo quando o cálculo possa indicar que isso deveria acontecer. Os restos fracionários são truncados e não são arredondados nem promediados.

**Sintaxe:**

map(**value, fromLow, fromHigh, toLow, toHigh**)

**Parâmetros:**

**value**: o número a ser remapeado.

**fromLow**: o limite inferior do intervalo atual do valor.

**fromHigh**: o limite superior do intervalo atual do valor.

**toLow**: o limite inferior do intervalo de destino do valor.

**toHigh**: o limite superior do intervalo de destino do valor.

Mapeando o sinal analógico do sensor potenciômetro (0 a 1023) para o nível de brilho da luz (0 a 255).

**Efeito de demonstração e resultado da impressão Serial:**

Ajuste o potenciômetro para ajustar o brilho do LED.

Em resumo, quando quiser usar a função PWM, certifique-se de selecionar aqueles pinos com um símbolo "~" na frente de seus nomes.

### Lição 5:  Fazendo um LED sensível à luz

O sensor de luz contém um resistor fotosensível para medir a intensidade da luz. A resistência do resistor fotosensível diminui com o aumento da intensidade da luz. O LED acenderá se o ambiente estiver escuro e ficará apagado se o ambiente estiver claro.

Nas seções a seguir, usaremos o Serial Monitor para observar os resultados dos nossos sensores, então aqui vai uma breve introdução!

Informações de fundo:

- **O que é o Serial Monitor**

Serial Monitor é uma ferramenta útil para observar resultados no Arduino, podendo ser muito útil para imprimir resultados dos sensores ou para depuração em geral. Você também pode enviar dados de volta ao controlador via Serial Monitor para executar certas tarefas! Observação: certifique-se de que a transferência de dados Serial corresponda ao código.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Serial.jpg)

Você pode abrir o Serial Monitor clicando em **Tools** -> **Serial Monitor**.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/20200217144001.jpg)

Componentes envolvidos

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Light Sensor
    4. Cabo Grove (se estiver destacado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Light.png)

Conexão de hardware

    - **Conexão do módulo:**
        - Conexão padrão pelo furo de marcação da placa (PCB).
    - Em seguida, o Seeeduino é conectado ao computador por um cabo USB.

- **Análise de hardware:**

  - Entrada: Light Sensor
  - Controle: Seeeduino Lotus
  - Saída: módulo LED

Código de software

    - Abra o Arduino IDE.
    - Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Verifique se não há erros, e então faça o upload do código.

```Cpp
// Light Switch
int sensorpin = A6; // Analog input pin that the sensor is attached to
int ledPin = 4;    // LED port
int sensorValue = 0;        // value read from the port
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {
  pinMode(ledPin,OUTPUT);
  pinMode(sensorpin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(sensorpin);

  Serial.println(sensorValue);

  if (sensorValue < 200) {
    digitalWrite(ledPin, HIGH);
  }
  else {
    digitalWrite(ledPin, LOW);
  }

  delay(200);
}
```

Você também pode ver as leituras de intensidade de luz no **Serial Monitor**, navegando até **Tools** -> **Serial Monitor**.

Análise de código

```cpp
Serial.begin(9600);
```

**Descrição:**

Define a taxa de dados em bits por segundo (baud) para transmissão de dados Serial. Para se comunicar com o Serial Monitor, certifique-se de usar uma das taxas de baud listadas no menu no canto inferior direito da tela. No entanto, você pode especificar outras taxas – por exemplo, para se comunicar pelos pinos 0 e 1 com um componente que exija uma taxa de baud específica.

Um segundo argumento opcional configura os bits de dados, paridade e bits de parada. O padrão é 8 bits de dados, sem paridade, um bit de parada.

O software em execução no computador se comunica com a placa de desenvolvimento, e a taxa de baud é 9600.

**Sintaxe:**

Serial.begin(**speed**)

**Parâmetros:**

**speed**: Velocidade da comunicação Serial, por exemplo `9600`, `115200` etc.

Define a taxa de baud Serial para 9600.

```cpp
Serial.println(sensorValue);
```

**Descrição:**

Imprime dados na porta Serial como texto ASCII legível por humanos, seguido por um caractere de retorno de carro (ASCII 13, ou '\r') e um caractere de nova linha (ASCII 10, ou '\n'). Este comando aceita as mesmas formas que Serial.print().

**Sintaxe:**

Serial.println(**val**) ou Serial.println(**val**, **format**)

**Parâmetros:**

**val**: o valor a ser impresso. Tipos de dados permitidos: qualquer tipo de dado.

**format**: especifica a base numérica (para tipos de dados integrais) ou o número de casas decimais (para tipos de ponto flutuante).

A porta Serial imprime o valor do sensor de luz. Então você abre o **serial monitor** na interface da IDE e vê o valor do sensor de saída.

**Efeito de demonstração e resultado da impressão Serial:**

O módulo LED acenderá se estiver escuro e ficará apagado se estiver claro.

Guia de breakout

Use um cabo Grove para conectar o Grove LED à interface de sinal digital **D4** do Seeeduino Lotus, conecte o Grove Light Sensor à interface de sinal analógico **A6** do Seeeduino Lotus.

### Lição 6: Luz LED sensível ao som

O sensor de som pode detectar a intensidade sonora do ambiente, e sua saída também é analógica. Tenho certeza de que todos vocês já tiveram contato com luzes controladas por som, mas agora podemos fazer uma nós mesmos, e com o básico, este experimento será fácil para você. Aqui foi usado o Serial Plotter para visualizar os resultados.

Informações de fundo:

- **O que é o Serial Plotter**

Serial Plotter é semelhante ao Serial Monitor, permitindo que você faça o gráfico de dados seriais do seu Arduino para o computador em tempo real de forma nativa. Isto é muito útil quando os dados precisam ser visualizados.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/SerialPlotter.png)

Você pode abrir o Serial Plotter clicando em **Tools** -> **Serial Plotter**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/serialplot.jpg" style={{width:400, height:'auto'}}/></div>

- **Prática:** As luzes de LED acendem quando o som é produzido. Quando não há som e está muito silencioso, as luzes de LED se apagam.

Componentes envolvidos

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove Sound Sensor
    4. Cabo Grove (se estiver destacado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sound.png)

Conexão de hardware

    - **Conexão do módulo:**
        - Conexão padrão pelo furo de marcação da placa (PCB).
    - Em seguida, o Seeeduino é conectado ao computador por um cabo USB.

Código de software

    - Abra o Arduino IDE.
    - Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Verifique se não há erros, e então faça o upload do código.

```Cpp
//Sound Control Light
int soundPin = A2; // Analog sound sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital
void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(soundPin, INPUT);
  Serial.begin(9600);
}
void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  Serial.println(soundState);
  // if the sound sensor’s value is greater than 400, the light will be on.
  //Otherwise, the light will be turned off
  if (soundState > 400) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  }else{
    digitalWrite(ledPin, LOW);
  }
}
```

Você também pode ver as leituras de intensidade de luz no **Serial Plotter**, navegando até **Tools** -> **Serial Plotter**.

**Observação: você também pode ajustar o valor de acordo com a intensidade de luz do seu ambiente.**

Análise de código

```cpp
Serial.begin(9600);
```

O software em execução no computador se comunica com a placa de desenvolvimento, e a taxa de baud é 9600.

```cpp
Serial.print(" ");
```

Esta função é usada para enviar dados pela porta Serial; a saída é o que está contido entre as aspas duplas.

```cpp
Serial.println( );
```

Esta instrução é semelhante à acima, exceto que **serial.println** possui um retorno de nova linha.

```cpp
Serial.println(soundState);
```

A porta Serial imprime o valor do sensor de som. Então você abre o **serial monitor** na interface da IDE e vê o valor do sensor de saída.

**Efeito de demonstração e resultado da impressão Serial:**

O módulo LED acenderá se o som ao redor for suficientemente alto.

Guia de breakout

Use cabos Grove para conectar o Grove LED à interface de sinal digital **D4** do Seeeduino Lotus, conecte o Grove Sound Sensor à interface de sinal analógico **A2** do Seeeduino Lotus.

### Lição 7: Exibindo dados no OLED

O display OLED pode ser usado em muitas situações, onde você pode usá-lo para visualizar leituras de sensores!

Informações de fundo:

- **O que são as bibliotecas do Arduino**

O ambiente Arduino pode ser estendido por meio do uso de bibliotecas, assim como a maioria das outras plataformas de programação. As bibliotecas fornecem funcionalidades extras para uso nos sketches, por exemplo, trabalhar com hardware específico ou manipular dados. Para usar uma biblioteca em um sketch, selecione-a em **Sketch** ->**Include Library**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/zip.jpg" style={{width:500, height:'auto'}}/></div>

Para mais informações, visite também [How to install Arduino Libraries](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

Componentes envolvidos

    1. Seeeduino Lotus
    2. Grove OLED
    3. Cabo Grove (se estiver destacado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/OLED.png)

Conexão de hardware

    - **Conexão do módulo:**
        - Conexão padrão pelo furo de marcação da placa (PCB).
    - Em seguida, o Seeeduino é conectado ao computador por um cabo USB.

Código de software

    - Abra o Arduino IDE.
    - Instale a **biblioteca U8g2**: Navegue até **Sketch** -> **Include Library** -> **Manage Libraries...** e procure pela palavra‑chave "**U8g2**" no **Library Manager**. É a **u8g2 library by oliver**, e então clique em instalar.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/U8g2-lib.png)

- Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Verifique se não há erros, e então faça o upload do código.

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

 U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  //u8x8.setBusClock(100000);  // If you breakout other modules, please enable this line
  u8x8.begin();
  u8x8.setFlipMode(1);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

!!!Attention
  Se você separar todos os módulos e usar o Grove OLED separadamente, talvez ele não funcione com este código. Se encontrar esse tipo de problema, consulte o final desta seção: Breakout Guide.

- **Análise de código**

```cpp
#include <>
```

**Descrição:**

`#include` é usado para incluir bibliotecas externas no seu sketch. Isso dá ao programador acesso a um grande grupo de bibliotecas padrão de C (grupos de funções pré‑prontas) e também a bibliotecas escritas especialmente para Arduino.

Observe que `#include`, semelhante a `#define`, não tem ponto e vírgula no final, e o compilador gerará mensagens de erro confusas se você adicionar um.

```cpp
#include <U8x8lib.h>
```

**#include** é uma instrução que introduz um arquivo de cabeçalho. Aqui usamos a biblioteca U8x8lib.h.

```cpp
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  
```

**Nota**

Se você separar outros módulos e usar apenas o OLED, será necessário usar I2C por software:

```cpp
// U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  

U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE); 
```

**Descrição:**

Depois que o objeto é declarado, você pode usar funções da biblioteca.

```cpp
u8x8.begin();
```

**Descrição:**

Procedimento simplificado de configuração do display para o ambiente Arduino. Consulte o guia de configuração para a seleção de um construtor U8g2 adequado.

**Sintaxe:**

u8x8.begin()

Inicializa a biblioteca u8g2

```cpp
u8x8.setFlipMode(1);
```

**Descrição:**

Alguns displays suportam uma rotação de 180 graus do frame buffer interno. Esse recurso de hardware pode ser controlado com este procedimento. Importante: redesenhe o display completo após alterar o modo de inversão. O ideal é limpar o display primeiro, depois alterar o modo de inversão e, por fim, redesenhar o conteúdo. Os resultados serão indefinidos para qualquer conteúdo existente na tela.

**Sintaxe:**

u8x8.setFlipMode(**mode**)

**Parâmetros:**

**mode**: `0` ou `1`

Inverte o display em 180 graus.

```cpp
u8x8.setCursor();
```

**Descrição:**

Define o cursor para a função print. Qualquer saída da função print começará nessa posição.

**Sintaxe:**

u8x8.setCursor(**x, y**)

**Parâmetros:**

**x, y**: posição de coluna/linha para o cursor da função print.

Define a posição do cursor de desenho.

```cpp
u8x8.setFont()
```

**Descrição:**

Define uma fonte u8x8 para as funções de desenho de glifos e strings.

**Sintaxe:**

u8x8.setFont(**font_8x8**)

Define a fonte para o display.

```cpp
u8x8.print();
```

Desenha o conteúdo no OLED.

**Efeito de demonstração e resultado do Serial Print:**

Imprime Hello World no Display OLED.

**Referência da biblioteca U8g2**

Se você quiser mais informações sobre a biblioteca U8g2, consulte [aqui](https://github.com/olikraus/u8g2/wiki/u8g2reference).

Guia de Breakout

Use o cabo Grove para conectar o OLED à interface **I2C** do Seeeduino Lotus (Observação: o endereço padrão do I2C é 0x78).

!!!Note
    - Se você separar outro módulo para usar o OLED e ele não funcionar, ou se quiser usar o I2C do OLED mais rápido (padrão: 40KHZ), siga esta instrução:

  Clique em "This PC" -> Documents -> Arduino -> libraries -> U8g2 -> src -> U8x8lib.cpp -> Role até a linha 1334 -> exclua ou desabilite esta linha -> salve o arquivo.

  ```CPP
  Wire.setClock(u8x8->bus_clock);   // just delete or disable this line
  ```

 Ou você pode definir o bloqueio do barramento para 100000 e então adicionar no setup().

```cpp
void setup(void) {
  u8x8.setBusClock(100000); //  it for limit the I2C bus clock
  u8x8.begin();
  u8x8.setFlipMode(1);
}
```

### Lição 8: Detectando a temperatura e umidade ao redor

Você já se perguntou qual é a temperatura e a umidade do seu entorno? Quer saber o número exato? Quer decidir se vai usar saia ou casaco hoje dependendo da temperatura? Vamos fazer um termômetro!

Informações de fundo:

- **O que é sinal de protocolo (I2C)**

**Sinal de protocolo:** o sinal de protocolo que usamos é I2C, então aqui está uma breve introdução ao I2C. O barramento I2C precisa de apenas dois fios na conexão de transmissão de informações entre os dispositivos: o SDA (Serial Data Line) e o SCL (Serial Clock Line).

Essas duas linhas são linhas de E/S bidirecionais, o componente principal usado para iniciar a transferência de dados no barramento e gerar o clock para habilitar o dispositivo de transmissão; qualquer dispositivo que esteja sendo endereçado nesse momento é considerado o dispositivo escravo.

A relação entre mestre e escravo (remetente e receptor) no barramento não é constante, mas depende da direção da transmissão de dados. Se o host quiser enviar dados para o dispositivo escravo, o host primeiro endereça o dispositivo escravo, depois envia ativamente os dados para o dispositivo escravo e, por fim, termina a transmissão de dados. Se o host for receber dados do escravo, este é primeiro endereçado pelo mestre.

O host então recebe os dados enviados pelo dispositivo, e o host termina o processo de recebimento. Nesse caso, o host é responsável por gerar o clock de temporização e encerrar a transferência de dados.

- **Prática:** Faça o seu Display OLED exibir a temperatura e umidade ambiente atuais.

Componentes envolvidos

    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove Temperature and Temperature Sensor
    4. Cabo Grove (se separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp.png)

Conexão de hardware

    - **Conexão do módulo:**
        - Conexão padrão pelo furo de marcação da PCB.
    - Em seguida, o Seeeduino é conectado ao computador por meio de um cabo USB.

**Nota**

Alguns kits atualizados foram equipados com DHT20. Se o seu Detector de Umidade e Temperatura no kit for preto, então o detector é DHT20 e o código de exemplo dele vem depois do DHT11.

Código de software (DHT11)

    - Abra o Arduino IDE.
    - Baixe e instale a [biblioteca](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) necessária.
    - Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Verifique se não há erros e então você pode enviar o código.

```Cpp
//Temperature and Humidity Sensor
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>

#define DHTPIN 3     // what pin we're connected to
#define DHTTYPE DHT11   // DHT 11 
DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(9600); 
  Serial.println("DHTxx test!");
  dht.begin();
  u8x8.begin();
  u8x8.setPowerSave(0);  
  u8x8.setFlipMode(1);
}

void loop(void) {

  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("Temp:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("Humidity:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

Código de software (DHT20)

    - Abra o Arduino IDE.
    - Baixe e instale a [biblioteca](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) necessária.
    - Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Verifique se não há erros e então você pode enviar o código.

```cpp
//Temperature and Humidity Sensor
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>
#include "Wire.h"

#define DHTTYPE DHT20   // DHT 20

DHT dht(DHTTYPE);  
#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
  dht.begin();
  u8x8.begin();
  u8x8.setPowerSave(0);  
  u8x8.setFlipMode(1);
}

void loop(void) {

  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("Temp:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("Humidity:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

Clique em "Monitor" no canto superior direito e verifique o resultado.

Análise de código

```cpp
float temp, humi;
```

Define variáveis para armazenar as leituras.

```cpp
temp = dht.readTemperature();
humi = dht.readHumidity();
```

**Descrição:**

Funções a serem usadas para ler os valores de temperatura e umidade do sensor.

**Sintaxe:**

**dht.readTemperature()** e **dht.readHumidity()**. Tipo de retorno: float.

Chame essas funções para ler a temperatura e a umidade e armazená‑las nas variáveis definidas.

**Efeito de demonstração e resultado do Serial Print:**

A temperatura e a umidade ao redor aparecem na tela do OLED.

Guia de Breakout

Use o cabo Grove para conectar o OLED à interface **I2C** do Seeeduino Lotus (Observação: o endereço padrão do I2C é 0x78). Conecte o Grove Temperature and Humidity Sensor à interface de sinal digital **D3** do Seeeduino Lotus.

### Lição 9: Medindo a pressão do ar ao redor

O Grove Air Pressure Sensor é uma placa de breakout para medição de pressão atmosférica. A versão anterior (antes de outubro de 2025) usava o sensor BMP280, enquanto a nova versão (após outubro de 2025) usa o sensor SPA06-003. Ambos os sensores podem medir com precisão a temperatura e a pressão atmosférica. Como a pressão atmosférica varia com a altitude, eles também podem medir a altitude aproximada de um lugar.

Componentes envolvidos
    1. Seeeduino Lotus
    2. Grove Air Pressure Sensor (BMP280 ou SPA06-003)
    3. Cabo Grove (se separado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/AirPressure.png)

Conexão de hardware
    - **Conexão do módulo:**
        - Conexão padrão pelo furo de marcação da PCB.
    - Em seguida, o Seeeduino é conectado ao computador por meio de um cabo USB.

Código de software

#### Para BMP280 (versão anterior a outubro de 2025)

    - Abra o Arduino IDE.
    - Instale a **Grove Barometer Sensor library**: Navegue até **Sketch** -> **Include Library** -> **Manage Libraries...** e pesquise pela palavra‑chave "**Grove BMP280**" no **Library Manager**, depois instale.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BMP-lib.png)

- Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Confirme que não há erros e você poderá enviar o código.
- Neste programa, as informações do sensor barômetro são enviadas do sensor para o Seeeduino via barramento I2C e então o Seeeduino as imprime no monitor serial. Abra o **monitor serial** para verificar o resultado.

```cpp
//Air pressure detection
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup() {
    Serial.begin(9600);
    if (!bmp280.init()) {
        Serial.println("Device not connected or broken!");
    }
}

void loop() {

    float pressure;

    //get and print temperatures
    Serial.print("Temp: ");
    Serial.print(bmp280.getTemperature());
    Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

    //get and print atmospheric pressure data
    Serial.print("Pressure: ");
    Serial.print(pressure = bmp280.getPressure());
    Serial.println("Pa");

    //get and print altitude data
    Serial.print("Altitude: ");
    Serial.print(bmp280.calcAltitude(pressure));
    Serial.println("m");

    Serial.println("\n");//add a line between output of different times.

    delay(1000);
}
```

Análise de Código

```cpp
#include <Wire.h>
```

**#include** é uma instrução que introduz um arquivo de cabeçalho. Aqui usamos a biblioteca Wire.h, essa biblioteca está incluída na IDE Arduino.

```cpp
#include "Seeed_BMP280.h"
```

Representa o arquivo de cabeçalho Seeed_BMP280.h que introduz o caminho atual.

```cpp
if (!bmp280.init()) {
    Serial.println("Device not connected or broken!");
}
```

**Descrição:**

Para inicializar o sensor de pressão de ar usando bmp280.init(). Além disso, usando a condição if para verificar se ele iniciou corretamente, então pula a mensagem. Se tiver problema para iniciar, imprime a mensagem, pois ! significa NOT (NÃO) em programação.

**Sintaxe:**

**bmp280.init()**

se o sensor de pressão de ar não iniciar corretamente, então imprime um erro no monitor serial.

```cpp
Serial.print(bmp280.getTemperature());
```

**Descrição:**

Funções a serem usadas para ler o valor de temperatura do sensor.

**Sintaxe:**

**bmp280.getTemperature()**. Tipo de retorno: float

Imprime os dados de temperatura no monitor serial.

```cpp
Serial.print(pressure = bmp280.getPressure());
```

**Descrição:**

Funções a serem usadas para ler o valor da pressão de ar do sensor.

**Sintaxe:**

**bmp280.getPressure()**. Tipo de retorno: float

Imprime a pressão de ar atual.

```cpp
Serial.print(bmp280.calcAltitude(pressure));
```

**Descrição:**

Pega o valor da pressão e pode converter para altitude.

**Sintaxe:**

bmp280.calcAltitude(**float**). Tipo de retorno: float

**Parâmetro:**

**float**: Valor de pressão.

Imprime a altitude.

**Efeito de Demonstração e Resultado de Impressão Serial:**

As leituras de pressão de ar são exibidas no Serial Monitor.

Guia de Breakout

Use o cabo Grove para conectar o Grove Air Pressure Sensor à interface **I2C** do Seeeduino Lotus usando um cabo Grove (nota: o endereço padrão I2C é 0x77 ou 0x76).

#### Para SPA06-003 (Nova versão após outubro de 2025)

O SPA06-003 é um sensor barométrico de alta precisão que pode medir tanto pressão quanto temperatura. Veja como usá-lo com Arduino:

**Instalação da Biblioteca:**

- Baixe e instale a [biblioteca SPL07-003](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06) para Arduino

- A biblioteca fornece funções para ler pressão, temperatura e calcular altitude

**Descrição:** Este programa faz interface com o sensor de pressão e temperatura SPL07-003 para monitorar continuamente as condições atmosféricas. Ele inicializa o sensor com configurações específicas de amostragem (4Hz para pressão com 32 amostras, 4Hz para temperatura com 1 amostra) e lê, em tempo real, valores de pressão, temperatura e altitude calculada, exibindo os resultados via comunicação serial.

```cpp
#include <Wire.h>
#include "SPL07-003.h"

// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start I2C
  //Wire.setSDA(PB7); //for STM32F103C8Tx
  //Wire.setSCL(PB6); //for STM32F103C8Tx
  Wire.begin();

  // Connect to SPL07-003
  if (spl.begin(SPL07_ADDR,&Wire) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

### Lição 10: Sentindo Movimento

Este é o último sensor, o acelerômetro triaxial, e com este módulo você pode facilmente adicionar monitoramento de movimento ao seu projeto. Assim, podemos fazer muitas experiências pequenas e interessantes com base no movimento.

- **Prática:** quando o movimento é detectado, o buzzer emite um alarme indicando que o objeto está em movimento.

Componentes Envolvidos

    1. Seeeduino Lotus
    2. Grove 3-axis Accelerometer
    3. Cabo Grove(se destacado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Gyro.png)

Conexão de hardware

    - **Conexão do módulo:**
        - Conexão padrão por furo estampado na PCB.
    - O Seeeduino é então conectado ao computador por meio de um cabo USB.

Código de Software

    - Abra a IDE Arduino.
    - Baixe o [3-Axis Digital Accelerometer( ±2g to 16g)](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) no Github. Clique em **Sketch** > **Include library** > **Add .ZIP library**, importe a biblioteca para a IDE.
    - Copie o código a seguir, clique em Verify para verificar erros de sintaxe. Confirme que não há erros e você poderá enviar o código.
    - Neste programa, as informações de aceleração são enviadas do sensor para o Seeeduino via barramento I2C e então o Seeeduino as imprime no monitor serial. Abra o **monitor serial** para verificar o resultado.

```Cpp
//Gravity Acceleration
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;       //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;           //Hardware I2C
    #define WIRE Wire
#endif

void setup() {
    Serial.begin(9600);
    while (!Serial) {};
    LIS.begin(WIRE, 0x19); //IIC init
    delay(100);
    LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
}
void loop() {
    if (!LIS) {
        Serial.println("LIS3DHTR didn't connect.");
        while (1);
        return;
    }
    //3 axis
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());

    delay(500);
}
```

Análise de Código

```cpp
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;   //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;        //Hardware I2C
    #define WIRE Wire
#endif
```

Inicializando o módulo usando software I2C ou hardware I2C.

```cpp
while (!Serial) {};
```

O código para aqui se você não abrir o monitor serial, portanto abra o monitor serial.

```cpp
LIS.begin(WIRE, 0x19);
LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
```

**Descrição:** Inicializa o acelerômetro.

**Sintaxe:** `LIS.begin(Wire, address)`.

**Descrição:** Define a taxa de dados de saída do acelerômetro.

**Sintaxe:** `LIS.setOutputDataRate(odr_type_t odr)`.

Inicialize o acelerômetro e defina a taxa de saída para 50Hz.

```cpp
Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
```

**Descrição:**

Funções a serem usadas para ler o valor do eixo X do sensor.

**Sintaxe:**

**LIS.getAccelerationX()**. Tipo de retorno: float.

**Descrição:**

Funções a serem usadas para ler o valor do eixo Y do sensor.

**Sintaxe:**

**LIS.getAccelerationY()**. Tipo de retorno: float.

**Descrição:**

Funções a serem usadas para ler o valor do eixo Z do sensor.

**Sintaxe:**

**LIS.getAccelerationZ()**. Tipo de retorno: float.

Imprime os dados dos 3 eixos no monitor serial.

**Efeito de Demonstração e Resultado de Impressão Serial:**

As leituras do acelerômetro de 3 eixos são exibidas no Serial Monitor.

Guia de Breakout

Use o cabo Grove para conectar o Grove 3-axis Accelerometer à interface **I2C** do Seeeduino Lotus usando um cabo Grove (nota: o endereço padrão I2C é 0x19).

## Projetos Bônus

### Projeto 1:  Lâmpada de ritmo dinâmico de música

- **Descrição do projeto:** Neste experimento, faremos o buzzer tocar uma música agradável e os LEDs piscarem de acordo com a frequência e o ritmo da música.

Componentes Envolvidos

    1. Seeeduino Lotus
    2. Grove LED
    3. Buzzer
    4. Cabos Grove(se destacado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project1.png)

Conexão de hardware

    - **Conexão do módulo:**
        - Conexão padrão por furo estampado na PCB.
    - Em seguida, o Seeeduino é conectado ao computador por meio de um cabo USB.

Código de Software

    - Abra a Arduino IDE.
    - Copie o código a seguir e clique em Verify para verificar erros de sintaxe. Verifique se não há erros e então você pode enviar o código.

```cpp
//Music Dynamic Rhythm Lamp
#define NTD0 -1
#define NTD1 294
#define NTD2 330
#define NTD3 350
#define NTD4 393
#define NTD5 441
#define NTD6 495
#define NTD7 556

#define NTDL1 147
#define NTDL2 165
#define NTDL3 175
#define NTDL4 196
#define NTDL5 221
#define NTDL6 248
#define NTDL7 278

#define NTDH1 589
#define NTDH2 661
#define NTDH3 700
#define NTDH4 786
#define NTDH5 882
#define NTDH6 990
#define NTDH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625

int tune[]=
{
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD3,NTD2,NTD2,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1,
NTD2,NTD2,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD2,
NTD1,NTD2,NTDL5,NTD0,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD4,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1
};

float durt[]=
{
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,0.5,0.5,1,1,
1,0.5,0.5,1,1,
1,1,1,1,
1,1,1,1,
1,1,1,0.5,0.5,
1,1,1,1,
1+0.5,0.5,1+1,
};

int length;
int tonepin=5;
int ledp=4;

void setup()
{
  pinMode(tonepin,OUTPUT);
  pinMode(ledp,OUTPUT);
  length=sizeof(tune)/sizeof(tune[0]);
}

void loop()
{
  for(int x=0;x<length;x++)
  {
    tone(tonepin,tune[x]);
    digitalWrite(ledp, HIGH); 
    delay(400*durt[x]);
    digitalWrite(ledp, LOW);
    delay(100*durt[x]);
    noTone(tonepin);

  }
  delay(4000);
}
```

Análise de Código

```cpp
#define NTD
```

Aqui está a definição da frequência da tecla D, que é dividida em grave, médio e agudo.

```cpp
#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625
```

Observação: o ritmo é dividido em um tempo, meio tempo, 1/4 de tempo, 1/8 de tempo; especificamos que o tempo de uma nota de um tempo é 1; meio tempo é 0,5; 1/4 de tempo é 0,25; 1/8 é 0,125.

```cpp
int tune[]=...
```

Liste as frequências de acordo com a partitura.

```cpp
float durt[]=...
```

Liste os tempos de acordo com a partitura.

```cpp
delay(100*durt[x]);
```

Controle o acendimento e o apagamento do LED, respectivamente.

**Efeito de Demonstração e Resultado de Impressão Serial:**

O buzzer tocará uma melodia enquanto o módulo LED piscará com a mesma frequência.

Guia de Breakout

Conecte o Grove LED à interface de sinal digital **D4** do Seeeduino Lotus, conecte o Buzzer à interface de sinal digital **D5** do Seeeduino Lotus.

### Projeto 2: Faça um abajur inteligente com detecção de som e luz

- **Descrição do projeto:** como o nome sugere, este projeto é para fazer uma pequena lâmpada controlada por Som e Luz. Precisamos usar o módulo LED como saída. O sensor de luz e o sensor de som são usados como sinais de entrada. Desta forma, você pode alcançar a função do abajur inteligente: se o nível de som ao redor estiver acima de um determinado valor pré-definido, o LED acende, ou se a intensidade de luz ao redor estiver abaixo de um certo valor, o módulo LED também acende.

Componentes Envolvidos

    1. Seeeduino Lotus
    2. Grove LED
    3. Sensor de Luz
    4. Sensor de Som
    5. Cabo Grove (se destacado)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project2.png)

Conexão de Hardware

    - **Conexão do módulo:**
        - Conexão padrão pelo furo de marcação na PCB.
    - Em seguida, o Seeeduino é conectado ao computador por meio de um cabo USB.

Código de Software

    - Abra a Arduino IDE.
    - Copie o código a seguir e clique em Verify para verificar erros de sintaxe. Verifique se não há erros e então você pode enviar o código.

```Cpp
//light Induction Desk Lamp
int soundPin = A2; // Analog sound sensor is to be attached to analog
int lightPin = A6; //Analog light sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(lightPin, INPUT);
  pinMode(soundPin, INPUT);
}

void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  int lightState = analogRead(lightPin); // Read light sensor’s value
  // if the sound sensor's value is greater than 500 or the sound sensor's is less than 200, the light will be on.
  //Otherwise, the light will be turned off
if (soundState > 500 || lightState < 200) {
  digitalWrite(ledPin, HIGH);
  delay(500); //You can add the "//" to remove the delay
}else{
  digitalWrite(ledPin, LOW);
}
}
```

Análise de Código

```cpp
if (soundState > 500 || lightState < 200) {
  ...
}
```

Entre parênteses está uma expressão lógica. Tanto **&&** quanto **||** são comumente usados em expressões lógicas. O uso comum é **if (expressão 1 || expressão 2)** e **if (expressão 1 && expressão 2)**.

**||** representa "**ou**", satisfazendo uma delas, toda a expressão é verdadeira e satisfaz a condição do julgamento if.

**&&** significa "**e**", a instrução em if{} é executada somente se todas as expressões entre parênteses forem verdadeiras.

**Efeito de Demonstração e Resultado de Impressão Serial:**

Se o som ambiente for suficientemente alto ou a intensidade de luz for baixa, o módulo LED acenderá com maior intensidade.

Guia de Breakout

Conecte o Grove LED à interface de sinal digital **D4** do Seeeduino Lotus, conecte o Sensor de Luz à interface de sinal analógico **A1** do Seeeduino Lotus. Conecte o Sensor de Som à interface de sinal analógico **A2** do Seeeduino Lotus usando um cabo Grove.

## Faça Seus Próprios Módulos e Placas

Após este período de estudo, você já tem um entendimento sistemático de Arduino e hardware open-source, então por que não ir além e tentar fazer seu próprio módulo ou placa de desenvolvimento?

### EDA

Para projetar sua própria placa, você precisará projetar os esquemáticos do seu próprio módulo, o que exige uma ferramenta EDA para isso. Aqui recomendamos um software EDA open-source.

- **KiCAD**

[KiCad](https://www.kicad-pcb.org/) é um conjunto de software gratuito para automação de projeto eletrônico. Ele facilita o design de esquemáticos para circuitos eletrônicos e sua conversão em projetos de PCB. Possui um ambiente integrado para captura de esquemáticos e design de layout de PCB. Os programas lidam com Captura de Esquemáticos e Layout de PCB com saída Gerber. A suíte roda em Windows, Linux e macOS e é licenciada sob GNU GPL v3.

- **Upverter**

Se você não quer trabalhar em esquemático ou layout por conta própria, mas deseja converter seu protótipo baseado nos módulos da Seeed em um produto integrado, recomendamos fortemente que você experimente o Upverter.

Visite o [**Grove Beginner Kit for Arduino Upverter Guide**](https://wiki.seeedstudio.com/pt-br/Grove-Beginner-Kit-for-Arduino-Upverter-Guide/) para mais informações.

### Serviços de PCB

Depois de concluir o seu projeto, confira o [serviço Seeed Fusion PCBA](https://www.seeedstudio.com/fusion_pcb.html), que pode ajudar a transformar seus projetos em um dispositivo realmente funcional.

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Fusion.png)

A Seeed Studio possui sua própria [Open Parts Library (OPL)](https://www.seeedstudio.com/opl.html), que é uma coleção de mais de 10.000 componentes comumente usados, especificamente obtidos para o serviço Seeed Fusion PCBA. Para acelerar o processo de design de PCB, a Seeed está construindo as bibliotecas de componentes para KiCad e Eagle. Quando todos os componentes são obtidos da PCBA OPL da Seeed e usados com o [serviço Seeed Fusion PCB Assembly (PCBA)](https://www.seeedstudio.com/fusion_pcb.html), todo o tempo de produção de PCBA pode ser reduzido de 20 dias úteis para apenas 7 dias.

## Perguntas Frequentes (FAQ)

### 1. Como remover os módulos eletrônicos individuais para uso?

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove1.jpg)

Olhando de perto o Grove Beginner Kit For Arduino você verá que há 3 pequenos furos entre cada módulo individual e a placa principal. Tudo o que você precisa fazer é cortar a placa principal da PCB ao redor do módulo a partir dos pequenos furos usando um alicate de corte diagonal.

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove2.jpg)

---

**Observação: corte cuidadosamente ao longo da periferia do pequeno furo, não corte até o pequeno furo (para evitar curto-circuito na fiação interna e assim danificar o módulo); se você cortar acidentalmente até o pequeno furo, use uma faca para limpar o pequeno furo para evitar curto-circuito**

---

​![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove3.jpg)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

1. [**Grove Beginner Kit for Arduino Wiki [PDF]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-ArduinoPDF.pdf)

2. Arquivos de Projeto de Esquemático

    - [**Grove Beginner Kit for Arduino Schematic Design Files V1.0 Preview Version**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip)

    - [**Grove Beginner Kit for Arduino Schematic Design Files V1.1 New Version**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove_Beginner_Kit_for_Arduino_SCH_PCB_v1.1_251111.zip)

3. **Bibliotecas de Módulos no Github:**

    - [OLED Display](https://github.com/olikraus/U8g2_Arduino)
    - [Temperature & Humidity Sensor](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)
    - [Air Pressure Sensor (BMP280)](https://github.com/Seeed-Studio/Grove_BMP280)
    - [Air Pressure Sensor (SPA06-003)](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06)
    - [3-Axis Accelerator](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)

4. [**Folha de Dados do Sensor**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-beginner-kit-for-arduino-datasheet.zip)

5. [**Demonstração Inicial de Firmware para Arduino**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/GroveBeginnerKitFirmwareFINAL.zip)

6. [**Recursos do Grove Beginner Kit For Arduino em um só arquivo [20200401] (7z)**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Resources-in-one(20200401).7z)

7. [**Curso de Programação Gráfica Codecraft para Grove Beginner Kit For Arduino web v8**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Codecraft-Graphical-Programming-Course-web-v8.pdf)

## Mais Aprendizado

- [LSTM para previsão de dados IoT em tempo real](https://github.com/256ericpan/LSTM_IoT)

- [Guia para Iniciantes em Programação sem Código para Biologia](https://www.biomaker.org/nocode-programming-for-biology-handbook)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
