---
description: Enumera las posibles causas de los problemas de tiempo de espera durante el proceso de actualización de una Jetson.
title: Problema de tiempo de espera durante Flasheo de Jetpack
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

1. **Anormalidades con la PC host de Ubuntu utilizada para flashear:** Un ejemplo típico es flashear a través de una máquina virtual Ubuntu. Debido a problemas de estabilidad del USB en las máquinas virtuales, a menudo se producen tiempos de espera largos.
2. **Suministro de energía insuficiente del adaptador de CC:** La salida de energía debe cumplir con los requisitos del dispositivo Jetson. Puedes consultar este parámetro en la página de detalles del producto de Seeed Bazaar.
3. **Problemas de calidad con el cable tipo C:** Aunque el flasheo se puede realizar mediante USB 2.0, la calidad del cable afecta la estabilidad del proceso. Según la experiencia práctica, dos puntos clave para el cable son: (a) al menos debe admitir comunicación USB 2.0 y (b) la longitud del cable debe ser inferior a 1,5 m.
4. **Evita el uso de Hub's USB:** Algunos Hub´s USB pueden afectar la estabilidad de la transmisión de datos durante el proceso de actualización.
5. **Selección de paquete de flasheo incorrecto:** Verifica que estés seleccionado el paquete de flasheo correcto y reinicia el script de flasheo.

Verifica los problemas mencionados anteriormente e intenta reiniciar el script de flasheo.

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
