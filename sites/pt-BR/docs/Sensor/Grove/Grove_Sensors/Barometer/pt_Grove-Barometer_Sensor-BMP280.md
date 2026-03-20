---
description: Grove - Sensor de Barômetro (BMP280)
title: Grove - Sensor de Barômetro (BMP280)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Barometer_Sensor-BMP280
sku: 101020192
last_update:
  date: 1/4/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BMP280/
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg" alt="pir" width={600} height="auto" /></p>


**Grove - Barometer Sensor (BMP280)** é uma placa breakout para o barômetro digital Bosch BMP280 de alta precisão e baixo consumo. Este módulo pode ser usado para medir **temperatura** e **pressão atmosférica** com precisão. Como a pressão atmosférica muda com a altitude, ele também pode medir a **altitude** aproximada de um local. Ele pode ser conectado a um microcontrolador com I<sup>2</sup>C (integrado com soquete Grove) ou através do barramento SPI. Também fornecemos uma biblioteca altamente abstrata para tornar este produto mais fácil de usar.

O BMP280 é uma versão atualizada do BMP180 e apresenta melhorias significativas em relação ao BMP180. O BMP280 vem com uma pegada menor, menor consumo de energia, medições com menos ruído, resoluções mais altas para pressão e temperatura, menor ruído RMS, interface SPI recém-adicionada, mais modos de medição, maior taxa de medição e filtro recém-adicionado contra interferências ambientais. Como a leitura da pressão atmosférica é afetada pela altitude e temperatura, adicionamos recursos de compensação na biblioteca. Portanto, o Grove - Barometer Sensor (BMP280) é mais confiável para fornecer valores precisos de temperatura, pressão atmosférica e dados aproximados de altitude.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)

## Atualizável para Sensores Industriais
Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x proporcionam uma experiência pronta para uso em sensoriamento ambiental. Consulte o Sensor Sem Fio de Temperatura e Umidade S2101 com desempenho e robustez superiores para monitoramento da qualidade do ar. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial de sucesso.

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
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Temp &amp; Umidade do Ar</strong></a></td>
    </tr>
  </tbody>
</table>


## Pré-leitura

Uma introdução de **O que é um Sensor de Pressão Barométrica** e **Como ele funciona** é uma leitura fortemente recomendada antes, caso você não esteja familiarizado com isso. Visite nosso [blog](https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/) para informações detalhadas.

## Características

-   Obtenha valores mais precisos de temperatura, pressão atmosférica e dados aproximados de altitude
-   Compatível com Grove e fácil de usar
-   Biblioteca altamente abstrata para construir projetos mais rapidamente

:::tip
     Para mais detalhes sobre módulos Grove, consulte o [Sistema Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/).
:::
## Especificação


| Parâmetro                            | Valor                                                                                                                       |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Tensão de entrada                    | 3,3V ou 5V                                                                                                                  |
| Tensão de I/O                        | 3,3V ou 5V                                                                                                                  |
| Corrente de operação                 | 0,6mA                                                                                                                       |
| Temperatura de operação              | -40 - 85 ℃                                                                                                                  |
| Faixa efetiva de medição de pressão  | 300 - 1100 hPa (1 hPa = cem Pa) com precisão de ±1,0 hPa                                                                    |
| Precisão de medição de temperatura   | ±1,0°C                                                                                                                      |
| Modos de medição                     | Piezo &amp; Temperatura, forçado ou periódico                                                                              |
| Chip                                 | BMP280 ([datasheet](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)) |
| Taxa de amostragem possível          | 182 Hz (típico)                                                                                                             |
| Barramento de interface              | SPI, I<sup>2</sup>C (use qualquer um deles)                                                                                |
| Peso                                 | 3 g (para a placa breakout)                                                                                                 |
| Dimensões                            | 40 (largura) × 20 (profundidade) mm                                                                                         |
| Endereço I2C | 0x77()padrão ou 0x76 |

<div class="admonition note">
<p class="admonition-title">Notas</p>
<p> 1. Em breve mostraremos/descreveremos como selecionar o barramento de interface.</p>
<p> 2. A altitude é calculada por uma combinação de temperatura e pressão atmosférica. Não há componentes especializados para altitude.</p>
</div>

## Aplicação

- Aprimoramento da navegação por GPS
- Navegação interna/externa
- Previsão do tempo
- Gerenciamento de botânica

## Plataformas suportadas


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
     As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software/código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

### Brincar com Arduino

#### Materiais necessários

| Seeeduino V4.2 | Base Shield| Grove-Barometer_Sensor-BMP280 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|

#### Visão Geral do Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg" alt="pir" width={600} height="auto" /></p>


-   **Pads de solda SPI**, um circuito de monitoramento de tensão.
-   **Pads de seleção do barramento de interface**, para selecionar o barramento I<sup>2</sup>C, conecte os dois pads por soldagem (isso vem conectado por padrão); para selecionar o barramento SPI, corte os dois pads com uma faca afiada ou um ferro de solda.
-   **Pads de seleção de endereço da placa escrava**, para selecionar o endereço da placa escrava e evitar colisão de endereços.

:::tip
      * Se você selecionou o barramento I2C, o endereço padrão para a placa escrava é **0x77** (os dois pads da direita estão conectados). Se você quiser usar o endereço **0x76**, conecte apenas os dois da esquerda (desconecte os dois da direita) por soldagem.

      * Você pode desconectar os pads apenas com uma faca afiada.

      * Se você selecionou o barramento SPI, o endereço padrão para a placa escrava é **0x77** (os dois pads da direita estão conectados). Se você quiser usar o endereço **0x76**, desconecte todos os três pads.
:::
<div class="admonition note">
<p class="admonition-title">Note</p>
Não toque, balance ou deixe este produto em vibração quando estiver funcionando. Isso causará interferência e afetará a precisão dos dados coletados.
</div>

**Passo 1.** Conecte o Grove-Barometer_Sensor-BMP280 à porta **I2C** do Grove-Base Shield.

**Passo 2.** Conecte o Grove - Base Shield ao Seeeduino e conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	If you don't have a Grove Base Shield, you can also directly connect this module to [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino) as below.
:::
<!--I2C-->
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP280  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software

**Passo 1.** Baixe a [biblioteca](https://github.com/Seeed-Studio/Grove_BMP280.git) do Github.

**Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.


**Passo 3.** Crie um novo sketch Arduino e cole o código abaixo nele ou abra o código diretamente pelo caminho: File -> Example ->bmp280_example->bmp280_example

**Aqui está o código:**

```cpp
/*
 * bmp280_example.ino
 * Example sketch for BMP280
 *
 * Copyright (c) 2016 seeed technology inc.
 * Website    : www.seeedstudio.com
 * Author     : Lambor, CHN
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
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup()
{
  Serial.begin(9600);
  if(!bmp280.init()){
    Serial.println("Device error!");
  }
}

void loop()
{
  float pressure;

  //get and print temperatures
  Serial.print("Temp: ");
  Serial.print(bmp280.getTemperature());
  Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

  //get and print atmospheric pressure data
  Serial.print("Pressure: ");
  Serial.print(pressure = bmp280.getPressure());
  Serial.println("Pa");

  //get and print altitude data
  Serial.print("Altitude: ");
  Serial.print(bmp280.calcAltitude(pressure));
  Serial.println("m");

  Serial.println("\n");//add a line between output of different times.

  delay(1000);
}
```

**Passo 4.** Envie o código. Se você não souber como enviar o código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

**Passo 5.** Abra o monitor serial para receber os dados do sensor, incluindo temperatura, valor de pressão barométrica e altitude.

:::success
        O resultado será exibido na **Serial Port** como a seguir se tudo correr bem.
:::
<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png" alt="pir" width={600} height="auto" /></p>


## Visualizador Online de Esquemático
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático do Grove-Barometer Sensor BMP280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip)
- **[Datasheet]** [Datasheet do BMP280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf)
- **[References]**  [I<sup>2</sup>C how-to for Arduino](https://www.arduino.cc/en/Reference/Wire)

## Projeto

**Sistema de alarme inteligente feito com BBG (IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**Monitoring System for Smart Crops** Projete e construa um sistema para monitorar o estado de suas plantações usando o Netduino 3 WiFi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>


## Suporte Técnico & Discussão de Produto





