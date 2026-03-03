---
description: Xadow - IMU 6DOF
title: Xadow - IMU 6DOF
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_IMU_6DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Imu_6dof_01.jpg)

Xadow - IMU 6DOF es un módulo de seguimiento de movimiento. Su diseño se basa en el sensor MPU6050, que es el primer dispositivo integrado de seguimiento de movimiento de 6 ejes del mundo, que combina un giroscopio de 3 ejes, un acelerómetro de 3 ejes y un procesador de movimiento digital™ (DMP). El MPU6050 cuenta con tres convertidores analógico-digitales (ADC) de 16 bits para digitalizar las salidas del giroscopio y tres ADC de 16 bits para digitalizar las salidas del acelerómetro, por lo que Xadow - IMU 6DOF logra una alta precisión de conversión. Para el seguimiento preciso de movimientos tanto rápidos como lentos, las partes cuentan con un rango de escala completa del giroscopio programable por el usuario y un rango de escala completa del acelerómetro programable por el usuario.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-6DOF-p-1670.html)

## Especificaciones
---
- Voltaje de Funcionamiento: 3.3V
- Rango de Medición:
  - Rango de escala completa del giroscopio: ±250,. ±500,. ±1000,. ±2000°/seg
  - Rango de escala completa del acelerómetro：±2g, ±4g, ±8g, y ±16g.
- Modo de Control: I2C
- Dimensiones: 25.43mm x 20.35mm

## Demostración
---
Basándose en nuestra biblioteca disponible, puedes obtener valores de aceleración y giroscopio fácilmente. Ahora mostremos cómo usar el módulo.

**Conexión de Hardware：**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow-IMU_6DOF_installation.png)

Nota: cuando conectes Xadow IMU 6DOF a Xadow Main Board, la dirección de conexión debe ser cuidadosa. El método de conexión es que la esquina no rellena de un módulo Xadow se conecte al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).

**Código de Prueba：**
  
- Descarga [Xadow - IMU 6DOF  MPU6050 Library](https://github.com/Seeed-Studio/Xadow_IMU_6DOF) desde Github, e instala el archivo I2Cdev y el archivo MPU6050 en tu biblioteca de Arduino. Sobre la instalación de la biblioteca, por favor consulta [aquí](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) en la página wiki.
- Abre el ejemplo: **MPU6050_DMP6 por la ruta File - >Examples -> MPU6050 ->Examples->MPU6050_DMP6**.

```
#include <I2Cdev.h>//add necessary headfiles
#include <MPU6050.h>//add necessary headfiles
#include <Wire.h>
//====the offset of gyro===========
#define Gx_offset  -1.50
#define Gy_offset  0
#define Gz_offset  0.80
//====the offset of accelerator===========
#define Ax_offset -0.07
#define Ay_offset 0.02
#define Az_offset 0.14
//====================
MPU6050 accelgyro;

int16_t ax,ay,az;//original data;
int16_t gx,gy,gz;//original data;
float Ax,Ay,Az;//Unit g(9.8m/s^2)
float Gx,Gy,Gz;//Unit deg/s


void setup()
{
  Wire.begin();
  Serial.begin(9600);

  Serial.println("Initializing I2C device.....");
  accelgyro.initialize();

  Serial.println("Testing device connections...");
  Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful":"MPU6050 connection failure");
}
void loop()
{

  accelgyro.getMotion6(&ax,&ay,&az,&gx,&gy,&gz);//get the gyro and accelerator
   //==========accelerator================================
   Ax=ax/16384.00;//to get data of unit(g)
   Ay=ay/16384.00;//to get data of unit(g)
   Az=az/16384.00;//to get data of unit(g)
   Serial.println("Acce data.....");
   Serial.print(Ax+Ax_offset);
   Serial.print("   ");
   Serial.print(Ay+Ay_offset);
   Serial.print("   ");
   Serial.println(Az+Az_offset);
   //===============gyro================================
   Gx=gx/131.00;
   Gy=gy/131.00;
   Gz=gz/131.00;
   Serial.println("Gyro data.....");
   Serial.print(Gx+Gx_offset);
   Serial.print("   ");
   Serial.print(Gy+Gy_offset);
   Serial.print("   ");
   Serial.println(Gz+Gz_offset);
  //blinkState=!blinkState;
  //digitalWrite(LED_PIN,blinkState);
  delay(1000);//control time of sampling
}
```

- Sube el código a Xadow Main Board. Recuerda seleccionar 'Seeeduino Xadow' desde Tools ->Board. Abre el monitor serie para observar el valor de salida del sensor MPU6050.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow_IMU_6DOF_result.jpg)

En estado estático, el valor de salida del eje z es aproximadamente 0.98g, por lo que puedes referirte a esto para probar si tu sensor puede funcionar normalmente.

**Orientación de los Ejes**
El diagrama a continuación muestra la orientación de los ejes de sensibilidad y la polaridad de rotación.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/MPU6050_%E8%BD%B4%E5%90%91%E5%AE%9A%E4%BD%8D.png)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Xadow - IMU 6DOF](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip)
- [Hoja de datos del MPU6050](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/MPU6050.pdf)
- [Archivo de Biblioteca](https://github.com/Seeed-Studio/Xadow_IMU_6DOF)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>