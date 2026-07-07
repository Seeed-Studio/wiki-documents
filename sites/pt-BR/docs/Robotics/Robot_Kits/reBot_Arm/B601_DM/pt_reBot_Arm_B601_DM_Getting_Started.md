---
description: Este guia ajuda você a começar com segurança com o reBot Arm B601-DM, incluindo seleção do kit, verificação de energia, montagem, configuração de ID dos motores, calibração e configuração do MotorBridge.
title: Início Rápido do reBot Arm B601-DM
keywords:
  - reBot
  - B601-DM
  - Braço Robótico
  - Robô
  - LeRobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: ZhuYaohui
createdAt: '2026-04-13'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/
---

# Introdução ao reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Coloque o reBot Arm B601-DM online com segurança, do unboxing à calibração</h2>
    <p>Este guia é organizado de acordo com o fluxo real de configuração inicial: identificar o tipo de kit, verificar a fonte de alimentação, montar o braço se necessário, gravar os IDs dos motores, calibrar a posição zero e executar seu primeiro teste com o MotorBridge.</p>
    <div className="hero-actions">
      <a href="#start-path">Escolha seu caminho de configuração</a>
      <a href="#motorbridge">Ir para o MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Caminho de leitura recomendado</strong>
    <span>Kit pré-montado: pule a montagem e a configuração de ID dos motores. Comece a partir da Etapa 3.</span>
    <span>Kit DIY: siga a Etapa 1 → Etapa 2 → Etapa 3 em ordem.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de Segurança: Limpe a Área de Trabalho do Robô Antes de Executar</strong>
    <p>
      Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor,
      objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um raio de <strong>1 metro</strong>
      da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer fora
      da área de movimento do robô.
    </p>
    <ul>
      <li>Não toque nas juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de calibração, teleoperação, controle por IK, controle de trajetória, compensação de gravidade, execução ROS2 / MoveIt ou pega visual, certifique-se de que a base do braço esteja firmemente fixada.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores USB2CAN / PCAN-USB, conectores XT30 ou conectores de energia.</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>Lembrete de segurança:</strong> a configuração do reBot Arm envolve uma fonte de alimentação de 24 V, motores habilitados e juntas mecânicas em movimento. Trabalhe em uma mesa estável, mantenha pelo menos 1 metro de distância durante a depuração e sempre desligue antes de conectar ou desconectar motores ou conectores XT30.
</div>

<nav className="doc-nav" aria-label="reBot B601-DM quick navigation">
  <a href="#start-path">Caminho de Configuração</a>
  <a href="#power">Verificação de Energia</a>
  <a href="#assembly">Etapa 1 Montagem</a>
  <a href="#motor-id">Etapa 2 IDs dos Motores</a>
  <a href="#motorbridge">Etapa 3 Calibração</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Comece Aqui</span>
    <h2>Primeiro, identifique qual kit você possui</h2>
    <p>Diferentes configurações de kit exigem etapas de configuração diferentes. Escolher o caminho correto primeiro ajuda a evitar retrabalho e previne operações inseguras.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>Comprei um kit pré-montado</b>
      <span>Pule a Etapa 1 e a Etapa 2. Verifique o chicote e a fonte de alimentação, depois vá diretamente para a Etapa 3 para calibração do ponto zero e o primeiro teste de movimento.</span>
      <em>Comece a partir da Etapa 3</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>Comprei um kit DIY ou preciso montá-lo eu mesmo</b>
      <span>Monte primeiro a estrutura mecânica, depois grave cada CAN ID / Master ID de motor e, por fim, execute a calibração do ponto zero.</span>
      <em>Siga Etapa 1 → 2 → 3</em>
    </a>
  </div>

  <div className="tip-box">Máquinas virtuais foram verificadas como tendo desempenho insuficiente para executar a demonstração e podem introduzir problemas de configuração. Recomendamos usar uma máquina física com Ubuntu para controlar o braço robótico.</div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>Projeto e opções de compra</h2>
    <p>O projeto reBot Arm é open source no <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a>. Este guia conduz você pelo fluxo básico do B601-DM, da montagem à operação.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
  </div>

  <div className="badge-row">
    <span>Python 3.10+</span>
    <span>Linux / Ubuntu</span>
    <span>Pinocchio</span>
    <span>MotorBridge</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">Obter reBot Arm B601-DM</a>
  </div>

  | Configuração | Corpo | Garra | Motores | Estrutura | Recomendado para |
  |:---|:---:|:---:|:---:|:---:|:---|
  | **Kit Completo** | ✅ | ✅ | ✅ | ✅ | Usuários que desejam a experiência completa de braço robótico |
  | **Somente Garra** | ❌ | ✅ | ❌ | ❌ | Usuários que já possuem um braço e precisam apenas de um efetuador final |
  | **Somente Corpo (Estrutura)** | ✅ | ❌ | ❌ | ✅ | Usuários que já possuem motores e querem construir a estrutura |
  | **Somente Corpo (Motores)** | ✅ | ❌ | ✅ | ❌ | Usuários que precisam do corpo motorizado do braço |
</section>

<section id="power" className="section-card warning-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de Segurança Antes de Executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="section-title">
    <span>Antes de Ligar</span>
    <h2>Fonte de alimentação: verifique isto antes de ligar</h2>
    <p>O braço robótico pode não incluir uma fonte de alimentação por padrão. Use uma fonte de alimentação confiável de 24 V e ajuste o seletor de tensão de acordo com a tensão da rede elétrica local.</p>
  </div>

  <div className="danger-box">Não use fontes de alimentação sem marca ou inseguras. Sempre desconecte a energia antes de fazer a fiação, conectar ou desconectar conectores XT30 ou cabos de motor.</div>

  <div className="power-grid">
    <div>
      <h4>Regiões 220V</h4>
      <p>Ajuste o seletor da fonte de alimentação para <strong>230V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="230V switch" />
    </div>
    <div>
      <h4>Regiões 110V</h4>
      <p>Ajuste o seletor da fonte de alimentação para <strong>115V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="115V switch" />
    </div>
  </div>

  <p>Você pode adquirir o <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html" target="_blank">kit de adaptador de energia MeanWell de 24V 14,6A</a> open source ou usar uma fonte compatível MeanWell LRS-350-24 de um revendedor confiável. A lista de materiais (BOM) do gabinete open source está disponível no repositório GitHub e é recomendada apenas para desenvolvedores com experiência em montagem de fontes de alimentação.</p>

  <details className="video-details">
    <summary>Ver vídeo de montagem do gabinete da fonte de alimentação</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="Power supply assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 1</span>
    <div>
      <h2>Monte o braço robótico</h2>
      <p>Esta etapa é necessária apenas para kits DIY. Se você comprou um kit pré-montado, pule esta etapa.</p>
    </div>
  </div>

  <div className="tip-box">Se você comprou a versão pré-montada, pule esta etapa e vá diretamente para <a href="#motorbridge">Etapa 3: Calibração e primeira execução</a>.</div>

  <div className="checklist-grid">
    <div><strong>Verifique com cuidado</strong><span>O kit contém muitos parafusos e peças de aparência semelhante. Verifique a especificação e a orientação de cada peça antes de apertar.</span></div>
    <div><strong>Recomendação de ferramenta</strong><span>É recomendada uma chave de fenda elétrica. Ajuste o torque para uma faixa de baixa a média, em torno de 3–6 kgf·cm.</span></div>
    <div><strong>Opere com segurança</strong><span>Cuidado com lesões por beliscão ou impacto. Crianças só devem montar o kit sob supervisão de um adulto.</span></div>
  </div>

  <div className="warning-box">No vídeo de montagem, o parafuso D4 × 7 entre o Motor 5 e o Motor 6 não precisa ser instalado. Para o kit DIY, os 7 parafusos D4 × 7 fornecidos são suficientes para concluir a montagem.</div>

  <details className="content-details" open>
    <summary>Abrir vídeo de montagem</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="reBot Arm B601-DM assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motor-id" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de Segurança Antes de Executar</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Etapa 2</span>
    <div>
      <h2>Gravar IDs dos motores e posições de zero</h2>
      <p>Esta etapa é necessária apenas para kits DIY. Ela configura o CAN ID e o Master ID para cada motor de junta.</p>
    </div>
  </div>

  <div className="tip-box">Se você comprou a versão pré-montada, pule esta etapa e vá diretamente para <a href="#motorbridge">Etapa 3</a>.</div>

  <div className="danger-list">
    <strong>Antes de redefinir o motor</strong>
    <ul>
      <li>Prepare 2 grampos de fixação, de preferência de 3 polegadas ou maiores.</li>
      <li>Use uma fonte de alimentação chaveada confiável de 24V 15A com saída XT30.</li>
      <li>Mantenha pelo menos 1 metro de distância durante a depuração e operação.</li>
      <li>Não conecte ou desconecte os motores com o sistema energizado. Desligue a alimentação antes de conectar ou desconectar os conectores XT30 2+2.</li>
      <li>Não sobrecarregue nem opere os motores em velocidade excessiva. Verifique a fiação e os fixadores antes da partida.</li>
      <li>Use parâmetros de controle adequados e uma estratégia de parada de emergência para evitar movimentos descontrolados.</li>
    </ul>
  </div>

  <details className="content-details">
    <summary>Prompt de ajuda para agente de IA</summary>
    <div className="warning-box">Esta seção está em versão beta. Siga todas as precauções de segurança. Se a sugestão da IA entrar em conflito com este guia, siga este guia e entre em contato com nossos engenheiros para obter suporte.</div>
    <p>Copie o prompt abaixo para o seu assistente de IA:</p>
    <pre><code>{`Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Lista de verificação de preparação</summary>
    <div className="two-col">
      <div>
        <h4>Hardware</h4>
        <ul>
          <li><a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">Braço robótico reBot Arm B601-DM × 1</a></li>
          <li><a href="https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html" target="_blank">Placa adaptadora USB-CAN × 1</a></li>
          <li><a href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html" target="_blank">Placa de separação de sinal e alimentação × 1</a></li>
          <li>Grampos de marcenaria × 2</li>
          <li>Cabo USB-C × 1</li>
          <li><a href="https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html" target="_blank">Fonte de alimentação 24V 15A × 1</a></li>
        </ul>
      </div>
      <div>
        <h4>Computador e software</h4>
        <ul>
          <li>PC com dual boot: Windows + Ubuntu, ou macOS.</li>
          <li><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool_v2.1.6.8.zip" target="_blank">DM_Tools_v.2.1.6.8.exe</a>, apenas para Windows.</li>
        </ul>
      </div>
    </div>
  </details>

  <h3>Mapeamento de ID dos motores</h3>
  <p>Defina o CAN ID e o Master ID para cada motor de junta de acordo com a tabela abaixo.</p>

  | Número do motor | CAN ID | Master ID |
  |:---:|:---:|:---:|
  | Motor 1 | 0x01 | 0x11 |
  | Motor 2 | 0x02 | 0x12 |
  | Motor 3 | 0x03 | 0x13 |
  | Motor 4 | 0x04 | 0x14 |
  | Motor 5 | 0x05 | 0x15 |
  | Motor 6 | 0x06 | 0x16 |
  | Motor 7 | 0x07 | 0x17 |

  <div className="danger-box">O exemplo a seguir usa o Motor 1. Para cada motor de junta, certifique-se de que o CAN ID e o Master ID correspondam à tabela acima.</div>

  <ol className="ordered-steps">
    <li>Abra o <strong>DM_Tools</strong>, selecione a porta COM USB e defina a taxa de transmissão para <code>921600</code>. Após a conexão, os logs aparecerão no painel Serial.</li>
    <li>Use o cabo de 3 pinos para conectar o Motor 1 à placa adaptadora USB-CAN.</li>
    <li>Abra a página <strong>Parameter Settings</strong>, clique em <strong>Read Parameters</strong>, depois defina o <strong>CAN ID</strong> como <code>0x01</code> e o <strong>Master ID</strong> como <code>0x11</code>.</li>
    <li>Clique em <strong>Write Parameters</strong> para salvar os valores.</li>
    <li>Abra a página <strong>Debug</strong>, verifique os IDs e clique em <strong>Enable</strong>. O LED do motor deve ficar verde fixo.</li>
  </ol>

  <div className="image-grid three">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_connect_en.png" alt="Conexão no DM Tools" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_id_set_en.png" alt="Definir ID do motor" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_enable_en.png" alt="Habilitar motor" />
  </div>

  <div className="tip-box">Após o teste, clique em <strong>Disable</strong> para sair do estado habilitado.</div>

  <details className="content-details">
    <summary>Ver pontos de conexão de cabos para todos os motores</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>Motor 1</th><th>Motor 2</th><th>Motor 3</th><th>Motor 4</th><th>Motor 5</th><th>Motor 6</th><th>Motor 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>Ver exemplos de habilitação de motor</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>Motor 1</th><th>Motor 2</th><th>Motor 3</th><th>Motor 4</th><th>Motor 5</th><th>Motor 6</th><th>Motor 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="video-details">
    <summary>Ver vídeo de configuração de ID do motor</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="Vídeo de configuração de ID do motor" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motorbridge" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes da execução</strong>
    <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Etapa 3</span>
    <div>
      <h2>Calibrar o braço e executar o primeiro teste</h2>
      <p>Esta etapa se aplica tanto a kits pré-montados quanto a kits DIY. Antes de controlar o braço, redefina o ponto zero e inicie o MotorBridge.</p>
    </div>
  </div>

  <div className="tip-box">Para unidades pré-montadas, o chicote entre a Junta 1 e a Junta 2 pode ser deixado não instalado para evitar abrasão do cabo durante o transporte. Após desembalar, localize o chicote com um conector em ângulo e um conector reto e instale-o entre a Junta 1 e a Junta 2.</div>

  <h3>Opcional: imprimir os clipes do chicote do Motor 1</h3>
  <p>A tensão de longo prazo no chicote do Motor 1 pode desgastar o conector e causar mau contato elétrico. Imprimir as peças abaixo pode reduzir esse risco.</p>

  | Peça | Imagem | Arquivo | Material | Qtde | Configurações de impressão |
  |:---|:---:|:---|:---|:---:|:---|
  | Clipe de chicote de fiação de dupla face do Motor 1 | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.jpg" width="100" /> | [Arquivo 3D](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.stp) | PLA preto Bambu Lab | 2 | Bico de 0,4 mm, altura de camada de 0,2 mm, 30% de preenchimento |

  <details className="video-details" open>
    <summary>Ver vídeo de calibração e primeira execução</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="Vídeo de calibração e primeira execução" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <div className="feature-grid">
    <div><strong>Plataforma MotorBridge</strong><span>Uma solução de controle de motores tudo-em-um que oferece suporte a braços Damiao, Robstride, Hightorque, MyActuator, Hexfellow e reBot.</span></div>
    <div><strong>Ferramentas específicas para reBot</strong><span>Inclui calibração de zero com um clique, gravação de parâmetros, controle de motor por arrastar e soltar e visualização de modelo integrada.</span></div>
    <div><strong>Multiplataforma</strong><span>Compatível com Windows, Ubuntu e macOS.</span></div>
  </div>

  <h3>Instalar e iniciar o MotorBridge</h3>

  <div className="install-steps">
    <div><span>1</span><div><b>Instalar o Miniforge</b><p>Instale o Miniforge para criar um ambiente Python isolado e evitar conflitos de pacotes.</p></div></div>
    <div><span>2</span><div><b>Criar o ambiente</b><p>Crie um ambiente Python 3.12 e ative-o sempre que usar as ferramentas reBot.</p></div></div>
    <div><span>3</span><div><b>Instalar o motorbridge</b><p>Instale o pacote Python MotorBridge no ambiente ativado.</p></div></div>
    <div><span>4</span><div><b>Conectar o braço</b><p>Conecte o braço via USB e ligue-o. Usuários de Linux devem conceder permissões seriais.</p></div></div>
    <div><span>5</span><div><b>Iniciar o MotorBridge Studio</b><p>Abra o MotorBridge Studio no navegador e execute o comando de gateway para o seu sistema operacional e placa controladora.</p></div></div>
  </div>

  <details className="content-details" open>
    <summary>Referência de comandos</summary>

    <h4>Ubuntu / Jetson / Raspberry Pi</h4>
    <pre><code>{`wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh`}</code></pre>

    <h4>macOS</h4>
    <pre><code>{`curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh`}</code></pre>

    <h4>Windows</h4>
    <pre><code>{`https://github.com/conda-forge/miniforge/releases`}</code></pre>

    <h4>Criar e ativar o ambiente</h4>
    <pre><code>{`conda create -y -n rebot python=3.12
conda activate rebot`}</code></pre>

    <h4>Instalar o motorbridge</h4>
    <pre><code>{`pip install motorbridge`}</code></pre>

    <h4>Permissão serial no Linux</h4>
    <pre><code>{`sudo chmod 666 /dev/ttyACM*`}</code></pre>

    <h4>Exemplo de gateway no Windows</h4>
    <pre><code>{`motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20`}</code></pre>
  </details>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" alt="Painel de ajuda do MotorBridge" />
  </div>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Perguntas frequentes</span>
    <h2>Problemas comuns</h2>
    <p>Use esta seção se o braço se comportar de forma anormal durante a configuração de ID, calibração ou inicialização do motor.</p>
  </div>

  <details className="content-details" open>
    <summary>Ruído anormal alto ocorre imediatamente após a inicialização do motor</summary>
    <p>Isso pode acontecer se a calibração de parâmetros tiver sido acionada acidentalmente durante a configuração de ID, sobrescrevendo parâmetros de fábrica como a inércia do motor. Use o <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe" target="_blank">DM_Tools_v.1.8.0.1.exe</a> no Windows para exportar parâmetros de um motor saudável do mesmo modelo, importá-los para o motor anormal, atualizar o ID CAN correspondente, gravar os parâmetros e continuar a calibração do ponto zero.</p>
    <div className="image-grid two">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" alt="Exportação de parâmetros no DM tools" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" alt="Importação de parâmetros no DM tools" />
    </div>
    <p><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt" target="_blank">Parâmetros padrão do DM4310</a> · <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt" target="_blank">Parâmetros padrão do DM4340P</a></p>
  </details>

  <details className="content-details">
    <summary>Todos os motores compartilham o mesmo ID CAN</summary>
    <p>Ao usar o <strong>DM_Tools_v.1.8.0.1.exe</strong> para calibração do ponto zero, não clique nos botões Read ou Set ao lado do campo de ID CAN. A página de depuração se comunica pelo barramento CAN; clicar em Set pode atribuir o mesmo ID CAN a todos os motores no barramento CAN.</p>
  </details>
</section>

<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>Trilha de aprendizado</span>
    <h2>Continue com a trilha de aprendizado do reBot B601-DM</h2>
    <p>Esses tutoriais foram projetados para serem lidos na mesma ordem da página de robótica: comece pela inicialização básica, depois avance para coleta de dados com LeRobot, depuração de cinemática, preensão visual e, por fim, integração com ROS2.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step active" href="/pt-br/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>Primeiros passos</strong>
        <small>Conclua o unboxing, cabeamento, verificações de energia, configuração do driver, calibração e testes básicos de movimento.</small>
      </div>
      <em>Artigo atual</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>Teleoperação e coleta de dados com LeRobot</strong>
        <small>Teleopere o braço, conecte câmeras, grave conjuntos de dados, treine políticas e avalie o comportamento do braço real.</small>
      </div>
      <em>Coleta de dados</em>
    </a>
    <a className="course-step" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Visualização de cinemática com Pinocchio</strong>
        <small>Entenda modelos de robôs, referenciais de coordenadas, FK / IK, planejamento de trajetórias e compensação de gravidade.</small>
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
.rebot-page { --rb-bg: #ffffff; --rb-card: #ffffff; --rb-soft: #f8fafc; --rb-text: #111827; --rb-muted: #64748b; --rb-border: rgba(148,163,184,0.28); --rb-primary: #2563eb; --rb-primary-soft: #eff6ff; --rb-green: #0f766e; --rb-green-soft: #ccfbf1; --rb-warn: #b45309; --rb-warn-soft: #fffbeb; --rb-danger: #b91c1c; --rb-danger-soft: #fef2f2; --rb-shadow: 0 18px 45px rgba(15,23,42,0.08); color: var(--rb-text); }
.doc-hero { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0,1.35fr) minmax(270px,0.75fr); gap: 1.4rem; padding: 2rem; margin: 1.4rem 0 1rem; border: 1px solid rgba(37,99,235,0.18); border-radius: 28px; background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.16), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.16), transparent 38%), linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.88)); box-shadow: var(--rb-shadow); }
.eyebrow { display: inline-flex; margin-bottom: 0.65rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.75rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.15; }
.doc-hero p { margin: 0; max-width: 760px; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.15rem; }
.hero-actions a, .buy-box a { display: inline-flex; align-items: center; justify-content: center; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, #2563eb, #14b8a6); box-shadow: 0 12px 24px rgba(37,99,235,0.16); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: rgba(255,255,255,0.84); border: 1px solid rgba(37,99,235,0.18); box-shadow: none; }
.hero-card { display: grid; gap: 0.65rem; align-content: center; padding: 1.1rem; border-radius: 20px; background: rgba(255,255,255,0.76); border: 1px solid rgba(148,163,184,0.25); backdrop-filter: blur(10px); }
.hero-card strong { font-size: 1.02rem; }
.hero-card span { display: block; color: var(--rb-muted); line-height: 1.55; font-size: 0.92rem; }
.quick-note, .tip-box, .warning-box, .danger-box { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; line-height: 1.7; border: 1px solid var(--rb-border); }
.quick-note, .tip-box { color: #075985; background: #f0f9ff; border-color: #bae6fd; }
.warning-box { color: var(--rb-warn); background: var(--rb-warn-soft); border-color: #fde68a; }
.danger-box { color: var(--rb-danger); background: var(--rb-danger-soft); border-color: #fecaca; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap: 0.55rem; margin: 1rem 0 1.8rem; padding: 0.65rem; border-radius: 18px; border: 1px solid var(--rb-border); background: rgba(255,255,255,0.88); backdrop-filter: blur(12px); box-shadow: 0 12px 28px rgba(15,23,42,0.06); }
.doc-nav a { padding: 0.68rem 0.5rem; border-radius: 12px; text-align: center; text-decoration: none !important; color: #334155; background: var(--rb-soft); font-weight: 760; font-size: 0.84rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37,99,235,0.10); }
.section-card { margin: 1.4rem 0; padding: 1.45rem; border-radius: 24px; background: var(--rb-card); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title span { display: inline-flex; margin-bottom: 0.3rem; color: var(--rb-primary); font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 850; }
.section-title h2, .step-title-row h2 { margin: 0.15rem 0 0.45rem; }
.section-title p, .step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .power-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.9rem; margin-top: 1rem; }
.checklist-grid, .feature-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
.path-card, .checklist-grid div, .feature-grid div, .power-grid div { display: block; padding: 1rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { display: block; margin-bottom: 0.45rem; }
.path-card span, .checklist-grid span, .feature-grid span { display: block; color: var(--rb-muted); line-height: 1.58; font-size: 0.91rem; }
.path-card em { display: inline-flex; margin-top: 0.8rem; padding: 0.32rem 0.58rem; border-radius: 999px; color: var(--rb-green); background: var(--rb-green-soft); font-style: normal; font-size: 0.75rem; font-weight: 850; }
.path-card.recommended { border-color: rgba(20,184,166,0.36); background: linear-gradient(180deg, rgba(240,253,250,0.8), var(--rb-soft)); }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-align: center; }
.image-frame img, .image-grid img, .power-grid img { max-width: 100%; border-radius: 12px; }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.42rem 0.68rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-size: 0.8rem; font-weight: 850; }
.buy-box { margin: 1rem 0; text-align: center; }
.step-title-row { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; padding: 0.5rem 0.75rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; }
.danger-list { margin: 1rem 0; padding: 1rem 1.1rem; border-radius: 18px; color: var(--rb-danger); background: var(--rb-danger-soft); border: 1px solid #fecaca; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin: 0; padding-left: 1.2rem; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 18px; background: var(--rb-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.9rem 1rem; font-weight: 850; color: var(--rb-text); }
.content-details > *:not(summary), .video-details > *:not(summary) { margin-left: 1rem; margin-right: 1rem; }
.video-container { position: relative; width: calc(100% - 2rem); margin: 0 1rem 1rem; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col, .image-grid.three, .image-grid.two { display: grid; gap: 1rem; }
.two-col, .image-grid.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
.image-grid.three { grid-template-columns: repeat(3, minmax(0,1fr)); }
.ordered-steps li { margin: 0.5rem 0; line-height: 1.65; }
.wide-scroll { overflow-x: auto; padding-bottom: 0.75rem; }
.wide-scroll table { min-width: 900px; }
.wide-scroll img { max-width: 120px; border-radius: 10px; }
.install-steps { display: grid; gap: 0.75rem; margin: 1rem 0; }
.install-steps > div { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 0.8rem; align-items: start; padding: 0.9rem; border-radius: 16px; background: var(--rb-soft); border: 1px solid var(--rb-border); }
.install-steps span { width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--rb-primary); color: #fff; font-weight: 900; }
.install-steps b { display: block; margin-bottom: 0.25rem; }
.install-steps p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.rebot-page pre { border-radius: 14px; overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111315; --rb-card: #1f2023; --rb-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343842; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-green: #5eead4; --rb-green-soft: rgba(20,184,166,0.16); --rb-shadow: 0 18px 45px rgba(0,0,0,0.30); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.25), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.18), transparent 38%), linear-gradient(135deg, rgba(30,41,59,0.94), rgba(17,24,39,0.9)); border-color: #334155; }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a, html[data-theme='dark'] .hero-actions a:nth-child(2) { background: #24262a; color: #e5e7eb; border-color: #343842; }
html[data-theme='dark'] .quick-note, html[data-theme='dark'] .tip-box { color: #bae6fd; background: rgba(14,165,233,0.10); border-color: rgba(125,211,252,0.22); }
html[data-theme='dark'] .warning-box { color: #fde68a; background: rgba(245,158,11,0.12); border-color: rgba(253,230,138,0.22); }
html[data-theme='dark'] .danger-box, html[data-theme='dark'] .danger-list { color: #fecaca; background: rgba(239,68,68,0.10); border-color: rgba(252,165,165,0.22); }
@media (max-width: 920px) { .doc-hero, .path-grid, .power-grid, .checklist-grid, .feature-grid, .two-col, .image-grid.two, .image-grid.three { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(2, minmax(0,1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.05rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { display: inline-flex; margin-bottom: 0.7rem; } }

/* Aviso de segurança compartilhado e navegação do curso */
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


`}</style>
