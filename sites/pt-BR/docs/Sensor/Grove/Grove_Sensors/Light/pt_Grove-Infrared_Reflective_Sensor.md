---
description: Grove - Sensor Reflexivo Infravermelho
title: Grove - Sensor Reflexivo Infravermelho
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Infrared_Reflective_Sensor
sku: 101020174, 101020029
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Reflective_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/main.jpg" /></div>

O Grove - Sensor Reflexivo Infravermelho é usado para detectar a presença de um objeto dentro de um intervalo específico. O sensor consiste em um par de LED IR e fotosensor (fototransistor). A luz emitida pelo LED IR é refletida por qualquer objeto colocado na frente do sensor e essa reflexão é detectada pelo fotosensor (fototransistor). Qualquer superfície branca (ou de cor mais clara) reflete mais do que uma superfície preta (ou de cor mais escura).

Quando a luz refletida é detectada, ele produz saída **Digital LOW** (ou Binário **0**) no pino **SIG**. O LED indicador on-board também acenderá. Se nenhuma reflexão for detectada ou se o objeto estiver muito longe do sensor, a saída no pino **SIG** permanece em **Digital High** (Binário **1**). O LED indicador on-board também ficará apagado. O alcance detectável deste sensor é de 4–16 mm. O módulo incorpora um Amplificador Operacional Rail-to-Rail para amplificar a saída do fototransistor. Há um potenciômetro que pode ser usado para ajustar o ganho do amplificador, isto é, a sensibilidade de detecção.

Com este sensor, você pode construir as seguintes aplicações (entre outras): **robôs seguidor de linha**, **encoders ópticos** e **aplicações de contagem de objetos**.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

:::caution
Este produto também é levemente sensível a radiações não infravermelhas e, portanto, qualquer luz forte sobre o fotosensor prejudica ou interfere na detecção da luz IR.
:::

## Rastreador de Versão

| Versão do produto              | Alterações        |Data de lançamento |
|------------------------------|--------------|----------------|
| Versões anteriores à v1.2     | Inicial  |Junho de 2012‎    |
| Versão 1.2 (versão atual) | Layout otimizado  | Abril de 2016   |

## Recursos

- Compatível com Grove e fácil de usar
- Altamente sensível e confiável
- Pequena área ocupada
- Sensibilidade ajustável para diferentes ocasiões

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| Parâmetro                                    | Valor                                                                          |
|----------------------------------------------|--------------------------------------------------------------------------------|
| Tensão de operação (V)                         | 3.3–5V                                                                       |
| Corrente de operação (mA)                        | 14.69–15.35 mA                                                                 |
| Distância efetiva detectável                | 4–15 mm                                                                     |
| Tempo de resposta                                | 10 μs                                                                          |
| Fototransistor: comprimento de onda de pico de sensibilidade | 800 nm                                                                         |
| LED IR: comprimento de onda de pico de emissão de luz       | 940 nm                                                                         |
| Fotosensor reflexivo                       | [datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR-220.pdf)          |
| Amplificadores operacionais de saída                | [datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf) |
| Peso                                       | 4 g                                                                            |

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Visão Geral do Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Grove-Infrared_Reflective_Sensor_v1.2_hardware_overview_1200_z.jpg" /></div>

- **Fotosensor reflexivo RPR220** - Fotosensor reflexivo altamente sensível.
- **LMV358** - amplificador operacional rail-to-rail.
- **LED indicador** - O LED acende quando a intensidade da luz infravermelha recebida excede um nível predefinido.
- **Potenciômetro de ajuste de sensibilidade à luz** - ajusta a sensibilidade do fotosensor à luz.

## Primeiros Passos

Vamos ver como implementar algumas aplicações básicas com este módulo:

### Brincar com Arduino

#### Seguidor de Linha

Este sensor pode ser usado para ajudar um carro robótico a seguir uma linha preta.

##### Hardware

- **Passo 1.** Prepare os seguintes materiais:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | Papel branco e caneta preta|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>||
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|   🙂   |

- **Passo 2.** Conecte o Grove - Infrared Reflective Sensor a qualquer porta do Grove-Base Shield através do cabo Grove; usamos **D2** neste exemplo.

- **Passo 3.** Posicione este sensor a 12 mm acima do papel branco (ou de outra cor clara).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-4.JPG" /></div>

- **Passo 4.** Ajuste o potenciômetro com uma chave de fenda para alterar a sensibilidade do fotosensor reflexivo, até que o LED indicador acenda. À medida que você gira no sentido horário, o fotosensor reflexivo ficará mais sensível à luz.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-5.JPG" /></div>

:::note
Use uma chave de fenda apropriada para ajustar o pequeno potenciômetro. Aplicar muita pressão ou fazer ajustes frequentes pode danificar o cursor do potenciômetro.
:::

- **Passo 5.** Mantendo a distância vertical, mova o sensor horizontalmente em direção à linha preta. O LED indicador deve apagar sobre a linha preta. Se ele ainda estiver aceso, ajuste o potenciômetro até que apague.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-6.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-7.JPG" /></div>

#### Detecção de Velocidade de Rotação

Vamos implementar um simples encoder óptico para detectar a velocidade de um motor

##### Hardware

- **Passo 1.** Prepare os seguintes materiais:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Reflective Sensor | Motor DC 3V/5V|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/N30%203V%20DC%2012000RPM%20DC%20Motor.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|  [Adquira agora](https://www.seeedstudio.com/N30-3V-DC-12000RPM-DC-Motor-p-1886.html)   |

- **Passo 2.** Conecte o Infrared Reflective Sensor à porta **D2** do Grove - Base Shield e conecte o motor à **D6** (na verdade, você pode apenas conectar VCC e GND para alimentar o motor).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_arduino.jpg" /></div>

- **Passo 3.** Prenda um prato de papel redondo e branco (com uma linha preta marcada nele) ao motor. Coloque o sensor próximo a esse codificador rotativo. Ligue o motor.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-9.JPG" /></div>

##### Software

- **Passo 1.** Baixe a biblioteca [Arduino timer1 *library*](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip) e adicione-a na pasta de bibliotecas da Arduino IDE. Um [guia](/pt-br/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) sobre como executar nosso código de demonstração.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Abra um novo sketch e copie o seguinte código para o sketch.

```cpp
unsigned int counter=0;
void blink()
{
    counter++;
}
void timerIsr()
{
    Timer1.detachInterrupt();  //disable the timer1
    Serial.print("The speed of the motor: ");
    Serial.print(counter,DEC);
    Serial.println("round/s");
    counter=0;
    Timer1.attachInterrupt( timerIsr );  //enable the timer1
}
void setup()
{
    Serial.begin(9600);
    Timer1.initialize(1000000); // set a timer of length 1sec
    attachInterrupt(0, blink, RISING);  //INT0
    Timer1.attachInterrupt( timerIsr ); // attach the service routine here
}
void loop()
{

}
```

- **Passo 4.** Carregue a demonstração. Se você não souber como carregar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. se tudo correr bem, você obterá a velocidade.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-10.JPG" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/Infrared_Reflective_Sensor-12.JPG" /></div>

### Brincar com Raspberry Pi

#### Hardware

- **Passo 1.** Prepare os seguintes materiais:

| Raspberry pi | GrovePi_Plus | Grove - Infrared Reflective Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/thumbnail.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-v1.2-p-2791.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 3.** Conecte o Grove - Infrared Reflective Sensor à porta **D4** do GrovePi_Plus.

- **Passo 4.** Conecte o Raspberry ao PC via cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/img/connect_pi.jpg" /></div>

#### Software

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::tip
Neste wiki usamos o caminho **~/GrovePi/** em vez de **/home/pi/Desktop/GrovePi**, você precisa ter certeza de que o Passo 2 e o Passo 3 usem o mesmo caminho.
:::

:::note
Recomendamos fortemente que você atualize o firmware, caso contrário, para alguns sensores você pode obter erros.
:::

- **Passo 3.** Dê git clone no repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 4.** Verifique o código.

```python

cd ~/GrovePi/Software/Python
sudo nano grove_infrared_reflective_sensor.py

```

Então o código deve ser como:

```
import time
import grovepi

# Connect the Grove Infrared Reflective Sensor to digital port D4
# SIG,NC,VCC,GND
sensor = 4

grovepi.pinMode(sensor,"INPUT")

while True:
    try:
        # Sensor returns HIGH on a black surface and LOW on a white surface
        if grovepi.digitalRead(sensor) == 1:
            print "black surface detected"
        else:
            print "white surface detected"

        time.sleep(.5)

    except IOError:
        print "Error"
```

Então pressione ++ctrl+x++ para sair do nano.

- **Passo 5.** Para executar a demonstração, execute o seguinte comando no terminal:

```
sudo python grove_infrared_reflective_sensor.py

```

O resultado deve ser como:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_infrared_reflective_sensor.py
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
white surface detected
white surface detected
white surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected
black surface detected

```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]**  [Grove-Infrared Reflective Sensor v1.2 Eagle Files](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/Grove%20-%20Infrared%20Reflective%20Sensor%20v1.2_eaglefile.zip)
- **[Zip]**  [Arduino Timer1 Library](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/TimerOne-ArduinoLib.zip)
- **[Pdf]**  [RPR220 Datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/RPR220_datasheet.pdf)
- **[Pdf]** [Datasheet](https://files.seeedstudio.com/wiki/Grove-Infrared_Reflective_Sensor/res/LMV358_datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Infrared_Reflective_Sensor -->

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
