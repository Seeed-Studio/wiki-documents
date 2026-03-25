---
description: Design de PCB para XIAO
title: Design de PCB para XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /PCB_Design_XIAO
last_update:
  date: 11/07/2023
  author: Matthew
createdAt: '2023-11-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/PCB_Design_XIAO/
---

# Criando componentes XIAO no Flux.ai

Flux é uma ferramenta de design de PCB baseada em navegador que permite uma colaboração perfeita entre equipes de eletrônica. A interface intuitiva da ferramenta permite que os usuários criem esquemáticos e layouts de forma rápida e fácil, enquanto seus recursos de simulação integrados ajudam a garantir que os projetos sejam precisos e livres de erros.

Nesta seção, vamos abordar a criação de componentes da série Seeed Studio XIAO no Flux.ai.

## Design de PCB da Série Seeed Studio XIAO no navegador

### Seeed Studio XIAO SAMD21

<div class="video-container">
<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1">
</iframe>
</div>

### Seeed Studio XIAO RP2040

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO nRF52840

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO nRF52840 Sense

<div class="video-container">
<iframe height={450} width={800} allowFullScreen src="https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1">
</iframe>
</div>

### Seeed Studio XIAO ESP32C3

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1" />
</div>

### Seeed Studio XIAO ESP32S3

<div class="video-container">
<iframe height="450" width="800" allowFullScreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3?editor=schematic&embed=1" />
</div>

### Seeed Studio XIAO ESP32S3 Sense

<div class="video-container">
<iframe height="450" width="800" allowfullscreen src="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1" />
</div>

## Conhecimento sobre o Flux.ai - Criando peças

As peças no Flux são compostas de 5 componentes principais. Todos esses componentes são opcionais, mas uma peça que estiver faltando um componente não oferecerá todas as suas capacidades:

| Conceito | Descrição |
| --- | --- |
| Esquemático | A visão "interna" de uma peça, representada apenas por terminais. |
| Símbolo | A representação de uma peça quando ela é arrastada para outro projeto, geralmente familiar aos usuários de outras ferramentas. |
| Footprint | Representa como a peça física ficará posicionada na placa. |
| Modelo 3D | Mostra o formato 3D e as dimensões da peça. |
| Modelo de simulação | Descreve como a peça deve se comportar durante a simulação. |

## Primeiros passos

### Etapa 1 - Criando um novo esquemático de peça

A primeira etapa é criar um novo projeto em branco; você pode fazer isso no menu principal do Flux, no canto superior direito. Os terminais são a base de cada peça criada no Flux. Eles permitem que a peça interaja com o restante do circuito. Para adicionar terminais a uma nova peça, vá para a biblioteca, procure por "Terminal" e arraste tantos quantos você precisar.

Neste exemplo, vamos adicionar o Seeed Studio XIAO ESP32S3, então eu apenas adicionei 14 pinos de terminal e atribuí nomes e números.

Você pode fornecer mais informações sobre suas peças nas propriedades da peça, como o número de peça do fabricante (MPN), nome do fabricante, URL do datasheet, etc. Inserir o MPN do componente ajudará você a encontrar a disponibilidade de estoque atual e o preço dos componentes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png" /></div>

### Etapa 2 - Criando um símbolo

O Flux funciona de forma um pouco diferente de outras ferramentas às quais você possa estar acostumado. No Flux, as peças têm duas visões diferentes: o esquemático e o símbolo. A visão de esquemático da etapa 1 contém apenas os terminais. Os símbolos são visíveis apenas quando uma peça é colocada em um projeto. Agora vamos criar um símbolo para o nosso XIAO, mas para isso precisamos usar alguma ferramenta externa como Illustrator ou Inkscape. O símbolo desenhado precisa estar no formato .svg

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png" /></div>

Coisas a serem consideradas ao projetar o símbolo,

- cada forma e linha deve ser branca, com largura de traço de 1px e sem preenchimento.,
- Os pinos geralmente têm entre 10 e 18 pixels de comprimento.
Agora exporte o símbolo como um arquivo SVG.

### Etapa 3 - Adicionar o SVG como um ativo

Depois que você tiver o arquivo SVG, adicione-o como um ativo. Para adicionar um arquivo externo como um ativo, certifique-se de que nenhum objeto foi selecionado (clique na tela vazia). No painel da direita, role para baixo até encontrar o painel de ativos. Abra-o e clique em "Add" (ou "Manage"). Isso abrirá a janela de ativos. Em seguida, clique em "Add item" e selecione o arquivo na sua unidade local.
**Combine a posição dos pinos com o símbolo personalizado.**
Por padrão, todos os terminais estarão localizados no centro do símbolo. Para posicionar os terminais no local desejado, há mais algumas etapas.

1. Publique a peça na biblioteca.
2. Crie um novo projeto em branco e arraste a peça que você está importando.
3. Você notará que ambos os terminais estão no centro do símbolo. Agora volte para a peça importada.
4. Você precisará fazer esse processo para cada terminal da sua peça.
a) Selecione o terminal e encontre o menu "Properties" no painel do lado direito.
b) No campo "Symbol Pin Position", digite as coordenadas x e y desejadas para o terminal ficar no símbolo.
c) Publique a peça e volte para o novo projeto. Você verá uma legenda "Update available for your parts" no canto inferior esquerdo. Clique em "Review" e aceite as alterações.
d) Você notará que os terminais foram movidos. Talvez seja necessário repetir esse processo algumas vezes para acertar a posição perfeita.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png" /></div>

### Etapa 4 - Criando um footprint

Footprints são muito simples de criar no Flux. Eles consistem em pads, linhas, formas e nós de texto que podem ser adicionados diretamente no editor de PCB do Flux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png" /></div>

Quando você cria um footprint pela primeira vez no Flux, todos os pads estarão em um só lugar, o que aparecerá como pequenos pontos.
 Para alterar a posição do pad
 Selecione o pad a ser movido; no painel da direita, em regras específicas do objeto, encontre a regra de posição,
 Insira as posições x e y desejadas em milímetros.

### Etapa 5 - Modificando o tamanho e o formato do pad

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png" /></div>

Clicando em um dos pads, você pode alterar seu formato, posição, diâmetro do furo e outras propriedades. Para o XIAO, eu usei um pad de tamanho 3mm*2mm e furo de 1,1mm. Coloquei cada pino a 2,54mm de distância, utilizando as posições x e y em milímetros.
**Adicionando modelo 3D**

Agora precisamos adicionar um modelo 3D do XIAO; o Flux oferece suporte a arquivos .step para modelos 3D, você pode baixá-lo na página oficial da wiki.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png" /></div>

Você pode enviar o modelo 3D a partir da seção de ativos. Mais detalhes sobre como adicionar o modelo 3D estão disponíveis no vídeo.
Você pode alterar a posição x, y, z e a rotação a partir da regra específica do objeto. Usando isso, você pode posicionar o modelo 3D sobre os pads de solda.
**Publicando na biblioteca**
Depois de criar um componente, é hora de publicá-lo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png" /></div>

Selecione o logotipo do Flux no canto superior esquerdo e então selecione publish changes.
Agora nossos componentes estarão disponíveis no nosso perfil e também aparecerão na pesquisa da biblioteca pública

## O que mais - Vídeo do tutorial

<iframe width={560} height={315} src="https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

## ✨ Projeto de Colaborador

- Este projeto é apoiado pelo [Projeto de Colaboradores da Seeed Studio](https://github.com/orgs/Seeed-Studio/projects/6).
- Agradecemos aos esforços do [Gokul](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283), e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
