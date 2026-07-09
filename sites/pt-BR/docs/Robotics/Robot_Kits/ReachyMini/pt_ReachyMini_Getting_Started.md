---
description: Monte e controle o ReachyMini, um robô humanóide de mesa compacto e open-source para aprendizado de IA e robótica.
title: Introdução ao ReachyMini
keywords:
  - Lerobot
  - Huggingface
  - ReachyMini
  - Robotics
  - 3D Printing
  - Open Source
  - Humanoid Robot
  - Python
image: https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.webp
slug: /reachymini_getting_started
sku: null
translation:
  skip:
    - zh-CN
last_update:
  date: 1/7/2026
  author: TienjuiWong
createdAt: '2026-01-07'
updatedAt: '2026-01-12'
url: https://wiki.seeedstudio.com/pt-br/reachymini_getting_started/
---

<div style={{maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'}}>
  <video
    width="100%"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    style={{display: 'block'}}
    ref={(video) => { if (video) video.play().catch(() => {}); }}>
    <source src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/Reachy-mini-wake-up-companion.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🤖</font></span></strong>
</a>
</div>

O **Reachy Mini** é o primeiro robô de mesa open-source projetado para explorar a interação humano-robô e aplicações criativas personalizadas. Desenvolvido em colaboração pela **Pollen Robotics** e **Hugging Face**, este robô humanóide compacto leva capacidades de robótica em nível profissional para a sua mesa a um preço acessível.

Otimizado e fabricado pela **Seeed Studio**, o Reachy Mini combina interação física expressiva com capacidades modernas de IA. Seja para criar assistentes de voz, aplicações de visão computacional ou ferramentas educacionais, o Reachy Mini oferece uma plataforma completa para experimentação com IA no mundo real.

:::tip
O que você vai aprender

- Os principais recursos e a arquitetura do Reachy Mini
- Especificações de hardware e diferenças entre as versões Lite e Full
- Como montar e configurar o seu Reachy Mini
- Como controlar o robô usando o SDK em Python
- Como integrar com modelos e aplicações da Hugging Face
- Onde encontrar recursos e suporte da comunidade

:::

## Principais recursos e especificações

O Reachy Mini reúne capacidades impressionantes em um formato compacto de mesa.

| Recurso | Reachy Mini Lite | Reachy Mini (Full) |
|:---|:---|:---|
| **Preço** | US$ 299 + frete | US$ 449 + frete |
| **Computação** | Externa (compatível com Mac/Linux) | Raspberry Pi 4 integrada |
| **Conectividade** | Somente com fio | WiFi + Ethernet (via adaptador USB-C) |
| **Alimentação** | Alimentação com fio | Bateria + operação com fio |
| **Microfones** | 4 | 4 |
| **Alto-falante** | 5W | 5W |
| **Câmera** | Grande angular | Grande angular |
| **Acelerômetro** | Não | Sim |
| **Movimento da cabeça** | 6 DOF | 6 DOF |
| **Rotação do corpo** | Sim | Sim |
| **Antenas animadas** | 2 | 2 |
| **Altura** | 28 cm (11") | 28 cm (11") |
| **Peso** | 1,5 kg (3,3 lbs) | 1,5 kg (3,3 lbs) |

### Dimensões físicas

- **Altura:** 28 cm / 11 polegadas (aproximadamente 23 cm / 9 polegadas no modo de repouso)
- **Largura:** 16 cm / 6,3 polegadas
- **Peso:** 1,5 kg / 3,3 lbs

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '24px 0'}}>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachy_mini_dimensions.png" alt="Reachy Mini Dimensions" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Dimensões físicas</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/dof_table.png" alt="Degrees of Freedom Table" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Especificações de DOF</p>
  </div>
  <div align="center">
    <img width="100%" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/degrees_of_freedom.png" alt="Degrees of Freedom Diagram" />
    <p style={{fontSize: '0.85em', color: '#666', marginTop: '8px'}}>Faixa de movimento</p>
  </div>
</div>

## Projetado para interação humano-robô

O Reachy Mini é especificamente projetado para uma interação humano-robô expressiva e envolvente:

### Movimento expressivo

- **Cabeça com 6 graus de liberdade:** Movimentos de pan, tilt e roll com aparência natural
- **Rotação completa do corpo:** Rotação de 360 graus para posicionamento dinâmico
- **Antenas animadas:** Duas antenas expressivas que adicionam personalidade e feedback

### Sensoriamento multimodal

- **Matriz de 4 microfones:** Captura de áudio avançada para reconhecimento de voz e localização de som
- **Câmera grande angular:** Capacidades de visão computacional para detecção de rostos, reconhecimento de objetos e mais
- **Alto-falante de 5W:** Saída de áudio clara para síntese de fala e efeitos sonoros

### Aberto e extensível

- **Totalmente open-source:** Projeto de hardware, SDK de software e ambiente de simulação
- **SDK em Python:** Interface de programação intuitiva, com suporte a JavaScript e Scratch em breve
- **Integração com Hugging Face:** Acesso direto a modelos de IA de ponta para fala, visão e muito mais

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/wLftEz-QF1E"
      title="Reachy Mini Demo 1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/JvdBJZ-qR18"
      title="Reachy Mini Demo 2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/vRh8G46Nc5k"
      title="Reachy Mini Demo 3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px'}}>
    <iframe
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      src="https://www.youtube.com/embed/dMpLCGvE2A0"
      title="Reachy Mini Demo 4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
</div>

## Versões de hardware

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/plumber.png" alt="Reachy Mini Plumber" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

### Reachy Mini Lite (US$ 299)

A versão Lite é ideal para desenvolvedores que preferem computação externa ou que já possuem um ambiente de desenvolvimento preferido.

**Ideal para:**

- Desenvolvedores com sistemas Mac/Linux
- Usuários que desejam controle máximo sobre os recursos de computação
- Ambientes educacionais com laboratórios de informática existentes
- Projetos que exigem integração com infraestrutura existente

**Limitações:**

- Requer conexão com fio ao computador host
- Sem capacidade WiFi
- Sem acelerômetro
- Deve ser alimentado via tomada de parede

### Reachy Mini Full (US$ 449)

A versão Full inclui computação embarcada para total autonomia e operação sem fio.

**Ideal para:**

- Aplicações de robô autônomo
- Pesquisa e desenvolvimento sem fio
- Projetos que exigem dados de acelerômetro
- Demonstrações e implantações portáteis

**Recursos adicionais:**

- Computador Raspberry Pi 4 embarcado
- Conectividade WiFi
- Bateria para operação sem fio
- Acelerômetro integrado

## Guia de montagem

O Reachy Mini é vendido como um kit que leva aproximadamente **2 a 3 horas** para ser montado. O processo de montagem foi projetado para ser acessível a montadores de todos os níveis de experiência.

### Recursos de montagem

- **Guia de montagem interativo:** [Instruções online passo a passo](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)

:::warning[Dicas de montagem]

- Reserve de 2 a 3 horas em um espaço de trabalho limpo e bem iluminado
- É necessário um conjunto de pequenas chaves de fenda (incluídas no kit)
- Siga o guia online passo a passo para obter os melhores resultados
- Teste cada subsistema à medida que você monta (câmera, microfones, servos)

:::

## Introdução ao software

### Pré-requisitos

Dependendo da sua versão, você vai precisar de:

**Reachy Mini Lite:**

- Computador Mac ou Linux (suporte para Windows em breve)
- Python 3.8 ou superior
- Conexão USB

**Reachy Mini Full:**

- Rede WiFi ou conexão Ethernet
- Navegador web para acesso ao dashboard

### Instalação rápida

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/cowboy.png" alt="Reachy Mini Cowboy" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

Instale o SDK do Reachy Mini com o seguinte comando:

```bash
pip install reachy-mini
```

> **Dica avançada:** Instale o [uv](https://docs.astral.sh/uv/getting-started/installation/) para instalações de aplicativos 10 a 100 vezes mais rápidas (detectado automaticamente, com fallback para `pip`).

### Exemplo Hello World

Controle o seu robô com apenas algumas linhas de código:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

## Controle via dashboard

Um dashboard baseado na web oferece uma interface intuitiva para testar e controlar o Reachy Mini sem escrever código.

**Recursos:**

- Controle de motores em tempo real
- Exibição do feed da câmera
- Teste de microfones
- Gerenciamento de aplicativos
- Diagnóstico do sistema

Baixe o dashboard do [repositório oficial](https://github.com/pollen-robotics/reachy_mini) ou acesse-o diretamente pela rede local do seu Reachy Mini Full.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_webui.png"/>
</div>

## Ecossistema de Apps do Hugging Face

O Reachy Mini conta com um ecossistema em crescimento de aplicações prontas para uso, alimentadas pelo Hugging Face Spaces. Instale esses apps diretamente pelo dashboard do seu robô com um clique.

### Apps em Destaque

**App de Conversa**

- Interação em linguagem natural alimentada por Large Language Models
- Reconhecimento de voz e síntese de fala
- Personalidade e base de conhecimento personalizáveis

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-hand-tracking-app.jpg" alt="Reachy Mini Hand Tracking" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

**Hand Tracker**

- Rastreamento de mão em tempo real usando visão computacional
- O robô segue os movimentos da sua mão
- Ótimo para demonstrações e experimentos de interação

**Rádio**

- Transmissão de rádio controlada por voz
- Pedidos em linguagem natural para músicas e estações
- Demonstra as capacidades de processamento de áudio

**E muitos outros:**
Navegue pela coleção completa de apps no [Hugging Face Spaces](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini)

<div align="center">
    <img width="600" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/apps.png" alt="Reachy Mini Apps Ecosystem"/>
</div>

## Criando Aplicações Personalizadas

### SDK em Python

<div style={{float: 'right', marginLeft: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/reachy-conversation-app.jpg" alt="Reachy Mini Conversation" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

O SDK em Python oferece controle abrangente sobre todos os sistemas do Reachy Mini:

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Motor control
    mini.goto_target(head=pose, duration=1.0)

    # Camera access
    frame = mini.camera.get_frame()

    # Audio I/O
    mini.speaker.play_audio(audio_data)
    audio = mini.microphones.record(duration=5.0)

    # Accelerometer (Full version only)
    orientation = mini.imu.get_orientation()
```

### Integração de IA

O Reachy Mini se integra perfeitamente ao extenso ecossistema de modelos do Hugging Face:

- **Reconhecimento de Fala:** Whisper, Wav2Vec2
- **Síntese de Fala:** Bark, SpeechT5
- **Visão:** ViT, CLIP, YOLO
- **Linguagem:** modelos LLaMA, Mistral, GPT
- **Multimodal:** GPT-4V, LLaVA

### Publicando Apps

Compartilhe suas criações com a comunidade global do Reachy Mini:

1. Crie seu app usando o SDK
2. Crie um Space no Hugging Face
3. Adicione a tag `reachy-mini`
4. Publique e compartilhe com milhões de usuários do Hugging Face

## Desenvolvimento em Simulação

Prototipe e desenvolva aplicações para o Reachy Mini sem hardware usando o ambiente de simulação MuJoCo:

```bash
pip install reachy-mini[simulation]
```

Teste seu código, itere rapidamente e faça o deploy no hardware quando estiver pronto.

## Mergulho nas Especificações Técnicas

### Sistema de Motores

- **Graus de Liberdade:** movimento da cabeça com 6 DOF
- **Controle:** servomotores de alta precisão
- **Segurança:** limitação de corrente e feedback de posição
- **Movimento Suave:** trajetórias interpoladas para um movimento natural

### Sistema de Áudio

- **Matriz de Microfones:** 4 microfones dispostos para localização de som ideal
- **Beamforming:** processamento de áudio em nível de hardware
- **SNR:** alta relação sinal-ruído para captura de voz clara
- **Alto-falante:** saída de 5W com resposta de frequência nítida

### Sistema de Visão

- **Sensor:** câmera grande-angular
- **Resolução:** captura de vídeo em HD
- **FPS:** 30 quadros por segundo
- **Campo de Visão:** otimizado para interação em desktop

### Requisitos de Energia

**Versão Lite:**

- Alimentada via USB a partir do computador host ou adaptador de tomada
- Consumo típico: 5V @ 2A

**Versão Full:**

- Bateria interna para operação sem fio
- Carregamento via USB-C
- Duração da bateria: 2–4 horas dependendo do uso

## Privacidade e Segurança

<div style={{float: 'left', marginRight: '24px', marginBottom: '16px', clear: 'both'}}>
  <img width="200" src="https://files.seeedstudio.com/wiki/robotics/Reachymini/funny/astronaut.png" alt="Reachy Mini Astronaut" style={{borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}/>
</div>

O Reachy Mini foi projetado com foco em privacidade:

- **Sem Coleta de Dados:** o robô não armazena, transmite ou processa dados pessoais por padrão
- **Processamento Local:** todo o processamento de IA pode ser feito localmente
- **Controle do Usuário:** as funções de câmera e microfone estão totalmente sob controle do usuário
- **Código Aberto:** total transparência em software e hardware

O Reachy Mini não envia nenhum dado para a Pollen Robotics ou para o Hugging Face. Todo o processamento acontece localmente, a menos que você configure explicitamente serviços em nuvem.

## Comunidade e Suporte

### Participe da Comunidade

- **Discord:** [Entre no Discord do Reachy Mini](https://discord.com/invite/2bAhWfXme9)
- **GitHub:** [Reporte problemas e contribua](https://github.com/pollen-robotics/reachy_mini)
- **Site Oficial:** [https://www.pollen-robotics.com/reachy-mini/](https://www.pollen-robotics.com/reachy-mini/)

### Documentação e Recursos de Aprendizado

- **[Guia Oficial de Desenvolvimento](https://github.com/pollen-robotics/reachy_mini/blob/develop/README.md):** documentação oficial completa e recursos de desenvolvimento
- **[Instalação do SDK](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/installation.md):** configure seu computador em 5 minutos
- **[Guia de Início Rápido](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/quickstart.md):** execute seu primeiro comportamento no Reachy Mini
- **[SDK em Python](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/python-sdk.md):** aprenda a mover, ver, falar e ouvir
- **[Integrações de IA](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/integration.md):** conecte LLMs, crie Apps e publique no Hugging Face
- **[Conceitos Centrais](https://github.com/pollen-robotics/reachy_mini/blob/develop/docs/SDK/core-concept.md):** arquitetura, sistemas de coordenadas e limites de segurança
- **[Desenvolvimento Secundário](https://github.com/Seeed-Projects/reachy-mini-starter):** guia inicial da Seeed para desenvolvimento de aplicações personalizadas
- **[Guia de Montagem](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide):** instruções de montagem passo a passo
- 🤗[**Compartilhe seu app com a comunidade**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)

## O que vem a seguir?

### Roteiro

A plataforma Reachy Mini está em constante evolução:

- **Suporte a JavaScript:** em breve, para desenvolvimento baseado na web
- **Integração com Scratch:** programação em blocos para iniciantes
- **Apps Adicionais:** ecossistema em crescimento de aplicações da comunidade
- **Expansões de Hardware:** acessórios e upgrades modulares
- **Modelos de IA Aprimorados:** modelos otimizados para processamento embarcado

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
