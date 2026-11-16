---
title: Preguntas frecuentes sobre reTerminal y reTerminal DM
description: Preguntas frecuentes sobre las pantallas reTerminal y reTerminal DM, incluyendo flasheo del sistema operativo a la eMMC, comportamiento de la pantalla y el tacto, acceso por SSH y consola serie e identificación de periféricos.
slug: /reterminal_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reTerminal FAQ
  - reTerminal DM FAQ
  - resolución de problemas de reTerminal
  - resolución de problemas de reTerminal DM
  - pantalla negra de reTerminal
  - pantalla táctil de reTerminal
  - Raspberry Pi CM4
  - flasheo de SO en reTerminal
---

<div class="recomputer-faq-page">

# Preguntas frecuentes sobre reTerminal y reTerminal DM

Esta página contiene respuestas verificadas para reTerminal y reTerminal DM. Cada respuesta indica la variante de producto y el modo de firmware al que se aplica, junto con la fecha en que se verificó por última vez frente a las fuentes oficiales actuales.

## Antes de comenzar

- Confirma el modelo exacto: reTerminal o reTerminal DM, y la variante de Raspberry Pi CM4 instalada.
- Comprueba la versión actual de la imagen de Raspberry Pi OS antes de aplicar pasos específicos de versión.
- Las respuestas de esta página se verificaron por última vez el 2026-11-10; vuelve a comprobar las fuentes oficiales enlazadas si la estás leyendo más tarde.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Documentación y uso {#documentation-and-usage}

### ¿Cómo obtengo el archivo del modelo 3D del reTerminal DM (114070201)? {#reterminal-dm-3d-model}

**Aplicable a:** reTerminal DM (114070201), para desarrolladores que necesitan el modelo 3D para diseño estructural o validación de carcasa

**Última verificación:** 2026-11-01

El modelo 3D del reTerminal DM (114070201) está disponible a través del siguiente enlace de archivo STEP de diseño estructural: https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp . Para otros archivos de diseño o información técnica, ponte en contacto con el equipo de soporte técnico de Seeed.

**Referencias:**

- [Archivo de diseño estructural del reTerminal DM (STEP)](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)
- [Guía de hardware de reTerminal DM](https://wiki.seeedstudio.com/es/reterminal-dm-hardware-guide/)

## SO y firmware {#os-and-firmware}

### ¿Cómo puedo flashear Raspberry Pi OS que viene originalmente con el reTerminal? {#reterminal-flash-original-shipped-image}

**Aplicable a:** reTerminal y reTerminal DM, para restaurar la imagen de fábrica que venía originalmente con el dispositivo

**Última verificación:** 2023-11-15

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)

### Cómo flashear Raspberry Pi OS, Ubuntu OS de 64 bits u otro SO en la eMMC {#reterminal-flash-os-to-emmc}

**Aplicable a:** reTerminal y reTerminal DM con un módulo de cómputo que tiene almacenamiento eMMC, para escribir una imagen de sistema

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/flash_different_os_to_emmc/)

### Cómo instalar los controladores de reTerminal después de flashear un nuevo Raspberry Pi OS, Ubuntu OS u otro SO {#reterminal-install-drivers-after-flashing}

**Aplicable a:** reTerminal y reTerminal DM, para instalar los controladores de reTerminal después de flashear un nuevo sistema operativo

**Última verificación:** 2023-11-15

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)

### Cómo actualizar Raspberry Pi OS y los paquetes instalados {#reterminal-upgrade-rpios-packages}

**Aplicable a:** reTerminal y reTerminal DM que ejecutan Raspberry Pi OS, para una actualización rutinaria del sistema in situ

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/upgrade-rpiOS_installed-packages/)

### ¿Cómo puedo flashear un SO si sustituyo el CM4 por una versión sin eMMC? {#reterminal-flash-os-without-emmc-cm4}

**Aplicable a:** reTerminal y reTerminal DM equipados con un Raspberry Pi CM4 que no tiene almacenamiento eMMC

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/flashing_os_on_non-eMMC_CM4_replacement/)

### No puedo activar la pantalla LCD del reTerminal después del modo de suspensión {#reterminal-lcd-wakeup-after-sleep}

**Aplicable a:** reTerminal y reTerminal DM que ejecutan Raspberry Pi OS con el controlador de superposición del árbol de dispositivos de reTerminal instalado

**Última verificación:** 2024-12-16

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/Wakeup_reTerminal_LCD_after_sleep/)

### ¿Cómo puedo arrancar un SO desde una unidad flash USB? {#reterminal-boot-from-usb-flash-drive}

**Aplicable a:** reTerminal y reTerminal DM con un gestor de arranque del módulo de cómputo, para arrancar un sistema desde una unidad USB externa

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/Boot_OS_from_USB_flash_drive/)

### ¿Cómo puedo instalar Ubuntu en reTerminal? {#reterminal-install-ubuntu}

**Aplicable a:** reTerminal y reTerminal DM con una imagen de Ubuntu Server arm64 escrita en la eMMC

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/install-ubuntu-on-reterminal/)

### La orientación de la pantalla es incorrecta después de instalar Raspberry Pi OS Bullseye {#reterminal-screen-orientation}

**Aplicable a:** reTerminal y reTerminal DM con una imagen de Raspberry Pi OS Bullseye o Bookworm y los controladores de reTerminal instalados

**Última verificación:** 2023-11-24

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/Incorrect_screen_orientation_on_RPiOS_Bullseye/)

### Cómo desactivar la rotación de pantalla en reTerminal {#reterminal-disable-screen-rotation}

**Aplicable a:** reTerminal y reTerminal DM que ejecutan Raspberry Pi OS, para una instalación fija donde la pantalla no debe rotar

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/disable_screen_rotation_on_reTerminal/)

### Cómo resolver que la frecuencia de actualización de la pantalla es demasiado baja {#reterminal-screen-refresh-rate}

**Aplicable a:** reTerminal y reTerminal DM que ejecutan Raspberry Pi OS, para una pantalla que muestra saltos de actualización visibles

**Última verificación:** 2024-07-02

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/screen_refresh_rate_low/)

## Conectividad y redes {#connectivity-and-networking}

### ¿Seeed conserva el IMEI y el número de serie del módulo 4G LTE Cat 4 EC25 de los dispositivos reTerminal o reTerminal DM entregados, y cómo se pueden obtener cuando el dispositivo ya está desplegado y no se pueden leer in situ? {#reterminal-imei-lte-serial}

**Aplicable a:** dispositivos reTerminal y reTerminal DM que han sido entregados y desplegados in situ, para el registro de activos donde se deben rellenar el IMEI y el número de serie del módulo 4G LTE Cat 4 EC25

**Última verificación:** 2026-11-01

Seeed no conserva el IMEI ni el número de serie del módulo 4G de los dispositivos entregados, por lo que estos números no se pueden rellenar únicamente a partir del pedido, el modelo de producto o el número de serie del host. El IMEI y el número de serie del módulo 4G pertenecen al dispositivo o módulo individual y deben leerse del dispositivo desplegado: el usuario final o el técnico in situ abre la consola serie del dispositivo o la interfaz de comandos AT del módulo y ejecuta `AT+GSN` para consultar el IMEI de ese módulo 4G; el número de serie del módulo / ID del módulo debe obtenerse de la etiqueta del módulo o mediante el comando de consulta del módulo EC25. Haz coincidir los resultados de las consultas uno por uno con los números de activo del dispositivo antes de completar el registro. Si ahora mismo no es posible contactar con las personas en la ubicación del dispositivo, el usuario final local o el técnico in situ debe ejecutar las consultas y enviar los resultados; Seeed no puede restaurarlos a partir de los registros originales de entrega.

1. Confirma la ubicación, el número de activo y la persona de contacto de cada dispositivo desplegado.
2. El usuario final o el técnico in situ se conecta a la consola serie del dispositivo o a la interfaz de comandos AT del módulo 4G.
3. Ejecuta `AT+GSN` y registra el IMEI devuelto; ten en cuenta que este comando consulta el IMEI y no es lo mismo que consultar el número de serie del módulo.
4. Consulta y registra el número de serie del módulo 4G / ID del módulo a partir de la etiqueta del módulo o de la referencia de comandos del LTE Cat 4 EC25.
5. Haz coincidir el IMEI, el ID del módulo y el número de activo del host de cada dispositivo uno por uno, y envíalos al administrador del dispositivo para completar el registro.
6. Si no se puede organizar una conexión in situ o remota, el usuario final o el técnico in situ en la ubicación del dispositivo debe ejecutar las consultas anteriores.

**Criterios de éxito:**

- El IMEI y el ID del módulo 4G de cada dispositivo se han leído desde el lado del dispositivo y se han registrado junto con el número de activo
- El registro no contiene ningún número que se haya deducido del pedido o del número de serie del host

**Referencias:**

- [Guía de inicio rápido de reTerminal DM](https://wiki.seeedstudio.com/es/reterminal-dm/)

### ¿Cómo puedo iniciar sesión en Raspberry Pi OS, Ubuntu OS u otro SO usando un convertidor USB a serie? {#reterminal-usb-serial-console-login}

**Aplicable a:** reTerminal y reTerminal DM con el encabezado GPIO de 40 pines, para un inicio de sesión por consola sin pantalla

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/Logging_in_OS_using_USB_to_serial_converter/)

## Hardware e interfaces {#hardware-and-interfaces}

### Cómo solucionar el problema de pantalla negra en reTerminal {#reterminal-black-screen}

**Aplicable a:** reTerminal y reTerminal DM cuya pantalla LCD permanece negra después del arranque, con los LED de estado PWR y SYS disponibles para el diagnóstico

**Última verificación:** 2023-11-15

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/reterminal_black_screen/)

### ¿Por qué hay pegamento negro alrededor de los chips en el CM4? {#reterminal-cm4-epoxy-underfill}

**Aplicable a:** reTerminal y reTerminal DM con un módulo de cómputo Raspberry Pi CM4, para usuarios que notan el material negro en la placa

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/black_glue_around_CM4/)

### Cómo resolver el problema de que el zumbador y los LED no funcionan después de instalar los controladores de reTerminal {#reterminal-buzzer-leds-after-driver-install}

**Aplicable a:** reTerminal y reTerminal DM después de haber ejecutado la instalación del controlador de reTerminal

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/buzzer-leds-not-work_by_drivers/)

### Solución de problemas de imprecisión de la pantalla táctil {#reterminal-touchscreen-inaccuracy}

**Aplicable a:** reTerminal y reTerminal DM que ejecutan una imagen de Raspberry Pi OS basada en X11 con el controlador táctil de reTerminal instalado

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/troubleshooting-touch-screen-inaccuracy/)

### Cómo comprobar si el chip de cifrado es ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G {#reterminal-encryption-chip-check}

**Aplicable a:** reTerminal y reTerminal DM para identificar la variante del coprocesador de cifrado integrado

**Última verificación:** 2023-06-21

Para más detalles, haz clic [aquí](https://wiki.seeedstudio.com/es/check_Encryption_Chip/)

## Producto y servicio {#product-and-service}

### ¿Puede un pedido de una sola unidad de reTerminal DM obtener el módulo de expansión Dual LAN/SSD, el SSD NVMe M.2 2280 y las antenas Bluetooth/Wi-Fi instalados y probados de forma gratuita antes del envío? {#reterminal-dm-preinstall-expansion}

**Aplicable a:** pedidos de una sola unidad de reTerminal DM, para clientes que necesitan el módulo de expansión Dual LAN/SSD, el SSD NVMe M.2 2280 y las antenas Bluetooth/Wi-Fi instalados antes del envío

**Última verificación:** 2026-11-01

Un pedido de una sola unidad no puede obtener un preensamblaje de fábrica gratuito (incluida la instalación y prueba de los accesorios internos). Ese servicio es un servicio de personalización ligera y solo se aplica a pedidos que alcanzan la cantidad de compra requerida y pagan las tarifas de personalización correspondientes. Para el pedido actual de una sola unidad, el dispositivo se puede recibir en su embalaje original de fábrica; después de que llegue, puedes instalar los accesorios relacionados siguiendo la guía oficial de montaje de hardware: https://wiki.seeedstudio.com/es/reterminal-dm-hardware-guide/ .

**Notas:**

- El preensamblaje de fábrica es un servicio de personalización ligera que requiere una cierta cantidad de compra y cobra tarifas de personalización, por lo que un pedido de una sola unidad no cumple los requisitos para la preinstalación y prueba gratuitas antes del envío.
- Si el volumen del pedido alcanza posteriormente el umbral de personalización, puedes volver a consultar con Seeed sobre las condiciones que se aplican al servicio de preensamblaje de fábrica.

**Referencias:**

- [Guía de hardware de reTerminal DM](https://wiki.seeedstudio.com/es/reterminal-dm-hardware-guide/)

### ¿Puede el reTerminal DM funcionar a una temperatura ambiente de -20°C y se puede pedir una versión ODM en una cantidad de 10 unidades? {#reterminal-dm-minus20-operating-temp}

**Aplicable a:** El reTerminal DM estándar, para proyectos que usan el dispositivo a una temperatura ambiente de -20°C y para consultas de personalización ODM de 10 unidades

**Última verificación:** 2026-11-01

El rango de temperatura de funcionamiento del reTerminal DM estándar es de -10°C a 50°C, por lo que el modelo estándar por sí solo no puede cumplir con una temperatura ambiente de -20°C. El funcionamiento a -20°C requiere una personalización ODM con una pantalla de amplio rango de temperatura o una solución de calefacción interna. La cantidad mínima de pedido para una personalización ODM es de 50 unidades.

**Referencias:**

- [Guía de inicio de reTerminal DM](https://wiki.seeedstudio.com/es/reterminal-dm/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

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

</div>
