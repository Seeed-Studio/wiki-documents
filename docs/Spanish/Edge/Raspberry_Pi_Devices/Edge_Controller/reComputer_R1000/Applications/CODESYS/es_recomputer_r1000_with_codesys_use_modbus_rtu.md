---
description: Este artículo explica cómo usar la función Modbus RTU de reComputer R1000 basada en CODESYS.
title: Cómo usar CODESYS para configurar la función Modbus RTU de R1000
keywords:
  - Edge Controller
  - reComputer R1000
  - CODESYS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_use_modbus_rtu_with_codesys
last_update:
  date: 02/15/2025
  author: Erick Gonzáles
---

## Introducción

Este artículo explica cómo usar la función Modbus RTU en reComputer R1000 basada en CODESYS. Utilizaremos los dos puertos RS485 del reComputer R1000: uno se usará como maestro de Modbus y el otro como esclavo de Modbus. Detallaremos cómo configurar el maestro y el esclavo Modbus en CODESYS y mostraremos cómo desplegarlos en reComputer R1000.

## Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

## Preparación de Software

* [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
* [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## Comenzando

Antes de comenzar, asegúrate de que tu reComputer R1000 esté en el mismo segmento de red que la computadora host y de que hayas desplegado `CODESYS run-time` en reComputer R1000. Para más detalles sobre cómo desplegar `CODESYS run-time`, consulta [wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_codesys/)

### Configuración de Hardware

Los dos puertos RS485 de R1000 se conectan: uno como maestro Modbus y el otro como esclavo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" /></center>

### Modificar el archivo de configuración de R1000

Ejecuta:
```shell
sudo nano /etc/codesyscontrol/CODESYSControl.cfg
```

Agrega al final del archivo:
```shell
# Agrega el siguiente contenido al final del archivo,
# donde ttyAMAx es el número de puerto serie en reComputer R1000.
# Linux.Devicefile.1~3 representan el número de puerto serie en CODESYS.
# Aquí, el número de puerto serie en CODESYS se vincula al número de puerto serie del reComputer R1000;
# de lo contrario CODESYS no puede identificar el puerto serie correcto.

[SysCom]
Linux.Devicefile.1=/dev/ttyAMAx
Linux.Devicefile.2=/dev/ttyAMAx
Linux.Devicefile.3=/dev/ttyAMAx
```

Luego reinicia el servicio de CODESYS:
```shell
sudo systemctl restart codesyscontrol.service
sudo systemctl restart codesysedge.service
```

### Configurar maestro Modbus

**Paso 1**: Abre CODESYS, haz clic en `File`--->`NEW Project` para crear un proyecto nuevo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/1.png" /></center>

**Paso 2**: Ingresa el nombre del proyecto, selecciona `Standard project`, luego haz clic en `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/2.png" /></center>

**Paso 3**: Selecciona `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` en `Device`, y `Structured Text (ST)` en `PLC_PRG in`, luego haz clic en `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/3.png" /></center>

**Paso 4**: Haz clic derecho en el proyecto y selecciona `Add Device` para añadir un dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/4.png" /></center>

**Paso 5**: Haz clic en `Modbus`--->`Modbus serial Port`--->`Modbus COM` para agregar un dispositivo de puerto serie Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/5.png" /></center>

**Paso 6**: Haz doble clic en `Modbus_COM` recién agregado, haz clic en `General` y podrás ajustar el número de puerto serie, baud rate, etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/7.png" /></center>

**Paso 7**: Haz clic derecho en `Modbus_COM` y selecciona `Add Device` para agregar un dispositivo Modbus a este puerto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/8.png" /></center>

**Paso 8**: Selecciona `Modbus Serial Master` ---> `Modbus Client, COM Port` para vincular un dispositivo maestro Modbus a este puerto serie.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/9.png" /></center>

**Paso 9**: Haz clic derecho en `Modbus_Clent_COM_Port` y selecciona `Add Device` para añadir el dispositivo esclavo que será operado por este maestro. Aquí puedes agregar varios dispositivos esclavos. El esclavo aquí representa el dispositivo que el maestro desea controlar. Configurarás las operaciones que el maestro hará sobre estos esclavos más adelante.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/10.png" /></center>

**Paso 10**: Selecciona `Modbus Serial Slave` ---> `Modbus Server, COM Port` para agregar un dispositivo esclavo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/11.png" /></center>

**Paso 11**: Haz doble clic en el dispositivo esclavo recién agregado, y en `General` puedes configurar `Server address` y `Response timeout`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/12.png" /></center>

**Paso 12**: Haz clic en `Modbus Server Channel`, luego en `Add Channel` en la esquina inferior derecha para configurar las operaciones que el maestro hará sobre el esclavo, como el código de función, la cantidad de registros, etc. Puedes hacer clic en `Add Channel` para añadir múltiples operaciones.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/13.png" /></center>

**Paso 13**: Haz clic en `ModbusGenericSerialServer I/O Mapping`, donde los datos pueden asignarse a una variable específica. Selecciona `Enable 1` en la columna `Always update variables` de la esquina inferior derecha. Con esto, la configuración del maestro Modbus está lista.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/14.png" /></center>

### Configurar esclavo Modbus

**Paso 1**: Haz clic derecho en el proyecto y selecciona `Add Device` para añadir un dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/1.png" /></center>

**Paso 2**: Selecciona `Modbus` ---> `Modbus Serial Port` ---> `Modbus COM` para agregar un puerto serie Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/2.png" /></center>

**Paso 3**: Haz clic en el puerto serie Modbus recién agregado, selecciona `General` y configura el número de puerto serie, baud rate, etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/3.png" /></center>

**Paso 4**: Haz clic derecho en el puerto serie Modbus recién agregado, selecciona `Add Device` y añade el dispositivo esclavo Modbus.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/4.png" /></center>

**Paso 5**: Selecciona `Modbus` ---> `Modbus Serial Device` ---> `Modbus Serial Device` para agregar un dispositivo esclavo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/5.png" /></center>

**Paso 6**: Haz doble clic en el esclavo recién agregado. En `General` puedes configurar propiedades como la cantidad de registros y coils, dirección, etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/6.png" /></center>

**Paso 7**: Haz clic en `Modbus Serial Device I/O Mapping` y selecciona `Enable 1` en `Always update variable` en la esquina inferior derecha. La configuración del esclavo Modbus ahora está lista.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/7.png" /></center>

### Despliegue de Modbus

**Paso 1**: Haz doble clic en el proyecto, haz clic en `Scan Network`, luego selecciona tu dispositivo y haz clic en `OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/1.png" /></center>

**Paso 2**: Ingresa el usuario y contraseña de reComputer R1000 para conectar el dispositivo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/2.png" /></center>

**Paso 3**: Haz clic en el botón indicado para desplegar el proyecto en reComputer R1000.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/3.png" /></center>

**Paso 4**: Haz clic en el botón Start para iniciar el proyecto. Verás que las luces de estado del maestro y esclavo Modbus están en verde, indicando que la comunicación Modbus está funcionando correctamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/5.png" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecer diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
