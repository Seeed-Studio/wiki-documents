---
description: Cómo establecer comunicación entre Jetson y dispositivos EtherCAT
title: Cómo establecer comunicación entre Jetson y dispositivos EtherCAT
keywords:
- jetson
- jetpack
- L4T
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension.jpg
slug: /es/how_to_establish_the_ethercat_on_jetson
last_update:
  date: 11/14/2025
  author: Dayu
---

**EtherCAT (Ethernet for Control Automation Technology)** es un protocolo de bus de campo Industrial Ethernet de alto rendimiento y tiempo real de código abierto basado en **estándares IEEE 802.3 Ethernet**. Opera en una **arquitectura maestro-esclavo** y es reconocido por su velocidad excepcional, precisión y flexibilidad en entornos de automatización industrial

Este documento utiliza el [**recomputer robotics J401**](https://www.seeedstudio.com/reComputer-Robotics-Carrier-board-p-6442.html) como **maestro EtherCAT** y el [**MyActuator X4**](https://www.seeedstudio.com/Myactuator-X4-P12-5-10-Planetarty-Actuator-p-6470.html) como **esclavo** para demostrar cómo establecer comunicación entre un Jetson y dispositivos EtherCAT.

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-114110327-recomputer-robotics-carrier-board.jpg"  style={{ height: 'auto', maxWidth: '50%' }}/>
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-114090069--myactuator-x4-p12.5-10-planetarty-actuator.jpg"  style={{ height: 'auto', maxWidth: '50%' }}/>
</div>


## 1. Conexión de hardware

Como maestro EtherCAT, el Jetson típicamente utiliza su **interfaz Ethernet** para conectarse a dispositivos esclavos EtherCAT.

<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>


Dado que muchos dispositivos esclavos no proporcionan un puerto Ethernet estándar, a menudo se requiere un adaptador para convertir la conexión Ethernet en una **interfaz de 4 pines (Tx+, Tx–, Rx+, Rx–)**.
<div align="center"><img width ="600" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/EtherCAT-tran.png"/>
</div>

:::note
Después de establecer la conexión física EtherCAT, la mayoría de los dispositivos esclavos aún requieren alimentación externa adicional.
:::

## 2. Instalar controlador de EtherCAT

Esta sección utiliza **L4T 36.4.3**, que corresponde al BSP **JetPack 6.2**, como ejemplo para mostrar cómo instalar el controlador de EtherCAT en Jetson.


Instalar las dependencias requeridas para compilar el controlador EtherCAT:

```bash
sudo apt update
sudo apt install build-essential cmake libtool autoconf automake
```

Descargar el código fuente del controlador EtherCAT, luego compilarlo e instalarlo:

```python
git clone https://gitlab.com/etherlab.org/ethercat.git
cd ethercat

./bootstrap # to create the configure script, if downloaded from the repo

./configure --sysconfdir=/etc
make all modules
sudo make modules_install install
sudo depmod -a
```

Para verificar que el controlador se ha instalado correctamente, ejecute el siguiente comando.
Debería ver los dos módulos del kernel `ec_master` y `ec_generic`:

```bash
sudo lsmod | grep "ec_"
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-ko.png"/>
</div>



## 3. Configuración de EtherCAT

Después de instalar el controlador EtherCAT, se requieren varias configuraciones para activar la comunicación entre el maestro y los dispositivos esclavos.

Primero, edite el archivo de configuración en `/etc/ethercat.conf`:

```python
sudo vim /etc/ethercat.conf
```
Modifique los dos parámetros en `/etc/ethercat.conf` según el nombre de la interfaz Ethernet conectada al Jetson:

```python
MASTER0_DEVICE="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
DEVICE_MODULES="generic"
```
Reemplace `eno1` con la interfaz Ethernet utilizada para EtherCAT. Puede usar el comando `ifconfig` para verificar el nombre de su interfaz.  

Después de reiniciar el servicio EtherCAT, debería ver aparecer el dispositivo maestro EtherCAT en el directorio `/dev`:

```python
sudo systemctl restart ethercat
ls /de/EtherCAT*
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat0.png"/>
</div>

(**opcional**) Si `/dev/EtherCAT` no se encuentra, intente cargar los módulos del kernel manualmente:

```python
sudo modprobe ec_master devices="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo modprobe ec_generic
sudo systemctl restart ethercat
```
Reemplace `eno1` con la interfaz Ethernet utilizada para EtherCAT.

(**opcional**) A veces la interfaz Ethernet utilizada para EtherCAT puede estar ocupada por **NetworkManager**. Puede liberarla usando los siguientes comandos:

```python
sudo nmcli dev set eno1 managed no  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo nmcli dev set eno1 managed on  # Replace eno1 with the Ethernet interface used for EtherCAT
```
Reemplace `eno1` con la interfaz Ethernet utilizada para EtherCAT.


## 4. Probar comunicación entre Jetson y esclavo EtherCAT

Después de confirmar que el nodo maestro EtherCAT está correctamente inicializado en el Jetson y las conexiones de hardware están establecidas adecuadamente, puede probar la comunicación entre el Jetson y los dispositivos EtherCAT en la terminal.

Escanear dispositivos EtherCAT y probar la transmisión de datos para verificar si la tasa de pérdida de paquetes está dentro de un rango normal:

```python
sudo ethercat rescan
sudo ethercat master
```
<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-frame.png"/>
</div>


Listar todos los dispositivos EtherCAT en el bus:

```python
sudo ethercat rescan
sudo ethercat slaves -v
```


<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-slave.png"/>
</div>

Ver el estado del dispositivo EtherCAT con índice `0`:

```python
sudo ethercat rescan
sudo ethercat pdos -p 0 #0 to n
```
El parámetro después de `-p` puede ser cualquier valor de `0` a `n`.

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/slave0.png"/>
</div>


## 5. Ejemplo – Controlando un Motor EtherCAT en Jetson (MyActuator X4)

Basándose en los pasos de configuración y verificación de las secciones anteriores, ahora debería poder controlar un motor EtherCAT usando un dispositivo Jetson.  

En esta sección, utilizamos el **MyActuator X4** como ejemplo para demostrar cómo controlar un motor EtherCAT desde el Jetson.  

:::note
Esta sección es solo para referencia. Cada motor EtherCAT utiliza un protocolo de comunicación diferente, por lo que necesitará adaptar el ejemplo según el protocolo utilizado por su dispositivo específico.
:::

Este ejemplo proporciona código de muestra para controlar un motor EtherCAT **MyActuator X4**. Descárguelo y compílelo desde GitHub:  
```bash
git clone https://github.com/jjjadand/ethercat-myctor.git
cd src/build
cmake ..
make
```
El ejemplo está implementado basado en [EtherCAT-Master](https://gitlab.com/etherlab.org/ethercat), El diagrama de flujo del programa se muestra a continuación:  

<details>
<summary> Diagrama de Flujo del Programa </summary>

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


Al controlar un motor EtherCAT en Jetson sin un kernel en tiempo real, se recomienda **bloquear la frecuencia de la CPU para asegurar una sincronización estable con el dispositivo EtherCAT**.  

Después de compilar el ejemplo, ejecuta los siguientes comandos en la terminal:  

```bash
sudo jetson_clocks # lock CPU frequency for stability
sudo ./ethercat_master
```

Después de ejecutar el programa, espera aproximadamente dos segundos — el motor comenzará a moverse en bucle.
<div align="center"><img width ="500" 
    src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/ethercat-loop2.gif"/>
</div>


## Recursos

- [Código fuente de EtherCAT Master](https://gitlab.com/etherlab.org/ethercat.git)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
