---
description: SenseCAP Watcher é um observador com IA que ajuda você a monitorar anomalias em um ambiente e então tomar ações. Simplesmente fale com o Watcher para dar comandos, e ele executará as tarefas desejadas quando o evento ocorrer.
title: Guia de Início Rápido
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg
slug: /getting_started_with_watcher
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Citric
createdAt: '2024-10-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher/
---

# Guia de Início Rápido do SenseCAP Watcher

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

## Vídeo de Guia de Início Rápido

Este é o Guia de Início Rápido do SenseCAP Watcher, que vai ajudar você a tirar o produto da caixa e usar o dispositivo pela primeira vez.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yufEUFEB0Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Introdução

SenseCAP Watcher é um observador com IA que ajuda você a monitorar anomalias em um ambiente e então tomar ações. Simplesmente fale com o Watcher para dar comandos, e ele executará as tarefas desejadas quando o evento ocorrer.

Como um novo integrante dos sistemas de edifícios inteligentes / casas inteligentes, o SenseCAP Watcher é muito mais inteligente em comparação com os sensores e atuadores atuais. Ele entende o que está acontecendo no ambiente e então toma ações de acordo.

## Tarefas Obrigatórias

Antes de usar o Watcher como um assistente de ambiente, é preciso garantir que as três etapas a seguir sejam executadas com sucesso, pois elas são a base para todas as etapas posteriores.

### Etapa 1. Instalação na Embalagem

O Watcher vem com uma embalagem exclusiva que também funciona como um suporte elegante, parecido com um calendário. Ao colocar o Watcher dentro desse suporte, você pode criar uma decoração atraente para sua casa. Siga as instruções passo a passo abaixo e consulte o vídeo de apoio para ver um guia visual de como instalar o Watcher em seu suporte.

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Etapa 2. Ligar o Dispositivo

:::caution
Use um plugue de alimentação compatível com o Watcher; o Watcher deve ser alimentado por uma fonte de alimentação de 5 V e pode queimar se você usar um adaptador de energia não compatível ou uma fonte com tensão superior a 5 V!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

O gráfico acima mostra as especificações recomendadas para o adaptador. Se você não souber onde comprar o adaptador correto, pode optar por comprá‑lo diretamente no link abaixo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>
:::

Para ligar o seu Watcher, pressione e segure o botão de rolagem localizado no canto superior direito por aproximadamente 3 segundos, até que o logotipo da Seeed Studio apareça na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

Assim que o logotipo for exibido, solte o botão e aguarde o dispositivo concluir o processo de inicialização. Depois de alguns instantes, o Watcher exibirá o menu principal, indicando que está pronto para uso.

:::tip
Se o dispositivo não ligar ao manter o botão pressionado, ele pode estar com pouca carga e você pode precisar conectar um cabo para alimentá‑lo antes de conseguir despertar o Watcher.
:::

### Etapa 3. Vincular o Dispositivo

:::caution
[SenseCraft Pro](https://wiki.seeedstudio.com/pt-br/watcher_price/) ativará automaticamente o serviço de teste quando seu dispositivo estiver vinculado ao aplicativo SenseCraft.
:::

Depois de ligar o Watcher, se ele ainda não tiver sido vinculado a um dispositivo, ele solicitará que você se conecte ao aplicativo SenseCraft. Como alternativa, você pode encontrar a opção "Connect to APP" no menu Settings. O Watcher exibirá então um código QR para baixar o aplicativo SenseCraft.

Você pode escanear o código QR ou usar o link fornecido para baixar o aplicativo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Baixar APP 🖱️</font></span></strong>
    </a>
</div>

<br />

Para prosseguir com a vinculação do Watcher ao aplicativo SenseCraft, siga estas etapas:

**1.** No Watcher, gire o botão de rolagem no sentido horário para entrar na interface do código QR para vinculação do dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**2.** Abra o aplicativo SenseCraft em seu dispositivo móvel e toque no sinal de mais (+) no canto superior direito para adicionar o Watcher escaneando o código QR.

:::tip
Certifique‑se de que as permissões de Bluetooth do dispositivo móvel estejam ativadas, pois o processo de vinculação requer uma conexão Bluetooth.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**3.** Após escanear o código QR com sucesso, o aplicativo irá para a página de configuração de rede. Selecione uma rede Wi‑Fi de 2,4 GHz para conectar o Watcher à internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

Toque no botão "Next" para continuar.

**4.** Escolha um nome para o Watcher e selecione um grupo apropriado para ele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

Toque no botão "Finish" para concluir o processo de configuração.

**5.** O aplicativo SenseCraft exibirá uma página de tutorial, fornecendo orientações sobre como usar o Watcher. Reserve um momento para se familiarizar com as instruções.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

Quando a configuração estiver concluída, o aplicativo abrirá uma janela de chat para se comunicar com o Watcher, enquanto o Watcher retornará ao menu principal.

Com o processo de vinculação finalizado, o Watcher está agora conectado ao aplicativo SenseCraft, e você pode começar a explorar seus recursos e capacidades. O aplicativo serve como uma forma conveniente de interagir com o Watcher, ajustar configurações e receber notificações remotamente.

## Agendar uma tarefa para o Watcher

Em seguida, selecione o método que você deseja usar para agendar uma tarefa executável para o Watcher.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Built-in task templates" label="Modelos de tarefa internos">

Para executar uma tarefa a partir dos Modelos de Tarefa no Watcher, siga estas etapas:

**1.** No menu principal, use o botão de rolagem para navegar até a opção **Task Templates**.

**2.** Pressione o botão de rolagem para entrar no submenu Task Templates.

**3.** Role pelos modelos de tarefa disponíveis usando o botão de rolagem até encontrar o modelo de tarefa desejado.

**4.** Pressione o botão de rolagem para selecionar e iniciar a execução da tarefa escolhida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

Quando a tarefa começar, o Watcher exibirá um rosto emoji animado na tela. Esse emoji indica que o dispositivo está monitorando ativamente o objeto‑alvo especificado pelo modelo de tarefa selecionado.

Quando o Watcher detectar o objeto‑alvo, a tela mudará da animação do emoji para uma visualização em tempo real do objeto detectado. Isso permite que você veja o que o Watcher identificou.

Se o objeto‑alvo sair do campo de visão do Watcher ou deixar de ser detectado, a tela voltará automaticamente ao rosto emoji animado, indicando que o dispositivo ainda está monitorando o alvo.

Modelos de Tarefa:

- Detecção de Humanos:
  - Este modelo de tarefa foi projetado para detectar a presença de seres humanos.
  - Quando o Watcher identificar uma **pessoa**, ele acionará uma notificação de alarme.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png" style={{width:210, height:'auto'}}/></div><br />

- Detecção de Pets:
  - O modelo de tarefa de Detecção de Pets foca em reconhecer gatos ou cães.
  - Se o Watcher detectar um **gato**, ele acionará uma notificação de alarme.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png" style={{width:210, height:'auto'}}/></div><br />

- Detecção de Gestos:
  - Este modelo de tarefa é configurado para identificar o gesto de mão "paper".
  - Quando o Watcher reconhecer o **paper gesture**, ele acionará uma notificação de alarme.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png" style={{width:210, height:'auto'}}/></div><br />

Cada um desses modelos de tarefa possui condições específicas de acionamento de alarme com base na detecção de seus respectivos alvos: humanos, gatos ou o gesto com papel. Usando esses modelos, você pode configurar rapidamente o Watcher para monitorar o objeto desejado sem a necessidade de uma configuração extensa.

</TabItem>

<TabItem value="Through the APP" label="Através do APP">

:::danger
Podem ser aplicadas taxas pelo uso de alguns serviços do SenseCraft AI, consulte a documentação abaixo para mais detalhes:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/pt-br/watcher_price/)**</br>
:::

O SenseCraft APP permite enviar Tarefas para o seu dispositivo Watcher. Neste exemplo, vamos demonstrar o processo de envio de uma tarefa usando uma das tarefas de exemplo fornecidas pelo Watcher. Vamos usar o comando *If you see a candles, please notify me*.

**1.** Abra o SenseCraft APP e navegue até a janela de chat do seu dispositivo Watcher conectado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**2.** Na janela de chat, selecione a tarefa desejada nas opções disponíveis ou digite manualmente o comando *If you see a candles, please notify me*. Envie o comando para o seu Watcher tocando no botão de envio ou pressionando Enter.

**3.** Ao receber o comando, o Watcher irá interpretá‑lo e dividi‑lo em um fluxo de tarefa composto pelos componentes **When**, **Do** e **Capture Frequency**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

Revise o fluxo de tarefa analisado para garantir que o Watcher tenha compreendido corretamente o seu comando. O app exibirá os detalhes da tarefa interpretada para sua verificação. Se alguma parte do fluxo de tarefa não estiver alinhada com o comando que você pretendia, você pode modificar os detalhes da tarefa acessando a seção **Detail Config** dentro do app.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**4.** Depois de confirmar ou ajustar os detalhes da tarefa, clique no botão **Run** para enviar a tarefa finalizada ao seu Watcher.

O Watcher fará o download das instruções da tarefa e, quando o download estiver concluído, ele se transformará em um sistema de monitoramento vigilante, pronto para detectar qualquer ocorrência de velas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**5.** Se o Watcher identificar uma vela, ele enviará um alerta com base nas configurações predefinidas, que podem incluir luzes piscando, alarmes sonoros e notificações através do SenseCraft APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
Observe que, devido às limitações de tempo do fluxo de tarefa, **haverá um intervalo mínimo entre alertas consecutivos para evitar notificações excessivas**.
:::

Seguindo essas etapas, você pode enviar comandos de forma eficaz ao seu Watcher usando o SenseCraft APP, permitindo que ele execute tarefas específicas de monitoramento e o notifique quando as condições especificadas forem atendidas.

Lembre‑se de revisar e ajustar regularmente as configurações e fluxos de tarefas do seu Watcher para garantir desempenho ideal e alinhamento com seus requisitos de monitoramento. Para uma descrição e explicação mais detalhada das tarefas e opções do APP, bem como uma descrição detalhada dos intervalos, leia **[Watcher Task Assignment Guideline](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/)** para saber mais.

</TabItem>

<TabItem value="By Voice" label="Por Voz">

:::danger
Podem ser aplicadas taxas pelo uso de alguns serviços do SenseCraft AI, consulte a documentação abaixo para mais detalhes:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/pt-br/watcher_price/)**
:::

O Watcher oferece uma forma conveniente e intuitiva de enviar tarefas ou manter uma conversa usando comandos de voz, graças ao seu recurso "Push to Talk". Essa funcionalidade é acessível a partir de qualquer tela ou interface do dispositivo, tornando fácil interagir com o Watcher sem precisar navegar por menus. Aqui está um guia passo a passo sobre como usar esse recurso:

1. Ative o Push to Talk:

   - Localize o Botão de Roda no canto superior direito do Watcher.
   - Pressione e segure o Botão de Roda para entrar na interface de entrada de voz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. Fale Seu Comando ou Mensagem:

   - Enquanto estiver segurando o Botão de Roda, fale claramente sua tarefa ou mensagem para o Watcher.
   - Você pode atribuir tarefas, como "Tell me if the baby is crying" ou "If the dog is stealing food, say stop Copper". (Copper é o nome do meu cachorro.)

3. Solte o Botão de Roda:

   - Quando terminar de falar, solte o Botão de Roda.
   - O Watcher processará sua entrada de voz e determinará se ela é uma atribuição de tarefa.

4. Atribuição de Tarefa:

   - Se o Watcher reconhecer sua entrada de voz como uma atribuição de tarefa, ele irá automaticamente decompor sua tarefa em componentes relevantes.
   - O Watcher exibirá cartões em sua tela, mostrando o **Object** (o que monitorar), **Behavior** (que ação observar), **Notification** (como alertar você), **Time Range** (quando monitorar) e **Frequency** (com que frequência monitorar).
   - Revise as informações exibidas para garantir que elas representem com precisão a tarefa que você pretende.
   - Se os detalhes estiverem corretos, confirme a tarefa e o Watcher começará a executá‑la de acordo com os parâmetros especificados.
   - Se o Watcher entender mal sua tarefa, mantenha o botão da roda de rolagem pressionado e você poderá continuar através do diálogo para tentar corrigir a compreensão da tarefa pelo Watcher. Se ainda assim ele não conseguir entender corretamente após várias tentativas, recomendamos que você use o SenseCraft APP para configurar a tarefa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

Dicas para Uso Ideal:

- Fale claramente e em um ritmo moderado para garantir um reconhecimento de voz preciso.
- Ao falar, aproxime‑se o máximo possível do Watcher; a uma distância de cerca de **3 ~ 10cm** a precisão do reconhecimento de fala é melhor.
- Minimize o ruído de fundo para melhorar a capacidade do Watcher de compreender seus comandos de voz.
- Seja específico e conciso ao atribuir tarefas para ajudar o Watcher a interpretar com precisão suas intenções.

Ao aproveitar o recurso Push to Talk, você pode enviar tarefas e manter conversas com o Watcher sem esforço, tornando sua interação com o dispositivo mais natural e eficiente.

:::note
Se você encontrar o erro **0x7002**, isso significa que o status atual da rede do Watcher não está bom e a chamada do serviço de áudio falhou; altere a rede ou o local e tente novamente.
:::

</TabItem>

</Tabs>

## Para encerrar uma tarefa em execução

1. Toque na tela uma vez ou pressione o botão de roda.

2. Uma janela de confirmação aparecerá com duas opções: **Main Menu** e **End Task**. Para encerrar a tarefa, toque em **End Task** na tela ou use a roda de rolagem para navegar até "End Task" e pressione o botão da roda de rolagem para confirmar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png" style={{width:210, height:'auto'}}/></div><br />

3. Como alternativa, você pode encerrar a tarefa pelo SenseCraft APP em seu dispositivo móvel, pressionando o botão **End** no cartão da tarefa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png" style={{width:250, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
