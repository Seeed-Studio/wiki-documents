---
description: Controle o volume de reprodução do reSpeaker XVF3800 44mm a partir do XIAO ESP32-S3 Plus escrevendo nos registradores de DAC e de saída analógica do AIC3104 via I2C, com um tom de teste de 440 Hz para ouvir a mudança.
title: Controle de volume do reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - AIC3104
  - controle de volume
  - xvf3800
  - I2C
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_volume_control
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_volume_control/
---
# Controle de volume do reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus

Este sketch faz o XIAO ESP32-S3 Plus reproduzir um tom gerado de **440 Hz** por meio do codec **AIC3104** integrado via I2S e, em seguida, ajusta o volume digitando `+` ou `-` no Serial Monitor. Ao digitar `m`, a saída é alternada entre fones de ouvido (`HPLOUT`/`HPROUT`) e line out (`LOP`), e o codec é totalmente configurado via I2C. O tom é sintetizado em código, portanto nenhum arquivo de áudio é necessário.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Pré-requisitos

- O array deve estar executando o **firmware I2S**, porque o XVF3800 fornece os clocks I2S. Consulte [Update Firmware](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#atualizar-firmware).
- Arduino IDE com o pacote de placas ESP32 e a biblioteca **Arduino Audio Tools**. Consulte [Software Preparation](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_getting_started/#preparação-de-software).
- Placa selecionada como **XIAO_ESP32S3_Plus**, e o número da porta precisa ser selecionado.
- Um alto-falante no conector JST ou fones de ouvido no conector de 3,5 mm.



:::note
O AIC3104 compartilha o barramento I2C com o XVF3800. O firmware XMOS e os botões de volume integrados podem escrever nos mesmos registradores, portanto um nível definido a partir do XIAO pode ser substituído depois.
:::

## Mapeamento de volume

O sketch expõe uma escala de volume de 0–17, dividida entre atenuação digital e ganho analógico:

| Volume | Resultado |
|--------|----------|
| `0` | −8 dB (atenuação do DAC) |
| `8` | 0 dB (referência, DAC em escala total) |
| `9` … `17` | +1 dB … +9 dB de ganho de saída analógica |

De 0 a 8 o DAC é atenuado em **passos de 0,5 dB** (`(8 − volume) × 2`). De 9 a 17 o DAC permanece em 0 dB e o estágio de saída analógica é amplificado em `volume − 8` dB.

## Mapa de registradores

| Registrador | Endereço | Finalidade |
|------------|----------|-----------|
| Page control | `0x00` | Seleciona a página de registradores 0 |
| Left DAC volume | `0x2B` | Atenuação digital, 0,5 dB por passo |
| Right DAC volume | `0x2C` | Atenuação digital, 0,5 dB por passo |
| HPLOUT level | `0x33` | Saída de fone de ouvido esquerda |
| HPROUT level | `0x41` | Saída de fone de ouvido direita |
| LEFT_LOP level | `0x56` | Line-out esquerda |
| RIGHT_LOP level | `0x5D` | Line-out direita |

Bits do registrador de saída: **D7–D4** = ganho analógico (`0`–`9` dB), **D3** = desmutar, **D0** = ligar. Os registradores de fone de ouvido também definem **D2** (alta impedância quando desligados), razão pela qual eles usam `0x0D` como o nibble baixo fixo e os registradores de line-out usam `0x09`.

## Como funciona

1. `setup()` inicia o I2C a 100 kHz e escreve no registrador de controle de página do AIC3104, depois define ambos os canais do DAC para 0 dB e desmuta/ativa as saídas de fone de ouvido e line-out em 0 dB.
2. `setVolume()` divide o nível solicitado em um valor de atenuação do DAC e um valor de ganho analógico, escreve em todos os quatro registradores de saída e lê o registrador do DAC esquerdo de volta para confirmação.
3. O I2S é iniciado em `TX_MODE` a 48 kHz, estéreo, 32 bits, com o XIAO como escravo para que o XVF3800 gere BCLK e LRCLK.
4. Um `SineWaveGenerator` produz o tom de 440 Hz a 25 % da escala total de 32 bits, encapsulado em um `GeneratedSoundStream` e copiado para o I2S por `StreamCopy`.
5. `loop()` mantém o tom tocando e atende comandos de um caractere vindos do Serial Monitor.

## Comandos seriais

| Tecla | Ação |
|-------|------|
| `+` | Aumenta o volume (até 17) |
| `-` | Diminui o volume (até 0) |
| `m` | Alterna entre saída de fone de ouvido e line-out |
| `v` | Imprime o volume atual |
| `h` | Mostra a lista de comandos |

## Código

```c
#include <Wire.h>
#include "AudioTools.h"

// =====================================================
// AIC3104 I2C CONFIGURATION
// =====================================================

#define AIC3104_ADDR 0x18

#define I2C_SDA_PIN 5
#define I2C_SCL_PIN 6

// Register addresses
#define AIC3104_PAGE_CTRL         0x00

#define AIC3104_LEFT_DAC_VOLUME   0x2B
#define AIC3104_RIGHT_DAC_VOLUME  0x2C

#define AIC3104_HPLOUT_LEVEL      0x33
#define AIC3104_HPROUT_LEVEL      0x41

#define AIC3104_LEFT_LOP_LEVEL    0x56
#define AIC3104_RIGHT_LOP_LEVEL   0x5D


// =====================================================
// I2S CONFIGURATION
// =====================================================

#define SAMPLE_RATE 48000
#define CHANNELS    2
#define BITS        32

AudioInfo info(SAMPLE_RATE, CHANNELS, BITS);

// 440Hz sine wave, 25% of 32-bit full scale
SineWaveGenerator<int32_t> sineWave(0x20000000);

GeneratedSoundStream<int32_t> sound(sineWave);

I2SStream out;
StreamCopy copier(out, sound);


// =====================================================
// VOLUME CONFIGURATION
// =====================================================

// Volume: 0 to 17
// 0  = -8dB
// 8  =  0dB
// 17 = +9dB

int volume = 8;

// true  = HPLOUT / HPROUT
// false = LEFT_LOP / RIGHT_LOP

bool useHPOUT = true;


// =====================================================
// AIC3104 REGISTER WRITE
// =====================================================

bool aic3104_reg_write(uint8_t reg, uint8_t val) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);
    Wire.write(val);

    uint8_t error = Wire.endTransmission();

    if (error != 0) {

        Serial.printf(
            "I2C WRITE ERROR: Register 0x%02X, Error %u\n",
            reg,
            error
        );

        return false;
    }

    return true;
}


// =====================================================
// AIC3104 REGISTER READ
// =====================================================

bool aic3104_reg_read(uint8_t reg, uint8_t &value) {

    Wire.beginTransmission(AIC3104_ADDR);

    Wire.write(reg);

    if (Wire.endTransmission(false) != 0) {
        return false;
    }

    if (Wire.requestFrom(
            (uint8_t)AIC3104_ADDR,
            (uint8_t)1
        ) != 1) {

        return false;
    }

    value = Wire.read();

    return true;
}


// =====================================================
// INITIALIZE AIC3104
// =====================================================

bool setupAIC3104() {

    Serial.println("\nInitializing AIC3104...");

    // Select register page 0
    if (!aic3104_reg_write(AIC3104_PAGE_CTRL, 0x00)) {
        return false;
    }

    // DAC digital volume: 0dB, unmuted
    if (!aic3104_reg_write(AIC3104_LEFT_DAC_VOLUME, 0x00))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_DAC_VOLUME, 0x00))
        return false;

    // HPLOUT / HPROUT:
    // 0dB, unmuted, powered up
    if (!aic3104_reg_write(AIC3104_HPLOUT_LEVEL, 0x0D))
        return false;

    if (!aic3104_reg_write(AIC3104_HPROUT_LEVEL, 0x0D))
        return false;

    // LEFT_LOP / RIGHT_LOP:
    // 0dB, unmuted, powered up
    // Bit 2 is reserved; write it as zero.
    if (!aic3104_reg_write(AIC3104_LEFT_LOP_LEVEL, 0x09))
        return false;

    if (!aic3104_reg_write(AIC3104_RIGHT_LOP_LEVEL, 0x09))
        return false;

    Serial.println("AIC3104 initialized successfully");

    return true;
}


// =====================================================
// SET OUTPUT ANALOG GAIN
// =====================================================

bool setOutputGain(uint8_t gain) {

    gain = constrain(gain, 0, 9);

    // Reset inactive output to 0dB.
    // Keep active output at requested gain.

    uint8_t hpGain =
        useHPOUT ? gain : 0;

    uint8_t lopGain =
        useHPOUT ? 0 : gain;

    // HP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 1 (high impedance when powered down)
    // D0 = 1 (powered up)

    uint8_t hpValue =
        (hpGain << 4) | 0x0D;

    // LOP registers:
    // D7-D4 = 0 to +9dB
    // D3 = 1 (unmuted)
    // D2 = 0 (reserved)
    // D0 = 1 (powered up)

    uint8_t lopValue =
        (lopGain << 4) | 0x09;

    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_HPLOUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_HPROUT_LEVEL,
        hpValue
    );

    ok &= aic3104_reg_write(
        AIC3104_LEFT_LOP_LEVEL,
        lopValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_LOP_LEVEL,
        lopValue
    );

    return ok;
}


// =====================================================
// SET VOLUME
// =====================================================

void setVolume(int vol) {

    vol = constrain(vol, 0, 17);

    volume = vol;

    uint8_t dacValue;
    uint8_t analogGain;

    if (vol <= 8) {

        // DAC attenuation:
        // Volume 0 = -8dB
        // Volume 8 =  0dB

        int attenuationDB = 8 - vol;

        // AIC3104 DAC step = 0.5dB
        dacValue = attenuationDB * 2;

        analogGain = 0;

    } else {

        // DAC at 0dB
        dacValue = 0;

        // Analog boost: +1dB to +9dB
        analogGain = vol - 8;
    }

    // Update left and right DAC
    bool ok = true;

    ok &= aic3104_reg_write(
        AIC3104_LEFT_DAC_VOLUME,
        dacValue
    );

    ok &= aic3104_reg_write(
        AIC3104_RIGHT_DAC_VOLUME,
        dacValue
    );

    // Update analog output gain
    ok &= setOutputGain(analogGain);

    if (!ok) {

        Serial.println("Volume update failed!");
        return;
    }

    // Debug output

    Serial.println("\n------------------------------");

    Serial.printf(
        "Volume level: %d / 17\n",
        volume
    );

    if (vol <= 8) {

        Serial.printf(
            "DAC attenuation: -%d dB\n",
            8 - vol
        );

    } else {

        Serial.printf(
            "Analog output gain: +%d dB\n",
            analogGain
        );
    }

    Serial.printf(
        "Output mode: %s\n",
        useHPOUT ? "HPLOUT" : "LINE OUT"
    );

    Serial.printf(
        "DAC register: 0x%02X\n",
        dacValue
    );

    uint8_t readValue;

    if (aic3104_reg_read(
            AIC3104_LEFT_DAC_VOLUME,
            readValue
        )) {

        Serial.printf(
            "DAC readback: 0x%02X\n",
            readValue
        );
    }

    Serial.println("------------------------------");
}


// =====================================================
// SERIAL CONTROL
// =====================================================

void handleSerial() {

    while (Serial.available()) {

        char c = Serial.read();

        if (c == '+') {

            if (volume < 17) {
                setVolume(volume + 1);
            } else {
                Serial.println("Maximum volume reached");
            }

        } else if (c == '-') {

            if (volume > 0) {
                setVolume(volume - 1);
            } else {
                Serial.println("Minimum volume reached");
            }

        } else if (c == 'm' || c == 'M') {

            useHPOUT = !useHPOUT;

            setVolume(volume);

        } else if (c == 'v' || c == 'V') {

            Serial.printf(
                "Current volume: %d / 17\n",
                volume
            );

        } else if (c == 'h' || c == 'H') {

            Serial.println("\nCommands:");
            Serial.println("+ : Increase volume");
            Serial.println("- : Decrease volume");
            Serial.println("m : Switch HP / LINE output");
            Serial.println("v : Show current volume");
            Serial.println("h : Show help");
        }
    }
}


// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);

    while (!Serial);

    Serial.println("\n================================");
    Serial.println("ReSpeaker 44mm Volume Test");
    Serial.println("XVF3800 + AIC3104");
    Serial.println("================================");

    // Initialize I2C
    Wire.begin(
        I2C_SDA_PIN,
        I2C_SCL_PIN
    );

    Wire.setClock(100000);

    delay(100);

    Serial.println("I2C initialized");

    // Initialize AIC3104
    if (!setupAIC3104()) {

        Serial.println("AIC3104 initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Set starting volume
    setVolume(volume);

    // Initialize I2S output
    auto config = out.defaultConfig(TX_MODE);

    config.copyFrom(info);

    config.pin_bck = 8;     // D9 / GPIO8
    config.pin_ws = 7;      // D8 / GPIO7
    config.pin_data = 44;   // D7 / GPIO44

    // XVF3800 provides I2S clocks
    config.is_master = false;

    if (!out.begin(config)) {

        Serial.println("I2S initialization FAILED!");

        while (true) {
            delay(1000);
        }
    }

    // Start 440Hz sine wave
    sineWave.begin(info, N_A4);

    Serial.println("\nI2S started");
    Serial.println("440Hz test tone playing");

    Serial.println("\nVolume control ready:");
    Serial.println("+ : Increase volume");
    Serial.println("- : Decrease volume");
    Serial.println("m : Switch HP / LINE output");
    Serial.println("v : Show current volume");
    Serial.println("h : Show help");
}


// =====================================================
// LOOP
// =====================================================

void loop() {

    // Continuously transmit 440Hz test tone
    copier.copy();

    // Check serial commands
    handleSerial();
}
```

## Saída esperada

```text
================================
ReSpeaker 44mm Volume Test
XVF3800 + AIC3104
================================
I2C initialized

Initializing AIC3104...
AIC3104 initialized successfully

------------------------------
Volume level: 8 / 17
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------

I2S started
440Hz test tone playing

Volume control ready:
+ : Increase volume
- : Decrease volume
m : Switch HP / LINE output
v : Show current volume
h : Show help
```

Envie `+` para aumentar um nível. Acima do nível 8 o log muda para `Analog output gain: +N dB`:

```text
------------------------------
Volume level: 10 / 17
Analog output gain: +2 dB
Output mode: HPLOUT
DAC register: 0x00
DAC readback: 0x00
------------------------------
```

## Solução de problemas

### `I2C WRITE ERROR: Register 0x.., Error 2`

O AIC3104 não está reconhecendo em `0x18`. Verifique SDA em D4 (GPIO5) e SCL em D5 (GPIO6), confirme que o firmware I2S está em execução e desligue e ligue novamente a placa.

### `AIC3104 initialization FAILED!`

O codec não aceitou a escrita de seleção de página. Normalmente o barramento I2C está sendo mantido por outro mestre ou a placa ainda está inicializando — adicione um pequeno atraso antes de `setupAIC3104()` e tente novamente.

### Sem tom, mas o log serial parece correto

- Confirme se um alto-falante ou fones de ouvido estão conectados à saída JST / 3,5 mm.
- O tom de 440 Hz é gerado a 25 % da escala total, portanto é intencionalmente baixo no nível 8.
- Pressione `m` para testar o outro caminho de saída (fones de ouvido vs line out).

### O volume continua voltando depois de alguns segundos

O firmware do XVF3800 ou os botões `+`/`-` na placa escrevem nos mesmos registradores do AIC3104. Defina o nível a partir do XIAO sem tocar nos botões ou mantenha o codec apenas sob controle do XIAO.

### Um clique ou estalo ao alternar com `m`

Ambos os estágios de saída são reescritos a cada mudança. Isso é esperado no AIC3104; abaixe o volume antes de alternar para reduzi-lo.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
