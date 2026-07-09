---
description: Este wiki fornece um guia abrangente para trabalhar com o reComputer R1000, um controlador de borda IoT industrial baseado no Raspberry Pi 4. Ele inclui instruções para configurar o Node-RED, simular temperaturas de ambientes com o YABE e descobrir e ler parâmetros de dispositivos BACnet IP para uma integração eficiente com o Sistema de Gerenciamento Predial (BMS).
title: reComputer R1000 com Node-Red e BACnet IP
keywords:
  - Controlador de Borda
  - reComputer R1000
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_node_red_bacnet_ip
last_update:
  date: 06/20/2024
  author: ShuishengPeng
createdAt: '2024-06-20'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_node_red_bacnet_ip/
---

## Introdução 
BACnet IP (Building Automation and Control Network over IP) é um protocolo de comunicação projetado para gerenciar e automatizar sistemas prediais. Ele permite que dispositivos de diferentes fabricantes interoperem perfeitamente em redes IP padrão, aprimorando a integração e a flexibilidade do sistema. As principais vantagens do BACnet IP em Sistemas de Gerenciamento Predial (BMS) incluem melhor escalabilidade, instalação e manutenção mais fáceis e a capacidade de aproveitar a infraestrutura de rede existente. O BACnet IP também oferece suporte à troca de dados em tempo real, facilitando um melhor monitoramento e controle dos sistemas prediais. Isso resulta em maior eficiência energética, redução de custos operacionais e maior conforto e segurança para os ocupantes.

Este tutorial mostra o processo de uso do Node-RED para ler dados de dispositivos BACnet no reComputer R1000 e realizar exibição visual em tempo real. Utilizamos um simulador de dispositivo BACnet em um PC com W10 para simular um dispositivo BACnet real. O reComputer R1000 e o PC com W10 foram conectados ao mesmo roteador para garantir que estivessem no mesmo segmento de rede e, em seguida, os dados foram lidos e exibidos.

## Iniciando

Antes de começar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparação de Software

O reComputer R1000 chega até você com o Raspberry Pi OS pré-instalado. Se você estiver inicializando este dispositivo pela primeira vez, leia nosso [Getting Started Wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r/). Para informações sobre o Node-RED, você pode consultar as [seguintes publicações](https://wiki.seeedstudio.com/pt-br/Edge-Box-Getting-Started-with-Node-Red/). Recomenda-se que você revise este guia antes de prosseguir para este wiki. Neste tutorial, vamos conectar o PC Host executando o simulador de temperatura de ambiente YABE ao Node-RED executando no reComputer R1000.

### Download de Nodes
Este tutorial usa o node **"node-bacnet-contrib-extended"**, o node **"node-red-contrib-loop"** e o node **"node-red-dashboard"**. Faça o download deles antes de começar. Para saber como baixar nodes, você pode consultar o [Tutorial](https://wiki.seeedstudio.com/pt-br/Edge-Box-Getting-Started-with-Node-Red/).
### YABE

Acesse este [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) e baixe o YABE (Yet Another BACnet Explorer). O YABE é uma ferramenta versátil que permite simular e explorar dispositivos BACnet, tornando-o ideal para fins de teste e desenvolvimento. Depois de baixado e instalado no seu PC Host, o YABE será usado para simular dados de temperatura de ambientes, que então leremos e processaremos usando o Node-RED no reComputer R1000.



## Iniciar o Simulador de Controlador de Temperatura de Ambiente 

Depois de instalar o YABE, navegue até a pasta `add-on` e clique duas vezes em `bacnet.Room.Simulator` para iniciá-lo. 

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

Depois disso, você precisa iniciar o YABE.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

Em seguida, clique no símbolo `+` para adicionar um dispositivo e insira o endereço IP da porta Ethernet do seu PC. Clique em "Start".

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
Talvez seja necessário configurar o endereço IP da porta Ethernet para garantir que ele esteja no mesmo domínio de rede tanto do reComputer quanto do seu PC.
:::



Depois disso, você deverá conseguir ver o dispositivo com o mesmo ID de dispositivo que o simulador de temperatura de ambiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## O processo de leitura de dispositivos BACnet pelo Node-RED
Depois de abrir o RoomSimulator, você passa a ter um dispositivo BACnet. As etapas a seguir podem ler os dados do dispositivo por meio do Node-RED e exibi-los.
### Etapa 1: Buscar Dispositivos
Primeiro, você precisa obter a localização do dispositivo BACnet. Você pode usar o node `"discover-devices"` para isso. Ele pode pesquisar todos os dispositivos BACnet conectados a você e exibir o endereço IP e o número do dispositivo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/1Search_device.gif" /></center>

### Etapa 2: Ler dados
Depois de obter o endereço do dispositivo, você pode se comunicar com o dispositivo correspondente. Este exemplo usa `"read-single-device"` para ler todos os dados de um dispositivo. O node precisa do endereço e do número do dispositivo. Essas duas informações podem ser obtidas a partir da primeira etapa. Podemos usar o node `"function"` para obter essas duas informações e inseri-las no node `"read-single-device"` para ler os dados do dispositivo. Você pode copiar o caminho dos atributos deviceID e Address na janela de depuração à direita e, em seguida, atribuí-los às variáveis em `"function"`, para que você possa obter com precisão o endereço e o número do dispositivo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/2ReadSingleDevice.gif" /></center>

### Etapa 3: Filtrar dados
Há muitos itens de dados lidos na segunda etapa. Precisamos processá-los para obter os itens de dados que queremos. Aqui extraímos três dados de temperatura, ou seja, "Tempture indoor", "Tempture outdoor", "Tempture Water". O método é o mesmo da segunda etapa. Copiamos o caminho do item de dado correspondente na janela de depuração e, em seguida, o extraímos no node `"function"`. Depois disso, podemos usar esses três itens de dados.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/3Filter_data.gif" /></center>

- Abaixo está o código para filtrar os dados
```javascript
var Temperature_Indoor = Number(msg.payload["OBJECT_LIST(76)"][1]["PRESENT_VALUE(85)"]); 
var Temperature_Waterm = Number(msg.payload["OBJECT_LIST(76)"][2]["PRESENT_VALUE(85)"]); 
var Temperature_Outdoor = Number(msg.payload["OBJECT_LIST(76)"][3]["PRESENT_VALUE(85)"]); 
var msg0 = { payload: Temperature_Indoor };
var msg1 = { payload: Temperature_Waterm };
var msg2 = { payload: Temperature_Outdoor };
return [msg0, msg1, msg2];
```
### Etapa 4: Leitura em loop
Precisamos obter continuamente dados de dispositivos BACnet, o que exige o uso do node `"loop"`. Como mostrado na figura, introduzimos o node `"loop"` para entrar no loop com base na terceira etapa. O node `"loop"` possui três modos de loop. Estamos usando o modo `"condition"`, e `"1 == 1"` é inserido na condição de loop para obter um loop infinito. Ao mesmo tempo, é adicionado um node `"delay"` para introduzir um atraso de 2 s no loop, de modo que os dados possam ser lidos a cada 2 s.

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/4Loop_reading.gif" /></center>

### Etapa 5: Exibição de Dados
Por meio das 4 etapas acima, podemos obter continuamente dados de dispositivos BACnet. Para tornar as mudanças de dados mais intuitivas, podemos introduzir funções de UI e desenhar uma interface interativa de UI para exibir as mudanças de dados. Isso pode ser implementado usando o node **"node-red-dashboard"**. Neste exemplo, `"chart"` e `"gauge"` são usados para desenhar três conjuntos de gráficos de linha e painéis. A saída da etapa 4 é usada como entrada de `"chart"` e `"gauge"` para obter monitoramento visual em tempo real dos dados BACnet.
<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/5show.gif" /></center>

Esta seção apresenta principalmente como usar os nodes **"node-bacnet-contrib-extended"** e **"node-red-dashboard"** para realizar a leitura visual de dados de dispositivos BACnet. Mais instruções para o uso do node **"node-bacnet-contrib-extended"** você pode encontrar [neste tutorial](https://wiki.seeedstudio.com/pt-br/edge_box_rpi_200_node_red_bacnet_tcp/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
