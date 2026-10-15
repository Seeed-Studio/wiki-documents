---
description: Xadow - Tela sensível ao toque de 1,54 polegada
title: Xadow - Tela sensível ao toque de 1,54 polegada
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_1.54_inch_Touchscreen
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_1.54_inch_Touchscreen/
---

---
Se você já usou ou ouviu falar sobre o Rephone, o primeiro telefone modular e de código aberto do mundo, este produto sobre o qual vamos falar não será estranho para você. Sim! O Xadow 1.54'' Touchscreen é exatamente a tela sensível ao toque que o Rephone utiliza.

Este display TFT contém 240 x 240 pixels que podem ser controlados individualmente para exibir até 262K cores. Acima do display há uma camada de touchscreen capacitiva, oferecendo uma área ativa de 29,4 mm x 29,4 mm no centro do display. Como uma tela de toque única, ela pode detectar toques de dedo em qualquer lugar dentro da área ativa durante as operações normais. O driver TFT possui o driver IC ST7789S interno com interface serial de 2 bits de dados e 4 bits de controle, enquanto o controlador da touchscreen capacitiva usa I2C.

![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.JPG)

:::note
    Fizemos algumas modificações na biblioteca do Xadow 1.54" Touchscreen. Consulte a seção **Notice** para obter informações detalhadas.
:::
### Rastreador de Versão

|Produto |Versão|	Data de lançamento|	Status de suporte|	Notas|
|---|---|---|---|---|
|Xadow 1.54" Touchscreen|(v1.0, versão antiga)|	Out 2015	|Suportado	|Nenhuma|
|Xadow 1.54" Touchscreen|(v1.1, última versão)|	Jun 2016	|Suportado|	Nenhuma|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Xadow-1.54-inch-Touchscreen-p-2553.html)

## Recursos
---
- Resolução de 240 x 240
- Exibe até 262K cores
- 4x furos de montagem de 2 mm/0,9”
- Conectores Xadow integrados para cabos FPC facilmente conectáveis
- Escolha perfeita para o seu projeto de telefone DIY

## Especificação
---

|Geral|Valor|
|---|---|
|**Driver TFT**|	ST7789S|
|**Touchscreen** |Tipo	Capacitiva|
|**Luz de fundo**|	3 LEDs brancos ajustáveis|
|**Consumo de corrente**|	~ 100 mA com luz de fundo máxima|
|**Resolução**|240 × 240 pixels|
|**Conectores**|2 × conectores Xadow de 35 PIN para Xadow / GSM+BLE e Xadow Audio
|**Interfaces**| Interface serial de quatro fios para o display TFT / I2C para a touchscreen

**Dimensões**

|Item |Unidade (mm)|Unidade (polegada)|
|---|---|---|
|Placa | 50,22 mm × 47,21 mm   |1,98” × 1,86”|
|Touchscreen | 38,1 mm × 37,8 mm |1,51”× 1,51”|
|Área Ativa | 27,72 mm × 27,72 mm  |1,09” × 1,09”|
|Furos de montagem|4 × 2 mm|4 x 0,9”|

## Visão Geral do Hardware
---
![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.png)

:::warning
    Insira o controlador, como o Xadow GSM+BLE, na porta à **DIREITA** e insira o módulo de áudio na porta à **ESQUERDA**.
:::

## Aviso
---
- O produto não é tão resistente quanto parece, portanto tente usá-lo em um ambiente estável, pois uma variação brusca de temperatura e umidade pode causar mau funcionamento do painel.
- Procure manter a superfície do painel limpa e evite qualquer adesivo aplicado na superfície; se você precisar limpar a tela, recomendamos que use um pano macio e limpo com detergente neutro ou álcool isopropílico.
- Observe que fizemos algumas modificações na biblioteca do Xadow 1.54" Touchscreen para a versão mais recente. Se você estiver usando o Xadow 1.54" Touchscreen v1.1:
  - Para o ambiente de desenvolvimento de JavaScript, Lua e Arduino ou ao usar o código-fonte do RePhone Create Kit, você precisa comentar a linha correspondente #define _TOUCH_SCREEN_V1_0_ e descomentar (habilitar) a linha //#define _TOUCH_SCREEN_V1_1_. Fornecemos essas linhas correspondentes em:
    - https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone/blob/master/hardware/arduino/mtk/libraries/LDisplay/utility/lcd_sitronix_st7789s.h.
    - https://github.com/Seeed-Studio/JavaScript_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h.
    - https://github.com/Seeed-Studio/Lua_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h
    - https://github.com/WayenWeng/RePhone_Create_Kit_Source_Code/blob/master/RePhone_Create_Source_Code/lcd_sitronix_st7789s.h
  - Para o arquivo .VXP do RePhone Create Kit, altere a linha App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_x.vxp para App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_1.vxp em https://github.com/WayenWeng/RePhone_Create_Kit_VXP/blob/master/RePhone%20Create%20Kit%20VXP/autostart.txt
  - Para o ambiente de desenvolvimento do Eclipse, você não precisa alterar nada.

## Comunidade Rephone
---
[![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Temos procurado um lugar melhor onde nossos apoiadores (usuários do RePhone) possam se reunir de forma acolhedora e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então aqui está ele, a [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone).

Agora junte-se a nós na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.


## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
O diagrama esquemático do Xadow 1.54” Touchscreen é fornecido no link a seguir:

- [Arquivos esquemáticos do Xadow 1.54”Touchscreen](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip)

Confira mais informações sobre o display TFT e a touchscreen capacitiva:

- [Datasheet do display TFT](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/Datasheet-Capacitive_touchscreen.pdf)
- [Datasheet da touchscreen capacitiva](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/TFT_Display.rar)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
