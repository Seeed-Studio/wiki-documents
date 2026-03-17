---
description: Ferramenta de Edge AI sem código
title: Ferramenta de Edge AI sem código
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /No-code-Edge-AI-Tool
sku: 110061361
last_update:
  date: 01/04/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/No-code-Edge-AI-Tool/
---

# Ferramenta de Edge AI sem código

Temos o prazer de apresentar a você nossa nova experiência no reComputer construído com Jetson Nano para reconhecimento rápido e fácil de objetos.

Com apenas alguns comandos simples, o ambiente pode ser baixado e implantado, e o processo de monitorar, identificar e gerar resultados a partir de uma tela ao vivo não pode ser mais simples do que três blocos.

## Vídeo de Demonstração

**Demonstração de Segurança de Armazém**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**Demonstração de Guarda de Fazenda**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Preparação Preliminar

Neste exemplo, veremos como baixar e instalar o que precisamos em um sistema NVIDIA Jetson novo, depois abrir a Edge AI Tool e realizar a detecção de objetos com uma câmera ao vivo. Abaixo está uma visão geral das etapas.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. Baixar e implantar
2. Posicionar blocos
3. Mostrar resultados

### Requisitos de Hardware

Antes de começar, você precisará ter o seguinte hardware preparado.

<table>
  <thead>
    <tr>
      <th>Imagem do Hardware</th>
      <th>Nome do Hardware</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg" width={210} /></td>
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010 com módulo Jetson Nano</a><br />ou <br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020 com módulo Jetson Nano</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Webcam Logitech C270 HD<br />ou<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">outra câmera USB V4L2 suportada pelo Jetson</a></td>
    </tr>
  </tbody>
</table>

!!!Attention
    Este exemplo só será executado no reComputer construído com Jetson Nano. Observe que o reComputer construído com Jetson Xavier NX não é suportado para funcionar neste momento, mas será suportado no futuro.

### Requisitos de Software

Antes de começar, certifique-se de que seu dispositivo foi gravado com o [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461). Se você quiser regravar o Jetson Nano eMMC com JetPack 4.6.1, consulte [aqui](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html).

Você pode verificar a versão do JetPack instalada digitando o seguinte no terminal:

```sh
cat /etc/nv_tegra_release
```

E a saída deve ser semelhante a isto

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**Nota:** R32.7.1 corresponde ao JetPack 4.6.1

## Primeiros Passos

Quando o hardware e o software estiverem prontos conforme descrito acima, vamos passar para a experiência com a Edge AI Tool. Neste exemplo, conecte seu monitor, mouse ou teclado conforme necessário; você também pode controlar seu NVIDIA Jetson remotamente via SSH ou VNC.

### Etapa 1. Baixar e implantar

Abra uma janela de linha de comando no NVIDIA Jetson e insira o seguinte comando para baixar os arquivos necessários para o Jetson.

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

Quando o download estiver concluído, execute o seguinte comando para iniciar o docker necessário.

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

Todo o processo de instalação e inicialização levará cerca de 7 a 9 minutos.

### Etapa 2. Posicionar blocos

Quando a instalação estiver concluída, use o navegador Google Chrome que vem com o seu sistema NVIDIA Jetson para inserir o seguinte URL e acessar a interface de operação.

```
127.0.0.1:1880
```

Você também pode inserir o endereço IP mais o número da porta (1880) na barra de endereços para acessar a página de ação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

Podemos ver a distribuição das operações da Edge AI Tool no diagrama abaixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **Área de Blocos:** Esta área abriga vários blocos que podem ser manipulados pelo usuário.

- **Área de Programação:** Esta área é a Área de Programação do usuário. O usuário pode arrastar e soltar blocos da Área de Blocos para a Área de Programação para completar o programa.

- **Área de Configuração:** À extrema direita está a Área de Configuração. Aqui podemos ver o fluxo da Área de Programação e podemos concluir algumas configurações necessárias ou definir operações nos blocos etc. nesta área.

Na Área de Blocos, há uma seção chamada **seeed recomputer** onde focaremos no uso destes três blocos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input:** Este bloco é usado para obter o fluxo de vídeo da entrada da câmera. Este bloco pode ser configurado para selecionar uma webcam ou uma câmera USB V4L2 local etc.

- **detection:** Este bloco é usado para selecionar o modelo a ser reconhecido. O fluxo de vídeo de entrada será reconhecido usando o modelo que você selecionou. Por enquanto, apenas o **COCO dataset** pode ser usado nesta versão.

- **video view:** Este bloco é usado para exibir o fluxo de vídeo processado na tela.

Em seguida, podemos dar uma olhada na composição dos blocos. Tome como exemplo o bloco de construção **video input**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

À esquerda deste bloco há uma área azul quadrada. Quando esta área está oculta, significa que a entrada do fluxo de vídeo está desligada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

Quando esta área é exibida, significa que a entrada do fluxo de vídeo está ligada.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

Da mesma forma, o bloco video view tem um bloco quadrado como este no lado direito. Ocultar desliga a exibição da saída do fluxo de vídeo; o contrário também é verdadeiro.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

Se houver um ponto azul no canto superior direito do bloco, isso é um lembrete de que o bloco foi editado, mas não implantado. Aliás, todo o projeto é executado e precisa ser programado com blocos e implantado antes que os resultados sejam exibidos.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

O quadrado cinza à direita do bloco é onde os blocos são conectados. Clique com o botão esquerdo do mouse aqui e arraste-o para o próximo bloco à esquerda da conexão e então você poderá conectar os dois blocos para formar um fluxo de programa.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

Deve-se notar que o fluxo do programa é executado de **esquerda para direita** nesta ordem, e que a junção da esquerda só pode ser conectada à junção da direita.

Se não houver junção à esquerda do bloco, ele deve ser usado como o nó inicial do fluxo do programa. Se o lado direito do bloco não tiver conexões, então ele deve ser usado como o nó final de todo o fluxo do programa.

Um bloco com duas junções, como **object detection**, significa que vários conteúdos diferentes podem ser enviados para o bloco. Assim, é possível gerar tanto fluxos de vídeo quanto logs.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

Os blocos também são muito fáceis e rápidos de usar. Você pode arrastar o bloco que deseja usar pressionando e segurando o botão esquerdo do mouse e, em seguida, arrastando-o para a Área de Programação da tela principal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

Com base na descrição acima dos blocos, podemos projetar um procedimento de blocos simples como segue.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

O programa mostrado acima é aquele que obtém o fluxo de vídeo de entrada da câmera e, em seguida, usa a detecção do modelo para gerar o resultado do reconhecimento do objeto.

### Etapa 3. Mostrar resultados

Depois que os blocos forem posicionados, ainda precisamos fazer uma configuração simples dos blocos antes que possam ser usados. Se você quiser configurar um bloco específico, pode dar um clique duplo nele e a caixa de configurações correspondente aparecerá no lado direito.

Vamos começar configurando o bloco **video input**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **Device type:** Aqui você pode definir o tipo de câmera que possui; atualmente, dois tipos de câmera são suportados, webcam e câmera local.

- **Video:** Selecione sua câmera aqui. Se não houver câmera disponível aqui, verifique novamente se a câmera é suportada ou se está conectada com êxito.

- **URL:** Se você tiver selecionado uma webcam, o campo Video se tornará um URL. Aqui, preencha a fonte de entrada da webcam.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **Resolution:** Selecione aqui a resolução da sua câmera. Selecionar a resolução errada pode resultar em um erro de execução.

Para o bloco **object detection**, as configurações são as seguintes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **Model name:** Aqui você seleciona o nome do modelo para reconhecimento de objetos; atualmente, apenas o COCO dataset é suportado.

!!!Note
    COCO é um dataset em larga escala para detecção, segmentação e legendagem de objetos. COCO possui várias características:
    - Segmentação de objetos
    - Reconhecimento em contexto
    - Segmentação de superpixel stuff
    - 330K imagens (>200K rotuladas)
    - 1,5 milhão de instâncias de objetos
    - 80 categorias de objetos
    - 91 categorias de stuff
    - 5 legendas por imagem
    - 250.000 pessoas com keypoints

    <div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

Depois de fazer isso, clique no botão **deploy** no canto superior direito da interface e o fluxo do programa começará a ser executado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

Se tudo estiver OK, você verá que os objetos identificados pelo fluxo de vídeo estão circulados por caixas e recebem valores de confiança.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## Operação Detalhada

Experimentamos o programa Edge AI Tool em sua forma mais simples no capítulo anterior. Nesta seção, vamos guiá-lo por mais extensões do Edge AI Tool.

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### Download de Blocos

Além dos blocos na seção de blocos, podemos baixar quantos blocos forem necessários para completar projetos mais complexos.

Na Área de Configuração à direita, há um botão para mais opções, selecionamos **Manage palette**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

Na página pop-up, você pode ver os blocos instalados e selecionar **Install** para baixar mais blocos. Aqui, tomamos como exemplo o bloco de caixa de correio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

Após a instalação, os blocos recém-instalados podem ser vistos na parte inferior da seção de blocos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### Importando projetos de outras pessoas

Há momentos em que você talvez queira compartilhar seus projetos interessantes para que outros possam experimentá-los. Ou talvez seja o projeto de outra pessoa que você queira usar, então você pode se referir às seguintes maneiras.

Na Área de Configuração à direita, há um botão para mais opções, selecionamos **Import**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

Em seguida, podemos colar o código que compartilhamos ou obtivemos na janela pop-up.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

Neste exemplo, vamos compartilhar com você um projeto maravilhoso que se concentra na capacidade de detectar, em tempo real, se alguém entrou no ambiente através de uma câmera e enviar uma notificação por e-mail se uma pessoa for detectada.

```json
[
    {
        "id": "7963f97f362cdfc6",
        "type": "tab",
        "label": "warning email",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "41a8f267df4eb722",
        "type": "video input",
        "z": "7963f97f362cdfc6",
        "name": "",
        "deviceType": "rtsp",
        "rtsp": "",
        "local": "video0",
        "resolution": "2560",
        "frequency": "60",
        "senderr": true,
        "active": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "c5fef75b0ab418c6"
            ]
        ]
    },
    {
        "id": "c5fef75b0ab418c6",
        "type": "detection",
        "z": "7963f97f362cdfc6",
        "name": "",
        "modelName": "coco_dataset",
        "showResult": true,
        "senderr": true,
        "x": 380,
        "y": 200,
        "wires": [
            [
                "40523cc8b61cfcc9"
            ],
            [
                "689c67f6610be9e2"
            ]
        ]
    },
    {
        "id": "40523cc8b61cfcc9",
        "type": "video view",
        "z": "7963f97f362cdfc6",
        "name": "",
        "width": 640,
        "data": "payload",
        "dataType": "msg",
        "thumbnail": false,
        "active": false,
        "pass": false,
        "outputs": 0,
        "x": 650,
        "y": 140,
        "wires": []
    },
    {
        "id": "689c67f6610be9e2",
        "type": "switch",
        "z": "7963f97f362cdfc6",
        "name": "person intrusion detected",
        "property": "payload.labels",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "person",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 540,
        "wires": [
            [
                "40f6ca0fbb322dd5"
            ]
        ]
    },
    {
        "id": "40f6ca0fbb322dd5",
        "type": "e-mail",
        "z": "7963f97f362cdfc6",
        "server": "",
        "port": "465",
        "secure": true,
        "tls": true,
        "name": "",
        "dname": "warning email",
        "credentials": {
            "userid": "",
            "password": ""
        },
        "x": 720,
        "y": 620,
        "wires": []
    },
    {
        "id": "80a51065a9ee835e",
        "type": "ui_spacer",
        "z": "7963f97f362cdfc6",
        "name": "spacer",
        "group": "529bf2dedebe9911",
        "order": 2,
        "width": 12,
        "height": 1
    },
    {
        "id": "529bf2dedebe9911",
        "type": "ui_group",
        "name": "Default",
        "tab": "ad4ccf9922566f44",
        "order": 1,
        "disp": true,
        "width": 20,
        "collapse": false,
        "className": ""
    },
    {
        "id": "ad4ccf9922566f44",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

Observe que o código não é diretamente utilizável; você precisará preencher `"rtsp": "",` com a fonte de entrada da sua webcam. Preencha `"server": "",` com o endereço do servidor de e-mail e `"credentials": {
            "userid": "",
            "password": ""
        },` preencha com seu nome de usuário e senha.

Quando tudo estiver pronto, o programa em blocos funciona e envia um e-mail para você quando detecta atividade.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

Neste projeto, são usados dois novos blocos, **switch** e **email**.

O bloco switch é onde você direciona para onde o programa vai com base nas informações de julgamento que você definiu. Por exemplo, neste programa dei ao bloco switch o nome **person intrusion detected** e preenchi a propriedade **payload.labels**. **payload.labels** é o valor-chave do bloco anterior **object detection**. Quando o valor da propriedade é igual a **person**, o bloco conectado após o switch é executado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

O bloco email é um pouco mais fácil de configurar, você só precisa preencher o endereço de e-mail e o endereço do servidor do qual deseja receber mensagens, dependendo do protocolo suportado pela sua caixa de correio.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

Claro, se você copiar o código diretamente e completar as alterações necessárias, não será preciso fazer mais mudanças nos blocos. Se você se sentir mais à vontade usando a interface gráfica, também poderá concluir a configuração desses elementos nas configurações dos blocos.

## Solução de Problemas

### O que devo fazer se o docker não iniciar com sucesso e se não houver seed recomputer nos blocos?

Podemos encerrar o docker e reiniciá-lo com o seguinte comando.

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### O que devo fazer se eu não conseguir observar os resultados ou se houver erros no debug?

Use o seguinte comando para verificar se a instalação do docker está correta. Você deve obter os três dockers mostrados no diagrama. Se algum deles estiver faltando, volte ao primeiro passo em **Getting Started** e reinstale o docker.

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

Se a instalação corresponder à imagem, então verifique o status de execução do docker iniciado usando o seguinte comando.

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

Se não houver docker iniciado como na imagem acima, tente reiniciar o docker ou verifique se o modelo e a versão do sistema do dispositivo atendem aos requisitos.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
