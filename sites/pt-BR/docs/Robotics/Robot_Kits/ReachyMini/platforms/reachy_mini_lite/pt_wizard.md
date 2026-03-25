---
description: Guia para ler parâmetros do motor usando o software Dynamixel Wizard 2.0 para diagnosticar e configurar os motores do Reachy Mini Lite.
title: Leitura de Parâmetros do Motor com o Dynamixel Wizard
slug: /reachymini_platforms_reachy_mini_lite_wizard
keywords:
  - dynamixel wizard
  - parâmetros do motor
  - diagnóstico
  - configuração
  - conexão usb
  - varredura
  - leitura
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_lite_wizard/
---

# Como ler parâmetros dos motores usando o Dynamixel Wizard

## Instalar o Dynamixel Wizard
Você pode baixar o Dynamixel Wizard pelo seguinte link:
- [Dynamixel Wizard](https://emanual.robotis.com/docs/en/software/dynamixel/dynamixel_wizard2/)

## Conectar ao Reachy Mini Lite
1. Ligue o Reachy Mini Lite usando o adaptador de energia fornecido.
2. Conecte seu computador ao Reachy Mini Lite usando um cabo USB-C.
3. Abra o aplicativo Dynamixel Wizard.
4. Clique em "option" ao lado do botão "connect", depois vá para a guia "scan" e marque as seguintes informações para conseguir detectar todos os seus motores.
    - Protocol Version: 2.0
    - Baudrate: 1000000
    - Port: Selecione a porta apropriada para a sua conexão USB (por exemplo, COM3 no Windows ou /dev/ttyUSB0 no Linux/Mac).

![Dynamixel_Wizard_Scan_Settings](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/scan_parameters.png)

5. Clique no botão "Scan" para detectar todos os motores conectados. O wizard exibirá uma lista de motores detectados juntamente com seus IDs.

## Ler parâmetros do motor
1. Selecione um motor na lista de motores detectados.
2. Marque os parâmetros que você deseja ler (por exemplo: Present Position, Present Velocity, Present Load, etc.)

![Dynamixel_Wizard_Read_Settings](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/wizard_parameters.png)
