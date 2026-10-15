---
description: Usa reCamera para lograr mapa de calor en tiempo real + procesamiento de desenfoque local + integración con panel de datos de Grafana
title: Integración de mapa de calor en tiempo real con panel de datos de Grafana
keywords:
  - reCamera
  - heatmap
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif
slug: /integration_of_real-time_heat_map_with_grafana_data_dashboard
sku: 102991896, 108990119, 100029708
sidebar_position: 10
last_update:
  date: 12/21/2025
  author: Xinrui Wu
createdAt: '2025-12-22'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/es/integration_of_real-time_heat_map_with_grafana_data_dashboard/
---

# Integración de mapa de calor en tiempo real con panel de datos de Grafana

## Introducción

Este proyecto realiza detección de objetivos utilizando el modelo YOLO11n incorporado en reCamera. Realiza un procesamiento de desenfoque sobre los objetivos de personas y muestra un efecto de mapa de calor. ¡Todo esto se maneja localmente dentro de reCamera! Y reCamera enviará los datos detectados a la base de datos Influxdb que se ejecuta localmente. Luego, Grafana lee los datos de la base de datos Influxdb para mostrar paneles de datos en tiempo real.

A continuación se muestra el efecto de uso después de completar esta demostración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif" /></div>

## Preparación de hardware

Una reCamera
un ordenador

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1.Configuración de InfluxDB

### 1.1 Descarga InfluxDB2-2.1.1 e inícialo

Ve al [enlace](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-windows-amd64.zip) de descarga, descárgalo y descomprímelo. Pulsa Win + R para abrir la consola de comandos, luego entra en el directorio donde se descomprimió el archivo y finalmente escribe:

```bash
influxd
```

Como se muestra en la siguiente figura, el inicio se ha realizado correctamente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_1.png" /></div>

Si tu dispositivo es un dispositivo con arquitectura ARM que ejecuta un sistema Linux como una Raspberry Pi, el enlace de descarga está [aquí](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-arm64.tar.gz).  

Si tu dispositivo es un dispositivo con arquitectura AMD que ejecuta un sistema Linux, haz clic [aquí](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-amd64.tar.gz) para descargarlo.

El inicio de InfluxDB en dispositivos Linux sigue el mismo procedimiento. Entra en el directorio después de la descompresión y ejecútalo:

```bash
./influxd
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_86.png" /></div>

### 1.2 Entra en la página web local de InfluxDB para la configuración

Luego abre una terminal cmd e introduce el siguiente comando para consultar la IP de tu ordenador

```bash
ipconfig
```

Después introduce la IP obtenida en el navegador y añade el puerto 8086 para entrar en la interfaz principal de InfluxDB.

Por ejemplo, mi IP es 192.168.7.183, entonces introduce 192.168.7.183:8086 en el navegador

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_2.png" /></div>

Luego haz clic en "Get Started" y rellena tu propia información. Ten en cuenta que en este paso debes recordar el nombre de usuario y la contraseña que configures.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_3.png" /></div>

Luego haz clic en "Confgure Later"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_4.png" /></div>

Luego haz clic en Data para ver el "Initial Bucket Name" que acabamos de configurar en el paso de rellenar nuestra propia información. Yo rellené reCamera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_5.png" /></div>

Luego haz clic en Setting para configurar el tiempo de retención de los datos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_6.png" /></div>

Haz clic en API Token para ver el Token de tu base de datos, que se utilizará en la configuración posterior de reCamera y en la configuración de la página web del mapa de calor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_7.png" /></div>

## 2.Configuración de reCamera

### 2.1 Conecta reCamera a un dispositivo Linux (Si no estás usando un dispositivo Linux, pasa al siguiente paso y comienza desde el paso 2.2)

Si planeas conectar reCamera a un dispositivo Linux, te sugiero que primero utilices un ordenador con Windows o Mac para conectarte a reCamera y realizar algunos cambios de configuración. De lo contrario, reCamera no podrá conectarse directamente al dispositivo Linux.

Tomando Windows como ejemplo. Introduce 192.168.42.1 en el navegador y luego haz clic en "setting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_87.png" /></div>

Luego haz clic en "Terminal" e introduce el nombre de cuenta "recamera" y tu contraseña.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_88.png" /></div>

Luego ejecútalo en la terminal de recamera (este paso requerirá que introduzcas la contraseña de nuevo):

```bash
sudo rootfs_rw on
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_89.png" /></div>

Luego ejecuta:

```bash
sudo vi /mnt/system/usb-ncm.sh
```

Luego comenta esta línea (primero pulsa la tecla "I" en el teclado para entrar en el modo de escritura, luego usa las teclas de dirección para llegar a esta línea y añade un "#" al principio). /etc/run_usb.sh probe acm >> /tmp/ncm.log 2>&1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_90.png" /></div>

Luego solo guarda y sal (pulsa la tecla ESC en el teclado para salir del modo de escritura y luego introduce ":wq" para guardar y salir).

:::note
Puede dejar de ser efectivo después de varios reinicios y será necesario volver a configurarlo.
:::

### 2.2 Instala programas desde las plataformas SenseCraft en reCamera

En la [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai), navega a **`Applications`** > **`Application Square`**, luego introduce "Real-time Crowd Heatmap" en el cuadro de búsqueda. Encuentra la aplicación llamada "Real-time Crowd Heatmap" y despliega la aplicación en tu reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_92.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_9.png" /></div>

### 2.3 conecta la red e instala el nodo que falta

Después de entrar en el espacio de trabajo, aparecerá esta advertencia. Esto es normal. Haz clic primero en Close. Más tarde necesitaremos instalar un nodo para la reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_10.png" /></div>

Conecta la reCamera a la red (asegúrate de que esté conectada a la misma red que tu ordenador. Esto será muy importante más adelante)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_11.png" /></div>

Luego instala el nodo node-red-contrib-influxdb en la reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_13.png" /></div>

Luego rellena node-red-contrib-influxdb en el cuadro de búsqueda, y la primera versión 0.7.0 es el nodo que necesitamos. Haz clic en Install

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_14.png" /></div>

La instalación tarda bastante tiempo, espera con paciencia; después de que la instalación se complete correctamente, se mostrará como sigue

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_15.png" /></div>

### 2.4 Configura el nodo InfluxDB

En este momento, también necesitamos añadir algo de información de configuración al nodo llamado Write Person Count para encontrar este nodo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_16.png" /></div>

Haz doble clic para abrir el panel de configuración y luego haz clic en el pequeño icono de lápiz que está detrás de server  

:::note
Antes de esto, recuerda que el contenido en las opciones "Organization" y "Bucket" debajo del pequeño lápiz debe ser el mismo que el que configuraste en InfluxDB. "Organization" es tu nombre de usuario en InfluxDB y "Bucket" es el nombre de la base de datos que creaste.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_17.png" /></div>

Después de hacer clic en el pequeño lápiz, necesitamos rellenar la URL y el Token

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_18.png" /></div>

La URL aquí es para rellenar el enlace de la página web de InfluxDB que introdujimos en el primer paso. Por ejemplo, si tu página web es 192.168.7.183:8086, entonces puedes rellenar `http://192.168.7.183:8086` como URL.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_19.png" /></div>

Luego rellena el Token, que es el API Tokens en la página web de InfluxDB de la que hablamos al principio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_20.png" /></div>

Hacemos clic en Copy to Cilpboard y rellenamos el Token copiado en la configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_21.png" /></div>

Después de rellenar, haz clic en Update en la esquina superior derecha. No cambies otros ajustes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_22.png" /></div>

Luego hacemos clic en deployment en la esquina superior derecha para que el cambio que acabamos de hacer surta efecto. Aparecerá una ventana emergente de advertencia y podemos cerrarla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_23.png" /></div>

### 2.5 Ver datos de InfluxDB

En este punto podemos entrar en la interfaz de InfluxDB para ver si aparecen los datos; si tiene éxito, haz clic en Submit y verás el gráfico de líneas de datos; aquí consultamos la cantidad de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_24.png" /></div>

## 3.Configuración de Grafana

### 3.1 Instalación de Grafana

#### 3.1.1 Sistema Windows

Entra en la página oficial de Grafana [Grafana get started | Cloud, Self-managed, Enterprise](https://grafana.com/get/) para descargar el paquete de instalación localmente. La versión que descargué aquí es la 12.3.0

:::note
Recuerda, ¡¡¡Grafana debe instalarse en la unidad C aquí!!! De lo contrario, no podrás modificar su archivo de configuración más tarde.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_25.png" /></div>

Después de descargar e instalar, Grafana debería ejecutarse automáticamente en segundo plano; puedes abrir el "service" del ordenador para ver si se está ejecutando.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_26.png" /></div>

#### 3.1.2 Sistema Linux

Si tu dispositivo es un dispositivo basado en ARM que ejecuta Linux, como una Raspberry Pi, entonces el enlace de descarga está [aquí](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_arm64.tar.gz)  

Si tu dispositivo es un dispositivo basado en AMD que ejecuta el sistema Linux, descarga desde el enlace [aquí](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_amd64.tar.gz)

Luego, descomprime el archivo tar.gz que has descargado.

### 3.2 Modificar defaults.ini para permitir que Grafana inserte HTML

#### 3.2.1 Sistema Windows

Navega al directorio "grafana/conf", localiza el archivo "defaults.ini" y haz clic derecho para abrirlo con el Bloc de notas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_80.png" /></div>

Pulsa Ctrl + F, busca "disable_sanitize_html", cambia el original "disable_sanitize_html = false" a "disable_sanitize_html = true" para permitir que Grafana inserte html. Después de hacer la modificación, guarda y sal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_81.png" /></div>

#### 3.2.2 Sistema Linux

Para el sistema Linux, defaults.ini también se encuentra en el directorio conf.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_82.png" /></div>

Haz clic derecho y selecciona abrir con una aplicación similar al Bloc de notas. Luego, encuentra esta frase en la imagen y cambia el "false" original a "true".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_83.png" /></div>

### 3.3 Iniciar Grafana

Para el sistema Windows, si has instalado Grafana, solo necesitas comprobar en la sección "Services" si Grafana se está ejecutando como se describe en el Paso 3.1.1. Generalmente, Grafana se iniciará automáticamente después de la instalación.  

Para el sistema Linux, Grafana debe iniciarse manualmente. Después de entrar en el directorio del archivo de grafana descomprimido, ejecuta el siguiente comando:

```bash
./bin/grafana-server
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_84.png" /></div>

### 3.4 Configurar la fuente de datos

Después de confirmar que Grafana se está ejecutando, en este punto, puedes acceder a la interfaz local de Grafana visitando `http://localhost:3000` en el navegador para la configuración. Primero, necesitas iniciar sesión. El nombre de usuario y la contraseña iniciales son ambos admin. Después de iniciar sesión, el sistema te pedirá que cambies tu nueva contraseña. Por favor, recuerda tu contraseña. La cuenta seguirá siendo admin y no cambiará.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_91.png" /></div>

Después de iniciar sesión, hacemos clic en "Data sources" en el lado izquierdo y luego seleccionamos "Add new data source"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_76.png" /></div>

Luego selecciona "InfluxDB"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_77.png" /></div>

A continuación, necesitas hacer las siguientes seis modificaciones:
(1) "Query language" seleccionado como "Flux"
(2) Introduce la URL de la página web de tu base de datos, que es el enlace a la página web de InfluxDB a la que accediste en el primer paso. Por ejemplo, si la dirección de tu página web es 192.168.7.183:8086, entonces la URL que debes rellenar es `http://192.168.7.183:8086`.
(3) Desactiva la opción "Basic auth"
(4) "Organization" debe rellenarse con el nombre de usuario que utilizaste al registrar la base de datos.
(5) Token debe rellenarse con el API Tokens mencionado en la página web de InfluxDB como discutimos en el paso 2.3.
(6) "Default Bucket" debe rellenarse con el nombre de la base de datos que has creado.  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_85.png" /></div>

Una vez que todo esté listo, haz clic en "Save & Test". Si la prueba es exitosa, mostrará "datasource is working". En este punto, puedes pasar directamente al siguiente paso. Estos ajustes se guardarán automáticamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_79.png" /></div>

### 3.5 Importar Dashboard

Haz clic en Dashboards

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_27.png" /></div>

Luego haz clic en New dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_28.png" /></div>

Selecciona Import dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_29.png" /></div>

Por favor, descarga el proyecto que subí a [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git). Después de descargarlo y extraerlo, localiza el "Grafana Json File" que contiene "reCamera Heatmap-1766213863140.json". Este archivo es el que necesitamos importar en Grafana.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_30.png" /></div>

Después de importar, deberías poder ver el siguiente efecto (si no ves la siguiente pantalla, por favor ve a la sección de FAQ al final del artículo, allí habrá una solución)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_31.png" /></div>

## 4. Uso del software de calibración en python

Recuerda descargar primero mi proyecto en [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git). Después de extraerlo y abrirlo, localiza la carpeta llamada "Heatmap area calibration", que contiene tres archivos: calibration_tool.py es el programa de calibración, R1.jpg es la imagen original capturada por reCamera y R2.png es el plano de la habitación que dibujé.

### 4.1 Obtener una imagen de resolución nativa actual desde la reCamera

¡Obtener la imagen de resolución original es importante! Aunque los pasos serán más engorrosos, afecta directamente a la precisión de posicionamiento del mapa de calor. ¡Por favor, ten paciencia con la operación!

#### 4.1.1 Usar reCamera para tomar fotos

Vuelve a la interfaz del espacio de trabajo de reCamera y detén primero el programa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_32.png" /></div>

Luego encuentra el nodo capture en la izquierda, arrástralo detrás del nodo camera y conéctalos con líneas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_33.png" /></div>

Luego haz doble clic para abrir el nodo capture, modifica las dos opciones siguientes (la función de este nodo es tomar una foto cada 2 s y almacenarla localmente en la reCamera), luego haz clic en Finish y vuelve a desplegar, y haz clic en Run. Después de ejecutarse durante tres o cuatro segundos, haz clic en Stop Running (no necesita ejecutarse todo el tiempo, de lo contrario estará tomando fotos todo el tiempo). A continuación, moveremos las fotos que toma al ordenador local.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_34.png" /></div>

#### 4.1.2 Trasladar las fotos tomadas por reCamera a nuestro ordenador

Veamos si la foto que acabamos de tomar se ha realizado correctamente.

Haz clic en Setting

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_35.png" /></div>

Haz clic en Terminal e introduce la contraseña de la cuenta de reCamera para iniciar sesión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_36.png" /></div>

Luego introduce los siguientes dos comandos por turno:

Entra en la carpeta Images

```bash
cd / && cd userdata/Images/
```

Listar archivos

```bash
ls
```

Entonces deberías ver que el sistema lista algunos nombres de archivos de imágenes, que son las imágenes que el nodo de captura acaba de tomar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_37.png" /></div>

Vuelve a la interfaz de configuración de justo ahora y abre la conexión ssh.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_38.png" /></div>

Luego presiona Win R en el teclado, introduce cmd y después introduce en la terminal

```bash
scp -r recamera@<reCamera IP>:/userdata/Images "The folder path of the 'Heatmap area calibration' file that you downloaded from GitHub after decompression"
```

La reCamera de estas IP se puede encontrar en la configuración de red

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_39.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_40.png" /></div>

La ruta de la carpeta del archivo 'Heatmap area calibration' que descargaste de GitHub después de descomprimirlo, primero entramos en Heatmap area calibration, hacemos clic en el cuadro de ruta encima de la carpeta y copiamos la ruta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_41.png" /></div>

Por ejemplo:

```bash
scp -r recamera@10.228.172.71:/userdata/Images "C:\Users\seeed\Desktop\热力图\正式版\reCamera with Heatmap\Heatmap area calibration"
```

Luego introduce la contraseña de reCamera para descargar a la ruta que elijas

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_42.png" /></div>

Vuelve a la carpeta que acabas de descargar y verás la carpeta Images que acabas de descargar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_43.png" /></div>

Ahora elimina el R1.jpg original de mi proyecto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_44.png" /></div>

Elegimos la imagen más reciente, normalmente la última imagen, y la renombramos como R1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_45.png" /></div>

Luego coloca esta imagen en el directorio superior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_46.png" /></div>

### 4.2 Preparar el plano de la habitación

Puedes usar las propias herramientas de dibujo de Windows para dibujar y guardar como imágenes y almacenarlas bajo la ruta de Heatmap area calibration, o almacenar directamente tu plano de habitación existente bajo la ruta de Heatmap area calibration. En este paso, también debes recordar eliminar R2.png de mi proyecto anterior y renombrar tu imagen como R2 y almacenarla bajo esta ruta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_47.png" /></div>

### 4.3 Uso del procedimiento de calibración

El programa de calibración es el programa calibration_tool.py de Heatmap bajo la ruta de calibración de área.

Aquí uso Pycharm por defecto. Antes de usarlo, necesito instalar la biblioteca OpenCV de Python.

```bash
pip install opencv-python
```

Hay dos puntos a tener en cuenta: primero, las dos imágenes deben estar bajo la misma ruta, es decir, bajo la ruta de Heatmap area calibration; en segundo lugar, comprueba si el nombre del archivo de imagen es correcto

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_48.png" /></div>

Después de que el programa se ejecute, aparecerá una ventana para mostrar la captura de pantalla de tu cámara. En este momento, necesitas hacer clic con el ratón en el área efectiva. La secuencia de clics es muy importante: haz clic en las cuatro esquinas del área que deseas seleccionar en la secuencia en el sentido de las agujas del reloj de "superior izquierda -> superior derecha -> inferior derecha -> inferior izquierda". Por ejemplo, si solo quieres mostrar la superficie de la mesa, haz clic en las cuatro esquinas de la mesa. Después de 4 puntos, presiona cualquier tecla en el teclado (como la barra espaciadora) para entrar en el siguiente paso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_49.png" /></div>

A continuación, aparecerá una segunda ventana para mostrar tu mapa de vista cenital R2.png. La secuencia de clics debe corresponder al primer paso: haz clic en las posiciones correspondientes de los cuatro puntos en el mapa de justo ahora. Por ejemplo, la esquina superior izquierda de la mesa se hizo clic primero hace un momento, y ahora se hace clic en la esquina superior izquierda de la mesa en el mapa. Después de 4 puntos, presiona cualquier tecla para finalizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_50.png" /></div>

Luego vuelve a la ventana de la línea de comandos (CMD), verás que el script genera automáticamente un fragmento de código JS, copia directamente ese código y reemplaza en tu index.html `const CALIBRATION = { ... };` y listo. (No se utilizará hasta el siguiente paso de "5.5 los datos de coordenadas calibrados", así que no le prestes atención)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_51.png" /></div>

## 5. Configuración de la página del mapa de calor

La configuración web para el mapa de calor también está disponible en [my GitHub project](https://github.com/xr686/reCamera-with-Heatmap.git), específicamente en la carpeta heatmap-demo, en el archivo index.html. También necesitamos modificar varias secciones en este archivo; de lo contrario, no podrá ejecutarse correctamente ni recibir los datos de coordenadas del mapa de calor.

### 5.1 Configuración de parámetros de la página web para el mapa de calor

#### 5.1.1 Imagen del mapa de calor

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_52.png" /></div>

Por favor, reemplaza el nombre de archivo por el de tu imagen real

#### 5.1.2 La configuración de la parte de la base de datos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_53.png" /></div>

##### Explicación de parámetros

La URL es la dirección web del InfluxDB que abres.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_54.png" /></div>

ORG es el nombre de usuario cuando configuras InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_55.png" /></div>

BUCKET es el nombre de la base de datos que creaste en InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_56.png" /></div>

TOKEN es tu InfluxDB API Tokens, por favor reemplaza el 12345678 original en el HTML con tu Token real

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_57.png" /></div>

#### 5.1.3 Intervalo de actualización de los datos térmicos y período de consulta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_58.png" /></div>

##### Explicación de parámetros

REFRESH_INTERVAL se refiere al número de milisegundos para actualizar, DATA_RANGE se refiere al tiempo de consulta en los datos pasados. Los valores predeterminados "3000" y "-3s" en el código, donde "3000" significa 3000 milisegundos, es decir, se actualiza cada 3 segundos, mientras que "-3s" significa consultar los datos de coordenadas térmicas de los últimos 3 s.

##### Selección de modo

Hay dos modos que se pueden configurar:

(1) "modo en tiempo real": las coordenadas térmicas se actualizarán y borrarán las coordenadas anteriores en tiempo real sin superposición acumulativa. Para realizar el modo en tiempo real, necesitas configurar DATA_RANGE a un tiempo corto. Por ejemplo, mis valores predeterminados "-3s" y "-3s" significan consultar los datos de coordenadas térmicas de los últimos 3 s, por ejemplo, el programa ha estado ejecutándose durante 10 s ahora, entonces cuando configuras DATA_RANGE a -3s, los datos de coordenadas mostrados por el diagrama térmico son los datos del segundo 8 al 10, y los datos de coordenadas de los segundos 1 al 7 anteriores no se mostrarán;

(2) "modo acumulativo": las coordenadas térmicas se actualizarán en tiempo real pero las coordenadas anteriores se superpondrán. Para realizar el modo acumulativo, necesitas configurar DATA_RANGE a un tiempo más largo, por ejemplo, puedes configurar DATA_RANGE a "-1h", entonces el diagrama térmico mostrará acumulativamente los datos de la última 1 h. Después de que el programa se ejecute durante 2 horas, ahora se muestran los datos de la segunda hora, y los datos de la primera hora no se muestran.

#### 5.1.4 Resolución de la cámara

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_59.png" /></div>

##### Explicación de parámetros

CAM_WIDTH / CAM_HEIGHT: aquí se debe rellenar la resolución de la transmisión real de la cámara (por ejemplo, 1920x1080 o 1280x720), de lo contrario la transformación de perspectiva será incorrecta.

Este parámetro también se presenta en el paso de "4.1.1 usar reCamera para tomar fotos". Cuando conectamos el nodo de la cámara con el nodo de captura, puedes ver el parámetro Resolution del nodo de la cámara. Este es el parámetro de resolución que necesitas modificar. Si aquí se selecciona 1920 × 1080, entonces en el código, debes modificar CAM WIDTH a 1920 y CAM HEIGHT a 1080

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_60.png" /></div>

#### 5.1.5 Datos de coordenadas de la calibración

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_61.png" /></div>

Este es el código generado en la consola después de que el programa de Python se ejecuta en el paso anterior "uso del programa de calibración 4.3". reemplaza este código

#### 5.1.6 Umbral térmico

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_62.png" /></div>

##### Explicación de parámetros

Sensibilidad (valor máximo): Si está en modo en tiempo real (solo unos pocos puntos), `max` se establece en alrededor de 2, de lo contrario el color es demasiado claro para ver;

Si es una acumulación de 1 hora (miles de puntos), `max` debe establecerse en 150 o superior, de lo contrario el mapa se volverá instantáneamente rojo (sobreexpuesto).

### 5.2 Activar el mapa de calor

Pulsa Win + R, escribe "cmd", entra en la ruta "heatmap-demo" y luego introduce

```bash
python -m http.server 8080
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_72.png" /></div>

Luego, abriendo en el navegador la página web "[InfluxDB Heatmap (Grafana Fix + 1h Accumulation)](http://localhost:8080/index.html)", podrás ver que el mapa se ha cargado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_73.png" /></div>

Este paso también es aplicable a Linux.

## 6. Volver al panel de Grafana y ver el resultado final

En este punto, deberías poder ver la siguiente visualización en el panel de Grafana. Si encuentras algún problema, consulta la sección "Preguntas frecuentes" al final del artículo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_74.png" /></div>

## Preguntas frecuentes

### Fallo al abrir la página web de Grafana

Después de entrar en "Services", busca "Grafana", luego haz clic derecho y selecciona "Restart". Después de eso, simplemente abre de nuevo `http://localhost:3000`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_75.png" /></div>

### El panel de Grafana se carga de forma incorrecta

Si se encuentra en Grafana que el mapa térmico en tiempo real o la pantalla en tiempo real de la reCamera no se pueden cargar o se muestran de forma incorrecta, entonces necesitas hacer clic en el panel con problemas para actualizarlo, tomando como ejemplo el panel del mapa térmico:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_63.png" /></div>

Luego haz clic en Refresh

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_64.png" /></div>

### Hay un problema al cargar el mapa térmico

Si encuentras el problema de carga del mapa térmico, primero comprueba si todos los elementos de configuración en este paso son correctos. Si todos los elementos de configuración son correctos y sigue habiendo un problema con la carga del mapa térmico, pulsa la tecla F12 en la interfaz de [InfluxDB Heatmap (Grafana Fix 1h Accumulation)](http:// localhost:8080/index.html) para ver la salida de la consola web y así solucionar el problema.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_65.png" /></div>

### Aparece tirones en la imagen en tiempo real de la reCamera

Si descubres que la imagen en tiempo real de la reCamera se queda congelada y aparece "WebSocket:Disconnected" después de funcionar durante un tiempo, esto es un fenómeno normal, los recursos de la reCamera son limitados y la memoria se llenará demasiado. Espera a que vuelva a reanudar la visualización.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_66.png" /></div>

### El "Current Number" y el "Number of People Today" en el panel de Grafana se muestran de forma incorrecta

Este es un fenómeno normal, porque habrá interferencias de ruido, y el valor volverá a la normalidad después de un período de tiempo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_67.png" /></div>

### Qué significa "continuous running time" en el panel de Grafana

El "continuous running time" aquí se refiere a cuánto tiempo ha estado ejecutándose la base de datos desde el primer día hasta ahora, porque configuré el tiempo de retención de datos de la base de datos de reCamera en InfluxDB en 7 días, por lo que se borrará automáticamente y volverá a contar después de siete días; aquí puedes configurar libremente el tiempo de almacenamiento de datos de cada base de datos en InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_68.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_69.png" /></div>

### Si se pueden exportar los datos

Sí, necesitas seleccionar los datos que necesitas en la interfaz InfluxDB Explore, luego hacer clic en Submit y después hacer clic en Download CSV

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_70.png" /></div>

### Si la dirección IP cambia, por ejemplo si cambias a una red diferente, entonces tendrás que modificar estas secciones en consecuencia.

(1) La dirección IP y el token de verificación del nodo "InfluxDB Out" en Node-RED  
(2) La IP de inicio de sesión de la base de datos InfluxDB, por ejemplo:: http://10.241.1.98:8086/  
(3) La IP de la fuente de datos en Grafana    
(4) La IP en el código HTML del mapa de calor


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
