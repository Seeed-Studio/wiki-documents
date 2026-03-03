---
description: Este artículo presenta principalmente cómo usar la función de comunicación 485 del reComputer R1000, y prueba las funciones de comunicación rs485 y Modbus.
title: Cómo usar rs485 y modbus con reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/r1000_connection_1.webp
slug: /es/recomputer_r1000_use_rs485_modbus_rtu
last_update:
  date: 12/20/2024
  author: Jiahao Li
---

## Introducción
Este artículo presenta principalmente cómo usar la función de comunicación 485 del reComputer R1000, y prueba las funciones de comunicación RS485 y Modbus.

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

### Software

* Usando [modbus poll](https://www.modbustools.com/modbus_poll.html) en tu PC con W10. También puedes usar otras herramientas de prueba modbus
* Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) en reComputer R1000 y PC con W10. También puedes usar otras herramientas de prueba modbus
* Usando [mobaxterm](https://mobaxterm.mobatek.net/) en tu PC con W10. También puedes usar otras herramientas de prueba de puerto serie
* Necesitas descargar la herramienta **minicom** usando el siguiente comando en el reComputer R1000:
```sh
sudo apt-get install minicom
```

### Configuración de Hardware

Esta prueba utiliza un módulo RS485 a USB para conectar reComputer R1000 y PC W10.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para ModbusTCP, utilizamos cables Ethernet para conectar el PC W10 y reComputer R1000 a un switch para asegurar que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Configurar minicom en reComputer R1000v1.1

**NOTA:** Antes de usar RS485 con minicom, por favor instala los controladores r1000 como [esto](https://wiki.seeedstudio.com/es/recomputer_r1000_flash_OS/#install-drivers).


### Primero, instalar minicom 

Instala minicom tanto en tu computadora host como en reComputer r1000 con el comando a continuación:

```
sudo apt install minicom
```

### Segundo, configura tu minicom de la siguiente manera:

Abre una terminal con `Ctrl+Alt+T`, e ingresa un comando como el siguiente:

```
sudo minicom -D /dev/ttyAMA*
```

El `ttyAMA*` debería ser `ttyAMA2, ttyAMA3 o ttyAMA4` dependiendo de qué RS485 uses.

Y luego escribe `Ctal+A` después escribe `Z` verás minicom como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

Escribe `o` para configurar minicom, y selecciona `Serial port setup` verás como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

Y luego escribe `F` y `H` para hacer que minicom funcione en modo RS485, el resultado se mostrará como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

Finalmente, selecciona `Exit` y escribe `Enter` para salir de la configuración, como se muestra a continuación: 

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>


## Acción requerida para reComputer R1000 v1.0

Para reComputer R1000 v1.0, el pin DE del transceptor 485 integrado está fuera de control por defecto, lo que significa que las interfaces solo pueden transmitir datos unidireccionalmente (solo recibir o solo enviar).

:::note
Para distinguir entre la revisión de hardware (v1.0 y v1.1), puedes consultar [detalles de cambios del producto reComputer R1000 V1.1](https://wiki.seeedstudio.com/es/recomputer_r1000_v1_1_description/).
:::

Ahora tenemos dos soluciones, una es **cargar un módulo del kernel que intercepta el controlador UART, que recomendamos que uses**, y la otra es una solución basada en la capa de aplicación que simplemente llama a `libgpiod` para controlar los pines DE. Puedes elegir una según tus necesidades.

### Solución de módulo del kernel (recomendada)

#### Instalación

Primero, necesitas descargar el código fuente del módulo del kernel. Es un repositorio independiente, así que puedes clonarlo directamente.

```shell
git clone https://github.com/bclswl0827/r1000v1-rs485-autoflow
cd r1000v1-rs485-autoflow
```

A continuación, necesitas compilar el módulo del kernel.

```shell
make
```

Si obtienes errores durante la compilación, es posible que necesites instalar los encabezados del kernel correspondientes a tu kernel en ejecución actual. Asumimos que estás usando Raspberry Pi OS, por lo que puedes usar el siguiente comando para instalar los encabezados del kernel.

```shell
sudo apt-get install linux-headers-$(uname -r)
```

Después de eso, puedes compilar el módulo del kernel nuevamente.

#### Cargar el módulo del kernel

Una vez que se haya compilado, puedes cargar el módulo del kernel ejecutando el siguiente comando.

```shell
sudo insmod r1000v1-rs485-autoflow.ko
```

Si el módulo del kernel se cargó exitosamente, deberías ver el siguiente mensaje en el registro del kernel, verifica con el comando `dmesg`.

```shell
[  256.037465] r1000v1_rs485_autoflow: RS-485 interface has been hooked successfully
```

Ahora, puedes usar la herramienta `minicom` para probar la comunicación RS485. También puedes usar otras herramientas de prueba de puerto serie (por ejemplo, `picocom`).

Para cargar el kernel en el momento del arranque, puedes añadir este módulo al archivo `/etc/modules` usando el siguiente comando.

```shell
echo "r1000v1_rs485_autoflow" | sudo tee -a /etc/modules
```

Después de registrar el módulo, necesitas reiniciar el sistema para que los cambios surtan efecto.

```shell
sudo reboot
```

#### Descargar el módulo del kernel

Para descargar el módulo del kernel, puedes ejecutar el siguiente comando, y la interfaz RS485 integrada volverá al modo de solo recepción.

```shell
sudo rmmod r1000v1-rs485-autoflow
```

#### Añadir el módulo con DKMS

DKMS (Dynamic Kernel Module Support) es un sistema que automatiza la construcción e instalación de módulos del kernel, lo que lo hace útil para gestionar módulos a través de múltiples versiones del kernel. Al usar DKMS, puedes asegurar que tus módulos permanezcan compatibles incluso después de una actualización del kernel.

Para añadir este módulo del kernel con DKMS, usa el siguiente comando:

```shell
sudo make dkms_install
```

Este comando registrará el módulo con DKMS, lo compilará e instalará para la versión actual del kernel. Cuando el kernel se actualice en el futuro, DKMS reconstruirá e instalará automáticamente el módulo para la nueva versión, por lo que no necesitarás recompilarlo manualmente.

### Solución de capa de aplicación

#### Usando script

- Además de los métodos mencionados en este artículo, también proporcionamos un script que puedes ejecutar usando el siguiente comando. Este script puede crear automáticamente un nuevo /dev/ttyx y luego usar el número de dispositivo recién creado para realizar comunicación rs485/modbus rtu es suficiente
  ```shell
  curl -sSL https://raw.githubusercontent.com/Seeed-Projects/R1000-RS485-Util/main/setup_rs485.sh | sudo bash
  ```

#### Configuración manual

Primero, necesitas descargar el [**programa en C**](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE) proporcionado por nosotros, y luego consultar el contenido del ReadMe. Compila y ejecuta. 

```shell
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd seeed-linux-dtoverlays/tools/rs485_control_DE/
sudo apt-get install libgpiod-dev
gcc -o rs485_DE rs485_DE.c -lgpiod
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 
```

Este programa creará un nuevo dispositivo ttyAMAx, donde el número del dispositivo depende de los parámetros que ingreses al ejecutar el programa.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/cfg_c.gif" /></center>

:::note
- El ejemplo anterior muestra cómo usar una interfaz RS485. Si quieres usar tres interfaces 485, puedes usar el siguiente script para lograrlo:
```shell
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 &
sudo ./rs485_DE /dev/ttyAMA3 /dev/gpiochip0 17 /dev/ttyAMA11 &
sudo ./rs485_DE /dev/ttyAMA5 /dev/gpiochip0 24 /dev/ttyAMA12 &
```

ttyAMA10~ttyAMA12 corresponde uno a uno con ttyAMA2~ttyAMA5. Use ttyAMA10~ttyAMA12 en su aplicación para comunicación normal (ttyAMA2~ttyAMA5 no se pueden usar, necesita usar el número de dispositivo recién creado por el script)
:::

## Pasos para usar la prueba Modbus RTU


**Paso 1**: Ingrese el siguiente script en reComputer R1000 para abrir el software minicom

```shell
minicom -D /dev/ttyAMAx -b 9600
```

Entre ellos, `-D` va seguido del número de dispositivo que deseas abrir, `-b` se refiere a la velocidad de baudios, y el número de dispositivo debe ser el número de dispositivo recién creado en el primer paso. Luego abre MobaXterm en la PC con W10, crea un nuevo terminal de puerto serie, selecciona el número de puerto serie, y la velocidad de baudios es 9600; finalmente, puedes realizar comunicación bidireccional con RS485. Como se muestra en la figura, el contenido ingresado en el reComputer R1000 puede enviarse a través de RS485. En la PC con W10, el contenido ingresado en la PC con W10 también puede enviarse al reComputer R1000, y la comunicación bidireccional es normal.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>


**Paso 2**: Después de probar la función RS485, puedes realizar la prueba de función Modbus. Este paso permite que el reComputer R1000 sea probado como un esclavo Modbus. Abre el software ModbusMechanic en el reComputer R1000, selecciona el número de dispositivo y la velocidad de baudios, luego haz clic en la función de esclavo simulado en la esquina superior izquierda para agregar dos bobinas; luego abre Modbus poll en W10 como la estación maestra para leer las bobinas de la estación esclava. Luego abre la ventana de visualización de Modbus poll, y puedes ver que los mensajes de envío y recepción de Modbus RTU son normales.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**Paso 3**: Este paso permite que el reComputer R1000 sea probado como un maestro Modbus. Abre el software ModbusMechanic tanto en el reComputer R1000 como en la PC con W10, y selecciona el número de dispositivo y la velocidad de baudios. La PC con W10 se refiere a la configuración del tercer paso. Selecciona `Read Coils(0x01)` en el reComputer R1000 para leer la bobina del esclavo, establece `Slave Node` en 1, `Register` selecciona la dirección que deseas leer, y finalmente haz clic en `Transmit packet`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>


## Pasos para usar las pruebas TCP de Modbus

**Paso 1**: Abre modbusmechanic en la PC con Win10 y en R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**Paso 2**: R1000 actúa como el host TCP de modbus. Haz clic en `Tool => Start Slave Simulator` en la PC con W10, selecciona `TCP` para TYPE, selecciona `1` para Slave ID, y luego agrega `Coils`; luego ingresa `IP` en R1000, y selecciona `Read Coil` para Scan group. Ingresa `Slave Node` y `Register`, y finalmente haz clic en `Transmit packet`. Puedes ver que los datos del esclavo han sido leídos exitosamente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**Paso 3**: R1000 actúa como un esclavo TCP de modbus. Consulta el segundo paso para la configuración. Puedes ver que R1000 puede leer datos normalmente como un esclavo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>


Ejecutar el programa esclavo TCP de Modbus en R1000 necesita escuchar en el puerto `502`, lo cual puede requerir permisos `sudo`. Si tu aplicación no puede escuchar en el puerto `502`, por favor intenta agregar permisos a la misma.

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
