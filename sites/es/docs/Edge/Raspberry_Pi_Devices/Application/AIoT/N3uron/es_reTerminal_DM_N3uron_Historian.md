---
description: Integración del Módulo Historian para Visualización en reTerminal DM
title: Integración del Módulo Historian para Visualización en reTerminal DM
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial
  - N3uron
  - Historian
  - MangoDB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalDM_N3uron_Historian
last_update:
  date: 4/4/2024
  author: Xabier Fernández and Kasun Thushara
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reTerminalDM_N3uron_Historian/
---
## Introducción

Presentamos [N3uron](https://n3uron.com/) Historian: un potente sistema de almacenamiento de series temporales construido sobre MongoDB. Configúralo fácilmente para almacenar datos de MongoDB en arquitecturas x64 bit, x32 bit y ARM. Con Neuron Historian, puedes almacenar valores de etiquetas recopilados local o remotamente a través de N3uron Links. Además, ofrece una práctica función Store & Forward para la retención de datos durante la pérdida de comunicación. Gracias a la compresión y particionado eficientes, maneja volúmenes masivos de datos sin pérdida de rendimiento. Como referencia, 1GB de almacenamiento puede contener alrededor de 100 millones de eventos. ¡Vamos a sumergirnos en su configuración paso a paso!

## Prerrequisitos

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Recomendamos encarecidamente estudiar cómo conectar [N3uron con AWS IoT Core](https://wiki.seeedstudio.com/es/reTerminalDM_N3uron_AWS/). Más adelante en el tutorial, aprenderás cómo crear gráficos usando el Módulo Historian. Si eres nuevo en N3uron, sugerimos comenzar con la guía [Primeros pasos con N3uron](https://wiki.seeedstudio.com/es/reTerminalDM_N3uron_Get_Start/). Cubre la navegación por la interfaz web de N3uron, la comprensión de conceptos como la Web UI y el módulo Web Vision, la comprensión de conceptos de etiquetas y la creación de paneles básicos. Es recomendable explorar estos fundamentos primero antes de seguir adelante. Puedes acceder a la guía a través del enlace proporcionado.

## Para instalar MongoDB en tu reTerminal DM

En arquitecturas x32 y ARM, el usuario requiere primero instalar MongoDB y configurar Historian para almacenar datos en la instancia externa de MongoDB.

- **Paso 1**: Organizar Archivos

Coloca los [archivos](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/n3uron_historian.zip) proporcionados (install.sh, uninstall.sh, libcryto.so.1.1, y libssl.so1.1) en una carpeta separada en tu escritorio de reTerminal DM o cualquier otra ubicación preferida.

- **Paso 2**: Navegar a la Carpeta

Abre una terminal y navega a la carpeta que contiene los archivos.

```sh
cd your/folder/path
```

- **Paso 3**: Ejecutar el Script de Instalación

Ejecuta el archivo install.sh para instalar MongoDB.

```sh
./install.sh
```

Es posible que se te solicite ingresar tu contraseña de sudo durante el proceso de instalación.

- **Paso 4**: Verificar la Instalación

Después de que la instalación esté completa, ingresa el siguiente comando para acceder a MongoDB:

```sh
mongo
```

Esto abrirá el shell de MongoDB.

- **Paso 5**: Crear una Base de Datos

Dentro del shell de MongoDB, ingresa el siguiente comando para crear una base de datos llamada "mongo" si no existe:

```sh
use mongo
```

Ahora, MongoDB está instalado en tu reTerminal DM, y has creado una base de datos llamada "mongo".

- **Paso 6**: Si tu distribución no proporciona estas librerías, coloca libcryto.so.1.1 y libssl.so1.1 en las carpetas respectivas /usr/lib y /lib.
Usa estos comandos para esto

```sh
sudo cp /path/to/your/folder/libcryto.so.1.1 /usr/lib
sudo cp /path/to/your/folder/libcryto.so.1.1 /lib

sudo cp /path/to/your/folder/ libssl.so1.1 /usr/lib
sudo cp /path/to/your/folder/ libssl.so1.1 /lib

```

## Crear Módulo Historian

- **Paso 1**: Acceder a la Interfaz de N3uron

Ve a http://localhost:8003 en tu navegador web.

- **Paso 2**: Navegar a Configuración

En el menú de navegación, selecciona **Config** y luego elige **Modules**. Haz clic en el icono de tres barras y selecciona **New Module** para crear un nuevo módulo llamado **Historian.**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule.PNG" /></center>

- **Paso 3**: Configurar Módulo

Selecciona **Module type** como Historian y guarda la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule2.PNG" /></center>

- **Paso 4**: Cambiar Tipo de Base de Datos

Haz clic en el módulo Historian que acabas de crear. Cambia el Database type a External. Verás el protocolo como **mongodb** y la base de datos como **mongo**. Habilita el modo Node History y guarda la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historianconfig.PNG" /></center>

## Habilitar modo Node History

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/nodemode.PNG" /></center>

## Crear un tag Historian

- **Paso 01**: Dentro del **panel Explorer**, selecciona **Tags**.

- **Paso 02:** En el menú Model, haz clic derecho en el icono de carpeta, selecciona **New Tag** y dale un nombre. En este ejemplo, usaremos **TestVal**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newtag.PNG" /></center>

- **Paso 3:** Habilitar Simulación e Historial

Cambia la **Simulation** a **Enabled**, asegúrate de que el historial esté habilitado, y establece el nombre del módulo como **Historian**. **Guarda** la configuración.

:::note
Si no tienes una fuente para tu etiqueta y quieres simularla, puedes habilitar la simulación (opcional) o darle permisos de lectura/escritura y asignar manualmente valores a la etiqueta. Pero si configuraste la fuente de esta etiqueta como MQTT proveniente de AWS, la fuente es AWS. Por lo tanto, debes desactivar la simulación. De lo contrario, solo estarás leyendo datos provenientes de la simulación y no de AWS. En este caso, la simulación no aplica, ya que estás configurando la fuente de la etiqueta desde MQTT.
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/tagconfig.PNG" /></center>

## Configurar Etiqueta de Historian para Etiqueta con Source habilitado

Para incorporar la etiqueta de Historian en la etiqueta creada previamente suscrita al tema de AWS IoT Core, modifica la configuración de **Subscribed_value** de la siguiente manera:

Asegúrate de que **History** esté **Enabled**, el nombre del módulo esté configurado como **Historian**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historyenabled.png" /></center>

## Visualización

Si has creado un módulo **WebVision**, puedes seguir estos pasos:

**Paso 1**: Navegar a WebVision

Ve a la sección Config y haz clic en **Open Designer**. Inicia sesión usando tus credenciales de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/opendesigner.PNG" /></center>

**Paso 2**: Usar Contenedor Principal Existente

Dado que creamos un Contenedor Principal en el tutorial anterior, lo usaremos aquí también.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/template.PNG" /></center>

**Paso 3**: Agregar un Componente Chart

Bajo la sección **New component**, agrega un **Chart** y dale un nombre.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchart.PNG" /></center>

**Paso 4**: Crear Dataset Histórico

Dentro del gráfico, localiza los datasets. Toca los tres puntos y selecciona **New Dataset**, luego elige **HistoricalDataSet**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newhistorian.PNG" /></center>

**Paso 5**: Configurar Dataset Histórico

Configura el dataset histórico seleccionando la Etiqueta como **Subscribed_value** (que se suscribe al tema de AWS IoT Core). Establece el Modo en **raw**, Modo de fecha en **current**, habilita autoreload, y establece el intervalo en 5. Establece el Date offset en 1 minuto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/confighistorian.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/selecttag.PNG" /></center>

**Paso 6**: Agregar Series de Gráfico

Bajo el gráfico, selecciona **New chartSeries** para agregar una nueva serie de gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchartseries.PNG" /></center>

**Paso 7**: Vincular Dataset de Historian al Gráfico

Para vincular el dataset de historian al gráfico, selecciona **Link dataset** y elige el dataset de Historian que acabas de crear.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/linkdataset.PNG" /></center>

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datasetseries.PNG" /></center>

Ahora verás el gráfico de líneas. Personaliza el estilo para mejor visibilidad.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/styles.PNG" /></center>

Para una comprensión más profunda de los atributos del gráfico, se recomienda consultar el [artículo](https://n3uron.com/solutions-web-visualization/) proporcionado. La interfaz web de N3uron ofrece una amplia gama de widgets con numerosos atributos, haciendo esencial consultar su documentación para una experiencia de usuario e interacción óptimas. Explora su documentación para obtener pautas detalladas de formato y conocimientos sobre cómo maximizar el potencial de la interfaz web de N3uron.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" /></center>

## Usando el módulo Historian para generar el gráfico

Para esta tarea, utilizaremos el módulo Historian para cargar datos. A diferencia de métodos anteriores donde empezábamos desde cero, este enfoque ofrece una manera mucho más fácil de recuperar datos en formato CSV para análisis futuros.

- **Paso 1**: Agregar Componente de Botón

Agrega un componente de botón a tu interfaz de usuario.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonselect.png" /></center>

- **Paso 2**: Seleccionar Evento de Clic del Ratón

Elige **Mouse click** bajo eventos para el botón.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonevent.png" /></center>

- **Paso 3**: Agregar Acción

Haz clic en **Add Action** después de seleccionar el evento de clic del ratón.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addaction.png" /></center>

- **Paso 4**: Seleccionar **Open Historical**

Elige **Open Historical** de la lista de acciones.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addnewaction.png" /></center>

- **Paso 5**: Configurar Propiedades de la Acción

En este paso, necesitarás configurar las propiedades de la acción según tus requerimientos. Deberás **Seleccionar la etiqueta, habilitar la recarga automática, establecer el modo de fecha, modo y desplazamiento de fecha** también. Ajusta estas configuraciones según sea necesario para asegurar que la acción se comporte como se desea.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/actionproperties.png" /></center>

- **Paso 6**: Guardar la Acción

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/saveaction.png" /></center>

- **Paso 7**: Ir a Open UI

Navega a la sección Open UI.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

- **Paso 8**: Hacer Clic en el Botón

**Haz clic en el botón** que agregaste, y el módulo Historian se cargará. Establece el intervalo apropiadamente para la recuperación de datos. Presiona **Apply** para implementar los cambios. Entonces podrás ver el gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/taglist2.png" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph2_3.gif" /></center>

- **Paso 9**: Habilitar Recarga Automática

Selecciona **Auto Reload** con un intervalo de tiempo apropiado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/autoreload.png" /></center>

- **Paso 10**: Ver Datos de Manera Tabular

Elige la opción para ver los datos de manera tabular.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/result_button.png" /></center>

- **Paso 11**: Descargar Datos en Formato CSV

Presiona el botón proporcionado para descargar los datos en formato CSV.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datacollectiontocsv.png" /></center>

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
