---
description: Preguntas frecuentes y consejos de solución de problemas para Seeed Jetson DevelopTool: incluye flasheo, SSH, VNC, uso compartido de red y más.
title: Preguntas frecuentes
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - FAQ
  - troubleshooting
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_faq
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/es/jetson_developtool_faq/
---

## Flasheo

**P: "Detect Device" no muestra nada después de entrar en el modo Recovery.**

- Comprueba que el cable USB-C admite transferencia de datos (no es solo de carga).
- En Linux, verifica con `lsusb | grep NVIDIA`. El dispositivo debería aparecer como `NVIDIA Corp. APX`.
- En Windows, la redirección USB a través de WSL2 requiere `usbipd`. Ejecuta `usbipd list` para comprobar si el dispositivo aparece y luego `usbipd attach --wsl --busid <ID>` para pasarlo a WSL.
- Prueba con otro puerto USB, preferiblemente USB 3.0 directamente en la placa base (evita hubs).

**P: El flasheo falla a mitad de proceso con un error.**

- Asegúrate de que el cable Ethernet entre el PC y el Jetson esté conectado (algunos scripts de flasheo del BSP lo requieren incluso cuando se flashea por USB).
- Verifica que tengas al menos 20 GB de espacio libre en disco.
- Vuelve a entrar en modo Recovery e inténtalo de nuevo. Un único fallo no deja el dispositivo inutilizable.

**P: El flasheo tarda más de 15 minutos.**

- Esto no es habitual. Comprueba que el cable USB esté conectado a un puerto USB 3.0. USB 2.0 será significativamente más lento.

---

## SSH / Conexión

**P: No se puede conectar al Jetson por SSH.**

- Verifica que el Jetson y el PC estén en la misma red, o que [PC Network Sharing](/es/jetson_developtool_remote_development) esté habilitado.
- Confirma que el servicio SSH se está ejecutando en el Jetson: `sudo systemctl status ssh`
- Comprueba la dirección IP: usa el asistente serie de Jetson Init o revisa la tabla DHCP de tu router.

**P: SSH se conecta pero se desconecta inmediatamente.**

- Es posible que el Jetson se haya quedado sin memoria. Compruébalo con `free -h` y considera habilitar swap mediante el módulo [Skills](/es/jetson_developtool_skills).

---

## VNC / Escritorio remoto

**P: La pantalla de VNC está en negro después de conectar.**

- Es posible que el servidor gráfico del Jetson no se esté ejecutando. Prueba: `sudo systemctl restart gdm3`
- Si no hay una pantalla física conectada, puede que necesites configurar una pantalla virtual en `/etc/X11/xorg.conf`.

**P: noVNC en el navegador muestra "Disconnected".**

- Confirma que el servidor VNC se está ejecutando en el Jetson: `ps aux | grep vncserver`
- Comprueba que el puerto 5900 (o el puerto VNC configurado) no esté bloqueado por un firewall.

---

## App Market

**P: La instalación de la app falla con "Docker not found".**

- Usa primero el módulo [Skills](/es/jetson_developtool_skills) para instalar Docker, o ejecuta: `curl -fsSL https://get.docker.com | sh`

**P: Una imagen de Docker falla al descargarse (pull).**

- Normalmente se trata de un problema de red. Asegúrate de que el Jetson tenga acceso a internet; usa [PC Network Sharing](/es/jetson_developtool_remote_development) si es necesario.
- Si estás detrás de un proxy, habilita **Auto Proxy Forward** en la pestaña PC Network Sharing.

---

## Skills

**P: Una skill falla con un error de permisos.**

- La mayoría de las skills requieren privilegios de `sudo`. Asegúrate de que el usuario de SSH tenga configurado sudo sin contraseña, o introduce tu contraseña cuando se te solicite en el registro de la skill.

**P: Mi skill personalizada de OpenClaw no aparece.**

- Reinicia DevelopTool después de colocar el archivo de la skill en `skills/openclaw/`. La herramienta carga las skills personalizadas al iniciar.

---

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
