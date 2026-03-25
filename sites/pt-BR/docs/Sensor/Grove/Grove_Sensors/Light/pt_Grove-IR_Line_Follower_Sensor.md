---
description: Grove - Seguidor de Linha V3.0
title: Grove-Sensor Seguidor de Linha IR V3.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg
slug: /grove_line_follower
last_update:
  date: 10/12/2024
  author: Jason
createdAt: '2024-11-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_line_follower/
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg" /></div>


## Descrição

Ele é projetado para uso com robôs seguidores de linha. Possui 2 LEDs IR e 2 fototransistores sensíveis a IR. Os sensores na placa que parecem olhos são na verdade LEDs IR e fototransistores sensíveis. Quando o fototransistor detecta luz infravermelha refletida pelos LEDs IR, ele gera um sinal digital que muda de alto para baixo.


## Recursos
- Tempo de resposta rápido
- Alta capacidade de análise
- Comprimento de onda de corte visível λp=940nm
- Potenciômetro de ajuste e LED indicador
- Detecção dupla


## Especificações

| Parâmetro                  | Valor/Faixa                                                   |
|----------------------------|---------------------------------------------------------------|
| Tensão de Alimentação      |  3.3V a 5V                                                    |
| Interface                  | digital                                                       |
| Consumo de Corrente        |50mA                                                           |
| Faixa de Temperatura de Operação| -40°C a +85°C                                           |


## Primeiros Passos

### diagrama de indicação
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/111111.png"/></div>

### Hardware

**Passo 1. Prepare os itens abaixo:**

- _Brincar com Arduino_

| Seeeduino V4.2 | Base Shield|  Grove - Follower V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Conectar Grove com Arduino_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/8.png" /></div>

- _Brincar com XIAO ESP32 Series_

| Seeed Studio Grove Base for XIAO| XIAO ESP32-S3|  Grove - Follower V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Adquira agora](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Conectar Grove com XIAO ESP32S3_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/7.png" /></div>

Duas combinações diferentes, mas usando o mesmo código.

### Software

- Passo 1. Copie o código para o Arduino IDE e carregue.

```c
#define LEFT 3
#define RIGHT 2

void setup() {
  Serial.begin(9600);
  pinMode(LEFT, INPUT);
  pinMode(RIGHT, INPUT);
}
void loop() {
  int towar_left=digitalRead(LEFT);
  int towar_right=digitalRead(RIGHT);
  Serial.print("line follower : left ");
  Serial.print(towar_left);
  Serial.print("  right ");
  Serial.println(towar_right);
}
```
- Passo 2. Abra a porta serial para visualizar o conteúdo impresso.

Quando colocamos o sensor na área preta, a porta serial imprimirá o seguinte conteúdo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/2.png" /></div>

### Uso de demonstração

Quando nos aproximamos da área branca, a luz vermelha na placa do sensor acenderá, e quando nos aproximamos da área preta, a luz vermelha na placa do sensor apagará.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/5.gif" /></div>



## Recursos

* **[SCH]** [Informações de Referência do Sensor Seguidor de Linha IR Grove](https://files.seeedstudio.com/wiki/Grove_Line_Follower/SCH.pdf)
* **[Datasheet]**  [ITR9909_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Follower/datasheet.pdf)



## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>