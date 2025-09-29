---
description: Lista las posibles causas de problemas de tiempo de espera durante el proceso de flasheo de Jetson.
title: Problema de Tiempo de Espera durante el Flasheo de Jetpack
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/usb_timeout_during_flash
last_update:
  date: 1/22/2025
  author: Youjiang
---

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

Hay varias razones que pueden causar un problema de tiempo de espera durante el proceso de flasheo del dispositivo Jetson a través de la línea de comandos:

1. **Anomalías con la PC host Ubuntu utilizada para el flasheo:** Un ejemplo típico es flashear a través de una máquina virtual Ubuntu. Debido a problemas de estabilidad USB en máquinas virtuales, a menudo se encuentran tiempos de espera agotados.
2. **Suministro de energía insuficiente del adaptador de corriente DC:** La salida de energía necesita cumplir con los requisitos del dispositivo Jetson. Puedes verificar este parámetro en la página de detalles del producto de Seeed Bazaar.
3. **Problemas de calidad con el cable Type-C:** Aunque el flasheo se puede hacer vía USB 2.0, la calidad del cable afecta la estabilidad del proceso. Basado en experiencia práctica, dos puntos clave para el cable son: (a) debería al menos soportar comunicación USB 2.0, y (b) la longitud del cable debería ser menor a 1.5m.
4. **Evitar usar hubs USB:** Algunos hubs USB pueden afectar la estabilidad de la transmisión de datos durante el proceso de flasheo.
5. **Selección incorrecta del paquete de flasheo:** Por favor verifica que el paquete de flasheo correcto esté seleccionado y reinicia el script de flasheo.

Por favor verifica los problemas mencionados arriba e intenta reiniciar el script de flasheo.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>