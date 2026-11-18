---
title: Seguimento da Palma com Câmera de Pulso reBot-RS
description: Use uma câmera de profundidade montada no pulso para seguir uma mão e controlar a garra do reBot Arm B601-RS com um gesto de pinça.
slug: /rebot_arm_b601_rs_camera_follow
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp
keywords:
  - reBot Arm
  - B601-RS
  - hand tracking
  - depth camera
  - visual servoing
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Seguimento da Palma com Câmera de Pulso reBot-RS

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="Braço robótico reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Adquira agora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Ambiente de referência: Python 3.10" />
  <img src="https://img.shields.io/badge/Platform-Linux-orange.svg" alt="Plataforma: Linux" />
  <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Câmera: câmera de profundidade RGB-D" />
  <img src="https://img.shields.io/badge/Tracking-MediaPipe-yellow.svg" alt="Detecção de mão: MediaPipe" />
</p>

<p align="center">
  <strong>Sensoriamento de profundidade no pulso · Seguimento da palma · Pinça para fechar a garra · Pré-visualização web local</strong>
</p>

Este tutorial explica como executar o [reBot RS Camera Follow](https://github.com/Yang-Ci/reBot_RS_Camera-Follow). Uma câmera de profundidade montada no pulso captura imagens de cor e profundidade, enquanto o programa detecta a palma e calcula comandos de seguimento para o braço. Você também pode controlar a garra beliscando o polegar e o dedo indicador e usar uma página web local para visualizar a câmera, o estado das juntas e o modelo do robô.

O projeto combina pontos de referência da mão com dados de profundidade alinhados para estimar a posição tridimensional da palma. Ele filtra o alvo, transforma coordenadas e calcula comandos de junta usando a cinemática do robô. A página web pré-visualiza os dados e gerencia o processo de controle. Os valores das juntas podem vir de feedback, comandos ou de uma estimativa do modelo; verifique o rótulo de origem dos dados na página.

<GitHubStarButton
  owner="Yang-Ci"
  repo="reBot_RS_Camera-Follow"
  ariaLabel="Star reBot_RS_Camera-Follow on GitHub"
/>

:::warning Segurança com robô real
A inicialização habilita os motores e move o braço para HOME; ao sair, o braço também é movido de volta para zero. Limpe toda a área de movimento, fixe o braço, verifique a alimentação, o CAN e o trajeto até HOME, e certifique-se de que o botão de parada de emergência de hardware esteja disponível. Comece em baixa velocidade e dentro de uma faixa pequena ao executar o sistema pela primeira vez ou após trocar o hardware. As proteções de software e a visualização na web não substituem detecção de colisão nem uma parada de emergência de hardware.
:::

## Arquitetura do Sistema e Abordagem

### Arquitetura do Sistema

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/system-architecture-en-dark.png" alt="Arquitetura do sistema: uma câmera de pulso envia quadros para um host Linux, que controla o braço via CAN e recebe feedback das juntas; uma página web local exibe o status." />
</p>

A câmera de pulso fornece quadros de cor e profundidade para o host, que controla o braço via CAN e recebe feedback das juntas. A página web local gerencia o controlador e exibe a pré-visualização e o status.

A thread de visão captura quadros da câmera e detecta a mão. A thread de servocontrole lê o alvo mais recente e usa o modelo do robô e a pose da câmera para calcular comandos de junta. A página web inicia e gerencia o controlador por meio de um serviço local e recebe o status; ela não se conecta ao CAN diretamente. A exibição pode mostrar feedback real, comandos ou estimativas; verifique o rótulo de origem dos dados.

### Seguimento da Palma e Controle da Garra

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/following-workflow-en-dark.png" alt="O seguimento da palma detecta a palma 3D, gera um alvo e move o braço. O controle por pinça detecta pontas dos dedos, calcula a distância da pinça e comanda a garra." />
</p>

O seguimento da palma detecta a palma 3D, calcula um alvo de seguimento e move o braço. O controle da garra usa as posições das pontas dos dedos e a distância da pinça para produzir um comando de abertura.

Como a câmera é montada no pulso, o controlador deve transformar coordenadas da câmera em coordenadas do robô. Se a palma for perdida brevemente, o programa pode extrapolar por um tempo limitado; após uma perda mais longa, ele mantém a posição. O movimento pode ser retomado quando a mão for detectada novamente. O controle por pinça compartilha o resultado da detecção de mão com o seguimento, e a página web também permite manter a garra na posição atual.

## Pré-requisitos

- Um reBot Arm B601-RS configurado, sua fonte de alimentação e uma interface CAN funcional. Veja primeiro o [Guia Rápido do reBot-RS](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/).
- Um computador com Linux. O ambiente de referência usa Python 3.10; o projeto requer o SDK da câmera, Pinocchio e motorbridge. Bibliotecas de sistema e permissões de dispositivo variam conforme a máquina.
- Uma câmera de profundidade montada no pulso e um suporte compatível. A página web pode selecionar Gemini 2, Gemini 305, Gemini 336 ou RealSense D435i. Veja abaixo os requisitos de pose da câmera.

## Escolher um Suporte de Câmera

Gemini 2, D435i e Gemini 336 usam o suporte nivelado V1, com um URDF de câmera separado para cada modelo. A figura mostra o modelo STL do suporte compartilhado em três vistas; seus rótulos estão em chinês:

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini2-level-mount.png" alt="Vistas em perspectiva, superior e lateral do suporte compartilhado por Gemini 2, Gemini 336 e D435i" />
</p>

A figura lista a caixa delimitadora do modelo como X 95,8 × Y 51,0 × Z 25,1 mm. Baixe arquivos STEP e STL no [diretório do suporte compartilhado](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/tree/main/models/wrist_camera/gemini2-gemini336-d435i).

Gemini 305 usa um suporte nivelado centralizado separado, mostrado abaixo como uma pré-visualização de modelo STL. O suporte também pode acomodar D405; as opções de câmera para o programa de seguimento dependem do que o projeto suporta.

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini305-level-mount.png" alt="Vistas em perspectiva, superior e lateral do suporte compartilhado por Gemini 305 e D405" />
</p>

Os rótulos da figura estão em chinês e listam a caixa delimitadora do modelo como X 46,0 × Y 73,4 × Z 24,7 mm. Veja o [modelo STL do suporte](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/meshes/Gemini305_D405_Mount.stl) e as [notas do modelo](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md). O invólucro da câmera Gemini 305 é aproximado no modelo URDF.

Os centros ópticos e as posições de montagem diferem entre as câmeras. Essas poses são montagens CAD nominais. Antes de usar, verifique a montagem, o campo de visão e o URDF em relação à configuração física e, em seguida, verifique a direção do movimento em baixa velocidade.

## Instalar o Projeto e Dependências

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>Obter o projeto e criar um ambiente</h4>
    <p className="rebot-step-label">Etapa 1</p>

Execute o seguinte em um terminal Linux:

```bash
git clone https://github.com/Yang-Ci/reBot_RS_Camera-Follow.git
cd reBot_RS_Camera-Follow
python3.10 -m venv .venv-arm
.venv-arm/bin/python -m pip install -r requirements.txt
```

Instale e verifique o SDK para sua câmera. Para D435i, também instale os bindings Python do RealSense neste ambiente:

```bash
.venv-arm/bin/python -m pip install 'pyrealsense2>=2.54'
```

O arquivo [requirements-d435i.txt](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/requirements-d435i.txt) do projeto fornece um conjunto de dependências para uso apenas de visão com D435i; o controle de robô real também requer as dependências principais. Se a instalação falhar, verifique a versão do Python, as bibliotecas do sistema, as permissões do dispositivo e o SDK da câmera.
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>Verificar os recursos incluídos</h4>
    <p className="rebot-step-label">Etapa 2</p>

O controlador do robô, o URDF do RS, o modelo web e os recursos de detecção de mão no navegador estão incluídos neste repositório. Você não precisa clonar outros projetos nem definir caminhos de recursos. Verifique os arquivos a partir da raiz do projeto:

```bash
ls vendor/rebot_control
ls assets/robot/description/urdf/ReBot_Arm_RS.urdf
ls web/lib/mediapipe
```

Esses comandos devem listar os diretórios ou arquivo correspondentes. As dependências Python e o SDK da câmera ainda precisam ser instalados. Veja as [notas sobre recursos incluídos](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md) para as fontes.
  </div>
</section>
</div>

## Verificar a Pose da Câmera

Gemini 2, D435i, Gemini 305 e Gemini 336 usam por padrão a pose nominal da câmera em CAD a partir de seus respectivos arquivos URDF; nenhum arquivo de calibração mão-olho é necessário. Gemini 2, D435i e Gemini 336 usam seus modelos nivelados V1 correspondentes. D435i seleciona o frame óptico de acordo com a imagem de cor ou infravermelha atual. Gemini 305 usa o modelo de suporte nivelado centralizado.

Antes de usar, certifique-se de que a câmera física e o suporte correspondem ao URDF selecionado e, em seguida, verifique a direção do movimento em baixa velocidade. Poses CAD nominais não são resultados medidos. Veja as [notas do modelo de pulso](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md) para detalhes.

## Verificar a Pré-visualização da Câmera

Inicie o serviço web a partir da raiz do projeto:

```bash
python3 web/server.py
```

No mesmo computador, abra [http://127.0.0.1:8765](http://127.0.0.1:8765). O serviço escuta apenas na máquina local. A interface web atual está em chinês: selecione **Real Robot Control** (真机控制), selecione a câmera conectada e clique em **Open Camera** (打开摄像头) para verificar a imagem antes de conectar o braço. A janela de profundidade em pré-visualizações Gemini ajuda a verificar se há dados de profundidade disponíveis; ela não é um dispositivo de medição ou de segurança.

Para **Computer Camera Simulation** (电脑摄像头模拟), alterne os modos, clique em **Enable Camera** (开启摄像头) e permita o acesso do navegador. Este modo aciona apenas o modelo web; ele não controla o braço físico, não estima a profundidade da palma nem executa cinemática inversa do efetuador final.

Para executar a visão do Gemini 336 sem conectar o braço:

```bash
.venv-arm/bin/python palm_follow_grasp.py --camera gemini336 --no-arm
```

Se nenhuma imagem aparecer, verifique a conexão da câmera, as permissões do dispositivo, o SDK e se outro programa está usando a câmera. Se o modelo web estiver ausente, verifique se os recursos `assets/` e `web/lib/` do repositório estão completos.

## Iniciar o Seguimento com o Robô Real

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>Verificar o equipamento e a área de trabalho</h4>
    <p className="rebot-step-label">Step 1</p>

Feche outros programas que usem CAN e verifique a pose da câmera, as posições zero das juntas, o HOME, a área de trabalho e o botão de parada de emergência de hardware. Certifique-se de que os caminhos da pose atual até HOME e de volta ao zero estejam desobstruídos.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>Selecionar a câmera e o preset de baixa velocidade</h4>
    <p className="rebot-step-label">Step 2</p>

Selecione a câmera na página web. Na primeira execução, use **Low-Speed Validation** (低速验证) e **Keep Gripper Position** (保持当前位置). O preset de baixa velocidade define os ganhos de seguimento e horizontal para 1.5 e limita a velocidade do efetuador final a 0,10 m/s. Essas configurações se aplicam apenas à execução atual e não são gravadas nos arquivos de configuração.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
  <div className="rebot-step-content">
    <h4>Inicializar o robô real</h4>
    <p className="rebot-step-label">Step 3</p>

Clique em **Initialize Real Robot** (初始化真机). O programa assume o controle da câmera, habilita o braço e o move para HOME. Observe o movimento real; quando HOME for alcançado, o braço aguardará um comando de início.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
  <div className="rebot-step-content">
    <h4>Iniciar o seguimento da palma</h4>
    <p className="rebot-step-label">Step 4</p>

Pressione `R`, clique em **Start Following** (开始跟随) ou mantenha a palma aberta por 3 segundos para iniciar. Mova a mão lentamente para verificar a direção e a amplitude reais do movimento. Se **Pinch Control** (捏合控制) estiver selecionado, una o polegar e o dedo indicador para controlar o gripper enquanto o seguimento estiver habilitado.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
  <div className="rebot-step-content">
    <h4>Pausar e sair</h4>
    <p className="rebot-step-label">Step 5</p>

Pressione Espaço para pausar. Clique em **Exit and Return to Zero** (退出并回零), ou pressione `Q` / `Esc`, para solicitar que o programa pare de seguir, retorne ao zero e desabilite os motores. Um pedido de saída durante a inicialização é processado após a inicialização terminar; use a parada de emergência de hardware em caso de emergência.

  </div>
</section>
</div>

Quando a palma é perdida brevemente, o programa pode extrapolar por um tempo limitado; após uma perda mais longa, ele mantém a posição. O movimento pode ser retomado automaticamente quando a mão for detectada novamente. Depois que um bloqueio de proteção por feedback ou por mesa de trabalho pausar o sistema, pressione `R` ou clique no controle de retomada manualmente. O modelo web e a exibição do gripper podem mostrar comandos ou estimativas e não devem ser usados como evidência de segurança da posição real. Consulte o [web guide](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md) para detalhes de operação e proteção.

## Configuração e Solução de Problemas

| Sintoma | O que verificar |
| --- | --- |
| A visualização da câmera funciona, mas a inicialização falha | Verifique o modelo de câmera selecionado, o URDF, o CAN, o HOME, as posições zero das juntas e a mensagem de erro da página. |
| A direção ou posição do seguimento está errada | Pause imediatamente e verifique a orientação física da câmera, a transformação câmera-braço, o URDF e as posições zero das juntas. Não mascare o problema aumentando a velocidade. |
| A mão ou a profundidade não são detectadas | Verifique a iluminação, se a mão está no campo de visão, a imagem de profundidade e as conexões do dispositivo; evite oclusão. |
| O braço não responde ou uma proteção o pausa | Verifique se outro programa está usando CAN, o feedback do dispositivo e as mensagens da página. Não ignore a proteção de feedback. |

`config/follow.yaml` controla a distância de seguimento, ganhos, velocidade e parâmetros da área de trabalho. Quando Gemini 336 é selecionado sem uma configuração personalizada, `config/follow_gemini336.yaml` também é aplicado. `config/grasp.yaml` mapeia o gesto de pinça para o gripper. Veja as opções de linha de comando com:

```bash
.venv-arm/bin/python palm_follow_grasp.py --help
```

:::warning
`--no-arm` é a opção somente visão. `--no-gripper` e `--no-follow` ainda se conectam ao braço. Verifique novamente a configuração e valide em baixa velocidade após alterar a configuração ou o hardware.
:::

## Recursos

- [Repositório do projeto e README mais recente](https://github.com/Yang-Ci/reBot_RS_Camera-Follow)
- [Operação web e fontes de dados](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md)
- [Manual de calibração, controle e diagnóstico](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/docs/技术手册.md)
- [Recursos incluídos e suas fontes](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md)
