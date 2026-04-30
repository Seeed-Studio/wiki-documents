---
description: Este wiki fornece o tutorial de montagem e depuração para o SO ARM100 e realiza a coleta de dados e o treinamento na versão mais recente do framework Lerobot.
title: SoArm no Lerobot
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 3/11/2026
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2025-06-05'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/
---
# Primeiros passos com o braço robótico SO-ARM100 e SO-ARM101 com LeRobot

:::tip
A manutenção deste tutorial foi atualizada para a versão mais recente do [lerobot](https://huggingface.co/docs/lerobot/index). Se você quiser consultar o tutorial da versão anterior, clique [aqui](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/).
:::

## Introdução

O [SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) é um projeto de braço robótico totalmente open-source lançado pela [TheRobotStudio](https://www.therobotstudio.com/). Ele inclui o braço seguidor e o braço robótico líder, e também fornece arquivos detalhados para impressão 3D e guias de operação. O [LeRobot](https://github.com/huggingface/lerobot/tree/main) é dedicado a fornecer modelos, conjuntos de dados e ferramentas para robótica no mundo real em PyTorch. Seu objetivo é reduzir a barreira de entrada da robótica, permitindo que todos contribuam e se beneficiem do compartilhamento de conjuntos de dados e modelos pré-treinados. O LeRobot integra metodologias de ponta validadas para aplicação no mundo real, com foco em aprendizado por imitação. Ele disponibiliza um conjunto de modelos pré-treinados, conjuntos de dados com demonstrações coletadas por humanos e ambientes de simulação, permitindo que os usuários comecem sem a necessidade de montar um robô. Nas próximas semanas, a intenção é ampliar o suporte à robótica no mundo real nos robôs mais econômicos e competentes atualmente disponíveis.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introdução aos projetos

O kit de robô inteligente SO-ARM10x e reComputer Jetson AI combina perfeitamente o controle de braço robótico de alta precisão com uma poderosa plataforma de computação de IA, fornecendo uma solução completa de desenvolvimento de robôs. Este kit é baseado na plataforma Jetson Orin ou AGX Orin, combinada com o braço robótico SO-ARM10x e o framework de IA LeRobot, oferecendo aos usuários um sistema de robô inteligente aplicável a múltiplos cenários, como educação, pesquisa e automação industrial.
Este wiki fornece o tutorial de montagem e depuração para o SO ARM10x e realiza a coleta de dados e o treinamento dentro do framework Lerobot.

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Principais recursos

1. **Open-source e baixo custo**: É uma solução de braço robótico open-source e de baixo custo da [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)
2. **Integração com LeRobot**: Projetado para integração com a [plataforma LeRobot](https://github.com/huggingface/lerobot)
3. **Recursos de aprendizado abundantes**: Fornece recursos de aprendizado open-source abrangentes, como guias de montagem e calibração, e tutoriais para teste, coleta de dados, treinamento e implantação, para ajudar os usuários a começar rapidamente e desenvolver aplicações robóticas.
4. **Compatível com Nvidia**: Faça a implantação deste kit de braço com o reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicação em múltiplos cenários**: É aplicável a áreas como educação, pesquisa científica, produção automatizada e robótica, ajudando os usuários a alcançar operações robóticas eficientes e precisas em várias tarefas complexas.

## Novidades：

- Otimização da fiação: Em comparação com o SO-ARM100, o SO-ARM101 apresenta uma fiação aprimorada que evita problemas de desconexão anteriormente observados na junta 3. O novo design de fiação também não limita mais a amplitude de movimento das juntas.
- Diferentes relações de engrenagem para o braço líder: O braço líder agora usa motores com relações de engrenagem otimizadas, melhorando o desempenho e eliminando a necessidade de caixas de engrenagens externas.
- Suporte a novas funcionalidades: O braço líder agora pode seguir o braço seguidor em tempo real, o que é crucial para a futura política de aprendizado, na qual um humano pode intervir e corrigir as ações do robô.

:::caution

A Seeed Studio é responsável apenas pela qualidade do hardware em si. Os tutoriais são rigorosamente atualizados de acordo com a documentação oficial. Se você encontrar problemas de software ou de dependências de ambiente que não possam ser resolvidos, além de verificar a seção de FAQ no final deste tutorial, relate o problema prontamente na [plataforma LeRobot](https://github.com/huggingface/lerobot) ou no [canal do LeRobot no Discord](https://discord.gg/8TnwDdjFGU).

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Especificações

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Braço líder</td>
      <td rowSpan="2">12x motores ST-3215- C001 (7.4V) com relação de engrenagem 1:345 para todas as juntas</td>
      <td rowSpan="2">12x motores ST-3215-C018/ST-3215-C047 (12V) com relação de engrenagem 1:345 para todas as juntas</td>
      <td colSpan="2">
        1x motor ST-3215- C001 (7.4V) com relação de engrenagem 1:345 apenas para a junta 2<br />
        2x motores ST-3215-C044 (7.4V) com relação de engrenagem 1:191 para as juntas 1 e 3<br />
        3x motores ST-3215-C046 (7.4V) com relação de engrenagem 1:147 para as juntas 4, 5 e o gripper (junta 6)
      </td>
    </tr>
    <tr>
      <td>Braço seguidor</td>
      <td colSpan="2">Igual ao SO-ARM100</td>
    </tr>
    <tr>
      <td>Fonte de alimentação</td>
      <td>5,5 mm × 2,1 mm DC 5 V 4 A</td>
      <td>5,5 mm × 2,1 mm DC 12 V 2 A</td>
      <td>5,5 mm × 2,1 mm DC 5 V 4 A</td>
      <td>
        5,5 mm × 2,1 mm DC 12 V 2 A (Braço seguidor)<br />
        5,5 mm × 2,1 mm DC 5 V 4 A (Braço líder)
      </td>
    </tr>
    <tr>
      <td>Sensor de ângulo</td>
      <td colSpan="4">Encoder magnético de 12 bits</td>
    </tr>
    <tr>
      <td>Temperatura de operação recomendada</td>
      <td colSpan="4">0 °C a 40 °C</td>
    </tr>
    <tr>
      <td>Comunicação</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>Método de controle</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

Se você comprar a versão Arm Kit, ambas as fontes de alimentação são de 5V. Se você comprar a versão Arm Kit Pro, use a fonte de alimentação de 5V para a calibração e cada etapa do braço robótico líder, e a fonte de alimentação de 12V para a calibração e cada etapa do braço robótico seguidor.

:::

## Lista de materiais (BOM)

| Peça | Quantidade | Incluído|
|--|--|--|
|  Servo Motos | 12 | ✅ |
| Placa de controle do motor | 2 | ✅ |
| Cabo USB-C 2 pcs | 1 | ✅ |
| Fonte de alimentação2 | 2 | ✅ |
| Presilha de mesa| 4 | ✅ |
| Peças do braço impressas em 3D | 1 | Opção |

## Ambiente inicial do sistema

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**Para Jetson Orin:**

- Jetson JetPack 6.0 e 6.1, não suporta 6.1
- Python 3.10  
- Torch 2.3+

## Sumário

  [A. Guia de impressão 3D](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Guia-de-impressão-3D)

  [B. Instalar LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Instalar-LeRobot)

  [C. Configurar os motores](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Configurar-os-motores)

  [D. Montagem](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Montagem)

  [E. Calibrar](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Calibrar)

  [F. Teleoperar](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Teleoperar)

  [G. Adicionar câmeras](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Adicionar-câmeras)

  [H. Registrar o conjunto de dados](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Registrar-o-conjunto-de-dados)

  [I. Visualizar o conjunto de dados](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Visualizar-o-conjunto-de-dados)

  [J. Reproduzir um episódio](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Reproduzir-um-episódio)

  [K. Treinar uma política](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Treinar-uma-política)

  [L. Avaliar sua política](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#Avaliar-sua-política)

## Guia de impressão 3D

:::caution
Após a atualização oficial do SO101, o SO100 não terá mais suporte e os arquivos-fonte serão excluídos conforme o oficial, mas os arquivos-fonte ainda podem ser encontrados em nosso [Makerworld](https://makerworld.com/zh/models/908660). No entanto, para usuários que compraram o SO100 anteriormente, os tutoriais e métodos de instalação permanecem compatíveis. A impressão do SO101 é totalmente compatível com a instalação do kit de motor do SO100.
:::

### Passo 1: Escolher uma impressora

Os arquivos STL fornecidos estão prontos para impressão em muitas impressoras FDM. Abaixo estão as configurações testadas e sugeridas, embora outras também possam funcionar.

- Material: PLA+
- Diâmetro do bico e precisão: bico de 0,4mm com altura de camada de 0,2mm ou bico de 0,6mm com altura de camada de 0,4mm.
- Densidade de preenchimento: 15%  

### Passo 2: Configurar a impressora

- Certifique-se de que a impressora esteja calibrada e que o nivelamento da mesa esteja corretamente ajustado usando as instruções específicas da impressora.
- Limpe a mesa de impressão, certificando-se de que esteja livre de poeira ou gordura. Se limpar a mesa usando água ou outro líquido, seque-a.
- Se a sua impressora recomendar, use um bastão de cola comum e aplique uma camada fina e uniforme de cola em toda a área de impressão da mesa. Evite acúmulos ou aplicação irregular.
- Carregue o filamento da impressora usando as instruções específicas da impressora.
- Certifique-se de que as configurações da impressora correspondam às sugeridas acima (a maioria das impressoras possui várias configurações, então escolha as que mais se aproximam).
- Configure para gerar suportes em todos os lugares, mas ignore inclinações maiores que 45 graus em relação à horizontal.
- Não deve haver suportes nos furos de parafuso com eixos horizontais.

### Etapa 3: Imprimir as peças

Todas as peças para o líder ou seguidor já estão contidas em um único arquivo, fáceis de imprimir em 3D, corretamente orientadas com o eixo z para cima para minimizar os suportes.

- Para mesas de impressão de 220mmx220mm (como a Ender), imprima estes arquivos:
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para mesas de impressão de 205mm x 250mm (como a Prusa/Up):
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## Instalar o LeRobot

Ambientes como pytorch e torchvision precisam ser instalados com base na sua versão de CUDA.

1. Instale o Miniforge:
Para Jetson:

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Follow the prompts by entering 'yes' or pressing Enter. Once the installation is complete:
source ~/.bashrc
```

Ou, para X86 Ubuntu 22.04:

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Once the installation is complete:
source ~/.bashrc
# Initialize all shells
conda init --all
```

2. Crie e ative um novo ambiente conda para o lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clone o Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Ao usar o miniforge, instale o ffmpeg no seu ambiente:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Normalmente isso instala o ffmpeg 7.X para a sua plataforma, compilado com o codificador libsvtav1. Se o libsvtav1 não for suportado (verifique os codificadores suportados com ffmpeg -encoders), você pode:

- [Em qualquer plataforma] Instalar explicitamente o ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Somente no Linux] Instalar as dependências de compilação do ffmpeg e compilar o ffmpeg a partir do código-fonte com libsvtav1, e certificar-se de usar o binário do ffmpeg correspondente à sua instalação com which ffmpeg.

Se você encontrar um erro como este, também pode usar este comando.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. Instale o LeRobot com dependências para os motores feetech:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Para dispositivos Jetson Jetpack 6.0+ (certifique-se de instalar o [Pytorch-gpu e Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) a partir da etapa 5 antes de executar esta etapa):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Verificar Pytorch e Torchvision

Como instalar o ambiente lerobot via pip desinstalará o Pytorch e o Torchvision originais e instalará as versões de CPU do Pytorch e do Torchvision, você precisa realizar uma verificação em Python.

```python
python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python
```

:::tip

Observação: GPUs NVIDIA RTX série 50 exigem a versão de prévia do CUDA 12.8 ou superior.

O comando de download é o seguinte:

```bash
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
```

:::

Se o resultado impresso for False, você precisa reinstalar o Pytorch e o Torchvision de acordo com o [tutorial do site oficial](https://pytorch.org/index.html).

Se você estiver usando um dispositivo Jetson, instale o Pytorch e o Torchvision de acordo com [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

## Configurar os motores

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

O processo de calibração e inicialização do servo para o SO-ARM101 é o mesmo do SO-ARM100, tanto em termos de método quanto de código. No entanto, observe que as relações de engrenagem para as três primeiras juntas do Braço Líder SO-ARM101 diferem das do SO-ARM100, portanto é importante distingui-las e calibrá-las com cuidado.

Para configurar os motores, designe um adaptador de servo de barramento e 6 motores para o seu braço líder e, da mesma forma, o outro adaptador de servo de barramento e 6 motores para o braço seguidor. É conveniente rotulá-los e escrever em cada motor se ele é para o seguidor F ou para o líder L e seu ID de 1 a 6. Usamos **F1–F6** para representar as juntas 1 a 6 do **Braço Seguidor**, e **L1–L6** para representar as juntas 1 a 6 do **Braço Líder**. O modelo de servo correspondente, atribuições de juntas e detalhes da relação de engrenagem são os seguintes:

| Modelo de Servo                            | Relação de Engrenagem | Juntas Correspondentes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Agora você deve conectar a fonte de alimentação de 5V ou 12V ao barramento do motor. 5V para os motores STS3215 7.4V e 12V para os motores STS3215 12V. Observe que o braço líder sempre usa os motores de 7.4V, portanto, tome cuidado para conectar a fonte de alimentação correta se você tiver motores de 12V e 7.4V, caso contrário, você pode queimar seus motores! Agora, conecte o barramento do motor ao seu computador via USB. Observe que o USB não fornece nenhuma alimentação, e tanto a fonte de alimentação quanto o USB precisam estar conectados.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***A seguir estão as etapas de calibração por código, por favor calibre com o servo de fiação de referência na imagem acima***

Encontrar as portas USB associadas aos seus braços
Para encontrar as portas corretas para cada braço, execute o script utilitário duas vezes:

```bash
lerobot-find-port
```

Exemplo de saída:

```bash
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

:::tip
Lembre-se de remover o USB, caso contrário a interface não será detectada.
:::

Exemplo de saída ao identificar a porta do braço seguidor (por exemplo, `/dev/tty.usbmodem575E0031751` no Mac, ou possivelmente `/dev/ttyACM0` no Linux):

Exemplo de saída ao identificar a porta do braço líder (por exemplo, `/dev/tty.usbmodem575E0032081`, ou possivelmente `/dev/ttyACM1` no Linux):

Você pode precisar conceder acesso às portas USB executando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

:::tip

Ao conectar os braços, o primeiro dispositivo conectado será atribuído a ttyACM0 (braço Escravo/Seguidor), e o segundo dispositivo conectado será atribuído a ttyACM1 (braço Mestre/Líder).

:::

**Configurar seus motores**

:::danger
Use uma fonte de alimentação de 5V para calibrar os motores do Líder (ST-3215-C046, C044, 001).
:::

| **Calibração da Junta 6 do Braço Líder** | **Calibração da Junta 5 do Braço Líder** | **Calibração da Junta 4 do Braço Líder** | **Calibração da Junta 3 do Braço Líder** | **Calibração da Junta 2 do Braço Líder** | **Calibração da Junta 1 do Braço Líder** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
Se você comprar a versão Arm Kit (ST-3215-C001), use uma fonte de alimentação de 5V. Se você comprar a versão Arm Kit Pro, use uma fonte de alimentação de 12V para calibrar o servo (ST-3215-C047/ST-3215-C018).
:::

| **Calibração da Junta 6 do Braço Seguidor** | **Calibração da Junta 5 do Braço Seguidor** | **Calibração da Junta 4 do Braço Seguidor** | **Calibração da Junta 3 do Braço Seguidor** | **Calibração da Junta 2 do Braço Seguidor** | **Calibração da Junta 1 do Braço Seguidor** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
Novamente, certifique-se de que os IDs dos servos das juntas e as relações de engrenagem correspondam estritamente às do SO-ARM101.
:::

### Calibrar servos do braço seguidor

Conecte o cabo USB do seu computador e a fonte de alimentação à placa controladora do braço seguidor. Em seguida, execute o seguinte comando.

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

Você deverá ver a seguinte instrução.

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

Conforme instruído, conecte o motor do gripper. Certifique-se de que ele seja o único motor conectado à placa e de que o próprio motor ainda não esteja em cadeia (daisy-chain) com nenhum outro motor. Ao pressionar [Enter], o script definirá automaticamente o ID e a taxa de transmissão (baudrate) para esse motor.

Você deverá então ver a seguinte mensagem:

```bash
'gripper' motor id set to 6
```

Seguido pela próxima instrução:

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

Você pode desconectar o cabo de 3 pinos da placa controladora, mas pode deixá-lo conectado ao motor do gripper na outra extremidade, pois ele já estará na posição correta. Agora, conecte outro cabo de 3 pinos ao motor de rotação do punho (wrist roll) e ligue-o à placa controladora. Assim como no motor anterior, certifique-se de que ele seja o único motor conectado à placa e de que o próprio motor não esteja conectado a nenhum outro.

:::caution
Repita a operação para cada motor conforme instruído.
:::

:::tip
Verifique sua fiação em cada etapa antes de pressionar Enter. Por exemplo, o cabo da fonte de alimentação pode se desconectar enquanto você manipula a placa.
:::

Quando terminar, o script simplesmente será concluído, momento em que os motores estarão prontos para uso. Agora você pode conectar o cabo de 3 pinos de cada motor ao próximo, e o cabo do primeiro motor (o “shoulder pan” com id=1) à placa controladora, que agora pode ser fixada à base do braço.

### Calibrar servos do braço líder

Repita os mesmos passos para o braço líder.

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

</Tabs>

## Montagem

:::tip

- O processo de montagem de braço duplo do SO-ARM101 é o mesmo do SO-ARM100. As únicas diferenças são a adição de presilhas de cabo no SO-ARM101 e as diferentes relações de engrenagem dos servos das juntas no braço líder. Portanto, tanto o SO100 quanto o SO101 podem ser instalados consultando o conteúdo a seguir
- Antes da montagem, verifique novamente o modelo do seu motor e a relação de redução. Se você comprou o SO100, pode ignorar esta etapa. Se você comprou o SO101, verifique a tabela a seguir para distinguir F1 a F6 e L1 a L6.

:::

  | Modelo do servo                            | Relação de engrenagem | Juntas correspondentes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Se você comprou o **SO101 Arm Kit Standard Edition**, todas as fontes de alimentação são de 5V. Se você comprou o **SO101 Arm Kit Pro Edition**, o braço líder deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 5V, enquanto o braço seguidor deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 12V.
:::

**Montar braço líder**

| **Etapa 1** | **Etapa 2** | **Etapa 3** | **Etapa 4** | **Etapa 5** | **Etapa 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Etapa 7** | **Etapa 8** | **Etapa 9** | **Etapa 10** | **Etapa 11** | **Etapa 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Etapa 13** | **Etapa 14** | **Etapa 15** | **Etapa 16** | **Etapa 17** | **Etapa 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Etapa 19** | **Etapa 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Montar braço seguidor**

:::tip

- As etapas para montar o braço seguidor são, em geral, as mesmas do braço líder. A única diferença está no método de instalação do efetuador final (gripper e manopla) após a Etapa 12.

:::

| **Etapa 1** | **Etapa 2** | **Etapa 3** | **Etapa 4** | **Etapa 5** | **Etapa 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Etapa 7** | **Etapa 8** | **Etapa 9** | **Etapa 10** | **Etapa 11** | **Etapa 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Etapa 13** | **Etapa 14** | **Etapa 15** | **Etapa 16** | **Etapa 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## Calibrar

:::tip
Os códigos do SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

:::danger
Se você comprou o **SO101 Arm Kit Standard Edition**, todas as fontes de alimentação são de 5V. Se você comprou o **SO101 Arm Kit Pro Edition**, o braço líder deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 5V, enquanto o braço seguidor deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 12V.
:::

Em seguida, você precisa conectar a fonte de alimentação e o cabo de dados ao seu robô SO-10x para calibração, a fim de garantir que os braços líder e seguidor tenham os mesmos valores de posição quando estiverem na mesma posição física. Essa calibração é essencial porque permite que uma rede neural treinada em um robô SO-10x funcione em outro.

Se você precisar recalibrar os braços robóticos, há duas opções disponíveis:

Opção 1: Limpar arquivos de cache

Exclua completamente os arquivos em ~/.cache/huggingface/lerobot/calibration/robots ou ~/.cache/huggingface/lerobot/calibration/teleoperators antes de recalibrar. Caso contrário, o sistema poderá disparar um aviso de erro, pois os dados de calibração anteriores são armazenados em arquivos JSON nesses diretórios.

Opção 2:

Usar o comando interativo
Execute o comando de calibração diretamente no terminal. Se o braço já tiver sido calibrado antes, o seguinte aviso aparecerá

    "Pressione ENTER para usar o arquivo de calibração fornecido associado ao id my_awesome_leader_arm, ou digite 'c' e pressione ENTER para executar a calibração:"

    Digite 'c' e pressione ENTER para iniciar a recalibração.

    Pressione ENTER para manter e usar os dados de calibração existentes.

Configuração de calibração

Conecte os 6 servos do robô pelas interfaces de 3 pinos e conecte o servo do chassi à placa controladora de servos. Em seguida, execute o seguinte comando ou exemplo de API para calibrar o braço:

:::tip
Em PCs (Linux) e dispositivos Jetson, o primeiro dispositivo USB que você conecta normalmente é mapeado para `ttyACM0`, e o segundo é mapeado para `ttyACM1`. Verifique cuidadosamente qual porta está mapeada para o líder e o seguidor antes de executar os comandos.
:::

**Calibração manual do braço seguidor**

Conecte as interfaces dos 6 servos do robô por meio de um cabo de 3 pinos e conecte o servo do chassi à placa de acionamento de servos, depois execute o seguinte comando ou exemplo de API para calibrar o braço robótico:

***Primeiro, conceda as permissões da interface***

```bash
sudo chmod 666 /dev/ttyACM*
```

***Depois calibre o braço seguidor***

```python
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \# <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name
```

O vídeo abaixo mostra como realizar a calibração. Primeiro você precisa mover o robô para a posição em que todas as juntas estejam no meio de seus intervalos. Em seguida, após pressionar Enter, você deve mover cada junta por toda a sua amplitude de movimento.

**Calibração manual do braço líder**

Siga os mesmos passos para calibrar o braço líder, executando o seguinte comando ou exemplo de API:

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \# <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name
```

:::tip

Se você encontrar o erro “Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port., Try running lerobot-find-port” ao calibrar os braços Leader ou Follower, será necessário conceder as permissões necessárias executando: `sudo chmod 666 /dev/ttyACM*`

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### (Opcional) Calibração de posição central com a ferramenta rápida Seeed Studio SoARM

Ao calibrar ou operar o robô, se você vir erros como:

`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`

Isso geralmente significa que a posição atual / deslocamento de zero de um servo está anormal, fazendo com que o ângulo lido exceda o intervalo esperado. Nesse caso, você pode usar a ferramenta SoARM da Seeed Studio para fazer uma **calibração de posição central** (gravar a posição atual no valor central **2048**) e, em seguida, refazer a calibração de todo o braço.

#### 1) Clone a ferramenta do GitHub e instale as dependências

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt
```

#### 2) Calibração de posição central e verificação

Localização dos scripts:

- `src/tools/servo_middle_calibration.py`: calibração de posição central (grava a posição atual como **2048**)
- `src/tools/servo_disable.py`: desativa o torque do servo (facilita a rotação das juntas manualmente)
- `src/tools/servo_center_test.py`: move para **2048** para verificar o resultado da calibração

Execute na seguinte ordem (os comandos solicitarão interativamente que você selecione uma porta):

1. (Opcional) Desative o torque para ajustar as juntas manualmente:

```bash
python -m src.tools.servo_disable
```

2. Faça a calibração de posição central (defina a posição atual como 2048):

```bash
python -m src.tools.servo_middle_calibration
```

3. Verifique: mova o servo para 2048 e confira se ele retorna à posição central esperada:

```bash
python -m src.tools.servo_center_test
```

Após a calibração de posição central, volte para as etapas do `lerobot-calibrate` acima e refaça a calibração de todo o braço.

## Teleoperação

**Teleop simples**
Agora você está pronto para teleoperar seu robô! Execute este script simples (ele não irá conectar e exibir as câmeras):

Observe que o id associado a um robô é usado para armazenar o arquivo de calibração. É importante usar o mesmo id ao teleoperar, gravar e avaliar quando estiver usando a mesma configuração.

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

O comando de teleoperação irá automaticamente:

1. Identificar quaisquer calibrações ausentes e iniciar o procedimento de calibração.
2. Conectar o robô e o dispositivo de teleoperação e iniciar a teleoperação.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Adicionar câmeras

<details>
<summary> Se estiver usando câmeras RealSense D435i/D405 </summary>

As câmeras de profundidade RealSense podem fornecer percepção RGB-D para o LeRobot e são adequadas para tarefas como reconhecimento de objetos, reconstrução de nuvens de pontos e manipulação em mesas. Os modelos recomendados aqui são **RealSense D405** e **RealSense D435i**.

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

A RealSense D405 é uma câmera estéreo de profundidade de curto alcance projetada para tarefas de alta precisão em curta distância, como manipulação robótica em mesas, com faixa de trabalho típica de **7 cm a 50 cm**.

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

A RealSense D435i combina detecção de profundidade, imagem RGB e uma IMU, tornando-a adequada para aplicações de médio a curto alcance, como reconstrução 3D, SLAM e percepção do ambiente robótico.

### 1. Mudar para o branch da câmera

O suporte atual a câmeras está disponível no branch `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirme o branch atual:

```bash
git branch --show-current
```

Saída esperada:

```bash
DepthCameraSupport
```

### 2. Instalar o LeRobot em modo editável

Se você usar apenas RealSense:

```bash
pip install -e ".[realsense]"
```

### 3. Conceder permissões à câmera

```bash
chmod a+rw /dev/bus/usb/*/* 
```

### 4. Detectar câmeras

```bash
lerobot-find-cameras realsense
```

Esta etapa irá exibir:

- Modelo da câmera
- Número de série
- Informações de USB
- Configuração padrão de stream

Insira o `Serial number` obtido no parâmetro `serial_number_or_name` do comando da câmera abaixo.

### 5. Exemplo com RealSense

Teste com duas RealSense:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

### 6. Observações sobre parâmetros

- `depth_alpha` controla o fator de escala da imagem de profundidade e pode ser ajustado com base no resultado de exibição e na faixa de distância alvo.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir `fps` para `15` para melhorar a estabilidade geral.
- Recomenda-se manter a resolução em `640x480` para um melhor equilíbrio entre estabilidade e desempenho em tempo real.

</details>

<details>
<summary> Se estiver usando câmeras Orbbec Gemini2/Gemini336 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

A Orbbec Gemini 2 é uma câmera RGB-D de alto desempenho para aplicações em robótica, fornecendo streams sincronizados de RGB e profundidade com alinhamento preciso de profundidade para cor. Combinada com detecção de profundidade estéreo e uma IMU de 6 eixos integrada, ela é bem adequada para tarefas robóticas como detecção de objetos, percepção 3D, mapeamento e navegação. Seu design compacto e o suporte completo ao Orbbec SDK a tornam adequada tanto para pesquisa quanto para implantação em cenários reais.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 é um novo membro da série Gemini 330. Ele herda o forte desempenho de profundidade do Gemini 335 e melhora ainda mais a qualidade de imagem de profundidade em áreas internas reflexivas, regiões escuras em cenas de alta dinâmica e ambientes externos claros. Para aplicações de robótica, ele pode fornecer dados de profundidade mais estáveis e de alta qualidade para tarefas como percepção, localização e manipulação.

### 1. Mudar para o branch da câmera

O suporte atual à câmera está disponível no branch `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirme o branch atual:

```bash
git branch --show-current
```

Saída esperada:

```bash
DepthCameraSupport
```

### 2. Instalar o LeRobot em modo editável

Se você usar apenas Orbbec:

```bash
pip install -e ".[orbbec]"
```

### 3. Conceder permissões à câmera

```bash
chmod a+rw /dev/bus/usb/*/* 
```

### 4. Detectar câmeras

```bash
lerobot-find-cameras orbbec
```

Esta etapa irá gerar:

- Modelo da câmera（Nome）
- Número de série（Número de série）
- Informações de USB
- Configuração de fluxo padrão

Insira o `Serial Number` obtido no parâmetro `serial_number_or_name` do comando da câmera mostrado abaixo.

### 5. Exemplo Orbbec

Teste com uma única Orbbec:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

### 6. Notas sobre parâmetros

- `depth_alpha` controla o fator de escala da imagem de profundidade. Um bom ponto de partida é `0.2`, depois você pode ajustá-lo com base no resultado exibido.
- Se você conectar três ou mais câmeras de profundidade, é recomendável reduzir o `fps` para `15` para melhor estabilidade.
- Recomenda-se manter a resolução em `640x480` para uma exibição e transferência de dados mais estáveis.

### 7. Problemas comuns

Se você vir o seguinte erro:

```bash
No Orbbec camera found for 'XXXX'
```

isso geralmente significa que o número de série na configuração não corresponde ao dispositivo atualmente conectado. Execute:

```bash
lerobot-find-cameras orbbec
```

Em seguida, confirme o `serial` real e atualize `serial_number_or_name` no seu comando.

</details>

## Se estiver usando uma câmera comum

:::tip
Os códigos do SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Para instanciar uma câmera, você precisa de um identificador de câmera. Esse identificador pode mudar se você reiniciar o computador ou reconectar a câmera, um comportamento que depende principalmente do seu sistema operacional.

Para encontrar os índices das câmeras conectadas ao seu sistema, execute o seguinte script:

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

O terminal exibirá as seguintes informações.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

Você pode encontrar as fotos tiradas por cada câmera no diretório `outputs/captured_images`.

:::warning
Ao usar câmeras Intel RealSense no macOS, você pode receber este erro: OSError finding RealSense cameras: failed to set power state, isso pode ser resolvido executando o mesmo comando com permissões de superusuário. Observe que o uso de câmeras RealSense no macOS é instável.
:::

Em seguida, você poderá exibir as câmeras no seu computador enquanto faz a teleoperação executando o código a seguir. Isso é útil para preparar sua configuração antes de gravar seu primeiro conjunto de dados.

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Se você tiver mais câmeras, pode alterar `--robot.cameras` para adicionar câmeras. Você deve observar o formato de index_or_path, que é determinado pelo último dígito do ID da câmera exibido por `python -m lerobot.find_cameras opencv`.

:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atraso na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Dito isso, ainda não é recomendado conectar 2 câmeras a um computador através do mesmo HUB USB.
:::

Por exemplo, se você quiser adicionar uma câmera lateral:

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução da imagem e o FPS, causando atraso na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Dito isso, ainda não é recomendado conectar 2 câmeras a um computador através do mesmo HUB USB.
:::

:::tip
Se você encontrar um bug como este.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

Você pode fazer downgrade da versão do rerun para resolver o problema.

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Gravar o conjunto de dados

- Se você quiser salvar o conjunto de dados localmente, pode executá-lo diretamente:

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Entre eles, `repo_id` pode ser modificado de forma personalizada, e `push_to_hub=false`. Por fim, o conjunto de dados será salvo no diretório `~/.cache/huggingface/lerobot` na pasta home, onde a pasta `seeedstudio123/test` mencionada acima será criada.

- Se você quiser usar os recursos do hub do Hugging Face para enviar seu conjunto de dados e ainda não tiver feito isso antes, certifique-se de ter feito login usando um token com permissão de escrita, que pode ser gerado em [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Armazene o nome do seu repositório Hugging Face em uma variável para executar estes comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Grave 5 episódios e envie seu conjunto de dados para o hub:

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Você verá muitas linhas aparecendo como esta:

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Função de gravação**

A função **record** fornece um conjunto de ferramentas para capturar e gerenciar dados durante a operação do robô.  

**1. Armazenamento de dados**

- Os dados são armazenados usando o formato `LeRobotDataset` e são gravados em disco durante a gravação.
- Por padrão, o conjunto de dados é enviado para a sua página do Hugging Face após a gravação.  
- Para desativar o envio, use: `--dataset.push_to_hub=False`

**2. Checkpoint e retomada**

- Checkpoints são criados automaticamente durante a gravação.  
- Para retomar após uma interrupção, execute novamente o mesmo comando com: `--resume=true`

⚠️ Nota crítica: Ao retomar, defina `--dataset.num_episodes` como o número de episódios adicionais a serem gravados (não o número total de episódios desejado no dataset).  

- Para começar a gravação do zero, **exclua manualmente** o diretório do dataset.

**3. Parâmetros de Gravação**

Defina o fluxo de gravação de dados usando argumentos de linha de comando:

| Parâmetro | Descrição | Padrão |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | Duração por episódio de dados (segundos) | 60 |  
| --dataset.reset_time_s | Tempo de reset do ambiente após cada episódio (segundos) | 60 |  
| --dataset.num_episodes | Total de episódios a serem gravados | 50 |  

**4. Controles de Teclado Durante a Gravação**

Controle o fluxo de gravação de dados usando atalhos de teclado:

| Tecla | Ação |  
|-----|--------|  
| → (Seta para a Direita) | Encerrar antecipadamente o episódio/reset atual; ir para o próximo. |  
| ← (Seta para a Esquerda) | Cancelar o episódio atual; regravá-lo. |  
| ESC | Parar a sessão imediatamente, codificar os vídeos e enviar o dataset. |  

:::tip

Se o teclado não funcionar, talvez você precise instalar outra versão do pynput.

```bash
pip install pynput==1.6.8
```

:::

**Dicas para Coletar Dados**

- Sugestão de tarefa: Agarrar objetos em diferentes locais e colocá-los em uma caixa.  
- Escala: Grave ≥50 episódios (10 episódios por local).  
- Consistência:  
  - Mantenha as câmeras fixas.  
  - Mantenha um comportamento de preensão idêntico.  
  - Garanta que os objetos manipulados estejam visíveis nos feeds das câmeras.  
- Progressão:  
  - Comece com preensões confiáveis antes de adicionar variações (novos locais, técnicas, ajustes de câmera).  
  - Evite aumentos rápidos de complexidade para prevenir falhas.  

💡 Regra geral: Você deve ser capaz de executar a tarefa apenas olhando para as imagens da câmera.  

Se quiser se aprofundar nesse tópico importante, você pode conferir o [post no blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escrevemos sobre o que torna um bom dataset.

**Solução de Problemas**

Problema específico do Linux:  
Se as teclas Seta para a Direita/Seta para a Esquerda/ESC não responderem durante a gravação:  

- Verifique se a variável de ambiente `$DISPLAY` está definida (veja [limitações do pynput](https://pynput.readthedocs.io/en/latest/limitations.html)).  

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visualizar o dataset

:::tip
Os códigos SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Se você enviou seu dataset para o hub com `--control.push_to_hub=true`, você pode [visualizar seu dataset online](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando e colando o seu repo id obtido por:

```bash
echo ${HF_USER}/so101_test  
```

Se você não enviou com `--dataset.push_to_hub=false`, também pode visualizá-lo localmente com:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/so101_test \
```

Se você enviar com `--dataset.push_to_hub=false`, também pode visualizá-lo localmente com:

```bash
lerobot-dataset-viz \
  --repo-id seeed_123/so101_test \
```

**Aqui, `seeed_123` é o nome personalizado de `repo_id` definido ao coletar dados.**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## Reproduzir um episódio

:::tip
Os códigos SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Um recurso útil é a função `replay`, que permite reproduzir qualquer episódio que você tenha gravado ou episódios de qualquer dataset disponível. Essa função ajuda a testar a repetibilidade das ações do seu robô e avaliar a transferibilidade entre robôs do mesmo modelo.

Você pode reproduzir o primeiro episódio no seu robô com o comando abaixo ou com o exemplo de API:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123 \
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
    --dataset.episode=0 \
```

Seu robô deve reproduzir movimentos semelhantes aos que você gravou.

Neste comando, `dataset.root` especifica o caminho físico para o dataset, e dataset.`repo_id` é o nome personalizado definido durante a coleta de dados.

## Treinar e Avaliar

<details>

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulte [ACT](https://huggingface.co/docs/lerobot/act)

Para treinar uma política para controlar seu robô, use o script [lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py).

**Treinar**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**Se você quiser treinar em um dataset local, certifique-se de que o `repo_id` corresponda ao usado durante a coleta de dados e adicione `--policy.push_to_hub=False`.**

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

:::tip

Se você estiver usando uma GPU RTX série 50, deve adicionar --dataset.video_backend=pyav ao comando de treinamento. Isso contorna APIs ausentes na versão de prévia do torchvision. O comando completo de treinamento deve ser assim:

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000 \
```

:::

Vamos explicar:

- **Especificação do dataset**: Fornecemos o dataset por meio do parâmetro `--dataset.repo_id=${HF_USER}/so101_test`.
- **Passos de treinamento**: Modificamos o número de passos de treinamento usando `--steps=300000`. O algoritmo usa por padrão 800000 passos, e você pode ajustá-lo com base na dificuldade da sua tarefa e observando o loss durante o treinamento.
- **Tipo de política**: Fornecemos a política com `policy.type=act`. Da mesma forma, você pode alternar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`], o que carregará a configuração de `configuration_act.py`. Importante: essa política se adaptará automaticamente aos estados dos motores, ações dos motores e ao número de câmeras do seu robô (por exemplo, `laptop` e `phone`), pois essas informações já estão armazenadas no seu dataset.
- **Seleção de dispositivo**: Fornecemos `policy.device=cuda` porque estamos treinando em uma GPU Nvidia, mas você pode usar `policy.device=mps` para treinar em Apple Silicon.
- **Ferramenta de visualização**: Fornecemos `wandb.enable=true` para visualizar gráficos de treinamento usando o [Weights and Biases](https://docs.wandb.ai/quickstart). Isso é opcional, mas, se você usar, certifique-se de ter feito login executando `wandb login`.

**Avaliar**

:::tip
Os códigos SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Você pode usar a função `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py), mas com um checkpoint de política como entrada. Por exemplo, execute este comando para gravar 10 episódios de avaliação:

```bash
lerobot-record \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

por exemplo:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. O parâmetro `--policy.path` indica o caminho para o arquivo de pesos dos resultados do treinamento da sua política (por exemplo, `outputs/train/act_so101_test/checkpoints/last/pretrained_model`). Se você enviar o arquivo de pesos do resultado do treinamento do modelo para o Hub, também poderá usar o repositório do modelo (por exemplo, `${HF_USER}/act_so100_test`).

2. O nome do dataset `dataset.repo_id` começa com `eval_`. Essa operação registrará separadamente vídeos e dados durante a avaliação, que serão salvos na pasta que começa com `eval_`, como `seeed/eval_test123`.

3. Se você encontrar `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante a fase de avaliação, exclua primeiro a pasta que começa com `eval_` e execute o programa novamente.

4. Ao encontrar `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, observe que palavras-chave como front e side no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o dataset.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</details>

<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) é o modelo base leve para robótica da Hugging Face. Projetado para fácil fine-tuning em conjuntos de dados do LeRobot, ele ajuda a acelerar o seu desenvolvimento!

**Configure seu ambiente**

Instale as dependências do SmolVLA executando:

```bash
pip install -e ".[smolvla]"
```

**Faça o fine-tuning do SmolVLA nos seus dados**

Use o [smolvla_base](https://hf.co/lerobot/smolvla_base), nosso modelo pré-treinado de 450M, e faça o fine-tuning dele nos seus dados. Treinar o modelo por 20k passos levará aproximadamente ~4 horas em uma única GPU A100. Você deve ajustar o número de passos com base no desempenho e no seu caso de uso.

Se você não tiver um dispositivo com GPU, pode treinar usando nosso notebook no [Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb).

Passe seu conjunto de dados para o script de treinamento usando `--dataset.repo_id`. Se você quiser testar sua instalação, execute o seguinte comando, em que usamos um dos conjuntos de dados que coletamos para o [artigo do SmolVLA](https://huggingface.co/papers/2506.01844).

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

:::tip
Você pode começar com um tamanho de batch pequeno e aumentá-lo gradualmente, se a GPU permitir, desde que os tempos de carregamento permaneçam curtos.
:::

Fine-tuning é uma arte. Para uma visão completa das opções de fine-tuning, execute

```bash
lerobot-train --help
```

**Avalie o modelo com fine-tuning e execute-o em tempo real**

Da mesma forma que ao gravar um episódio, é recomendado que você esteja conectado ao HuggingFace Hub. Você pode seguir as etapas correspondentes: [Gravar um conjunto de dados](https://huggingface.co/docs/lerobot/il_robots). Depois de fazer login, você pode executar inferência na sua configuração fazendo:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \ # <- Use your port
  --robot.id=my_blue_follower_arm \ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```

Dependendo da sua configuração de avaliação, você pode configurar a duração e o número de episódios a serem gravados para sua suíte de avaliação.

</details>

<details>
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) é um benchmark projetado para estudar aprendizado contínuo de robôs. A ideia é que os robôs não serão apenas pré-treinados uma vez em uma fábrica; eles precisarão continuar aprendendo e se adaptando com seus usuários humanos ao longo do tempo. Essa adaptação contínua é chamada de aprendizado ao longo da vida na tomada de decisão (LLDM), e é um passo fundamental para construir robôs que se tornem ajudantes realmente personalizados.

- 📄 [Artigo do LIBERO](https://arxiv.org/abs/2306.03310)
- 💻 [Repositório LIBERO original](https://github.com/Lifelong-Robot-Learning/LIBERO)

**Avaliando com LIBERO**

No **LeRobot**, portamos o LIBERO para o nosso framework e o usamos principalmente para **avaliar** o [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla), nosso modelo leve de Visão-Linguagem-Ação.

LIBERO agora faz parte da nossa **simulação com suporte a multi-eval**, o que significa que você pode avaliar suas políticas em um **único conjunto de tarefas** ou em **múltiplos conjuntos de uma vez** com apenas uma flag.

Para instalar o LIBERO, depois de seguir as instruções oficiais do LeRobot, basta fazer: `pip install -e ".[libero]"`

***Avaliação de um único conjunto***

Avalie uma política em um conjunto LIBERO:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` escolhe o conjunto (`libero_object`, `libero_spatial`, etc.).
- `--eval.batch_size` controla quantos ambientes são executados em paralelo.
- `--eval.n_episodes` define quantos episódios serão executados no total.

***Avaliação de múltiplos conjuntos***

Faça o benchmark de uma política em vários conjuntos de uma vez:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Passe uma lista separada por vírgulas para `--env.task` para avaliação em múltiplos conjuntos.

**Exemplo de comando de treinamento**

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```

-----

**Observação sobre renderização**

LeRobot usa MuJoCo para simulação. Você precisa definir o backend de renderização antes do treinamento ou da avaliação:

- `export MUJOCO_GL=egl` → para servidores headless (por exemplo, HPC, nuvem)

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulte [Pi0](https://huggingface.co/docs/lerobot/pi0)

```bash
pip install -e ".[pi]"
```

**Treinar**

```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**Avaliar**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulte [Pi0.5](https://huggingface.co/docs/lerobot/pi05)

```bash
pip install -e ".[pi]"
```

**Treinar**

```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**Avaliar**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulte a documentação oficial: [GR00T N1.5](https://huggingface.co/docs/lerobot/groot).

GR00T N1.5 é um modelo base aberto da NVIDIA para raciocínio robótico mais geral e aprendizado de habilidades. É um modelo de **cross-embodiment**: ele pode receber entradas multimodais como **linguagem** e **imagens**, e executar tarefas de manipulação em diferentes ambientes.

No LeRobot, o ponto-chave é definir o tipo de política como `--policy.type=groot`. Observe que o GR00T N1.5 tem requisitos de ambiente mais altos (ele depende de FlashAttention e requer uma GPU CUDA). É recomendado primeiro colocar ACT / Pi0 para rodar de ponta a ponta e, em seguida, tentar o GR00T.

**Instalação (importante)**

De acordo com a documentação oficial atual, o GR00T N1.5 requer `flash-attn` e só pode ser usado em hardware compatível com CUDA.

Ordem recomendada:

1. Prepare primeiro seu ambiente base (Python, CUDA, drivers, etc.). **Não** instale `lerobot` ainda.
2. Instale o PyTorch para a sua versão do CUDA (diferentes versões do CUDA podem exigir um `--index-url` diferente; siga a página de instalação do PyTorch).

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

3. Instale as dependências de build para `flash-attn` e depois instale o próprio `flash-attn`.

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

4. Instale o LeRobot com as dependências opcionais `groot` (`lerobot[groot]`).

```bash
pip install "lerobot[groot]"
```

:::tip
Se a instalação do `flash-attn` falhar, geralmente é devido a (1) incompatibilidade entre PyTorch/CUDA, (2) dependências de build ausentes ou (3) um ambiente muito novo/muito antigo. Verifique primeiro a documentação oficial do GR00T e as instruções de instalação do PyTorch.
:::

**Treinamento (fine-tuning)**

A documentação oficial fornece um exemplo multi-GPU com `accelerate launch --multi_gpu ...`. Se você tiver apenas uma única GPU, ainda pode começar fazendo primeiro um experimento de processo único funcionar (o suporte/argumentos exatos dependem da documentação oficial).

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

**Validação no robô (avaliação)**

Após o treinamento, você pode avaliar e gravar replays com `lerobot-record` como em outras políticas. A documentação oficial inclui um exemplo bimanual; usuários SO101 de braço único não precisam de argumentos do tipo `left_arm_port/right_arm_port`.

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_port=/dev/ttyACM1 \
  --robot.right_arm_port=/dev/ttyACM0 \
  --robot.id=bimanual_follower \
  --robot.cameras='{ right: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}, left: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}, top: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_bimanual \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab and handover the red cube to the other arm" \
  --policy.path=${HF_USER}/groot-bimanual \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

Licença: Apache 2.0 (a mesma do repositório GR00T original).

</details>

<details>
<summary>(Opcional) Fine-Tuning Eficiente em Parâmetros (PEFT)</summary>

PEFT (Parameter-Efficient Fine-Tuning) é uma família de métodos e ferramentas que ajudam um grande modelo pré-treinado a se adaptar a novas tarefas **sem atualizar todos os parâmetros**. Para políticas LeRobot pré-treinadas (por exemplo, SmolVLA, Pi0), você geralmente pode treinar apenas um pequeno conjunto de parâmetros “adaptadores” (por exemplo, LoRA) para reduzir o uso de VRAM e o custo de treinamento, ainda assim alcançando desempenho próximo ao do fine-tuning completo.

**Instalação**

Depois de instalar o LeRobot com as dependências opcionais `peft`, você pode usar argumentos relacionados a PEFT no treinamento.

```bash
pip install -e ".[peft]"
```

```bash
pip install "lerobot[peft]"
```

Mais conceitos e métodos: [🤗 documentação PEFT](https://huggingface.co/docs/peft/index).

**Exemplo: fazer fine-tuning do SmolVLA com LoRA (subtarefa LIBERO `libero_spatial`)**

Este exemplo faz fine-tuning de `lerobot/smolvla_base` com LoRA no dataset `HuggingFaceVLA/libero`. Os nomes dos argumentos dependem da versão do LeRobot; é recomendável também verificar `lerobot-train --help`.

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**Principais argumentos de PEFT**

- `--peft.method_type`: seleciona o método PEFT. LoRA (Low-Rank Adapter) é uma das opções mais comuns.
- `--peft.r`: rank do LoRA. Um rank mais alto geralmente aumenta a capacidade, mas também aumenta a contagem de parâmetros e o uso de VRAM.

**Escolher em quais camadas/módulos injetar LoRA (opcional)**

Por padrão, o PEFT geralmente injeta LoRA nas camadas de projeção mais importantes (por exemplo, atenção `q_proj`, `v_proj`), e pode também cobrir projeções de estado/ação. Se você quiser personalizar, use `--peft.target_modules`.

Padrões comuns:

1) Fornecer uma lista de sufixos de nomes de módulo (exemplo):

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) Fornecer uma regex (exemplo; ajuste para os nomes reais dos módulos no modelo):

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**Treinar completamente alguns módulos (opcional)**

Se você quiser que alguns módulos sejam totalmente treinados (em vez de apenas injetar LoRA), use `--peft.full_training_modules`. Por exemplo, treinar completamente apenas `state_proj`:

```bash
--peft.full_training_modules="['state_proj']"
```

**Sugestão de taxa de aprendizado (regra prática)**

Taxas de aprendizado para LoRA costumam ser ~10× maiores do que para fine-tuning completo. Por exemplo, se o fine-tuning completo normalmente usa `1e-4`, o LoRA pode começar em `1e-3`. Se você usar um agendador de taxa de aprendizado, a taxa final costuma ficar em torno de `1e-4` como referência.

</details>

<details>
<summary>(Opcional) Treinamento Multi-GPU com Accelerate</summary>

**Etapas de treinamento**

Método 1: usar flags de CLI.

1. Instale `accelerate` no seu ambiente `lerobot`.

```bash

pip install accelerate

```

2. Inicie o treinamento multi-GPU com `accelerate launch` e as flags `--multi_gpu` e `--num_processes`.

```bash

accelerate launch \

--multi_gpu \

--num_processes=2 \

$(which lerobot-train) \

--dataset.repo_id=${HF_USER}/my_dataset \

--policy.type=act \

--policy.repo_id=${HF_USER}/my_trained_policy \

--output_dir=outputs/train/act_multi_gpu \

--job_name=act_multi_gpu \

--wandb.enable=true

```

Principais flags do `accelerate`:

- `--multi_gpu`: habilita treinamento multi-GPU.
- `--num_processes`: número de GPUs a usar (geralmente igual ao número de GPUs disponíveis na máquina).
- `--mixed_precision=fp16`: usa precisão mista fp16 (se o seu hardware suportar, você também pode usar bf16).

Observação: **bf16 requer suporte de hardware** e não está disponível em todas as GPUs.

| Precisão | Suporte de hardware |
|--|--|
| fp16 | Suportado por quase todas as GPUs NVIDIA |
| bf16 | Suportado apenas por algumas GPUs mais novas (Ampere e posteriores) |

Se a sua GPU não suportar bf16, escolha fp16 na configuração do Accelerate ou especifique fp16 explicitamente.

Método 2: usar um arquivo de configuração do `accelerate` (opcional).

Se você treina com múltiplas GPUs com frequência, pode salvar a configuração para evitar digitar repetidamente as mesmas flags.

`accelerate config` salva a configuração do seu hardware (número de GPUs, precisão mista, etc.) em um arquivo de configuração, para que você não precise reinserir essas opções ao executar `accelerate launch` depois. Isso não altera a lógica de treinamento do LeRobot; apenas reduz entradas repetidas na CLI.

Se você só usa multi-GPU ocasionalmente (ou se esta é a sua primeira vez), pular esta etapa é totalmente aceitável.

Na configuração interativa, para o cenário comum de “máquina única + múltiplas GPUs”, as escolhas típicas são:

- Ambiente de computação: Esta máquina
- Número de máquinas: 1
- Número de processos: número de GPUs que você quer usar
- IDs de GPU a usar: pressione Enter (usar todas as GPUs)
- Precisão mista: prefira fp16; escolha bf16 apenas se você souber que sua GPU o suporta

```bash

accelerate config

```

```bash

accelerate launch $(which lerobot-train) \

--dataset.repo_id=${HF_USER}/my_dataset \

--policy.type=act \

--policy.repo_id=${HF_USER}/my_trained_policy \

--output_dir=outputs/train/act_multi_gpu \

--job_name=act_multi_gpu \

--wandb.enable=true

```

**Como o multi-GPU afeta hiperparâmetros (e como ajustar)**

O LeRobot não ajusta automaticamente a taxa de aprendizado ou os passos de treinamento com base no número de GPUs, para evitar alterar silenciosamente o comportamento de treinamento. Isso difere de alguns outros frameworks de treinamento distribuído.

Se você quiser ajustar hiperparâmetros para multi-GPU, uma abordagem comum é:

- **Passos**: o batch size efetivo aumenta (batch_size × num_gpus), então você pode reduzir os passos aproximadamente proporcionalmente a `1 / num_gpus` para manter um número total semelhante de amostras vistas.

```bash

accelerate launch --num_processes=2 $(which lerobot-train) \

--batch_size=8 \

--steps=50000 \

--dataset.repo_id=lerobot/pusht \

--policy=act

```

- **Taxa de aprendizado**: como cada passo usa mais amostras, você geralmente pode escalar a taxa de aprendizado linearmente com o número de GPUs:
  new_lr = single_gpu_lr × num_gpus

```bash

accelerate launch --num_processes=2 $(which lerobot-train) \

--optimizer.lr=2e-4 \

--dataset.repo_id=lerobot/pusht \

--policy=act

```

Essas não são regras rígidas; são heurísticas comuns. Se você não tiver certeza, também pode manter a taxa de aprendizado e o número de passos inalterados, desde que o treinamento permaneça estável.

Para configuração avançada e solução de problemas, consulte a documentação do Accelerate: [Accelerate](https://huggingface.co/docs/accelerate/index).

</details>

<details>

<summary>(Opcional) Inferência Assíncrona</summary>

Quando a inferência assíncrona não está habilitada, o fluxo de controle do LeRobot pode ser entendido como **inferência sequencial / síncrona convencional**: a política primeiro prediz um segmento de ações, depois executa esse segmento e, somente depois disso, espera pela próxima predição.

Para modelos maiores, isso pode fazer com que o robô faça uma pausa perceptível enquanto espera pelo próximo bloco de ações.

O objetivo da inferência assíncrona é permitir que o robô execute o bloco de ações atual enquanto calcula o próximo com antecedência, reduzindo assim o tempo ocioso e melhorando a capacidade de resposta.

A inferência assíncrona é aplicável a políticas suportadas pelo LeRobot, incluindo **políticas de ação baseadas em blocos** como **ACT, OpenVLA, Pi0 e SmolVLA**.

Como a inferência é desacoplada do controle real, a inferência assíncrona também ajuda a aproveitar máquinas com recursos de computação mais fortes para realizar a inferência para o robô.

Você pode ler mais sobre inferência assíncrona no [blog da Hugging Face](https://huggingface.co/blog/async-robot-inference)

Primeiro, vamos apresentar alguns conceitos básicos:

- **Cliente**: conecta-se ao braço robótico e às câmeras, coleta dados de observação (como imagens e poses do robô), envia essas observações para o servidor e recebe os blocos de ações retornados pelo servidor, executando-os em ordem.

- **Servidor**: o dispositivo que fornece recursos de computação. Ele recebe dados da câmera e do braço robótico, realiza inferência (isto é, computação) para produzir blocos de ações e os envia de volta para o cliente. Pode ser o mesmo dispositivo conectado ao braço robótico e às câmeras, outro computador na mesma rede local ou um servidor em nuvem alugado na Internet.

- **Bloco de ações**: uma sequência de comandos de ação do braço robótico obtida por inferência de política no lado do servidor.

Três cenários de implantação para inferência assíncrona

1. Implantação em máquina única

O robô, as câmeras, o cliente e o servidor estão todos no mesmo dispositivo.

Este é o caso mais simples: o servidor pode escutar em 127.0.0.1, e o cliente também pode se conectar a 127.0.0.1:port. O exemplo de comando na documentação oficial é para este cenário.

2. Implantação em LAN

O robô e as câmeras estão conectados a um dispositivo leve, enquanto o servidor de política é executado em outra máquina de alta capacidade de computação na mesma rede local.

Nesse caso, o servidor deve escutar em um endereço acessível por outras máquinas, e o cliente também deve se conectar ao IP de LAN do servidor, em vez de 127.0.0.1.

3. Implantação entre redes / em nuvem

O servidor de política é executado em um host de nuvem publicamente acessível, e o cliente se conecta a ele pela Internet pública.

Essa abordagem pode usar a GPU mais potente do host de nuvem. Quando as condições de rede são boas, o tempo de ida e volta da rede (latência de rede) às vezes pode ser relativamente pequeno em comparação com o tempo de inferência, mas isso depende do seu ambiente de rede real.

Nota de segurança: o pipeline de inferência assíncrona do LeRobot tem um risco relacionado a gRPC sem autenticação + desserialização com pickle. Se houver informações ou serviços importantes no servidor, não é recomendado expor o serviço diretamente à Internet em uma implantação pública. Uma abordagem mais segura é usar VPN ou tunelamento SSH, ou pelo menos restringir ao máximo os IPs de origem permitidos no grupo de segurança ao IP público do seu próprio cliente.

### Introdução à implantação de inferência assíncrona

#### Etapa 1: Configuração do ambiente

Primeiro, use pip para instalar as dependências adicionais necessárias para inferência assíncrona. Tanto o cliente quanto o servidor precisam ter lerobot instalado junto com as dependências extras:

```bash
pip install -e ".[async]"
```

#### Etapa 2: Configuração e verificações de rede

1. **Problemas de proxy**

Se o seu terminal atual estiver configurado para usar um proxy e a conexão se comportar de forma anormal, você pode desativar temporariamente as variáveis de ambiente de proxy:

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

Observação: o comando acima afeta apenas a sessão de terminal atual. Se você abrir outra janela de terminal, precisará executá-lo novamente.

2. **Abrir a porta no firewall / grupo de segurança**

Implantação em máquina única: geralmente pode ser ignorado.

Implantação em LAN: você precisa abrir a porta de escuta no lado do servidor.

Exemplo de abertura da porta de escuta em uma configuração de LAN (executar no lado do servidor):

```bash
sudo ufw allow 8080/tcp
```

Implantação em nuvem: você precisa abrir essa porta no grupo de segurança do servidor em nuvem, e é recomendável restringir ao máximo os IPs de origem.

Se você estiver executando em um servidor em nuvem:

Abra a porta 8080 no grupo de segurança do console de gerenciamento do servidor ou use outra porta que já esteja aberta. Diferentes plataformas de serviços em nuvem lidam com isso de maneiras diferentes; consulte a documentação do seu provedor de nuvem.

3. **Confirmar o endereço IP**

Esta etapa pode ser ignorada para implantação em máquina única (o endereço IP para uma única máquina é sempre 127.0.0.1).

Se for uma implantação em LAN:

Você precisa confirmar e memorizar o endereço IP de LAN do lado do servidor. Quando o cliente se conectar, o que deve ser preenchido é o IP de LAN da máquina que executa o policy_server, não o IP do próprio cliente.

Linux / Jetson / Raspberry Pi:

```bash
hostname -I
```

Se forem exibidos vários endereços, geralmente escolha aquele correspondente à interface de rede de LAN atual, por exemplo 192.168.x.x.

Você também pode usar:

```bash
ip addr
```

para visualizar o campo inet sob a interface de rede atualmente conectada.

Windows:

```shell
ipconfig
```

Encontre um campo como Endereço IPv4 . . . . . . . . . . . : 192.168.14.140; esse é o endereço IP de LAN dessa máquina.

macOS:

```bash
ifconfig
```

Encontre o campo inet correspondente à interface de rede atualmente conectada; esse é o endereço IP de LAN.

Precisamos memorizar o endereço IP de LAN do lado do servidor. Usaremos `<LAN IP address>` para nos referir a ele.

Se for uma implantação em servidor em nuvem:

Procure o IP público no painel de controle do servidor. Geralmente é chamado de uma das seguintes formas:

Public IPv4

External IP

Public IP address

EIP

Public IP

Precisamos memorizar o endereço IP público. Usaremos` <server public IP> `para nos referir a ele.

4. **Teste de conexão**

Implantação em máquina única: esta etapa pode ser ignorada

Implantação em LAN / nuvem: é recomendável testar, a partir do lado do cliente, se a porta do servidor é alcançável. Exemplos de testes são os seguintes:

Exemplo de LAN: executar no lado do cliente

```bash
nc -vz <LAN IP address> 8080
```

Exemplo em nuvem: executar no lado do cliente

```bash
nc -vz <server public IP> 8080
```

#### Etapa 3: Iniciar o serviço

**Cenário A: Implantação em máquina única**

Inicie o serviço local em um terminal:

```bash
python -m lerobot.async_inference.policy_server \
--host=127.0.0.1 \
--port=8080
```

Depois que ele iniciar com sucesso, você precisa manter esse terminal aberto. Será necessário abrir um novo terminal para executar outros comandos.

**Cenário B: Implantação em LAN**

Executar no lado do servidor:

```bash
python -m lerobot.async_inference.policy_server \
--host=0.0.0.0 \
--port=8080
```

Nesse caso, quando o cliente se conectar, o --server_address deve ser o endereço IP de LAN do lado do servidor, isto é,`<LAN IP address>:8080`.

**Cenário C: Implantação em servidor em nuvem**

Executar no lado do servidor:

```bash
python -m lerobot.async_inference.policy_server \
--host=0.0.0.0 \
--port=8080
```

Nesse caso, quando o cliente se conectar, o --server_address deve ser o endereço IP público do servidor, isto é, `<server public IP>:8080`.

#### Etapa 4: Escolher parâmetros de inferência

Executar no lado do cliente:

```bash
python -m lerobot.async_inference.robot_client \
--server_address=<ip address>:8080 \
--robot.type=so100_follower \
--robot.port=/dev/tty.usbmodem585A0076841 \
--robot.id=follower_so100 \
--robot.cameras="{ laptop: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}, phone: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \
--task="dummy" \
--policy_type=your_policy_type \
--pretrained_name_or_path=user/model \
--policy_device=cuda \
--actions_per_chunk=50 \
--chunk_size_threshold=0.5 \
--aggregate_fn_name=weighted_average \
--debug_visualize_queue_size=True
```

Explicações dos parâmetros:

- `--server_address`

Especifica o endereço e a porta do servidor de política. `<ip address>` deve ser substituído por 127.0.0.1 (máquina local), `<LAN IP address>`(LAN) ou`<server public IP>` (servidor em nuvem).

- `--robot.type, --robot.port, --robot.id, --robot.cameras`

Parâmetros de dispositivos de hardware. Eles devem ser mantidos consistentes com os parâmetros usados durante a coleta do conjunto de dados.

- `--task`

A descrição da tarefa. Políticas visão-linguagem como SmolVLA podem determinar o alvo da ação com base no texto da tarefa.

- `--policy_type`

Substitua isto pelo nome específico da política, por exemplo:

- smolvla

- act

- `--pretrained_name_or_path`

Esse valor deve ser substituído pelo caminho do modelo no lado do servidor ou por um caminho de modelo no Hugging Face.

- `--policy_device`

Especifica o dispositivo de inferência usado no lado do servidor.

Pode ser cuda, mps ou cpu.

- `--actions_per_chunk=50`

Especifica quantas ações são produzidas em cada inferência.

Quanto maior esse valor:

Vantagem: o buffer de ações é mais abundante, tornando menos provável que se esgote
Desvantagem: o horizonte de predição é maior, então o erro de controle pode se acumular de forma mais perceptível

- `--chunk_size_threshold=0.5`

Especifica quando solicitar o próximo bloco de ações ao servidor.

Este é um limite, geralmente no intervalo de 0 a 1.

Pode ser entendido como: quando a proporção restante da fila de ações atual cai abaixo desse limite, o cliente enviará uma nova observação com antecedência e solicitará o próximo bloco de ações.

Defini-lo como 0.5 aqui significa:

quando o bloco de ações atual estiver aproximadamente pela metade consumido

o cliente começa a solicitar o próximo bloco de ações

Quanto maior esse valor, mais frequentemente as solicitações são enviadas e mais responsivo o sistema se torna, mas a carga no servidor também aumenta.

Quanto menor esse valor, mais o comportamento se aproxima da inferência síncrona.

- `--aggregate_fn_name=weighted_average`

Especifica o método de agregação para intervalos de ações sobrepostos.

Na inferência assíncrona, quando o bloco de ações antigo ainda não foi totalmente executado, o novo bloco de ações já pode ter chegado.

Nesse caso, os dois blocos se sobrepõem em parte do intervalo de tempo, e é necessária uma função de agregação para combiná-los na ação final executada.

O significado de weighted_average é:

usar uma média ponderada para fundir a parte sobreposta.

Isso geralmente torna a troca de ações mais suave e reduz mudanças bruscas.

- `--debug_visualize_queue_size=True`

Define se o tamanho da fila de ações será visualizado em tempo de execução.

Quando ativado, permite ver de forma mais direta se a fila atinge o fundo com frequência, o que ajuda a ajustar actions_per_chunk e chunk_size_threshold.

#### Etapa 5: Ajustar parâmetros com base no comportamento do robô

Na inferência assíncrona, há dois parâmetros adicionais que precisam de ajuste e que não existem na inferência síncrona:

Parâmetro Valor inicial sugerido Descrição

actions_per_chunk 50 Quantas ações a política produz de uma vez. Valores típicos: 10–50.

chunk_size_threshold 0.5 Quando a proporção restante da fila de ações é ≤ chunk_size_threshold, o cliente envia uma nova solicitação de bloco de ações. O intervalo de valores é [0, 1].

Quando --debug_visualize_queue_size=True, a mudança no tamanho da fila de ações será plotada em tempo de execução.

O que a inferência assíncrona precisa equilibrar é: a velocidade com que o servidor gera blocos de ações deve ser maior ou igual à velocidade com que o cliente consome blocos de ações. Caso contrário, a fila de ações ficará vazia e o robô começará a engasgar novamente (isso pode ser visto como a curva tocando o fundo na visualização da fila).

A velocidade com que o servidor gera blocos de ações é afetada por fatores como tamanho do modelo, tipo de dispositivo, VRAM / memória e poder de computação da GPU.

A velocidade com que o cliente consome blocos de ações é afetada pelos fps de execução configurados.

Se a fila frequentemente ficar vazia, você precisa aumentar actions_per_chunk, aumentar chunk_size_threshold ou reduzir os fps.

Se a curva da fila oscilar com frequência, mas as ações restantes na fila forem sempre suficientes, você pode diminuir adequadamente chunk_size_threshold.

Em geral:

a faixa empírica para actions_per_chunk é 10–50

a faixa empírica para chunk_size_threshold é 0,5–0,7; ao ajustar, é recomendável começar em 0,5 e aumentá-la gradualmente

</details>

Se você encontrar o seguinte erro:

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

Tente executar o seguinte comando para resolvê-lo:

```bash
pip install datasets==2.19
```

O treinamento deve levar várias horas. Você encontrará checkpoints em `outputs/train/act_so100_test/checkpoints`.

Para retomar o treinamento a partir de um checkpoint, abaixo está um comando de exemplo para retomar a partir do checkpoint `last` da política `act_so101_test`:

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**Fazer upload dos checkpoints da política**

Quando o treinamento terminar, faça upload do checkpoint mais recente com:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

Você também pode fazer upload de checkpoints intermediários com:

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```

## FAQ

- Se você estiver seguindo esta documentação/tutorial, faça git clone do repositório GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. O repositório recomendado nesta documentação é uma versão estável verificada; o repositório oficial do Lerobot é continuamente atualizado para a versão mais recente, o que pode causar problemas imprevistos, como versões de conjunto de dados diferentes, comandos diferentes, etc.

- Se você encontrar o seguinte erro ao calibrar os IDs dos servos:

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  Verifique cuidadosamente se o cabo de comunicação está conectado corretamente ao servo e se a fonte de alimentação está fornecendo a tensão correta.

- Se você encontrar:

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  E você puder ver que ACM0 existe ao executar `ls /dev/ttyACM*`, isso significa que você esqueceu de conceder permissões à porta serial. Digite `sudo chmod 666 /dev/ttyACM*` no terminal para corrigir isso.

- Se você encontrar:

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```

  Instale o ffmpeg 7.1.1 usando `conda install ffmpeg=7.1.1 -c conda-forge`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- Se você encontrar:

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  Você precisa verificar se o braço robótico na porta correspondente está ligado e se os cabos de dados dos servos de barramento estão soltos ou desconectados. Se a luz de um servo não estiver acesa, isso significa que o cabo do servo anterior está solto.

- Se você encontrar o seguinte erro ao calibrar o braço robótico:

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  Desligue e reinicie o braço robótico e tente calibrar novamente. Esse método também pode ser usado se o ângulo MAX atingir um valor de dezenas de milhares durante a calibração. Se isso não funcionar, você precisará recalibrar os servos correspondentes, incluindo a calibração do ponto médio e a gravação do ID.

- Se você encontrar durante a fase de avaliação:

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  Exclua primeiro a pasta que começa com `eval_` e execute o programa novamente.

- Se você encontrar durante a fase de avaliação:

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  Observe que palavras-chave como "front" e "side" no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o conjunto de dados.

- Se você tiver reparado ou substituído partes do braço robótico, exclua completamente os arquivos em `~/.cache/huggingface/lerobot/calibration/robots` ou `~/.cache/huggingface/lerobot/calibration/teleoperators` e recalibre o braço robótico. Caso contrário, mensagens de erro podem aparecer, pois as informações de calibração são armazenadas em arquivos JSON nesses diretórios.

- Treinar ACT em 50 conjuntos de dados leva aproximadamente 6 horas em um laptop com uma RTX 3060 (8GB) e cerca de 2–3 horas em computadores com GPUs RTX 4090 ou A100.

- Durante a coleta de dados, garanta que a posição da câmera, o ângulo e a iluminação ambiente sejam estáveis. Reduza a quantidade de fundo instável e de pedestres capturados pela câmera, pois mudanças excessivas no ambiente de implantação podem fazer com que o braço robótico não consiga agarrar corretamente.

- Para o comando de coleta de dados, garanta que o parâmetro `num-episodes` esteja configurado para coletar dados suficientes. Não pause manualmente no meio, pois a média e a variância dos dados são calculadas somente após a conclusão da coleta, e são necessárias para o treinamento.

- Se o programa indicar que não consegue ler dados de imagem da câmera USB, certifique-se de que a câmera USB não esteja conectada por meio de um hub. A câmera USB deve estar conectada diretamente ao dispositivo para garantir alta velocidade de transmissão de imagem.

- Se você encontrar um bug como `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, você pode fazer downgrade da versão do rerun para resolver o problema.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
Se você encontrar problemas de software ou de dependências de ambiente que não possam ser resolvidos, além de verificar a seção de FAQ no final deste tutorial, relate prontamente o problema na [plataforma LeRobot](https://github.com/huggingface/lerobot) ou no [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).
:::

## Citação

[Documento em Chinês](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

Projeto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Projeto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
