---
description: Grove - Sensor de Barômetro (BME280)
title: Grove - Sensor de Barômetro (BME280)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor-BME280
sku: 101020193
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BME280/
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/BME280.jpg" alt="pir" width={500} height="auto" /></p>

Grove - Temp&Humi&Barometer Sensor (BME280) é uma placa breakout para o sensor combinado de umidade, pressão e temperatura de alta precisão e baixo consumo Bosch BMP280. Este módulo pode ser usado para medir temperatura, pressão atmosférica e umidade com precisão e rapidez. Como a pressão atmosférica muda com a altitude, ele também pode medir a **altitude** aproximada de um local. Ele pode ser conectado a um microcontrolador com I<sup>2</sup>C (integrado com soquete Grove) ou através de barramento SPI. Também fornecemos uma biblioteca altamente abstraída para tornar este produto mais fácil de usar.

O BME280 é uma versão atualizada do BMP180, e o BME280 apresenta melhorias significativas em relação ao BMP180. O BME280 vem com um tamanho menor, menor consumo de energia, medições com menos ruído, resoluções mais altas para pressão e temperatura, menor ruído RMS, barramento SPI recém-adicionado, mais modos de medição, taxa de medição mais alta e filtro recém-adicionado contra interferência ambiental. Como a leitura de pressão atmosférica é afetada pela altitude e pela temperatura, adicionamos recursos de compensação. Portanto, o Grove - Temp&Humi&Barometer Sensor (BME280) será mais confiável ao fornecer valores precisos de temperatura, pressão atmosférica, umidade e dados aproximados de altitude.

Usar o sensor é fácil. Para o [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7) (compatível com Arduino), basta conectar esta placa breakout usando um [cabo Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) ao conector Grove I2C. Em seguida, use a biblioteca fornecida e o código de exemplo do GitHub. Se você estiver usando um Arduino, utilize o Base Shield v2.0 ou simplesmente conecte o pino VCC ao pino de 5V, GND ao terra, SCL ao Clock I2C (Analógico 5) e SDA ao Dados I2C (Analógico 4).

Aplicações típicas: aprimoramento de navegação por GPS, navegação interna/externa, previsão do tempo ou qualquer outro projeto que exija leitura precisa de pressão atmosférica.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A série de sensores industriais SenseCAP S210x proporciona uma experiência pronta para uso em sensoriamento ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101, com maior desempenho e robustez, para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial bem-sucedido.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temperatura &amp; Umidade do Ar</strong></a></td>
    </tr>
  </tbody>
</table>

## Recursos

- Obtenha rapidamente dados mais precisos de temperatura, pressão atmosférica, umidade e altitude aproximada.
- Compatível com Grove e fácil de usar
- Biblioteca altamente abstraída para construir projetos mais rapidamente

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| Parâmetro                                     | Valor                                                                                             |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------|
| Tensão de entrada                             | 3,3V ou 5V                                                                                        |
| Tensão de E/S                                  | 3,3V ou 5V                                                                                        |
| Corrente de operação                          | 0,4mA                                                                                             |
| Temperatura de operação                       | -40 - 85 ℃                                                                                        |
| Faixa de medição do sensor de pressão atmosférica | 300 - 1100 hPa (1 hPa = cem Pa) com precisão de ±1,0 hPa                                          |
| Faixa de medição do sensor de temperatura      | -40 - 85 ℃, com precisão de ±1,0°C                                                                |
| Faixa de medição do sensor de umidade          | 0% - 100% de umidade relativa, com precisão de ±3%                                                |
| Modos de medição                               | Piezo e Temperatura, forçado ou periódico                                                         |
| Chip                                          | BME280([datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)) |
| Barramento de interface                        | SPI, I<sup>2</sup>C (use qualquer um deles)                                                       |
| Peso                                          | 3,2 g (para a placa breakout), 9,3 g para cada peça do pacote completo                            |
| Dimensões                                     | 40 (comprimento) × 20 (largura) mm    |
|I2C                                             | 0x76(padrão) ou 0x77     |

<div class="admonition note">
<p class="admonition-title">Nota</p>
<ol><li>Em breve mostraremos/descreveremos como selecionar o barramento de interface.</li>
<li>A altitude é calculada por uma combinação de temperatura e pressão atmosférica. Não há componentes especializados para altitude.</li></ol>
</div>

### Plataformas Suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou códigos de exemplo para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários devem escrever sua própria biblioteca de software.
:::

## Visão Geral de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Grove-Barometer_Sensor-BME280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

- **Pads de solda SPI**, um circuito de monitoramento de tensão.
- **Pads de seleção do barramento de interface**, para selecionar o barramento I<sup>2</sup>C, conecte os dois pads por soldagem (ele vem conectado por padrão); para selecionar o barramento SPI, corte os dois pads com uma faca afiada ou um ferro de solda.
- **Pads de seleção de endereço da placa escrava**, para selecionar o endereço da placa escrava e evitar conflito de endereços.

  - Se você selecionou o barramento I2C, o endereço padrão para a placa escrava é **0x76** (os dois pads da direita estão conectados). Se você quiser usar o endereço **0x77**, conecte apenas os dois da esquerda (desconecte os dois da direita) por soldagem.

<div class="admonition tip">
<p class="admonition-title">Dica</p>
Você pode desconectar os pads apenas com uma faca afiada.
</div>
    - Se você selecionou o barramento SPI, o endereço padrão para a placa escrava é **0x76** (os dois pads da direita estão conectados). Se você quiser usar o endereço **0x77**, desconecte todos os três pads.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Não toque, balance ou deixe este produto em vibração quando estiver funcionando. Isso causará interferência e afetará a precisão dos dados coletados.
</div>

### **Pacote inclui** (partes principais)

| Nome das partes                                                                                                               | Quantidade |
|-------------------------------------------------------------------------------------------------------------------------------|-----------|
| Grove - Temp&Humi&Barometer Sensor (BME280)                                                                                            | 1 peça    |
| [Grove cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) | 1 peça    |

## Primeiros Passos

Agora vamos executar alguns exemplos básicos com este módulo.

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BME280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **Passo 2.** Conecte o Grove-Barometer_Sensor-BME280 à porta **I2C** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::
<!--I2C-->
| seeeduino_v4 | Grove-Barometer_Sensor-BME280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### Software

**Passo 1.** Baixe a [biblioteca e o código de exemplo](https://github.com/Seeed-Studio/Grove_BME280) do Github.

**Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

**Passo 3.** Crie um novo sketch Arduino e cole nele o código abaixo ou abra o código diretamente pelo caminho: File -> Example ->Barometer_Sensor->Barometer_Sensor.

Aqui está o código

```c

/*
 * bme280_example.ino
 * Example sketch for bme280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor
 * Create Time:
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
#include "Seeed_BME280.h"
#include <Wire.h>

BME280 bme280;

void setup()
{
  Serial.begin(9600);
  if(!bme280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bme280.getTemperature());
  Serial.println("C");//The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bme280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bme280.calcAltitude(pressure));
  Serial.println("m");

  //get and print humidity data
  Serial.print("Humidity: ");
  Serial.print(bme280.getHumidity());
  Serial.println("%");

  delay(1000);
}

```

**Passo 4.** Envie o código. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

**Passo 5.** Abra o monitor serial para receber os dados do sensor, incluindo temperatura, valor da pressão barométrica, altitude e umidade.

### Brincar com Wio Terminal (ArduPy)

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Wio Terminal | Grove-Barometer Sensor-BME280 |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)|

- **Passo 2.** Conecte o Grove-Barometer Sensor-BME280 à porta Grove **I2C** do Wio Terminal.

- **Passo 3.** Conecte o Wio Terminal ao PC através de um cabo USB Type-C.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/WT-BME280.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Passo 1.** Siga [**ArduPy Getting Started**](https://wiki.seeedstudio.com/pt-br/ArduPy/) para configurar o ambiente de desenvolvimento ArduPy no Wio Terminal.

- **Passo 2.** Certifique-se de que o firmware ArduPy foi gravado no Wio Terminal. Para mais informações, siga [**here**](https://wiki.seeedstudio.com/pt-br/ArduPy/#ardupy-aip-cli-getting-started).

```sh
aip install Seeed-Studio/seeed-ardupy-bme280
aip build
aip flash
```

- **Passo 3.** Copie o código a seguir e salve-o como `ArduPy-bme280.py`:

```python
from arduino import grove_bme280
from machine import LCD
from machine import Sprite
import time

bme280 = grove_bme280()
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
      spr.setTextSize(2)
      spr.fillSprite(spr.color.BLACK)
      spr.setTextColor(lcd.color.ORANGE)
      spr.drawString("BME280 Reading", 90, 10)
      spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
      spr.setTextColor(lcd.color.WHITE)
      spr.drawString("- Temperature: ", 20, 50)
      spr.drawString("- Humidity: ", 20, 80)
      spr.drawString("- Pressure: ", 20, 110)

      spr.drawFloat(bme280.temperature, 2, 220,50)
      spr.drawNumber(bme280.humidity, 220,80)
      spr.drawNumber(bme280.pressure, 220,110)
      spr.pushSprite(0,0)
      time.sleep_ms(500)

      print ("\nTemperature: ", bme280.temperature, "C")
      print ("Humidity: ", bme280.humidity, "%")
      print ("Pressure: ", bme280.pressure, "Pa")

if __name__ == "__main__":
    main()
```

- **Passo 4.** Salve o `ArduPy-bme280.py` em um local que você conheça. Execute o seguinte comando e **substitua** `<YourPythonFilePath>` pelo local do seu `ArduPy-bme280.py`.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
```

- **Passo 5.** Veremos os valores sendo exibidos no terminal como abaixo e também na tela LCD do Wio Terminal.

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-bme280.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy

Temperature:  29.88 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.91 C
Humidity:  55 %
Pressure:  100332 Pa

Temperature:  29.88 C
Humidity:  54 %
Pressure:  100331 Pa
```

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png"/></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/Ardupy-BME280.png" alt="pir" width={600} height="auto" /></p>

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove-Barometer_Sensor-BME280-v1.0_Schematics](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-v1.0_Schematics.zip)
- **[Datasheet]** [BME280 Datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf)
- **[Library]** [Grove_BME280 Library](https://github.com/Seeed-Studio/Grove_BME280) no GitHub
- **[Reference]** [I<sup>2</sup>C guia prático para Arduino](https://www.arduino.cc/en/Reference/Wire)

## Projetos

**Seeed LoRa IoTea Solution**: Um sistema automático de coleta de informações aplicado a plantações de chá. É parte da coleta inteligente de informações agrícolas.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto
