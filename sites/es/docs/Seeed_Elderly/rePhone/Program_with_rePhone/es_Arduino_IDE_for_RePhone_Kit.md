---
description: Arduino IDE para RePhone Kit
title: Arduino IDE para RePhone Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arduino_IDE_for_RePhone_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone puede ser una herramienta de aprendizaje para que comiences proyectos interesantes. Actualmente, RePhone soporta varios entornos de desarrollo y lenguajes de desarrollo, puedes construir aplicaciones ya sea con C/C++ basado en Eclipse IDE, Arduino IDE, o con Lua y JavaScript.

Esta wiki es una Guía de Usuario para ayudarte a comenzar tu proyecto RePhone con Arduino IDE.

| Versión del Producto| Pedido |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/es/RePhone_core_2G-Atmel32u4/)| [Comprar Ahora](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/es/Rephone_core_2G-AtmelSAMD21/)|[Comprar Ahora](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

Descargar Arduino IDE para RePhone
--------------------------------

Antes de descargar el Arduino IDE para RePhone, asegúrate de tener un sistema operativo como sigue:

**Windows XP/Vista/7/8/8.1**

Hemos puesto el Arduino IDE para RePhone en nuestro GitHub, y eres muy bienvenido a enviarnos un 'pull request' para ayudarnos a optimizarlo y mejorarlo.

Si alguna vez has usado el Arduino IDE antes, entonces esto debería ser pan comido. Si no estás familiarizado con Arduino, lo cual también está bien, solo sigue las instrucciones, y comenzarás con Arduino IDE fácil y rápidamente.

Ahora haz clic en

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Download_Arduino_IDE_for_RePhone.png)](https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone)

En la página de Github, haz clic en **Download ZIP** para descargar el archivo como se muestra en la imagen a continuación:

![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Click_to_download_Arduino_IDE_for_RePhone.png)

Cuando la descarga esté completa, descomprime el archivo en una ubicación apropiada.

Instalar el Controlador
------------------

### Deshabilitar la Aplicación de Firma de Controladores bajo Windows 8 / 8.1

Si estás usando Windows8/8.1, necesitarías deshabilitar **Driver Signature Enforcement** primero para poder instalar el controlador.

**Deberías guardar los archivos que estás editando antes de intentar desactivar la 'Driver Signature Enforcement' ya que tu sistema se apagará durante la operación.**

Ahora sigue las instrucciones a continuación para deshabilitar la 'Driver Signature Enforcement.'

1.  Presiona "Tecla de Windows" +"R"
2.  Ingresa shutdown.exe /r /o /f /t 00
3.  Haz clic en el botón "OK".
4.  El sistema se reiniciará a una pantalla "Choose an option"
5.  Selecciona "Troubleshoot" de la pantalla "Choose an option"
6.  Selecciona "Advanced options" de la pantalla "Troubleshoot"
7.  Selecciona "Windows Startup Settings" de la pantalla "Advanced options"
8.  Haz clic en el botón "Restart"
9.  El sistema se reiniciará a la pantalla "Advanced Boot Options"
10. Selecciona "Disable Driver Signature Enforcement"
11. Una vez que el sistema inicie, puedes instalar los controladores de Arduino igual que en Windows

### Instalación Normal del Controlador

1. Primero, enciende tu RePhone **conectando la batería** o **alimentándolo con fuentes de energía externas (3.3 ~ 4.2V(sin SIM)/3.5 ~ 4.2V(con SIM))** al conector de batería en el Xadow GSM+BLE, **presiona y mantén presionada la tecla de encendido (PWR) por 2 segundos para** **encenderlo** (el indicador LED muestra **VERDE**), luego conecta tu RePhone a la PC con un cable Micro USB.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

2. Abre **Device Manager** haciendo clic en el botón **Start**, haciendo clic en **Control Panel**, haciendo clic en **System and Security**, y luego, bajo **System**, haciendo clic en **Device Manager**. Si se te solicita una contraseña de administrador o confirmación, escribe la contraseña o proporciona confirmación.
En el **Device Manager**, verás dispositivos desconocidos como se muestra a continuación:

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Unknown_Devices.png)

3. Haz clic derecho en uno de los dispositivos desconocidos, elige **Update Driver Software**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Update_Driver_Software.png)

4. Elige **Browse my computer for driver software**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Browse_my_computer_for_driver_software.png)

5. Haz clic en **Browse** y localiza la carpeta que has descomprimido del Arduino IDE para RePhone .. \\Arduino_IDE_for_RePhone\\drivers\\mtk . Haz clic en **Next** para iniciar la instalación del controlador.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Locate_Driver.png)

6. Cuando el software del controlador se instale exitosamente, podrás ver la siguiente página **complete**, haz clic en **Close** y **comienza de nuevo desde el paso 1 al 6 para instalar el controlador para otro dispositivo desconocido**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_complete_page.png)

### Instalar el Controlador Manualmente

También puedes instalar el controlador manualmente:

1. En la ventana "**Browse for driver software on your computer**", haz clic en **"Let me pick from a list of device drivers on my computer**"

2. Luego haz clic en "**Ports(COM&LPT)**" y ve a "**next**"

3. Haz clic en "**Have Disk**"

4. Después,

-- si estás usando **<big>Windows Vista 64bit</big>**, localiza "**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Vista\\usb2ser_Vista64.inf\\**"

-- si estás usando **<big>Windows 7 o superior con 64bit</big>**, localiza "**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Win7\\usb2ser_Win764.inf**"

### Instalar el Controlador con LinkIt Assist 2502 SDK 2.0.46

LinkIt Assist 2502 SDK 2.0.46 también proporciona un programa de instalación de controladores.

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

Luego encuentra el instalador del controlador en la ruta **"MediaTek_LinkIt_Assist_2502_SDK_2_0_46\\LINKIT_ASSIST_SDK\\Driver\\InstallMTKUSBCOMPortDriver.exe"**

Actualizar/Flashear el Firmware
-------------------------

<div class="admonition note">
<p class="admonition-title">Nota</p>
<p>Ten en cuenta que flashear el firmware eliminará todas las configuraciones y archivos (imágenes, música) almacenados en el RePhone. Haz una copia de seguridad de los datos antes de flashear/actualizar el firmware.</p>
</div>

Para hacer uso del Arduino IDE para RePhone, tienes que actualizar/flashear el firmware también. El proceso es tan simple como sigue:

1. **Desconecta tu RePhone de la PC**, **presiona y mantén presionada la tecla de encendido (PWR) por 2 segundos para apagarlo** (el indicador LED se vuelve **ROJO** y luego se apaga)

2. Abre el **FirmwareUpdater.exe** bajo la ruta ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\FirmwareUpdater.exe***, asegúrate de que tu plataforma en el Firmware Updater sea "**RePhone**" como se muestra a continuación, si no es así, haz clic en "**Others**" y localiza ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\firmware\\LinkIt_Device\\RePhone\\W15.19.p2-uart\\SEEED02A_DEMO_BB.cfg***, luego haz clic en **Download (El Botón Verde)**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware.png)

3. Ahora se te pedirá que conectes tu RePhone a la PC mediante cable USB, asegúrate de que tu RePhone esté **APAGADO** y al mismo tiempo una batería funcional debe estar siempre conectada (Encendida).

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_pluginrephone.png)

4. Espera hasta que termine la descarga. Esto puede tomar alrededor de 1 minuto, por lo que puede permanecer atascado en el 50% por un buen rato, por favor **ten paciencia**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_downloading.png)

5. En la página **Complete** haz clic en **OK** para finalizar la actualización del firmware.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_complete.png)

Restablecer a valores predeterminados
-----------------

<div class="admonition note">
<p class="admonition-title">Nota</p>
<p>Ten en cuenta que restablecer tu Rephone a valores predeterminados eliminará todas las configuraciones y archivos (imágenes, música) en el RePhone. Haz una copia de seguridad de los datos antes de restablecerlo a valores predeterminados.**</p>
</div>

Para restablecer tu RePhone a **VALORES PREDETERMINADOS**:

1. Sigue las instrucciones en la sección "Actualizar/Flashear el Firmware" para flashear el firmware

2. Descarga el archivo RePhone_Create_Kit_VXP

    [![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. Enter the [RePhone Mass Storage Mode](/es/Xadow_GSMPlusBLE#Mass_Storage_Mode) -->

4. Copia todo lo que está bajo el archivo llamado "RePhone Create Kit VXP" en el almacenamiento masivo de 5MB del RePhone.

5. Reinicia tu RePhone y listo. Como el restablecimiento habría eliminado todos los archivos, también tendrías que poner un archivo mp3 en el almacenamiento masivo para el uso del tono de llamada.

Una demostración: Hello World
-------------------

Ahora que has preparado las cosas requeridas, estamos listos para empezar con RePhone.

Comencemos con un programa simple **Hello World**

1. Mantén presionada la tecla de encendido (PWR) durante 2 segundos para encenderlo (el indicador LED muestra VERDE)

2. Abre el **Arduino_IDE_for_RePhone.exe** en la carpeta donde descomprimiste el Arduino IDE para RePhone, la interfaz del software es la siguiente:

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_interface.png)

3. Abre el **Administrador de Dispositivos** para verificar los puertos COM. Habrá **dos puertos COM**:

    -   MTK USB Debug Port se usa para subir código
    -   MTK USB Modem Port se usa para registros, como imprimir mensajes en el monitor serie con **Serial.println()**

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_COM_Ports.png)

4. En la ventana del Arduino IDE, haz clic en **Tool => Port**, selecciona **MTK USB Debug Port**, que es **COM20** en este caso, el número COM puede ser diferente en tu PC, solo asegúrate de que corresponda al Debug Port.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Debug_Port.png)

5. En la ventana del Arduino IDE, haz clic en **Tool => Board**, selecciona **RePhone**

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Board.png)

6. Ahora copia el siguiente código a tu Arduino IDE:

```cpp
// hello world for test RePhone
// loovee@10-18-2015

void setup() {
    Serial.begin(115200);
}

void loop() {
    // put your main code here, to run repeatedly:
    Serial.println("Hello World, Hello RePhone!");
    delay(100);
}
```

7. Ahora presiona el botón **Upload** para subir el código a tu RePhone. Verás **Done uploading** cuando el código se haya subido exitosamente.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_upload.png)

8. Como RePhone usa diferentes puertos COM para subir software y registros, para leer los registros, necesitamos cambiar el puerto COM seleccionado a **MTK USB Modem Port**. En la ventana del Arduino IDE, haz clic en **Tool => Port**, selecciona **MTK USB Modem Port**, que es **COM48** en este caso.

    Luego abre el **Serial Monitor**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Serial_Monitor.png)

9. Ahora podemos ver el **Hello World** que hemos impreso con **Serial.println()** .

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Helloworld.png)

Más Código de Ejemplo
---------------------

Jugar con algo de código de ejemplo sería un buen comienzo si te diriges hacia algunos proyectos aún más interesantes.

1. Simplemente configura tu **sketchbook location** en las **preference** como ***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk*** (donde instalaste el Arduino IDE para RePhone)

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_1.png)

    luego reinicia el ***Arduino_IDE_for_RePhone.exe***, podrás ver los códigos de ejemplo.
    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_2.png)

2. También puedes encontrar el código de ejemplo de Arduino codificado manualmente para todos los módulos RePhone en la siguiente ruta:
***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk\\libraries***

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Example_code_Arduino_IDE.png)

Comunidad RePhone
-----------------

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)!

Juntos buscamos respuestas, hacemos cosas interesantes, nos cuidamos unos a otros, y compartimos nuestras experiencias.

Más
---

¡Has hecho un gran trabajo hasta ahora! RePhone viene con una gran familia de módulos con diferentes características y funcionalidades. ¡Ve a revisar la wiki para módulos para más aplicaciones!

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit -->

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
