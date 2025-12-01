---
description: Este wiki explica cómo instalar y configurar el módulo 5G Quectel RM520N en dispositivos Jetson, cubriendo los pasos de configuración de hardware y los comandos AT necesarios.
title: Módulo Quectel RM520N para Jetson
keywords:
  - Edge
  - reComputer
  - Jetson
  - 4G/5G
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/RM520N.webp
slug: /es/rm520n_module_for_jetson
last_update:
  date: 11/25/2025
  author: Youjiang
---

El RM520N es una serie de módulos IoT 5G especialmente optimizados para aplicaciones IoT/eMBB, diseñados en formato M.2 de acuerdo con la especificación 3GPP Release 16, que soporta tanto los modos 5G NSA como SA. El RM520N es compatible con la serie de módulos 5G RM50xQ de Quectel, el módulo LTE-A Cat 6 EM06, la serie de módulos Cat 12 EM12/EM12xR/EM120K, y el módulo Cat 16 EM160R-GL, facilitando la migración de LTE-A a 5G.

El RM520N es un módulo de grado industrial para aplicaciones industriales y comerciales únicamente. Cubre casi todos los operadores principales a nivel mundial y soporta la tecnología de localización Qualcomm® IZat Gen9C Lite (GPS, GLONASS, BDS y Galileo). El receptor GNSS integrado simplifica enormemente el diseño del producto y proporciona capacidad de posicionamiento más rápida, precisa y confiable.

Gracias a un rico conjunto de protocolos de Internet, interfaces estándar de la industria y abundantes funcionalidades (controladores USB y PCIe para Windows 10, Linux y Android), el módulo puede adoptarse en una amplia gama de aplicaciones eMBB e IoT incluyendo routers industriales, gateways domésticos, STB, laptops industriales, laptops de consumo, PDAs industriales, PCs tablet resistentes, transmisión de video y señalización digital.

<!-- Need to image and jump button  -->

## Características

- Módulo multi-modo 5G/4G/3G en formato M.2, optimizado para aplicaciones IoT y eMBB
- Cobertura mundial 5G y LTE-A
- Soporta modos NSA y SA
- Receptor GNSS multi-constelación disponible para aplicaciones que requieren posicionamiento rápido y preciso en cualquier entorno
- Refinamientos de características: DFOTA y VoLTE (opcional)

## Especificaciones
<div align="center">
  <img width ="950" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/specification.png"/>
</div>

## Dispositivos Compatibles

- [reComputer Robotis J30/J40](https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html)
- [reComputer Industrial J30/J40](https://www.seeedstudio.com/reComputer-Industrial-optional-accessories.html)
- [reServer Industrial J30/J40](https://www.seeedstudio.com/reServer-Industrial-J401-optional-accessories.html)
- [reServer Industrial J501](https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-board-for-Jetson-AGX-Orin-p-5950.html)

:::note
Solo se listan arriba los dispositivos probados.
:::

## Conexión de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/hardware_connection.png"/>
</div>

:::danger
En este wiki, usaremos el [reComputer Robotics J3011](https://www.seeedstudio.com/reComputer-Robotics-J3011-p-6503.html) como ejemplo para demostrar cómo instalar y configurar un módulo RM520N-GL en un dispositivo Jetson.
:::

Paso 1. Preparar todos los materiales que se utilizarán.

- reComputer Robotics J4012 equipado con Jetpack 6.2
- Módulo Quectel RM520N-GL

Paso 2. Ajustar la posición del tornillo de soporte.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/support_screw.png"/>
</div>

Paso 3. Insertar el módulo 5G en el puerto M.2 Key B.

Paso 4. Apretar los tornillos de fijación e instalar la antena.

Paso 5. Instalar la tarjeta SIM 5G en el panel frontal.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/sim.jpg"/>
</div>

## Configurar el Módulo 5G

Iniciar el dispositivo Jetson e ingresar el siguiente comando en la terminal.
```bash
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2
```

En la interfaz de minicom, podemos usar comandos AT para configurar el modo de operación del módulo 5G.

```bash
AT+CPIN? # Check SIM card status. A normal response is READY.
AT+QCFG="usbnet",3 # Set module operation mode to RNDIS. A normal response is OK.
AT+CFUN=1,1 # Restart the module. If it fails to start for an extended period, try restarting the Jetson device.
AT+QNWPREFCFG="mode_pref",AUTO # Set automatic network mode or prioritize LTE network mode
AT+QNWPREFCFG="mode_pref",LTE
```

Si todo va bien, su dispositivo ahora debería poder acceder a internet normalmente.

Para verificar la calidad de la red, puede usar una herramienta de prueba de velocidad para probar la velocidad de la red.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/speed_test.png"/>
</div>


Problema conocido: Hemos encontrado que este método de configuración permite al módulo 5G conectarse a la red normalmente, pero la información de mmcli muestra anomalías.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/5G/mmcli.png"/>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
