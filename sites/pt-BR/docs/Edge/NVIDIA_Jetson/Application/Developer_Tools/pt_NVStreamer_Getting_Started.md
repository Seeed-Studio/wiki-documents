---
description: Este wiki fornece um tutorial sobre como usar o NVStreamer para streaming de vídeo RTSP no reComputer Jetson.
title: Primeiros Passos com o NVStreamer
keywords:
  - reComputer
  - NVStreamer
  - RTSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /getting_started_with_nvstreamer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
createdAt: '2024-07-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_nvstreamer/
---
# Como Usar o NVStreamer para Streaming RTSP no reComputer com Jetson Platform Services

## Introdução

[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html) é um software desenvolvido pela NVIDIA que pode armazenar e servir arquivos de vídeo, os quais podem então ser transmitidos usando o protocolo RTSP. Ele é particularmente útil para testes com VST, pois fornece um método alternativo às câmeras para criar fontes de vídeo como entrada para o VST. Especificamente, ele oferece um mecanismo para usar arquivos de vídeo específicos como entrada para testes com VST. O VST pode ser configurado para receber streams RTSP como se estivessem vindo de câmeras ONVIF-S.

Este wiki fornece um tutorial sobre como usar o NVStreamer para streaming de vídeo RTSP no [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## Pré-requisitos

Antes de prosseguir com o processo de configuração, certifique-se de que o seu sistema atenda aos seguintes pré-requisitos:
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

- Um reComputer J4012 Orin NX 16G executando Ubuntu `22.04` ou `posterior`.
- O sistema Linux deve ter espaço disponível suficiente para armazenar os arquivos de vídeo que você irá servir (normalmente algumas centenas de GB).
- Versão do driver: `535.113.01`, Jetpack `6.0` e Versão do CUDA: `12.2`.
- Certifique-se de que o `JetPack` e os pacotes relacionados a `Jetson services` estejam instalados.

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## Primeiros Passos

### Instalação e Inicialização

**Passo 1**: Baixe o pacote de aplicativo **`nvstreamer-1.1.0.tar.gz`** a partir do NGC para o seu Jetson usando este link: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Você precisará inserir suas credenciais do NGC. Na página, use uma das opções disponíveis no menu **`Download`** (canto superior direito):

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**Passo 2**: Execute os seguintes comandos para aumentar o tamanho do buffer de soquete do sistema operacional. Isso é para evitar perda de pacotes em casos de vídeos com altas taxas de bits ou quadros IDR grandes. Sem aumentar esses tamanhos de buffer, você pode às vezes ver artefatos em blocos em alguns arquivos de vídeo:

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**Passo 3**: Inicie o NVStreamer usando a seguinte linha de comando:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml up -d  --force-recreate
```

Para encerrar a instância do NVStreamer, use o seguinte comando:

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml down --remove-orphans
```

### Fazer Upload de Vídeo para o NVStreamer

**Passo 1**: Abra um navegador web (recomendamos usar o Chrome) e navegue até este endereço (no mesmo sistema ou em outro sistema na mesma rede).

```markdown
http://[reComputer-IP]:31000
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**Passo 2**: Selecione **`File Upload`** e escolha o arquivo de vídeo em disco que você deseja testar como uma câmera (codecs suportados: h264/h265, contêineres: mp4/mkv). Arraste e solte-o na área indicada. Se o arquivo de vídeo contiver quadros B, o NVStreamer transcodificará o arquivo automaticamente, o que pode levar alguns minutos, dependendo do tamanho do arquivo.
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**Passo 3** Assim que o arquivo for enviado com sucesso, uma barra de progresso verde no canto inferior esquerdo será concluída, indicando o fim do processo de upload. Em seguida, o processo de transcodificação será iniciado. Após a conclusão, o nome do arquivo será exibido em cinza e um stream RTSP com o nome do arquivo será criado automaticamente.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

O tutorial de streaming RTSP termina nesta etapa. Copie ou anote o endereço RTSP (incluindo "rtsp://"; certifique-se de que não haja espaços antes dele). Você precisará inserir esse endereço em outra interface de usuário discutida na próxima etapa.

### Adicionando Stream RTSP ao VST

**Passo 1**: Acesse o servidor web do VST aqui: **`http://[JETSON-IP]:30080/vst/`**, (Observação: HTTP, não HTTPS) onde `[JETSON-IP]` é o endereço IP do dispositivo Jetson no qual você está executando o contêiner docker.

 Você verá uma interface semelhante a esta:
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig4.png" />
</div>

- Se ele não iniciar, digite o seguinte no terminal:

    ```bash
    sudo systemctl start jetson-ingress
    sudo systemctl start jetson-monitoring
    sudo systemctl start jetson-sys-monitoring
    sudo systemctl start jetson-gpu-monitoring
    sudo systemctl start jetson-redis
    sudo systemctl start jetson-vst
    ```

**Passo 2**: Clique na aba **`Camera Management`** e clique em **`RTSP`**, cole o endereço RTSP copiado da interface do NVStreamer na caixa **`rtsp url`**. Preencha os campos **`location`** e **`name`** com a mesma string (ela se tornará o nome da câmera) e clique em **`Submit`**.
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**Passo 3**: Agora você pode clicar na aba **`Streams tab`** para ver o arquivo.
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## Mais Detalhes

- NVStreamer no Jetson Orin: https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
