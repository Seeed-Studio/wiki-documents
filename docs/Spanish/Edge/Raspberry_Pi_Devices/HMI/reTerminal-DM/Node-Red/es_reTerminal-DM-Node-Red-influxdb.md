---
description: Despliega InfluxDB en un reTerminal DM para una recolección y análisis eficientes de datos de series temporales en aplicaciones IoT. Esta guía cubre la instalación, configuración y uso para aprovechar el poder de InfluxDB en tu HMI basado en Raspberry Pi. Obtén información en tiempo real y capacidades robustas de monitoreo directamente en el borde de tu red.
title: reTerminal DM con Node Red e InfluxDB
keywords:
  - Raspberry Pi
  - HMI
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/reterminal-influx.png
slug: /es/reterminal_dm_200_node_red_influxdb
last_update:
  date: 04/06/2025
  author: Erick González
---

## Introducción

Desplegar [InfluxDB](https://www.influxdata.com/) en un reTerminal DM, una HMI potenciada por Raspberry Pi, posibilita una robusta recolección y análisis de datos de series temporales en el borde de tu red. Esta configuración es ideal para aplicaciones IoT, ya que proporciona información y capacidades de monitoreo en tiempo real. Al aprovechar la base de datos InfluxDB, ligera pero poderosa, podrás gestionar y analizar de forma eficiente los datos de sensores directamente en el reTerminal DM. La siguiente guía describe los pasos para instalar, configurar y utilizar InfluxDB en tu reTerminal DM, asegurando una integración fluida en tu infraestructura de datos.

### Preparación del Hardware

<div class="table-center">
	<table class="table-nobg">
	    <tr class="table-trnobg">
	      <th class="table-trnobg">reTerminal DM</th>
		</tr>
	    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
		</tr>
	    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
                        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
                    </a>
                </div>
            </td>
		</tr>
	</table>
</div>

### Preparación del Software

Se recomienda consultar la [Guía de Primeros Pasos con Node-RED](https://wiki.seeedstudio.com/reTerminal-DM-Getting-Started-with-Node-Red/) antes de continuar con esta wiki.

## Instalación de InfluxDB en reTerminal DM

Esta guía abarca los pasos para instalar y configurar InfluxDB en una HMI reTerminal DM.

**Paso 1**: Actualizar el Sistema

Primero, asegúrate de que tu sistema esté actualizado. Inicia sesión por SSH en el reTerminal DM y ejecuta el siguiente comando:

```sh
sudo apt update
```

**Paso 2**: Añadir el Repositorio de InfluxDB

Agrega la clave GPG de InfluxDB y el repositorio a tu sistema.

* Agregar la clave GPG:

```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
```

* Agregar el repositorio a la lista de fuentes:

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**Paso 3**: Actualizar la Lista de Paquetes

Actualiza la lista de paquetes para incluir el repositorio de InfluxDB:

```sh
sudo apt update
```

**Paso 4**: Instalar InfluxDB

Instala la versión 1 de InfluxDB ejecutando el siguiente comando:

```sh
sudo apt install influxdb
```

## Iniciar el Servidor InfluxDB

Habilita e inicia el servicio de InfluxDB:

**Paso 1**: Desenmascarar el servicio:

```sh
sudo systemctl unmask influxdb
```

**Paso 2**: Habilitar el servicio:

```sh
sudo systemctl enable influxdb
```

**Paso 3**: Iniciar el servicio:

```sh
sudo systemctl start influxdb
```

## Probar InfluxDB

Accede a la herramienta de línea de comandos de InfluxDB para realizar operaciones básicas con la base de datos.

**Paso 1**: Abre una terminal:

```sh
influx
```

**Paso 2**: Crea una base de datos:

```sh
CREATE DATABASE data
```

**Paso 3**: Selecciona la base de datos:

```sh
USE data
```

**Paso 4**: Inserta un punto de datos de ejemplo:

```sh
INSERT room,temperature=30.1 humidity=80.2
```

**Paso 5**: Consulta los datos insertados:

```sh
SELECT * FROM room
```

## Añadir Autenticación a InfluxDB

**Paso 1**: Abre una terminal:

```sh
influx
```

**Paso 2**: Crea un usuario admin con todos los privilegios (reemplaza `<password>` por tu contraseña segura):

```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
```

**Paso 3**: Sal de la CLI de InfluxDB:

```sh
exit
```

**Paso 4**: Edita la configuración de InfluxDB para habilitar la autenticación:

```sh
sudo nano /etc/influxdb/influxdb.conf
```

En la sección `[HTTP]`, agrega o modifica las siguientes líneas:

```
    auth-enabled = true
    pprof-enabled = true
    pprof-auth-enabled = true
    ping-auth-enabled = true
    enabled = true
    bind-address = ":8086"
```

**Paso 5**: Reinicia el servicio de InfluxDB para aplicar los cambios:

```sh
sudo systemctl restart influxdb
```

**Paso 6**: Conéctate a InfluxDB usando el usuario admin:

```sh
influx -username admin -password <password>
```

Recuerda reemplazar `<password>` por la contraseña que configuraste.

## Envío de Datos a InfluxDB vía Node-RED

**Paso 1**: Abre Node-RED en tu navegador (típicamente `http://<la-ip-de-tu-reTerminal-DM>:1880`).

**Paso 2**: Instala el nodo `node-red-contrib-influxdb` utilizando el menú "Manage Palette" de Node-RED.

**Paso 3**: Arrastra y suelta un nodo `inject`, un nodo `function` y un nodo `influxdb out` en el lienzo, conectándolos en este orden:

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ifdb-flow.PNG" /></center>

### Nodo Function

Este nodo formatea los datos para enviarlos a InfluxDB.

**Paso 1**: Haz doble clic en el nodo `function`.

**Paso 2**: Asigna un nombre (por ejemplo, `Formatear Datos para InfluxDB`).

**Paso 3**: Ingresa el siguiente código en el editor de funciones:

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/js-influxdb.PNG" /></center>

**Paso 4**: Haz clic en "Done".

### Nodo InfluxDB Out

Este nodo envía los datos formateados a InfluxDB.

**Paso 1**: Haz doble clic en el nodo `influxdb out`.
   
**Paso 2**: Ingresa los siguientes detalles:

- **Nombre**: labdata  
- **Base de datos**: data (la base de datos creada previamente)  
- **Medición**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/influxin.PNG" /></center>

**Paso 3**: Haz clic en el ícono de lápiz para añadir una nueva configuración de servidor InfluxDB.
   
**Paso 4**: Ingresa los siguientes detalles:

- **Nombre**: InfluxDB  
- **Versión**: 1.8-flux  
- **URL**: `http://localhost:8086`  
- **Usuario**: admin  
- **Contraseña**: `<password>` (la contraseña que configuraste)

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/server-ifdb.PNG" /></center>

**Paso 5**: Haz clic en "Add" y luego en "Done".

**Paso 6**: Haz clic en "Deploy" para guardar y desplegar el flujo.

### Probar el Flujo

1. Haz clic en el botón del nodo `inject` para disparar manualmente el flujo.
   
2. Comprueba en tu base de datos InfluxDB si los datos se han escrito ejecutando lo siguiente en el terminal:

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

Recuerda reemplazar `<password>` por la contraseña configurada para el usuario admin.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/result-lab.PNG" /></center>


## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte a través de distintos canales y asegurarnos de que tu experiencia sea lo más fluida posible. Disponemos de múltiples vías de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
