---
description: Este artículo presenta principalmente cómo usar fuxa para comunicación MQTT.

title: reComputer R1000 con fuxa para usar cliente mqtt
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - mqtt client
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introducción 
FUXA es un software de Visualización de Procesos (SCADA/HMI/Dashboard) basado en web. Con FUXA puedes crear visualizaciones de procesos modernas con diseños individuales para tus máquinas y visualización de datos en tiempo real. Soporta Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT, y otros protocolos.

Este artículo presenta principalmente cómo usar fuxa para comunicación mqtt en reComputerR1000. Este artículo usa mosquitto como el agente servidor MQTT, fuxa y node-red como el cliente MQTT, e introduce un esclavo ModbusTCP como la fuente de datos publicados por fuxa. fuxa se suscribe a un tema llamado /dev/fromNode_red y publica un tema llamado /dev/fromfuxa. Los datos de este tema provienen del esclavo ModbusTCP; node-red se suscribe a un tema llamado /dev/fromfuxa y publica un tema llamado /dev/fromfuxa. /dev/fromNode_red tema. El marco de comunicación se muestra en la figura:
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

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

### Preparación del Software
* Python 3.11 puede ser incompatible con fuxa. Si tu versión de Python es 3.11, por favor considera cambiar a una versión diferente de Python.
* Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) en PC W10. También puedes usar otras herramientas de prueba modbus
* Usando [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Puedes consultar los siguientes pasos para instalar fuxa en reComputer R1000
  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

* Respecto a cómo usar la función modbusTCP en fuxa, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_fuxa_modbus_rtu_and_tcp/).
* Respecto a cómo descargar y configurar mosquitto, puedes consultar este [tutorial](https://wiki.seeedstudio.com/es/recomputer_r1000_nodered_mqtt/). Aquí también se explica cómo configurar la comunicación mqtt en node-red, también puedes consultarlo.

### Configuración de Hardware

Para ModbusTCP, usamos cables Ethernet para conectar la PC W10 y reComputer R1000 a un switch para asegurar que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Pasos de comunicación del cliente MQTT

**Paso 1**: Consulta este [tutorial](https://wiki.seeedstudio.com/es/reComputer_r1000_fuxa_modbus_rtu_and_tcp/) y usa `fuxa` para establecer una conexión con `modbusmechanic`. Y consulta esta [wiki](https://wiki.seeedstudio.com/es/Edge-Box-Node-Red-MQTT/) para desplegar `mosquitto` y `Node-red` en reComputer R1000.

**Paso 2**: Conectar al servidor MQTT. Haz clic en el botón `+` en la esquina inferior derecha de la interfaz de `fuxa`, ingresa `Name`, `Type`, selecciona `MQTTclient`, y luego ingresa la dirección IP y el número de puerto del servidor MQTT. Si tu servidor MQTT requiere verificación de seguridad, también necesitas ingresar `Client ID`, `Username`, `Password`, etc. Nuestro servidor no requiere esta verificación, por lo que no se llena. Finalmente haz clic en `OK` y espera a que aparezca un punto verde en la esquina inferior izquierda del módulo, indicando que la conexión al servidor MQTT fue exitosa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**Paso 3**: Suscribirse al tema. Entra a la interfaz de configuración, haz clic en el botón `+` en la esquina superior izquierda, ingresa el tema al que te quieres suscribir en `Browser Topics on broker`, aquí nos suscribimos al tema `/dev/fromNode_red` publicado por node-red, y luego haz clic en el botón de búsqueda junto a él, puedes ver el contenido del tema correspondiente. fuxa soporta dos formatos de visualización: `raw` y `json`. Aquí elegimos `json`, y finalmente haz clic en `subscribe` para suscribirse exitosamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**Paso 4**: Publicar el tema. Entra a la interfaz de configuración, selecciona la columna `Publish`, ingresa el nombre del tema a publicar en `Topic path`, aquí ingresamos /dev/fromfuxa, y luego haz clic en `Add attribute to payload`, aparecerá una línea de contenido de datos que se puede publicar, aquí seleccionamos 4 datos obtenidos del esclavo ModbusTCP y una marca de tiempo como el contenido de nuestro tema de publicación, y seleccionamos el formato de publicación como `json`, y finalmente haz clic en `Publish` para publicar exitosamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**Paso 5**: Después de completar la configuración anterior, cambiamos los datos en el lado esclavo de Modbus. Puedes ver los cambios en tiempo real en los datos en la ventana de depuración de node-red, indicando que fuxa publicó exitosamente los datos a través del tema /dev/fromfuxa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
