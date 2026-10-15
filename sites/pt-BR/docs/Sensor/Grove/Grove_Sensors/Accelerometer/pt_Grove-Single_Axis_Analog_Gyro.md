---
description: Grove-Giroscópio Analógico de Eixo Único
title: Grove-Giroscópio Analógico de Eixo Único
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Single_Axis_Analog_Gyro
last_update:
  date: 1/29/2023
  author: jianjing Huang
createdAt: '2023-01-29'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Single_Axis_Analog_Gyro/
---


![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Axis_Analog_Gyro_01.jpg)

O Grove – Giroscópio Analógico de Eixo Único é baseado em um sensor de velocidade angular (Murata-ENC-03R) que utiliza o fenômeno da força de Coriolis. Ele só pode medir a velocidade angular do eixo X, o que é diferente de outros giroscópios de 3 eixos, mas com uma velocidade mais alta. Pode ser usado para controle de posição e controle de atitude, como no 2WD autoequilibrado.

Modelo: [SEN05091P](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## Características

- Tensão de entrada: 3,3 V/5 V

- Interface Grove padrão

- Leve

- Alta velocidade

- Mede a velocidade angular do eixo X

## Demonstração

### Com [Arduino](https://www.arduino.cc/)

O módulo detecta rotação de um eixo com sinal analógico.
Filtros passa-alta e passa-baixa são aplicados para reduzir a deriva de temperatura e suprimir o ruído de saída.
Antes da medição da velocidade angular, é necessário um valor de referência (a saída do sensor em Velocidade Angular = 0).
Esse valor é 1,35 V por padrão. Mas para obter valores de referência mais precisos, antes da medição é necessária uma calibração.
Nessa calibração, a tensão de saída quando a velocidade angular =0 é amostrada 200 vezes,
e então a média desses dados será tratada como o valor de referência.

1.Conecte-o à porta A0 do [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/), é claro que qualquer pino analógico serve.

2.Conecte o Grove - Base Shield ao Arduino/Seeeduino e conecte-os ao PC usando um cabo USB.

3.Faça o upload do código abaixo. Clique [aqui](https://seeeddoc.github.io/Upload_Code/) se você não souber como fazer o upload.

``` c++
    int sensorPin = A0; // select the input pin for the sensor

    float reference_Value=0;

    int sensorValue = 0; // variable to store the value coming from the sensor

    void setup()
    {

        int i;
        float sum=0;
        pinMode(sensorPin, INPUT);
        Serial.begin(9600);
        Serial.println("Please do not rotate it before calibrate!");
        Serial.println("Get the reference value:");

    for(i=0;i<1000;i++)
    {
        // read the value from the sensor:
        sensorValue = analogRead(sensorPin);
        sum += sensorValue;
        delay(5);
    }
    reference_Value = sum/1000.0;
    Serial.println(reference_Value);
    Serial.println("Now you can begin your test!");
    }

    void loop()
    {
        double angularVelocity;
        sensorValue = analogRead(sensorPin);
        angularVelocity =((double)(sensorValue-reference_Value)*4930.0)/1023.0/0.67; //get the angular velocity
        Serial.print(angularVelocity);
        Serial.println("deg/s");
        Serial.println(" ");
        delay(10);
    }
```

4. Agora é hora da calibração. <font color="#DC143C" face>Coloque o sensor horizontalmente sobre a sua mesa</font>
，e então pressione o botão Reset no Seeeduino e abra a ferramenta serial:

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Gyro_Result.jpg)

5. Quando você vir "Now you can begin your test", isso significa que a calibração foi concluída. Você já pode usar o sensor. A direção de rotação pode ser vista na figura a seguir:

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Rotate_direction.jpg)

### Com [Raspberry Pi](https://seeeddoc.github.io/GrovePiPlus/)

1. Você deve ter um Raspberry Pi e um GrovePi ou GrovePi+.

2. Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](https://seeeddoc.github.io/GrovePiPlus/#Introducing_the_GrovePi.2B).

3. Conexão

- Conecte o sensor ao soquete A0 do GrovePi usando um cabo Grove.

4. Navegue até o diretório de demonstrações:

  `cd yourpath/GrovePi/Software/Python/
`

- Para ver o código

```
    nano grovesingleaxisanaloggyro.py # "Ctrl+x" to exit #

    import time
    import grovepi

    #Connect the Grove Single Axis Analog Gyro to analog port A0
    #SIG,NC,VCC,GND
    sensor = 0

    grovepi.pinMode(sensor,"INPUT")

    #calibration
    print "calibrating..."

    sum = 0

    errors = 0

    for x in range(0, 100):

      try:
          #Get sensor value
          v = grovepi.analogRead(sensor)
          sum += v
          #time.sleep(.05)
      except IOError:
          print "Error"
          errors += 1

    if errors == 100:

       print "unable to calibrate"

       raise SystemExit

    reference_value = sum / (100 - errors)

    print "finished calibrating"
    print "reference_value =", reference_value

    #ready

    while True:
        try:
            #Get sensor value
            sensor_value = grovepi.analogRead(sensor)

            #Calculate angular velocity (deg/s)
            velocity = ((float)(sensor_value - reference_value) * 4930.0) / 1023.0 / 0.67

            print "sensor_value =", sensor_value, " velocity =", velocity
            time.sleep(.5)

        except IOError:
        print "Error"
```

5.Execute o demo.

` sudo python grovesingleaxisanaloggyro.py
`

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**[Eagle]**  [Grove - Giroscópio Analógico de Eixo Único Eagle](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip)

**[PDF]**  [Grove - Giroscópio Analógico de Eixo Único Sch](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20Sch.pdf)

**[PDF]**  [Grove - Giroscópio Analógico de Eixo Único PCB](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20PCB.pdf)

**[Datasheet]** [Arquivo do datasheet do Giroscópio Analógico de Eixo Único](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Analog_Gyro_datasheet.pdf)

**[Code]** [Código de demonstração no GitHub](https://github.com/Seeed-Studio/Grove_Single_Axis_Analog_Gyro)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
