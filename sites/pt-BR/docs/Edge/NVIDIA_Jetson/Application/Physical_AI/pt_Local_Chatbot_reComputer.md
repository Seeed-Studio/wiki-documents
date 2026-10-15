---
description: Um assistente de IA totalmente local e interativo por voz que combina Speech-to-Text (STT), Text-to-Speech (TTS) e Modelos de Linguagem de Grande Porte (LLMs) locais usando Ollama e NVIDIA Riva. Ele roda inteiramente em dispositivos de borda como NVIDIA Jetson — possibilitando conversas de voz privadas, em tempo real e naturais sem depender da nuvem.
title: Chatbot no Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /local_chatbot_recomputer_bk
last_update:
  date: 01/29/2025
  author: kourosh
createdAt: '2025-10-29'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/local_chatbot_recomputer_bk/
---

# Construindo um Chatbot Interativo por Voz com LLMs Locais, STT e TTS

Este projeto torna realidade o sonho de um **assistente de IA totalmente interativo por voz** — rodando inteiramente **em hardware local**, sem depender de serviços em nuvem.  
Ao combinar **Speech-to-Text (STT)**, **Text-to-Speech (TTS)** e **Modelos de Linguagem de Grande Porte (LLMs) locais** usando **Ollama**, o sistema permite conversas naturais, privadas e em tempo real entre humanos e máquinas.

Toda a configuração roda dentro de contêineres Docker e pode ser implantada em **dispositivos NVIDIA Jetson**, **computadores de borda** ou qualquer sistema baseado em Linux com aceleração por GPU.

---

## Visão Geral do Projeto

O objetivo deste projeto é criar um **chatbot controlado por voz** capaz de:

- Ouvir sua voz em tempo real.
- Entender sua fala usando **ASR (Reconhecimento Automático de Fala)** local.
- Gerar respostas inteligentes usando um **LLM local**.
- Falar essas respostas de forma natural usando **TTS (Text-to-Speech)**.

Todos os componentes são autocontidos e rodam localmente, oferecendo controle total sobre seus dados — sem dependências da nuvem, sem latência, sem preocupações com privacidade.

---

## Componentes do Sistema

### 1. Módulo Speech-to-Text (STT)

Transforma sua entrada de voz em texto em tempo real.  
Principais recursos:

- Transcrição rápida e precisa usando **NVIDIA Riva ASR**.  
- Suporte a vários idiomas.  
- Otimizado para dispositivos de borda.

### 2. Módulo Text-to-Speech (TTS)

Converte as respostas do chatbot em saída de voz com som natural.  
Destaques:

- Síntese de fala multilíngue, expressiva e realista.  
- Baseado em **NVIDIA Riva TTS**.  
- Baixa latência — perfeito para conversas interativas.

### 3. LLM Local (Ollama)

No coração do chatbot está o **Ollama**, um mecanismo de inferência local para executar LLMs modernos de forma eficiente.  
Recursos:

- Operação offline (sem necessidade de internet).  
- Respostas em tempo real mesmo em dispositivos Jetson.  
- Retenção de contexto para diálogos suaves e coerentes.  
- Suporta vários modelos, incluindo Llama, Phi, Gemma, Mistral e outros.

### 4. Camada de Interação com o Usuário

Uma interface simples e intuitiva permite que os usuários:

- Iniciem ou parem a interação por voz por meio de botões ou comandos.  
- Vejam transcrições em tempo real e respostas do chatbot.  
- Desfrutem de comunicação fluida e de baixa latência de voz para voz.

---

## Configurando o Ollama Localmente

Vamos começar instalando o [Jetson Containers](https://github.com/dusty-nv/jetson-containers) para gerenciar e implantar facilmente nossos serviços dentro do Docker.

```bash
# Install Jetson Container tools
git clone https://github.com/dusty-nv/jetson-containers
bash jetson-containers/install.sh
```

Uma vez instalado, baixe e execute o contêiner do **Ollama**:

```bash
jetson-containers run --name ollama $(autotag ollama)
ollama run llama3.2:1b
```

💡 **Dica:** Comece com modelos menores (como `llama3.2:1b`) para testar sua configuração e depois faça o scale-up.

Modelos disponíveis em [ollama.com/library](https://ollama.com/library):

| Modelo | Parâmetros | Tamanho | Comando |
|-------|-------------|------|----------|
| Llama 3.2 | 3B | 2,0 GB | `ollama run llama3.2` |
| Llama 3.2 | 1B | 1,3 GB | `ollama run llama3.2:1b` |
| Llama 3.2 Vision | 11B | 7,9 GB | `ollama run llama3.2-vision` |
| Phi 3 Mini | 3,8B | 2,3 GB | `ollama run phi3` |
| Gemma 2 | 9B | 5,5 GB | `ollama run gemma2` |
| Mistral | 7B | 4,1 GB | `ollama run mistral` |

Se você estiver usando um **NVIDIA Jetson AGX**, poderá executar confortavelmente modelos médios a grandes. Para Jetsons menores, fique com modelos leves (1B–3B).

Execute o Ollama diretamente no terminal ou por meio do script Python fornecido, `ollama_run.py`.

```bash
python3 ollama_run.py
```

**Exemplos:**

Uso no terminal  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/terminal_ollama.gif" width="700"/>

Integração em Python  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/ollama_python.gif" width="700"/>

---

## NVIDIA Riva: STT e TTS

Para habilitar a interação de voz real, usamos o **NVIDIA Riva**, um kit de ferramentas acelerado por GPU que fornece:

- **Reconhecimento Automático de Fala (ASR)**  
- **Text-to-Speech (TTS)**  
- **Tradução Automática Neural (NMT)** (opcional)

Ele pode ser implantado em qualquer lugar — da nuvem a dispositivos embarcados como a **série Jetson**.

### Etapa 1: Obtenha sua Chave de API do NGC

1. Faça login no [NVIDIA NGC](https://catalog.ngc.nvidia.com/).
2. Crie uma **chave de API** e salve-a localmente — você vai precisar dela para acessar os recursos do Riva.

### Etapa 2: Configure o NGC no Jetson

```bash
cd ~ && mkdir ngc_setup && cd ngc_setup
wget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip
unzip ngccli_arm64.zip 
chmod u+x ngc-cli/ngc
echo "export PATH=\"$PATH:$(pwd)/ngc-cli\"" >> ~/.bash_profile && source ~/.bash_profile
ngc config set
```

Use sua chave de API quando solicitado.

### Etapa 3: Instale o Riva no Jetson

Certifique-se de que você está executando o **JetPack 6.0** (ou verifique a compatibilidade na [Matriz de Suporte](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/support-matrix.html)).

```bash
cd ~ && mkdir riva_setup && cd riva_setup
ngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.16.0
cd riva_quickstart_v2.13.1
```

No `config.sh`, desabilite serviços não utilizados para economizar recursos:

```bash
service_enabled_nlp=false
service_enabled_nmt=false
```

Em seguida, configure o Docker para usar o runtime NVIDIA editando `/etc/docker/daemon.json`:

```json
{
  "default-runtime": "nvidia",
  "runtimes": {
    "nvidia": {
      "path": "nvidia-container-runtime",
      "runtimeArgs": []
    }
  }
}
```

Reinicie o Docker:

```bash
sudo systemctl restart docker
```

Por fim, inicialize e inicie o Riva:

```bash
sudo bash riva_init.sh
sudo bash riva_start.sh
```

---

## Executando o Chatbot

Quando tudo estiver pronto, execute a aplicação principal:

```bash
git clone https://github.com/kouroshkarimi/local_chatbot_jetson.git
cd local_chatbot_jetson
python3 app.py --list-input-devices
python3 app.py --list-output-devices
python3 app.py --input-device <your_input_id> --output-device <your_output_id>
```

Agora você pode **falar com seu assistente**, e ele vai **ouvir, pensar e responder** — tudo localmente, com a potência do seu Jetson.

---

## Principais Vantagens

- 🔒 100% privado – nenhum dado sai do seu dispositivo  
- ⚡ Resposta em tempo real – otimizado para baixa latência  
- 🌐 Multilíngue – suporta vários idiomas e sotaques  
- 🧩 Modular – cada componente pode ser substituído ou estendido  
- 🖥️ Amigável para borda – implantável em Jetson ou sistemas Linux padrão

---

## Melhorias Futuras

- Integração com **módulos de visão** para interação multimodal  
- Suporte a **clonagem de voz personalizada** no TTS  
- **Persistência de memória** entre sessões para diálogos mais naturais  
- Interface web ou móvel

---

## 🎉 Aproveite Suas Conversas!

Parabéns — você acabou de construir seu próprio **assistente de IA habilitado por voz e com foco em privacidade**.  
Agora relaxe, converse com o seu robô e divirta-se explorando o futuro da interação humano-IA. 🤖💬

> “TENHA UMA BOA CONVERSA COM ROBÔS :)”

---

## Referências

1. [RAG Local baseado em Jetson com LlamaIndex](https://wiki.seeedstudio.com/pt-br/Local_RAG_based_on_Jetson_with_LlamaIndex/)
2. [Chatbot de Voz Local: Implante Riva e Llama2 no reComputer](https://wiki.seeedstudio.com/pt-br/Local_Voice_Chatbot/)
3. [ChatTTS](https://github.com/2noise/ChatTTS)
4. [Speech to Text (STT) e Text to Speech (TTS)](https://www.librechat.ai/docs/configuration/stt_tts)
5. [Ollama](https://github.com/ollama/ollama)

---

## ✨ Projeto de Colaborador

- Este projeto é apoiado pelo [Projeto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [kourosh karimi](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Building+a+Voice-Interactive+Chatbot+with+STT%2C+TTS%2C+and+Local+LLMs%21&pane=issue&itemId=74620249&issue=Seeed-Studio%7Cwiki-documents%7C1553) por seus esforços dedicados. Seu trabalho será [exposto](https://wiki.seeedstudio.com/pt-br/contributors/).

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
