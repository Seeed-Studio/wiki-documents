---
description: Grove - Amplificador Diferencial v1.0
title: Grove - Amplificador Diferencial v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Differential_Amplifier_v1.0
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

<!-- ---
name: Grove - Amplificador Diferencial v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html
oldwikiname:  Grove - Amplificador Diferencial v1.0
prodimagename:  Amplifier_V2.jpg
surveyurl: https://www.research.net/r/Grove-Differential_Amplifier_v1
sku:    103020016
--- -->
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_V2.jpg)

¿Has encontrado que configurar un IC amplificador en la protoboard es un trabajo problemático y totalmente innecesario de repetir? Este módulo Grove puede ahorrarte el desorden de configurar tal IC integrando todo el circuito operativo. Está diseñado para amplificación diferencial de entrada precisa. Ingresa las señales diferenciales de tu sensor a este módulo a través de los pines macho, luego tu Arduino obtendrá una salida precisamente amplificada desde la interfaz Grove. El factor de escala de ganancia es seleccionable. Puedes obtener una amplificación de 304 veces o 971 veces mediante un interruptor en la placa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

## Característica

---

* Alta precisión de amplificación

* Factor de escala seleccionable

* Puede ser leído convenientemente por Arduino

* Fuerte protección de entrada: ±40V

## Aplicación

---

* Adquisición de datos

* Sistemas operados por batería

* Amplificadores de puente de presión y temperatura

* Instrumentación de propósito general

## Especificación

---
<table cellspacing="0" width="80%">
  <tr>
    <th colspan="2" scope="col"> Elemento</th>
    <th scope="col"> Mín</th>
    <th scope="col"> Típico</th>
    <th scope="col"> Máx</th>
    <th scope="col"> Unidad</th>
  </tr>
  <tr>
    <th colspan="2" scope="row"> Voltaje de Operación</th>
    <td> 2.7</td>
    <td> 5.0</td>
    <td> 36</td>
    <td> VDC</td>
  </tr>
  <tr>
    <th colspan="2" scope="row"> Voltaje de Entrada</th>
    <td> 0.1</td>
    <td> \\</td>
    <td> (Vcc-0.8)/Ganancia</td>
    <td> mV</td>
  </tr>
  <tr>
    <th colspan="2" scope="row"> Voltaje de Salida</th>
    <td> 0</td>
    <td> \\</td>
    <td> Vcc-0.80</td>
    <td> mV</td>
  </tr>
  <tr>
    <th rowspan="2"> Ganancia</th>
    <td> Seleccionar 304</td>
    <td> 297.92</td>
    <td> 304</td>
    <td> 310.08</td>
    <td colspan="2" rowspan="2"> /</td>
  </tr>
  <tr>
    <td> Seleccionar 971</td>
    <td> 951.58</td>
    <td> 971</td>
    <td> 990.42</td>
  </tr>
</table>

## Función de la Interfaz

---
![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_Interface3.jpg)

**J2：**Interfaz de Fuente de Señal

**J1：**Interfaz de Salida, Interfaz Grove Estándar

**R1：**Resistor de ganancia de 62Ω

**R3:** Resistor de ganancia de 200Ω

**U1:** IC INA125, Amplificador de instrumentación

## Uso

---
**1. Selección del Sensor**

El amplificador puede amplificar señales de escala mA hasta escala A. Antes de usarlo, asegúrate de que el rango de salida de tu sensor esté en escala mA. Por ejemplo, [Sensor de Peso](/es/Weight_Sensor_Load_Cell_0-500g) es uno de ellos.

**2. Reformado del Conector**

Para emparejar el sensor de peso con los pines macho del amplificador, es necesario soldar conectores hembra en sus cables.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Solder.jpg)

**3. Conexión del Hardware**

Conecta el sensor de peso al amplificador como muestra la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Connect5.jpg)

**4. Medición**

Copia y pega el código de demostración a continuación en Arduino IDE y súbelo.

```cpp
void setup()
{
    Serial.begin(9600);
    Serial.println("start");
}

void loop()
{
    int i;
    int value;
    float V,Vo;
    float Sum=0;
    for(i=0;i<10;i++)
    {
        value=analogRead(4);
        V=value*5.00/1023;
        Sum+=V;
        delay(10);
    }
    Vo=Sum/10;
    Serial.print("Output score:");
    Serial.println(Vo);
    delay(1000);
}
```

Puedes ver las señales amplificadas a través del monitor serie. Para el valor de la señal de entrada, necesitas usar el multímetro para medir la diferencia de voltaje entre VIN+ y VIN-.

## Prueba de Precisión del Amplificador

---
A continuación se presenta una prueba para determinar la precisión del amplificador. Recopilamos 100 grupos de señales de entrada y señales de salida del amplificador, bajo condiciones de factor de escala de 304 o 971, y graficamos los siguientes dos gráficos.

Gradualmente añadimos la carga del sensor de peso agregando agua gota a gota en una botella atada a él.

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/TEST_Score1.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Test_Score_Picture2.jpg)

El eje horizontal representa el voltaje de entrada y el eje vertical representa el voltaje de salida. Con el aumento de peso de la botella, la señal de entrada aumenta linealmente. La ganancia real del primer gráfico es 300.1 que tiene una desviación del 1.3% de la ganancia teórica, 304. Y la ganancia real del segundo gráfico es 971. La desviación es del 0.8% comparada con 964.2.

El rango de medición está determinado por el voltaje de alimentación VCC, el voltaje máximo de salida está entre (VCC-1.2) y (VCC-0.8).

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Archivo Eagle del Amplificador 1.0](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip)

* [Esquemático del Amplificador 1.0](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier.pdf)

* [Hoja de Datos INA125](https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/INA125.pdf)

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
