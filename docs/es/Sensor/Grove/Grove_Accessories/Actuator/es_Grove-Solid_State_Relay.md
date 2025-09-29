---
title: Grove - Relé de Estado Sólido
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Solid_State_Relay/
slug: /es/Grove-Solid_State_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove_Solid_State_Relay_1.jpg)

Grove – Solid State Relay es un módulo de interruptor electrónico sin contacto que tiene características de relé. Basado en S208T02, tiene una salida máxima de 250VAC/4A, con una velocidad de conmutación menor a 10ms. Este módulo está equipado con base acrílica y un escudo de protección aislante impreso en 3D, para la seguridad del usuario. El LED característico indica que el relé está encendido. Puede ser ampliamente utilizado en varias áreas como interfaces de periféricos de computadora, ajuste de temperatura/velocidad/luz, control de servos, petroquímica, instrumentos médicos, dispositivos financieros, carbón, medidores, señales de tráfico, etc.

:::note
        Este módulo solo funciona con carga AC para la salida. Si usas carga DC, una vez que el relé se encienda, siempre permanecerá encendido.
:::

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Escudo de protección aislante impreso en 3D
- Compatible con nivel de control de 3.3V y 5V
- Baja latencia de conmutación (≤10ms)
- Indicador LED de estado encendido
- Radiador característico proporciona mejor estabilidad
- Base acrílica y papel aislante aumentan el rendimiento de seguridad
- Compatible con Grove

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Ideas de Aplicación

- Operaciones que requieren conmutación de baja latencia, ej. control de luces de escenario
- Dispositivos que requieren alta estabilidad, ej. dispositivos médicos, señales de tráfico
- Situaciones que requieren a prueba de explosiones, anticorrosión, a prueba de humedad, ej. carbón, industrias químicas.

## Especificación

|Elemento |Mín |Típico |Máx |Unidad|
|---|---|---|---|---|
|Voltaje de Entrada| 3.0|3.3|5.0|VDC|
|Corriente de Entrada| 16|20|50|mA|
|Voltaje de Salida |-|220|250|VAC|

|Corriente de Salida |--|--|4.0|A
|Frecuencia de operación|45|50|65|Hz
|Temperatura de operación|-25|25|85|℃
|Tiempo de encendido |--|10|--|ms|
|Tiempo de apagado |--|10|--|ms|
|Dimensión |-|44x44x32|-|mm|
|Peso Neto |-|25.5|-|g|

## Función de la Interfaz

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Ssr_interface.jpg)

:::caution
        **1.** Si el voltaje de salida es mayor a 36V, necesitas asegurar que el módulo esté en estado apagado antes de operar con los tornillos.

        **2.** El disipador de calor puede alcanzar temperaturas muy altas, no lo toques durante el uso.
:::

## Primeros Pasos

### Jugar Con Arduino

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

:::tip
        Esta demostración funciona con carga AC de 220V, por favor presta atención a tu seguridad.
:::

#### Materiales requeridos

  | Seeeduino V4.2 | Base Shield| Bombilla |Grove - Solid State Relay|
  |--------------|-------------|-----------------|-----|
  |![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/bulb.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|Usa tu propia bombilla :)|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB suavemente, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Paso 1.** Conecta el Grove - Solid State Relay al puerto **D3** del Grove-Base Shield.

- **Paso 2.** Conecta el cable de la bombilla al **puerto de salida** del Grove - Solid State Relay.

- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable Micro-USB.

:::note
    Si no tenemos el base shield, también podemos conectar directamente el Grove-Relay y el Grove-Button a la placa Arduino. Por favor sigue la conexión de abajo.
:::

| Grove - Solid State | Arduino |Cable Grove|
|-------------|---------|------|
| GND         | GND     |Negro|
| VCC         | 5V      |Rojo|
| SIG         | D3      |Amarillo|

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Arduino_relay.jpg)

#### Software

- **Paso 1.** Abre el IDE de Arduino y copia el siguiente código en un nuevo sketch.

```
/*
  Grove - Solid State Relay Demo Code
  The ssr will turn on for 5s and then turn off for 5s, and so on.
  https://www.seeedstudio.com
*/

int ssrControlPin = 3;
void setup() {
    // initialize the digital pin as an output.
    pinMode(ssrControlPin, OUTPUT);
}

void loop() {
    digitalWrite(ssrControlPin, HIGH);      // set the SSR on
    delay(5000);                            // wait for 5 second
    digitalWrite(ssrControlPin, LOW);       // set the SSR off
    delay(5000);                            // wait for 5 second
}
```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

Una vez terminada la subida, verás que la bombilla se enciende durante 5s y luego se apaga durante 5s continuamente.

### Jugar Con Raspberry Pi

#### Hardware

**Materiales requeridos**

  | Raspberry pi | GrovePi_Plus|  Grove-Relay|
  |--------------|-------------|------|
  |![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">Obtener Uno Ahora</a>|

- **Paso 1.** Conecta el GrovePi_Plus a la Raspberry.

- **Paso 2.** Conecta el Grove-Relay al puerto **D4** del GrovePi_Plus.

- **Paso 3.** Conecta el cable de la bombilla al **puerto de salida** del Grove - Solid State Relay.

- **Paso 4.** Conecta la Raspberry al PC mediante cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/PI_RELAY.jpg)

#### Software

Si esta es la primera vez que usas GrovePi, por favor haz esta parte paso a paso. Si eres un viejo amigo de GrovePi, puedes omitir el **Paso1** y el **Paso2**.

- **Paso 1.** Configurando El Software. En la línea de comandos, escribe los siguientes comandos:

:::note
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, **no puedes usar esta línea de comandos**.
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

Para más detalles sobre esta parte, consulte [Configuración de Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).

- **Paso 2.** Siga [Actualización del Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para actualizar el firmware más reciente de GrovePi.

:::note
    Recomendamos firmemente que actualice el firmware, o para algunos sensores puede obtener errores.
:::

- **Paso 3.** Ejecute el siguiente comando para ejecutar la demostración y obtener el resultado.

:::note
     Si está usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, debe usar esta línea de comandos **solo con Python3**.
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/

```

```
sudo python3 grove_solid_state_relay.py 
```

El resultado debería ser como:

```
pi@raspberrypi:~/Desktop/GrovePi/Software/Python$ sudo python3 grove_solid_state_relay.py
on
off
on
off
on
off
on
off
on
off
on
off

```

Si quieres revisar el código, por favor escribe el comando a continuación.

```
nano grove_solid_state_relay.py   # "Ctrl+x" to exit #
```

El código es:

```python
import time
import grovepi

# Connect the Grove Solid State Relay to digital port D4
# CTR,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # switch on for 5 seconds
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # switch off for 5 seconds
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

## Informe de Prueba

---
**1.Propósitos experimentales**

- Rendimiento térmico del Grove – Relé de Estado Sólido(S208T02).
- Corriente límite de carga del Grove – SSR.
- Medidas para mejorar la corriente límite de carga.

**2.Principio Experimental**

Mediante el registro de la temperatura del chip SSR en diferentes corrientes y diferentes puntos de tiempo, analizar los datos y extraer conclusiones.

La Figura 1 es una captura de pantalla de la hoja de datos del S208T02, podemos ver que con diferentes disipadores de calor y diferentes temperaturas, la corriente del SSR es diferente.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Figure_1.jpg)

Se necesita un sensor de temperatura para obtener la temperatura del chip. Uso el DS18B20 cuyo rango de detección es -25-125℃ para cumplir con los requisitos.

La Figura 2 muestra el equipo experimental y los planes de instalación, el sensor de temperatura está atado al lado derecho del disipador de calor, para hacer que la temperatura que detecta el 18b20 sea lo más cercana posible a la temperatura del disipador de calor, untar entre el sensor y el plástico térmico del disipador de calor. Entre el disipador de calor y el SSR se aplicó plástico térmico. Por lo tanto, la temperatura del 18b20 es igual a la temperatura del SSR.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image2.JPG)

**3.Datos experimentales**

|- |1min |5min| 10min| 20min |tiempo estable|
|---|---|---|---|---|---|
|0.5A| 31.40| 33.75 |34.75| 35.00 |15min|
|1A| 31.8 |36.75 |39.6| 40.56 |18min|
|2A| 34.5| 46.6| 48.88 |51.13 |20min|
|3A |35.56| 52.81| 58.88 |60.06| 17min|
|4A| 38.00 |57.88| 63.88 |67.00 |19min|
|5A| 44.00| 66.00| 73.12| 75.37| 19min|

:::note
    1. La unidad de temperatura en la tabla es ℃
    2. Cuando se probó, la temperatura ambiente era de 28 ℃
:::
**4.Experimento de expansión**

  Para demostrar que mejorar el nivel del disipador de calor mejorará la corriente de operación límite del SSR, realicé un experimento de expansión.

  Como no tenía un disipador de calor más grande a mano, instalé un ventilador (que tomé del CPU de mi PC) encima del SSR. Como se muestra en la Figura 3.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image3.JPG)

Solo probé el tiempo estable de diferentes corrientes de operación, como se muestra en la Tabla 2.

|-| 6.0A| 6.5A |7.0A| 7.5A|
|---|---|---|---|---|
|Tiempo estable| 54.44℃| 57.63℃ |60.06℃| 62.38℃|

**5.Experimento de expansión**

A partir de los resultados experimentales anteriores, se pueden extraer las siguientes conclusiones:

- Cuando la corriente es fija, con el paso del tiempo, la temperatura se estabilizará en un cierto valor. Este valor está relacionado con la corriente, la corriente aumenta, la temperatura estable es mayor. A 2A, la temperatura estable será más de 50 ℃, por lo tanto, cuando el SSR funcione, no debes tocarlo.

- Combinado con la Figura 1 y nuestros datos, considero que el Grove – SSR puede operar con una corriente de carga de 4A como máximo.

- Si la corriente de carga es mayor que 5A, como 7A, debes instalar un ventilador en él, u otras medidas de enfriamiento, pero no se recomienda.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo Eagle del Grove - Solid State Relay](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip)
- **[RAR]** [Código de Demostración del Grove - Solid State Relay](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_Demo_Code.rar)
- **[PDF]** [Hoja de Datos S208T02](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/S208t02_datasheet.pdf)
- **[PDF]** [Grove - Solid State Relay en PDF](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_v0.9b.pdf)
- **[PDF]** [Reporte de Pruebas del Grove - Solid State Relay](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Grove-SSR_Test_Report_V0.3.pdf)

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
