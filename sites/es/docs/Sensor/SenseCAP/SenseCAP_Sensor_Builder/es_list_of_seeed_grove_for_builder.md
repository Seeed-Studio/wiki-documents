---
description: Añadiendo más módulos Grove al Builder
title: Añadiendo más módulos Grove al Builder
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/list_of_supported_grove_n_adding_more
last_update:
  date: 11/24/2023
  author: Matthew
---

# Descripción general

En este wiki, estamos introduciendo cómo añadir más módulos Grove al SenseCAP S2110 Sensor Builder y listar todos los compatibles.

## Añadir Grove - Sensor de Corriente DC/AC ±5A (ACS70331) al builder y aplicarlo

### 1. Construir nuevas librerías usando el código fuente de GitHub

Los contenidos aquí están en [GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_S2110) donde mantenemos el código.

- **Paso 1:** Añadir un archivo `sensorNew.hpp` a la carpeta `src\sensor` para el nuevo sensor.

- **Paso 2:** Definir la clase del sensor e implementar las funciones `init()` y `sample()`.

 La clase del sensor debe heredar de la clase `sensorClass`, e implementar las funciones `init()` y `sample()`. 
   La función `init()` se usa para inicializar el sensor, y luego devuelve un valor de desplazamiento de registro para la comunicación Modbus.
   La función `sample()` se usa para leer los datos del sensor, devuelve true cuando los datos son válidos, y devuelve false cuando los datos son inválidos.

- **Paso 3:** Incluir el archivo `sensorNEW.hpp` y llamarlo.

 Añadir la línea `#include "sensorNew.hpp"` al archivo `src\sensor\sensorBuilder.hpp`.
 En la función `setup()` del archivo `sensorBuilder.ino`, crear el objeto de la nueva clase del sensor y llamar a la función `SensorBuilder.addSensor()` con él como argumento. 

Consulte el siguiente código:

```cpp
void setup()
{
  Serial.begin(9600);
  SensorBuilder.check_grove();
 
  /* sensor list */
  sensorUltrasonic *ultrasonic = new sensorUltrasonic();
  SensorBuilder.addSensor(ultrasonic);
  
  // add new sensor to sensor list
  sensorNew *newSensor = new sensorNew();
  SensorBuilder.addSensor(newSensor);

  SensorBuilder.begin();
}
```

:::note
La dirección de registro Modbus para el nuevo sensor comenzará desde `0x0034`, el ancho de bit del registro para cada valor de medición es 32, por lo que el desplazamiento de dirección de registro entre dos valores de medición adyacentes es 2.
:::

### 2. Conocimiento de la Tabla de Registros Modbus

Las direcciones de registro Modbus 0x0000 a 0x0003 están reservadas para almacenar información del sistema del módulo, donde 0x0000 es la dirección modbus con un valor predeterminado de 1 y un valor máximo de 247, 0x0001 es la velocidad de baudios del puerto serie con un valor predeterminado de 96 (correspondiente a 9600), y 0x0002 a 0x0003 son para la versión del software.

<table>
  <thead>
    <tr>
      <th>Nombre del Sensor Grove</th>
      <th>Nombre del Registro</th>
      <th>Dirección del Registro<br />(Hexadecimal)</th>
      <th>Dirección del Registro<br />(Decimal)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={3}>Grove - Sensor de CO2, Temperatura y Humedad (SCD41)</td>
      <td>Temperatura</td>
      <td>0x0004</td>
      <td>04</td>
    </tr>
    <tr>
      <td>Humedad</td>
      <td>0x0006</td>
      <td>06</td>
    </tr>
    <tr>
      <td>CO2</td>
      <td>0x0008</td>
      <td>08</td>
    </tr>
    <tr>
      <td>Grove - Sensor de Luz v1.2</td>
      <td>Luz</td>
      <td>0x000A</td>
      <td>10</td>
    </tr><tr>
      <td>Grove - Sensor de Llama</td>
      <td>Llama</td>
      <td>0x000C</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Grove - Sensor de Oxígeno (MIX8410)</td>
      <td>Oxígeno</td>
      <td>0x000E</td>
      <td>14</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove - Sensor de luz solar (SI1151)</td>
      <td>Intensidad de Luz</td>
      <td>0x0010</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Luz Visible</td>
      <td>0x0012</td>
      <td>18</td>
    </tr>
    <tr>
      <td>UV</td>
      <td>0x0014</td>
      <td>20</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove Sensor de Temperatura y Barómetro (BMP280)</td>
      <td>Temperatura Barométrica</td>
      <td>0x0016</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Presión Atmosférica</td>
      <td>0x0018</td>
      <td>24</td>
    </tr>
    <tr>
      <td>Altura</td>
      <td>0x001A</td>
      <td>26</td>
    </tr>
    <tr>
      <td rowSpan={4}>Grove - Sensor de Temperatura, Humedad, Presión y Gas (BME680)</td>
      <td>Temperatura</td>
      <td>0x001C</td>
      <td>28</td>
    </tr>
    <tr>
      <td>Presión Atmosférica</td>
      <td>0x001E</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Humedad</td>
      <td>0x0020</td>
      <td>32</td>
    </tr>
    <tr>
      <td>Calidad del Aire (VOC)</td>
      <td>0x0022</td>
      <td>34</td>
    </tr>
    <tr>
      <td rowSpan={4}>Grove - Sensor de Gas V2 (Multicanal)</td>
      <td>N02</td>
      <td>0x0024</td>
      <td>36</td>
    </tr>
    <tr>
      <td>C2H50H</td>
      <td>0x0026</td>
      <td>38</td>
    </tr>
    <tr>
      <td>VOC</td>
      <td>0x0028</td>
      <td>40</td>
    </tr>
    <tr>
      <td>CO</td>
      <td>0x002A</td>
      <td>42</td>
    </tr><tr>
      <td>Grove - Sensor UV</td>
      <td>Intensidad UV</td>
      <td>0x002C</td>
      <td>44</td>
    </tr>
    <tr>
      <td>Grove - Medidor de Sensor de Turbidez V1.0</td>
      <td>Turbidez</td>
      <td>0x002E</td>
      <td>46</td>
    </tr>
    <tr>
      <td>Grove - Sensor TDS</td>
      <td>TDS</td>
      <td>0x0030</td>
      <td>48</td>
    </tr>
    <tr>
      <td>Grove - Medidor Ultrasónico de Distancia</td>
      <td>Distancia</td>
      <td>0x0032</td>
      <td>50</td>
    </tr>
  </tbody>
</table>

### 3. Conocimiento de la Conexión de Hardware

Conecta el pin SIG (señal) del sensor a uno de los pines analógicos de cualquier microcontrolador, suministra 5V-3.3V a VCC y GND a Tierra del microcontrolador.

El sensor Grove viene con un potenciómetro montado en él, que permite al usuario ajustar finamente la ganancia, haciéndolo ajustable para adaptarse a diferentes voltajes de entrada. Esto ayuda a cambiar la sensibilidad del sensor.

<div align="center"><img width={600} src="https://media-cdn.seeedstudio.com/media/wysiwyg/__16696942484712.png"/></div>


### 4. A partir de los pasos anteriores, podemos tener la biblioteca para el sensor AC Grove:

Siguiendo los pasos anteriores, tenemos la biblioteca para aplicar el sensor AC Grove.

```cpp
#ifndef _SENSOR_AC_H
#define _SENSOR_AC_H

#include "sensorClass.hpp"

#define AC_ADC_PIN A2
#define ADC_BITS 12
#define ADC_COUNTS (1<<ADC_BITS)

class sensorAC : public sensorClass
{
  public:
  sensorAC(): sensorClass("AC"){};
  ~sensorAC(){};

  uint16_t init(uint16_t reg, bool i2c_available);
  bool connected();
  bool sample();

  enum
  {
    AC = 0,
    MAX
  };
  private:
  	double voltCal = 523.56;
  	double phaseCal = 1.7;
  	unsigned int cycles = 20;
  	unsigned int timeout = 2000;
  	int SupplyVoltage = 3300;
  	int sampleV;
  	double lastFilteredV,filteredV;
  	double offsetV = ADC_COUNTS >> 1;
  	double phaseShiftedV;
  	double sqV,sumV;
  	int startV;
  	boolean lastVCross,checkVCross;
};

uint16_t sensorAC::init(uint16_t reg, bool i2c_available){
  uint16_t t_reg = reg; 

  for (uint16_t i = 0; i < sensorAC::MAX; i++)
    {
        sensorClass::reg_t value;
        value.addr = t_reg;
        value.type = sensorClass::regType_t::REG_TYPE_S32_ABCD;
        value.value.s32 = 0;
        t_reg += sensorClass::valueLength(value.type);
        m_valueVector.emplace_back(value);
    }

    _connected = i2c_available ? false : true;
    //_connected = true;
    return t_reg - reg;
}

bool sensorAC::sample()
{
	
  GROVE_SWITCH_ADC;
  pinMode(AC_ADC_PIN, INPUT);
  
  unsigned int crossCount = 0;
  unsigned int numberOfSamples = 0;
  
  unsigned long start = millis();
  
  while(1){
	int startV = analogRead(AC_ADC_PIN);
	if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))
		break;
	if((millis()-start)>timeout)	
		break;
  }
  
  start = millis();
  
  while((crossCount<cycles) && ((millis()-start)<timeout))
  {
  	numberOfSamples++;
  	lastFilteredV = filteredV;
  	
  	sampleV = analogRead(AC_ADC_PIN);
  	offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);
  	filteredV = sampleV - offsetV;
  	
  	sqV = filteredV * filteredV;
  	sumV += sqV;
  	
  	phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);
  	
  	lastVCross = checkVCross;
  	if(sampleV>startV)
  		checkVCross = true;
  	else 
  		checkVCross = false;
  	if(numberOfSamples == 1)
  		lastVCross = checkVCross;
  	if(lastVCross !=checkVCross)
  		crossCount++;
  }
  
  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));
  float value = V_RATIO * sqrt(sumV/numberOfSamples);
  m_valueVector[AC].value.s32 = value * SCALE;
  //Serial.println(value);
  sumV = 0; 
  
  return true;
}

bool sensorAC::connected()
{
  return _connected;
}

#endif
```

### 5. Usar Arduino para programar y probar primero

El programa toma algunos parámetros que necesitan ser inicializados antes de ejecutar el programa. Esto asegura que el programa esté funcionando correctamente con el sensor y para obtener valores precisos.

Primero carga el programa en el microcontrolador, luego calibra los parámetros para ajustar las lecturas.

```cpp
#define AC_ADC_PIN A2				//here pin A2 is used
#define ADC_BITS 12					//depends on microcontroller to microcontroller
#define Calibration_Value 523.56	//depends on the calibration result
#define Phase_Shift 1.7 			//depends on the calibration result

void setup() {
  Serial.begin(115200);
  pinMode(AC_ADC_PIN, INPUT);
}

int ADC_COUNTS = (1<<ADC_BITS);
double voltCal = Calibration_Value;
double phaseCal = Phase_Shift;
unsigned int cycles = 10;			//Number of AC Cycles you want to measure
unsigned int timeout = 500;			//Timeout 
int SupplyVoltage = 3300;
int sampleV;
double lastFilteredV,filteredV;
double offsetV = ADC_COUNTS >> 1;
double phaseShiftedV;
double sqV,sumV;
int startV;
boolean lastVCross,checkVCross;

void loop() {
  unsigned int crossCount = 0;
  unsigned int numberOfSamples = 0;
  
  unsigned long start = millis();
  
  while(1){
  int startV = analogRead(AC_ADC_PIN);
  if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))
    break;
  if((millis()-start)>timeout)  
    break;
  }
  
  start = millis();
  
  while((crossCount<cycles) && ((millis()-start)<timeout))
  {
    numberOfSamples++;
    lastFilteredV = filteredV;
    
    sampleV = analogRead(AC_ADC_PIN);
    offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);
    filteredV = sampleV - offsetV;
    
    sqV = filteredV * filteredV;
    sumV += sqV;
    
    phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);
    
    lastVCross = checkVCross;
    if(sampleV>startV)
      checkVCross = true;
    else 
      checkVCross = false;
    if(numberOfSamples == 1)
      lastVCross = checkVCross;
    if(lastVCross !=checkVCross)
      crossCount++;
  }
  
  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));
  float value = V_RATIO * sqrt(sumV/numberOfSamples);
  Serial.println(value);
  sumV = 0; 

}
```

### 6. Obtener valor de calibración

Inicialmente el pin analógico está configurado en el pin A2, puede cambiarse según sus requerimientos, usando el parámetro AC_ADC_PIN.
Los valores de Calibration_Value y Phase_Shift necesitan cambiarse cada vez que cambie la fuente de voltaje ya que el voltaje AC varía de país a país o a veces incluso de enchufe a enchufe.

El programa envía el valor del sensor al monitor serie. También se puede abrir el plotter serie para ver la gráfica de voltaje vs tiempo.

- Paso 1: Tome el multímetro y mida el voltaje AC y anótelo.
- Paso 2: De manera similar anote el voltaje mostrado en el monitor serie.

Aquí en mi caso, la lectura del multímetro es 220V voltaje RMS, mientras que el sensor muestra 718.87V en el monitor serie, para obtener un valor de calibración preciso, necesitamos hacer matemáticas simples, usando la siguiente fórmula.

![Mains Voltage / x = Sensor voltage / Initial Calibration](https://s0.wp.com/latex.php?latex=+%5Cdfrac%7BMains+Voltage%7D%7Bx%7D+%3D+%5Cdfrac%7BSensor+voltage%7D%7BInitail+Calibration%7D&bg=ffffff&fg=000&s=0&201002)

- Paso 3: Encuentre el valor de x y reemplácelo con Calibration_Value en el programa y cargue el programa al microcontrolador.

![x = (mains voltage × initial calibration) / Sensor voltage](https://s0.wp.com/latex.php?latex=+x+%3D+%5Cdfrac%7Bmains+voltage+%5Ctimes+initial+calibration%7D%7BSensor+voltage%7D&bg=ffffff&fg=000&s=0&c=20201002)
Puede cambiar los otros parámetros como Phase_Shift, Número de ciclos AC y timeout según su configuración o mantenerlos por defecto.

### Referencia

- Puede consultar la [Librería del Sensor de Voltaje AC Grove](https://github.com/mcmchris/mcm-grove-voltage-sensor) para más información.
- Más detalles sobre el cálculo se pueden encontrar [aquí](https://bestengineeringprojects.com/how-to-ac-voltage-measurement-using-arduino-without-transformer/)

## La lista de módulos Grove compatibles para SenseCAP S2110 Sensor Builder

Actualmente, SenseCAP S2110 Sensor Builder soporta los siguientes módulos Grove listos para usar para comunicarse con SenseCAP Data Logger y enviar los datos del sensor a la plataforma SenseCAP vía LoRa.

- [Grove - Sensor de Temperatura y Barómetro (BMP280)](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)
- [Grove - Sensor de Oxígeno (MIX8410)](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)
- [Grove - Sensor de CO2, Temperatura y Humedad - SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)
- [Grove - Sensor de Luz Solar - SI1151](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)
- [Grove - Sensor de Luz v1.2 - Fototransistor LS06-S](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - Sensor de Llama](https://www.seeedstudio.com/Grove-Flame-Sensor.html)
- [Grove - Sensor de Gas (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - Sensor de Gas Multicanal v2](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html?queryID=e92bca5d79e17a6d5bf1447be36e2ee2&objectID=4569&indexName=bazaar_retailer_products)
- [Grove - Sensor/Medidor TDS Para Calidad del Agua (Sólidos Disueltos Totales)](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html?queryID=9f138cfc508f141092493577c1ca83bb&objectID=4400&indexName=bazaar_retailer_products)
- [Grove - Sensor UV](https://www.seeedstudio.com/Grove-UV-Sensor.html?queryID=07ecb93f63b4035df7dfa9aea8b1e498&objectID=1345&indexName=bazaar_retailer_products)
- [Grove - Sensor de Distancia Ultrasónico](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html?queryID=ebe18a5e13611be3b60f176e7bfabde7&objectID=2281&indexName=bazaar_retailer_products)
- [Grove - Sensor de Turbidez](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html?queryID=42f9c89339bce9fbff617e5c8a0328eb&objectID=4399&indexName=bazaar_retailer_products)
- [Grove - Sensor de Rayos](https://www.hackster.io/jojang2u/use-the-as3935-to-detect-lightning-to-predict-the-weather-9170e7)
- [Grove - Sensor de Corriente DC/AC ±5A (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

## ✨ Proyecto de Colaboradores

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a [los esfuerzos de Mohammed Adnan Khan](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904) y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).


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
