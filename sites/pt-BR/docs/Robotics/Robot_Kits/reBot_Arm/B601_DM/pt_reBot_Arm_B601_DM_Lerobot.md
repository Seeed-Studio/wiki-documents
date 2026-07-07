---
description: Este wiki fornece um fluxo de trabalho completo para usar o reBot Arm B601-DM com o LeRobot, incluindo configuração de ambiente, calibração, teleoperação, integração de câmera, coleta de conjunto de dados, treinamento, avaliação e implantação avançada.
title: Introdução ao reBot Arm B601-DM no LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Braço robótico
  - rebot arm
  - Robô
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-04
  author: ZhuYaohui
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/
---

# Introdução ao reBot Arm B601-DM no LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div className="hero-copy">
      <span className="eyebrow">reBot Arm × LeRobot</span>
      <h2>Comece com teleoperação, depois construa conjuntos de dados, treine políticas e faça a implantação em um braço robótico real</h2>
      <p>Este guia é para usuários que já concluíram o início rápido do reBot Arm B601-DM e a configuração básica de hardware. Ele orienta você pela instalação do LeRobot, calibração do braço, teleoperação, integração de câmera, coleta de conjunto de dados, treinamento, avaliação e fluxos de trabalho de implantação avançada.</p>
      <div className="hero-actions">
        <a href="#quick-path">Ver trilha de aprendizado</a>
        <a href="#install-lerobot">Instalar LeRobot</a>
        <a href="#record-dataset">Iniciar coleta de conjunto de dados</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
      <span>Teleoperação · Conjunto de dados · Treinamento · Avaliação</span>
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
      da área de movimento do robô.
    </p>
    <ul>
      <li>Não toque em juntas, motores, elos, garra ou efetuador final após o braço robótico ser ligado.</li>
      <li>Antes de calibração, teleoperação, controle de IK, controle de trajetória, compensação de gravidade, execução ROS2 / MoveIt ou preensão visual, certifique-se de que a base do braço esteja firmemente fixada.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores USB2CAN / PCAN-USB, conectores XT30 ou conectores de energia.</li>
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
      <a className="path-card" href="#install-lerobot"><span>Etapa 1</span><b>Instalar LeRobot</b><small>Crie o ambiente conda, instale o fork do LeRobot verificado pela Seeed e instale os pacotes necessários.</small></a>
      <a className="path-card" href="#calibration"><span>Etapa 2</span><b>Calibrar braços</b><small>Calibre o braço seguidor B601-DM e o braço líder reBot 102 para que suas posições físicas coincidam.</small></a>
      <a className="path-card" href="#teleoperation"><span>Etapa 3</span><b>Teleoperar</b><small>Execute a teleoperação líder-seguidor e verifique se o braço seguidor se move de forma correta e segura.</small></a>
      <a className="path-card" href="#camera"><span>Etapa 4</span><b>Adicionar câmeras</b><small>Conecte câmeras OpenCV, RealSense ou Orbbec e verifique os fluxos de vídeo antes de gravar dados.</small></a>
      <a className="path-card" href="#record-dataset"><span>Etapa 5</span><b>Registrar conjuntos de dados</b><small>Colete demonstrações de tarefas localmente ou envie-as para o Hugging Face Hub.</small></a>
      <a className="path-card" href="#training"><span>Etapa 6</span><b>Treinar e avaliar</b><small>Comece com ACT, depois experimente SmolVLA, Pi0 / Pi0.5 ou GR00T para experimentos mais avançados.</small></a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Etapas detalhadas</span>
      <h2>Fluxo de trabalho LeRobot passo a passo</h2>
      <p>Esta sequência transforma o fluxo de trabalho completo do LeRobot em pequenos marcos testáveis. Conclua cada etapa antes de passar para a coleta de dados em braço real ou implantação de políticas.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Etapa 0</span><strong>Concluir início rápido do B601-DM</strong><p>Verifique energia, USB2CAN, IDs dos motores, posição zero, direção da garra e movimento básico antes de usar o LeRobot.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 1</span><strong>Instalar ambiente LeRobot</strong><p>Crie o ambiente conda, instale o fork do LeRobot verificado pela Seeed e verifique a compatibilidade do PyTorch / ffmpeg.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 2</span><strong>Calibrar braços seguidor e líder</strong><p>Calibre o seguidor B601-DM e o líder reBot 102 para que a teleoperação comece a partir de referências físicas conhecidas.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 3</span><strong>Executar teleoperação com segurança</strong><p>Use primeiro uma pequena área de trabalho desobstruída. Confirme direções das juntas, comportamento da garra, procedimento de parada de emergência e fluxo de reinicialização.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 4</span><strong>Adicionar câmeras e validar fluxos</strong><p>Comece com uma câmera OpenCV, depois adicione fluxos RGB-D RealSense ou Orbbec quando a configuração básica estiver estável.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 5</span><strong>Registrar e inspecionar conjuntos de dados</strong><p>Colete primeiro conjuntos de dados locais curtos, visualize episódios, reproduza apenas quando for seguro e verifique observações / ações antes do treinamento.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 6</span><strong>Treinar e avaliar políticas</strong><p>Comece com ACT, depois avance para SmolVLA, Pi0 / Pi0.5, GR00T, PEFT, treinamento multi-GPU ou inferência assíncrona.</p></div>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Visão geral</span>
      <h2>Visão geral do projeto</h2>
      <p>O reBot Arm B601-DM é um projeto de braço robótico de código aberto da Seeed Studio. Ele foi projetado para reduzir a barreira para aprendizado de IA incorporada, fornecendo arquivos mecânicos abertos, listas de materiais (BOMs), software e tutoriais.</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Objetivo</b><span>Construir um fluxo de trabalho completo de aprendizado por imitação, da teleoperação à avaliação de políticas.</span></div>
      <div className="module-summary-card"><b>Robô</b><span>Braço seguidor B601-DM com motores Damiao e um braço líder reBot 102.</span></div>
      <div className="module-summary-card"><b>Dados</b><span>Usar LeRobot para registrar estados do robô, ações, quadros de câmera e descrições de tarefas sincronizados.</span></div>
      <div className="module-summary-card"><b>Treinamento</b><span>Começar com ACT, depois expandir para VLA e fluxos de trabalho com modelos de base maiores.</span></div>
    </div>

    <div className="info-grid">
      <div><strong>Braço robótico</strong><span>Braço seguidor reBot Arm B601-DM de 6 DOF com versão de motor Damiao.</span></div>
      <div><strong>Braço líder</strong><span>Braço líder reBot Arm 102 para teleoperação em tempo real e coleta de demonstrações.</span></div>
      <div><strong>Framework</strong><span>LeRobot para teleoperação, gravação de conjuntos de dados, treinamento, avaliação e implantação de políticas.</span></div>
      <div><strong>Plataforma de computação</strong><span>Estação de trabalho Ubuntu x86, estação de trabalho com GPU NVIDIA ou plataforma Jetson Orin, dependendo da tarefa.</span></div>
    </div>

    <details className="content-details">
      <summary>Assista ao vídeo de introdução do projeto reBot</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/PoMv3mw8SGk" title="reBot Arm project introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
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
          <li>Torch 2.6 ou uma compilação CUDA compatível</li>
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
      <span>Etapa 1</span>
      <h2>Instalar LeRobot</h2>
      <p>Esta seção prepara o ambiente de trabalho, instala o repositório LeRobot verificado pela Seeed e adiciona os pacotes específicos do reBot.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>1.1 Instalar Miniforge</b><span>Crie um ambiente conda isolado em vez de modificar o Python do sistema.</span></div>
      <div className="module-summary-card"><b>1.2 Clonar o LeRobot</b><span>Use o fork Seeed-Projects validado para os exemplos do B601-DM.</span></div>
      <div className="module-summary-card"><b>1.3 Instalar pacotes</b><span>Instale o LeRobot, o pacote do robô B601, o pacote de teleoperação reBot 102 e o MotorBridge.</span></div>
      <div className="module-summary-card"><b>1.4 Verificar a pilha de mídia</b><span>Instale o ffmpeg e confirme o suporte à codificação de vídeo antes de coletar conjuntos de dados.</span></div>
    </div>

    <details className="content-details">
      <summary>Vídeo de instalação</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/mWrWeqAPDSY" title="Install LeRobot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="command-card">
      <h3>1. Instalar o Miniforge</h3>
      <pre><code>{`cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

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
      <p>Use o repositório LeRobot verificado da Seeed para este guia. O repositório LeRobot upstream muda rapidamente, então comandos e formatos de conjuntos de dados podem ser diferentes.</p>
      <pre><code>{`cd ~/rebot_lerobot

conda create -y -n lerobot python=3.12
conda activate lerobot

pip install -e ./lerobot
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>4. Instalar o ffmpeg</h3>
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
      <p>A instalação via pip pode substituir o seu PyTorch com suporte a GPU por uma compilação para CPU. Sempre verifique a disponibilidade do CUDA antes de continuar.</p>
      <pre><code>{`python3

import torch
print(torch.cuda.is_available())  # Expected output: True`}</code></pre>
    </details>
  </section>

  <section id="calibration" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="section-title">
      <span>Etapa 2</span>
      <h2>Calibrar o braço robótico</h2>
      <p>A calibração alinha as posições físicas dos braços líder e seguidor. Isso é essencial para teleoperação, coleta de conjuntos de dados e transferência de políticas entre robôs.</p>
    </div>
    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">2.1</span><strong>Conceder permissões</strong><p>Confirme que a porta serial do líder e a ponte serial USB2CAN B601-DM estão acessíveis.</p></div>
      <div className="step-card"><span className="step-mini">2.2</span><strong>Calibrar o seguidor</strong><p>Defina a posição de referência do seguidor B601-DM e verifique se a garra está na postura zero correta.</p></div>
      <div className="step-card"><span className="step-mini">2.3</span><strong>Calibrar o líder</strong><p>Calibre o braço líder reBot 102 para que o mapeamento de teleoperação seja consistente.</p></div>
    </div>

    <details className="content-details">
      <summary>Vídeo de calibração</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/v8Ek1Ad1VWo" title="Calibrate reBot Arm B601-DM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="warning-card">
      <strong>Observação sobre recalibração</strong>
      <span>Se você precisar recalibrar, exclua os arquivos de calibração em <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> ou <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code> e execute a calibração novamente.</span>
    </div>

    <div className="command-card">
      <h3>1. Conceder permissões seriais</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm / serial bridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Calibrar o braço seguidor B601-DM</h3>
      <p>Para o B601-DM, a calibração do seguidor geralmente é necessária apenas uma vez após a montagem. A garra deve estar totalmente fechada ao seguir a referência de posição zero.</p>
      <pre><code>{`lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao`}</code></pre>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
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
      <p>Se esta for a sua primeira conexão e o dispositivo serial se desconectar imediatamente, o <code>brltty</code> pode estar ocupando a porta. Remova-o com <code>sudo apt remove brltty</code>.</p>
    </details>
  </section>

  <section id="teleoperation" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="section-title">
      <span>Etapa 3</span>
      <h2>Teste de teleoperação</h2>
      <p>Após a calibração, execute um teste básico de teleoperação líder-seguidor antes de adicionar câmeras ou gravar conjuntos de dados.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Antes de começar</b><span>Limpe a área de trabalho, fixe a base do braço e mantenha uma mão próxima ao teclado para o procedimento de parada.</span></div>
      <div className="module-summary-card"><b>Durante o movimento</b><span>Mova o líder lentamente e verifique a direção de cada junta antes de aumentar a velocidade ou o alcance.</span></div>
      <div className="module-summary-card"><b>Se houver interrupção</b><span>Pare o programa antes de reconectar cabos de energia, USB, CAN ou câmera.</span></div>
    </div>

    <div className="danger-card">
      <strong>Lembrete de segurança</strong>
      <span>Se cabos de energia, USB, CAN ou de sinal se desconectarem durante a teleoperação, pare primeiro o programa, retorne o braço à posição zero, reconecte a alimentação e então reinicie o programa.</span>
    </div>

    <div className="command-card">
      <h3>Executar teleoperação</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*
sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Vídeo de demonstração de teleoperação</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/6_hXd_QXO2A" title="Teleoperation demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Etapa 4</span>
      <h2>Adicionar câmeras</h2>
      <p>As câmeras fornecem observações visuais para a coleta de conjuntos de dados e o treinamento de políticas. Comece com uma câmera OpenCV simples e depois passe para RealSense ou Orbbec se você precisar de dados RGB-D.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Opção A: câmera USB</b><span>Melhor primeiro teste para validar a configuração de câmera do LeRobot e o display_data.</span></div>
      <div className="module-summary-card"><b>Opção B: RealSense</b><span>Use quando você precisar de observações RGB-D e suporte ao Intel RealSense SDK.</span></div>
      <div className="module-summary-card"><b>Opção C: Orbbec</b><span>Use Gemini2 / Gemini 336 quando o seu fluxo de trabalho precisar de streams RGB-D da Orbbec.</span></div>
    </div>

    <div className="camera-grid">
      <details className="content-details" open>
        <summary>Câmera genérica USB / OpenCV</summary>
        <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>Para múltiplas câmeras USB, evite conectar muitas câmeras de alta resolução no mesmo hub USB.</p>
      </details>

      <details className="content-details">
        <summary>RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

  <section id="record-dataset" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="section-title">
      <span>Etapa 5</span>
      <h2>Coletar conjuntos de dados</h2>
      <p>Quando a teleoperação e as câmeras estiverem estáveis, registre demonstrações para a sua tarefa alvo. Você pode salvar conjuntos de dados localmente ou enviá-los para o Hugging Face Hub.</p>
    </div>
    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">5.1</span><strong>Grave localmente primeiro</strong><p>Use um número pequeno de episódios e mantenha push_to_hub desativado enquanto valida o fluxo de trabalho.</p></div>
      <div className="step-card"><span className="step-mini">5.2</span><strong>Verifique os controles</strong><p>Use atalhos de teclado para encerrar, cancelar ou parar episódios com segurança durante a gravação.</p></div>
      <div className="step-card"><span className="step-mini">5.3</span><strong>Envie quando estiver estável</strong><p>Envie para o Hugging Face somente depois de confirmar que a estrutura e as estatísticas do conjunto de dados local estão corretas.</p></div>
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
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
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
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
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
            <tr><td>Seta para a direita</td><td>Encerra o episódio atual ou redefine antecipadamente e passa para o próximo.</td></tr>
            <tr><td>Seta para a esquerda</td><td>Cancela o episódio atual e o grava novamente.</td></tr>
            <tr><td>ESC</td><td>Interrompe a sessão imediatamente, codifica os vídeos e envia o conjunto de dados se estiver habilitado.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Se os eventos de teclado não responderem, tente <code>pip install pynput==1.6.8</code>.</p>
    </details>

    <div className="tip-card">
      <strong>Dicas de qualidade do conjunto de dados</strong>
      <span>Mantenha as posições das câmeras fixas, mantenha a iluminação estável, certifique-se de que o objeto alvo esteja visível e colete episódios suficientes. Para uma tarefa simples de preensão, comece com pelo menos 50 episódios quando possível.</span>
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
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Reproduzir um episódio no robô</summary>
      <p>Esta etapa pode ser instável, portanto é opcional.</p>
      <pre><code>{`lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="section-title">
      <span>Etapa 6</span>
      <h2>Treinamento e avaliação</h2>
      <p>Comece com ACT para validar o seu pipeline de dados. Depois disso, você pode tentar SmolVLA, Pi0 / Pi0.5, GR00T N1.5, PEFT, treinamento com múltiplas GPUs ou inferência assíncrona.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>ACT primeiro</b><span>Baseline recomendada para verificar a qualidade do conjunto de dados e o formato das ações do robô.</span></div>
      <div className="module-summary-card"><b>Políticas VLA</b><span>Tente SmolVLA, Pi0 ou Pi0.5 depois que o pipeline de ACT estiver estável.</span></div>
      <div className="module-summary-card"><b>Modelos avançados</b><span>Use GR00T ou inferência assíncrona somente depois que dependências, CUDA e o fluxo de implantação forem validados.</span></div>
    </div>

    <details className="content-details" open>
      <summary>ACT: política inicial recomendada</summary>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <p>Para GPUs da série RTX 50, adicione <code>--dataset.video_backend=pyav</code> se as APIs de vídeo do torchvision causarem erros.</p>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>

    <details className="content-details">
      <summary>SmolVLA: modelo base de robô leve</summary>
      <p>SmolVLA é um modelo base leve para fine-tuning em seus próprios conjuntos de dados LeRobot. Ele usa imagens de câmera, estados do robô e uma instrução de tarefa em linguagem natural para prever blocos de ações.</p>
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
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Pi0 / Pi0.5: treinamento de políticas VLA</summary>
      <p>Pi0 e Pi0.5 são políticas de Visão-Linguagem-Ação. Elas são úteis quando você quer explorar controle robótico condicionado por linguagem.</p>
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
      <summary>GR00T N1.5: fine-tuning de modelo base avançado</summary>
      <p>GR00T N1.5 tem requisitos mais rígidos de CUDA e FlashAttention. Faça o ACT ou o Pi0 funcionar primeiro e depois tente o GR00T.</p>
      <pre><code>{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
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
      <p>Estas seções são opcionais. Use-as depois de concluir com sucesso a coleta básica de dados e o treinamento com ACT.</p>
    </div>

    <details className="content-details">
      <summary>Fine-tuning eficiente com PEFT / LoRA</summary>
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
      <summary>Treinamento com múltiplas GPUs</summary>
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
      <p>O treinamento com múltiplas GPUs aumenta o tamanho efetivo do batch. Você pode precisar reduzir os passos de treinamento ou ajustar a taxa de aprendizado dependendo da sua configuração.</p>
    </details>

    <details className="content-details">
      <summary>Implantação de inferência assíncrona</summary>
      <p>A inferência assíncrona permite que o robô execute o bloco de ação atual enquanto o servidor calcula o próximo bloco. Ela é útil para modelos maiores ou inferência remota.</p>
      <pre><code>{`pip install -e ".[async]"

python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080

python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false`}</code></pre>
      <div className="danger-card">
        <strong>Nota de segurança</strong>
        <span>Não exponha diretamente um servidor de inferência assíncrona sem autenticação à internet pública. Use VPN, tunelamento SSH ou restrições rígidas de IP de origem.</span>
      </div>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>Problemas comuns</h2>
    </div>

    <details className="content-details">
      <summary>Por que usar o repositório Seeed-Projects/lerobot?</summary>
      <p>Este guia é validado com <code>https://github.com/Seeed-Projects/lerobot.git</code>. O repositório LeRobot upstream muda rapidamente e pode introduzir diferenças de comandos, dependências ou formato de conjunto de dados.</p>
    </details>

    <details className="content-details">
      <summary>Não é possível conectar a /dev/ttyUSB0 ou /dev/ttyACM0</summary>
      <p>Se o dispositivo existir, mas a conexão falhar, conceda permissões seriais:</p>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*`}</code></pre>
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


<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>Trilha de aprendizado</span>
    <h2>Continue com a trilha de aprendizado do reBot B601-DM</h2>
    <p>Estes tutoriais foram projetados para serem lidos na mesma ordem da página de robótica: comece pela inicialização básica, depois passe para a coleta de dados com LeRobot, depuração de cinemática, preensão visual e, por fim, integração com ROS2.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step" href="/pt-br/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>Primeiros passos</strong>
        <small>Conclua o unboxing, a fiação, as verificações de energia, a configuração do driver, a calibração e os testes básicos de movimento.</small>
      </div>
      <em>Comece aqui</em>
    </a>
    <a className="course-step active" href="/pt-br/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>Teleoperação e coleta de dados com LeRobot</strong>
        <small>Teleopere o braço, conecte câmeras, registre conjuntos de dados, treine políticas e avalie o comportamento do braço real.</small>
      </div>
      <em>Artigo atual</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Visualização de cinemática com Pinocchio</strong>
        <small>Entenda modelos de robôs, sistemas de coordenadas, FK / IK, planejamento de trajetórias e compensação de gravidade.</small>
      </div>
      <em>Controle</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <div>
        <strong>Demo de preensão visual</strong>
        <small>Combine percepção RGB-D, YOLO / OBB ou GraspNet, calibração mão-olho e preensão de objetos reais.</small>
      </div>
      <em>Aplicação</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <div>
        <strong>Integração com ROS2</strong>
        <small>Conecte o braço ao ROS2, RViz, MoveIt 2, serviços padrão, ações e fluxos de trabalho de planejamento.</small>
      </div>
      <em>Integração</em>
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
.doc-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.85fr);
  gap: 1.5rem;
  align-items: stretch;
  padding: 2rem;
  margin: 1.5rem 0 1.25rem;
  border: 1px solid var(--rb-border);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%),
    radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%),
    linear-gradient(135deg, rgba(248,250,252,0.96), rgba(255,255,255,0.94));
  box-shadow: var(--rb-shadow);
  overflow: hidden;
}
.eyebrow {
  display: inline-flex;
  padding: 0.35rem 0.7rem;
  margin-bottom: 0.85rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1rem; border-radius: 22px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 18px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { display: inline-flex; color: var(--rb-primary); font-size: 0.76rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); font-size: 1.55rem; }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.68; }
.path-grid, .info-grid, .two-col, .camera-grid, .module-summary-grid, .step-card-grid, .reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.9rem; }
.path-card, .info-grid > div, .check-card, .module-summary-card, .step-card, .content-details, .warning-card, .danger-card, .tip-card, .reference-grid a { border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); box-shadow: 0 10px 24px rgba(15,23,42,0.045); }
.path-card { display: block; padding: 1rem; text-decoration: none !important; color: inherit; transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.42); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-width: 2.2rem; height: 2rem; padding: 0 0.65rem; margin-bottom: 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; font-size: 0.82rem; }
.path-card b, .module-summary-card b, .step-card strong, .info-grid strong, .check-card h3, .warning-card strong, .danger-card strong, .tip-card strong { display: block; color: var(--rb-text); margin-bottom: 0.35rem; }
.path-card small, .module-summary-card span, .step-card p, .info-grid span, .warning-card span, .danger-card span, .tip-card span { display: block; color: var(--rb-muted); line-height: 1.6; }
.module-summary-card, .step-card, .info-grid > div, .check-card, .warning-card, .danger-card, .tip-card { padding: 1rem; }
.compact-grid { grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
.content-details { margin: 0.9rem 0; overflow: hidden; }
.content-details summary { cursor: pointer; list-style: none; padding: 0.95rem 1rem; font-weight: 900; color: var(--rb-text); background: linear-gradient(90deg, rgba(37,99,235,0.08), transparent); }
.content-details[open] summary { border-bottom: 1px solid var(--rb-border); }
.content-details summary::-webkit-details-marker { display: none; }
.content-details > *:not(summary) { margin-left: 1rem; margin-right: 1rem; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: #fff; box-shadow: 0 10px 24px rgba(15,23,42,0.045); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.command-card p, .content-details p { color: var(--rb-muted); line-height: 1.65; }
.warning-card { border-color: rgba(245,158,11,0.34); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.danger-card { border-color: rgba(239,68,68,0.34); background: linear-gradient(180deg, #fef2f2, var(--rb-surface)); }
.tip-card { border-color: rgba(20,184,166,0.32); background: linear-gradient(180deg, #f0fdfa, var(--rb-surface)); }
.video-container { position: relative; width: calc(100% - 2rem); max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 18px; overflow: hidden; background: #0f172a; border: 1px solid var(--rb-border); }
.video-container iframe { width: 100%; height: 100%; border: 0; }
.image-wrap, div[align="center"] { text-align: center; margin: 1rem 0; }
.image-wrap img, div[align="center"] img { max-width: 820px; width: 100%; border-radius: 18px; border: 1px solid var(--rb-border); }
.content-table { overflow-x: auto; }
.content-table table { width: 100%; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; text-decoration: none !important; color: var(--rb-text); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-nav-section { margin-top: 1.6rem; }
.course-path-grid { display: grid; gap: 0.85rem; }
.course-step { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 10px 24px rgba(15,23,42,0.05); }
.course-step.active { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.92), rgba(240,253,250,0.78)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; color: #fff; background: var(--rb-primary); font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.24); }
.course-step strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.24rem; }
.course-step small { display: block; color: var(--rb-muted); line-height: 1.55; font-size: 0.92rem; }
.course-step em { justify-self: end; white-space: nowrap; font-style: normal; font-size: 0.78rem; font-weight: 800; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.2); border-radius: 999px; padding: 0.35rem 0.65rem; }
pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav, html[data-theme='dark'] .command-card { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.10)); }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 640px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .course-step { grid-template-columns: 1fr; } .course-step em { justify-self: start; } }
`}</style>
