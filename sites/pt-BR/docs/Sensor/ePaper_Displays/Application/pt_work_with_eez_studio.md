---
description: Crie interfaces profissionais baseadas em LVGL para produtos ePaper da Seeed com o EEZ Studio e depois faça o deploy com PlatformIO — funciona em toda a linha reTerminal E e na XIAO ePaper Display Board (EE04).
title: Trabalhar com EEZ Studio
keywords:
  - display ePaper
  - EEZ Studio
  - LVGL
  - reTerminal
  - EE04
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 8
last_update:
  date: 06/26/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-06-26'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

Este guia conduz você pelo processo de criar uma interface de usuário profissional com a ferramenta de design visual [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/), gerar código LVGL e fazer o deploy em um produto ePaper da Seeed com PlatformIO. O fluxo é o mesmo para todas as placas compatíveis — as únicas diferenças são a resolução do display e o ambiente da placa, que apresentamos em abas.

## Hardware compatível

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001 / E1002 / E1003 / E1004</th>
      <th>XIAO ePaper Display Board (ESP32-S3) – EE04</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7,5" mono / 7,3" Spectra 6 / 10,3" mono / 13,3" Spectra 6</td>
      <td align="center">Driver universal — combine com qualquer uma de nossas telas ePaper Seeed de 24 pinos ou 50 pinos</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## O que é o EEZ Studio?

EEZ Studio é um ambiente moderno de programação visual e design de UI originalmente criado para instrumentos de teste e medição e dispositivos embarcados. Ele combina design de GUI por arrastar e soltar, scripts e ferramentas de integração de dispositivos, permitindo que desenvolvedores, engenheiros e makers criem rapidamente interfaces profissionais sem começar do zero.

Em resumo, o EEZ Studio atua como uma ponte entre hardware e software, permitindo que você projete, faça protótipos e faça o deploy de experiências de usuário com mais eficiência.

### Por que usar o EEZ Studio?

- **Design visual de interface** — crie UIs complexas com um editor WYSIWYG.
- **Prototipagem rápida** — teste e valide ideias de design rapidamente.
- **Multiplataforma** — crie aplicativos que rodam em vários sistemas operacionais e alvos embarcados.
- **Integração de hardware** — conecte diretamente instrumentos de laboratório, dispositivos IoT e placas personalizadas.
- **Código aberto** — conjunto de ferramentas orientado pela comunidade com suporte premium opcional.

### EEZ Studio vs. SquareLine Studio

Ambos são ferramentas de design de GUI, mas têm públicos-alvo ligeiramente diferentes:

<table>
    <thead>
        <tr><th>Aspecto</th><th>EEZ Studio</th><th>SquareLine Studio</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>Finalidade principal</th>
            <td>Instrumentos de teste e medição, sistemas embarcados, integração hardware/software</td>
            <td>GUIs embarcadas, especialmente com LVGL</td>
        </tr>
        <tr>
            <th>Usuários-alvo</th>
            <td>Engenheiros, desenvolvedores de produto, makers, designers de instrumentos de teste/laboratório</td>
            <td>Desenvolvedores de UI embarcada, hobbystas, designers de produtos IoT</td>
        </tr>
        <tr>
            <th>Integração de hardware</th>
            <td>Integração direta com instrumentos, dispositivos de medição, automação</td>
            <td>Focado em geração de UI, com menos integração com dispositivos externos</td>
        </tr>
        <tr>
            <th>Código aberto</th>
            <td>Orientado pela comunidade, transparente, extensível (suporte premium disponível)</td>
            <td>Código fechado, produto comercial com licenciamento</td>
        </tr>
        <tr>
            <th>Fluxo de trabalho</th>
            <td>Prototipar, simular e controlar dispositivos reais em um único ambiente</td>
            <td>Principalmente gera código de UI para ser compilado em um projeto embarcado</td>
        </tr>
    </tbody>
</table>

## Etapa 1: Instalar o EEZ Studio

Baixe o EEZ Studio para o seu sistema operacional a partir [do site oficial](https://www.envox.eu/studio/studio-introduction/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/30.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 2: Criar um projeto LVGL

Na parte superior da interface do EEZ Studio, clique em **CREATE**. Selecione o template **LVGL** à esquerda:

- **Name** — dê um nome ao seu projeto (usaremos `EEZ_UI` neste artigo).
- **LVGL Version** — escolha `9.5.0` na lista suspensa.
- **Location** — escolha onde salvar os arquivos do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/31.png" style={{width:1000, height:'auto'}}/></div>

### Configurações do projeto

Clique no ícone ⚙️ na barra de ferramentas para abrir as configurações do projeto.

Em **General → Display**, defina a resolução **para o seu hardware**:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(O display de 7,5" mono no E1001 e o de 7,3" Spectra 6 no E1002 compartilham a mesma resolução de 800×480.)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(Ajuste os valores para corresponder à tela ePaper Seeed que você conectou ao EE04. O exemplo abaixo usa a tela monocromática de 5,83" 648×480.)

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/32.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 3: Projetar a UI

O design da UI determina diretamente a experiência do usuário. O EEZ Studio permite montar interfaces rapidamente arrastando e soltando componentes e usando **Styles**, **Fonts**, **Bitmaps**, **Themes** e **Groups** para controlar o resultado visual.

Recursos online recomendados:

- [Coolors](https://coolors.co/) — gerador de paletas de cores
- [PeisekA](https://peiseka.com/) — tabela de cores
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — biblioteca de ícones
- [Google Fonts](https://fonts.google.com/) — fontes gratuitas

A barra lateral direita:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/33.png" style={{width:1000, height:'auto'}}/></div>

- **Styles** — atributos visuais para unificar e reutilizar elementos da interface.
- **Bitmaps** — planos de fundo, ícones, logotipos.
- **Fonts** — renderização de texto e suporte multilíngue.
- **Themes** — claro/escuro e outros estilos de alto nível.
- **Groups** — auxiliares de layout.

### Layout de exemplo (Hello World + Panel + Image + Line + Label)

Neste tutorial vamos criar uma página inicial simples com cinco componentes:

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 1.** Altere a cor de fundo da tela — selecione a tela, marque **Color** e escolha um valor hexadecimal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 2.** Arraste um **Panel** para a tela, ajuste sua largura/altura e escolha uma cor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 3.** Adicione bitmaps pelo painel **Bitmaps** à direita, dê nomes a eles, depois arraste o widget **Image** para a tela e vincule o seu bitmap.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 4.** Adicione uma **Line** do grupo Visualiser e configure seus **Points**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 5.** Adicione uma **Label**, escolha a cor e depois adicione fontes pelo painel **Fonts** à direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## Etapa 4: Gerar código

Depois que o design estiver concluído:

1. **Salvar** — pressione Control + S para salvar. Se você estiver no macOS, pressione Command + S para salvar.
2. **Pré-visualizar** — clique em **Run** para iniciar o simulador e pré-visualizar a UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/35.png" style={{width:600, height:'auto'}}/></div>

3. **Compilar / Build** — clique no ícone ✓ para verificar erros e depois na chave inglesa para gerar o código da UI, os dados de imagem e os dados de fonte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/34.png" style={{width:600, height:'auto'}}/></div>

Uma mensagem verde **Build successful** confirma a geração do código. A saída vai para a pasta **`src/ui`** do seu projeto (você pode renomeá-la para `src/EEZ_UI` se preferir).

## Etapa 5: Configurar o PlatformIO

Implante a saída do EEZ Studio com o PlatformIO. O PlatformIO fornece a estrutura do projeto, ambiente da placa, dependências de biblioteca e configurações de compilação necessárias para os produtos Seeed ePaper.

Se esta é a sua primeira vez usando o PlatformIO com produtos Seeed ePaper, siga o guia de configuração vinculado abaixo para configurar seu ambiente de desenvolvimento.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/pt-br/epaper_work_with_platformio/" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}>Guia de Configuração do PlatformIO</font></span></strong>
    </a>
</div><br />

:::tip
O guia de configuração do PlatformIO abrange definições de placa, dependências de biblioteca e configuração de compilação — depois de concluído, volte aqui para continuar.
:::

## Etapa 6: Baixar o Template PlatformIO do EEZ Studio

Abra o reTerminal E-Series Firmware Hub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Abrir Firmware Hub</font></span></strong>
    </a>
</div><br />

Na página do Firmware Hub:

1. Em **Official Platforms**, encontre o card **EEZ Studio** e clique nele para expandir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/38.png" style={{width:800, height:'auto'}}/></div>

2. Selecione seu dispositivo — **E1001**, **E1002**, **E1003** ou **E1004**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/39.png" style={{width:800, height:'auto'}}/></div>

3. A página exibe um guia de uso passo a passo para o template. Clique no botão **Download project template** para obter o arquivo ZIP do projeto PlatformIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/40.png" style={{width:800, height:'auto'}}/></div>

## Etapa 7: Implantar o Projeto EEZ Studio

Depois de baixar o template, substitua a interface de usuário do template pelos arquivos gerados pelo EEZ Studio.

1. Descompacte o template baixado.
2. Abra a pasta do projeto descompactado no VS Code com a extensão PlatformIO instalada.
3. Navegue até o diretório `src/ui` dentro do projeto template.
4. Substitua todos os arquivos em `src/ui` pelos arquivos exportados pelo EEZ Studio na Etapa 4.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/41.png" style={{width:800, height:'auto'}}/></div>

5. Na barra de ferramentas do PlatformIO, selecione o ambiente correto para sua placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/42.png" style={{width:1000, height:'auto'}}/></div>

6. Clique em **Build** para compilar e depois em **Upload** para gravar o firmware no seu dispositivo.

:::tip
O template já inclui todos os drivers necessários e a configuração LVGL para o seu dispositivo. Você só precisa substituir os arquivos de UI.
:::

### Telas resultantes

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página Inicial</th>
      <th>Página da Estação de Trabalho</th>
      <th>Página de Fotos</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Referência e Recursos

- [Template PlatformIO do EEZ Studio & Código-fonte](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/EEZStudio)

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
