---
description: Grove - IMU 9DOF(lcm20600+AK09918)
title: Grove - IMU 9DOF(lcm20600+AK09918)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-IMU_9DOF-lcm20600+AK09918
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/Main.jpg" alt="pir" width={600} height="auto" /></p>

 El Grove - IMU 9DOF (lcm20600+AK09918) es una [IMU](https://en.wikipedia.org/wiki/Inertial_measurement_unit) (unidad de medición inercial) de 9 Grados de Libertad que combina giroscopio, acelerómetro y brújula electrónica. Utilizamos dos chips LCM20600+AK09918 para implementar esas 3 funciones.

 El LCM20600 es un dispositivo de seguimiento de movimiento de 6 ejes que combina un giroscopio de 3 ejes y un acelerómetro de 3 ejes. El [giroscopio](https://en.wikipedia.org/wiki/Gyroscope) es un dispositivo utilizado para medir o mantener la orientación y velocidad angular, normalmente lo usamos para medir giro y torsión. El [acelerómetro](https://en.wikipedia.org/wiki/Accelerometer) es un dispositivo que mide la aceleración propia.

 El AK09918 es un IC de [brújula electrónica](https://en.wikipedia.org/wiki/Magnetometer) de 3 ejes con tecnología de sensor Hall de alta sensibilidad. Utilizamos una brújula electrónica para medir la fuerza magnética, que puede proporcionarnos información de dirección.

 Como su nombre sugiere, solo usa este pequeño módulo individual y puedes medir 9 Grados de Libertad: rotación angular en los ejes x/y/z, aceleración en los ejes x/y/z, y fuerza magnética en los ejes x/y/z.

 ¡Qué módulo tan increíble! Solo usa este módulo para construir tu propio sistema de movimiento y orientación😄

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html)

## Características

- Giroscopio de 3 ejes con FSR programable de ±250 dps, ±500 dps, ±1000 dps, y ±2000 dps
- Acelerómetro de 3 ejes con FSR programable de ±2g, ±4g, ±8g, y ±16g
- Brújula electrónica de 3 ejes con sensibilidad de 0.15 μT/LSB (típica)
- Interrupciones programables por el usuario
- Resolución ADC de 16 bits y filtros programables para mediciones de aceleración
- Resolución ADC de 16 bits para mediciones magnéticas
- Buffer FIFO de 1 KB permite al procesador de aplicaciones leer los datos en ráfagas (LCM20600)
- Sensor de temperatura integrado
- Función de monitoreo de desbordamiento del sensor magnético
- Oscilador integrado para fuente de reloj interno

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de operación|3.3V / 5V|
|Temperatura de operación|-30°C a +85°C|
|Rango de escala completa del giroscopio|±250 dps, ±500 dps, ±1000 dps, ±2000 dps|
|Factor de escala de sensibilidad del giroscopio|131 LSB/(dps)@±250 dps 65.5 LSB/(dps)@±500 dps 32.8 LSB/(dps)@±1000 dps 16.4 LSB/(dps)@±2000 dps|
|Rango de escala completa del acelerómetro|±2g, ±4g, ±8g, ±16g|
|Factor de escala de sensibilidad del acelerómetro|16384 LSB/g@±2g / 8192 LSB/g@±4g / 4096 LSB/g@±8g  /  2048 LSB/g@±16g|
|Rango de medición del sensor magnético|±4912μT (típico)|
|Sensibilidad del sensor magnético|0.15μT (típico)|
|Interfaz|I^2^C|
|Dirección I^2^C|**LCM20600** /  0x69(predeterminada) /  0x68(opcional) /  **AK09918**  /  0x0C|

## Aplicaciones

- Teléfonos inteligentes y tabletas
- Sensores portátiles

## Descripción general del hardware

### Distribución de pines

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/pin_map_back.jpg" alt="pir" width={600} height="auto" /></p>

:::danger
        La dirección I2C predeterminada del LCM20600 es 0x69, puedes cambiarla a 0x68. La almohadilla central está conectada al cable de dirección, puedes cambiar la dirección I2C cortando el cable y volviéndolo a soldar. Por la seguridad tuya y de otros, ten cuidado con el cuchillo o pistola de soldar que puedas usar.
:::

### Esquemático

**Alimentación**
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

Dado que el rango de voltaje de operación del LCM20600 es de 1.71V a 3.45V, y el rango de voltaje de operación del AK09918 es de 1.65V a 1.95V, utilizamos un chip de conversión de energía **XC6206P182MR** para proporcionar un 1.8V estable para ambos chips.

**Circuito de desplazador de nivel bidireccional**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

Este es un circuito típico de desplazador de nivel bidireccional para conectar dos secciones de voltaje diferentes de un bus I^2^C. El bus I<sup>2</sup>C de los dos chips usa 1.8V, si el bus I<sup>2</sup>C del Arduino usa 5V o 3.3V, este circuito será necesario. En el esquemático anterior, **Q1** y **Q2** son MOSFET de canal N [CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - IMU 9DOF |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - IMU 9DOF (lcm20600+AK09918) al puerto **I^2^C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Grove - IMU 9DOF       |
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| SDA           | Blanco                  |
| SCL           | Amarillo                |

#### Software

:::note
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Grove - IMU 9DOF (lcm20600+AK09918)](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove IMU 9DOF ICM20600 AK09918 --> compass**.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path.jpg" alt="pir" width={600} height="auto" /></p>

    2. Ábrelo en tu computadora haciendo clic en **compass.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_ICM20600_AK09918-master\examples\compass**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

    3. O, simplemente puedes hacer clic en el icono
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "AK09918.h"
#include "ICM20600.h"
#include <Wire.h>

AK09918_err_type_t err;
int32_t x, y, z;
AK09918 ak09918;
ICM20600 icm20600(true);
int16_t acc_x, acc_y, acc_z;
int32_t offset_x, offset_y, offset_z;
double roll, pitch;
// Find the magnetic declination at your location
// http://www.magnetic-declination.com/
double declination_shenzhen = -2.2;

void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    Wire.begin();

    err = ak09918.initialize();
    icm20600.initialize();
    ak09918.switchMode(AK09918_POWER_DOWN);
    ak09918.switchMode(AK09918_CONTINUOUS_100HZ);
    Serial.begin(9600);

    err = ak09918.isDataReady();
    while (err != AK09918_ERR_OK) 
    {
        Serial.println("Waiting Sensor");
        delay(100);
        err = ak09918.isDataReady();
    }

    Serial.println("Start figure-8 calibration after 2 seconds.");
    delay(2000);
    calibrate(10000, &offset_x, &offset_y, &offset_z);
    Serial.println("");
}

void loop()
{
    // get acceleration
    acc_x = icm20600.getAccelerationX();
    acc_y = icm20600.getAccelerationY();
    acc_z = icm20600.getAccelerationZ();

    Serial.print("A:  ");
    Serial.print(acc_x);
    Serial.print(",  ");
    Serial.print(acc_y);
    Serial.print(",  ");
    Serial.print(acc_z);
    Serial.println(" mg");

    Serial.print("G:  ");
    Serial.print(icm20600.getGyroscopeX());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeY());
    Serial.print(",  ");
    Serial.print(icm20600.getGyroscopeZ());
    Serial.println(" dps");

    ak09918.getData(&x, &y, &z);
    x = x - offset_x;
    y = y - offset_y;
    z = z - offset_z;

    Serial.print("M:  ");
    Serial.print(x);
    Serial.print(",  ");
    Serial.print(y);
    Serial.print(",  ");
    Serial.print(z);
    Serial.println(" uT");

    // roll/pitch in radian
    roll = atan2((float)acc_y, (float)acc_z);
    pitch = atan2(-(float)acc_x, sqrt((float)acc_y*acc_y+(float)acc_z*acc_z));
    Serial.print("Roll: ");
    Serial.println(roll*57.3);
    Serial.print("Pitch: ");
    Serial.println(pitch*57.3);

    double Xheading = x * cos(pitch) + y * sin(roll) * sin(pitch) + z * cos(roll) * sin(pitch);
    double Yheading = y * cos(roll) - z * sin(pitch);
    

    double heading = 180 + 57.3*atan2(Yheading, Xheading) + declination_shenzhen;

    Serial.print("Heading: ");
    Serial.println(heading);
    Serial.println("--------------------------------");
  
    delay(500);
    
}

void calibrate(uint32_t timeout, int32_t *offsetx, int32_t *offsety, int32_t*offsetz)
{
  int32_t value_x_min = 0;
  int32_t value_x_max = 0;
  int32_t value_y_min = 0;
  int32_t value_y_max = 0;
  int32_t value_z_min = 0;
  int32_t value_z_max = 0;
  uint32_t timeStart = 0;

  ak09918.getData(&x, &y, &z);

  value_x_min = x;
  value_x_max = x;
  value_y_min = y;
  value_y_max = y;
  value_z_min = z;
  value_z_max = z;
  delay(100);

  timeStart = millis();
  
  while((millis() - timeStart) < timeout)
  {
    ak09918.getData(&x, &y, &z);
    
    /* Update x-Axis max/min value */
    if(value_x_min > x)
    {
      value_x_min = x;
      // Serial.print("Update value_x_min: ");
      // Serial.println(value_x_min);

    } 
    else if(value_x_max < x)
    {
      value_x_max = x;
      // Serial.print("update value_x_max: ");
      // Serial.println(value_x_max);
    }

    /* Update y-Axis max/min value */
    if(value_y_min > y)
    {
      value_y_min = y;
      // Serial.print("Update value_y_min: ");
      // Serial.println(value_y_min);

    } 
    else if(value_y_max < y)
    {
      value_y_max = y;
      // Serial.print("update value_y_max: ");
      // Serial.println(value_y_max);
    }

    /* Update z-Axis max/min value */
    if(value_z_min > z)
    {
      value_z_min = z;
      // Serial.print("Update value_z_min: ");
      // Serial.println(value_z_min);

    } 
    else if(value_z_max < z)
    {
      value_z_max = z;
      // Serial.print("update value_z_max: ");
      // Serial.println(value_z_max);
    }
    
    Serial.print(".");
    delay(100);

  }

  *offsetx = value_x_min + (value_x_max - value_x_min)/2;
  *offsety = value_y_min + (value_y_max - value_y_min)/2;
  *offsetz = value_z_min + (value_z_max - value_z_min)/2;
}
```

:::note
        Hay 3 demos en la biblioteca:  
        **test_6axis**
        >Este ejemplo muestra cómo obtener datos del giroscopio y aceleración del ICM20600.  
        
        **test_magnet**  
        >Este ejemplo muestra cómo obtener datos magnéticos del AK09918.  
        
        **compass**  
        >Este ejemplo obtiene datos magnéticos y de aceleración, para calcular pitch y roll, y crear una aplicación de brújula.
:::

- **Paso 4.** Sube la demo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Tool-> Serial Monitor**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **9600**.

:::success
     Si todo va bien, cuando abras el Monitor Serie, aparecerá el aviso--*Start figure-8 calibration after 2 seconds.*  Lo que significa que para calibrar este módulo, debes moverlo y dibujar la trayectoria del número 8 en el aire. Cuando aparezcan los ".......", puedes comenzar tu calibración.
:::

```cpp
Start figure-8 calibration after 2 seconds.
.......................................................................
A:  -362,  -205,  738 mg
G:  -45,  12,  -1 dps
M:  -6,  -23,  -33 uT
Roll: -15.53
Pitch: 25.30
Heading: 23.99
--------------------------------
A:  -269,  583,  61 mg
G:  102,  377,  -2 dps
M:  18,  -21,  -18 uT
Roll: 84.03
Pitch: 24.65
Heading: 215.58
--------------------------------
A:  -495,  229,  37 mg
G:  -43,  -231,  201 dps
M:  7,  -30,  6 uT
Roll: 80.83
Pitch: 64.90
Heading: 21.76
--------------------------------

```

:::note
        Como puedes ver, el resultado del ejemplo de brújula incluye tres parámetros: roll, pitch y Heading. Estos son la terminología de **[ángulos de Euler](https://en.wikipedia.org/wiki/Euler_angles)**(haz clic para verificar más información).
:::

#### Tabla de funciones

|Función|Descripción|
|---|---|
|**ICM20600**||
|initialize()|Inicializa el chip LCM20600, por defecto: el rango de medición del giroscopio es ±2000 dps / el rango de medición del acelerómetro es ±16g|
|setGyroScaleRange(gyro_scale_type_t range)|Después de la inicialización, puedes establecer el rango del giroscopio para satisfacer tus propias necesidades, la lista de parámetros gyro_scale_type_t range: **RANGE_250_DPS** / **RANGE_500_DPS** / **RANGE_1K_DPS** / **RANGE_2K_DPS**  / ej. /  **icm20600.setGyroScaleRange(RANGE_1K_DPS);** / esta línea de código cambiará el rango de medición del giroscopio a ±1000dps|
|setAccScaleRange(acc_scale_type_t range)|Después de la inicialización, puedes establecer el rango del acelerómetro para satisfacer tus propias necesidades, la lista de parámetros acc_scale_type_t range: **RANGE_2G** / **RANGE_4G** / **RANGE_8G** / **RANGE_16G**  / ej. /  **icm20600.setAccScaleRange(RANGE_8G);** / esta línea de código cambiará el rango de medición del acelerómetro a ±8g|
|getGyroscope(int16_t*x, int16_t* y, int16_t* z))|Puedes usar esta función para obtener los datos de los 3 ejes X/Y/Z del giroscopio al mismo tiempo, y la unidad de los datos es **dps**|
|getGyroscopeX(void)  getGyroscopeY(void)  getGyroscopeZ(void)|O, puedes obtener los datos de los 3 ejes X/Y/Z del giroscopio por separado usando esas tres funciones, y la unidad de los datos es **dps** |
|getRawGyroscopeX(void)  getRawGyroscopeX(void)  getRawGyroscopeX(void)|Esas tres funciones obtienen los datos en bruto directamente del registro del ICM20600 sin convertir la unidad de datos a **dps**|
|getAcceleration(int16_t*x, int16_t* y, int16_t* z)|Puedes usar esta función para obtener la aceleración de los 3 ejes X/Y/Z al mismo tiempo, y la unidad de los datos es **mg**|
|getAccelerationX(void)  getAccelerationY(void)  getAccelerationZ(void)|O, puedes obtener la aceleración de los 3 ejes X/Y/Z por separado usando esas tres funciones, y la unidad de los datos es **mg** |
|getRawAccelerationX(void)  getRawAccelerationY(void)  getRawAccelerationZ(void)|Esas tres funciones obtienen los datos en bruto directamente del registro del ICM20600 sin convertir la unidad de datos a **mg**|
|getTemperature(void)|Puedes usar esta función para obtener la temperatura|
|**AK09918**||
|getData(int32_t *axis_x, int32_t*axis_y, int32_t *axis_z)  |Puedes usar esta función para obtener la fuerza magnética de los 3 ejes.|

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - IMU 9DOF (lcm20600+AK09918) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/Grove%20-%20IMU%209DOF%20(ICM20600%20%26%20AK09918).zip)

- **[Zip]** [Librería Seeed ICM20600+AK09918](https://github.com/Seeed-Studio/Seeed_ICM20600_AK09918/archive/master.zip)

- **[PDF]** [Hoja de datos del ICM-20600](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/ICM-20600.pdf)

- **[PDF]** [Hoja de datos del AK09918](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/AK09918.pdf)

- **[PDF]** [Hoja de datos del CJ2102](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF-lcm20600_AK09918/res/CJ2102.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
