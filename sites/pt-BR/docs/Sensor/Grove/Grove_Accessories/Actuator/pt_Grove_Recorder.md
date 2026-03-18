---
title: Grove - Recorder
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove_Recorder/
slug: /Grove_Recorder
sku: 103020018
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Recorder/
---

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Grove-Recoder.jpg)

Grove - Recorder é baseado no chip ISD1820P e pode gravar de 8 a 20 segundos de áudio. Ele oferece gravação de voz em um único chip e fornece armazenamento não volátil. O tempo de gravação pode ser alterado modificando o resistor de amostragem (R6) na placa de circuito impresso do módulo. Por padrão, o resistor integrado tem um valor de 100 KΩ e, portanto, o módulo oferece um tempo de gravação padrão de 10 segundos. A gravação de áudio pode ser controlada diretamente pelo botão de pressão integrado ou por um microcontrolador, como um Seeeduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Recorder-p-1825.html)

## Recursos

---

* Baixo consumo de energia

* Armazenamento não volátil

* Operação amigável ao usuário

* Substitua um único resistor para alterar a duração da gravação e a frequência de amostragem

* Adicione um resistor para configurar o modo de ciclo de reprodução

* Acompanha e conecta-se a um alto-falante mini de 8 Ω/2 W (como mostrado na imagem)
* Usa cabos Grove padrão de 4 pinos para se conectar a outros módulos Grove ou a um microcontrolador como o Seeeduino

## Função da Interface

---
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Bottom1.jpg)
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Top1.jpg)

<dl>
  <dt>① LED Indicator</dt>
  <dd>
    Modos:
    <dl>
      <dd>Record: A luz do LED vermelho permanece LIGADA do início da duração da gravação até o fim.</dd>
      <dd>Playback: O LED vermelho pisca para sinalizar o fim da reprodução do áudio.</dd>
    </dl>
  </dd>
</dl>
<dl><dt>② Sampling resistor</dt><dd>Você pode definir a duração da gravação e a taxa de amostragem alterando o resistor de amostragem (R6) com base na tabela a seguir:</dd></dl>
<table  cellspacing="0" width="50%">
<tr>
<th scope="col"> ROSC</th>
<th scope="col"> Duração</th>
<th scope="col"> Frequência de Amostragem</th>
<th scope="col"> Largura de Banda de Entrada</th>
</tr>
<tr>
<th scope="row"> 80 KΩ</th>
<td> 8 s</td>
<td> 8,0 KHz</td>
<td> 3,4 KHz</td>
</tr>
<tr>
<th scope="row"> 100 KΩ (padrão)</th>
<td> 10 s</td>
<td> 6,4 KHz</td>
<td> 2,6 KHz</td>
</tr>
<tr>
<th scope="row"> 120 KΩ</th>
<td> 12 s</td>
<td> 5,3 KHz</td>
<td> 2,3 KHz</td>
</tr>
<tr>
<th scope="row"> 160 KΩ</th>
<td> 16 s</td>
<td> 4,0 KHz</td>
<td> 1,7 KHz</td>
</tr>
<tr>
<th scope="row"> 200 KΩ</th>
<td> 20 s</td>
<td> 3,2 KHz</td>
<td> 1,3 KHz</td>
</tr>
</table>
<dl>
  <dt>③ Playback resistor</dt>
  <dd>
    Modos:
    <dl>
      <dd>Ciclo: R8 está com resistor de 0 Ω</dd>
      <dd>Único: R8 não tem resistor colocado</dd>
    </dl>
  </dd>
</dl>
<dl><dt>④ Tecla Play</dt><dd>Não usada atualmente</dd></dl>
<dl><dt>⑤ Tecla REC</dt><dd></dd></dl>
<dl><dt>⑥ Interface Grove</dt><dd></dd></dl>
<dl><dt>⑦ Interface do Alto-falante</dt><dd></dd></dl>
<dl><dt>⑧ REC IC：ISD1820P</dt><dd></dd></dl>

## Uso

---
Siga estas etapas para montar um circuito de exemplo usando o módulo **Grove - Recorder**:

1. Conecte o módulo gravador ao lado de saída do circuito Grove (à direita do módulo de alimentação). No lado de entrada do circuito, você pode usar um módulo [Grove - Button](/pt-br/Grove-Button "Grove - Button") ou um [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer").
2. Ligue o circuito.

3. Pressione e mantenha pressionado o botão REC no módulo gravador e comece a gravar o áudio. O LED vermelho integrado acenderá. Continue gravando o áudio até que o LED vermelho se apague. O LED se apagar indica que o tempo de gravação se esgotou.

4. Para reproduzir o trecho de áudio que foi gravado, pressione e mantenha pressionado o [Grove - Button](/pt-br/Grove-Button "Grove - Button"). Agora você deverá ouvir o trecho de áudio gravado sendo reproduzido. Continue pressionando e mantendo pressionado o [Grove - Button](/pt-br/Grove-Button "Grove - Button") até ver o LED vermelho integrado no módulo gravador piscar. O piscar indica que a reprodução do áudio foi concluída. Se, em vez de um [Grove - Button](/pt-br/Grove-Button "Grove - Button"), você estiver usando um [Grove - Slide Potentiometer](/pt-br/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"), simplesmente mova o controle deslizante da posição GND para VCC para ouvir a reprodução a qualquer momento.

5. Para substituir o áudio gravado, simplesmente repita a etapa 3 acima. A nova mensagem substituirá a antiga.

 Below is an illustration of a Grove circuit built using the Grove - USB Power module: 

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/REC_Grove-Recoder.JPG)

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Play_Grove-Recoder.JPG)

Se você não tiver o módulo Grove - USB Power, use o módulo Grove - DC Jack Power em seu lugar.

## Disponibilidade

---
Este módulo Grove está disponível como parte das seguintes Séries de Kits Grove

<!-- * [Grove Mixer Pack V2](/pt-br/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

Alternativamente, ele pode ser adquirido separadamente no Seeed Studio Bazaar.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Grove - Recorder v1.0 Schematics (Eagle files)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip)

* [Grove - Recorder v1.0 Schematics (pdf)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.pdf)

* [Datasheet ISD1820P.pdf (Chinese)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/ISD1820P.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
