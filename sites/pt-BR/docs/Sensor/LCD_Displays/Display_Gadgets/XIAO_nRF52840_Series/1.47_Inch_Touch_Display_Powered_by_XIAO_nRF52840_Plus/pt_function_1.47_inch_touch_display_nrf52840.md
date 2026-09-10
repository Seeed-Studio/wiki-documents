---
description: Demos autônomos em nível de função para cada periférico onboard do XIAO 1,47'' IPS Display (nRF52840). Cobre tela, toque, cartão SD, microfone, IMU, botões e detecção de tensão da bateria.
title: Uso dos periféricos onboard
sidebar_label: Função
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_position: 2
last_update:
  date: 08/20/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/pt-br/function_1.47_inch_touch_display_nrf52840/
---

# Uso dos periféricos onboard

Esta página reúne demos autônomos em nível de função para cada periférico onboard do display IPS de 1,47''. Cada seção é independente — você pode escolher a que corresponde ao seu caso de uso sem precisar ler as demais.

:::tip
Os GIFs de demonstração nesta página estão acelerados para mantê-los curtos.
:::

:::note
Todos os demos desta página exigem **Seeed nRF52 Boards (1.1.13)** conforme descrito em [Getting Started](/pt-br/getting_started_1.47_inch_touch_display_nrf52840), além da biblioteca **Seeed_GFX2** instalada manualmente conforme descrito abaixo.
:::

- **Library Manager** — vá em **Sketch > Include Library > Manage Libraries...**, pesquise e instale:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Demos de IMU</td></tr>
  </table>
</div>

:::note
**SdFat** vem incluída no pacote de placas **Seeed nRF52 Boards (1.1.13)**, portanto os demos **SD Image Reader** e **Record to SD** não precisam de instalação separada do SdFat. Não instale SdFat pelo Library Manager, pois isso pode sobrescrever a versão incluída e causar conflitos de biblioteca ou de API.
:::

- **Seeed_GFX2 (instalação manual)** — esta biblioteca não está disponível no Library Manager e deve ser instalada manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 1.** Clique no botão acima para baixar `Seeed_GFX2` v1.0.0 como um arquivo ZIP (fixado em uma tag de release para que o tutorial permaneça reprodutível). Como alternativa, clone o repositório em [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Passo 2.** No Arduino IDE, vá em **Sketch > Include Library > Add .ZIP Library...** e selecione o ZIP baixado. O IDE lê `library.properties` e o instala automaticamente na pasta `Seeed_GFX2` correta — você não precisa renomear a pasta extraída. (Para instalar manualmente em vez disso, descompacte o arquivo e renomeie a pasta extraída para `Seeed_GFX2` antes de colocá-la em `Documents/Arduino/libraries/`.)

**Passo 3.** Reinicie o Arduino IDE para que a nova biblioteca seja detectada.

:::tip
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** é responsável pelo mapa de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 172×320, a ordem de cores (BGR) e a orientação. Não é necessário `driver.h` nem configuração manual de pinos.
- Nesta placa, os demos usam `Board_XIAO_1inch47_Touch_Display<38, 37>` (RST=38, BL=37) com `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, sem inversão).
- O **controlador de toque** (AXS5106L) é tratado pela camada Touch do `Seeed_GFX2` (`Touch_AXS5106L`) — nenhuma biblioteca extra é necessária. Os demos de **IMU** usam a biblioteca **Seeed Arduino LSM6DS3** (instalada acima).
:::

## Obtendo o código de demonstração

Cada demo desta página está no repositório [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro do diretório `code_GFX2/Function/`. Cada demo é uma pasta contendo um único sketch `.ino`. **Sempre baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

**Opção A — Baixar o repositório como ZIP (recomendado):**

1. Abra [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) e clique em **Code > Download ZIP**, depois extraia o arquivo em qualquer lugar conveniente.
2. Navegue até `code_GFX2/Function/` e abra a pasta mostrada na linha **Code location** de cada demo. Por exemplo, o demo GraphicTest para esta placa está em `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`.
3. **Dê um clique duplo no arquivo `.ino`** para abri-lo no Arduino IDE.

**Opção B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Em seguida, abra o arquivo `.ino` do demo a partir da pasta clonada `code_GFX2/Function/...`.

## Tela — GraphicTest

Este demo executa um benchmark gráfico completo no painel JD9853A de 1,47 polegada, cobrindo barras de cores, linhas, retângulos, círculos, triângulos, retângulos arredondados, texto e um gradiente de pixels. Use-o para verificar se a tela está ligada corretamente e se todas as chamadas de desenho funcionam como esperado.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O sketch inicializa o painel JD9853A via **Seeed_GFX2** e, em seguida, executa em sequência dez primitivas gráficas, medindo o tempo de execução de cada uma via `micros()` e imprimindo o resultado no monitor serial.

O display é inicializado com uma única chamada de template:

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<38, 37>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

O template **Board** é responsável pelo mapa de pinos — CS=D2, DC=D3, SCK=D8, MOSI=D10 — e seus parâmetros de template `<RST, BL>` recebem números GPIO puros, então `<38, 37>` define RST=GPIO38 e BL=GPIO37. O **Panel Config** incorpora a resolução 172×320, a ordem de cores BGR e nenhuma inversão — não é necessário `driver.h` nem escrita manual de MADCTL.

### Executando o demo

**Passo 1.** Abra `xiao_nrf52840_147_graphictest.ino` no Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver a saída de tempo para cada teste:

```
LCD width: 172
LCD height: 320
Color bars: 57.62 ms
Lines: 4859.38 ms
Fast lines: 95.70 ms
Rectangles: 74.22 ms
Filled rectangles: 236.33 ms
Circles: 588.87 ms
Triangles: 413.09 ms
Round rectangles: 125.98 ms
Text: 1961.91 ms
Pixel gradient: 8716.80 ms
Graphic test finished.
```

Na tela, você verá cada padrão de teste exibido por cerca de um segundo antes que o próximo comece. Quando todos os testes terminarem, aparecerá uma tela "Finished" com uma borda azul de retângulo arredondado.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Depois que o sketch executa todos os padrões, a tela mostra a mensagem "Graphic Test / Finished". Reinicie a placa para executar o teste novamente.

---

## Toque — Touch Circle

Este demo transforma a tela sensível ao toque de 1,47 polegada em um bloco de desenho interativo. Toque em qualquer lugar da tela e um círculo branco aparecerá na ponta do seu dedo. Os círculos permanecem na tela, acumulando-se conforme você toca. Toque na barra **CLEAR** na parte inferior da tela para apagar todos os círculos e recomeçar.

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

A demonstração usa o controlador de toque capacitivo **AXS5106L** (endereço I2C `0x63`) conectado via I2C em D4/D5. A linha de interrupção de toque em **D7** é acionada na borda de descida sempre que um dedo toca ou solta a tela. O toque é tratado pela **camada Touch** do Seeed_GFX2 (`Touch_AXS5106L`):

```cpp
Touch_AXS5106L touch(-1, D7, Wire, 172, 320);
display.attachTouch(touch, display.panel().driver().bus());
// ...
display.getTouch(&x, &y);
```

<div class="table-center">
  <table align="center">
    <tr><th>Pino</th><th>Função</th></tr>
    <tr><td>D4 (SDA)</td><td>Barramento de dados I2C — compartilhado com o IMU</td></tr>
    <tr><td>D5 (SCL)</td><td>Barramento de clock I2C — compartilhado com o IMU</td></tr>
    <tr><td>D7</td><td>Interrupção de toque (ativo em nível baixo, borda de descida)</td></tr>
    <tr><td>RST</td><td>Compartilhado com o reset do LCD (GPIO38)</td></tr>
  </table>
</div>

**Desenho acionado por borda.** O sketch usa uma abordagem de detecção de borda: ele só adiciona um círculo na borda de descida de um toque (dedo pressionado), não enquanto o dedo é mantido na tela. Isso proporciona um comportamento nítido e intencional de toque-para-desenhar em vez de pintar continuamente um rastro enquanto você arrasta.

**Espelhamento do eixo X.** O painel de toque é fisicamente montado em uma orientação diferente do LCD, então a coordenada X bruta precisa ser espelhada. `display.getTouch()` já aplica esse espelhamento internamente e retorna coordenadas de tela, portanto não é necessária nenhuma transformação manual `screenX = 172 - 1 - rawX`.

**Buffer de círculos.** Até 120 círculos são armazenados em um buffer circular. Quando o buffer está cheio, o círculo mais antigo é removido e a tela é redesenhada para manter a exibição limpa.

**Zona CLEAR.** Os 36 pixels inferiores da tela são reservados como uma barra CLEAR. Tocar nessa área apaga todos os círculos e reinicia o contador em vez de desenhar um novo círculo.

**Área segura de desenho.** Uma borda cinza escura delimita a área onde os círculos ficam totalmente visíveis.

### Executando a Demonstração

**Passo 1.** Abra `xiao_nrf52840_147_touch_circle.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta e clique em **Upload**.

**Passo 3.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**Passo 4.** Toque na tela — cada toque imprime as coordenadas de tela mapeadas:

```
Touch: screen=(144,124)
Touch: screen=(166,210)
Touch: screen=(121,250)
Touch: screen=(37,231)
Touch: screen=(122,44)
```

Toque na barra CLEAR na parte inferior para apagar todos os círculos.

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

Cada toque deixa um círculo branco na ponta do seu dedo. A barra de título da tela mostra a contagem em execução. Toque na barra CLEAR e a tela é redefinida para em branco com a borda e a barra de título redesenhadas.

---

## Cartão SD — Leitor de Imagens

Esta demonstração lê arquivos de imagem `.bmp` de um cartão MicroSD e os exibe na tela. Ela oferece suporte a imagens BMP descompactadas de 24 bits e faz um recorte central para ajustá-las ao display de 172×320.

**Localização do código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_image_reader/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

O LCD e o cartão SD compartilham o mesmo barramento SPI de hardware (SCK = D8, MOSI = D10, MISO = D9). Para evitar contenção no barramento, o sketch desativa o chip-select do cartão SD (D6) antes de qualquer operação no LCD e o reativa antes do acesso ao SD. O cartão SD é controlado pela SdFat no modo `SHARED_SPI` na instância padrão `SPI`, enquanto o LCD roda no host SPI do Seeed_GFX2 — ambos compartilham os mesmos pinos físicos D8/D9/D10.

O sketch varre o diretório raiz do cartão SD em busca de arquivos `.bmp` (até 24) e depois os exibe em loop com um intervalo de 2 segundos entre as imagens.

**Formatos BMP suportados:**

<div class="table-center">
  <table align="center">
    <tr><th>Formato</th><th>Profundidade de bits</th><th>Observações</th></tr>
    <tr><td>BMP descompactado</td><td>24 bits</td><td>BGR888 convertido para RGB565 para exibição</td></tr>
  </table>
</div>

Imagens maiores que 172×320 são recortadas centralmente.

### Executando a Demonstração

**Passo 1.** Formate um cartão MicroSD como **FAT32**.

**Passo 2.** Copie uma ou mais imagens `.bmp` para a raiz do cartão SD.

**Passo 3.** Insira o cartão SD no slot MicroSD na placa de display.

**Passo 4.** Abra `xiao_nrf52840_147_sd_image_reader.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 5.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
[IMAGE] /Atest.bmp
[IMAGE] /Another test.bmp
[IMAGE] /test.bmp
[SD] mounted @ 8000000
```

:::note
Os nomes de arquivos listados refletem os arquivos `.bmp` que você colocou no cartão SD. Sua saída irá variar dependendo dos arquivos que você copiar para o cartão.
:::

A tela exibe cada imagem por 2 segundos e depois avança para a próxima em um loop contínuo.

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_sd_reader.gif" style={{width:500, height:'auto'}}/></div>

Se nenhum arquivo BMP for encontrado, a tela mostra "No BMP found". Se uma imagem falhar na decodificação, a tela mostra brevemente o caminho do arquivo com "BMP decode failed" e passa para o próximo arquivo.

---

## Microfone e Alto-falante

O Display IPS de 1,47'' possui um **microfone digital PDM (Pulse Density Modulation)** onboard para entrada de áudio, além de pads de saída I2S para acionar um alto-falante/amplificador externo. Esta seção mostra duas demonstrações: uma visualização em tempo real de **Barra de Volume** da entrada do microfone (sem hardware extra) e uma demonstração de **Gravação em SD** que grava 5 segundos de áudio em um cartão MicroSD e o reproduz por meio de um amplificador I2S externo.

<div class="table-center">
  <table align="center">
    <tr><th>Pino</th><th>Sinal</th><th>Função</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Saída de clock PDM para o microfone</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de dados PDM do microfone</td></tr>
  </table>
</div>

### Demo 1: Barra de Volume

Esta demonstração transforma o microfone PDM onboard em um grande e responsivo medidor de volume. Uma barra de 10 segmentos preenche o centro da tela — verde em níveis baixos, amarela na faixa média e vermelha quando alto. A porcentagem é exibida acima da barra e muda de cor para corresponder ao nível.

**Localização do código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Como Funciona

O **microfone digital PDM (Pulse Density Modulation)** onboard está conectado ao periférico PDM do nRF52840 via **D0 (PDM_CLK)** e **D1 (MIC_DATA)**, conforme mostrado na tabela de pinos acima.

A **biblioteca PDM** da Arduino lida com a conversão de baixo nível de PDM para PCM em hardware. O sketch configura o periférico PDM em **16 kHz mono** com ganho de **30** e registra uma função de retorno de chamada acionada por interrupção (`onPDMdata`) que é disparada sempre que um buffer de 256 amostras fica pronto.

**Processamento de sinal:**

1. **Extração de pico** — cada callback varre o buffer de 256 amostras em busca do maior valor absoluto (amplitude de pico).
2. **Normalização** — o pico bruto é mapeado de um piso de 40 para um teto de 16.000, produzindo um valor de volume de 0,0–1,0. Valores abaixo do piso são tratados como silêncio.
3. **Suavização exponencial** — o volume exibido é uma média móvel exponencial do pico bruto (α = 0,20) para evitar tremores. Quando o silêncio é detectado, o valor exibido decai em ×0,94 por quadro.

**Desenho da barra:**

<div class="table-center">
  <table align="center">
    <tr><th>Segmento</th><th>Cor</th><th>Faixa de volume</th></tr>
    <tr><td>0–4 (5 inferiores)</td><td>Verde</td><td>0% – 50%</td></tr>
    <tr><td>5–8 (4 do meio)</td><td>Amarelo</td><td>50% – 90%</td></tr>
    <tr><td>9 (top)</td><td>Vermelho</td><td>90% – 100%</td></tr>
  </table>
</div>

A barra usa **renderização diferencial**: apenas os segmentos cujo estado mudou desde o último quadro são redesenhados. Os segmentos inalterados são deixados como estão, minimizando o tráfego SPI e evitando cintilação.

#### Executando a demonstração

**Passo 1.** Abra `xiao_nrf52840_147_mic_canvas.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta e clique em **Upload**.

**Passo 3.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
[MIC] ready
```

**Passo 4.** Fale no microfone PDM (localizado próximo ao canto inferior esquerdo da placa de exibição) ou assopre nele. A barra se enche de verde para amarelo para vermelho, e a porcentagem é atualizada acima dela.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_mic_bar.gif" style={{width:500, height:'auto'}}/></div>

A barra responde em tempo real. Em um ambiente silencioso, a barra permanece vazia. Falando em volume normal a cerca de 20 cm de distância acende os segmentos verdes. Assoprar diretamente no microfone empurra para a faixa amarela ou vermelha.

---

### Demo 2: Gravar no SD

Esta demonstração grava **5 segundos** de áudio do microfone PDM onboard na RAM, salva em um cartão MicroSD como um arquivo WAV e depois o reproduz por meio de um amplificador I2S externo. Pressione um botão para gravar e outro para reproduzir.

**Localização do código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_unline_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Configuração de hardware

A reprodução requer um **amplificador de áudio I2S e alto-falante** externos. A demonstração foi escrita para um breakout **MAX98357A** conectado aos pads de saída I2S da placa:

<div class="table-center">
  <table align="center">
    <tr><th>Pad I2S</th><th>Pino XIAO</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

Os pads I2S (3V3, GND, D11, D12, D13) estão expostos no grupo de pads de expansão inferior da placa de exibição.

#### Como funciona

**Gravação.** O microfone PDM onboard é capturado em **16 kHz mono, 16 bits** por meio do periférico PDM do nRF52840, usando os mesmos pinos **D0 (PDM_CLK)** / **D1 (MIC_DATA)** da Demo 1. Quando você pressiona **USR1**, o sketch amostra 5 segundos de áudio diretamente em um buffer estático de RAM e depois o grava no cartão SD como um arquivo WAV (`/REC_001_RAW.WAV`) usando a biblioteca SdFat incluída em Seeed nRF52 Boards 1.1.13.

A gravação é armazenada em buffer na RAM porque o nRF52840 tem apenas **256 KB de RAM**. Em 16 kHz × 16 bits mono, 5 segundos precisam de 160.000 bytes — o que cabe. 10 segundos precisariam de 320.000 bytes e não caberiam, portanto a demonstração é fixa em 5 segundos.

**Reprodução.** Pressionar **USR2** lê o WAV de volta do cartão SD (pulando o cabeçalho WAV de 44 bytes) e o transmite pelo periférico I2S do nRF52840 no modo estéreo Philips em **D11/D12/D13**. As amostras mono são duplicadas para ambos os canais com um ganho de `0.75×` aplicado para evitar clipping. O amplificador aciona um pequeno alto-falante para que você possa ouvir a gravação.

**Máquina de estados.** O gravador passa por uma sequência determinística de estados, imprimindo cada transição no monitor serial:

```
IDLE → PREPARE_SYSTEM → QUIET_RADIO → PREPARE_PERIPHERALS → START_HFCLK → START_PDM
     → DISCARD_WARMUP → CAPTURE_RAM → STOP_PDM → SAVE_RAW → DONE
```

- **QUIET_RADIO** desativa o periférico RADIO (este sketch nunca inicializa BLE) para manter estável a seção de captura sensível ao tempo.
- **START_HFCLK** alterna o clock de alta frequência para o cristal externo de 32 MHz, que o periférico PDM precisa para amostragem precisa.
- **DISCARD_WARMUP** descarta os primeiros 300 ms da saída PDM enquanto o microfone estabiliza.
- **CAPTURE_RAM** preenche o buffer até que 80.000 amostras (5 s) sejam coletadas, desenhando uma barra de progresso em tempo real na tela.

**Estados na tela:**

<div class="table-center">
  <table align="center">
    <tr><th>Estado</th><th>Descrição</th></tr>
    <tr><td><strong>Ready</strong></td><td>Título "RAM Recorder" com "USR1: record" e "USR2: play last"</td></tr>
    <tr><td><strong>Recording</strong></td><td>Rótulo "Recording", um cronômetro decorrido ("2.3s / 5s") e uma barra de progresso vermelha</td></tr>
    <tr><td><strong>Done</strong></td><td>Título "Done" com o nome do arquivo salvo e "Saved raw WAV", além de "USR1: record" / "USR2: play raw"</td></tr>
    <tr><td><strong>Playback</strong></td><td>Título "Playback" mostrando "Loading RAW audio..." e depois "Playing RAW audio", terminando em "Finished"</td></tr>
  </table>
</div>

#### Executando a demonstração

**Passo 1.** Formate um cartão MicroSD como **FAT32** e insira-o no slot MicroSD na placa de exibição.

**Passo 2.** Conecte um amplificador MAX98357A e um alto-falante aos pads I2S conforme descrito acima.

**Passo 3.** Abra `xiao_nrf52840_147_sd_unline_record.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Na inicialização você deverá ver:

```
=== XIAO nRF52840 Plus RAM PDM recorder ===
[RAM] record buffer bytes=160000
[RADIO] BLE is not initialized by this sketch
[PDM] library uses EasyDMA double buffering
[STATE] IDLE
```

**Passo 5.** Pressione **USR1 (D19)** para gravar 5 segundos de áudio do microfone onboard. A barra de progresso se enche enquanto grava, e a máquina de estados imprime cada transição:

```
[STATE] PREPARE_SYSTEM
[STATE] QUIET_RADIO
[STATE] PREPARE_PERIPHERALS
[STATE] START_HFCLK
[STATE] START_PDM
[STATE] DISCARD_WARMUP
[STATE] CAPTURE_RAM
[STATE] STOP_PDM
[STATE] SAVE_RAW
[STATE] DONE
[SAVE] /REC_001_RAW.WAV
```

**Passo 6.** Pressione **USR2 (D15)** para reproduzir a gravação pelo alto-falante:

```
[PLAY] latest RAW audio
[PLAY] finished
```

:::note
Cada nova gravação é salva como um arquivo WAV numerado (`REC_001_RAW.WAV`, `REC_002_RAW.WAV`, …), portanto as gravações anteriores são mantidas. A tela "Done" mostra o nome do arquivo da gravação mais recente.
:::

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_record.gif" style={{width:500, height:'auto'}}/></div>

Pressione USR1 e a tela mostra uma barra de progresso de gravação. Após 5 segundos, ela confirma que o WAV foi salvo no cartão SD. Pressione USR2 e o áudio é reproduzido pelo alto-falante conectado enquanto a tela mostra o status da reprodução.

---

## IMU

### Demo 1: Areia movediça eletrônica

Esta demonstração transforma a tela em uma simulação de fluido interativa — partículas de areia dourada que fluem e se acomodam de acordo com a gravidade, conforme medido pela IMU de 6 eixos LSM6DS3 onboard. Incline a placa e a areia muda de direção em tempo real.

**Localização do código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

A simulação usa uma **grade de ocupação 24×45** sobreposta na tela 172×320, em que cada célula tem 7×7 pixels. Cerca de **180 partículas** são colocadas na grade, cada uma com posição, velocidade e um gradiente de cor dourado.

O acelerômetro LSM6DS3 é lido via I2C (D4/D5) a cada **8 ms**. Os valores brutos de aceleração são filtrados por passa-baixa e usados para derivar um vetor de gravidade. Quando você inclina a placa:

1. **O vetor de gravidade é atualizado** — os dados do acelerômetro são suavizados com uma média móvel exponencial para evitar tremores.
2. **Velocidade das partículas** — cada partícula acelera na direção do vetor de gravidade, com amortecimento e um fator de mobilidade por partícula baseado em sua profundidade no fluxo.
3. **Ocupação das células** — partículas mais profundas no fluxo (mais próximas do "fundo" em relação à gravidade) têm mobilidade reduzida, criando um efeito de empacotamento realista.
4. **Renderização diferencial** — apenas as células em que partículas entraram ou saíram são redesenhadas, minimizando o tráfego SPI e mantendo a animação suave.

As partículas próximas à superfície fluem livremente (maior mobilidade); as partículas enterradas mais profundamente ficam mais compactadas (menor mobilidade) — imitando como a areia real se comporta.

### Executando a demonstração

**Passo 1.** Abra `xiao_nrf52840_147_electronic_quicksand.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta e, em seguida, clique em **Upload**.

**Passo 3.** Depois de enviado, a tela é preenchida com partículas douradas na parte inferior. Incline a placa em diferentes direções — a areia flui como se fosse puxada pela gravidade.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para confirmar a inicialização:

```
=== Electronic Quicksand ===
imu.begin=0
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

As partículas de areia douradas fluem suavemente à medida que você inclina a placa. Quando mantida na horizontal, a areia se acomoda na parte inferior da tela. Gire a placa em 90 graus e a areia flui para o novo "fundo" em menos de um segundo.

---

### Demo 2: Levantar para despertar

Esta demonstração implementa um **sistema de suspensão/ativação da tela** acionado pela interrupção de wake-up integrada do IMU LSM6DS3 no **D14**. A tela desliga automaticamente (luz de fundo desligada + CPU entra em System ON sleep) após 8 segundos de inatividade e desperta instantaneamente quando você pega ou move o dispositivo.

**Localização do código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

A demonstração usa o **detector de evento de wake-up incorporado** do LSM6DS3 — um recurso de hardware que monitora internamente os dados do acelerômetro e aciona o pino INT1 (conectado ao D14 nesta placa) quando o movimento excede um limite configurável. Isso significa que o MCU não precisa consultar o acelerômetro continuamente.

**Configuração do IMU:**

<div class="table-center">
  <table align="center">
    <tr><th>Registrador</th><th>Valor</th><th>Finalidade</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerômetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Atualização de dados em bloco + auto-incremento</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupções incorporadas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Limite de wake-up (sensibilidade médio-baixa)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sem filtro de duração (wake responsivo)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Direcionar wake-up para INT1</td></tr>
  </table>
</div>

**Fluxo de suspensão/ativação:**

1. **Estado ativo** — a tela está ligada, luz de fundo em PWM 120. Os dados do IMU e o status da bateria são atualizados a cada 250 ms / 1000 ms, respectivamente. Um temporizador regressivo mostra os segundos restantes até a suspensão automática.
2. **Suspensão automática** — após 8 segundos sem atividade, o sketch desliga a luz de fundo, exibe a mensagem "Sleeping... Pick up device to wake" e entra em **System ON sleep** do nRF52840 via WFE (Wait For Event).
3. **Wake-up** — quando o usuário pega a placa, o LSM6DS3 detecta o movimento e coloca o D14 em nível HIGH. A interrupção de GPIO é disparada, a CPU acorda do WFE, a luz de fundo é ligada e a interface é totalmente redesenhada.

Em System ON sleep, toda a RAM e os estados dos periféricos são preservados — o wake-up é quase instantâneo (menos de 1 ms entre a interrupção e a luz de fundo acesa).

**Botões de teste manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Ação</th></tr>
    <tr><td>USR1</td><td>D19</td><td>Forçar suspensão</td></tr>
    <tr><td>USR2</td><td>D15</td><td>Forçar wake</td></tr>
  </table>
</div>

### Executando a demonstração

**Passo 1.** Abra `xiao_nrf52840_147_wakeup.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 2.** A tela mostra um painel com estado de energia, dados de movimento e um temporizador regressivo. Deixe a placa parada por 8 segundos — ela entrará em suspensão automaticamente.

**Passo 3.** Pegue a placa ou agite-a levemente — a tela desperta imediatamente.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para observar as transições de suspensão/ativação:

```
[SLEEP] screen backlight off, waiting for IMU D14 wake
[SYS_ON_SLEEP] waiting, sleepLoops=26625 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=27649 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=28673 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=29697 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=58776 sleepLoops=29705
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=60110 sleepLoops=29705
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

A tela exibe dados em tempo real do acelerômetro e do giroscópio enquanto está ativa. Após 8 segundos de imobilidade, a tela escurece e o nRF52840 entra em modo de suspensão de baixo consumo. Pegue o dispositivo e a tela é restaurada em uma fração de segundo, com o contador de wake incrementado.

---

## Botão de usuário

O Display IPS de 1,47'' possui **dois botões físicos de pressão** conectados ao XIAO nRF52840 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Lógica</th><th>Rótulo na serigrafia</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

### Lendo um botão

Ambos os botões usam os resistores de pull-up internos do XIAO. Uma leitura simples e não bloqueante se parece com isto:

```cpp
const int BTN_A = D19;
const int BTN_B = D15;

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(BTN_A) == LOW) {
    Serial.println("BTN_A pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(BTN_B) == LOW) {
    Serial.println("BTN_B pressed");
    delay(200);
  }
}
```

### Eliminação de bouncing com interrupções

Para um tratamento de botões responsivo, com eliminação de bouncing e sem bloquear o loop principal, você pode usar interrupções por mudança de pino:

```cpp
volatile bool btnAFlag = false;
volatile bool btnBFlag = false;

void btnAIsr() { btnAFlag = true; }
void btnBIsr() { btnBFlag = true; }

void setup() {
  pinMode(D19, INPUT_PULLUP);
  pinMode(D15, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D19), btnAIsr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D15), btnBIsr, FALLING);
}

void loop() {
  if (btnAFlag) {
    btnAFlag = false;
    delay(30); // debounce settling time
    if (digitalRead(D19) == LOW) {
      // handle BTN_A press
    }
  }
  if (btnBFlag) {
    btnBFlag = false;
    delay(30);
    if (digitalRead(D15) == LOW) {
      // handle BTN_B press
    }
  }
}
```

### Comportamento padrão no painel de fábrica

No firmware de fábrica pré-carregado, os botões são mapeados da seguinte forma (você pode sobrescrever isso no seu próprio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Ação</th></tr>
    <tr><td><strong>BTN_A (D19)</strong></td><td>Pressão curta: alternar o brilho da tela <strong>100% → 75% → 50% → 25% → 0% → 100%</strong></td></tr>
    <tr><td><strong>BTN_B (D15)</strong></td><td>Pressão curta: <strong>alternar tela desligada / restaurar para o último brilho</strong></td></tr>
  </table>
</div>

Os pads de breakout dos botões (rotulados como U1 e U2 na placa) espelham D19 e D15, respectivamente, permitindo que você conecte botões externos, se desejar.

---

## Status da bateria

Esta demonstração mostra o status da bateria — um ícone de bateria com nível de carga e estado de carregamento — no Display IPS de 1,47''. Ela detecta se uma bateria LiPo está fisicamente conectada e mostra um de três estados: **USB PWR** (sem bateria), **porcentagem** (apenas bateria) ou **carregando** (USB + bateria).

O Display IPS de 1,47'' inclui um circuito de medição de tensão de bateria integrado. O nRF52840 Plus lê a tensão da bateria LiPo por meio de um divisor de tensão e pode exibir a capacidade restante como uma porcentagem.

**Localização do código:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

**Display:**

A tela é controlada por **Seeed_GFX2** com `Board_XIAO_1inch47_Touch_Display<38, 37>` e `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, rotação 2) via SPI de hardware de 10 MHz.

**Circuito da bateria:**

O nRF52840 Plus usa **três pinos GPIO** para formar um sistema completo de monitoramento de bateria:

<div class="table-center">
  <table align="center">
    <tr><th>Sinal</th><th>Pino nRF52840</th><th>Função</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>Habilitação do divisor de tensão da bateria. Ativo em nível baixo — defina LOW para habilitar o divisor, depois libere para HIGH (alta impedância) para economizar energia.</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>Entrada analógica que lê a tensão da bateria dividida.</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>Indicador de status de carregamento. Ativo em nível baixo — lê LOW quando um carregador está conectado e a bateria está carregando.</td></tr>
  </table>
</div>

**Detecção:**

Sob USB-C, uma tensão VBAT estática não consegue indicar se há uma bateria presente — o nó BAT do carregador pode parecer uma célula Li-ion real mesmo sem nenhuma bateria conectada. Portanto, o demo primeiro aprende uma **linha de base somente USB**, depois confirma a inserção da bateria apenas após um deslocamento sustentado de VBAT para baixo, e confirma a remoção após uma leitura ruidosa/pulada combinada com `~CHG` indo para HIGH. Isso espelha a lógica de detecção do Dashboard de fábrica.

**Estados do ícone:**

- **Sem bateria** — ícone de bateria em cinza com um X vermelho, rotulado como **USB PWR**.
- **Bateria presente** — ícone de bateria com contorno branco e preenchimento colorido (verde / amarelo / vermelho por porcentagem), rotulado com a **porcentagem** e a **tensão**.
- **Carregando** — preenchimento ciano com um ícone de raio, rotulado com a porcentagem e a tensão.

:::note
O pino `~CHG` é lido através dos **registradores brutos de GPIO** do nRF52840 (`nrf_gpio_cfg_input()` e `NRF_P0->IN`) em vez de `digitalRead()`. Na API do Arduino, os números dos pinos seguem o mapeamento do pacote da placa, onde `digitalRead(17)` na verdade lê **P0.07** (a linha de dados I2C do IMU de 6 eixos) em vez de P0.17. As constantes `14` e `17` aqui são **números brutos de pinos Nordic P0.x** (P0.14 e P0.17), que é exatamente o que as chamadas de registrador esperam.
:::

:::note
O demo usa o resistor de lado baixo **499 kΩ** calibrado de fábrica (taxa do divisor ≈ 3,004), não o valor nominal de 510 kΩ. O divisor está integrado no próprio módulo XIAO nRF52840 Plus, não na placa de display. O pino de habilitação P0.14 é **ativo em nível baixo**: coloque-o em LOW para habilitar o divisor, depois libere para alta impedância (INPUT) para minimizar a corrente de repouso quando a bateria não estiver sendo medida.
:::

### Executando o Demo

**Passo 1.** Abra `xiao_nrf52840_147_battery_status.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Porta** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Observe a tela — ela mostra o ícone da bateria com o estado atual. Conecte ou desconecte uma bateria LiPo (ou o cabo USB-C) para ver o ícone alternar entre os três estados.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (sem bateria)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Porcentagem</strong> (somente bateria)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Carregando</strong> (USB + bateria)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector da bateria</strong> (parte traseira)</div></td>
    </tr>
  </table>
</div>

Sem uma bateria, a tela mostra uma bateria cinza com um X vermelho e o rótulo **USB PWR**. Insira uma bateria LiPo e o ícone muda para um preenchimento colorido com a porcentagem e a tensão. Conecte o USB-C enquanto uma bateria estiver presente e o preenchimento fica ciano com um raio, indicando carregamento.

O demo também imprime uma linha de diagnóstico no Monitor Serial a cada 500 ms, por exemplo:

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## Recursos

- **🗃️[Arquivos de projeto da PCB]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [Código de demonstração da XIAO Display Board](https://github.com/Seeed-Projects/Display-Gadgets) — todas as demos de Function estão no diretório `code_GFX2/Function/147_nRF52840/`

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
