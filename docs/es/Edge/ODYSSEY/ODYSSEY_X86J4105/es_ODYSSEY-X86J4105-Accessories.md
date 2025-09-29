---
description: ODYSSEY - X86J41x5
title: Añadiendo Accesorios

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Accessories
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Añadiendo Accesorios a ODYSSEY - X86J41x5

Esta wiki introduce cómo añadir diferentes accesorios a ODYSSEY - X86J41x5 para aumentar el rendimiento y adaptarse a tus necesidades. Por ejemplo, podrías estar usando ODYSSEY-X86J41x5 para un escenario que requiere más gráficos, por lo tanto la necesidad de **añadir una GPU externa para alto rendimiento.** O en algunos casos como NAS, preferirías **dos discos duros HDD en lugar de usar SSD por razones de estabilidad.**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>

## 1. Añadiendo Almacenamiento Adicional vía PCIe a SATA III (Discos Duros HDD)

En ODYSSEY-X86J41x5, hay **1 M.2 SATA SSD, 1 M.2 PCIe SSD y 1 conector SATA III con 3 conectores de alimentación SATA III.** Para uso estándar, estos conectores son suficientes. Sin embargo, para un uso más industrial se preferiría usar HDD en lugar de SSD. Esto demuestra cómo conectar más de 1 HDD a ODYSSEY-X86J41x5.

### Materiales Requeridos

- **Adaptador M.2 PCIe a SATA**

- Discos Duros HDD (Máximo 3 HDD soportados en ODYSSEY-X86J41x5)

Para conectar más HDD a ODYSSEY-X86J41x5, necesitamos un componente extra, un adaptador M.2 PCIe a SATA que puede convertir la ranura M.2 PCIe en conector de datos SATA. Este adaptador se puede comprar comúnmente en el mercado de electrónicos.

### Instrucciones de Hardware

- Conecta el adaptador M.2 PCIe a SATA a la ranura PCIe del ODYSSEY-X86J41x5 y conecta el cable de datos del HDD como se muestra abajo. Conecta el cable de alimentación del HDD a uno de los tres conectores de alimentación SATA III.

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD.jpg" /></div>
  <br />
</div>

- Puedes tener un máximo de 3 discos duros HDD conectados al ODYSSEY-X86J41x5. Enciende los dispositivos y verifica si los discos duros aparecen en el sistema operativo.

### Resultado

Una vez iniciado en el SO, deberías poder ver los discos duros.
<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD-OS.png" /></div>
  <br />
</div>

¡Ahora ya no tienes que preocuparte más por el problema de almacenamiento!

## 2. Añadiendo una GPU Externa al ODYSSEY-X86J41x5

Para añadir GPU externa al ODYSSEY-X86J41x5 para aumentar el rendimiento, también necesitarás un componente extra.

### Materiales Requeridos

- **Adaptador M.2 PCIe x4 a PCIe x16**

- **Alimentación DC para GPU**

Los componentes aún no están disponibles para venta desde Seeed, así que por favor ten paciencia por ahora o consíguelos del mercado de electrónicos. Asegúrate de que el Adaptador sea adecuado para uso de GPU.

### Configuración Inicial del BIOS

Algunas configuraciones en el BIOS son necesarias para habilitar la GPU:

1.Entra al menú BIOS manteniendo presionada la tecla **DEL** al iniciar.

2.Navega a **Advanced** -> **CSM Support** y presiona Enter para habilitarlo.

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/biosSetting.jpg" /></div>
  <br />
</div>

3.Navega a **Chipset** -> **Primary Display** y selecciona **PCIe** y presiona Enter.

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/chipset.png" /></div>
  <br />
</div>

Guarda la configuración del BIOS y apaga el dispositivo.

### Instrucciones de Hardware

- Inserta tu GPU en el extremo PCIe x16 del adaptador.

- Inserta el Adaptador en la ranura M.2 PCIe del ODYSSEY-X86J41x5,

- La GPU también necesita alimentación externa, aquí usé un DIY de 4 pines a conector DC para suministrar la alimentación de 12V **(Solo haz esto si sabes lo que estás haciendo)**. También hay conectores de 4 pines a DC jack en el mercado que puedes comprar.

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/GPU-connect.jpg" /></div>
  <br />
</div>

- Conecta el HDMI a la GPU en lugar del ODYSSEY-X86J41x5.

:::note
Por favor, ten cuidado durante la conexión del hardware. Asegúrate de que todo esté conectado correctamente antes de encender la alimentación o podrías correr el riesgo de dañar los componentes.
:::

### Instalación del Controlador de GPU

Si todo va bien, el dispositivo debería arrancar correctamente y entrar al SO. Pero también necesita instalar los controladores de GPU al SO. Si eres un usuario de Windows esto será muy fácil. Aquí demostraré la instalación de controladores de GPU (Nvidia) en Ubuntu (Linux) como referencia.

1. Abre la terminal y escribe el siguiente comando para verificar la GPU:

```bash
lspci | grep -i vga
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/lspci.png" /></div>
  <br />
</div>

Aquí podemos ver dos GPUs, una es la GPU integrada y la otra es la GPU externa (GTX 750).

2.Primero, necesitamos deshabilitar los servicios **nouveau** en Ubuntu. En Terminal, usa `nano` o `vim` para abrir el `/etc/modprobe.d/blacklist.conf`.

```bash
sudo nano /etc/modprobe.d/blacklist.conf
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-1.png" /></div>
  <br />
</div>

3.Añade el siguiente código al final y guarda los cambios.

```bash
blacklist nouveau
options nouveau modeset=0
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-2.png" /></div>
  <br />
</div>

4.Ejecuta el siguiente comando para actualizar:

```bash
sudo update-initramfs -u
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-3.png" /></div>
  <br />
</div>

5.Reinicia el dispositivo para aplicar los cambios y puedes ejecutar el siguiente comando, si no aparece nada entonces el servicio está deshabilitado.

```bash
lsmod | grep nouveau
```

6.Ahora podemos usar el comando integrado de ubuntu para verificar los controladores necesarios para la GPU externa:

```bash
ubuntu-drivers devices
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/drivers.png" /></div>
  <br />
</div>

Esto determinará el modelo de GPU y recomendará los controladores para la misma. Aquí se recomienda el nvidia-driver-435 para la GPU externa.

7.Instala automáticamente el controlador usando el siguiente comando, y reinicia el dispositivo para que surta efecto.

```bash
sudo ubuntu-drivers autoinstall
```

¡En este punto, el controlador debería estar instalado en el ODYSSEY-X86J4105! Puedes verificar el estado de la GPU ejecutando el siguiente comando en la Terminal.

```bash
nvidia-smi
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-1.png" /></div>
  <br />
</div>

O simplemente ve a la configuración:

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>
  <br />
</div>

¡Ahora disfruta del ODYSSEY-X86J41x5 mejorado y está todo listo para sumergirse en el campo de la IA donde se requiere mucha potencia de GPU!

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
