---
description: Este wiki fornece um guia abrangente para trabalhar com o Edge Box RPi 200, um controlador de borda IoT industrial baseado no Raspberry Pi 4. Ele inclui instruções para configurar o Node-RED, simular temperaturas de ambiente com o YABE e descobrir e ler parâmetros de dispositivos BACnet IP para uma integração eficiente com o Sistema de Gerenciamento Predial (BMS).
title: Edge Box RPi 200 com Node Red e BACnet TCP
keywords:
  - Controlador de Borda
  - Edge-Box
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /edge_box_rpi_200_node_red_bacnet_tcp
last_update:
  date: 06/05/2024
  author: Kasun Thushara
createdAt: '2024-06-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/edge_box_rpi_200_node_red_bacnet_tcp/
---

## Introdução

BACnet IP (Building Automation and Control Network over IP) é um protocolo de comunicação projetado para gerenciar e automatizar sistemas prediais. Ele permite que dispositivos de diferentes fabricantes interoperem de forma transparente em redes IP padrão, aumentando a integração e a flexibilidade do sistema. As principais vantagens do BACnet IP em Sistemas de Gerenciamento Predial (BMS) incluem melhor escalabilidade, instalação e manutenção mais fáceis e a capacidade de aproveitar a infraestrutura de rede existente. O BACnet IP também oferece suporte à troca de dados em tempo real, facilitando um melhor monitoramento e controle dos sistemas prediais. Isso resulta em maior eficiência energética, redução de custos operacionais e maior conforto e segurança para os ocupantes.

## Iniciando

Antes de começar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
   <table class="table-nobg">
      <tr class="table-trnobg">
         <th class="table-trnobg">Edge Box RPi 200</th>
      </tr>
      <tr class="table-trnobg"></tr>
      <tr class="table-trnobg">
         <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
      </tr>
      <tr class="table-trnobg"></tr>
      <tr class="table-trnobg">
         <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
         </a></div></td>
      </tr>
   </table>
</div>

### Preparação de Software

O Edge Box chega até você com o Raspberry Pi OS pré-instalado. Se você estiver inicializando este dispositivo pela primeira vez, leia nosso [Wiki de Primeiros Passos](https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/). Nós preparamos um [Guia de Primeiros Passos no Node-RED](https://wiki.seeedstudio.com/pt-br/Edge-Box-Getting-Started-with-Node-Red/). Recomenda-se que você revise este guia antes de prosseguir para este wiki. Neste tutorial, vamos conectar o PC Host executando o simulador de temperatura de ambiente YABE ao Node-RED executando no Edge Box.

### YABE

Acesse este [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) e baixe o YABE (Yet Another BACnet Explorer). O YABE é uma ferramenta versátil que permite simular e explorar dispositivos BACnet, sendo ideal para fins de teste e desenvolvimento. Depois de baixado e instalado no seu PC Host, o YABE será usado para simular dados de temperatura de ambiente, que então iremos ler e processar usando o Node-RED no Edge Box.

### Configurar as definições de Ethernet para BACnet IP

Como o domínio de IP do seu Dispositivo é diferente das suas definições de rede sem fio, talvez você tenha que alterar a configuração de IP manualmente. Para isso,

- **Passo 01**: Execute o seguinte comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Passo 02**: Em seguida, configure as definições da porta Ethernet de acordo com o domínio de rede do seu Dispositivo e defina prioridades usando o comando metric. O menor valor de metric tem a maior prioridade. Então conecte o Edge Box e o Dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## Instalar o nó BACnet

1. **Abrir o Node-RED:**
   Inicie o Node-RED no seu Edge Box. Você normalmente pode acessá-lo abrindo um navegador web e navegando para `http://<your-edgebox-ip>:1880`.

2. **Acessar o Manage Palette:**
   No canto superior direito da interface do Node-RED, clique nas três linhas horizontais (menu) para abrir o menu principal. No menu suspenso, selecione "Manage palette".

3. **Instalar Novos Nós:**
   Na janela "Manage palette", vá para a aba "Install".

4. **Procurar pelo Pacote:**
   Na caixa de pesquisa, digite `node-red-contrib-bacnet-extended` para localizar o pacote.

5. **Instalar o Pacote:**
   Quando você vir `node-red-contrib-bacnet-extended` na lista de nós disponíveis, clique no botão "Install" ao lado dele. Isso iniciará o processo de instalação.

6. **Aguardar a Conclusão da Instalação:**
   A instalação pode levar alguns momentos. Quando estiver concluída, você deverá ver uma mensagem de confirmação.

7. **Verificar a Instalação:**
   Depois que a instalação for concluída, os nós BACnet estarão disponíveis na paleta do Node-RED. Você pode verificar isso consultando a lista de nós na barra lateral esquerda do editor Node-RED.

Agora, você instalou com sucesso o `node-red-contrib-bacnet-extended` e pode começar a usá-lo para integrar dispositivos BACnet com seus fluxos no Node-RED.

## Iniciar o Simulador de Controle de Temperatura de Ambiente

Depois de instalar o YABE, navegue até a pasta `add-on` e clique duas vezes em `bacnet.Room.Simulator` para iniciá-lo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

Feito isso, você precisa iniciar o YABE.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

Em seguida, clique no ícone `+` para adicionar um dispositivo e insira o endereço IP da porta Ethernet do seu PC. Clique em "Start".

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
Talvez você precise configurar o endereço IP da porta Ethernet para garantir que ele esteja no mesmo domínio de rede tanto do EdgeBox quanto do seu PC.
:::

Depois disso, você deverá conseguir ver o dispositivo com o mesmo ID de dispositivo que o simulador de temperatura de ambiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## Descobrir Dispositivos BACnet IP

1. **Nós Necessários:**
   Você precisará dos seguintes quatro nós:
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **Adicionar Nós ao Fluxo:**
   Arraste e solte os nós acima no fluxo da sua bancada de trabalho do Node-RED.

3. **Conectar os Nós:**
   Conecte os nós da seguinte maneira:
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-device.PNG" /></center>

4. **Configurar o Nó Function:**
   Clique duas vezes no nó Function para abrir sua caixa de diálogo de configuração. No bloco de função, escreva o seguinte código:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **Implantar o Fluxo:**
   Clique no botão "Deploy" no canto superior direito da interface do Node-RED para implantar o fluxo.

6. **Acionar a Descoberta de Dispositivos:**
   Clique no botão de carimbo de data/hora (nó Inject) para iniciar o processo de descoberta.

7. **Verificar a Saída de Depuração:**
   Aguarde a saída aparecer na janela Debug. Você verá o IP do dispositivo e o ID do dispositivo na mensagem de depuração.

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet1.gif" /></center>

## Ler Todos os Parâmetros do Dispositivo

Para ler todos os parâmetros de dispositivos BACnet usando o Node-RED, siga estes passos:

1. **Preparar Nós:**
   - Você precisará de quatro nós: Inject, Function, Read-All-Devices e Debug.

2. **Adicionar Nós à Bancada:**
   - Arraste e solte os nós Inject, Function, Read-All-Devices e Debug na sua bancada.

3. **Conectar os Nós:**
   - Conecte os nós na seguinte ordem:

     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-all-devices.PNG" /></center>

4. **Configurar o Nó Function:**
   - Clique duas vezes no nó Function para abrir sua janela de configuração.
   - Insira o seguinte código no bloco de função:
   -

     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **Implantar o Fluxo:**
   - Clique no botão "Deploy" no canto superior direito da interface do Node-RED para implantar o fluxo.

6. **Iniciar a Leitura de Parâmetros dos Dispositivos:**
   - Clique no botão de carimbo de data/hora no nó Inject para iniciar o processo.

7. **Verificar a Saída:**
   - Aguarde a saída aparecer na janela Debug. Você verá os parâmetros dos dispositivos na área de rede BACnet.

Esta configuração lerá todos os parâmetros dos dispositivos BACnet na sua rede e os exibirá na janela Debug do Node-RED.

<center><img width="300" src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-read-all.png" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet2.gif" /></center>

## Ler dados de um único dispositivo

1. **Preparar Nós:**
   - Você precisará de quatro nós: Inject, Function, Read-All-Devices e Debug.

2. **Adicionar Nós à Bancada:**
   - Arraste e solte os nós Inject, Function, Read-Single-Device e Debug na sua bancada.

3. **Conectar os Nós:**
   - Conecte os nós na seguinte ordem:

     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-device.PNG" /></center>

4. **Configurar o Nó Function:**
   - Clique duas vezes no nó Function para abrir sua janela de configuração.
   - Insira o seguinte código no bloco de função:
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-func.PNG" /></center>

5. **Implantar o Fluxo:**
   - Clique no botão "Deploy" no canto superior direito da interface do Node-RED para implantar o fluxo.

6. **Iniciar leitura de parâmetros do dispositivo:**
   - Clique no botão de carimbo de data/hora (`timestamp`) no nó Inject para iniciar o processo.

7. **Verificar a saída:**
   - Aguarde a saída aparecer na janela Debug. Você verá os parâmetros do dispositivo selecionado na área de rede BACnet.

<center><img width={300} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet3.gif" /></center>

## Ler dados de um objeto específico de um único dispositivo

1. **Preparar nós:**
   - Você precisará de quatro nós: Inject, dois nós Function, Read-Single-Device e Debug.

2. **Adicionar nós à área de trabalho:**
   - Arraste e solte os nós Inject, dois nós Function, Read-Single-Device e Debug na sua área de trabalho.

3. **Conectar nós:**
   - Conecte os nós na seguinte ordem:

     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object.PNG" /></center>

4. **Configurar o nó Function:**
   - Dê um clique duplo no nó Function próximo ao nó Inject para abrir a janela de configuração.
   - Insira o seguinte código no bloco function:
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

   - Dê um clique duplo no nó Function próximo ao nó Debug para abrir a janela de configuração.
   - Insira o seguinte código no bloco function:
   -

     ```javascript
        const objects = msg.payload['OBJECT_LIST(76)'];
        let temperatureIndoor = null;

        for (let obj of objects) {
        if (obj['OBJECT_NAME(77)'] === 'Temperature.Indoor' && obj['OBJECT_TYPE(79)'] === 'ANALOG_INPUT(0)') {
        temperatureIndoor = obj['PRESENT_VALUE(85)'];
        break;
        }
        }

        if (temperatureIndoor !== null) {
        msg.payload = { 'Temperature.Indoor': temperatureIndoor };
        } else {
        msg.payload = { error: 'Temperature.Indoor not found' };
        }

        return msg;

     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object-func.PNG" /></center>

5. **Implantar o fluxo:**
   - Clique no botão "Deploy" no canto superior direito da interface do Node-RED para implantar o fluxo.

6. **Iniciar leitura de parâmetros do dispositivo:**
   - Clique no botão de carimbo de data/hora (`timestamp`) no nó Inject para iniciar o processo.

7. **Verificar a saída:**
   - Aguarde a saída aparecer na janela Debug. Você verá os parâmetros apenas do objeto específico no dispositivo selecionado na área de rede BACnet.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet4.gif" /></center>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
