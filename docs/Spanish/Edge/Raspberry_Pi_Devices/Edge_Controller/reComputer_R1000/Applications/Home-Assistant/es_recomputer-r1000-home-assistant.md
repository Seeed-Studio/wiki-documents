---
description: Aprende a configurar y usar Home Assistant en un reComputer R1000.
title: reComputer R1000 con Home Assistant
keywords:
  - Home Assistant
  - reComputer R1000
  - Home Automation
  - Bookworm
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_home_automation
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

El reComputer R1000, diseñado para sistemas de automatización de edificios, cuenta con múltiples canales RS485 aislados que soportan comunicación a alta y baja velocidad. Es compatible con los protocolos BACnet, Modbus RTU y Modbus TCP/IP, siendo muy versátil para diversas necesidades de automatización. Esta guía brinda una introducción concisa para instalar Home Assistant en el reComputer R1000, permitiendo la integración y control perfectos de tus dispositivos de hogar inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/) es un software gratuito y de código abierto para la automatización del hogar, sirviendo como sistema de control central o hub inteligente para varios dispositivos. Diseñado con control local en mente, asegura que tu Sistema de Gestión de Edificios (BMS) opere sin depender de servidores remotos o conexiones a internet, mejorando la seguridad y confiabilidad. Esto significa que tu BMS puede funcionar 24/7 sin las vulnerabilidades asociadas a dispositivos conectados a la nube, brindando una solución de automatización robusta y segura.

## Comenzando

Antes de iniciar este proyecto, debes preparar el hardware según se describe a continuación.

### Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

:::note
Durante la instalación de HA, se probó conectividad inalámbrica.
:::

### Preparación de Software

El reComputer viene con Bookworm 64 bits preinstalado. Esta guía cubre los pasos para **instalar Home Assistant Supervised** en ese sistema.

## ¿Por qué Home Assistant Supervised?

Hay varias formas de instalar Home Assistant en tu reComputer. Puedes optar por una instalación completa de Home Assistant o, si planeas ejecutarlo junto con otras aplicaciones en tu sistema operativo, el método supervisado es ideal. Otra opción es usar Docker, pero esto implica configurar contenedores separados como add-ons. Aquí nos enfocamos en la instalación **Supervised**, algo más compleja, pero no te preocupes, te guiaremos paso a paso.

## Instalación de Home Assistant Supervised - Bookworm

#### Paso 1: Actualizar e instalar dependencias

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### Paso 2: Iniciar y habilitar Network Manager

Verifica el estado de Network Manager
```bash
sudo systemctl status NetworkManager.service
```

Si no inicia:
```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### Paso 3: Modificar parámetros de arranque

Edita `cmdline.txt`:
```bash
sudo nano /boot/firmware/cmdline.txt
```

Agrega al final de la línea:

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

Reinicia:
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

Tras completar, verás una pantalla azul que te permite seleccionar el modelo **Raspberry Pi4 64**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

Después de unos minutos, iniciará la instalación.

Podrás ver el Home Assistant Dashboard en tu navegador con `<ip_recomputer>:8123`.

La fase inicial de arranque tomará un tiempo. Al terminar, crea una cuenta y sigue los pasos de configuración inicial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
Si aparecen advertencias en las notificaciones, reinicia el reComputer.
:::

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Ofrecemos distintos canales de soporte para asegurar que tu experiencia sea fluida, cubriendo diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
