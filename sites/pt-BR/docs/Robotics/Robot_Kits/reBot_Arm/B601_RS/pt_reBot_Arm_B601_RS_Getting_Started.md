---
description: Este guia ajudará você a começar a usar o reBot Arm B601-RS, incluindo opções de compra, montagem, calibração e configuração de software.
title: Início Rápido do reBot Arm B601-RS
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Braço Robótico
  - Robô
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-28'
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
  <strong>Braço Robótico de 6 DOF · Suporte a Múltiplos Motores · Solucionador de Cinemática · Planejamento de Trajetória · Totalmente Open Source</strong>
</p>

O projeto reBot Arm foi disponibilizado como open source no [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Este guia irá conduzi-lo pelo início rápido do B601-RS, da montagem à operação.
O conteúdo deste guia está chegando até você à velocidade da luz — fique ligado.

## Aviso de Segurança e Notificação de Risco

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## Sobre a Fonte de Alimentação

1. O braço robótico não é enviado com uma fonte de alimentação / não inclui uma fonte de alimentação por padrão. Você pode conectar uma bateria por conta própria ou adquirir nossa [Fonte de Alimentação MeanWell 48V 12.5A open source](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) ou pela [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1). Não adquira fontes de alimentação de fabricantes sem marca ou por canais inseguros. Quaisquer riscos ou consequências decorrentes disso serão de responsabilidade do indivíduo.

Se a tensão da sua residência for 220V, ajuste o seletor de tensão na lateral da fonte de alimentação para 230V. Se a tensão da sua residência for 110V, ajuste-o para 115V.

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |


   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
   </div>

2. Como alternativa, você pode escolher nosso gabinete open source para fonte de alimentação MeanWell 24V 14.6A para auto-montagem. As instruções em texto e a BOM estão em open source no [repositório GitHub](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) (recomendado apenas para desenvolvedores com experiência relevante em montagem de fontes de alimentação).

   Vídeo de referência de montagem:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## Etapa 1: Guia de Montagem

- Antes da montagem, leia atentamente as instruções a seguir. Para garantir um processo de montagem tranquilo e uma experiência prática completa, seja paciente, mantenha o foco e siga sempre estes pontos-chave:
  1. Este kit inclui numerosos parafusos e peças estruturais, alguns dos quais são semelhantes. Verifique cuidadosamente as especificações dos parafusos e os modelos das peças e confirme a orientação de instalação antes de apertar.
  2. O vídeo foi gravado no início de abril. Pode haver pequenos ajustes nas peças posteriormente, mas isso não afeta a qualidade da montagem ao seguir o vídeo. As peças finais são as que acompanham o envio.
  3. Para facilitar a instalação e remoção dos parafusos, a BOM open source especifica parafusos padrão. No entanto, os parafusos enviados com o kit têm trava-rosca aplicada. Você também pode usar suas próprias ferramentas preferidas ou uma parafusadeira elétrica (altamente recomendado ter uma à mão). Se usar uma ferramenta elétrica, certifique-se de ajustar o torque para um nível baixo a médio (3–6 kgf·cm) para evitar torque excessivo que possa espanar os parafusos, causando danos irreversíveis em que as peças não podem ser removidas. Se houver qualquer sinal de espanamento, substitua imediatamente o parafuso ou realinhe e tente novamente. Parafusos com trava-rosca espanados não podem ser removidos com extrator de parafusos e irão inutilizar toda a peça. Portanto, prossiga com cautela.
  4. Priorize a segurança durante a montagem para evitar dedos presos ou lesões por esmagamento. Crianças devem concluir este projeto acompanhadas por um dos pais ou responsável.




## Etapa 2: Calibre o Braço Robótico e Comece

1. Explore nossa plataforma **MotorBridge**. Esta plataforma é uma solução abrangente tudo-em-um que oferece expansão contínua dos tipos de motores, cobrindo [motores Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [motores Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [motores Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [motores Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow e mais. Ela também é compatível com produtos de braço robótico continuamente atualizados como o reBot. A plataforma é fácil de usar para iniciantes e também fornece um SDK em Python com funcionalidade totalmente consistente para desenvolvedores.

2. Experimente os novos recursos e detalhes do MotorBridge especificamente adaptados para o braço robótico reBot, incluindo calibração de ponto zero com um clique, gravação de parâmetros, controle de motor por arrastar e soltar via UI e uma interface integrada de visualização de modelo.

3. Esta ferramenta é totalmente compatível com os sistemas operacionais **Windows, Ubuntu e macOS**.

:::tip
1. Foi verificado que o desempenho de máquinas virtuais é insuficiente para executar os demos e há problemas de configuração. Recomenda-se usar uma máquina física com Ubuntu para controlar o braço robótico.

2. (Versão Beta) Deixe um agente ajudar você a inicializar o braço robótico. Copie o conteúdo a seguir e envie para o agente:

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  Observação: Se você comprou um kit pré-montado, informe o agente durante a etapa de gravação do ID do motor: "I purchased a pre-assembled kit, please scan motors 1–7 to verify they are all online, do not rewrite the motor IDs."

3. O agente usa comandos de CLI para concluir a gravação do ID dos motores, enquanto o wiki usa um método de interação via interface web. Ambas as abordagens funcionam.

:::

Você deve ter concluído a preparação preliminar para a montagem do braço robótico seguindo o vídeo. Em seguida, apresentaremos as etapas para gravar os IDs dos motores e calibrar o braço robótico.


Consulte o vídeo e o tutorial em texto. Antes de controlar o braço robótico, você precisa redefinir o ponto zero novamente.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



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

  Para fazer com que o PowerShell ative automaticamente o ambiente conda:

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

Após ativar o ambiente virtual do reBot, execute o seguinte comando para instalar o motorbridge:

:::tip Nota para usuários de macOS
Se você tiver taxas de quadros baixas durante a teleoperação no macOS, isso pode ser causado por uma versão desatualizada do driver WCH CH34x. Para **macOS 10.14 e posteriores**, o sistema inclui um driver `AppleUSBCHC0M` integrado. Você pode desinstalar o driver antigo e alternar para o driver integrado do macOS, o que deve melhorar efetivamente a taxa de quadros.
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

Faça o dispositivo PCAN-USB funcionar no barramento CAN a 1 Mbps para comunicação com o braço robótico.

#### Ubuntu:

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

#### macOS:

Se `libPCBUSB.dylib` não puder ser carregada, instale primeiro o PCBUSB:
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

Configure `DYLD_LIBRARY_PATH` para garantir que o motorbridge-gateway possa encontrar a biblioteca PCBUSB em tempo de execução. Crie um script de ativação no ambiente conda para que ele tenha efeito automaticamente sempre que você executar `conda activate rebot`:

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

#### Windows:

Visite [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) para instalar o driver PCAN-USB.

ou Jetson:
  [peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- Remover brltty
No Jetson, o brltty pode ocupar a porta serial USB usada pelo líder. Remova-o primeiro:
```bash
sudo apt remove -y brltty
```

- Instalar dependências
```bash
sudo apt update
sudo apt install -y \
    build-essential \
    gcc \
    g++ \
    make \
    libpopt-dev \
    can-utils \
    ethtool \
    nvidia-l4t-kernel-headers
```
Verifique se o diretório de cabeçalhos do kernel atual existe:
```bash
ls -l /lib/modules/$(uname -r)/build
```

- Compilar o driver PEAK SocketCAN
Baixe e extraia o PEAK Linux Driver 9.2.0 e, em seguida, entre no diretório do código-fonte:
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
Limpe artefatos de compilação anteriores:
```bash
make clean
```
Compile no modo netdev:
```bash
make netdev
```
O modo netdev registra o PCAN-USB como uma interface de rede Linux SocketCAN.
**Não** use `make` simples. O `make` simples compila o modo chardev, enquanto o LeRobot e o motorbridge-cli dependem de interfaces SocketCAN.

- Instalar e carregar o driver
Instale o driver:
```bash
sudo make install
sudo depmod -a
```
Carregue o módulo de kernel pcan:
```bash
sudo modprobe pcan
```
Habilite o carregamento automático na inicialização:
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
Confirme que o driver está carregado:
```bash
ip -br link | grep can
```
Saída esperada:
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- Descobrir qual interface PCAN corresponde ao seu braço robótico
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
As interfaces listadas aqui são dispositivos PEAK PCAN-USB, por exemplo:
```
can2
```

- Tornar persistente o comando `pcan_refresh`
Variáveis de ambiente Linux não sobrevivem a reinicializações, e a numeração das interfaces PCAN pode mudar. Uma abordagem mais confiável é definir permanentemente uma função de atualização e executá-la após abrir um terminal.

Anexe a função ao `~/.bashrc`:
```bash
grep -q '^pcan_refresh()' ~/.bashrc || cat >> ~/.bashrc <<'EOF'

pcan_refresh() {
    local iface
    iface=$(sudo setup-pcan-if) || return 1
    export PCAN_IF="$iface"
    echo "PCAN_IF=$PCAN_IF"
}
EOF
```
```bash
source ~/.bashrc
```
Execute isto após reiniciar ou reconectar o PCAN-USB:
```bash
pcan_refresh
```
Em caso de sucesso, a saída será:
```
PCAN_IF=can1
```
Use `$PCAN_IF` em todos os comandos subsequentes em vez de fixar `can1` ou `can2` no código.

---

#### Jetson:
  [peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- Remover brltty
No Jetson, o brltty pode ocupar a porta serial USB usada pelo líder. Remova-o primeiro:
```bash
sudo apt remove -y brltty
```

- Instalar dependências
```bash
sudo apt update
sudo apt install -y \
    build-essential \
    gcc \
    g++ \
    make \
    libpopt-dev \
    can-utils \
    ethtool \
    nvidia-l4t-kernel-headers
```
Verifique se o diretório de cabeçalhos do kernel atual existe:
```bash
ls -l /lib/modules/$(uname -r)/build
```

- Compilar o driver PEAK SocketCAN
Baixe e extraia o PEAK Linux Driver 9.2.0 e, em seguida, entre no diretório do código-fonte:
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
Limpe artefatos de compilação anteriores:
```bash
make clean
```
Compile no modo netdev:
```bash
make netdev
```
O modo netdev registra o PCAN-USB como uma interface de rede Linux SocketCAN.
**Não** use `make` simples. O `make` simples compila o modo chardev, enquanto o LeRobot e o motorbridge-cli dependem de interfaces SocketCAN.

- Instalar e carregar o driver
Instale o driver:
```bash
sudo make install
sudo depmod -a
```
Carregue o módulo de kernel pcan:
```bash
sudo modprobe pcan
```
Habilite o carregamento automático na inicialização:
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
Confirme que o driver está carregado:
```bash
ip -br link | grep can
```
Saída esperada:
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- Descobrir qual interface PCAN corresponde ao seu braço robótico
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
As interfaces listadas aqui são dispositivos PEAK PCAN-USB, por exemplo:
```
can2
```

- Tornar persistente o comando `pcan_refresh`
Variáveis de ambiente Linux não sobrevivem a reinicializações, e a numeração das interfaces PCAN pode mudar. Uma abordagem mais confiável é definir permanentemente uma função de atualização e executá-la após abrir um terminal.

Acrescente a função em `~/.bashrc`:
```bash
grep -q '^pcan_refresh()' ~/.bashrc || cat >> ~/.bashrc <<'EOF'

pcan_refresh() {
    local iface
    iface=$(sudo setup-pcan-if) || return 1
    export PCAN_IF="$iface"
    echo "PCAN_IF=$PCAN_IF"
}
EOF
```
```bash
source ~/.bashrc
```
Execute isto após reiniciar ou reconectar o PCAN-USB:
```bash
pcan_refresh
```
Em caso de sucesso, a saída será:
```
PCAN_IF=can1
```
Use `$PCAN_IF` em todos os comandos subsequentes em vez de fixar `can1` ou `can2`.

---

:::tip Atenção
Se o **PCAN-USB** não for detectado no Gerenciador de Dispositivos após instalar o driver, expanda a seção abaixo, baixe o firmware PCAN e siga as etapas de recuperação.
:::



<details>

<summary>Download do firmware PCAN e etapas de recuperação do driver</summary>

Se o PCAN-USB ainda não funcionar após instalar o driver e o Gerenciador de Dispositivos não mostrar o dispositivo **PCAN-USB** ilustrado abaixo, baixe o pacote de firmware PCAN e siga estas etapas para instalar o driver DFU e regravar o firmware.

![PCAN-USB detectado no Gerenciador de Dispositivos](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [Baixar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### Instalar o driver DFU

1. Extraia o pacote baixado. Ele contém as pastas `Dfu tool` e `pcan`.

![Pastas Dfu tool e pcan extraídas do pacote](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. Abra a pasta `Dfu tool` e execute o instalador `.exe`. Após a instalação, anote o caminho de instalação do driver, por exemplo:

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![Instalador DfuSe e caminho de instalação do driver](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. Ajuste a chave DIP no módulo USB2CAN para **BOOT** e, em seguida, conecte o módulo ao computador.

![Defina a chave DIP do USB2CAN para BOOT](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. Abra o **Gerenciador de Dispositivos**, localize **Outros dispositivos → STM32 BOOTLOADER**, clique com o botão direito, selecione **Atualizar driver** e, em seguida, selecione **Procurar software de driver no computador**.

![STM32 BOOTLOADER no Gerenciador de Dispositivos](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![Selecione Procurar software de driver no computador](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. Cole o caminho do driver DfuSeDemo anotado anteriormente no campo de localização, selecione **Incluir subpastas** e clique em **Avançar**.

![Insira o caminho do driver DfuSeDemo e selecione Incluir subpastas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. Desconecte e reconecte o módulo USB2CAN. Se ele agora for identificado como **STM Device in DFU Mode**, a atualização do driver foi bem-sucedida.

7. Abra o **DfuSeDemo** e confirme que ele detecta corretamente o módulo USB2CAN.

![DfuSeDemo detecta corretamente o módulo USB2CAN](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### Gravar o firmware PCAN

1. No DfuSeDemo, clique em **Upgrade or Verify Action → Choose...** e selecione o firmware da pasta `pcan` extraída.
2. Clique em **Upgrade**, clique em **Yes** na caixa de diálogo de confirmação e aguarde a conclusão do processo de gravação do firmware. Você pode então fechar o DfuSeDemo.

![Selecione o firmware PCAN e clique em Upgrade no DfuSeDemo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![Atualização de firmware concluída](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### Restaurar e verificar o dispositivo

Desconecte o módulo USB2CAN, ajuste a chave DIP para **120R** e reconecte-o ao computador. Abra o Gerenciador de Dispositivos. Se o dispositivo for identificado como **PCAN-USB**, o problema foi resolvido e você pode continuar com este guia.

![PCAN-USB detectado com sucesso no Gerenciador de Dispositivos](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

<details>
<summary>Download de firmware PCAN e etapas de reparo do driver - Ubuntu</summary>

Usuários Ubuntu, consulte este guia

1.> 📦 [Clique para baixar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2. Altere o USB2CAN para BOOT

3. Extraia o USB2CAN.zip do passo 1 e coloque `flash_pcan_ubuntu.sh` e `pcan_canable_hw.bin` (de dentro do USB2CAN.zip) no mesmo diretório

[Clique para baixar flash_pcan_ubuntu.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

Se estiver transferindo de outro computador (por exemplo, scp):

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@your_Ubuntu_IP:~/Downloads/
```
Ou simplesmente copie-o para um pen drive USB e conecte-o na máquina Ubuntu — desde que os arquivos acabem em ~/Downloads, no diretório atual ou em /tmp, o script os encontrará automaticamente.

4. Execute:

```text
bash flash_pcan_ubuntu.sh
```

Digite sua senha; aguarde a conclusão

Após a conclusão, altere de volta para "120R"

Reconecte o USB.

</details>

<details>
<summary>Download de firmware PCAN e etapas de reparo do driver - MAC</summary>

Usuários MAC, consulte este guia

1.> 📦 [Clique para baixar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2. Altere o USB2CAN para BOOT

3.Por favor, extraia o USB2CAN.zip do passo 1 e coloque `flash_pcan_mac.sh` e `pcan_canable_hw.bin` (de dentro de USB2CAN.zip) no mesmo diretório

[Clique para baixar flash_pcan_mac.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

Se estiver transferindo de outro computador (por exemplo, via scp):

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@your_MAC_IP:~/Downloads/
```

Ou simplesmente copie para um pendrive USB e conecte-o ao Mac — desde que os arquivos terminem em ~/Downloads, no diretório atual ou em /tmp, o script irá encontrá-los automaticamente.

4.Execute:

```text
bash /Users/"your_username"/Downloads/flash_pcan_mac.sh "/Users/"your_username"/Downloads/pcan_canable_hw.bin"
```

O comando acima pressupõe que os arquivos estejam colocados no caminho Downloads do Mac; ajuste de acordo com o seu caminho real

Digite sua senha e aguarde a conclusão

Após a conclusão, volte para "120R"

Reconecte o USB.

</details>

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

Antes da configuração dos parâmetros do motor, observe os seguintes preparativos e regras de segurança:

- Prepare 2 grampos de fixação (tamanho ≥3 polegadas) e uma fonte de alimentação chaveada de 48 V com saída XT30 (escolha uma marca confiável; não use fontes de baixa qualidade).
- Durante a depuração e operação, mantenha uma distância segura de pelo menos 1 metro.
- Não conecte ou desconecte os motores com o sistema energizado; desligue a fonte de alimentação antes de conectar/desconectar o conector XT30 2+2.
- Não sobrecarregue nem opere os motores em excesso de velocidade; verifique a fiação e os fixadores antes da partida; não utilize em ambientes úmidos, de alta temperatura ou empoeirados.
- Defina parâmetros de programa razoáveis e uma função de parada de emergência para evitar perda de controle do equipamento.
- **Siga rigorosamente as regras acima. O vendedor não se responsabiliza por quaisquer riscos e perdas causados por operações em desacordo com as instruções ou por erro humano.**


#### Escrita de Ponto Zero e Depuração pela Interface Web

Abra o endereço [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) no navegador, clique na opção Help, copie o comando correspondente com base no seu sistema operacional e na sua placa controladora, verifique o endereço IP e o número da porta e, em seguida, pressione Enter no terminal para executá-lo.


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

#### Inicializar Parâmetros de Controle do Motor RS

:::warning Conclua a inicialização dos parâmetros antes do primeiro uso

A maioria dos exemplos do reBot Arm B601-RS roda no modo MIT. O modo de Posição nativa (`pos_vel`) usa diretamente o ganho do laço de posição `loc_kp` e a velocidade máxima `vel_max`. Seu comportamento de movimento também é afetado pelo ganho do laço de velocidade `spd_kp` e pelo parâmetro de aceleração `acc_rad`. Se os parâmetros recomendados do B601-RS não tiverem sido inicializados, ou se os parâmetros salvos em cada junta forem inconsistentes, o modo de Posição pode apresentar resposta, velocidade ou comportamento de aceleração e desaceleração anormais.

Primeiro selecione `rebot-arm-robstride` em **Robot Model** no [MotorBridge Studio](https://motorbridge.github.io/motorbridge-studio/), faça a varredura e confirme que as Juntas 1-7 estão todas online e conclua a calibração de zero do braço robótico descrita acima. Em seguida, execute os seguintes passos:

1. Clique em **Read Parameters** para ler os parâmetros atualmente salvos em todas as juntas online. Esta operação apenas lê os dados e não modifica os motores. Aguarde até que a página informe que os parâmetros de controle foram lidos com sucesso e mantenha os valores atuais como registro.
2. Clique em **Apply Default Template** e confirme que a página informa que o template de parâmetros padrão do reBot Arm RobStride foi aplicado às Juntas 1-7. Esta operação apenas carrega os valores recomendados na página; ainda não os grava nos motores.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_read_params.png" alt="Ler os parâmetros do motor B601-RS e aplicar o template padrão" />
</div>

3. Clique em **Write Parameters**. Confirme que o braço robótico está apoiado com segurança e que não há pessoas ou obstáculos por perto e, em seguida, confirme a operação de gravação na caixa de diálogo. Não desligue a alimentação nem conecte ou desconecte cabos de motor enquanto os parâmetros estiverem sendo gravados.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_write_params.png" alt="Confirmar a gravação dos parâmetros do motor B601-RS" />
</div>

4. Após a conclusão da gravação, o MotorBridge Studio lê automaticamente os parâmetros de volta. A inicialização será bem-sucedida quando a página informar que a verificação de leitura pós-gravação corresponde aos valores gravados.

:::
