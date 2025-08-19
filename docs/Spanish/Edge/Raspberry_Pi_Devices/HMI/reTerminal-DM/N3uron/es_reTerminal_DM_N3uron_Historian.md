---
description: Integración del Módulo Historian para Visualización en reTerminal DM
title: Integración del Módulo Historian para Visualización en reTerminal DM
keywords:
  - reTerminal DM
  - Primeros pasos
  - IIoT
  - Industrial 
  - N3uron
  - Historian
  - MangoDB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalDM_N3uron_Historian
last_update:
  date: 04/06/2025
  author: Erick González
---

## Introducción

Presentamos [N3uron](https://n3uron.com/) Historian: un poderoso sistema de almacenamiento de series temporales construido sobre MongoDB. Es muy sencillo configurarlo para almacenar datos en instancias de MongoDB en arquitecturas x64, x32 y ARM. Con N3uron Historian, puedes almacenar valores de tags recolectados localmente o de manera remota a través de N3uron Links. Además, ofrece una práctica función de Almacenamiento y Reenvío para retener datos durante pérdida de comunicación. Gracias a su eficiente compresión y particionamiento, maneja volúmenes masivos de datos sin pérdida de rendimiento. Para que te hagas una idea, 1GB de almacenamiento puede contener alrededor de 100 millones de eventos. ¡Vamos a configurarlo paso a paso!

## Requisitos Previos

### Hardware 

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

### Software

Recomendamos encarecidamente estudiar cómo conectar [N3uron con AWS IoT Core](https://wiki.seeedstudio.com/reTerminalDM_N3uron_AWS/). Más adelante en este tutorial, aprenderás cómo crear gráficos utilizando el Módulo Historian. Si eres nuevo en N3uron, te sugerimos comenzar con la guía de [Primeros Pasos con N3uron](https://wiki.seeedstudio.com/reTerminalDM_N3uron_Get_Start/). Esta guía cubre la navegación en la interfaz web de N3uron, conceptos como la Web UI y el módulo Web Vision, el concepto de tags y la creación de dashboards básicos. Es aconsejable explorar estos fundamentos antes de continuar.

## Para instalar MongoDB en tu reTerminal DM

En arquitecturas x32 y ARM, el usuario primero debe instalar MongoDB y configurar Historian para almacenar datos en la instancia externa de MongoDB.

- **Paso 1**: Organiza los archivos

Coloca los [archivos proporcionados](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/n3uron_historian.zip) (install.sh, uninstall.sh, libcryto.so.1.1, y libssl.so1.1) en una carpeta separada en el escritorio de tu reTerminal DM o en otra ubicación que prefieras.

- **Paso 2**: Navega a la carpeta

Abre una terminal y navega a la carpeta que contiene los archivos.

```sh
cd your/folder/path
```

- **Paso 3**: Ejecuta el script de instalación

Ejecuta el archivo install.sh para instalar MongoDB.

```sh
./install.sh
```

Es posible que se te solicite ingresar tu contraseña de sudo durante el proceso de instalación.

- **Paso 4**: Verifica la instalación

Después de completar la instalación, introduce el siguiente comando para acceder a MongoDB:

```sh
mongo
```
Esto abrirá la shell de MongoDB.

- **Paso 5**: Crea una base de datos

Dentro de la shell de MongoDB, ingresa el siguiente comando para crear una base de datos llamada "mongo" en caso de que no exista:

```sh
use mongo
```
Ahora, MongoDB está instalado en tu reTerminal DM y has creado una base de datos llamada "mongo".

- **Paso 6**: Si tu distribución no proporciona estas librerías, colócalas en los directorios correspondientes para libcryto.so.1.1 y libssl.so1.1 en /usr/lib y /lib.  
Utiliza estos comandos:

```sh
sudo cp /path/to/your/folder/libcryto.so.1.1 /usr/lib
sudo cp /path/to/your/folder/libcryto.so.1.1 /lib

sudo cp /path/to/your/folder/libssl.so1.1 /usr/lib
sudo cp /path/to/your/folder/libssl.so1.1 /lib
```

## Crear el Módulo Historian

- **Paso 1**: Accede a la Interfaz de N3uron

Abre en tu navegador la URL: http://localhost:8003

- **Paso 2**: Navega a Configuración

En el menú de navegación, selecciona **Config** y luego elige **Modules**. Haz clic en el ícono de las tres barras y selecciona **New Module** para crear un nuevo módulo llamado **Historian**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule.PNG" /></center>

- **Paso 3**: Configura el Módulo

Selecciona **Module type** como Historian y guarda la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule2.PNG" /></center>

- **Paso 4**: Cambia el Tipo de Base de Datos

Haz clic en el módulo Historian que acabas de crear. Cambia el tipo de base de datos a **External**. Verás que el protocolo es **mongodb** y la base de datos es **mongo**. Habilita el modo Node History y guarda los ajustes.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historianconfig.PNG" /></center>

## Habilitar el Modo Node History 

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/nodemode.PNG" /></center>

## Crear un Tag Historian 

- **Paso 01**: Dentro del panel **Explorer**, selecciona **Tags**.

- **Paso 02**: En el menú Model, haz clic derecho sobre el ícono de la carpeta, selecciona **New Tag** y asigna un nombre. En este ejemplo, usaremos **TestVal**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newtag.PNG" /></center>

- **Paso 03**: Habilitar Simulación e Historial

Cambia la opción **Simulation** a **Enabled**, asegúrate de que el historial esté habilitado, y establece el nombre del módulo como **Historian**. Haz clic en **Save**.

:::note
Si no tienes una fuente para tu tag y deseas simularlo, puedes habilitar la simulación (opcional), o darle permisos de Lectura/Escritura y asignar valores manualmente al tag. Pero, si configuras la fuente de este tag como MQTT proveniente de AWS, la fuente es Aws. En este caso, deberás deshabilitar la simulación. De lo contrario, solo estarás leyendo datos de la simulación y no de AWS.
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/tagconfig.PNG" /></center>

## Configurar el Tag Historian para que Apunte a un Tag Fuente Activado

Para integrar el tag del Historian en el tag previamente creado que se suscribe al tema de AWS IoT Core, modifica la configuración de **Subscribed_value** de la siguiente manera:

Asegúrate de que **History** esté habilitado y que el nombre del módulo sea **Historian**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historyenabled.png" /></center>

## Visualización 

Si has creado un módulo **WebVision**, puedes seguir estos pasos:

**Paso 1**: Navega a WebVision

Ve a la sección Config y haz clic en **Open Designer**. Inicia sesión con tus credenciales de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/opendesigner.PNG" /></center>

**Paso 2**: Utiliza el Contenedor Main existente

Dado que creamos un Contenedor Main en el tutorial anterior, lo usaremos también aquí.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/template.PNG" /></center>

**Paso 3**: Añade un Componente de Gráfico

Dentro de la sección **New Component**, agrega un **Chart** y asígnale un nombre.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchart.PNG" /></center>

**Paso 4**: Crea un Conjunto de Datos Histórico

Dentro del gráfico, localiza la sección de datasets. Haz clic en los tres puntos y selecciona **New Dataset**, luego elige **HistoricalDataSet**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newhistorian.PNG" /></center>

**Paso 5**: Configura el Conjunto de Datos Histórico

Configura el conjunto de datos seleccionando el Tag como **Subscribed_value** (que se suscribe al tema de AWS IoT Core). Establece el Mode a **raw**, Date mode a **current**, habilita el autoreload, y configura el intervalo a 5. Establece el Date offset a 1 minuto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/confighistorian.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/selecttag.PNG" /></center>

**Paso 6**: Añade Series al Gráfico

En el gráfico, selecciona **New chartSeries** para añadir una nueva serie de gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchartseries.PNG" /></center>

**Paso 7**: Enlaza el Conjunto de Datos Historian al Gráfico

Para enlazar el conjunto de datos del Historian al gráfico, selecciona **Link dataset** y elige el dataset Historian que acabas de crear.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/linkdataset.PNG" /></center>

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datasetseries.PNG" /></center>

Ahora verás el gráfico de líneas. Personaliza el estilo para lograr una mejor visualización.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/styles.PNG" /></center>

Para una comprensión más profunda de los atributos del gráfico, se recomienda consultar el [artículo](https://n3uron.com/solutions-web-visualization/) proporcionado. La interfaz web de N3uron ofrece una amplia gama de widgets con numerosos atributos, por lo que es esencial revisar su documentación para lograr la mejor experiencia de usuario e interacción.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" /></center>

## Usar el Módulo Historian para Generar el Gráfico 

Para esta tarea, utilizaremos el módulo Historian para cargar datos. A diferencia de métodos anteriores donde se partía de cero, este enfoque ofrece una forma mucho más sencilla de obtener datos en formato CSV para análisis futuros.

- **Paso 1**: Añadir un Componente de Botón

Agrega un componente de botón a tu interfaz.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonselect.png" /></center>

- **Paso 2**: Seleccionar el Evento de Clic del Mouse

Elige **Mouse click** en los eventos del botón.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonevent.png" /></center>

- **Paso 3**: Añadir una Acción

Después de seleccionar el evento de clic, haz clic en **Add Action**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addaction.png" /></center>

- **Paso 4**: Seleccionar **Open Historical**

Elige **Open Historical** de la lista de acciones.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addnewaction.png" /></center>

- **Paso 5**: Configurar las Propiedades de la Acción

En este paso, deberás configurar las propiedades de la acción según tus necesidades. Selecciona el tag, habilita el auto-reload, establece el date mode, mode, y date offset. Ajusta estos parámetros según sea necesario para que la acción funcione como desees.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/actionproperties.png" /></center>

- **Paso 6**: Guarda la Acción

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/saveaction.png" /></center>

- **Paso 7**: Accede a Open UI

Navega a la sección Open UI.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

- **Paso 8**: Haz clic en el Botón

**Haz clic en el botón** que añadiste y el módulo Historian cargará. Configura el intervalo de datos apropiadamente para la recuperación. Presiona **Apply** para implementar los cambios. Luego podrás ver el gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/taglist2.png" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph2_3.gif" /></center>

- **Paso 9**: Habilitar Auto Reload

Selecciona **Auto Reload** con un intervalo de tiempo adecuado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/autoreload.png" /></center>

- **Paso 10**: Visualizar los Datos en Forma Tabular

Elige la opción para mostrar los datos en formato tabular.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/result_button.png" /></center>

- **Paso 11**: Descargar los Datos en Formato CSV

Presiona el botón proporcionado para descargar los datos en formato CSV.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datacollectiontocsv.png" /></center>

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte a través de diferentes canales y para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
