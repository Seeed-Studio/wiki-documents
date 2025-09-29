---
description: Codesys para Edge Box RPi 200
title: Codesys para Edge Box RPi 200
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edgebox-rpi-200-codesys
last_update:
  date: 2/1/2023
  author: Peter Pan
---

<!-- ---
name: Edgebox-RPI-200
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 102110771
tags:
--- -->

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

La serie EdgeBox-RPi-200 son controladores de computación de borde industrial todo-en-uno basados en Raspberry Pi, que combinan múltiples propósitos industriales. Diseñados como hardware industrial robusto y de alta escalabilidad, montados con recursos de E/S abundantes y respaldados por el gran ecosistema de software industrial de Raspberry Pi, es una opción ideal para automatización inteligente y soluciones de Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

### Características

- Controlador Industrial Todo-en-Uno:
  
  - Más que solo un PLC, PAC, puede implementar funciones de Gateway IIoT, Servidor OPC UA y PC Industrial.
  
- Procesadores Potentes y Flexibles:
  
  - Alimentado por Raspberry Pi Compute Module 4 (CM4), equipado con hasta 4GB de RAM y 16GB eMMC, realizando operación en tiempo real y multiproceso.

- Recursos de E/S Abundantes e Interfaces Industriales Montadas:
  
  - Soporta una amplia gama de protocolos y estándares de bus industrial

- Múltiples Capacidades de Comunicación:
  
  - Lleva interconectividad inalámbrica completa y un Ethernet Gigabit RJ45, respaldado por múltiples servicios en la nube

- Diseño de Hardware Industrial Robusto de Grado Industrial:
  
  - Gestión térmica integrada con carcasa disipadora de aluminio completa, soportando montaje DIN de 35mm y montaje en pared

- Gran Ecosistema de Software Industrial de Raspberry Pi:
  
  - Soporta una variedad de software y plataformas industriales, incluyendo Codesys, Node Red, MQTT, OPC UA, Ignition y etc.

## ¿Qué es Codesys?

Codesys es un entorno de desarrollo de software estándar industrial integrado IEC 61131-3 para programar el controlador industrial y automatizaciones.

En este wiki hemos usado el software Codesys Development System V3 como IDE para configurar y programar software para ejecutar en el Edgebox-RPI-200 que es un controlador PLC basado en Raspberry Pi Computer Module 4, por lo tanto el runtime CODESYS Control for Raspberry Pi MC será instalado y configurado con el Edgebox-RPI-200.

## Prerrequisitos

- 1 x PC Host con Windows
- 1 x [Edgebox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- Software [CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en)
- Licencia e Instalador [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html)

Por favor visite la [página de descarga de CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en) para descargar el instalador de CODESYS Development System V3 según la configuración de su PC Host con Windows, y siga el asistente de instalación para instalar el programa.

Por favor visite [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) para comprar la Licencia, o compre [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-sl.html) según sus propias preferencias, y Descargue el paquete instalador de CODESYS para Raspberry Pi.

## Comenzando

### Preparación del Proyecto

:::note
Por favor asegúrese de tener el software CODESYS Development System V3 instalado y abierto en su computadora host.
:::

- **PASO 1:** **Instalar el paquete CODESYS Control for Raspberry PI en CODESYS Development System**

- **PASO 1-1:** Por favor **Abra** el **Codesys Installer** haciendo **clic** en "**"TOOLS> CODESYS Installer"**"

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer.png"/></div>

- **PASO 1-2:** Por favor **cierre** el **software CODESYS Development System V3** como se requiere durante la instalación del paquete, de lo contrario obtendrá una advertencia como se muestra a continuación:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/quit_codesys.png"/></div>

- **PASO 1-3:** Por favor haga clic en **"browse"** y seleccione **"CODESYS Control for Raspberry Pi MC SL package"** e **"install"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_1.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_3.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_4.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_6.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_7.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_8.png"/></div>

### Proyecto Toggle USER LED con Edgebox-RPI-200

:::note
Asegúrese de que el Edgebox-RPI-200 esté encendido y conectado a la misma red que su computadora host, necesitará obtener la dirección IP para Edgebox-RPI-200 de la tabla de asignaciones DHCP del router al que se ha conectado.
:::

- **PASO 1:** **Configuración del Proyecto**
- **PASO 1-1:** Abra el software CODESYS Development System V3 y seleccione **"File>New Project..."**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png"/></div>

- **PASO 1-2:** En la ventana **"New Project"**, bajo la ventana **"Categories"** seleccione **"projects"**, bajo **"Templates"** seleccione **"Standard project"**, **ingrese** el **nombre de su proyecto**, y luego haga clic en **"OK"**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_1.png"/></div>

- **PASO 1-3:** En la Ventana Standard Project, seleccione **"CODESYS Control for Raspberry Pi MC SL (CODESYS GmBH)"** para device, y para PLC_PRG en seleccione **"Ladder Logic Diagram (LD)"**, luego haga clic en **"OK"**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_3.png"/></div>

Debería ver una pantalla similar después de haber configurado un nuevo proyecto para Raspberry Pi:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_4.png"/></div>

- **PASO 2:** Configurar Edgebox-RPI-200

- **PASO 2-1:** Seleccione **"Tools>Update Raspberry Pi"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi.png"/></div>

- **PASO 2-2:** En el panel lateral de Raspberry Pi complete la siguiente información, seguido de hacer clic en el botón **"Install"** para instalar el **"CODESYS Control for Raspberry Pi MC runtime"** en Edgebox-RPI-200.

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_1.png"/></div>

- Credenciales de inicio de sesión
  - Username: pi
  - Password: raspberry
- Select Target:
  - IP Address: 192.168.1.40
- CODESYS Runtime Package
  - Version: 4.6.0.0(raspberry, armhf)

- **PASO 2-3:** En la ventana emergente **"Configure Runtime"** seleccione el **"runtime mode"** según sus preferencias, en este caso elegimos el **"Multicore"** predeterminado y hacemos clic en **"OK"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_2.png"/></div>

- **PASO 2-4:** Para confirmar que el **"CODESYS Control for Raspberry Pi MC runtime"** se está ejecutando en **"Edgebox-RPI-200"**, por favor haga clic en **"Start"** en la sección **"Runtime"**, y luego verifique que la ventana **"Messages"** indique que **"Standard output: codesyscontrol already running"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_3.png"/></div>

- **PASO 3:** **Configurar dispositivo GPIO:**

- **PASO 3-1:** Agregar GPIO en la pestaña Devices, primero seleccione la pestaña **"Devices"** en la barra lateral izquierda, luego **"haga clic derecho"** en el Device seleccione **"Add Device"** de la lista desplegable

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device.png"/></div>

- **PASO 3-2:** En la ventana **"Add Device"**, haga clic en **"+"** en Miscellaneous, y luego seleccione la opción **"GPIO"** y luego haga clic en **"Add Device"** para confirmar.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_1.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_2.png"/></div>

Ahora debería ver un nuevo dispositivo GPIO listado en la pestaña device.
<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_3.png"/></div>

- **PASO 3-3:** Agregar dispositivo GPIO de 1 bit, Haga clic derecho en el dispositivo **"GPIO"** recién agregado del paso anterior, y luego seleccione **"Add Device..."** en la lista desplegable.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_1.png"/></div>

- **PASO 3-4:** En la ventana **"Add Device"**, selecciona la opción **"GPIOS 1 bit"** y luego haz clic en **"Add Device"** para confirmar.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_2.png"/></div>

- **PASO 3-5:** Para configurar el GPIO, haz doble clic en el dispositivo recién agregado del paso anterior **"GPIOS_1_bit(GPIOs 1 bit)"** para abrir la ventana de configuración principal.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_3.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_4.png"/></div>

- **PASO 3-6:** En la ventana de **configuración principal** de **"GPIOs_1_bit"**, selecciona la primera pestaña **"GPIOSysfsModuleParameters"** para configurar y asignar la **Dirección del GPIO**, **Número de Pin** y **estado actual del PIN**. En este caso vamos a alternar el LED2 en el Edgebox-RPI-200 que es el Pin GPIO 21 según la [hoja de datos](#). Por lo tanto, la configuración del Pin debe ser la misma que se muestra a continuación.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_1.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_2.png"/></div>

- **PASO 3-7:** Mapear la E/S del GPIO, selecciona la segunda pestaña **"GPIOSysfsModule I/O Mapping"**, y luego asigna un nombre de variable al GPIO, en este caso lo llamo **"LED_in"** para **"entrada del GPIO 21"**, y **"LED_out"** para **"Salida del GPIO 21"**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_3.png"/></div>

:::note
Por favor elimina el dispositivo predeterminado **"GPIOs_A_B(GPIOs A/B)"** ya que interferirá con el nuevo dispositivo GPIO agregado.
:::

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/delete_gpio_AB.png"/></div>

- **PASO 4:** **Conectar al Edgebox-RPI-200 en Modo de Configuración en Línea para probar y alternar el LED2 en el Edgebox-RPI-200**

- **PASO 4-1:** Primero necesitamos configurar el Dispositivo haciendo doble clic en **"Deivce (CODESYS Control for Raspberry Pi MC SL)"**, esto abrirá la ventana de **configuración del dispositivo**.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device.png"/></div>

- **PASO 4-2:** En la pestaña de configuración **"Communication"** de la ventana de **"configuración del dispositivo"**, haz clic en la lista desplegable **"Device"** y luego selecciona **"Options>Manage Favorite Devices..."**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_1.png"/></div>

- **PASO 4-3:** En la ventana **"Manage Favorite Devices"**, haz clic en **"+ Add"**, en la ventana **"Add favorite"**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_2.png"/></div>

- **PASO 4-4:** por favor ingresa **la Dirección IP del Edgebox-RPI-200** en el cuadro **"Enter name, device address or IP address"**.

> En mi caso la dirección IP del Edgebox-RPI-200 es **"192.168.1.40"**, y luego haz clic en **"OK"** para confirmar.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_3.png"/></div>

- **PASO 4-5:** En la ventana **"Manage Favorite Devices"**, selecciona el **dispositivo de dirección IP recién agregado** para el campo Identifier y luego haz clic en **"OK"** para confirmar.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_4.png"/></div>

- **PASO 4-6:** En la pestaña de configuración **"Communication"** de la ventana de **"configuración del dispositivo"**, por favor **"haz clic"** en la lista desplegable y selecciona el dispositivo recién agregado **"IP Address"**, deberías ver información sobre el dispositivo conectado a continuación.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_6.png"/></div>
  
- **PASO 4-7:** Haz clic en el botón **"Online Config Mode..."** de la **"barra de herramientas"**, el icono del **"Online Config Mode..."** debería cambiar de verde a rojo, lo que significa que el IDE CODESYS Development System V3 está conectado al Edgebox-RPI-200 y podrías probar e interactuar directamente desde el IDE con el dispositivo de hardware conectado.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config.png"/></div>

- **PASO 4-8:** Ahora haz doble clic en **"GPIOs_1_bit(GPIOs 1 bit)"** desde la barra lateral del dispositivo para abrir la ventana de configuración.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config_1.png"/></div>

- **PASO 4-9:** Selecciona la segunda pestaña **"GPIOSysfsModule I/O Mapping"** en la ventana de configuración principal, deberías ver que el **"Current Value"** debería ser **"False"** tanto para LED_in como para LED_out, ahora puedes alternar el LED2 en el Edgebox-RPI-200 haciendo doble clic en **"False"** en la sección **"Current Value"** para alternar **"True/False"** para **"LED_out"**, donde el LED2 debería encenderse/apagarse según el Valor True/False.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio_1.png"/></div>

Puedes verificar el LED2 en tu Edgebox-RPI-200, debería responder al valor alternado:

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_led.jpg"/></div>

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
