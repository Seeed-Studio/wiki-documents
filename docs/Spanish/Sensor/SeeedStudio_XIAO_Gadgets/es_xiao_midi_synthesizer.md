---
description: Getting Started with XIAO MIDI Synthesizer
title: Primeros Pasos con XIAO MIDI Synthesizer
keywords:
  - XIAO
  - MIDI
  - ESP32-C3
  - SAM2695
  - synthesizer
sidebar_position: 7
image: https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/1.webp
slug: /es/xiao_midi_synthesizer
last_update:
  date: 07/21/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/1.jpg" style={{width:600, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El **XIAO MIDI Synthesizer** es un dispositivo compacto todo-en-uno para creación musical, impulsado por el XIAO ESP32-C3 y el chip MIDI profesional SAM2695. A pesar de su tamaño reducido, ofrece un sonido rico y expresivo, admite hasta 64 voces en polifonía y ofrece cientos de timbres instrumentales. Ya seas un desarrollador experimentando con sonido o un músico componiendo nuevas melodías, este sintetizador está diseñado para facilitar e inspirar la creación musical.

## Características

- Creación sin barreras, ideal para principiantes en música  
- MIDI + Metrónomo integrados: flujo de trabajo más inteligente y fluido  
- Rendimiento profesional para músicos avanzados  
- Ultra portátil y completamente hackeable

## Vista general del hardware

El XIAO MIDI Synthesizer integra los siguientes componentes:

<div class="table-center">
  <table align="center">
    <tr><th colspan="2">Módulo Principal</th></tr>
    <tr><td>MCU</td><td>XIAO ESP32-C3</td></tr>
    <tr><th colspan="2">Generación de Sonido</th></tr>
    <tr><td>Chip MIDI</td><td>SAM2695</td></tr>
    <tr><td>Polifonía</td><td>Hasta 64 voces</td></tr>
    <tr><td>Presets Instrumentales</td><td>Más de 100 sonidos diferentes</td></tr>
    <tr><th colspan="2">Interfaces y Conectividad</th></tr>
    <tr>
      <td>Jack de audio 3.5mm</td>
      <td>Conecta dispositivos de audio externos (altavoces, auriculares)<br/>Desactiva automáticamente el amplificador clase D al insertar cable y lo reactiva al retirarlo</td>
    </tr>
    <tr><td>Botones físicos</td><td>Cuatro botones laterales para interacción del usuario</td></tr>
    <tr><td>Socket XIAO</td><td>Conector dedicado al módulo XIAO con expansión mediante conectores laterales</td></tr>
    <tr><td>Amplificador Clase D</td><td>Altavoz incorporado</td></tr>
    <tr><th colspan="2">Alimentación e Indicadores</th></tr>
    <tr><td>Fuente de alimentación</td><td>5V por USB Tipo-C</td></tr>
    <tr><td>LED indicador</td><td>LED de color único para estado de energía y retroalimentación al usuario</td></tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/3.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/4.png" style={{width:1000, height:'auto'}}/></div>

## Primeros pasos

Esta sección te guiará en la configuración inicial del XIAO MIDI Synthesizer.

### Uso del firmware de fábrica

El sintetizador viene con un firmware versátil preinstalado que te permite explorar múltiples funciones de sonido y ritmo desde el primer momento. A continuación, una guía rápida de las funciones por defecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/7.png" style={{width:600, height:'auto'}}/></div>

**Funciones detalladas de los botones**

- **Modo de prueba de sonido (modo por defecto):**
  - **🎵0**: Cambia entre 128 sonidos instrumentales predefinidos.
  - **🎵1**: Aumenta el tono de la nota (por ejemplo, de C4 a D4).
  - **🎵2**: Disminuye el tono de la nota (por ejemplo, de C4 a B3).
  - **🎵3**: Inicia/detiene el metrónomo.

- **Modo metrónomo (Beat Keeper):**
  - **🎵0**: (Sin función en este modo)
  - **🎵1**: Aumenta el BPM en 1 paso (solo funciona con metrónomo activo).
  - **🎵2**: Disminuye el BPM en 1 paso.
  - **🎵3**: Inicia/detiene el metrónomo (por defecto: 120 BPM, rango: 40–240 BPM).

- **Modo reproducción multi-pista:**
  - **🎵0**: Reproduce la pista 1
  - **🎵1**: Reproduce la pista 2
  - **🎵2**: Reproduce la pista 3
  - **🎵3**: Reproduce la pista 4

**Funciones de pulsación larga (cualquier modo):**
- **🎵1** (mantener 2s): Subir volumen  
- **🎵2** (mantener 2s): Bajar volumen  
- **🎵3** (mantener 2s): Cambiar al siguiente modo (ciclo: Prueba de sonido → Metrónomo → Multi-pista → ...)

:::tip
Puedes experimentar todas las funciones sin configuración adicional. Para personalización avanzada o reinstalar el firmware, consulta el ejemplo **[StateMachine](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster/blob/main/examples/StateMachine/StateMachine.ino)**.
:::

### Modo BootLoader

A veces, puede que el sintetizador no sea reconocido por el puerto serial o falle la carga de firmware. En ese caso, deberás activar el modo **Bootloader (BOOT)** para poder reinstalar el firmware.

#### ¿Por qué entrar en modo BOOT?

- Para recuperar el dispositivo cuando no se puede programar normalmente
- Para reinstalar el firmware tras una carga fallida o corrupción

#### Cómo entrar en modo BOOT

Abre la tapa trasera del sintetizador para acceder a los botones **BOOT** y **RESET** del módulo XIAO ESP32-C3. Hay dos métodos:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/5.jpg" style={{width:600, height:'auto'}}/></div>

- **Método 1: Secuencia de botones**
  1. Con el dispositivo encendido, mantén presionado **BOOT** (no lo sueltes).
  2. Mientras mantienes presionado **BOOT**, presiona una vez **RESET**.
  3. Suelta el botón **BOOT**.

- **Método 2: Ciclo de energía**
  1. Desconecta la energía (cable USB-C).
  2. Mantén presionado **BOOT**.
  3. Con **BOOT** presionado, vuelve a conectar el USB-C.
  4. Suelta **BOOT**.

Una vez en modo BOOT, el dispositivo estará listo para cargar nuevo firmware desde Arduino IDE u otras herramientas.

### Reset

Para reiniciar el dispositivo, simplemente presiona el botón **RESET** del módulo XIAO ESP32-C3.

## Biblioteca Arduino

:::tip
Si es tu primera vez usando Arduino, te recomendamos seguir esta guía: [Introducción a Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

El XIAO MIDI Synthesizer es compatible con la biblioteca [Seeed_Arduino_MIDIMaster](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster), que ofrece control completo de MIDI y capacidades de síntesis de sonido.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="ttps://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Funciones

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

`static SAM2695Synth& getInstance()`  
Devuelve la instancia singleton de la clase SAM2695Synth.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Referencia al objeto SAM2695Synth singleton

`void begin(T& serial, int baud)`  
Inicializa el sintetizador con la interfaz serial y el baud rate especificados.  
- **Parámetros**:  
  - `T& serial`: Objeto de puerto serial (hardware o software serial) utilizado para comunicación MIDI  
  - `int baud`: Velocidad en baudios (típicamente 31250 para MIDI estándar)  
- **Valor de retorno**: Ninguno

`void setInstrument(uint8_t bank, uint8_t channel, uint8_t value)`  
Establece el instrumento (timbre) para un canal y banco MIDI específicos.  
- **Parámetros**:  
  - `uint8_t bank`: Número de banco (0–127)  
  - `uint8_t channel`: Canal MIDI (0–15)  
  - `uint8_t value`: Número de instrumento (programa) (0–127)  
- **Valor de retorno**: Ninguno

`void setNoteOn(uint8_t channel, uint8_t pitch, uint8_t velocity)`  
Activa una nota en el canal especificado con el tono y la velocidad dados.  
- **Parámetros**:  
  - `uint8_t channel`: Canal MIDI (0–15)  
  - `uint8_t pitch`: Número de nota MIDI (0–127)  
  - `uint8_t velocity`: Velocidad (intensidad) de la nota (0–127)  
- **Valor de retorno**: Ninguno

`void setNoteOff(uint8_t channel, uint8_t pitch)`  
Apaga una nota en el canal especificado para el tono dado.  
- **Parámetros**:  
  - `uint8_t channel`: Canal MIDI (0–15)  
  - `uint8_t pitch`: Número de nota MIDI (0–127)  
- **Valor de retorno**: Ninguno

`void setAllNotesOff(uint8_t channel)`  
Apaga todas las notas que se estén reproduciendo en el canal especificado.  
- **Parámetros**:  
  - `uint8_t channel`: Canal MIDI (0–15)  
- **Valor de retorno**: Ninguno

`void playChord(const musicData& chord)`  
Reproduce un acorde enviando eventos de nota para todas las notas en la estructura.  
- **Parámetros**:  
  - `const musicData& chord`: Estructura con canal, notas, velocidad e información de tiempo  
- **Valor de retorno**: Ninguno

`void setPitch(uint8_t pitch)`  
Establece el tono por defecto para eventos de nota posteriores.  
- **Parámetros**:  
  - `uint8_t pitch`: Nota MIDI (0–127)  
- **Valor de retorno**: Ninguno

`uint8_t getPitch() const`  
Obtiene el valor actual del tono por defecto.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Nota MIDI actual (0–127)

`void setVolume(uint8_t channel, uint8_t level)`  
Establece el volumen para un canal MIDI específico.  
- **Parámetros**:  
  - `uint8_t channel`: Canal MIDI (0–15)  
  - `uint8_t level`: Nivel de volumen (0–127)  
- **Valor de retorno**: Ninguno

`void increasePitch()`  
Aumenta el tono actual por un semitono.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Ninguno

`void decreasePitch()`  
Disminuye el tono actual por un semitono.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Ninguno

`void increaseVelocity()`  
Aumenta la velocidad (volumen) por defecto para los eventos de nota.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Ninguno

`void decreaseVelocity()`  
Disminuye la velocidad (volumen) por defecto para los eventos de nota.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Ninguno

`void increaseBpm()`  
Aumenta el tempo actual (BPM) en un paso predefinido.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Ninguno

`void decreaseBpm()`  
Disminuye el tempo actual (BPM) en un paso predefinido.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Ninguno

`void setBpm(uint8_t bpm)`  
Establece el tempo (BPM) al valor especificado.  
- **Parámetros**:  
  - `uint8_t bpm`: Tempo deseado (40–240)  
- **Valor de retorno**: Ninguno

`uint8_t getBpm() const`  
Obtiene el tempo (BPM) actual.  
- **Parámetros**: Ninguno  
- **Valor de retorno**: Valor actual de BPM

### Variables por defecto

El siguiente código muestra algunos de los valores predefinidos en la librería, así como instrument type, note, etc.

<details>

<summary>Click here to preview the full code</summary>


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


### Instalación

**Paso 1.** Descarga la biblioteca [Seeed_Arduino_MIDIMaster](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster) como un archivo ZIP.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="ttps://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** En el IDE de Arduino, haz clic en **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Ejemplo de Sintetizador MIDI con XIAO

Ahora que ya tenemos la biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para ver cómo se comporta el sintetizador MIDI con XIAO.

**Paso 1.** Abre la aplicación de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong>
      <span>
        <font color="#FFFFFF" size="4">Descarga Arduino IDE</font>
      </span>
    </strong>
  </a>
</div>


**Paso 2.** Selecciona el modelo de tu placa de desarrollo y agrégalo al IDE de Arduino.

- El sintetizador MIDI con XIAO está basado en **XIAO ESP32-C3**, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/)** para completar la configuración.

### Demo 1: Reproducción básica de nota MIDI

Esta demostración muestra cómo reproducir una nota usando el sintetizador MIDI con XIAO.

#### Materiales requeridos

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

#### Programa de referencia

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

> Este código reproducirá la nota E4 en el sintetizador integrado, alternando entre encendido y apagado cada segundo. Puedes cambiar la nota, el instrumento o el tiempo según sea necesario.

#### Anotación del programa

Este código representa la funcionalidad central del **XIAO MIDI Synthesizer**, una solución compacta de síntesis de audio basada en el chip sintetizador **SAM2695**. La implementación de software demuestra cómo el sintetizador se comunica con varias variantes de la plataforma XIAO mediante diferentes métodos de comunicación serial.

El sintetizador MIDI con XIAO es compatible con múltiples plataformas de microcontroladores dentro del ecosistema XIAO, mediante compilación condicional:

- **Placas basadas en AVR**: Utilizan SoftwareSerial para comunicarse con el chip sintetizador
- **RP2040/RP2350 y XIAO RA4M1**: Implementan SoftwareSerial en los pines designados (D7, D6)
- **Variantes ESP32**: Aprovechan la capacidad nativa de Serial por hardware usando Serial0
- **Placas basadas en SAMD** (incluido el XIAO M0): Utilizan la interfaz UART por hardware
- **nRF52840**: Implementan comunicación UART con soporte opcional para TinyUSB

Este enfoque versátil garantiza que el módulo sintetizador funcione de forma consistente en toda la familia de productos XIAO.

La implementación del sintetizador establece dos vías de comunicación:

```cpp
  SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
  synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
```

- Una conexión serial dedicada al chip **SAM2695** para comandos MIDI
- Una conexión serial separada para depuración o interfaz de usuario para monitoreo y control

Durante el inicio, el sintetizador MIDI con XIAO:

1. Establece comunicación serial con la velocidad de baudios adecuada  
2. Inicializa el motor de síntesis SAM2695  
3. Configura el instrumento predeterminado (Piano de Cola) en el Canal 0  

```cpp
  synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
```

4. Espera un breve tiempo para permitir la estabilización

El bucle de demostración muestra la capacidad básica de generación de sonido mediante:

```cpp
void loop()
{
  synth.setNoteOn(CHANNEL_0,NOTE_E4,VELOCITY_DEFAULT);
  delay(1000);
  synth.setNoteOff(CHANNEL_0,NOTE_E4);
  delay(1000);
}
```

1. Activación de la nota E4 con una velocidad estándar  
2. Mantenimiento de la nota durante un segundo  
3. Liberación de la nota  
4. Pausa antes de iniciar el siguiente ciclo  

Esta implementación representa la base sobre la cual se pueden construir aplicaciones musicales más complejas utilizando la plataforma XIAO MIDI Synthesizer, ya sea con fines educativos, prototipado musical o proyectos de audio embebido.

### Demo 2: Secuenciador de Ritmo con Control por Botón

Esta demostración muestra cómo utilizar los botones físicos del sintetizador MIDI con XIAO para controlar un secuenciador de ritmo simple. Puedes iniciar/detener el ritmo y ajustar el tempo en tiempo real usando los botones.

#### Materiales Requeridos

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

#### Código de Referencia

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

> Este código demuestra un secuenciador de ritmo simple. El botón A activa/desactiva el ritmo, el botón B incrementa el tempo (BPM) y el botón C lo disminuye. El secuenciador reproduce un patrón básico de batería utilizando notas MIDI en el Canal 9. Puedes ampliar este ejemplo para agregar ritmos más complejos o funciones adicionales con los botones.

#### Anotación del programa

Este programa amplía la demostración básica de nota MIDI introduciendo interacción en tiempo real mediante botones físicos. El código utiliza tres botones:

- **Botón A**: Inicia/detiene la secuencia de ritmo  
- **Botón B**: Aumenta el tempo (BPM)  
- **Botón C**: Disminuye el tempo (BPM)  

La función `play()` calcula el intervalo entre los beats según el BPM actual y el tipo de nota, y activa sonidos de batería (usando notas MIDI D2 y C2 en el Canal 9) en un patrón repetitivo. El conteo de beats se reinicia en cada compás, creando un efecto simple de metrónomo o caja de ritmos.

Este ejemplo demuestra cómo:

- Integrar entradas de botones para control en tiempo real  
- Ajustar dinámicamente el tempo y el estado de reproducción  
- Usar el sintetizador MIDI con XIAO como generador de ritmo programable  

Puedes mejorar esta demostración agregando más botones, soportando diferentes sonidos de percusión, o implementando una lógica de secuenciador más avanzada.

### Demo 3: Reproducción de Acordes Multitrack con Control por Botones

Esta demostración muestra cómo usar el sintetizador MIDI con XIAO para reproducir acordes en múltiples pistas, con cada acorde activado mediante un botón. Puedes iniciar/detener de forma independiente dos patrones de acordes diferentes usando dos botones físicos.

#### Materiales necesarios

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

#### Programa de referencia

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

> Este código demuestra cómo activar dos acordes diferentes de múltiples notas utilizando dos botones. El botón A activa/desactiva la reproducción de un acorde de dos notas, y el botón B hace lo mismo con un acorde de cuatro notas. Cada acorde se reproduce en un canal MIDI diferente y con su propio temporizador.

#### Anotación del programa

Este programa demuestra la reproducción de acordes en múltiples pistas con control en tiempo real mediante botones. El código define dos patrones de acordes (`chordTwoNotes` y `chordFourNotes`), cada uno con su propio canal MIDI, conjunto de notas y temporización. Se utilizan dos botones:

- **Botón A**: Inicia/detiene la secuencia del acorde de dos notas  
- **Botón B**: Inicia/detiene la secuencia del acorde de cuatro notas  

La función `play()` verifica el temporizador de cada acorde y activa su reproducción si el indicador correspondiente está habilitado. Esto permite la reproducción independiente y superpuesta de diferentes patrones de acordes, simulando un secuenciador de múltiples pistas simple.

Este ejemplo demuestra cómo:

- Definir y reproducir estructuras de acordes personalizadas  
- Usar múltiples botones para un control musical independiente  
- Construir interpretaciones musicales complejas y en capas con el sintetizador MIDI con XIAO  

Puedes ampliar esta demostración añadiendo más patrones de acordes, admitiendo botones adicionales o sincronizando la reproducción para lograr efectos musicales más avanzados.

### Demo 4: Reproducción de una Secuencia de Melodía Completa

Esta demostración muestra cómo usar el sintetizador MIDI con XIAO para reproducir una secuencia de melodía completa (como una canción) almacenando datos de nota, duración y retardo en un arreglo. El ejemplo muestra cómo reproducir una melodía preprogramada utilizando el instrumento incorporado de Violín.

#### Materiales necesarios

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

#### Programa de referencia

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

> Este código demuestra cómo reproducir una secuencia completa de melodía iterando a través de un arreglo grande de notas, duraciones y retardos. La melodía se reproducirá una vez al encender o reiniciar el dispositivo. Puedes modificar el arreglo para tocar diferentes canciones o agregar arreglos más complejos.

#### Anotación del programa

Este programa demuestra cómo:

- Almacenar una melodía completa como un arreglo de valores de nota, duración y retardo  
- Usar una función auxiliar (`playMidi`) para recorrer la melodía y reproducir cada nota en secuencia  
- Seleccionar un instrumento específico (Violín) para la reproducción  
- Reproducir una canción automáticamente al iniciar  

Puedes ampliar esta demostración:

- Cambiando el instrumento o los datos de nota para tocar diferentes canciones  
- Agregando controles con botones para iniciar/detener o repetir la reproducción  
- Implementando reproducción multipista o polifónica para efectos musicales más avanzados  

:::tip
Para quienes deseen convertir archivos MIDI a código Arduino, pueden probar herramientas como [Midi2ArduinoTone](https://tawsiftorabi.github.io/Midi2ArduinoTone/). Sin embargo, ten en cuenta que los valores de nota generados por estas herramientas podrían requerir ajustes para funcionar con el sintetizador MIDI con XIAO, ya que usan diferentes mapeos de notas. Aun así, estas herramientas pueden ser útiles como punto de partida para convertir archivos MIDI a un formato adaptable a este sintetizador.
:::

## Recursos

- **[PDF]** [Esquemático del sintetizador MIDI con XIAO (SCH)](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/202004281_XIAO_MIDI_Synthesizer_v1.0_SCH&PDF_250421.pdf)  
- **[ZIP]** [Esquemático y PCB del sintetizador MIDI con XIAO](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/202004281_XIAO_MIDI_Synthesizer_v1.0_SCH&PCB_050421.zip)  
- **[GitHub]** [Librería Seeed_Arduino_MIDIMaster](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster)

## Solución de problemas

### P1: ¿Cómo puedo convertir un archivo MIDI a código Arduino para el sintetizador MIDI con XIAO?

Para convertir un archivo MIDI en código compatible con el sintetizador MIDI con XIAO, sigue estos pasos:

1. **Obtener un archivo MIDI**

   Puedes descargar archivos MIDI gratuitos desde los siguientes sitios:

   - [The Wild West MIDIs](https://thewildwestmidis.github.io/?search=animals)  
   - [LibreScore MIDI Library](https://github.com/LibreScore/app-librescore?tab=readme-ov-file#installation)

2. **Convertir el archivo MIDI a texto**

   Utiliza la herramienta de código abierto [midicomp](https://github.com/markc/midicomp) para convertir tu archivo MIDI a un formato de texto legible.

3. **Convertir el texto MIDI a código reproducible**

   Luego de convertir tu archivo MIDI a texto usando `midicomp`, necesitas procesar ese texto para obtener un arreglo C/C++ que pueda ser interpretado por el sintetizador MIDI con XIAO. Seeed proporciona scripts en Python para automatizar esta conversión:

   - **Ritmo rápido, pista única (inicio de nota como intervalo):**  
     [change_fast.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_fast.py)  
   - **Ritmo lento, pista única (final de nota como intervalo):**  
     [change_shuqing.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_shuqing.py)  
   - **Procesamiento multipista:**  
     [change_mutich.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_mutich.py)

   **Ejemplo de uso:**

   1. Coloca tu archivo de texto MIDI (por ejemplo, `1.txt`) en el mismo directorio que el script.  
   2. Ejecuta el script desde tu terminal:
    ```sh
    python change_fast.py
    ```
    Esto generará un archivo de encabezado (por ejemplo `track_from_miditext.h`) con el arreglo de notas.

    3. Copia el arreglo generado en tu sketch de Arduino, reemplazando los datos de la melodía.

    :::tip
    - Los scripts convierten automáticamente los números de nota MIDI al formato compatible con el sintetizador MIDI con XIAO.
    - Puedes ajustar el script o el arreglo generado para crear arreglos personalizados o adaptarlos a limitaciones de memoria.
    :::

    4. Integrar el código generado

    - Abre el archivo `.h` generado y copia el arreglo `musicData`.
    - Pégalo en tu proyecto de Arduino, reemplazando el arreglo de melodía existente.
    - Ajusta la lógica de reproducción si es necesario para adaptarse a la nueva estructura del arreglo.



## Soporte técnico y discusión de producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte asistencia y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

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



