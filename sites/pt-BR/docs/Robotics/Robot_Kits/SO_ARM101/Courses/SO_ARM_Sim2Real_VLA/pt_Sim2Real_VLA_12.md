---
description: "Capítulo 12 do curso Sim-to-Real VLA do SO-ARM101 (opcional) — coletar dados do Isaac Sim: teleopere o gêmeo digital do SO-ARM101 branco, grave episódios LeRobot v3, reproduza e verifique."
title: Capítulo 12 - Coletar dados do Isaac Sim (opcional)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac Sim
  - Gêmeo digital
  - Coleta de dados
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_12
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_12/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 12 · Opcional · Dados de sim</span>
    <h2>12. Coletar dados do Isaac Sim</h2>
    <p>
      Teleopere o gêmeo digital do SO-ARM101 branco com o mesmo braço líder,
      grave episódios exatamente no mesmo schema de dataset e valide o loop
      completo sem ocupar o robô real.
    </p>
    <div className="hero-actions">
      <a href="#process">Fluxo de dados</a>
      <a href="#cameras">Visadas de câmera</a>
      <a href="#requirements">Requisitos</a>
      <a href="#launch">Iniciar</a>
      <a href="#capture">Gravação</a>
      <a href="#replay">Reprodução</a>
    </div>
  </div>
</section>

:::note Este capítulo é opcional
Recomenda-se rodar primeiro o loop real completo (coletar → treinar →
avaliar, capítulos 9–11). Dados de simulação não ocupam o robô real e
escalamos diversidade de cena e iluminação a baixo custo, funcionando bem
como complemento depois que o pipeline real está validado.
:::

## 12.1 Objetivos e fluxo de dados

<section id="process" className="section-card">
  <div className="section-title">
    <span>Encadeamento de dados</span>
    <h2>12.1 Objetivos e fluxo de dados</h2>
  </div>

- Conhecer a ferramenta de simulação NVIDIA Isaac Sim;
- Conhecer o layout de câmeras do gêmeo: a câmera de punho `front` e a
  superior `external` — os mesmos dois fluxos do dataset real;
- Gerar um dataset VLA completo no gêmeo.

O encadeamento de dados do projeto SO-ARM101 é o seguinte:

```text
Líder SO-101 (ou IK por teclado)
       | USB serial
       ▼
Ponte Python LeRobot -- UDP 127.0.0.1:5015 --> Isaac Sim SO-ARM101 branco
                                                        |
                                   +--------------------+--------------------+
                                   |                                         |
                                   ▼                                         ▼
                              action/state                     câmeras front + external
                                   |                                         |
                                   +--------------------+--------------------+
                                                        |
                                                        ▼
                                                 LeRobot Dataset v3
```

O líder só fornece comandos manuais; o braço simulado não executa
trajetórias de pegada sozinho. O sistema registra simultaneamente:

- `action`: os seis comandos de juntas do líder;
- `observation.state`: os seis valores simulados no espaço do líder;
- `observation.images.front`: a câmera que se move com o punho;
- `observation.images.external`: a visão superior acima do espaço;
- o texto da tarefa (`Put the three vials into the vial rack`), os
  parâmetros de randomização e o estado de sucesso.

A frequência padrão é 30 FPS e as duas câmeras gravam a 640 × 480 —
idêntico ao dataset real do capítulo 9.

</section>

## 12.2 Visadas de câmera

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>front + external</span>
    <h2>12.2 Visadas de câmera</h2>
  </div>

Após apertar `R` para reiniciar a cena, as duas visadas parecem as do robô
real: `front` é o fluxo de punho que se move com o braço e `external` a
visão superior fixa — ambas são gravadas no dataset.

:::note Ver hardware do punho no quadro é normal
A garra e o suporte visíveis na parte de baixo da visão `front` são
proposicionais — a câmera de punho fica à frente da lente e olha ao longo
do braço, igual ao suporte real do capítulo 8. Use
`./run_so101.sh --single-viewport` para manter só a viewport principal e
ocultar as janelas flutuantes; a gravação não é afetada.
:::

</section>

## 12.3 Requisitos de ambiente

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>GPU e instalação</span>
    <h2>12.3 Requisitos de ambiente</h2>
  </div>

- Ubuntu 22.04;
- GPU NVIDIA RTX — a NVIDIA recomenda 12 GB+ de VRAM para trabalhar com
  Isaac Sim;
- Isaac Sim 6.1 standalone instalado e iniciável.

Instale o Isaac Sim uma vez:

```bash
# Baixe o zip standalone do Isaac Sim 6.1 para Linux na NVIDIA,
# extraia e inicie uma vez:
mkdir -p ~/isaacsim && cd ~/isaacsim
unzip ~/Downloads/isaac-sim-standalone-6.1.0-linux-x86_64.zip
./python.sh -c "print('isaac ok')"
```

- O ambiente LeRobot do capítulo 7 (`~/rebot_lerobot/.venv`), com os extras
  de dataset para converter episódios:
  `uv pip install -e "./lerobot[dataset,viz]"`. Sem eles, a conversão
  falha e o terminal imprime `[dataset-error]`;
- `git-lfs` instalado — os assets USD do projeto usam Git LFS.

:::caution GPUs de notebook de 8 GB
Em GPUs de 8 GB (a maioria dos notebooks) a carga de render pode privar o
compositor do desktop e congelar a máquina, mesmo com as mitigações
embarcadas (render Real-Time, 640×360, teto de 30 Hz). Use as flags de
mitigação ou passe para a coleta headless.
:::

</section>

## 12.4 Baixar o código-fonte

<section id="source" className="section-card">
  <div className="section-title">
    <span>Clonar o projeto</span>
    <h2>12.4 Baixar o código-fonte</h2>
  </div>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/yuyoujiang/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

:::caution Assets USD via Git LFS
Sem `git lfs pull` o clone contém só arquivos-ponteiro pequenos e o Isaac
Sim não abre a cena.
:::

</section>

## 12.5 Iniciar a teleoperação no Isaac Sim

<section id="launch" className="section-card">
  <div className="section-title">
    <span>Primeiro build</span>
    <h2>12.5 Iniciar a teleoperação no Isaac Sim</h2>
  </div>

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --leader-port /dev/ttyACM0
```

Se houver só um dispositivo serial, o programa detecta automaticamente:

```bash
./run_so101.sh
```

Se o Isaac Sim estiver em outro diretório:

```bash
ISAACSIM_ROOT=/path/to/isaacsim ./run_so101.sh --leader-port /dev/ttyACM0
```

O primeiro lançamento constrói `scenes/so101_vials_sorting.usda` e compila
shaders, o que leva alguns minutos; é normal.

Sem o braço líder? O modo IK de teclado dirige o efetuador final
diretamente:

1. Clique uma vez na viewport 3D (foco de teclado);
2. Aperte `Y` — o terminal imprime
   `[teleop] Control source: KEYBOARD (IK: WASD ...)`;
3. `W`/`S`/`A`/`D` movem no plano da mesa, setas sobem e descem, `Z`/`C`
   inclinam a ferramenta, `G` abre e fecha a garra.

</section>

## 12.6 Gravar um episódio

<section id="capture" className="section-card">
  <div className="section-title">
    <span>R · S · C</span>
    <h2>12.6 Gravar um episódio</h2>
  </div>

Garanta que a viewport do Isaac Sim tem foco de teclado e então:

1. Aperte `R` para reiniciar a cena: os três frascos são reposicionados e
   a randomização de objetos e iluminação é aplicada;
2. Confira as duas visadas e as posições iniciais dos frascos;
3. Aperte `S` (modo líder) ou `T` (modo teclado) para começar a gravação:

```text
[record] Episode started at 30 FPS -> .../datasets/so101_vials_front_side
```

4. Opere o líder e coloque os três frascos no rack; o assistente de pegada
   anexa um frasco quando a garra fecha perto (o terminal imprime
   `[GRASP]`) e solta quando você abre sobre o rack (`[RELEASE]`);
5. Aperte `S`/`T` de novo para encerrar e salvar;
6. Aguarde a codificação em segundo plano:

```text
[dataset] Episode saved; total completed: 1
```

O sistema converte JPEGs temporários, ações e estados para LeRobot Dataset
v3 em segundo plano; você pode iniciar a próxima operação durante a
codificação.

Atalhos de teclado:

| Tecla | Função |
|---|---|
| `R` | Reinicia e re-randomiza os três frascos |
| `S` / `T` | Inicia a gravação; aperte de novo para encerrar e salvar |
| `C` | Cancela o episódio atual sem gravá-lo no dataset |
| `Y` | Alterna modo líder / modo IK de teclado |
| `B` | Alterna passo lento / rápido do teclado |

Se um frasco cair, uma pegada falhar ou o movimento ficar ruim, aperte
`C` para descartar, depois `R` e regrave.

</section>

## 12.7 Inspecionar e visualizar o dataset

<section id="viz" className="section-card">
  <div className="section-title">
    <span>Visualizador de datasets</span>
    <h2>12.7 Inspecionar e visualizar o dataset</h2>
  </div>

```bash
cd ~/rebot_lerobot
source .venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --episode-index 0 \
  --display-compressed-images true
```

Verifique episódios em sequência: ações, estados e os dois fluxos de vídeo
devem estar sincronizados, sem quadros pretos, congelados ou oclusão
severa.

</section>

## 12.8 Reproduzir ações no Isaac Sim

<section id="replay" className="section-card">
  <div className="section-title">
    <span>Malha de simulação</span>
    <h2>12.8 Reproduzir ações no Isaac Sim</h2>
  </div>

Primeiro inicie um receptor que não conecta o líder, não grava e está sem
randomização:

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --no-start-bridge --no-recording --no-dr &
```

Depois reproduza o episódio 0 num segundo terminal:

```bash
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts ~/rebot_lerobot/.venv/bin/python \
  scripts/replay_episode_so101.py --episode 0
```

Reprodução em loop: adicione `--loop`. O script envia a coluna `action` do
dataset para conferir a trajetória do braço; não é um player de vídeo — o
conteúdo das câmeras se inspeciona com o visualizador acima. O terminal
imprime `[teleop:LIVE]` enquanto as ações fluem e `[SUCCESS]` quando os
três frascos ficam dentro do rack por 0,35 s.

</section>

## 12.9 Verificar sem o líder (opcional)

<section id="no-leader" className="section-card">
  <div className="section-title">
    <span>Checagem headless</span>
    <h2>12.9 Verificar sem o líder (opcional)</h2>
  </div>

Se o braço líder ainda não chegou, o gravador por script valida física,
câmeras e escrita do dataset sem interface:

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --auto-record 2
```

Ele grava dois episódios curtos em `datasets/so101_vials_front_side` e
sai. O `[dataset] Episode saved` final significa que toda a cadeia —
construção de cena, física, câmeras, conversão do dataset — funciona sem
hardware.

</section>

## 12.10 Configuração e materiais de referência

<section id="config" className="section-card">
  <div className="section-title">
    <span>Arquivos de configuração</span>
    <h2>12.10 Configuração e materiais de referência</h2>
  </div>

Arquivos principais do projeto SO-ARM101:

- `config/teleop_config_so101.json`: porta serial, UDP, mapeamento de
  juntas e assistência de pegada;
- `config/domain_randomization_so101.json`: parâmetros de objetos,
  iluminação, câmeras e dataset;
- `config/grasp_config_so101.json`: objetos da cena, parâmetros físicos e
  condições de sucesso.

Continue com o [capítulo 13 — Aumento de datasets (opcional)](pt_Sim2Real_VLA_13.md)
ou volte à rota real no [capítulo 14 — Preparar seu Jetson](pt_Sim2Real_VLA_14.md).

</section>

</div>