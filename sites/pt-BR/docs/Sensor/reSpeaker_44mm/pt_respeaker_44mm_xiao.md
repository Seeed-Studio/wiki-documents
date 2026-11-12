---
description: reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus combina o compacto array circular de 4 microfones de 44 mm com um módulo ESP32-S3 pré-soldado, adicionando Wi-Fi/Bluetooth, áudio I2S e controle I2C sobre o pipeline de voz XMOS XVF3800.
title: Introdução ao reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - ESP32S3
  - xvf3800
  - i2s microphone array
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_getting_started
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_getting_started/
---
# Introdução ao reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus

{/* TODO(image): add a product render per variant — see wiki_44mm_images/README.txt */}

## Visão geral

O reSpeaker XVF3800 USB 44mm com XIAO ESP32-S3 Plus é um array circular profissional de 4 microfones baseado no XMOS XVF3800. Ele oferece AEC, AGC, DoA, formação de feixe (beamforming), VAD, supressão de ruído, desreverberação e captura de voz em 360° até 5 metros, e suporta operação tanto por USB quanto por I2S. A combinação do array com o XIAO ESP32-S3 Plus adiciona Wi-Fi e Bluetooth, além de um processador host local, para que o pipeline de voz possa ser controlado e transmitido sem um PC.

A placa mantém o **passo de microfone de 44 mm** compacto do array padrão de 44 mm, de modo que se encaixa nos mesmos gabinetes, enquanto o módulo XIAO é soldado diretamente na parte de trás e conectado ao XVF3800 via I2S e I2C.

{/* TODO: replace the href="#" values with the Seeed Studio product page URLs once they are published. */}

<table align="center">
  <tr>
    <th>Variant</th>
    <th>Contents</th>
    <th>Order</th>
  </tr>
  <tr>
    <td><strong>reSpeaker XVF3800 4-Mic Array 44mm with XIAO ESP32-S3 Plus</strong></td>
    <td>PCBA com XIAO ESP32-S3 Plus pré-soldado, firmware I2S<br /><code>SKU 100066841</code></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XVF3800 4-Mic Array 44mm with Case &amp; XIAO ESP32-S3 Plus</strong></td>
    <td>PCBA + gabinete + XIAO ESP32-S3 Plus pré-soldado<br /><code>SKU 100065276</code></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Recursos

- **Design compacto de 44 mm**: passo de microfone reduzido de 66 mm para 44 mm para uma placa menor que é mais fácil de integrar em produtos com espaço limitado.

- **XIAO ESP32-S3 Plus onboard**: módulo pré-soldado adiciona Wi-Fi e Bluetooth, com áudio I2S e controle I2C conectados diretamente ao XVF3800.

- **Processamento de áudio avançado**: XMOS XVF3800 com AEC, AGC (faixa de 60 dB), formação de feixe multicanal, DoA, VAD, supressão dinâmica de ruído e desreverberação, todos ajustáveis.

- **Alta qualidade de áudio**: equivalente ao reSpeaker XVF3800 Circular 4-Mic Array existente com passo de 66 mm.

- **Modos de operação duplos**: USB Audio Class 2.0 para plug-and-play ou modo I2S/INT-Device para o XIAO e outros hosts embarcados, selecionado por firmware.

- **Conectividade e atualizações flexíveis**: configuração via USB e I2C, além de atualizações de firmware por DFU.

- **Identificação exclusiva do dispositivo**: leitura e gravação de um UUID para gerenciamento de múltiplos dispositivos, identificação e rastreamento de dados.

- **Feedback RGB programável**: 24 × LEDs WS2812 exibem status do dispositivo, animação de boot e direção DoA, e podem ser roteados para o XIAO.

- **Três botões personalizáveis**: aumentar volume, diminuir volume e mudo por padrão, comutáveis entre o XVF3800 e os pads do XIAO.

- **Ampla compatibilidade de plataforma**: hosts USB como Windows, macOS e Raspberry Pi OS, além de integração I2S com a série XIAO, ESP32 e Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg" alt="Identificação dos componentes da PCB do reSpeaker XVF3800 44mm" width={900} height="auto" /></p>

## Introdução (Firmware I2S vs USB)

Por padrão, o reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus é enviado com o **firmware I2S**. No modo I2S a placa **NÃO** é detectada como um dispositivo USB.

Você pode alternar entre o modo I2S e USB gravando o firmware correspondente. Use o **Safe Mode** para inicializar a placa como um dispositivo USB, para que você possa gravá-la, atualizá-la ou alternar entre modos.

:::note
Para garantir a captação de voz ideal e o funcionamento correto dos algoritmos de áudio, aponte a porta do microfone (entrada do microfone / orifício de som) na parte de trás do dispositivo em direção à fonte sonora. A porta do microfone fica no lado impresso com o logotipo da Seeed Studio.

{/* TODO(image): mic_inlet_orientation.jpg — mic port / Seeed logo side */}
:::

### Gravar o firmware I2S

Para usar o array com o XIAO ESP32-S3 Plus, certifique-se de que o XVF3800 esteja executando o firmware `I2S` e atualize-o para a versão mais recente. Consulte a seção [Update Firmware](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#update-firmware) da página de introdução.

:::note
O firmware I2S **não** suporta USB DFU, porque a placa não é enumerada como um dispositivo USB nesse modo. Em vez disso, entre no [Safe Mode](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#safe-mode) — o firmware de fábrica do Safe Mode suporta tanto USB DFU quanto I2C DFU, portanto ele sempre pode ser recuperado e regravado.
:::

## Visão geral de hardware

{/* TODO(image): xiao_soldered.jpg — board with the XIAO ESP32-S3 Plus soldered on */}

O módulo XIAO fica na parte de trás da placa, ao lado do conector USB-C e dos pads de E/S XMOS. Todas as suas E/S restantes são disponibilizadas em pads identificados, para que o módulo possa acionar periféricos sem uma placa de suporte extra.

### Principais componentes

| Componente / Recurso | Descrição |
|--------------------|-------------|
| **Processador de áudio principal** | XMOS XVF3800, responsável por AEC, formação de feixe, supressão de ruído e detecção de DoA |
| **Array de microfones** | 4 × microfones PDM MEMS em um layout circular com passo de 44 mm, captura em campo distante de 360° |
| **Codec de áudio** | TLV320AIC3104, conversão de áudio e saída DAC |
| **Amplificador** | Amplificador de áudio Classe D LM48511 |
| **LEDs RGB** | 24 × LEDs RGB WS2812 endereçáveis individualmente |
| **Botões personalizáveis** | Três botões físicos, padrão aumentar volume / diminuir volume / mudo, roteáveis para o XIAO |
| **LED indicador de mudo** | LED vermelho que acende enquanto os microfones estão em mudo |
| **Porta USB Type-C** | Alimentação de 5 V, áudio UAC 2.0, controle e DFU |
| **Conector de alto-falante** | JST vertical para um alto-falante de 5 W 4 Ω, além de um conector AUX de 3,5 mm |
| **XIAO ESP32-S3 Plus** | Módulo pré-soldado com roteamento de I2S, I2C, RST, botão e LED |
| **Antena onboard** | Antena em PCB para Wi-Fi/Bluetooth, com um conector IPEX para um alimentador externo |

Consulte [Main Components](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#main-components) na página de introdução para a lista completa em nível de pinos, incluindo pads de alimentação, depuração e expansão.

### Suporte ao XIAO ESP32-S3 Plus

O XIAO ESP32-S3 Plus é conectado ao XVF3800 e aos botões e LEDs onboard:

- **Entrada/saída I2S estéreo** com múltiplas opções de saída, usando um barramento duplo (reprodução e gravação) com BCLK, MCLK e LRCLK compartilhados.
- **Interface I2C** para configurar e gerenciar parâmetros do XVF3800 a partir do XIAO.
- **Linha de reset** — o XIAO pode acionar um reset de hardware no XVF3800 por meio de um pino de E/S dedicado.
- **Interface e pads de solda** — as demais E/S do XIAO são disponibilizadas em pads identificados para expansão pelo usuário.
- **Roteamento flexível de botões e LEDs** — uma chave conecta os três botões e a cadeia de LEDs ao XVF3800 ou ao XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_esp32s3_plus_schematic.png" alt="Esquemático do XIAO ESP32-S3 Plus no array de 44mm" width={900} height="auto" /></p>

O esquemático mostra U24, o footprint do XIAO ESP32-S3 Plus: D4/D5 carregam o I2C, D6–D10 carregam o barramento I2S e o MCLK, D11 seleciona o roteamento de botões/LEDs, D12 é a interrupção I2C, e D15–D19 acionam a cadeia de LEDs, habilitação/mudo do microfone e os botões de volume.

| Pino do XIAO | Sinal | Função |
|----------|--------|----------|
| D0 | `XIAO_D0` | GPIO livre |
| D1 | `XIAO_D1` | GPIO livre |
| D2 | `XIAO_D2` | GPIO livre |
| D3 | `XIAO_D3` | GPIO livre |
| D4 | `I2C_SDA` | Dados I2C para o XVF3800 |
| D5 | `I2C_SCL` | Clock I2C para o XVF3800 |
| D6 | `I2S_DATA1` | Dados de gravação I2S (RX) |
| D7 | `I2S_DATA0` | Dados de reprodução I2S (TX) |
| D8 | `I2S_LRCK` | Clock esquerdo/direito I2S |
| D9 | `I2S_BCLK` | Clock de bits I2S |
| D10 | `MCLK` | Clock mestre I2S |
| D11 | `XIAO_D11_SWITCH` | Controle da chave de roteamento de botões / LEDs |
| D12 | `I2C_INT` | Interrupção I2C |
| D13 | `XIAO_D13` | GPIO livre |
| D14 | `XIAO_D14` | GPIO livre |
| D15 | `WS2812_DIN_XIAO` | Dados dos LEDs WS2812 (quando roteados para o XIAO) |
| D16 | `MIC_OEN_XIAO` | Habilitação do microfone |
| D17 | `MIC_Mute_XIAO` | Controle de mudo do microfone |
| D18 | `Audio_Down_XIAO` | Botão de diminuir volume |
| D19 | `Audio_Up_XIAO` | Botão de aumentar volume |

### Pin Out

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_pinout.jpg" alt="Pads de expansão do XIAO no array de 44mm" width={600} height="auto" /></p>

As marcações em silk nos pads correspondem à tabela abaixo. Os sinais compartilhados com o XVF3800 estão marcados; o restante são GPIO livres do XIAO.



Os pads que são disponibilizados com um número de pino do XIAO mapeiam para estes GPIOs do ESP32-S3:

| Pino do XIAO ESP32-S3 Plus | GPIO do ESP32-S3 |
|------------------------|---------------|
| D0 | GPIO1 |
| D2 | GPIO2 |
| D3 | GPIO4 |
| D13 | GPIO40 |
| D14 | GPIO41 |

Para o pinout completo do XIAO e detalhes da toolchain, consulte a página [XIAO ESP32S3 Getting Started](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/).

### Antena Wi-Fi onboard

Ao usar o XIAO ESP32-S3 Plus, nenhuma antena externa é necessária — basta conectar os slots da antena para usar a antena em PCB integrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/on_board_antenna.jpg" alt="Slots da antena onboard" width={400} height="auto" /></p>

O conector IPEX ao lado dos slots da antena pode alimentar a antena onboard a partir do módulo XIAO com um cabo RF adequado, caso você prefira roteá-la de forma diferente.

## Preparação de software

### Instalar a Arduino IDE

Baixe e instale a versão estável da Arduino IDE para o seu sistema operacional.

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Baixar Arduino IDE</strong>
  </a>
</div>

<br />

#### Instalar Arduino-ESP32

Para instalar o suporte à placa ESP32 por meio do Boards Manager:

- Instale a versão atual do Arduino IDE upstream na versão 1.8 ou posterior. A versão atual está no site [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicie o Arduino e abra a janela `Settings`.

- Insira o link de release abaixo no campo **Additional Board Manager URLs**. Você pode adicionar vários URLs separados por vírgulas.

```text
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_preferences.png" alt="Preferências do Arduino IDE com URL do board manager" width={900} height="auto" /></p>

- Abra o `Boards Manager` na barra lateral, pesquise `ESP32` e clique em `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/arduino_boards_manager.png" alt="Boards Manager do Arduino IDE instalando esp32" width={900} height="auto" /></p>

- Reinicie o Arduino IDE.

### Biblioteca de suporte

:::note
Instale a [biblioteca Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools) para executar os exemplos fornecidos.
:::

## Recursos

- [Introdução ao reSpeaker XVF3800 44mm](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/)
- [Firmware e controle em Python (GitHub)](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- [Biblioteca Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools)
- [Documentação do XMOS XVF3800](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/index.html)

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
