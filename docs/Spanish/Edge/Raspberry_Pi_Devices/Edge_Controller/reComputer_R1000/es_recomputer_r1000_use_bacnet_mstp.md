---
description: This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.
title: reComputer R1000 use bacnet MS/TP
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/wirshark_capture.webp
slug: /es/reComputer_r1000_use_bacnet_mstp
last_update:
  date: 02/18/2025
  author: Erick González
---

# reComputer R1000 use bacnet MS/TP

# reComputer R1000 usa BACnet MS/TP

## Introducción
BACnet MS/TP (Master-Slave/Token Passing) es un protocolo de comunicación para redes de automatización y control de edificios. Forma parte del conjunto de protocolos BACnet (Building Automation and Control Networks). MS/TP generalmente utiliza la capa física RS-485 y una topología de bus. Todos los dispositivos están conectados al mismo cable de par trenzado. En la red MS/TP, hay estaciones maestras y estaciones esclavas. El maestro es responsable de generar y entregar el token, mientras que el esclavo solo responde cuando recibe una solicitud. El dispositivo maestro determina qué dispositivo puede enviar datos pasando el token. El mecanismo de paso de tokens garantiza que la comunicación en el bus sea ordenada y libre de conflictos.

Este artículo introduce principalmente cómo realizar pruebas funcionales del protocolo BACnet MS/TP en reComputer R1000. Simulamos un servidor BACnet MS/TP en reComputer R1000 y luego usamos YABE en una PC con Windows 10 para verificar si el dispositivo está presente. Si el dispositivo que simulamos se encuentra correctamente, significa que la comunicación BACnet MS/TP es funcional.

## Primeros Pasos

Antes de comenzar este proyecto, es posible que necesite preparar su hardware y software con anticipación, como se describe aquí.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software
* Dado que BACnet MS/TP utiliza la capa física RS485, puedes consultar este [wiki](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/) para aprender a usar la función RS485 en reComputer R1000 V1.0 correctamente.
* Simularemos un servidor con la ayuda de la aplicación de la biblioteca `bacnet-stack`, por lo que debes ingresar el siguiente comando para descargarla:
  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* Por favor, dirígete a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer).
* Por favor, dirígete a este [enlace](https://www.wireshark.org/) y descarga Wireshark.

### Configuración del Hardware

Esta prueba utiliza un módulo RS485 a USB para conectar el reComputer R1000 y una PC con Windows 10.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## Pasos para probar la función de comunicación BACnet MS/TP
**Paso 1**: Descarga `bacnet-stack`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**Paso 2**: El número de puerto serie predeterminado en `bacnet-stack` es `/dev/ttyUSB0`. Si el puerto que estás usando no es ese, la comunicación no funcionará, por lo que es necesario modificar el número de puerto. El archivo que debes modificar es `ports/linux/rs485.c`. Cambia este valor al puerto que necesitas usar. En mi caso, lo cambié a `/dev/ttyAMA30`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**Paso 3**: Ingresa las siguientes instrucciones para compilar. Los resultados de la compilación se pueden encontrar en el directorio `bin`.
```shell
make clean
make mstp
# esperar
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**Paso 4**: Ejecuta `bacserv` y usa `YABE` para buscar por dispositivos simulados. Puedes ver que el dispositivo que simulamos fue encontrado rápidamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**Paso 5**: Usa wireshark para ver los mensajes de bacnet MS/TP. Puedes ver que el dispositivo que simulamos pasa el token. Dado que no hay ningún otro dispositivo en el bus, el token se sigue pasando.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

# Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>