---
description: Aprenda a configurar e ajustar a comunicação Modbus RTU usando o Edge Box RPi 200 e o Node-RED. Este guia aborda a instalação do nó Modbus, a configuração do getter e do servidor Modbus e o uso de blocos de função para extrair dados de temperatura e umidade. Siga instruções passo a passo para integrar perfeitamente dispositivos Modbus RTU à sua configuração de IoT industrial. Obtenha monitoramento e controle eficientes de seus processos com facilidade.
title: Edge Box RPi 200 com Node-RED e Modbus RS485
keywords:
  - Controlador de Borda
  - Edge-Box
  - Node-Red
  - Modbus RTU
  - RS 485
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /edge_box_rpi_200_node_red_modbus_rs485
last_update:
  date: 06/07/2024
  author: Kasun Thushara
createdAt: '2024-06-07'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/edge_box_rpi_200_node_red_modbus_rs485/
---

## Introdução

Modbus RTU (Remote Terminal Unit) é um protocolo popular em automação industrial para conectar dispositivos como sensores e controladores por meio de linhas de comunicação serial. Conhecido por sua simplicidade e confiabilidade, é amplamente utilizado no monitoramento e controle de processos industriais. O Edge Box RPi 200, um gateway de IoT industrial baseado em Raspberry Pi, permite a integração de dispositivos Modbus RTU com redes modernas. Usando Node-RED, uma ferramenta de desenvolvimento baseada em fluxos, este wiki orienta os usuários na configuração da comunicação Modbus RTU com o Edge Box RPi 200. Ele destaca aplicações como gerenciamento de energia, monitoramento ambiental e controle de processos. Este recurso oferece uma abordagem rápida e prática para aproveitar o Modbus RTU em diversos cenários industriais.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

O Edge Box chega até você com o Raspberry Pi OS pré-instalado. Se você estiver inicializando este dispositivo pela primeira vez, leia nosso [Wiki de Primeiros Passos](https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/). Preparamos um [Guia de Primeiros Passos com Node-RED](https://wiki.seeedstudio.com/pt-br/Edge-Box-Getting-Started-with-Node-Red/). É recomendado revisar este guia antes de prosseguir para este wiki. Neste tutorial, vamos conectar o PC host executando o simulador de temperatura ambiente YABE ao Node-RED em execução no Edge Box.

### RS485

No Edge Box RPi 200, há uma porta RS-485. Você pode encontrar mais detalhes [aqui](https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/#serial-ports--rs232-and-rs485). Antes de trabalhar no Node-RED, você deve fazer a fiação do dispositivo corretamente.

## Instalar Nó Modbus

Para instalar o nó Modbus, inicie o Node-RED no seu Edge Box. Normalmente você pode acessá-lo abrindo um navegador e indo para `http://<your-edgebox-ip>:1880`. E siga estes passos:

**Passo 1.** Clique no botão Settings, indicado por um ícone de **três traços**, localizado no canto superior direito, e selecione **Manage palette.**

**Passo 2.** Na aba da paleta, navegue até a aba **Install**.

**Passo 3.** Use a barra de busca de nós para encontrar o [nó Modbus](https://flows.nodered.org/node/node-red-contrib-modbus) desejado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**Passo 4.** Clique no botão **Install** ao lado do nó.

**Passo 5.** Se solicitado, clique no botão **Install** na janela de aviso em lista suspensa para confirmar a instalação.

**Passo 6.** Aguarde até que o processo de instalação seja concluído. Quando terminar, o botão **Install** deve mudar para **Installed.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## Identificação de Endereços Modbus

Identificar os endereços Modbus corretos é uma etapa crucial. Recomenda-se consultar o datasheet do PLC, dispositivo ou sensor do fabricante para obter informações detalhadas sobre os endereços Modbus, incluindo registradores de entrada, saída e holding.

Aqui vamos usar o sensor de temperatura SHT20 RS485. Usando uma interface de hardware RS485 (com design de proteção contra raios), a camada de protocolo é compatível com o protocolo industrial padrão Modbus-RTU. Quando analisamos o datasheet, podemos encontrar o registrador de entrada que fornece os dados de temperatura e umidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/datasheet.PNG" style={{width:600,
height:'auto'}}/></div>

## Obter Dados do Dispositivo

Nós necessários: `Modbus Getter`, 2 nós `Function`, 2 nós `Debug`, `Modbus Response`.

Arraste e solte esses nós e conecte-os de acordo com a seguinte forma/ordem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/flow-rtu.PNG" style={{width:600,
height:'auto'}}/></div>

### Configurar Nó Modbus Getter

1. Dê um clique duplo no nó **Modbus Getter**.
2. Defina **Unit ID** como `1`.
3. Defina **FC** como `FC4: Read Input Registers`.
4. Defina **Address** como `1` (conforme fornecido pelo datasheet do dispositivo de simulação).
5. Defina **Quantity** como `2` (para ler dois blocos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_getter.PNG" style={{width:600,
height:'auto'}}/></div>

### Configurar Servidor Modbus

1. Na seção **Server**, clique no botão de lápis para criar uma nova configuração de servidor.
2. Dê um nome ao servidor.
3. Defina **Type** como `Serial Expert`.
4. Defina **Serial Port** como `/dev/ttyACM0`.
5. Defina **Serial Type** como `RTU`.
6. Mantenha as demais configurações como estão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_server_rtu.PNG" style={{width:600,
height:'auto'}}/></div>

### Configuração dos Blocos de Função

Usamos o bloco de função para extrair os valores relevantes de temperatura e umidade. A saída do nó getter é um número decimal que contém partes inteira e fracionária, então precisamos ajustá-la usando matemática básica.

#### Para Temperatura

```javascript
var tempMsg = { payload: msg.payload[0] / 100.0 };
return tempMsg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/temp_javascript.PNG" style={{width:600,
height:'auto'}}/></div>

#### Para Umidade

```javascript
var humidMsg = { payload: msg.payload[1] / 100.0 };
return humidMsg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/hum_javascript.PNG" style={{width:600,
height:'auto'}}/></div>

### Deploy

Pressione o botão **Deploy**. Você verá os valores de umidade e temperatura na janela de depuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/rtu2.gif" style={{width:800,
height:'auto'}}/></div>

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
