---
description: Grove - Sensor de Vibração Piezoelétrico
title: Grove - Sensor de Vibração Piezoelétrico
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Piezo_Vibration_Sensor
sku: 101020031
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Piezo_Vibration_Sensor/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg" alt="pir" width={600} height="auto" /></p>

Grove-Piezo Vibration Sensor é adequado para medições de flexibilidade, vibração, impacto e toque. O módulo é baseado no sensor de filme PZT LDT0-028. Quando o sensor se move para frente e para trás, uma certa tensão será gerada pelo comparador de tensão interno. Uma ampla faixa dinâmica (0,001Hz~1000MHz) garante um excelente desempenho de medição. Além disso, você pode ajustar sua sensibilidade ajustando o potenciômetro on-board com um parafuso.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)
## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Piezo Vibration Sensor V1.1 | Inicial                                                                                                                                                                                    | Jul 2014      |

## Recursos

-   Soquete Grove padrão
-   Ampla faixa dinâmica：0.1Hz~180Hz
-   Sensibilidade ajustável
-   Alta receptividade para impacto forte

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Aplicações

-   Detecção de vibração em máquina de lavar
-   Interruptor de despertar de baixo consumo
-   Detecção de vibração de baixo custo
-   Alarmes de carro
-   Movimento corporal
-   Sistemas de segurança

## Primeiros Passos


### Brincar com Arduino

#### Hardware

O Grove - Piezo Vibration Sensor gera um nível lógico ALTO quando a vibração é detectada. Podemos usar qualquer pino do Arduino para ler os dados. Aqui está um exemplo do Sensor de Vibração Piezoelétrico controlando um LED. Quando a vibração é detectada, este sensor gera um sinal lógico alto (a sensibilidade pode ser alterada ajustando o potenciômetro) e um LED acende.

- Passo 1. Prepare os itens abaixo:

| Seeeduino V4 | Base Shield | Grove - Piezo Vibration |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|)<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- Passo 2. Conecte o módulo ao **D2** do base shield usando o cabo Grove de 4 pinos, usamos o **LED on-board no pino digital 13** como saída.
- Passo 3. Conecte o Basic Shield ao Arduino.
- Passo 4. Conecte o Arduino ao PC usando um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    Ele pode gerar nível baixo mesmo que originalmente gerasse nível alto quando você aumenta a tensão de limiar ajustando o potenciômetro no sentido horário.
:::
#### Software

- Passo 1. Copie e cole o código abaixo em um novo sketch do Arduino.

```c
const int ledPin=13;
void setup() {
    Serial.begin(9600);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorState = digitalRead(2);
    Serial.println(sensorState);
    delay(100);
    if(sensorState == HIGH)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

- Passo 2. O LED acenderá quando a vibração for detectada.



### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Piezo Vibration|
|----------------|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|


- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - Piezo Vibration Sensor à porta 12 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    No passo 3 você pode conectar o sensor de vibração piezoelétrico a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::
- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_piezo_vibration_sensor.py 12

```

A seguir está o código grove_piezo_vibration_sensor.py.

```python

import time
from grove.gpio import GPIO


class GrovePiezoVibrationSensor(GPIO):
    def __init__(self, pin):
        super(GrovePiezoVibrationSensor, self).__init__(pin, GPIO.IN)
        self._on_detect = None

    @property
    def on_detect(self):
        return self._on_detect

    @on_detect.setter
    def on_detect(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_detect = callback

    def _handle_event(self, pin, value):
        if value:
            if callable(self._on_detect):
                self._on_detect()

Grove = GrovePiezoVibrationSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GrovePiezoVibrationSensor(int(sys.argv[1]))

    def callback():
        print('Detected.')

    pir.on_detect = callback

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    Se tudo correr bem, você conseguirá ver o seguinte resultado
:::
```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_piezo_vibration_sensor.py 12
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
^CTraceback (most recent call last):
  File "grove_piezo_vibration_sensor.py", line 84, in <module>
    main()
  File "grove_piezo_vibration_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt


```


Você pode sair deste programa simplesmente pressionando ++ctrl+c++.



### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- Etapa 1. Prepare os seguintes itens:

| Raspberry pi | GrovePi_Plus | Grove - Piezo Vibration |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- Etapa 2. Conecte o GrovePi_Plus ao Raspberry.
- Etapa 3. Conecte o Grove-Piezo Vibration à porta A0 do GrovePi_Plus.
- Etapa 4. Conecte o Raspberry ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note 
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- Etapa 1. Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.
- Etapa 2. Dê um git clone no repositório do Github.

```python
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- Etapa 3. Execute os comandos abaixo para detectar a vibração.

```python
cd ~/GrovePi/Software/Python
python3 grove_piezo_vibration_sensor.py
```

Aqui está o código grove_piezo_vibration_sensor.py.

```python
import time
import grovepi

# Connect the Grove Piezo Vibration Sensor to analog port A0
# OUT,NC,VCC,GND
piezo = 0

grovepi.pinMode(piezo,"INPUT")

while True:
    try:
        # When vibration is detected, the sensor outputs a logic high signal
        print grovepi.analogRead(piezo)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- Etapa 4. Veremos a vibração exibida no terminal como abaixo.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_piezo_vibration_sensor.py
1023
1023
1023
1023
18
17
18
17
```

:::note
    Também podemos usar grovepi.digitalRead(2) para ler o status de vibração conectando o sensor à porta D2 do GrovePi.
:::

## FAQs

**P1: A saída é digital ou analógica?**

R1: A saída é digital, Baixa ou Alta.


## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

- **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki//Grove-Piezo_Vibration_Sensor/res//Grove-Piezo_Vibration_Sensor_wiki.pdf)
- **[Eagle]** [Arquivo Eagle do Grove - Piezo Vibration Sensor](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip)
- **[PDF]** [Arquivo PDF do Esquemático do Grove - Piezo Vibration Sensor](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove-Piezo_Vibration_Sensor.pdf)
- **[PDF]** [Arquivo PDF da PCB do Grove - Piezo Vibration Sensor](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove%20-%20Piezo%20Vibration%20Sensor%20v1.1%20PCB.pdf)
- **[Datasheet]** [Datasheet do Piezo Vibration Sensor](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Piezo_Vibration_Sensor.pdf)


## Projetos

**Grove Starter Kit For Arduino - Piezo Vibration Sensor**: Ensina como usar o sensor de vibração piezoelétrico no kit inicial Grove para Arduino.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/trduunze/grove-starter-kit-for-arduino-piezo-vibration-sensor-92c531/embed' width='350'></iframe>

**Seat Monitor**: Usando ARTIK cloud para monitorar o estado do assento da cabine.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/momososo/seat-monitor-4288dc/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
