---
description: Este artigo mostrará como criar um Equip Graphic
title: reComputer R1000 com FIN para criar um Equip Graphic
keywords:
  - Controlador de Borda
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Gráfico
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_equip_gaphic
last_update:
  date: 07/22/2024
  author: ShuishengPeng
createdAt: '2024-07-22'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_equip_gaphic/
---

## Introdução

FIN Framework (FIN) é uma estrutura de software com suítes de aplicativos que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma variedade de produtos e serviços.

Este artigo mostrará como usar o `Graphics Builder` do FIN Framwork, e criar um `Equip Graphic` usando o `Graphics Builder`.

## Início Rápido

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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

## Etapas para criar um Equip Graphic

### Criar novo Equip Graphic

**Passo 1**: Coloque o contexto no caminho `Tower => Floor1 => ModbusEquip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_path.png" /></center>

**Passo 2**: Crie um novo `Equip Graphic`. Clique em `Graphic Builder => new`, e de acordo com o contexto do sistema, uma janela pop-up chamada `Create a Graphic` aparecerá:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_new_gtaphic.png" /></center>

A janela pop-up possui principalmente os seguintes atributos:

- **Graphic Name:** Permite que você digite um nome para o gráfico.
- **Graphic Template:** Permite que você selecione um modelo inicial de uma lista de "modelos de duto" pré-construídos disponíveis. Este não é um parâmetro obrigatório, apenas lhe dá um ponto de partida de tubulação. (Você também pode criar seus próprios modelos para serem usados aqui).
- **Graphic On Filter:** O filtro Graphic On se refere às tags `graphicOn` do gráfico, que determinam em quais registros de banco de dados esse gráfico será executado. Por padrão, esse filtro será preenchido automaticamente com base no equipamento de contexto. (No nosso exemplo, criei o gráfico enquanto estava em um VAV, por isso esse filtro na captura de tela está preenchido com as tags desse VAV). Este filtro pode ser alterado posteriormente, se necessário.
- **Relative - By Tags:** Esta opção faz com que os pontos venham automaticamente como Relativos, com base em suas tags atuais. Quando os pontos são relativos, eles não são "codificados" para um conjunto de dados de um único equipamento. Eles são relativos e serão carregados em qualquer equipamento que tenha pontos semelhantes com base nas tags dos pontos.
- **Relative - By navName:** Esta opção faz com que os pontos venham automaticamente como Relativos, com base em seu navName atual. Quando os pontos são relativos, eles não são "codificados" para um conjunto de dados de um único equipamento. Eles são relativos e serão carregados em qualquer equipamento que tenha pontos semelhantes com base no navName dos pontos.
- **Absolute - by Point Ids:** Esta opção faz com que os pontos venham automaticamente como Absolutos (ou `hardcoded`) para o equipamento atual em que você está. Quando um ponto é trazido como "Absolute by Point id" o caminho é automaticamente codificado para obter dados exatamente daquele ponto, não importa onde o gráfico seja carregado.
- **Points:** Isso permite que você selecione quais pontos deseja trazer para o gráfico. Usando as teclas *CTRL* e/ou *SHIFT*, você pode selecionar vários pontos. Os pontos são preenchidos com base no seu equipamento de contexto. Você também obtém pontos associados às referências desse equipamento. (No nosso exemplo, o VAV tem um ahuRef, então podemos selecionar pontos do ahuRef para mostrar em nosso gráfico)
- **Add Components For:** Esta lista é preenchida pelos pontos que você seleciona na seção "Points" anterior. Ao destacar pontos nesta seção, você está dizendo ao FIN para criar automaticamente um componente gráfico (com base em suas tags) e vincular o ponto ao componente gráfico. Isso não é obrigatório, mas pode economizar tempo, pois seleciona o componente, o insere, vincula o ponto a ele e exibe um Display Label para ele.

Após a conclusão da configuração, clique no botão `OK`. Um novo gráfico aparecerá no lado direito. Clique em `EquipGraphic => Edit` para entrar na interface de edição.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_1.gif" /></center>

### Configurar novo Equip Graphic

**Passo 1**: Após entrar na interface de edição, o sistema irá gerar automaticamente smart labels e componentes com base no conteúdo selecionado na propriedade `Add Components for`. Mova o controle e clique em `Magic Button => Smart Label to GraphicObjects` para que o smart label se alinhe automaticamente com o controle.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_2.gif" /></center>

**Passo 2**: Verifique `Virtual point`. Você pode clicar no controle por e-mail e selecionar `Edit Properties`. Você pode ver `virtual point` na nova janela pop-up, e pode modificá-lo aqui; você também pode visualizar o `virtual point` correspondente ao controle através de `ADVANCED` no canto inferior esquerdo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_3.gif" /></center>

**Passo 3**: Adicione novo componente e conecte `virtual point`. Além do componente gerado automaticamente para nós pelo sistema, também podemos adicioná-los nós mesmos. Há muitos componentes na caixa `COMPONENTS` à esquerda. Arraste o controle com o botão esquerdo do mouse para o controle de trabalho, depois selecione o `virtual point` correspondente na coluna `VIRTUAL POINTS` e arraste-o para o novo controle doméstico. Desta forma é concluída a vinculação do novo controle ao virtual point.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_4.gif" /></center>

**Passo 4**: Adicione `Overview Box`. Podemos adicionar uma `Overview Box` para exibir todos os valores juntos. Clique em `Overview Box => New` e uma nova janela pop-up aparecerá:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_create_overview_box.png" /></center>

- **Mini Group:** Se ativado, isso fará com que a overview box apareça com valores maiores e uma área de título menor. Esta caixa é menor do que a caixa normal e é recomendada para cenários em que a caixa precisa estar no gráfico, como VFD (Spd,Cmd,Ena,Stat)
- **Points**: Isso permitirá que você selecione quais pontos incluir na overview box.  **DICA:** Se você tiver quaisquer smart labels selecionadas antes de abrir o assistente Overview Box, esses pontos já estarão selecionados na lista de pontos do assistente.

Depois de selecionar o ponto, insira o título da janela na próxima janela e, por fim, clique em `APPLY`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_5.gif" /></center>

**Passo 5**: Mostrar resultados

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Equip_graphic_6.gif" /></center>

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
