---
description: EE04 ePaper Display com EEZ Studio
title: Placa de Display ePaper EE04 (ESP32-S3) com EEZ Studio
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 1
slug: /epaper_ee04_eezstudio
last_update:
  date: 09/28/2025
  author: Zeller
createdAt: '2025-10-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/epaper_ee04_eezstudio/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:600, height:'auto'}}/></div>

Este tutorial usa a XIAO ePaper Display Board(ESP32-S3) - EE04, baseada em EEZ Studio e com compilação e upload do programa usando a Arduino IDE.

## [EEZ Studio](https://www.envox.eu/studio/studio-introduction/)

O EEZ Studio representa uma solução única quando é necessário tanto o desenvolvimento rápido de uma GUI atraente quanto o controle remoto de dispositivos para automação de teste e medição (T&M).

Criado por uma equipe com experiência direta no design de dispositivos embarcados [complexos](https://www.envox.eu/eez-bb3) com recursos limitados, o EEZ Studio permite projetar desktops responsivos e GUIs embarcadas usando programação visual de **arrastar** & **soltar** e fluxogramas. Uma série de Widgets e Ações desenvolvidos internamente, bem como suporte a [LVGL](https://github.com/lvgl/lvgl) (tanto 8.x quanto 9.x) e modelos e exemplos de projetos prontos para uso permitem prototipagem rápida, bem como o desenvolvimento de aplicações finais.

### Hardware

Antes de começar a ler este tutorial, certifique-se de que você tem todos os itens necessários listados abaixo preparados.

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>ePaper monocromático de 5,83 polegadas</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_Pre_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Criar projeto

Na parte superior, selecione **Create**, depois clique em **LVGL** e, na seção adjacente **PROJECT SETTING**, defina os parâmetros necessários.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: Nome do projeto
- LVGL version： Selecione a versão 9.x
- Location: O local para armazenar os arquivos de engenharia pode ser deixado como o caminho padrão ou personalizado de acordo com as necessidades reais.
- Project file path: O caminho dos arquivos de engenharia. Este caminho será usado posteriormente (este caminho é o caminho padrão no computador; você também pode personalizar o caminho)

### Introdução à Página de Engenharia

Abaixo estão algumas configurações básicas e controles para desenho de UI baseado em LVGL no EEZ Studio, bem como a construção dos arquivos do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_3.png" style={{width:800, height:'auto'}}/></div>

- Na parte superior (da esquerda para a direita):

  - Save: Salvar o projeto

  - Check: Verificar o projeto

  - Build: Compilar o projeto e gerar arquivos

  - Settings: Modificar as configurações de parâmetros

  - Edit: Editar e desenhar na página principal

  - Run: Visualizar o efeito do desenho do design criado

  - Debug: Depurar a interface desenhada

- Pages: Gerenciar páginas. clique em **+** para adicionar uma nova página

- Widgets Structure: Gerenciamento de widgets, que permite gerenciar e selecionar seus widgets de forma intuitiva

- Variables: O mecanismo central de gerenciamento de dados que conecta widgets da UI, lógica de Fluxo e Action Script

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_2.png" style={{width:800, height:'auto'}}/></div>

- Properties: Usado para definir e visualizar os parâmetros de propriedade de objetos ou componentes  

- Components Palette: Fornece uma lista de componentes opcionais, que podem ser arrastados e soltos na interface de design para uso

- Styles: Definir e aplicar regras de estilo para fontes unificadas, a fim de manter a consistência  

- Fonts: Gerenciar os recursos de fontes usados no projeto e suas configurações de tamanho  

- Bitmaps: Importar e gerenciar arquivos de recursos bitmap, como imagens e ícones  

- Themes: Criar e aplicar temas de cores unificados e conjuntos de estilo visual  

- Groups: Combinar e gerenciar múltiplos componentes para permitir operação simultânea e controle em lote  

### Compilando Arquivos do Projeto

Este projeto é projetado para um **display eInk monocromático de 5,83" com resolução de 648*480**. Portanto, alguns parâmetros-chave precisam ser modificados.

**Passo 1.** Selecione **Settings** e, em seguida, na aba **General**, altere **Display width** e **Display height** para 648 e 480, respectivamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_1.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Modificar os arquivos gerados

- Renomeie o caminho da pasta **src/ui** para **src/EEZ_UI**; todos os arquivos de código gerados pelo EEZ Studio serão armazenados nesta pasta.

- Na aba **Build**, altere **LVGL include** para **lvgl.h**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_2.png" style={{width:800, height:'auto'}}/></div>

**Passo 3.** Compilar o projeto

- Volte para a interface **Main** e arraste **Hello World** para o centro da tela.
- Na aba **STYLE**, ajuste o tamanho ou a cor da fonte.
- Selecione a opção para compilar o projeto. Se nenhum erro for exibido no painel **OUTPUT**, o projeto foi compilado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_3.png" style={{width:800, height:'auto'}}/></div>

Em seguida, implante os arquivos de projeto compilados na **Arduino IDE** e depois faça o upload deles para o dispositivo de hardware correspondente para exibição.

### Configuração da Arduino IDE

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

**Passo 1.** Baixe e instale a [Arduino IDE](https://www.arduino.cc/en/software) e inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Baixar Arduino IDE</font></span></strong>
    </a>
</div><br />

**Passo 2.** Adicione o suporte à placa ESP32 à Arduino IDE.

Na Arduino IDE, vá em **File > Preferences** e adicione a seguinte URL ao campo **Additional Boards Manager URLs**:

```js
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Passo 3.** Instale o pacote da placa ESP32.

Navegue até **Tools > Board > Boards Manager**, procure por **esp32** e instale o pacote ESP32 da Espressif Systems.

**Passo 4.** Selecione a placa correta.

Vá em **Tools > Board > ESP32 Arduino** e selecione **XIAO_ESP32S3_PLUS**.

**Passo 5.** Conecte o seu reTerminal E Série ePaper Display ao computador usando um cabo USB-C.

**Passo 6.** Selecione a porta correta em **Tools > Port**.

### Importar a biblioteca Seeed_GFX

Usaremos a biblioteca Seeed_GFX, que fornece suporte abrangente para vários dispositivos de display da Seeed Studio.

**Passo 1.** Baixe a biblioteca Seeed_GFX do GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 2.** Instale a biblioteca adicionando o arquivo ZIP na Arduino IDE. Vá em **Sketch > Include Library > Add .ZIP Library** e selecione o arquivo ZIP baixado.

:::tip
Se você já tiver instalado anteriormente a biblioteca TFT_eSPI, talvez seja necessário removê-la temporariamente ou renomeá-la na pasta de bibliotecas da Arduino para evitar conflitos, pois a Seeed_GFX é um fork da TFT_eSPI com recursos adicionais para displays da Seeed Studio.
:::

**Passo 3.** Abra o sketch de exemplo de cores da biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Passo 4.** Crie um novo arquivo `driver.h`  

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)

- Insira as especificações do display que você está usando na página da ferramenta. Aqui, o display selecionado é a **tela ePaper monocromática de 5,83 polegadas（UC8179）**, e a placa controladora é a **XIAO ePaper Display Board(ESP32-S3) - EE04**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

- Copie o programa e salve-o em `driver.h`.

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.
Portanto, certifique-se do tipo de seus dispositivos ou componentes.
:::

### Fazer deploy para o Arduino

**Passo 1.** Adicione os arquivos `e1002_display.c` , `e1002_display.h`  `lv_conf.h` e a biblioteca lvgl. A placa deve ser selecionada como XIAO_ESP32S3.

- [Clique para obter os arquivos relevantes](https://wiki.seeedstudio.com/pt-br/epaper_ee04_eezstudio/#referência--recursos)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Adicione os arquivos de código EEZ_UI gerados à pasta de bibliotecas (O caminho de armazenamento padrão para bibliotecas do Arduino IDE é `C:\Users\Users_name\Documents\Arduino\Libraries`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

**Passo 3.** Envie o programa para o dispositivo.

<details>

<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

int32_t page_index;

e1002_driver_t e1002_driver;

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "UI Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  ui_init();
  page_index = SCREEN_ID_MAIN;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

}

void loop()
{
  lv_timer_handler();
  ui_tick();


  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

# Explicação do Código  

1. **Inclusão de Arquivos de Cabeçalho**: Inclui a biblioteca de display TFT, a biblioteca gráfica LVGL, o arquivo de definição da interface de UI (`ui.h`) e o driver do display de e-paper (`e1002_display.h`).  

2. **Variáveis Globais**:  
   - `page_index`: Usada para registrar o índice da página exibida atualmente.  
   - `e1002_driver`: Objeto driver para o display de e-paper.  

3. **Função setup() (Inicialização)**:  
   - Inicializa a comunicação serial (baud rate: 115200) para impressão de informações de depuração.  
   - Imprime as informações de versão da biblioteca LVGL (por exemplo, "Smart Home Dashboard - LVGL Vx.x.x").  
   - Inicializa o display de e-paper (`e1002_display_init`).  
   - Inicializa a interface de UI (`ui_init`).  
   - Define a página inicial como "Main Screen" (`SCREEN_ID_MAIN`) e a carrega.  
   - Atualiza o display de e-paper para mostrar a interface inicial.  

4. **Função loop() (Loop Principal)**:  
   - Processa timers e eventos do LVGL (`lv_timer_handler`).  
   - Processa tarefas agendadas para a interface de UI (`ui_tick`).  
   - Verifica se o display de e-paper precisa ser atualizado (`e1002_display_should_refresh`); se sim, executa a atualização e imprime um log.  
   - Faz o loop a cada 10 milissegundos para garantir a responsividade do sistema.  

</details>

Demonstração do efeito:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_3.jpg" style={{width:600, height:'auto'}}/></div>

## Design de UI  

Em seguida, demonstraremos um exemplo de UI criado com o EEZ Studio, para ilustrar ainda mais suas capacidades em design de interface.

Ao projetar interfaces LVGL com o EEZ Studio, você pode achar as seguintes ferramentas particularmente úteis:

- Um gerador de paleta de cores online para criar, ajustar e exportar esquemas de cores rapidamente: [Color](https://coolors.co/)  
- Uma ferramenta de paleta de cores online para encontrar e combinar esquemas de cores para web: [Color Chart](https://peiseka.com/)  
- Uma grande plataforma de biblioteca de ícones vetoriais para baixar e gerenciar ícones: [Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)  
- Um site de recursos de fontes gratuitas para navegar e baixar fontes utilizáveis comercialmente: [Font](https://fonts.google.com/)  

### Introdução ao Desenho da UI  

- Imagem do efeito:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_1_1.png" style={{width:800, height:'auto'}}/></div>  

Esta UI é composta por quatro componentes:

- Label  
- Linha  
- Checkbox  
- Imagem  

**Passo 1.** Alterar a cor de fundo da tela  

A cor de fundo padrão é branca; você pode alterá-la de acordo com suas preferências.  

- Selecione a tela para a qual você deseja alterar a cor de fundo.  

- Marque a opção **Color** e selecione o código de cor hexadecimal de sua preferência.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_2_1.png" style={{width:800, height:'auto'}}/></div>  

**Passo 2.** Adicionar um Label  

- Arraste o componente **Label** para a tela e selecione o tamanho e a cor da fonte desejados.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_label_1_2.png" style={{width:800, height:'auto'}}/></div>  

**Passo 3.** Adicionar uma linha  

- Arraste o componente **Line** para a tela e defina os pontos inicial e final na seção **Points** para determinar o comprimento e a posição da linha. Pontos de referência: 0,0 0,0 0,0 0,0,648,0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_line_1_2.png" style={{width:800, height:'auto'}}/></div>

**Passo 4.** Adicionar bitmaps  

- Clique na opção **Bitmaps** na barra lateral direita e adicione as imagens necessárias.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_1_2.png" style={{width:800, height:'auto'}}/></div>  

- Nomeie as imagens conforme necessário.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_2_2.png" style={{width:800, height:'auto'}}/></div>  

- Arraste e solte o componente **Image** na tela e use a opção **Scale** para definir seu tamanho.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_3_2.png" style={{width:800, height:'auto'}}/></div>  

**Passo 5.** Adicionar um Checkbox  

- Arraste o componente **Checkbox** para a tela, insira o conteúdo e ajuste o tamanho e a cor da fonte.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_checkout_1_2.png" style={{width:800, height:'auto'}}/></div>  

### Deploy e Demonstração  

- Deploy  
  - Adicione os arquivos de cabeçalho: `driver.h`, `e1002_display.c`, `e1002_display.h` e `lv_conf.h`.  
  - Adicione os arquivos **EEZ_UI** à pasta de bibliotecas do Arduino IDE.  

Código de referência completo: [EEZ_UI.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)  

<details>
<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY1 = 2;
const int BUTTON_KEY2 = 3;
const int BUTTON_KEY3 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

unsigned long lastDebounceTime0 = 0;
unsigned long lastDebounceTime1 = 0;
unsigned long lastDebounceTime2 = 0;
const unsigned long debounceDelay = 120;

e1002_driver_t e1002_driver;

unsigned long lastFullRefreshTime = 0;
const unsigned long fullRefreshCooldown = 1500;

bool buttonPressed(int pin, bool &lastState, unsigned long &lastDebounceTime)
{
  bool currentState = digitalRead(pin);

  if (lastState == HIGH && currentState == LOW &&
      (millis() - lastDebounceTime) > debounceDelay)
  {
    lastDebounceTime = millis();
    lastState = currentState;
    return true;
  }

  lastState = currentState;
  return false;
}

void switchPage(ScreensEnum targetScreen, const char *pageName)
{

  if (millis() - lastFullRefreshTime < fullRefreshCooldown)
  {
    Serial.println("[Skip] Refresh cooling down...");
    return;
  }

  Serial.printf("Switching to %s ...\n", pageName);

  e1002_driver.epd->fillScreen(TFT_WHITE);
  e1002_driver.epd->update();

  loadScreen(targetScreen);

  e1002_display_refresh(&e1002_driver);

  lastFullRefreshTime = millis();
  Serial.printf("[OK] %s refreshed.\n", pageName);
}

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "Smart Home Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);
  pinMode(BUTTON_KEY3, INPUT_PULLUP);

  ui_init();
  page_index = SCREEN_ID_SMART;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

  Serial.println("Boot: Main Screen");
}

void loop()
{0
  lv_timer_handler();
  ui_tick();

  if (buttonPressed(BUTTON_KEY1, lastKey0State, lastDebounceTime0))
  {
    page_index = SCREEN_ID_SMART;
    switchPage((ScreensEnum)page_index, "Main Screen");
  }

  if (buttonPressed(BUTTON_KEY2, lastKey1State, lastDebounceTime1))
  {
    page_index = SCREEN_ID_INDUSTRY;
    switchPage((ScreensEnum)page_index, "Plant Screen");
  }

  if (buttonPressed(BUTTON_KEY3, lastKey2State, lastDebounceTime2))
  {
    page_index = SCREEN_ID_GAME;
    switchPage((ScreensEnum)page_index, "Workstation Screen");
  }

  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

</details>

- Demonstração do efeito:<br/>
Três diferentes telas de UI são exibidas aqui, e a **XIAO ePaper Display Board (ESP32-S3) – EE04** utiliza seus três botões integrados para alternar entre essas telas. A tela correspondente para cada botão é:<br/>
KEY1: Inteligente<br/>
KEY2: Indústria<br/>
KEY3: Jogo

<div class="table-center">
<table align="center">
    <tr>
        <th>Inteligente</th>
        <th>Indústria</th>
        <th>Jogo</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

## Referência e Recursos

- Arquivos relacionados ao driver (Clique para baixar)
  - [e1002_display.c](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
  - [e1002_display.h](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
  - [lv_conf.h](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)

- Carcaça 3D de 5,83"
  - [parte frontal](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step)
  - [parte traseira](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
