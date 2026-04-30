---
description: Este artigo apresenta principalmente como usar a função de comunicação 485 do reComputer R1225 e testa as funções de comunicação RS485 e Modbus.
title: Como usar rs485 e modbus com o R1225
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borda
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_modbus_rs485_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/14/2026
  author: Kian
---

## Introdução

Este artigo apresenta principalmente como usar a função de comunicação 485 do reComputer R1225 e testa as funções de comunicação RS485 e Modbus.

## Introdução

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

* Usando [modbus poll](https://www.modbustools.com/modbus_poll.html) no seu PC com W10. Você também pode usar outras ferramentas de teste Modbus
* Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) no reComputer R1225 e no PC com W10. Você também pode usar outras ferramentas de teste Modbus
* Usando [mobaxterm](https://mobaxterm.mobatek.net/) no seu PC com W10. Você também pode usar outras ferramentas de teste de porta serial
* Você precisa baixar a ferramenta **minicom** usando o seguinte comando no reComputer R1225:

```sh
sudo apt-get install minicom
```

### Configuração de Hardware

Para Modbus RTU, usamos um conversor RS485-para-USB para conectar o R1225 a um PC com Windows 10 para testes.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para Modbus TCP, usamos cabos Ethernet para conectar o PC com W10 e o reComputer R1225 a um switch para garantir que estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

### Método 1: Usando a Interface de Linha de Comando (CLI)

#### Etapas para usar o teste Modbus RTU

##### Instalando e configurando o minicom

Instale o minicom tanto no seu computador host quanto no reComputer R1225 com o comando abaixo:

```
sudo apt install minicom
```

Abra um terminal e insira um comando como abaixo:

```
sudo minicom -D /dev/ttyAMA*
```

O `ttyAMA*` deve ser `ttyAMA2, ttyAMA3 ou ttyAMA4` dependendo de qual RS485 você usa.

Em seguida, digite `Ctal+A` e depois digite `Z`, você verá o minicom como abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

Digite `o` para configurar o minicom e selecione `Serial port setup`; você verá algo como abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

E então digite `F` e `H` para colocar o minicom no modo RS485; o resultado será exibido como abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

Por fim, selecione `Exit` e pressione `Enter` para sair da configuração, como abaixo: 

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

**Passo 1**: Testando a funcionalidade RS485

Insira o seguinte script no reComputer R1225 para abrir o software minicom

```shell
minicom -D /dev/ttyAMAx -b 9600
```

Descrição dos parâmetros:

-D: Insira o número do dispositivo que você deseja abrir no campo abaixo. O número do dispositivo precisa ser o número de dispositivo recém-criado.

-b: Insira abaixo a taxa de transmissão (baud rate)

Em seguida, abra o MobaXterm no PC com W10, crie um novo terminal de porta serial, selecione o número da porta serial e defina a taxa de transmissão para 9600; por fim, você pode realizar comunicação bidirecional com RS485. Como mostrado na figura, o conteúdo inserido no reComputer R1000 pode ser enviado via RS485. No PC com W10, o conteúdo inserido no PC com W10 também pode ser enviado para o reComputer R1225, e a comunicação bidirecional é normal

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**Passo 2**: Testar o R1225 como escravo Modbus

Abra o software ModbusMechanic no reComputer R1225, selecione o número do dispositivo e a taxa de transmissão, depois clique na função de escravo simulado no canto superior esquerdo para adicionar duas bobinas; em seguida, abra o Modbus poll no W10 como estação mestre para ler as bobinas da estação escrava. Depois abra a janela de exibição do Modbus poll, e você poderá ver que as mensagens de envio e recebimento do Modbus RTU estão normais.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**Passo 3**: Testar o R1225 como mestre Modbus

Abra o software ModbusMechanic tanto no reComputer R1225 quanto no PC com W10 e selecione o número do dispositivo e a taxa de transmissão. O PC com W10 refere-se à configuração do terceiro passo. Selecione `Read Coils(0x01)` no reComputer R1000 para ler a bobina do escravo, defina `Slave Node` como 1, em `Register` selecione o endereço que você deseja ler e, por fim, clique em `Transmit packet`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

#### Etapas para usar o teste Modbus TCP

**Passo 1**: Abra o modbusmechanic no PC com Win10 e no R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**Passo 2**: Testar o R1225 como host Modbus TCP

Clique em `Tool => Start Slave Simulator` no PC com W10, selecione `TCP` para TYPE, selecione `1` para Slave ID e depois adicione `Coils`; em seguida, insira o `IP` no R1225 e selecione `Read Coil` para Scan group. Insira `Slave Node` e `Register` e, por fim, clique em `Transmit packet`. Você poderá ver que os dados do escravo foram lidos com sucesso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**Passo 3**: Testar o R1225 como escravo Modbus TCP

Consulte o segundo passo para a configuração. Você poderá ver que o R1225 consegue ler dados normalmente como escravo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

:::note
Executar o programa de escravo Modbus TCP no R1000 precisa escutar a porta 502, o que pode exigir permissões de sudo. Se o seu aplicativo não conseguir escutar a porta 502, tente adicionar permissões a ele.
:::

### Método 2: Usando a Interface Gráfica do Usuário (GUI)

#### Configuração de Parâmetros RS485

Siga o guia [Quick Start](https://wiki.seeedstudio.com/pt-br/r1225_quick_start/) para acessar a interface web do SenseCAP Gateway OS.

**Passo 1**: Fazer login no Luci

Insira o endereço IP do seu dispositivo em um navegador para entrar na página do Luci.
Em seguida, insira o nome de usuário e a senha do seu dispositivo para fazer login e clique no botão Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**Passo 2** Clique em `RS485` - `Serial Settings`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

As configurações de parâmetros para todos os três canais 485 do R1225 estão integradas aqui.

Primeiro, selecione o canal que você deseja usar (CH1, CH2, CH3);

Em seguida, configure os parâmetros: taxa de transmissão, bits de dados, bits de parada, paridade, controle de fluxo e tempo limite de leitura.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

**Passo 3**: Clique em `Save & Apply` para aplicar suas configurações

#### Configuração de Parâmetros Modbus RTU

Após configurar os parâmetros para as três portas RS-485 (as configurações padrão são ‘9600, 8, 1, N’), você pode prosseguir com a configuração do Modbus RTU.

**Passo 4**: Clique em `RS485` - `Protocol Configuration`

Selecione o canal que você deseja depurar (CH1, CH2, CH3).

Selecione “Enable” para o status do protocolo e “Modbus RTU” para o tipo de protocolo.

Uma vez habilitado, você verá a tela de configurações do Modbus RTU; basta configurá-la de acordo com o datasheet do sensor conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_3.png" alt="pir" width={800} height="auto" /></p>

**Passo 5**: Configurações de Parâmetros Modbus RTU

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_4.png" alt="pir" width={800} height="auto" /></p>

**Passo 6**: Clique em `Save & Apply`

Depois que as configurações tiverem entrado em vigor, clique em `Read Data`; você poderá ver os dados recuperados em `Frame Data`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_5.png" alt="pir" width={800} height="auto" /></p>

#### Configuração de Parâmetros Modbus TCP

**Passo 7**: Clique em `RS485` - `MQTT Setttings`

Selecione o canal que você deseja usar (CH1, CH2, CH3).

Selecione TCP como o protocolo de transporte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp1.png" alt="pir" width={800} height="auto" /></p>

**Passo 8**: Configurações de MQTT

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp2.png" alt="pir" width={800} height="auto" /></p>

**Passo 9**: Clique em `Save & Apply`

Agora sua configuração está ativa.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
