---
description: Crie um painel de status simples com LVGL em dispositivos ePaper Seeed reTerminal E Series usando PlatformIO, Seeed_GFX e LVGL.
title: Trabalhar com LVGL
keywords:
  - display ePaper
  - LVGL
  - Seeed_GFX
  - PlatformIO
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_lvgl
sidebar_position: 6
last_update:
  date: 06/30/2026
  author: Citric
---

# Trabalhar com LVGL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/262.jpg" style={{width:1000, height:'auto'}}/></div>

LVGL é uma biblioteca gráfica de código aberto para dispositivos embarcados. Ela fornece componentes de UI prontos, como rótulos, painéis, barras e ferramentas de layout, para que você possa construir uma interface estruturada em C/C++ sem desenhar cada pixel manualmente.

Este guia cria um **painel de status LVGL em ePaper** simples com PlatformIO. O exemplo usa o **reTerminal E1001** como alvo padrão e mantém ambientes PlatformIO separados para reTerminal E1002, E1003 e E1004.

O projeto renderiza um painel estático com:

- um título,
- um cartão de status do dispositivo,
- um cartão de status de rede,
- um cartão de bateria de demonstração.

Para displays ePaper, esse fluxo de trabalho de UI estática é um bom ponto de partida porque a tela só precisa ser atualizada quando as informações exibidas mudam.

:::tip Teste os demos sem configurar um ambiente de desenvolvimento
Se você quiser visualizar rapidamente os resultados do projeto ou testar o firmware de demonstração básico antes de configurar um ambiente de desenvolvimento, abra o **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Você pode escolher um dispositivo reTerminal E Series compatível e gravar o firmware de demonstração diretamente a partir de um navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

## Hardware compatível

Prepare um dos seguintes dispositivos reTerminal E Series. O projeto PlatformIO neste guia usa o **reTerminal E1001** como ambiente padrão.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">ePaper monocromático de 7,5"<br/>800 x 480</td>
      <td align="center">ePaper Spectra 6 cores de 7,3"<br/>800 x 480</td>
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

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">ePaper monocromático de 10,3"<br/>1872 x 1404</td>
      <td align="center">ePaper Spectra 6 cores de 13,3"<br/>1200 x 1600</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Como o projeto funciona

Este exemplo tem duas partes principais:

- **LVGL** cria os objetos de UI, como rótulos, cartões e barras.
- **Seeed_GFX** inicializa o display ePaper, recebe os pixels renderizados e atualiza o painel físico.

O projeto mantém essas duas partes em arquivos separados:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Arquivo</th>
      <th>Finalidade</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Define a placa PlatformIO, bibliotecas, flags de compilação e ambientes de hardware.</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>Seleciona o arquivo de driver Seeed_GFX correto para o alvo de hardware ativo.</td>
    </tr>
    <tr>
      <td><code>include/driver_e1001.h</code> até <code>include/driver_e1004.h</code></td>
      <td>Armazena a combinação placa-tela Seeed_GFX para cada modelo reTerminal E Series.</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>Configura os recursos, profundidade de cor e fontes do LVGL.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Inicializa Arduino, Seeed_GFX, LVGL, o buffer de display e o fluxo de atualização do ePaper.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Cria o layout do painel de status LVGL.</td>
    </tr>
  </table>
</div>

## Etapa 1: Instalar o PlatformIO

Este guia usa o PlatformIO como fluxo de trabalho do projeto. O PlatformIO mantém a configuração da placa, bibliotecas e arquivos-fonte juntos em uma pasta, o que torna o projeto LVGL mais fácil de compilar e manter.

Se o PlatformIO ainda não estiver instalado, siga as etapas de configuração em [Trabalhar com PlatformIO](/pt-br/epaper_work_with_platformio) e depois volte a este guia.

Após a instalação, abra o **Visual Studio Code**. Você deverá ver o ícone do PlatformIO na barra de atividades à esquerda.

## Etapa 2: Baixar o projeto de exemplo

O exemplo de painel de status LVGL em ePaper está disponível no repositório oficial do reTerminal E Series:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong>
    </a>
</div><br />

Baixe o repositório para o seu computador e depois abra esta pasta:

```text
OSHW-reTerminal-Series-E-D/examples/official/LVGLePaperStatusPanel
```

O projeto de exemplo contém estes arquivos principais:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Arquivo</th>
      <th>O que ele faz</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Define os ambientes PlatformIO para E1001, E1002, E1003 e E1004.</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>Seleciona a configuração de driver ePaper correta para o ambiente de compilação ativo.</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>Configura os recursos e fontes do LVGL usados por esta demonstração.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Inicializa o display, LVGL, o buffer de renderização e o fluxo de atualização do ePaper.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Cria a interface do painel de status exibida no display ePaper.</td>
    </tr>
  </table>
</div>

## Etapa 3: Abrir o projeto no PlatformIO

**Etapa 1.** Abra o **Visual Studio Code**.

**Etapa 2.** Clique no ícone **PlatformIO** na barra de atividades à esquerda.

**Etapa 3.** Clique em **PIO Home > Open**.

**Etapa 4.** Clique em **Open Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/263.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 5.** Selecione a pasta `LVGLePaperStatusPanel`.

**Etapa 6.** Aguarde o PlatformIO carregar o projeto e instalar as bibliotecas necessárias.

## Etapa 4: Selecionar o ambiente de hardware

Abra `platformio.ini` na raiz do projeto. O ambiente padrão é `reterminal_e1001`.

```ini
[platformio]
default_envs = reterminal_e1001
```

Para o E1001, você pode manter a configuração padrão. Para outros dispositivos, altere `default_envs` para o ambiente correspondente:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Dispositivo</th>
      <th>Ambiente PlatformIO</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>reterminal_e1001</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>reterminal_e1002</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>reterminal_e1003</code></td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>reterminal_e1004</code></td>
    </tr>
  </table>
</div>

Você também pode compilar um ambiente específico a partir do terminal do PlatformIO sem alterar `default_envs`.

## Etapa 5: Compilar e enviar o demo

Conecte o dispositivo reTerminal E Series ao seu computador com um cabo USB.

Para compilar o firmware padrão do E1001, execute:

```bash
pio run
```

Para compilar um alvo específico, adicione `-e` e o nome do ambiente. Por exemplo:

```bash
pio run -e reterminal_e1001
```

Para enviar o firmware para o dispositivo, execute:

```bash
pio run -e reterminal_e1001 --target upload
```

Após o envio, abra o monitor serial:

```bash
pio device monitor -b 115200
```

Quando a demonstração é iniciada corretamente, o monitor serial mostra:

```text
Seeed ePaper LVGL status panel starting.
LVGL status panel rendered.
```

O display de ePaper é atualizado uma vez e mostra o painel de status LVGL.

## Etapa 6: Personalize e aprenda com a interface LVGL

Depois que a demonstração for executada com sucesso, você pode começar a modificá-la como um pequeno projeto de aprendizado de LVGL. Os dois arquivos mais importantes são:

<div class="table-center">
  <table align="center">
    <tr>
      <th>File</th>
      <th>Comece aqui quando quiser</th>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Alterar os valores passados para a interface, como status do dispositivo, status da rede e porcentagem da bateria.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Alterar o título da tela, o layout dos cards, fontes, cores, rótulos e widgets LVGL.</td>
    </tr>
  </table>
</div>

### Alterar os valores exibidos

Abra `src/main.cpp` e encontre esta linha dentro de `setup()`:

```cpp
ui_status_panel_set_status("Ready", "Wi-Fi Standby", 76);
```

Essa função atualiza os três valores dinâmicos na tela:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Parameter</th>
      <th>Significado</th>
      <th>Exemplo</th>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>O texto de status do dispositivo mostrado no card Device.</td>
      <td><code>"Ready"</code></td>
    </tr>
    <tr>
      <td><code>network</code></td>
      <td>O texto de status da rede mostrado no card Network.</td>
      <td><code>"Wi-Fi Standby"</code></td>
    </tr>
    <tr>
      <td><code>battery_percent</code></td>
      <td>O valor da barra de bateria. A função o mantém entre 0 e 100.</td>
      <td><code>76</code></td>
    </tr>
  </table>
</div>

Por exemplo, altere para:

```cpp
ui_status_panel_set_status("Online", "Wi-Fi Connected", 95);
```

Em seguida, compile e envie o projeto novamente:

```bash
pio run -e reterminal_e1001 --target upload
```

### Alterar o título e os nomes dos cards

Abra `src/ui_status_panel.cpp`. O título principal é criado em `ui_status_panel_create()`:

```cpp
lv_label_set_text(title, "Seeed ePaper LVGL Panel");
```

Você pode alterar o texto do título:

```cpp
lv_label_set_text(title, "My First LVGL Dashboard");
```

Cada card é criado com `create_card()`. Por exemplo:

```cpp
lv_obj_t *status_card = create_card(screen, "Device", status_x, status_y, status_w, status_h, lv_palette_main(LV_PALETTE_RED));
lv_obj_t *network_card = create_card(screen, "Network", network_x, network_y, network_w, network_h, lv_palette_main(LV_PALETTE_BLUE));
lv_obj_t *battery_card = create_card(screen, "Battery Demo", battery_x, battery_y, battery_w, battery_h, lv_palette_main(LV_PALETTE_GREEN));
```

O segundo parâmetro é o título do card. Você pode alterar `"Device"`, `"Network"` e `"Battery Demo"` para corresponder à sua própria aplicação.

### Alterar as cores

A demonstração usa cores da paleta LVGL:

```cpp
lv_palette_main(LV_PALETTE_RED)
lv_palette_main(LV_PALETTE_BLUE)
lv_palette_main(LV_PALETTE_GREEN)
```

Para modelos de ePaper coloridos, como reTerminal E1002 e reTerminal E1004, `src/main.cpp` mapeia as cores LVGL para a paleta de cores do ePaper. A paleta de exemplo inclui branco, preto, vermelho, amarelo, verde e azul.

Para modelos de ePaper monocromáticos, como reTerminal E1001 e reTerminal E1003, a mesma interface é convertida para preto e branco pela luminosidade. Cores mais escuras se tornam pretas e cores mais claras se tornam brancas.

Isso significa que você pode usar o mesmo código de interface LVGL em todos os quatro dispositivos, enquanto o driver de display converte os pixels finais para o hardware selecionado.

### Alterar o layout

A demonstração usa `EPAPER_LVGL_HOR_RES` e `EPAPER_LVGL_VER_RES` de `platformio.ini` para decidir o tamanho da tela. Em `src/ui_status_panel.cpp`, esses valores são usados aqui:

```cpp
const int32_t screen_width = EPAPER_LVGL_HOR_RES;
const int32_t screen_height = EPAPER_LVGL_VER_RES;
const bool is_landscape = screen_width >= screen_height;
```

O layout então escolhe um layout horizontal para telas mais largas e um layout vertical para telas mais altas. É por isso que o mesmo exemplo pode ser executado tanto em dispositivos 800 x 480 quanto em painéis de ePaper maiores.

Para uma primeira alteração simples, ajuste os valores de espaçamento:

```cpp
const int32_t margin = max_i32(32, screen_width / 20);
const int32_t gap = max_i32(20, screen_width / 40);
```

Aumentar `margin` deixa mais espaço vazio ao redor das bordas da tela. Aumentar `gap` deixa mais espaço entre os cards.

### Adicione seus próprios dados

O valor da bateria nesta demonstração é um dado de interface de exemplo, então a tela o mostra como um valor de demonstração. Para conectar dados reais da aplicação, mantenha a função de interface e passe seus próprios valores para ela:

```cpp
int battery_percent = 88;
ui_status_panel_set_status("Running", "Wi-Fi Connected", battery_percent);
```

Para projetos com ePaper, um fluxo de trabalho prático é:

**Etapa 1.** Ler ou calcular os dados mais recentes na sua aplicação.

**Etapa 2.** Passar os novos valores para `ui_status_panel_set_status()`.

**Etapa 3.** Atualizar o display de ePaper quando o conteúdo precisar mudar.

A demonstração renderiza uma vez em `setup()` porque o conteúdo da tela é estático. Para aplicações como um painel de sensores, calendário ou monitor de status, você pode atualizar os valores e atualizar o painel quando os dados exibidos mudarem.

## Recursos

- **[Docs]** [Documentação LVGL](https://docs.lvgl.io/)
- **[GitHub]** [LVGL](https://github.com/lvgl/lvgl)
- **[GitHub]** [Biblioteca Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)
- **[GitHub]** [Exemplo de painel de status LVGL ePaper](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel)
- **[Tool]** [Hub de firmware reTerminal E-Series](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)
- **[Wiki]** [Trabalhar com PlatformIO](/pt-br/epaper_work_with_platformio)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="table-center">
  <div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>
  <div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
