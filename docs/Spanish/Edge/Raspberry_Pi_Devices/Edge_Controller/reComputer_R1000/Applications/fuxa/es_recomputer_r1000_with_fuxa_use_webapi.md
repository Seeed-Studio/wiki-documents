---
description: Este artículo explica cómo usar fuxa para comunicación WebAPI en un reComputerR1000.
title: reComputer R1000 con fuxa para usar WebAPI
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - WebAPI
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_web_api
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

fuxa es un software web de visualización de procesos (SCADA/HMI/Dashboard). Con fuxa puedes crear visualizaciones modernas con diseños personalizados y datos en tiempo real, compatible con Modbus RTU/TCP, Siemens S7, OPC-UA, BACnet IP, MQTT y más.

[postman](https://www.postman.com/downloads/?utm_source=postman-home) es una herramienta de prueba y depuración de interfaces que admite el protocolo http. Sus principales características son potencia, simplicidad y facilidad de uso, a menudo utilizada para la depuración de interfaces WebAPI.

Este artículo muestra cómo usar fuxa para comunicación WebAPI. Actualmente, fuxa solo admite el método `GET`, con paquetes de datos en formato JSON. Usaremos la función `GET` de fuxa para obtener datos desde `postman`.

## Comenzando

Antes de iniciar, asegúrate de tener listo el hardware y software que se describe.

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

* Python 3.11 puede no ser compatible con fuxa. Si tu Python es 3.11, considera otra versión.
* Usamos [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Pasos para instalar:
```shell
## Node v14, 16 o 18
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

## Pasos para comunicación WebAPI

**Paso 1**: En la interfaz de `fuxa`, haz clic en el signo `+` (abajo a la derecha). Pon un `Name`, selecciona `WebAPI` en `Type`, `GET` en `Method` y `JSON` en `Format`. Luego escribe `https://postman-echo.com/get` en `URL`, y haz clic en `OK`. Verás que fuxa logra conectarse exitosamente con `postman`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_webapi.gif" /></center>

**Paso 2**: Entra a la configuración, haz clic en `+` (arriba a la izquierda o abajo a la derecha). Verás los datos obtenidos de `postman` mediante `GET`. Selecciona cada dato y crea un tag, luego `OK`. De esta manera, fuxa lee en tiempo real los datos de `postman` usando `GET`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos soporte para asegurar que tu experiencia sea lo más fluida posible, con diversos canales para diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
