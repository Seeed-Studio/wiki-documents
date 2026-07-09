---
description: Nó Atom
title: Nó Atom
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Atom_Node
sku: 102010001
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Atom_Node/
---
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

Talvez você queira fazer você mesmo um sistema de alarme para monitorar a umidade do solo em seu jardim. Enquanto você ainda está deitado confortavelmente na cama no início da manhã, pode precisar de um dispositivo que abra automaticamente o canil para o seu cachorrinho sair e aproveitar a luz do sol quente. No entanto, o software e o hardware complexos o impedem. Agora, aqui vem o Atom abrindo caminho através dos espinhos e cardos, ajudando você a concluir esses projetos caseiros maravilhosos.

Atom é um nó na internet das coisas. Ele não apenas pode funcionar de forma independente, mas também coordenar com outros dispositivos. Atom é altamente expansível e fácil de usar. Interfaces Grove padrão permitem conexões com diferentes sensores. Atom executa tarefas de forma inteligente: os abundantes dados coletados são transmitidos ao atuador sem fio. O mais fascinante é que você pode concluir todas as tarefas simplesmente configurando seu telefone Android.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom possui transmissão de dados sem fio e monitoramento móvel. Equipado com interface Bee padrão, os Atoms podem ser conectados a XBee, RFBee e Bluetooth Bee para formar uma rede de comunicação sem fio, que coleta e gerencia os dados automaticamente. Atom também pode fazer upload dos dados de diferentes sensores para a Nuvem, tornando conveniente analisar dados a qualquer hora e em qualquer lugar simplesmente por meio de navegadores Web.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)

## Recurso

---
- Configuração centrada em dispositivos móveis/Apps
- Código Aberto
- Topologia de redes sem fio flexível, de Ad-hoc a malha (mesh)
- Bateria integrada
- Vários indicadores, fácil de distinguir o estado de funcionamento
- Filosofia Skin-Skeleton-Gut

## Especificação

---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Item</th>
<th scope="col">Típico</th>
<th scope="col">Unidade</th>
</tr>
<tr>
<th scope="row">Tensão de Alimentação USB</th>
<td>4.75-5.25</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">Corrente de repouso (conectar RF Bee)</th>
<td>25~40</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Tensão de GPIO</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Capacidade da bateria</th>
<td>300</td>
<td>mAH</td>
</tr>
<tr>
<th scope="row">Corrente de carga</th>
<td>300-500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Interface USB</th>
<td>MICRO USB</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Frequência de funcionamento</th>
<td>16</td>
<td>MHz</td>
</tr>
<tr>
<th scope="row">Tensão de alimentação Grove</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Corrente de saída (Máx)</th>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Tempo contínuo de funcionamento (Máx)</th>
<td>22</td>
<td>h</td>
</tr>
<tr>
<th scope="row">Frequência de resposta do sensor fotosensível</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">Indicação de bateria fraca</th>
<td>3.71</td>
<td>V</td>
</tr>
<tr>
<th scope="row">Frequência de resposta do sensor fotosensível</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">Distância de comunicação RF BEE (seeed) (Máx) em ambiente externo</th>
<td>200</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Distância de comunicação Xbee(Xbee) (Máx) em ambiente externo</th>
<td>30</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Distância de comunicação Bluetooth Bee(seeed) (Máx) em ambiente externo</th>
<td>20</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Conector Grove</th>
<td>3(IIC;UART;PWM)</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Soquete Bee de 20 pinos</th>
<td>Compatível com Rfbee, Xbee, Bluetooth Bee</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Indicador de carga bicolor</th>
<td>Verde/Vermelho</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Indicador de usuário bicolor</th>
<td>Verde/Vermelho</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Frequência do buzzer</th>
<td>2.7±0.3</td>
<td>K</td>
</tr>
</table>

## Topologia

O Nó Atom possui conectores de sensor/atuador para funcionar sozinho. Com XBee ou outros módulos de comunicação RF abertos, ele também está pronto para se comunicar em diversas topologias de rede quando usado em múltiplas unidades. Por exemplo:

**1. Primeiro modo:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

Neste modo, o sensor e o atuador estão conectados a um Nó Atom. O Nó Atom lê os dados do sensor e determina se aciona o atuador para executar as ações relacionadas. A Demonstração 1 no uso funciona neste modo.

**2. Segundo modo:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

Neste modo, o sensor e o atuador estão conectados a dois Nós Atom. O Nó Atom recebe os dados do sensor que são enviados por outro Nó Atom através do RFBee e determina se aciona o próprio atuador para executar as ações relacionadas. A Demonstração 2 no uso funciona neste modo.

**3. Terceiro modo:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

Neste modo, o sensor é conectado a um Nó Atom (aqui o chamamos de AtomSensor). Outros Nós Atom recebem os dados do sensor que são enviados pelo AtomSensor através do RFBee e determinam se acionam o próprio atuador para executar as ações relacionadas.

## A Estrutura

As soluções de nó são projetadas alinhadas com a filosofia SSG (skin skeleton gut).
Gut: eletrônica interna

Skeleton: uma estrutura de alumínio mínima para proteção e fixação, deixando aberturas suficientes para atender vários sensores/atuadores

Tamanho do produto: 82mm*63.5mm*17mm

Material: Alumínio 5052

Acabamento: Anodizado Preto/Prata

Características de destaque: estrutura de dobradiça

Limpeza das peças: remover todas as rebarbas e cantos vivos. Limpar todos os óleos, sujeira ou outros contaminantes

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

Vamos aguardar ansiosamente por estes protótipos...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

## O Hardware

---
O sistema adota o Atmel 32U4 como chip principal. E é equipado com soquete de interface Bee padrão para comunicação sem fio. Adota fonte de alimentação de 3,3 V, e a interface de alimentação externa é Micro USB. Quando conectado a uma fonte de alimentação externa, ele é convertido para 3,3 V através de um circuito DC‐DC de tensão ajustável (baseado no chip TD6810), e fornece energia para todo o sistema. Enquanto isso, a fonte de alimentação de 5 V carrega a bateria de lítio através do CI de gerenciamento de carga CN3065.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** CI Atmel 32U4, um microcontrolador AVR de 8 bits;

**U3:** CI TD6810-ADJ, regulador síncrono step-down de 1,5MHz e 800mA;

**U4:** CI CN3065, chip de gerenciamento de carga.

**Micro USB:** Carregar a bateria de lítio e programar.

**Indicador de carga:** Durante o processo de carregamento, o indicador é vermelho; quando termina o carregamento, fica verde. Quando não está conectado a uma fonte de alimentação externa ou quando a bateria está em estado normal, o indicador não acende. Quando está em nível de bateria fraca (não conectar à alimentação externa), ele mostra vermelho.

**Indicador do usuário:** Piscar verde indica transmissão de dados, piscar vermelho indica inicialização. Luz vermelha indica modo de configuração.

**Sensor de luz:** Recebe parâmetros codificados enviados pelo dispositivo Android.

**Conector ADC:** Pode conectar sensores (não é conector IIC).

**Conector PWM:** Pode conectar atuadores (não é conector IIC).

**Conector IIC:** Pode conectar sensores ou atuadores (é conector IIC).

**<font color="red">Nota:</font>** Um nó Atom não pode conectar simultaneamente dois ou mais sensores (atuadores).

**Principais recursos**

- MCU compatível com Arduino

- Bateria LiPo e circuito carregador

- LED/LDR para configuração de parâmetros

- Conector de sensor/atuador

- Soquete compatível com XBee

- Cabo Micro USB para programação e alimentação

- Design de baixo consumo

**Diagrama de blocos**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Beacon_ATOM_hardware.jpg)

**Instrução de projeto de hardware**

[https://www.seeedstudio.com/wiki/images/1/1b/Beacon_Atom_Hardware_Design_Analysis_.pdf](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

**Visão geral do Nó Atom**

Agora vamos ver como é o Nó Atom.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Hardware_View.jpg)

## O firmware e o software

---

### O firmware

O firmware que foi carregado no Nó Atom pode acionar sensores e atuadores.
Sensores disponíveis para o Nó Atom:

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">Nome</th>
<th scope="col">Tipo</th>
<th scope="col">Modo de controle</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Grove - Button</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Grove - Tilt Switch</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Grove - Line Finder</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Grove - PIR Motion Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Grove - Infrared Reflective Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Grove - Magnetic switch</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Grove - Touch Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Grove - IR Distance Interrupter</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Grove - Hall Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Grove - Collision Sensor</td>
<td>Sensor</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Grove - Moisture sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Grove - Light Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Grove - Rotary Angle Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">44</th>
<td>Grove - Temprature Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">45</th>
<td>Grove - Water Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">46</th>
<td>Grove - 80cm Infrared Proximity Sensor</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">47</th>
<td>Grove - Sensor de Temperatura Infravermelho</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">48</th>
<td>Grove - Potenciômetro Deslizante</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">59</th>
<td>Grove - Sensor de qualidade do ar 1.0</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">50</th>
<td>Grove - Sensor de Eletricidade</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
<tr>
<th scope="row">51</th>
<td>Grove - Sensor de Álcool</td>
<td>Sensor</td>
<td>Analógico</td>
</tr>
</table>

Atualmente ele pode acionar quase todos os sensores. É visível que o firmware é poderoso.
Atuadores disponíveis para o Atom Node:

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">Nome</th>
<th scope="col">Tipo</th>
<th scope="col">Modo de Controle</th>
</tr>
<tr>
<th scope="row">128</th>
<td>Grove - Relé</td>
<td>Atuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">129</th>
<td>Grove - LED</td>
<td>Atuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">135</th>
<td>Grove - LED Multicolorido Piscante (5mm)</td>
<td>Atuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">136</th>
<td>Grove - LED de Cor Variável</td>
<td>Atuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">137</th>
<td>Grove - Buzzer</td>
<td>Atuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">138</th>
<td>Grove - Vibrador</td>
<td>Atuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">201</th>
<td>Grove - Display OLED 128*64</td>
<td>Atuador</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">202</th>
<td>Grove - OLED 96x96</td>
<td>Atuador</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">223</th>
<td>Grove - Barra de LED</td>
<td>Atuador</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">224</th>
<td>Grove - Emissor Infravermelho</td>
<td>Atuador</td>
<td>IR</td>
</tr>
</table>

### O software

Existe um aplicativo para configurar os módulos Atom Node. O programa é executado em dispositivos Android. Durante o processo de configuração, a área de tela do dispositivo Android piscará para transmitir parâmetros codificados ao Atom Node por meio de um transistor sensível à luz. A interface de configuração é mostrada abaixo:

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Configuration_Interface_.png)

## Uso

---
Atom Node é uma solução de hardware de código aberto para a Internet das Coisas, que pode suportar vários sensores e atuadores Grove para coletar dados físicos e executar determinadas ações. O Atom Node precisa ser configurado antes de ser colocado em uso. Após a configuração, vários módulos podem coletar e transmitir dados sem fio por meio do RFBee.

Vamos tomar o sensor de temperatura como exemplo para ilustrar o uso do Atom Node. Vamos tentar fazer o seguinte: quando a temperatura ultrapassar 28 ℃, um buzzer irá soar.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Effect_diagram.jpg)

**Trabalho preparatório:**
Para usar o dispositivo, você precisa de pelo menos um RFBee/Xbee (ao usar apenas um Atom Node, ele não é necessário) e um dispositivo Android (o Atom Node não o inclui). Se você quiser que o Atom Node funcione, eles são essenciais. E certifique-se de que a taxa de transmissão do RFBee/XBee esteja definida em 57.600. Caso contrário, você precisa modificar a configuração, usando o seu próprio método ou enviar o demo do [arquivo da Biblioteca:RFBee](https://files.seeedstudio.com/wiki/Atom_Node/res/RFBee.zip) para o RFBee. Em seguida, baixe [o pacote do programa de aplicativo:BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip) e instale em um dispositivo Android.

### Demo 1: Usar um Atom Node

Agora, usando um Atom Node funcionando no modo IFTTT, siga os passos abaixo:

<!-- *   Connect a Grove - Temperature to ADC port and Grove - Buzzer to PWM port using [Grove - Universal 4 Pin cables](/pt-br/Grove_System/#grove-cables). -->

- Conecte o RFBee no soquete Bee.
- Pressione o botão em um lado do Atom Node para ligá‑lo. O LED do outro lado acenderá. Em seguida, pressione o botão novamente para fazer o Atom Node entrar no modo de configuração. Enquanto isso, o indicador do usuário fica vermelho.

- Abra o app Atom Node; você verá a seguinte interface:

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Interface1.jpg)

- Clique no sinal de mais no canto superior direito para adicionar um dispositivo; um painel de seleção irá aparecer.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface2.jpg)

Vamos fazer uma pausa para apresentar brevemente a interface.

1) Nome do dispositivo: pode ser qualquer palavra. Como "Sensor-temperature" ou qualquer palavra que você goste.

2) Sensor: escolha um sensor.

3) O restante da configuração é para o Atuador. Se você não precisar de um, escolha NULL e o restante das opções será automaticamente ignorado.

Agora vamos configurá‑lo e definir o nome do dispositivo como "temp".

- Consulte a figura abaixo, insira "temp" como o nome do dispositivo. Escolha "Grove - Temperature" em "Sensor" e escolha "Grove - Buzzer" em Actuator. Escolha quaisquer outras opções além de "Null" em "Sensor Radio Frequency", insira o valor "if" e escolha on em "then":
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface9.png)

<font color="red">No modo indie, a fonte de disparo deve ser o próprio dispositivo, portanto você deve escolher "temp" na caixa suspensa de "Trigger from". Mas agora só há a opção "Null". Apenas ignore esse problema. Depois que você vir o nome do dispositivo na lista de dispositivos, poderá reconfigurar quando o nome do dispositivo aparecer em "Trigger from".</font>

- Coloque‑o na tela do dispositivo Android. Observe que o sensor de luz está voltado para a tela. É melhor que o brilho da tela esteja ajustado em cerca de 35%.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface3.jpg)

<!-- *   Click "Submit". It will start configuring. <font color="red">After successful configuration, the user indicator lights green and blinks.</font>If the configuration fails, click Again. If it keeps failing, you can refer to [FAQ](/pt-br/Atom_Node). -->

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface4.jpg)

- Concluímos a configuração, você já pode vê‑la na lista de dispositivos.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

<font color="red">Lembre‑se de que você acabou de selecionar a fonte de disparo como Null. Você precisa reconfigurá‑la.</font>

- Assim que o sensor de temperatura ler um valor superior a 28 ℃, o buzzer irá soar.

### Demo 2: Usar dois Atom Node

Usando dois Atom Nodes funcionando no modo IFTTT, você pode seguir os passos abaixo:

- Conecte um Grove - Temperature à porta ADC do Atom Node e conecte um RFBee (taxa de transmissão 57.600) ao soquete Bee.

- Conecte um Grove - Buzzer à porta PWM de outro Atom Node e conecte um RFBee ao soquete Bee.

- Abra o app Atom Node. Clique no sinal de mais no canto superior direito. Definimos o nome do dispositivo como "temp" e escolhemos Grove - Temperature em "sensor" como segue:
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface6.jpg)

- Ligue o Atom Node e entre no modo de configuração pressionando o botão, depois coloque‑o na tela do Android. Clique em Submit. Ele começará a configuração.

- Após concluir a configuração de um Atom Node, você poderá vê‑lo na lista de dispositivos.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

- Em seguida, configure o outro Atom Node, conectando um Grove - Buzzer de forma semelhante.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface7.jpg)

Ao configurar o atuador, defina o nome do atuador. Em seguida, escolha a fonte de disparo do atuador em "Trigger from". Gostaríamos de usar o dispositivo previamente configurado "temp" para acionar o atuador: portanto devemos escolher "temp" na caixa suspensa de "Trigger from". Existem algumas outras condições de disparo e ações, como "If" e "then", que ajudam você a construir um elo entre uma determinada condição e as ações correspondentes. Aliás, os valores de "If" devem sempre seguir o tipo de dado do Sensor que você utilizou.

- Quando os dois Nodes tiverem sido configurados, ele começará a funcionar. Então você verá o LED de usuário em verde.
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface8.jpg)

## Descrição do Status de Trabalho

---
<table cellspacing="0">
<tr>
<th scope="col">Operar</th>
<th scope="col">Status</th>
</tr>
<tr>
<th> Pressione o botão de energia</th>
<td> O LED de energia acenderá (Azul)</td>
</tr>
<tr>
<th> Pressione o botão de energia após ligar o Atom Node</th>
<td> O LED de energia está aceso (Azul), o LED do usuário acenderá (se não estiver pareado, o LED do usuário é vermelho; após parear com sucesso, o LED do usuário é verde e pisca)</td>
</tr>
<tr>
<th> Pressione o botão de energia quando estiver no modo de configuração</th>
<td> O LED de energia está aceso (Azul), o LED do usuário apagará</td>
</tr>
<tr>
<th> Pressione e segure o botão de energia</th>
<td> Todos os LEDs apagarão e o Buzzer soará</td>
</tr>
<tr>
<th> Clique duas vezes no botão de energia</th>
<td> O indicador do usuário será desligado ou ligado</td>
</tr>
<tr>
<th> Clique quatro vezes no botão de energia</th>
<td> todos os indicadores mantêm seus estados</td>
</tr>
<tr>
<th> Conecte o Atom Node ao PC usando um cabo USB</th>
<td> O LED de carga acenderá (o LED de carga é vermelho durante o carregamento; após completar o carregamento, o LED de carga é verde), o LED de energia acenderá</td>
</tr>
</table>

## Atualizar o firmware

---

### Conectar o dispositivo e instalar o driver

- Baixe [o Arquivo de Driver do Atom Node](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Driver.zip) e salve‑o.
- Conecte o cabo Micro‑USB ao Atom Node e conecte o outro lado do conector Micro‑USB à porta USB do computador.
- Aguarde o aviso de novo hardware encontrado. Se o instalador não iniciar automaticamente, navegue até o Gerenciador de Dispositivos do Windows e encontre a listagem Seeeduino Lite.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/A_Unknow_Device.jpg)

- Clique com o botão direito e escolha Update driver. Quando for perguntado se deseja instalar automaticamente ou de um local específico, selecione "Browse my computer for driver software".

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_Driver.jpg)

- Escolha "Search for the best driver in these locations" e marque a caixa "incude this location in the search". Clique no botão Browse e navegue até o driver que você baixou. Selecione a pasta de drivers e clique em **OK**.

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Browse_the_Driver.jpg)

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_the_Driver.jpg)

### Modificar arquivo: boards.txt e USBCore.cpp

- Abra o diretório Arduino-1.0.1/hardware/arduino/cohttps://files.seeedstudio.com/wiki/Atom_Node/res/arduino e substitua o arquivo:USBCore.cpp por [o novo USBCore.cpp](https://files.seeedstudio.com/wiki/Atom_Node/res/USBCore.zip).

- E substitua o arquivo：boards.txt por [o novo boards.txt](https://files.seeedstudio.com/wiki/Atom_Node/res/Boards-Atom_Node-.txt) no caminho:Arduino-1.0.1/hardware/arduino.

### Baixar os arquivos de biblioteca necessários e o firmware do Atom.Node

- O firmware mais recente do Atom.Node: [https://github.com/reeedstudio/Atom_Node](https://github.com/reeedstudio/Atom_Node)

- A biblioteca mais recente do Atom.Node:  [https://github.com/reeedstudio/Atom_Node_Libraries](https://github.com/reeedstudio/Atom_Node_Libraries)

### Enviar programa usando o Arduino IDE

- Abra o Atom_Node.ino do arquivo de firmware do Atom.Node

- Selecione Seeeduino Node no menu Tools | Board do ambiente Arduino. E selecione a porta correta.
- Compile e envie o código.

Agora você concluiu a atualização do firmware.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Atom_Node_Eagle_File.zip](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip)

- [Biblioteca Atom Node](https://github.com/reeedstudio/Atom_Node_Libraries)

- [Firmware Atom Node](https://github.com/reeedstudio/Atom_Node)

- [o programa de aplicação:BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip)

- [instrução de projeto de hardware](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
