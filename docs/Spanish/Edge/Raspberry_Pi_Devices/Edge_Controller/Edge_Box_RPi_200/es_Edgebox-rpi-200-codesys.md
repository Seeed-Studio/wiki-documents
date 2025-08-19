---
description: Codesys para Edge Box RPi 200
title: Codesys for Edge Box RPi 200
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edgebox-rpi-200-codesys
last_update:
  date: 02/13/2025
  author: Erick González
---

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg"/></div>

Las series EdgeBox-RPI-200 son controladores de computación perimetral industrial todo en uno basados en Raspberry Pi, que combinan múltiples propósitos industriales. Diseñados como hardware industrial de alta escalabilidad y robustez, montados con abundantes recursos de E/S y respaldados por el sólido ecosistema de software industrial de Raspberry Pi, son una opción ideal para la automatización inteligente y soluciones de Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
    </a>
</div>

### Características

- **Controlador Industrial Todo-en-Uno**:
  - Más que un PLC o PAC, puede implementar funciones de pasarela IIoT, servidor OPC UA y computadora industrial.
- **Procesadores Potentes y Flexibles**:
  - Basados en Raspberry Pi Compute Module 4 (CM4), con hasta 4GB de RAM y 16GB eMMC, ofreciendo operación en tiempo real y multiproceso.
- **Recursos de E/S e Interfaces Industriales Ricos**:
  - Soporta una amplia gama de protocolos y estándares de bus industrial.
- **Múltiples Capacidades de Comunicación**:
  - Incluye conectividad inalámbrica completa y Ethernet Gigabit RJ45, soportado por varios servicios en la nube.
- **Diseño de Hardware Robusto de Nivel Industrial**:
  - Gestión térmica integrada con carcasa de aluminio disipador, soporta montaje en riel DIN de 35mm y montaje en pared.
- **Gran Ecosistema de Software Industrial de Raspberry Pi**:
  - Soporta variedad de software y plataformas industriales, incluyendo Codesys, Node Red, MQTT, OPC UA, Ignition, etc.

## ¿Qué es Codesys?

Codesys es un entorno de desarrollo integrado que cumple con el estándar industrial IEC 61131-3 para programar controladores y automatizaciones industriales.

En esta wiki, usaremos el software **Codesys Development System V3** como IDE para configurar y programar el software que se ejecutará en el Edgebox-RPI-200, un controlador PLC basado en Raspberry Pi Compute Module 4. Por lo tanto, instalaremos y configuraremos **CODESYS Control for Raspberry Pi MC runtime** en el Edgebox-RPI-200.

## Prerrequisitos

- 1 x Computadora host con Windows
- 1 x [Edgebox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- [CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en) Software
- [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) Licencia e instalador

Por favor, visita la [página de descarga de CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en) para obtener el instalador, según la configuración de tu PC host con Windows, y sigue el asistente de instalación.

Por favor, visita [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) para comprar la licencia (o [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-sl.html) según tus preferencias) y descargar el paquete instalador de Raspberry Pi CODESYS.

## Primeros pasos

### Preparación del Proyecto

:::note
Asegúrate de tener instalado y abierto el software CODESYS Development System V3 en tu computadora host.
:::

- **PASO 1:** **Instalar CODESYS Control for Raspberry PI package en CODESYS Development System**

- **PASO 1-1:** Abre el **Codesys Installer** haciendo clic en "**TOOLS > CODESYS Installer**".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer.png"/></div>

- **PASO 1-2:** Cierra el software **CODESYS Development System V3** como se requiere durante la instalación del paquete, de lo contrario obtendrás una advertencia como se muestra:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/quit_codesys.png"/></div>

- **PASO 1-3:** Haz clic en **"browse"** y selecciona **"CODESYS Control for Raspberry Pi MC SL package"**, luego **"install"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_1.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_2.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_3.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_4.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_5.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_6.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_7.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_8.png"/></div>

### Proyecto para Alternar la LED de Usuario con Edgebox-RPI-200

:::note
Asegúrate de que el Edgebox-RPI-200 esté encendido y conectado a la misma red que tu computadora host. Necesitarás la dirección IP del Edgebox-RPI-200 desde la tabla de arrendamientos DHCP del router.
:::

- **PASO 1:** **Configuración del Proyecto**

- **PASO 1-1:** Abre el software CODESYS Development System V3 y selecciona **"File > New Project..."**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png"/></div>

- **PASO 1-2:** En la ventana **"New Project"**, en **"Categories"** selecciona **"projects"**, en **"Templates"** selecciona **"Standard project"**, ingresa un nombre para tu proyecto y haz clic en **"OK"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_1.png"/></div>

- **PASO 1-3:** En la ventana Standard Project, selecciona **"CODESYS Control for Raspberry Pi MC SL (CODESYS GmBH)"** como dispositivo, y para PLC_PRG elige **"Ladder Logic Diagram (LD)"**, luego haz clic en **"OK"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_2.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_3.png"/></div>

Deberías ver una pantalla similar tras configurar un nuevo proyecto para Raspberry Pi:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_4.png"/></div>

- **PASO 2:** **Configurar Edgebox-RPI-200**

- **PASO 2-1:** Selecciona **"Tools > Update Raspberry Pi"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi.png"/></div>

- **PASO 2-2:** En el panel lateral de Raspberry Pi, completa la información y haz clic en **"Install"** para instalar **"CODESYS Control for Raspberry Pi MC runtime"** en Edgebox-RPI-200.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_1.png"/></div>

- Credenciales de inicio de sesión:
  - Username: `pi`
  - Password: `raspberry`
- IP Address: 192.168.x.x (ejemplo)
- Paquete de Runtime de CODESYS
  - Versión: 4.6.0.0(raspberry, armhf)

- **PASO 2-3:** En la ventana emergente **"Configure Runtime"**, selecciona el **"runtime mode"** según prefieras. Aquí elegimos **"Multicore"** y haz clic en **"OK"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_2.png"/></div>

- **PASO 2-4:** Para confirmar que **"CODESYS Control for Raspberry Pi MC runtime"** se está ejecutando en **Edgebox-RPI-200**, haz clic en **"Start"** en la sección **"Runtime"**, y revisa la ventana **"Messages"** donde debe indicar **"Standard output: codesyscontrol already running"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_3.png"/></div>

- **PASO 3:** **Configurar GPIO Device**

- **PASO 3-1:** Agrega GPIO en la pestaña Devices. Primero selecciona **"Devices"** en la barra lateral izquierda, luego haz clic derecho en **"Device"** y selecciona **"Add Device"**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device.png"/></div>

- **PASO 3-2:** En la ventana **"Add Device"**, haz clic en **"+"** en Miscellaneous y selecciona **"GPIO"**, luego **"Add Device"**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_1.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_2.png"/></div>

Deberías ver un nuevo dispositivo GPIO en la lista.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_3.png"/></div>

- **PASO 3-3:** Agrega un GPIO de 1 bit. Haz clic derecho en **"GPIO"** y selecciona **"Add Device..."**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_1.png"/></div>

- **PASO 3-4:** En la ventana **"Add Device"**, selecciona **"GPIOS 1 bit"** y haz clic en **"Add Device"**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_2.png"/></div>

- **PASO 3-5:** Para configurar el GPIO, haz doble clic en **"GPIOS_1_bit(GPIOs 1 bit)"**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_3.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_4.png"/></div>

- **PASO 3-6:** En la pestaña **"GPIOSysfsModuleParameters"**, asigna la **dirección**, **número de pin** y **estado actual** del pin. Vamos a alternar el LED2 en Edgebox-RPI-200 que corresponde a GPIO Pin 21 según la [hoja de datos] (#). Configura el pin como se muestra.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_1.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_2.png"/></div>

- **PASO 3-7:** Mapeo de GPIO I/O. En la segunda pestaña **"GPIOSysfsModule I/O Mapping"**, asigna un nombre de variable, por ejemplo **"LED_in"** para **"GPIO 21 input"** y **"LED_out"** para **"GPIO 21 Output"**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_3.png"/></div>

:::note
Elimina el dispositivo por defecto **"GPIOs_A_B(GPIOs A/B)"** para evitar interferencias con el nuevo dispositivo GPIO.
:::

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/delete_gpio_AB.png"/></div>

- **PASO 4:** **Conectarse al Edgebox-RPI-200 en modo Online Config para probar y alternar el LED2**

- **PASO 4-1:** Primero configura el **Device** haciendo doble clic en **"Device (CODESYS Control for Raspberry Pi MC SL)"**, esto abrirá la ventana de configuración del dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device.png"/></div>

- **PASO 4-2:** En la pestaña **"Communication"**, haz clic en el menú desplegable **"Device"** y selecciona **"Options > Manage Favorite Devices..."**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_1.png"/></div>

- **PASO 4-3:** En la ventana **"Manage Favorite Devices"**, haz clic en **"+ Add"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_2.png"/></div>

- **PASO 4-4:** Ingresa la **dirección IP del Edgebox-RPI-200** en la casilla **"Enter name, device address or IP address"**. Ej. "192.168.1.40" y haz clic en **"OK"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_3.png"/></div>

- **PASO 4-5:** Selecciona el nuevo dispositivo en la ventana **"Manage Favorite Devices"** y haz clic en **"OK"**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_4.png"/></div>

- **PASO 4-6:** En la pestaña **"Communication"** de la ventana de configuración, selecciona el nuevo dispositivo. Deberías ver la información del dispositivo conectado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_5.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_6.png"/></div>

- **PASO 4-7:** Haz clic en **"Online Config Mode..."** en la barra de herramientas. El ícono cambiará de verde a rojo, indicando que el IDE CODESYS se conectó al Edgebox-RPI-200 y permite probar la interacción directamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config.png"/></div>

- **PASO 4-8:** Haz doble clic en **"GPIOs_1_bit(GPIOs 1 bit)"** en la barra lateral de dispositivos para abrir la ventana de configuración.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config_1.png"/></div>

- **PASO 4-9:** Selecciona la segunda pestaña **"GPIOSysfsModule I/O Mapping"**. Verás que **"Current Value"** es **"False"** tanto para LED_in como LED_out. Ahora puedes alternar la LED2 en el Edgebox-RPI-200 haciendo doble clic en **"False"** en la columna **"Current Value"** para **"LED_out"**, cambiando entre **True/False**, y observarás cómo LED2 se enciende o apaga.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio_1.png"/></div>

Puedes verificar la LED2 en tu Edgebox-RPI-200 y ver su respuesta de encendido/apagado:

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_led.jpg"/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
