---
description: Gestión Remota con Allxon en Dispositivos NVIDIA Jetson
title: Primeros Pasos con Allxon
tags:
  - Remote Manage
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Allxon-Jetson-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# Primeros Pasos con Allxon en Dispositivos NVIDIA® Jetson

<p style={{textAlign: 'center'}}><img src="https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png" alt="pir" width="1000" height="auto"/></p>

[Allxon](https://www.allxon.com) es una solución esencial de gestión de dispositivos edge que simplifica y optimiza la gestión de operaciones comerciales al unir el ecosistema AI/IoT: hardware (IHV), software (ISV) y proveedores de servicios (SI/MSP). Como un conector de ecosistema, Allxon es la chispa que enciende una conectividad rápida y sin interrupciones para mantener todos los sistemas ENCENDIDOS.

Puedes gestionar de forma segura NVIDIA® JetPack 4.6 en adelante con Ciberseguridad en el Edge protegiendo todas las redes y hardware. Allxon integra inteligencia de amenazas exclusiva de Trend Micro IoT Security™ (TMIS) para asegurar que recibas protección multicapa.

Allxon aporta servicios de gestión remota de dispositivos in-band y out-of-band a todos los dispositivos edge para ayudar a las empresas a ahorrar tiempo y reducir costos laborales exponenciales. Simplemente navegando en un portal en la nube único y fácil de usar, las empresas pueden optimizar y agilizar sus servicios sin esfuerzo.

## Hardware Soportado
- [Soporta todos los dispositivos nvidia jetson](https://www.seeedstudio.com/tag/nvidia.html)

## Prerrequisitos

- Cualquiera de los Dispositivos Jetson mencionados arriba
- El SO Jetson más reciente ya instalado en el Dispositivo Jetson
- Monitor, teclado, ratón (opcional)


## Primeros Pasos

¡Comenzar con Allxon solo toma un par de minutos!
- Introducción al Cableado de Hardware
- Registrarse para una Cuenta Allxon
- Instalar el Agente Allxon DMS en el Dispositivo Jetson
- Obtener el Código de Emparejamiento del Dispositivo
- Agregar el Dispositivo Jetson al Portal Allxon DMS

### Introducción al Cableado de Hardware
Definición de pines para la placa principal OOB Enabler y el color correspondiente del 
cable.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/writting-1.png" alt="pir" width="500" height="auto"/></p>
Aquí, usaremos el diagrama de cableado de OBB y Jetson Orin Nano como ejemplo. La siguiente información proporciona ejemplos de cableado para el NVIDIA® 
Jetson™ Orin Nano Dev Kit.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-2.png" alt="pir" width="700" height="auto"/></p>
También hemos proporcionado un diagrama esquemático del cableado.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-3.png" alt="pir" width="1000" height="auto"/></p>

### Registrarse para una Cuenta Allxon

- **Paso 1.** Visita [esta página](https://dms.allxon.com/next/signup) para registrarte para una cuenta Allxon

- **Paso 2.** Ingresa tu dirección de correo electrónico y procede

- **Paso 3.** Verifica la cuenta desde el correo de activación que recibas y crea una contraseña

### Instalar el Agente Allxon DMS en el Dispositivo Jetson

Instalar el Agente Allxon DMS es un proceso muy fácil. ¡Solo necesitas ejecutar un comando!

- **Paso 1.** Accede al Dispositivo Jetson, abre la terminal y ejecuta lo siguiente

```sh
sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-1.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** El comando anterior instalará el Agente Allxon DMS y los paquetes relacionados

- **Paso 2.** Al final de la instalación, preguntará si quieres instalar **Trend Micro IoT Security™** como un complemento de servicios de seguridad edge y aceptar el EULA de TMIS. Puedes ingresar **Y** para proceder con esta instalación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-2.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Trend Micro IoT Security™ se instalará como una prueba gratuita de 3 meses

Después de la instalación, el Agente Allxon DMS se iniciará automáticamente.

**Nota:** Si has conectado el Dispositivo Jetson a una pantalla, verás aparecer la ventana del Agente Allxon DMS. Si no aparece, presiona **Ctrl + Shift + B** para iniciar el agente.

### Obtener el Código de Emparejamiento del Dispositivo

Primero necesitamos obtener un código de emparejamiento de dispositivo de nuestro Dispositivo Jetson. Puedes obtener este código desde la GUI o línea de comandos

#### Usando GUI

- **Paso 1.** Abre el Agente Allxon DMS presionando **Ctrl + Shift + B** en el Dispositivo Jetson

- **Paso 2.** Haz clic en **Get device pairing code** para obtener el código

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/agent-2.png" alt="pir" width="700" height="auto"/></p>

#### Usando Línea de Comandos

- **Paso 1.** Ejecuta lo siguiente para obtener el código

```sh
dms-get-pairing-code
```

### Agregar el Dispositivo Jetson al Portal Allxon DMS

- **Paso 1.** Inicia sesión en el [Portal Allxon DMS](https://dms.allxon.com/next/signin) con las credenciales usadas previamente

- **Paso 2.** Haz clic en **Devices** desde el panel de navegación izquierdo y haz clic en **+ Add Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Haz clic en **Next**, ingresa el código de emparejamiento de dispositivo obtenido previamente y haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-2.png" alt="pir" width="450" height="auto"/></p>

- **Paso 4.** Verás la siguiente ventana si el emparejamiento es exitoso

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-3.png" alt="pir" width="450" height="auto"/></p>

**Nota:** Si tienes un código de promoción, puedes hacer clic en **Next** y canjearlo. De lo contrario, puedes presionar **Skip** para finalizar la configuración.

### Portal Allxon DMS

Después de que el Dispositivo Jetson esté emparejado con el Portal Allxon DMS, verás el dispositivo conectado bajo la página **Devices**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-4.png" alt="pir" width="1000" height="auto"/></p>

Si haces clic en el dispositivo, verás más información para tu dispositivo. ¡Ahora puedes monitorear y gestionar remotamente tu dispositivo con el Portal Allxon DMS!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-5.png" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[Página Web]** [Centro de Recursos Allxon](https://www.allxon.com/knowledge)

- **[Página Web]** [NVIDIA Learn](https://developer.nvidia.com/embedded/learn)

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