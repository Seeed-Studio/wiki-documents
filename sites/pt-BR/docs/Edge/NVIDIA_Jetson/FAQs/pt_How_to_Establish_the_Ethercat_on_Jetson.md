---
description: Como estabelecer comunicação entre Jetson e dispositivos EtherCAT
title: Como estabelecer comunicação entre Jetson e dispositivos EtherCAT
keywords:
  - jetson
  - jetpack
  - L4T
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension.jpg
slug: /how_to_establish_the_ethercat_on_jetson
last_update:
  date: 11/14/2025
  author: Dayu
createdAt: '2025-11-14'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/how_to_establish_the_ethercat_on_jetson/
---

**EtherCAT (Ethernet for Control Automation Technology)** é um protocolo de barramento de campo Ethernet Industrial em tempo real, de alto desempenho e código aberto, baseado nos **padrões IEEE 802.3 Ethernet**. Ele opera em uma **arquitetura mestre-escravo** e é conhecido por sua velocidade, precisão e flexibilidade excepcionais em ambientes de automação industrial

Este documento usa o [**recomputer robotics J401**](https://www.seeedstudio.com/reComputer-Robotics-Carrier-board-p-6442.html) como o **mestre EtherCAT** e o [**MyActuator X4**](https://www.seeedstudio.com/Myactuator-X4-P12-5-10-Planetarty-Actuator-p-6470.html) como o **escravo** para demonstrar como estabelecer comunicação entre um Jetson e dispositivos EtherCAT.

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-114110327-recomputer-robotics-carrier-board.jpg"  style={{ height: 'auto', maxWidth: '50%' }}/>
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-114090069--myactuator-x4-p12.5-10-planetarty-actuator.jpg"  style={{ height: 'auto', maxWidth: '50%' }}/>
</div>


## 1. Conexão de hardware

Como mestre EtherCAT, o Jetson normalmente usa sua **interface Ethernet** para se conectar aos dispositivos escravos EtherCAT.

<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>


Como muitos dispositivos escravos não fornecem uma porta Ethernet padrão, geralmente é necessário um adaptador para converter a conexão Ethernet em uma **interface de 4 pinos (Tx+, Tx–, Rx+, Rx–)**.
<div align="center"><img width ="600" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/EtherCAT-tran.png"/>
</div>

:::note
Após estabelecer a conexão física EtherCAT, a maioria dos dispositivos escravos ainda requer alimentação externa adicional.
:::

## 2. Instalar o driver do EtherCAT

Esta seção usa **L4T 36.4.3**, que corresponde ao BSP **JetPack 6.2**, como exemplo para mostrar como instalar o driver do EtherCAT no Jetson.


Instale as dependências necessárias para compilar o driver do EtherCAT:

```bash
sudo apt update
sudo apt install build-essential cmake libtool autoconf automake
```

Baixe o código-fonte do driver EtherCAT, depois compile e instale:

```python
git clone https://gitlab.com/etherlab.org/ethercat.git
cd ethercat

./bootstrap # to create the configure script, if downloaded from the repo

./configure --sysconfdir=/etc
make all modules
sudo make modules_install install
sudo depmod -a
```

Para verificar se o driver foi instalado com sucesso, execute o seguinte comando.
Você deverá ver os dois módulos de kernel `ec_master` e `ec_generic`:

```bash
sudo lsmod | grep "ec_"
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-ko.png"/>
</div>



## 3. Configuração do EtherCAT

Depois de instalar o driver EtherCAT, várias configurações são necessárias para ativar a comunicação entre o mestre e os dispositivos escravos.

Primeiro, edite o arquivo de configuração em `/etc/ethercat.conf`:

```python
sudo vim /etc/ethercat.conf
```
Modifique os dois parâmetros em `/etc/ethercat.conf` de acordo com o nome da interface Ethernet conectada ao Jetson:

```python
MASTER0_DEVICE="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
DEVICE_MODULES="generic"
```
Substitua `eno1` pela interface Ethernet usada para EtherCAT. Você pode usar o comando `ifconfig` para verificar o nome da sua interface.  

Após reiniciar o serviço EtherCAT, você deverá ver o dispositivo mestre EtherCAT aparecer no diretório `/dev`:

```python
sudo systemctl restart ethercat
ls /de/EtherCAT*
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat0.png"/>
</div>

(**opcional**) Se `/dev/EtherCAT` não for encontrado, tente carregar os módulos do kernel manualmente:

```python
sudo modprobe ec_master devices="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo modprobe ec_generic
sudo systemctl restart ethercat
```
Substitua `eno1` pela interface Ethernet usada para EtherCAT.

(**opcional**) Às vezes a interface Ethernet usada para EtherCAT pode estar ocupada pelo **NetworkManager**. Você pode liberá-la usando os seguintes comandos:

```python
sudo nmcli dev set eno1 managed no  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo nmcli dev set eno1 managed on  # Replace eno1 with the Ethernet interface used for EtherCAT
```
Substitua `eno1` pela interface Ethernet usada para EtherCAT.


## 4. Testar a comunicação entre Jetson e o escravo EtherCAT

Depois de confirmar que o nó mestre EtherCAT está corretamente inicializado no Jetson e que as conexões de hardware estão devidamente estabelecidas, você pode testar a comunicação entre o Jetson e os dispositivos EtherCAT no terminal.

Procure por dispositivos EtherCAT e teste a transmissão de dados para verificar se a taxa de perda de pacotes está dentro de uma faixa normal:

```python
sudo ethercat rescan
sudo ethercat master
```
<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-frame.png"/>
</div>


Liste todos os dispositivos EtherCAT no barramento:

```python
sudo ethercat rescan
sudo ethercat slaves -v
```


<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-slave.png"/>
</div>

Veja o status do dispositivo EtherCAT com índice `0`:

```python
sudo ethercat rescan
sudo ethercat pdos -p 0 #0 to n
```
O parâmetro após `-p` pode ser qualquer valor de `0` a `n`.

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/slave0.png"/>
</div>


## 5. Exemplo – Controlando um motor EtherCAT no Jetson (MyActuator X4)

Com base nas etapas de configuração e verificação das seções anteriores, agora você já deve conseguir controlar um motor EtherCAT usando um dispositivo Jetson.  

Nesta seção, usamos o **MyActuator X4** como exemplo para demonstrar como controlar um motor EtherCAT a partir do Jetson.  

:::note
Esta seção é apenas para referência. Cada motor EtherCAT utiliza um protocolo de comunicação diferente, portanto você precisará adaptar o exemplo de acordo com o protocolo usado pelo seu dispositivo específico.
:::

Este exemplo fornece um código de amostra para controlar um motor EtherCAT **MyActuator X4**. Baixe e compile-o a partir do GitHub:  
```bash
git clone https://github.com/jjjadand/ethercat-myctor.git
cd src/build
cmake ..
make
```
O exemplo é implementado com base no [EtherCAT-Master](https://gitlab.com/etherlab.org/ethercat). O fluxograma do programa é mostrado abaixo:  

<details>
<summary> Fluxograma do programa </summary>

```bash
                     ┌──────────────────────────────────────┐
                     │        1. Master Initialization        │
                     ├──────────────────────────────────────┤
                     │ ecrt_request_master()                 │
                     │ ecrt_master_create_domain()           │
                     │ ecrt_master_slave_config()            │
                     │ Configure Distributed Clock (DC)      │
                     │ Register PDO entries (RxPDO/TxPDO)    │
                     │ ecrt_master_activate()                │
                     │ Get domain memory pointer             │
                     └──────────────────────────────────────┘
                                      │
                                      ▼
                     ┌──────────────────────────────────────┐
                     │      2. PREOP  →  SAFEOP Transition   │
                     ├──────────────────────────────────────┤
                     │ Slave boots in PREOP                 │
                     │ Master exchanges SDO if needed       │
                     │ (optional: set 0x6060 = CSP)         │
                     │ DC start time prepared               │
                     └──────────────────────────────────────┘
                                      │
                                      ▼
                     ┌──────────────────────────────────────┐
                     │      3. SAFEOP → OP Transition       │
                     ├──────────────────────────────────────┤
                     │ Domain becomes active (WKC > 0)      │
                     │ Application loop starts running      │
                     │ Master supplies application time     │
                     │ Master synchronizes DC clocks        │
                     │ Slave goes OP (operational)          │
                     └──────────────────────────────────────┘
                                      │
                                      ▼
                     ┌──────────────────────────────────────┐
                     │        4. CiA-402 State Machine       │
                     ├──────────────────────────────────────┤
                     │ Write ControlWord = 0x0006 (Shutdown)│
                     │ Wait READY_TO_SWITCH_ON              │
                     │ Write ControlWord = 0x0007 (SwitchOn)│
                     │ Wait SWITCHED_ON                     │
                     │ Write ControlWord = 0x000F (EnableOp)│
                     │ Wait OPERATION_ENABLED               │
                     └──────────────────────────────────────┘
                                      │
                                      ▼
                     ┌──────────────────────────────────────┐
                     │     5. Enter CSP Motion Operation     │
                     ├──────────────────────────────────────┤
                     │ Write Mode of Operation (0x6060=8)   │
                     │ Read Actual Position (0x6064)        │
                     │ Initialize Target Position (607A)    │
                     └──────────────────────────────────────┘
                                      │
                                      ▼
                     ┌──────────────────────────────────────┐
                     │     6. Real-Time Cyclic Operation     │
                     ├──────────────────────────────────────┤
                     │ loop at 1 kHz (or higher):           │
                     │   - Sleep until next cycle           │
                     │   - ecrt_master_application_time()   │
                     │   - ecrt_master_sync_reference_clock │
                     │   - ecrt_master_sync_slave_clocks    │
                     │   - Receive / process domain         │
                     │   - Generate new target position     │
                     │   - Write ControlWord = 0x000F       │
                     │   - Write OperationMode = 8 (CSP)     │
                     │   - Write new TargetPosition         │
                     │   - Queue & send domain              │
                     └──────────────────────────────────────┘
                                      │
                                      ▼
                     ┌──────────────────────────────────────┐
                     │     7. Monitoring & Fault Handling    │
                     ├──────────────────────────────────────┤
                     │ Read status word (0x6041) each cycle │
                     │ Detect faults (bit3)                 │
                     │ Detect target reached (0x0400)       │
                     │ Optionally read torque/velocity      │
                     │ Execute FAULT RESET if needed        │
                     └──────────────────────────────────────┘
                                      │
                                      ▼
                     ┌──────────────────────────────────────┐
                     │             8. Shutdown               │
                     ├──────────────────────────────────────┤
                     │ Stop real-time thread               │
                     │ Write ControlWord=0 (disable)       │
                     │ Release EtherCAT master             │
                     └──────────────────────────────────────┘
```

</details>


Ao controlar um motor EtherCAT no Jetson sem um kernel em tempo real, é recomendável **bloquear a frequência da CPU para garantir uma sincronização estável com o dispositivo EtherCAT**.  

Após compilar o exemplo, execute os seguintes comandos no terminal:  

```bash
sudo jetson_clocks # lock CPU frequency for stability
sudo ./ethercat_master
```

Após executar o programa, espere cerca de dois segundos — o motor começará a se mover em loop.
<div align="center"><img width ="500" 
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/ethercat-loop2.gif"/>
</div>


## Recursos

- [Código-fonte do EtherCAT Master](https://gitlab.com/etherlab.org/ethercat.git)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
