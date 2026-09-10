---
description: Demos autônomos em nível de função para cada periférico onboard do XIAO 1,14'' IPS Display (nRF52840). Cobre tela, IMU, microfone PDM, gravação em Flash interna e reprodução de áudio I2S, botões, bateria e Grove I2C.
title: Uso dos periféricos onboard
sidebar_label: Função
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Função
  - 1.14
  - I2S
  - Áudio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.14_inch_display_nrf52840
sku: 100069374
sidebar_position: 2
last_update:
  date: 08/12/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/pt-br/function_1.14_inch_display_nrf52840/
---

# Uso dos periféricos onboard

Esta página reúne demos autônomos em nível de função para cada periférico onboard do display IPS de 1,14''. Cada seção é independente — você pode escolher a que corresponde ao seu caso de uso sem precisar ler as demais.

:::tip
Os GIFs de demonstração nesta página estão acelerados para mantê-los curtos.
:::

:::note
Todas as demos desta página exigem **Seeed nRF52 Boards (1.1.13)** conforme descrito em [Introdução](/pt-br/getting_started_1.14_inch_display_nrf52840), além da biblioteca **Seeed_GFX2** instalada manualmente conforme descrito abaixo.
:::

- **Library Manager** — vá em **Sketch > Include Library > Manage Libraries...**, pesquise e instale:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Demos de IMU</td></tr>
  </table>
</div>

- **Seeed_GFX2 (Instalação manual)** — esta biblioteca não está disponível no Library Manager e deve ser instalada manualmente:

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
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** é responsável pelo mapa de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 135×240, a ordem de cores e a inversão. Nenhum `driver.h` ou configuração manual de pinos é necessária.
- Nesta placa, as demos usam `Board_XIAO_1inch14_LCD<38, 37>` (RST=38, BL=37) com `Config_Seeed_1inch14_LCD_ST7789` (135×240). Algumas demos definem uma substituição local do sketch `Config_XIAO_1inch14_LCD_ST7789_BGR` para a ordem de cores BGR.
- As demos de **IMU** usam a biblioteca **Seeed Arduino LSM6DS3** (instalada acima).
- O display IPS de 1,14'' **não possui controlador touch nem slot para cartão SD**, portanto, não são necessárias bibliotecas de touch ou SD.
:::

:::note
As bibliotecas **PDM**, **Adafruit TinyUSB**, **Adafruit LittleFS** e **InternalFileSystem** usadas pelo tutorial de **Flash Recorder** vêm incluídas em **Seeed nRF52 Boards 1.1.13** — não instale versões separadas pelo Library Manager.

A gravação é armazenada no **filesystem de Flash interno** do nRF52840. Este display não possui slot para cartão SD, e o tutorial não usa SdFat.
:::

## Obtendo o código de demonstração

Cada demo desta página está no repositório [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), no diretório `code_GFX2/Function/`. Cada demo é uma pasta contendo um único sketch `.ino`. **Sempre baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

**Opção A — Baixar o repositório como ZIP (recomendado):**

1. Abra [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) e clique em **Code > Download ZIP**, depois extraia o arquivo em qualquer lugar conveniente.
2. Navegue até `code_GFX2/Function/` e abra a pasta mostrada na linha **Code location** de cada demo. Por exemplo, a demo GraphicTest para esta placa está em `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`.
3. **Dê um clique duplo no arquivo `.ino`** para abri-lo no Arduino IDE.

**Opção B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Em seguida, abra o arquivo `.ino` da demo a partir da pasta clonada `code_GFX2/Function/...`.

## Exibição na tela — GraphicTest

Esta demo executa um benchmark gráfico completo no painel IPS ST7789 de 1,14 polegada (135×240), cobrindo barras de cores, linhas, retângulos, círculos, triângulos, retângulos arredondados, texto e um gradiente de pixels. Use-a para verificar se a tela está conectada corretamente e se todas as chamadas de desenho funcionam como esperado.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O sketch inicializa o painel IPS ST7789 via **Seeed_GFX2**, depois executa em sequência dez primitivas gráficas, medindo o tempo de execução de cada uma via `micros()` e imprimindo o resultado no monitor serial.

O display é inicializado com uma única chamada de template:

```cpp
display.begin<Board_XIAO_1inch14_LCD<38, 37>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

O template **Board** é responsável pelo mapa de pinos — CS=D2, DC=D3, SCK=D8, MOSI=D10 — e seus parâmetros de template `<RST, BL>` recebem números GPIO puros, então `<38, 37>` define RST=GPIO38 e BL=GPIO37. O **Panel Config** incorpora a resolução 135×240, a ordem de cores e a inversão (`invert = true`), portanto, nenhum `driver.h` ou chamada manual de `invertDisplay()` é necessária.

### Executando a demo

**Passo 1.** Abra `xiao_nrf52840_114_graphictest.ino` no Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Porta** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver a saída de tempo para cada teste:

```
LCD width: 135
LCD height: 240
Color bars: 34.18 ms
Lines: 2599.61 ms
Fast lines: 57.62 ms
Rectangles: 44.92 ms
Filled rectangles: 125.98 ms
Circles: 291.02 ms
Triangles: 289.06 ms
Round rectangles: 95.70 ms
Text: 1416.02 ms
Pixel gradient: 4774.42 ms
Graphic test finished.
```

Na tela, você verá cada padrão de teste exibido por cerca de um segundo antes que o próximo comece. Quando todos os testes forem concluídos, aparecerá uma tela "Finished".

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Depois que o sketch executa todos os padrões, a tela mostra a mensagem "Finished". Reinicie a placa para executar o teste novamente.

---

## IMU

O display IPS de 1,14'' possui uma IMU de 6 eixos onboard (LSM6DS3) conectada via I2C em D4/D5. A linha de interrupção de movimento em **D14** oferece suporte a wake-up por hardware e detecção de gestos.

Ambas as demos abaixo usam o LSM6DS3 no endereço I2C **0x6A**.

<a id="imu-quicksand"></a>

### Demo 1: Areia movediça eletrônica

Esta demo transforma a tela em uma simulação de fluido interativa — partículas de areia dourada que fluem e se acomodam de acordo com a gravidade, conforme medida pela IMU de 6 eixos onboard. Incline a placa e a areia muda de direção em tempo real.

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

A simulação usa uma **grade de ocupação de 22×40** sobreposta na tela de 135×240, onde cada célula tem 6×6 pixels. Cerca de **150 partículas** são colocadas na grade, cada uma com posição, velocidade e um gradiente de cor dourado.

O IMU é lido via I2C (D4/D5) usando a biblioteca Seeed Arduino LSM6DS3 no endereço `0x6A`. Os valores brutos de aceleração são filtrados com um filtro passa-baixa e usados para derivar um vetor de gravidade. Quando você inclina a placa:

1. **Atualização do vetor de gravidade** — os dados do acelerômetro são suavizados com uma média móvel exponencial para evitar tremores.
2. **Velocidade das partículas** — cada particula acelera na direção do vetor de gravidade, com amortecimento e um fator de mobilidade por partícula baseado em sua profundidade no fluxo.
3. **Ocupação das células** — partículas mais profundas no fluxo (mais próximas do "fundo" em relação à gravidade) têm mobilidade reduzida, criando um efeito de empacotamento realista.
4. **Renderização diferencial** — apenas as células para onde as partículas se moveram para dentro ou para fora são redesenhadas, minimizando o tráfego SPI e mantendo a animação suave.

Partículas próximas à superfície fluem livremente (maior mobilidade); partículas enterradas mais profundamente se compactam firmemente (menor mobilidade) — imitando como a areia real se comporta.

### Executando o Demo

**Passo 1.** Abra `xiao_nrf52840_114_electronic_quicksand.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta, depois clique em **Upload**.

**Passo 3.** Depois de enviado, a tela se enche com partículas douradas na parte inferior. Incline a placa em diferentes direções — a areia flui como se fosse puxada pela gravidade.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para confirmar a inicialização:

```
=== Electronic Quicksand 1.14 ===
imu.begin=0
```

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

As partículas de areia dourada fluem suavemente enquanto você inclina a placa. Quando mantida plana, a areia se acomoda na parte inferior da tela. Gire a placa em 90 graus e a areia flui para o novo "fundo" em um segundo.

---

### Demo 2: Levantar para Despertar

Este demo implementa um **sistema de suspensão/despertar da tela** acionado pela interrupção de movimento integrada do IMU no **D14**. A tela desliga automaticamente (luz de fundo desligada + sono System ON do nRF52) após um período de inatividade configurável, e desperta instantaneamente quando você pega ou move o dispositivo.

**Localização do código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

O demo usa o **detector de evento de despertar incorporado** do LSM6DS3 — um recurso de hardware que monitora internamente os dados do acelerômetro e aciona o pino INT1 (conectado ao D14 nesta placa) quando o movimento excede um limite configurável. Isso significa que o MCU não precisa consultar o acelerômetro continuamente.

**Configuração do IMU (LSM6DS3):**

<div class="table-center">
  <table align="center">
    <tr><th>Registrador</th><th>Valor</th><th>Finalidade</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerômetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupções incorporadas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Limiar de despertar (sensibilidade média-baixa)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sem filtro de duração (despertar responsivo)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Roteia o despertar para INT1</td></tr>
  </table>
</div>

**Fluxo de suspensão/despertar:**

1. **Estado ativo** — a tela está ligada, luz de fundo em brilho máximo, a interface é atualizada a cada 250 ms com dados de IMU em tempo real. Um temporizador regressivo mostra os segundos restantes até a suspensão automática.
2. **Suspensão automática** — após o tempo limite de inatividade, o sketch desliga a luz de fundo, exibe a mensagem "Sleeping... Pick up device to wake" e entra no modo System ON sleep do nRF52 (modo de baixo consumo com retenção de RAM). A interrupção de despertar do IMU no D14 já foi configurada na inicialização, então a detecção de movimento permanece ativa durante o sono.
3. **Despertar** — quando o usuário pega a placa, o IMU detecta o movimento e aciona D14 em nível HIGH. O nRF52840 sai do System ON sleep, restaura a luz de fundo e redesenha a interface. O LCD e o IMU **não** são reinicializados — o System ON sleep mantém a RAM e a configuração dos periféricos, então ambos preservam as configurações aplicadas na inicialização.

**Botões de teste manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Ação</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forçar suspensão</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forçar despertar</td></tr>
  </table>
</div>

### Executando o Demo

**Passo 1.** Abra `xiao_nrf52840_114_wakeup.ino` na Arduino IDE, selecione a placa e a porta, e clique em **Upload**.

**Passo 2.** A tela mostra um painel com estado de energia, dados de movimento e um temporizador regressivo. Deixe a placa parada — ela entrará automaticamente em suspensão após o período de inatividade.

**Passo 3.** Pegue a placa ou agite-a suavemente — a tela desperta imediatamente.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para observar as transições de suspensão/despertar:

```
LCD: 135x240
[IMU] Seeed LSM6DS3 begin=0
[IMU] D14 wake interrupt OK
[BOOT] done. Screen should be on.
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=3568 sleepLoops=0
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=1378 sleepLoops=439
```

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

A tela exibe dados de movimento em tempo real enquanto está ativa. Após o período de inatividade em repouso, a tela escurece e o nRF52840 entra em modo de suspensão de baixo consumo. Pegue o dispositivo e a tela é restaurada instantaneamente, com o contador de despertares incrementado.

---

## Microfone e Alto-falante

O Display IPS de 1,14'' possui o mesmo microfone digital PDM da versão de 1,47", conectado aos mesmos pinos:

<div class="table-center">
  <table align="center">
    <tr><th>Pino</th><th>Sinal</th><th>Função</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Saída de clock PDM para o microfone</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de dados PDM do microfone</td></tr>
  </table>
</div>

### Demo 1: Barra de Voz

Este demo visualiza a entrada de áudio em tempo real do microfone PDM como uma forma de onda dinâmica no estilo de equalizador e uma barra de volume segmentada. Fale, bata palmas ou assopre no microfone onboard e veja as barras reagirem instantaneamente.

**Localização do código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Como Funciona

O sketch usa o periférico PDM do nRF52840 por meio da biblioteca `PDM` (incluída com Seeed nRF52 Boards) a 16 kHz, canal único. A ISR (`onPDMdata`) captura amostras PDM brutas em um buffer circular de 256 amostras e calcula a amplitude de pico.

A tela é dividida em três zonas:

<div class="table-center">
  <table align="center">
    <tr><th>Zona</th><th>Posição</th><th>Descrição</th></tr>
    <tr><td><strong>Forma de onda</strong></td><td>Topo (y=30–95)</td><td>Visualizador de equalizador com 27 barras. Amostras brutas são subamostradas e desenhadas como barras simétricas em torno de uma linha de base central. A cor da forma de onda é controlada pelo mesmo volume suavizado que a barra de volume e o rótulo de porcentagem — verde (&lt;50%), amarelo (50–90%), vermelho (&gt;90%).</td></tr>
    <tr><td><strong>Porcentagem</strong></td><td>Meio</td><td>Porcentagem de volume numérica grande (0–100%), codificada por cores em verde (&lt;50%), amarelo (50–90%), vermelho (&gt;90%).</td></tr>
    <tr><td><strong>Barra de volume</strong></td><td>Parte inferior (y=130–225)</td><td>Barra de 10 segmentos (degradê verde/amarelo/vermelho). Atualiza com o volume suavizado a partir do pico PDM.</td></tr>
  </table>
</div>

**Processamento de sinal:**

1. **PDM ISR** — `onPDMdata()` é acionada a ~62 Hz (16000 / 256). Ela lê as amostras brutas, calcula a magnitude de pico e faz o downsampling em 27 bins para o visualizador de forma de onda.
2. **Normalização** — valores de pico abaixo de 10 são tratados como silêncio. Valores acima de 1500 saturam em 100%. Entre esses valores, um mapeamento linear produz um nível de volume de 0,0–1,0.
3. **Suavização exponencial** — o volume exibido é suavizado com um fator de mistura de 20% (`SMOOTH = 0.20`) para evitar tremulação. Durante o silêncio, o volume decai a 6% por quadro.
4. **Renderização diferencial** — a barra de volume e o rótulo de porcentagem só são redesenhados quando o valor muda, minimizando o tráfego SPI.

#### Executando o Demo

**Passo 1.** Abra `xiao_nrf52840_114_voice_bar.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
[MIC] ready
```

**Passo 5.** Fale, bata palmas ou assopre no microfone. A forma de onda e a barra de volume respondem em tempo real. O rótulo de porcentagem muda de cor conforme o volume aumenta.

#### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

Quando em silêncio, a forma de onda é plana e a barra de volume fica vazia (0%). Fale no microfone e as barras do equalizador se animam enquanto a barra de volume se enche de verde passando por amarelo até vermelho. O rótulo de porcentagem é atualizado em tempo real.

### Demo 2: Gravador em Flash com Reprodução I2S

Este demo grava um pequeno clipe de áudio do microfone PDM onboard no **sistema de arquivos Flash interno** do nRF52840 e depois o reproduz por meio de um amplificador I2S externo e alto-falante:

- **USR1** grava a partir do microfone PDM onboard.
- A gravação é **16 kHz, 16 bits, mono**.
- Cada clipe tem cerca de **0,7 segundos** — 11.200 amostras (22.400 bytes de PCM).
- O clipe é salvo como **`/REC_RAW.WAV`** no sistema de arquivos Flash interno.
- **USR2** reproduz a gravação por meio de um **MAX98357A** externo e alto-falante.
- Este demo foi compilado, gravado e verificado em hardware no XIAO nRF52840 Plus com **Seeed nRF52 Boards 1.1.13**.

**Localização do código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Configuração de Hardware

A reprodução requer um **amplificador de áudio I2S externo e alto-falante**. O demo foi escrito para um breakout **MAX98357A** conectado aos pads de saída I2S da placa:

<div class="table-center">
  <table align="center">
    <tr><th>Placa de Display</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td></tr>
    <tr><td>D11 / I2S_SD</td><td>DIN</td></tr>
    <tr><td>D12 / I2S_SCK</td><td>BCLK</td></tr>
    <tr><td>D13 / I2S_WS</td><td>LRC / WS</td></tr>
  </table>
</div>

Conecte o alto-falante aos terminais **SPK+** e **SPK-** do MAX98357A. **Não** conecte um fio do alto-falante ao GND — o MAX98357A é um amplificador BTL (bridge-tied-load), portanto ambos os terminais do alto-falante devem ir para as saídas SPK.

:::caution
Desconecte a alimentação USB antes de fazer a fiação do amplificador e do alto-falante.
:::

#### Como Funciona

- O microfone PDM usa **D0 (CLK)** e **D1 (DATA)**.
- A biblioteca `PDM` captura o microfone em **16 kHz mono**.
- O arquivo WAV consiste em um **cabeçalho de 44 bytes** mais **22.400 bytes de dados PCM**.
- O sistema de arquivos Flash interno (InternalFS) tem apenas cerca de **28 KB**, o que limita cada gravação a aproximadamente **0,7 segundos**.
- A reprodução usa o **periférico de hardware I2S** do nRF52840 no formato Philips I2S, saída **16 bits, estéreo**.
- As amostras mono são duplicadas para os canais esquerdo e direito.
- Os pinos I2S são **D11**, **D12** e **D13**.

#### Executando o Tutorial

**Passo 1.** Desconecte a alimentação USB e faça a fiação do MAX98357A e do alto-falante conforme mostrado acima.

**Passo 2.** Abra `xiao_nrf52840_114_flash_record.ino` na Arduino IDE.

**Passo 3.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Port** correta.

**Passo 4.** Compile e faça o upload do sketch.

**Passo 5.** Pressione **USR1** e imediatamente fale no microfone onboard por cerca de **0,7 segundos**.

:::tip
A gravação começa no momento em que você pressiona **USR1** — não espere a barra de progresso vermelha aparecer. A janela de 0,7 segundo é contada a partir do momento em que **USR1** é pressionado, então fale imediatamente ou você perderá o início do seu clipe.
:::

**Passo 6.** Aguarde a tela mostrar **Saved WAV**.

**Passo 7.** Pressione **USR2** e o alto-falante reproduzirá sua gravação.

#### Resultado Esperado

- Na inicialização, a tela mostra **Flash Recorder**.
- Quando não existe gravação, a tela mostra **No recording**.
- Durante a gravação, a tela mostra um indicador de progresso.
- Quando o salvamento é concluído, a tela mostra **Saved WAV**.
- Pressione **USR2** e você ouvirá a gravação pelo alto-falante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_flash_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

---

## Grove I2C

O display IPS de 1,14'' possui um **conector Grove I2C** dedicado que expõe D4 (SDA) e D5 (SCL) em um soquete Grove padrão de 4 pinos (GND / 3V3 / SDA / SCL). Diferente da versão de 1,47", em que D4/D5 são adicionalmente compartilhados com o controlador de toque, o display de 1,14" compartilha D4/D5 apenas com o IMU onboard (ele não possui controlador de toque).

<div class="table-center">
  <table align="center">
    <tr><th>Pino Grove</th><th>Pino XIAO</th><th>Notas</th></tr>
    <tr><td>GND</td><td>GND</td><td>Terra comum</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>Saída de alimentação de 3,3V</td></tr>
    <tr><td>SDA</td><td>D4</td><td>Dados I2C — compartilhado com o IMU onboard</td></tr>
    <tr><td>SCL</td><td>D5</td><td>Clock I2C — compartilhado com o IMU onboard</td></tr>
  </table>
</div>

:::note
D4/D5 são compartilhados entre o conector Grove e o IMU onboard. O IMU está no endereço `0x6A`. Ao conectar um dispositivo I2C externo, certifique-se de que ele não entre em conflito com esse endereço.
:::

### Demo: Temperatura e Umidade SHT31

Este demo lê temperatura e umidade de um sensor **Grove SHT31** conectado ao conector Grove I2C e exibe as leituras na tela. O sketch se comunica com o sensor diretamente via I2C com `Wire.h` — nenhuma biblioteca SHT31 é necessária — e valida cada leitura com o CRC do sensor.

**Localização do código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Configuração de Hardware

Conecte um sensor de temperatura e umidade **Grove SHT31** ao conector Grove I2C. O sensor é alimentado a 3,3V e se comunica no endereço I2C `0x44`:

<div class="table-center">
  <table align="center">
    <tr><th>Pino Grove</th><th>Pino XIAO</th><th>SHT31</th></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>VCC</td></tr>
    <tr><td>SDA</td><td>D4</td><td>SDA</td></tr>
    <tr><td>SCL</td><td>D5</td><td>SCL</td></tr>
  </table>
</div>

#### Como Funciona

O sketch lê o SHT31 diretamente via I2C (`Wire`) no endereço `0x44`:

1. **Varredura I2C** — na inicialização ele faz uma varredura no barramento I2C e relata cada dispositivo encontrado.
2. **Medição de disparo único** — ele envia um comando de disparo único de alta repetibilidade (`0x24 0x00`, sem clock stretching), espera 20 ms e então lê 6 bytes: temperatura alto/baixo + CRC, umidade alto/baixo + CRC.
3. **Verificação de CRC** — cada valor de 16 bits é verificado em relação ao seu byte CRC; uma incompatibilidade é relatada como erro (fiação ou módulo danificado/ruidoso).
4. **Conversão** — os valores brutos são convertidos em temperatura (`-45 + 175 × raw / 65535` °C) e umidade relativa (`100 × raw / 65535` %).

O display é inicializado com `Board_XIAO_1inch14_LCD<38, 37>` e uma `Config_XIAO_1inch14_LCD_ST7789_BGR` local do sketch (135×240, ordem de cores BGR, invertido) para que as cores sejam renderizadas corretamente. A tela mostra "SHT31 OK" com a temperatura e umidade em tempo real, ou "SHT31 ERROR" mais um código de erro se uma leitura falhar.

#### Executando a demonstração

**Passo 1.** Abra `xiao_nrf52840_114_sht31_temperature_humidity.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Port** correta, depois clique em **Upload**.

**Passo 3.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
=== XIAO nRF52840 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

A tela mostra "SHT31 OK" com a temperatura e umidade, atualizando uma vez por segundo. Se o sensor for desconectado ou a verificação de CRC falhar, a tela mostra "SHT31 ERROR" com um código de erro.

#### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

A temperatura e a umidade são atualizadas uma vez por segundo na tela. Assopre sobre o sensor e a leitura de umidade aumentará.

---

## Botões do usuário

O Display IPS de 1,14'' possui **três botões físicos de pressão** conectados ao XIAO nRF52840 Plus. Todos os três botões têm **resistores de pull-up de 1 KΩ** externos na placa, então você pode configurar os pinos correspondentes como `INPUT` (nenhum pull-up interno é necessário):

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th><th>Breakout Pad</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### Leitura dos botões

Com o pull-up externo de 1 KΩ já na placa, você pode ler os botões com uma simples leitura direta:

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  // External 1K pull-up on the board — no internal pull-up needed.
  pinMode(USR1, INPUT);
  pinMode(USR2, INPUT);
  pinMode(USR3, INPUT);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(USR1) == LOW) {
    Serial.println("USR1 (D6) pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(USR2) == LOW) {
    Serial.println("USR2 (D7) pressed");
    delay(200);
  }
  if (digitalRead(USR3) == LOW) {
    Serial.println("USR3 (D19) pressed");
    delay(200);
  }
}
```

### Eliminação de bouncing com interrupções

Para um tratamento de botões responsivo, com eliminação de bouncing e sem bloquear o loop principal, você pode usar interrupções por mudança de estado no pino:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT);
  pinMode(D7, INPUT);
  pinMode(D19, INPUT);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D19), btn3Isr, FALLING);
}

void loop() {
  if (btn1Flag) {
    btn1Flag = false;
    delay(30); // debounce settling time
    if (digitalRead(D6) == LOW) {
      // handle USR1 press
    }
  }
  if (btn2Flag) {
    btn2Flag = false;
    delay(30);
    if (digitalRead(D7) == LOW) {
      // handle USR2 press
    }
  }
  if (btn3Flag) {
    btn3Flag = false;
    delay(30);
    if (digitalRead(D19) == LOW) {
      // handle USR3 press
    }
  }
}
```

### Comportamento padrão no Dashboard de fábrica

No firmware de fábrica pré-carregado, os botões são mapeados da seguinte forma (você pode sobrescrever isso no seu próprio código):

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Alternar o brilho da tela (100% → 75% → 50% → 25% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Ligar/desligar a tela / restaurar para o último brilho</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Alternar o título do cabeçalho entre "Hello,XIAO!" e "Seeed"</td></tr>
  </table>
</div>

Os pads de breakout dos botões (rotulados como U1, U2 e U3 na placa) espelham D6, D7 e D19 respectivamente, permitindo que você conecte botões externos se desejar.

---

## Status da bateria

Esta demonstração mostra o status da bateria — um ícone de bateria com nível de carga e estado de carregamento — no Display IPS de 1,14''. Ela detecta se uma bateria LiPo está fisicamente conectada e mostra um de três estados: **USB PWR** (sem bateria), **percentage** (apenas bateria) ou **charging** (USB + bateria).

O Display IPS de 1,14'' inclui um circuito de medição de tensão de bateria integrado, conectado ao XIAO nRF52840 Plus.

**Localização do código:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

**Display:**

A tela é controlada pela **Seeed_GFX2** com `Board_XIAO_1inch14_LCD<38, 37>` e uma substituição BGR de `Config_Seeed_1inch14_LCD_ST7789` (135×240, BGR, rotação 2) sobre SPI de hardware a 10 MHz.

**Circuito da bateria:**

O nRF52840 Plus usa **três pinos GPIO** para formar um sistema completo de monitoramento de bateria:

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>Habilitação do divisor de tensão da bateria. Ativo em nível baixo — defina LOW para habilitar o divisor, depois libere para HIGH (alta impedância) para economizar energia.</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>Entrada analógica que lê a tensão da bateria dividida.</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>Indicador de status de carregamento. Ativo em nível baixo — lê LOW quando um carregador está conectado e a bateria está carregando.</td></tr>
  </table>
</div>

**Detecção:**

Sob USB-C, uma tensão VBAT estática não consegue indicar se uma bateria está presente — o nó BAT do carregador pode se parecer com uma célula Li-ion real mesmo sem nenhuma bateria conectada. Portanto, a demonstração primeiro aprende uma **linha de base apenas USB**, depois confirma a inserção da bateria somente após um deslocamento sustentado de VBAT para baixo, e confirma a remoção após uma leitura ruidosa/saltada combinada com `~CHG` indo para HIGH. Isso espelha a lógica de detecção do Dashboard de fábrica.

**Estados do ícone:**

- **Sem bateria** — contorno de bateria em cinza com um X vermelho, rotulado como **USB PWR**.
- **Bateria presente** — contorno de bateria em branco com preenchimento colorido (verde / amarelo / vermelho por porcentagem), rotulado com a **percentage** e a **voltage**.
- **Carregando** — preenchimento em ciano com um ícone de raio, rotulado com a porcentagem e a tensão.

:::note
O pino `~CHG` é lido através dos **registradores GPIO brutos** do nRF52840 (`nrf_gpio_cfg_input()` e `NRF_P0->IN`) em vez de `digitalRead()`. Na API do Arduino, os números de pino seguem o mapeamento do pacote da placa, onde `digitalRead(17)` na verdade lê **P0.07** (a linha de dados I2C do IMU de 6 eixos) em vez de P0.17. As constantes `14` e `17` aqui são **números de pino brutos Nordic P0.x** (P0.14 e P0.17), que é exatamente o que as chamadas de registrador esperam.
:::

:::note
A demonstração usa o resistor de lado baixo **499 kΩ** calibrado de fábrica (taxa do divisor ≈ 3,004), não o valor nominal de 510 kΩ. O divisor está integrado no próprio módulo XIAO nRF52840 Plus, não na placa de display. O pino de habilitação P0.14 é **ativo em nível baixo**: coloque-o em LOW para habilitar o divisor, depois libere-o para alta impedância (INPUT) para minimizar a corrente de repouso quando a bateria não estiver sendo medida.
:::

### Executando a demonstração

**Passo 1.** Abra `xiao_nrf52840_114_battery_status.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Observe a tela — ela mostra o ícone de bateria com o estado atual. Conecte ou desconecte uma bateria LiPo (ou o cabo USB-C) para ver o ícone alternar entre os três estados.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (sem bateria)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong> (apenas bateria)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong> (USB + bateria)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector da bateria</strong> (parte de trás)</div></td>
    </tr>
  </table>
</div>

Sem uma bateria, a tela mostra uma bateria cinza com um X vermelho e o rótulo **USB PWR**. Insira uma bateria LiPo e o ícone muda para um preenchimento colorido com a porcentagem e a tensão. Conecte o USB-C enquanto uma bateria estiver presente e o preenchimento fica ciano com um raio, indicando carregamento.

A demonstração também imprime uma linha de diagnóstico no Serial Monitor a cada 500 ms, por exemplo:

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## Recursos

- **🗃️[Arquivos de Projeto de PCB]** [XIAO 1.14'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.14'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de Fábrica]** [XIAO 1.14'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [Código de Demonstração da Placa de Display XIAO](https://github.com/Seeed-Projects/Display-Gadgets) — todas as demos de função estão no diretório `code_GFX2/Function/114_nRF52840/`

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
