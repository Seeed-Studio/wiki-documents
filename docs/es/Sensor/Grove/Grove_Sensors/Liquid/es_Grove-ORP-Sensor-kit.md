---
description: Grove - Kit de Sensor ORP (501Z)
title: Grove - Kit de Sensor ORP (501Z)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-ORP-Sensor-kit
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)

Un sensor de Potencial de Oxidación-Reducción (ORP) mide la actividad de oxidantes y reductores en una solución acuosa, mide la capacidad de un lago o río para limpiarse a sí mismo o descomponer productos de desecho. El sensor Grove OPR funciona tanto para sistemas de 3.3V como de 5V, el conector Grove y la interfaz de sonda BNC lo hacen fácil de usar y muy adecuado para proyectos de Arduino y Raspberry Pi

:::note
    Este producto no está certificado RoHS.
:::
## Características

- Funciona eficientemente bajo 3.3V y 5V.
- Compatible tanto con Arduino como con Raspberry Pi.
- Tamaño compacto para fácil implementación.

## Especificaciones
|Elementos|Valores|
|---|---|
|Potencial del electrodo|	245-270mv(15-30℃)|
|Resistencia interna del electrodo de referencia de rango	|≤10k|
|Estabilidad del electrodo de resolución	|±8mv/24|
|Electrodo indicador	|Buena continuidad|
|Voltaje de trabajo|	3.3V/5V|
|Temperatura de trabajo|	5℃-70℃|

## Plataforma Soportada
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

#### Materiales Requeridos

| Seeeduino Lotus | Kit de Sensor Grove-ORP | 
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/thumb.png" alt="pir" width={600} height="auto" /></p>
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)|

#### Conexión de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg)  -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::
- **Paso 1.** Conecta el Sensor Grove-ORP en la Interfaz **A2** de la placa Seeeduino Lotus con un Cable Grove y conecta Seeeduino Lotus a la PC mediante un cable USB.

:::tip
    Por favor conecta el cable USB, la Interfaz del Sensor Grove-ORP en la interfaz de la placa Seeeduino Lotus con cuidado, de lo contrario podrías dañar el puerto.
:::

- **Paso 2.** Descarga el [código de demostración](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip) y copia todo el archivo **ORPSensorSample** y pégalo en tu archivo de biblioteca del IDE de Arduino.

- **Paso 3.** Abre el archivo **ORPSensorSample.ino** con tu IDE de Arduino y sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).


#### Código de Software
```cpp
#define VOLTAGE 5.00    //system voltage
#define OFFSET 0        //zero drift voltage
#define LED 13         //operating instructions

double orpValue;

#define ArrayLenth  40    //times of collection
#define orpPin 2         //orp meter output,connect to Arduino controller ADC pin

int orpArray[ArrayLenth];
int orpArrayIndex=0;

double avergearray(int* arr, int number){
  int i;
  int max,min;
  double avg;
  long amount=0;
  if(number<=0){
    printf("Error number for the array to avraging!/n");
    return 0;
  }
  if(number<5){   //less than 5, calculated directly statistics
    for(i=0;i<number;i++){
      amount+=arr[i];
    }
    avg = amount/number;
    return avg;
  }else{
    if(arr[0]<arr[1]){
      min = arr[0];max=arr[1];
    }
    else{
      min=arr[1];max=arr[0];
    }
    for(i=2;i<number;i++){
      if(arr[i]<min){
        amount+=min;        //arr<min
        min=arr[i];
      }else {
        if(arr[i]>max){
          amount+=max;    //arr>max
          max=arr[i];
        }else{
          amount+=arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount/(number-2);
  }//if
  return avg;
}


void setup(void) {
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
}

void loop(void) {
  static unsigned long orpTimer=millis();   //analog sampling interval
  static unsigned long printTime=millis();
  if(millis() >= orpTimer)
  {
    orpTimer=millis()+20;
    orpArray[orpArrayIndex++]=analogRead(orpPin);    //read an analog value every 20ms
    if (orpArrayIndex==ArrayLenth) {
      orpArrayIndex=0;
    }   
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-OFFSET;   //convert the analog value to orp according the circuit
  }
  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical, convert the state of the LED indicator
  {
	printTime=millis()+800;
	Serial.print("ORP: ");
	Serial.print((int)orpValue);
        Serial.println("mV");
        digitalWrite(LED,1-digitalRead(LED));
  }
}
```


:::note
     - Al medir el electrodo, la parte de prueba del electrodo (incluyendo el alambre de platino y la unión de referencia) debe sumergirse al mismo tiempo.

     - La solución estándar del electrodo - solución saturada de quinona hidroquinona, el tiempo de almacenamiento es de 48h. (Anexo: Preparación de la solución saturada de quinona hidroquinona: añadir quinona hidroquinona en exceso al buffer de pH 4.00 para saturarla).
     - Método para preparar la solución de hidroquinona: añadir 10g de quinhydrona a 1L de solución buffer de pH 4 o pH 7 (ASTM D1498). Las soluciones se mezclan en una placa de mezcla magnética durante un mínimo de 15 minutos para crear una solución saturada con cristales no disueltos restantes. Las soluciones de quinhydrona son utilizables durante 8 horas desde el momento de la mezcla.

     - Si el alambre de platino del electrodo está manchado con grasa, puede limpiarse con algodón absorbente y acetona o alcohol. Y si está sumergido por sustancia inorgánica insoluble, el ácido clorhídrico al 30-50% también funciona. Además, también puede limpiarse con papel higiénico de alta calidad una vez al día.

     - La sonda **NO DEBE** sumergirse en ninguna solución durante mucho tiempo.
:::

- **Paso 4.** Desconecte la interfaz del cable de la sonda y presione continuamente el **Botón Negro** en el sensor para reiniciar.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png" alt="pir" width={600} height="auto" /></p>
- **Paso 5.** Del gráfico anterior, podemos determinar que el error es -11 mv, por lo tanto los datos de desplazamiento pueden modificarse a -11 en la **Línea 2** del Código Demo.

- **Paso 6.** Después de reiniciar el sensor, podemos ponerlo en un líquido de calibración específico con la especificación de 204mv para determinar si puede funcionar bien.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png" alt="pir" width={600} height="auto" /></p>
- **Paso 7.** Finalmente, puede detectar libremente su propio líquido.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/202002872_Grove-OPR Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Librería de Código Demo](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip)


## Soporte Técnico y Discusión de Productos
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
