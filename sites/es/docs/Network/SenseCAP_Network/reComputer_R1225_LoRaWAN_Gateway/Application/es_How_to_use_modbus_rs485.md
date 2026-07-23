---
description: Este artículo presenta principalmente cómo utilizar la función de comunicación 485 de reComputer R1225 y prueba las funciones de comunicación RS485 y Modbus.
title: Cómo usar rs485 y modbus con R1225
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borde
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_modbus_rs485_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/14/2026
  author: Kian
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/es/how_to_use_modbus_rs485_with_r1225/
updatedAt: '2026-04-30'
---

## Introducción

Este artículo presenta principalmente cómo utilizar la función de comunicación 485 de reComputer R1225 y prueba las funciones de comunicación RS485 y Modbus.

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

* Usar [modbus poll](https://www.modbustools.com/modbus_poll.html) en tu PC con W10. También puedes usar otras herramientas de prueba de modbus
* Usar [modbusmechanic](https://modbusmechanic.scifidryer.com/) en reComputer R1225 y en la PC con W10. También puedes usar otras herramientas de prueba de modbus
* Usar [mobaxterm](https://mobaxterm.mobatek.net/) en tu PC con W10. También puedes usar otras herramientas de prueba de puerto serie
* Necesitas descargar la herramienta **minicom** usando el siguiente comando en el reComputer R1225:

```sh
sudo apt-get install minicom
```

### Configuración de hardware

Para Modbus RTU, utilizamos un convertidor RS485-a-USB para conectar el R1225 a una PC con Windows 10 para las pruebas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para Modbus TCP, utilizamos cables Ethernet para conectar la PC con W10 y reComputer R1225 a un switch para asegurarnos de que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

### Método 1: Uso de la Interfaz de Línea de Comandos (CLI)

#### Pasos para usar las pruebas de Modbus RTU

##### Instalación y configuración de minicom

Instala minicom tanto en tu computadora host como en reComputer R1225 con el siguiente comando:

```
sudo apt install minicom
```

Abre una terminal e introduce un comando como el siguiente:

```
sudo minicom -D /dev/ttyAMA*
```

El `ttyAMA*` debe ser `ttyAMA2, ttyAMA3 o ttyAMA4` dependiendo de qué RS485 utilices.

Luego escribe `Ctal+A` y después escribe `Z` verás minicom como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

Escribe `o` para configurar minicom y selecciona `Serial port setup` verás algo como lo siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

Luego escribe `F` y `H` para configurar minicom en modo RS485, el resultado se mostrará como se indica a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

Finalmente, selecciona `Exit` y presiona `Enter` para salir de la configuración, como se muestra a continuación: 

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

**Paso 1**: Probar la funcionalidad RS485

Introduce el siguiente script en reComputer R1225 para abrir el software minicom

```shell
minicom -D /dev/ttyAMAx -b 9600
```

Descripción de parámetros:

-D: Introduce el número de dispositivo que deseas abrir en el campo siguiente. El número de dispositivo debe ser el número de dispositivo recién creado.

-b: Introduce a continuación la velocidad en baudios

Luego abre MobaXterm en la PC con W10, crea un nuevo terminal de puerto serie, selecciona el número de puerto serie y la velocidad en baudios es 9600; finalmente, puedes realizar comunicación bidireccional con RS485. Como se muestra en la figura, el contenido introducido en el reComputer R1000 se puede enviar a través de RS485. En la PC con W10, el contenido introducido en la PC con W10 también se puede enviar a reComputer R1225, y la comunicación bidireccional es normal

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**Paso 2**: Probar el R1225 como esclavo Modbus

Abre el software ModbusMechanic en reComputer R1225, selecciona el número de dispositivo y la velocidad en baudios, luego haz clic en la función de esclavo simulado en la esquina superior izquierda para añadir dos bobinas; después abre Modbus poll en W10 como estación maestra para leer las bobinas de la estación esclava. Luego abre la ventana de visualización de Modbus poll y podrás ver que los mensajes de envío y recepción de Modbus RTU son normales.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**Paso 3**: Probar el R1225 como maestro Modbus

Abre el software ModbusMechanic tanto en reComputer R1225 como en la PC con W10 y selecciona el número de dispositivo y la velocidad en baudios. La PC con W10 se refiere al tercer paso de configuración. Selecciona `Read Coils(0x01)` en reComputer R1000 para leer la bobina del esclavo, establece `Slave Node` en 1, en `Register` selecciona la dirección que deseas leer y finalmente haz clic en `Transmit packet`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

#### Pasos para usar las pruebas de Modbus TCP

**Paso 1**: Abre modbusmechanic en la PC con Win10 y en R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**Paso 2**: Probar el R1225 como host Modbus TCP

Haz clic en `Tool => Start Slave Simulator` en la PC con W10, selecciona `TCP` para TYPE, selecciona `1` para Slave ID y luego añade `Coils`; después introduce la `IP` en R1225 y selecciona `Read Coil` para Scan group. Introduce `Slave Node` y `Register` y finalmente haz clic en `Transmit packet`. Podrás ver que los datos del esclavo se han leído correctamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**Paso 3**: Probar el R1225 como esclavo Modbus TCP

Consulta el segundo paso para la configuración. Podrás ver que el R1225 puede leer datos normalmente como esclavo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

:::note
Ejecutar el programa esclavo Modbus TCP en R1000 necesita escuchar el puerto 502, lo que puede requerir permisos de sudo. Si tu aplicación no puede escuchar el puerto 502, intenta añadirle permisos.
:::

### Método 2: Uso de la Interfaz Gráfica de Usuario (GUI)

#### Configuración de parámetros RS485

Sigue la guía [Quick Start](https://wiki.seeedstudio.com/es/r1225_quick_start/) para acceder a la interfaz web de SenseCAP Gateway OS.

**Paso 1**: Iniciar sesión en Luci

Introduce la dirección IP de tu dispositivo en un navegador para entrar en la página de Luci.
Luego introduce el nombre de usuario y la contraseña de tu dispositivo para iniciar sesión y haz clic en el botón Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**Paso 2 Haz clic en `RS485` - `Serial Settings`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

Aquí se integran los ajustes de parámetros para los tres canales 485 del R1225.

Primero, selecciona el canal que deseas usar (CH1, CH2, CH3);

A continuación, configura los parámetros: velocidad en baudios, bits de datos, bits de parada, paridad, control de flujo y tiempo de espera de lectura.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

**Paso 3**: Haz clic en `Save & Apply` para aplicar tus ajustes

#### Configuración de parámetros Modbus RTU

Después de configurar los parámetros para los tres puertos RS-485 (la configuración predeterminada es ‘9600, 8, 1, N’), puedes continuar con la configuración de Modbus RTU.

**Paso 4**: Haz clic en `RS485` - `Protocol Configuration`

Selecciona el canal que deseas depurar (CH1, CH2, CH3).

Selecciona “Enable” para el estado del protocolo y “Modbus RTU” para el tipo de protocolo.

Una vez habilitado, verás la pantalla de configuración de Modbus RTU; simplemente configúrala de acuerdo con la hoja de datos del sensor conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_3.png" alt="pir" width={800} height="auto" /></p>

**Paso 5**: Ajustes de parámetros Modbus RTU

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_4.png" alt="pir" width={800} height="auto" /></p>

**Paso 6**: Haz clic en`Save & Apply`

Una vez que los ajustes hayan surtido efecto, haz clic en `Read Data`, podrás ver los datos recuperados en `Frame Data`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_5.png" alt="pir" width={800} height="auto" /></p>

#### Configuración de parámetros Modbus TCP

**Paso 7**: Haz clic en `RS485` - `MQTT Setttings`

Selecciona el canal que deseas usar (CH1, CH2, CH3).

Selecciona TCP como protocolo de transporte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp1.png" alt="pir" width={800} height="auto" /></p>

**Paso 8**: Configuración de MQTT

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp2.png" alt="pir" width={800} height="auto" /></p>

**Paso 9**: Haz clic en`Save & Apply`

Ahora tu configuración está activa.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
