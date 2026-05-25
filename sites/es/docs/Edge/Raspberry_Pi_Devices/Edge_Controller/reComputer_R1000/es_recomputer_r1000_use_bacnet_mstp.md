---
description: Este artículo presenta principalmente cómo realizar pruebas funcionales del protocolo bacnet MS/TP en reComputer R1000.
title: reComputer R1000 usar bacnet MS/TP
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/wirshark_capture.webp
slug: /reComputer_r1000_use_bacnet_mstp
last_update:
  date: 10/25/2024
  author: ShuishengPeng
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/reComputer_r1000_use_bacnet_mstp/
---

# reComputer R1000 usar bacnet MS/TP

## Introducción
BACnet MS/TP (Master-Slave/Token Passing) es un protocolo de comunicación para redes de automatización y control de edificios. Es parte del conjunto de protocolos BACnet (Building Automation and Control Networks). MS/TP generalmente utiliza la capa física RS-485 y topología de bus. Todos los dispositivos están conectados al mismo cable de par trenzado. Hay estaciones maestras y estaciones esclavas en la red MS/TP. El maestro es responsable de generar y entregar el token, mientras que el esclavo solo responde cuando se recibe una solicitud. El dispositivo maestro determina qué dispositivo puede enviar datos pasando el token. El mecanismo de paso de token asegura que la comunicación en el bus sea ordenada y libre de conflictos.

Este artículo presenta principalmente cómo realizar pruebas funcionales del protocolo bacnet MS/TP en reComputer R1000. Simulamos un servidor bacnet MS/TP en reComputer R1000, y luego usamos YABE en la PC W10 para verificar si el dispositivo está presente. Si el dispositivo que simulamos puede ser encontrado normalmente, significa que la comunicación bacnet MS/TP es normal.

## Comenzando

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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

### Software
* Dado que bacnet MS/TP utiliza la capa física RS485, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_use_rs485_modbus_rtu/) sobre cómo usar la función RS485 en reComputer R1000 V1.0 normalmente.
* Simulamos un servidor con la ayuda de la aplicación de la biblioteca `bacnet-stack`, por lo que necesitas ingresar el siguiente comando para descargarla:
  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* Por favor ve a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer).
* Por favor ve a este [enlace](https://www.wireshark.org/) y descarga wireshark.
### Configuración del Hardware

Esta prueba utiliza un módulo RS485 a USB para conectar reComputer R1000 y PC W10.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## Pasos para probar la función de comunicación bacnet mstp
**Paso 1**: Descargar `bacnet-stack`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**Paso 2**: El número de puerto serie predeterminado de `bacnet-stack` es `/dev/ttyUSB0`. Si el número de puerto que realmente usas no es ese, la comunicación no será posible, por lo que necesitas modificar el número de puerto. El nombre del archivo que necesita ser modificado es `ports/ linux/rs485.c`. Cambia esto al número de puerto que necesitas usar. Yo lo cambié a `/dev/ttyAMA30`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**Paso 3**: Ingresa las siguientes instrucciones para compilar. Los resultados de la compilación se pueden ver en el directorio bin.
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**Paso 4**: Ejecuta `bacserv` y usa `YABE` para buscar dispositivos simulados. Puedes ver que el dispositivo que simulamos fue buscado exitosamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**Paso 5**: Usa wireshark para ver mensajes bacnet MS/TP. Puedes ver que el dispositivo que simulamos pasa el token. Dado que no hay otros dispositivos en mi bus, sigue pasando el token.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

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