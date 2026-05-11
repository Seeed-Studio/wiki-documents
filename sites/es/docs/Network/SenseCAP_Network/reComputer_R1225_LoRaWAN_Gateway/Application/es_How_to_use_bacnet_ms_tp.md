---
description: Este artículo presenta principalmente cómo realizar pruebas funcionales del protocolo bacnet MS/TP en reComputer R1225.
title: Cómo usar bacnet MS/TP con R1225
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borde
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_bacnet_ms_tp_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/17/2026
  author: Kian
---

## Introducción

BACnet MS/TP (Master-Slave/Token Passing) es un protocolo de comunicación para redes de automatización y control de edificios. Es parte del conjunto de protocolos BACnet (Building Automation and Control Networks). MS/TP normalmente utiliza la capa física RS-485 y una topología de bus. Todos los dispositivos están conectados al mismo cable de par trenzado. Hay estaciones maestras y estaciones esclavas en la red MS/TP. El maestro es responsable de generar y entregar el token, mientras que el esclavo solo responde cuando recibe una solicitud. El dispositivo maestro determina qué dispositivo puede enviar datos pasando el token. El mecanismo de paso de token garantiza que la comunicación en el bus sea ordenada y libre de conflictos

Este artículo presenta principalmente cómo realizar pruebas funcionales del protocolo bacnet MS/TP en reComputer R1225. Simulamos un servidor bacnet MS/TP en reComputer R1225 y luego usamos YABE en el PC con W10 para comprobar si el dispositivo está presente. Si el dispositivo que simulamos se puede encontrar con normalidad, significa que la comunicación bacnet MS/TP es normal.

## Comenzando

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con antelación como se describe aquí.

### Preparación de hardware

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1225</th>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/reComputer-R1225.jpg" style={{width:300, height:'auto'}}/></div></td>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
  </table>
</div>

### Software

* Dado que bacnet MS/TP utiliza la capa física RS485, puedes consultar este [wiki](https://wiki.seeedstudio.com/es/how_to_use_modbus_rs485_with_r1225/) sobre cómo usar la función RS485 en reComputer R1225.
* Simulamos un servidor con la ayuda de la aplicación de la biblioteca `bacnet-stack`, por lo que debes introducir el siguiente comando para descargarla:

  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* Ve a este [enlace](https://sourceforge.net/projects/yetanotherbacnetexplorer/) y descarga YABE (Yet Another BACnet Explorer).
* Ve a este [enlace](https://www.wireshark.org/) y descarga wireshark.

### Configuración de hardware

Usamos un convertidor RS485-a-USB para conectar el R1225 a un PC con Windows 10 para las pruebas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## Pasos para probar la función de comunicación bacnet mstp

### Método 1: Uso de la Interfaz de Línea de Comandos (CLI)

**Paso 1**: Descarga `bacnet-stack`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**Paso 2**: Cambiar el número de puerto

El número de puerto serie predeterminado de `bacnet-stack` es `/dev/ttyUSB0`. Si el número de puerto que utilizas realmente no es ese, la comunicación no será posible, por lo que debes modificar el número de puerto. El nombre del archivo que debe modificarse es `ports/ linux/rs485.c`. Cámbialo al número de puerto que necesites usar. Yo lo cambié a `/dev/ttyAMA30`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**Paso 3**: Introduce las siguientes instrucciones para compilar. Los resultados de la compilación se pueden ver en el directorio bin.
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**Paso 4**: Ejecuta `bacserv` y usa `YABE` para buscar dispositivos simulados. Puedes ver que el dispositivo que simulamos se buscó correctamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**Paso 5**: Usa wireshark para ver los mensajes bacnet MS/TP. Puedes ver que el dispositivo que simulamos pasa el token. Como no hay otros dispositivos en mi bus, sigue pasando el token.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

### Método 2: Uso de la Interfaz Gráfica de Usuario (GUI)

#### Configuración de parámetros RS485

Sigue la guía de [Inicio Rápido](https://wiki.seeedstudio.com/es/r1225_quick_start/) para acceder a la interfaz web de SenseCAP Gateway OS.

**Paso 1**: Iniciar sesión en Luci

Introduce la dirección IP de tu dispositivo en un navegador para entrar en la página de Luci.
Luego introduce el nombre de usuario y la contraseña de tu dispositivo para iniciar sesión y haz clic en el botón Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**Paso 2**: Haz clic en `RS485` - `Serial Settings`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

Aquí se integran los ajustes de parámetros para los tres canales 485 del R1225.

Primero, selecciona el canal que deseas usar (CH1, CH2, CH3);

A continuación, configura los parámetros: velocidad en baudios, bits de datos, bits de parada, paridad, control de flujo y tiempo de espera de lectura.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

#### Configuración de parámetros BACnet MS/TP

Después de configurar los parámetros para los tres puertos RS-485 (la configuración predeterminada es “9600, 8, 1, N”), puedes continuar con la configuración de BACnet MS/TP.

**Paso 3**: Haz clic en `RS485` - `Protocol Configuration`

Selecciona el canal que deseas depurar (CH1, CH2, CH3).

Selecciona "Enable" para el estado del protocolo y "BACnet MS/TP" para el tipo de protocolo.

Una vez habilitado, verás la pantalla de configuración de BACnet MS/TP; simplemente configúralo de acuerdo con la hoja de datos del sensor conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet1.png" alt="pir" width={800} height="auto" /></p>

**Paso 4**: Ajustes de parámetros BACnet MS/TP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet2.png" alt="pir" width={800} height="auto" /></p>

**Paso 5**: Haz clic en `Save & Apply`

Una vez que la configuración haya surtido efecto, haz clic en `Read Data`, podrás ver los datos recuperados en `Frame Sata`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet3.png" alt="pir" width={800} height="auto" /></p>

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
