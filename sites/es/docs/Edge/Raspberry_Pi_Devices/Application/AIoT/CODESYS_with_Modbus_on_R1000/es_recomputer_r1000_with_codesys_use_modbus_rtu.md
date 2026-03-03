---
description: Este artículo presenta principalmente cómo usar la función modbus rtu del reComputer R1000 basado en CODESYS
title: Cómo usar CODESYS para configurar la función Modbus rtu del R1000
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_use_modbus_rtu_with_codesys
last_update:
  date: 10/10/2024
  author: ShuishengPeng
---
## Introducción

Este artículo presenta principalmente cómo usar la función modbus rtu del reComputer R1000 basado en CODESYS. Utilizaremos los dos puertos rs485 del reComputer R1000, un puerto se usa para el maestro Modbus y el otro puerto se usa para el esclavo Modbus. Este artículo detallará cómo configurar el maestro Modbus y el esclavo Modbus en CODESYS y mostrará cómo desplegarlos en el reComputer R1000.

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

Antes de comenzar, asegúrese de que su reComputer R1000 esté en el mismo segmento de red que el host y que haya desplegado `CODESYS run-time` en el reComputer R1000. Para obtener información sobre cómo desplegar `CODESYS run-time`, consulte [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_install_codesys/)

### Configuración del Hardware

Los dos puertos RS485 del R1000 están conectados, uno como maestro Modbus y el otro como esclavo Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" /></center>

### Modificar el archivo de configuración del R1000

Ingrese el comando:

```shell
    sudo nano /etc/codesyscontrol/CODESYSControl.cfg
```

Agrega el siguiente contenido:

```shell
# Add the following content to the end of the file, where ttyAMAx is the serial port number of reComputer R1000. Linux.Devicefile.1~3 represents the serial port number in CODESYS. Here, the serial port number of CODESYS is bound to the serial port number of reComputer R1000, otherwise CODESYS cannot identify the correct serial port
    [SysCom]
    Linux.Devicefile.1=/dev/ttyAMAx
    Linux.Devicefile.2=/dev/ttyAMAx
    Linux.Devicefile.3=/dev/ttyAMAx
```

Luego ingresa el siguiente comando para reiniciar el servicio CODESYS:

```shell
    sudo systemctl restart codesyscontrol.service
    sudo systemctl restart codesysedge.service
```

### Configuración del maestro Modbus

**Paso 1**: Abra CODESYS, haga clic en `File`--->`NEW Project` para crear un nuevo proyecto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/1.png" /></center>

**Paso 2**: Ingrese el nombre del proyecto, seleccione `Standard project`, luego haga clic en `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/2.png" /></center>

**Paso 3**: Seleccione `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` en la columna `Device`, seleccione `Structured Text (ST)` en `PLC_PRG in`, y luego haga clic en `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/3.png" /></center>

**Paso 4**: Haga clic derecho en el proyecto y seleccione `Add Device` para agregar el dispositivo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/4.png" /></center>

**Paso 5**: Haga clic en `Modbus`--->`Modbus serial Port`--->`Modbus COM` para agregar un dispositivo de puerto serie Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/5.png" /></center>

**Paso 6**: Haga doble clic en el `Modbus_COM` recién agregado, haga clic en `General`, puede configurar el número de puerto serie y la velocidad de baudios y otra información

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/7.png" /></center>

**Paso 7**: Haga clic derecho en `Modbus_COM` y haga clic en `Add Device` para agregar un dispositivo Modbus a este puerto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/8.png" /></center>

**Paso 8**: Seleccione `Modbus Serial Master` ---> `Modbus Client, COM Port` para vincular un dispositivo maestro Modbus a este puerto serie

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/9.png" /></center>

**Paso 9**: Haga clic derecho en `Modbus_Clent_COM_Port` y seleccione `Add Device` para agregar el dispositivo esclavo que será operado por este maestro Modbus. Puede agregar múltiples dispositivos esclavos aquí. Los dispositivos esclavos aquí representan los dispositivos esclavos que la estación maestra quiere operar. Necesita configurar las operaciones que la estación maestra realizará en estos esclavos más tarde.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/10.png" /></center>

**Paso 10**: Seleccione `Modbus Serial Slave` ---> `Modbus Server, COM Port` para agregar un dispositivo esclavo Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/11.png" /></center>

**Paso 11**: Haga doble clic en el dispositivo esclavo recién agregado, y en `General` puede configurar las propiedades `Server address` y `Response timeout`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/12.png" /></center>

**Paso 12**: Haga clic en `Modbus Server Channel`, luego haga clic en `Add Channel` en la esquina inferior derecha para configurar las operaciones que la estación maestra realizará en la estación esclava, como seleccionar el código de función, el número de registros a operar, etc. Puede hacer clic en `Add Channel` para agregar múltiples operaciones

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/13.png" /></center>

**Paso 13**: Haga clic en `ModbusGenericSerialServer I/O Mapping`, donde los datos pueden ser mapeados a una variable especificada, y seleccione `Enable 1` en la columna `Always update variables` en la esquina inferior derecha. En este punto, la configuración del maestro Modbus está completa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/14.png" /></center>

### Configuración del esclavo Modbus

**Paso 1**: Haga clic derecho en el proyecto y seleccione `Add Device` para agregar un dispositivo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/1.png" /></center>

**Paso 2**: Seleccione `Modbus` ---> `Modbus Serial Port` ---> `Modbus COM` para agregar un puerto serie Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/2.png" /></center>

**Paso 3**: Haga clic en el puerto serie Modbus recién agregado, seleccione `General`, y configure el número de puerto serie, velocidad de baudios y otra información

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/3.png" /></center>

**Paso 4**: Haga clic derecho en el puerto serie Modbus recién agregado, seleccione `Add Device`, y agregue el dispositivo esclavo Modbus

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/4.png" /></center>

**Paso 5**: Seleccione `Modbus` ---> `Modbus Serial Device` ---> `Modbus Serial Device` para agregar un dispositivo esclavo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/5.png" /></center>

**Paso 6**: Haga doble clic en el dispositivo esclavo recién agregado. En `General`, puede configurar las propiedades de este esclavo, como el número de registros y bobinas, dirección, etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/6.png" /></center>

**Paso 7**: Haga clic en `Modbus Serial Device I/O Mapping`, y seleccione `Enable 1` en `Always update variable` en la esquina inferior derecha. La configuración del esclavo Modbus está ahora completa

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/7.png" /></center>

### Despliegue de Modbus

**Paso 1**: Haga doble clic en el proyecto, haga clic en `Scan Network`, luego seleccione su dispositivo, y haga clic en `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/1.png" /></center>

**Paso 2**: Ingrese el nombre de usuario y contraseña del reComputer R1000 para conectarse al dispositivo

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/2.png" /></center>

**Paso 3**: Haz clic en el botón como se muestra para desplegar el proyecto en reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/3.png" /></center>

**Paso 4**: Haz clic en el botón Start para iniciar el proyecto. Puedes ver que las luces indicadoras del maestro y esclavo Modbus están ambas en verde, indicando que la comunicación Modbus es normal

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/5.png" /></center>

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
