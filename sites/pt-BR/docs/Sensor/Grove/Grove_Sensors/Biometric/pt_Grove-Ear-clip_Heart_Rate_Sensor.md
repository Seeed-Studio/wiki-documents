---
description: Grove - Sensor de Frequência Cardíaca com Clipe de Orelha
title: Grove - Sensor de Frequência Cardíaca com Clipe de Orelha
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Ear-clip_Heart_Rate_Sensor
sku: 101020033
last_update:
  date: 1/6/2023
  author: jianjing Huang
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Ear-clip_Heart_Rate_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/Heart_rate_ear_clip_kit.jpg" /></div>

O kit de Sensor de Frequência Cardíaca com Clipe de Orelha contém um clipe de orelha e um módulo receptor. O kit de medição de frequência cardíaca pode ser usado para monitorar a frequência cardíaca de pacientes e atletas. O resultado pode ser exibido em uma tela via porta serial e pode ser salvo para análise. Todo o sistema possui alta sensibilidade, baixo consumo de energia e é portátil.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor-p-1116.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Recursos
--------

- Baixo consumo de energia
- Conveniente de usar
- Alta sensibilidade
- Totalmente compatível com RoHS

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
-------------

<table border="1" cellspacing="0" width="60%">
<tr>
<th scope="col">
Item
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
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente de trabalho
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
Comprimento do fio do clipe de orelha
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
Faixa de medição
</th>
<td colspan="3">
≥30/min
</td>
<td>
-
</td>
</tr>
</table>

Ideias de Aplicação
-----------------

- Monitor de frequência cardíaca.

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Uso
-----

O sketch a seguir demonstra uma aplicação simples usando o Sensor de Frequência Cardíaca com Clipe de Orelha para medir a frequência cardíaca.

- Conecte este módulo à porta digital D2 no [Grove-Base shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132). E conecte o Grove-LED à porta digital 4.
- Conecte o Base Shield ao Arduino/Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/with_ardu.jpg" /></div>

- Copie e cole o código abaixo em um novo sketch do Arduino.

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

- Envie o código.
- Certifique-se de que o sensor esteja em contato com a pele da sua orelha. Este é o sinal quando estamos medindo a frequência cardíaca:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial1.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial2.jpg" /></div>

Na primeira das figuras, que é um diagrama de forma de onda do batimento detectado, um pulso alto aparece quando o coração bate.

:::note
Se o monitor serial retornar uma mensagem de erro, altere a posição do sensor.
:::

Recursos
---------

- [Grove - Código de demonstração do Sensor de Frequência Cardíaca com Clipe de Orelha](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0.zip)
- [Sistema de Sensor PPG](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/PPG%20Sensor%20System.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Ear-clip_Heart_Rate_Sensor -->

## Projetos

**Visualização de dados de transporte com Google Map**：Usamos o Wio LTE cat.1 para monitorar o GPS de transporte e outras informações. Para cadeia de frio, podemos monitorar a localização do GPS junto com temperatura e umidade. Para ciclismo, podemos monitorar a localização do GPS junto com a frequência cardíaca.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/' width='350'></iframe>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

