---
title: Mini Soldering Iron
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Mini_Soldering_Iron/
slug: /Mini_Soldering_Iron
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Mini_Soldering_Iron/
---
![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_product_view.jpg)

Mini Soldering Iron é um ferro de solda fino, leve, com controle de temperatura preciso e aquecimento rápido (temperatura ambiente a 300℃ em 10 segundos) com um display OLED, que será uma ferramenta essencial no seu kit de desenvolvimento. Ele também possui modo de suspensão e notificação de superaquecimento. Além disso, é fácil de montar e seguro contra ESD (através de grampo de aterramento). A faixa de temperatura deste ferro é de 100 ~ 400 ℃ (212 ~ 752 ℉), e ele contém duas pontas de solda integradas (com aquecedor) e compactas para diferentes situações. Você pode configurar suas definições pela interface USB micro tipo-B.<sup>[1]</sup>

<sup>[1]</sup>Esta página apenas mostra uma maneira mais rápida e as principais informações para começar. Para informações detalhadas, consulte o manual incluído.

|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0Europe-Standard-p-2592.html?ref=newInBazaar)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0US%C2%A0Standard-p-2593.html?ref=newInBazaar)|
|:---:|:---:|
|Para padrão da UE|Para padrão dos EUA|

##  Recursos
---
*   Controle de temperatura preciso (estabilidade de temperatura dentro de ± 2%)

*   Ferro fino e leve, sem fadiga para longos períodos de trabalho

*   Aquecimento rápido para alta eficiência

*   Adaptador de energia separado para maior segurança pessoal

*   Grampo de aterramento para ser livre de ESD

*   Interface USB micro tipo-B para configuração personalizada do sistema e atualização de firmware

*   Não é necessário calibração manual

*   Unidade de temperatura comutável (℃ ou ℉)

##  Especificações
---
<table>
<tr>
<td>  Tela </td>
<td> OLED</td>
</tr>
<tr>
<td>  Interface USB </td>
<td> USB micro tipo-B</td>
</tr>
<tr>
<td>  Peso </td>
<td> 33g (adaptador de energia não incluído)</td>
</tr>
<tr>
<td>  Potência </td>
<td> 65W</td>
</tr>
<tr>
<td>  Tensão de entrada (para o adaptador de energia) </td>
<td> 100 ~ 240 V</td>
</tr>
<tr>
<td>  Faixa de temperatura </td>
<td> 100 ~ 400 ℃(212 ~ 752 ℉)</td>
</tr>
<tr>
<td>  Impedância das pontas para o terra </td>
<td> 2 Ω</td>
</tr>
<tr>
<td>  Estabilidade de temperatura </td>
<td> ± 2%</td>
</tr>
<tr>
<td>  Temperatura do modo de suspensão  </td>
<td> 200℃(392℉), ajustável</td>
</tr></table>

##  Lista de peças'
---

<table>
<tr>
<th>Nome das peças   </th>
<th> Quantidade</th>
</tr>
<tr>
<td> Mini Soldering Iron (parte principal)   </td>
<td> 1PC</td>
</tr>
<tr>
<td> Kit de soldagem em PCB </td>
<td> 1PC</td>
</tr>
<tr>
<td> Ponta de ferro de solda tipo-BC2  </td>
<td> 1PC</td>
</tr>
<tr>
<td> Ponta de ferro de solda tipo-B2   </td>
<td> 1PC</td>
</tr>
<tr>
<td> Suporte para ferro de solda </td>
<td> 1PC</td>
</tr>
<tr>
<td> Kit de soldagem em PCB  </td>
<td> 1PC</td>
</tr>
<tr>
<td> Adaptador de energia DC5525 </td>
<td> 1PC</td>
</tr>
<tr>
<td> Grampos de aterramento  </td>
<td> 1PC</td>
</tr>
<tr>
<td> Chave hexagonal ( e dois parafusos de reserva) </td>
<td> 1PC</td>
</tr>
<tr>
<td> Manual </td>
<td> 1PC</td>
</tr></table>

##  Primeiros Passos
---
**Nota:** Neste caso mostramos um ambiente geral de desenvolvimento.
Esta seção mostra como realizar operações básicas com este ferro de solda. Para mais detalhes, consulte o manual incluído na embalagem.

###  Vista explodida

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_exploded_view_s.jpg)
<dl>
<dd> ①. Parafuso de fixação da ponta do ferro de solda</dd>
<dd> ②. Botão A</dd>
<dd> ③. Botão B</dd>
<dd> ④. Parafuso de ajuste</dd>
<dd> ⑤. Porta de energia</dd>
<dd> ⑥. Micro USB</dd>
<dd> ⑦. Porta DC5525 12-24V</dd>
<dd> ⑧. Porta de conexão da ponta do ferro de solda</dd>
<dd> ⑨. Lado de conexão do ferro de solda</dd>
<dd> ⑩. Elemento de aquecimento do ferro de solda</dd>
</dl>

###  Montar o ferro de solda

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_installation_guide.jpg)

1.  Desrosqueie o parafuso de fixação da ponta, insira a ponta de solda na porta de conexão e, em seguida, aperte o parafuso.

2.  Conecte os fios de terra ao parafuso de ajuste de aterramento.

3.  Conecte o conector DC ao Mini Soldering Iron, conecte o cabo de alimentação e ligue o dispositivo conforme necessário.

###  Operações básicas

**Ajustar temperatura**

Pressione os botões para ajustar as temperaturas.

Pressione o botão A para aumentar a temperatura, pressione o botão B para diminuir a temperatura.

**Calibração**

 1.  Pressione o botão B no modo de espera (estado sem aquecimento) para entrar no modo termômetro.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_1.jpg)

2.  Pressione simultaneamente o botão B e o botão A para entrar no modo termômetro. Ele executará a operação de calibração automaticamente, sem necessidade de operação manual.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_2.jpg)

3.  Após cerca de 30 segundos, mantenha pressionado qualquer um dos botões para sair do modo de calibração.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_3.jpg)

4.  A figura da esquerda mostra que a calibração automática foi bem-sucedida e a figura da direita mostra que a calibração automática falhou. Se a calibração automática falhar, repita os passos anteriores.


###  Um pequeno exercício

Você pode fazer um teste de soldagem de alguns LEDs e resistores em uma placa de circuito impresso em forma de folha que está incluída na embalagem.

1.  Monte um ferro de solda com os passos descritos acima.
2.  Solde todos os quatro LEDs e quatro resistores na placa de circuito impresso.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice_s.JPG)

_**Nota**_ que você deve alinhar os LEDs na direção correta, pois os LEDs são componentes bipolares:

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice-directions-s.jpg)

_**Nota**_ que você precisa soldar um componente eletrônico com os seguintes passos básicos e fundamentais:


-  Aplique um pouco de solda no ponto de soldagem e, em seguida, aplique um pouco de solda em um determinado ponto dos pinos.
-  Una os dois pontos juntos com o ferro de solda.


##  Recursos
---
[User manual](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/res/Mini_Soldering_Iron_manual.zip)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>