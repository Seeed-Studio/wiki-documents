---
description: Grove - Sensor de Temperatura Infravermelho Digital
title: Grove - Sensor de Temperatura Infravermelho Digital
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Digital_Infrared_Temperature_Sensor
sku: 101020077
last_update:
  date: 1/4/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Digital_Infrared_Temperature_Sensor/
---


<table>
  <tbody><tr>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_1.jpg" /></td>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_2.jpg" /></td>
    </tr>
  </tbody></table>

O sensor de temperatura infravermelho digital é um módulo de medição de temperatura sem contato baseado no MLX90615. Tanto o chip detector termopilha sensível ao IR quanto o chip de condicionamento de sinal são integrados no mesmo encapsulamento. Este módulo se comunica com o Arduino usando SMBus, sendo possível ler até 127 sensores através de apenas 2 fios comuns. Graças ao amplificador de baixo ruído do módulo, ADC de 16 bits e poderosa unidade DSP, ele pode alcançar alta precisão de 1℃ em uma ampla faixa de temperatura e alta resolução de medição de 0,02℃.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Especificações
-------------

<table border="1" cellspacing="0" width="70%">
<tr>
<th>
Item
</th>
<th>
Mín
</th>
<th>
Típico
</th>
<th>
Máx
</th>
<th>
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão
</th>
<td>
2.6
</td>
<td>
3
</td>
<td>
5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente
</th>
<td>
</td>
<td>
1.4
</td>
<td>
1.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de Temperatura Ambiente
</th>
<td colspan="3">
-40 - 85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa de Temperatura do Objeto
</th>
<td colspan="3">
-40 - 115
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
 20x40x9.6
</td>
<td>
mm
</td>
</tr>
</table>

Plataformas Compatíveis
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Visão Geral de Hardware
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_4.jpg" /></div>

| Número do Pino | Nome | Tipo   | Descrição da Função                             |
|------------|------|--------|--------------------------------------------------|
| 1          | GND  | -      | Terra de sinal                                   |
| 2          | VCC  | in     | Terminal de Entrada da Fonte de Alimentação Positiva (3,3V ou 5V) |
| 3          | SDA  | in/out | Entrada/saída de dados I2C                       |
| 4          | SCL  | in     | I2C CLK                                          |

## Primeiros Passos

### Brincar com Arduino

Fornecemos aqui um exemplo para mostrar como usar este sensor para medir a temperatura do alvo que está em frente ao sensor e imprimir o resultado no monitor serial.

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

#### Hardware

**Componentes de hardware:**

| Seeeduino V4.2 | Base Shield|  Grove - Digital Infrared Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/thumbnail.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

- **Passo 1.** Conecte o Grove - Digital Infrared Temperature Sensor na porta D2 do Grove-Base Shield.
- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/connection.JPG" /></div>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Digital Infrared Temperature Sensor ao Arduino como abaixo.
:::

| Seeeduino       | Grove - Digital Infrared Temperature Sensor |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| D3           | NA                   |
| D2            | Amarelo                  |

#### Software

- **Passo 1.** Baixe a biblioteca e o código de demonstração [Digital_Infrared_Temperature_Sensor_MLX90615](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615).
- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- **Passo 3.** Abra o código de demonstração diretamente pelo caminho:

  **File -> Examples -> Digital_Infrared_Temperature_Sensor_MLX90615 -> MLX90615Soft**. Como mostrado na figura a seguir:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/example.png" /></div>

Como o sensor é calibrado de fábrica com a interface digital compatível com SMBus habilitada, mas a biblioteca é baseada em uma biblioteca i2c por software, você pode usar quaisquer pinos digitais em qualquer chip AVR para acionar as linhas **SDA** e **SCL**. Usamos **D2** como pino **SCL** e **D3** como pino **SDA** neste código de demonstração. Você pode usar outra porta desde que modifique o código com os pinos correspondentes.

- **Passo 4.** Faça o upload do código para o Arduino. Se você não souber como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).
- **Passo 5.** Clique em **Tool -> Serial Monitor** para iniciar o Serial Monitor. E você verá o resultado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg" /></div>

Agora você pode medir a temperatura com este sensor. A temperatura ambiente é a temperatura do encapsulamento do MLX90615 e a temperatura do objeto é a temperatura do alvo. De acordo com nosso experimento, quando você coloca o sensor em uma temperatura ambiente normal em ambiente interno e garante que não haja nenhuma fonte de calor na frente do sensor dentro de um raio de 1M, a temperatura do objeto será aproximadamente igual à temperatura ambiente. Ao medir a temperatura do objeto, você deve garantir que o objeto esteja o mais próximo possível do sensor, mas sem tocar a superfície do sensor; recomendamos que a distância seja menor que 3 cm. Desejamos que você se divirta experimentando.

:::tip
Mais detalhes sobre os módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- **[Zip]** [Grove Digital Infrared Temperature Sensor v1.0 eagle file.zip](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip)
- **[PDF]** [MLX90615.pdf](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf "File:MLX90615.pdf")
- **[Code]** [Demo Code](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor -->

## Suporte Técnico e Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade da luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
