---
description: Grove - Sensor de Temperatura e Umidade (HDC1000)
title: Grove - Sensor de Temperatura e Umidade (HDC1000)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-TemperatureAndHumidity_Sensor-HDC1000
sku: 101020087
last_update:
  date: 1/3/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-TemperatureAndHumidity_Sensor-HDC1000/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/main.jpg" /></div>

Grove - Temperature&Humidity Sensor (HDC1000) utiliza um sensor HDC1000. O HDC1000 foi projetado pela Texas Instruments. É um sensor digital de umidade com sensor de temperatura integrado que oferece excelente precisão de medição com consumo de energia muito baixo. O dispositivo mede a umidade com base em um novo sensor capacitivo. Os sensores de umidade e temperatura são calibrados de fábrica. O inovador encapsulamento WLCSP (Wafer Level Chip Scale Package) simplifica o projeto da placa com o uso de um encapsulamento ultracompacto. O elemento sensor do HDC1000 é colocado na parte inferior do dispositivo, o que torna o HDC1000 mais robusto contra sujeira, poeira e outros contaminantes ambientais. O HDC1000 é funcional em toda a faixa de temperatura de –40°C a +125°C e na faixa de 0–100% de umidade relativa.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Compatível com conector Grove
- Interface IIC
- Baixo consumo de energia
- Ampla faixa de tensão de operação
- Configuração de endereço de barramento serial I2C

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

<table border="1" cellspacing="0" width="800">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de alimentação
</th>
<td>
3
</td>
<td>
/
</td>
<td>
5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente de trabalho
</th>
<td>
0.12
</td>
<td>
/
</td>
<td>
90
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Precisão de umidade relativa (típica)
</th>
<td>
/
</td>
<td>
±3
</td>
<td>
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de operação de umidade relativa (típica)
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
Precisão de temperatura
</th>
<td>
/
</td>
<td>
±0.2
</td>
<td>
/
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de temperatura
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de temperatura de operação
</th>
<td>
-20
</td>
<td>
/
</td>
<td>
85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensão
</th>
<td colspan="3">
40*20
</td>
<td>
mm
</td>
</tr>
</table>

## Plataformas compatíveis

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como compatíveis são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Visão geral do hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p3.jpg" /></div>

1. Conector Grove.
2. Ready: pronto para uma conversão.
3. Endereço padrão: 0x40.
4. ADDR0, ADDR1: Configuração de endereço de barramento serial I2C (0x40,0x41,0x42,0x43)

## Primeiros passos

### Brincar com Arduino

Veja aqui como usar o Grove - Temperature&Humidity Sensor (HDC1000) com o Seeeduino v4.2.

#### Materiais necessários

| Seeeduino V4.2 | Base Shield| Grove - Temperature&Humidity Sensor(HDC1000) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

:::note
**1** Conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tem certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Passo 1.** Conecte o Grove - Temperature&Humidity Sensor(HDC1000) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/connect_arduino.jpg" /></div>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Temperature&Humidity Sensor(HDC1000) ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Temperature&Humidity Sensor(HDC1000) |
|---------------|-------------------------|
| 5V            | Vermelho                |
| GND           | Preto                   |
| SDA           | Branco                  |
| SCL           | Amarelo                 |

#### Software

- **Passo 1.** Baixe a [biblioteca Seeed DHT](https://github.com/Seeed-Studio/HDC1000) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Reinicie a IDE do Arduino. Abra um novo sketch e copie o código a seguir para o novo sketch.

```cpp
/*
 * HDC1000.h
 * A library for HDC1000 1.0
 *
 * Copyright (c) 2015 seeed technology inc.
 * Author     : Pillar Zuo (baozhu.zuo@seeed.cc)
 * Create Time: April 2015
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

#include <Wire.h>
#include <HDC1000.h>

HDC1000 mySensor;
//HDC1000 mySensor(0x41, 2) <-- DRDYn enabled and connected to Arduino pin 2 (allows for faster measurements).

void setup(){
 Serial.begin(9600);
 mySensor.begin();
}

void loop(){
 Serial.print("Temperature: ");
 Serial.print(mySensor.getTemp()); 
 Serial.print("C, Humidity: ");     
 Serial.print(mySensor.getHumi());
 Serial.println("%");
 delay(1000);
}


```

- **Passo 4.** Envie o exemplo. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **9600**. Se tudo correr bem, você obterá os resultados.

O resultado deve ser semelhante a:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/result.png" /></div>

:::tip
        Pode ser necessário um período de tempo antes que o resultado se torne estável.
:::

### Brincar com Raspberry Pi

#### Hardware

**Materiais necessários**

| Raspberry pi | GrovePi_Plus | Temperatura&Umidade Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Adquirir Agora</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Adquirir Agora</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank">Adquirir Agora</a>|

- **Passo 1.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 2.** Conecte este sensor à porta **I2C** do GrovePi_Plus.

- **Passo 3.** Conecte o Raspberry ao PC via cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/pi_connect.jpg" /></div>

#### Software

- **Passo 1.** Siga [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) para configurar o ambiente de desenvolvimento.

- **Passo 2.** Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::tip
Neste wiki usamos o caminho **~/GrovePi/** em vez de **/home/pi/Desktop/GrovePi**, você precisa garantir que o Passo 2 e o Passo 3 usem o mesmo caminho.
:::

:::note
Recomendamos fortemente que você atualize o firmware, caso contrário, para alguns sensores você poderá obter erros.
:::

:::caution
Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você tem que usar esta linha de comando **apenas com Python3**.
:::

- **Passo 3.** Dê git clone no repositório do Github.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Passo 4.** Execute os comandos abaixo para obter o valor.

```
cd ~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000
sudo python3 grove_hdc_1000_example.py
```

O resultado deve ser semelhante a:

```python

pi@raspberrypi:~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000$ sudo python3 grove_hdc_1000_example.py 
Temp    : 27.94 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.21 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.43 %
-----------------
Temp    : 29.23 C
Humidity: 78.04 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------

```

Se você quiser verificar o código, pode usar o seguinte comando:

```
sudo nano grove_hdc_1000_example.py

```

### Com Launchpad

#### Material necessário

- TI MSP430FR4133 LaunchPad\] × 1
- Cabo USB (tipo A para mini tipo-b) × 1
- [Grove - Cabo de Conversão Jumper Fêmea de 4 pinos para Grove de 4 pinos](https://www.seeedstudio.com/depot/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck-p-1020.html) × 1
- [Grove - Temperature&Humidity Sensor (HDC1000)](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125) × 1

#### Conexões de hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_connections-with_launchpad-2400_s.JPG" /></div>

#### Baixe o código e grave-o no Launchpad

1. Baixe o [código de demonstração](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000-HDC1000_energia.zip).

  <div className="admonition note">
  <p className="admonition-title">Nota</p>
  Você deve copiar o arquivo <span style={{fontStyle: 'italic'}}>readTempHumi.ino</span> (na pasta <span style={{fontStyle: 'italic'}}>examples</span>) para a mesma pasta que <span style={{fontStyle: 'italic'}}>HDC1000.h</span>.
</div>

2. Grave o código no Launchpad.

3. Abra o *Serial Monitor* (**Tool**->**Serial Monitor**) para visualizar os dados detectados.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_result-with_launchpad-600.png" /></div>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip)
- **[Pdf]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch.pdf)
- **[Library]** [Código de demonstração](https://github.com/Seeed-Studio/HDC1000)
- **[Datasheet]** [HDC1000_DataSheet.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Temperature&Humidity_Sensor_(HDC1000) -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>