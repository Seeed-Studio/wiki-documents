---
description: Este wiki proporcionará una breve introducción sobre cómo obtener los datos de la IMU en el dispositivo.
title: Uso de la IMU
keywords:
  - reCamera
  - reCamera Pro
  - IMU
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_imu_usage
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_imu_usage/
---

# Uso de la IMU de reCamera Pro

El modelo de IMU incorporado en el dispositivo es el ICM-42670-P, un sensor de 6 ejes que integra un acelerómetro de 3 ejes y un giroscopio de 3 ejes. El giroscopio del ICM-42670-P admite rangos de medición de ±250 / ±500 / ±1000 / ±2000 dps, mientras que el acelerómetro admite rangos de ±2 / ±4 / ±8 / ±16 g. Sus datos internos se generan en formato de complemento a dos de 16 bits.

## Ruta de datos

reCamera PRO utiliza el controlador IIO estándar para la IMU, por lo que los datos en bruto se pueden obtener directamente a través de las interfaces IIO.
Los archivos de datos en bruto se pueden encontrar en el directorio ***/sys/bus/iio/devices/iio:device1/***.
![IMU_DATA_SAMPLE](https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_PRO_IMU_Detect/reCamera_PRO_imu_dir.png)

## Leer datos

Ejecuta el siguiente comando para leer los datos en bruto correspondientes. El siguiente ejemplo muestra cómo leer los datos de aceleración del eje X:

``` bash
cat /sys/bus/iio/devices/iio:device1/in_accel_x_raw
```

## Obtener datos con Python

Se puede usar Python para obtener fácilmente los datos de la IMU. A continuación se muestra un ejemplo sencillo:

```python
#!/usr/bin/env python3
DEVICE = "/sys/bus/iio/devices/iio:device1"
with open(f"{DEVICE}/in_anglvel_scale", "r") as f:
    scale = float(f.read().strip())
with open(f"{DEVICE}/in_anglvel_x_raw", "r") as f:
    raw = int(f.read().strip())
gyro_x = raw * scale
print(f"Gyroscope X: {gyro_x:.6f} rad/s")
```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
