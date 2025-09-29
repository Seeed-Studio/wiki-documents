---
description: ODYSSEY - X86J41x5
title: Módulos LTE para ODYSSEY
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-LTE-Module
last_update:
  date: 01/03/2023
  author: w0x7ce

---


Este wiki te guiará sobre cómo usar el módulo LTE en ODYSSEY-X86 tanto en Windows como en Linux OS. En este ejemplo, el módulo LTE es [Quectel EM06-E LTE Cat 6 M.2 Module](https://www.seeedstudio.com/Quectel-EM06-E-LTE-Cat6-Module-p-4567.html) que está en formato M.2.

En ambos sistemas operativos, demostraremos cómo usar la función **Hotspot** para habilitar la disponibilidad de Wi-Fi para convertir señales 4G LTE a Wi-Fi, convirtiendo ODYSSEY-X86 en un simple **Router Wi-Fi 4G** con facilidad.

## Conexión de Hardware

- Conecta el módulo LTE al Conector M.2 de ODYSSEY-X86:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/connection.png" /></div>

- Conecta la tarjeta SIM 4G a la ranura.

- Conecta las Antenas al módulo LTE.

## Configuraciones

El Quectel EM06-E LTE Cat 6 M.2 Module tiene controladores USB para Windows 7/8/8.1/10, Linux y Android, DFOTA, etc. Esto lo hace muy conveniente para comenzar, y sin la necesidad de instalar controladores.

### Windows

Una vez conectado el módulo LTE e iniciado Windows. Debería instalar automáticamente los controladores USB y estar listo para usar:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/Windows.png" /></div>

### Hotspot Wi-Fi en Windows

Una vez que esté conectado a Internet con el módulo LTE, puedes usar la función Hotspot de Windows para crear un Wi-Fi:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/WindowsHS.png" /></div>

:::note
Asegúrate de que la tarjeta de red Intel también tenga antenas conectadas.
:::

### Linux

Para Linux, también es muy simple. Ejecuta las configuraciones de banda ancha:

:::note
        Ubuntu 18.04 se usa como referencia.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/1.png" /></div>

Elige la Región del País y selecciona tu proveedor de red:
<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/2.png" /></div>

Elige tu plan (Predeterminado):

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/3.png" /></div>

Confirma los detalles y haz clic en aplicar:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/4.png" /></div>

Ahora, el módulo LTE está completamente configurado y se puede usar para navegar por Internet.

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/5.png" /></div>

### Hotspot Wi-Fi en Linux

Para Linux, también puedes crear un Hotspot Wi-Fi usando la red 4G. Lo siguiente se ejecuta en ubuntu.

- Abre la configuración de Red en ubuntu, ejecuta el siguiente comando en terminal:

```sh
nm-connection-editor
```

Aparecerá la siguiente ventana:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-1.png" /></div>

- Selecciona `Wi-Fi` como tipo de conexión:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-2.png" /></div>

- Configura las opciones de Wi-Fi como sigue, asegúrate de que el **modo** sea `Hotspot`:

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-3.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-4.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-5.png" /></div>
</div>

- Para que el Wi-Fi sea identificado por otros dispositivos, debes conectar el Wi-Fi por sí mismo. En Wi-Fi, selecciona `Connect To Hidden Network`. Elige la red que acabamos de crear, y conéctate.

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-6.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-7.png" /></div>
</div>

- ¡Ahora, el Wi-Fi está disponible para conexiones!

## Referencia

- [How Fast is 5G On The ODYSSEY – X86J41x5 | 5G Speed Test](https://blog.seeedstudio.com/blog/2020/06/15/how-fast-is-5g-on-the-odyssey-x86j4105-5g-speed-test-m/)

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
