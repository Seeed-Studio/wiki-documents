---
description: Primeros pasos con reCamera HQ POE
title: Guía de inicio rápido de reCamera HQ POE
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_getting_started
sku: 100018917, 100041077, 100029708, 100074316
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
createdAt: '2023-02-16'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/es/recamera_hq_poe_getting_started/
---
# Guía de inicio rápido de reCamera HQ POE

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## Introducción

¡Bienvenido a reCamera HQ POE! reCamera 2002 HQ PoE está equipada con un sensor CMOS avanzado para obtener imágenes más nítidas y claras. Tiene una montura de lente M12, lo que permite reemplazar la lente predeterminada por cualquier lente M12 de 2 MP compatible. También es compatible con PoE (Power over Ethernet): no se necesita alimentación USB/DC por separado, solo un cable Ethernet a un switch PoE para alimentación y datos.

Esta guía te ayudará a configurar rápidamente tu dispositivo y empezar a usarlo para desbloquear potentes funciones de visión con IA. Tanto si eres principiante como si ya tienes experiencia, este recorrido paso a paso te guiará por la instalación, configuración y primer uso.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱</font></span></strong>
    </a>
</div>
## Desempaquetado

Comienza desempaquetando tu reCamera HQ POE. Dentro de la caja deberías encontrar:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE.
- Manual de usuario (dentro de la caja)
- USB Tipo C ([Purchase lini](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Cable Ethernet

### Configurar el dispositivo e iniciar sesión

**Paso 1:** Conecta el cable USB desde reCamera HQ POE a tu PC. Navega a `192.168.42.1` en el navegador web y cambia la contraseña predeterminada. Si estás usando Ethernet PoE, accede consultando la dirección IP asignada desde tu router.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Recuerda tu contraseña, de lo contrario se borrarán todos los registros para restablecer tu dispositivo. Si olvidas la contraseña, por favor realiza un [restablecimiento de fábrica](https://wiki.seeedstudio.com/es/recamera_getting_started/#restablecimiento-de-fábrica) de tu dispositivo.
:::

:::note
El nombre de usuario y la contraseña predeterminados son ambos `recamera`. Si realizas un restablecimiento de fábrica o estás usando un dispositivo nuevo (no configurado), estos son el nombre de usuario y la contraseña que debes usar.
:::

**Paso 2:** Conecta el cable USB desde la reCamera a tu PC, luego podrás acceder a **192.168.42.1** para ver la página de carga de reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

Si deseas usar el puerto Ethernet, puedes conectar el cable de datos incluido a tu router. El dispositivo puede alimentarse usando únicamente **PoE (Power over Ethernet)**. Puedes desenroscar la parte trasera de la cámara y conectar a través del puerto.

Después de conectar, puedes encontrar la **dirección IP de la reCamera** en el panel de administración de tu router y luego acceder a la **interfaz web** y a la **plataforma Node-RED**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**Paso 3:** Serás dirigido al panel de vista previa de reCamera HQ POE, donde puedes usar los controles del panel para experimentar algunas de las funciones de reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

## Acceso web básico

URLs web:

- Página de vista previa: ip_address/#/dashboard
- Página de inicio: ip_address/#/init
- Espacio de trabajo: ip_address/#/workspace
- Configuración de red: ip_address/#/network
- Seguridad: ip_address/#/security
- Terminal: ip_address/#/terminal
- Sistema: ip_address/#/system
- Energía: ip_address/#/power
- Node-RED original: ip_address:1880

### Inicio rápido con el panel de reCamera HQ POE

**Paso 1:** Accede a la página web mediante **192.168.42.1**, y entrarás en la **interfaz de vista previa en vivo**.

**Paso 2:** Puedes ajustar el umbral de ``IoU`` y ``Confidence`` para obtener un resultado más preciso.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### Parámetros del modelo de IA

**Confidence**: La confianza en el modelo YOLO representa la probabilidad de que una caja delimitadora predicha contenga un objeto y cuán precisa es la predicción. Es un valor entre 0 y 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU es una métrica utilizada para evaluar la superposición entre la caja delimitadora predicha y la caja delimitadora de referencia. Se calcula como la relación entre el área de intersección de las dos cajas y el área de unión de las dos cajas. El valor de IoU suele estar en el rango de 0 a 1. Lo estandarizamos a una escala de 0 - 100; un valor de IoU de 0 representa que no hay superposición entre la caja predicha y la caja de referencia. Un valor de 100 indica una coincidencia perfecta, lo que significa que las dos cajas se superponen completamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Inicio rápido con el flujo del panel de reCamera HQ POE

Si deseas saber cómo se crea el panel con nodos de Node-RED, haz clic en la esquina inferior derecha o visita `ip_address/#/workspace` para acceder al espacio de trabajo Node-RED de Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

Entonces verás el flujo de panel gimbal predeterminado; puedes hacer doble clic en cada nodo para ver los detalles del nodo. El flujo del panel se verá así:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**Configuración del modelo**:

- Los nodos deslizantes te permiten ajustar el IoU (Intersection over Union) y el umbral de confianza para el modelo de IA YOLO.

**Visualización de la interfaz del panel**:

- El nodo de plantilla de interfaz de usuario muestra texto con la configuración actual del modelo.
- También renderiza la imagen en base64 de la cámara, incluidas las cajas de detección para los objetos identificados por YOLO.

**Subflujo básico de iframe web**:

- Un subflujo de iframe muestra páginas web básicas como la configuración de red, información del sistema e información del dispositivo.
- Ten en cuenta que estos pueden consumir recursos de CPU, ya que renderiza la página con múltiples nodos. Puede eliminarse si no es necesario.

## Aplicar gestión en la nube y copia de seguridad

Si deseas crear una nueva aplicación o guardar aplicaciones en el servicio en la nube SenseCraft, puedes iniciar sesión en la cuenta de sensecraft en la parte inferior izquierda y luego hacer clic en el icono de signo + para añadir una nueva aplicación. Después podrás empezar a trabajar en tu flujo.

Si deseas crear una nueva aplicación o guardar aplicaciones en el servicio en la nube SenseCraft, puedes iniciar sesión en la cuenta de sensecraft en la parte inferior izquierda y luego hacer clic en el icono `+` para añadir una nueva aplicación. Después podrás empezar a trabajar en tu flujo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

Puedes ver y gestionar tus aplicaciones en [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

Debes registrar una cuenta antes de poder iniciar sesión a través de la plataforma para sincronizar tus aplicaciones.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Lista de puertos

A continuación se enumeran los puertos utilizados por reCamera Gimbal:

- **Puerto 22**: Utilizado para inicio de sesión remoto por SSH y está cerrado.
- **Puerto 53**: Asociado con la resolución de nombres de dominio DNS y es esencial para la redirección web. Está abierto de forma predeterminada.
- **Puerto 80**: Sirve como interfaz del panel web para la visualización HTTP de la aplicación Node-RED.
- **Puerto 554**: Empleado para la transmisión de vídeo RTSP.
- **Puerto 9090**: Destinado al acceso al terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a las operaciones de Node-RED.

## Actualización del sistema operativo por OTA

Consulta las [Instrucciones de actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#actualización-ota-de-013-a-la-última-versión).

## Restablecimiento de fábrica

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

Si deseas restablecer el dispositivo, por ejemplo, si olvidas el código de acceso de tu dispositivo, puedes mantener presionado el botón **User** y luego conectar el dispositivo a la alimentación. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadear, suelta el botón User.

## Recursos

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
