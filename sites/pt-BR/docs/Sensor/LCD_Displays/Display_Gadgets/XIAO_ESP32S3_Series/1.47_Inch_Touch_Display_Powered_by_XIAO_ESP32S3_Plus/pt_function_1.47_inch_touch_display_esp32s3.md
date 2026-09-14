---
description: Demos autônomos em nível de função para cada periférico onboard do XIAO 1,47'' IPS Display (ESP32-S3). Cobre tela, cartão SD, IMU, toque, microfone PDM, gravação e reprodução de áudio em SD, botões e detecção de tensão da bateria.
title: Uso dos periféricos onboard
keywords:
  - XIAO
  - ESP32-S3
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.47_inch_touch_display_esp32s3
sku: 100069905
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/pt-br/function_1.47_inch_touch_display_esp32s3/
---

# Uso dos periféricos onboard

Esta página reúne demos autônomos em nível de função para cada periférico onboard do display IPS de 1,47''. Cada seção é independente — você pode escolher a que corresponde ao seu caso de uso sem precisar ler as demais.

:::tip
Os GIFs de demonstração nesta página estão acelerados para mantê-los curtos.
:::

:::note
Todos os demos desta página exigem **esp32 Boards by Espressif (3.3.11)** conforme descrito em [Getting Started](/pt-br/getting_started_1.47_inch_touch_display_esp32s3), além da biblioteca **Seeed_GFX2** instalada manualmente conforme descrito abaixo.
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
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** é responsável pelo mapeamento de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução, ordem de cores (BGR) e orientação. Nenhum `driver.h` ou configuração manual de pinos é necessária.
- Nesta placa os demos usam `Board_XIAO_1inch47_Touch_Display<13, 12>` (RST=13, BL=12) com `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, sem inversão).
- O **controlador de toque** (AXS5106L) é tratado pela camada de toque `Seeed_GFX2` (`Touch_AXS5106L`) — nenhuma biblioteca extra é necessária. A **IMU** é lida via I2C puro (`Wire`) nos sketches.
- Os exemplos **SD BMP Reader** e **SD Recorder** usam o **`SD.h`** embutido no pacote de placas ESP32 para acesso ao cartão SD.
:::

## Obtendo o código de demonstração

Cada demo desta página está no repositório [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro do diretório `code_GFX2/Function/`. Cada demo é uma pasta contendo um único sketch `.ino`. **Sempre baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

**Opção A — Baixar o repositório como ZIP (recomendado):**

1. Abra [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) e clique em **Code > Download ZIP**, depois extraia o arquivo em qualquer lugar conveniente.
2. Navegue até `code_GFX2/Function/` e abra a pasta mostrada na linha **Code location** de cada demo. Por exemplo, o demo GraphicTest para esta placa está em `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`.
3. **Dê um clique duplo no arquivo `.ino`** para abri-lo no Arduino IDE.

**Opção B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Em seguida, abra o arquivo `.ino` do demo a partir da pasta clonada `code_GFX2/Function/...`.

## Display da tela — GraphicTest

Este demo executa um benchmark gráfico completo no painel JD9853A de 1,47 polegadas, cobrindo barras de cores, linhas, retângulos, círculos, triângulos, retângulos arredondados, texto e um gradiente de pixels. Use-o para verificar se a tela está ligada corretamente e se todas as chamadas de desenho funcionam como esperado.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O sketch inicializa o painel JD9853A via **Seeed_GFX2** e, em seguida, percorre dez primitivas gráficas em sequência, medindo o tempo de execução de cada uma via `micros()` e imprimindo o resultado no monitor serial.

O display é inicializado com uma única chamada de template:

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<13, 12>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

O template **Board** é responsável pelo mapeamento de pinos — CS=D2, DC=D3, SCK=D8, MOSI=D10 — e seus parâmetros de template `<RST, BL>` recebem números GPIO puros, então `<13, 12>` define RST=GPIO13 (D17) e BL=GPIO12 (D18). O **Panel Config** incorpora a resolução 172×320, a ordem de cores BGR e nenhuma inversão — nenhum `driver.h` ou escrita manual de MADCTL é necessária.

### Executando o demo

**Passo 1.** Abra `xiao_esp32s3_147_graphictest.ino` no Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Porta** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver a saída de tempo para cada teste:

```
=== XIAO ESP32-S3 Plus 1.47 graphic test ===
LCD width: 172
LCD height: 320
Color bars: 162.32 ms
Lines: 4562.40 ms
Fast lines: 240.45 ms
Rectangles: 189.31 ms
Filled rectangles: 644.85 ms
Circles: 667.74 ms
Triangles: 531.25 ms
Round rectangles: 236.16 ms
Text: 1899.09 ms
Pixel gradient: 7933.69 ms
Graphic test finished.
```

Na tela, você verá cada padrão de teste exibido por cerca de um segundo antes que o próximo comece. Quando todos os testes forem concluídos, aparecerá uma tela "Finished" com uma borda azul de retângulo arredondado.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Depois que o sketch percorre todos os padrões, a tela mostra a mensagem "Graphic Test / Finished". Reinicie a placa para executar o teste novamente.

---

## Toque — Touch Circle

Este demo transforma a tela sensível ao toque de 1,47 polegadas em um bloco de desenho interativo. Toque em qualquer lugar da tela e um círculo branco aparecerá na ponta do seu dedo. Os círculos permanecem na tela, acumulando-se conforme você toca. Toque na barra **CLEAR** na parte inferior da tela para apagar todos os círculos e recomeçar.

**Code location:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O demo usa o controlador de toque capacitivo **AXS5106L** (endereço I2C `0x63`) conectado via I2C em D4/D5. O controlador reporta coordenadas absolutas (X, Y) na faixa de pixels do display. O toque é tratado pela **camada Touch** do Seeed_GFX2 (`Touch_AXS5106L`):

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
    <tr><td>D7</td><td>Interrupção de toque (INT)</td></tr>
    <tr><td>RST</td><td>Compartilhado com o reset do LCD (GPIO13 / D17)</td></tr>
  </table>
</div>

**Desenho acionado por borda.** O sketch usa uma abordagem de detecção de borda: ele só adiciona um círculo na borda de descida de um toque (dedo pressionando), não enquanto o dedo é mantido na tela. Isso proporciona um comportamento nítido e intencional de toque-para-desenhar em vez de pintar continuamente um rastro enquanto você arrasta.

**Espelhamento do eixo X.** O painel de toque é fisicamente montado em uma orientação diferente do LCD, então a coordenada X bruta precisa ser espelhada. `display.getTouch()` já aplica esse espelhamento internamente e retorna coordenadas de tela, portanto não é necessária nenhuma transformação manual `screenX = 172 - 1 - rawX`.

**Buffer de círculos.** Até 120 círculos são armazenados em um buffer circular. Quando o buffer está cheio, o círculo mais antigo é removido e a tela é redesenhada para manter o display limpo.

**Zona CLEAR.** Os 36 pixels inferiores da tela são reservados como uma barra CLEAR. Tocar nessa área apaga todos os círculos e reinicia o contador em vez de desenhar um novo círculo.

**Área segura de desenho.** Uma borda cinza escura delimita a área onde os círculos ficam totalmente visíveis.

### Executando a demonstração

**Passo 1.** Abra `xiao_esp32s3_147_touch_circle.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta e clique em **Upload**.

**Passo 3.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
=== XIAO ESP32-S3 Touch Circle Demo ===
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**Passo 4.** Toque na tela — cada toque imprime as coordenadas de tela mapeadas, e tocar na barra CLEAR imprime uma mensagem de apagamento:

```
Touch: (76,163)
Touch: (64,226)
Touch: (32,80)
Touch: (118,100)
Touch: (37,311)
Clear zone tapped — erasing all circles.
Touch: (72,143)
Touch: (134,61)
Touch: (61,293)
Clear zone tapped — erasing all circles.
```

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

Cada toque deixa um círculo branco na ponta do seu dedo. A barra de título da tela mostra a contagem em execução. Toque na barra CLEAR e a tela é redefinida para em branco, com a borda e a barra de título redesenhadas.

---

## Cartão SD — Leitor de BMP

Esta demonstração lê uma imagem `.bmp` de 24 bits sem compactação de um cartão MicroSD e a exibe na tela. Ela inclui um teste de sondagem SD embutido (gravação/leitura) e imprime diagnósticos completos no monitor serial, tornando-a útil para verificar tanto o acesso ao cartão SD quanto a decodificação BMP. Imagens maiores que 172×320 são recortadas ao centro; imagens menores são centralizadas na tela.

**Localização do código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O LCD e o cartão SD compartilham os mesmos pinos SPI físicos (SCK = D8, MOSI = D10, MISO = D9), mas usam **hosts SPI separados**: o LCD roda no host HSPI do Seeed_GFX2, enquanto o cartão SD roda no host FSPI padrão do ESP32. O chip-select do SD (D6) é mantido em nível HIGH quando ocioso para que o cartão permaneça fora do barramento compartilhado. O sketch **lê o cartão SD primeiro e depois inicializa o LCD** — ele monta o SD, decodifica o BMP em um frame buffer na RAM, chama `SD.end()` e só então inicializa o display. Essa ordem impede que os dois hosts SPI entrem em conflito pelos pinos compartilhados D8/D10.

O sketch monta o cartão SD em várias frequências SPI (4 MHz → 1 MHz → 400 kHz), depois executa uma rápida sondagem de gravação/leitura (`/SDPROBE.TXT`) para confirmar que o sistema de arquivos está acessível antes de decodificar qualquer imagem. Em seguida, ele procura um arquivo BMP na raiz do SD (nomes preferenciais: `/test.bmp`, `/TEST.BMP`, `/image.bmp`, `/IMAGE.BMP`, etc.), decodifica-o linha a linha em um frame buffer RGB565 e desenha o resultado com um cabeçalho "BMP OK" (mostrando o tempo de decodificação) e o caminho do arquivo ao longo da borda inferior da tela.

**Formatos BMP suportados:**

<div class="table-center">
  <table align="center">
    <tr><th>Formato</th><th>Profundidade de bits</th><th>Observações</th></tr>
    <tr><td>BMP sem compactação (BI_RGB)</td><td>24 bits (16/32 bits também aceitos)</td><td>BGR888 convertido para RGB565 para exibição</td></tr>
  </table>
</div>

Imagens maiores que 172×320 são recortadas ao centro; imagens menores são centralizadas. Para melhores resultados, use um BMP sem compactação de 24 bits com tamanho exatamente 172×320 pixels chamado `/test.bmp`.

### Executando a demonstração

**Passo 1.** Formate um cartão MicroSD como **FAT32**.

**Passo 2.** Copie uma imagem BMP sem compactação de 24 bits chamada `test.bmp` (idealmente 172×320 pixels) para a raiz do cartão SD.

**Passo 3.** Insira o cartão SD no slot MicroSD na placa de display.

**Passo 4.** Abra `xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 5.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
=== XIAO ESP32-S3 Plus 1.47 SD BMP Reader Diagnostic v0.8 ===
[PIN] SD  CS=D6 SCK=D8 MISO=D9 MOSI=D10
[IMG] Put /test.bmp in SD root
[SD] Trying 4000000 Hz...
[SD] OK card=15193 MB freq=4000000 Hz
[PROBE] write /SDPROBE.TXT
[PROBE] write OK
[PROBE] read /SDPROBE.TXT
[PROBE] read OK: XIAO ESP32-S3 SD probe OK

[IMG] open start /test.bmp
[IMG] open done  /test.bmp
[IMG] file size=117814
[BMP] header OK path=/test.bmp size=122x320 bpp=24 row=368 offset=54
[IMG] BMP loaded /test.bmp
[DONE] BMP loaded path=/test.bmp readMs=7881 totalMs=8016
```

:::note
Os valores exatos (`card=15193 MB`, `file size=117814`, `readMs=7881`, etc.) dependem do seu cartão SD e do arquivo BMP — sua saída será diferente.
:::

A tela então mostra a imagem decodificada com um cabeçalho verde "BMP OK" (exibindo o tempo de decodificação em milissegundos) e o caminho do arquivo ao longo da borda inferior.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_bmp_reader.gif" style={{width:500, height:'auto'}}/></div>

A imagem aparece na tela com um cabeçalho verde "BMP OK" (mostrando o tempo de decodificação) e o caminho do arquivo na parte inferior. Se nenhum arquivo BMP for encontrado, a tela mostra "No BMP loaded" com instruções para verificar o monitor serial e usar `/test.bmp`.

---

## Microfone e alto-falante

### Demonstração 1: Barra de volume

Esta demonstração transforma o microfone PDM onboard em um grande e responsivo medidor de volume. Uma barra de 10 segmentos preenche o centro da tela — verde em níveis baixos, amarela na faixa intermediária e vermelha quando alto. A porcentagem é exibida acima da barra e muda de cor para corresponder ao nível.

**Localização do código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Como funciona

O **microfone digital PDM (Pulse Density Modulation)** onboard é amostrado por meio do periférico I2S do ESP32-S3 configurado no modo PDM RX. No ESP-IDF v5 (núcleo Arduino 3.3.11), isso usa a nova API do driver (`driver/i2s_pdm.h`):

<div class="table-center">
  <table align="center">
    <tr><th>Pino</th><th>Sinal</th><th>Função</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Saída de clock PDM para o microfone</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de dados PDM do microfone</td></tr>
  </table>
</div>

O periférico I2S é configurado em **16 kHz mono** com 4 descritores de DMA de 256 quadros cada. A intensidade de acionamento do PDM CLK é reduzida após a inicialização para minimizar o acoplamento elétrico. As amostras são lidas via `i2s_channel_read()` com um tempo limite de 20 ms no loop principal.

**Processamento de sinal:**

1. **Extração de pico** — cada buffer de 256 amostras é varrido em busca do maior valor absoluto (amplitude de pico).
2. **Normalização** — o pico bruto é mapeado de um piso de 40 para um teto de 16.000, produzindo um valor de volume de 0,0–1,0. Valores abaixo do piso são tratados como silêncio.
3. **Suavização exponencial** — o volume exibido é uma média móvel exponencial do pico bruto (α = 0,20) para evitar tremulação. Quando o silêncio é detectado, o valor exibido decai em ×0,94 por quadro.

**Desenho da barra:**

<div class="table-center">
  <table align="center">
    <tr><th>Segmento</th><th>Cor</th><th>Faixa de volume</th></tr>
    <tr><td>0–4 (5 inferiores)</td><td>Verde</td><td>0% – 50%</td></tr>
    <tr><td>5–8 (4 do meio)</td><td>Amarelo</td><td>50% – 90%</td></tr>
    <tr><td>9 (topo)</td><td>Vermelho</td><td>90% – 100%</td></tr>
  </table>
</div>

A barra usa **renderização diferencial**: apenas os segmentos cujo estado mudou desde o último quadro são redesenhados. Segmentos inalterados são deixados como estão, minimizando o tráfego SPI e evitando cintilação.

#### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_147_mic_canvas.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta, depois clique em **Upload**.

**Passo 3.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
=== Volume Bar (ESP32-S3) ===
[MIC] PDM RX ready (IDF v5)
[MIC] ready — speak or blow into the mic
```

**Passo 4.** Fale no microfone PDM (localizado próximo ao canto inferior esquerdo da placa de display) ou assopre nele. A barra se preenche de verde para amarelo para vermelho, e a porcentagem é atualizada acima dela.

#### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_mic_canvas.gif" style={{width:500, height:'auto'}}/></div>

A barra responde em tempo real. Em um ambiente silencioso, a barra permanece vazia. Falar em volume normal a ~20 cm de distância acende os segmentos verdes. Assoprar diretamente no microfone empurra para a faixa amarela ou vermelha.

---

### Demo 2: Gravador SD

Este demo transforma a placa em um gravador de voz simples. Pressione **USR1** para gravar 5 segundos de áudio do microfone PDM onboard, salvá-lo no cartão MicroSD como um arquivo WAV e, em seguida, pressione **USR2** para reproduzir a gravação através de um amplificador I2S **MAX98357A** externo e alto-falante.

**Localização do código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::note
Este demo usa **Seeed_GFX2** para o display de status na tela, e o **`SD.h` embutido** do pacote de placas esp32 para acesso a arquivos. **Nenhum SdFat** é necessário.
:::

#### Configuração de Hardware

**Cartão MicroSD.** Insira um cartão MicroSD formatado em FAT32 no slot de cartão na placa de display **antes** de gravar o sketch ou ligar. O microfone PDM onboard não precisa de fiação externa.

**Saída de alto-falante.** Conecte um módulo amplificador I2S MAX98357A aos pads de breakout I2S inferiores:

<div class="table-center">
  <table align="center">
    <tr><th>Pad I2S</th><th>Pino XIAO</th><th>GPIO</th><th>MAX98357A</th></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>GPIO38</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>GPIO39</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>GPIO40</td><td>LRC / WS</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>—</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>—</td><td>GND</td></tr>
  </table>
</div>

Conecte o alto-falante aos terminais **SPK+** e **SPK-** do MAX98357A.

#### Como Funciona

O demo passa por quatro estágios, usando quatro periféricos diferentes em sequência:

**Microfone PDM (gravação).** O microfone PDM onboard é amostrado através do periférico I2S no modo PDM RX em **D0 (PDM_CLK)** e **D1 (MIC_DATA)** a 16 kHz mono. Os primeiros **300 ms** de dados capturados são descartados como dados de aquecimento para evitar um clique no início da gravação.

**Buffer de RAM.** Uma gravação de 5 segundos a 16 kHz, 16 bits mono ocupa **160.000 bytes** (`5 s × 16,000 samples/s × 2 bytes`). As amostras são mantidas em um buffer de RAM antes de serem gravadas no cartão SD.

**Cartão SD (armazenamento).** A gravação é gravada em `/REC_RAW.WAV` no cartão MicroSD usando o `SD.h` embutido do pacote de placas ESP32. O sketch monta o cartão em várias frequências SPI — tentando **8 MHz → 4 MHz → 1 MHz → 0,4 MHz** — até que uma tenha sucesso. Cada nova gravação sobrescreve o arquivo anterior.

:::caution
Este demo exclui `/REC_RAW.WAV` na inicialização. Copie a gravação para o seu computador antes de reiniciar a placa se quiser mantê-la.
:::

**Reprodução I2S.** A reprodução usa o periférico I2S no modo mestre / transmissão a **16 kHz, 16 bits, Philips estéreo**. As amostras mono são duplicadas em ambos os canais I2S esquerdo e direito, permitindo a reprodução independentemente da seleção de canal do MAX98357A.

**Barramento LCD/SD compartilhado.** O LCD e o cartão SD compartilham os pinos **D8** (SCK), **D9** (MISO) e **D10** (MOSI). O demo evita colisões dando a cada um seu próprio host SPI:

- O **LCD** usa o host **HSPI** do Seeed_GFX2.
- O **cartão SD** usa o host **FSPI** padrão do ESP32.
- Antes de gravar ou ler do cartão SD, o sketch chama `display.end()` para liberar o controle do LCD sobre os pinos compartilhados e, em seguida, reinicializa o display assim que a transferência SD é concluída.

Essa separação evita conflitos de transação SPI entre as atualizações do LCD e o acesso ao cartão SD.

#### Executando o Demo

**Passo 1.** Insira um cartão MicroSD **FAT32** no slot de cartão na placa de display.

**Passo 2.** Conecte o amplificador **MAX98357A** e o alto-falante aos pads de breakout I2S conforme descrito acima.

**Passo 3.** Abra `xiao_esp32s3_147_sd_record.ino` na Arduino IDE.

**Passo 4.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (com o pacote de placas esp32 **3.3.11**) e a **Port** correta, depois clique em **Upload**.

**Passo 5.** Após o upload, a tela mostra **"SD Recorder"**.

**Passo 6.** Pressione **USR1** e fale no microfone PDM onboard por 5 segundos.

**Passo 7.** Aguarde a tela mostrar **"Saved SD WAV"** — a gravação foi gravada no cartão SD.

**Passo 8.** Pressione **USR2** para reproduzir a gravação pelo alto-falante.

#### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

- A tela mostra o progresso da gravação enquanto captura.
- Após o término da gravação, a tela mostra **"Saved SD WAV"**.
- Um arquivo `/REC_RAW.WAV` é criado no cartão SD.
- Pressionar **USR2** reproduz pelo alto-falante o áudio que você acabou de gravar.

---

## IMU

O Display IPS de 1,47'' possui uma IMU de 6 eixos onboard (LSM6DS3) conectada via I2C em D4/D5. A linha de interrupção de movimento em **D14** suporta wake-up por hardware e detecção de gestos.

:::note
A IMU onboard é a **LSM6DS3** (confirmada pelo esquemático da placa, endereço I2C `0x6A`). Os sketches de demo também sondam um sensor compatível com QMI8658 como fallback defensivo, mas o Display IPS de 1,47'' fornecido usa o LSM6DS3.
:::

Ambos os demos abaixo leem a **LSM6DS3** onboard via I2C. Os sketches também sondam um sensor compatível com QMI8658 como fallback defensivo, mas a configuração de levantar-para-acordar é direcionada aos registradores da LSM6DS3.

<a id="imu-quicksand"></a>

### Demo 1: Areia Movediça Eletrônica

Este demo transforma a tela em uma simulação de fluido interativa — partículas de areia dourada que fluem e se acomodam de acordo com a gravidade, conforme medido pela IMU de 6 eixos onboard. Incline a placa e a areia muda de direção em tempo real.

**Localização do código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

A simulação usa uma **grade de ocupação de 24×45** sobreposta na tela de 172×320, onde cada célula tem 7×7 pixels. Cerca de **180 partículas** são colocadas na grade, cada uma com posição, velocidade e um gradiente de cor dourado.

O IMU é lido via I2C (D4/D5) a cada **8 ms**. O sketch procura por um IMU em ambos os endereços conhecidos — primeiro QMI8658, depois LSM6DS3 — e usa aquele que responder. Os valores brutos de aceleração são filtrados com um filtro passa‑baixa e usados para derivar um vetor de gravidade. Quando você inclina a placa:

1. **Atualização do vetor de gravidade** — os dados do acelerômetro são suavizados com uma média móvel exponencial para evitar tremores.
2. **Velocidade das partículas** — cada partícula acelera na direção do vetor de gravidade, com amortecimento e um fator de mobilidade por partícula baseado em sua profundidade no fluxo.
3. **Ocupação das células** — partículas mais profundas no fluxo (mais próximas do "fundo" em relação à gravidade) têm mobilidade reduzida, criando um efeito de empacotamento realista.
4. **Renderização diferencial** — apenas as células para onde as partículas se moveram para dentro ou para fora são redesenhadas, minimizando o tráfego SPI e mantendo a animação suave.

As partículas próximas à superfície fluem livremente (maior mobilidade); partículas enterradas mais profundamente se empacotam firmemente (menor mobilidade) — imitando como a areia real se comporta.

### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_147_electronic_quicksand.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta, depois clique em **Upload**.

**Passo 3.** Depois de enviado, a tela se enche de partículas douradas na parte inferior. Incline a placa em diferentes direções — a areia flui como se fosse puxada pela gravidade.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para confirmar a inicialização:

```
=== Electronic Quicksand ESP32-S3 1.47 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

As partículas fluem em direção à borda mais baixa conforme você inclina a placa. Quando o display fica plano, o demo mantém a direção de gravidade anterior.

---

### Demo 2: Levantar para Despertar

Este demo implementa um **sistema de suspensão/despertar da tela** acionado pela interrupção de wake‑up integrada do IMU no **D14**. A tela desliga automaticamente (backlight desligado + sono leve do ESP32) após 8 segundos de inatividade e desperta instantaneamente quando você pega ou move o dispositivo.

**Localização do código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

O demo usa o **detector de evento de wake‑up incorporado** do IMU — um recurso de hardware que monitora internamente os dados do acelerômetro e aciona o pino INT1 (conectado ao D14 nesta placa) quando o movimento excede um limite configurável. Isso significa que o MCU não precisa consultar o acelerômetro continuamente.

O demo de levantar‑para‑despertar configura o **LSM6DS3** onboard para wake‑up acionado por movimento.

**Configuração do IMU (LSM6DS3):**

<div class="table-center">
  <table align="center">
    <tr><th>Registrador</th><th>Valor</th><th>Finalidade</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerômetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupções incorporadas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Limiar de wake‑up (sensibilidade média‑baixa)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sem filtro de duração (wake responsivo)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Direcionar wake‑up para INT1</td></tr>
  </table>
</div>

**Fluxo de suspensão/despertar:**

1. **Estado ativo** — a tela está ligada, backlight em PWM 160. Os dados do IMU e a tensão da bateria são atualizados a cada 250 ms / 1000 ms respectivamente. Um temporizador regressivo mostra os segundos restantes até a suspensão automática.
2. **Suspensão automática** — após 8 segundos sem atividade, o sketch desliga o backlight, exibe a mensagem "Sleeping... Pick up device to wake", configura o D14 como fonte de wake‑up via `esp_sleep_enable_gpio_wakeup()` e entra em sono leve do ESP32.
3. **Wake‑up** — quando o usuário pega a placa, o IMU detecta movimento e aciona o D14 em nível HIGH. O ESP32 acorda do sono leve e redesenha a interface.

**Botões de teste manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Ação</th></tr>
    <tr><td>USR1</td><td>D19</td><td>Forçar wake</td></tr>
    <tr><td>USR2</td><td>D15</td><td>Forçar suspensão</td></tr>
  </table>
</div>

### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_147_wakeup.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 2.** A tela mostra um painel com estado de energia, dados de movimento e um temporizador regressivo. Deixe a placa parada por 8 segundos — ela entrará em suspensão automaticamente.

**Passo 3.** Pegue a placa ou agite‑a levemente — a tela desperta imediatamente.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para observar a detecção do IMU e os eventos de wake:

```
=== XIAO ESP32-S3 Plus 1.47 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[IMU] wake config OK
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
```

Cada wake por movimento imprime uma nova linha `[WAKE] IMU_D14  count=N` com um contador incrementado. A transição para suspensão é mostrada apenas na tela — nenhuma linha serial é impressa quando a placa entra em suspensão.

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

A tela exibe dados em tempo real do acelerômetro e giroscópio enquanto está acordada. Após 8 segundos de imobilidade, a tela escurece e o ESP32‑S3 entra em sono leve. Pegue o dispositivo e a tela é restaurada em frações de segundo, com o contador de wake incrementado.

---

## Botão de Usuário

O Display IPS de 1,47'' possui **dois botões físicos de pressão** conectados ao XIAO ESP32‑S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Lógica</th><th>Rótulo na Serigrafia</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

### Lendo um Botão

Ambos os botões usam os resistores de pull‑up internos do XIAO. Uma leitura simples por pesquisa (polling) com debounce fica assim:

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

### Debounce com Interrupções

Para um tratamento de botões responsivo e com debounce, você pode usar interrupções de GPIO com um curto atraso de estabilização:

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

### Comportamento Padrão no Dashboard de Fábrica

No firmware de fábrica pré‑carregado, os botões são mapeados da seguinte forma (você pode sobrescrever isso no seu próprio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Ação</th></tr>
    <tr><td><strong>BTN_A (D19)</strong></td><td>Pressão curta: alternar o brilho da tela <strong>100% → 75% → 50% → 25% → 0% → 100%</strong></td></tr>
    <tr><td><strong>BTN_B (D15)</strong></td><td>Pressão curta: <strong>alternar tela desligada / restaurar para o último brilho</strong></td></tr>
  </table>
</div>

Os pads de breakout dos botões (rotulados U1 e U2 na placa) espelham D19 e D15 respectivamente, permitindo que você conecte botões externos se desejar.

## Detecção de Tensão da Bateria

Este demo lê o divisor de tensão da bateria onboard no **D16** e mostra duas leituras amarelas em tempo real no Display IPS de 1,47'': a tensão bruta do divisor em D16 e a tensão calculada da bateria. Ele exibe apenas leituras de tensão; não estima a porcentagem da bateria nem informa o status de carregamento.

**Localização do código:** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

**Circuito da bateria:**

O ESP32-S3 Plus lê a tensão da bateria LiPo por meio de um divisor de tensão onboard conectado ao **D16**:

<div class="table-center">
  <table align="center">
    <tr><th>Sinal</th><th>Pino do ESP32-S3</th><th>Função</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Entrada analógica que lê a tensão da bateria dividida. Conectado internamente a um circuito divisor de tensão (316K / 160K). <strong>Não use este pino externamente.</strong></td></tr>
  </table>
</div>

**Taxa do divisor de tensão:** R14 = 316 kΩ, R15 = 160 kΩ → **Taxa do divisor = (316 + 160) / 160 ≈ 2,975**

**Leitura:**

O sketch inicializa o display com `Board_XIAO_1inch47_Touch_Display<13, 12>` e `Config_Seeed_1inch47_Touch_JD9853A` (172×320, BGR, sem inversão), depois amostra o **D16** doze vezes (a cada 700 µs) usando `analogReadMilliVolts()` com resolução de 12 bits e atenuação de 11 dB. Ele faz a média das amostras para obter a tensão bruta no divisor, multiplica pela taxa do divisor para obter a tensão da bateria (`Calc = D16 × 2.975`) e desenha ambas como duas linhas amarelas centralizadas. A tela é atualizada apenas quando qualquer um dos valores muda de forma significativa (D16 ≥ 0,02 V ou Calc ≥ 0,05 V).

:::note
Nenhum sinal de status de carregamento está conectado a um GPIO do ESP32-S3. Esta demonstração exibe apenas leituras de tensão; ela não detecta a presença da bateria ou o status de carregamento, nem estima a porcentagem da bateria.
:::

### Executando a Demo

**Passo 1.** Abra `xiao_esp32s3_147_battery_status.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Observe a tela — ela mostra duas linhas amarelas: a tensão bruta do divisor em D16 e a tensão calculada da bateria. Conecte ou desconecte uma bateria LiPo (ou o cabo USB-C) para ver os valores sendo atualizados.

### Resultado Esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Leitura de tensão</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector da bateria</strong> (parte traseira)</div></td>
    </tr>
  </table>
</div>

A tela mostra a tensão bruta do divisor em D16 na linha superior e a tensão calculada da bateria (`Calc`) na linha inferior. Com uma bateria LiPo conectada, `Calc` se aproxima da tensão no terminal da bateria. Uma leitura também pode aparecer apenas com alimentação via USB, portanto `Calc` não pode, por si só, confirmar se uma bateria está conectada.

A demo também imprime uma linha de diagnóstico no Serial Monitor a cada segundo, por exemplo:

```
D16 1.39V | Calc 4.14V
```

---

## Recursos

- **🗃️[Arquivos de Projeto de PCB]** [XIAO 1.47'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.47'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de Fábrica]** [XIAO 1.47'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [Código de Demonstração da XIAO Display Board](https://github.com/Seeed-Projects/Display-Gadgets) — todas as demos de Function estão no diretório `code_GFX2/Function/147_ESP32/`

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

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
