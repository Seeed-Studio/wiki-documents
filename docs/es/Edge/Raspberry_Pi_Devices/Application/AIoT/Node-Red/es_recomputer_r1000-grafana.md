---
description: En este tutorial, te guiaremos a través de la instalación de Grafana en un reComputer R1000 alimentado por Raspberry Pi. También te mostraremos cómo conectar Grafana a una base de datos InfluxDB existente y crear un panel de control detallado e ilustrativo
title: reComputer R1000 con Grafana
keywords:
  - reComputer R1000
  - IIoT
  - Grafana
  - Dash board
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif
slug: /es/recomputer_r1000_grafana
last_update:
  date: 6/24/2024
  author: Kasun Thushara
---
## Introducción

[Grafana](https://grafana.com/oss/grafana/) es un software de visualización y análisis de código abierto que te permite consultar, visualizar, alertar y explorar tus métricas, registros y trazas desde cualquier ubicación de almacenamiento. Ofrece herramientas para transformar los datos de tu base de datos de series temporales (TSDB) en gráficos y visualizaciones perspicaces. Como una solución de monitoreo poderosa, Grafana ayuda a tomar decisiones informadas, mejorar el rendimiento del sistema y agilizar la resolución de problemas. En esta wiki, te guiaremos a través de la instalación de Grafana en un reComputer R1000 alimentado por Raspberry Pi, lo conectaremos a una base de datos InfluxDB existente y crearemos un panel de control ilustrativo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" /></center>

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

Se recomienda consultar un tutorial previo sobre [Cómo crear la base de datos InfluxDB](https://wiki.seeedstudio.com/es/recomputer_r1000_node_red_influxdb/). En este tutorial, utilizaremos una conexión InfluxDB existente para la configuración.

## Añadiendo el Repositorio de Grafana


**Asegúrate de que todos los paquetes actualmente instalados en tu Raspberry Pi OS estén actualizados**:

```bash
sudo apt update
```

**Añadir la Clave APT de Grafana:**

Para añadir la clave APT de Grafana al llavero de tu Raspberry Pi, ejecuta el siguiente comando:

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**Agregar el Repositorio de Grafana:**

Usa el siguiente comando en tu Raspberry Pi para agregar el repositorio de Grafana a la lista:

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**Actualizar Lista de Paquetes:**

Como hemos realizado cambios en nuestra lista de paquetes, necesitamos ejecutar una actualización:

```bash
sudo apt update
```

## Instalando Grafana en reComputer R1000

Instala la última versión de Grafana ejecutando el siguiente comando:

```bash
sudo apt install grafana
```

**Configurando Grafana para Iniciar al Arranque**

Habilita Grafana para iniciar al arranque:

```bash
sudo systemctl enable grafana-server
```

**Iniciando Grafana**

Inicia el software del servidor Grafana ejecutando el siguiente comando:

```bash
sudo systemctl start grafana-server
```

**Accediendo a Grafana**

Para acceder a la interfaz web de Grafana, abre un navegador web y navega a:

```
http://<IPADDRESS>:3000
```

Reemplaza `<IPADDRESS>` con la dirección IP de tu reComputer R1000 RPi 200.

**Iniciar Sesión**

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/login.PNG" /></center>

El nombre de usuario y contraseña predeterminados son:

- **Nombre de usuario:** `admin`
- **Contraseña:** `admin`

Una vez que hayas iniciado sesión, se te pedirá cambiar la contraseña predeterminada.


<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/updatepsw.PNG" /></center>

## Crear Tu Primer Dashboard

**Navegar a Dashboards:**
   
Haz clic en **Dashboards** en el menú del lado izquierdo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard1.PNG" /></center>

**Crear un Nuevo Dashboard:**
   
En la página de Dashboards, haz clic en **New** y selecciona **New Dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard2.PNG" /></center>

**Agregar una Visualización:**
   
En el dashboard, haz clic en **+ Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**Seleccionar Fuente de Datos:**
   
Serás redirigido para seleccionar una fuente de datos. En el último tutorial, creamos una base de datos InfluxDB. Haz clic en **Configure a new data source**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource.PNG" /></center>

**Configurar InfluxDB:**
   
   - Selecciona **InfluxDB** bajo bases de datos de series temporales.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/addsource.PNG" /></center>

   - Proporciona la **URL**, **nombre de la base de datos** y **privilegios de usuario**.
  
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource2.PNG" /></center>

   - Haz clic en **Save & Test**. Si no hay advertencias, estás listo para continuar.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest.PNG" /></center>


**Construir Tu Dashboard:**
   
Verás un mensaje confirmando la configuración de la fuente de datos. Haz clic en **Building a dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest2.png" /></center>

**Agregar Visualización:**
   
Serás redirigido a la página del nuevo dashboard. Haz clic en **Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**Seleccionar Fuente de Datos:**
   
Serás redirigido para seleccionar una fuente de datos. Creamos una conexión de base de datos InfluxDB. Haz clic en **InfluxDB**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/datasource.PNG" /></center>

**Configurar Visualización**

Grafana proporciona una interfaz fácil de usar para seleccionar mediciones, campos y otros puntos de datos relevantes. Crearemos una visualización de series temporales. En el lado izquierdo, verás opciones para ingresar el título del Panel, Leyendas, configuraciones de Ejes y configuraciones de Gráfico.
Presta atención a los siguientes elementos visuales para agregar un gráfico simple a tu primer dashboard.
Para configuraciones más detalladas y personalización, consulta la [documentación de Grafana](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana.gif" /></center>

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
