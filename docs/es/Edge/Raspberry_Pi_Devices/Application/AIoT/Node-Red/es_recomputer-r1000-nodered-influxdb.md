---
description: Despliega InfluxDB en un reComputer R1000 para la recopilación y análisis eficiente de datos de series temporales en aplicaciones IoT. Esta guía cubre la instalación, configuración y uso para aprovechar el poder de InfluxDB en tu controlador edge basado en Raspberry Pi. Logra información en tiempo real y capacidades de monitoreo robustas directamente en el borde de tu red.

title: reComputer R1000 con Node Red e InfluxDB
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_node_red_influxdb
last_update:
  date: 07/03/2024
  author: Kasun Thushara
---
## Introducción

Desplegar [InfluxDB](https://www.influxdata.com/) en un reComputer R1000, un controlador edge basado en Raspberry Pi, permite la recopilación y análisis robustos de datos de series temporales en el borde de tu red. Esta configuración es ideal para aplicaciones IoT, proporcionando información en tiempo real y capacidades de monitoreo. Al aprovechar la base de datos InfluxDB ligera pero potente, puedes gestionar y analizar eficientemente los datos de sensores directamente en el reComputer R1000. La siguiente guía describe los pasos para instalar, configurar y usar InfluxDB en tu reComputer R1000, asegurando una integración perfecta en tu infraestructura de datos.


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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Hemos preparado una [Guía de introducción sobre Node-RED](https://wiki.seeedstudio.com/es/recomputer_r1000_getting_statrted_node_red/). Se recomienda que revises esta guía antes de proceder con el wiki.

## Instalación de InfluxDB en reComputer R1000 

Esta guía cubre los pasos para instalar y configurar InfluxDB en un controlador edge reComputer R1000.

**Paso 1**: Actualizar el Sistema

Primero, asegúrate de que tu sistema esté actualizado ejecutando el siguiente comando: SSH al reComputer R1000 y

```sh
sudo apt update
```

**Paso 2**: Agregar el Repositorio de InfluxDB

Agrega la clave GPG de InfluxDB y el repositorio a tu sistema.

Agregar la clave GPG:
   
```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
 ```

Añade el repositorio a la lista de fuentes:

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**Paso 3**: Actualizar la Lista de Paquetes

Actualiza la lista de paquetes para incluir el repositorio de InfluxDB:

```sh
sudo apt update
```

**Paso 4**: Instalar InfluxDB

Instalar InfluxDB versión 1

```sh
sudo apt install influxdb
```

## Iniciar el Servidor InfluxDB

Habilitar e iniciar el servicio InfluxDB:

**Paso 1**. Desenmascarar el servicio:

```sh
sudo systemctl unmask influxdb
 ```

**Paso 2**. Habilitar el servicio:

```sh
sudo systemctl enable influxdb
```

**Paso 3**. Iniciar el servicio:

```sh
sudo systemctl start influxdb
```

## Probando InfluxDB

Accede a la herramienta CLI de InfluxDB para realizar operaciones básicas de base de datos.

**Paso 1**. Abrir terminal :
   
```sh
influx
```

**Paso 2**. Crear una base de datos:

```sh
CREATE DATABASE data
 ```

**Paso 3**. Usar la base de datos:

```sh
USE data
```

**Paso 4**. Insertar un punto de datos de muestra:

```sh
INSERT room,temperature=30.1 humidity=80.2
 ```

**Paso 5**. Consultar los datos insertados:

```sh
SELECT * FROM room
 ```

## Agregando Autenticación a InfluxDB

**Paso 1**. Abrir terminal:

```sh
influx
```

**Paso 2**. Crear un usuario administrador con todos los privilegios (reemplaza `<password>` con tu contraseña segura):
   
```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
 ```

**Paso 3**. Salir de la CLI de InfluxDB:

```sh
exit
```

**Paso 4**. Edita la configuración de InfluxDB para habilitar la autenticación:

```sh
sudo nano /etc/influxdb/influxdb.conf
```

Bajo la sección `[HTTP]`, añade o modifica las siguientes líneas:

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

**Paso 6**. Conectar a InfluxDB con el usuario administrador:

```sh
influx -username admin -password <password>
```

Asegúrate de reemplazar `<password>` con la contraseña que estableciste para el usuario administrador.

## Enviando Datos a InfluxDB a través de Node-RED

**Paso 1**. Abre tu Node-RED en tu navegador (típicamente `http://<your-reComputer-R1000-ip>:1880`).

**Paso 2**. Instala el `node-red-contrib-influxdb` usando la paleta de gestión de Node-RED.

**Paso 3**. Arrastra y suelta un nodo `inject`, un nodo `function`, y un nodo `influxdb out` en el lienzo de flujo, y conéctalos como sigue:

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ifdb-flow.PNG" /></center>

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

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/js-influxdb.PNG" /></center>

**Paso 4**. Haz clic en "Done".


### Nodo InfluxDB Out

Este nodo envía los datos formateados a InfluxDB.

**Paso 1**. Haz doble clic en el nodo `influxdb out`.
   
**Paso 2**. Ingresa los siguientes detalles:

- **Name**: labdata
- **Database**: data (creada previamente)
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/influxin.PNG" /></center>

  
**Paso 3**. Haz clic en el ícono del lápiz para agregar una nueva configuración de servidor InfluxDB.
   
**Paso 4**. Ingresa los siguientes detalles:

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>` (la contraseña que creaste)

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/server-ifdb.PNG" /></center>

**Paso 5**. Haz clic en "Add" y luego en "Done".

**Paso 6**. Haz clic en "Deploy" para guardar y desplegar tu flujo.

### Probar el Flujo

1. Haz clic en el botón del nodo `inject` para activar el flujo manualmente.
   
2. Verifica tu base de datos InfluxDB para ver si los datos se han escrito exitosamente ejecutando los siguientes comandos en la terminal:

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

Asegúrate de reemplazar `<password>` con la contraseña que estableciste para el usuario administrador.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/result-lab.PNG" /></center>


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

