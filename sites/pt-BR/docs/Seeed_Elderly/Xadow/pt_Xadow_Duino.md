---
description: Xadow - Duino
title: Xadow - Duino
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Duino
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Duino/
---

---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.JPG)

O Xadow Duino é especialmente projetado para construir dispositivos de iluminação incríveis com o LED RGB mais popular, o WS2812B. Baseado no MCU ATmega32u4 e com micro USB integrado, o Xadow Duino permite que você controle os LEDs RGB diretamente a partir do software em "RePhone Kit Create" ou programe a placa com a Arduino IDE para que ela funcione de forma independente. Diferente de outros módulos adicionais, esta placa possui seu próprio soquete de bateria (tipo JST1.0), o que permite alimentá-la de várias maneiras:
- Via USB de 5V (se a bateria estiver conectada, ela também será carregada simultaneamente)
- Via bateria Lipo de 3,7V
- Via pinos breakout
- Via Xadow GSM+BLE

[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

## Recursos
---
- Capaz de funcionar como um Arduino
- Plug-and-play se conectado com RePhone Kit Create
- Design de código aberto e modular
- Fino e pequeno
- Especialmente projetado para WS2812B
- Conectores Xadow de 11 PIN integrados para conexão totalmente flexível com outros módulos Xadow
- Empilhável, encadeável e costurável com outros módulos Xadow
- Escolha perfeita para amantes de LED

## Especificação
---
|Item|Detalhes|
|---|---|
|**Microcontrolador**|	ATmega32u4
|**Fonte de Alimentação**	|5V via USB, corrente de consumo é 1,5A Máx / 3,3 ~ 4,2V via soquete de bateria, corrente de consumo é 1,5A Máx / 3,3 ~ 6V via pinos breakout, corrente de consumo é 500 mA Máx / 3,3 ~ 4,2 V via Xadow GSM+BLE, corrente de consumo é 500 mA Máx
|**Corrente de Carga**|	500 mA
|**Memória Flash	**|32 KB (ATmega32u4), dos quais 4 KB usados pelo bootloader
|**SRAM	**|2,5 KB (ATmega32u4)
|**EEPROM**	|1 KB (ATmega32u4)
|**Velocidade de Clock**|	16 MHz
|**Conector**	|2 × 11 PIN Conector Xadow Pontos de solda para LED RGB WS2812b
|**Interfaces**|	Interface com Xadow GSM+BLE através de / I2C (endereço de 7 bits 0x23)
|**Dimensões**	|25,37 mm × 20,30 mm / 1”× 0,8”

## Visão Geral do Hardware
---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.png)

A imagem abaixo ilustra as definições de pinos do conector Xadow de 11 pinos e dos pinos breakout soldáveis no Xadow Duino.

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Pin_definitions.png)

## Acenda as Coisas
---
**Controle o WS2812B com seu 'RePhone Kit Create**

A maneira mais fácil de controlar o WS2812B é usar o software integrado em 'RePhone Kit Create', que fornece um aplicativo 'Actuator Control' que permite acender o WS2812B de três maneiras diferentes:

 1. Monocromático.
 2. Letreiro.
 3. Arco-íris.

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_WS2812B.png)

**Defina If This Then That**

No ‘If This Then That’ você pode definir diferentes condições para acionar o Xadow Duino a acender o WS2812B em um modo específico.

**Programe-o com a Arduino IDE**

Você também pode personalizar suas fontes de luz programando com a Arduino IDE

## Use o Xadow Duino com a Arduino IDE
---
Para usar o Xadow Duino com a Arduino IDE, há alguns passos simples que você precisa seguir:
1. [Baixe os arquivos de driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)
2. Consulte a página Download Arduino and install Arduino driver para instalar o driver corretamente

Depois de instalar corretamente o driver, abra o **Gerenciador de Dispositivos** clicando no botão **Iniciar**, clicando em **Painel de Controle**, clicando em **Sistema e Segurança** e, em seguida, em **Sistema**, clicando em **Gerenciador de Dispositivos**. Se for solicitado uma senha de administrador ou confirmação, digite a senha ou forneça a confirmação. Agora você deverá conseguir ver as **portas COM** no seu **‘Gerenciador de Dispositivos’** como:
- **Xadow Clip(COM20)** (O número da porta COM pode ser diferente no seu PC.)

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Com_PORT.png)

3.Now download the [Xadow File

 Names](https://github.com/freespace/Files_For_Seeed_Main_Board)
, descompacte-o e localize ...**\Files_For_Seeed_Main_Board-master.7z\Files_For_Seeed_Main_Board-master\v1.6.3\seeeduino\**, copie a pasta chamada **seeeduino** para ...**\arduino-1.6.6\hardware\** onde você instalou sua Arduino IDE. A versão da Arduino IDE pode ser diferente, aqui eu usei a Arudino IDE 1.6.6

4.Agora vamos tentar acender alguns LEDs, conecte seu Xadow Duino ao computador com um micro USB, abra a Arduino IDE, selecione **Tools** ==> **Board** ==> **Seeeduino Xadow**:

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Board.jpg)

depois selecione a **Porta** como **COM20(Seeeduino Xadow)** :

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Port.jpg)

5. Copie o código a seguir, se você não tiver as bibliotecas WS2812b, faça o download aqui:

```c
#include <Adafruit_NeoPixel.h>

#define PIN 5   //the Xadow Duino used DIN/D5/PC6 to control the WS2812b

// Parameter 1 = number of pixels in strip
// Parameter 2 = pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_RGB     Pixels are wired for RGB bitstream
//   NEO_GRB     Pixels are wired for GRB bitstream
//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)
//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip)
Adafruit_NeoPixel strip = Adafruit_NeoPixel(60, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'

  // it is very important to set D13 as OUTPUT & HIGH as we want it to act as 'GND'
  pinMode(13,OUTPUT);
  digitalWrite(13,HIGH);
}

void loop() {
// Some example procedures showing how to display to the pixels:
  colorWipe(strip.Color(255, 0, 0), 50); // Red
  colorWipe(strip.Color(0, 255, 0), 50); // Green
  colorWipe(strip.Color(0, 0, 255), 50); // Blue
  rainbow(20);
  rainbowCycle(20);
}

// Fill the dots one after the other with a color
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, c);
      strip.show();
      delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// Slightly different, this makes the rainbow equally distributed throughout
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  if(WheelPos < 85) {
   return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
  } else if(WheelPos < 170) {
   WheelPos -= 85;
   return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else {
   WheelPos -= 170;
   return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
}
```

## Comunidade RePhone
---
[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Temos procurado um lugar melhor onde nossos apoiadores (Usuários RePhone) possam se reunir, de forma acolhedora e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então aqui estamos, a [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone).

Agora junte-se a nós na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respostas, fazemos coisas interessantes, nos importamos uns com os outros e compartilhamos nossas experiências.

**Perguntas Frequentes**

Algumas perguntas frequentes na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone) são coletadas e respondidas no tópico "Frequently Asked Questions of RePhone (FAQ)", o tópico será constantemente atualizado sempre que surgir uma nova FAQ.



## Visualizador Online de Esquemáticos

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
Continuaremos atualizando o código-fonte em nossa página no GitHub:

- [Código-fonte para Xadow Duino](https://github.com/WayenWeng/Xadow_Duino/)

O diagrama esquemático do Xadow Duino é fornecido no link a seguir:

- [Arquivos de Esquemático do Xadow Duino](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip)

Confira mais informações sobre o fascinante LED RGB WS2812B:

- [WS2812B](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/WS2812B%20Datasheet.pdf)

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
