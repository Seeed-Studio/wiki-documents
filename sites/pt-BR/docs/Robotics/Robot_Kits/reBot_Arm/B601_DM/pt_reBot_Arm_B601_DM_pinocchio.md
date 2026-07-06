---
description: Este tutorial explica como usar Pinocchio e MeshCat com o reBot Arm B601-DM para análise cinemática, planejamento de trajetória, compensação de gravidade e depuração visual.
title: Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM
keywords:
  - Pinocchio
  - MeshCat
  - reBot Arm
  - B601-DM
  - Cinemática
  - Planejamento de trajetória
  - Compensação de gravidade
  - Robô
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-03-24'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Analise, visualize e depure a cinemática do reBot Arm B601-DM com Pinocchio e MeshCat</h2>
    <p>Este guia é para usuários que já concluíram as verificações básicas de alimentação e comunicação do B601-DM. Ele apresenta a configuração do ambiente, testes de motor único, leitura de posição zero, validação de FK / IK, controle de trajetória, compensação de gravidade e visualização com MeshCat.</p>
    <div className="hero-actions">
      <a href="#quick-path">Ver fluxo de trabalho</a>
      <a href="#debug-tools">Ferramentas de depuração</a>
      <a href="#simulation">Abrir simulação</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Ordem recomendada</strong>
    <span>Comece pela simulação, depois valide FK / IK e só então conecte ao braço robótico real.</span>
    <span>O B601-DM usa alimentação de 24 V e motores Damiao DM. Verifique o USB2CAN e a fiação de alimentação antes de testar com o braço real.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Alerta de segurança: Limpe a área de trabalho do robô antes de executar</strong>
    <p>
      Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor,
      objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um <strong>raio de 1 metro</strong>
      da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer fora
      da faixa de movimento do robô.
    </p>
    <ul>
      <li>Não toque em juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de calibração, teleoperação, controle IK, controle de trajetória, compensação de gravidade, execução ROS2 / MoveIt ou preensão visual, certifique-se de que a base do braço esteja firmemente fixada.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de alimentação ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores USB2CAN / PCAN-USB, conectores XT30 ou conectores de alimentação.</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>Lembrete de segurança:</strong> O controle MIT e o controle IK no braço real podem se mover muito rapidamente. Prenda a base, mantenha pelo menos 1 metro de distância do braço e comece com ângulos pequenos, baixas velocidades e movimentos-alvo curtos.
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat quick navigation">
  <a href="#quick-path">Caminho</a>
  <a href="#overview">Visão geral</a>
  <a href="#install">Instalar</a>
  <a href="#debug-tools">Depuração de motor</a>
  <a href="#kinematics">Cinemática</a>
  <a href="#gravity">Gravidade</a>
  <a href="#simulation">Simulação</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Comece aqui</span>
    <h2>Fluxo de trabalho recomendado</h2>
    <p>Pinocchio e MeshCat são ferramentas de baixo nível para cinemática, dinâmica e depuração de controle. Comece com scripts que não movem o robô real e, em seguida, avance gradualmente para o controle de hardware.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><b>1. Instalar o ambiente</b><span>Use uv para sincronizar as dependências de reBotArm_control_py e confirme que Python, Pinocchio, MeshCat e MotorBridge estão disponíveis.</span><em>Comece aqui</em></a>
    <a className="path-card" href="#debug-tools"><b>2. Testar motores e zeros</b><span>Use o console de motor único e scripts de leitura de juntas para verificar USB2CAN, IDs de motor, posições zero e direções.</span><em>Verificação de hardware</em></a>
    <a className="path-card" href="#kinematics"><b>3. Validar FK / IK</b><span>Use scripts de FK e IK para verificar o URDF, limites de junta, quadro do efetuador final e área de trabalho alvo.</span><em>Etapa principal</em></a>
    <a className="path-card" href="#simulation"><b>4. Usar simulação MeshCat</b><span>Visualize a pose do braço, quadro alvo, trajetória de referência e trajetória real em um navegador.</span><em>Altamente recomendado</em></a>
    <a className="path-card" href="#gravity"><b>5. Tentar compensação de gravidade</b><span>Tente a compensação de gravidade somente depois que os parâmetros URDF e direções dos motores tiverem sido verificados.</span><em>Avançado</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Etapas detalhadas</span>
    <h2>Sequência segura de depuração</h2>
    <p>Siga esta sequência para passar da validação apenas em software para o controle do braço real com menor risco.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Etapa 0</span><strong>Concluir o início rápido</strong><p>Verifique alimentação, fiação, posição zero e comunicação antes de usar scripts de controle de baixo nível.</p></div>
    <div className="step-card"><span className="step-mini">Etapa 1</span><strong>Instalar e sincronizar o ambiente</strong><p>Use uv para criar um ambiente Python reprodutível e confirme as importações de Pinocchio / MeshCat.</p></div>
    <div className="step-card"><span className="step-mini">Etapa 2</span><strong>Verificar o comportamento de motor único</strong><p>Verifique a comunicação CAN / USB2CAN, ID do motor, zero, retorno de estado e direção.</p></div>
    <div className="step-card"><span className="step-mini">Etapa 3</span><strong>Validar FK / IK em software</strong><p>Verifique unidades, quadros, área de trabalho e limites de junta antes de enviar comandos para o braço real.</p></div>
    <div className="step-card"><span className="step-mini">Etapa 4</span><strong>Visualizar com MeshCat</strong><p>Use visualização em navegador para inspecionar poses, trajetórias e quadros alvo.</p></div>
    <div className="step-card"><span className="step-mini">Etapa 5</span><strong>Mover o hardware real lentamente</strong><p>Comece com distâncias curtas, ângulos pequenos, durações longas e procedimentos seguros de parada.</p></div>
  </div>
</section>


<section id="overview" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>Visão geral do projeto</h2>
    <p>Pinocchio fornece cinemática de corpo rígido, dinâmica, Jacobiano e cálculo de trajetória eficientes. MeshCat fornece visualização em tempo real baseada em navegador do modelo do robô, poses alvo e trajetórias. Juntos, eles são úteis para depuração de algoritmos de controle de braços robóticos.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM Pinocchio MeshCat" />
  </div>

  <div className="badge-row">
    <span>Pinocchio</span>
    <span>MeshCat</span>
    <span>Cinemática direta / inversa</span>
    <span>Trajetória SE(3)</span>
    <span>Compensação de gravidade</span>
  </div>

  <div className="feature-grid">
    <div><strong>Cinemática direta / inversa</strong><span>Calcule a pose do efetuador final a partir dos ângulos das juntas ou resolva os ângulos das juntas a partir de uma pose alvo para validar área de trabalho e limites de junta.</span></div>
    <div><strong>Visualização MeshCat</strong><span>Exiba o modelo URDF, quadro do efetuador final, pose alvo e caminhos planejados em um navegador para diagnosticar falhas de IK.</span></div>
    <div><strong>Planejamento de trajetória</strong><span>Use trajetórias geodésicas em SE(3), perfis de mínimo tranco e rastreamento CLIK para reduzir movimentos bruscos das juntas.</span></div>
    <div><strong>Compensação de gravidade</strong><span>Calcule torques de gravidade nas juntas a partir do modelo dinâmico. Os resultados reais dependem da massa, centro de massa, relação de transmissão, atrito e precisão da direção do motor no URDF.</span></div>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">Obter reBot Arm B601-DM</a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Requisitos de hardware e ambiente</h2>
    <p>A versão B601-DM usa motores Damiao e comunicação USB2CAN. A tensão de operação padrão é 24 V CC.</p>
  </div>

  | Item | Requisito |
  |------|-------------|
  | Braço robótico | reBot Arm B601-DM |
  | Motores | Damiao DM4340 / DM4310 |
  | Comunicação | Ponte serial USB2CAN ou interface CAN |
  | Alimentação | 24 V CC |
  | SO | Ubuntu 22.04+ |
  | Python | 3.10+ |

  <div className="callout warning">
    <strong>Antes do controle do braço real:</strong> Conclua primeiro as verificações básicas de início rápido, incluindo alimentação, fiação, posição zero e verificações de ID de motor. Se você só quiser aprender FK / IK e MeshCat, pode executar os scripts de simulação sem conectar o robô.
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 1</span>
    <div>
      <h2>Instalar o ambiente</h2>
      <p>Este projeto usa uv para gerenciamento de dependências. uv cria um ambiente virtual e instala dependências com base em pyproject.toml e uv.lock.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>1. Instalar uv</h3>
    <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
  </div>

  <div className="command-card">
    <h3>2. Clonar o repositório e sincronizar dependências</h3>
    <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync`}</code></pre>
  </div>

  <details className="content-details" open>
    <summary>Permissões do dispositivo antes de executar os exemplos</summary>

    Damiao USB2CAN é comumente mapeado para <code>/dev/ttyACM0</code>. Se o caminho do seu dispositivo for diferente, verifique-o com <code>dmesg</code> ou <code>ls /dev/ttyACM*</code>.

    <pre><code>{`sudo chmod 666 /dev/ttyACM0

# If using a SocketCAN interface, you can also check can0:
ip -br link
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>
</section>

<section id="debug-tools" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Etapa 2</span>
    <div>
      <h2>Ferramentas de depuração de motor</h2>
      <p>Verifique a comunicação de motor único, posições de zero e ângulos das juntas antes de executar controle de IK ou de trajetória.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Console de motor único: 0x01damiao_test.py</summary>
    <p>Use este script para testar a comunicação do SDK MotorBridge com um único motor Damiao, incluindo habilitação, troca de modo e definição de zero.</p>
    <pre><code>{`uv run python example/0x01damiao_test.py`}</code></pre>

    | Command | Description |
    |---------|-------------|
    | `enable` / `disable` | Habilitar / desabilitar motor |
    | `set_zero` | Definir a posição atual de zero do motor |
    | `state` | Ler o estado do motor |
    | `mode mit` | Modo MIT |
    | `mode posvel` | Modo posição-velocidade com parâmetros PID opcionais |
    | `mode vel` | Modo de velocidade |
  </details>

  <details className="content-details">
    <summary>Ajuste de zero e monitoramento de juntas: 2_zero_and_read.py</summary>
    <p>Defina todos os zeros das juntas e imprima os ângulos das juntas em tempo real. Execute isto antes dos testes de FK / IK para verificar posições de zero e direções das juntas.</p>
    <pre><code>{`uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Modo de controle MIT: 3_mit_control.py</summary>
    <div className="callout danger"><strong>Aviso:</strong> O modo MIT responde rapidamente e pode gerar alto torque. Para o primeiro teste, use ângulos muito pequenos e mantenha pessoas e equipamentos afastados do braço.</div>
    <pre><code>{`uv run python example/3_mit_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Controle posição-velocidade: 4_pos_vel_control.py</summary>
    <p>O modo POS_VEL geralmente é mais suave do que enviar diretamente ângulos-alvo MIT, sendo um bom ponto de partida para testes básicos de movimento de juntas.</p>
    <pre><code>{`uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>
</section>

<section id="kinematics" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Etapa 3</span>
    <div>
      <h2>Teste de cinemática</h2>
      <p>A cinemática direta calcula a pose do efetuador final a partir dos ângulos das juntas. A cinemática inversa resolve os ângulos das juntas a partir de uma pose alvo. Comece sem movimento real do braço para verificar se o alvo está dentro da área de trabalho.</p>
    </div>
  </div>

  <div className="callout">
    <strong>Observação adicional:</strong> Os resultados de FK / IK dependem de URDF, limites de juntas, definições de quadros de referência e unidades. As posições estão em metros. Alguns scripts usam graus para ângulos de Euler, enquanto scripts de simulação podem usar radianos. Siga cuidadosamente a descrição de entrada de cada script.
  </div>

  <details className="content-details" open>
    <summary>Cinemática direta: 5_fk_test.py</summary>
    <p>Insira seis ângulos de juntas e imprima a posição do efetuador final, a matriz de rotação e os ângulos de Euler XYZ.</p>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Cinemática inversa: 6_ik_test.py</summary>
    <p>Insira uma posição alvo ou posição alvo mais orientação. O script tenta resolver os ângulos de juntas correspondentes.</p>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.28 0 0.3

# Position + orientation, position in m, orientation in deg
> 0.28 0 0.3 0 1 0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Controle de IK em braço real no modo MIT: 7_arm_ik_control.py</summary>
    <div className="callout danger"><strong>Risco em braço real:</strong> Este script move o braço robótico real. Na primeira execução, use um alvo pequeno próximo à pose atual em vez de um alvo distante.</div>
    <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.4

# Position + orientation
> 0.3 0.0 0.4 0.0 0.0 0.5

# Read current joint state
> state

# Read current end-effector state
> end_state`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Controle suave de trajetória IK: 8_arm_traj_control.py</summary>
    <p>Este script interpola uma trajetória suave ao longo da duração alvo. Geralmente é mais seguro para testes em braço real do que saltar diretamente para uma pose alvo.</p>
    <pre><code>{`uv run python example/8_arm_traj_control.py

# Position only, default 2 seconds
> 0.3 0.0 0.4

# Position + orientation + duration
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0`}</code></pre>
  </details>
</section>

<section id="gravity" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Etapa 4</span>
    <div>
      <h2>Teste de compensação de gravidade</h2>
      <p>A compensação de gravidade depende da consistência entre o modelo dinâmico e o robô real. Erros em massa URDF, centro de massa, inércia ou direção das juntas reduzirão a qualidade da compensação.</p>
    </div>
  </div>

  <div className="feature-grid">
    <div><strong>Compensação de gravidade básica</strong><span>Usa <code>tau = g(q)</code> para cancelar o torque de gravidade das juntas e fazer o braço parecer flutuante e movível manualmente.</span></div>
    <div><strong>Modo de travamento com alto amortecimento</strong><span>Trava a posição atual da junta em baixa velocidade do efetuador final, resiste a pequenas perturbações e atualiza o alvo apenas quando empurrado além do limite de velocidade.</span></div>
  </div>

  <details className="content-details" open>
    <summary>9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <p>O terminal imprime o torque de gravidade desejado para cada junta. Pressione <code>Ctrl+C</code> para parar.</p>
  </details>

  <details className="content-details">
    <summary>10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>O terminal exibe <code>LOCKED</code> ou <code>UPDATE</code>, bem como a velocidade linear do efetuador final, velocidade angular e torque de gravidade para cada junta.</p>
  </details>

  <div className="callout warning">
    <strong>Conselho de depuração:</strong> Se o braço cair lentamente, tremer ou compensar na direção errada, primeiro verifique massa / centro de massa no URDF, direção das juntas, deslocamentos de zero, constantes de torque do motor e zonas mortas de atrito. Não aumente simplesmente os ganhos.
  </div>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 5</span>
    <div>
      <h2>Simulação e visualização com MeshCat</h2>
      <p>MeshCat inicia um visualizador baseado na web localmente. Após iniciar um script, abra a URL impressa no terminal para visualizar o modelo do robô.</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" alt="MeshCat trajectory simulation" />
  </div>

  <details className="content-details" open>
    <summary>Simulação de cinemática direta: sim/fk_sim.py</summary>
    <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: deg
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Simulação de cinemática inversa: sim/ik_sim.py</summary>
    <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Simulação de planejamento de trajetória: sim/traj_sim.py</summary>
    <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    <p>Este script exibe o caminho de referência e o caminho real, e reproduz a animação completa da trajetória no MeshCat.</p>
  </details>

  <details className="content-details">
    <summary>Auxiliar de visualização: sim/visualizer.py</summary>
    <pre><code>{`from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Perguntas frequentes</span>
    <h2>Problemas comuns</h2>
  </div>

  <details className="content-details" open>
    <summary>Permissão negada</summary>
    <p>Conceda permissão ao dispositivo serial ou CAN:</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>

  <details className="content-details">
    <summary>IK falha ou retorna resultados anormais</summary>
    <p>Verifique se o alvo está fora da área de trabalho, se as restrições de orientação estão muito rígidas, se a estimativa inicial das juntas está muito distante e se os limites das juntas estão corretos. Ao depurar, tente primeiro o IK apenas de posição.</p>
  </details>

  <details className="content-details">
    <summary>Página do MeshCat não pode ser aberta</summary>
    <p>Verifique a URL impressa pelo terminal. Se estiver executando em uma máquina remota, certifique-se de que o redirecionamento de porta ou o acesso de rede a esse host esteja disponível.</p>
  </details>

  <details className="content-details">
    <summary>A compensação de gravidade não é precisa</summary>
    <p>A compensação de gravidade é sensível à massa do elo, centro de massa e inércia no URDF. Se a estrutura real ou as peças impressas em 3D forem diferentes do URDF, meça os parâmetros reais e atualize o URDF antes de testar novamente.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referências</span>
    <h2>Referências</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/">Documentação do Pinocchio</a>
    <a href="https://github.com/rdeits/meshcat">MeshCat GitHub</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://github.com/motorbridge/motorbridge">MotorBridge SDK</a>
    <a href="https://forum.seeedstudio.com/">Fórum da Seeed Studio</a>
  </div>
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Trilha de aprendizado do reBot B601-DM</h2>
    <p>Esses tutoriais seguem a mesma ordem da trilha de aprendizado da página de robótica: <strong>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</strong>.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Conclua o unboxing, a fiação, as verificações de energia, a configuração do driver, a calibração e os primeiros testes de movimento.</span></span>
      <span className="course-tag">Comece aqui</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Teleoperação e Coleta de Dados com LeRobot</strong><span>Teleopere o braço, conecte câmeras, registre conjuntos de dados, treine políticas e avalie o comportamento do braço real.</span></span>
      <span className="course-tag">Coleta de dados</span>
    </a>
    <a className="course-path-item active" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualização de Cinemática com Pinocchio</strong><span>Entenda modelos de robôs, juntas, sistemas de coordenadas, cinemática direta/inversa, trajetórias e compensação de gravidade.</span></span>
      <span className="course-tag">Artigo atual</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Demo de Pega Visual</strong><span>Combine percepção RGB-D, calibração mão-olho, YOLO / GraspNet e geração de pose de pega para agarrar objetos reais.</span></span>
      <span className="course-tag">Aplicação</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>Integração com ROS2</strong><span>Conecte o braço ao ROS2, RViz, MoveIt 2, planejamento e fluxos de trabalho de robótica de nível superior.</span></span>
      <span className="course-tag">Integração</span>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2), .hero-actions a:nth-child(3) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "Open"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Close"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.command-card p { color: var(--rb-muted); line-height: 1.65; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.34); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.34); background: #fef2f2; color: #7f1d1d; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(239,68,68,0.12); color: #fecaca; }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .two-col { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }

/* Shared safety warning and course navigation */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}
.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}
.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}
.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}
.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}




/* Polished step cards and course path refinements */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
}
.step-card .step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.step-card p,
.step-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.module-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.module-summary-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.module-summary-card b {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--rb-text);
}
.module-summary-card span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.65;
}
.path-grid > div:not([class]) {
  padding: 1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.path-card p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.6; }
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-path-item.active,
.course-step.active {
  border-color: rgba(37, 99, 235, 0.45);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.06));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary);
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}
.course-path-copy strong,
.course-step strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.course-path-copy span,
.course-step small {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}
.course-tag,
.course-step em {
  justify-self: end;
  white-space: nowrap;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.18);
  font-style: normal;
  font-weight: 800;
  font-size: 0.78rem;
}
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .path-grid > div:not([class]) {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

`}</style>
