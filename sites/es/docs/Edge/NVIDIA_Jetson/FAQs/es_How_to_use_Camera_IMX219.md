---
description: Este es un FAQ sobre el uso de la cámara IMX219 con dispositivos NVIDIA Jetson
title: Uso de la cámara IMX219 con dispositivos NVIDIA Jetson
keywords:
  - Jetson
  - Cámara IMX219
  - Cámara CSI
image: https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg
slug: /how_to_use_camera_imx219
last_update:
  date: 06/03/2026
  auther: Dongxu Jin
  createdAt: '2026-6-3'
  updatedAt: '2025-6-5'
url: https://wiki.seeedstudio.com/es/how_to_use_camera_imx219/
---

# Guía de configuración de la cámara IMX219

La IMX219 es un sensor de imagen CMOS de 8 megapíxeles ampliamente utilizado que utiliza un cable plano CSI de 15 pines.

## Instalación de hardware
La cámara CSI no admite conexión en caliente. Todas las operaciones de cableado deben realizarse con la placa de desarrollo completamente apagada.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg"/></div>
Levanta la pestaña del conector CSI de la placa Jetson.
Inserta el cable plano CSI, asegurándote de que los contactos metálicos del cable se alineen con los de la placa portadora Jetson.
Presiona la pestaña firmemente hacia abajo para bloquear el cable en su lugar.

## Configuración del controlador de software
Inicia la herramienta de configuración de NVIDIA:
 ```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```
Navega a Configure Jetson Nano CSI Connector.
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-16-40.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-20.png"/>
    </div>
</div>
Selecciona Configure for compatible hardware.
Elige Camera IMX219 Dual de la lista.
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-41.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-07.png"/>
    </div>
</div>
Selecciona Save pin changes.
Selecciona Save and reboot para reconfigurar los pines y aplicar los cambios en el device tree.

***💡 Consejo: Si conectas una sola cámara, debes seleccionar el modo "Camera IMX219 Dual" para que funcione correctamente. Por el contrario, si conectas una configuración de doble cámara, debes seleccionar el modo "Single".***

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-36.png"/></div>
Verificación del nodo de dispositivo
Después de que el sistema se reinicie, abre una terminal y ejecuta el siguiente comando para comprobar si el hardware es reconocido:

```bash
ls /dev/video*
```

Si la salida incluye un nodo de dispositivo como `/dev/video0`, la conexión de hardware se ha realizado correctamente. A continuación, puedes probar la cámara utilizando el método más sencillo:
```bash
nvgstcapture
```
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-21-00.png"/></div>
Es posible que notes un tono rojizo en los bordes de la imagen de la cámara. Esto se debe a que falta un archivo de configuración ISP (Image Signal Processing).

## Configuración del archivo ISP
Puedes corregir la distorsión de color descargando e instalando el archivo de configuración ISP oficial de NVIDIA.

Descarga y extrae el archivo:
```bash
wget https://files.seeedstudio.com//Driver/Camera_overrides.tar.gz
tar zxvf Camera_overrides.tar.gz
```

Mueve el archivo al directorio de configuración de cámara de Nvidia del sistema y modifica los permisos:
```bash
sudo mv camera_overrides.isp /var/nvidia/nvcam/settings/
sudo chmod 664 /var/nvidia/nvcam/settings/camera_overrides.isp
sudo chown root:root /var/nvidia/nvcam/settings/camera_overrides.isp
```

Después de reemplazar el archivo ISP, reinicia la aplicación de vista previa de la cámara. El tono rojizo en los bordes debería haberse corregido.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-32-48.png"/></div>

***⚠️ Nota: Aplicar este archivo de anulación de ISP puede causar un tono azulado alrededor de la imagen si vuelves a una cámara estándar Raspberry Pi V2. Se recomienda hacer una copia de seguridad o restaurar la configuración ISP original al cambiar entre diferentes módulos de cámara.***


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>