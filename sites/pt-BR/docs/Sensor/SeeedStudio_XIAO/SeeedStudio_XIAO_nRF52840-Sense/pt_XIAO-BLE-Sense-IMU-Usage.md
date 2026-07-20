---
description: Uso de IMU de 6 eixos no Seeed Studio XIAO nRF52840 Sense
title: Uso de IMU para XIAO nRF52840 Sense
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 7/17/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2023-07-21'
url: https://wiki.seeedstudio.com/pt-br/XIAO-BLE-Sense-IMU-Usage/
---

# Uso da IMU de 6 eixos no Seeed Studio XIAO nRF52840 Sense

O **Seeed Studio XIAO nRF52840 Sense** está equipado com uma **Unidade de Medição Inercial (IMU) de 6 eixos** de alta precisão, que inclui um **acelerômetro de 3 eixos** e um **giroscópio de 3 eixos**. Há também um **sensor de temperatura integrado** neste módulo. Acreditamos que este módulo pode ajudar bastante em seus projetos de TinyML. Este wiki apresentará o básico de como usar esta IMU nesta placa.

**Nota**

- **Seeed Studio XIAO nRF52840** não está equipado com este módulo IMU.

## Visualizar dados de acelerômetro, giroscópio e temperatura no monitor serial

Neste exemplo, vamos visualizar os dados de acelerômetro, giroscópio e temperatura do Seeed Studio XIAO nRF52840 Sense no Monitor Serial do Arduino.

- **Passo 1**. [Download Seeed_Arduino_LSM6DS3 Library](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como um arquivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Passo 2**. Abra a Arduino IDE, navegue até `Sketch > Include Library > Add .ZIP Library...` e abra o arquivo zip baixado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Passo 3.** Navegue até `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` para abrir o **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **Passo 4.** Faça o upload dos códigos e abra o **Serial Monitor**

**Nota:** Depois de fazer o upload dos códigos, eles não serão executados automaticamente até que você clique em **Serial Monitor** no canto superior direito da janela do Arduino.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

Agora você verá os dados de acelerômetro, giroscópio e temperatura exibidos um após o outro no monitor serial como acima!

## E mais?

Se você quiser testar mais exemplos, pode navegar até `File > Examples > Accelerometer And Gyroscope LSM6DS3` e verificar todos os exemplos em **Accelerometer And Gyroscope LSM6DS3**
