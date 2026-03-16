---
description: Integração do Módulo Historian para Visualização no reTerminal DM
title: Integração do Módulo Historian para Visualização no reTerminal DM
keywords:
  - reTerminal DM
  - Primeiros passos
  - IIoT
  - Industrial
  - N3uron
  - Historian
  - MangoDB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalDM_N3uron_Historian
last_update:
  date: 4/4/2024
  author: Xabier Fernández and Kasun Thushara
createdAt: '2024-04-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminalDM_N3uron_Historian/
---
## Introdução

Apresentando o [N3uron](https://n3uron.com/) Historian: um poderoso sistema de armazenamento de séries temporais baseado em MongoDB. Configure-o facilmente para armazenar dados do MongoDB em arquiteturas x64 bit, x32 bit e ARM. Com o Neuron Historian, você pode armazenar valores de tags coletados localmente ou remotamente via N3uron Links. Além disso, ele oferece um prático recurso de Store & Forward para retenção de dados durante a perda de comunicação. Graças à compactação e à partição eficientes, ele lida com volumes massivos de dados sem perda de desempenho. Para referência, 1 GB de armazenamento pode conter cerca de 100 milhões de eventos. Vamos ver como configurá-lo passo a passo!

## Pré-requisitos

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

Recomendamos fortemente estudar como conectar o [N3uron com o AWS IoT Core](https://wiki.seeedstudio.com/pt-br/reTerminalDM_N3uron_AWS/). Mais adiante no tutorial, você aprenderá como criar gráficos usando o Módulo Historian. Se você é novo no N3uron, sugerimos começar com o guia [Primeiros Passos com N3uron](https://wiki.seeedstudio.com/pt-br/reTerminalDM_N3uron_Get_Start/). Ele aborda como navegar na interface web do N3uron, entender conceitos como o módulo Web UI e Web Vision, compreender o conceito de tags e criar dashboards básicos. Explorar primeiro esses fundamentos é recomendável antes de seguir adiante. Você pode acessar o guia através do link fornecido.

## Instalar o MongoDB no seu reTerminal DM

Em arquiteturas x32 e ARM, o usuário precisa primeiro instalar o MongoDB e configurar o Historian para armazenar dados na instância externa do MongoDB.

- **Passo 1**: Organizar arquivos

Coloque os [arquivos](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/n3uron_historian.zip) fornecidos (install.sh, uninstall.sh, libcryto.so.1.1 e libssl.so1.1) em uma pasta separada na área de trabalho do seu reTerminal DM ou em qualquer outro local de sua preferência.

- **Passo 2**: Navegar até a pasta

Abra um terminal e navegue até a pasta que contém os arquivos.

```sh
cd your/folder/path
```

- **Passo 3**: Executar o script de instalação

Execute o arquivo install.sh para instalar o MongoDB.

```sh
./install.sh
```

Talvez seja solicitado que você insira sua senha de sudo durante o processo de instalação.

- **Passo 4**: Verificar a instalação

Após a conclusão da instalação, insira o seguinte comando para acessar o MongoDB:

```sh
mongo
```

Isso abrirá o shell do MongoDB.

- **Passo 5**: Criar um banco de dados

Dentro do shell do MongoDB, insira o seguinte comando para criar um banco de dados chamado "mongo", caso ele não exista:

```sh
use mongo
```

Agora, o MongoDB está instalado no seu reTerminal DM e você criou um banco de dados chamado "mongo".

- **Passo 6**: Se a sua distribuição não fornecer essas bibliotecas, coloque-as, libcryto.so.1.1 e libssl.so1.1, nas respectivas pastas /usr/lib e /lib.
Use estes comandos para isso

```sh
sudo cp /path/to/your/folder/libcryto.so.1.1 /usr/lib
sudo cp /path/to/your/folder/libcryto.so.1.1 /lib

sudo cp /path/to/your/folder/ libssl.so1.1 /usr/lib
sudo cp /path/to/your/folder/ libssl.so1.1 /lib

```

## Criar módulo Historian

- **Passo 1**: Acessar a interface do N3uron

Acesse `http://localhost:8003` no seu navegador.

- **Passo 2**: Navegar até Configuration

No menu de navegação, selecione **Config** e depois escolha **Modules**. Clique no ícone de três barras e selecione **New Module** para criar um novo módulo chamado **Historian.**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule.PNG" /></center>

- **Passo 3**: Configurar módulo

Selecione **Module type** como Historian e salve a configuração.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/createmodule2.PNG" /></center>

- **Passo 4**: Alterar tipo de banco de dados

Clique no módulo Historian que você acabou de criar. Altere o tipo de banco de dados para External. Você verá o protocolo como **mongodb** e o banco de dados como **mongo**. Ative o modo Node History e salve as configurações.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historianconfig.PNG" /></center>

## Ativar modo Node History

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/nodemode.PNG" /></center>

## Criar uma tag Historian

- **Passo 01**: Dentro do **Explorer panel**, selecione **Tags**.

- **Passo 02:** No menu Model, clique com o botão direito no ícone da pasta, selecione **New Tag** e dê um nome a ela. Neste exemplo, usaremos **TestVal**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newtag.PNG" /></center>

- **Passo 3:** Ativar Simulation e History

Altere **Simulation** para **Enabled**, certifique-se de que o histórico está ativado e defina o nome do módulo como **Historian**. **Salve** as configurações.

:::note
se você não tiver uma fonte para a sua tag e quiser simulá-la, pode ativar a simulação (opcional), ou dar permissões de leitura/gravação e atribuir valores manualmente à tag. Mas se você configurar a fonte dessa tag como MQTT vindo da AWS, a fonte é Aws. Portanto, você deve desabilitar Simulation. Caso contrário, você estará apenas lendo dados vindos da simulação e não da AWS. Então, neste caso, a simulação não se aplica, já que você está definindo a fonte da tag como vindo de MQTT.
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/tagconfig.PNG" /></center>

## Configurar a Tag Historian para Tag com fonte ativada

Para incorporar a tag Historian na tag criada anteriormente, inscrita no tópico do AWS IoT Core, modifique as configurações de **Subscribed_value** da seguinte forma:

Certifique-se de que **History** esteja **Enabled**, e o nome do módulo definido como **Historian**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/historyenabled.png" /></center>

## Visualização

Se você criou um módulo **WebVision**, pode seguir estes passos:

**Passo 1**: Navegar até o WebVision

Vá até a seção Config e clique em **Open Designer**. Faça login usando suas credenciais de Administrador.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/opendesigner.PNG" /></center>

**Passo 2**: Usar o Main Container existente

Como criamos um Main Container no último tutorial, vamos utilizá-lo aqui também.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/template.PNG" /></center>

**Passo 3**: Adicionar um componente de gráfico

Na seção **New component**, adicione um **Chart** e dê um nome a ele.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchart.PNG" /></center>

**Passo 4**: Criar dataset histórico

Dentro do gráfico, localize os datasets. Toque nos três pontos e selecione **New Dataset**, depois escolha **HistoricalDataSet**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newhistorian.PNG" /></center>

**Passo 5**: Configurar dataset histórico

Configure o dataset histórico selecionando a Tag como **Subscribed_value** (que se inscreve no tópico do AWS IoT Core). Defina o Mode como **raw**, Date mode como **current**, ative o autoreload e defina o intervalo como 5. Defina o Date offset para 1 minuto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/confighistorian.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/selecttag.PNG" /></center>

**Passo 6**: Adicionar séries ao gráfico

No gráfico, selecione **New chartSeries** para adicionar uma nova série ao gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/newchartseries.PNG" /></center>

**Passo 7**: Vincular o dataset Historian ao gráfico

Para vincular o dataset Historian ao gráfico, selecione **Link dataset** e escolha o dataset Historian que você acabou de criar.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/linkdataset.PNG" /></center>

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datasetseries.PNG" /></center>

Agora você verá o gráfico de linhas. Personalize o estilo para melhor visibilidade.

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/styles.PNG" /></center>

Para uma compreensão mais profunda dos atributos de gráficos, é recomendável consultar o [artigo](https://n3uron.com/solutions-web-visualization/) fornecido. A interface web do N3uron oferece uma ampla gama de widgets com inúmeros atributos, tornando essencial consultar a documentação deles para uma experiência de usuário e interação ideais. Explore a documentação para obter diretrizes detalhadas de formatação e insights sobre como maximizar o potencial da interface web do N3uron.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" /></center>

## Usando o Módulo Historian para gerar o gráfico

Para esta tarefa, utilizaremos o módulo Historian para carregar dados. Diferente dos métodos anteriores, em que começávamos do zero, esta abordagem oferece uma forma muito mais fácil de recuperar dados em formato CSV para análises futuras.

- **Passo 1**: Adicionar componente de botão

Adicione um componente de botão à sua interface de usuário.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonselect.png" /></center>

- **Passo 2**: Selecionar Evento de Clique do Mouse

Escolha **Mouse click** em eventos para o botão.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/buttonevent.png" /></center>

- **Passo 3**: Adicionar Ação

Clique em **Add Action** após selecionar o evento de clique do mouse.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addaction.png" /></center>

- **Passo 4**: Selecionar **Open Historical**

Escolha **Open Historical** na lista de ações.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/addnewaction.png" /></center>

- **Passo 5**: Configurar Propriedades da Ação

Nesta etapa, você precisará configurar as propriedades da ação de acordo com seus requisitos. Você irá **selecionar a tag, ativar o over reload, definir o modo de data, o modo e o deslocamento de data** também. Ajuste essas configurações conforme necessário para garantir que a ação se comporte como desejado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/actionproperties.png" /></center>

- **Passo 6**: Salvar a Ação

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/saveaction.png" /></center>

- **Passo 7**: Ir para Open UI

Navegue até a seção Open UI.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

- **Passo 8**: Clicar no Botão

**Clique no botão** que você adicionou, e o módulo Historian será carregado. Defina o intervalo adequadamente para a recuperação de dados. Pressione **Apply** para aplicar as alterações. Você então poderá ver o gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/taglist2.png" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph2_3.gif" /></center>

- **Passo 9**: Ativar Auto Reload

Selecione **Auto Reload** com um intervalo de tempo apropriado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/autoreload.png" /></center>

- **Passo 10**: Visualizar Dados em Forma Tabular

Escolha a opção para visualizar os dados em forma tabular.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/result_button.png" /></center>

- **Passo 11**: Baixar Dados em Formato CSV

Pressione o botão fornecido para baixar os dados em formato CSV.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/datacollectiontocsv.png" /></center>

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
