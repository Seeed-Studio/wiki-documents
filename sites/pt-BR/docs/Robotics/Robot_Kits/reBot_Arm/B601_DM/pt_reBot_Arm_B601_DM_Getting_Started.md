---
description: Este guia ajudará você a começar com o reBot Arm B601-DM, incluindo opções de compra, montagem, calibração e configuração de software.
title: Início Rápido do reBot Arm B601-DM
keywords:
  - reBot
  - B601-DM
  - Braço Robótico
  - Robô
  - Lerobot
  - Pinocchio
  - 6 DOF
# image:
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-04-13
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-04-13'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/
---

# Começando com o reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço Robótico de 6 DOF · Suporte a Múltiplos Motores · Solução de Cinemática · Planejamento de Trajetória · Totalmente Open Source</strong>
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

O conteúdo deste guia está chegando até você na velocidade da luz — fique ligado!

O projeto reBot Arm foi disponibilizado como open source no [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Este guia irá conduzi-lo pelo início rápido do B601-DM, desde a montagem até a operação.

## Opções de Compra

O reBot Arm B601-DM está disponível em várias configurações para atender às diferentes necessidades dos usuários.

### Comparação das Opções

| Configuração | Corpo | Garra | Motores | Estrutura | Link de Compra |
|:---|:---:|:---:|:---:|:---:|:---|
| **Kit Completo** | ✅ | ✅ | ✅ | ✅ | [Em breve](https://www.seeedstudio.com/) |
| **Apenas Garra** | ❌ | ✅ | ❌ | ❌ | [Em breve](https://www.seeedstudio.com/) |
| **Apenas Corpo (Estrutura)** | ✅ | ❌ | ❌ | ✅ | [Em breve](https://www.seeedstudio.com/) |
| **Apenas Corpo (Motores)** | ✅ | ❌ | ✅ | ❌ | [Em breve](https://www.seeedstudio.com/) |

## Etapa 1: [Guia de Montagem](https://youtu.be/rfTQoFCfnMc)

Antes da Montagem:
- Leia atentamente as instruções a seguir para garantir um processo de montagem tranquilo.
  1. Este kit inclui vários parafusos e peças com aparência semelhante. Verifique as especificações e a orientação antes de apertar.
  2. O vídeo foi gravado no início de abril. Podem existir pequenas atualizações, mas a montagem permanece a mesma. Considere as peças enviadas como versão final.
  3. Os parafusos enviados possuem trava química aplicada. Use ferramentas adequadas ou uma parafusadeira elétrica (recomendado). Ajuste o torque para (3–6 kgf·cm) para evitar espanar. Se ocorrer espanamento, pare imediatamente e substitua ou realinhe o parafuso. Parafusos com trava química espanados são difíceis de remover e podem danificar as peças.
  4. Garanta a segurança durante a montagem. Evite beliscões ou ferimentos. Crianças devem estar sob supervisão.


<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


##  Etapa 2: Redefinir ID dos Motores

### Antes de Redefinir os Motores:

  Antes da configuração dos parâmetros do motor, observe as seguintes preparações e regras de segurança:
- Compre 2 sargentos de fixação (≥3 polegadas) e uma fonte de alimentação chaveada de 24V 15A com saída XT30 (use marca confiável, não produtos de baixa qualidade).
- Mantenha distância ≥1 m durante a depuração/operação.
- Não faça conexão a quente dos motores; desligue a alimentação antes de conectar/desconectar a interface XT30 2+2.
- Não sobrecarregue/não exceda a velocidade; verifique a fiação e os fixadores antes da inicialização; evite ambientes úmidos/quentes/empoeirados.
- Defina parâmetros de programa razoáveis e parada de emergência para evitar perda de controle.
- **Siga rigorosamente estas regras. O vendedor não é responsável por riscos/responsabilidades decorrentes de operação ilegal ou erros pessoais.**

### Lista de Preparação
#### Hardware
- [Braço Robótico reBot Arm B601 DM × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [Placa Adaptadora USB-CAN × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [Placa de Separação de Sinal e Alimentação × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- Sargentos de marcenaria × 2
- Cabo USB-C × 1
- [Fonte de Alimentação 24V 15A (saída XT30) × 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [Cabo de Alimentação - US](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \  [Cabo de Alimentação - EU](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### Requisito de Computador
- Computador pessoal com dual-boot (Windows + Ubuntu / macOS)

#### Software
- [DM_Tools_v.1.8.0.1.exe (Suporta apenas Windows)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe)


<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Etapa 3: Calibrar o reBot Arm e Primeiros Passos

Confiamos que você concluiu a montagem do braço robótico, a inicialização do ponto zero, a configuração do ID dos motores e outras etapas de configuração seguindo o vídeo. Agora você está pronto para explorar oficialmente a série de tutoriais e ferramentas que lançamos.

1. Explore nossa plataforma **MotorBridge**, uma solução tudo-em-um que oferece suporte a uma lista crescente de motores, incluindo [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow e mais. Ela também é compatível com braços robóticos continuamente atualizados, como o reBot. Projetada para iniciantes, também oferecemos um SDK em Python que implementa a mesma funcionalidade para desenvolvedores.

2. Experimente novos recursos e detalhes do MotorBridge para o braço robótico reBot, incluindo configuração de ponto zero com um clique, gravação de parâmetros, controle de motor via arrastar-e-soltar na interface gráfica e uma interface integrada de visualização de modelo.

3. Esta ferramenta é totalmente compatível com os sistemas operacionais **Windows, Ubuntu e Mac**.

### Etapa 1: Instalar o miniforge (em Windows\Ubuntu\Mac\Jetson\Pi)

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

###  Etapa 2: Configuração do Ambiente

Crie um ambiente virtual com Python 3.12:
```
conda create -y -n rebot python=3.12
```

Em seguida, ative seu ambiente virtual; você deve fazer isso sempre que abrir um shell para usar o rebot:
```bash
conda activate rebot
```

###  Etapa 3: Instalar o motorbridge
Após ativar o ambiente virtual do reBot, execute o seguinte comando para instalar o motorbridge:
```bash
pip install motorbridge
```

###  Etapa 4: Conectar o rebot
Depois de conectar o braço robótico ao seu computador por meio de um cabo USB e ligar sua fonte de alimentação, você precisa configurar permissões de acesso 666 para a porta serial.

```bash
sudo chmod 666 /dev/ttyACM*
```

###  Etapa 5: Abrir o motorbridge
Abra `https://rebot-devarm.w0x7ce.eu/` no seu navegador, depois clique em help, copie o comando adequado para o seu sistema e placa controladora, verifique o IP e a porta e então pressione Enter no terminal. 

Por exemplo, no Windows:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>


#### Para as etapas de operação subsequentes, consulte nosso vídeo tutorial.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

