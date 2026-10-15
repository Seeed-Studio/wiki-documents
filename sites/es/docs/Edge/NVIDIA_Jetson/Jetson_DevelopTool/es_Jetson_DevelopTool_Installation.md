---
description: Cómo instalar y ejecutar Seeed Jetson DevelopTool en Ubuntu o Windows usando pip o desde el código fuente.
title: Instalación
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - instalación
  - pip
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_installation
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/jetson_developtool_installation/
---

## Requisitos

| Elemento | Requisito |
|------|-------------|
| Sistema operativo host | Ubuntu 20.04 / 22.04 / 24.04, o Windows 10/11 |
| Python | 3.8 o más reciente |

## Opción 1 — Instalar mediante pip (Recomendado)

```bash
pip install seeed-jetson-developer
```

Luego inicia la GUI:

```bash
seeed-jetson-developer
```

## Opción 2 — Instalar desde el código fuente

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install .
```

Inicia después de la instalación:

```bash
seeed-jetson-developer
```

## Opción 3 — Ejecutar directamente (Sin instalación)

Si prefieres ejecutar sin instalar:

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install PyQt5 paramiko requests
python3 run_v2.py
```

## Verificar la instalación

Después de iniciar, debería aparecer la ventana principal con las ocho pestañas de módulos visibles. Si la ventana no se abre, comprueba que PyQt5 esté instalado:

```bash
pip show PyQt5
```

:::tip
En Ubuntu, si obtienes un error de pantalla como `cannot connect to X server`, asegúrate de estar ejecutando en una sesión de escritorio gráfica, no en un terminal SSH sin reenvío X.
:::

## Próximos pasos

- [Conecta tu dispositivo →](/es/jetson_developtool_connect_device)
- [Flashea el firmware →](/es/jetson_developtool_flash_firmware)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
