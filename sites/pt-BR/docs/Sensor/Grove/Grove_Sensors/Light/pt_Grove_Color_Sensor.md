---
description: Grove - Color Sensor V3.0 - interface I2C - baseado em VEML6040
title: Grove-Color Sensor V3.0 - interface I2C
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove_Color/top.jpg
slug: /grove_color_sensor_v3_0_iic
last_update:
  date: 10/12/2024
  author: Jason
createdAt: '2024-11-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_color_sensor_v3_0_iic/
---


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Color/top.jpg" /></div>

## Descrição

É um sensor para medir a cromaticidade de cor da luz ambiente ou a cor de objetos. Com o pino de entrada de sincronização, uma fonte de luz pulsada externa pode fornecer controle de conversão síncrona precisa.


## Recursos
- Detecção de cor: Mede os componentes de luz vermelha, verde, azul e branca.
- Interface I2C: Integração fácil com microcontroladores via I2C para acesso aos dados.
- Tensão de alimentação: Funciona em 3,3 V ou 5 V.
- Sincronização: Pode funcionar com uma fonte de luz pulsada externa para leituras precisas.
- Design compacto: Fator de forma pequeno para fácil integração em vários projetos.
- Baixo consumo de energia: Ideal para dispositivos alimentados por bateria.


## Especificação

| Parâmetro                  | Valor/Faixa                                                   |
|----------------------------|---------------------------------------------------------------|
| Canais de cor              |   Vermelho, verde, azul e claro (branco)                     |
| Tensão de alimentação      |    3,3 V a 5 V                                                |
| Interface                  |        I2C                                                    |
| Resolução                  |Saída de dados de cor de 16 bits                              |
| Faixa de temperatura de operação|     -40°C a +85°C                                           |
| Consumo de corrente        |      200 μA                                                   |
| Faixa máxima de detecção selecionável |515,4, 1031, 2062, 4124, 8248 ou 16 496 lux com sensibilidade máxima de 0,007865 lux/passo| 


## Primeiros passos

### diagrama de indicação
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Grove_Color/22222.png" /></div>

### Hardware

**Passo 1. Prepare os itens abaixo:**

- _Brincar com Arduino_

| Seeeduino V4.2 | Base Shield| Grove - Color Sensor V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Conectar Grove com Arduino_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/0.png" /></div>


- _Brincar com XIAO ESP32 Series_

| Seeed Studio Grove Base for XIAO| XIAO ESP32-S3| Grove - Color Sensor V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Get One Now](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[Get One Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Conectar Grove com XIAO ESP32S3_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/1.png" /></div>


Duas combinações diferentes, mas usando o mesmo código.

### Software

- Passo 1. Baixar a biblioteca


Instale a biblioteca [VEML6040](https://files.seeedstudio.com/wiki/Grove_Color/VEML6040.zip").


- Passo 2. Copie o código para a Arduino IDE e faça o upload.

```c
#include "Wire.h"
#include "veml6040.h"

VEML6040 RGBWSensor;

void setup() {
  Serial.begin(9600);
  Wire.begin(); 
  if(!RGBWSensor.begin()) {
    Serial.println("ERROR: couldn't detect the sensor");
    while(1){}
  }

	RGBWSensor.setConfiguration(VEML6040_IT_320MS + VEML6040_AF_AUTO + VEML6040_SD_ENABLE);

  delay(1500);
  Serial.println("Vishay VEML6040 RGBW color sensor auto mode example");
  Serial.println("CCT: Correlated color temperature in \260K");
  Serial.println("AL: Ambient light in lux");
  delay(1500);
}

void loop() {
  Serial.print("RED: ");
  Serial.print(RGBWSensor.getRed());  
  Serial.print(" GREEN: ");
  Serial.print(RGBWSensor.getGreen());  
  Serial.print(" BLUE: ");
  Serial.print(RGBWSensor.getBlue());  
  Serial.print(" WHITE: ");
  Serial.print(RGBWSensor.getWhite()); 
  Serial.print(" CCT: ");
  Serial.print(RGBWSensor.getCCT());  
  Serial.print(" AL: ");
  Serial.println(RGBWSensor.getAmbientLight()); 
  delay(400);
}
```
- Passo 3. Abra a porta serial para visualizar o conteúdo impresso.

Quando coloquei o sensor de cor na área branca do nosso visor, abrimos a porta serial e descobrimos que o valor de WHITE era o mais alto

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/12.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/4.png" /></div>






## Recursos

* **[SCH]** [Informações de referência do Grove_Color_Sensor](https://files.seeedstudio.com/wiki/Grove_Color/SCH.pdf)
* **[Datasheet]**  [VISHAY_VEML6040A3OG_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Color/314020801_VISHAY_VEML6040A3OG_Datasheet.pdf)



## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>