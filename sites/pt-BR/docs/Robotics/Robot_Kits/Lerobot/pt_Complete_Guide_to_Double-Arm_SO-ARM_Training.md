---
description: Guia completo para treinamento de SO-ARM de dois braços com LeRobot.
title: Guia Completo para Treinamento de SO-ARM de Dois Braços
keywords:
  - Lerobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 7/1/2026
  author: ZhuYuan
translation:
  skip:
    - zh-CN
url: https://wiki.seeedstudio.com/pt-br/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

# Guia Completo para Treinamento de SO-ARM de Dois Braços

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>Treine um sistema SO-ARM bimanual desde dados de teleoperação até implantação em robô real</h2>
    <p>Este guia reorganiza o fluxo de trabalho completo de dois braços em um caminho seguro passo a passo: fiação de hardware, calibração dos quatro braços, teleoperação de dois braços, gravação de conjunto de dados, gerenciamento de episódios, treinamento ACT e avaliação em robô real.</p>
    <div className="hero-actions">
      <a href="#workflow">Ver fluxo de trabalho</a>
      <a href="#calibration">Iniciar calibração</a>
      <a href="#record-dataset">Gravar conjunto de dados</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" alt="Double-arm SO-ARM training" />
    <strong>Dois líderes · Dois seguidores · Um conjunto de dados bimanual</strong>
    <span>Use movimentos pequenos primeiro. Mantenha ambos os braços seguidores longe de pessoas e objetos durante a teleoperação e a avaliação da política.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de segurança: Limpe as duas áreas de trabalho do robô antes de executar</strong>
    <p>Antes de executar qualquer comando que mova os braços seguidores, remova objetos de valor, cabos, ferramentas e pessoas não relacionadas dentro de um <strong>raio de 1 metro</strong> de ambos os braços.</p>
    <ul>
      <li>Não toque em juntas, horns dos servos, elos, garras ou peças impressas depois que os braços estiverem energizados.</li>
      <li>Verifique se ambos os braços seguidores estão firmemente fixados e se todos os cabos USB e de alimentação estão aliviados de tensão.</li>
      <li>Durante a teleoperação bimanual, fique atento à autocolisão entre os dois braços e à colisão com a mesa.</li>
      <li>Se qualquer braço se mover de forma inesperada, pare o programa primeiro e depois desligue a alimentação antes da inspeção.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">Fluxo de trabalho</a>
  <a href="#hardware">Hardware</a>
  <a href="#calibration">Calibração</a>
  <a href="#teleoperation">Teleoperação</a>
  <a href="#record-dataset">Conjunto de dados</a>
  <a href="#training">Treinamento</a>
  <a href="#deployment">Implantação</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Comece aqui</span>
    <h2>Fluxo de trabalho recomendado para treinamento bimanual</h2>
    <p>Siga esta sequência para separar problemas de fiação, calibração, teleoperação, qualidade do conjunto de dados e implantação da política.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Prepare o ambiente SO-ARM</strong><p>Instale primeiro o LeRobot e verifique se todas as quatro portas seriais USB podem ser detectadas.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Mapeie portas e funções</strong><p>Atribua portas estáveis para seguidor esquerdo, seguidor direito, líder esquerdo e líder direito.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Calibre os quatro braços</strong><p>Crie arquivos de calibração com IDs específicos para bimanual ou copie arquivos existentes com cuidado.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Teleopere sem câmeras</strong><p>Confirme que cada líder controla o seguidor correto antes de adicionar câmeras.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Grave e gerencie dados</strong><p>Grave conjuntos de dados locais ou do Hub, retome sessões interrompidas, reproduza episódios e exclua episódios ruins.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>Treine e implante ACT</strong><p>Treine no conjunto de dados bimanual e depois avalie no robô real com os mesmos nomes de câmera.</p></div>
  </div>
</section>

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Mapeamento de portas e definição de funções</h2>
    <p>Use um mapeamento de funções claro e consistente. Os exemplos abaixo assumem que os dois primeiros dispositivos USB são braços seguidores e os dois seguintes são braços líderes.</p>
  </div>
  <div className="spec-grid">
    <div className="spec-card"><b>Braço seguidor esquerdo</b><span><code>{`/dev/ttyACM0`}</code></span></div>
    <div className="spec-card"><b>Braço seguidor direito</b><span><code>{`/dev/ttyACM1`}</code></span></div>
    <div className="spec-card"><b>Braço líder esquerdo</b><span><code>{`/dev/ttyACM2`}</code></span></div>
    <div className="spec-card"><b>Braço líder direito</b><span><code>{`/dev/ttyACM3`}</code></span></div>
    <div className="spec-card"><b>Tipo de seguidor</b><span><code>{`so101_follower`}</code></span></div>
    <div className="spec-card"><b>Tipo de líder</b><span><code>{`so101_leader`}</code></span></div>
  </div>
  <details className="content-details">
    <summary>Passo 0.1: instale dependências e conceda permissões USB</summary>
    <p>Instale primeiro o ambiente SO-ARM LeRobot e depois conceda acesso às quatro portas seriais.</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3`}</code></pre>
  </details>
</section>

<section id="calibration" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Calibre os dois seguidores e os dois líderes</h2>
      <p>O controle bimanual depende de IDs de calibração corretos. Use IDs explícitos de esquerda/direita para que o LeRobot possa encontrar os arquivos esperados.</p>
    </div>
  </div>
  <details className="content-details">
    <summary>Calibre os braços seguidores esquerdo e direito</summary>
    <pre><code>{`lerobot-calibrate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_bimanual_follower_left

lerobot-calibrate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower_right`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Calibre os braços líderes esquerdo e direito</summary>
    <pre><code>{`lerobot-calibrate \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM2 \\
  --teleop.id=my_awesome_bimanual_leader_left

lerobot-calibrate \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader_right`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Locais esperados dos arquivos de calibração</summary>
    <pre><code>{`~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Opcional: reutilizar arquivos de calibração existentes</summary>
    <pre><code>{`CAL_DIR=~/.cache/huggingface/lerobot/calibration/robots

cp $CAL_DIR/so101_follower/my_awesome_follower_arm1.json \\
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/so101_follower/my_awesome_follower_arm2.json \\
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm3.json \\
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm4.json \\
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_right.json`}</code></pre>
  </details>
</section>

<section id="teleoperation" className="section-card step-section">
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>Execute primeiro sem câmeras</strong><p>Antes de gravar dados, certifique-se de que o líder esquerdo controla o seguidor esquerdo e o líder direito controla o seguidor direito.</p></div></div>
  <div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>Teleoperação de dois braços</h2><p>Comece com um teste sem câmera e depois adicione câmeras após o mapeamento dos braços estar correto.</p></div></div>
  <details className="content-details">
    <summary>Teleopere sem câmeras</summary>
    <pre><code>{`lerobot-teleoperate \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Teleopere com câmeras de punho</summary>
    <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --display_data=true`}</code></pre>
  </details>
</section>

<section id="record-dataset" className="section-card step-section">
  <div className="step-title-row"><span className="step-pill">Etapa 4</span><div><h2>Registrar e gerenciar um conjunto de dados bimanual</h2><p>Comece com uma tarefa de entrega estável e mantenha os nomes das câmeras, o texto da tarefa e os IDs dos robôs consistentes entre treinamento e avaliação.</p></div></div>
  <div className="tips-grid">
    <div className="tips-card"><b>Exemplo de tarefa</b><span>Pegue o cubo com o braço esquerdo e entregue-o ao braço direito.</span></div>
    <div className="tips-card"><b>Escala recomendada</b><span>Registre cerca de 50 episódios primeiro e só então adicione variações depois que a linha de base estiver estável.</span></div>
    <div className="tips-card"><b>Regra de retomada</b><span><code>{`--dataset.num_episodes`}</code> significa quantos novos episódios serão registrados desta vez, não o total final.</span></div>
  </div>
  <details className="content-details">
    <summary>Salvar localmente sem enviar para o Hub</summary>
    <pre><code>{`lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.push_to_hub=false \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.num_episodes=50 \\
  --dataset.fps=30 \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10 \\
  --dataset.video=true \\
  --dataset.vcodec=libsvtav1 \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Enviar para o Hugging Face Hub</summary>
    <pre><code>{`export HF_USER=your_hf_username

lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM1 \\
  --robot.right_arm_config.port=/dev/ttyACM2 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30} }' \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM3 \\
  --teleop.right_arm_config.port=/dev/ttyACM4 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --dataset.repo_id=\${HF_USER}/bimanual_so101_task \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.num_episodes=50 \\
  --dataset.fps=30 \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10 \\
  --dataset.video=true \\
  --dataset.vcodec=libsvtav1 \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Retomar um conjunto de dados interrompido</summary>
    <pre><code>{`lerobot-record \\
  --resume=true \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --teleop.type=bi_so_leader \\
  --teleop.left_arm_config.port=/dev/ttyACM2 \\
  --teleop.right_arm_config.port=/dev/ttyACM3 \\
  --teleop.id=my_awesome_bimanual_leader \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.push_to_hub=false \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.num_episodes=35 \\
  --dataset.fps=30 \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10 \\
  --dataset.video=true \\
  --dataset.vcodec=libsvtav1 \\
  --display_data=true`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Reproduzir ou excluir um episódio</summary>
    <pre><code>{`# Replay the 25th episode. Episode index is 0-based.
lerobot-replay \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --dataset.episode=24

# Delete the same episode.
python -m lerobot.scripts.lerobot_edit_dataset \\
  --repo_id=seeed/bimanual_so101_task \\
  --operation.type=delete_episodes \\
  --operation.episode_indices="[24]"`}</code></pre>
  </details>
</section>

<section id="training" className="section-card step-section">
  <div className="step-title-row"><span className="step-pill">Etapa 5</span><div><h2>Treinar uma política ACT</h2><p>ACT é uma boa primeira política para validar todo o pipeline bimanual antes de tentar políticas maiores.</p></div></div>
  <details className="content-details">
    <summary>Treinar a partir de um conjunto de dados local</summary>
    <pre><code>{`lerobot-train \\
  --dataset.repo_id=seeed/bimanual_so101_task \\
  --policy.type=act \\
  --policy.device=cuda \\
  --steps=60000 \\
  --output_dir=outputs/train/act_bimanual_so101 \\
  --wandb.enable=false \\
  --policy.push_to_hub=false`}</code></pre>
  </details>
  <details className="content-details">
    <summary>Treinar a partir do Hugging Face Hub</summary>
    <pre><code>{`export HF_USER=your_hf_username

lerobot-train \\
  --dataset.repo_id=\${HF_USER}/bimanual_so101_task \\
  --policy.type=act \\
  --policy.device=cuda \\
  --steps=100000 \\
  --output_dir=outputs/train/act_bimanual_so101 \\
  --wandb.enable=false \\
  --policy.push_to_hub=false`}</code></pre>
  </details>
</section>

<section id="deployment" className="section-card step-section">
  <div className="safety-alert compact"><div className="safety-alert-icon">⚠️</div><div className="safety-alert-content"><strong>Verificação de segurança da avaliação</strong><p>Avalie primeiro com episódios curtos. Confirme que a política foi treinada com os mesmos nomes de câmeras e descrição de tarefa usados durante a gravação.</p></div></div>
  <div className="step-title-row"><span className="step-pill">Etapa 6</span><div><h2>Implantar a política no robô real</h2><p>Use <code>{`lerobot-record`}</code> com um checkpoint de política para registrar episódios de avaliação no sistema bimanual real.</p></div></div>
  <details className="content-details">
    <summary>Salvar dados de avaliação localmente</summary>
    <pre><code>{`lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_config.port=/dev/ttyACM0 \\
  --robot.right_arm_config.port=/dev/ttyACM1 \\
  --robot.id=my_awesome_bimanual_follower \\
  --robot.left_arm_config.cameras='{ left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30} }' \\
  --robot.right_arm_config.cameras='{ right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \\
  --dataset.push_to_hub=false \\
  --dataset.num_episodes=10 \\
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \\
  --dataset.fps=30 \\
  --dataset.video=true \\
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \\
  --display_data=true`}</code></pre>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title"><span>Perguntas frequentes</span><h2>Problemas comuns</h2><p>A maioria dos problemas bimanuais é causada por incompatibilidade de IDs de calibração, portas trocadas, flags de retomada ausentes ou nomes de câmeras inconsistentes.</p></div>
  <details className="content-details"><summary>A teleoperação pede para recalibrar</summary><p><code>{`bi_so_follower`}</code> não consegue encontrar arquivos de calibração com os sufixos esperados <code>{`_left`}</code> e <code>{`_right`}</code>. Recalibre com IDs bimanuais ou copie os arquivos de calibração existentes para os nomes esperados.</p></details>
  <details className="content-details"><summary>Os braços esquerdo e direito estão trocados</summary><p>Troque <code>{`left_arm_config.port`}</code> e <code>{`right_arm_config.port`}</code> e execute a teleoperação novamente sem câmeras para verificar o mapeamento.</p></details>
  <details className="content-details"><summary>Ao continuar a gravação, é informado que o diretório já existe</summary><p>Adicione <code>{`--resume=true`}</code>. Lembre-se de que <code>{`--dataset.num_episodes`}</code> é o número de episódios adicionais a serem registrados na sessão atual.</p></details>
  <details className="content-details"><summary>O treinamento não encontra o conjunto de dados local</summary><p>Confirme se o conjunto de dados está salvo no caminho de cache LeRobot esperado ou adicione o <code>{`--dataset.root`}</code> correto ao treinar.</p></details>
  <details className="content-details"><summary>A avaliação se comporta de forma incorreta após o treinamento</summary><p>Verifique se nomes de câmeras como <code>{`left_wrist`}</code> e <code>{`right_wrist`}</code>, texto da tarefa, ID do robô e arquivos de calibração correspondem ao conjunto de dados usado durante o treinamento.</p></details>
</section>

<section className="section-card course-path-section">
  <div className="section-title"><span>Continuar aprendendo</span><h2>Trilha de aprendizado SO-ARM</h2><p>Siga estes tutoriais SO-ARM em ordem ao construir um fluxo de trabalho completo com LeRobot.</p></div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/lerobot_so100m_new/"><span className="course-index">1</span><span className="course-path-copy"><strong>SO-ARM LeRobot</strong><span>Configure SO-ARM100 / SO-ARM101, calibre, teleopere, grave, treine e avalie.</span></span><span className="course-tag">Comece aqui</span></a>
    <a className="course-path-item" href="/pt-br/lerobot_steering_gear_debugging_tool/"><span className="course-index">2</span><span className="course-path-copy"><strong>Steering Gear Debugging Tool</strong><span>Inspecione servos, recupere IDs, grave valores neutros e gerencie arquivos de calibração.</span></span><span className="course-tag">Depuração</span></a>
    <a className="course-path-item active" href="/pt-br/lerobot_double_arm_so_arm_training/"><span className="course-index">3</span><span className="course-path-copy"><strong>Treinamento SO-ARM de dois braços</strong><span>Colete demonstrações bimanual, treine ACT e avalie em uma configuração real de dois braços.</span></span><span className="course-tag">Artigo atual</span></a>
    <a className="course-path-item" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="course-index">4</span><span className="course-path-copy"><strong>SO101 com NVIDIA GR00T</strong><span>Passe dos conjuntos de dados LeRobot para o ajuste fino de VLA e implantação no Jetson.</span></span><span className="course-tag">VLA</span></a>
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
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
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
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .step-card-grid, .module-summary-grid, .spec-grid, .tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .spec-card, .tips-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .spec-card b, .tips-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .step-card p, .module-summary-card span, .spec-card span, .tips-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .tips-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .step-title-row { display: grid; } }
`}</style>

