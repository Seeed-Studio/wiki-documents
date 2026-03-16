---
title: Multímetro Bluetooth
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Bluetooth_Multimeter/
slug: /Bluetooth_Multimeter
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Bluetooth_Multimeter/
---


O Multímetro Bluetooth é um periférico inteligente para celulares Android, especialmente projetado para engenheiros. Ele não só pode coletar facilmente dados como tensão, corrente e resistência etc., como também pode se comunicar com celulares via bluetooth. Assim, os dados coletados serão exibidos em seus celulares. A otimização contínua de hardware e software garante a precisão de medição deste multímetro.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bluetooth_Multimeter.jpg)

Tanto o hardware quanto o software são open source! Além disso, também fornecemos API bem como instruções detalhadas, tornando este Multímetro Bluetooth uma plataforma aberta para que desenvolvedores usem e re­desenvolvam de forma mais conveniente. Ele pode coletar dados de vários sensores, como batimentos cardíacos, e então transmiti‑los a smartphones para monitoramento de dados. A combinação perfeita de hardware e software fornece possibilidades infinitas para sua aplicação e exploração.

Este Multímetro Bluetooth possui bateria de lítio incorporada e circuito de recarga. O rigoroso controle de consumo de energia no software garante a fácil aplicação deste produto. A carcaça de acrílico facilita a montagem por um lado, e torna o produto estável e confiável por outro.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html)

##   Especificações
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Item</th>
<th scope="col">Mín</th>
<th scope="col">Típico</th>
<th scope="col">Máx</th>
<th scope="col">Unidade</th>
</tr>
<tr>
<th scope="row">Faixa de Medição de Tensão</th>
<td>-30</td>
<td>-</td>
<td>30</td>
<td>VCC</td>
</tr>
<tr>
<th scope="row">Precisão de Medição de Tensão</th>
<td colspan="3">3</td>
<td>%</td>
</tr>
<tr>
<th scope="row">Faixa de Medição de Corrente (Máx)</th>
<td colspan="3">1</td>
<td>A</td>
</tr>
<tr>
<th scope="row">Precisão de Medição de Corrente</th>
<td colspan="3">3</td>
<td>%</td>
</tr>
<tr>
<th scope="row">Faixa de Medição de Resistência</th>
<td>10</td>
<td>-</td>
<td>1,000,000</td>
<td>Ω</td>
</tr>
<tr>
<th scope="row">Precisão de Medição de Tensão</th>
<td colspan="3">5</td>
<td>%</td>
</tr>
<tr>
<th scope="row">Temperatura de Trabalho</th>
<td>0</td>
<td>-</td>
<td>45</td>
<td>℃</td>
</tr>
</table>

##  Visão Geral do Produto
---
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/产品视图.png)

*   ①: Interface USB. Não só pode fornecer energia, como também carregar a bateria interna. Selecionamos uma bateria de lítio com capacidade de 500mAh, espera‑se que possa ser utilizada por 10h.
*   ②: Conector de programação para Bluetooth Serial.
*   ③: Interruptor de alimentação do Multímetro Bluetooth.
*   ④: Indicador de pareamento.
<dl><dd>O indicador vermelho e o indicador azul vão piscar alternadamente --- durante o pareamento</dd><dd>O indicador azul vai piscar --- pareado</dd></dl>


*   ⑤: Indicador de carga.
<dl><dd>Luz indicadora vermelha - em carregamento</dd><dd>Luz indicadora verde - carga completa.</dd></dl>

*   ⑥: Indicador de transferência de dados. Ao transferir dados, ele piscará.
*   ⑦: Conector de áudio para medir resistência.
*   ⑧: Conector de áudio para medir tensão.
*   ⑨: Conector de áudio para medir corrente.
*   ⑩: Chave seletora de faixa de corrente.

##   Diagrama de Funcionamento
---
O Multímetro Bluetooth e o dispositivo Android trabalham conforme o esquema mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Multimater_Work_Principle_1.jpg)

##   Demonstração
---
Este Multímetro Bluetooth é um multímetro portátil, um dispositivo que coleta tensão, resistência e corrente. E ele pode enviar esses dados para outros dispositivos via Bluetooth, para que possamos observar os dados por meio de outros dispositivos. A seguir demonstraremos como usá‑lo.

**Parear o celular e o Multímetro Bluetooth  **

*   1) Baixe [o pacote do programa de aplicativo: SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip) e instale‑o.

*   2) Em seguida, clique no ícone do aplicativo SmartMeter para executá‑lo; neste momento aparecerá uma solicitação de permissão de Bluetooth quando você não tiver ligado o bluetooth do celular. Clique em "YES" para ligar o bluetooth.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_request.JPG)

*   3) Após entrar na interface de UI, ligue o interruptor vermelho do aplicativo, será exibido 0,0 na tela.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Switch.jpg)

*   4) Clique no ícone de Bluetooth para selecionar o dispositivo.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_device.jpg)

*   5) Selecione o dispositivo BT MULTIMETER para parear com seu celular. Quando o dispositivo BT MULTIMETER não existir, você precisa clicar em "Scan for device" para procurá‑lo.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bt_list_device.JPG)

Nota: Quando não houver dispositivo BT MULTIMETER para selecionar nem a opção ”Scan for device” para procurar, você pode primeiro usar o celular para parear com o Multímetro Bluetooth e executar o app após o pareamento.

*   6) Insira "0000"(padrão para o multímetro bluetooth) ou "1234" para o pareamento bluetooth. E é melhor observar o indicador de pareamento, o que ajuda a julgar se o pareamento foi bem‑sucedido.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Pair.JPG)

*   7) Parabéns por concluir o pareamento.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_Interface.jpg)

**Medir  **

Como outros multímetros, o multímetro bluetooth tem várias observações de uso, por exemplo: não medir resistência quando você estiver alimentando o circuito. Portanto, recomendamos fortemente que você leia as observações dos multímetros para evitar que o dispositivo não possa ser usado normalmente.

**Medir Resistência**
 Agora vamos medir resistência. Quando o App Android e o Multímetro estiverem conectados, escolha resistência (isto é, mova o cursor para Ω), conecte a linha de áudio ao conector (marcado R) do Multímetro Bluetooth.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Om.JPG)

**Medir Tensão**
 É muito simples medir a tensão. Basta mover o cursor do App Android para V e mover a linha de áudio para o conector VOL, então você poderá ver o valor da tensão.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/V.JPG)

 O método de medição de corrente é o mesmo que o de outros multímetros. É necessário lembrar‑lhe que selecione a faixa de corrente correta.

<font color="blue">Nota: É necessário verificar se a linha de áudio está conectada ao conector correspondente e se o cursor está no lugar correto para obter dados precisos.</font>

##   Referência
---
###   A Interface de UI

Temos três interfaces de UI de App Android para o Multímetro Bluetooth.

|UI 1.jpg|UI 2.jpg|UI 3.jpg|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_1.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_2.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_3.jpg)|

Chegamos a um consenso de que a cor das duas versões anteriores não é brilhante; ela deveria usar os dois esquemas de cores universais de multímetro, laranja e preto ou vermelho e preto. Ao mesmo tempo, aumentamos o botão Hold, o botão Range, o seletor (cinco posições mA, A, Ω, V, OFF (opcional)) na versão amarela. E publicamos uma enquete sobre qual versão você prefere. Abaixo estão as informações de feedback:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Red_Version.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/GreenSumsung.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Yellow.jpg)

###   A Estrutura e Aparência

**Desenho de Efeito**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_effect.jpg)

**Imagem Impressa**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Printed_Picture.jpg)


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos
---
- [Arquivo Eagle do Multímetro Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip)
- [Arquivo: Biblioteca do Multímetro Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMultimeter_Library.zip)
- [O pacote do programa de aplicativo: SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip)

## Suporte Técnico e Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>