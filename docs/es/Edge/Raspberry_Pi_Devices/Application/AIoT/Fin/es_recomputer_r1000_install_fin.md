---
description: Este artículo presenta principalmente cómo instalar fin para reComputer R1000

title: reComputer R1000 instalar FIN
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - fin
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_install_fin
last_update:
  date: 07/4/2024
  author: ShuishengPeng
---

## Introducción 
FIN Framework (FIN) es un marco de software con suites de aplicaciones que puede integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden ser integradas por OEMs en una gama de productos y servicios.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" /></center>


Este artículo presenta principalmente cómo instalar FIN en reComputer R1000.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación del Software

* Primero necesitas encontrar tu proveedor para obtener el paquete de instalación de FIN y el archivo de licencia.
* Después de eso, por favor escribe un archivo llamado `fin.service`, que se utilizará para iniciar el servicio FIN en el sistema. Si tu paquete de instalación es un archivo zip, el contenido del archivo `fin.service` es el siguiente:
  ```shell
  [Unit]
  Description=FIN Framework
  After=syslog.target network.target
  StartLimitIntervalSec=0

  [Service]
  Type=simple
  Restart=always
  RestartSec=1
  WorkingDirectory=/opt/finFramework_5.1.6.55
  ExecStart=/usr/bin/java -Xmx512M -cp /opt/finFramework_5.1.6.55/lib/java/sys.jar -Dfan.home=/opt/finFramework_5.1.6.55/ fanx.tools.Fan finStackHost

  [Install]
  WantedBy=multi-user.target

  #systemctl daemon-reload
  #systemctl enable fin
  #systemctl start fin
  ```

## pasos de instalación
**Paso 1**: Ingresa el siguiente comando para instalar FIN:
  ```shell
  sudo apt install openjdk-17-jdk
  cd /opt/
  ## Descomprime el paquete de instalación al directorio /opt
  sudo unzip ~/Desktop/FINFramework_5.1.6.55.zip
  ## Cambia el nombre para que puedas conocer el número de versión
  sudo mv finFramework finFramework_5.1.6.55
  ## Importa archivos de servicio al sistema
  sudo cp ~/Desktop/fin.service /etc/systemd/system/
  sudo systemctl daemon-reload
  sudo systemctl enable fin
  sudo systemctl start fin
  sudo reboot
  ```
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/install_fin.gif" /></center>

**Paso 2**:Después del reinicio. Haz clic en el navegador e ingresa `http://localhost:8080/`. Aparecerá la siguiente interfaz, indicando que el primer paso de la instalación fue exitoso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/login.png" /></center>

**Paso 3**:El nombre de usuario y contraseña iniciales son ambos `su`. Haz clic en el botón de inicio de sesión para ingresar. Después de un inicio de sesión exitoso, se te pedirá que restablezcas tu contraseña.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/change_passwd.gif" /></center>

**Paso 4**:Después de iniciar sesión, el sistema puede indicar que no hay archivo de licencia. En este momento, necesitas importar el archivo de licencia.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/add_license.gif" /></center>


Después de eso, puedes explorar las diversas funciones de `FIN`.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>