---
description: análisis en profundidad de la estructura del sistema operativo (OS) de la reCamera
title: Estructura del OS de reCamera
keywords:
  - Edge
  - reCamera
  - opereating system
  - OS
image: https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.webp
slug: /recamera_os_structure
sidebar_position: 2
last_update:
  date: 02/15/2025
  author: Dawn Yao
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/recamera_os_structure/
---

# Estructura de Software de reCamera

El software viene con un OS estable de reCamera que soporta actualizaciones OTA de firmware. Además, Node-RED y la plataforma Sensecraft AI están integradas en el dispositivo para una experiencia de despliegue más fácil. Esta integración ofrece a los desarrolladores novatos una experiencia de programación modular basada en nodos de Node-RED. Para desarrolladores avanzados, el desarrollo en profundidad basado en Linux y python también están disponibles para experimentar y jugar.

Damos la bienvenida calurosamente a desarrolladores competentes en JavaScript, C/C++, Python, Linux OS, buildroot, así como geeks, estudiantes y principiantes, para participar en el desarrollo posterior y explorar aplicaciones.

## OS de reCamera

Este es un sistema operativo embebido construido sobre Buildroot, integrando los servicios `supervisor`, `sscma` (Seeed SenseCraft Model Assistant), y `Node-RED`. El diagrama de arquitectura se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.png" /></div>

El [código fuente](https://github.com/Seeed-Studio/reCamera-OS) del OS está disponible en GitHub. Nuestro equipo también se esfuerza por hacer el OS más amigable y versátil, cada actualización será publicada [aquí](https://github.com/Seeed-Studio/reCamera-OS/releases). La nueva versión puede ser actualizada por OTA con la interfaz Web o [actualización manual](https://wiki.seeedstudio.com/es/recamera_os_version_control).

### 🧩 Supervisor

Supervisor es un gestor de procesos ligero que monitorea y gestiona los otros servicios. Es responsable de iniciar y detener servicios, así como manejar eventos del sistema, y proporcionar interfaces para otros servicios o UI. Proporciona los servicios a continuación:

#### Servicios del Sistema

- ***Gestión de dispositivos***: Identificar y configurar dispositivos conectados, dispositivos de almacenamiento, etc.
- ***Gestión de Usuarios***: Gestionar cuentas de usuario, credenciales y claves SSH.
- ***Configuración de red***: Configurar conexiones de red cableadas e inalámbricas.
- ***Operaciones del sistema de archivos***: Gestionar archivos del dispositivo.
- ***Descubrimiento de Dispositivos***:
  - Usa mDNS para difundir información del dispositivo. El nombre de host del dispositivo es recamera.local.
  - Cuando una interfaz web envía una solicitud, el dispositivo recamera escanea la red local para otros dispositivos recamera vía mDNS, genera una lista de dispositivos descubiertos, formatea los datos, y los devuelve a la interfaz web. (Nota: Actualmente, solo se devuelve la información de un dispositivo.)

#### Servicio de Actualización

- Gestión de descarga de paquetes/firmware
- Verificación de seguridad
- Automatización de instalación

#### Servicio Daemon

- Monitoreo de salud del sistema
- Recuperación automática de aplicaciones

#### Servicio de Registro

- Seguimiento del estado de ejecución
- Diagnósticos de errores

#### Servicio de Aplicación

- Despliegue de Aplicaciones
- Empaquetado de Aplicaciones

### 🧩 Interfaz Web Básica

La interfaz web básica proporciona una interfaz amigable para que los usuarios gestionen el dispositivo. Obtendrá datos del Supervisor y formará la interfaz web básica de reCamera al encender. La interfaz se muestra a continuación:

- Página de Inicio: `ip_address/#/init`
- Espacio de Trabajo: `ip_address/#/workspace` (para versión de os 0.1.4 y superiores)
- Configuración de Red: `ip_address/#/network`
- Seguridad: `ip_address/#/security`
- Terminal: `ip_address/#/terminal`
- Sistema: `ip_address/#/system`
- Energía: `ip_address/#/power`

Estas interfaces web básicas permiten a los usuarios tener acceso seguro a las funcionalidades de configuración central del dispositivo al encender. El [código fuente](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/supervisor/www) también está disponible en Github si desea modificar el front-end de la interfaz web básica.

### 🧩 Módulos Node-RED

#### sscma-node

Este es el módulo del lado del servidor para Node-RED para habilitar la comunicación entre el cliente Node-RED y el servicio sscma. El [código fuente](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/sscma-node) está en Github para que cualquier desarrollador de C/C++ haga desarrollo extendido. Proporciona las siguientes características:

- Servicio de procesamiento de imágenes
- Gestión de modelos AI
- Servicio de streaming de medios
- Servicio de almacenamiento de datos

#### node-red-sscma

`node-red-contrib-sscma` es el componente de nodo Node-RED diseñado para facilitar el despliegue rápido de modelos AI a través de programación basada en flujos. El [código fuente](https://github.com/Seeed-Studio/node-red-contrib-sscma) también está en Github para que cualquier desarrollador haga desarrollo extendido siguiendo el [protocolo](https://wiki.seeedstudio.com/es/node_red_protocol). Esto permite la integración perfecta de salidas de modelos AI con otros dispositivos, habilitando automatización inteligente y flujos de trabajo inteligentes.

Un ejemplo de cómo se comunican el `nodo de cámara` y el `nodo de modelo` se muestra a continuación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/vision_inference.png" /></div>

### 🧩 Integración SenseCraft

También hay una interfaz a la Plataforma SenseCraft para modelos y flujos de aplicación. El flujo de Node-Red puede ser almacenado en el Servicio en la Nube de SenseCraft. También puedes entrenar tu propio modelo y publicarlo. Súper fácil con un clic para desplegar diferentes aplicaciones en el dispositivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/sensecraft_applications.png" /></div>

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
