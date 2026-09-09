---
description: Demos autônomos em nível de função para cada periférico onboard do XIAO 0,96'' IPS Display (nRF52840). Cobre tela, IMU, microfone PDM, gravação na Flash interna e reprodução de áudio I2S, botões e bateria.
title: Uso dos periféricos onboard
sidebar_label: Function
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 0.96
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_0.96_inch_display_nrf52840
sku: 100063377
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/pt-br/function_0.96_inch_display_nrf52840/
---

# Uso dos periféricos onboard

Esta página reúne demos autônomos em nível de função para cada periférico onboard do display IPS de 0,96''. Cada seção é independente — você pode escolher a que corresponde ao seu caso de uso sem precisar ler as demais.

:::tip
Os GIFs de demonstração nesta página estão acelerados para mantê-los curtos.
:::

:::note
Todos os demos desta página exigem **Seeed nRF52 Boards (1.1.13)** conforme descrito em [Introdução](/pt-br/getting_started_0.96_inch_display_nrf52840), além da biblioteca **Seeed_GFX2** instalada manualmente conforme descrito abaixo.
:::

- **Library Manager** — vá em **Sketch > Include Library > Manage Libraries...**, procure e instale:

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Quicksand, Wake</td></tr>
  </table>
</div>

- **Seeed_GFX2 (Manual Installation)** — esta biblioteca não está disponível no Library Manager e deve ser instalada manualmente:

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
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_XIAO_0inch96_LCD<38, 37>, Config_Seeed_0inch96_LCD_ST7789>()` — o template **Board** é responsável pelo mapeamento de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 80×160, a ordem de cores BGR e a rotação 2. A Seeed_GFX2 aciona este painel com um SPI de hardware conservador de 10 MHz, o que evita o problema de margem de sinal que exigia SPI por software em demos mais antigas.
- O display IPS de 0,96'' **não possui controlador touch nem slot para cartão SD**, portanto não são necessárias bibliotecas de touch ou SD.
:::

## Obtendo o código de demonstração

Cada demo desta página está no repositório [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets), no diretório `code_GFX2/Function/`. Cada demo é uma pasta contendo um único sketch `.ino`. **Sempre baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

**Opção A — Baixar o repositório como ZIP (recomendado):**

1. Abra [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) e clique em **Code > Download ZIP**, depois extraia o arquivo em qualquer lugar conveniente.
2. Navegue até `code_GFX2/Function/` e abra a pasta mostrada na linha **Code location** de cada demo. Por exemplo, o demo GraphicTest para esta placa está em `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/`.
3. **Dê um clique duplo no arquivo `.ino`** para abri-lo no Arduino IDE.

**Opção B — git clone:**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

Em seguida, abra o arquivo `.ino` do demo a partir da pasta clonada `code_GFX2/Function/...`.

## Display da tela — GraphicTest

Este demo executa um benchmark gráfico completo no painel IPS ST7789 de 0,96 polegada (80×160), cobrindo barras de cores, linhas, retângulos, círculos, triângulos, retângulos arredondados, texto e um gradiente de pixels. Use-o para verificar se a tela está conectada corretamente e se todas as chamadas de desenho funcionam como esperado.

**Code location:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como funciona

O sketch inicializa o painel IPS ST7789 via **Seeed_GFX2**, depois executa dez primitivas gráficas em sequência, medindo o tempo de execução de cada uma via `micros()` e imprimindo o resultado no monitor serial.

O display é inicializado com uma única chamada de template:

```cpp
display.begin<Board_XIAO_0inch96_LCD<38, 37>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

O template **Board** é responsável pelo mapeamento de pinos — CS=D2, DC=D3, SCK=D8, MOSI=D10 — e seus parâmetros de template `<RST, BL>` recebem números GPIO puros, então `<38, 37>` define RST=GPIO38 e BL=GPIO37. O **Panel Config** incorpora a resolução 80×160, a ordem de cores BGR e a rotação 2 — não é necessário `driver.h` nem chamada manual a `invertDisplay()`. A Seeed_GFX2 aciona o painel com um SPI de hardware conservador de 10 MHz, evitando o problema de margem de sinal que forçava o uso de SPI por software em demos mais antigos.

:::note
**Ordem de cores (painel BGR).** Este painel de 0,96 polegada troca fisicamente os canais vermelho e azul. O demo cria aliases de cores de acordo (por exemplo, um vermelho em nível de fio `0xF800` aparece azul na tela). Se você escrever seu próprio código de desenho, use os aliases de cores do demo ou leve em conta a ordem BGR — caso contrário, vermelhos e azuis aparecerão trocados.
:::

### Executando o demo

**Passo 1.** Abra `xiao_nrf52840_096_graphictest.ino` no Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Porta** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud). Você deverá ver a saída de tempo para cada teste:

```
=== XIAO nRF52840 Plus 0.96 graphic test ===
LCD: 80x160
Color bars: 13.67 ms
Lines: 1712.89 ms
Fast lines: 25.39 ms
Rectangles: 23.44 ms
Filled rects: 47.85 ms
Circles: 207.03 ms
Triangles: 166.99 ms
Round rects: 48.83 ms
Text: 539.06 ms
Pixel gradient: 1907.23 ms
Graphic test finished.
```

Na tela, você verá cada padrão de teste exibido por cerca de um segundo antes que o próximo comece. Quando todos os testes forem concluídos, aparecerá uma tela "Done! All tests OK".

### Resultado esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

Depois que o sketch executar todos os padrões, a tela mostrará uma mensagem "Done!". Reinicie a placa para executar o teste novamente.

---

## IMU

O display IPS de 0,96'' possui uma IMU de 6 eixos (**LSM6DS3**) onboard conectada via I2C em D4/D5. A linha de interrupção de movimento em **D14** oferece suporte a wake-up por hardware e detecção de gestos.

Ambos os demos abaixo usam o LSM6DS3 no endereço I2C **0x6A**.

<a id="imu-quicksand"></a>

### Demo 1: Areia movediça eletrônica

Este demo transforma a tela em uma simulação de fluido interativa — partículas de areia dourada que fluem e se acomodam de acordo com a gravidade, conforme medida pela IMU de 6 eixos onboard. Incline a placa e a areia muda de direção em tempo real.

**Code location:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

A simulação usa uma **grade de ocupação de 13×26** sobreposta na tela de 80×160, onde cada célula tem 6×6 pixels. Cerca de **65 partículas** são colocadas na grade, cada uma com posição, velocidade e um gradiente de cor dourado.

O IMU é lido via I2C (D4/D5) usando a biblioteca Seeed Arduino LSM6DS3 no endereço `0x6A`. Os valores brutos de aceleração são filtrados com um passa-baixa e usados para derivar um vetor de gravidade. Quando você inclina a placa:

1. **Atualização do vetor de gravidade** — os dados do acelerômetro são suavizados com uma média móvel exponencial para evitar tremores.
2. **Velocidade das partículas** — cada partícula acelera na direção do vetor de gravidade, com amortecimento e um fator de mobilidade por partícula baseado em sua profundidade no fluxo.
3. **Ocupação das células** — partículas mais profundas no fluxo (mais próximas do "fundo" em relação à gravidade) têm mobilidade reduzida, criando um efeito de empacotamento realista.
4. **Renderização diferencial** — apenas as células para onde as partículas se moveram para dentro ou para fora são redesenhadas, minimizando o tráfego SPI e mantendo a animação suave no pequeno painel.

Partículas próximas à superfície fluem livremente (maior mobilidade); partículas enterradas mais profundamente se compactam firmemente (menor mobilidade) — imitando como a areia real se comporta.

### Executando o Demo

**Passo 1.** Abra `xiao_nrf52840_096_electronic_quicksand.ino` na Arduino IDE.

**Passo 2.** Selecione a placa e a porta e clique em **Upload**.

**Passo 3.** Depois do upload, a tela se enche de partículas douradas na parte inferior. Incline a placa em diferentes direções — a areia flui como se fosse puxada pela gravidade.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para confirmar a inicialização:

```
LCD w=80 h=160
=== Electronic Quicksand 0.96 ===
imu.begin=0
```

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

As partículas de areia dourada fluem suavemente enquanto você inclina a placa. Quando mantida plana, a areia se acomoda na parte inferior da tela. Gire a placa em 90 graus e a areia flui para o novo "fundo" em um segundo.

---

### Demo 2: Levantar para Despertar

Este demo implementa um **sistema de suspensão/despertar da tela** acionado pela interrupção de movimento integrada do IMU no **D14**. A tela desliga automaticamente (luz de fundo desligada + sono System ON do nRF52) após um período de inatividade configurável e desperta instantaneamente quando você pega ou move o dispositivo.

**Localização do código:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

O demo usa o **detector de evento de despertar incorporado** do LSM6DS3 — um recurso de hardware que monitora os dados do acelerômetro internamente e aciona o pino INT1 (conectado ao D14 nesta placa) quando o movimento excede um limite configurável. Isso significa que o MCU não precisa consultar o acelerômetro continuamente.

**Configuração do IMU (LSM6DS3):**

<div class="table-center">
  <table align="center">
    <tr><th>Registrador</th><th>Valor</th><th>Finalidade</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>Atualização de dados em bloco (BDU) + auto-incremento</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>Acelerômetro @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>Habilitar interrupções incorporadas</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>Limiar de despertar (sensibilidade médio-baixa)</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>Sem filtro de duração (despertar responsivo)</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>Roteia o despertar para INT1</td></tr>
  </table>
</div>

**Fluxo de suspensão/despertar:**

1. **Estado ativo** — a tela está ligada, luz de fundo em brilho máximo, a interface é atualizada a cada 250 ms com dados em tempo real do IMU.
2. **Suspensão automática** — após 8 segundos de inatividade, o sketch desliga a luz de fundo, exibe a mensagem "Sleep — Move to wake" e entra no modo System ON sleep do nRF52 (modo de baixo consumo com retenção de RAM). A interrupção de despertar do IMU no D14 já foi configurada na inicialização, então a detecção de movimento permanece ativa durante o sono.
3. **Despertar** — quando o usuário pega a placa, o IMU detecta movimento e coloca o D14 em nível HIGH. O nRF52840 sai do System ON sleep, liga novamente a luz de fundo e redesenha a interface — o LCD e o IMU mantêm seu estado porque o System ON sleep retém a RAM.

**Botões de teste manual:**

<div class="table-center">
  <table align="center">
    <tr><th>Botão</th><th>Pino</th><th>Ação</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Forçar suspensão</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Forçar despertar</td></tr>
  </table>
</div>

### Executando o Demo

**Passo 1.** Abra `xiao_nrf52840_096_wakeup.ino` na Arduino IDE, selecione a placa e a porta e clique em **Upload**.

**Passo 2.** A tela mostra um painel compacto com estado de energia, dados de movimento e uma contagem regressiva. Deixe a placa parada — ela entrará automaticamente em suspensão após 8 segundos.

**Passo 3.** Pegue a placa ou agite-a suavemente — a tela desperta imediatamente.

**Passo 4.** Abra **Tools > Serial Monitor** (115200 baud) para observar as transições de inicialização e suspensão/despertar:

```
=== XIAO nRF52840 Plus 0.96 IMU Wake Demo ===
[LCD] OK 0.96 ST7789 80x160
[IMU] LSM6DS3 begin=0
[IMU] CTRL1_XL    = 0x40
[IMU] TAP_CFG     = 0x80
[IMU] MD1_CFG     = 0x20
[IMU] WAKE_UP_THS = 0x05
[IMU] D14 wake interrupt OK
[IMU] D14 pin state = 0
[BOOT] done. Screen should be on.
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[SLEEP] loops=1025 D14=0 awake=N
[WAKE] D14 pin HIGH (polled)
[WAKE] src=0xA
[WAKE] reason=IMU_D14 wakeCount=8 sleptMs=4142 sleepLoops=1936 wakeSrc=0xA
[WAKE] src=0x0
```

Os campos `sleptMs`, `sleepLoops` e `wakeSrc` variam dependendo de quanto tempo a placa ficou em suspensão e qual gesto acionou o despertar.

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

A tela exibe dados de movimento em tempo real enquanto está acordada. Após 8 segundos de imobilidade, a tela escurece e o nRF52840 entra em sono de baixo consumo. Pegue o dispositivo e a tela é restaurada instantaneamente, com o contador de despertares incrementado.

---

## Microfone e Alto-falante — Gravador em Flash

Este demo transforma o Display IPS de 0,96'' em um pequeno gravador de voz. Pressione USR1 para capturar um pequeno clipe do microfone PDM onboard para o sistema de arquivos interno em flash do nRF52840 e depois pressione USR2 para reproduzi-lo através de um amplificador I2S externo.

O microfone PDM do Display IPS de 0,96'' se conecta aos mesmos pinos que as outras placas de display XIAO:

<div class="table-center">
  <table align="center">
    <tr><th>Pino</th><th>Sinal</th><th>Função</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Saída de clock PDM para o microfone</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>Entrada de dados PDM do microfone</td></tr>
  </table>
</div>

**Localização do código:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Configuração de Hardware

O lado da reprodução precisa de um amplificador I2S externo. O demo foi escrito para o breakout **MAX98357A**, conectado aos pads de teste I2S do Display IPS de 0,96'':

<div class="table-center">
  <table align="center">
    <tr><th>Pino XIAO</th><th>Sinal I2S</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>Alimentação</td><td>VIN</td></tr>
    <tr><td>GND</td><td>Terra</td><td>GND</td></tr>
    <tr><td>D11</td><td>I2S_SD (saída de dados)</td><td>DIN</td></tr>
    <tr><td>D12</td><td>I2S_SCK (bit clock)</td><td>BCLK</td></tr>
    <tr><td>D13</td><td>I2S_WS (word select)</td><td>LRC</td></tr>
  </table>
</div>

:::caution
Desconecte a alimentação USB antes de fazer a fiação do amplificador e do alto-falante. Conecte o alto-falante aos terminais **SPK+** e **SPK-** do MAX98357A — **não** conecte nenhum fio do alto-falante ao GND.
:::

:::note
O Display IPS de 0,96'' **não** possui slot para cartão SD, portanto este demo grava no **sistema de arquivos flash interno** (InternalFS) do nRF52840. O InternalFS tem cerca de **28 KB** — o tutorial grava 11.200 amostras mono a 16 kHz, produzindo cerca de 22 KB de áudio PCM e uma duração de gravação de aproximadamente 0,7 segundo.
:::

### Como Funciona

**Display:**

A tela é controlada pela **Seeed_GFX2** com `Board_XIAO_0inch96_LCD<38, 37>` e `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotação 2) via SPI de hardware a 10 MHz.

**Gravação (USR1):**

1. O sketch inicia o periférico PDM em **16 kHz, canal único** e captura amostras brutas em um buffer de 11200 amostras (≈ 0,7 s, ≈ 22 KB de PCM) por meio de uma ISR (`onPdmData`).
2. Uma tela de progresso mostra a porcentagem de gravação e o tempo decorrido em tempo real.
3. Quando o buffer está cheio, o sketch adiciona um cabeçalho WAV de 44 bytes e grava o arquivo `/REC_RAW.WAV` no InternalFS.

**Reprodução (USR2):**

1. O WAV é carregado de volta a partir do InternalFS.
2. O sketch aciona o periférico I2S do nRF52840 em **modo mestre** com uma razão de 32× (≈ 16 kHz LRCK), enviando quadros estéreo de 16 bits para o MAX98357A com **ganho de 0,75×** (cada amostra mono é duplicada para ambos os canais).
3. Um esquema de buffer duplo (pingue-pongue) mantém o fluxo de áudio ininterrupto até o fim do clipe.

**Botões:**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>Grava um novo clipe (substitui o anterior)</td></tr>
    <tr><td>USR2</td><td>D7</td><td>Reproduz o clipe salvo</td></tr>
  </table>
</div>

:::note
As bibliotecas **PDM**, **Adafruit TinyUSB**, **Adafruit LittleFS** e **InternalFileSystem** vêm incluídas em **Seeed nRF52 Boards 1.1.13** — não instale versões separadas pelo Library Manager. Este tutorial não usa SdFat.
:::

### Executando o Demo

**Passo 1.** Abra `xiao_nrf52840_096_flash_record.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Port** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** A tela mostra a tela ociosa do "Recorder". Pressione **USR1** — uma barra de progresso vermelha "REC" é preenchida enquanto grava. Quando terminar, salva o WAV e retorna à tela ociosa.

**Passo 5.** Pressione **USR2** — o clipe é reproduzido pelo alto-falante MAX98357A conectado, com a tela exibindo "Playing...".

### Resultado Esperado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

Após pressionar USR1, a barra de progresso vermelha é preenchida até 100% e o clipe é salvo. Pressionar USR2 reproduz a gravação pelo MAX98357A. O arquivo WAV é armazenado no InternalFS e permanece disponível após um reset ou ciclo de energia. Gravar novamente com USR1 substitui o arquivo anterior.

:::note
Este tutorial foi compilado, carregado e testado em hardware com o XIAO nRF52840 Plus, o Display IPS de 0,96'', um amplificador MAX98357A e um alto-falante externo.
:::

---

## Botões de Usuário

O Display IPS de 0,96'' possui **dois botões físicos de pressão** conectados ao XIAO nRF52840 Plus:

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Ativo em nível baixo (pressionado = LOW)</td><td>USR2</td></tr>
  </table>
</div>

:::note
Diferente do Display IPS de 1,14'', o Display IPS de 0,96'' **não possui terceiro botão** (sem USR3 em D19). Ele também não possui pads de breakout dedicados para botões.
:::

### Leitura dos Botões

Os demos onboard configuram os botões com o pull-up interno:

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

### Eliminação de Bounce com Interrupções

Para um tratamento de botões responsivo, com eliminação de bounce e sem bloquear o loop principal, você pode usar interrupções por mudança de estado no pino:

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

### Comportamento Padrão no Dashboard de Fábrica

No firmware de fábrica pré-carregado, os botões são mapeados da seguinte forma (você pode sobrescrever isso no seu próprio código):

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>Alterna o brilho da tela (100% → 75% → 50% → 25% → 100%)</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>Alterna o backlight da tela ON/OFF</td></tr>
  </table>
</div>

Quando a tela está desligada (alternada via USR2), pressionar USR2 novamente a restaura para o nível anterior diferente de zero.

---

## Status da Bateria

Este demo mostra o status da bateria — um ícone de bateria com nível de carga e estado de carregamento — no Display IPS de 0,96''. Ele detecta se uma bateria LiPo está fisicamente conectada e mostra um de três estados: **USB PWR** (sem bateria), **porcentagem** (apenas bateria) ou **carregando** (USB + bateria).

O Display IPS de 0,96'' **não possui pino ADC dedicado para bateria** (D16 é NC) — a tensão da bateria é medida através do divisor interno do módulo XIAO nRF52840 Plus.

**Localização do código:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Ver no GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Como Funciona

**Display:**

A tela é controlada pela **Seeed_GFX2** com `Board_XIAO_0inch96_LCD<38, 37>` e `Config_Seeed_0inch96_LCD_ST7789` (80×160, BGR, rotação 2) via SPI de hardware a 10 MHz.

**Circuito da bateria:**

O nRF52840 Plus usa **três pinos GPIO** para formar um sistema completo de monitoramento de bateria:

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>Habilitação do divisor de tensão da bateria. Ativo em nível baixo — defina LOW para habilitar o divisor e depois libere para HIGH (alta impedância) para economizar energia.</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>Entrada analógica que lê a tensão da bateria dividida.</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>Indicador de status de carregamento. Ativo em nível baixo — lê LOW quando um carregador está conectado e a bateria está carregando.</td></tr>
  </table>
</div>

**Detecção:**

Sob USB-C, uma tensão VBAT estática não consegue indicar se uma bateria está presente — o nó BAT do carregador pode se parecer com uma célula Li-ion real mesmo sem bateria conectada. Portanto, o demo primeiro aprende uma **linha de base apenas USB**, depois confirma a inserção da bateria somente após um deslocamento sustentado de VBAT para baixo, e confirma a remoção após uma leitura ruidosa/pulada combinada com `~CHG` indo para HIGH. Isso espelha a lógica de detecção do Dashboard de fábrica.

**Estados do ícone:**

- **Sem bateria** — ícone de bateria com contorno cinza e um X vermelho, rotulado como **USB PWR**.
- **Bateria presente** — ícone de bateria com contorno branco e preenchimento colorido (verde / amarelo / vermelho por porcentagem), rotulado com a **porcentagem** e a **tensão**.
- **Carregando** — preenchimento ciano com um ícone de raio, rotulado com a porcentagem e a tensão.

:::note
O pino `~CHG` é lido através dos **registradores brutos de GPIO** do nRF52840 (`nrf_gpio_cfg_input()` e `NRF_P0->IN`) em vez de `digitalRead()`. Na API do Arduino, os números de pino seguem o mapeamento do pacote da placa, em que `digitalRead(17)` na verdade lê **P0.07** (a linha de dados I2C do IMU de 6 eixos) em vez de P0.17. As constantes `14` e `17` aqui são **números brutos de pino Nordic P0.x** (P0.14 e P0.17), que é exatamente o que as chamadas de registrador esperam.
:::

:::note
A demonstração usa o resistor de baixa lateral **499 kΩ** calibrado de fábrica (taxa do divisor ≈ 3,004), não o valor nominal de 510 kΩ. O divisor está integrado no próprio módulo XIAO nRF52840 Plus, não na placa de display. O pino de habilitação P0.14 é **ativo em nível baixo (active-low)**: coloque-o em nível BAIXO para habilitar o divisor e, em seguida, libere-o para alta impedância (INPUT) para minimizar a corrente de repouso quando a bateria não estiver sendo medida.
:::

### Executando a demonstração

**Passo 1.** Abra `xiao_nrf52840_096_battery_status.ino` na Arduino IDE.

**Passo 2.** Selecione **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** e a **Porta** correta.

**Passo 3.** Clique em **Upload**.

**Passo 4.** Observe a tela — ela mostra o ícone da bateria com o estado atual. Conecte ou desconecte uma bateria LiPo (ou o cabo USB-C) para ver o ícone alternar entre os três estados.

### Resultado esperado

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong> (sem bateria)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong> (apenas bateria)</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong> (USB + bateria)</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Conector da bateria</strong> (parte de trás)</div></td>
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

- **🗃️[Arquivos de design de PCB]** [XIAO 0.96'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 0.96'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 0.96'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [Código de demonstração da placa XIAO Display](https://github.com/Seeed-Projects/Display-Gadgets) — todas as demos de Function estão no diretório `code_GFX2/Function/096_nRF52840/`

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
