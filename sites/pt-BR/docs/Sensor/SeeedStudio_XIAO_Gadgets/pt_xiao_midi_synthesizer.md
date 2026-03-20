---
description: Primeiros Passos com o XIAO MIDI Synthesizer
title: Primeiros Passos com o XIAO MIDI Synthesizer
keywords:
  - XIAO
  - MIDI
  - ESP32-C3
  - SAM2695
  - synthesizer
sidebar_position: 7
image: https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/1.webp
slug: /xiao_midi_synthesizer
sku: 107990333
last_update:
  date: 05/15/2025
  author: Citric
createdAt: '2025-05-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_midi_synthesizer/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/1.jpg" style={{width:600, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O **XIAO MIDI Synthesizer** é um dispositivo compacto e tudo‑em‑um para criação musical, alimentado pelo XIAO ESP32-C3 e pelo chip MIDI profissional SAM2695. Apesar do tamanho reduzido, ele oferece som rico e expressivo, suporta até 64 vozes de polifonia e disponibiliza centenas de timbres de instrumentos. Seja você um desenvolvedor experimentando com som ou um músico compondo novas músicas, este sintetizador foi projetado para tornar a criação musical fluida e inspiradora.

## Recursos

- Criação sem barreiras, perfeito para iniciantes em música
- MIDI + Metrônomo tudo‑em‑um – fluxo de trabalho mais inteligente e fluido
- Desempenho em nível profissional para usuários avançados
- Ultra portátil e totalmente hackeável

## Visão Geral de Hardware

O XIAO MIDI Synthesizer integra os seguintes componentes:

<div class="table-center">
  <table align="center">
    <tr>
      <th colspan="2">Módulo Principal</th>
    </tr>
    <tr>
      <td>MCU</td>
      <td>XIAO ESP32-C3</td>
    </tr>
    <tr>
      <th colspan="2">Geração de Som</th>
    </tr>
    <tr>
      <td>Chip MIDI</td>
      <td>SAM2695</td>
    </tr>
    <tr>
      <td>Polifonia</td>
      <td>Até 64 vozes</td>
    </tr>
    <tr>
      <td>Presets de Instrumentos</td>
      <td>Mais de 100 timbres de instrumentos diferentes disponíveis</td>
    </tr>
    <tr>
      <th colspan="2">Interfaces e Conectividade</th>
    </tr>
    <tr>
      <td>Conector de Áudio 3,5 mm</td>
      <td>Usado para conectar dispositivos de áudio externos (por exemplo, alto‑falantes ou fones de ouvido)<br />Possui desativação automática do amplificador Classe D quando um cabo é inserido e reativação quando é removido</td>
    </tr>
    <tr>
      <td>Botões Físicos</td>
      <td>Quatro botões físicos laterais para interação do usuário</td>
    </tr>
    <tr>
      <td>Soquete XIAO</td>
      <td>Um soquete dedicado projetado para o módulo XIAO, com capacidade de expansão por meio de conectores laterais adicionais</td>
    </tr>
    <tr>
      <td>Amplificador Classe D</td>
      <td>Alto‑falante integrado</td>
    </tr>
    <tr>
      <th colspan="2">Alimentação e Indicadores</th>
    </tr>
    <tr>
      <td>Fonte de Alimentação</td>
      <td>5V Type‑C</td>
    </tr>
    <tr>
      <td>LED Indicador</td>
      <td>Um LED de cor única usado para indicar o status de energia e fornecer feedback ao usuário</td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/3.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/4.png" style={{width:1000, height:'auto'}}/></div>

## Primeiros Passos

Esta seção irá guiá‑lo na configuração do seu XIAO MIDI Synthesizer pela primeira vez.

### Uso do Firmware de Fábrica

O XIAO MIDI Synthesizer vem pré‑gravado com um firmware de fábrica versátil, permitindo que você explore diversos recursos de som e ritmo imediatamente após tirá‑lo da caixa. Abaixo está um guia rápido das funções padrão e das principais operações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/7.png" style={{width:600, height:'auto'}}/></div>

**Funções Detalhadas das Teclas**

- **Teste de Som (Modo Padrão):**
  - **🎵0**: Percorre os 128 timbres de instrumentos predefinidos. Cada pressionamento alterna para o próximo som.
  - **🎵1**: Aumenta a altura da nota (por exemplo, de C4 para D4).
  - **🎵2**: Diminui a altura da nota (por exemplo, de C4 para B3).
  - **🎵3**: Clique para iniciar/parar o metrônomo.

- **Modo Guardião de Batida:**
  - **🎵0**: (Sem função neste modo)
  - **🎵1**: Aumenta o BPM (andamento) em 1 passo (funciona apenas quando o metrônomo está ativo).
  - **🎵2**: Diminui o BPM (andamento) em 1 passo (funciona apenas quando o metrônomo está ativo).
  - **🎵3**: Clique para iniciar/parar o metrônomo (padrão: 120 BPM, faixa: 40–240 BPM).

- **Modo de Reprodução Multifaixa:**
  - **🎵0**: Reproduz Faixa 1 (som ou sequência pré‑carregada)
  - **🎵1**: Reproduz Faixa 2
  - **🎵2**: Reproduz Faixa 3
  - **🎵3**: Reproduz Faixa 4

**Funções de Pressionamento Longo (Qualquer Modo):**

- **🎵1** (segurar por 2 s): Aumentar volume
- **🎵2** (segurar por 2 s): Diminuir volume
- **🎵3** (segurar por 2 s): Alternar para o próximo modo (cicla entre Teste de Som → Guardião de Batida → Reprodução Multifaixa → ...)

:::tip
Você pode experimentar todos os recursos sem qualquer configuração adicional. Para personalização avançada ou para regravar o firmware, consulte o **[código de exemplo StateMachine](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster/blob/main/examples/StateMachine/StateMachine.ino)**.
:::

### Modo BootLoader

Em alguns casos, você pode perceber que o XIAO MIDI Synthesizer não pode ser programado via porta serial (por exemplo, se o dispositivo não for reconhecido ou o upload falhar). Nessas situações, você precisa entrar no **modo Bootloader (BOOT)** para regravar o firmware.

#### Por que Entrar no Modo BOOT?

- Para recuperar o dispositivo quando ele não puder ser programado normalmente via USB/serial
- Para regravar o firmware após um upload malsucedido ou corrupção do firmware

#### Como Entrar no Modo BOOT

Primeiro, abra a tampa traseira do mini sintetizador para acessar os botões BOOT e RESET no módulo XIAO ESP32-C3. Há dois métodos:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/5.jpg" style={{width:600, height:'auto'}}/></div>

- **Método 1: Sequência de Botões**
  1. Com o dispositivo ligado, pressione e segure o botão **BOOT** (não solte).
  2. Enquanto mantém o **BOOT** pressionado, pressione o botão **RESET** uma vez.
  3. Solte o botão **BOOT**.

- **Método 2: Ciclo de Energia**
  1. Desconecte a alimentação (desplugue o cabo USB‑C).
  2. Pressione e segure o botão **BOOT**.
  3. Enquanto mantém o **BOOT** pressionado, reconecte a alimentação (plugue o cabo USB‑C).
  4. Solte o botão **BOOT**.

Após entrar no modo BOOT, o dispositivo estará pronto para upload de firmware via Arduino IDE ou outras ferramentas.

### Reset

Para redefinir o dispositivo, simplesmente pressione o botão **RESET** no módulo XIAO ESP32-C3. O dispositivo será reiniciado.

## Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

O XIAO MIDI Synthesizer é suportado pela biblioteca [Seeed_Arduino_MIDIMaster](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster), que fornece controle MIDI abrangente e recursos de síntese de som.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="ttps://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download do Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Função

Antes de começarmos a desenvolver um sketch, vamos ver as funções disponíveis da biblioteca.

`static SAM2695Synth& getInstance()` – Retorna a instância singleton da classe SAM2695Synth.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: Referência para o objeto singleton SAM2695Synth.

`void begin(T& serial, int baud)` – Inicializa o sintetizador com a interface serial e taxa de baud especificadas.

- **Parâmetros de entrada**:
  - `T& serial`: O objeto de porta serial (serial de hardware ou software) usado para comunicação MIDI.
  - `int baud`: A taxa de baud para comunicação MIDI (tipicamente 31250 para MIDI padrão).
- **Valor de retorno**: Nenhum.

`void setInstrument(uint8_t bank, uint8_t channel, uint8_t value)` – Define o instrumento (timbre) para um canal e banco MIDI específicos.

- **Parâmetros de entrada**:
  - `uint8_t bank`: O número do banco de instrumentos (0–127).
  - `uint8_t channel`: O número do canal MIDI (0–15).
  - `uint8_t value`: O número do instrumento (programa) (0–127).
- **Valor de retorno**: Nenhum.

`void setNoteOn(uint8_t channel, uint8_t pitch, uint8_t velocity)` – Dispara um evento de nota ligada (note‑on) no canal especificado com a altura e velocidade fornecidas.

- **Parâmetros de entrada**:
  - `uint8_t channel`: O número do canal MIDI (0–15).
  - `uint8_t pitch`: O número da nota MIDI (0–127).
  - `uint8_t velocity`: A velocidade (intensidade) da nota (0–127).
- **Valor de retorno**: Nenhum.

`void setNoteOff(uint8_t channel, uint8_t pitch)` – Dispara um evento de nota desligada (note‑off) no canal especificado para a altura fornecida.

- **Parâmetros de entrada**:
  - `uint8_t channel`: O número do canal MIDI (0–15).
  - `uint8_t pitch`: O número da nota MIDI (0–127).
- **Valor de retorno**: Nenhum.

`void setAllNotesOff(uint8_t channel)` – Desliga todas as notas que estão tocando atualmente no canal especificado.

- **Parâmetros de entrada**:
  - `uint8_t channel`: O número do canal MIDI (0–15).
- **Valor de retorno**: Nenhum.

`void playChord(const musicData& chord)` – Reproduz um acorde enviando eventos de nota ligada para todas as notas na estrutura de acorde fornecida.

- **Parâmetros de entrada**:
  - `const musicData& chord`: Uma estrutura que contém informações de canal, notas, velocidade e temporização para o acorde.
- **Valor de retorno**: Nenhum.

`void setPitch(uint8_t pitch)` – Define o valor de altura padrão para eventos de nota subsequentes.

- **Parâmetros de entrada**:
  - `uint8_t pitch`: O número da nota MIDI (0–127) a ser definido como altura padrão.
- **Valor de retorno**: Nenhum.

`uint8_t getPitch() const` – Obtém o valor de altura padrão atual.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: O número de nota MIDI padrão atual (0–127).

`void setVolume(uint8_t channel, uint8_t level)` – Define o volume para um canal MIDI específico.

- **Parâmetros de entrada**:
  - `uint8_t channel`: O número do canal MIDI (0–15).
  - `uint8_t level`: O nível de volume (0–127).
- **Valor de retorno**: Nenhum.

`void increasePitch()` – Aumenta o valor de altura padrão em um semitom.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: Nenhum.

`void decreasePitch()` – Diminui o valor de altura padrão em um semitom.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: Nenhum.

`void increaseVelocity()` – Aumenta a velocidade (volume) padrão para eventos de nota.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: Nenhum.

`void decreaseVelocity()` – Diminui a velocidade (volume) padrão para eventos de nota.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: Nenhum.

`void increaseBpm()` – Aumenta o andamento atual (batidas por minuto) por um passo predefinido.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: Nenhum.

`void decreaseBpm()` – Diminui o andamento atual (batidas por minuto) por um passo predefinido.

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: Nenhum.

`void setBpm(uint8_t bpm)` – Define o andamento (batidas por minuto) para o valor especificado.

- **Parâmetros de entrada**:
  - `uint8_t bpm`: O andamento desejado em batidas por minuto (tipicamente 40–240).
- **Valor de retorno**: Nenhum.

`uint8_t getBpm() const` – Obtém o andamento atual (batidas por minuto).

- **Parâmetros de entrada**: Nenhum.
- **Valor de retorno**: O valor atual de BPM.

### Variáveis padrão

O código a seguir mostra alguns dos valores predefinidos na biblioteca, como tipo de instrumento, nota etc., para serem consultados.

<details>

<summary>Clique aqui para visualizar o código completo</summary>

```cpp
#define MIDI_SERIAL_BAUD_RATE           31250   //MIDI serial baud rate
#define USB_SERIAL_BAUD_RATE            115200  //USB  serial baud rate
#define MIDI_COMMAND_ON                 0x90    //MIDI Control Switch - On
#define MIDI_COMMAND_OFF                0x80    //MIDI Control Switch - Off
#define BPM_DEFAULT                     120     //default bpm
#define BPM_MIN                         40      //min bpm
#define BPM_MAX                         240     //max bpm
#define BPM_STEP                        10      //step of bpm
#define MIDI_CMD_CONTROL_CHANGE \
0xB0                              // Control Change (or Channel Mode
                                      // Message)
#define MIDI_CMD_PROGRAM_CHANGE 0xC0  // Program Change

#define VELOCITY_MIN                    0       //min velocity(0~127) 0
#define VELOCITY_MAX                    127     //max velocity(0~127) 127
#define VELOCITY_STEP                   10      //step velocity
#define VELOCITY_DEFAULT                64      //default velocity(0~127) 64
#define BASIC_TIME                      60000   //The number of milliseconds corresponding to 1 minute
#define QUATER_NOTE                     0       //Quarter note
#define EIGHTH_NOTE                     1       //Eighth note
#define SIXTEENTH_NOTE                  2       //sixteenth note
#define BEATS_BAR_DEFAULT               4       //default beat - 4/4 beat
#define BEATES_BAR_2                    2       //2/4 beat
#define BEATS_BAR_3                     3       //3/4 beat
#define BEATS_BAR_4                     4       //4/4 beat
#define NOTE_COUNT_DEFAULT              4       //default note count
#define NOTE_COUNT_MIN                  1       //min note count
#define NOTE_COUNT_MAX                  16      //max note count


/* define channel begin */
#define CHANNEL_0                       0
#define CHANNEL_1                       1
#define CHANNEL_2                       2
#define CHANNEL_3                       3
#define CHANNEL_4                       4
#define CHANNEL_5                       5
#define CHANNEL_6                       6
#define CHANNEL_7                       7
#define CHANNEL_8                       8
#define CHANNEL_9                       9
#define CHANNEL_10                      10
#define CHANNEL_11                      11
#define CHANNEL_12                      12
#define CHANNEL_13                      13
#define CHANNEL_14                      14
#define CHANNEL_15                      15


#define NOTE_B0                         23
#define NOTE_C1                         24
#define NOTE_CS1                        25
#define NOTE_D1                         26
#define NOTE_DS1                        27
#define NOTE_E1                         28
#define NOTE_F1                         29
#define NOTE_FS1                        30
#define NOTE_G1                         31
#define NOTE_GS1                        32
#define NOTE_A1                         33
#define NOTE_AS1                        34
#define NOTE_B1                         35
#define NOTE_C2                         36
#define NOTE_CS2                        37
#define NOTE_D2                         38
#define NOTE_DS2                        39
#define NOTE_E2                         40
#define NOTE_F2                         41
#define NOTE_FS2                        42
#define NOTE_G2                         43
#define NOTE_GS2                        44
#define NOTE_A2                         45
#define NOTE_AS2                        46
#define NOTE_B2                         47
#define NOTE_C3                         48
#define NOTE_CS3                        49
#define NOTE_D3                         50
#define NOTE_DS3                        51
#define NOTE_E3                         52
#define NOTE_F3                         53
#define NOTE_FS3                        54
#define NOTE_G3                         55
#define NOTE_GS3                        56
#define NOTE_A3                         57
#define NOTE_AS3                        58
#define NOTE_B3                         59
#define NOTE_C4                         60
#define NOTE_CS4                        61
#define NOTE_D4                         62
#define NOTE_DS4                        63
#define NOTE_E4                         64
#define NOTE_F4                         65
#define NOTE_FS4                        66
#define NOTE_G4                         67
#define NOTE_GS4                        68
#define NOTE_A4                         69
#define NOTE_AS4                        70
#define NOTE_B4                         71
#define NOTE_C5                         72
#define NOTE_CS5                        73
#define NOTE_D5                         74
#define NOTE_DS5                        75
#define NOTE_E5                         76
#define NOTE_F5                         77
#define NOTE_FS5                        78
#define NOTE_G5                         79
#define NOTE_GS5                        80
#define NOTE_A5                         81
#define NOTE_AS5                        82
#define NOTE_B5                         83
#define NOTE_C6                         84
#define NOTE_CS6                        85
#define NOTE_D6                         86
#define NOTE_DS6                        87
#define NOTE_E6                         88
#define NOTE_F6                         89
#define NOTE_FS6                        90
#define NOTE_G6                         91
#define NOTE_GS6                        92
#define NOTE_A6                         93
#define NOTE_AS6                        94
#define NOTE_B6                         95
#define NOTE_C7                         96
#define NOTE_CS7                        97
#define NOTE_D7                         98
#define NOTE_DS7                        99
#define NOTE_E7                         100
#define NOTE_F7                         101
#define NOTE_FS7                        102
#define NOTE_G7                         103
#define NOTE_GS7                        104
#define NOTE_A7                         105
#define NOTE_AS7                        106
#define NOTE_B7                         107
#define NOTE_C8                         108
#define NOTE_CS8                        109
#define NOTE_D8                         110
#define NOTE_DS8                        111
#define REST                            0


typedef enum {
    GrandPiano_1 = 0,
    BrightPiano_2,
    ElGrdPiano_3,
    HonkyTonkPiano,
    ElPiano1,
    ElPiano2,
    Harpsichord,
    Clavi,
    Celesta,
    Glockenspiel,
    MusicBox,
    Vibraphone,
    Marimba,
    Xylophone,
    TubularBells,
    Santur,
    DrawbarOrgan,
    PercussiveOrgan,
    RockOrgan,
    ChurchOrgan,
    ReedOrgan,
    AccordionFrench,
    Harmonica,
    TangoAccordion,
    AcGuitarNylon,
    AcGuitarSteel,
    AcGuitarJazz,
    AcGuitarClean,
    AcGuitarMuted,
    OverdrivenGuitar,
    DistortionGuitar,
    GuitarHarmonics,
    AcousticBass,
    FingerBass,
    PickedBass,
    FretlessBass,
    SlapBass1,
    SlapBass2,
    SynthBass1,
    SynthBass2,
    Violin,
    Viola,
    Cello,
    Contrabass,
    TremoloStrings,
    PizzicatoStrings,
    OrchestralHarp,
    Timpani,
    StringEnsemble1,
    StringEnsemble2,
    SynthStrings1,
    SynthStrings2,
    ChoirAahs,
    VoiceOohs,
    SynthVoice,
    OrchestraHit,
    Trumpet,
    Trombone,
    Tuba,
    MutedTrumpet,
    FrenchHorn,
    BrassSection,
    SynthBrass1,
    SynthBrass2,
    SopranoSax,
    AltoSax,
    TenorSax,
    BaritoneSax,
    Oboe,
    EnglishHorn,
    Bassoon,
    Clarinet,
    Piccolo,
    Flute,
    Recorder,
    PanFlute,
    BlownBottle,
    Shakuhachi,
    Whistle,
    Ocarina,
    Lead1Square,
    Lead2Sawtooth,
    Lead3Calliope,
    Lead4Chiff,
    Lead5Charang,
    Lead6Voice,
    Lead7Fifths,
    Lead8BassLead,
    Pad1Fantasia,
    Pad2Warm,
    Pad3PolySynth,
    Pad4Choir,
    Pad5Bowed,
    Pad6Metallic,
    Pad7Halo,
    Pad8Sweep,
    FX1Rain,
    FX2Soundtrack,
    FX3Crystal,
    FX4Atmosphere,
    FX5Brightness,
    FX6Goblins,
    FX7Echoes,
    FX8SciFi,
    Sitar,
    Banjo,
    Shamisen,
    Koto,
    Kalimba,
    BagPipe,
    Fiddle,
    Shanai,
    TinkleBell,
    Agogo,
    SteelDrums,
    Woodblock,
    TaikoDrum,
    MelodicTom,
    SynthDrum,
    ReverseCymbal,
    GtFretNoise,
    BreathNoise,
    Seashore,
    BirdTweet,
    TelephRing,
    Helicopter,
    Applause,
    Gunshot,
} unit_synth_instrument_t;
```

</details>

### Instalação

Passo 1. Baixe a biblioteca [Seeed_Arduino_MIDIMaster](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster) como um arquivo ZIP.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="ttps://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Passo 2. No Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library** e selecione o arquivo ZIP baixado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Exemplo de Sintetizador MIDI XIAO

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos para o nosso XIAO MIDI Synthesizer para ver como ele se comporta.

**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Baixar Arduino IDE</font></span></strong></a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- O XIAO MIDI Synthesizer vem com **XIAO ESP32-C3** integrado, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/)** para concluir a adição.

### Demo 1: Reprodução Básica de Nota MIDI

Esta demonstração mostra como tocar uma única nota usando o XIAO MIDI Synthesizer.

#### Materiais Necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDI Synthesizer</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Programa de Referência

```cpp
#include <Arduino.h>
#include "SAM2695Synth.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif


void setup()
{
  //serial init to usb
  SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
  // Synth initialization. Since a hardware serial port is used here, the software serial port is commented out.
  synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
  synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
  delay(1000);
}

void loop()
{
  synth.setNoteOn(CHANNEL_0,NOTE_E4,VELOCITY_DEFAULT);
  delay(1000);
  synth.setNoteOff(CHANNEL_0,NOTE_E4);
  delay(1000);
}
```

> Este código irá tocar a nota E4 no sintetizador integrado, alternando ligado e desligado a cada segundo. Você pode alterar a nota, o instrumento ou o tempo conforme necessário.

#### Anotação do programa

Este código representa a funcionalidade central do XIAO MIDI Synthesizer, uma solução compacta de síntese de áudio baseada no chip sintetizador SAM2695. A implementação de software demonstra como o sintetizador se conecta a várias variantes da plataforma XIAO por meio de diferentes métodos de comunicação serial.

O XIAO MIDI Synthesizer oferece suporte a múltiplas plataformas de microcontroladores no ecossistema XIAO por meio de compilação condicional:

- **Placas baseadas em AVR**: Utilizam SoftwareSerial para comunicação com o chip sintetizador
- **RP2040/RP2350 e XIAO RA4M1**: Implementam SoftwareSerial em pinos designados (D7, D6)
- **Variantes ESP32**: Aproveitam os recursos nativos de Hardware Serial via Serial0
- **Placas baseadas em SAMD** (incluindo XIAO M0): Usam a interface UART de hardware
- **nRF52840**: Implementa comunicação UART com suporte opcional a TinyUSB

Essa abordagem versátil garante que o módulo sintetizador funcione de forma consistente em toda a família de produtos XIAO.

A implementação do sintetizador estabelece dois caminhos de comunicação:

```cpp
  SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
  synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
```

- Uma conexão serial dedicada ao chip SAM2695 para comandos MIDI
- Uma conexão serial separada de interface de depuração/usuário para monitoramento e controle

Durante a inicialização, o XIAO MIDI Synthesizer:

1. Estabelece comunicação serial na taxa de baud apropriada
2. Inicializa o mecanismo de síntese SAM2695
3. Configura o instrumento padrão (Grand Piano) no Canal 0

```cpp
  synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
```

4. Permite a estabilização com um atraso de temporização

O loop de demonstração exibe a capacidade fundamental de geração de som:

```cpp
void loop()
{
  synth.setNoteOn(CHANNEL_0,NOTE_E4,VELOCITY_DEFAULT);
  delay(1000);
  synth.setNoteOff(CHANNEL_0,NOTE_E4);
  delay(1000);
}
```

1. Disparar a nota E4 com velocidade padrão
2. Manter a nota por um segundo
3. Liberar a nota
4. Pausar antes do próximo ciclo

Esta implementação representa a base sobre a qual aplicações musicais mais complexas podem ser construídas usando a plataforma XIAO MIDI Synthesizer, seja para fins educacionais, prototipagem musical ou projetos de áudio embarcados.

### Demo 2: Sequenciador de Ritmo com Controle por Botão

Esta demonstração mostra como usar os botões físicos do XIAO MIDI Synthesizer para controlar um sequenciador de ritmo simples. Você pode iniciar/parar o ritmo e ajustar o tempo em tempo real usando os botões.

#### Materiais Necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDI Synthesizer</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Programa de Referência

```cpp
#include <Arduino.h>
#include "SAM2695Synth.h"
#include "Button.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3) 
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif


#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(CONFIG_IDF_TARGET_ESP32S3)
    #define BUTTON_A_PIN 4
    #define BUTTON_B_PIN 3
    #define BUTTON_C_PIN 2 
    #define BUTTON_D_PIN 1 
#elif defined(CONFIG_IDF_TARGET_ESP32C3)
    #define BUTTON_A_PIN 5
    #define BUTTON_B_PIN 4
    #define BUTTON_C_PIN 3 
    #define BUTTON_D_PIN 2 
#elif defined(CONFIG_IDF_TARGET_ESP32C6)
    #define BUTTON_A_PIN 21
    #define BUTTON_B_PIN 2
    #define BUTTON_C_PIN 1 
    #define BUTTON_D_PIN 0
#else //You need to refer to the corresponding manual...
    #define BUTTON_A_PIN 0 //You need to refer to the corresponding manual...
    #define BUTTON_B_PIN 1 //You need to refer to the corresponding manual...
    #define BUTTON_C_PIN 2 //You need to refer to the corresponding manual...
    #define BUTTON_D_PIN 3 //You need to refer to the corresponding manual...
#endif

//Define the structure needed for the button
BtnState btnA = {HIGH, HIGH, 0, 0, false};
BtnState btnB = {HIGH, HIGH, 0, 0, false};
BtnState btnC = {HIGH, HIGH, 0, 0, false};


bool music_on_off_flag = false;
int bpm = BPM_DEFAULT;                            // init BPM，BPM_DEFAULT = 120
int beatsPerBar = BEATS_BAR_DEFAULT;              // Beats per measure, which can be 2, 3, or 4
int noteType = QUATER_NOTE;                       // Note type selection: 0 (quarter note), 1 (eighth note), 2 (sixteenth note)
int beatCount = 0;                                // Beat counter
unsigned long previousMillis = 0;                 // Record the time of the last MIDI signal sent


void setup()
{
    //serial init to usb
    SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
    // Synth initialization. Since a hardware serial port is used here, the software serial port is commented out.
    synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
    synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
    initButtons(BUTTON_A_PIN);
    initButtons(BUTTON_B_PIN);
    initButtons(BUTTON_C_PIN);

    delay(1000);
}

void loop()
{
    detectButtonEvents(BUTTON_A_PIN, btnA, shortPressFlag_A, longPressFlag_A, releaseFlag_A);
    detectButtonEvents(BUTTON_B_PIN, btnB, shortPressFlag_B, longPressFlag_B, releaseFlag_B);
    detectButtonEvents(BUTTON_C_PIN, btnC, shortPressFlag_C, longPressFlag_C, releaseFlag_C);
    if(shortPressFlag_A){
        shortPressFlag_A = false;
        music_on_off_flag = !music_on_off_flag;
    }
    if(shortPressFlag_B){
        shortPressFlag_B = false;
        synth.increaseBpm();
    }
    if(shortPressFlag_C){
        shortPressFlag_C = false;
        synth.decreaseBpm();
    }
    play();
}

void play()
{
    // Calculate the interval between each beat (quarter note) in milliseconds
    // 60,000 milliseconds equals 1 minute
    // Adjust interval based on note type
    unsigned long interval = (BASIC_TIME / synth.getBpm()) / (noteType + 1); 

    if(music_on_off_flag)
    {
        unsigned long currentMillis = millis();
        if (currentMillis - previousMillis >= interval)
        {
            previousMillis = currentMillis;
            if (beatCount == 0)
                synth.setNoteOn(CHANNEL_9, NOTE_D2, VELOCITY_DEFAULT);
            else
                synth.setNoteOn(CHANNEL_9, NOTE_C2, VELOCITY_DEFAULT);

            // Increment beat count
            beatCount++;

            // Every four beats, indicating the end of a measure
            if (beatCount >= beatsPerBar)
            {
                // Reset count
                beatCount = 0;
            }
        }
    }
}
```

> Este código demonstra um sequenciador de ritmo simples. O Botão A alterna o ritmo ligado/desligado, o Botão B aumenta o tempo (BPM) e o Botão C diminui o tempo. O sequenciador reproduz um padrão básico de bateria usando notas MIDI no Canal 9. Você pode expandir este exemplo para adicionar ritmos mais complexos ou funções adicionais para os botões.

#### Anotação do programa

Este programa expande a demonstração básica de nota MIDI ao introduzir interação em tempo real do usuário por meio de botões físicos. O código utiliza três botões:

- **Botão A**: Iniciar/parar a sequência de ritmo
- **Botão B**: Aumentar o tempo (BPM)
- **Botão C**: Diminuir o tempo (BPM)

A função `play()` calcula o intervalo entre batidas com base no BPM e no tipo de nota atuais e aciona sons de bateria (usando as notas MIDI D2 e C2 no Canal 9) em um padrão repetitivo. A contagem de batidas é reiniciada a cada compasso, criando um efeito simples de metrônomo ou drum machine.

Este exemplo demonstra como:

- Integrar entrada de botões para controle em tempo real
- Ajustar dinamicamente o tempo e o estado de reprodução
- Usar o XIAO MIDI Synthesizer como um gerador de ritmos programável

Você pode aprimorar ainda mais esta demonstração adicionando mais botões, suportando diferentes sons de bateria ou implementando uma lógica de sequenciador mais avançada.

### Demo 3: Reprodução de Acordes Multifaixa com Controle por Botões

Esta demonstração mostra como usar o XIAO MIDI Synthesizer para reproduzir acordes multifaixa, com cada acorde acionado por um botão. Você pode iniciar/parar de forma independente dois padrões de acordes diferentes usando dois botões físicos.

#### Materiais necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDI Synthesizer</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Programa de referência

```cpp
#include <Arduino.h>
#include "SAM2695Synth.h"
#include "Button.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(CONFIG_IDF_TARGET_ESP32S3)
    #define BUTTON_A_PIN 4
    #define BUTTON_B_PIN 3
    #define BUTTON_C_PIN 2 
    #define BUTTON_D_PIN 1 
#elif defined(CONFIG_IDF_TARGET_ESP32C3)
    #define BUTTON_A_PIN 5
    #define BUTTON_B_PIN 4
    #define BUTTON_C_PIN 3 
    #define BUTTON_D_PIN 2 
#elif defined(CONFIG_IDF_TARGET_ESP32C6)
    #define BUTTON_A_PIN 21
    #define BUTTON_B_PIN 2
    #define BUTTON_C_PIN 1 
    #define BUTTON_D_PIN 0
#else //You need to refer to the corresponding manual...
    #define BUTTON_A_PIN 0 //You need to refer to the corresponding manual...
    #define BUTTON_B_PIN 1 //You need to refer to the corresponding manual...
    #define BUTTON_C_PIN 2 //You need to refer to the corresponding manual...
    #define BUTTON_D_PIN 3 //You need to refer to the corresponding manual...
#endif

//Define the structure needed for the button
BtnState btnA = {HIGH, HIGH, 0, 0, false};
BtnState btnB = {HIGH, HIGH, 0, 0, false};

//Example of multi-track chord data definition
// This structure controls playback on channel 9, with only two notes being played. 
// The sound is set to the default sound, and the duration can be adjusted as needed.
const musicData chordTwoNotes =
{
    CHANNEL_1,                          //play on channel 9
    {
        {NOTE_C2, true},                //NOTE_C2 on
        {NOTE_FS2, true},               //NOTE_FS2 on
        {NOTE_E6, false},               //NOTE_E6 off
        {NOTE_CS5, false},              //NOTE_CS5 off
    },
    VELOCITY_DEFAULT ,                  //default velocity(64)
    0,                                  // index Not used here
    BPM_DEFAULT*8,                      //interval time
};

const musicData chordFourNotes =
{
    CHANNEL_2,                          // play on channel 0
    {
        {NOTE_F2, true},                // NOTE_F2 on
        {NOTE_B2, true},                // NOTE_B2 on
        {NOTE_E6, true},                // NOTE_E6 on
        {NOTE_CS5, true},               // NOTE_CS5 on
    },
    VELOCITY_DEFAULT ,                  // default velocity(64)
    0,                                  // index Not used here
    BPM_DEFAULT*4,                      // interval time
};

bool chordTwoNotesFlag = false;         // on or off chord_twoNotes
bool chordFourNotesFlag = false;        // on or off chord_fourNotes
unsigned long preMillisTwoNotes = 0;    // Record the time of the last MIDI signal sent on chord_twoNotes
unsigned long preMillisFourNotes= 0;    // Record the time of the last MIDI signal sent on const musicData chord_fourNotes =


void setup()
{
    //serial init to usb
    SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
    // Synth initialization. Since a hardware serial port is used here, the software serial port is commented out.
    synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
    synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
    // Initialize the buttons you are using.
    initButtons(BUTTON_A_PIN);
    initButtons(BUTTON_B_PIN);

    delay(1000);
}

void loop()
{
    detectButtonEvents(BUTTON_A_PIN, btnA, shortPressFlag_A, longPressFlag_A, releaseFlag_A);
    detectButtonEvents(BUTTON_B_PIN, btnB, shortPressFlag_B, longPressFlag_B, releaseFlag_B);
    if(shortPressFlag_A)
    {
        shortPressFlag_A = false;
        chordTwoNotesFlag = !chordTwoNotesFlag;
    }
    if(shortPressFlag_B)
    {
        shortPressFlag_B = false;
        chordFourNotesFlag = !chordFourNotesFlag;
    }
    play();
}

void play()
{
    unsigned long currentMillis = millis();
    if(chordTwoNotesFlag)
    {
        if (currentMillis - preMillisTwoNotes >= chordTwoNotes.delay)
        {
            preMillisTwoNotes = currentMillis;
            synth.playChord(chordTwoNotes);
        }
    }

    if(chordFourNotesFlag)
    {
        if (currentMillis - preMillisFourNotes >= chordFourNotes.delay)
        {
            preMillisFourNotes = currentMillis;
            synth.playChord(chordFourNotes);
        }
    }
}
```

> Este código demonstra como acionar dois acordes diferentes com múltiplas notas usando dois botões. O Botão A alterna a reprodução de um acorde de duas notas, e o Botão B alterna a reprodução de um acorde de quatro notas. Cada acorde é reproduzido em um canal MIDI diferente e com seu próprio tempo.

#### Anotação do programa

Este programa demonstra a reprodução de acordes multifaixa com controle por botões em tempo real. O código define dois padrões de acordes (`chordTwoNotes` e `chordFourNotes`), cada um com seu próprio canal MIDI, notas e temporização. São usados dois botões:

- **Botão A**: Iniciar/parar a sequência de acorde de duas notas
- **Botão B**: Iniciar/parar a sequência de acorde de quatro notas

A função `play()` verifica a temporização de cada acorde e aciona a reprodução se o sinalizador correspondente estiver habilitado. Isso permite a reprodução independente e sobreposta de diferentes padrões de acordes, simulando um sequenciador multifaixa simples.

Este exemplo demonstra como:

- Definir e reproduzir estruturas de acordes personalizadas
- Usar múltiplos botões para controle musical independente
- Construir performances musicais mais complexas e em camadas com o XIAO MIDI Synthesizer

Você pode expandir esta demonstração adicionando mais padrões de acordes, suportando botões adicionais ou sincronizando a reprodução para efeitos musicais mais avançados.

### Demo 4: Reproduzindo uma Sequência Completa de Melodia

Esta demonstração mostra como usar o XIAO MIDI Synthesizer para reproduzir uma sequência completa de melodia (como uma música) armazenando dados de nota, duração e atraso em um array. O exemplo demonstra como reproduzir uma melodia pré-programada usando o instrumento Violin integrado.

#### Materiais necessários

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDI Synthesizer</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### Programa de referência

```cpp
#include <SAM2695Synth.h>

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3) 
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif


#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

// Can be moved in header file i.e notes.h
#define ARRAY_LEN(array) (sizeof(array) / sizeof(array[0]))

const int midi1[453][3] = {
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_C4, 600, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 1500, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_C4, 600, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 2000, 500},


 {NOTE_F4, 300, 0},
 {NOTE_E4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_A3, 300, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 2000, 500},


 {NOTE_C4, 1200, 0},
 {NOTE_E4, 400, 0},
 {NOTE_F4, 2000, 500},
 {NOTE_C4, 1500, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 1600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_AS4, 600, 0},
 {NOTE_A4, 1200, 0},
 {NOTE_G4, 500, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 1000, 500},
 {NOTE_F4, 400, 0},
 {NOTE_E4, 300, 0},
 {NOTE_F4, 3000, 0},
 {NOTE_C4, 1200, 0},
 {NOTE_E4, 400, 0},
 {NOTE_F4, 2000, 500},
 {NOTE_C4, 1500, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 1600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_AS4, 600, 0},
 {NOTE_A4, 1200, 0},
 {NOTE_G4, 500, 0},
 {NOTE_F4, 800, 0},
 {NOTE_G4, 800, 0},
 {NOTE_AS4, 400, 0},
 {NOTE_A4, 300, 0},
 {NOTE_F4, 3000, 0},

 {NOTE_AS4, 1200, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 2000, 500},
 {NOTE_AS4, 1200, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 2000, 500},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_C4, 600, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 1100, 500},
 {NOTE_F4, 300, 0},
 {NOTE_AS4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 1800, 500},
 {NOTE_C4, 300, 0},
 {NOTE_E4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 1000, 500},


 {NOTE_G4, 400, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 700, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_A4, 1500, 500},


 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1200, 500},


 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 57},
 {NOTE_A4, 1000, 0},

 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1000, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1000, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 26},
 {NOTE_A4, 1200, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1000, 0},
 {NOTE_E4, 1000, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},


 {NOTE_C4, 800, 0},
 {NOTE_C4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_DS4, 300, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 600, 0},
 {NOTE_AS3, 600, 0},
 {NOTE_C4, 2000, 0},
 {NOTE_C4, 800, 0},
 {NOTE_C4, 800, 0},
 {NOTE_DS4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_GS4, 600, 0},
 {NOTE_G4, 1200, 0},
 {NOTE_C4, 800, 0},
 {NOTE_C4, 800, 0},
 {NOTE_DS4, 300, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_AS3, 600, 0},
 {NOTE_C4, 1200, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_GS4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_DS4, 600, 1200},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 500, 100},
 {NOTE_G4, 500, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 500, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 500, 100},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 57},
 {NOTE_A4, 1000, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1000, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1500, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 10},
 {NOTE_B4, 300, 10},
 {NOTE_A4, 1500, 0},
 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1500, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 57},
 {NOTE_A4, 1200, 0},
 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 2000, 0},


 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_A4, 1200, 0},
 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1500, 0},
};

void playMidi(const int notes[][3], size_t len) {
    for (int i = 0; i < len; i++) {
        // Play note
        synth.setNoteOn(CHANNEL_0, notes[i][0], 110);
        delay(notes[i][1]);
        // Stop note
        synth.setNoteOff(CHANNEL_0, notes[i][0]);
        delay(notes[i][2]);
    }
}

void setup() {
    // Initialize USB serial port
    SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
    // Initialize MIDI synthesizer
    synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
    // Set instrument sound to Violin
    synth.setInstrument(0, CHANNEL_0, unit_synth_instrument_t::Violin);
    delay(1000);

    // Play MIDI notes
    playMidi(midi1, ARRAY_LEN(midi1));
}

void loop() {
    // Main loop is empty because the music only plays once
}
```

> Este código demonstra como reproduzir uma sequência completa de melodia percorrendo um grande array de notas, durações e atrasos. A melodia será executada uma vez após a energização ou reset. Você pode modificar o array para tocar músicas diferentes ou adicionar arranjos mais complexos.

#### Anotação do programa

Este programa demonstra como:

- Armazenar uma melodia completa como um array de valores de nota, duração e atraso
- Usar uma função auxiliar (`playMidi`) para percorrer a melodia e tocar cada nota em sequência
- Selecionar um instrumento específico (Violino) para reprodução
- Reproduzir uma música automaticamente na inicialização

Você pode expandir esta demonstração:

- Alterando o instrumento ou os dados de notas para tocar músicas diferentes
- Adicionando botões de controle para iniciar/parar ou repetir a reprodução
- Implementando reprodução multifaixa ou polifônica para efeitos musicais mais avançados

:::tip
Para quem deseja converter arquivos MIDI em código Arduino, você pode experimentar ferramentas como [Midi2ArduinoTone](https://tawsiftorabi.github.io/Midi2ArduinoTone/). No entanto, observe que os valores de nota gerados por essas ferramentas podem precisar ser modificados para funcionar com o XIAO MIDI Synthesizer, pois eles usam mapeamentos de notas diferentes. Essas ferramentas ainda podem ser úteis como ponto de partida para converter arquivos MIDI em um formato que você possa adaptar para este sintetizador.

:::

## Recursos

- **[PDF]** [XIAO MIDI Synthesizer SCH](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/202004281_XIAO_MIDI_Synthesizer_v1.0_SCH&PDF_250421.pdf)
- **[ZIP]** [XIAO MIDI Synthesizer SCH&PCB](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/202004281_XIAO_MIDI_Synthesizer_v1.0_SCH&PCB_050421.zip)
- **[GitHub]** [Seeed_Arduino_MIDIMaster Library](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster)

## Solução de Problemas

### P1: Como posso converter um arquivo MIDI em código Arduino para o XIAO MIDI Synthesizer?

Para converter um arquivo MIDI em código Arduino que possa ser usado com o XIAO MIDI Synthesizer, você pode seguir estas etapas:

1. Obtenha um arquivo MIDI

    Você pode baixar arquivos MIDI gratuitos nos seguintes sites:
    - [The Wild West MIDIs](https://thewildwestmidis.github.io/?search=animals)
    - [LibreScore MIDI Library](https://github.com/LibreScore/app-librescore?tab=readme-ov-file#installation)

2. Converta o arquivo MIDI para texto

    Use a ferramenta open-source [midicomp](https://github.com/markc/midicomp) para converter seu arquivo MIDI em um formato de texto legível por humanos.

3. Converta o texto MIDI em código executável

    Depois de converter seu arquivo MIDI para um formato de texto usando `midicomp`, você precisa processar esse texto em um array C/C++ que o XIAO MIDI Synthesizer possa tocar. A Seeed fornece scripts em Python para automatizar essa conversão:

    - **Ritmo rápido, faixa única (cada início de nota como intervalo):**  
    [change_fast.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_fast.py)
    - **Ritmo mais lento, faixa única (cada fim de nota como intervalo):**  
    [change_shuqing.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_shuqing.py)
    - **Processamento multifaixa:**  
    [change_mutich.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_mutich.py)

    **Exemplo de uso:**

    1. Coloque seu arquivo de texto MIDI (por exemplo, `1.txt`) no mesmo diretório do script.
    2. Execute o script no seu terminal:

    ```sh
    python change_fast.py
    ```

    Isso irá gerar um arquivo de cabeçalho (por exemplo, `track_from_miditext.h`) contendo o array de notas.

    3. Copie o array gerado para o seu sketch Arduino, substituindo os dados da melodia.

    :::tip
    - Os scripts mapeiam automaticamente os números de notas MIDI para as definições de notas do XIAO MIDI Synthesizer.
    - Você pode ajustar o script ou o array gerado para arranjos personalizados ou para se adequar a limitações de memória.
    :::

    4. Integre o código gerado

    - Abra o arquivo `.h` gerado e copie o array `musicData`.
    - Cole-o em seu projeto Arduino, substituindo o array de melodia existente.
    - Atualize sua lógica de reprodução, se necessário, para corresponder à nova estrutura do array.

### P2: Por que às vezes é impossível fazer upload de programas para o XIAO MIDI Synthesizer?

Como o programa do ESP32-C3 é gravado via UART, travamentos ocasionais do programa podem resultar em erros que impedem o upload de programas para o XIAO. Além disso, como o XIAO e a placa MIDI se comunicam diretamente por UART, métodos tradicionais de boot podem não funcionar diretamente com o XIAO. Você pode tentar a seguinte abordagem:

1. Ligue o XIAO MIDI Synthesizer e remova a placa de desenvolvimento XIAO ESP32-C3.
2. Desconecte o cabo USB.
3. Pressione e segure o botão B na placa XIAO ESP32-C3 sem soltá-lo.
4. Reconecte o cabo USB e, em seguida, solte o botão B.
5. Faça o upload do programa.

Este procedimento deve permitir o upload bem-sucedido do programa.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
