---
description: Esta página é a página de navegação para o painel epaper XIAO 7,5".
title: Introdução ao painel ePaper XIAO 7,5"
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /xiao_075inch_epaper_panel
sku: 114993635
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel/
---

# Introdução ao painel ePaper XIAO 7,5"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

## Introdução

Alimentado pelo XIAO ESP32-C3, este display ePaper de 7,5 polegadas é uma tela E Ink® inteligente versátil e energeticamente eficiente, que oferece suporte a uma ampla gama de aplicações populares da comunidade, incluindo [Home Assistant](https://www.home-assistant.io/), [TRMNL](https://trmnl.app/), Arduino e muito mais. Esta solução de display flexível é perfeita para exibir dados de dashboards, atualizações de clima, agendas e informações personalizadas. Com visuais nítidos, excepcional duração de bateria de 3 meses (2000mAh) em modo de sono profundo e amplas possibilidades de personalização, este dispositivo compacto se adapta a diversos casos de uso. Perfeito para ambientes residenciais modernos e projetos, ele combina funcionalidade com design elegante para uma experiência visual aprimorada em múltiplas plataformas.

### Recursos

- Integração nativa com Home Assistant
- Display E Ink® de 7,5" para automação residencial
- Design energeticamente eficiente com baixo consumo de energia
- Suporte a desenvolvimento com Arduino
- Fator de forma elegante

### Especificações

<div class="table-center">
 <table align="center">
  <tr>
   <th>Item</th>
   <th>Descrição</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td><a href="https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/">XIAO ESP32-C3</a></td>
  </tr>
  <tr>
   <td>Display</td>
   <td>Display ePaper monocromático de 7,5"</td>
  </tr>
  <tr>
   <td>Resolução</td>
   <td>800 x 480</td>
  </tr>
  <tr>
   <td>Bateria</td>
   <td>2000mAh</td>
  </tr>
  <tr>
   <td>Dimensão</td>
   <td>178 x 131 x 19 mm</td>
  </tr>
  <tr>
   <td>Peso</td>
   <td>218g</td>
  </tr>
  <tr>
   <td>Temperatura de operação</td>
   <td>-25°C a 50°C</td>
  </tr>
  <tr>
   <td>Fonte de alimentação</td>
   <td>USB Type-C 5V</td>
  </tr>
        <tr>
            <td>Gabinete</td>
            <td>Impressão 3D (PLA)</td>
        </tr>
 </table>
</div>

## Visão geral do hardware

O painel ePaper XIAO 7,5" é composto por vários componentes principais, conforme mostrado na vista explodida:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **Display ePaper monocromático de 7,5"**: display com resolução de 800 × 480 que mantém a imagem sem consumo de energia após a atualização
- **Placa controladora do ePaper**: controla o display e gerencia a comunicação com o microcontrolador
- **XIAO ESP32-C3**: microcontrolador principal que executa o firmware e gerencia a conectividade
- **Bateria de 2000 mAh**: fornece energia para operação prolongada, especialmente durante os modos de sono
- **Porta USB Type-C**: para alimentação e programação
- **Gabinete**: caixa impressa em 3D em PLA que abriga todos os componentes

O dispositivo utiliza um design interno em camadas que posiciona o display ePaper na frente, com a placa controladora, a bateria e o XIAO ESP32-C3 empilhados atrás dele dentro do gabinete.

## Primeiros passos

Para começar a usar o seu painel ePaper XIAO 7,5":

1. **Abra o suporte**: Levante suavemente a tela usando o recorte na parte inferior para revelar o suporte embutido. Coloque o dispositivo sobre uma superfície plana com o suporte estendido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **Ligue o dispositivo**: Com o display voltado para você, localize a chave de alimentação no canto inferior esquerdo. Deslize-a para a posição "ON" (o rótulo ON fica oculto atrás do suporte, no seu lado direito quando estiver de frente para o display).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **Inicialização**: Após ligar, o dispositivo começará automaticamente a exibir uma sequência de três páginas de introdução para demonstrar sua funcionalidade.

Depois de concluir estas etapas, o seu painel ePaper estará pronto para configuração e uso com a sua plataforma de programação preferida.

### Botões de programação

O painel ePaper XIAO 7,5" inclui dois botões essenciais localizados atrás do suporte que ajudam na programação e na solução de problemas:

- **Botão Boot**: Usado quando o dispositivo não tem conexão serial ou está em modo de sono e não é possível fazer upload de programas. Para entrar no modo Bootloader:
  1. Conecte o cabo USB
  2. Pressione e segure o botão Boot
  3. Pressione o botão Reset uma vez enquanto mantém o Boot pressionado
  4. Solte o Reset e depois solte o Boot
  5. Desconecte e reconecte o cabo de alimentação

- **Botão Reset**: Usado para reiniciar o programa. Basta pressionar uma vez para reiniciar.

Esses botões são fundamentais para a programação do dispositivo, atualizações de firmware e recuperação quando o dispositivo se torna não responsivo.

## Centro Wiki

As seguintes páginas da Wiki fornecem informações detalhadas sobre diferentes maneiras de programar e usar o seu painel ePaper XIAO 7,5":

- [**Funciona com ESPHome no Home Assistant**](https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_esphome) - Configure e controle o seu painel ePaper por meio da integração ESPHome, ideal para usuários do Home Assistant criarem dashboards personalizados.

- [**Funciona com Arduino**](https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_arduino/) - Programe seu dispositivo usando a IDE Arduino com nossa biblioteca e exemplos para aplicações personalizadas.

- [**Funciona com TRMNL**](https://wiki.seeedstudio.com/pt-br/xiao_7_5_inch_epaper_panel_with_trmnl) - Controle seu display com o trmnl, uma plataforma open-source para gerenciamento inteligente de dashboards visuais.

## Recursos

- **[STP]**: [Modelo 3D do gabinete](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF do esquema da placa controladora do ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - Suporte de parede para painel ePaper XIAO 7,5"](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
