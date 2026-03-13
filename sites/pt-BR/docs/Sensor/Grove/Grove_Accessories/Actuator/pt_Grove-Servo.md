---
title: Grove - Servo
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Servo/
slug: /Grove-Servo
sku: 316010005
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Servo/
---
![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove—Servo.jpg)

Grove - Servo é um motor DC com sistema de engrenagem e de realimentação. Ele é usado no mecanismo de acionamento de robôs. O módulo é um produto bônus para os amantes de Grove. Regulamos o servo de três fios para um conector padrão Grove. Agora você pode conectá‑lo e usá‑lo como um módulo Grove típico, sem a bagunça de fios jumper.

Mas se você prefere mais um servo de prototipagem, confira o EMAX 9g ES08A High Sensitive Mini Servo. Eles são o mesmo modelo, ambos de boa qualidade e com preço acessível.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Servo-p-1241.html)

Recursos
---

- Módulo pequeno
- Interface compatível com Grove
- Fácil de usar

Especificação
---

<table cellSpacing={0} width="80%">
  <tbody>
    <tr>
      <th scope="col"> Item </th>
      <th scope="col"> Mín </th>
      <th scope="col"> Típico </th>
      <th scope="col"> Máx </th>
      <th scope="col"> Unidade </th>
    </tr>
    <tr>
      <th> Tensão de trabalho </th>
      <td> 4.8 </td>
      <td> 5.0 </td>
      <td> 6.0 </td>
      <td> V </td>
    </tr>
    <tr>
      <th> Torque </th>
      <td colSpan={3}> 1.5/1.8 </td>
      <td> Kg.cm </td>
    </tr>
    <tr>
      <th scope="row"> Velocidade </th>
      <td colSpan={3}> 0.12/0.16 </td>
      <td> s/60° </td>
    </tr>
    <tr>
      <th scope="row"> Tamanho </th>
      <td colSpan={3}> 32X11.5X24 </td>
      <td> mm </td>
    </tr>
    <tr>
      <th scope="row"> Peso </th>
      <td colSpan={3}> 8.5 </td>
      <td> g </td>
    </tr>
  </tbody>
</table>

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever a própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

:::note
O método de conexão do servo descrito neste artigo não é a abordagem mais adequada ou recomendada. Para servos — especialmente ao usar vários servos simultaneamente — deve‑se usar uma placa controladora de servo dedicada para fornecer alimentação adicional aos servos, com a placa de desenvolvimento controlando os servos por meio da placa controladora. Como a Seeed Studio atualmente não oferece uma placa controladora adequada, este artigo demonstra a conexão do servo diretamente à placa principal apenas como um exemplo de uso. Esta abordagem **não é recomendada** para projetos reais.
:::

Aqui vamos mostrar como este Grove - Servo funciona através de uma demonstração simples. Primeiro de tudo, precisamos preparar os itens abaixo:

| Seeeduino V4 | Grove - Servo | Base Shield |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

O servo tem três fios: alimentação, terra e sinal. O fio de alimentação é normalmente vermelho e deve ser conectado ao pino de 5V na placa Arduino/Seeeduino. O fio de terra é normalmente preto ou marrom e deve ser conectado a um pino de terra na placa Arduino. O pino de sinal é normalmente amarelo, laranja ou branco e deve ser conectado ao **D5** na placa Arduino. Podemos mudar para a porta digital que quisermos. Mas não se esqueça de mudar o número da porta na definição do código de demonstração ao mesmo tempo.

- Conecte o módulo à porta **D5** do Base Shield.
- Conecte o Grove- Base Shield ao Arduino.
- Conecte o Arduino ao PC por meio de um cabo USB.

#### Software

- Vamos varrer o eixo de um servo para frente e para trás em 180 graus usando a [Arduino Servo Library](https://arduino.cc/en/Reference/Servo).
- Abra o código diretamente pelo caminho: **File → Examples →Servo→Sweep**.

  ![](https://files.seeedstudio.com/wiki/Grove-Servo/img/library%20example.jpg)

```cpp
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 https://arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(5);  // attaches the servo on pin 5 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

- Envie o sketch. Podemos ver o servo varrendo.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte o Grove - Servo à porta D5 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Ligue o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta é a sua primeira vez usando o Codecraft, veja também o [Guia para usar o Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![servo](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser enviado, você verá o servo varrendo.
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

:::note
O método de conexão do servo descrito neste artigo não é a abordagem mais adequada ou recomendada. Para servos — especialmente ao usar vários servos simultaneamente — deve‑se usar uma placa controladora de servo dedicada para fornecer alimentação adicional aos servos, com a placa de desenvolvimento controlando os servos por meio da placa controladora. Como a Seeed Studio atualmente não oferece uma placa controladora adequada, este artigo demonstra a conexão do servo diretamente à placa principal apenas como um exemplo de uso. Esta abordagem **não é recomendada** para projetos reais.
:::

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Servo|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - Servo à porta 12 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo_Hat.jpg)

:::note
No passo 3 você pode conectar o módulo servo a **qualquer porta GPIO**, mas certifique‑se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::tip
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::
- **Passo 1**. Siga [Configuração de Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#Configuração-de-Software) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo‑fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_servo.py 12

```

A seguir está o código grove_servo.py.

```python

import RPi.GPIO as IO
import sys
import time
from numpy import interp

IO.setwarnings(False)
IO.setmode(IO.BCM)

class GroveServo:
    MIN_DEGREE = 0
    MAX_DEGREE = 180
    INIT_DUTY = 2.5

    def __init__(self, channel):
        IO.setup(channel,IO.OUT)
        self.pwm = IO.PWM(channel,50)
        self.pwm.start(GroveServo.INIT_DUTY)

    def __del__(self):
        self.pwm.stop()

    def setAngle(self, angle):
        # Map angle from range 0 ~ 180 to range 25 ~ 125
        angle = max(min(angle, GroveServo.MAX_DEGREE), GroveServo.MIN_DEGREE)
        tmp = interp(angle, [0, 180], [25, 125])
        self.pwm.ChangeDutyCycle(round(tmp/10.0, 1))

Grove = GroveServo

def main():
    if len(sys.argv) < 2:
        print('Usage: {} servo_channel'.format(sys.argv[0]))
        sys.exit(1)

    servo = GroveServo(int(sys.argv[1]))

    while True:
        for x in range(0, 180):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)
        for x in range(180, 0, -1):
            print x, "degree"
            servo.setAngle(x)
            time.sleep(0.05)

if __name__ == '__main__':
    main()



```

:::tip
    Se tudo correr bem, você verá o servo varrer.
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_servo.py 12
0 degree
1 degree
2 degree
3 degree
4 degree
5 degree
6 degree
7 degree
8 degree
9 degree
10 degree
11 degree
12 degree
13 degree
14 degree
15 degree
16 degree
17 degree
18 degree
19 degree
20 degree
21 degree
^CTraceback (most recent call last):
  File "grove_servo.py", line 81, in <module>
    main()
  File "grove_servo.py", line 74, in main
    time.sleep(0.05)
KeyboardInterrupt


```

Você pode encerrar este programa simplesmente pressionando ++ctrl+c++.

## Recursos

- **[Document]** [Compreendendo Servos RC](http://www.rchelicopterfun.com/rc-servos.html)
- **[Library]**[Tutorial Arduino - Biblioteca Servo](https://www.arduino.cc/en/Reference/Servo)
- **[Library]** [Código CodeCraft](https://files.seeedstudio.com/wiki/Grove-Servo/res/Servo.zip)
- **[Demo]** [Relógio Digital/Analógico - Arduino + PaperCraft](https://www.instructables.com/id/DigitalAnalog-Clock-Arduino-PaperCraft/?ALLSTEPS)
- **[Demo]** [Mesa XY com Servo de Hobby de Baixo Custo](https://www.instructables.com/id/Low-Cost-Hobby-Servo-XY-Table/?ALLSTEPS)

## Projetos

**Módulo Grove de Servomotor**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XNPn7AUmgqU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8GTej6Lv8us" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
