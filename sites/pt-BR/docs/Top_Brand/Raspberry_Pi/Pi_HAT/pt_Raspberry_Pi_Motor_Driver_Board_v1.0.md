---
description: Placa Controladora de Motor para Raspberry Pi v1.0
title: Placa Controladora de Motor para Raspberry Pi v1.0
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_Motor_Driver_Board_v1.0
sku: 103030031
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Raspberry_Pi_Motor_Driver_Board_v1.0/
---

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0.jpg)

A Placa Controladora de Motor para Raspberry Pi v1.0 é baseada no CI de potência H-Bridge duplo Freescale MC33932, que pode controlar cargas indutivas com correntes de até 5,0A de pico por ponte. Ela permite controlar dois motores CC com sua Raspberry Pi B/B+/A+ e Pi 2 Model B, controlando a velocidade e a direção de cada um de forma independente.

A Placa Controladora de Motor para Raspberry Pi v1.0 suporta uma faixa muito ampla de tensão de entrada de 6V~28V. Além disso, o conversor DC/DC onboard suporta uma faixa muito ampla de tensão de entrada e pode fornecer uma alimentação de 5V para a Raspberry Pi com corrente máxima de 1000mA. Assim, você só precisa de uma fonte de alimentação para acionar os motores e energizar a Raspberry Pi.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

Recursos
--------

- Proteção de curto-circuito na saída (curto para VPWR ou GND)
- Limitação de sobrecorrente (regulação) via PWM interno de tempo-desligado constante
- Redução dependente da temperatura do limite de corrente
- Compatível com Raspberry Pi 3B/3B+/4

Especificações
--------------

<table border="1" cellspacing="0" width="600">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de Operação
</th>
<td>
6
</td>
<td>
/
</td>
<td>
28
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Saída DC/DC:
</th>
<td>
/
</td>
<td>
5V/1000mA
</td>
<td>
/
</td>
<td>
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente de Saída (Para Cada Canal)
</th>
<td>
/
</td>
<td>
2 (operação contínua)
</td>
<td>
5 (pico)
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Frequência PWM
</th>
<td>
/
</td>
<td>
/
</td>
<td>
11
</td>
<td>
kHz
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de Duty Cycle de Saída
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %
</td>
</tr>
<tr align="center">
<th scope="row">
Tensão de Entrada Lógica
</th>
<td>
-0.3
</td>
<td>
/
</td>
<td>
7
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Temperatura de Operação
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
120
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensões
</th>
<td colspan="3">
91.20 *56.15* 32
</td>
<td>
mm
</td>
</tr>
</table>

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p3.jpg)

- **J1**: Conector de Entrada DC.
- **J2**: Conector de saída do Driver de Motor.
- **EN,FT**: Jumpers para controle de EN e detecção de sinal de falha (Fault). Se o jumper EN estiver em curto, o sinal EN será mapeado para o pino D4; você pode controlar a desativação da saída da ponte H ou resetar o sinal de falha pelo pino D4. Se o jumper FT estiver em curto, o sinal de falha será mapeado para o pino D3; você também pode ler o sinal de falha a partir do pino D3.
- **IO**: Jumper de Seleção do Nível de Tensão Lógica. Você pode escolher o nível de tensão de lógica de controle por meio deste jumper.
- **Fonte de Alimentação**: Você deve energizar o shield a partir de J1 (conector de entrada DC). A faixa de tensão de entrada pode ser ajustada entre 6Vdc ~ 28Vdc. O conversor DC/DC onboard pode converter a tensão DC de entrada em tensão de saída de 5Vdc para alimentar o circuito lógico. O conversor DC/DC também pode energizar a placa microcontroladora (Arduino/Seeeduino) a partir do pino "5V" com corrente máxima de 100mA.
- **Interface do Motor**：Out 1 e Out 2 (Out 3 e Out 4) conectam o Motor A(B) para motor DC.

:::caution
Não toque no CI da ponte H ou na placa de PCB durante o funcionamento. Sua temperatura pode alcançar até 100 graus no caso de operação em plena carga.
:::

Uso
-----

Este demo usa um Raspberry Pi B para mostrar que a Placa Controladora de Motor para Raspberry Pi v1.0 pode ser usada para controlar o motor DC para frente e para trás.

### Instalação de Hardware

- Raspberry Pi B & Placa Controladora de Motor para Raspberry Pi v1.0
- Conexão de hardware conforme mostrado

Conecte à rede e à alimentação.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p6.jpg)

### Parte de Software

1. Baixe [Motor_Driver.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Motor_Driver.py) e [PiSoftPwn.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/PiSoftPwm.py) para a mesma pasta. Aqui está o código de Motor_Driver.py.

```
#!/usr/bin/python
import RPi.GPIO as GPIO
import time
import signal   

from PiSoftPwm import *

#print 'Go_1...'
#frequency = 1.0 / self.sc_1.GetValue()
#speed = self.sc_2.GetValue()

class Motor():
    def __init__(self):
    # MC33932 pins
        self.PWMA = 25  
        self.PWMB = 22
        self._IN1 = 23  
        self._IN2 = 24 
        self._IN3 = 17
        self._IN4 = 27

    # Initialize PWMA PWMB 
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.PWMA, GPIO.OUT)
        GPIO.setup(self.PWMB, GPIO.OUT)
        GPIO.output(self.PWMA, True)
        GPIO.output(self.PWMB, True)

    # Initialize PWM outputs
        self.OUT_1  = PiSoftPwm(0.1, 100, self._IN1, GPIO.BCM)
        self.OUT_2  = PiSoftPwm(0.1, 100, self._IN2, GPIO.BCM)
        self.OUT_3  = PiSoftPwm(0.1, 100, self._IN3, GPIO.BCM)
        self.OUT_4  = PiSoftPwm(0.1, 100, self._IN4, GPIO.BCM)

        # Close pwm output
        self.OUT_1.start(0)
        self.OUT_2.start(0)
        self.OUT_3.start(0)
        self.OUT_4.start(0)

        self.frequency = 0.01
        self.duty = 60

    def Setting(self, frequency, duty):
        self.frequency = frequency
        self.duty = duty

    def Go_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(self.duty)
        self.OUT_2.changeNbSlicesOn(0)

    def Back_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(self.duty)

    def Go_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(self.duty)

    def Back_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(self.duty)
        self.OUT_4.changeNbSlicesOn(0)

    def Stop(self):
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(0)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(0)

if __name__=="__main__":
    motor=Motor()
    # Called on process interruption. Set all pins to "Input" default mode.
    def endProcess(signalnum = None, handler = None):
        motor.OUT_1.stop()
        motor.OUT_2.stop()
        motor.OUT_3.stop()
        motor.OUT_4.stop()
        motor.GPIO.cleanup()
        exit(0)

    # Prepare handlers for process exit
    signal.signal(signal.SIGTERM, endProcess)
    signal.signal(signal.SIGINT, endProcess)
    signal.signal(signal.SIGHUP, endProcess)
    signal.signal (signal.SIGQUIT, endProcess)

    motor.Setting(0.01, 60)
    print 'motor start...'
    while True:
        print 'motor A turning forward...'
        motor.Go_1()
        time.sleep(1)
        print 'motor A turning backward...'
        motor.Back_1()
        time.sleep(1)
        print 'motor A stop...'
     motor.Stop()
     time.sleep(1)
        print 'motor B turning forward...'
        motor.Go_2()
        time.sleep(1)
        print 'motor B turning backward...'
        motor.Back_2()
        time.sleep(1)
        print 'motor B stop...'
     motor.Stop()
     time.sleep(1)

```

2. Execute este programa. Os LEDs 1 e 2 na Placa Controladora de Motor para Raspberry Pi v1.0 acenderão alternadamente; os LEDs 3 e 4 também acenderão alternadamente.

Isso significa que Out 1 e Out 2 (Out 3 e Out 4) conectam o Motor A(B) para frente e para trás.

3. Você pode ver o fenômeno a seguir:

Console serial:

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p4.jpg)

Placa Controladora de Motor para Raspberry Pi v1.0:
LED verde e LED azul acendem alternadamente.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p5.jpg)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo Eagle Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip)
- [PDF Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0.pdf)
- [MC33932VW Datasheet](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/MC33932VW.pdf)
- [TD1519A Datasheet](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/TD1519A.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

