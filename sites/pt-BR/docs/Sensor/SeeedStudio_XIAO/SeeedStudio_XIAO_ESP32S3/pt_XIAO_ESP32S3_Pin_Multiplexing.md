---
description: Multiplexação de pinos com o Seeed Studio XIAO ESP32S3.
title: Multiplexação de Pinos com Seeed Studio XIAO ESP32S3 (Sense)
keywords:
  - esp32s3
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_pin_multiplexing
sku: 113991114, 113991115
type: project
last_update:
  date: 03/30/2023
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_pin_multiplexing/
---

# Multiplexação de Pinos com Seeed Studio XIAO ESP32S3 (Sense)

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

O Seeed Studio XIAO ESP32S3 é uma placa de desenvolvimento poderosa e versátil que possui uma variedade de interfaces periféricas e pinos GPIO. Esses pinos podem ser usados para vários propósitos, como comunicação com outros dispositivos, leitura de sensores analógicos, controle de LEDs e muito mais. Neste tutorial, exploraremos o pinout do XIAO ESP32S3 e da sua placa relacionada, o XIAO ESP32S3 Sense, e aprenderemos como usar esses pinos para diferentes finalidades. Especificamente, cobriremos o uso de 1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x LED de Usuário, 1x LED de Carga, 1x botão de Reset, 1x botão de Boot e, para o XIAO ESP32S3 Sense, 1x conector B2B (com 2 GPIOs adicionais). Ao final deste tutorial, você terá uma boa compreensão do pinout do XIAO ESP32S3 e será capaz de usá-lo de forma eficaz em seus projetos.

## Primeiros Passos

### Visão Geral do Pinout

Antes de começarmos, vamos revisar todos os pinos que o XIAO ESP32S3 possui e suas funções com o seguinte esquema.

<table align="center">
 <tr>
     <th>Diagrama de indicação frontal do XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Diagrama de indicação traseira do XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>Lista de Pinos do XIAO ESP32S3/XIAO ESP32S3 Sense</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::caution
Embora o XIAO ESP32-S3 atribua GPIO41 e GPIO42 aos pinos A11 e A12, devido à natureza do chip ESP32-S3, os pinos A11 e A12 não suportam funcionalidade ADC. Certifique-se de distingui-los e diferenciá-los.
:::

- 5V - Esta é a saída de 5V da porta USB. Você também pode usar isto como uma entrada de tensão, mas deve ter algum tipo de diodo (Schottky, sinal, potência) entre sua fonte de alimentação externa e este pino, com o ânodo para a bateria e o cátodo para o pino de 5V.

- 3V3 - Esta é a saída regulada do regulador onboard. Você pode drenar 700mA

- GND - Terra de alimentação/dados/sinal

Abaixo está uma visão geral dos pinos funcionais do XIAO ESP32S3.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Número do Pino</th>
   <th>Descrição da Função</th>
  </tr>
    <tr>
   <th colspan="2">-- Pinos do Microfone PDM --</th>
  </tr>
  <tr>
   <td align="center">GPIO 41</td>
   <td align="center">DADO do Microfone PDM</td>
  </tr>
  <tr>
   <td align="center">GPIO 42</td>
   <td align="center">CLK do Microfone PDM</td>
  </tr>
    <tr>
   <th colspan="2">-- Pinos SPI do Cartão MicroSD --</th>
  </tr>
  <tr>
   <td align="center">GPIO 21</td>
   <td align="center">MicroSD SPI CS</td>
  </tr>
  <tr>
   <td align="center">D8 / A8 / Qt7 / GPIO7</td>
   <td align="center">MicroSD SPI SCK</td>
  </tr>
  <tr>
   <td align="center">D9 / A9 / Qt8 / GPIO8</td>
   <td align="center">MicroSD SPI MISO</td>
  </tr]
  <tr>
   <td align="center">D10 / A10 / Qt9 / GPIO9</td>
   <td align="center">MicroSD SPI MOSI</td>
  </tr>
    <tr>
   <th colspan="2">-- Pinos da Câmera --</th>
  </tr>
    <tr>
   <td align="center">GPIO 10</td>
   <td align="center">XMCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 11</td>
   <td align="center">DVP_Y8</td>
  </tr>
    <tr>
   <td align="center">GPIO 12</td>
   <td align="center">DVP_Y7</td>
  </tr>
    <tr>
   <td align="center">GPIO 13</td>
   <td align="center">DVP_PCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 14</td>
   <td align="center">DVP_Y6</td>
  </tr>
    <tr>
   <td align="center">GPIO 15</td>
   <td align="center">DVP_Y2</td>
  </tr>
    <tr>
   <td align="center">GPIO 16</td>
   <td align="center">DVP_Y5</td>
  </tr>
    <tr>
   <td align="center">GPIO 17</td>
   <td align="center">DVP_Y3</td>
  </tr>
    <tr>
   <td align="center">GPIO 18</td>
   <td align="center">DVP_Y4</td>
  </tr>
    <tr>
   <td align="center">GPIO 38</td>
   <td align="center">DVP_VSYNC</td>
  </tr>
    <tr>
   <td align="center">GPIO 39</td>
   <td align="center">SCL da Câmera</td>
  </tr>
    <tr>
   <td align="center">GPIO 40</td>
   <td align="center">SDA da Câmera</td>
  </tr>
    <tr>
   <td align="center">GPIO 47</td>
   <td align="center">DVP_HREF</td>
  </tr>
    <tr>
   <td align="center">GPIO 48</td>
   <td align="center">DVP_Y9</td>
  </tr>
 </table>
</div>

### Soldar o header

Para usar as funções de cada pino de acordo com este tutorial, recomendamos soldar os pinos com antecedência.

Devido ao tamanho reduzido do XIAO ESP32S3, tenha cuidado ao soldar os headers, não deixe pinos diferentes grudarem entre si e não deixe a solda encostar no shield ou em outros componentes. Caso contrário, isso pode fazer com que o XIAO entre em curto-circuito ou não funcione corretamente, e as consequências disso serão arcadas pelo usuário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

Se você escolheu a versão Sense, parabéns! Você terá dois pinos GPIO adicionais. Se planeja usá-los, pode soldar um header separado neles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## Digital

O XIAO ESP32S3 possui até 11 pinos GPIO regulares e 9 pinos analógicos. Neste exemplo, usaremos o XIAO ESP32S3, a placa de expansão XIAO e um relé para demonstrar como usar diferentes pinos digitais para leitura e escrita.

### Preparação de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Instale o XIAO ESP32S3 ou Sense na placa de expansão e conecte o relé à interface **A0/D0** da placa de expansão por meio de um cabo Grove. Por fim, conecte o XIAO ao computador por meio de um cabo USB-C.

### Implementação de Software

Neste exemplo, implementaremos o controle do estado ligado/desligado de um relé usando um botão conectado à placa de expansão XIAO. Quando o botão é pressionado, o relé liga, e quando o botão é solto, o relé desliga.

```c
const int buttonPin = D1;     // the number of the pushbutton pin
int buttonState = 0;          // variable for reading the pushbutton status
const int relayPin = D0;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
  } else {
    // turn Relay off:
    digitalWrite(relayPin, LOW);
  }
}
```

Se tudo correr bem, após enviar o programa, você deverá ver o seguinte efeito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
Se você quiser usar a função digital, então deve usar a letra "D" como prefixo para o número do pino, como D4, D5. Por outro lado, se quiser usar a função analógica de um pino, você deve usar a letra "A" como prefixo para o número do pino, como A4, A5.
:::

### Para a versão Sense

Para o XIAO ESP32S3 Sense, além de usar os 11 pinos digitais no XIAO, você também pode usar os dois pinos na placa de expansão, que são **D11** e **D12**. Se você quiser usá-los, siga as etapas abaixo.

#### Etapa 1. Corte a conexão entre J1 e J2

Devido ao número limitado de pinos no ESP32-S3, D11 e D12 na placa de expansão Sense são reservados para o microfone por padrão. Se você realmente precisar usar D11 e D12 para outros propósitos, pode virar a placa de expansão Sense e cortar a conexão entre J1 e J2 ao longo da linha branca entre as duas ilhas de solda usando uma faca afiada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
Como pode ser visto na imagem, devido às limitações de espaço do XIAO, muitos traçados de fios são muito compactos. Portanto, ao cortar a conexão entre J1 e J2, tenha muito cuidado para não cortar fora da linha branca, caso contrário isso pode fazer com que a placa de desenvolvimento apresente mau funcionamento!

Embora o XIAO ESP32-S3 atribua GPIO41 e GPIO42 aos pinos A11 e A12, devido à natureza do chip ESP32-S3, os pinos A11 e A12 não suportam funcionalidade de ADC. Certifique-se de distingui-los e diferenciá-los.
:::

:::tip
Depois que você cortar a conexão entre J1 e J2, a função de microfone na placa de expansão não estará mais disponível. Se você precisar usar a função de microfone, os pinos D11 e D12 não podem ser usados simultaneamente. Nesse caso, você pode soldar separadamente as duas ilhas de J1 e J2 para restaurar a função de microfone. Como mostrado na imagem abaixo, solde as áreas vermelha e verde separadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

Para o diagrama esquemático real do circuito, consulte o diagrama a seguir:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### Etapa 2. Preparação de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Etapa 3. Implementação de software

O programa a seguir alterna o relé a cada 500 milissegundos. Conecte o pino SIG do relé à interface GPIO42 da placa de expansão.

```c
const int relayPin = 42;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
}

void loop() {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
    delay(500);
    // turn Relay off:
    digitalWrite(relayPin, LOW);
    delay(500);
}
```

O método acima também é aplicável às seções [Digital as PWM](#digital-as-pwm) e [Analog](#analog). Você só precisa modificar os números dos pinos da placa de expansão que deseja usar. Isso não será repetido posteriormente.

:::caution
Para os dois pinos adicionais D11 e D12 no XIAO ESP32S3 Sense, ainda não definimos macros para os pinos. Ou seja, você ainda não pode usar D11/A11 ou D12/A12 para controlar esses dois pinos, mas pode controlá-los usando os números GPIO, GPIO42 e GPIO41, respectivamente. Enviaremos as definições de macros para esses dois pinos o mais rápido possível e, assim que o envio for concluído, você poderá usar as definições de pino D/A.
:::

## Digital as PWM

Todos os pinos GPIO no XIAO ESP32S3 suportam saída PWM. Portanto, você pode usar qualquer pino para gerar PWM para ajustar o brilho de luzes, controlar servomotores e outras funções.

### Preparação de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Instale o XIAO ESP32S3 ou Sense na placa de expansão, em seguida conecte o LED de Cor Variável à interface A0/D0 da placa de expansão usando um cabo Grove. Por fim, conecte o XIAO ao seu computador via cabo USB-C.

### Implementação de software

Neste exemplo, demonstraremos como usar a saída PWM para controlar o brilho de uma luz.

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

Se o programa for executado com sucesso, você verá o seguinte efeito em execução.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## Analog

No XIAO ESP32S3, entre os 11 pinos GPIO integrados, exceto pelos pinos D6 e D7 usados para comunicação serial, os 9 pinos restantes suportam função Analógica. Você pode usar esses pinos GPIO com funcionalidade analógica para ler valores de sensores que produzem sinais analógicos, como sensores de oxigênio, sensores de intensidade de luz e assim por diante.

:::caution
Embora o XIAO ESP32-S3 atribua GPIO41 e GPIO42 aos pinos A11 e A12, devido à natureza do chip ESP32-S3, os pinos A11 e A12 não suportam funcionalidade de ADC. Certifique-se de distingui-los e diferenciá-los.
:::

### Preparação de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Oxygen Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Instale o XIAO ESP32S3 ou Sense na placa de expansão e, em seguida, conecte o Sensor de Oxigênio à interface A0/D0 na placa de expansão com o cabo Grove. Por fim, conecte o XIAO ao computador por meio de um cabo USB-C.

### Implementação de Software

No programa a seguir, usaremos o método `analogRead()` para ler o valor analógico do sensor e imprimir o resultado do sensor usando a interface Serial.

```cpp
// Grove - Gas Sensor(O2) test code
// Note:
// 1. It need about about 5-10 minutes to preheat the sensor
// 2. uncomment the module name you're using
// 3. modify VRefer if needed

// comment useless one
// #define MIX8410
#define O2_W2

#ifdef MIX8410
  #define O2_COEFFICIENT 0.21
#elif defined(O2_W2)
  #define O2_COEFFICIENT 0.087
#endif

const float VRefer = 3.34;       // voltage of adc reference
const int pinAdc   = A0;

void setup() 
{
    // put your setup code here, to run once:
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) Test Code...");
}

void loop() 
{
    // put your main code here, to run repeatedly:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, Concentration of O2 is ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout samples are with reference to 3.3V
    float MeasuredVout = readO2Vout();

    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //when its output voltage is 2.0V,
    float Concentration = MeasuredVout * O2_COEFFICIENT / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

:::tip
Se você quiser usar a função analógica de um pino, deve usar a letra "A" como prefixo do número do pino, como A4, A5. Por outro lado, se quiser usar a função digital, então deve usar a letra "D" como prefixo do número do pino, como D4, D5.
:::

Depois de enviar o programa, abra o Monitor Serial na Arduino IDE e defina a taxa de transmissão para 9600. Aguarde o aquecimento do sensor de oxigênio e então você poderá ver o valor preciso da concentração de oxigênio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## Serial

Ao trabalhar com a Arduino IDE, a comunicação Serial é uma parte essencial de muitos projetos. Para usar Serial na Arduino IDE, você precisa começar abrindo a janela do Monitor Serial. Isso pode ser feito clicando no ícone **Serial Monitor** na barra de ferramentas ou pressionando o atalho **Ctrl+Shift+M**.

### Uso Geral

Algumas das funções Serial mais usadas incluem:

- `Serial.begin()` -- que inicializa a comunicação em uma taxa de transmissão especificada;
- `Serial.print()` -- que envia dados para a porta Serial em um formato legível;
- `Serial.write()` -- que envia dados binários para a porta Serial;
- `Serial.available()` -- que verifica se há algum dado disponível para ser lido na porta Serial;
- `Serial.read()` -- que lê um único byte de dados da porta Serial;
- `Serial.flush()` -- que espera a conclusão da transmissão dos dados seriais de saída.

Usando essas funções Serial, você pode enviar e receber dados entre a placa Arduino e o seu computador, o que abre muitas possibilidades para criar projetos interativos.

Aqui está um programa de exemplo:

```c
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // send data to the serial port
  Serial.println("Hello World!");

  // read data from the serial port
  if (Serial.available() > 0) {
    // read the incoming byte:
    char incomingByte = Serial.read();
    // print the incoming byte to the serial monitor:
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }

  // wait for a second before repeating the loop
  delay(1000);
}
```

Neste código, primeiro inicializamos a comunicação Serial em uma taxa de transmissão de **9600** usando a função `Serial.begin()` na função `setup()`. Em seguida, na função `loop()`, usamos a função `Serial.print()` para enviar "Hello World!" para a porta Serial.

Também usamos a função `Serial.available()` para verificar se há algum dado disponível para ser lido na porta Serial. Se houver, lemos o byte recebido usando a função `Serial.read()` e o armazenamos em uma variável chamada incomingByte. Em seguida, usamos as funções `Serial.print()` e `Serial.println()` para imprimir "I received: " seguido do valor de incomingByte no monitor Serial.

Por fim, adicionamos uma função `delay()` para esperar um segundo antes de repetir o loop. Este código demonstra como usar algumas das funções Serial mais comuns na Arduino IDE para enviar e receber dados pela porta Serial.

Depois de enviar o programa, abra o Monitor Serial na Arduino IDE e defina a taxa de transmissão para 9600. Você verá a seguinte mensagem no monitor serial, que exibe 'Hello World!' a cada segundo. Além disso, você pode enviar conteúdo para o XIAO ESP32S3 pelo monitor serial, e o XIAO imprimirá cada byte do conteúdo que você enviar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Uso do Serial1

De acordo com os diagramas de pinos do XIAO ESP32S3 acima para parâmetros específicos, podemos observar que há um pino TX e um pino RX.
Isso é diferente da comunicação Serial, mas o uso também é muito semelhante, exceto pelo fato de que alguns parâmetros precisam ser adicionados.
Portanto, a seguir, usaremos os pinos expostos pelo chip para comunicação serial.

Função principal que precisa ser incluída:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- habilita o Serial1, o protótipo da função é: `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :taxa de transmissão
  - `config`:bit de configuração
  - `rxPin` :pino de recepção
  - `txPin` :pino de envio

Vale ressaltar que, se usarmos porta de pino digital para definir, este lugar deve ser `#define RX_PIN D7`、`#define TX_PIN D6`; se usarmos porta de pino GPIO para definir, este lugar deve ser `#define RX_PIN 44`、`#define TX_PIN 43`. Consulte os diagramas de pinos das diferentes XIAO Série para parâmetros específicos

Aqui está um programa de exemplo:

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

Depois de enviar o programa, abra o Monitor Serial na Arduino IDE e defina a taxa de transmissão para 115200. Então, você pode enviar o conteúdo que quiser para o XIAO ESP32S3 pelo monitor serial Serial, e o XIAO imprimirá cada byte do conteúdo que você enviar. Aqui, o conteúdo que inseri é "Hello Everyone", meu gráfico de resultados é o seguinte

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### Uso do Software Serial

Se você achar que uma porta serial de hardware não é suficiente, também pode usar a função de software serial do ESP32 para definir alguns pinos como software serial para expandir o número de portas seriais.

Claro, recomendamos usar o segundo método de mapeamento de portas seriais de hardware, pois é um recurso exclusivo do ESP32. Você pode ler mais sobre isso na seção [Other Hardware Serial](#Other-Hardware-Serial).

Para produtos de chip da série ESP32, se você precisar usar a porta serial por software, será necessário baixar separadamente a biblioteca de porta serial por software de terceiros. Uma referência é fornecida aqui.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
Atualmente recomendamos a versão 7.0.0 da biblioteca EspSoftwareSerial. Outras versões podem apresentar diferentes graus de problemas que impedem que a porta serial por software funcione corretamente.
:::

Como você fez o download da biblioteca em formato zip, abra a sua IDE Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

Em seguida, você pode usar a porta serial por software do ESP32.

:::caution
Se você tiver outras bibliotecas de porta serial por software instaladas no seu computador, é provável que causem conflito, portanto verifique isso por conta própria.
:::

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // initialize serial communication
  Serial.begin(9600);
  while (!Serial);

  // initialize software serial
  mySerial.begin(9600);
}

void loop() {
  // read data from software serial
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received data: ");
    Serial.println(data);
  }

  // write data to software serial
  mySerial.print("Hello World!");

  // wait for a second before repeating the loop
  delay(1000);
}
```

Neste programa, primeiro incluímos a biblioteca `SoftwareSerial.h` para usar a serial por software. Em seguida, criamos um novo objeto SoftwareSerial chamado mySerial usando os pinos 2 e 3 como RX e TX, respectivamente.

Na função `setup()`, inicializamos tanto a serial de hardware (`Serial.begin()`) quanto a serial por software (`mySerial.begin()`).

Na função `loop()`, usamos a função `mySerial.available()` para verificar se há algum dado disponível para ser lido da serial por software. Se houver, lemos o byte recebido usando a função `mySerial.read()` e o armazenamos em uma variável chamada data. Em seguida, usamos as funções `Serial.print()` e `Serial.println()` para imprimir "Received data: " seguido pelo valor de data na serial de hardware.

Também usamos a função `mySerial.print()` para escrever "Hello World!" na serial por software. Isso enviará os dados do XIAO para o dispositivo conectado à porta serial por software.

Por fim, adicionamos uma função `delay()` para esperar um segundo antes de repetir o loop.

:::note
Observe que, para usar serial por software no ESP32-S3, você precisa selecionar os pinos apropriados para RX e TX que não sejam usados para nenhum outro propósito. Neste exemplo, usamos os pinos 9 e 10 para RX e TX, respectivamente.
:::

### Outras Seriais de Hardware

O ESP32S3 possui um total de três interfaces de comunicação UART, numeradas de 0 a 2, que são UART0, UART1 e UART2. Os pinos dessas três portas seriais não são fixos e podem ser remapeados para qualquer porta IO.

Por padrão, não usamos a **UART0**, pois ela é usada para comunicação serial USB. Você pode usar outras seriais de hardware personalizando o mapeamento da serial de hardware.

```c
// Need this for the lower level access to set them up.
#include <HardwareSerial.h>

//Define two Serial devices mapped to the two internal UARTs
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // For the USB, just use Serial as normal:
    Serial.begin(115200);

    // Configure MySerial0 on pins TX=D6 and RX=D7 (-1, -1 means use the default)
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // And configure MySerial1 on pins RX=D9, TX=D10
    MySerial1.begin(115200, SERIAL_8N1, D9, D10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

A seguir, tomaremos como exemplo o [60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html), que está disponível para venda, e explicaremos como usar as portas seriais de hardware D9 e D10 e a porta serial USB.

Por favor, prepare o seguinte.

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>60GHz mmWave Sensor -<br/>Módulo de Respiração em Repouso<br/>e Batimentos Cardíacos Humanos</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:240, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:240, height:'auto'}}/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Baixe a biblioteca do sensor para o seu computador e adicione-a à IDE Arduino.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Aqui, queremos analisar as informações de dados de batimentos cardíacos e respiração; então você pode reescrever seu programa assim.

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //Create a new HardwareSerial class -- D6/D7

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, 9, 10); // at CPU Freq is 40MHz, work half speed of defined.

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

Carregue o programa, depois abra o monitor serial e defina a taxa de baud para 115200.

Se tudo correr bem, você verá mensagens de dados no monitor serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

O XIAO ESP32S3 possui uma interface I2C que pode ser usada para transmissão e análise de dados de muitos sensores, bem como para usar algumas telas OLED.

### Preparação de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

O display OLED na placa de expansão XIAO usa o protocolo I2C e é conectado à interface I2C do XIAO através do circuito I2C na placa. Portanto, podemos simplesmente conectar o XIAO na placa de expansão e programá-lo para exibir conteúdo na tela.

### Implementação de Software

Este exemplo apresenta como usar o display OLED na Seeed Studio Expansion Base for XIAO ESP32S3.

#### Etapa 1. Instale o Seeed Studio XIAO ESP32S3 na placa de expansão e depois conecte o cabo Type-C

#### Etapa 2. Instale a biblioteca u8g2

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Etapa 3. Copie o código e cole na Arduino IDE e depois faça o upload

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

Nas primeiras linhas do código, incluímos as bibliotecas necessárias, como Arduino.h, U8x8lib.h e Wire.h. A biblioteca U8x8lib.h fornece funções para controlar o display OLED, e a biblioteca Wire.h fornece funções para comunicação I2C.

Na função `setup()`, inicializamos o display OLED usando a função `u8x8.begin()`. Também definimos o modo de inversão do display usando a função `u8x8.setFlipMode()` para girar a tela em 180 graus.

Na função `loop()`, definimos a fonte usando a função `u8x8.setFont()` e especificamos a posição do cursor no display usando a função `u8x8.setCursor()`. Por fim, usamos a função `u8x8.print()` para exibir a string "Hello World!" no display OLED.

Se você enviar um programa para o XIAO ESP32S3, verá o conteúdo exibido na tela do display OLED na placa de expansão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

O chip ESP32-S3 integra vários periféricos, incluindo uma interface SPI que pode ser usada para conectar dispositivos SPI externos, como memória flash, displays, sensores e muito mais. O ESP32-S3 também suporta modo de transferência SPI de alta velocidade, que pode atingir uma taxa máxima de transferência SPI de 80 MHz, atendendo às necessidades de transferência de dados da maioria dos dispositivos SPI.

### Preparação de Hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Após preparar o hardware conforme mencionado acima, use jumpers para conectar a interface SPI do XIAO e do OLED. Consulte o diagrama a seguir para o método de fiação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### Implementação de Software

Em seguida, usaremos o seguinte programa como exemplo para apresentar como usar a interface SPI para controlar a exibição na tela OLED.

Instale a biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

Na função `setup()`, a classe `U8G2_SH1107_128X128_1_4W_HW_SPI` é instanciada com os argumentos de construtor apropriados que especificam os pinos usados para chip select (cs), data/command (dc) e reset. Em seguida, a função `u8g2.begin()` é chamada para inicializar o display.

Na função `loop()`, o display é atualizado com novo conteúdo usando as funções `u8g2.firstPage()`, `u8g2.setFont()` e `u8g2.drawStr()`. A função `u8g2.firstPage()` configura o buffer do display para escrita, enquanto `u8g2.nextPage()` exibe o conteúdo atualizado. O laço do-while garante que o conteúdo seja exibido continuamente até que o programa seja interrompido.

No geral, este código demonstra como usar a biblioteca U8g2 para controlar um display OLED e exibir texto nele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### Para Sense

Se você adquiriu a versão Sense e precisa conectar à placa de expansão, observe que o cartão SD na placa de expansão ocupará os pinos SPI, o que pode fazer com que os pinos SPI fiquem indisponíveis.

As interfaces de ilhas de solda fornecidas na placa de expansão Sense permitem que os usuários selecionem as funções necessárias. Entre elas, a função da ilha de solda **J3** é habilitar a funcionalidade SPI ou do cartão SD.

<table align="center">
 <tr>
     <th>Se você quiser usar os pinos SPI / Desativar o cartão SD da placa de expansão</th>
     <th>Se você quiser ativar o cartão SD na placa de expansão / Desativar os pinos SPI</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>Corte ao longo da linha branca fina para desconectar a ligação da ilha de solda.</td>
    <td>Solde as duas ilhas de solda juntas.</td>
  </tr>
</table>

:::caution
Como pode ser visto na imagem, devido às limitações de espaço do XIAO, muitos trajetos de fios são muito compactos. Portanto, ao cortar a conexão de J3, tenha muito cuidado para não cortar fora da linha branca, caso contrário isso pode fazer com que a placa de desenvolvimento apresente mau funcionamento!
:::

:::caution
Por questão de bom senso, o J3 foi simplesmente descrito acima como uma interface que liga ou desliga a função do cartão SD, mas isso na verdade não é preciso. A conexão real do circuito é mostrada abaixo. Cortar o J3 na verdade desconecta os resistores de pull-up de R4 a R6, que é o principal motivo pelo qual a função do cartão SD é desativada enquanto a função SPI é restaurada ao normal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## Pinos Touch

Além dos pinos funcionais comuns mencionados acima, o XIAO ESP32S3/XIAO ESP32S3 Sense também possui 9 pinos de detecção de toque A0~A5, A8~A10.

Podemos verificar se um pino foi tocado lendo seu valor analógico, o que é muito conveniente. O programa a seguir é usado para detectar se o pino A5 foi tocado.

```c
const int touch_pin = A5;

void setup(void) {
  Serial.begin(9600);
}

void loop(void) {
  Serial.print("Touch value: ");
  Serial.println(analogRead(touch_pin));
  delay(1000);
}
```

Após enviar o programa, abra o monitor serial e ajuste a taxa de baud para 9600. Em seguida, toque o pino A5 e você verá que o valor de leitura analógica será significativamente maior do que o valor antes de tocar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## Pinos USB

O ESP32-S3 é um microcontrolador que integra funcionalidades de Wi-Fi e Bluetooth, e seus pinos D+ e D- são usados para suportar comunicação USB. Especificamente, esses dois pinos são linhas de sinal diferencial usadas para transmissão de dados em alta velocidade entre dispositivos USB 2.0 e hosts.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

O pino D+ é a linha de polaridade positiva usada para enviar dados, enquanto o pino D- é a linha de polaridade negativa usada para enviar dados. Quando um dispositivo USB é conectado a um host, o host detecta mudanças de tensão nesses dois pinos para determinar o status de conexão do dispositivo e a velocidade de transmissão. Durante a transmissão de dados, os pinos D+ e D- transmitem alternadamente bits de dados e sinais de sincronização para obter uma transmissão de dados confiável.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## Pinos JTAG

A interface JTAG (Joint Test Action Group) do ESP32-S3 é uma interface de depuração e teste que pode ser usada para depuração e programação de hardware em nível muito baixo durante o desenvolvimento, depuração e testes. A interface JTAG inclui um conjunto de linhas de sinal padrão, incluindo linhas de clock, linhas de entrada de dados, linhas de saída de dados, linhas de seleção de modo de teste, linhas de clock de modo de teste e assim por diante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

A interface JTAG do ESP32-S3 pode ser usada para os seguintes propósitos:

1. Depuração: A interface JTAG pode ser usada para depuração e execução passo a passo no chip ESP32-S3 para ajudar os desenvolvedores a encontrar e resolver erros de código.

2. Gravação de programas: Por meio da interface JTAG, programas ou firmwares de depuração podem ser carregados no chip ESP32-S3.

3. Leitura do estado da CPU: A interface JTAG pode ser usada para ler o estado da CPU, o conteúdo da memória e os valores dos registradores do chip ESP32-S3 para fins de depuração e teste.

Deve-se notar que o uso da interface JTAG requer dispositivos de hardware dedicados e ferramentas de software, bem como o conhecimento e habilidades profissionais correspondentes. Portanto, em geral, a interface JTAG é usada apenas em cenários específicos, como desenvolvimento, depuração e teste. Para usuários comuns, utilizar outras funções e interfaces do ESP32-S3 já é suficiente.

Se você quiser saber mais sobre Depuração JTAG, leia a [documentação oficial do ESP32](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html).

## Solução de Problemas

### Q1: Por que estou recebendo o seguinte erro ao usar o monitor serial?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

R: Se você encontrar esse tipo de erro, ative o interruptor **USB CDC On Boot**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

Esse problema também pode se manifestar como uma saída serial vazia no Arduino IDE 2.x, e também pode ser causado por esse mesmo motivo.

### Q2: Quais recursos o ESP-32 suporta ou não suporta?

R: A seguir está uma lista de recursos suportados/não suportados fornecida pelo [ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html). Em 10 de abril de 2023.

| Periférico    | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | Comentários            |
|---------------|---------------|---------------|---------------|---------------|------------------------|
| ADC           | Sim           | Sim           | Sim           | Sim           |                        |
| Bluetooth     | Sim           | Não suportado | Não suportado | Não suportado | Bluetooth Clássico     |
| BLE           | Sim           | Não suportado | Sim           | Sim           |                        |
| DAC           | Sim           | Sim           | Não suportado | Não suportado |                        |
| Ethernet      | Sim           | Não suportado | Não suportado | Não suportado | (*)                    |
| GPIO          | Sim           | Sim           | Sim           | Sim           |                        |
| Hall Sensor   | Sim           | Não suportado | Não suportado | Não suportado |                        |
| I2C           | Sim           | Sim           | Sim           | Sim           |                        |
| I2S           | Sim           | Sim           | Sim           | Sim           |                        |
| LEDC          | Sim           | Sim           | Sim           | Sim           |                        |
| Motor PWM     | Não           | Não suportado | Não suportado | Não suportado |                        |
| Pulse Counter | Não           | Não           | Não           | Não           |                        |
| RMT           | Sim           | Sim           | Sim           | Sim           |                        |
| SDIO          | Não           | Não           | Não           | Não           |                        |
| SDMMC         | Sim           | Não suportado | Não suportado | Sim           |                        |
| Timer         | Sim           | Sim           | Sim           | Sim           |                        |
| Temp. Sensor  | Não suportado | Sim           | Sim           | Sim           |                        |
| Touch         | Sim           | Sim           | Não suportado | Sim           |                        |
| TWAI          | Não           | Não           | Não           | Não           |                        |
| UART          | Sim           | Sim           | Sim           | Sim           |                        |
| USB           | Não suportado | Sim           | Sim           | Sim           | ESP32-C3 apenas CDC/JTAG |
| Wi-Fi         | Sim           | Sim           | Sim           | Sim           |                        |

### Q3: Por que eu sempre vejo a mensagem de depuração do chip no monitor serial?

R: Você pode tentar desativar a saída de mensagens de depuração usando o seguinte método, **Tool -> Core Debug Level: -> None** no Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

No entanto, esse método nem sempre funciona; na verdade, as informações de depuração do ESP32-S3 são sempre impressas pela porta serial, o que não pode ser alterado. Por favor, compreenda, ele só está ansioso demais para que você saiba que está funcionando corretamente.

### P4: Por que mesmo cortando a conexão de J3, ainda testo e obtenho os pinos D8 e D9 em nível alto? A gravação no cartão microSD ainda tem alguma probabilidade de sucesso?

Em termos de projeto do cartão SD, o circuito correto deve ter resistores de pull-up para fazer o cartão microSD funcionar corretamente. Se você descobrir que o nível do pino e a leitura e gravação do cartão ainda estão normais após cortar J3, isso pode ser apenas uma situação de sorte e não recomendamos que você leia e grave o cartão nesse caso, pois isso pode causar problema de perda dos dados gravados. Enquanto isso, os pinos D8 e D9 podem ter seus níveis modificados escrevendo nível baixo após cortar J3.

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
