---
description: Grove - Kit de Soquete de LED
title: Grove - Kit de Soquete de LED
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_Socket_Kit
sku: 104030009, 104030010
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-LED_Socket_Kit/
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg" alt="pir" width={600} height="auto" /></p>

Grove - LED é projetado para iniciantes em Arduino/Seeeduino para monitorar controles a partir de portas digitais. Ele pode ser facilmente montado na superfície da sua caixa ou mesa e usado como lâmpada piloto para alimentação ou sinal. Seu brilho pode ser ajustado por um potenciômetro.


## Recursos
---
*   Interface compatível com Grove

*   Compatível com 3,3V/5V

*   Orientação do LED ajustável

*   Brilho do LED ajustável

## Especificação
---
<table>
  <tbody><tr>
      <td width={400}> **Item**</td>
      <td width={400}> **Descrição**</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Modo de Controle do LED</td>
      <td> Pino Digital do Arduino</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Tensão de Trabalho</td>
      <td> 5V</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Modo de Alimentação</td>
      <td> Interface Grove</td>
    </tr>
  </tbody>
</table>


##  Primeiros Passos com Arduino
---
Aqui mostramos como usar o Arduino para controlar o estado do LED.

1.Conecte o LED à **porta digital 2** do Base Shield com o cabo Grove de 4 pinos. Claro que você pode mudar para outras portas digitais válidas se necessário e as definições da porta também devem ser alteradas.

2.Conecte-o ao Arduino/Seeeduino. Conecte a placa ao PC usando um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg" alt="pir" width={600} height="auto" /></p>

3.Copie o código de demonstração para o seu sketch e, em seguida, faça o upload para a placa Arduino ou Seeeduino. Por favor, clique [aqui](https://www.seeedstudio.com/wiki/Upload_Code) se você não souber como fazer o upload.

Você verá o LED piscar a cada segundo.
```
/*************************************************************************
* File Name          : GroveLEDDemoCode.ino
* Author             : Seeedteam
* Version            : V1.1
* Date               : 18/2/2012
* Description        : Demo code for Grove - LED
*************************************************************************/

#define LED 2 //connect LED to digital pin2
void setup() {
    // initialize the digital pin2 as an output.
    pinMode(LED, OUTPUT);
}

void loop() {
    digitalWrite(LED, HIGH);   // set the LED on
    delay(500);               // for 500ms
    digitalWrite(LED, LOW);   // set the LED off
    delay(500);
}
```
##  Primeiros Passos com Raspberry Pi
---
Conecte o **LED à Porta D4** e ligue o Raspberry Pi, usando o conector de fio Grove. Este é um teste para fazer o LED piscar. Você pode conectá-lo ao GrovePi+ como na figura abaixo.
```
# GrovePi LED Blink example

import time
from grovepi import *

# Connect the Grove LED to digital port D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        #Blink the LED
        digitalWrite(led,1)		# Send HIGH to switch on LED
        time.sleep(1)

        digitalWrite(led,0)		# Send LOW to switch off LED
        time.sleep(1)

    except KeyboardInterrupt:	# Turn LED off before stopping
        digitalWrite(led,0)
        break
    except IOError:				# Print "Error" if communication error encountered
        print "Error"
```
###  Execute o Programa

*   Encontre o caminho para o arquivo (de acordo com o seu próprio caminho)
```
cd GrovePi/Software/Python/
```

*   Execute o Programa
```
sudo python grove_led_blink.py
```

# Grove - LED
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - LED v1.3
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Recursos
---
*   [Arquivos-fonte do Grove - LED V1.3 (Eagle e pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip)

*   [Arquivos-fonte do Grove - LED (Eagle e pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip)

*   [GroveLEDDemoCode](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/GroveLEDDemoCode.zip)

*   [Grove-LED Socket Kit](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_Socket_Eagle_File.zip)

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>