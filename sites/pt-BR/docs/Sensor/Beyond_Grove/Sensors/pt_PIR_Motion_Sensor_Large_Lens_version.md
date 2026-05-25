---
title: Módulo sensor de movimento PIR
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/PIR_Motion_Sensor_Large_Lens_version/
slug: /PIR_Motion_Sensor_Large_Lens_version
sku: 101020060
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/PIR_Motion_Sensor_Large_Lens_version/
---
![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/Pir_motion_sensor_v1.0.jpg)

PIR (Detecção Infravermelha Passiva) é usado para detectar movimento de pessoas. Esta versão possui uma lente grande que pode suportar longo alcance e amplo ângulo. O conector padrão de 2,54 mm facilita a fixação em qualquer lugar.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef)

##   Características
---
*   Longo alcance

*   Amplo ângulo

*   Baixo consumo

*   Alimentação DC 3,0-5,5 V

##   Especificações
---
*   Tensão de entrada: DC 3,0-5,5 V

*   Corrente: 100 uA (máx.)

*   Distância de detecção: 9 m (máx.)

*   Sinal de saída: 0,3 VCC (saída em nível alto quando movimento é detectado)

*   Ângulo de detecção: 120°

*   Conector: 3 pinos, passo de 2,54 mm
*   Tamanho: C36×L26×A21 (mm)

##   Uso
---
O sketch a seguir demonstra uma aplicação simples de detecção de movimento. Quando alguém se move em sua faixa de detecção, ele irá gerar nível alto através do pino SIG e o LED irá acender. Caso contrário, ele irá gerar nível baixo. Assim, você pode usá-lo para detectar o movimento de pessoas.

![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/PIR_motion_sensor_module_connection.JPG)

###   Programação

Inclui trechos de código importantes.
Código de demonstração como:
```
/*******************************************************************************/
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 8//Use pin 8 to receive the signal from the module
#define LED    4//the Grove - LED is connected to D4 of Arduino

void setup()
{
    pinsInit();
}

void loop()
{
    if(isPeopleDetected())//if it detects the moving people?
    turnOnLED();
    else
    turnOffLED();
}
void pinsInit()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, ture is someone detected.*/
boolean isPeopleDetected()
{
    int sensorValue = digitalRead(PIR_MOTION_SENSOR);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
```


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Recursos
---
- [Arquivo Eagle do sensor de movimento PIR](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip)

## Suporte Técnico & Discussão sobre o Produto
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>