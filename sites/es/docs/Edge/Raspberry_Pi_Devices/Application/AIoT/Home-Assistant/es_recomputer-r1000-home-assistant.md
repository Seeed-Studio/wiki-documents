---
description: Aprende cómo configurar e instalar Home Assistant en un reComputer R1000
title: reComputer R1000 con Home Assistant
keywords:
  - Home Assistant
  - reComputer R1000
  - Home Automation
  - Bookworm
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_home_automation
last_update:
  date: 08/02/2024
  author: Kasun Thushara
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/recomputer_r1000_home_automation/
---

## Introducción

El reComputer r1000, diseñado para Sistemas de Automatización de Edificios, cuenta con múltiples canales RS485 aislados que soportan comunicación tanto de alta como de baja velocidad. Es compatible con los protocolos BACnet, Modbus RTU y Modbus TCP/IP, lo que lo hace versátil para diversas necesidades de automatización. Esta guía proporciona una introducción concisa a la instalación de Home Assistant en el reComputer r1000, permitiendo la integración y control sin problemas de tus dispositivos de hogar inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/) es un software gratuito y de código abierto para automatización del hogar, que sirve como sistema de control central o hub de hogar inteligente para varios dispositivos. Diseñado con el control local en mente, asegura que tu Sistema de Gestión de Edificios (BMS) opere independientemente de servidores remotos o conexiones a internet, mejorando la seguridad y confiabilidad. Esto significa que tu BMS puede funcionar 24/7 sin las vulnerabilidades asociadas con dispositivos conectados a la nube, proporcionando una solución de automatización robusta y segura.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware con anticipación como se describe aquí.

### Preparación del Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

:::note
During the HA installation process, we tested using wireless connectivity.
:::

### Preparación del Software

El reComputer viene con una versión Bookworm de 64 bits preinstalada. Esta guía cubre los pasos para **instalar Home Assistant Supervised** en ese sistema.

## ¿Por qué Home Assistant Supervised?

Hay algunos métodos para instalar Home Assistant en tu reComputer. Puedes optar por una instalación completa de Home Assistant, o si planeas ejecutar Home Assistant junto con otras aplicaciones sobre tu sistema operativo, el método supervisado es ideal. Otra opción es usar Docker, pero esto requiere configurar contenedores Docker separados como complementos. Esta guía se enfoca en el proceso de instalación más complejo del **método Supervisado**. No te preocupes—te guiaremos paso a paso.

## Instalación de Home Assistant Supervised - Bookworm

#### Paso 1: Actualizar e Instalar Dependencias

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### Paso 2: Iniciar y Habilitar Network Manager

Verificar el estado de Network Manager

```bash
sudo systemctl status NetworkManager.service
```

NetworkManager no se inicia, iniciar y habilitar

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### Paso 3: Modificar los Parámetros de Arranque

Edita el archivo `cmdline.txt`:

```bash
sudo nano /boot/firmware/cmdline.txt
```

Agrega lo siguiente al final de la línea:

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

Reinicia el sistema:

```bash
sudo reboot
```

#### Paso 4: Instalar Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### Paso 5: Instalar OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### Paso 6: Instalar Home Assistant Supervised

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

Tras una corrección exitosa, aparecerá una pantalla azul que te permitirá seleccionar el modelo **Raspberry Pi4 64**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

Después de unos minutos, comenzará la instalación.

Luego puedes ver la interfaz del Dashboard de Home Assistant en un navegador web usando `<tu_ip_del_recomputer>:8123`.

Tomará algo de tiempo completar el proceso de inicio inicial. Una vez que haya terminado de iniciarse, crea una cuenta y sigue las instrucciones de configuración inicial

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
Si aparecen advertencias en las notificaciones, por favor reinicia el reComputer.
:::

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
