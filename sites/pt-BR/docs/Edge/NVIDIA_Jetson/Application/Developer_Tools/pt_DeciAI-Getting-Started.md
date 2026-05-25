---
description: Otimize o modelo de IA com Deci em dispositivos NVIDIA Jetson
title: Primeiros Passos com Deci
tags:
  - Otimização de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /DeciAI-Getting-Started
last_update:
  date: 01/04/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/DeciAI-Getting-Started/
---

# Primeiros passos com Deci em dispositivos NVIDIA® Jetson

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

A plataforma Deci permite que você gerencie, otimize, faça deploy e sirva modelos em seu ambiente de produção com facilidade. Você pode continuar usando frameworks de DL populares, como TensorFlow, PyTorch, Keras e ONNX. Tudo o que você precisa é da plataforma web baseada em navegador da Deci ou do cliente Deci em Python para executá-la a partir do seu código.

A Deci oferece:

- Aceleração de Desempenho – Acelere o desempenho de inferência do modelo em 2x – 10x em qualquer hardware, sem comprometer a precisão, usando a tecnologia de Construção Automatizada de Arquitetura Neural (AutoNAC) da Deci.
- Escalonamento em Qualquer Hardware – Reduza em até 80% os custos de computação em nuvem e o BOM para possibilitar inferência em escala, independentemente de ser em nuvem privada ou pública, em seu próprio servidor ou em qualquer computador, dispositivo de borda ou móvel.
- Benchmark de Inferência – Faça benchmark de seus modelos em qualquer ambiente de hardware de destino e tamanho de lote para encontrar a Taxa de Transferência, Latência, Uso de Memória e Custos de Nuvem ideais do seu modelo.
- Empacotamento de Modelo – Implantação Rápida e Fácil em Produção – Faça deploy perfeitamente de modelos treinados do Deci Lab para qualquer ambiente de produção, incluindo todas as dependências de bibliotecas de ambiente em um único contêiner encapsulado.
- Servimento de Modelo – O mecanismo proprietário de inferência de deep learning em tempo de execução da Deci pode ser implantado em sua própria máquina (em qualquer hardware – local / borda / nuvem). A Deci fornece as seguintes opções para implantar seu Modelo Otimizado pela Deci como um servidor de runtime eficiente isolado:

  - Runtime Inference Container (RTiC) da Deci, que é um mecanismo de runtime de aprendizado de máquina conteinerizado.
  - INFERY da Deci (da palavra inference) que permite executar um modelo a partir de um pacote Python.

## Hardware compatível

A Deci é compatível com o seguinte hardware relacionado a Jetson:

- Kits da Seeed:

  - reComputer J1010 construído com Jetson Nano
  - reComputer J1020 construído com Jetson Nano
  - reComputer J2011 construído com Jetson Xavier NX 8GB
  - reComputer J2012 construído com Jetson Xavier NX 16GB

- Placas Carrier da Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - Placa Carrier A203
  - Placa Carrier A203 (Versão 2)
  - Placa Carrier A205
  - Placa Carrier A206

- Kits de Desenvolvimento Oficiais da NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- SoMs Oficiais da NVIDIA:

  - Módulo NVIDIA® Jetson Nano
  - Módulo NVIDIA® Jetson Xavier NX
  - Módulo NVIDIA® Jetson TX2 NX
  - Módulo NVIDIA® Jetson TX2
  - Módulo NVIDIA® Jetson AGX Xavier

Se você possui qualquer um dos hardwares acima, pode prosseguir para trabalhar com a Deci no seu hardware.

## Pré-requisitos de hardware

Prepare o seguinte hardware:

- Qualquer um dos dispositivos Jetson acima executando JetPack 4.6
- Monitor, teclado, mouse (opcional)

## Crie uma conta Deci

- **Passo 1.** Visite [esta página](https://console.deci.ai/sign-up) para criar uma conta Deci

- **Passo 2.** Insira os detalhes necessários e finalize o processo de criação de conta

Agora será apresentada a você a plataforma Deci Lab

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## Zoo de modelos do Deci Lab com modelos pré-otimizados

Por padrão, o Deci Lab inclui o modelo **ResNet50 Baseline**, que já está carregado na interface com algumas otimizações para diferentes hardwares. E não é só isso. A Deci oferece uma coleção enorme de modelos base com as correspondentes versões otimizadas dos modelos para diferentes hardwares no Deci Model Zoo. Clique em **Model Zoo** e **List** para visualizar todos os modelos disponíveis.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

Como exemplo, vamos pesquisar por **YOLOX** na barra de busca para visualizar todos os modelos YOLOX.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

Como você pode ver, há modelos base como **YOLOX_Nano**, **YOLOX_Small** e modelos otimizados como **YOLOX_Nano Jetson Nano Optimized**, **YOLOX_Nano Jetson Xavier Optimized**

## Otimize o seu próprio modelo

Conforme explicado acima, você pode usar modelos pré-otimizados diretamente sem precisar otimizá-los manualmente. No entanto, se quiser usar seu próprio modelo, você pode fazer upload do modelo para o Deci Lab e otimizá-lo de acordo com o hardware de destino.

**Passo 1:** No Deci Lab, clique em **+ New Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**Passo 2:** Escolha uma tarefa apropriada de acordo com o seu modelo. Aqui escolhemos **Object Detection**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**Passo 3:** Insira um nome para o modelo e clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**Passo 4:** Escolha um framework de modelo (ONNX neste caso), faça upload de um modelo de acordo com o framework escolhido e clique em **Next**. Aqui fizemos upload do [modelo yolov6n.onnx](https://github.com/meituan/YOLOv6/releases/tag/0.1.0).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**Passo 5:** Selecione **Primary hardware**, **Inference batch size**, **Quantization level** e clique em **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**Passo 6:** Adicione metas de desempenho e restrições. Isso será principalmente útil se você usar o **AutoNAC**, que é um recurso incluído na **versão premium**. O AutoNAC pode aumentar dramaticamente o desempenho de inferência do modelo enquanto reduz o tamanho do modelo e muito mais. Se você não estiver usando o AutoNAC, precisa preencher um valor para **Throughput** e aqui definimos como 40 (pode ser um valor aleatório). Por fim, clique em **start** para iniciar o processo de otimização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

Agora o processo de otimização mostrará seu progresso como a seguir e será concluído após alguns minutos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## Compare o desempenho do modelo

Podemos usar a plataforma Deci Lab para comparar o desempenho do modelo entre os modelos base e os modelos otimizados ou então fazer deploy do modelo no hardware de destino e executar benchmarks. Embora seja mais fácil visualizar tudo no Deci Lab, é recomendável fazer deploy do modelo e executar o benchmark no dispositivo de destino para garantir que as métricas de desempenho sejam precisas para o hardware específico.

### Visualizar no Deci Lab

Aqui usaremos o modelo base **YOLOX_Nano** e os modelos **YOLOX_Nano Jetson Xavier NX Optimized** para comparar.

**Passo 1:** Navegue até o Model Zoo e clique em **clone** ao lado do modelo base **YOLOX_Nano** e dos modelos **YOLOX_Nano Jetson Xavier NX Optimized**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**Passo 2:** No Deci Lab, clique no modelo **YOLOX_Nano** em **MODEL_VERSIONS** para ir à seção **model insights**.

**Passo 3:** Selecione **Jetson Xavier** como **Target Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

Agora você verá todas as métricas de desempenho para o modelo **YOLOX_Nano**, caso ele seja implantado em um dispositivo Jetson Xavier NX.

**Passo 4:** Volte à página inicial do Deci Lab, clique no modelo **YOLOX_Nano Jetson Xavier NX Optimized** em **MODEL_VERSIONS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

Agora você verá todas as métricas de desempenho para o modelo **YOLOX_Nano Jetson Xavier NX Optimized**, caso ele seja implantado em um dispositivo Jetson Xavier NX.

#### Comparação de desempenho

Podemos comparar os resultados obtidos anteriormente para o hardware de destino Jetson Xavier usando a tabela abaixo

|                      | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|----------------------|------------|---------------------------------------|
| Accuracy             | 25.8       | 25.8                                  |
| Throughput           | 62.8fps    | 175.8fps                              |
| Latency              | 15.9361ms  | 5.6897ms                              |
| GPU memory footprint | 1.05MB     | 1.01MB                                |
| Model size           | 3.66MB     | 9.74MB                                |

Como você pode ver, o principal aumento de desempenho é na taxa de transferência, em que o modelo otimizado é quase **2,7 vezes mais rápido** do que o modelo base.

### Fazer deploy no dispositivo Jetson e fazer benchmark

Agora vamos fazer deploy dos dois modelos acima em um dispositivo Jetson Xavier NX e executar o benchmark para garantir que obtenhamos resultados de desempenho precisos.

#### Instalar o INFERY

- **Passo 1.** Abra uma janela de terminal no dispositivo Jetson e atualize a lista de pacotes

```sh
sudo apt update 
```

- **Passo 2.** Instale o gerenciador de pacotes pip

```sh
sudo apt install python3-pip
```

- **Passo 3.** Atualize o pip para a versão mais recente

```sh
python3 -m pip install -U pip
```

- **Passo 4.** Instale o INFERY para Jetson

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### Carregar o modelo

- **Passo 1.** No Deci Lab, passe o mouse sobre o nome do modelo e clique em **Deploy** na janela pop-up

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2.** Clique em **Download model** para baixar o modelo para o PC e depois copie esse arquivo de modelo para o diretório home do dispositivo Jetson

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **Passo 3.** Abra uma janela de terminal no dispositivo Jetson e execute

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **Passo 4.** Copie o segundo comando em **LOAD MODEL** na janela **Deploy Model** do Deci lab para a janela de terminal do dispositivo Jetson (certifique-se de que Jetson esteja selecionado como hardware de destino)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**Nota:** Certifique-se de ajustar o parâmetro **model_path** de acordo com o local onde você copiou o modelo anteriormente. Se você copiou o arquivo de modelo para o diretório home, pode manter o caminho como está.

Você verá a seguinte saída, se o modelo for carregado com sucesso

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### Medir o desempenho de um modelo

Para medir o desempenho de um modelo usando INFERY, execute o comando **model.benchmark** a partir da sua aplicação

```sh
model.benchmark(batch_size=1)
```

A saída a seguir será para o modelo **YOLOX_Nano**

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "13.63 ms",
    "batch_inf_time_variance": "1.12 ms",
    "memory": "3537.89 mb",
    "pre_inference_memory_used": "3532.94 mb",
    "post_inference_memory_used": "3537.89 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "73.36 fps",
    "sample_inf_time": "13.63 ms",
    "include_io": true,
    "framework_type": "onnx",
    "framework_version": "1.8.0",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:23:57__07-06-2022",
    "ctime": 1657112037,
    "h_to_d_mean": null,
    "d_to_h_mean": null,
    "h_to_d_variance": null,
    "d_to_h_variance": null
}>
```

onde:

- 'batch_size' – Especifica o tamanho do lote que foi usado para o benchmark.
- 'batch_inf_time' – Especifica a latência para o lote inteiro.
- 'sample_inf_time' – Especifica a latência para uma única amostra dentro do lote, equivalente a batch_inf_time dividido por batch_size.
- 'memory' – Especifica o consumo de memória que o modelo utiliza durante a inferência.
- 'throughput' – Especifica o número de requisições que são processadas (passagens forward) por segundo.
- 'batch_inf_time_variance' – Especifica a variância dos tempos de inferência em lote durante o benchmark. Se a variância for alta, recomendamos aumentar o número passado para 'repetitions' para tornar os benchmarks mais confiáveis.

Repita os mesmos passos para o **modelo YOLOX_Nano Jetson Xavier NX otimizado**, execute o benchmark e você verá os resultados a seguir:

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "5.28 ms",
    "batch_inf_time_variance": "0.05 ms",
    "memory": "2555.62 mb",
    "pre_inference_memory_used": "2559.38 mb",
    "post_inference_memory_used": "2555.62 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "189.25 fps",
    "sample_inf_time": "5.28 ms",
    "include_io": true,
    "framework_type": "trt",
    "framework_version": "8.0.1.6",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:30:05__07-06-2022",
    "ctime": 1657112405,
    "h_to_d_mean": "0.43 ms",
    "d_to_h_mean": "0.20 ms",
    "h_to_d_variance": "0.00 ms",
    "d_to_h_variance": "0.00 ms"
}>
```

#### Comparação de desempenho

Podemos principalmente comparar o throughput para esses resultados

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX otimizado |
|------------|------------|---------------------------------------|
| Throughput | 73.36fps   | 189.25fps                             |

Pode-se observar que o modelo otimizado é quase **2,57 vezes mais rápido** do que o modelo base.

## Recursos

- **[Página da Web]** [Deci AI Documentation](https://docs.deci.ai/docs)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
