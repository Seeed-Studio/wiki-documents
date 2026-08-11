---
description: ejecutar la carrier board Jetson A603 completamente sin cabeza por USB, compartirle el internet del host y recuperarse de configuraciones de arranque defectuosas sin teclado
title: Configuración sin cabeza, uso compartido de Internet y recuperación de arranque para la A603
keywords:
  - reComputer
  - A603
  - sin cabeza
  - USB gadget
  - recuperación
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /headless_setup_and_recovery_for_a603
last_update:
  date: 08/07/2026
  author: Jonathan van der Maas
---

La A603 se puede aprovisionar y operar completamente a través de su puerto W6 Micro-USB: no se necesita monitor, teclado, cable Ethernet ni módulo WiFi en ningún momento después del flasheo. Esta página documenta el flujo de trabajo completamente sin cabeza en JetPack 6.2 (L4T R36.4.3): acceso SSH a través de la red USB gadget, dar internet a la placa a través del ordenador host y recuperarse de una configuración de arranque defectuosa en una placa cuyo menú de arranque no acepta entrada de teclado.

## SSH a través de la red USB gadget

Después del flasheo, la placa levanta una red USB gadget en el puerto W6 Micro-USB en cada arranque, sin necesidad de configuración:

```
Jetson   l4tbr0   192.168.55.1
Host     (USB)    192.168.55.100
```

Conecta W6 al host y haz SSH a la placa:

```bash
ssh <username>@192.168.55.1
```

Notas prácticas:

- El cable debe ser un cable Micro-USB de datos. Los cables solo de alimentación son eléctricamente indistinguibles de que no pase nada: la placa se enciende, pero no aparece ninguna interfaz de red en el host. Si la interfaz no aparece, prueba el cable con otro dispositivo antes de depurar nada más.
- Los hubs USB son transparentes para el enlace gadget y funcionan bien.
- En macOS la interfaz aparece como un puerto de hardware "Linux for Tegra"; en Linux es una interfaz `usb0`/`enx...` con dirección 192.168.55.100.
- Que la interfaz gadget desaparezca del host es una confirmación fiable de que la placa se ha apagado realmente, lo cual es útil porque la A603 no tiene LED de encendido visible en una carcasa. Antes de cortar la alimentación, apaga limpiamente (`sudo poweroff`), espera unos 15 segundos y confirma que la interfaz ha desaparecido.

## Internet para la placa a través del host

La ruta por defecto de la placa ya apunta al host (192.168.55.100), así que el host solo tiene que reenviar paquetes y hacer NAT hacia su propio enlace ascendente.

En un host Linux:

```bash
sudo sysctl -w net.ipv4.ip_forward=1
sudo iptables -t nat -A POSTROUTING -o <uplink, e.g. wlan0> -j MASQUERADE
```

En un host macOS, pf es exigente en dos cosas: el orden de las reglas (una regla `nat` colocada después de los anchors de Apple falla con "Rules must be in order"; debe estar en la sección de translation) y los anchors integrados de Apple (deben volver a declararse en el conjunto de reglas cargado o las propias reglas de firewall de macOS se sobrescriben). Un conjunto de reglas funcional:

```bash
sudo sysctl -w net.inet.ip.forwarding=1
cat > /tmp/pf-jetson.conf <<'EOF'
scrub-anchor "com.apple/*"
nat-anchor "com.apple/*"
nat on en0 inet from 192.168.55.0/24 to any -> (en0)
rdr-anchor "com.apple/*"
dummynet-anchor "com.apple/*"
anchor "com.apple/*"
load anchor "com.apple" from "/etc/pf.anchors/com.apple"
EOF
sudo pfctl -f /tmp/pf-jetson.conf
sudo pfctl -E
```

Sustituye `en0` por la interfaz de enlace ascendente del host. Ni el sysctl ni el conjunto de reglas de pf sobreviven a un reinicio del host, así que vuelve a ejecutarlos después de cada reinicio.

:::note
Si `apt` en la placa se cuelga una vez que el NAT está activo: el NAT es solo IPv4, pero DNS devuelve primero direcciones IPv6 para los mirrors de Ubuntu, y apt prueba esas antes de recurrir a IPv4. Fija apt a IPv4:

```bash
echo 'Acquire::ForceIPv4 "true";' | sudo tee /etc/apt/apt.conf.d/99force-ipv4
```
:::

## Experimentos de arranque sin teclado

El menú de arranque UEFI/extlinux de la A603 no acepta entrada de teclado, ni cableado ni inalámbrico, en ningún puerto, durante todo el tiempo de espera. Lo que sea a lo que apunte `DEFAULT` en `/boot/extlinux/extlinux.conf` es lo que arranca, siempre.

:::caution
Nunca dejes `DEFAULT` apuntando a una entrada de arranque no probada. Si esa entrada rompe la red USB gadget (los kernels y device trees personalizados pueden hacerlo), la placa se vuelve inalcanzable sin teclado de respaldo, y la recuperación requiere el procedimiento RCM de abajo.
:::

Una red de seguridad que hace que los experimentos de arranque sean sobrevivibles: un temporizador systemd que restablece `DEFAULT` a una entrada conocida como buena unos 180 segundos después de cada arranque, a menos que exista un archivo de bandera de conservación.

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /boot/extlinux/extlinux.conf
```

Con un servicio oneshot y un temporizador (`OnBootSec=180`), el flujo de trabajo para cualquier experimento pasa a ser:

1. `sudo rm /etc/a603-keep-boot-default` (arma la red de seguridad)
2. Apunta `DEFAULT` a la entrada experimental, reinicia
3. Si funciona: `sudo touch /etc/a603-keep-boot-default`, vuelve a poner `DEFAULT` en la entrada experimental (el temporizador puede haberla revertido ya antes de que hagas SSH, así que compruébalo)
4. Si la placa se vuelve inalcanzable: corta y vuelve a aplicar alimentación, y arrancará la entrada conocida como buena por sí sola

Antes de cualquier experimento con kernel o device tree, haz copia de seguridad del kernel y DTB de serie y registra sus sumas md5, para que siempre puedas demostrar qué archivos son cuáles.

## Recuperación de último recurso sin USB ni teclado

Si la placa arranca algo que no tiene ningún USB funcional, aún se puede recuperar sin cabeza mediante RCM (modo de recuperación):

1. La A603 no tiene botón de recuperación. Puentea el pin 3 de W7 (FORCE_RECOVERY) con el pin 4 de W7 (GND) mientras aplicas alimentación, mantén unos 2 segundos y suelta. Verifica desde el host: `lsusb` muestra `0955:7523`.
2. Desde un host Linux con el BSP L4T correspondiente (`Linux_for_Tegra`), arranca el initrd de flasheo sin flashear:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --initrd --showlogs \
     jetson-orin-nano-devkit-super internal
```

3. El initrd levanta su propia red USB. Entra por SSH (root/root sobre la dirección link-local), monta el NVMe y corrige la configuración de arranque:

```bash
mount /dev/nvme0n1p1 /mnt
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /mnt/boot/extlinux/extlinux.conf
```

:::caution
No pases `--flash-only` ni `--network usb0` cuando solo quieres el initrd. Con `--network usb0` el script procede a flashear realmente, y un flasheo abortado puede borrar la QSPI y romper por completo la cadena de arranque.
:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
