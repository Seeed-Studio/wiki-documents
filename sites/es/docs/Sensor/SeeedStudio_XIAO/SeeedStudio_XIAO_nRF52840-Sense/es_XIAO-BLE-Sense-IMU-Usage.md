---
description: Uso del IMU de 6 ejes en Seeed Studio XIAO nRF52840 Sense
title: Uso del IMU para XIAO nRF52840 Sense
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 7/17/2026
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2023-07-21'
url: https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-IMU-Usage/
---

# Uso del IMU de 6 ejes en Seeed Studio XIAO nRF52840 Sense

**Seeed Studio XIAO nRF52840 Sense** está equipado con una **Unidad de Medición Inercial (IMU) de 6 ejes** de alta precisión que incluye un **acelerómetro de 3 ejes** y un **giroscopio de 3 ejes**. También hay un **sensor de temperatura integrado** en este módulo. Creemos que este módulo puede ayudar enormemente en tus proyectos de TinyML. Este wiki presentará los conceptos básicos del uso de este IMU en esta placa.

**Nota**

- **Seeed Studio XIAO nRF52840** no está equipado con este módulo IMU.

## Ver datos de acelerómetro, giroscopio y temperatura en el monitor serie

En este ejemplo, vamos a ver los datos del acelerómetro, giroscopio y temperatura del Seeed Studio XIAO nRF52840 Sense en el Monitor Serie de Arduino.

- **Paso 1**. [Download Seeed_Arduino_LSM6DS3 Library](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2**. Abre Arduino IDE, navega a `Sketch > Include Library > Add .ZIP Library...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Paso 3.** Navega a `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` para abrir el **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **Paso 4.** Sube el código y abre el **Serial Monitor**

**Nota:** Una vez que subas el código, no se ejecutará automáticamente hasta que hagas clic en **Serial Monitor** en la esquina superior derecha de la ventana de Arduino.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

¡Ahora verás los datos del acelerómetro, giroscopio y temperatura mostrados uno tras otro en el monitor serie como arriba!

## ¿Qué más?

Si quieres probar más ejemplos puedes navegar a `File > Examples > Accelerometer And Gyroscope LSM6DS3` y revisar todos los ejemplos bajo **Accelerometer And Gyroscope LSM6DS3**
