---
description: Este artículo presenta principalmente cómo usar fuxa para comunicación WebAPI.

title: reComputer R1000 con fuxa para usar WebAPI
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - WebAPI
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_web_api
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introducción 
FUXA es un software de Visualización de Procesos (SCADA/HMI/Dashboard) basado en web. Con FUXA puedes crear visualizaciones de procesos modernas con diseños individuales para tus máquinas y visualización de datos en tiempo real. Soporta Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT, y otros protocolos.

[postman](https://www.postman.com/downloads/?utm_source=postman-home) es una herramienta de depuración y prueba de interfaces que soporta el protocolo http. Sus características principales son funciones potentes, uso simple y facilidad de uso, a menudo utilizada para depuración de interfaces de WebAPI.

Este artículo presenta principalmente cómo usar fuxa para comunicación WebAPI. En esta etapa, fuxa solo soporta la función `GET`, y el paquete de datos está en formato Json. Usaremos la función `GET` de fuxa para obtener el datagrama de `postman`.


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
* Usando [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Puedes referirte a los siguientes pasos para instalar fuxa en reComputer R1000
  ```shell
    ## Necesitas tener instalado Node Versión 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Luego instala FUXA desde npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

## Pasos de comunicación WebAPI
**Paso 1**: Haz clic en el signo `+` en la esquina inferior derecha de la interfaz de `fuxa`, ingresa `Name`, selecciona `WebAPI` para `Type`, selecciona `GET` para `Method`, y selecciona `JSON` para `Format`. Luego ingresa `https://postman-echo.com/get` en la `URL`, y finalmente haz clic en `OK`. Puedes ver que fuxa puede establecer exitosamente una conexión con `postman`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_webapi.gif" /></center>

**Paso 2**: Entra a la interfaz de configuración, haz clic en el botón `+` en la esquina superior izquierda o inferior derecha, puedes ver los datos obtenidos de `postman` a través de la función `GET`, seleccionamos cada dato y creamos una etiqueta, finalmente haz clic en `OK`, de modo que los datos de `postman` puedan ser leídos en tiempo real a través de la función `GET`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" /></center>

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