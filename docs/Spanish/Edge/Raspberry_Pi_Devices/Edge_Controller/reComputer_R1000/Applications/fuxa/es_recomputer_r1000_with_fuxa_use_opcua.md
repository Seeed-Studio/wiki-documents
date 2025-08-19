---
description: Este artículo muestra cómo usar fuxa para comunicación OPC-UA en un reComputerR1000.
title: reComputer R1000 con fuxa para usar OPC-UA
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_opc_ua
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

fuxa es un software web para visualización de procesos (SCADA/HMI/Dashboard). Con fuxa, puedes crear visualizaciones modernas con diseños personalizados y datos en tiempo real. Es compatible con protocolos Modbus RTU/TCP, Siemens S7, OPC-UA, BACnet IP, MQTT y más.

Este artículo se centra en cómo usar fuxa para comunicación OPC-UA. Ejecutamos `Prosys OPC UA Simulation Server` en una PC con Windows 10 y luego leemos esos datos desde un reComputer R1000.

## Antes de Comenzar
Antes de iniciar, prepara tu hardware y software tal como se describe a continuación.

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

* Python 3.11 puede ser incompatible con fuxa. Si tu Python es 3.11, considera usar otra versión.
* Usamos [Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php) en Windows 10 (u otra herramienta OPC UA de prueba).
* Usamos [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Pasos de instalación:

```shell
## Necesitas Node 14, 16 o 18
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

### Configuración de Hardware

Conectamos la PC con Windows 10 y el reComputer R1000 a un switch mediante cables Ethernet, asegurando que ambos estén en la misma subred.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos para comunicación OPC-UA

**Paso 1**: Abre `Prosys OPC UA Simulation Server` y copia la `Connection Address (UA TCP)`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**Paso 2**: En fuxa, haz clic en el botón `+` abajo a la derecha, pon un `Name` y selecciona `OPCUA` en `Type`. Pega la dirección `UA TCP` que copiaste en `Address`. Selecciona `Security and encryption mode` según requiera tu dispositivo; aquí usamos `None-None`. Si tu dispositivo requiere `Username` y `Password`, complétalos. Por último, haz clic en `OK`. Luego, en `Prosys OPC UA Simulation Server` (en `ConnectionLog`), verás un log similar al de la imagen, indicando conexión exitosa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**Paso 3**: Crear tags para mostrar datos. Ve a la interfaz de configuración, haz clic en `+` (arriba a la izquierda o abajo a la derecha). Verás tres etiquetas: `Objects`, `Type`, `Views`. Selecciona `Objects`, luego `Simulation` para ver los datos simulados. Selecciona todos o solo los deseados y crea las tags. Haz clic en `OK`. Podrás leer datos del dispositivo OPC-UA.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos diferentes canales de soporte para cubrir preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
