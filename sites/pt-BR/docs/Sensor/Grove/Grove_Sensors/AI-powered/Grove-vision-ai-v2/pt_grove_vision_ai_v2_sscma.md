---
description: Orientações sobre como ir de conjuntos de dados próprios, rotulagem, treinamento e implantação até o Grove Vision AI V2.
title: Implantando Modelos de Conjuntos de Dados para o Grove Vision AI V2
keywords:
  - SSCMA
  - Vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_sscma
sku: 101021112,E23011220,104990982
last_update:
  date: 03/12/2024
  author: Citric
createdAt: '2024-03-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_sscma/
---


# Implantando Modelos de Conjuntos de Dados para o Grove Vision AI V2

Bem-vindo a este tutorial abrangente em que embarcaremos em uma jornada para transformar seu conjunto de dados em um modelo totalmente funcional para implantação no Grove Vision AI V2. Neste guia, navegaremos pelos passos iniciais de rotulagem do nosso conjunto de dados com as ferramentas intuitivas do Roboflow, avançando para o treinamento do modelo dentro do ambiente colaborativo do Google Colab.

Em seguida, passaremos para a implantação do nosso modelo treinado usando o SenseCraft Model Assistant, um processo que preenche a lacuna entre o treinamento e a aplicação no mundo real. Ao final deste tutorial, você não apenas terá um modelo personalizado rodando no Grove Vision AI V2, como também estará equipado com o conhecimento para interpretar e utilizar os resultados das previsões do seu modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/0.png" style={{width:1000, height:'auto'}}/></div>


Do conjunto de dados até a aterrissagem do modelo, teremos as seguintes etapas principais.

1. [Conjuntos de Dados Rotulados](#conjuntos-de-dados-rotulados) —— Este capítulo se concentra em como obter conjuntos de dados que possam ser treinados em modelos. Há duas maneiras principais de fazer isso. A primeira é usar os conjuntos de dados rotulados fornecidos pela comunidade Roboflow, e a outra é usar suas próprias imagens específicas de cenário como conjuntos de dados, mas você precisa passar manualmente pelo processo de rotulagem.

2. [Modelo Treinado a partir de Conjunto de Dados Exportado](#modelo-treinado-a-partir-de-conjunto-de-dados-exportado) —— Este capítulo se concentra em como treinar para obter um modelo que possa ser implantado no Grove Vision AI V2 com base no conjunto de dados obtido na primeira etapa, usando a plataforma Google Colab.

3. [Carregar modelos via SenseCraft Model Assistant](#carregar-modelos-via-sensecraft-model-assistant) —— Esta seção descreve como usar o arquivo de modelo exportado para carregar o modelo no Grove Vision AI V2 usando o SenseCraft Model Assistant.

4. [Protocolos comuns e aplicações do modelo](#protocolos-comuns-e-aplicacoes-do-modelo) —— Por fim, apresentaremos o formato unificado de comunicação de dados do SenseCraft AI para que você possa utilizar ao máximo o potencial dos seus dispositivos e modelos para criar aplicações que se encaixem nos seus cenários.

Então vamos nos aprofundar e começar o empolgante processo de dar vida aos seus dados.

## Materiais Necessários

Antes de começar, você pode precisar preparar os seguintes equipamentos.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>Módulo de Câmera OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Este é o modelo de dispositivo recomendado e é todo o hardware que será usado neste tutorial. Claro, se você não tiver uma câmera OV5647 em mãos e não tiver um XIAO, você pode usar qualquer outra câmera CSI para Raspberry Pi, e qualquer placa de desenvolvimento compatível com Arduino e habilitada para UART servirá.


## Conjuntos de Dados Rotulados

No conteúdo desta seção, permitimos que os usuários escolham livremente os conjuntos de dados que possuem. Isso inclui fotos da comunidade ou fotos próprias da cena. Este tutorial apresentará os dois cenários predominantes. O primeiro é usar conjuntos de dados rotulados prontos fornecidos pela comunidade [Roboflow](https://roboflow.com/about). O outro é usar imagens de alta resolução que você tirou e rotulou como conjunto de dados. Leia os diferentes tutoriais abaixo de acordo com suas necessidades.

### Etapa 1: Crie uma conta gratuita no Roboflow

O Roboflow fornece tudo o que você precisa para rotular, treinar e implantar soluções de visão computacional. Para começar, crie uma [conta gratuita no Roboflow](https://app.roboflow.com/?ref=blog.roboflow.com).

Depois de revisar e aceitar os termos de serviço, você será solicitado a escolher entre um de dois planos: o Public Plan e o Starter Plan.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/1.png" style={{width:800, height:'auto'}}/></div>


Em seguida, você será solicitado a convidar colaboradores para o seu workspace. Esses colaboradores podem ajudá-lo a anotar imagens ou gerenciar os projetos de visão no seu workspace. Depois de convidar pessoas para o seu workspace (se quiser), você poderá criar um projeto.


### Escolha como você obtém seu conjunto de dados


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Download Labelled datasets using Roboflow" label="Baixar conjuntos de dados rotulados usando Roboflow">

Escolher um conjunto de dados adequado do Roboflow para uso direto envolve determinar o conjunto de dados que melhor se encaixa nos requisitos do seu projeto, considerando aspectos como tamanho, qualidade, relevância e licença do conjunto de dados.

**Etapa 2. Explorar o Roboflow Universe**

Roboflow Universe é uma plataforma onde você pode encontrar vários conjuntos de dados. Visite o site do Roboflow Universe e explore os conjuntos de dados disponíveis.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/2.png" style={{width:1000, height:'auto'}}/></div>

O Roboflow fornece filtros e uma função de busca para ajudá-lo a encontrar conjuntos de dados. Você pode filtrar conjuntos de dados por domínio, número de classes, tipos de anotação e mais. Utilize esses filtros para reduzir os conjuntos de dados que atendem aos seus critérios.

**Etapa 3. Avaliar Conjuntos de Dados Individuais**

Depois de ter uma lista restrita, avalie cada conjunto de dados individualmente. Procure por:

**Qualidade das Anotações**: Verifique se as anotações são precisas e consistentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/3.png" style={{width:1000, height:'auto'}}/></div>

**Tamanho do Conjunto de Dados**: Certifique-se de que o conjunto de dados seja grande o suficiente para que seu modelo aprenda de forma eficaz, mas não grande demais para ser manipulado.

**Balanceamento de Classes**: O conjunto de dados deve idealmente ter um número equilibrado de exemplos para cada classe.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/4.png" style={{width:1000, height:'auto'}}/></div>

**Licença**: Revise a licença do conjunto de dados para garantir que você possa usá-lo conforme pretendido.

**Documentação**: Revise qualquer documentação ou metadados que acompanham o conjunto de dados para entender melhor seu conteúdo e quaisquer etapas de pré-processamento que já tenham sido aplicadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/5.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Você pode descobrir a condição do modelo por meio do **[Roboflow Health Check](https://docs.roboflow.com/datasets/dataset-health-check)**.
:::

**Etapa 4. Baixar a Amostra**

Se você encontrar o conjunto de dados de sua escolha, então você tem a opção de baixá-lo e usá-lo. O Roboflow geralmente permite que você baixe uma amostra do conjunto de dados. Teste a amostra para ver se ela se integra bem ao seu fluxo de trabalho e se é adequada para o seu modelo.

Para continuar com as etapas subsequentes, recomendamos que você exporte o conjunto de dados no formato mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/6.png" style={{width:1000, height:'auto'}}/></div>

Você então obterá a **Raw URL** para este modelo; mantenha-a em segurança, usaremos esse link na etapa de treinamento do modelo um pouco mais tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/26.png" style={{width:1000, height:'auto'}}/></div>


:::caution
Se você estiver usando o Roboflow pela primeira vez e não tiver absolutamente nenhum julgamento sobre a seleção de conjuntos de dados, a etapa de treinar um modelo com um conjunto de dados para realizar um teste inicial para ver o desempenho pode ser essencial. Isso pode ajudá-lo a avaliar se o conjunto de dados atenderá aos seus requisitos.

Se o conjunto de dados atender aos seus requisitos e tiver um bom desempenho nos testes iniciais, então é provável que seja adequado para o seu projeto. Caso contrário, você pode precisar continuar sua busca ou considerar expandir o conjunto de dados com mais imagens.
:::

</TabItem>

<TabItem value="Use your own images as a dataset" label="Use your own images as a dataset">

Aqui, vou usar a imagem do gesto pedra-papel-tesoura como demonstração para guiá-lo pelas tarefas de upload de imagens, rotulagem e exportação de um conjunto de dados no Roboflow.

:::note
Recomendamos fortemente que você use o Grove Vision AI V2 para tirar fotos do seu conjunto de dados, o que é o ideal para o Grove Vision AI V2. O Grove Vision AI V2 está atualmente desenvolvendo a parte de funcionalidade de captura de fotos e, quando isso estiver concluído, você poderá usar o Grove Vision AI V2 para capturar imagens para o seu conjunto de dados. Até lá, você pode usar fotos tiradas por outros dispositivos como conjuntos de dados.
:::

**Etapa 2. Criando um Novo Projeto e Enviando imagens**

Depois de fazer login no Roboflow, clique em **Create Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/7.png" style={{width:1000, height:'auto'}}/></div>

Dê um nome ao seu projeto (por exemplo, "Rock-Paper-Scissors"). Defina seu projeto como **Object Detection**. Configure os **Output Labels** como **Categorical** (já que Rock, Paper e Scissors são categorias distintas).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/8.png" style={{width:1000, height:'auto'}}/></div>

Agora é hora de enviar suas imagens de gestos de mão.

Colete imagens dos gestos de pedra, papel e tesoura. Certifique-se de ter uma variedade de fundos e condições de iluminação. Na página do seu projeto, clique em "Add Images".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/9.png" style={{width:1000, height:'auto'}}/></div>

Você pode arrastar e soltar suas imagens ou selecioná-las no seu computador. Envie pelo menos 100 imagens de cada gesto para ter um conjunto de dados robusto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/10.png" style={{width:1000, height:'auto'}}/></div>

:::tip
**Como o tamanho do conjunto de dados é determinado?**

Em geral, isso depende de uma variedade de fatores: modelo de tarefa, complexidade da tarefa, pureza dos dados e assim por diante. Por exemplo, o modelo de detecção de corpo humano envolve um grande número de pessoas, um amplo alcance, a tarefa é mais complexa, então é necessário coletar mais dados.
Outro exemplo é o modelo de detecção de gestos, que só precisa detectar três tipos de "rock", "scissors" e "cloth", e requer menos categorias, portanto o conjunto de dados coletado é de cerca de 500.
:::

**Etapa 3: Anotando Imagens**

Depois de enviar, você precisará anotar as imagens rotulando os gestos de mão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/11.png" style={{width:1000, height:'auto'}}/></div>

O Roboflow oferece três maneiras diferentes de rotular imagens: Auto Label, Roboflow Labeling e Manual Labeling.

- [**Auto Label**](https://blog.roboflow.com/yolo-world-prompting-tips/): Usa um grande modelo generalizado para rotular imagens automaticamente.
- **Roboflow Labeling**: Trabalhe com uma equipe profissional de rotuladores humanos. Sem volumes mínimos. Sem compromissos antecipados. Anotações de Bounding Box começam em US\$0,04 e anotações de Polígono começam em US\$0,08.
- **Manual Labeling**: Você e sua equipe rotulam suas próprias imagens.

A seguir é descrito o método mais comumente usado de rotulagem manual.

Clique no botão "Manual Labeling". O Roboflow carregará a interface de anotação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/12.png" style={{width:1000, height:'auto'}}/></div>

Selecione o botão "Start Annotating". Desenhe caixas delimitadoras ao redor do gesto de mão em cada imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/13.gif" style={{width:1000, height:'auto'}}/></div>

Rotule cada caixa delimitadora como "Rock", "Paper" ou "Scissors".

Use o botão ">" para percorrer seu conjunto de dados, repetindo o processo de anotação para cada imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/14.gif" style={{width:1000, height:'auto'}}/></div>


**Etapa 4: Revisar e Editar Anotações**

É essencial garantir que as anotações estejam corretas.

Revise cada imagem para ter certeza de que as caixas delimitadoras estão desenhadas e rotuladas corretamente. Se encontrar algum erro, selecione a anotação para ajustar a caixa delimitadora ou alterar o rótulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/15.png" style={{width:1000, height:'auto'}}/></div>

:::tip
A rotulagem incorreta afeta o desempenho geral do treinamento e alguns conjuntos de dados podem ser descartados se não atenderem aos requisitos de rotulagem. Aqui estão algumas demonstrações de rotulagem ruim.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/16.png" style={{width:700, height:'auto'}}/></div>
:::

**Etapa 5: Gerar e Exportar o Conjunto de Dados**

Depois que todas as imagens estiverem anotadas. Em Annotate clique no botão **Add x images to Dataset** no canto superior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/17.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique no botão **Add Images** na parte inferior da nova janela pop-up.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/18.png" style={{width:400, height:'auto'}}/></div>

Clique em **Generate** na barra de ferramentas à esquerda e clique em **Continue** na terceira etapa **Preprocessing**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/19.png" style={{width:1000, height:'auto'}}/></div>

Na etapa 4, **Augmentation**, selecione **Mosaic**, o que aumenta a capacidade de generalização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/21.png" style={{width:1000, height:'auto'}}/></div>

Na etapa final **Create**, calcule de forma razoável o número de imagens de acordo com o boost do Roboflow; em geral, quanto mais imagens você tiver, mais tempo levará para treinar o modelo. No entanto, ter mais imagens não tornará necessariamente o modelo mais preciso, isso depende principalmente de o conjunto de dados ser bom o suficiente ou não.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/22.png" style={{width:1000, height:'auto'}}/></div>

Clique em **Create** para criar uma versão do seu conjunto de dados. O Roboflow irá processar as imagens e anotações, criando um conjunto de dados versionado. Após o conjunto de dados ser gerado, clique em **Export Dataset**. Escolha o formato **COCO** que corresponde aos requisitos do modelo que você irá treinar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/23.png" style={{width:1000, height:'auto'}}/></div>

Clique em **Continue** e então você obterá a Raw URL para este modelo. Guarde-a, usaremos esse link na etapa de treinamento do modelo um pouco mais tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/27.png" style={{width:1000, height:'auto'}}/></div>


Parabéns! Você usou com sucesso o Roboflow para enviar, anotar e exportar um conjunto de dados para um modelo de detecção de gestos de mão de pedra-papel-tesoura. Com seu conjunto de dados pronto, você pode prosseguir para treinar um modelo de aprendizado de máquina usando plataformas como o Google Colab.

Lembre-se de manter seu conjunto de dados diversificado e bem anotado para melhorar a precisão do seu futuro modelo. Boa sorte com o treinamento do seu modelo e divirta-se classificando gestos de mão com o poder da IA!
</TabItem>
</Tabs>


## Treinando o Modelo Exportado do Conjunto de Dados



### Etapa 1. Acessar o Notebook do Colab

Você pode encontrar diferentes tipos de arquivos de código do Google Colab de modelo no [SenseCraft Model Assistant's Wiki](https://wiki.seeedstudio.com/pt-br/ModelAssistant_Introduce_Quick_Start/#model-training). Se você não souber qual código deve escolher, pode escolher qualquer um deles, dependendo da classe do seu modelo (detecção de objetos ou classificação de imagens).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/24.png" style={{width:1000, height:'auto'}}/></div>

Se você ainda não estiver conectado à sua conta do Google, faça login para acessar todas as funcionalidades do Google Colab.

Clique em "Connect" para alocar recursos para sua sessão do Colab.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/25.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. Adicionar seu Conjunto de Dados do Roboflow

Antes de executar oficialmente o bloco de código passo a passo, precisamos modificar o conteúdo do código para que ele possa usar o conjunto de dados que preparamos. Temos que fornecer uma URL para baixar o conjunto de dados diretamente para o sistema de arquivos do Colab.

Encontre a seção **Download the dataset** no código. Você verá o seguinte programa de exemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/28.png" style={{width:1000, height:'auto'}}/></div>

```sh
%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset 
!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip 
!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset
```

Esse trecho de código é usado para criar um diretório, baixar um conjunto de dados do Roboflow e descompactá-lo no diretório recém-criado dentro de um ambiente Google Colab. Aqui está uma explicação do que cada linha faz:

1. `%mkdir -p Gesture_Detection_Swift-YOLO_192/dataset`:
   - Esta linha cria um novo diretório chamado `Gesture_Detection_Swift-YOLO_192` e um subdiretório chamado `dataset`. A opção `-p` garante que o comando não retorne um erro se o diretório já existir e cria quaisquer diretórios pai necessários.

2. `!wget -c https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t -O Gesture_Detection_Swift-YOLO_192/dataset.zip`:
   - Esta linha usa `wget`, um utilitário de linha de comando, para baixar o conjunto de dados a partir da URL fornecida do Roboflow. A flag `-c` permite que o download seja retomado se for interrompido. A flag `-O` especifica o local de saída e o nome do arquivo para o arquivo baixado, neste caso, `Gesture_Detection_Swift-YOLO_192/dataset.zip`.

3. `!unzip -q Gesture_Detection_Swift-YOLO_192/dataset.zip -d Gesture_Detection_Swift-YOLO_192/dataset`:
   - Esta linha usa o comando `unzip` para extrair o conteúdo do arquivo `dataset.zip` para o diretório `dataset` que foi criado anteriormente. A flag `-q` executa o comando `unzip` em modo silencioso, suprimindo a maioria das mensagens de saída.

Para personalizar este código para o link do seu próprio modelo do Roboflow:

1. Substitua `Gesture_Detection_Swift-YOLO_192` pelo nome de diretório desejado onde você quer armazenar seu conjunto de dados.

2. Substitua a URL do conjunto de dados do Roboflow (`https://universe.roboflow.com/ds/xaMM3ZTeWy?key=5bznPZyI0t`) pelo link do seu conjunto de dados exportado (é a URL bruta que obtivemos no [último passo em Datasets rotulados](#choose-how-you-get-your-dataset)). Certifique-se de incluir o parâmetro de chave, se for exigido para acesso.

3. Ajuste o nome do arquivo de saída no comando `wget` se necessário (`-O your_directory/your_filename.zip`).

4. Certifique-se de que o diretório de saída no comando `unzip` corresponda ao diretório que você criou e que o nome do arquivo corresponda ao que você definiu no comando `wget`.

:::caution
Se você alterar o nome de um diretório de pasta `Gesture_Detection_Swift-YOLO_192`, observe que será necessário fazer alterações em outros nomes de diretório no código que foram usados antes da mudança, caso contrário um erro pode ocorrer!
:::

### Passo 3. Ajuste dos parâmetros do modelo

A próxima etapa é ajustar os parâmetros de entrada do modelo. Por favor, vá para a seção Train a model with SSCMA e você verá o seguinte trecho de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/29.png" style={{width:1000, height:'auto'}}/></div>

```sh
!sscma.train configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \
--cfg-options  \
    work_dir=Gesture_Detection_Swift-YOLO_192 \
    num_classes=3 \
    epochs=10  \
    height=192 \
    width=192 \
    data_root=Gesture_Detection_Swift-YOLO_192/dataset/ \
    load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth
```


Este comando é usado para iniciar o processo de treinamento de um modelo de aprendizado de máquina, especificamente um modelo YOLO (You Only Look Once), usando o framework SSCMA (Seeed Studio SenseCraft Model Assistant). O comando inclui várias opções para configurar o processo de treinamento. Aqui está o que cada parte faz:

- `!sscma.train` é o comando para iniciar o treinamento dentro do framework SSCMA.

- `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` especifica o arquivo de configuração para o treinamento, que inclui definições como a arquitetura do modelo, cronograma de treinamento, estratégias de aumento de dados, etc.

- `--cfg-options` permite que você sobrescreva as configurações padrão especificadas no arquivo `.py` com aquelas que você fornece na linha de comando.

- `work_dir=Gesture_Detection_Swift-YOLO_192` define o diretório onde as saídas do treinamento, como logs e checkpoints de modelo salvos, serão armazenadas.

- `num_classes=3` especifica o número de classes que o modelo deve ser treinado para reconhecer. Isso depende do número de rótulos que você tem; por exemplo, pedra, papel e tesoura devem ser três rótulos.

- `epochs=10` define o número de ciclos de treinamento (épocas) a serem executados. Os valores recomendados estão entre 50 e 100.

- `height=192` e `width=192` definem a altura e a largura das imagens de entrada que o modelo espera.

- `data_root=Gesture_Detection_Swift-YOLO_192/dataset/` define o caminho para o diretório onde os dados de treinamento estão localizados.

- `load_from=Gesture_Detection_Swift-YOLO_192/pretrain.pth` fornece o caminho para um arquivo de checkpoint de modelo pré-treinado a partir do qual o treinamento deve ser retomado ou usado como ponto de partida para aprendizado por transferência.

Para personalizar este comando para o seu próprio treinamento, você deve:

1. Substituir `configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py` pelo caminho para o seu próprio arquivo de configuração, se você tiver um personalizado.

2. Alterar `work_dir` para o diretório onde você deseja que as saídas do seu treinamento sejam salvas.

3. Atualizar `num_classes` para corresponder ao número de classes no seu próprio conjunto de dados. Isso depende do número de rótulos que você tem; por exemplo, pedra, papel e tesoura devem ser três rótulos.

4. Ajustar `epochs` para o número desejado de épocas de treinamento para o seu modelo. Os valores recomendados estão entre 50 e 100.

5. Definir `height` e `width` para corresponder às dimensões das imagens de entrada do seu modelo. 

:::caution
Nós realmente não recomendamos que você altere o tamanho da imagem no código do Colab, pois esse valor é um tamanho de conjunto de dados mais apropriado que verificamos ser uma combinação de tamanho, precisão e velocidade de inferência. Se você estiver usando um conjunto de dados que não é desse tamanho, e talvez queira considerar alterar o tamanho da imagem para garantir a precisão, então, por favor, não exceda 240x240.
:::

6. Alterar `data_root` para apontar para o diretório raiz do seu conjunto de dados.

7. Se você tiver um arquivo de modelo pré-treinado diferente, atualize o caminho `load_from` de acordo.

### Passo 4. Executar o código do Google Colab

A maneira de executar o bloco de código é clicar no botão de play no canto superior esquerdo do bloco de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/30.png" style={{width:1000, height:'auto'}}/></div>

O bloco de código será executado depois que você clicar no botão e, se tudo correr bem, você verá o sinal de que a execução do bloco de código foi concluída - um símbolo de tique aparece à esquerda do bloco. Como mostrado na figura, este é o efeito após a conclusão da execução do primeiro bloco de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/31.png" style={{width:1000, height:'auto'}}/></div>

Se você encontrar a mesma mensagem de erro que a minha na imagem acima, verifique se está usando uma **GPU T4**, por favor **não use CPU** para este projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/32.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/33.png" style={{width:600, height:'auto'}}/></div>

Em seguida, execute novamente o bloco de código. Para o primeiro bloco de código, se tudo correr bem, você verá o resultado mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/34.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, execute todos os blocos de código de **Download the pretrain model weights file** até **Export the model**. E certifique-se de que cada bloco de código esteja livre de erros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/36.png" style={{width:400, height:'auto'}}/></div>


:::note
Avisos que aparecem no código podem ser ignorados.
:::

### Passo 5. Avaliar o modelo

Quando você chegar à seção **Evaluate the model**, terá a opção de executar o bloco de código **Evaluate the TFLite INT8 model**.

:::tip
Avaliar o modelo TFLite INT8 envolve testar as previsões do modelo quantizado em um conjunto de dados de teste separado para medir sua precisão e métricas de desempenho, avaliar o impacto da quantização na precisão do modelo e fazer o perfil de sua velocidade de inferência e uso de recursos para garantir que ele atenda às restrições de implantação para dispositivos de borda.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/35.png" style={{width:1000, height:'auto'}}/></div>

O trecho a seguir é a parte válida do resultado após eu executar este bloco de código.

```
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.450
 Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 0.929
 Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.361
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.474
 Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.456
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.515
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.529
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000
 Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = 0.536
 Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.537
03/19 01:38:43 - mmengine - INFO - bbox_mAP_copypaste: 0.450 0.929 0.361 -1.000 0.474 0.456
{'coco/bbox_mAP': 0.45, 'coco/bbox_mAP_50': 0.929, 'coco/bbox_mAP_75': 0.361, 'coco/bbox_mAP_s': -1.0, 'coco/bbox_mAP_m': 0.474, 'coco/bbox_mAP_l': 0.456}
FPS: 128.350449 fram/s
```

Os resultados da avaliação incluem uma série de métricas de Precisão Média (AP) e Revocação Média (AR), calculadas para diferentes limiares de Intersection over Union (IoU) e tamanhos de objeto, que são comumente usadas para avaliar o desempenho de modelos de detecção de objetos.

1. **AP@[IoU=0.50:0.95 | area=all | maxDets=100] = 0.450**
   - Esta pontuação é a precisão média do modelo em uma faixa de limiares de IoU de 0,50 a 0,95, com incremento de 0,05. Um AP de 0,450 indica que seu modelo tem precisão moderada nessa faixa. Esta é uma métrica-chave comumente usada para o conjunto de dados COCO.

2. **AP@[IoU=0.50 | area=all | maxDets=100] = 0.929**
   - Em um limiar de IoU de 0,50, o modelo atinge uma alta precisão média de 0,929, indicando que ele detecta objetos com muita precisão sob um critério de correspondência mais brando.

3. **AP@[IoU=0.75 | area=all | maxDets=100] = 0.361**
   - Com um limite de IoU mais rigoroso de 0,75, a precisão média do modelo cai para 0,361, indicando uma queda no desempenho sob critérios de correspondência mais restritos.

4. **AP@[IoU=0.50:0.95 | area=small/medium/large | maxDets=100]**
   - As pontuações de AP variam para objetos de tamanhos diferentes. No entanto, o AP para objetos pequenos é -1,000, o que pode indicar falta de dados de avaliação para objetos pequenos ou baixo desempenho do modelo na detecção de objetos pequenos. As pontuações de AP para objetos médios e grandes são 0,474 e 0,456, respectivamente, sugerindo que o modelo detecta relativamente melhor objetos médios e grandes.

5. **AR@[IoU=0.50:0.95 | area=all | maxDets=1/10/100]**
   - As taxas de revocação média para diferentes valores de `maxDets` são bastante consistentes, variando de 0,515 a 0,529, indicando que o modelo recupera de forma confiável a maioria das instâncias verdadeiramente positivas.

6. **FPS: 128.350449 fram/s**
   - O modelo processa imagens a uma taxa muito alta de aproximadamente 128,35 quadros por segundo durante a inferência, indicando potencial para aplicações em tempo real ou quase em tempo real.

No geral, o modelo tem um desempenho excelente em um IoU de 0,50 e moderado em um IoU de 0,75. Ele apresenta melhor desempenho na detecção de objetos médios e grandes, mas pode ter problemas para detectar objetos pequenos. Além disso, o modelo infere em alta velocidade, tornando-o adequado para cenários que exigem processamento rápido. Se a detecção de objetos pequenos for crítica em uma aplicação, talvez seja necessário otimizar ainda mais o modelo ou coletar mais dados de objetos pequenos para melhorar o desempenho.

### Passo 6. Baixar o arquivo de modelo exportado

Após a seção **Export the model**, você obterá os arquivos de modelo em vários formatos, que serão armazenados na pasta ModelAssistant por padrão. Neste tutorial, o diretório armazenado é **Gesture_Detection_Swift_YOLO_192**.

:::tip
Às vezes o Google Colab não atualiza automaticamente o conteúdo de uma pasta. Nesse caso, talvez seja necessário atualizar o diretório de arquivos clicando no ícone de atualizar no canto superior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/39.png" style={{width:500, height:'auto'}}/></div>

:::

No diretório acima, os arquivos de modelo **.tflite** estão disponíveis para XIAO ESP32S3 e Grove Vision AI V2. Para o Grove Vision AI V2, certifique-se de selecionar o arquivo de modelo que usa o formato **xxx_int8_vela.tflite**. Nenhum outro formato pode ser usado pelo Grove Vision AI V2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/38.png" style={{width:400, height:'auto'}}/></div>

Depois de encontrar os arquivos de modelo, faça o download localmente para o seu computador o mais rápido possível, o Google Colab pode esvaziar seu diretório de armazenamento se você ficar inativo por muito tempo!

Com as etapas realizadas aqui, exportamos com sucesso arquivos de modelo que podem ser suportados pelo Grove Vision AI V2, em seguida vamos implantar o modelo no dispositivo.


## Enviar modelos via SenseCraft Model Assistant

### Passo 7. Enviar modelo personalizado para o Grove Vision AI V2

Em seguida, vamos para a página Model Assistant.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Model Assistant 🖱️</font></span></strong>
    </a>
</div>
<br></br>

Conecte o dispositivo após selecionar Grove Vision AI V2 e, em seguida, selecione **Upload Custom AI Model** na parte inferior da página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/40.png" style={{width:1000, height:'auto'}}/></div>

Você então precisará preparar o nome do modelo, o arquivo de modelo e os rótulos. Quero destacar aqui como esse elemento do ID do rótulo é determinado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/41.png" style={{width:500, height:'auto'}}/></div>

**Se você estiver baixando diretamente o dataset do Roboflow**

Se você baixou o dataset do Roboflow diretamente, então você pode visualizar as diferentes categorias e sua ordem na página Health Check. Basta seguir a ordem inserida aqui.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/42.png" style={{width:1000, height:'auto'}}/></div>


:::tip
Você não precisa preencher os números em **ID:Object**, basta preencher diretamente o nome da categoria, os números e os dois-pontos à frente das categorias na imagem são adicionados automaticamente.
:::

**Se você estiver usando um dataset personalizado**

Se você estiver usando um dataset personalizado, então você pode visualizar as diferentes categorias e sua ordem na página Health Check. Basta seguir a ordem inserida aqui.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/43.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Você não precisa preencher os números em **ID:Object**, basta preencher diretamente o nome da categoria, os números e os dois-pontos à frente das categorias na imagem são adicionados automaticamente.
:::

Em seguida, clique em Send Model no canto inferior direito. Isso pode levar cerca de 3 a 5 minutos. Se tudo correr bem, você poderá ver os resultados do seu modelo nas janelas Model Name e Preview acima.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_train_model/44.png" style={{width:1000, height:'auto'}}/></div>

Tendo chegado até aqui, parabéns, você conseguiu treinar e implantar com sucesso um modelo próprio.


## Protocolos comuns e aplicações do modelo

Durante o processo de envio de um modelo personalizado, além dos arquivos de modelo que podemos visualizar sendo enviados, também há o firmware do dispositivo que precisa ser transferido para o dispositivo. No firmware do dispositivo, há um conjunto de protocolos de comunicação estabelecidos que especificam o formato de saída dos resultados do modelo e o que o usuário pode fazer com os modelos.

Devido a questões de espaço, não vamos detalhar as especificidades desses protocolos neste wiki, vamos detalhar esta seção por meio de documentação no Github. Se você estiver interessado em um desenvolvimento mais aprofundado, por favor acesse aqui.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft Protocols</font></span></strong>
    </a>
</div>
<br></br>

Se você quiser continuar usando dispositivos Arduino como o XIAO para transformar seus protótipos em realidade, consulte o exemplo de programa Arduino aqui.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_software_support/#demo-1-use-xiao-to-get-recognition-results" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Exemplo Arduino🖱️</font></span></strong>
    </a>
</div>
<br></br>

Se você é iniciante e quer construir rapidamente o seu próprio modelo, consulte o exemplo de treinamento de modelo SenseCraft AI aqui.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft Training</font></span></strong>
    </a>
</div>
<br></br>


## Solução de Problemas

### 1. O que fazer se eu seguir os passos e acabar com resultados de modelo pouco satisfatórios?

Se a precisão de reconhecimento do seu modelo for insatisfatória, você pode diagnosticá-la e melhorá-la considerando os seguintes aspectos:

1. **Qualidade e quantidade de dados**
   - **Problema**: O dataset pode ser muito pequeno ou carecer de diversidade, ou pode haver imprecisões nas anotações.
   - **Solução**: Aumente o tamanho e a diversidade dos dados de treinamento e realize limpeza de dados para corrigir quaisquer erros de anotação.

2. **Processo de treinamento**
   - **Problema**: O tempo de treinamento pode ser insuficiente, ou a taxa de aprendizado pode estar configurada de forma inadequada, impedindo que o modelo aprenda de forma eficaz.
   - **Solução**: Aumente o número de épocas de treinamento, ajuste a taxa de aprendizado e outros hiperparâmetros e implemente early stopping para evitar overfitting.

3. **Desbalanceamento de classes**
   - **Problema**: Algumas classes têm significativamente mais amostras do que outras, levando o modelo a tender para a classe majoritária.
   - **Solução**: Use pesos de classe, faça oversampling das classes minoritárias ou undersampling das classes majoritárias para equilibrar os dados.

Ao analisar cuidadosamente e implementar melhorias direcionadas, você pode aprimorar progressivamente a precisão do seu modelo. Lembre-se de usar um conjunto de validação para testar o desempenho do modelo após cada modificação, a fim de garantir a eficácia das suas melhorias.

### 2. Por que vejo a mensagem **Invoke failed** na implantação SenseCraft depois de seguir os passos do Wiki?

Se você encontrar um Invoke failed, então você treinou um modelo que não atende aos requisitos para uso com o dispositivo. Por favor, foque nas seguintes áreas.

1. Verifique se você modificou o tamanho da imagem no Colab. O tamanho de compressão padrão é **192x192**, o Grove Vision AI V2 requer que o tamanho da imagem seja comprimido como quadrado, por favor não use tamanho não quadrado para compressão. Também não use tamanhos muito grandes *(recomenda-se não mais que 240x240)*.

2. O arquivo de modelo para o Grove Vision AI V2 deve ter o sufixo **int8_vela.tflite**. Não use arquivos de modelo em outros formatos. Isso inclui **int8.tflite, que também não está disponível** para o Grove Vision AI V2.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

