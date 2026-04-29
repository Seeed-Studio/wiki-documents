---
description: Este artigo apresenta principalmente como realizar testes funcionais do protocolo bacnet MS/TP no reComputer R1225.
title: Como usar bacnet MS/TP com o R1225
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borda
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_bacnet_ms_tp_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/017/2026
  author: Kian
---

## Introdução

BACnet MS/TP (Master-Slave/Token Passing) é um protocolo de comunicação para redes de automação e controle predial. Ele faz parte do conjunto de protocolos BACnet (Building Automation and Control Networks). O MS/TP geralmente usa a camada física RS-485 e topologia em barramento. Todos os dispositivos são conectados ao mesmo cabo de par trançado. Existem estações mestre e escrava na rede MS/TP. O mestre é responsável por gerar e entregar o token, enquanto o escravo apenas responde quando uma solicitação é recebida. O dispositivo mestre determina qual dispositivo pode enviar dados passando o token. O mecanismo de passagem de token garante que a comunicação no barramento seja ordenada e livre de conflitos

Este artigo apresenta principalmente como realizar testes funcionais do protocolo bacnet MS/TP no reComputer R1225. Simulamos um servidor bacnet MS/TP no reComputer R1225 e, em seguida, usamos o YABE em um PC com W10 para verificar se o dispositivo está presente. Se o dispositivo que simulamos puder ser encontrado normalmente, isso significa que a comunicação bacnet MS/TP está normal.

## Começando

Antes de iniciar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1225</th>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/reComputer-R1225.jpg" style={{width:300, height:'auto'}}/></div></td>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
  </table>
</div>

### Software

* Como o bacnet MS/TP usa a camada física RS485, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/how_to_use_modbus_rs485_with_r1225/) sobre como usar a função RS485 no reComputer R1225.
* Nós simulamos um servidor com a ajuda do aplicativo da biblioteca `bacnet-stack`, portanto você precisa inserir o seguinte comando para baixá-lo:

  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* Acesse este [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) e baixe o YABE (Yet Another BACnet Explorer).
* Acesse este [link](https://www.wireshark.org/) e baixe o wireshark.

### Configuração de Hardware

Usamos um conversor RS485-para-USB para conectar o R1225 a um PC com Windows 10 para teste.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## Etapas para testar a função de comunicação bacnet mstp

### Método 1: Usando a Interface de Linha de Comando (CLI)

**Passo 1**: Baixar `bacnet-stack`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**Passo 2**: Alterar o número da porta

O número de porta serial padrão do `bacnet-stack` é `/dev/ttyUSB0`. Se o número da porta que você realmente usa não for esse, a comunicação não será possível, portanto você precisa modificar o número da porta. O nome do arquivo que precisa ser modificado é `ports/ linux/rs485.c`. Altere-o para o número da porta que você precisa usar. Eu alterei para `/dev/ttyAMA30`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**Passo 3**: Insira as seguintes instruções para compilar. Os resultados da compilação podem ser vistos no diretório bin.
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**Passo 4**: Execute `bacserv` e use `YABE` para procurar dispositivos simulados. Você pode ver que o dispositivo que simulamos foi encontrado com sucesso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**Passo 5**: Use o wireshark para visualizar as mensagens bacnet MS/TP. Você pode ver que o dispositivo que simulamos passa o token. Como não há outros dispositivos no meu barramento, ele continua passando o token.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

### Método 2: Usando a Interface Gráfica do Usuário (GUI)

#### Configuração de Parâmetros RS485

Siga o guia [Quick Start](https://wiki.seeedstudio.com/pt-br/r1225_quick_start/) para acessar a interface web do SenseCAP Gateway OS.

**Passo 1**: Fazer login no Luci

Digite o endereço IP do seu dispositivo em um navegador para entrar na página do Luci.
Em seguida, insira o nome de usuário e a senha do seu dispositivo para fazer login e clique no botão Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**Passo 2**: Clique em `RS485` - `Serial Settings`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

As configurações de parâmetros para todos os três canais 485 do R1225 estão integradas aqui.

Primeiro, selecione o canal que você deseja usar (CH1, CH2, CH3);

Em seguida, configure os parâmetros: taxa de baud, bits de dados, bits de parada, paridade, controle de fluxo e tempo limite de leitura.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

#### Configuração de Parâmetros BACnet MS/TP

Após configurar os parâmetros para as três portas RS-485 (as configurações padrão são “9600, 8, 1, N”), você pode prosseguir com a configuração do BACnet MS/TP.

**Passo 3**: Clique em `RS485` - `Protocol Configuration`

Selecione o canal que você deseja depurar (CH1, CH2, CH3).

Selecione "Enable" para o status do protocolo e "BACnet MS/TP" para o tipo de protocolo.

Depois de habilitado, você verá a tela de configurações do BACnet MS/TP; basta configurá-la de acordo com o datasheet do sensor conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet1.png" alt="pir" width={800} height="auto" /></p>

**Passo 4**: Configurações de Parâmetros BACnet MS/TP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet2.png" alt="pir" width={800} height="auto" /></p>

**Passo 5**: Clique em `Save & Apply`

Depois que as configurações tiverem efeito, clique em `Read Data`, você poderá ver os dados obtidos em `Frame Sata`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet3.png" alt="pir" width={800} height="auto" /></p>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
