---
description: Este wiki fornece o tutorial de montagem e depuração do Lekiwi e realiza a coleta de dados e o treinamento dentro do framework Lerobot.
title: Lekiwi no Lerobot
keywords:
  - Lerobot
  - Huggingface
  - Car
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /lerobot_lekiwi
sku: 114090065,E2025090401
last_update:
  date: 11/12/2025
  author: Li shanghang
translation:
  skip:
    - zh-CN
createdAt: '2025-05-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/lerobot_lekiwi/
---

# Como usar o Lekiwi no Lerobot

:::tip

Este repositório de tutorial mantém a versão estável verificada do Lerobot em 5 de junho de 2025. Atualmente, o ​Hugging Face​ lançou uma ​atualização importante​ para o Lerobot, introduzindo muitos novos recursos. Se você quiser experimentar os tutoriais mais recentes, siga a [​documentação oficial para orientação​](https://huggingface.co/docs/lerobot/lekiwi).

:::

## Introdução

O [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) é um projeto de carro robótico totalmente open-source lançado pela [SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC). Ele inclui arquivos detalhados para impressão 3D e guias de operação, projetados para serem compatíveis com o framework de aprendizado por imitação [LeRobot](https://github.com/huggingface/lerobot/tree/main). Ele é compatível com o braço robótico SO101 para viabilizar um pipeline completo de aprendizado por imitação,

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/LeKiwi-Full-Kit-12V-Verision.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Principais Recursos

1. **Open-source e baixo custo**:  É uma solução de carro robótico open-source e de baixo custo do [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)
2. **Integração com LeRobot**: Projetado para integração com a [plataforma LeRobot](https://github.com/huggingface/lerobot)
3. **Recursos de aprendizado abundantes**: Fornece recursos de aprendizado open-source abrangentes, como guias de montagem e calibração, além de tutoriais para teste, coleta de dados, treinamento e implantação, para ajudar os usuários a começarem rapidamente e desenvolverem aplicações robóticas.
4. **Compatível com Nvidia**: Faça o deploy deste kit de braço com o reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicação em múltiplos cenários**: É aplicável a campos como educação, pesquisa científica, produção automatizada e robótica, ajudando os usuários a alcançar operações robóticas eficientes e precisas em várias tarefas complexas.

:::caution

A Seeed Studio é responsável apenas pela qualidade do hardware em si. Os tutoriais são rigorosamente atualizados de acordo com a documentação oficial. Se você encontrar problemas de software ou dependências de ambiente que não possam ser resolvidos, reporte o problema prontamente à [plataforma LeRobot](https://github.com/huggingface/lerobot) ou ao [canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU).
:::

:::danger

- Todos os servomotores no chassi do LeKiwi exigem fonte de alimentação de 12V. Para usuários com braços robóticos de 5V, fornecemos um módulo conversor de tensão de 12V para 5V. Observe que será necessária modificação de circuito por sua parte.

- Uma fonte de alimentação de 12V – Você pode selecionar esta opção na finalização da compra, se necessário. Se você já possui uma fonte de alimentação de 12V, pode ignorar esta opção e simplesmente converter o conector de saída da sua fonte para um plugue DC 5521.

- Controlador Raspberry Pi e câmera – Estes devem ser adquiridos separadamente por meio da interface de pedido.

:::

## Especificação

| Tipo | Lekiwi |
|--|--|
|  Servo Motos | 3x 12v STS3215 1:345 Taxa de Engrenagem|
| Fonte de Alimentação | 12V DC ou Bateria |
| Sensor de ângulo| Encoder magnético de 12 bits |
| Faixa de Temperatura de Operação Recomendada | 0℃～40℃ |
| Método de Comunicação| UART |
| Método de Controle | PC |

## Lista de Materiais (BOM)

| Parte | Quantidade | Incluído|
|--|--|--|
| STS3215 1:345 12V Servo Motos | 3 | ✅ |
| Roda omnidirecional/universal | 3 | ✅ |
| Caixa 3D impressa Lekiwi | 1 | ✅ |
| Módulo Redutor de Tensão DC-DC - 24V/12V para 5V | 1 | ✅ |
| Placa de Controle de Motor | 1 | ✅ |
| Cabo Y DC macho para DC macho duplo 5521 | 1 | ✅ |
| Cabo USB;Type C 2.0 para Type C 2.0-Preto;L150mm| 1 | ✅ |
| Cabo USB 3.1 Type C para A 0,5 Metro | 1 | ✅ |
| Adaptador de Tomada;Preto-12V-2A AC/DC | 1 | ✅ |
| Parafusos sortidos M2 M3 M4 | Suficiente | ✅ |
| Raspberry pi | 1 | Opção |
| Câmera USB | 1 | Opção |
| Câmera de Profundidade | 2 | Opção |
| SO-ARM101 Pro | 1 | Opção |
| Bateria de Íons de Lítio 12V de Alta Capacidade E326S| 1 | Opção |

## Ambiente Inicial do Sistema

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Para Jetson Orin:**

- Jetson JetPack 6.0+
- Python 3.10  
- Torch 2.6  

**Para Raspberry Pi:**

- Raspberry Pi5 4G~16G

## Guia de Impressão 3D

### Peças

Fornecemos arquivos STL prontos para impressão para as peças impressas em 3D abaixo. Elas podem ser impressas com filamento PLA genérico em impressoras FDM de nível consumidor. Testamos em uma impressora Bambu Lab P1S. Para todos os componentes, apenas carregamos no bambuslicer, usamos auto-rotate e auto-arrange, ativamos quaisquer suportes recomendados e imprimimos.

| Item | Quantidade | Observações |
|:---|:---:|:---:|
| [Placa de base Superior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [Placa de base Inferior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [Suporte do motor de tração](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [Cubos de roda do servo](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | Use suportes|
| [Caixa RasPi Superior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | 2|
| [Caixa RasPi Inferior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [suporte de base](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) e [suporte de pulso](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **Compatível com [esta câmera](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)** |
| Webcam [suporte de base](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl), [inserto do gripper](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl) e [suporte de pulso](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **Compatível com [esta câmera](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)** |

### Parâmetros de Impressão

Os arquivos STL fornecidos estão prontos para impressão em muitas impressoras FDM. Abaixo estão as configurações testadas e sugeridas, embora outras também possam funcionar.

- Material: PLA+
- Diâmetro do bico e precisão: bico de 0,2 mm com altura de camada de 0,2 mm
- Densidade de preenchimento: 15%  
- Velocidade de impressão: 150 mm/s
- Se necessário, envie o G-code (arquivo fatiado) para a impressora e imprima

## Instalar LeRobot

No seu Raspberry Pi:

### 1. [Instale o Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. Reinicie o shell

Copie e cole no seu shell: `source ~/.bashrc` ou para Mac: `source ~/.bash_profile` ou `source ~/.zshrc` se você estiver usando zshell

### 3. Crie e ative um novo ambiente conda para o lerobot

```bash
conda create -y -n lerobot python=3.10
```

Em seguida, ative seu ambiente conda (faça isso toda vez que abrir um shell para usar o lerobot!):

```bash
conda activate lerobot
```

### 4. Clone o LeRobot

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. Instale o ffmpeg no seu ambiente

Ao usar o `miniconda`, instale o `ffmpeg` no seu ambiente:

```bash
conda install ffmpeg -c conda-forge
```

### 6. Instale o LeRobot com dependências para os motores feetech

```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## Instalar LeRobot no laptop (PC)

Se você já instalou o LeRobot no seu laptop, pode pular esta etapa, caso contrário, siga adiante enquanto fazemos os mesmos passos que fizemos no Pi.

:::tip
Usamos o Prompt de Comando (cmd) com bastante frequência. Se você não estiver à vontade usando o cmd ou quiser relembrar o uso da linha de comando, você pode dar uma olhada aqui: [Curso intensivo de linha de comando](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
:::

No seu computador:

### 1. [Instale o Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

### 2. Reinicie o shell

Copie e cole no seu shell: `source ~/.bashrc` ou para Mac: `source ~/.bash_profile` ou `source ~/.zshrc` se você estiver usando zshell

### 3. Crie e ative um novo ambiente conda para o lerobot

```bash
conda create -y -n lerobot python=3.10
```

Em seguida, ative seu ambiente conda (faça isso toda vez que abrir um shell para usar o lerobot!):

```bash
conda activate lerobot
```

### 4. Clone o LeRobot

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. Instale o ffmpeg no seu ambiente

Ao usar o `miniconda`, instale o `ffmpeg` no seu ambiente:

```bash
conda install ffmpeg -c conda-forge
```

### 6. Instale o LeRobot com dependências para os motores feetech

```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## Montagem

<details>
<summary>Montar o Lekiwi</summary>

### Tutorial em vídeo

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/_QjhOMSnobU?si=xjhfCztoWZcFwW6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/62_JWFpvJyA?si=0YCwKUJgy0YVL-A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/r0LtrTidWdA?si=MEdIJ5XzI8-wbpDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/qk1iYHW-0qg?si=0zXmcVIkBXJcf1M5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/RYu7WLpi7jw?si=Tjc5_4-WLE2xyNWr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/q7zp4qIFdnM?si=fIYgI_3xbrWL7wUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### A seguir está um tutorial em fotos

Você pode consultar o [tutorial de montagem](https://github.com/SIGRobotics-UIUC/LeKiwi) oficial.

Ao receber as peças impressas, todos os componentes impressos são como mostrado abaixo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. Prenda o motor de acionamento ao suporte do motor usando 12 parafusos de rosca m2x6.**

| **Passo 1** | **Passo 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. Parafuse o suporte do motor de acionamento na placa base inferior usando 12 parafusos de máquina m3x16.**

:::tip
Lembre-se da disposição dos IDs: 8 representa a roda traseira, enquanto 7 e 9 correspondem às rodas dianteira esquerda e dianteira direita, respectivamente.
:::

| **Passo 1** | **Passo 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. Prenda o cubo da roda ao omniwheel.**

**Passo 1 e Passo 2**: Remova os três parafusos.

| **Passo 1** | **Passo 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**Passo 3 e Passo 4**: Prenda o cubo da roda ao omniwheel usando 9 parafusos de máquina m4x18.

| **Passo 3** | **Passo 4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. Prenda o disco do servo ao cubo da roda usando 6 parafusos de máquina m3x16.**

| **Passo 1** | **Passo 2** |**Passo 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. Prenda o disco do servo ao motor de acionamento usando 3 parafusos de máquina m3x10.**

| **Passo 1** | **Passo 2** |**Passo 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. Adicione o driver de servos e conecte todos os circuitos.**

| **Passo 1** | **Passo 2** |**Passo 3** |**Passo 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **Passo 5** | **Passo 6** |**Passo 7** |**Passo 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

A **Power IN** conecta-se diretamente à fonte de alimentação, como no Passo 8, enquanto a porta **USB-C** fornece energia de 5V para o Raspberry Pi.  

Para os **terminais de 2 pinos adicionais (5V & 12V)**:  

- Se estiver usando um **braço robótico 7.4V SO10x**, alimente a **Servo Motors Board** através da **saída de 5V**.  
- Se estiver usando um **braço robótico de 12V**, alimente a **Servo Motors Board** diretamente a partir do **divisor de energia DC**, como no Passo 8.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. Agora você pode prosseguir para montar o Raspberry Pi na placa superior de segunda camada do veículo. Antes de fazer isso, conecte tanto o **cabo de alimentação USB-C** quanto o **cabo de comunicação do motor de servo USB-C**, depois passe-os pelo painel superior do veículo.**

**Passo 1** Conecte o cabo de alimentação ao seu Raspberry Pi e passe-o pela abertura central do painel superior.

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**Passo 2** Entre os três servos no chassi, um servo tem apenas um cabo conectado. Se você precisar instalar o braço robótico SO10x, por favor: Remova o cabo ID1 do braço robótico. Conecte-o ao motor do chassi. Passe-o através do painel superior como um cabo reservado

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**Passo 3** Agora você pode conectar o USB-C da placa driver de servos à porta USB do Raspberry Pi.

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. Agora você precisa fixar o Raspberry Pi e as partes restantes da placa superior usando 12 parafusos M3×16.**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. Agora você pode instalar a câmera USB e o Follower Arm usando 1 parafuso M3x16 e 4 parafusos M5×25**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) |
| ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

E certifique-se de que tanto o cabo de controle do servo quanto a câmera USB estejam conectados ao Raspberry Pi.

|  |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>

:::tip
Verifique as conexões do circuito; após a montagem, o Lekiwi deve estar conectado à placa de desenvolvimento (Raspberry Pi / Jetson). O braço seguidor deve estar conectado ao seu PC.

| Lekiwi --> Raspberry Pi / Jetson |

| Leader arm --> PC                |
:::

## Configurar os motores

### Leader arm

Para encontrar a porta de cada adaptador de servo de barramento, execute este script:

```bash
lerobot-find-port
```

Exemplo de saída:

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/tty.usbmodem575E0032081
Reconnect the USB cable.
```

Exemplo de saída ao identificar a porta (por exemplo, `/dev/tty.usbmodem575E0031751` no Mac, ou possivelmente `/dev/ttyACM0` no Linux):

Exemplo de saída ao identificar a porta (por exemplo, `/dev/tty.usbmodem575E0032081`, ou possivelmente `/dev/ttyACM1` no Linux):

:::tip

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.
```

Lembre-se de remover o USB e então pressionar Enter, caso contrário a interface não será detectada.
:::

Solução de problemas: No Linux, você pode precisar conceder acesso às portas USB executando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```


### Lekiwi

Você deve seguir o comando anterior para encontrar o USB correto e configurar os motores.

As instruções para configurar os motores podem ser encontradas na [documentação](https://huggingface.co/docs/lerobot/lekiwi) do SO101 (igual ao leader arm). Além dos IDs dos motores do braço, também precisamos definir os IDs dos motores para a base móvel. Eles precisam estar em uma ordem específica para funcionar. Abaixo, uma imagem dos IDs dos motores e das posições de montagem dos motores para a base móvel. Observe que usamos apenas uma placa de controle de motor no LeKiwi. Isso significa que os IDs dos motores para as rodas são 7, 8 e 9.

Você pode executar este comando para configurar os motores do LeKiwi. Primeiro ele irá configurar os motores do braço (id 6..1) e depois configurar os motores das rodas (9,8,7).

```bash
lerobot-setup-motors \
    --robot.type=lekiwi \
    --robot.port=/dev/tty.usbmodem58760431551 # <- paste here the port found at previous step
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/motor_ids.png" />
</div>

## Calibração

Agora precisamos calibrar o braço líder e o braço seguidor. Os motores das rodas não precisam ser calibrados. O processo de calibração é muito importante porque permite que uma rede neural treinada em um robô funcione em outro.

### Calibrar o braço seguidor (na base móvel)

Certifique-se de que o braço esteja conectado ao Raspberry Pi e execute este script ou exemplo de API (no Raspberry Pi via SSH) para iniciar a calibração do braço seguidor:

```bash
lerobot-calibrate \
    --robot.type=lekiwi \
    --robot.id=my_awesome_kiwi # <- Give the robot a unique name
```

Unificamos o método de calibração para a maioria dos robôs, portanto, as etapas de calibração para este braço SO100 são as mesmas que as etapas para o Koch e o SO101. Primeiro, precisamos mover o robô para a posição em que cada junta esteja no meio de sua faixa, então pressionamos `Enter`. Em seguida, movemos todas as juntas por toda a sua faixa de movimento. Um vídeo desse mesmo processo para o SO101 como referência pode ser encontrado [aqui](https://huggingface.co/docs/lerobot/lekiwi).

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Versão com fio

Se você tiver a versão com fio do LeKiwi, execute todos os comandos no seu laptop.

### Calibrar o braço líder

Então, para calibrar o braço líder (que está conectado ao laptop/PC). Execute o seguinte comando ou exemplo de API no seu laptop:

```bash
lerobot-calibrate \
    --teleop.type=so100_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --teleop.id=my_awesome_leader_arm # <- Give the robot a unique name
```

## Teleoperar o LeKiwi

:::tip
Se você estiver usando um Mac, talvez seja necessário dar permissão ao Terminal para acessar seu teclado. Vá em System Preferences > Security & Privacy > Input Monitoring e marque a caixa para Terminal.
:::

Para teleoperar, faça SSH no seu Raspberry Pi, execute `conda activate lerobot` e este script:

```bash
python -m lerobot.robots.lekiwi.lekiwi_host --robot.id=my_awesome_kiwi
```

Depois, no seu laptop, também execute `conda activate lerobot` e execute o exemplo de API, certificando-se de definir o `remote_ip` e a `port` corretos em `examples/lekiwi/teleoperate.py`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/teleoperate.png" />
</div>

```bash
python examples/lekiwi/teleoperate.py
```

Você deverá ver no seu laptop algo como: ```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` Agora você pode mover o braço líder e usar o teclado (w,a,s,d) para ir para frente, esquerda, trás, direita. E usar (z,x) para girar para a esquerda ou para a direita. Você pode usar (r,f) para aumentar e diminuir a velocidade do robô móvel. Existem três modos de velocidade, veja a tabela abaixo:

| Modo de Velocidade | Velocidade Linear (m/s) | Velocidade de Rotação (deg/s) |
| ------------------ | ----------------------- | ----------------------------- |
| Rápido             | 0,4                     | 90                            |
| Médio              | 0,25                    | 60                            |
| Lento              | 0,1                     | 30                            |

| Tecla | Ação            |
| ----- | --------------- |
| W     | Ir para frente  |
| A     | Ir para a esquerda |
| S     | Ir para trás    |
| D     | Ir para a direita |
| Z     | Girar para a esquerda |
| X     | Girar para a direita |
| R     | Aumentar velocidade |
| F     | Diminuir velocidade |

:::tip
Se você usar um teclado diferente, poderá alterar as teclas para cada comando no `LeKiwiRobotConfig`.
:::

### Versão com fio

Se você tiver a versão **com fio** do LeKiwi, execute todos os comandos, incluindo estes dois comandos de teleoperação, no seu laptop.

## Solucionar problemas de comunicação

Se estiver tendo problemas para se conectar ao Mobile SO100, siga estas etapas para diagnosticar e resolver o problema.

### 1. Verificar configuração de endereço IP

Certifique-se de que o IP correto do Pi esteja definido no arquivo de configuração. Para verificar o endereço IP do Raspberry Pi, execute (na linha de comando do Pi):

```bash
hostname -I
```

### 2. Verificar se o Pi é alcançável a partir do laptop/PC

Tente dar ping no Raspberry Pi a partir do seu laptop:

```bach
ping <your_pi_ip_address>
```

Se o ping falhar:

- Certifique-se de que o Pi esteja ligado e conectado à mesma rede.
- Verifique se o SSH está habilitado no Pi.

### 3. Tentar conexão SSH

Se você não conseguir fazer SSH no Pi, pode ser que ele não esteja conectado corretamente. Use:

```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```

Se você receber um erro de conexão:

- Certifique-se de que o SSH esteja habilitado no Pi executando:

  ```bash
  sudo raspi-config
  ```

  Em seguida, navegue até: **Interfacing Options -> SSH** e habilite-o.

### 4. Mesmo arquivo de configuração

Certifique-se de que o arquivo de configuração tanto no seu laptop/PC quanto no Raspberry Pi seja o mesmo.

## Gravar um conjunto de dados

Quando você estiver familiarizado com a teleoperação, poderá gravar seu primeiro conjunto de dados com o LeKiwi.

Usamos os recursos do Hugging Face hub para enviar seu conjunto de dados. Se você ainda não usou o Hub, certifique-se de que consegue fazer login via CLI usando um token com permissão de escrita; esse token pode ser gerado nas [configurações do Hugging Face](https://huggingface.co/settings/tokens).

Adicione seu token à CLI executando este comando:

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Em seguida, armazene o nome do seu repositório Hugging Face em uma variável:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Agora você pode gravar um conjunto de dados. Para gravar episódios e enviar seu conjunto de dados para o hub, execute este exemplo de API adaptado para o LeKiwi. Certifique-se primeiro de ajustar o `remote_ip`, `repo_id`, `port` e `task` no script. Se quiser executar o script por mais tempo, você pode aumentar `NB_CYCLES_CLIENT_CONNECTION`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/record.png" />
</div>

```bash
python examples/lekiwi/record.py
```

Envio do conjunto de dados

Localmente, seu conjunto de dados é armazenado nesta pasta: `~/.cache/huggingface/lerobot/{repo-id}`. Ao final da gravação dos dados, seu conjunto de dados será enviado para a sua página no Hugging Face (por exemplo, https://huggingface.co/datasets/cadene/so101_test), que você pode obter executando:

```bash
echo https://huggingface.co/datasets/${HF_USER}/so101_test
```

Seu conjunto de dados será automaticamente marcado com `LeRobot` para que a comunidade possa encontrá-lo facilmente, e você também pode adicionar tags personalizadas (neste caso `tutorial`, por exemplo).

Você pode procurar outros conjuntos de dados LeRobot no hub pesquisando por [tags](https://huggingface.co/datasets?other=LeRobot) `LeRobot`.

:::tip

### Dicas para coletar dados

Quando você estiver confortável com a gravação de dados, poderá criar um conjunto de dados maior para treinamento. Uma tarefa inicial boa é agarrar um objeto em diferentes locais e colocá-lo em uma caixa. Sugerimos gravar pelo menos 50 episódios, com 10 episódios por local. Mantenha as câmeras fixas e mantenha um comportamento de preensão consistente durante as gravações. Também certifique-se de que o objeto que você está manipulando esteja visível nas câmeras. Uma boa regra geral é que você deveria ser capaz de executar a tarefa apenas olhando para as imagens das câmeras.

Nas seções a seguir, você irá treinar sua rede neural. Depois de obter um desempenho confiável de preensão, você pode começar a introduzir mais variações durante a coleta de dados, como locais adicionais de preensão, diferentes técnicas de preensão e alteração das posições das câmeras.

Evite adicionar variação demais muito rápido, pois isso pode prejudicar seus resultados.

Se quiser se aprofundar nesse tópico importante, você pode conferir o [post](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) no [blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escrevemos sobre o que torna um conjunto de dados bom.

### Solução de problemas

No Linux, se as teclas de seta esquerda e direita e a tecla Esc não tiverem efeito durante a gravação dos dados, certifique-se de ter definido a variável de ambiente `$DISPLAY`. Veja [limitações do pynput](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::

### Versão com fio

Se você tiver a versão **com fio** do LeKiwi, execute todos os comandos, incluindo estes comandos de gravação de conjunto de dados, no seu laptop.


## Reproduzir um episódio

Para reproduzir um episódio, execute o exemplo de API abaixo, certificando-se de alterar `remote_ip`, `port`, LeRobotDatasetId e o índice do episódio. O arquivo está neste caminho `examples/lekiwi/replay.py`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/Replay an episode.png" />
</div>

Execute o seguinte comando:

```bash
python examples/lekiwi/replay.py
```

## Treinar uma política

Para treinar uma política para controlar o seu robô, use o script `python lerobot/scripts/train.py`. Alguns argumentos são necessários. Aqui está um comando de exemplo:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true # You can choose false if you don't need wandb
```

Vamos explicar:

1. Fornecemos o conjunto de dados como argumento com `--dataset.repo_id=${HF_USER}/lekiwi_test`.
2. Fornecemos a política com `policy.type=act`. Isso carrega as configurações de `configuration_act.py`. Importante: essa política irá se adaptar automaticamente ao número de estados do motor, ações do motor e câmeras do seu robô (por exemplo, `laptop` e `phone`) que foram salvos no seu conjunto de dados.
4. Fornecemos `policy.device=cuda` pois estamos treinando em uma GPU Nvidia, mas você pode usar `policy.device=mps` para treinar em Apple silicon.
5. Fornecemos `wandb.enable=true` para usar o [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar os gráficos de treinamento. Isso é opcional, mas se você usar, certifique-se de estar conectado executando `wandb login`.

O treinamento deve levar várias horas. Você encontrará pontos de verificação em `outputs/train/act_lekiwi_test/checkpoints`.

## Avalie sua política

Para avaliar sua política, execute o exemplo de API `evaluate.py`, certificando-se de alterar `remote_ip`, `port`, model..

O caminho é `examples/lekiwi/evaluate.py`.
<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/evaluation.png" />
</div>

```bash
python examples/lekiwi/evaluate.py
```

Como você pode ver, é quase o mesmo comando usado anteriormente para gravar seu conjunto de dados de treinamento. Duas coisas mudaram:

1. Há um argumento adicional `policy` que indica o caminho para o checkpoint da sua política (por exemplo, `outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`). Você também pode usar o repositório do modelo se tiver enviado um checkpoint de modelo para o hub (por exemplo, `${HF_USER}/act_lekiwi_test`).
2. O nome do conjunto de dados começa com `eval` para refletir que você está executando inferência (por exemplo, `${HF_USER}/eval_act_lekiwi_test`).

## Ajuda 🙋‍

Para problemas de hardware, entre em contato com o atendimento ao cliente. Para dúvidas de uso, entre no Discord.

[Plataforma LeRobot](https://github.com/huggingface/lerobot)

[Canal LeRobot no Discord](https://discord.gg/8TnwDdjFGU)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
