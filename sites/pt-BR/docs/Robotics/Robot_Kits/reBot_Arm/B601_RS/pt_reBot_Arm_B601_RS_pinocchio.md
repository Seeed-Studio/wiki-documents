---
description: Este tutorial apresenta como usar Pinocchio e MeshCat para análise de cinemática e visualização no braço robótico reBot Arm B601-RS.
title: B601-RS com Pinocchio
keywords:
  - Pinocchio
  - MeshCat
  - Braço robótico
  - Robô
  - LeRobot
  - Cinemática
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-07-22
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-06-11'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/
---

import '/src/css/rebot-wiki-style.css';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-RS Pinocchio & MeshCat

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
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
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço robótico de 6 DOF · Suporte a múltiplos motores · Solucionador de cinemática · Planejamento de trajetória · Totalmente open source</strong>
</p>

<p align="center">
  <a href="https://github.com/stack-of-tasks/pinocchio">Pinocchio</a> é uma biblioteca open source para análise e otimização de dinâmica de robôs. Ela fornece cinemática direta/inversa eficiente, cálculo de dinâmica e planejamento de trajetória.
</p>

<p align="center">
  <a href="https://github.com/rdeits/meshcat">MeshCat</a> é uma ferramenta de visualização 3D baseada na web que pode exibir estados do robô e trajetórias de movimento em tempo real.
</p>

Este projeto combina os poderosos recursos de computação do Pinocchio com a visualização intuitiva do MeshCat, fornecendo um conjunto completo de ferramentas de análise e depuração de cinemática para o reBot Arm B601-RS.

<GitHubStarButton owner="Seeed-Projects" repo="reBotArm_control_py" />

---

## Recursos do Projeto

1. **Análise de Cinemática Completa**
   Suporta cálculos de cinemática direta (FK) e inversa (IK), permitindo a solução em tempo real da pose do efetuador final do braço robótico.

2. **Visualização 3D em Tempo Real**
   Exibe o estado do braço robótico e as trajetórias de movimento no navegador por meio do MeshCat em tempo real, sem software adicional.

3. **Planejamento e Rastreamento de Trajetória**
   Implementa planejamento de trajetória geodésica em SE(3), com suporte a controle de rastreamento CLIK (Closed-Loop Inverse Kinematics).

4. **Controle com Compensação de Gravidade**
   Calcula os torques de gravidade das juntas com base no modelo dinâmico do Pinocchio, alcançando um efeito de “flutuação” para o braço robótico. Suporta versões básica e com trava de velocidade do efetuador final.

5. **Controle de Motor em Múltiplos Modos**
   Suporta modos de controle MIT, POS_VEL e VEL, compatível com os protocolos de motor Damiao e Robostride.

6. **Open Source e Extensível**
   Todo o código é open source, permitindo que os usuários personalizem algoritmos de controle e efeitos de visualização conforme suas necessidades.

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/)

| Parâmetro | Especificação |
| ----------- | -------------- |
| Modelo do braço robótico | reBot Arm B601-RS Assembled Kit with Gripper |
| Graus de liberdade | 6+1 (com garra) |
| Alcance | 754,7 mm (com garra) / 587,5 mm (sem garra) |
| Capacidade de carga | Carga nominal 2,5 kg / Carga máxima 5 kg |
| Faixa de movimento das juntas | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Garra: 345° ~ 0° |
| Repetibilidade | 0,1 mm |
| Peso próprio | 6,7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 |
| Comunicação | Barramento CAN @ 1 Mbps |
| Tensão de operação | DC 48V |
| Fonte de alimentação | DC 48V 15A |
| Temperatura de operação | -20°C ~ 50°C |
| Método de controle | PC |

### Plataformas de Software Suportadas

| Plataforma | Status de suporte |
| ---------- | --------------- |
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### Parâmetros dos Motores das Juntas

| Parâmetro | RobStride 00 | RobStride 06 |
| ----------- | -------------- | -------------- |
| Tensão nominal | 48V | 48V |
| Corrente nominal | 4,7 Apk ± 10% | 14,3 Apk ± 10% |
| Corrente de pico | 15,5 Apk ± 10% | 57 Apk ± 10% |
| Torque nominal | 5 N.m | 11 N.m |
| Torque de pico | 14 N.m | 36 N.m |
| Velocidade nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidade máxima em vazio | 315 rpm ± 10% | 480 rpm ± 10% |
| Relação de redução | 10 : 1 | 9 : 1 |
| Pares de polos | 28 | — |
| Indutância do motor | 750 ± 20 μH | 0,165 mH ± 10% |
| Resistência de linha | 1,5 ± 10% Ω | 0,23 ± 10% Ω |
| Diâmetro externo | 57 mm | 82 mm |
| Altura | 51 ± 1 mm | 49 ± 0,5 mm |
| Peso do motor | 310 g ± 3 g | 621 g |
| Resolução do encoder | 14 bit (absoluto de volta única) | |
| Contagem do encoder | 2 | |
| Tipo de encoder | Encoder magnético (volta única) | |
| Interface de controle | CAN @ 1 Mbps | |
| Interface de depuração | UART @ 921600 bps | |
| Modos de controle | MIT Mode / Speed Mode / Position Mode / Torque Mode | |
| Proteção | Proteção contra superaquecimento: temperatura do termistor do motor excede 145°C<br />Proteção contra subtensão: tensão do motor abaixo da tensão de proteção de 12V | |

## Lista de Materiais (BOM)

| Componente | Quantidade | Incluído |
| ----------- | ---------- | ---------- |
| Braço robótico reBot Arm B601-RS | 1 | ✅ |
| CANABLE | 1 | ✅ |
| Adaptador de energia (DC 48V 15A) | 1 | ✅ |
| Cabo USB-C | 1 | ✅ |
| Garra | 1 | ✅ |

## Requisitos de Ambiente

:::caution Pré-requisito — Conclua primeiro o Guia de Início Rápido do braço
Antes de prosseguir com este tutorial, você **deve** concluir o documento **[reBot Arm B601-RS Quick Start](/pt-br/rebot_b601_rs_getting_started)** de ponta a ponta, incluindo:

- Desembalagem do hardware, fiação e checklist de energização
- Ativação do canal CAN (`can0` @ 1 Mbps) e permissão do dispositivo (`sudo chmod 666 /dev/can0`)
- Calibração de zero de todas as juntas (`2_zero_and_read.py`) e verificação de que o braço pode ser comandado nos modos MIT / POS_VEL

Este tutorial assume que o braço já responde no barramento CAN, que as juntas estão zeradas e que o operador está familiarizado com os limites de segurança (permaneça dentro de **70% do espaço de trabalho de alcance do braço**). Pular o Guia de Início Rápido pode levar a motores mal configurados, juntas travadas ou queda do braço.
:::

| Item | Requisito |
| ------ | ------------- |
| **Python** | 3.10+ |
| **Sistema operacional** | Ubuntu (Ubuntu 24.04 LTS recomendado) |
| **Interface de comunicação** | Interface CAN (can0) |
| **Fonte de alimentação** | DC 48V 15A |

:::caution
Enquanto o braço robótico estiver executando exemplos, ele deve operar dentro de 70% do espaço de trabalho de alcance do braço. Permanecer fora do espaço de trabalho por um período prolongado fará com que o motor da segunda junta entre em proteção de travamento, resultando na queda do braço.
:::

---

## Etapas de Instalação

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Instalar uv (se não estiver instalado)</h4>
<p className="rebot-step-label">Etapa 1</p>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Após a instalação, execute o seguinte comando para verificar se `uv` está disponível:

```bash
uv --version
```

Se a instalação tiver sido bem-sucedida, você deverá ver uma saída semelhante à seguinte (a versão e a plataforma podem ser diferentes):

```text
uv 0.11.31 (x86_64-unknown-linux-gnu)
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Sincronizar o ambiente (instalar todas as dependências)</h4>
<p className="rebot-step-label">Etapa 2</p>

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` criará automaticamente um ambiente virtual (se ele não existir) e instalará todas as dependências com base em `pyproject.toml` e `uv.lock`.
:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Alternar para a configuração de hardware RS</h4>
<p className="rebot-step-label">Etapa 3</p>

Este Wiki é para **reBot Arm B601-RS**. Antes de executar quaisquer exemplos, altere a configuração de hardware em `config/rebotarm.yaml` da versão DM para a versão RS:

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
Se essa configuração não for modificada, o programa se comunicará usando o protocolo de motor Damiao, fazendo com que os motores RS não sejam reconhecidos ou não funcionem corretamente.
:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Configurar o canal CAN</h4>
<p className="rebot-step-label">Etapa 4</p>

:::tip Configuração do canal CAN
Antes de executar exemplos de controle em máquina real e depurar motores, você precisa configurar o canal CAN (para PCAN-USB, é necessário configurar novamente após reconectar):

```bash
# PCAN-USB should usually appear directly as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 
sudo ip link set can0 up    # Bring up can0
```

:::

<details>
<summary>Ferramentas de depuração (usar apenas quando ocorrer uma exceção)</summary>

**Console de motor único — Robostride RS06 (`0x01rs06_test.py`)**

Use diretamente o SDK do motorbridge para teste de motor único Robostride RS06. Os motores RS06 se comunicam via **barramento CAN**.

**Comando de execução**:

```bash
uv run python example/0x01rs06_test.py
```

**Comandos interativos**:

| Comando | Descrição |
| --------- | ------------- |
| `enable` / `disable` | Ativar/Desativar |
| `set_zero` | Definir posição zero por software |
| `state` | Ver estado atual |
| `ping` | Enviar ping ao motor para obter resposta |
| `clear_error` | Limpar erros do motor |
| `mode <mit/posvel/vel>` | Alternar modo de controle |
| `mit <pos> [vel] [kp] [kd]` | Comando de modo MIT |
| `posvel <pos> [vlim]` | Comando de modo POS_VEL |
| `vel <velocity>` | Comando de modo somente velocidade |
| `read_param <id> [type]` | Ler parâmetros do motor |
| `write_param <id> <value> [type]` | Gravar parâmetros do motor |
| `loop` | Entrar no modo de controle em loop |
| `q` / `quit` | Sair |

**Nota**: Os motores Robostride usam a interface CAN (padrão `can0`), com ID de host/feedback padrão `0xFD`. Durante o teste do motor, é necessário desativar o motor primeiro e depois reativá-lo para permitir leitura e controle normais.

---

**Calibração de zero e monitoramento de ângulo (`2_zero_and_read.py`)**

Define automaticamente todas as posições zero das juntas e exibe os ângulos das juntas em tempo real.

**Comando de execução**:

```bash
uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

</div>
</section>
</div>

---

## Ajuste de parâmetros do controlador MIT / POS_VEL {#tune-controller-params}

Esta seção explica **como modificar** os parâmetros do controlador para cada junta do braço nos modos **MIT** e **POS_VEL**, e como fazer com que as alterações entrem em vigor.

:::tip Esta seção cobre apenas "onde / como alterar", não "que valor usar"
Parâmetros adequados só podem ser obtidos por meio de **ajuste direto no hardware**. Esta seção cobre apenas: onde os parâmetros estão, o que cada campo controla e como fazer com que as alterações sejam efetivadas e verificadas. Para estratégias específicas de ajuste (por exemplo, tentativa e erro, Ziegler‑Nichols), consulte referências gerais de controle de motores.
:::

### Localização do arquivo de configuração

| Versão de hardware | Arquivo de configuração do motor | Entrada de seleção |
| --- | --- | --- |
| **reBot Arm B601-RS** (este documento) | `config/rebotarm_rs.yaml` | Defina `hardware_yaml: "rebotarm_rs.yaml"` em `config/rebotarm.yaml` |
| **reBot Arm B601-DM** | `config/rebotarm_dm.yaml` | Defina `hardware_yaml: "rebotarm_dm.yaml"` em `config/rebotarm.yaml` |

:::caution Não edite `rebotarm.yaml` diretamente
Esse arquivo contém apenas uma única linha `hardware_yaml: ...`; todos os parâmetros do motor estão em `rebotarm_rs.yaml` / `rebotarm_dm.yaml`.
:::

### Estrutura do arquivo de configuração

Cada junta tem sua própria entrada, agrupada por **modo de controle**:

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0xFD
    model: "rs-06"
    vendor: "robstride"
    MIT:
      kp: 50.0
      kd: 3.0
    POS_VEL:
      vel_kp: 12.0
      vel_ki: 0.1
      pos_kp: 13.0
      vlim: 10.0
  # ... joint2 ~ joint6 follow the same structure ...
```

Como localizar:

- **Pelo nome da junta**: para modificar uma junta, encontre o bloco `- name: jointX`;
- **Pelo modo**: dentro dessa junta, `MIT:` contém os parâmetros do modo MIT, `POS_VEL:` contém os parâmetros do modo POS_VEL;
- **O modo atual determina qual conjunto é enviado**: o script alterna modos via `mode mit` / `mode posvel`; o motor na verdade recebe os parâmetros sob o sub-bloco correspondente.

### Significado dos campos no modo MIT

| Campo | Função |
| --- | --- |
| `kp` | Ganho proporcional do loop de posição: a "rigidez" do rastreamento da posição alvo. |
| `kd` | Ganho de amortecimento do loop de velocidade: suprime oscilações causadas pelo erro de posição. |

### Significado dos campos no modo POS_VEL

| Campo | Função |
| --- | --- |
| `vel_kp` | Ganho proporcional do loop de velocidade. |
| `vel_ki` | Ganho integral do loop de velocidade. |
| `pos_kp` | Ganho proporcional do loop de posição (funciona com `vlim` para controle híbrido posição‑velocidade). |
| `vlim` | Limite de velocidade, restringe a velocidade máxima de movimento. |

:::warning As definições de campos diferem entre fornecedores
Os motores Damiao (DM) e Robostride (RS) usam unidades diferentes na camada de protocolo, portanto **o mesmo nome de campo não é comparável entre fornecedores**. Modificar `vel_kp` de RS e modificar `vel_kp` de DM significam coisas diferentes. Interprete cada YAML de acordo com sua própria ordem de campos, não compare valores entre arquivos de configuração.
:::

:::caution Limite o escopo de teste antes de fazer o ajuste
Grandes alterações de `kp` / `kd` em várias juntas podem causar oscilação imediata, sobrecorrente ou colisões em batentes mecânicos se qualquer direção ou sinal de junta estiver incorreto. Antes de ajustar, limpe o espaço de trabalho do braço e planeje testar **uma junta e um modo por vez, em pequenos passos**.
:::

### Procedimento de edição

1. **Pare qualquer script em execução**. O motor está ativado quando você edita o YAML, as alterações não entram em vigor imediatamente e é fácil gerar comportamento inconsistente.
2. **Edite o arquivo YAML correspondente**:

   ```bash
   # Example for RS
   vim config/rebotarm_rs.yaml
   ```

   - Altere apenas a junta que você precisa ajustar (por exemplo, `joint1`); deixe as juntas não relacionadas como estão;
   - Dentro de uma junta, altere apenas o modo que você precisa ajustar (MIT ou POS_VEL); não modifique os campos do outro modo sem motivo.
3. **Preserve a indentação YAML**: 2 espaços por nível, chaves separadas dos valores por `:`. Indentação incorreta faz com que o `yaml.safe_load` falhe na análise e todos os parâmetros voltem aos padrões.
4. **Reinicie o script após salvar**. O YAML é lido uma vez na inicialização do script; **edições em tempo de execução não entram em vigor imediatamente**.
5. **Verificação em junta única**: use um script como demo3 (MIT) / demo4 (POS_VEL) para verificar a alteração com um **pequeno movimento de junta única** antes de fazer um teste com o braço completo.

### Verificando se a alteração entrou em vigor

- **Observação em tempo de execução**: ative o motor no demo3 / demo4 e verifique `state`; se os parâmetros parecerem inalterados ou o motor se comportar exatamente como antes, o YAML foi editado incorretamente ou foi sobrescrito pelos padrões.
- **Auto-verificação do YAML**: faça o parse diretamente com Python e imprima os campos de uma junta para confirmar que os valores correspondem ao que você acabou de escrever:

  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_rs.yaml'))['joints'][0])"
  ```

- **Reversão rápida**: `git checkout config/rebotarm_rs.yaml` restaura os padrões do repositório.

---

## Testes básicos de controle

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Controle completo das juntas em modo MIT</h4>
<p className="rebot-step-label">Demo 3 · 3_mit_control.py</p>

Todas as juntas usam o modo MIT de forma uniforme, enviando comandos de controle de forma síncrona a cada ciclo.

**Entrada**: Todos os ângulos das juntas (graus), separados por espaço. Se o gripper estiver configurado, é necessário um ângulo adicional para o gripper.

:::danger Opcional — Este exemplo não possui planejamento de trajetória suave
Este exemplo envia ângulos alvo das juntas diretamente para os motores, sem **planejamento de trajetória ou velocidade**. Uma grande mudança no alvo pode causar movimento repentino em alta velocidade e acionar a proteção contra sobrecorrente.

- Este exemplo não é obrigatório para concluir o tutorial. Se o seu objetivo é um movimento seguro e suave do braço, **pule este exemplo** e vá diretamente para [Controle de trajetória suave com IK (`8_arm_traj_control.py`)](#demo8-traj-control);
- Execute-o apenas quando precisar verificar o controle de junta em baixo nível no modo MIT. Comece movendo uma junta em apenas 5–10 graus, depois aumente a mudança gradualmente após confirmar a resposta e a direção;
- Limpe o espaço de trabalho do braço antes de executar e certifique-se de que você pode cortar a alimentação imediatamente.
:::

<details className="rebot-demo-details">
<summary>Mostrar instruções de execução (opcional)</summary>

**Comando de execução**:

```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Controle completo das juntas em modo POS_VEL (opcional)</h4>
<p className="rebot-step-label">Demo 4 · 4_pos_vel_control.py</p>

:::warning Opcional — Movimento suave não é garantido com os parâmetros padrão
Este exemplo atualiza diretamente o alvo de posição de cada junta e não inclui planejamento de trajetória completo. No **reBot Arm B601-RS**, o modo POS_VEL (Posição‑Velocidade) também requer **ajuste de parâmetros separado** para bons resultados; seus parâmetros padrão são geralmente menos suaves do que um modo MIT devidamente ajustado.

Este exemplo não é obrigatório para concluir o tutorial. A menos que você precise especificamente depurar o modo POS_VEL, **pule este exemplo** e vá diretamente para [Controle de trajetória suave com IK (`8_arm_traj_control.py`)](#demo8-traj-control). Se você o executar, use apenas pequenas mudanças de alvo e mantenha pessoas e equipamentos fora do espaço de trabalho do braço.
:::

Insira ângulos alvo para todas as juntas para controlar os motores no modo híbrido POS_VEL (Posição‑Velocidade). Quando ajustado corretamente, esse modo pode limitar a velocidade usada para atingir um ângulo alvo; o próprio exemplo não fornece planejamento de trajetória suave completo.

<details className="rebot-demo-details">
<summary>Mostrar instruções de execução (opcional)</summary>

**Comando de execução**:

```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>
</div>

## Testes de cinemática

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Teste de cinemática direta</h4>
<p className="rebot-step-label">Demo 5 · 5_fk_test.py</p>

Calcular a pose do efetuador final com base nos ângulos das juntas.

**Entrada**: 6 ângulos de juntas (graus)

**Saída**:

- Posição do efetuador final (X, Y, Z) — unidade: metros
- Matriz de rotação (3×3)
- Ângulos de Euler (rolagem/tangagem/giro) — unidade: graus

**Exemplo**:

```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Teste de Cinemática Inversa</h4>
<p className="rebot-step-label">Demo 6 · 6_ik_test.py</p>

Resolver os ângulos das juntas com base na pose desejada do efetuador final.

**Formato de entrada**:

- Somente posição: `<x> <y> <z>` (metros)
- Posição + orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)

**Exemplo**:

```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + orientation
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>Controle de Cinemática Inversa em Modo MIT (Opcional)</h4>
<p className="rebot-step-label">Demo 7 · 7_arm_ik_control.py</p>

Use cinemática inversa (IK) no modo MIT para especificar as coordenadas 3D (X, Y, Z) e a orientação (ângulos de Euler) para onde o efetuador final do braço robótico deve se mover.

**Formato de entrada**:

- Somente posição: `<x> <y> <z>` (metros)
- Posição + orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Entrada `state`: visualizar os valores atuais em radianos de cada junta.
- Entrada `end_state`: visualizar as coordenadas atuais do efetuador final (m) e os ângulos de Euler (rad) no espaço.

:::danger Opcional — Este exemplo não possui planejamento de trajetória suave
Este exemplo envia a solução de IK diretamente como alvo das juntas, **sem planejamento de trajetória ou velocidade**. Uma grande mudança na pose alvo pode causar movimento repentino em alta velocidade e acionar a proteção contra sobrecorrente.

- Este exemplo não é obrigatório para concluir o tutorial. Na maioria dos casos, **ignore este exemplo** e use a próxima seção, [Controle de IK com Trajetória Suave (`8_arm_traj_control.py`)](#demo8-traj-control), que inclui planejamento de aceleração/desaceleração de mínimo tranco;
- Execute-o apenas quando precisar comparar ou depurar o controle de IK sem planejamento de trajetória. Mantenha o primeiro alvo dentro de 5–10 cm da posição atual do efetuador final;
- Antes de executar, confirme que a pose alvo é alcançável, limpe a área de trabalho de pessoas e obstáculos e certifique-se de que você pode cortar a alimentação imediatamente.
:::

<details className="rebot-demo-details">
<summary>Mostrar instruções de execução (Opcional)</summary>

**Comando de execução**:

```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--recommended">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4 id="demo8-traj-control">Controle de Cinemática Inversa com Trajetória Suave (Recomendado)</h4>
<p className="rebot-step-label">Demo 8 · 8_arm_traj_control.py</p>

Use cinemática inversa (IK) no modo MIT para planejar automaticamente uma trajetória de movimento com aceleração/desaceleração uniforme ou suave dentro do tempo alvo, evitando vibração severa das juntas.

**Formato de entrada**:

- Somente posição: `<x> <y> <z>` (metros)
- Posição + orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)
- Posição + orientação + tempo (padrão 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (graus)
- Entrada `state`: visualizar os valores atuais em radianos de cada junta.
- Entrada `end_state`: visualizar as coordenadas atuais do efetuador final (m) e os ângulos de Euler (rad) no espaço.

**Comando de execução**:

```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Exit system
```

:::tip E se eu observar desvio de pose?
Se você notar que a **pose lida do efetuador final** difere da **pose alvo comandada**, e a **pose em si é alcançável** (não está fora da área de trabalho, nem em uma singularidade), o problema provavelmente está nos parâmetros do seu controlador MIT / POS_VEL. Nesse caso, consulte a seção anterior [Ajuste dos parâmetros do controlador MIT / POS_VEL](#tune-controller-params) e ajuste manualmente `kp` / `kd` etc. usando a abordagem de "uma junta por vez, modo por modo, pequenos passos"; depois de ajustado, retorne a este exemplo para verificar.
:::

</div>
</section>
</div>

## Testes de compensação de gravidade

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">9</span>
<div className="rebot-step-content">
<h4>Controle de compensação de gravidade — Versão básica</h4>
<p className="rebot-step-label">Demo 9 · 9_gravity_compensation.py</p>

Use o modelo dinâmico Pinocchio para compensar a gravidade das juntas.

**Lei de controle**:

```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamento esperado**:

- O braço robótico pode "flutuar" em qualquer pose
- Não cairá devido ao próprio peso após ser solto
- Pode ser movido manualmente para qualquer posição

:::caution Saída normal realiza um retorno seguro para a posição inicial
Quando você interrompe o script normalmente com `Ctrl+C`, ele primeiro para o controle de compensação de gravidade e mantém a pose atual com ganhos rígidos e alimentação antecipada de gravidade. Em seguida, retorna o braço para zero por meio de uma trajetória de mínimo tranco; somente após a conclusão do retorno à origem é que ele desconecta e desabilita os motores.

O retorno automático à origem depende da execução normal do programa, da comunicação e da alimentação. Mantenha pessoas e obstáculos fora da área de trabalho do braço e esteja pronto para sustentar o braço durante o retorno. Uma falha de comunicação, perda inesperada de energia ou término forçado pode impedir a conclusão da sequência de proteção; corte a alimentação imediatamente se ocorrer movimento anormal.
:::

**Comando de execução**:

```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:

- Exibir em tempo real o torque desejado para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::tip Ajustando a compensação de juntas individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação para evitar fazer alterações excessivamente grandes de uma só vez.
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">10</span>
<div className="rebot-step-content">
<h4>Controle de compensação de gravidade — Versão com trava de velocidade do efetuador final</h4>
<p className="rebot-step-label">Demo 10 · 10_gravity_compensation_lock.py</p>

Com base na compensação de gravidade básica, adiciona detecção de velocidade do efetuador final e mecanismo de trava de ângulo das juntas.

**Lei de controle**:

```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**Lógica de trava**:

- Quando a velocidade linear do efetuador `||v_ee|| < 0.04 m/s` e a velocidade angular `||w_ee|| < 0.08 rad/s`:
  - O ângulo alvo da junta `q_target` permanece travado
  - O braço robótico trava na posição atual
- Quando a velocidade do efetuador excede o limite:
  - `q_target` é atualizado para o ângulo atual da junta
  - Permite empurrar manualmente para mudar a posição

**Comportamento esperado**:

- O braço robótico trava na posição atual, exigindo força para mudar o ângulo alvo
- Mais estável que a versão básica, adequada para cenários que exigem manutenção de pose

:::caution Saída normal realiza um retorno seguro para a posição inicial
Quando você interrompe o script normalmente com `Ctrl+C`, ele primeiro para o controle de compensação de gravidade e mantém a pose atual com ganhos rígidos e alimentação antecipada de gravidade. Em seguida, retorna o braço para zero por meio de uma trajetória de mínimo tranco; somente após a conclusão do retorno à origem é que ele desconecta e desabilita os motores.

O retorno automático à origem depende da execução normal do programa, da comunicação e da alimentação. Mantenha pessoas e obstáculos fora da área de trabalho do braço e esteja pronto para sustentar o braço durante o retorno. Uma falha de comunicação, perda inesperada de energia ou término forçado pode impedir a conclusão da sequência de proteção; corte a alimentação imediatamente se ocorrer movimento anormal.
:::

**Comando de execução**:

```bash
uv run python example/10_gravity_compensation_lock.py
```

**Saída**:

- Exibir o status de trava em tempo real (LOCKED / UPDATE)
- Velocidade linear e velocidade angular do efetuador final
- Torque de compensação de gravidade para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

:::tip Ajustando a compensação de juntas individuais
Se algumas juntas estiverem subcompensadas ou supercompensadas devido a atrito estrutural ou diferenças de montagem, você pode aplicar uma escala adicional ao elemento correspondente do array `tau_g` no código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por exemplo, `tau_g[2] *= 1.2` significa aumentar o torque de compensação de gravidade da junta 2 em 20%. Recomenda-se ajustar item por item com base no efeito real de flutuação para evitar fazer alterações excessivamente grandes de uma só vez.
:::

**Configuração de teste de segurança**:
Você pode modificar a lista `ENABLED_JOINTS` no início do script para habilitar apenas juntas específicas para testes de segurança:

```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

</div>
</section>
</div>

---

## Ambiente de simulação

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/meshcat_RS.png" alt="Simulação MeshCat do reBot Arm B601-RS" />
</div>

:::tip Endereço do visualizador web MeshCat
Após iniciar uma simulação, o terminal imprime a URL real de acesso. O padrão é `http://127.0.0.1:7000/static/`; se a porta estiver ocupada, o MeshCat tenta automaticamente a próxima porta, então use a URL impressa no terminal.
:::

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S1</span>
<div className="rebot-step-content">
<h4>Simulação de cinemática direta</h4>
<p className="rebot-step-label">Demonstração de simulação 1 · sim/fk_sim.py</p>

Simulação interativa de cinemática direta, visualizando a pose do braço robótico no MeshCat ao inserir ângulos de junta.

**Comando de execução**:

```bash
uv run python example/sim/fk_sim.py
```

**Comandos interativos**:

- Inserir 6 ângulos de junta (graus), separados por espaço
- Exemplo: `0 0 0 0 0 0`
- Exemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Sair

**Recursos**:

- Exibir posição e orientação do efetuador final em tempo real
- Suportar entrada contínua para testar diferentes poses
- Gerar informações de pose formatadas

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S2</span>
<div className="rebot-step-content">
<h4>Simulação de cinemática inversa</h4>
<p className="rebot-step-label">Demonstração de simulação 2 · sim/ik_sim.py</p>

Simulação interativa de cinemática inversa, resolvendo automaticamente ângulos de junta e visualizando para uma pose alvo.

**Comando de execução**:

```bash
uv run python example/sim/ik_sim.py
```

**Formato de entrada**:

- Apenas posição: `x y z` (metros)
- Posição + orientação: `x y z roll pitch yaw` (radianos)

**Exemplo**:

```bash
> 0.25 0.0 0.25              # Position only
> 0.29545 0.0 0.28664 0 0.17453 0  # Position + orientation
```

**Recursos**:

- Determinar automaticamente se a CI converge
- Exibir contagem de iterações e erro
- Atualizar a pose do robô em tempo real

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S3</span>
<div className="rebot-step-content">
<h4>Simulação de planejamento de trajetória</h4>
<p className="rebot-step-label">Demonstração de simulação 3 · sim/traj_sim.py</p>

Simulação de planejamento de trajetória geodésica em SE(3), incluindo rastreamento CLIK e reprodução de animação no MeshCat.

**Comando de execução**:

```bash
uv run python example/sim/traj_sim.py
```

**Comandos interativos**:

- Entrada: `x y z [roll pitch yaw]` (metros/radianos)
- Pressione Enter diretamente para usar a configuração padrão
- `q`: Sair

**Recursos**:

- Planejar da posição atual até a pose alvo
- Usar perfil de trajetória de mínimo tranco (minimum jerk)
- Exibir estatísticas da trajetória em tempo real
- Reproduzir animação de toda a trajetória no MeshCat
- Exibir caminho de referência (cinza) e caminho real (verde)

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S4</span>
<div className="rebot-step-content">
<h4>Ferramenta de visualização</h4>
<p className="rebot-step-label">Demonstração de simulação 4 · sim/visualizer.py</p>

[LINE_126>Wrapper do visualizador MeshCat, fornecendo uma interface unificada de exibição do robô.

**Funções principais**:

- Carregar modelo URDF e exibir o robô
- Desenhar caminhos de polilinha 3D (referência/real)
- Exibir pose alvo de CI (eixos de três cores + esfera)
- Suportar reprodução de animação de trajetória de juntas

**Exemplo de uso**:

```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

</div>
</section>
</div>

---

## FAQ

- **Encontrar erro `Permission denied`**
  Certifique-se de executar `sudo chmod 666 /dev/ttyACM0` (Damiao) ou `sudo chmod 666 /dev/can0` (Robostride) para definir as permissões do dispositivo.

- **A solução de CI falha ou os resultados são anormais**
  Verifique se a pose alvo está dentro da área de trabalho do braço robótico e garanta que os limites das juntas estejam configurados corretamente.

- **O efeito da compensação de gravidade é ruim**
  Isso pode ser causado por erros estruturais e precisão de usinagem. A compensação de gravidade neste projeto depende de URDF e Pinocchio. Você pode tentar corrigir o URDF para os parâmetros que você realmente mediu (você pode pedir ajuda à IA para esta etapa).

- **Os motores Robostride não conseguem ler o status**
  Problemas de configuração de protocolo interno no motorbridge podem impedir que motores RS consultem status como os motores DM. Por favor, julgue com base nos efeitos reais de movimento ou tente usar o comando `ping` para confirmar a comunicação normal com o motor.

- **Como alternar entre as configurações de motor Damiao e Robostride**
  Modifique o arquivo de configuração `config/rebotarm_dm.yaml` (Damiao) ou `config/rebotarm_rs.yaml` (Robostride) e carregue a configuração correspondente no código.

- **Se o braço robótico permanecer parado além de 70% da área de alcance do braço por um longo período, o motor da segunda junta entrará em proteção contra travamento**  
  Desligue e ligue novamente o braço robótico; o erro de proteção contra travamento do motor da segunda junta será limpo automaticamente.

---

## Contato

- **Suporte técnico**: [Submit Issue](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **Repositório do projeto**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Documentos de referência

- [Documentação oficial do Pinocchio](https://stack-of-tasks.github.io/pinocchio/)
- [Documentação oficial do MeshCat](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---
