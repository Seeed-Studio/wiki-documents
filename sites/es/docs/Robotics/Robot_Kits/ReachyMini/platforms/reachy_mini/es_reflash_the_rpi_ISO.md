---
description: Guía experta para volver a grabar la imagen ReachyMiniOS en el CM4 de Reachy Mini usando rpiboot y bmaptool en Linux, macOS y Windows.
title: Volver a grabar la imagen de Raspberry Pi OS
slug: /reachymini_platforms_reachy_mini_reflash_the_rpi_iso
keywords:
  - reflash
  - factory reset
  - os image
  - rpiboot
  - bmaptool
  - cm4
  - expert
  - recovery
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/
---

# Avanzado: volver a grabar la imagen de Raspberry Pi OS

:::danger Solo para expertos
Esta guía explica cómo volver a grabar la imagen ReachyMiniOS en el CM4 de Reachy Mini. Hacer esto realizará un _factory reset_ en tu Reachy Mini.

La mayoría de los usuarios no necesitan esto. Reachy Mini viene preinstalado. Sigue estos pasos solo si tienes una instalación dañada que no has podido depurar.
:::

---

## Descarga la imagen del sistema operativo (y el bmap)

Primero, descarga la última imagen del sistema operativo y el archivo `.bmap` desde:
https://github.com/pollen-robotics/reachy-mini-os/releases

:::tip
El archivo `.bmap` es usado por `bmaptool` (Linux/macOS). Si vas a grabar con Raspberry Pi Imager (Windows), solo necesitas el archivo de la imagen del sistema operativo.
:::

---

## Instalar rpiboot

:::info Linux / macOS
Sigue las instrucciones de compilación aquí:
https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building-1
:::

:::info Windows
Descarga e instala la interfaz gráfica de rpiboot desde el repositorio oficial de Raspberry Pi:
https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe
:::

---

## Instalar una herramienta de grabación

:::info Linux
Instala bmaptool:
```bash
sudo apt install bmap-tools
```
:::

:::tip Usuarios de Linux
Los usuarios de Linux pueden usar `bmaptool` o Raspberry Pi Imager (la opción de Windows). Raspberry Pi Imager suele ser _mucho más lento_ que `bmaptool` para este flujo de trabajo, así que da preferencia a `bmaptool` cuando esté disponible.
:::

:::info macOS
Instala bmaptool desde el repositorio oficial:
```bash
python3 -m pip install --user "git+https://github.com/yoctoproject/bmaptool.git"
export PATH="$HOME/.local/bin:$PATH"
bmaptool --version
```
:::

:::tip Usuarios de macOS
Los usuarios de macOS pueden usar `bmaptool` o Raspberry Pi Imager (la opción de Windows). Raspberry Pi Imager suele ser _mucho más lento_ que `bmaptool` para este flujo de trabajo, así que da preferencia a `bmaptool` cuando esté disponible.
:::

:::info Windows
Descarga e instala Raspberry Pi Imager:
https://www.raspberrypi.com/software/
:::

---

## Configuración

**Paso 1:** Apaga completamente el robot antes de continuar.

:::tip Paso 2: Inicia rpiboot
Inicia **rpiboot** (esperará a que el robot se conecte):
:::

* **Linux / macOS**: ejecuta el comando `rpiboot` en tu terminal:
  ```bash
  sudo ./rpiboot -d mass-storage-gadget64
  ```
* **Windows**: ejecuta el ejecutable **RPiBoot** que instalaste en el paso anterior.

:::tip Paso 3
Coloca el interruptor en **DOWNLOAD (SW1)** en la PCB de la cabeza:

![pcb_usb_and_switch](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/pcb_usb_and_switch.png)
:::

**Paso 4:** Conecta el cable USB (el que se muestra en la imagen anterior, llamado **USB2**).

**Paso 5:** Enciende el robot.

La eMMC interna debería aparecer ahora como un dispositivo de almacenamiento masivo.

---

## Desmontar y grabar la ISO

:::info Linux
:::warning Asegúrate de que el dispositivo esté desmontado antes de grabar.

**Comprobar y desmontar el dispositivo**

Tu dispositivo debería ser visible como `/dev/sdx` (algo como `/dev/sda`).

**Comprueba las particiones montadas** ejecutando:
```bash
lsblk
```

Si ves `bootfs` y `rootfs` como abajo, significa que está **montado**:
```
sda           8:0    1  14.6G  0 disk
├─sda1        8:1    1   512M  0 part /media/<username>/bootfs
└─sda2        8:2    1  14.1G  0 part /media/<username>/rootfs
```

**Desmonta** las particiones:
```bash
sudo umount /media/<username>/bootfs
sudo umount /media/<username>/rootfs
```

**Graba la ISO**
```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/sda
```

Por ejemplo, con la versión `v0.0.10`:
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/sda
```
:::

:::info macOS
:::warning Asegúrate de que el dispositivo esté desmontado antes de grabar.

**Comprobar y desmontar el dispositivo**

Tu dispositivo debería ser visible como `/dev/diskX` (algo como `/dev/disk4`).

**Comprueba las particiones montadas** ejecutando:
```bash
mount
```

Busca entradas como `/dev/disk4s1` o `/dev/disk4s2` que mencionen `bootfs` o `rootfs`.

**Desmonta** el disco completo (no las particiones individuales):
```bash
diskutil unmountDisk /dev/disk4
```

Sustituye `/dev/disk4` por el identificador real de tu disco.

:::note
`unmountDisk` desmonta todos los volúmenes del disco (`bootfs`, `rootfs`...) de una sola vez.
:::

:::warning Grabar la ISO
Usa `/dev/rdiskX` (¡fíjate en el prefijo **`r`**!) en lugar de `/dev/diskX`. El prefijo `r` proporciona acceso directo al disco, lo cual es obligatorio para que el comando de grabación tenga éxito.
:::

```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/rdiskX
```

Por ejemplo, con la versión `v0.0.10` (sustituye `/dev/rdisk4` por el identificador real de tu disco):
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/rdisk4
```
:::

:::info Windows (Raspberry Pi Imager)
Usa el ejecutable **Raspberry Pi Imager** para grabar la imagen del sistema operativo:

1. Abre **Raspberry Pi Imager**
2. Selecciona `Raspberry Pi 4` como dispositivo
3. Selecciona `Use custom` para el sistema operativo y proporciona la imagen descargada (`.zip`, o el `.img` extraído)
4. Selecciona el único disco disponible para el sistema de almacenamiento (normalmente `RPi-MSD- 0001`)
5. Haz clic en **Write**
:::

---

## Restaurar el modo de arranque normal

**Paso 1:** Apaga el robot

**Paso 2:** Vuelve a mover el interruptor a DEBUG

**Paso 3:** Desconecta el cable USB

**Paso 4:** Vuelve a encender el robot

---

## Comprobar que todo funciona

:::tip Conecta tu ordenador al punto de acceso WiFi del robot:
* Nombre de la red: `reachy-mini-ap`
* Contraseña: `reachy-mini`
:::

Haz SSH al robot:
```bash
ssh pollen@reachy-mini.local
# password: root
```

Luego ejecuta:
```bash
reachyminios_check
```

:::success
Si todo ha ido bien, deberías ver:
```bash
Image validation PASSED
```
:::
