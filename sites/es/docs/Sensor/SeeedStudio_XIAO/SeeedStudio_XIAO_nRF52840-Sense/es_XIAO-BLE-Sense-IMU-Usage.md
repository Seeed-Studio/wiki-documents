---
description: Uso del IMU de 6 ejes en Seeed Studio XIAO nRF52840 Sense
title: Uso del IMU para XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Uso del IMU de 6 ejes en Seeed Studio XIAO nRF52840 Sense

**Seeed Studio XIAO nRF52840 Sense** está equipado con una **Unidad de Medición Inercial (IMU) de 6 ejes** de alta precisión que incluye un **acelerómetro de 3 ejes** y un **giroscopio de 3 ejes**. También hay un **sensor de temperatura integrado** en este módulo. Creemos que este módulo puede ayudar enormemente en tus proyectos de TinyML. Este wiki introducirá los conceptos básicos del uso de este IMU en esta placa.

**Nota**

- **Seeed Studio XIAO nRF52840** no está equipado con este módulo IMU.
- La función IMU funcionará mejor cuando usemos la "Seeed nrf52 mbed-enabled Boards Library", por lo que lo recomendamos encarecidamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>


## Ver datos del acelerómetro, giroscopio y temperatura en el monitor serie

En este ejemplo, vamos a ver los datos del acelerómetro, giroscopio y temperatura del Seeed Studio XIAO nRF52840 Sense en el Monitor Serie de Arduino.

- **Paso 1**. [Descargar la Librería Seeed_Arduino_LSM6DS3](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) como un archivo zip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Paso 2**. Abrir Arduino IDE, navegar a `Sketch > Include Library > Add .ZIP Library...` y abrir el archivo zip descargado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Paso 3.** Navegar a `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` para abrir el **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **Paso 4.** Subir los códigos y abrir el **Monitor Serie**

**Nota:** Una vez que subas los códigos, no se ejecutarán automáticamente hasta que hagas clic en **Monitor Serie** en la esquina superior derecha de la ventana de Arduino.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

¡Ahora verás los datos del acelerómetro, giroscopio y temperatura mostrados uno tras otro en el monitor serie como se muestra arriba!

## ¿Qué más?

Si quieres probar más ejemplos puedes navegar a `File > Examples > Accelerometer And Gyroscope LSM6DS3` y revisar todos los ejemplos bajo **Accelerometer And Gyroscope LSM6DS3**