---
sidebar_position: 1
description: Manual de Usuario de SenseCraft App Event Versión 2.9.0
title: Gestión de Eventos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecraft-app/tutorials/event-management
aliases:
  - /es/sensecap_mate_app_event
last_update:
  date: 03/20/2023
  author: Matthew
---

# Gestión de Eventos en SenseCraft App

## Funciones de Eventos

SenseCraft App versión 2.9.0 introduce una nueva función de alarma de Eventos que permite a los usuarios crear eventos y establecer condiciones de activación de dispositivos. Cuando los dispositivos cumplen estas condiciones, se envían mensajes de alarma a los usuarios. La página del dispositivo ahora incluye una nueva función de centro de mensajes donde puedes ver mensajes de alarma activados por dispositivos y notificaciones del sistema, habilitando alertas en tiempo real, monitoreo remoto y gestión remota.

### Instalar SenseCraft App V2.9.0 

- Inicia sesión en tu cuenta en SenseCraft App y navega a la página de Eventos
- Sigue estos pasos para configurar alertas de Eventos:

#### Paso 1: Crear una Alerta de Evento
Haz clic en el ícono Agregar o el botón "Agregar Evento" para crear una alerta de Evento. En la página Agregar Evento, ve a Condiciones para agregar opciones de condición, luego haz clic en el botón Agregar para seleccionar un dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" style={{width:1000, height:'auto'}}/></div>

#### Paso 2: Configurar Dispositivo y Condiciones
Selecciona el dispositivo y elige el tipo de medición. Establece las condiciones de alarma seleccionando opciones como "mayor que" o "menor que", luego arrastra la barra de progreso para establecer el valor umbral. Haz clic en "Siguiente Paso" para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" style={{width:1000, height:'auto'}}/></div>

#### Paso 3: Establecer Acciones de Recuperación
En la página Agregar Evento, configura "Acciones de vuelta a la normalidad" para cuando el dispositivo regrese a condiciones normales. Elige si enviar una notificación, luego haz clic en "Guardar". Ingresa un nombre de Evento y haz clic en "Enviar" para agregar exitosamente la alarma de Evento y regresar a la lista de Eventos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" style={{width:1000, height:'auto'}}/></div>

#### Paso 4: Ver Mensajes de Alarma
En la página del Dispositivo, haz clic en "Centro de Mensajes" para ver mensajes de alarma. Esto muestra dos tipos de mensajes:
- **Advertencias del Dispositivo**: Notificaciones de alarma activadas por el dispositivo
- **Notificaciones del Sistema**: Mensajes del sistema

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" style={{width:1000, height:'auto'}}/></div>

#### Paso 5: Gestionar Mensajes de Alarma
Haz clic en un mensaje de alarma para ver detalles cuando un dispositivo active las condiciones configuradas. Después de ver, regresa a la lista de alarmas donde el estado cambia a "leído". Haz clic en el botón editar para seleccionar mensajes para varias operaciones como marcar como leído o eliminar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" style={{width:1000, height:'auto'}}/></div>

#### Paso 6: Ver Mensajes del Sistema
Navega a mensajes del sistema y haz clic para ver notificaciones detalladas del sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" style={{width:1000, height:'auto'}}/></div>
