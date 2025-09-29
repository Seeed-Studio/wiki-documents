---
description: Grove - Sensor de Frecuencia Cardíaca con Banda Pectoral
title: Grove - Sensor de Frecuencia Cardíaca con Banda Pectoral
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Chest_Strap_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Heart_rate_chest_belt_kit.jpg" /></div>

Este kit de banda pectoral para frecuencia cardíaca contiene una banda pectoral y un módulo receptor AM de 5.3 KHz. El kit de medición de frecuencia cardíaca puede utilizarse para monitorear la frecuencia cardíaca de pacientes y atletas, mientras que el resultado puede mostrarse en una pantalla a través del puerto serie y guardarse para análisis. Todo el sistema tiene muchas ventajas, por ejemplo, alta sensibilidad, bajo consumo de energía y portabilidad. Debido a que los módulos se comunican entre sí a través de AM, es muy conveniente permitirte moverte (ten en cuenta que la distancia efectiva es de 30cm).

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Características
--------

- Bajo consumo de energía
- Inalámbrico
- Conveniente de usar
- Antena de ferrita incorporada
- Alta sensibilidad
- Totalmente compatible con RoHS

:::tip
Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
rango de pecho
</th>
<td>
65
</td>
<td>
-
</td>
<td>
145
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
Modo de modulación
</th>
<td colspan="3">
Modulación AM de 5.3KHz
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Duración de la batería
</th>
<td colspan="3">
más de medio año (dependiendo de tu uso)
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Distancia efectiva de recepción
</th>
<td colspan="3">
30
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
Módulos de recepción
</th>
<td colspan="3">
48 X 25 X 10
</td>
<td>
mm
</td>
</tr>
</table>

Ideas de Aplicación
-----------------

- Monitor de frecuencia cardíaca.

:::caution
**1**. La banda pectoral está alimentada por una batería de moneda CR2032. Abre la tapa trasera con una moneda para reemplazarla.

**2**. Si no se usa durante mucho tiempo, por favor retira la batería.
:::

Uso
-----

El siguiente sketch demuestra una aplicación simple de usar el Sensor de Frecuencia Cardíaca de Banda Pectoral para medir la frecuencia cardíaca.

- Conecta este módulo al puerto digital D2 en tu [base shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132). Y conecta Grove-LED al puerto Digital 4.
- Conecta el Base Shield al Arduino/Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-Chest_Strap_Heart_Rate_Sensor.jpg" /></div>

- Copia y pega el código de abajo en un nuevo sketch de Arduino.

```
    #define LED 4//indicator, Grove - LED is connected with D4 of Arduino
    boolean led_state = LOW;//state of LED, each time an external interrupt 
                                    //will change the state of LED
    unsigned char counter;
    unsigned long temp[21];
    unsigned long sub;
    bool data_effect=true;
    unsigned int heart_rate;//the measurement result of heart rate

    const int max_heartpluse_duty = 2000;//you can change it follow your system's request.
                            //2000 meams 2 seconds. System return error 
                            //if the duty overtrip 2 second.
    void setup()
    {
        pinMode(LED, OUTPUT);
        Serial.begin(9600);
        Serial.println("Please ready your chest belt.");
        delay(5000);
        arrayInit();
        Serial.println("Heart rate test begin.");
        attachInterrupt(0, interrupt, RISING);//set interrupt 0,digital port 2
    }
    void loop()
    {
        digitalWrite(LED, led_state);//Update the state of the indicator
    }
    /*Function: calculate the heart rate*/
    void sum()
    {
     if(data_effect)
        {
          heart_rate=1200000/(temp[20]-temp[0]);//60*20*1000/20_total_time 
          Serial.print("Heart_rate_is:\t");
          Serial.println(heart_rate);
        }
       data_effect=1;//sign bit
    }
    /*Function: Interrupt service routine.Get the sigal from the external interrupt*/
    void interrupt()
    {
        temp[counter]=millis();
        Serial.println(counter,DEC);
        Serial.println(temp[counter]);
        switch(counter)
        {
            case 0:
                sub=temp[counter]-temp[20];
                Serial.println(sub);
                break;
            default:
                sub=temp[counter]-temp[counter-1];
                Serial.println(sub);
                break;
        }
        if(sub>max_heartpluse_duty)//set 2 seconds as max heart pluse duty
        {
            data_effect=0;//sign bit
            counter=0;
            Serial.println("Heart rate measure error,test will restart!" );
            arrayInit();
        }
        if (counter==20&&data_effect)
        {
            counter=0;
            sum();
        }
        else if(counter!=20&&data_effect)
        counter++;
        else 
        {
            counter=0;
            data_effect=1;
        }
        
    }
    /*Function: Initialization for the array(temp)*/
    void arrayInit()
    {
        for(unsigned char i=0;i < 20;i ++)
        {
            temp[i]=0;
        }
        temp[20]=millis();
    }
```

- Sube el código.
- Esta es la señal cuando estamos midiendo la frecuencia cardíaca:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/GROVE_heart_rate_chest_belt.bmp" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-heart_rate_serial.jpg" /></div>

En la primera de las figuras, que es un diagrama de forma de onda del latido detectado, aparece un pulso alto cuando late.

:::note
**1**. Las alas de la banda pectoral deben tener contacto con tu piel para obtener una alta precisión.

**2**. La distancia máxima entre la banda pectoral y el módulo receptor debe ser menor a 30cm.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - Archivo EAGLE del Sensor de Frecuencia Cardíaca con Banda Pectoral](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip)
- [Código Demo del Sensor de Frecuencia Cardíaca con Banda Pectoral](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/MeasureHeartRate.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Chest_Strap_Heart_Rate_Sensor -->

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

