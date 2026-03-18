---
description: Grove Starter Kit para BeagleBone® Green
title: Grove Starter Kit para BeagleBone® Green
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Starter_Kit_for_BeagleBone_Green
sku: 110060131
last_update:
  date: 1/10/2022
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Starter_Kit_for_BeagleBone_Green/
---

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_bbg_start_kit.jpg)

Grove Starter Kit para BeagleBone® Green é um kit de nível iniciante para principiantes, que pode ajudá-lo a explorar o BBG e criar projetos inovadores. É a melhor escolha para novatos desenvolverem alguns projetos legais e construir protótipos baseados em BBG. Aqui está uma coleção de sensores, atuadores e shields que utilizamos com sucesso com o BeagleBone® Green.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Starter-Kit-for-SeeedStudio-BeagleBone-Green-p-2526.html)

Ideias de Aplicação
-----------------

Se você quiser fazer alguns projetos incríveis com BeagleBone® Green e Groves, aqui estão alguns projetos para sua referência.

| **Demonstração de Luz Inteligente com BBG & BBG Start Kit(HA)**                                                         | **Uma Aplicação de IoT com BBG & BBG Start Kit**                        |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/BBG_starter_kit1.png)                              | ![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/图片1.png)  |
| [Faça AGORA!](https://www.seeedstudio.com/recipe/363-smart-light-demo-with-bbg-amp-bbg-start-kit-ha.html) | [Faça AGORA!](https://www.seeedstudio.com/recipe/367-an-iot-application-with-bbg-amp-bbg-start-kit.html)        |

Lista de Peças
---------

### Grove - I2C Hub

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2c_hub_b.jpg)

I2C Hub Grove é um módulo de extensão Grove para conectar múltiplos dispositivos I2C ao soquete Grove I2C.

Ele pode ser usado com o cabo Universal 4 Pin para X2 4 Pin e conecta até 7 dispositivos I2C, o que pode cobrir a maioria dos propósitos de desenvolvimento.

Se você quiser saber mais informações sobre este módulo, clique [**aqui**](/pt-br/Grove-I2C_Hub).

### Grove - Button

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button1.jpg)

Esta nova versão do botão Grove contém um botão independente, que é configurado com resistor pull-down – pronto para uso com nossos microcontroladores como entrada digital. O botão sinaliza o fio SIG(D1), NC(D2) não é usado neste Grove.

**Esquemático do Button**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buttonsch.jpg)

### Grove - I2C ADC

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/I2C_ADC_01.jpg)

Grove - I2C ADC é um módulo ADC de 12 bits de precisão baseado no ADC121C021.

Ele ajuda você a aumentar a precisão do valor coletado de um sensor analógico, fornecendo uma tensão de referência constante.

Como seu endereço é alterável, você pode usar até 9 I2C ADC ao mesmo tempo, no máximo.

Por outro lado, este módulo fornece função de auto-sleep, que reduz consideravelmente o consumo de energia.
<!-- If you want to know more info about this module please click [**here**](/pt-br/Grove-I2C_ADC). -->

### Grove - Temperature Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_temp.jpg)

O Grove - Temperature Sensor usa um termistor para detectar a temperatura ambiente.

A resistência de um termistor aumentará quando a temperatura ambiente diminuir.

É essa característica que usamos para calcular a temperatura ambiente.

A faixa detectável deste sensor é de -40 - 125ºC, e a precisão é de ±1,5ºC.

E você deve conectá-lo à porta J2 do Grove - I2C ADC.
Se você quiser saber mais informações sobre este módulo, clique [**aqui**](/pt-br/Grove-Temperature_Sensor_V1.2).

### Grove - Sound Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Twig-Sound-sensor.jpg)

Grove - Sound Sensor pode detectar a intensidade do som do ambiente.

O principal componente do módulo é um microfone simples, que é baseado no amplificador LM358 e em um microfone de eletreto.

A saída deste módulo é analógica e você deve conectá-lo à porta J2 do Grove - I2C ADC.
Se você quiser saber mais informações sobre este módulo, clique [**aqui**](/pt-br/Grove-Sound_Sensor).

### Grove - 3-Axis Digital Accelerometer(±16g)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/3-axis_Accelerometer_ADXL345.jpg)

Este é um acelerômetro digital de alta resolução, fornecendo resolução máxima de 3,9mg/LSB e ampla faixa de medição de ±16g.

Ele é baseado em um IC avançado de 3 eixos ADXL345. Não se preocupe em implementá-lo em seu projeto de detecção de queda livre, pois ele é robusto o suficiente para suportar choques de até 10.000g.

Enquanto isso, ele é ágil o suficiente para detectar toques simples e duplos. É ideal para detecção de movimento, detecção de gestos, bem como para robótica.

Se você quiser saber mais informações sobre este módulo, clique [**aqui**](/pt-br/Grove-3-Axis_Digital_Accelerometer-16g).

### Grove - Relay

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Grove_relay.jpg)

O Relay Grove é uma chave digital normalmente aberta que controla um relé capaz de comutar tensões e correntes muito mais altas do que suas placas BBG.

Quando definido para HIGH, o LED acenderá e o relé fechará, permitindo que a corrente flua.

A capacidade de tensão de pico é de 250V a 10 Ampères.

:::caution
Tenha muito cuidado ao trabalhar com tensões de rede — em caso de dúvida, entre em contato com um profissional, como um eletricista licenciado, para obter ajuda.
:::

**Esquemático do Relay**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Relaysch.jpg)

### Grove - Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzer1.jpg)

Este é um Grove simples, mas divertido de usar.

O piezo pode ser conectado a saídas digitais e emitirá um tom quando a saída estiver em nível alto.

Alternativamente, ele pode ser conectado a uma saída analógica de modulação por largura de pulso para gerar vários tons e efeitos.

**Esquemático do Grove Buzzer**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Buzzersch.jpg)

### Grove - Chainable RGB LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Chanbalelednb1.jpg)

Chainable RGB LED é baseado no chip P9813, que é um chip driver de LED fonte de luz full-color, e pode fornecer acionamento de corrente constante e saída modulada de 256 níveis de cinza.

Transmissão por fio (DATA e CLK), reciclagem interna, pode aumentar a distância de transmissão.

<!-- If you want to know more info about this module please click [**here**](/pt-br/Grove-Chainable_RGB_LED/). -->

### Grove - OLED Display 0.96"

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Oled1281281.jpg)

É um módulo de display OLED de 16 cores em escala de cinza, matriz de pontos 96×96, com interface I2C Grove compatível de 4 pinos.

Grove - OLED 96 x 96 é construído com o módulo OLED de matriz de pontos 96 x 96 LY120 e o CI driver SSD1327.

Comparado ao LCD, telas OLED são mais competitivas, pois possuem várias vantagens, como alto brilho, autoemissão, alta taxa de contraste, corpo fino, amplo ângulo de visão, ampla faixa de temperatura e baixo consumo de energia.

Se você quiser saber mais informações sobre este módulo, clique [**aqui**](/pt-br/Grove-OLED_Display_0.96inch).

:::tip
Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Exemplos
--------

Para começar a editar programas que estão na sua placa, você pode usar o Cloud9 IDE.
Como um exercício simples para se familiarizar com o Cloud9 IDE, criar uma aplicação simples para piscar um dos 4 LEDs programáveis pelo usuário no BeagleBone® é um bom começo.

Se esta é a primeira vez que você usa o Cloud9 IDE, siga este [**link**](/pt-br/BeagleBone_Green).

### Como usar o Grove - Button no BBG

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/Button_on_bbg.jpg)

**Etapa1:** Configure o soquete Grove - UART como um soquete Grove - GPIO, basta seguir este [**link**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html).

**Etapa2:** Clique no "+" no canto superior direito para criar um novo arquivo.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green/img/C9_newfile.jpg)

**Etapa3:** Copie e cole o código a seguir na nova aba

```
import time
import Adafruit_BBIO.GPIO as GPIO

# Note: Use P9_22(UART2_RXD) as GPIO.
# Connect the Grove Button to UART Grove port of BeagleBone® Green.
Button = "P9_22"            # GPIO P9_22
GPIO.setup(Button, GPIO.IN)

if __name__== '__main__':
    while True:
        if GPIO.input(Button):
            print "Button is pressed."
            time.sleep(1)
        else:
            print "Button is unstuck."
            time.sleep(1)
```

**Etapa4:** Salve o arquivo clicando no ícone de disco e dando ao arquivo um nome com a extensão .py.

**Etapa5:** Execute o código.

:::note
O uso dos outros módulos Grove é semelhante ao Grove Button.
:::

Recursos
---------

- [Grove Starter kit for BBG Sample Code](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_Starter_Kit_for_BeagleBone_Green -->

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

