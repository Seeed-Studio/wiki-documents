---
description: Tutorial LinkIt ONE - O Básico
title: Tutorial LinkIt ONE - O Básico
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-The_Basics
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-The_Basics/
---

**O que estamos fazendo**

Vamos construir um circuito simples usando um transistor, um LED e uma chave liga/desliga. O Diodo Emissor de Luz (LED) transforma energia elétrica em luz visível. O transistor é um componente fundamental em eletrônica que atua como uma chave ou como um amplificador de corrente. Aqui, usamos uma chave para LIGAR e DESLIGAR o LED indiretamente usando o transistor.

**Coisas de que você precisa**

*   LinkIt One x 1
*   Protoboard x 1

*   Resistores 330Ω,1kΩ x 1 de cada

*   LED de 5mm x 1

*   Chave x 1
*   Transistor (2N3904) x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_2.jpg)

**Solução de problemas**

*   Verifique a polaridade do LED (o terminal longo é positivo e o terminal curto é negativo).

*   Verifique se você não colocou em curto dois pinos da chave.

*   Certifique-se de que você não esqueceu a conexão do transistor no circuito (um transistor é necessário para acionar um LED).

*   Queimou um LED..?
    *   Isso acontece quando você esquece de conectar o resistor de entrada que atua como limitador de corrente para o LED.

**Deixando melhor**

Agora fizemos um circuito de controle simples. Vamos torná‑lo mais interessante apenas adicionando outro componente chamado capacitor. Um capacitor atua como um dispositivo de armazenamento temporário de carga. Se um capacitor for conectado em paralelo com o resistor que está em série com o LED, ele faz o LED apagar gradualmente. Quando a chave é ligada, o capacitor é carregado; quando a chave é desligada, a carga armazenada no capacitor é descarregada lentamente, o que faz o LED se apagar de forma suave.

**Mais ideias**

Qual é o componente usado para aumentar lentamente a luminosidade do LED quando ele é ligado?

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
