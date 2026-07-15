---
title: Grove - Sensor de Proximidade Infravermelho de 80 cm
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-80cm_Infrared_Proximity_Sensor/
slug: /Grove-80cm_Infrared_Proximity_Sensor
sku: 101020042
last_update:
  date: 12/30/2022
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-80cm_Infrared_Proximity_Sensor/
---

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Image_of_PSD.jpg)

O Sensor de Proximidade Infravermelho de 80 cm é um sensor de medição de distância de uso geral. Este sensor SharpGP2Y0A21YK, apresenta um encapsulamento pequeno e consumo de corrente muito baixo, realiza leituras contínuas de distância e retorna uma tensão analógica correspondente com uma faixa de 10 cm (4") a 80 cm (30"). Pode ser usado em TVs, computadores pessoais, carros e assim por diante.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)

Recursos
--------

- Fácil de usar
- Ampla faixa de tensão de alimentação: 2,5 V–7 V
- Interface Grove

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Ideias de Aplicação
-----------------

- Conservação de gotas de água
- Brinquedos
- Robótica

Especificações
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Mínimo
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máximo
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de Operação
</th>
<td>
2.5V
</td>
<td>
5V
</td>
<td>
7V
</td>
</tr>
<tr align="center">
<th scope="row">
Tensão de Saída Analógica (80 cm)
</th>
<td>
0.25V
</td>
<td>
0.4V
</td>
<td>
0.5V
</td>
</tr>
<tr align="center">
<th scope="row">
Consumo Médio de Corrente
</th>
<td>
-
</td>
<td>
33mA
</td>
<td>
50mA
</td>
</tr>
</table>

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Uso
-----

### Com Arduino

O sensor de proximidade infravermelho é fácil de usar. A relação entre a leitura de tensão e a distância é mostrada abaixo. Quando lemos a tensão, ela indica a distância do objeto à frente até este sensor.

- Conecte o conector de 3 pinos ao sensor e conecte o conector de 4 pinos à porta A1 do **Grove-Base Shield**.

<div class="admonition note">
<p class="admonition-title">Note</p>
Este sensor é bastante pequeno e usa um conector minúsculo chamado conector Japan Solderless Terminal (JST). Esses conectores possuem três fios: GND, Vcc e o sinal de saída. Como este sensor dispara continuamente e não precisa de nenhum clock para iniciar um ciclo de leitura, é fácil fazer a interface com qualquer microcontrolador. Para Arduino & Seeeduino, preparamos um cabo de 4 pinos para 3 pinos para converter o conector de 3 pinos do sensor em um conector de 4 pinos no Grove Base Shield, para ser compatível com a interface Grove do Seeeduino.
</div>

- Conecte o Arduino/Seeeduino via um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/80cm_Infrared.jpg)

- Copie e cole o código abaixo em um novo sketch do Arduino.

```
    #define IR_PROXIMITY_SENSOR A1 // Analog input pin that  is attached to the sensor
    #define ADC_REF 5//reference voltage of ADC is 5v.If the Vcc switch on the Seeeduino
                     //board switches to 3V3, the ADC_REF should be 3.3
    float voltage;//the sensor voltage, you can calculate or find the distance
                    // to the reflective object according to the figures
                    //on page 4 or page 5 of the datasheet of the GP2Y0A21YK.

    void setup()
    {
        // initialise serial communications at 9600 bps:
        Serial.begin(9600);
    }

    void loop()
    {
        voltage = getVoltage();
        Serial.print("sensor voltage  = " );                       
        Serial.print(voltage);
        // wait 500 milliseconds before the next loop
        delay(500);
    }
    /****************************************************************************/
    /*Function: Get voltage from the sensor pin that is connected with analog pin*/
    /*Parameter:-void                                                       */
    /*Return:   -float,the voltage of the analog pin                        */
    float getVoltage()
    {
        int sensor_value;
        int sum;  
        // read the analog in value:
        for (int i = 0;i < 20;i ++)//Continuous sampling 20 times
        {
            sensor_value = analogRead(IR_PROXIMITY_SENSOR);
            sum += sensor_value;
        }
        sensor_value = sum / 20;
        float voltage;
        voltage = (float)sensor_value*ADC_REF/1024;
        return voltage;
    }
```

- Envie o código.
- Abra o Serial Monitor, você pode obter a tensão. Você pode calcular ou encontrar a distância até o objeto refletor de acordo com as figuras abaixo.

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Infrared_Proximity.jpg)

<div class="admonition note">
<p class="admonition-title">Note</p>
Devido a alguma trigonometria básica dentro do triângulo formado entre o emissor, o ponto de reflexão e o receptor, a saída do detector é não linear em relação à distância que está sendo medida.
</div>

### Com Raspberry Pi

1.Você deve ter um raspberry pi e um grovepi ou grovepi+.

2.Você deve ter concluído a configuração do ambiente de desenvolvimento.
caso contrário, siga [aqui](/pt-br/GrovePi_Plus/). 

3.Conexão

- Conecte o sensor ao soquete D4 do grovepi usando um cabo Grove.

4.Navegue até o diretório de demonstrações:

       cd yourpath/GrovePi/Software/Python/

- Para ver o código

```
    nano grove_infrared_distance_interrupt.py    # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Infrared Distance Interrupt Sensor to digital port D4
    # SIG,NC,VCC,GND
    sensor = 4

    grovepi.pinMode(sensor,"INPUT")

    while True:
        try:
            # Sensor returns LOW and onboard LED lights up when the
            # received infrared light intensity exceeds the calibrated level
            if grovepi.digitalRead(sensor) == 0:
                print "found something"
            else:
                print "nothing"

            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Execute a demonstração.

```
    sudo python grove_infrared_distance_interrupt.py
```

Referência
---------

Estes novos sensores de distância usam triangulação e uma pequena matriz CCD linear para calcular a distância e/ou presença de objetos no campo de visão. A ideia básica é: um pulso de luz IR é emitido pelo emissor. Essa luz viaja pelo campo de visão e ou atinge um objeto ou simplesmente continua. No caso de não haver objeto, a luz nunca é refletida e a leitura indica ausência de objeto. Se a luz refletir em um objeto, ela retorna ao detector e cria um triângulo entre o ponto de reflexão, o emissor e o detector.

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Theory_of_PSD.jpg)

Os ângulos deste triângulo variam com base na distância até o objeto. A parte receptora desses novos detectores é na verdade uma lente de precisão que transmite a luz refletida para várias partes da matriz CCD linear interna com base no ângulo do triângulo descrito acima. A matriz CCD pode então determinar em que ângulo a luz refletida retornou e, portanto, pode calcular a distância até o objeto.

Esse novo método de medição de distância é quase imune à interferência de luz ambiente e oferece uma surpreendente indiferença à cor do objeto sendo detectado. Detectar uma parede preta sob luz solar direta agora é possível.

Recursos
---------

- [GP2Y0A21YK datasheet](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/res/GP2Y0A21YK.pdf)

## Projeto

**Arduino101 BLE Autonomous Rover** Complementando o Arduino101 BLE Rover com sensores para direção autônoma.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/31926/arduino101-ble-autonomous-rover-2cb19f/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_80cm_Infrared_Proximity_Sensor -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
