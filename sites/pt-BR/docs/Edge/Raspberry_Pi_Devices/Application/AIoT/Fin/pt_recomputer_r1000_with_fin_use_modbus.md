---
description: Este artigo apresenta como usar o `Modbus Connector` do `FIN Framwork`.
title: reComputer R1000 com FIN para usar modbus TCP/RTU
keywords:
  - Controlador de Borda
  - reComputer R1000
  - FIN
  - ModbusTCP/RTU
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_modbus_tcp_and_rtu
last_update:
  date: 07/15/2024
  author: ShuishengPeng
createdAt: '2024-07-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_modbus_tcp_and_rtu/
---

## Introdução

O FIN Framework (FIN) é um framework de software com suítes de aplicativos que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma variedade de produtos e serviços.

Este artigo apresenta como usar o `Modbus Connector` do `FIN Framwork`, o uso de Modbus TCP/RTU no FIN Framwork é explicado em detalhes, o que inclui principalmente três aspectos: criar um projeto `FIN Framwork`, configurar o `serial port number`, configurar o `Modbus Connector` e adicionar pontos de dados ao `Equip`.

## Primeiros Passos

Antes de iniciar este projeto, você precisará preparar seu hardware e software com antecedência, conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

* Sobre como instalar o FIN Framwork, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_fin/).
- Sobre como usar a função modbus do reComputer R1000, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_rs485_modbus_rtu/).
- Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) em um PC com W10. Você também pode usar outras ferramentas de teste modbus.

### Configuração de Hardware

Para ModbusTCP, usamos cabos Ethernet para conectar o PC com W10 e o reComputer R1000 a um switch para garantir que eles estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

Para ModbustRTU, usamos um módulo rs485 para USB para conectar o reComuputer R1000 ao PC com W10.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

### Criar Novo Projeto

**Passo 1**: Clique no botão `Create` no canto inferior esquerdo da página inicial, e uma nova janela pop‑up aparecerá. A janela pop‑up possui principalmente três atributos que precisam ser preenchidos:

- NAME: o nome do novo projeto
- DISPLAY NAME: nome do projeto exibido
- DESCRIPTION: descrição do projeto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_1.gif" /></center>

**Passo 2**: Abra o projeto, entre em `DB Builder`, clique em `Connectors`, você pode ver que não há opção `Modbus` neste momento, precisamos abrir o `Modbus Connector` do `FIN Framwork`, então a opção `Modbus` aparecerá aqui.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_2.gif" /></center>

### Configurar `Modbus Connector` para Modbus TCP

**Passo 1**: Abra o `Modbus Connector`. Clique em `Settrings => Ext` e encontre `Modbus`. Neste momento, `Modbus` está marcado em vermelho. Clique em `Enable` e você verá que a marca `Modbus` fica verde, indicando que o `Modbus Connector` foi aberto com sucesso. Entre em `DB Builder` novamente e você verá que já existe uma opção `Modbus`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**Passo 2**: Adicione uma nova conexão Modbus. Clique em `Modbus => Add`, a nova janela pop‑up possui principalmente os seguintes parâmetros a serem preenchidos:

- Dis: o nome do conector
- ModbusSlave: este será o slave do dispositivo modbus que está sendo conectado (o padrão é 1)
- Existing Register Map: se o usuário já configurou um conector Modbus, ele verá aqui os registradores disponíveis para escolher ou criar um novo com a próxima propriedade ModbusRegMapUri.
- ModbusRegMapUri: é aqui que o usuário especificará o nome do mapa de registradores a ser vinculado a este conector. Substitua "xxx" pelo nome do mapa de registradores.
- Uri: é aqui que o uri do conector modbus será especificado. O formato do URI é mostrado na tabela:

   <div class="table-center">

  | Protocolo                                              | Configuração de URI        | Exemplo    | Notas |
  | ------------------------------------------------------------ | ----------- | -------------- | --------- |
  | TCP/IP | `modbus-tcp://host:port/` | `modbus-tcp://10.0.0.17/` | Porta padrão é 502, pode ser omitida se for a padrão       |
  | RTU sobre TCP/IP  | `modbus-rtutcp://host:port/`  | `modbus-rtutcp://192.168.1.120:9001/`  | Porta padrão é 502, pode ser omitida se for a padrão      |
  | RTU sobre RS-485  | `modbus-rtu://<port>-<baud>-<dataBits>-<parity>`  | `modbus-rtu://serial0-9600-8n1-none`  |       |

  </div>

Em nosso exemplo, especificamos "r1000_demo" como nosso mapa de registradores. Em seguida, adicionamos nosso IP ao dispositivo no Uri.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_4.gif" /></center>

**Passo 3**: Adicione um novo `Register Maps`. Clique em `Register Maps => Add`, insira `Name`, que precisa ser consistente com o nome de `ModbusRegMapUri` no segundo passo, e por fim clique em `ADD`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_5.gif" /></center>

O sistema criará um novo arquivo `r1000_demo.csv` no diretório `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`. Este arquivo descreve as informações dos registradores Modbus que precisamos ler.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_register_map_addr.png" /></center>

**Passo 4**: Adicione as informações dos registradores a serem lidos. O `Modbus Connector` existe como um mestre Modbus. Ele lerá os registradores do slave. Precisamos configurar as informações dos registradores a serem lidos. Clique em `r1000_demo`, você pode ver que há uma descrição de `ping` por padrão, isso é obrigatório. Continuamos a adicionar novas informações de registradores e clicamos em `Register Maps => r1000_demo => Add`. A nova janela pop‑up possui principalmente os seguintes parâmetros a serem preenchidos:

- name(required): nome do registrador.

  - Deve ser exclusivo

  - Deve começar com uma letra minúscula de a-z
  - Somente a-z, A-Z, 0-9 e underlines são permitidos. Sem espaços ou outros caracteres especiais.

- addr(required): este será o endereço do registrador que segue a convenção modbus.

  - 0xxxx - Coil (00001-065536)
  - 1xxxx - Discrete Input (10001-165536)
  - 3xxxx - Input Register (30001-365536)
  - 4xxxx - Holding Register (40001-465536)

- data(required): isto define o tipo de dado do registrador.

  - Tipos:
    - bit - Bool
    - u1 - Unsigned 8-bit Int
    - u2 - Unsigned 16-bit Int
    - u4 - Unsigned 32-bit Int
    - s1 - Signed 8-bit Int
    - s2 - Signed 16-bit Int
    - s4 - Signed 32-bit Int
    - s8 - Signed 64-bit Int
    - f4 - 32-bit Float
    - f8 - 64-bit Float

- rw(required): isto determinará as permissões de leitura/gravação

  - rw - Registrador pode ser lido e escrito
  - r - Registrador é somente leitura
  - w - Registrador é somente gravação

- scale(optional): isto permite ao usuário aplicar um fator de escala aos registradores. O formato é [operator] [number], onde o fator é uma constante numérica.

  - Exemplos:
    - add: +1.5
    - minus: -0.25
    - mult: *10
    - div: /1000

- dis(optional): esta é uma tag opcional em que o usuário pode especificar um nome de exibição amigável para o registrador.

- unit(optional): isto definirá a unidade a ser usada para o registrador.

- tags(optional): estas serão as tags a serem aplicadas ao ponto quando carregado no banco de dados.

- folderPath(optional): se o usuário quiser organizar os pontos, ele pode fazê-lo aplicando um folderPath.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_6.gif" /></center>

**Passo 5**: Teste de comunicação. Após adicionar as informações de descrição do registrador, a comunicação pode ser realizada. Aqui usamos `ModbusMechanic` como o slave Modbus. Clique em `Modbus => Ping` e você pode ver que o `Status` muda para `OK`, indicando que a comunicação está normal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_7.gif" /></center>

### Configurar `Modbus Connector` para Modbus RTU

#### Configurar porta serial

O script que precisa ser executado é o seguinte:

```shell
## Turn off FIN service
sudo systemctl stop fin
## After downloading the config file, place it in /opt/finFramework_5.1.6.55/etc/finStackSerial/
sudo cp ~/config.props  /opt/finFramework_5.1.6.55/etc/finStackSerial/
## Modify the config.props file to: serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
sudo nano /opt/finFramework_5.1.6.55/etc/finStackSerial/config.props
## Restart the FIN service, wait for a while and then use a browser to open FIN
sudo systemctl restart fin

```

**Passo 1**: Desligue o serviço FIN, depois baixe o [arquivo de configuração](https://drive.google.com/file/d/1j1aGGSsGPjGCYfUGcXTqL2XGP2EuqFw2/view?usp=share_link) e salve‑o no diretório `/opt/finFramework_5.1.6 .55/etc/finStackSerial/`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_1.gif" /></center>

**Passo 2**: Modifique config.props para:

```shell
serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
```

Após a conclusão da modificação, reinicie o serviço FIN
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_2.gif" /></center>

**Passo 3**: Clique em `Folio => launch` e insira a seguinte consulta: `serialPorts()`. O resultado mostrará qual nome deve ser usado para a sua porta específica. A porta não é o nome da porta física, mas há uma correspondência entre as portas físicas do dispositivo e o nome da porta a ser usado, como `serial0`, `serial1` ...

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_3.gif" /></center>

#### Configurar Modbus RTU

**Passo 1**: Abra o `Modbus Connector`. Clique em `Settrings => Ext` e encontre `Modbus`. Neste momento, `Modbus` está marcado em vermelho. Clique em `Enable` e você poderá ver que a marca `Modbus` fica verde, indicando que o `Modbus Connector` foi aberto com sucesso. Entre novamente em `DB Builder` e você poderá ver que já existe uma opção `Modbus`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**Passo 2**: Adicione uma nova conexão Modbus. Clique em `Modbus => Add`. Em nosso exemplo, especificamos "r1000_demo_rtu" como nosso mapa de registradores. Em seguida, adicionamos nossa porta serial ao dispositivo no Uri.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_4.gif" /></center>

**Passo 3**: Adicione um novo `Register Maps`. Clique em `Register Maps => Add`, insira `Name`, que precisa ser consistente com o nome de `ModbusRegMapUri` no segundo passo, e por fim clique em `ADD`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_5.gif" /></center>

O sistema criará um novo arquivo `r1000_demo_rtu.csv` no diretório `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`. Este arquivo descreve as informações dos registradores Modbus que precisamos ler.

**Passo 4**: Adicione as informações de registrador a serem lidas. O `Modbus Connector` existe como um mestre Modbus. Ele lerá os registradores do escravo. Precisamos configurar as informações de registrador a serem lidas. Clique em `r1000_demo_rtu`, você pode ver que há uma descrição de `ping` por padrão, isto é obrigatório. Continuamos a adicionar novas informações de registrador e clicamos em `Register Maps => r1000_demo_rtu => Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_6.gif" /></center>

**Passo 5**: Teste de comunicação. Após adicionar as informações de descrição do registrador, a comunicação pode ser realizada. Aqui usamos `ModbusMechanic` como escravo Modbus. Clique em `Modbus => Ping` e você poderá ver que `Status` muda para `OK`, indicando que a comunicação está normal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_7.gif" /></center>

### Adicionar pontos de dados ao `Equip Tree`

**Passo 1**: adicione `Equip`. Clique em `Equip Tree => + => Add site`, insira `Name`; aqui insiro `Tower`, isso pode adicionar um `site` chamado `Tower`; então clique em `Equip Tree => Tower => + => Add Floor`, insira `Name`; aqui insiro `Floor1`, isso pode adicionar um `Floor` chamado `Floor1`; clique em `Equip Tree` novamente => `Tower => Floor1 => + => Add Equip`, insira `Name`; aqui insiro `ModbusEquip` para adicionar um novo `Equip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_8.gif" /></center>

**Passo 2**: Clique em `->` no lado direito de `ModbusEquip` para fazer com que o caminho do sistema fique em `Tower/Floor1/ModbusEquip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbustcp_modbusequip_path.png" /></center>

**Passo 3**: Adicione pontos de dados. Clique em `Modbus => Modbus Conn`, clique em `Discover Points` na nova janela, os pontos de informações de registrador que configuramos aparecerão, selecione um registrador a ser lido e clique em `Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" /></center>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
