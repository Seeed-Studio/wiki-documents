---
description: Lista las posibles causas de problemas de timeout durante el proceso de flasheo de Jetson.
title: Resolver el Problema de Error UUID
keywords:
- reComputer
- jetpack
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/deal_the_issue_of_UUID
sku: 100001302,E2025021103
last_update:
  date: 01/08/2026
  author: Dayu
---

# 🚨 Descripción del Problema

Incluso sin modificar ningún contenido relacionado con el kernel de Jetson, el dispositivo Jetson encuentra un error relacionado con UUID durante el arranque y entra en el terminal de recuperación. Este problema impide el inicio normal del sistema y requiere intervención manual para resolverlo.

## 🔍 Síntomas

**Incapaz de Acceder a la Partición de Usuario (Error UUID)**

Inicialmente, el sistema misteriosamente falla al montar la partición de usuario, resultando en fallos continuos de arranque como se muestra en la imagen a continuación:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/UUID-error.jpg"/></div>

**El Sistema Entra en Modo de Recuperación**

El sistema entonces entra anormalmente en modo de Recuperación (terminal de rescate):

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/rc-terminal.png"/></div>

Este problema típicamente ocurre cuando el proceso de arranque encuentra archivos del sistema corruptos o banderas de partición incorrectas, causando que el sistema falle el inicio normal y caiga en un entorno de shell de recuperación. El error UUID indica que el sistema no puede identificar o montar apropiadamente el sistema de archivos raíz, que es esencial para la operación normal.




# 🛠️ Soluciones




## Método 1: Limpiar Banderas OTA y Reemplazar Archivo initrd

**Posible Causa:** El archivo de imagen `/boot/initrd` está corrupto, causando que el proceso de arranque sea interrumpido.

**Síntomas:** El sistema no puede entrar al OS normal durante el inicio y repetidamente entra en modo de Recuperación, cayendo en el shell `bash-5.1#`.

### Paso 1: Montar Variables EFI en Terminal de Recuperación

Primero, monta el sistema de archivos de variables EFI en el terminal de recuperación:

```bash
mount -t efivarfs efivarfs /sys/firmware/efi/efivars
```

### Paso 2: Limpiar Variables de Bandera OTA

En el entorno de shell `bash-5.1#`, remueve y elimina los bits de bandera OTA:
**1. Remover y limpiar bandera de modo de arranque predeterminado L4T:**

```bash
chattr -i /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
```



**2. Remover y limpiar bandera de estado de partición A:**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
```



**3. Remover y limpiar bandera de estado de partición B:**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
```

### Paso 3: Apagar el Sistema

Después de limpiar los bits de bandera erróneos, apaga y desconecta la alimentación del dispositivo Jetson.

### Paso 4: Reemplazar el Archivo /boot/initrd

Reemplaza el archivo `/boot/initrd` usando una carcasa SSD para conectar el SSD del Jetson a una PC. **Se recomienda hacer una copia de seguridad del archivo initrd antiguo antes del reemplazo.**

**Pasos Detallados:**
- **Remover la unidad:** Saca el SSD de la placa de desarrollo y conéctalo a una PC (entorno Linux) usando una carcasa SSD.
- **Montar la partición:** Monta la partición raíz del sistema (RootFS) desde el SSD.
- **Reemplazar el archivo:**
  - a. Localiza el archivo `/boot/initrd` en el punto de montaje.
  - b. Reemplázalo con una nueva imagen initrd verificada y funcional (o una imagen recién compilada).
- **Prueba de recuperación:** Reinstala el SSD de vuelta en la placa de desarrollo y enciéndela.


**Enlaces de Descarga para Archivos initrd:**

**🔗 L4T 36.4.0 (JetPack 6.1):**
[Haz clic para descargar](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD15MxbJs_tTqEKA0ouhCygAR7LuRFU5wZzczSziLYUX2s?e=kM4KjT)

**🔗 L4T 36.4.3 (JetPack 6.2):**
[Haz clic para descargar](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCpm0jqIgDxRIvM3kk_40P6AX8bfvYF6AbEJ8fRWCNMS8c?e=4nMyMM)

**🔗 L4T 36.4.4 (JetPack 6.2.1):**
[Haz clic para descargar](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBFn84LQJqlQ7BgIzvCPp6gAcD9I80K2RBW0v88Uvjh8zs?e=IyaREq)



### Paso 5: Reiniciar el Jetson

Después de completar el reemplazo del archivo, reinicia el dispositivo Jetson.

## 🔄 Método 2: Enfoque de Instalación Fresca

Prepara un <div>SSD en blanco</div> y reemplázalo en el dispositivo Jetson. Después de flashear el sistema (asegúrate de que la versión de JetPack coincida con el SSD antiguo), intercambia de vuelta al SSD antiguo.   

El contenido en el SSD antiguo permanecerá intacto y ahora debería arrancar apropiadamente.




## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
