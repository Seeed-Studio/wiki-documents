---
description: Este Wiki fornece um fluxo de trabalho estruturado do SO-ARM100 / SO-ARM101 com LeRobot, cobrindo impressão 3D, configuração de servos, montagem, calibração, teleoperação, integração de câmera, coleta de conjunto de dados, treinamento e avaliação.
title: SO-ARM100 / SO-ARM101 com LeRobot
keywords:
  - Lerobot
  - Huggingface
  - SO-ARM100
  - SO-ARM101
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 2026-07-05
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2025-06-05'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/
---

# SO-ARM100 / SO-ARM101 com LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div>
      <span className="eyebrow">SO-ARM × LeRobot</span>
      <h2>Vá da montagem e configuração de servos até a teleoperação, coleta de dados e treinamento de políticas</h2>
      <p>Este guia é organizado como um caminho prático de inicialização para usuários do SO-ARM100 / SO-ARM101. Você irá preparar as peças impressas, instalar o LeRobot, configurar os IDs dos servos, montar os braços líder e seguidor, calibrar todo o sistema, teleoperar o robô, adicionar câmeras, registrar conjuntos de dados, treinar políticas e avaliá-las em hardware real.</p>
      <div className="hero-actions">
        <a href="#course-steps">Ver fluxo de etapas</a>
        <a href="#install-lerobot">Instalar LeRobot</a>
        <a href="#record-dataset">Iniciar coleta de conjunto de dados</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 and SO-ARM101 with LeRobot" />
      <strong>SO-ARM10x · LeRobot</strong>
      <span>Impressão 3D · Configuração de servos · Teleoperação · Conjunto de dados · Treinamento</span>
    </div>
  </section>

  <div className="safety-alert">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Alerta de segurança: limpe a área de trabalho do robô antes de executar</strong>
      <p>Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor, objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Mantenha as pessoas afastadas da faixa de movimento durante calibração, teleoperação, gravação, reprodução, avaliação e implantação de políticas.</p>
      <ul>
        <li>Não toque nas juntas, servos, elos, garra ou efetuador final após o robô ser ligado.</li>
        <li>Verifique a fonte de alimentação correta antes de cada etapa. O SO101 Pro usa <strong>5V para o braço líder</strong> e <strong>12V para o braço seguidor</strong>.</li>
        <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, perda de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
        <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de servo, placas controladoras, cabos USB-C ou conectores de energia.</li>
      </ul>
    </div>
  </div>

  <nav className="doc-nav" aria-label="SO-ARM LeRobot quick navigation">
    <a href="#course-steps">Fluxo de trabalho</a>
    <a href="#overview">Visão geral</a>
    <a href="#printing">Impressão 3D</a>
    <a href="#install-lerobot">Instalação</a>
    <a href="#motor-setup">Configuração de servos</a>
    <a href="#calibration">Calibração</a>
    <a href="#teleoperation">Teleoperação</a>
    <a href="#camera">Câmera</a>
    <a href="#record-dataset">Conjunto de dados</a>
    <a href="#training">Treinamento</a>
    <a href="#faq">FAQ</a>
  </nav>

  <section id="course-steps" className="section-card">
    <div className="section-title">
      <span>Visão geral das etapas</span>
      <h2>Fluxo de trabalho recomendado de inicialização do SO-ARM</h2>
      <p>Siga esta ordem para uma experiência de depuração mais segura e fácil. Cada etapa adiciona apenas uma nova camada de complexidade.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Etapa 0</span><strong>Confirmar modelo e alimentação</strong><p>Identifique SO100 / SO101, kit padrão / pro, motores de braço líder / seguidor e a tensão correta da fonte de alimentação.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 1</span><strong>Preparar peças impressas e hardware</strong><p>Imprima ou verifique as peças mecânicas, rotule os servos e verifique as placas controladoras e cabos USB-C.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 2</span><strong>Instalar LeRobot</strong><p>Crie um ambiente limpo, instale o LeRobot verificado pela Seeed, ffmpeg, dependências Feetech e PyTorch com GPU se necessário.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 3</span><strong>Configurar IDs dos servos</strong><p>Use <code>{`lerobot-setup-motors`}</code> para inicializar os IDs dos servos do seguidor e do líder antes da montagem final.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 4</span><strong>Montar e calibrar</strong><p>Monte os braços líder e seguidor e, em seguida, execute a calibração de braço completo do LeRobot.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 5</span><strong>Teleoperar e adicionar câmeras</strong><p>Primeiro teste uma teleoperação simples sem câmeras e depois conecte câmeras OpenCV, RealSense ou Orbbec.</p></div>
      <div className="step-card"><span className="step-mini">Etapa 6</span><strong>Registrar, treinar e avaliar</strong><p>Registre demonstrações estáveis, visualize o conjunto de dados, treine ACT primeiro e depois experimente SmolVLA / Pi / GR00T.</p></div>
    </div>
  </section>

  <section id="overview" className="section-card">
    <div className="section-title">
      <span>Visão geral</span>
      <h2>O que este tutorial abrange</h2>
      <p>SO-ARM10x é uma plataforma de braço robótico de baixo custo e código aberto projetada para aprender manipulação, teleoperação, aprendizado por imitação e fluxos de trabalho de IA incorporada com LeRobot.</p>
    </div>
    <div className="info-card">
      <p><a href="https://github.com/TheRobotStudio/SO-ARM100">SO-10xARM</a> é um projeto de braço robótico totalmente open-source da TheRobotStudio. Ele fornece projetos de braços líder e seguidor, arquivos para impressão 3D e guias de operação.</p>
      <p><a href="https://github.com/huggingface/lerobot/tree/main">LeRobot</a> fornece modelos, conjuntos de dados e ferramentas para robótica no mundo real em PyTorch, incluindo fluxos de trabalho de teleoperação, gravação de conjuntos de dados, visualização, treinamento e avaliação.</p>
    </div>
    <div className="feature-grid">
      <div><b>Open-source e de baixo custo</b><span>Adequado para educação, laboratórios de robótica, pesquisa e experimentos de manipulação com IA.</span></div>
      <div><b>Pronto para LeRobot</b><span>Suporta teleoperação, coleta de conjuntos de dados, treinamento de políticas, avaliação e fluxos de trabalho com o Hugging Face Hub.</span></div>
      <div><b>Fluxo de trabalho líder-seguidor</b><span>Use um braço líder para controlar um braço seguidor e coletar demonstrações para aprendizado por imitação.</span></div>
      <div><b>Compatível com Jetson</b><span>Pode ser usado com plataformas reComputer Jetson após instalar a pilha correta de PyTorch / Torchvision.</span></div>
    </div>
    <details className="content-details">
      <summary>Assista ao vídeo de visão geral do SO-ARM</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="SO-ARM LeRobot overview video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="hardware" className="section-card">
    <div className="section-title">
      <span>Hardware</span>
      <h2>Modelo, alimentação e requisitos de sistema</h2>
      <p>Antes de configurar os servos ou executar a calibração, confirme qual kit SO-ARM você possui e use a fonte de alimentação correta.</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>SO-ARM100</b><span>Versão clássica do SO-ARM. Usuários existentes do SO100 podem continuar usando os caminhos de código do SO101 neste guia.</span></div>
      <div className="module-summary-card"><b>SO-ARM101</b><span>Fiação atualizada e relações de engrenagem otimizadas para o braço líder. Impressão e configuração permanecem compatíveis com o fluxo de trabalho no estilo SO100.</span></div>
      <div className="module-summary-card"><b>Kit padrão</b><span>Usa fontes de alimentação de 5V. Verifique a alimentação e o modelo de servo antes de conectar o barramento.</span></div>
      <div className="module-summary-card warning-card"><b>Kit Pro</b><span>O braço líder usa 5V; o braço seguidor usa 12V. Misturar as fontes de alimentação pode danificar os motores.</span></div>
    </div>

    <details className="content-details">
      <summary>Tabela de especificações</summary>
      <table>
        <thead><tr><th>Item</th><th>SO-ARM100</th><th>SO-ARM101</th></tr></thead>
        <tbody>
          <tr><td>Estrutura do robô</td><td>Braço líder + braço seguidor</td><td>Braço líder + braço seguidor</td></tr>
          <tr><td>Comunicação</td><td>UART</td><td>UART</td></tr>
          <tr><td>Sensor de ângulo</td><td>Encoder magnético de 12 bits</td><td>Encoder magnético de 12 bits</td></tr>
          <tr><td>Motores do seguidor</td><td>Série STS3215, dependendo da versão do kit</td><td>Igual ao SO-ARM100</td></tr>
          <tr><td>Motores do líder</td><td>Mesma relação de engrenagem em todas as juntas</td><td>Relações de engrenagem otimizadas para as juntas L1, L3, L4-L6</td></tr>
          <tr><td>Temperatura recomendada</td><td>0°C a 40°C</td><td>0°C a 40°C</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>Lista de materiais (Bill of Materials)</summary>
      <table>
        <thead><tr><th>Peça</th><th>Quantidade</th><th>Incluído</th></tr></thead>
        <tbody>
          <tr><td>Servomotores</td><td>12</td><td>✅</td></tr>
          <tr><td>Placa de controle de motor</td><td>2</td><td>✅</td></tr>
          <tr><td>Cabos USB-C</td><td>2</td><td>✅</td></tr>
          <tr><td>Fontes de alimentação</td><td>2</td><td>✅</td></tr>
          <tr><td>Grampos de mesa</td><td>4</td><td>✅</td></tr>
          <tr><td>Peças de braço impressas em 3D</td><td>1 conjunto</td><td>Opcional / preparado pelo usuário</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>Ambiente de sistema recomendado</summary>
      <div className="env-grid">
        <div>
          <h3>Ubuntu x86</h3>
          <ul>
            <li>Ubuntu 22.04</li>
            <li>CUDA 12+</li>
            <li>Python 3.10</li>
            <li>Torch 2.6+ ou uma versão que corresponda à sua pilha CUDA</li>
          </ul>
        </div>
        <div>
          <h3>Jetson Orin</h3>
          <ul>
            <li>JetPack 6.0 / 6.1</li>
            <li>Python 3.10</li>
            <li>Torch 2.3+</li>
            <li>Confirme que PyTorch e Torchvision têm suporte a GPU</li>
          </ul>
        </div>
      </div>
    </details>
  </section>

  <section id="printing" className="section-card">
    <div className="section-title">
      <span>Etapa 1</span>
      <h2>Prepare as peças impressas em 3D e o hardware</h2>
      <p>Use os arquivos de impressão SO101 para novas montagens. Usuários existentes do SO100 ainda podem seguir o mesmo fluxo de instalação e software.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">1.1</span><strong>Escolha os arquivos de impressão</strong><p>Use arquivos Ender para mesas de 220 mm × 220 mm ou arquivos Prusa / Up para mesas de 205 mm × 250 mm.</p></div>
      <div className="step-card"><span className="step-mini">1.2</span><strong>Use as configurações recomendadas</strong><p>PLA+, bico de 0,4 mm com altura de camada de 0,2 mm, ou bico de 0,6 mm com altura de camada de 0,4 mm.</p></div>
      <div className="step-card"><span className="step-mini">1.3</span><strong>Rotule os servos</strong><p>Antes da fiação, rotule F1-F6 e L1-L6 para evitar erros de calibração e montagem.</p></div>
    </div>
    <details className="content-details">
      <summary>Referências de impressão 3D</summary>
      <ul>
        <li>Tamanho da mesa Ender: <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl">Follower</a> e <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl">Leader</a>.</li>
        <li>Tamanho da mesa Prusa / Up: <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl">Follower</a> e <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl">Leader</a>.</li>
        <li>Densidade de preenchimento sugerida: 15%.</li>
        <li>Use suportes onde necessário, mas evite suportes desnecessários dentro de furos horizontais para parafusos.</li>
      </ul>
    </details>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Etapa 2</span>
      <h2>Instale o LeRobot</h2>
      <p>Comece com um ambiente Miniforge limpo e depois instale o repositório LeRobot verificado pela Seeed e as dependências dos motores Feetech.</p>
    </div>
    <div className="command-flow">
      <div>
        <h3>1. Instale o Miniforge</h3>
        <pre><code>{`# Jetson / aarch64
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
source ~/.bashrc

# x86_64 Ubuntu
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
source ~/.bashrc
conda init --all`}</code></pre>
      </div>
      <div>
        <h3>2. Crie o ambiente LeRobot</h3>
        <pre><code>{`conda create -y -n lerobot python=3.10
conda activate lerobot`}</code></pre>
      </div>
      <div>
        <h3>3. Clone e instale o LeRobot</h3>
        <pre><code>{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot
conda install ffmpeg -c conda-forge
pip install -e ".[feetech]"`}</code></pre>
      </div>
      <div>
        <h3>4. Verifique o PyTorch com GPU</h3>
        <pre><code>{`python3
import torch
print(torch.cuda.is_available())
exit()`}</code></pre>
      </div>
    </div>
    <details className="content-details">
      <summary>Configuração adicional para Jetson JetPack 6.0+</summary>
      <p>No Jetson, instale PyTorch / Torchvision com suporte a GPU antes de instalar as dependências do LeRobot. Se o pip substituí-los por versões para CPU, reinstale os pacotes compatíveis com Jetson.</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Nota sobre compatibilidade do ffmpeg</summary>
      <p>Se a gravação ou visualização do conjunto de dados relatar erros relacionados a codec, instale uma versão do ffmpeg conhecida por funcionar.</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
  </section>

  <section id="motor-setup" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Verificação de energia antes da configuração dos servos</strong>
        <p>Os servos do braço Leader devem usar 5 V. Para o SO101 Pro, os servos do braço Follower usam 12 V. A USB não alimenta os servos; tanto a USB quanto a fonte de alimentação correta devem estar conectadas.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Etapa 3</span>
      <h2>Configure os IDs dos servos antes da montagem</h2>
      <p>Para versões em kit, configure um servo por vez. Usuários com montagem pré-montada podem pular esta seção e ir diretamente para a calibração do braço completo.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Rótulos do Follower</b><span>Use F1-F6 para representar o braço follower da base até a garra.</span></div>
      <div className="module-summary-card"><b>Rótulos do Leader</b><span>Use L1-L6 para representar o braço leader da base até o cabo / garra.</span></div>
      <div className="module-summary-card warning-card"><b>Relações de engrenagem do SO101</b><span>L1 e L3 usam 1:191; L2 usa 1:345; L4-L6 usam 1:147.</span></div>
    </div>
    <details className="content-details">
      <summary>Encontre as portas USB</summary>
      <pre><code>{`lerobot-find-port

# Se necessário no Linux:
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}</code></pre>
      <p>Em muitas configurações Linux e Jetson, o primeiro dispositivo conectado é mapeado para <code>{`/dev/ttyACM0`}</code> e o segundo é mapeado para <code>{`/dev/ttyACM1`}</code>. Sempre verifique antes de executar comandos de configuração ou calibração.</p>
    </details>
    <details className="content-details">
      <summary>Modelo de servo e mapeamento de juntas para o SO101</summary>
      <table>
        <thead><tr><th>Modelo de servo</th><th>Relação de engrenagem</th><th>Juntas</th></tr></thead>
        <tbody>
          <tr><td>ST-3215-C044 (7,4 V)</td><td>1:191</td><td>L1</td></tr>
          <tr><td>ST-3215-C001 (7,4 V)</td><td>1:345</td><td>L2</td></tr>
          <tr><td>ST-3215-C044 (7,4 V)</td><td>1:191</td><td>L3</td></tr>
          <tr><td>ST-3215-C046 (7,4 V)</td><td>1:147</td><td>L4-L6</td></tr>
          <tr><td>ST-3215-C001 / C018 / C047</td><td>1:345</td><td>F1-F6</td></tr>
        </tbody>
      </table>
    </details>
    <details className="content-details">
      <summary>Configure os servos do braço Follower</summary>
      <pre><code>{`lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0`}</code></pre>
      <p>Conecte apenas o servo solicitado pelo prompt do terminal. Após cada etapa, verifique a alimentação e a fiação antes de pressionar Enter.</p>
    </details>
    <details className="content-details">
      <summary>Configure os servos do braço Leader</summary>
      <pre><code>{`lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1`}</code></pre>
      <p>Use 5 V para a configuração dos servos do braço Leader. Não conecte todos os servos de uma vez durante a gravação dos IDs.</p>
    </details>
  </section>

  <section id="assembly" className="section-card">
    <div className="section-title">
      <span>Etapa 4</span>
      <h2>Monte os braços Leader e Follower</h2>
      <p>Após a configuração dos IDs dos servos, monte os braços de acordo com o guia mecânico do SO101. As montagens do Follower e do Leader são em grande parte iguais, exceto pela seção do efetuador final / cabo após a Etapa 12.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">4.1</span><strong>Verifique novamente os rótulos dos servos</strong><p>Confirme F1-F6 e L1-L6 antes de instalá-los nas peças impressas.</p></div>
      <div className="step-card"><span className="step-mini">4.2</span><strong>Monte o braço Leader</strong><p>Siga as imagens numeradas e roteie os cabos com cuidado para evitar interferência nas juntas.</p></div>
      <div className="step-card"><span className="step-mini">4.3</span><strong>Monte o braço Follower</strong><p>Siga a mesma estrutura de base e depois instale o efetuador final e a seção de garra do follower.</p></div>
    </div>
    <details className="content-details">
      <summary>Imagens de referência de montagem</summary>
      <p>O tutorial original inclui tabelas completas de imagens de montagem do leader e do follower. Mantenha esta página concisa usando esta seção como um ponto de verificação de referência antes da calibração completa.</p>
      <ul>
        <li>Montagem do Leader: Etapa 1 até Etapa 20.</li>
        <li>Montagem do Follower: Etapa 1 até Etapa 17.</li>
        <li>Verifique o roteamento dos cabos após a instalação de cada junta principal.</li>
      </ul>
    </details>
  </section>

  <section id="calibration" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Verificação de segurança da calibração</strong>
        <p>Segure o robô com cuidado, limpe a área de trabalho e garanta a alimentação correta antes da calibração. A qualidade da calibração afeta diretamente a teleoperação, a gravação e a avaliação de políticas.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Etapa 5</span>
      <h2>Calibre os braços Leader e Follower</h2>
      <p>A calibração alinha as posições físicas das juntas com os estados de junta esperados pelo LeRobot. Use os mesmos IDs de robô para teleoperação, gravação, reprodução e avaliação.</p>
    </div>
    <details className="content-details">
      <summary>Opções de recalibração</summary>
      <p>Para recalibrar, exclua os arquivos de calibração relacionados em <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> e <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code>, ou digite <code>{`c`}</code> quando o LeRobot perguntar se deseja reutilizar o arquivo de calibração existente.</p>
    </details>
    <details className="content-details">
      <summary>Calibrar o braço seguidor</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Calibrar o braço líder</summary>
      <pre><code>{`lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Opcional: calibração de posição intermediária com a ferramenta Seeed SoARM</summary>
      <p>Se você vir erros como <code>{`Magnitude 30841 exceeds 2047`}</code>, use a ferramenta rápida SoARM para gravar a posição atual como o valor intermediário 2048 e, em seguida, refaça a calibração de todo o braço.</p>
      <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable
python -m src.tools.servo_middle_calibration
python -m src.tools.servo_center_test`}</code></pre>
      <p><a href="/pt-br/lerobot_steering_gear_debugging_tool/">Abrir o tutorial da ferramenta de depuração do sistema de direção</a></p>
    </details>
  </section>

  <section id="teleoperation" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Verificação de segurança da teleoperação</strong>
        <p>Comece sem câmeras primeiro. Use uma área de trabalho desobstruída e pare imediatamente se qualquer um dos braços perder energia ou comunicação.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Etapa 6</span>
      <h2>Executar teleoperação simples</h2>
      <p>A teleoperação simples verifica a cadeia de controle de líder para seguidor antes de adicionar fluxos de câmera e gravar conjuntos de dados.</p>
    </div>
    <details className="content-details">
      <summary>Comando de teleoperação simples</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Vídeo de demonstração de teleoperação</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="SO-ARM teleoperation video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Etapa 7</span>
      <h2>Adicionar câmeras para dados de observação</h2>
      <p>A configuração da câmera afeta diretamente a qualidade do conjunto de dados. Comece com um fluxo de baixa resolução e, em seguida, adicione mais câmeras ou fluxos de profundidade depois que o sistema estiver estável.</p>
    </div>
    <div className="camera-grid">
      <details className="content-details">
        <summary>Usar câmeras USB / OpenCV comuns</summary>
        <pre><code>{`lerobot-find-cameras opencv`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true`}</code></pre>
        <div className="callout"><b>Recomendação MJPG</b><p><code>{`MJPG`}</code> é comprimido e geralmente oferece melhor resolução / FPS. Evite colocar várias câmeras USB de alta resolução no mesmo hub USB.</p></div>
      </details>
      <details className="content-details">
        <summary>Usar RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
    d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
      <details className="content-details">
        <summary>Usar Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'
lerobot-find-cameras orbbec`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
    orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
    </div>
  </section>

  <section id="record-dataset" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Verificação de segurança da gravação</strong>
        <p>Use primeiro uma tarefa simples e repetível. Mantenha as posições das câmeras, iluminação, posicionamento dos objetos e estilo de movimento consistentes.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Etapa 8</span>
      <h2>Gravar e gerenciar conjuntos de dados do LeRobot</h2>
      <p>Comece com um pequeno conjunto de dados local, verifique os vídeos e estados e, em seguida, faça o upload para o Hugging Face Hub quando a configuração estiver estável.</p>
    </div>
    <div className="tips-grid">
      <div><b>Escala sugerida</b><span>Comece com 5 episódios de teste e depois grave pelo menos 50 episódios para uma execução de treinamento real.</span></div>
      <div><b>Consistência</b><span>Mantenha as câmeras fixas e garanta que o objeto manipulado esteja sempre visível nas visualizações das câmeras.</span></div>
      <div><b>Design da tarefa</b><span>Você deve ser capaz de concluir a tarefa olhando apenas para as imagens da câmera.</span></div>
    </div>
    <details className="content-details">
      <summary>Gravar um conjunto de dados local</summary>
      <pre><code>{`lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>Quando <code>{`--dataset.push_to_hub=false`}</code>, o conjunto de dados é salvo em <code>{`~/.cache/huggingface/lerobot`}</code>.</p>
    </details>
    <details className="content-details">
      <summary>Gravar e enviar para o Hugging Face Hub</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
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
      <table>
        <thead><tr><th>Key</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Right Arrow</td><td>Encerrar o episódio atual / redefinir antecipadamente e passar para o próximo.</td></tr>
          <tr><td>Left Arrow</td><td>Cancelar o episódio atual e gravá-lo novamente.</td></tr>
          <tr><td>ESC</td><td>Parar a sessão imediatamente, codificar os vídeos e salvar / enviar o conjunto de dados.</td></tr>
        </tbody>
      </table>
      <pre><code>{`# If keyboard shortcuts do not respond:
pip install pynput==1.6.8`}</code></pre>
    </details>
  </section>

  <section id="visualize" className="section-card">
    <div className="section-title">
      <span>Etapa 9</span>
      <h2>Visualizar e reproduzir conjuntos de dados</h2>
      <p>Sempre inspecione o conjunto de dados antes do treinamento. Verifique as imagens da câmera, estados do robô, ações e temporização dos episódios.</p>
    </div>
    <details className="content-details">
      <summary>Visualizar um conjunto de dados</summary>
      <pre><code>{`# Hub dataset
lerobot-dataset-viz \
  --repo-id \${HF_USER}/so101_test

# Local dataset
lerobot-dataset-viz \
  --repo-id seeedstudio123/test`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Reproduzir um episódio</summary>
      <div className="callout warning"><b>Etapa opcional</b><p>A reprodução pode mover o robô físico. Use-a somente depois de confirmar a calibração e a segurança do espaço de trabalho.</p></div>
      <pre><code>{`lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">
    <div className="section-title">
      <span>Etapa 10</span>
      <h2>Treinar e avaliar políticas</h2>
      <p>Para o primeiro fluxo de trabalho completo, use ACT. Depois que o ACT funcionar de ponta a ponta, você pode tentar SmolVLA, Pi0, Pi0.5, GR00T, PEFT, treinamento com várias GPUs ou inferência assíncrona.</p>
    </div>
    <details className="content-details">
      <summary>ACT: política inicial recomendada</summary>
      <h3>Treinar</h3>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <h3>Avaliar</h3>
      <pre><code>{`lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_so101_test \
  --dataset.single_task="Put the cube into the box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Opções avançadas SmolVLA / Pi0 / Pi0.5 / GR00T</summary>
      <div className="module-summary-grid">
        <div className="module-summary-card"><b>SmolVLA</b><span>Ponto de entrada leve para ajuste fino de VLA. Experimente depois que o ACT estiver estável.</span></div>
        <div className="module-summary-card"><b>Pi0 / Pi0.5</b><span>Úteis para experimentos com políticas condicionadas por linguagem.</span></div>
        <div className="module-summary-card"><b>GR00T</b><span>Requer uma pilha mais rígida de CUDA / PyTorch / FlashAttention. Trate-o como um experimento avançado.</span></div>
      </div>
      <pre><code>{`# SmolVLA
pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true

# Pi0 / Pi0.5
pip install -e ".[pi]"

# GR00T
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Opcional: PEFT, várias GPUs e inferência assíncrona</summary>
      <ul>
        <li><b>PEFT / LoRA:</b> reduza o custo de ajuste fino treinando parâmetros de adaptadores em vez de todos os pesos do modelo.</li>
        <li><b>Várias GPUs:</b> use <code>{`accelerate launch`}</code> ao treinar políticas maiores ou lotes maiores.</li>
        <li><b>Inferência assíncrona:</b> execute a inferência da política em um servidor enquanto o cliente do robô executa blocos de ações.</li>
      </ul>
      <pre><code>{`# PEFT
pip install -e ".[peft]"

# Multi-GPU helper
pip install accelerate
accelerate config

# Async inference dependencies
pip install -e ".[async]"`}</code></pre>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>Problemas comuns e correções</h2>
      <p>A maioria dos problemas do SO-ARM LeRobot está relacionada a permissões seriais, alimentação incorreta, cabos de servo soltos, versões do ffmpeg, cache de calibração ou nomes de câmera incompatíveis.</p>
    </div>
    <details className="content-details">
      <summary>Não foi possível conectar na porta /dev/ttyACM0</summary>
      <p>Conceda permissões seriais e confirme se o dispositivo existe.</p>
      <pre><code>{`ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM*`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Motor 'gripper' não foi encontrado</summary>
      <p>Verifique se o servo solicitado é o único servo conectado, se o cabo do servo está totalmente inserido e se a fonte de alimentação está correta.</p>
    </details>
    <details className="content-details">
      <summary>Nenhum fluxo válido encontrado no arquivo de entrada</summary>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
    <details className="content-details">
      <summary>ConnectionError: no status packet</summary>
      <p>Verifique se o braço na porta selecionada está ligado. Se o LED de um servo estiver apagado, inspecione o cabo do servo anterior na cadeia em série.</p>
    </details>
    <details className="content-details">
      <summary>A magnitude excede 2047 durante a calibração</summary>
      <p>Desligue e ligue o robô e tente novamente. Se o problema persistir, execute a calibração de posição intermediária e depois refaça a calibração do braço completo.</p>
    </details>
    <details className="content-details">
      <summary>A média dos relatórios de avaliação é infinita</summary>
      <p>Os nomes de câmera como <code>{`front`}</code> e <code>{`side`}</code> devem corresponder aos nomes usados durante a gravação do conjunto de dados.</p>
    </details>
    <details className="content-details">
      <summary>Atalhos de teclado não funcionam durante a gravação</summary>
      <pre><code>{`echo $DISPLAY
pip install pynput==1.6.8`}</code></pre>
    </details>
    <details className="content-details">
      <summary>rerun não tem o atributo scalar</summary>
      <pre><code>{`pip3 install rerun-sdk==0.23`}</code></pre>
    </details>
  </section>

  <section className="section-card course-path-section">
    <div className="section-title">
      <span>Continue aprendendo</span>
      <h2>Trilha de aprendizado do SO-ARM</h2>
      <p>Depois de concluir este guia do LeRobot, continue com depuração de servos, simulação, aprendizado por reforço, GR00T e fluxos de trabalho de braço duplo.</p>
    </div>
    <div className="course-path-grid">
      <a className="course-path-item active" href="/pt-br/lerobot_so100m_new/">
        <span className="course-index">1</span>
        <span className="course-path-copy"><strong>SO100 / SO101 com LeRobot</strong><span>Montagem, calibração, teleoperação, coleta de conjuntos de dados, treinamento e avaliação.</span></span>
        <span className="course-tag">Artigo atual</span>
      </a>
      <a className="course-path-item" href="/pt-br/lerobot_steering_gear_debugging_tool/">
        <span className="course-index">2</span>
        <span className="course-path-copy"><strong>Ferramenta de Depuração de Servo</strong><span>Verifique IDs de servos, posição zero, direção, comunicação e calibração de posição intermediária.</span></span>
        <span className="course-tag">Depuração</span>
      </a>
      <a className="course-path-item" href="/pt-br/simulate_soarm101_by_leisaac/">
        <span className="course-index">3</span>
        <span className="course-path-copy"><strong>Simulação LeIsaac</strong><span>Entenda a simulação do SO-ARM, cenas e configuração de tarefas antes do Sim2Real.</span></span>
        <span className="course-tag">Simulação</span>
      </a>
      <a className="course-path-item" href="/pt-br/training_soarm101_policy_with_isaacLab/">
        <span className="course-index">4</span>
        <span className="course-path-copy"><strong>Aprendizado por Reforço no Isaac Lab</strong><span>Treine políticas em simulação e aprenda o design de recompensas e o fluxo de implantação.</span></span>
        <span className="course-tag">RL</span>
      </a>
      <a className="course-path-item" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
        <span className="course-index">5</span>
        <span className="course-path-copy"><strong>SO101 com NVIDIA GR00T</strong><span>Ajuste fino modelos de IA incorporada / VLA e faça a implantação no Jetson Thor.</span></span>
        <span className="course-tag">VLA</span>
      </a>
      <a className="course-path-item" href="/pt-br/lerobot_double_arm_so_arm_training/">
        <span className="course-index">6</span>
        <span className="course-path-copy"><strong>Treinamento SO-ARM de Braço Duplo</strong><span>Passe de tarefas de braço único para coleta de dados e treinamento com dois braços.</span></span>
        <span className="course-tag">Braço duplo</span>
      </a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Referências</span>
      <h2>Referências e suporte</h2>
    </div>
    <div className="reference-grid">
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://huggingface.co/docs/lerobot/index">Documentação do LeRobot</a>
      <a href="https://github.com/Seeed-Projects/lerobot">Seeed-Projects LeRobot</a>
      <a href="https://forum.seeedstudio.com/">Fórum Seeed Studio</a>
      <a href="https://discord.gg/8TnwDdjFGU">LeRobot Discord</a>
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
.rebot-page * { box-sizing: border-box; }
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); text-align: center; }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-card-grid, .module-summary-grid, .spec-grid, .tips-grid, .notice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.step-card, .module-summary-card, .spec-card, .tips-grid div, .notice-card, .command-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.step-card:hover, .course-path-item:hover, .reference-grid a:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.step-card strong, .module-summary-card b, .spec-card b, .tips-grid b, .notice-card strong { color: var(--rb-text); font-size: 1rem; }
.step-card p, .module-summary-card span, .spec-card span, .tips-grid span, .notice-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; overflow: hidden; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "Expandir"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "Recolher"; }
.command-flow > div, .command-card { margin: 1rem 0; }
.command-flow h3, .command-card h3 { margin-top: 0; color: var(--rb-text); }
.callout { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; }
.callout.warning { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; transition: all 0.18s ease; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; border-collapse: collapse; }
.rebot-page table th, .rebot-page table td { border: 1px solid var(--rb-border); padding: 0.65rem; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .tips-grid div, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); position: static; } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } .safety-alert { grid-template-columns: 1fr; } }
`}</style>
