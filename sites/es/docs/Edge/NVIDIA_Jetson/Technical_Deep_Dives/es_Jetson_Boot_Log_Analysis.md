---
description: Recorre un registro de arranque UART real de Jetson Orin etapa por etapa a lo largo de la cadena Power On → BootROM → MB1 → MB2 → UEFI → L4TLauncher → Kernel → initrd → RootFS → systemd, y aprende a solucionar fallos de arranque usando la "última etapa de arranque alcanzada con éxito".
title: Jetson desde el encendido hasta Ubuntu
keywords:
  - jetson
  - boot
  - bootlog
  - uart
  - uefi
  - mb1
  - mb2
  - l4t
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_boot_log_analysis
last_update:
  date: 11/02/2026
  author: youjiang
---

En el artículo anterior, presentamos **JetPack, Jetson Linux / L4T, Ubuntu, Kernel y UEFI** y qué es cada uno de ellos.

Pero, ¿en qué orden se ejecutan realmente estos componentes? Después de pulsar el botón de encendido en un Jetson, ¿por qué el dispositivo no entra directamente en Ubuntu y, en su lugar, tiene que pasar por BootROM, MB1, MB2, UEFI, Kernel e initrd?

Y aún más importante: **cuando un Jetson no arranca, ¿cómo puedes usar el registro UART para determinar exactamente en qué etapa se ha quedado atascado?**

En este artículo, en lugar de mirar solo diagramas de arquitectura, analizaremos directamente un **registro de arranque UART real de Jetson Orin**.

Si no estás seguro de cómo capturar el registro de arranque, consulta estos dos artículos de la wiki:

> https://wiki.seeedstudio.com/cn/jetson_debug_guide/
> https://wiki.seeedstudio.com/cn/get_the_system_log_of_recomputer_j30_and_j40/

## La visión global primero: ¿Por qué etapas pasa un Jetson desde el encendido hasta Ubuntu?

Antes de analizar el registro de arranque línea por línea, primero construyamos un mapa general del arranque.

En la sección [**Jetson Linux Developer Guide**](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html) – Boot Architecture, NVIDIA define el flujo de arranque de la serie Jetson Orin así: el bootloader inicializa progresivamente el SoC, el almacenamiento, la memoria, la CPU, el entorno seguro y varios firmware, arrancando finalmente el sistema en el SO. Según la documentación oficial, las principales etapas de Boot Firmware de la serie Orin son **BootROM, PSCROM, MB1, MB2 y UEFI**.

Si seguimos extendiendo el flujo oficial de Boot Firmware hacia las etapas posteriores, hasta el momento en que realmente entramos en Ubuntu, obtenemos esta cadena de arranque más completa y fácil de entender:

> `Power On` --> `BootROM / PSCROM` --> `MB1` --> `MB2` --> `BL31 / OP-TEE` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` + `DTB + initrd` --> `Find RootFS` --> `NVMe / eMMC / SD` --> `Ubuntu RootFS` --> `systemd` --> `Login / Desktop / Application`

A continuación, tomaremos un **registro de arranque UART real de Jetson Orin** y recorreremos esta cadena de arranque paso a paso.

Lo que en última instancia queremos construir no es solo el concepto de "cómo arranca un Jetson", sino una habilidad de diagnóstico más práctica:

> **Dado un registro de arranque de Jetson, determinar rápidamente a qué capa de la cadena de arranque ha llegado el dispositivo y, si el arranque falla, qué parte debe investigarse primero.**

La documentación oficial de Boot Flow de NVIDIA puede servir como referencia técnica para esta parte: [NVIDIA Jetson Orin Series Boot Flow](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html?utm_source=chatgpt.com)

---

## Las primeras líneas del registro tras el encendido: ¿por qué empieza con MB1?

La primera línea de este registro UART es:

```text
[0000.066] I> MB1 (version: 1.4.0.4-t234-...)
[0000.071] I> t234-A01-1-Silicon
[0000.075] I> Boot-mode : Coldboot
[0000.082] I> last_boot_error: 0x0
```

Aquí viene la parte interesante. Acabamos de decir:

```text
Power On
 ↓
BootROM
 ↓
MB1
```

¿Por qué no vemos BootROM en el registro, apareciendo MB1 directamente como la primera línea?

Porque **BootROM es código de arranque fusionado en el propio SoC Tegra**. Después de que el dispositivo se enciende, BootROM ya se ha ejecutado y ha cargado correctamente MB1, por lo que el UART empieza a mostrar aquí las líneas de registro de MB1.

Así que:

> **Cuando ya ves `MB1`, significa que la etapa más temprana de BootROM del SoC al menos ha progresado correctamente hasta MB1.**

Esta es la primera mentalidad para la resolución de problemas con registros de arranque: **no busques solo errores; busca "la última etapa de arranque alcanzada con éxito".**

---

## MB1: completando la inicialización básica de hardware

Después de entrar en MB1, puedes ver que el sistema primero inicializa el almacenamiento de arranque:

```text
[0000.296] I> Task: Boot device init
[0000.299] I> Boot_device: QSPI_FLASH instance: 0
[0000.308] I> QSPI Flash: Macronix 64MB
[0000.312] I> QSPI-0l initialized successfully
```

Esto muestra que **MB1 puede acceder con normalidad a la Flash QSPI**. Incluso si el Ubuntu RootFS termina estando en NVMe, el firmware de arranque temprano del Jetson sigue necesitando pasar primero por componentes de arranque como QSPI.

MB1 continúa después con la inicialización básica de Pinmux, alimentación y memoria:

```text
[0000.784] I> Task: Pinmux init
[0000.874] I> Task: Pad voltage init
[0000.884] I> Task: Common rail init
[0000.944] I> Task: SDRAM init
[0000.980] I> SDRAM initialized!
[0000.983] I> SDRAM Size in Total 0x100000000
```

La línea que más merece atención es:

```text
[0000.980] I> SDRAM initialized!
```

Esto significa que **la DRAM se ha inicializado correctamente y la fase clave de inicialización de hardware de MB1 está básicamente completa**.

Si el registro de arranque se queda en MB1 durante mucho tiempo y `SDRAM initialized!` nunca aparece, la investigación debe centrarse en **MB1-BCT, DDR, PMIC, alimentación y configuración a nivel de placa**, no en Ubuntu ni en el Kernel de Linux.

Porque en este punto, **Linux aún no ha empezado a arrancar.**

---

## Después de MB1, entrando en MB2

Tras la inicialización básica de hardware, MB1 carga la siguiente etapa, **MB2**:

```text
[0001.874] I> Task: Load MB2/Applet/FSKP
[0001.878] I> Loading MB2
[0001.888] I> Binary name: MB2
[0001.912] I> MB2 header integrity check is success
[0001.945] I> MB2 binary integrity check is success
[0001.950] I> Binary MB2 loaded successfully at 0x80000000
```

El registro entra entonces en MB2:

```text
I> MB2 (version: 0.0.0.0-t234-...)
I> Boot-mode : Coldboot
```

Esto significa que el flujo de arranque ha pasado de MB1 a MB2.

MB2 continúa con la inicialización de la plataforma y carga y autentica algunos firmware necesarios dentro del SoC, como SPE, RCE, DCE, XUSB, PVA, etc., preparando la posterior etapa de UEFI y el arranque de Linux.

La idea clave aquí es: **antes de que el Kernel de Linux empiece realmente, Jetson ya ha completado una gran cantidad de inicialización de hardware y firmware de bajo nivel.**

---

## Después de MB2, entrando en UEFI

Cuando MB2 termina su trabajo, aparece una línea de separación muy clara en el registro:

```text
I> MB2 finished
```

Luego entramos en ARM Trusted Firmware y OP-TEE:

```text
NOTICE: BL31: v2.8
I/TC: OP-TEE version: 4.2
I/TC: Primary CPU switching to normal world boot
```

A continuación, se puede ver el arranque de UEFI:

```text
Jetson UEFI firmware
(version 36.4.3-gcid-38968081 ...)
```

Aquí, **BL31** es responsable de la etapa de ARM Trusted Firmware, y **OP-TEE** proporciona un entorno de ejecución confiable. Para los desarrolladores habituales de Jetson, no es necesario estudiar sus detalles internos, pero sí debes saber: **ver el registro de UEFI significa que las etapas anteriores de MB1, MB2 y firmware seguro están básicamente completas, y que el sistema está a punto de entrar en la etapa de arranque del SO.**

Este también es un punto de control muy importante para la resolución de problemas posterior.

---

## Entrando en UEFI: los problemas de arranque pasan ahora a ser de "arranque del sistema"

Si seguimos avanzando, el registro muestra:

```text
Jetson System firmware version 36.4.3-gcid-38968081

ESC   to enter Setup.
F11   to enter Boot Manager Menu.
Enter to continue boot.
```

Esto significa que el sistema ha entrado correctamente en la **etapa UEFI**. En otras palabras, el flujo de arranque anterior —BootROM, MB1, MB2, etc.— se ha completado.

A partir de aquí, el foco de la resolución de problemas cambia.

Si el dispositivo no puede continuar hacia Linux después de UEFI, primero debes centrarte en:

```text
Boot Order
Boot Device
EFI Boot Entry
L4TLauncher
Kernel / DTB / initrd
```

Puedes entender esta etapa de forma sencilla como:

```text
Early hardware init
      ↓
     UEFI
      ↓
Start selecting and loading Linux
```

> **Ver UEFI significa que el sistema ha completado la mayor parte del flujo de arranque de bajo nivel. A continuación, céntrate en "desde dónde se arranca Linux y si los archivos de arranque de Linux son correctos".**

---

## L4TLauncher: entrega de control desde UEFI al Kernel de Linux

Después de entrar en UEFI, el sistema empieza a cargar realmente Linux. El registro muestra:

```text
L4TLauncher: Attempting Direct Boot
EFI stub: Booting Linux Kernel...
EFI stub: Using DTB from configuration table
EFI stub: Loaded initrd from LINUX_EFI_INITRD_MEDIA_GUID device path
EFI stub: Exiting boot services...
```

**L4TLauncher** es el cargador de SO que se usa por defecto en el UEFI de Jetson. Prepara todo lo necesario para arrancar Linux, incluyendo:

```text
Kernel   The Linux kernel
DTB      Hardware description
initrd   Temporary filesystem used in early boot
```

Las dos líneas más críticas son:

```text
EFI stub: Booting Linux Kernel...
EFI stub: Exiting boot services...
```

Significan que UEFI ha terminado de preparar el entorno de arranque de Linux y está empezando a entregar el control del sistema al Kernel.

Así, el flujo de arranque entra en una nueva etapa.

> **Si ya ves `EFI stub: Booting Linux Kernel...`, la etapa del bootloader ha tenido básicamente éxito; si el arranque falla después de eso, el foco de la investigación debe desplazarse gradualmente al Kernel, DTB, initrd y RootFS.**

---

## El Kernel de Linux comienza oficialmente

Inmediatamente después, el registro entra en el Kernel de Linux:

```text
[    0.000000] Booting Linux on physical CPU 0x0000000000
[    0.000000] Linux version 5.15.148-tegra
[    0.000000] Machine model: NVIDIA Jetson Orin NX Engineering Reference Developer Kit Super
```

Aquí puedes ver un cambio evidente: **las marcas de tiempo se reinician desde `0.000000`**.

Esto se debe a que MB1, MB2 y UEFI pertenecen a la etapa de Bootloader / Firmware, mientras que ahora hemos entrado en **la etapa de ejecución propia del Kernel de Linux**.

Así que, siempre que analices un registro de arranque UART en el futuro, en cuanto veas:

```text
Linux version ...
```

puedes concluir básicamente:

> **La etapa del bootloader está completa y el sistema ha entrado oficialmente en el Kernel de Linux.**

A partir de este momento, el foco del registro se desplaza gradualmente a **controladores de dispositivos, DTB, dispositivos de almacenamiento, initrd y RootFS**.

---

## El Kernel encuentra el RootFS mediante parámetros de arranque

Después de que el Kernel arranca, necesita saber dónde está el RootFS real de Ubuntu. Esta información se puede ver en la línea de comandos del Kernel:

```text
[    0.000000] Kernel command line:
root=PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
rw rootwait rootfstype=ext4 ...
```

Le indica al Kernel:

> **El RootFS que se montará como `/` es la partición correspondiente a este PARTUUID.**

También hay otro parámetro: `rootwait`.

Le indica al Kernel que espere a que aparezca el dispositivo de almacenamiento correspondiente si el dispositivo raíz aún no está listo. Esto es muy importante para dispositivos como NVMe y SSD USB, que necesitan que primero se inicialicen el controlador y el driver.

Por lo tanto, esta etapa se puede entender simplemente como:

> **Si has entrado en el Kernel pero el RootFS nunca se encuentra, cambia el foco de la investigación a los dispositivos de almacenamiento, drivers, PARTUUID y el sistema de archivos, no al UEFI anterior.**

---

## initramfs: El entorno temporal antes del RootFS real

Después de que el Kernel se inicia, primero descomprime el initramfs:

```text
[    0.165968] Unpacking initramfs...
```

Luego entra en el espacio de usuario temprano y ejecuta `/init`:

```text
[    2.540191] Freeing unused kernel memory: 7744K
[    2.540270] Run /init as init process
[    2.567003] Root device found: PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
```

El `/init` aquí no es el `systemd` de Ubuntu; es el programa de inicialización que se ejecuta en el **entorno temporal de initramfs**. Una de sus tareas importantes es preparar los dispositivos de almacenamiento y encontrar el RootFS real.

Puedes entenderlo simplemente como:

```text
Linux Kernel
    ↓
initramfs
    ↓
Run /init
    ↓
Find Root Device
    ↓
Prepare to switch to Ubuntu RootFS
```

Por lo tanto, si un Jetson se detiene en el initramfs / shell de recuperación durante el arranque, por ejemplo:

```text
bash-5.2#
```

normalmente significa que **el Kernel y el espacio de usuario temprano se han iniciado correctamente**. En este punto deberías centrarte en las etapas posteriores: RootFS, dispositivos de almacenamiento, PARTUUID, sistema de archivos, etc. Ten en cuenta que llegar al shell **no significa necesariamente un fallo**; debe analizarse junto con el log específico.

---

## El Kernel detecta NVMe y encuentra el disco que contiene el RootFS

En la mayoría de los productos Jetson de Seeed Studio, el RootFS de Ubuntu se encuentra en NVMe, por lo que después de que el Kernel se inicia, primero necesita detectar los dispositivos PCIe y NVMe correspondientes.

El log muestra que el enlace PCIe se ha establecido:

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.640379] tegra194-pcie 14160000.pcie: Link up
```

Luego el sistema detecta el controlador NVMe:

```text
[    6.649660] nvme 0004:01:00.0: Adding to iommu group 5
[    6.649851] nvme nvme0: pci function 0004:01:00.0
```

Finalmente, se enumeran el disco NVMe y sus particiones:

```text
[    6.662942] nvme nvme0: 6/0/0 default/read/poll queues
[    6.665906] nvme0n1: p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15
```

Este log muestra que se ha recorrido toda la cadena:

```text
PCIe Link Up
    ↓
NVMe Controller found
    ↓
Identified as nvme0
    ↓
nvme0n1 created
    ↓
Partitions enumerated
```

**Ver `nvme0n1` significa que el Kernel ha detectado correctamente este NVMe. Solo entonces procede a montar el RootFS real.**

---

## Se monta el RootFS de Ubuntu

Una vez que se detecta el NVMe, el sistema continúa montando el RootFS real. El log muestra:

```text
[    7.426780] EXT4-fs (nvme0n1p1): mounted filesystem with ordered data mode.
[    7.433141] Rootfs mounted over PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
[    7.439898] Switching from initrd to actual rootfs
```

Esto significa que el sistema ha abandonado el entorno temporal de initramfs y ha empezado a usar el RootFS real de Ubuntu.

> **Al ver esto, básicamente puedes confirmar que el Kernel, los dispositivos de almacenamiento y el montaje del RootFS han tenido éxito, y que el flujo de arranque está a punto de entrar en el espacio de usuario de Ubuntu.**

Esto también corresponde al concepto del artículo anterior: **Ubuntu no es todo el sistema Jetson en sí; es el RootFS y el entorno de espacio de usuario que en realidad se monta en la segunda mitad de la cadena de arranque.**

---

## Se inicia systemd: entrando en el espacio de usuario de Ubuntu

Después del cambio de RootFS, verás que `systemd` se inicia:

```text
[    7.550899] systemd[1]: systemd 249.11-0ubuntu3.12 running in system mode
[    7.551400] systemd[1]: Detected architecture arm64.
[    7.559528] systemd[1]: Hostname set to <ubuntu>.
```

Esto muestra que el sistema ha pasado de la etapa de arranque al **espacio de usuario real de Ubuntu**.

A continuación, `systemd` sigue iniciando servicios del sistema como gestión de dispositivos, red, registro, servicios de NVIDIA y la interfaz gráfica.

El log también muestra:

```text
[    7.774172] systemd[1]: Queued start job for default target Graphical Interface.
```

En otras palabras, el siguiente objetivo de arranque del sistema es:

```text
graphical.target
```

es decir, el entorno de escritorio gráfico. En este punto, **el Bootloader, el Kernel de Linux, el NVMe y el RootFS han tenido éxito, y el sistema ha entrado en el espacio de usuario de Ubuntu.** Aquí, la cadena principal de arranque desde pulsar el botón de encendido hasta el espacio de usuario de Ubuntu está básicamente completa.

Como nota adicional, si has configurado algún software para que se inicie automáticamente al arrancar, también se iniciará uno por uno en este punto.

---

## Solución de problemas de arranque: primero determina "a qué capa se llegó por última vez"

En la comunidad técnica de Seeed Jetson, a menudo veo a personas preguntando: "¿Por qué mi Jetson no arranca?"

Aunque reflashear puede resolver el 90% de los problemas, sigo recomendando que primero obtengas el **log de arranque UART** del dispositivo y analices la causa exacta del fallo de arranque en función de la **última etapa de arranque que apareció correctamente**. Solo entendiendo la causa específica podrás evitar problemas similares en el futuro.

El propio método de análisis es esencialmente **ir acotando continuamente en qué etapa de arranque se encuentra la falla**.

Otra cosa a tener en cuenta: un Error o Warning en el log de arranque no significa necesariamente que el flujo de arranque haya fallado. Un Error no es necesariamente la causa de que el dispositivo no arranque. Por ejemplo, después de entrar en el espacio de usuario de Ubuntu, aún puedes ver:

```text
imx219 ... error during i2c read probe
imx219 ... board setup failed
imx219 ... probe ... failed
```

Lo que realmente ha fallado aquí es la **detección de la cámara IMX219**, no todo el flujo de arranque de Jetson.

Permíteme enfatizar de nuevo lo que deberías llevarte ahora: **al leer un log de arranque, lo más importante no es encontrar el primer Error, sino encontrar la última etapa de arranque exitosa a lo largo de la cadena de arranque.**

---

## Conclusión

Aunque un log de arranque de Jetson es muy largo, no necesitas entender cada línea al solucionar problemas. Sugiero combinarlo con análisis asistido por IA y centrarte en las partes sospechosas. Una vez que determines en qué capa se detuvo el sistema, el alcance del problema suele reducirse rápidamente. Este es el enfoque más importante para analizar problemas de arranque de Jetson. Una vez que domines este método, un log de arranque con miles de líneas ya no será un montón de información desordenada, sino un **mapa de arranque de Jetson** que te ayuda a localizar problemas rápidamente.

## Soporte técnico y debate sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
