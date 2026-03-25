---
description: Rainbowduino Extension Board v0.9b
title: Rainbowduino Extension Board v0.9b
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rainbowduino_Extension_Board_v0.9b
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Rainbowduino_Extension_Board_v0.9b/
---

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowshield.jpg)

Rainbowduino Extension Shield é uma placa de breakout dos 192 canais de acionamento de LED separados do Rainbowduino. Os canais são divididos em três matrizes 8*8: vermelho, verde e azul para facilitar o controle. Ela é projetada para facilitar projetos de LED personalizados baseados em Rainbowduino.

<font color="red" size="3">NOTA: Para acionar a Rainbowduino Extension Board, você também pode precisar de um [Rainbowduino](https://www.seeedstudio.com/depot/rainbowduino-led-driver-platform-atmega-328-p-371.html?cPath=132_133) .</font>

**Modelo: [INT111A4M](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177)**


##   Recursos  

*   60,33mm×180,61mm (3 vezes o tamanho do Rainbowduino)

*   Pode acionar 192 LEDs separados

*   Nenhuma conexão extra necessária

*   Conexão direta ao Rainbowduino

*   Matriz de LED 8×24

*   aciona LEDs externos

##   Ideias de Aplicação  

*   desenhe seu próprio padrão

*   crie mensagem em rolagem

##   Cuidados  

Lembre-se de que o positivo do LED deve ser conectado ao pad octogonal. O pino quadrado da placa de extensão deve ser encaixado na primeira cavidade de pino. Caso contrário, os LEDs não irão acender, mas também não serão danificados.

##   Uso  

Rainbowduino Extension Shield é a placa de breakout do Rainbowduino, que pode controlar facilmente 192 (8×24) LEDs. Também é possível soldar LEDs fora da placa. O LED fica voltado para cima, e a parte de trás é o local para soldar os pinos.

###   Instalação de Hardware  

*   1. solde corretamente os headers de pino e os LEDs
*   2. conecte ao Rainbowduino

###   Programação  

O código de demonstração com mais detalhes está vinculado **aqui**, consulte-o se necessário.

###   Exemplo  

Rainbowduino Extension Shield é usado para acender os LEDs em diferentes padrões. O código abaixo é capaz de controlar o G10 e o R31 para acender gradualmente como exemplo. Você pode alterar o estilo simplesmente modificando o valor dos parâmetros do array dots_color. O primeiro elemento pode escolher a matriz em diferentes cores; os dois últimos parâmetros são usados para definir qual precisa acender em valor de linha e coluna.
```
void _main(void)
{
  _init();
  unsigned char i=0;
  for(;;)
  {
    dots_color[0][0][0]=i<<4;//high 4bit G8 dot
    dots_color[1][0][3]=i&0x0f;//low 4bit R1 dot
    i++;
    delay(100);
  }
}
```
O efeito é:

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam1.jpg)

Na verdade, 1 byte é usado para controlar dois LEDs, a teoria em detalhes é a seguinte:
```
unsigned char dots_color[3][8][4]=
{
//=====================================================
  {//green debug
    {0x00,0x00,0x00,0x00},//G8,G7,G6,G5,G4,G3,G2,G1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G16,G15,G14,G13,G12,G11,G10,G9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G24,G23,G22,G21,G20,G19,G18,G17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G32,G31,G30,G29,G28,G27,G26,G25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G40,G39,G38,G37,G36,G35,G34,G33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G48,G47,G46,G45,G44,G43,G42,G41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//G56,G55,G54,G53,G52,G51,G50,G49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //G64,G63,G62,G61,G60,G59,G58,G57  every dot has 4 bit color
},
//=======================================================
  {//red debug
    {0x00,0x00,0x00,0x00},//R8,R7,R6,R5,R4,R3,R2,R1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R16,R15,R14,R13,R12,R11,R10,R9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R24,R23,R22,R21,R20,R19,R18,R17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R32,R31,R30,R29,R28,R27,R26,R25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R40,R39,R38,R37,R36,R35,R34,R33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R48,R47,R46,R45,R44,R43,R42,R41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//R56,R55,R54,R53,R52,R51,R50,R49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //R64,R63,R62,R61,R60,R59,R58,R57  every dot has 4 bit color
  },
//======================================================
  {//blue debug
    {0x00,0x00,0x00,0x00},//B8,B7,B6,B5,B4,B3,B2,B1          every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B16,B15,B14,B13,B12,B11,B10,B9   every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B24,B23,B22,B21,B20,B19,B18,B17  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B32,B31,B30,B29,B28,B27,B26,B25  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B40,B39,B38,B37,B36,B35,B34,B33  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B48,B47,B46,B45,B44,B43,B42,B41  every dot has 4 bit color
    {0x00,0x00,0x00,0x00},//B56,B55,B54,B53,B52,B51,B50,B49  every dot has 4 bit color
    {0x00,0x00,0x00,0x00} //B64,B63,B62,B61,B60,B59,B58,B57  every dot has 4 bit color
},
};
```

Outra imagem de efeito exibida aqui como o caractere RGB, e o código detalhado está vinculado na página do depósito.

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam2.jpg)

##   Recursos  

- **[Datasheet]** [Datasheet](https://www.seeedstudio.com/depot/datasheet/Rainbowduino_Extension_Shield_v0.9b.pdf)

##   Suporte  

Se você tiver dúvidas ou outras ideias de design melhores, você pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou **wish** para discutir.

##   Rastreador de Versão  

<table>
<tr>
<th> Revisão</th>
<th> Descrições</th>
<th> Lançamento</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> Lançamento público inicial</td>
<td width="200px"> 23 de setembro de 2010</td>
</tr>
</table>

##   Ideia Adicional  

A Ideia Adicional é o lugar para escrever suas ideias de projeto sobre este produto, ou outros usos que você tenha encontrado. Ou você pode escrevê-las na página de Projetos.

##   Como comprar  

Clique aqui para comprar: [https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177).

##   Veja também  

LEDs para a placa de extensão, verifique aqui: **https://www.seeedstudio.com/depot/optoelectronics-discrete-led-c-93_94.html**

##   Licenciamento  

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição-CompartilhaIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código-fonte para detalhes.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
