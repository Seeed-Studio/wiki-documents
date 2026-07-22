---
description: Guia de referência para usar PlatformIO com produtos Seeed ePaper - configuração do VS Code, estrutura do projeto, configuração do platformio.ini, configuração do Seeed_GFX e seleção de ambiente por produto.
title: Trabalhar com PlatformIO
keywords:
  - display ePaper
  - PlatformIO
  - platformio.ini
  - Seeed_GFX
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_platformio
sidebar_position: 5
last_update:
  date: 06/01/2026
  author: Citric
createdAt: '2026-06-01'
url: https://wiki.seeedstudio.com/pt-br/epaper_work_with_platformio/
updatedAt: '2026-06-12'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com PlatformIO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/248.png" style={{width:650, height:'auto'}}/></div>

Esta página é a **referência de configuração do PlatformIO** para produtos Seeed ePaper. Ela se concentra nas partes que são diferentes do fluxo de trabalho com Arduino IDE:

1. Instalar o PlatformIO no Visual Studio Code.
2. Entender a estrutura de projeto criada pelo PlatformIO.
3. Editar o `platformio.ini`, o principal arquivo de configuração para seleção de placa, seleção de framework, dependências de biblioteca, velocidade do monitor serial, opções de upload e flags de compilação.
4. Escolher o ambiente PlatformIO correto para cada produto Seeed ePaper.
5. Adicionar `Seeed_GFX` e gerar o `driver.h` correspondente com a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).

Se você está procurando APIs de desenho para o display, sketches de exemplo ou código de demonstração específico de hardware, comece por [Work with Arduino](/pt-br/epaper_work_with_arduino) e pelos cookbooks de produto vinculados ao final desta página. O código C/C++ usado no PlatformIO geralmente é o mesmo código do Arduino. A principal diferença é como o projeto é configurado.

## Hardware compatível

O PlatformIO pode ser usado com o fluxo de trabalho baseado em código para produtos Seeed ePaper que expõem um caminho de firmware compatível com Arduino. Use esta página para preparar o projeto PlatformIO e, em seguida, selecione o `driver.h` correto para sua placa e tela.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Linha de produto</th>
      <th>MCU / alvo de placa típico</th>
      <th>Observações de configuração</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>reTerminal E Series baseado em ESP32-S3</td>
      <td>Use um ambiente PlatformIO para ESP32-S3 e, em seguida, gere o `driver.h` para o modelo exato de reTerminal.</td>
    </tr>
    <tr>
      <td><strong>Placas driver EE02 / EE03 / EE04 / EE05</strong></td>
      <td>Família XIAO ESP32-S3</td>
      <td>Use a mesma estrutura PlatformIO em toda a família EE0x. O valor de `BOARD_SCREEN_COMBO` muda com a placa e a tela selecionadas.</td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7.5" (OG)</strong></td>
      <td>Família XIAO ESP32-S3</td>
      <td>Use o ambiente ESP32-S3 ao escrever firmware personalizado no estilo Arduino em vez de usar o firmware em nuvem TRMNL.</td>
    </tr>
    <tr>
      <td><strong>Painel ePaper XIAO 7.5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>Use o ambiente PlatformIO XIAO ESP32-C3 e, em seguida, use o cookbook do produto para a configuração específica de tela do `driver.h`.</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05 e placas ePaper baseadas em nRF52840</strong></td>
      <td>Família XIAO nRF52840</td>
      <td>Use o ambiente PlatformIO nRF52840 para desenvolvimento de firmware. Se ainda não houver um cookbook específico para ePaper publicado, use esta página como referência de ambiente e o esquema/cookbook do produto para os pinos.</td>
    </tr>
  </table>
</div>

:::note
O projeto PlatformIO é apenas o ambiente de compilação e upload. O display ainda depende do `driver.h` correto. Se o `platformio.ini` estiver correto, mas o `driver.h` estiver direcionado para a placa ou painel errado, o firmware pode compilar e fazer upload enquanto a tela permanece em branco.
:::

## Por que usar PlatformIO para desenvolvimento com ePaper?

O PlatformIO é útil quando seu projeto ePaper cresce além de um único sketch:

- Ele mantém placa, framework, bibliotecas, velocidade de upload, velocidade do monitor serial e flags de compilação em um único arquivo `platformio.ini` sob controle de versão.
- Ele pode definir vários ambientes de compilação em um único projeto, para que a mesma base de código possa ter como alvo vários produtos Seeed ePaper.
- Ele baixa bibliotecas por meio de `lib_deps`, o que torna o projeto mais fácil de reproduzir em outro computador.
- Ele fornece tarefas de compilação, upload, limpeza e monitor serial dentro do VS Code.

Para desenho no display e APIs de hardware, continue usando o mesmo código C/C++ no estilo Arduino usado no cookbook do Arduino. O PlatformIO altera principalmente o layout do projeto e o método de configuração.

## Etapa 1: Instalar VS Code e PlatformIO

**Etapa 1.** Baixe e instale o [Visual Studio Code](https://code.visualstudio.com/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 2.** Abra **Extensions** no VS Code, pesquise por `PlatformIO IDE` e instale-o.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 3.** Reinicie o VS Code depois que a extensão terminar a instalação.

**Etapa 4.** Abra o **PlatformIO Home** a partir do ícone do PlatformIO na barra de atividades do VS Code.

:::tip
Se você usar o PlatformIO IDE no VS Code, o PlatformIO Core é incluído com a extensão. Você só precisa instalar o PlatformIO Core separadamente se quiser usar o comando `pio` fora do VS Code.
:::

## Etapa 2: Criar um projeto PlatformIO

**Etapa 1.** Em **PlatformIO Home**, selecione **New Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 2.** Digite um nome para o projeto.

**Etapa 3.** Selecione qualquer placa temporária compatível com Arduino que permita ao PlatformIO criar o projeto. Essa primeira seleção é usada apenas para gerar a pasta do projeto.

**Etapa 4.** Selecione **Arduino** como framework.

**Etapa 5.** Clique em **Finish** e aguarde até que o PlatformIO crie o projeto.

**Etapa 6.** Abra o `platformio.ini` e substitua a configuração gerada pela configuração da Seeed mostrada nas próximas seções.

:::caution
A maioria das placas de desenvolvimento Seeed Studio usadas por esta linha de produtos ePaper é mantida por meio do pacote de plataforma PlatformIO da Seeed, não apenas pela lista padrão de placas do PlatformIO. Se você não conseguir encontrar a placa Seeed exata na janela **New Project** do PlatformIO, isso é esperado. Crie primeiro um projeto temporário e, em seguida, defina `platform = https://github.com/Seeed-Studio/platform-seeedboards.git` e o ID de `board` correto no `platformio.ini`.
:::

Após a criação, os arquivos e pastas importantes são:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Caminho</th>
      <th>Finalidade</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Arquivo principal de configuração do PlatformIO. Este é o arquivo mais importante neste guia.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Arquivo principal de código-fonte do firmware. O código no estilo Arduino fica aqui.</td>
    </tr>
    <tr>
      <td><code>lib/</code></td>
      <td>Bibliotecas locais opcionais. Este também é um local conveniente para uma pasta auxiliar local de <code>driver.h</code>.</td>
    </tr>
    <tr>
      <td><code>.pio/</code></td>
      <td>Saída de compilação do PlatformIO e dependências baixadas. Não edite esta pasta manualmente.</td>
    </tr>
  </table>
</div>

## Etapa 3: Entender o `platformio.ini`

O `platformio.ini` é o centro de um projeto PlatformIO. Cada seção `[env:name]` define um ambiente de compilação. O ambiente informa ao PlatformIO para qual placa compilar, qual framework usar, quais bibliotecas baixar e como fazer upload ou monitorar o firmware.

Para iniciantes, o fluxo de trabalho mais fácil é copiar a configuração completa para o seu dispositivo a partir da [Etapa 4](#etapa-4-copiar-a-configuração-para-seu-dispositivo), colá-la no `platformio.ini` e, em seguida, criar o arquivo `driver.h` correspondente. Você não precisa combinar manualmente uma seção base compartilhada com outra seção de dispositivo.

Os campos mais importantes são:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Campo</th>
      <th>O que ele controla</th>
      <th>Exemplo</th>
    </tr>
    <tr>
      <td><code>platform</code></td>
      <td>O pacote de plataforma do PlatformIO. Para placas Seeed neste guia, use a URL do pacote de plataforma da Seeed para que o PlatformIO possa baixar as definições de placa.</td>
      <td><code>platform = https://github.com/Seeed-Studio/platform-seeedboards.git</code></td>
    </tr>
    <tr>
      <td><code>board</code></td>
      <td>O ID de placa do PlatformIO. Isso define o MCU, layout de flash, ferramenta de upload e configurações padrão de compilação.</td>
      <td><code>board = seeed-xiao-esp32-s3-sense</code></td>
    </tr>
    <tr>
      <td><code>framework</code></td>
      <td>O framework de software usado pelo firmware. Para exemplos no estilo Arduino, use <code>arduino</code>.</td>
      <td><code>framework = arduino</code></td>
    </tr>
    <tr>
      <td><code>monitor_speed</code></td>
      <td>A taxa de baud do monitor serial. Ela deve corresponder ao <code>Serial.begin(...)</code> no firmware.</td>
      <td><code>monitor_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>upload_speed</code></td>
      <td>A taxa de baud de upload usada quando o PlatformIO grava o firmware via serial USB.</td>
      <td><code>upload_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>lib_deps</code></td>
      <td>Bibliotecas que o PlatformIO baixa automaticamente para este ambiente.</td>
      <td><code>https://github.com/Seeed-Studio/Seeed_GFX</code></td>
    </tr>
    <tr>
      <td><code>build_flags</code></td>
      <td>Definições extras do compilador. Use isto apenas quando o cookbook do seu produto ou biblioteca exigir.</td>
      <td><code>-DBOARD_HAS_PSRAM</code></td>
    </tr>
    <tr>
      <td><code>upload_port</code></td>
      <td>Porta serial fixa opcional. Deixe sem definir se você preferir a detecção automática do PlatformIO.</td>
      <td><code>upload_port = /dev/ttyACM0</code></td>
    </tr>
  </table>
</div>

:::caution
Não copie o `platformio.ini` cegamente entre produtos não relacionados. O mesmo código-fonte C/C++ pode ser portátil, mas `board`, configurações de PSRAM e `driver.h` devem corresponder ao hardware real.
:::

## Etapa 4: Copiar a configuração para seu dispositivo

Escolha a aba do seu dispositivo, copie todo o bloco `platformio.ini` e cole-o no arquivo `platformio.ini` do seu projeto PlatformIO. A configuração é intencionalmente repetida em cada aba para que você não precise mesclar uma seção base compartilhada com uma seção de dispositivo.

:::tip
A primeira compilação pode demorar mais porque o PlatformIO faz o download do pacote de plataforma da Seeed, da toolchain, do framework Arduino e da biblioteca `Seeed_GFX`.
:::

<Tabs groupId="platformio-device">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

Use esta configuração para **reTerminal E1001**:

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use o `driver.h` gerado para **reTerminal E1001**. Nos exemplos existentes de `Seeed_GFX`, o E1001 usa:

```cpp
#define BOARD_SCREEN_COMBO 520
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

Use esta configuração para **reTerminal E1002**:

```ini
[env:reterminal_e1002]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use o `driver.h` gerado para **reTerminal E1002**. Nos exemplos existentes de `Seeed_GFX`, o E1002 usa:

```cpp
#define BOARD_SCREEN_COMBO 521
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

Use esta configuração para **reTerminal E1003**:

```ini
[env:reterminal_e1003]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use o `driver.h` gerado para **reTerminal E1003**. Nos exemplos existentes de `Seeed_GFX`, o E1003 usa:

```cpp
#define BOARD_SCREEN_COMBO 522
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

Use esta configuração para **reTerminal E1004**:

```ini
[env:reterminal_e1004]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Use o `driver.h` gerado para **reTerminal E1004**. Nos exemplos existentes de `Seeed_GFX`, o E1004 usa:

```cpp
#define BOARD_SCREEN_COMBO 523
```

</TabItem>
<TabItem value="ee0x" label="EE02 / EE03 / EE04 / EE05">

Use esta configuração para as placas controladoras de ePaper ESP32-S3 **EE02 / EE03 / EE04 / EE05**:

```ini
[env:ee0x_epaper_driver_board]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Gere o `driver.h` para a sua placa EE0x exata e o painel de ePaper. Por exemplo, a EE04 com um painel de ePaper monocromático de 7,5" usa:

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Use esta configuração para firmware personalizado no estilo Arduino no **TRMNL 7.5" (OG) DIY Kit**:

```ini
[env:trmnl_diy_kit]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Gere o `driver.h` para a combinação de display do TRMNL DIY Kit antes de compilar.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

Use esta configuração para o **XIAO 7.5" ePaper Panel**:

```ini
[env:xiao_075_epaper_panel]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c3
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Gere o `driver.h` para o XIAO 7.5" ePaper Panel antes de compilar.

</TabItem>
<TabItem value="en04-en05" label="EN04 / EN05">

Use esta configuração como ponto de partida do PlatformIO para as placas de ePaper baseadas em nRF52840 **EN04 / EN05**:

```ini
[env:en04_en05]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840-plus
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
```

O driver de display, o mapeamento de pinos e as dependências de biblioteca para EN04 / EN05 devem seguir o firmware ou cookbook específico do produto a partir do qual você está desenvolvendo.

</TabItem>
</Tabs>

## Etapa 5: Adicionar `driver.h`

O `platformio.ini` seleciona o MCU e o ambiente de compilação. O `driver.h` seleciona a combinação de placa de ePaper e tela usada pelo `Seeed_GFX`.

**Etapa 1.** Abra a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).

**Etapa 2.** Selecione sua placa e tela.

**Etapa 3.** Copie a configuração gerada.

**Etapa 4.** Adicione a configuração a um arquivo `driver.h` que possa ser incluído pelo seu firmware.

Um arquivo gerado típico se parece com isto:

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Valores comuns de `BOARD_SCREEN_COMBO` usados na documentação existente de ePaper incluem:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Hardware</th>
      <th>Exemplo de configuração gerada</th>
      <th>Fonte de verdade</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>#define BOARD_SCREEN_COMBO 520</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>#define BOARD_SCREEN_COMBO 521</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>#define BOARD_SCREEN_COMBO 522</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>#define BOARD_SCREEN_COMBO 523</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>EE04 + 7.5" ePaper monocromático</td>
      <td><code>#define BOARD_SCREEN_COMBO 502</code><br/><code>#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>Outras combinações de EE0x / tela</td>
      <td>Gerado por placa e tela</td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
  </table>
</div>

:::caution
Sempre regenere o `driver.h` quando você mudar a placa de ePaper, o tamanho do display, o tipo de cor do display ou a placa controladora. Um `BOARD_SCREEN_COMBO` incompatível é um dos motivos mais comuns para uma tela em branco.
:::

Em última análise, o código e a estrutura de projeto para um produto de tela completo usando PlatformIO devem ser os seguintes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/249.png" style={{width:1000, height:'auto'}}/></div>


## Etapa 6: Compilar, Enviar e Monitorar

Depois que `platformio.ini` e `driver.h` estiverem prontos, use a barra de ferramentas do PlatformIO no VS Code:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Ação</th>
      <th>O que faz</th>
    </tr>
    <tr>
      <td><strong>Build</strong></td>
      <td>Compila o ambiente selecionado e verifica se a placa, o framework, as bibliotecas e o código são compatíveis.</td>
    </tr>
    <tr>
      <td><strong>Upload</strong></td>
      <td>Envia o firmware para o dispositivo conectado por meio do protocolo de upload selecionado.</td>
    </tr>
    <tr>
      <td><strong>Monitor</strong></td>
      <td>Abre o monitor serial usando o baud rate de <code>monitor_speed</code>.</td>
    </tr>
    <tr>
      <td><strong>Clean</strong></td>
      <td>Remove saídas de compilações anteriores. Use isto após alterar pacotes de placa, configurações de PSRAM ou flags de compilação importantes.</td>
    </tr>
  </table>
</div>

Se o projeto tiver vários ambientes, selecione o ambiente de destino nas tarefas do projeto PlatformIO antes de compilar ou enviar.

## Opcional: Usar a biblioteca Seeed_GxEPD2

Os exemplos padrão nesta página usam `Seeed_GFX`. Para projetos baseados no fluxo de trabalho de display GxEPD2, você pode substituir a dependência da biblioteca de display pelo fork GxEPD2 da Seeed.

Use esta opção somente quando o código do projeto for escrito para as APIs `Seeed_GxEPD2` / `GxEPD2`. Se o seu código seguir os exemplos padrão de `Seeed_GFX`, mantenha `Seeed_GFX` em `lib_deps`.

Por exemplo, uma configuração de reTerminal E1001 pode ser alterada da seguinte forma:

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Projects/Seeed_GxEPD2
```

Apenas uma biblioteca de display é mostrada aqui para manter a configuração clara. Se o seu projeto precisar de bibliotecas adicionais, adicione-as em `lib_deps` como linhas separadas.

## Para onde ir em seguida

Esta página foca intencionalmente na configuração de ambiente do PlatformIO. Continue com as páginas específicas do produto para fiação, seleção de tela e comportamento do firmware:

- [Trabalhar com Arduino](/pt-br/epaper_work_with_arduino) — fluxo de trabalho comum com Arduino e `Seeed_GFX`.
- [XIAO ePaper Driver Boards PlatformIO Cookbook](/pt-br/ee04_with_platformio) — fluxo de trabalho EE0x com PlatformIO usando a EE04 como exemplo prático.
- [reTerminal E Series Arduino cookbook](/pt-br/reterminal_e10xx_with_arduino) — exemplos de display para E1001 / E1002 / E1003 / E1004.
- [reTerminal E Series onboard peripherals cookbook](/pt-br/reterminal_e10xx_with_arduino_peripherals) — exemplos de botões, buzzer, monitor de bateria, sensor SHT4x e microSD.
- [XIAO 7.5" ePaper Panel Arduino guide](/pt-br/xiao_075inch_epaper_panel_arduino) — configuração específica do produto para o painel baseado em XIAO ESP32-C3.
- [TRMNL DIY Kit Arduino guide](/pt-br/ogdiy_kit_works_with_arduino) — caminho de firmware Arduino personalizado para o hardware do kit TRMNL.

## Problemas comuns

### P1: Por que o PlatformIO não mostra minha placa Seeed na lista de placas?

Isso é esperado para muitas placas de desenvolvimento da Seeed. As definições de placa usadas neste guia vêm do pacote de plataforma PlatformIO da Seeed, portanto elas podem não aparecer na pesquisa de placas do **New Project** padrão do PlatformIO antes que o pacote seja instalado.

Use o URL do pacote da Seeed diretamente em `platformio.ini`:

```ini
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
```

Em seguida, defina `board` para o ID de placa Seeed usado pelo seu produto, por exemplo:

```ini
board = seeed-xiao-esp32-s3-sense
```

Quando você compilar pela primeira vez, o PlatformIO fará o download do pacote de plataforma e então reconhecerá o ID da placa.

### P2: Por que o firmware é enviado com sucesso, mas o display ePaper permanece em branco?

A causa mais comum é um `driver.h` incorreto ou ausente.

- Gere novamente o `driver.h` com a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).
- Confirme se a placa e o display selecionados correspondem ao hardware real.
- Confirme se o `BOARD_SCREEN_COMBO` gerado está disponível para o arquivo-fonte que inclui `Seeed_GFX`.
- Para produtos ESP32-S3 com buffers grandes, confirme se o cookbook do produto exige configurações de PSRAM.

### P3: Por que o PlatformIO falha ao enviar para a placa?

Para o reTerminal E1003, uma causa comum é uma taxa de baud de upload muito alta. Defina `upload_speed` como `115200` no mesmo bloco de ambiente antes de verificar outras causas.

```ini
upload_speed = 115200
```

Se o upload ainda falhar, continue com as seguintes verificações:

- Use um cabo USB-C que suporte transferência de dados.
- Desconecte outros dispositivos seriais e tente novamente.
- Defina `upload_port` somente se a detecção automática escolher a porta errada.
- Para placas baseadas em ESP32, mantenha pressionado o botão de boot enquanto conecta o USB se a placa não entrar automaticamente no modo de download.

## Recursos

- **[Docs]** [Arquivo de Configuração de Projeto do PlatformIO](https://docs.platformio.org/en/stable/projectconf/index.html)
- **[Docs]** [PlatformIO IDE para VS Code](https://docs.platformio.org/en/stable/integration/ide/pioide.html)
- **[GitHub]** [Pacote de Plataforma PlatformIO da Seeed](https://github.com/Seeed-Studio/platform-seeedboards)
- **[GitHub]** [Exemplo Arduino Blink da Plataforma Seeed para PlatformIO](https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/arduino-blink)
- **[GitHub]** [Biblioteca Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)
- **[Tool]** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)
- **[Wiki]** [PlatformIO para placas compatíveis com Arduino](/pt-br/Software-PlatformIO)

## Suporte técnico e discussão sobre produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
