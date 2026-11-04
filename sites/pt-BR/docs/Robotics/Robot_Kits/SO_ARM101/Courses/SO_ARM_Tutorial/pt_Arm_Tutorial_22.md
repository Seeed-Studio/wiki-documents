---
description: "Capítulo 22 do curso para iniciantes em SO-ARM Physical AI — a rota VLA sem código: conecte e calibre os braços no SenseCraft Robotics, verifique a teleoperação, vincule câmeras, colete e limpe datasets, treine na nuvem ou local e rode a inferência — sem terminal e sem GPU de treinamento."
title: Capítulo 22 - VLA sem código com SenseCraft Robotics
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SenseCraft Robotics
  - sem código
  - VLA
  - treinamento
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_22
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_22/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 4 · Capítulo 22 · Prática</span>
    <h2>22. VLA sem código com SenseCraft Robotics</h2>
    <p>
      Capítulo 22 do curso para iniciantes em SO-ARM Physical AI — a rota VLA sem código: conecte e calibre os braços no SenseCraft Robotics, verifique a teleoperação, vincule câmeras, colete e limpe datasets, treine na nuvem ou local e rode a inferência — sem terminal e sem GPU de treinamento.
    </p>
    <div className="hero-actions">
      <a href="#prepare">Preparação</a>
      <a href="#connect">Conectar</a>
      <a href="#dataset">Coletar</a>
      <a href="#operation">Operar</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Para quem é este capítulo</strong>
    <span>Para todos — especialmente leitores sem GPU de treinamento.</span>
    <span>Mesma tarefa do Capítulo 11 (pegar em A, colocar em B), mesma teoria — sem Python.</span>
    <span>Um fluxo guiado de 6 passos substitui o terminal.</span>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · Sem configuração de ambiente</span>
    <p className="sensecraft-banner__title">Pule a configuração — execute o reBot Arm e o LeRobot a partir de um único aplicativo</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics é a plataforma no-code da Seeed para o SO-ARM101, reBot Arm 102 + B601-RS e B601-DM. Conecte os braços, calibre, colete demonstrações, treine e execute inferência a partir de uma interface guiada — sem ambiente Python, sem terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Fluxo de trabalho guiado em 6 etapas</li>
      <li>✅ Treinamento em nuvem — sem GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir para SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/pt-br/sensecraft_robotics/">Guia de software</a>
  </div>
</div>

:::tip
O SenseCraft Robotics é a plataforma sem código da Seeed para o SO-ARM101 (e os braços reBot). Conecte os braços, calibre, colete demonstrações, treine e rode a inferência numa interface guiada — sem ambiente Python e sem terminal. Este capítulo é a contraparte gráfica de tudo o que você fez nas Fases 3-4.
:::

<a id="overview"></a>

## 22.1 Preparação

<section id="prepare" className="section-card">
  <div className="section-title">
    <span>Preparação</span>
    <h2>22.1 Preparação</h2>
  </div>

### Hardware

![Lista de hardware do SO-ARM101 Pro](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

| Item | Líder | Seguidor |
| :--- | :--- | :--- |
| Braço | Líder preto montado ×1 | Seguidor branco montado ×1 |
| Placa de servos LeRobot | ×1 | ×1 |
| Cabo de alimentação | 5V ×1 | Pro: 12V ×1; Standard: 5V |
| Cabo de dados | USB-C ×1 | USB-C ×1 |
| Braçadeira de fixação | ×2 | ×2 |

Compartilhado: peças da garras flexível, **duas câmeras USB de 32 × 32 mm** (o kit traz uma; prepare a segunda à parte — os dados de treino precisam de duas vistas), chave de fenda, tapete.

> Os braços precisam estar montados, fixados, alimentados e conectados por USB. Se a montagem não está completa, volte ao [Capítulo 6](/pt-br/robotics/soarm_physical_ai_course_chapter_6/).

### Computador e software

- Windows ou macOS; o treinamento local exige GPU compatível;
- Rede estável para downloads, login, treino em nuvem e inferência;
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado e logado com uma [conta SenseCraft](https://account.seeed.cc/login) registrada.

### Cena e segurança

- Marque duas posições fixas na mesa: A para o início do objeto, B para o destino;
- Prepare um objeto de tamanho adequado e fácil de agarrar (bloco vermelho ou algo macio);
- Garanta que A, B, os dois braços e o objeto apareçam nas câmeras sem obstrução;
- Limpe o espaço de pessoas, bagunça, cabos e itens frágeis. Deixe o líder longe do seguidor e fora da vista da câmera dele.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="Cena e segurança da tarefa" />
</div>

:::note
Nomes de interface, posições de botões e backends de treino podem mudar com as versões do SenseCraft Robotics. Portas seriais e nomes de dataset aqui são exemplos — use sempre os dispositivos que o seu computador detectar.
:::

</section>

## 22.2 Conectar os braços

<section id="connect" className="section-card">
  <div className="section-title">
    <span>Conexão</span>
    <h2>22.2 Conectar os braços</h2>
  </div>

:::warning
Aviso de segurança: desconecte a alimentação antes de instalar, conectar ou remover os braços. Confirme que estão fixos, cabos corretos e área limpa antes de religar. Nunca conecte ou desconecte a alimentação com o sistema ligado.
:::

**Instale os corpos dos braços.** Coloque líder e seguidor numa mesa estável; fixe cada um com duas braçadeiras; deixe distância segura entre os braços; desligado, mova cada junta à mão devagar para confirmar movimento suave sem colisões.

![Instalar os corpos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

**Instale as placas de controle.** Uma placa LeRobot por braço: alinhe com o encaixe da base, confira a orientação do conector e assente firme; verifique cada cabo de servo no fundo, sem dobras ou pinçamentos.

**Conecte os cabos de dados.** Líder → USB-C → computador; seguidor → USB-C → computador. Para facilitar a identificação de portas, conecte primeiro o lado dos braços e plugue no computador um por um durante a vinculação de portas (22.3).

![Instalar as placas](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

**Instale as alimentações e ligue.** Adaptadores fora da tomada: insira cada cabo DC e aperte o anel de travamento em sentido horário; Pro = líder 5V / seguidor 12V, Standard = ambos 5V — não misture; afaste os cabos do alcance das juntas. Depois ligue, observe os indicadores e confirme que USB-C (dados) e DC (energia) estão ambos conectados.

![Instalar as alimentações](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)

</section>

## 22.3 Configuração de dispositivos no app

<section id="device-setup" className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>22.3 Configuração de dispositivos no app</h2>
  </div>

Logado, abra **Projetos** → **Novo projeto**, preencha nome e descrição e crie. O resumo do projeto dá acesso à configuração de dispositivos, repetição de ações, datasets, treinamento, modelos e operação; se mostrar "A configurar" ou "Não conectado", clique em **Ir para configuração de dispositivos**.

![Criar um projeto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### Selecionar o modelo de dispositivo

No **Emparelhamento de dispositivos** escolha **SO-ARM101 + SO-ARM101** e clique em **Próximo** para vincular as portas.

![Selecionar SO-ARM101 + SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

### Vincular as portas USB

1. **Varredura inicial:** desconecte os dois USB, clique em **Reescanear** e anote as portas mostradas;
2. **Vincule o líder:** conecte o líder, **Reescanear**, vincule a porta recém-aparecida ao líder;
3. **Vincule o seguidor:** conecte o seguidor, **Reescanear**, vincule a porta nova ao seguidor;
4. Ambos mostram **Conectado** → **Próximo**.

![Vincular as portas do líder e do seguidor](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

:::tip
Solução de portas: a cada varredura vincule só a porta **nova** — nunca identifique dispositivos só pelo número da COM. Se uma porta não aparece, reconecte o USB e escaneie de novo; se só uma aparece, confira o outro cabo e a alimentação do braço.
:::

### Verificação da calibração

Leve líder e seguidor à postura média do exemplo na tela e limpe a área. Dois modos:

- **Calibração automática** — o sistema identifica o curso de cada junta dirigindo o braço. Exige batentes físicos confiáveis em todas. Retire cargas, alinhe os dois braços quase na vertical, marque a caixa de confirmação, clique em **Iniciar calibração** e aguarde.
- **Calibração manual** — para juntas sem batente confiável ou para conferir passo a passo: líder ligado, leve as juntas ao meio do curso, clique em **Iniciar calibração** e siga as orientações na tela para cada junta dos dois braços.

> Não teleopere nem colete dados durante a calibração. Se a postura estiver anormal, uma junta travada ou a calibração falhar — pare, confira o braço e a área, e tente de novo.

### Verificação da teleoperação

1. Clique em **Iniciar teleoperação**;
2. Mova um pouco o líder — o seguidor deve seguir de forma síncrona, na mesma direção e suave;
3. Clique em **Encerrar teleoperação** e escolha **Confirmar teleoperação normal** (ou **Anormal, voltar a calibrar**).

![Verificação da teleoperação](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

:::tip
**Compensação de gravidade (opcional):** os braços têm peso, e ajustar o seguidor à mão exige esforço. A compensação neutraliza parte do peso e facilita o ajuste — desligue-a após ajustar e antes de verificar a teleoperação. Ela auxilia o movimento manual; não faz o seguidor seguir o líder.
:::

### Vincular as câmeras

São necessárias duas câmeras e duas vistas. Layouts comuns (o Capítulo 12 discutiu a mesma escolha): **vista da garras** (superior + garras, para operações finas de contato) ou **vista lateral de apoio** (superior + lateral, para pegar/transportar/colocar — a deste curso).

1. Conecte as duas câmeras e clique em **Reescanear**;
2. Atribua os fluxos a **Câmera frontal** e **Câmera lateral**;
3. Confira as duas pré-visualizações: braços, objeto e destino bem visíveis → **Próximo**.

![Vincular as câmeras frontal e lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

</section>

## 22.4 Repetição de ações (aquecimento opcional)

<section id="action-replay" className="section-card">
  <div className="section-title">
    <span>Repetição</span>
    <h2>22.4 Repetição de ações (aquecimento opcional)</h2>
  </div>

**Repetição de ações** grava movimentos por ensino com o líder e os salva numa lista para reproduzir — um jeito prático de verificar a cadeia antes de partir para o dataset:

| Função | Operação | Objetivo |
| :--- | :--- | :--- |
| Gravar uma ação | Clique em **+** → ensine com o líder → **Parar gravação** | Registrar ações de pegar/mover/colocar |
| Reproduzir uma ação | Clique em **Reproduzir** | Checar continuidade, direção e abrir/fechar corretos da garras |

![Lista e repetição de ações](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

</section>

## 22.5 Dataset: configurar, gravar, limpar

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>22.5 Dataset: configurar, gravar, limpar</h2>
  </div>

Recomenda-se a abordagem de lotes pequenos e várias sessões, exatamente como planejou o Capítulo 11: uns 10 episódios por leva; após 2–3 levas, mantenha 20–30 válidos para o primeiro treino; some dados de variantes complexas depois.

### Configurar uma tarefa de coleta

Abra **Dataset** → **Coletar dados** e informe a tarefa:

| Campo | Exemplo | Orientação |
| :--- | :--- | :--- |
| Nome do dataset | `SO-ARM101 pick-and-place A-to-B-01` | Nomes "dispositivo + tarefa + lote" |
| Descrição da tarefa | `Move the object from the left to the right` | Enuncie o objetivo; **ao mesclar, as descrições devem coincidir exatamente** |
| Episódios | `10` | Cada episódio completa uma tarefa inteira |
| Duração por episódio | `20`–`30` segundos | Cobrir a ação completa |
| Descanso | `5` segundos | Resetar braços e cena |

![Configurar a coleta](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

### Gravar episódios

Cada episódio registra o fluxo completo: pegar em A → transportar → soltar em B. Mantenha o procedimento consistente; some pequenas variações de posição/ângulo só quando quiser mais generalização.

1. Ponha o objeto em A, confirme a postura inicial e clique em **Iniciar gravação**;
2. Ensine a tarefa com o líder e devolva o braço à postura inicial;
3. Espere o tempo restante ou clique em ➡ (ou barra de espaço) para encerrar cedo;
4. No descanso, devolva o objeto a A e prepare o próximo episódio.

![Gravar episódios](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

:::note
Importante:
- Fixe as câmeras; braços, garras, objeto e os pontos A e B devem permanecer visíveis nas duas vistas;
- Não deixe ações-chave bloqueadas ou fora do quadro;
- Em falha, objeto caído, vídeo travado ou câmera tampada — clique em **Regravar** ou `Esc`;
- Pode terminar a leva primeiro e depois inspecionar e apagar episódios anômalos;
- Diante de risco de perda de controle ou colisão, pare na hora.
:::

### Inspecionar, apagar e mesclar

| Operação | Método |
| :--- | :--- |
| Inspecionar episódios | Selecione um, toque o vídeo/repetição; confira conclusão e movimento da garras |
| Apagar anômalos | **Excluir episódios em lote** → selecione → confirme → **Gerar cópia com exclusão** (o original não é sobrescrito) |
| Mesclar datasets | **Mesclar** → selecione → novo nome (descrições, combinações de dispositivos e câmeras devem coincidir) |

![Inspecionar o dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)

</section>

## 22.6 Treinamento

<section id="training" className="section-card">
  <div className="section-title">
    <span>Treinamento</span>
    <h2>22.6 Treinamento</h2>
  </div>

O treinamento transforma os dados de ensino num modelo de ações — a versão gráfica do Capítulo 15.

| Parâmetro | Opção / valor | Detalhe |
| :--- | :--- | :--- |
| **Hardware de treino** | Nuvem · GPU automática | Servidor em nuvem; consome créditos |
| | Local · grátis | O computador atual; exige GPU local compatível |
| **Dataset de treino** | Selecione o alvo | O dataset limpo de 22.5 |
| **Política** | ACT | A política padrão atual de controle de ações |
| **Passos de treino** | `10000` | Valor inicial; ajuste conforme os resultados |

Passos e episódios recomendados (alinhado com o Capítulo 11):

| Dificuldade | Descrição | Episódios | Passos |
| :--- | :--- | :---: | :---: |
| Iniciante | A fixo para B fixo | ~20 | 10.000–15.000 |
| Intermediário | Pegar e colocar em posições aleatórias | ~50 | 30.000–40.000 |
| Avançado | Vários passos ou longa duração | ~100 | 80.000–100.000 |

A duração depende da GPU e dos passos — 20.000 passos na nuvem levam de minutos a dezenas de minutos; 100.000 cerca de cinco vezes mais. Confirme e clique em **Iniciar treinamento**; acompanhe em **Tarefas atuais**.

![Configuração do treinamento](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

</section>

## 22.7 Modelo e operação (inferência)

<section id="operation" className="section-card">
  <div className="section-title">
    <span>Operar</span>
    <h2>22.7 Modelo e operação (inferência)</h2>
  </div>

Abra **Modelo** para ver os resultados; confirme que tarefa e combinação de dispositivos batem com o projeto. Depois **Operação** carrega o modelo nos braços:

1. **Selecione um modelo** marcado como compatível com os braços atuais;
2. **Selecione o modo de inferência**: nuvem ou local;
3. **Inicie a inferência** e observe a tarefa rodar.

![Lista de modelos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

**Nuvem vs. local:**

| Comparação | Inferência na nuvem | Inferência local |
| :--- | :--- | :--- |
| **Compute** | GPU de nuvem de alto desempenho | CPU local (GPU local ainda sem suporte) |
| **Desempenho depende de** | Qualidade da rede | Desempenho da CPU |
| **Parâmetros** | Contagem de ações (padrão 120): passos previstos por inferência. Limiar de bloco (padrão 0.9 — maior mais cauteloso, menor mais fluido) | Contagem de execuções; limite de tempo por execução (encerra sozinho ao estourar) |
| **Saída de dados** | Apenas verificação de inferência | Gera automaticamente um dataset das execuções ao terminar |
| **Custo** | Sujeito a créditos da plataforma | Normalmente grátis, limitado pela CPU |

![Interface de operação](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)

:::note
Antes de operar, confirme braços conectados e área segura. Durante a operação, não desconecte nem desmonte os braços, e observe tudo. Se o resultado decepcionar, volte ao **Dataset** — apague anômalos, some dados válidos e retreine. É o ciclo de iteração do Capítulo 16, mais uma vez.
:::

</section>

## 22.8 Conclusão do curso

<section id="conclusion" className="section-card">
  <div className="section-title">
    <span>Conclusão</span>
    <h2>22.8 Conclusão do curso</h2>
  </div>

Você levou o SO-ARM da caixa até uma política treinada e implantada — e por dois caminhos:

- **O caminho do código (Fases 2-3):** montar, calibrar, teleoperar, gravar, treinar ACT, avaliar, iterar;
- **Os caminhos VLA (Fase 4):** ajustar o GR00T na sua própria cadeia de GPU, ou rodar tudo sem código no SenseCraft Robotics.

Para onde ir agora:

- A **dupla braço do Capítulo 17**, se pulou;
- O [Wiki de Robótica](https://wiki.seeedstudio.com/pt-br/robotics_page/) para o ecossistema mais amplo do SO-ARM: GR00T no Jetson Thor, AmazingHand, RL com Isaac Lab, simulação LeIsaac;
- Suas próprias tarefas — o curso inteiro era o andaime para elas.

Se o curso te ajudou, deixe uma Star no [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) e no [Seeed-Projects/lerobot](https://github.com/Seeed-Projects/lerobot) no GitHub, e compartilhe o que construir nos grupos da [introdução do curso](/pt-br/robotics/soarm_physical_ai_course_introduction/).

</section>

</div>
