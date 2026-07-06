---
description: Este wiki fornece um fluxo de trabalho completo para usar o reBot Arm B601-RS com o LeRobot, incluindo configuração de ambiente, calibração, teleoperação, integração de câmera, coleta de conjunto de dados, treinamento, avaliação e implantação avançada.
title: Introdução ao reBot Arm B601-RS no LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg
slug: /rebot_arm_b601_rs_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-04
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-17'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_lerobot/
---

# Introdução ao reBot Arm B601-RS no LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div className="hero-copy">
      <span className="eyebrow">reBot Arm × LeRobot</span>
      <h2>Comece com teleoperação, depois construa conjuntos de dados, treine políticas e faça a implantação em um braço robótico real</h2>
      <p>Este guia é para usuários que já concluíram o início rápido do reBot Arm B601-RS e a configuração básica de hardware. Ele orienta você pela instalação do LeRobot, calibração do braço, teleoperação, integração de câmera, coleta de conjunto de dados, treinamento, avaliação e fluxos de trabalho de implantação avançada.</p>
      <div className="hero-actions">
        <a href="#quick-path">Ver trilha de aprendizado</a>
        <a href="#install-lerobot">Instalar LeRobot</a>
        <a href="#record-dataset">Iniciar coleta de conjunto de dados</a>
      </div>
    </div>
    <div className="hero-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
      <span>Teleoperação · Conjunto de dados · Treinamento · Avaliação</span>
    </div>
  </section>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Alerta de segurança: limpe a área de trabalho do robô antes de executar</strong>
    <p>Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor, objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer afastado da faixa de movimento do robô.</p>
    <ul>
      <li>Não toque nas juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de executar calibração, MotorBridge, teleoperação, coleta de conjunto de dados, controle de IK, controle de trajetória, compensação de gravidade, preensão visual, ações ROS2 ou execução MoveIt, certifique-se de que o braço robótico esteja firmemente fixado.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores PCAN-USB, conectores XT30 ou conectores de energia.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="reBot LeRobot quick navigation">
    <a href="#quick-path">Trilha</a>
    <a href="#install-lerobot">Instalar</a>
    <a href="#calibration">Calibrar</a>
    <a href="#teleoperation">Teleoperar</a>
    <a href="#camera">Câmeras</a>
    <a href="#record-dataset">Conjunto de dados</a>
    <a href="#training">Treinamento</a>
    <a href="#faq">FAQ</a>
  </nav>

  <section id="quick-path" className="section-card">
    <div className="section-title">
      <span>Comece aqui</span>
      <h2>Fluxo de trabalho recomendado</h2>
      <p>Se este for o seu primeiro projeto com LeRobot, siga a sequência abaixo. Se você já estiver familiarizado com o LeRobot, pode ir diretamente para o módulo de que precisa.</p>
    </div>

    <div className="path-grid">
      <a className="path-card" href="#install-lerobot"><b>1. Instalar LeRobot</b><small>Crie o ambiente conda, instale o fork do LeRobot verificado pela Seeed e instale os pacotes necessários.</small></a>
      <a className="path-card" href="#calibration"><b>2. Calibrar braços</b><small>Calibre o braço seguidor B601-RS e o braço líder reBot 102 para que suas posições físicas coincidam.</small></a>
      <a className="path-card" href="#teleoperation"><b>3. Teleoperar</b><small>Execute a teleoperação líder-seguidor e verifique se o braço seguidor se move de forma correta e segura.</small></a>
      <a className="path-card" href="#camera"><b>4. Adicionar câmeras</b><small>Conecte câmeras OpenCV, RealSense ou Orbbec e verifique os fluxos de vídeo antes de gravar dados.</small></a>
      <a className="path-card" href="#record-dataset"><b>5. Registrar conjuntos de dados</b><small>Colete demonstrações de tarefas localmente ou envie-as para o Hugging Face Hub.</small></a>
      <a className="path-card" href="#training"><b>6. Treinar e avaliar</b><small>Comece com ACT, depois experimente SmolVLA, Pi0 / Pi0.5 ou GR00T para experimentos mais avançados.</small></a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Visão geral</span>
      <h2>Visão geral do projeto</h2>
      <p>O reBot Arm B601-RS é um projeto de braço robótico de código aberto da Seeed Studio. Ele foi projetado para reduzir a barreira de entrada para aprendizado de IA incorporada, fornecendo arquivos mecânicos abertos, listas de materiais (BOMs), software e tutoriais.</p>
    </div>

    <div className="info-grid">
      <div><strong>Braço robótico</strong><span>Braço seguidor reBot Arm B601-RS de 6 DOF com uma versão de motor RoboStride usando comunicação PCAN-USB / SocketCAN.</span></div>
      <div><strong>Braço líder</strong><span>Braço líder reBot Arm 102 para teleoperação em tempo real e coleta de demonstrações.</span></div>
      <div><strong>Framework</strong><span>LeRobot para teleoperação, gravação de conjunto de dados, treinamento, avaliação e implantação de políticas.</span></div>
      <div><strong>Comunicação</strong><span>PCAN-USB mapeado como <code>can0</code>, configurado a 1 Mbps por meio de SocketCAN.</span></div>
      <div><strong>Plataforma de computação</strong><span>Estação de trabalho Ubuntu x86, estação de trabalho com GPU NVIDIA ou plataforma Jetson Orin, dependendo da tarefa.</span></div>
    </div>

    <details className="content-details">
      <summary>Vídeo de introdução ao projeto</summary>
      <div className="placeholder-box">Link do vídeo a ser adicionado</div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Sistema</span>
      <h2>Ambiente inicial do sistema</h2>
      <p>Comece a partir de um ambiente limpo. Para usuários Jetson, certifique-se de que PyTorch e Torchvision com suporte a GPU estejam instalados antes de instalar as dependências do LeRobot.</p>
    </div>

    <div className="two-col">
      <div className="check-card">
        <h3>Ubuntu x86</h3>
        <ul>
          <li>Ubuntu 22.04</li>
          <li>CUDA 12+</li>
          <li>Python 3.10 / 3.12 dependendo da sua configuração</li>
          <li>Torch 2.6 ou uma build CUDA compatível</li>
        </ul>
      </div>
      <div className="check-card">
        <h3>Jetson Orin</h3>
        <ul>
          <li>JetPack 6.0 ou 6.1</li>
          <li>Python 3.10</li>
          <li>Torch 2.3+</li>
          <li>Instale o PyTorch com suporte a GPU antes do LeRobot</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Passo 1</span>
      <h2>Instalar LeRobot</h2>
      <p>Esta seção prepara o ambiente de trabalho, instala o repositório LeRobot verificado pela Seeed e adiciona os pacotes específicos do reBot.</p>
    </div>

    <details className="content-details">
      <summary>Vídeo de instalação</summary>
      <div className="placeholder-box">Link do vídeo a ser adicionado</div>
    </details>

    <div className="command-card">
      <h3>1. Instalar Miniforge</h3>
      <pre><code>{`cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname - m).sh"
bash Miniforge3-$(uname)-$(uname - m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Clonar o repositório LeRobot</h3>
      <pre><code>{`mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git`}</code></pre>
    </div>

    <div className="command-card">
      <h3>3. Criar o ambiente conda e instalar pacotes</h3>
      <p>Use o repositório LeRobot verificado pela Seeed para este guia. O repositório LeRobot upstream muda rapidamente, portanto comandos e formatos de conjunto de dados podem ser diferentes.</p>
      <pre><code>{`cd ~/rebot_lerobot

conda create -y -n lerobot python=3.12
conda activate lerobot

pip install -e ./lerobot
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>4. Instalar ffmpeg</h3>
      <pre><code>{`conda install ffmpeg -c conda-forge

# If you encounter compatibility issues:
conda install ffmpeg=7.1.1 -c conda-forge

# Check libsvtav1 support:
ffmpeg -encoders | grep svtav1`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Configuração especial para Jetson JetPack 6.0+</summary>
      <p>Pule esta etapa em PCs comuns. No Jetson, instale primeiro o PyTorch e o Torchvision com suporte a GPU e, em seguida, aplique os seguintes ajustes de dependência quando necessário.</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Verificar PyTorch e Torchvision</summary>
      <p>A instalação via pip pode substituir seu PyTorch com suporte a GPU por uma build de CPU. Sempre verifique a disponibilidade de CUDA antes de continuar.</p>
      <pre><code>{`python3

import torch
print(torch.cuda.is_available())  # Expected output: True`}</code></pre>
    </details>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="calibration" className="section-card">
    <div className="section-title">
      <span>Passo 2</span>
      <h2>Calibrar o braço robótico</h2>
      <p>A calibração alinha as posições físicas dos braços líder e seguidor. Isso é essencial para teleoperação, coleta de conjunto de dados e transferência de políticas entre robôs.</p>
    </div>

    <details className="content-details">
      <summary>Vídeo de calibração</summary>
      <div className="placeholder-box">Link do vídeo a ser adicionado</div>
    </details>

    <div className="warning-card">
      <strong>Nota sobre recalibração</strong>
      <span>Se você precisar recalibrar, exclua os arquivos de calibração em <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> ou <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code> e execute a calibração novamente.</span>
    </div>

    <div className="command-card">
      <h3>1. Conceder permissões seriais</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*  # Leader arm

# Follower arm / SocketCAN interface
sudo modprobe peak_usb
ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Calibrar o braço seguidor B601-RS</h3>
      <p>Para o B601-RS, a calibração do seguidor geralmente é necessária apenas uma vez após a montagem. A garra deve estar totalmente fechada ao seguir a referência de posição zero.</p>
      <pre><code>{`sudo modprobe peak_usb
ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan`}</code></pre>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg" />
      </div>
    </div>

    <details className="content-details">
      <summary>3. Calibrar o braço líder reBot 102</summary>
      <div className="warning-card">
        <strong>Importante</strong>
        <span>Quando a calibração começa, a posição atual de cada servo no braço líder reBot 102 é redefinida como zero. Os limites das juntas são definidos no arquivo de configuração, não nos dados de calibração.</span>
      </div>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
      </div>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
      <p>Se esta for sua primeira conexão e o dispositivo serial se desconectar imediatamente, o <code>brltty</code> pode estar ocupando a porta. Remova-o com <code>sudo apt remove brltty</code>.</p>
    </details>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="teleoperation" className="section-card">
    <div className="section-title">
      <span>Etapa 3</span>
      <h2>Teste de teleoperação</h2>
      <p>Após a calibração, execute um teste básico de teleoperação líder-seguidor antes de adicionar câmeras ou gravar conjuntos de dados.</p>
    </div>

    <div className="danger-card">
      <strong>Lembrete de segurança</strong>
      <span>Se a alimentação, USB, CAN ou cabos de sinal se desconectarem durante a teleoperação, pare o programa primeiro, retorne o braço para a posição zero, reconecte a alimentação e reinicie o programa.</span>
    </div>

    <div className="command-card">
      <h3>Executar teleoperação</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*
sudo ip link set can0 type can bitrate 1000000 restart-ms 100

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Vídeo de demonstração de teleoperação</summary>
      <div className="placeholder-box">Link do vídeo a ser adicionado</div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Etapa 4</span>
      <h2>Adicionar câmeras</h2>
      <p>As câmeras fornecem observações visuais para coleta de conjuntos de dados e treinamento de políticas. Comece com uma câmera OpenCV simples e depois passe para RealSense ou Orbbec se você precisar de dados RGB-D.</p>
    </div>

    <div className="camera-grid">
      <details className="content-details" open>
        <summary>Câmera genérica USB / OpenCV</summary>
        <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>Para várias câmeras USB, evite conectar muitas câmeras de alta resolução no mesmo hub USB.</p>
      </details>

      <details className="content-details">
        <summary>RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{
      d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
      d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
      </details>

      <details className="content-details">
        <summary>Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras orbbec

lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{
      orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
      orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>Se você vir <code>No Orbbec camera found</code>, execute <code>lerobot-find-cameras orbbec</code> e atualize o número de série na configuração da sua câmera.</p>
      </details>
    </div>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="record-dataset" className="section-card">
    <div className="section-title">
      <span>Etapa 5</span>
      <h2>Coletar conjuntos de dados</h2>
      <p>Quando a teleoperação e as câmeras estiverem estáveis, grave demonstrações para sua tarefa alvo. Você pode salvar conjuntos de dados localmente ou enviá-los para o Hugging Face Hub.</p>
    </div>

    <details className="content-details">
      <summary>Vídeo de coleta de conjunto de dados</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/PLACEHOLDER" title="Dataset collection video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <details className="content-details" open>
      <summary>Salvar o conjunto de dados localmente</summary>
      <pre><code>{`lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>O conjunto de dados será salvo em <code>{`~/.cache/huggingface/lerobot`}</code> usando o ID de repositório que você forneceu.</p>
    </details>

    <details className="content-details">
      <summary>Enviar o conjunto de dados para o Hugging Face Hub</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential

HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Pegue o cubo preto" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Controles de teclado durante a gravação</summary>
      <div className="content-table">
        <table>
          <thead><tr><th>Tecla</th><th>Ação</th></tr></thead>
          <tbody>
            <tr><td>Seta para a direita</td><td>Encerre o episódio atual ou redefina antecipadamente e passe para o próximo.</td></tr>
            <tr><td>Seta para a esquerda</td><td>Cancele o episódio atual e grave-o novamente.</td></tr>
            <tr><td>ESC</td><td>Pare a sessão imediatamente, codifique os vídeos e envie o conjunto de dados se estiver habilitado.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Se os eventos de teclado não responderem, tente <code>pip install pynput==1.6.8</code>.</p>
    </details>

    <div className="tip-card">
      <strong>Dicas de qualidade do conjunto de dados</strong>
      <span>Mantenha as posições das câmeras fixas, mantenha a iluminação estável, certifique-se de que o objeto alvo esteja visível e colete episódios suficientes. Para uma tarefa simples de agarrar, comece com pelo menos 50 episódios quando possível.</span>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Conjunto de dados</span>
      <h2>Visualizar e reproduzir conjuntos de dados</h2>
      <p>Antes do treinamento, inspecione o conjunto de dados gravado e verifique se as imagens, estados, ações e descrições de tarefas estão corretos.</p>
    </div>

    <div className="command-card">
      <h3>Visualizar um conjunto de dados</h3>
      <pre><code>{`lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Reproduzir um episódio no robô</summary>
      <p>Esta etapa pode ser instável, portanto é opcional.</p>
      <pre><code>{`lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="training" className="section-card">
    <div className="section-title">
      <span>Etapa 6</span>
      <h2>Treinamento e avaliação</h2>
      <p>Comece com ACT para validar seu pipeline de dados. Depois disso, você pode tentar SmolVLA, Pi0 / Pi0.5, GR00T N1.5, PEFT, treinamento com várias GPUs ou inferência assíncrona.</p>
    </div>

    <details className="content-details" open>
      <summary>ACT: política inicial recomendada</summary>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <p>Para GPUs da série RTX 50, adicione <code>--dataset.video_backend=pyav</code> se as APIs de vídeo do torchvision causarem erros.</p>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Colocar o bloco de lego na caixa transparente" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>

    <details className="content-details">
      <summary>SmolVLA: modelo base de robô leve</summary>
      <p>SmolVLA é um modelo base leve para ajuste fino em seus próprios conjuntos de dados LeRobot. Ele usa imagens de câmera, estados do robô e uma instrução de tarefa em linguagem natural para prever blocos de ações.</p>
      <pre><code>{`pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Agarrar um bloco de lego e colocá-lo na lixeira." \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Pi0 / Pi0.5: treinamento de política VLA</summary>
      <p>Pi0 e Pi0.5 são políticas de Visão-Linguagem-Ação. Elas são úteis quando você deseja explorar controle robótico condicionado por linguagem.</p>
      <pre><code>{`pip install -e ".[pi]"

lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=\${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false

lerobot-train \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=\${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}</code></pre>
    </details>

    <details className="content-details">
      <summary>GR00T N1.5: ajuste fino avançado de modelo base</summary>
      <p>GR00T N1.5 tem requisitos mais rígidos de CUDA e FlashAttention. Faça o ACT ou o Pi0 funcionar primeiro, depois tente o GR00T.</p>
      <pre><code>{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pegue o cubo preto e coloque-o na caixa" \
  --policy.path=\${HF_USER}/groot-rebot`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Retomar o treinamento a partir de um checkpoint</summary>
      <pre><code>{`lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}</code></pre>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Avançado</span>
      <h2>Opções avançadas</h2>
      <p>Estas seções são opcionais. Use-as depois de concluir com sucesso a coleta básica de conjuntos de dados e o treinamento ACT.</p>
    </div>

    <details className="content-details">
      <summary>Ajuste fino eficiente com PEFT / LoRA</summary>
      <pre><code>{`pip install -e ".[peft]"
pip install "lerobot[peft]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Treinamento com várias GPUs</summary>
      <pre><code>{`pip install accelerate

accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}</code></pre>
      <p>O treinamento com várias GPUs aumenta o tamanho efetivo do batch. Você pode precisar reduzir as etapas de treinamento ou ajustar a taxa de aprendizado dependendo da sua configuração.</p>
    </details>

    <details className="content-details">
      <summary>Implantação de inferência assíncrona</summary>
      <p>A inferência assíncrona permite que o robô execute o bloco de ação atual enquanto o servidor calcula o próximo bloco. Ela é útil para modelos maiores ou inferência remota.</p>
      <pre><code>{`pip install -e ".[async]"`}</code></pre>

python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080

python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false`}</code></pre>
      <div className="danger-card">
        <strong>Nota de segurança</strong>
        <span>Não exponha um servidor de inferência assíncrona sem autenticação diretamente à internet pública. Use VPN, tunelamento SSH ou restrições rígidas de IP de origem.</span>
      </div>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>Perguntas frequentes</span>
      <h2>Problemas comuns</h2>
    </div>

    <details className="content-details">
      <summary>Por que usar o repositório Seeed-Projects/lerobot?</summary>
      <p>Este guia foi validado com <code>https://github.com/Seeed-Projects/lerobot.git</code>. O repositório LeRobot upstream muda rapidamente e pode introduzir diferenças de comandos, dependências ou formato de conjunto de dados.</p>
    </details>

    <details className="content-details">
      <summary>Não é possível conectar a /dev/ttyUSB0 ou can0</summary>
      <p>Se o dispositivo serial do líder existir, mas a conexão falhar, conceda permissões seriais. Para o seguidor RS, inicialize a interface PCAN-USB / SocketCAN como <code>can0</code>:</p>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*

sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Nenhum fluxo válido encontrado no arquivo de entrada</summary>
      <p>Instale o ffmpeg 7.1.1:</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Atalhos de teclado não respondem durante a gravação</summary>
      <p>Verifique a variável de ambiente <code>$DISPLAY</code> no Linux. Você também pode tentar fazer downgrade do pynput:</p>
      <pre><code>{`pip install pynput==1.6.8`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Dicas de treinamento e coleta de dados</summary>
      <p>Mantenha as câmeras fixas, mantenha a iluminação estável, evite fundos instáveis, colete episódios suficientes e não interrompa a coleta de dados antes que o LeRobot calcule as estatísticas do conjunto de dados.</p>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Referências</span>
      <h2>Referências</h2>
    </div>
    <div className="reference-grid">
      <a href="https://wiki.seeedstudio.com/pt-br/lerobot_so100m/">Braço Seeed SO100 no LeRobot</a>
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot">Jetson Containers</a>
      <a href="https://www.jetson-ai-lab.com/lerobot.html">Jetson AI Lab</a>
      <a href="https://diffusion-policy.cs.columbia.edu/">Diffusion Policy</a>
      <a href="https://tonyzhaozh.github.io/aloha/">ACT / ALOHA</a>
      <a href="https://sjlee.cc/vq-bet/">VQ-BeT</a>
    </div>
  </section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Trilha de aprendizado do reBot B601-RS</h2>
    <p>Estes tutoriais foram projetados para serem seguidos em ordem: Introdução → LeRobot → Pinocchio → Visual Grasping → ROS2. Use os links abaixo para alternar entre os módulos.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Introdução</strong><span>Conclua o unboxing, a fiação, as verificações de energia, a configuração do PCAN-USB, a calibração e os primeiros testes de movimento.</span></span>
      <span className="course-tag">Comece aqui</span>
    </a>
    <a className="course-path-item active" href="/pt-br/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Teleoperação e Coleta de Dados com LeRobot</strong><span>Teleopere o braço, conecte câmeras, grave conjuntos de dados e prepare tarefas de aprendizado por imitação.</span></span>
      <span className="course-tag">Coleta de dados</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualização de Cinemática com Pinocchio</strong><span>Entenda modelos de robôs, juntas, referenciais de coordenadas, cinemática direta/inversa, trajetórias e compensação de gravidade.</span></span>
      <span className="course-tag">Controle</span>
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
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.hero-card img { width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .notice-grid, .env-grid, .tips-grid, .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .feature-grid div, .notice-card, .env-grid div, .tips-grid div, .info-grid div, .check-card, .info-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; box-shadow: 0 10px 24px rgba(15,23,42,0.035); }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .feature-grid b, .feature-grid strong, .notice-card strong, .tips-grid b, .info-grid strong, .check-card h3, .info-card strong { color: var(--rb-text); }
.path-card small, .path-card span, .feature-grid span, .notice-card span, .tips-grid span, .info-grid span, .info-card p, .check-card li { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after { content: "Collapse"; }
.content-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child { margin-bottom: 1rem; }
.command-card, .command-flow > div, .sub-step-block { padding: 1rem; margin: 1rem 0; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.callout, .tip-card, .warning-card, .danger-card, .quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p, .tip-card span, .warning-card span, .danger-card span { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; display: block; }
.callout.warning, .warning-card { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger, .danger-card { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.placeholder-box, .video-placeholder { display: flex; min-height: 160px; align-items: center; justify-content: center; border: 1px dashed var(--rb-border); border-radius: 14px; padding: 1rem; text-align: center; color: var(--rb-muted); background: var(--rb-surface-soft); font-weight: 800; }
.image-wrap, .image-frame { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.camera-grid { display: grid; gap: 0.9rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning, html[data-theme='dark'] .warning-card { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger, html[data-theme='dark'] .danger-card { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(4, minmax(0, 1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } }


.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }

.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface, var(--rb-card, #fff)); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .course-path-item { background: #111827; border-color: rgba(148,163,184,0.24); }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }

`}</style>
