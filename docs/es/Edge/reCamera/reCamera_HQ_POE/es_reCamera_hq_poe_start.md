---
description: Introducción a reCamera HQ POE
title: Guía de Inicio Rápido
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /es/recamera_hq_poe_getting_started
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
---
# Guía de Introducción a reCamera HQ POE

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## Introducción

¡Bienvenido a reCamera HQ POE! reCamera 2002 HQ PoE está equipado con un sensor CMOS avanzado para imágenes más nítidas y claras. Tiene una montura de lente M12, flexible para reemplazar la lente predeterminada con cualquier lente M12 de 2MP compatible. También soporta PoE (Power over Ethernet): no necesita alimentación USB/DC separada, solo un cable Ethernet a un switch PoE para energía y datos.

Esta guía te ayudará a configurar rápidamente tu dispositivo y comenzar a usarlo para desbloquear potentes características de AI-Vision. Ya seas principiante o usuario experimentado, este tutorial paso a paso te guiará a través de la instalación, configuración y primer uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>
## Desempaquetado

Comienza desempaquetando tu reCamera HQ POE. Dentro de la caja, deberías encontrar:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE.
- Manual de usuario (dentro de la caja)
- USB Tipo C ([Enlace de compra](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Cable Ethernet

### Configurar dispositivo e iniciar sesión

**Paso 1:** Conecta el cable USB desde reCamera HQ POE a tu PC. Navega a `192.168.42.1` en el sitio web y cambia la contraseña predeterminada. Si estás usando Ethernet POE, accede consultando la dirección IP asignada desde tu router.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Por favor recuerda tu contraseña, de lo contrario todos los registros serán borrados para restablecer tu dispositivo. Si olvidas la contraseña, por favor [restablece de fábrica](https://wiki.seeedstudio.com/es/recamera_getting_started/#factory-reset) tu dispositivo.
:::

:::note
El nombre de usuario y contraseña predeterminados son ambos `recamera`. Si realizas un restablecimiento de fábrica o estás usando un dispositivo nuevo (sin configurar), estos son el nombre de usuario y contraseña a usar.
:::

**Paso 2:** Conecta el cable USB desde la reCamera a tu PC, luego puedes acceder a **192.168.42.1** para ver la página de carga de reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Si quieres usar el puerto Ethernet, puedes conectar el cable de datos incluido a tu router. El dispositivo puede ser alimentado usando **PoE (Power over Ethernet)** únicamente. Puedes desenroscar la parte trasera de la cámara y conectar a través del puerto.

Después de conectar, puedes encontrar la **dirección IP de reCamera** en el panel de administración de tu router, luego acceder a la **interfaz web** y la **plataforma Node-RED**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**Paso 3:** Serás llevado al panel de vista previa de reCamera HQ POE, donde puedes usar los controles en el panel para experimentar algunas de las características de reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

## Acceso Web Básico

URLs web:

- Página de Vista Previa: ip_address/#/dashboard
- Página de Inicio: ip_address/#/init
- Espacio de Trabajo: ip_address/#/workspace
- Configuración de Red: ip_address/#/network
- Seguridad: ip_address/#/security
- Terminal: ip_address/#/terminal
- Sistema: ip_address/#/system
- Energía: ip_address/#/power
- Node-RED Original: ip_address:1880

### Inicio Rápido con el Panel de reCamera HQ POE

**Paso 1:** Accede a la página web vía **192.168.42.1**, y entrarás a la **interfaz de vista previa en vivo**.

**Paso 2:** Puedes ajustar el umbral de ``IoU`` y ``Confidence`` para obtener un resultado más preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### Parámetros del Modelo AI

**Confidence**: La confianza en el modelo YOLO representa la probabilidad de que una caja delimitadora predicha contenga un objeto y qué tan precisa es la predicción. Es un valor entre 0 y 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU es una métrica usada para evaluar la superposición entre la caja delimitadora predicha y la caja delimitadora de verdad fundamental. Se calcula como la relación del área de intersección de las dos cajas al área de unión de las dos cajas. El valor de IoU típicamente está en el rango de 0 a 1. Lo estandarizamos a una escala de 0 - 100, un valor IoU de 0 representa ninguna superposición entre la caja predicha y la caja de verdad fundamental. Un valor de 100 indica una coincidencia perfecta, significando que las dos cajas se superponen completamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Inicio rápido con el Flujo del Panel de reCamera HQ POE

Si te gustaría saber cómo se hace el panel con nodos Node-RED, haz clic en la esquina inferior derecha o visita `ip_address/#/workspace` para acceder al espacio de trabajo Node-RED de Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

Entonces verás el flujo del panel gimbal predeterminado, puedes hacer doble clic en cada nodo para ver el detalle del nodo. El flujo del panel se verá así:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**Configuraciones del Modelo**:

- Los nodos deslizadores te permiten ajustar el IoU (Intersection over Union) y el umbral de confianza para el modelo AI YOLO.

**Visualización de UI del Panel**:

- El nodo de plantilla UI muestra texto mostrando las configuraciones actuales del modelo.
- También renderiza la imagen base64 de la cámara, incluyendo cajas de detección para objetos identificados por YOLO.

**Subflujo de Iframe Web Básico**:

- Un subflujo iframe muestra páginas web básicas como configuraciones de red, información del sistema e información del dispositivo.
- Nota que estos pueden consumir recursos de CPU ya que renderiza la página con múltiples nodos. Puede ser eliminado si no es necesario.

## Aplicar gestión en la nube y respaldo

Si te gustaría crear una nueva aplicación o guardar aplicaciones en el servicio en la nube SenseCraft, puedes iniciar sesión con la cuenta sensecraft en la parte inferior izquierda, y luego hacer clic en el signo del ícono + para agregar una nueva aplicación. Entonces puedes comenzar a trabajar en tu flujo.

Si te gustaría crear una nueva aplicación o guardar aplicaciones en el servicio en la nube SenseCraft, puedes iniciar sesión con la cuenta sensecraft en la parte inferior izquierda, y luego hacer clic en el signo del ícono `+` para agregar una nueva aplicación. Entonces puedes comenzar a trabajar en tu flujo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

Puedes ver y gestionar tus aplicaciones [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

Necesitas registrar una cuenta antes de poder iniciar sesión a través de la plataforma para sincronizar tus aplicaciones.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Lista de Puertos

Lo siguiente lista los puertos usados por reCamera Gimbal:

- **Puerto 22**: Utilizado para inicio de sesión SSH remoto y está cerrado.
- **Puerto 53**: Asociado con resolución de nombres de dominio DNS y es esencial para redirección web. Está abierto por defecto.
- **Puerto 80**: Sirve como la interfaz del panel web para visualización HTTP de la Aplicación Node-RED.
- **Puerto 554**: Empleado para transmisión de video RTSP.
- **Puerto 9090**: Destinado para acceso de terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a operaciones Node-RED.

## Actualización OTA del SO

Por favor consulta las [Instrucciones de Actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

## Restablecimiento de Fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

Si te gustaría restablecer el dispositivo como olvidar el código de acceso de tu dispositivo, puedes mantener presionado el botón **User** y luego conectar el dispositivo a la energía. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadeando, suelta el botón User.

## Recursos

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
