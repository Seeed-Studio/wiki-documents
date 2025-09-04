---
description: Grove - Amplificador de Termopar 1-Wire (MAX31850K)
title: Grove - Amplificador de Termopar 1-Wire (MAX31850K)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/main.JPG" /></div>

El Grove - Amplificador de Termopar 1-Wire (MAX31850K) es un convertidor de termopar a digital con resolución de 14 bits y compensación de unión fría. Este módulo está diseñado para ser usado en conjunto con un termopar tipo k. Los termopares tienen un rango de medición mucho mayor que los termistores. Por ejemplo, este [termopar tipo k](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) en nuestro sitio web tiene un rango de medición de -50℃ a +600℃.

Este módulo está basado en el MAX31850K, que integra amplificador, ADC y ROM de 64 bits. Gracias a la ROM de 64 bits, cada dispositivo tiene un código serial único de 64 bits, lo que permite que múltiples unidades funcionen en el mismo bus 1-Wire. Por lo tanto, es simple usar un microcontrolador (el dispositivo maestro) para monitorear la temperatura de muchos termopares distribuidos en un área grande.

Nuevamente, este módulo no puede funcionar solo, debe trabajar con un termopar tipo k, si no tienes uno, puedes considerar el [Sensor de Temperatura Termopar Tipo K-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html) en nuestro bazar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Amplificador de Termopar 1-Wire (MAX31850K) | Inicial                                                                                               | Ago 2018      |

## Características

- Compensación Integrada de Unión Fría
- Amplio Rango de Conversión: permite lecturas de -270℃ a +1768℃
- 14 Bits, Resolución de 0.25℃
- No funcionará con ningún otro tipo de termopar excepto tipo K
- Detecta Cortocircuitos del Termopar a GND o VDD
- Detecta Termopar Abierto

:::caution
Aunque este módulo puede convertir de -270℃ a +1768℃, el rango de medición de temperatura también está limitado por el termopar que uses.
:::

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V/5V |
|Resolución de Temperatura|14 bits|
|Precisión de Temperatura|± 2℃ |
|Rango de Temperatura de Operación|-40℃ a +125℃|
|Rango de Lecturas Permitidas|-270℃ a +1768℃|
|Rango de Temperatura de Almacenamiento|-65℃ a +150℃ |
|Conector de Entrada|DIP Hembra Azul-2Pin|
|Interfaz de Salida|Bus 1-Wire|
|Tamaño|L: 40mm A: 20mm H: 18mm|
|Peso|4.8g|
|Tamaño del Paquete|L: 140mm A: 90mm H: 20mm|
|Peso Bruto|11g|

## Aplicaciones

- Médica
- Electrodomésticos
- Industrial
- HVAC (Calefacción, Ventilación y Aire Acondicionado)

## Descripción General del Hardware

### Mapa de Pines

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map_back.jpg" /></div>

### Esquemático

**Conector de Entrada**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_1.jpg" /></div>

Debido a los pequeños niveles de señal involucrados, tomamos muchas medidas para filtrar el ruido.

- **1--L1,L2** Usamos termopares de hasta 1 metro de longitud. Cables tan largos pueden considerarse como antenas, que recibirán interferencia del campo eléctrico espacial y generarán ruido de alta frecuencia. Por eso usamos dos inductancias para filtrar el ruido de alta frecuencia.

- **2--C1** Es fuertemente recomendado por el fabricante del chip agregar un capacitor diferencial cerámico de montaje superficial de 10nF, colocado a través de los pines T+ y T-, para filtrar el ruido en las líneas del termopar.

- **3--D1** Usamos el SUPRESOR DE VOLTAJE BIDIRECCIONAL DUAL SZNUP2105LT3G para proteger este módulo de ESD (descarga electrostática).

**Circuito elevador de nivel bidireccional**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_2.jpg" /></div>

Este es un circuito elevador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes. La parte izquierda, el pin **DQ** del MAX31850K usa 3.3V, si el Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q6** es un MOSFET de Canal N [2N7002](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúa como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf).

:::note
      En esta sección solo te mostramos parte del esquemático, para el documento completo por favor consulta los [Recursos](https://wiki.seeedstudio.com/es/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)
:::

### Dibujo de Ensamblaje

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/Assembling.jpg" /></div>

:::tip
Por favor inserta el cable <font style={{fontWeight: 'bold', color: '#AE0000'}}>Rojo</font> del termopar en el puerto **T+** del Grove - Amplificador de Termopar de 1 Cable (MAX31850K), y el cable <font style={{fontWeight: 'bold', color: '#FFFFFF'}}>Blanco</font> en el puerto **T-**. Si no usas el termopar tipo k de nuestro bazar, el color puede ser diferente, por favor asegúrate del **+ -** con el vendedor.
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - Amplificador de Termopar 1-Wire x 2|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank">Obtener Uno Ahora</a>|
|termopar tipo k x 2|Grove - Hub I2C|
|----|---|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thermocouple.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/12C%20hub.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1-** Hemos ofrecido dos ejemplos de software, **simple** y **múltiple**, los requisitos de materiales anteriores son para el ejemplo **múltiple**. Si quieres probar el ejemplo **simple**, entonces el Grove - I2C Hub no es necesario, y solo un Grove - 1-Wire Thermocouple Amplifier será suficiente.

**2-** Usamos el I2C Hub aquí no como una interfaz I2C, sino solo como una interfaz de transferencia normal de uno a dos.
:::

- **Paso 1.** Inserta el cable rojo del termopar tipo k en **T+**, inserta el cable blanco claro del termopar tipo k en **T-**

- **Paso 2.** Conecta el Grove - I2C Hub al puerto **D3** del Base Shield.

- **Paso 3.** Conecta el Grove - 1-Wire Thermocouple Amplifier A y B al Grove - I2C Hub.

- **Paso 4.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 5.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/connect.jpg" /></div>

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     |  Cable Grove |Grove - I2C Hub |Grove - 1-Wire Thermocouple Amplifier|
|---------------|-------------------------|----|-----|
| GND            |  Negro                   |G|GND|
| 5V           | Rojo                   |V|VCC|
| NC            | Blanco                   |SDA|NC|
| D3            | Amarillo                  |SCL|DQOUT|

#### Software

:::caution
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar
:::

- **Paso 1.** Descarga la librería [Seeed_MAX31850K](https://github.com/Seeed-Studio/Seeed_MAX31850K) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Descomprime la carpeta de la librería, sigue la ruta para encontrar y abrir **Multiple.ino** ---> **xxxx\Arduino\libraries\Seeed_MAX31850K-master\examples\Multiple**. xxxx es la ruta donde instalaste tu Arduino.

Esta carpeta **\Arduino\libraries\Seeed_MAX31850K-master\examples** contiene dos ejemplos： **Multiple.ino** y **Simple.ino**.
>Simple.ino--modo simple(un host y un esclavo)

>Multiple.ino--modo múltiple(un host y múltiples esclavos, basado en direccionamiento rom-algoritmo de búsqueda one wire)

O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 3
#define TEMP_RESOLUTION 9

#define MAX_NUM_OF_DEVICE  10

// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

// arrays to hold device addresses
DeviceAddress Device_add[MAX_NUM_OF_DEVICE];
DeviceAddress insideThermometer, outsideThermometer;

void setup(void)
{
  // start serial port
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();

  // locate devices on the bus
  Serial.print("Locating devices...");
  Serial.print("Found ");
  Serial.print(sensors.getDeviceCount(), DEC);
  Serial.println(" devices.");

  Serial.print("Parasite power is: "); 
  if (sensors.isParasitePowerMode()) Serial.println("ON");
  else Serial.println("OFF");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
    if(!sensors.getAddress(Device_add[i],i))
    {
      Serial.println("Find device error!!");
    }
    else
    {
      Serial.print("Device [");
      Serial.print(i);
      Serial.print("] addr =");
      printAddress(Device_add[i]);
    }
    Serial.println(" ");
  }

}

// function to print a device address
void printAddress(DeviceAddress deviceAddress)
{
  for (uint8_t i = 0; i < 8; i++)
  {
    // zero pad the address if necessary
    if (deviceAddress[i] < 16) Serial.print("0");
    Serial.print(deviceAddress[i], HEX);
  }
}

// function to print the temperature for a device
void printTemperature(DeviceAddress deviceAddress)
{
  float tempC = sensors.getTempC(deviceAddress);
  Serial.print("Temp C: ");
  Serial.print(tempC);
  Serial.print(" Temp F: ");
  Serial.print(DallasTemperature::toFahrenheit(tempC));
}

// function to print a device's resolution
void printResolution(DeviceAddress deviceAddress)
{
  Serial.print("Resolution: ");
  Serial.print(sensors.getResolution(deviceAddress));
  Serial.println();    
}

// main function to print information about a device
void printData(DeviceAddress deviceAddress)
{
  Serial.print("Device Address: ");
  printAddress(deviceAddress);
  Serial.print(" ");
  printTemperature(deviceAddress);
  Serial.println();
}

void loop(void)
{ 
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures();
  Serial.println("DONE");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
     printData(Device_add[i]);
  }

}

```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Luego establece la velocidad de baudios en **115200**.

:::tip
     Si todo va bien, obtendrás el resultado.
:::

```cpp
DONE
Device Address: 3B23211800ing temperatures... 77.00
Requesting temperatures...DONE
Device Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00
Requesting temperatures...Dallas Temperature IC Control Library Demo
Locating devices...Found 2 devices.
Parasite power is: OFF
Device [0] addr =3B4C965D06D80C98 
Device [1] addr =3B2321180000005C 
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
Requesting temperatures...DONE
Device Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80
Device Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 1-Wire Thermocouple Amplifier archivos eagle](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip)
- **[Zip]** [Librería Seeed_MAX31850K](https://github.com/Seeed-Studio/Seeed_MAX31850K/archive/master.zip)
- **[PDF]** [Hoja de datos del MAX31850](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Max31850.pdf)

## Soporte Técnico y Discusión del Producto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
