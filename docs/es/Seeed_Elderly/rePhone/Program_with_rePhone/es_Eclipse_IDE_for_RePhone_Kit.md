---
description: Eclipse IDE para RePhone Kit
title: Eclipse IDE para RePhone Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Eclipse_IDE_for_RePhone_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone puede ser una herramienta de aprendizaje para que comiences proyectos interesantes. Actualmente, RePhone soporta varios entornos de desarrollo y lenguajes de desarrollo, puedes construir aplicaciones con C/C++ basado en Eclipse IDE, Arduino IDE, o con Lua y JavaScript.

Esta wiki es una Guía de Usuario para ayudarte a comenzar tu proyecto RePhone con Eclipse IDE.

| Versión del Producto| Pedido |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/es/RePhone_core_2G-Atmel32u4/)| [Comprar Ahora](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/es/Rephone_core_2G-AtmelSAMD21/)|[Comprar Ahora](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

## Descargar Eclipse IDE para RePhone
---
Antes de descargar el Arduino IDE para RePhone, asegúrate de tener una PC con lo siguiente:

*   Sistema operativo: Microsoft Windows XP, Vista, 7 u 8

*   Eclipse IDE: Indigo (3.7) con CDT 8.0.2.

Ahora haz clic en los siguientes iconos para descargar e instalar el Eclipse IDE para Desarrolladores de C/C++ desde el sitio web oficial de Eclipse. La instalación del IDE puede requerir que se instale un Kit de Desarrollo JAVA SE 8 apropiado en tu PC.

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide-02.png)](http://www.eclipse.org/downloads/packages/eclipse-ide-cc-developers-includes-incubating-components/indigosr2)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/JSE-03.png)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## Instalar el Complemento de Eclipse: LinkIt Assist 2502 SDK 2.0.46
---
Para hacer uso del RePhone y Eclipse IDE, necesitarías **instalar el complemento LinkIt Assist 2502 Eclipse en la misma carpeta que el Eclipse IDE**, donde se encuentra el '_eclipse.exe_'.

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

Para instalar el LinkIt Assist 2502 SDK 2.0.46, necesitas hacer lo siguiente:

**Paso 1.** Descarga el archivo zip del **LinkIt Assist 2502 SDK 2.0.46**.

**Paso 2.** Extrae el contenido del archivo zip LinkIt Assist 2502 SDK 2.0.46. Hay herramientas además del complemento de Eclipse incluidas en el SDK, así que considera extraer el contenido a una ubicación permanente. Si extraes el contenido a una ubicación temporal, el instalador te dará la opción de moverlo a una ubicación permanente.

**Paso 3.** Asegúrate de que el Eclipse IDE no esté ejecutándose.

**Paso 4.** Ejecuta el instalador del LinkIt Assist 2502 SDK 2.0.46 '**InstallPlugins.exe**' como se muestra en la siguiente figura:

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_1.png)

**Paso 5.** En la Página de Bienvenida, haz clic en '**Next**'

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_2.png)

**Paso 6.** Ahora se te pedirá que selecciones la ubicación del Eclipse IDE. Haz clic en '**Browse**' y localiza la carpeta en la que instalaste Eclipse IDE (la carpeta designada donde instalaste el '**Eclipse IDE for C/C++ Developer**') Haz clic en '**OK**' y '**Next**'.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_3.png)

**Paso 7.** En Mover SDK a ubicación permanente, marca '**Move LinkIt Assist 2502 2.0 package to new folder**' si has extraído el archivo zip en una ubicación temporal. Haz clic en '**Browse**' y localiza una ubicación permanente en la cual almacenar el SDK. Luego haz clic en '**Next**' para ir al siguiente paso.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_4.png)

**Paso 8.** En Listo para instalar el SDK. Revisa las ubicaciones seleccionadas, si están bien haz clic en '**Install**'.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_5.png)

**Paso 9.** En el último paso de la instalación, **marca** '**Install the MediaTek USB Driver**' si esta es tu primera vez instalando un LinkIt SDK, luego haz clic en '**Finish**' para completar la instalación.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_6.png)

**Paso 10.** Una vez que la instalación del complemento esté terminada, habrá una carpeta llamada '**LINKIT_ASSIST_SDK**' en la ubicación donde instalaste el Eclipse IDE.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_77.png)

También puedes encontrar los complementos en tu ventana de Eclipse una vez que abras el "**eclipse.exe**", ve el **Paso 8** en la siguiente sección - "**Crea Tu Primer Proyecto: Hello World**"

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Plug-ins.png)

##  Actualizar/Flashear el Firmware
---
**NB: Por favor, ten en cuenta que flashear el firmware eliminará todas las configuraciones y archivos (imágenes, música) almacenados en el RePhone. Asegúrate de estar consciente de esto antes de flashear/actualizar el firmware.**

Sé que has estado ansioso por tu RePhone y no puedes esperar a empezar a programar, pero espera un segundo. Antes de hacer eso, es esencial asegurarse de que el firmware del módulo principal - Xadow GSM+BLE corresponda al LinkIt Assist SDK que acabas de instalar.

Aquí te presento dos formas de actualizar/flashear el firmware de tu RePhone.

####  **Actualizador de Firmware Integrado del LinkIt Assist SDK**

* * *

**Paso 1.** Primero, asegúrate de que tu Xadow GSM+BLE esté desconectado de tu PC, luego descarga el **último RePhone SDK** de nuestro Github, descomprímelo.

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Download_RePhone_SDK.png)](https://github.com/WayenWeng/RePhone_SDK_Bin_Update//)

**Paso 2.** Ejecuta el **'FirmwareUpdater.exe'** en la carpeta del SDK que acabas de instalar, se puede encontrar en la ruta _'eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\FirmwareUpdater.exe'_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_firmwareupdater_000.png)

**Paso 3.** En la ventana del LinkIt Firmware Updater, selecciona **'Others'** como la plataforma en la lista desplegable. Luego localiza _**...\SEEED02A_DEMO_PCB01_gprs_MT2502_S00.MAUI_11CW1418SP5_W15_29.bin\SEEED02A_DEMO_BB.cfg**_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update.png)

**Paso 4.** Haz clic en el **botón verde de actualización**, y sigue las instrucciones de 2 pasos en la pantalla, **asegúrate de que el Xadow GSM+BLE esté alimentado (conectado a la batería)** cuando lo conectes a la PC.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_2.png)

**Paso 5.** Espera hasta que termine la descarga.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_3.png)

**Paso 6.** Cuando la actualización del firmware se complete, esto se confirmará en la página de Descarga Completa, haz clic en '**OK**' y sal del actualizador.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_4.png)

##  Crea Tu Primer Proyecto: Hello World
---
**Paso 1.** ¡Casi llegamos! Ahora ejecuta **eclipse.exe**. Si esta es tu primera vez usando el Eclipse IDE, se te pedirá que selecciones un **Workspace** para tus proyectos de eclipse. En el Workspace Launcher, haz clic en **Browse** para encontrar una ubicación apropiada como tu Workspace. Te recomiendo que configures tu workspace en la misma ubicación donde instalaste el Eclipse IDE.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_1.png)

**Paso 2.** Para crear una nueva aplicación RePhone - en el menú **File** de Eclipse, apunta a **new** y haz clic en **Other**. O puedes simplemente usar la tecla de acceso directo **CTRL+N**.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_2.jpg)

**Paso 3.** En la ventana New, expande la carpeta **LinkIt Assist 2502 SDK 2.0** y selecciona **Application(*.vxp)**

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_3.png)

**Paso 4.** Ahora eres dirigido al **LinkIt Assist 2502 SDK 2.0 Wizard**

*   Ingresa el nombre para tu nuevo proyecto, en este caso lo nombramos como "**hello_world**"

*   En el menú desplegable de **Hardware Platform**, elige **LinkIt Assist 2502**

*   Marca **Empty Application**

*   Haz clic en **Finish** para completar la configuración

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_4.png)

**Paso 5.** ¡Felicidades! XD ¡Acabas de crear tu primer proyecto! Ahora abre el proyecto desde el panel de C/C++ Projects y haz doble clic en el archivo "**hello_world.c**", como se muestra a continuación

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_5.png)

**Paso 6.** Antes de subir la aplicación, necesitas

*   encender tu RePhone **conectando la batería** al conector de batería en el Xadow GSM+BLE**, presiona y mantén presionada la tecla de encendido (PWR) por 2 segundos para** **encenderlo** (entonces el indicador LED muestra **VERDE**)

*   luego conecta tu RePhone a la PC con un cable Micro USB.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**Paso 7.** Abre el **Device Manager** para verificar los puertos COM. Habrá dos **puertos COM** (el número COM podría ser diferente en tu PC):

*   **MTK USB Debug Port(COM4)** se usa para logs, como imprimir mensajes en el monitor serial

*   **MTK USB Modem Port(COM5)** se usa para subir código

Abre el **Device Manager** haciendo clic en el botón **Start**, haciendo clic en **Control Panel**, haciendo clic en **System and Security**, y luego, bajo **System**, haciendo clic en **Device Manager**. Si se te solicita una contraseña de administrador o confirmación, escribe la contraseña o proporciona la confirmación. Ve la siguiente imagen:

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Check_ports.png)

**Paso 8.** ¡Casi llegamos! Pon el siguiente código en el "**hello_world.c**":
```
#include "vmsystem.h"
#include "vmtype.h"
#include "vmlog.h"
#include "vmtimer.h"
#include "ResID.h"
#include "hello_world.h"

VM_TIMER_ID_PRECISE sys_timer_id = 0;

void sys_timer_callback(VM_TIMER_ID_PRECISE sys_timer_id, void* user_data)
{
    vm_log_info("Hello World!");
}

void handle_sysevt(VMINT message, VMINT param)
{
    switch (message)
    {
        case VM_EVENT_CREATE:

        sys_timer_id = vm_timer_create_non_precise(1000, sys_timer_callback, NULL);
        break;
        case VM_EVENT_PAINT:
        break;
        case VM_EVENT_QUIT:
        break;
    }
}

void vm_main(void)
{
    vm_pmng_register_system_event_callback(handle_sysevt);
}
```

*   Haz clic en **Build Application** para subir la aplicación, como se indica en la imagen a continuación:

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_6.png)

*   Una vez que la aplicación se haya subido exitosamente, se reportará en la **Console** en la parte inferior, si no se muestra, ábrela nuevamente en _**Window/Show View/Console**_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_7.png)

**Paso 9.** Abre el **Monitor** en el _LinkIt Assist Plug-in_.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_8.png)

Se te pedirá **Set Database Path**, si no es así, dirígete al menú **Config** y haz clic en **Set Database Path**

*   Haz clic en el icono "**...**" como se indica en la imagen a continuación

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_9.png)

*   Localiza "_**eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\firmware\LinkIt_Device\LinkIt_Assist_2502\W15.19.p2\database.db**_ ", haz clic en **Open**

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_10.png)

*   También selecciona el **puerto COM** como **MTK USB Debug Port(COM4)**, y **Baud Rate** tiene un valor predeterminado de **115200**.

El número COM del Debug Port podría ser diferente en tu PC, solo asegúrate de que sea el **MTK USB Debug Port** listado en **Device Manager**.

Si la ventana no se muestra, dirígete al menú **Config** y haz clic en **Configure RS232...**

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_11.png)

**Paso 10.** ¡¡Has hecho un gran trabajo!! ¡Ahora di "Hola" al mundo!

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_12.png)

##  Restablecer a valores predeterminados
---
**Ten en cuenta que restablecer tu Rephone a valores predeterminados eliminará todas las configuraciones y archivos (imágenes, música) en el RePhone, ten esto en cuenta antes de restablecerlo a valores predeterminados.**

Para restablecer tu RePhone a **VALORES PREDETERMINADOS**:

1. Sigue las instrucciones en la sección "Update/Flash the Firmware" para flashear el firmware

2. Descarga el archivo RePhone_Create_Kit_VXP

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. Enter the [RePhone Mass Storage Mode](/es/Xadow_GSMPlusBLE#Operating_Mode) -->

4. Copia todo lo que está bajo el archivo llamado "RePhone Create Kit VXP" en el almacenamiento masivo de 5MB del RePhone.

5. Reinicia tu RePhone y estará listo. Como el restablecimiento ha eliminado todos los archivos, también tendrás que poner un archivo mp3 en el almacenamiento masivo para el uso del tono de llamada.

##  Comunidad RePhone
---
[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)!

Juntos buscamos respuestas, hacemos cosas interesantes, nos preocupamos unos por otros, y compartimos nuestras experiencias.

##  Más Acerca del LinkIt Assist SDK
---
Como RePhone está desarrollado principalmente con el LinkIt Assist SDK, y Mediatek ha creado una guía de desarrollador muy detallada para los desarrolladores, para encontrar más información puedes consultar:

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_en-06.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_Developers_Guide_v1_1.pdf)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_cn-07_1.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_cn_v1_1.pdf)

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
