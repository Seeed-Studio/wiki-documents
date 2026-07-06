---
description: Ferramenta de Depuração de Engrenagem de Direção para SO-ARM no LeRobot.
title: Ferramenta de Depuração de Engrenagem de Direção para SO-ARM no LeRobot
keywords:
  - Lerobot
  - SO-ARM
  - Robótica
  - Servo
  - Calibração
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/pt-br/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# Ferramenta de Depuração de Engrenagem de Direção para SO-ARM no LeRobot

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>Depure IDs de servos, posições neutras, torque e arquivos de calibração do LeRobot com uma ferramenta GUI</h2>
    <p>A Ferramenta de Depuração de Engrenagem de Direção, também chamada de <strong>Seeed_RoboController</strong>, ajuda você a inspecionar o status dos servos do SO-ARM, reescrever IDs de servos, definir valores neutros, controlar servos individuais e gerenciar arquivos de calibração do LeRobot para braços líder e seguidor.</p>
    <div className="hero-actions">
      <a href="#quick-path">Ver fluxo de trabalho</a>
      <a href="#install">Instalar ferramenta</a>
      <a href="#servo-id">Corrigir IDs de servos</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="SO-ARM Steering Gear Debugging Tool" />
    <strong>Depuração de servo · Recuperação de ID · Calibração neutra</strong>
    <span>Use esta ferramenta quando um servo estiver ausente, um ID estiver duplicado, a posição neutra estiver errada ou quando for necessário inspecionar arquivos de calibração do LeRobot.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Alerta de segurança: a alimentação e o torque podem mover o braço de forma inesperada</strong>
    <p>Antes de habilitar o torque ou mover qualquer servo, limpe a área de trabalho do robô e mantenha as mãos longe das juntas, engrenagens, elos e da garra. Ao desabilitar o torque, o braço pode ficar solto e cair, portanto, sustente-o com a mão.</p>
    <ul>
      <li>Para o SO101 Pro, use <strong>5V para o braço líder</strong> e <strong>12V para o braço seguidor</strong>.</li>
      <li>Não escreva IDs de servos enquanto vários servos com IDs duplicados estiverem conectados ao mesmo barramento.</li>
      <li>Mova os controles deslizantes lentamente. As partes mecânicas podem bloquear o servo antes que a GUI atinja seu valor mínimo ou máximo.</li>
      <li>Desligue o braço antes de reconectar chicotes de servos ou alterar a fiação.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="SO-ARM debugging tool quick navigation">
  <a href="#quick-path">Fluxo de trabalho</a>
  <a href="#overview">Visão geral</a>
  <a href="#install">Instalar</a>
  <a href="#check-servos">Verificar</a>
  <a href="#servo-id">IDs de servos</a>
  <a href="#neutral">Neutro</a>
  <a href="#single-servo">Controle</a>
  <a href="#calibration-files">Arquivos</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Comece aqui</span>
    <h2>Fluxo de trabalho de depuração recomendado</h2>
    <p>Siga esta ordem quando um braço líder ou seguidor SO-ARM não puder ser detectado, tiver IDs de servos duplicados, tiver uma posição neutra incorreta ou não conseguir concluir a calibração do LeRobot.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Etapa 0</span><strong>Instalar e iniciar a ferramenta</strong><p>Clone o Seeed_RoboController, instale as dependências, verifique o ambiente e abra a GUI.</p><em>Obrigatório</em></a>
    <a className="path-card" href="#check-servos"><span>Etapa 1</span><strong>Verificar status dos servos</strong><p>Confirme se os servos 1-6 são detectados. Servos ausentes geralmente indicam problemas de fiação, alimentação ou ID.</p><em>Leia primeiro</em></a>
    <a className="path-card" href="#servo-id"><span>Etapa 2</span><strong>Recuperar IDs duplicados</strong><p>Desconecte a cadeia de servos e conecte apenas um servo por vez antes de reescrever os IDs.</p><em>Reparo de ID</em></a>
    <a className="path-card" href="#neutral"><span>Etapa 3</span><strong>Gravar valores neutros</strong><p>Mova o braço para a pose neutra correta e, em seguida, grave a posição atual como o valor neutro do servo.</p><em>Centralização</em></a>
    <a className="path-card" href="#single-servo"><span>Etapa 4</span><strong>Testar servos individuais</strong><p>Habilite o torque e mova cada servo lentamente para verificar direção, tensão, temperatura, carga e status.</p><em>Teste de movimento</em></a>
    <a className="path-card" href="#calibration-files"><span>Etapa 5</span><strong>Gerenciar arquivos de calibração</strong><p>Execute, modifique, exclua ou crie arquivos de calibração do LeRobot para braços líder e seguidor.</p><em>LeRobot</em></a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>Para que esta ferramenta é usada</h2>
    <p>A GUI é projetada para montagem, reparo e manutenção do SO-ARM100 / SO-ARM101. Ela é especialmente útil antes ou depois de executar <code>{`lerobot-setup-motors`}</code> e <code>{`lerobot-calibrate`}</code>.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Detecção de status dos servos</b><span>Verifique rapidamente se os IDs de servos 1-6 são detectados e se a comunicação básica está funcionando.</span></div>
    <div className="module-summary-card"><b>Recuperação de ID</b><span>Reescreva IDs de servos incorretos ou duplicados conectando um servo por vez.</span></div>
    <div className="module-summary-card"><b>Calibração neutra</b><span>Defina a posição atual do servo como o valor neutro e verifique se o braço retorna à pose intermediária esperada.</span></div>
    <div className="module-summary-card"><b>Controle de servo individual</b><span>Habilite o torque, mova um servo lentamente e inspecione posição, tensão, temperatura, velocidade, carga, corrente, movimento, modelo e status.</span></div>
    <div className="module-summary-card"><b>Registradores avançados</b><span>Leia e escreva dados de registradores, altere a taxa de transmissão ou restaure as configurações de fábrica quando necessário.</span></div>
    <div className="module-summary-card"><b>Gerenciamento de arquivos de calibração</b><span>Selecione, execute, modifique, exclua ou crie arquivos de calibração do LeRobot para braços líder e seguidor.</span></div>
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 0</span>
    <div>
      <h2>Instalar e iniciar o Seeed_RoboController</h2>
      <p>A ferramenta é compatível com Windows, Ubuntu e macOS. Recomenda-se instalá-la dentro do seu ambiente virtual do LeRobot.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">0.1</span><strong>Clonar repositório</strong><p>Baixe a ferramenta de depuração GUI a partir do repositório GitHub Seeed-Projects.</p></div>
    <div className="step-card"><span className="step-mini">0.2</span><strong>Instalar dependências</strong><p>Instale as dependências do Python no ambiente do LeRobot ou em outro ambiente virtual dedicado.</p></div>
    <div className="step-card"><span className="step-mini">0.3</span><strong>Verificar ambiente</strong><p>Execute a verificação de configuração e certifique-se de que o relatório indique que o ambiente foi aprovado.</p></div>
    <div className="step-card"><span className="step-mini">0.4</span><strong>Iniciar GUI</strong><p>Inicie a GUI com seleção interativa de porta ou especifique manualmente as portas, se necessário.</p></div>
  </div>

  <details className="content-details">
    <summary>Comandos de instalação</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController

# Recommended: run this inside your LeRobot virtual environment.
pip install -r requirements.txt

# Environment check. Expected result: [OK] Environment check passed
python setup.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Iniciar a GUI</summary>
    <pre><code>{`# Interactive port selection
python -m src.gui.factory_calibration_tool

# Optional: manually specify ports if needed
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1`}</code></pre>
  </details>
</section>

<section id="check-servos" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 1</span>
    <div>
      <h2>Verificar se os servos são detectados corretamente</h2>
      <p>Comece verificando se os servos 1-6 são detectados. Se todos os seis servos forem detectados com sucesso, o barramento de servos e as funções básicas geralmente estão funcionando.</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="All servos detected in the debugging tool" />
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>Caso normal</strong><span>Os servos 1-6 são todos detectados. Você pode continuar com o teste de neutro, controle de servo individual ou gerenciamento de arquivos de calibração do LeRobot.</span></div>
    <div className="notice-card warning"><strong>Caso anormal</strong><span>Se alguns servos não forem detectados, verifique primeiro a fiação e a alimentação. Em seguida, feche e reabra a GUI. Se o problema persistir, os IDs dos servos podem estar duplicados ou escritos incorretamente.</span></div>
  </div>

  <details className="content-details">
    <summary>Exemplo: servos ausentes ou detectados incorretamente</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="Servo missing or not detected" />
    </div>
    <p>Isso pode acontecer se o comando para calibração de braço completo tiver sido usado acidentalmente como um comando de configuração de ID de servo ou se vários servos agora compartilharem o mesmo ID.</p>
  </details>
</section>

<section id="servo-id" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Importante: conecte apenas um servo ao reescrever IDs</strong>
      <p>Os servos compartilham um único barramento serial. Se vários servos com o mesmo ID estiverem conectados, alterar um ID pode alterar todos os servos com esse ID. Desconecte a cadeia de servos e reescreva os IDs um por um.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Etapa 2</span>
    <div>
      <h2>Recuperar IDs de servo duplicados ou incorretos</h2>
      <p>Se um servo fisicamente conectado for exibido com o número errado, clique no servo detectado e altere o ID de volta para o número de junta correto.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">2.1</span><strong>Desconectar chicotes dos servos</strong><p>Remova os chicotes em cadeia para que apenas um servo possa ser conectado à placa controladora.</p></div>
    <div className="step-card"><span className="step-mini">2.2</span><strong>Conectar um servo</strong><p>Conecte apenas o servo que você deseja regravar. Não é necessário desmontar completamente o braço.</p></div>
    <div className="step-card"><span className="step-mini">2.3</span><strong>Comparar junta física e ID detectado</strong><p>Por exemplo, o servo conectado pode ser a junta 6, enquanto a GUI o detecta como ID 4.</p></div>
    <div className="step-card"><span className="step-mini">2.4</span><strong>Gravar o ID correto</strong><p>Clique no servo detectado na GUI e altere seu ID para o número de junta esperado.</p></div>
    <div className="step-card"><span className="step-mini">2.5</span><strong>Repetir e reconectar</strong><p>Repita para outros servos e, em seguida, conecte novamente os chicotes um por um.</p></div>
  </div>

  <details className="content-details">
    <summary>Etapa 2.1: remover os chicotes dos fios dos servos</summary>
    <p>Remova os chicotes na seguinte ordem: servo 6 para 5, servo 5 para 4, servo 4 para 3, servo 3 para 2, servo 2 para 1 e, por fim, servo 1 para a placa de controle.</p>
    <div className="image-grid">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="Remover chicote entre o servo 6 e o servo 5" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" alt="Remover chicote entre o servo 5 e o servo 4" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" alt="Remover chicote entre o servo 4 e o servo 3" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" alt="Remover chicote entre o servo 3 e o servo 2" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" alt="Remover chicote entre o servo 2 e o servo 1" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="Remover chicote entre o servo 1 e a placa de controle" />
    </div>
  </details>

  <details className="content-details">
    <summary>Etapa 2.2: conectar um servo e regravar seu ID</summary>
    <p>Conecte apenas um servo à placa controladora. O exemplo abaixo mostra como conectar o servo 6 para recuperação de ID.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="Conectar apenas um servo à placa controladora" />
    </div>
    <p>Se a GUI mostrar o ID 4, mas o servo fisicamente conectado deveria ser o servo 6, clique no servo 4 e altere seu ID para 6.</p>
    <div className="image-grid two-col">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="ID de servo incorreto detectado" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="Alterar ID do servo na GUI" />
    </div>
  </details>
</section>

<section id="neutral" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Sustente o braço ao desativar o torque</strong>
      <p>Depois de clicar em <strong>Serial Port Disable Motors</strong>, o braço ficará solto. Segure o braço antes de desativar o torque.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Gravar o valor neutro no servo</h2>
      <p>A calibração neutra grava a pose física atual como o valor intermediário de cada servo. Isso é útil quando a calibração do LeRobot relata valores anormais de magnitude ou faixa.</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="Posição neutra do SO-ARM" />
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">3.1</span><strong>Executar teste neutro</strong><p>Clique em <strong>Serial Port Neutral Test</strong> e verifique se o braço se move para a pose neutra esperada.</p></div>
    <div className="step-card"><span className="step-mini">3.2</span><strong>Mover para a pose neutra</strong><p>Se a pose estiver errada, mova manualmente o braço para a posição neutra mostrada acima.</p></div>
    <div className="step-card"><span className="step-mini">3.3</span><strong>Gravar valor neutro</strong><p>Clique em <strong>Serial Port Neutral Calibration</strong> para gravar a posição atual como o valor neutro do servo.</p></div>
    <div className="step-card"><span className="step-mini">3.4</span><strong>Desativar torque com cuidado</strong><p>Clique em <strong>Serial Port Disable Motors</strong> somente enquanto estiver sustentando o braço com a mão.</p></div>
  </div>

  <details className="content-details">
    <summary>GUI de calibração neutra</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="Calibração neutra na GUI" />
    </div>
  </details>
</section>

<section id="single-servo" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>Controlar e inspecionar um único servo</h2>
      <p>Use o controle de servo único para verificar direção, comunicação, torque, temperatura e status. Mova lentamente e evite os batentes mecânicos de fim de curso.</p>
    </div>
  </div>

  <div className="image-grid two-col">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="Posições neutras de controle de servo único" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" alt="Movimento de servo único após o torque ser ativado" />
  </div>

  <div className="notice-grid">
    <div className="notice-card warning"><strong>Não arraste os controles deslizantes até o extremo</strong><span>A estrutura impressa do braço pode bloquear fisicamente algumas posições antes que o controle deslizante atinja 0 ou o máximo.</span></div>
    <div className="notice-card"><strong>Ative o torque primeiro</strong><span>Você pode ativar todo o torque com um clique ou ativar o torque para um único servo antes de movê-lo.</span></div>
  </div>

  <details className="content-details">
    <summary>Campos de status do servo</summary>
    <div className="api-grid">
      <div className="api-card"><b>Pos</b><span>Posição</span></div>
      <div className="api-card"><b>V</b><span>Tensão</span></div>
      <div className="api-card"><b>T</b><span>Temperatura</span></div>
      <div className="api-card"><b>Spd</b><span>Velocidade</span></div>
      <div className="api-card"><b>Load</b><span>Torque / carga</span></div>
      <div className="api-card"><b>Cur</b><span>Corrente</span></div>
      <div className="api-card"><b>Mov</b><span>Status de movimento</span></div>
      <div className="api-card"><b>Model</b><span>Modelo e autoridade</span></div>
      <div className="api-card"><b>Status</b><span>Normal, sobrecorrente ou sobrecarga</span></div>
    </div>
  </details>
</section>

<section id="advanced" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>Use ferramentas avançadas somente quando necessário</h2>
      <p>O painel avançado pode ler ou gravar dados de registradores, modificar a taxa de transmissão e restaurar as configurações de fábrica. Use-o com cuidado, pois valores incorretos podem tornar o servo difícil de acessar.</p>
    </div>
  </div>

  <details className="content-details">
    <summary>Painel de ferramentas avançadas</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="Ferramentas avançadas de servo" />
    </div>
    <ul>
      <li>Ler dados do endereço de registrador correspondente.</li>
      <li>Gravar dados de registrador correspondentes.</li>
      <li>Modificar a taxa de transmissão.</li>
      <li>Restaurar as configurações de fábrica.</li>
    </ul>
  </details>
</section>

<section id="calibration-files" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 6</span>
    <div>
      <h2>Gerenciar arquivos de calibração do LeRobot</h2>
      <p>A GUI pode executar, modificar, excluir ou criar arquivos de calibração para os braços líder e seguidor do SO-ARM. Isso é útil ao substituir servos ou recuperar de uma calibração incorreta.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Executar arquivo de calibração</b><span>Selecione um arquivo de calibração de líder ou seguidor existente e use-o para um teste.</span></div>
    <div className="module-summary-card"><b>Modificar arquivo de calibração</b><span>Inspecione e ajuste um arquivo de calibração existente quando você souber qual parâmetro precisa ser alterado.</span></div>
    <div className="module-summary-card"><b>Excluir arquivo de calibração</b><span>Remova arquivos de calibração incorretos antes de executar novamente uma calibração limpa do LeRobot.</span></div>
    <div className="module-summary-card"><b>Criar novo arquivo</b><span>Use o Assistente de Calibração da GUI para registrar valores neutros, mínimos e máximos para cada servo.</span></div>
  </div>

  <details className="content-details">
    <summary>Painel de gerenciamento de arquivos de calibração</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" alt="Gerenciamento de arquivos de calibração de braço robótico" />
    </div>
  </details>

  <details className="content-details">
    <summary>Criar um novo arquivo de calibração com o Assistente de Calibração da GUI</summary>
    <p>Clique em <strong>GUI Calibration Wizard</strong> e, em seguida, selecione o tipo de robô correspondente e o número da porta.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" alt="Assistente de Calibração da GUI" />
    </div>
    <p>O assistente pode registrar valores de calibração mínimos, máximos e neutros para cada servo.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" alt="Registrar valores de faixa e neutros" />
    </div>
    <p>Primeiro, coloque cada servo na posição neutra e clique em <strong>Record Neutral Value</strong> para os servos 1-6, um por um.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" alt="Registrar valor neutro para cada servo" />
    </div>
    <p>Em seguida, clique em <strong>Start Recording Range</strong> para cada servo, gire-o até as faixas máxima e mínima e clique em <strong>Stop Recording Range</strong>. Repita isso para cada servo, dê um nome ao arquivo de calibração e salve-o.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Perguntas frequentes</span>
    <h2>Casos comuns de depuração</h2>
    <p>A maioria dos problemas de depuração do servo SO-ARM é causada por fiação, fonte de alimentação incorreta, IDs duplicados, permissões ausentes ou arquivos de calibração do LeRobot desatualizados.</p>
  </div>

  <details className="content-details">
    <summary>1. Alguns servos não são detectados</summary>
    <ul>
      <li>Verifique se a fonte de alimentação está conectada e usa a tensão correta.</li>
      <li>Verifique se o chicote de 3 pinos do servo está solto ou desconectado.</li>
      <li>Feche a GUI e abra novamente.</li>
      <li>Se o problema persistir, desconecte a cadeia de servos e reescreva os IDs um por um.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>2. O servo conectado é exibido com o ID errado</summary>
    <p>Isso significa que o ID do servo está incorreto. Conecte apenas esse servo à placa controladora, clique no servo detectado na GUI e altere o ID de volta para o número de junta esperado.</p>
  </details>

  <details className="content-details">
    <summary>3. Por que devo conectar apenas um servo ao escrever IDs?</summary>
    <p>Os servos SO-ARM compartilham o mesmo barramento serial. Se vários servos com o mesmo ID estiverem conectados, escrever um novo ID pode alterar todos os servos com esse ID duplicado ao mesmo tempo.</p>
  </details>

  <details className="content-details">
    <summary>4. O braço cai após desativar o torque</summary>
    <p>Isso é esperado. Quando o torque é desativado, os servos deixam de manter a posição e o braço fica mole. Sempre apoie o braço com a mão antes de desativar o torque.</p>
  </details>

  <details className="content-details">
    <summary>5. A calibração do LeRobot ainda relata valores anormais após a calibração neutra</summary>
    <p>Exclua os arquivos de calibração antigos e execute a calibração do LeRobot novamente. Verifique os diretórios de calibração do robô e do teleoperador:</p>
    <pre><code>{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots/*
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators/*`}</code></pre>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Trilha de aprendizado do SO-ARM</h2>
    <p>Use a ferramenta de depuração junto com o tutorial SO-ARM LeRobot. Depois que os IDs dos servos e as posições neutras estiverem corretos, continue com teleoperação, coleta de dados, simulação e treinamento de políticas.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/lerobot_so100m_new/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Introdução ao SO-ARM LeRobot</strong><span>Monte o SO-ARM100 / SO-ARM101, instale o LeRobot, calibre, teleopere, registre conjuntos de dados, treine e avalie políticas.</span></span>
      <span className="course-tag">Guia principal</span>
    </a>
    <a className="course-path-item active" href="/pt-br/lerobot_steering_gear_debugging_tool/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Ferramenta de depuração de servos</strong><span>Recupere IDs de servos, escreva valores neutros, teste servos individuais e gerencie arquivos de calibração.</span></span>
      <span className="course-tag">Artigo atual</span>
    </a>
    <a className="course-path-item" href="/pt-br/simulate_soarm101_by_leisaac/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Simulação LeIsaac</strong><span>Entenda o modelo SO-ARM, o cenário de simulação e a configuração da tarefa antes do Sim2Real.</span></span>
      <span className="course-tag">Simulação</span>
    </a>
    <a className="course-path-item" href="/pt-br/training_soarm101_policy_with_isaacLab/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Aprendizado por reforço no Isaac Lab</strong><span>Treine políticas em simulação e aprenda o fluxo de trabalho de aprendizado por reforço.</span></span>
      <span className="course-tag">RL</span>
    </a>
    <a className="course-path-item" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>SO101 com NVIDIA GR00T</strong><span>Ajuste fino e faça o deploy de um modelo VLA / IA incorporada para fluxos de trabalho do SO-ARM.</span></span>
      <span className="course-tag">VLA</span>
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
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .step-card-grid, .module-summary-grid, .notice-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .notice-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .notice-card strong, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .step-card p, .module-summary-card span, .notice-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.notice-card.warning { border-color: rgba(245,158,11,0.34); background: linear-gradient(135deg, rgba(255,251,235,0.95), rgba(255,247,237,0.88)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "Collapse"; }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.image-wrap { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-grid img { width: 100%; max-width: 900px; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 10px 24px rgba(15,23,42,0.06); background: #fff; }
.image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem; margin: 1rem 0; }
.image-grid.two-col { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
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
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .notice-card.warning { background: linear-gradient(135deg, rgba(245,158,11,0.14), rgba(251,146,60,0.10)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } .step-title-row { display: grid; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .image-grid.two-col { grid-template-columns: 1fr; } }
`}</style>
