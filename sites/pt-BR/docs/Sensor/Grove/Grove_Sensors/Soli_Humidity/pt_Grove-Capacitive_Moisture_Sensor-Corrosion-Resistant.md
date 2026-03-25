---
description: Grove - Sensor de Umidade Capacitivo (Resistente à Corrosão)
title: Grove - Sensor de Umidade Capacitivo (Resistente à Corrosão)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant
last_update:
  date: 1/9/2023
  author: jianjing Huang
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/main.jpg" /></div>

O Grove - Sensor de Umidade Capacitivo (Resistente à Corrosão) é um sensor de umidade do solo baseado em mudanças de capacitância. Comparado aos sensores resistivos, os sensores capacitivos não exigem exposição direta dos eletrodos metálicos, o que pode reduzir significativamente a erosão dos eletrodos. Portanto, nós o chamamos de **Resistente à Corrosão**.

É importante notar que este sensor só pode testar qualitativamente a umidade do solo e não pode medir quantitativamente. Isso significa que, quando a umidade do solo aumenta, o valor da saída diminui; inversamente, quando a umidade diminui, o valor de saída se torna maior.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

Os sensores industriais da série SenseCAP S210x fornecem uma experiência pronta para uso para detecção ambiental. Consulte o Sensor Sem Fio de Umidade do Solo, Temperatura e EC S2105 com maior desempenho e robustez para monitoramento das condições do solo. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) em seu próximo projeto industrial bem-sucedido.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 Umidade &amp; Temp do Solo &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Versão

| Versão do Produto  | Alterações                                                                                               | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor de Umidade Capacitivo (Resistente à Corrosão)  | Inicial                                                                                               | Set 2018      |

## Características

- Estilo Capacitivo
- Resistente à Corrosão
- Amplificador Integrado

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|3.3V / 5V|
|Interface de Saída|Analógica|
|Comprimento|92.1mm|
|Largura|23.5mm|
|Altura|6.5mm|
|Tamanho|L: 40mm W: 20mm H: 13mm|
|Peso|10.6g|
|Tamanho da Embalagem|L: 150mm W: 100mm H: 15mm|
|Peso Bruto|19g|

## Aplicações Típicas

- Detecção de umidade do solo
- Rega automática de plantas

## Visão Geral do Hardware

### Pinagem

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/pin_out.jpg" /></div>

:::caution
A parte do sensor inserida no solo não pode exceder a linha da posição mais alta.
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de hardware ou teórica do módulo. Na maioria dos casos, nós fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software. O que não é suportado agora, pode ou não ser suportado no futuro.
:::

## Primeiros Passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Capacitive Moisture Sensor  |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2850.html" target="_blank">Adquira agora</a>|

:::note
**1** Por favor conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

:::note
**1**. Se você usar o Arduino UNO como placa-mãe, é recomendável usar a fonte de alimentação DC. Caso contrário, a ondulação máxima do VCC pode exceder 100mV. Se você usar o Seeeduino V4.2 como placa-mãe, não é necessário conectar a alimentação DC.

**2**. Hot swap não é suportado.
:::

- **Passo 1.** Conecte o Grove - Capacitive Moisture Sensor à porta **A0** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Insira o Grove - Capacitive Moisture Sensor no solo a ser testado.

:::caution
A parte do sensor inserida no solo não pode exceder esta linha branca.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/line.jpg" /></div>

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/connect.jpg" /></div>

:::note
    Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Cabo Grove       | Grove - Capacitive Moisture Sensor |
|--------------- |--------------------|-----|
| GND            | Preto              | GND |
| 5V ou 3.3V     | Vermelho           | VCC |
|Sem conexão           | Branco             |NC |
|A0           | Amarelo            | SIG|

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

**Passo 1.** Copie o código abaixo e faça o download para o seu Arduino. Se você não sabe como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://arduino.cc/en/Tutorial/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // print out the value you read:
  Serial.println(sensorValue);
  delay(100);        // delay in between reads for stability
}
```

- **Passo 2.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **9600**.

:::tip
Se tudo correr bem, quando você abrir o Serial Monitor ele poderá mostrar o seguinte:
:::

```cpp
678
663
631
615
615
624
616
618
620
616
614
614
610
614
614
616
615
612
605
```

:::caution
Devido a diferenças individuais nos componentes, as medições de módulos diferentes no mesmo ambiente podem variar.
:::

## Brincar com Raspberry Pi

Se você quiser usar este módulo com Raspberry Pi, talvez seja necessário usar um dos seguintes hats:

- [4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)
- [8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)
- [Grove Base Hat for Raspberry Pi](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)
- [Grove Base Hat for Raspberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)

E você pode encontrar o demo no wiki desses hats.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Capacitive Moisture Sensor (Corrosion Resistant) Eagle Files](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip)

- **[PDF]** [NE555DR Datasheet](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/NE555DR.pdf)

- **[PDF]** [Wiki em Formato PDF](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/soil_sensor.pdf)

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
