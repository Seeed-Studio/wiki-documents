---
description: 6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense
title: Uso del IMU de 6 Ejes en XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 02/17/2025
  author: Guillermo
---

# Uso del IMU de 6 Ejes en XIAO nRF52840 Sense de Seeed Studio

**Seeed Studio XIAO nRF52840 Sense** está equipada con una **Unidad de Medición Inercial (IMU) de 6 Ejes** de alta precisión, que incluye un **acelerómetro de 3 ejes** y un **giróscopo de 3 ejes**. Además, este módulo cuenta con un **sensor de temperatura integrado**. Creemos que este módulo puede ser de gran ayuda en tus proyectos de TinyML. Este wiki te presentará los conceptos básicos de cómo utilizar este IMU en esta placa.

**Note**

- **Seeed Studio XIAO nRF52840** no está equipada con este módulo IMU.
- La función IMU funcionará mejor cuando usemos la "Biblioteca de Placas Seeed nrf52 habilitada para mbed", por lo que te recomendamos encarecidamente utilizarla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>


## Ver datos del acelerómetro, giroscopio y temperatura en el monitor serial

En este ejemplo, vamos a ver los datos del acelerómetro, giroscopio y temperatura desde la Seeed Studio XIAO nRF52840 Sense en el Monitor Serial de Arduino.

- **Paso 1**. [Descargar la biblioteca Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como archivo zip.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2**. Abre el IDE de Arduino, ve a `Sketch > Incluir biblioteca > Agregar biblioteca .ZIP...` y abre el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Paso 3.** Ve a `Archivo > Ejemplos > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` para abrir el **HighLevelExample**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **Paso 4.** Sube el código y abre el **Monitor Serial**

**Nota:** Una vez que subas el código, no se ejecutará automáticamente hasta que hagas clic en **Monitor Serial** en la esquina superior derecha de la ventana de Arduino.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

¡Ahora verás los datos del acelerómetro, giroscopio y temperatura mostrados uno tras otro en el monitor serial como se muestra arriba!

## ¿Qué más?

Si deseas probar más ejemplos, puedes ir a `Archivo > Ejemplos > Accelerometer And Gyroscope LSM6DS3` y revisar todos los ejemplos bajo **Accelerometer And Gyroscope LSM6DS3**.