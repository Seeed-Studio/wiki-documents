---
description: Guia de referência para controlar qualquer produto Seeed ePaper compatível a partir da IDE Arduino - configuração da IDE Arduino, instalação da biblioteca Seeed_GFX, geração de driver.h. Análises detalhadas específicas de hardware estão em cada cookbook de produto.
title: Trabalhar com Arduino
keywords:
  - Display ePaper
  - Arduino
  - Seeed_GFX
  - GxEPD2
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_arduino
sidebar_position: 4
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/epaper_work_with_arduino/
updatedAt: '2026-05-30'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com Arduino

:::tip Experimente demos sem configurar um ambiente de desenvolvimento
Se você quiser visualizar rapidamente os resultados do projeto ou testar o firmware demo básico antes de configurar um ambiente de desenvolvimento, abra o **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Você pode escolher um dispositivo reTerminal E Series compatível e gravar o firmware de demonstração diretamente a partir de um navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

Esta página é o **manual de referência** para controlar qualquer produto Seeed ePaper compatível a partir da IDE Arduino. Ela cobre as partes que são idênticas em todo o hardware:

1. Configurar a IDE Arduino e o suporte à placa ESP32.
2. Instalar a biblioteca **Seeed_GFX** — nosso fork mantido de `TFT_eSPI` com suporte de primeira classe para Seeed ePaper.
3. Gerar um `driver.h` para a combinação da sua placa + tela usando a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).
4. (Opcionalmente) usar a biblioteca de terceiros **GxEPD2** como driver alternativo.

Para o **passo a passo completo de “abrir a caixa, gravar um hello world, acender sensores e botões”**, vá direto ao **cookbook** do seu hardware específico — essas páginas reutilizam esta referência para o boilerplate e depois adicionam exemplos específicos do produto (periféricos, trechos de código, solução de problemas):

- [reTerminal E Series — ePaper Display cookbook](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino) — cobre reTerminal E1001 / E1002 / E1003 / E1004 com exemplos Hello World usando tanto `Seeed_GFX` quanto `GxEPD2`.
- [reTerminal E Series — Onboard Peripherals cookbook](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals) — exemplos completos de periféricos para os mesmos modelos: LED, buzzer, três botões de usuário, sensor SHT4x, monitor de bateria, cartão microSD e renderização de imagem BMP a partir do SD.
- [reTerminal E Series — RTC, Low Power, Audio & Touch cookbook](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals_2) — gerenciamento de tempo com RTC, deep sleep / light sleep, gravação com microfone I2S e desenho com toque capacitivo (apenas E1003).
- Mais cookbooks (Painel XIAO 7,5", placas driver EE0x, …) serão lançados à medida que os produtos correspondentes forem adicionados à plataforma.

Se você só precisa do boilerplate (um `Hello World` em um produto novinho em folha ainda não coberto por um cookbook), esta página por si só é suficiente.

## Hardware compatível

Todo produto Seeed ePaper na [página principal do hub](https://wiki.seeedstudio.com/pt-br/seeed_epaper_displays) que tenha a coluna **Arduino** marcada pode seguir este fluxo de trabalho. Em resumo:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Linha de produto</th>
      <th>MCU</th>
      <th>Observações</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3 (integrado)</td>
      <td>Cookbook disponível — veja o link acima</td>
    </tr>
    <tr>
      <td><strong>EE02 / EE03 / EE04 / EE05</strong></td>
      <td>XIAO ESP32-S3 / ESP32-S3 Plus</td>
      <td>Use a Configuration Tool com a sua escolha de tela</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05</strong></td>
      <td>XIAO nRF52840 Plus</td>
      <td>Escolha o pacote de placa nRF52840; em vez disso, é voltado principalmente para OpenDisplay (BLE)</td>
    </tr>
    <tr>
      <td><strong>Painel ePaper XIAO 7,5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>Veja o [guia dedicado Painel XIAO 7,5" + Arduino](https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_arduino)</td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7,5" (OG)</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td>Veja o [guia dedicado Kit DIY TRMNL + Arduino](https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_arduino)</td>
    </tr>
    <tr>
      <td><strong>Placa de Expansão XIAO eInk v2 / Placa Breakout ePaper</strong></td>
      <td>Qualquer XIAO que você conectar</td>
      <td>Use a Configuration Tool com a sua escolha de XIAO + tela</td>
    </tr>
  </table>
</div>

## Etapa 1: Configurar a IDE Arduino

Para controlar qualquer produto Seeed ePaper rodando em um ESP32 / ESP32-S3 / ESP32-C3 a partir do Arduino, você precisa da IDE Arduino mais o suporte à placa ESP32.

:::tip
Se esta é a sua primeira vez usando Arduino, veja primeiro [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

**Etapa 1.** Baixe e instale a [IDE Arduino](https://www.arduino.cc/en/software).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Etapa 2.** Adicione o suporte à placa ESP32. Na IDE Arduino vá em **File → Preferences** e adicione ao campo **Additional Boards Manager URLs**:

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Etapa 3.** Instale o pacote de placas ESP32: **Tools → Board → Boards Manager**, procure por `esp32`, instale o pacote da Espressif Systems.

**Etapa 4.** Escolha a placa correta para o seu hardware:

- **reTerminal E Series / EE04 com EE04 plus / Kit DIY TRMNL**: `XIAO_ESP32S3_PLUS`
- **EE02 / EE03 / EE04 / EE05 padrão / EN04 (caminho Arduino)**: `XIAO_ESP32S3` (ou `XIAO_nRF52840` para placas baseadas em nRF52840)
- **Painel ePaper XIAO 7,5"**: `XIAO_ESP32C3`

Se você não tiver certeza de qual escolher, o cookbook do seu produto informará.

**Etapa 5.** Conecte seu hardware via USB-C e selecione a porta correta em **Tools → Port**.

**Etapa 6.** Para placas ESP32-S3 (a maioria das placas reTerminal E Series e EE0x) ative a PSRAM:

**Tools → PSRAM → OPI PSRAM**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/open_opi_psram.jpg" style={{width:1000, height:'auto'}}/></div>

## Etapa 2: Instalar a biblioteca Seeed_GFX

Seeed_GFX é um fork de `TFT_eSPI` com suporte de primeira classe para displays Seeed. É a biblioteca recomendada para toda a nossa linha ePaper.

**Etapa 1.** Baixe a biblioteca Seeed_GFX no GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
    </a>
</div><br />

**Etapa 2.** **Sketch → Include Library → Add .ZIP Library** e selecione o ZIP baixado.

:::note
Se você instalou `TFT_eSPI` anteriormente, remova-o temporariamente ou renomeie-o na pasta de bibliotecas do Arduino para evitar conflitos.
:::

## Etapa 3: Gerar `driver.h` para o seu hardware

Todo sketch de exemplo em `Seeed_GFX` procura por um `driver.h` local na pasta do sketch. Esse header informa à biblioteca qual placa, controlador de tela e mapeamento de pinos usar. A Configuration Tool o gera para você.

**Etapa 1.** Escolha um sketch de exemplo:

- **Telas monocromáticas**: **File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**
- **Telas coloridas**: **File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**

**Etapa 2.** Na mesma pasta do sketch, crie um novo arquivo chamado `driver.h` (use a seta de nova aba na IDE Arduino).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Etapa 3.** Abra a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) e escolha o seu hardware. Cada dispositivo pré-configurado produz o valor correto de `BOARD_SCREEN_COMBO` (e quaisquer defines extras, por exemplo `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Etapa 4.** Copie o conteúdo gerado e cole no seu `driver.h`. Valores comuns:

<Tabs groupId="arduino-board">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

```cpp
#define BOARD_SCREEN_COMBO 522 // reTerminal E1003 (ED103TC2)
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

```cpp
#define BOARD_SCREEN_COMBO 523 // reTerminal E1004 (T133A01)
```

</TabItem>
<TabItem value="ee04-583" label="EE04 + 5.83&quot; mono">

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
</Tabs>

Para qualquer outra combinação, **sempre confie na saída da Configuration Tool** — escolha sua placa XIAO (ou `None` se for um kit integrado reTerminal/EN04) mais a tela que você conectou.

**Etapa 5.** Envie o sketch para o seu hardware. Na primeira energização pode aparecer uma atualização parcial; as atualizações subsequentes exibem o exemplo completo de Hello World.

## Etapa 4 (opcional): Usar GxEPD2 em vez disso

`Seeed_GFX` é a biblioteca recomendada, mas se você já tem uma base de código baseada em `GxEPD2`, também pode controlar o Seeed ePaper com ela. `GxEPD2` é uma biblioteca popular da comunidade que cobre uma ampla gama de displays e-paper.

Para instalá-la manualmente a partir do GitHub com o suporte mais recente a dispositivos:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
    </a>
</div><br />

**Sketch → Include Library → Add .ZIP Library** e selecione o ZIP baixado. Os cookbooks dos produtos incluem exemplos concretos de `GxEPD2` quando aplicável (por exemplo, o [cookbook da reTerminal E Series](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino) mostra renderização em cores completas no E1002).

## Para onde ir em seguida — Cookbooks

Esta página intencionalmente para no código padrão. Os exemplos de código específicos de hardware e os tutoriais ponta a ponta estão no cookbook de cada produto:

- **[reTerminal E Series — ePaper Display cookbook](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino)** — Hello World no E1001/E1002/E1003/E1004 com `Seeed_GFX` e `GxEPD2`.
- **[reTerminal E Series — Onboard Peripherals cookbook](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals)** — o conjunto completo de periféricos para os mesmos modelos: controle de LED, buzzer (bipes PWM passivos + reprodução de melodia), entrada de 3 botões, temperatura/umidade SHT4x, gerenciamento de bateria, cartão microSD, renderização de imagem BMP a partir do SD.
- **[reTerminal E Series — RTC, Low Power, Audio & Touch cookbook](https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals_2)** — gerenciamento de horário com RTC, deep sleep / light sleep, gravação de microfone I2S e desenho com toque capacitivo (apenas E1003).
- **[XIAO 7.5" ePaper Panel + Arduino](https://wiki.seeedstudio.com/pt-br/xiao_075inch_epaper_panel_arduino)** — passo a passo com XIAO ESP32-C3 usando `Seeed_GFX`.
- **[TRMNL 7.5" DIY Kit + Arduino](https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_arduino)** — usando o hardware do kit em sketches Arduino personalizados (em vez da plataforma em nuvem TRMNL).

Quando novos produtos de ePaper forem lançados, o cookbook correspondente será adicionado na pasta de cada produto; esta página principal será atualizada para apontar para ele.

## Problemas Comuns

### O display não mostra nada ou não atualiza

- Na maioria das vezes o cabo FPC do ePaper está solto ou de cabeça para baixo. Recoloque-o com os contatos metálicos voltados para cima.
- Verifique se `OPI PSRAM` está habilitado em **Tools → PSRAM** para placas ESP32-S3.
- Confirme se `BOARD_SCREEN_COMBO` em `driver.h` corresponde ao seu hardware. O valor errado produz silenciosamente uma tela em branco.
- Verifique se o sketch de exemplo que você abriu corresponde à sua tela (Básica vs Colorida).

### Não é possível fazer upload para a placa

- Tente um cabo USB-C diferente (cabo de dados, não apenas de alimentação).
- Para placas ESP32-S3: mantenha pressionado o botão **BOOT** antes de conectar o cabo USB para entrar no modo de download e depois solte.
- Confirme se **Tools → Port** aponta para o dispositivo serial correto após reconectar.

Para uma solução de problemas mais aprofundada em um produto específico, consulte o cookbook para esse hardware.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
