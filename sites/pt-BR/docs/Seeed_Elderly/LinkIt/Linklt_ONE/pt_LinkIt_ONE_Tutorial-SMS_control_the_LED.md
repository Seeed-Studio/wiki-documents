---
description: Tutorial LinkIt ONE - Controle o LED por SMS
title: Tutorial LinkIt ONE - Controle o LED por SMS
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-SMS_control_the_LED
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-SMS_control_the_LED/
---
**O que estamos fazendo**

Nesta seção, alcançamos uma função bem legal. A característica marcante do LinkIt One é ser integrado com o módulo de comunicação. Estamos usando o módulo de comunicação GSM para transmitir mensagens, passando o estado de chave para alterar o LED. Isso será empolgante. Primeiro conecte a antena e, em seguida, insira um SIMCARD no slot do LinkIt One, depois conecte o circuito de acordo com o esquema. Use um telefone celular com GSM, edite o conteúdo da mensagem como ON ou OFF, envie para o número especificado (o número do SIM), agora você pode controlar o estado de liga/desliga do LED, com sincronização global.

**Coisas de que você precisa**

*   LinkIt One x 1

*   Placa de prototipagem x 1

*   Resistores 1kΩ, 330Ω x 1

*   Transistor（2N3904） x 1

*   GIS ANT x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_2.png)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE do Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L9_SMS_Light_

*   A antena não funciona?

    *   Atenção para verificar se a conexão da antena está estável. (Soquete da antena na parte de trás, marcado como GSM-ANT)

*   Envia a mensagem e não há resposta?

    *   O SIMCARD precisa ser uma versão desbloqueada. (Ou seja, não limitado a nenhum telefone celular específico)

**Deixando melhor**

Perfeito com a função de comunicação do módulo GSM. Se quisermos fazer um tempo curto, como modificar o código? Defina um tempo de 60 segundos (enviar na forma ON60). Envie uma mensagem para definir que a iluminação seja automaticamente apagada um minuto após a chegada.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L10_SMS_Light_Advanced_

**Mais ideias**

Com os módulos de função Bluetooth, GPS, Wi-Fi. Veja se surge alguma nova forma de usar?

**Referência**

<!-- *   [The Basics](/pt-br/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/pt-br/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/pt-br/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/pt-br/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/pt-br/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/pt-br/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/pt-br/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/pt-br/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/pt-br/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/pt-br/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
