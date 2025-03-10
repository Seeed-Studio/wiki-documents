---
description: Administración remota con Allxon en dispositivos NVIDIA Jetson
title: Primeros pasos con Allxon
tags:
  - Administración remota
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Allxon-Jetson-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# Primeros pasos con Allxon en dispositivos NVIDIA® Jetson

<p style={{textAlign: 'center'}}><img src="https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png" alt="pir" width="1000" height="auto"/></p>

[Allxon](https://www.allxon.com) es una solución esencial de administración de dispositivos en el borde que simplifica y optimiza la administración de operaciones comerciales al unir el ecosistema AI/IoT: hardware (IHV), software (ISV) y proveedores de servicios (SI/MSP). Como vínculo entre ecosistemas, Allxon es la chispa que enciende una conectividad rápida y perfecta para mantener todos los sistemas activos.

Puedes administrar de forma segura las versiones posteriores de NVIDIA® JetPack 4.6 con Cyber ​​Security at the Edge que protege todas las redes y el hardware. Allxon integra inteligencia de amenazas exclusiva de Trend Micro IoT Security™ (TMIS) para garantizar que recibas protección multicapa.

Allxon ofrece servicios de administración remota de dispositivos dentro y fuera de banda a todos los dispositivos en el borde para ayudar a las empresas a ahorrar tiempo y reducir costos laborales exponenciales. Simplemente navegando en un único portal en la nube fácil de usar, las empresas pueden optimizar y agilizar sus servicios sin esfuerzo.

## Hardware soportado
- [Admite todos los dispositivos nvidia jetson](https://www.seeedstudio.com/tag/nvidia.html)

## Prerequisitos

- Cualquiera de los dispositivos Jetson anteriores
- El último sistema operativo Jetson que ya viene instalado
- Monitor, teclado y mouse (opcional)


## Primeros pasos

¡Empezar a utilizar Allxon sólo te llevará un par de minutos!
- Introducción al cableado del Hardware
- Crear una cuenta Allxon
- Instala Allxon DMS Agent en tu dispositivo Jetson
- Obtener código de emparejamiento del dispositivo
- Agrega el dispositivo Jetson al portal Allxon DMS

### Introducción al cableado del Hardware
Definición de pin para la placa principal del habilitador OOB y el color correspondiente de 
el cable.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/writting-1.png" alt="pir" width="500" height="auto"/></p>
Aquí usaremos el diagrama de cableado de OBB y Jetson Orin Nano como ejemplo. La siguiente información proporciona ejemplos de cableado para NVIDIA® 
Kit de desarrollo Jetson™ Nano Orin.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-2.png" alt="pir" width="700" height="auto"/></p>
También proporcionamos un diagrama esquemático del cableado.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-3.png" alt="pir" width="1000" height="auto"/></p>

### Crear una cuenta Allxon

- **Paso 1.** Visita [esta página](https://dms.allxon.com/next/signup) para registrarte y obtener una cuenta Allxon

- **Paso 2.** Ingresa tu dirección de correo electrónico y continúa

- **Paso 3.** Verifica la cuenta desde el correo electrónico de activación que recibiste y crea una contraseña

### Instala Allxon DMS Agent en tu dispositivo Jetson

Instalar Allxon DMS Agent es un proceso muy sencillo. ¡Solo necesitas ejecutar un comando!

- **Paso 1.** Accede al dispositivo Jetson, abre la terminal y ejecuta lo siguiente

```sh
sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-1.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** El comando anterior instalará Allxon DMS Agent y los paquetes relacionados.

- **Paso 2.** Al final de la instalación, se te preguntará si deseas instalar **Trend Micro IoT Security™** como un servicio de seguridad en el borde complementario y aceptar el EULA de TMIS. Puedes ingresar **Y** para continuar con esta instalación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-2.jpg" alt="pir" width="1000" height="auto"/></p>

**Nota:** Trend Micro IoT Security™ se instalará con una prueba gratuita de 3 meses

Después de la instalación, Allxon DMS Agent se iniciará automáticamente.

**Nota:** Si has conectado el dispositivo Jetson a una pantalla, verás aparecer la ventana emergente del agente Allxon DMS. Si no aparece, presiona **Ctrl + Shift + B** para iniciar el agente.

### Obtener código de emparejamiento del dispositivo

Primero necesitamos obtener un código de emparejamiento de dispositivo de nuestra Jetson. Puedes obtener este código desde la GUI o desde la línea de comandos

#### Utilizando la GUI

- **Paso 1.** Abre Allxon DMS Agent presionando **Ctrl + Shift + B** en el dispositivo Jetson

- **Paso 2.** Haz click en **Obtener código de emparejamiento del dispositivo** para obtener el código.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/agent-2.png" alt="pir" width="700" height="auto"/></p>

#### Utilizando la línea de comandos

- **Paso 1.** Ejecuta lo siguiente para obtener el código

```sh
dms-get-pairing-code
```

### Agrega el dispositivo Jetson al portal Allxon DMS

- **Paso 1.** Inicia sesión en [Allxon DMS Portal](https://dms.allxon.com/next/signin) con las credenciales utilizadas anteriormente

- **Paso 2.** Haz click en **Dispositivos** en el panel de navegación izquierdo y haz click en **+ Agregar dispositivo**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Haz click en **Siguiente**, ingresa el código de emparejamiento del dispositivo obtenido anteriormente y haz click en **Siguiente**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-2.png" alt="pir" width="450" height="auto"/></p>

- **Paso 4.** Verás la siguiente ventana si el emparejamiento se realiza correctamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-3.png" alt="pir" width="450" height="auto"/></p>

**Nota:** Si tienes un código de promoción, puedes hacer click en **Siguiente** y canjearlo. De lo contrario, puedes presionar **Omitir** para finalizar la configuración.

### Portal Allxon DMS

Después de que el dispositivo Jetson esté emparejado con Allxon DMS Portal, verás el dispositivo conectado en la página **Dispositivos**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-4.png" alt="pir" width="1000" height="auto"/></p>

Si haces click en el dispositivo, verás más información sobre tu dispositivo. ¡Ahora puedes monitorear y administrar tu dispositivo de forma remota con Allxon DMS Portal!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-5.png" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[Página web]** [Centro de recursos de Allxon](https://www.allxon.com/knowledge)

- **[Página web]** [NVIDIA Learn](https://developer.nvidia.com/embedded/learn)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
