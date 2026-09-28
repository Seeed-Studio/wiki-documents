---
description: Use o sensor IMU do display touch XIAO ESP32-S3 Plus para controlar o robô Reachy Mini inclinando a tela — balanço do corpo, rotação da cabeça e aceno.
title: Reachy Mini × Controle de Movimento com Tela XIAO
slug: /reachymini_development_cases_sway_screen
image: https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif
keywords:
  - Reachy Mini
  - IMU
  - controle de movimento
  - XIAO ESP32-S3
  - display touch
  - LSM6DS3
  - Arduino
  - Python
sku: 100090917, 114993666
last_update:
  date: 2026-09-22
  author: jingyizhang
translation:
  skip: [zh-CN]
createdAt: '2026-09-20'
updatedAt: '2026-09-22'
url: https://wiki.seeedstudio.com/pt-br/reachymini_development_cases_sway_screen/
---

# Reachy Mini × Controle de Movimento com Tela XIAO

Combine o robô **Reachy Mini** com o **display touch XIAO ESP32-S3 Plus** — usando o sensor IMU (LSM6DS3) integrado, inclinar a tela controla o balanço do corpo do robô, o giro (yaw) da cabeça e a inclinação (pitch) da cabeça.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif"
    alt="Reachy Mini × XIAO Screen Motion Control Demo" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Reachy Mini agora 🤖</font></span></strong>
</a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira XIAO 1,47'' agora 🖥️</font></span></strong>
</a>
</div>

<p align="center">
    <img src="https://img.shields.io/badge/Platform-Reachy%20Mini-blue.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Controller-XIAO%20ESP32--S3%20Plus-green.svg" alt="Controller" />
    <img src="https://img.shields.io/badge/Sensor-LSM6DS3%20IMU-orange.svg" alt="Sensor" />
    <img src="https://img.shields.io/badge/Language-Arduino%20%7C%20Python-yellow.svg" alt="Language" />
</p>

---

## Demo

| Ação | Resposta do robô | Exibição na tela |
|:-------|:---------------|:----------------|
| Inclinar a tela para a esquerda/direita | Balanço do corpo + giro da cabeça (esquerda/direita) | Kaomoji inclina na direção |
| Inclinar a tela para frente/trás | Inclinação da cabeça (aceno para cima/baixo) | — |
| Tela mantida parada | Robô permanece parado (gatilho manual) | Kaomoji retorna ao centro |

A tela exibe um kaomoji `≧∇≦`, girado 90° para ficar em pé, balançando com a direção da inclinação. O padrão de exibição da tela XIAO pode ser personalizado — consulte o tutorial [1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/pt-br/getting_started_1.47_inch_touch_display_nrf52840/) para compilar e gravar seu próprio padrão.

---

## Hardware

| Hardware | Descrição |
|:---------|:------------|
| [Reachy Mini Wireless Kit](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | Conectado ao PC via USB |
| [1.47 inch Touch Display — XIAO ESP32-S3 Plus](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html) | Sensor IMU LSM6DS3 integrado |
| PC (Windows) | Python 3.11+ |
| Cabos USB-C ×2 | Um para a tela, outro para o robô |

---

## Configuração de Software

### Passo 1. Instalar Arduino CLI

Baixe e instale a partir de [Arduino CLI Releases](https://github.com/arduino/arduino-cli/releases).

### Passo 2. Instalar Suporte à Placa ESP32

```bash
arduino-cli config init
```

Edite `~/.arduino15/arduino-cli.yaml` e adicione a URL da placa ESP32 em `board_manager.additional_urls`:

```yaml
board_manager:
  additional_urls:
    - https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

Instale o core ESP32:

```bash
arduino-cli core install esp32:esp32
```

:::tip
Selecione `XIAO_ESP32S3_Plus` como a placa alvo (fqbn) para a tela.
:::

### Passo 3. Instalar Biblioteca Seeed GFX

A exibição da tela depende da biblioteca [Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX). Instale-a a partir do GitHub no diretório de bibliotecas do seu Arduino.

### Passo 4. Instalar Dependências Python

```bash
pip install reachy-mini pyserial numpy
```

---

## Passo 1: Obter o Código do Projeto

```bash
git clone https://github.com/Genie-INSPIRE/reachy-mini-sway-screen.git
cd reachy-mini-sway-screen
```

Conteúdo do projeto:

| Arquivo | Finalidade |
|:-----|:--------|
| `reachy_sway_screen/reachy_sway_screen.ino` | Firmware da tela: lê IMU + saída serial + desenha kaomoji |
| `reachy_sync/sway_follow.py` | Programa de controle principal: lê serial + controla o robô |
| `reachy_sync/start_daemon.py` | Inicializador do daemon do Reachy Mini |

---

## Passo 2: Gravar o Firmware na Tela

### 1. Encontrar a Porta COM da Tela

Conecte a tela via USB, abra o **Gerenciador de Dispositivos** e encontre a porta COM **USB-Serial/JTAG** (VID `0x303A`).

:::note
A tela é detectada automaticamente pelo VID, então mudanças no número da porta COM não importam.
:::

### 2. Compilar e Gravar

```bash
arduino-cli compile --fqbn esp32:esp32:XIAO_ESP32S3_Plus -u -p COM9 --warnings none reachy_sway_screen
```

Substitua `COM9` pela porta COM real da sua tela.

### 3. Calibrar Posição Neutra

1. Coloque a tela **plana sobre uma mesa** (mantenha nivelada)
2. Aguarde 2 segundos (a tela mostra `hold neutral`)
3. Amostra automaticamente por 0,5 segundos, salva a posição neutra na **NVS** (permanece após desligar)
4. Para recalibrar: envie a letra `c` para a tela via uma ferramenta serial (115200 baud)

:::caution
Você deve calibrar a posição neutra no primeiro uso ou ao trocar de tela, caso contrário os ângulos de inclinação ficarão incorretos.
:::

---

## Passo 3: Iniciar o Daemon do Robô

### 1. Encontrar a Porta COM do Robô

Conecte o robô via USB, encontre no Gerenciador de Dispositivos a porta COM do **chip CH343** (VID `0x1A86`).

### 2. Definir a Porta COM

Edite `reachy_sync/start_daemon.py` e altere `COM14` para a porta COM real do seu robô:

```bash
# Open start_daemon.py in an editor, change COM14 to your actual port
```

### 3. Iniciar

```bash
cd reachy_sync
python -u start_daemon.py
```

Você deverá ver `Uvicorn running on http://127.0.0.1:8000` — sucesso!

:::tip
Abra http://127.0.0.1:8000/ em um navegador para confirmar que o daemon está em execução.
:::

---

## Passo 4: Executar o Programa de Controle Principal

```bash
cd reachy_sync
python -u sway_follow.py
```

Você deverá ver:

```text
screen connected on COMx
connected
ready: L/R tilt -> body sway + head yaw. F/B tilt -> head pitch.
```

Incline a tela, e o robô irá acompanhar!

---

## Como Funciona

### Fluxo de Dados

```text
Screen IMU (LSM6DS3)
  ax = left/right tilt, ay = forward/back tilt
  tilt = -asinf(ax), pitch = -asinf(ay)
  deadband filter + gain + low-pass filter
  Serial output: "sway <value> pitch <value> rad" (115200 baud)
        ↓
Python (sway_follow.py)
  Reads serial data
  Two-stage low-pass filter (0.22)
  Computes body_yaw, head yaw, head pitch
        ↓
Reachy Mini Daemon (port 8000)
  set_target(body_yaw, antennas, head)
        ↓
Robot motors execute
```

### Parâmetros do Firmware da Tela

| Parâmetro | Valor | Descrição |
|:----------|:------|:------------|
| `GAIN` | 6.0 | Fator de amplificação da inclinação — maior = mais sensível |
| `FILT` | 0.25 | Coeficiente do filtro passa-baixa — menor = mais suave porém mais lento |
| `AMP` | 0.7 | Amplitude máxima de saída (rad), ~40° |
| `deadband` | 0.008 | Zona morta (rad), ignora inclinações abaixo de 0,5° |

### Parâmetros no Lado do Robô

| Parâmetro | Valor | Descrição |
|:----------|:------|:------------|
| `HEAD_K` | 0.40 | Ganho de giro (yaw) da cabeça (esquerda/direita) |
| `HEAD_PITCH_K` | 0.65 | Ganho de inclinação (pitch) da cabeça (cima/baixo) |
| Coeficientes do filtro | 0.22 / 0.22 | Filtro passa-baixa em duas etapas — menor = mais suave |

### Espelhamento das Antenas

Os dois motores de antena do Reachy Mini são montados em espelho:

- **Antena direita** (índice 0): positivo = inclina para a esquerda, negativo = inclina para a direita
- **Antena esquerda** (índice 1): positivo = inclina para a direita, negativo = inclina para a esquerda

Para fazer ambas as antenas inclinarem na mesma direção, use sinais opostos: subtraia para a direita, some para a esquerda.

---

## Ajuste de Parâmetros

### Muito Lento (com Atraso)

- Aumente `FILT` na tela (por exemplo, 0.25 → 0.30): filtragem mais forte no lado da tela
- Diminua o coeficiente de filtro no lado do robô (por exemplo, 0.22 → 0.15): resposta mais suave porém mais lenta

### Muito Lento / Precisa de Grandes Inclinações

- Aumente `GAIN` na tela (por exemplo, 6.0 → 8.0): pequenas inclinações geram movimentos maiores
- Aumente o coeficiente de filtro no lado do robô (por exemplo, 0.22 → 0.30): resposta mais rápida

### Direção da Cabeça Invertida

| Problema | Solução |
|:--------|:---------|
| Esquerda/direita invertidas | Inverta o sinal de `tilt` (`tilt = -asinf(ax)` em `.ino`) |
| Cima/baixo invertidos | Inverta o sinal de `pitch` (`pt = -asinf(ay)` em `.ino`) |

### Direção do Kaomoji Incorreta

| Problema | Solução |
|:--------|:---------|
| Ângulo de rotação | Modifique `drawFigure(dyn + 1.5708f)` — `1.5708` = 90° |
| Direção de inclinação invertida | Altere `dyn = kaoDev * 2.0f` para `dyn = -kaoDev * 2.0f` |

---

## FAQ

<details>
<summary><strong>P: O que fazer após uma queda de energia?</strong></summary>

R: Reinicie o daemon (`python start_daemon.py`) e depois inicie `sway_follow.py`. O firmware da tela e a calibração neutra são salvos na NVS e não serão perdidos.

</details>

<details>
<summary><strong>P: O número da porta COM mudou?</strong></summary>

R: A tela é detectada automaticamente pelo VID (`0x303A`), nenhuma alteração é necessária. Atualize a porta COM do robô em `start_daemon.py`.

</details>

<details>
<summary><strong>P: O robô não está se movendo?</strong></summary>

R: Verifique se o daemon está em execução na porta 8000 (abra http://127.0.0.1:8000/ no navegador). Se não estiver, reinicie o daemon.

</details>

<details>
<summary><strong>P: A tela não está exibindo ou não está enviando dados?</strong></summary>

R: Verifique o cabo USB, regrave o firmware, use uma ferramenta serial (115200 baud) para verificar a saída `sway ... pitch ... rad`.

</details>

<details>
<summary><strong>P: Direção da cabeça invertida?</strong></summary>

R: Esquerda/direita invertidas → inverta o sinal em `tilt = -asinf(ax)` no arquivo `.ino`. Cima/baixo invertidos → inverta o sinal em `pt = -asinf(ay)`.

</details>

---

## Suporte Técnico

- **Repositório do Projeto**: [GitHub](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen)
- **Registrar Issue**: [Issues](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen/issues)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)
- **Comprar**: [Reachy Mini](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | [XIAO 1.47'' Touch Display](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html)

---

## Referências

- [Reachy Mini Getting Started](/pt-br/reachymini_getting_started)
- [1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/pt-br/getting_started_1.47_inch_touch_display_nrf52840/)
- [Arduino CLI Documentation](https://arduino.github.io/arduino-cli/)
- [LSM6DS3 Datasheet](https://www.st.com/en/mems-and-sensors/lsm6ds3.html)
