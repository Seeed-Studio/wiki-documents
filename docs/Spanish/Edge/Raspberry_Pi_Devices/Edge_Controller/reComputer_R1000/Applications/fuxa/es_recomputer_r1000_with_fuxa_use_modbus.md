---
description: Este artículo explica cómo usar fuxa para comunicación Modbus RTU/TCP en reComputer R1000.
title: reComputer R1000 con fuxa para usar modbus RTU/TCP
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - ModbusRTU/TCP
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_modbus_rtu_and_tcp
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

fuxa es un software web para visualización de procesos (SCADA/HMI/Dashboard). Con fuxa puedes crear visualizaciones de procesos modernas con diseños personalizados y datos en tiempo real, compatible con Modbus RTU/TCP, Siemens S7, OPC-UA, BACnet IP, MQTT, etc.

Este artículo muestra cómo usar fuxa para comunicación Modbus RTU/TCP.

## Antes de Comenzar

Antes de iniciar, asegúrate de contar con el hardware y software necesarios.

### Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software

* Python 3.11 puede causar incompatibilidades con fuxa. Si tu Python es 3.11, considera otra versión.
* Usamos [modbusmechanic](https://modbusmechanic.scifidryer.com/) en Windows 10 (u otras herramientas de prueba).
* Usamos [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Pasos de instalación:

```shell
## Node v14/16/18
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
tar -xf node-v18.20.3-linux-arm64.tar.xz
cd node-v18.20.3-linux-arm64
sudo cp -R * /usr/local/
node -v
npm -v
## Instalar FUXA
sudo npm install -g --unsafe-perm @frangoteam/fuxa
sudo fuxa
```

* Para la función Modbus en reComputer R1000, revisa [este wiki](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/).

### Configuración de Hardware

Para ModbusRTU, usamos un módulo RS485 a USB para conectar reComputer R1000 a la PC con Windows 10:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para ModbusTCP, conectamos el PC y el reComputer R1000 a un mismo switch:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos para comunicación ModbusRTU

**Paso 1**: Abre ModbusMechanic en Win10, selecciona puerto serie y baudrate. Haz clic en `Tools` (arriba a la derecha), `Start Slave Simulator`. Escoge `RTU`, ingresa `slave ID` y configura los registros. Ejemplo: tres coils y un `Holding Register`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif" /></center>

**Paso 2**: En `fuxa`, haz clic en `+` abajo a la derecha, pon un nombre al módulo, `Type=modbusRTU`, `Connection options=SeriaPort`, selecciona el puerto serie y baudrate, luego `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png" /></center>

**Paso 3**: En `Devices settings`, haz clic en `+` (arriba a la izquierda) y define los campos a leer. Al finalizar, `fuxa` obtiene los datos del esclavo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif" /></center>

## Pasos para comunicación ModbusTCP

**Paso 1**: Abre ModbusMechanic en Win10, `Tools` => `Start Slave Simulator`, `TCP`, ingresa `slave ID`, configura registros. Ej.: dos coils y un holding register.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif" /></center>

**Paso 2**: En `fuxa`, haz clic en `+` abajo a la derecha, pon un nombre, `Type=modbusTCP`, `Connection options=TcpPort`, ingresa IP del esclavo (puerto 502 por defecto), `Slave ID`, luego `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png" /></center>

**Paso 3**: En `Devices settings`, haz clic en `+`, define los campos a leer. Al finalizar, `fuxa` obtiene los datos del esclavo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos canales de soporte para cubrir distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
