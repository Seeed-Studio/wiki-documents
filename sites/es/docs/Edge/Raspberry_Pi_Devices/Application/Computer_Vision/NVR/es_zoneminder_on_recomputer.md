---
description: Este wiki demuestra cómo implementar el sistema de videovigilancia zoneminder en recomputer.
title: Zoneminder en reComputer
keywords:
  - reComputer
  - NVR
  - Zoneminder
  - sistema de videovigilancia
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.webp
slug: /es/zoneminder_on_recomputer
last_update:
  date: 09/05/2025
  author: Jiahao
no_comments: false # for Disqus
---

# Usar Zoneminder en reComputer

## Introducción

[Zoneminder](https://github.com/ZoneMinder/zoneminder) es un software de videovigilancia de código abierto que te permite monitorear y gestionar cámaras de seguridad. Soporta varios tipos de cámaras, incluyendo cámaras IP, webcams USB y cámaras analógicas. ZoneMinder ofrece características como detección de movimiento, grabación de video, notificaciones de alarma y visualización remota a través de una interfaz web. Es altamente personalizable, lo que lo hace adecuado tanto para necesidades de vigilancia personales como profesionales. Además, al ser de código abierto, es gratuito y puede adaptarse a diferentes configuraciones.

## Prerrequisitos

### Requisitos de Hardware

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Descargar Zoneminder

### Actualizar sistema

Ejecuta los siguientes comandos.

```bash
sudo apt update
sudo apt upgrade -y
```

### Instalar MariaDB y realizar la configuración inicial de la base de datos

Ejecuta los siguientes comandos.

```bash
sudo apt install apache2 mariadb-server
```

Cambia al usuario root y crea la base de datos y el usuario de la base de datos.

```bash
sudo su
mariadb
CREATE DATABASE zm;
CREATE USER zmuser@localhost IDENTIFIED BY 'zmpass';
GRANT ALL ON zm.* TO zmuser@localhost;
FLUSH PRIVILEGES;
exit;
exit
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_1.png" alt="pir" width="1000" height="auto"/></p>

Por defecto MariaDB usa [autenticación de socket unix](https://mariadb.com/kb/en/authentication-plugin-unix-socket/), por lo que no se requiere contraseña de usuario root (el acceso del usuario root de MariaDB solo está disponible para el usuario root local de Linux). Si lo deseas, puedes establecer una contraseña root de MariaDB (y aplicar otros ajustes de seguridad) ejecutando [mariadb-secure-installation](https://mariadb.com/kb/en/mysql_secure_installation/).

### Instalar Zoneminder

Por defecto Debian instalará la versión publicada en Debian (estable). Sin embargo, puede haber versiones más nuevas usando backports. Al momento de escribir esto, bookworm (estable) viene con v.1.36.33.

Para instalar la versión en bookworm estable, simplemente ejecuta el siguiente comando.

```bash
sudo apt install zoneminder
```

Si en su lugar prefieres instalar la versión más nueva usando backports, ejecuta los siguientes comandos. La primera línea agregará este repositorio bookworm-backports. El repositorio backports está desactivado por defecto, así que con la segunda línea declaramos explícitamente que queremos la versión backported de zoneminder.

```bash
sudo bash -c "echo 'deb http://deb.debian.org/debian bookworm-backports main contrib' >> /etc/apt/sources.list"
sudo apt update
sudo apt -t bookworm-backports install zoneminder
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_2.png" alt="pir" width="1000" height="auto"/></p>

## Configurar Zoneminder

### Configurar base de datos

Ejecuta los siguientes comandos, usa `zmpass` como contraseña.

```bash
mariadb -u zmuser -p zm < /usr/share/zoneminder/db/zm_create.sql
```

### Configurar permisos para zm.conf

Para asegurarte de que zoneminder pueda leer el archivo de configuración, ejecuta el siguiente comando.

```bash
sudo chgrp -c www-data /etc/zm/zm.conf
```

### Ajustar configuración de Apache

```bash
sudo a2enconf zoneminder
sudo a2enmod cgi
sudo systemctl reload apache2.service
sudo systemctl restart zoneminder.service
sudo systemctl status zoneminder.service
sudo systemctl enable zoneminder.service   
```

Si el zoneminder.service muestra estar activo y sin errores, deberías poder acceder a zoneminder en `http://yourhostname/zm`

### Configurar Zoneminder

Agrega la fuente de video al zoneminder.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zm_3.png" alt="pir" width="1000" height="auto"/></p>

## Resultado

Una vez que hayamos configurado todo, podemos ver la transmisión en vivo de la cámara actual, y cuando se detecte movimiento, será grabado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/zoneminder/zone_m.gif" alt="pir" width="1000" height="auto"/></p>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
