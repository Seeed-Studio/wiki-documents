---
title: Início Rápido do reBot Arm T701 HT
sidebar_label: Início Rápido
description: Desembale e monte o reBot Arm T701 HT, instale o SDK no Ubuntu, verifique o retorno das juntas, defina as posições de zero e execute as demonstrações.
keywords:
  - reBot
  - T701 HT
  - OpenArm-HT-A1
  - Bimanual Robot
  - Python SDK
slug: /rebot_t701_ht_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 11/18/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Início Rápido do reBot Arm T701 HT

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="Robô bimanual reBot Arm T701 HT" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="Dar estrela ao reBot Arm T701 no GitHub"
/>

## Introdução ao Projeto

O reBot Arm T701 é uma plataforma robótica bimanual open-source da Seeed Studio para IA Física, aprendizado de robôs e coleta de dados no mundo real. Ele se baseia no design open-source do reBot Arm B601 e oferece aos desenvolvedores uma plataforma única para coletar dados e estudar tarefas coordenadas de dois braços.

- **Configuração bimanual.** Dois braços de 7 DOF são montados em um único torso. Motores em barramento CAN acionam as juntas, e cada braço possui sua própria garra.
- **Visão e computação de borda.** A plataforma possui pontos de fixação para câmeras de pulso RealSense D405, uma câmera de cabeça D435 e um módulo de computação NVIDIA Jetson Orin. **A versão Basic não inclui câmeras.**
- **Recursos open-source.** Arquivos CAD, lista de materiais (BOM), guias de montagem e software são lançados em etapas de acordo com o roteiro do projeto.

## Aviso de Segurança e Notificação de Risco

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="Aviso de segurança e notificação de risco do reBot Arm em chinês" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="Aviso de segurança e notificação de risco do reBot Arm em inglês" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## Desembale e Monte o Robô

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Verifique o Conteúdo da Embalagem

Abra a maleta e confira as peças do robô e os fixadores em comparação com a lista de embalagem.

:::note[A versão Basic não inclui câmeras]
Consulte a lista de embalagem para o conteúdo do seu envio.
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="Maleta aberta mostrando ambos os braços, a coluna do torso, as coberturas e as câmeras na configuração ilustrada" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Monte Ambos os Braços na Coluna do Torso

1. Retire a coluna do torso e o braço direito. Alinhe os quatro furos de montagem circulados em vermelho em ambas as fotos.
2. Prenda o braço direito à coluna usando quatro dos **parafusos M6** fornecidos.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Furos de montagem na coluna do torso</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="Quatro furos de montagem circulados em vermelho na lateral da coluna do torso" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Furos correspondentes na placa de montagem do braço direito</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="Quatro furos de montagem circulados em vermelho na placa metálica de montagem do braço direito" loading="lazy" />
  </figure>
</div>

Depois que o braço direito estiver fixado, verifique como ele se encaixa na coluna pela parte de cima e pela lateral.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Braço direito montado, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="Vista superior da placa de montagem do braço direito e dos parafusos superiores" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Braço direito montado, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="Vista lateral da placa de montagem do braço direito e dos parafusos inferiores" loading="lazy" />
  </figure>
</div>

Com a alimentação desconectada, conecte o **chicote de cabos XT30 2+2** que se estende do lado da coluna do torso ao conector do braço direito mostrado abaixo. Monte e conecte o braço esquerdo da mesma forma no outro lado da coluna.

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="Roteamento do chicote de cabos XT30 2+2 da coluna do torso até o conector do braço" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### Instale as Coberturas dos Ombros

1. Encaixe as metades superior e inferior de cada cobertura verde ao redor do ombro.
2. Insira os **parafusos M3 médios-curtos** fornecidos nas posições circuladas em vermelho. Use quatro parafusos por lado, oito no total.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Metades superior e inferior de uma cobertura de ombro</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="Duas peças verdes semicirculares de cobertura de ombro" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Cobertura de ombro instalada</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="Caixa vermelha marcando a posição da cobertura de ombro verde montada" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posições dos parafusos da cobertura de ombro, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="Dois parafusos da cobertura de ombro circulados em vermelho na vista superior" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posição do parafuso da cobertura de ombro, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="Parafuso da cobertura de ombro circulado em vermelho na vista lateral" loading="lazy" />
  </figure>
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### Instale a Cobertura do Torso

1. Depois que ambas as coberturas dos ombros estiverem fixadas, encaixe a cobertura do torso e passe os cabos laterais pelos recortes correspondentes. Se o seu robô tiver a câmera **RealSense D435i** mostrada abaixo, alinhe-a com a abertura na cobertura frontal. **A versão Basic não inclui câmeras.**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>Abertura da câmera na cobertura frontal (a versão Basic não inclui câmeras)</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="Caixa vermelha marcando onde a D435i se alinha com a abertura na cobertura frontal" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>Recorte para cabo lateral</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="Círculo vermelho marcando o recorte de cabo na lateral da cobertura do torso" loading="lazy" />
     </figure>
   </div>

2. Fixe a cobertura do torso inserindo os quatro **parafusos M3 mais longos fornecidos** nos furos circulados em vermelho na parte de trás.

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="Quatro posições de parafusos circuladas em vermelho na cobertura traseira do torso" loading="lazy" />
   </div>

  </div>
</div>

</div>

{/* - **TODO** Add instructions for securing the base and installing the grippers separately. */}

## Conecte o Robô

:::warning
Desconecte a alimentação antes da fiação. Antes de ligar o robô, certifique-se de que ele esteja firmemente montado e mantenha livre todo o alcance de movimento de ambos os braços.
:::

1. Conecte a fonte de alimentação conforme mostrado abaixo.
2. Pressione o botão de energia redondo para ligar o robô.
3. Conecte o computador à porta USB-C da placa principal com um cabo de dados USB.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Conexão de energia</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="Conector de energia e cabo na base do T701 HT" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Botão de energia redondo e porta USB-C da placa principal</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="Botão de energia redondo ao lado da placa principal e um cabo de dados USB conectado à porta USB-C" loading="lazy" />
  </figure>
</div>

## Calibre e Execute o Robô com o SDK T701-HT

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Instalar o SDK

:::info[Plataformas compatíveis com a biblioteca de motores]

O SDK inclui os seguintes wheels `hightorque_robot` pré-compilados em `motor_whl/`.

| Plataforma | Versão da biblioteca de motores | Versões do CPython |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

O exemplo de instalação abaixo usa **Ubuntu 22.04 (x86_64) e Python 3.10**. Para outra combinação da tabela, escolha o arquivo `.whl` que corresponda à sua arquitetura e versão do Python e, em seguida, execute a verificação de ambiente abaixo.

:::

Clone o [repositório do T701-HT SDK](https://github.com/Seeed-Projects/reBot-Arm-T701-SDK) e entre no diretório raiz do SDK.

```bash
git clone https://github.com/Seeed-Projects/reBot-Arm-T701-SDK.git
cd reBot-Arm-T701-SDK
```

Execute os comandos do SDK abaixo a partir deste diretório, a menos que seja indicado o contrário.

Se você não tiver o Conda, instale o Miniforge.

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

Siga as instruções para inicializar o Conda. Abra um novo terminal e volte ao diretório raiz do SDK. Crie o ambiente e, em seguida, instale o SDK e suas dependências.

```bash
conda create -n t701-ht python=3.10 pip
conda activate t701-ht
python -I -m pip install ./motor_whl/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
python -I -m pip install -r requirements.txt
```

Execute o seguinte comando para verificar se o Python consegue importar as dependências e carregar o modelo URDF. Você pode executar essa verificação com o robô desconectado.

```bash
python -I -c "import hightorque_robot, numpy, osqp, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Verificar a conexão serial

O braço esquerdo se conecta ao CAN1 e o braço direito ao CAN2. Defina `board_serial` em `T701-HT_robot_param/serial_binding.yaml` do SDK para o número de série USB da sua placa de comunicação. O SDK usa a identidade USB da placa para encontrar os dispositivos seriais atuais na inicialização.

Execute os seguintes comandos para verificar o mapeamento de ambos os braços sem abrir as portas seriais. Para verificar apenas um braço, passe somente o arquivo YAML correspondente.

```bash
ls -l /dev/serial/by-id/
python scripts/t701_ht_can_serial_adapter.py T701-HT_robot_param/T701-HT_left.yaml T701-HT_robot_param/T701-HT_right.yaml
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### Ler o estado das juntas e do gripper

Execute o script e digite `1` para o braço esquerdo, `2` para o braço direito ou `3` para ambos. Confirme que todas as sete juntas e o gripper de cada braço selecionado fornecem feedback. Pressione `Ctrl+C` para sair.

```bash
python scripts/t701_ht_read_state.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### Definir posições de zero

<div align="center">
  <img width={520} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-zero-pose.png" alt="T701-HT zero pose" loading="lazy" />
</div>

Inicie o script e selecione o braço. Mova as juntas e o gripper para as posições de zero desejadas e, em seguida, selecione `3` no menu de operação para substituir as posições de zero armazenadas do braço selecionado pela pose atual. Selecione `4` para mover para a posição de zero salva ou `0` para sair.

```bash
python scripts/t701_ht_set_zero.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">

### Executar os demos

:::warning[Antes de executar os demos]
Verifique as posições de zero das juntas, remova qualquer carga e deixe livre a área de movimento dos braços. Comece com um braço na primeira execução. Dê suporte ao braço ao iniciar e parar o demo de compensação de gravidade.
:::

Entre no diretório `scripts`. Após iniciar um demo, digite `1` para o braço esquerdo, `2` para o braço direito ou `3` para ambos.

```bash
cd scripts
```

#### Compensação de gravidade

O demo aplica `0.8 × G(q)` como torque feedforward do MIT para tornar o braço mais fácil de mover manualmente. Os ganhos `Kp` e `Kd` das juntas e o torque do gripper são zero.

```bash
python t701_ht_gravity_compensation.py
```

#### Impedância de junta

:::warning[Antes de iniciar um demo de impedância de junta]
**Certifique-se de que a área ao redor do robô e dentro da faixa de movimento dos braços esteja livre de pessoas e objetos frágeis antes de iniciar qualquer um dos demos.** O braço selecionado se move em direção a uma pose fixa assim que o demo é iniciado.
:::

O alvo do braço esquerdo é aproximadamente `[-0.2, -0.2, 0.2, -0.4, 0.5, 0.2, 1.4708]` rad. O alvo do braço direito inverte o sinal de cada ângulo de junta.

**Impedância de junta com feedforward de gravidade**

```bash
python t701_ht_joint_impedance_with_gravity.py
```

**Impedância de junta com feedforward de gravidade e compensação de atrito**

```bash
python t701_ht_joint_impedance_with_gravity_friction.py
```

Todos os três demos aplicam os limites de torque de junta configurados. Pressione `Ctrl+C` para parar a compensação de gravidade ou para retornar os braços à posição de zero antes de encerrar um demo de impedância de junta. Durante o retorno, pressione `Ctrl+C` novamente para parar os braços.

Para controle de cinco parâmetros de motor único, feedback de estado e desligamento com retorno à posição de zero, consulte o [MIT Control SDK](https://wiki.seeedstudio.com/pt-br/rebot_t701_ht_control_mit/).

Consulte [T701 HT com Pinocchio](https://wiki.seeedstudio.com/pt-br/rebot_t701_ht_pinocchio/) para verificações de cinemática direta e inversa, trajetórias cartesianas e exemplos de controle por teclado.

  </div>
</div>

</div>

## Solução de problemas

- **Nenhuma porta serial encontrada.** Confirme que o robô está ligado e que o cabo de dados USB está conectado à porta USB-C da placa principal e, em seguida, execute `ls -l /dev/serial/by-id/` novamente.
- **Interface USB correspondente ausente.** Verifique se `board_serial` corresponde à placa conectada e se o braço esquerdo usa CAN1 e o braço direito usa CAN2.
- **Permissão negada.** No Ubuntu, verifique se o seu usuário tem acesso de leitura e escrita ao dispositivo serial por meio do grupo `dialout`.
