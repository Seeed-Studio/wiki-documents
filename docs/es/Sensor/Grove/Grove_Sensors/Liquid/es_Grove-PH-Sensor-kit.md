---
description: Grove - Kit de Sensor de PH (E-201C-Blue)
title: Grove - Kit de Sensor de PH (E-201C-Blue)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-PH-Sensor-kit
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html)

¿Estás tratando de encontrar un sensor/medidor de PH fácil de usar y rentable? ¿Quieres usar un sensor/medidor de PH con Arduino o Raspberry Pi? Bueno, este nuevo Grove - Sensor de PH satisfará todas tus necesidades. El sensor de PH mide la actividad de iones de hidrógeno en soluciones basadas en agua, generalmente lo usamos para medir el PH de un líquido. Se usa ampliamente en la industria química, la industria farmacéutica, la industria de tintes, y la investigación científica donde se requieren pruebas de acidez y alcalinidad. La placa controladora en este kit soporta tanto sistemas de 3.3V como de 5V. Y con la interfaz de sonda BNC estándar y el conector Grove, es muy conveniente trabajar con Arduino y Raspberry Pi.

:::note
    Este producto no está certificado RoHS.
:::
## Características

- Tamaño compacto para fácil implementación.  
- Compatible tanto con Arduino como con Raspberry Pi.
- Rentable.

## Especificaciones
|Elementos|Valores|
|---|---|
|Voltaje de operación	|3.3V/5V|
|Rango	|0-14PH|
|Resolución	|±0.15PH（STP）|
|Tiempo de respuesta	|＜1min|
|Interfaz de sonda|	BNC|
|Temperatura de medición	|0-60℃|
|Resistencia interna|	≤250MΩ（25℃）|
|Error alcalino	|0.2PH（1mol/L）Na+，PH14)（25℃）|

## Plataforma Soportada
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

#### Materiales Requeridos

| Seeeduino Lotus | Kit de Sensor de PH Grove | 
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>| <p><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/thumb.png" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html)|

#### Conexión de Hardware


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/PH_Connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    Por favor conecta el cable USB, la Interfaz del Sensor de PH Grove en la interfaz de la placa Seeeduino Lotus suavemente, de lo contrario podrías dañar el puerto.
:::
- **Paso 1.** Conecta el Sensor de PH Grove en la Interfaz **A2** de la placa Seeeduino Lotus con un Cable Grove.

- **Paso 2.** Conecta Seeeduino Lotus a la PC mediante un cable USB.

- **Paso 3.** Descarga el código, por favor consulta la parte de software.

- **Paso 4.** Ejecuta el código y el resultado se mostrará en la pantalla del **Monitor Serie** en tu Arduino IDE.


#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::


- **Paso 1.** Descarga el [código de demostración](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip).

- **Paso 2.** Copia todo el archivo **Grove-PH_Sensor_kit** y pégalo en tu archivo de biblioteca de Arduino IDE.

- **Paso 3.** Abre el archivo **pH_meter_V1_1** con tu Arduino IDE.

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

#### Código de Software
```cpp
/*
  # This sample code is used to test the pH meter V1.1.
  # Editor : YouYou
  # Date   : 2014.06.23
  # Ver    : 1.1
  # Product: analog pH meter
  # SKU    : SEN0161
*/
#define SensorPin A2            //pH meter Analog output to Arduino Analog Input 0
#define Offset 41.02740741      //deviation compensate
#define LED 13
#define samplingInterval 20
#define printInterval 800
#define ArrayLenth  40    //times of collection
#define uart  Serial
int pHArray[ArrayLenth];   //Store the average value of the sensor feedback
int pHArrayIndex = 0;
void setup(void)
{
  pinMode(LED, OUTPUT);
  uart.begin(9600);
  uart.println("pH meter experiment!");    //Test the uart monitor
}
void loop(void)
{
  static unsigned long samplingTime = millis();
  static unsigned long printTime = millis();
  static float pHValue, voltage;
  if (millis() - samplingTime > samplingInterval)
  {
    pHArray[pHArrayIndex++] = analogRead(SensorPin);
    if (pHArrayIndex == ArrayLenth)pHArrayIndex = 0;
    voltage = avergearray(pHArray, ArrayLenth) * 5.0 / 1024;
    pHValue = -19.18518519 * voltage + Offset;
    samplingTime = millis();
  }
  if (millis() - printTime > printInterval)  //Every 800 milliseconds, print a numerical, convert the state of the LED indicator
  {
    uart.print("Voltage:");
    uart.print(voltage, 2);
    uart.print("    pH value: ");
    uart.println(pHValue, 2);
    digitalWrite(LED, digitalRead(LED) ^ 1);
    printTime = millis();
  }
}
double avergearray(int* arr, int number) {
  int i;
  int max, min;
  double avg;
  long amount = 0;
  if (number <= 0) {
    uart.println("Error number for the array to avraging!/n");
    return 0;
  }
  if (number < 5) { //less than 5, calculated directly statistics
    for (i = 0; i < number; i++) {
      amount += arr[i];
    }
    avg = amount / number;
    return avg;
  } else {
    if (arr[0] < arr[1]) {
      min = arr[0]; max = arr[1];
    }
    else {
      min = arr[1]; max = arr[0];
    }
    for (i = 2; i < number; i++) {
      if (arr[i] < min) {
        amount += min;      //arr<min
        min = arr[i];
      } else {
        if (arr[i] > max) {
          amount += max;  //arr>max
          max = arr[i];
        } else {
          amount += arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount / (number - 2);
  }//if
  return avg;
}
```


:::note

     - Antes de detectar la solución objetivo, el sensor **DEBE** ser calibrado con fluido de calibración específico, y también **DEBE** ser puesto en buffer específico (PH=7) o agua limpia antes de detectar un nuevo tipo de solución y limpiado.

     - Antes de ser medido, el electrodo debe ser calibrado con una solución buffer estándar de valor PH conocido. Para obtener resultados más precisos, el valor PH conocido debe ser confiable, y más cercano al que se va a medir.

     - Cuando la medición esté completada, la funda protectora del electrodo debe ser colocada. Una pequeña cantidad de solución de cloruro de potasio 3.3mol / L debe ser colocada en la funda protectora para mantener húmedo el bulbo del electrodo.

     - El extremo conductor del electrodo debe mantenerse limpio y seco para prevenir absolutamente cortocircuitos en ambos extremos de la salida, de lo contrario llevará a resultados de medición inexactos o inválidos.

     - Después del uso prolongado del electrodo, si encuentra que el gradiente es ligeramente inexacto, puede sumergir el extremo inferior del electrodo en 4% HF (ácido fluorhídrico) por 3-5 segundos, lavarlo con agua destilada, y luego sumergir en solución de cloruro de potasio para hacerlo nuevo.
     
     - El sensor **NO DEBE** ser sumergido en el líquido de detección por un tiempo prolongado.
:::

- **Paso 5.** Cuando el sensor es puesto en un fluido de calibración específico (PH=9.18), habrá un voltaje y un valor PH:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png" alt="pir" width={600} height="auto" /></p>

- **Paso 6.** Similarmente, cuando el sensor es puesto en un fluido de calibración específico (PH=4), habrá un voltaje y un valor PH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 7.** Un valor k y valor Offset pueden ser calculados debido a la característica lineal de la detección de PH, y a continuación por favor inserte el valor Offset y valor k (el mismo que pHValue) en la **Línea 10** y **Línea 34** en el Código de Software:

:::tip
		
    \$k= (PH2-PH1)/(V2-V1)\$
    
    \$Offset=[(PH2+PH1)-k*(V1+V2)]/2\$
    
    Hay una [Tabla de Cálculo](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx) para ayuda adicional con la calibración.
:::
- **Paso 8.** Finalmente, eres libre de detectar tu líquido.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/202002811_Grove-PH_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Librería de Código Demo](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip)
- **[XLSX]** [Calibración para k&offset](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx)

## Soporte Técnico y Discusión de Productos
Por favor envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

## Actualizable a Sensores Industriales
Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

