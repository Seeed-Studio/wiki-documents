---
description: El reComputer Industrial R22xx es un NVR industrial con IA integrado basado en Raspberry Pi CM5 equipado con un acelerador de IA Hailo-8 que ofrece hasta 26 TOPS. Con 4 puertos Ethernet Gigabit con soporte PoE PSE más un puerto Ethernet Gigabit adicional, permite transmisión de vídeo de gran ancho de banda y un despliegue PoE simplificado para cámaras IP. Ofrece abundantes E/S industriales, conectividad inalámbrica flexible, diseño térmico sin ventilador y un amplio rango de temperatura de funcionamiento de –20 °C a 50 °C, garantizando análisis de vídeo con IA fiables y un funcionamiento continuo y estable en escenarios exigentes.
title: reComputer Industrial R22xx Flash OS
keywords:
  - Edge Controller
  - Raspberry pi
  - Edge Controller
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_flash_os
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_flash_os/
---


# reComputer Industrial R22xx Flashear el SO

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

La serie reComputer Industrial R22xx está impulsada por Raspberry Pi CM5 y el acelerador de IA Hailo-8; este sistema compacto de IA en el borde ofrece 26 TOPS para procesamiento de visión multicanal en tiempo real. Con una CPU Cortex-A76 de cuatro núcleos, hasta 16GB de RAM, 64GB de eMMC y una interfaz versátil, garantiza una integración fluida en aplicaciones industriales de IA.

## Requisitos de hardware

Necesitas preparar el siguiente hardware

- reComputer Industrial R22xx x 1
- Ordenador host (Windows/Mac/Linux) x 1
- Cable Ethernet x 1
- Adaptador de corriente (12V-24V) BYO

## Requisitos de software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Flashear el SO

### Para ordenador host con Windows

- **Paso 1.** Haz clic en el siguiente enlace para descargar el [archivo de imagen](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file) del dispositivo
Selecciona el último y haz clic en el enlace de la fecha para descargar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-1.png" style={{width:800, height:'auto'}}/></div>

- **Paso 2.** Descarga el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**

- **Paso 3.** Abre el software Raspberry Pi Imager

- a.Descarga el instalador de configuración de rpiboot haciendo clic aquí para instalar los controladores necesarios y la herramienta de arranque.
- b.Conecta reComputer R2200 al PC mediante un cable USB Type-C.
- c.Windows ahora detectará el hardware e instalará los controladores necesarios.
- d.Busca la herramienta rpiboot que instalamos antes y ábrela.
- e.Abre el explorador de archivos y verás la eMMC del Computer Module 5 mostrada como un dispositivo de almacenamiento masivo USB.
- f.Descarga el software Raspberry Pi Imager desde https://www.raspberrypi.org/software/ .
- g.Abre el software Raspberry Pi Imager.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-2.png" alt="pir" width="800" height="auto"/></p>

- **Paso 4.** Selecciona el archivo de imagen descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-3.png" alt="pir" width="800" height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-4.png" alt="pir" width="800" height="auto"/></p>

- **Paso 5.** En la pestaña Storage, selecciona el dispositivo de almacenamiento en el que escribir la imagen. Selecciona Next.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-5.png" alt="pir" width="800" height="auto"/></p>

- **Paso 6.** Raspberry Pi OS y algunos sistemas operativos de terceros admiten personalización. Si estás instalando uno de estos sistemas operativos, puedes usar el siguiente conjunto de pasos en Imager para personalizarlo. Estos pasos son opcionales y se pueden omitir eligiendo Skip customisation. Para más instrucciones de configuración, consulta **[aquí](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-6.png" alt="pir" width="800" height="auto"/></p>

Continúa grabando la imagen hasta que se complete correctamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-7.png" alt="pir" width="800" height="auto"/></p>

Desconecta el puerto USB-C, presiona de nuevo el botón de arranque y enciende/apaga la alimentación. Si puedes iniciar sesión en el sistema con normalidad, la imagen se ha grabado correctamente y se puede usar con normalidad.

### Para ordenador host con MAC

:::caution
**Debes instalar [homebrew](https://brew.sh/) antes de continuar con los siguientes pasos.**
Por favor abre una terminal y escribe ```brew -V``` para comprobar si has configurado correctamente el entorno de homebrew; deberías ver la versión del entorno de homebrew que has instalado.
:::

- **Paso 1.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)

- **Paso 2.** Abre la aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

Aquí puedes **set a hostname, enable SSH, set a password, configure wifi, set local settings** y más

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**NOTA:** Puedes seleccionar otros sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

### Para ordenador host con Linux

- **Paso 1.** Descargar snap

```sh
sudo apt install snap
```

- **Paso 2.** Descargar **rpi-imager**

```sh
snap install rpi-imager
```

- **Paso 3.** Abrir el software Raspberry Pi Imager

```sh
rpi-imager
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **Paso 4.** Pulsa **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

Aquí puedes **set a hostname, enable SSH, set a password, configure wifi, set local settings** y más

- **Paso 5.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTA:** Puedes seleccionar otros sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 6.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 7.** Finalmente, haz clic en **NEXT** y **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## Arrancar desde NVME

### Actualizar EEPROM

*Este método funciona si tienes un SSD y has arrancado el dispositivo correctamente con eMMC. Asegúrate de que tu sistema sea la última versión de Raspberry Pi (Bookworm o posterior) y de que el firmware de tu RPi 5 esté actualizado a 2023-12-06 (6 de diciembre) o más reciente; de lo contrario, es posible que no reconozca las configuraciones relacionadas con NVME.*

**Paso 1**: Asegúrate de que tu sistema Raspberry Pi esté actualizado (Bookworm o posterior), introduce el siguiente comando para actualizar el firmware de la RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y pulsa Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

Desplázate hacia abajo hasta `Bootloader Version` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

Y finalmente elige `Latest`, y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

Selecciona `No` aquí: quieres el bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

Y sal de la herramienta seleccionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

Si se te pide reiniciar, selecciona `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**Paso 2**: Haz clic en **Applications** =>**Accessories** =>**SD Card Copier** en la pantalla principal, ejecuta el programa **SD Card Copier** y copia el sistema operativo al SSD NVME como se muestra en la figura siguiente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### Configurar la Raspberry Pi para arrancar desde el SSD NVMe

Si tienes fácil acceso a la ranura de tu tarjeta SD, puedes apagar tu Pi, extraer la tarjeta SD y (si todo funciona como se espera) debería arrancar automáticamente desde tu unidad NVMe la próxima vez que la enciendas. Sin embargo, si quieres dejar la tarjeta SD donde está y aun así arrancar desde NVMe, tendrás que cambiar el orden de arranque.

**Paso 1**: Introduce el siguiente comando:

```shell
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y pulsa Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**Paso 2**: Desplázate hacia abajo hasta `Boot Order` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**Paso 3**: Elige `NVMe/USB Boot` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

Se confirmará la configuración. Pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**Paso 4**: Vuelve a la primera pantalla seleccionando `Back` o pulsando la tecla Esc. Luego navega hasta Finish usando la tecla de cursor derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

Se te preguntará si quieres reiniciar ahora. Haz clic en `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>


## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
