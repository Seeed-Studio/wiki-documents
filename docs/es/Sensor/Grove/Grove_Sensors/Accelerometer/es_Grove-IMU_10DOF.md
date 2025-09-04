---
description: Grove - IMU 10DOF
title: Grove - IMU 10DOF
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-IMU_10DOF
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - IMU 10DOF es una combinación de Grove - IMU 9DOF y [Grove - Sensor de Barómetro (BMP180)](/Grove-Barometer_Sensor-BMP180/ "Grove - Sensor de Barómetro (BMP180)"). Este módulo está basado en MPU-9250 y BMP180, el MPU-9250 es un dispositivo de seguimiento de movimiento de 9 ejes que combina un giroscopio de 3 ejes, acelerómetro de 3 ejes, magnetómetro de 3 ejes y un Procesador de Movimiento Digital (DMP), y BMP180 es un sensor de presión digital de alta precisión y ultra bajo consumo para aplicaciones de consumo. Este módulo es muy adecuado para aplicaciones de teléfonos inteligentes, tabletas y dispositivos portátiles.


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)

Especificaciones


-   Interfaz I2C
-   Dirección I2C del MPU-9250 seleccionable
-   Bajo Consumo de Energía
-   I2C de Modo Rápido de 400kHz para comunicarse con todos los registros
-   Sensores de velocidad angular (giroscopios) de salida digital en ejes X, Y y Z con un rango de escala completa programable por el usuario de ±250, ±500, ±1000 y ±2000°/seg
-   Acelerómetro de 3 ejes de salida digital con un rango de escala completa programable de ±2g, ±4g, ±8g y ±16g
-   Magnetómetro de salida digital con un rango de escala completa de ±4800uT
-   Barómetro de salida digital con rango de 300 ~ 1100hPa (+9000m ~ -500m en relación al nivel del mar)
-   Dimensiones: 25.43mm x 20.35mm
- Dirección I2C: por defecto 0x68, consulte la Descripción General del Hardware para cambiar a 0x69.

:::note
    Si desea usar múltiples dispositivos I2C, consulte [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/)
:::
:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
## Plataformas Compatibles


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

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg" alt="pir" width={600} height="auto" /></p>

-   1：Pad de selección de dirección I2C del MPU-9250, por defecto conectado **a** y **b** la dirección es 0x68, si se conecta **b** y **c** la dirección es 0x69
-   2：Pin de interrupción del MPU-9250, la interrupción debe ser configurada, las fuentes de interrupción disponibles son: detección de movimiento, desbordamiento de fifo, datos listos, error del maestro i2c


## Primeros pasos

Proporcionaremos un ejemplo aquí para mostrarle cómo usar este sensor.


### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepare los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove-IMU_10DOF |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|

- **Paso 2.** Conecta Grove-IMU_10DOF al puerto **I2C** del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::
<!--I2C-->
| seeeduino_v4 | Grove-IMU_10DOF  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software

**Paso 1.** Descarga la [biblioteca](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF) desde Github.

**Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.


**Paso 3.** Abre el código directamente por la ruta: File -> Example -> IMU_10DOF_Test.


Aquí hay una parte del código:
```cpp

void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    Wire.begin();

    // initialize serial communication
    // (38400 chosen because it works as well at 8MHz as it does at 16MHz, but
    // it's really up to you depending on your project)
    Serial.begin(38400);

    // initialize device
    Serial.println("Initializing I2C devices...");
    accelgyro.initialize();
    Barometer.init();

    // verify connection
    Serial.println("Testing device connections...");
    Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");

    delay(1000);
    Serial.println("     ");

    //  Mxyz_init_calibrated ();

}

void loop()
{

    getAccel_Data();
    getGyro_Data();
    getCompassDate_calibrated(); // compass data has been calibrated here
    getHeading();               //before we use this function we should run 'getCompassDate_calibrated()' frist, so that we can get calibrated data ,then we can get correct angle .
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

    temperature = Barometer.bmp180GetTemperature(Barometer.bmp180ReadUT()); //Get the temperature, bmp180ReadUT MUST be called first
    pressure = Barometer.bmp180GetPressure(Barometer.bmp180ReadUP());//Get the temperature
    altitude = Barometer.calcAltitude(pressure); //Uncompensated caculation - in Meters
    atm = pressure / 101325;

    Serial.print("Temperature: ");
    Serial.print(temperature, 2); //display 2 decimal places
    Serial.println("deg C");

    Serial.print("Pressure: ");
    Serial.print(pressure, 0); //whole number only.
    Serial.println(" Pa");

    Serial.print("Ralated Atmosphere: ");
    Serial.println(atm, 4); //display 4 decimal places

    Serial.print("Altitude: ");
    Serial.print(altitude, 2); //display 2 decimal places
    Serial.println(" m");

    Serial.println();
    delay(1000);

}

```

**Paso 4.** Sube el código. Por favor selecciona el tipo de placa y puerto COM correctos.

Puedes ver:
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png" alt="pir" width={600} height="auto" /></p>

## Referencias
 - Orientación de los Ejes
El diagrama a continuación muestra la orientación de los ejes de sensibilidad y la polaridad de rotación.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

# Grove - IMU 10DOF v1.0
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - IMU 10DOF v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos


-  **[ZIP]** [Archivo eagle de Grove - IMU 10DOF v1.0](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip)
-  **[Eagle]** [Archivo eagle de Grove - IMU 10DOF v1.1](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip)
-  **[PDF]** [Archivo pdf de esquemáticos de Grove - IMU 10DOF v1.0](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0.pdf)
-  **[PDF]** [Archivo pdf de esquemáticos de Grove - IMU 10DOF v1.1](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove%20-%20IMU%2010DOF%20v1.1.pdf)
-  **[Library]** [Librería Grove-IMU_10DOF](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF)
-  **[PDF]** [Hoja de datos BMP180](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf)
-  **[PDF]** [Hoja de datos MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)


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
