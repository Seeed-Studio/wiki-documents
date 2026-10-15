---
description: ODYSSEY - X86J41x5
title: Coral Mini PCIe Accelerator para ODYSSEY
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Coral-Mini-PCIe-Accelerator-x86
last_update:
  date: 03/16/2023
  author: Lakshantha
createdAt: '2023-01-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Coral-Mini-PCIe-Accelerator-x86/
---


<!-- ---
name: Coral-Mini-PCIe-Accelerator-x86
category: Platform
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 114992124
tags:
--- -->

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)

O Coral Mini PCIe Accelerator no ODYSSEY X86J41x5 é um módulo M.2 que traz o coprocessador Edge TPU para sistemas e produtos existentes.

A Edge TPU é um pequeno ASIC projetado pelo Google que fornece inferência de ML de alto desempenho com baixos requisitos de energia: é capaz de executar 4 trilhões de operações (tera-operações) por segundo (TOPS), usando 0,5 watt para cada TOPS (2 TOPS por watt). Por exemplo, ela pode executar modelos de visão móvel de última geração, como MobileNet v2, a quase 400 fps, de forma eficiente em termos de energia. Esse processamento no dispositivo reduz a latência, aumenta a privacidade dos dados e elimina a necessidade de conectividade constante de alta largura de banda.

O M.2 Accelerator é uma placa M.2 de chave dupla (chaves B+M), projetada para se encaixar em qualquer slot M.2 compatível. Esse formato possibilita integração fácil em plataformas ARM e x86, para que você possa adicionar aceleração de ML local a produtos como plataformas embarcadas, mini-PCs e gateways industriais.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)

## Recursos

- Executa inferência de ML em alta velocidade
- Funciona com Debian Linux
- Suporta TensorFlow Lite
- Suporta [AutoML Vision Edge](https://cloud.google.com/vision/automl/docs/edge-quickstart)

## Especificação

|Especificações físicas  | Valor  |
|------|--------------|
|Dimensões| Chave B+M: 22,00 x 80,00 x 2,35 mm  |
|Peso| Chave B+M: 5,8 g|
|Interface do host|
|Interface de hardware| M.2 chave B+M (M.2-2280-B-M-S3)|
|Interface serial| PCIe Gen2 x1|
|Tensão de operação|  |
|Alimentação CC|  3,3 V +/- 10 %|
|Confiabilidade ambiental| |
|Temperatura| -40 ~ 85°C (armazenamento)     -20 ~ 70° C (operação)
|Umidade relativa|  0 ~ 100% (sem condensação)|
|Confiabilidade mecânica| |
|Choque operacional| 100 G, 11 ms (persistente)1000 G, 0,5 ms (estresse)1000 G, 1,0 ms (estresse) |
|Vibração operacional (aleatória)| 0,5 Grms, 5 - 500 Hz (persistente)3 Grms, 5 - 800 Hz (estresse)|
|Vibração operacional (sinusoidal)|0,5 Grms, 5 - 500 Hz (persistente)3 Grms, 5 - 800 Hz (estresse)|

## Visão geral do hardware

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/hardware.jpg)

## Primeiros passos

### Brincar com o ODYSSEY - X86J4105

**Materiais necessários**

| Coral Mini PCIe Accelerator | ODYSSEY  X86J41x5 |
|--------------|-------------|
|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/PC.png)|
|[Adquira agora](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)|[Adquira agora](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html)|

#### Conexão de hardware

As etapas de conexão de hardware são muito simples.

- **Passo 1.** Conectar o Coral Mini PCIe Accelerator ao ODYSSEY - X86J41x5.
- **Passo 2.** Conectar a alimentação ao ODYSSEY - X86J41x5.
- **Passo 3.** Conectar a alimentação e o monitor ao ODYSSEY - X86J41x5.
- **Passo 4.**  Conectar o teclado e o mouse ao ODYSSEY - X86J41x5.
- **Passo 5.** Se você tiver um cabo de rede, conecte-o ao seu ODYSSEY - X86J41x5.

## Software

Depois de concluir a conexão de hardware, o próximo passo é resolver os problemas de software.
 Aqui eu vou mostrar algumas etapas de instalação: instalar o driver PCIe, o Edge TPU runtime e o TensorFlow Lite runtime.

Primeiro, o que você precisa é de um computador com Linux, siga os passos.

- Você pode escolher sistema x86-64, ARMv7 (32 bits) ou ARMv8 (64 bits).

   Consulte como [criar um drive USB inicializável e instalar o Linux OS (Ubuntu Desktop 18.04)](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-OS/) no ODYSSEY - X86J41x5.

- Um Coral Mini PCIe Accelerator disponível no ODYSSEY X86J41x5

- Distribuição Linux Debian 6.0 ou superior, ou qualquer derivado (como Ubuntu 10.0+)

- Python 3.5 ou superior

Depois de criar com sucesso o disco de inicialização no pendrive e instalar o arquivo do sistema operacional Linux, você pode ir para o próximo passo.

## 1.Instalar o driver PCIe

Se você já instalou um driver Apex pré-compilado, deve considerar se o driver pode fazer com que a Edge TPU falhe, porque alguns drivers têm bugs que levam a esses erros. Portanto, você deve verificar isso. Então, primeiro siga estes passos:

   1.Verifique a versão do kernel Linux com este comando:

   ```
      uname -r 

   ```

   Se for exibido 4.18 ou inferior, está tudo certo e você pode pular o início da instalação do nosso driver PCIe.

   2.Se a versão do seu kernel for 4.19 ou superior, agora verifique se você tem um driver Apex pré-compilado instalado:

   ```
      lsmod | grep apex

   ```

   Se não mostrar nada, então está tudo certo e você pode continuar a instalar nosso driver PCIe.

   Se ele exibir o nome de um módulo Apex, pare aqui e siga a [solução alternativa para desativar Apex e Gasket](https://coral.ai/docs/m2/get-started/#workaround-to-disable-apex-and-gasket).

Instale o driver PCIe da seguinte forma:

1. Certifique-se de que o sistema host onde você conectará o módulo esteja desligado.

2. Conecte o módulo Coral PCIe ao seu sistema host na interface M.2 de chave B (a interface M.2 SATA_SSD não suporta o módulo Coral).

3. Inicie o sistema e certifique-se de que ele tenha conexão com a Internet. Em seguida, adicione nosso repositório de pacotes Debian ao seu sistema e instale nosso driver PCIe com estes comandos:

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt update

sudo apt-get install gasket-dkms
```

4. Se a conta de usuário que você usará não tiver permissões de root, talvez seja necessário adicionar a seguinte regra udev e, em seguida, verificar se o grupo "apex" existe e se seu usuário foi adicionado a ele:

```
   sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

   sudo groupadd apex

   sudo adduser $USER apex
```

5. Reinicie o sistema.

6. Verifique se o módulo acelerador foi detectado:

   ```
      lspci -x | grep 089a
   ```

   Você deverá ver algo como isto:

    ```
      03:00.0 System peripheral: Device 1ac1:089a
    ```

   O número 03 e o nome do periférico do sistema podem ser diferentes porque são específicos do sistema host, mas desde que você veja um dispositivo listado com 089a, você pode continuar.

7. Verifique se o driver PCIe foi carregado:

   ```
   ls /dev/apex_0
   ```

   Você deverá simplesmente ver o nome repetido:

   ```
   /dev/apex_0

   ```

## 2. Instalar o Edge TPU runtime

O Edge TPU runtime é necessário para se comunicar com a Edge TPU. Você pode instalá-lo no seu computador host a partir da linha de comando da seguinte forma:

```
sudo apt-get install libedgetpu1-std
```

Notas
> Diferente do [USB Accelerator](https://coral.ai/products/accelerator/), o Mini PCIe e o M.2 Accelerator não usam pacotes de runtime diferentes para frequências de clock "reduzida" e "máxima". Em vez disso, esses dispositivos operam na frequência máxima por padrão e realizam [controle de consumo com base em limites térmicos](https://coral.ai/docs/m2/get-started/#operating-frequency-and-thermal-settings).

## 3. Instalar a biblioteca TensorFlow Lite

Existem várias maneiras de instalar as APIs do TensorFlow, mas para começar com Python, a opção mais fácil é instalar o pacote tflite_runtime. Este pacote fornece o código mínimo necessário para executar uma inferência com Python (principalmente a API [Interpreter](https://www.tensorflow.org/api_docs/python/tf/lite/Interpreter)), economizando assim muito espaço em disco.

Para instalá-lo, siga o [guia rápido do TensorFlow Lite para Python](https://www.tensorflow.org/lite/guide/python) e depois volte a esta página após executar o comando pip3 install.

## 4. Executar um modelo usando a API TensorFlow Lite

Agora você está pronto para executar inferência na Edge TPU. Siga estas etapas para realizar classificação de imagens com nosso código de exemplo e modelo:

   1. Baixe o código de exemplo do GitHub:

```
   mkdir coral && cd coral

   git clone https://github.com/google-coral/tflite.git
```

   2. Baixe o modelo de classificação de pássaros, o arquivo de rótulos e uma foto de pássaro:

```
cd tflite/python/examples/classification

bash install_requirements.sh
```

   3. Execute o classificador de imagens com a foto do pássaro (mostrada na figura 1):

```
python3 classify_image.py \
--model models/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels models/inat_bird_labels.txt \
--input images/parrot.jpg
```

![](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/parrot.jpg)

Você deverá ver resultados como estes:

```
INFO: Initialized TensorFlow Lite runtime.
----INFERENCE TIME----
Note: The first inference on Edge TPU is slow because it includes loading the model into Edge TPU memory.
11.8ms
3.0ms
2.8ms
2.9ms
2.9ms
-------RESULTS--------
Ara macao (Scarlet Macaw): 0.76562
```

Parabéns! Você acabou de executar uma inferência na Edge TPU usando TensorFlow Lite.

Para demonstrar diferentes velocidades de inferência, o exemplo repete a mesma inferência cinco vezes. Ele mostra o tempo para executar cada inferência e a classificação principal (o ID/nome do rótulo e a pontuação de confiança, de 0 a 1,0). Suas velocidades de inferência podem ser diferentes, dependendo do seu sistema host.

O exemplo classify_image.py acima usa a API Python do TensorFlow Lite. Para saber mais sobre como ele funciona, dê uma olhada no [código-fonte do classify_image.py](https://github.com/google-coral/tflite/blob/master/python/examples/classification/classify_image.py) e leia sobre como [executar inferência com o TensorFlow Lite](https://www.tensorflow.org/lite/guide/inference#load_and_run_a_model_in_python).

Como alternativa ao uso da API do TensorFlow Lite (usada acima), você pode usar a [Edge TPU Python API](https://coral.ai/docs/edgetpu/api-intro/), que fornece APIs de alto nível para realizar inferência com modelos de classificação de imagens e detecção de objetos com apenas algumas linhas de código. Por exemplo, experimente nossa outra versão de [classify_image.py usando a Edge TPU API](https://coral.ai/examples/classify-image/).

Você também pode [executar inferência usando C++ e TensorFlow Lite](https://coral.ai/docs/edgetpu/tflite-cpp/).

Recursos
--------

- [Datasheet](https://github.com/SeeedDocument/Bazaar_Document/raw/master/Coral-M2-datasheet.pdf)
- [Manual do usuário Coral Ai](https://coral.ai/docs/mini-pcie/datasheet/#)

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
