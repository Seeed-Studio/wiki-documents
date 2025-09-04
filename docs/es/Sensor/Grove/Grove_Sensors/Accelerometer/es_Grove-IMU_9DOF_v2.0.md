---
description: Grove - IMU 9DOF v2.0
title: Grove - IMU 9DOF v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-IMU_9DOF_v2.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG" alt="pir" width={600} height="auto" /></p>

Grove - IMU 9DOF v2.0 es una versión mejorada del **Grove - IMU 9DOF v1.0** y es un módulo de seguimiento de movimiento de 9 ejes de alto rendimiento, que está basado en el MPU-9250. El MPU-9250 es un dispositivo integrado de seguimiento de movimiento de 9 ejes diseñado para los requisitos de bajo consumo, bajo costo y alto rendimiento de equipos electrónicos de consumo incluyendo teléfonos inteligentes, tabletas y sensores portátiles. El MPU-9250 cuenta con tres ADC de 16 bits para digitalizar las salidas del giroscopio y tres ADC de 16 bits para digitalizar las salidas del acelerómetro y tres ADC de 16 bits para digitalizar las salidas del magnetómetro.


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)

## Especificaciones


-   Interfaz I2C/SPI
-   I2C auxiliar
-   Bajo consumo de energía
-   I2C de modo rápido de 400kHz para comunicarse con todos los registros
-   Sensores de velocidad angular de 3 ejes de salida digital (giroscopios) con un rango de escala completa programable por el usuario de ±250, ±500, ±1000, y ±2000°/seg
-   Acelerómetro de 3 ejes de salida digital con un rango de escala completa programable de ±2g, ±4g, ±8g y ±16g
-   Acelerómetro de 3 ejes de salida digital con un rango de medición de escala completa de ±4800μT
- Dirección I2C: 0x68

:::note
    Si deseas usar múltiples dispositivos I2C, por favor consulta [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
## Plataformas Soportadas


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción del Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png" alt="pir" width={600} height="auto" /></p>

① - Interfaz Grove, conectar a I2C

② - Pad de selección I2C o SPI (por defecto es I2C), si quiere usar SPI, desconecte este pad

③ - Pad de selección de dirección, por defecto conectado b y c la dirección es 0x68, si conecta b y a la dirección es 0x69, si quiere usar SPI, desconecte este pad hacia cualquier lado.

④ - Interfaz SPI

⑤ - Datos serie maestros I2C auxiliares

⑥ - Reloj serie maestro I2C auxiliar

⑦ - Salida digital de interrupción

## Primeros pasos

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepare los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove-IMU_9DOF_v2.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

- **Paso 2.** Conecta Grove-IMU_9DOF_v2.0 al puerto **I2C** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::
| Seeeduino_v4 | Grove-IMU_9DOF_v2.0  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### Software

**Paso 1.** Descarga la [biblioteca](https://github.com/Seeed-Studio/Grove_IMU_9DOF/archive/master.zip). desde Github.

**Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.

**Paso 3.** Crea un nuevo sketch de Arduino y pega los códigos a continuación o abre el código directamente por la ruta: File -> Example ->IMU_9DOF_Demo_Compass_Calibrated->IMU_9DOF_Demo_Compass_Calibrated.

Aquí está la parte principal del código

```cpp

void setup() {
  // join I2C bus (I2Cdev library doesn't do this automatically)
  Wire.begin();

  // initialize serial communication
  // (38400 chosen because it works as well at 8MHz as it does at 16MHz, but
  // it's really up to you depending on your project)
  Serial.begin(38400);

  // initialize device
  Serial.println("Initializing I2C devices...");
  accelgyro.initialize();

  // verify connection
	Serial.println("Testing device connections...");
	Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");
	delay(1000);
	Serial.println("     ");

 //Mxyz_init_calibrated ();
}

void loop()
{   
	getAccel_Data();
	getGyro_Data();
	getCompassDate_calibrated(); // compass data has been calibrated here
	getHeading();				//before we use this function we should run 'getCompassDate_calibrated()' frist, so that we can get calibrated data ,then we can get correct angle .					
	getTiltHeading();           

	Serial.println("calibration parameter: ");
	Serial.print(mx_centre);
	Serial.print("         ");
	Serial.print(my_centre);
	Serial.print("         ");
	Serial.println(mz_centre);
	Serial.println("     ");


	Serial.println("Acceleration(g) of X,Y,Z:");
	Serial.print(Axyz[0]);
	Serial.print(",");
	Serial.print(Axyz[1]);
	Serial.print(",");
	Serial.println(Axyz[2]);
	Serial.println("Gyro(degress/s) of X,Y,Z:");
	Serial.print(Gxyz[0]);
	Serial.print(",");
	Serial.print(Gxyz[1]);
	Serial.print(",");
	Serial.println(Gxyz[2]);
	Serial.println("Compass Value of X,Y,Z:");
	Serial.print(Mxyz[0]);
	Serial.print(",");
	Serial.print(Mxyz[1]);
	Serial.print(",");
	Serial.println(Mxyz[2]);
	Serial.println("The clockwise angle between the magnetic north and X-Axis:");
	Serial.print(heading);
	Serial.println(" ");
	Serial.println("The clockwise angle between the magnetic north and the projection of the positive X-Axis in the horizontal plane:");
	Serial.println(tiltheading);
	Serial.println("   ");
	Serial.println("   ");
    Serial.println("   ");
	delay(300);
}
```

:::note Si no tenemos el shield base Grove, también podemos conectar directamente este módulo al Seeeduino LoRaWAN, pero necesitamos añadir tres líneas de código como se muestra en la imagen a continuación.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png" alt="pir" width={600} height="auto" /></p>


**Paso 4.** Sube el código y después de eso, puedes ver:
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg" alt="pir" width={600} height="auto" /></p>

En estado estático, el valor de salida del eje z es aproximadamente 0.98g, por lo que puedes usar esto como referencia para probar si tu sensor puede funcionar normalmente.

## Referencias

**Orientación de los Ejes**

El diagrama a continuación muestra la orientación de los ejes de sensibilidad y la polaridad de rotación. Nota el identificador del pin 1 (•) en la figura.

- Orientación de los Ejes de Sensibilidad y Polaridad de Rotación para Acelerómetro y Giroscopio

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg" alt="pir" width={600} height="auto" /></p>

- Orientación de los Ejes de Sensibilidad para Brújula

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg" alt="pir" width={600} height="auto" /></p>


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[Eagle&PDF]**  [Archivo Eagle de Grove - IMU 9DOF v2.0](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip)
- **[Librería]**  [Librería de Grove - IMU 9DOF v2.0](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove_IMU_9DOF_9250.zip)
- **[PDF]**  [Hoja de datos MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Product_Specification.pdf)
- **[PDF]**  [Mapa de Registros MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Reg_Map.pdf)

## Proyectos

**Prueba de velocidad de las funciones del MPU9150 usando un LinkIt ONE
**: Configuré este proyecto con la única intención de determinar el costo en milisegundos de las funciones estándar del MPU9150.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kg6hxm/speed-testing-the-mpu9150-s-functions-using-a-linkit-one-181c67/embed' width='350'></iframe>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

