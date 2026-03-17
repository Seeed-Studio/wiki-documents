---
title: Jack Lógico DC
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Logic_DC_Jack/
slug: /Logic_DC_Jack
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Logic_DC_Jack/
---


![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian.JPG)

Este é um controlador lógico fácil de usar que implementa a lógica AND e a negação lógica.
Ele é projetado com uma ponte H que obtém determinada função de acionamento para controlar motor e outras aplicações, agora sua aplicação não ficará limitada apenas a aplicações com LED.
Se você é iniciante em programação e inclinado a fazer uma aplicação simples, esta será uma escolha inteligente para começar algo.

## Recursos

* Entrada dupla e saída única

* Selecionar a lógica por meio de uma chave

* Entrada padrão em HIGH

* Saída de meia ponte, pode acionar o motor diretamente

* Alimentado por bateria de 9V

## Especificações

* Corrente em vazio: 10±1mA;

* Tensão de entrada: 6~9V；

* Tensão de saída: 5V；

* Eficiência de conversão de energia 82±5%

## Visão geral do hardware

Aqui está o diagrama de blocos do módulo Logic_DC_Jack, que consiste nas seguintes partes.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_overview1.JPG)

* **Input** - Entrada lógica

  * GND - Conectar ao terra

    * VCC - Conectar à fonte de alimentação

    * IN2 - Entrada 2

    * IN1 - Entrada 1

* **Output** - Saída lógica

  * GND - Conectar ao terra

    * VCC - Conectar à fonte de alimentação

    * OUT - Saída

    * OUT - Saída

* **Status Led** - um LED vermelho

  * ON - Modo NOT

    * OFF - Modo AND

* **Function Switch**

  * Off - Desligado

    * Not - Modo NOT, significa que a placa agora é uma porta lógica NOT, ela só pode suportar um módulo de entrada.

    * And - Modo AND, quando apenas um cabo Grove é inserido no soquete esquerdo da placa principal, a placa principal será um conector simples. Mas se você usar um cabo Grove ramificado, a placa principal se comportará como uma porta lógica AND

_Nota: Quando em modo AND, o IN2 é padrão HIGH, então quando há apenas um módulo de entrada, o Logic DC Jack atua como um buffer_

* **Power Input** - Entrada de alimentação DC, é necessário 6-9V

* **Power Led** - Um LED verde, ligado quando há fonte de alimentação

## Primeiros passos

Após esta seção, você pode fazer o Logic DC Jack funcionar com apenas alguns passos.

### Como funciona?

Logic DC Jack é um dispositivo lógico, usado para realizar algumas funções lógicas simples. Consulte estes links para saber algumas informações sobre [NOT gate](https://en.wikipedia.org/wiki/Inverter_logic_gate) e [AND gate](https://en.wikipedia.org/wiki/AND_gate) antes de começarmos.

Este módulo inclui dois tipos de cabos e você usará um deles ao conectar uma ou duas entradas na porta de entrada.

<dl>
  <dd> Situação 1 – Uma entrada </dd>
  <dd> Se a entrada for apenas um módulo, o Logic DC Jack pode realizar a função lógica de AND e NOT. A seguir está a figura da função lógica: </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_3.png)

<dl>
  <dd> Situação 2 – Duas entradas </dd>
  <dd> Se as entradas forem dois módulos, este Logic DC Jack só pode realizar a função lógica de AND. A seguir está a figura da função lógica: </dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_4.png)

Escolha primeiro o número de entradas e, em seguida, ajuste a chave para a posição correta, a função lógica necessária estará confirmada.

### Como julgar a porta de entrada e a porta de saída?

Há dois selos de seta na carcaça, você pode distinguir facilmente a entrada e a saída.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian_2.JPG)

### Como saber o nível de entrada padrão?

Mesmo sabendo como usar a função lógica, como saber o estado de nível padrão da entrada, pois diferentes estados de nível padrão podem gerar um estado de saída diferente. Aqui, você pode descobri-lo por um experimento simples.

#### Preparações

Algumas coisas são necessárias:

* [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35)

* Bateria de 9V

#### Conectando o hardware

Neste demo, usamos [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50) como INPUT, e [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35) como OUTPUT.

Mude para porta **NOT**.

Como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_setting_stared_not.JPG)

#### Revisar resultados

Como você sabe, somente se o nível de saída for 1, então o Grove - LED poderá ser ligado. Após ligar (Power ON), você descobrirá que o Grove - LED está ligado, em outras palavras, o nível de saída é 1 de acordo com a figura da lógica, então podemos saber: se a saída é 1, o modo da chave é NOT, portanto o nível de entrada padrão é 0.

### Demo sobre duas entradas

Se você quiser usar duas entradas, você precisa do Grove Branch Cable.

Com este cabo, você pode conectar 2 Groves à INPUT. Um conecta na Entrada 1 e o outro na Entrada 2.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_cable.JPG)

Aqui está um exemplo, 2 botões de ENTRADA e um LED de SAÍDA:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_and.jpg)

O LED acenderá somente quando os 2 botões forem pressionados.

<font color="Red">Dicas: Este cabo também pode ser usado como saída; se você quiser controlar o nível de estado de 2 Groves ao mesmo tempo, este cabo é necessário. Por favor, preste atenção: Se usar o cabo desta forma, o nível de estado das duas saídas será o mesmo.</font>

### Trabalhar com Lego

Logic DC Jack contém uma caixa compatível com Lego, você pode inserir o Logic DC Jack no Lego, tornando-o mais divertido.

Sobre a base Grove compatível com Lego, estará disponível em breve.

Aqui está um demo:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_with_lego.jpg)

## Groves compatíveis para Logic DC Jack

Os Groves abaixo podem funcionar bem com o Logic DC Jack:

### Input

* [Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - Touch Sensor](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)

* [Grove - Switch](https://www.seeedstudio.com/Grove-SwitchP-p-1252.html?cPath=85_50)

* [Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)

* [Grove - Loudness Sensor](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html?cPath=25_128)

* [Grove - Moisture Sensor](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html?cPath=25_27)

* [Grove - Water Sensor](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html?cPath=25_27)

* [Grove - Magnetic Switch](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

* [Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

* [Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html?cPath=25_31)

* [Grove - PIR Motion Sensor](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31)

* [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)

* [Grove - Slide Potentiometer](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html?cPath=85_52)

* [Grove - Flame Sensor](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

### Output

* [Grove - LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

* [Grove - LED String Light](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

* [Grove - Vibration Motor](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

* [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)

* [Grove - Mini Fan](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)

* [Grove - Recorder](https://www.seeedstudio.com/Grove-Recorder-p-1825.html?cPath=25_128)

* [Grove - Electromagnet](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html?cPath=25_33)

* [Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)

## Visualizador online de esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[PDF]**   [Esquemático em PDF](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH.pdf)
* **[Eagle]**    [Esquemático em Eagle](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip)
* **[PDF]**[Logic DC Jack v1.0 pdf](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.pdf)
* **[EAGLE]**[Logic DC Jack v1.0 sch](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.sch)
* **[Wik]**   [Página Wiki da porta NOT](https://en.wikipedia.org/wiki/Inverter_(logic_gate))
* **[Wik]**    [Página Wiki da porta AND](https://en.wikipedia.org/wiki/AND_gate)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
