---
description: Este artigo mostrará como criar um Site Graphic
title: reComputer R1000 com FIN para criar um Site Graphic
keywords:
  - Controlador de Borda
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Gráfico
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_site_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
createdAt: '2024-07-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_site_gaphic/
---

## Introdução 
FIN Framework (FIN) é um framework de software com suítes de aplicações que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma variedade de produtos e serviços.

Este artigo mostrará como usar o `Graphics Builder` do FIN Framwork e como criar um `Site Graphic` usando o `Graphics Builder`.

## Iniciando

Antes de iniciar este projeto, você talvez precise preparar seu hardware e software com antecedência, conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparação de Software
* Sobre como instalar o FIN Framwork, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_fin/).

## Etapas para criar um Site Graphic
### Criar novo Site Graphic
**Passo 1**: Criamos 4 Floors. Para saber como criar Floors, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_modbus_tcp_and_rtu/). Em seguida, coloque o contexto sob o `Site` correspondente. Aqui o colocamos sob o caminho `Tower`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**Passo 2**: Crie um novo Graphic e entre na interface de edição. Clique em `Graphic Builder => new`, e a janela pop-up `Create a Graphic` aparecerá. A diferença em relação à criação de `Top Level Graphic` é que a segunda propriedade aqui se torna `Select floors to include in site graphic`. Selecionamos todos os `Floor` criados e, por fim, clicamos em `OK`. Depois disso, nosso Graphic recém-criado aparecerá no lado direito. Clique em `CC Main => Edit` para entrar na interface de edição.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### Configurar novo Site Graphic

**Passo 1**: Importar imagem de fundo. Primeiro, selecione `BACGROUND` na barra de propriedades no canto inferior esquerdo, selecione `TYPE` como `IMAGE`, depois importe a imagem de fundo para a área de trabalho, ajuste o tamanho e fixe-a. Há duas maneiras de importar imagens de fundo. A primeira é arrastá-la diretamente da pasta para a caixa de edição; a segunda é clicar em `BROWSE` no canto inferior esquerdo. Se você já tiver importado uma certa imagem antes, poderá clicar aqui para encontrá-la. Após a importação, clique com o botão direito do mouse e selecione `Arrange => Send to back` para mover a imagem para a camada inferior.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**Passo 2**: Ajustar a posição dos rótulos. Como importamos 4 `Floors`, o sistema gerou automaticamente 4 rótulos para nós. Por questão de estética, mapeamos esses rótulos para os andares um a um.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**Passo 3**: Desenhar polígonos. Usamos a `polygon Tool` para desenhar polígonos a fim de marcar a posição de cada `Floor`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**Passo 4**: Adicionar `Virtual points`. Mude para o painel `Virtual points` à esquerda, selecione o `virtual point` que corresponde ao `Floor` que escolhemos e arraste-o para dentro do polígono desenhado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**Passo 5**: Tornar o polígono transparente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**Passo 6**: Após salvar as configurações, podemos entrar no novo `Site graphic` a partir de `Top Level Graphic`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
