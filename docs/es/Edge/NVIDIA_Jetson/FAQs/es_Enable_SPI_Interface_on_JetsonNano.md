---
description: Habilitar interfaz SPI en Jetson-Nano
title: Habilitar interfaz SPI en Jetson-Nano
keywords:
- SPI
- Jetson-nano
- BSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/enable_spi_interface_on_jetsonnano
last_update:
  date: 07/02/2025
  author: Dayu
---

## Introducción

El Jetson Nano cuenta con dos interfaces SPI multiplexadas con GPIOs, pero SPI no está habilitado por defecto. A diferencia de otras series Jetson como Orin, que soportan habilitar SPI a través de la herramienta de configuración `/opt/nvidia/jetson-io/jetson-io.py`, este método **no es aplicable en el Jetson Nano**.

Esta sección utiliza el controlador **SPI1** como ejemplo y proporciona un método para habilitar la funcionalidad SPI en el Jetson Nano. Tenga en cuenta que este método debe aplicarse antes de flashear la imagen al dispositivo Jetson.

:::note
El método de este wiki debe aplicarse antes de flashear la imagen al dispositivo Jetson.
:::

## Modificar spi y flashear

Primero, necesita cortocircuitar el pin `REC` y el pin `GND` en el Jetson Nano para entrar en modo de recuperación. Luego, en su PC host, prepare la imagen que pretende flashear. Sin embargo, no la flashee al Jetson Nano hasta que haya completado las modificaciones SPI.
Puede consultar el [**tutorial de flasheo JetPack para el J101**](https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack/#:~:text=On%20the%20Linux%20host%20PC%2C%20we%20need%20to%20open%20a%20browser%20and%20go%20the%20Jetson%20Linux%20Archive.%20First%20we%20should%20check%20if%20the%20version%20of%20Jetson%20Linux%20is%20supported%20our%20reComputer%20Jetson%20module), y asegúrese de usar únicamente el método de línea de comandos.

  Descargue la versión de su elección desde [NIVIDIA DEVELOPER](https://developer.nvidia.com/embedded/jetson-linux-archive#:~:text=Previous%20Jetson%20Linux%20Versions), incluyendo el **BSP** y el **Simple Root Filesystem**.
En esta guía, utilizamos **L4T 32.7.2** como ejemplo.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/source_nvidia_jetson-nao.png" /></div>

Coloque el **BSP** y el **Simple Root Filesystem** en el mismo directorio, luego siga las instrucciones a continuación para extraerlos y ejecutar el `apply_binaries.sh`:

```bash
tar xf Jetson-210_Linux_R32.7.2_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

Cree un nuevo archivo `.sh` en el directorio **Linux_for_Tegra**, y ejecute el script. El contenido del script es el siguiente:
<details>

<summary> modify_spi.sh </summary>

```shell
#!/bin/bash
set -e


cd "$(dirname "$0")"
cd kernel/dtb

DTS=tegra210-p3448-0002-p3449-0000-b00.dts
DTB=tegra210-p3448-0002-p3449-0000-b00.dtb


echo "📥 Decompiling $DTB to $DTS..."
sudo dtc -I dtb -O dts -o "$DTS" "$DTB"

fix_spi_node() {
    local node=$1
    if grep -A5 "$node {" "$DTS" | grep -q 'status'; then
        sudo sed -i "/$node {/,/spi-max-frequency/ s/status = \".*\";/status = \"okay\";/" "$DTS"
    else
        sudo sed -i "/$node {/,/spi-max-frequency/ s/compatible = \"tegra-spidev\";/&\n\t\tstatus = \"okay\";/" "$DTS"
    fi
}

echo "🔧 Enabling spi@0 and spi@1..."
fix_spi_node "spi@0"
fix_spi_node "spi@1"


patch_pin() {
    local pin=$1
    sudo sed -i "/${pin} {/,/nvidia,enable-input/ {
        s/nvidia,function = \"rsvd1\"/nvidia,function = \"spi1\"/
        s/nvidia,tristate = <0x01>/nvidia,tristate = <0x00>/
        s/nvidia,enable-input = <0x00>/nvidia,enable-input = <0x01>/
    }" "$DTS"
}

echo "🔧 Patching pinmux blocks..."
for pin in spi1_mosi_pc0 spi1_miso_pc1 spi1_sck_pc2 spi1_cs0_pc3 spi1_cs1_pc4; do
    patch_pin "$pin"
done

echo "🔧 Fixing tristate and input-enable for SPI1 pins..."


fix_pinmux_field() {
  local pin=$1
  awk -v pin="$pin" '
  BEGIN { in_block = 0 }
  {
    if ($0 ~ pin " {") {
      in_block = 1
    }
    if (in_block && /nvidia,tristate =/) {
      sub(/<0x1>/, "<0x0>")
    }
    if (in_block && /nvidia,enable-input =/) {
      sub(/<0x0>/, "<0x1>")
    }
    print
    if (in_block && /}/) {
      in_block = 0
    }
  }' "$DTS" | sudo tee "$DTS.fixed" > /dev/null && sudo mv "$DTS.fixed" "$DTS"
}

fix_pinmux_field "spi1_mosi_pc0"
fix_pinmux_field "spi1_miso_pc1"
fix_pinmux_field "spi1_sck_pc2"
fix_pinmux_field "spi1_cs0_pc3"
fix_pinmux_field "spi1_cs1_pc4"


echo "📦 Recompiling DTS to $DTB..."
sudo dtc -I dts -O dtb -o "$DTB" "$DTS"

echo "✅ SPI DTS patch applied and DTB regenerated successfully."
```

</details>

```bash
sudo bash modify_spi.sh
```

Después de ejecutar `modify_spi.sh`. Este script actualizará la configuración **SPI1** en el árbol de dispositivos, lo recompilará y sobrescribirá el anterior. Si desea habilitar **SPI2**, simplemente reemplace la palabra clave `spi1` con `spi2` en el script `modify_spi.sh`.

Después de modificar el árbol de dispositivos, flashee la imagen al Jetson-Nano:

```bash
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flashing_over_jetson-nano.png" /></div>

Después del reinicio, los pines `SPI0_MOSI`, `SPI0_MISO`, `SPI0_CS0`, y `SPI0_CS1` en el conector de **40 pines** estarán disponibles para su uso.

## Probando el SPI1 en Jetson-nao

Cortocircuite el pin 19 y el pin 21, que corresponden a `SPI0_MOSI` y `SPI0_MISO` respectivamente, para realizar una prueba de loopback usando el controlador **SPI1**.
La hoja de datos del Jetson-Nano se puede descargar y ver [aquí](https://developer.download.nvidia.com/assets/embedded/secure/jetson/Nano/docs/DA-09753-001_v1.0.pdf?__token__=exp=1751957680~hmac=6683559201b449f5191cbe0069e9299b1c3b373e82307d09a6a92d596bee4745&t=eyJscyI6ImdzZW8iLCJsc2QiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyJ9
), particularmente la **página 6**.
<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/40-pin_jetson-nano.jpg" /></div>

El diagrama de conexión física se muestra a continuación:
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/real-connecr-spi.png
" /></div>

Cargue el módulo del controlador SPI, luego descargue y compile el programa de prueba:

```bash
sudo modprobe spidev
git clone https://github.com/rm-hull/spidev-test
cd spidev-test/
gcc spidev_test.c -o spidev_test
```

Ejecute el programa de prueba y especifique `spidev0.0` (correspondiente a **SPI1**):

```bash
./spidev_test -v -D /dev/spidev0.0 -p "Test"
```

El resultado de la prueba se muestra a continuación, indicando que **SPI1** ha completado exitosamente la transmisión de loopback. También puede ejecutar `ls /dev/spidev*` para verificar los controladores SPI disponibles.
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/spi_res_jetson-nano.png
" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
