---
description: O ReSpeaker XVF3800 USB 4-Mic Array é uma matriz circular de 4 microfones profissional com AEC, formação de feixe, supressão de ruído e captura de voz em 360°. Emparelhado com o XIAO ESP32S3, permite controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra integração perfeita e flexibilidade de modo duplo.
title: Primeiros Passos com reSpeaker XVF3800 USB Mic Array com XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_getting_started
sku: 114993700
last_update:
  date: 8/20/2025
  author: Kasun Thushara
createdAt: '2025-07-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB 4 Microphone Array com XIAO ESP32S3

## Visão Geral

**O ReSpeaker XVF3800 USB 4-Mic Array** é uma matriz circular profissional de 4 microfones baseada no XMOS XVF3800. Ele possui AEC, AGC, DoA, formação de feixe, VAD, supressão de ruído, desreverberação e captura de voz em 360° (até 5 metros). Também suporta modos de operação duplos, tornando-o ideal para aplicações de voz avançadas. Quando combinado com o Xiao ESP32S3, o controle do ReSpeaker XVF3800 USB se torna ainda mais poderoso, desbloqueando possibilidades infinitas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- **Atualização de chip** :De XVF3000 para XVF3800

- **Matriz de Quatro Microfones** :4 microfones de alto desempenho em padrão circular para captura de voz em campo distante em 360° até 5 metros

- **Processamento de Áudio Avançado** :Alimentado pelo XVF3800 com AEC, formação de feixes múltiplos, desreverberação, detecção de DoA, supressão dinâmica de ruído, faixa de AGC de 60 dB

- **Número de Série Exclusivo do Dispositivo** :SN integrado permite implantações com múltiplos dispositivos e gerenciamento avançado de dispositivos

- **Modos de Operação Duplos** :Modo USB plug-and-play para conectividade instantânea com PC e modo INT-Device (I2S) para integração com sistemas embarcados — configurável via comandos USB ou I2C alternando o firmware de acordo

- **Compatível com Open Source** :Funciona com hosts USB (Windows, macOS, Raspberry Pi OS) e hosts I2S (XIAO Série, ESP32, Arduino).

- **Feedback Visual** :LEDs RGB programáveis e indicadores de status mostram os estados do dispositivo e atividade de voz

- **Qualidade de áudio igual ou melhor** :em comparação com o modelo anterior

## Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Componentes Principais

| **Componente / Recurso**       | **Descrição**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Processador de Áudio Principal**      | **XMOS XVF3800**, lida com o processamento de áudio incluindo AEC, formação de feixe, supressão de ruído, etc.       |
| **Matriz de Microfones**          | **Quatro microfones PDM MEMS** em padrão circular, suportando **captura de voz em campo distante em 360° (5 m)**. |
| **Codec de Áudio**               | **TLV320AIC3104**, lida com conversão e saída de áudio.                                              |
| **LEDs RGB**                  | **12x WS2812** LEDs RGB endereçáveis individualmente para feedback visual (por exemplo, status, atividade de voz). |
| **Botão de Mute**               | Pressione para **mutar/desmutar** a entrada do microfone.                                                       |
| **LED Indicador de Mute**        | Acende (normalmente vermelho) para mostrar que o áudio está mudo.                                               |
| **Botão de Reset**              | Reset de hardware para a placa/sistema.                                                                 |
| **Porta USB Tipo-C**           | Usada tanto para **alimentação quanto para dados** (compatível com USB Audio Class 2.0).                                    |
| **Conector P2 (3,5 mm) para Fones**  | Saída de áudio para fones de ouvido ou caixas ativas.                                                      |
| **Conector de Alto-falante**         | **Interface de alto-falante JST**, suporta **alto-falantes amplificados de 5 W**.                                       |
| **Pads de Depuração**                | Acesso de depuração para **XTAG4** ou outros programadores.                                                     |
| **Headers I2C & I2S**         | Headers expostos para **comunicação I2C e I2S** com dispositivos externos.                             |
| **Pads de IO Não Usados (XIAO)**     | Pads de I/O adicionais soldados conectados ao módulo XIAO.                                                 |
| **Comunicação I2S & I2C**   | Suporta conexão a hosts externos como Raspberry Pi, PC, etc. usando esses protocolos.             |
| **Modos USB & INT-Device**    | Operação em modo duplo: USB plug-and-play ou modo de dispositivo interno INT via I2S.                          |
| **Número de Série Exclusivo**      | **SN do dispositivo** integrado para identificação e gerenciamento de múltiplos dispositivos.                               |
| **Compatibilidade com Open Source** | Funciona com **Arduino, Raspberry Pi, PC/Mac** e é compatível com **XIAO Série**.                   |
| **Recursos Avançados de Áudio**   | AEC, formação de feixe, desreverberação, **detecção de DoA**, supressão de ruído baseada em DNN, AGC de 60 dB.         |
| **Feedback Visual**           | Estado do dispositivo e atividade de áudio mostrados por meio de **padrões de LED RGB** e **indicadores de status**.            |
| **Qualidade de Áudio**             | Igual ou melhor do que os **projetos anteriores baseados em XVF3000**.                                         |

### Suporte ao XIAO ESP32S3

- Entrada/saída I2S estéreo com múltiplas opções de saída; interface I2C para configurar e gerenciar parâmetros do XVF3800.
- Reset do XIAO via pino de IO
- Interface e pads para solda

### Pinagem

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### Antena WIFI On-Board

Ao usar o XIAO ESP32S3, nenhuma antena externa é necessária — basta conectar os slots da antena para usar a antena PCB integrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### Visão Geral dos GPIO

O reSpeaker XVF3800 expõe 3 pinos de entrada (GPI) e 5 pinos de saída (GPO) para controle externo. Você pode usá-los para ler estados de botões ou controlar hardware como o LED de mute, amplificador ou LEDs.

| **Nome do Pino** | **Direção** | **Função**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Entrada (RO)    | Status do botão de mute (alto quando solto)              |
| X1D13        | Entrada (RO)    | Flutuante                                             |
| X1D34        | Entrada (RO)    | Flutuante                                             |
| X0D11        | Saída (RW)   | Flutuante                                             |
| X0D30        | Saída (RW)   | Controle de LED de mute + mute do microfone (alto = mudo)            |
| X0D31        | Saída (RW)   | Habilitar amplificador (baixo = habilitado)                     |
| X0D33        | Saída (RW)   | Controle de alimentação do LED WS2812 (alto = ligado)                 |
| X0D39        | Saída (RW)   | Flutuante                                             |

## Grave o firmware I2S

Para usar o reSpeaker XVF3800 com o XIAO ESP32S3, certifique-se de que o firmware do reSpeaker XVF3800 seja a versão I2S.
Verifique Firmware Flash para gravar o firmware I2S mais recente. Por favor, visite [esta seção](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#atualizar-firmware).

:::note
Para funcionar com o XIAO ESP32S3, você precisa gravar o firmware I2S. No entanto, ele não suporta USB DFU. Se você já estiver usando firmware USB, pode entrar no modo de segurança para gravar o firmware. Esse método é mais flexível porque suporta tanto USB DFU quanto I2C DFU. Para saber mais, visite esta [seção](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#modo-de-segurança).
:::

## Preparação de Software

### Instalar o Arduino IDE

Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional

 <div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '1.25rem' }}
  >
    <strong>Download Arduino IDE</strong>
  </a>
</div>

<br />

#### Instalar Arduino-ESP32

Para iniciar o processo de instalação usando o Boards Manager, siga estas etapas:

- Instale a versão atual do Arduino IDE de nível 1.8 ou superior. A versão atual está no site [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicie o Arduino e abra a janela `Settings`.

- Insira um dos links de release acima no campo Additional Board Manager URLs. Você pode adicionar múltiplas URLs, separando-as com vírgulas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abra o `Boards Manager` na barra lateral, pesquise `ESP32` e clique em `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicie o Arduino IDE.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
