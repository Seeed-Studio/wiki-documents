---
description: Lipo Rider V1.3
title: Lipo Rider V1.3
keywords:
  - Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Lipo_Rider_V1.3
sku: 106990022
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Lipo_Rider_V1.3/
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3.jpg)

Alimente seu kit eletrônico favorito com energia verde! A placa Lipo Rider permite que você aproveite a energia solar para rodar seu dispositivo de 5V favorito. A placa Lipo Rider é a solução ideal de energia verde para o seu projeto de sensor externo. Conecte a placa Lipo Rider à sua placa de sensor e ela poderá funcionar com energia solar para sempre!

O LipoRider é extremamente acessível e fácil de usar. Nenhuma programação é necessária. Basta conectar e funciona. O CI carregador interno gerencia todo o fluxo de energia entre os vários componentes.

Caso a energia solar não seja suficiente, a porta microUSB permite que você carregue sua bateria de lítio via USB. Ela também pode ser usada para programar seu kit sem destacar a placa Lipo Rider.

O Lipo Rider pode ser adquirido como uma placa separada ou como um kit (Lipo Rider + Bateria de Lítio + Painel Solar).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Lipo-Rider-v1.3-p-2403.html)

Recursos
--------

- Conector JST 2.0
- Fonte de alimentação USB estável de 5V, independentemente da fonte
- Algoritmos de carga/recarga embutidos no chip
- Carrega bateria de polímero de lítio por energia solar ou USB
- Tensão de alimentação estável tanto pela bateria de lítio quanto pelo USB
- 2 x portas USB permitem programar seu kit enquanto carrega sua bateria de lítio
- Indicações por LED para bateria cheia ou estados de carregamento
- Design simples significa custo extremamente acessível
- Escalável para múltiplas baterias de lítio e painéis solares grandes/múltiplos por meio de simples modificações pelo usuário final

Ideias de Aplicação
-----------------

- Energia verde e fonte de backup para rede de sensores externos distribuída
- Carregador para baterias de lítio

:::caution

1. Componentes eletrônicos vivos expostos.
2. A placa pode ficar quente ao fornecer grandes cargas.
3. Potencial de curto-circuito ou choque elétrico, especialmente se o dispositivo ficar molhado quando colocado ao ar livre para coleta de energia solar.
:::

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-rider-blockdiagram.JPG)

Especificações
--------------

- Dimensões reduzidas – Dimensões = C42 × L34 × P6,8
- Corrente máxima de carga de 900mA para bateria de lítio
- Corrente máxima de fornecimento de 600mA a partir da bateria de lítio
- Diodos de potência para evitar retorno de energia do dispositivo USB para a bateria Lipo

### Especificações Principais

<table border="1">
<tr>
<th>
Itens
</th>
<th>
Mín
</th>
<th>
Nom
</th>
<th>
Máx
</th>
</tr>
<tr align="center">
<td width="400">
U<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.0V
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=2.0kΩ)
</td>
<td>
700mA
</td>
<td>
800mA
</td>
<td>
900mA
</td>
</tr>
<tr align="center">
<td>
I<sub>supply</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
V<sub>batt</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>source USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>destination USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

Definição de Pinos e Classificação
-------------------------

### Instrução de Pinos e Indicação de LED

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>Nível do pino CH (estado do LED vermelho)</th>
<th>Nível do pino OK (estado do LED verde)</th>
<th>Condições</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Nível baixo (ON)</td>
<td>Nível alto (OFF)</td>
<td>Carregando</td>
</tr>
<tr class="even">
<td>Nível alto (OFF)</td>
<td>Nível baixo (último ON)</td>
<td>Completo</td>
</tr>
<tr class="odd">
<td>Sinal de pulso (Pisca)</td>
<td>Sinal de pulso (ON)</td>
<td>A bateria não existe</td>
</tr>
<tr class="even">
<td>Nível alto (OFF)</td>
<td>Nível alto (OFF)</td>
<td>
Duas situações:
<ul>
<li>Tensão de entrada menor que a tensão de limiar</li>
<li>A tensão de entrada menor que a tensão da bateria</li>
</ul>
</td>
</tr>
</tbody>
</table>

#### Componentes de Hardware

**Painel Solar**

O painel solar é conectado à placa por meio do conector JST inferior. Observe que o CI carregador solar aceita apenas tensão de entrada dentro da faixa de 4,8–6,0V. Se o LED de carregamento não estiver aceso, possivelmente é devido a:

1. Bateria de lítio cheia
2. Tensão do painel solar fora da faixa (muito provavelmente devido a energia solar insuficiente).

No segundo caso, reposicione seu painel solar para receber mais luz solar, se possível. Nenhuma das condições acima impedirá o Lipo Rider de fornecer uma alimentação estável de 5V para o USB, a menos que a bateria esteja descarregada.

*Equações do Painel Solar*

Potência de Saída do Painel Solar = Corrente de saída × Tensão de alimentação

ex.: 1W = Iout× 5V

Iout = 200mA

Portanto, o carregamento por 1 hora fornecerá 200mAh, desconsiderando perdas. Para uma bateria de 1000mAH, o carregamento de vazia até totalmente cheia levará aproximadamente 5 horas em condições ideais.

**Bateria de Lítio**

O nome Lipo Rider sugere que uma bateria de polímero de lítio seja usada. No entanto, a química de uma bateria de polímero de lítio e de íon de lítio é suficientemente semelhante para que os dois tipos de bateria possam ser usados de forma intercambiável. Caso mais de uma bateria seja usada, conecte-as em paralelo em vez de em série, pois o CI carregador fornece 4,2V.

**Chave deslizante**

A chave deslizante controla a fonte da alimentação USB de 5V. ON – Carga habilitada a partir da bateria de lítio e/ou solar OFF – Carga desabilitada a partir da bateria de lítio e/ou solar

**Porta USB de Fonte**

A porta USB de fonte é uma porta **micro-USB** que é usada como uma porta USB normal. A porta USB de fonte pode ser usada para carregar a bateria de lítio ou ser conectada ao dispositivo de destino por meio da porta USB de destino.

**Porta USB de Destino**

A porta USB de destino é onde o dispositivo de destino deve ser conectado. A alimentação para o dispositivo de destino será fornecida pela placa Lipo Rider. A alimentação será proveniente do painel solar, da bateria de lítio ou da porta USB de fonte.

#### Direções do Fluxo de Energia sob Diferentes Cenários de Conexão

Devido ao grande número de combinações, incluí apenas os cenários principais:

**Modo Standalone**

Energia solar carrega a bateria de lítio.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-standalone.JPG)

**Modo USB**

Energia solar carrega a bateria de lítio. A bateria de lítio alimenta o dispositivo USB de destino.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-usb.JPG)

**Modo de Programação**

A USB de fonte irá carregar a bateria de lítio e alimentar o dispositivo USB de destino. A conexão de dados será habilitada entre os dispositivos USB de fonte e de destino.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-program.JPG)

### Exemplo

#### Fonte de Alimentação para Dispositivo Sensor Externo

Uma aplicação importante da placa Lipo Rider é como uma fonte de alimentação acessível para sensores externos. O dispositivo sensor externo será alimentado pela bateria de lítio, suplementada pelo painel solar. Observe que não é recomendado operar o sensor externo SOMENTE com energia solar, pois isso pode variar durante o dia e causar reinicialização/desligamento inesperado do sensor. Neste caso, o dispositivo está operando em “Modo USB”.

Se for necessário reprogramar o firmware do dispositivo sensor externo, simplesmente conecte a porta micro USB ao seu PC, o que colocará o dispositivo em “Modo de Programação”, conforme explicado acima.

Baterias e/ou painéis solares maiores/múltiplos podem ser usados, mas apenas com modificações feitas pelo usuário final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3_example.jpg)

**Lipo Rider alimentando um Arduino Duemilanove (não é estritamente um sensor externo neste caso, pois não conectei nenhum sensor e não está ao ar livre, mas você entendeu a ideia)**

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Esquemático e Layout do Li-Po Rider v1.3 em formato Eagle](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Lipo_Rider_V1.3 -->

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
