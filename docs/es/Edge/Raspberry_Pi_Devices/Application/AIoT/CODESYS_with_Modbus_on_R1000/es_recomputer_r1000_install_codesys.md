---
description: Este artículo presenta principalmente cómo instalar CODESYS y cómo desplegar nuevos proyectos en R1000

title: Cómo instalar CODESYS para reComputer R1000
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_install_codesys
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introducción

CODESYS es una plataforma popular de software de desarrollo de automatización ampliamente utilizada en sistemas de control industrial y automatización. Su nombre completo es Controller Development System, que fue desarrollado por primera vez por la empresa alemana 3S-Smart Software Solutions.
Este artículo presenta principalmente cómo descargar e instalar CODESYS, y finalmente desplegar el proyecto CODESYS en reComputer R1000

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

## Preparación del Hardware

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

## Preparación del Software

- [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
- [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## Comenzar

### Instalar CODESYS

**Paso 1**: Ve a la tienda de CODESYS, busca `CODESYS Development System V3` y descárgalo, luego busca `CODESYS Control for Raspberry Pi SL` y descárgalo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png" /></center>

**Paso 2**: Haz doble clic en el archivo descargado `CODESYS 64 3.5.20.30.exe` y haz clic en `install` para descargar el `CODESYS Installer`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png" /></center>

**Paso 3**: Después de que se descargue el `CODESYS Installer`, aparecerá automáticamente el `InstallShield Wizard`. Haz clic en `Next` para comenzar a instalar `CODESYS`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" /></center>

**Paso 4**: Haz clic para aceptar la licencia, luego haz clic en `Next` para proceder al siguiente paso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png" /></center>

**Paso 5**: Haz clic en `I have read the information`, luego haz clic en `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png" /></center>

**Paso 6**: Modifica el directorio de instalación y haz clic en `Next` después de completar la modificación.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png" /></center>

**Paso 7**: Selecciona `Complete` para instalar completamente CODESYS, luego haz clic en `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png" /></center>

**Paso 8**: Haz clic en `Install` para comenzar la instalación. Tomará algo de tiempo, solo espera a que se complete la instalación

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png" /></center>

### Actualizar paquetes de dependencias

**Paso 1**: Después de completar la instalación, abre `CODESYS V3.5 SP20 Patch 3`, haz clic en `Tools`--->`CODESYS Installer..`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png" /></center>

**Paso 2**: En la nueva ventana, haz clic en `Install File(s)`, luego selecciona el paquete a instalar. Después de seleccionar, el paquete será analizado

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png" /></center>

**Paso 3**: Haz clic en `I accept the license agreement(s)`, luego haz clic en `Continue` para comenzar la instalación

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png" /></center>

**Paso 4**: Aparecerá una ventana emergente, pidiendo que cierres `CODESYS V3.5 SP20 Patch 3`. Cierra CODESYS y luego haz clic en `OK`. CODESYS comenzará a instalar el nuevo paquete.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png" /></center>

**Paso 5**: Espera a que se complete la instalación

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png" /></center>

### Despliegue del tiempo de ejecución de CODESYS

CODESYS Runtime se refiere al sistema de tiempo de ejecución de CODESYS, que es el software instalado en el dispositivo objetivo para ejecutar el programa PLC creado con el entorno de desarrollo CODESYS. CODESYS Runtime convierte el dispositivo objetivo (como sistemas embebidos, computadoras industriales, Raspberry Pi, etc.) en un controlador lógico programable (PLC).

**Paso 1**: Asegúrate de que reComputer R1000 y la computadora host estén en el mismo segmento de red

**Paso 2**: Haz clic en `Tools`--->`Update Raspberry Pi`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png" /></center>

**Paso 3**: Ingresa el nombre de usuario y contraseña de reComputer R1000, dirección IP, luego haz clic en Install para descargar `run time` a reComputer R1000, y finalmente haz clic en `Start` para iniciar `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png" /></center>

**Paso 4**: Cuando aparezca el siguiente mensaje en la barra de mensajes, significa que reComputer R1000 ha ejecutado exitosamente `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png" /></center>

### Desplegar un nuevo proyecto

**Paso 1**: Haz clic en `File`--->`New project` para crear un nuevo proyecto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png" /></center>

**Paso 2**: Ingresa el nombre del proyecto, selecciona `Project`--->`Standard project`, y finalmente haz clic en `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png" /></center>

**Paso 3**: Selecciona `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` en la columna `Device`, selecciona `Structured Text (ST)` en `PLC_PRG in`, y finalmente haz clic en `OK`. Se crea un nuevo proyecto. Más adelante, demostraremos cómo desplegar el proyecto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png" /></center>

**Paso 4**: Después de crear el proyecto, haz doble clic en él. En la nueva ventana emergente, haz clic en `Scan Network`, que puede encontrar el reComputer R1000 en el mismo segmento de red.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png" /></center>

**Paso 5**: Selecciona R1000 y haz clic en `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png" /></center>

**Paso 6**: En la ventana `Add Device User`, completa el nombre de usuario y contraseña del reComputer R1000, y finalmente haz clic en `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png" /></center>

**Paso 7**: Luego aparecerá la ventana `Device User Login`, completa el nombre de usuario y contraseña del reComputer R1000 nuevamente, y finalmente haz clic en OK

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png" /></center>

**Paso 8**: Después de que la conexión sea exitosa, puedes ver que las luces de estado están todas en verde

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png" /></center>

**Paso 9**: Haz clic en el botón Deploy en la barra de herramientas como se muestra para compilar y desplegar el proyecto actual al reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png" /></center>

**Paso 10**: Haz clic en el botón Start en la barra de herramientas para iniciar el proyecto actual en el reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png" /></center>

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
