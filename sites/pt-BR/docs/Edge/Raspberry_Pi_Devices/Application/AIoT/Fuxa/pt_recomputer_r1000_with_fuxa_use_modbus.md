---
description: Este artigo apresenta principalmente como usar o fuxa para comunicação ModbusRTU/TCP.
title: reComputer R1000 com fuxa para usar Modbus RTU/TCP
keywords:
  - Controlador de Borda
  - reComputer R1000
  - fuxa
  - ModbusRTU/TCP
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_modbus_rtu_and_tcp
sku: 113991274,E24010521
last_update:
  date: 10/8/2024
  author: ShuishengPeng
createdAt: '2024-06-26'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_modbus_rtu_and_tcp/
---

## Introdução

FUXA é um software web de Visualização de Processos (SCADA/HMI/Dashboard). Com o FUXA, você pode criar visualizações de processos modernas, com designs individuais para suas máquinas e exibição de dados em tempo real. Ele suporta Modbus RTU/TCP, protocolo Siemens S7, OPC-UA, BACnet IP, MQTT e outros protocolos.

Este artigo apresenta principalmente como usar o fuxa para comunicação ModbusRTU/TCP.

## Primeiros Passos

Antes de começar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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

- Python 3.11 pode ser incompatível com o fuxa. Se a sua versão do Python for 3.11, considere mudar para uma versão diferente do Python.

- Usar [modbusmechanic](https://modbusmechanic.scifidryer.com/) em um PC com W10. Você também pode usar outras ferramentas de teste de Modbus
- Usar [fuxa](https://github.com/frangoteam/FUXA) no reComputer R1000. Você pode consultar as etapas a seguir para instalar o fuxa no reComputer R1000

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

- Sobre como usar a função Modbus do reComputer R1000, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_rs485_modbus_rtu/).

### Configuração de Hardware

Para ModbustRTU, usamos um módulo RS485 para USB para conectar o reComputer R1000 ao PC com W10.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para ModbusTCP, usamos cabos Ethernet para conectar o PC com W10 e o reComputer R1000 a um switch, para garantir que eles estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Etapas de comunicação ModbusRTU

**Etapa 1**: Abra o ModbusMechanic em um PC com Win10, selecione a porta serial e a taxa de transmissão correspondentes, depois clique em `Tools` no canto superior direito, selecione `Start Slave Simulator`, depois selecione `RTU`, insira o `slave ID` e então você poderá configurar o escravo no campo de dados do dispositivo. Nós adicionamos três coils e um `Holding Register` para leitura posterior a partir do host Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif" /></center>

**Etapa 2**: Em `fuxa`, clique no botão `+` no canto inferior direito, insira o nome do módulo, selecione `modbusRTU` para `Type`, selecione `SeriaPort` para `Connection options`, em seguida selecione o número da porta serial que você precisa usar e configure a taxa de transmissão e outros parâmetros correspondentes e, por fim, clique em `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png" /></center>

**Etapa 3**: Depois disso, entramos na página `Devices settings` e clicamos no botão `+` no canto superior esquerdo para definir os campos de dados que precisamos ler. Definimos os parâmetros correspondentes e clicamos em `OK` para ver que o `fuxa` obteve com sucesso os dados do escravo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif" /></center>

## Etapas de comunicação ModbusTCP

**Etapa 1**: Abra o ModbusMechanic em um PC com Win10, depois clique em `Tools` no canto superior direito, selecione `Start Slave Simulator`, depois selecione `TCP`, insira o `slave ID` e você poderá configurar o campo de dados do escravo. Nós adicionamos duas coils e um `holding register` para leitura posterior a partir do host Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif" /></center>

**Etapa 2**: Clique no botão `+` no canto inferior direito do `fuxa`, insira o nome do módulo, selecione `modbusTCP` para `Type`, selecione `TcpPort` para `Connection options`, selecione o endereço IP do dispositivo escravo para `Slave IP and port`, o número de porta padrão é 502, depois insira o `Slave ID` e, por fim, clique em `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png" /></center>

**Etapa 3**: Depois disso, entramos na página `Devices settings` e clicamos no botão `+` no canto superior esquerdo para definir os campos de dados que precisamos ler. Definimos os parâmetros correspondentes e clicamos em `OK` para ver que o `fuxa` obteve com sucesso os dados do escravo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" /></center>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
