---
description: Este artigo mostrará como criar um Floor Graphic
title: reComputer R1000 com FIN para criar um Floor Graphic
keywords:
  - Controlador de Borda
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Gráfico
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_floor_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
createdAt: '2024-07-18'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_floor_gaphic/
---

## Introdução

FIN Framework (FIN) é um framework de software com suítes de aplicativos que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma gama de produtos e serviços.

Este artigo mostrará como usar o `Graphics Builder` do FIN Framwork e como criar um `Floor Graphic` usando o `Graphics Builder`.

## Iniciando

Antes de iniciar este projeto, talvez seja necessário preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de Software

* Sobre como instalar o FIN Framwork, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_fin/).
- Sobre como usar a função Modbus do FIN framwork, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_modbus_tcp_and_rtu/)

## Etapas para criar um Floor Graphic

### Criar novo Floor Graphic

**Etapa 1**: Estabelecemos uma conexão Modbus TCP e uma conexão Modbus RTU, e criamos o Equip correspondente. Cada Equip tem um rótulo de `humidty` e `temperature`. Para saber como implementar esta etapa, você pode consultar este [wiki]( https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_modbus_tcp_and_rtu/). Ao mesmo tempo, coloque o contexto do FIN Framwork sob o `Floor` correspondente. Aqui colocamos o contexto em `Tower => Floor1`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**Etapa 2**: Crie um novo Floor Graphic e entre na interface de edição. Clique em `Graphic Builder => new`, e a janela pop-up `Create a Floorplan Graphic` aparecerá.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
Ele possui quatro atributos:

- Craphic Name
- Pick a Sample Equip
- Pick Default Point : Atributos que serão exibidos no gráfico
- Pick Comparison Point : Ponto de referência para a faixa de cores

Clicar em 'OK' abrirá uma nova janela pop-up que lista 'Equip' com as mesmas propriedades que 'Pick Default Point'. Aqui, selecionamos todos e, por fim, clicamos em 'OK'.
Depois disso, nosso Graphic recém-criado aparecerá no lado direito. Clique em `CCFloor1 => Edit` para entrar na interface de edição.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### Configurar novo Site Graphic

**Etapa 1**: Importar imagem de fundo. Primeiro, selecione `BACGROUND` na barra de propriedades no canto inferior esquerdo, selecione `TYPE` como `IMAGE`, depois importe a imagem de fundo para o espaço de trabalho. Selecione `Center` para a opção `POSITION` e `NO REPEAT` para a opção `REPEAT`. Existem duas maneiras de importar imagens de fundo. A primeira maneira é arrastá-la diretamente da pasta para a caixa de edição; a segunda maneira é clicar em `BROWSE` no canto inferior esquerdo. Se você já importou alguma imagem antes, pode clicar aqui para encontrar essa imagem.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**Etapa 2**: Desenhar polígonos. Usamos a `polygon Tool` para desenhar polígonos para marcar a posição de cada `Equip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**Etapa 3**: Adicionar `Virtual points`. Mude para o painel `Virtual points` à esquerda, selecione o `virtual point` que corresponde ao `Equip` que selecionamos e arraste-o para o polígono desenhado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**Etapa 4**: Adicionar tags inteligentes. Clique em `Magic Buttons => Smart Label to Polys` para posicionar automaticamente o rótulo nos `Virtual Points` correspondentes.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**Etapa 5**: Ajustar o tamanho das tags inteligentes. Você pode clicar no rótulo inteligente para ajustar seu tamanho. Se quiser modificar o tamanho de vários rótulos inteligentes ao mesmo tempo, pode clicar em `Compulsions=>Smart label=>Select` para selecionar todos os rótulos inteligentes e, em seguida, ajustar seu tamanho

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>

**Etapa 6**: Alterar a tag inteligente para `non interactive` para que a tag não interfira nas suas operações

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**Etapa 7**: Salvar e exibir o efeito.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
