---
description: Utiliza el módulo Device Management en Seeed Jetson DevelopTool para ejecutar diagnósticos, detectar periféricos y monitorizar el estado del dispositivo en tiempo real.
title: Device Management
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - device management
  - diagnostics
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_device_management
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/jetson_developtool_device_management/
---

El módulo **Device Management** proporciona un panel rápido para comprender el estado actual de tu dispositivo Jetson conectado: diagnósticos de hardware, detección de periféricos y métricas del sistema en vivo, todo sin abrir una terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-devices.png" style={{width:800, height:'auto'}}/></div>

## Conexión a un dispositivo

Introduce la dirección IP del Jetson, el nombre de usuario SSH y la contraseña en el panel de conexión y haz clic en **Connect**. Consulta [Connect Device](/es/jetson_developtool_connect_device) para obtener detalles sobre la configuración de red.

## Funciones

### Información del sistema

Una vez conectado, el panel muestra:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-info-cards.png" style={{width:800, height:'auto'}}/></div>

| Info | Descripción |
|------|-------------|
| Modelo de dispositivo | p. ej. reComputer Super J4012s |
| Versión de JetPack / L4T | Versión actual del firmware |
| Uso de CPU | Utilización por núcleo en tiempo real |
| Uso de GPU | Porcentaje de carga actual de la GPU |
| Memoria | RAM usada / total |
| Disco | Almacenamiento usado / total |
| Temperatura | Zonas térmicas de CPU, GPU y placa |

### Detección de periféricos

Haz clic en **Detect Peripherals** para escanear el hardware conectado:

- Dispositivos USB (cámaras, adaptadores Wi-Fi, almacenamiento)
- Unidades NVMe / M.2
- Salidas de pantalla
- Interfaces GPIO / I2C / SPI

### Diagnósticos rápidos

Haz clic en **Run All Checks** para ejecutar una comprobación de estado con un solo clic. La herramienta comprueba automáticamente la red, GPU / Torch, Docker, jtop, cámara USB, disco de arranque y otros componentes clave, mostrando cada resultado en línea con un estado de aprobado / fallido y accesos directos para correcciones rápidas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-diagnostics-full.png" style={{width:800, height:'auto'}}/></div>

### Detección de periféricos

Haz clic en **Peripherals Only** para escanear el hardware conectado — USB-WiFi, módulo 5G, Bluetooth, SSD NVMe, cámaras y pantalla HDMI — sin ejecutar el conjunto completo de diagnósticos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-peripherals.png" style={{width:800, height:'auto'}}/></div>

### Instalar PyTorch

Si la comprobación **GPU / Torch** muestra "Not installed", haz clic en el botón **Install PyTorch** para abrir el asistente de instalación. La herramienta detecta automáticamente tu versión de JetPack y selecciona la rueda de NVIDIA PyTorch correspondiente. También puedes elegir el entorno de destino de Python (Python del sistema o un nuevo entorno conda de Miniforge).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/devices-install-pytorch.png" style={{width:600, height:'auto'}}/></div>

Haz clic en **Start Install** para comenzar. La instalación se ejecuta en segundo plano; haz clic en **Run in Background** para seguir utilizando la herramienta mientras finaliza.

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
