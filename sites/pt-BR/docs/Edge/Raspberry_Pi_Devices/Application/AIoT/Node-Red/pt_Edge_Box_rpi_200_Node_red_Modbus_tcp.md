---
description: Saiba como integrar Modbus TCP com Node-RED no EdgeBox RPi 200. Este guia abrange a configuração do hardware, a configuração de dispositivos Modbus e a criação de fluxos Node-RED para automação e monitoramento industrial eficientes.
title: Edge Box RPi 200 com Node Red e Modbus TCP
keywords:
  - Controlador de Borda
  - Edge-Box
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /edge_box_rpi_200_node_red_modbus_tcp
last_update:
  date: 05/27/2024
  author: Kasun Thushara
createdAt: '2024-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/edge_box_rpi_200_node_red_modbus_tcp/
---
## Introdução

**Modbus** é um protocolo de comunicação amplamente utilizado em ambientes industriais, conhecido por sua simplicidade e robustez. **Modbus RTU (Remote Terminal Unit)** é um protocolo de comunicação serial que opera sobre as camadas físicas RS-232 ou RS-485. Ele usa uma representação binária compacta dos dados, tornando-o eficiente para transmissão em longas distâncias e em ambientes ruidosos. **Modbus TCP**, por outro lado, estende o protocolo para redes Ethernet, encapsulando quadros Modbus em pacotes TCP/IP. Isso permite velocidades de comunicação mais rápidas e a integração do Modbus com a infraestrutura de TI moderna. Ambas as versões são preferidas em ambientes industriais devido à sua confiabilidade, facilidade de implementação e capacidade de facilitar a comunicação entre uma grande variedade de dispositivos e sistemas, como CLPs, sensores e sistemas SCADA.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

#### Dispositivos com Suporte a Modbus

O EdgeBox RPi 200 oferece suporte à comunicação Modbus com vários dispositivos, incluindo **CLPs, inversores de frequência, IHMs, medidores de energia e sistemas BMS**. Para este caso, será utilizado o CLP Siemens LOGO, que oferece suporte a **protocolos Modbus TCP/IP**.

### Preparação de Software

O Edge Box-200 chega até você com o Raspberry Pi OS pré-instalado. Se você estiver inicializando este dispositivo pela primeira vez, leia nosso Wiki [Getting Started](https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/).
Nós preparamos um [Guia de Introdução ao Node-RED](https://wiki.seeedstudio.com/pt-br/Edge-Box-Getting-Started-with-Node-Red/). É recomendável que você revise este guia antes de prosseguir para este wiki.

### Configurar as definições de Ethernet para Modbus TCP/IP

Como o domínio de IP do seu CLP/Dispositivo é diferente de suas configurações sem fio, talvez você precise alterar a configuração de IP manualmente. Para isso,

- **Etapa 01**: Execute o seguinte comando:

```sh
sudo nano /etc/dhcpcd.conf
```

- **Etapa 02**: Em seguida, configure as definições da porta Ethernet de acordo com o domínio de rede do seu CLP/Dispositivo e defina as prioridades usando o comando **metric**. O menor métrica tem a maior prioridade.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## Instalar o nó Modbus

Para instalar o nó Modbus, siga estas etapas:

**Etapa 1.** Clique no botão Settings, indicado por um ícone de **três traços**, localizado no canto superior direito, e selecione **Manage palette.**

**Etapa 2.** Na aba da paleta, navegue até a **aba Install**.

**Etapa 3.** Use a barra de busca de nós para encontrar o [nó Modbus](https://flows.nodered.org/node/node-red-contrib-modbus) desejado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**Etapa 4.** Clique no botão **Install** ao lado do nó.

**Etapa 5.** Se solicitado, clique no botão **Install** na janela de aviso suspensa para confirmar a instalação.

**Etapa 6.** Aguarde a conclusão do processo de instalação. Quando terminar, o botão **Install** deve mudar para **Installed.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificando Endereços Modbus

Identificar os endereços Modbus corretos é uma etapa crucial. Recomenda-se **consultar o datasheet do fabricante do CLP ou dispositivo para obter informações detalhadas sobre os endereços Modbus, incluindo registradores de entrada, saída e holding**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

Com base nessas informações, você pode ajustar o endereço Modbus na configuração da tag. Por exemplo, se o datasheet listar a bobina de saída Q1 como 8193, você deve configurar o endereço como 8192 no Node-RED (**decrementando em um em relação ao endereço original**). Da mesma forma, se uma entrada de rede estiver listada como 1 e for do tipo bobina, o endereço deve ser definido como 0 no Node-RED.

## Configurando o Nó Modbus-Write

**Etapa 1**. **Arraste e solte** o nó Modbus-Write na área de trabalho e, em seguida, **clique duas vezes** no nó para abrir suas configurações.

**Etapa 2**. Na aba **Server**, edite para adicionar seu dispositivo inserindo os seguintes detalhes:

- **Name**: Nome do servidor
- **Type**: TCP
- **Host**: Endereço IP do servidor Modbus
- **Port**: Endereço de porta do servidor Modbus (normalmente 502)
- **Unit-Id**: 255 (Unit-ID é usado para identificar dispositivos individuais dentro de uma rede Modbus, especialmente quando vários dispositivos compartilham a mesma linha de comunicação)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**Etapa 3**. **Dê ao seu nó um nome apropriado**, por exemplo, "Network IP 1". Para esta demonstração, você está controlando uma entrada de rede no programa do CLP.

**Etapa 4**. Defina a opção **FC** como **FC 5: Force Single Coil**.

**Etapa 5**. Defina o **endereço como 0** (já que estamos endereçando a entrada 0).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**Etapa 6**. Usando o nó inject, podemos injetar valores booleanos. Aqui, usaremos alguns nós inject para esse propósito.

As etapas gerais podem ser demonstradas da seguinte forma

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## Configurando o Nó Modbus-Read

**Etapa 1**. **Arraste e solte** o nó Modbus-Read no fluxo. Você pode encontrar este nó na aba Modbus da sua paleta.

**Etapa 2**. **Clique duas vezes** no nó Modbus-Read para abrir suas configurações.

**Etapa 3**. **Configure as seguintes definições:**

- **Name**: Dê um nome apropriado, como "ReadOutputs".
- **FC value**: Altere o valor FC para FC 5: Read Coil Status.
- **Address**: Defina o endereço como 8192 (de acordo com o datasheet do fabricante).
- **Quantity**: Defina a quantidade como 4. Neste caso, há 4 saídas digitais.
- **Poll Rate**: Altere a taxa de varredura para algo adequado às necessidades da sua aplicação.
- **Server**: Defina o servidor como "MyPLC" (configurado no exemplo anterior).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div>

## Configurando o Nó Modbus-Response

O **nó Modbus-Response** é usado para exibir a resposta de um nó Modbus Read/Write.

**Etapa 1**. **Arraste e solte** o nó Modbus-Response no fluxo.

**Etapa 2**. Conecte-o ao nó **Modbus Read**. A resposta exibirá um array de números sob o seu nó Modbus-Response. Esses números representam a contagem de cada saída digital.

**Etapa 3**. **Arraste e solte o nó Debug** para fins de inspeção. Em seguida, conecte-o ao **nó Modbus Read**.

Seguindo estas etapas, você pode ler e exibir de forma eficaz os valores dos registradores/bobinas do seu dispositivo Modbus TCP

As etapas gerais podem ser demonstradas da seguinte forma.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico e Discussão do Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
