---
description: Você obterá uma base sólida para entender os diferentes tipos de tarefas que o Watcher pode executar e como elas são organizadas dentro do ecossistema SenseCraft.
title: Diretrizes para Atribuição de Tarefas
image: https://files.seeedstudio.com/wiki/watcher_getting_started/85_1.webp
slug: /getting_started_with_watcher_task
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
createdAt: '2024-07-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/
---


# Diretrizes de Atribuição de Tarefas do SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/85.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Vídeo do Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositório no Github</font></span></strong>
    </a>
</div><br />

Bem-vindo ao tutorial sobre como atribuir tarefas ao Watcher. Neste guia, vamos conduzi-lo pelo processo de emissão de comandos ao Watcher, permitindo que você utilize de forma eficaz seus recursos para suas necessidades de monitoramento.

Watcher é uma ferramenta poderosa que depende de comandos emitidos pelo usuário para executar diversas tarefas de monitoramento e análise. Ao enviar instruções precisas ao Watcher, você pode direcioná-lo para focar em alvos específicos, coletar dados e fornecer insights valiosos.

Nas seções a seguir, entraremos em detalhes sobre categorização de tarefas, seleção de modelos e informações de preços. Nosso objetivo é capacitá-lo com o conhecimento e as habilidades necessárias para atribuir tarefas ao Watcher de forma eficiente e tirar o máximo proveito de suas funcionalidades. Vamos explorar os diferentes tipos de tarefas disponíveis, guiá-lo na seleção dos modelos apropriados para suas necessidades e esclarecer os custos associados.

Ao final deste tutorial, você terá uma compreensão sólida de como comunicar de forma eficaz suas necessidades de monitoramento ao Watcher. Você será capaz de atribuir tarefas com confiança, personalizar configurações e obter os resultados desejados.

Prepare-se para assumir o controle do Watcher e desbloquear todo o seu potencial. Vamos embarcar nesta jornada de atribuição de tarefas e descobrir como o Watcher pode ajudá-lo a alcançar seus objetivos de monitoramento!

## Configuração Avançada do SenseCAP Watcher

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SenseCAP Watcher é o primeiro agente físico baseado em LLM para ambientes inteligentes, capaz de monitorar cenas, acionar ações e interagir com base em comandos. Este vídeo apresentará como o SenseCAP Watcher seleciona modelos de disparo de cena com base na análise de tarefas: modelo embarcado e modelo LLM. Também mostraremos como configurar a luz RGB e os alertas de Exibição & Som, e o modo de envio de notificações: APP, UART, HTTP.

## Conceito de Tarefa

Para começar a usar o Watcher e para que ele consiga entender o que você quer que ele faça, você precisa ler este artigo sobre tarefas e sobre o que fazer e o que não fazer ao criar tarefas.

### Três principais componentes das Tarefas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_1.png" style={{width:1000, height:'auto'}}/></div>

Uma tarefa do Watcher é composta por três componentes principais:

- **Objeto**: O objeto especificado influencia diretamente o modelo de tarefa de reconhecimento local invocado pelo Watcher. Se o modelo selecionado não estiver disponível no SenseCraft AI, o mecanismo de grande modelo na nuvem é chamado diretamente para reconhecimento.

- **Fazer Algo (Opcional)**: A presença ou ausência de uma descrição de ação na instrução da tarefa determina se o Watcher invoca o mecanismo de grande modelo de linguagem baseado em nuvem.

- **Ação**: A ação executada quando a tarefa do Watcher é disparada. Exemplos de ações incluem piscar a luz RGB, enviar notificação, som do Watcher, SNS e muito mais.

Esses componentes trabalham juntos para definir o comportamento do Watcher quando uma tarefa específica é disparada. Ao combinar o objeto, a descrição de ação opcional e a ação desejada, os usuários podem criar tarefas personalizadas adaptadas às suas necessidades de monitoramento.

:::caution
Os exemplos de tarefas ilustrados são apenas para facilitar a leitura e a compreensão, e a sintaxe e as condições não precisam necessariamente ser exatamente como mostrado nas figuras, mas certifique-se de que as instruções de tarefa que você fornecer contenham os três componentes mencionados acima.
:::

A seguir, veremos alguns exemplos de tarefas para entender alguns dos conceitos e serviços invocados.

### Serviço de IA Local do Watcher

Quando uma pessoa é definida como objeto em uma tarefa do Watcher, o dispositivo seleciona automaticamente o modo de Serviço de IA Local. Nesse modo, o Watcher primeiro verifica se há um modelo pré-treinado para detecção de pessoas disponível na biblioteca SenseCraft AI. Se o modelo existir, o Watcher o baixa e executa a detecção localmente no próprio dispositivo, sem depender de quaisquer serviços em nuvem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_2.png" style={{width:1000, height:'auto'}}/></div>

A imagem ilustra esse processo. Quando uma pessoa é especificada como objeto, o Watcher chama o **modelo de IA local** para detecção de pessoas. O modelo analisa o fluxo de vídeo capturado pela câmera do dispositivo e detecta a presença de uma pessoa em **tempo real**. Se uma pessoa for identificada, o Watcher dispara a ação especificada, que neste caso é reproduzir o som "Hi, I'm Watcher" pelo alto-falante do dispositivo.

Ao aproveitar o Serviço de IA Local, o Watcher pode realizar detecção de pessoas de forma eficiente e independente, sem a necessidade de uma conexão constante com a nuvem ou do uso de grandes modelos de linguagem (LLMs). Isso garante tempos de resposta rápidos e mantém a privacidade do usuário, pois todo o processamento ocorre localmente no dispositivo.

No entanto, se o modelo de objeto necessário não estiver disponível na biblioteca SenseCraft AI, o Watcher passará a usar serviços de LLM baseados em nuvem para realizar a detecção. Esse mecanismo de fallback garante que o dispositivo ainda possa executar suas tarefas mesmo que um modelo específico não esteja presente localmente. Consulte o [modo LLM puro](#modo-llm-puro).

Então, se você criar uma tarefa que seja julgada como usando Serviços de IA Local, no SenseCraft APP, a página de Configuração de Tarefas será exibida aproximadamente como mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local-app.png" style={{width:1000, height:'auto'}}/></div>

### Serviço de LLM em Nuvem do Watcher

#### Serviço de LLM Puro em Nuvem

Se você definir "candle" como objeto em uma tarefa do Watcher, mas não houver modelos pré-treinados para detecção de velas disponíveis na biblioteca SenseCraft AI, o dispositivo **mudará automaticamente para o uso do serviço de Large Language Model (LLM) baseado em nuvem para detecção**.

:::danger
Podem ser aplicadas tarifas para o uso de alguns serviços do SenseCraft AI, consulte a documentação abaixo para mais detalhes:

**[Planos e Benefícios do SenseCraft AI para Watcher](https://wiki.seeedstudio.com/pt-br/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_3.png" style={{width:1000, height:'auto'}}/></div>

Como mostrado na imagem, quando o Watcher detecta uma vela usando o serviço LLM, ele executa a ação especificada, que neste caso é enviar uma notificação push para o aplicativo móvel conectado. **Isso garante que o usuário seja alertado prontamente sobre a presença de uma vela, mesmo que o dispositivo não tenha conseguido realizar a detecção localmente**.

Ao aproveitar o poder dos serviços de LLM baseados em nuvem, o Watcher ainda pode identificar objetos com precisão e disparar ações apropriadas, mesmo quando um modelo específico não está disponível na biblioteca SenseCraft AI. Esse mecanismo de fallback aumenta a versatilidade do dispositivo e garante que ele possa se adaptar a uma ampla gama de cenários de detecção.

No entanto, é importante notar que o uso do serviço de LLM em nuvem pode resultar em tempos de resposta um pouco mais lentos em comparação com a detecção local, pois os dados precisam ser processados remotamente. Além disso, esse modo requer uma conexão ativa com a internet para que o dispositivo se comunique com os serviços em nuvem.

:::note
Os usuários só precisam ter uma compreensão básica desses três modos de tarefa, sem a necessidade de se aprofundar em todo o processo e nos detalhes complexos. A introdução desses modos tem como objetivo garantir que os usuários não fiquem confusos ou preocupados ao encontrar diferentes interfaces de usuário durante a configuração de tarefas. Cada modo tem sua própria página de configuração no app, que pode variar dependendo do modo selecionado. Os usuários devem seguir as instruções com base em seus requisitos específicos para configurar suas tarefas do Watcher de forma eficaz.
:::

Se você criar uma tarefa que seja julgada como usando LLM puro, então, no SenseCraft APP, a página de Configuração de Tarefas será exibida aproximadamente como mostrado abaixo.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

Além dos recursos de configuração e execução de tarefas, o Serviço de LLM Puro em Nuvem também permite que os usuários participem de conversas puramente baseadas em texto com o Language Learning Model (LLM).

Essa funcionalidade permite que você interaja diretamente com o LLM, sem a necessidade de um dispositivo Watcher ou qualquer entrada baseada em imagem. Você pode simplesmente digitar suas mensagens ou consultas na interface de chat, e o LLM responderá de acordo. Consulte [Digitar a tarefa](#digitar-a-tarefa) para mais detalhes.

#### Serviço de IA Local + LLM em Nuvem

O terceiro modo de operação do dispositivo Watcher é uma combinação do serviço de IA Local com o serviço de LLM em nuvem. **Esse modo entra em ação quando o serviço de IA local do Watcher reconhece o objeto especificado, mas exige uma análise adicional do serviço LLM em nuvem para determinar o comportamento ou o estado do objeto**.

:::danger
Podem ser aplicadas taxas pelo uso de alguns serviços do SenseCraft AI, consulte a documentação abaixo para obter detalhes:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/pt-br/watcher_price/)**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_4.png" style={{width:1000, height:'auto'}}/></div>

No exemplo mostrado na imagem, o objeto é definido como "cat" e a ação como "flashing light". Quando o Watcher detecta um gato usando seu modelo de IA local para detecção de pets, ele então chama o serviço de nuvem LLM para analisar o comportamento do gato e determinar se ele está "eating".

Se o serviço de nuvem LLM confirmar que o gato está de fato comendo, o Watcher executa a ação especificada, que neste caso é piscar a luz RGB no dispositivo. Essa combinação de serviços locais e baseados em nuvem permite uma detecção e análise mais sofisticadas, possibilitando que o Watcher não apenas identifique objetos, mas também compreenda suas ações ou estados.

Ao aproveitar tanto o serviço de IA Local quanto o serviço de nuvem LLM, o Watcher pode lidar com cenários complexos que exigem vários níveis de análise. O modelo de IA local primeiro detecta a presença do objeto especificado, enquanto o serviço de nuvem LLM fornece contexto adicional e entendimento do comportamento do objeto.

Se você configurar uma tarefa que seja avaliada como usando local + LLM, então, no SenseCraft APP, a página de Configuração da Tarefa será exibida aproximadamente como mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

### Resumos

Aqui está uma tabela comparativa dos três modos com base em eficiência, custo e escolha:

<div class="table-center">
	<table align="center">
		<tr>
            <th rowspan="2"> </th>
			<th>Serviço totalmente local</th>
			<th colspan="2">Dependência de serviços em nuvem</th>
		</tr>
        <tr>
            <th>Serviço de IA Local</th>
			<th>Serviço de LLM baseado em nuvem</th>
			<th>Serviço de IA Local + LLM baseado em nuvem</th>
		</tr>
		<tr>
            <th>Eficiência</th>
			<td align="center">Tempo de alarme: <strong>2s</strong><br />Intervalo mínimo de tempo para disparar alarme: <strong>5s</strong></td>
			<td align="center">Tempo de alarme: <strong>10s</strong><br />Intervalo mínimo de tempo para disparar alarme: <strong>30s</strong></td>
			<td align="center">Tempo de alarme: <strong>10s</strong><br />Intervalo mínimo de tempo para disparar alarme: <strong>30s</strong></td>
		</tr>
		<tr>
            <th>Custo</th>
			<td align="center">❎</td>
			<td align="center">☑️</td>
			<td align="center">☑️</td>
		</tr>
		<tr>
            <th>Como escolher</th>
            <td><strong>Vantagens</strong>: depende inteiramente do serviço de IA local do Watcher, sem despesas adicionais, e possui tempos de reconhecimento e resposta mais rápidos. Se houver um modelo direcionado, então teoricamente também haverá uma maior precisão de reconhecimento.<br /><strong>Desvantagens</strong>: Se você não tiver um modelo, não poderá usar o serviço. Também não é possível usar apenas o serviço local se for necessária a análise de comportamento dos objetos.</td>
            <td><strong>Vantagens</strong>: Pode reconhecer uma ampla variedade de objetos, mesmo que não haja modelos pré-treinados disponíveis na biblioteca do SenseCraft AI. Adequado para tarefas que exigem análise de comportamento de objetos.<br /><strong>Desvantagens</strong>: Requer uma conexão ativa com a internet. Pode gerar custos adicionais pelo uso de serviços em nuvem, especialmente após o término da fase de testes públicos gratuitos. Tempos de resposta um pouco mais lentos em comparação com o modo de Serviço de IA Local.</td>
            <td><strong>Vantagens</strong>: Em comparação com o modo Serviço de LLM baseado em nuvem, este modo usa o Serviço de IA Local para filtrar objetos não específicos antes de chamar o Serviço de LLM baseado em nuvem. Para objetos que não estão sempre presentes, mas possuem modelos disponíveis, este modo pode reduzir bastante o custo de chamadas ao Serviço de LLM baseado em nuvem, realizando a análise de comportamento apenas em imagens que contenham os objetos identificados.<br /><strong>Desvantagens</strong>: Ainda pode haver custos adicionais pelo uso do serviço de LLM baseado em nuvem em combinação com o serviço de IA local, embora os custos sejam menores do que usar exclusivamente o modo Serviço de LLM baseado em nuvem. Requer uma conexão ativa com a internet para a análise de comportamento na nuvem. Tempos de resposta gerais um pouco mais lentos em comparação com o modo Serviço de IA Local.</td>
		</tr>
	</table>
</div>

1. O significado de "Tempo de Alarme" varia dependendo do modo:

    - **Modo Serviço de IA Local**:
        "Tempo de Alarme" refere-se à duração em que as luzes RGB ou o alto-falante do Watcher permanecem ativos após o disparo de um alarme.

    - **Modo Serviço de LLM baseado em nuvem**:
        "Tempo de Alarme" indica não apenas a duração da ativação das luzes RGB e do alto-falante, mas também o tempo em que a tela da câmera exibida fica pausada. Essa pausa leva em conta o tempo necessário para transferir a imagem para o servidor em nuvem para análise.

2. A configuração "Intervalo mínimo de tempo para disparar alarme" é independente do "Tempo de Alarme" e não representa uma relação sequencial. Essa configuração especifica o tempo mínimo que deve decorrer entre dois disparos de alarme consecutivos. Ao configurar uma tarefa, os usuários **não têm permissão para** definir um tempo de alarme menor que esse intervalo mínimo. Essa limitação garante que o sistema tenha tempo suficiente para processar e responder a cada evento de alarme antes que outro possa ser disparado. Essa limitação garante que o sistema tenha tempo de processamento suficiente e evita disparos de alarme excessivos ou contínuos, promovendo uma operação estável e confiável.

:::danger
Podem ser aplicadas taxas pelo uso de alguns serviços do SenseCraft AI, consulte a documentação abaixo para obter detalhes:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/pt-br/watcher_price/)**
:::


## Definir tarefas pelo SenseCraft APP

Depois de entender a classificação e os conceitos básicos de tarefas, vamos dar uma olhada mais de perto em como enviar comandos para o Watcher no SenseCraft APP em todos os detalhes. Vamos supor que você concluiu o processo de pareamento do Watcher e chegou à página de chat do Watcher. Se você ainda não sabe como vincular um dispositivo, consulte [Device Binding and OTA Upgrade](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher/#device-binding-and-ota-upgrade).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/workflow.png" style={{width:1000, height:'auto'}}/></div>

### Digitar a tarefa

Cada dispositivo Watcher possui sua própria janela de chat dedicada dentro do SenseCraft APP. Para enviar comandos a um Watcher específico, navegue até a janela de chat dele e use o campo de entrada para digitar o comando desejado. Você pode digitar o comando manualmente ou usar a funcionalidade de entrada de voz do seu teclado para maior conveniência.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/21.png" style={{width:250, height:'auto'}}/></div>

Ao compor um comando, é crucial fornecer instruções claras e detalhadas para garantir que o Watcher compreenda e execute a tarefa com precisão. Seu comando deve incluir as seguintes informações:

- O objeto específico ou os objetos que você deseja que o Watcher reconheça.

- Quaisquer ações ou comportamentos adicionais associados ao(s) objeto(s), se aplicável.

- A ação ou resposta desejada que você espera do Watcher após o reconhecimento bem-sucedido.

Ao fornecer instruções abrangentes, você permite que o Watcher compreenda e execute de forma eficaz a tarefa designada. Lembre-se de ser o mais específico e descritivo possível para alcançar os melhores resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/22.png" style={{width:250, height:'auto'}}/></div>

Além dos recursos de configuração e execução de tarefas, o Serviço de LLM Puramente Baseado em Nuvem também permite que os usuários participem de conversas puramente baseadas em texto com o Language Learning Model (LLM).

O recurso de bate-papo em texto do Serviço de LLM Puramente Baseado em Nuvem abre novas possibilidades para que os usuários interajam diretamente com o LLM. Ele oferece uma maneira conveniente de acessar o conhecimento e as capacidades do LLM sem a necessidade de um dispositivo físico Watcher.

Seja porque você tem dúvidas, precisa de ajuda com um tópico específico ou apenas deseja explorar as capacidades do LLM, o recurso de bate-papo baseado em texto oferece uma forma simples e intuitiva de se comunicar com o modelo de IA.

Sinta-se à vontade para aproveitar este recurso sempre que precisar de informações, orientação ou simplesmente quiser participar de uma conversa informativa com o LLM.

:::danger
Podem ser aplicadas taxas pelo uso de alguns serviços do SenseCraft AI, consulte a documentação abaixo para obter detalhes:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/pt-br/watcher_price/)**
:::

### Identificar ou configurar tarefas para desmembramento

Após concluir a digitação do comando de tarefa, siga estas etapas para confirmar e executar o comando:

1. Clique no botão **Send** localizado no canto inferior direito da janela de chat para enviar seu comando.

2. O sistema de backend irá processar e decompor seu comando de tarefa em suas partes constituintes.

3. Um pequeno cartão será retornado para você, exibindo a interpretação que o Watcher fez de sua tarefa. O cartão apresenta principalmente as seguintes informações:

   - **When**: As condições ou gatilhos que iniciarão a execução da tarefa.
   - **Do**: As ações ou respostas que o Watcher executará após o reconhecimento bem-sucedido do objeto.
   - **Capture Frequency**: O intervalo de tempo em que a tarefa será disparada e executada.

4. Revise as informações no cartão para garantir que o Watcher entendeu corretamente suas instruções de tarefa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div>

5. Se você estiver satisfeito com a interpretação do Watcher, clique no botão **Run** no cartão para implantar a tarefa no Watcher e iniciar a execução.

6. (Opcional) Para uma análise mais detalhada da divisão da tarefa, clique no botão **Detail Config** no cartão. Isso fornecerá informações adicionais sobre a configuração da tarefa.

    Se você descobrir qualquer interpretação incorreta ou desejar fazer alterações na configuração da tarefa, use a opção "Detail Config" para modificar manualmente as configurações de acordo com suas necessidades. Conforme descrito no [Concept of the Tash chapter](#Concepto-da-Tarefa), a página Detail Config varia de modo para modo. Você só precisa selecionar ou modificar os itens de configuração de acordo com a situação real.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/24.png" style={{width:800, height:'auto'}}/></div>

    Na seção "Detail Config", você pode encontrar várias configurações que permitem ajustar finamente a configuração da sua tarefa. Aqui está uma visão geral das configurações disponíveis:

    1. **Use Local Model**:
    - Essa configuração aparece quando a tarefa exige o uso de serviços locais de IA.
    - O sistema seleciona automaticamente o modelo apropriado da biblioteca SenseCraft AI com base na tarefa que você forneceu.
    - Você tem a opção de desativar o uso de serviços locais de IA, o que resultará na utilização direta de serviços em nuvem para análise de imagens.
    - Você também pode modificar manualmente a seleção do modelo e escolher entre os modelos disponíveis publicamente na biblioteca SenseCraft AI.
    - Observe que, se a tarefa for inteiramente local, você não poderá desativar a opção "Use Local Model".<br /><br />

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/25.png" style={{width:250, height:'auto'}}/></div>

    2. **Scenario**:
    - Esta seção exibe as condições de disparo da Action.
    - Você pode ajustar o número de classes e modificar as declarações de disparo de acordo com suas necessidades.
    - Se um cenário mais complexo estiver envolvido, ele pode ser ajustado de forma flexível adicionando uma condição.<br /><br />

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/26.png" style={{width:600, height:'auto'}}/></div>

    3. **Action**:
    - Aqui, você pode configurar o comportamento do Watcher após um alarme ser disparado.
    - Especifique as ações que você deseja que o Watcher execute, como acender luzes RGB, reproduzir sons pelo Speaker ou enviar notificações.<br /><br />

    4. **Capture Frequency**:
   - Essa configuração determina o intervalo de tempo em que a tarefa será executada.
   - Ajuste a frequência com base nos intervalos de monitoramento desejados e nos requisitos específicos da sua tarefa.<br /><br />

    :::caution
    Na seção "Detail Config", um valor padrão para **Capture Frequency** será definido automaticamente. Para o Watcher Cloud-based LLM Service, a "Capture Frequency" **não pode ser definida abaixo de 60 segundos**. Se você estiver usando Watcher Local AI Services, a configuração de "Capture Frequency" não estará disponível, pois o dispositivo fornecerá alertas em tempo real.
    :::

    5. **Working Time Frame**:
    - Essa configuração permite definir o intervalo de tempo durante o qual a tarefa ficará ativa.
    - Especifique os horários de início e término da operação da tarefa, garantindo que o monitoramento ocorra apenas dentro do intervalo de tempo designado.
    - Observe que, para que essa configuração funcione corretamente, o relógio interno do Watcher deve estar sincronizado com o horário do sistema do seu dispositivo móvel. Inconsistências entre os dois podem causar problemas no fluxo da tarefa.<br />

    Ao explorar e configurar essas opções na seção "Detail Config", você pode personalizar sua tarefa para atender às suas necessidades específicas. Reserve um tempo para revisar e ajustar cuidadosamente cada configuração para garantir o desempenho ideal e o alinhamento com seus objetivos de monitoramento.

7. Depois de verificar que tudo está configurado corretamente e corresponde às suas expectativas, clique no botão **Run** para iniciar a execução da tarefa.

Seguindo essas etapas, você pode garantir que o Watcher compreendeu com precisão o seu comando de tarefa e que a execução está alinhada com seus objetivos pretendidos. O processo de confirmação permite uma revisão final e a oportunidade de fazer quaisquer ajustes necessários antes de implantar a tarefa no Watcher.

### Executar tarefa

Depois de revisar e configurar cuidadosamente as definições da tarefa na seção "Detail Config", você está pronto para implantar a tarefa no seu dispositivo Watcher. Para iniciar a execução da tarefa, siga estas etapas:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/27.png" style={{width:800, height:'auto'}}/></div>

1. Clique no botão "Run" localizado no cartão de configuração da tarefa.

2. Ao clicar em "Run", a tarefa configurada será transmitida para o Watcher pela rede.

3. O processo de implantação da tarefa pode levar algum tempo, pois envolve duas etapas principais:

   - Recebimento da Tarefa: o Watcher precisa receber e processar os dados de configuração da tarefa enviados a partir do SenseCraft APP.

   - Download do Modelo (se aplicável): se a tarefa exigir o uso de serviços locais de IA, o Watcher poderá precisar fazer o download dos modelos de IA necessários para executar a tarefa localmente.

4. Durante o processo de implantação da tarefa, você pode monitorar o progresso pelo SenseCraft APP:

   - O status do cartão de tarefa mudará para indicar a etapa atual da implantação.

   - Acompanhe as atualizações de status para rastrear o progresso do recebimento da tarefa e do download do modelo (se aplicável).

5. Quando a implantação da tarefa for concluída, você observará uma mudança no comportamento do Watcher:

   - O Watcher exibirá automaticamente uma expressão de monitoramento ou indicará que está pronto para iniciar a tarefa.

   - Essa mudança no comportamento do Watcher significa que a execução da tarefa foi iniciada.

### Ver tarefas atuais e verificar alarmes

O SenseCraft APP oferece uma maneira conveniente de monitorar o progresso e o status das tarefas em execução, bem como revisar quaisquer alarmes disparados e quadros-chave associados.

- Nesta seção, você encontrará informações sobre a tarefa atualmente em execução no seu dispositivo Watcher.

- A tarefa atual será representada por um pequeno cartão, exibindo o nome da tarefa e o dispositivo Watcher associado.

- O cartão indicará se a tarefa está em andamento ou não, fornecendo uma visão rápida do status da tarefa.

Quando uma tarefa dispara um alarme com base nas condições configuradas, o SenseCraft APP irá notificá-lo por meio de notificações push ou alertas dentro do aplicativo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/28.png" style={{width:250, height:'auto'}}/></div>

Na seção "Detect History", você encontrará uma lista de todos os alarmes disparados pelas suas tarefas em execução. Cada alarme será representado por um cartão ou item de lista, exibindo informações como o nome da tarefa, dispositivo Watcher, carimbo de data e hora e uma breve descrição da condição disparada. Toque em um cartão de alarme para visualizar informações mais detalhadas sobre o alarme, incluindo as imagens de quadros-chave associadas.

As imagens de quadros-chave são capturadas pelo dispositivo Watcher no momento em que o alarme foi disparado, fornecendo evidências visuais do cenário detectado. Você pode revisar as imagens de quadros-chave para analisar a situação e tomar as ações apropriadas, se necessário. O aplicativo também pode fornecer opções para reconhecer ou dispensar os alarmes, dependendo das suas preferências e da gravidade da situação.

### Fim da tarefa

Quando você precisar interromper uma tarefa em execução no seu dispositivo Watcher, terá duas opções convenientes disponíveis:

Opção 1: Encerrar a Tarefa pelo SenseCraft APP
1. Abra o SenseCraft APP no seu dispositivo móvel e navegue até a seção "Current Tasks".
2. Localize o cartão que representa a tarefa atualmente em execução no seu dispositivo Watcher e toque no botão "END".
3. O aplicativo enviará uma solicitação ao dispositivo Watcher para interromper a tarefa, e o cartão da tarefa será atualizado para refletir o status de tarefa encerrada.

Opção 2: Encerrar a Tarefa diretamente no Dispositivo Watcher
1. Toque levemente na tela do dispositivo Watcher ou pressione o botão da roda de rolagem para exibir o menu ou as opções.
2. Selecione a opção "End Task" e o dispositivo Watcher encerrará prontamente a tarefa e retornará ao estado inativo.
3. O cartão da tarefa no SenseCraft APP será atualizado automaticamente para refletir o status de tarefa encerrada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/29.png" style={{width:250, height:'auto'}}/></div><br />

Ambos os métodos fornecem uma maneira simples e intuitiva de interromper a execução da tarefa quando necessário. Escolha o método que for mais conveniente para você, com base na sua situação atual e na proximidade do dispositivo Watcher.

## Enviando Tarefa por Fala

O Watcher oferece uma maneira conveniente e intuitiva de enviar tarefas usando comandos de voz, graças ao recurso "Push to Talk". Essa funcionalidade é acessível a partir de qualquer tela ou interface no dispositivo, facilitando a interação com o Watcher sem precisar navegar por menus. Aqui está um guia passo a passo sobre como usar esse recurso:

1. Ativar o Push to Talk:

   - Localize o Wheel Button no canto superior direito do Watcher.
   - Pressione e segure o Wheel Button para entrar na interface de entrada de voz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. Fale Seu Comando ou Mensagem:

   - Enquanto estiver segurando o Wheel Button, fale claramente sua tarefa ou mensagem para o Watcher.
   - Você pode atribuir tarefas, como "Tell me if the baby is crying" ou "If the dog is stealing food, say stop copper".
   - Alternativamente, você pode iniciar uma conversa fazendo perguntas ou declarações, como "Tell me a joke".

3. Solte o Botão de Roda:

   - Quando terminar de falar, solte o Botão de Roda.
   - O Watcher processará sua entrada de voz e determinará se é uma atribuição de tarefa ou uma conversa.

4. Atribuição de Tarefa:

   - Se o Watcher reconhecer sua entrada de voz como uma atribuição de tarefa, ele dividirá automaticamente sua tarefa em componentes relevantes.
   - O Watcher exibirá cartões na tela, mostrando o **Objeto** (o que monitorar), o **Comportamento** (qual ação procurar), a **Notificação** (como alertá-lo), o **Intervalo de Tempo** (quando monitorar) e a **Frequência** (com que frequência monitorar).
   - Revise as informações exibidas para garantir que elas representem com precisão a tarefa que você pretende.
   - Se os detalhes estiverem corretos, confirme a tarefa e o Watcher começará a executá-la de acordo com os parâmetros especificados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

Dicas para Uso Ideal:

- Fale claramente e em um ritmo moderado para garantir um reconhecimento de voz preciso.
- Ao falar, aproxime-se o máximo possível do Watcher, a uma distância de cerca de **3 ~ 10cm**, pois a precisão do reconhecimento de fala é melhor.
- Minimize o ruído de fundo para melhorar a capacidade do Watcher de compreender seus comandos de voz.
- Seja específico e conciso ao atribuir tarefas para ajudar o Watcher a interpretar com precisão suas intenções.
- Se o Watcher interpretar mal sua tarefa ou conversa, simplesmente pressione e segure o Botão de Roda novamente para fornecer esclarecimentos ou correções.

Ao aproveitar o recurso Push to Talk, você pode enviar tarefas e se envolver em conversas com o Watcher sem esforço, tornando sua interação com o dispositivo mais natural e eficiente.

:::note
Se você encontrar um erro de **0x7002**, isso significa que o status atual da rede do Watcher não está bom e a chamada do serviço de áudio falhou. Altere a rede ou o local e tente novamente.
:::

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


