---
sidebar_position: 3
description: Como usar um modelo para o SenseCAP Watcher
title: Usando um modelo para o SenseCAP Watcher
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher
aliases:
  - /sensecraft_ai_pretrained_models_for_watcher
last_update:
  date: 12/03/2024
  author: Citric
createdAt: '2024-12-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-pretrained-models-for-watcher/
---

SenseCAP Watcher é um poderoso dispositivo de monitoramento que pode ser configurado para reconhecer objetos específicos e acionar alarmes com base em tarefas definidas pelo usuário. Para aprimorar os recursos de reconhecimento de objetos do Watcher, os usuários podem aproveitar modelos personalizados do repositório de modelos SenseCraft AI. Este artigo da wiki irá guiá‑lo pelo processo de uso desses modelos personalizados em suas tarefas de monitoramento com o Watcher.

## Pré-requisitos

Antes de começar a usar modelos personalizados do repositório de modelos SenseCraft AI, certifique‑se de que você tenha o seguinte:

- **SenseCAP Watcher**: Você deve ter um dispositivo SenseCAP Watcher configurado e pronto para uso. Se ainda não o fez, siga as instruções no [Guia de Início Rápido do SenseCAP Watcher](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher/) para configurar seu dispositivo.

- **SenseCraft APP**: Instale o SenseCraft APP no seu dispositivo móvel. O aplicativo está disponível para as plataformas iOS e Android e pode ser baixado nas respectivas lojas de aplicativos.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div>

<br />

- **Conta SenseCraft**: Para acessar o repositório de modelos SenseCraft AI e usar modelos personalizados, você precisa ter uma conta SenseCraft AI. Se você não tiver uma conta, registre‑se por meio do SenseCraft APP ou do site oficial do SenseCraft AI.

- **Conectividade de Rede**: Certifique‑se de que seu dispositivo SenseCAP Watcher e o dispositivo móvel que executa o SenseCraft APP estejam conectados à internet. É necessária uma conexão de rede estável para acessar o repositório de modelos SenseCraft AI e baixar modelos personalizados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Vídeo do Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositório Github</font></span></strong>
    </a>
</div>

## Passo 1. Enviar uma tarefa de monitoramento ao Watcher via SenseCraft APP

Para começar, abra o SenseCraft APP e vá até o dispositivo Watcher que você deseja configurar. O aplicativo fornece uma interface intuitiva para criar e gerenciar tarefas de monitoramento. Neste exemplo, vamos criar uma tarefa que diz: *Se um teclado for reconhecido, reproduzir o som 'Keyboard is awesome'*.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/31.png" style={{width:250, height:'auto'}}/></div>

Ao criar uma tarefa, é essencial ser claro e específico sobre o objeto que você deseja que o Watcher reconheça e a ação que deseja que ele execute quando o objeto for detectado. Isso ajuda a garantir que o Watcher compreenda e execute a tarefa com precisão.

Se você não souber o suficiente sobre como o Watcher define uma tarefa apropriada, leia a [Diretriz de Atribuição de Tarefas](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

## Passo 2. Habilitar o uso de um modelo TinyML personalizado

Após enviar a tarefa pelo APP, clique no cartão da tarefa para entrar na página de **Detail Configs**. Nesta página, é possível ajustar vários aspectos da sua tarefa de monitoramento, incluindo a seleção de um modelo TinyML personalizado.

Na seção **Scenario** na parte superior da página, você encontrará a opção **Use TinyML Model**. Ao marcar essa opção, você permite que o Watcher use um modelo personalizado do repositório de modelos SenseCraft AI para reconhecimento de objetos. Clique no campo de nome do modelo para pesquisar ou selecionar diretamente o modelo desejado, como um modelo de **detecção de teclado**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/32.png" style={{width:1000, height:'auto'}}/></div>

O repositório de modelos SenseCraft AI hospeda uma ampla variedade de modelos pré‑treinados que podem ser usados para diversas tarefas de reconhecimento de objetos. Esses modelos foram otimizados para uso com o Watcher, garantindo alta precisão e desempenho.

:::note

1. Após selecionar um modelo, as palavras de alarme do Watcher podem ser apagadas e precisarão ser digitadas novamente antes que o botão Run Task possa ser clicado.

2. Depois de selecionar o modelo, configure de forma adequada o Confidence Threshold abaixo do modelo. O valor padrão é 0. Se você o enviar diretamente para a tarefa com 0 como limite, isso pode fazer com que qualquer coisa seja reconhecida como um objeto errado. Ajuste esse valor de acordo com a situação real para obter o melhor efeito de detecção.

:::

Além dos modelos pré‑treinados disponíveis no repositório de modelos SenseCraft AI, você também pode usar seus próprios modelos treinados de forma personalizada. Se você tiver um objeto ou cenário específico que não seja coberto pelos modelos existentes, poderá treinar seu próprio modelo e compartilhá‑lo com a comunidade SenseCraft AI.

:::tip
Watcher pode pesquisar e usar modelos privados sob a mesma conta SenseCraft. Se você optar por não tornar seus modelos públicos, também poderá usar seus modelos privados, desde que o Watcher esteja vinculado à sua conta.
:::

## Passo 3. Confirmar a tarefa e iniciar o monitoramento

Após selecionar o modelo personalizado e confirmar outros detalhes de configuração da tarefa, clique no botão "Run Task" para iniciar a tarefa de monitoramento. Essa ação implanta a tarefa no seu dispositivo Watcher e inicia o processo de monitoramento.

Ao receber a tarefa, o Watcher fará automaticamente o download do modelo selecionado do repositório de modelos SenseCraft AI e o utilizará como base para acionar ações de alarme. Essa integração contínua garante que o Watcher tenha o modelo mais atualizado e relevante para um reconhecimento preciso de objetos.

Com o modelo personalizado em uso, o Watcher monitorará continuamente o ambiente em busca da presença do objeto especificado. Neste exemplo, quando o Watcher reconhecer um teclado usando o modelo selecionado, ele acionará a ação de alarme especificada — reproduzindo o som "Keyboard is awesome".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/33.png" style={{width:600, height:'auto'}}/></div>

A combinação de modelos personalizados e tarefas definidas pelo usuário permite que o Watcher se adapte a uma ampla gama de cenários de monitoramento. Ao aproveitar o poder do repositório de modelos SenseCraft AI e a flexibilidade do SenseCraft APP, os usuários podem adaptar os recursos do Watcher às suas necessidades específicas, garantindo reconhecimento de objetos e acionamento de alarmes confiáveis e precisos.

## Conclusão

O uso de modelos personalizados do repositório de modelos SenseCraft AI permite que os usuários do SenseCAP Watcher aprimorem os recursos de reconhecimento de objetos do dispositivo e ampliem seus cenários de aplicação de monitoramento e alarme. O SenseCraft APP fornece uma interface intuitiva para pesquisar, selecionar e aplicar esses modelos personalizados às tarefas de monitoramento do Watcher. Seguindo os passos descritos neste artigo da wiki, os usuários podem configurar facilmente o Watcher para reconhecer objetos específicos e acionar alarmes com base em seus requisitos exclusivos. Seja usando modelos pré‑treinados ou modelos personalizados compartilhados com a comunidade SenseCraft AI, o Watcher oferece uma solução poderosa e adaptável para diversas necessidades de monitoramento.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
