---
description: O ReSpeaker XVF3800 USB 4-Mic Array é uma matriz de microfones circular profissional com AEC, formação de feixe, supressão de ruído e captura de voz em 360°. Emparelhado com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra integração perfeita e flexibilidade de modo duplo.
title: Usando comandos I2C para controlar o reSpeaker XVF3800 USB Mic Array com XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_i2c_list
sku: 114993702,114993700
last_update:
  date: 8/24/2026
  author: Kunpeng Wang
createdAt: '2026-08-21'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf_3800_i2c_list/
---

## Introdução 

Esta seção fornece a lista de comandos de controle I2C para o ReSpeaker XVF3800, juntamente com exemplos de leitura/gravação I2C e diagramas de caminho de sinal de hardware para os dois modos de operação. Para um exemplo de aplicação de controle do ReSpeaker XVF3800 via interface I2C, consulte a seção [Device Control](/pt-br/respeaker_xvf3800_xiao_rgb).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>


## Diagrama do caminho de sinal de hardware do reSpeaker

### Caminho de sinal em modo I2S

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-I2S.png" alt="pir" width={800} height="auto" /></p>

#### Caminho de gravação
Os microfones capturam dados brutos, que são processados pelos módulos de algoritmo. Os dados processados são então lidos pelo controlador host via interface I2S.

#### Caminho de reprodução
No modo I2S, o caminho de reprodução de áudio é dividido em duas rotas: Host → XVF3800 → DAC e Host → DAC.

##### 1. Host → XVF3800 → DAC

O controlador host envia dados de áudio para o XVF3800 via interface I2S. Os dados são processados pelo bloco Optional Far DSP e então retransmitidos para o DAC para reprodução via barramento I2S.

:::note
Para um exemplo de aplicação de reprodução por este caminho, consulte a seção [reSpeaker XVF3800 Record and Playback Audio Using I2S](/pt-br/respeaker_xvf3800_xiao_record_playback).
:::

##### 2. Host → DAC

O controlador host envia dados de áudio diretamente para o DAC para reprodução via interface I2S, ignorando o XVF3800.

:::note
Para um exemplo de aplicação de reprodução por este caminho, consulte a seção [reSpeaker XVF3800 Audio Playback and Volume Control via I2C](/pt-br/respeaker_xvf3800_xiao_volume).
:::

#### Caminho de controle
O caminho de controle, assim como o caminho de reprodução, é dividido em duas rotas:

##### 1. Host → XVF3800 → DAC

- **Comunicação Host ↔ XVF3800:** O host atua como I2C Master e o XVF3800 atua como I2C Slave. O host usa I2C para configurar o Optional Far DSP, Optional PP, GPIO e outros blocos do XVF3800.
- **Comunicação XVF3800 ↔ DAC:** O XVF3800 atua como I2C Master e o DAC atua como I2C Slave. O XVF3800 controla a reprodução do DAC via I2C.

##### 2. Host → DAC

O host se comunica diretamente com o DAC. O host usa I2C para controlar diretamente o DAC para reprodução de áudio e controle de volume.

### Caminho de sinal em modo USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-USB.png" alt="pir" width={800} height="auto" /></p>

No modo USB, há apenas um caminho de dados: Host → XVF3800 → DAC, que é dividido em dois segmentos: Host → XVF3800 e XVF3800 → DAC.

- **Host ↔ XVF3800:** A comunicação é via USB. Tanto os dados de áudio (os dados brutos capturados pelos microfones, que são processados pelos módulos de algoritmo) quanto os dados de controle (para configurar o Optional Far DSP, Optional PP, GPIO e outros blocos do XVF3800) são transmitidos via USB.

- **XVF3800 ↔ DAC:** A comunicação é via I2C e I2S. O XVF3800 atua como I2C Master e I2S Master para controlar o DAC para reprodução de áudio.

:::note
Para um exemplo de aplicação de reprodução por este caminho, consulte a seção [reSpeaker XVF3800 Control with Python](/pt-br/respeaker_xvf3800_python_sdk).
:::

## Formato de quadro I2C

### Operação de escrita

```
[resid] [cmd] [write_byte_num] [data...]
```

| Field | Description |
|-------|-------------|
| `resid` | ID do recurso |
| `cmd` | ID do comando |
| `write_byte_num` | Número de bytes de dados a serem escritos |
| `data...` | Bytes de dados a serem escritos |

### Operação de leitura (primeiro escreve o comando, depois lê a resposta):

```
Step 1 (Write): [resid] [cmd | 0x80] [read_len + 1]
Step 2 (Read):  [status] [data...]
```

| Field | Description |
|-------|-------------|
| `cmd\|0x80` | ID do comando com o MSB definido como 1, indicando uma operação de leitura |
| `read_len + 1` | Número esperado de bytes a serem lidos (+1 para o byte de status) |
| `status` | Byte de status da resposta (`0` = sucesso, `64` = tentar novamente) |
| `data...` | Bytes de dados retornados |

:::note
Para a lista detalhada de comandos I2C, consulte a seção [I2C Command List](#i2c-command-list).
:::

## Exemplo de leitura e escrita com Arduino
```cpp
#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address
```
### Escrita

```cpp
void xmos_write_bytes(uint8_t resid, uint8_t cmd, uint8_t *value, uint8_t write_byte_num) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(write_byte_num);
  for (uint8_t i = 0; i < write_byte_num; i++) {
    Wire.write(value[i]);
  }
  Wire.endTransmission();
}
```

### Leitura

```cpp
bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);
  Wire.write(read_len + 1);  // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}
```

### Exemplo de leitura da versão do firmware

```cpp
#include <Wire.h>

#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address

#define APPLICATION_SERVICER_RESID 48  // ResID = 48 (Application Servicer)
#define VERSION_CMD              0     // CmdID = 0 (VERSION)
#define VERSION_NUM_BYTES        3     // 3 bytes: MAJOR, MINOR, PATCH

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 Firmware Version Read Test Starting...");
}

void loop() {
  uint8_t version[VERSION_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  // Read 3 bytes: [MAJOR] [MINOR] [PATCH]
  bool success = xmos_read_bytes(APPLICATION_SERVICER_RESID, VERSION_CMD,
                                 version, VERSION_NUM_BYTES, &status);

  if (success && status == 0) {
    Serial.print("Firmware Version: v");
    Serial.print(version[0]);  // MAJOR
    Serial.print(".");
    Serial.print(version[1]);  // MINOR
    Serial.print(".");
    Serial.println(version[2]);  // PATCH
    Serial.print("  (Status byte: 0x");
    Serial.print(status, HEX);
    Serial.println(")");
  } else {
    Serial.print("Read failed. Status byte: 0x");
    Serial.println(status, HEX);
  }

  delay(2000);
}

bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);        
  Wire.write(read_len + 1);      // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```

**Saída esperada**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/read-version.png" alt="pir" width={800} height="auto" /></p>

:::note
Para um exemplo de aplicação de controle do ReSpeaker XVF3800 via interface I2C, consulte a seção [Device Control](/pt-br/respeaker_xvf3800_xiao_rgb).
:::

## Lista de comandos I2C

### Lista de ResID

| Servicer Name | ResID | Hex | Description |
|---------------|------|------|-------------|
| PP Servicer (Pós-processamento) | 17 | 0x11 | AGC, limitador, supressão de ruído, supressão de eco |
| GPO Servicer (GPIO/LED/DOA) | 20 | 0x14 | Leitura/gravação de GPO, efeito/cor/velocidade/brilho de LED, DOA |
| AEC Servicer (Acoustic Echo Cancellation) | 33 | 0x21 | Filtro AEC, feixe, azimute, RT60 |
| Gerenciador de áudio | 35 | 0x23 | Ganho, I2S, seleção de canal, roteamento de saída |
| Application Servicer (Sistema) | 48 | 0x30 | Versão, reinicialização, salvamento de configuração, profundidade de bits USB |

### Lista de CmdID

#### ResID = 48 — Application Servicer (Controle do sistema)

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| VERSION | 0 | ro | uint8 | 3 | 3 | Versão do firmware (MAJOR, MINOR, PATCH) |
| BLD_MSG | 1 | ro | char | 50 | 50 | Mensagem de build (nome da configuração de build) |
| BLD_HOST | 2 | ro | char | 30 | 30 | Informações do host de build de CI |
| BLD_REPO_HASH | 3 | ro | char | 40 | 40 | Hash do GIT |
| BLD_MODIFIED | 4 | ro | char | 6 | 6 | Indica se o firmware foi modificado |
| BOOT_STATUS | 5 | ro | char | 3 | 3 | Modo de boot (SPI/JTAG/FLASH) |
| TEST_CORE_BURN | 6 | rw | uint8 | 1 | 1 | Teste de estresse do core (reinicia o chip) |
| REBOOT | 7 | wo | uint8 | 1 | 1 | Reinicia o chip, restaura parâmetros padrão |
| USB_BIT_DEPTH | 8 | rw | uint8 | 2 | 2 | Profundidade de bits USB (16/24/32), apenas modo USB |
| SAVE_CONFIGURATION | 9 | wo | uint8 | 1 | 1 | Salva a configuração atual na flash |
| CLEAR_CONFIGURATION | 10 | wo | uint8 | 1 | 1 | Limpa a configuração, restaura padrões |
| AIC3104_HP_LEVEL | 11 | rw | uint8 | 1 | 1 | Nível de saída de fone de ouvido [0..9] |
| AIC3104_LINEOUT_LEVEL | 12 | rw | uint8 | 1 | 1 | Nível de saída de linha [0..9] |

---

#### ResID = 20 — GPO Servicer (Controle de GPIO e LED)

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| GPO_READ_VALUES | 0 | ro | uint8 | 5 | 5 | Lê todos os níveis dos pinos GPO |
| GPO_WRITE_VALUE | 1 | wo | uint8 | 2 | 2 | Define o nível do pino GPO especificado |
| GPO_PORT_PIN_INDEX | 2 | rw | uint32 | 2 | 8 | Índice de porta/pino GPO |
| GPO_PIN_VAL | 3 | wo | uint8 | 3 | 3 | Escreve o valor do pino de porta especificado |
| GPO_PIN_ACTIVE_LEVEL | 4 | rw | uint32 | 1 | 4 | Nível ativo (1=alto, 0=baixo) |
| LED_EFFECT | 12 | rw | uint8 | 1 | 1 | Efeito de LED (0=off 1=breathing 2=rainbow 3=solid 4=DOA 5=ring) |
| LED_BRIGHTNESS | 13 | rw | uint8 | 1 | 1 | Brilho do LED |
| LED_GAMMIFY | 14 | rw | uint8 | 1 | 1 | Correção de gama (0=off 1=on) |
| LED_SPEED | 15 | rw | uint8 | 1 | 1 | Velocidade do LED |
| LED_COLOR | 16 | rw | uint32 | 1 | 4 | Cor do LED (RGB) |
| LED_DOA_COLOR | 17 | rw | uint32 | 2 | 8 | Cor em modo DOA (cor base + cor DOA) |
| DOA_VALUE | 18 | ro | uint16 | 2 | 4 | Ângulo DOA (0-359) + flag de detecção de voz |
| LED_RING_COLOR | 19 | rw | uint32 | 12 | 48 | Cor por LED no modo anel |

---

#### ResID = 33 — AEC Servicer (Cancelamento de Eco Acústico)

| Nome | CmdID | Direção | Tipo de dado | Valores | Bytes | Descrição |
|------|-------|-----------|-----------|--------|-------|-------------|
| AEC_AECPATHCHANGE | 0 | ro | int32 | 1 | 4 | Detecção de mudança de caminho do AEC (0,1) |
| AEC_HPFONOFF | 1 | rw | int32 | 1 | 4 | Filtro passa‑alta (0=desligado 1=70Hz 2=125Hz 3=150Hz 4=180Hz) |
| AEC_AECSILENCELEVEL | 2 | rw | float | 2 | 8 | Limite de silêncio [0.0..1.0] |
| AEC_AECCONVERGED | 3 | ro | int32 | 1 | 4 | AEC convergiu (0,1) |
| AEC_AECEMPHASISONOFF | 4 | rw | int32 | 1 | 4 | Pré/de‑ênfase (0=desligado 1=ligado 2=ligado_eq) |
| AEC_FAR_EXTGAIN | 5 | rw | float | 1 | 4 | Ganho externo de extremidade distante (dB) |
| AEC_PCD_COUPLINGI | 6 | rw | float | 1 | 4 | Sensibilidade PCD [0.0..1.0] |
| AEC_PCD_MINTHR | 7 | rw | float | 1 | 4 | Limite mínimo de PCD [0.0..0.02] |
| AEC_PCD_MAXTHR | 8 | rw | float | 1 | 4 | Limite máximo de PCD [0.025..0.2] |
| AEC_RT60 | 9 | ro | float | 1 | 4 | Estimativa de reverberação RT60 [0.250..0.900] s |
| AEC_ASROUTONOFF | 35 | rw | int32 | 1 | 4 | Chave de saída ASR (0=residual 1=processado por ASR) |
| AEC_ASROUTGAIN | 36 | rw | float | 1 | 4 | Ganho de saída ASR [0.0..1000.0] |
| AEC_FIXEDBEAMSONOFF | 37 | rw | int32 | 1 | 4 | Chave do modo de feixe fixo (0,1) |
| AEC_FIXEDBEAMNOISETHR | 38 | rw | float | 2 | 8 | Limite de ruído de feixe fixo [0.0..1.0] |
| SHF_BYPASS | 70 | rw | uint8 | 1 | 1 | Bypass de AEC |
| AEC_NUM_MICS | 71 | ro | int32 | 1 | 4 | Número de microfones |
| AEC_NUM_FARENDS | 72 | ro | int32 | 1 | 4 | Número de referências de extremidade distante |
| AEC_MIC_ARRAY_TYPE | 73 | ro | int32 | 1 | 4 | Tipo de matriz de microfones (1=linear 2=quadrada) |
| AEC_MIC_ARRAY_GEO | 74 | ro | float | 12 | 48 | Geometria da matriz de microfones (coordenadas 3D XYZ) |
| AEC_AZIMUTH_VALUES | 75 | ro | radians | 4 | 16 | Azimute (feixe1/2/livre/auto) |
| TEST_AEC_DISABLE_CONTROL | 76 | wo | uint32 | 1 | 4 | Desativar controle de AEC (apenas teste) |
| AEC_CURRENT_IDLE_TIME | 77 | ro | uint32 | 1 | 4 | Tempo ocioso atual (tick de 10ns) |
| AEC_MIN_IDLE_TIME | 78 | ro | uint32 | 1 | 4 | Tempo ocioso mínimo (tick de 10ns) |
| AEC_RESET_MIN_IDLE_TIME | 79 | wo | uint32 | 1 | 4 | Redefinir tempo ocioso mínimo |
| AEC_SPENERGY_VALUES | 80 | ro | float | 4 | 16 | Energia de fala (feixe1/2/livre/auto) |
| AEC_FIXEDBEAMSAZIMUTH_VALUES | 81 | rw | radians | 2 | 8 | Azimute de feixe fixo |
| AEC_FIXEDBEAMSELEVATION_VALUES | 82 | rw | radians | 2 | 8 | Elevação de feixe fixo |
| AEC_FIXEDBEAMSGATING | 83 | rw | uint8 | 1 | 1 | Chave de gating de feixe fixo |
| SPECIAL_CMD_AEC_FAR_MIC_INDEX | 90 | wo | int32 | 2 | 8 | Índice de leitura do filtro AEC (comando de disparo) |
| SPECIAL_CMD_AEC_FILTER_COEFF_START_OFFSET | 91 | rw | int32 | 1 | 4 | Deslocamento inicial do coeficiente de filtro |
| SPECIAL_CMD_AEC_FILTER_COEFFS | 92 | rw | float | 15 | 60 | Leitura/gravação de coeficientes de filtro AEC |
| SPECIAL_CMD_AEC_FILTER_LENGTH | 93 | ro | int32 | 1 | 4 | Comprimento do filtro AEC |
| AEC_FILTER_CMD_ABORT | 94 | wo | int32 | 1 | 4 | Abortar máquina de estados de leitura/gravação de filtro |

---

#### ResID = 35 — Audio Manager (Gerenciamento de Áudio)

| Nome | CmdID | Direção | Tipo de dado | Valores | Bytes | Descrição |
|------|-------|-----------|-----------|--------|-------|-------------|
| AUDIO_MGR_MIC_GAIN | 0 | rw | float | 1 | 4 | Ganho do microfone (antes do SHF) |
| AUDIO_MGR_REF_GAIN | 1 | rw | float | 1 | 4 | Ganho de referência (antes do SHF) |
| AUDIO_MGR_CURRENT_IDLE_TIME | 2 | ro | int32 | 1 | 4 | Tempo ocioso atual (tick de 10ns) |
| AUDIO_MGR_MIN_IDLE_TIME | 3 | ro | int32 | 1 | 4 | Tempo ocioso mínimo (tick de 10ns) |
| AUDIO_MGR_RESET_MIN_IDLE_TIME | 4 | wo | int32 | 1 | 4 | Redefinir tempo ocioso mínimo |
| MAX_CONTROL_TIME | 5 | ro | int32 | 1 | 4 | Tempo máximo de controle |
| RESET_MAX_CONTROL_TIME | 6 | wo | int32 | 1 | 4 | Redefinir tempo máximo de controle |
| I2S_CURRENT_IDLE_TIME | 7 | ro | int32 | 1 | 4 | Tempo ocioso atual de I2S |
| I2S_MIN_IDLE_TIME | 8 | ro | int32 | 1 | 4 | Tempo ocioso mínimo de I2S |
| I2S_RESET_MIN_IDLE_TIME | 9 | wo | int32 | 1 | 4 | Redefinir tempo ocioso de I2S |
| I2S_INPUT_PACKED | 10 | rw | uint8 | 1 | 1 | Modo compactado de entrada I2S/USB |
| AUDIO_MGR_SELECTED_AZIMUTHS | 11 | ro | radians | 2 | 8 | Azimute de feixe selecionado (processar DOA + seleção automática de DOA) |
| AUDIO_MGR_SELECTED_CHANNELS | 12 | rw | uint8 | 2 | 2 | Canais de saída selecionados |
| AUDIO_MGR_OP_PACKED | 13 | rw | uint8 | 2 | 2 | Status compactado de saída L/R |
| AUDIO_MGR_OP_UPSAMPLE | 14 | rw | uint8 | 2 | 2 | Status de upsampling de saída L/R |
| AUDIO_MGR_OP_L | 15 | rw | uint8 | 2 | 2 | Categoria e fonte do canal L (= OP_L_PK0) |
| AUDIO_MGR_OP_L_PK0 | 16 | rw | uint8 | 2 | 2 | Fonte compactada 0 do canal L |
| AUDIO_MGR_OP_L_PK1 | 17 | rw | uint8 | 2 | 2 | Fonte compactada 1 do canal L |
| AUDIO_MGR_OP_L_PK2 | 18 | rw | uint8 | 2 | 2 | Fonte compactada 2 do canal L |
| AUDIO_MGR_OP_R | 19 | rw | uint8 | 2 | 2 | Categoria e fonte do canal R (= OP_R_PK0) |
| AUDIO_MGR_OP_R_PK0 | 20 | rw | uint8 | 2 | 2 | Fonte compactada 0 do canal R |
| AUDIO_MGR_OP_R_PK1 | 21 | rw | uint8 | 2 | 2 | Fonte compactada 1 do canal R |
| AUDIO_MGR_OP_R_PK2 | 22 | rw | uint8 | 2 | 2 | Fonte compactada 2 do canal R |
| AUDIO_MGR_OP_ALL | 23 | rw | uint8 | 12 | 12 | Todas as configurações de fonte compactada L/R |
| I2S_INACTIVE | 24 | ro | uint8 | 1 | 1 | I2S ativo (0=ativo 1=inativo) |
| AUDIO_MGR_FAR_END_DSP_ENABLE | 25 | rw | uint8 | 1 | 1 | Chave de DSP de extremidade distante |
| AUDIO_MGR_SYS_DELAY | 26 | rw | int32 | 1 | 4 | Atraso do sinal de referência (amostras) |
| I2S_DAC_DSP_ENABLE | 27 | rw | uint8 | 1 | 1 | Chave de DSP de extremidade distante do DAC |

---

#### ResID = 17 — PP Servicer (Pós-processamento: AGC/Ruído/Eco)

| Nome | CmdID | Direção | Tipo de dado | Valores | Bytes | Descrição |
|------|-------|-----------|-----------|--------|-------|-------------|
| PP_AGCONOFF | 10 | rw | int32 | 1 | 4 | Chave AGC (0,1) |
| PP_AGCMAXGAIN | 11 | rw | float | 1 | 4 | Ganho máximo de AGC [1.0..1000.0] |
| PP_AGCDESIREDLEVEL | 12 | rw | float | 1 | 4 | Potência alvo de AGC [1e-8..1.0] |
| PP_AGCGAIN | 13 | rw | float | 1 | 4 | Ganho atual de AGC [1.0..1000.0] |
| PP_AGCTIME | 14 | rw | float | 1 | 4 | Constante de tempo de AGC [0.5..4.0] s |
| PP_AGCFASTTIME | 15 | rw | float | 1 | 4 | Tempo de decaimento rápido de AGC [0.05..4.0] s |
| PP_AGCALPHAFASTGAIN | 16 | rw | float | 1 | 4 | Limite de ganho do modo rápido [0.0..1000.0] |
| PP_AGCALPHASLOW | 17 | rw | float | 1 | 4 | Parâmetro de memória lenta [0.0..1.0] |
| PP_AGCALPHAFAST | 18 | rw | float | 1 | 4 | Parâmetro de memória rápida [0.0..1.0] |
| PP_LIMITONOFF | 19 | rw | int32 | 1 | 4 | Chave do limitador (0,1) |
| PP_LIMITPLIMIT | 20 | rw | float | 1 | 4 | Potência máxima do limitador [1e-8..1.0] |
| PP_MIN_NS | 21 | rw | float | 1 | 4 | Piso de ganho de ruído em regime permanente [0.0..1.0] |
| PP_MIN_NN | 22 | rw | float | 1 | 4 | Piso de ganho de ruído não estacionário [0.0..1.0] |
| PP_ECHOONOFF | 23 | rw | int32 | 1 | 4 | Chave de supressão de eco (0,1) |
| PP_GAMMA_E | 24 | rw | float | 1 | 4 | Fator de super‑subtração de eco [0.0..2.0] |
| PP_GAMMA_ETAIL | 25 | rw | float | 1 | 4 | Fator de super‑subtração de eco de cauda [0.0..2.0] |
| PP_GAMMA_ENL | 26 | rw | float | 1 | 4 | Fator de super‑subtração de eco não linear [0.0..5.0] |
| PP_NLATTENONOFF | 27 | rw | int32 | 1 | 4 | Chave de atenuação de eco não linear (0,1) |
| PP_NLAEC_MODE | 28 | rw | int32 | 1 | 4 | Modo de treinamento de AEC não linear (0=normal 1=treinamento 2=treinamento2) |
| PP_MGSCALE | 29 | rw | float | 3 | 12 | Escala de ganho mínimo (máx,mín,atual) |
| PP_FMIN_SPEINDEX | 30 | rw | float | 1 | 4 | Limite de frequência de double‑talk [0.0..7999.0] |
| PP_DTSENSITIVE | 31 | rw | int32 | 1 | 4 | Sensibilidade de double‑talk [0..5, 10..15] |
| PP_ATTNS_MODE | 32 | rw | int32 | 1 | 4 | Chave de atenuação extra de não fala (0,1) |
| PP_ATTNS_NOMINAL | 33 | rw | float | 1 | 4 | Atenuação nominal de fala [0.0..1.0] |
| PP_ATTNS_SLOPE | 34 | rw | float | 1 | 4 | Inclinação de atenuação [0.0..5.0] |
| PP_CURRENT_IDLE_TIME | 70 | ro | uint32 | 1 | 4 | Tempo ocioso atual de PP (tick de 10ns) |
| PP_MIN_IDLE_TIME | 71 | ro | uint32 | 1 | 4 | Tempo ocioso mínimo de PP (tick de 10ns) |
| PP_RESET_MIN_IDLE_TIME | 72 | wo | uint32 | 1 | 4 | Redefinir tempo ocioso mínimo de PP |
| PP_NL_MODEL_CMD_ABORT | 94 | wo | int32 | 1 | 4 | Abortar máquina de estados de leitura/gravação de modelo NL |
| PP_EQUALIZATION_CMD_ABORT | 100 | wo | int32 | 1 | 4 | Abortar máquina de estados de leitura/gravação do equalizador |

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



