---
description: Grove - Luz de Cordão de LED
title: Grove - Luz de Cordão de LED
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_String_Light
sku: 104020005
last_update:
  date: 1/7/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-LED_String_Light/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg" alt="pir" width={600} height="auto" /></p>

O módulo Grove - LED String Light é essencialmente um driver de LED para as luzes de cordão de LED incluídas no pacote. A tensão de funcionamento do módulo é 3,3 V/5 V. No entanto, as luzes de cordão de LED exigem uma tensão de funcionamento de 12 V. Portanto, este módulo usa um conversor DC-DC elevador em modo de corrente AIC1896 para fornecer a tensão necessária às luzes de cordão de LED. A luz de cordão de LED tem 5 metros de comprimento e possui 50 LEDs RGB conectados a distâncias iguais uns dos outros. Você pode usá-las para enfeitar uma árvore de Natal, iluminar sua festa ou decorar seu quarto.

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)
##  Recursos
---
*   Usado em conjunto com luzes de cordão de LED

*   Luzes de cordão de LED de 5 metros de comprimento incluídas no pacote

*   50 LEDs RGB conectados a distâncias iguais ao longo de todo o comprimento de 5 metros proporcionam uma aparência colorida

*   Interface JST 2.0 usada para conectar as luzes de cordão de LED ao módulo driver

 *   Usa cabos Grove padrão de 4 pinos para conectar a outros módulos Grove 

##  Função da Interface
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg" alt="pir" width={600} height="auto" /></p>

<dl>
<dt>① Interface JST 2.0: usada para conectar às luzes de cordão de LED</dt>
<dt>② Interface Grove: HIGH em SIG (Pino 1) liga as luzes de cordão de LED, LOW as desliga</dt>
</dl>

##  Uso
---
Siga estas etapas para montar um circuito de exemplo usando este módulo:

1.  Primeiro conecte as luzes de cordão de LED ao módulo **Grove - LED String Light** usando a interface de dois fios JST2.0.

 2.  Conecte o módulo de luzes de cordão de LED ao lado de saída do seu circuito (à direita do módulo de alimentação). No lado de entrada do circuito, você pode usar uma variedade de módulos de entrada baseados em sensores ([Grove - Light Sensor](/pt-br/Grove-Light_Sensor/), [Grove - Sound Sensor](/pt-br/Grove-Sound_Sensor/), [Grove - Button](/pt-br/Grove-Button/) ou [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer/). 

3.  Ligue o circuito.

4.  As luzes de cordão de LED acendem quando o módulo de entrada fornece um gatilho:


 Se estiver usando com um sensor de luz conectado diretamente ao lado de entrada do circuito, você deverá ver os LEDs acenderem em luz forte. Se quiser que as luzes acendam no escuro, adicione um módulo Grove - NOT entre o sensor de luz e o módulo de alimentação. 

Se estiver usando com um sensor de som, você deverá ver os LEDs acenderem ao detectar som. Novamente, se quiser inverter a função, ou seja, se quiser que as luzes fiquem ON o tempo todo, exceto quando houver som, adicione um módulo Grove - NOT entre o sensor de som e o módulo de alimentação. 

Se estiver usando com um botão momentâneo como o do módulo [Grove - Button](/pt-br/Grove-Button/), basta pressionar o botão para acender as luzes de cordão. 

*   Se estiver usando com um potenciômetro deslizante, mova o cursor da posição GND para VCC e veja o brilho das luzes aumentar à medida que a tensão fornecida aumenta.
<!-- </dd></dl>
</dd></dl>
</dd></dl> -->

Abaixo está uma ilustração de um circuito Grove montado usando o módulo de alimentação Grove - USB Power: 

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif" alt="pir" width={600} height="auto" /></p>

Se você não tiver o módulo Grove - USB Power, use em vez disso o módulo Grove - DC Jack Power para ligar as luzes de cordão de LED. 

##  Disponibilidade
---
Este módulo Grove está disponível como parte das seguintes Séries de Kits Grove

<!-- 链接有问题*   [Grove Mixer Pack V2](/pt-br/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

Como alternativa, ele pode ser comprado separadamente no Seeed Studio Bazaar.


## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Recursos
---
*   [[Schematic PDF](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.pdf)]

*   [[Eagle File](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip)]

## Suporte Técnico & Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
