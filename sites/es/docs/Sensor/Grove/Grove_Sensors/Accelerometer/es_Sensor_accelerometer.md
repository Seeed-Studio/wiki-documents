---
description: Sensor - Acelerómetro
title: Sensor - Acelerómetro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor_accelerometer
last_update:
  date: 1/5/2023
  author: shuxu hu
---
# Guía de Selección de Acelerómetros Seeed

Hemos lanzado varios tipos de sensores acelerómetros en los últimos años. Puede que encuentres difícil elegir entre ellos. ¡Entendemos tu situación y echemos un vistazo detallado a ellos para determinar cuál es el más adecuado para ti!

Para todos los sensores acelerómetros en nuestro bazar, por favor haz clic en [Etiqueta de Acelerómetro del Bazar](https://www.seeedstudio.com/tag/Accelerometer.html) para verificar.

## Qué es un Acelerómetro

Un acelerómetro es un sensor capaz de medir la aceleración de objetos. Durante el proceso de movimiento, el valor de aceleración se obtiene midiendo la fuerza inercial de la masa y la Segunda Ley de Newton. Según los diferentes elementos sensibles del sensor, los sensores de aceleración comunes incluyen capacitivos, inductivos, de deformación, piezorresistivos, piezoeléctricos y etc. Mediante la medición de la aceleración debida a la gravedad, puedes calcular el ángulo de inclinación del dispositivo relativo a la horizontal. Y también puedes determinar los movimientos del dispositivo analizando la aceleración dinámica.

Por ejemplo, recientemente una anciana estadounidense de noventa años dijo que después de experimentar un accidente de tráfico, la función de detección de caídas de un reloj inteligente salvó exitosamente su vida. Cuando salió de la tienda y se dirigía a casa, una mujer la derribó mientras conducía. En ese momento, la anciana no pudo encontrar el teléfono para llamar al servicio de emergencia, pero el reloj inteligente que llevaba puesto detectó que había caído y comenzó a pedir ayuda a su familia. Gracias a una nueva generación de tecnología de chip de sensor de aceleración MEMS de tres ejes y giroscopio, algunos relojes inteligentes ahora son capaces de reconocer una variedad de posturas de caída.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Accelerometer.png" />
  <p><b>Figura 1</b>. <i>Reloj inteligente con un acelerómetro de 3 ejes ( Imagen de Sensorexpert, 2015 )</i></p>
</div>

### Cómo funciona un acelerómetro

Existen dos formas en las que funciona un acelerómetro: Efecto piezoeléctrico, y Cambio en la Capacitancia. A continuación se muestra la ilustración:

#### Efecto piezoeléctrico

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Piezoelectric effect.png" />
  <p><b>Figura 2</b>. <i>Principio de funcionamiento del efecto piezoeléctrico ( Imagen de explainthatstuff, 2019 )</i></p>
</div>

Como se muestra en el modelo de la figura anterior, los acelerómetros contienen estructuras cristalinas microscópicas, generando voltajes cuando ocurren vibraciones, y luego el voltaje generado creará una lectura de cuánta aceleración hay.

#### Cambio en la Capacitancia

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Change in Capacitance.png" />
  <p><b>Figura 3</b>. <i>Principio de funcionamiento del Cambio en la Capacitancia ( Imagen de explainthatstuff, 2019 )</i></p>
</div>

Este método juega con la fórmula para encontrar la aceleración. Dado que sabemos que Fuerza = Masa x Aceleración, para encontrar la aceleración, tomará la Fuerza presente / Masa de un objeto.

Así es como funciona el efecto de capacitancia en un acelerómetro MEMS:

1. Están presentes 2 placas capacitivas.
2. La masa de un objeto presiona sobre una de las placas del capacitor, cambiando la capacitancia y permitiendo que se mida la fuerza.
3. Con la fuerza y la masa del objeto conocidas, finalmente se mide la aceleración.

## Campo de Aplicaciones

Existen numerosos usos de estos sensores acelerómetros. Particularmente, usando este tipo de sensores, los seres humanos pueden ser monitoreados y beneficiados o incluso salvados de diferentes condiciones. Por lo tanto, los sensores acelerómetros juegan roles importantes en varios sectores, que incluyen industria, medicina, aplicaciones sociales y aplicaciones domésticas para monitorear movimientos de una variedad de objetos.

| Campo de aplicación                                          | Función |
|--------------------------------|-----------------------------------------|
| Seguridad automotriz  | El sensor de aceleración se utiliza principalmente en el rendimiento de seguridad de las bolsas de aire de automóviles, sistemas de frenos antibloqueo, sistemas de control de tracción, etc. | Frecuencia cardíaca, EMG, GSR|
| Control de juegos | El sensor de aceleración puede detectar el cambio del ángulo de inclinación hacia arriba, abajo, izquierda y derecha, por lo que es muy simple controlar la dirección de adelante, atrás, izquierda y derecha de los objetos en el juego inclinando el dispositivo portátil hacia adelante y hacia atrás. |
| Volteo automático de imagen| Usar el sensor de aceleración para detectar la rotación y dirección del dispositivo portátil para lograr la normalización de la imagen a mostrar.|
| Función anti-vibración | Usar el sensor de aceleración para detectar la vibración / amplitud de sacudida del dispositivo portátil. Cuando la vibración / amplitud de sacudida es demasiado grande, bloquear el obturador de la cámara para que la imagen capturada siempre esté clara|
| Corrección de inclinación de brújula electrónica | El sensor magnético determina la dirección midiendo la magnitud del flujo magnético. Cuando el sensor magnético se inclina, el flujo geomagnético que pasa a través del sensor magnético cambiará, resultando en un error en la dirección. El principio de que el sensor de aceleración puede medir el ángulo de inclinación puede compensar la inclinación de la brújula electrónica.|
| Función de podómetro| El sensor de aceleración puede detectar la señal AC y la vibración del objeto. Cuando una persona camina, generará una cierta vibración regular, y el sensor de aceleración puede detectar el cruce por cero de la vibración, para así calcular el número de pasos dados por la persona o el número de pasos dados por el corredor. Calculando así el desplazamiento que la persona se mueve. Y usando una cierta fórmula se puede calcular el consumo de calorías.|
| Compensación para ángulo muerto del sistema de navegación GPS | El sistema GPS determina la posición del objeto recibiendo tres señales de satélite distribuidas a 120 grados. En algunas ocasiones especiales y formas de terreno, como túneles, edificios altos y áreas de selva, la señal GPS se volverá débil o incluso se perderá completamente. Este es el llamado callejón sin salida. Y al instalar un sensor de aceleración y la navegación inercial que hemos usado antes, se puede medir la zona muerta del sistema. Integrando el sensor de aceleración una vez se convierte en la cantidad de cambio de velocidad por unidad de tiempo, midiendo así el movimiento de objetos en la zona muerta.|

## Sensores Acelerómetros en Seeed

Hay varios acelerómetros en Seeed y la siguiente imagen ilustra un típico Grove - Acelerómetro Digital de 3 Ejes ±16g Ultra-bajo Consumo (BMA400):

![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg)
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### ¿Cuál es tu Preferencia?

|Nombre|Miniatura|Voltaje de operación|Rango de medición|Sensibilidad|Interfaz de entrada|Consumo de energía|Clic para comprar|
|----|-----|-----|------|------|------|-----|------|
|[Grove - Acelerómetro Digital de 3 Ejes ±16g Ultra-bajo Consumo (BMA400)](https://wiki.seeedstudio.com/es/Grove-3-Axis_Digital_Accelerometer%C2%B116g_Ultra-low_Power-BMA400/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg"/>|3.3V-5V|±2g,±4g,±8g,±16g|1024LSB/g@±2g 512LSB/g@±4g 256LSB/g@±8g 128LSB/g@±16g|I2C|18uA@5V 14uA@3.3V|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g-Ultra-low-Power-BMA400.html)|
|[Grove - Acelerómetro Digital de 3 Ejes(±16g)](https://wiki.seeedstudio.com/es/Grove-3-Axis_Digital_Accelerometer-16g/)|<img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Thumb.png" />|3V-5.5V|±16g|3.9mg / LSB|I2C|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html)|
|[Grove - Brújula de 3 Ejes V1.0](https://wiki.seeedstudio.com/es/Grove-3-Axis_Compass_V1.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/thumbnail.jpg" />|3.3V-5V|/|/|I2C|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass.html)|
|[Grove - Brújula Digital de 3 Ejes v2.0](https://wiki.seeedstudio.com/es/Grove-3-Axis_Digitial_Compass_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" />|3.3V-5V|/|/|I2C, SPI|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html)|
|[Grove - Acelerómetro Digital de 3 Ejes(±1.5g)](https://wiki.seeedstudio.com/es/Grove-3-Axis_Digital_Accelerometer-1.5g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />|3V-5.5V|±1.5g|21LSB/g|I2C|47μA@1 ODR|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)|
|[Grove - Acelerómetro Digital de 3 Ejes(±400g)](https://wiki.seeedstudio.com/es/Grove-3-Axis_Digital_Accelerometer-400g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/45d_small.jpg" />|3.3V-5V|±100g,±200g,±400g|/|I2C|300μA@3.3V|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-400g.html)|
|[Grove - Acelerómetro Analógico de 3 Ejes](https://wiki.seeedstudio.com/es/Grove-3-Axis_Analog_Accelerometer/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/thumb1.png" />|3V-5V|±3g|/|Analógico|350μA@3V|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)|
| [Grove - Giroscopio Digital de 3 Ejes](https://wiki.seeedstudio.com/es/Grove-3-Axis_Digital_Gyro/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Thumb3.png" />|3.3V-5V|/|14 LSBs por °/seg|I2C|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro.html)|
|[Grove - Acelerómetro y Giroscopio de 6 Ejes](https://wiki.seeedstudio.com/es/Grove-6-Axis_AccelerometerAndGyroscope/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Thumb4.png" />|3.3V-5V|±2,±4,±8,±16g|0.061(FS=±2) 0.122(FS=±4) 0.244(FS=±8) 0.488(FS=±16)mg/LSB|I2C|0.9μA3.3V 1.25μA@5V|[Comprar Ahora](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope.html)|
|[Grove - Acelerómetro y Brújula de 6 Ejes V2.0](https://wiki.seeedstudio.com/es/Grove-6-Axis_AccelerometerAndCompass_V2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" />|5V|±2g,±4g,±8g,±16g|/|I2C,SPI|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Compass-v2-0.html)|
|[Grove - IMU 9DOF v2.0](https://wiki.seeedstudio.com/es/Grove-IMU_9DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C,SPI|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-IMU-9DOF-v2-0.html)|
|[Grove - IMU 10DOF](https://wiki.seeedstudio.com/es/Grove-IMU_10DOF/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C|/|[Comprar Ahora](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|[Grove - IMU 10DOF v2.0](https://wiki.seeedstudio.com/es/Grove-IMU_10DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" />|3.3V-5V|±2g,±4g,±8g,±16g|/|I2C|2.7μA@1Hz|[Comprar Ahora](https://www.seeedstudio.com/Grove-IMU-10DOF-v2-0.html)|

### Aviso Importante

La tabla anterior muestra una variedad de atributos de cada acelerómetro con diferentes rangos de medición, sensibilidades y consumos de energía, puedes elegir el que mejor se adapte a ti. Además, si la interfaz de comunicación es una de las consideraciones al hacer preferencias, sugerimos que la comunicación SPI puede operar más rápido que I2C, lo cual puede ser una ventaja en algunas condiciones.

Para información más detallada de cada producto individual, por favor visita sus páginas propias a través de los enlaces ubicados junto a las imágenes de los productos.

## Recursos

- Referencia
  - [Historial de aplicación del sensor de aceleración de 3 ejes en el conteo de pasos de productos electrónicos.](http://old.sensorexpert.com.cn/Article/qiantansanzhoujiasud_1.html)
  - [Acelerómetros](https://www.explainthatstuff.com/accelerometers.html)

## Proyecto

**Velero de Control Remoto Plug 'n Play**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed' width='350'></iframe>

**Aplicación de Datos de Motocicleta**: ¡Aprende de tu viaje como un profesional! Los equipos de carreras de motocicletas han usado datos de IMU durante años, con RideData+Arduino es fácil para ti hacer lo mismo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

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
