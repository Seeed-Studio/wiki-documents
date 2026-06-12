---
description: Este artigo fornece instruções sobre como criar a interface de usuário para o display de papel da série reTerminal E no SquareLine.
title: Trabalhando com SquareLine Vision
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_5.webp
slug: /reterminal_e10xx_with_squareline_vision
sidebar_position: 6
last_update:
  date: 10/29/2025
  author: Zovey
createdAt: '2025-11-03'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_squareline_vision/
---

# Display de Papel da Série reTerminal E Trabalhando com SquareLine Vision

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:600, height:'auto'}}/></div>

## Introdução

Quando você deseja criar seu próprio terminal inteligente, certamente espera que esse dispositivo tenha uma interface de usuário atraente e elegante. O [LVGL](https://lvgl.io/) pode alcançar isso. É a biblioteca gráfica embarcada gratuita e de código aberto mais popular para criar belas interfaces de usuário para qualquer tipo de MCU, MPU e display. Com essa biblioteca, você pode criar um grande número de belas interfaces de usuário embarcadas. Especialmente ao usar nossos produtos de papel eletrônico da Série reTerminal E, uma interface atraente é uma parte indispensável. No entanto, escrever o código da biblioteca LVGL também é uma tarefa muito complicada. Portanto, este tutorial tem como objetivo principal apresentar um editor que permite desenhar a interface de usuário simplesmente arrastando e soltando controles. O método de criação WYSIWYG (What You See Is What You Get) permite compreender melhor o efeito de apresentação final e, após desenhar a interface, você pode exportá-la como arquivos de UI do LVGL, o que simplifica muito o processo de desenvolvimento para os desenvolvedores. O nome dessa ferramenta é SquareLine Vision, uma ferramenta visual de front-end para LVGL.

[SquareLine Vision](https://vision.squareline.io/) é um ambiente de desenvolvimento de UI baseado em navegador (Web) ou em ambiente compatível com Web, dedicado a projetar rapidamente interfaces de usuário (UI) para sistemas embarcados (como dispositivos com telas).
Também é uma ferramenta de **design + exportação de código**: você projeta a interface na plataforma e, em seguida, pode exportar o design como código ou recursos para execução em dispositivos embarcados. 

## Os recursos do SquareLine Vision

- **Design visual de UI** – Projete interfaces bonitas e interativas visualmente com um editor de arrastar e soltar, eliminando a necessidade de criação manual de código LVGL.
- **Prototipagem rápida embarcada** – Visualize e valide instantaneamente sua UI no desktop ou no hardware de destino, reduzindo drasticamente o tempo de iteração entre o design e o dispositivo.
- **Exportação com tecnologia LVGL** – Exporte perfeitamente seus designs em código-fonte limpo baseado em LVGL, pronto para compilar em dispositivos embarcados, microcontroladores ou ambientes de simulação.

Com o SquareLine Vision, você pode ir do conceito ao protótipo de UI embarcada interativa em minutos — combinando flexibilidade de design, visualização em tempo real e saída LVGL pronta para produção para acelerar todo o ciclo de desenvolvimento do seu produto.

### Materiais Necessários

Para concluir este tutorial, prepare um dos seguintes dispositivos da Série reTerminal E, o E1001 é monocromático e o E1002 é totalmente colorido:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>


## Introdução ao [SquareLine Vision](https://vision.squareline.io/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_7.png" style={{width:600, height:'auto'}}/></div>

### Introdução aos Componentes

Toda a plataforma SquareLine Vision pode ser dividida em duas partes: **Launcher** e a **Interface do Aplicativo**.
Na interface do **Launcher**, podemos ver as três funções principais a seguir:
- projetos
- lidar com importações
- controlar configurações de conta

Quando você começar a desenhar a UI, conhecerá cinco ferramentas:
- sistema de hierarquia
- gerenciamento de telas
- opções de estilo
- vários tipos de widgets
- como aproveitar eventos, gatilhos e ações

Quando você tiver uma compreensão clara da estrutura organizacional geral e das ferramentas da plataforma, isso será muito útil para a produção do seu projeto pessoal. Em seguida, criarei um projeto com base no nosso reTerminal E1002.

## Criar um Projeto

### Iniciar um novo Projeto LVGL

Na parte superior da interface do Launcher do SquareLine Vision, clique no botão `Create new`. Em seguida, selecione `Seeed Studio` para visualizar nossos produtos. Escolha o `reTerminal E1002` para criar um projeto.
As configurações fixas deste projeto são:
- `Resolution`: 800x480
- `Offset`: 0(x), 0(y)
- `Rotation`: 0°
- `Shape`: Rectangle
- `Color Depth`: 32 bit
- `LVGL version`: 9.1
- `Theme`: Light

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Launcher_2.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Já oferecemos suporte aos dispositivos SenseCAP Watcher e reTerminal E1001 e E1002. No futuro, também daremos suporte a mais produtos da Seeed Studio.
:::

### Importar um projeto .slvp existente
Se você já tiver um arquivo .slvp, poderá importá-lo diretamente como um projeto. Fornecemos dois painéis relacionados ao clima. Você pode baixá-los diretamente abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.png" style={{width:600, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima Monocromático</th>
      <th>Clima em Cores</th>
      <th>Clima em Cores 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_3.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 7 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Paper_Weather.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 13 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configurações de Parâmetros do Projeto & Design da Interface de UI

Assim que você entrar na interface de engenharia, poderá ver quatro áreas principais:

- A Região 1 é a **Hierarchy**, usada principalmente para gerenciar a estrutura dos elementos da UI. 
- A Região 2 é o **Simulator**, onde a UI é exibida e usada para visualizar os efeitos de apresentação de cada UI. 
- A Região 3 é o **Inspector**, que fornece controles detalhados para o elemento atualmente selecionado. 
- A Região 4 é a **Toolbar**, localizada na parte superior da interface do aplicativo, permitindo acesso fácil a muitas ferramentas e funções.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_2.png" style={{width:500, height:'auto'}}/></div>

### Design da Interface de UI

O design da UI (User Interface) é crucial no desenvolvimento de produtos embarcados, pois determina diretamente a experiência do usuário. Uma interface esteticamente agradável, intuitiva e responsiva não apenas melhora a usabilidade do produto, como também aumenta seu apelo geral.

No SquareLine Vision, você pode montar rapidamente interfaces arrastando e soltando componentes. Utilize ferramentas como Styles, Fonts, Bitmaps e Themes para controlar com precisão os efeitos visuais, criando uma experiência de usuário profissional e distinta.

:::tip
Este tutorial aborda apenas os controles que aparecem neste projeto. No entanto, o SquareLine Vision oferece muitas outras funcionalidades, como animações, eventos e diferentes fontes. Se você quiser explorar mais essa ferramenta, consulte [os tutoriais oficiais](https://docs.vision.squareline.io/docs/overview).
:::

#### Introdução à Hierarchy

Aqui você pode aninhar widgets uns dentro dos outros, criando relações pai-filho em que o widget contêiner se torna o pai e os elementos dentro dele se tornam widgets filhos. Pode-se ver que esta imagem é composta por vários contêineres, imagens e textos. Esses três controles podem ser encontrados todos na barra de ferramentas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_3.png" style={{width:300, height:'auto'}}/></div>

#### Introdução ao Inspector

Este painel permite visualizar e modificar propriedades de telas, contêineres, widgets e outros elementos de UI. Além disso, pode haver configurações especiais que variam conforme o tipo de widget. Quando seleciono o "background img", posso ver todos os componentes relacionados à imagem no Inspector.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_5.png" style={{width:500, height:'auto'}}/></div>

#### Introdução à Toolbar

A Toolbar inclui opções para configuração do projeto, salvar seu projeto, acessar ajuda, relatar problemas, modificar a visualização do projeto, baixar o código do projeto e iniciar o projeto em modo de reprodução diretamente no SquareLine Vision.

- **Menu**: A partir daqui, você pode acessar as funções para salvar seu trabalho, exportar o projeto, ajustar as configurações do projeto e retornar à tela inicial.
- **Project name**: Exibe o nome do seu projeto atual.
- **Plan**: Mostra o plano de assinatura atual do usuário.
- **Editor / Animation mode**: Alterna entre dois ambientes de trabalho distintos
- **Widgets**: Acesse elementos de UI por meio de três menus suspensos que agrupam logicamente os componentes, facilitando a localização do widget apropriado para o seu projeto. 
- **Undo / Redo**: Permite avançar e retroceder pelas alterações de design, apoiando a experimentação sem risco. 
- **Play mode**: Inicia a visualização e o teste da simulação da UI.
- **Send bug report**: Fornece acesso direto ao sistema de relatório de erros.
- **User(s)**: Exibe todos os usuários ativos que estão trabalhando atualmente no seu projeto, apoiando esforços de design colaborativo.
- **View options**: Você pode alternar a exibição do minimapa e inserir valores precisos de zoom em porcentagem em um campo de entrada dedicado.
- **Version**: Exibe a versão atual do SquareLine Vision na qual o seu projeto está sendo executado, garantindo que você esteja ciente do ambiente de software.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_6.png" style={{width:500, height:'auto'}}/></div>

### Geração de código e estrutura do projeto

O exportador do SquareLine Vision gera código de GUI baseado em LVGL organizado de forma estruturada para separar responsabilidades e tornar o código mais fácil de manter. O código exportado segue uma arquitetura modular com separação clara entre inicialização da GUI, gerenciamento de telas, eventos, estilos e animações.

#### Estrutura do projeto

```shell
exported_project/
├── GUI/                    # Main GUI folder (or 'ui' for Studio format)
│   ├── Content/            # GUI content files
│   │   ├── screens/        # Individual screen source files
│   │   ├── images/         # Generated image source files
│   │   └── fonts/          # Font source files
│   ├── Behavior/           # Event and animation related files
│   │   ├── GUI_Events.c    # Event handler implementations
│   │   └── GUI_Animations.c # Animation and timeline definitions
│   ├── Framework/          # GUI framework files
│   │   └── LVGL/           # LVGL library files
│   ├── GUI.c               # Main GUI implementation
│   ├── GUI.h               # Main GUI header
│   ├── GUI_variables.c     # GUI object declarations
│   ├── GUI_GlobalStyles.c  # Global style definitions
│   ├── CMakeLists.txt      # CMake build configuration
│   └── filelist.txt        # List of all GUI source files
├── lv_conf.h               # LVGL configuration file
├── main.c                  # Application entry point
├── HAL.c                   # Hardware abstraction layer
├── CMakeLists.txt          # Main CMake configuration
├── build.sh                # Build script
└── run.sh                  # Run script
```

#### Componentes principais

Interface principal para o subsistema de GUI. Fornece funções de alto nível para:

- `GUI_load()`: Inicialização completa da GUI, incluindo HAL e LVGL
- `GUI_init()`: Inicialização básica da GUI
- `GUI_refresh()`: Atualiza o estado da GUI (chama o manipulador LVGL
- `GUI_initContent()`: Inicializa telas e widgets
- `GUI_initTheme()`: Configura o tema da GUI
- `GUI_loadFirstScreen()`: Carrega a tela inicial

## Gravação do programa

O módulo de controle principal do E1002 é o ESP32-S3. Se você quiser programar a tela de papel eletrônico da série reTerminal E usando o PlatformIO, precisa definir a opção de suporte ao ESP32 no arquivo `.ini`.

:::tip
Se esta é a sua primeira vez usando o PlatformIO, recomendamos fortemente que você consulte [Getting Started with PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html).
:::

### Exemplos de uso

### Configuração do PlatformIO

- **Step 1**: Instale o [PlatformIO](https://platformio.org/platformio-ide) no site oficial. Se você ainda não instalou o software PlatformIO, pode clicar no link acima.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_1.png" style={{width:500, height:'auto'}}/></div>

- **Step 2**: Pesquise por `platformio` nas extensões do VScode. O primeiro ícone que aparecer é o que você precisa. Basta clicar em `Install` para iniciar o download.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_5.png" style={{width:700, height:'auto'}}/></div>

- **Step 3**: Abra o plugin PlatformIO em sequência. Em seguida, clique no botão `Open` e selecione o projeto PlatformIO local clicando em `Open Project` para abri-lo.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_6.png" style={{width:700, height:'auto'}}/></div>


### Rotina de referência

Fornecemos três modelos existentes, cada um com uma interface de UI diferente que pode exibir o painel de clima em tempo real. Eles também se integram ao [OpenWeather](https://openweathermap.org/)(é uma plataforma de serviços que fornece dados meteorológicos globais) para obter mudanças climáticas em tempo real. Tudo o que você precisa fazer é obter a API KEY do OpenWeather e conectar-se ao WIFI para usá-los normalmente.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Monochrome Weather </th>
      <th>Full Color Weather </th>
      <th>Full Color Weather 2</th>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/weather_gray.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_7_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_13_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

- **Step 1**: Abra a pasta no VScode e aguarde até que as dependências relacionadas sejam totalmente baixadas. Após abrir o projeto, abra o arquivo `.ini` e pressione `Ctrl+S`. Neste momento, as dependências do projeto começarão a ser baixadas automaticamente. Quando você vir `Project has been successfully updated`, isso significa que o processo de download foi concluído. Quando a palavra `successful` estiver presente, isso indicará imediatamente que a instalação foi concluída com sucesso.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_2.png" style={{width:700, height:'auto'}}/></div>


- **Step 2**: Abra o **OpenWeather** e obtenha sua própria API KEY
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_1.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_2.png" style={{width:700, height:'auto'}}/></div>
- **Step 3**: Modifique seu `WIFI_SSID`, `WIFI_PASSWORD` e `OW_API_KEY` em `main.cpp`.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_3.png" style={{width:700, height:'auto'}}/></div>

- **Step 4**: Conecte o reTerminal ao computador usando um cabo de dados USB e selecione a porta serial apropriada para o processo de gravação. Em seguida, clique no botão `upload` para realizar o processo de gravação.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_3.png" style={{width:700, height:'auto'}}/></div>
  Quando o seguinte conteúdo aparecer no terminal, isso indica que o processo de gravação foi bem-sucedido. Em seguida, o reTerminal atualizará automaticamente a imagem da tela.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_4.png" style={{width:700, height:'auto'}}/></div>

## Apresentação dos resultados

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima monocromático </th>
      <th>Clima em cores </th>
      <th>Clima em cores 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/squareline_BW_template.jpeg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_3.jpg" style={{width:350, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

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
