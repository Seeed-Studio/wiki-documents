---
description: Grove - Acelerómetro Digital de 3 Ejes (±16g)
title: Grove - Acelerómetro Digital de 3 Ejes (±16g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Digital_Accelerometer-16g
last_update:
  date: 1/5/2023
  author: shuxu hu
---

---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove-3-Axis_16g_v1.3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove-3-Axis_16g_v1.3.jpg" alt="pir" width={600} height="auto" /></p>


El Acelerómetro Digital de 3 Ejes es la parte clave en proyectos como detección de orientación, detección de gestos y detección de movimiento. Este Acelerómetro Digital de 3 Ejes (±16g) está basado en el IC de bajo consumo de energía ADXL345. Cuenta con una capacidad de supervivencia a impactos altos de hasta 10,000g y una tasa configurable de muestras por segundo. Para aplicaciones generosas que no requieren un rango de medición demasiado grande, esta es una excelente opción porque es duradero, ahorra energía y es rentable.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)


## Especificaciones
---
- Voltaje de funcionamiento: 3.0 - 5.5V
- Rango de prueba: ±16
- Sensibilidad: 3.9mg / LSB
- Corriente en espera: 0.1μA（Bajo modo de espera Vcc = 2.5 V (típico)）
- Capacidad de supervivencia a impactos altos de 10000 g
- Cumple con ECOPACK®RoHS y "Verde"
- Biblioteca compatible con Suli

:::tip
    - Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
## Demostración
---
**Con Arduino**

Cada acelerómetro ha sido probado individualmente antes de enviárselo. Pero en casos raros, podría necesitar restablecer el desplazamiento cero por sí mismo.
Aquí abajo le mostramos cómo leer los datos en bruto y obtener datos en la unidad de g, también conocida como fuerza g, de este acelerómetro.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove_-_3-Axis_Digital_Accelerometer_ADXL345_connect_photo.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove_-_3-Axis_Digital_Accelerometer_ADXL345_connect_photo.JPG" alt="pir" width={600} height="auto" /></p>

- **Paso1:** Conéctelo al puerto I2C de su Grove - Base Shield.
- **Paso2:** Descargue la [Biblioteca del Acelerómetro Digital(±16g)](https://github.com/Seeed-Studio/Accelerometer_ADXL345) .zip y desempáquela en arduino-1.0\libraries en su carpeta de instalación de Arduino. Si no sabe cómo instalar una biblioteca para Arduino, siga el tutorial [Cómo instalar una biblioteca de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/)
- **Paso3：** Si tiene la biblioteca instalada, abra el código de demostración directamente por la ruta:
** File(archivo) -> Example(ejemplo) ->DigitalAccelerometer_ADXL345->ADXL345_demo_code. **
- **Paso4：** Cargue el código y abra el monitor serie (usualmente está en la esquina superior derecha). Consulte el tutorial [Cargar código](https://wiki.seeedstudio.com/es/Upload_Code/) si no sabe cómo cargar.
- **Paso5：** El resultado se mostrará como el formato en la imagen de abajo, agite el grove y encontrará que el número cambia.

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Digital_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Digital_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

Las salidas de este sensor consisten en dos partes: datos en bruto e información de aceleración de 3 ejes convertida a la unidad de gravedad, "g".

### Jugar con Codecraft

#### Hardware

**Paso 1.** Usando un cable Grove conecte Grove - Acelerómetro Digital de 3 Ejes (±16g) al puerto I2C del Seeeduino. Si está usando Arduino, aproveche un Base Shield.

**Paso 2.** Conecte Seeedino/Arduino a su PC mediante un cable USB.

#### Software

**Paso 1.** Abra [Codecraft](https://ide.chmakered.com/), agregue soporte para Arduino, y arrastre un procedimiento principal al área de trabajo.

:::note
    Si esta es su primera vez usando Codecraft, vea también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastre bloques como en la imagen de abajo o abra el archivo cdc que se puede descargar al final de esta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/img/cc_3_Axis_Digital_Accelerometer.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/img/cc_3_Axis_Digital_Accelerometer.png" alt="pir" width={600} height="auto" /></p>

Cargue el programa a su Arduino/Seeeduino.

:::success
    Cuando el código termine de cargarse, verá la aceleración mostrada en el Monitor Serie. 
:::
**Con Raspberry Pi**

- **Paso1:** Debería tener una raspberry pi y un grovepi o grovepi+.

- **Paso2:** Debería haber completado la configuración del entorno de desarrollo, de lo contrario siga [aquí](https://wiki.seeedstudio.com/es/GrovePi_Plus/#Introducing_the_GrovePi.2B).

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9-create-tab.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9-create-tab.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9_newfile.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9_newfile.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso3:** Conexión
   - Conecte el sensor al socket i2c-x(1~3) del grovepi usando un cable grove.

- **Paso4:** Navegue al directorio de demostraciones:

```python
cd yourpath/GrovePi/Software/Python/
```

Para ver el código

```
  nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```python
import smbus
from time import sleep

# select the correct i2c bus for this revision of Raspberry Pi
revision = ([l[12:-1] for l in open('/proc/cpuinfo','r').readlines() if l[:8]=="Revision"]+['0000'])[0]
bus = smbus.SMBus(1 if int(revision, 16) >= 4 else 0)

# ADXL345 constants
EARTH_GRAVITY_MS2   = 9.80665
SCALE_MULTIPLIER    = 0.004

DATA_FORMAT         = 0x31
BW_RATE             = 0x2C
POWER_CTL           = 0x2D

BW_RATE_1600HZ      = 0x0F
BW_RATE_800HZ       = 0x0E
BW_RATE_400HZ       = 0x0D
BW_RATE_200HZ       = 0x0C
BW_RATE_100HZ       = 0x0B
BW_RATE_50HZ        = 0x0A
BW_RATE_25HZ        = 0x09

RANGE_2G            = 0x00
RANGE_4G            = 0x01
RANGE_8G            = 0x02
RANGE_16G           = 0x03

MEASURE             = 0x08
AXES_DATA           = 0x32

class ADXL345:

    address = None

    def __init__(self, address = 0x53):
        self.address = address
        self.setBandwidthRate(BW_RATE_100HZ)
        self.setRange(RANGE_2G)
        self.enableMeasurement()

    def enableMeasurement(self):
        bus.write_byte_data(self.address, POWER_CTL, MEASURE)

    def setBandwidthRate(self, rate_flag):
        bus.write_byte_data(self.address, BW_RATE, rate_flag)

    # set the measurement range for 10-bit readings
    def setRange(self, range_flag):
        value = bus.read_byte_data(self.address, DATA_FORMAT)

        value &= ~0x0F;
        value |= range_flag;
        value |= 0x08;

        bus.write_byte_data(self.address, DATA_FORMAT, value)

    # returns the current reading from the sensor for each axis
    #
    # parameter gforce:
    #    False (default): result is returned in m/s^2
    #    True           : result is returned in gs
    def getAxes(self, gforce = False):
        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)

        x = bytes[0] | (bytes[1] << 8)
        if(x & (1 << 16 - 1)):
            x = x - (1<<16)

        y = bytes[2] | (bytes[3] << 8)
        if(y & (1 << 16 - 1)):
            y = y - (1<<16)

        z = bytes[4] | (bytes[5] << 8)
        if(z & (1 << 16 - 1)):
            z = z - (1<<16)

        x = x * SCALE_MULTIPLIER
        y = y * SCALE_MULTIPLIER
        z = z * SCALE_MULTIPLIER

        if gforce == False:
            x = x * EARTH_GRAVITY_MS2
            y = y * EARTH_GRAVITY_MS2
            z = z * EARTH_GRAVITY_MS2

        x = round(x, 4)
        y = round(y, 4)
        z = round(z, 4)

        return {"x": x, "y": y, "z": z}

if __name__ == "__main__":
    # if run directly we'll just create an instance of the class and output
    # the current readings
    adxl345 = ADXL345()

    axes = adxl345.getAxes(True)
    print "ADXL345 on address 0x%x:" % (adxl345.address)
    print "   x = %.3fG" % ( axes['x'] )
    print "   y = %.3fG" % ( axes['y'] )
    print "   z = %.3fG" % ( axes['z'] )
```

5.Run the demo.

```
    sudo python grove_tilt_switch.py
```

**Con Beaglebone Green**

Para comenzar a editar programas que residen en BBG, puedes usar el IDE Cloud9.
Como un ejercicio simple para familiarizarse con el IDE Cloud9, crear una aplicación simple para hacer parpadear uno de los 4 LEDs programables por el usuario en el BeagleBone es un buen comienzo.

Si esta es tu primera vez usando el IDE Cloud9, por favor sigue este enlace.

- Paso1: Configura el socket Grove - UART como un Socket Grove - GPIO, simplemente sigue este enlace.

- Paso2: Haz clic en el "+" en la parte superior derecha para crear un nuevo archivo.

- Paso3: Copia y pega el siguiente código en la nueva pestaña.

```python
import smbus
import time

bus = smbus.SMBus(1)

# ADXL345 device address
ADXL345_DEVICE = 0x53

# ADXL345 constants
EARTH_GRAVITY_MS2   = 9.80665
SCALE_MULTIPLIER    = 0.004

DATA_FORMAT         = 0x31
BW_RATE             = 0x2C
POWER_CTL           = 0x2D

BW_RATE_1600HZ      = 0x0F
BW_RATE_800HZ       = 0x0E
BW_RATE_400HZ       = 0x0D
BW_RATE_200HZ       = 0x0C
BW_RATE_100HZ       = 0x0B
BW_RATE_50HZ        = 0x0A
BW_RATE_25HZ        = 0x09

RANGE_2G            = 0x00
RANGE_4G            = 0x01
RANGE_8G            = 0x02
RANGE_16G           = 0x03

MEASURE             = 0x08
AXES_DATA           = 0x32

class ADXL345:

    address = None

    def __init__(self, address = ADXL345_DEVICE):
        self.address = address
        self.setBandwidthRate(BW_RATE_100HZ)
        self.setRange(RANGE_2G)
        self.enableMeasurement()

    def enableMeasurement(self):
        bus.write_byte_data(self.address, POWER_CTL, MEASURE)

    def setBandwidthRate(self, rate_flag):
        bus.write_byte_data(self.address, BW_RATE, rate_flag)

    # set the measurement range for 10-bit readings
    def setRange(self, range_flag):
        value = bus.read_byte_data(self.address, DATA_FORMAT)

        value &= ~0x0F;
        value |= range_flag;
        value |= 0x08;

        bus.write_byte_data(self.address, DATA_FORMAT, value)

    # returns the current reading from the sensor for each axis
    #
    # parameter gforce:
    #    False (default): result is returned in m/s^2
    #    True           : result is returned in gs
    def getAxes(self, gforce = False):
        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)

        x = bytes[0] | (bytes[1] << 8)
        if(x & (1 << 16 - 1)):
            x = x - (1<<16)

        y = bytes[2] | (bytes[3] << 8)
        if(y & (1 << 16 - 1)):
            y = y - (1<<16)

        z = bytes[4] | (bytes[5] << 8)
        if(z & (1 << 16 - 1)):
            z = z - (1<<16)

        x = x * SCALE_MULTIPLIER
        y = y * SCALE_MULTIPLIER
        z = z * SCALE_MULTIPLIER

        if gforce == False:
            x = x * EARTH_GRAVITY_MS2
            y = y * EARTH_GRAVITY_MS2
            z = z * EARTH_GRAVITY_MS2

        x = round(x, 4)
        y = round(y, 4)
        z = round(z, 4)

        return {"x": x, "y": y, "z": z}

if __name__ == "__main__":
    # if run directly we'll just create an instance of the class and output
    # the current readings
    adxl345 = ADXL345()

    while True:
        axes = adxl345.getAxes(True)
        print "ADXL345 on address 0x%x:" % (adxl345.address)
        print "   x = %.3fG" % ( axes['x'] )
        print "   y = %.3fG" % ( axes['y'] )
        print "   z = %.3fG" % ( axes['z'] )
        time.sleep(2)
```

- Paso4: Guarda el archivo haciendo clic en el icono del disco con la extensión .py.

- Paso5: Conecta Grove - 3-Axis Digital Accelerometer(±16g) al socket I2C de Grove en BBG.

- Paso6: Ejecuta el código. Encontrarás que la terminal muestra información de gravedad cada 2 segundos.


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove-3-Axis-Digital-Accelerometer=16g-v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle.zip](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove%203%20Axis%20Digital%20Accelerometer%C2%B116g%20v1.2.zip)
- [Librería compatible con Suli](https://github.com/Seeed-Studio/ACC_Adxl345_Suli)
- [Hoja de datos ADXL345.pdf](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/ADXL345_datasheet.pdf)
- [repositorio github para 3-Axis Digital Accelerometer(±16g)](https://github.com/Seeed-Studio/Accelerometer_ADXL345)
- [Grove - 3-Axis Digital Accelerometer(±16g)](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/DigitalAccelerometer_ADXL345.zip)
- [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/Grove_3_Axis_Digital_Acceleromete_CDC_File.zip)

## Proyectos

**Grove - Introducción al Acelerómetro Digital de 3 Ejes**: Cómo usar un acelerómetro digital de 3 ejes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>


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
