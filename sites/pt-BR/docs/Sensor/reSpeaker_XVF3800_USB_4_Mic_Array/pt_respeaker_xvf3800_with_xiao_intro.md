---
description: O ReSpeaker XVF3800 USB 4-Mic Array é uma matriz circular de 4 microfones profissional com AEC, formação de feixe, supressão de ruído e captura de voz em 360°. Emparelhado com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra integração perfeita e flexibilidade em modo duplo.
title: Introdução ao reSpeaker XVF3800 USB Mic Array com XIAO ESP32S3
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
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_getting_started/
---

# reSpeaker XVF3800 USB 4 Microphone Array com XIAO ESP32S3

## Visão geral

**O ReSpeaker XVF3800 USB 4-Mic Array** é uma matriz circular profissional de 4 microfones baseada no XMOS XVF3800. Ele oferece AEC, AGC, DoA, formação de feixe, VAD, supressão de ruído, desreverberação e captura de voz em 360° (até 5 metros). Também suporta modos de operação duplos, tornando-o ideal para aplicações avançadas de voz. Quando combinado com o Xiao ESP32S3, o controle do ReSpeaker XVF3800 USB se torna ainda mais poderoso, desbloqueando possibilidades infinitas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

- **Atualização de chip** :De XVF3000 para XVF3800

- **Matriz de quatro microfones** :4 microfones de alto desempenho em padrão circular para captura de voz em campo distante de 360° até 5 metros

- **Processamento de áudio avançado** :Baseado no XVF3800 com AEC, formação de múltiplos feixes, desreverberação, detecção de DoA, supressão dinâmica de ruído, faixa de AGC de 60 dB

- **Número de série exclusivo do dispositivo** :SN integrado permite implantações com múltiplos dispositivos e gerenciamento avançado de dispositivos

- **Modos de operação duplos** :Modo USB plug-and-play para conectividade instantânea com PC e modo INT-Device (I2S) para integração com sistemas embarcados — configurável via comandos USB ou I2C alternando o firmware conforme necessário

- **Compatível com código aberto** :Funciona com hosts USB (Windows, macOS, Raspberry Pi OS) e hosts I2S (XIAO Series, ESP32, Arduino).

- **Feedback visual** :LEDs RGB programáveis e indicadores de status mostram estados do dispositivo e atividade de voz

- **Qualidade de áudio igual ou melhor** :em comparação com o modelo anterior

## Introdução (firmware I2S vs USB)

Por padrão, o reSpeaker XVF3800 USB 4 Microphone Array com XIAO ESP32S3 usa o **firmware I2S**. No modo I2S ele **NÃO** é detectado como um **dispositivo USB**.

Você pode alternar entre o modo I2S e USB instalando o firmware correspondente. Use o modo de segurança para conectar o dispositivo como dispositivo USB e gravar o firmware para atualizar o firmware ou alternar entre os modos.

### Gravar o firmware I2S

Para usar o reSpeaker XVF3800 com XIAO ESP32S3, certifique-se de que o firmware do reSpeaker XVF3800 seja a versão I2S e atualize para a versão mais recente.
Por favor, visite esta [seção](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#atualizar-firmware).

:::note
Para funcionar com o XIAO ESP32S3, você precisa gravar o firmware I2S. No entanto, o firmware I2S não suporta USB DFU (o dispositivo não é detectado como dispositivo USB). Altere para o modo de segurança, pois ele suporta tanto USB DFU quanto I2C DFU. Para saber mais, visite esta [seção](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#modo-de-segurança).
:::

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Principais componentes

| **Componente / Recurso**      | **Descrição**                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Processador de áudio principal** | **XMOS XVF3800**, realiza o processamento de áudio incluindo AEC, formação de feixe, supressão de ruído, etc. |
| **Matriz de microfones**      | **Quatro microfones PDM MEMS** em padrão circular, suportando **captura de voz em campo distante de 360° (5 m)**. |
| **Codec de áudio**            | **TLV320AIC3104**, realiza a conversão e saída de áudio.                                             |
| **LEDs RGB**                  | **12x WS2812** LEDs RGB endereçáveis individualmente para feedback visual (por exemplo, status, atividade de voz). |
| **Botão de mute**             | Pressione para **mutar/desmutar** a entrada do microfone.                                            |
| **LED indicador de mute**     | Acende (normalmente vermelho) para indicar que o áudio está mutado.                                  |
| **Botão de reset**            | Reset de hardware para a placa/sistema.                                                              |
| **Porta USB Type-C**          | Usada tanto para **alimentação quanto dados** (compatível com USB Audio Class 2.0).                  |
| **Conector de fone de ouvido 3,5 mm AUX** | Saída de áudio para fones de ouvido ou caixas de som ativas.                                        |
| **Conector de alto-falante**  | **Interface de alto-falante JST**, suporta **alto-falantes amplificados de 5 W**.                   |
| **Pads de depuração**         | Acesso de depuração para **XTAG4** ou outros programadores.                                          |
| **Headers I2C e I2S**         | Headers expostos para **comunicação I2C e I2S** com dispositivos externos.                           |
| **Pads de IO não utilizados (XIAO)** | Pads de I/O adicionais conectados ao módulo XIAO.                                                   |
| **Comunicação I2S e I2C**     | Suporta conexão a hosts externos como Raspberry Pi, PC, etc. usando esses protocolos.               |
| **Modos USB e INT-Device**    | Operação em modo duplo: USB plug-and-play ou modo de dispositivo interno INT via I2S.               |
| **Número de série exclusivo** | **SN do dispositivo** integrado para identificação e gerenciamento de múltiplos dispositivos.        |
| **Compatibilidade com código aberto** | Funciona com **Arduino, Raspberry Pi, PC/Mac** e é compatível com a **XIAO Series**.                |
| **Recursos avançados de áudio** | AEC, formação de feixe, desreverberação, **detecção de DoA**, supressão de ruído baseada em DNN, AGC de 60 dB. |
| **Feedback visual**           | Estado do dispositivo e atividade de áudio exibidos por meio de **padrões de LED RGB** e **indicadores de status**. |
| **Qualidade de áudio**        | Igual ou melhor que os **projetos anteriores baseados em XVF3000**.                                  |

### Suporte ao XIAO ESP32S3

- Entrada/saída I2S estéreo com múltiplas opções de saída; interface I2C para configurar e gerenciar parâmetros do XVF3800.
- Reset do XIAO via pino de IO
- Interface e pads de solda

### Pinagem

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

### Antena Wi-Fi onboard

Ao usar o XIAO ESP32S3, nenhuma antena externa é necessária — basta conectar os slots de antena para usar a antena PCB integrada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/antenna.PNG" alt="pir" width={600} height="auto" /></p>

### Visão geral dos GPIO

O reSpeaker XVF3800 expõe 3 pinos de entrada (GPI) e 5 pinos de saída (GPO) para controle externo. Você pode usá-los para ler estados de botões ou controlar hardware como o LED de mute, amplificador ou LEDs.

| **Nome do pino** | **Direção**  | **Função**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Entrada (RO)  | Status do botão de mute (alto quando liberado)       |
| X1D13        | Entrada (RO)  | Flutuante                                           |
| X1D34        | Entrada (RO)  | Flutuante                                           |
| X0D11        | Saída (RW)    | Flutuante                                           |
| X0D30        | Saída (RW)    | Controle do LED de mute + mute do microfone (alto = mute) |
| X0D31        | Saída (RW)    | Habilitação do amplificador (baixo = habilitado)     |
| X0D33        | Saída (RW)    | Controle de alimentação do LED WS2812 (alto = ligado) |
| X0D39        | Saída (RW)    | Flutuante                                           |

## Preparação de software

### Instalar Arduino IDE

Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional

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

Para iniciar o processo de instalação usando o Boards Manager, siga estas etapas:

- Instale a versão atual do Arduino IDE upstream na versão 1.8 ou posterior. A versão atual está disponível no site [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicie o Arduino e abra a janela `Settings`.

- Insira um dos links de release acima no campo Additional Board Manager URLs. Você pode adicionar vários URLs, separando-os com vírgulas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abra o `Boards Manager` na barra lateral, pesquise `ESP32` e clique em `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicie o Arduino IDE.

### Biblioteca de suporte 

:::note
Instale a [biblioteca Arduino Audio Tools](https://github.com/pschatzmann/arduino-audio-tools) para executar os exemplos fornecidos.
:::

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
