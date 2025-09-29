---
description: Grove-Single Axis Analog Gyro
title: Grove-Single Axis Analog Gyro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Single_Axis_Analog_Gyro
last_update:
  date: 1/29/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Axis_Analog_Gyro_01.jpg)

El Grove – Signal Axis Analog Gyro está basado en un sensor de velocidad angular (Murata-ENC-03R) que utiliza el fenómeno de la fuerza de Coriolis. Solo puede medir la velocidad angular del eje X, lo cual es diferente de otros giroscopios de 3 ejes, pero con una mayor velocidad. Puede ser utilizado para el control de posición y control de actitud como el 2WD auto-balanceado.

Modelo: [SEN05091P](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## Características

- Voltaje de Entrada: 3.3V/5V

- Interfaz Grove Estándar

- Peso Ligero

- Alta Velocidad

- Mide la Velocidad Angular del Eje X

## Demostración

### Con [Arduino](https://www.arduino.cc/)

El módulo detecta la rotación de un eje con señal analógica.
Se aplican circuitos de filtro pasa-altos y pasa-bajos para reducir la deriva térmica y suprimir el ruido de salida.
Antes de la medición de la velocidad angular, se requiere un valor de referencia (la salida del sensor cuando la Velocidad Angular=0).
Este valor es 1.35V por defecto. Pero para obtener valores de referencia más precisos, antes de la medición, es necesaria una calibración.
En esta calibración, el voltaje de salida cuando la velocidad angular =0 se muestrea 200 veces,
y luego el promedio de estos datos será tratado como el valor de referencia.

1.Conéctalo al puerto A0 del [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/), por supuesto cualquier pin de los pines analógicos estaría bien.

2.Conecta el Grove - Base Shield al Arduino/Seeeduino y conéctalos a la PC usando un cable USB.

3.Sube el código de abajo. Por favor haz clic [aquí](https://seeeddoc.github.io/Upload_Code/) si no sabes cómo subir código.

``` c++
    int sensorPin = A0; // select the input pin for the sensor

    float reference_Value=0;

    int sensorValue = 0; // variable to store the value coming from the sensor

    void setup()
    {

        int i;
        float sum=0;
        pinMode(sensorPin, INPUT);
        Serial.begin(9600);
        Serial.println("Please do not rotate it before calibrate!");
        Serial.println("Get the reference value:");

    for(i=0;i<1000;i++)
    {
        // read the value from the sensor:
        sensorValue = analogRead(sensorPin);
        sum += sensorValue;
        delay(5);
    }
    reference_Value = sum/1000.0;
    Serial.println(reference_Value);
    Serial.println("Now you can begin your test!");
    }

    void loop()
    {
        double angularVelocity;
        sensorValue = analogRead(sensorPin);
        angularVelocity =((double)(sensorValue-reference_Value)*4930.0)/1023.0/0.67; //get the angular velocity
        Serial.print(angularVelocity);
        Serial.println("deg/s");
        Serial.println(" ");
        delay(10);
    }
```

4. Ahora, es momento de la calibración. <font color="#DC143C" face>Coloca el sensor en tu escritorio horizontalmente</font>
，y luego presiona el botón Reset en el Seeeduino, y después abre la herramienta serial:

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Gyro_Result.jpg)

5. Como puedes ver "Now you can begin your test", eso significa que la calibración está completa. Ahora puedes usar el sensor. La dirección de rotación puede referenciarse en la siguiente imagen:

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Rotate_direction.jpg)

### Con [Raspberry Pi](https://seeeddoc.github.io/GrovePiPlus/)

1. Deberías tener una raspberry pi y un grovepi o grovepi+.

2. Deberías haber completado la configuración del entorno de desarrollo, de lo contrario sigue [aquí](https://seeeddoc.github.io/GrovePiPlus/#Introducing_the_GrovePi.2B).

3. Conexión

- Conecta el sensor al socket A0 del grovepi usando un cable grove.

4. Navega al directorio de las demos:

  `cd yourpath/GrovePi/Software/Python/
`

- Para ver el código

```
    nano grovesingleaxisanaloggyro.py # "Ctrl+x" to exit #

    import time
    import grovepi

    #Connect the Grove Single Axis Analog Gyro to analog port A0
    #SIG,NC,VCC,GND
    sensor = 0

    grovepi.pinMode(sensor,"INPUT")

    #calibration
    print "calibrating..."

    sum = 0

    errors = 0

    for x in range(0, 100):

      try:
          #Get sensor value
          v = grovepi.analogRead(sensor)
          sum += v
          #time.sleep(.05)
      except IOError:
          print "Error"
          errors += 1

    if errors == 100:

       print "unable to calibrate"

       raise SystemExit

    reference_value = sum / (100 - errors)

    print "finished calibrating"
    print "reference_value =", reference_value

    #ready

    while True:
        try:
            #Get sensor value
            sensor_value = grovepi.analogRead(sensor)

            #Calculate angular velocity (deg/s)
            velocity = ((float)(sensor_value - reference_value) * 4930.0) / 1023.0 / 0.67

            print "sensor_value =", sensor_value, " velocity =", velocity
            time.sleep(.5)

        except IOError:
        print "Error"
```

5.Ejecuta la demostración.

` sudo python grovesingleaxisanaloggyro.py
`

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**[Eagle]**  [Grove - Signal Axis Analog Gyro Eagle](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip)

**[PDF]**  [Grove - Signal Axis Analog Gyro Sch](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20Sch.pdf)

**[PDF]**  [Grove - Signal Axis Analog Gyro PCB](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20PCB.pdf)

**[Hoja de Datos]** [Hoja de datos del Giroscopio Analógico de Un Solo Eje](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Analog_Gyro_datasheet.pdf)

**[Código]** [Código de demostración en github](https://github.com/Seeed-Studio/Grove_Single_Axis_Analog_Gyro)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
