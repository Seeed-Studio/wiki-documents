---
description: Grove - Sensor de Temperatura e Umidade (DHT11)
title: Grove - Sensor de Temperatura e Umidade (DHT11)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-TemperatureAndHumidity_Sensor
sku: 101020011
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-TemperatureAndHumidity_Sensor/
---


# Grove - Sensor de Temperatura e Umidade (DHT11)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" /></div>

Este sensor de temperatura e umidade fornece uma saída digital pré-calibrada. Um elemento sensor capacitivo exclusivo mede a umidade relativa e a temperatura é medida por um termistor de coeficiente de temperatura negativo (NTC). Ele possui excelente confiabilidade e estabilidade em longo prazo. Observe que este sensor não funciona para temperaturas abaixo de 0 grau.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition) robustos.

Os sensores industriais da série SenseCAP S210x fornecem uma experiência pronta para uso para medição ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101 com maior desempenho e robustez para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial bem-sucedido.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 Temperatura &amp; Umidade do Ar</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Recursos

--------

- Medição de umidade relativa e temperatura
- Compensação de temperatura em toda a faixa, calibrado
- Sinal digital
- Estabilidade em longo prazo
- Longa distância de transmissão(>20m)
- Baixo consumo de energia

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Ideias de Aplicações

------------------

- Produto de consumo
- Estação meteorológica
- Regulador de umidade
- Ar-condicionado

## Especificações

--------------

### Especificações Principais

| Itens        |   Mín                  |
|--------------|------------------------|
| Tamanho da PCB     | 2.0cm*4.0cm            |
| Interface    | Conector pino passo 2.0mm |
| Estrutura de IO | SIG,VCC,GND,NC         |
| ROHS         | SIM                    |

### Características Elétricas

<table border="1">
<tr>
<th>
Itens
</th>
<th>
Condições
</th>
<th>
Mín
</th>
<th>
Norm
</th>
<th>
Máx
</th>
<th>
Unidade
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Corrente de Medição
</td>
<td>
-
</td>
<td>
1.3
</td>
<td>
-
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Corrente Média
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Faixa de Medição
</td>
<td>
Umidade
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
UR
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Precisão
</td>
<td>
Umidade
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
UR
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensibilidade
</td>
<td>
Umidade
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
UR
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repetibilidade
</td>
<td>
Umidade
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
UR
</td>
</tr>
<tr align="center">
<td>
Temperatura
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Estabilidade em Longo Prazo
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
UR/ano
</td>
</tr>
<tr align="center">
<td>
Período de Coleta de Sinal
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>

Plataformas Suportadas
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::note
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Começando

Quando o MCU envia um sinal de disparo, o sensor muda do modo de baixo consumo de energia para o modo ativo. Após o sinal de disparo, o sensor enviará um sinal de resposta de volta ao MCU, então os 40 bits de dados coletados são enviados e uma nova coleta de sinal é disparada. (Observe que os 40 bits de dados coletados que são enviados do sensor para o MCU já foram coletados antes do sinal de disparo chegar.) Um sinal de disparo recebe uma vez 40 bits de dados de resposta do sensor. O barramento de dados único é usado para comunicação entre o MCU e o sensor.
O processo de comunicação é mostrado abaixo:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg" /></div>

O custo é de 5ms para uma única comunicação. O bit de ordem mais alta dos dados é enviado primeiro. Os dados do sinal têm 40 bits, compostos por 16 bits de dados de umidade, 16 bits de dados de temperatura e 8 bits de checksum. O formato dos dados é:

    8bits parte inteira da umidade+8bits parte decimal da umidade
    +8bits parte inteira da temperatura+8bits parte decimal da temperatura
    +8bits checksum.

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Sensor de Temperatura e Umidade|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **Passo 2.** Conecte o Grove - Sensor de Temperatura e Umidade à porta **D2** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg" /></div>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Temperature and Humidity Sensor Pro ao Seeeduino como abaixo.
:::

| Seeeduino       | Sensor de Temperatura e Umidade |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| Não Conectado | Branco                  |
| D2            | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [biblioteca Seeed DHT](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo “DHTtester” pelo caminho: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Através deste demo, podemos ler a temperatura e a umidade relativa do ambiente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
Este Grove - Temperature&Humidity Sensor e nosso outro produto [Grove-Temperature&Humidity Sensor pro](https://wiki.seeedstudio.com/pt-br/Grove-Temperature_and_Humidity_Sensor_Pro/) compartilham esta biblioteca. Não importa qual produto você esteja usando, certifique-se de que você ativou a linha de definição do sensor da sua placa e comentou as linhas de definição das outras especificações. Por exemplo, o sensor que usamos no Grove - Temperature&Humidity Sensor é o DHT 11. Portanto, a parte de definição da especificação do sensor deve ser:
:::

```
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

A configuração padrão da biblioteca é `DHT 22`, portanto você precisa alterá-la manualmente para `DHT 11`.

- **Passo 4.** Faça o upload do demo. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá a temperatura.

O resultado deve ser como:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/result_ar.png" /></div>

### Brinque com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Temperature&Humidity Sensor à porta D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se este for o seu primeiro uso do Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/cc_Temperature_Humidity.png" /></div>

Carregue o programa para o seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser carregado, você verá a temperatura e a umidade exibidas no Serial Monitor.
:::

### Brinque com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Temp & Hum Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o sensor de temperatura e umidade à Porta 12 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Temp_Hum_Hat.jpg" /></div>

:::note
No passo 3 você pode conectar o sensor de temperatura e umidade a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
:::tip
Um dos passos é adicionar a biblioteca DHT necessária, certifique-se de que ela esteja instalada.
:::
- **Passo 2**. Entre no ambiente virtual correspondente.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
nano ~/grove_env/dht11_demo.py
```

Copie o código a seguir

```python
import time
import seeed_dht

sensor = seeed_dht.DHT("11", 12)  
print("DHT11 reading every second, Ctrl+C to quit")
try:
    while True:
        humi, temp = sensor.read()
        print(f"DHT11  Humidity {humi:.1f}%  Temperature {temp:.1f}°C")
        time.sleep(1)
except KeyboardInterrupt:
    print("\nBye")

```

:::tip
    Salvar e sair:
Ctrl+O → Enter → Ctrl+X
:::

  Se tudo correr bem, você será capaz de ver o seguinte resultado


```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht11_demo.py 
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.1%, temperature 29.1*
DHT11, humidity 40.0%, temperature 29.1*
DHT11, humidity 39.9%, temperature 29.1*
DHT11, humidity 40.3%, temperature 29.1*
DHT11, humidity 42.0%, temperature 29.1*
```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

### Brinque com Raspberry Pi (com GrovePi_Plus)

#### Hardware

Primeiro, você precisa preparar os itens abaixo:

- **Passo 1.** Prepare os itens abaixo:

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 3.** Conecte o Grove - Temperature&Humidity Sensor à porta **D4** do GrovePi_Plus.

- **Passo 4.** Conecte o Raspberry ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_pi.jpg" /></div>

#### Software

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::tip
Neste wiki usamos o caminho **~/GrovePi/** em vez de **/home/pi/Desktop/GrovePi**, você precisa garantir que o Passo 2 e o Passo 3 usem o mesmo caminho.
:::

:::note
Nós recomendamos fortemente que você atualize o firmware, caso contrário, para alguns sensores você pode obter erros.
:::

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 3.** Dê um git clone no repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 4.** Verifique o código.

```python

cd ~/GrovePi/Software/Python
sudo nano grove_dht_pro.py

```

O código deve ser como:

```python
import grovepi
import math
# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# This example uses the blue colored sensor.
# SIG,NC,VCC,GND
sensor = 4  # The Sensor goes on digital port 4.

# temp_humidity_sensor_type
# Grove Base Kit comes with the blue sensor.
blue = 0    # The Blue colored sensor.
white = 1   # The White colored sensor.

while True:
    try:
        # This example uses the blue colored sensor.
        # The first parameter is the port, the second parameter is the type of sensor.
        [temp,humidity] = grovepi.dht(sensor,blue)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Então pressione ++ctrl+x++ para sair do nano.

:::note
O Grove - Temperature&Humidity Sensor e o Grove - Temperature&Humidity Sensor pro compartilham o mesmo código python chamado `grove_dht_pro.py`. A única diferença é que, para a sentença `[temp,humidity] = grovepi.dht(sensor,blue)`. Usamos o parâmetro `blue` para o Grove - Temperature&Humidity Sensor enquanto usamos `white` para o Grove - Temperature&Humidity Sensor pro. O valor padrão é blue, portanto, para este sensor você não precisa alterar o código.
:::

- **Passo 5.** Execute os comandos abaixo para obter o valor.

```
sudo python3 grove_dht_pro.py
```

O resultado deve ser como:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%

```

### Brinque com o Wio Terminal (ArduPy)

#### Hardware

- **Passo 1.** Prepare o seguinte:

| Wio Terminal | Grove - Sensor de Temperatura e Umidade (DHT11) |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new.jpeg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

- **Passo 2.** Conecte o Grove - Sensor de Temperatura e Umidade à porta **D0** do Wio Terminal.

- **Passo 3.** Conecte o Wio Terminal ao PC por meio de um cabo USB Type-C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-connect.jpeg" /></div>

#### Software

- **Passo 1.** Siga o [**Guia de Introdução ao ArduPy**](https://wiki.seeedstudio.com/pt-br/ArduPy/) para configurar o ambiente de desenvolvimento ArduPy no Wio Terminal.

- **Passo 2.** Certifique-se de que o firmware ArduPy contenha a biblioteca DHT usando os seguintes comandos. Para mais informações, siga [**aqui**](https://wiki.seeedstudio.com/pt-br/ArduPy/#usando-aip-para-incluir-outras-bibliotecas-ardupyde-exemplo-de-bibliotecas-arduino).

```sh
aip install Seeed-Studio/seeed-ardupy-dht/archive/main.zip
aip build
aip flash
```

- **Passo 3.** Copie o código a seguir e salve-o como `ArduPy-DHT.py`:

```python
from arduino import grove_dht
from machine import LCD, Sprite
import time 

dht = grove_dht(0,11)
lcd = LCD() # initialize TFT LCD 
spr = Sprite(lcd) # initialize buffer

def main(): # main function 
    spr.createSprite(320, 240) # create buffer
    while True: # while loop
        spr.fillSprite(spr.color.WHITE) # fill background 

        # two fill rectangles
        spr.fillRect(0,0,160,240,spr.color.DARKGREEN) # fill rectangle in color
        spr.fillRect(160,0,160,240,spr.color.BLUE)

        # temp and humid text draw 
        spr.setTextSize(2) # set text size
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN) # set text color
        spr.drawString("Temperature", 15, 65) # draw string 
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) 
        spr.drawString("Humidity", 190, 65) 

        # obtain readings 
        t = dht.temperature # store temperature readings in variable 
        h = dht.humidity # store humidity readings in variable 

        # display temp readings
        spr.setTextSize(4)
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN)
        spr.drawNumber(int(t),50,110) # display number  
        spr.drawString("C", 100, 110) 

        # display humi readings
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) # set text color
        spr.drawNumber(int(h),180,110)  
        spr.drawString("%RH", 235, 110) 

        spr.pushSprite(0,0) # push to LCD
        time.sleep_ms(100)

        print("temperature:",t,"C", end ="     ")
        print("humidity:",h,"%RH")

if __name__ == "__main__": # check whether this is run from main.py
    main() # execute function
```

- **Passo 4.** Salve o `ArduPy-DHT.py` em um local que você conheça. Execute o comando a seguir e **substitua** `<YourPythonFilePath>` pelo local do seu `ArduPy-DHT.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
```

Agora, as informações de temperatura e umidade serão exibidas no prompt de comando/janela do terminal e também no LCD do Wio Terminal.

```python
C:\Users\user>aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
Positional argument (COM4) takes precedence over --open.
Connected to ardupy
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-demo.jpeg" /></div>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo eagle do Sensor de Temperatura e Umidade](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip)

- **[Zip]** [Biblioteca do Sensor de Temperatura e Umidade](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Grove_Temperature_and_Humidity_Sensor_CDC_File.zip)

## Projetos

**Sistema de Gerenciamento de Banheiro**: Usando o sistema, várias pessoas podem compartilhar um único banheiro de forma eficiente.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/toilet-management-system-8e2786/embed' width='350'></iframe>

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

