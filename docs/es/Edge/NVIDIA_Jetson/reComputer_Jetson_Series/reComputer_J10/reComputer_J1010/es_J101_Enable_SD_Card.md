---
description: J101 Habilitar Tarjeta SD
title: J101 Habilitar Tarjeta SD
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/J101_Enable_SD_Card
last_update:
  date: 01/05/2022
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- # Boot NVIDIA JetPack OS from SD card for J101 Carrier Board -->

# J101 Habilitar Tarjeta SD

El método consiste en flashear el SO NVIDIA JetPack a la tarjeta SD en la Placa Portadora J101 que opera en el reComputer J1010. Por lo tanto, primero se requiere <a href="https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>Flashear SO JetPack en reComputer J1010</span></a>.

## Configuración del Controlador

Al principio, necesitamos encender el reComputer e ir al escritorio como se muestra a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>


### Paso 1 . Clonar el repositorio

Haz clic derecho y abre la Terminal, y luego ejecuta el comando a continuación para descargar el código relevante:

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### Paso 2. Compilar jetson-sdmmc-overlay

Acceder a la ubicación del espacio de trabajo:

```bash
cd seeed-linux-dtoverlays
```

Para la placa portadora J101, necesitamos cambiar el valor "compatible" en este archivo "overlays\jetsonnano\jetson-sdmmc-overlay.dts".

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- Así como esto.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

Y luego compilamos el archivo que cambiamos para asegurarnos de que estén correctamente modificados.

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### Paso 3. Asegúrate de que la tarjeta SD pueda ser reconocida

Inserta la tarjeta SD en la **placa portadora J101**.

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

Después de ejecutar estos comandos anteriores, deberíamos obtener una salida **similar** (**Puede no ser exactamente la misma. Depende del periférico y los controladores ya instalados**) a la siguiente y sabemos que la tarjeta SD ha sido reconocida:

```txt
    Header 1 [default]: Jetson 40pin Header
    Available hardware modules:
    1. Adafruit SPH0645LM4H
    2. Adafruit UDA1334A
    3. FE-PI Audio V1 and Z V2
    4. MCP251x CAN Controller
    5. ReSpeaker 4 Mic Array
    6. ReSpeaker 4 Mic Linear Array
    7. reComputer sdmmc
    Header 2: Jetson Nano CSI Connector


    Available hardware modules:
    1. Camera IMX219 Dual
    2. Camera IMX477 Dual
    3. Camera IMX477-A and IMX219-B
    Header 3: Jetson M.2 Key E Slot
    No hardware configurations found!
```

### Paso 4. Nombrar nuestro dispositivo y finalizar la instalación del controlador

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>


!!!Note
    Es posible que necesites **reiniciar** para ejecutar jtop después de completar la instalación por primera vez.

<!-- ## Move system to SD card

First, we need to clone the script include the tools we need.

```bash
git clone https://github.com/limengdu/bootFromUSB
```

Segundo, necesitamos asegurarnos de que la tarjeta SD esté en formato ext4, lo cual se puede ver visualmente en la herramienta "disk", si no está en ext4 necesitamos formatearla y cambiarla al formato ext4.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

Y luego, ir al directorio del script, ejecutar el siguiente comando así

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

Espera un momento, solo hasta que termine automáticamente, si no se reporta ningún error, la grabación está completa

## Configuración de Arranque

Una vez que el controlador ha sido instalado y configurado exitosamente, podemos simplemente verlo a través del comando como "lsblk" o ver el dispositivo en "/dev".

### Cambiar dispositivo de arranque

Se supone que debemos cambiar la configuración en "/boot/extlinux/extlinux.conf".

- Arrancar desde tarjeta sd

    Después de arrancar desde el emmc en la placa portadora, queremos modificarlo para arrancar desde la tarjeta SD. Necesitamos asegurarnos de que el proceso anterior, incluyendo la grabación del sistema en la tarjeta sd, y los controladores de la tarjeta sd estén instalados correctamente. Modifica los parámetros después de root a la dirección del dispositivo desde el cual estamos arrancando. Cuando hayamos completado nuestros cambios, reinicia el sistema.

    **Antes del reinicio Modifica "/boot/extlinux/extlinux.conf" Después del reinicio ve "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!Note
        Nuestro archivo de configuración después de arrancar el sistema desde la tarjeta sd está en "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" y el archivo de configuración después de arrancar el sistema desde el emmc integrado está en "/boot/extlinux/extlinux.conf". Son los mismos archivos desde los cuales el dispositivo lee la configuración y elige dónde arrancar el sistema después del encendido, y las rutas relativas cambian cuando el sistema ha terminado de arrancar.

- Arrancar desde emmc de la placa

    Queremos cambiar de vuelta a arrancar desde emmc después de arrancar desde una tarjeta SD o necesitamos cambiar la tarjeta SD por algún propósito. Entonces necesitamos cambiar el dispositivo de vuelta para arrancar desde emmc primero. Deberíamos hacer los siguientes cambios.

    **Antes del reinicio Modifica "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" Después del reinicio ve "/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

Finalmente, encontramos que realmente funciona bien.

- Arrancar desde emmc

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- Arrancar desde tarjeta sd

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## Más

### Cambiar velocidad de E/S de tarjeta SD

Proporcionamos función de tarjeta SD en <a href="https://wiki.seeedstudio.com/es/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>placa portadora reComputer J101</span></a>, que soporta Frecuencia CLK 48MHz. El CLK aquí está diseñado para lograr certificaciones (como CE/FCC). Si quieres aumentar CLK por ti mismo, puedes usar la instrucción a continuación.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>


- **Paso 1**. Clona este repositorio y modifica el código a continuación.

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **Paso 2**. Modifica y Compila el valor max-clk-limit

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **Paso 3**. Reiniciar

    ```bash
    reboot
    ```

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

