---
description: Este guia ajudará você a começar com o reBot Arm B601-DM, incluindo opções de compra, montagem, calibração e configuração de software.
title: Início Rápido do reBot Arm B601-DM
keywords:
  - reBot
  - B601-DM
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_b601_dm_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Começando com o reBot Arm B601-DM

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço robótico 6-DOF · Suporte a múltiplos motores · Solucionador de cinemática · Planejamento de trajetória · Totalmente open source</strong>
</p>

O conteúdo deste guia está chegando até você na velocidade da luz — fique ligado!

O projeto reBot Arm foi disponibilizado como open source no [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Este guia levará você pelo início rápido do B601-DM, da montagem à operação.

:::tip
Se você comprou um kit pré-montado, pule diretamente para o vídeo tutorial no **Passo 3** no final deste artigo e siga as instruções. Não é necessário gravar IDs dos motores nem calibrar as posições de zero.

Foi verificado que o desempenho de máquinas virtuais é insuficiente para executar os demos e há problemas de configuração. Recomenda-se usar uma máquina física com Ubuntu para controlar o braço robótico.
:::

## Opções de compra

O reBot Arm B601-DM está disponível em várias configurações para atender a diferentes necessidades de usuários.

### Comparação das opções

| Configuração | Corpo | Garra | Motores | Estrutura | Link de compra |
|:---|:---:|:---:|:---:|:---:|:---|
| **Kit completo** | ✅ | ✅ | ✅ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **Apenas garra** | ❌ | ✅ | ❌ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |
| **Apenas corpo (estrutura)** | ✅ | ❌ | ❌ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **Apenas corpo (motores)** | ✅ | ❌ | ✅ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |


## Aviso de segurança e comunicado de risco

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## Sobre a fonte de alimentação

1. O braço robótico não é enviado com fonte de alimentação / não inclui fonte de alimentação por padrão. Você pode conectar uma bateria por conta própria ou comprar nossa [fonte de alimentação MeanWell 24V 14,6A open source](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html) ou pela [Amazon](https://www.amazon.com/MEAN-WELL-LRS-350-24-350-4W-Switchable/dp/B013ETVO12/ref=sr_1_1?crid=36B2HIB8MM2IT&dib=eyJ2IjoiMSJ9.vpZwmjb4m5KMNcsg2Kb7wr8DDWa-ryUqO5fConlxqlsGoTVB5HN2uBBnRNZI0kcACiaR5DKFiYWvIHLEUN3luZqJAzogeQkeT-fol0m835-oBBWSud1ixkGayrl5nRsF5KMgfvkwAIW949dTTpU2CWdNMrf8g43_vKWaytfX9SHeMJ1hmhS6Kab6fBgER6CgB47K_eEmoJj3KhrjJMtn980osDG-bCLniBcRAHThmXsVRVdpGPsmckGLLyaXrIGRG9plhKI-F7H8hfqW7vzGbwIV_bF8cFtRjdRm5Shtb0o.ekLYD0hsc1Uzji4qKl0Q0USpDTr92JEMQobBXl9lYD0&dib_tag=se&keywords=LRS-350-24&qid=1780021690&s=industrial&sprefix=lrs-350-24%2Cindustrial%2C696&sr=1-1&th=1). Não compre fontes de alimentação de fabricantes sem marca ou canais inseguros. Quaisquer riscos ou consequências decorrentes disso serão de responsabilidade do próprio usuário.

Se a tensão da sua residência for 220V, ajuste a chave seletora de tensão na lateral da fonte para 230V. Se a tensão da sua residência for 110V, ajuste para 115V.

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |

   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" />
   </div>

2. Como alternativa, você pode escolher nosso gabinete open source para fonte de alimentação MeanWell 24V 14,6A para montagem própria. As instruções em texto e a BOM estão em open source no [repositório GitHub](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_DM) (recomendado apenas para desenvolvedores com experiência relevante em montagem de fontes de alimentação).

   Vídeo de referência de montagem:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>



## Passo 1: [Guia de montagem](https://youtu.be/rfTQoFCfnMc)

Antes da montagem:

- Leia atentamente as instruções a seguir para garantir um processo de montagem tranquilo.
  1. Este kit inclui vários parafusos e peças com aparência semelhante. Verifique as especificações e a orientação antes de apertar.
  2. O vídeo foi gravado no início de abril. Podem existir pequenas atualizações, mas a montagem permanece a mesma. Considere as peças enviadas como referência final.
  3. Os parafusos enviados possuem trava-rosca aplicada. Use ferramentas adequadas ou uma parafusadeira elétrica (recomendado). Ajuste o torque para (3–6 kgf·cm) para evitar espanar. Se ocorrer espanamento, pare imediatamente e substitua ou realinhe o parafuso. Parafusos com trava-rosca espanados são difíceis de remover e podem danificar as peças.
  4. Garanta a segurança durante a montagem. Evite beliscões ou ferimentos. Crianças devem estar sob supervisão.

  :::tip
  Lembrete: o D4 * 7 entre o motor 5 e o motor 6 no vídeo de montagem não precisa ser instalado. Isso é um erro no vídeo. Se você comprou a versão DIY do reBot Arm B601-DM, os 7 parafusos D4 * 7 são suficientes para concluir a montagem.
  :::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Vídeo tutorial de fiação:

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/vVxCOfu5ZCE" title="reBot-B601-DM Wiring" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Passo 2: Redefinir IDs dos motores

:::tip
Ao montar o braço robótico, não se esqueça de conectar o chicote de cabos entre o Motor 1 e o Motor 2. A posição exata está destacada na imagem abaixo. Antes de alternar a conexão do cabo de 3 pinos, certifique-se de que o motor atual esteja desativado e a alimentação desconectada para evitar hot-plug ou operação incorreta que possa causar parâmetros anormais no motor.

<div align="center">
    <img width={200}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1to2_ID_set.jpg" />
</div>
:::

### AGENTE de IA

:::tip
Esta seção está em versão beta. Observe as precauções de segurança durante o uso. Se as sugestões da IA forem diferentes desta documentação, siga este guia e peça ajuda aos nossos engenheiros.
:::

Deixe um AGENTE de IA ajudar você neste processo. Copie o prompt abaixo para o seu assistente de IA:

```text

Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.

```

### Antes de redefinir os motores:

  Antes da configuração dos parâmetros dos motores, observe as seguintes preparações e regras de segurança:

- Compre 2 grampos de fixação (≥3 polegadas) e uma fonte de alimentação chaveada 24V 15A com saída XT30 (use marca confiável, sem produtos de baixa qualidade).
- Mantenha distância ≥1 m durante a depuração/operação.
- Não faça hot-plug dos motores; corte a alimentação antes de conectar/desconectar a interface XT30 2+2.
- Não sobrecarregue/não exceda a velocidade; verifique a fiação e os fixadores antes da partida; evite ambientes úmidos/de alta temperatura/empoeirados.
- Defina parâmetros de programa razoáveis e parada de emergência para evitar perda de controle.
- **Siga rigorosamente estas regras. O vendedor não é responsável por riscos/responsabilidades decorrentes de operação ilegal ou erros pessoais.**

### Lista de preparação

#### Hardware

- [Braço robótico reBot Arm B601 DM × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [Placa adaptadora USB-CAN × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [Placa de separação de sinal e alimentação × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- Grampos de marcenaria × 2
- Cabo USB-C × 1
- [Fonte de alimentação 24V 15A (saída XT30) × 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [Cabo de alimentação - US](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \  [Cabo de alimentação - EU](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### Requisito do computador

- Computador pessoal com dual boot (Windows + Ubuntu / macOS)

#### Software

- [Link para download do software](https://github.com/dmBots/motor-debugging-tool)


#### Gravar ID do motor e testar Enable

Defina o CAN ID e o Master ID para cada motor de junta de acordo com os parâmetros na tabela abaixo:

| Número do Motor | ID CAN | ID Master |
|:---:|:---:|:---:|
| Motor 1 | 0x01 | 0x11 |
| Motor 2 | 0x02 | 0x12 |
| Motor 3 | 0x03 | 0x13 |
| Motor 4 | 0x04 | 0x14 |
| Motor 5 | 0x05 | 0x15 |
| Motor 6 | 0x06 | 0x16 |
| Motor 7 | 0x07 | 0x17 |

:::danger
A seguir está um exemplo de operação usando o Motor 1. Certifique-se de que o CAN ID e o Master ID de cada motor de junta estejam configurados corretamente de acordo com a tabela acima.
:::
1.Abra o software host **DM_Tools**, selecione a porta USB COM correspondente e defina a taxa de baud para `921600`. Após a conexão bem-sucedida, as informações serão exibidas na interface `Serial`.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_damiao_tool_en.png" width="800" />
</div>

2.Use o cabo de 3 pinos para conectar o Motor 1 à placa adaptadora USB-CAN.

3.Após a conexão, entre na interface `Parameter Settings`. Clique em `Read Parameters` para ler os parâmetros atuais e, em seguida, defina o `CAN ID` para `0x01` e o `Master ID` para `0x11`.

4.Após a configuração, clique em `Write Parameters` para salvar os parâmetros.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_damiao_tool_en.png" width="800" />
</div>

:::tip
O modo USB na caixa laranja à esquerda representa o método usado ao ler e escrever parâmetros do motor na página de configurações atual.
:::

5.Navegue até a interface `Debug`. Depois de garantir que o `CAN ID` e o `Master ID` estejam configurados corretamente, clique em `Enable`. O indicador do motor ficará verde fixo, indicando que o motor está habilitado. O teste do Motor 1 está concluído.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_damiao_tool_en.png" width="800" />
</div>

:::tip
Após o teste, lembre-se de clicar em `Disable` para sair do estado habilitado.
:::

**Pontos de Conexão do Cabo de 3 Pinos e Efeito de Habilitação de Cada Motor**

| Configuração do Motor 1 | Configuração do Motor 2 | Configuração do Motor 3 | Configuração do Motor 4 | Configuração do Motor 5 | Configuração do Motor 6 | Configuração do Motor 7 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" width="120" /> |

| Motor 1 Habilitado | Motor 2 Habilitado | Motor 3 Habilitado | Motor 4 Habilitado | Motor 5 Habilitado | Motor 6 Habilitado | Motor 7 Habilitado |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" width="120" /> |

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Etapa 3: Calibração do reBot Arm e Primeiros Passos

Confiamos que você concluiu a montagem do braço robótico, a inicialização do ponto zero, a configuração do ID dos motores e outras etapas de preparação seguindo o vídeo. Agora você está pronto para explorar oficialmente a série de tutoriais e ferramentas que lançamos.


Consulte o vídeo e o tutorial em texto. Antes de controlar o braço robótico, você precisa redefinir o ponto zero novamente.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

1. Explore nossa plataforma **MotorBridge**, uma solução tudo-em-um que oferece suporte a uma lista crescente de motores, incluindo [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow e mais. Ela também é compatível com braços robóticos continuamente atualizados, como o reBot. Projetada para iniciantes, também oferecemos um SDK em Python que implementa a mesma funcionalidade para desenvolvedores.

2. Experimente novos recursos e detalhes do MotorBridge para o braço robótico reBot, incluindo configuração de ponto zero com um clique, gravação de parâmetros, controle de motor via arrastar e soltar na interface gráfica e uma interface integrada de visualização de modelo.

3. Esta ferramenta é totalmente compatível com os sistemas operacionais **Windows, Ubuntu e Mac**.

### Etapa 1: Instalar o Miniforge (no Windows\Ubuntu\macOS\Jetson\Pi)

Instale o Miniforge e crie um ambiente virtual para evitar interferência de outros pacotes de ambiente.

Ubuntu\Jetson\Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

ou macOS:
```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

ou Windows:

Abra a página de Release do Miniforge no seu navegador, encontre o `Miniforge3-Windows-x86_64.exe` mais recente e faça o download:

```text
https://github.com/conda-forge/miniforge/releases
```

### Etapa 2: Configuração do Ambiente

Crie um ambiente virtual com Python 3.12:

```
conda create -y -n rebot python=3.12
```

Em seguida, ative seu ambiente virtual; você precisa fazer isso sempre que abrir um shell para usar o rebot:

```bash
conda activate rebot
```

### Etapa 3: Instalar o motorbridge

:::tip

**Observação para usuários de macOS:**
Se você tiver taxas de quadros baixas durante a teleoperação no macOS, isso pode ser causado por um driver WCH CH34x desatualizado. Para **macOS 10.14 e versões posteriores**, o sistema inclui um driver `AppleUSBCHC0M` integrado. Você pode desinstalar o driver antigo e mudar para o driver integrado do macOS, o que deve melhorar efetivamente as taxas de quadros.

:::

Após ativar o ambiente virtual do reBot, execute o seguinte comando para instalar o motorbridge:

```bash
pip install motorbridge
```

###  Etapa 4: Conectar o rebot
Depois de conectar o braço robótico ao seu computador por meio de um cabo USB e ligar sua fonte de alimentação, você precisa configurar permissões de acesso 666 para a porta serial. (Sistemas Windows não exigem configuração de permissões; você pode pular esta etapa.)

```bash
sudo chmod 666 /dev/ttyACM*
```

### Etapa 5: Abrir o motorbridge

Abra `https://motorbridge.github.io/motorbridge-studio/` no seu navegador, depois clique em help, copie o comando adequado para o seu sistema e placa controladora, verifique o IP e a porta e, em seguida, pressione Enter no terminal.

Por exemplo, no Windows:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>

## FAQ
### 1. Ruído anormal alto ocorre imediatamente após a inicialização do motor
- Esse problema geralmente ocorre quando a calibração de parâmetros é acionada acidentalmente durante a configuração do ID, o que sobrescreve parâmetros predefinidos de fábrica, como a inércia do motor. Use **DM_Tools_v.1.8.0.1.exe (apenas para Windows)** disponível em:
https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe
Exporte os parâmetros completos de um motor intacto do mesmo modelo por meio do software host, importe esses parâmetros para a unidade com falha, atualize o respectivo CAN ID, salve os parâmetros gravados e, em seguida, prossiga com a calibração do ponto zero.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" />
</div>

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" />
</div>

[Parâmetros Padrão DM4310](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt)
[Parâmetros Padrão DM4340P](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt)

### 2. Todos os motores compartilham IDs CAN idênticos
- Ao realizar a calibração do ponto zero usando **DM_Tools_v.1.8.0.1.exe (apenas para Windows)**, evite clicar nos botões Read ou Set ao lado do campo CAN ID. A interface de depuração se comunica pelo barramento CAN; clicar em Set unificará o CAN ID de todos os motores conectados ao CANBUS.
