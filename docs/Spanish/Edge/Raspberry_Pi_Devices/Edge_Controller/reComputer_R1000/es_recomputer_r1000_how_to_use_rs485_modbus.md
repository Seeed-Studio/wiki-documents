---
description: Este artículo introduce cómo utilizar la función de comunicación 485 del reComputer R1000 y prueba las funciones de comunicación RS485 y Modbus.
title: Cómo usar RS485 y Modbus con reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/r1000_connection_1.webp
slug: /es/recomputer_r1000_use_rs485_modbus_rtu
last_update:
  date: 02/18/2025
  author: Erick González
---

## Introducción
Este artículo introduce cómo utilizar la función de comunicación 485 del reComputer R1000 y prueba las funciones de comunicación RS485 y Modbus.

## Primeros Pasos

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación, como se describe aquí.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

description: Este artículo introduce cómo utilizar la función de comunicación 485 del reComputer R1000 y prueba las funciones de comunicación RS485 y Modbus.
title: Cómo usar RS485 y Modbus con reComputer R1000

## Introducción
Este artículo introduce cómo utilizar la función de comunicación 485 del reComputer R1000 y prueba las funciones de comunicación RS485 y Modbus.

## Primeros Pasos

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación, como se describe aquí.

### Preparación del Hardware

### Software

* Usar [modbus poll](https://www.modbustools.com/modbus_poll.html) en tu PC con Windows 10. También puedes usar otras herramientas de prueba de Modbus.
* Usar [modbusmechanic](https://modbusmechanic.scifidryer.com/) en reComputer R1000 y Windows 10. También puedes usar otras herramientas de prueba de Modbus.
* Usar [mobaxterm](https://mobaxterm.mobatek.net/) en tu PC con Windows 10. También puedes usar otras herramientas de prueba de puertos seriales.
* Debes descargar la herramienta **minicom** en el reComputer R1000 con el siguiente comando:

```sh
sudo apt-get install minicom
```

### Configuración del Hardware

Esta prueba utiliza un módulo RS485 a USB para conectar el reComputer R1000 y un PC con Windows 10.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

Para ModbusTCP, utilizamos cables Ethernet para conectar la PC con Windows 10 y el reComputer R1000 a un switch para asegurarnos de que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Configurar minicom en reComputer R1000 v1.1

**NOTA:** Antes de usar RS485 con minicom, instala los controladores del R1000 siguiendo [estas instrucciones](https://wiki.seeedstudio.com/recomputer_r1000_flash_OS/#install-drivers).

### Primer paso: Instalar minicom

Instala minicom tanto en tu computadora host como en el reComputer R1000 con el siguiente comando:

```sh
sudo apt install minicom
```

### Segundo paso: Configurar minicom

Abre una terminal con `Ctrl+Alt+T` e ingresa el siguiente comando:

```sh
sudo minicom -D /dev/ttyAMA*
```

El `ttyAMA*` debe ser `ttyAMA2, ttyAMA3 o ttyAMA4`, dependiendo de qué puerto RS485 estés utilizando.

Luego, presiona `Ctrl+A` y luego `Z`, verás la interfaz de minicom como la siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

Presiona `o` para configurar minicom y selecciona `Serial port setup`, verás la siguiente pantalla:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

Luego, presiona `F` y `H` para cambiar minicom al modo RS485. El resultado será el siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

Finalmente, selecciona `Exit` y presiona `Enter` para salir de la configuración:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>


## Acciones requeridas para reComputer R1000 v1.0

Para reComputer R1000 v1.0, el pin DE del transceptor 485 incorporado está fuera de control por defecto, lo que significa que las interfaces solo pueden transmitir datos en una dirección (solo recibir o solo enviar).

:::note
Para distinguir entre las revisiones de hardware (v1.0 y v1.1), puedes consultar los [detalles del cambio de producto de reComputer R1000 V1.1](https://wiki.seeedstudio.com/recomputer_r1000_v1_1_description/).
:::

Actualmente, existen dos soluciones: una es **cargar un módulo del kernel que se enganche al controlador UART (recomendada)** y la otra es una solución a nivel de aplicación que simplemente llama a `libgpiod` para controlar los pines DE. Puedes elegir la que mejor se adapte a tus necesidades.

### Solución con módulo del kernel (recomendada)

#### Instalación

Primero, descarga el código fuente del módulo del kernel. Es un repositorio independiente, por lo que puedes clonarlo directamente.

```shell
git clone https://github.com/bclswl0827/r1000v1-rs485-autoflow
cd r1000v1-rs485-autoflow
```

Luego, compila el módulo del kernel.

```shell
make
```

Si encuentras errores al compilar, puede que necesites instalar los encabezados del kernel correspondientes a tu versión actual del sistema. Suponiendo que usas Raspberry Pi OS, puedes instalar los encabezados con el siguiente comando:

```shell
sudo apt-get install linux-headers-$(uname -r)
```

Después de eso, vuelve a compilar el módulo del kernel.

#### Cargar el módulo del kernel

Después de compilarlo, puedes cargar el módulo con el siguiente comando:

```shell
sudo insmod r1000v1-rs485-autoflow.ko
```

Si el módulo del kernel se cargó correctamente, deberías ver el siguiente mensaje en el registro del kernel. Verifícalo con el comando `dmesg`.

```shell
[  256.037465] r1000v1_rs485_autoflow: RS-485 interface has been hooked successfully
```

Ahora puedes usar la herramienta `minicom` para probar la comunicación RS485. También puedes usar otras herramientas de prueba de puertos serie, como `picocom`.

Para cargar el módulo automáticamente en el arranque, agrégalo al archivo `/etc/modules` con el siguiente comando.

```shell
echo "r1000v1_rs485_autoflow" | sudo tee -a /etc/modules
```

Después de registrar el módulo, necesitas reiniciar el sistema para que los cambios surtan efecto.

```shell
sudo reboot
```

#### Descargar el módulo del kernel

Para descargar el módulo del kernel, ejecuta el siguiente comando. La interfaz RS485 incorporada volverá al modo solo recepción.

```shell
sudo rmmod r1000v1-rs485-autoflow
```

#### Agregar el módulo con DKMS

DKMS (Dynamic Kernel Module Support) es un sistema que automatiza la compilación e instalación de módulos del kernel, haciéndolo útil para gestionar módulos a través de múltiples versiones del kernel. Al usar DKMS, puedes asegurarte de que tus módulos sigan siendo compatibles incluso después de una actualización del kernel.

Para agregar este módulo del kernel con DKMS, usa el siguiente comando:

```shell
sudo make dkms_install
```

Este comando registrará el módulo con DKMS, lo compilará y lo instalará para la versión actual del kernel. Cuando el kernel se actualice en el futuro, DKMS recompilará e instalará automáticamente el módulo para la nueva versión, evitando que lo hagas manualmente.

### Solución a nivel de aplicación

#### Uso de script

Además de los métodos mencionados en este artículo, también proporcionamos un script que puedes ejecutar con el siguiente comando. Este script puede crear automáticamente un nuevo dispositivo `/dev/ttyx` y luego usar el número de dispositivo recién creado para realizar comunicación RS485/Modbus RTU.

```shell
curl -sSL https://raw.githubusercontent.com/Seeed-Projects/R1000-RS485-Util/main/setup_rs485.sh | sudo bash
```

#### Configuración manual

Primero, debes descargar el [**programa en C**](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE) que proporcionamos, y luego referirte al contenido del ReadMe. Compila y ejecuta el programa.

```shell
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd seeed-linux-dtoverlays/tools/rs485_control_DE/
sudo apt-get install libgpiod-dev
gcc -o rs485_DE rs485_DE.c -lgpiod
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 
```

Este programa creará un nuevo dispositivo ttyAMAx, donde el número del dispositivo dependerá de los parámetros que ingreses al ejecutar el programa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/cfg_c.gif" /></center>

:::note
- El ejemplo anterior muestra cómo usar una interfaz RS485. Si deseas utilizar tres interfaces 485, puedes usar el siguiente script:

```shell
sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 &
sudo ./rs485_DE /dev/ttyAMA3 /dev/gpiochip0 17 /dev/ttyAMA11 &
sudo ./rs485_DE /dev/ttyAMA5 /dev/gpiochip0 24 /dev/ttyAMA12 &
```

`ttyAMA10~ttyAMA12` corresponden a `ttyAMA2~ttyAMA5` uno a uno. Usa `ttyAMA10~ttyAMA12` en tu aplicación para la comunicación normal (no puedes usar `ttyAMA2~ttyAMA5`, necesitas utilizar el número de dispositivo recién creado por el script).
:::

## Pasos para probar Modbus RTU

**Paso 1**: Ingresa el siguiente comando en el reComputer R1000 para abrir el software minicom:

```shell
minicom -D /dev/ttyAMAx -b 9600
```

Donde `-D` va seguido del número del dispositivo que deseas abrir, `-b` se refiere a la velocidad en baudios, y el número del dispositivo debe ser el recién creado en el primer paso. Luego, abre MobaXterm en la PC con Windows 10, crea un nuevo terminal de puerto serie, selecciona el número de puerto serie y configura la velocidad en baudios a 9600. Finalmente, puedes realizar la comunicación bidireccional con RS485. Como se muestra en la imagen, el contenido ingresado en el reComputer R1000 se envía a través de RS485, y el contenido ingresado en la PC con Windows 10 también se envía al reComputer R1000, asegurando una comunicación bidireccional normal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**Paso 2**: Después de probar la función RS485, puedes realizar la prueba de la función Modbus. En este paso, el reComputer R1000 se probará como un esclavo Modbus. Abre el software ModbusMechanic en el reComputer R1000, selecciona el número de dispositivo y la velocidad en baudios, luego haz clic en la función de simulación de esclavo en la parte superior izquierda para agregar dos bobinas. Luego, abre Modbus Poll en Windows 10 como estación maestra para leer las bobinas del esclavo. Después de abrir la ventana de visualización de Modbus Poll, puedes ver que el envío y la recepción de mensajes de Modbus RTU son normales.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**Paso 3**: En este paso, el reComputer R1000 se probará como maestro Modbus. Abre el software ModbusMechanic en ambos dispositivos (reComputer R1000 y Windows 10), selecciona el número de dispositivo y la velocidad en baudios. En la PC con Windows 10, sigue los pasos del tercer paso de configuración. En el reComputer R1000, selecciona `Read Coils(0x01)` para leer la bobina del esclavo, configura `Slave Node` en 1, selecciona la dirección que deseas leer en `Register`, y finalmente haz clic en `Transmit packet`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

## Pasos para probar Modbus TCP

**Paso 1**: Abre ModbusMechanic en la PC con Windows 10 y en el reComputer R1000.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**Paso 2**: El reComputer R1000 actúa como host Modbus TCP. En la PC con Windows 10, haz clic en `Tool => Start Slave Simulator`, selecciona `TCP` en TYPE, `1` en Slave ID, y luego agrega `Coils`. Luego, en el reComputer R1000, ingresa la dirección IP, selecciona `Read Coil` en Scan Group, ingresa `Slave Node` y `Register`, y finalmente haz clic en `Transmit packet`. Verás que los datos del esclavo se han leído con éxito.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**Paso 3**: El reComputer R1000 actúa como esclavo Modbus TCP. Sigue los mismos pasos del segundo paso para la configuración. Verás que el reComputer R1000 puede leer datos normalmente como esclavo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

Ejecutar el programa esclavo Modbus TCP en el reComputer R1000 requiere escuchar el puerto `502`, lo que puede requerir permisos `sudo`. Si tu aplicación no puede escuchar el puerto `502`, intenta agregar permisos a la aplicación.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
