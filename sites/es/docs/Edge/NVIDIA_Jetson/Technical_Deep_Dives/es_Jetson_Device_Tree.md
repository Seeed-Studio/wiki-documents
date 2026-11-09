---
description: Explicar el papel del Device Tree en la plataforma Jetson - cómo sabe Linux qué hardware está conectado en una carrier board, por qué el hardware puede dejar de funcionar después de cambiar la carrier board, las diferencias entre DTS/DTSI/DTB/DTBO y por qué las carrier boards de Seeed Studio necesitan su propio BSP.
title: Jetson Device Tree
tags:
  - jetson
  - device tree
  - dts
  - dtsi
  - dtb
  - dtbo
  - carrier board
  - bsp
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_device_tree
last_update:
  date: 11/02/2026
  author: youjiang
---

En los dos artículos anteriores, recorrimos el proceso de arranque completo de un Jetson desde el encendido hasta Ubuntu utilizando el registro de arranque por UART:

`Power On` --> `MB1/2` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` --> `RootFS` --> `Systemd`

Una vez que entiendes la cadena de arranque, la siguiente pregunta natural es: **¿Cómo sabe realmente Linux qué hardware está conectado en esta placa?**

Por ejemplo, el mismo módulo Jetson Orin Nano funciona bien en la Carrier Board del Kit de Desarrollo oficial de NVIDIA, pero cuando lo mueves a otra Carrier Board, el USB puede dejar de funcionar.

El módulo Jetson no ha cambiado, y el Linux Kernel tampoco ha cambiado. Entonces, ¿por qué simplemente cambiar la carrier board puede cambiar por completo el comportamiento de todo el sistema? Esto nos lleva a un concepto muy importante en el desarrollo de hardware Jetson: **Device Tree**. En este artículo, abordaremos principalmente las siguientes preguntas:

- **¿Qué es exactamente el Device Tree del que todo el mundo habla?**
- **¿Por qué muchos componentes de hardware no se pueden usar directamente después de cambiar la Carrier Board?**
- **¿Por qué las carrier boards Jetson de Seeed Studio necesitan su propio BSP, en lugar de usar directamente el BSP oficial de NVIDIA?**

---

## ¿Qué es exactamente el Device Tree?

Como se mencionó antes, el Linux Kernel es responsable de gestionar el hardware de bajo nivel en el sistema. Entonces, ¿cómo sabe el Kernel qué dispositivos hay en la carrier board? La respuesta es **Device Tree**. El papel del Device Tree es **decirle al Linux Kernel qué hardware hay en la placa y cómo está conectado ese hardware.** Por ejemplo, el esquema define que un sensor está conectado a cierto bus I2C, cuál es la dirección del bus y a qué GPIO está conectado el Reset; este tipo de información suele aparecer en el Device Tree en la forma correspondiente. Así que prefiero pensar en el Device Tree como un manual de conexiones de hardware escrito para el Linux Kernel.

**Los esquemas se dibujan para las personas; el Device Tree se escribe para el Linux Kernel.**

Más adelante, lo combinaremos con el BSP L4T real de Seeed Studio para ver cómo se ven en código estas "relaciones de conexión de hardware". Seeed Studio ha hecho open source el BSP de todos los productos Jetson en [Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra). Hay muchos archivos que terminan en `.dts` en el repositorio: estos son los archivos de Device Tree de los que vamos a hablar.

---

## Un ejemplo: ¿Cómo afecta el Device Tree a PCIe / NVMe?

Dijimos que el Device Tree es "un manual de conexiones de hardware escrito para el Linux Kernel". Entonces, ¿cómo se ve realmente en código real? Veamos directamente el Device Tree del Seeed Studio J401. En el repositorio open source de Seeed Studio, hay un archivo de Device Tree llamado `tegra234-j401-p3768-0000+p3767-0000.dts`. Al abrirlo, puedes ver un nodo como este:

```text
vdd_3v3_pcie: regulator-vdd-3v3-pcie {
    compatible = "regulator-fixed";
    regulator-name = "VDD_3V3_PCIE";

    regulator-min-microvolt = <3300000>;
    regulator-max-microvolt = <3300000>;

    gpio = <&gpio_aon
            TEGRA234_AON_GPIO(AA, 5)
            GPIO_ACTIVE_HIGH>;

    enable-active-high;
};
```

Esta configuración describe un **rail de alimentación de 3,3 V** usado para PCIe. Parte de la información más importante aquí es:

```text
regulator-name
→ This power rail is named VDD_3V3_PCIE

3300000
→ The voltage is 3.3V

TEGRA234_AON_GPIO(AA, 5)
→ Controlled by AON GPIO AA.5

enable-active-high
→ This power rail is enabled when the GPIO is driven high
```

En otras palabras, cierta señal de **PCIe Power Enable** en el esquema de la Carrier Board se describe finalmente a Linux a través del Device Tree. Este es un ejemplo muy intuitivo de "relaciones de conexión de hardware escritas en el Device Tree". Cuando todas estas configuraciones son correctas, el Kernel tiene la oportunidad de establecer el enlace PCIe y detectar el NVMe conectado al bus PCIe. Combinémoslo con el registro de arranque del artículo anterior. Cuando la configuración es correcta, el registro de arranque por UART muestra algo como:

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.649851] nvme nvme0: pci function 0004:01:00.0
[    6.665906] nvme0n1: p1 p2 p3 ...
```

Así que aquí podemos construir una relación muy importante:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/devicetree_flow2.png"/></div>

En otras palabras, **el registro de arranque muestra el resultado, mientras que el Device Tree es una de las fuentes de configuración importantes que producen ese resultado.**

Si el Device Tree no coincide con la Carrier Board real, se producirán problemas. Supongamos que la nueva Carrier Board movió el Enable de 3,3 V de PCIe a un GPIO diferente, pero el Device Tree todavía dice:

```text
AON GPIO AA.5
```

Entonces Linux puede seguir controlando el GPIO equivocado según el diseño antiguo.

Como resultado, es posible que el SSD NVMe no se detecte correctamente: el registro de arranque puede llegar al Linux Kernel, pero el mensaje de enlace PCIe establecido nunca aparece. A estas alturas, ya deberías tener una comprensión básica del Device Tree.

---

## Formatos de archivo de Device Tree: ¿Cuál es la diferencia entre DTS, DTSI, DTB y DTBO?

En el BSP de Jetson, a menudo ves estos cuatro tipos de archivos: `.dts`, `.dtsi`, `.dtb` y `.dtbo`. Se ven muy similares, pero sus funciones son diferentes.

| Archivo | Nombre completo | Función principal | Legible directamente | Ejemplo en el repositorio open source de Seeed |
|---|---|---|---|---|
| .dts | Device Tree Source | Describe una placa específica o un overlay | ✅ | tegra234-j401-p3768-0000+p3767-0000.dts |
| .dtsi | Device Tree Source Include | Almacena configuraciones comunes reutilizables por múltiples archivos DTS | ✅ | tegra234-p3768-0000+p3767-xxxx-nv-common.dtsi |
| .dtb | Device Tree Blob | Device Tree binario compilado a partir de DTS/DTSI | ❌ | tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb |
| .dtbo | Device Tree Blob Overlay | Añade o modifica parte de la configuración de hardware sobre el Device Tree base | ❌ | tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo |

### Primero, veamos DTS y DTSI

Puedes pensar en `.dts` como el "archivo de entrada" de una placa específica, mientras que `.dtsi` se parece más a un módulo de configuración común.

Por ejemplo, el DTS del Seeed J401 incluye otros archivos de Device Tree:

```text
#include "tegra234-p3767.dtsi"
#include "tegra234-p3768-0000.dtsi"
```

Así que en un proyecto real, el Device Tree no es un enorme archivo `.dts` escrito de principio a fin; está compuesto por muchos archivos `.dtsi` combinados capa por capa.

Puedes compararlo con el lenguaje C:

```text
.dtsi is somewhat like .h
.dts is somewhat like the .c that finally combines these configurations
```

Por supuesto, esta analogía no es exactamente equivalente; solo sirve para ayudarte a entender más rápidamente la relación entre ellos.

### DTB: el Device Tree binario que Linux usa realmente

`.dts` y `.dtsi` están pensados para que los desarrolladores los lean y modifiquen.

Después de que se compilan con dtc (Device Tree Compiler), se generan archivos `.dtb`.

Lo que Linux lee realmente al arrancar es el `.dtb` compilado, no los archivos `.dts` en el directorio de código fuente.

---

### DTBO: modificar solo parte de la configuración de hardware

Algunos componentes de hardware no están instalados en todos los dispositivos, por ejemplo las cámaras. Si tuvieras que copiar y mantener todo el Device Tree del J401 solo para añadir un sensor IMX219, sería muy engorroso. Este tipo de problema se puede manejar con un DTBO (Device Tree Overlay).

Por ejemplo, hay un Camera Overlay en el BSP de Seeed:

```text
tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

No es un Device Tree completo del J401; solo describe la **configuración relacionada con la cámara IMX219**, como:

- Dirección I2C
- GPIO de Reset / Power
- Interfaz CSI
- Relaciones de conexión NVCSI / VI
- Nodo del sensor de cámara
- etc.

También puedes ver una configuración similar en el `recomputer-orin-j401.conf` de Seeed:

```text
OVERLAY_DTB_FILE+=tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

En otras palabras, la configuración de hardware base del J401 sigue usando el DTB original; solo necesitas añadir adicionalmente la configuración relacionada con la cámara.

---

## Más allá del Device Tree: Jetson también tiene una configuración de placa a nivel anterior

A estas alturas, creo que ya tienes una comprensión general del Device Tree y que ya tienes la respuesta a la pregunta del principio de este artículo. Pero, ¿has notado una nueva pregunta?

El Device Tree es el esquema para el Linux Kernel. Pero basándonos en el registro de arranque del artículo anterior — antes incluso de que el Linux Kernel se inicie, ¿quién configura el GPIO, el Pinmux y el Pad Voltage? La respuesta es: la propia etapa del Bootloader también tiene su propio conjunto de configuración a nivel de placa.

Así que en Jetson, no puedes simplemente equiparar "adaptación de carrier board" con "modificar un DTB del Kernel". Una relación más completa debería ser:

```text
                Carrier Board
                     ↓
              Real hardware connections
                     ↓
        ┌────────────┴────────────┐
        ↓                         ↓
Bootloader Board Config     Kernel Device Tree
        ↓                         ↓
   MB1 / MB2 / UEFI          Linux Kernel
        ↓                         ↓
Pinmux / Pad Voltage        USB / PCIe / Camera
 GPIO / Early HW             Ethernet / Sensor
```

Si quieres entender la relación entre ellos, te sugiero que aprendas directamente del repositorio `Linux_for_Tegra` de Seeed Studio.

Tomando el J401 como ejemplo, `recomputer-orin-j401.conf` se usa al flashear. Puedes pensar en este archivo como una importante "entrada de configuración a nivel de placa" para el J401.

Dependiendo del SKU del módulo Jetson, selecciona el DTB correspondiente, por ejemplo:

```text
tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

Aquí puedes ver una información muy importante:

> **El Device Tree no solo está relacionado con la Carrier Board; también está relacionado con la combinación de Carrier Board + Módulo Jetson.**

Pero el archivo `.conf` contiene más que solo:

```text
DTB_FILE --> The Kernel Device Tree used by Linux
```

También verás:

```text
PINMUX_CONFIG --> Pinmux configuration
PMC_CONFIG --> Pad Voltage / PMC related configuration
OVERLAY_DTB_FILE --> Additional overlays such as Camera and Display
BPFDTB_FILE --> Device Tree used by BPMP
```

No entraremos en detalles sobre el resto aquí. Si estás interesado, puedes estudiarlo por tu cuenta, y también eres bienvenido a unirte a la comunidad Seeed Jetson para discutirlo juntos.

---

## ¿Cómo confirmar qué Device Tree está usando realmente Linux en este momento?

Si el dispositivo ya puede arrancar hasta el escritorio del sistema, también puedes comprobar directamente el Device Tree que el sistema actual está ejecutando realmente.

Exporta el Device Tree que se está ejecutando actualmente:

```text
sudo dtc -I fs -O dts  /proc/device-tree > running.dts
```

Luego puedes inspeccionar directamente los nodos correspondientes. Por ejemplo:

```text
grep -n "pcie" running.dts
grep -n "usb" running.dts
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/running_devicetree.png"/></div>

Al depurar el Device Tree, lo que realmente debes confirmar no es solo qué DTS modificaste, sino más importante si el sistema está cargando realmente la versión modificada.

---

## Conclusión

El Device Tree en sí no es complicado. El problema central que resuelve en realidad es solo uno:

> **Permitir que el software sepa qué hardware hay en esta Carrier Board y cómo está conectado ese hardware.**

Pero en Jetson, la adaptación de la carrier board no es solo el Kernel Device Tree.

A partir del L4T BSP de Seeed Studio, puedes ver que lo que realmente necesita una carrier board es un conjunto completo de configuraciones a nivel de placa. Esta es también la razón por la que los productos Jetson de Seeed Studio necesitan su propio BSP, en lugar de simplemente usar directamente la configuración del NVIDIA Developer Kit.

## Soporte técnico y debate sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
