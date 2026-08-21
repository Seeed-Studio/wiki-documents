---
description: Este documento irá guiá-lo passo a passo, do zero, para construir um sistema inteligente de braço robótico que “ouve e se move”. Mesmo que você nunca tenha mexido com braço robótico ou desenvolvimento de hardware, desde que siga os passos, conseguirá reproduzir este projeto com sucesso!
title: Controle o reBot Arm usando voz com reSpeaker
keywords:
  - reSpeaker
  - python
  - reBot Arm
  - DOA
  - groq
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg
slug: /control_rebot_arm_using_voice_with_respeaker_flex
sku: 114993700
last_update:
  date: 5/22/2026
  author: wuxinrui
createdAt: '2026-05-22'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/control_rebot_arm_using_voice_with_respeaker_flex/
---


# Controle o reBot Arm usando voz com reSpeaker 

>

> Este documento irá guiá-lo passo a passo, do zero, para construir um sistema inteligente de braço robótico que “ouve e se move”. Mesmo que você nunca tenha mexido com o braço robótico ou desenvolvimento de hardware, desde que siga os passos, conseguirá reproduzir este projeto com sucesso!

## Hardware necessário

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reBot Arm B601-DM</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Adquira agora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th></th>
    <th>reSpeaker XVF3800</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>

    <td
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0 20px'
      }}
    >
      OU
    </td>

    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Adquira agora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>

    <td></td>

    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Adquira agora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


## 1. Visão geral do projeto

### 1.1 O que é este projeto?

Este projeto é um **sistema inteligente de controle de braço robótico acionado por voz**. Imagine esta cena:

>🎬**Demonstração de cenário**

> Quando você diz "olá" para o braço robótico sobre a mesa, o braço robótico imediatamente gira na sua direção e acena com a cabeça como um humano. Quando você diz "dance", ele balança alegremente. Se você for para o outro lado da sala e bater palmas, ele imediatamente "ouve" a direção do som e gira para encará-lo – este é o robô inteligente que queremos construir!

Em resumo, este sistema faz três coisas:

1. **Ouvir** – captura sua voz por meio do array de microfones e também consegue determinar de que direção o som está vindo

2. **Entender** – identifica o que você diz por meio de IA e compreende a sua intenção

3. **Mover** – controla o braço mecânico para executar ações correspondentes (girar, acenar com a cabeça, dançar, acenar, etc.)

### **1.2 Dois modos de interação**

O sistema oferece dois modos principais de funcionamento, que você pode escolher de acordo com suas necessidades:

| Modo | Nome | Interação | Cenário adequado |
|-----|-----|-----|-----|
| Modo 1 | **Rastreamento de fonte sonora DOA** | Detecta automaticamente a direção do som e gira | Demonstração em estandes, dispositivo interativo |
| Modo 2 | **Controle por comando de voz** | Pressione e segure Enter para controlar | Assistente de voz, demonstração em aulas |

### 1.3 Como o sistema funciona?

Descrevendo a arquitetura de todo o sistema em termos leigos:

```
You speak / make a sound
      ↓
[ reSpeaker ] —— An array composed of 4 "ears" can hear and determine the direction of sound.
      ↓
[ Ubuntu ] —— 
      ↓
   There are two paths:
   ├─→ DOA Mode: Locally directly calculate the sound direction → Control the robotic arm to turn
   └─→ Voice mode: Upload to cloud AI for recognition → Understand your intention → Control the movement of the robotic arm
      ↓
[ reBot Arm ] —— An arm composed of 7 "joints" performs various actions.
```

Um diagrama de arquitetura mais especializado é descrito da seguinte forma:

**Camada de hardware** (dispositivos que você pode tocar):

- reSpeaker (Array de 4 microfones com controlador XIAO ESP32S3)  

- reBot Arm B601-DM (manipulador de 6 DOF)  

- Computador com Ubuntu 22.04 (executando o programa principal)  

**Camada de driver** (permite que o hardware se comunique):

- Comunicação de áudio USB (pyusb/libusb) – conecta o array de microfones  

- Comunicação serial (MotorBridge) – conecta o braço mecânico  

- Web API (Groq Cloud) – conecta aos serviços de IA em nuvem  

**Camada de algoritmo** (o "cérebro" que processa os dados):

- Localização de fonte sonora DOA (cálculo local em tempo real)

- Reconhecimento de fala Whisper (Groq Cloud)

- Compreensão de intenção com Llama-3.3 (Groq Cloud)

- Planejamento de interpolação de movimento (controle local suavizado)

**Camada de aplicação** (onde você vê o efeito):

- Modo de rastreamento DOA, modo de controle por voz, animação de espera com respiração, síntese de voz

---

## 2. Preparação de hardware

### 2.1 O que você precisa preparar?

Antes de começar, certifique-se de que você tem todo o hardware a seguir pronto. Se este for o seu primeiro contato com esse tipo de projeto, é recomendável comprar o kit completo diretamente para evitar problemas de compatibilidade.

| Componente | Modelo | Quantidade | Principais características | Recomendações de compra |
|-----|-----|-----|-----|-----|
| Braço mecânico | reBot Arm B601-DM | 1 conjunto | O “corpo” que executa as ações | Loja oficial da Seeed Studio |
| Array de microfones | reSpeaker  XVF3800 | 1 | Ouve o som e determina a direção | Loja oficial da Seeed Studio |
| PC principal | PC com Ubuntu 22.04 | 1 | Executa o “cérebro” do programa | Arquitetura x86_64 |
| Cabo USB | USB-A para USB-C | 2 | Conecta os dispositivos | geralmente incluído com o dispositivo |
| Grampo de marcenaria | 3 polegadas ou mais | 2 | Fixa a base do braço mecânico | Loja de ferragens ou incluído no kit |
| Fonte de alimentação | 24V 15A (interface XT30) | 1 | Fornece energia ao braço mecânico | geralmente incluída no kit |

### 2.2 Breve introdução de cada hardware

#### 2.2.1 Braço reBot Arm B601-DM

Este é um braço mecânico de nível desktop com **7 “articulações”** (profissionalmente chamadas de 7 graus de liberdade). Assim como um braço humano, ele pode realizar vários movimentos flexíveis.

**Descrição das articulações** (de cima para baixo):

| Articulação | Nome popular | O que pode fazer | Faixa de movimento |
|-----|-----|-----|-----|
| J1 | Cintura (rotação da base) | Rotação do corpo inteiro para a esquerda e direita | ± 149 ° |
| J2 | Levantamento do braço superior | Levantar ou abaixar o braço superior | 0 ° ~ -206 ° |
| J3 | Extensão do antebraço | Estender ou dobrar o antebraço | 0 ° ~ -206 ° |
| J4 | Rotação do pulso | Rotação do pulso para a esquerda e direita | ± 85.9 ° |
| J5 | Inclinação do pulso | Movimento do pulso para cima e para baixo | ± 85.9 ° |
| J6 | Guinada do pulso | Ajuste da direção do pulso | ± 85.9 ° |
| J7 | Garra | Agarrar objetos | Controle de abertura e fechamento |

💡**Você pode entender assim**: J1 é como a rotação da cintura de uma pessoa, J2 é como o levantamento do ombro, J3 é como a flexão do cotovelo, J4/J5/J6 são como as várias rotações do pulso, e J6 é como um dedo. Com a combinação dessas articulações, o braço robótico pode realizar movimentos muito ricos.

⚠**Aviso de montagem**: Se você estiver comprando peças que precisam ser montadas por conta própria, preste atenção especial:

- O kit contém um grande número de parafusos e peças estruturais, e algumas peças são muito semelhantes na aparência

- **É altamente recomendável usar uma chave de fenda elétrica**, com o torque ajustado para a faixa média e baixa (3 ~ 6kgf.cm)

- Um torque excessivo pode facilmente levar ao **espanhamento da rosca do parafuso**

- Preste atenção à segurança durante a montagem para evitar prender ou esmagar as mãos

#### 2.2.2 Array de microfones reSpeaker 

Este é um módulo inteligente de processamento de voz com **4 microfones**, cujos principais recursos são:

- **Design dividido**: a placa principal e a placa do array de microfones podem ser separadas, o que facilita a disposição flexível em diferentes dispositivos

- **Captação em 360 °**: 4 microfones são dispostos em anel, podendo receber som de todas as direções

- **Processamento inteligente integrado**: integra o chip XMOS XVF3800, com funções de cancelamento de eco, supressão de ruído, localização de fonte sonora (DOA) e outras

- **Interface USB dupla**: possui dois modos de conexão: interface USB-C e interface com trava PH2.0

- **Amplificador de potência integrado**: pode acionar diretamente um alto-falante de 10W (por meio da interface JST)

**Componentes principais**:

| Componente | Função |
|-----|-----|
| Chip XMOS XVF3800 | O “cérebro” responsável por todo o processamento de áudio |
| Codec TLV320AIC3104 | Converte sinais sonoros analógicos em sinais digitais |
| Interface FPC de 24 pinos | Conecta a placa do array de microfones e a placa principal |
| Interface USB-C | Conecta ao computador, transmite áudio e energia |
| Conector para fone de ouvido 3,5 mm | Pode conectar fones de ouvido para monitoramento |
| Conector de alto-falante JST | Pode ser conectado a alto-falantes externos |

💡**Compreensão análoga**: Você pode pensar nisso como uma "orelha a favor do vento" — não só tem 4 ouvidos para ouvir o som de todas as direções, como também consegue analisar de qual direção o som vem e filtrar o ruído, focando apenas no som que você quer ouvir.

#### 2.2.3 Computador com Ubuntu 22.04

Ubuntu é um sistema operacional gratuito e de código aberto (semelhante ao Windows, mas mais popular entre desenvolvedores). Requisitos deste projeto:

- **Sistema operacional**: Ubuntu 22.04 LTS (versão 64 bits)

- **Arquitetura**: x86_64 (ou seja, um computador comum com processador Intel/AMD)

- **Recomendações de configuração mínima**:

- CPU: 4 núcleos ou mais

- Memória: 8 GB ou mais

- Disco rígido: 50 GB de espaço livre

- Rede: deve conseguir acessar a Internet (usada para chamar a IA em nuvem)

💡**E se o seu computador tiver sistema Windows?**

Você tem duas opções:

1. **Instalar sistema dual**: manter Windows e Ubuntu no computador ao mesmo tempo (recomendado)

2. **Usar máquina virtual**: executar o Ubuntu virtualmente com um software (como VMware) dentro do Windows (haverá alguma perda de desempenho, não recomendado para este projeto)

Tutorial de instalação do Ubuntu 22.04: [https://ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)

### 2.3 diagrama de conexão de hardware

Antes de começar, familiarize-se com a forma como todos os dispositivos devem ser conectados. A conexão geral é muito simples, são necessários apenas dois cabos USB:

```
          ┌─────────────────────────────────────┐
          │          Ubuntu 22.04            │
          │   ┌──────────┐                      │
          │   │  Python  │  ←── Run the main program       │
          │   │  3.10    │                      │
          │   └──────────┘                      │
          │          │                          │
          │   ┌──────┴──────┐                  │
          │   │  Groq API   │  ←── Cloud AI Service    │
          │   │  (Internet)   │                  │
          │   └─────────────┘                  │
          └─────┬────────┬────────────────────┘
                │        │
            USB-C Cable   USB-C Cable
                │        │
          ┌─────┴──┐  ┌─┴──────────┐
          │reSpeaker│  │ reBot Arm  │
          │         │  │ B601-DM    │
       │(Microphone) │  │ (Robot Arm)   │
          │        │  │            │
    │ 4-Microphone Array │  │ 7DOF    │
          └────────┘  └────────────┘
                │
          ┌─────┴──────┐
       │  Speaker/Headphone  │  (Optional, used for voice broadcast)
          └─────────────┘
```

**Etapas de conexão**:

1. Conecte o reSpeaker ao computador via cabo USB-C

2. Conecte o reBot Arm ao computador via cabo USB-C

3. (Opcional) conecte alto-falantes ou fones de ouvido ao conector de saída de áudio do reSpeaker

4. Certifique-se de que o computador esteja conectado à Internet

---

## 3. preparação do ambiente

Antes de instalar o software, precisamos confirmar se o ambiente do seu sistema atende aos requisitos. Abra o terminal do Ubuntu (Terminal, semelhante ao "prompt de comando" do Windows) e siga os passos abaixo para verificar um por um.

### 3.1 Confirmar versão do Ubuntu

```bash
# Enter the following command in the terminal to view the system version
lsb_release -a
```

✅**Saída esperada** (algo assim):

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04 LTS
Release:        22.04
Codename:       jammy
```

💡**E se não aparecer Ubuntu 22.04?**

- Se for Ubuntu 20.04 ou outras versões, é recomendável atualizar para 22.04, pois este projeto foi testado nessa versão

- Se não for Ubuntu, você precisa instalar o Ubuntu 22.04

### 3.2 confirmar versão do Python

```bash
# Check the default Python version in the system
python3 --version
```

✅**Saída esperada**:

```
Python 3.10.12
```

Desde que a versão seja **3.10.x** (x é qualquer número).

💡**E se não for Python 3.10?**

Não se preocupe, usaremos o Miniforge para criar depois um ambiente Python 3.10 especial, o que não afetará o Python padrão do sistema.

### 3.3 verificar porta USB

Antes de conectar o hardware, certifique-se de que o computador consegue reconhecer normalmente o dispositivo USB:

```bash
# View the list of currently connected USB devices
lsusb
```

✅**Saída esperada** (algo assim, mostrando o seu dispositivo USB):

```
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 003: ID 2886:0018 Seeed Studio reSpeaker Flex  ← Microphone Array
Bus 002 Device 005: ID 1234:5678 STMicroelectronics Virtual COM Port  ← Robot Arm
```

💡**E se eu não vir o dispositivo?**

Não entre em pânico, talvez o dispositivo ainda não tenha sido conectado. Continue para a próxima etapa e volte para verificar depois de instalar o software.

### 3.4 verificar conexão de rede

```bash
# Test whether the Internet can be accessed
ping -c 3 baidu.com
```

✅**Saída esperada**:

```
PING baidu.com (xxx.xxx.xxx.xxx) 56(84) bytes of data.
64 bytes from ...: icmp_seq=1 ttl=54 time=25.3 ms
64 bytes from ...: icmp_seq=2 ttl=54 time=24.8 ms
64 bytes from ...: icmp_seq=3 ttl=54 time=25.1 ms
```

💡**Se você não conseguir acessar a Internet?**

O modo de voz requer conexão de rede para chamar a Groq API, certifique-se de que a rede esteja estável. Se for uma rede de campus/empresa, pode ser necessária configuração adicional de proxy (explicada mais adiante).

---

## 4. instalação de software

⚠️ **Observação importante**: Todos os comandos a seguir precisam ser executados no terminal. Recomenda-se confirmar que não há erro após cada etapa antes de prosseguir para a próxima.

### 4.1 Etapa 1: Instalar Miniforge (ferramenta de gerenciamento de ambiente Python)

**O que é Miniforge?**

Miniforge é uma ferramenta de gerenciamento de ambientes Python, semelhante a um "gerenciador de versões tipo App Store" para Python. Ele pode ajudar você a:

- Criar um ambiente Python 3.10 independente, sem afetar o Python padrão do sistema

- Instalar com um clique todas as dependências do projeto

- Alternar entre diferentes versões de Python para diferentes projetos

**Comando de instalação**:

```bash
# Download the Miniforge installation script
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

# Perform the installation (follow the prompts)
bash Miniforge3-$(uname)-$(uname -m).sh
```

Após a execução, aparecerá o assistente de instalação:

1. Pressione 'Enter' para ver o contrato de licença

2. Digite 'yes' para concordar com o contrato

3. Pressione 'Enter' para confirmar o caminho de instalação (padrão)

4. Digite 'yes' para inicializar o conda (recomendado)

Após a conclusão da instalação, **feche a janela de terminal atual e abra um novo terminal** para que a variável de ambiente tenha efeito.

✅**Verificar instalação**:

```bash
# Enter in the new terminal
conda --version
```

Saída esperada: 'conda 24.x.x' (o número da versão pode ser diferente, contanto que a versão seja exibida, a instalação foi bem-sucedida)

### 4.2 Etapa 2: Clonar o repositório de código do projeto

```bash
# Download the main codebase of the project (voice control part)
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git

# Enter the project directory
cd reBot-Arm-reSpeaker-Flex
```

✅**Saída esperada**:

```
Cloning into 'reBot-Arm-reSpeaker-Flex'...
remote: Enumerating objects: ...
...
Resolving deltas: 100% (...)
```

💡**E se o git clone estiver lento ou falhar?**

Pode ser um problema de rede, você pode tentar:

```bash
# Use domestic mirroring for acceleration (if available)
git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
```

### 4.3 Etapa 3: Criar um ambiente Conda

O projeto fornece um arquivo 'environment.yml' que lista todos os pacotes de dependência necessários. Só precisamos de um comando para instalar automaticamente todas as dependências:

```bash
# Make sure you are in the reBot-Arm-reSpeaker-Flex directory.
# One-click to create an environment and install all dependencies
conda env create -f environment.yml
```

Esse processo pode levar **10–30 minutos**, dependendo da velocidade da sua rede. Ele irá automaticamente:

- Criar um ambiente Python 3.10.2 chamado 'flex'

- Instalar pinocchio, numpy e outras bibliotecas de computação científica a partir do canal conda-forge

- Instalar pyusb para comunicação USB

✅**Sinal de instalação bem-sucedida** (as últimas linhas se parecem com isto):

```
Executing transaction: ... done
#
# To activate this environment, use
#
#     $ conda activate flex
#
# To deactivate an active environment, use
#
#     $ conda deactivate
#
```

### 4.4 Etapa 4: Ativar o ambiente Conda

```bash
# Activate the newly created flex environment
conda activate flex
```

✅**Sinal de ativação bem-sucedida**: '(flex)' aparece antes do prompt do terminal:

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

💡**Lembrete importante**: Sempre que você abrir um novo terminal, precisará executar novamente 'conda activate flex' para ativar o ambiente.

### 4.5 Etapa 5: Instalar dependências do sistema

```bash
# Update the system package list and install ffmpeg
sudo apt-get update && sudo apt-get install -y ffmpeg
```

**O que é ffmpeg?**

ffmpeg é uma ferramenta de processamento de áudio e vídeo; este projeto a utiliza para processar arquivos de áudio após a síntese de fala. Simplificando, é "para permitir que o computador reproduza e processe som".

✅**Sinal de instalação bem-sucedida**:

```
ffmpeg is already the newest version (x.x.x).
```

### 4.6 Etapa 6: Instalar uv (ferramenta de gerenciamento de pacotes Python)

```bash
# Install uv (a fast Python package management tool)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Por que você precisa do UV?**

uv é uma ferramenta de gerenciamento de pacotes Python muito rápida que pode ser usada para instalar pacotes no formato pip. A biblioteca 'motorbridge' usada no projeto precisa ser instalada por meio do uv.

✅**Após a instalação ser concluída com sucesso**, feche o terminal e abra-o novamente.

### 4.7 Etapa 7: Clonar a biblioteca de controle do braço robótico

```bash
# Cloning robotic arm control library
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git

# Enter the robotic arm control library directory
cd reBotArm_control_py

# Use uv to install dependencies
uv sync
```

✅**Saída esperada**: Exibe o progresso da instalação sem relatar erro.

### 4.8 Etapa 8: Definir variáveis de ambiente PYTHONPATH

```bash
# Add the robotic arm control library to the Python search path
export PYTHONPATH="$PWD:$PYTHONPATH"
```

**O que isso significa?**

Quando o Python está importando uma biblioteca, ele procura no diretório especificado pelo PYTHONPATH. Este comando diz ao Python para "procurar neste diretório além do caminho de busca padrão".

⚠️ **Lembrete importante**: 'export PYTHONPATH' Esta configuração **se tornará inválida toda vez que o terminal for fechado**! Você precisa:

**Esquema A (temporário, a ser executado toda vez)**: Executar manualmente o comando export acima sempre que um novo terminal for aberto

**Esquema B (recomendado, permanente)**: Escrever esta configuração no arquivo '~/.bashrc':

```bash
# Write environment variables to the configuration file so that they will be automatically set every time the terminal is opened.
echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc

# Make the configuration take effect immediately
source ~/.bashrc
```

### 4.9 Etapa 9: Definir permissão da porta serial

Para que o usuário atual possa acessar o dispositivo serial USB (usado para se comunicar com o braço robótico), é necessário definir permissões:

```bash
# Set USB serial device permissions (to allow the current user to access without sudo)
sudo chmod 666 /dev/ttyACM*
```

✅**Nenhum erro pode ser relatado após a execução**.

💡**Por que você precisa disso?**

O sistema Linux possui um gerenciamento rigoroso de permissões para dispositivos de hardware. Por padrão, usuários comuns não podem acessar diretamente dispositivos seriais. Este comando permite que todos os usuários leiam e escrevam nesses dispositivos.

⚠️ **Esta configuração será inválida após reiniciar**. Se você quiser que seja permanente, pode adicionar seus usuários ao grupo 'dialout':

```bash
# Add the current user to the dialout group (permanently resolve the permission issue)
sudo usermod -a -G dialout $USER
```

A modificação requer **fazer logout e login novamente** para entrar em vigor.

### 4.10 Etapa 10: Configurar a chave de API do Groq

Este projeto usa o serviço de IA em nuvem do Groq para reconhecimento de fala e compreensão de intenção. Você precisa registrar uma conta Groq e obter a chave de API.

**Para obter a chave de API**:

1. Abra o navegador e acesse https://console.groq.com/keys

2. Registre uma conta (você pode usar e-mail ou conta do GitHub)

3. Após fazer login, clique em "Create API Key"

4. Copie a chave gerada (o formato é semelhante a 'gsk_xxxxxxxxxxxx)

**Configurar a chave de API no código**:

```bash
# First return to the main project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Edit the main program file
nano sound_tracking_arm.py
```

Encontre a seguinte seção no arquivo (aproximadamente em torno da linha 60):

```python
VOICE_CFG = {
    "api_key": "12345678",   # ← Replace this line with your actual API Key
    ...
}
```

Substitua '"12345678"' pela chave de API que você acabou de copiar, por exemplo:

```python
    "api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

Salve o arquivo: Pressione 'Ctrl O', depois 'Enter' e, em seguida, 'Ctrl X' para sair.

⚠️ **Lembrete de segurança**:

- **Não** compartilhe sua chave de API em um repositório de código público ou fórum

- **Não** envie capturas de tela da chave de API para redes sociais

- Se a chave de API for vazada, exclua-a no console do Groq e gere uma nova.

### 4.11 Etapa 11: Configurações de proxy de rede (se necessário)

Se você estiver na China continental ou em determinados ambientes de rede, talvez não consiga acessar diretamente os serviços do Groq. Teste primeiro:

```bash
# Test whether Groq can be accessed
ping console.groq.com -c 3
```

Se você conseguir receber uma resposta (exibir tempo), significa que a rede está normal e você pode pular esta etapa.

Se for exibido 'unknown host' ou 'Request Timeout', é necessário configurar o proxy.

**Como configurar o proxy**:

Edite 'sound_tracking_arm.py 'novamente e encontre a entrada 'proxy' em 'VOICE_CFG:

```python
VOICE_CFG = {
    ...
    "proxy": None,   # ← Change it to your proxy address
}
```

Por exemplo, se o endereço do seu proxy for 'http:// 192.168.4.7:7897 ':

```python
    "proxy": "http://192.168.4.7:7897",
```

💡**Como sei o endereço do meu proxy?**

- Se você usa Clash: geralmente em 'http:// 127.0.0.1:7890'

- Se você usa v2rayN: geralmente em 'http:// 127.0.0.1:10809'

- Se for um servidor proxy na LAN: pergunte ao administrador de rede

- O formato do proxy geralmente é: 'http:// endereço IP: número da porta'

---

## 5. Conexão e montagem de hardware

### 5.1 Etapas de conexão de hardware

Agora que todo o software foi instalado, vamos conectar o hardware.

**Etapa 1: Conectar o reSpeaker**

1. Conecte o reSpeaker ao computador com um cabo USB-A para USB-C

2. Após a conexão, o indicador luminoso no reSpeaker deve acender

3. Digite 'lsusb' no terminal e você deverá conseguir ver o dispositivo da Seeed Studio.

**Etapa 2: Conectar o reBot Arm**

1. Certifique-se de que a base do braço mecânico foi firmemente fixada na mesa com um grampo de marcenaria

2. Conecte o braço robótico ao computador com um cabo USB-A para USB-C

3. Conecte a fonte de alimentação de 24 V (interface XT30), mas **não ligue primeiro**

⚠️ **Lista de verificação de segurança antes de ligar**:

- [ ] A base do braço mecânico foi firmemente fixada (presa com um grampo de marcenaria)

- [ ] Não há obstáculos no alcance de movimento do braço robótico

- [ ] Não há pessoas próximas ao alcance de movimento do braço robótico

- [ ] Cabo USB conectado

- [ ] Fiação da fonte de alimentação está correta

**Etapa 3: LIGAR A ENERGIA**

1. Após a verificação, ligue o interruptor de alimentação de 24 V

2. O braço mecânico emitirá um leve som de energização do motor

3. Digite 'ls /dev/ttyUSB * 'no terminal, e você deverá conseguir ver dispositivos semelhantes a '/dev/ttyUSB0'

### 5.2 Verificar conexões de hardware

```bash
# View USB audio device (reSpeaker)
arecord -l
```

✅**Saída esperada** (semelhante):

```
**** List of CAPTURE Hardware Devices ****
card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

```bash
# View USB serial device (robotic arm)
ls -la /dev/ttyUSB0
```

Ou:

```bash
ls -la /dev/ttyACM0
```

✅**Saída esperada**:

```
crw-rw-rw- 1 root dialout 188, 0 ... /dev/ttyUSB0
```

💡**E se você não conseguir ver o dispositivo?**

- Verifique se o cabo USB está bem conectado

- Tente trocar de porta USB

- Verifique se o cabo é um cabo de dados (alguns cabos só podem carregar e não transmitem dados)

- Consulte o [9. guia de solução de problemas](#9-guia-de-solução-de-problemas-faq)

---

## 6. primeira execução

### Verificação antes da operação 6.1

Antes do início oficial, vamos fazer algumas verificações simples para garantir que todos os componentes estejam funcionando corretamente.

#### Validação 1: Verificar dependências do Python

Certifique-se de que você está no ambiente 'flex' e no diretório principal do projeto:

```bash
# Activate the environment
conda activate flex

# Enter the project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Verify pyusb and numpy
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

✅**Saída esperada**:

```
pyusb + numpy OK
```

#### Validação 2: Validar a biblioteca do braço robótico

```bash
# Ensure that PYTHONPATH is set
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"

# Verify the robotic arm library
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

✅**Saída esperada**:

```
Robot Arm Library OK
```

💡**E se o erro for 'ModuleNotFoundError'?**

Significa que o PYTHONPATH não está definido corretamente. Por favor, confirme:

1. O diretório reBotArm_control_py realmente existe.

2. O comando 'export PYTHONPATH' foi executado

3. Se não, tente usar o caminho completo:

   ```bash
   export PYTHONPATH="/home/Your username/reBotArm_control_py:$PYTHONPATH"
   ```

#### Verificação 3: Testar o microfone

```bash
# Record a 3-second test audio
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav

# Play the recorded audio (if a speaker/headphone is connected)
aplay -D plughw:2,0 /tmp/test.wav
```

Se você conseguir ouvir o som gravado, o array de microfones está funcionando corretamente.

### 6.2 Procedimento de inicialização

Depois que todas as verificações forem aprovadas, o programa pode ser iniciado oficialmente!

```bash
# Ensure in the flex environment
cd ~/reBot-Arm-reSpeaker-Flex

# Start the program (a mode selection menu will pop up)
python sound_tracking_arm.py
```

✅**Saída esperada**:

```
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

Neste momento, digite '1' para entrar no modo de rastreamento de fonte sonora DOA ou digite '2' para entrar no modo de controle por voz.

#### Especificar diretamente o modo para iniciar

Você também pode especificar o modo diretamente no comando de inicialização, pulando o menu de seleção:

```bash
# DOA Sound Source Tracking Mode
python sound_tracking_arm.py --mode doa

# Voice command control mode
python sound_tracking_arm.py --mode voice
```

### 6.3 Teste da primeira execução

#### Teste do modo DOA

Quando o Modo 1 é selecionado, o programa:

1. Inicializa o dispositivo USB

2. Conecta o braço mecânico

3. Entra em estado de espera

**Método de teste**: Fique ao lado do braço robótico e fale ou bata palmas para observar se o braço robótico:

- Vire na direção em que você está

- Faça movimentos de aceno de cabeça

- Depois volte para o modo de espera

#### Teste do modo de voz

Quando o modo 2 é selecionado, o programa:

1. Inicializa todos os componentes

2. Aguarda você pressionar Enter

**Método de teste**:

1. Pressione a tecla 'Enter'

2. Após ver o aviso de "recording", diga "hello" ou "say hello"

3. Aguarde cerca de 5 segundos

4. Observe se:

- Reconhece sua voz

- O braço mecânico executa a ação de saudação

- Ouve a resposta de voz transmitida

---

## 7. Explicação detalhada da função

### 7.1 modo 1: modo de rastreamento de fonte sonora DOA

#### O que é DOA?

O nome completo de DOA é **Direction of Arrival** (direção de chegada da onda sonora), que é, de forma simples: **julgar de que direção o som vem**. Assim como você pode usar os dois ouvidos para determinar aproximadamente se o som está à esquerda ou à direita, o reSpeaker usa quatro microfones para calcular a direção do som com mais precisão.

#### Fluxo de trabalho

```
Start the system
    ↓
Initialize USB device
    ↓
Connect reSpeaker  ←──→ Connect reBot Arm
    ↓
Loop Execution:
    ├─ Read DOA angle data (0°~360°)
    ├─ Is a valid sound source detected?
    │   ├─ No → Breathing Standby Animation → Continue Reading
    │   └─ Yes → 4-frame Angle Buffer Queue → Calculate Weighted Average Angle
    │           → Cosine Similarity Smoothing Filtering
    │           → Angle change > Trigger Threshold?
    │               ├─ No → Continue Reading
    │               └─ Yes → The robotic arm turns towards the target direction
    │                       → Perform a nodding motion
    │                       → Enter Cool Down
    │                       → Continue Reading
    ↓
Exit (Press Ctrl+C)
```

#### Explicação detalhada dos pontos técnicos centrais

**Fila de buffer de ângulo de 4 quadros**

Imagine que você está ouvindo uma pessoa em movimento falar e, se cada quadro (cerca de 50 milissegundos) de mudança angular acionar diretamente o braço robótico, ele vai tremer e sacudir. O sistema usa um "buffer circular" para armazenar os dados de ângulo DOA dos últimos 4 quadros e depois faz a média para tornar o movimento mais suave.

**Filtro de suavização por similaridade de cosseno**

Às vezes o microfone irá julgar erroneamente a direção (como um ruído repentino). Este filtro verificará se os ângulos dos últimos quadros são "consistentes" — se a diferença for muito grande, pode ser um erro de julgamento e não responderá. Assim como quando você ouve um som, você confirma a direção antes de virar a cabeça.

**Limite de disparo**

Somente quando a mudança de ângulo excede o limite definido (padrão 15 °) o movimento do braço será acionado. Isso evita movimentos frequentes devido a pequenas flutuações de ângulo.

**Cooldown**

Após cada ação, o sistema entrará em um período de resfriamento (padrão 3 segundos), durante o qual não responderá a novas fontes sonoras. Isso impede que o braço robótico fique tremendo devido a disparos contínuos.

**Animação de espera respiratória**

Quando ninguém está falando, o braço robótico não ficará completamente parado, mas entrará em um estado de "respiração" — ligeiramente semelhante a um humano. Isso é ao mesmo tempo bonito e permite que o usuário saiba que o sistema está em execução.

### 7.2 Modo 2: modo de controle por comando de voz

#### Loop fechado completo de interação

O modo de controle por voz suporta o loop fechado completo de **gravação → reconhecimento → compreensão → execução → transmissão**.

#### Fluxo de trabalho

```
The user presses the Enter key.
    ↓
arecord starts recording (6 channels, 16kHz, 5 seconds)
    ↓
User releases Enter → Stop recording
    ↓
NumPy Audio Normalization Processing (Extract First Channel + Gain Amplification)
    ↓
Upload to Groq API
    ↓
Whisper model performs speech-to-text (STT) recognition
    ↓
Obtain text commands (e.g., "turn left")
    ↓
Send to Llama-3.3-70B large language model
    ↓
LLM understands intent + outputs JSON structured results
    ↓
Analysis results
    ├─ Invalid → Broadcast "Sorry, I didn't catch that. Could you please repeat?"
    └─ Valid → Execute the corresponding robotic arm action
              ↓
         Edge-TTS Voice Announcement Execution Result
              ↓
         Return to standby state
```

#### Comandos de voz suportados

| Tipo de instrução | Exemplo de frase | Ação executada | Descrição |
|-----|-----|-----|-----|
| virar à esquerda | "turn left"/"look left"/"turn left" | a base do braço robótico gira 45 graus para a esquerda | o ângulo pode ser ajustado por parâmetros |
| virar à direita | "turn right"/"look right"/"turn right" | a base do braço robótico gira 45 graus para a direita | igual ao acima |
| saudação | "say hello"/"hello"/"hi" | executa saudação com aceno de cabeça | acena com a cabeça duas vezes seguidas |
| acenar | "Wave"/"Say Goodbye"/"Bye" | executa um aceno | acena 2 vezes para a esquerda e direita |
| retornar a zero | "return to initial position"/"reset"/"return to zero" | todas as juntas retornam à posição zero | retorna à postura inicial |
| parar | "Stop"/"Don't move"/"Stop" | interrompe a ação atual imediatamente | comando de parada de emergência |

#### Exemplo de interação

```bash
$ python sound_tracking_arm.py --mode voice

========================================
  🤖 reBot Arm Voice Control System has been activated
  Press Enter to start recording, release to stop.
  Press Ctrl+C to exit
========================================

[Interaction] >>> 🟢 System is idle, please press Enter to start recording... <<< [User presses Enter]
🔴 Recording... Please speak (5 seconds)
[User says: "Turn to the left a bit"]
[User releases Enter]
🟢 Recording completed, processing...

   --- Speech Recognition ---
   📝 Recognition result: "turn left"

   --- Intent Understanding ---
   🤖 Parsed action: turn_left, parameters: {"angle": 45}

   --- Execute Action ---
   => Start executing action: turn_left

   --- Voice Announcement ---
=======================================================
 🤖 [Voice Output] Okay, turning left.
=======================================================

[Interaction] >>> 🟢 System is idle, press Enter to start recording... <<< [Waiting for next input]
```

#### Como a IA entende suas palavras?

O projeto usa um Prompt bem projetado que permite que um grande modelo de linguagem (Llama-3.3-70B) entenda várias declarações em linguagem natural e as traduza em instruções estruturadas.

Por exemplo, se você disser "help me turn my head to the left", a IA irá entendê-lo assim:

```json
{"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
```

A vantagem desse design é que você não precisa dizer palavras de comando fixas, basta falar naturalmente como em uma conversa!

---

## 8. parâmetros de linha de comando

### 8.1 tabela completa de parâmetros

Ao iniciar o programa, você pode adicionar vários parâmetros para personalizar o comportamento:

```bash
python sound_tracking_arm.py [Parameter]
```

| Parâmetro | Curto | Padrão | Descrição |
|-----|-----|-----|-----|
| '-- mode' | '-m' | 'doa' | Modo de operação: 'doa' (rastreamento de fonte sonora) ou 'voice' (controle por voz) |
| '-- device' | '-d' | '0' | ID de dispositivo USB do reSpeaker |
| '-- port' | '-p' | '/dev/ttyUSB0' | Caminho da porta serial do braço mecânico |
| '-- threshold' | '-t' | '15' | Limite de disparo do ângulo DOA (em graus) |
| '-- cooldown' | '-c' | '3' | Tempo de cooldown da ação (em segundos) |
| '-- buffer-size' | '-B ' | '4' | Quadros do buffer de ângulo DOA |
| '-- groq-key' | '-k' | 'None' | Groq API Key (também pode ser configurada por código) |
| '-- tts-voice' | '-v' | 'zh-CN-XiaoxiaoNeural | Voz do Edge-TTS |
| '-- debug' | - | 'False' | Habilitar saída de log de depuração |

### 8.2 exemplo de uso

#### Uso básico

```bash
# DOA Tracking Mode (Default)
python sound_tracking_arm.py

# Voice control mode
python sound_tracking_arm.py --mode voice
```

#### Ajustar a sensibilidade do DOA

```bash
# Increase the trigger threshold (requires a larger change in sound direction to respond, reducing false triggers)
python sound_tracking_arm.py --threshold 25

# Lower the trigger threshold (more sensitive, but also more prone to false triggering)
python sound_tracking_arm.py --threshold 10

# Extend Cool Down (longer "rest time" after action)
python sound_tracking_arm.py --cooldown 5

# Adjust multiple parameters simultaneously
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

#### Especificar o dispositivo de hardware

```bash
# The robotic arm is connected to different serial ports.
python sound_tracking_arm.py --port /dev/ttyACM0

# Specify Groq API Key (command-line input will override the configuration in the code)
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

#### Alternar o timbre da voz

```bash
# Use Chinese male voice (Yun Jian)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# Use Chinese female voice (Xiaoxiao, default)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# Use Chinese female voice (Xiaoxiao, multi-emotional)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

Lista completa de vozes suportadas pelo Edge-TTS:[https://github.com/rany2/edge-tts#changing-the-voice](https://github.com/rany2/edge-tts#changing-the-voice)

#### Habilitar modo de depuração

```bash
# Enable detailed log output (helpful for troubleshooting)
python sound_tracking_arm.py --debug
```

---

## 9. guia de solução de problemas FAQ

Esta seção reúne os problemas e soluções mais comuns encontrados por usuários iniciantes. Se você não conseguir encontrar seu problema aqui, verifique se a conexão de hardware está correta e, em seguida, verifique a mensagem de erro exibida pelo terminal.

### 9.1 problemas na fase de instalação

#### P1: 'conda command not found'

**Problema**: Após a instalação do Miniforge, o comando não pode ser encontrado ao digitar o prompt 'conda'.

**Causa**: A variável de ambiente não está configurada corretamente.

**Solução**:

```bash
# Option 1: Reinitialize the shell
~/miniforge3/bin/conda init bash
# Then close the terminal and reopen it.

# Option 2: Manual Activation
source ~/miniforge3/etc/profile.d/conda.sh
conda activate base
```

#### P2: Falha ao criar o ambiente para 'environment.yml'

**Problema**: Um erro é relatado quando você executa 'conda env create -f environment.yml.

**Possíveis causas e soluções**:

1. **Problemas de rede** (mais comum):

```bash
# Switch to domestic mirroring source
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
# Then try again
conda env create -f environment.yml
```

2. **Espaço em disco insuficiente**:

```bash
# Check disk space
df -h
# Ensure there is at least 5GB of available space.
```

3. **Versão do conda muito antiga**:

```bash
conda update conda
```

#### P3: 'uv: command not found'

**Problema**: Após instalar uv, o sistema não encontra o comando.

**Solução**:

```bash
# Check if uv is installed
ls ~/.cargo/bin/uv

# If it exists, add it to PATH
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### P4: 'uv sync' relatou um erro

**Problema**: Falha ao executar 'uv sync' no diretório 'reBotArm_control_py.

**Possíveis causas**:

1. Não está no diretório correto

2. A versão do Python não corresponde.

**Solução**:

```bash
# Confirm that the directory is correct
ls -la pyproject.toml

# If it doesn't exist, it means you're not in the correct directory.
cd ~/reBotArm_control_py

# Confirm the Python version
python --version  # 应该是 3.10.x
```

### 9.2 Problema de reconhecimento de dispositivo USB

#### P5: 'lsusb' não vê o reSpeaker

**Etapas de solução de problemas**:

1. **Verifique se o cabo USB está bem conectado**: Desconecte e conecte novamente o cabo USB-C

2. **Mudar a porta USB**: Tente outras portas USB no seu computador (especialmente a porta azul USB 3.0)

3. **Verificar o cabo**: Certifique-se de que você está usando um cabo de dados (alguns cabos servem apenas para carregamento)

4. **Ver o log do sistema**:

```bash
# View USB connection logs
dmesg | tail -20
```

5. **Verificar se é necessário driver**:

```bash
# View detailed information of USB devices
lsusb -v -d 2886:
```

#### P6: 'lsusb' não vê o braço

**Etapas de solução de problemas**:

1. Confirme se o cabo USB está conectado corretamente

2. Confirme se a alimentação do braço robótico está ligada (interruptor da fonte de 24V)

3. Verifique se o indicador de energia está aceso

4. Ver o log do sistema:

```bash
dmesg | grep -i "ttyUSB\|ttyACM\|usb"
```

#### P7: 'Permission denied: /dev/ttyUSB0'

**Problema**: Você não tem permissão para acessar o dispositivo serial.

**Solução**:

```bash
# Temporary solution
sudo chmod 666 /dev/ttyUSB0

# Permanently resolve (recommended)
sudo usermod -a -G dialout $USER
# Then log out and log back in.
```

### 9.3 Problemas de runtime do Python

#### P8: 'ModuleNotFoundError: No module named 'usb.core''

**Problema**: Módulo Pyusb não encontrado.

**Solução**:

```bash
# Confirm in the flex environment
conda activate flex

# Manually install pyusb
conda install -c conda-forge pyusb

# If it still doesn't work, check the Python path.
which python  # Confirm that the output contains miniforge3/envs/flex
```

#### P9: 'ImportError: cannot import name 'RobotArm''

**Problema**: A biblioteca de controle do braço robótico não pode ser encontrada.

**Solução**:

```bash
# Confirm that reBotArm_control_py has been correctly cloned
ls ~/reBotArm_control_py

# Confirm that PYTHONPATH has been set
echo $PYTHONPATH  # should include the path to reBotArm_control_py

# If not, set it manually
export PYTHONPATH="/home/your_username/reBotArm_control_py:$PYTHONPATH"

# Or directly verify the path using Python
python -c "import sys; print(sys.path)"
```

#### P10: 'libusb-1.0.so. 0: cannot open shared object file'

**Problema**: A biblioteca de sistema libusb está ausente.

**Solução**:

```bash
# Install the libusb development library
sudo apt-get update
sudo apt-get install -y libusb-1.0-0-dev

# If it still doesn't work, try
conda install -c conda-forge libusb
```

### 9.4 Problemas de rede/API

#### P11: 'Groq API Key not set'

**Problema**: O programa informa que a API Key não está definida.

**Solução**:

1. Verifique se o VOICE_CFG["api_key"] em "sound_tracking_arm.py" foi modificado

2. Confirme se o formato da API Key está correto (deve começar com 'gsk_')

3. Você também pode definir variáveis de ambiente:

```bash
export GROQ_API_KEY="gsk_xxxxxxxxxxxx"
```

#### P12: Quando 'Connection error' ou 'Timeout' ao chamar Groq API

**Problema**: Não é possível conectar ao servidor Groq.

**Etapas de solução de problemas**:

1. **Testar a conectividade de rede**:

```bash
ping console.groq.com -c 3
```

2. - - Se o ping falhar, você precisa configurar um agente **:

Edite o 'VOICE_CFG em 'sound_tracking_arm.py ':

```python
proxy": "http://your proxy IP:port",  # e.g., "http://127.0.0.1:7890
```

3. **Se o agente não funcionar, verifique se o agente está funcionando corretamente**:

```bash
# Test via proxy
curl -x http://your_proxy_IP:port https://console.groq.com
```

#### P13: 'Rate limit exceeded' / 'Quota exceeded'

**Problema**: A frequência de chamadas da API excede o limite ou a cota foi esgotada.

**Solução**:

1. Acesse https://console.groq.com/settings/limits para ver os limites

2. Contas gratuitas Groq têm um limite de número de requisições por minuto, reduza a frequência de uso.

3. Se for um problema de cota, talvez seja necessário fazer upgrade para uma conta paga.

#### P14: 'TTS broadcast failure'/'aplay not found'

**Problema**: A função de transmissão de voz não está normal.

**Solução**:

```bash
# Install alsa-utils (including aplay)
sudo apt-get install -y alsa-utils

# Check audio output device
aplay -l

# If the device is not visible, you may need to configure the default audio output.
```

### 9.5 Problema do braço mecânico

#### P15: Braço mecânico não responde/não se move

**Etapas de solução de problemas**:

1. **Verificar dispositivo serial**:

```bash
ls -la /dev/ttyUSB*
# or
ls -la /dev/ttyACM*
```

2. **Verificar permissões**:

```bash
# Ensure read and write permissions
ls -la /dev/ttyUSB0  # should show crw-rw-rw-
```

3. **Verificar a fonte de alimentação**: Confirme se a fonte de alimentação de 24V está ligada

4. Verificar o log do programa: Há alguma mensagem de erro sobre 'ArmCtrl' ao executar o programa?

5. **Tentar especificar a porta serial correta**:

```bash
python sound_tracking_arm.py --port /dev/ttyACM0
# or
python sound_tracking_arm.py --port /dev/ttyUSB1
```

#### P16: Movimento anormal/jitter do braço mecânico

**Possíveis causas**:

1. O braço mecânico não está devidamente fixado—verifique se a base está firme

2. Há obstáculos no alcance de movimento—limpe o espaço de movimento

3. Ângulo de junta anormal—tente redefinir: diga "voltar à posição inicial" ou reinicie o programa

#### P17: Aquecimento anormal do motor

⚠️**Aviso**: Se o motor aquecer de forma anormal, desligue a alimentação imediatamente!

**Possíveis causas**:

- O braço mecânico está bloqueado por força externa e o motor continua fazendo força

- Movimento muito rápido

- Operação contínua por muito tempo

**Solução**:

1. Desligue a alimentação e aguarde o motor esfriar

2. Verifique se há obstrução mecânica

3. Reduza a frequência de movimento

### 9.6 Problemas relacionados a áudio

#### P18: Nenhum som na gravação do microfone

**Etapas de solução de problemas**:

1. **Verificar se o dispositivo é reconhecido**:

```bash
arecord -l  # Should see reSpeaker XVF3800
```

2. **Verificar o número do dispositivo**:

```bash
# View detailed device information
cat /proc/asound/cards
```

3. **Teste de gravação manual**:

```bash
# Record with a specified device number (adjust the card and device numbers according to the actual situation)
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
```

4. **Verifique se o array de microfones está corretamente conectado**: Confirme se o cabo FPC está bem conectado

#### P19: Ângulo DOA incorreto/saltando

**Possíveis causas e soluções**:

1. **Ambiente muito barulhento**: Teste em um ambiente silencioso

2. **Array de microfones não está plano**: Certifique-se de que o reSpeaker esteja colocado horizontalmente

3. **Forte interferência de fonte sonora próxima**: Mantenha distância de ventiladores, alto-falantes e outros equipamentos

4. Ajuste o limiar de disparo: Aumente o parâmetro '-- threshold'.

### 9.7 Outras questões

#### P20: Ctrl C não consegue sair

**Solução**:

```bash
# Try pressing Ctrl+C multiple times
# Or open another terminal
killall python
```

#### P21: Travamento durante a execução do programa

**Etapas de solução de problemas**:

1. Ver as últimas mensagens de erro antes do travamento.

2. Use o modo '-- debug' para obter mais logs

3. Verifique se há memória insuficiente: 'free -h'

4. Verifique se a conexão USB está instável

#### P22: Como recomeçar completamente

Se você quiser reconfigurar tudo do zero:

```bash
# 1. Delete Conda Environment
conda activate base
conda env remove -n flex

# 2. Delete the code directory
rm -rf ~/reBot-Arm-reSpeaker-Flex
rm -rf ~/reBotArm_control_py

# 3. Re-execute the installation steps according to this Wiki.
```

---

## 10. Precauções de segurança

⚠️ **Ao usar este item, leia atentamente todas as instruções de segurança a seguir. Operação inadequada pode resultar em danos ao equipamento ou lesões pessoais.**

### 10.1 Segurança do braço mecânico

#### Regras básicas de segurança

| Regra | Descrição | Consequências |
|-----|-----|-----|
| Não mova o braço mecânico à força | A junta do braço mecânico é acionada por um motor de precisão, e a rotação manual forçada pode causar danos às engrenagens | Danos ao motor, alto custo de manutenção |
| Garanta que o alcance de movimento esteja livre de barreiras | Antes da operação, verifique se não há pessoas, paredes ou outros objetos no alcance de movimento do braço robótico | Colisões causam danos ao braço robótico ou a objetos ao redor |
| Desconecte o cabo USB em caso de emergência | Em caso de emergência, desconecte imediatamente o cabo USB do braço mecânico para cortar o sinal de controle | O braço mecânico para de se mover |
| A carga não deve exceder 1500g | Não segure objetos com mais de 1,5kg nas garras | Sobrecarga e dano ao motor |
| Mantenha uma distância segura de 1,5m | Mantenha uma distância de pelo menos 1,5m quando o braço robótico estiver em funcionamento | Evitar lesões por colisão |

#### Limites de Ângulo das Juntas

O sistema possui proteção de limite de junta integrada, a tabela a seguir é para referência. Observe que a unidade de radianos (rad) é usada no código.

| Junta | Nome | Mín (Ângulo) | Máx (Ângulo) | Descrição |
|-----|-----|-----|-----|-----|
| J1 | Rotação da base | -149.0 ° | 149.0 ° | Rotação horizontal, alcance máximo |
| J2 | Inclinação do ombro | -206.3 ° | 0 ° | Lança para cima, apenas para cima |
| J3 | Inclinação do cotovelo | -206.3 ° | 0 ° | Antebraço estendido, apenas para frente |
| J4 | Rotação do pulso | -85.9 ° | 85.9 ° | Rotação da extremidade para a esquerda e direita |
| J5 | Inclinação do pulso | -85.9 ° | 85.9 ° | Oscilação da extremidade para cima e para baixo |
| J6 | Guinada do pulso | -85.9 ° | 85.9 ° | Direção de ajuste fino da extremidade |
| J7 | Abertura e fechamento da garra | -320.9 | 0 | Controle da garra, número negativo é abrir |

### 10.2 Segurança Elétrica

- **Não conectar ou desconectar com energia ligada**: antes de conectar ou desconectar a interface de alimentação XT30 2 2, a alimentação deve ser desligada primeiro

- **Não conectar o motor a quente**: não conecte ou desconecte o cabo do motor quando a alimentação estiver ligada

- **Use a fonte de alimentação correta**: somente fonte de alimentação de 24V 15A pode ser usada, o uso de outras fontes pode causar danos ao equipamento

- **Evite ambiente úmido**: não use em ambientes úmidos, empoeirados e de alta temperatura

- **Verifique o cabo**: verifique se o cabo de alimentação e o cabo de sinal estão intactos e sem danos antes de usar

### 10.3 Segurança do ambiente de uso

- **Menores precisam usar sob supervisão de adultos**: o braço mecânico tem certa força, operação inadequada pode causar ferimentos

- **Bancada estável**: garanta que o braço robótico esteja fixado em uma mesa horizontal estável

- **Espaço adequado**: reserve pelo menos 1 metro de espaço seguro ao redor do braço robótico

- **Boa iluminação**: facilita observar o estado de operação do braço robótico

- **Mantenha afastado de fontes de água**: equipamentos eletrônicos e água não podem ter contato

### 10.4 Instruções de segurança para reset do motor

Antes do reset do motor:

- 2 dispositivos de fixação (tamanho ≥ 3 polegadas)

- Mantenha uma distância segura de pelo menos 1 m durante a comissionamento e operação

- É proibido conectar o motor a quente; a fonte de alimentação deve ser desconectada antes de conectar ou desconectar a interface XT30 2 2

- Proibido sobrecarga do motor, operação em velocidade excessiva

- Verifique a fiação e os fixadores antes da partida do equipamento

- Não use em ambiente úmido, de alta temperatura ou empoeirado

---

## 11. Introdução aos Princípios Técnicos

Esta seção apresenta brevemente os principais princípios técnicos envolvidos no projeto para ajudar usuários interessados a entender a "mágica por trás". A compreensão completa não é necessária para usar este item.

### 11.1 Princípio de localização de fonte sonora DOA

#### Pergunta: como saber de que direção o som está vindo?

O reSpeaker tem 4 microfones dispostos em anel. Quando o som vem de uma determinada direção, há uma pequena diferença no tempo de chegada em diferentes microfones (chamada de "diferença de tempo" ou TDOA).

**Explicação popular**: assim como quando você fecha os olhos, se alguém bater palmas à sua esquerda, seu ouvido esquerdo ouvirá primeiro, e seu ouvido direito ouvirá um pouco depois. Com base nessa diferença de tempo, o cérebro consegue dizer que o som está à esquerda.

O chip XVF3800 embutido no reSpeaker faz exatamente isso:

1. Coleta os sinais dos 4 microfones ao mesmo tempo

2. O chip analisa a diferença de fase/diferença de tempo dos 4 sinais

3. Calcula a direção (0 ° ~ 360 °) de onde o som provavelmente vem.

4. Envia os dados do ângulo DOA para o computador via USB

### 11.2 Processo de Reconhecimento de Fala

#### Pergunta: como transformar o que você fala em palavras?

O projeto usa o modelo Whisper da OpenAI e utiliza chamadas de API aceleradas da Groq. O processo geral é:

1. **Gravação**: 6 canais de áudio de 16kHz são coletados com `arecord` a partir do arranjo de microfones

2. **Pré-processamento**: usar NumPy para extrair o primeiro canal (o sinal após o beamforming), normalizar e amplificar o ganho

3. **Upload**: enviar o arquivo de áudio processado para o servidor Groq

4. Reconhecimento: o modelo Whisper transcreve as formas de onda de áudio em texto.

5. **Retorno**: obter o resultado do reconhecimento (por exemplo, "virar à esquerda")

O modelo Whisper é um dos modelos de reconhecimento de fala mais avançados, suporta vários idiomas e possui alta precisão de reconhecimento.

### 11.3 Princípio de Compreensão de Intenção

#### Pergunta: como a IA consegue entender o que você quer que o braço mecânico faça?

O projeto usa o grande modelo de linguagem Llama-3.3-70B da Meta, chamado por meio da Groq API.

**Tecnologia central**: Engenharia de Prompt

No código, damos à IA um "modelo de instrução" detalhado e dizemos a ela:

- Quais ações podem ser executadas (virar à esquerda, virar à direita, dizer olá, etc.)

- O significado de cada ação

- Requisitos de formato de saída (JSON)

Por exemplo, quando o usuário diz "me ajude a virar a cabeça para a esquerda":

1. O texto é enviado para o Llama-3.3-70B

2. A IA, combinada com os prompts do sistema, entende a intenção

3. Gera um JSON estruturado:

   ```json
   {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
   ```

4. O programa analisa o JSON e executa a ação correspondente

### 11.4 Princípio de controle do manipulador

#### Pergunta: como o computador controla o braço mecânico?

**Cinemática (Kinematics)**:

O núcleo do controle de braço robótico é a cinemática — dado o ângulo de junta alvo, calcular a posição da extremidade do braço robótico no espaço (cinemática direta); ou, inversamente, dado a posição alvo da extremidade, calcular quanto cada junta deve girar (cinemática inversa).

O projeto usa a biblioteca **Pinocchio** para cálculos cinemáticos e planejamento de trajetória.

**Interpolação de movimento**:

O manipulador não "salta" diretamente do ponto A para o ponto B, mas faz uma transição suave por meio de um algoritmo de interpolação. A função de suavização cosseno (cosine easing) é usada no código:

```python
# Easing formula: makes motion smoother and more natural
ease = -(math.cos(math.pi * t) - 1) / 2.0
```

Isso faz com que o braço robótico comece acelerando lentamente e desacelere lentamente antes de parar, como um movimento humano natural.

**Proteção de limite de junta**:

Todos os ângulos de junta alvo são limitados dentro de uma faixa segura:

```python
np.clip(target_angle, JOINT_LIMITS_MIN, JOINT_LIMITS_MAX)
```

Isso garante que o braço robótico não exceda os limites físicos, evitando danos.

---

## 12. Referências

### 12.1 Links Relacionados ao Projeto

| Recurso | Link | Descrição |
|-----|-----|-----|
| Repositório principal do projeto | https://github.com/xr686/reBot-Arm-reSpeaker-Flex | Programa principal de controle por som |
| Biblioteca de controle do braço robótico | https://github.com/Seeed-Projects/reBotArm_control_py | Biblioteca de controle do braço robótico em Python |
| reBot Arm Oficial | https://www.rebotix.com/ | Site oficial do braço robótico |
| Seeed Studio | https://www.seeedstudio.com/ | Compra do reSpeaker Flex e suporte técnico |

### 12.2 Wiki Relacionada ao reSpeaker Flex

| Recursos | Links |
|-----|-----|
| Wiki oficial do reSpeaker Flex | https://wiki.seeedstudio.com/pt-br/reSpeaker_USB_Mic_Array/ |
| Documentação técnica do XMOS XVF3800 | https://www.xmos.com/xvf3800 |
| Guia do usuário XVF3800 | https://www.xmos.com/download/XVF3800-User-Guide (1).pdf |
| Descrição do algoritmo DOA do arranjo de microfones | Consulte a documentação oficial do reSpeaker Flex |

### 12.3 Wiki Relacionada ao Braço Robótico

| Recurso | Link |
|-----|-----|
| reBot-DevArm GitHub | https://github.com/Seeed-Projects/reBot-DevArm |
| Guia de montagem do ReBot Arm | Consulte a Wiki oficial da Seeed Studio |
| Biblioteca de cinemática Pinocchio | https://github.com/stack-of-tasks/pinocchio |

### 12.4 Documentação de API e ferramentas

| Recurso | Link | Descrição |
|-----|-----|-----|
| Console Groq | https://console.groq.com/keys | Gerenciamento de API Key |
| Documentação da Groq API | https://console.groq.com/docs | Instruções da API |
| Comunidade de desenvolvedores Groq | https://discord.gg/groq | Comunidade de suporte técnico |
| Projeto Edge-TTS | https://github.com/rany2/edge-tts | Ferramenta de síntese de fala |
| Artigo do Whisper | https://arxiv.org/abs/2212.04356 | Artigo técnico de reconhecimento de fala |
| Modelo Llama | https://ai.meta.com/llama/ | Modelo de linguagem de grande porte oficial |

### 12.5 Recursos de Aprendizado de Tecnologia

| Tópicos | Recursos recomendados |
|-----|-----|
| Conceitos básicos de Python | https://docs.python.org/zh-cn/3/tutorial/ |
| Uso do Conda | https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html |
| Conceitos básicos de Ubuntu | https://ubuntu.com/tutorials/command-line-for-beginners |
| Conceitos básicos de Git | https://www.progit.cc/ |
| Introdução à Robótica | Modern Robotics (Kevin Lynch) |
| Introdução ao reconhecimento de fala | Curso de Deep Learning do Andrew Ng - Sequence Model |

### 12.6 Comunidade e Suporte

- **GitHub Issues**: se você encontrar um problema que não esteja coberto por este documento, pode enviar uma Issue no repositório GitHub do projeto.

- **Fórum Seeed Studio**:https://forum.seeedstudio.com/ (discussões técnicas relacionadas ao reSpeaker)

- **Groq Discord**:https://discord.gg/groq (questões relacionadas à API)

---

## Escrito no final

Parabéns por ter lido até o final do documento! Se você seguir esta Wiki passo a passo, acredito que tenha construído com sucesso seu próprio sistema de braço robótico de voz inteligente.

Este projeto envolve tecnologias de processamento de som, interação de fala com IA, controle de movimento de robôs e outras áreas, sendo um bom projeto de prática abrangente para iniciantes. Espero que você possa continuar explorando o seguinte:

- Tentar modificar comandos de voz para adicionar mais ações personalizadas

- Ajustar parâmetros de DOA para tornar o rastreamento da fonte sonora mais sensível

- Explorar a implantação do projeto em dispositivos embarcados como Raspberry Pi

- Adicionar módulo de visão para fazer o braço robótico "enxergar"

Se você tiver quaisquer dúvidas ou sugestões, fique à vontade para enviar feedback via GitHub Issue. Divirta-se!🤖

---

> **Aviso**: Este documento é baseado no código open source do projeto e é apenas para referência. A operação do braço mecânico é perigosa, por favor, compreenda totalmente as precauções de segurança antes de operá-lo. O autor não se responsabiliza por quaisquer danos ao equipamento ou lesões pessoais causadas pelo uso deste documento.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
