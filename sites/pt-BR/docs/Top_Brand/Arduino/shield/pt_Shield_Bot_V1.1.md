---
description: Shield Bot V1.1
title: Shield Bot V1.1
keywords:
  - Shield Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Shield_Bot_V1.1
sku: 110060010
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Shield_Bot_V1.1/
---

<!-- ---
name: Shield Bot V1.1
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname:  Shield Bot V1.1
prodimagename: 4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG
surveyurl: https://www.research.net/r/Shield_Bot_V1-1
sku:  110060010
--- -->
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/shield%20bot.jpg)

Comparado com a versão anterior, o Shield Bot V1.1 pode usar a porta USB do PC para carregar a bateria. E a eficiência de carregamento foi muito melhorada depois que otimizamos o circuito. E você pode usar o pino Vin do Arduino/Seeeduino para carga rápida.

Nota: Placa Arduino compatível não incluída, experimente o [Seeeduino](/pt-br/Seeeduino "Seeeduino").

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Shield-Bot-p-1380.html)

## Recursos

---

* **Fácil de começar** - O Shieldbot é plug and play e pode estar funcionando em poucos minutos, direto da caixa

* **Expansível para a imaginação** - portas de expansão Grove sem solda permitem a fácil conexão de mais sensores e atuadores, e os headers de shield permitem o uso de shields Arduino adicionais

* **Código aberto** - Foi projetado para ser hackeado, adaptado e transformado no que você quiser!

* **Baseado em Arduino** - o Shieldbot é um shield Arduino, portanto a ampla comunidade Arduino e o ecossistema de shields podem ser usados para uma expansão infinita!

* **Eficiência de carregamento** - Pode ser totalmente carregado rapidamente e possui alta eficiência.

:::note
A nova versão atualiza a saída de alta tensão de aproximadamente acima de 4,0 V para aproximadamente acima de 4,5 V.
:::

## Especificação

---

<table>
  <tr>
    <th>Item</th>
    <th>Parâmetro</th>
  </tr>
  <tr>
    <td width="200">Sensor</td>
    <td width="300">5 sensores de refletância IR para seguir linha e borda</td>
  </tr>
  <tr>
    <td>Bateria recarregável de íons de lítio</td>
    <td>900 mAh</td>
  </tr>
  <tr>
    <td>Motor de engrenagem</td>
    <td>Dois micro motores de engrenagem metálica duráveis 160:1</td>
  </tr>
  <tr>
    <td>Porta Grove</td>
    <td>6 portas de expansão Grove</td>
  </tr>
  <tr>
    <td>Header de shield</td>
    <td>Headers de expansão de Shield Arduino</td>
  </tr>
</table>

## Especificação de carregamento

---
<font color="red">Modo de carregamento e eficiência de carregamento conforme a tabela a seguir:</font>

<table>
  <tr>
    <th>Modo</th>
    <th>Corrente de carga(A)</th>
    <th>Potência de entrada(W)</th>
    <th>Potência de carga(W)</th>
    <th>Eficiência de carga(%)</th>
    <th>Tempo de carga(h)</th>
  </tr>
  <tr>
    <td width="200">Carregamento via USB</td>
    <td width="200">0.396</td>
    <td width="200">3.94</td>
    <td width="200">3.56</td>
    <td width="200">90.36</td>
    <td width="200">2.50</td>
  </tr>
  <tr>
    <td>Carregamento via Vin</td>
    <td>0.7</td>
    <td>6.78</td>
    <td>6.30</td>
    <td>92.92</td>
    <td>1.41</td>
  </tr>
</table>

## Função da interface

---
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_V1.2_Foto_1.JPG)

* **Interruptor de energia**: Quando o ShieldBot está desligado, o Shield Bot não pode funcionar. Mas você pode usar a **porta de carregamento USB** para carregar a bateria.

* **Porta de carregamento USB:** USB mini-B, usada para carregar a bateria.

* **Portas Grove:** As portas Grove acessam os pinos D0, D1, D2, D3, D4, D5, A4, A5. Podem conectar módulos Grove a essas portas Grove.
* **Potenciômetro do sensor de linha IR**: Usado para ajustar a sensibilidade dos sensores de linha. Ajuste no sentido horário, a sensibilidade aumenta; ajuste no sentido anti-horário, a sensibilidade diminui.

* **Sensores de linha IR:** S1 a S5. Azul se for detectada uma superfície não refletiva (por exemplo, linha de fita preta)
* **Interruptor Enable:** Gire o interruptor em direção a "ON" para conectar os sensores de linha aos pinos de E/S (os pinos ocupados são A0,A1,A2,A3,D4) do Arduino. O demo LineFollowingSimple na biblioteca usa o sinal de saída dos sensores de linha para controlar o movimento do Shield Bot. Se o interruptor estiver em direção a "OFF", o Seeeduino/Arduino não pode controlar o Shield Bot através do sinal de saída dos sensores de linha.

* **Headers de expansão de Shield Arduino**: O Shield Bot pode realmente empilhar outros shields.

:::note

* 1) Se S5 estiver habilitado, você não pode usar as portas Grove j14 e j13.
* 2) Você só pode usar UMA das linhas seriais do Arduino, porta Grove uart ou j11, pois todas compartilham a linha D1/TX.
:::

## Luzes de status

---
O Shield Bot tem muitos LEDs para mostrar o que está acontecendo!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_bot_1.2_LEDs.JPG)

<table>
  <tr>
    <th>Número das luzes</th>
    <th>Função</th>
    <th>Status</th>
  </tr>
  <tr>
    <td width="200">D22</td>
    <td>Alimentação</td>
    <td>Verde quando o Shieldbot está ligado. Quando o ShieldBot está desligado, o ShieldBot só pode carregar a bateria.</td>
  </tr>
  <tr>
    <td>D23 e D24</td>
    <td>Status de carregamento</td>
    <td>Vermelho significa carregando, verde significa carregamento concluído.</td>
  </tr>
  <tr>
    <td>D18</td>
    <td>Reset</td>
    <td>Vermelho se o botão de reset for pressionado.</td>
  </tr>
  <tr>
    <td>D11 e D12</td>
    <td>Indicadores do motor direito</td>
    <td>Verde significa para frente, vermelho significa para trás, ambos significa parado.</td>
  </tr>
  <tr>
    <td>D13 e D15</td>
    <td>Indicadores do motor esquerdo</td>
    <td>Verde significa para frente, vermelho significa para trás, ambos significa parado.</td>
  </tr>
  <tr>
    <td>D5 D10 D14 D17 D19</td>
    <td>Indicadores do sensor de luz</td>
    <td>Azul se for detectada uma superfície não refletiva (por exemplo, linha de fita preta).</td>
  </tr>
</table>

## Estrutura

---
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Position_for_seeeduino.jpg)

As Partes 1, 2 e 3 são feitas pela nossa impressora 3D. Os dois cubos são iguais. Imprima o diagrama como mostrado abaixo. Muito mágico!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Print_diagram_1.JPG) ![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/P1018898.JPG)

## Primeiros passos

---
Configurar o Shieldbot é rápido e fácil! Siga estas etapas para colocar seu companheiro robótico para funcionar.

### O trabalho preparatório

* Primeiro você precisa conectar o Arduino à parte de baixo do Shield Bot e conectá-lo ao PC usando um cabo USB.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_Programming2.JPG)

* É melhor você girar o interruptor Enable para _OFF_ antes de enviar o código. Caso contrário, ele executa quando você não está atento e pode assustar você.

Construímos uma boa biblioteca para o Shield Bot com funções úteis para controlar seu Shield Bot e vários exemplos para que você o coloque em funcionamento em pouco tempo!

* Baixe a biblioteca a partir [daqui](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip) e descompacte. Abra o arquivo Note.txt antes de usar nossa biblioteca.
* Coloque o arquivo ShieldBot na pasta libraries da IDE Arduino pelo caminho: ..\arduino-1.0.1\libraries.

### Instalar a bateria

A bateria é necessária quando você quiser fazer o Shield Bot correr no chão.
:::note

* 1) Depois que a bateria for instalada, você pode carregar a bateria com um cabo USB mini-B. Quando a bateria estiver carregando, um LED vermelho ficará aceso. Quando terminar o carregamento, um LED verde acenderá.
* 2) Ao enviar o código, você precisa conectar a porta USB do seu Seeeduino ao seu PC. A porta USB no Shield Bot é usada para carregar a bateria.
:::

:::note
Como mudamos os pinos do driver para o Shield Bot v1.1, certifique-se de ter modificado o arquivo .cpp para corresponder à versão do seu Shield Bot antes de usar o arquivo da biblioteca Shieldbot. A etapa de modificação é descrita em Note.txt.
:::

### Demo 1: Fazer os motores rodarem

* Abra o ambiente Arduino e vá para File-&gt;Examples-&gt;Shieldbot-&gt;drive para carregar o primeiro exemplo do Shield Bot. Certifique-se de selecionar a placa Arduino e a porta serial corretas.
* Em seguida, envie o código para o Arduino. Quando o envio estiver completo, o console deverá mostrar "Done Uploading".
* Você pode desconectar o cabo USB após concluir o envio.
* Depois coloque o Shield Bot em um local espaçoso e gire o interruptor de energia para '**ON'**.
* Agora o Shield Bot irá se mover a uma determinada velocidade.

### Demo 2: Seguir linha preta

O Shield Bot pode detectar superfície refletiva com base nos sensores de linha (s1,s2,s3,s4,s5). Os indicadores azuis acendem se for detectada uma superfície não refletiva (por exemplo, linha de fita preta). Agora vamos usá-lo para fazer o robô correr seguindo a linha preta.<br />
**<font color="red">Nota: Certifique-se de que os dip switches estejam em ON e que nenhum dos seus shields esteja usando os pinos A0,A1,A2,A3 ou D4.  </font>**

* Reenvie o novo demo: LineFollowingSimple depois de conectar o Seeeduino ao PC usando o cabo USB.

* Depois de concluir o envio, coloque o Shield Bot na pista preta pré-montada. Então a tela fina aparecerá:

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_Line_Finder.jpg)

* Você pode ajustar o potenciômetro do sensor de linha IR para alterar a sensibilidade dos sensores de linha. Quando o ajuste é no sentido horário, a sensibilidade aumenta; no sentido anti-horário, a sensibilidade diminui. Faça um teste!

### Exemplos de adaptação

**1. Relógio**

Este é um relógio incrivelmente simples e funcional. As rodas giram, uma para frente e outra para trás, girando os sensores de refletância ao redor da roda indicando os minutos. Na marca da hora cheia, o robô anda para frente e avança o trilho linear para indicar as horas. Créditos extras pelos trilhos lineares gratuitos feitos de sucata cortada a laser e fita celofane!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team1_2.jpg)

**2. Shot.Bot**

Era um dispositivo realmente muito bonito que muitas pessoas no evento comentaram que gostariam de comprar. O robô seguidor de linha recebia pedidos e então percorria a trilha até o dispensador, onde usava um servo para acionar uma quantidade de uma de 3 bebidas, antes de voltar até o cliente.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team7_2.jpg)

**3. Simon**

Há um clone de Simon para 2 jogadores frente a frente, lindamente projetado, embora não totalmente finalizado. O robô reproduz uma melodia com luzes e você usa o disco recortado a laser, completo com braille para que até mesmo pessoas com deficiência visual possam jogar, para marcar os tons no quadro branco. O Shieldbot então avança e usa os sensores para ver se você marcou corretamente. Você quer obter mais respostas certas do que seu oponente para que o robô dirija em direção ao gol dele!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team6_2.jpg)

**4. HackPHX-Plotter**

O dispositivo está muito perto de superar a máquina de desenho 2D Der Kritzler, que é uma mesa vertical x,y com makerslide e teve a ideia engenhosa de parafusar os pneus do Shield bot de forma que, quando fosse colocado em ré, levantasse a caneta da superfície de desenho :) Eles até trabalharam com o projetista para criar uma interface de usuário no lado do PC!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team8.jpg)

## Referência

---
Para usar a biblioteca do Shield Bot, basta adicionar a biblioteca Shield Bot e declarar um objeto Shieldbot no início do seu código Arduino antes da sua função void setup()

```
#include <Shieldbot.h> //includes the Shield Bot Library
Shieldbot shieldbot = Shieldbot(); //decares a Shieldbot object
```

**<u>setMaxSpeed(int both)</u>**

*Description*: define a velocidade máxima dos dois motores.
*both*: entre 0(basicamente desligado) e 255(velocidade máxima)

**<u>setMaxSpeed(int left, int right)</u>**

*Description*: Define uma velocidade máxima para o motor esquerdo e direito.
*left,right*: Left é a velocidade do motor esquerdo. right é a velocidade do motor direito. entre 0(basicamente desligado) e 255(velocidade máxima)

**<u>rightMotor(char mag)</u>**

*Description*: Habilita o motor direito, negativo para ré, positivo para frente. Se você fizer um motor girar mais devagar, ele irá virar naquela direção. Se você fizer os motores girarem em direções opostas, ele irá girar no próprio eixo.
*mag*: a direção de rotação do motor direito; -128: ré total, 0: não se move, 127: frente total

**<u>leftMotor(char mag)</u>**

*Description*: Habilita o motor esquerdo, negativo para ré, positivo para frente.
*mag*: a direção de rotação do motor esquerdo; -128: ré total, 0: não se move, 127: frente total

**<u>forward()</u>**

*Description*: Habilita os motores para enviar o robô diretamente para frente na velocidade definida com setSpeed().

**<u>backward()</u>**

*Description*: Habilita os motores para enviar o robô diretamente para trás na velocidade definida com setSpeed().

**<u>drive(char left, char right)</u>**

*Description*: Chamada de direção para propósito geral. Chama leftMotor e rightMotor diretamente.
*left*: entre -128 (motor esquerdo em ré a 100% da velocidade máxima), 0 (parado), e 127 (motor esquerdo para frente a 100% da velocidade máxima)
*right*: entre -128 (motor direito em ré a 100% da velocidade máxima), 0 (parado), e 127 (motor direito para frente a 100% da velocidade máxima)

**<u>stop()</u>**

*Description*: Desabilita os motores. Você também pode usar drive(0,0).

**<u>stopLeft()</u>**

*Description*: Desabilita o motor esquerdo. Você também pode usar drive(0,X).

**<u>stopRight()</u>**

*Description*: Desabilita o motor direito. Você também pode usar drive(X,0).

**<u>fastStop()</u>**

*Description*: Desabilita o motor direito. Você também pode usar drive(X,0).

**<u>fastStopLeft()</u>**

*Description*: Desabilita o motor esquerdo mais rapidamente. Considera-se que isso pode ser prejudicial para o chip do motor, portanto use a seu critério

**<u>fastStopRight()</u>**

*Description*:  Desabilita o motor direito mais rapidamente. Considera-se que isso pode ser prejudicial para o chip do motor, portanto use a seu critério

**<u>readS1(), readS2(), readS3(), readS4(), readS5()</u>**

*Description*: Lê qualquer um dos 5 sensores de luz a bordo. NOTA você PRECISA conectar os sensores às portas do Arduino usando o bloco de dip switch (chaves VOLTADAS para os números e o texto ON). Essas chaves, caso contrário, permitiriam que você usasse esses pinos para outras coisas se você não quisesse usar seus sensores de luz
*Returns*: LOW se a superfície refletir (ex. branco) e HIGH se a superfície não refletir nada (ex. PRETO)

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_driveLibrary.png)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Biblioteca Shield Bot](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip)

* [Arquivos Eagle do Shield Bot](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip)

* [Esquemático do ShieldBot](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ShieldBotv0.9b_Schematic.pdf)

* [RPR-220 Datasheet](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/RPR-220.pdf) Sensor de refletância IR

* [ISL97516 Datasheet](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ISL97516.pdf) Regulador step up

* [BQ2057 Datasheet](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/BQ2057.pdf) Carregador de íon de lítio

* [L298 Datasheet](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/L298.pdf) Driver de Motor em Ponte H

* [358 Datasheet](http://www.ti.com/product/lmv358) Amplificador operacional (Op-Amp) como comparador para sensores de refletância

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
