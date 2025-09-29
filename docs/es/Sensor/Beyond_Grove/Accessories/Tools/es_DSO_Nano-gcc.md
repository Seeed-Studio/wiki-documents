---
title: DSO Nano/gcc
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/DSO_Nano-gcc/
slug: /es/DSO_Nano-gcc
last_update:
  date: 02/03/2022
  author: gunengyu
---
# Cómo compilar el firmware del DSO Nano usando gcc

El firmware del [DSO Nano](/DSO_Nano "DSO Nano") se puede compilar con una cadena de herramientas gcc. Los archivos específicos de gcc residen en la carpeta project/gcc del árbol de código fuente del firmware.

## Obtener una cadena de herramientas gcc de compilación cruzada ARM

La cadena de herramientas ARM que la mayoría de nosotros usamos es el GCC de ARM en &lt;[https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)&gt;.

Para Linux, puedes elegir el tarball o el instalador. Este último es una descarga mucho más grande que el primero, por alguna razón. En cualquier caso, asegúrate de tener el directorio "bin" de la cadena de herramientas en tu ruta. Por ejemplo, si extrajiste el tarball a /opt, escribe esto en tu shell, o añádelo a tu .bashrc o .pam_environment:

```
PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH
```

Una vez que tengas la cadena de herramientas configurada correctamente, simplemente escribiendo:

```
arm-none-eabi-gcc -v
```

debería listar la versión del compilador y las opciones con las que fue compilado. Si en su lugar obtienes un error, por favor arregla tu instalación de la cadena de herramientas antes de continuar.

Si no puedes encontrar una cadena de herramientas ARM precompilada para tu plataforma, o de otra manera quieres compilar la cadena de herramientas tú mismo, puedes descargar el código fuente o revisar [https://open-bldc.org/wiki/Building_ARM_Toolchain](https://open-bldc.org/wiki/Building_ARM_Toolchain)

## Obtener y compilar el código fuente del firmware

Por ahora, obtén el código del árbol gitlab de Tormod:

```
git clone https://gitlab.com/dsonano/dso-firmware.git
cd dso-firmware
```

Si más tarde quieres actualizar tu árbol al último git:

```
git pull
```

### Compilar la parte de la aplicación

```
cd DS0201_APP/project/gcc
make
```

### Compilar la parte de la biblioteca

```
cd ../../../DS0201_LIB/project/gcc
make clean
make
```

## Pruebas

Usa [Dfu-util](/Dfu-util "Dfu-util") para descargar los archivos dso-lib.bin y dso-app.bin a tu Nano V1 o V2. Para el modelo Nano V3, copia los archivos dso-lib.hex y dso-app.hex uno a la vez a la unidad USB virtual DFU.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>