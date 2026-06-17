---
description: Este tópico apresenta a documentação de produtos de Robótica da Seeed Studio e cursos de aprendizado.
title: Robótica
keywords:
  - robotics
  - nvidia
  - ros
  - isaac
  - learning
  - reinforcement learning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robotics_page
last_update:
  date: 05/29/2025
  author: ZhuYaohui
createdAt: '2023-01-12'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/robotics_page/
---

# 🤖 Robótica

> *"A ciência de hoje é a tecnologia de amanhã." - Edward Teller*

<div className="robotic-tab-container">

  <input type="radio" id="tab-hardware" name="robo-tabs" defaultChecked className="tab-input-hidden" />
  <input type="radio" id="tab-learning" name="robo-tabs" className="tab-input-hidden" />

  <!-- 顶部 Tab 切换条 -->
  <div className="tab-nav-wrapper">
    <nav className="tab-nav">
      <label htmlFor="tab-hardware" className="tab-item">
        <span className="icon">📦</span>
        <span className="text">Wiki de Hardware</span>
      </label>
      <label htmlFor="tab-learning" className="tab-item">
        <span className="icon">🎓</span>
        <span className="text">Centro de Aprendizado</span>
        <span className="badge">Novo</span>
      </label>
      <div className="tab-slider"></div>
    </nav>
  </div>

  <!-- ==================== Tab 1: 硬件文档==================== -->
  <div className="tab-content content-hardware">

    <div className="quick-nav-container">
      <nav className="quick-nav">
        <a href="#robot-kits" className="nav-item">
          <span className="icon">📦</span>
          <span className="text">Kits de Robô</span>
          <div className="hover-effect"></div>
        </a>
        <a href="#actuators" className="nav-item">
          <span className="icon">⚙️</span>
          <span className="text">Atuadores Articulares</span>
          <div className="hover-effect"></div>
        </a>
        <a href="#sensors" className="nav-item">
          <span className="icon">👁️</span>
          <span className="text">Sensores</span>
          <div className="hover-effect"></div>
        </a>
        <a href="#software" className="nav-item">
          <span className="icon">💻</span>
          <span className="text">Software</span>
          <div className="hover-effect"></div>
        </a>
      </nav>
    </div>

    <div className="nav-grid">

      <h2 id="robot-kits">📦 Kits de Robô</h2>

      <div className="category-group">
        <div className="category-card robot-kits">


          <h3>🦾 reBot Arm</h3>
          <div className="card-container">
              <a href="/pt-br/rebot_b601_rs_getting_started/" className="content-card">
                <span className="text">Introdução ao reBot B601-RS</span>
                <span className="tag recommended">Novo</span>
              </a>
              <a href="/pt-br/rebot_b601_dm_getting_started/" className="content-card">
                <span className="text">Introdução ao reBot B601-DM</span>
                <span className="tag recommended">Novo</span>
              </a>
              <a href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/" className="content-card">
                <span className="text">reBot com Pinocchio</span>
              </a>
              <a href="/pt-br/rebot_arm_b601_dm_lerobot/" className="content-card">
                <span className="text">reBot com LeRobot</span>
              </a>
              <a href="/pt-br/rebot_arm_b601_dm_grasping_demo/" className="content-card">
                <span className="text">Demonstração de Agarramento Visual reBot B601-DM</span>
              </a>
              <a href="/pt-br/rebot_arm_b601_rs_grasping_demo/" className="content-card">
                <span className="text">Demonstração de Agarramento Visual reBot B601-RS</span>
              </a>
              <a href="/pt-br/rebot_arm_b601_dm_ros2_integration/" className="content-card">
                <span className="text">Integração ROS2 reBot B601-DM</span>
              </a>
              <a href="/pt-br/rebot_arm_b601_rs_ros2_integration/" className="content-card">
                <span className="text">Integração ROS2 reBot B601-RS</span>
              </a>
          </div>


          <h3> 🤗 Reachy</h3>
          <div className="card-container">
              <a href="/pt-br/reachymini_getting_started" className="content-card">
                <span className="text">Introdução ao Reachy Mini</span>
                <span className="tag recommended">Novo</span>
              </a>
          </div>


          <h3>🤗 SO-Arm</h3>
          <div className="card-container">
              <a href="/pt-br/lerobot_so100m_new/" className="content-card">
                <span className="text">Braço SO100/101</span>
              </a>
              <a href="/pt-br/simulate_soarm101_by_leisaac/" className="content-card">
                <span className="text">Braço SO10x com LeIsaac</span>
              </a>
              <a href="/pt-br/control_robotic_arm_via_phospho/" className="content-card">
                <span className="text">Phospho Lerobot</span>
              </a>
              <a href="/pt-br/training_soarm101_policy_with_isaacLab/" className="content-card">
                  <span className="text">Treinamento RL So Arm</span>
                  <span className="tag recommended">Novo</span>
              </a>
              <a href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/" className="content-card">
                  <span className="text">SO101 com NVIDIA GR00T</span>
                  <span className="tag recommended">Novo</span>
              </a>
          </div>

          <h3>🚗 Lekiwi</h3>
          <div className="card-container">
              <a href="/pt-br/lerobot_lekiwi/" className="content-card">
                <span className="text">Base Móvel Lekiwi</span>
              </a>
              <a href="/pt-br/sound_follow_robot/" className="content-card">
                <span className="text">Lekiwi Seguidor de Som</span>
              </a>
          </div>

          <h3>🦾 StarAI Arm</h3>
          <div className="card-container">
              <a href="/pt-br/lerobot_starai_arm/" className="content-card">
                <span className="text">Braço Robótico StarAI</span>
                <span className="tag recommended">Novo</span>
              </a>
              <a href="/pt-br/starai_arm_ros_moveit/" className="content-card">
                <span className="text">StarAI Arm MoveIt 2</span>
                <span className="tag recommended">Novo</span>
              </a>
              <a href="/pt-br/control_robotic_arm_via_gr00t" className="content-card">
                <span className="text">StarAI com NVIDIA GR00T</span>
              </a>
          </div>

          <h3>🦿Legged Wheel</h3>
          <div className="card-container">
              <a href="/pt-br/StackForce_Mini_Wheeled_Legged_Robot" className="content-card">
                <span className="text">Mini Robô com Rodas e Pernas</span>
                <span className="tag recommended">Novo</span>
              </a>
          </div>

          <h3>🖐️ Hand</h3>
          <div className="card-container">
              <a href="/pt-br/hand_amazinghand/" className="content-card">
                <span className="text">AmazingHand</span>
                <span className="tag recommended">Novo</span>
              </a>
          </div>

          <h3>🦀 End Effectors</h3>
          <div className="card-container">
              <a href="/pt-br/dm_gripper/" className="content-card">
                <span className="text">Garra DM</span>
                <span className="tag recommended">Novo</span>
              </a>
          </div>

        </div>
      </div>

      <h2 id="actuators">⚙️ Atuadores</h2>

      <div className="category-group">
      <div className="category-card actuators">

      <div className="card-container">
          <a href="/pt-br/myactuator_series/" className="content-card">
            <span className="text">Série MyActuator X</span>
          </a>
          <a href="/pt-br/damiao_series/" className="content-card">
            <span className="text">Série Damiao DM43</span>
          </a>
          <a href="/pt-br/feetech_servo/" className="content-card">
            <span className="text">Servo Feetech STS3215</span>
          </a>
          <a href="/pt-br/hightorque_control" className="content-card">
            <span className="text">Série HighTorque</span>
          </a>
          <a href="/pt-br/fashionstar_servo/" className="content-card">
            <span className="text">Série Fashionstar</span>
          </a>
          <a href="/pt-br/stackforce_series/" className="content-card">
            <span className="text">Série Stackforce</span>
          </a>
          <a href="/pt-br/robstride_control/" className="content-card">
            <span className="text">Controle RobStride</span>
            <span className="tag recommended">Novo</span>
          </a>
      </div>

      </div>
      </div>

      <h2 id="sensors">👁️ Sensores</h2>

      <div className="category-group">
      <div className="category-card sensors">

      <strong>📡 LiDAR</strong>  

      <div className="card-container">
          <a href="/pt-br/robosense_lidar/" className="content-card">
            <span className="text">RoboSense</span>
          </a>
          <a href="/pt-br/mid360/" className="content-card">
            <span className="text">MID360</span>
          </a>
          <a href="/pt-br/a_loam/" className="content-card">
            <span className="text">Algoritmo A-LOAM</span>
          </a>
          <a href="/pt-br/slamtec/" className="content-card">
            <span className="text">Série Slamtec</span>
          </a>
      </div>

      <strong>📷 Câmera</strong>  

      <div className="card-container">
          <a href="/pt-br/orbbec_gemini2/" className="content-card">
            <span className="text">Orbbec Gemini 2</span>
          </a>
          <a href="/pt-br/orbbec_gemini_335lg" className="content-card">
            <span className="text">Gemini 335Lg Depth</span>
            <span className="tag recommended">Novo</span>
          </a>
          <a href="/pt-br/orbbec_gemini336" className="content-card">
            <span className="text">Gemini 336 Depth</span>
            <span className="tag recommended">Novo</span>
          </a>
          <a href="/pt-br/sensing_gmsl_cameras" className="content-card">
            <span className="text">SENSING GMSL2</span>
          </a>
          <a href="/pt-br/ac1" className="content-card">
            <span className="text">RoboSense AC1</span>
            <span className="tag recommended">Novo</span>
          </a>
          <a href="/pt-br/orbbec_depth_camera_on_ros/" className="content-card">
            <span className="text">Orbbec com ROS</span>
          </a>
          <a href="/pt-br/orb_slam3_orbbec_gemini2/" className="content-card">
            <span className="text">ORB-SLAM3 Gemini2</span>
          </a>
          <a href="/pt-br/csi_camera_on_ros/" className="content-card">
            <span className="text">Câmera CSI no Jetson</span>
          </a>
          <a href="/pt-br/pycuvslam_recomputer_robotics/" className="content-card">
            <span className="text">PyCuVSLAM</span>
          </a>

      </div>

      <strong>🎤 Voz</strong>  

      <div className="card-container">
          <a href="/pt-br/ReSpeaker_Core_v2.0/" className="content-card">
            <span className="text">ReSpeaker Core v2.0</span>
          </a>
          <a href="/pt-br/ReSpeaker_Mic_Array_v2.0/" className="content-card">
            <span className="text">ReSpeaker Mic Array v2.0</span>
          </a>
      </div>

      <strong>🧭 IMU</strong>  

      <div className="card-container">
          <a href="/pt-br/hexfellow_y200/" className="content-card">
            <span className="text">HEXFELLOW Y200</span>
          </a>
          <a href="/pt-br/wheeltec_imu/" className="content-card">
            <span className="text">WHEELTEC IMU</span>
          </a>
      </div>

      </div>
      </div>

      <h2 id="software">💻 Software</h2>

      <div className="category-group">
      <div className="category-card software">

      <strong>Ecossistema ROS</strong>  

      <div className="card-container">
          <a href="/pt-br/installing_ros1/" className="content-card">
            <span className="text">Instalação do ROS 1</span>
          </a>
          <a href="/pt-br/install_ros2_humble/" className="content-card">
            <span className="text">Instalação do ROS 2</span>
          </a>
          <a href="/pt-br/install_isaacros/" className="content-card">
            <span className="text">Instalação do Isaac ROS</span>
          </a>
          <a href="/pt-br/isaac_ros_apriltag/" className="content-card">
            <span className="text">Isaac ROS AprilTag</span>
          </a>
          <a href="/pt-br/isaac_ros_visual_slam/" className="content-card">
            <span className="text">Isaac ROS V-SLAM</span>
          </a>
      </div>

      <strong>PX4</strong>  
      <div className="card-container">
      <a href="/pt-br/control_px4_with_recomputer_jetson/" className="content-card">
        <span className="text">PX4 com Jetson</span>
      </a>

      <a href="/pt-br/object_tracking_with_reComputer_jetson_and_pX4/" className="content-card">
        <span className="text">Rastreamento de Objetos (PX4)</span>
      </a>

      </div>

      <strong>NVIDIA Isaac</strong>  
      <div className="card-container">
      <a href="/pt-br/install_isaaclab/" className="content-card">
        <span className="text">Instalação do Isaac Lab</span>
      </a>
      <a href="/pt-br/training_soarm101_policy_with_isaacLab/" className="content-card">
        <span className="text">Treinamento RL do SO Arm</span>
        <span className="tag recommended">Novo</span>
      </a>
      <a href="/pt-br/simulate_soarm101_by_leisaac/" className="content-card">
        <span className="text">SO100 Arm Isaac Sim</span>
        <span className="tag recommended">Novo</span>
      </a>
      </div>

      <strong>VLA</strong>  
      <div className="card-container">
      <a href="/pt-br/control_robotic_arm_via_gr00t" className="content-card">
        <span className="text">StarAI com NVIDIA GR00T</span>
      </a>
      </div>

      </div>
      </div>

    </div>
  </div> 

  <!-- ==================== Tab 2: 学习中心 (Learning) ==================== -->
  <div className="tab-content content-learning">

    <div className="learning-intro">
        <h2>🎓 Academia de Robótica</h2>
        <p>Currículo abrangente cobrindo ROS, Simulação, Aprendizado por Reforço e controle avançado de robôs.</p>
    </div>

    <!-- Section 1: Core Software -->
    <h3 className="course-section-title">💻 Software Principal & Simulação</h3>
    <div className="course-grid">

      <!-- ROS Basics: 8 Lectures -->
      <a href="https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_ROS1_Turorial/2.English/1.%20ROS%20Basics%208%20lectures/README.md" className="course-card">
        <div className="course-cover c-ros1">ROS 1</div>
        <div className="course-info">
          <div className="course-meta"><span className="level beg">Iniciante</span> <span>⏱️ 8h</span></div>
          <h3>Noções básicas de ROS 1: 8 aulas</h3>
          <p>Aprenda sobre nós, tópicos, serviços e conceitos básicos</p>
          <span className="btn-start">Aprender</span>
        </div>
      </a>

      <!-- ROS Robot Simulation: 7 Lectures -->
      <a href="https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_ROS1_Turorial/2.English/2.%20ROS%20Robot%20Simulation%207%20Lectures/README.MD" className="course-card">
        <div className="course-cover c-ros1">ROS 1</div>
        <div className="course-info">
          <div className="course-meta"><span className="level beg">Iniciante</span> <span>⏱️ 8h</span></div>
          <h3>Simulação de robô ROS 1: 7 aulas.</h3>
          <p>	Do modelamento à navegação autônoma.</p>
          <span className="btn-start">Aprender</span>
        </div>
      </a>

      <!-- ROS 2 -->
      <a href="https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_ROS2_Tutorial/2.English/1.%20ROS%20Basics%208%20lectures/README.MD" className="course-card">
        <div className="course-cover c-ros2">ROS 2</div>
        <div className="course-info">
          <div className="course-meta"><span className="level int">Intermediário</span> <span>⏱️ 8h</span></div>
          <h3>Noções básicas de ROS 2 Humble: 8 aulas</h3>
          <p>Aprenda sobre nós, tópicos, serviços e conceitos básicos</p>
          <span className="btn-start">Aprender</span>
        </div>
      </a>



      <!-- Moveit2 -->
      <a href="" className="course-card">
        <div className="course-cover c-moveit">MoveIt 1/2</div>
        <div className="course-info">
          <div className="course-meta"><span className="level beg">Braço iniciante</span> <span>⏱️ 6h</span></div>
          <h3>MoveIt 1/2</h3>
          <p>Importe um manipulador personalizado no MoveIt 1/2 e implemente cinemática direta e inversa</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>

      <!-- Pinocchio -->
      <a href="" className="course-card">
        <div className="course-cover c-pinocchio">Pinocchio</div>
        <div className="course-info">
          <div className="course-meta"><span className="level int">Braço intermediário</span> <span>⏱️ 6h</span></div>
          <h3>Pinocchio</h3>
          <p>Aprenda o framework de robótica Pinocchio e desenvolva tarefas de cinemática e dinâmica para o seu próprio manipulador</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>


      <!-- Isaac Sim -->
      <a href="" className="course-card">
        <div className="course-cover c-isaac">ISAAC</div>
        <div className="course-info">
          <div className="course-meta"><span className="level adv">Avançado</span> <span>⏱️ 12h</span></div>
          <h3>NVIDIA Isaac Sim & Lab</h3>
          <p>Fluxos de trabalho Sim2Real, pipelines USD e criação de ambientes.</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>

      <!-- MuJoCo -->
      <a href="" className="course-card">
        <div className="course-cover c-mujoco">MuJoCo</div>
        <div className="course-info">
          <div className="course-meta"><span className="level adv">Avançado</span> <span>⏱️ 10h</span></div>
          <h3>Motor de física MuJoCo</h3>
          <p>Modelagem de dinâmica e simulação para controle ágil de robôs.</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>

      <!-- Reinforcement Learning -->
      <a href="" className="course-card">
        <div className="course-cover c-rl">RL</div>
        <div className="course-info">
          <div className="course-meta"><span className="level adv">Difícil</span> <span>⏱️ 20h</span></div>
          <h3>Aprendizado por Reforço</h3>
          <p>Pipelines de treinamento PPO, DRL e implantação no Jetson.</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>

    </div>

    <!-- Section 2: Robot Applications -->
    <h3 className="course-section-title" style={{marginTop: '3rem'}}>🤖 Aplicações em Robótica</h3>
    <div className="course-grid">

      <!-- Humanoid -->
      <a href="" className="course-card">
        <div className="course-cover c-human">Humanoide</div>
        <div className="course-info">
          <div className="course-meta"><span className="level beg">Iniciante</span> <span>⏱️ 5h</span></div>
          <h3>Curso de pequenos robôs humanoides com servo </h3>
          <p>Acionamento de hardware, coreografia de movimento e dança, e desenvolvimento secundário para pequenos robôs humanoides.</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>


      <!-- Lekiwi -->
      <a href="" className="course-card">
        <div className="course-cover c-lekiwi">Robô móvel</div>
        <div className="course-info">
          <div className="course-meta"><span className="level beg">Iniciante</span> <span>⏱️ 6h</span></div>
          <h3>Robótica móvel (Lekiwi)</h3>
          <p>SLAM, Navigation 2 e patrulhamento autônomo.</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>

      <!-- Robotic Arm -->
      <a href="" className="course-card">
        <div className="course-cover c-arm">Braço robótico</div>
        <div className="course-info">
          <div className="course-meta"><span className="level int">Intermediário</span> <span>⏱️ 15h</span></div>
          <h3>Curso do sistema de braço StarAI</h3>
          <p>Manipulador StarAI 6+1 DOF: cinemática, dinâmica, aprendizado por imitação e aprendizado por reforço avançado baseado em VLA</p>
          <span className="btn-plan">Planejamento</span>
        </div>
      </a>

      <!-- Wheeled-Legged -->
      <a href="https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_Mini_Wheeled_Legged_Robot/English/README.md" className="course-card">
        <div className="course-cover c-legged">Robô com Rodas e Pernas</div>
        <div className="course-info">
          <div className="course-meta"><span className="level int">Intermediário</span> <span>⏱️ 8h</span></div>
          <h3>Curso de Robôs com Rodas e Pernas Stackforce</h3>
          <p>Controle de equilíbrio e planejamento de movimento LQR para robôs híbridos.</p>
          <span className="btn-start">Aprendizado</span>
        </div>
      </a>

      <!-- ReachyMini -->
      <a href="https://github.com/Seeed-Projects/AI_Robotics_Academy/blob/main/Seeed_ReachyMini_Tutorial/2.English/README.md" className="course-card">
        <div className="course-cover c-reachy">Robô de Mesa</div>
        <div className="course-info">
          <div className="course-meta"><span className="level adv">Avançado</span> <span>⏱️ 8h</span></div>
          <h3>Tutorial ReachyMini 13 Aulas</h3>
          <p>Curso sistemático sobre operação básica, tutoriais de interface e desenvolvimento secundário do ReachyMini</p>
          <span className="btn-start">Aprendizado</span>
        </div>
      </a>


    </div>

  </div> 

</div> 

<style>{`
/* =========================================
   1. Tab Logic (CSS Only)
   ========================================= */
.robotic-tab-container { width: 100%; position: relative; }
.tab-input-hidden { display: none; }
.tab-nav-wrapper { display: flex; justify-content: center; margin-bottom: 2rem; margin-top: 1rem; }
.tab-nav {
  position: relative; display: flex; background: #f1f3f5; border-radius: 100px;
  padding: 5px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); user-select: none;
}
.tab-item {
  position: relative; z-index: 2; padding: 10px 30px; font-weight: 600; color: #666;
  cursor: pointer; transition: color 0.3s ease; display: flex; align-items: center; gap: 8px; font-size: 1rem; margin: 0;
}
.tab-item .icon { font-size: 1.2rem; }
.badge {
  background: #ff4757; color: white; font-size: 0.6rem; padding: 2px 6px;
  border-radius: 10px; margin-left: 5px; position: relative; top: -1px;
}
.tab-slider {
  position: absolute; top: 5px; bottom: 5px; left: 5px; width: calc(50% - 5px);
  background: white; border-radius: 100px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1); z-index: 1;
}

#tab-hardware:checked ~ .tab-nav-wrapper .tab-nav .tab-slider { transform: translateX(0); }
#tab-hardware:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-hardware"] { color: #4a90e2; }
#tab-learning:checked ~ .tab-nav-wrapper .tab-nav .tab-slider { transform: translateX(100%); }
#tab-learning:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-learning"] { color: #7b61ff; }

.tab-content { display: none; animation: fadeIn 0.4s ease; }
#tab-hardware:checked ~ .content-hardware { display: block; }
#tab-learning:checked ~ .content-learning { display: block; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

/* =========================================
   2. Hardware Styles (Original)
   ========================================= */
.quick-nav-container {
  margin: 2rem 0; padding: 1rem;
  background: radial-gradient(at 10% 20%, #f0fdf4 0%, transparent 50%), radial-gradient(at 90% 80%, #f0f7ff 0%, transparent 50%), white;
  border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: none;
}
.quick-nav { display: flex; justify-content: space-around; gap: 1rem; }
.nav-item {
  position: relative; padding: 0.8rem 1.5rem; border-radius: 12px; display: flex; margin: 6px 6px;
  flex-direction: column; align-items: center; text-decoration: none !important; color: #333;
  font-weight: 500; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); z-index: 1; width: 100%;
}
.nav-item .icon { font-size: 1.8rem; margin-bottom: 0.5rem; transition: transform 0.3s; }
.nav-item .text { font-size: 0.95rem; white-space: nowrap; }
.nav-item .hover-effect {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px; transition: height 0.3s ease; z-index: -1;
}
.nav-item:hover { transform: translateY(-3px); box-shadow: 0 6px 12px rgba(0,0,0,0.1); color: white; }
.nav-item:hover .icon { transform: scale(1.2) rotate(10deg); }
.nav-item:hover .hover-effect { height: 100%; }

.nav-grid { display: block; gap: 2rem; margin-top: 2rem; }
.category-group { margin-bottom: 2.5rem; }
.category-card {
  position: relative; padding: 1.8rem; border-radius: 16px; background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: all 0.3s ease; overflow: hidden; border: 1px solid transparent;
}
.category-card::before { content: ""; position: absolute; top: 0; left: 0; width: 6px; height: 100%; }
.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

.card-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin-top: 12px; margin-bottom: 1.5rem; }
.content-card {
  display: flex; align-items: center; justify-content: space-between; padding: 10px 16px;
  background: #f9fafb; border: 1px solid transparent; border-radius: 8px; text-decoration: none !important;
  color: var(--ifm-font-color-base); font-weight: 500; font-size: 0.9rem; transition: all 0.25s ease; position: relative; overflow: hidden;
}
.content-card .text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-right: 8px; z-index: 2; }
.content-card:hover {
  background: #fff; border-color: #4a90e2; box-shadow: 0 4px 12px rgba(74, 144, 226, 0.15);
  transform: translateY(-2px); color: #4a90e2;
}
.content-card::after { content: ""; position: absolute; top: 0; left: 0; width: 0; height: 100%; background: #4a90e2; transition: width 0.2s ease; }
.content-card:hover::after { width: 4px; }

.tag { font-size: 0.7rem; padding: 2px 8px; border-radius: 12px; font-weight: 700; text-transform: uppercase; flex-shrink: 0; z-index: 2; }
.recommended { background: rgba(255, 107, 107, 0.1); color: #ff6b6b; border: 1px solid rgba(255, 107, 107, 0.2); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.2); } 70% { box-shadow: 0 0 0 4px rgba(255, 107, 107, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); } }

/* =========================================
   3. Learning Styles
   ========================================= */
.learning-intro { text-align: center; margin-bottom: 2rem; }
.learning-intro h2 { margin-bottom: 0.5rem; background: -webkit-linear-gradient(45deg, #7b61ff, #4a90e2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.learning-intro p { color: #666; max-width: 600px; margin: 0 auto; }

.course-section-title {
  margin: 1.5rem 0 1rem; font-size: 1.2rem; font-weight: 700; color: #444; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;
}

.course-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
.course-card {
  background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-decoration: none !important; transition: transform 0.3s, box-shadow 0.3s; border: 1px solid #eee; display: flex; flex-direction: column;
}
.course-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }

/* Covers for different topics */
.course-cover { height: 100px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 800; color: white; letter-spacing: 1px; }

/* AI & Software Colors */
.c-ros2 { background: linear-gradient(135deg, #10b981, #059669); }
.c-ros1 { background: linear-gradient(135deg, #4b5563, #374151); }
.c-pinocchio { background: linear-gradient(135deg, #3b82f6, #fa000c); }
.c-moveit { background: linear-gradient(135deg, #f90306, #ea000c); }
.c-isaac { background: linear-gradient(135deg, #76b900, #366e00); }
.c-rl { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
.c-mujoco { background: linear-gradient(135deg, #f97316, #ea580c); }

/* Robot Platform Colors */
.c-arm { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.c-legged { background: linear-gradient(135deg, #eab308, #ca8a04); }
.c-human { background: linear-gradient(135deg, #ec4899, #db2777); }
.c-reachy { background: linear-gradient(135deg, #14b8a6, #0d9488); }
.c-lekiwi { background: linear-gradient(135deg, #06b6d4, #0891b2); }
.c-gray { background: #eee; color: #aaa; }

.course-info { padding: 1rem; flex-grow: 1; display: flex; flex-direction: column; }
.course-meta { display: flex; justify-content: space-between; font-size: 0.75rem; color: #888; margin-bottom: 0.5rem; }
.level { font-weight: 700; text-transform: uppercase; }
.beg { color: #059669; } .int { color: #d97706; } .adv { color: #dc2626; }

.course-info h3 { font-size: 1.1rem; margin: 0 0 0.5rem 0; color: #1f2937; line-height: 1.3; }
.course-info p { font-size: 0.85rem; color: #666; line-height: 1.5; margin-bottom: 1.5rem; flex-grow: 1; }

.btn-start {
  display: block; text-align: center; padding: 8px 0; background:  #ecfdf5; color: #059669; font-weight: 600; font-size: 0.9rem; border-radius: 8px; transition: background 0.2s;
}
.course-card:hover .btn-start { background: #10b981; color: white; }

.btn-plan {
  display: block; 
  text-align: center; 
  padding: 8px 0; 
  font-weight: 600; 
  font-size: 0.9rem; 
  border-radius: 8px; 
  transition: all 0.2s;

  /* 差异化设计 */
  background: #fff7ed; /* 极浅的橙色背景 */
  color: #ea580c;      /* 较深的橙色文字 */
  cursor: default;
}

/* Efeito de hover: manter o tom quente, diferente do botão Start que inverte as cores, para evitar roubar a atenção */
.course-card:hover .btn-plan {
  background: #ffedd5;
  color: #c2410c;
}


/* =========================================
   4. Adaptação ao modo escuro
   ========================================= */
html[data-theme='dark'] .tab-nav { background: #2f2f32; box-shadow: none; }
html[data-theme='dark'] .tab-slider { background: #444; }
html[data-theme='dark'] .tab-item { color: #aaa; }
html[data-theme='dark'] #tab-hardware:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-hardware"] { color: #60a5fa; }
html[data-theme='dark'] #tab-learning:checked ~ .tab-nav-wrapper .tab-nav label[htmlFor="tab-learning"] { color: #a78bfa; }

/* Modo escuro de hardware */
html[data-theme='dark'] .quick-nav-container { background: linear-gradient(135deg,rgb(42, 44, 49) 0%,rgb(32, 32, 33) 100%); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: none; }
html[data-theme='dark'] .nav-item { color: #e5e7eb; background: rgb(47, 50, 57); box-shadow: 0 2px 4px rgba(0,0,0,0.4); }
html[data-theme='dark'] .category-card { background: #1b1b1d; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border-color: #303033; }
html[data-theme='dark'] .content-card { background: #242526; color: #e5e7eb; border-color: #303033; }
html[data-theme='dark'] .content-card:hover { background: #2f2f32; border-color: #60a5fa; color: #60a5fa; }
html[data-theme='dark'] .content-card::after { background: #60a5fa; }
html[data-theme='dark'] .recommended { background: rgba(255, 107, 107, 0.15); color: #ff8e8e; border-color: rgba(255, 142, 142, 0.3); }
html[data-theme='dark'] h2, html[data-theme='dark'] h3 { color: #f9fafb; }

/* Modo escuro de aprendizado */
html[data-theme='dark'] .course-card { background: #1b1b1d; border-color: #303033; }
html[data-theme='dark'] .course-info h3 { color: #f3f4f6; }
html[data-theme='dark'] .course-info p { color: #9ca3af; }
html[data-theme='dark'] .btn-start { background: #2f2f32; color: #60a5fa; }
html[data-theme='dark'] .course-card:hover .btn-start { background: #60a5fa; color: white; }
html[data-theme='dark'] .btn-plan { background: #2f2f32; color: #ea580c; }
html[data-theme='dark'] .course-card:hover .btn-plan { background: #ea580c; color: white; }
html[data-theme='dark'] .learning-section-title { color: #ccc; border-bottom-color: #444; }

@media (max-width: 768px) {
  .quick-nav { flex-direction: column; gap: 0.5rem; }
  .nav-item { flex-direction: row; justify-content: start; padding: 0.8rem 1rem; }
  .nav-item .icon { margin-bottom: 0; margin-right: 0.8rem; }
  .card-container, .course-grid { grid-template-columns: 1fr; }
  .category-card { padding: 1.2rem; }
  .tab-nav { width: 100%; }
  .tab-item { padding: 10px 15px; font-size: 0.9rem; flex: 1; justify-content: center; }
}
`}</style>
