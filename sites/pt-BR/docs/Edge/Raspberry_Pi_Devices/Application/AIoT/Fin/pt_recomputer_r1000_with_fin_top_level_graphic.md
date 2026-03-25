---
description: Este artigo mostrará como criar um Gráfico de Nível Superior
title: reComputer R1000 com FIN para criar um Gráfico de Nível Superior
keywords:
  - Controlador de Borda
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Gráfico
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_top_level_gaphic
last_update:
  date: 07/17/2024
  author: ShuishengPeng
createdAt: '2024-07-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_top_level_gaphic/
---

## Introdução

FIN Framework (FIN) é um framework de software com suítes de aplicativos que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma variedade de produtos e serviços.

Este artigo mostrará como usar o `Graphics Builder` do FIN Framwork e como criar um `Top Level Graphic` usando o `Graphics Builder`.

## Primeiros Passos

Antes de começar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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

## Etapas para criar um Gráfico de Nível Superior

### Criar novo Gráfico de Nível Superior

**Passo 1**: Criamos três sites. Para saber como criar sites em Equip Tree, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_modbus_tcp_and_rtu/#add-data-points-to-equip-tree). E mantenha o contexto do sistema no diretório inicial.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_grap_Equip_tree_and_top_path.png" /></center>

**Passo 2**: Clique em `Graphics Builder => New`, e uma janela pop-up chamada `Create a Graphic` aparecerá. Você precisa preencher as propriedades `Graphic Name` e `Select sites to include in Top Level graphic`, entre as quais o `site` opcional é o `site` que criamos no primeiro passo. Por fim, clique em `OK` e o nosso Graphic recém-criado aparecerá no lado direito. Clique nele e depois clique em `Edit` para entrar na página de edição.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_1.gif" /></center>

### Configurar novo Gráfico de Nível Superior

**Passo 1**: Importe a planta baixa. Primeiro selecione `IMAGE` na coluna `TYPE` no canto inferior esquerdo e então você poderá importar a imagem de fundo. Existem duas maneiras de importar imagens de fundo. A primeira maneira é arrastá-la diretamente da pasta para a caixa de edição; a segunda maneira é clicar em `BROWSE` no canto inferior esquerdo. Se você já tiver importado uma determinada imagem antes, poderá clicar aqui para encontrar essa imagem. Depois de importar, clique com o botão direito do mouse e selecione `Arrange => Send to back` para mover a imagem para a camada inferior.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_2.gif" /></center>

**Passo 2**: Como selecionamos três `site`, o sistema irá gerar automaticamente três rótulos. Por questão de estética, vamos colocá-los no canto inferior direito e alinhá-los.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_3.gif" /></center>

**Passo 3**: Podemos adicionar um `label` para explicar algumas informações. Encontramos o controle `label` à esquerda e o arrastamos para a área de trabalho, ajustamos seu tamanho e, em seguida, alteramos o texto e o tamanho do texto do `label` no canto inferior direito.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_4.gif" /></center>

**Passo 4**: Adicione `Graphic include` para agrupar nossas tags e definir uma cor de fundo para tornar o efeito visual mais bonito

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_5.gif" /></center>

**Passo 5**: Desenhe o polígono. Use a `polygon Tool` na parte superior para desenhar um polígono para marcar a localização do nosso `site`. Após desenhar, você também pode usar a ferramenta `Edit polygon Tool` para ajustar o polígono.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_6.gif" /></center>

**Passo 6**: Adicione `Virtual points`. Mude para o painel `Virtual points` à esquerda, selecione o `virtual point` que corresponde ao `site` que selecionamos e arraste-o para dentro do polígono desenhado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_7.gif" /></center>

**Passo 7**: Deixe o polígono transparente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_8.gif" /></center>

**Passo 8**: Após salvar as configurações, clique em `Graphics Builder => Menu` e uma nova interface aparecerá à direita. Clique em `Top Level Graphic => Create` na nova interface e uma janela pop-up chamada `Edit Top Level Record` aparecerá, selecione o Graphic que configuramos e, por fim, clique em `APPLY`. Depois de retornar à interface principal, você poderá ver o Top Level Graphic que configuramos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" /></center>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
