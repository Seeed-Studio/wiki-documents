---
description: Conectar red y algunas soluciones de problemas potenciales
title: Preguntas Frecuentes
keywords:
  - Edge
  - reCamera
  - network
  - network troubleshoot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/recamera_network_connection
sidebar_position: 6
last_update:
  date: 04/08/2025
  author: Parker Hu
---

# Preguntas Frecuentes

Si encuentras una situación donde el dispositivo conectado por USB no logra reconocer reCamera durante la configuración de red para reCamera, así como el problema de falla de conexión de red después de configurar la red, por favor consulta este artículo.

Es necesario modificar y configurar el entorno de red de la computadora, incluyendo instalar controladores en el sistema Windows, consultar tarjetas de red en el sistema Linux, y configurar prioridades de red en el sistema Mac.

## Configurar el entorno de trabajo

### Configuración USB NET

Para usar redes USB, habilitamos UsbNcm y DHCP por defecto en el sistema.
UsbNcm no requiere controladores en Linux, macOS, y los sistemas Windows más recientes. Puedes iniciar sesión en la terminal de reCamera directamente usando `ssh recamera@192.168.42.1` ,`passwd = recamera` .

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>

Asegúrate de que el controlador Ncm esté correctamente instalado en tu computadora, como se muestra en la imagen. Puedes verificar esto yendo a: Device Manager -> Network adapters.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

Si tu máquina no tiene este controlador, sigue los pasos a continuación para instalar Ncm.

#### Instalar NCM para windows

**paso1**:
Presiona `win+x` y selecciona `Device Manager`.
Encuentra el dispositivo no reconocido en `other devices` y selecciona `Update driver`.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**paso2**:
Selecciona `Browse my computer for drivers`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**paso3:**:
Selecciona `Let me pick from a list of available drivers on my computer`  

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**paso4:**:
Selecciona `Network adapters` y luego haz clic en `next`

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**paso5**:Selecciona `Microsoft` -> `UsbNcm Host Device` luego haz clic en Next.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**paso6**:Cuando aparezca la barra de alerta, selecciona `Yes`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**paso7**:Ingresa ping 192.168.42.1 en una ventana de terminal.
<br />
La siguiente salida muestra que te has conectado exitosamente a la reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

No se requiere configuración adicional, solo conecta un cable USB. Ingresa `ifconfig`, y verás el adaptador de red usb1. Por ejemplo: 192.168.42.89. La ip del dispositivo es 192.168.42.1

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

Verifica el adaptador de red usb en System Settings -> Network. La ip del dispositivo es 192.168.42.1

## Error de red de la computadora

### windows

Si tu computadora con sistema Windows 10 tiene problemas de acceso a la red después de usar la red USB de reCamera.
Presiona `win+x` haz clic en Control Panel. Selecciona All Control Panel Items -> Network Connections.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

Haz clic derecho en UsbNcm Host Device. Selecciona `Properties` -> `TCP/IPv4` -> `Properties` -> `Advanced` -> Desmarca `Automatic metric` -> Ingresa `255` en el campo `Interface metric` -> haz clic en `ok`
<br />

Entonces tu red estará funcionando nuevamente.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### MAC

Si tu computadora ejecuta MacOS. Solo necesitas establecer la prioridad de la tarjeta de red UsbNcm de la computadora al final

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

Las configuraciones específicas son las siguientes:

**paso1**: Selecciona `System Settings`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**paso2**: Verás este orden, y estamos a punto de cambiarlo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**paso3**: Arrastra hasta abajo del todo, y haz clic en él.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**paso4**: Selecciona `Set Service Order`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**paso5**: Arrastra NCM debajo de Wi-Fi y luego haz clic en `ok`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**paso6**: Finalmente, deberías ver las configuraciones mostradas

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>

## Recursos

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
