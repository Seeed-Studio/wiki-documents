---
description: "Capítulo 7 do curso para iniciantes em SO-ARM Physical AI — use a ferramenta de depuração Seeed_RoboController para detectar servos, reprogramar IDs, gravar valores neutros, controlar servos individuais e ler o estado deles."
title: Capítulo 7 - Depuração de servos com a ferramenta de ajuste
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - servo
  - depuração
  - ajuste de servos
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_7
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 2 · Capítulo 7 · Prática</span>
    <h2>7. Depuração de servos com a ferramenta de ajuste</h2>
    <p>
      Capítulo 7 do curso para iniciantes em SO-ARM Physical AI — use a ferramenta de depuração Seeed_RoboController para detectar servos, reprogramar IDs, gravar valores neutros, controlar servos individuais e ler o estado deles.
    </p>
    <div className="hero-actions">
      <a href="#install-tool">Instalação</a>
      <a href="#check-servos">Checar servos</a>
      <a href="#recalibrate-ids">Corrigir IDs</a>
      <a href="#neutral">Valor neutro</a>
    </div>
  </div>
</section>

## 7.1 Para que serve a ferramenta

<section id="intro" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>7.1 Para que serve a ferramenta</h2>
  </div>

A ferramenta de depuração de servos ([Seeed_RoboController](https://github.com/Seeed-Projects/Seeed_RoboController)) é uma ferramenta gráfica para braços robóticos LeRobot / SO-ARM. Com ela você pode:

- Detectar rapidamente o estado dos servos;
- Reprogramar IDs duplicados ou errados;
- Gravar valores neutros (posição média);
- Controlar servos individuais e ler tensão, temperatura, velocidade, carga e corrente;
- Gerenciar registros avançados, baud rate e restauração de fábrica.

Roda em **Windows, Ubuntu e Mac**, e é sua primeira parada quando um braço se comporta de forma estranha — antes de recalibrar no LeRobot, antes de desmontar e antes de assumir servo queimado.

</section>

## 7.2 Instalação

<section id="install-tool" className="section-card">
  <div className="section-title">
    <span>Instalação</span>
    <h2>7.2 Instalação</h2>
  </div>

**1. Clone o repositório:**

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

**2. Instale as dependências.** Recomendado dentro do ambiente conda do LeRobot do Capítulo 5. Para uma instalação isolada, crie um ambiente virtual novo para não poluir o Python do sistema:

```bash
pip install -r requirements.txt
```

**3. Verifique o ambiente.** Se retornar `[OK] Environment check passed`, está pronto:

```bash
python setup.py
```

**4. Inicie a ferramenta:**

```bash
python -m src.gui.factory_calibration_tool
```

Isso abre a seleção interativa de porta. (Opcional) Especifique as portas manualmente se estiverem ocupadas:

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</section>

## 7.3 Checar se os servos estão normais

<section id="check-servos" className="section-card">
  <div className="section-title">
    <span>Detecção</span>
    <h2>7.3 Checar se os servos estão normais</h2>
  </div>

Primeiro, selecione a porta correspondente no seletor. Se os servos 1-6 forem todos detectados, os servos estão reconhecidos e as funções básicas funcionam.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="Os seis servos detectados" />
</div>

Se alguns aparecerem como não detectados:

1. Confira o cabeamento; feche a página e abra de novo.
2. Se persistir, os IDs podem estar duplicados — possivelmente porque o comando de calibração do braço foi executado por engano como o de calibração de servos. Nesse caso, reprograme esses IDs (próxima seção).

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="Servo não detectado" />
</div>

</section>

## 7.4 Reprogramar IDs de servo

<section id="recalibrate-ids" className="section-card">
  <div className="section-title">
    <span>Corrigir IDs</span>
    <h2>7.4 Reprogramar IDs de servo</h2>
  </div>

Do Capítulo 4: todos compartilham o barramento, então gravar um ID afeta **todos** os servos com aquele ID. Por isso os demais devem ser desconectados e reprogramados um a um.

**Passo 1 — remova os chicotes** entre servos adjacentes, da garras rumo à base:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="Desconectar servo 6 de 5" />
</div>

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="Desconectar servo 1 da placa" />
</div>

**Passo 2 — conecte um servo por vez.** Garanta que só um servo esteja ligado à placa. Por exemplo, conecte o servo #6 conforme a figura — os outros seguem o mesmo padrão, então dá para corrigir IDs sem desmontar o braço.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="Um único servo conectado à placa" />
</div>

**Passo 3 — regrave o ID.** No exemplo, só o servo #4 é reconhecido, mas o conectado é o #6 — o ID está errado e precisa voltar a 6.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="ID errado detectado" />
</div>

Clique no servo #4 e mude o ID para 6. Repita com os demais.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="Regravar o ID do servo" />
</div>

Concluída a correção, reconecte os cabos um a um.

</section>

## 7.5 Gravar o valor neutro no servo

<section id="neutral" className="section-card">
  <div className="section-title">
    <span>Neutro</span>
    <h2>7.5 Gravar o valor neutro no servo</h2>
  </div>

A posição neutra (média) é a postura "reta" da qual toda calibração posterior é medida — internamente corresponde ao valor 2048.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="Postura neutra de referência" />
</div>

1. Clique em **Serial Port Neutral Test** para conferir se o neutro do braço bate com a referência. Se for parecido, o valor está normal.
2. Se não, leve o braço à posição neutra e clique em **Serial Port Neutral Calibration** — a posição atual é gravada como neutro.
3. Clique em **Serial Port Disable Motors** e o braço fica frouxo — segure-o com a mão.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="Botões de teste e calibração neutra" />
</div>

:::tip
Esta também é a solução para o erro do LeRobot `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`: a mensagem indica offset zero anormal num servo. Faça aqui uma calibração de posição média (ou com o script `servo_middle_calibration.py` do mesmo repositório) e refaça a calibração completa do Capítulo 10.
:::

</section>

## 7.6 Controle e status de servos individuais

<section id="single-servo" className="section-card">
  <div className="section-title">
    <span>Controle</span>
    <h2>7.6 Controle e status de servos individuais</h2>
  </div>

Por padrão, todos os servos da página estão na posição neutra.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="Todos os servos no neutro" />
</div>

**1. Habilite o torque e mova um servo.** Habilite todos de uma vez ou um individual, e arraste o controle deslizante. Vá com **calma**: as peças impressas bloqueiam fisicamente certas posições, então não arraste até 0 nem ao máximo. Desabilitando o torque, o braço fica frouxo.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" alt="Torque habilitado, servo movido" />
</div>

**2. Manutenção por servo.** Dá para calibrar o neutro de um único servo e limpar o neutro, máximo e mínimo internos dele.

**3. Painel de status:**

| Campo | Significado |
| :--- | :--- |
| Pos | Posição |
| V | Tensão |
| T | Temperatura |
| Spd | Velocidade |
| Carga | Torque |
| Cur | Corrente |
| Mov | Estado de movimento |
| Modelo | Modelo, autoridade |
| Status | Normal / Sobrecorrente / Sobrecarga |

Temperatura subindo com carga após longas teleoperações é normal no seguidor; `Sobrecorrente` ou `Sobrecarga` persistente em repouso normalmente indica junta travada ou neutro errado.

</section>

## 7.7 Ferramentas avançadas

<section id="advanced" className="section-card">
  <div className="section-title">
    <span>Avançado</span>
    <h2>7.7 Ferramentas avançadas</h2>
  </div>

Para depurar mais a fundo dá para ler e gravar registros brutos, mudar o baud rate e restaurar o padrão de fábrica.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="Painel de ferramentas avançadas" />
</div>

:::warning
Gravar registros e restaurar de fábrica às cegas pode inutilizar a configuração de um servo. Prefira as funções guiadas (seções 7.3-7.6) e toque em registros brutos só quando um guia específico mandar.
:::

</section>

## 7.8 Resumo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumo</span>
    <h2>7.8 Resumo</h2>
  </div>

- A ferramenta de depuração é o console de manutenção do barramento de servos: detectar, corrigir IDs, ajustar neutros, mover servos, ler status.
- IDs de servo são sempre regravados um servo conectado por vez.
- Um neutro correto (2048) é a base de toda a calibração seguinte.

Com os braços montados e cada servo verificado, a Fase 2 está completa. A Fase 3 começa explicando por que braços robóticos precisam de aprendizado — e depois coloca seu SO-ARM para coletar dados e treinar políticas.

</section>

</div>
