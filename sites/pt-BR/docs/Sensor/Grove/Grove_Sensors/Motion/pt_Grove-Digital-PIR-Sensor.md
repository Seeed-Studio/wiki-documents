---
description: Grove - Sensor PIR Digital
title: Grove - Sensor PIR Digital
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Digital-PIR-Sensor
sku: 101020793
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Digital-PIR-Sensor/
---

<!-- 
![](https://files.seeedstudio.com/products/101020793/img/101020793wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki.png" alt="pir" width={600} height="auto" /></p>

O sensor PIR é um sensor de IV para detectar movimentos humanos. Este Grove Digital PIR Sensor é o sensor PIR mais barato da família de sensores PIR; no entanto, ele é capaz de dar uma resposta rápida e gerar um sinal alto a partir do pino "sig".

Com a interface Grove, o Grove Digital PIR Sensor é fácil de conectar e usar. E ele não precisa de nenhuma biblioteca do Arduino.

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## Recursos

- Econômico: menos de 3 dólares
- Intuitivo: detecta movimento e faz a saída apenas com sinais digitais “alto” e “baixo”
- Simples: nenhuma biblioteca externa do Arduino é necessária
- Interface: Grove

## Especificação

|Item|Valor|
|---|---|
|Faixa de tensão|3V–5V|
|Ângulo de detecção|100 graus|
|Distância de detecção|3.2m-12m|
|Tempo de resposta|< 1s|
|Temperatura de trabalho|-20-85 °C|
|Interface|Grove|
|Dimensões|20mm *20mm* 11.5mm|
|Peso|3g|
|Bateria|Excluída|

## Plataforma compatível

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros passos

### Primeiros passos com Arduino

#### Materiais necessários

|Seeeduino XIAO|Grove Breadboard|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### Conexão de hardware

<!-- ![](https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>

A interface Grove na breadboard e no Grove Digital PIR Sensor é conectada pelo cabo Grove.

#### Software

- **Passo 1** Copie o código abaixo para o Arduino IDE e faça o upload. Se você não souber como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```cpp
#define digital_pir_sensor 5 // connect to Pin 5

void setup()
{
  Serial.begin(9600);  // set baud rate as 9600
  pinMode(digital_pir_sensor,INPUT); // set Pin mode as input
}

void loop()
{
  bool state = digitalRead(digital_pir_sensor); // read from PIR sensor
  if (state == 1)
  Serial.println("A Motion has occured");  // When there is a response
  else
  Serial.println("Nothing Happened");  // Far from PIR sensor
}
```

- **Passo 2** Abra a porta Serial e você verá o valor mudando quando você se mover ao redor do sensor PIR.

### Primeiros passos com Raspberry Pi

#### Materiais necessários

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### Conexão de hardware

<!-- ![](https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg" alt="pir" width={600} height="auto" /></p>

Conecte o sensor PIR ao "D5" no Grove Base Hat.

#### Código

- **Passo 1** Atualize a versão do sistema do Raspberry Pi.

```
sudo apt-get update
```

- **Passo 2** Instale o wiringPi.

```
sudo pip install wiringPi
```

Se você usar o Pi 4, selecione a versão correta do wiringPi

```
sudo pip install wiringPi==2.52.0
```

- **Passo 3** Obtenha o pino correto ao qual você está conectando.

```
gpio readall
```

Aqui está uma tabela; encontre a definição do pino 5 na definição de cabeamento; neste exemplo, a definição do pino é 21.

```
gpio read 21
```

Você pode ler o valor do sensor PIR; quando houver movimento, o valor será "1", caso contrário o valor será "0".

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020793/document/Grove_Digital_PIR_Motion_Sensor_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Especificação BS312](https://files.seeedstudio.com/products/101020793/document/BS312规格书.pdf)
- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/101020793/document/Hardware_Schematic_SCH.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
