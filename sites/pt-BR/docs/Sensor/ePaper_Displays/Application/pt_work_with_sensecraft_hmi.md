---
description: Use SenseCraft HMI - a plataforma de design de interface visual sem código da Seeed - para controlar qualquer produto ePaper compatível da Seeed, desde a linha reTerminal E até todas as placas controladoras ePaper XIAO.
title: Trabalhar com SenseCraft HMI
keywords:
  - display ePaper
  - SenseCraft HMI
  - reTerminal
  - EE02
  - EE03
  - EE04
  - EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com SenseCraft HMI

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) é a poderosa plataforma de design de interface baseada em nuvem da Seeed Studio que permite criar interfaces visuais profissionais para dispositivos com tela **sem escrever código**. Com um editor intuitivo de arrastar e soltar, modelos pré-construídos e recursos de design com IA, o SenseCraft HMI transforma seu hardware em um belo visor de informações, painel, sinalização digital ou painel de controle.

Este guia é a única fonte de verdade para usar o SenseCraft HMI com **qualquer produto ePaper compatível da Seeed**. Escolha seu hardware uma vez na etapa de firmware; o restante do fluxo de trabalho é idêntico para todos os dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

## Hardware compatível

SenseCraft HMI funciona imediatamente com os seguintes produtos ePaper da Seeed. A linha reTerminal E é enviada com o firmware HMI pré-instalado, enquanto a família XIAO ePaper Display Board (EE02–EE05) é gravada a partir da página SenseCraft HMI Tools no seu navegador.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Linha de produto</th>
      <th>Experiência fora da caixa</th>
      <th>Telas alvo</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>Firmware HMI pré-instalado — ligue e faça o pareamento</td>
      <td>Painéis integrados de 7,5" / 7,3" / 10,3" / 13,3"</td>
    </tr>
    <tr>
      <td><strong>EE02</strong></td>
      <td>Gravar a partir da página SenseCraft HMI Tools</td>
      <td>13,3" Spectra 6 (colorido)</td>
    </tr>
    <tr>
      <td><strong>EE03</strong></td>
      <td>Gravar a partir da página SenseCraft HMI Tools</td>
      <td>10,3" monocromático (atualização em alta velocidade)</td>
    </tr>
    <tr>
      <td><strong>EE04</strong></td>
      <td>Gravar a partir da página SenseCraft HMI Tools</td>
      <td>Universal de 24 pinos / 50 pinos — muitos tamanhos</td>
    </tr>
    <tr>
      <td><strong>EE05</strong></td>
      <td>Gravar a partir da página SenseCraft HMI Tools</td>
      <td>Universal de 24 pinos / 50 pinos (mais recente)</td>
    </tr>
  </table>
</div>

Este artigo usa a **XIAO ePaper Display Board (ESP32-S3) – EE04** emparelhada com o display **7,3" Spectra 6** como exemplo principal de hardware porque ela cobre o maior conjunto de recursos. Todas as etapas se aplicam a outros produtos, com pequenas diferenças indicadas em suas respectivas abas.

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7,3" Spectra 6 E-Ink</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### EE04 / EE05 — lista de telas suportadas

A XIAO ePaper Display Board EE04 / EE05 oferece duas opções de conector — **24 pinos** e **50 pinos** — suportando uma ampla variedade de tamanhos de tela. Escolha a que corresponde ao seu display na lista abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

<Tabs groupId="hmi-connector">
<TabItem value="24pin" label="Conector de 24 pinos" default>

- [Display ePaper de 1,54 polegada - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display ePaper de 2,13 polegadas - Flexível Monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Display ePaper de 2,13 polegadas - Quatro cores 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display ePaper de 2,9 polegadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display ePaper de 2,9 polegadas - Quatro cores 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Display ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip Ajuste o jumper para **24 Pin** antes de ligar
Usar o jumper incorreto pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.
:::

</TabItem>
<TabItem value="50pin" label="Conector de 50 pinos">

- [Display ePaper 7,3 polegadas Spectra 6 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>

:::tip Ajuste o jumper para **50 Pin** antes de ligar
Usar o jumper incorreto pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.
:::

</TabItem>
</Tabs>

## Etapa 1: Registrar uma conta SenseCraft HMI

Clique no botão no canto superior direito da página do [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) para criar uma conta.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 2: Obter o firmware HMI no seu dispositivo

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="Linha reTerminal E" default>

O reTerminal **E1001 / E1002 / E1003 / E1004** é enviado com o firmware SenseCraft HMI pré-instalado. Basta ligar o dispositivo e pular para a Etapa 3 (Configuração de rede).

Se você anteriormente gravou um firmware diferente (por exemplo TRMNL), pode voltar para o HMI a partir da página SenseCraft HMI Tools:

1. Abra a [página de dispositivo SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device) e selecione o modelo do seu reTerminal.
2. Escolha a versão mais recente do firmware **HMI** (use **Full Flash** se quiser um dispositivo limpo).
3. Conecte o dispositivo ao computador via USB-C e siga as instruções de porta serial na tela.

</TabItem>
<TabItem value="ee04" label="EE02 / EE03 / EE04 / EE05">

Após o registro, clique em **Tools** na barra de menu superior para entrar na seção de gravação de firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
A XIAO ePaper Display Board EE04 / EE05 suporta as seguintes telas ePaper imediatamente:

- [Display ePaper de 1,54 polegada - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display ePaper de 2,13 polegadas - Flexível Monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Display ePaper de 2,13 polegadas - Quatro cores 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display ePaper de 2,9 polegadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display ePaper de 2,9 polegadas - Quatro cores 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Display ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [Display ePaper 7,3 polegadas Spectra 6 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

EE02 é enviada dedicada a 13,3" Spectra 6; EE03 é enviada dedicada a 10,3" monocromático com atualização em alta velocidade.
:::

O fluxo de gravação é idêntico para todos os tamanhos de tela — escolha a versão correta de firmware para o seu painel. O exemplo abaixo usa o **Display colorido completo de 7,3" (800×480)**.

**Etapa 1.** Selecione a entrada **7,3" Full-Color Display 800×480** na página Tools.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**Passo 2.** Selecione o firmware mais recente (por exemplo, `EE04_7_3_color_1.0.5`).

:::tip
A plataforma SenseCraft HMI é atualizada regularmente. Sempre escolha a versão mais recente do firmware para obter a melhor compatibilidade e desempenho.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Clique em **Flash** para enviar o firmware.

Após clicar em Flash, a plataforma exibirá uma janela de seleção de porta. Escolha a porta correspondente ao seu dispositivo.

- **Full Flash**: apaga todas as informações armazenadas, incluindo redes Wi-Fi e dados de painéis do usuário.

:::tip
Se nenhuma porta aparecer, basta pressionar o botão **RESET** na placa para atualizar a conexão.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**Passo 4.** Verifique a saída do display.

Após o flash, o display ePaper piscará brevemente e mostrará a tela com código QR abaixo. Os dois códigos QR levam, respectivamente, ao Guia do Usuário e à página de Configuração de Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

A configuração ainda não está completa. Continue para o **Passo 3: Configuração de Rede** abaixo.

</TabItem>
</Tabs>

## Passo 3: Configuração de Rede

O fluxo de pareamento Wi-Fi é o mesmo para todos os produtos ePaper da Seeed que executam firmware HMI.

**Passo 1.** Conecte seu telefone ou computador ao ponto de acesso Wi-Fi do dispositivo. O nome do AP é mostrado na tela do dispositivo (não é necessária senha).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

**Passo 2.** Depois de conectado, escaneie o código QR na tela do ePaper — seu telefone deve ser redirecionado automaticamente para a página de configuração de Wi-Fi. Caso isso não aconteça, abra um navegador e acesse `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**Passo 3.** Selecione sua rede Wi-Fi local e insira a senha, depois clique em **Connect**.

:::tip
A família XIAO ESP32-S3 suporta apenas redes Wi-Fi de **2,4 GHz**. Redes de 5 GHz não são suportadas.
:::

**Passo 4.** Após a conclusão da conexão, a tela exibirá um código de pareamento:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## Passo 4: Adicionar o Dispositivo ao SenseCraft HMI

**Passo 1.** Vá até a seção **Workspace** e clique em **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

**Passo 2.** Dê um nome ao seu dispositivo, insira o código de pareamento exibido na tela do dispositivo e clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

**Passo 3.** Após o pareamento, seu dispositivo aparecerá no Workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

Agora você pode começar a criar dashboards no SenseCraft HMI.

## Criando Dashboards

A plataforma SenseCraft HMI oferece ferramentas poderosas para projetar e personalizar conteúdo. Os cinco blocos de construção principais são descritos abaixo; para uma referência completa, consulte a [documentação do SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/).

:::note
As demonstrações a seguir usam uma tela de 7,3". Ao usar um tamanho diferente, lembre-se de:

- Confirmar a orientação do cabo flex da tela (frente e verso).
- Verificar se o número de pinos corresponde ao conector do seu dispositivo.
- Usar a tampa correspondente ao tamanho da tela.
- Evitar dobrar ou flexionar excessivamente ao instalar o cabo flex.
:::

### Gerador de IA

Deixe a IA projetar seu dashboard. Descreva quais informações você quer exibir e o Gerador de IA criará automaticamente um layout atraente e funcional — perfeito para exibir clima, calendários, listas de tarefas ou painéis informativos sem trabalho manual de design.

[Saiba mais sobre o Gerador de IA →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>

**Resultado no display ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3"</em></p>
</div>

### Galeria

Transforme seu display ePaper em uma moldura digital de fotos. Envie suas imagens favoritas e a plataforma as otimiza para ePaper. Crie apresentações de slides com tempos de transição personalizados.

[Saiba mais sobre Galeria →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>

**Resultado no display ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3"</em></p>
</div>

### Canvas

Crie seu dashboard do zero com o Canvas — uma interface de arrastar e soltar que oferece:

- Blocos de texto com fontes e tamanhos personalizáveis
- Espaços reservados para imagens
- Widgets para hora, data e clima
- Ferramentas de visualização de dados
- Formas e divisores para organização do layout

[Saiba mais sobre Canvas →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>

**Resultado no display ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3"</em></p>
</div>

### Integração de Feed RSS

Mantenha-se atualizado com suas fontes de notícias ou sites favoritos adicionando feeds RSS ao seu dashboard. Exiba manchetes, resumos ou artigos completos de várias fontes.

Duas fontes recomendadas:

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

[Saiba mais sobre Integração de Feed RSS →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>

**Resultado no display ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3"</em></p>
</div>

### Exibição de Conteúdo Web

Incorpore qualquer URL da web diretamente no seu dashboard ePaper. Perfeito para mostrar de forma transparente ferramentas e páginas que ainda não possuem um plugin HMI nativo.

[Saiba mais sobre Exibição de Conteúdo Web →](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

**Resultado no display ePaper:**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3"</em></p>
</div>

## Referência e Recursos

- [Getting Started with SenseCraft HMI (official docs)](https://sensecraft-hmi-docs.seeed.cc/en/) — aprofunde seu entendimento sobre como usar o SenseCraft HMI para maximizar seus recursos e aprimorar seus projetos.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
