---
description: Shield Bot V1.2
title: Shield Bot V1.2
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Shield_Bot_V1.2
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Shield_Bot_V1.2/
---

<!-- ---
name: Shield Bot V1.2
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname: Shield_Bot_V1.2
prodimagename: Shield_Bot_Kit_Product_Image.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/shield bot.jpg
surveyurl: https://www.research.net/r/Shield_Bot_V1_2
sku: 110060010
--- -->

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Kit_Product_Image.jpg)

Shield Bot é uma plataforma robótica de nível iniciante, fácil de usar, que ajuda você a dar um salto para a Robótica. Você pode montar um robô seguidor de linha em poucos minutos usando a biblioteca e o sketch fornecidos.

Em comparação com a versão anterior, o Shield Bot V1.2 não mudou muito.
:::note
A placa Arduino compatível não está incluída, adquira um Seeeduino ou Arduino.
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Shield-Bot-p-1380.html)

Recursos
--------

- **Fácil de começar** - O Shieldbot é plug & play. Ele pode funcionar logo ao sair da caixa em poucos minutos
- **Expansível para a imaginação**- Portas de expansão Grove sem solda permitem a conexão fácil de mais sensores e atuadores. Seus headers de Shield permitem o uso de quaisquer shields Arduino adicionais
- **Código aberto** - Ele foi projetado para ser hackeado, adaptado e transformado em qualquer coisa que você quiser!
- **Baseado em Arduino** - O Shieldbot é um shield Arduino. A extensa comunidade Arduino e o ecossistema de shields podem ser usados para expansões sem fim!
- **Eficiência de carregamento** - Pode carregar totalmente rapidamente. Possui alta eficiência.

Especificações
--------------

### Especificação Geral

| Item                        | Parâmetro                                              |
|-----------------------------|-------------------------------------------------------|
| Sensor                      | 5x sensores de refletância IR para seguir linhas e bordas |
| Bateria recarregável de íons de lítio | 900 mAh                                               |
| Motor de engrenagem         | Dois micro motores de engrenagem metálicos 160:1 duráveis |
| Porta Grove                 | 6x portas de expansão Grove                           |
| Header de shield            | Headers de Expansão de Shield Arduino                 |

### Especificação de Carregamento

**Modo de carga e eficiência de carga conforme a tabela a seguir:**

| Modo       | Corrente de carga(A) | Potência de entrada(W) | Potência de carga(W) | Eficiência de carga(%) | Tempo de carga(h) |
|------------|----------------------|------------------------|----------------------|------------------------|-------------------|
| USB Charge | 0.396                | 3.94                   | 3.56                 | 90.36                  | 2.50              |
| Vin Charge | 0.7                  | 6.78                   | 6.30                 | 92.92                  | 1.41              |

Visão Geral do Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_V1.2_Foto_1.JPG)

- **Interruptor de Energia**: Quando o ShieldBot está desligado, o Shield Bot não pode funcionar. Mas você pode usar a **Porta de Carga USB** para carregar a bateria.
- **Porta de Carga USB:** USB mini-B, usada para carregar a bateria.
- **Portas Grove:** As portas Grove acessam os pinos D0, D1, D2, D3, D4, D5, A4, A5. Você pode conectar módulos Grove a essas portas Grove.
- **Potenciômetro do Sensor de Linha IR**: Usado para ajustar a sensibilidade dos sensores de linha. Girando no sentido horário, a sensibilidade aumenta; Girando no sentido anti-horário, a sensibilidade diminui.
- **Sensores de Linha IR:** S1 a S5. Azul se uma superfície não refletiva for detectada (ex: linha de fita preta)
- **Interruptor do Sensor de Linha:** Vire o interruptor para "ON" para conectar os sensores de linha aos pinos de I/O (os pinos ocupados são A0,A1,A2,A3,D4) do Arduino. O demo LineFollowingSimple na biblioteca usa o sinal de saída dos sensores de linha para controlar a execução do Shield Bot. Se o interruptor estiver em "OFF", o Seeeduino/Arduino não poderá controlar o Shield Bot através do sinal de saída dos sensores de linha.
- **Headers de Expansão de Shield Arduino**: O Shield Bot pode realmente empilhar outros shields.

:::note
1. Se S5 estiver habilitado você não pode usar as portas Grove j14 e j13.
2. Você só pode usar UMA das linhas seriais do Arduino, a porta UART Grove ou j11, pois todas compartilham a linha D1/TX.
:::

Luzes de Status
-------------

O Shield Bot tem muitos LEDs para mostrar o que está acontecendo!
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_bot_1.2_LEDs.JPG)

| Números das Luzes | Função                  | Status                                                                                     |
|--------------------|-------------------------|-------------------------------------------------------------------------------------------|
| D22                | Energia                 | Verde quando o Shieldbot está ligado. Quando o ShieldBot está desligado, o ShieldBot só pode carregar a bateria. |
| D23 e D24          | Status de carregamento  | Vermelho significa carregando, verde significa carregamento concluído.                    |
| D18                | Reset                   | Vermelho se o botão de reset estiver pressionado.                                         |
| D11 e D12          | Indicadores do Motor Direito | Verde significa para frente, vermelho significa para trás, ambos significam parado.  |
| D13 e D15          | Indicadores do Motor Esquerdo | Verde significa para frente, vermelho significa para trás, ambos significam parado.  |
| D5 D10 D14 D17 D19 | Indicadores do Sensor de Luz | Azul se uma superfície não refletiva for detectada (ex: linha de fita preta).         |

Estrutura
---------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Position_for_seeeduino.jpg)
As Partes 1, 2 e 3 são feitas em nossa impressora 3D. Você também pode ver a posição de instalação para a placa Seeeduino.

Primeiros Passos
---------------

Configurar o Shieldbot é rápido e fácil! Siga estes passos para colocar seu companheiro robótico em funcionamento.

### O Trabalho Preparatório

- Primeiro você precisa encaixar o Arduino na parte inferior do Shield Bot e conectá-lo ao PC usando um cabo USB.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_Programming2.JPG)

- É melhor você virar o Interruptor de Energia para *OFF* antes de enviar o código. Caso contrário, ele pode começar a rodar quando você não estiver atento e pode assustar você.

Nós criamos uma ótima biblioteca para o Shield Bot com funções úteis para controlar seu Shield Bot e vários exemplos para que você o coloque para funcionar em pouco tempo!

- Baixe a biblioteca a partir [daqui](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip) e descompacte.
- Coloque o arquivo ShieldBot na pasta libraries da IDE Arduino no caminho: ..\arduino-1.0.1\libraries.

### Instalar a bateria

A bateria é necessária quando você quiser fazer o Shield Bot rodar no chão.

:::note
1. Assim que a bateria for instalada, você pode carregá-la com um cabo USB mini-b. Quando a bateria estiver carregando, um LED vermelho ficará aceso. Quando terminar de carregar, um LED verde ficará aceso.
2. Ao enviar o código, você precisa conectar a porta USB do seu Seeeduino ao seu PC. A porta USB no Shield Bot é usada apenas para carregar a bateria.
:::

### Demo 1: Acionar motores para Rodar

- Abra o ambiente Arduino e vá em File->Examples->Shieldbot->drive para carregar o primeiro exemplo do Shield Bot. Certifique-se de selecionar a placa Arduino e a porta serial corretas.
- Em seguida, envie o código para o Arduino. Quando o envio estiver completo, o console deverá mostrar "Done Uploading".
- Você pode desconectar o cabo USB após concluir o envio.
- Depois coloque o Shield Bot em um lugar espaçoso e vire o interruptor de energia para '**ON'**.
- Agora o Shield Bot irá rodar a uma certa velocidade.

### Demo 2: Seguindo Linha Preta

O Shield Bot pode detectar superfícies refletivas com base nos sensores de linha (s1,s2,s3,s4,s5). Os indicadores azuis acenderão se uma superfície não refletiva for detectada (ex: linha de fita preta). Agora vamos usá-lo para fazer o robô rodar seguindo a linha preta.

:::caution
Certifique-se de que as chaves dip estejam ligadas (ON) e que nenhum dos seus shields esteja usando os pinos A0, A1, A2, A3 ou D4.
:::

- Reenvie o novo demo: LineFollowingSimple depois de conectar o Seeeduino ao PC usando o cabo USB.
- Após concluir o envio, coloque o Shield Bot na pista preta pré-construída.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Line_Finder.jpg)

- Você pode ajustar o Potenciômetro do Sensor de Linha IR para alterar a sensibilidade dos sensores de linha. Ao girar no sentido horário, a sensibilidade aumenta, ao girar no sentido anti-horário, a sensibilidade diminui. Faça um teste!

### Exemplos de Adaptação

**1. Relógio**

Este é um relógio incrivelmente simples e funcional. As rodas giram, uma para frente e outra para trás, fazendo os sensores de refletância girarem ao redor da roda indicando os minutos. Na marca da hora cheia o robô avança e move o trilho linear para indicar as horas. Crédito extra pelos trilhos lineares gratuitos feitos de sucata cortada a laser e fita celofane!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team1_2.jpg)

**2. Shot.Bot**

Foi um dispositivo realmente deslumbrante que muitas pessoas no evento comentaram que gostariam de comprar. O robô seguidor de linha recebia pedidos, então percorria a trilha até o dispensador, onde usava um servo para liberar uma quantidade de uma entre 3 bebidas, antes de voltar até o cliente.

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team7_2.jpg)

**3. Simon**

Este é um clone de Simon para 2 jogadores frente a frente, lindamente projetado, embora não totalmente finalizado. O robô executa uma melodia com luzes e você usa o disco cortado a laser, completo com braille para que até deficientes visuais possam jogar, para marcar os tons no quadro branco. O Shieldbot então avança e usa os sensores para ver se você marcou corretamente. Você quer acertar mais respostas do que seu oponente para que o robô avance em direção ao gol dele!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team6_2.jpg)

**4. HackPHX-Plotter**

O dispositivo está muito perto de superar a máquina de desenho 2D Der Kritzler, que é uma mesa vertical x,y com makerslide e teve a ideia engenhosa de parafusar os pneus do Shield bot de forma que, quando ele fosse colocado em marcha à ré, levantasse a caneta da superfície de desenho :) Eles até trabalharam com o projetista para criar uma interface de usuário no lado do PC!

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team8.jpg)

Referência
---------

Para usar a biblioteca do Shield Bot, basta adicioná-la e declarar um objeto Shieldbot no topo do seu código Arduino antes da sua função void setup()

```
#include <Shieldbot.h>  //includes the Shield Bot Library

Shieldbot shieldbot = Shieldbot(); //decares a Shieldbot object
```

**<u> setMaxSpeed(int both) </u>**

*Descrição*: define a velocidade máxima dos dois motores.

*both*: entre 0(praticamente desligado) e 255(velocidade máxima)

**<u> setMaxSpeed(int left, int right)</u>**

*Descrição*: Define uma velocidade máxima para o motor esquerdo e o direito.

*left,right*: Left é a velocidade do motor esquerdo. right é a velocidade do motor direito. entre 0(praticamente desligado) e 255(velocidade máxima)

**<u> rightMotor(char mag)</u>**

*Descrição*: Habilita o motor direito, negativo para trás, positivo para frente. Se você fizer um motor girar mais devagar, ele vai virar naquela direção. Se você fizer os motores girarem em direções opostas, ele irá girar em torno de si mesmo.

*mag*: a direção para girar o motor direito; -128: para trás totalmente, 0: não se move, 127: para frente totalmente

**<u> leftMotor(char mag)</u>**

*Descrição*: Habilita o motor esquerdo, negativo para trás, positivo para frente.

*mag*: a direção para girar o motor esquerdo; -128: para trás totalmente, 0: não se move, 127: para frente totalmente

**<u> forward()</u>**

*Descrição*: Habilita os motores para enviar o robô diretamente para frente na velocidade definida por setSpeed().

**<u> backward()</u>**

*Descrição*: Habilita os motores para enviar o robô diretamente para trás na velocidade definida por setSpeed().

**<u> drive(char left, char right)</u>**

*Descrição*: Chamada de direção para uso geral. Chama leftMotor e rightMotor diretamente.

*left*: entre -128 (motor esquerdo para trás a 100% da velocidade máxima), 0 (parado) e 127 (motor esquerdo para frente a 100% da velocidade máxima) :*right*: entre -128 (motor direito para trás a 100% da velocidade máxima), 0 (parado) e 127 (motor direito para frente a 100% da velocidade máxima)

**<u> stop()</u>**

*Descrição*: Desativa os motores. Você também pode usar drive(0,0).

**<u> stopLeft()</u>**

*Descrição*: Desativa o motor esquerdo. Você também pode usar drive(0,X).

**<u> stopRight()</u>**

*Descrição*: Desativa o motor direito. Você também pode usar drive(X,0).

**<u> fastStop()</u>**

*Descrição*: Desativa o motor direito. Você também pode usar drive(X,0).

**<u> fastStopLeft()</u>**

*Descrição*: Desativa o motor esquerdo mais rapidamente. Isto é considerado possivelmente ruim para o chip do motor, portanto use a seu critério

**<u> fastStopRight()</u>**

*Descrição*: Desativa o motor direito mais rapidamente. Isto é considerado possivelmente ruim para o chip do motor, portanto use a seu critério

**<u> readS1(), readS2(), readS3(), readS4(), readS5()</u>**

*Descrição*: Lê qualquer um dos 5 sensores de luz a bordo. NOTA: você PRECISA conectar os sensores às portas do Arduino usando o bloco de dip switch (chaves VOLTADAS para os números e o texto ON). Caso contrário, essas chaves permitiriam que você usasse esses pinos para outras coisas se você não quisesse usar seus sensores de luz

*Retorna*: LOW se a superfície refletir (ex. branco) e HIGH se a superfície não refletir nada (ex. PRETO)

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_driveLibrary.png)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Biblioteca Shield Bot 1.2](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip)
- [Arquivos Eagle do Shield Bot 1.2](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip)
- [Esquemático do ShieldBot 1.2](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_v1.2.pdf)
- [Folha de Dados do Sensor de Reflexão IR RPR-220](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/RPR-220.pdf)
- [Folha de Dados do Regulador Step up ISL97516](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/ISL97516.pdf)
- [Folha de Dados do Carregador Li-ion BQ2057](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/BQ2057.pdf)
- [Folha de Dados do Driver de Motor em Ponte H L298](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/L298.pdf)
- [Folha de Dados do Amplificador Operacional LMV358](http://www.ti.com/product/lmv358)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Shield_Bot_V1.2 -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
