---
description: Grove - Sensor de Colisão
title: Grove - Sensor de Colisão
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Collision_Sensor
sku: 101020005
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Collision_Sensor/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/Grove_–_Collision_Sensor_photo.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/Grove_–_Collision_Sensor_photo.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Sensor de Colisão pode detectar se ocorre qualquer movimento de colisão ou vibração. Ele irá gerar um sinal de pulso em nível baixo quando uma vibração for detectada. Para tornar o sinal de saída mais confiável e limpo, adicionamos um circuito externo necessário para reduzir o impacto do ruído. Portanto, agitações normais não causarão nenhuma saída. O sensor tem alta sensibilidade. Você pode usá‑lo em seu projeto, como despertar e desligamento automáticos para gerenciamento de bateria.

Sua tensão de operação é 5V, o que o torna compatível com o sistema padrão de 5V do Arduino/Seeeduino.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)

## Especificações

- Tensão: 3,3/5V

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Compatíveis

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

Com base no fato de que o sinal de saída mudará quando ocorrer uma colisão, projetamos este demo: cada vez que o sensor detecta colisão, o LED acenderá. Aqui o LED é usado como um dispositivo controlado, e você pode se basear neste demo para controlar seu dispositivo, como uma luz de bicicleta.

O procedimento é o seguinte:

1.Conecte o sensor de colisão à porta Digital 2 do Grove - Basic Shield usando um cabo Grove e conecte um LED ao pino 13.

2.Conecte o Grove - Basic Shield ao Arduino.

3.Conecte o Arduino/Seeeduino ao PC usando um cabo USB.

4.Copie e cole o código abaixo em um novo sketch do Arduino. E faça o upload para o seu Arduino.

```c
// Test Grove - Collision Sensor
#define LED 13 //the onboard LED of Arduino or Seeeduino
#define COLLISION_SENSOR 2//collision sensor is connected with D2 of Arduino

void setup()
{
    pins_init();
}

void loop()
{
    if(isTriggered())
    {
        turnOnLED();
        delay(2000);
    }
    else turnOffLED();
}

void pins_init()
{
    pinMode(LED,OUTPUT);
    turnOffLED();
    pinMode(COLLISION_SENSOR,INPUT);
}

boolean isTriggered()
{
    if(!digitalRead(COLLISION_SENSOR))
    {
        delay(50);
        if(!digitalRead(COLLISION_SENSOR))
        return true;//the collision sensor triggers
    }
    return false;
}

void turnOnLED()
{
    digitalWrite(LED,HIGH);//the LED is on
}

void turnOffLED()
{
    digitalWrite(LED,LOW);//the LED is off
}
```

5.Agora você pode verificar o estado do LED. O LED deve acender toda vez que você tamborilar os dedos na mesa.

Você pode ajustar a sensibilidade do sensor alterando a função delay(50) no código.

```c
if(!digitalRead(COLLISION_SENSOR))
{
    return true;//the collision sensor triggers
}
return false;
```

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Sensor de Colisão à porta D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a primeira vez que você usa o Codecraft, consulte também o [Guia para usar Arduino com Codecraft](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc, que pode ser baixado no final desta página.
<!-- 
![cc](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/cc_Collision_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/cc_Collision_Sensor.png" alt="pir" width={600} height="auto" /></p>

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o upload do código terminar, o LED no pino 13 do Arduino acenderá quando o Sensor de Colisão detectar colisão.
:::

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Coisas usadas neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Sensor de Colisão|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - Sensor de Colisão à porta D5 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/with_hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/with_hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    No passo 3, você pode conectar o Grove - Sensor de Colisão a **qualquer porta GPIO**, mas certifique‑se de alterar o comando com o número de porta correspondente.
:::

#### Software

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo‑fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python grove_collision_sensor.py 5

```

A seguir está o código grove_collision_sensor.py.

```python

import time
from grove.gpio import GPIO


class GroveCollisionSensor(GPIO):
    def __init__(self, pin):
        super(GroveCollisionSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_collision = None
        self._on_NoCollision = None
        self.collisionState = False

    @property
    def on_collision(self):
        return self._on_collision

    @on_collision.setter
    def on_collision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_collision = callback

    @property
    def on_NoCollision(self):
        return self._on_NoCollision

    @on_NoCollision.setter
    def on_NoCollision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_NoCollision = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if not value:
            if callable(self._on_collision):
                self._on_collision(dt)
        else:
            if callable(self._on_NoCollision):
                self._on_NoCollision(dt)

Grove = GroveCollisionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    button = GroveCollisionSensor(int(sys.argv[1]))

    def on_collision(t):
        print('Collision')
    def on_NoCollision(t):
        print("No Collision")

    button.on_collision = on_collision
    # button.on_NoCollision = on_NoCollision

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    Se tudo correr bem, você poderá ver o seguinte resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_collision_sensor.py 5
Collision
Collision
Collision
Collision
Collision
Collision
Collision
^CTraceback (most recent call last):
  File "grove_collision_sensor.py", line 112, in <module>
    main()
  File "grove_collision_sensor.py", line 108, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py/grove $ 

```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

### Brincar com Raspberry Pi (com GrovePi_Plus)

1.Você deve ter um raspberry pi e um grovepi ou grovepi+.

2.Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](/pt-br/GrovePi_Plus/).

3.Conexão

- Conecte o sensor ao soquete D2 do grovepi usando um cabo grove.

4.Navegue até o diretório de demonstrações:

```
cd yourpath/GrovePi/Software/Python/
```

- Para ver o código

```
nano grove_collision_sensor.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove Collision Sensor to digital port D2
# SIG,NC,VCC,GND
collision_sensor = 2

grovepi.pinMode(collision_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(collision_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

5.Execute a demonstração.

```
sudo python grove_collision_sensor.py
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Collision Sensor Arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip)
- **[PDF]** [MVS0608.02 folha de dados](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/DataSheet-MVS0608_02-v2_1.pdf)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove_Collision_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Collision_Sensor -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
