---
description: Demos autônomos em nível de função para cada periférico onboard do XIAO 0,96'' IPS Display (ESP32-S3). Cobre tela, IMU, microfone PDM e áudio I2S (gravador em flash), botões e detecção de tensão da bateria.
title: Uso dos periféricos onboard
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/pt-br/function_0.96_inch_display_esp32s3/
---

# Uso dos periféricos onboard

Esta página reúne demos autônomos em nível de função para cada periférico onboard do 0,96'' IPS Display. Cada seção é independente — você pode escolher a que corresponde ao seu caso de uso sem precisar ler as demais.

:::tip
Os GIFs de demonstração nesta página estão acelerados para mantê-los curtos.
:::

:::note
Todas as demos desta página exigem **esp32 Boards by Espressif (3.3.11)** conforme descrito em [Getting Started](/pt-br/getting_started_0.96_inch_display_esp32s3), além da biblioteca **Seeed_GFX2** instalada manualmente conforme descrito abaixo.
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
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** contém o mapa de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 80×160, a ordem de cores BGR e a rotação. Nenhum `driver.h` ou construção manual de painel é necessário.
- Nesta placa, as demos usam `Board_XIAO_0inch96_LCD<13, 12>` (RST=13, BL=12) com `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotação 2).
- A **IMU** é lida diretamente via I2C (`Wire`) nestas demos — nenhuma biblioteca externa de IMU é necessária. O **microfone PDM** e a **saída I2S** usam os drivers do ESP-IDF 5 (`driver/i2s_pdm.h`, `driver/i2s_std.h`) e `LittleFS`, todos incluídos no pacote de placas esp32.
- O 0,96'' IPS Display **não possui controlador de toque, slot para cartão SD nem conector Grove** — ele só tem um pad de teste I2C de 4 pinos no lado traseiro — portanto, não são necessárias bibliotecas de toque, SD ou Grove.
:::

## Obtendo o código de demonstração

Cada demo desta página está no repositório [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), no diretório `code_GFX2/Function/`. Cada demo é uma pasta contendo um único sketch `.ino`. **Sempre baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

**Opção A — Baixar o repositório como ZIP (recomendado):**

1. Abra [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) e clique em **Code > Download ZIP**, depois extraia o arquivo em qualquer lugar conveniente.
2. Navegue até `code_GFX2/Function/` e abra a pasta mostrada na linha **Code location** de cada demo. Por exemplo, a demo GraphicTest para esta placa está em `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`.
3. **Dê um clique duplo no arquivo `.ino`** para abri-lo no Arduino IDE.

**Opção B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Em seguida, abra o arquivo `.ino` da demo a partir da pasta clonada `code_GFX2/Function/...`.

## Display de tela — GraphicTest

Esta demo executa um benchmark gráfico completo no painel IPS ST7789 de 0,96 polegada (80×160), cobrindo barras de cores, linhas, retângulos, círculos, triângulos, retângulos arredondados, texto e um gradiente de pixels. Use-a para verificar se a tela está conectada corretamente e se todas as chamadas de desenho funcionam como esperado.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O sketch inicializa o painel IPS ST7789 via **Seeed_GFX2** e, em seguida, executa dez primitivas gráficas em sequência, medindo o tempo de execução de cada uma via `micros()` e imprimindo o resultado no monitor serial.

O display é inicializado com uma única chamada de template:

```cpp
display.begin<Board_XIAO_0inch96_LCD<13, 12>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

O template **Board** contém o mapa de pinos — CS=D2, DC=D3, SCK=D8, MOSI=D10 — e seus parâmetros de template `<RST, BL>` recebem números GPIO puros, então `<13, 12>` define RST=GPIO13 (D17) e BL=GPIO12 (D18). O **Panel Config** incorpora a resolução 80×160, a ordem de cores BGR e a rotação 2 — nenhum `driver.h` ou chamada manual a `invertDisplay()` é necessário.

### Executando a demo

**Passo 1.** Abra `xiao_esp32s3_096_graphictest.ino` no Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Porta** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver o tamanho do painel seguido pela saída de tempo de cada teste:

```
=== XIAO ESP32-S3 Plus 0.96 graphic test ===
LCD width: 80
LCD height: 160
Color bars: 56.67 ms
Lines: 1819.10 ms
Fast lines: 85.03 ms
Rectangles: 73.34 ms
Filled rects: 177.53 ms
Circles: 262.63 ms
Triangles: 235.64 ms
Round rects: 100.58 ms
Text: 635.61 ms
Pixel gradient: 1960.36 ms
Graphic test finished.
```

Na tela, você verá cada padrão de teste exibido por cerca de um segundo antes que o próximo comece. Quando todos os testes forem concluídos, aparecerá uma tela "Done! All tests OK".

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Depois que o sketch executa todos os padrões, a tela mostra uma mensagem "Done!". Reinicie a placa para executar o teste novamente.

---

## IMU

O 0,96'' IPS Display possui uma **LSM6DS3** IMU de 6 eixos (acelerômetro de 3 eixos + giroscópio de 3 eixos) onboard, conectada via I2C em D4/D5 no endereço **0x6A**. A linha de interrupção de movimento em **D14** oferece suporte a wake-up por hardware e detecção de gestos.

:::note
A IMU onboard é a **LSM6DS3** (endereço I2C `0x6A`). A demo Electronic Quicksand faz sondagem por um sensor compatível com QMI8658 como fallback defensivo. A demo Raise to Wake tem como alvo os registradores de wake-up da LSM6DS3 onboard.
:::

As demos abaixo leem a IMU diretamente via I2C (`Wire`) — nenhuma biblioteca externa de IMU é necessária.

<a id="imu-quicksand"></a>

### Demo 1: Electronic Quicksand

Esta demo transforma a tela em uma simulação de fluido interativa — partículas de areia dourada que fluem e se acomodam de acordo com a gravidade, conforme medida pela IMU de 6 eixos onboard. Incline a placa e a areia muda de direção em tempo real.

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

A simulação usa uma **grade de ocupação de 13×26** sobreposta à tela de 80×160, onde cada célula tem 6×6 pixels. Cerca de **65 partículas** são colocadas na grade, cada uma com posição, velocidade e um gradiente de cor dourado.

O IMU é lido via I2C (D4/D5). O sketch procura por um IMU em ambos os endereços conhecidos — primeiro QMI8658, depois LSM6DS3 — e usa aquele que responder. Os valores brutos de aceleração são filtrados com passa‑baixa e usados para derivar um vetor de gravidade. Quando você inclina a placa:

1. **Atualização do vetor de gravidade** — os dados do acelerômetro são suavizados com uma média móvel exponencial para evitar tremores.
2. **Velocidade das partículas** — cada partícula acelera na direção do vetor de gravidade, com amortecimento e um fator de mobilidade por partícula baseado em sua profundidade no fluxo.
3. **Ocupação das células** — partículas mais profundas no fluxo (mais próximas do "fundo" em relação à gravidade) têm mobilidade reduzida, criando um efeito de empacotamento realista.
4. **Renderização diferencial** — apenas as células para onde as partículas se moveram para dentro ou para fora são redesenhadas, minimizando o tráfego SPI e mantendo a animação suave no pequeno painel.

Partículas próximas à superfície fluem livremente (maior mobilidade); partículas enterradas mais fundo se compactam firmemente (menor mobilidade) — imitando como a areia real se comporta.

### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_096_electronic_quicksand.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta, depois clique em **Upload**.

**Passo 3.** Depois de enviado, a tela se enche de partículas douradas na parte inferior. Incline a placa em diferentes direções — a areia flui como se fosse puxada pela gravidade.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para confirmar a inicialização:

```
=== Electronic Quicksand 0.96 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

As partículas fluem em direção à borda mais baixa conforme você inclina a placa. Quando o display fica na horizontal, o demo mantém a direção de gravidade anterior.

---

### Demo 2: Levantar para Despertar

Este demo implementa um **sistema de suspensão/despertar da tela** acionado pela interrupção de wake‑up integrada do IMU no **D14**. A tela desliga automaticamente (backlight desligado) após 8 segundos de inatividade e desperta instantaneamente quando você pega ou move o dispositivo.

**Local do código:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

O demo usa o **detector de evento de wake‑up incorporado** do IMU compatível com LSM6 — um recurso de hardware que monitora internamente os dados do acelerômetro e aciona o pino INT1 (conectado ao D14 nesta placa) quando o movimento excede um limite configurável. Isso significa que o MCU não precisa consultar o acelerômetro continuamente.

**Configuração do IMU (compatível com LSM6):**

<div class="table-center">
  <table align="center">
    <tr><th>Registrador</th><th>Valor</th><th>Finalidade</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Habilitar BDU + auto‑incremento para leituras em bloco</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerômetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>Giroscópio @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupções incorporadas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Limite de wake‑up (sensibilidade médio‑baixa)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sem filtro de duração (wake responsivo)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Direcionar wake‑up para INT1</td></tr>
  </table>
</div>

**Fluxo de suspensão/despertar:**

1. **Estado ativo** — a tela está ligada com o backlight aceso. Os dados do IMU e a tensão da bateria (D16) são atualizados periodicamente, e uma contagem regressiva mostra os segundos restantes até a suspensão automática.
2. **Suspensão automática** — após 8 segundos sem atividade, o sketch desliga o backlight e exibe a mensagem "Sleep — Move to wake". Por padrão o demo usa uma **suspensão apenas da tela**: o ESP32‑S3 continua em execução (assim a porta serial USB CDC permanece conectada) e simplesmente desliga o painel. A interrupção de wake do IMU em D14 permanece armada, então a detecção de movimento continua ativa. (Defina `ENABLE_LIGHT_SLEEP` como `true` no sketch para usar o light sleep real do ESP32 com wake‑up por GPIO — note que o USB CDC pode cair enquanto o chip dorme.)
3. **Wake‑up** — quando o usuário pega a placa, o IMU detecta movimento e aciona D14 em nível ALTO. O sketch liga novamente o backlight e redesenha a interface — o LCD e o IMU não são reinicializados.

**Botões de teste manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Ação</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forçar suspensão</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forçar wake</td></tr>
  </table>
</div>

### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_096_wakeup.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 2.** A tela mostra um painel compacto com estado de energia, tensão/porcentagem da bateria, dados de movimento, contagem de interrupções e uma contagem regressiva de suspensão. Deixe a placa parada — ela entrará em suspensão automaticamente após 8 segundos.

**Passo 3.** Pegue a placa ou agite‑a levemente — a tela desperta imediatamente.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para observar as transições de boot e wake:

```
=== XIAO ESP32-S3 Plus 0.96 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[READY] awake; USR1=sleep, USR2=manual wake, motion=IMU wake
[READY] auto sleep in 8 seconds
[READY] sleep mode: display only (USB CDC stays connected)
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
[SLEEP] USR1
[WAKE] IMU_D14  count=3
[WAKE] IMU_D14  count=4
[SLEEP] USR1
[WAKE] IMU_D14  count=5
[SLEEP] AUTO_TIMEOUT
```

Após o boot, três linhas `[READY]` descrevem os controles: USR1 coloca a placa em suspensão, USR2 a desperta manualmente, e o movimento aciona um wake do IMU. Cada transição é registrada — `[WAKE] IMU_D14 count=N` para wake‑ups por movimento (a contagem é incrementada a cada vez), `[SLEEP] USR1` quando você pressiona USR1 e `[SLEEP] AUTO_TIMEOUT` quando entra em suspensão automática após 8 segundos sem movimento.

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

A tela exibe dados em tempo real de movimento e bateria enquanto está ativa. Após 8 segundos de imobilidade, a tela escurece. Pegue o dispositivo e a tela é restaurada instantaneamente, com o contador de wake incrementado.

---

## Microfone e Alto-falante — Gravador em Flash

Este demo transforma o Display IPS de 0,96'' em um pequeno gravador de voz. Pressione USR1 para capturar um clipe de 5 segundos do microfone PDM onboard para a Flash onboard, depois pressione USR2 para reproduzi‑lo através de um amplificador I2S externo.

O microfone PDM do Display IPS de 0,96'' se conecta aos mesmos pinos que as outras placas de display XIAO:

<div class="table-center">
  <table align="center">
    <tr><th>Pino</th><th>Sinal</th><th>Função</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Saída de clock PDM para o microfone</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>Entrada de dados PDM do microfone</td></tr>
  </table>
</div>

**Local do código:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Configuração de Hardware

A reprodução requer um **amplificador de áudio I2S e alto‑falante** externos. O demo foi escrito para um breakout **MAX98357A** conectado aos pads de saída I2S da placa:

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

Os pads I2S (3V3, GND, D11, D12, D13) estão expostos no grupo de pads de expansão inferior da placa de display.

### Como funciona

**Gravação (USR1)** — o **microfone digital PDM (Pulse Density Modulation)** onboard é amostrado através do periférico I2S do ESP32-S3 configurado no modo PDM RX. No ESP-IDF v5 (núcleo Arduino 3.3.11), isso usa a nova API de driver (`driver/i2s_pdm.h`). O microfone é capturado em **16 kHz mono** com 4 descritores de DMA de 256 quadros cada. Quando você pressiona USR1, o sketch amostra **5 segundos** de áudio em um buffer de RAM e depois grava na Flash onboard como um arquivo WAV (`/REC_RAW.WAV`) usando `LittleFS`.

Após o microfone PDM iniciar, o sketch descarta os primeiros **300 ms** de dados capturados como dados de aquecimento para reduzir o transitório de inicialização no começo da gravação.

Se o sketch não conseguir capturar todas as amostras dentro de **7 segundos**, ele para a gravação e exibe **"Mic timeout"** em vez de permanecer bloqueado no loop de gravação.

:::note
Nesta placa, o pino de seleção de canal do microfone está ligado ao GND por `R8` (um resistor de 0 Ω), enquanto `R6` — a alternativa ligada a 3V3 — não está populada. Portanto, o microfone onboard aciona o slot PDM **esquerdo**, e é por isso que o sketch define `slot_cfg.slot_mask = I2S_PDM_SLOT_LEFT`. Tenha isso em mente se você adaptar o código para uma fiação de microfone diferente.
:::

**Reprodução (USR2)** — pressionar USR2 lê o WAV de volta da Flash e o transmite através do periférico I2S no modo estéreo padrão (Philips) em D11/D12/D13 (`driver/i2s_std.h`). As amostras mono são duplicadas para ambos os canais com um ganho de `0.75×` aplicado para evitar clipping. O amplificador aciona um pequeno alto-falante para que você possa ouvir a gravação.

:::note
A API do ESP-IDF v5 (`i2s_new_channel()` / `i2s_channel_read()` / `i2s_channel_write()`) é diferente da versão nRF52840 deste demo, que usa a biblioteca `PDM` do nRF52 e o periférico `NRF_I2S` diretamente. Se você estiver portando o código do nRF52840, deverá substituir completamente a configuração de áudio.
:::

**Estados na tela:**

<div class="table-center">
  <table align="center">
    <tr><th>Estado</th><th>Descrição</th></tr>
    <tr><td><strong>Pronto</strong></td><td>Título "Recorder" com "USR1: record" e "USR2: play" (ou "No recording")</td></tr>
    <tr><td><strong>Gravando</strong></td><td>"Capturing voice" com "Please speak" durante a captura (sem progresso em tempo real)</td></tr>
    <tr><td><strong>Erro</strong></td><td>"Mic timeout" com "Try again" quando a captura excede 7 segundos</td></tr>
    <tr><td><strong>Salvo</strong></td><td>Confirmação "Done — Saved WAV", depois retorna para Pronto</td></tr>
    <tr><td><strong>Reprodução</strong></td><td>"Playing..." durante o streaming e depois "Finished"</td></tr>
  </table>
</div>

### Executando o demo

**Passo 1.** Conecte um amplificador MAX98357A e um alto-falante aos pads I2S conforme descrito acima.

**Passo 2.** Abra `xiao_esp32s3_096_flash_record.ino` na Arduino IDE.

**Passo 3.** Selecione a placa: **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (usando esp32 Boards **3.3.11**).

**Passo 4.** Selecione **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"**.

**Passo 5.** Selecione a **Port** correta e clique em **Upload**.

:::caution
O gravador armazena o arquivo WAV em `LittleFS`, que usa a partição **SPIFFS**. O esquema de partição padrão da placa (`16M Flash (2MB APP/12.5MB FATFS)`) não contém partição SPIFFS, então `LittleFS.begin()` retorna `false`, o arquivo WAV não pode ser gravado e a tela mostra "Write failed / Check flash". Você **deve** selecionar o esquema de partição SPIFFS acima, ou a gravação não funcionará.
:::

**Passo 6.** Pressione **USR1 (D6)** para gravar 5 segundos de áudio do microfone onboard. A tela mostra "Capturing voice" durante a gravação.

**Passo 7.** Pressione **USR2 (D7)** para reproduzir a gravação pelo alto-falante.

:::note
A gravação é armazenada na Flash onboard (`LittleFS`), portanto ela sobrevive a um ciclo de energia — você pode gravar uma vez e reproduzir depois. Gravar novamente sobrescreve o arquivo anterior.
:::

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

Pressione USR1 e a tela mostrará "Capturing voice". Após 5 segundos, ela confirma que o WAV foi salvo. Pressione USR2 e o áudio será reproduzido pelo alto-falante conectado enquanto a tela mostra o status da reprodução.

---

## Botões de usuário

O Display IPS de 0,96'' possui **dois botões físicos de pressão** conectados ao XIAO ESP32-S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Lógica</th><th>Rótulo na serigrafia</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

:::note
Diferente do Display IPS de 1,14'', o Display IPS de 0,96'' **não possui um terceiro botão** (sem USR3 em D19). Ele também não possui pads de breakout dedicados para botões.
:::

### Leitura dos botões

Os botões usam os resistores de pull-up internos do XIAO. Uma leitura simples se parece com isto:

```cpp
const int USR1 = D6;
const int USR2 = D7;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
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
}
```

### Eliminação de bouncing com interrupções

Para um tratamento de botões responsivo e com debounce, você pode usar interrupções de GPIO com um pequeno atraso de estabilização:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
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
}
```

### Comportamento padrão no painel de fábrica

No firmware de fábrica pré-carregado, os botões são mapeados da seguinte forma (você pode sobrescrever isso no seu próprio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Ação</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Alternar o brilho da tela (100% → 75% → 50% → 25% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Alternar o backlight da tela ON/OFF</td></tr>
  </table>
</div>

Quando a tela está desligada (alternada via USR2), pressionar USR2 novamente a restaura para o nível anterior diferente de zero.

---

## Detecção de tensão da bateria

Este demo lê o divisor de tensão da bateria onboard em **D16** e mostra duas leituras amarelas em tempo real no Display IPS de 0,96'': a tensão bruta do divisor em D16 e a tensão calculada da bateria. Ele exibe apenas leituras de tensão; não estima a porcentagem da bateria nem informa o status de carregamento.

**Localização do código:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

**Circuito da bateria:**

O ESP32-S3 Plus lê a tensão da bateria LiPo através de um divisor de tensão onboard conectado a **D16**:

<div class="table-center">
  <table align="center">
    <tr><th>Sinal</th><th>Pino ESP32-S3</th><th>Função</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Entrada analógica que lê a tensão dividida da bateria. Conectado internamente a um divisor de tensão de 316 kΩ / 160 kΩ. <strong>Não use este pino externamente.</strong></td></tr>
  </table>
</div>

**Taxa do divisor de tensão:** 316 kΩ / 160 kΩ → **Taxa do divisor = (316 + 160) / 160 ≈ 2,975**

**Leitura:**

O sketch inicializa o display com `Board_XIAO_0inch96_LCD<13, 12>` e `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotação 2), depois faz a amostragem de **D16** doze vezes (a cada 700 µs) usando `analogReadMilliVolts()` com resolução de 12 bits e atenuação de 11 dB. Ele faz a média das amostras para obter a tensão bruta do divisor, multiplica pela razão do divisor para obter a tensão da bateria (`Calc = D16 × 2.975`) e desenha ambas como duas linhas amarelas centralizadas. A tela é atualizada apenas quando qualquer um dos valores muda de forma significativa (D16 ≥ 0,02 V ou Calc ≥ 0,05 V).

:::note
Nenhum sinal de status de carregamento está conectado a um GPIO do ESP32-S3. Esta demonstração exibe apenas leituras de tensão; ela não detecta a presença da bateria ou o status de carregamento, nem estima a porcentagem da bateria.
:::

### Executando a demonstração

**Passo 1.** Abra `xiao_esp32s3_096_battery_status.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Observe a tela — ela mostra duas linhas amarelas: a tensão bruta do divisor D16 e a tensão calculada da bateria. Conecte ou desconecte uma bateria LiPo (ou o cabo USB-C) para ver os valores sendo atualizados.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Leitura de tensão</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector da bateria</strong> (parte de trás)</div></td>
    </tr>
  </table>
</div>

A tela mostra a tensão bruta do divisor D16 na linha superior e a tensão calculada da bateria (`Calc`) na linha inferior. Com uma bateria LiPo conectada, `Calc` aproxima a tensão no terminal da bateria. Uma leitura também pode aparecer apenas com alimentação USB, portanto `Calc` não pode, por si só, confirmar se uma bateria está conectada.

A demonstração também imprime uma linha de diagnóstico no Serial Monitor a cada segundo, por exemplo:

```
D16 1.39V | Calc 4.14V
```

---

## Recursos

- **🗃️[Arquivos de design de PCB]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [Código de demonstração da XIAO Display Board](https://github.com/Seeed-Projects/Display-Gadgets) — todas as demos de Function estão no diretório `code_GFX2/Function/096_ESP32/`

## Suporte técnico e discussão sobre o produto

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
