---
description: Crie interfaces profissionais baseadas em LVGL para produtos ePaper da Seeed com o EEZ Studio e depois faça o deploy usando a IDE do Arduino – funciona em toda a linha reTerminal E e na XIAO ePaper Display Board (EE04).
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
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

Este guia conduz você pelo processo de projetar uma interface de usuário profissional com a ferramenta de design visual [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/), gerar código LVGL e implantá‑lo em um produto ePaper da Seeed por meio da IDE do Arduino. O fluxo é o mesmo para todas as placas compatíveis — as únicas diferenças são a resolução do display e a constante de configuração do driver, que apresentamos em abas.

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

EEZ Studio é um ambiente moderno de programação visual e design de UI criado originalmente para instrumentos de teste e medição e dispositivos embarcados. Ele combina design de GUI por arrastar e soltar, scripts e ferramentas de integração de dispositivos, permitindo que desenvolvedores, engenheiros e makers criem rapidamente interfaces profissionais sem começar do zero.

Em resumo, o EEZ Studio atua como uma ponte entre hardware e software, permitindo que você projete, faça protótipos e faça o deploy de experiências de usuário com mais eficiência.

### Por que usar o EEZ Studio?

- **Design visual de interface** — crie UIs complexas com um editor WYSIWYG.
- **Prototipagem rápida** — teste e valide rapidamente ideias de design.
- **Multiplataforma** — crie aplicativos que rodam em vários sistemas operacionais e alvos embarcados.
- **Integração de hardware** — conecte diretamente instrumentos de laboratório, dispositivos IoT e placas personalizadas.
- **Código aberto** — conjunto de ferramentas orientado pela comunidade com suporte premium opcional.

### EEZ Studio vs. SquareLine Studio

Ambos são ferramentas de design de GUI, mas têm públicos‑alvo ligeiramente diferentes:

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
            <th>Usuários‑alvo</th>
            <td>Engenheiros, desenvolvedores de produto, makers, projetistas de instrumentos de teste/laboratório</td>
            <td>Desenvolvedores de UI embarcada, hobbistas, projetistas de produtos IoT</td>
        </tr>
        <tr>
            <th>Integração de hardware</th>
            <td>Integração direta com instrumentos, dispositivos de medição, automação</td>
            <td>Focado na geração de UI, com menos integração de dispositivos externos</td>
        </tr>
        <tr>
            <th>Código aberto</th>
            <td>Orientado pela comunidade, transparente, extensível (suporte premium disponível)</td>
            <td>Código fechado, produto comercial com licenciamento</td>
        </tr>
        <tr>
            <th>Fluxo de trabalho</th>
            <td>Prototipe, simule e controle dispositivos reais em um único ambiente</td>
            <td>Principalmente gera código de UI para ser compilado em um projeto embarcado</td>
        </tr>
    </tbody>
</table>

## Etapa 1: Instalar o EEZ Studio

Baixe o EEZ Studio para o seu sistema operacional a partir [do site oficial](https://www.envox.eu/studio/studio-introduction/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## Etapa 2: Criar um projeto LVGL

Na parte superior da interface do EEZ Studio, clique em **CREATE**. Selecione o template **LVGL** à esquerda:

- **Name** — dê um nome ao seu projeto (usaremos `EEZ_UI` neste artigo).
- **LVGL Version** — escolha `9.x` na lista suspensa.
- **Location** — escolha onde salvar os arquivos do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### Configurações do projeto

Clique no ícone ⚙️ na barra de ferramentas para abrir as Configurações do Projeto.

Em **General → Build**:

- **LVGL include**: insira `lvgl.h` para que o código gerado faça referência ao LVGL corretamente durante a compilação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

Em **General → Display**, defina a resolução **para o seu hardware**:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(O display de 7,5" mono no E1001 e o Spectra 6 de 7,3" no E1002 compartilham a mesma resolução de 800×480.)

</TabItem>
<TabItem value="ee04" label="EE04 + 5,83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(Ajuste os valores para corresponder à tela ePaper Seeed que você conectou ao EE04. O exemplo abaixo usa a tela monocromática de 5,83" 648×480.)

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

## Etapa 3: Projetar a UI

O design da UI determina diretamente a experiência do usuário. O EEZ Studio permite montar rapidamente interfaces arrastando e soltando componentes e usando **Styles**, **Fonts**, **Bitmaps**, **Themes** e **Groups** para controlar o resultado visual.

Recursos online recomendados:

- [Coolors](https://coolors.co/) — gerador de paletas de cores
- [PeisekA](https://peiseka.com/) — tabela de cores
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — biblioteca de ícones
- [Google Fonts](https://fonts.google.com/) — fontes gratuitas

A barra lateral direita:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- **Styles** — atributos visuais para unificar e reutilizar elementos da interface.
- **Bitmaps** — planos de fundo, ícones, logotipos.
- **Fonts** — renderização de texto e suporte multilíngue.
- **Themes** — claro/escuro e outros estilos de alto nível.
- **Groups** — auxiliares de layout.

### Layout de exemplo (Hello World + Panel + Image + Line + Label)

Neste tutorial vamos construir uma página inicial simples a partir de cinco componentes:

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 4.** Adicione uma **Line** a partir do grupo Visualiser e configure seus **Points**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 5.** Adicione uma **Label**, escolha a cor e depois adicione fontes pelo painel **Fonts** à direita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## Etapa 4: Gerar código

Depois que o design estiver concluído:

1. **Save** — clique no ícone de disquete ao lado de **OPEN**.
2. **Preview** — clique em **Run** para iniciar o simulador e pré‑visualizar a UI.
3. **Compile / Build** — clique no ícone ✓ para verificar erros e depois na chave inglesa para gerar o código da UI, os dados de imagem e os dados de fonte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

Uma mensagem verde **Build successful** confirma a geração do código. A saída vai para a pasta **`src/ui`** do seu projeto (você pode renomeá-la para `src/EEZ_UI` se preferir).

## Etapa 5: Configurar a IDE Arduino

Para implantar a saída do EEZ Studio no seu dispositivo Seeed ePaper, configure a IDE Arduino com suporte a ESP32.

:::tip
Se esta é a sua primeira vez usando Arduino, consulte primeiro [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

1. **Instale** a [IDE Arduino](https://www.arduino.cc/en/software).

   <div class="download_arduino_container" style={{textAlign: 'center'}}>
       <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
         <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
       </a>
   </div><br />

2. **Adicione o suporte à placa ESP32**: em **File → Preferences**, adicione em **Additional Boards Manager URLs**:

   ```text
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```

3. **Instale o pacote ESP32**: **Tools → Board → Boards Manager**, procure por `esp32` e instale o pacote Espressif Systems.

4. **Selecione a placa** para o seu hardware:

   <Tabs groupId="eez-hardware">
   <TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3**

   </TabItem>
   <TabItem value="ee04" label="EE04 + 5.83&quot; mono">

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3_PLUS**

   Também ative **OPI PSRAM** no menu **Tools**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **Conecte** o dispositivo via USB-C e selecione a porta serial correta em **Tools → Port**.

## Etapa 6: Instalar a biblioteca Seeed_GFX

Usamos a biblioteca Seeed_GFX, que fornece suporte abrangente para dispositivos de display da Seeed.

1. Baixe do GitHub:

   <div class="github_container" style={{textAlign: 'center'}}>
       <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
       <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
       </a>
   </div><br />

2. **Sketch → Include Library → Add .ZIP Library** e selecione o ZIP baixado.

   :::note
   Se você instalou `TFT_eSPI` anteriormente, remova-o temporariamente ou renomeie-o na pasta de bibliotecas do Arduino para evitar conflitos — `Seeed_GFX` é um fork de `TFT_eSPI` com recursos adicionais para displays Seeed.
   :::

3. **Abra o exemplo de sketch correto**:

   - Para displays coloridos: **File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**
   - Para displays monocromáticos: **File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**

4. **Crie um arquivo `driver.h`** na mesma pasta do seu sketch (use a seta de nova aba na IDE Arduino).

5. Vá para a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), selecione seu hardware, copie a configuração gerada e cole em `driver.h`. O conteúdo exato varia conforme o hardware:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

Para **reTerminal E1001** (7,5" preto e branco, UC8179):

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

Para **reTerminal E1002** (7,3" totalmente colorido, UC8179C):

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

Para **EE04 + 5,83" monocromático (UC8179)**:

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

Se você trocar para um tamanho de tela diferente no EE04, gere novamente o `driver.h` a partir da ferramenta de configuração e mantenha a linha `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04`.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada — verifique cuidadosamente a combinação tela + placa controladora.
:::

</TabItem>
</Tabs>

## Etapa 7: Implantar o projeto EEZ Studio no Arduino

Adicione a saída do EEZ Studio e os auxiliares do driver de plataforma à pasta do seu sketch e, em seguida, faça o upload.

### Arquivos de driver necessários (todo o hardware)

Baixe estes arquivos auxiliares e coloque-os ao lado do seu `.ino`:

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

Para o EE04 você também precisa de `lv_conf.h` e da biblioteca LVGL — veja a aba EE04 abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

### Copiar a saída EEZ_UI

Copie a pasta `EEZ_UI` gerada (de `src/` do seu projeto EEZ Studio) para a pasta de bibliotecas do Arduino (normalmente `~/Documents/Arduino/Libraries`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

### Sketch e upload

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

Sketch de referência — três botões (KEY0/KEY1/KEY2) alternam entre três páginas: **HOME**, **Workstation**, **Plant**.

Código de referência completo: [E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

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

Notas:

- `e1002_display_init()` inicializa o hardware do display de e-ink.
- `pinMode(..., INPUT_PULLUP)` configura os pinos dos botões com resistores de pull-up internos.
- `ui_init()` e `loadScreen()` inicializam o LVGL e carregam uma tela específica.
- `lv_timer_handler()` processa timers e animações do LVGL.
- Os blocos `if (lastKeyXState == HIGH && currentKeyXState == LOW)` fazem o debounce de uma borda HIGH→LOW e atualizam a página.
- `e1002_display_should_refresh()` / `e1002_display_refresh()` gerenciam a atualização do e-ink sob demanda.

#### Telas resultantes

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página inicial</th>
      <th>Página da estação de trabalho</th>
      <th>Página de fotos</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

Para o EE04 você também precisa de:

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- A biblioteca LVGL instalada na IDE Arduino

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

Copie a pasta **EEZ_UI** gerada para `~/Documents/Arduino/Libraries`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

Sketch de referência — três botões integrados (KEY1/KEY2/KEY3 = pinos 2 / 3 / 5) alternam entre três páginas: **Smart**, **Industry**, **Game**.

Código de referência completo: [EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)

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
{
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

#### Telas resultantes

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>
</div>

</TabItem>
</Tabs>

## Referências e recursos

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)
- [Projeto de referência — E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- [Projeto de referência — EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)
- Gabinete 3D para 5,83" — [frente](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step) / [traseira](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

</TabItem>
</Tabs>

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
