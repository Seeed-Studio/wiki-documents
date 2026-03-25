---
description: Grove - Sensor de Qualidade do Ar v1.3
title: Grove - Sensor de Qualidade do Ar v1.3
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove-Air_Quality_Sensor_v1.3.webp
slug: /Grove-Air_Quality_Sensor_v1.3
sku: 101020078
last_update:
  date: 4/14/2025
  author: Priyanshu Roy
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Air_Quality_Sensor_v1.3/
---


---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" /></p>

Este sensor é projetado para monitorar de forma abrangente as condições do ar em ambientes internos. Ele é sensível a uma ampla variedade de gases nocivos, como monóxido de carbono, álcool, acetona, diluente, formaldeído e assim por diante. Devido ao mecanismo de medição, este sensor não consegue fornecer dados específicos para descrever quantitativamente as concentrações dos gases alvo. Mas ainda é suficientemente competente para ser usado em aplicações que exigem apenas resultados qualitativos, como borrifadores de renovação automática e sistemas automáticos de circulação de ar.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)

:::tip
    Nós lançamos o [Guia de Seleção de Sensores de Gás da Seeed](https://wiki.seeedstudio.com/pt-br/Seeed_Gas_Sensor_Selection_Guide/), ele irá ajudá-lo a escolher o sensor de gás que melhor se adapta às suas necessidades.
:::

## Versão

| Versão do Produto | Alterações | Data de Lançamento |
|-----------------|---------|---------------|
| Grove - Air Quality Sensor v1.3 | Inicial | Maio 2016      |

## Recursos

- Responsivo a uma ampla variedade de gases-alvo
- Custo eficiente
- Durável
- Compatível com 5V e 3.3V

:::caution
    1. Requer ar relativamente limpo como condição inicial.
    2. Exposição prolongada a ar altamente poluído pode enfraquecer significativamente sua sensibilidade.
    3. Cofre e armário-forte:
:::

## Plataformas Suportadas

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Demonstração

Como descrito na Introdução, este sensor funciona melhor fornecendo resultados qualitativos para uma ampla variedade de gases-alvo. Nesta demonstração, definiremos 4 estados para referência no arquivo '.cpp'. Eles são:

- a. ar fresco -- indicando uma boa condição do ar
- b. baixa poluição -- indicando que existe uma concentração relativamente baixa de gases-alvo.
- c. alta poluição(sem a mensagem "Force signal active" impressa no monitor serial) -- você deve estar ciente do nível de poluição e considerar se algumas medidas podem ser tomadas.
- d. alta poluição(com a mensagem "Force signal active" impressa no monitor serial) -- medidas imediatas devem ser tomadas para melhorar a qualidade do ar.

Encapsulamos a estrutura de decisão em um arquivo '.cpp'. Você pode encontrar lá informações sobre como modificar os limites.

Vamos experimentar!

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield | Grove - Air Quality Sensor |
|----------------|-------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[Adquira Agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira Agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira Agora](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **Passo 2.** Conecte o Grove - Air Quality Sensor à porta **A0** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Air Quality Sensor ao Seeeduino como abaixo.
:::
| Seeeduino       | Grove - Air Quality Sensor |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Not Conencted | Branco                   |
| A0            | Amarelo                  |

#### Software

- **Passo 1.** Baixe a [AirQuality_Sensor Library](https://github.com/Seeed-Studio/Grove_Air_quality_Sensor).
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Copie o código para a IDE do Arduino e faça o upload. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
/*
    Grove_Air_Quality_Sensor.ino
    Demo for Grove - Air Quality Sensor.

    Copyright (c) 2019 seeed technology inc.
    Author    : Lets Blu
    Created Time : Jan 2019
    Modified Time:

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/
#include "Air_Quality_Sensor.h"

AirQualitySensor sensor(A0);

void setup(void) {
    Serial.begin(9600);
    while (!Serial);

    Serial.println("Waiting sensor to init...");
    delay(20000);

    if (sensor.init()) {
        Serial.println("Sensor ready.");
    } else {
        Serial.println("Sensor ERROR!");
    }
}

void loop(void) {
    int quality = sensor.slope();

    Serial.print("Sensor value: ");
    Serial.println(sensor.getValue());

    if (quality == AirQualitySensor::FORCE_SIGNAL) {
        Serial.println("High pollution! Force signal active.");
    } else if (quality == AirQualitySensor::HIGH_POLLUTION) {
        Serial.println("High pollution!");
    } else if (quality == AirQualitySensor::LOW_POLLUTION) {
        Serial.println("Low pollution!");
    } else if (quality == AirQualitySensor::FRESH_AIR) {
        Serial.println("Fresh air.");
    }

    delay(1000);
}
```

- **Passo 4.** Veremos a distância exibida no terminal como abaixo.

```
Waiting sensor to init...
Sensor ready.
Sensor value: 48
Fresh air.
Sensor value: 51
Fresh air.
Sensor value: 49
Fresh air.
Sensor value: 48
Fresh air.
Sensor value: 48
Fresh air.
Sensor value: 48
Fresh air.
```

Para ajustar os limites e as mensagens indicativas, consulte a estrutura de decisão abaixo no arquivo .cpp.

```c
int AirQualitySensor::slope(void) {
    _lastVoltage = _currentVoltage;
    _currentVoltage = analogRead(_pin);

    _voltageSum += _currentVoltage;
    _volSumCount += 1;

    updateStandardVoltage();
    if (_currentVoltage - _lastVoltage > 400 || _currentVoltage > 700) {
        return AirQualitySensor::FORCE_SIGNAL;
    }
    else if ((_currentVoltage - _lastVoltage > 400 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 150) {
        return AirQualitySensor::HIGH_POLLUTION;
    }
    else if ((_currentVoltage - _lastVoltage > 200 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 50) {
        return AirQualitySensor::LOW_POLLUTION;
    }
    else {
        return AirQualitySensor::FRESH_AIR;
    }

    return -1;
}
```

### Brincar com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Air Quality Sensor à porta A0 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC através de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guia para usar Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png" alt="pir" width={600} height="auto" /></p>

Carregue o programa para o seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser carregado, você verá a qualidade do ar no Serial Monitor.
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Air Quality Sensor |
|--------------|--------------------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry Pi.
- **Passo 3**. Conecte o Grove - Air Quality Sensor à porta A0 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC através de um cabo USB.
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

#### Software

:::caution
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3.** Execute o comando abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_air_quality_sensor_v1_3.py 0
```

A seguir está o código grove_air_quality_sensor_v1_3.py.

```python

import math
import sys
import time
from grove.adc import ADC


class GroveAirQualitySensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveAirQualitySensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveAirQualitySensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if value > 100:
            print("{}, High Pollution.".format(value))
        else:
            print("{}, Air Quality OK.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()

```

:::tip
    Se tudo correr bem, você poderá ver o seguinte resultado:
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_air_quality_sensor_v1_3.py 0 
Detecting ...
138, High Pollution.
139, High Pollution.
140, High Pollution.
141, High Pollution.
139, High Pollution.
140, High Pollution.
140, High Pollution.
140, High Pollution.
139, High Pollution.
138, High Pollution.
139, High Pollution.
138, High Pollution.
138, High Pollution.
^CTraceback (most recent call last):
  File "grove_air_quality_sensor_v1_3.py", line 71, in <module>
    main()
  File "grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt

```

Você pode usar este sensor para detectar a qualidade do ar. Pressione ++ctrl+c++ para sair.

:::note
        Você pode ter notado que, para a porta analógica, o número do pino na serigrafia é algo como **A1, A0**, porém no comando usamos o parâmetro **0** e **1**, exatamente como na porta digital. Portanto, certifique-se de conectar o módulo à porta correta, caso contrário, pode haver conflitos de pinos.
:::

### Brincar com Raspberry Pi (com GrovePi_Plus)

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Raspberry Pi | GrovePi_Plus | Grove - Air Quality Sensor |
|--------------|--------------|-----------------------------|
|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **Passo 2.** Conecte o GrovePi_Plus ao Raspberry.
- **Passo 3.** Conecte o Grove-MOSFET ranger à porta **A0** do GrovePi_Plus.
- **Passo 4.** Conecte o Raspberry ao PC através de um cabo USB.

#### Software

- **Passo 1.** Navegue até o diretório de demonstrações:

```
cd yourpath/GrovePi/Software/Python/
```

- **Passo 2.**  Para ver o código

```
nano grove_air_quality_sensor.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Air Quality Sensor to analog port A0
# SIG,NC,VCC,GND
air_sensor = 0

grovepi.pinMode(air_sensor,"INPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(air_sensor)

        if sensor_value > 700:
            print "High pollution"
        elif sensor_value > 300:
            print "Low pollution"
        else:
            print "Air fresh"

        print "sensor_value =", sensor_value
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **Passo 3.** Execute a demonstração.

```
sudo python grove_air_quality_sensor.py
```

- **Passo 4.** Veremos a saída exibida no terminal como abaixo.

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png" alt="pir" width={600} height="auto" /></p>


### Brincar com ESP-IDF

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove Air Quality Sensor v1.3</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- **Passo 2.** Conecte o Grove - Air Quality Sensor à sua placa ESP32:
  - Conecte o VCC do sensor a 3.3V
  - Conecte o GND do sensor ao GND
  - Conecte o SIG do sensor a um pino GPIO com suporte a ADC (por exemplo, GPIO34)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/ESP32_Grove_AirQuality.png" alt="pir" width={600} height="auto" /></p>


#### Software

- **Passo 1.** Instale o ESP-IDF seguindo o [guia oficial](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)

- **Passo 2.** Clone o componente Grove Analog Air Quality Sensor:

```bash
cd your_project/components
git clone https://github.com/Priyanshu0901/grove_analog_aqs.git
```

- **Passo 3.** Configure o componente usando o menuconfig:

```bash
idf.py menuconfig
```

Navegue até "Component config → Grove Analog Air Quality Sensor" para configurar:
- Número da unidade ADC (0 para ADC1, 1 para ADC2)
- Canal ADC (correspondente à sua conexão GPIO)
- Atenuação do ADC (padrão: ADC_ATTEN_DB_12 para 3,3 V)
- Limiares de qualidade do ar
- Opções de gerenciamento de energia (opcional)

- **Passo 4.** Crie um novo projeto e use o componente:

```c
#include "grove_analog_aqs.h"

void app_main(void)
{
    // Initialize with default configuration
    grove_aqs_config_t config = GROVE_AQS_DEFAULT_CONFIG();
    esp_err_t ret = grove_aqs_init(&config);
    if (ret != ESP_OK) {
        ESP_LOGE(TAG, "Sensor initialization failed: %d", ret);
        return;
    }

    // Read sensor data
    grove_aqs_data_t data;
    ret = grove_aqs_read_data(&data);
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "Raw ADC value: %d", data.raw_value);
        ESP_LOGI(TAG, "Voltage: %d mV", data.voltage_mv);
        ESP_LOGI(TAG, "Air quality: %s", grove_aqs_quality_to_string(data.quality));
    }

    // Cleanup when done
    grove_aqs_deinit();
}
```

- **Etapa 5.** Compile e grave o projeto:

```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

:::note
    Substitua /dev/ttyUSB0 pela porta serial do seu ESP32.
:::

#### Saída Esperada

```
I (242) sleep_gpio: Enable automatic switching of GPIO sleep configuration
I (249) main_task: Started on CPU0
I (249) main_task: Calling app_main()
I (249) grove_aqs_example: Initializing Grove Analog Air Quality Sensor
I (259) grove_aqs_example: Using ADC Unit: 0, ADC Channel: 2
I (259) grove_aqs: Initializing with ADC Unit: 0, ADC Channel: 2
I (269) grove_aqs: ADC calibration enabled
I (269) grove_aqs: Grove Analog Air Quality Sensor initialized successfully
I (279) grove_aqs_example: Waiting for sensor to stabilize...
I (3279) grove_aqs: Air quality reading: Raw=300, Voltage=218mV, Quality=Fresh
I (3279) grove_aqs_example: Reading #1:
I (3279) grove_aqs_example:   Raw ADC value: 300
I (3279) grove_aqs_example:   Voltage: 218 mV
I (3279) grove_aqs_example:   Air quality: Fresh
I (3289) grove_aqs_example:   Advice: Air is fresh and clean!
I (4289) grove_aqs: Air quality reading: Raw=298, Voltage=216mV, Quality=Fresh
I (4289) grove_aqs_example: Reading #2:
I (4289) grove_aqs_example:   Raw ADC value: 298
I (4289) grove_aqs_example:   Voltage: 216 mV
I (4289) grove_aqs_example:   Air quality: Fresh
I (4299) grove_aqs_example:   Advice: Air is fresh and clean!
I (5299) grove_aqs: Air quality reading: Raw=286, Voltage=208mV, Quality=Fresh
I (5299) grove_aqs_example: Reading #3:
I (5299) grove_aqs_example:   Raw ADC value: 286
I (5299) grove_aqs_example:   Voltage: 208 mV
I (5299) grove_aqs_example:   Air quality: Fresh
I (5309) grove_aqs_example:   Advice: Air is fresh and clean!
I (6309) grove_aqs: Air quality reading: Raw=283, Voltage=206mV, Quality=Fresh
```

:::tip
    O componente fornece os seguintes recursos:
    - Calibração automática do ADC
    - Limiares de qualidade do ar configuráveis
    - Controle opcional de alimentação via GPIO
    - Tratamento de erros e registro de logs
    - Suporte para ADC1 e ADC2
:::

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Library]** [Biblioteca AirQuality Sensor](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip)
- **[Eagle]** [Grove_-_Air_quality_sensor_v1.3_sch_pcb](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip)
- **[PDF]** [Grove_-_Air_quality_sensor_v1.3_sch](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch.pdf)
- **[PDF]** [Air_quality_sensor_MP503_Chinese](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Air_quality_sensor_MP503%20Chinese.pdf)
- **[PDF]** [Air_quality sensor_MP503_English](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Mp503%20English.pdf)
- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_Air_Quality_Sensor_CDC_File.zip)
- **[ESP-IDF]** [Componente Grove Analog Air Quality Sensor](https://github.com/Priyanshu0901/grove_analog_aqs.git) - componente ESP-IDF para Grove Air Quality Sensor
- **[ESP-IDF]** [Guia de Programação ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) - guia oficial de programação ESP-IDF

## Projetos

**SPCPM (Solar Powered City Pollution Monitor)**: Poluição do ar e sonora de baixa manutenção e alta saída que pode ser distribuída pela cidade sem fiação.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/100181/spcpm-solar-powered-city-pollution-monitor-ca4072/embed' width='350'></iframe>

**Um site para ver os dados ambientais ao seu redor**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed' width='350'></iframe>

<!-- **Home Control Center using BeagleBone Green Wireless**:

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/kevin-lee2/home-control-center-using-beaglebone-green-wireless-107a0d/embed" width={350} /> -->

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

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

