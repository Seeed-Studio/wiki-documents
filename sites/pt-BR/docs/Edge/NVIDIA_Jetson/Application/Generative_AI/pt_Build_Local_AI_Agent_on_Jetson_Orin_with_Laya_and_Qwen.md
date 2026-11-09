---
title: Criar um agente de IA local no Jetson Orin com Laya e Qwen
description: Crie um agente de IA local no NVIDIA Jetson Orin com Laya e Qwen. Aprenda a mecânica do modelo de decisão e execute automação de navegador e demos de quadro branco no reComputer.
keywords:
  - NVIDIA Jetson
  - Jetson Orin
  - Jetson Orin NX
  - agente de IA local
  - modelo de decisão Laya
  - Qwen3.5
  - automação de navegador
  - reComputer Industrial
  - IA de borda
slug: /jetson/local_decision_model_laya
draft: false
image: https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png
last_update:
  date: 11/04/2026
  author: zibo
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/pt-br/jetson/local_decision_model_laya/
---

# Criar um agente de IA local no Jetson Orin com Laya e Qwen

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-cover-en-v3-dark.png" alt="Ilustração do hardware reComputer Industrial conectado a um seletor de ações Laya e Qwen e a um navegador de busca de voos, com CLICK selecionado." />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

Este wiki constrói um **agente de IA local no NVIDIA Jetson Orin**. **O modelo de decisão local Laya (modelo System One) escolhe a próxima ação; o Qwen3.5-4B lida com a análise das solicitações e a geração de texto.** As medições vêm de um **reComputer Industrial J4012 com Jetson Orin NX 16GB**.

Vamos dar uma olhada nos resultados reais do teste. O agente é solicitado a buscar voos diretos só de ida de Shenzhen para Xangai, ordenados pelo menor preço, e as opções de passagens para os voos correspondentes são exibidas. Todo o processo de execução levou apenas 32,8 segundos. Quem já usou agentes para realizar várias operações de automação de navegador pode perceber que esse tempo de execução é bastante vantajoso.
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-flight-search-demo.gif" alt="Gravação de tela animada da demonstração de voos: o agente preenche e confirma uma busca só de ida de Shenzhen para Xangai, restringe os resultados a voos diretos ordenados pelo menor preço e abre a camada de opções de tarifa para um voo correspondente." loading="lazy" />
</div>

*Demo de voos. Um pedido em inglês, a página ao vivo do Trip.com e a camada de tarifas que o assistente abre sozinho.*

Vamos ver outra demonstração de operação do quadro branco para desenho. Você pode usar linguagem natural para controlar o agente para desenhar e também pode usar linguagem natural a qualquer momento para pedir ao agente que o ajude a modificar o conteúdo.
<div align="center">
  <img width={960} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-whiteboard-demo.gif" alt="Gravação de tela animada da demonstração de quadro branco: três caixas rotuladas Camera, Jetson e Display são desenhadas e conectadas com setas, depois Jetson fica verde e uma caixa Robot Arm conectada é adicionada abaixo dela." loading="lazy" />
</div>

*Demo de quadro branco. Desenhar, recolorir, estender: três solicitações em uma tela, nada redesenhado.*

## Pré-requisitos

- reComputer com JetPack 6.2

## Como um LLM pode operar uma página da web?

Imagine pedir a um agente LLM para encontrar voos. Ele lê a solicitação, abre a página e precisa decidir o que fazer em seguida. Em determinado momento, a página pode mostrar campos de partida e destino, um seletor de data e um botão **Search**. Um programa pode fornecer esses controles como ações disponíveis, mas ainda é preciso que algo escolha um deles.

Um LLM tradicional de geração de texto pode fazer essa escolha lendo a tarefa e a descrição da página e escrevendo uma ação. Por exemplo, ele pode retornar uma instrução para clicar em Search. O programa interpreta a saída e realiza o clique. Depois que a página muda, o assistente a observa novamente e pede a próxima ação.

Para produzir essa instrução, o LLM primeiro lê a tarefa e as informações da página. Em seguida, escreve sua resposta pedaço por pedaço, com cada parte dependendo do que já foi escrito. Essas etapas são chamadas de **prefill** e **decode**. Depois que a página muda, o assistente pode repeti-las para decidir a próxima ação.

Um LLM pode escrever muitas respostas diferentes. Mas e se o programa já tiver uma lista de ações, como **preencher uma cidade**, **clicar em Search** ou **esperar**? Ele poderia pedir a um modelo que escolhesse a partir dessa lista. É aqui que entra um modelo de decisão.

## O que um modelo de decisão faz de diferente?

Um modelo de decisão recebe o estado atual, o objetivo e um conjunto de escolhas disponíveis. Ele atribui pontuações a essas escolhas e retorna uma seleção. No exemplo do voo, depois que as condições de busca necessárias são verificadas, ele pode selecionar **clicar em Search** dentre as ações oferecidas. O programa mapeia essa seleção para um controle real da página e realiza o clique.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-text-vs-action-selection-en.png" alt="Dois caminhos de saída: um modelo autoregressivo realiza etapas de prefill e decodificação sucessiva, enquanto um modelo de decisão codifica a entrada e atribui pontuações às ações candidatas oferecidas." loading="lazy" />
</div>

*A geração de texto produz uma ação como texto de saída; Laya atribui pontuações às escolhas oferecidas.*

Ambas as abordagens processam a entrada e exigem computação. Um modelo de texto também pode produzir um ID de ação curto.

Este projeto usa ambos os modelos. **Qwen** interpreta a solicitação do usuário e fornece texto quando necessário. **Laya** seleciona repetidamente uma operação e um alvo dentre os candidatos atuais. O programa fornece as ferramentas, executa a ação selecionada e verifica o resultado.

## Como o Laya seleciona a próxima ação?

Vamos usar o quadro branco para ver como uma decisão funciona. Há uma caixa verde rotulada **Camera**, e queremos deixá-la azul sem movê-la ou alterar seu rótulo:

```text
Make the Camera rectangle background blue. Keep its text and position.
```

Antes de pedir ao Laya para escolher, o programa descreve a situação em texto:

| Entrada | Exemplo da Camera |
| --- | --- |
| Estado | Camera está verde; seu rótulo e posição são conhecidos |
| Objetivo | Deixar a Camera azul e preservar seu rótulo e posição |
| Candidatos | Os botões vermelho, verde, azul e amarelo disponíveis |

Pense nisso como uma pergunta de múltipla escolha. O programa diz ao Laya o que está na tela, o que precisa mudar e quais botões estão disponíveis. Laya então escolhe entre esses botões. Neste exemplo gravado, o objetivo foi fornecido diretamente ao Laya.

Dentro do Laya, um **codificador** lê o texto e constrói um entendimento da situação: verde é a cor atual, azul é a cor desejada, e o rótulo e a posição devem permanecer os mesmos. Uma **cabeça de decisão** então atribui pontuações às respostas disponíveis. Neste projeto, o codificador é o mmBERT-base; consulte a [configuração de modelo fixada](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json) e a [documentação da arquitetura](https://huggingface.co/convaiinnovations/laya#architecture) para detalhes.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-model-architecture-en.png" alt="Estado textual, objetivo e candidatos entram no codificador bidirecional mmBERT-base e na cabeça de decisão, produzindo escolhas separadas de operação e alvo de clique." loading="lazy" />
</div>

*Laya lê texto sobre o estado, o objetivo e os candidatos; esta implementação não envia pixels de captura de tela para o modelo.*

Para essa decisão, a opção `3` é o botão azul. Assim que o Laya a escolhe, o programa encontra o botão correspondente usando seu ID de ação, `color_blue`. As escolhas podem mudar conforme a página ou o quadro branco mudam, então o programa cria uma lista nova quando observa o próximo estado.

O resultado responde a duas perguntas: **o que devo fazer?** e **onde devo fazer?** Aqui, o Laya selecionou `CLICK` e o botão azul. Ambas as respostas podem ser calculadas no mesmo lote.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-camera-blue-recorded-decision-en.png" alt="Uma decisão gravada seleciona CLICK com probabilidade 0,9785 e o alvo azul com probabilidade 0,9721; uma nova leitura da cena confirma que a Camera mudou de verde para azul." loading="lazy" />
</div>

*Uma decisão gravada da Camera. As caixas coloridas são reconstruídas a partir de valores de cena salvos.*

No resultado gravado, `CLICK` recebeu uma pontuação de **0,9785**, e o botão azul recebeu **0,9721** em seu próprio conjunto de escolhas. O programa clicou no botão e então leu o quadro branco novamente. A Camera estava azul, e seu rótulo e posição permaneceram inalterados.

Essas pontuações mostram quais opções o modelo favoreceu. O valor de `confidence` do alvo, **0,8859**, é um campo separado. Uma pontuação alta por si só não pode garantir que um clique funcionou ou que toda a tarefa esteja concluída.

O programa também deve oferecer as escolhas corretas: Laya não pode escolher um botão que esteja ausente de sua lista. Quando há muitas escolhas, o wrapper pode compará-las em grupos. Isso significa que uma solicitação pode envolver mais de uma avaliação de modelo.

## De uma escolha do modelo a um resultado verificado

Laya escolheu o botão azul. Isso significa que a tarefa terminou? Ainda não. O botão pode ter se movido ou o clique pode não mudar a caixa. O programa deve executar a ação e verificar o que realmente aconteceu.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-verified-action-loop-en.png" alt="Loop do agente desde a análise da solicitação pelo Qwen até a nova observação, candidatos legais, seleção pelo Laya, validação do alvo, execução na interface e verificação independente de conclusão." loading="lazy" />
</div>

*Qwen interpreta a solicitação, Laya seleciona entre as ações disponíveis, e o programa as executa e verifica.*

No exemplo da Camera, o programa segue estas etapas:

1. **Observar:** Ler o quadro branco e encontrar os botões de cor disponíveis.
2. **Escolher:** Pedir ao Laya qual ação e alvo usar.
3. **Verificar:** Garantir que o botão escolhido ainda esteja disponível. Se o quadro branco tiver mudado, observá-lo novamente.
4. **Executar:** Usar Playwright para clicar no botão azul.
5. **Confirmar:** Ler o quadro branco novamente. A Camera está azul? Seu rótulo e posição permanecem inalterados?

Se o resultado ainda precisar de ajustes, o programa pode repetir o loop com o quadro branco atualizado, dentro de seus limites de tentativas. Se as verificações forem aprovadas, ele relata a tarefa como concluída. Mesmo que o modelo retorne `DONE`, o programa ainda verifica o resultado real.

A mesma ideia se aplica a voos: o programa fornece ações como selecionar uma data e, em seguida, verifica a rota, a data e outros requisitos. Essas ações são implementadas no aplicativo. Laya escolhe entre elas; ele não cria novas ferramentas por conta própria.

## Execute rapidamente no Jetson Orin

Na área de trabalho do Jetson, abra um terminal como seu usuário normal e execute:

```bash
git clone https://github.com/zibochen6/jetson-browser-assistant.git
cd jetson-browser-assistant
./setup.sh
```

O instalador verifica o dispositivo, prepara o ambiente uv isolado e o CUDA PyTorch correspondente, instala o Chromium, baixa os modelos fixos, compila o llama.cpp e pré-carrega os serviços. Execute-o sem `sudo`; ele solicita acesso elevado quando bibliotecas de sistema são necessárias. Consulte o [README](https://github.com/zibochen6/jetson-browser-assistant#readme) e o [guia de instalação](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/installation.md) para compatibilidade, downloads e solução de problemas.

## Quando um modelo de decisão é útil?

Vale a pena avaliar um modelo de decisão quando o objetivo do usuário ou o estado atual podem mudar, mas as ferramentas disponíveis são limitadas. Filtros de voo e edições em objetos existentes do quadro branco são dois exemplos. O aplicativo ainda precisa observar o estado atual, fornecer escolhas significativas e verificar o que aconteceu.

Para uma tarefa estável que sempre segue o mesmo caminho, um script determinístico pode ser mais simples. Para respostas abertas ou novo texto, um modelo gerador de texto continua sendo útil. Este projeto não tem um script de referência equivalente, portanto as demonstrações não estabelecem uma vantagem de velocidade ou manutenção em relação a scripts.

A versão atual cobre um fluxo de trabalho limitado do Trip.com e quadros brancos pequenos. Outros sites, desenho arbitrário, voz e controle industrial exigem desenvolvimento e validação separados. Os 16 GB do Jetson são memória compartilhada CPU/GPU; outros aplicativos e swap afetam a capacidade disponível.

## Experimente as demos de navegador e quadro branco

Antes de executar as demos, vamos ver para onde vai o tempo. A tarefa de voo gravada levou **32,8 segundos** no total. As decisões do Laya levaram cerca de **0,5 segundo no total ao longo da tarefa**, enquanto o parsing do Qwen levou cerca de **3,5 segundos**. Ações do navegador, esperas de página, verificações e salvamento também contribuem para o total.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-laya-decision-vs-task-time-en.png" alt="Barras independentes mostram 32,8 segundos de tempo decorrido da tarefa, 0,5 segundo de decisões cumulativas do Laya e 3,5 segundos de parsing do Qwen para uma tarefa de voo que reutilizou condições de busca." loading="lazy" />
</div>

*Tempos registrados da tarefa de voo. As barras são contadores separados, não uma decomposição aditiva completa; a tarefa reutilizou condições de busca existentes.*

### Buscar voos

Inicie o assistente e aguarde `Models ready` e `Task>`:

```bash
./launch.sh
```

Digite a seguinte tarefa, substituindo a data por uma data futura válida:

```text
Find one-way flights from Shenzhen to Shanghai on 2026-11-13 for 1 adult in economy. Nonstop only, lowest price first. Show up to 3 options and open the fare options for one matching flight.
```

O lançador mostra o site e uma janela Live Flow somente leitura. Use `./launch.sh --no-visualize` para mostrar apenas o site. Verifique os candidatos, `Query verified` e `Fare options opened`. O assistente abre a camada de opções de tarifa sem enviar um pedido ou pagamento.

### Editar o mesmo quadro branco

Conclua ou cancele qualquer tarefa ativa e, em seguida, abra uma tela em branco:

```bash
./launch-whiteboard.sh --open examples/whiteboard/blank.excalidraw
```

`--open` substitui a tela atual; as exportações existentes permanecem. Em `Task>`, digite:

```text
Draw three labeled boxes: Camera on the left, Jetson in the center, and Display on the right. Connect Camera to Jetson and Jetson to Display with arrows.
```

Quando terminar, envie uma segunda tarefa sem reabrir o arquivo em branco:

```text
Make Jetson green. Add a box labeled Robot Arm below Jetson and connect Jetson to Robot Arm. Keep everything else.
```

Cada tarefa de quadro branco concluída salva um `scene.excalidraw` editável, um PNG, uma captura de tela e um relatório de verificação. O [guia do quadro branco](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/whiteboard.md) aborda edições adicionais e reabertura de cenas salvas.

A cronometragem começa quando você pressiona Enter e inclui parsing, abertura necessária do navegador, inferência, ações de UI, esperas, verificação e salvamento. Carregamento do modelo, aquecimento e espera por entrada são excluídos; a espera humana é incluída e relatada separadamente.

Pressione Ctrl+C durante uma tarefa para cancelá-la. No prompt ocioso, digite `exit` ou `quit` para deixar os modelos e o navegador em execução. Use `./status.sh` para verificar os serviços e `./stop.sh` para parar os serviços e modelos do projeto. Os registros de voos estão em `runs/`; os registros de quadro branco estão em `whiteboard-runs/`. Consulte o [guia de uso](https://github.com/zibochen6/jetson-browser-assistant/blob/main/docs/usage.md) para outros controles e recuperação.

## Referências

- [Código-fonte e README do Jetson Browser Assistant](https://github.com/zibochen6/jetson-browser-assistant)
- [Modelo laya-browser, dados de treinamento e limitações](https://huggingface.co/cklxx/laya-browser)
- [Wrapper laya-browser fixo](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/laya_browser.py)
- [Configuração fixada de codificador e head](https://huggingface.co/cklxx/laya-browser/blob/645cf366a2ae35f1086e8c20eff48f909bb49206/rl_agent_config.json)
- [Arquitetura do Laya e calibração de probabilidade](https://huggingface.co/convaiinnovations/laya#architecture)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
