---
description: Aprenda como implementar detecção de palavra‑chave e NLU usando o ReSpeaker Flex com o XMOS XVF3800, com matrizes circulares e lineares de 4 microfones para robótica e dispositivos inteligentes.
title: reSpeaker Flex Controle de palavra de ativação e NLU com Pico-voice
keywords:
  - reSpeaker
  - python
  - picovoice
  - NLU
  - Keyword Spotting
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg
slug: /respeaker_flex_picovoice_nlu_keyword_spotting
sku: 114993700
last_update:
  date: 4/1/2026
  author: Kasun Thushara
createdAt: '2026-04-01'
updatedAt: '2026-04-01'
url: https://wiki.seeedstudio.com/pt-br/respeaker_flex_picovoice_nlu_keyword_spotting/
---
## Introdução 

[Picovoice](https://picovoice.ai/) é uma empresa especializada em IA de voz em dispositivo, fornecendo um stack completo de tecnologias como detecção de palavra de ativação, conversão de fala em texto e reconhecimento de intenção que são executadas localmente em dispositivos embarcados e de borda sem depender da nuvem. As soluções são projetadas para baixa latência, privacidade e implantação multiplataforma, tornando-as adequadas para sistemas de IoT e robótica. 

[Porcupine](https://picovoice.ai/docs/porcupine/) é o mecanismo de detecção de palavra de ativação leve e altamente preciso da Picovoice, construído usando redes neurais profundas e otimizado para sistemas embarcados. Ele permite aplicações em modo de escuta contínua mantendo baixo custo computacional e pode ser executado em plataformas como microcontroladores, Raspberry Pi, dispositivos móveis e desktop. 

Picovoice [Rhino](https://picovoice.ai/docs/rhino/) é um mecanismo de fala‑para‑intenção que converte diretamente comandos falados em intenções estruturadas sem exigir uma etapa separada de fala‑para‑texto. Ele usa uma abordagem de aprendizado profundo em etapa única, combinando reconhecimento de fala e compreensão de linguagem natural para melhorar a precisão e reduzir a latência.

## O que são NLP, NLU e STT?

Processamento de Linguagem Natural (NLP) é o campo amplo que permite que máquinas processem a linguagem humana, enquanto Compreensão de Linguagem Natural (NLU) é um subconjunto que se concentra especificamente em extrair o significado ou a intenção dessa linguagem. Fala‑para‑Texto (STT) converte áudio falado em texto, que então é normalmente passado para a NLU para entender a intenção do usuário. O Picovoice Rhino adota uma abordagem diferente ao pular o STT e converter diretamente a fala em intenção (fala‑para‑intenção), melhorando a eficiência e a precisão.

A detecção de palavra‑chave (palavra de ativação) (por exemplo, “Hey device”) é o primeiro passo que ativa o sistema e, após a ativação, ou o pipeline STT → NLU ou fala‑para‑intenção (Rhino) é usado para entender e executar o comando.

## Objetivo

Esta demonstração mostra como a detecção de palavra de ativação usando o Picovoice Porcupine funciona em conjunto com o Picovoice Rhino para um processamento eficiente de fala‑para‑intenção em um Raspberry Pi. O sistema primeiro escuta uma palavra‑chave para ativar e, uma vez acionado, converte diretamente comandos falados em intenções acionáveis sem depender de processamento pesado na nuvem. Essa abordagem é altamente otimizada para dispositivos embarcados de poucos recursos, tornando‑a ideal para aplicações de robótica e IA de borda. Ela permite interação por voz em tempo real e baixa latência, garantindo desempenho rápido e confiável mesmo em hardware limitado.

## Hardware necessário 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Detecção de palavra de ativação 

Uma palavra de ativação em sistemas robóticos embarcados permite **processamento orientado a eventos**, permitindo que o dispositivo permaneça em um estado de escuta de baixo consumo e só ative o processamento pesado de fala quando necessário. Isso reduz significativamente o consumo de CPU, memória e energia em hardware com recursos limitados, como microcontroladores e dispositivos de borda. Ela também atua como um **mecanismo de controle** no pipeline de áudio, filtrando ruídos irrelevantes e evitando ativações desnecessárias do reconhecimento de fala e da lógica de controle. Do ponto de vista de privacidade, a detecção de palavra de ativação garante que o áudio só seja capturado ou transmitido após a detecção de uma intenção explícita do usuário, mantendo a maior parte do processamento de dados no dispositivo. Além disso, melhora a interação humano‑robô ao fornecer um gatilho natural para engajamento, ajudando o sistema a distinguir entre conversas de ambiente e comandos direcionados.

Usar uma palavra de ativação junto com um sistema avançado de matriz de microfones como o reSpeaker Flex permite uma interação por voz **eficiente e confiável** em sistemas incorporados. A palavra de ativação garante que o sistema só ative o processamento completo de fala quando necessário, reduzindo o consumo de energia e o uso de CPU no hardware embarcado. A matriz de microfones aprimora isso fornecendo **formação de feixe, supressão de ruído e detecção de direção na matriz de microfones circular**, permitindo reconhecimento preciso da palavra de ativação mesmo em ambientes ruidosos. Essa combinação minimiza disparos falsos e melhora a capacidade de resposta geral do sistema. Ela também oferece melhor interação humano‑robô ao garantir que o dispositivo responda apenas quando for explicitamente chamado e possa focar no locutor correto.

## Como usar palavra de ativação com Pico-voice

Cadastre‑se no [Picovoice](https://console.picovoice.ai/) e você receberá uma Access Key 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic1.png" alt="pir" width={800} height="auto" /></p>


### Opção A : Palavras‑chave integradas 

 O Porcupine fornece várias opções de palavras de ativação integradas, como **AMERICANO, BLUEBERRY, BUMBLEBEE, GRAPEFRUIT, GRASSHOPPER, PICOVOICE, PORCUPINE, TERMINATOR e JARVIS,** que podem ser usadas diretamente com uma chave de acesso válida. Com a chave de acesso, essas palavras‑chave podem ser facilmente integradas ao seu aplicativo sem treinar um modelo personalizado.

Nesta configuração, estamos usando um **Raspberry Pi 5** como dispositivo host, e a detecção de palavra de ativação será executada localmente no dispositivo. O sistema de microfone baseado em XMOS é gravado com o **firmware de áudio USB**, permitindo que ele seja reconhecido como um dispositivo de entrada de áudio padrão pelo sistema operacional.

Para começar, é necessário instalar no ambiente as bibliotecas e dependências exigidas pelo Porcupine.

```bash
pip install pvporcupine
```

Após a instalação, um código de exemplo pode ser usado para inicializar o gravador de áudio, carregar a palavra‑chave selecionada e escutar continuamente a palavra de ativação. Quando a palavra‑chave for detectada, o sistema poderá acionar ações adicionais, como gravar ou processar comandos de voz.

```python
import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keywords=["porcupine"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

### Opção B: Palavras‑chave personalizadas 

Navegue até o Picovoice Console e abra a página de palavra de ativação personalizada. Selecione o idioma de sua preferência e defina uma palavra de ativação, por exemplo “hi flex”. Você pode testar a palavra de ativação no console para verificar o desempenho de detecção.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic2.png" alt="pir" width={400} height="auto" /></p>

Quando estiver satisfeito, clique em Train para gerar o modelo. Em seguida, selecione sua plataforma de destino — aqui escolhemos Raspberry Pi. Por fim, baixe o arquivo .ppn gerado, que será usado em seu aplicativo para detecção de palavra de ativação personalizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic3.png" alt="pir" width={600} height="auto" /></p>

**Código de exemplo**

```python

import pvporcupine
from pvrecorder import PvRecorder

access_key = "YOUR_ACCESS_KEY"

porcupine = pvporcupine.create(
    access_key=access_key,
    keyword_paths=["/home/pi/porcupine_env/hi-flex_en_raspberry-pi_v4_0_0.ppn"]
)

recorder = PvRecorder(device_index=-1, frame_length=porcupine.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    result = porcupine.process(pcm)
    if result >= 0:
        print("Wake word detected!")

porcupine.delete()
recorder.stop()
recorder.delete()
```

## Fala para intenção 

Picovoice Rhino é um mecanismo de fala‑para‑intenção que converte diretamente comandos falados em intenções estruturadas sem exigir uma etapa separada de fala‑para‑texto. Ele usa uma **abordagem de aprendizado profundo em etapa única**, combinando reconhecimento de fala e compreensão de linguagem natural para melhorar a precisão e reduzir a latência. 
O Rhino é otimizado para **processamento em tempo real no dispositivo**, o que significa que funciona offline com zero atraso de rede e mantém todos os dados de voz privados. Ele é altamente eficiente e projetado para sistemas embarcados e de IoT como Raspberry Pi e microcontroladores. 
Além disso, o Rhino permite que desenvolvedores definam contextos personalizados com intenções e slots, permitindo que os sistemas entendam comandos específicos de domínio e acionem ações diretamente a partir da entrada de voz. 

### Criar um contexto 

Um contexto define o conjunto de comandos falados, intenções e slots para um domínio específico; aqui, criamos um contexto **“Bumblebee”** para controlar o ReSpeaker Flex usando comandos de voz. Navegue até o console Rhino Speech‑to‑Intent no Picovoice e crie um novo contexto chamado **Bumblebee** usando o template **“Empty”**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic4.png" alt="pir" width={600} height="auto" /></p>

### Criar intenções

No nível superior, um contexto é uma coleção de intenções que representam ações do usuário dentro de um domínio. Por exemplo, crie uma intenção chamada “Gesture” no contexto HiFlex para representar comandos de voz relacionados a gestos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic5.png" alt="pir" width={600} height="auto" /></p>

### Adicionando expressões a uma intenção

Um usuário pode expressar a mesma intenção de várias maneiras, e cada variação é chamada de expressão. Para a intenção **Gesture**, adicione expressões como **“wave your head” e “shake your antenna”**, pois ambas correspondem ao mesmo grupo de ações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic6.png" alt="pir" width={600} height="auto" /></p>

### Use slots para capturar variáveis


Use slots para capturar partes variáveis nas falas dos usuários. Neste caso, palavras como **“wave”** e **“shake”** representam um estado em mudança dentro do comando, portanto podem ser modeladas como uma variável. Crie um slot chamado **“commands”** no contexto do Rhino para capturar essas variações dinamicamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic8.png" alt="pir" width={800} height="auto" /></p>

Modifique as expressões existentes para incluir o slot recém-criado. Ao adicionar um slot, use o símbolo `$` para indicar um slot, depois selecione o tipo de slot desejado no menu suspenso de preenchimento automático e atribua a ele um nome.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic9.png" alt="pir" width={800} height="auto" /></p>

Se você estiver pronto, teste primeiro clicando em test

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic10.png" alt="pir" width={800} height="auto" /></p>

### Vamos baixar o modelo

Quando o design do contexto estiver concluído, clique no ícone de download no canto superior direito, selecione a plataforma de destino e clique em **“Download.”** O Picovoice Console irá treinar automaticamente o modelo Rhino para essa plataforma, o que normalmente leva cerca de 5–10 segundos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pico/pic11.png" alt="pir" width={800} height="auto" /></p>

### Código de Exemplo

```python
import pvporcupine
import pvrhino
from pvrecorder import PvRecorder

access_key = "ACCESS KEY"

rhino = pvrhino.create(
    access_key=access_key,
    context_path="/home/pi/porcupine_env/Bumblebee_en_raspberry-pi_v4_0_0.rhn",
)

recorder = PvRecorder(device_index=-1, frame_length=rhino.frame_length)
recorder.start()

print("Listening...")

while True:
    pcm = recorder.read()
    is_finalized = rhino.process(pcm)

    if is_finalized:
        inference = rhino.get_inference()
        if inference.is_understood:
            print("Intent:", inference.intent)
            print("Slots:", inference.slots)
        else:
            print("Didn't understand")

        rhino.reset()


```

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
