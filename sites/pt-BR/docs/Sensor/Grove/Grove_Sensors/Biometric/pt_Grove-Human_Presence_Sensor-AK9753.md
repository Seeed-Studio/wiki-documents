---
description: Grove - Sensor de Presença Humana (AK9753)
title: Grove - Sensor de Presença Humana (AK9753)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Human_Presence_Sensor-AK9753
sku: 101020554
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Human_Presence_Sensor-AK9753/
---
<!-- ---
name: Grove - Human Presence Sensor (AK9753)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020554
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/main.jpg)

O Grove - Human Presence Sensor pode ser usado para detectar a presença do corpo humano ou de quaisquer outros objetos infravermelhos. Além disso, ele é composto por quatro sensores quânticos de IV e um circuito integrado (IC) para compensação de características, portanto pode ser usado para detectar o movimento do objeto de IV e a posição relativa onde o objeto de IV se move. Um conversor analógico‑digital integral fornece saídas de dados de 16 bits. Este módulo é adequado para detecção de pessoas a alguns pés de distância.

Você pode encontrar muitos sensores infravermelhos em nosso site, e este será um dos mais interessantes. Com um certo algoritmo, ele pode até alcançar reconhecimento de gestos. Esperamos que você goste.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Sensor de IV do tipo quântico com quatro elementos de IV
- Saídas digitais de 16 bits para barramento I2C
- Sensor de temperatura integrado
- Função de interrupção
- Baixo consumo de corrente

## Especificações

|Item|Valor|
|---|---|
|Tensão de operação|3.3V / 5V|
|Temperatura de operação|-30℃ ~ 85℃|
|Alcance de detecção de presença humana| < 3m|
|Resolução de saída de IV|16 bit|
|Faixa de medição de temperatura|-10℃ ~ 60 ℃|
|Interface|I2C|
|Endereço I2C|0x64(default)<br />0x65 / 0x66(configurable)|

## Aplicações típicas

- Detecção de corpo humano
- Sensor de proximidade
- Detecção de movimento

## Visão geral de hardware

### Pinagem

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout1.png)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout_back.jpg)

### Esquemático

**Alimentação**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic.jpg)

O AK9763 funciona com uma baixa tensão de operação -- 1.71~3.63V, então usamos o chip [XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para fornecer 3.3V estáveis. A entrada do XC6206P33 varia de 1.8V a 6.0V, portanto você pode usar este módulo com o seu Arduino tanto em 3.3V quanto em 5V.

**Circuito de conversão de nível bidirecional**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic1.jpg)

Este é um circuito típico de conversão de nível bidirecional para conectar duas seções de tensão diferente de um barramento I2C. O barramento I<sup>2</sup>C deste sensor usa 3.3V, se o barramento I<sup>2</sup>C do Arduino usar 5V, este circuito será necessário. No esquemático acima, **Q1** e **Q2** são MOSFETs de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atuam como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Human Presence Sensor (AK9753) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank">Adquira agora</a>|

:::note
**1** Por favor conecte o cabo USB com cuidado, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove - Human Presence Sensor (AK9753) à porta **I2C** do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/connect.jpg)

:::note
Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::

| Seeeduino      |  Grove Cable       | Grove - Human Presence Sensor (AK9753) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |

#### Software

:::caution
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que você veja [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Baixe a biblioteca [Grove_Human_Presence_Sensor](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Agora você pode encontrar quatro demos na IDE do Arduino clicando em **File --> Examples --> Grove Human Presence Sensor Library**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path1.jpg)

>**Example1-BasicReading**: Este exemplo lê os dados brutos (uint16_t) de quatro sensores de IV e imprime esses dados brutos na serial.  
>**Example2-PlotDiff**: Lê os dados brutos e plota no serial plotter.  
>**Example3-DetectPresence**: Detecta a presença de objeto de IV.  
>**Example4-PlotMovement**: Detecta o movimento e plota no serial plotter.

Ou, encontre-os em seu computador na pasta **C:XXXX\Arduino\libraries\Grove_Human_Presence_Sensor-master\examples**, **XXXX** é o local onde você instalou a IDE do Arduino.

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path2.jpg)

- **Passo 4.** Escolha um demo e faça o upload do código. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

Agora vamos verificar o que vai acontecer:

---

**Example1-BasicReading:**

Quando você enviar o código do example1, abra o **Serial Monitor** da IDE do Arduino clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Configure o baud rate para **9600**.  
Você pode ver os seguintes resultados：

```cpp
Grove - Human Presence Sensor example
1:[432], 2:[288], 3[248], 4:[384], temp[20.87], millis[109]
1:[424], 2:[296], 3[232], 4:[400], temp[20.87], millis[215]
1:[448], 2:[280], 3[224], 4:[360], temp[20.87], millis[319]
1:[424], 2:[280], 3[224], 4:[368], temp[20.87], millis[424]
1:[440], 2:[256], 3[248], 4:[376], temp[20.87], millis[530]
1:[440], 2:[280], 3[224], 4:[384], temp[20.75], millis[634]
1:[464], 2:[296], 3[216], 4:[392], temp[20.75], millis[740]
1:[416], 2:[288], 3[240], 4:[376], temp[20.75], millis[844]
1:[432], 2:[288], 3[216], 4:[392], temp[20.75], millis[950]
1:[440], 2:[296], 3[208], 4:[384], temp[20.75], millis[1055]
1:[424], 2:[248], 3[192], 4:[376], temp[20.75], millis[1160]
1:[432], 2:[264], 3[200], 4:[384], temp[20.75], millis[1265]
1:[440], 2:[248], 3[208], 4:[352], temp[20.75], millis[1371]
1:[400], 2:[256], 3[192], 4:[320], temp[20.75], millis[1475]
1:[368], 2:[208], 3[152], 4:[296], temp[20.75], millis[1581]
1:[608], 2:[384], 3[368], 4:[560], temp[20.75], millis[1686]
1:[1320], 2:[912], 3[736], 4:[960], temp[20.75], millis[1790]
1:[2168], 2:[1664], 3[1336], 4:[1752], temp[20.75], millis[1896]
1:[2544], 2:[2192], 3[2112], 4:[2376], temp[20.75], millis[2001]
1:[2536], 2:[2256], 3[2280], 4:[2520], temp[20.75], millis[2107]
1:[2144], 2:[2064], 3[2168], 4:[2328], temp[20.75], millis[2212]
```

O `1:[]` significa os dados de medição do sensor IR1, `2:[]` significa os dados de medição do sensor IR2, `3:[]` significa os dados de medição do sensor IR3, `4:[]` significa os dados de medição do sensor IR4. Todos esses parâmetros têm valores variando de -32767 ~ 32767. Esse parâmetro reflete a intensidade da luz infravermelha detectada. Quanto mais forte a intensidade infravermelha, maior o valor do parâmetro.

O `temp[]` significa os dados de medição do sensor de temperatura integrado, variando de -10℃ a +60℃.

O `millis[109]` significa o tempo de sistema desde que este programa foi iniciado, fornecido pelo Arduino.

---

**Example2-PlotDiff**

Quando você enviar o código do example2, abra o **Serial Plotter** da Arduino IDE clicando em **Tool-> Serial Plotter**. Ou pressione as teclas ++ctrl+shift+l++ ao mesmo tempo. Defina a taxa de transmissão para **9600**.  
Você pode ver os seguintes resultados：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result1.png)

Este exemplo lê os dados de quatro sensores IR e os converte em corrente (pA), depois plota **diff13** e **diff24** no Serial Plotter da Arduino IDE.

>diff13 = IR1 - IR3  // <font color="blue">linha azul</font>  
>diff24 = IR2 - IR4  // <font color="red">linha vermelha</font>

---

**Example3-DetectPresence**

Quando você enviar o código do example1, abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Defina a taxa de transmissão para **9600**.  
Você pode ver os seguintes resultados：

```cpp
Grove - Human Presence Sensor example
o o x o  millis: 16949
o x x o  millis: 17050
x x x x  millis: 17153
x x x x  millis: 17254
x x x x  millis: 17355
x x x x  millis: 17457
```

Este exemplo detecta a presença de um objeto IR. A detecção é baseada na derivada do valor do sensor. Se a derivada for maior que um limite, consideramos que algum objeto IR entrou no campo de visão do sensor. A derivada de cada canal é calculada pela seguinte fórmula:

<div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0', fontFamily: 'monospace', fontSize: '16px' }}><strong>derivativeIR1 = ΔIR1 / Δt</strong></div>

Δt representa o intervalo de tempo e ΔIR1 representa a mudança do valor de saída do Sensor IR1 durante o intervalo de tempo.

Na saída, **O** significa nenhuma detecção, **X** significa detectado. A ordem das saídas corresponde à posição física dos sensores IR.  
por exemplo

```
o o x o
```

Significa que o terceiro sensor IR detectou o objeto IR e os outros não (o objeto IR pode vir de cima). Você pode encontrar a posição física do sensor IR em <a href="#Pin-Out" target="_self">Pin Out</a>

---

**Example4-PlotMovement**

Quando você enviar o código do example4, abra o **Serial Plotter** da Arduino IDE clicando em **Tool-> Serial Plotter**. Ou pressione as teclas ++ctrl+shift+l++ ao mesmo tempo. Defina a taxa de transmissão para **9600**.  
Você pode ver os seguintes resultados：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result2.png)

A detecção é baseada na derivada do valor da diferença de IR1_IR3 ou IR2_IR4. A derivada de IR1_IR3 ou IR2_IR4 é calculada pela seguinte fórmula:

<div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0', fontFamily: 'monospace', fontSize: '16px' }}><strong>derivativeIR1_IR3 = Δ(IR1-IR3) / Δt</strong></div>

O significado de cada curva na figura é:: (na ordem)

- diff13  // <font color="blue">IR1-IR3, linha azul</font>
- Movimento na direção 1-3  // <font color="red">derivativeIR1_IR3, linha vermelha</font>  
(um pulso, pulso positivo significa de 1 para 3, caso contrário de 3 para 1)
- diff24  // <font color="green">IR2-IR4, linha verde</font>
- Movimento na direção 2-4  // <font color="orange">derivativeIR1_IR3, linha laranja</font>  
(um pulso, pulso positivo significa de 2 para 4, caso contrário de 4 para 2)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Human Presence Sensor (AK9753) Arquivos Eagle](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip)

- **[Zip]** [Seeed Human Presence Sensor Library](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor/archive/master.zip)

- **[PDF]** [Datasheet AK9753](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/AK9753.pdf)

- **[PDF]** [XC6206 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Suporte Técnico & Discussão de Produto

 <br />
Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
