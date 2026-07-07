---
description: Este guia ajudará você a começar com o reBot Arm B601-RS, incluindo verificações da fonte de alimentação, montagem, calibração, configuração do MotorBridge e configuração básica de software.
title: Início Rápido do reBot Arm B601-RS
keywords:
  - reBot
  - B601-RS
  - Braço Robótico
  - Robô
  - LeRobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/
---

# Início Rápido do reBot Arm B601-RS

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Coloque seu reBot Arm B601-RS online com segurança, do unboxing à calibração</h2>
    <p>Este guia segue o fluxo real de primeiro uso: identifique o tipo do seu kit, verifique a fonte de alimentação de 48V, monte o braço se necessário, inspecione o chicote de cabos, configure o PCAN-USB, calibre as posições zero e teste o braço no MotorBridge.</p>
    <div className="hero-actions">
      <a href="#agent">Comece com o Agente de IA</a>
      <a href="#start-path">Escolha seu caminho de configuração</a>
      <a href="#motorbridge">Ir para o MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Caminho de leitura recomendado</strong>
    <span>Se você usa Codex, Cursor, Trae ou ferramentas semelhantes, comece primeiro com o fluxo de trabalho do Agente de IA.</span>
    <span>Kit pré-montado: os IDs dos motores já estão gravados. Concentre-se na fiação, alimentação, PCAN-USB e calibração da posição zero.</span>
  </div>
</section>

<div className="quick-note">
  <strong>Lembrete de segurança:</strong> O B601-RS usa uma fonte de alimentação de 48V e atuadores de junta RobStride. Prenda o braço antes da depuração, mantenha pelo menos 1 metro de distância durante os testes de movimento e sempre desligue a alimentação antes de conectar ou desconectar cabos de motor ou conectores XT30.
</div>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de Segurança: Limpe a Área de Trabalho do Robô Antes de Executar</strong>
    <p>Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor, objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer afastado da faixa de movimento do robô.</p>
    <ul>
      <li>Não toque nas juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de executar calibração, MotorBridge, teleoperação, coleta de dados, controle de IK, controle de trajetória, compensação de gravidade, preensão visual, ações ROS2 ou execução MoveIt, certifique-se de que o braço robótico esteja firmemente fixado.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores PCAN-USB, conectores XT30 ou conectores de alimentação.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="reBot B601-RS quick navigation">
  <a href="#start-path">Caminho de Configuração</a>
  <a href="#power">Verificação de Energia</a>
  <a href="#assembly">Etapa 1 Montagem</a>
  <a href="#motorbridge">Etapa 2 Calibração / Agente de IA</a>
  <a href="#pcan">PCAN-USB</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Comece Aqui</span>
    <h2>Primeiro, identifique o tipo do seu kit</h2>
    <p>O fluxo de trabalho é diferente para um kit B601-RS pré-montado e um kit DIY. Confirmar isso primeiro ajuda a evitar gravação desnecessária de ID de motor ou outras operações arriscadas.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>Comprei um kit pré-montado</b>
      <span>Os IDs dos motores já foram gravados. Após o unboxing, conecte o chicote das Juntas 1-2, verifique a fonte de alimentação, configure o PCAN-USB e prossiga para a calibração da posição zero.</span>
      <em>Comece a partir da Etapa 2</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>Comprei um kit DIY ou preciso montá-lo eu mesmo</b>
      <span>Recomendamos abrir primeiro o fluxo de trabalho do Agente de IA para que o Agente possa orientar as verificações de ambiente e segurança antes de você concluir a montagem, fiação, verificações de energia, configuração do PCAN-USB e calibração.</span>
      <em>Siga Etapa 1 → Etapa 2</em>
    </a>
  </div>

  :::tip
  Foi verificado que máquinas virtuais têm desempenho insuficiente para a demonstração e podem introduzir problemas de configuração. Recomendamos usar sempre que possível uma máquina física com Ubuntu.
  :::
</section>

<section className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>Visão geral do projeto</h2>
    <p>O projeto reBot Arm é open source no <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a>. Este guia conduz você pelo fluxo básico do B601-RS, da montagem ao controle via MotorBridge.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
  </div>

  <div className="badge-row">
    <span>Braço Robótico de 6 DOF</span>
    <span>Motores RobStride</span>
    <span>MotorBridge</span>
    <span>Código Aberto</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html" target="_blank">Obter reBot Arm B601-RS</a>
  </div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de Segurança Antes de Executar</strong>
    <p>Remova objetos de valor e mantenha todo o pessoal afastado dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="power" className="section-card warning-section">
  <div className="section-title">
    <span>Antes de Ligar</span>
    <h2>Fonte de alimentação: verifique isto antes de ligar o braço</h2>
    <p>O B601-RS não inclui uma fonte de alimentação por padrão em algumas configurações. Use uma fonte de alimentação de 48V de marca confiável e ajuste corretamente o seletor de voltagem para sua região antes de ligar.</p>
  </div>

  :::danger
  Não use fontes de alimentação sem marca ou inseguras. Sempre desconecte a alimentação antes de fazer a fiação, conectar ou desconectar conectores XT30 ou conectar cabos de motor.
  :::

  <div className="power-grid">
    <div>
      <h4>Regiões 220V</h4>
      <p>Ajuste o seletor de voltagem na lateral da fonte de alimentação para <strong>230V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="Interruptor 230V" />
    </div>
    <div>
      <h4>Regiões 110V</h4>
      <p>Ajuste o seletor de voltagem na lateral da fonte de alimentação para <strong>115V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="Interruptor 115V" />
    </div>
  </div>

  <p>Você pode adquirir o <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html" target="_blank">kit de adaptador de energia MeanWell de 48V 12,5A</a> open source ou consultar a BOM no repositório GitHub para montar você mesmo o gabinete da fonte de alimentação. A auto-montagem é recomendada apenas para desenvolvedores com experiência em montagem de fontes de alimentação.</p>

  <div className="image-frame compact-image">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" alt="Fonte de alimentação do reBot Arm B601-RS" />
  </div>

  <details className="video-details">
    <summary>Ver o vídeo de referência da fonte de alimentação</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="Power supply reference video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 1</span>
    <div>
      <h2>Monte o braço robótico</h2>
      <p>Esta etapa é obrigatória para kits DIY. Se você comprou um kit pré-montado, pode pular esta seção e ir diretamente para a calibração e operação básica.</p>
    </div>
  </div>

  <div className="checklist-grid">
    <div><strong>Verifique com cuidado</strong><span>O kit inclui muitos parafusos e peças estruturais, alguns dos quais são semelhantes. Confirme as especificações e a orientação antes de apertar.</span></div>
    <div><strong>Sugestão de ferramenta</strong><span>Recomenda-se uma chave de fenda elétrica. Ajuste o torque para um nível baixo a médio, em torno de 3–6 kgf.cm, para evitar espanar os parafusos.</span></div>
    <div><strong>Aviso de segurança</strong><span>O corpo do braço contém peças metálicas. Evite prender os dedos ou sofrer esmagamentos. Crianças só devem montá-lo sob supervisão de um adulto.</span></div>
  </div>

  :::warning
  O link do vídeo de montagem foi intencionalmente deixado em branco por enquanto e será adicionado após o envio do vídeo. Pequenos ajustes de peças podem ocorrer ao longo do tempo; as peças enviadas devem ser tratadas como a referência final.
  :::

  <details className="content-details" open>
    <summary>Espaço reservado para o vídeo de montagem</summary>
    <div className="video-placeholder">
      Link do vídeo de montagem: <span>a ser adicionado</span>
    </div>
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de Segurança Antes de Executar</strong>
    <p>Remova objetos de valor e mantenha todo o pessoal afastado dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="motorbridge" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 2</span>
    <div>
      <h2>Calibre o braço robótico e execute o primeiro teste</h2>
      <p>Esta etapa abrange inspeção do chicote de cabos, calibração da posição zero, instalação do MotorBridge e depuração básica.</p>
    </div>
  </div>

  :::tip
  Se você comprou uma unidade pré-montada, todos os IDs dos motores já foram gravados e não precisam ser regravados. Para reduzir o desgaste dos cabos durante o transporte, o chicote entre a Junta 1 e a Junta 2 não vem pré-instalado. Após abrir a embalagem, encontre no pacote o chicote com um conector em ângulo e um conector reto e conecte-o entre a Junta 1 e a Junta 2.
  :::

  <div id="agent" className="agent-inline-card">
    <div className="section-title">
      <span>Recomendado primeiro</span>
      <h2>Use primeiro um Agente de IA para inicialização guiada</h2>
      <p>Se você estiver usando ferramentas de codificação com IA como Codex, Cursor, Trae ou Claude Code, recomendamos começar com o fluxo de trabalho do Agente de IA. O Agente pode seguir o AGENTS.md para guiá-lo pelas verificações de ambiente, varredura online dos motores, configuração do PCAN-USB, inicialização do MotorBridge Gateway e calibração da posição zero.</p>
    </div>

    :::warning
    O fluxo de trabalho do Agente de IA ainda está em versão beta. Mantenha o braço robótico fixo, fique fora de sua área de movimento durante a depuração e desligue a alimentação antes de conectar ou desconectar cabos dos motores ou conectores XT30. Se o Agente der instruções que entrem em conflito com este guia, siga este guia.
    :::

    <div className="path-grid">
      <div className="path-card recommended">
        <b>Prompt recomendado para kits pré-montados</b>
        <span>Os IDs dos motores já foram gravados. Peça ao Agente para escanear os motores, verificar a fiação, validar o PCAN-USB, iniciar o MotorBridge e orientar a calibração da posição zero. Não regrave os IDs dos motores.</span>
        <em>Recomendado</em>
      </div>
      <div className="path-card">
        <b>Prompt recomendado para kits DIY ou recém-montados</b>
        <span>Se você precisar de uma inicialização completa, peça ao Agente para seguir o AGENTS.md passo a passo, desde as verificações de ambiente e varredura dos motores até a inicialização do gateway e a calibração.</span>
        <em>Fluxo de trabalho completo</em>
      </div>
    </div>

    Copie o seguinte prompt para sua ferramenta de codificação com IA:

    ```text
    Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help me initialize the reBot Arm B601-RS.

    If I am using a pre-assembled kit, do not rewrite the motor IDs. Only scan motors 1-7, verify that all motors are online, and continue with PCAN-USB, MotorBridge Gateway, and zero-position calibration checks.

    If I am using a DIY or newly assembled kit, confirm the safety requirements before each step and guide me through the full initialization workflow.
    ```

    :::tip
    As ferramentas recomendadas incluem Codex, Cursor, Trae, Claude Code e assistentes de codificação com IA semelhantes. O fluxo de trabalho da interface Web nesta Wiki ainda é mantido para usuários que preferem seguir as etapas manualmente.
    :::
  </div>

  <details className="content-details">
    <summary>Peça de proteção do chicote do Motor 1</summary>

    A tensão de longo prazo no chicote do Motor 1 pode desgastar o conector do motor e levar a um mau contato elétrico. A impressão da seguinte peça pode reduzir esse risco.

    | Descrição da peça | Imagem | Nome do arquivo | Material | Qtde | Especificações de impressão |
    | ---- | ---- | ---- | ---- | ---- | ---- |
    | Presilhas de chicote de fiação dupla face para Motor 1 | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/RS_Motor1_wiring_harness_clip.jpg" width="100" /> | [3D File](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/RS_Motor1_wiring_harness_clip.stp) | Bambu Lab PLA preto | 2 pcs | Bico de 0,4 mm, altura de camada de 0,2 mm, 30% de preenchimento |
  </details>

  <div className="feature-grid">
    <div><strong>Controle tudo-em-um do MotorBridge</strong><span>Suporta RobStride, Damiao, Hightorque, MyActuator, Hexfellow e muito mais, enquanto continua oferecendo suporte à série de braços reBot.</span></div>
    <div><strong>Recursos para reBot</strong><span>Inclui calibração de posição zero com um clique, gravação de parâmetros, controle de motor por arrastar e soltar e visualização de modelo integrada.</span></div>
    <div><strong>Suporte multiplataforma</strong><span>Funciona em Windows, Ubuntu e macOS, com um SDK em Python que oferece funcionalidade consistente.</span></div>
  </div>

  <details className="video-details" open>
    <summary>Ver vídeo de calibração e primeiros passos</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="reBot Arm B601-RS calibration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <section className="sub-step-block">
    <h3>1. Instalar o Miniforge (recomendado)</h3>
    <p>Instale o Miniforge e crie um ambiente virtual isolado para evitar conflitos de pacotes. Este fluxo de trabalho é compatível com Windows, Ubuntu, macOS, Jetson e Raspberry Pi.</p>

    <details className="content-details">
      <summary>Ver comandos de instalação do Miniforge</summary>

      Ubuntu / Jetson / Raspberry Pi:

      ```bash
      wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
      bash Miniforge3-$(uname)-$(uname -m).sh
      ```

      macOS:

      ```bash
      curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
      bash Miniforge3-MacOSX-$(uname -m).sh
      ```

      Windows: abra a página de releases do Miniforge e baixe o `Miniforge3-Windows-x86_64.exe` mais recente:

      ```text
      https://github.com/conda-forge/miniforge/releases
      ```
    </details>

    :::tip
    Se o Git Bash não conseguir encontrar o comando `conda`, inicialize o conda primeiro:

    ```bash
    source <install_path>/etc/profile.d/conda.sh
    echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
    source ~/.bashrc
    ```

    Usuários do PowerShell podem executar:

    ```bash
    conda init powershell
    ```
    :::
  </section>

  <section className="sub-step-block">
    <h3>2. Criar e ativar o ambiente reBot</h3>

    ```bash
    conda create -y -n rebot python=3.12
    conda activate rebot
    ```

    <p>Sempre que você abrir um novo terminal para usar recursos relacionados ao reBot, execute novamente <code>conda activate rebot</code>.</p>
  </section>

  <section className="sub-step-block">
    <h3>3. Instalar o MotorBridge</h3>

    :::tip Nota para usuários de macOS
    Se a taxa de quadros da teleoperação estiver baixa no macOS, isso pode ser causado por um driver WCH CH34x desatualizado. Para macOS 10.14 e posterior, o AppleUSBCHC0M já está incorporado ao sistema. Você pode desinstalar o driver antigo e usar o driver integrado.
    :::

    ```bash
    pip install motorbridge
    ```
  </section>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes da execução</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section id="pcan" className="section-card">
  <div className="section-title">
    <span>Interface CAN</span>
    <h2>Configurar o PCAN-USB</h2>
    <p>O PCAN-USB permite que seu computador acesse o barramento CAN a 1 Mbps para que possa se comunicar com os atuadores RobStride no B601-RS.</p>
  </div>

  <details className="content-details" open>
    <summary>Ubuntu / Jetson / Raspberry Pi</summary>

    ```bash
    sudo modprobe peak_usb
    ip -br link

    sudo ip link set can0 down 2>/dev/null
    sudo ip link set can0 type can bitrate 1000000 restart-ms 100
    sudo ip link set can0 up
    ```
  </details>

  <details className="content-details">
    <summary>macOS</summary>

    Instale primeiro o PCBUSB:

    ```bash
    curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
      https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
    tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
    cd PCBUSB
    sudo ./install.sh
    ```

    Configure `DYLD_LIBRARY_PATH` para que o `motorbridge-gateway` possa encontrar a biblioteca de runtime do PCBUSB:

    ```bash
    mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
    cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
    export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
    EOF

    echo $DYLD_LIBRARY_PATH
    ```

    Verifique se o ambiente está pronto:

    ```bash
    python3 -c "import motorbridge; print('motorbridge OK')"
    motorbridge-cli --help
    python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
    ```
  </details>

  <details className="content-details">
    <summary>Windows</summary>
    Visite a <a href="https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/" target="_blank">página oficial do PCAN-USB</a> e instale o driver do PCAN-USB.
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes da execução</strong>
    <p>Remova objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<section className="section-card warning-section">
  <div className="section-title">
    <span>Redefinir posição zero</span>
    <h2>Iniciar o MotorBridge Gateway para gravação e depuração da posição zero</h2>
    <p>Após abrir o MotorBridge Studio, copie o comando que corresponde ao seu sistema operacional e à sua placa controladora e, em seguida, confirme o endereço IP e a porta antes de executá-lo.</p>
  </div>

  <div className="danger-list">
    <strong>Regras de segurança antes da depuração</strong>
    <ul>
      <li>Prepare 2 grampos de fixação; tamanho ≥ 3 polegadas é recomendado.</li>
      <li>Use uma fonte de alimentação chaveada de 48 V de boa procedência com saída XT30.</li>
      <li>Mantenha-se a pelo menos 1 metro de distância durante a depuração e a operação.</li>
      <li>Não conecte ou desconecte motores com o sistema energizado. Desconecte a alimentação antes de conectar ou desconectar conectores XT30 2+2.</li>
      <li>Não sobrecarregue nem exceda a velocidade dos motores. Verifique a fiação e os fixadores antes da inicialização.</li>
      <li>Defina parâmetros de programa razoáveis e um mecanismo de parada de emergência para evitar movimentos descontrolados.</li>
    </ul>
  </div>

  Abra o <a href="https://motorbridge.github.io/motorbridge-studio/" target="_blank">MotorBridge Studio</a> no seu navegador, clique em Help e copie o comando correspondente para o seu sistema e placa controladora.

  ```bash
  motorbridge-gateway --bind 127.0.0.1:9002
  ```

  No macOS, se a biblioteca de tempo de execução PCBUSB não puder ser carregada, use:

  ```bash
  DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002
  ```
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Trilha de aprendizado do reBot B601-RS</h2>
    <p>Estes tutoriais foram projetados para serem seguidos em ordem: Introdução → LeRobot → Pinocchio → Pega visual → ROS2. Use os links abaixo para alternar entre os módulos.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item active" href="/pt-br/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Introdução</strong><span>Conclua o unboxing, a fiação, as verificações de energia, a configuração do PCAN-USB, a calibração e os primeiros testes de movimento.</span></span>
      <span className="course-tag">Comece aqui</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Teleoperação e Coleta de Dados com LeRobot</strong><span>Teleopere o braço, conecte câmeras, grave conjuntos de dados e prepare tarefas de aprendizado por imitação.</span></span>
      <span className="course-tag">Coleta de dados</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualização de Cinemática com Pinocchio</strong><span>Entenda modelos de robôs, juntas, sistemas de coordenadas, cinemática direta/inversa, trajetórias e compensação da gravidade.</span></span>
      <span className="course-tag">Controle</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Demo de Pega Visual</strong><span>Combine percepção RGB-D, calibração mão-olho, YOLO / GraspNet e geração de poses de pega para agarrar objetos reais.</span></span>
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
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.agent-inline-card { margin: 1rem 0 1.25rem; padding: 1.15rem; border-radius: 18px; background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08)); border: 1px solid rgba(37,99,235,0.22); }
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
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Collapse"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.video-placeholder { margin: 1rem; padding: 2.5rem 1rem; border: 1px dashed var(--rb-border); border-radius: 16px; text-align: center; color: var(--rb-muted); background: var(--rb-surface); }
.video-placeholder span { color: var(--rb-primary); font-weight: 850; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page :global(table) { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }


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
