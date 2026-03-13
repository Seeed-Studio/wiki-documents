---
description: Tutorial LinkIt ONE - Obter temperatura com página Web
title: Tutorial LinkIt ONE - Obter temperatura com página Web
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Get_temperature_with_Webpage
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/
---
**O que estamos fazendo**

LinkIt One com função de comunicação Wi-Fi. Coletamos alguns dados através do LinkIt One. Como o AP de Internet para suportar o acesso a dados, fornecendo um servidor Web. Acessando o endereço IP correspondente é possível obter os dados com o navegador. Na próxima etapa, você precisa conectar o circuito, fazer a aquisição de dados a partir do sensor de temperatura. Em seguida, depois de estar bem equipado com as antenas Wi-Fi e conectado à rede, escolha a rede preenchendo três parâmetros: o nome da rede (WiFi_AP), a senha de acesso (WIFI_PASSWORD) e o modo de transmissão do roteador (opções LWIFI_OPEN, LWIFI_WPA, LWIFI_WEP). Por fim, o código é carregado para o LinkIt One. Usando um dispositivo terminal com rede, abra o navegador e digite o endereço IP para obter os dados de temperatura. (Acesse o endereço IP atribuído via roteador DHCP)

**Coisas de que você precisa**

*   LinkIt One x 1

*   Placa de ensaio x 1

*   Resistores 330Ω x 1
*   Antena Wi-Fi x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_2.jpg)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L10_Web_Temp_

**Observe** que você deve abrir o Serial monitor e inserir qualquer coisa para iniciar o programa.

**Solução de problemas**

*   A antena não funciona?

    *   Atenção para verificar se a conexão da antena é estável. (Soquete de antena na parte de trás, marcado como Wi-Fi/BT ANT)

*   Onde está o endereço IP？

    *   Primeiro ajuste o modo serial (DEBUG - &gt;MOLDE), você pode fazer a consulta pela porta serial. Clique no canto superior direito do compilador, no ícone de lupa. Consulte normalmente o endereço IP atribuído. (Por favor, clique nesta etapa para alterar Tools - &gt;Port - &gt;COMX)

**Tornando isso melhor**

Você quer alterar os dados em tempo real? Nós, através da porta Web, monitoramos a variação do valor de sensibilidade à luz.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L10_Web_Temp_Advanced_

**Mais ideias**

Se quiser controlar o LinkIt One pela web, como pode ser o controle do funcionamento do hardware?

**Referência**
<!-- 
*   [The Basics](/pt-br/LinkIt_ONE_Tutorial-The_Basics)

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

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
