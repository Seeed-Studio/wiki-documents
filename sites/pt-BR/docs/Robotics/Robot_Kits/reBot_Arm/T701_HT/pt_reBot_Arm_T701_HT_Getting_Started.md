---
title: Início Rápido do reBot Arm T701 HT
sidebar_label: Início Rápido
description: Desembale e monte o reBot Arm T701 HT, instale o SDK no Ubuntu, verifique o retorno das juntas, defina as posições de zero e execute os demos.
keywords:
  - reBot
  - T701 HT
  - OpenArm-HT-A1
  - Bimanual Robot
  - Python SDK
slug: /rebot_t701_ht_getting_started
translation:
  skip: [zh-CN]
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Início Rápido do reBot Arm T701 HT

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="Star reBot Arm T701 on GitHub"
/>

## Introdução ao Projeto

O reBot Arm T701 é uma plataforma robótica bimanual open-source da Seeed Studio para IA Física, aprendizado de robôs e coleta de dados no mundo real. Ele se baseia no design open-source do reBot Arm B601 e oferece aos desenvolvedores uma única plataforma para coletar dados e estudar tarefas coordenadas de dois braços.

- **Configuração bimanual.** Dois braços de 7 DOF são montados em um único torso. Motores com barramento CAN acionam as juntas, e cada braço possui sua própria garra.
- **Visão e computação de borda.** A plataforma possui pontos de fixação para câmeras de pulso RealSense D405, uma câmera de cabeça D435 e um módulo de computação NVIDIA Jetson Orin. **A versão Basic não inclui câmeras.**
- **Recursos open-source.** Arquivos CAD, lista de materiais (BOM), guias de montagem e software são lançados em etapas de acordo com o roteiro do projeto.

## Aviso de Segurança e Notificação de Risco

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm safety disclaimer and risk notice in Chinese" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm safety disclaimer and risk notice in English" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## Desembale e Monte o Robô

### Verifique o Conteúdo da Embalagem

Abra a maleta de transporte e confira as peças do robô e os fixadores em comparação com a lista de embalagem.

:::note[A versão Basic não inclui câmeras]
Consulte a lista de embalagem para o conteúdo da sua remessa.
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="Open carrying case showing both arms, the torso column, the covers, and the cameras in the pictured configuration" loading="lazy" />
</div>

### Monte Ambos os Braços na Coluna do Torso

1. Retire a coluna do torso e o braço direito. Alinhe os quatro furos de montagem circulados em vermelho em ambas as fotos.
2. Prenda o braço direito à coluna usando quatro dos **parafusos M6** fornecidos.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Furos de montagem na coluna do torso</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="Four mounting holes circled in red on the side of the torso column" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Furos correspondentes na placa de montagem do braço direito</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="Four mounting holes circled in red on the right arm's metal mounting plate" loading="lazy" />
  </figure>
</div>

Depois que o braço direito estiver fixado, verifique como ele se encaixa na coluna, de cima e de lado.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Braço direito montado, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="Top view of the right arm mounting plate and upper screws" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Braço direito montado, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="Side view of the right arm mounting plate and lower screws" loading="lazy" />
  </figure>
</div>

Com a alimentação desconectada, conecte o **chicote de cabos XT30 2+2** que se estende do lado da coluna do torso ao conector do braço direito mostrado abaixo. Monte e conecte o braço esquerdo da mesma forma no outro lado da coluna.

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="Routing of the XT30 2+2 cable harness from the torso column to the arm connector" loading="lazy" />
</div>

### Instale as Capas dos Ombros

1. Encaixe as metades superior e inferior de cada capa verde ao redor do ombro.
2. Insira os **parafusos M3 médios-curtos** fornecidos nas posições circuladas em vermelho. Use quatro parafusos por lado, oito no total.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Metades superior e inferior de uma capa de ombro</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="Two green semicircular shoulder cover pieces" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Capa de ombro instalada</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="Red box marking the position of the assembled green shoulder cover" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posições dos parafusos da capa de ombro, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="Two shoulder cover screws circled in red in the top view" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posição do parafuso da capa de ombro, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="Shoulder cover screw circled in red in the side view" loading="lazy" />
  </figure>
</div>

### Instale a Capa do Torso

1. Depois que ambas as capas de ombro estiverem fixadas, encaixe a capa do torso e passe os cabos laterais pelos recortes correspondentes. Se o seu robô tiver a câmera **RealSense D435i** mostrada abaixo, alinhe-a com a abertura na capa frontal. **A versão Basic não inclui câmeras.**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>Abertura da câmera na capa frontal (a versão Basic não inclui câmeras)</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="Red box marking where the D435i aligns with the opening in the front cover" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>Recorte lateral para cabos</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="Red circle marking the cable cutout on the side of the torso cover" loading="lazy" />
     </figure>
   </div>

2. Fixe a capa do torso inserindo os quatro **parafusos M3 mais longos fornecidos** nos furos circulados em vermelho na parte de trás.

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="Four screw positions circled in red on the rear torso cover" loading="lazy" />
   </div>

{/* - **TODO** Add instructions for securing the base and installing the grippers separately. */}

## Conecte o Robô

:::warning
Desconecte a alimentação antes de fazer a fiação. Antes de ligar o robô, certifique-se de que ele esteja firmemente montado e mantenha livre todo o alcance de movimento de ambos os braços.
:::

1. Conecte a fonte de alimentação conforme mostrado abaixo.
2. Pressione o botão de energia redondo para ligar o robô.
3. Conecte o computador à porta USB-C da placa principal com um cabo de dados USB.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Conexão de energia</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="Power connector and cable at the base of the T701 HT" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Botão de energia redondo e porta USB-C da placa principal</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="Round power button next to the mainboard and a USB data cable plugged into the USB-C port" loading="lazy" />
  </figure>
</div>

## Calibre e Execute o Robô com o SDK T701-HT

### Instale o SDK

:::info[Plataformas Suportadas para a Biblioteca de Motores]

O SDK inclui os seguintes wheels `hightorque_robot` pré-compilados em `motor_whl/`.

| Plataforma | Versão da biblioteca de motores | Versões do CPython |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

O exemplo de instalação abaixo usa **Ubuntu 22.04 (x86_64) e Python 3.10**. Para outra combinação na tabela, escolha o arquivo `.whl` que corresponda à sua arquitetura e versão do Python e, em seguida, execute a verificação de ambiente abaixo.

:::

Abra um terminal no diretório raiz do SDK, que contém `motor_whl/`, `requirements.txt` e `scripts/`. Execute os comandos do SDK abaixo a partir desse diretório.

Se você não tiver o Conda, instale o Miniforge.

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

Siga as instruções para inicializar o Conda. Abra um novo terminal e volte para o diretório raiz do SDK. Crie o ambiente e, em seguida, instale o SDK e suas dependências.

```bash
conda create -n t701-ht python=3.10 pip
conda activate t701-ht
python -I -m pip install ./motor_whl/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
python -I -m pip install -r requirements.txt
```

Execute o seguinte comando para verificar se o Python consegue importar as dependências e carregar o modelo URDF. Você pode executar essa verificação com o robô desconectado.

```bash
python -I -c "import hightorque_robot, numpy, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

### Verificar a conexão serial

1. **Liste as portas seriais.** Conecte o robô e, em seguida, execute o seguinte comando em um terminal.

   ```bash
   ls -l /dev/ttyACM*
   ```

2. **Verifique as portas seriais de ambos os braços.** Execute o script de verificação.

   ```bash
   python scripts/t701_ht_read_state.py --arm both --check
   ```

   O script verifica o seguinte.

   - Ordem de enumeração das portas seriais
   - Identificadores USB da placa de comunicação
   - Permissões de leitura e escrita da porta serial

:::tip[Verificar um único braço]

Substitua `--arm both` pelo argumento do braço que você deseja verificar.

| Braço | Argumento | Porta serial padrão | ID serial do SDK |
| --- | --- | --- | --- |
| Braço esquerdo | `--arm left` | `/dev/ttyACM0` | `serial_id=1` |
| Braço direito | `--arm right` | `/dev/ttyACM1` | `serial_id=2` |

:::

**Erros de permissão da porta serial**

Se o script relatar um erro de permissão, o seguinte comando do guia do SDK concede temporariamente a todos os usuários locais acesso de leitura e escrita às portas seriais especificadas. Ao verificar um braço, especifique apenas a porta dele.

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1
```

Execute novamente a verificação da porta serial após conceder o acesso. Reconectar o dispositivo ou reiniciar o sistema redefine essas permissões.

### Ler o estado das juntas e do gripper

Depois que a verificação serial for concluída com êxito, leia uma amostra de ambos os braços. Verifique se todas as sete juntas e o gripper de cada braço retornam feedback. O script informa posição da junta (rad), velocidade (rad/s) e torque (N·m), e posição (rad) e velocidade (rad/s) do gripper.

```bash
python scripts/t701_ht_read_state.py --arm both --once
```

Para leituras contínuas, execute o seguinte comando e insira `1` para o braço esquerdo, `2` para o braço direito ou `3` para ambos. Pressione `Ctrl+C` para sair.

```bash
python scripts/t701_ht_read_state.py
```

### Definir posições zero

- **TODO** Adicionar as posições zero padrão e diagramas de calibração para as juntas e grippers de ambos os braços. Esclarecer se robôs calibrados de fábrica precisam ser recalibrados.

Após confirmar as posições zero padrão, mova as juntas e o gripper do braço selecionado para essas posições. O comando abaixo seleciona o braço esquerdo. Substitua `left` por `right` ou `both` para selecionar o braço direito ou ambos os braços. Inserir `yes` grava as posições atuais como as novas posições zero e sobrescreve os valores armazenados.

```bash
python scripts/t701_ht_set_zero.py --arm left
```

### Executar os demos

:::warning
Antes de executar um demo, verifique as posições zero das juntas, remova qualquer carga e desobstrua a área de movimento dos braços. Comece com um braço e dê suporte a ele ao iniciar e parar o demo. Nos demos de impedância de junta, o braço selecionado se move em direção à pose alvo definida no script.
:::

Em qualquer um dos três demos, insira `1` para o braço esquerdo, `2` para o braço direito ou `3` para ambos. Você também pode especificar `--arm left`, `--arm right` ou `--arm both` na linha de comando. Pressione `Ctrl+C` para sair e enviar comandos de parada para os braços e grippers selecionados.

#### Compensação de gravidade

O demo aplica 0,8 vezes o torque de gravidade calculado para a pose atual como torque de feedforward, tornando o braço mais fácil de mover manualmente.

```bash
python scripts/t701_ht_gravity_compensation.py
```

#### Impedância de junta com feedforward de gravidade

```bash
python scripts/t701_ht_joint_impedance_with_gravity.py
```

#### Impedância de junta com feedforward de gravidade e compensação de atrito

```bash
python scripts/t701_ht_joint_impedance_with_gravity_friction.py
```

## Solução de problemas

- **Nenhuma porta serial encontrada.** Verifique se o robô está ligado e se o cabo de dados USB está conectado à porta USB-C da placa principal. Execute `ls -l /dev/ttyACM*` novamente.
- **A enumeração da porta serial não corresponde à configuração.** Verifique o caminho padrão do dispositivo para o braço selecionado e se há outros dispositivos seriais USB conectados.
