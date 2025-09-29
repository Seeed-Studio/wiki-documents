---
description: Xadow - Acelerómetro Digital de 3 Ejes (±400g)
title: Xadow - Acelerómetro Digital de 3 Ejes (±400g)
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow_3Axis_Accelerometer400g.jpg)

El H3LIS331DL es un acelerómetro lineal de 3 ejes de alto rendimiento y bajo consumo perteneciente a la familia "nano", con salida estándar de interfaz serie digital I2C. El dispositivo cuenta con modos operacionales de ultra bajo consumo que permiten ahorro avanzado de energía y funciones inteligentes de suspensión para despertar. El H3LIS331DL tiene escalas completas seleccionables dinámicamente por el usuario de ±100g/±200g/±400g y es capaz de medir aceleraciones con tasas de datos de salida desde 0.5 Hz hasta 1 kHz.

## Características
---
- Amplio rango de alimentación DC2.2V a 3.6V
- Contorno Xadow
- Detección de 3 ejes
- Paquete pequeño y de perfil bajo: 3×3×1mm TFLGA
- Bajo consumo 300µA a 3.3V (típico)
- ±100g /±200g /±400g escala completa seleccionable dinámicamente
- Interfaz de salida digital I2C (dirección = 0xE7)
- Supervivencia a choques altos de 10000 g
- ECOPACK®RoHS y cumplimiento "Verde"

## Ideas de Aplicación

- Detector de choques
- Reconocimiento y registro de impactos
- Detección de conmociones

## Uso
---
A continuación te mostramos cómo leer los datos en bruto de este acelerómetro.
Como otros módulos Xadow, necesitas conectar el Acelerómetro de 3 Ejes Xadow a la Placa Principal Xadow antes de cargar el código de prueba a la Placa Principal Xadow para obtener la información del Acelerómetro.

La instalación del hardware:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow-3-Axis_Digital_Accelerometer_Connection.jpg)

:::note
    Cuando conectes el Acelerómetro de 3 Ejes Xadow a la Placa Principal Xadow, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo xadow).
:::
Después de cargar el código, abre el monitor serie para observar el resultado de la prueba. Las salidas de este sensor son información de aceleración de 3 ejes que se convierte a la unidad de gravedad, "g".

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Raw_data_of_H3LIS331DL.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle del Xadow - Acelerómetro Digital de 3 Ejes (±400g)](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip)
- [Repositorio Github para el Acelerómetro Digital de 3 Ejes (±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>