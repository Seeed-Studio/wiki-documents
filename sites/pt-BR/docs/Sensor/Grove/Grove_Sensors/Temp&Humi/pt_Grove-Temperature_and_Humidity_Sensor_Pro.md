---
description: Grove - Sensor de Temperatura e Umidade Pro (DHT22)
title: Grove - Sensor de Temperatura e Umidade Pro (DHT22)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Temperature_and_Humidity_Sensor_Pro
sku: 101020019
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Temperature_and_Humidity_Sensor_Pro/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/main.jpg" /></div>

 Esta é uma versão avançada e poderosa do nosso Grove - Temperature&Humidity Sensor Pro. Ela possui desempenho mais completo e preciso do que a versão básica. A faixa de detecção deste sensor é de 5% RH - 99% RH e -40°C - 80°C. E sua precisão chega a 2% RH e 0,5°C. Uma escolha profissional para aplicações que têm requisitos relativamente rigorosos.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro%EF%BC%88AM2302%EF%BC%89-p-838.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Atualizável para Sensores Industriais

Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x proporcionam uma experiência pronta para uso em detecção ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

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
          <strong>S2101 Temp de Ar &amp; Umidade</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Especificação

|Item|  Mín |Norm |Máx |Unidade|
|---|---|---|---|---|
|Tensão de entrada (VCC) | 3.3| -| 6| V|
|Nível lógico de I/O|-|baseado em VCC|-| V|
|Corrente de medição | 1| -| 1.5| mA|
|Corrente em standby | 40| -| 50| uA|
|Faixa de medição **(Umidade)** |5%| -| 99%| RH|
|Faixa de medição **(Temperatura)**| -40| - |80| °C|
|Precisão **(Umidade)**|- | -| ±2%| RH|
|Precisão **(Temperatura)** |-|-| ±0.5| °C|
|Resolução **(Umidade)** |-| -| 0.1% |RH|
|Resolução **(Temperatura)** | -|-| 0.1| °C|
|Repetibilidade **(Umidade)**| -| -| ±0.3%| RH|
|Repetibilidade **(Temperatura)**| - |- |±0.2| °C|
|Estabilidade em longo prazo|  -| - |±0.5% |RH/ano|
|Período de coleta de sinal |-| 2| -| s|
|Tempo de resposta 1/e(63%)| 6| - |20| s|
|Modo do pino de sinal|-|Digital|-|-|

:::tip
    Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Adquira agora</a>|

:::note
 **1** Por favor conecte o cabo USB delicadamente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tem certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

- **Passo 1.** Conecte o Grove - Temperature&Humidity Sensor Pro à porta **D2** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_arduino.jpg" /></div>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Temperature and Humidity Sensor Pro ao Seeeduino como abaixo.
:::

| Seeeduino       | Temperature&Humidity Sensor Pro |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Não conectado | Branco                   |
| D2            | Amarelo                  |

#### Software

- **Passo 1.** Baixe a [Seeed DHT library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a Arduino IDE. Abra o exemplo “ DHTtester” através do caminho: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Através desta demonstração, podemos ler as informações de temperatura e umidade relativa do ambiente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
Este Grove - Temperature&Humidity Sensor Pro e nosso outro produto [Grove-Temperature and Humidity Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/) compartilham esta biblioteca. Não importa qual produto você esteja usando, certifique-se de que você tornou efetiva a linha de definição do sensor da sua placa e comentou as linhas de definição de outras especificações. Por exemplo, o sensor que usamos no Grove - Temperature and Humidity Sensor Pro é o DHT 22. Portanto, a parte de definição da especificação do sensor deve ser:
:::

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

- **Passo 4.** Envie o demo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá o resultado.

O resultado deve ser como:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/result_arduino.png" /></div>

### Brincar com Raspberry Pi (com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp & Hum Sensor Pro|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM230-p-838.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o sensor de temperatura e umidade pro à porta 12 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Temp&Hum_Pro_Hat.jpg" /></div>

:::note
No passo 3 você pode conectar o sensor de temperatura e umidade pro a **qualquer porta GPIO**, mas certifique‑se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::


- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
:::tip
Uma das etapas é adicionar a biblioteca DHT necessária, certifique‑se de que ela esteja instalada.
:::
- **Passo 2**. Entre no ambiente virtual relevante.

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
nano ~/grove_env/dht22_demo.py
```

Copie o código a seguir

```python
import time
import seeed_dht

# for DHT11/DHT22
    sensor = seeed_dht.DHT("22", 12)
    # for DHT10
    # sensor = seeed_dht.DHT("10") 
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
    Salve e saia:
Ctrl+O → Enter → Ctrl+X
:::

  Se tudo correr bem, você será capaz de ver o seguinte resultado

```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht22_demo.py
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.1%, temperature 29.1*
DHT22, humidity 40.0%, temperature 29.1*
DHT22, humidity 39.9%, temperature 29.1*
DHT22, humidity 40.3%, temperature 29.1*
DHT22, humidity 42.0%, temperature 29.1*
```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

**Materiais necessários**

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Adquira agora</a>|

- **Passo 1.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 2.** Conecte o Grove - Temperature&Humidity Sensor Pro à porta **D4** do GrovePi_Plus.

- **Passo 3.** Conecte o Raspberry ao PC via cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_pi.jpg" /></div>

#### Software

Se esta é a primeira vez que você usa o GrovePi, faça esta parte passo a passo. Se você já é um velho amigo do GrovePi, pode pular o **Passo 1** e o **Passo 2**.

- **Passo 1.** Configurando o software. Na linha de comando, digite os seguintes comandos:

:::caution
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
Recomendamos fortemente que você atualize o firmware, caso contrário, para alguns sensores você poderá obter erros.
:::

- **Passo 3.** Configure o parâmetro

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

```

cd /home/pi/Desktop/GrovePi/Software/Python/
sudo nano grove_dht_pro.py

```

:::note
O Grove - Temperature&Humidity Sensor e o Grove - Temperature&Humidity Sensor pro compartilham o mesmo código python chamado
`grove_dht_pro.py`.  A única diferença é que para a frase `[temp,humidity] = grovepi.dht(sensor,blue)`. Usamos o parâmetro `blue` para o Grove - Temperature&Humidity Sensor enquanto usamos `white` para o Grove - Temperature&Humidity Sensor pro. O valor padrão é blue, então para este sensor você precisa alterar o código.
:::

Altere o parâmetro padrão `[temp,humidity] = grovepi.dht(sensor,blue)` para `[temp,humidity] = grovepi.dht(sensor,white)`. Então o código deve ficar assim:

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
        [temp,humidity] = grovepi.dht(sensor,white)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Em seguida, pressione ++ctrl+x++ para sair do nano. Pressione ++y++ para salvar a alteração.

- **Passo 4.** Execute o seguinte comando para obter o resultado.

```
sudo python3 grove_dht_pro.py
```

O resultado deve ser como:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%

```

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Temperature&Humidity Sensor Pro em formato eagle](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip)
- **[PDF]** [PCB do Temperature&Humidity Sensor Pro em formato PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- **[PDF]** [Esquemático do Temperature&Humidity Sensor Pro em formato PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- **[Library]** [Biblioteca do Temperature&Humidity Sensor Pro](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Humidity_Temperature_Sensor_pro.zip)
- **[Datasheet]** [AM2302-CN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-CN.pdf)
- **[Datasheet]**  [AM2302-EN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf)

## Projetos

**Temperature Humidity Data Logger**: Este projeto ajuda a monitorar os valores de temperatura e umidade de um local específico junto com o nível de bateria do dispositivo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/temperature-humidity-data-logger-767570/embed' width='350'></iframe>

**LinkIt ONE IoT Demo**: Uma demonstração de IoT feita com LinkIt ONE.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/loovee/linkit-one-iot-demo-546a9c/embed' width='350'></iframe>

**Automated Snake Enclosure with Camera**: Recinto interativo para cobra que é controlado por temperatura e umidade e usa latitude‑longitude para imitar ciclos de luz naturais, com uma câmera online.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/hagakure/automated-snake-enclosure-with-camera-a56ea9/embed' width='350'></iframe>

**Foton - O sabre de luz conectado**: Foton é um sabre de luz especial, que pode monitorar a temperatura e a umidade de um cômodo, detectar movimentos e enviar esses dados para um smartphone.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/Momy93/foton-the-connected-lightsaber-a6c159/embed' width='350'></iframe>

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
