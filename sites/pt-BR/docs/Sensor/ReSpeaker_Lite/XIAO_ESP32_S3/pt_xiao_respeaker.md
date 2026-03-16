---
description: Integração do ReSpeaker Lite com o XIAO ESP32S3
title: Kit de Assistente de Voz ReSpeaker Lite
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_respeaker
sku: 110061601
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_respeaker/
---



Alimentado pelo chipset de Áudio e Som com IA XMOS XU316, este é um kit de desenvolvimento de assistente de voz open source de alto desempenho. O kit integra o array de microfone duplo ReSpeaker Lite e um poderoso processador [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html), oferecendo capacidades excepcionais de reconhecimento de voz, redução de ruído e processamento de voz. Este kit fornece integração de firmware com o Home Assistant via ESPHome, tornando‑o ideal para assistentes de voz inteligentes e aplicações de automação residencial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

### Recursos

- **Controlador ESP32 pré-soldado**: Um poderoso XIAO ESP32S3 vem pré-soldado através dos pinos I2S, oferecendo uma experiência sem solda para desenvolvimento e integração futuros.
- **Array de Microfone Duplo para Captura de Voz em Campo Distante**: Os 2 microfones digitais de alto desempenho capturam e extraem fala e voz em campo distante (até 3 metros) mesmo em ambientes ruidosos, pois cancelam ruído pontual usando duas entradas de microfone.
- **Algoritmos de IA ASR Embarcados**: Alimentado pelo chip de som e áudio com IA XMOS XU-316, o kit inclui algoritmos de Compreensão de Linguagem Natural para Cancelamento de Interferência (IC), Cancelamento de Eco Acústico, Supressão de Ruído e Controle Automático de Ganho (AGC), possibilitando captura de voz de alta qualidade.
- **Apostando no Open Source**: Como um hardware open source, é compatível com Arduino, PlatformIO, MicroPython, CircuitPython para desenvolvimento adicional.
- **Compatível com Assistentes de Voz Populares**: Este kit permite que você construa seu próprio processador de linguagem natural e o conecte ao Home Assitant via ESPHome, Amazon Alexa Voice Service, Google Assistant ou serviço de Cloud Speech-to-Text, permitindo que você faça perguntas e envie comandos de voz para seus programas.
- **LED RGB Embarcado**: O kit apresenta um LED RGB WS2812 programável, suportando efeitos personalizados e oferecendo uma interface visual para suas aplicações.

### Especificação

|**Array de Microfone Duplo**|Fornece entrada de áudio de alta qualidade.|
| :- | :- |
|**Luz Indicadora de Alimentação**|Acende quando está ligado.|
|**Luz RGB**|WS2812 programável, fornece feedback visual.|
|**Luz Indicadora de Mudo**|Acende em vermelho quando o botão de mudo é pressionado.|
|**Botão USR**|Botão definido pelo usuário.|
|**Botão de Mudo**|Silencia a entrada de áudio quando pressionado.|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|Para desenvolvimento e integração adicionais.|
|**Processador Central XU316**|Responsável pelo processamento e transmissão de áudio.|
|**Ilha de Solda para Fonte de Alimentação Externa**|Suporta fonte de alimentação externa de 5V.|
|**Porta USB Type-C**|Usada para alimentação e transmissão de dados.|
|**Conector de Alto‑falante**|Para saída de áudio. Suporta alto‑falantes com amplificador de 5W.|
|**Conector de fone de ouvido 3,5 mm**|Saída de áudio, podemos conectar alto‑falantes ativos ou fones de ouvido nesta porta.|
|**Ilha de alimentação externa 1** |Pinos de IO não utilizados no XU316.|
|**Ilha de alimentação externa 2**|Pinos de IO não utilizados no XIAO ESP32.|
|**JTAG**|Para depuração e programação do XU316.|

### Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### Pinagem

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Array de Microfone Duplo**|Fornece entrada de áudio de alta qualidade.|
| :- | :- | :- |
|**2**|**Luz Indicadora de Alimentação**|Acende quando está ligado.|
|**3**|**Luz RGB**|WS2812 programável, fornece interface visual|
|**4**|**Luz Indicadora de Mudo**|Acende em vermelho quando o botão de mudo é pressionado.|
|**5**|**Botão USR**|Botão definido pelo usuário.|
|**6**|**Botão de Mudo**|Silencia a entrada de áudio quando pressionado.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para desenvolvimento e integração adicionais.|
|**8**|**Processador Central XU316**|Responsável pelo processamento e transmissão de áudio.|
|**9**|**Ilha de Solda para Fonte de Alimentação Externa**|Suporta fonte de alimentação externa de 5V.|
|**10**|**Porta USB Type-C**|Usada para alimentação e transmissão de dados.|
|**11**|**Conector de Alto‑falante**|Para saída de áudio. Suporta alto‑falantes com amplificador de 5W.|
|**12**|**Conector de fone de ouvido 3,5 mm**|Saída de áudio, podemos conectar alto‑falantes ativos ou fones de ouvido nesta porta.|
|**13**|**Ilha de alimentação externa 1**|Pinos de IO não utilizados no XIAO ESP32.|
|**14**|**Ilha de alimentação externa 2**|Pinos de IO não utilizados no XU316.|
|**15**|**JTAG**|Para depuração e programação do XU316.|

### Gravar o firmware I2S

Para usar o ReSpeaker Lite com o XIAO ESP32S3, certifique‑se de que o firmware do ReSpeaker Lite seja a versão I2S.

Consulte [Firmware Flash](https://wiki.seeedstudio.com/pt-br/reSpeaker_usb_v3/#update-firmware) para gravar o firmware I2S mais recente.

### Preparação de software

#### Instalar Arduino IDE

 Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional.

 <div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
 </div>

 <br></br>

#### Instalar Arduino-ESP32

Para iniciar o processo de instalação usando o Boards Manager, siga estes passos:

- Instale a versão atual do Arduino IDE de upstream na versão 1.8 ou posterior. A versão atual está no site [arduino.cc](https://www.arduino.cc/en/Main/Software).

- Inicie o Arduino e abra a janela `Settings`.

- Insira um dos links de lançamento acima no campo Additional Board Manager URLs. Você pode adicionar múltiplas URLs, separando‑as com vírgulas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- Abra o `Boards Manager` na barra lateral, procure por `ESP32` e clique em `INSTALL`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Reinicie o Arduino IDE.

#### Instalar a Biblioteca ReSpeaker Lite

Fornecemos uma biblioteca para que os usuários possam começar rapidamente:

Clone este projeto na pasta de bibliotecas do Arduino, por exemplo, com o seguinte comando:

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git
```

Ou baixe a biblioteca como um arquivo `zip` e adicione‑a à biblioteca no Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>

### FAQ

- **Não é possível detectar o dispositivo de som USB ReSpeaker Lite no Windows após gravar o firmware USB?**

- Abra o menu iniciar e digite `Device manager`. Encontre o dispositivo `ReSpeaker Lite`, clique com o botão direito nele e selecione `Uninstall device`. Selecione `Delete the driver software for this device` e clique em `Uninstall`. Depois disso, reinicie o dispositivo e o Windows irá reinstalar o driver de placa de som correto para ele.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)
