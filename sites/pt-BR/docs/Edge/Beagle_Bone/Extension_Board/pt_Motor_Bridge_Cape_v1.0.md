---
description: Motor Bridge Cape v1.0
title: Motor Bridge Cape v1.0
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Motor_Bridge_Cape_v1.0
sku: 105030006
last_update:
  date: 1/10/2022
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Motor_Bridge_Cape_v1.0/
---


![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_bridge_driver.jpg)

O Motor Bridge Cape possui controle de motor bidirecional usando dois TB6612FNG integrados de ponte H dupla, então ele pode controlar dois motores de passo ou quatro motores DC escovados com alimentação DC de 6 ~15V e cerca de 1A de consumo de corrente por motor. O cape fornece alimentação regulada de 5V para BBG ou BBB com tensão de entrada máxima de 15V. Ele também possui seis interfaces de controle de servo e seis I\O de expansão. Todas as funcionalidades são fornecidas pelo coprocessador STM32F0 integrado. O MCU pode se comunicar com o BeagleBone® pela interface I<sup>2</sup>C ou UART.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)

Recursos
--------

- Pode acionar 4 motores DC ou 2 motores de passo
- Pode acionar 6 servos
- Plataforma Mbed
- Coprocessador STM32F0
- Dois TB6612FNG
- 6 I\Os de expansão
- Comunicação com BBG por interface I<sup>2</sup>C ou UART

Especificações
--------------

- Tensão de entrada da bateria: 6~15V
- Tensão de trabalho da ponte H: 6~15V
- Corrente de saída DC/DC 5V: máx. 2A
- Corrente de saída 3V3: máx. 350mA
- 4 drivers de ponte H, cada um com corrente nominal: 1.2A, corrente de pico: 3.2A
- 6 drivers de servo, tensão de trabalho: 5V, corrente total não maior que 1.5A
- Proteção contra conexão reversa de entrada
- Proteção contra sobrecorrente: fusível rápido único de 3A

Visão geral do hardware
-----------------

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_Bridge_Hardware_overview.jpg)

- **Fusível único de 3A**: Proteção contra sobrecorrente
- **Botão de reset**: Reinicia o coprocessador
- **Interface SWD**: Interface de depuração
- **Placa de prototipagem**: Estender outros circuitos
- **GPIOs**: Estender outros circuitos
- **Servos**: Interface para motor de servo
- **STM32F030R8**: O coprocessador
- **DC/DC**: Circuito de conversão de tensão
- **TB6612FNG**: CI de ponte H
- **Indicador**: Lâmpada indicadora para direção do motor
- **Chave de modo de trabalho**: Standby ou Trabalhando
- **Proteção contra reversão de entrada**: Proteger o circuito
- **Motor4/Motor3**: Aciona 2 motores DC ou 1 motor de passo
- **Motor2/Motor1**: Aciona 2 motores DC ou 1 motor de passo
- **Bateria**: Fornece energia para o motor

Primeiros passos
---------------

Após esta seção, mostrarei como usar o Motor Bridge Cape no BBG. Antes de começar, faça o download do código da biblioteca do Motor Bridge Cape Driver a partir do [Github](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB).

Para usar a biblioteca Motor Bridge Cape, simplesmente adicione o arquivo MotorBridge.py ao seu projeto. Depois, importe o arquivo python para o seu projeto e crie um objeto do Motor Bridge Cape.

```
import MotorBridge
motor = MotorBridge.MotorBridgeCape()
```

### Instalar as dependências

```
sudo apt-get update
sudo apt-get install build-essential python-pip python-dev python-smbus git
sudo pip install Adafruit-GPIO
```

### Motor de passo

A interface de Motor de Passo do Motor Bridge Cape é mostrada na figura abaixo.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/StepperMotor.jpg)

#### As funções do Motor de Passo

Aqui está uma breve descrição sobre a função do motor de passo.

**<u>StepperMotorAInit()</u>**

*Description*: Inicializa a porta do Motor de Passo A.

**<u>StepperMotorAMove(MoveSteps,StepDelayTime)</u>**

*Description*: Aciona o Motor de Passo A.

*MoveSteps*: Quantos passos o motor de passo irá mover. **Positivo** significa direção no sentido horário. **Negativo** significa direção no sentido anti-horário.

*StepDelayTime*: O tempo morto para cada passo. unidade: µs.

**<u>StepperMotorBInit()</u>**

*Description*: Inicializa a porta do Motor de Passo B.

**<u>StepperMotorBMove(MoveSteps,StepDelayTime)</u>**

*Description*: Aciona o Motor de Passo B.

*MoveSteps*: Quantos passos o motor de passo irá mover. **Positivo** significa direção no sentido horário. **Negativo** significa direção no sentido anti-horário.

*StepDelayTime*: O tempo morto para cada passo. unidade: µs.

#### Exemplo de Motor de Passo

Copie o código a seguir para o seu projeto e salve-o como um arquivo python.

```
import MotorBridge
import time

def StepperMotorATest():
    print 'Hello From MotorBridge'
    motor.StepperMotorAInit()
    motor.StepperMotorAMove(1000,1000) # 1000 steppers  1000us every step
    time.sleep(1)
    motor.StepperMotorAMove(-1000,1000) #1000 steppers  1000us every step
    time.sleep(1)

def StepperMotorBTest():
    print 'Hello From MotorBridge'
    motor.StepperMotorBInit()
    motor.StepperMotorBMove(1000,1000) # 1000steppers  1000us every step
    time.sleep(1)
    motor.StepperMotorBMove(-1000,1000) # 1000 steppers  1000us every step
    time.sleep(1)


if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    StepperMotorATest()
    StepperMotorBTest()
```

### Motor DC

A interface de Motor DC do Motor Bridge Cape é mostrada na figura abaixo.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/DCMotorBBG.jpg)

#### As funções do Motor DC

Aqui está uma breve descrição sobre as funções do motor DC.

**<u>DCMotorInit(MotorName,Frequency)</u>**

*Description*: Inicializa o Motor DC e define a frequência.

*MotorName*: 1 ~ 4 significa Motor1 ~ Motor4.

*Frequency*: Define a frequência do motor DC.

:::note
Se você alterar a frequência do motor DC, a frequência dos outros motores DC também será alterada.
:::

**<u>DCMotorMove(MotorName,Direction,PWMDuty)</u>**

*Description*: Aciona o Motor DC. Define a direção e o PWMDuty.

*MotorName*: 1 ~ 4 significa Motor1 ~ Motor4.

*Direction*: 1 significa sentido horário. 2 significa sentido anti-horário. 3 para o motor.

*PWMDuty*: 0 ~ 100 significa 0% ~ 100% do ciclo de trabalho pwm.

**<u>motor.DCMotorStop(MotorName)</u>**

*Description*: Para o Motor DC.

*MotorName*: 1 ~ 4 significa Motor1 ~ Motor4.

#### Exemplo de Motor DC

Copie o código a seguir para o seu projeto e salve-o como um arquivo python.

```
import MotorBridge
import time

MotorName        = 1
ClockWise        = 1
CounterClockWise = 2
PwmDuty          = 90
Frequency        = 1000

if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.DCMotorInit(MotorName,Frequency)
    while True:
        motor.DCMotorMove(MotorName,ClockWise,PwmDuty)
        time.sleep(2)
        motor.DCMotorMove(MotorName,CounterClockWise,PwmDuty)
        time.sleep(2)
        print "hello"
        motor.DCMotorStop(MotorName)
        time.sleep(2)
```

### Servo

A interface de Servo do Motor Bridge Cape é mostrada na figura abaixo.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/ServoBBG.jpg)

#### As funções do Servo

Aqui está uma breve descrição sobre as funções do Servo.

**<u>ServoInit(ServoName,Frequency)</u>**

*Description*: Inicializa o Servo e define a frequência.

*ServoName*: 1 ~ 6 significa Servo1 ~ Servo6.

*Frequency*: Define a frequência do Servo, o valor padrão é 50 Hz.

**<u>ServoMoveAngle(ServoName,Angle)</u>**

*Description*: Aciona o Servo. Define o ângulo do Servo.

*ServoName*: 1 ~ 6 significa Servo1 ~ Servo6.

*Angle*: 0 ~ 180 significa de 0 graus a 180 graus.

#### Exemplo de Servo

Copie o código a seguir para o seu projeto e salve-o como um arquivo python.

```
import MotorBridge
import time
ServoName   =  2
Frequency   =  50
Angle1      =  20
Angle2      =  160

if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.ServoInit(ServoName,Frequency)

    while True:
        print 'Servo Test'
        motor.ServoMoveAngle(ServoName,Angle1)
        time.sleep(2)
        motor.ServoMoveAngle(ServoName,Angle2)
        time.sleep(2)
```

Atualizar o firmware
--------------------

Se houver algo errado com o seu cape, tente atualizá-lo. Esta seção mostra como atualizar o firmware do Motor Bridge Cape usando o BeagleBone® Green. Também funciona em BBGW e BBB.

1.Insira o Motor Bridge Cape no BBG/BBGW/BBB e conecte o BBG ao seu computador via cabo USB.

2.Conecte o seu BBG à internet e acesse-o via SSH como mostrado na figura abaixo.

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG1.PNG)

3.Faça o download do código do Github executando os seguintes comandos

```
git clone https://github.com/Seeed-Studio/MotorBridgeCapeFirmware
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG2.PNG)

4.Navegue até "MotorBridgeCapeFirmware" e execute o comando "make flash" para gravar o firmware.

```
cd MotorBridgeCapeFirmware/ && make flash
```

Após alguns segundos, você poderá ver a informação "Verification OK" no terminal

5.Verifique se o firmware foi gravado corretamente executando o seguinte comando

```
i2cdetect -y -r 1
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG3.PNG)

Se você encontrar o endereço I2C 0x4b, isso significa que você já atualizou o firmware com sucesso.

### Problemas conhecidos

#### Não é possível encontrar o endereço I2C

P: Eu já atualizei o firmware, mas não consigo detectar o endereço i2c?

R: Certifique-se de que o pino P9_23 esteja em nível Alto, já que o P9_23 está conectado ao pino de Reset do STM32. Eu configuro o pino P9_23 para nível alto na função de inicialização da classe MotorBridgeCape.

#### Não é possível atualizar o firmware

P: Quando atualizo o firmware, a mensagem de erro diz que não é possível encontrar a UART2?

R: Você deve habilitar o BB-UART2, já que o BBG grava o firmware no Motor Bridge Cape pela UART2..

    vi /boot/uEnv.txt

Em seguida, descomente "cape_enable=capemgr.enable_partno=BB-UART2". Salve e saia do editor e, por fim, reinicie sua placa.

#### O Cape ainda não está funcionando

P: Eu já atualizei o firmware com sucesso e consigo detectar o endereço I2C, mas por que ainda não consigo fazer o cape funcionar?

R: Por favor, note que há uma chave de modo de trabalho na placa; certifique-se de que a chave esteja na posição de trabalho. Se você ainda tiver outras perguntas, por favor, vá ao nosso fórum.

#### falha ao executar make flash

P: Não é possível executar make flash com o código de erro "Can't init. Ensure BOOT0=1 BOOT1=0, and reset Device"

R: Siga as etapas abaixo para resolver o problema.

- Etapa 1: Execute sudo nano /boot/uEnv.txt e então adicione as 2 linhas abaixo no final do uEnv.txt.

```
uboot_overlay_addr0=/lib/firmware/BB-UART2-00A0.dtbo
enable_uboot_cape_universal=1  
```

- Passo 2. Reinicie o BBGW
- Passo 3. Execute o Sudo make flash novamente.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor%20Bridge%20Cape%20v1.0%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Temos esta peça disponível no [geppetto](https://geppetto.seeedstudio.com/), design eletrônico modular fácil com Seeed e Geppeto. Construa agora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

Recursos
---------

- [Esquemático em PDF](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0_sch.pdf)
- [PCB em arquivo Eagle](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0brd.rar)
- [Esquemático em arquivo Eagle](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0sch.rar)
- [Biblioteca da Motor Bridge Cape](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB)
- [Código-fonte do Firmware da Motor Bridge Cape](https://github.com/Lee-Kevin/MotorBridgeCapeFirmwareSourceCode)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0 -->

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

