---
description: reSpeaker Flex é um poderoso sistema de voz modular com XMOS XVF3800, com arrays de 4 microfones circulares e lineares intercambiáveis para captura de áudio precisa em 360° ou direcional — perfeito para robótica e dispositivos inteligentes.
title: Introdução ao reSpeaker Flex com Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/8/2026
  author: Kasun Thushara
createdAt: '2026-04-08'
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_xiao_introduction/
---

# reSpeaker Flex com XIAO ESP32S3

## Visão geral

A versão reSpeaker Flex ESP32 integra um módulo XIAO ESP32S3 pré-soldado na placa principal, fornecendo conectividade Wi-Fi e Bluetooth integrada para controle sem fio e processamento de borda. Alimentado pelo processador de voz XMOS XVF3800, o sistema mantém a mesma arquitetura modular em que a placa do array de microfones se conecta à placa principal por meio de um cabo FPC flexível de 24 pinos, permitindo posicionamento flexível dentro de gabinetes de dispositivos. Ele suporta arrays de 4 microfones circulares e lineares, permitindo captura omnidirecional de 360° ou captação direcional frontal. O sistema pode operar via USB (UAC 2.0) ou I2S, enquanto o ESP32S3 integrado permite conectividade IoT, controle local e integração mais fácil com aplicações embarcadas.


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear com XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular com XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## Recursos 

- **Design modular dividido**: Placa principal e placa do array de microfones são fisicamente separadas, conectadas via cabo flat FPC para posicionamento flexível em qualquer chassi de produto

- **Opções de configuração de microfones**: Troque entre array circular de 4 microfones (captação em 360°, espaçamento de 44 mm) ou array linear de 4 microfones (diretividade frontal de 180°, espaçamento de 33 mm) usando a mesma placa principal

- **Processamento de áudio XMOS XVF3800**: Conjunto completo de AEC, AGC, DoA, beamforming multicanal, VAD, supressão de ruído e desreverberação

- **Modos duplos de operação**: USB UAC 2.0 para plug-and-play com PCs e SBCs; modo I2S para integração embarcada direta

- **Conectividade USB dupla**: Porta USB-C e conector com trava PH2.0 suportam UAC 2.0 e atualização de firmware DFU

- **Amplificador de alto-falante integrado**: Suporta acionamento de alto-falantes de 10W 4 Ohms via conector JST, com saída de fone de ouvido AUX de 3,5 mm

- **Suporte ao XIAO ESP32S3**: Módulo pré-soldado adiciona Wi-Fi/Bluetooth, com barramentos I2S e I2C conectados diretamente ao XVF3800 para controle sem fio e encaminhamento de áudio

- **Flexibilidade de firmware**: Variantes de firmware USB duplo (2 canais e 6 canais), firmware I2S, atualização DFU via dfu-util e persistência de configuração entre ciclos de energia

- **SDK em Python**: Formato de gravação, volume, parâmetros de algoritmo e roteamento de canais ajustáveis via Python


## Principais componentes 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main.jpg" alt="pir" width={800} height="auto" /></p>


### Placa principal

| Componente / Recurso | Descrição |
|--------------------|------------|
| **Processador de áudio principal** | XMOS XVF3800 (firmware v3.2.1), lida com todo o DSP de áudio incluindo AEC, beamforming, DoA e supressão de ruído |
| **Codec de áudio** | TLV320AIC3104, realiza conversão de áudio e saída DAC |
| **Interface do array de microfones FPC** | Conector FPC de 24 pinos com trava, suporta arrays de até 8 microfones com 2 linhas de GPIO |
| **Porta USB-C** | Áudio UAC 2.0, atualização de firmware DFU e alimentação |
| **Porta PH2.0** | Conector com trava; fornece o mesmo áudio UAC 2.0 e suporte DFU que a porta USB-C |
| **Conector AUX de 3,5 mm** | Saída lateral de fone de ouvido acionada pelo DAC integrado |
| **Conector JST para alto-falante** | Conector montado na vertical que aciona alto-falantes de até 10W a 4Ω; ilha de solda preservada para conexão de alto-falante cabeado |
| **Terminal de alimentação externa** | Fornece 12V para todo o sistema e suporta cargas de alto-falante de 10W (prioridade P1) |
| **Botão RST** | Reset de hardware para o XVF3800 |
| **Botão SafeMode (Boot)** | Mantenha pressionado durante a energização para entrar em modo seguro para recuperação de firmware |
| **LED PWR** | Indicador verde de ligado |
| **Ilha de depuração** | Ilha reservada para XMOS XTAG4 (não soldada de fábrica) |
| **Headers de IO do XMOS 3800** | Pinos/ilhas expostos para I2C, I2S, 5V/GND, pinos de alto-falante e IO restante do XVF3800 |
| **Orifícios de fixação** | 4 × furos de montagem M3 |
| **XIAO ESP32S3** | Suporta soldagem do XIAO ESP32S3 quando usado como dispositivo host |
| **GPIO do XIAO ESP32S3** | GPIO restante pode ser usado para IO e expansão de periféricos |

### Placa do array circular 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Recurso | Descrição |
|--------------------|------------|
| **Microfones** | 4× microfones PDM MEMS com espaçamento de 44 mm dispostos em um layout circular |
| **Padrão de captação** | Captura de áudio omnidirecional em 360° |
| **Interface** | Conector FPC para a placa principal |
| **Fixação** | 3 × furos de montagem M3 para fixação em gabinete ou carcaça |




### Placa do array linear

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Recurso | Descrição |
|--------------------|------------|
| **Microfones** | 4× microfones PDM MEMS com espaçamento de 33 mm dispostos em um layout linear |
| **Padrão de captação** | Padrão de captação frontal de aproximadamente 180°, com som traseiro suprimido |
| **Interface** | Conector FPC; o cabo pode ser roteado pela lateral ou pela parte traseira |
| **Fixação** | 2 × furos de montagem M3 |

:::note
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

### Suporte ao XIAO ESP32S3 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>


A placa principal do reSpeaker Flex inclui uma área dedicada para soldagem de um módulo Seeed Studio XIAO ESP32S3, permitindo conectividade Wi-Fi e Bluetooth além do pipeline de processamento de áudio do XVF3800. Os SKUs que incluem XIAO (-C4-1 e -L4-1) são enviados com este módulo pré-instalado; os SKUs base (-C4-0 e -L4-0) deixam a área sem população.
Quando o XIAO é instalado, as seguintes conexões são feitas entre ele e o XVF3800:

- **Barramento I2S** — barramento duplo (reprodução e gravação) com BCLK, MCLK e LRCLK compartilhados para streaming de áudio em ambas as direções
- **Barramento I2C** — para leitura e escrita de parâmetros de configuração do XVF3800 a partir do XIAO
- **Linha RST** — o XIAO pode acionar um reset de hardware no XVF3800 por meio de um pino de IO dedicado
- **IO restante do XIAO** — disponibilizado em headers/ilhas identificados para expansão pelo usuário

### Header de pinos 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>


### Cabo FPC de 24 vias 

A interface do array de microfones FPC é um conector de 24 pinos, passo de 0,5 mm, com trava, e o cabo flat FPC de 20 cm incluído na caixa é chaveado para este conector.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| Pino | Nome do sinal | Tipo | Descrição da função | Notas |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Power | Alimentação dos microfones | Alimentação de 3,3V |
| 2 | MIC_VDD | Power | Alimentação dos microfones | Pino duplo para maior estabilidade de alimentação |
| 3 | GND | GND | Terra de retorno de alimentação | GND de alimentação |
| 4 | MIC_CLK | Out | Sinal de clock global | Sinal principal, 2–4 MHz |
| 5 | GND | GND | Terra de blindagem do clock | Terra dedicado para o clock |
| 6 | MIC_D1 | In | Linha de dados 1 | Microfone CH1 |
| 7 | GND | GND | Terra de isolamento de D1 | |
| 8 | MIC_D2 | In | Linha de dados 2 | Microfone CH2 |
| 9 | GND | GND | Terra de isolamento de D2 | |
| 10 | MIC_D3 | In | Linha de dados 3 | Microfone CH3 |
| 11 | GND | GND | Terra de isolamento de D3 | |
| 12 | MIC_D4 | In | Linha de dados 4 | Microfone CH4 |
| 13 | GND | GND | Terra de isolamento de D4 | |
| 14 | MIC_D5 | In | Linha de dados 5 | Microfone CH5 |
| 15 | GND | GND | Terra de isolamento de D5 | |
| 16 | MIC_D6 | In | Linha de dados 6 | Microfone CH6 |
| 17 | GND | GND | Terra de isolamento de D6 | |
| 18 | MIC_D7 | In | Linha de dados 7 | Microfone CH7 |
| 19 | GND | GND | Terra de isolamento de D7 | |
| 20 | MIC_D8 | In | Linha de dados 8 | Microfone CH8 |
| 21 | GND | GND | Terra de isolamento de D8 | |
| 22 | GPIO_1 | I/O | Entrada/saída de uso geral | Função de expansão |
| 23 | GPIO_2 | I/O | Entrada/saída de uso geral | Função de expansão |
| 24 | GND | GND | Terra de blindagem de GPIO | Absorve ruído de GPIO |

## Introdução

### Preparação de hardware 

- Cabo USB Tipo-C 
- Computador host ou Raspberry Pi 


### Grave o firmware I2S 

Para usar o reSpeaker Flex com XIAO ESP32S3, certifique-se de que o firmware do reSpeaker Flex seja a versão `I2S`. Consulte Firmware Flash para gravar o firmware `I2S` mais recente. Por favor, visite a [seção](https://wiki.seeedstudio.com/pt-br/respeaker_flex_introduction/#atualizar-firmware)


:::note
Normalmente, o reSpeaker Flex com o XIAO ESP32S3 vem com o firmware de fábrica configurado para a versão I2S.
:::

## Preparação de Software

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
    <strong>Download Arduino IDE</strong>
  </a>
</div>

<br />

#### Instalar Arduino-ESP32

Para iniciar o processo de instalação usando o Boards Manager, siga estes passos:

- Instale a versão atual do Arduino IDE a partir do nível 1.8 ou superior. A versão atual está disponível no site [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicie o Arduino e abra a janela `Settings`.

- Insira um dos links de release acima no campo Additional Board Manager URLs. Você pode adicionar vários URLs, separando-os com vírgulas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abra o `Boards Manager` na barra lateral, procure por `ESP32` e clique em `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicie o Arduino IDE.

### Biblioteca de Suporte 

:::note
Instale a [Arduino Audio Tools library](https://github.com/pschatzmann/arduino-audio-tools) para poder executar os exemplos fornecidos.
:::

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


