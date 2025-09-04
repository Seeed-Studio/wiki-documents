---
description: Grove - Sensor de Frecuencia Cardíaca con Clip para Oreja
title: Grove - Sensor de Frecuencia Cardíaca con Clip para Oreja
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Ear-clip_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/Heart_rate_ear_clip_kit.jpg" /></div>

El kit de sensor de frecuencia cardíaca con clip para oreja contiene un clip para oreja y un módulo receptor. El kit de medición de frecuencia cardíaca puede utilizarse para monitorear la frecuencia cardíaca de pacientes y atletas. El resultado puede mostrarse en una pantalla a través del puerto serie y puede guardarse para análisis. Todo el sistema es de alta sensibilidad, bajo consumo de energía y portátil.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor-p-1116.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Características
--------

- Bajo consumo de energía
- Conveniente de usar
- Alta sensibilidad
- Totalmente compatible con RoHS

:::tip
Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
-------------

<table border="1" cellspacing="0" width="60%">
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
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Trabajo
</th>
<td colspan="3">
6.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Longitud del cable del clip para oreja
</th>
<td colspan="3">
120
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
Rango de Medición
</th>
<td colspan="3">
≥30/min
</td>
<td>
-
</td>
</tr>
</table>

Ideas de Aplicación
-----------------

- Monitor de frecuencia cardíaca.

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

El siguiente sketch demuestra una aplicación simple de usar el Sensor de Frecuencia Cardíaca de Clip para Oreja para medir la frecuencia cardíaca.

- Conecta este módulo al puerto digital D2 en [Grove-Base shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132). Y conecta Grove-LED al puerto Digital 4.
- Conecta el Base Shield al Arduino/Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/with_ardu.jpg" /></div>

- Copia y pega el código de abajo en un nuevo sketch de Arduino.

```
    // Function: This program can be used to measure heart rate, the lowest pulse in the program be set to 30.
    //         Use an external interrupt to measure it.
    // Hardware: Grove - Ear-clip Heart Rate Sensor, Grove - Base Shield, Grove - LED
    // Arduino IDE: Arduino-1.0
    // Author: FrankieChu       
    // Date: Jan 22, 2013
    // Version: v1.0
    // by www.seeedstudio.com
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
- Asegúrate de que el sensor haga contacto con la piel de tu oreja. Esta es la señal cuando estamos midiendo la frecuencia cardíaca:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial1.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial2.jpg" /></div>

En la primera de las figuras, que es un diagrama de forma de onda del latido detectado, aparece un pulso alto cuando late.

:::note
Si el monitor serie devuelve un mensaje de error, por favor cambia la posición del sensor.
:::

Recursos
--------

- [Código de demostración del Grove - Sensor de Frecuencia Cardíaca con Clip para Oreja](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0.zip)
- [Sistema de Sensor PPG](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/PPG%20Sensor%20System.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Ear-clip_Heart_Rate_Sensor -->

## Proyectos

**Visualización de datos de transporte con Google Map**：Usamos el Wio LTE cat.1 para monitorear el GPS de transporte y otra información. Para la cadena de frío, podemos monitorear la ubicación GPS junto con la temperatura y humedad. Para el ciclismo, podemos monitorear la ubicación GPS junto con la frecuencia cardíaca.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/' width='350'></iframe>

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

