---
description: Grove - Display OLED 0,66" (SSD1306)
title: Grove - Display OLED 0,66" (SSD1306)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED-Display-0.66-SSD1306_v1.0
sku: 104020248
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-OLED-Display-0.66-SSD1306_v1.0/
---

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" alt="pir" width={600} height="auto" /></p>

Como uma nova versão, o Grove - Display OLED 0,66" (SSD1306) possui uma tela menor em comparação com outros displays OLED como o Grove - Display OLED 0,96" (SSD1315). Mesmo assim, ele ainda pode exibir com resolução de 64×48 e preserva o desempenho como os outros, por exemplo, alto brilho, baixo consumo de energia e interface Grove na parte traseira, etc.

Você pode usar a interface I2C para acender o mini display com o seu microcontrolador para exibir palavras, imagens ou o que quiser. A tela de 0,66" ajuda você a mostrar informações em um espaço menor e você pode usá-la como display OLED para Arduino, display PLED para Raspberry Pi, etc.

Este Grove-OLED Display é compatível com a biblioteca de displays monocromáticos U8g2 escrita por Olikraus. A biblioteca é tão conveniente e bem compatível que pode dar suporte ao SSD1306 e a outros chips como o SSD1315. Então adquira um agora e divirta-se com esta telinha!
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)

## Características

- Baseado em SSD1306, recortado para resolução 64×48 (Monocromático)
- Tamanho ultra pequeno: 20 * 20mm
- Endereço I2C alterável
- Compatível com fonte de alimentação de 3,3V/5V
- Alto contraste, alto brilho
- Baixo consumo de energia
- Ampla faixa de temperatura de operação: -40℃ ~ +85 ℃
- Design amigável ao usuário: interface Grove na parte traseira

## Especificação

|Parâmetro|Valor|
|---|---|
|Tensão de entrada|3,3V / 5V|
|Tensão de saída| 0 ~ 2,3V |
|Pixels|64 x 48|
|Faixa de temperatura|-40℃ ~ +85 ℃|
|Interface|I2C|

## Visão geral de hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" /></a></p>
  </figure>
</div>

## Plataformas compatíveis

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros passos

### Brincar com Arduino

**Materiais necessários**

| Seeeduino V4.2 | Base Shield | Grove - Display OLED 0,66"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/1629856731(1).png" alt="pir" width={600} height="auto" /></p>
|[Adquira AGORA](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira AGORA](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 e do Base Shield.

#### Conexão de hardware

- **Passo 1.** Conecte o Grove - TDS Sensor à porta **I2C** do Grove - Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.**  Vá para **Sketch** -> **Include Library** -> **Manage Libraries...** e pesquise e instale a biblioteca **`U8g2`** no **Library Manager**.

- **Passo 2.**  Abra a IDE do Arduino e crie um novo arquivo, então copie o código a seguir para o novo arquivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // All Boards without Reset of the Display

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(32,30,"Hello \n");
  u8g2.drawStr(32,45,"World!");
  u8g2.sendBuffer();
  delay(1000);  
}
```

Nota: Você deve saber que a tela do Grove - Display OLED 0,66" (SSD1306) é baseada em uma tela de resolução 128×64. Quando você quiser exibir usando o driver U8g2 SSD 128*64, talvez seja necessário iniciar o ponto em (31,16) em vez de (0,0). O intervalo vai de (31,16) a (95,63).

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Envie o demo. Se você não sabe como enviar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** O Display OLED deve ficar assim:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino2.png" /></div>

## Introdução à biblioteca U8g2

U8g2 é uma biblioteca de gráficos monocromáticos para dispositivos embarcados. U8g2 oferece suporte a OLEDs e LCDs monocromáticos, o que inclui o nosso chip SSD1306.

A biblioteca Arduino U8g2 pode ser instalada a partir do gerenciador de bibliotecas da IDE do Arduino. U8g2 também inclui a biblioteca U8x8:

**U8g2**

- Inclui todos os procedimentos gráficos (desenho de linha/caixa/círculo).
- Suporta muitas fontes. (Quase) sem restrição na altura da fonte.
- Requer alguma memória no microcontrolador para renderizar o display.

**U8x8**

- Dispositivo apenas de saída de texto (caracteres).
- Apenas fontes permitidas que caibam em uma grade de 8x8 pixels.
- Escreve diretamente no display. Nenhum buffer é necessário no microcontrolador.

Aqui fornecemos o [**wiki da biblioteca U8g2**](https://github.com/olikraus/u8g2/wiki) bem como a página de [Referência da API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).

## FAQ

**P1#** O exemplo não funciona com outras placas?

**R1:** A U8g2 possui modos diferentes durante a inicialização; em vez de I2C por hardware, ela também pode usar I2C por software. Se não estiver funcionando, tente usar Software I2C. Para mais informações, visite [u8g2](https://github.com/olikraus/U8g2_Arduino). Alguns exemplos e breves introduções também são fornecidos [aqui](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0).

## Visualizador de esquema online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo Grove - OLED Display 0.66 (SSD1306)_v1.0](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar)
- **[ZIP]** [SSD1306-Datasheet](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/SSD1306-Datasheet.zip)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
