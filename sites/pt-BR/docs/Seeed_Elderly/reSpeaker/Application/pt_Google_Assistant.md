---
description: Google Assistant para reSpeaker
title: Google Assistant para reSpeaker
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Google_Assistant
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Google_Assistant/
---

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Front.jpg)

Este wiki é para ReSpeaker Core v2.0, recomendamos que você leia primeiro o [Wiki do ReSpeaker Core v2.0](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_v2.0/#preparation).

## Antes de começar

Você precisa fazer os seguintes preparativos:

- ReSpeaker Core v2.0 com a imagem mais recente
- Rede Wi-Fi (certifique-se de que você consegue dar ping no Google com essa rede)
- PC ou Mac
- Um cabo Micro-USB
- [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Presumimos que você já leu a [Preparetion](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_v2.0/#preparation) e já configurou o WiFi e a Serial.

Agora vamos brincar 😃

## Primeiros Passos

### Hardware

Esta parte é simples e fácil, basta conectar o seu ReSpeaker Core v2.0 ao computador pela porta `OTG`.

### Software

#### Configure seu Projeto

- **Passo 1. Adicione seu Projeto**

Abra o [link](https://console.actions.google.com/?pli=1) para adicionar o seu projeto.

:::note
    Se você não tiver uma conta do Google, faça login primeiro em google.com. 
:::

Clique em `Add/Import project`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_0.png)

Depois digite o seu `Project name` e escolha o `Country/region`. Em seguida, clique em `CREATE PROJECT` para continuar.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_1.png)

- **Passo 2. Registrar Modelo**

Clique em `Connected properties ->DEVICE MODELS ->REGISTER MODEL` como na figura abaixo.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_2.png)

Preencha as informações do seu produto. Depois clique em `REGISTER MODEL` para continuar.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_3.png)

Basta clicar em `NEXT`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_4.png)

Certifique-se de que você selecionou esta opção `ALL 7 traits`, para que possa ativar todas as permissões. Em seguida, clique em `SAVE TRAITS`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_5.png)

Agora clique no nome do Projeto que você acabou de criar. Para este demo, como você pode ver, usamos `ReSpeaker Core v2.0`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_6.png)

Você verá algumas informações, como mostrado na figura a seguir.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_7.png)

Anote o `Model Id` que é `respeaker-xxxx-respeaker-core-v2.0-xxxxx` neste demo, ele é importante e você o usará mais tarde.

Agora vamos baixar o arquivo json. Clique no botão no canto superior direito e depois clique em `Download credentials.json` para baixar o arquivo json para o seu computador.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_8.png)

Em seguida, use o [WinCP](https://winscp.net/eng/docs/lang:chs) ou outras ferramentas de transmissão para copiar o arquivo json para o seu ReSpeaker Core v2.0.
Por exemplo, nós o copiamos para o caminho `/home/respeaker`.

Depois, clique na engrenagem no canto superior esquerdo, clique em `Project settings`, lembre-se do `Project ID` que é `` neste demo.
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_9.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_10.png)

Ok, vamos conferir novamente, nesta seção você obterá dois IDs.

O Model ID `respeaker-xxxx-respeaker-core-v2.0-xxxxx`

O Project ID `respeaker-440eb`

Eles serão usados mais tarde.

#### Ativar a Google Assistant API

Ative a Google Assistant API no projeto que você selecionou (consulte os [Termos de Serviço](https://developers.google.com/assistant/sdk/terms-of-service)). Você precisa fazer isso no Cloud Platform Console.

Basta clicar [Aqui](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview) para ativar a Google Assistant API.

Certifique-se de que as seguintes chaves de alternância estejam ativadas (azul):

- `Web & App Activity`
- Além disso, certifique-se de selecionar a caixa de seleção `Include Chrome browsing history and activity from websites and apps that use Google services`.
- `Device Information`
- `Voice & Audio Activity`

#### Instalar o SDK e o Código de Exemplo

Você pode consultar a [documentação do Google](https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample) para mais detalhes sobre esta parte.

Você pode fazer esta parte com python2.7 e python3, neste demo usamos python2.7.

**Para python2.7**

**Passo 1.**

Digite o seguinte comando:

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python-dev python-virtualenv
sudo virtualenv env --no-site-packages  
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate

```

**Passo 2. Obtenha o pacote**

O pacote Google Assistant SDK contém todo o código necessário para colocar o Google Assistant em execução no dispositivo, incluindo o código de exemplo.

Instale as dependências de sistema do pacote:

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
Use pip to install the latest version of the Python package in the virtual environment:
sudo python -m pip install --upgrade google-assistant-sdk[samples]

```

**Passo 3. Gerar credenciais**

Instale ou atualize a ferramenta de autorização:

```
sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2
```

Crie a pasta de destino.

```
sudo mkdir –p /path/to/assistant-sdk/
```

Use o comando abaixo para copiar `credentials.json` para o local de destino.

```
sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ 
```

Digite o comando abaixo para obter o código de geração de token.

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json

```

:::note
    Usando o comando acima, toda vez você obtém um código de autorização diferente. Por favor, certifique-se
:::

Então você obterá o código, copie o código após a observação `Please visit this URL to authorize this application:`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code0.png)

Cole o código no seu navegador de Internet e pressione a tecla `Enter`.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code1.png)

Se tudo correr bem, a janela a seguir aparecerá. Escolha sua conta do Google e selecione `ALLOW`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code2.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code3.png)

Ok, então você obterá o código de autorização como mostrado na figura a seguir.

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code4.png)

Copie este código para o seu console
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code5.png)

Em seguida, você verá o aviso `credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json`. Isso significa que até agora tudo correu bem.

#### Instalar Respeakerd

Digite os comandos para instalar o respeakerd

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
git clone https://github.com/respeaker/googleassistant_respeakerd
cd googleassistant_respeakerd
sudo python setup.py install
sudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/
# set respeakerd to pulse mode
sudo vim /etc/respeaker/respeakerd.conf 
# reboot to make it work
sudo reboot
```

#### Ativar o Google Assistant

Lembra dos dois IDs que marcamos antes? Agora é hora de usá-los.

Altere o comando `googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model` com seus próprios IDs.

Para o comando acima, altere `my-dev-project` para o seu `project-id` e `my-model` para o seu `Model ID`.

Para este demo, deve ficar assim

```
googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx
```

Agora, saúde!!!

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/codel.png)

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
