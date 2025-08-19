---
description: Despliega InfluxDB en un Edgebox RPi 200 para la recolección y análisis eficiente de datos de series temporales en aplicaciones IoT. Esta guía cubre la instalación, configuración y uso para aprovechar la potencia de InfluxDB en tu controlador de borde con Raspberry Pi, logrando información en tiempo real y capacidades de monitoreo directamente en el borde de tu red.
title: Edge Box RPi 200 con Node-RED e InfluxDB
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /es/edge_box_rpi_200_node_red_influxdb
last_update:
  date: 02/12/2025
  author: Erick González
---

## Introducción

Desplegar [InfluxDB](https://www.influxdata.com/) en un Edgebox RPi 200, un controlador de borde basado en Raspberry Pi, permite la recolección y el análisis robusto de datos de series temporales en el borde de tu red. Esta configuración es ideal para aplicaciones IoT, proporcionando perspectivas en tiempo real y capacidades de monitoreo. Al aprovechar la base de datos InfluxDB, ligera pero potente, puedes gestionar y analizar de forma eficiente los datos de sensores directamente en el Edgebox. La siguiente guía describe los pasos para instalar, configurar y usar InfluxDB en tu Edgebox RPi 200, garantizando una integración fluida en tu infraestructura de datos.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

### Preparación de Software

Edge Box viene con Raspberry Pi OS preinstalado. Si inicias este dispositivo por primera vez, por favor revisa nuestro [Getting Started Wiki](https://wiki.seeedstudio.com/Edge_Box_introduction/). Además, hemos preparado una [Guía de Inicio con Node-RED](https://wiki.seeedstudio.com/Edge-Box-Getting-Started-with-Node-Red/). Recomendamos revisarla antes de avanzar con este wiki. En este tutorial, conectaremos la PC Host que ejecuta el simulador de temperatura de habitación YABE con Node-RED en el Edge Box.

## Instalando InfluxDB en Edgebox RPi 200

Esta guía cubre los pasos para instalar y configurar InfluxDB en un Edgebox RPi 200.

**Paso 1**: Actualizar el Sistema

Primero, asegúrate de que tu sistema esté actualizado ejecutando el siguiente comando: conecta por SSH a EdgeBox y:

```sh
sudo apt update
```

**Paso 2**: Agregar el Repositorio de InfluxDB

Agrega la clave GPG y el repositorio de InfluxDB a tu sistema.

Agrega la clave GPG:
   
```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
```

Agrega el repositorio a la lista de fuentes:

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**Paso 3**: Actualizar la Lista de Paquetes

Actualiza la lista de paquetes para incluir el repositorio de InfluxDB:

```sh
sudo apt update
```

**Paso 4**: Instalar InfluxDB

Instala la versión 1 de InfluxDB

```sh
sudo apt install influxdb
```

## Iniciar el Servidor InfluxDB

Habilita e inicia el servicio de InfluxDB:

**Paso 1**. Desenmascara el servicio:

```sh
sudo systemctl unmask influxdb
```

**Paso 2**. Habilita el servicio:

```sh
sudo systemctl enable influxdb
```

**Paso 3**. Inicia el servicio:

```sh
sudo systemctl start influxdb
```

## Probando InfluxDB

Accede a la herramienta CLI de InfluxDB para realizar operaciones básicas de base de datos.

**Paso 1**. Abre la terminal:
   
```sh
influx
```

**Paso 2**. Crea una base de datos:

```sh
CREATE DATABASE data
```

**Paso 3**. Usa la base de datos:

```sh
USE data
```

**Paso 4**. Inserta un punto de datos de ejemplo:

```sh
INSERT room,temperature=30.1 humidity=80.2
```

**Paso 5**. Consulta los datos insertados:

```sh
SELECT * FROM room
```

## Agregar Autenticación a InfluxDB

**Paso 1**. Abre la terminal:

```sh
influx
```

**Paso 2**. Crea un usuario admin con todos los privilegios (reemplaza `<password>` con tu contraseña segura):
   
```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
```

**Paso 3**. Sal del CLI de InfluxDB:

```sh
exit
```

**Paso 4**. Edita la configuración de InfluxDB para habilitar la autenticación:

```sh
sudo nano /etc/influxdb/influxdb.conf
```

En la sección `[HTTP]`, agrega o modifica las siguientes líneas:

```
auth-enabled = true
pprof-enabled = true
pprof-auth-enabled = true
ping-auth-enabled = true
enabled=true
bind-address=":8086"
```

**Paso 5**. Reinicia el servicio InfluxDB para aplicar los cambios:

```sh
sudo systemctl restart influxdb
```

**Paso 6**. Conéctate a InfluxDB con el usuario admin:

```sh
influx -username admin -password <password>
```

Asegúrate de reemplazar `<password>` con la contraseña que configuraste para el usuario admin.

## Enviando Datos a InfluxDB a través de Node-RED

**Paso 1**. Abre tu Node-RED en el navegador (normalmente `http://<tu-ip-edgebox>:1880`).

**Paso 2**. Instala `node-red-contrib-influxdb` usando el administrador de paletas de Node-RED.

**Paso 3**. Arrastra y suelta un nodo `inject`, un nodo `function` y un nodo `influxdb out` en el lienzo de flujos, y conéctalos así:

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ifdb-flow.PNG" /></center>

### Nodo Function

Este nodo formatea los datos que se enviarán a InfluxDB.

**Paso 1**. Haz doble clic en el nodo `function`.

**Paso 2**. Ingresa un nombre (por ejemplo, `Format Data for InfluxDB`).

**Paso 3**. Ingresa el siguiente código en el editor de funciones:

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/js-influxdb.PNG" /></center>

**Paso 4**. Haz clic en "Done".

### Nodo InfluxDB Out

Este nodo envía los datos formateados a InfluxDB.

**Paso 1**. Haz doble clic en el nodo `influxdb out`.
   
**Paso 2**. Ingresa los siguientes detalles:

- **Name**: labdata
- **Database**: data (la base de datos creada previamente)
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxin.PNG" /></center>

**Paso 3**. Haz clic en el ícono de lápiz para agregar una nueva configuración de servidor InfluxDB.
   
**Paso 4**. Ingresa los siguientes detalles:

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>` (la contraseña que creaste)

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server-ifdb.PNG" /></center>

**Paso 5**. Haz clic en "Add" y luego en "Done".

**Paso 6**. Haz clic en "Deploy" para guardar y desplegar tu flujo.

### Probar el Flujo

1. Haz clic en el botón del nodo `inject` para activar manualmente el flujo.
   
2. Revisa tu base de datos InfluxDB para verificar si los datos se han escrito correctamente, ejecutando los siguientes comandos en la terminal:

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

Asegúrate de reemplazar `<password>` con la contraseña que configuraste para el usuario admin.

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/result-lab.PNG" /></center>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
