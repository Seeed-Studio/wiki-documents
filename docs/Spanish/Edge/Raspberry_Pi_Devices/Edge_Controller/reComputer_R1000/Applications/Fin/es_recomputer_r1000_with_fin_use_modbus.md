---
description: Este artículo explica cómo usar el conector Modbus de FIN Framework, mostrando el uso de Modbus TCP/RTU, incluida la creación de un proyecto, configuración de puertos serie, configuración del conector Modbus y la adición de puntos de datos a un equip.
title: reComputer R1000 con FIN para usar Modbus TCP/RTU
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP/RTU
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_modbus_tcp_and_rtu
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

FIN Framework (FIN) es un framework de software con suites de aplicaciones para integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden integrarse por OEMs en una variedad de productos y servicios.

Este artículo introduce cómo usar el `Modbus Connector` de FIN Framework, explicando el uso de Modbus TCP/RTU en FIN, lo cual abarca tres aspectos principales: creación de un proyecto en FIN Framework, configurar el número de puerto serie, configurar el conector Modbus y agregar puntos de datos a un equip.

## Comenzando

Antes de iniciar este proyecto, revisa la preparación de hardware y software descrita a continuación.

### Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software

* Para instalar FIN Framework, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/).
* Para usar la función Modbus de reComputer R1000, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/).
* Para pruebas Modbus, usamos [modbusmechanic](https://modbusmechanic.scifidryer.com/) en Windows 10, aunque se pueden usar otras herramientas.

### Configuración de Hardware

- **ModbusTCP**: Conectamos el PC con Windows 10 y reComputer R1000 a un switch con cables Ethernet para asegurar que estén en la misma red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

- **ModbusRTU**: Usamos un módulo RS485 a USB para conectar el reComputer R1000 con el PC Windows 10.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

### Crear nuevo proyecto

**Paso 1**: Haz clic en el botón `Create` en la esquina inferior izquierda de la página principal. Aparece una ventana emergente con 3 campos principales:
  - **NAME**: nombre del proyecto nuevo
  - **DISPLAY NAME**: nombre que se mostrará del proyecto
  - **DESCRIPTION**: descripción del proyecto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_1.gif" /></center>

**Paso 2**: Abre el proyecto, ve a `DB Builder`, haz clic en `Connectors`. Notarás que no existe la opción `Modbus`. Para ello, necesitaremos habilitar el conector Modbus en FIN Framework. Una vez habilitado, la opción `Modbus` aparecerá aquí.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_2.gif" /></center>

## Configurar `Modbus Connector` para Modbus TCP

**Paso 1**: Abre `Modbus Connector`. Haz clic en `Settrings => Ext` y ubica `Modbus`. Aparecerá en rojo, haz clic en `Enable` y verás que pasa a verde. Esto indica que el conector se activó exitosamente. Regresa a `DB Builder` y verás la nueva opción `Modbus`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**Paso 2**: Agregar una nueva conexión Modbus. Haz clic en `Modbus => Add`. En la ventana emergente se configuran estos parámetros:
  - **Dis**: nombre del conector
  - **ModbusSlave**: esclavo modbus (por defecto 1)
  - **Existing Register Map**: si ya configuraste otro conector Modbus con registers, aparecen aquí para reusar o crear uno nuevo con `ModbusRegMapUri`.
  - **ModbusRegMapUri**: nombre del mapa de registros. Reemplaza "xxx" con el nombre que quieras.
  - **Uri**: dirección del conector. El formato del URI depende del protocolo:

<div class="table-center">

| Protocolo       | Formato URI                           | Ejemplo                         | Notas                                    |
|-----------------|----------------------------------------|---------------------------------|------------------------------------------|
| TCP/IP          | `modbus-tcp://host:port/`             | `modbus-tcp://10.0.0.17/`       | Puerto por defecto 502; se omite si estándar |
| RTU sobre TCP/IP| `modbus-rtutcp://host:port/`          | `modbus-rtutcp://192.168.1.120:9001/` | Puerto por defecto 502; se omite si estándar  |
| RTU sobre RS-485| `modbus-rtu://<port>-<baud>-<dataBits>-<parity>` | `modbus-rtu://serial0-9600-8n1-none` |                                          |
</div>

En nuestro ejemplo, definimos `r1000_demo` como mapa de registros y agregamos la IP al dispositivo en la propiedad `Uri`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_4.gif" /></center>

**Paso 3**: Agregar un nuevo `Register Maps`. Haz clic en `Register Maps => Add`, especifica `Name`, que debe coincidir con `ModbusRegMapUri` del paso anterior, y luego haz clic en `ADD`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_5.gif" /></center>

El sistema creará un archivo `r1000_demo.csv` en `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`, donde se describe la información de registros Modbus que se leerán.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_register_map_addr.png" /></center>

**Paso 4**: Agregar la información de registro a leer. El conector Modbus actúa como maestro, leyendo los registros del esclavo. Configuramos la info de registros que serán leídos. Haz clic en `r1000_demo`; verás que hay un `ping` por defecto, el cual es obligatorio. Agrega más registro haciendo clic en `Register Maps => r1000_demo => Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_6.gif" /></center>

**Paso 5**: Prueba de comunicación. Tras añadir la info de registro, podemos probar la comunicación. Aquí usamos `ModbusMechanic` como esclavo. Haz clic en `Modbus => Ping` y verás que `Status` cambia a `OK`, indicando comunicación normal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_7.gif" /></center>

## Configurar `Modbus Connector` para Modbus RTU

### Configurar puerto serie

Ejecuta los siguientes comandos:
```shell
## Apagar servicio FIN
sudo systemctl stop fin
## Descarga el archivo config.props y colócalo en /opt/finFramework_5.1.6.55/etc/finStackSerial/
sudo cp ~/config.props  /opt/finFramework_5.1.6.55/etc/finStackSerial/
## Editar config.props para serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
sudo nano /opt/finFramework_5.1.6.55/etc/finStackSerial/config.props
## Reiniciar FIN
sudo systemctl restart fin
```

**Paso 1**: Detén el servicio FIN, descarga [este archivo de configuración](https://drive.google.com/file/d/1j1aGGSsGPjGCYfUGcXTqL2XGP2EuqFw2/view?usp=share_link) y guárdalo en `/opt/finFramework_5.1.6.55/etc/finStackSerial/`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_1.gif" /></center>

**Paso 2**: Edita `config.props` para:
```shell
serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
```
Luego reinicia el servicio FIN.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_2.gif" /></center>

**Paso 3**: Haz clic en `Folio => launch`, escribe la query `serialPorts()`. El resultado muestra qué nombre usar para cada puerto físico, por ejemplo `serial0`, `serial1`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_3.gif" /></center>

### Configurar Modbus RTU

**Paso 1**: Abre `Modbus Connector`. Haz clic en `Settrings => Ext`, busca `Modbus` (en rojo). Haz clic en `Enable` y se pondrá en verde, lo que indica que el conector se activó. Ve a `DB Builder` y verás la opción `Modbus`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**Paso 2**: Agrega una nueva conexión Modbus. Haz clic en `Modbus => Add`. En nuestro ejemplo, definimos `r1000_demo_rtu` como mapa de registros y agregamos el puerto serie en `Uri`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_4.gif" /></center>

**Paso 3**: Agrega un nuevo `Register Maps`. Haz clic en `Register Maps => Add`, da un `Name` que coincida con `ModbusRegMapUri` del paso anterior y haz clic en `ADD`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_5.gif" /></center>

El sistema creará un archivo `r1000_demo_rtu.csv` en `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`.

**Paso 4**: Añade la info de registros a leer. El conector Modbus actúa como maestro, leyendo los registros del esclavo. Crea la info que leerá el maestro. Haz clic en `r1000_demo_rtu`; verás un `ping` por defecto. Añade más registros con `Register Maps => r1000_demo_rtu => Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_6.gif" /></center>

**Paso 5**: Prueba de comunicación. Al igual que antes, usamos `ModbusMechanic` como esclavo. Haz clic en `Modbus => Ping` y verás `Status: OK`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_7.gif" /></center>

### Agregar puntos de datos a `Equip Tree`

**Paso 1**: Añadir `Equip`. Haz clic en `Equip Tree => + => Add site`, ingresa `Name`, por ejemplo `Tower`. Añade `Floor` (por ejemplo `Floor1`), y luego `Equip` (por ejemplo `ModbusEquip`).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_8.gif" /></center>

**Paso 2**: Haz clic en `->` a la derecha de `ModbusEquip` para que la ruta sea `Tower/Floor1/ModbusEquip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbustcp_modbusequip_path.png" /></center>

**Paso 3**: Agregar puntos de datos. Haz clic en `Modbus => Modbus Conn`, en la ventana emergente haz clic en `Discover Points`. Verás los registros configurados; selecciona uno y haz clic en `Add`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
