---
description: Xadow - IMU 10DOF
title: Xadow - IMU 10DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_IMU_10DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-imu-10dof-shao.JPG)

Xadow - IMU 10DOF es una combinación de [Xadow - IMU 9DOF](https://wiki.seeedstudio.com/es/Xadow_IMU_9DOF) y [Xadow - Barometer BMP180](https://wiki.seeedstudio.com/es/Xadow_Barometer_BMP180). Este módulo está basado en MPU-9250 y BMP180, el MPU-9250 es un dispositivo de seguimiento de movimiento de 9 ejes que combina un giroscopio de 3 ejes, acelerómetro de 3 ejes, magnetómetro de 3 ejes y un Procesador de Movimiento Digital (DMP), y BMP180 es un sensor de presión digital de alta precisión y ultra bajo consumo para aplicaciones de consumo. Este módulo es muy adecuado para aplicaciones de teléfonos inteligentes, tabletas y dispositivos portátiles.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-10DOF-p-2446.html)

## Especificaciones
---
- Interfaz I2C
- Dirección I2C del MPU-9250 seleccionable
- Bajo consumo de energía
- I2C de modo rápido de 400kHz para comunicarse con todos los registros
- Sensores de velocidad angular (giroscopios) de salida digital en ejes X, Y y Z con rango de escala completa programable por el usuario de ±250, ±500, ±1000 y ±2000°/seg
- Acelerómetro de 3 ejes de salida digital con rango de escala completa programable de ±2g, ±4g, ±8g y ±16g
- Magnetómetro de salida digital con rango de escala completa de ±4800uT
- Barómetro de salida digital con rango de 300 ~ 1100hPa (+9000m ~ -500m relativo al nivel del mar)
- Dimensiones: 25.43mm x 20.35mm

## Función de la Interfaz
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_Interface.png)

- ①：Pad de selección de dirección I2C del MPU-9250 (por defecto 0x68)
- ②：Contacto inferior FPC de 12P

## Uso
---
Proporcionaremos un ejemplo aquí para mostrarle cómo usar este sensor.

**Instalación de Hardware**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_installation.png)

:::note
    Al conectar Xadow - IMU 10DOF a Xadow - Main Board, debe preocuparse por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (vea las cuatro esquinas de cada módulo Xadow).
:::
**Parte de Software**
1. Descargue la biblioteca desde [https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF](https://github.com/Seeed-Studio/IMU_10DOF)
2. Descomprímala en el archivo de bibliotecas del IDE de Arduino por la ruta
2. Abra el código directamente por la ruta: **File -> Example -> IMU_10DOF_Test**
2. Cargue el código. Tenga en cuenta que debe seleccionar el tipo de placa correcto y el puerto COM.

Puede ver:

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-test.png)

**Orientación de los Ejes**

El diagrama a continuación muestra la orientación de los ejes de sensibilidad y la polaridad de rotación.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-dir-axes.png)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo eagle de Xadow - IMU 10DOF v1.0](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip)
- [Biblioteca IMU 10DOF](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/IMU_10DOF_Library.zip)
- [Hoja de datos BMP180](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/BMP180.pdf)
- [Hoja de datos MPU-9250](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>