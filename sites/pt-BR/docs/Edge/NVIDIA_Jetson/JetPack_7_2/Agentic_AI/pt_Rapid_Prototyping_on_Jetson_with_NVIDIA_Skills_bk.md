---
description: Aprenda um fluxo de trabalho repetível, baseado em habilidades, para acelerar a entrega de aplicações Jetson, desde a inspeção do dispositivo até o protótipo executável e o empacotamento da demonstração.
title: Prototipagem Rápida no Jetson com NVIDIA Skills
keywords:
  - Jetson
  - NVIDIA Skills
  - Claude Code
  - Agentic AI
  - Rapid Prototyping
  - reComputer
  - Edge AI
  - AI Agent
image: https://files.seeedstudio.com/wiki/nv_skills/banner.png
slug: /rapid_prototyping_on_jetson_with_nvidia_skills_bk
last_update:
  date: 07/10/2026
  author: zibo
createdAt: '2026-07-09'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/pt-br/rapid_prototyping_on_jetson_with_nvidia_skills_bk/
---

# Prototipagem Rápida no Jetson com NVIDIA Skills

:::note Cópia da coleção JetPack 7.2
Esta cópia está incluída porque as agent skills fazem parte do ecossistema de desenvolvimento do JetPack 7.2. Antes de executar uma skill, confirme que o alvo reporta JetPack 7.2 / L4T 39.2 e revise cada pacote ou otimização proposta para o dispositivo em produção.
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/banner.png" style={{width:1000, height:'auto'}} />
</div>

## Introdução

Projetos com Jetson raramente travam porque os desenvolvedores não conseguem escrever código de modelo. Eles geralmente travam antes, no trabalho de integração em torno da implantação: verificar o estado do dispositivo, confirmar a compatibilidade do JetPack, escolher um caminho de instalação viável, construir o primeiro pipeline executável, validar saídas e empacotar o resultado em algo demonstrável. Em um projeto real, é aí que, muitas vezes, os primeiros dias desaparecem.

É aqui que os **fluxos de trabalho de agente + skill** ajudam. Uma skill focada em Jetson fornece a um agente de codificação de IA instruções estruturadas para uma classe estreita de tarefas, como diagnóstico do dispositivo, inspeção de memória, preparação de ambiente ou importação de modelo. Em vez de começar de um shell em branco e reconstruir o fluxo de trabalho a partir de documentação dispersa, você começa a partir de um caminho de entrega com conhecimento de Jetson.

Este método não está vinculado a um único framework de agente. Qualquer agente que consiga carregar skills reutilizáveis, inspecionar arquivos, executar comandos e interagir com dispositivos remotos pode se beneficiar do mesmo padrão. Neste wiki, usamos o **Claude Code** para o passo a passo simplesmente porque ele oferece uma forma clara de demonstrar o fluxo de trabalho de ponta a ponta.

Este artigo é intencionalmente escrito como uma **metodologia de entrega**, não como um registro de demonstração pontual. Usaremos um exemplo de detecção de velocidade de veículos, mas o objetivo real é mostrar um caminho repetível que você possa reutilizar em diferentes aplicações Jetson e diferentes configurações de agente.

:::note
"Skills" neste artigo se refere a **skills de agente reutilizáveis criadas pela NVIDIA** e carregadas pelo agente de codificação usado no fluxo de trabalho. Isso é diferente do **módulo "Skills" do Jetson DevelopTool** da Seeed, que é um recurso separado de automação por GUI. Se você está procurando esse módulo de GUI, consulte o artigo [DevelopTool Skills module](/pt-br/jetson_developtool_skills/).
:::

## O que são NVIDIA Skills?

Uma **skill** é um pacote reutilizável de instruções e material de referência que um agente de codificação de IA carrega sob demanda. Quando você invoca uma skill, o agente recebe orientação específica para a tarefa: o que inspecionar, quais convenções seguir, quais ferramentas usar e quais saídas verificar. No Claude Code, nomear explicitamente uma skill com `/<skill-name>` é apenas uma das formas de acionar esse comportamento; depois que as skills são instaladas no workspace, o agente também pode escolher entre elas automaticamente.

Dois repositórios de skills da NVIDIA são especialmente relevantes para desenvolvedores Jetson:

- **[NVIDIA/skills](https://github.com/NVIDIA/skills)** para fluxos de trabalho de uso geral

Neste artigo, usamos essas skills para reduzir o trabalho repetitivo de bring-up e encurtar o caminho de "dispositivo disponível" até "protótipo validado".

## Por que a Entrega em Jetson Desacelera

A primeira versão de uma aplicação Jetson geralmente precisa coordenar o status de hardware, a compatibilidade de JetPack e runtime, as escolhas de instalação de pacotes em ARM, o posicionamento do modelo, comandos de inicialização, caminhos de saída e algum nível mínimo de validação de desempenho. O problema não é que qualquer etapa isolada seja impossível. O problema é que as etapas estão espalhadas por diferentes ferramentas, documentações e trabalho de shell ad hoc, então o caminho de entrega permanece nebuloso por mais tempo do que deveria.

O valor prático de um fluxo de trabalho orientado por skills é que ele transforma isto:

| Caminho tradicional | Caminho orientado por skills |
| --- | --- |
| Ler vários documentos antes de agir | Começar a partir de uma skill focada na tarefa |
| Inspecionar manualmente o estado do dispositivo | Pedir ao agente para diagnosticar o Jetson |
| Adivinhar um caminho de dependências | Pedir ao agente para usar um caminho de instalação com conhecimento de Jetson |
| Construir manualmente um protótipo de primeira passagem | Pedir ao agente para estruturar a menor versão executável |
| Explicar manualmente artefatos para colegas | Pedir ao agente para resumir arquivos, comandos e saídas |
| Construir do zero uma interface rápida de demonstração | Pedir ao agente para empacotar o protótipo para compartilhamento |

## Em que as Skills São Boas

Para trabalho com Jetson, as skills são mais fortes quando a tarefa ainda é reduzir incertezas: inspecionar o dispositivo atual, escolher um caminho de configuração mais compatível com Jetson, gerar o primeiro protótipo executável em torno de um modelo ou ativo de teste, explicar o que foi criado e empacotar o resultado em algo que possa ser mostrado ou executado novamente. Elas são muito menos úteis como substituto para engenharia de produção. Uma skill pode acelerar o bring-up e a validação, mas não garante o melhor desempenho possível, confiabilidade em nível de produção, precisão calibrada para o seu cenário ou as escolhas finais de arquitetura que você faria para escala e manutenibilidade. Esse limite é importante, porque o objetivo do fluxo de trabalho é alcançar uma base confiável mais rápido e depois endurecê-la de forma deliberada.

## O Fluxo de Trabalho de Entrega em Jetson em 5 Etapas

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson_delivery_workflow.png" style={{width:1000, height:'auto'}} />
</div>


## Qual Skill Usar em Cada Etapa

Nem todo projeto precisa de todas as skills. Um modelo mental melhor é usar a skill certa quando um bloqueio específico aparece.

### Comece com `jetson-diagnostic`

Use esta primeiro quando você ainda não sabe se o Jetson está pronto para implantação. Na prática, ela fornece ao agente contexto suficiente do dispositivo em produção para responder às perguntas que normalmente bloqueiam o restante do fluxo de trabalho: qual modelo de Jetson está em execução, qual versão de JetPack/L4T está instalada, quanta memória está livre, se o dispositivo está limitado termicamente e se serviços principais ou endpoints de hardware estão visíveis.

Exemplo de prompt:
```text
/jetson-diagnostic Check whether this Jetson is ready for a real-time vision prototype and summarize any blockers.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson-diagnostic.PNG" style={{width:900, height:'auto'}} />
</div>

### Use `jetson-package` quando a orientação de configuração se tornar genérica ou insegura

No Jetson, recomendações de instalação de pacotes copiadas de Linux x86 ou tutoriais genéricos de IA frequentemente falham. Use `jetson-package` quando quiser que o agente prefira fontes e caminhos de implantação com conhecimento de Jetson, especialmente ao decidir entre pacotes de host, wheels ou containers para dependências como PyTorch ou OpenCV.

```text
/jetson-package Recommend the correct Jetson-compatible dependency path for this vision project.
```

### Use `jetson-memory-audit` quando a memória for o primeiro gargalo

Isso é útil quando o modelo carrega lentamente, o processo é encerrado ou o dispositivo parece instável sob carga de inferência. Ela fornece ao agente uma visão baseada em dados do que está usando DRAM no momento, se um processo anterior realmente liberou memória e se uma alteração de configuração fez diferença mensurável em vez de apenas soar plausível.

```text
/jetson-memory-audit Measure the current memory pressure and identify the biggest consumers before I deploy this prototype.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

### Use `jetson-headless-mode` quando o dispositivo estiver atuando como um appliance

Se o Jetson for usado como um nó de borda dedicado em vez de uma máquina desktop, mudar para o modo headless pode recuperar recursos para cargas de trabalho de inferência.

```text
/jetson-headless-mode Compare memory usage before and after enabling headless mode for this deployment target.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/headless-mode.PNG" style={{width:900, height:'auto'}} />
</div>

### Use uma skill de build específica da tarefa para gerar a primeira versão executável

Depois que o dispositivo e o ambiente forem compreendidos, o próximo objetivo não é a perfeição. O objetivo é chegar ao **menor protótipo útil** com saídas inspecionáveis.

No exemplo abaixo, usamos `deepstream-import-vision-model` como etapa de build.

## Critérios de Aceitação do Protótipo

Antes de avançar mais fundo na otimização, defina o que conta como um protótipo bem-sucedido. Um primeiro protótipo Jetson geralmente é bom o suficiente quando pode ser executado novamente com um comando claro, seus caminhos de entrada e saída são explícitos, o resultado pode ser inspecionado imediatamente e o panorama atual de recursos deixa de ser um mistério. Se você consegue ver o principal gargalo e o próximo passo de engenharia é óbvio, o protótipo já cumpriu seu papel. O objetivo da primeira passagem não é terminar o produto. O objetivo é reduzir a incerteza rápido o bastante para que a próxima iteração se torne deliberada em vez de tentativa e erro.

## Pré-requisitos

Antes de seguir o fluxo de trabalho de exemplo, prepare o seguinte:

- um **reComputer Jetson** ou outro dispositivo Jetson ligado e acessível pela rede
- um ambiente **JetPack** funcional no Jetson
- um **agente de codificação de IA** instalado na máquina host que irá conduzir o fluxo de trabalho
- **acesso SSH** da máquina host ao Jetson
- armazenamento suficiente no Jetson para downloads de modelos, arquivos temporários e saídas
- um **ativo de teste**, como um clipe de vídeo, já colocado no Jetson

Para este exemplo, assumimos que o vídeo de teste `top_view.mp4` está colocado em `/home/seeed/workspace/traffic_monitor/` no Jetson.

:::note
A máquina host executa o agente de codificação e usa skills para conduzir o trabalho no Jetson, normalmente via SSH. Na prática, sua configuração exata ainda pode exigir dependências adicionais como Python, DeepStream ou suporte a containers, dependendo do caminho de implementação selecionado pelo agente.
:::

## Configurar o Workspace de Skills

No exemplo com Claude Code usado neste artigo, as skills ficam dentro de um diretório `.claude/` na raiz do seu projeto. 

```bash
mkdir -p project/.claude/
cd project/
git clone https://github.com/NVIDIA/skills.git
cp -r skills/skills .claude/
claude
```

Quando o comando `claude` for iniciado, você pode digitar `/<skill-name>` para forçar explicitamente o agente a ler uma skill específica. Isso é útil quando você já sabe qual fluxo de trabalho deseja. Mas, depois que as skills são instaladas no workspace, o agente já sabe que elas existem e pode escolher entre elas automaticamente a partir da sua solicitação. Na prática, ele pode encadear várias skills em uma única passagem, por exemplo, combinando diagnóstico, seleção de pacotes, inspeção de memória e geração de protótipo em vez de tratar cada etapa como uma sessão completamente separada.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/skills_list.PNG" style={{width:800, height:'auto'}} />
</div>

## Estudo de caso: detecção de velocidade de veículos mapeada para o fluxo de trabalho

O exemplo a seguir mostra como o fluxo de trabalho de 5 etapas funciona na prática. O exemplo é detecção de velocidade de veículos, mas o ponto principal é o padrão de entrega.

### Etapa 1. Diagnosticar o dispositivo

Comece verificando se o Jetson está realmente pronto para uma carga de trabalho de visão. Um prompt como o seguinte fornece contexto suficiente para o agente inspecionar o dispositivo e relatar os bloqueadores que importam para o protótipo, em vez de apenas despejar telemetria bruta.

```text
/jetson-diagnostic Check the current status of my Jetson and summarize any blockers for a vision prototype.
SSH login: seeed@192.168.6.204
Password: seeed
```
:::note
O endereço IP e a senha acima são valores de exemplo. Substitua-os pelas suas próprias credenciais do Jetson. `seeed` é a senha padrão em alguns dispositivos Jetson da Seeed e deve ser alterada em unidades de produção.
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/check_device.PNG" style={{width:800, height:'auto'}} />
</div>

### Etapa 2. Preparar o ambiente

Se a etapa de diagnóstico mostrar que o ambiente não está limpo o suficiente para o protótipo, este é o momento de preparar em vez de seguir em frente às cegas. `jetson-package` ajuda o agente a escolher um caminho de dependências compatível com Jetson, enquanto `jetson-memory-audit` e `jetson-headless-mode` são úteis quando a pressão de memória ou a sobrecarga desnecessária da área de trabalho se tornam o primeiro obstáculo.

```text
/jetson-package Recommend the correct dependency path for this Jetson vision prototype.
```

```text
/jetson-memory-audit Measure memory usage before I deploy the model and identify the top consumers.
```

```text
/jetson-headless-mode Compare whether this device should be switched to headless mode for better inference headroom.
```

O benefício prático é que você só gasta tempo em trabalho de configuração quando o diagnóstico anterior mostra que isso é realmente necessário.

### Etapa 3. Construir o menor protótipo executável

Agora, passe da prontidão do ambiente para a ativação da aplicação.

```text
/deepstream-import-vision-model Help me access the following directory on Jetson: /home/seeed/workspace/traffic_monitor
Deploy a vehicle speed detection system under this directory. Use the top_view.mp4 file in this directory for testing.
```

Este é o vídeo de tráfego com visão superior usado no passo a passo:

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/top_view.png" style={{width:1000, height:'auto'}} />
</div>

O agente pode escolher diferentes caminhos de implementação dependendo do que existe no dispositivo. O importante neste estágio não é se ele escolheu a pilha final de produção. O importante é que ele produza uma primeira passagem executável com resultados inspecionáveis.

Ao final desta etapa, você deve ter um script principal de inferência ou ponto de entrada da aplicação, um caminho claro de reexecução, um vídeo de saída anotado ou artefato semelhante e arquivos gerados colocados em um workspace conhecido. Se essas partes existirem, a linha de base já é útil, mesmo que a pilha final ainda esteja aberta a mudanças.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/quick_deploy.PNG" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/output_video.png" style={{width:1000, height:'auto'}} />
</div>

É aqui que o fluxo de trabalho começa a compensar. Em vez de gastar a primeira passagem conectando scripts e caminhos manualmente, você passa a avaliar uma linha de base executável e decidir o que merece um esforço de engenharia mais profundo.

### Etapa 4. Validar as saídas e inspecionar a arquitetura

Depois que a primeira passagem existir, peça ao agente para explicar o que ele criou e como executá-la novamente.

```text
Please explain the generated files, the rerun command, the output locations, the current bottlenecks, and the technical approach and architecture you are using.
```

Neste ponto, as perguntas úteis deixam de ser “algo rodou?” e passam a ser “o que exatamente foi criado, como eu executo isso de novo, onde estão as saídas e o que o agente escolheu em termos de arquitetura?” Uma boa explicação de acompanhamento deve deixá-lo com uma visão clara da organização dos arquivos, do caminho de reexecução, das localizações de saída, da abordagem de detecção e estimativa de velocidade e do provável gargalo de desempenho.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/explain1.png" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/explain6.png" style={{width:800, height:'auto'}} />
</div>

Isso economiza tempo porque o agente não está apenas gerando código. Ele também está encurtando o tempo necessário para entender e avaliar a linha de base que acabou de produzir.

### Etapa 5. Empacotar o protótipo em algo compartilhável

Quando o algoritmo funciona a partir da linha de comando, a próxima lacuna geralmente é a capacidade de demonstração.

```text
Help me create a web UI that I can access from my local PC to upload videos for detection and continuously loop the output video.
```

O agente pode encapsular o protótipo em um pequeno serviço web ou interface semelhante para que colegas de equipe ou clientes possam testá-lo sem tocar na linha de comando.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/web_ui_deploy.png" style={{width:1000, height:'auto'}} />
</div>

:::note
Para acessar a interface a partir do seu PC local, certifique-se de que a porta escolhida esteja acessível no Jetson e de que ambas as máquinas estejam na mesma rede, ou use encaminhamento de porta via SSH. Ao avaliar a velocidade de inferência, use o runtime local do lado do Jetson como ponto de referência, porque uma interface web encaminhada pode parecer mais lenta devido à latência de rede e não apenas ao desempenho do modelo.
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/out_ui.gif" style={{width:1000, height:'auto'}} />
</div>

Este é outro motivo pelo qual o fluxo de trabalho é útil na prática: o mesmo processo que criou o protótipo também pode preencher a lacuna entre o backend de prova de conceito e o empacotamento pronto para demonstração.

## Modos comuns de falha e o que fazer em seguida

O fluxo de trabalho é mais útil quando você o usa para reduzir a incerteza certa no momento certo.

| Problema | O que isso geralmente significa | O que fazer |
| --- | --- | --- |
| O caminho de instalação parece genérico ou quebra em ARM | A compatibilidade com Jetson está sendo ignorada | use `jetson-package` |
| O modelo falha ao carregar ou a inferência é instável | a pressão de memória é o primeiro gargalo | use `jetson-memory-audit` |
| O dispositivo desperdiça muita memória em serviços de desktop | o Jetson é melhor tratado como um appliance | use `jetson-headless-mode` |
| O protótipo roda, mas é muito lento | a linha de base é válida, mas ainda não está otimizada | peça ao agente para identificar gargalos e recomendar DeepStream ou TensorRT |
| A demonstração funciona apenas em forma de terminal | a linha de base de engenharia existe, mas não é compartilhável | peça ao agente para empacotar uma interface web ou um wrapper de serviço |

## Do protótipo à produção

Esse fluxo de trabalho é mais forte durante a exploração, ativação e validação. Depois que a linha de base é comprovada, o próximo passo geralmente é o endurecimento manual.

Os movimentos típicos de produção são conhecidos: substituir a lógica de protótipo por um pipeline DeepStream mais estruturado, converter modelos para TensorRT para maior throughput, melhorar a robustez do rastreamento e a qualidade da calibração, transformar scripts ad hoc em um serviço ou aplicação sustentável e adicionar o monitoramento e a disciplina de implantação de que um sistema real precisa. O ponto-chave é simples: **use skills para comprimir o caminho até uma linha de base confiável e depois endureça de forma deliberada.**

## Modelo reutilizável de prompt

A sequência de prompts a seguir é um bom modelo inicial para novos projetos com Jetson:

```text
1. Diagnose this Jetson and list any blockers for running a vision prototype.
2. Recommend the correct Jetson-compatible dependency path.
3. Build the smallest runnable prototype in /path/to/workspace using /path/to/test-asset.
4. Explain the generated files, rerun command, and expected outputs.
5. Measure the current bottleneck and recommend whether to stay in Python or move to DeepStream/TensorRT next.
6. Package the prototype into a simple demo interface if the baseline is validated.
```

Você pode adaptar este modelo para detecção de objetos, análise de vídeo, percepção em robótica ou outros trabalhos de ativação de aplicações no lado Jetson.

## Resumo

O principal ponto não é que um agente específico possa construir uma única demonstração de detecção de velocidade de veículos. O ponto mais útil é que **a entrega de aplicações Jetson se torna muito mais rápida quando você trata as skills como um fluxo de trabalho estruturado**: diagnosticar o dispositivo primeiro, preparar apenas onde for necessário, gerar o menor protótipo executável, validar as saídas e gargalos e, em seguida, empacotar o resultado para compartilhamento. Esse é o padrão repetível. O exemplo de velocidade de veículos é apenas uma instância dele.

## Referências

- [NVIDIA/skills (GitHub)](https://github.com/NVIDIA/skills) — skills de agente de uso geral da NVIDIA
- [NVIDIA-AI-IOT/jetson-device-skills (GitHub)](https://github.com/NVIDIA-AI-IOT/jetson-device-skills) — skills específicas para Jetson
- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code) — instalação e uso do Claude Code
- [Traffic Management DeepStream SDK](/pt-br/Traffic-Management-DeepStream-SDK/) — um caminho mais manual orientado a DeepStream
- [Deploy YOLOv8 with TensorRT and DeepStream SDK](/pt-br/YOLOv8-DeepStream-TRT-Jetson/) — um caminho mais manual de implantação de modelo
- [DevelopTool Skills module](/pt-br/jetson_developtool_skills/) — o módulo de automação "Skills" do Seeed DevelopTool

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
