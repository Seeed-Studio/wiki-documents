---
description: DashCamNet com Jetson Xavier NX Multicâmera
title: DashCamNet com Jetson Xavier NX Multicâmera
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /DashCamNet-with-Jetson-Xavier-NX-Multicamera
last_update:
  date: 01/04/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DashCamNet-with-Jetson-Xavier-NX-Multicamera/
---

# DashCamNet e PeopleNet com Jetson Xavier NX Multicâmera

## Introdução

Atualmente, nos campos de direção autônoma, gravação em carros e monitoramento de infrações, usamos com frequência inteligência artificial para nos ajudar a identificar informações de veículos, placas de veículos e obstáculos ao redor. Graças ao grande número de modelos pré-treinados fornecidos pela Nvidia NGC, podemos executar essas tarefas complexas com mais facilidade.

Criar um modelo de IA/aprendizado de máquina do zero pode custar muito tempo e dinheiro. O [aprendizado por transferência](https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/) é uma técnica popular que pode ser usada para extrair recursos aprendidos de um modelo de rede neural existente para um novo modelo. O NVIDIA TAO (*Train, Adapt, and Optimize*) Toolkit é uma solução baseada em CLI e notebooks Jupyter do [NVIDIA TAO](https://developer.nvidia.com/tao), que abstrai a complexidade do framework de IA/aprendizado profundo, permitindo que você faça o ajuste fino em modelos de IA pré-treinados de alta qualidade da NVIDIA com apenas uma fração dos dados em comparação com o treinamento do zero.

O TAO Toolkit também oferece suporte a mais de 100 permutações de arquiteturas de modelo e backbones otimizados pela NVIDIA, tais como EfficientNet, YOLOv3/v4, RetinaNet, FasterRCNN, UNET e muitos outros.

<!-- Credit to NVIDIA's [repository](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) and Tomasz's [project](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines), we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) and [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) are good for this demo. -->

Crédito ao [repositório](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) da NVIDIA e ao [projeto](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines) de Tomasz, vamos detectar carros e pessoas com várias câmeras implantadas no Jetson Xavier NX. O [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) é adequado para esta demonstração.

*O NVIDIA TAO Toolkit era anteriormente chamado de NVIDIA Transfer Learning Toolkit (Tlt).*

<p style={{textAlign: 'center'}}><img src="https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg" alt="pir" width={800} height="auto" /></p>

## Requisitos de Materiais

### Configuração de Hardware

<!-- - [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) / [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) -->
- [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)

<p style={{textAlign: 'center'}}><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg" alt="pir" width={300} height="auto" /></p>

- Webcam USB / Raspberry Pi Camera V2.1 / [câmeras IMX219-130 8MP](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) / [câmeras IMX477 de 12,3MP de alta qualidade](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<p style={{textAlign: 'center'}}><img src="https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400" alt="pir" width={300} height="auto" /></p>

- Monitor com interface HDMI, DP ou eDP
- PC com sistema operacional baseado em Linux

### Configuração de Software

- Jetpack 4.5 ou 4.6 para Jetson Xavier NX
- Docker
- DeepStream
- TAO Toolkit
- Python3.6 com Pypi (python3-pip) e ambientes virtuais
- NVIDIA Container Toolkit

Os métodos de instalação de software serão fornecidos nas etapas a seguir.

## Pré-instalação

Antes de iniciarmos o projeto, precisamos instalar o Docker Engine no Ubuntu. Existem várias maneiras de instalar o Docker Engine e você pode escolher qualquer uma delas conforme suas necessidades. Se você já o configurou, pode pular esta etapa.

- A maioria dos usuários [configura os repositórios do Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) e instala a partir deles pela facilidade de instalação e atualização, o que é a abordagem recomendada.
- Alguns usuários baixam o pacote DEB e [o instalam manualmente](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package) e gerenciam as atualizações completamente de forma manual. Isso é útil em situações como instalar o Docker em sistemas isolados, sem acesso à internet.
- Em ambientes de teste e desenvolvimento, alguns usuários optam por usar [scripts de conveniência](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) automatizados para instalar o Docker.

Aqui vamos usar a primeira opção. Antes de instalarmos o Docker, é necessário garantir que a versão dele seja a mais recente. Os nomes das versões antigas podem ser `docker`, `docker.io` ou `docker-engine`; você pode verificar isso usando o seguinte comando:

```shell
sudo apt-get purge docker docker-engine docker.io containerd runc
```

Quando você desinstala o Docker, o conteúdo de `/var/lib/docker/`, incluindo imagens, contêineres, volumes e redes, é preservado. Se você quiser começar com uma instalação limpa, pode consultar a seção [uninstall Docker Engine](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine) na parte inferior desta página.

### Instalar o Docker usando o repositório

Antes de instalarmos o Docker Engine em uma nova máquina host, é necessário configurar o repositório do Docker. Depois disso, podemos instalar e atualizar o Docker a partir do repositório.

- **Passo 1**. Configure o repositório com o pacote `apt`

Atualize o índice de pacotes `apt` e instale pacotes para permitir que o `apt` use um repositório via HTTPS com os seguintes comandos:

   ```shell
    sudo apt-get update
    sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

Adicione a chave GPG oficial do Docker:

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

Use o seguinte comando para configurar o repositório **stable**. Para adicionar o repositório **nightly** ou **test**, adicione a palavra `nightly` ou `test` (ou ambas) após a palavra `stable` nos comandos abaixo. Você pode [saber mais sobre os canais **nightly** e **test**](https://docs.docker.com/engine/install/) aqui.

   ```shell
    echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

- **Passo 2**. Instale o Docker Engine

Atualize o índice de pacotes `apt` e instale a **versão mais recente** do Docker Engine e do containerd com os seguintes comandos:

   ```shell
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

Podemos verificar se o Docker Engine foi instalado corretamente executando a imagem `hello-world`.

   ```shell
    sudo docker run hello-world
   ```

- **Passo 3**. Gerencie o Docker como um usuário não root com os seguintes processos.

Crie o grupo `docker`.

   ```shell
   sudo groupadd docker
   ```

Adicione o usuário ao grupo `docker`.

   ```shell
   sudo usermod -aG docker $USER
   ```

Faça logout e login novamente para reavaliar a associação ao grupo.

Verifique se você consegue executar comandos `docker` sem `sudo` executando `hello-world`

   ```shell
   docker run hello-world
   ```

- **Passo 4**. Configure o NVIDIA Container Toolkit com os seguintes processos:

Configure o repositório `stable` e a chave GPG:

   ```shell
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
      && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   ```

Atualize a lista de pacotes e instale o pacote `nvidia-docker2` (e dependências):

   ```shell
   sudo apt-get update
   sudo apt-get install -y nvidia-docker2
   ```

Reinicie o daemon do Docker para concluir a instalação após definir o runtime padrão:

   ```shell
   sudo systemctl restart docker
   ```

## Primeiros Passos

### Instalar o NVIDIA GPU Cloud CLI ARM64 Linux

O **NVIDIA GPU Cloud (NGC) CLI** é uma interface de linha de comando baseada em Python para gerenciar contêineres Docker no NGC Container Registry. Com o NGC CLI, você pode executar muitas das mesmas operações disponíveis no site da NGC, como executar jobs e visualizar repositórios Docker dentro do espaço da sua organização e equipe.

- **Passo 1**. Vá até a página [Download CLI](https://ngc.nvidia.com/setup/installers/cli) e baixe o arquivo zip que contém o binário. O binário NGC CLI para ARM64 é compatível com o Ubuntu 18.04 e distribuições posteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png" alt="pir" width={800} height="auto" /></p>

- **Passo 2**. Transfira o arquivo zip para um diretório onde você tenha permissões, descompacte-o e, por fim, execute o binário.

Você também pode baixar, descompactar e instalar pela linha de comando, indo para um diretório onde você tenha permissão de execução e, em seguida, executando o seguinte comando:

```shell
wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc
```

Verifique o hash md5 do binário para garantir que o arquivo não foi corrompido durante o download:

```shell
md5sum -c ngc.md5
```

- **Etapa 3**. Adicione seu diretório atual ao path:

```shell
echo "export PATH=\"\$PATH:$(pwd)\"" >> ~/.bash_profile && source ~/.bash_profile
```

Você deve configurar o NGC CLI para o seu uso a fim de executar os comandos.

- **Etapa 4**. Digite o seguinte comando, incluindo sua chave de API quando solicitado:

```shell
ngc config set
```

#### Geração de chave de API do NGC

É necessária uma chave de API para configurar o NGC CLI; podemos gerá-la através do site do NGC.

- **Etapa 1**. Vá para o [site](https://catalog.ngc.nvidia.com/) e clique em "Sign In/Sign Up".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 2**. Registre uma conta como desenvolvedor NVIDIA.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 3**. Escolha uma conta para continuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 4**. Clique em "Setup" no canto superior direito da página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 5**. Selecione "Get API Key".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 6**. Clique em "Generate API Key".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png" alt="pir" width={800} height="auto" /></p>

- **Etapa 7**. A chave de API será exibida na parte inferior da página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png" alt="pir" width={800} height="auto" /></p>

### Instalar o TAO Toolkit

Python3 e python3-pip devem ser instalados primeiro:

```shell
sudo apt install -y python3 python3-pip
```

TAO Toolkit é um pacote Python pip que é hospedado no NVIDIA PyIndex. O pacote usa a docker restAPI internamente para interagir com o registro NGC Docker para puxar e instanciar os containers docker subjacentes. Nas etapas anteriores, já configuramos uma conta NGC e geramos uma chave de API associada a ela. Se você quiser ver mais sobre a seção [Installation Prerequisites](https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq), você pode clicar para obter detalhes sobre como criar uma conta NGC e obter uma chave de API.

#### **Ambiente Virtual - Virtualenv**

Um Ambiente Virtual é uma cópia isolada do Python que permite trabalhar em um projeto específico sem se preocupar em afetar outros projetos. Por exemplo, você pode trabalhar em um projeto que exija Django 1.3 enquanto processa um projeto que exija Django 1.0. Você pode clicar [aqui](http://pypi.python.org/pypi/virtualenv) para criar ambientes Python isolados.

É altamente recomendado configurar primeiro um ambiente virtual e depois instalar o TAO Toolkit.

- Você pode instalar virtualenv via pip:

```shell
pip install virtualenv
```

- Crie um ambiente virtual:

```shell
virtualenv venv
```

Ele cria uma cópia do Python em qualquer diretório em que você executou o comando, colocando-o em uma pasta chamada `venv`.

- Ative o ambiente virtual:

```shell
source venv/bin/activate
```

- Se você terminou de trabalhar no ambiente virtual por enquanto, pode desativá-lo:

```shell
deactivate
```

Isso o leva de volta ao interpretador Python padrão do sistema com todas as suas bibliotecas instaladas.

Para excluir um ambiente virtual, basta excluir sua pasta.

**virtualenvwarpper**

Depois de um tempo, porém, você pode acabar com muitos ambientes virtuais espalhados pelo sistema e é possível que você esqueça seus nomes ou onde foram colocados. Portanto, estamos usando virtualenvwarpper. O [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/index.html) fornece um conjunto de comandos que torna o trabalho com ambientes virtuais muito mais agradável. Ele também coloca todos os seus ambientes virtuais em um só lugar.

Você pode instalar (certifique-se de que **virtualenv** já está instalado):

   ```
   pip install virtualenvwrapper
   export WORKON_HOME=~/Envs
   source /usr/local/bin/virtualenvwrapper.sh
   ```

Se quiser ver mais informações sobre isso, consulte as [instruções completas de instalação do virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/install.html).)

*Você pode seguir as instruções neste [link](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html) para configurar um virtualenv Python usando um virtualenvwrapper.*

#### **Definir a versão do Python no Ambiente Virtual**

- **Etapa 1**. Depois de seguir as instruções para instalar `virtualenv` e `virtualenvwrapper`, defina a versão do Python no `virtualenv`. Isso pode ser feito de uma das seguintes maneiras:

- Definindo a variável de ambiente chamada VIRTUALENVWRAPPER_PYTHON. Essa variável deve apontar para o caminho onde o binário do python3 está instalado na sua máquina local. Você também pode adicioná-la ao seu `.bashrc` ou `.bash_profile` para definir seu `virtualenv` Python por padrão.

```shell
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
```

- Definindo o caminho para o binário python3 ao criar seu `virtualenv` usando o wrapper `virtualenvwrapper`

```shell
mkvirtualenv launcher -p /path/to/your/python3
```

- **Etapa 2**. Depois de entrar no `virtualenv`, o prompt de comando deve mostrar o nome do seu ambiente virtual

```shell
   (launcher) py-3.6.9 desktop:
```

- **Etapa 3**. Quando terminar sua sessão, você pode desativar seu `virtualenv` usando o comando `deactivate`:

```shell
deactivate
```

- **Etapa 4**. Você pode reinstanciar esse `virtualenv` criado usando o comando `workon`.

   ```shell
   workon launcher
   ```

#### **Instalar o pacote TAO**

- **Etapa 1**. Já configuramos o ambiente de que precisamos. Agora podemos instalar o pacote Python TAO Launcher chamado `nvidia-tao` com o seguinte comando.

   ```shell
   pip3 install nvidia-pyindex
   pip3 install nvidia-tao
   ```

- **Etapa 2**. Invoque os entrypoints usando o comando `tao`.

```
tao --help
```

A saída de exemplo do comando acima é:

```
usage: tao [-h]
         {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,
         heartratenet,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,
         retinanet,speech_to_text,ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
         ...

Launcher for TAO

optional arguments:
-h, --help            show this help message and exit

tasks:
      {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,heartratenet
      ,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,retinanet,speech_to_text,
      ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
```

- **Etapa 3**. Observe que em tasks você pode ver todas as tarefas que podem ser chamadas pelo launcher. As seguintes são as tarefas específicas que ajudam a lidar com os comandos lançados usando o TAO Launcher:

  - list
  - stop
  - info

**Atenção:** Se o terminal informar "bash: Cannot find tao", use este comando:

```shell
export PATH=$PATH:~/.local/bin
tao --help
```

### Instalar o DeepStream5

- **Etapa 1**. Edite `/etc/apt/sources.list.d/nvidia-l4t-apt-source.list` e substitua .6 por .5:

```shell
deb https://repo.download.nvidia.com/jetson/common r32.5 main
#deb https://repo.download.nvidia.com/jetson/common r32.6 main
deb https://repo.download.nvidia.com/jetson/t194 r32.5 main
#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main
```

- **Etapa 2**. Digite `sudo apt update` e tente novamente instalar o DeepStream 5.1.

E então instale-o com o seguinte comando:

```shell
sudo -H pip3 install pyds-ext
```

Para mais informações, consulte os links abaixo:

- [DeepStream-Docker Containers](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson)
- [Integrating TAO Models into DeepStream](https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html)
- [DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet)

### Instalar os Pipelines Multicâmera Jetson e Início Rápido

Por fim, vamos construir um pipeline típico de várias câmeras, ou seja, `N×(capture)->preprocess->batch->DNN-> <<your application logic here>> ->encode->file I/O + display`, usando gstreamer e deepstream por baixo dos panos. Forneça acesso programático para configurar o pipeline em python via pacote jetmulticam.

Este projeto utiliza aceleração de hardware da Nvidia para uso mínimo de CPU. Por exemplo, você pode executar detecção de objetos em tempo real em 6 fluxos de câmera usando apenas 16,5% de CPU. Você pode facilmente construir sua lógica personalizada em python acessando dados de imagem (via np.array), bem como resultados de detecção de objetos.

- **Etapa 1**. Instale os Pipelines Multicâmera Jetson com o seguinte comando:

```shell
git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git
cd jetson-multicamera-pipelines
bash scripts/install_dependencies.sh
sudo -H pip3 install Cython
sudo -H pip3 install .
```

- **Etapa 2**. Execute o exemplo com suas câmeras:

```shell
source scripts/env_vars.sh 
cd examples
sudo -H python3 example.py
```

*Este é o `example.py`; você pode aplicá-lo tanto a uma câmera monocular quanto a uma multi‑câmera.*

```cpp
import time
from jetmulticam import CameraPipelineDNN
from jetmulticam.models import PeopleNet, DashCamNet

if __name__ == "__main__":

    pipeline = CameraPipelineDNN(
        cameras=[2, 5, 8],
        models=[
            PeopleNet.DLA1,
            DashCamNet.DLA0,
            # PeopleNet.GPU
        ],
        save_video=True,
        save_video_folder="/home/nx/logs/videos",
        display=True,
    )

    while pipeline.running():
        arr = pipeline.images[0] # np.array with shape (1080, 1920, 3), i.e. (1080p RGB image)
        dets = pipeline.detections[0] # Detections from the DNNs
        time.sleep(1/30)
```

Este é o resultado de multi‑câmera exibido assim:

<video id="video" controls src="https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4" preload="none">
</video>

*Mais*

Há mais modelos / aceleradores compatíveis:

```cpp
pipeline = CameraPipelineDNN(
    cam_ids = [0, 1, 2]
    models=[
        models.PeopleNet.DLA0,
        models.PeopleNet.DLA1,
        models.PeopleNet.GPU,
        models.DashCamNet.DLA0,
        models.DashCamNet.DLA1,
        models.DashCamNet.GPU
        ]
    # ...
)
```

**Atenção:** Se o terminal informar "EGL Not found", verifique o [EGLDevice](https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html).

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
