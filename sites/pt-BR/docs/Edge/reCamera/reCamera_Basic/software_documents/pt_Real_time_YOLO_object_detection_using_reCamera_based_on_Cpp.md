---
description: Este wiki demonstra como usar YOLO para detectar objetos em tempo real na reCamera com C++.
title: Detecção de objetos em tempo real com YOLO usando reCamera baseada em Cpp
keywords:
  - Http
  - reCamera
  - Object detecton
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /real_time_yolo_object_detection_using_recamera_based_on_cpp
last_update:
  date: 06/26/2025
  author: Liangyuxin
no_comments: false
createdAt: '2025-06-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/real_time_yolo_object_detection_using_recamera_based_on_cpp/
---

# Detecção de objetos em tempo real com YOLO usando reCamera baseada em Cpp

Este documento demonstra como implementar captura de fotos em tempo real, detecção de objetos com YOLO e acesso aos resultados via HTTP com C++ baseado em compilação cruzada em terminais reCamera. Esta abordagem evita problemas de superaquecimento encontrados ao usar Node-RED na reCamera. Você pode consultar este documento para modificar o código em C++ para aplicações personalizadas de visão computacional.

## Preparação do Ambiente

### Pré-compilação

Primeiro, você precisa consultar o documento "Develop with C/C++" para configurar o ambiente de compilação cruzada no seu Linux.
**Observação**: Reconfigure o caminho após cada inicialização:

```
export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Em seguida, faça o download do projeto **[Realtime_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Realtime_detection_http.zip)** e compile-o.​

```
cd Realtime_detection_http/
mkdir build && cd build
cmake ..
make
```

A presença do arquivo executável verde **Realtime_detection_http** no diretório de build indica compilação bem-sucedida:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/1.png" /></div>

Em seguida, abra o terminal da reCamera e copie o arquivo executável para o diretório do terminal reCamera.​

```
 sudo scp Realtime_detection_http recamera@192.168.42.1:/home/recamera/
```

### Preparação da reCamera

1.Faça o download do **YOLOv11** que já foi implantado em **[On Device Models](https://wiki.seeedstudio.com/pt-br/recamera_on_device_models/)** e copie o arquivo **.cvimodel** do modelo para o terminal da sua reCamera: **/home/recamera/**.
2.Antes de executar o código, acesse o [workspace](http://192.168.42.1/#/workspace) da reCamera para encerrar o processo (consulte **[Develop with c/c++](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_c_cpp)**) a fim de evitar consumo de memória.
3.Em seguida, navegue até **/etc/init.d/**, copie as pastas **S93sscma-supervisor** e **S91sscma-node** para **/home/recamera/** ou outro local para backup, e exclua as pastas originais **S93sscma-supervisor** e **S91sscma-node** para evitar consumo de memória e ocupação do programa.​

```
cd /etc/init.d/
sudo scp S93sscma-supervisor /home/recamera/
sudo scp S91sscma-node /home/recamera/
sudo rm -r S93sscma-supervisor
sudo rm -r S91sscma-node
```

## Executar o programa

Execute o programa como administrador em **/home/recamera/** no terminal da reCamera​:

```
sudo ./Realtime_detection_http
```

## Resultados

O terminal exibirá o seguinte, indicando operação normal do programa:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/2.png" /></div>

Você pode acessar http://192.168.42.1/modeldetector via navegador ou Postman. A reCamera irá capturar uma foto imediatamente e retornar os objetos detectados pelo YOLOv11.​
Navegador:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/3.png" /></div>

Postman:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/4.png" /></div>

As informações retornadas incluem os seguintes dados:​​

- **Code**:1 (Em execução)
- **Msg**: Mensagens de erro
- **Initialize_camera_duration**: A duração da inicialização da câmera é exibida apenas durante o primeiro acesso.​
- **Initialize_model_duration**: A duração da inicialização do modelo é exibida apenas durante o primeiro acesso.​
- **Data**:
  - ​**Score**: Pontuação de confiança da detecção (0-1)
  - **Target**: Nome do objeto detectado
  - **Box**:[x1, y1, x2, y2]​: Coordenadas da caixa de detecção (em pixels representando as bordas [esquerda, superior, direita, inferior])
  - ​**Center**:[x, y]​: Posição central normalizada da caixa de detecção (proporção em relação à largura/altura da imagem)
  - ​**Size**:[w, h]​: Largura e altura normalizadas da caixa de detecção (proporção em relação às dimensões da imagem)
  - **Release_duration**: Tempo gasto para limpar o cache da câmera (ms)
  - ​**Capture_duration**: Duração da aquisição da imagem (ms)
  - ​**Image_preprocessing_duration**: Duração da preparação da imagem antes da inferência (ms)
  - **Detection_duration**: Duração da detecção do modelo (ms) (Incluindo Preprocessing, Inference, Postprocessing)
- ​**Duration**: Tempo total de execução do programa (ms)
- **Timestamp**: Carimbo de data/hora Unix

O terminal exibirá:​

- Parâmetros de inicialização da câmera​:
  - Resolução: **1920×1080**
  - Taxa de quadros: **5 fps**
  - Canal de captura: **Canal 2**
- Tamanho da imagem capturada (por exemplo, **Jpeg size: 216149 (pixels)**)
- ​Uso de memória (MB) durante diferentes etapas：
  - Pré-captura (**Memory usage**)
  - Liberação (**Memory usage_during_**)
  - Pós-captura (**Memory usage_after**)
  - Após o pré-processamento da imagem (**Memory usage_before_model**)
  - Após a detecção do modelo (**Memory usage_after_model**)
- Duração da detecção do modelo (ms)
  - Pré-processamento (por exemplo, **pre: 9ms**)
  - Inferência (por exemplo, **infer: 40ms**)
  - Pós-processamento (por exemplo, **post:395ms**)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/5.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/6.png" /></div>

No terminal da reCamera, as imagens detectadas podem ser salvas automaticamente:​
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/7.jpg" /></div>

Você pode acessá-la continuamente com o seu dispositivo para obter resultados de detecção em tempo real para aplicações como segurança inteligente e vigilância.

Você pode modificar o formato da mensagem retornada em **registerModelDetector()** (**Realtime_detection_http/src/http.cpp**) e **model_detector()** (**Realtime_detection_http/src/model_detector.cpp**).
Você também pode usar o seu próprio modelo implantado ao chamar **initialize_model(const std::string& model_path)** em **registerModelDetector()**, e modificar as configurações de inicialização da câmera em **initialize_camera()**(**Realtime_detection_http/src/model_detector.cpp**):

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/8.png" /></div>

Após a detecção, você pode pressionar Ctrl+C para encerrar a operação.​O programa irá parar a câmera.​

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/9.png" /></div>

Para mais detalhes, consulte nosso [repositório GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Suporte Técnico & Discussão sobre o Produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
