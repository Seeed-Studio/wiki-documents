---
description: Este guia ajudará você a começar a usar o reBot Arm B601-RS, incluindo opções de compra, montagem, calibração e configuração de software.
title: Introdução rápida ao reBot Arm B601-RS
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
  skip: [zh-CN]
last_update:
  date: 2026-08-17
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Introdução ao reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
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
  <strong>Braço robótico de 6 DOF · Suporte a múltiplos motores · Solução de cinemática · Planejamento de trajetória · Totalmente open source</strong>
</p>

O projeto reBot Arm foi disponibilizado como open source no [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Este guia irá conduzi-lo pelo início rápido do B601-RS, da montagem à operação.
O conteúdo deste guia está chegando até você à velocidade da luz — fique ligado.

## Aviso de segurança e comunicado de risco

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## Sobre a fonte de alimentação

1. O braço robótico não é enviado com uma fonte de alimentação / não inclui uma fonte de alimentação por padrão. Você pode conectar uma bateria por conta própria ou adquirir nossa [fonte de alimentação MeanWell 48V 12,5A open source](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) ou pela [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1). Não adquira fontes de alimentação de fabricantes sem marca ou por canais inseguros. Quaisquer riscos ou consequências decorrentes disso serão de responsabilidade do próprio indivíduo.

Se a tensão da sua residência for 220 V, ajuste a chave seletora de tensão na lateral da fonte de alimentação para 230 V. Se a tensão da sua residência for 110 V, ajuste-a para 115 V.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>220V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="Power supply voltage selector set to 230V" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>110V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="Power supply voltage selector set to 115V" />
  </figure>
  <figure className="rebot-power-gallery-item rebot-power-gallery-item--wide">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" alt="MeanWell power adapter for reBot Arm B601-RS" />
  </figure>
</div>

### Montar a fonte de alimentação

Como alternativa, você pode escolher nosso gabinete open source para fonte de alimentação MeanWell 24V 14,6A para auto-montagem. As instruções em texto e a lista de materiais (BOM) estão disponíveis como open source no [repositório GitHub](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) (recomendado apenas para desenvolvedores com experiência relevante em montagem de fontes de alimentação).

Vídeo de referência para montagem:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## Guia de montagem

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>Monte o reBot Arm</h4>
      <p className="rebot-step-label">Etapa 1</p>

<Tabs>
<TabItem value="unassembled" label="Versão não montada">

<div class="video-container">
  <iframe width="900" height="600" src="https://www.youtube.com/embed/Bv60NPO0TRo?list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&amp;index=6" title="reBot Arm B601-RS assembly video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- Antes da montagem, leia atentamente as instruções a seguir. Para garantir um processo de montagem tranquilo e uma experiência prática completa, seja paciente, mantenha o foco e siga sempre estes pontos-chave:
  1. Este kit inclui numerosos parafusos e peças estruturais, alguns dos quais são semelhantes. Verifique cuidadosamente as especificações dos parafusos e os modelos das peças e confirme a orientação de instalação antes de apertar.
  2. O vídeo foi gravado no início de abril. Podem haver pequenos ajustes nas peças posteriormente, mas isso não afeta a qualidade da montagem ao seguir o vídeo. As peças finais são as que acompanham o produto enviado.
  3. Para facilitar a instalação e remoção dos parafusos, a BOM open source especifica parafusos padrão. No entanto, os parafusos enviados com o kit possuem trava química aplicada. Você também pode usar suas próprias ferramentas preferidas ou uma parafusadeira elétrica (altamente recomendado ter uma à mão). Se usar uma ferramenta elétrica, certifique-se de ajustar o torque para um nível baixo a médio (3–6 kgf·cm) para evitar torque excessivo que possa espanar os parafusos, causando danos irreversíveis que impeçam a remoção das peças. Se houver qualquer sinal de espanamento, substitua imediatamente o parafuso ou realinhe e tente novamente. Parafusos com trava química espanados não podem ser removidos com extrator de parafusos e inutilizarão toda a peça. Portanto, prossiga com cautela.
  4. Priorize a segurança durante a montagem para evitar dedos presos ou lesões por esmagamento. Crianças devem concluir este projeto acompanhadas por um dos pais ou responsável.

</TabItem>
<TabItem value="assembled" label="Versão montada">

Conecte os cabos do braço robótico e, em seguida, use o MotorBridge Studio para gravar os parâmetros do motor e definir a posição zero.

Consulte o vídeo de unboxing e início rápido do reBot Arm B601-RS abaixo para esta etapa.

Conecte o Motor 1 e o Motor 2 conforme mostrado abaixo.

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_m1m2_c.jpg" alt="Connect Motor 1 and Motor 2 on the reBot Arm B601-RS" />
</div>

Em seguida, conecte o módulo USB-para-CAN, a placa divisora de energia e sinal, o cabo de alimentação XT30 e o cabo XT30 2+2 conforme mostrado abaixo. Conecte a outra extremidade do cabo XT30 2+2 ao Motor 1 e conecte o cabo de alimentação à fonte de alimentação de 48 V.

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_connecting_cable.jpg" alt="Connect the USB-to-CAN module and power cables to the reBot Arm B601-RS" />
</div>

</TabItem>
</Tabs>

</div>
</section>
</div>

Você deve ter concluído a preparação preliminar para a montagem do braço robótico seguindo o vídeo. Em seguida, apresentaremos as etapas para gravar os IDs dos motores e calibrar o braço robótico.


Consulte o vídeo e o tutorial em texto. Antes de controlar o braço robótico, você precisa redefinir o ponto zero novamente.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Use o MotorBridge para calibrar o braço e concluir a primeira execução

:::tip
1. Explore nossa plataforma **MotorBridge**. Esta solução tudo-em-um oferece suporte a uma gama crescente de motores, incluindo [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [RobStride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [HighTorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [MyActuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow e braços robóticos continuamente atualizados, como o reBot. Ela é amigável para iniciantes e fornece aos desenvolvedores um SDK em Python que corresponde aos recursos da interface Web.

2. Os recursos do MotorBridge voltados para o reBot incluem calibração de zero com um clique, gravação de parâmetros, controle de motor por arrastar e soltar e visualização de modelo integrada.

3. O MotorBridge é compatível com **Windows, Ubuntu e macOS**.
:::

:::tip
1. Máquinas virtuais não fornecem desempenho suficiente para uma operação de demonstração confiável e podem introduzir problemas de configuração. Sempre que possível, use uma máquina física com Ubuntu.

2. (Beta) Você pode pedir para um agente inicializar o braço robótico. Envie o seguinte prompt:

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

Se você comprou um kit pré-montado, diga ao agente durante a etapa de identificação dos motores: "I purchased a pre-assembled kit. Scan motors 1–7 and verify that they are online. Do not rewrite the motor IDs."

3. O agente grava os IDs dos motores por meio de comandos de CLI, enquanto este Wiki usa a interface Web. Ambos os métodos funcionam.
:::

### Fluxo de Configuração de Software e Calibração

Siga estas etapas para instalar o Miniforge e criar um ambiente Python isolado para o desenvolvimento com o reBot.

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>Instalar o Miniforge</h4>
      <p className="rebot-step-label">Etapa 1</p>

Baixe e instale o Miniforge para o seu sistema operacional:

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Jetson\Raspberry Pi">

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

Durante a instalação, pressione <kbd>Enter</kbd> para continuar, digite `yes` para aceitar os termos e digite `yes` quando for perguntado se deseja inicializar o Conda.

Reinicie o terminal e verifique a instalação com `conda --version`.

:::tip Se `conda` não for encontrado
Carregue o Miniforge e inicialize o Bash:

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init bash
```
:::

</TabItem>
<TabItem value="macOS" label="macOS">

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

Durante a instalação, pressione <kbd>Enter</kbd> para continuar, digite `yes` para aceitar os termos e digite `yes` quando for perguntado se deseja inicializar o Conda.

Reinicie o terminal e verifique a instalação com `conda --version`.

:::tip Se `conda` não for encontrado
Carregue o Miniforge e inicialize o Zsh, o shell padrão nas versões atuais do macOS:

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init zsh
```
:::

</TabItem>
<TabItem value="windows" label="Windows">

Abra a [página de lançamentos do Miniforge](https://github.com/conda-forge/miniforge/releases), encontre o `Miniforge3-Windows-x86_64.exe` mais recente e faça o download.

:::tip Inicialize o Conda para o seu terminal
**Usuários de Git Bash:** Se `conda` não for encontrado, carregue o Conda primeiro:

```bash
# Temporary: replace <install_path> with the actual path
source <install_path>/etc/profile.d/conda.sh

# Permanent: add it to bashrc once
echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
source ~/.bashrc
```

Para o PowerShell, inicialize o Conda com:

```bash
conda init powershell
```
:::

</TabItem>
</Tabs>

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">
      <h4>Desativar a Ativação Automática da Base (Opcional)</h4>
      <p className="rebot-step-label">Etapa 2</p>

Depois que o Miniforge inicializa o Conda, cada novo terminal ativa automaticamente o ambiente `(base)`. Se você preferir iniciar no ambiente do sistema, desative a ativação automática da base:

```bash
conda config --set auto_activate_base false
```

**Verificar:** Feche o terminal atual e abra um novo. O prefixo `(base)` não deve mais aparecer. Ative o ambiente reBot manualmente quando necessário com `conda activate rebot`.

**Restaurar o padrão:** Execute `conda config --set auto_activate_base true` para ativar novamente a ativação automática da base.

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">
      <h4>Criar o Ambiente Python</h4>
      <p className="rebot-step-label">Etapa 3</p>

Crie o ambiente Python 3.12:

```bash
conda create -y -n rebot python=3.12
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">
      <h4>Ativar o Ambiente</h4>
      <p className="rebot-step-label">Etapa 4</p>

Execute este comando sempre que você abrir um novo terminal para o reBot:

```bash
conda activate rebot
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">
      <h4>Instalar o Motorbridge</h4>
      <p className="rebot-step-label">Etapa 5</p>

Após ativar o ambiente virtual reBot, execute o seguinte comando para instalar o motorbridge:

:::tip Observação para usuários de macOS
Se você tiver taxas de quadros baixas durante a teleoperação no macOS, isso pode ser causado por uma versão desatualizada do driver WCH CH34x. Para o **macOS 10.14 e posteriores**, o sistema inclui um driver `AppleUSBCHC0M` integrado. Você pode desinstalar o driver antigo e mudar para o driver integrado do macOS, o que deve melhorar efetivamente as taxas de quadros.
:::


```bash
pip install motorbridge
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">6</span>
<div className="rebot-step-content">
      <h4>Configurar o PCAN-USB</h4>
      <p className="rebot-step-label">Etapa 6</p>

Faça o dispositivo PCAN-USB funcionar no barramento CAN a 1 Mbps para a comunicação com o braço robótico.

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Raspberry Pi">

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```


:::tip Atenção
Se o dispositivo PCAN tiver firmware incorreto após a instalação do driver, expanda a seção abaixo, baixe o firmware do PCAN e siga as etapas de recuperação.
:::

<details>
<summary>Download de Firmware do PCAN &amp; Etapas de Reparo do Driver - Ubuntu</summary>

Usuários de Ubuntu, por favor, consultem este guia

1.> 📦 [Clique para baixar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.Alterar o USB2CAN para BOOT

3.Extraia o USB2CAN.zip da etapa 1 e coloque flash_pcan_ubuntu.sh e pcan_canable_hw.bin (de dentro do USB2CAN.zip) no mesmo diretório

[Clique para baixar flash_pcan_ubuntu.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

Se estiver transferindo de outro computador (por exemplo, scp):

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@your_Ubuntu_IP:~/Downloads/
```
Ou simplesmente copie para um pen drive USB e conecte-o na máquina Ubuntu — contanto que os arquivos terminem em ~/Downloads, no diretório atual ou em /tmp, o script irá encontrá-los automaticamente.

4.Execute:

```text
bash flash_pcan_ubuntu.sh
```

Digite sua senha; aguarde a conclusão

Após a conclusão, altere de volta para "120R"

Reconecte o USB.

</details>

</TabItem>

<TabItem value="Jetson" label="Jetson">

Baixe o arquivo: [peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- Remover o brltty
No Jetson, o brltty pode ocupar a porta serial USB usada pelo líder. Remova-o primeiro:
```bash
sudo apt remove -y brltty
```

- Instalar Dependências
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
Verifique se o diretório atual de cabeçalhos do kernel existe:
```bash
ls -l /lib/modules/$(uname -r)/build
```

- Compilar o Driver PEAK SocketCAN
Baixe e extraia o PEAK Linux Driver 9.2.0 e, em seguida, entre no diretório do código-fonte:
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
Limpe artefatos de compilações anteriores:
```bash
make clean
```
Compile no modo netdev:
```bash
make netdev
```
O modo netdev registra o PCAN-USB como uma interface de rede Linux SocketCAN.
**Não** use `make` simples. O `make` simples compila no modo chardev, enquanto o LeRobot e o motorbridge-cli dependem de interfaces SocketCAN.

- Instalar e Carregar o Driver
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
Use `$PCAN_IF` em todos os comandos subsequentes em vez de fixar `can1` ou `can2`.

```bash
sudo modprobe peak_usb
ip -br link

# If $PCAN_IF appears, set the bitrate
sudo ip link set $PCAN_IF down 2>/dev/null
sudo ip link set $PCAN_IF type can bitrate 1000000 restart-ms 100
sudo ip link set $PCAN_IF up
```

</TabItem>
<TabItem value="macos" label="macOS">

Se `libPCBUSB.dylib` não puder ser carregado, instale primeiro o PCBUSB:
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`install.sh` apenas cria `libPCBUSB.dylib`. O carregador nativo do motorbridge faz `dlopen` apenas do nome simples `PCBUSB`, então adicione este link simbólico. Sem isso, a conexão com o braço falha com `load PCBUSB failed` mesmo quando uma verificação com `libPCBUSB.dylib` via ctypes passaria:

```zsh
sudo ln -sf /usr/local/lib/libPCBUSB.dylib /usr/local/lib/PCBUSB
```

Configure `DYLD_FALLBACK_LIBRARY_PATH` para que o motorbridge-gateway possa encontrar o PCBUSB em tempo de execução. Prefira FALLBACK em vez de `DYLD_LIBRARY_PATH`: este último substitui a ordem de busca padrão do dyld para todo o processo e pode quebrar softwares não relacionados. Crie um script de ativação no ambiente conda para que ele tenha efeito automaticamente sempre que você executar `conda activate rebot`:

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_FALLBACK_LIBRARY_PATH="/usr/local/lib${DYLD_FALLBACK_LIBRARY_PATH:+:$DYLD_FALLBACK_LIBRARY_PATH}"
EOF

echo $DYLD_FALLBACK_LIBRARY_PATH
```

Opcional, sem sudo (máquinas compartilhadas): instale em `~/.local/lib`. Se você tiver a árvore de código-fonte do motorbridge:

```bash
./scripts/setup_pcbusb_macos.sh --user-local
ln -sf "$HOME/.local/lib/libPCBUSB.dylib" "$HOME/.local/lib/PCBUSB"
```

Aponte o script de ativação do conda para `$HOME/.local/lib` em vez de `/usr/local/lib`.

Verifique se está pronto. Conecte primeiro o adaptador PCAN. `ctypes.CDLL('libPCBUSB.dylib')` não é uma verificação de tempo de execução válida — o motorbridge nunca carrega esse nome.

```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Native loader dlopens the bare name PCBUSB
python3 -c "import ctypes; ctypes.CDLL('PCBUSB'); print('PCBUSB load OK')"

# Real runtime check (can0 maps to PCAN_USBBUS1 on macOS)
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
```


:::tip Atenção
Se o dispositivo PCAN estiver com firmware incorreto após a instalação do driver, expanda a seção abaixo, baixe o firmware PCAN e siga os passos de recuperação.
:::

<details>
<summary>Download de Firmware PCAN &amp; Etapas de Reparo do Driver - macOS</summary>

Usuários de Mac, por favor, consultem este guia

1.> 📦 [Clique para baixar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2. Mude o USB2CAN para BOOT

3. Extraia o USB2CAN.zip do passo 1 e coloque `flash_pcan_mac.sh` e `pcan_canable_hw.bin` (de dentro do USB2CAN.zip) no mesmo diretório

[Clique para baixar flash_pcan_mac.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

Se estiver transferindo de outro computador (por exemplo, scp):

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@your_MAC_IP:~/Downloads/
```

Ou simplesmente copie-o para um pen drive USB e conecte-o ao Mac — desde que os arquivos acabem em ~/Downloads, no diretório atual ou em /tmp, o script irá encontrá-los automaticamente.

4. Execute:

```text
bash /Users/"your_username"/Downloads/flash_pcan_mac.sh "/Users/"your_username"/Downloads/pcan_canable_hw.bin"
```

O comando acima assume que os arquivos estão colocados no caminho Downloads do Mac; ajuste de acordo com o seu caminho real

Digite sua senha; aguarde a conclusão

Após a conclusão, mude de volta para "120R"

Reconecte o USB.

</details>

</TabItem>
<TabItem value="windows" label="Windows">

Visite [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) para instalar o driver PCAN-USB.


:::tip Atenção
Se **PCAN-USB** não for detectado no Gerenciador de Dispositivos após instalar o driver, expanda a seção abaixo, baixe o firmware PCAN e siga os passos de recuperação.
:::

<details>

<summary>Download de Firmware PCAN &amp; Etapas de Reparo do Driver - Windows</summary>

Se o PCAN-USB ainda não funcionar após instalar o driver e o Gerenciador de Dispositivos não mostrar o dispositivo **PCAN-USB** ilustrado abaixo, baixe o pacote de firmware PCAN e siga estas etapas para instalar o driver DFU e regravar o firmware.

![PCAN-USB detected in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [Baixar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### Instalar o Driver DFU

1. Extraia o pacote baixado. Ele contém as pastas `Dfu tool` e `pcan`.

![Dfu tool and pcan folders extracted from the package](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. Abra a pasta `Dfu tool` e execute o instalador `.exe`. Após a instalação, anote o caminho de instalação do driver, por exemplo:

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![DfuSe installer and driver installation path](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. Ajuste a chave DIP no módulo USB2CAN para **BOOT** e conecte o módulo ao computador.

![Set the USB2CAN DIP switch to BOOT](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. Abra o **Gerenciador de Dispositivos**, localize **Outros dispositivos → STM32 BOOTLOADER**, clique com o botão direito, selecione **Atualizar driver** e, em seguida, selecione **Procurar software de driver no computador**.

![STM32 BOOTLOADER in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![Select Browse my computer for drivers](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. Cole o caminho do driver DfuSeDemo anotado anteriormente no campo de localização, selecione **Incluir subpastas** e clique em **Avançar**.

![Enter the DfuSeDemo driver path and select Include subfolders](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. Desconecte e reconecte o módulo USB2CAN. Se ele agora for identificado como **STM Device in DFU Mode**, a atualização do driver foi bem-sucedida.

7. Abra o **DfuSeDemo** e confirme se ele detecta corretamente o módulo USB2CAN.

![DfuSeDemo correctly detects the USB2CAN module](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### Gravar o Firmware PCAN

1. No DfuSeDemo, clique em **Upgrade or Verify Action → Choose...** e selecione o firmware da pasta `pcan` extraída.
2. Clique em **Upgrade**, clique em **Yes** na caixa de diálogo de confirmação e aguarde a conclusão do processo de gravação do firmware. Você pode então fechar o DfuSeDemo.

![Select the PCAN firmware and click Upgrade in DfuSeDemo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![Firmware upgrade completed](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### Restaurar e Verificar o Dispositivo

Desconecte o módulo USB2CAN, ajuste a chave DIP para **120R** e reconecte-o ao computador. Abra o Gerenciador de Dispositivos. Se o dispositivo for identificado como **PCAN-USB**, o problema foi resolvido e você pode continuar com este guia.

![PCAN-USB successfully detected in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

</TabItem>



</Tabs>
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


</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">7</span>
<div className="rebot-step-content">
      <h4>Gravar Pontos Zero e Depurar com MotorBridge Gateway</h4>
      <p className="rebot-step-label">Etapa 7</p>

#### Antes do Reset do Motor

Antes da configuração dos parâmetros do motor, observe as seguintes preparações e regras de segurança:

- Prepare 2 grampos de fixação (tamanho ≥3 polegadas) e uma fonte de alimentação chaveada de 48 V com saída XT30 (escolha uma marca confiável; não use fontes de baixa qualidade).
- Durante a depuração e operação, mantenha uma distância segura de pelo menos 1 metro.
- Não conecte ou desconecte os motores com o sistema energizado; desligue a fonte de alimentação antes de conectar/desconectar o conector XT30 2+2.
- Não sobrecarregue nem opere os motores em velocidade excessiva; verifique a fiação e os fixadores antes da partida; não use em ambientes úmidos, de alta temperatura ou empoeirados.
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
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```

#### Inicializar parâmetros de controle do motor RS

:::warning Conclua a inicialização dos parâmetros antes do primeiro uso

A maioria dos exemplos do reBot Arm B601-RS é executada no modo MIT. O modo de posição nativa (`pos_vel`) usa diretamente o ganho do loop de posição `loc_kp` e a velocidade máxima `vel_max`. Seu comportamento de movimento também é afetado pelo ganho do loop de velocidade `spd_kp` e pelo parâmetro de aceleração `acc_rad`. Se os parâmetros recomendados do B601-RS não tiverem sido inicializados, ou se os parâmetros salvos em cada junta forem inconsistentes, o modo de posição pode apresentar resposta, velocidade ou comportamento de aceleração e desaceleração anormais.

Primeiro selecione `rebot-arm-robstride` em **Robot Model** no [MotorBridge Studio](https://motorbridge.github.io/motorbridge-studio/), faça a varredura e confirme que as Juntas 1-7 estão todas online e conclua a calibração de zero do braço robótico descrita acima. Em seguida, execute as seguintes etapas:

1. Clique em **Read Parameters** para ler os parâmetros atualmente salvos em todas as juntas online. Esta operação apenas lê os dados e não modifica os motores. Aguarde até que a página informe que os parâmetros de controle foram lidos com sucesso e mantenha os valores atuais como registro.
2. Clique em **Apply Default Template** e confirme que a página informa que o template de parâmetros padrão do reBot Arm RobStride foi aplicado às Juntas 1-7. Esta operação apenas carrega os valores recomendados na página; ela ainda não os grava nos motores.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_read_params.png" alt="Ler os parâmetros do motor B601-RS e aplicar o template padrão" />
</div>

3. Clique em **Write Parameters**. Confirme que o braço robótico está apoiado com segurança e que não há pessoas ou obstáculos por perto e, em seguida, confirme a operação de gravação na caixa de diálogo. Não desconecte a alimentação nem conecte ou desconecte cabos do motor enquanto os parâmetros estiverem sendo gravados.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_write_params.png" alt="Confirmar a gravação dos parâmetros do motor B601-RS" />
</div>

4. Após a conclusão da gravação, o MotorBridge Studio lê automaticamente os parâmetros de volta. A inicialização é bem-sucedida quando a página informa que a verificação de leitura pós-gravação corresponde.

:::

</div>
</section>
</div>
