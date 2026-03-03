---
description: Xadow - IMU 9DOF
title: Xadow - IMU 9DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_IMU_9DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_9dof.jpg)
Xadow - IMU 9DOF es un módulo de seguimiento de movimiento de 9 ejes de alto rendimiento, que está basado en el MPU-9150. El MPU-9150 es el primer dispositivo integrado de seguimiento de movimiento de 9 ejes del mundo diseñado para los requisitos de bajo consumo, bajo costo y alto rendimiento de equipos electrónicos de consumo incluyendo smartphones, tablets y sensores portátiles. El MPU-9150 cuenta con tres ADC de 16 bits para digitalizar las salidas del giroscopio y tres ADC de 16 bits para digitalizar las salidas del acelerómetro y tres ADC de 13 bits para digitalizar las salidas del magnetómetro.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-9DOF-p-1776.html)

## Especificaciones
---
- Interfaz I2C
- Bajo costo
- I2C de Modo Rápido de 400kHz para comunicarse con todos los registros
- Sensores de velocidad angular (giroscopios) de salida digital en ejes X, Y y Z con un rango de escala completa programable por el usuario de ±250, ±500, ±1000 y ±2000°/seg
- Acelerómetro de 3 ejes de salida digital con un rango de escala completa programable de ±2g, ±4g, ±8g y ±16g
- Sensor magnético de efecto Hall monolítico de silicio de 3 ejes con concentrador magnético


## Función de la Interfaz
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_-_IMU_9DOF.jpg)

- ①：Contacto inferior FPC de 12P
- ②：Resistencia de selección de dirección：R4,R5（la dirección por defecto es 0x68）
  - La dirección es 0x68: R4 no está soldada.
  - La dirección es 0x69: R5 no está soldada.

## Uso
---
Basado en la librería, podemos mostrar el valor de Acelerómetro y Giroscopio y Magnetómetro en el monitor serie. Ahora mostremos cómo usar el módulo.

**Instalación de Hardware**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/IMU_9DOF.jpg)

La instalación de hardware es muy fácil, se puede conectar a la Placa Principal Xadow mediante cable FPC.

**Parte de Software**
1. Descarga la librería [libraries.zip](https://github.com/Seeed-Studio/Grove_IMU_9DOF);
2. Descomprime las librerías en el archivo de librerías del IDE de Arduino por la ruta: ..\arduino-1.0.5\libraries.
3. Descomprime el archivo IMU_9D0F_Demo en el archivo de librerías del IDE de Arduino por la ruta: ..\arduino-1.0.5\libraries.
4. Abre el código directamente por la ruta: File -> Example -> IMU_9D0F_Demo
5. Sube el código. Nota que debes seleccionar el tipo de placa correcto y el puerto COM.
6. Puedes ver:

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/9DOF_Serial_Monitor.jpg)

En estado estático, el valor de salida del eje Z es aproximadamente 0.98g, así que puedes referirte a esto para probar si tu sensor puede funcionar normalmente.

**Orientación de los Ejes**

El diagrama de abajo muestra la orientación de los ejes de sensibilidad y la polaridad de rotación.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/MPU9150.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Xadow_IMU_9DOF_Eagle_File.zip](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip)
- [Archivo PDF del Esquema Xadow_IMU_9DOF](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Sch_Of_Xadow-IMU_9DOF_v1.0.pdf)
- [MPU_9150_Datasheet.pdf](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/MPU-9150.pdf)

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