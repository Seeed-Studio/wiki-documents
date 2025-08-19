---
description: En este tutorial, te guiaremos a través de la instalación de Grafana en un reComputer R1000 con Raspberry Pi. También te mostraremos cómo conectar Grafana a una base de datos existente de InfluxDB y crear un tablero detallado e ilustrativo.
title: reComputer R1000 con Grafana
keywords:
  - reComputer R1000
  - IIoT
  - Grafana
  - Dashboard
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif
slug: /es/recomputer_r1000_grafana
last_update:
  date: 02/17/2025
  author: Erick González
---

## Introduction

[Grafana](https://grafana.com/oss/grafana/) es un software de visualización y análisis de código abierto que permite consultar, visualizar, generar alertas y explorar métricas, registros y trazas desde cualquier fuente de almacenamiento. 

Ofrece herramientas para transformar los datos de una base de datos de series temporales (TSDB) en gráficos e imágenes informativas. Como una solución potente de monitoreo, Grafana ayuda a tomar decisiones informadas, mejorar el rendimiento del sistema y optimizar la resolución de problemas. 

En este tutorial, te guiaremos a través de la instalación de Grafana en un reComputer R1000 con Raspberry Pi, la conexión con una base de datos existente de InfluxDB y la creación de un tablero ilustrativo.


<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" /></center>

### Hardware Preparation

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación del Software

Se recomienda consultar un tutorial previo sobre [Cómo crear la base de datos InfluxDB](https://wiki.seeedstudio.com/recomputer_r1000_node_red_influxdb/). En este tutorial, utilizaremos una conexión existente de InfluxDB para la configuración.

## Agregar el Repositorio de Grafana

**Asegúrate de que todos los paquetes instalados en tu Raspberry Pi OS estén actualizados:**

```bash
sudo apt update
```

**Agregar la clave APT de Grafana:**

Para añadir la clave APT de Grafana al sistema, ejecuta el siguiente comando:

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**Agregar el Repositorio de Grafana:**

Ejecuta el siguiente comando en tu Raspberry Pi para agregar el repositorio de Grafana a la lista de fuentes:

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**Actualizar la Lista de Paquetes:**

Como hemos realizado cambios en la lista de paquetes, debemos ejecutar una actualización:

```bash
sudo apt update
```

## Instalación de Grafana en reComputer R1000

Instala la última versión de Grafana ejecutando el siguiente comando:

```bash
sudo apt install grafana
```

### Configurar Grafana para Iniciar en el Arranque

Habilita Grafana para que se inicie automáticamente al arrancar el sistema:

```bash
sudo systemctl enable grafana-server
```

### Iniciar Grafana

Ejecuta el siguiente comando para iniciar el servidor de Grafana:

```bash
sudo systemctl start grafana-server
```

### Acceder a Grafana

Para acceder a la interfaz web de Grafana, abre un navegador y dirígete a:

```
http://<IPADDRESS>:3000
```

Reemplaza `<IPADDRESS>` con la dirección IP de tu reComputer R1000 RPi 200.

### Inicio de Sesión

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/login.PNG" /></center>

Las credenciales predeterminadas son:

- **Usuario:** `admin`
- **Contraseña:** `admin`

Una vez que inicies sesión, se te pedirá cambiar la contraseña predeterminada.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/updatepsw.PNG" /></center>

## Crear tu Primer Tablero

### Navegar a Dashboards

Haz clic en **Dashboards** en el menú lateral izquierdo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard1.PNG" /></center>

### Crear un Nuevo Dashboard

En la página de Dashboards, haz clic en **New** y selecciona **New Dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard2.PNG" /></center>

### Agregar una Visualización

En el dashboard, haz clic en **+ Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

### Seleccionar Fuente de Datos

Serás redirigido para seleccionar una fuente de datos. En el tutorial anterior, creamos una base de datos en InfluxDB. Haz clic en **Configure a new data source**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource.PNG" /></center>

### Configurar InfluxDB

- Selecciona **InfluxDB** dentro de las bases de datos de series temporales.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/addsource.PNG" /></center>

- Proporciona la **URL**, el **nombre de la base de datos** y los **privilegios de usuario**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource2.PNG" /></center>

- Haz clic en **Save & Test**. Si no aparecen advertencias, todo está configurado correctamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest.PNG" /></center>


## Construir tu Tablero

### Crear el Tablero

Verás un mensaje confirmando la configuración de la fuente de datos. Haz clic en **Building a dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest2.png" /></center>

### Agregar una Visualización

Serás redirigido a la página del nuevo dashboard. Haz clic en **Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

### Seleccionar Fuente de Datos

Serás redirigido para seleccionar una fuente de datos. Creamos una conexión con una base de datos en InfluxDB. Haz clic en **InfluxDB**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/datasource.PNG" /></center>

### Configurar la Visualización

Grafana proporciona una interfaz intuitiva para seleccionar mediciones, campos y otros puntos de datos relevantes. Crearemos una visualización de series temporales. En el lado izquierdo, encontrarás opciones para ingresar el título del panel, leyendas, configuración de ejes y ajustes del gráfico.

Presta atención a los siguientes elementos visuales para agregar un gráfico simple a tu primer dashboard. Para configuraciones más detalladas y personalización, consulta la [documentación de Grafana](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
