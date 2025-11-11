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
slug: /es/recamera_hd_poe_getting_started
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

Comienza desempaquetando tu reCamera. Dentro de la caja, deberías encontrar:

- reCamera PoE 64GB
- Tapa de Lente
- Cable Type-C
- Manual de Instrucciones
- Cable Ethernet (RJ45 a MX1.25-5P)
- Cable de Conexión (MX1.25-6P a jumper 6P)

Asegúrate de que todas las partes estén incluidas.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/part_list2.jpg" /></div>

### Configurar dispositivo e iniciar sesión

**Paso 1:** Conecta el cable USB desde reCamera HQ POE a tu PC. Navega a `192.168.42.1` en el sitio web y cambia la contraseña predeterminada. Si estás usando Ethernet POE, accede consultando la dirección IP asignada desde tu router.

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


### Inicio rápido con el Flujo del Panel de reCamera HQ POE

## Aplicar gestión en la nube y respaldo

Si deseas crear una nueva aplicación o guardar aplicaciones en el servicio en la nube SenseCraft, puedes iniciar sesión con tu cuenta sensecraft en la parte inferior izquierda, y luego hacer clic en el ícono + para agregar una nueva aplicación. Entonces puedes comenzar a trabajar en tu flujo.


Si deseas crear una nueva aplicación o guardar aplicaciones en el servicio en la nube SenseCraft, puedes iniciar sesión con tu cuenta sensecraft en la parte inferior izquierda, y luego hacer clic en el ícono `+` para agregar una nueva aplicación. Entonces puedes comenzar a trabajar en tu flujo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

Puedes ver y gestionar tus aplicaciones en [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

Necesitas registrar una cuenta antes de poder iniciar sesión a través de la plataforma para sincronizar tus aplicaciones.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Lista de Puertos

Lo siguiente enumera los puertos utilizados por reCamera Gimbal:

- **Puerto 22**: Utilizado para inicio de sesión SSH remoto y está cerrado.
- **Puerto 53**: Asociado con la resolución de nombres de dominio DNS y es esencial para la redirección web. Está abierto por defecto.
- **Puerto 80**: Sirve como la interfaz del panel web para la visualización HTTP de la Aplicación Node-RED.
- **Puerto 554**: Empleado para transmisión de video RTSP.
- **Puerto 9090**: Destinado para acceso a terminal web, que requiere una contraseña para iniciar sesión.
- **Puerto 1880**: Dedicado a operaciones Node-RED.

## Actualización OTA del SO

Por favor consulta las [Instrucciones de Actualización OTA](https://wiki.seeedstudio.com/es/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

## Restablecimiento de Fábrica

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/interface.jpg" /></div>

Si deseas restablecer el dispositivo, como olvidar el código de acceso de tu dispositivo, puedes mantener presionado el botón **User** y luego conectar el dispositivo a la energía. Cuando la `luz roja` del dispositivo esté **constantemente encendida** en lugar de parpadeando, suelta el botón User.

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
