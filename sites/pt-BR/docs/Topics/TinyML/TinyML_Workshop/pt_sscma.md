---
description: Este é um projeto / plataforma de código aberto focado em IA embarcada.
title: O "Blink" de IA
keywords:
  - tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sscma
last_update:
  date: 08/26/2024
  author: Matthew
createdAt: '2023-08-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sscma/
---

## Familiarize-se com as ferramentas que estamos usando

### Plataforma SenseCraft AI

A [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) da Seeed Studio é uma solução de IA baseada em navegador.

Ela permite que os usuários implantem com facilidade uma vasta biblioteca de modelos de IA disponíveis publicamente em seus dispositivos de borda e fornece uma experiência perfeita e fácil de usar, permitindo que você implemente modelos de IA públicos diretamente em seus dispositivos de borda com **apenas alguns cliques**.

:::info
O núcleo dela é um projeto de código aberto e nós o compartilhamos no [GitHub](https://github.com/Seeed-Studio/ModelAssistant) e também oferecemos o [método de desenvolvimento](/pt-br/ModelAssistant_Introduce_Overview).
:::

#### Conta de usuário

O [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) é uma plataforma aberta que permite aos usuários navegar por todos os modelos de IA públicos e páginas Iniciais sem fazer login. Você só precisa se cadastrar e fazer login quando precisar implantar um modelo ou compartilhar seu próprio modelo.

O [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) e a [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login) (plataforma SenseCAP Cloud original) são ambos serviços de software fornecidos pela seeed studio para os usuários; os usuários só precisam se cadastrar em qualquer uma das plataformas e, em seguida, podem usar a mesma conta para fazer login em ambas.

#### Cadastro (Sign up)

1. Digite seu nome e um e-mail válido e, em seguida, clique em "get capcha"<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/1.png)

2. Obtenha o código de verificação no seu e-mail e digite-o na página de cadastro

:::note
o código de verificação é válido por 10 min, conclua o cadastro dentro de 10 minutos
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/2.png)

3. Digite sua senha e outras informações de usuário para concluir o cadastro. <br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/3.png)

#### Login (Sign in)

Faça login com a conta de e-mail que você cadastrou

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/4.png)

Para mais informações sobre a plataforma SenseCraft AI você pode consultar [aqui](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_main/).

## Modelos de IA na Plataforma SenseCraft AI

### Lista de modelos

Os modelos públicos de IA exibem todos os modelos de IA publicados; os modelos personalizados de IA exibem todos os seus próprios modelos de IA enviados. O modelo é exibido na lista da seguinte forma

- Imagem de exemplo de inferência do modelo
- Nome do modelo
- Descrição do modelo
- O tipo de tarefa deste modelo, como detecção, classificação, segmentação, pose, geração
- Dispositivo compatível: Dispositivo que suporta a implantação deste modelo
- O nome de usuário que publicou este modelo

**Pesquisar modelo**<br/>
Fornece recurso de pesquisa com base em vários tipos de informações-chave no modelo, como nome do modelo, tarefa do modelo, dispositivo compatível, publicador do modelo

**Favoritar modelo**<br/>
Os usuários podem favoritar modelos públicos

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/7.png)

Mais informações sobre modelos de IA na plataforma SenseCraft AI você pode consultar [aqui](https://wiki.seeedstudio.com/pt-br/sensecraft_ai_overview/#Modelos-pré-treinados).

## Espaço de trabalho do dispositivo

A plataforma SenseCraft AI fornece um zoológico de modelos de IA para os usuários compartilharem e baixarem modelos de IA, e também possui um espaço de trabalho de dispositivo onde os usuários podem visualizar em tempo real os resultados de inferência de seus dispositivos e gerenciar seus dispositivos para melhorar a conveniência e a flexibilidade do gerenciamento de dispositivos.

### Espaço de trabalho do XIAO ESP32S3

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image4.png)

Você pode saber mais por meio da [documentação do Espaço de trabalho do XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32S3_Workspace/).

### Espaço de trabalho do Grove-Vision AI v2

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image10.png)

Você pode saber mais por meio da [documentação do Espaço de trabalho do Grove-Vision AI v2](https://wiki.seeedstudio.com/pt-br/Grove_Vision_AI_v2_Workspace/).

### Espaço de trabalho Nvidia Jeson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

Você pode saber mais por meio da [documentação do Espaço de trabalho Nvidia Jeson](https://wiki.seeedstudio.com/pt-br/Nvidia_Jeson_Workspace/).

#### SenseCraft AI-Jetson

SenseCraft AI-Jetson é um kit de desenvolvimento e plataforma projetado para dispositivos NVIDIA Jetson Edge AI. Basta executar o "Quickstart Script" e você verá uma interface de usuário interativa para visualizar um aplicativo de exemplo com um vídeo pré-carregado e um modelo de IA pré-carregado. Se você quiser adicionar sua própria câmera USB ou câmera IP, poderá fazer isso com apenas alguns cliques!

Além dos vários modelos de IA integrados que oferecemos prontos para uso, você pode acessar um grande número de modelos públicos na plataforma SenseCraft AI e poderá baixar e implantar modelos de IA para cenários específicos e criar soluções de IA personalizadas com base em suas necessidades. SenseCraft AI é seu parceiro de tomada de decisão inteligente para visão computacional, fornecendo a você capacidades simples, flexíveis e eficientes de inferência e construção de soluções.

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

Você pode saber mais por meio da [documentação do SenseCraft AI-Jetson](https://wiki.seeedstudio.com/pt-br/SenseCraft_AI_Jetson/).

## O "Blink" de IA: Usando IA rapidamente

### 1. Começando com reconhecimento facial

Primeiro, vamos para o [Website de Implantação do SenseCraft AI](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974) e, em seguida, simplesmente conectamos o XIAO ESP32S3 Sense ao seu PC por meio de um cabo de dados para exibir instantaneamente o reconhecimento facial.

#### Passo 1. Instalar a placa de expansão XIAO ESP32S3 Sense

Primeiro, precisamos conectar corretamente a placa de expansão XIAO ESP32S3 Sense ao XIAO. Instalar a placa de expansão é muito simples, você só precisa alinhar o conector na placa de expansão com o conector B2B no XIAO ESP32S3, pressionar com força e ouvir um "clique"; a instalação estará concluída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

#### Passo 2. Conectando o XIAO ao seu PC

Conecte o XIAO ao seu PC usando um cabo de dados com função de transferência de dados.

#### Passo 3. Ir para a página da Plataforma SenseCraft AI e conectar o XIAO

Clique no botão abaixo para ir para a página inicial da Plataforma SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft AI Platform</font></span></strong></a>
</div><br />

Assim que estivermos na página inicial da Plataforma SenseCraft AI, primeiro precisamos conectar o XIAO ESPS3; para isso, clique no botão **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai3.png" style={{width:800, height:'auto'}}/></div>

O navegador então exibirá uma janela pop-up. Precisamos selecionar aqui a porta correta para o XIAO. No **Windows**, essa porta geralmente começa com **COM**, e no caso do **MacOS**, essa porta geralmente começa com **/dev/tty**. E ela terá as palavras **USB JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai4.png" style={{width:800, height:'auto'}}/></div>

Clicar no botão **Connect** apenas fará com que a placa seja identificada automaticamente e as informações de configuração sejam lidas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai5.png" style={{width:800, height:'auto'}}/></div>

Em seguida, podemos ir para o botão **Select Model** e clicar nele para encontrar outra janela pop-up. Aqui eu selecionei o reconhecimento facial para demonstração. Depois de selecioná-lo, clique no botão **Send** e espere alguns segundos. Você verá diretamente os resultados:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai6.gif" style={{width:500, height:'auto'}}/></div>

Você conseguiu! Você implantou com sucesso seu primeiro modelo de ML!

### 2. SenseCraft Triggers - Fazer uma ação simples de feedback

Ou seja, quando reconhecermos nosso rosto, faremos o LED do XIAO acender. Para isso, vá para a seção **Output** e selecione "Trigger action" para configurar um gatilho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai7.png" style={{width:800, height:'auto'}}/></div>

Aqui, quando a detecção facial tiver confiança acima de 50% será habilitado um gatilho.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai8.png" style={{width:800, height:'auto'}}/></div>

E aqui a **Trigger Action** é "Light up the LED". Depois disso, clique em "Send" e você verá que, sempre que o rosto for detectado, o LED onboard será aceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai9.png" style={{width:800, height:'auto'}}/></div>

:::info
**Parabéns!** Você implantou com sucesso o sistema automatizado de IA!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai10.png" style={{width:800, height:'auto'}}/></div>
:::

<!-- ### 2. Key Word Spotting(KWS) to control XIAO onboard LED. 

#### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa0BGRXnb8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### How it's works!

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/img/KWS_Diagram.png" style={{width:1000, height:'auto'}}/></div> 

**Step 2.1. Download all necessary files**

Download the three binary files below.

<div class="table-center">
	<table align="center">
		<tr>
			<td>bootloader.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bootloader.bin" target="_blank"><b>Download</b></a></td>
		</tr>
		<tr>
			<td>partition-table.bin</td>
			<td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.partitions.bin" target="_blank"><b>Download</b></a></td>
		</tr>
    <tr>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
      <td><a href="https://github.com/salmanfarisvp/TinyML/raw/main/XIAO-esp32-S3-Sense/KeyWordSpotting(KWS)/src/bin/xiao_esp32_yes_no.ino.bin" target="_blank"><b>Download</b></a></td>
    </tr>
	</table>
</div>

**Passo 2. Grave todos os arquivos no XIAO**

Clique no botão abaixo para ir para a página de Ferramentas de Gravação da SenseCraft AI Platform.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir para SenseCraft AI Platform</font></span></strong></a>
</div><br />

Quando estiver na página da web, clique no botão **Connect** em **Deployment** e selecione o número da porta do seu XIAO. Novamente, ele deve estar claramente identificado como **USB JTAG**.

* **Passo 2.1** Selecione Deployment 
* **Passo 2.2** Selecione Deploy
* **Passo 2.3** Clique em **Connect**

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab01.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

* **Passo 2.4** Selecione o XIAO - ele deve estar claramente identificado como **USB JTAG**.
* **Passo 2.5** Por fim, clique em Connect.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab2.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

Quando a conexão estiver correta, podemos selecionar o arquivo a ser carregado. Em seguida, siga o formato abaixo, preenchendo o endereço de gravação e selecionando o arquivo correto, um por um.

<div style={{textAlign:'center'}}><img src="https://github.com/salmanfarisvp/TinyML/blob/main/EdgeLab/src/img/edgeLab3.png?raw=true" style={{width:1000, height:'auto'}}/></div> 

<div class="table-center">
	<table align="center">
		<tr>
			<td>1</td>
			<td>0x0000</td>
			<td>bootloader.bin</td>
		</tr>
		<tr>
			<td>2</td>
			<td>0x8000</td>
			<td>partition-table.bin</td>
		</tr>
    <tr>
	  <td>3</td>
      <td>0x10000</td>
      <td>XIAO_ESP32S3_Speech_Recognition.bin</td>
    </tr>
	</table>
</div>

Depois clique em **Burn**, observe a barra de progresso de todos os arquivos e certifique-se de que cada arquivo foi gravado com sucesso antes de sair.

**Passo 3.** Reinicie para ver o efeito

Depois que todos os arquivos forem carregados com sucesso, você pode pressionar o botão de reset para permitir que o programa comece a ser executado. O efeito deste programa de exemplo é que, quando o microfone do XIAO ESP32S3 Sense detectar o comando Hello que você pronunciar, o LED laranja embutido acenderá. Quando o comando Stop que você disser for detectado, a luz laranja se apagará.

 -->
<!-- 
### 3. Mais modelos pré-compilados personalizados

:::tip
Além dos modelos de rosto preparados com antecedência, também estamos oferecendo suporte a mais modelos para o XIAO ESP32S3, então fique ligado!
:::

SenseCraft vem com vários modelos embutidos, você pode testar alguns outros modelos e experimentar. 

- Detecção de rosto

  Pré-visualização:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png" style={{width:600, height:'auto'}}/></div>

- Medidor digital de água

  Pré-visualização:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

- Medidor de água yolov5

  Pré-visualização:

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png" style={{width:600, height:'auto'}}/></div>

#### Uso dos modelos

Se você quiser usar um modelo personalizado, siga as instruções abaixo

**Passo 1. Selecione os modelos listados em "Ready to use AI models"**

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Custom_models.png" style={{width:800, height:'auto'}}/></div>

Aqui eu selecionei o demo de leitura de medidor de água. Depois de selecioná-lo, clique no botão **Send** e aguarde alguns segundos.

<div style={{textAlign:'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png
" style={{width:800, height:'auto'}}/></div>

Por fim, chegamos à seção Preview, clique uma vez em **Stop** no canto superior direito e, em seguida, clique em **Invoke**; se tudo estiver funcionando sem problemas, você poderá ver o efeito de tela em tempo real. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/10.gif" style={{width:800, height:'auto'}}/></div> 

<hr></hr> -->

# A Fazer

- [ ] Carregar e executar **Face Recognition Model** com SenseCraft AI Platform.
- [ ] Configurar um Trigger e **Control LED** com SenseCraft AI Platform.

<!-- :::tip
Se você também quiser experimentar este medidor de água que gera leituras automaticamente, pode baixar o pacote zip clicando **[aqui](https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip)**, descompactá-lo e depois clicar duas vezes para abrir o arquivo html no diretório raiz.
::: -->
