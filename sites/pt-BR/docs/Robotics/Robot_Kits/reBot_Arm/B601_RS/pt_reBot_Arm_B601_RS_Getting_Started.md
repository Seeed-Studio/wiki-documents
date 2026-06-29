---
description: Este guia ajudará você a começar com o reBot Arm B601-RS, incluindo opções de compra, montagem, calibração e configuração de software.
title: Início Rápido do reBot Arm B601-RS
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/
---

# Começando com o reBot Arm B601-RS

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
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
  <strong>Braço Robótico de 6 DOF · Suporte a Múltiplos Motores · Solução de Cinemática · Planejamento de Trajetória · Totalmente Open Source</strong>
</p>

O projeto reBot Arm foi disponibilizado como open source no [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Este guia irá conduzi-lo pelo início rápido do B601-RS, da montagem à operação.
O conteúdo deste guia está chegando até você à velocidade da luz — fique ligado.

## Etapa 1: Guia de Montagem

- Antes da montagem, leia atentamente as instruções a seguir. Para garantir um processo de montagem tranquilo e uma experiência prática completa, seja paciente, mantenha o foco e siga sempre estes pontos-chave:
  1. Este kit inclui numerosos parafusos e peças estruturais, alguns dos quais são semelhantes. Verifique cuidadosamente as especificações dos parafusos e os modelos das peças, e confirme a orientação de instalação antes de apertar.
  2. O vídeo foi gravado no início de abril. Pode haver pequenos ajustes nas peças posteriormente, mas isso não afeta a qualidade da montagem ao seguir o vídeo. As peças finais são as que acompanham o produto enviado.
  3. Para facilitar a instalação e remoção dos parafusos, a BOM open source especifica parafusos padrão. No entanto, os parafusos enviados com o kit têm trava química aplicada. Você também pode usar suas próprias ferramentas preferidas ou uma parafusadeira elétrica (altamente recomendado ter uma à mão). Se usar uma ferramenta elétrica, certifique-se de ajustar o torque para um nível baixo a médio (3–6 kgf·cm) para evitar torque excessivo que possa espanar os parafusos, causando danos irreversíveis em que as peças não podem ser removidas. Se houver qualquer sinal de espanamento, substitua imediatamente o parafuso ou realinhe e tente novamente. Parafusos com trava química espanados não podem ser removidos com extrator de parafusos e irão inutilizar toda a peça. Portanto, proceda com cautela.
  4. Priorize a segurança durante a montagem para evitar dedos presos ou lesões por esmagamento. Crianças devem concluir este projeto acompanhadas por um dos pais ou responsável.




## Etapa 2: Calibrar o Braço Robótico e Começar

1. Explore nossa plataforma **MotorBridge**. Esta plataforma é uma solução abrangente tudo-em-um que oferece expansão contínua dos tipos de motores, cobrindo [motores Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [motores Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [motores Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [motores Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow e mais. Ela também é compatível com produtos de braço robótico continuamente atualizados como o reBot. A plataforma é amigável para iniciantes e também fornece um SDK em Python com funcionalidade totalmente consistente para desenvolvedores.

2. Experimente os novos recursos e detalhes do MotorBridge especificamente adaptados para o braço robótico reBot, incluindo calibração de ponto zero com um clique, gravação de parâmetros, controle de motor por arrastar e soltar via UI e uma interface integrada de visualização de modelo.

3. Esta ferramenta é totalmente compatível com os sistemas operacionais **Windows, Ubuntu e macOS**.

:::tip
1. É altamente recomendável não usar máquina virtual. Máquinas virtuais são propensas a problemas de ambiente.

2. (Versão Beta) Deixe um agente ajudar você a inicializar o braço robótico. Copie o conteúdo a seguir e envie para o agente:

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  Observação: Se você comprou um kit pré-montado, informe o agente durante a etapa de gravação do ID do motor: "I purchased a pre-assembled kit, please scan motors 1–7 to verify they are all online, do not rewrite the motor IDs."

3. O agente usa comandos de CLI para concluir a gravação dos IDs dos motores, enquanto o wiki usa um método de interação via interface web. Ambas as abordagens funcionam.

:::

Você deve ter concluído a preparação preliminar para a montagem do braço robótico seguindo o vídeo. Em seguida, apresentaremos como gravar os IDs dos motores e calibrar o braço robótico.



### 1. Instalar o Miniforge (Recomendado) (Suporta Windows\Ubuntu\macOS\Jetson\Raspberry Pi)

1. Instale o Miniforge e crie um ambiente virtual para evitar conflitos com outros pacotes de ambiente que possam causar falhas nos demos.

Ubuntu\Jetson\Raspberry Pi:

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

Abra a página de Release do Miniforge no seu navegador, encontre a versão mais recente de `Miniforge3-Windows-x86_64.exe` e clique para baixar:

```text
https://github.com/conda-forge/miniforge/releases
```

2. Crie um ambiente virtual Python 3.12:

:::tip
  **Usuários de Git Bash**: Se o comando `conda` não for encontrado, significa que o Git Bash não carregou o ambiente conda. Você precisa inicializá-lo primeiro:

  ```bash
  # Temporary (current terminal only), replace <install_path> with the actual path
  source <install_path>/etc/profile.d/conda.sh

  # Permanent (write to bashrc, run once)
  echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  Para fazer o PowerShell ativar automaticamente o ambiente conda:

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. Ative o ambiente virtual. **Você precisa executar novamente este comando de ativação toda vez que abrir um terminal para usar recursos relacionados ao reBot**:

```bash
conda activate rebot
```

### 2. Instalar o Motorbridge

Após ativar o ambiente virtual do reBot, execute o comando a seguir para instalar o motorbridge:

:::tip Nota para usuários de macOS
Se você tiver baixa taxa de quadros durante a teleoperação no macOS, isso pode ser causado por uma versão desatualizada do driver WCH CH34x. Para **macOS 10.14 e posteriores**, o sistema inclui um driver `AppleUSBCHC0M` integrado. Você pode desinstalar o driver antigo e mudar para o driver integrado do macOS, o que deve melhorar efetivamente a taxa de quadros.
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

Coloque o dispositivo PCAN-USB para funcionar no barramento CAN a 1 Mbps para comunicação com o braço robótico.

Ubuntu\Jetson\Raspberry Pi:

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

ou macOS:

Se libPCBUSB.dylib não puder ser carregado, instale primeiro o PCBUSB:
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

Configure `DYLD_LIBRARY_PATH` para garantir que o motorbridge-gateway consiga encontrar a biblioteca PCBUSB em tempo de execução. Crie um script de ativação no ambiente conda para que ele tenha efeito automaticamente sempre que você executar `conda activate rebot`:

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
EOF

echo $DYLD_LIBRARY_PATH
```

Verifique se está pronto:
```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Optional: Check if PCBUSB runtime is loadable
python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
```

ou Windows:

Visite [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) para instalar o driver do PCAN-USB.

<!-- ### 3. Write Motor IDs

:::tip Pre-assembled kit users, please skip this step
:::

Use a screwdriver to disconnect all motor cables, then connect a single motor to the USB-to-CAN module.

Run the following command to scan whether the motor is detected. The factory ID may be 127.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

After confirming the motor's current ID, run the modification command (note: do not connect multiple motors at the same time, as this will cause all of them to be overwritten):

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

Repeat the above steps until all motor IDs have been successfully written. Then connect all motor cables and run the following command to make a final confirmation. If 7 motors are detected, you are done.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4. Iniciar o MotorBridge-gateway para Gravar Pontos Zero e Depurar

#### Antes do Reset do Motor

Antes da configuração dos parâmetros do motor, observe as seguintes preparações e regras de segurança:

- Prepare 2 grampos de fixação (tamanho ≥3 polegadas) e uma fonte de alimentação chaveada de 48 V com saída XT30 (escolha uma marca confiável; não use fontes de baixa qualidade).
- Durante a depuração e operação, mantenha uma distância segura de pelo menos 1 metro.
- Não conecte ou desconecte motores com o sistema energizado; desligue a fonte de alimentação antes de conectar/desconectar o conector XT30 2+2.
- Não sobrecarregue nem opere os motores em velocidade excessiva; verifique a fiação e os fixadores antes da inicialização; não use em ambientes úmidos, de alta temperatura ou empoeirados.
- Defina parâmetros de programa razoáveis e função de parada de emergência para evitar perda de controle do equipamento.
- **Siga rigorosamente as regras acima. O vendedor não se responsabiliza por quaisquer riscos e perdas causados por operações em desacordo com as instruções ou por erro humano.**


#### Escrita e depuração do ponto zero via interface Web

Abra o endereço [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) no seu navegador, clique na opção Help, copie o comando correspondente com base no seu sistema operacional e na placa controladora, verifique o endereço IP e o número da porta e, em seguida, pressione Enter no terminal para executá-lo.


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```

macOS:

```bash
motorbridge-gateway --bind 127.0.0.1:9002 
```

ou

```bash
DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```


Consulte o vídeo para saber como usar. Antes de operar o braço robótico, você precisa redefinir o ponto zero novamente.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Sobre a fonte de alimentação

1. O braço robótico não é enviado com fonte de alimentação / não inclui uma fonte de alimentação por padrão. Você pode conectar uma bateria por conta própria ou adquirir nossa [fonte de alimentação MeanWell 48V 12,5A de código aberto](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html).

   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
   </div>

2. Como alternativa, você pode escolher nosso gabinete de fonte de alimentação MeanWell 24V 14,6A de código aberto para montagem própria. As instruções em texto e a lista de materiais (BOM) são de código aberto no [repositório GitHub](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) (recomendado apenas para desenvolvedores com experiência relevante em montagem de fontes de alimentação).

   Vídeo de referência para montagem:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>