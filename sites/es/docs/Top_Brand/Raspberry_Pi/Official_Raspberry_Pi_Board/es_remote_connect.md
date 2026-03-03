---
description: Conectarse remotamente a Raspberry Pi/reComputer
title: Conectarse remotamente a Raspberry Pi
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/remote_connect
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

# Conectarse remotamente a Raspberry Pi/reComputer

A menudo sucede que el usuario no puede acceder físicamente a la Raspberry Pi (reComputer u otros dispositivos edge) debido a ciertas limitaciones (como no tener un monitor adicional, etc.). Por lo tanto, es muy necesario conectarse a la Raspberry Pi de forma remota. Dependiendo del sistema operativo que estés ejecutando, hay varias formas de establecer una conexión a dispositivos edge remotos. En este proyecto, según el sistema operativo (Linux) de la Raspberry Pi, podríamos usar el Protocolo Secure Shell (SSH) para controlar máquinas de forma remota.

## Comenzando

SSH, también conocido como Secure Shell o Secure Socket Shell, es un protocolo de red que proporciona a los usuarios, particularmente a los administradores de sistemas, una forma segura de acceder a una computadora a través de una red no segura. SSH es ampliamente utilizado por administradores de red para gestionar sistemas y aplicaciones de forma remota, permitiéndoles iniciar sesión en otra computadora a través de una red, ejecutar comandos y mover archivos de una computadora a otra. Un servidor SSH, por defecto, escucha en el puerto estándar del Protocolo de Control de Transmisión (TCP) 22.

### Materiales Requeridos

- Dispositivos basados en Linux (Raspberry Pi o reComputer)
- PC

### Conexión Remota

Tomando la Raspberry Pi como ejemplo, abriremos el puerto SSH de la Raspberry Pi y lo llamaremos remotamente usando la interfaz SSH en la PC. Para conectarse a la Raspberry Pi desde la computadora, necesitamos conocer la dirección IP de la Pi.
>Aviso: asegúrate de que la PC y la Raspberry Pi estén bajo la misma LAN.

Si tu dispositivo es reComputer, puedes omitir el paso 1 al paso 3 ya que el puerto ssh está abierto por defecto. Estos son los siguientes pasos para conectar la Raspberry Pi con la computadora.

**Paso 1.** Abre una nueva terminal en la Raspberry Pi y ejecuta `sudo raspi-config.` El menú se mostrará como se ve a continuación y necesitamos seleccionar "Interfacing Options" y luego presionar ENTER

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_2.png"/></div>

**Paso 2.** Selecciona "SSH" y presiona ENTER.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_3.png"/></div>

**Paso 3.** Selecciona "Yes" y presiona ENTER.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_4.png"/></div>

Después de un momento, obtendremos un mensaje "The SSH server is enabled".

 <div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_5.png"/></div>

**Paso 4.**  Abre una Terminal en la Raspberry Pi y ejecuta `ifconfig`
Podemos ver la dirección IP de la Raspberry Pi mostrada como se ve a continuación:

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_6.png"/></div>

**Paso 5.** Abre la Terminal de la PC y ejecuta `ssh pi@192.168.6.215` e ingresa la contraseña de la Raspberry Pi. La PC entonces se conectará a la Raspberry Pi de forma remota.

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png"/></div>