---
description: Este wiki fornece um guia abrangente para trabalhar com o reTerminal DM, uma IHM de borda IoT industrial baseada no Raspberry Pi 4. Ele inclui instruções para configurar o Node-RED, simular temperaturas de ambiente com o YABE e descobrir e ler parâmetros de dispositivos BACnet IP para uma integração eficiente com Sistemas de Gerenciamento Predial (BMS).
title: reTerminal DM com Node Red e BACnet TCP
keywords:
  - BMS
  - IHM
  - Raspberry pi
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png
slug: /reterminal_dm_rpi_200_node_red_bacnet_tcp
last_update:
  date: 06/26/2024
  author: Kasun Thushara
createdAt: '2024-06-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reterminal_dm_rpi_200_node_red_bacnet_tcp/
---
## Introdução

BACnet IP (Building Automation and Control Network over IP) é um protocolo de comunicação desenvolvido para gerenciar e automatizar sistemas prediais. Ele permite que dispositivos de diferentes fabricantes interoperem perfeitamente por meio de redes IP padrão, aumentando a integração e a flexibilidade do sistema. As principais vantagens do BACnet IP em Sistemas de Gerenciamento Predial (BMS) incluem melhor escalabilidade, instalação e manutenção mais simples e a capacidade de aproveitar a infraestrutura de rede existente. O BACnet IP também oferece suporte à troca de dados em tempo real, facilitando um monitoramento e controle mais eficientes dos sistemas prediais. Isso resulta em maior eficiência energética, redução de custos operacionais e maior conforto e segurança para os ocupantes.

## Iniciando

Antes de iniciar este projeto, você precisa preparar o hardware e o software com antecedência, conforme descrito aqui.

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

Nós preparamos um [Guia de primeiros passos no Node-RED](https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Getting-Started-with-Node-Red/). Recomenda-se revisar este guia antes de prosseguir para este wiki.

### YABE

Acesse este [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) e baixe o YABE (Yet Another BACnet Explorer). O YABE é uma ferramenta versátil que permite simular e explorar dispositivos BACnet, sendo ideal para fins de teste e desenvolvimento. Depois de baixá-lo e instalá-lo no seu PC Host, o YABE será usado para simular dados de temperatura de ambiente, que então leremos e processaremos usando o Node-RED no reTerminal DM.

### Configurar definições de Ethernet para BACnet IP

Como o domínio de IP do seu dispositivo é diferente das suas configurações sem fio, talvez seja necessário alterar a configuração de IP manualmente. Para isso,

- **Passo 01**: Execute o seguinte comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Passo 02**: Em seguida, configure as definições da porta Ethernet de acordo com o domínio de rede do seu PLC/Dispositivo e defina as prioridades usando o comando **metric**. O menor valor de metric tem a maior prioridade.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG"/></center>

## Instalar o nó BACnet

1. **Abra o Node-RED:**
   Inicie o Node-RED no seu reTerminal. Normalmente, você pode acessá-lo abrindo um navegador da web e navegando para `http://<your-reTerminal-DM-ip>:1880`.

2. **Acesse Manage Palette:**
   No canto superior direito da interface do Node-RED, clique nas três linhas horizontais (menu) para abrir o menu principal. No menu suspenso, selecione "Manage palette."

3. **Instalar novos nós:**
   Na janela "Manage palette", vá até a aba "Install".

4. **Pesquisar o pacote:**
   Na caixa de pesquisa, digite `node-red-contrib-bacnet-extended` para encontrar o pacote.

5. **Instalar o pacote:**
   Quando você vir `node-red-contrib-bacnet-extended` na lista de nós disponíveis, clique no botão "Install" ao lado dele. Isso iniciará o processo de instalação.

6. **Aguarde a conclusão da instalação:**
   A instalação pode levar alguns instantes. Quando for concluída, você verá uma mensagem de confirmação.

7. **Verificar a instalação:**
   Após a conclusão da instalação, os nós BACnet estarão disponíveis na paleta do Node-RED. Você pode verificar isso conferindo a lista de nós na barra lateral esquerda do editor do Node-RED.

Agora, você instalou com sucesso o `node-red-contrib-bacnet-extended` e pode começar a usá-lo para integrar dispositivos BACnet aos seus fluxos Node-RED.

## Iniciar o simulador de controlador de temperatura de ambiente

Depois de instalar o YABE, navegue até a pasta `add-on` e clique duas vezes em `bacnet.Room.Simulator` para iniciá-lo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/room-simulator.PNG" /></center>

Depois disso, você precisa iniciar o YABE.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/Yabe-app.png" /></center>

Em seguida, clique no sinal `+` para adicionar um dispositivo e insira o endereço IP da porta Ethernet do seu PC. Clique em "Start."

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/YABE-config.PNG" /></center>

:::note
Talvez seja necessário configurar o endereço IP da porta Ethernet para garantir que ele esteja no mesmo domínio de rede tanto do reTerminal DM quanto do seu PC.
:::

Depois disso, você deverá conseguir ver o dispositivo com o mesmo ID de dispositivo que o simulador de temperatura de ambiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/simulator&YABE.PNG" /></center>

## Descobrir dispositivos BACnet IP

1. **Nós necessários:**
   Você precisará dos quatro nós a seguir:
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **Adicionar nós ao fluxo:**
   Arraste e solte os nós acima no fluxo da sua área de trabalho do Node-RED.

3. **Conectar os nós:**
   Conecte os nós da seguinte maneira:
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-device.PNG" /></center>

4. **Configurar o nó Function:**
   Clique duas vezes no nó Function para abrir sua janela de configuração. No bloco de função, escreva o seguinte código:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **Fazer o deploy do fluxo:**
   Clique no botão "Deploy" no canto superior direito da interface do Node-RED para fazer o deploy do fluxo.

6. **Acionar a descoberta de dispositivos:**
   Clique no botão de carimbo de data/hora (nó Inject) para iniciar o processo de descoberta.

7. **Verificar a saída de Debug:**
   Aguarde a saída aparecer na janela Debug. Você verá o IP do dispositivo e o ID do dispositivo na mensagem de debug.

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet1.gif" /></center>

## Ler todos os parâmetros do dispositivo

Para ler todos os parâmetros de dispositivos BACnet usando o Node-RED, siga estas etapas:

1. **Preparar nós:**
   - Você precisará de quatro nós: Inject, Function, Read-All-Devices e Debug.

2. **Adicionar nós à área de trabalho:**
   - Arraste e solte os nós Inject, Function, Read-All-Devices e Debug na sua área de trabalho.

3. **Conectar os nós:**
   - Conecte os nós na seguinte ordem:

     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-all-devices.PNG" /></center>

4. **Configurar o nó Function:**
   - Clique duas vezes no nó Function para abrir sua janela de configuração.
   - Insira o seguinte código no bloco de função:
   -

     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **Fazer o deploy do fluxo:**
   - Clique no botão "Deploy" no canto superior direito da interface do Node-RED para fazer o deploy do fluxo.

6. **Iniciar leitura dos parâmetros do dispositivo:**
   - Clique no botão de carimbo de data/hora no nó Inject para iniciar o processo.

7. **Verificar a saída:**
   - Aguarde a saída aparecer na janela Debug. Você verá os parâmetros dos dispositivos na área de rede BACnet.

Esta configuração irá ler todos os parâmetros dos dispositivos BACnet na sua rede e exibi-los na janela Debug do Node-RED.

<center><img width="300" src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-read-all.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet2.gif" /></center>

## Ler dados de um único dispositivo

1. **Preparar nós:**
   - Você precisará de quatro nós: Inject, Function, Read-All-Devices e Debug.

2. **Adicionar nós à área de trabalho:**
   - Arraste e solte os nós Inject, Function, Read-Single-Device e Debug na sua área de trabalho.

3. **Conectar os nós:**
   - Conecte os nós na seguinte ordem:

     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-device.PNG" /></center>

4. **Configurar o nó Function:**
   - Clique duas vezes no nó Function para abrir sua janela de configuração.
   - Insira o seguinte código no bloco de função:
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-func.PNG" /></center>

5. **Fazer o deploy do fluxo:**
   - Clique no botão "Deploy" no canto superior direito da interface do Node-RED para fazer o deploy do fluxo.

6. **Iniciar leitura dos parâmetros do dispositivo:**
   - Clique no botão de carimbo de data/hora no nó Inject para iniciar o processo.

7. **Verificar a saída:**
   - Aguarde a saída aparecer na janela Debug. Você verá os parâmetros do dispositivo selecionado na área de rede BACnet.

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet3.gif" /></center>

## Ler dados de um objeto específico de um único dispositivo

1. **Preparar nós:**
   - Você vai precisar de quatro nós: Inject, dois nós Function, Read-Single-Device e Debug.

2. **Adicionar nós à área de trabalho:**
   - Arraste e solte os nós Inject, dois nós Function, Read-Single-Device e Debug na sua área de trabalho.

3. **Conectar nós:**
   - Conecte os nós na seguinte ordem:

     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object.PNG" /></center>

4. **Configurar o nó Function:**
   - Clique duas vezes no nó Function próximo ao nó Inject para abrir sua janela de configuração.
   - Insira o seguinte código no bloco de função:
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

   - Clique duas vezes no nó Function próximo ao nó Debug para abrir sua janela de configuração.
   - Insira o seguinte código no bloco de função:
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

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object-func.PNG" /></center>

5. **Fazer deploy do fluxo:**
   - Clique no botão "Deploy" no canto superior direito da interface do Node-RED para fazer o deploy do fluxo.

6. **Iniciar leitura de parâmetros do dispositivo:**
   - Clique no botão de timestamp no nó Inject para iniciar o processo.

7. **Verificar a saída:**
   - Aguarde a saída aparecer na janela Debug. Você verá os parâmetros apenas do objeto específico no dispositivo selecionado na área da rede BACnet.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet4.gif" /></center>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
