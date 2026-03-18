---
description: Aprenda a integrar Modbus TCP com Node-RED no reTerminal DM. Este guia aborda a configuração do hardware, a configuração de dispositivos Modbus e a criação de fluxos Node-RED para automação e monitoramento industrial eficientes.
title: reTerminal DM com Node Red e Modbus TCP
keywords:
  - HMI
  - reTerminal DM
  - Node-Red
  - Modbus
  - Raspberry
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png
slug: /reterminal_dm_node_red_modbus_tcp
last_update:
  date: 05/27/2024
  author: Kasun Thushara
createdAt: '2024-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reterminal_dm_node_red_modbus_tcp/
---
## Introdução

**Modbus** é um protocolo de comunicação amplamente utilizado em ambientes industriais, conhecido por sua simplicidade e robustez. **Modbus RTU (Remote Terminal Unit)** é um protocolo de comunicação serial que opera sobre as camadas físicas RS-232 ou RS-485. Ele utiliza uma representação compacta e binária dos dados, tornando-o eficiente para transmissão a longas distâncias e em ambientes ruidosos. **Modbus TCP**, por outro lado, estende o protocolo para redes Ethernet, encapsulando quadros Modbus dentro de pacotes TCP/IP. Isso permite velocidades de comunicação mais rápidas e a integração do Modbus com a infraestrutura moderna de TI. Ambas as versões são preferidas em ambientes industriais devido à sua confiabilidade, facilidade de implementação e capacidade de facilitar a comunicação entre uma grande variedade de dispositivos e sistemas, como CLPs, sensores e sistemas SCADA.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

#### Dispositivos com Suporte a Modbus

O reTerminal DM suporta comunicação Modbus com vários dispositivos, incluindo **CLPs, VFDs, HMIs, medidores de energia e sistemas BMS**. Para este caso, será utilizado o CLP Siemens LOGO, que suporta **protocolos Modbus TCP/IP**. Conecte o reTerminal DM a uma porta Ethernet e a um dispositivo habilitado para Modbus TCP.

### Preparação de Software

Nós preparamos um [Guia de primeiros passos no Node-RED](https://wiki.seeedstudio.com/pt-br/reTerminal-DM-Getting-Started-with-Node-Red/). É recomendável que você revise este guia antes de prosseguir para o wiki.

### Configurar definições de Ethernet para Modbus TCP/IP

Como o domínio de IP do seu CLP/Dispositivo é diferente das suas configurações sem fio, talvez seja necessário alterar manualmente a configuração de IP. Para isso,

- **Etapa 01**: Execute o seguinte comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Etapa 02**: Em seguida, configure as definições da porta Ethernet de acordo com o domínio de rede do seu CLP/Dispositivo e defina prioridades usando o comando **metric**. O menor metric tem a maior prioridade.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG" /></center>

## Instalar o nó Modbus

Para instalar o nó Modbus, siga estas etapas:

**Etapa 1.** Clique no botão Settings, indicado por um ícone de **três traços**, localizado no canto superior direito, e selecione **Manage palette.**

**Etapa 2.** Na aba da paleta, navegue até a **aba Install**.

**Etapa 3.** Use a barra de pesquisa de nós para encontrar o [nó Modbus](https://flows.nodered.org/node/node-red-contrib-modbus) desejado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/pallet.PNG" /></center>

**Etapa 4.** Clique no botão **Install** ao lado do nó.

**Etapa 5.** Se solicitado, clique no botão **Install** na janela de aviso suspensa para confirmar a instalação.

**Etapa 6.** Aguarde a conclusão do processo de instalação. Quando terminar, o botão **Install** deve mudar para **Installed.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificando Endereços Modbus

Identificar os endereços Modbus corretos é uma etapa crucial. Recomenda-se **consultar o datasheet do fabricante do CLP ou dispositivo para obter informações detalhadas sobre endereços Modbus, incluindo registradores de entrada, saída e de retenção**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

Com base nessas informações, você pode ajustar o endereço Modbus na configuração das tags. Por exemplo, se o datasheet listar a bobina de saída Q1 como 8193, você deve configurar o endereço como 8192 no Node-RED (**decrementando em um a partir do endereço original**). Da mesma forma, se uma entrada de rede estiver listada como 1 e for do tipo bobina, o endereço deve ser definido como 0 no Node-RED.

## Configurando o Nó Modbus-Write

**Etapa 1**. **Arraste e solte** o nó Modbus-Write no espaço de trabalho e, em seguida, **clique duas vezes** no nó para abrir suas configurações.

**Etapa 2**. Na aba **Server**, edite-a para adicionar seu dispositivo inserindo os seguintes detalhes:

- **Name**: Nome do Servidor
- **Type**: TCP
- **Host**: Endereço IP do servidor Modbus
- **Port**: Endereço da porta do servidor Modbus (normalmente 502)
- **Unit-Id**: 255 (Unit-ID é usado para identificar dispositivos individuais dentro de uma rede Modbus, especialmente quando vários dispositivos compartilham a mesma linha de comunicação)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**Etapa 3**. **Dê ao seu nó um nome apropriado**, por exemplo, "Network IP 1". Para esta demonstração, você está controlando uma entrada de rede no programa do CLP.

**Etapa 4**. Defina a opção **FC** para **FC 5: Force Single Coil**.

**Etapa 5**. Defina o **endereço como 0** (como estamos endereçando a entrada 0).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**Etapa 6**. Usando o nó inject, podemos injetar valores booleanos. Aqui, utilizaremos alguns nós inject para esse fim.

As etapas gerais podem ser demonstradas da seguinte forma

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Configurando o Nó Modbus-Read

**Etapa 1**. **Arraste e solte** o nó Modbus-Read no fluxo. Você pode encontrar este nó na aba Modbus da sua paleta.

**Etapa 2**. **Clique duas vezes** no nó Modbus-Read para abrir suas configurações.

**Etapa 3**. **Configure as seguintes definições:**

- **Name**: Dê um nome apropriado, como "ReadOutputs".
- **FC value**: Altere o valor de FC para FC 5: Read Coil Status.
- **Address**: Defina o endereço como 8192 (de acordo com o datasheet do fabricante).
- **Quantity**: Defina a quantidade como 4. Neste caso, há 4 saídas digitais.
- **Poll Rate**: Altere a taxa de sondagem para algo adequado às necessidades da sua aplicação.
- **Server**: Defina o servidor como "MyPLC" (configurado no exemplo anterior).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div>

## Configurando o Nó Modbus-Response

O **nó Modbus-Response** é usado para exibir a resposta de um nó Modbus Read/Write.

**Etapa 1**. **Arraste e solte** o nó Modbus-Response no fluxo.

**Etapa 2**. Conecte-o ao nó **Modbus Read**. A resposta exibirá um array de números sob o seu nó Modbus-Response. Esses números representam a contagem de cada saída digital.

**Etapa 3**. **Arraste e solte um nó Debug** para fins de inspeção. Em seguida, conecte-o ao **nó Modbus Read**.

Seguindo essas etapas, você pode ler e exibir os valores de registradores/bobinas do seu dispositivo Modbus TCP de forma eficaz

As etapas gerais podem ser demonstradas da seguinte forma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
