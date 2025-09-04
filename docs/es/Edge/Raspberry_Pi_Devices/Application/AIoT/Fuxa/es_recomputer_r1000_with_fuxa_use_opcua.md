---
description: Este artículo presenta principalmente cómo usar fuxa para comunicación OPC-UA.

title: reComputer R1000 con fuxa para usar OPC-UA
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_opc_ua
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introducción 
FUXA es un software de Visualización de Procesos (SCADA/HMI/Dashboard) basado en web. Con FUXA puedes crear visualizaciones de procesos modernas con diseños individuales para tus máquinas y visualización de datos en tiempo real. Soporta Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT, y otros protocolos.

Este artículo presenta principalmente cómo usar fuxa para comunicación OPC-UA. Ejecutamos `Prosys OPC UA Simulation Server` en PC W10, y luego leemos los datos del simulador en reComputer R1000.


## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software
* Python 3.11 puede ser incompatible con fuxa. Si tu versión de Python es 3.11, por favor considera cambiar a una versión diferente de Python.
* Usar [Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php) en PC W10. También puedes usar otras herramientas de prueba modbus
* Usar [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Puedes referirte a los siguientes pasos para instalar fuxa en reComputer R1000
  ```shell
    ## Necesitas tener instalado Node Versión 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Luego instalar FUXA desde npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

### Configuración de Hardware

Usamos cables Ethernet para conectar el PC W10 y reComputer R1000 a un switch para asegurar que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos de comunicación OPC-UA
**Paso 1**: Abre `Prosys OPC UA Simulation Server` y copia `Connection Address(UA TCP)`.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**Paso 2**: Haz clic en el botón `+` en la esquina inferior derecha, ingresa `Name`, selecciona `OPCUA` para `Type`, y pega la `Connection Address(UA TCP)` copiada en el primer paso a `Address`, `Security and encryption mode` se selecciona según los requisitos de tu propio dispositivo. Aquí elijo `None-None`. Si tu dispositivo requiere `Username` y `Password` al establecer una conexión, puedes llenar los lugares correspondientes. Finalmente haz clic en `OK`. Abre el `ConnectionLog` de `Prosys OPC UA Simulation Server`, y aparece el log como se muestra en la figura, indicando que la conexión se establece exitosamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**Paso 3**: Crear etiquetas para mostrar datos. Entra a la interfaz de configuración, haz clic en el botón `+` en la esquina superior izquierda o inferior derecha, puedes ver las tres etiquetas `Objects`, `Type`, `Views`, haz clic en `Objects`, y luego haz clic en `Simulation` para ver qué simula el simulador para los datos, seleccionamos todos los datos bajo `Simulation` y creamos etiquetas. Finalmente, haz clic en `OK`. Puedes ver que podemos intentar leer los datos del dispositivo OPCUA.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>