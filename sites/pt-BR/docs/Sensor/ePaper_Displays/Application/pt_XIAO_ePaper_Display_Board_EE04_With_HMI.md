---
description: Habilite o design de interface visual para o XIAO EE04 ePaper Display usando a plataforma SenseCraft HMI.
title: Placa de Display XIAO ePaper EE04 com o SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 2
last_update:
  date: 10/30/2025
  author: Jason
createdAt: '2025-10-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/EE04_with_hmi/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Placa de Display XIAO ePaper EE04 com o SenseCraft HMI

## Introdução

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) é a poderosa plataforma de design de interface baseada em nuvem da Seeed Studio que permite criar interfaces visuais profissionais para dispositivos com tela sem necessidade de programação. Com um editor intuitivo de arrastar‑e‑soltar, modelos pré‑construídos e recursos de design com IA, o SenseCraft HMI facilita transformar seu hardware em belos painéis de informação, dashboards, sinalização digital e painéis de controle.

Com o lançamento da ***XIAO ePaper Display Board(ESP32-S3) - EE04***, esse recurso vai ainda mais longe. Com base na potência do SenseCraft HMI, a XIAO ePaper Display Board(ESP32-S3) - EE04 se integra perfeitamente à plataforma, permitindo que os usuários projetem e implementem interfaces visuais personalizadas com facilidade. Com essa integração, você pode criar dashboards elegantes e de baixo consumo em ePaper, painéis de informação ou displays para casa inteligente diretamente no editor SenseCraft HMI — tudo isso sem escrever uma única linha de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>


## Visão Geral do Hardware

Este tutorial utiliza a XIAO ePaper Display Board (ESP32-S3) - EE04 emparelhada com o display E-Ink Spectra™ 6 de 7,3" para concluir os exercícios práticos.

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.3" spectra™ 6 E-Ink</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Tipos de Display ePaper Suportados

Esta XIAO ePaper Display Board(ESP32-S3) - EE04 oferece duas opções de conectores — 24 pinos e 50 pinos — suportando vários tamanhos de tela. Escolha a que corresponda ao seu display na lista abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi71.png" style={{width:800, height:'auto'}}/></div>

#### Conector de 24 Pinos

- [Display ePaper de 1,54 polegadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display ePaper de 2,13 polegadas - Flexível Monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Display ePaper de 2,13 polegadas - Quatro Cores 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display ePaper de 2,9 polegadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display ePaper de 2,9 polegadas - Quatro Cores 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Display ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
Ao usar a XIAO ePaper Display Board(ESP32-S3) - EE04, certifique‑se de configurar o jumper de acordo com o tipo de display ePaper:

- Para displays ePaper de 24 pinos → ajuste o jumper para 24 pinos

⚠️ Usar uma configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::

#### Conector de 50 Pinos

- [Display ePaper Spectra6 de 7,3 polegadas 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
Ao usar a XIAO ePaper Display Board(ESP32-S3) - EE04, certifique‑se de configurar o jumper de acordo com o tipo de display ePaper:
- Para displays ePaper de 50 pinos → ajuste o jumper para 50 pinos

⚠️ Usar uma configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::


## Primeiros Passos

Use a XIAO ePaper Display Board(ESP32-S3) - EE04 para criar rapidamente seu próprio projeto HMI interativo.
Basta conectar a placa, abrir o [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) e começar a projetar sua interface diretamente no navegador — sem necessidade de codificação.

### Registro no SenseCraft HMI 

Primeiro, clique no botão no canto superior direito para se registrar em uma conta na plataforma [SenseCraft HMI](https://sensecraft.seeed.cc/hmi).


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi63.png" style={{width:1000, height:'auto'}}/></div>


### Gravação de Firmware da Placa de Display XIAO ePaper EE04

Após concluir o registro, clique em **“Tools”** na barra de menu para entrar na seção de gravação de firmware.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi62.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Atualmente, a XIAO ePaper Display Board(ESP32-S3) - EE04 oferece suporte às seguintes telas ePaper:
- [Display ePaper de 1,54 polegadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display ePaper de 2,13 polegadas - Flexível Monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Display ePaper de 2,13 polegadas - Quatro Cores 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display ePaper de 2,9 polegadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display ePaper de 2,9 polegadas - Quatro Cores 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Display ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [Display ePaper Spectra6 de 7,3 polegadas 800x480](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)
:::

Nesta página, você encontrará firmware de tutorial para dois modelos de display ePaper: o **Display Colorido de 7,3” (800×480)** 

Se você quiser usar um display ePaper de tamanho diferente, basta seguir os mesmos passos abaixo.

<Tabs>
<TabItem value="7.3-Inch ePaper Display" label="Display Colorido de 7,3 800*480 "default>

***Setp 1 .*** `Select` o 7.3 "Full Color Display 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

***Setp 2 .*** Selecione o firmware mais recente `EE04_7_3_color_1.0.5`
:::tip
A plataforma SenseCraft HMI é atualizada regularmente, e novas versões de firmware são lançadas de tempos em tempos.

Certifique‑se de selecionar e usar a versão de firmware mais recente para garantir a melhor compatibilidade e desempenho.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

***Setp 3 .*** Clique em **Flash** para enviar o firmware **7.3” Full-Color Display (800×480)** para a XIAO ePaper Display Board (ESP32-S3) - EE04.

Após clicar em Flash, a plataforma exibirá uma janela de seleção de porta. Escolha a porta correspondente à sua XIAO ePaper Display Board (ESP32-S3) - EE04 para estabelecer a conexão.

- Full Flash : Habilitar Full Flash apaga todas as informações armazenadas no dispositivo, incluindo redes Wi‑Fi e dados de painéis do usuário.

:::tip
Se nenhuma porta aparecer, basta pressionar o botão RESET na placa para atualizar a conexão.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>
<br></br>

***Setp 4 .*** Verifique a Saída do Display

Depois que o firmware for gravado com sucesso, o display ePaper piscará brevemente e, em seguida, exibirá a seguinte tela.
Você verá dois códigos QR, cada um levando a uma página diferente quando escaneado.

- Guia do Usuário: Acesse a seção HMI Basic Usage no [wiki](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_main_page/).

- Configuração de Wi-Fi: em Configurações de Rede Local, configure seu dispositivo para se conectar ao SenseCraft HMI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

A configuração ainda não está concluída. Continue seguindo as etapas abaixo até **Network Setup** para finalizar a configuração.

</TabItem>

<!-- <TabItem value="7.5-Inch ePaper Display" label="7.5 Monochrome Display 800*480 "default>

***Setp 1 .*** `Select` o 7.5 "Monochrome Display 800*480

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi91.png" style={{width:1000, height:'auto'}}/></div>

***Setp 2 .*** Selecione o firmware mais recente `EE04_7_5_mono_1.0.5`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi6.png" style={{width:1000, height:'auto'}}/></div>

***Setp 3 .*** Clique em **Flash** para enviar o firmware **7.5 "Monochrome Display 800*480** para a XIAO ePaper Display Board (ESP32-S3) - EE04.

Após clicar em Flash, a plataforma exibirá uma janela de seleção de porta. Escolha a porta correspondente à sua XIAO ePaper Display Board (ESP32-S3) - EE04 para estabelecer a conexão.

- Full Flash : Ativar Full Flash limpa todas as informações armazenadas no dispositivo, incluindo redes Wi-Fi e dados do painel do usuário.

:::tip
Se nenhuma porta aparecer, basta pressionar o botão RESET na placa para atualizar a conexão.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi66.png" style={{width:1000, height:'auto'}}/></div>


***Setp 4 .*** Verifique a Saída do Display

Depois que o firmware for gravado com sucesso, o display ePaper piscará brevemente e, em seguida, exibirá a seguinte tela.
Você verá dois códigos QR, cada um levando a uma página diferente quando escaneado.

- Guia do Usuário: Acesse a seção HMI Basic Usage no wiki (wiki)(https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_main_page/)

- Configuração de Wi-Fi: em Configurações de Rede Local, configure seu dispositivo para se conectar ao SenseCraft HMI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:1000, height:'auto'}}/></div>

<br></br>

A configuração ainda não está concluída. Continue seguindo as etapas abaixo até **Network Setup** para finalizar a configuração.


</TabItem> -->

</Tabs>

### Configuração de Rede

***Setp 1 .*** Conecte-se ao ponto de acesso Wi-Fi do Kit DIY de ePaper a partir do seu smartphone ou computador. O nome do AP aparecerá na tela (nenhuma senha é necessária). As credenciais da rede são XIAO ePaper Display Board(ESP32-S3) - EE04 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:500, height:'auto'}}/></div>

***Setp 2 .*** Depois de conectado, escaneie o código QR acima da tela de tinta; seu telefone deve redirecionar automaticamente para a página de configuração de Wi-Fi. Caso contrário, abra um navegador e acesse 192.168.4.1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

***Setp 3 .*** Selecione sua rede Wi-Fi local e insira a senha, depois clique em `Connect`.

:::tip
A XIAO ePaper Display Board(ESP32-S3) - EE04 só suporta redes Wi-Fi de 2,4 GHz, não 5 GHz ou outras bandas.
:::

***Setp 4 .*** Após a conclusão da conexão, a tela exibirá o código de pareamento correspondente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>


### Adicionar à Plataforma SenseCraft

***Setp 1 .*** Acesse a seção Workspace e clique em `Add Device`.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi12.png" style={{width:700, height:'auto'}}/></div>

***Setp 2 .*** Dê um nome ao seu dispositivo, insira o código de pareamento exibido na tela do dispositivo e clique em `Create`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi11.png" style={{width:700, height:'auto'}}/></div>

***Setp 3 .*** Após concluir o pareamento, você poderá ver o nome do seu dispositivo em Workspace.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi68.png" style={{width:700, height:'auto'}}/></div>

Agora que conectamos com sucesso a XIAO ePaper Display Board (ESP32-S3) - EE04 ao nosso dispositivo, podemos começar a explorar os recursos básicos no SenseCraft HMI.

## Criando Dashboard

A XIAO ePaper Display Board(ESP32-S3) - EE04 se integra perfeitamente à plataforma SenseCraft HMI, que oferece ferramentas poderosas para criar e personalizar conteúdo para seu dispositivo. Em vez de detalhar operações passo a passo aqui, vamos explorar os principais recursos da plataforma para ajudar você a entender o que é possível.

:::note
Esta demonstração usa uma tela de 7,3 polegadas como exemplo. Se for substituir por um tamanho diferente, observe o seguinte:

- Confirme a orientação do cabo flex da tela (frente e verso).
- Verifique se a quantidade de pinos corresponde.
- Use a tampa de proteção do tamanho correspondente.
- Evite dobrar ou flexionar excessivamente ao instalar o cabo flex.
:::

### Recursos do SenseCraft HMI

Em seguida, vamos explorar os cinco recursos básicos do SenseCraft HMI com exemplos simples de uso. Para obter informações mais detalhadas, clique em [SenseCraft HMI Overview](https://sensecraft-hmi-docs.seeed.cc/en/) abaixo para explicações detalhadas de recursos adicionais.

#### AI Generator

Deixe a inteligência artificial projetar seu dashboard! Basta descrever quais informações você quer exibir, e o AI Generator criará automaticamente um layout atraente e funcional. Isso é perfeito para gerar rapidamente displays de clima, calendários, listas de tarefas ou painéis informativos sem trabalho manual de design.

Saiba mais sobre [AI Generatorllery](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-ai-generator/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi25.png" style={{width:700, height:'auto'}}/></div>



<br></br>

**Resultado no Display ePaper**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3 polegadas</em></p>
</div>

#### Gallery

Transforme sua XIAO ePaper Display Board(ESP32-S3) - EE04 em uma moldura digital com o recurso Gallery. Envie suas imagens favoritas e a plataforma as otimizará para o display ePaper. Crie apresentações de slides com tempos de transição personalizados.

Saiba mais sobre [Gallery](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-gallery/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi27.png" style={{width:700, height:'auto'}}/></div>


<br></br>


**Resultado no Display ePaper**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi50.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3 polegadas</em></p>
</div>

#### Canvas 

Crie o seu dashboard do zero com o Canvas, uma interface de arrastar e soltar que oferece vários elementos:

- Blocos de texto com fontes e tamanhos personalizáveis
- Espaços reservados para imagens
- Widgets para hora, data e clima
- Ferramentas de visualização de dados
- Formas e divisores para organização do layout

Saiba mais sobre [Canvas](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-canvas/)


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi30.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**Resultado no Display ePaper**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi46.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3 polegadas</em></p>
</div>

#### Integração de Feed RSS


Mantenha-se atualizado com suas fontes de notícias ou sites favoritos adicionando feeds RSS ao seu dashboard. O recurso RSS permite exibir manchetes, resumos ou artigos completos de múltiplas fontes.

Você precisa copiar o hiperlink aqui. Abaixo estão duas opções recomendadas:

- [BBC News](http://feeds.bbci.co.uk/news/rss.xml)
- [The New York Times](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)

Saiba mais sobre [RSS Feed Integration](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-rss/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/75hmi.png" style={{width:700, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi26.png" style={{width:700, height:'auto'}}/></div>


<br></br>

**Resultado no Display ePaper**


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi51.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3 polegadas</em></p>
</div>

#### Exibição de Conteúdo Web

Deixe a inteligência artificial projetar o seu painel! Basta descrever quais informações você deseja exibir, e o Gerador de IA criará automaticamente um layout atraente e funcional. Isso é perfeito para gerar rapidamente exibições de clima, calendários, listas de tarefas ou painéis informativos sem trabalho manual de design.

Saiba mais sobre [Web Content Display](https://sensecraft-hmi-docs.seeed.cc/en/guides/sensecraft-hmi-web/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi29.png" style={{width:700, height:'auto'}}/></div>

<br></br>

**Resultado no Display ePaper**

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi53.png" alt="7.3-Inch ePaper Display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Display ePaper de 7,3 polegadas</em></p>
</div>


## Referências e Recursos

***SenseCraf HMI***

- [Primeiros passos com SenseCraft HMI](https://sensecraft-hmi-docs.seeed.cc/en/): Obtenha uma compreensão mais profunda de como usar o SenseCraft HMI para ajudá-lo a maximizar seus recursos e aprimorar seus projetos.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
