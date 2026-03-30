---
description: Hoja de datos de hardware de Reachy Mini Lite que incluye dimensiones, grados de libertad, especificaciones de los motores, cámara, matriz de micrófonos y componentes electrónicos.
title: Hoja de Datos de Hardware de Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_hardware
keywords:
  - hardware
  - datasheet
  - specifications
  - dimensions
  - motors
  - dynamixel
  - camera
  - microphone
  - electronics
  - lite
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_lite_hardware/
---

# Hoja de Datos de Hardware de Reachy Mini Lite

## Descripción global

![Dimensions](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_dimensions.png)

- Dimensiones: 30x20x15.5cm (extendido)
- Masa: 1.350 Kg
- Material: ABS, PC, aluminio, acero
- GDL:
    - Cabeza: 6 GDL (3 rotaciones y 3 traslaciones)
    - Cuerpo: 1 rotación
    - Antenas: 1 rotación (x2)

    ![Dofs](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/degrees_of_freedom.png)

    ![dof_table](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/dof_table.png)


- Tensión de entrada de alimentación: 6.8 - 7.6V
- Cámara gran angular: 120° - 12MP - Autofocus
- Sonido: matriz de micrófonos + altavoz

![Mics_and_camera](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/mic_and_camera.png)


![back_interface](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/back_interface.png)

- Control: conexión USB-C para la interfaz con el ordenador.
Ten en cuenta que *no* se cargará a través de este puerto USB.
Reachy Mini Lite es un dispositivo conectado a un ordenador

![Components](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_components.png)


## Componentes específicos

- Especificaciones de los motores
    - Base: 1x Dynamixel XC330-M288-PG personalizado ([XC330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xc330-m288/) con engranaje de plástico)
    - Antenas: 2x Dynamixel [XL330-M077-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m077/)
    - Plataforma Stewart: 6x Dynamixel [XL330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/)

    ![Motors](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/motors_detail.png)

- Placa de matriz de micrófonos
    - 4 micrófonos digitales PDM MEMS
    - Frecuencia de muestreo máxima de 16 kHz / sensibilidad de -26 dB FS / 64 dBA SNR
    - Basada en reSpeaker XMOS XVF3800 de Seeed Studio
- Cámara
    - Cámara Raspberry Pi v3 gran angular
        - Sony IMX708
        - 12MP
        - Autoenfoque
        - Conexión I2C*~1 x MIDI DSI
- Altavoz de 5W @4Ohms
- Placa de alimentación
    - Tensión de entrada: 6.8 - 7.6V

    ![Electronics](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/electronics.png)


- Placa controladora Lite:
    - 6.8 - 7.6 V suministrados desde la placa de alimentación
    - Conexión TTL para motor Dynamixel
    - Conexión CSI para cámara
    - Conexión para matriz de micrófonos
    - Entrada USB-C, utilizada para el puerto USB de la interfaz inferior. Ten en cuenta que *no* se cargará a través de este puerto USB. Reachy Mini Lite es un dispositivo conectado a un ordenador
