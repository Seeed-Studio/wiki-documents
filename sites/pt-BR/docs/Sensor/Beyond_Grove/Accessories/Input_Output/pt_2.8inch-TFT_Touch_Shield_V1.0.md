---
title: 2.8inch TFT Touch Shield V1.0
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/2.8inch-TFT_Touch_Shield_V1.0/
slug: /2.8inch-TFT_Touch_Shield_V1.0
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2022-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/2.8inch-TFT_Touch_Shield_V1.0/
---


O 2,8" TFT Touch Shield é um display TFT multicolorido compatível com Arduino / Arduino Mega com uma tela sensível ao toque resistiva de 4 fios. Ele inclui um footprint compatível com shield Arduino para fixação. O driver TFT é baseado em um CI driver profissional e com interface de 8 bits de dados e 4 bits de controle.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/Tft.jpg)

##   Recursos   ##

- Compatível com Arduino/Seeeduino, Arduino Mega e Seeeduino Mega

- Display QVGA de 2,8”

- Tela sensível ao toque resistiva

##   Especificações   ##

<table cellspacing="0" width="80%">
<tr>
<th scope="col">Item</th>
<th scope="col">Mín</th>
<th scope="col">Típico</th>
<th scope="col">Máx</th>
<th scope="col">Unidade</th>
</tr>
<tr>
<th scope="row">Tensão</th>
<td>4.5</td>
<td>5</td>
<td>5.5</td>
<td>VCC</td>
</tr>
<tr>
<th scope="row">Corrente</th>
<td>/</td>
<td>/</td>
<td>250</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Tamanho do painel LCD</th>
<td colspan="3">2.8</td>
<td>polegada</td>
</tr>
<tr>
<th scope="row">Ângulo de visão</th>
<td colspan="3">60~120</td>
<td>graus</td>
</tr>
<tr>
<th scope="row">Resolução</th>
<td colspan="3">320x240</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Cor do LCD</th>
<td colspan="3">65k</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Tipo de backlight</th>
<td colspan="3">LED</td>
<td>/</td>
</tr>
<tr>
<th scope="row">CI driver do LCD</th>
<td colspan="3">ST7781R</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Tipo de interface</th>
<td colspan="3">10±2</td>
<td>g</td>
</tr>
<tr>
<th scope="row">Tipo de interface</th>
<td colspan="3">Porta paralela ( 8bit Data + 4bit Control )</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Tela sensível ao toque</th>
<td colspan="3">Tela sensível ao toque resistiva de 4 fios</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Área ativa</th>
<td colspan="3">43.2*57.3</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">Descarga por contato ESD</th>
<td colspan="3">±4</td>
<td>KV</td>
</tr>
<tr>
<th scope="row">Descarga pelo ar ESD</th>
<td colspan="3">±8</td>
<td>KV</td>
</tr>
<tr>
<th scope="row">Dimensão</th>
<td colspan="3">72.5x54.7x18</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">Peso</th>
<td colspan="3">24±2</td>
<td>g</td>
</tr>
</table>

**Cuidados**

- Não submeta o módulo a choque mecânico ou impacto deixando-o cair.

- Não aplique força excessiva à superfície do display ou às áreas adjacentes, pois isso pode fazer o tom de cor variar.

##   Uso dos pinos no Arduino   ##

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg)
**D0** - Não utilizado.

**D1** - Não utilizado.

**D2** - Bit de dados 8 do LCD.

**D3** - Bit de dados 9 do LCD.

**D4** - Bit de dados 10 do LCD.

**D5** - Bit de dados 11 do LCD.

**D6** - Bit de dados 12 do LCD.

**D7** - Bit de dados 13 do LCD.

**D8** - Bit de dados 14 do LCD.

**D9** - Bit de dados 15 do LCD.

**D10** - Pino CS do LCD, ativo em nível baixo.

**D11** - Pino RS do LCD.

**D12** - Pino WR do LCD.

**D13** - Pino RD do LCD.

**D14(A0)** - Y- da tela sensível ao toque.

**D15(A1)** - X- da tela sensível ao toque.

**D16(A2)** - Y+ da tela sensível ao toque.

**D17(A3)** - X+ da tela sensível ao toque.

**D18(A4)** - Não utilizado.

**D19(A5)** - Não utilizado.

##   Utilização   ##

###   Instalação de Hardware   ###

- Insira o TFT Touch Shield no Seeeduino como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg)

###   Programação do TFT   ###

A biblioteca **TFT** fornece as seguintes Interfaces de Programação de Aplicações (**API**). A biblioteca faz uso de acesso direto aos registradores de PORT em vez das APIs do Arduino. Isto é para aumentar a velocidade de comunicação entre o MCU e o TFT. No momento, a biblioteca oferece suporte a placas compatíveis com Arduino, Arduino Mega (1280 ou 2560) e Seeeduino ADK Main Board. No Mega, a porta de dados de 8 bits do TFT é distribuída em pinos diferentes pertencentes a portas diferentes. Isso diminui a velocidade de desenho de gráficos em comparação com o Arduino. A escolha dos pinos da porta é puramente baseada na disposição dos pinos de porta do Arduino / Mega.

###   Funções gerais   ###

---

**paintScreenBlack(void)**

- A RAM do TFT só pode ser inicializada no modo de display desligado, então esta função serve apenas para limpar a tela com a cor preta.

**setXY(unsigned int poX, unsigned int poY)**

- Define a posição do cursor para (poX,poY). Esta função é usada internamente por outras APIs gráficas.

**setPixel(unsigned int poX, unsigned int poY,unsigned int color)**

- Define o pixel (poX,poY) para a cor color. Esta função é usada internamente por outras APIs gráficas.

###  Linhas ###

---

**drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1,unsigned int color)**

- Desenha uma linha do pixel (x0,y0) ao pixel (x1,y1) com a cor color.

**drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color**

- Desenha uma linha horizontal de comprimento length com a cor color começando do pixel (poX,poY).

**drawHorizontalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color)**

- Desenha uma linha vertical de comprimento length com a cor color começando do pixel (poX,poY).

###  Retângulo ###

---

**drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width,unsigned int color)**

- Desenha um retângulo começando em (poX,poY) de comprimento length, largura width e cor **color**.

**fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- Desenha um retângulo preenchido começando do pixel (poX,poY) de comprimento length, largura width e cor **color**.

###  Círculo ###

---

**drawCircle(int poX, int poY, int r,unsigned int color)**

- Desenha um círculo em (poX,poY) de raio **radius** e cor **color**.

**fillCircle(int poX, int poY, int r,unsigned int color**

- Desenha um círculo preenchido em (poX,poY) de raio **radius** e cor **color**.

###  Texto ###

---

**drawChar(unsigned char ascii,unsigned int poX, unsigned int poY,unsigned int size, unsigned int fgcolor)**

- Desenha um caractere começando em (poX,poY) usando a fonte incorporada de tamanho **size** e com a cor fgcolor. Esta função é usada pela função drawString().

**drawString(char *string,unsigned int poX, unsigned int poY,unsigned int size,unsigned int fgcolor)**

- Desenha uma string de texto começando em (poX,poY) usando a fonte incorporada de tamanho **size** e com a cor fgcolor.

###   Programação da TouchScreen   ###

---

O TFT Touch Shield usa a [Adafruit Touch Screen Library](https://github.com/adafruit/Touch-Screen-Library). Para entender o princípio por trás da tela sensível ao toque resistiva, consulte [External Links](https://wiki.seeedstudio.com/pt-br/2.8inch-TFT_Touch_Shield_V1.0/). Em resumo, uma tela sensível ao toque resistiva de 4 fios fornece dois divisores de tensão, um para cada eixo X e Y. Aplicando tensões adequadas para cada eixo e varrendo os valores do ADC, a posição do toque pode ser detectada. Esses valores estão sempre sujeitos a ruído. Portanto, é usado um filtro digital.

- Para usar a TouchScreen Library, primeiro crie um objeto TouchScreen por meio de

`
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
`

Onde XP, YP, XM e YM são pinos de porta ADC conectados aos pinos XPlus, YPlus, XMinus e YMinus da tela sensível ao toque. 300 é a resistência entre as placas X.

- Leia o valor bruto do ADC usando

`
Point p = ts.getPoint();
`

- O valor bruto do ADC precisa ser convertido para coordenadas de pixel. Isso é feito com a função map. Esse mapeamento muda para v0.9 e v1.0. Os aplicativos de demonstração já cuidam desse mapeamento.

`
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
`

- O sketch a seguir demonstra o uso da TouchScreen Library. Ele também pode ser usado para calibrar as coordenadas da tela sensível ao toque.

- Compile e envie o sketch.

- Abra o monitor da porta serial e toque nos pontos exibidos na tela.

- Veja se os valores X e Y exibidos estão corretos. Caso contrário, precisamos recalibrar as coordenadas da tela sensível ao toque.

####  Como calibrar a tela sensível ao toque? ####

- Os parâmetros `TS_MINX, TS_MAXX, TS_MINY and TS_MAXY ` na verdade determinam as extremidades da tela sensível ao toque e formam de fato os parâmetros de calibração.

- Os valores atribuídos a essas variáveis são valores de ADC medidos (ou seja, Raw X, Raw Y) quando tocamos as extremidades diagonais da tela sensível ao toque.

- Toque nos pontos (0,0) e (239,319) e anote os valores Raw X e Raw Y. Para melhor precisão, tente várias vezes e encontre o valor correto.

- TS_MINX corresponde ao valor de ADC quando X = 0 ;

- TS_MINY corresponde ao valor de ADC quando Y = 0 ;

- TS_MAXX corresponde ao valor de ADC quando X = 240 -1, ou seja, 239 ;

- TS_MAXY corresponde ao valor de ADC quando Y = 320 -1, ou seja, 319 ;

- Altere esses parâmetros no sketch, recompile e envie para o Arduino.

- Repita as etapas acima se você ainda não obtiver valores precisos.

####  Sketch de demonstração da tela sensível ao toque ####

```
// Paint application - Demonstate both TFT and Touch Screen
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 54   // can be a digital pin, this is A0
#define XP 57   // can be a digital pin, this is A3

#elif defined(__AVR_ATmega32U4__) // leonardo
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 18   // can be a digital pin, this is A0
#define XP 21   // can be a digital pin, this is A3

#else //168, 328, something else
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 14   // can be a digital pin, this is A0
#define XP 17   // can be a digital pin, this is A3

#endif

//Measured ADC values for (0,0) and (210-1,320-1)
//TS_MINX corresponds to ADC value when X = 0
//TS_MINY corresponds to ADC value when Y = 0
//TS_MAXX corresponds to ADC value when X = 240 -1
//TS_MAXY corresponds to ADC value when Y = 320 -1

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  //Paint brush color

// For better pressure precision, we need to know the resistance
// between X+ and X- Use any multimeter to read it
// The 2.8" TFT Touch shield has 300 ohms across the X plate

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); //init TouchScreen port pins

void setup()
{

    Tft.init();  //init TFT library
    pinMode(0,OUTPUT);
    //Draw the pallet
    Tft.fillRectangle(0,0,30,10,BLACK);
    Tft.fillRectangle(30,0,30,10,RED);
    Tft.fillRectangle(60,0,30,10,GREEN);
    Tft.fillRectangle(90,0,30,10,BLUE);
    Tft.fillRectangle(120,0,30,10,CYAN);
    Tft.fillRectangle(150,0,30,10,YELLOW);
    Tft.fillRectangle(180,0,30,10,WHITE);
    Tft.fillRectangle(210,0,30,10,GRAY1);

}

void loop()
{

    // a point object holds x y and z coordinates.
    Point p = ts.getPoint();

    //map the ADC value read to into pixel co-ordinates

    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // we have some minimum pressure we consider 'valid'
    // pressure of 0 means no pressing!

    if (p.z > ts.pressureThreshhold) {


        // Detect  paint brush color change
        if(p.y < 15)
        {
            if(p.x >= 0 && p.x < 30)
            {
                color = BLACK;
            }
            if(p.x >= 30 && p.x < 60)
            {
                color = RED;
                digitalWrite(0,HIGH);
            }
            if(p.x >= 60 && p.x < 90)
            {
                color = GREEN;
            }
            if(p.x >= 90 && p.x < 110)
            {
                color = BLUE;
                digitalWrite(0,LOW);
            }
            if(p.x >= 120 && p.x < 150)
            {
                color = CYAN;
            }
            if(p.x >= 150 && p.x < 180)
            {
                color = YELLOW;
            }
            if(p.x >= 180 && p.x < 210)
            {
                color = WHITE;
            }
            if(p.x >= 210 && p.x < 240)
            {
                color = GRAY1;
            }
        }
        else
        {
            Tft.fillCircle(p.x,p.y,2,color);
        }
    }
}
```

###  Código de Demonstração mostrado ###

- Insira o TFT Touch Shield no Seeeduino como mostrado abaixo.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/DemoShow.JPG)
TFT Touch Shield conectado ao Seeeduino


## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos   ##

- **[Libraries]**[Bibliotecas do TFT Touch Shield](https://github.com/Seeed-Studio/TFT_Touch_Shield_V1)
- **[Eagle]**[Esquemático e Layout do TFT Touch Shield v1.0](https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[PDF]**[TFT Touch PCB](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20PCB.pdf)
- **[PDF]**[TFT Touch SCH](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20Sch.pdf)
- **[Version]**[Versão Radio Shack do TFT Touch Shield em arquivos Eagle](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/Schematic_for_Radio_Shack_.zip)
- **[Datasheet]** [ST7781R](http://garden.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf) , [FGD280E3715V1_8bit](http://garden.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf)
-  **[App Notes]**[ATMEL - Notas de Aplicação sobre Tela de Toque de quatro e cinco fios](http://www.adafruit.com/datasheets/AVR341.pdf)
- **[Touch Screen]**[TI - Usando Tela de Toque Resistiva](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- **[SD Card]**[https://github.com/adafruit/SD](https://github.com/adafruit/SD)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>