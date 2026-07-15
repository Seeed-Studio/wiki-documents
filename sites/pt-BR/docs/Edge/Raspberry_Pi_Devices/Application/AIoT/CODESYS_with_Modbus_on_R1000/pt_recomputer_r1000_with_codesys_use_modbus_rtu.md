---
description: Este artigo apresenta principalmente como usar a função Modbus RTU do reComputer R1000 baseada em CODESYS
title: Como usar o CODESYS para configurar a função Modbus RTU do R1000
keywords:
  - Controlador de Borda
  - reComputer R1000
  - CODESYS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_use_modbus_rtu_with_codesys
last_update:
  date: 10/10/2024
  author: ShuishengPeng
createdAt: '2024-10-10'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_use_modbus_rtu_with_codesys/
---
## Introdução

Este artigo apresenta principalmente como usar a função Modbus RTU do reComputer R1000 baseada em CODESYS. Usaremos as duas portas RS485 do reComputer R1000, uma porta será usada como mestre Modbus e a outra porta será usada como escravo Modbus. Este artigo detalhará como configurar o mestre Modbus e o escravo Modbus no CODESYS e mostrará como implantá‑los no reComputer R1000.

## Preparação de Hardware

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

## Preparação de Software

- [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
- [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## Primeiros Passos

Antes de começar, certifique‑se de que o seu reComputer R1000 está no mesmo segmento de rede que o host e que você implantou o `CODESYS run-time` no reComputer R1000. Para informações sobre como implantar o `CODESYS run-time`, consulte o [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_codesys/)

### Configuração de Hardware

As duas portas RS485 do R1000 estão conectadas, uma como mestre Modbus e a outra como escravo Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" /></center>

### Modificar o arquivo de configuração do R1000

Digite o comando:

```shell
    sudo nano /etc/codesyscontrol/CODESYSControl.cfg
```

Adicione o seguinte conteúdo:

```shell
# Add the following content to the end of the file, where ttyAMAx is the serial port number of reComputer R1000. Linux.Devicefile.1~3 represents the serial port number in CODESYS. Here, the serial port number of CODESYS is bound to the serial port number of reComputer R1000, otherwise CODESYS cannot identify the correct serial port
    [SysCom]
    Linux.Devicefile.1=/dev/ttyAMAx
    Linux.Devicefile.2=/dev/ttyAMAx
    Linux.Devicefile.3=/dev/ttyAMAx
```

Em seguida, insira o seguinte comando para reiniciar o serviço CODESYS:

```shell
    sudo systemctl restart codesyscontrol.service
    sudo systemctl restart codesysedge.service
```

### Configuração do mestre Modbus

**Passo 1**: Abra o CODESYS, clique em `File`--->`NEW Project` para criar um novo projeto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/1.png" /></center>

**Passo 2**: Insira o nome do projeto, selecione `Standard project` e clique em `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/2.png" /></center>

**Passo 3**: Selecione `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` na coluna `Device`, selecione `Structured Text (ST)` em `PLC_PRG in` e, em seguida, clique em `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/3.png" /></center>

**Passo 4**: Clique com o botão direito no projeto e selecione `Add Device` para adicionar o dispositivo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/4.png" /></center>

**Passo 5**: Clique em `Modbus`--->`Modbus serial Port`--->`Modbus COM` para adicionar um dispositivo de porta serial Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/5.png" /></center>

**Passo 6**: Clique duas vezes em `Modbus_COM` recém-adicionado, clique em `General`, onde você pode configurar o número da porta serial, taxa de transmissão (baud rate) e outras informações

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/7.png" /></center>

**Passo 7**: Clique com o botão direito em `Modbus_COM` e clique em `Add Device` para adicionar um dispositivo Modbus a esta porta

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/8.png" /></center>

**Passo 8**: Selecione `Modbus Serial Master` ---> `Modbus Client, COM Port` para vincular um dispositivo Mestre Modbus a esta porta serial

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/9.png" /></center>

**Passo 9**: Clique com o botão direito em `Modbus_Clent_COM_Port` e selecione `Add Device` para adicionar o dispositivo escravo a ser operado por este Mestre Modbus. Você pode adicionar vários dispositivos escravos aqui. Os dispositivos escravos aqui representam os dispositivos escravos que a estação mestre deseja operar. Você precisará configurar posteriormente as operações que a estação mestre executará nesses escravos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/10.png" /></center>

**Passo 10**: Selecione `Modbus Serial Slave` ---> `Modbus Server, COM Port` para adicionar um dispositivo escravo Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/11.png" /></center>

**Passo 11**: Clique duas vezes no dispositivo escravo recém-adicionado e, em `General`, você pode configurar as propriedades `Server address` e `Response timeout`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/12.png" /></center>

**Passo 12**: Clique em `Modbus Server Channel`, depois clique em `Add Channel` no canto inferior direito para configurar as operações que a estação mestre executará na estação escrava, como selecionar o código de função, o número de registradores a serem operados, etc. Você pode clicar em `Add Channel` para adicionar várias operações

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/13.png" /></center>

**Passo 13**: Clique em `ModbusGenericSerialServer I/O Mapping`, onde os dados podem ser mapeados para uma variável especificada, e selecione `Enable 1` na coluna `Always update variables` no canto inferior direito. Neste ponto, a configuração do Mestre Modbus está concluída.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/14.png" /></center>

### Configuração do escravo Modbus

**Passo 1**: Clique com o botão direito no projeto e selecione `Add Device` para adicionar um dispositivo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/1.png" /></center>

**Passo 2**: Selecione `Modbus` ---> `Modbus Serial Port` ---> `Modbus COM` para adicionar uma porta serial Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/2.png" /></center>

**Passo 3**: Clique na porta serial Modbus recém-adicionada, selecione `General` e configure o número da porta serial, taxa de transmissão (baud rate) e outras informações

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/3.png" /></center>

**Passo 4**: Clique com o botão direito na porta serial Modbus recém-adicionada, selecione `Add Device` e adicione o dispositivo escravo Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/4.png" /></center>

**Passo 5**: Selecione `Modbus` ---> `Modbus Serial Device` ---> `Modbus Serial Device` para adicionar um dispositivo escravo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/5.png" /></center>

**Passo 6**: Clique duas vezes no dispositivo escravo recém-adicionado. Em `General`, você pode configurar as propriedades deste escravo, como número de registradores e bobinas, endereço etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/6.png" /></center>

**Passo 7**: Clique em `Modbus Serial Device I/O Mapping` e selecione `Enable 1` em `Always update variable` no canto inferior direito. A configuração do escravo Modbus agora está concluída

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/7.png" /></center>

### Implantação do Modbus

**Passo 1**: Clique duas vezes no projeto, clique em `Scan Network`, depois selecione o seu dispositivo e clique em `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/1.png" /></center>

**Passo 2**: Insira o nome de usuário e a senha do reComputer R1000 para se conectar ao dispositivo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/2.png" /></center>

**Passo 3**: Clique no botão mostrado para implantar o projeto no reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/3.png" /></center>

**Passo 4**: Clique no botão Start para iniciar o projeto. Você pode ver que as luzes indicadoras do mestre e do escravo Modbus estão verdes, indicando que a comunicação Modbus está normal

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/5.png" /></center>

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
