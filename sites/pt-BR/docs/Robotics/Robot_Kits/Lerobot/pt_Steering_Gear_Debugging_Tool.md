---
description: "Como depurar servos SO-ARM com a ferramenta Seeed_RoboController: detectar servos, corrigir IDs, gravar valores neutros e ler o status no Windows, Ubuntu e Mac."
title: Ferramenta de Depuração SO-Arm
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
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ferramenta de Depuração de Engrenagem de Direção para SO-ARM no LeRobot

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="Kits de braço robótico SO-ARM100 e SO-ARM101"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Obtenha o Kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center"><strong>Plataformas compatíveis</strong> · Windows / Ubuntu / macOS</p>

## Introdução

A Ferramenta de Depuração de Engrenagem de Direção (Seeed_RoboController) é uma ferramenta gráfica de depuração para braços robóticos SO-ARM no LeRobot. Com esta ferramenta, você pode detectar rapidamente o status dos servos, recalibrar IDs de servos, gravar valores neutros, controlar servos individuais e gerenciar arquivos de calibração do braço robótico, facilitando a montagem, depuração e manutenção dos braços líder e seguidor.

## 1. Instalação

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

<h4>Clone o repositório</h4>

<p className="rebot-step-label">Passo 1</p>

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

<h4>Instale as dependências</h4>

<p className="rebot-step-label">Passo 2</p>

Instale as dependências no seu ambiente virtual LeRobot existente. Para uma instalação independente, crie um novo ambiente virtual para evitar afetar o Python do sistema.

```bash
pip install -r requirements.txt
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

<h4>Verifique o ambiente</h4>

<p className="rebot-step-label">Passo 3</p>

```bash
python setup.py
```

Se retornar [OK] Environment check passed, o projeto está pronto para ser executado.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

<h4>Inicie a ferramenta</h4>

<p className="rebot-step-label">Passo 4</p>

<Tabs defaultValue="interactive">
<TabItem value="interactive" label="Seleção interativa de porta">

Selecione as portas seriais na interface após a inicialização.

```bash
python -m src.gui.factory_calibration_tool
```

</TabItem>
<TabItem value="manual" label="Especificar portas manualmente">

Se as portas estiverem ocupadas, você pode especificá-las manualmente. O comando abaixo usa caminhos de dispositivo Linux como exemplo.

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</TabItem>
</Tabs>

</div>
</section>

</div>

## 2. Primeiros Passos (Aplicável ao Braço Líder e ao Braço Seguidor)

Comece verificando a detecção dos servos. Continue para os dois próximos passos apenas se você ainda suspeitar de IDs de servos duplicados após verificar a fiação e a porta serial.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Verificar se os servos estão normais {#1-verificar-se-os-servos-estão-normais}

<p className="rebot-step-label">Passo 1</p>

Selecione a porta no seletor de porta serial. A verificação de detecção é aprovada se a ferramenta reconhecer os servos 1–6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

Se um servo estiver ausente, verifique sua fiação, depois feche e reabra a ferramenta. Se ele ainda não aparecer, verifique se há IDs de servos duplicados. Por exemplo, executar o comando de calibração de servo por engano pode alterar os IDs dos servos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Remover os chicotes de fios dos servos {#2-remover-os-chicotes-de-fios-dos-servos}

<p className="rebot-step-label">Passo 2</p>

Primeiro remova o chicote de fios de conexão entre o servo 6 e o servo 5.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

Em seguida, remova o chicote de fios de conexão entre o servo 5 e o servo 4.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 4 e o servo 3.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 3 e o servo 2.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 2 e o servo 1.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

Remova o chicote de fios de conexão entre o servo 1 e a placa de controle.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Recalibrar IDs dos servos {#3-recalibrar-ids-dos-servos}

<p className="rebot-step-label">Passo 3</p>

:::caution Grave IDs de servos um de cada vez
Conecte apenas um servo ao barramento serial ao gravar seu ID. Por exemplo, alterar o ID 4 para 6 altera todos os servos com ID 4 nesse barramento.
:::

Conecte o servo 6 diretamente à placa controladora, como mostrado. Use o mesmo método para outros servos sem desmontar o braço.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

Se o servo conectado for o servo 6, mas a ferramenta mostrar apenas o ID 4, altere o ID desse servo de volta para 6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

Selecione o ID 4 na interface e altere-o para 6. Verifique e corrija os servos restantes um de cada vez.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

Reconecte os chicotes de fios dos servos um de cada vez após corrigir os IDs.

</div>
</section>

</div>

### Gravar o valor neutro no servo {#4-gravar-o-valor-neutro-no-servo}

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1. Clique em **Serial Port Neutral Test** e compare a posição do braço com a imagem acima. Se elas corresponderem aproximadamente, o valor neutro está correto.
2. Se não corresponderem, mova o braço para a posição neutra e clique em **Serial Port Neutral Calibration** para salvar a posição atual como o valor neutro do servo.
3. Sustente o braço antes de clicar em **Serial Port Disable Motors**. Os servos perderão o torque de sustentação.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### Controle de servo único {#5-controle-de-servo-único}

A interface mostra cada servo em sua posição neutra por padrão.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

#### Ajustar a posição de um servo

1. Ative o torque para o servo selecionado ou use o controle que ativa o torque para todos os servos.
2. Mova lentamente o controle deslizante do servo selecionado e observe a movimentação da junta correspondente.

:::caution Atenção aos limites mecânicos
A estrutura do braço limita o curso das juntas. Mova o controle deslizante lentamente e evite configurá-lo em 0 ou em seu valor máximo. Sustente o braço antes de desativar o torque.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" />
</div>

Você também pode calibrar a posição neutra de um servo individual ou limpar suas posições armazenadas de neutro, mínimo e máximo.

#### Campos de status do servo

| Campo | Significado |
| --- | --- |
| `Pos` | Posição |
| `V` | Tensão |
| `T` | Temperatura |
| `Spd` | Velocidade |
| `Load` | Torque |
| `Cur` | Corrente |
| `Mov` | Status de movimento |
| `Model` | Modelo e permissões |
| `Status` | Normal, Overcurrent ou Overload |

### Ferramentas avançadas {#6-ferramentas-avançadas}

| Ferramenta | Finalidade |
| --- | --- |
| Leitura/gravação de registrador | Ler ou gravar dados em um endereço de registrador especificado. |
| Alterar taxa de baud | Ajustar a taxa de comunicação serial do servo. |
| Restaurar configurações de fábrica | Redefinir o servo para suas configurações de fábrica. |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>
