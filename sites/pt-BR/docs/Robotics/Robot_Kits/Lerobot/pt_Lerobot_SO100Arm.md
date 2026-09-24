---
description: Este wiki fornece o tutorial de montagem e depuração para o SO ARM100 e realiza coleta de dados e treinamento dentro do framework Lerobot.
title: Como usar o braço robótico SO10xArm no Lerobot
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m
sku: E24122002, 114993609, 114993608, 108090023, 108090003, 101090141, 101090142
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
createdAt: '2025-06-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/pt-br/lerobot_so100m/
---

# Introdução ao uso dos braços robóticos SO-ARM100 e SO-ARM101 com LeRobot

:::tip
A manutenção deste tutorial foi atualizada para a versão mais recente do [lerobot](https://huggingface.co/docs/lerobot/index). Se você quiser consultar o tutorial da versão anterior, clique [aqui](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/).
:::

## Introdução

O [SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) é um projeto de braço robótico totalmente open-source lançado pela [TheRobotStudio](https://www.therobotstudio.com/). Ele inclui o braço seguidor e o braço robótico líder, e também fornece arquivos detalhados para impressão 3D e guias de operação. O [LeRobot](https://github.com/huggingface/lerobot/tree/main) é dedicado a fornecer modelos, conjuntos de dados e ferramentas para robótica no mundo real em PyTorch. Seu objetivo é reduzir a barreira de entrada em robótica, permitindo que todos contribuam e se beneficiem do compartilhamento de conjuntos de dados e modelos pré-treinados. O LeRobot integra metodologias de ponta validadas para aplicação no mundo real, com foco em aprendizado por imitação. Ele disponibiliza um conjunto de modelos pré-treinados, conjuntos de dados com demonstrações coletadas por humanos e ambientes de simulação, permitindo que os usuários comecem sem a necessidade de montar um robô. Nas próximas semanas, a intenção é ampliar o suporte para robótica no mundo real nos robôs mais econômicos e competentes atualmente disponíveis.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introdução aos projetos

O kit de robô inteligente SO-ARM10x e reComputer Jetson AI combina perfeitamente o controle de braço robótico de alta precisão com uma poderosa plataforma de computação de IA, fornecendo uma solução completa de desenvolvimento de robôs. Este kit é baseado na plataforma Jetson Orin ou AGX Orin, combinada com o braço robótico SO-ARM10x e o framework de IA LeRobot, oferecendo aos usuários um sistema de robô inteligente aplicável a múltiplos cenários, como educação, pesquisa e automação industrial.
Este wiki fornece o tutorial de montagem e depuração para o SO ARM10x e realiza coleta de dados e treinamento dentro do framework Lerobot.

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
3. **Recursos de aprendizado abundantes**: Fornece recursos de aprendizado open-source abrangentes, como guias de montagem e calibração, e tutoriais para teste, coleta de dados, treinamento e implantação, ajudando os usuários a começar rapidamente e desenvolver aplicações robóticas.
4. **Compatível com Nvidia**: Faça a implantação deste kit de braço com o reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicação em múltiplos cenários**: É aplicável a áreas como educação, pesquisa científica, produção automatizada e robótica, ajudando os usuários a alcançar operações robóticas eficientes e precisas em várias tarefas complexas.

## Novidades：

- Otimização da fiação: Em comparação com o SO-ARM100, o SO-ARM101 apresenta uma fiação aprimorada que evita problemas de desconexão anteriormente observados na junta 3. O novo design de fiação também não limita mais a amplitude de movimento das juntas.
- Diferentes relações de engrenagem para o braço líder: O braço líder agora usa motores com relações de engrenagem otimizadas, melhorando o desempenho e eliminando a necessidade de caixas de engrenagens externas.
- Suporte a novas funcionalidades: O braço líder agora pode seguir o braço seguidor em tempo real, o que é crucial para a futura política de aprendizado, na qual um humano pode intervir e corrigir as ações do robô.

:::caution

A Seeed Studio é responsável apenas pela qualidade do hardware em si. Os tutoriais são rigorosamente atualizados de acordo com a documentação oficial. Se você encontrar problemas de software ou de dependências de ambiente que não possam ser resolvidos, além de verificar a seção de FAQ no final deste tutorial, relate o problema prontamente na [plataforma LeRobot](https://github.com/huggingface/lerobot) ou no [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).

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

Se você comprar a versão Arm Kit, ambas as fontes de alimentação são de 5V. Se você comprar a versão Arm Kit Pro, use a fonte de alimentação de 5V para a calibração e todas as etapas do braço robótico líder, e a fonte de 12V para a calibração e todas as etapas do braço robótico seguidor.

:::

## Lista de materiais (BOM)

| Peça | Quantidade | Incluído|
|--|--|--|
|  Servo Motos | 12 | ✅ |
| Placa de controle de motor | 2 | ✅ |
| Cabo USB-C 2 pcs | 1 | ✅ |
| Fonte de alimentação2 | 2 | ✅ |
| Presilha de mesa| 4 | ✅ |
| Peças impressas em 3D do braço | 1 | Opção |

## Ambiente inicial do sistema

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.12
- Torch 2.6+  

**Para Jetson Orin:**

- Jetson JetPack 6.0 e 6.1, não suporta 6.1
- Python 3.12
- Torch 2.3+

## Sumário

  [A. Guia de impressão 3D](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#install-lerobot)

  [B. Instalar LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#install-lerobot)

  [C. Configurar os motores](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#configure-the-motors)

  [D. Montagem](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#assembly)

  [E. Calibrar](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#calibrate)

  [F. Teleoperar](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#teleoperate)

  [G. Adicionar câmeras](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#add-cameras)

  [H. Gravar o conjunto de dados](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#record-the-dataset)

  [I. Visualizar o conjunto de dados](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#visualize-the-dataset)

  [J. Reproduzir um episódio](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#replay-an-episode)

  [K. Treinar uma política](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#train-a-policy)

  [L. Avaliar sua política](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/#evaluate-your-policy)

## Guia de impressão 3D

:::caution
Após a atualização oficial do SO101, o SO100 não terá mais suporte e os arquivos-fonte serão excluídos conforme o oficial, mas os arquivos-fonte ainda podem ser encontrados em nosso [Makerworld](https://makerworld.com/zh/models/908660). No entanto, para usuários que compraram anteriormente o SO100, os tutoriais e métodos de instalação permanecem compatíveis. A impressão do SO101 é totalmente compatível com a instalação do kit de motores do SO100.
:::

### Passo 1: Escolher uma impressora

Os arquivos STL fornecidos estão prontos para impressão em muitas impressoras FDM. Abaixo estão as configurações testadas e sugeridas, embora outras também possam funcionar.

- Material: PLA+
- Diâmetro do bico e precisão: bico de 0,4 mm com altura de camada de 0,2 mm ou bico de 0,6 mm com altura de camada de 0,4 mm.
- Densidade de preenchimento: 15%  

### Passo 2: Configurar a impressora

- Certifique-se de que a impressora esteja calibrada e que o nivelamento da mesa esteja corretamente ajustado usando as instruções específicas da impressora.
- Limpe a mesa de impressão, certificando-se de que esteja livre de poeira ou gordura. Se limpar a mesa com água ou outro líquido, seque-a.
- Se a sua impressora recomendar, use um bastão de cola padrão e aplique uma camada fina e uniforme de cola em toda a área de impressão da mesa. Evite acúmulos ou aplicação irregular.
- Carregue o filamento da impressora usando as instruções específicas da impressora.
- Certifique-se de que as configurações da impressora correspondam às sugeridas acima (a maioria das impressoras possui várias configurações, então escolha as que mais se aproximam).
- Configure para suportes em todos os lugares, mas ignore inclinações maiores que 45 graus em relação à horizontal.
- Não deve haver suportes nos furos de parafuso com eixos horizontais.

### Etapa 3: Imprimir as peças

Todas as peças para o líder ou seguidor já estão contidas em um único arquivo para facilitar a impressão 3D, corretamente orientadas com o eixo Z para cima para minimizar suportes.

- Para mesas de impressão de 220mm x 220mm (como a Ender), imprima estes arquivos:
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para mesas de impressão de 205mm x 250mm (como a Prusa/Up):
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## Instalar o LeRobot

Ambientes como pytorch e torchvision precisam ser instalados com base na sua versão do CUDA.

1. Instale o Miniconda:
Para Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

Ou, para X86 Ubuntu 22.04:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Crie e ative um novo ambiente conda para o lerobot

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

3. Clone o Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Ao usar o miniconda, instale o ffmpeg no seu ambiente:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Isso geralmente instala o ffmpeg 7.X para a sua plataforma, compilado com o codificador libsvtav1. Se o libsvtav1 não for suportado (verifique os codificadores suportados com ffmpeg -encoders), você pode:

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

Como instalar o ambiente lerobot via pip desinstalará o Pytorch e o Torchvision originais e instalará as versões de CPU do Pytorch e Torchvision, você precisa realizar uma verificação em Python.

```python
import torch
print(torch.cuda.is_available())
```

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
Agora você deve conectar a fonte de alimentação de 5V ou 12V ao barramento do motor. 5V para os motores STS3215 7.4V e 12V para os motores STS3215 12V. Observe que o braço líder sempre usa os motores de 7.4V, portanto, tenha cuidado para conectar a fonte de alimentação correta se você tiver motores de 12V e 7.4V, caso contrário você pode queimar seus motores! Agora, conecte o barramento do motor ao seu computador via USB. Observe que o USB não fornece nenhuma alimentação, e tanto a fonte de alimentação quanto o USB precisam estar conectados.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***A seguir estão as etapas de calibração por código, por favor calibre com o servo de fiação de referência na imagem acima***

Encontre as portas USB associadas aos seus braços
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

Talvez seja necessário conceder acesso às portas USB executando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configure seus motores**

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
Mais uma vez, certifique-se de que os IDs das juntas dos servos e as relações de engrenagem correspondam estritamente às do SO-ARM101.
:::

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

Conforme instruído, conecte o motor da garra. Certifique-se de que ele seja o único motor conectado à placa e de que o próprio motor ainda não esteja em daisy-chain com nenhum outro motor. Ao pressionar [Enter], o script definirá automaticamente o id e o baudrate para esse motor.

Você deverá então ver a seguinte mensagem:

```bash
'gripper' motor id set to 6
```

Seguido pela próxima instrução:

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

Você pode desconectar o cabo de 3 pinos da placa controladora, mas pode deixá-lo conectado ao motor da garra na outra extremidade, pois ele já estará no lugar certo. Agora, conecte outro cabo de 3 pinos ao motor de rotação do punho e conecte-o à placa controladora. Assim como no motor anterior, certifique-se de que ele seja o único motor conectado à placa e de que o próprio motor não esteja conectado a nenhum outro.

:::caution
Repita a operação para cada motor conforme instruído.
:::

:::tip
Verifique sua fiação em cada etapa antes de pressionar Enter. Por exemplo, o cabo da fonte de alimentação pode se desconectar enquanto você manipula a placa.
:::

Quando terminar, o script simplesmente será concluído, momento em que os motores estarão prontos para uso. Agora você pode conectar o cabo de 3 pinos de cada motor ao próximo, e o cabo do primeiro motor (o “shoulder pan” com id=1) à placa controladora, que agora pode ser fixada à base do braço.

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

- O processo de montagem de braço duplo do SO-ARM101 é o mesmo do SO-ARM100. As únicas diferenças são a adição de presilhas de cabo no SO-ARM101 e as diferentes relações de engrenagem dos servos de junta no Braço Líder. Portanto, tanto o SO100 quanto o SO101 podem ser instalados consultando o conteúdo a seguir
- Antes da montagem, verifique novamente o modelo e a relação de redução do seu motor. Se você comprou o SO100, pode ignorar esta etapa. Se você comprou o SO101, verifique a tabela a seguir para distinguir F1 a F6 e L1 a L6.

:::

  | Modelo do Servo                            | Relação de Engrenagem | Juntas Correspondentes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Se você comprou o **SO101 Arm Kit Standard Edition**, todas as fontes de alimentação são de 5V. Se você comprou o **SO101 Arm Kit Pro Edition**, o Braço Líder deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 5V, enquanto o Braço Seguidor deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 12V.
:::

**Montar o Braço Líder**

| **Etapa 1** | **Etapa 2** | **Etapa 3** | **Etapa 4** | **Etapa 5** | **Etapa 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Etapa 7** | **Etapa 8** | **Etapa 9** | **Etapa 10** | **Etapa 11** | **Etapa 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Etapa 13** | **Etapa 14** | **Etapa 15** | **Etapa 16** | **Etapa 17** | **Etapa 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Etapa 19** | **Etapa 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Montar o Braço Seguidor**

:::tip

- As etapas para montar o Braço Seguidor são, em geral, as mesmas do Braço Líder. A única diferença está no método de instalação do efetuador final (garra e manopla) após a Etapa 12.

:::

| **Etapa 1** | **Etapa 2** | **Etapa 3** | **Etapa 4** | **Etapa 5** | **Etapa 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Etapa 7** | **Etapa 8** | **Etapa 9** | **Etapa 10** | **Etapa 11** | **Etapa 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Etapa 13** | **Etapa 14** | **Etapa 15** | **Etapa 16** | **Etapa 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## Calibração

:::tip
Os códigos do SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

:::danger
Se você comprou o **SO101 Arm Kit Standard Edition**, todas as fontes de alimentação são de 5V. Se você comprou o **SO101 Arm Kit Pro Edition**, o Braço Líder deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 5V, enquanto o Braço Seguidor deve ser calibrado e operado em cada etapa usando uma fonte de alimentação de 12V.
:::

Em seguida, você precisa conectar a fonte de alimentação e o cabo de dados ao seu robô SO-10x para calibração, a fim de garantir que os braços líder e seguidor tenham os mesmos valores de posição quando estiverem na mesma posição física. Essa calibração é essencial porque permite que uma rede neural treinada em um robô SO-10x funcione em outro. Se você precisar recalibrar o braço robótico, exclua os arquivos em `~/.cache/huggingface/lerobot/calibration/robots` ou `~/.cache/huggingface/lerobot/calibration/teleoperators` e recalibre o braço robótico. Caso contrário, aparecerá um aviso de erro. As informações de calibração do braço robótico serão armazenadas nos arquivos JSON nesse diretório.

**Calibração manual do braço seguidor**

Conecte, por favor, as interfaces dos 6 servos do robô por meio de um cabo de 3 pinos e conecte o servo do chassi à placa de acionamento de servos, depois execute o seguinte comando ou exemplo de API para calibrar o braço robótico:

***Primeiro, conceda as permissões de interface***

```bash
sudo chmod 666 /dev/ttyACM*
```

***Depois, calibre o braço seguidor***

```python
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \# <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name
```

O vídeo abaixo mostra como realizar a calibração. Primeiro você precisa mover o robô para a posição em que todas as juntas estejam no meio de seus intervalos. Em seguida, após pressionar Enter, você deve mover cada junta por toda a sua amplitude de movimento.

**Calibração manual do braço líder**

Siga os mesmos passos para calibrar o braço líder, execute o seguinte comando ou exemplo de API:

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \# <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Teleoperação

**Teleop simples**
Então você está pronto para teleoperar seu robô! Execute este script simples (ele não irá conectar e exibir as câmeras):

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
<summary> Se estiver usando a Orbbec Gemini2 Depth Camera </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

- 🚀 Passo 1: Instalar o ambiente de dependências do Orbbec SDK

1. Clone o repositório `pyorbbec`

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Baixe e instale o **arquivo .whl** correspondente para o SDK  
   Vá para [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),  
   selecione e instale com base na sua versão do Python. Por exemplo:

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. Instale as dependências no diretório `pyorbbec`

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   Force o downgrade da versão do `numpy` para `1.26.0`

    ```bash
    pip install numpy==1.26.0
    ```

  Mensagens de erro em vermelho podem ser ignoradas.

4. Clone o Orbbec SDK no diretório `~/lerobot/src/cameras`

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. Modifique utils.py e **init**.py

- Encontre `utils.py` no diretório `~/lerobot/src/lerobot/cameras` e adicione o seguinte código na linha 40:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- Encontre `__init__.py` no diretório `~/lerobot/src/lerobot/cameras` e adicione o seguinte código na linha 18:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Passo 2: Chamada de função e exemplos

Em todos os exemplos a seguir, substitua `so101_follower` pelo modelo real do braço robótico que você está usando (por exemplo, `so100` / `so101`).

Adicionamos o hiperparâmetro `focus_area`. Como dados de profundidade muito distantes são sem sentido para o braço robótico (ele não consegue alcançar ou agarrar objetos), dados de profundidade menores ou maiores que o `focus_area` serão exibidos em preto. O `focus_area` padrão é (20, 600).  
Atualmente, a única resolução suportada é largura: 640, altura: 880.

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

Para tarefas subsequentes, como coleta de dados, treinamento e avaliação, o processo é o mesmo que para comandos RGB normais. Você só precisa substituir a parte relevante no comando RGB normal por:

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

Você também pode adicionar posteriormente uma câmera RGB monocular adicional.

</details>

:::tip
Os códigos do SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Para instanciar uma câmera, você precisa de um identificador de câmera. Esse identificador pode mudar se você reiniciar o computador ou reconectar a câmera, um comportamento que depende principalmente do seu sistema operacional.

Para encontrar os índices das câmeras conectadas ao seu sistema, execute o seguinte script:

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

O terminal irá imprimir as seguintes informações.

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

Você pode encontrar as imagens tiradas por cada câmera no diretório `outputs/captured_images`.

:::warning
Ao usar câmeras Intel RealSense no macOS, você pode receber este erro: OSError finding RealSense cameras: failed to set power state, isso pode ser resolvido executando o mesmo comando com permissões sudo. Observe que usar câmeras RealSense no macOS é instável.
:::

Então você poderá exibir as câmeras no seu computador enquanto estiver teleoperando, executando o código a seguir. Isso é útil para preparar sua configuração antes de gravar seu primeiro conjunto de dados.

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

Se você tiver mais câmeras, pode alterar `--robot.cameras` para adicioná-las. Você deve observar o formato do index_or_path, que é determinado pelo último dígito do ID da câmera exibido por `python -m lerobot.find_cameras opencv`.

:::tip
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução e o FPS da imagem, causando atraso na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Ainda assim, não é recomendado conectar 2 câmeras a um computador através do mesmo HUB USB.
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
Imagens no formato `fourcc: "MJPG"` são compactadas. Você pode tentar resoluções mais altas e também pode experimentar o formato `YUYV`. No entanto, este último reduzirá a resolução e o FPS da imagem, causando atraso na operação do braço robótico. Atualmente, no formato `MJPG`, é possível suportar 3 câmeras com resolução de `1920*1080` mantendo `30FPS`. Ainda assim, não é recomendado conectar 2 câmeras a um computador através do mesmo HUB USB.
:::


:::tip
Se você encontrar um bug como este.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

Você pode fazer o downgrade da versão do rerun para resolver o problema.

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

Entre eles, `repo_id` pode ser modificado de forma personalizada, e `push_to_hub=false`. Por fim, o conjunto de dados será salvo no diretório `~/.cache/huggingface/lerobot` na pasta home, onde a pasta `seeedstudio123/test` mencionada anteriormente será criada.

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

⚠️ Nota crítica: Ao retomar, defina `--dataset.num_episodes` para o número de episódios adicionais a serem gravados (não o número total de episódios desejado no conjunto de dados).  

- Para começar a gravar do zero, **exclua manualmente** o diretório do conjunto de dados.

**3. Parâmetros de gravação**

Defina o fluxo de gravação de dados usando argumentos de linha de comando:

| Parâmetro | Descrição | Padrão |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | Duração por episódio de dados (segundos) | 60 |  
| --dataset.reset_time_s | Tempo de reset do ambiente após cada episódio (segundos) | 60 |  
| --dataset.num_episodes | Total de episódios a serem gravados | 50 |  

**4. Controles de teclado durante a gravação**

Controle o fluxo de gravação de dados usando atalhos de teclado:

| Tecla | Ação |  
|-----|--------|  
| → (Seta para a direita) | Encerrar antecipadamente o episódio atual/resetar; ir para o próximo. |  
| ← (Seta para a esquerda) | Cancelar o episódio atual; regravá-lo. |  
| ESC | Parar a sessão imediatamente, codificar vídeos e enviar o conjunto de dados. |  

:::tip

Se o teclado não funcionar, talvez você precise instalar outra versão do pynput.

```bash
pip install pynput==1.6.8
```

:::

**Dicas para coletar dados**

- Sugestão de tarefa: Agarrar objetos em diferentes locais e colocá-los em uma caixa.  
- Escala: Grave ≥50 episódios (10 episódios por local).  
- Consistência:  
  - Mantenha as câmeras fixas.  
  - Mantenha um comportamento de preensão idêntico.  
  - Garanta que os objetos manipulados estejam visíveis nas imagens das câmeras.  
- Progressão:  
  - Comece com preensões confiáveis antes de adicionar variações (novos locais, técnicas, ajustes de câmera).  
  - Evite aumentar a complexidade rapidamente para prevenir falhas.  

💡 Regra geral: Você deve ser capaz de executar a tarefa apenas olhando para as imagens da câmera.  

Se quiser se aprofundar neste tópico importante, você pode conferir o [post no blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escrevemos sobre o que torna um conjunto de dados bom.

**Solução de problemas**

Problema específico do Linux:  
Se as teclas Seta para a direita/Seta para a esquerda/ESC não responderem durante a gravação:  

- Verifique se a variável de ambiente `$DISPLAY` está definida (veja [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html)).  

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visualizar o conjunto de dados

:::tip
Os códigos SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Se você enviou seu conjunto de dados para o hub com `--control.push_to_hub=true`, você pode [visualizar seu conjunto de dados online](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando e colando o seu repo id obtido por:

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

**Aqui, `seeed_123` é o nome personalizado de `repo_id` definido ao coletar os dados.**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## Reproduzir um episódio

:::tip
Os códigos SO100 e SO101 são compatíveis. Usuários do SO100 podem utilizar diretamente os parâmetros e o código do SO101 para operação.
:::

Um recurso útil é a função `replay`, que permite reproduzir qualquer episódio que você tenha gravado ou episódios de qualquer conjunto de dados disponível. Essa função ajuda você a testar a repetibilidade das ações do seu robô e avaliar a transferibilidade entre robôs do mesmo modelo.

Você pode reproduzir o primeiro episódio no seu robô com o comando abaixo ou com o exemplo de API:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

Seu robô deve reproduzir movimentos semelhantes aos que você gravou.

## Treinar e avaliar


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

**Se você quiser treinar em um conjunto de dados local, certifique-se de que o `repo_id` corresponda ao usado durante a coleta de dados e adicione `--policy.push_to_hub=False`.**

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

Vamos explicar:

- **Especificação do conjunto de dados**: Fornecemos o conjunto de dados por meio do parâmetro `--dataset.repo_id=${HF_USER}/so101_test`.
- **Passos de treinamento**: Modificamos o número de passos de treinamento usando `--steps=300000`. O algoritmo usa por padrão 800000 passos, e você pode ajustá-lo com base na dificuldade da sua tarefa e observando a loss durante o treinamento.
- **Tipo de política**: Fornecemos a política com `policy.type=act`. Da mesma forma, você pode alternar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`], o que carregará a configuração de `configuration_act.py`. Importante: essa política se adaptará automaticamente aos estados dos motores, ações dos motores e ao número de câmeras do seu robô (por exemplo, `laptop` e `phone`), pois essas informações já estão armazenadas no seu conjunto de dados.
- **Seleção de dispositivo**: Fornecemos `policy.device=cuda` porque estamos treinando em uma GPU Nvidia, mas você pode usar `policy.device=mps` para treinar em Apple Silicon.
- **Ferramenta de visualização**: Fornecemos `wandb.enable=true` para visualizar gráficos de treinamento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Isso é opcional, mas, se você usar, certifique-se de ter feito login executando `wandb login`.


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

como:

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

1. O parâmetro `--policy.path` indica o caminho para o arquivo de pesos dos resultados do seu treinamento de política (por exemplo, `outputs/train/act_so101_test/checkpoints/last/pretrained_model`). Se você enviar o arquivo de pesos do resultado do treinamento do modelo para o Hub, também poderá usar o repositório do modelo (por exemplo, `${HF_USER}/act_so100_test`).

2. O nome do conjunto de dados `dataset.repo_id` começa com `eval_`. Essa operação registrará separadamente vídeos e dados durante a avaliação, que serão salvos na pasta que começa com `eval_`, como `seeed/eval_test123`.

3. Se você encontrar `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante a fase de avaliação, exclua primeiro a pasta que começa com `eval_` e execute o programa novamente.

4. Ao encontrar `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, observe que palavras-chave como front e side no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o conjunto de dados.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


</details>


<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) é o modelo base leve de robótica da Hugging Face. Projetado para fácil ajuste fino em conjuntos de dados LeRobot, ele ajuda a acelerar o seu desenvolvimento!

**Configure seu ambiente**

Instale as dependências do SmolVLA executando:

```bash
pip install -e ".[smolvla]"
```

**Faça o fine-tuning do SmolVLA com seus dados**

Use [smolvla_base](https://hf.co/lerobot/smolvla_base), nosso modelo pré-treinado de 450M, e faça o ajuste fino com seus dados. Treinar o modelo por 20k etapas levará aproximadamente ~4 horas em uma única GPU A100. Você deve ajustar o número de etapas com base no desempenho e no seu caso de uso.

Se você não tiver um dispositivo GPU, poderá treinar usando nosso notebook no [Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb).

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
Você pode começar com um tamanho de lote pequeno e aumentá-lo gradualmente, se a GPU permitir, desde que os tempos de carregamento permaneçam curtos.
:::

O ajuste fino é uma arte. Para uma visão geral completa das opções de fine-tuning, execute

```bash
lerobot-train --help
```

**Avalie o modelo ajustado e execute-o em tempo real**

Da mesma forma que ao gravar um episódio, é recomendável que você esteja conectado ao HuggingFace Hub. Você pode seguir as etapas correspondentes: [Gravar um conjunto de dados](https://huggingface.co/docs/lerobot/il_robots). Depois de fazer login, você pode executar inferência na sua configuração fazendo:

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

[LIBERO](https://huggingface.co/docs/lerobot/libero) é um benchmark projetado para estudar o aprendizado contínuo de robôs. A ideia é que os robôs não serão apenas pré-treinados uma vez em uma fábrica; eles precisarão continuar aprendendo e se adaptando com seus usuários humanos ao longo do tempo. Essa adaptação contínua é chamada de aprendizado ao longo da vida na tomada de decisão (LLDM), e é um passo fundamental para construir robôs que se tornem ajudantes verdadeiramente personalizados.

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

- `--env.task` seleciona o conjunto (`libero_object`, `libero_spatial`, etc.).
- `--eval.batch_size` controla quantos ambientes são executados em paralelo.
- `--eval.n_episodes` define quantos episódios serão executados no total.

***Avaliação de múltiplos conjuntos***

Avalie uma política em vários conjuntos de uma só vez:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Passe uma lista separada por vírgulas para `--env.task` para avaliação de múltiplos conjuntos.

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

- `export MUJOCO_GL=egl` → para servidores sem interface gráfica (por exemplo, HPC, nuvem)

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

Consulte [GR00T N1.5](https://huggingface.co/docs/lerobot/groot) 


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

Para retomar o treinamento a partir de um checkpoint, abaixo está um comando de exemplo para retomar do checkpoint `last` da política `act_so101_test`:

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**Fazer upload dos checkpoints da policy**

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

- Se você estiver seguindo esta documentação/tutorial, faça git clone do repositório GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. O repositório recomendado nesta documentação é uma versão estável verificada; o repositório oficial do Lerobot é continuamente atualizado para a versão mais recente, o que pode causar problemas imprevistos, como versões de dataset diferentes, comandos diferentes etc.

- Se você encontrar o seguinte erro ao calibrar os IDs dos servos:

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  Verifique cuidadosamente se o cabo de comunicação está conectado corretamente ao servo e se a fonte de alimentação está fornecendo a tensão correta.

- Se você encontrar:

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  E você conseguir ver que ACM0 existe ao executar `ls /dev/ttyACM*`, isso significa que você esqueceu de conceder permissões à porta serial. Digite `sudo chmod 666 /dev/ttyACM*` no terminal para corrigir isso.

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

  Exclua primeiro a pasta que começa com `eval_` e depois execute o programa novamente.

- Se você encontrar durante a fase de avaliação:

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  Observe que palavras‑chave como "front" e "side" no parâmetro `--robot.cameras` devem ser estritamente consistentes com as usadas ao coletar o dataset.

- Se você reparou ou substituiu partes do braço robótico, exclua completamente os arquivos em `~/.cache/huggingface/lerobot/calibration/robots` ou `~/.cache/huggingface/lerobot/calibration/teleoperators` e recalibre o braço robótico. Caso contrário, mensagens de erro podem aparecer, pois as informações de calibração são armazenadas em arquivos JSON nesses diretórios.

- Treinar ACT em 50 conjuntos de dados leva aproximadamente 6 horas em um laptop com RTX 3060 (8 GB) e cerca de 2–3 horas em computadores com GPUs RTX 4090 ou A100.

- Durante a coleta de dados, garanta que a posição da câmera, o ângulo e a iluminação ambiente sejam estáveis. Reduza a quantidade de fundo instável e de pedestres capturados pela câmera, pois mudanças excessivas no ambiente de implantação podem fazer com que o braço robótico não consiga agarrar corretamente.

- Para o comando de coleta de dados, garanta que o parâmetro `num-episodes` esteja configurado para coletar dados suficientes. Não pause manualmente no meio, pois a média e a variância dos dados são calculadas somente após a conclusão da coleta, e são necessárias para o treinamento.

- Se o programa indicar que não consegue ler dados de imagem da câmera USB, garanta que a câmera USB não esteja conectada por meio de um hub. A câmera USB deve ser conectada diretamente ao dispositivo para garantir alta velocidade de transmissão de imagem.

- Se você encontrar um bug como `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, você pode fazer downgrade da versão do rerun para resolver o problema.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
Se você encontrar problemas de software ou de dependências de ambiente que não possam ser resolvidos, além de verificar a seção de FAQ no final deste tutorial, relate o problema prontamente na [plataforma LeRobot](https://github.com/huggingface/lerobot) ou no [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).
:::

## Citação

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

Projeto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Projeto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
