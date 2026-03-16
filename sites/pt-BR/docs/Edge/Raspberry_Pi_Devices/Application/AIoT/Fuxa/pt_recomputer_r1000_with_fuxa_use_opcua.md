---
description: Este artigo apresenta principalmente como usar o fuxa para comunicação OPC-UA.
title: reComputer R1000 com fuxa para usar OPC-UA
keywords:
  - Controlador de Borda
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_opc_ua
last_update:
  date: 10/8/2024
  author: ShuishengPeng
createdAt: '2024-07-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_opc_ua/
---

## Introdução 
FUXA é um software de Visualização de Processos baseado na Web (SCADA/HMI/Dashboard). Com o FUXA você pode criar visualizações de processos modernas com designs individuais para suas máquinas e exibição de dados em tempo real. Ele oferece suporte a Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT e outros protocolos. 

Este artigo apresenta principalmente como usar o fuxa para comunicação OPC-UA. Executamos o `Prosys OPC UA Simulation Server` em um PC com W10 e depois lemos os dados do simulador no reComputer R1000.


## Iniciando

Antes de iniciar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparação de Software
* O Python 3.11 pode ser incompatível com o fuxa. Se a sua versão do Python for 3.11, considere mudar para uma versão diferente do Python.
* Usar o [Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php) em um PC com W10. Você também pode usar outras ferramentas de teste de modbus.
* Usar o [fuxa](https://github.com/frangoteam/FUXA) no reComputer R1000. Você pode consultar as etapas a seguir para instalar o fuxa no reComputer R1000
  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

### Configuração de Hardware

Usamos cabos Ethernet para conectar o PC com W10 e o reComputer R1000 a um switch para garantir que eles estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Etapas de comunicação OPC-UA
**Passo 1**: Abra o `Prosys OPC UA Simulation Server` e copie o `Connection Address(UA TCP)`.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**Passo 2**: Clique no botão `+` no canto inferior direito, insira o `Name`, selecione `OPCUA` para `Type` e cole o `Connection Address(UA TCP)` copiado no primeiro passo em `Address`. O `Security and encryption mode` é selecionado de acordo com os requisitos do seu próprio dispositivo. Aqui eu escolho `None-None`. Se o seu dispositivo exigir `Username` e `Password` ao estabelecer uma conexão, você poderá preenchê-los nos locais correspondentes. Por fim, clique em `OK`. Abra o `ConnectionLog` do `Prosys OPC UA Simulation Server`, e o log mostrado na figura aparecerá, indicando que a conexão foi estabelecida com sucesso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**Passo 3**: Crie tags para exibir dados. Entre na interface de configuração, clique no botão `+` no canto superior esquerdo ou no canto inferior direito, você poderá ver três tags `Objects`, `Type`, `Views`, clique em `Objects` e depois clique em `Simulation` para ver quais dados o simulador está simulando. Selecionamos todos os dados em `Simulation` e criamos tags. Por fim, clique em `OK`. Você pode ver que podemos tentar ler os dados do dispositivo OPCUA.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

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
