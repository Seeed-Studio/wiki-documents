---
description: Este artículo explica cómo usar fuxa para comunicación MQTT en reComputerR1000.
title: reComputer R1000 con fuxa para usar mqtt client
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - mqtt client
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

fuxa es un software web de visualización de procesos (SCADA/HMI/Dashboard). Con fuxa puedes crear visualizaciones modernas con diseños personalizados y datos en tiempo real, soportando Modbus RTU/TCP, Siemens S7, OPC-UA, BACnet IP, MQTT, entre otros.

Este artículo muestra cómo usar fuxa para comunicación MQTT en reComputerR1000. En el ejemplo:
- `mosquitto` actúa como servidor MQTT.
- `fuxa` y `node-red` son clientes MQTT.
- Agregamos un esclavo ModbusTCP como fuente de datos que publicará fuxa.
- fuxa se suscribe al tópico `/dev/fromNode_red` y publica en `/dev/fromfuxa`.
- `node-red` se suscribe a `/dev/fromfuxa` y publica en `/dev/fromNode_red`.

El marco de comunicación se ve así:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

## Antes de Empezar

Antes de empezar, revisa la preparación de hardware y software descrita.

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

* Python 3.11 puede no ser compatible con fuxa. Considera usar otra versión.
* Usamos [modbusmechanic](https://modbusmechanic.scifidryer.com/) en Windows 10 (u otras herramientas de prueba).
* Usamos [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Pasos de instalación:

```shell
## Node v14/16/18.
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

* Para usar la función modbusTCP en fuxa, revisa [este wiki](https://wiki.seeedstudio.com/reComputer_r1000_fuxa_modbus_rtu_and_tcp/).
* Para descargar/configurar `mosquitto`, revisa [este tutorial](https://wiki.seeedstudio.com/recomputer_r1000_nodered_mqtt/). También explica cómo configurar mqtt en node-red.

### Configuración de Hardware

Para ModbusTCP, conectamos PC con Windows 10 y reComputer R1000 a un switch via Ethernet, asegurando la misma subred.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos de comunicación cliente MQTT

**Paso 1**: Sigue [este tutorial](https://wiki.seeedstudio.com/reComputer_r1000_fuxa_modbus_rtu_and_tcp/) para que `fuxa` se conecte a `modbusmechanic`. Y sigue [este wiki](https://wiki.seeedstudio.com/Edge-Box-Node-Red-MQTT/) para implementar `mosquitto` y `node-red` en reComputer R1000.

**Paso 2**: Conectarse al servidor MQTT. En `fuxa`, haz clic en `+` (abajo a la derecha), pon `Name`, `Type=MQTTclient`, IP y puerto del broker MQTT. Si requiere autenticación, pon `Client ID`, `Username`, `Password`. Aquí no se requiere. Finalmente `OK`. Si aparece un punto verde en la esquina inferior izquierda del módulo, la conexión se logró.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**Paso 3**: Suscribirse al tópico. Ve a la configuración, haz clic en `+` (arriba a la izquierda), en `Browser Topics on broker` escribe el tópico `/dev/fromNode_red` (publicado por node-red). Haz clic en la lupa para ver el contenido. fuxa soporta `raw` y `json`. Escogemos `json`. Haz clic en `subscribe`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**Paso 4**: Publicar el tópico. En la config, ve a `Publish`. En `Topic path`, pon `/dev/fromfuxa`. Haz clic en `Add attribute to payload` para agregar datos que publicará. En este ejemplo son 4 datos del esclavo ModbusTCP más un timestamp. Formato `json`. Luego haz clic en `Publish`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**Paso 5**: Con la configuración hecha, si cambiamos datos en el esclavo Modbus, se verán cambios en tiempo real en la ventana debug de node-red, indicando que fuxa publica datos vía `/dev/fromfuxa` exitosamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos varios canales de soporte para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
