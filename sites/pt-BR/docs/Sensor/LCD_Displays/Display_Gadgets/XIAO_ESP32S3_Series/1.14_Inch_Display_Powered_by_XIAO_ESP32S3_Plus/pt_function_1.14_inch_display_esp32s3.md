---
description: Demos autônomos em nível de função para cada periférico onboard do XIAO 1,14'' IPS Display (ESP32-S3). Cobre tela, IMU, microfone PDM e áudio I2S (barra de voz + gravador em flash), Grove I2C, botões e detecção de tensão da bateria.
title: Uso dos periféricos onboard
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 1.14
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.14_inch_display_esp32s3
sku: 100086099
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-25'
url: https://wiki.seeedstudio.com/pt-br/function_1.14_inch_display_esp32s3/
---

# Uso dos periféricos onboard

Esta página reúne demos autônomos em nível de função para cada periférico onboard do display IPS de 1,14''. Cada seção é independente — você pode escolher a que corresponde ao seu caso de uso sem precisar ler as demais.

:::tip
Os GIFs de demonstração nesta página estão acelerados para mantê-los curtos.
:::

:::note
Todos os demos desta página exigem **esp32 Boards by Espressif (3.3.11)** conforme descrito em [Getting Started](/pt-br/getting_started_1.14_inch_display_esp32s3), além da biblioteca **Seeed_GFX2** instalada manualmente conforme descrito abaixo.
:::

- **Seeed_GFX2 (instalação manual)** — esta biblioteca não está disponível no Library Manager e deve ser instalada manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 1.** Clique no botão acima para baixar `Seeed_GFX2` v1.0.0 como um arquivo ZIP (fixado em uma tag de release para que o tutorial permaneça reprodutível). Como alternativa, clone o repositório em [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Passo 2.** No Arduino IDE, vá em **Sketch > Include Library > Add .ZIP Library...** e selecione o ZIP baixado. O IDE lê `library.properties` e instala automaticamente na pasta `Seeed_GFX2` correta — você não precisa renomear a pasta extraída. (Para instalar manualmente em vez disso, descompacte o arquivo e renomeie a pasta extraída para `Seeed_GFX2` antes de colocá-la em `Documents/Arduino/libraries/`.)

**Passo 3.** Reinicie o Arduino IDE para que a nova biblioteca seja detectada.

:::tip
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** contém o mapa de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 135×240, a ordem de cores e a inversão. Nenhum `driver.h` ou configuração manual de pinos é necessário.
- Nesta placa, os demos usam `Board_XIAO_1inch14_LCD<13, 12>` (RST=13, BL=12) com `Config_Seeed_1inch14_LCD_ST7789` (135×240). Alguns demos definem um `Config_XIAO_1inch14_LCD_ST7789_BGR` local ao sketch como substituição para a ordem de cores BGR.
- A **IMU** é lida diretamente via I2C (`Wire`) nestes demos — nenhuma biblioteca externa de IMU é necessária. O **microfone PDM** e a **saída I2S** usam os drivers do ESP-IDF 5 (`driver/i2s_pdm.h`, `driver/i2s_std.h`) e `LittleFS`, todos incluídos no pacote de placas esp32.
- O display IPS de 1,14'' **não possui controlador touch nem slot para cartão SD**, portanto nenhuma biblioteca de touch ou SD é necessária.
:::

## Obtendo o código de demonstração

Cada demo desta página está no repositório [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), dentro do diretório `code_GFX2/Function/`. Cada demo é uma pasta contendo um único sketch `.ino`. **Sempre baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

**Opção A — Baixar o repositório como ZIP (recomendado):**

1. Abra [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) e clique em **Code > Download ZIP**, depois extraia o arquivo em qualquer lugar conveniente.
2. Navegue até `code_GFX2/Function/` e abra a pasta mostrada na linha **Code location** de cada demo. Por exemplo, o demo GraphicTest para esta placa está em `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`.
3. **Dê um clique duplo no arquivo `.ino`** para abri-lo no Arduino IDE.

**Opção B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Em seguida, abra o arquivo `.ino` do demo a partir da pasta clonada `code_GFX2/Function/...`.

## Display de tela — GraphicTest

Este demo executa um benchmark gráfico completo no painel IPS ST7789 de 1,14 polegada (135×240), cobrindo barras de cores, linhas, retângulos, círculos, triângulos, retângulos arredondados, texto e um gradiente de pixels. Use-o para verificar se a tela está conectada corretamente e se todas as chamadas de desenho funcionam como esperado.

**Code location:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O sketch inicializa o painel IPS ST7789 via **Seeed_GFX2**, depois executa dez primitivas gráficas em sequência, medindo o tempo de execução de cada uma via `micros()` e imprimindo o resultado no monitor serial.

O display é inicializado com uma única chamada de template:

```cpp
display.begin<Board_XIAO_1inch14_LCD<13, 12>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

O template **Board** contém o mapa de pinos — CS=D2, DC=D3, SCK=D8, MOSI=D10 — e seus parâmetros de template `<RST, BL>` recebem números GPIO puros, então `<13, 12>` define RST=GPIO13 (D17) e BL=GPIO12 (D18). O **Panel Config** incorpora a resolução 135×240, a ordem de cores e a inversão (`invert = true`), portanto nenhum `driver.h` ou chamada manual a `invertDisplay()` é necessário.

### Executando o demo

**Passo 1.** Abra `xiao_esp32s3_114_graphictest.ino` no Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver o tamanho do painel seguido pela saída de tempo para cada teste:

```
=== XIAO ESP32-S3 Plus 1.14 graphic test ===
LCD width: 135
LCD height: 240
Color bars: 96.02 ms
Lines: 2634.02 ms
Fast lines: 143.65 ms
Rectangles: 113.85 ms
Filled rectangles: 340.06 ms
Circles: 358.57 ms
Triangles: 378.17 ms
Round rectangles: 163.69 ms
Text: 1458.63 ms
Pixel gradient: 4670.28 ms
Graphic test finished.
```

Na tela, você verá cada padrão de teste exibido por cerca de um segundo antes que o próximo comece. Quando todos os testes forem concluídos, aparecerá uma tela "Graphic / Finished" com uma borda azul de retângulo arredondado.

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Depois que o sketch executa todos os padrões, a tela mostra a mensagem "Graphic / Finished" com "Reset to rerun" abaixo. Reinicie a placa para executar o teste novamente.

---

## IMU

O display IPS de 1,14'' possui uma **LSM6DS3** IMU de 6 eixos onboard (acelerômetro de 3 eixos + giroscópio de 3 eixos) conectada via I2C em D4/D5 no endereço **0x6A**. A linha de interrupção de movimento em **D14** oferece suporte a wake-up por hardware e detecção de gestos.

:::note
A IMU onboard é a **LSM6DS3** (confirmada pelo esquemático da placa, endereço I2C `0x6A`). O demo Electronic Quicksand procura por um sensor compatível com QMI8658 como fallback defensivo. O demo Raise to Wake tem como alvo os registradores de wake-up da LSM6DS3 onboard.
:::

Os demos abaixo leem a IMU diretamente via I2C (`Wire`) — nenhuma biblioteca externa de IMU é necessária.

<a id="imu-quicksand"></a>

### Demo 1: Electronic Quicksand

Este demo transforma a tela em uma simulação de fluido interativa — partículas de areia dourada que fluem e se acomodam de acordo com a gravidade, conforme medida pela IMU de 6 eixos onboard. Incline a placa e a areia muda de direção em tempo real.

**Code location:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

A simulação usa uma **grade de ocupação de 22×40** sobreposta à tela de 135×240, onde cada célula tem 6×6 pixels. Cerca de **150 partículas** são colocadas na grade, cada uma com posição, velocidade e um gradiente de cor dourado.

O IMU é lido via I2C (D4/D5). O sketch procura por um IMU em ambos os endereços conhecidos — primeiro QMI8658, depois LSM6DS3 — e usa aquele que responder. Os valores brutos de aceleração são filtrados com um filtro passa-baixa e usados para derivar um vetor de gravidade. Quando você inclina a placa:

1. **Atualização do vetor de gravidade** — os dados do acelerômetro são suavizados com uma média móvel exponencial para evitar tremores.
2. **Velocidade das partículas** — cada partícula acelera na direção do vetor de gravidade, com amortecimento e um fator de mobilidade por partícula baseado em sua profundidade no fluxo.
3. **Ocupação das células** — partículas mais profundas no fluxo (mais próximas do "fundo" em relação à gravidade) têm mobilidade reduzida, criando um efeito de empacotamento realista.
4. **Renderização diferencial** — apenas as células para onde as partículas se moveram para dentro ou para fora são redesenhadas, minimizando o tráfego SPI e mantendo a animação suave.

Partículas próximas à superfície fluem livremente (maior mobilidade); partículas enterradas mais profundamente se empacotam firmemente (menor mobilidade) — imitando como a areia real se comporta.

### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_114_electronic_quicksand.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta, depois clique em **Upload**.

**Passo 3.** Depois de enviado, a tela se enche de partículas douradas na parte inferior. Incline a placa em diferentes direções — a areia flui como se fosse puxada pela gravidade.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para confirmar a inicialização:

```
=== Electronic Quicksand 1.14 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

As partículas fluem em direção à borda mais baixa conforme você inclina a placa. Quando o display fica na horizontal, o demo mantém a direção de gravidade anterior.

---

### Demo 2: Levantar para Despertar

Este demo implementa um **sistema de suspensão/despertar da tela** acionado pela interrupção de wake-up integrada do IMU no **D14**. A tela desliga automaticamente (backlight desligado + light sleep do ESP32) após 8 segundos de inatividade e desperta instantaneamente quando você pega ou move o dispositivo.

**Localização do código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

O demo usa o **detector de evento de wake-up incorporado** do IMU compatível com LSM6 — um recurso de hardware que monitora internamente os dados do acelerômetro e aciona o pino INT1 (conectado ao D14 nesta placa) quando o movimento excede um limite configurável. Isso significa que o MCU não precisa consultar o acelerômetro continuamente.

**Configuração do IMU (compatível com LSM6):**

<div class="table-center">
  <table align="center">
    <tr><th>Register</th><th>Value</th><th>Purpose</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Ativar BDU + auto-incremento para leituras em bloco</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerômetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>Giroscópio @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Ativar interrupções incorporadas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Limite de wake-up (sensibilidade médio-baixa)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sem filtro de duração (wake responsivo)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Direcionar wake-up para INT1</td></tr>
  </table>
</div>

**Fluxo de suspensão/despertar:**

1. **Estado ativo** — a tela está ligada, backlight em PWM 160. Os dados do IMU e a tensão da bateria são atualizados periodicamente. Um temporizador regressivo mostra os segundos restantes até a suspensão automática.
2. **Suspensão automática** — após 8 segundos sem atividade, o sketch desliga o backlight, exibe a mensagem "Sleeping... Pick up device to wake", configura o D14 como fonte de wake-up via `esp_sleep_enable_gpio_wakeup()` e entra em light sleep do ESP32.
3. **Wake-up** — quando o usuário pega a placa, o IMU detecta movimento e aciona o D14 em nível HIGH. O ESP32 acorda do light sleep e redesenha a interface.

**Botões de teste manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forçar suspensão</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forçar despertar</td></tr>
  </table>
</div>

### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_114_wakeup.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 2.** A tela mostra um painel com estado de energia, dados de movimento e um temporizador regressivo. Deixe a placa parada por 8 segundos — ela entrará em suspensão automaticamente.

**Passo 3.** Pegue a placa ou agite-a levemente — a tela desperta imediatamente.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para confirmar a inicialização:

```
=== XIAO ESP32-S3 Plus 1.14 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

A tela exibe dados de movimento em tempo real enquanto está ativa. Após 8 segundos de imobilidade, a tela escurece e o ESP32-S3 entra em light sleep. Pegue o dispositivo e a tela é restaurada em uma fração de segundo, com o contador de wake incrementado.

---

## Microfone e Alto-falante

O Display IPS de 1,14'' possui um **microfone digital PDM (Pulse Density Modulation)** onboard para entrada de áudio, além de pads de saída I2S para acionar um alto-falante/amplificador externo. Esta seção mostra dois demos: uma visualização em tempo real **Voice Bar** da entrada do microfone (sem hardware extra) e um **Flash Recorder** que grava áudio na Flash onboard e o reproduz por meio de um amplificador I2S externo.

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Saída de clock PDM para o microfone</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Entrada de dados PDM do microfone</td></tr>
  </table>
</div>

### Demo 1: Voice Bar

Este demo visualiza a entrada de áudio em tempo real do microfone PDM como uma forma de onda dinâmica no estilo equalizador e uma barra de volume segmentada. Fale, bata palmas ou assopre no microfone onboard e veja as barras reagirem instantaneamente — nenhum hardware externo é necessário.

**Localização do código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Como Funciona

O sketch captura o microfone PDM onboard por meio do periférico I2S do ESP32-S3 configurado em **modo PDM RX**, usando a API do driver do ESP-IDF v5 (`driver/i2s_pdm.h`). Isso requer **esp32 Boards by Espressif 3.x** — a API legada `i2s_config_t` do core 2.x não irá compilar.

:::note
A API do ESP-IDF v5 (`i2s_new_channel()` / `i2s_channel_read()`) é diferente da versão deste demo para nRF52840, que usa a biblioteca `PDM` do nRF52. Se você estiver portando o código do nRF52840, deverá substituir completamente a configuração de PDM.
:::

O microfone é amostrado em **16 kHz mono** em buffers DMA de 256 amostras (4 descritores). Em `loop()`, `i2s_channel_read()` busca um buffer, remove o offset DC, calcula a amplitude de pico e faz o downsampling do sinal em 27 faixas para o visualizador de forma de onda. A intensidade de acionamento do clock PDM também é reduzida com `gpio_set_drive_capability()` para diminuir o ruído de EMI/acoplamento.

A tela é dividida em três zonas:

<div class="table-center">
  <table align="center">
    <tr><th>Zona</th><th>Posição</th><th>Descrição</th></tr>
    <tr><td><strong>Forma de onda</strong></td><td>Parte superior (y=30–95)</td><td>Visualizador de equalizador de 27 barras. Amostras brutas são reduzidas e desenhadas como barras simétricas em torno de uma linha de base central. A cor da forma de onda segue o volume suavizado — verde (&lt;50%), amarelo (50–90%), vermelho (&gt;90%).</td></tr>
    <tr><td><strong>Porcentagem</strong></td><td>Meio</td><td>Grande porcentagem numérica de volume (0–100%), codificada por cores em verde (&lt;50%), amarelo (50–90%), vermelho (&gt;90%).</td></tr>
    <tr><td><strong>Barra de volume</strong></td><td>Parte inferior (y=130–225)</td><td>Barra de 10 segmentos (degradê verde/amarelo/vermelho). Atualiza com o volume suavizado a partir do pico PDM.</td></tr>
  </table>
</div>

**Processamento de sinal:**

1. **I2S PDM RX** — `i2s_channel_read()` busca 256 amostras PDM. O sketch remove o offset DC (média) para que o pico reflita a intensidade real do som e, em seguida, calcula a magnitude de pico.
2. **Normalização** — valores de pico abaixo de `VOL_FLOOR` (20) são tratados como silêncio. Valores acima de `VOL_CEIL` (2400) saturam em 100%. Entre esses valores, um mapeamento linear produz um nível de volume de 0,0–1,0.
3. **Suavização exponencial** — o volume exibido é suavizado com um fator de mistura de 20% (`SMOOTH = 0.20`) para evitar oscilações. Durante o silêncio, o volume decai a 6% por quadro.
4. **Renderização diferencial** — a barra de volume e o rótulo de porcentagem só são redesenhados quando o valor muda, minimizando o tráfego SPI.

#### Executando o Demo

**Passo 1.** Abra `xiao_esp32s3_114_voice_bar.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
=== Voice Bar | XIAO ESP32-S3 Plus 1.14 ===
[MIC] PDM RX ready (ESP-IDF v5)
[MIC] ready
```

**Passo 5.** Fale, bata palmas ou assopre no microfone. A forma de onda e a barra de volume respondem em tempo real. O rótulo de porcentagem muda de cor conforme o volume aumenta.

#### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

Quando estiver em silêncio, a forma de onda fica plana e a barra de volume fica vazia (0%). Fale no microfone e as barras do equalizador serão animadas enquanto a barra de volume é preenchida de verde para amarelo e depois vermelho. O rótulo de porcentagem é atualizado em tempo real.

---

### Demo 2: Gravador em Flash

Este demo grava 5 segundos de áudio do microfone PDM onboard na memória Flash onboard e depois o reproduz por meio de um alto-falante externo conectado à saída I2S. Pressione um botão para gravar e outro para reproduzir.

**Local do código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Configuração de Hardware

A reprodução requer um **amplificador de áudio I2S e alto-falante** externos. O demo foi escrito para um breakout **MAX98357A** conectado aos pads de saída I2S da placa:

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

### Como Funciona

**Gravação** — o **microfone digital PDM (Pulse Density Modulation)** onboard é amostrado por meio do periférico I2S do ESP32-S3 configurado no modo PDM RX. No ESP-IDF v5 (Arduino core 3.3.11), isso usa a nova API de driver (`driver/i2s_pdm.h`). O microfone é capturado em **16 kHz mono** com 4 descritores DMA de 256 quadros cada. Quando você pressiona **USR1**, o sketch amostra 5 segundos de áudio em um buffer de RAM e depois o grava na Flash onboard como um arquivo WAV (`/REC_RAW.WAV`) usando `LittleFS`.

Após o início do microfone PDM, o sketch descarta os primeiros **300 ms** de dados capturados como dados de aquecimento para reduzir o transitório de inicialização no começo da gravação.

Se o sketch não conseguir capturar todas as amostras em **7 segundos**, ele interrompe a gravação e exibe **"Mic capture timeout"** em vez de permanecer bloqueado no loop de gravação.

**Reprodução** — pressionar **USR2** lê o WAV de volta da Flash e o transmite pelo periférico I2S no modo estéreo padrão (Philips) em D11/D12/D13. As amostras mono são duplicadas para ambos os canais com um ganho de `0.75×` aplicado para evitar clipping. O amplificador aciona um pequeno alto-falante para que você possa ouvir a gravação.

**Estados na tela:**

<div class="table-center">
  <table align="center">
    <tr><th>Estado</th><th>Descrição</th></tr>
    <tr><td><strong>Pronto</strong></td><td>Título "Flash Recorder" com "USR1: record" e "USR2: play Flash WAV" (ou "No saved recording")</td></tr>
    <tr><td><strong>Aquecimento</strong></td><td>"Warming up mic..." com "Please wait" antes do início da captura</td></tr>
    <tr><td><strong>Gravando</strong></td><td>"Capturing 5 seconds" exibido durante a captura (sem progresso em tempo real)</td></tr>
    <tr><td><strong>Erro</strong></td><td>"Mic capture timeout" com "Try recording again" quando a captura excede 7 segundos</td></tr>
    <tr><td><strong>Salvo</strong></td><td>Confirmação "Done — Saved Flash WAV", depois retorna para Pronto</td></tr>
    <tr><td><strong>Reprodução</strong></td><td>"Playing raw audio" durante o streaming e depois "Finished"</td></tr>
  </table>
</div>

### Executando o Demo

**Passo 1.** Conecte um amplificador MAX98357A e um alto-falante aos pads I2S conforme descrito acima.

**Passo 2.** Abra `xiao_esp32s3_114_flash_record.ino` na Arduino IDE.

**Passo 3.** Selecione a placa: **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** (usando esp32 Boards **3.3.11**).

**Passo 4.** Selecione **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"**.

**Passo 5.** Selecione a **Port** correta e clique em **Upload**.

:::caution
O gravador armazena o arquivo WAV em `LittleFS`, que usa a partição **SPIFFS**. O esquema de partição padrão da placa (`16M Flash (2MB APP/12.5MB FATFS)`) não contém partição SPIFFS, portanto `LittleFS.begin()` retorna `false` e a tela mostra "Flash write failed / Check partition". Você **deve** selecionar o esquema de partição SPIFFS acima, caso contrário a gravação não funcionará.
:::

**Passo 6.** Pressione **USR1 (D6)** para gravar 5 segundos de áudio do microfone onboard. A tela mostra "Capturing 5 seconds" durante a gravação.

**Passo 7.** Pressione **USR2 (D7)** para reproduzir a gravação pelo alto-falante.

:::note
A gravação é armazenada na Flash onboard (`LittleFS`), portanto ela sobrevive a um ciclo de energia — você pode gravar uma vez e reproduzir depois. Gravar novamente sobrescreve o arquivo anterior.
:::

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

Pressione USR1 e a tela mostrará "Capturing 5 seconds". Após 5 segundos, ela confirma que o WAV foi salvo. Pressione USR2 e o áudio será reproduzido pelo alto-falante conectado enquanto a tela mostra o status da reprodução.

---

## Grove I2C

O Display IPS de 1,14'' possui um **conector Grove I2C** dedicado que expõe D4 (SDA) e D5 (SCL) em um soquete Grove padrão de 4 pinos (GND / 3V3 / SDA / SCL). D4/D5 são compartilhados internamente com o IMU onboard.

<div class="table-center">
  <table align="center">
    <tr><th>Pino Grove</th><th>Pino XIAO</th><th>Observações</th></tr>
    <tr><td>GND</td><td>GND</td><td>Terra comum</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>Saída de alimentação de 3,3 V</td></tr>
    <tr><td>SDA</td><td>D4</td><td>Dados I2C — compartilhado com o IMU onboard</td></tr>
    <tr><td>SCL</td><td>D5</td><td>Clock I2C — compartilhado com o IMU onboard</td></tr>
  </table>
</div>

:::note
D4/D5 são compartilhados entre o conector Grove e o IMU onboard. O IMU está no endereço `0x6A`. Ao conectar um dispositivo I2C externo, certifique-se de que ele não entre em conflito com esse endereço.
:::

### Demo: Temperatura e Umidade SHT31

Este demo lê temperatura e umidade de um sensor **Grove SHT31** conectado ao conector Grove I2C e exibe as leituras na tela. O sketch se comunica diretamente com o sensor via I2C com `Wire.h` — nenhuma biblioteca SHT31 é necessária — e valida cada leitura com o CRC do sensor.

**Local do código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Configuração de Hardware

Conecte um sensor de temperatura e umidade **Grove SHT31** ao conector Grove I2C. O sensor é alimentado com 3,3 V e se comunica no endereço I2C `0x44`:

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

1. **Varredura I2C** — na inicialização, ele faz uma varredura no barramento I2C e relata cada dispositivo encontrado.
2. **Medição de disparo único** — envia um comando de disparo único de alta repetibilidade (`0x24 0x00`, sem clock stretching), espera 20 ms e então lê 6 bytes: temperatura alto/baixo + CRC, umidade alto/baixo + CRC.
3. **Verificação de CRC** — cada valor de 16 bits é verificado em relação ao seu byte CRC; uma incompatibilidade é relatada como erro (fiação ou módulo danificado/ruidoso).
4. **Conversão** — os valores brutos são convertidos em temperatura (`-45 + 175 × raw / 65535` °C) e umidade relativa (`100 × raw / 65535` %).

O display é inicializado com `Board_XIAO_1inch14_LCD<13, 12>` e um `Config_XIAO_1inch14_LCD_ST7789_BGR` local ao sketch (135×240, ordem de cores BGR, invertido) para que as cores sejam renderizadas corretamente. A tela mostra "SHT31 OK" com a temperatura e umidade em tempo real, ou "SHT31 ERROR" mais um código de erro se uma leitura falhar.

#### Executando a Demo

**Passo 1.** Abra `xiao_esp32s3_114_sht31_temperature_humidity.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Port** correta e, em seguida, clique em **Upload**.

**Passo 3.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver:

```
=== XIAO ESP32-S3 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

A tela mostra "SHT31 OK" com a temperatura e a umidade, atualizando uma vez por segundo. Se o sensor for desconectado ou a verificação de CRC falhar, a tela mostra "SHT31 ERROR" com um código de erro.

#### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

A temperatura e a umidade são atualizadas uma vez por segundo na tela. Assopre o sensor e a leitura de umidade aumentará.

---

## Botões do Usuário

O Display IPS de 1,14'' possui **três botões físicos de pressão** conectados ao XIAO ESP32-S3 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Lógica</th><th>Rótulo na Serigrafia</th><th>Pad de Breakout</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### Lendo um Botão

Os três botões possuem resistores de pull-up externos de 1 KΩ na placa, e o código de demonstração também habilita os pull-ups internos do XIAO (`INPUT_PULLUP`). Uma leitura simples por pesquisa (polling) com debounce se parece com isto:

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
  pinMode(USR3, INPUT_PULLUP);
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

### Debounce com Interrupções

Para um tratamento de botões responsivo e com debounce, você pode usar interrupções de GPIO com um curto atraso de estabilização:

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  pinMode(D19, INPUT_PULLUP);
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

### Comportamento Padrão no Dashboard de Fábrica

No firmware de fábrica pré-carregado, os botões são mapeados da seguinte forma (você pode sobrescrever isso no seu próprio código):

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Ação</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Ciclar o brilho da tela (100% → 75% → 50% → 25% → 0% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Alternar tela desligada / restaurar para o último brilho</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>Alternar o título do cabeçalho entre "Hello,XIAO!" e "Seeed"</td></tr>
  </table>
</div>

Os pads de breakout dos botões (rotulados como U1, U2 e U3 na placa) espelham D6, D7 e D19, respectivamente, permitindo que você conecte botões externos, se desejar.

---

## Detecção de Tensão da Bateria

Esta demonstração lê o divisor de tensão da bateria onboard em **D16** e mostra duas leituras amarelas em tempo real no Display IPS de 1,14'': a tensão bruta do divisor em D16 e a tensão de bateria calculada. Ela exibe apenas leituras de tensão; não estima a porcentagem da bateria nem informa o status de carregamento.

**Localização do código:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

**Circuito da bateria:**

O ESP32-S3 Plus lê a tensão da bateria LiPo através de um divisor de tensão onboard conectado ao **D16**:

<div class="table-center">
  <table align="center">
    <tr><th>Sinal</th><th>Pino ESP32-S3</th><th>Função</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>Entrada analógica que lê a tensão dividida da bateria. Conectado internamente a um circuito divisor de tensão (316K / 160K). <strong>Não use este pino externamente.</strong></td></tr>
  </table>
</div>

**Taxa do divisor de tensão:** R13 = 316 kΩ, R14 = 160 kΩ → **Taxa do divisor = (316 + 160) / 160 ≈ 2,975**

**Leitura:**

O sketch inicializa o display com `Board_XIAO_1inch14_LCD<13, 12>` e um `Config_XIAO_1inch14_LCD_ST7789_BGR` local ao sketch (135×240, BGR, invert = true), depois amostra o **D16** doze vezes (intervalo de 700 µs) usando `analogReadMilliVolts()` com resolução de 12 bits e atenuação de 11 dB. Ele faz a média das amostras para obter a tensão bruta do divisor, multiplica pela taxa do divisor para obter a tensão da bateria (`Calc = D16 × 2.975`) e desenha ambas como duas linhas amarelas centralizadas. A tela é atualizada apenas quando qualquer um dos valores muda de forma significativa (D16 ≥ 0,02 V ou Calc ≥ 0,05 V).

:::note
Nenhum sinal de status de carregamento está conectado a um GPIO do ESP32-S3. Esta demonstração exibe apenas leituras de tensão; ela não detecta a presença da bateria ou o status de carregamento, nem estima a porcentagem da bateria.
:::

### Executando a Demo

**Passo 1.** Abra `xiao_esp32s3_114_battery_status.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Observe a tela — ela mostra duas linhas amarelas: a tensão bruta do divisor em D16 e a tensão de bateria calculada. Conecte ou desconecte uma bateria LiPo (ou o cabo USB-C) para ver os valores sendo atualizados.

### Resultado Esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>Leitura de tensão</strong> (D16 + Calc)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector da bateria</strong> (parte traseira)</div></td>
    </tr>
  </table>
</div>

A tela mostra a tensão bruta do divisor D16 na linha superior e a tensão de bateria calculada (`Calc`) na linha inferior. Com uma bateria LiPo conectada, `Calc` se aproxima da tensão nos terminais da bateria. Uma leitura também pode aparecer apenas com alimentação USB, portanto `Calc` por si só não pode confirmar se uma bateria está conectada.

A demonstração também imprime uma linha de diagnóstico no Serial Monitor a cada segundo, por exemplo:

```
D16 1.39V | Calc 4.14V
```

---

## Recursos

- **🗃️[Arquivos de Design de PCB]** [XIAO 1.14'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.14'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **🖨️[Gabinete Impresso em 3D]** [XIAO 1.14'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843003-enclosure-for-xiao-114-ips-display-esp32nrf52840)
- **📄[Datasheet]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de Fábrica]** [XIAO 1.14'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — todas as demos de Function estão no diretório `code_GFX2/Function/114_ESP32/`

## Suporte Técnico e Discussão de Produto

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
