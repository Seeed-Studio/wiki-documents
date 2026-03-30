---
description: Sistema de detecção de movimento baseado em análise de espectro Wi‑Fi (CSI), com integração nativa ao Home Assistant via ESPHome.
title: Implementando Espectre no Seeed Studio XIAO ESP32 Série com ESPHome
keywords:
  - Espectre
  - XIAO
  - ESPHome
  - WiFi
image: https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.webp
slug: /xiao-esp32--series-espresense
sku: 100010048,113991254,113991114, 113991054
last_update:
  date: 01/26/2026
  author: Carla Guo
createdAt: '2026-01-26'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao-esp32--series-espresense/
---

# Implementando Espectre no Seeed Studio XIAO ESP32 Série com ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.png" style={{width:1000, height:'auto'}}/></div>

**ESPectre é um sistema de detecção de movimento baseado em análise de espectro Wi‑Fi (CSI), com integração nativa ao Home Assistant via ESPHome.** Quando alguém se movimenta em um cômodo, essa pessoa “perturba” as ondas de Wi‑Fi que viajam entre o roteador e o sensor. É como quando você move a mão na frente de uma lanterna e vê a sombra mudar. A [placa XIAO ESP32](https://www.seeedstudio.com/ESP32-Series-c-2580.html) “ouve” essas mudanças e entende se há movimento.


## Recurso

- **Detecção de movimento baseada em Wi‑Fi**: Detecta movimento humano usando apenas sinais Wi‑Fi — sem câmeras, sem microfones, garantindo total privacidade
- **Hardware mínimo, configuração rápida**: Requer apenas uma placa XIAO ESP32 e pode ser configurado em 10–15 minutos, com custo total em torno de US$ 7
- **Completamente não intrusivo**: Não são necessários vestíveis ou sensores físicos — os usuários não precisam carregar ou vestir nada
- **Funciona através de paredes**: Os sinais Wi‑Fi penetram paredes, possibilitando detecção de movimento confiável entre cômodos

## O que você precisa

### Hardware

- **Roteador Wi‑Fi 2,4GHz** - o que você já tem em casa funciona bem
- [**ESP32 com suporte a CSI**](https://www.seeedstudio.com/ESP32-Series-c-2580.html) - XIAO ESP32-C3 / XIAO ESP32-C6 / XIAO ESP32-S3, XIAO ESP32-C5 com suporte experimental.

### Software (Todos Gratuitos)

- **Python 3.12** (⚠️ Python 3.14 apresenta problemas conhecidos com ESPHome)
- **ESPHome** (integrado ao Home Assistant ou independente)
- **Home Assistant** (em Raspberry Pi, PC, NAS ou nuvem. É recomendado, mas opcional)

## Início Rápido

### 1. Instale o ESPHome

```bash
# Create virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# venv\Scripts\activate   # On Windows

# Install ESPHome
pip install esphome
```

O motivo de recomendarmos baixar e executar o ESPHome em um terminal de computador, em vez de diretamente dentro do Home Assistant, é que os arquivos binários gerados pelo PlatformIO (PIO) são bastante grandes. O ambiente do Home Assistant não consegue lidar de forma confiável com arquivos temporários e de sistema tão grandes, o que pode acabar fazendo com que o processo de compilação ou implantação falhe.

Por exemplo, durante nossos testes observamos a seguinte mensagem:
>We found 1.63GB of unnecessary PlatformIO system data (temporary files, unnecessary packages, etc.). Use pio system prune --dry-run to list them or pio system prune to save disk space.


### 2. Baixe um arquivo de configuração

Baixe o exemplo de configuração para o seu hardware:

| Plataforma | Arquivo de Configuração | CPU | WiFi | PSRAM | Status |
|----------|-------------------|-----|------|-------|--------|
| **XIAO ESP32-C6** | [espectre-c6.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c6.yaml) | RISC-V @ 160MHz | WiFi 6 | ❌ | ✅ Testado |
| **XIAO ESP32-S3** | [espectre-s3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-s3.yaml) | Xtensa @ 240MHz | WiFi 4 | ✅ 8MB | ✅ Testado |
| **XIAO ESP32-C3** | [espectre-c3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c3.yaml) | RISC-V @ 160MHz | WiFi 4 | ❌ | ✅ Testado ² |
| **XIAO ESP32-C5** | [espectre-c5.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c5.yaml) | RISC-V @ 240MHz | WiFi 6 | ❌ | ⚠️ Experimental ¹ |

**Recomendações**:
- **XIAO ESP32-C6**: Melhor para ambientes WiFi 6, detecção de movimento padrão
- **XIAO ESP32-S3**: Melhor para aplicações avançadas, futuros recursos de ML (mais memória)
- **XIAO ESP32-C3**: Opção econômica

Esses arquivos estão pré-configurados para baixar o componente automaticamente do GitHub.

> ⚠️ **Plataformas experimentais**: ESP32-S2 e ESP32-C5 têm suporte a CSI, mas não foram amplamente testados. 
>
> ESP32-C5: `improv_serial` (provisionamento por USB) ainda não é suportado pelo ESPHome. Em vez disso, use provisionamento por BLE ou WiFi AP.

### 3. Compile e faça o flash

```bash
cd examples
esphome run espectre-c5.yaml  # or espectre-s3.yaml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image2.png" style={{width:1000, height:'auto'}}/></div>


### 4. Configure o WiFi

Após o flash, configure o WiFi usando um destes métodos:

| Método | Como |
|--------|-----|
| **BLE** (mais fácil) | Use o app ESPHome ou o app Home Assistant Companion |
| **USB** | Vá para [web.esphome.io](https://web.esphome.io) → Connect → Configure WiFi (XIAO ESP32-C5 não recomendado) |
| **Portal Cativo** | Conecte-se ao WiFi "ESPectre Fallback" → http://192.168.4.1|

Para integrar seu dispositivo XIAO ESP32 ao Home Assistant, você precisa configurá-lo para usar a mesma rede local que o Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image3.png" style={{width:400, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image4.png" style={{width:1000, height:'auto'}}/></div>

É isso! O dispositivo será descoberto automaticamente pelo Home Assistant.

### 5. Posicione o Sensor

O posicionamento ideal do sensor é crucial para uma detecção de movimento confiável. Distância recomendada do roteador, faixa ideal: 3–8 metros

| Distância | Sinal | Multipercurso | Sensibilidade | Ruído | Recomendação |
|----------|--------|-----------|-------------|-------|----------------|
| < 2m | Forte demais | Mínimo | Baixa | Baixo | ❌ Perto demais |
| 3-8m | Forte | Bom | Alta | Baixo | ✅ **Ideal** |
| > 10-15m | Fraco | Variável | Baixa | Alto | ❌ Longe demais |

>**Dicas de posicionamento**
>
>Faça:
>- Posicionar o sensor na área a ser monitorada (não necessariamente em linha direta com o roteador)
>- Altura: 1–1,5 metros do chão (altura de mesa/escrivaninha)
>- Antena externa: Use o conector IPEX para melhor recepção
>
>Não faça:
>- Evitar obstáculos metálicos entre o roteador e o sensor (geladeiras, armários metálicos)
>- Evitar cantos ou espaços fechados (reduz a diversidade de multipercurso)


### 6. Integração com Home Assistant

ESPHome fornece **integração automática com o Home Assistant**. Depois que o dispositivo for gravado e conectado ao WiFi:

1. O Home Assistant descobrirá o dispositivo automaticamente
2. Vá em **Settings** → **Devices & Services** → **ESPHome**
3. Clique em **Configure** no dispositivo descoberto
4. Todos os sensores serão adicionados automaticamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image5.png" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image6.png" style={{width:1000, height:'auto'}}/></div>

- Por favor, calibre o dispositivo antes de usar. Basta pressionar o botão `Calibrate`; o status do botão será redefinido automaticamente quando a calibração for concluída. Observação: o cômodo deve estar desocupado durante a calibração.

- Se você perceber que o Home Assistant consegue detectar o dispositivo Espectre, mas não consegue adicioná-lo com sucesso, tente simplesmente reduzir o `traffic_generator_rate`.

> Ao coletar dados de CSI, a CPU opera sob uma alta carga de interrupções (100 vezes por segundo ou mais). Como resultado, ocorre contenção de recursos entre o processo de coleta de dados CSI e as tarefas de comunicação com o Home Assistant, seja em nível de hardware ou devido à largura de banda limitada da rede.


- Para mais exemplos de automação, exemplos de dashboard e mais detalhes de configuração, consulte [SETUP.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/SETUP.md).

### 7. Parâmetros de Configuração

Se você achar que a precisão não é satisfatória, pode ajustá-la manualmente alterando os parâmetros no arquivo YAML na seção `espectre:`. Após os ajustes, recompile e envie o arquivo.

| Parâmetro | Tipo | Padrão | Descrição |
|-----------|------|---------|-------------|
| `traffic_generator_rate` | int | 100 | Pacotes/seg para geração de CSI (0=desativado, usar tráfego externo) |
| `traffic_generator_mode` | string | dns | Modo do gerador de tráfego: `dns` (consultas UDP) ou `ping` (ICMP) |
| `publish_interval` | int | auto | Pacotes entre atualizações do sensor (padrão: igual a traffic_generator_rate, ou 100 se o tráfego for 0) |
| `segmentation_threshold` | float | 1.0 | Sensibilidade ao movimento (menor=mais sensível) |
| `segmentation_window_size` | int | 50 | Janela de variância móvel em pacotes |
| `selected_subcarriers` | list | auto | Subportadoras fixas (omita para auto calibração) |
| `lowpass_enabled` | bool | false | Ativa o filtro passa‑baixas para redução de ruído |
| `lowpass_cutoff` | float | 11.0 | Frequência de corte do filtro passa‑baixas em Hz (5–20) |
| `hampel_enabled` | bool | false | Ativa o filtro de outliers Hampel |
| `hampel_window` | int | 7 | Tamanho da janela do filtro Hampel |
| `hampel_threshold` | float | 4.0 | Sensibilidade do filtro Hampel (multiplicador MAD) |
| `gain_lock` | string | auto | Travamento de ganho AGC/FFT: `auto`, `enabled`, `disabled` |

Para ajuste detalhado dos parâmetros (faixas, valores recomendados, solução de problemas), consulte [TUNING.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/TUNING.md).


## Arquitetura do Sistema

### Pipeline de Processamento

ESPectre utiliza um pipeline de processamento focado para detecção de movimento:

```
┌─────────────┐
│  CSI Data   │  Raw Wi-Fi Channel State Information
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Gain Lock  │  AGC/FFT stabilization (~3 seconds)
│             │  Locks hardware gain for stable measurements
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Auto     │  Automatic subcarrier selection (once at boot)
│ Calibration │  Selects optimal 12 subcarriers via NBVI
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Normalization│  Attenuate if baseline > 0.25 (always enabled)
│             │  Prevents extreme motion values
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Hampel    │  Turbulence outlier removal
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Low-pass   │  Noise reduction (smoothing)
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Segmentation │  MVS algorithm
│    (MVS)    │  IDLE ↔ MOTION
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Home        │  Native ESPHome integration
│ Assistant   │  Binary sensor + Movement/Threshold
└─────────────┘
```

### Um ou Vários Sensores

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ ESP32   │  │ ESP32   │  │ ESP32   │
│ Room 1  │  │ Room 2  │  │ Room 3  │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┴────────────┘
                  │
                  │ ESPHome Native API
                  ▼
         ┌────────────────────┐
         │   Home Assistant   │
         │   (Auto-discovery) │
         └────────────────────┘
```

Cada sensor é detectado automaticamente pelo Home Assistant com:
- Sensor binário para detecção de movimento
- Sensor de pontuação de movimento
- Limite ajustável (entidade numérica)

### Seleção Automática de Subportadora

ESPectre implementa o algoritmo **NBVI (Normalized Baseline Variability Index)** para seleção automática de subportadora, alcançando desempenho quase ideal (F1=98,2%) com **zero configuração manual**.

> ⚠️ **IMPORTANTE**: Mantenha o ambiente **silencioso e parado** por 10 segundos após a inicialização do dispositivo. A auto calibração é executada durante esse período e o movimento afetará a precisão da detecção.

Para detalhes do algoritmo NBVI, consulte [ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md).

## O Que Você Pode Fazer Com Ele

- **Segurança residencial**: Receba um alerta se alguém entrar enquanto você estiver ausente
- **Cuidados com idosos**: Monitore a atividade para detectar quedas ou longos períodos de inatividade
- **Automação inteligente**: Ligue luzes/aquecimento apenas quando alguém estiver presente
- **Economia de energia**: Desligue dispositivos automaticamente em cômodos vazios
- **Monitoramento de crianças**: Alerta se elas saírem do quarto durante a noite
- **Controle de clima**: Aquecer/resfriar apenas as zonas ocupadas


## Análise Técnica Aprofundada

Para detalhes dos algoritmos (MVS, NBVI, filtro de Hampel), consulte [ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md).

Para métricas de desempenho (matriz de confusão, F1-score, benchmarks), consulte [PERFORMANCE.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/PERFORMANCE.md).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>