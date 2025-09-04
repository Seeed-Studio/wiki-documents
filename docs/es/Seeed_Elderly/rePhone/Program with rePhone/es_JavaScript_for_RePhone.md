---
description: JavaScript para RePhone
title: JavaScript para RePhone
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/JavaScript_for_RePhone
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone puede ser una herramienta de aprendizaje para que comiences proyectos interesantes. Actualmente, RePhone soporta varios entornos de desarrollo y lenguajes de desarrollo, puedes construir aplicaciones con C/C++ basado en Eclipse IDE, Arduino IDE, o con Lua y JavaScript.

Este wiki es una Guía de Usuario para ayudarte a comenzar tu proyecto RePhone con JavaScript.

Instalar Controlador y Actualizar Firmware
------------------------------------------

- Para **Instalar el Controlador**, por favor consulta la **sección 2 de <a href="/es/JavaScript_for_RePhone" ><span><font color={'000000'} size={"3"}> Arduino IDE para RePhone Kit</font></span></a>**

- Para **Actualizar Firmware**, por favor consulta la **sección 3 de <a href="/es/JavaScript_for_RePhone" ><span><font color={'000000'} size={"3"}> Arduino IDE para RePhone Kit</font></span></a>**

Descargar Aplicación JavaScript para RePhone
--------------------------------------------

**Paso 1.** Ve al canal de lanzamientos de github del proyecto **JavaScript para RePhone** para descargar ***js_for_rephone_xxx.zip***

[Descargar JavaScript para RePhone](https://github.com/Seeed-Studio/JavaScript_for_RePhone/releases)

**Paso 2.** Configura tu RePhone en modo de almacenamiento **conectando la batería** y conéctalo a la PC con un cable Micro USB.

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**Paso 3.** Descomprime el archivo ***js_for_rephone_xxx.zip*** en el disco de 5MB del RePhone, también puedes poner algunos archivos de música (formato mp3) en el disco. Aquí he puesto 'music1.mp3' y 'music2.mp3' en él.

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Lua_1.png)

Usar Shell de JavaScript
------------------------

**Paso 1.** Ahora presiona y mantén presionada la tecla de encendido de tu RePhone (Xadow GSM+BLE, ver el diagrama arriba en el paso 3 de la sección 2) por ***2 segundos*** para encenderlo, luego identifica el número COM para el puerto serie, que será ***MTK USB Modem Port*** mostrándose en el ***Administrador de Dispositivos***, también ten en cuenta que *el número COM podría ser diferente en diferentes PC*.

Abre el **Administrador de Dispositivos** haciendo clic en el botón **Inicio**, haciendo clic en **Panel de Control**, haciendo clic en **Sistema y Seguridad**, y luego, bajo **Sistema**, haciendo clic en **Administrador de Dispositivos**. Si se te solicita una contraseña de administrador o confirmación, escribe la contraseña o proporciona confirmación. Ve la siguiente imagen:

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Check_ports.png)

**Paso 2.** Usamos una herramienta de terminal serie como [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) para acceder al shell de Lua ejecutándose en el RePhone.

Si usas PuTTY, por favor recuerda habilitar la opción ***"implicit CR in every LF"***. De lo contrario, los saltos de línea serán extraños. Como el shell de Lua del RePhone usa LF ('\n') como EOL, mientras que PuTTY usa CR LF ("\r\n") como EOL predeterminado.

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Putty_EOL.png)

**Paso 3.**Abre el MTK USB Modem Port (su velocidad de baudios no importa ya que es un puerto serie virtual USB) y escribe "print('hello, world')", obtendrás tu primer código Lua ejecutándose en el RePhone.

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Lua_Shell.png)

Si tienes algunos archivos de música en el RePhone, escribe "audio.play('music.mp3')" para reproducirlo. Si tienes una tarjeta SIM insertada, escribe "gsm.call('phone_number')" para llamar a alguien o "gsm.text('phone_number', 'message from rephone')" para enviar un mensaje de texto.

Ejemplos
--------

1.Reproducir una música repetidamente.

```
function aplay() { audio.play('music.mp3'); }
t = timer.create(10000, aplay)
```

2.Auto-responder mensaje.

```
function re(f, c) { print('message:', c, ' from:', f); gsm.text(f, 'Thanks for your message'); }
gsm.on_new_message(re)
```

Comunidad RePhone
-----------------

[![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)!

Juntos buscamos respuestas, hacemos cosas interesantes, nos preocupamos unos por otros, y compartimos nuestras experiencias.

Recursos
--------

- [Código Fuente de JavaScript para RePhone](https://github.com/Seeed-Studio/JavaScript_for_RePhone)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/JavaScript_for_RePhone -->

## Soporte Técnico y Discusión de Productos


¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>