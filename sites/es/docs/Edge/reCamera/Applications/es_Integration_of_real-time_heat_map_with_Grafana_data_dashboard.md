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
sidebar_position: 10
last_update: 
  date: 12/21/2025
  author: Xinrui Wu
---

# Integración de mapa de calor en tiempo real con panel de datos de Grafana

## Introducción

Este proyecto realiza detección de objetivos utilizando el modelo YOLO11n integrado en reCamera. Realiza procesamiento difuso en objetivos de personal y muestra un efecto de mapa de calor. ¡Todo esto se maneja localmente dentro de reCamera! Y reCamera enviará los datos detectados a la base de datos Influxdb que se ejecuta localmente. Luego, Grafana lee los datos de la base de datos Influxdb para mostrar paneles de datos en tiempo real.

Aquí está el efecto de uso después de completar esta demostración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif" /></div>

## Preparación de Hardware

Una reCamera
una computadora

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1.Configuración de InfluxDB

### 1.1 Descargar InfluxDB2-2.1.1 e iniciar

Ve al [enlace](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-windows-amd64.zip) de descarga, descárgalo y extráelo. Presiona Win + R para abrir el Símbolo del sistema, luego ingresa al directorio donde se extrajo el archivo, y finalmente escribe:

```bash
influxd
```

Como se muestra en la siguiente figura, el inicio es exitoso

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_1.png" /></div>

Si tu dispositivo es un dispositivo de arquitectura ARM que ejecuta un sistema Linux como una Raspberry Pi, el enlace de descarga está [aquí](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-arm64.tar.gz).  

Si tu dispositivo es un dispositivo de arquitectura AMD que ejecuta un sistema Linux, por favor haz clic [aquí](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-amd64.tar.gz) para descargar.

Para el inicio de InfluxDB en dispositivos Linux, se aplica el mismo procedimiento. Ingresa al directorio después de la descompresión y ejecútalo:

```bash
./influxd
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_86.png" /></div>

### 1.2 Ingresar a la página web local de InfluxDB para configuración

Luego abre una terminal cmd e ingresa el siguiente comando para consultar la IP de tu computadora

```bash
ipconfig
```

Luego ingresa la IP consultada en el navegador, después agrega el puerto 8086 para ingresar a la interfaz principal de InfluxDB.

Por ejemplo, mi IP es 192.168.7.183, entonces ingreso 192.168.7.183:8086 en el navegador

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_2.png" /></div>

Luego haz clic en "Get Started" y completa tu propia información. Nota que en este paso, ¡¡asegúrate de recordar el nombre de usuario y contraseña que estableciste!!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_3.png" /></div>

Luego haz clic en "Confgure Later"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_4.png" /></div>

Luego haz clic en Data para ver el "Initial Bucket Name" que acabamos de establecer en el paso de completar nuestra propia información. Yo completé reCamera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_5.png" /></div>

Luego haz clic en Setting para establecer el tiempo de retención de datos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_6.png" /></div>

Haz clic en API Token para ver el Token de tu base de datos, que se utilizará en la configuración de reCamera posterior y la configuración de la página web del mapa de calor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_7.png" /></div>

## 2.Configuración de reCamera

### 2.1 Conectar reCamera a un dispositivo Linux (Si no estás usando un dispositivo Linux, por favor procede al siguiente paso y comienza desde el paso 2.2)

Si planeas conectar reCamera a un dispositivo Linux, sugiero que primero uses una computadora Windows o Mac para conectarte a reCamera y hacer algunos cambios de configuración. De lo contrario, reCamera no podrá conectarse directamente al dispositivo Linux.

Tomando Windows como ejemplo. Ingresa 192.168.42.1 en el navegador, y luego haz clic en "setting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_87.png" /></div>

Luego haz clic en "Terminal", e ingresa el nombre de cuenta "recamera" y tu contraseña.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_88.png" /></div>

Luego ejecútalo en la terminal de recamera (este paso requerirá que ingreses la contraseña nuevamente):

```bash
sudo rootfs_rw on
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_89.png" /></div>

Luego ejecuta:

```bash
sudo vi /mnt/system/usb-ncm.sh
```

Luego comenta esta línea (primero presiona la tecla "I" en el teclado para ingresar al modo de escritura, luego usa las teclas de dirección para llegar a esta línea, y agrega un "#" al principio). /etc/run_usb.sh probe acm >> /tmp/ncm.log 2>&1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_90.png" /></div>

Luego simplemente guarda y sal (presiona la tecla ESC en el teclado para salir del modo de escritura, y luego ingresa ":wq" para guardar y salir).

:::note
Puede volverse inefectivo después de múltiples reinicios y necesita ser restablecido.
:::

### 2.2 Instalar programas desde las plataformas SenseCraft en reCamera

Ve a la [plataforma SenseCraft](https://sensecraft.seeed.cc/ai/home) - Application - cuadro de búsqueda e ingresa "Real-time Crowd Heatmap" para buscar, encuentra la aplicación llamada "Real-time Crowd Heatmap" y despliégala en tu reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_92.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_9.png" /></div>

### 2.3 conectar la red e instalar el nodo faltante

Después de ingresar al espacio de trabajo, aparecerá esta advertencia. Esto es normal. Haz clic en Close primero. Más tarde necesitamos instalar un nodo para reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_10.png" /></div>

Conecta reCamera a la red (¡¡asegúrate de que esté conectada a la misma red que tu computadora!! Esto es muy importante más tarde)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_11.png" /></div>

Luego instala el nodo node-red-contrib-influxdb en reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_13.png" /></div>

Luego completa node-red-contrib-influxdb en el cuadro de búsqueda, y la primera versión 0.7.0 es el nodo que necesitamos. Haz clic en Install

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_14.png" /></div>

La instalación toma mucho tiempo, por favor espera pacientemente, después de que la instalación sea exitosa, se mostrará como sigue

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_15.png" /></div>

### 2.4 Configurar Nodo InfluxDB

En este momento, también necesitamos agregar alguna información de configuración al nodo llamado Write Person Count para encontrar este nodo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_16.png" /></div>

Haz doble clic para abrir el panel de configuración, luego haz clic en el pequeño ícono de lápiz detrás del servidor  

:::note
Antes de esto, ¡¡¡recuerda que el contenido en las opciones "Organization" y "Bucket" debajo del pequeño lápiz es el mismo que lo que configuraste en InfluxDB!!! "Organization" es tu nombre de usuario en InfluxDB, y "Bucket" es el nombre de la base de datos que creaste.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_17.png" /></div>

Después de hacer clic en el pequeño lápiz, necesitamos completar la URL y el Token

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_18.png" /></div>

La URL aquí es para llenar el enlace de la página web de InfluxDB que ingresamos en el primer paso. Por ejemplo, si tu página web es 192.168.7.183:8086, entonces puedes llenar `http://192.168.7.183:8086` para la URL.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_19.png" /></div>

Luego llena el Token, que es el API Tokens en la página web de InfluxDB de la que hablamos al principio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_20.png" /></div>

Hacemos clic en Copy to Cilpboard y llenamos el Token copiado en la configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_21.png" /></div>

Después de llenar, haz clic en Update en la esquina superior derecha. No cambies otras configuraciones.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_22.png" /></div>

Luego hacemos clic en deployment en la esquina superior derecha para hacer que el cambio que acabamos de hacer tome efecto. Hay una ventana emergente de advertencia y podemos cerrarla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_23.png" /></div>

### 2.5 Ver datos de InfluxDB

En este punto podemos entrar a la interfaz de InfluxDB para ver si aparecen los datos, si es exitoso, haz clic en Submit, verás el gráfico de líneas de datos, aquí consultamos el número de datos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_24.png" /></div>

## 3.Configuración de Grafana

### 3.1 Instalación de Grafana

#### 3.1.1 Sistema Windows

Ingresa al sitio web oficial de Grafana [Grafana get started | Cloud, Self-managed, Enterprise](https://grafana.com/get/) para descargar el paquete de instalación localmente. La versión que descargué aquí es 12.3.0

:::note
¡Recuerda, Grafana debe instalarse en la unidad C aquí!!! De lo contrario, no podrás modificar su archivo de configuración más tarde.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_25.png" /></div>

Después de descargar e instalar, Grafana debería ejecutarse automáticamente en segundo plano, puedes abrir los "servicios" de la computadora para ver si está ejecutándose

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_26.png" /></div>

#### 3.1.2 Sistema Linux

Si tu dispositivo es un dispositivo basado en ARM que ejecuta Linux como una Raspberry Pi, entonces el enlace de descarga está [aquí](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_arm64.tar.gz)  

Si tu dispositivo es un dispositivo basado en AMD que ejecuta el sistema Linux, por favor descarga el enlace [aquí](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_amd64.tar.gz)

Luego, descomprime el archivo tar.gz que has descargado.

### 3.2 Modificar defaults.ini para habilitar que Grafana incruste HTML

#### 3.2.1 Sistema Windows

Navega al directorio "grafana/conf", localiza el archivo "defaults.ini", y haz clic derecho para abrirlo con el Bloc de notas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_80.png" /></div>

Presiona Ctrl + F, busca "disable_sanitize_html", cambia el original "disable_sanitize_html = false" a "disable_sanitize_html = true" para habilitar que Grafana incruste html. Después de hacer la modificación, guarda y sal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_81.png" /></div>

#### 3.2.2 Sistema Linux

Para el sistema Linux, defaults.ini también se encuentra en el directorio conf.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_82.png" /></div>

Haz clic derecho y selecciona abrir con una aplicación similar al Bloc de notas. Luego, encuentra esta oración en la imagen y cambia el original "false" a "true".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_83.png" /></div>

### 3.3 Iniciar Grafana

Para el sistema Windows, si has instalado Grafana, solo necesitas verificar en la sección "Servicios" si Grafana está ejecutándose como se describe en el Paso 3.1.1. Generalmente, Grafana se iniciará automáticamente después de la instalación.  

Para el sistema Linux, Grafana necesita iniciarse manualmente. Después de entrar al directorio del archivo grafana descomprimido, ejecuta el siguiente comando:

```bash
./bin/grafana-server
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_84.png" /></div>

### 3.4 Configurar fuente de datos

Después de confirmar que Grafana está ejecutándose, en este punto, puedes acceder a la interfaz local de Grafana visitando `http://localhost:3000` en el navegador para la configuración. Primero, necesitas iniciar sesión. El nombre de usuario y contraseña iniciales son ambos admin. Después de iniciar sesión, el sistema te pedirá que cambies tu nueva contraseña. Por favor recuerda tu contraseña. La cuenta seguirá siendo admin y no cambiará.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_91.png" /></div>

Después de iniciar sesión, hacemos clic en "Data sources" en el lado izquierdo, y luego seleccionamos "Add new data source"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_76.png" /></div>

Luego selecciona "InfluxDB"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_77.png" /></div>

A continuación, necesitas hacer las siguientes seis revisiones:
(1) "Query language" seleccionado como "Flux"
(2) Ingresa la URL de tu página web de base de datos, que es el enlace a la página web de InfluxDB que accediste en el primer paso. Por ejemplo, si la dirección de tu página web es 192.168.7.183:8086, entonces la URL que debes llenar es `http://192.168.7.183:8086`.
(3) Deshabilita la opción "Basic auth"
(4) "Organization" debe llenarse con el nombre de usuario que usaste al registrar la base de datos.
(5) Token debe llenarse con los API Tokens mencionados en la página web de InfluxDB como discutimos en el paso 2.3.
(6) "Default Bucket" debe llenarse con el nombre de la base de datos que has creado.  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_85.png" /></div>

Una vez que todo esté listo, haz clic en "Save & Test". Si la prueba es exitosa, mostrará "datasource is working". En este punto, puedes proceder directamente al siguiente paso. Estas configuraciones se guardarán automáticamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_79.png" /></div>

### 3.5 Importar Dashboard

Haz clic en Dashboards

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_27.png" /></div>

Luego haz clic en New dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_28.png" /></div>

Selecciona Import dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_29.png" /></div>

Por favor descarga el proyecto que subí a [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git). Después de descargar y extraer, localiza el "Grafana Json File" que contiene "reCamera Heatmap-1766213863140.json" en él. Este archivo es el que necesitamos importar a Grafana.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_30.png" /></div>

Después de importar, deberías poder ver el siguiente efecto (si no ves la siguiente pantalla, por favor ve a la sección FAQ al final del artículo, habrá una solución)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_31.png" /></div>

## 4. Uso del software de calibración python

Recuerda primero descargar mi proyecto en [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git). Después de extraer y abrir, localiza la carpeta llamada "Heatmap area calibration", que contiene tres archivos: calibration_tool.py es el programa de calibración, R1.jpg es la imagen original capturada por reCamera, y R2.png es el plano del piso de la habitación que dibujé.

### 4.1 Obtener una imagen de resolución nativa actual de la reCamera

¡¡Obtener la imagen de resolución original es importante!! Aunque los pasos serán más problemáticos, pero afecta directamente la precisión de posicionamiento del mapa de calor! ¡Por favor ten paciencia con la operación!

#### 4.1.1 Usar reCamera para tomar fotos

Regresa a la interfaz del espacio de trabajo de reCamera y detén el programa primero

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_32.png" /></div>

Luego encuentra el nodo capture en la izquierda, arrástralo detrás del nodo camera, y conéctalos con líneas

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_33.png" /></div>

Luego haz doble clic para abrir el nodo capture, modifica las siguientes dos opciones (la función de este nodo es tomar una foto cada 2s y almacenarla localmente en la reCamera), luego haz clic en Finish y redeploy, y haz clic en Run. Después de ejecutar por tres o cuatro segundos, haz clic en Stop Running (no necesita ejecutarse todo el tiempo, de lo contrario tomará fotos todo el tiempo). A continuación, moveremos las fotos que toma a la computadora local.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_34.png" /></div>

#### 4.1.2 Trasplantar las fotos tomadas por reCamera a nuestra computadora

Veamos si la foto que acabamos de tomar fue exitosa.

Haz clic en Setting

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_35.png" /></div>

Haz clic en Terminal e ingresa la contraseña de la cuenta de reCamera para iniciar sesión.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_36.png" /></div>

Luego ingresa los siguientes dos comandos en orden:

Ingresar a la carpeta Images

```bash
cd / && cd userdata/Images/
```

Listar Archivos

```bash
ls
```

Entonces deberías ver que el sistema lista algunos nombres de archivos de imagen, que son las imágenes que acabas de tomar con el nodo de captura.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_37.png" /></div>

Regresa a la interfaz de configuración anterior y abre la conexión ssh.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_38.png" /></div>

Luego presiona Win R en el teclado, ingresa cmd, y luego ingresa en la terminal

```bash
scp -r recamera@<reCamera IP>:/userdata/Images "The folder path of the 'Heatmap area calibration' file that you downloaded from GitHub after decompression"
```

Las IPs de reCamera se pueden encontrar en la configuración de red

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_39.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_40.png" /></div>

La ruta de la carpeta del archivo 'Heatmap area calibration' que descargaste de GitHub después de descomprimirlo, primero ingresamos a Heatmap area calibration, hacemos clic en el cuadro de ruta arriba de la carpeta y copiamos la ruta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_41.png" /></div>

Por ejemplo:

```bash
scp -r recamera@10.228.172.71:/userdata/Images "C:\Users\seeed\Desktop\热力图\正式版\reCamera with Heatmap\Heatmap area calibration"
```

Luego ingresa la contraseña de reCamera para descargar a la ruta de tu elección

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_42.png" /></div>

Regresa a la carpeta que acabas de descargar, y verás la carpeta Images que acabas de descargar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_43.png" /></div>

Ahora elimina el R1.jpg original de mi proyecto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_44.png" /></div>

Elegimos la imagen más reciente, generalmente la última imagen, y la renombramos R1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_45.png" /></div>

Luego coloca esta imagen en el directorio superior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_46.png" /></div>

### 4.2 preparar plano de la habitación

Puedes usar las herramientas de dibujo propias de Windows para dibujar y guardar como imágenes y almacenarlas bajo la ruta Heatmap area calibration, o directamente almacenar tu plano de habitación existente bajo la ruta Heatmap area calibration. En este paso, también debes recordar eliminar R2.png de mi proyecto anterior y renombrar tu imagen R2 y almacenarlas bajo esta ruta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_47.png" /></div>

### 4.3 Uso del Procedimiento de Calibración

El programa de calibración es el programa calibration_tool.py de Heatmap bajo la ruta area calibration.

Uso Pycharm aquí por defecto. Antes de usarlo, necesito instalar la biblioteca OpenCV de Python.

```bash
pip install opencv-python
```

Hay dos puntos a tener en cuenta: primero, las dos imágenes necesitan estar bajo la misma ruta, es decir, bajo la ruta Heatmap area calibration; En segundo lugar, verifica si el nombre del archivo de imagen es correcto

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_48.png" /></div>

Después de que el programa se ejecute, aparecerá una ventana para mostrar tu captura de pantalla de la cámara. En este momento, necesitas hacer clic en el área efectiva con el mouse. La secuencia de clics es muy importante: por favor haz clic en las cuatro esquinas del área que quieres seleccionar en la secuencia horaria de "superior izquierda-> superior derecha-> inferior derecha-> inferior izquierda". Por ejemplo, si solo quieres mostrar la superficie de la mesa, haz clic en las cuatro esquinas de la mesa. Después de 4 puntos, presiona cualquier tecla en el teclado (como espacio) para ingresar al siguiente paso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_49.png" /></div>

A continuación, aparecerá una segunda ventana para mostrar tu mapa de vista superior R2.png. La secuencia de clics debe corresponder al primer paso: haz clic en las posiciones correspondientes de los cuatro puntos en el mapa que acabas de hacer. Por ejemplo, la esquina superior izquierda de la mesa fue la primera en hacer clic anteriormente, y ahora se hace clic en la esquina superior izquierda de la mesa en el mapa. Después de 4 puntos, presiona cualquier tecla para terminar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_50.png" /></div>

Luego regresa a la ventana de línea de comandos (CMD), verás que el script genera automáticamente un fragmento de código JS, copia directamente ese código, reemplaza tu index.html `const CALIBRATION = { ... };` Eso es todo. (No se usará hasta el siguiente paso de "5.5 los datos de coordenadas calibradas", no te preocupes por eso)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_51.png" /></div>

## 5. Configuración de la página del mapa de calor

La configuración web para el mapa de calor también está disponible en [mi proyecto de GitHub](https://github.com/xr686/reCamera-with-Heatmap.git), específicamente en la carpeta heatmap-demo, en el archivo index.html. También necesitamos modificar varias secciones en este archivo; de lo contrario, no podrá ejecutarse correctamente y recibir los datos de coordenadas del mapa de calor.

### 5.1 Configuración de parámetros de página web para mapa de calor

#### 5.1.1 Imagen del Mapa de Calor

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_52.png" /></div>

Por favor reemplaza el nombre del archivo de tu imagen real

#### 5.1.2 la configuración de la parte de la base de datos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_53.png" /></div>

##### Explicación de parámetros

La URL es la dirección web del InfluxDB que abres.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_54.png" /></div>

ORG es el nombre de usuario cuando configuras el InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_55.png" /></div>

BUCKET es el nombre de la base de datos que creaste en InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_56.png" /></div>

TOKEN es tu InfluxDB API Tokens, por favor reemplaza el 12345678 original en HTML con tu Token real

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_57.png" /></div>

#### 5.1.3 Intervalo de Actualización de Datos Térmicos y Período de Consulta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_58.png" /></div>

##### Explicación de parámetros

REFRESH_INTERVAL se refiere al número de milisegundos para actualizar, DATA_RANGE se refiere al tiempo de consulta en los datos pasados. Los valores predeterminados "3000" y "-3s" en el código, donde "3000" significa 3000 milisegundos, es decir, actualizado cada 3 segundos, mientras que "-3s" significa consultar los datos de coordenadas térmicas en los últimos 3s.

##### Selección de modo

Hay dos modos que se pueden configurar:

(1) "modo en tiempo real": las coordenadas térmicas se actualizarán y limpiarán las coordenadas anteriores en tiempo real sin superposición acumulativa. Para realizar el modo en tiempo real, necesitas configurar el DATA_RANGE a un tiempo corto. Por ejemplo, mi predeterminado "-3s" y "-3s" significa consultar los datos de coordenadas térmicas en los últimos 3s, por ejemplo, el programa ha estado ejecutándose durante 10s ahora, entonces cuando configuras el DATA_RANGE a -3s, los datos de coordenadas mostrados por el diagrama térmico son los datos del 8º-10º segundo, y los datos de coordenadas de los 1-7s anteriores no se mostrarán;

(2) "Modo Acumulativo": Las coordenadas térmicas se actualizarán en tiempo real pero las coordenadas anteriores se superpondrán. Para realizar el modo acumulativo, necesitas configurar el DATA_RANGE a un tiempo más largo, por ejemplo, puedes configurar el DATA_RANGE a "-1h", entonces el diagrama térmico mostrará acumulativamente los datos en la última 1h. Después de que el programa se ejecute durante 2 horas, ahora se muestran los datos de la segunda hora, los datos de la primera hora no se muestran.

#### 5.1.4 resolución de la cámara

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_59.png" /></div>

##### Explicación de parámetros

CAM_WIDTH / CAM_HEIGHT: La resolución del streaming real de la cámara (por ejemplo, 1920x1080 o 1280x720) debe llenarse aquí, de lo contrario la transformación de perspectiva será incorrecta.

Este parámetro también se presenta en el paso de "4.1.1 usar reCamera para tomar fotos". Cuando conectamos el nodo de cámara con el nodo de captura, puedes ver el parámetro Resolution del nodo de cámara. Este es el parámetro de resolución que necesitas modificar. Si se selecciona 1920 × 1080 aquí, entonces en el código, debes modificar CAM WIDTH a 1920 y CAM HEIGHT a 1080

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_60.png" /></div>

#### 5.1.5 Datos de coordenadas de calibración

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_61.png" /></div>

Este es el código generado en la consola después de que el programa de Python se ejecute en el paso anterior "uso del programa de calibración 4.3". reemplaza este código

#### 5.1.6 Umbral Térmico

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_62.png" /></div>

##### Explicación de parámetros

Sensibilidad (valor máximo): Si está en modo tiempo real (solo unos pocos puntos), max se establece en aproximadamente 2, de lo contrario el color es demasiado claro para ver;

Si es una acumulación de 1 hora (miles de puntos), max debe establecerse en 150 o más, de lo contrario el mapa se volverá instantáneamente rojo (sobreexpuesto).

### 5.2 Activar el mapa de calor

Presiona Win + R, escribe "cmd", ingresa la ruta "heatmap-demo", y luego introduce

```bash
python -m http.server 8080
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_72.png" /></div>

Luego, al abrir la página web "[InfluxDB Heatmap (Grafana Fix + 1h Accumulation)](http://localhost:8080/index.html)" en el navegador, puedes ver que el mapa ha sido cargado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_73.png" /></div>

Este paso también es aplicable a Linux.

## 6. Regresar al panel de Grafana y ver el resultado final

En este punto, deberías poder ver la siguiente visualización en el panel de Grafana. Si encuentras algún problema, consulta la sección "Preguntas Frecuentes" al final del artículo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_74.png" /></div>

## Preguntas Frecuentes

### La página web de Grafana falló al abrir

Después de ingresar a "Services", encuentra "Grafana", luego haz clic derecho y selecciona "Restart". Después de eso, simplemente abre `http://localhost:3000` nuevamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_75.png" /></div>

### El panel de Grafana se carga incorrectamente

Si se encuentra en Grafana que el mapa térmico en tiempo real o la pantalla en tiempo real de reCamera no se puede cargar o se muestra incorrectamente, entonces necesitas hacer clic en el panel con problemas para actualizar, tomando el panel del mapa térmico como ejemplo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_63.png" /></div>

Luego haz clic en Refresh

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_64.png" /></div>

### Hay un problema cargando el mapa térmico

Si encuentras el problema de cargar el mapa térmico, por favor primero verifica si todos los elementos de configuración en este paso son correctos. Si todos los elementos de configuración son correctos y aún hay un problema con la carga del mapa térmico, por favor presiona la tecla F12 en la interfaz [InfluxDB Heatmap (Grafana Fix 1h Accumulation)](http://localhost:8080/index.html) para ver la salida de la consola web para solucionar problemas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_65.png" /></div>

### Aparece congelamiento en la imagen en tiempo real de reCamera

Si encuentras que la imagen en tiempo real de reCamera se congela y aparece "WebSocket:Disconnected" después de ejecutarse por un tiempo, esto es un fenómeno normal, los recursos de reCamera son limitados y la memoria se llenará demasiado. Espera a que se reanude la visualización.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_66.png" /></div>

### El "Número Actual" y "Número de Personas Hoy" en el panel de Grafana se muestran incorrectamente

Este es un fenómeno normal, porque habrá interferencia de ruido, y el valor volverá a la normalidad después de un período de tiempo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_67.png" /></div>

### Qué significa "tiempo de ejecución continua" en el panel de Grafana

El "tiempo de ejecución continua" aquí se refiere a cuánto tiempo ha estado ejecutándose la base de datos desde el primer día hasta ahora, porque establecí el tiempo de retención de datos de la base de datos reCamera en InfluxDB en 7 días, por lo que se limpiará automáticamente y reiniciará el tiempo después de siete días, aquí puedes establecer libremente el tiempo de almacenamiento de datos de cada base de datos en InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_68.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_69.png" /></div>

### Si los datos se pueden exportar

Sí, necesitas seleccionar los datos que necesitas en la interfaz InfluxDB Explore, luego hacer clic en Submit, y después hacer clic en Download CSV

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_70.png" /></div>

### Si la dirección IP cambia, por ejemplo si cambias a una red diferente, entonces necesitarás modificar estas secciones en consecuencia.

(1) La dirección IP y el token de verificación del nodo "InfluxDB Out" en Node-RED  
(2) La IP de inicio de sesión de la base de datos InfluxDB, por ejemplo: http://10.241.1.98:8086/  
(3) La IP de la fuente de datos en Grafana    
(4) La IP en el código HTML del mapa de calor


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
