---
description: BeagleBone® Green HDMI Cape
title: BeagleBone® Green HDMI Cape
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BeagleBone_Green_HDMI_Cape
last_update:
  date: 1/10/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape.jpg)

**BeagleBone® Green HDMI Cape** es un conector HDMI integrado general para expandir tu BeagleBone® a una rica variedad de periféricos como monitor de computadora, proyector de video, televisión digital o dispositivo de audio digital. Esta placa cuenta con un receptáculo HDMI estándar que puede conectarse a un monitor con un cable HDMI-a-HDMI estándar. Se soportan todas las señales HD, y la resolución de salida es 1280×720. También puede usarse para transmitir información de audio. Este producto hará que tus aplicaciones basadas en la placa BeagleBone® sean más versátiles para diferentes circunstancias.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/BeagleBone-Green-HDMI-Cape-p-2570.html)

Características
--------

- Plug and play.
- Adaptador para diferentes señales de entrada.
- Resolución de salida 720P(1280×720).

Especificaciones
-------------

| Parámetro                | Valor                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| Voltaje de entrada       | 5V/3.3V                                                                                                |
| Corriente máxima de operación | 80 mA                                                                                                  |
| Versión HDMI             | Versión 1.2                                                                                            |
| Resolución máxima de salida | 1280x720 @60Hz                                                                                         |
| Transmisión de audio     | Disponible                                                                                              |
| Chip                     | IT66121 HDMI Framer([Hoja de datos](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/IT66121FN_Datasheet_v1.02.pdf)) |

Plataformas Soportadas
-------------------

Ideas de aplicación
-----------------

Puedes expandir tu BeagleBone® a más periféricos multimedia como monitor de computadora, proyector de video, televisión digital o dispositivo de audio digital.

Descripción del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Componentss.jpg)

**IT66121 HDMI Framer**

- Transmisor HDMI

**Interruptor de dirección I2C del Cape**

- Para cambiar entre diferentes identificadores de dirección del cape.

**EEPROM del Cape**

- Memoria EEPROM para este cape.

**Conector HDMI**

### Lista de partes

|                            |          |
|----------------------------|----------|
| **Nombre de la parte**     | Cantidad |
| BeagleBone® Green HDMI Cape | 1        |

Primeros Pasos
-----------

***Esta parte te mostrará cómo comenzar con este producto en unos pocos pasos.***

### Preparativos

- Placa BeagleBone® Green × 1.
- Cable USB (tipo A a micro tipo B) × 1.
- Cable HDMI estándar(tipo A a tipo A) × 1.

### Conexión del Hardware

- Paso 1. Por favor sigue la imagen de abajo para conectar el hardware.
![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Connection_1200_s.jpg)

- Paso 2. Conecta el cable USB(extremo tipo C) a tu PC.

### Software

- Paso 1. Por favor descarga la imagen [Debian 8.10 2018-02-01 4GB SD SeeedStudio IoT](https://debian.beagleboard.org/images/bone-debian-8.10-seeed-iot-armhf-2018-02-01-4gb.img.xz) desde beaglebone.org.
- Paso 2. Por favor usa [Etcher](https://etcher.io/) para grabar imágenes en tarjetas SD.
- Paso 3. Podemos ver la línea de comandos de linux en la pantalla.
- Paso 4. Si queremos usar la interfaz gráfica. Por favor sigue las siguientes instrucciones para instalar lxde.

```
sudo apt-get update 
sudo apt-get install lxde lxde-core lxde-icon-theme
```

#### Solución de problemas

1. ¿No se muestra el sistema operativo de escritorio de BeagleBone® en el monitor de la computadora? Prueba uno de los siguientes pasos.

    - Apaga el monitor y reinícialo.
    - Presiona el botón RESET en la placa BeagleBone® Green.
    - Presiona el botón POWER en la placa BeagleBone® Green y luego presiónalo de nuevo.

    ![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Beaglebone-Green_s.jpg)

2. ¿El mouse de la computadora no funciona(no tiene energía)?
    - Presiona el botón RESET en la placa BeagleBone® Green y espera a que se inicie.

3. ¿Cómo desensamblar rápidamente el BeagleBone® Green HDMI Cape?
    - Tira(con tu mano) primero el extremo con el receptáculo HDMI, luego tira el otro extremo. Repite los dos pasos anteriores de nuevo si es necesario.

4. Si el gráfico lxde sigue pidiendo la contraseña de wicd, por favor sigue las siguientes instrucciones.

    - Paso 1. Por favor ignóralo.
    - Paso 2. Abre la terminal, ejecuta los siguientes comandos.

    ```
    rm /etc/resolv.conf
    ln -s /run/resolvconf/resolv.conf
    rm /var/lib/wicd/resolv.conf.orig
    ln -s /run/resolvconf/resolv.conf /var/lib/wicd/resolv.conf.orig
    sudo service wicd start
    sudo reboot
    ```

    - Paso 3. Por favor usa la herramienta gráfica wicd para conectarte al wifi.
    - Paso 4. Podemos usar wifi, herramientas SSH.

Demo
----

Este [video](https://www.youtube.com/watch?v=-xvbXSd_9TY&feature=youtu.be) muestra cómo usar BeagleBone® Green HDMI Cape para navegar por Internet y reproducir audio.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivos esquemáticos](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip)
- [Imagen HDMI Cape Beaglebone](https://drive.google.com/open?id=15wXOtG4pZMifNoldoSvdOX9sBrev733L)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>