---
title: Grove - Relay
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Relay/
slug: /Grove-Relay
sku: 103020005
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Relay/
---


<!-- <p style=":center"><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" /></p> -->

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg)

O módulo Grove-Relay é uma chave digital normalmente aberta. Através dele, você pode controlar um circuito de alta tensão com baixa tensão, por exemplo, 5V no controlador. Há um LED indicador na placa, que acenderá quando os terminais controlados forem fechados.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Parâmetro     | V1.1     |V1.2     |
| :------------- | :------------- |:------------- |
| Data de lançamento do produto       | 27 Jan 2013       |9 Jun 2014|
|Tensão de operação|5V|3.3V~5V|
|Corrente de operação|60mA|100mA|
|Vida útil do relé|100.000 ciclos|100.000 ciclos|
|Tensão máxima de comutação|250VAC/30VDC|250VAC/30VDC|
|Corrente máxima de comutação|5A|5A|

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Começando com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

#### Materiais necessários

| Seeeduino V4.2 | Base Shield| Grove-Button **x2** |Grove-Relay|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">Compre Agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" >Compre Agora</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">Compre Agora</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html">Compre Agora</a>|

:::note
    **1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo com 2 fios não consegue transferir dados. Se você não tem certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Passo 1.** Conecte o Grove-Relay à porta **D4** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove-Button nº1 à porta **D2** do Grove-Base Shield, conecte o Grove-Button nº2 à porta **D3** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC via um cabo Micro-USB.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button-relay.jpg)

:::note
    Se não tivermos o base shield, também podemos conectar diretamente o Grove-Relay e o Grove-Button à placa Arduino. Siga a conexão abaixo.
:::

| Grove-Relay | Arduino | Cabo Grove|
|-------------|---------|-----------|
| GND         | GND     | Preto|
| VCC         | 5V      |Vermelho|
| SIG         | D4      |Amarelo|

| Grove-Button#1 | Arduino |Cabo Grove|
|----------------|---------|-------|
| GND            | GND     |Preto|
| VCC            | 5V      |Vermelho|
| SIG            | D2      |Amarelo|

| Grove-Button#2 | Arduino |Cabo Grove|
|----------------|---------|----|
| GND            | GND     |Preto|
| VCC            | 5V      |Vermelho|
| SIG            | D3      |Amarelo|

#### Software

Aqui está um exemplo que mostra como controlar um Grove - Relay com um Grove - Button. Quando um botão é pressionado, o relé fechará. Quando o outro botão é pressionado, o relé abrirá.

- **Passo 1.** Abra a IDE do Arduino e copie o código a seguir para um novo sketch.

```
// Relay Control

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(4, HIGH);
    delay(100);
  }
  if (digitalRead(3)==HIGH)
  {
    digitalWrite(4, LOW);
  }
}

```

- **Passo 2.** Envie o exemplo. Se você não sabe como enviar o código, verifique [Como enviar código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

Depois de concluir o upload, se você pressionar o botão nº1 o relé deverá ligar; e se você pressionar o botão nº2 o relé deverá desligar.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Relay à porta D4, conecte dois Grove - Button à porta D2 e à porta D3 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guia para usar Arduino com Codecraft](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Relay/img/cc_Relay.png)

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser enviado, o relé ligará quando você pressionar o botão conectado à porta D2, e desligará quando você pressionar o botão conectado à porta D3.
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[Compre AGORA](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Compre AGORA](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Compre AGORA](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o Grove - Relay à porta 12 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay_Hat.jpg)

:::note
    No passo 3 você pode conectar o módulo de relé a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Configuração de Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#Configuração-de-Software) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_relay.py 12

```

A seguir está o código grove_relay.py.

```python

from grove.gpio import GPIO


class GroveRelay(GPIO):
    def __init__(self, pin):
        super(GroveRelay, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveRelay


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    relay = GroveRelay(int(sys.argv[1]))

    while True:
        try:
            relay.on()
            time.sleep(1)
            relay.off()
            time.sleep(1)
        except KeyboardInterrupt:
            relay.off()
            print("exit")
            exit(1)            

if __name__ == '__main__':
    main()


```

:::success
    Se tudo correr bem, você poderá ver o indicador LED piscando.
:::
Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

**Materiais necessários**

| Raspberry pi | GrovePi_Plus| Grove-Button  |Grove-Relay|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank">Get One Now</a>|

- **Passo 1.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 2.** Conecte o Grove-Relay à porta **D4** do GrovePi_Plus.

- **Passo 3.** Conecte o Grove-Button à porta **D3** do GrovePi_Plus.

- **Passo 4.** Conecte o Raspberry ao PC via cabo USB.

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/GrovePiPlus_Grove_relay.jpeg)

#### Software

Se esta é a primeira vez que você usa o GrovePi, faça esta parte passo a passo. Se você já é um velho amigo do GrovePi, pode pular o **Passo 1** e o **Passo 2**.

- **Passo 1.** Configurando o software. Na linha de comando, digite os seguintes comandos:

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você **não pode usar esta linha de comando**.
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

Para mais detalhes sobre esta parte, consulte [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).

- **Passo 2.** Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::note
    Nós sugerimos fortemente que você atualize o firmware, caso contrário, para alguns sensores você poderá obter erros.
:::

- **Passo 3.** Execute o seguinte comando para obter o resultado.

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você tem que usar esta linha de comando **apenas com Python3**.
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/
sudo python3 grove_switch_relay.py
```

Se você quiser verificar o código, pode usar o seguinte comando:

```
sudo nano grove_switch_relay.py

```

O código :

```python
# Raspberry Pi + Grove Switch + Grove Relay

import time
import grovepi
# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND

switch = 3
# Connect the Grove Relay to digital port D4
# SIG,NC,VCC,GND

relay = 4
grovepi.pinMode(switch,"INPUT")
grovepi.pinMode(relay,"OUTPUT")
while True:
    try:
        if grovepi.digitalRead(switch):
            grovepi.digitalWrite(relay,1)
        else:
            grovepi.digitalWrite(relay,0)
            time.sleep(.05)
    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

### Brincar com TI LaunchPad

Controlando outros eletrônicos (Relay)

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay.jpg)

Este exemplo mostra como usar o módulo Grove-relay para controlar cargas maiores, isto é, a luz de um abajur de mesa. Um sinal de tensão de 3 V pode fazer com que o relay ligue, permitindo que a corrente flua através do aparelho conectado.

```
/*
Relay
The basic Energia example.
This example code is in the public domain.
*/

#define RELAY_PIN 39

// the setup routine runs once when you press reset:
void setup() {
         pinMode(RELAY_PIN, OUTPUT); // initialize the digital pin as an output.
}

// the loop routine runs over and over again forever:
void loop() {
         digitalWrite(RELAY_PIN, HIGH); // turn the relay on (HIGH is the voltage level)
         delay(1000);   // wait for a second
         digitalWrite(RELAY_PIN, LOW);   // turn the relay o by making the voltage LOW
         delay(1000);   // wait for a second
}
```

## Visualizador de Esquemáticos Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Nós temos esta peça disponível no [geppetto](https://geppetto.seeedstudio.com/), design eletrônico modular fácil com a Seeed e Geppeto. Construa agora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## Recursos

- **[Eagle]** [Grove - Relay – Esquemático e PCB em formato Eagle](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip)
- **[PDF]** [Grove - Relay – PCB em formato PDF](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20PCB.pdf)
- **[PDF]** [Grove - Relay – Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20Schematic.pdf)
- **[Datasheet]** [HLS8-T73 Série Relay – Datasheet](https://files.seeedstudio.com/wiki/Grove-Relay/res/Relay_Datasheet.pdf)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove_Relay_CDC_File.zip)

## Projetos

<table class="tg">
  <tr>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe></th>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/rei-vilo/private-iot-with-blynk-on-local-server-619926/embed' width='350'></iframe></th>
    <th class="tg-yw4l"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/josephroberts/resinified-office-lock-0ca2eb/embed' width='350'></iframe></th>
  </tr>
</table>

**Módulo Grove Relay**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/DnHqh_Rupb8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JOsjUOI9FU8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
