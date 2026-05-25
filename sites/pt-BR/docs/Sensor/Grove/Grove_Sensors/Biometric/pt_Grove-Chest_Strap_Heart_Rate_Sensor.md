---
description: Grove - Sensor de Frequência Cardíaca com Cinta Torácica
title: Grove - Sensor de Frequência Cardíaca com Cinta Torácica
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Chest_Strap_Heart_Rate_Sensor
sku: 101020066
last_update:
  date: 1/6/2023
  author: jianjing Huang
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Chest_Strap_Heart_Rate_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Heart_rate_chest_belt_kit.jpg" /></div>

Este kit de cinta torácica de frequência cardíaca contém um cinto peitoral e um módulo receptor AM de 5,3 KHz. O kit de medição de frequência cardíaca pode ser usado para monitorar a frequência cardíaca de pacientes e atletas; ao mesmo tempo, o resultado pode ser exibido em uma tela via porta serial e salvo para análise. Todo o sistema possui muitas vantagens, por exemplo, alta sensibilidade, baixo consumo de energia e portabilidade. Como os módulos se comunicam entre si via AM, é muito conveniente permitir que você se mova (observe que a distância efetiva é de 30 cm).

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Características
--------

- Baixo consumo de energia
- Sem fio
- Conveniente de usar
- Antena de ferrite embutida
- Alta sensibilidade
- Totalmente compatível com RoHS

:::tip
Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão
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
Faixa de busto
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
Modo de modulação
</th>
<td colspan="3">
5.3KHz AM modulate
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Vida útil da bateria
</th>
<td colspan="3">
mais de meio ano (dependendo do seu uso)
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Distância efetiva de recepção
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
Módulos receptores
</th>
<td colspan="3">
48 X 25 X 10
</td>
<td>
mm
</td>
</tr>
</table>

Ideias de Aplicação
-----------------

- Monitor de frequência cardíaca.

:::caution
**1**. A cinta torácica é alimentada por uma bateria tipo moeda CR2032. Abra a tampa traseira com uma moeda para substituí-la.

**2**. Se não for usada por um longo período, remova a bateria.
:::

Uso
-----

O sketch a seguir demonstra uma aplicação simples usando o Sensor de Frequência Cardíaca com Cinta Torácica para medir a frequência cardíaca.

- Conecte este módulo à porta digital D2 no seu [base shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132). E conecte o Grove-LED à porta digital 4.
- Conecte o Base Shield ao Arduino/Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-Chest_Strap_Heart_Rate_Sensor.jpg" /></div>

- Copie e cole o código abaixo em um novo sketch do Arduino.

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

- Envie o código.
- Este é o sinal quando estamos medindo a frequência cardíaca:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/GROVE_heart_rate_chest_belt.bmp" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-heart_rate_serial.jpg" /></div>

Na primeira das figuras, que é um diagrama de forma de onda do batimento cardíaco detectado, um pulso alto aparece quando ocorre o batimento.

:::note
**1**. As “asas” da cinta torácica devem estar em contato com a sua pele para obter alta precisão.

**2**. A distância máxima entre a cinta torácica e o módulo receptor deve ser menor que 30 cm.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Grove - Arquivo EAGLE do Sensor de Frequência Cardíaca com Cinta Torácica](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip)
- [Código de Demonstração do Sensor de Frequência Cardíaca com Cinta Torácica](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/MeasureHeartRate.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Chest_Strap_Heart_Rate_Sensor -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

