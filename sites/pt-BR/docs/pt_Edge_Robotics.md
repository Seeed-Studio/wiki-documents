---
description: Documentação e trilhas de aprendizado de robótica da Seeed Studio.
title: Wiki de Robótica com IA
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';

# Wiki de Robótica com IA

> *"A ciência de hoje é a tecnologia de amanhã." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Não sabe por onde começar? Escolha o kit de robô que você tem</h2>
    </div>
  </section>

  <RoboticsPageSearch />

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Kits de Robô</a>
    <a href="#rebot-hardware-inventory">🧰 Recursos Open-Source do reBot</a>
    <a href="#actuators">⚙️ Atuadores de Junta</a>
    <a href="#sensors">👁️ Sensores</a>
    <a href="#software">💻 Ecossistema de Software</a>
  </nav>


  <section id="robot-kits" className="section-block">
    <div className="product-stack">

<article id="rebot-rs" className="product-card rebot product-card--cover">
  <div className="product-head">
    <h3>reBot B601-RS Braço Robótico</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Início Rápido</b><small>Desembale, faça a fiação, ligue, verifique os drivers e teste o movimento básico.</small></div><em>Obrigatório para iniciantes</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>Teleoperação LeRobot e Coleta de Dados</b><small>Colete dados de teleoperação para aprendizado por imitação e IA incorporada.</small></div><em>Coleta de dados</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Visualização de Cinemática com Pinocchio</b><small>Explore o modelo do braço, juntas, quadros e cinemática.</small></div><em>Controle avançado</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Demo de Agarramento Visual</b><small>Use visão e geração de pose de preensão para pegar objetos reais.</small></div><em>Demo de aplicação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>Integração ROS2</b><small>Conecte o braço ao ROS2 para percepção, planejamento e simulação.</small></div><em>Integração de sistema</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Desenvolvimento de Simulador Web</b><small>Aprenda a integração do Simulador Web com ROS2/MuJoCo para controle sincronizado virtual-real.</small></div><em>Desenvolvimento de simulação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_isaacsim/"><span className="step-index">7</span><div><b>Integração Isaac Sim</b><small>Simule o braço no Isaac Sim e sincronize com o robô real.</small></div><em>Simulação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_mit_control/"><span className="step-index">8</span><div><b>Controle de Posição MIT</b><small>Comece com o controle de posição MIT para o reBot Arm B601-RS.</small></div><em>Controle avançado</em></a>
      <a className="step-card" href="/pt-br/wrc_demo_tutorial/"><span className="step-index">9</span><div><b>Framework de Design de Agente Incorporado</b><small>Conecte um VLM ao braço para que comandos em linguagem natural acionem o agarramento baseado em visão com controle protegido por segurança.</small></div><em>Framework de agente</em></a>
    </div>
  </div>
</article>


<article id="rebot-dm" className="product-card rebot product-card--cover">
  <div className="product-head">
    <h3>reBot B601-DM Braço Robótico</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
  <a className="step-card" href="/pt-br/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Início Rápido</b><small>Verifique a alimentação, CAN, drivers e movimento básico.</small></div><em>Obrigatório para iniciantes</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>Coleta de Dados com LeRobot</b><small>Registre dados de teleoperação para aprendizado por imitação.</small></div><em>Dados de IA</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio e Meshcat</b><small>Carregue modelos, visualize movimento e aprenda cinemática.</small></div><em>Noções básicas de controle</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Demo de Agarramento Visual</b><small>Combine o braço e visão para agarramento no mundo real.</small></div><em>Demo de aplicação</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>Integração ROS2</b><small>Use ROS2 com MoveIt, percepção e aplicativos de sistema.</small></div><em>Integração de sistema</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Desenvolvimento de Simulador Web</b><small>Aprenda a integração do Simulador Web com ROS2/MuJoCo para controle sincronizado virtual-real.</small></div><em>Desenvolvimento de simulação</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_isaacsim/"><span className="step-index">7</span><div><b>Integração Isaac Sim</b><small>Implemente o reBot B601-DM no Isaac Sim para simulação, depuração e validação de algoritmos de controle.</small></div><em>Simulação</em></a>
</div>
  </div>
</article>


<article id="soarm" className="product-card soarm product-card--cover">
  <div className="product-head">
    <h3>SO100 / SO101 Braço Robótico</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Início Rápido</b><small>Instale o hardware, conecte, calibre e execute um teste básico.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Ferramenta de Depuração de Servo</b><small>Verifique o ID do servo, direção, ponto zero e comunicação.</small></div><em>Noções básicas de solução de problemas</em></a>
    <a className="step-card" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 e NVIDIA GR00T</b><small>Ajuste fino modelos VLA e faça a implantação no Jetson.</small></div><em>VLA avançado</em></a>
    <a className="step-card" href="/pt-br/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Treinamento de SO-ARM de Dois Braços</b><small>Colete dados, treine e execute tarefas de dois braços.</small></div><em>Tarefas complexas</em></a>
    <a className="step-card" href="/pt-br/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM com Mão Hábil Amazing Hand</b><small>Combine o SO-ARM101 com a Amazing Hand para LeRobot.</small></div><em>Integração de mão hábil</em></a>
    <a className="step-card" href="/pt-br/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>Simulação LeIsaac</b><small>Prepare-se para Sim2Real com modelos e tarefas simulados.</small></div><em>Noções básicas de simulação</em></a>
    <a className="step-card" href="/pt-br/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Aprendizado por Reforço no Isaac Lab</b><small>Treine políticas em simulação e revise o design de recompensas.</small></div><em>Treinamento avançado</em></a>
    <a className="step-card optional" href="/pt-br/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Experimente plataformas de terceiros para coleta de dados e treinamento.</small></div><em>Extensão opcional</em></a>
  </div>
  </div>
</article>


<article id="reachy" className="product-card reachy product-card--cover">
  <div className="product-head">
    <h3>Reachy Mini</h3>
  </div>
  <div className="product-body">
    <div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① Conheça o produto primeiro</h4>
              <a href="/pt-br/reachymini_intro/">Introdução ao Produto Reachy Mini</a>
              <a href="/pt-br/reachymini_getting_started/">Guia de Introdução ao ReachyMini</a>
            </div>
            <div className="mini-track">
              <h4>② Escolha sua plataforma</h4>
              <a href="/pt-br/reachymini_platforms_simulation_get_started/">Início Rápido da Simulação</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_get_started/">Guia de Configuração Sem Fio do Reachy Mini</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_usage/">Usando o Reachy Mini</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_hardware/">Ficha Técnica de Hardware do Reachy Mini</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_get_started/">Guia de Configuração do Reachy Mini Lite</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_usage/">Usando o Reachy Mini Lite</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_hardware/">Ficha Técnica de Hardware do Reachy Mini Lite</a>
            </div>
            <div className="mini-track">
              <h4>③ SDK e noções básicas de desenvolvimento</h4>
              <a href="/pt-br/reachymini_sdk_readme/">Reachy Mini SDK</a>
              <a href="/pt-br/reachymini_sdk_installation/">Guia de Instalação</a>
              <a href="/pt-br/reachymini_sdk_quickstart/">Guia de Início Rápido</a>
              <a href="/pt-br/reachymini_sdk_python-sdk/">Referência do Python SDK</a>
              <a href="/pt-br/reachymini_sdk_core-concept/">Conceitos Centrais e Arquitetura</a>
              <a href="/pt-br/reachymini_sdk_media-architecture/">Arquitetura de Mídia</a>
              <a href="/pt-br/reachymini_sdk_gstreamer-installation/">Instalação do GStreamer</a>
              <a href="/pt-br/reachymini_sdk_javascript-sdk/">JavaScript SDK e Aplicações Web</a>
            </div>
            <div className="mini-track">
              <h4>④ Aplicações e integração de IA</h4>
              <a href="/pt-br/reachymini_sdk_integration/">Integração e aplicações</a>
              <a href="/pt-br/reachymini_sdk_apps/">Criar e publicar aplicações</a>
              <a href="/pt-br/reachymini_conversation/">Integrar a API Doubao LLM</a>
              <a href="/pt-br/reachymini_vibe-code-with-your-agent/">Vibe Coding com um agente</a>
              <a href="/pt-br/reachymini_agents/">Guia de desenvolvimento para agentes de IA</a>
            </div>
            <div className="mini-track">
              <h4>⑤ Mídia, sistema e operações avançadas</h4>
              <a href="/pt-br/reachymini_platforms_reachy_mini_media_advanced_controls/">Controles avançados de mídia sem fio</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Controles avançados de mídia Lite</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_wizard/">Usar o Dynamixel Wizard para ler parâmetros do motor</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_development_workflow/">Fluxo de trabalho de desenvolvimento sem fio</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Instalar o Daemon a partir de um branch específico</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Regravar a imagem do Raspberry Pi OS</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_reset/">Redefinir via Bluetooth</a>
            </div>
            <div className="mini-track">
              <h4>⑥ Tutoriais de exemplo</h4>
              <a href="/pt-br/reachymini_examples_minimal_demo/">Demo mínima</a>
              <a href="/pt-br/reachymini_examples_goto_interpolation_playground/">Playground de interpolação Goto</a>
              <a href="/pt-br/reachymini_examples_look_at/">Olhar para uma imagem</a>
              <a href="/pt-br/reachymini_examples_mini_head_position_gui/">GUI de posição da cabeça</a>
              <a href="/pt-br/reachymini_examples_joy_controller/">Controlador de joystick</a>
              <a href="/pt-br/reachymini_examples_imu/">Exemplo de IMU</a>
              <a href="/pt-br/reachymini_examples_custom_media_manager/">Gerenciador de mídia personalizado</a>
              <a href="/pt-br/reachymini_examples_reachy_compliant_demo/">Demo de modo compliant</a>
              <a href="/pt-br/reachymini_examples_recorded_moves/">Movimentos gravados</a>
              <a href="/pt-br/reachymini_examples_rerun_viewer/">Visualizador Rerun</a>
              <a href="/pt-br/reachymini_examples_sequence/">Demo de sequência</a>
              <a href="/pt-br/reachymini_examples_sound_doa/">Direção de chegada do som</a>
              <a href="/pt-br/reachymini_examples_sound_play/">Reprodução de som</a>
              <a href="/pt-br/reachymini_examples_sound_record/">Gravação de som</a>
              <a href="/pt-br/reachymini_examples_take_picture/">Tirar uma foto</a>
            </div>
            <div className="mini-track">
              <h4>⑦ Solução de problemas e manutenção</h4>
              <a href="/pt-br/reachymini_troubleshooting/">Solução de problemas e FAQ</a>
              <a href="/pt-br/reachymini_troubleshooting_motors_diagnosis/">Diagnóstico e solução de problemas do motor</a>
              <a href="/pt-br/reachymini_troubleshooting_change_mic_fpc_cable/">Substituir o cabo FPC do microfone</a>
              <a href="/pt-br/reachymini_troubleshooting_spherical_joints_maintenance/">Manutenção da junta esférica</a>
              <a href="/pt-br/reachymini_troubleshooting_roadmap/">Roteiro do Reachy Mini</a>
            </div>
            <div className="mini-track">
              <h4>⑧ Referência de API</h4>
              <a href="/pt-br/reachymini_api_reachymini/">Referência da API ReachyMini</a>
              <a href="/pt-br/reachymini_api_rest-api/">Referência da REST API</a>
              <a href="/pt-br/reachymini_api_daemon/">API do Daemon</a>
              <a href="/pt-br/reachymini_api_motion/">API de movimento</a>
              <a href="/pt-br/reachymini_api_media/">API de mídia</a>
              <a href="/pt-br/reachymini_api_apps/">Referência da API de aplicações</a>
              <a href="/pt-br/reachymini_api_tools/">Referência da API de ferramentas</a>
              <a href="/pt-br/reachymini_api_utils/">Referência da API de utilitários</a>
            </div>
          </div>
  </div>
</article>


<article id="lekiwi" className="product-card lekiwi product-card--cover">
  <div className="product-head">
    <h3>Chassi móvel Lekiwi</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Início rápido do chassi móvel Lekiwi</b><small>Monte, conecte, teste o movimento e verifique a segurança.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/sound_follow_robot/"><span className="step-index">2</span><div><b>Demo de acompanhamento de som</b><small>Use entrada de som para conduzir uma demo móvel interativa.</small></div><em>Demo de aplicação</em></a>
  </div>
  </div>
</article>


<article id="stackforce" className="product-card stackforce product-card--cover">
  <div className="product-head">
    <h3>Robô Mini StackForce com rodas e pernas</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Início rápido do StackForce Mini</b><small>Conheça o hardware, faça a implantação básica e teste o movimento.</small></div><em>Curso de sistema</em></a>
  </div>
  </div>
</article>


<article id="starai" className="product-card starai">
  <div className="product-head">
    <h3>Braço robótico StarAI</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Guia de início rápido do braço robótico StarAI</b><small>Conecte o hardware, execute o controle básico e teste exemplos.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planejamento de movimento com MoveIt 2</b><small>Importe modelos e planeje trajetórias com o MoveIt 2.</small></div><em>ROS2 avançado</em></a>
    <a className="step-card" href="/pt-br/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI e NVIDIA GR00T</b><small>Construa controle de braço robótico com LLMs / VLA.</small></div><em>Controle por IA</em></a>
  </div>
  </div>
</article>


<article id="atom" className="product-card atom">
  <div className="product-head">
    <h3>Robô humanóide compacto Atom</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/atom_s/"><span className="step-index">1</span><div><b>Guia de primeiros passos do Atom-S</b><small>Ligue, conecte o controle remoto via web e grave sua primeira sequência de movimento de ensino contínuo.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/atom_x/"><span className="step-index">2</span><div><b>Guia de primeiros passos do Atom-X</b><small>O Atom-X funciona exatamente como o Atom-S — siga o mesmo fluxo de trabalho para começar rapidamente.</small></div><em>Mesma linha</em></a>
  </div>
  </div>
</article>


    </div>
  </section>

  <section id="rebot-hardware-inventory" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>Recursos open-source do rebot</h2>
      </div>
      <p>Comece com o B601-RS e o B601-DM. Cada diretório de hardware contém peças impressas em 3D, peças metálicas usinadas em CNC, peças compradas, a BOM, etapas de montagem da fonte de alimentação e o conjunto completo em STEP. Os pacotes de descrição fornecem modelos URDF / Mesh para simulação. Os suportes de câmera são compartilhados por ambos os braços.</p>
    </div>
    <div className="resource-columns">
      <div>
        <h4>B601-RS</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">Coleção de hardware</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">Pacote de descrição do braço robótico</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">Gêmeo digital / simulador web</a>
      </div>
      <div>
        <h4>B601-DM</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">Coleção de hardware</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">Pacote de descrição do braço robótico</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">Gêmeo digital / simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">Teste de desempenho em máquina real</a>
      </div>
      <div>
        <h4>Suportes de câmera (B601-RS / B601-DM)</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D435_Gemini2_Mount.step" target="_blank" rel="noopener noreferrer">Suporte de câmera Orbbec Gemini 2</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D405_305_Mount.step" target="_blank" rel="noopener noreferrer">Suporte de câmera Intel D405 / Gemini 305</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D455f_Mount.step" target="_blank" rel="noopener noreferrer">Suporte de câmera Intel RealSense D455f</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/UVC32_mount.step" target="_blank" rel="noopener noreferrer">Suporte de câmera UVC 32×32</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Coleção de suportes de câmera aérea global</a>
      </div>
      <div>
        <h4>Recursos compartilhados</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositório principal reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robô LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/yuyoujiang/rebot-arm-dli-isaacsim/blob/main/assets/workspace/box.usdz" target="_blank" rel="noopener noreferrer">Recurso de ambiente de coleta de dados</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demo de preensão visual</a>
      </div>
    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>Atuadores de Junta</h2>
      </div>
      <p>Para depuração de motores, protocolos de comunicação e solução de problemas de juntas.</p>
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
        <h2>Sensores</h2>
      </div>
      <p>Para preensão visual, SLAM, interação por voz e percepção do estado do robô.</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/pt-br/robosense_lidar/">RoboSense</a><a href="/pt-br/mid360/">Livox MID360</a><a href="/pt-br/a_loam/">Algoritmo A-LOAM</a><a href="/pt-br/slamtec/">Slamtec Series</a></div>
      <div><h4>Câmeras</h4><a href="/pt-br/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/pt-br/orbbec_gemini_335lg/">Câmera de Profundidade Gemini 335Lg</a><a href="/pt-br/orbbec_gemini336">Câmera de Profundidade Gemini 336</a><a href="/pt-br/sensing_gmsl_cameras">Câmera SENSING GMSL2</a><a href="/pt-br/ac1">RoboSense AC1</a><a href="/pt-br/orbbec_depth_camera_on_ros/">Orbbec e ROS</a><a href="/pt-br/orb_slam3_orbbec_gemini2/">ORB-SLAM3 e Gemini2</a><a href="/pt-br/csi_camera_on_ros/">Câmera CSI no Jetson</a><a href="/pt-br/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>Voz</h4><a href="/pt-br/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/pt-br/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>IMU</h4><a href="/pt-br/hexfellow_y200/">HEXFELLOW Y200</a><a href="/pt-br/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>Ecossistema de Software</h2>
      </div>
      <p>Após a configuração, avance para ROS, Isaac, PX4 ou VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecossistema ROS</h4><a href="/pt-br/installing_ros1/">Instalação do ROS 1</a><a href="/pt-br/install_ros2_humble/">Instalação do ROS 2</a><a href="/pt-br/install_isaacros/">Instalação do Isaac ROS</a><a href="/pt-br/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/pt-br/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/pt-br/install_isaaclab/">Instalação do Isaac Lab</a><a href="/pt-br/training_soarm101_policy_with_isaacLab/">Aprendizado por Reforço do Braço SO</a><a href="/pt-br/simulate_soarm101_by_leisaac/">Braço Robótico SO100 com IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/pt-br/control_px4_with_recomputer_jetson/">PX4 e Jetson</a><a href="/pt-br/object_tracking_with_reComputer_jetson_and_pX4/">Rastreamento de Objetos com PX4</a><a href="/pt-br/control_robotic_arm_via_gr00t/">StarAI e NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
