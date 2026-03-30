---
description: Grove - Tela OLED 0,96" (SSD1315)
title: Grove - Tela OLED 0,96" (SSD1315)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED-Display-0.96-SSD1315
sku: 104020208
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-OLED-Display-0.96-SSD1315/
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg" alt="pir" width={600} height="auto" /></p>

O Grove - OLED Display 0.96" (SSD1315) é um módulo de matriz de display passivo monocromático (branco) de 128×64 pixels com interface Grove I2C.

Graças ao novo chip SSD1315, ele pode funcionar com 3,3 V, de modo que removemos o caro circuito elevador DC-DC. E com o circuito de mudança de nível onboard, o novo Grove - OLED Display 0.96" pode funcionar com plataformas de 3,3 V e 5 V. Ou seja, você pode usá‑lo facilmente como um display OLED para Arduino, display OLED para Raspberry Pi, etc.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)
## Características

- Compatível com 3,3 V/5 V
- Endereço I2C alterável
- Baixo consumo de energia
- Monocromático (branco) 128×64 pixels
- Alto contraste, alto brilho
- Ampla faixa de temperatura de operação: -40 ℃ ~ +85 ℃


## Especificação

|Parâmetro|Valor|
|---|---|
|Tensão de entrada|3,3 V / 5 V|
|Tensão de saída| 0 ~ 2,3 V |
|Pixels|128 x 64|
|Faixa de temperatura|-40 ℃ ~ +85 ℃|
|Interface|I2C/Digital|

## Visão geral de hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpgg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpg" /></a></p>
  </figure>
</div>



## Plataformas suportadas

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros passos

### Brincar com Arduino


**Materiais necessários**


| Seeeduino V4.2 | Base Shield | Grove - OLED Display 0.96"|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Adquira AGORA](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira AGORA](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira AGORA](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

>Além disso, você pode considerar o nosso novo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que é equivalente à combinação do Seeeduino V4.2 e do Base Shield.

#### Conexão de hardware

- **Passo 1.** Conecte o Grove - TDS Sensor à porta **I2C** do Grove - Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino a um PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png" alt="pir" width={600} height="auto" /></p>

#### Software

:::note
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Primeiros passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.**  Vá para **Sketch** -> **Include Library** -> **Manage Libraries...** e procure e instale a biblioteca **`U8g2`** no **Library Manager**.

- **Passo 2.**  Abra a Arduino IDE e crie um novo arquivo, depois copie o seguinte código para o novo arquivo.

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif


U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);  // High speed I2C

// U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();					// clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);	// choose a suitable font
  u8g2.drawStr(0,10,"Hello World!");	// write something to the internal memory
  u8g2.sendBuffer();					// transfer internal memory to the display
  delay(1000);  
}
```

- **Passo 3.** Envie o demo. Se você não souber como enviar o código, consulte [Como enviar código](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 4.** O display OLED deve ficar assim:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/result.png" /></div>


## Introdução à biblioteca U8g2

U8g2 é uma biblioteca gráfica monocromática para dispositivos embarcados. U8g2 suporta OLEDs e LCDs monocromáticos, o que inclui o nosso chip SSD1315.

A biblioteca Arduino U8g2 pode ser instalada a partir do gerenciador de bibliotecas da Arduino IDE. U8g2 também inclui a biblioteca U8x8:

**U8g2**

- Inclui todos os procedimentos gráficos (desenho de linha/caixa/círculo).
- Suporta muitas fontes. (Quase) sem restrição na altura da fonte.
- Requer alguma memória no microcontrolador para renderizar o display.

**U8x8**

- Dispositivo apenas de saída de texto (caracteres).
- Apenas fontes permitidas que se encaixam em uma grade de 8x8 pixels.
- Escreve diretamente no display. Nenhum buffer é necessário no microcontrolador.

Aqui são fornecidos o [**wiki da biblioteca U8g2**](https://github.com/olikraus/u8g2/wiki) bem como a página de [Referência da API U8g2](https://github.com/olikraus/u8g2/wiki/u8g2reference).

## Perguntas frequentes

**P1#** O exemplo não funciona com outras placas?

**R1:** O U8g2 possui modos diferentes durante a inicialização; em vez de I2C por hardware, ele também pode usar I2C por software. Se não estiver funcionando, tente usar I2C por software. Para mais informações, visite [u8g2](https://github.com/olikraus/U8g2_Arduino). Alguns exemplos e breves introduções também são fornecidos [aqui](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0).

## Visualizador online de esquemático


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Arquivo esquemático do Grove - OLED Display 0.96"](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip)
- **[PDF]** [Folha de dados do módulo OLED](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/OEL%20Display%20Module.pdf)

## Suporte técnico e discussão sobre o produto
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>