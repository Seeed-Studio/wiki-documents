---
description: Grove - Kit de Sensor EC
title: Grove - Kit de Sensor EC
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-EC-Sensor-kit
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)
Con el desarrollo de la tecnología, nuestros entornos enfrentan grandes desafíos. Necesitamos una herramienta para probar preliminarmente si la calidad del agua cumple con los estándares. Grove EC Sensor es un medidor analógico de conductividad eléctrica. El sensor de conductividad eléctrica (sensor EC) mide la conductividad eléctrica en una solución que generalmente se utiliza para acuicultura y pruebas de calidad del agua. El Grove - Sensor de Conductividad Eléctrica está especialmente diseñado para un sistema de bajo costo con una precisión relativamente alta que puede cubrir la mayoría de aplicaciones. El conector Grove y la interfaz de sonda BNC lo hacen fácil de usar y muy adecuado para proyectos de Arduino y Raspberry Pi. Este Kit incluye una sonda EC y una placa controladora, y la placa controladora soporta tanto sistemas de 3.3V como de 5V.

:::note
    Este producto no está certificado RoHS.
:::

## Características

- Ampliamente utilizado para la mayoría de aplicaciones de acuicultura y pruebas de calidad del agua
- Tamaño compacto para fácil implementación  
- Compatible con Arduino y Raspberry Pi
- Costo-efectivo

## Especificaciones

|Elementos|Valores|
|---|---|
|Voltaje de operación |3.3V/5V|
|Rango EC |0-2000us/cm|
|Resolución |±5%（STP）|
|Tiempo de respuesta |＜10seg|
|Interfaz de sonda| BNC|
|Temperatura de operación |5-80℃|

## Plataformas Compatibles
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

#### Materiales Requeridos

| Arduino uno | Grove-EC Sensor kit | base shield|
|:--------------:|:--------------:|:--------------:|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/arduinouno.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.09.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.06.png" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-694.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2.html)|

#### Conexión de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg" alt="pir" width={600} height="auto" /></p>
:::tip
    Por favor conecta el cable USB, la interfaz del Grove-EC Sensor en la interfaz de la placa Arduino Uno con cuidado, de lo contrario, podrías dañar el puerto.
:::
- **Paso 1.** Conecta el Grove-EC Sensor en la interfaz **A1** de un base shield con un cable Grove.

- **Paso 2.** Conecta un base shield al Arduino Uno.
- **Paso 3.** Conecta el Arduino Uno a la PC mediante un cable USB.
- **Paso 4.** Descarga el código, por favor consulta la parte de software.

- **Paso 5.** Ejecuta el código y el resultado se mostrará en la pantalla del **Monitor Serie** en tu Arduino IDE.

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga el [código de demostración](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip).

- **Paso 2.** Añade todo el archivo **DFRobot_EC_master.zip** a tu archivo de biblioteca del Arduino IDE. Puedes consultar [Cómo instalar una biblioteca de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/)

- **Paso 3.** Abre el archivo de ejemplo **DFRobot_EC_Test** con tu Arduino IDE.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

#### Código de Software

```cpp
#include "DFRobot_EC.h"
#include <EEPROM.h>

#define EC_PIN A1
float voltage,ecValue,temperature = 25;
DFRobot_EC ec;

void setup()
{
  Serial.begin(115200);  
  
  ec.begin();
}

void loop()
{
    static unsigned long timepoint = millis();
    if(millis()-timepoint>1000U)  //time interval: 1s
    {
      timepoint = millis();
      voltage = analogRead(EC_PIN)/1024.0*5000;   // read the voltage
      //temperature = readTemperature();          // read your temperature sensor to execute temperature compensation
      ecValue =  ec.readEC(voltage,temperature);  // convert voltage to EC with temperature compensation
      Serial.print("temperature:");
      Serial.print(temperature,1);
      Serial.print("^C  EC:");
      Serial.print(ecValue,2);
      Serial.println("ms/cm");
    }
    ec.calibration(voltage,temperature);          // calibration process by Serail CMD
}

float readTemperature()
{
  //add your code here to get the temperature from your temperature sensor
}
```

:::note

     - Antes de detectar la solución objetivo, el sensor **DEBE** ser calibrado con soluciones de conductividad, y también **DEBE** ser puesto en agua limpia antes de detectar un nuevo tipo de solución y limpiado.

     - Antes de ser medido, el electrodo debe ser calibrado con una solución buffer estándar. Para obtener resultados más precisos, el valor de las soluciones de conductividad conocidas debe ser confiable, y más cercano al medido.

     - No sumergir en líquido por mucho tiempo. De lo contrario, esto acortará la vida útil de la sonda. La capa de platino negro está adherida a la superficie de la lámina metálica en la sonda. Debe evitar que cualquier objeto la toque. Solo puede ser lavada con agua destilada, de lo contrario, la capa de platino negro se dañará, resultando en una medición inexacta.

     - El sensor **NO DEBE** ser sumergido en el líquido de detección por mucho tiempo.
:::

Para asegurar la precisión, la sonda necesita ser calibrada para su primer uso y después de no haber sido usada por un período extendido de tiempo. Los siguientes pasos usan calibración de dos puntos y por lo tanto requieren soluciones buffer estándar de 1413us/cm y 12.88ms/cm. Los siguientes pasos muestran cómo operar la calibración de dos puntos.

- **Paso 5.** Después de que hayas subido el código a Arduino, abre el monitor serial, puedes ver la temperatura y conductividad eléctrica como en la imagen de abajo.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png" alt="pir" width={600} height="auto" /></p>
- **Paso 6.** Usa agua destilada para lavar la sonda, luego absorbe las gotas de agua residuales con papel. Inserta la sonda en la solución buffer estándar de 1413us/cm, agita suavemente, hasta que los valores estén estables. Ingresa el comando enterec en el monitor serial para entrar al modo de calibración.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png" alt="pir" width={600} height="auto" /></p>
- **Paso 7.** Ingresa los comandos calec para iniciar la calibración. El programa identificará automáticamente cuál de las dos soluciones buffer estándar está presente: ya sea 1413us/cm y 12.88ms/cm. En este paso, la solución buffer estándar es 1413us/cm.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png" alt="pir" width={600} height="auto" /></p>

- **Paso 8.** Cuando la calibración sea exitosa, ingresa el comando exitec para guardar los parámetros relevantes y salir del modo de calibración.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png" alt="pir" width={600} height="auto" /></p>
Después de que hayas terminado los pasos anteriores, la calibración del primer punto está completada. La calibración del segundo punto es el mismo procedimiento. Aquí usamos las soluciones buffer estándar de 12.88ms/cm. El proceso de calibración no se repite aquí.

Después de completar los pasos anteriores, la calibración de dos puntos está completada, y entonces puede ser usada para medición real. Los parámetros relevantes en el proceso de calibración han sido guardados en la EEPROM de la placa de control principal.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/Grove-EC_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Biblioteca de código de demostración](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip)
- **[PDF]** [Especificación de material CD4060BM](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/CD4060BM_Material_specification.pdf)
- **[PDF]** [Especificación del sensor TDS DIP](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DIP_TDS_Sensor_specification.pdf)
- **[PDF]** [Especificación de material LMV324](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/LMV324_Material_specification.pdf)

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
