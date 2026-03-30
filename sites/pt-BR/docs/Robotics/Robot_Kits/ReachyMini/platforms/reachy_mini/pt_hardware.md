---
description: Folha de dados completa de hardware do Reachy Mini, incluindo dimensões, graus de liberdade, especificações dos motores, câmera, matriz de microfones e componentes eletrônicos.
title: Folha de Dados de Hardware do Reachy Mini
slug: /reachymini_platforms_reachy_mini_hardware
keywords:
  - hardware
  - folha de dados
  - especificações
  - dimensões
  - motores
  - dynamixel
  - câmera
  - microfone
  - eletrônica
  - cm4
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_hardware/
---

# Folha de Dados de Hardware do Reachy Mini

## Descrição geral

![Dimensions](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_dimensions.png)

- Dimensões: 30x20x15,5 cm (estendido)
- Massa: 1,475 kg
- Material: ABS, PC, alumínio, aço
- DOFs:
    - Cabeça: 6 DOFs (3 rotações e 3 translações)
    - Corpo: 1 rotação
    - Antenas: 1 rotação (x2)

    ![Dofs](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/degrees_of_freedom.png)

    ![dof_table](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/dof_table.png)


- Tensão de entrada de alimentação: 6,8 - 7,6 V
- Câmera grande angular: 120° - 12 MP - autofoco
- Som: matriz de microfones + alto-falante

![Mics_and_camera](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/mic_and_camera.png)


![back_interface](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/back_interface.png)

- Controle: Raspberry 4 Compute Module (versão sem fio)

![Components](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_components.png)


## Componentes específicos

- Especificações dos motores
    - Base: 1x Dynamixel XC330-M288-PG personalizado ([XC330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xc330-m288/) com engrenagem de plástico)
    - Antenas: 2x Dynamixel [XL330-M077-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m077/)
    - Plataforma Stewart: 6x Dynamixel [XL330-M288-T](https://emanual.robotis.com/docs/en/dxl/x/xl330-m288/)

    ![Motors](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/motors_detail.png)

- Placa da Matriz de Microfones
    - 4 microfones digitais PDM MEMS
    - Taxa de amostragem máxima de 16 kHz / -26 dB FS de sensibilidade / 64 dBA de SNR
    - Baseada no reSpeaker XMOS XVF3800 da Seeed Studio
- Câmera
    - Câmera Raspberry Pi v3 grande angular
        - Sony IMX708
        - 12 MP
        - Autofoco
        - Conexão I2C*~1 x MIDI DSI
- Alto-falante de 5 W @4 Ohms
- Placa de alimentação
    - Tensão de entrada: 6,8 - 7,6 V
    - Bateria LiFePO4, 2000 mAh, 6,4 V, 12,8 Wh, proteção contra sobrecarga, proteção contra sobredescarga, proteção contra sobrecorrente, proteção contra curto-circuito, sensor de temperatura.

    ![Electronics](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/electronics.png)


- Placa Controladora CM4
    - 6,8 - 7,6 V fornecidos pela Placa de Alimentação
    - Conexão TTL de motor Dynamixel
    - Conexão CSI da câmera
    - Conexão da matriz de microfones
    - Saída USB-C (ou seja, é possível conectar um dispositivo como um pen drive USB). Observe que ele *não* será carregado por esta porta USB.
    - Raspberry 4 Compute Module - CM4104016 (Wi-Fi, 4 GB de RAM, 16 GB de flash)
    - Antena Wi-Fi - Antena patch dual-band 2,4-5 GHz, 2,79 dBi, omnidirecional
