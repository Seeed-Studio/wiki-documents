---
description: Grove - Sensor de Corriente DC/AC ±5A (ACS70331)
title: Grove - Sensor de Corriente DC/AC ±5A (ACS70331)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-5A_DC_AC_Current_Sensor-ACS70331
last_update:
  date: 1/9/2023
  author: jianjing Huang
---


<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-preview.png" /></div>

El Grove - Sensor de Corriente DC/AC ±5A (ACS70331) es un sensor de corriente DC/AC de alta precisión basado en ACS70331. El ACS70331EESATR-005B3 es el IC sensor de corriente de alta sensibilidad de Allegro para aplicaciones de detección de corriente &lt;5 A. Incorpora tecnología de resistencia magnética gigante (GMR) que es 25 veces más sensible que los sensores de efecto Hall tradicionales para detectar el campo magnético generado por la corriente que fluye a través del conductor primario integrado de baja resistencia.

El Grove - Sensor de Corriente DC/AC ±5A (ACS70331) puede medir tanto la corriente DC como la corriente AC hasta 5A con una sensibilidad base de 200mV/A.

:::tip
Hay una tabla de datos de medición sobre corriente para su referencia en la parte de **[Recursos](#jump)** a continuación.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Soporta carga DC y AC
- Ancho de banda de 1 MHz con tiempo de respuesta &lt;550 ns
- Bajo ruido: 8 mA(rms) a 1 MHz
- Resistencia del conductor primario de 1.1 mΩ resulta en baja pérdida de potencia
- Alto PSRR DC permite el uso con fuentes de alimentación de baja precisión o baterías (operación de 3 a 4.5 V)
- Salida analógica

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|Temperatura ambiente de operación| -40 – 85℃|
|Temperatura de almacenamiento|- 65°C – 125°C|
|Voltaje de trabajo|&lt;100V|
|Rango de detección de corriente|0 – 5A|
|Sensibilidad|200mV/A(Típ.)|
|Interfaz de salida|Grove Analógico|
|Interfaz de entrada|Terminal de tornillo|

## Principio de Funcionamiento

Existen dos tipos de detección de corriente: directa e indirecta. La clasificación se basa principalmente en la tecnología utilizada para medir la corriente.

**Detección directa:**

- Ley de Ohm

**Detección indirecta:**

- Ley de Inducción de Faraday
- Sensores de campo magnético
- Efecto Faraday

El Grove - Sensor de Corriente DC/AC ±5A (ACS70331) utiliza tecnología de sensores de campo magnético. Y existen tres tipos de tecnología de sensores de campo magnético:

- Efecto Hall
- Sensores de compuerta de flujo
- Sensor de corriente magneto-resistivo

El Grove - Sensor de Corriente DC/AC ±5A (ACS70331) se basa en el principio del sensor de corriente magneto-resistivo, que también se conoce como GMR. Un magneto-resistor (MR) es un dispositivo de dos terminales que cambia su resistencia parabólicamente con el campo magnético aplicado. Esta variación de la resistencia del MR debido al campo magnético se conoce como el Efecto Magnetoresistivo.

La construcción interna del paquete QFN ACS70331 se muestra en la Figura 2. El chip se sitúa sobre la trayectoria de corriente primaria de tal manera que se produce un campo magnético en el plano con los elementos GMR en el chip. Los elementos GMR 1 y 2 detectan el campo en la dirección +X para el flujo de corriente IP positiva, y los elementos GMR 3 y 4 detectan el campo en la dirección –X para el flujo de corriente IP positiva. Esto permite la medición diferencial de la corriente y el rechazo de campos externos dispersos.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" /></a></p>
  <figcaption><b>Figura 1</b>. <i>Construcción Interna del ACS70331</i></figcaption>
</figure>
</div>

Los cuatro elementos GMR están dispuestos en una configuración de puente de Wheatstone como se muestra en la Figura 2, de tal manera que la salida del puente es proporcional al campo diferencial detectado por los cuatro elementos, rechazando campos comunes.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" /></a></p>
  <figcaption><b>Figura 2</b>. <i>Configuración de Puente de Wheatstone</i></figcaption>
</figure>
</div>

## Descripción del Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/pinout.jpg" /></a></p>
  <figcaption><b>Figura 3</b>. <i>Distribución de Pines</i></figcaption>
</figure>
</div>

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Comenzando

:::caution
Está prohibido que el cuerpo humano toque el módulo durante la prueba, de lo contrario existe peligro de descarga eléctrica.
:::

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Sensor de Corriente DC/AC ±5A (ACS70331)|
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Demo DC

##### Conexión de Hardware

- **Paso 1.** Conecta el Grove - Sensor de Corriente DC/AC ±5A (ACS70331) al puerto **A0** del Base Shield.

- **Paso 2.** Conecta los polos positivo y negativo del circuito a probar a los correspondientes polos positivo y negativo del terminal de tornillo.

:::tip
Si inviertes los polos positivo y negativo, la lectura se invertirá. Este sensor necesita calibración antes del uso, así que por favor no enciendas el circuito primero.
:::

- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/101020615-connect.png" /></a></p>
  <figcaption><b>Figura 4</b>. <i>Usamos la Fuente de Alimentación DC en este demo, por favor configura la corriente a 0A o no la enciendas al principio</i></figcaption>
</figure>
</div>

##### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la Librería [Grove Current Sensor](https://github.com/Seeed-Studio/Grove_Current_Sensor) desde Github.

- **Paso 2.** En la carpeta /example/, puedes encontrar el código de demostración. Aquí tomamos el [Grove - Sensor de Corriente DC/AC ±5A (ACS70331)](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_5A_DC_Current_Sensor/Grove_5A_DC_Current_Sensor.ino) como ejemplo. Solo haz clic en **Grove_5A_DC_Current_Sensor.ino** para abrir el demo. O puedes copiar el siguiente código:

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A5

// Take the average of 500 times

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mA per 200mV 


float Vref = 1508;

void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // Read the value 500 times:
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // wait 2 milliseconds before the next loop
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // Calculate the corresponding current
  float current = (voltage - Vref) * sensitivity;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // Print display current (mA)
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // Reset the sensorValue for the next reading
  sensorValue = 0;
  // Read it once per second
  delay(1000);
}

```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **9600**.

- **Paso 5. Calibración**  
        Cuando no hay corriente fluyendo, el sensor aún tendrá un pequeño valor de salida. Llamamos a este valor **desplazamiento cero**.

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca1.jpg" /></a></p>
  <figcaption><b>Figura 5</b>. <i>El desplazamiento cero de esta placa es 595.70mV，Convertido a corriente es -4561.48mA</i></figcaption>
</figure>
</div>

Debido a la presencia del desplazamiento cero, el sensor también tendrá una lectura cuando no hay corriente. Así que establecemos un parámetro **Vref** para corregirlo, puedes encontrarlo en el bloque de código anterior.

Línea 21:

```cpp
float Vref = 1508;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

En el código de demostración, establecemos el Vref a 1508, sin embargo, el valor de desplazamiento cero varía de placa a placa. Como sabes, la placa que usamos en esta demostración es 595.70. Así que modifiquemos la Línea 21:

```cpp
float Vref = 596;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

Ahora subamos el código modificado y verifiquemos el resultado:

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/img/ca2.jpg" /></a></p>
  <figcaption><b>Figura 6</b>. <i>Ahora el desplazamiento cero de corriente se convierte en 0.02mA</i></figcaption>
</figure>
</div>

Cuando la salida de corriente se convierte en 0mA o un valor pequeño, has completado la calibración.

- **Paso 6.** Ahora es todo tuyo, puedes encender la corriente. Por favor siéntete libre de usarlo, ¡recuerda que este es un Sensor de Corriente de 5A, la corriente no puede exceder los 5A!

Si quieres conocer la fórmula de cálculo del resultado, por favor consulta la [FAQ Q1](#faq)

#### Demo AC

:::caution
Cuando uses alimentación AC, por favor presta atención a la seguridad y evita descargas eléctricas.
:::

Para la conexión de hardware y la parte de calibración, por favor consulta el [Demo DC](#dc-demo), la única diferencia es el código. Por favor usa el siguiente código para carga AC.

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A5

// Take the average of 500 times

const int averageValue = 500;

long int sensorValue = 0;

float sensitivity = 1000.0 / 200.0; //1000mA per 200mV 


//float Vref = 244;
float Vref = 1494;

void setup() 
{
  SERIAL.begin(9600);
}
static float tempval;
void loop() 
{

  // Read the value 500 times:
  for(int i=0;i<20;i++)
  {

  for (int i = 0; i < averageValue; i++)
  {
    int temp;
    temp= analogRead(Pin);
    if(temp>sensorValue)
    {
        sensorValue=temp;
    }
    delayMicroseconds(40);
  }
  tempval+=sensorValue;
  }

  sensorValue=tempval/20.0;
  tempval=0;
  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // Calculate the corresponding current
  float current = ((voltage - Vref) * sensitivity)*0.707;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  

  // Print display current (mA)
  SERIAL.print("current: ")
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");


  // Reset the sensorValue for the next reading
  sensorValue = 0;

  // Read it once per second
  delay(1000);
}

```

## FAQ

**P1#** ¿Cuál es la fórmula de cálculo actual?

**R1:** Si piensas que la [parte del principio](#working-principle) es muy complicada, vamos a explicarlo de manera sencilla. La corriente en el circuito a probar excita el campo magnético, lo que causa que el valor de resistencia de los elementos GMR cambie. Y el cambio de resistencia en el puente causa un cambio en el voltaje a la salida del chip. Llamamos a la salida de voltaje como **V<sub>IOUT</sub>**.

<div><p style={{textAlign: 'center'}}>
  V<sub>IOUT</sub> = Sens × I<sub>p</sub> + V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens es el coeficiente que convierte la corriente en un voltaje de salida. Para este módulo es 200mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> es el valor de corriente en el circuito a probar, Unidad mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> es la salida de voltaje cuando I<sub>p</sub> es 0mA (lo que significa que no hay corriente en el circuito a probar), Unidad mV.

Aquí viene el valor de corriente:  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

Ahora, revisemos la figura 5, explicaremos por qué el valor de corriente de la salida no es 0 cuando el valor de corriente real en el circuito a probar es 0. Como puedes ver en la figura 5, el **initialValue** es 595.70mV, que es el **V<sub>IOUT</sub>**; la corriente es -4561.48mA, que es el **I<sub>p</sub>**. En cuanto al **V<sub>IOUT(Q)</sub>**, es el **Vref** que establecemos en el código.
En la figura 5, es 1508. Y el **Sens** es 200mA/V, que es 200mA/1000mV. Ahora, hagamos algunos cálculos:

<div><p style={{textAlign: 'center'}}>
  {'{'}(595.70mV-1508mV ) / (200mA/1000mV){'}'} = -4561.50mA
</p></div>

Entonces, en la figura 6, cuando establecemos el **Vref** a 595.70, el **Ip** se convierte en 0mA.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## <span id="jump">Recursos</span>

- **[ZIP]** [Grove - ±5A DC/AC Current Sensor (ACS70331) Archivo de esquemas](https://files.seeedstudio.com/wiki/Grove--5A_DC-AC_Current_Sensor-ACS70331/res/5A%20DCAC%20Current%20Sensor(ACS70331)%20v1.0.zip)
- **[PDF]** [Hoja de datos ACS70331](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Current_Sensor_ACS70331.pdf)
- **[PDF]** [Datos de medición](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove_±5A_DCAC_Current_Sensor_v1.1_measurement_data_20231214.xls)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
