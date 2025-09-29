---
description: Grove - Kit de Sensor ORP Pro
title: Grove - Kit de Sensor ORP Pro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-ORP-Sensor-Pro
last_update:
  date: 3/2/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Kit de Sensor ORP Pro
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 110020370
tags:
--- -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Introducción

Grove - Kit de Sensor ORP (HR-O) es un sensor Grove que mide el valor ORP, detectando la calidad del líquido. Funciona con una sonda ORP IP68 de 5 metros, ofreciendo un rango de detección de -2000mV a 2000mV, operando bajo 0-80℃, compatible con programación Arduino. El sensor es ambientalmente amigable y certificado RoHS.

### Características

- Actualización del Sensor ORP Grove: Incluye sonda ORP IP68 de 5 metros, ofreciendo rango de detección de -2000 mV a 2000 mV, operando bajo 0-80℃, miembro del ecosistema Grove fácil de usar
- Rendimiento de Medición Mejorado: Mantiene precisión de detección de ±15mV a 0-60°C
- Voltaje de Trabajo: 3.3/5V
- Soporte Arduino
- Certificación RoHS

### Aplicación

- Monitoreo y control de reacciones de oxidación-reducción
- Detección de agua desinfectada
- Detección de agua saludable
- Determinar los tipos de microbios
- Detectar actividad microbiana anaeróbica
- Tratamiento de aguas residuales
- Acuicultura
- Monitoreo de descarga de aguas residuales industriales

## Descripción General del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Grove - Kit de Sensor ORP Pro.

| Parámetros | Detalles |
|:----------:|:-------:|
| Rango de medición | -2000mV a +2000mV |
| Relación de resolución | 1 mV |
| Precisión | ±15mV |
| Punto de potencial aéreo(pH) | 7.00±0.30 |
| Factor de pendiente | >96% |
| Voltaje de trabajo | 3.3V/5V |
| Temperatura de trabajo | 0-80℃ |
| **Sistema de referencia** |
| Límite de unión líquida | Tetracloruro de polivinilo |
| Material de la carcasa | PPS |
| Resistencia de membrana | &lt;500 MQ |
| Longitud del cable | 5 metros |
| Método de instalación | Gota |
| Nivel de protección | IP68 |
| Conexión eléctrica | BNC |

## Comenzando

### Acerca del producto

La tapa de la sonda del sensor está llena de una solución de cloruro de potasio que se utiliza para proteger la sonda.

Si encuentra cristales granulares sólidos blancos alrededor del escudo de la sonda después de recibir el producto, este es un fenómeno normal, por favor no se preocupe.

Los cristales blancos son causados por la solución de cloruro de potasio en el interior debido a cambios de temperatura, cambios ambientales u oxidación-reducción en el entorno normal de almacenamiento o transporte. Sin embargo, no afectará la naturaleza de la solución interna de cloruro de potasio ni el funcionamiento normal del sensor.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/1.jpg"/></div>

Si lo encuentra, por favor use una toalla de papel húmeda para limpiar suavemente los cristales, por favor no lo deje cerca de sus niños para evitar la ingestión accidental.

### Instrucciones de uso del Kit de Sensor ORP Grove Pro

Un Sensor de Potencial de Oxidación-Reducción (ORP) mide la actividad de oxidantes y reductores en una solución acuosa. Es una medición potenciométrica de un sistema de dos electrodos similar a un sensor de pH. A veces también se le conoce como una medición redox. A diferencia de un sensor de pH, un sensor ORP mide la relación de formas oxidadas a reducidas de todas las especies químicas en solución.

El sensor ORP está compuesto por dos semiceldas electroquímicas donde el electrodo de referencia es generalmente Ag/AgCl y el electrodo de medición es comúnmente Pt. La diferencia de potencial entre los dos electrodos representa el potencial redox de la solución que se está midiendo y puede describirse mediante la ecuación de Nernst.

`E = Eo – 2.3 (RT/nF) x (log [Ox] / [Red])`

Donde:

- E = potencial total desarrollado entre los electrodos de medición y referencia
- Eo = un voltaje específico del sistema
- R = constante de los gases
- T = temperatura en K
- n = el número de electrones involucrados en el equilibrio entre las especies oxidadas y reducidas
- F = constante de Faraday
- [Ox] = concentración de las especies oxidadas
- [Red] = concentración de la forma reducida de esas especies

La salida del sensor ORP es relativa al electrodo de referencia. Por ejemplo, una lectura de +100 mV indica que el potencial es 100 mV más alto que el potencial de la semicelda de referencia y sugiere un ambiente oxidante. Del mismo modo, una lectura de –100 mV indica un potencial 100 mV más bajo que la semicelda de referencia y es un ambiente reductor. En algunas aplicaciones, el potencial redox puede reportarse como Eh que es la lectura de voltaje con respecto al Electrodo Estándar de Hidrógeno (SHE). Al tomar en cuenta el desplazamiento del electrodo de referencia usado en el sensor ORP, el potencial puede convertirse en lecturas Eh. Los sensores ORP Vernier usan un electrodo de referencia Ag/AgCl KCl saturado.

### Instalación del Equipo

Antes de usar el Sensor ORP Grove Pro, necesitamos montar la placa Grove con la sonda. En la placa Grove, habrá dos puntas redondas sobresalientes en la conexión con la sonda, alinéelas con las dos muescas en la conexión de la sonda e insértelas firmemente. Luego simplemente gírelas a lo largo de las muescas hasta el límite.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/install.gif"/></div>

:::tip
Si desea desarmarlo, entonces simplemente gírelo en la dirección opuesta a lo largo de la ranura y luego separe con fuerza la placa Grove de la sonda. Por favor note que la fuerza de la mano está en la parte metálica tanto como sea posible para evitar romper la placa con demasiada fuerza.
<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/uninstall.gif"/></div>

Una tuerca y un espaciador están incluidos con el producto. Si necesita desmontaje frecuente, no recomendamos que instale el espaciador y la tuerca, lo cual hará que su desmontaje sea difícil.
:::

## Ejemplo de Arduino / XIAO

A continuación, presentaremos el uso básico del Sensor ORP Grove con los productos XIAO y Seeeduino de Seeed Studio basados en la plataforma Arduino.

**Paso 1.** Inicia la aplicación Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y añádelo al IDE de Arduino.

- Si quieres usar **Seeeduino** para las rutinas posteriores, consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para completar la adición.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, consulta [este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software) para completar la adición.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup) para completar la adición.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para completar la adición.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#software-setup) para completar la adición.

### Usando el Sensor ORP Grove Pro en Seeed Studio XIAO SAMD21

Una definición de trabajo simple para ORP es la capacidad de una solución para la transferencia de electrones conocida como oxidación o reducción, dada en milivoltios. La medición de ORP es la lectura del potencial de voltaje entre el electrodo de medición y un electrodo de referencia. Dependiendo de la solución que se esté midiendo, los electrodos ORP servirán como donador de electrones o como aceptor de electrones. ORP es similar al pH en que el pH indica qué tan ácida o básica es una solución basándose en la actividad de iones de hidrógeno dentro de la solución y ORP indica el estado de reducción-oxidación de una solución basándose en la actividad colectiva de electrones dentro de la solución.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/3.jpg"/></div>

En este ejemplo, usamos XIAO SAMD21 como la placa de control principal para medir el valor ORP de Coca-Cola usando el Sensor ORP Grove Pro.

#### Materiales Requeridos

| Seeed Studio XIAO SAMD21 |  Base de Expansión Seeed Studio para XIAO | Sensor ORP Grove Pro |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/></div> | <div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div> |
|[**Consigue UNO Ahora**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**Consigue UNO Ahora**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| [**Consigue UNO Ahora**](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html) |

#### Pasos de Operación

**Paso 1.** Conecta el Sensor ORP Pro Grove a la Placa de Expansión XIAO.

En este ejemplo, usaremos los pines **A6** y **A7** encima del XIAO como los pines **CAL** y **SIG** del sensor. Por favor conecta el Sensor ORP Pro Grove al puerto UART de la placa de expansión XIAO usando el cable Grove.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/7.png"/></div>

**Paso 2.** Coloca el Seeed Studio XIAO SAMD21 en la placa de expansión.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"/></div>

:::note
Por favor conecta primero el Seeed Studio XIAO en la placa de expansión, luego conecta el Type-C. Recuerda conectar el Seeed Studio XIAO en el medio de los dos conectores hembra, de lo contrario dañarás el Seeed Studio XIAO y la placa de expansión.
:::

**Paso 3.** Retira la carcasa protectora de la sonda.

**¡Este paso requiere especial cuidado!**

Por favor haz que la sonda apunte hacia abajo **verticalmente** antes de retirar la carcasa protectora para exponer la sonda, y luego gira lentamente la carcasa para retirar la sonda. ¡Por favor no inclines durante este proceso, de lo contrario el cloruro de potasio del interior se derramará fácilmente!

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/2.jpg"/></div>

La sonda se inserta entonces completamente en el líquido a medir. Puedes estar seguro de que la sonda y el sensor son impermeables, y hemos preparado especialmente un cable de 5m de largo para ti. Sin embargo, ten en cuenta que la placa Grove no es impermeable, así que por favor no la pongas en el líquido con ella.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/5.jpg"/></div>

**Paso 4.** Sube el programa.

El siguiente es un programa de ejemplo para el Sensor ORP Grove.

```cpp
#define VOLTAGE 3.37   //vcc voltage(unit: V)
#define OFFSET 16      //UNUSED - zero drift voltage(unit: mV)
#define LED 13         //operating instructions
#define ArrayLenth  40 //times of collection
#define orpPin A7       //orp meter output,connect to Arduino controller ADC pin
#define calPin A6       //orp cal control pin, get a offset by set it to low

double orpValue; 
// double offset=0.0;
int offset=0;
bool is_calibrated = false;
int wait_count = 5;
int orpArray[ArrayLenth];
int orpArrayIndex=0;

double avergearray(int* arr, int number);

void setup(void) {  
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
  pinMode(calPin,OUTPUT);
  // digitalWrite(calPin, LOW);
  digitalWrite(calPin, HIGH);
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
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-offset;
  }
  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical
  {
    if(!is_calibrated) {
      if(wait_count==0){
        offset += (int)orpValue; 
        is_calibrated = true;
        digitalWrite(calPin, LOW);
        Serial.print("offset: ");
        Serial.print((int)offset);
        Serial.println(" mV");
      }
      wait_count--;
    }
    else {
      Serial.print("ORP: ");
      Serial.print((int)orpValue);
      Serial.println(" mV");
      digitalWrite(LED,1-digitalRead(LED)); // convert the state of the LED indicator      
    } 
    printTime=millis()+800;   
  }
}

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
```

Antes de usar el programa, necesitas corregir algunas variables del programa según la situación real.

```c
#define VOLTAGE     3.37  //vcc voltage(unit: V)
#define LED         13    //operating instructions
#define ArrayLenth  40    //times of collection
#define orpPin      A7    //orp meter output,connect to Arduino controller ADC pin
#define calPin      A6    //orp cal control pin, get a offset by set it to low
```

- **VOLTAGE**: se refiere al voltaje de operación real del sensor. Se recomienda que uses un multímetro para medir el voltaje de suministro del pin, mientras más preciso sea el valor, más precisa será la medición. En mi placa de expansión XIAO, el voltaje de suministro medido es 3.37V.

- **LED**: El programa añade la función de LED parpadeante como indicadores de trabajo, que puede definirse aquí como los números de pin LED de la placa de control que estés usando.

- **ArrayLenth**: Número de muestras por unidad de tiempo. Mientras menor sea el valor, menor será el tiempo para obtener valores ORP, pero también hace que los valores de resultado sean inestables. El valor predeterminado es 40.

- **orpPin**: El pin orp del sensor está conectado al número de pin de la placa de control principal.

- **calPin**: El pin cal del sensor está conectado al número de pin de la placa de control principal.

Después de actualizar el programa, selecciona el modelo de placa de desarrollo y número de puerto de Seeed Studio XIAO SAMD21 y sube el programa.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/6.png"/></div>

Enciende el monitor serie y establece la velocidad de baudios a 9600, verás el cambio del valor ORP detectado por el sensor actual.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/4.png"/></div>

:::tip
Si estás subiendo el programa después de poner la sonda del sensor en la solución a medir, con `ArrayLenth = 40`, tomará aproximadamente **15min** de tiempo de calentamiento hasta que el valor ORP se estabilice.
:::

#### Limpiar la sonda del Sensor ORP Pro Grove

Varios factores pueden llevar al bloqueo de los diafragmas del sensor ORP. En particular, las uniones hechas de cerámica, u otro material poroso son propensas a obstruirse. Las razones más frecuentes se listan aquí junto con los respectivos procedimientos de limpieza:

1. Bloqueo con sulfuro de plata (Ag2S): si el electrolito de referencia contiene iones de plata y la muestra que se está midiendo contiene sulfuros, la unión se contaminará con un precipitado de sulfuro de plata. Para limpiar la unión de esta contaminación, límpiala con 8% de tiourea en solución de HCl 0.1 mol/L durante 5-60 minutos (el Limpiador de Tiourea está disponible en METTLER TOLEDO).

2. Bloqueo con cloruro de plata (AgCl): los iones de plata del electrolito de referencia también pueden reaccionar con muestras que contienen iones de cloruro, resultando en un precipitado de AgCl. Este precipitado puede removerse sumergiendo el electrodo en una solución concentrada de amoníaco (35% NH3 aq.).

3. Bloqueo con proteínas: las uniones contaminadas con proteínas a menudo pueden limpiarse sumergiendo el electrodo en una solución de pepsina/HCl (5% pepsina en HCl 0.1 mol/L) durante varias horas (el Limpiador Pepsina-HCl está disponible en METTLER TOLEDO).

4. Otros bloqueos de unión: si la unión está bloqueada con otras contaminaciones, intenta limpiar el sensor ORP en un baño ultrasónico con agua o con una solución de HCl 0.1 mol/L.

:::caution
Por favor **NO** dejes la sonda en una solución durante mucho tiempo, ya que esto puede acortar seriamente la vida útil de la sonda.
:::

#### Almacenar correctamente el Sensor ORP Pro Grove

Después del uso, enjuaga bien el electrodo con agua destilada y aprieta la carcasa protectora. Los electrodos ORP deben almacenarse en la tapa humectante llena con un electrolito de referencia (a menudo KCl 3 mol/L) o solución de almacenamiento InLab. Almacena la semicelda seca. El electrodo debe almacenarse en posición vertical y a temperatura ambiente.

## Solución de problemas

- **P1: ¿Por qué no se necesita calibración para el Grove ORP Sensor Pro?**

> R: Medir redox significa medir el potencial de reducción de la solución. El valor bruto (lectura en mV) es el resultado final. Si el electrodo redox se verifica midiendo en una solución tampón de 220mV y si no está dentro de 220 ± 20 mV, el sensor debe limpiarse (y no calibrarse).

- **¿Qué hacer si falla la verificación del Grove ORP Sensor Pro?**

> R: El valor esperado para el sensor Redox es 220 ± 20 mV. Si esta condición no se cumple, se sugiere limpiar el anillo metálico o pin, usando un pañuelo húmedo, seguido de enjuague con agua destilada y luego volver a medir el valor mV en tampón redox 220 mV. Otra forma de limpiar y remover depósitos del anillo metálico es acondicionarlo con HCI 0.1 mol/L. También en algunos casos, se recomienda un cambio de electrolito de referencia.

- **¿Cuándo se realizan mediciones relativas de mV?**

> R: Puede ser que alguien quiera corregir la lectura por cualquier desplazamiento, por ejemplo, para conocer el potencial contra un electrodo estándar de hidrógeno en lugar de la referencia Ag/AgCl. Por lo tanto, se realizan mediciones relativas de mV, y uno necesita ingresar el desplazamiento en los parámetros de medición.

## Recursos

- **[PDF]** [Grove ORP Sensor Kit Pro_v1.0 SCH](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH_221019.pdf)

- **[ZIP]** [Grove ORP Sensor Kit Pro_v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH&PCB_221019.zip)

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
