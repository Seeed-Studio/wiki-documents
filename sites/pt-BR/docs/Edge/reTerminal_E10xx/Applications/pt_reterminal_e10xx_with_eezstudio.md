---
description: Usando EEZStudio e fazendo deploy para Arduino para fins de aplicação
title: Display de ePaper reTerminal E Série funcionando com EEZ Studio
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
createdAt: '2025-09-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_eezstudio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros passos com o display de ePaper reTerminal E Série e EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## Introdução

Este guia irá conduzi-lo pelo processo de criação de uma interface de usuário profissional para o reTerminal E Série usando a ferramenta de design visual [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/). Você aprenderá como criar elementos de UI, gerar o código necessário e, por fim, fazer o deploy no dispositivo usando a IDE do Arduino. Esse processo permite construir interfaces personalizadas com excelente visibilidade e consumo de energia ultrabaixo, ideais para aplicações de IHM.

### Materiais necessários

Para concluir este tutorial, prepare um dos seguintes dispositivos reTerminal E Série:

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

### O que é o EEZ Studio?

EEZ Studio é um ambiente moderno de programação visual e design de UI desenvolvido principalmente para construir interfaces de usuário para instrumentos de teste e medição, dispositivos embarcados e outras aplicações interativas. Ele combina design de GUI por arrastar e soltar, recursos de script e ferramentas de integração com dispositivos, permitindo que desenvolvedores, engenheiros e makers criem rapidamente interfaces profissionais sem começar do zero.

Em resumo, o EEZ Studio atua como uma ponte entre hardware e software, permitindo que você projete, faça protótipos e faça o deploy de experiências de usuário de forma mais eficiente.

### Por que usar o EEZ Studio?

- Design de interface visual – Crie UIs complexas com um editor WYSIWYG, reduzindo a necessidade de codificação manual.
- Protótipo rápido – Teste e valide rapidamente ideias de design, economizando tempo e custo de desenvolvimento.
- Suporte multiplataforma – Crie aplicações que podem rodar em múltiplos sistemas operacionais e alvos embarcados.
- Integração com hardware – Conecte e controle diretamente instrumentos de laboratório, dispositivos IoT e placas personalizadas.
- Ecossistema open source – Beneficie-se de um conjunto de ferramentas orientado pela comunidade, com transparência e flexibilidade.

Com o EEZ Studio, você pode ir do conceito ao protótipo funcional em uma fração do tempo, garantindo que seus designs sejam profissionais e adaptáveis a requisitos futuros.

### Diferença em relação ao SquareLine Studio

Embora EEZ Studio e SquareLine Studio sejam ambos ferramentas de design de GUI, eles se concentram em objetivos e cenários de uso diferentes:

<table class="EEZStudio-table">
    <thead>
        <tr>
            <th>Aspecto</th>
            <th>EEZ Studio</th>
            <th>SquareLine Studio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Finalidade principal</th>
            <td>Projetado para instrumentos de teste e medição, sistemas embarcados e integração hardware/software</td>
            <td>Focado na construção de GUIs para sistemas embarcados (especialmente com LVGL)</td>
        </tr>
        <tr>
            <th>Usuários-alvo</th>
            <td>Engenheiros, desenvolvedores de produto, makers, projetistas de instrumentos de teste/laboratório</td>
            <td>Desenvolvedores de UI embarcada, hobbystas, projetistas de produtos IoT</td>
        </tr>
        <tr>
            <th>Integração com hardware</th>
            <td>Integração direta com instrumentos, dispositivos de medição e sistemas de automação</td>
            <td>Principalmente focado em geração de display/UI, não em integração com dispositivos externos</td>
        </tr>
        <tr>
            <th>Open Source</th>
            <td>Orientado pela comunidade, transparente, extensível Suporte técnico Premium/pago está disponível</td>
            <td>Produto comercial de código fechado, com licenciamento</td>
        </tr>
        <tr>
            <th>Fluxo de trabalho</th>
            <td>Permite prototipar, simular e controlar dispositivos reais em um único ambiente</td>
            <td>Principalmente gera código de UI para ser compilado em um projeto embarcado</td>
        </tr>
    </tbody>
</table>

## Primeiros passos com o EEZ Studio

### Instalação do EEZ Studio

[EEZ Studio Install Link](https://www.envox.eu/studio/studio-introduction/) Após acessar o link de download, selecione a versão do sistema compatível com o seu computador para fazer o download.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## Criar projeto

### Iniciando um novo projeto LVGL

Na parte superior da interface do EEZ Studio, clique no botão “CREATE”.
Na lista de modelos de projeto à esquerda, localize e selecione o projeto “LVGL”.

- `Name:` Dê um nome ao arquivo do projeto. Para facilitar a explicação do conteúdo subsequente em nossos artigos, iremos nos referir a ele aqui como EEZ_UI.
- `LVGL Version:` Especifica a versão da biblioteca LVGL usada pelo projeto. Selecione 9.x no menu suspenso.
- `Location:` Especifique o caminho de armazenamento dos arquivos do projeto no seu computador. O caminho padrão normalmente aponta para uma pasta de projetos padrão dentro do diretório de download ou instalação do EEZ Studio (por exemplo, C:\Users\SeuUsuario\Documents\EEZ Studio\Projects ou caminho semelhante). Se você precisar alterar o local de armazenamento, clique no ícone de pasta (ou reticências ...) à direita da caixa de texto Location.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### Configuração das definições do projeto

Ao criar seu projeto de UI LVGL para o reTerminal com E-paper, você precisa configurar corretamente as Project Settings do EEZ Studio para garantir que os arquivos de UI gerados sejam compatíveis com o seu ambiente Arduino ou embarcado.

Passo 1. Abra as Project Settings

Clique no ícone ⚙️ (Settings) na barra de ferramentas superior, como mostrado abaixo.
Isso abrirá o painel de Project Settings no lado direito do espaço de trabalho.

Passo 2. Configure Build Output e LVGL Include

Em General → Build, localize os seguintes campos:

- LVGL include: Insira lvgl.h para incluir o cabeçalho LVGL correto durante a compilação.

💡 Isso garante que o código de UI gerado possa referenciar corretamente a biblioteca LVGL durante o build.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

<br></br>

Passo 3. Defina a resolução do display

Em seguida, ainda em Settings → General, configure a resolução do seu display:
- Display width: 800
- Display height: 480

🧩 Esses parâmetros definem a resolução alvo da tela de E-paper para o layout da UI e mapeamento de coordenadas.
Certifique-se de que os valores correspondam ao seu modelo específico de E-paper (por exemplo, E-paper de 7,5 polegadas – 800×480).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

### Configurações de parâmetros do projeto e design da interface de UI

### Design da interface de UI

O design de UI (Interface de Usuário) é crucial no desenvolvimento de produtos embarcados, pois determina diretamente a experiência do usuário. Uma interface esteticamente agradável, intuitiva e responsiva não só aumenta a usabilidade do produto, como também melhora seu apelo geral.

No EEZ Studio, você pode montar interfaces rapidamente arrastando e soltando componentes. Utilize ferramentas como Styles, Fonts, Bitmaps e Themes para controlar precisamente os efeitos visuais, criando uma experiência de usuário profissional e diferenciada.

Abaixo está uma introdução às ferramentas recomendadas：

- [Color](https://coolors.co/)
- [Color Chart](https://peiseka.com/)
- [Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [Font](https://fonts.google.com/)

**Introdução ao componente mais à direita**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles: Atributos visuais usados para unificar e reutilizar elementos de interface, garantindo consistência e manutenção eficiente.
- Bitmap: Comumente usados para fundos, ícones, logotipos etc., para aprimorar a apresentação visual.
- Fonts: Garantem leitura clara do texto enquanto suportam conteúdo multilíngue e estilo de marca.
- Themes: Definem a estética geral da interface, permitindo alternâncias rápidas como modo claro/escuro.
- Groups: Organizam múltiplos widgets em conjunto para gerenciamento e layout unificados.

Neste tutorial, vou guiá-lo pelo design da UI da página inicial de um site ou app. Depois que você dominar as técnicas centrais, poderá aplicá-las para criar com facilidade qualquer interface que desejar.

Esta página é composta por cinco componentes:

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

Passo 1. Alterar a cor de fundo da tela

- Selecione o canvas cujo a cor de fundo você precisa mudar.
- Marque Color e selecione o código de cor hexadecimal de sua preferência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

Step 2 .Add Panel

- Arraste o componente Panel da seção Basic para o canvas e ajuste sua Width e Height.

- Marque Color e selecione o código de cor hexadecimal de sua preferência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

Step 3 .Add Bitmaps

- Clique no ícone Bitmaps na barra lateral da extrema direita para adicionar uma imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- Nomeie as imagens que você selecionar; você precisará escolher imagens com base em sua convenção de nomenclatura mais tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- Arraste o componente Image do grupo Basic para o canvas, depois selecione sua imagem e defina o tamanho usando Scale.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

Step 4 .Add Line

- Arraste o componente Line do grupo Visualiser para o canvas. Defina os pontos inicial e final em Points para determinar o comprimento e a altura da linha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

Step 5 .Add Label

- Arraste o componente Label do grupo Basic para o canvas, depois selecione a cor da fonte e as configurações de formato da fonte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- Clique na caixa Fonts na coluna da extrema direita para adicionar seus formatos de fonte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- Defina o nome e o tamanho da fonte

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

O que foi apresentado acima descreve o uso básico desses cinco componentes. Você pode organizá-los de acordo com o diagrama de referência ou com a interface de UI que você mesmo projetar.

### Geração de Código e Deploy

Após concluir o design da UI, você precisa salvar o projeto e visualizá-lo no simulador. Depois de verificar, execute a operação de build para gerar arquivos de código executáveis no hardware de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**Step 1 .Save Project**

Clique no ícone Save (formato de disquete, localizado ao lado do botão “OPEN”) na parte superior da interface para salvar seu projeto.

**Step 2 .Preview Design**

Clique no ícone Run (botão de play) na barra de ferramentas para iniciar o simulador e visualizar interativamente os efeitos da UI.

**Step 3 .Build Project**

Clique no ícone Compile (botão de marca de seleção) para verificar se há erros de sintaxe ou lógica no projeto.
Clique no ícone Build (botão de chave inglesa) para gerar arquivos como código de UI, dados de imagem e dados de fonte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**Step 4 .Confirming Successful Build**

Ao finalizar, o EEZ Studio exibirá um aviso em verde informando “Build successful”, indicando que o código foi gerado com sucesso.

## Preparação do Ambiente

Para programar o reTerminal E Série ePaper Display com Arduino, você precisará configurar a Arduino IDE com suporte a ESP32.

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

#### Configuração da Arduino IDE

**Step 1.** Baixe e instale a [Arduino IDE](https://www.arduino.cc/en/software) e inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Step 2.** Adicione o suporte à placa ESP32 na Arduino IDE.

Na Arduino IDE, vá em **File > Preferences** e adicione a seguinte URL no campo "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Step 3.** Instale o pacote da placa ESP32.

Navegue até **Tools > Board > Boards Manager**, procure por "esp32" e instale o pacote ESP32 da Espressif Systems.

**Step 4.** Selecione a placa correta.

Vá em **Tools > Board > ESP32 Arduino** e selecione **XIAO_ESP32S3**.

**Step 5.** Conecte seu reTerminal E Série ePaper Display ao computador usando um cabo USB-C.

**Step 6.** Selecione a porta correta em **Tools > Port**.

## Programação do ePaper Display

O **reTerminal E1001 possui um ePaper display preto e branco de 7,5 polegadas**, enquanto o **reTerminal E1002 é equipado com um ePaper display full color de 7,3 polegadas**. Ambos os displays fornecem excelente visibilidade em várias condições de iluminação com consumo de energia ultrabaixo, tornando-os ideais para aplicações industriais que exigem displays sempre ligados com consumo mínimo de energia.

### Usando a Biblioteca Seeed_GFX

Para controlar o ePaper display, usaremos a biblioteca Seeed_GFX, que fornece suporte abrangente para vários dispositivos de display da Seeed Studio.

**Step 1.** Baixe a biblioteca Seeed_GFX do GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** Instale a biblioteca adicionando o arquivo ZIP na Arduino IDE. Vá em **Sketch > Include Library > Add .ZIP Library** e selecione o arquivo ZIP baixado.

:::note
Se você já instalou a biblioteca TFT_eSPI anteriormente, talvez seja necessário removê-la temporariamente ou renomeá-la na pasta de bibliotecas da Arduino para evitar conflitos, pois Seeed_GFX é um fork de TFT_eSPI com recursos adicionais para displays da Seeed Studio.
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programando reTerminal E1001" default>
#### Programando reTerminal E1001 (ePaper preto e branco de 7,5 polegadas)

Vamos explorar um exemplo simples que demonstra operações básicas de desenho no ePaper display preto e branco.

**Step 1.** Abra o sketch de exemplo da biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**Step 2.** Crie um novo arquivo chamado `driver.h` na mesma pasta do seu sketch. Você pode fazer isso clicando no botão de seta na Arduino IDE e selecionando "New Tab", e então nomeando-o como `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Vá para a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) e selecione **reTerminal E1001** na lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** Copie o código de configuração gerado e cole-o no arquivo `driver.h`. O código deve se parecer com isto:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programando reTerminal E1002">

#### Programando reTerminal E1002 (ePaper full color de 7,3 polegadas)

O ePaper display full color oferece suporte às cores vermelho, preto e branco, permitindo interfaces visualmente mais ricas.

**Step 1.** Abra o sketch de exemplo colorido da biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Step 2.** Crie um novo arquivo chamado `driver.h` na mesma pasta do seu sketch, seguindo o mesmo processo de antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Vá para a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) e selecione **reTerminal E1002** na lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**Step 4.** Copie o código de configuração gerado e cole-o no arquivo `driver.h`. O código deve se parecer com isto:

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## Fazendo o Deploy do Projeto EEZ Studio para Arduino

Primeiro, localize OPI PSRAM na barra de menu ‘Tools’ e abra-o.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

Esses dois arquivos de driver subjacentes precisam ser adicionados ao diretório do nosso projeto.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

- [e1002_display.cpp](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

Migre os seguintes arquivos de projeto (incluindo quatro arquivos) para a Biblioteca do Arduino para uso em projetos Arduino.
O `EEZ_UI file` é gerado durante o processo de compilação no EEZStudio. Você precisa localizar o caminho onde ele foi salvo.

- 🔗 **[ZIP]** [Code](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

Aqui está o sketch principal do Arduino para executar a interface:
Três botões correspondem a três telas diferentes, começando com a verde: HOME\Workstation\Plant em sequência.

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY0 = 3;
const int BUTTON_KEY1 = 4;
const int BUTTON_KEY2 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

e1002_driver_t e1002_driver;

void setup()
{
    String LVGL_Arduino = "Automotive Dashboard Demo - LVGL ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() +
                    "." + lv_version_patch();
    Serial.begin(115200);
    Serial.println(LVGL_Arduino);
    Serial.println("Initializing 6-color e-paper display...");
    e1002_display_init(&e1002_driver);

    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    lastKey0State = digitalRead(BUTTON_KEY0);
    lastKey1State = digitalRead(BUTTON_KEY1);
    lastKey2State = digitalRead(BUTTON_KEY2);

    ui_init();
    page_index = SCREEN_ID_HOME;
    loadScreen((ScreensEnum)page_index);
    Serial.println("Boot: Main Screen");
}

void loop()
{
    lv_timer_handler();
    ui_tick();
    delay(50);

    bool currentKey0State = digitalRead(BUTTON_KEY0);
    bool currentKey1State = digitalRead(BUTTON_KEY1);
    bool currentKey2State = digitalRead(BUTTON_KEY2);

    if (lastKey0State == HIGH && currentKey0State == LOW) {
        page_index = SCREEN_ID_HOME;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Main Screen");
        delay(50);
    }

    if (lastKey1State == HIGH && currentKey1State == LOW) {
        page_index = SCREEN_ID_WORKSTATION;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Plant Screen");
        delay(50);
    }

    if (lastKey2State == HIGH && currentKey2State == LOW) {
        page_index = SCREEN_ID_PLANT;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Setting Screen");
        delay(50);
    }

    lastKey0State = currentKey0State;
    lastKey1State = currentKey1State;
    lastKey2State = currentKey2State;

    if (e1002_display_should_refresh(&e1002_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1002_display_refresh(&e1002_driver);
        Serial.println("Display refresh complete");
    }

    delay(10);
}

```

- `e1002_display_init():` Inicializa o hardware do display de e-ink e define seus parâmetros de operação.

- `pinMode(..., INPUT_PULLUP):` Configura o pino do botão como modo de entrada e habilita o resistor de pull-up interno. Isso garante que o pino permaneça em nível alto (HIGH) quando o botão não for pressionado e se conecte ao terra, tornando-se baixo (LOW), quando pressionado.

- `ui_init()` e `loadScreen():` Essas funções inicializam a biblioteca de interface de usuário LVGL e carregam a tela especificada

- `lv_timer_handler():` Esta é uma função essencial na biblioteca LVGL que lida com eventos de temporizador dentro do LVGL, como animações e atualizações de tela.

- `if (lastKey0State == HIGH && currentKey0State == LOW):` Esta linha é o núcleo da detecção de eventos de tecla. Ela verifica se o estado de uma tecla mudou de não pressionada para pressionada.

- Quando a condição é atendida, o programa atualiza `page_index` e chama a função `loadScreen()` para carregar uma nova página.

- Atualização de estado: `lastKey0State = currentKey0State;` Esta linha é crucial. Ela salva o estado atual da tecla para uso na próxima iteração de `loop()`, permitindo a próxima comparação de estado.

- Atualização do E-ink: `e1002_display_should_refresh()` e `e1002_display_refresh()` gerenciam a atualização da tela E-ink. Diferente das telas LCD, o E-ink não pode atualizar em tempo real. Normalmente, ele requer atualizações seletivas ou de tela inteira em intervalos específicos para economizar energia e prolongar a vida útil. Este código implementa esse mecanismo de atualização sob demanda.

- `delay(10)`: Esta é uma simples medida de debounce por software para evitar que o programa interprete erroneamente a oscilação física da tecla como múltiplos pressionamentos.

## Diagrama da Exibição da Interface

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

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe proporcionar diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
