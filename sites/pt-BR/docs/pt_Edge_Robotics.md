---
description: Este tópico apresenta a documentação de produtos de robótica da Seeed Studio e os caminhos de aprendizado.
title: Robótica
keywords:
  - robotics
  - nvidia
  - ros
  - isaac
  - lerobot
  - learning
  - reinforcement learning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robotics_page
last_update:
  date: 07/04/2026
  author: ZhuYaohui
createdAt: '2023-01-12'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/pt-br/robotics_page/
---

# 🤖 Robótica

> *"A ciência de hoje é a tecnologia de amanhã." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Não tem certeza de qual guia ler primeiro? Comece com o kit de robô que está em suas mãos.</h2>
      <p>Esta página reorganiza a documentação de robótica da Seeed Studio em caminhos de aprendizado baseados em produtos. Esteja você desembalando seu primeiro robô ou se preparando para teleoperação, ROS2, simulação, treinamento de IA ou implantação no mundo real, comece escolhendo seu kit de robô e siga as etapas recomendadas, desde a inicialização do hardware até o desenvolvimento avançado.</p>
    </div>
    <div className="hero-tips">
      <div><strong>Novos usuários</strong><span>Comece com unboxing, cabeamento, alimentação, drivers e verificações básicas de movimento</span></div>
      <div><strong>Criadores de aplicações</strong><span>Continue com SDKs, LeRobot, ROS2, preensão visual ou controle móvel</span></div>
      <div><strong>Usuários de robótica com IA</strong><span>Avance para simulação, coleta de dados, GR00T, VLA e aprendizado por reforço</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Kits de robô</a>
    <a href="#actuators">⚙️ Atuadores de junta</a>
    <a href="#sensors">👁️ Sensores</a>
    <a href="#software">💻 Ecossistema de software</a>
  </nav>

  <section className="kit-index-panel" aria-label="Choose a robotics learning path">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Escolha um kit</span>
        <h2>Escolha rapidamente seu caminho de aprendizado</h2>
      </div>
      <p>Todos os cards de produto ficam recolhidos por padrão. Escolha o kit que está em suas mãos e, em seguida, expanda o caminho de aprendizado correspondente.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>Caminho de aprendizado do braço RobStride</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Caminho de aprendizado do braço Damiao</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>Caminho LeRobot de baixo custo</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>Base móvel e demonstrações</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>Caminho do robô com rodas e pernas</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>Caminho do robô interativo de mesa</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Comece aqui</span>
        <h2>📦 Kits de robô</h2>
      </div>
      <p>Cada kit segue a mesma lógica: primeiro inicialize o hardware, depois entre no ecossistema de software e, por fim, avance para aplicações de IA, ROS ou simulação. Expanda o card do seu produto e siga as etapas na ordem.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-RS Arm</h3>
        <span>Para onboarding de braço robótico, teleoperação, preensão visual, integração ROS2 e coleta de dados de IA</span>
      </div>
    </div>
    <span className="summary-action">Abrir caminho de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários iniciantes do reBot Arm que desejam operar rapidamente um braço robótico real</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Ir das verificações de energização até teleoperação com LeRobot, preensão visual e integração ROS2</span></div>
      <div><strong>Ordem sugerida</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>Conclua o unboxing, cabeamento, verificações de alimentação, configuração de drivers e testes básicos de movimento para verificar se o braço está funcionando.</small></div><em>Comece aqui</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot Teleoperation and Data Collection</b><small>Aprenda como teleoperar o braço e registrar dados para tarefas de aprendizado por imitação e IA incorporada.</small></div><em>Coleta de dados</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio Kinematics Visualization</b><small>Entenda modelos de robô, juntas, sistemas de coordenadas e cinemática direta/inversa.</small></div><em>Controle</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combine percepção por câmera e geração de pose de preensão para realizar a preensão de objetos reais.</small></div><em>Aplicação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Conecte o braço ao ecossistema ROS2 para fluxos de trabalho de percepção, planejamento, navegação e simulação.</small></div><em>Integração</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-DM Arm</h3>
        <span>Para usuários de motores Damiao que estão aprendendo controle de robôs, LeRobot, Pinocchio e ROS2</span>
      </div>
    </div>
    <span className="summary-action">Abrir caminho de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários B601-DM que desejam controle de braço robótico e coleta de dados de IA</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Concluir drivers básicos, modelagem cinemática, coleta de dados com LeRobot e demonstrações de preensão visual</span></div>
      <div><strong>Ordem sugerida</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>Verifique alimentação, comunicação CAN, drivers e movimento básico para confirmar que o hardware está pronto.</small></div><em>Comece aqui</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot Data Collection</b><small>Use LeRobot para teleoperação, gravação e preparação de conjuntos de dados para aprendizado por imitação.</small></div><em>Dados de IA</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio and Meshcat</b><small>Carregue e visualize o modelo do robô e, em seguida, aprenda o básico de cinemática e controle em espaço de juntas.</small></div><em>Controle</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combine o braço com algoritmos de visão para agarrar objetos reais em um cenário físico.</small></div><em>Aplicação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Conecte o braço ao ROS2 para MoveIt, nós de percepção e aplicações em nível de sistema.</small></div><em>Integração</em></a>
    </div>
  </div>
</details>

<details id="soarm" className="product-card soarm">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>SO100 / SO101 Arm</h3>
        <span>Para onboarding de braço robótico de baixo custo, LeRobot, simulação, aprendizado por reforço e experimentos com GR00T/VLA</span>
      </div>
    </div>
    <span className="summary-action">Abrir caminho de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários que desejam iniciar em IA incorporada com um braço robótico acessível</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Avançar da depuração de servos para simulação, aprendizado por reforço, GR00T e treinamento de braço duplo</span></div>
      <div><strong>Ordem sugerida</strong><span>Setup → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arm</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Getting Started</b><small>Conclua a configuração de hardware, conexão, calibração e o teste mínimo executável.</small></div><em>Comece aqui</em></a>
      <a className="step-card" href="/pt-br/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b><small>Verifique IDs dos servos, direção, pontos zero e status de comunicação antes do treinamento.</small></div><em>Depuração</em></a>
      <a className="step-card" href="/pt-br/simulate_soarm101_by_leisaac/"><span className="step-index">3</span><div><b>LeIsaac Simulation</b><small>Entenda o modelo do robô, o cenário e a configuração de tarefas em simulação antes do Sim2Real.</small></div><em>Simulação</em></a>
      <a className="step-card" href="/pt-br/training_soarm101_policy_with_isaacLab/"><span className="step-index">4</span><div><b>Isaac Lab Reinforcement Learning</b><small>Aprenda configuração de tarefas, recompensas, treinamento de políticas e fluxo de implantação em simulação.</small></div><em>Avançado</em></a>
      <a className="step-card" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">5</span><div><b>SO101 com NVIDIA GR00T</b><small>Entre no fluxo de trabalho de ajuste fino de modelo VLA e de IA incorporada com implantação no Jetson.</small></div><em>VLA</em></a>
      <a className="step-card" href="/pt-br/lerobot_double_arm_so_arm_training/"><span className="step-index">6</span><div><b>Treinamento SO-ARM de dois braços</b><small>Aprenda fluxos de trabalho mais complexos de coleta de dados de dois braços, treinamento e execução de tarefas.</small></div><em>Tarefas complexas</em></a>
      <a className="step-card optional" href="/pt-br/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Extensão opcional para usuários que desejam experimentar uma plataforma de terceiros para coleta de dados e treinamento.</small></div><em>Opcional</em></a>
    </div>
  </div>
</details>

<details id="starai" className="product-card starai">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>StarAI Arm</h3>
        <span>Para controle básico de braço robótico, MoveIt 2, planejamento ROS2 e aplicações GR00T</span>
      </div>
    </div>
    <span className="summary-action">Abrir trilha de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários que estão aprendendo planejamento de braço robótico ROS2 e demonstrações de controle com IA</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Executar controle básico, planejamento com MoveIt 2 e controle baseado em GR00T</span></div>
      <div><strong>Ordem sugerida</strong><span>Introdução → MoveIt 2 → GR00T</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Introdução ao StarAI Arm</b><small>Conclua a conexão de hardware, o controle básico e o exemplo mínimo executável.</small></div><em>Comece aqui</em></a>
      <a className="step-card" href="/pt-br/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planejamento de movimento com MoveIt 2</b><small>Aprenda importação de modelos, cenas de planejamento, planejamento de trajetórias e desenvolvimento de braço com ROS2.</small></div><em>ROS2</em></a>
      <a className="step-card" href="/pt-br/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI com NVIDIA GR00T</b><small>Entre em aplicações de controle de braço robótico baseadas em modelos grandes e VLA.</small></div><em>Controle por IA</em></a>
    </div>
  </div>
</details>

<details id="lekiwi" className="product-card lekiwi">
  <summary>
    <div className="product-head">
      <span className="product-icon">🚗</span>
      <div>
        <h3>Lekiwi Mobile Base</h3>
        <span>Para introdução a robôs móveis, controle da base e aplicações de seguir som</span>
      </div>
    </div>
    <span className="summary-action">Abrir trilha de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários de base móvel de primeira viagem que querem colocar o robô em movimento</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Concluir o controle básico da base e experimentar demonstrações de seguir som</span></div>
      <div><strong>Observação</strong><span>A etapa ROS2 foi removida aqui para manter esta trilha focada no fluxo atual de introdução ao produto</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Introdução à Lekiwi Mobile Base</b><small>Conclua a montagem, conexão, controle básico de movimento e verificações de segurança.</small></div><em>Comece aqui</em></a>
      <a className="step-card" href="/pt-br/sound_follow_robot/"><span className="step-index">2</span><div><b>Demonstração de seguir som</b><small>Combine entrada de áudio e controle de movimento da base para uma demonstração intuitiva de robô móvel interativo.</small></div><em>Aplicação</em></a>
    </div>
  </div>
</details>

<details id="stackforce" className="product-card stackforce">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦿</span>
      <div>
        <h3>StackForce Mini Wheeled-Legged Robot</h3>
        <span>Para estruturas com rodas e pernas, controle de equilíbrio, planejamento de movimento e algoritmos de controle</span>
      </div>
    </div>
    <span className="summary-action">Abrir trilha de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários interessados em robôs móveis, robôs com rodas e pernas e controle de equilíbrio</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Entender a estrutura de hardware, a lógica de controle e as capacidades básicas de movimento</span></div>
      <div><strong>Ordem sugerida</strong><span>Introdução → Princípios de controle → Depuração de movimento</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Introdução ao StackForce Mini</b><small>Aprenda o hardware, a implantação básica, o controle de movimento e experimentos introdutórios com rodas e pernas.</small></div><em>Curso</em></a>
    </div>
  </div>
</details>

<details id="reachy" className="product-card reachy">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>Reachy Mini</h3>
        <span>Para robótica de mesa, interação humano-robô, agentes, SDK em Python, simulação e integração de IA</span>
      </div>
    </div>
    <span className="summary-action">Abrir trilha de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários que desejam interação com robô de mesa, diálogo por voz, controle de movimento e aplicações com agentes</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Começar com o uso básico, escolher Wireless ou Lite, depois aprender desenvolvimento com SDK, integração de IA e solução de problemas</span></div>
      <div><strong>Mapa da documentação</strong><span>Organizado como Visão geral do produto → Configuração da plataforma → Desenvolvimento com SDK → Aplicativos de IA → Solução de problemas → Referência de API</span></div>
    </div>

    <div className="reachy-path-grid">
      <div className="mini-track">
        <h4>① Entenda o produto</h4>
        <a href="/pt-br/reachymini_intro/">Visão geral do Reachy Mini</a>
        <a href="/pt-br/reachymini_getting_started/">Introdução ao ReachyMini</a>
      </div>
      <div className="mini-track">
        <h4>② Escolha sua plataforma</h4>
        <a href="/pt-br/reachymini_platforms_simulation_get_started/">Configuração da simulação</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_get_started/">Configuração do Reachy Mini Wireless</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_usage/">Usando o Reachy Mini</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_hardware/">Ficha técnica de hardware do Reachy Mini</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_lite_get_started/">Configuração do Reachy Mini Lite</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_lite_usage/">Usando o Reachy Mini Lite</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_lite_hardware/">Ficha técnica de hardware do Reachy Mini Lite</a>
      </div>
      <div className="mini-track">
        <h4>③ SDK e noções básicas de desenvolvimento</h4>
        <a href="/pt-br/reachymini_sdk_readme/">Reachy Mini SDK</a>
        <a href="/pt-br/reachymini_sdk_installation/">Guia de instalação</a>
        <a href="/pt-br/reachymini_sdk_quickstart/">Guia de início rápido</a>
        <a href="/pt-br/reachymini_sdk_python-sdk/">Referência do SDK em Python</a>
        <a href="/pt-br/reachymini_sdk_core-concept/">Conceitos principais e arquitetura</a>
        <a href="/pt-br/reachymini_sdk_media-architecture/">Arquitetura de mídia</a>
        <a href="/pt-br/reachymini_sdk_gstreamer-installation/">Instalação do GStreamer</a>
        <a href="/pt-br/reachymini_sdk_javascript-sdk/">SDK em JavaScript e aplicativos Web</a>
      </div>
      <div className="mini-track">
        <h4>④ Aplicativos e integração de IA</h4>
        <a href="/pt-br/reachymini_sdk_integration/">Integração e aplicações</a>
        <a href="/pt-br/reachymini_sdk_apps/">Criar e publicar aplicativos</a>
        <a href="/pt-br/reachymini_conversation/">Demonstração de conversa com Doubao LLM</a>
        <a href="/pt-br/reachymini_vibe-code-with-your-agent/">Programação Vibe com um agente</a>
        <a href="/pt-br/reachymini_agents/">Guia de desenvolvimento para agentes de IA</a>
      </div>
      <div className="mini-track">
        <h4>⑤ Mídia, sistema e operações avançadas</h4>
        <a href="/pt-br/reachymini_platforms_reachy_mini_media_advanced_controls/">Controles avançados de mídia Wireless</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Controles avançados de mídia Lite</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_lite_wizard/">Ler parâmetros do motor com Dynamixel Wizard</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_development_workflow/">Fluxo de trabalho de desenvolvimento Wireless</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Instalar Daemon a partir de um branch</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Regravar imagem do Raspberry Pi OS</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_reset/">Redefinição de Bluetooth</a>
      </div>
      <div className="mini-track">
        <h4>⑥ Exemplos</h4>
        <a href="/pt-br/reachymini_examples_minimal_demo/">Demonstração mínima</a>
        <a href="/pt-br/reachymini_examples_goto_interpolation_playground/">Playground de interpolação Goto</a>
        <a href="/pt-br/reachymini_examples_look_at/">Olhar para imagem</a>
        <a href="/pt-br/reachymini_examples_mini_head_position_gui/">GUI de posição da cabeça</a>
        <a href="/pt-br/reachymini_examples_joy_controller/">Controlador de joystick</a>
        <a href="/pt-br/reachymini_examples_imu/">Exemplo de IMU</a>
        <a href="/pt-br/reachymini_examples_custom_media_manager/">Gerenciador de mídia personalizado</a>
        <a href="/pt-br/reachymini_examples_reachy_compliant_demo/">Demonstração de modo compliance</a>
        <a href="/pt-br/reachymini_examples_recorded_moves/">Movimentos gravados</a>
        <a href="/pt-br/reachymini_examples_rerun_viewer/">Visualizador Rerun</a>
        <a href="/pt-br/reachymini_examples_sequence/">Demonstração de sequência</a>
        <a href="/pt-br/reachymini_examples_sound_doa/">Direção de chegada do som</a>
        <a href="/pt-br/reachymini_examples_sound_play/">Reprodução de som</a>
        <a href="/pt-br/reachymini_examples_sound_record/">Gravação de som</a>
        <a href="/pt-br/reachymini_examples_take_picture/">Tirar foto</a>
      </div>
      <div className="mini-track">
        <h4>⑦ Solução de problemas e manutenção</h4>
        <a href="/pt-br/reachymini_troubleshooting/">Solução de problemas e FAQ</a>
        <a href="/pt-br/reachymini_troubleshooting_motors_diagnosis/">Diagnóstico e solução de problemas de motores</a>
        <a href="/pt-br/reachymini_troubleshooting_change_mic_fpc_cable/">Substituir o cabo FPC do microfone</a>
        <a href="/pt-br/reachymini_troubleshooting_spherical_joints_maintenance/">Manutenção de juntas esféricas</a>
        <a href="/pt-br/reachymini_troubleshooting_roadmap/">Roteiro do Reachy Mini</a>
      </div>
      <div className="mini-track">
        <h4>⑧ Referência de API</h4>
        <a href="/pt-br/reachymini_api_reachymini/">Referência de API do ReachyMini</a>
        <a href="/pt-br/reachymini_api_rest-api/">Referência de REST API</a>
        <a href="/pt-br/reachymini_api_daemon/">Daemon API</a>
        <a href="/pt-br/reachymini_api_motion/">Motion API</a>
        <a href="/pt-br/reachymini_api_media/">Media API</a>
        <a href="/pt-br/reachymini_api_apps/">Referência de API de aplicativos</a>
        <a href="/pt-br/reachymini_api_tools/">Referência de API de ferramentas</a>
        <a href="/pt-br/reachymini_api_utils/">Referência de API de utilitários</a>
      </div>
    </div>
  </div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>⚙️ Atuadores de Junta</h2>
      </div>
      <p>Use estas referências quando você precisar depurar motores, entender protocolos de comunicação ou diagnosticar problemas em nível de junta.</p>
    </div>
    <div className="resource-grid">
      <a href="/pt-br/myactuator_series/">MyActuator X Series</a>
      <a href="/pt-br/damiao_series/">Damiao DM43 Series</a>
      <a href="/pt-br/feetech_servo/">Feetech STS3215 Servo</a>
      <a href="/pt-br/hightorque_control/">HighTorque Series</a>
      <a href="/pt-br/fashionstar_servo/">Fashionstar Series</a>
      <a href="/pt-br/stackforce_series/">Stackforce Series</a>
      <a href="/pt-br/robstride_control/">RobStride Control</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>👁️ Sensores</h2>
      </div>
      <p>Útil para preensão visual, SLAM, interação por voz e percepção do estado do robô.</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/pt-br/robosense_lidar/">RoboSense</a><a href="/pt-br/mid360/">Livox MID360</a><a href="/pt-br/a_loam/">A-LOAM Algorithm</a><a href="/pt-br/slamtec/">Slamtec Series</a></div>
      <div><h4>📷 Câmera</h4><a href="/pt-br/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/pt-br/orbbec_gemini_335lg/">Gemini 335Lg Depth Camera</a><a href="/pt-br/orbbec_gemini336/">Gemini 336 Depth Camera</a><a href="/pt-br/sensing_gmsl_cameras/">SENSING GMSL2 Camera</a><a href="/pt-br/ac1/">RoboSense AC1</a><a href="/pt-br/orbbec_depth_camera_on_ros/">Orbbec with ROS</a><a href="/pt-br/orb_slam3_orbbec_gemini2/">ORB-SLAM3 with Gemini2</a><a href="/pt-br/csi_camera_on_ros/">CSI Camera on Jetson</a><a href="/pt-br/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 Voz</h4><a href="/pt-br/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/pt-br/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/pt-br/hexfellow_y200/">HEXFELLOW Y200</a><a href="/pt-br/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>💻 Ecossistema de Software</h2>
      </div>
      <p>Depois que seu kit estiver em funcionamento, escolha uma direção de software com base no objetivo do seu projeto: ROS, Isaac, PX4 ou VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecossistema ROS</h4><a href="/pt-br/installing_ros1/">Instalação do ROS 1</a><a href="/pt-br/install_ros2_humble/">Instalação do ROS 2</a><a href="/pt-br/install_isaacros/">Instalação do Isaac ROS</a><a href="/pt-br/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/pt-br/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/pt-br/install_isaaclab/">Instalação do Isaac Lab</a><a href="/pt-br/training_soarm101_policy_with_isaacLab/">Aprendizado por Reforço do Braço SO</a><a href="/pt-br/simulate_soarm101_by_leisaac/">Braço SO100 com IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/pt-br/control_px4_with_recomputer_jetson/">PX4 com Jetson</a><a href="/pt-br/object_tracking_with_reComputer_jetson_and_pX4/">Rastreamento de Objetos com PX4</a><a href="/pt-br/control_robotic_arm_via_gr00t/">StarAI com NVIDIA GR00T</a></div>
    </div>
  </section>

</div>

<style>{`
.robotics-page {
  --rp-page-bg: #ffffff;
  --rp-card-bg: #ffffff;
  --rp-card-bg-soft: #f8fafc;
  --rp-card-bg-hover: #ffffff;
  --rp-text: #0f172a;
  --rp-text-muted: #64748b;
  --rp-text-soft: #94a3b8;
  --rp-border: rgba(148, 163, 184, 0.28);
  --rp-border-strong: rgba(148, 163, 184, 0.42);
  --rp-shadow-sm: 0 8px 22px rgba(15, 23, 42, 0.06);
  --rp-shadow-md: 0 16px 40px rgba(15, 23, 42, 0.10);
  --rp-shadow-accent: 0 16px 34px rgba(37, 99, 235, 0.12);
  --rp-accent: #2563eb;
  --rp-accent-soft: rgba(37, 99, 235, 0.10);
  --rp-accent-border: rgba(37, 99, 235, 0.24);
  width: 100%;
  color: var(--rp-text);
}

.robotics-page * { box-sizing: border-box; }
.robotics-page a { -webkit-tap-highlight-color: transparent; }
.robotics-page a:focus-visible, .robotics-page summary:focus-visible { outline: 3px solid var(--rp-accent-border); outline-offset: 3px; }

.hero-panel {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.8fr);
  gap: 1.5rem;
  padding: 2.1rem;
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37, 99, 235, 0.18), transparent 34%),
    radial-gradient(circle at 88% 76%, rgba(20, 184, 166, 0.18), transparent 38%),
    linear-gradient(135deg, rgba(248, 250, 252, 0.94), rgba(239, 246, 255, 0.96));
  border: 1px solid var(--rp-accent-border);
  margin: 1.5rem 0 1.25rem;
  box-shadow: var(--rp-shadow-sm);
}
.hero-panel::after {
  content: "";
  position: absolute;
  right: -80px;
  top: -80px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.08);
  pointer-events: none;
}
.eyebrow, .section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--rp-accent);
  margin-bottom: 0.6rem;
}
.eyebrow::before, .section-kicker::before {
  content: "";
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--rp-accent);
  box-shadow: 0 0 0 4px var(--rp-accent-soft);
}
.hero-panel h2 { margin: 0 0 0.75rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.16; letter-spacing: -0.03em; }
.hero-panel p { margin: 0; color: var(--rp-text-muted); line-height: 1.78; max-width: 780px; }
.hero-tips { display: grid; gap: 0.75rem; position: relative; z-index: 1; }
.hero-tips div {
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid var(--rp-border);
  border-radius: 18px;
  padding: 0.95rem 1rem;
  box-shadow: var(--rp-shadow-sm);
  backdrop-filter: blur(10px);
}
.hero-tips strong { display: block; color: var(--rp-text); margin-bottom: 0.28rem; }
.hero-tips span { color: var(--rp-text-muted); font-size: 0.92rem; line-height: 1.5; }

.quick-nav {
  position: sticky;
  top: 0.75rem;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  padding: 0.75rem;
  margin: 1rem 0 2rem;
  border-radius: 20px;
  background: color-mix(in srgb, var(--rp-card-bg) 88%, transparent);
  border: 1px solid var(--rp-border);
  backdrop-filter: blur(14px);
  box-shadow: var(--rp-shadow-sm);
}
.quick-nav a {
  text-align: center;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  text-decoration: none !important;
  font-weight: 780;
  color: var(--rp-text);
  background: var(--rp-card-bg-soft);
  border: 1px solid transparent;
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
.quick-nav a:hover { transform: translateY(-2px); color: var(--rp-accent); border-color: var(--rp-accent-border); background: var(--rp-card-bg-hover); box-shadow: var(--rp-shadow-accent); }

.section-block { margin: 2.6rem 0; scroll-margin-top: 6rem; }
.section-title-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 1.25rem; margin-bottom: 1.25rem; }
.section-title-row h2 { margin: 0.15rem 0 0; font-size: 1.7rem; letter-spacing: -0.02em; }
.section-title-row p { margin: 0; max-width: 580px; color: var(--rp-text-muted); line-height: 1.68; }

.product-stack { display: grid; gap: 1rem; }
.product-card {
  --rp-accent: #2563eb;
  --rp-accent-soft: rgba(37, 99, 235, 0.10);
  --rp-accent-border: rgba(37, 99, 235, 0.26);
  position: relative;
  border: 1px solid var(--rp-border);
  border-radius: 24px;
  background: var(--rp-card-bg);
  box-shadow: var(--rp-shadow-sm);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.product-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(180deg, var(--rp-accent), color-mix(in srgb, var(--rp-accent) 52%, #14b8a6));
  opacity: 0.88;
}
.product-card:hover { border-color: var(--rp-accent-border); box-shadow: var(--rp-shadow-md); }
.product-card[open] { border-color: var(--rp-accent-border); }
.product-card.rebot { --rp-accent: #2563eb; --rp-accent-soft: rgba(37, 99, 235, 0.10); --rp-accent-border: rgba(37, 99, 235, 0.28); }
.product-card.soarm { --rp-accent: #f97316; --rp-accent-soft: rgba(249, 115, 22, 0.12); --rp-accent-border: rgba(249, 115, 22, 0.30); }
.product-card.starai { --rp-accent: #7c3aed; --rp-accent-soft: rgba(124, 58, 237, 0.12); --rp-accent-border: rgba(124, 58, 237, 0.30); }
.product-card.lekiwi { --rp-accent: #0891b2; --rp-accent-soft: rgba(8, 145, 178, 0.12); --rp-accent-border: rgba(8, 145, 178, 0.30); }
.product-card.stackforce { --rp-accent: #ca8a04; --rp-accent-soft: rgba(202, 138, 4, 0.13); --rp-accent-border: rgba(202, 138, 4, 0.30); }
.product-card.reachy { --rp-accent: #0d9488; --rp-accent-soft: rgba(13, 148, 136, 0.12); --rp-accent-border: rgba(13, 148, 136, 0.30); }
.product-card summary {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  padding: 1.18rem 1.28rem 1.18rem 1.45rem;
  background: linear-gradient(90deg, var(--rp-accent-soft), transparent 46%);
}
.product-card summary::-webkit-details-marker { display: none; }
.product-card summary::after {
  content: "⌄";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  color: var(--rp-accent);
  background: var(--rp-accent-soft);
  font-size: 1.15rem;
  font-weight: 900;
  transition: transform 0.2s ease;
}
.product-card[open] summary::after { transform: rotate(180deg); }
.product-head { display: flex; align-items: center; gap: 0.95rem; min-width: 0; }
.product-icon { width: 46px; height: 46px; display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: var(--rp-accent-soft); color: var(--rp-accent); font-size: 1.45rem; flex: 0 0 auto; }
.product-head h3 { margin: 0 0 0.25rem; font-size: 1.18rem; letter-spacing: -0.01em; }
.product-head span { color: var(--rp-text-muted); font-size: 0.92rem; line-height: 1.48; }
.summary-action { flex: 0 0 auto; padding: 0.42rem 0.7rem; border-radius: 999px; font-size: 0.76rem; font-weight: 850; color: var(--rp-accent); background: var(--rp-accent-soft); border: 1px solid var(--rp-accent-border); }
.product-card[open] .summary-action { color: #047857; background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.26); }
.product-body { border-top: 1px solid var(--rp-border); padding: 1.25rem; background: linear-gradient(180deg, var(--rp-card-bg), var(--rp-card-bg-soft)); }

.product-meta-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; margin-bottom: 1rem; }
.product-meta-grid div { padding: 0.95rem; border-radius: 16px; background: color-mix(in srgb, var(--rp-card-bg) 82%, var(--rp-accent-soft)); border: 1px solid var(--rp-border); }
.product-meta-grid strong { display: block; margin-bottom: 0.35rem; color: var(--rp-text); }
.product-meta-grid span { color: var(--rp-text-muted); font-size: 0.88rem; line-height: 1.58; }
.learning-steps { display: grid; gap: 0.75rem; }
.step-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.9rem;
  padding: 0.96rem;
  border-radius: 17px;
  background: var(--rp-card-bg);
  border: 1px solid var(--rp-border);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.step-card:hover { transform: translateX(4px); border-color: var(--rp-accent-border); box-shadow: var(--rp-shadow-accent); background: var(--rp-card-bg-hover); }
.step-index { width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--rp-accent); color: #fff; font-weight: 900; box-shadow: 0 8px 18px var(--rp-accent-soft); }
.step-card b { display: block; margin-bottom: 0.25rem; color: var(--rp-text); }
.step-card small { display: block; color: var(--rp-text-muted); line-height: 1.58; font-size: 0.86rem; }
.step-card em { justify-self: end; font-style: normal; font-size: 0.72rem; font-weight: 850; color: var(--rp-accent); background: var(--rp-accent-soft); border: 1px solid var(--rp-accent-border); border-radius: 999px; padding: 0.32rem 0.58rem; white-space: nowrap; }
.step-card.optional .step-index { background: #64748b; }
.step-card.optional em { color: #475569; background: #e2e8f0; border-color: rgba(100, 116, 139, 0.28); }

.reachy-path-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: 0.9rem; align-items: start; }
.mini-track { background: var(--rp-card-bg); border: 1px solid var(--rp-border); border-radius: 18px; padding: 1rem; box-shadow: 0 6px 18px rgba(15, 23, 42, 0.035); }
.mini-track h4 { margin: 0 0 0.75rem; color: var(--rp-text); font-size: 0.98rem; }
.mini-track a { display: block; padding: 0.58rem 0.68rem; margin: 0.42rem 0; border-radius: 11px; background: var(--rp-card-bg-soft); text-decoration: none !important; color: var(--rp-text-muted); font-size: 0.88rem; border: 1px solid transparent; transition: all 0.18s ease; }
.mini-track a:hover { color: var(--rp-accent); background: var(--rp-accent-soft); border-color: var(--rp-accent-border); transform: translateX(2px); }

.note-box { margin-top: 1rem; padding: 0.9rem 1rem; border-radius: 14px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; font-size: 0.88rem; line-height: 1.6; }
.resource-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.resource-grid a, .resource-columns a { display: block; padding: 0.75rem 0.85rem; border-radius: 13px; text-decoration: none !important; color: var(--rp-text-muted); background: var(--rp-card-bg); border: 1px solid var(--rp-border); transition: all 0.2s ease; }
.resource-grid a:hover, .resource-columns a:hover { color: var(--rp-accent); border-color: var(--rp-accent-border); transform: translateY(-2px); box-shadow: var(--rp-shadow-accent); }
.resource-columns { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.resource-columns div { padding: 1rem; border-radius: 19px; background: var(--rp-card-bg-soft); border: 1px solid var(--rp-border); }
.resource-columns h4 { margin: 0 0 0.75rem; color: var(--rp-text); }
.resource-columns a { margin-bottom: 0.55rem; }

html[data-theme='dark'] .robotics-page {
  --rp-page-bg: #111317;
  --rp-card-bg: #1b1d22;
  --rp-card-bg-soft: #23262d;
  --rp-card-bg-hover: #262a32;
  --rp-text: #f8fafc;
  --rp-text-muted: #cbd5e1;
  --rp-text-soft: #94a3b8;
  --rp-border: rgba(148, 163, 184, 0.18);
  --rp-border-strong: rgba(148, 163, 184, 0.28);
  --rp-shadow-sm: 0 10px 26px rgba(0, 0, 0, 0.28);
  --rp-shadow-md: 0 18px 42px rgba(0, 0, 0, 0.36);
  --rp-shadow-accent: 0 16px 34px rgba(96, 165, 250, 0.10);
}
html[data-theme='dark'] .hero-panel {
  background:
    radial-gradient(circle at 12% 18%, rgba(96, 165, 250, 0.20), transparent 34%),
    radial-gradient(circle at 88% 76%, rgba(45, 212, 191, 0.14), transparent 38%),
    linear-gradient(135deg, #171a20, #111827);
  border-color: var(--rp-border-strong);
}
html[data-theme='dark'] .hero-tips div { background: rgba(27, 29, 34, 0.78); }
html[data-theme='dark'] .quick-nav { background: rgba(17, 19, 23, 0.82); }
html[data-theme='dark'] .note-box { color: #fde68a; background: rgba(146, 64, 14, 0.18); border-color: rgba(253, 230, 138, 0.24); }
html[data-theme='dark'] .step-card.optional em { color: #cbd5e1; background: rgba(100, 116, 139, 0.20); }

@media (max-width: 900px) {
  .hero-panel, .product-meta-grid, .resource-columns { grid-template-columns: 1fr; }
  .section-title-row { display: block; }
  .section-title-row p { margin-top: 0.5rem; }
  .quick-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); position: static; }
  .step-card { grid-template-columns: auto minmax(0, 1fr); }
  .step-card em { grid-column: 2; justify-self: start; }
}
@media (max-width: 560px) {
  .hero-panel { padding: 1.25rem; border-radius: 20px; }
  .quick-nav { grid-template-columns: 1fr; }
  .product-card summary { align-items: flex-start; padding-right: 0.9rem; }
  .summary-action { display: none; }
  .product-card summary::after { margin-top: 0.45rem; }
  .product-icon { width: 40px; height: 40px; }
  .product-body { padding: 1rem; }
}
@media (prefers-reduced-motion: reduce) {
  .robotics-page *, .robotics-page *::before, .robotics-page *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}


/* Optimized collapsed-card learning path additions */
.kit-index-panel {
  margin: 1.6rem 0 2.2rem;
  padding: 1.25rem;
  border-radius: 24px;
  border: 1px solid var(--rp-border);
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
  box-shadow: var(--rp-shadow-sm);
}
.compact-title { margin-bottom: 1rem; }
.kit-index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.8rem;
}
.kit-index-grid a {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-areas: "icon title" "icon desc";
  gap: 0.18rem 0.75rem;
  align-items: center;
  padding: 0.9rem;
  border-radius: 16px;
  border: 1px solid var(--rp-border);
  background: var(--rp-card-bg);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.kit-index-grid a:hover {
  transform: translateY(-2px);
  border-color: var(--rp-accent-border);
  box-shadow: var(--rp-shadow-accent);
}
.kit-index-grid span {
  grid-area: icon;
  width: 2.35rem;
  height: 2.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--rp-accent-soft);
  font-size: 1.2rem;
}
.kit-index-grid strong { grid-area: title; color: var(--rp-text); }
.kit-index-grid small { grid-area: desc; color: var(--rp-text-muted); line-height: 1.35; }
.product-card { scroll-margin-top: 6rem; }
.product-card .summary-action { position: relative; min-width: 6.3rem; text-align: center; }
.product-card[open] .summary-action { font-size: 0; }
.product-card[open] .summary-action::after { content: "Close learning path"; font-size: 0.76rem; }
.product-card:not([open]) summary { background: linear-gradient(90deg, var(--rp-card-bg), var(--rp-card-bg-soft)); }
.product-card:not([open]) .product-head span { color: var(--rp-text-muted); }
.product-body { animation: rpFadeIn 0.18s ease-out; }
@keyframes rpFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.product-meta-grid div, .mini-track, .resource-columns div, .kit-index-panel {
  backdrop-filter: blur(6px);
}
html[data-theme='dark'] .kit-index-panel {
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
}
html[data-theme='dark'] .kit-index-grid a { background: var(--rp-card-bg); }
@media (max-width: 900px) {
  .kit-index-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .kit-index-panel { padding: 1rem; border-radius: 20px; }
  .kit-index-grid { grid-template-columns: 1fr; }
}

`}</style>
