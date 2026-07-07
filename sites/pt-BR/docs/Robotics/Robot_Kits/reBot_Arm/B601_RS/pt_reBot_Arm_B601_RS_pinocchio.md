---
description: Este tutorial apresenta como usar Pinocchio e MeshCat para análise de cinemática e visualização no braço robótico reBot Arm B601-RS.
title: Introdução ao Pinocchio e MeshCat para reBot Arm B601-RS
keywords:
  - Pinocchio
  - MeshCat
  - Braço Robótico
  - Robô
  - LeRobot
  - Cinemática
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-07-05
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/
---

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-RS

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Depure passo a passo a cinemática, trajetórias, compensação de gravidade e visualização em MeshCat do B601-RS</h2>
    <p>Este guia transforma o fluxo de trabalho de baixo nível do reBotArm_control_py em uma sequência de aprendizado mais segura: instalar o ambiente, verificar a comunicação CAN, testar um único motor RobStride, validar FK / IK, simular trajetórias no MeshCat e só então mover o braço real.</p>
    <div className="hero-actions">
      <a href="#workflow">Ver fluxo de trabalho</a>
      <a href="#install">Instalar</a>
      <a href="#hardware-control">Controle real</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
    <strong>B601-RS · Pinocchio / MeshCat</strong>
    <span>Simulação primeiro. Pequenos movimentos em segundo. Compensação de gravidade por último.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Alerta de segurança: Limpe a área de trabalho do robô antes de executar</strong>
    <p>Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor, objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer afastado da faixa de movimento do robô.</p>
    <ul>
      <li>Não toque em juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de executar controle MIT, controle IK, controle de trajetória, compensação de gravidade ou qualquer script para o braço real, certifique-se de que a base do braço esteja firmemente fixada.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores PCAN-USB, conectores XT30 ou conectores de energia.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat navigation">
  <a href="#workflow">Fluxo de trabalho</a>
  <a href="#overview">Visão geral</a>
  <a href="#install">Instalar</a>
  <a href="#debug">Depuração de motor</a>
  <a href="#kinematics">FK / IK</a>
  <a href="#simulation">MeshCat</a>
  <a href="#hardware-control">Controle real</a>
  <a href="#gravity">Gravidade</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card step-section">
  <div className="section-title">
    <span>Comece aqui</span>
    <h2>Fluxo de trabalho seguro recomendado</h2>
    <p>Pinocchio e MeshCat são poderosas ferramentas de depuração de baixo nível. Siga a ordem abaixo para passar de verificações apenas em software para controle de hardware real com menor risco.</p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="#install">
      <span className="step-mini">Passo 0</span>
      <strong>Concluir o início rápido do B601-RS</strong>
      <p>Conclua as verificações de energia, cabeamento, PCAN-USB / SocketCAN, posição zero e MotorBridge antes de usar scripts de baixo nível.</p>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Passo 1</span>
      <strong>Instalar e sincronizar o ambiente</strong>
      <p>Clone reBotArm_control_py, execute uv sync e altere a configuração de hardware para a versão RS.</p>
    </a>
    <a className="step-card" href="#debug">
      <span className="step-mini">Passo 2</span>
      <strong>Verificar o estado do CAN e do motor</strong>
      <p>Ative can0, execute o console de motor único RS06, verifique o feedback de estado e confirme as posições zero.</p>
    </a>
    <a className="step-card" href="#kinematics">
      <span className="step-mini">Passo 3</span>
      <strong>Validar FK / IK em software</strong>
      <p>Verifique unidades, limites de junta, área de trabalho, definições de frames e convergência de IK antes de mover o hardware.</p>
    </a>
    <a className="step-card" href="#simulation">
      <span className="step-mini">Passo 4</span>
      <strong>Visualizar com MeshCat</strong>
      <p>Inspecione poses do robô, frames alvo e trajetórias planejadas no navegador antes da execução no braço real.</p>
    </a>
    <a className="step-card" href="#hardware-control">
      <span className="step-mini">Passo 5</span>
      <strong>Mover o braço real lentamente</strong>
      <p>Use pequenas mudanças de alvo, durações longas e um plano claro de parada de emergência para scripts de IK e trajetória.</p>
    </a>
    <a className="step-card" href="#gravity">
      <span className="step-mini">Passo 6</span>
      <strong>Ajustar a compensação de gravidade por último</strong>
      <p>Somente teste a compensação de gravidade depois que offsets de zero, direções de juntas, parâmetros URDF e comportamento dos motores forem verificados.</p>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>O que este tutorial abrange</h2>
    <p>Este tutorial foca em cinemática, geração de trajetórias, visualização e compensação baseada em dinâmica para a versão B601-RS RobStride.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Análise de modelo com Pinocchio</b><span>Use o modelo do robô para calcular FK, IK, jacobianas, torque de gravidade e alvos de rastreamento de trajetória.</span></div>
    <div className="module-summary-card"><b>Visualização em MeshCat</b><span>Abra um visualizador 3D baseado em navegador para inspecionar o estado do robô, poses alvo, caminhos de referência e trajetórias reais.</span></div>
    <div className="module-summary-card"><b>Caminho de controle via MotorBridge</b><span>Use MotorBridge e SocketCAN para se comunicar com motores RobStride pela interface CAN.</span></div>
    <div className="module-summary-card"><b>Experimentos com o braço real</b><span>Execute scripts de IK, trajetória suave e compensação de gravidade após simulação e validação de pequenos movimentos.</span></div>
  </div>

  <div className="feature-grid">
    <div><strong>Cinemática direta / inversa</strong><span>Calcule a pose do efetuador final a partir dos ângulos de junta ou resolva os ângulos de junta a partir de uma pose alvo.</span></div>
    <div><strong>Planejamento e rastreamento de trajetória</strong><span>Use planejamento de trajetória geodésica em SE(3) e rastreamento CLIK para reduzir movimentos bruscos.</span></div>
    <div><strong>Compensação de gravidade</strong><span>Calcule torques de gravidade nas juntas a partir do modelo dinâmico e teste efeitos de flutuação ou travamento de pose.</span></div>
    <div><strong>Controle de motor em múltiplos modos</strong><span>Use modos de controle MIT, POS_VEL e de velocidade para diferentes estágios de depuração.</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Especificações de hardware do B601-RS</h2>
    <p>A versão RS usa motores RobStride, comunicação CAN a 1 Mbps e fonte de alimentação de 48V.</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>Braço robótico</b><span>Kit montado reBot Arm B601-RS com garra</span></div>
    <div className="spec-card"><b>Graus de liberdade</b><span>6 + 1 com garra</span></div>
    <div className="spec-card"><b>Alcance</b><span>754,7 mm com garra / 587,5 mm sem garra</span></div>
    <div className="spec-card"><b>Carga útil</b><span>Nominal 2,5 kg / máxima 5 kg</span></div>
    <div className="spec-card"><b>Motores</b><span>RobStride 06 × 3 e RobStride 00 × 4</span></div>
    <div className="spec-card"><b>Comunicação</b><span>Barramento CAN a 1 Mbps, geralmente mapeado como can0</span></div>
    <div className="spec-card"><b>Alimentação</b><span>CC 48V, fonte recomendada de 15A</span></div>
    <div className="spec-card"><b>Software</b><span>Ubuntu 22.04+, Python 3.10+, Pinocchio, MeshCat</span></div>
  </div>

  <details className="content-details">
    <summary>Faixa de movimento das juntas e informações dos motores</summary>

    | Item | Especificação |
    |------|---------------|
    | Faixa de movimento das juntas | J1: ±150°, J2: 220° a 0°, J3: 220° a 0°, J4: ±90°, J5: ±90°, J6: ±180°, Garra: 345° a 0° |
    | Repetibilidade | 0,1 mm |
    | Peso próprio | 6,7 kg |
    | Torque nominal / de pico RobStride 00 | 5 N·m / 14 N·m |
    | Torque nominal / de pico RobStride 06 | 11 N·m / 36 N·m |
    | Tensão nominal | 48V |
    | Modos de controle | Modo MIT, modo de velocidade, modo de posição, modo de torque |
  </details>

  <details className="content-details">
    <summary>Lista de materiais</summary>

    | Componente | Quantidade | Incluído |
    |-----------|------------|----------|
    | Braço robótico reBot Arm B601-RS | 1 | ✅ |
    | Adaptador CAN | 1 | ✅ |
    | Fonte de alimentação CC 48V | 1 | ✅ |
    | Cabo USB-C | 1 | ✅ |
    | Garra | 1 | ✅ |
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Passo 1</span>
    <div>
      <h2>Instalar o ambiente e selecionar a configuração de hardware RS</h2>
      <p>Esta etapa prepara o reBotArm_control_py e garante que a configuração use o arquivo de hardware RobStride RS em vez do arquivo Damiao DM.</p>
    </div>
  </div>

  <div className="command-grid">
    <div className="command-card">
      <h3>1. Instalar uv</h3>
      <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
    </div>
    <div className="command-card">
      <h3>2. Clonar o repositório</h3>
      <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py`}</code></pre>
    </div>
    <div className="command-card">
      <h3>3. Sincronizar dependências</h3>
      <pre><code>{`uv sync`}</code></pre>
    </div>
  </div>

  <div className="callout warning">
    <strong>Configuração importante para B601-RS:</strong> antes de executar os exemplos, abra <code>{`config/rebotarm.yaml`}</code> e altere a configuração de hardware para o arquivo RS.
  </div>

  <pre><code>{`# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"`}</code></pre>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Por que isso é importante</b><span>As versões DM e RS usam protocolos de motor diferentes. Se a configuração ainda apontar para o arquivo DM, os motores RS podem não ser reconhecidos ou controlados corretamente.</span></div>
    <div className="module-summary-card"><b>Quando verificar novamente</b><span>Verifique este arquivo novamente após puxar novo código, trocar de branch ou copiar o projeto para outra máquina.</span></div>
  </div>
</section>

<section id="debug" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes da depuração dos motores</strong>
      <p>Limpe a área de trabalho, mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> e certifique-se de que o braço esteja mecanicamente fixado antes de habilitar os motores.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Etapa 2</span>
    <div>
      <h2>Ativar o CAN e verificar o comportamento dos motores</h2>
      <p>Não execute movimentos de braço completo antes de confirmar a interface CAN, a resposta dos motores, as posições de zero e os sentidos das juntas.</p>
    </div>
  </div>

  <div className="command-card wide">
    <h3>Configurar SocketCAN para PCAN-USB</h3>
    <pre><code>{`sudo modprobe peak_usb
ip -br link

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>2.1 Console de motor único: 0x01rs06_test.py</summary>
      <p>Use este console para confirmar que um motor RobStride RS06 pode ser habilitado, desabilitado, receber ping e comandos com segurança.</p>
      <pre><code>{`uv run python example/0x01rs06_test.py`}</code></pre>
      <div className="content-table">
        <table>
          <thead><tr><th>Comando</th><th>Descrição</th></tr></thead>
          <tbody>
            <tr><td><code>enable</code> / <code>disable</code></td><td>Habilita ou desabilita o motor.</td></tr>
            <tr><td><code>set_zero</code></td><td>Define a posição atual como zero de software.</td></tr>
            <tr><td><code>state</code></td><td>Lê o estado atual do motor.</td></tr>
            <tr><td><code>ping</code></td><td>Verifica se o motor responde.</td></tr>
            <tr><td><code>clear_error</code></td><td>Limpa os flags de erro do motor.</td></tr>
            <tr><td><code>mode mit</code> / <code>mode posvel</code> / <code>mode vel</code></td><td>Altera o modo de controle.</td></tr>
            <tr><td><code>mit pos vel kp kd</code></td><td>Envia um comando em modo MIT.</td></tr>
            <tr><td><code>posvel pos vlim</code></td><td>Envia um comando de posição-velocidade.</td></tr>
            <tr><td><code>vel velocity</code></td><td>Envia um comando de velocidade.</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details className="content-details" open>
      <summary>2.2 Calibração de zero e monitoramento de ângulo: 2_zero_and_read.py</summary>
      <p>Use este script para definir todos os zeros das juntas e exibir os ângulos das juntas em tempo real. Verifique a pose de zero antes de usar FK / IK.</p>
      <pre><code>{`uv run python example/2_zero_and_read.py`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.3 Controle MIT de todas as juntas: 3_mit_control.py</summary>
      <div className="callout danger"><strong>Aviso de alto torque:</strong> o modo MIT pode responder rapidamente. Comece com ângulos muito pequenos e mantenha pessoas e objetos afastados do braço.</div>
      <pre><code>{`uv run python example/3_mit_control.py
> 0 0 0 0 0 0
> 0 0 0 0 0 0 2.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.4 Controle POS_VEL de todas as juntas: 4_pos_vel_control.py</summary>
      <p>O modo POS_VEL geralmente é um ponto de partida melhor para testes de movimento suave das juntas.</p>
      <pre><code>{`uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0`}</code></pre>
    </details>
  </div>
</section>

<section id="kinematics" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 3</span>
    <div>
      <h2>Validar cinemática direta e inversa</h2>
      <p>Use scripts de FK / IK para verificar unidades, referenciais de coordenadas, limites das juntas e espaço de trabalho alcançável antes de acionar o robô real.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Cinemática direta</b><span>Insira ângulos das juntas e calcule a posição do efetuador final, a matriz de rotação e os ângulos de Euler.</span></div>
    <div className="module-summary-card"><b>Cinemática inversa</b><span>Insira uma pose alvo e resolva os ângulos das juntas. Comece com alvos apenas de posição para reduzir as restrições.</span></div>
    <div className="module-summary-card"><b>Verificação de unidade</b><span>As posições estão em metros. Alguns exemplos usam graus, enquanto scripts de simulação podem usar radianos.</span></div>
  </div>

  <details className="content-details" open>
    <summary>3.1 Cinemática direta: 5_fk_test.py</summary>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>3.2 Cinemática inversa: 6_ik_test.py</summary>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.25 0.0 0.15

# Position + orientation, position in m, orientation in degrees
> 0.25 0.0 0.15 0 0 0`}</code></pre>
  </details>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 4</span>
    <div>
      <h2>Executar simulação MeshCat antes do movimento do braço real</h2>
      <p>O MeshCat permite inspecionar visualmente poses e trajetórias do robô. Use-o antes de enviar comandos de IK ou de trajetória para o braço físico.</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" alt="B601-RS MeshCat trajectory simulation" />
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>4.1 Simulação de cinemática direta: sim/fk_sim.py</summary>
      <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: degrees
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.2 Simulação de cinemática inversa: sim/ik_sim.py</summary>
      <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.3 Simulação de planejamento de trajetória: sim/traj_sim.py</summary>
      <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
      <p>Este script exibe estatísticas da trajetória, reproduz a trajetória completa no MeshCat e mostra tanto os caminhos de referência quanto os reais.</p>
    </details>

    <details className="content-details">
      <summary>4.4 Auxiliar de visualização: sim/visualizer.py</summary>
      <pre><code>{`from example.sim.visualizer import Visualizer

viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
    </details>
  </div>
</section>

<section id="hardware-control" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes do controle do braço real</strong>
      <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong>. Use pequenas mudanças de alvo e durações longas na primeira execução.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Etapa 5</span>
    <div>
      <h2>Execute com cuidado o controle de IK e trajetória no braço real</h2>
      <p>Execute estes scripts somente depois que a comunicação CAN, as posições de zero, a FK / IK e a simulação MeshCat tiverem sido verificadas.</p>
    </div>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>5.1 Controle de IK em tempo real: 7_arm_ik_control.py</summary>
      <p>Use este script para controle de pose alvo do efetuador final. Comece com uma pose próxima da pose atual.</p>
      <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.2

# Position + orientation
> 0.3 0.1 0.25 0 0.5 0

# Read current state
> state
> pos`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>5.2 Controle de trajetória suave: 8_arm_traj_control.py</summary>
      <p>Este script usa planejamento de trajetória geodésica em SE(3) e rastreamento CLIK. Use uma duração maior para testes iniciais mais seguros.</p>
      <pre><code>{`uv run python example/8_arm_traj_control.py

# x y z roll pitch yaw duration
> 0.3 0.0 0.3 0 0.4 0 5.0`}</code></pre>
    </details>
  </div>
</section>

<section id="gravity" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes da compensação de gravidade</strong>
      <p>A compensação de gravidade pode desabilitar os motores diretamente ao ser interrompida. Segure o braço ou mova-o para uma pose segura antes de sair.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Etapa 6</span>
    <div>
      <h2>Teste a compensação de gravidade após todas as verificações básicas</h2>
      <p>A compensação de gravidade depende da massa do URDF, centro de massa, inércia, direção do motor, offsets de zero e atrito. Não ajuste os ganhos às cegas.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Modo básico de flutuação</b><span>Usa torque de alimentação antecipada de gravidade para deixar o braço mais leve e movível manualmente.</span></div>
    <div className="module-summary-card"><b>Modo de travamento de velocidade</b><span>Trava a pose atual quando a velocidade do efetuador final é baixa e, em seguida, atualiza o alvo quando o braço é empurrado.</span></div>
    <div className="module-summary-card"><b>Ajuste de segurança</b><span>Ative apenas juntas selecionadas para os primeiros testes e ajuste a escala de torque gradualmente.</span></div>
  </div>

  <details className="content-details" open>
    <summary>6.1 Compensação básica de gravidade: 9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <div className="callout danger"><strong>Aviso ao sair:</strong> ao parar o script com Ctrl+C, o programa pode desativar diretamente todos os motores e o braço não retornará automaticamente ao zero. Segure o braço ou mova-o para uma pose segura antes de sair.</div>
  </details>

  <details className="content-details" open>
    <summary>6.2 Travamento de velocidade do efetuador final: 10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>O terminal exibe LOCKED ou UPDATE, velocidade do efetuador final, velocidade angular e torque de compensação de gravidade.</p>
  </details>

  <details className="content-details">
    <summary>6.3 Ative apenas juntas selecionadas para testes de segurança</summary>
    <pre><code>{`ENABLED_JOINTS = ["joint1"]  # Enable only joint1 for first safety tests`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6.4 Ajuste cuidadosamente a compensação de juntas individuais</summary>
    <pre><code>{`tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3`}</code></pre>
    <p>Por exemplo, <code>{`tau_g[2] *= 1.2`}</code> aumenta o torque de compensação de gravidade da junta 2 em 20%. Ajuste um item de cada vez com base no efeito de flutuação real.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Perguntas frequentes</span>
    <h2>Problemas comuns</h2>
  </div>

  <details className="content-details" open>
    <summary>Permissão negada</summary>
    <p>Para o B601-RS, primeiro verifique se a interface CAN existe e está ativa. Se estiver usando um dispositivo SocketCAN, configure <code>{`can0`}</code> antes de executar os exemplos.</p>
    <pre><code>{`ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Falha na solução de IK ou resultados anormais</summary>
    <p>Verifique se a pose alvo está dentro da área de trabalho, se as restrições de orientação não são muito rígidas, se o chute inicial das juntas não está muito distante e se os limites das juntas estão corretos. Tente primeiro IK apenas de posição.</p>
  </details>

  <details className="content-details">
    <summary>Os motores RobStride não conseguem ler o status</summary>
    <p>Alguns caminhos de protocolo do MotorBridge podem não expor os mesmos campos de status que os motores DM. Use o feedback de movimento real e o comando ping para confirmar a comunicação.</p>
  </details>

  <details className="content-details">
    <summary>A compensação de gravidade é ruim</summary>
    <p>Verifique a massa do URDF, centro de massa, inércia, direção das juntas, offsets de zero, constantes de torque, atrito e diferenças de montagem. Não aumente simplesmente os ganhos.</p>
  </details>

  <details className="content-details">
    <summary>Como alternar entre configurações de motor Damiao e RobStride</summary>
    <p>Modifique o arquivo de configuração e carregue o hardware YAML correspondente. Para o B601-RS, use <code>{`rebotarm_rs.yaml`}</code>.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referências</span>
    <h2>Documentos de referência</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/" target="_blank">Documentação oficial do Pinocchio</a>
    <a href="https://github.com/rdeits/meshcat" target="_blank">MeshCat GitHub</a>
    <a href="https://github.com/motorbridge/motorbridge" target="_blank">MotorBridge SDK</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py" target="_blank">reBotArm_control_py</a>
    <a href="https://forum.seeedstudio.com/" target="_blank">Fórum Seeed Studio</a>
  </div>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Trilha de aprendizado do reBot B601-RS</h2>
    <p>Estes tutoriais foram projetados para serem seguidos em ordem: Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2. Use os links abaixo para alternar entre os módulos.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Conclua o unboxing, cabeamento, verificações de energia, configuração do PCAN-USB, calibração e primeiros testes de movimento.</span></span>
      <span className="course-tag">Comece aqui</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Teleoperação e Coleta de Dados com LeRobot</strong><span>Teleopere o braço, conecte câmeras, grave conjuntos de dados e prepare tarefas de aprendizado por imitação.</span></span>
      <span className="course-tag">Coleta de dados</span>
    </a>
    <a className="course-path-item active" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualização de Cinemática com Pinocchio</strong><span>Entenda modelos de robôs, juntas, sistemas de coordenadas, cinemática direta/inversa, trajetórias e compensação de gravidade.</span></span>
      <span className="course-tag">Artigo atual</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Demo de Pega Visual</strong><span>Combine percepção RGB-D, calibração mão-olho, YOLO / GraspNet e geração de pose de pega para agarrar objetos reais.</span></span>
      <span className="course-tag">Aplicação</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_ros2_integration/">
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
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1rem; align-items: start; margin-bottom: 1.1rem; }
.step-pill, .step-mini { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-pill { padding: 0.5rem 0.8rem; white-space: nowrap; }
.step-card-grid, .module-summary-grid, .spec-grid, .debug-grid, .command-grid, .feature-grid, .reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; }
.step-card, .module-summary-card, .spec-card, .command-card, .content-details, .reference-grid a, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05); }
.step-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.96), rgba(240,253,250,0.82)); }
.step-card .step-mini { width: fit-content; min-width: 2.1rem; height: 2.1rem; padding: 0 0.65rem; margin-bottom: 0.3rem; font-size: 0.86rem; }
.step-card strong, .module-summary-card b, .spec-card b, .feature-grid strong, .command-card h3 { color: var(--rb-text); margin: 0; }
.step-card p, .module-summary-card span, .spec-card span, .feature-grid span, .content-details p { color: var(--rb-muted); line-height: 1.65; margin: 0; }
.command-card.wide { grid-column: 1 / -1; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-table { overflow-x: auto; }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.image-frame img { width: 100%; border-radius: 14px; display: block; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); color: var(--rb-muted); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.36); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.38); background: #fef2f2; color: #7f1d1d; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .command-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .feature-grid div, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .step-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(127,29,29,0.26); color: #fecaca; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .step-title-row { grid-template-columns: 1fr; } }
`}</style>
