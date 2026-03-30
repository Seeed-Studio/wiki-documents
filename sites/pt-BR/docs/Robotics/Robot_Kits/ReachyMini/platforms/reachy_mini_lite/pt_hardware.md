---
description: Ficha técnica de hardware do Reachy Mini Lite incluindo dimensões, graus de liberdade, especificações dos motores, câmera, matriz de microfones e componentes eletrônicos.
title: Ficha Técnica de Hardware do Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_hardware
keywords:
  - hardware
  - ficha técnica
  - especificações
  - dimensões
  - motores
  - dynamixel
  - câmera
  - microfone
  - eletrônicos
  - lite
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_lite_hardware/
---

# Ficha Técnica de Hardware do Reachy Mini Lite

## Descrição geral

![Dimensions](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_dimensions.png)

- Dimensões: 30x20x15,5cm (estendido)
- Massa: 1,350 kg
- Material: ABS, PC, alumínio, aço
- GDL:
    - Cabeça: 6 GDL (3 rotações e 3 translações)
    - Corpo: 1 rotação
    - Antenas: 1 rotação (x2)

    ![Dofs](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/degrees_of_freedom.png)

    ![dof_table](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/dof_table.png)


- Tensão de entrada de alimentação: 6,8 - 7,6V
- Câmera grande angular: 120° - 12MP - Autofoco
- Som: matriz de microfones + alto-falante

![Mics_and_camera](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/mic_and_camera.png)


![back_interface](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/back_interface.png)

- Controle: conexão USB-C para interface com o computador.
Observe que ele *não* será carregado por meio desta porta USB.
Reachy Mini Lite é um dispositivo conectado a um computador

![Components](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_components.png)


## Componentes específicos

- Especificações dos motores
    - Base: 1x Dynamixel XC330-M288-PG personalizado ([XC330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xc330-m288/) com engrenagem plástica)
    - Antenas: 2x Dynamixel [XL330-M077-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m077/)
    - Plataforma Stewart: 6x Dynamixel [XL330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/)

    ![Motors](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/motors_detail.png)

- Placa da matriz de microfones
    - 4 microfones digitais PDM MEMS
    - Taxa de amostragem máxima de 16 kHz / Sensibilidade -26 dB FS / 64 dBA SNR
    - Baseada no reSpeaker XMOS XVF3800 da Seeed Studio
- Câmera
    - Câmera Raspberry Pi v3 grande angular
        - Sony IMX708
        - 12MP
        - Autofoco
        - Conexão I2C*~1 x MIDI DSI
- Alto-falante de 5W @4Ohms
- Placa de alimentação
    - Tensão de entrada: 6,8 - 7,6V

    ![Electronics](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/electronics.png)


- Placa controladora Lite:
    - 6,8 - 7,6 V fornecidos pela placa de alimentação
    - Conexão TTL para motor Dynamixel
    - Conexão CSI da câmera
    - Conexão da matriz de microfones
    - Entrada USB-C, usada para a porta USB da interface inferior. Observe que ela *não* irá carregar por meio desta porta USB. Reachy Mini Lite é um dispositivo conectado a um computador
