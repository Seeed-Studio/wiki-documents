---
title: Dínamo de Bicicleta com Suporte - 6V 3W
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Bicycle_Dynamo_With_Bracket-6V_3W/
slug: /Bicycle_Dynamo_With_Bracket-6V_3W
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Bicycle_Dynamo_With_Bracket-6V_3W/
---
![](http://bz.seeedstudio.com/depot/images/product/Bidynamo.jpg)

Este produto fornece energia limpa e ecológica, ele produz eletricidade sem qualquer combustível. Funciona com segurança e em silêncio. É moderno, os usuários podem contribuir para proteger o mundo por meio de uma vida de baixo carbono.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/bicycle-dynamo-with-bracket-6v-3w-p-798.html?cPath=155)

## Recursos

---
- design simples e bonito de aparência e dissipação de calor, à prova de chuva, à prova de poeira, anti-vibração,
- saída de corrente constante

## Cuidados

---

1. Não toque na carcaça do dínamo após muito tempo pedalando, ele pode queimar seu corpo. Espere pelo menos 10 minutos.
2. Pode ser usado em dias de chuva, mas não o coloque na água, mantenha-o longe de crianças.

## Especificação

---

### Tamanho geral e estruturas do dínamo

1. O diâmetro máximo do corpo do dínamo é: 40,5 mm, o comprimento máximo do corpo principal é: 94,5 mm。

![](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/img/Bicycle-spec.JPG)

1. rolete de fricção
2. o corpo do dínamo
3. Aço magnético
4. Suporte do enrolamento
5. Caixa da mola
6. Bobina
7. Chave inglesa
8. Placa de lingueta
9. Tampa traseira

2. SAÍDA: 6V,3W

3. GARANTIA:    1 ano

4. VIDA ÚTIL:  2-3 anos

### Parâmetros técnicos

**teste de potência de saída sob tensão constante**

<table>
  <tbody>
    <tr>
      <th>Velocidade(km/h)</th>
      <th>Potência de saída(W)</th>
      <th>Tensão de saída(V)</th>
      <th>Corrente de saída(A)</th>
    </tr>
    <tr>
      <td width="200px">5</td>
      <td width="200px">0.56</td>
      <td width="200px">6.00</td>
      <td width="200px">0.126</td>
    </tr>
    <tr>
      <td>15</td>
      <td>1.89</td>
      <td>6.00</td>
      <td>0.369</td>
    </tr>
    <tr>
      <td>30</td>
      <td>4.09</td>
      <td>6.00</td>
      <td>0.560</td>
    </tr>
  </tbody>
</table>

**teste de carga com resistência constante （18 ohms）**

<table>
  <tbody>
    <tr>
      <th>velocidade（km/h）</th>
      <th>Potência de saída(W)</th>
      <th>Tensão de saída(V)</th>
      <th>Corrente de saída(A)</th>
    </tr>
    <tr>
      <td width="200px">5</td>
      <td width="200px">0.45</td>
      <td width="200px">2.45</td>
      <td width="200px">0.115</td>
    </tr>
    <tr>
      <td>15</td>
      <td>1.89</td>
      <td>5.78</td>
      <td>0.325</td>
    </tr>
    <tr>
      <td>30</td>
      <td>3.21</td>
      <td>7.23</td>
      <td>0.435</td>
    </tr>
  </tbody>
</table>

**Teste de temperatura ：**

<table>
  <tbody>
    <tr>
      <th>Temp. ambiente</th>
      <th>Temp. da carcaça</th>
      <th>Elevação de temp.</th>
      <th>Observações</th>
    </tr>
    <tr>
      <td width="200px">20℃</td>
      <td width="200px">55.2℃</td>
      <td width="200px">32.2℃</td>
      <td width="200px">teste mantido a 30 cm de distância</td>
    </tr>
  </tbody>
</table>

## Uso

### Instalação de hardware

Fixe o dínamo no garfo dianteiro próximo à roda da bicicleta, ajuste a altura para o local adequado. (preste atenção ao lado de fixação do dínamo “esquerdo ou direito”, que deve coincidir.)

1、Movimente a chave inglesa e deixe o rolete do dínamo tocar a borda da roda na posição adequada.

## Perguntas Frequentes

---
Liste sua pergunta aqui:

- Ele pode ser usado para alimentar um Arduino diretamente?

R: Não, se por diretamente você quer dizer ligar os fios do dínamo diretamente a um Arduino, claro que ele não pode fazer isso. Porque, como todos os geradores, um dínamo como este irá fornecer CA, o que é bom para lâmpadas de tungstênio (ou seja, lâmpadas incandescentes), mas LEDs precisam todos de CC, e o mesmo vale para dispositivos de estado sólido como o Arduino. Então você sempre vai precisar de uma ponte retificadora *primeiro*. O que você acrescenta depois disso depende do seu orçamento e das suas necessidades. Um Arduino precisa de tensão estável, então, para um Arduino, você vai precisar usar o gerador essencialmente como um carregador de bateria... e então você alimenta todas as suas coisas *a partir dessa bateria que é carregada.*

Para fazer isso com a maior eficiência possível você vai precisar idealmente de um conversor CC para CC (Google "boost-buck converter") ou, no mínimo, algum tipo de circuito de carregamento alimentado pela sua ponte retificadora.

Veja os links abaixo.

- Se eu parar (por exemplo, em um sinal vermelho) ele naturalmente vai parar de fornecer energia. O que eu preciso para manter o fluxo de energia, um capacitor?

R: Sim... isso funcionaria por alguns segundos até mais de um minuto... dependendo de quão brilhante é o LED que você usa e do tamanho do capacitor que você usar.

P: Uma bateria? De quais especificações?

R: Pesquise no Google por qualquer um dos inúmeros sites (eu já dei um ponto de partida abaixo) que ensinam como construir uma luz de bicicleta com *standlight*.
Esse é o termo de busca que você quer.

P: Meu uso pretendido é a) carregar meu celular, ou b) alimentar um Arduino e fazer coisas legais :)

R: Isso é *bastante* viável, mas, novamente, você vai precisar mudar aqueles (bastante variáveis) 3 a cerca de 12 volts CA para CC em algo mais apropriado (e estável). Se você usar qualquer interruptor liga/desliga, além do próprio "interruptor" do dínamo, tome cuidado para usar um regulador de tensão, porque a tensão que sai de um dínamo - via diodos, *sem carga* pode facilmente carregar um capacitor até a tensão de saída *de pico* absoluta do dínamo, que pode ser bastante alta. Então, no instante em que você reconectar seu LED, você pode queimá-lo. Se você deixar suas luzes conectadas e ligadas o tempo todo e usar um capacitor como standlight, e apenas remover o dínamo da roda quando quiser desligar, isso não é um problema.

Saudações --Nighto 01:37, 10 June 2011 (CST)

- O DÍNAMO FORNECIDO É DESTINADO A SER MONTADO APENAS NO GARFO DIANTEIRO. E qualquer dínamo específico só vai funcionar de um lado. Este dínamo é bastante inflexível nesse aspecto. Veja [https://en.wikipedia.org/wiki/Bottle_dynamo](https://en.wikipedia.org/wiki/Bottle_dynamo) para uma foto de um dínamo montado no garfo dianteiro de uma bicicleta, voltado para a frente.

Muitas pessoas que o compram aqui estão usando-o para outros fins que não iluminação de bicicleta, então para elas isso tudo não importa mesmo.

Não presuma que as pessoas não vão usá-lo em bicicletas, dado o fato de que é um dínamo de bicicleta, e seu preço, é uma opção competitiva para ciclistas. E é um dínamo pequeno e decente, pelo preço, mas ele tem que ser montado com segurança. Todos eles têm. Isso é apenas bom senso básico.

- Peça informações ao seu mecânico de bicicletas local sobre como fazer isso se você não tiver certeza.*

## Recursos

---
- [File:Spec.doc](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/res/Spec.doc)

## Links Externos

Links para páginas externas que fornecem mais ideias de aplicação, documentos/folhas de dados ou bibliotecas de software.

[How to connect dynamo wires](http://www.yellowjersey.org/dami.html)(acredite ou não, algumas pessoas precisam saber)

[http://pilom.com/BicycleElectronics/DynamoCircuits.htm](http://pilom.com/BicycleElectronics/DynamoCircuits.htm)

[http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle](http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle)

## Suporte Técnico & Discussão do Produto

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
