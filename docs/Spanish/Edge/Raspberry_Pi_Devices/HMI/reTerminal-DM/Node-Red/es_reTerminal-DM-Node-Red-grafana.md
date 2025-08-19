---
description: En este tutorial, te guiaremos a través de la instalación de Grafana en un reTerminal DM con Raspberry Pi, y te mostraremos cómo conectar Grafana a una base de datos InfluxDB existente y crear un dashboard ilustrativo.
title: reTerminal DM con Grafana para Dashboards IoT
keywords:
  - reTerminal DM
  - IIoT
  - Grafana
  - Dash board
  - SCADA
image: https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana.png
slug: /es/reterminal_dm_grafana
last_update:
  date: 04/06/2025
  author: Erick González
---

## Introducción

[Grafana](https://grafana.com/oss/grafana/) es un software de visualización y análisis de código abierto que te permite consultar, visualizar, alertar y explorar tus métricas, logs y trazas desde cualquier ubicación de almacenamiento. Ofrece herramientas para transformar los datos de tu base de datos de series temporales (TSDB) en gráficos y visualizaciones de gran valor. Como una potente solución de monitoreo, Grafana te ayuda a tomar decisiones informadas, mejorar el rendimiento del sistema y agilizar la resolución de problemas. En esta wiki, te guiaremos en la instalación de Grafana en un reTerminal DM basado en Raspberry Pi, su conexión a una base de datos InfluxDB existente y la creación de un dashboard ilustrativo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana-dash.gif" /></center>

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

Se recomienda consultar el tutorial anterior sobre [Cómo crear la base de datos InfluxDB](https://wiki.seeedstudio.com/reterminal_dm_200_node_red_influxdb/). En este tutorial, usaremos una conexión InfluxDB ya existente para la configuración.

## Agregar el Repositorio de Grafana

**Asegúrate de que todos los paquetes instalados en tu Raspberry Pi estén actualizados:**

```bash
sudo apt update
```

**Agregar la Clave APT de Grafana:**

Para agregar la clave APT de Grafana al llavero de tu Raspberry Pi, ejecuta el siguiente comando:

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**Agregar el Repositorio de Grafana:**

Utiliza el siguiente comando para añadir el repositorio de Grafana a la lista:

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**Actualizar la Lista de Paquetes:**

Como hemos realizado cambios en la lista de paquetes, actualiza con:

```bash
sudo apt update
```

## Instalar Grafana en reTerminal DM

Instala la última versión de Grafana ejecutando el siguiente comando:

```bash
sudo apt install grafana
```

**Configurar Grafana para Iniciarse al Arranque**

Habilita Grafana para que se inicie automáticamente al arrancar:

```bash
sudo systemctl enable grafana-server
```

**Iniciar Grafana**

Inicia el servidor de Grafana con el siguiente comando:

```bash
sudo systemctl start grafana-server
```

**Acceder a Grafana**

Para acceder a la interfaz web de Grafana, abre un navegador e ingresa en:

``` 
http://<IPADDRESS>:3000
``` 

Reemplaza `<IPADDRESS>` con la dirección IP de tu reTerminal DM.

**Iniciar Sesión**

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/login.PNG" /></center>

El nombre de usuario y la contraseña predeterminados son:

- **Usuario:** `admin`
- **Contraseña:** `admin`

Una vez iniciada la sesión, se te solicitará cambiar la contraseña por defecto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/updatepsw.PNG" /></center>

## Crear tu Primer Dashboard

**Navega a Dashboards:**

Haz clic en **Dashboards** en el menú lateral.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard1.PNG" /></center>

**Crear un Nuevo Dashboard:**

En la página de Dashboards, haz clic en **New** y luego selecciona **New Dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard2.PNG" /></center>

**Agregar una Visualización:**

Dentro del dashboard, haz clic en **+ Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard3.PNG" /></center>

**Seleccionar la Fuente de Datos:**

Se te redirigirá para seleccionar una fuente de datos. Como en el tutorial anterior creamos una base de datos InfluxDB, haz clic en **Configure a new data source**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/configuresource.PNG" /></center>

**Configurar InfluxDB:**

- Selecciona **InfluxDB** bajo las bases de datos de series temporales.
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/addsource.PNG" /></center>

- Proporciona la **URL**, el **nombre de la base de datos** y las **credenciales de usuario**.
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/configuresource2.PNG" /></center>

- Haz clic en **Save & Test**. Si no aparecen advertencias, habrás configurado correctamente la fuente de datos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/saveandtest.PNG" /></center>

## Construir tu Dashboard

Una vez confirmada la configuración de la fuente de datos, haz clic en **Building a dashboard** para continuar.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/saveandtest2.png" /></center>

**Agregar Visualización:**

Serás redirigido a la nueva página del dashboard. Haz clic en **Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/dashboard3.PNG" /></center>

**Seleccionar la Fuente de Datos:**

Selecciona **InfluxDB**, ya que se creó previamente la conexión a la base de datos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/datasource.PNG" /></center>

**Configurar la Visualización**

Grafana proporciona una interfaz intuitiva para seleccionar mediciones, campos y otros parámetros. Para crear una visualización de series temporales, utiliza las opciones disponibles a la izquierda para configurar el título del panel, leyendas, ejes y otras configuraciones del gráfico. Consulta la [documentación de Grafana](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/) para más detalles y personalización.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/grafana.gif" /></center>

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
