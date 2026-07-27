---
description: Este wiki fornece um fluxo de trabalho completo do LeRobot para SO-ARM100 / SO-ARM101, incluindo montagem, calibração, teleoperação, câmeras, gravação de conjunto de dados, treinamento, avaliação e dicas de implantação.
title: Introdução ao SO-ARM10x no LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robótica
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 3/11/2026
  author: ZhangJiaQuan
createdAt: '2025-06-05'
updatedAt: '2026-07-15'
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introdução aos braços robóticos SO-ARM100 e SO-ARM101 no LeRobot

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM10x × LeRobot</span>
    <h2>Da montagem e calibração à coleta de dados, treinamento e implantação em robôs reais</h2>
    <p>
      Este wiki orienta você por todo o fluxo de trabalho do SO-ARM100 / SO-ARM101 no LeRobot:
      configuração de hardware, configuração de servos, calibração do braço, teleoperação, integração de câmeras,
      gravação de conjunto de dados, visualização, reprodução, treinamento de políticas, avaliação e dicas de implantação.
    </p>
    <div className="hero-actions">
      <a href="#quick-path">Ver trilha de aprendizado</a>
      <a href="#install-lerobot">Instalar LeRobot</a>
      <a href="#record-dataset">Gravar um conjunto de dados</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Trilha de leitura recomendada</strong>
    <span>Novos usuários: comece com especificações, regras de alimentação e configuração de servos.</span>
    <span>Usuários de braços pré-montados: vá direto para calibração do braço completo e teleoperação.</span>
    <span>Usuários atuais do LeRobot: vá direto para câmeras, gravação de conjuntos de dados, treinamento ou FAQ.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de segurança: limpe a área de trabalho do braço robótico antes de executar programas de movimento</strong>
    <p>
      Antes de executar qualquer programa que possa mover o braço robótico, remova itens de valor, objetos frágeis,
      ferramentas, cabos e objetos não relacionados em um raio de 1 metro da área de trabalho. Durante a depuração e operação,
      mantenha as pessoas afastadas da faixa de movimento do braço.
    </p>
    <ul>
      <li>Não toque em juntas, motores, elos, garra ou ferramentas de extremidade após o braço ser energizado.</li>
      <li>Antes da configuração de servos, calibração, teleoperação, gravação de conjunto de dados, reprodução ou avaliação de políticas, certifique-se de que o braço esteja firmemente fixado.</li>
      <li>Mantenha pelo menos 1 metro de distância de segurança e certifique-se de que as pessoas próximas entendam que o braço pode se mover de forma repentina.</li>
      <li>Se ocorrer movimento anormal, ruído, trepidação, cabos soltos, mau contato de alimentação ou perda de comunicação, pare o programa imediatamente e desligue a alimentação antes da inspeção.</li>
      <li>Desligue a alimentação antes de conectar ou desconectar cabos de servo, cabos USB, conectores de alimentação ou cabos da placa de controle do motor.</li>
    </ul>
  </div>
</div>

{/* Markdown headings are intentionally kept outside visual cards so Docusaurus can generate the right-side table of contents. */}

<nav className="doc-nav" aria-label="SO-ARM10x LeRobot quick navigation">
  <a href="#quick-path">Trilha de aprendizado</a>
  <a href="#overview">Visão geral</a>
  <a href="#specifications">Especificações</a>
  <a href="#install-lerobot">Instalar</a>
  <a href="#setup-motors-assembly">Motores</a>
  <a href="#calibration">Calibração</a>
  <a href="#teleoperation">Teleoperação</a>
  <a href="#camera">Câmeras</a>
  <a href="#record-dataset">Conjunto de dados</a>
  <a href="#training">Treinamento</a>
  <a href="#faq">FAQ</a>
</nav>

## Trilha de aprendizado recomendada

<section id="quick-path" className="section-card course-path-section">
  <div className="section-title">
    <span>Visão geral das etapas</span>
    <h2>Siga o fluxo de trabalho real de depuração passo a passo</h2>
    <p>Para a primeira configuração do SO-ARM10x, conclua a preparação de hardware, configuração de ambiente e calibração antes de passar para teleoperação, câmeras, conjuntos de dados, treinamento e avaliação.</p>
  </div>

  <div className="course-path-grid">
    <div className="course-path-item"><span className="course-index">1</span><div className="course-path-copy"><strong>Entenda o kit</strong><p>Confirme sua versão do SO-ARM100 / SO-ARM101, tipo de motor, tensão e lista de materiais (BOM).</p></div><span className="course-tag">Preparar</span></div>
    <div className="course-path-item"><span className="course-index">2</span><div className="course-path-copy"><strong>Instale o LeRobot</strong><p>Configure Miniforge, o repositório verificado Seeed LeRobot, ffmpeg, PyTorch e dependências de câmera.</p></div><span className="course-tag">Ambiente</span></div>
    <div className="course-path-item"><span className="course-index">3</span><div className="course-path-copy"><strong>Configure os motores e faça a montagem</strong><p>Defina IDs e taxas de transmissão dos servos e, em seguida, monte os braços líder e seguidor.</p></div><span className="course-tag">Hardware</span></div>
    <div className="course-path-item"><span className="course-index">4</span><div className="course-path-copy"><strong>Calibre e teleopere</strong><p>Calibre ambos os braços e verifique se a cadeia de controle de líder para seguidor é estável.</p></div><span className="course-tag">Controle</span></div>
    <div className="course-path-item"><span className="course-index">5</span><div className="course-path-copy"><strong>Adicione câmeras e grave dados</strong><p>Conecte câmeras OpenCV, RealSense ou Orbbec e grave episódios limpos e repetíveis.</p></div><span className="course-tag">Dados</span></div>
    <div className="course-path-item"><span className="course-index">6</span><div className="course-path-copy"><strong>Treine e avalie políticas</strong><p>Comece com ACT e depois explore SmolVLA, Pi0, Pi0.5, GR00T, PEFT e inferência assíncrona.</p></div><span className="course-tag">IA</span></div>
  </div>
</section>

## Visão geral

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>Introdução ao projeto</h2>
    <p>SO-ARM10x combina um braço robótico de baixo custo e código aberto com o ecossistema LeRobot para coleta de dados, aprendizado por imitação e implantação em robôs reais.</p>
  </div>

:::tip
Este tutorial foi atualizado para o [LeRobot](https://huggingface.co/docs/lerobot/index) mais recente. Para ver a versão anterior, clique [aqui](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/).
:::

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) é um projeto de braço robótico totalmente open-source lançado pela [TheRobotStudio](https://www.therobotstudio.com/). Ele inclui tanto um braço seguidor quanto um braço líder, com arquivos detalhados de impressão 3D e guias de operação. O [LeRobot](https://github.com/huggingface/lerobot/tree/main) fornece modelos PyTorch, conjuntos de dados e ferramentas para robótica no mundo real, reduzindo a barreira de entrada para aprendizado por imitação e implantação de políticas.

<div className="video-container">
  <iframe
    loading="lazy"
    width="900"
    height="600"
    src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd&autoplay=0&mute=1"
    title="Vídeo de visão geral do SO-ARM10x no LeRobot"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

SO-ARM10x e o kit de robótica com IA reComputer Jetson combinam controle de braço robótico de alta precisão com uma plataforma de computação de IA. Junto com Jetson Orin ou AGX Orin e o framework LeRobot, essa configuração pode ser usada para educação, pesquisa e experimentos de automação industrial.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM10x" />
</div>

<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">
    Adquira agora 🖱️
  </a>
</div>

:::caution
A Seeed Studio é responsável pela qualidade de hardware do kit. O tutorial de software segue a documentação oficial do LeRobot o mais fielmente possível. Se você encontrar problemas de software ou dependências que não consiga resolver, verifique o FAQ no final desta página e relate problemas no [repositório LeRobot no GitHub](https://github.com/huggingface/lerobot) ou no [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).
:::

<div className="video-container">
  <iframe
    loading="lazy"
    width="900"
    height="600"
    src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc&autoplay=0&mute=1"
    title="Vídeo do projeto SO-ARM10x"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

</section>

## Principais recursos

<section id="features" className="section-card">
  <div className="section-title">
    <span>Recursos</span>
    <h2>Principais recursos</h2>
    <p>SO-ARM10x foca em aprendizado open-source, robótica de baixo custo, integração com LeRobot e implantação com NVIDIA.</p>
  </div>

  <div className="feature-grid">
    <div><strong>Open-source e baixo custo</strong><span>Uma solução de braço robótico open-source baseada no projeto SO-ARM da TheRobotStudio.</span></div>
    <div><strong>Integração com LeRobot</strong><span>Projetado para teleoperação, gravação de conjuntos de dados, treinamento e avaliação em robôs reais no LeRobot.</span></div>
    <div><strong>Ricos recursos de aprendizado</strong><span>Inclui orientações de montagem, calibração, teste, conjunto de dados, treinamento e implantação.</span></div>
    <div><strong>Compatível com NVIDIA</strong><span>Pode ser implantado com plataformas como o reComputer Mini J4012 Orin NX 16GB.</span></div>
    <div><strong>Aplicações em múltiplos cenários</strong><span>Adequado para educação, pesquisa, demonstrações de automação e aprendizado de robótica.</span></div>
  </div>
</section>

## Novidades

<section id="updates" className="section-card">
  <div className="section-title">
    <span>Atualizações</span>
    <h2>Novidades no SO-ARM101</h2>
    <p>SO-ARM101 melhora a fiação, as relações de engrenagem do braço líder e o comportamento de seguimento em tempo real.</p>
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>Otimização da fiação</strong><span>Comparado ao SO-ARM100, o SO-ARM101 melhora a fiação e evita o problema de desconexão da junta 3. O novo roteamento não limita mais a faixa de movimento da junta.</span></div>
    <div className="notice-card"><strong>Atualização da relação de engrenagens do líder</strong><span>O braço líder usa motores com relação de engrenagens otimizada, melhorando o desempenho e eliminando a necessidade de caixas de engrenagens externas.</span></div>
    <div className="notice-card"><strong>Seguimento em tempo real</strong><span>O braço líder pode seguir o braço seguidor em tempo real, o que ajuda em futuros fluxos de trabalho de políticas em que um humano pode intervir e corrigir as ações do robô.</span></div>
  </div>
</section>


## Especificação

<section id="specifications" className="section-card">
  <div className="section-title">
    <span>Especificações</span>
    <h2>Especificação</h2>
    <p>Veja as especificações de motor, energia, comunicação e controle para SO-ARM100 e SO-ARM101.</p>
  </div>

<details className="content-details">
<summary>Ver especificações do SO-ARM10x</summary>

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Braço Líder</td>
      <td rowSpan="2">12x motores ST-3215- C001 (7.4V) com relação de engrenagens de 1:345 para todas as juntas</td>
      <td rowSpan="2">12x motores ST-3215-C018/ST-3215-C047 (12V) com relação de engrenagens de 1:345 para todas as juntas</td>
      <td colSpan="2">
        1x motor ST-3215- C001 (7.4V) com relação de engrenagens de 1:345 apenas para a junta 2<br />
        2x motores ST-3215-C044 (7.4V) com relação de engrenagens de 1:191 para as juntas 1 e 3<br />
        3x motores ST-3215-C046 (7.4V) com relação de engrenagens de 1:147 para as juntas 4, 5 e o gripper (junta 6)
      </td>
    </tr>
    <tr>
      <td>Braço Seguidor</td>
      <td colSpan="2">Igual ao SO-ARM100</td>
    </tr>
    <tr>
      <td>Fonte de Alimentação</td>
      <td>5,5 mm × 2,1 mm DC 5 V 4 A</td>
      <td>5,5 mm × 2,1 mm DC 12 V 2 A</td>
      <td>5,5 mm × 2,1 mm DC 5 V 4 A</td>
      <td>
        5,5 mm × 2,1 mm DC 12 V 2 A (Braço Seguidor)<br />
        5,5 mm × 2,1 mm DC 5 V 4 A (Braço Líder)
      </td>
    </tr>
    <tr>
      <td>Sensor de Ângulo</td>
      <td colSpan="4">Encoder magnético de 12 bits</td>
    </tr>
    <tr>
      <td>Temperatura de Operação Recomendada</td>
      <td colSpan="4">0 °C a 40 °C</td>
    </tr>
    <tr>
      <td>Comunicação</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>Método de Controle</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

Se você comprar a versão Arm Kit, ambas as fontes de alimentação são de 5V. Se você comprar a versão Arm Kit Pro, use a fonte de alimentação de 5V para a calibração e cada etapa do braço robótico Líder, e a fonte de alimentação de 12V para a calibração e cada etapa do braço robótico Seguidor.

:::

</details>

</section>

## Lista de Materiais (BOM)

<section id="bom" className="section-card">
  <div className="section-title">
    <span>BOM</span>
    <h2>Lista de Materiais (BOM)</h2>
    <p>Verifique os servos, placas de controle de motor, cabos, fontes de alimentação, grampos e peças opcionais impressas em 3D incluídas no kit.</p>
  </div>

<details className="content-details">
<summary>Ver lista de materiais</summary>

| Peça | Quantidade | Incluído|
|--|--|--|
|  Servo Motos | 12 | ✅ |
| Placa de Controle de Motor | 2 | ✅ |
| Cabo USB-C 2 pcs | 1 | ✅ |
| Fonte de Alimentação2 | 2 | ✅ |
| Grampo de Mesa| 4 | ✅ |
| Peças impressas em 3D do braço | 1 | Opção |

</details>

</section>

## Guia de Impressão 3D

<section id="3d-printing" className="section-card">
  <div className="section-title">
    <span>Impressão 3D</span>
    <h2>Guia de Impressão 3D</h2>
    <p>Escolha os arquivos STL corretos e as configurações de impressão antes de montar uma versão em kit do braço.</p>
  </div>

<details className="content-details">
<summary>Ver parâmetros de impressão 3D</summary>

:::caution
Após a atualização oficial do SO101, o SO100 não será mais suportado e os arquivos-fonte serão excluídos conforme o oficial, mas os arquivos-fonte ainda podem ser encontrados em nosso [Makerworld](https://makerworld.com/zh/models/908660). No entanto, para usuários que compraram anteriormente o SO100, os tutoriais e métodos de instalação permanecem compatíveis. A impressão do SO101 é totalmente compatível com a instalação do kit de motor do SO100.
:::

**Passo 1: Escolha uma impressora**

Os arquivos STL fornecidos estão prontos para impressão em muitas impressoras FDM. Abaixo estão as configurações testadas e sugeridas, embora outras possam funcionar.

- Material: PLA+
- Diâmetro do Bico e Precisão: bico de 0,4mm com altura de camada de 0,2mm ou bico de 0,6mm com altura de camada de 0,4mm.
- Densidade de Preenchimento: 15%  

**Passo 2: Configure a impressora**

- Certifique-se de que a impressora esteja calibrada e que o nivelamento da mesa esteja corretamente ajustado usando as instruções específicas da impressora.
- Limpe a mesa de impressão, certificando-se de que esteja livre de poeira ou gordura. Se limpar a mesa com água ou outro líquido, seque-a.
- Se a sua impressora recomendar, use um bastão de cola padrão e aplique uma camada fina e uniforme de cola em toda a área de impressão da mesa. Evite acúmulo ou aplicação irregular.
- Carregue o filamento da impressora usando as instruções específicas da impressora.
- Certifique-se de que as configurações da impressora correspondam às sugeridas acima (a maioria das impressoras possui várias configurações, então escolha as que mais se aproximam).
- Configure para suportes em todos os lugares, mas ignore inclinações maiores que 45 graus em relação à horizontal.
- Não deve haver suportes nos furos de parafuso com eixos horizontais.

**Passo 3: Imprima as peças**

Todas as peças para o líder ou seguidor já estão contidas em um único arquivo para facilitar a impressão 3D, corretamente orientadas com o eixo z para cima para minimizar os suportes.

- Para tamanhos de mesa de impressora de 220mmx220mm (como a Ender), imprima estes arquivos:
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para tamanhos de mesa de impressora de 205mm x 250mm (como a Prusa/Up):
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

</details>

</section>

## Ambiente Inicial do Sistema

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Ambiente</span>
    <h2>Ambiente Inicial do Sistema</h2>
    <p>Confirme os requisitos de Ubuntu, Jetson, CUDA, Python, PyTorch e Torchvision antes da instalação.</p>
  </div>

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**Para Jetson Orin:**

- Jetson JetPack 6.0 e 6.1, JetPack 6.2 ainda não é suportado
- Python 3.10  
- Torch 2.3+

</section>

## Instalar LeRobot

<section id="install-lerobot" className="section-card">
  <div className="section-title">
    <span>Passo 1</span>
    <h2>Instalar LeRobot</h2>
    <p>Instale o Miniforge, o repositório verificado Seeed LeRobot, ffmpeg, PyTorch e dependências específicas de hardware.</p>
  </div>

[LINE_195>Ambientes como pytorch e torchvision precisam ser instalados com base no seu CUDA.

<Tabs defaultValue="Jetson">

<TabItem value="Jetson" label="Jetson">

1. Instale o Miniforge:

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Follow the prompts by entering 'yes' or pressing Enter. Once the installation is complete:
source ~/.bashrc`}
</CodeBlock>

2. Crie e ative um novo ambiente conda para o lerobot

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. Clone o Lerobot:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. Ao usar o miniforge, instale o ffmpeg em seu ambiente:

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
Isso geralmente instala o ffmpeg 7.X para a sua plataforma compilado com o codificador libsvtav1. Se o libsvtav1 não for suportado (verifique os codificadores suportados com `ffmpeg -encoders`), você pode:

- [Em qualquer plataforma] Instalar explicitamente o ffmpeg 7.X usando:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- [Somente no Linux] Instalar as dependências de compilação do ffmpeg e compilar o ffmpeg a partir do código-fonte com libsvtav1, e certificar-se de usar o binário ffmpeg correspondente à sua instalação com `which ffmpeg`.

Se você encontrar um erro como este, também pode usar este comando.

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="" />
</div>

:::

5. Instale o LeRobot com dependências para os motores feetech:

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Para dispositivos Jetson Jetpack 6.0+ (certifique-se de instalar [Pytorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) a partir do passo 5 antes de executar este passo):

<CodeBlock language="bash">
{`conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # Isso deve corresponder ao torchvision`}
</CodeBlock>

7. Verificar Pytorch e Torchvision

Como instalar o ambiente lerobot via pip desinstalará o Pytorch e o Torchvision originais e instalará as versões de CPU do Pytorch e do Torchvision, você precisa realizar uma verificação em Python.

<CodeBlock language="python">
{`python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python`}
</CodeBlock>

Se o resultado impresso for `False`, o ambiente atual está usando a versão de CPU do PyTorch. Se você precisar de PyTorch e Torchvision com suporte a GPU no Jetson, instale-os de acordo com [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson). Para ambientes que precisam de treinamento ou inferência em GPU, o resultado final da verificação deve ser `True`.

</TabItem>

<TabItem value="X86" label="X86 Ubuntu 22.04">

1. Instale o Miniforge:

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Once the installation is complete:
source ~/.bashrc
# Initialize all shells
conda init --all`}
</CodeBlock>

2. Crie e ative um novo ambiente conda para o lerobot

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. Clone o Lerobot:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. Ao usar o miniforge, instale o ffmpeg no seu ambiente:

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
Isso geralmente instala o ffmpeg 7.X para a sua plataforma, compilado com o codificador libsvtav1. Se o libsvtav1 não for suportado (verifique os codificadores suportados com `ffmpeg -encoders`), você pode:

- [Em qualquer plataforma] Instalar explicitamente o ffmpeg 7.X usando:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- [Somente no Linux] Instalar as dependências de compilação do ffmpeg e compilar o ffmpeg a partir do código-fonte com libsvtav1, e certificar-se de usar o binário ffmpeg correspondente à sua instalação com `which ffmpeg`.

Se você encontrar um erro como este, também pode usar este comando.

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="" />
</div>

:::

5. Instale o LeRobot com dependências para os motores feetech:

:::tip
Em uma VM Ubuntu 22.04 recém-configurada, especialmente em uma instalação mínima, `gcc` e outras ferramentas de compilação C podem não estar instaladas por padrão. Nesse caso, a instalação do LeRobot com dependências feetech pode falhar porque o pacote Python `evdev` não pode ser compilado.

Instale primeiro as ferramentas básicas de compilação:

<CodeBlock language="bash">
{`sudo apt update
sudo apt install build-essential`}
</CodeBlock>

Após a instalação, execute novamente o comando de instalação do LeRobot.
:::

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Verificar Pytorch e Torchvision

Como instalar o ambiente lerobot via pip desinstalará o Pytorch e o Torchvision originais e instalará as versões de CPU do Pytorch e do Torchvision, você precisa realizar uma verificação em Python.

<CodeBlock language="python">
{`python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python`}
</CodeBlock>

Se o resultado impresso for `False`, o ambiente atual está usando a versão de CPU do PyTorch. Se você precisar de treinamento ou inferência em GPU, instale as versões do Pytorch e do Torchvision que correspondam à sua versão do CUDA de acordo com o [guia oficial do PyTorch](https://pytorch.org/index.html). Para ambientes com uma GPU NVIDIA que precisam de aceleração por GPU, o resultado final da verificação deve ser `True`.

:::tip

Observação: as GPUs NVIDIA RTX série 50 exigem a versão de prévia do CUDA 12.8 ou superior.

O comando de download é o seguinte:

<CodeBlock language="bash">
{`pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128`}
</CodeBlock>

:::

</TabItem>

</Tabs>

</section>

## Configurar Motores e Montar o Braço

<section id="setup-motors-assembly" className="section-card">
  <div className="section-title">
    <span>Etapa 2</span>
    <h2>Configurar Motores e Montar o Braço</h2>
    <p>Defina IDs e taxas de transmissão dos servos, verifique a fiação e a alimentação e, em seguida, monte os braços líder e seguidor.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes de executar</strong>
      <p>
        Remova itens de valor e pessoas não relacionadas em um raio de 1 metro da área de trabalho do braço robótico.
        Certifique-se de que o braço esteja firmemente fixado e que a alimentação e os cabos estejam conectados corretamente antes de executar esta seção.
      </p>
    </div>
  </div>

:::tip
Se você comprou um braço robótico pré-montado, pule para a seção de Calibração.
:::
<details className="content-details">

<summary> Para a versão em kit, siga as etapas abaixo </summary>

O processo de calibração e inicialização do servo para o SO-ARM101 é o mesmo do SO-ARM100 em termos de método e código. No entanto, observe que as relações de engrenagem para as três primeiras juntas do Braço Líder SO-ARM101 diferem das do SO-ARM100, portanto é importante distingui-las e calibrá-las com cuidado.

Para configurar os motores, designe um adaptador de servo de barramento e 6 motores para o seu braço líder e, da mesma forma, o outro adaptador de servo de barramento e 6 motores para o braço seguidor. É conveniente rotulá-los e escrever em cada motor se ele é para o seguidor F ou para o líder L e seu ID de 1 a 6. Usamos **F1–F6** para representar as juntas 1 a 6 do **Braço Seguidor**, e **L1–L6** para representar as juntas 1 a 6 do **Braço Líder**. O modelo de servo correspondente, atribuições de juntas e detalhes da relação de engrenagem são os seguintes:

| Modelo de Servo                            | Relação de Engrenagem | Juntas Correspondentes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Agora você deve conectar a fonte de alimentação de 5V ou 12V ao barramento do motor. 5V para os motores STS3215 7.4V e 12V para os motores STS3215 12V. Observe que o braço líder sempre usa os motores de 7.4V, portanto, tenha cuidado para conectar a fonte de alimentação correta se você tiver motores de 12V e 7.4V, caso contrário, você pode queimar seus motores! Agora, conecte o barramento do motor ao seu computador via USB. Observe que o USB não fornece nenhuma alimentação, e tanto a fonte de alimentação quanto o USB precisam estar conectados.
:::

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="" />
</div>

***A seguir estão as etapas de calibração por código, calibre com o servo de fiação de referência na imagem acima***

Encontre as portas USB associadas aos seus braços
Para encontrar as portas corretas para cada braço, execute o script utilitário duas vezes:

<CodeBlock language="bash">
{`lerobot-find-port`}
</CodeBlock>

Exemplo de saída:

<CodeBlock language="bash">
{`Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.`}
</CodeBlock>

:::tip
Lembre-se de remover o USB, caso contrário a interface não será detectada.
:::

Exemplo de saída ao identificar a porta do braço seguidor (por exemplo, `/dev/tty.usbmodem575E0031751` no Mac, ou possivelmente `/dev/ttyACM0` no Linux):

Exemplo de saída ao identificar a porta do braço líder (por exemplo, `/dev/tty.usbmodem575E0032081`, ou possivelmente `/dev/ttyACM1` no Linux):

Você pode precisar conceder acesso às portas USB executando:

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}
</CodeBlock>

:::tip

Ao conectar os braços, o primeiro dispositivo conectado será atribuído a ttyACM0 (braço Escravo/Seguidor), e o segundo dispositivo conectado será atribuído a ttyACM1 (braço Mestre/Líder).

:::

**Configure seus motores**

**Imagens de referência para calibração dos servos do líder**

| **Calibração da Junta 6 do Braço Líder** | **Calibração da Junta 5 do Braço Líder** | **Calibração da Junta 4 do Braço Líder** | **Calibração da Junta 3 do Braço Líder** | **Calibração da Junta 2 do Braço Líder** | **Calibração da Junta 1 do Braço Líder** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**Imagens de referência para calibração dos servos do seguidor**

| **Calibração da Junta 6 do Braço Seguidor** | **Calibração da Junta 5 do Braço Seguidor** | **Calibração da Junta 4 do Braço Seguidor** | **Calibração da Junta 3 do Braço Seguidor** | **Calibração da Junta 2 do Braço Seguidor** | **Calibração da Junta 1 do Braço Seguidor** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
Novamente, certifique-se de que os IDs das juntas dos servos e as relações de engrenagem correspondam estritamente às do SO-ARM101.
:::

**Calibrar servos do braço seguidor**

Conecte o cabo USB do seu computador e a fonte de alimentação à placa controladora do braço seguidor. Em seguida, execute o seguinte comando.

<CodeBlock language="bash">
{`lerobot-setup-motors \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step`}
</CodeBlock>

Você deverá ver a seguinte instrução.

<CodeBlock language="bash">
{`Connect the controller board to the 'gripper' motor only and press enter.`}
</CodeBlock>

Conforme instruído, conecte o motor do gripper. Certifique-se de que ele seja o único motor conectado à placa e que o próprio motor ainda não esteja em cadeia com nenhum outro motor. Ao pressionar [Enter], o script definirá automaticamente o ID e a taxa de transmissão (baudrate) desse motor.

Você deverá então ver a seguinte mensagem:

<CodeBlock language="bash">
{`'gripper' motor id set to 6`}
</CodeBlock>

Seguido pela próxima instrução:

<CodeBlock language="bash">
{`Connect the controller board to the 'wrist_roll' motor only and press enter.`}
</CodeBlock>

Você pode desconectar o cabo de 3 pinos da placa controladora, mas pode deixá-lo conectado ao motor do gripper na outra extremidade, pois ele já estará na posição correta. Agora, conecte outro cabo de 3 pinos ao motor de rotação do punho (wrist roll) e ligue-o à placa controladora. Assim como no motor anterior, certifique-se de que ele seja o único motor conectado à placa e que o próprio motor não esteja conectado a nenhum outro.

:::caution
Repita a operação para cada motor conforme instruído.
:::

:::tip
Verifique sua fiação em cada etapa antes de pressionar Enter. Por exemplo, o cabo da fonte de alimentação pode se desconectar enquanto você manipula a placa.
:::

Quando terminar, o script simplesmente será concluído, momento em que os motores estarão prontos para uso. Agora você pode conectar o cabo de 3 pinos de cada motor ao próximo, e o cabo do primeiro motor (o “shoulder pan” com id=1) à placa controladora, que agora pode ser fixada à base do braço.

**Calibrar servos do braço líder**

Repita os mesmos passos para o braço líder.

<CodeBlock language="bash">
{`lerobot-setup-motors \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step`}
</CodeBlock>

**Montagem**

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip

- O processo de montagem de braço duplo do SO-ARM101 é o mesmo do SO-ARM100. As únicas diferenças são a adição de presilhas de cabo no SO-ARM101 e as diferentes relações de engrenagem dos servos das juntas no braço líder. Portanto, tanto o SO100 quanto o SO101 podem ser instalados consultando o conteúdo a seguir
- Antes da montagem, verifique novamente o modelo do seu motor, a relação de engrenagem e a tensão da fonte de alimentação. Se você comprou o SO101, consulte o modelo de servo e a tabela de mapeamento das juntas acima para distinguir F1 a F6 e L1 a L6.

:::

**Montar o braço líder**

| **Etapa 1** | **Etapa 2** | **Etapa 3** | **Etapa 4** | **Etapa 5** | **Etapa 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Etapa 7** | **Etapa 8** | **Etapa 9** | **Etapa 10** | **Etapa 11** | **Etapa 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Etapa 13** | **Etapa 14** | **Etapa 15** | **Etapa 16** | **Etapa 17** | **Etapa 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Etapa 19** | **Etapa 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Montar o braço seguidor**

:::tip

- As etapas para montar o braço seguidor são, em geral, as mesmas do braço líder. A única diferença está no método de instalação do efetuador final (gripper e manopla) após a Etapa 12.

:::

| **Etapa 1** | **Etapa 2** | **Etapa 3** | **Etapa 4** | **Etapa 5** | **Etapa 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Etapa 7** | **Etapa 8** | **Etapa 9** | **Etapa 10** | **Etapa 11** | **Etapa 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Etapa 13** | **Etapa 14** | **Etapa 15** | **Etapa 16** | **Etapa 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

</details>

</section>

## Calibrar o braço robótico

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>Etapa 3</span>
    <h2>Calibrar o braço robótico</h2>
    <p>Calibre os braços seguidor e líder para que suas posições físicas correspondam ao seu estado no software.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes de executar</strong>
      <p>
        Remova itens de valor e pessoas não relacionadas em um raio de 1 metro da área de trabalho do braço robótico.
        Certifique-se de que o braço esteja firmemente fixado e que a alimentação e os cabos estejam conectados corretamente antes de executar esta seção.
      </p>
    </div>
  </div>

:::tip
Os códigos do SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

:::danger
Se você comprou o **SO101 Arm Kit Standard Edition**, todas as fontes de alimentação são de 5V. Se você comprou o **SO101 Arm Kit Pro Edition**, o braço líder deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 5V, enquanto o braço seguidor deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 12V.
:::

Em seguida, você precisa conectar a fonte de alimentação e o cabo de dados ao seu robô SO-10x para calibração, a fim de garantir que os braços líder e seguidor tenham os mesmos valores de posição quando estiverem na mesma posição física. Essa calibração é essencial porque permite que uma rede neural treinada em um robô SO-10x funcione em outro.

### Recalibrar o braço robótico

<details className="content-details">
<summary>Ver opções de recalibração</summary>

Se você precisar recalibrar os braços robóticos, há duas opções disponíveis:

**Opção 1: Excluir arquivos de calibração locais**

Exclua completamente os arquivos em `~/.cache/huggingface/lerobot/calibration/robots` ou `~/.cache/huggingface/lerobot/calibration/teleoperators` antes de recalibrar. Caso contrário, o sistema pode acionar uma mensagem de erro porque os dados de calibração anteriores são armazenados em arquivos JSON nesses diretórios.

**Opção 2: Escolher recalibração no comando de calibração**

Execute o comando de calibração diretamente no terminal. Se o braço já tiver sido calibrado antes, o seguinte aviso aparecerá:

<CodeBlock language="bash">
{`Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:`}
</CodeBlock>

Digite `c` e pressione **Enter** para iniciar a recalibração. Pressione **Enter** diretamente para manter e usar os dados de calibração existentes.

</details>

Conecte os 6 servos do robô pelas interfaces de 3 pinos e conecte o servo do chassi à placa controladora de servos. Em seguida, execute o seguinte comando ou exemplo de API para calibrar o braço:

:::tip
Em PCs (Linux) e dispositivos Jetson, o primeiro dispositivo USB que você conecta normalmente é mapeado para `ttyACM0`, e o segundo é mapeado para `ttyACM1`. Verifique cuidadosamente qual porta está mapeada para o líder e o seguidor antes de executar os comandos.
:::

**Calibração manual do braço seguidor**

Conecte as interfaces dos 6 servos do robô por meio de um cabo de 3 pinos e conecte o servo do chassi à placa de acionamento de servos, depois execute o seguinte comando ou exemplo de API para calibrar o braço robótico:

***Primeiro, conceda as permissões da interface***

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

***Depois, calibre o braço seguidor***

<CodeBlock language="bash">
{`lerobot-calibrate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 # <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name`}
</CodeBlock>

O vídeo abaixo mostra como realizar a calibração. Primeiro você precisa mover o robô para a posição em que todas as juntas estejam no meio de seus intervalos. Em seguida, após pressionar Enter, você deve mover cada junta por toda a sua amplitude de movimento.

:::tip
Devido à atualização do repositório lerobot, é normal que o terminal não receba um sinal do servo 5 ao realizar a calibração do braço mestre-escravo. Você pode continuar com a operação.
:::

**Calibração manual do braço líder**

Siga os mesmos passos para calibrar o braço líder, executando o seguinte comando ou exemplo de API:

<CodeBlock language="bash">
{`lerobot-calibrate \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 # <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name`}
</CodeBlock>

:::tip

Se você encontrar o erro “Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port., Try running lerobot-find-port” ao calibrar os braços Líder ou Seguidor, será necessário conceder as permissões necessárias executando: `sudo chmod 666 /dev/ttyACM*`
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### (Opcional) Calibração de posição central com a ferramenta rápida Seeed Studio SoARM

Ao calibrar ou executar o robô, se você vir erros como:

`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`

Isso geralmente significa que a posição atual / deslocamento de zero de um servo está anormal, fazendo com que o ângulo lido exceda o intervalo esperado. Nesse caso, você pode usar a ferramenta SoARM da Seeed Studio para fazer uma **calibração de posição central** (gravar a posição atual no valor central **2048**) e, em seguida, refazer a calibração de todo o braço.

#### 1) Clone a ferramenta do GitHub e instale as dependências

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt`}
</CodeBlock>

#### 2) Calibração e verificação da posição central

Localização dos scripts:

- `src/tools/servo_middle_calibration.py`: calibração de posição central (grava a posição atual como **2048**)
- `src/tools/servo_disable.py`: desativa o torque do servo (facilita girar as juntas manualmente)
- `src/tools/servo_center_test.py`: move para **2048** para verificar o resultado da calibração

Execute na seguinte ordem (os comandos solicitarão interativamente que você selecione uma porta):

1. (Opcional) Desative o torque para ajustar as juntas manualmente:

<CodeBlock language="bash">
{`python -m src.tools.servo_disable`}
</CodeBlock>

2. Faça a calibração de posição central (defina a posição atual como 2048):

<CodeBlock language="bash">
{`python -m src.tools.servo_middle_calibration`}
</CodeBlock>

3. Verifique: mova o servo para 2048 e confira se ele retorna à posição central esperada:

<CodeBlock language="bash">
{`python -m src.tools.servo_center_test`}
</CodeBlock>

Após a calibração de posição central, volte para as etapas do `lerobot-calibrate` acima e refaça a calibração de todo o braço.

Se você encontrar os erros acima, pode usar a Ferramenta de Depuração de Engrenagem de Direção para depuração. Ela é compatível com Windows, Ubuntu e Mac.

<div className="hero-actions">
    <a href="/pt-br/lerobot_steering_gear_debugging_tool">▶ Abrir tutorial da Ferramenta de Depuração de Engrenagem de Direção</a>
</div>

</section>

## Teleoperação

<section id="teleoperation" className="section-card">
  <div className="section-title">
    <span>Etapa 4</span>
    <h2>Teleoperação</h2>
    <p>Execute um teste de teleoperação de líder para seguidor antes de adicionar câmeras ou coletar dados.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes da execução</strong>
      <p>
        Remova itens de valor e pessoas não relacionadas em um raio de 1 metro da área de trabalho do braço robótico.
        Certifique-se de que o braço esteja firmemente fixado e que a alimentação e os cabos estejam conectados corretamente antes de executar esta seção.
      </p>
    </div>
  </div>

**Teleop simples**
Agora você está pronto para teleoperar seu robô! Execute este script simples (ele não irá conectar nem exibir as câmeras):

Observe que o id associado a um robô é usado para armazenar o arquivo de calibração. É importante usar o mesmo id ao teleoperar, gravar e avaliar quando estiver usando a mesma configuração.

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm`}
</CodeBlock>

O comando de teleoperação irá automaticamente:

1. Identificar quaisquer calibrações ausentes e iniciar o procedimento de calibração.
2. Conectar o robô e o dispositivo de teleoperação e iniciar a teleoperação.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## Adicionar câmeras

<section id="camera" className="section-card">
  <div className="section-title">
    <span>Etapa 5</span>
    <h2>Adicionar câmeras</h2>
    <p>Adicione câmeras OpenCV, RealSense ou Orbbec e verifique os fluxos de imagem antes de gravar conjuntos de dados.</p>
  </div>

<details className="content-details">
<summary> If using RealSense D435i/D405 </summary>

As câmeras de profundidade RealSense podem fornecer percepção RGB-D para o LeRobot e são adequadas para tarefas como reconhecimento de objetos, reconstrução de nuvens de pontos e manipulação em mesa. Os modelos recomendados aqui são **RealSense D405** e **RealSense D435i**.

**RealSense D405**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" alt="" />
</div>

A RealSense D405 é uma câmera estéreo de profundidade de curto alcance projetada para tarefas de alta precisão em curta distância, como manipulação robótica em mesa, com faixa de trabalho típica de **7 cm a 50 cm**.

**RealSense D435i**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" alt="" />
</div>

A RealSense D435i combina detecção de profundidade, imagem RGB e uma IMU, tornando-a adequada para aplicações de médio a curto alcance, como reconstrução 3D, SLAM e percepção de ambiente robótico.

**1. Mudar para o branch Camera**

O suporte atual a câmeras está disponível no branch `DepthCameraSupport`:

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

Confirme o branch atual:

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

Saída esperada:

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. Instalar RealSense em modo editável**

Se você usar apenas RealSense:

<CodeBlock language="bash">
{`pip install -e ".[realsense]"`}
</CodeBlock>

**3. Conceder permissões à câmera**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. Detectar câmeras**

<CodeBlock language="bash">
{`lerobot-find-cameras realsense`}
</CodeBlock>

Esta etapa exibirá:

- Modelo da câmera
- Número de série
- Informações USB
- Configuração padrão de fluxo

Insira o `Serial number` obtido no parâmetro `serial_number_or_name` do comando da câmera abaixo.

**5. Exemplo com RealSense**

Teste com duas RealSense:

<CodeBlock language="bash">
{`lerobot-teleoperate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_follower_arm \\
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_awesome_leader_arm \\
  --display_data=true`}
</CodeBlock>

**6. Notas sobre parâmetros**

- `depth_alpha` controla o fator de escala da imagem de profundidade e pode ser ajustado com base no resultado da exibição e na faixa de distância alvo.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir `fps` para `15` para melhorar a estabilidade geral.
- Recomenda-se manter a resolução em `640x480` para um melhor equilíbrio entre estabilidade e desempenho em tempo real.

</details>

<details className="content-details">
<summary> Se estiver usando câmeras Orbbec Gemini2/Gemini336 </summary>


<div className="image-frame">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" alt="" />
</div>
<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer">
    Adquira agora 🖱️
  </a>
</div>

A Orbbec Gemini 2 é uma câmera RGB-D de alto desempenho para aplicações de robótica, fornecendo fluxos sincronizados de RGB e profundidade com alinhamento preciso de profundidade para cor. Combinada com detecção de profundidade estéreo e um IMU de 6 eixos integrado, ela é bem adequada para tarefas robóticas como detecção de objetos, percepção 3D, mapeamento e navegação. Seu design compacto e o suporte completo ao Orbbec SDK a tornam adequada tanto para pesquisa quanto para implantação em cenários reais.

<div className="image-frame">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" alt="" />
</div>

A Gemini 336 é um novo membro da série Gemini 330. Ela herda o forte desempenho de profundidade da Gemini 335 e melhora ainda mais a qualidade de imagem de profundidade em áreas internas reflexivas, regiões escuras em cenas de alta dinâmica e ambientes externos claros. Para aplicações de robótica, ela pode fornecer dados de profundidade mais estáveis e de alta qualidade para tarefas como percepção, localização e manipulação.

**1. Mudar para o branch da câmera**

O suporte atual para câmeras está disponível no branch `DepthCameraSupport`:

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

Confirme o branch atual:

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

Saída esperada:

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. Instalar o LeRobot em modo editável**

Se você usar apenas Orbbec:

<CodeBlock language="bash">
{`pip install -e ".[orbbec]"`}
</CodeBlock>

**3. Conceder permissões à câmera**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. Configuração do tamanho do cache USBFS**

Por padrão, o tamanho do cache USBFS é 16 MB. Esse valor é insuficiente para imagens de alta resolução, múltiplos fluxos de dados e cenários com vários dispositivos. Os usuários podem aumentar o tamanho do cache até 128 MB.

Verificar o tamanho do cache USBFS
<CodeBlock language="bash">
{`cat /sys/module/usbcore/parameters/usbfs_memory_mb`}
</CodeBlock>

Aumentar temporariamente o tamanho do cache USBFS
<CodeBlock language="bash">
{`sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'`}
</CodeBlock>

:::tip

Se você ainda encontrar o `timeout error TimeoutError: Timed out waiting for frame from <lerobot.cameras.orbbec.camera_orbbec.OrbbecDepthCamera object at 0x7ba4ba130910.........>`, simplesmente reconecte a câmera.

:::

**5. Detectar câmeras**

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

Esta etapa exibirá:

- Modelo da câmera（Nome）
- Número de série（Serial number）
- Informações de USB
- Configuração de fluxo padrão

Insira o `Serial Number` obtido no parâmetro `serial_number_or_name` do comando da câmera mostrado abaixo.

**6. Exemplo com Orbbec**

Teste com uma única Orbbec:

<CodeBlock language="bash">
{`lerobot-teleoperate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_follower_arm \\
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }' \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_awesome_leader_arm \\
  --display_data=true`}
</CodeBlock>

Teste com uma única câmera Orbbec + teste com câmera padrão:

<CodeBlock language="bash">
{`  lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras='{
      orbbec_color: {
        type: orbbec_color,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 480,
        fps: 30,
        color_mode: rgb,
        rotation: 0,
        warmup_s: 1
      },
      orbbec_depth: {
        type: orbbec_depth,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 400,
        fps: 30,
        depth_alpha: 0.2,
        rotation: 0,
        warmup_s: 5
      },
      side: {
      type: opencv,
      index_or_path: 8,
      width: 640,
      height: 480,
      fps: 30,
      fourcc: "MJPG"} 
    }' \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

:::tip
Ao usar uma única câmera Orbbec junto com uma câmera padrão, é recomendável conectar primeiro a câmera Orbbec e, em seguida, a câmera padrão.

Ao executar o comando lerobot-find-cameras opencv para detectar IDs de câmera, você verá que a câmera Orbbec ocupa 3 números de câmera consecutivos. Portanto, é aconselhável conectar a câmera padrão por último para que seu número seja atribuído ao final.
:::

**7. Notas sobre parâmetros**

- `depth_alpha` controla o fator de escala da imagem de profundidade. Um bom ponto de partida é `0.2`, depois você pode ajustá-lo com base no resultado da exibição.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir `fps` para `15` para melhor estabilidade.
- Recomenda-se manter a resolução em `640x480` para uma exibição e transferência de dados mais estáveis.

Para erros relacionados à câmera, consulte a seção de FAQ no final desta página.

</details>

<details className="content-details">

<summary> Se estiver usando uma câmera comum </summary>



:::tip
Os códigos SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Para instanciar uma câmera, você precisa de um identificador de câmera. Esse identificador pode mudar se você reiniciar o computador ou reconectar a câmera, um comportamento que depende principalmente do seu sistema operacional.

Para encontrar os índices das câmeras conectadas ao seu sistema, execute o seguinte script:

<CodeBlock language="python">
{`lerobot-find-cameras opencv # or realsense for Intel Realsense cameras`}
</CodeBlock>

O terminal exibirá as seguintes informações.

<CodeBlock language="text">
{`--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)`}
</CodeBlock>

Você pode encontrar as fotos tiradas por cada câmera no diretório `outputs/captured_images`.

:::warning
Ao usar câmeras Intel RealSense no macOS, você pode obter este erro: OSError finding RealSense cameras: failed to set power state, isso pode ser resolvido executando o mesmo comando com permissões sudo. Observe que usar câmeras RealSense no macOS é instável.
:::

Em seguida, você poderá exibir as câmeras no seu computador enquanto estiver realizando teleoperação executando o código a seguir. Isso é útil para preparar sua configuração antes de gravar seu primeiro conjunto de dados.

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

Se você tiver mais câmeras, pode alterar `--robot.cameras` para adicionar câmeras. Você deve observar o formato de index_or_path, que é determinado pelo último dígito do ID da câmera exibido por `python -m lerobot.find_cameras opencv`.

:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, levando a atrasos na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Dito isso, ainda não é recomendado conectar 2 câmeras a um computador através do mesmo HUB USB.
:::

Por exemplo, se você quiser adicionar uma câmera lateral:

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atraso na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Dito isso, ainda não é recomendado conectar 2 câmeras a um computador por meio do mesmo HUB USB.
:::

:::tip
Se você encontrar um bug como este.

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" alt="" />
</div>

Você pode fazer downgrade da versão do rerun para resolver o problema.

<CodeBlock language="bash">
{`pip3 install rerun-sdk==0.23`}
</CodeBlock>

:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

</section>

## Registrar Dataset

<section id="record-dataset" className="section-card">
  <div className="section-title">
    <span>Passo 6</span>
    <h2>Registrar Dataset</h2>
    <p>Registre datasets localmente ou faça upload deles para o Hugging Face Hub, mantendo o dataset limpo e consistente.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes de executar</strong>
      <p>
        Remova itens de valor e pessoas não relacionadas em um raio de 1 metro da área de trabalho do braço robótico.
        Certifique-se de que o braço esteja firmemente fixado e que a alimentação e os cabos estejam conectados corretamente antes de executar esta seção.
      </p>
    </div>
  </div>

- Se você quiser salvar o dataset localmente, pode executá-lo diretamente:

<CodeBlock language="bash">
{`lerobot-record \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true \\
    --dataset.repo_id=seeedstudio123/test \\
    --dataset.num_episodes=5 \\
    --dataset.single_task="Grab the black cube" \\
    --dataset.push_to_hub=false \\
    --dataset.episode_time_s=30 \\
    --dataset.reset_time_s=30`}
</CodeBlock>

Entre eles, `repo_id` pode ser modificado de forma personalizada, e `push_to_hub=false`. Por fim, o dataset será salvo no diretório `~/.cache/huggingface/lerobot` na pasta home, onde a pasta `seeedstudio123/test` mencionada acima será criada.

- Se você quiser usar os recursos do Hugging Face hub para fazer upload do seu dataset e ainda não tiver feito isso antes, certifique-se de ter feito login usando um token com permissão de escrita, que pode ser gerado em [Hugging Face settings](https://huggingface.co/settings/tokens):

<CodeBlock language="bash">
{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential`}
</CodeBlock>

Armazene o nome do seu repositório Hugging Face em uma variável para executar estes comandos:

<CodeBlock language="bash">
{`HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER`}
</CodeBlock>

Registre 5 episódios e faça upload do seu dataset para o hub:

<CodeBlock language="bash">
{`lerobot-record \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true \\
    --dataset.repo_id=\${HF_USER}/record-test \\
    --dataset.num_episodes=5 \\
    --dataset.single_task="Grab the black cube" \\
    --dataset.push_to_hub=true \\
    --dataset.episode_time_s=30 \\
    --dataset.reset_time_s=30`}
</CodeBlock>

Você verá muitas linhas aparecendo como esta:

<CodeBlock language="bash">
{`INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)`}
</CodeBlock>

**Função de registro**

A função **record** fornece um conjunto de ferramentas para capturar e gerenciar dados durante a operação do robô.  

**1. Armazenamento de dados**

- Os dados são armazenados usando o formato `LeRobotDataset` e são gravados em disco durante a gravação.
- Por padrão, o dataset é enviado para a sua página do Hugging Face após a gravação.  
- Para desativar o upload, use: `--dataset.push_to_hub=False`

**2. Checkpoint e retomada**

- Checkpoints são criados automaticamente durante a gravação.  
- Para retomar após uma interrupção, execute novamente o mesmo comando com: `--resume=true`

⚠️ Nota crítica: Ao retomar, defina `--dataset.num_episodes` para o número de episódios adicionais a serem gravados (não o número total de episódios desejado no dataset).  

- Para começar a gravação do zero, **exclua manualmente** o diretório do dataset.

**3. Parâmetros de gravação**

Defina o fluxo de gravação de dados usando argumentos de linha de comando:

| Parâmetro | Descrição | Padrão |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | Duração por episódio de dados (segundos) | 60 |  
| --dataset.reset_time_s | Tempo de redefinição do ambiente após cada episódio (segundos) | 60 |  
| --dataset.num_episodes | Número total de episódios a serem gravados | 50 |  

**4. Controles de teclado durante a gravação**

Controle o fluxo de gravação de dados usando atalhos de teclado:

| Tecla | Ação |  
|-----|--------|  
| → (Seta para a direita) | Encerrar antecipadamente o episódio atual/redefinir; ir para o próximo. |  
| ← (Seta para a esquerda) | Cancelar o episódio atual; regravá-lo. |  
| ESC | Parar a sessão imediatamente, codificar vídeos e enviar o dataset. |  

:::tip

Se o teclado não funcionar, talvez você precise instalar outra versão do pynput.

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

:::

**Dicas para coletar dados**

- Sugestão de tarefa: Agarrar objetos em diferentes locais e colocá-los em uma caixa.  
- Escala: Registre ≥50 episódios (10 episódios por local).  
- Consistência:  
  - Mantenha as câmeras fixas.  
  - Mantenha o mesmo comportamento de preensão.  
  - Garanta que os objetos manipulados estejam visíveis nas imagens das câmeras.  
- Progressão:  
  - Comece com preensões confiáveis antes de adicionar variações (novos locais, técnicas, ajustes de câmera).  
  - Evite aumentar a complexidade rapidamente para não causar falhas.  

💡 Regra geral: Você deve ser capaz de realizar a tarefa apenas olhando para as imagens da câmera.  

Se quiser se aprofundar neste tópico importante, você pode conferir o [post no blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escrevemos sobre o que torna um bom dataset.

Para problemas com atalhos de teclado durante a gravação, consulte a seção de FAQ no final desta página.
<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## Visualizar Dataset

<section id="visualize-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>Visualizar Dataset</h2>
    <p>Inspecione imagens, ações e episódios gravados antes do treinamento.</p>
  </div>

:::tip
Os códigos do SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Se você fez upload do seu dataset para o hub com `--control.push_to_hub=true`, você pode [visualizar seu dataset online](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando e colando o seu repo id fornecido por:

<CodeBlock language="bash">
{`echo \${HF_USER}/so101_test`}
</CodeBlock>

Se você não fez upload com `--dataset.push_to_hub=false`, também pode visualizá-lo localmente com:

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id \${HF_USER}/so101_test \\`}
</CodeBlock>

Se você fizer upload com `--dataset.push_to_hub=false`, também pode visualizá-lo localmente com:

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id seeed_123/so101_test \\`}
</CodeBlock>

**Aqui, `seeed_123` é o nome personalizado de `repo_id` definido ao coletar dados.**

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="" />
</div>

</section>

## Reproduzir Dataset

<section id="replay-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>Reproduzir Dataset</h2>
    <p>Reproduza um episódio gravado no braço real para verificar a consistência das ações.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes de executar</strong>
      <p>
        Remova itens de valor e pessoas não relacionadas em um raio de 1 metro da área de trabalho do braço robótico.
        Certifique-se de que o braço esteja firmemente fixado e que a alimentação e os cabos estejam conectados corretamente antes de executar esta seção.
      </p>
    </div>
  </div>

:::tip
Os códigos do SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Um recurso útil é a função `replay`, que permite reproduzir qualquer episódio que você tenha gravado ou episódios de qualquer conjunto de dados disponível. Essa função ajuda a testar a repetibilidade das ações do seu robô e avaliar a transferibilidade entre robôs do mesmo modelo.

Você pode reproduzir o primeiro episódio no seu robô com o comando abaixo ou com o exemplo de API:

<CodeBlock language="bash">
{`lerobot-replay \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --dataset.repo_id=seeedstudio123 \\
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \\
    --dataset.episode=0 \\`}
</CodeBlock>

Seu robô deve reproduzir movimentos semelhantes aos que você gravou.

Neste comando, `dataset.root` especifica o caminho físico para o conjunto de dados, e dataset.`repo_id` é o nome personalizado definido durante a coleta de dados.

</section>

## Treinar e Avaliar

<section id="training" className="section-card">
  <div className="section-title">
    <span>Passo 7</span>
    <h2>Treinar e Avaliar</h2>
    <p>Treine e avalie políticas como ACT, SmolVLA, Pi0, Pi0.5, GR00T, PEFT e inferência assíncrona.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes de executar</strong>
      <p>
        Remova itens de valor e pessoas não relacionadas em um raio de 1 metro da área de trabalho do braço robótico.
        Certifique-se de que o braço esteja firmemente fixado e que a alimentação e os cabos estejam conectados corretamente antes de executar esta seção.
      </p>
    </div>
  </div>

<details className="content-details">

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulte [ACT](https://huggingface.co/docs/lerobot/act)

Para treinar uma política para controlar seu robô, use o script [lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py).

**Treinar**

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=\${HF_USER}/so101_test \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --job_name=act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --steps=300000`}
</CodeBlock>

**Se você quiser treinar em um conjunto de dados local, certifique-se de que o `repo_id` corresponda ao usado durante a coleta de dados e adicione `--policy.push_to_hub=False`.**

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=seeedstudio123/test \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --job_name=act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --policy.push_to_hub=false\\
  --steps=300000`}
</CodeBlock>

:::tip

Se você estiver usando uma GPU da série RTX 50, deverá adicionar --dataset.video_backend=pyav ao comando de treinamento. Isso contorna APIs ausentes na versão de prévia do torchvision. O comando completo de treinamento deve ser assim:

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=seeedstudio123/test \\
  --dataset.video_backend=pyav \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --policy.push_to_hub=false \\
  --steps=300000 \\`}
</CodeBlock>

:::

Vamos explicar:

- **Especificação do conjunto de dados**: Fornecemos o conjunto de dados por meio do parâmetro `--dataset.repo_id=\${HF_USER}/so101_test`.
- **Etapas de treinamento**: Modificamos o número de etapas de treinamento usando `--steps=300000`. O algoritmo usa por padrão 800000 etapas, e você pode ajustá-lo com base na dificuldade da sua tarefa e observando a perda durante o treinamento.
- **Tipo de política**: Fornecemos a política com `policy.type=act`. Da mesma forma, você pode alternar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`], o que carregará a configuração de `configuration_act.py`. É importante ressaltar que essa política se adaptará automaticamente aos estados dos motores, ações dos motores e ao número de câmeras do seu robô (por exemplo, `laptop` e `phone`), pois essas informações já estão armazenadas no seu conjunto de dados.
- **Seleção de dispositivo**: Fornecemos `policy.device=cuda` porque estamos treinando em uma GPU Nvidia, mas você pode usar `policy.device=mps` para treinar em Apple Silicon.
- **Ferramenta de visualização**: Fornecemos `wandb.enable=true` para visualizar gráficos de treinamento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Isso é opcional, mas, se você usar, certifique-se de ter feito login executando `wandb login`.

**Avaliar**

:::tip
Os códigos SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Você pode usar a função `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py), mas com um checkpoint de política como entrada. Por exemplo, execute este comando para gravar 10 episódios de avaliação:

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so100_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=\${HF_USER}/eval_so100 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=\${HF_USER}/my_policy`}
</CodeBlock>

como:

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}
</CodeBlock>

1. O parâmetro `--policy.path` indica o caminho para o arquivo de pesos dos resultados do treinamento da sua política (por exemplo, `outputs/train/act_so101_test/checkpoints/last/pretrained_model`). Se você enviar o arquivo de pesos do resultado do treinamento do modelo para o Hub, também poderá usar o repositório do modelo (por exemplo, `\${HF_USER}/act_so100_test`).

2. O nome do conjunto de dados `dataset.repo_id` começa com `eval_`. Essa operação registrará separadamente vídeos e dados durante a avaliação, que serão salvos na pasta que começa com `eval_`, como `seeed/eval_test123`.

3. Se você encontrar `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante a fase de avaliação, exclua primeiro a pasta que começa com `eval_` e execute o programa novamente.

4. Ao encontrar `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, observe que palavras-chave como front e side no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o conjunto de dados.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

<details className="content-details">
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) é o modelo base leve para robótica da Hugging Face. Projetado para fácil ajuste fino em conjuntos de dados LeRobot, ele ajuda a acelerar o seu desenvolvimento!

**Configurar seu ambiente**

Instale as dependências do SmolVLA executando:

<CodeBlock language="bash">
{`pip install -e ".[smolvla]"`}
</CodeBlock>

**Fazer fine-tuning do SmolVLA nos seus dados**

Use [smolvla_base](https://hf.co/lerobot/smolvla_base), nosso modelo pré-treinado de 450M, e faça o ajuste fino dele nos seus dados. Treinar o modelo por 20k etapas levará aproximadamente ~4 horas em uma única GPU A100. Você deve ajustar o número de etapas com base no desempenho e no seu caso de uso.

Se você não tiver um dispositivo com GPU, pode treinar usando nosso notebook no [Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb).

Passe seu conjunto de dados para o script de treinamento usando `--dataset.repo_id`. Se quiser testar sua instalação, execute o seguinte comando em que usamos um dos conjuntos de dados que coletamos para o [artigo do SmolVLA](https://huggingface.co/papers/2506.01844).

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.path=lerobot/smolvla_base \\
  --dataset.repo_id=\${HF_USER}/mydataset \\
  --batch_size=64 \\
  --steps=20000 \\
  --output_dir=outputs/train/my_smolvla \\
  --job_name=my_smolvla_training \\
  --policy.device=cuda \\
  --wandb.enable=true`}
</CodeBlock>

:::tip
Você pode começar com um tamanho de lote pequeno e aumentá-lo gradualmente, se a GPU permitir, desde que os tempos de carregamento permaneçam curtos.
:::

Fazer fine-tuning é uma arte. Para uma visão completa das opções de ajuste fino, execute

<CodeBlock language="bash">
{`lerobot-train --help`}
</CodeBlock>

**Avaliar o modelo ajustado e executá-lo em tempo real**

Da mesma forma que ao gravar um episódio, é recomendado que você esteja conectado ao HuggingFace Hub. Você pode seguir as etapas correspondentes: [Gravar um conjunto de dados](https://huggingface.co/docs/lerobot/il_robots). Depois de fazer login, você pode executar a inferência na sua configuração fazendo:

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\ # <- Use sua porta
  --robot.id=my_blue_follower_arm \\ # <- Use o ID do seu robô
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\ # <- Use suas câmeras
  --dataset.single_task="Pegue um bloco de lego e coloque-o na lixeira." \\ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \\  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \\
  --dataset.num_episodes=10 \\
  # <- Teleop optional if you want to teleoperate in between episodes \\
  # --teleop.type=so100_leader \\
  # --teleop.port=/dev/ttyACM0 \\
  # --teleop.id=my_red_leader_arm \\
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model`}
</CodeBlock>

Dependendo da sua configuração de avaliação, você pode configurar a duração e o número de episódios a serem gravados para o seu conjunto de avaliação.

</details>

<details className="content-details">
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) é um benchmark projetado para estudar o aprendizado contínuo de robôs. A ideia é que os robôs não serão apenas pré-treinados uma vez em uma fábrica; eles precisarão continuar aprendendo e se adaptando com seus usuários humanos ao longo do tempo. Essa adaptação contínua é chamada de aprendizado ao longo da vida na tomada de decisão (LLDM), e é um passo fundamental para construir robôs que se tornem ajudantes verdadeiramente personalizados.

- 📄 [Artigo do LIBERO](https://arxiv.org/abs/2306.03310)
- 💻 [Repositório LIBERO original](https://github.com/Lifelong-Robot-Learning/LIBERO)

**Avaliando com LIBERO**

No **LeRobot**, portamos o LIBERO para o nosso framework e o usamos principalmente para **avaliar** o [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla), nosso modelo leve de Visão-Linguagem-Ação.

LIBERO agora faz parte da nossa **simulação com suporte a multi-avaliação**, o que significa que você pode avaliar suas políticas em um **único conjunto de tarefas** ou em **múltiplos conjuntos de uma só vez** com apenas uma flag.

Para instalar o LIBERO, depois de seguir as instruções oficiais do LeRobot, basta executar: `pip install -e ".[libero]"`

***Avaliação de conjunto único***

Avalie uma política em um conjunto LIBERO:

<CodeBlock language="bash">
{`lerobot-eval \\
  --policy.path="your-policy-id" \\
  --env.type=libero \\
  --env.task=libero_object \\
  --eval.batch_size=2 \\
  --eval.n_episodes=3`}
</CodeBlock>

- `--env.task` seleciona o conjunto (`libero_object`, `libero_spatial`, etc.).
- `--eval.batch_size` controla quantos ambientes são executados em paralelo.
- `--eval.n_episodes` define quantos episódios serão executados no total.

***Avaliação de múltiplos conjuntos***

Avalie uma política em vários conjuntos de uma só vez:

<CodeBlock language="bash">
{`lerobot-eval \\
  --policy.path="your-policy-id" \\
  --env.type=libero \\
  --env.task=libero_object,libero_spatial \\
  --eval.batch_size=1 \\
  --eval.n_episodes=2`}
</CodeBlock>

- Passe uma lista separada por vírgulas para `--env.task` para avaliação de múltiplos conjuntos.

**Exemplo de comando de treinamento**

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.type=smolvla \\
  --policy.repo_id=\${HF_USER}/libero-test \\
  --dataset.repo_id=HuggingFaceVLA/libero \\
  --env.type=libero \\
  --env.task=libero_10 \\
  --output_dir=./outputs/ \\
  --steps=100000 \\
  --batch_size=4 \\
  --eval.batch_size=1 \\
  --eval.n_episodes=1 \\
  --eval_freq=1000 \\`}
</CodeBlock>

-----

**Observação sobre renderização**

LeRobot usa MuJoCo para simulação. Você precisa definir o backend de renderização antes do treinamento ou da avaliação:

- `export MUJOCO_GL=egl` → para servidores headless (por exemplo, HPC, nuvem)

</details>

<details className="content-details">
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulte [Pi0](https://huggingface.co/docs/lerobot/pi0)

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

**Treinar**

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.type=pi0 \\
  --dataset.repo_id=seeed/eval_test123 \\
  --job_name=pi0_training \\
  --output_dir=outputs/pi0_training \\
  --policy.pretrained_path=lerobot/pi0_base \\
  --policy.compile_model=true \\
  --policy.gradient_checkpointing=true \\
  --policy.dtype=bfloat16 \\
  --steps=20000 \\
  --policy.device=cuda \\
  --batch_size=32 \\
  --wandb.enable=false`}
</CodeBlock>

**Avaliar**

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Colocar o tijolo de lego na caixa transparente" \\
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulte [Pi0.5](https://huggingface.co/docs/lerobot/pi05)

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

**Treinar**

<CodeBlock language="bash">
{`lerobot-train \\
    --dataset.repo_id=seeed/eval_test123 \\
    --policy.type=pi05 \\
    --output_dir=outputs/pi05_training \\
    --job_name=pi05_training \\
    --policy.pretrained_path=lerobot/pi05_base \\
    --policy.compile_model=true \\
    --policy.gradient_checkpointing=true \\
    --wandb.enable=false \\
    --policy.dtype=bfloat16 \\
    --steps=3000 \\
    --policy.device=cuda \\
    --batch_size=32`}
</CodeBlock>

**Avaliar**

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Colocar o tijolo de lego na caixa transparente" \\
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulte a documentação oficial: [GR00T N1.5](https://huggingface.co/docs/lerobot/groot).

GR00T N1.5 é um modelo base aberto da NVIDIA para raciocínio robótico mais geral e aprendizado de habilidades. É um modelo de **múltiplos corpos**: ele pode receber entradas multimodais como **linguagem** e **imagens**, e executar tarefas de manipulação em diferentes ambientes.

No LeRobot, o ponto-chave é definir o tipo de política como `--policy.type=groot`. Observe que o GR00T N1.5 tem requisitos de ambiente mais altos (depende de FlashAttention e requer uma GPU CUDA). Recomenda-se primeiro colocar ACT / Pi0 para rodar de ponta a ponta e, em seguida, experimentar o GR00T.

**Instalação (importante)**

De acordo com a documentação oficial atual, o GR00T N1.5 requer `flash-attn` e só pode ser usado em hardware compatível com CUDA.

Ordem recomendada:

1. Prepare primeiro o seu ambiente base (Python, CUDA, drivers, etc.). **Não** instale `lerobot` ainda.
2. Instale o PyTorch para a sua versão do CUDA (versões diferentes de CUDA podem exigir um `--index-url` diferente; siga a página de instalação do PyTorch).

<CodeBlock language="bash">
{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"`}
</CodeBlock>

:::tip

Se você estiver usando uma GPU da Série RTX 50, os seguintes requisitos devem ser atendidos: Python=3.10, CUDA=12.8, Torch=2.7.1

O comando de download é o seguinte:
<CodeBlock language="bash">
{`pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128`}
</CodeBlock>
:::

3. Instale as dependências de compilação para `flash-attn` e, em seguida, instale o próprio `flash-attn`.

<CodeBlock language="bash">
{`pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"`}
</CodeBlock>

:::tip

Se você estiver usando uma GPU da Série RTX 50, o seguinte requisito deve ser atendido: flash_attn=2.8.0

O comando de download é o seguinte:
<CodeBlock language="bash">
{`pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation`}
</CodeBlock>
:::

4. Instale o LeRobot com as dependências opcionais `groot` (`lerobot[groot]`).

<CodeBlock language="bash">
{`pip install "lerobot[groot]"`}
</CodeBlock>

:::tip
Se a instalação do `flash-attn` falhar, isso geralmente se deve a (1) incompatibilidade entre PyTorch/CUDA, (2) dependências de compilação ausentes ou (3) um ambiente muito novo/muito antigo. Verifique primeiro a documentação oficial do GR00T e as instruções de instalação do PyTorch.
:::

**Treinamento (fine-tuning)**

A documentação oficial fornece um exemplo multi-GPU com `accelerate launch --multi_gpu ...`. Se você tiver apenas uma única GPU, ainda pode começar fazendo um experimento de processo único funcionar primeiro (o suporte/argumentos exatos dependem da documentação oficial).

<CodeBlock language="bash">
{`accelerate launch \\
  --multi_gpu \\
  --num_processes=$NUM_GPUS \\
  $(which lerobot-train) \\
  --output_dir=$OUTPUT_DIR \\
  --save_checkpoint=true \\
  --batch_size=$BATCH_SIZE \\
  --steps=$NUM_STEPS \\
  --save_freq=$SAVE_FREQ \\
  --log_freq=$LOG_FREQ \\
  --policy.push_to_hub=true \\
  --policy.type=groot \\
  --policy.repo_id=$REPO_ID \\
  --policy.tune_diffusion_model=false \\
  --dataset.repo_id=$DATASET_ID \\
  --wandb.enable=true \\
  --wandb.disable_artifact=true \\
  --job_name=$JOB_NAME`}
</CodeBlock>

**Validação no robô (avaliação)**

Após o treinamento, você pode avaliar e gravar replays com `lerobot-record` como em outras políticas. A documentação oficial inclui um exemplo bimanual; usuários de braço único SO101 não precisam de argumentos do tipo `left_arm_port/right_arm_port`.

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_port=/dev/ttyACM1 \\
  --robot.right_arm_port=/dev/ttyACM0 \\
  --robot.id=bimanual_follower \\
  --robot.cameras='{ right: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}, left: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}, top: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --display_data=true \\
  --dataset.repo_id=\${HF_USER}/eval_groot_bimanual \\
  --dataset.num_episodes=10 \\
  --dataset.single_task="Pegue e entregue o cubo vermelho para o outro braço" \\
  --policy.path=\${HF_USER}/groot-bimanual \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10`}
</CodeBlock>

Licença: Apache 2.0 (mesma do repositório GR00T original).

</details>

<details className="content-details">
<summary>(Opcional) Fine-tuning Eficiente em Parâmetros (PEFT)</summary>

PEFT (Parameter-Efficient Fine-Tuning) é uma família de métodos e ferramentas que ajudam um grande modelo pré-treinado a se adaptar a novas tarefas **sem atualizar todos os parâmetros**. Para políticas LeRobot pré-treinadas (por exemplo, SmolVLA, Pi0), você geralmente pode treinar apenas um pequeno conjunto de parâmetros “adaptadores” (por exemplo, LoRA) para reduzir o uso de VRAM e o custo de treinamento, ainda assim alcançando desempenho próximo ao do fine-tuning completo.

**Instalação**

Após instalar o LeRobot com as dependências opcionais `peft`, você pode usar argumentos relacionados a PEFT no treinamento.

<CodeBlock language="bash">
{`pip install -e ".[peft]"`}
</CodeBlock>

<CodeBlock language="bash">
{`pip install "lerobot[peft]"`}
</CodeBlock>

Mais conceitos e métodos: [🤗 Documentação do PEFT](https://huggingface.co/docs/peft/index).

**Exemplo: Fine-tuning do SmolVLA com LoRA (subtarefa LIBERO `libero_spatial`)**

Este exemplo faz o fine-tuning de `lerobot/smolvla_base` com LoRA no conjunto de dados `HuggingFaceVLA/libero`. Os nomes dos argumentos dependem da versão do LeRobot; recomenda-se também verificar `lerobot-train --help`.

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.path=lerobot/smolvla_base \\
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \\
  --dataset.repo_id=HuggingFaceVLA/libero \\
  --env.type=libero \\
  --env.task=libero_spatial \\
  --output_dir=outputs/train/my_libero_smolvla_peft \\
  --job_name=my_libero_smolvla_peft \\
  --policy.device=cuda \\
  --steps=10000 \\
  --batch_size=32 \\
  --optimizer.lr=1e-3 \\
  --peft.method_type=LORA \\
  --peft.r=64`}
</CodeBlock>

**Principais argumentos de PEFT**

- `--peft.method_type`: seleciona o método PEFT. LoRA (Low-Rank Adapter) é uma das opções mais comuns.
- `--peft.r`: rank do LoRA. Um rank mais alto geralmente aumenta a capacidade, mas também aumenta a quantidade de parâmetros e o uso de VRAM.

**Escolher em quais camadas/módulos injetar LoRA (opcional)**

Por padrão, o PEFT geralmente injeta LoRA nas camadas de projeção mais importantes (por exemplo, atenção `q_proj`, `v_proj`), e também pode cobrir projeções de estado/ação. Se você quiser personalizar, use `--peft.target_modules`.

Padrões comuns:

1) Fornecer uma lista de sufixos de nomes de módulos (exemplo):

<CodeBlock language="bash">
{`--peft.target_modules="['q_proj', 'v_proj']"`}
</CodeBlock>

2) Fornecer uma regex (exemplo; ajuste para os nomes reais dos módulos no modelo):

<CodeBlock language="bash">
{`--peft.target_modules='(model\\\\.vlm_with_expert\\\\.lm_expert\\\\..*\\\\.(down|gate|up)_proj|.*\\\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'`}
</CodeBlock>

**Treinar completamente alguns módulos (opcional)**

Se você quiser que alguns módulos sejam totalmente treinados (em vez de apenas injetar LoRA), use `--peft.full_training_modules`. Por exemplo, treinar completamente apenas `state_proj`:

<CodeBlock language="bash">
{`--peft.full_training_modules="['state_proj']"`}
</CodeBlock>

**Sugestão de taxa de aprendizado (regra prática)**

Taxas de aprendizado para LoRA costumam ser ~10× maiores do que no fine-tuning completo. Por exemplo, se o fine-tuning completo normalmente usa `1e-4`, o LoRA pode começar em `1e-3`. Se você usar um agendador de taxa de aprendizado, a taxa final costuma ficar em torno de `1e-4` como referência.

</details>

<details className="content-details">
<summary>(Opcional) Treinamento Multi-GPU com Accelerate</summary>

**Etapas de treinamento**

Método 1: usar flags da CLI.

1. Instale `accelerate` no seu ambiente `lerobot`.

<CodeBlock language="bash">
{`pip install accelerate`}
</CodeBlock>

2. Inicie o treinamento multi-GPU com `accelerate launch` e as flags `--multi_gpu` e `--num_processes`.

<CodeBlock language="bash">
{`accelerate launch \\

--multi_gpu \\

--num_processes=2 \\

$(which lerobot-train) \\

--dataset.repo_id=\${HF_USER}/my_dataset \\

--policy.type=act \\

--policy.repo_id=\${HF_USER}/my_trained_policy \\

--output_dir=outputs/train/act_multi_gpu \\

--job_name=act_multi_gpu \\

--wandb.enable=true`}
</CodeBlock>

Principais flags do `accelerate`:

- `--multi_gpu`: habilita o treinamento multi-GPU.
- `--num_processes`: número de GPUs a usar (geralmente igual ao número de GPUs disponíveis na máquina).
- `--mixed_precision=fp16`: usa precisão mista fp16 (se o seu hardware suportar, você também pode usar bf16).

Observe: **bf16 requer suporte de hardware** e não está disponível em todas as GPUs.

| Precisão | Suporte de hardware |
|--|--|
| fp16 | Suportada por quase todas as GPUs NVIDIA |
| bf16 | Suportada apenas por algumas GPUs mais recentes (Ampere e posteriores) |

Se a sua GPU não suportar bf16, escolha fp16 na configuração do Accelerate ou especifique fp16 explicitamente.

Método 2: usar um arquivo de configuração do `accelerate` (opcional).

Se você treina com múltiplas GPUs com frequência, pode salvar a configuração para evitar digitar repetidamente as mesmas flags.

`accelerate config` salva a configuração do seu hardware (número de GPUs, precisão mista, etc.) em um arquivo de configuração, para que você não precise reinserir essas opções ao executar `accelerate launch` depois. Isso não altera a lógica de treinamento do LeRobot; apenas reduz entradas repetidas na CLI.

Se você só usa multi-GPU ocasionalmente (ou se esta é a sua primeira vez), pular esta etapa é totalmente aceitável.

Na configuração interativa, para o cenário comum de “uma única máquina + múltiplas GPUs”, as escolhas típicas são:

- Ambiente de computação: Esta máquina
- Número de máquinas: 1
- Número de processos: número de GPUs que você deseja usar
- IDs de GPU a usar: pressione Enter (usar todas as GPUs)
- Precisão mista: prefira fp16; escolha bf16 apenas se você souber que sua GPU a suporta

<CodeBlock language="bash">
{`accelerate config`}
</CodeBlock>

<CodeBlock language="bash">
{`accelerate launch $(which lerobot-train) \\

--dataset.repo_id=\${HF_USER}/my_dataset \\

--policy.type=act \\

--policy.repo_id=\${HF_USER}/my_trained_policy \\

--output_dir=outputs/train/act_multi_gpu \\

--job_name=act_multi_gpu \\

--wandb.enable=true`}
</CodeBlock>

**Como o uso de múltiplas GPUs afeta hiperparâmetros (e como ajustá-los)**

O LeRobot não ajusta automaticamente a taxa de aprendizado ou o número de etapas de treinamento com base no número de GPUs, para evitar alterar silenciosamente o comportamento de treinamento. Isso difere de alguns outros frameworks de treinamento distribuído.

Se você quiser ajustar hiperparâmetros para multi-GPU, uma abordagem comum é:

- **Etapas**: o batch size efetivo aumenta (batch_size × num_gpus), então você pode reduzir o número de etapas aproximadamente proporcional a `1 / num_gpus` para manter um número semelhante de amostras vistas.

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--batch_size=8 \\

--steps=50000 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

- **Taxa de aprendizado**: como cada etapa usa mais amostras, você geralmente pode escalar a taxa de aprendizado linearmente com o número de GPUs:
  new_lr = single_gpu_lr × num_gpus

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--optimizer.lr=2e-4 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

Essas não são regras rígidas; são heurísticas comuns. Se você não tiver certeza, também pode manter a taxa de aprendizado e o número de etapas inalterados, desde que o treinamento permaneça estável.

Para configurações avançadas e solução de problemas, consulte a documentação do Accelerate: [Accelerate](https://huggingface.co/docs/accelerate/index).

</details>

<details className="content-details">

<summary>(Opcional) Inferência Assíncrona</summary>

Quando a inferência assíncrona não está habilitada, o fluxo de controle do LeRobot pode ser entendido como **inferência sequencial / síncrona convencional**: a política primeiro prevê um segmento de ações, depois executa esse segmento e, somente após isso, espera pela próxima previsão.

Para modelos maiores, isso pode fazer com que o robô faça uma pausa perceptível enquanto espera pelo próximo bloco de ações.

O objetivo da inferência assíncrona é permitir que o robô execute o bloco de ações atual enquanto calcula o próximo com antecedência, reduzindo assim o tempo ocioso e melhorando a capacidade de resposta.

A inferência assíncrona é aplicável a políticas suportadas pelo LeRobot, incluindo **políticas de ação baseadas em blocos** como **ACT, OpenVLA, Pi0 e SmolVLA**.

Como a inferência é desacoplada do controle real, a inferência assíncrona também ajuda a aproveitar máquinas com recursos de computação mais fortes para realizar a inferência para o robô.

Você pode ler mais sobre inferência assíncrona no [blog da Hugging Face](https://huggingface.co/blog/async-robot-inference)

Primeiro, vamos apresentar alguns conceitos básicos:

- **Cliente**: conecta-se ao braço robótico e às câmeras, coleta dados de observação (como imagens e poses do robô), envia essas observações para o servidor e recebe os blocos de ações retornados pelo servidor, executando-os em ordem.

- **Servidor**: o dispositivo que fornece recursos de computação. Ele recebe dados das câmeras e do braço robótico, realiza a inferência (isto é, o cálculo) para produzir blocos de ações e os envia de volta ao cliente. Pode ser o mesmo dispositivo conectado ao braço robótico e às câmeras, outro computador na mesma rede local ou um servidor em nuvem alugado na Internet.

- **Bloco de ações**: uma sequência de comandos de ação do braço robótico obtida pela inferência da política no lado do servidor.

Três cenários de implantação para inferência assíncrona

1. Implantação em máquina única

O robô, as câmeras, o cliente e o servidor estão todos no mesmo dispositivo.

Este é o caso mais simples: o servidor pode escutar em 127.0.0.1, e o cliente também pode se conectar a 127.0.0.1:porta. O exemplo de comando na documentação oficial é para este cenário.

2. Implantação em LAN

O robô e as câmeras estão conectados a um dispositivo leve, enquanto o servidor de políticas é executado em outra máquina de alta capacidade de computação na mesma rede local.

Nesse caso, o servidor deve escutar em um endereço acessível por outras máquinas, e o cliente também deve se conectar ao IP da LAN do servidor, em vez de 127.0.0.1.

3. Implantação entre redes / em nuvem

O servidor de políticas é executado em um host de nuvem publicamente acessível, e o cliente se conecta a ele pela Internet pública.

Essa abordagem pode usar a GPU mais potente do host em nuvem. Quando as condições de rede são boas, o tempo de ida e volta da rede (latência de rede) às vezes pode ser relativamente pequeno em comparação com o tempo de inferência, mas isso depende do seu ambiente de rede real.

Nota de segurança: o pipeline de inferência assíncrona do LeRobot tem um risco relacionado a gRPC sem autenticação + desserialização com pickle. Se houver informações ou serviços importantes no servidor, não é recomendado expor o serviço diretamente à Internet em uma implantação pública. Uma abordagem mais segura é usar VPN ou tunelamento SSH, ou pelo menos restringir os IPs de origem permitidos no grupo de segurança ao IP público do seu próprio cliente.

**Introdução à implantação de inferência assíncrona**

**Etapa 1: Configuração do ambiente**

Primeiro, use pip para instalar as dependências adicionais necessárias para a inferência assíncrona. Tanto o cliente quanto o servidor precisam ter o lerobot instalado junto com as dependências extras:

<CodeBlock language="bash">
{`pip install -e ".[async]"`}
</CodeBlock>

**Etapa 2: Configuração e verificações de rede**

1. **Problemas de proxy**

Se o seu terminal atual estiver configurado para usar um proxy e a conexão se comportar de forma anormal, você pode desativar temporariamente as variáveis de ambiente do proxy:

<CodeBlock language="bash">
{`unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY`}
</CodeBlock>

Observação: o comando acima afeta apenas a sessão de terminal atual. Se você abrir outra janela de terminal, precisará executá-lo novamente.

2. **Abrir a porta no firewall / grupo de segurança**

Implantação em máquina única: isso geralmente pode ser ignorado.

Implantação em LAN: você precisa abrir a porta de escuta no lado do servidor.

Exemplo de abertura da porta de escuta em uma configuração de LAN (executar no lado do servidor):

<CodeBlock language="bash">
{`sudo ufw allow 8080/tcp`}
</CodeBlock>

Implantação em nuvem: você precisa abrir essa porta no grupo de segurança do servidor em nuvem, e é recomendável restringir o máximo possível os IPs de origem.

Se você estiver executando em um servidor em nuvem:

Abra a porta 8080 no grupo de segurança do console de gerenciamento do servidor, ou use outra porta que já esteja aberta. Diferentes plataformas de serviços em nuvem lidam com isso de maneiras diferentes; consulte a documentação do seu provedor de nuvem.

3. **Confirmar o endereço IP**

Esta etapa pode ser ignorada para implantação em máquina única (o endereço IP para uma única máquina é sempre 127.0.0.1).

Se for uma implantação em LAN:

Você precisa confirmar e lembrar o endereço IP de LAN do lado do servidor. Quando o cliente se conectar, o que deve ser preenchido é o IP de LAN da máquina que está executando o policy_server, não o IP do próprio cliente.

Linux / Jetson / Raspberry Pi:

<CodeBlock language="bash">
{`hostname -I`}
</CodeBlock>

Se forem exibidos vários endereços, geralmente escolha aquele que corresponde à interface de rede de LAN atual, por exemplo 192.168.x.x.

Você também pode usar:

<CodeBlock language="bash">
{`ip addr`}
</CodeBlock>

para visualizar o campo inet na interface de rede atualmente conectada.

Windows:

<CodeBlock language="shell">
{`ipconfig`}
</CodeBlock>

Encontre um campo como Endereço IPv4 . . . . . . . . . . . : 192.168.14.140; esse é o endereço IP de LAN dessa máquina.

macOS:

<CodeBlock language="bash">
{`ifconfig`}
</CodeBlock>

Encontre o campo inet correspondente à interface de rede atualmente conectada; esse é o endereço IP de LAN.

Precisamos lembrar o endereço IP de LAN do lado do servidor. Usaremos `<LAN IP address>` para nos referir a ele.

Se for uma implantação em servidor em nuvem:

Procure o IP público no painel de controle do servidor. Ele geralmente é chamado de uma das seguintes formas:

Public IPv4

External IP

Public IP address

EIP

Public IP

Precisamos lembrar o endereço IP público. Usaremos `<server public IP>` para nos referir a ele.

4. **Teste de conexão**

Implantação em máquina única: esta etapa pode ser ignorada

Implantação em LAN / nuvem: é recomendável testar, a partir do lado do cliente, se a porta do servidor é alcançável. Exemplos de testes são os seguintes:

Exemplo em LAN: executar no lado do cliente

<CodeBlock language="bash">
{`nc -vz <LAN IP address> 8080`}
</CodeBlock>

Exemplo em nuvem: executar no lado do cliente

<CodeBlock language="bash">
{`nc -vz <server public IP> 8080`}
</CodeBlock>

**Etapa 3: Iniciar o serviço**

**Cenário A: Implantação em máquina única**

Inicie o serviço local em um terminal:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=127.0.0.1 \\
--port=8080`}
</CodeBlock>

Depois que ele iniciar com sucesso, você precisa manter esse terminal aberto. Será necessário abrir um novo terminal para executar outros comandos.

**Cenário B: Implantação em LAN**

Executar no lado do servidor:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

Nesse caso, quando o cliente se conectar, o `--server_address` deve ser o endereço IP de LAN do lado do servidor, como `<LAN IP address>:8080`.

**Cenário C: Implantação em servidor em nuvem**

Executar no lado do servidor:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

Nesse caso, quando o cliente se conectar, o `--server_address` deve ser o endereço IP público do servidor, como `<server public IP>:8080`.

**Etapa 4: Escolher parâmetros de inferência**

Executar no lado do cliente:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.robot_client \\
--server_address=<ip address>:8080 \\
--robot.type=so100_follower \\
--robot.port=/dev/tty.usbmodem585A0076841 \\
--robot.id=follower_so100 \\
--robot.cameras="{ laptop: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}, phone: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \\
--task="dummy" \\
--policy_type=your_policy_type \\
--pretrained_name_or_path=user/model \\
--policy_device=cuda \\
--actions_per_chunk=50 \\
--chunk_size_threshold=0.5 \\
--aggregate_fn_name=weighted_average \\
--debug_visualize_queue_size=True`}
</CodeBlock>

Explicações dos parâmetros:

- `--server_address`

Especifica o endereço e a porta do policy server. `<ip address>` deve ser substituído por 127.0.0.1 (máquina local), `<LAN IP address>` (LAN) ou `<server public IP>` (servidor em nuvem).

- `--robot.type, --robot.port, --robot.id, --robot.cameras`

Parâmetros do dispositivo de hardware. Eles devem ser mantidos consistentes com os parâmetros usados durante a coleta do conjunto de dados.

- `--task`

A descrição da tarefa. Políticas de visão e linguagem como SmolVLA podem determinar o alvo da ação com base no texto da tarefa.

- `--policy_type`

Substitua isso pelo nome específico da política, por exemplo:

- smolvla

- act

- `--pretrained_name_or_path`

Esse valor deve ser substituído pelo caminho do modelo no lado do servidor ou por um caminho de modelo no Hugging Face.

- `--policy_device`

Especifica o dispositivo de inferência usado no lado do servidor.

Pode ser cuda, mps ou cpu.

- `--actions_per_chunk=50`

Especifica quantas ações são produzidas em cada inferência.

Quanto maior esse valor:

Vantagem: o buffer de ações é mais abundante, tornando menos provável que se esgote
Desvantagem: o horizonte de predição é maior, então o erro de controle pode se acumular de forma mais perceptível

- `--chunk_size_threshold=0.5`

Especifica quando solicitar o próximo bloco de ações ao servidor.

Esse é um limite, geralmente no intervalo de 0 a 1.

Pode ser entendido como: quando a proporção restante da fila de ações atual cai abaixo desse limite, o cliente enviará uma nova observação com antecedência e solicitará o próximo bloco de ações.

Definir como 0.5 aqui significa:

quando o bloco de ações atual estiver aproximadamente pela metade consumido

o cliente começa a solicitar o próximo bloco de ações

Quanto maior esse valor, mais frequentemente as solicitações são enviadas e mais responsivo o sistema se torna, mas a carga no servidor também aumenta.

Quanto menor esse valor, mais o comportamento se aproxima da inferência síncrona.

- `--aggregate_fn_name=weighted_average`

Especifica o método de agregação para intervalos de ações sobrepostos.

Na inferência assíncrona, quando o bloco de ações antigo ainda não foi totalmente executado, o novo bloco de ações já pode ter chegado.

Nesse caso, os dois blocos se sobrepõem em parte do intervalo de tempo, e é necessária uma função de agregação para combiná-los na ação final executada.

O significado de weighted_average é:

usar uma média ponderada para fundir a parte sobreposta.

Isso geralmente torna a troca de ações mais suave e reduz mudanças bruscas.

- `--debug_visualize_queue_size=True`

Define se o tamanho da fila de ações será visualizado em tempo de execução.

Quando ativado, permite ver de forma mais direta se a fila atinge o fundo com frequência, o que ajuda a ajustar actions_per_chunk e chunk_size_threshold.

**Etapa 5: Ajustar parâmetros com base no comportamento do robô**

Na inferência assíncrona, há dois parâmetros adicionais que precisam de ajuste e que não existem na inferência síncrona:

Parâmetro Valor inicial sugerido Descrição

actions_per_chunk 50 Quantas ações a política produz de uma vez. Valores típicos: 10–50.

chunk_size_threshold 0.5 Quando a proporção restante da fila de ações é ≤ chunk_size_threshold, o cliente envia uma nova solicitação de bloco de ações. O intervalo de valores é [0, 1].

Quando --debug_visualize_queue_size=True, a variação do tamanho da fila de ações será plotada em tempo de execução.

O que a inferência assíncrona precisa equilibrar é: a velocidade com que o servidor gera blocos de ações deve ser maior ou igual à velocidade com que o cliente consome blocos de ações. Caso contrário, a fila de ações ficará vazia e o robô começará a engasgar novamente (isso pode ser visto como a curva batendo no fundo na visualização da fila).

A velocidade com que o servidor gera blocos de ações é afetada por fatores como tamanho do modelo, tipo de dispositivo, VRAM / memória e poder de computação da GPU.

A velocidade com que o cliente consome blocos de ações é afetada pelo fps de execução configurado.

Se a fila frequentemente ficar vazia, você precisa aumentar actions_per_chunk, aumentar chunk_size_threshold ou reduzir o fps.

Se a curva da fila oscilar com frequência, mas as ações restantes na fila forem sempre suficientes, você pode diminuir adequadamente `chunk_size_threshold`.

Em geral:

o intervalo empírico para `actions_per_chunk` é 10–50

o intervalo empírico para `chunk_size_threshold` é 0,5–0,7; ao ajustar, é recomendado começar em 0,5 e aumentá-lo gradualmente

</details>

Se você encontrar o seguinte erro:

<CodeBlock language="bash">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

Tente executar o seguinte comando para resolvê-lo:

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

O treinamento deve levar várias horas. Você encontrará checkpoints em `outputs/train/act_so100_test/checkpoints`.

Para retomar o treinamento a partir de um checkpoint, abaixo está um comando de exemplo para retomar do checkpoint `last` da política `act_so101_test`:

<CodeBlock language="bash">
{`lerobot-train \\
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \\
  --resume=true`}
</CodeBlock>

**Fazer upload dos checkpoints da política**

Quando o treinamento terminar, faça upload do checkpoint mais recente com:

<CodeBlock language="bash">
{`huggingface-cli upload \${HF_USER}/act_so101_test \\
  outputs/train/act_so101_test/checkpoints/last/pretrained_model`}
</CodeBlock>

Você também pode fazer upload de checkpoints intermediários com:

<CodeBlock language="bash">
{`CKPT=010000
huggingface-cli upload \${HF_USER}/act_so101_test\${CKPT} \\
  outputs/train/act_so101_test/checkpoints/\${CKPT}/pretrained_model`}
</CodeBlock>

</section>

## FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>FAQ</h2>
    <p>Centralização da solução de problemas para portas, IDs de servos, ffmpeg, câmeras, conjuntos de dados, avaliação e treinamento.</p>
  </div>

<details className="content-details">
<summary>Qual repositório LeRobot devo usar?</summary>

Use o repositório recomendado neste wiki:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

Esta versão foi verificada com o SO-ARM10x. O repositório LeRobot upstream muda rapidamente, portanto os argumentos de comando, formatos de conjunto de dados e dependências podem ser diferentes deste tutorial.

</details>

<details className="content-details">
<summary>`Motor 'gripper' was not found` durante a configuração do ID do servo</summary>

Se você vir o seguinte erro:

<CodeBlock language="text">
{`Motor 'gripper' was not found, Make sure it is connected`}
</CodeBlock>

verifique se o cabo de comunicação está conectado corretamente e se o barramento do servo está alimentado com a tensão correta.

</details>

<details className="content-details">
<summary>`Could not connect on port "/dev/ttyACM0"`</summary>

Se `/dev/ttyACM0` existir, mas o LeRobot não conseguir se conectar a ele, geralmente faltam permissões da porta serial. Execute:

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

Também verifique novamente se os braços líder e seguidor estão mapeados para as portas esperadas.

</details>

<details className="content-details">
<summary>`No valid stream found in input file`</summary>

Se você vir:

<CodeBlock language="text">
{`No valid stream found in input file. Is -1 of the desired media type?`}
</CodeBlock>

instale o ffmpeg 7.1.1:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="No valid stream error" />
</div>

</details>

<details className="content-details">
<summary>`Present_Position` sync read failed</summary>

Se você vir:

<CodeBlock language="text">
{`ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!`}
</CodeBlock>

verifique se o braço correspondente está ligado e se os cabos de dados do barramento do servo estão soltos ou desconectados. Se o LED de um servo estiver apagado, o cabo antes desse servo pode estar solto.

</details>

<details className="content-details">
<summary>`Magnitude 30841 exceeds 2047` durante a calibração</summary>

Se você vir:

<CodeBlock language="text">
{`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`}
</CodeBlock>

desligue e reinicie o braço e, em seguida, calibre novamente. Se o problema persistir, use a ferramenta de calibração rápida Seeed Studio SoARM para realizar a calibração de posição central e a verificação de ID dos servos e, depois, refaça a calibração de todo o braço.

</details>

<details className="content-details">
<summary>Como recalibrar após reparo ou substituição de peças?</summary>

Exclua os arquivos de calibração antigos e calibre novamente:

<CodeBlock language="bash">
{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators`}
</CodeBlock>

As informações de calibração são armazenadas como arquivos JSON nesses diretórios. Se o hardware mudar, mas os arquivos de calibração antigos permanecerem, o LeRobot pode reutilizar offsets desatualizados.

</details>

<details className="content-details">
<summary>Os atalhos de teclado não funcionam durante a gravação</summary>

Se a tecla de seta para a direita, seta para a esquerda ou ESC não responder durante a gravação do conjunto de dados, primeiro verifique se a variável de ambiente `$DISPLAY` está definida. Você também pode tentar fazer downgrade do `pynput`:

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

</details>

<details className="content-details">
<summary>Como devo lidar com episódios com falha durante a gravação?</summary>

Se o objeto cair, o gripper errar ou a qualidade do episódio for ruim, mova o braço de volta para uma pose de descanso segura e pressione a tecla de seta para a esquerda para descartar e regravar o episódio. Se a tarefa terminar cedo e o robô já tiver retornado ao descanso, pressione a tecla de seta para a direita para ir para o próximo episódio sem esperar pelo tempo restante completo.

</details>

<details className="content-details">
<summary>Em que devo prestar atenção durante a coleta do conjunto de dados?</summary>

Mantenha a posição da câmera, o ângulo da câmera e a iluminação ambiente estáveis. Evite fundos instáveis ou pedestres no campo de visão da câmera, pois grandes diferenças entre o ambiente de gravação e o de implantação podem fazer com que a política falhe.

Defina `--dataset.num_episodes` alto o suficiente antes de começar. Não pare manualmente a gravação no meio, a menos que seja necessário, porque estatísticas do conjunto de dados, como média e variância, são calculadas após o término da coleta e são necessárias para o treinamento.

</details>

<details className="content-details">
<summary>Como excluir ou modificar conjuntos de dados gravados?</summary>

Para excluir ou editar conjuntos de dados gravados, consulte o tutorial da ferramenta de conjunto de dados:

[Dataset Tool](/pt-br/lerobot_dataset_tool)

</details>

<details className="content-details">
<summary>Os dados de imagem da câmera USB não podem ser lidos</summary>

Evite conectar a câmera USB por meio de um hub USB. Conecte-a diretamente ao dispositivo, de preferência por uma porta USB 3.0, para garantir largura de banda suficiente para transmissão de imagem.

</details>

<details className="content-details">
<summary>Tempo limite ou incompatibilidade de número de série da câmera Orbbec</summary>

Se você vir um tempo limite ao aguardar quadros, desconecte e reconecte a câmera. Se você vir:

<CodeBlock language="text">
{`No Orbbec camera found for 'XXXX'`}
</CodeBlock>

execute o comando de detecção da câmera e atualize `serial_number_or_name` com o número de série real:

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`File exists` durante a avaliação</summary>

Se a avaliação informar que um diretório `eval_` já existe, exclua primeiro a pasta de avaliação existente e execute o programa novamente.

<CodeBlock language="text">
{`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`mean is infinity` durante a avaliação</summary>

Se você vir:

<CodeBlock language="text">
{`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`}
</CodeBlock>

certifique-se de que as chaves de câmera em `--robot.cameras`, como `front` e `side`, correspondam exatamente às chaves usadas durante a gravação do conjunto de dados.

</details>

<details className="content-details">
<summary>`TypeError: stack(): argument 'tensors' must be tuple of Tensors`</summary>

Se você vir:

<CodeBlock language="text">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

tente instalar a versão compatível do `datasets`:

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`rerun` has no attribute `scalar`</summary>

Se você vir:

<CodeBlock language="text">
{`AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`}
</CodeBlock>

faça downgrade do SDK do rerun:

<CodeBlock language="bash">
{`pip3 install rerun-sdk==0.23`}
</CodeBlock>

</details>

<details className="content-details">
<summary>Quanto tempo o treinamento ACT geralmente leva?</summary>

Como referência aproximada, treinar ACT em 50 episódios leva cerca de 6 horas em um laptop com RTX 3060 8GB e cerca de 2–3 horas em uma RTX 4090 ou A100. O tempo real depende do tamanho do conjunto de dados, resolução da imagem, tamanho do batch e hardware.

</details>

:::tip
Se você encontrar problemas de software ou dependências não resolvidos após verificar este FAQ, relate-os no [repositório LeRobot no GitHub](https://github.com/huggingface/lerobot) ou no [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).
:::

</section>


## Citação

<section id="references" className="section-card">
  <div className="section-title">
    <span>Referências</span>
    <h2>Citação</h2>
    <p>Documentação, projetos, artigos e recursos externos relacionados.</p>
  </div>

[Chinese Document](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

Projeto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Projeto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

</section>

## Suporte Técnico e Discussão de Produtos

<section id="support" className="section-card">
  <div className="section-title">
    <span>Suporte</span>
    <h2>Suporte Técnico e Discussão de Produtos</h2>
    <p>Entre em contato com a Seeed Studio e participe das discussões da comunidade sobre dúvidas de produtos.</p>
  </div>

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.


<div className="path-grid">
  <a className="path-card" href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer"><strong>Fórum</strong><span>Faça perguntas sobre produtos e questões técnicas no fórum da Seeed.</span></a>
  <a className="path-card" href="https://www.seeedstudio.com/contacts" target="_blank" rel="noopener noreferrer"><strong>Suporte por Email</strong><span>Entre em contato diretamente com o suporte da Seeed Studio.</span></a>
  <a className="path-card" href="https://discord.gg/eWkprNDMU7" target="_blank" rel="noopener noreferrer"><strong>Discord</strong><span>Junte-se à comunidade Seeed no Discord.</span></a>
  <a className="path-card" href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" target="_blank" rel="noopener noreferrer"><strong>Discussão no GitHub</strong><span>Discuta o conteúdo da wiki e questões de documentação.</span></a>
</div>


</section>

</div>
