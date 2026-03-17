---
description: Lipo Rider Pro
title: Lipo Rider Pro
keywords:
  - Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Lipo_Rider_Pro
sku: 106990008
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Lipo_Rider_Pro/
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro.jpg)

Alimente seu kit eletrônico favorito com energia verde! O LiPo Rider Pro é uma melhoria do Lipo Rider. Ele fornece uma saída de carga mais pesada (pico de 1A) do que o Lipo Rider. A placa LiPo Rider Pro permite que você “surfe” na onda solar para fazer funcionar seu dispositivo de 5V favorito. A placa LiPo Rider Pro é a solução de energia verde ideal para o seu projeto de sensor externo. Conecte a placa LiPo Rider Pro à sua placa de sensor e ela poderá funcionar com energia solar para sempre! Ela também pode ser usada para carregar telefone celular.

O LiPo Rider Pro é extremamente acessível e fácil de usar. Não é necessário nenhum tipo de programação. Basta conectá‑lo e ele funciona. O CI carregador interno gerencia todo o fluxo de energia entre os vários componentes.

Caso a energia solar não seja suficiente, a porta mini USB permite carregar sua bateria de lítio via USB. Ela também pode ser usada para programar seu kit sem desconectar a placa LiPo Rider Pro.

O LiPo Rider Pro pode ser adquirido como uma placa separada ou como um kit (LiPo Rider Pro + Bateria de Lítio + Painel Solar).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html)

## Recursos

--------

- Saída de carga máxima de 1A
- Conector de bateria e de painel solar é JST 2.0
- Fonte de alimentação USB estável de 5V independente da fonte
- Algoritmos de carga/recarga incorporados no chip
- Carrega bateria de polímero de lítio por meio de energia solar ou USB
- Tensão de alimentação estável através de bateria de lítio ou USB
- 2 portas USB permitem programar seu kit enquanto carrega a bateria de lítio
- Indicações por LED para bateria cheia ou estados de carregamento
- Escalável para múltiplas baterias de lítio e painéis solares grandes/múltiplos por meio de simples modificações do usuário final
- 4 LEDs verdes indicam a quantidade de eletricidade da bateria de lítio

## Ideias de Aplicação

-----------------

- Energia verde e fonte de backup para rede distribuída de sensores externos
- Carregador para baterias de lítio
- Carregador para telefone celular

:::caution

1. O LiPo Rider Pro possui conectores diferentes do LiPo Rider v1.0; o primeiro é JST 2.0 e o segundo é JST 2.54.

2. Componentes eletrônicos vivos e expostos.

3. A placa pode ficar quente ao fornecer cargas grandes.

4. Potencial curto‑circuito ou choque elétrico, especialmente se o dispositivo ficar molhado quando colocado ao ar livre para coleta de energia solar.
:::

## Dimensões

----------

As dimensões do LiPo Rider Pro são como as da [Bateria de Polímero de Lítio 6A](https://www.seeedstudio.com/depot/lithium-ion-polymer-battery-pack-6a-p-602.html?cPath=178_183).

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Liporiderprod.jpg)

Especificações
--------------

<table border="1">
<tr>
<th>
Itens
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
</tr>
<tr align="center">
<td width="400">
V<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.5V(10s)
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=3.9kΩ)
</td>
<td>
400mA
</td>
<td>
500mA
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
I<sub>load</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
1000mA
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

Definição de pinos e classificação
-------------------------

**Instruções de pinos e indicação de LED**

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
<th>Descrição</th>
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
<td>Duas situações:</td>
<ul>
<li>Tensão de entrada menor que a tensão de limiar</li>
<li>A tensão de entrada menor que a tensão da bateria</li>
</ul>
</tr>
</tbody>
</table>

**Indicador de bateria por LED**

O LiPo Rider Pro possui quatro indicadores de bateria por LED, como no celular, e você pode ver a carga da bateria apenas pressionando o botão K2 como abaixo:
![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo3.jpg)

**Parâmetros do indicador de bateria por LED**

| Quantidade de indicadores acesos | Quantidade de eletricidade |
|-----------------------------------|-----------------------|
| 4                                 | 90~100%               |
| 3                                 | 60~90%                |
| 2                                 | 30~60%                |
| 1                                 | 10~30%                |
| 0                                 | 0~10%                 |

Uso
-----

**Exemplo**

**Fonte de Alimentação para Dispositivo Sensor Externo**

Uma aplicação importante da placa Lipo Rider Pro é como uma fonte de alimentação acessível para sensores externos. O dispositivo sensor externo será alimentado pela bateria de lítio suplementada pelo painel solar. Observe que não é recomendado operar o sensor externo SOMENTE com energia solar, pois ela pode variar ao longo do dia e causar reinicialização / desligamento inesperado do sensor. Neste caso, o dispositivo está operando em “USB Mode”.

Se for necessário reprogramar o firmware do dispositivo sensor externo, simplesmente conecte a porta mini USB ao seu PC, o que colocará o dispositivo em “Program Mode”, como explicado acima.

Baterias maiores/múltiplas e/ou painéis solares podem ser usados, mas apenas com modificações feitas pelo usuário final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo-Rider-pro.JPG)

**Carregar bateria de polímero de lítio por meio de energia solar**

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro1.jpg)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [CN3065 Datasheet em PDF](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/DSE-CN3065.pdf)
- [Esquemático e layout em formato Eagle](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar)
- [Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/LiPo_Rider_Pro_v0.9b.pdf)
- [Usar o Lipo rider pro para carregar iPod ou iPhone](https://forum.seeedstudio.com/viewtopic.php?f=4&t=3575)
- [Pacote de Bateria de Íon de Lítio Polímero - 6A](https://www.seeedstudio.com/Lithium-Ion-polymer-Battery-pack-6A-p-602.html)

## Projeto

**Monitoramento PlantSigfox** Recupera umidade do ar/solo, temperatura e brilho (e raios RGB). Também envia a localização e, assim, fornece previsões do tempo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/plantsigfox-ei2i4/plantsigfox-monitoring-3d66be/embed' width='350'></iframe>

**Sistema de Detecção de Passos em uma Via com Arduino**
O objetivo do projeto é detectar a passagem de carros e pessoas na entrada de um pomar e emitir um bipe de aviso dentro de casa.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/juan-salvador-aleixandre-talens/step-detection-system-by-a-way-with-arduino-bc6f3a/embed' width='350'></iframe>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
