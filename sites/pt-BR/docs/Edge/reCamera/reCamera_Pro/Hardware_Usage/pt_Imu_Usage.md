---
description: Este wiki fornecerá uma breve introdução sobre como obter os dados da IMU no dispositivo.
title: Uso da IMU do reCamera Pro
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
updatedAt: '2026-07-9'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_imu_usage/
---

# Uso da IMU
O modelo de IMU equipado no dispositivo é o ICM-42670-P, um sensor de 6 eixos que integra um acelerômetro de 3 eixos e um giroscópio de 3 eixos. O giroscópio do ICM-42670-P suporta faixas de medição de ±250 / ±500 / ±1000 / ±2000 dps, enquanto o acelerômetro suporta faixas de ±2 / ±4 / ±8 / ±16 g. Seus dados internos são fornecidos em formato de complemento de dois de 16 bits.
## Caminho dos dados
O reCamera PRO usa o driver IIO padrão para a IMU, portanto os dados brutos podem ser obtidos diretamente por meio das interfaces IIO.
Os arquivos de dados brutos podem ser encontrados no diretório ***/sys/bus/iio/devices/iio:device1/***.

## Ler dados
Execute o seguinte comando para ler os dados brutos correspondentes. O exemplo abaixo demonstra a leitura dos dados de aceleração do eixo X:
``` bash
cat /sys/bus/iio/devices/iio:device1/in_accel_x_raw
```
## Obter dados com Python
Python pode ser usado para obter facilmente os dados da IMU. Abaixo está um exemplo simples:
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


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>