---
description: Describe las diferencias en L4T entre Seeed y NVIDIA
title: Diferencias en L4T entre Seeed y NVIDIA
keywords:
- jetson
- BSP
- L4T
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/differences_of_l4t_between_seeed_and_nvidia
last_update:
  date: 04/05/2025
  author: Dayu
---

Los Paquetes de Soporte de Placa (BSPs) Jetson de Seeed están basados en las versiones 35.3.1, 35.5, 36.3, 36.4 y 36.4.3 de Linux for Tegra (L4T) de NVIDIA, con modificaciones para soportar los productos de la serie Jetson de Seeed. A continuación se presentan las diferencias entre el BSP de Seeed y el BSP oficial de NVIDIA para cada una de estas versiones de L4T.

## L4T 36.4.3

Jetson Linux 36.4.3 es parte de JetPack 6.2. Para esta versión, el BSP de Seeed incluye varios controladores y características adicionales que no están presentes en el BSP predeterminado de NVIDIA, incluyendo:

- Agregado soporte para controladores de bus CAN de la serie MCP251X.
- Agregado soporte para controladores CAN-FD MCP251XFD.
- Habilitado el algoritmo de suma de verificación CRC-CCITT (usado por PPP y protocolos similares).
- Agregado soporte para el controlador genérico de Wi-Fi Intel.
- Habilitado el soporte de rastreo de dispositivos Wi-Fi Intel.
- Habilitado el modo de operación modular para Wi-Fi Intel.
- Agregado soporte para controladores Ethernet Gigabit Microchip LAN743x.
- Habilitado el soporte PPP (Protocolo Punto a Punto).
- Habilitado el soporte PPP sobre enlaces serie asincrónicos.
- Agregado soporte para controladores Wi-Fi de la serie Realtek 88.
- Agregado soporte para el chip Wi-Fi Realtek 8723D.
- Agregado soporte para el chip Wi-Fi Realtek 8723DU.
- Agregado soporte para chips Wi-Fi de la serie Realtek 8723X.
- Agregado soporte para dispositivos Wi-Fi Realtek sobre USB.
- Agregado soporte para controladores de codec de audio de la serie TLV320AIC3X de TI.
- Agregado soporte de interfaz I²C para el codec TLV320AIC3X.
- Habilitada la interfaz de depuración avanzada para dispositivos de video.
- Agregado soporte para el deserializador GMSL MAX9296A.
- Agregado soporte para el deserializador GMSL MAX96717.
- Agregado soporte para el deserializador GMSL MAX96724.
- Agregado soporte para un agregador GMSL Maxim.

## L4T 36.4

Jetson Linux 36.4 es parte de JetPack 6.1. Para esta versión, el BSP de Seeed agrega controladores y características adicionales comparado con el BSP de NVIDIA, incluyendo:

- Agregado soporte para controladores de bus CAN de la serie MCP251X.
- Agregado soporte para controladores CAN-FD MCP251XFD.
- Habilitado el algoritmo de suma de verificación CRC-CCITT (usado por PPP y otros protocolos).
- Agregado soporte para el módulo del controlador Intel Wi-Fi MVM.
- Agregado soporte para el controlador genérico de tarjeta inalámbrica Intel.
- Habilitada la funcionalidad de rastreo de depuración para Wi-Fi Intel.
- Habilitado el control de indicador LED para dispositivos Wi-Fi Intel.
- Habilitado el controlador del controlador Ethernet Gigabit Microchip LAN743x.
- Habilitado el soporte del protocolo PPP.
- Habilitadas las conexiones PPP sobre puertos serie asincrónicos.
- Habilitado el soporte para controladores centrales de tarjetas inalámbricas de la serie Realtek 88.
- Agregado soporte para el chip Wi-Fi Realtek 8723D.
- Agregado soporte para el chip Wi-Fi Realtek 8723DU.
- Agregado soporte para chips Wi-Fi de la serie Realtek 8723X.
- Agregado soporte para el módulo central del controlador Wi-Fi Realtek RTW88.
- Agregado soporte para usar adaptadores Wi-Fi de la serie RTW88 sobre USB.
- Agregado soporte para bibliotecas de compresión requeridas por PPP.
- Agregado soporte para el chip convertidor USB a serie CH341.

## L4T 36.3

Jetson Linux 36.3 es parte de JetPack 6.0. Para esta versión, el BSP de Seeed proporciona controladores y características adicionales más allá de los de NVIDIA, incluyendo:

- Agregado soporte para controladores de bus CAN de la serie MCP251X.
- Agregado soporte para controladores CAN-FD MCP251XFD.
- Habilitado el algoritmo de suma de verificación CRC-CCITT (usado por PPP y protocolos similares).
- Habilitado el soporte del protocolo I²C ATR (Traductor de Direcciones).
- Agregado soporte para el controlador genérico de tarjeta inalámbrica Intel.
- Habilitado el soporte de rastreo de depuración de dispositivos para Wi-Fi Intel.
- Agregado soporte para el controlador Ethernet Gigabit Microchip LAN743x.
- Agregado soporte para el módulo central del controlador Wi-Fi de la serie Realtek 88.
- Agregado soporte para el chip Wi-Fi Realtek 8723D.
- Agregado soporte para el chip Wi-Fi Realtek 8723DU.
- Agregado soporte para chips Wi-Fi de la serie Realtek 8723X.
- Agregado soporte para el controlador de codec de audio TLV320AIC3X de TI.
- Agregado soporte para la interfaz de control I²C para TLV320AIC3X.
- Agregado soporte para el deserializador GMSL MAX96717.
- Agregado soporte para el deserializador GMSL MAX96724.
- Agregado soporte para el deserializador de video GMSL MAX9296A.
- Agregado soporte para un agregador GMSL Maxim.
- Habilitado el soporte central TPM.
- Agregado soporte para controladores TPM sobre interfaz SPI.
- Habilitado el soporte para TPM Infineon vía interfaz I²C.
- Habilitado el módulo de seguridad SELinux.

## L4T 35.5

Jetson Linux 35.5 es parte de JetPack 5.1.3. Para esta versión, el BSP de Seeed agrega varios controladores y características e incluye algunos cambios de configuración, incluyendo:

- **Controlador de cámara IMX219:** Seeed compila este controlador en el kernel, mientras que NVIDIA lo proporciona como un módulo cargable.
- **Controlador de cámara IMX390:** Seeed actualmente deshabilita este controlador, mientras que NVIDIA lo compila en el kernel.
- **Controlador del controlador Ethernet Gigabit LAN743x:** Seeed lo compila en el kernel, mientras que NVIDIA lo proporciona como un módulo cargable.
- Habilitado el soporte para el chip PHY (capa física) Ethernet TI DP83867.
- Agregado soporte para el controlador del chip controlador USB Type-C NXP PTN5150.
- Agregado soporte para los controladores de chips Ethernet Gigabit de la serie Microchip LAN743x.
- Habilitado el framework nvmem (memoria no volátil), permitiendo a los controladores acceder al almacenamiento a bordo como EEPROM/NVRAM.
- Agregado soporte para el chip de gestión de energía STPMIC1.
- Agregado soporte para el chip de gestión de energía TI TPS65090.
- Habilitado el controlador del sensor de temperatura LM90.
- Agregado soporte para sensores de termistor NTC.
- Agregado soporte para controladores de codec de audio de la serie TLV320AIC3X de TI (interfaz I²S).
- Agregado soporte para la interfaz de control I²C TLV320AIC3X.
- Habilitado el soporte para la Interfaz de Controlador de Puerto USB Type-C (TCPCI) estandarizada.
- Agregado soporte para el controlador del controlador Type-C MediaTek MT6370.
- Habilitado el soporte de dispositivo de consola USB (para depuración serie sobre OTG).
- Habilitado el controlador del adaptador USB a serie CH341.

## L4T 35.3.1

Jetson Linux 35.3.1 es parte de JetPack 5.1.1. Para esta versión, el BSP de Seeed agrega controladores y características adicionales y hace algunas modificaciones, incluyendo:

- Habilitado el generador de números aleatorios de hardware TPM como una de las fuentes de entropía del sistema.
- Habilitado el punto de montaje `/sys/kernel/security` para uso por SELinux, AppArmor, etc.
- Habilitado el soporte de interfaz central TPM (requerido para TPMs SPI/I²C).
- Agregado soporte para acceder a chips TPM vía el bus SPI.
- Habilitado el soporte TPM para características como arranque seguro y almacenamiento de claves.

## Recursos

- [Código fuente del L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

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
