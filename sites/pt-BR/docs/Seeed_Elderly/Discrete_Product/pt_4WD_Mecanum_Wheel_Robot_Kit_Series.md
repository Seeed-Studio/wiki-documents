---
description: Série de Kits de Robô com Roda Mecanum 4WD
title: Série de Kits de Robô com Roda Mecanum 4WD
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4WD_Mecanum_Wheel_Robot_Kit_Series
sku: 110070012
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/4WD_Mecanum_Wheel_Robot_Kit_Series/
---

Os produtos da série 4WD Mecanum Wheel Robot Kit são plataformas móveis com tração nas 4 rodas baseadas em rodas Mecanum. Cada kit contém duas rodas mecanum esquerdas, bem como duas rodas mecanum direitas. As quatro rodas Mecanum estão cada uma conectada a um motor separado com controle independente. Dependendo da direção e velocidade de cada roda individual, a plataforma móvel pode se mover para frente, para trás, de lado e em quaisquer outras direções desejadas, ou girar. Dois módulos de controle remoto – módulo BLE e módulo RF – podem ser adicionados a este kit para permitir o controle remoto.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

A roda Mecanum é um tipo de roda projetada para mover um veículo em qualquer direção. É uma roda convencional com uma série de roletes fixados à sua circunferência. Cada um desses roletes tem um eixo de rotação a 45° em relação ao plano da roda e a 45° em relação a uma linha que passa pelo centro do rolete paralela ao eixo de rotação da roda. Existem dois tipos de rodas Mecunum: esquerda e direita; a diferença entre elas é a orientação dos roletes. Para a roda Mecunum esquerda, como mostrado abaixo, os roletes são orientados do canto inferior direito para o canto superior esquerdo. Os roletes das rodas direitas são instalados da maneira oposta.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/LeftAndRight_Mecanum_Wheel.PNG)

A instalação do kit 4WD Mecanum Wheel exige certo cuidado. Uma configuração correta requer que cada uma das quatro rodas seja posicionada como mostrado abaixo, onde o eixo de rotação do rolete superior de cada roda aponta para o centro da plataforma. Observe que toda a análise dinâmica e os códigos pré-escritos são baseados nessa configuração.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Wheel_Installation_02.PNG)

Os roletes periféricos inclinados traduzem uma parte da força na direção de rotação da roda em uma força normal à direção da roda. Dependendo da direção e velocidade de cada roda individual, a combinação resultante de todas essas forças produz um vetor de força total em qualquer direção desejada. Seja o raio da roda R, a velocidade angular das quatro rodas ω1, ω2, ω3, ω4, as velocidades dos roletes em cada roda νg1, νg2, νg3 e νg4, e a velocidade da plataforma na direção x, direção y e a velocidade angular νx, νy e ω0. A origem do sistema de coordenadas global é O, o centro da plataforma, e os sistemas de coordenadas locais em cada roda têm origem em O1, O2, O3 e O4. A distância do meio da plataforma até o meio da roda é L1, e L2 é a distância entre o meio da plataforma e o eixo de rolamento da roda. α é o ângulo dos roletes: 45º neste caso.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Coordinate_System.PNG)

No sistema de coordenadas global, a velocidade no centro da roda 1, O1, é

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O1.PNG)

Já no sistema de coordenadas local da roda 1, a velocidade de O1 é

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O12.PNG)

Combinando as equações (1) ~ (4), obtemos

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_010.PNG)

Resolvendo (5) e (6), a velocidade angular da roda 1 é

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_02.PNG)

Da mesma forma, a velocidade das outras 3 rodas pode ser calculada como

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_03.PNG)

A equação (8) mostra a relação entre as velocidades de rotação das rodas e o movimento da plataforma. Teoricamente, a plataforma pode se mover em qualquer direção com uma combinação adequada da velocidade angular das quatro rodas. Na prática, para esta plataforma, os movimentos mais usados são bastante limitados. Aqui apresentamos um princípio de funcionamento simplificado da plataforma. Se você não gosta de números ou equações, simplesmente ignore a seção de análise dinâmica e veja a figura abaixo.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Working_Principle-Simplified-.PNG)

Mover todas as quatro rodas na mesma direção causa movimento para frente ou para trás; fazer as rodas de um lado girarem na direção oposta às do outro lado faz o veículo girar; e fazer as rodas de uma diagonal girarem na direção oposta às da outra diagonal faz com que o movimento seja lateral.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Mecanum-Wheel-Robot-Kit-p-2276.html)

## Recursos

- Roda Mecanum Interna

- Mobilidade Omnidirecional

- Alta Capacidade de Carga

- Flexibilidade &amp; Extensibilidade

- Opções de Controle RF/BLE

## Lista de Peças

1. Kit de Roda Mecanum Esquerda

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Left_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nome das Peças</th>
<th scope="col">Especificação</th>
<th scope="col">Material</th>
<th scope="col">Quantidade</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Roda Mecanum Esquerda</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Suporte de Motor para Motor DC</td>
<td>Série 25</td>
<td>Metal</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Conector de Eixo</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Alumínio</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Parafuso de Fixação</td>
<td>M3×5</td>
<td>Metal</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M4×18</td>
<td>Metal</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Parafuso de Cabeça Panela com Rebaixo Cruzado</td>
<td>M3×8</td>
<td>Metal</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Parafuso de Cabeça Panela com Rebaixo Cruzado com Arruela</td>
<td>M3×8</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Porca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
</table>

2. Kit de Roda Mecanum Direita

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Right_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nome das Peças</th>
<th scope="col">Especificação</th>
<th scope="col">Material</th>
<th scope="col">Quantidade</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Roda Mecanum Direita</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Suporte de Motor para Motor DC</td>
<td>Série 25</td>
<td>Metal</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Conector de Eixo</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Alumínio</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Parafuso de Fixação</td>
<td>M3×5</td>
<td>Metal</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M4×18</td>
<td>Metal</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Parafuso de Cabeça Panela com Rebaixo Cruzado</td>
<td>M3×8</td>
<td>Metal</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Parafuso de Cabeça Panela com Rebaixo Cruzado com Arruela</td>
<td>M3×8</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Porca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
</table>

3. Versão Básica

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Part_List_for_Basic_Version.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nome das Peças</th>
<th scope="col">Especificação</th>
<th scope="col">Material</th>
<th scope="col">Quantidade</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chassi</td>
<td>250*145*5mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Plataforma Superior</td>
<td>192*145*5mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Tampa da Bateria</td>
<td>68*47*2mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Roda Mecanum Esquerda</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Roda Mecanum Direita</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Suporte de Motor para Motor DC</td>
<td>Série 25</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Conector de Eixo</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Alumínio</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Parafuso de Fixação</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 peças</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M2×8</td>
<td>Metal</td>
<td>20 peças</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Parafuso de Cabeça Panela com Rebaixo Cruzado</td>
<td>M3×8</td>
<td>Metal</td>
<td>26 peças</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Parafuso de Cabeça Panela com Rebaixo Cruzado com Arruela</td>
<td>M3×8</td>
<td>Metal</td>
<td>16 peças</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Porca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>16 peças</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Espaçador Hexagonal</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 peças</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Espaçador Hexagonal</td>
<td>M3×10</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Suporte de Distância Hexagonal</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Suporte de Distância Hexagonal</td>
<td>M2×10</td>
<td>Metal</td>
<td>6 peças</td>
</tr>
</table>

4. Versão RF

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nome das Peças</th>
<th scope="col">Especificação</th>
<th scope="col">Material</th>
<th scope="col">Quantidade</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chassi</td>
<td>250*145*5mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Plataforma Superior</td>
<td>192*145*5mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Tampa da Bateria</td>
<td>68*47*2mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Painel de Controle Remoto</td>
<td>165*90*4mm, Transparente</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Roda Mecanum Esquerda</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Roda Mecanum Direita</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Suporte de Motor para Motor DC</td>
<td>Série 25</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Conector de Eixo</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Alumínio</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Parafuso de Fixação</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 peças</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M2×8</td>
<td>Metal</td>
<td>32 peças</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Parafuso de Cabeça Panela com Fenda Cruzada</td>
<td>M3×8</td>
<td>Metal</td>
<td>34 peças</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Parafuso de Cabeça Panela com Fenda Cruzada e Arruela</td>
<td>M3×8</td>
<td>Metal</td>
<td>16 peças</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Porca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>16 peças</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Suporte de Distância Hexagonal</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 peças</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Suporte de Distância Hexagonal</td>
<td>M3×10</td>
<td>Metal</td>
<td>8 peças</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Suporte de Distância Hexagonal</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">19</th>
<td>Suporte de Distância Hexagonal</td>
<td>M2×10</td>
<td>Metal</td>
<td>12 peças</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[RF Bee](https://www.seeedstudio.com/depot/RFbee-V11-Wireless-arduino-compatible-node-p-614.html?cPath=19_22)</td>
<td></td>
<td></td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Grove - XBee Carrier](https://www.seeedstudio.com/depot/Grove-XBee-Carrier-p-905.html?cPath=98_16)</td>
<td></td>
<td></td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - Thumb Joystick](https://www.seeedstudio.com/depot/Grove-Thumb-Joystick-p-935.html?cPath=85_51)</td>
<td></td>
<td></td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">25</th>
<td>[Grove - Branch Cable](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">26</th>
<td>Cabo de Energia</td>
<td>100mm, Preto</td>
<td></td>
<td>3 peças</td>
</tr>
<tr>
<th scope="row">27</th>
<td>Cabo de Energia</td>
<td>100mm, Vermelho</td>
<td></td>
<td>3 peças</td>
</tr>
<tr>
<th scope="row">28</th>
<td>Interruptor Rocker</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">29</th>
<td>Conector em T</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
</table>

5. Versão BLE

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-BLE_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nome das Peças</th>
<th scope="col">Especificação</th>
<th scope="col">Material</th>
<th scope="col">Quantidade</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chassi</td>
<td>250*145*5mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Plataforma Superior</td>
<td>192*145*5mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Tampa da Bateria</td>
<td>68*47*2mm, Preto</td>
<td>PMMA</td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Roda Mecanum Esquerda</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Roda Mecanum Direita</td>
<td>Φ60mm H32mm</td>
<td>Alumínio&amp;Borracha</td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Suporte de Motor para Motor DC</td>
<td>Série 25</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Conector de Eixo</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Alumínio</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Parafuso de Fixação</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 peças</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa</td>
<td>M2×8</td>
<td>Metal</td>
<td>20 peças</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Parafuso de Cabeça Panela com Fenda Cruzada</td>
<td>M3×8</td>
<td>Metal</td>
<td>10 peças</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Parafuso de Cabeça Panela com Fenda Cruzada e Arruela</td>
<td>M3×8</td>
<td>Metal</td>
<td>32 peças</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Porca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>16 peças</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Suporte de Distância Hexagonal</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 peças</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Suporte de Distância Hexagonal</td>
<td>M3×10</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Suporte de Distância Hexagonal</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 peças</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Suporte de Distância Hexagonal</td>
<td>M2×10</td>
<td>Metal</td>
<td>6 peças</td>
</tr>
<tr>
<th scope="row">19</th>
<td>[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2 peças</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - BLE](https://www.seeedstudio.com/depot/Grove-BLE-p-1929.html)</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V30-Atmega-328P-p-669.html)</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - Branch Cable](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">25</th>
<td>Cabo de Energia</td>
<td>100mm, Preto</td>
<td></td>
<td>3 peças</td>
</tr>
<tr>
<th scope="row">26</th>
<td>Cabo de Energia</td>
<td>100mm, Vermelho</td>
<td></td>
<td>3 peças</td>
</tr>
<tr>
<th scope="row">27</th>
<td>Interruptor Rocker</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
<tr>
<th scope="row">28</th>
<td>Conector em T</td>
<td></td>
<td></td>
<td>1 peça</td>
</tr>
</table>

## Instruções de Montagem

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Assembly_Instructions.PNG)

## Anexos

[Especificações do Motor](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/res/Motor_Specs_for_4WD_Mecanum_Wheel_Robot_Kit_Series_Products.pdf)

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
