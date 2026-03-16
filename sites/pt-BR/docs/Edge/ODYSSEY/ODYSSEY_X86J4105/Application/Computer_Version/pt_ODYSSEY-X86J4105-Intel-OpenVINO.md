---
description: ODYSSEY - X86J4105
title: Intel OpenVINO Toolkit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Intel-OpenVINO
sku: 102110399,102110398,102110397,110991412,110991465,102110477,102110478,102110479
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Intel-OpenVINO/
---

# Instalando o Intel® Distribution of OpenVINO™ toolkit para ODYSSEY - X86J4105

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

O **Intel® Distribution of OpenVINO™ toolkit** implanta rapidamente aplicações e soluções que emulam a visão humana. Baseado em Redes Neurais Convolucionais (CNN), o toolkit estende cargas de trabalho de visão computacional (CV) em todo o hardware Intel®, maximizando o desempenho. O Intel® Distribution of OpenVINO™ toolkit inclui o Intel® Deep Learning Deployment Toolkit (Intel® DLDT).

Para mais informações, visite [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/).

**Nota:** De acordo com o documento oficial, o OpenVINO™ toolkit pode ser instalado em diferentes sistemas operacionais. **Para este tutorial, o Ubuntu 18.04.4 LTS está instalado no ODYSSEY - X86J4105 e o OpenVINO™ toolkit será instalado no Linux.** É altamente recomendado instalar esta versão do Ubuntu para evitar erros de ambiente que possam ocorrer.

Este tutorial é modificado a partir do oficial [Install Intel® Distribution of OpenVINO™ toolkit for Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html).

## Requisitos de Hardware

- Um computador funcional

- Um monitor

- Teclado e mouse

- Conexão com a Internet

## Instalar o sistema operacional Ubuntu

Se você ainda não instalou o Ubuntu, sinta-se à vontade para seguir [este tutorial](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Installing-OS/) para instalar o Ubuntu no seu ODYSSEY - X86J4105.

## Instalar o Intel® Distribution of OpenVINO™ Toolkit

Baixe o arquivo de pacote do Intel® Distribution of OpenVINO™ toolkit a partir de Intel® [Distribution of OpenVINO™ toolkit for Linux*](https://software.intel.com/en-us/openvino-toolkit/choose-download?elq_cid=6204639&erpm_id=9318801). Selecione o pacote Intel® Distribution of OpenVINO™ toolkit for Linux no menu suspenso.

1. Abra o Terminal no Ubuntu.

2. Altere os diretórios para onde você baixou o pacote Intel Distribution of OpenVINO toolkit for Linux*. se baixado para o diretório `Downloads` do usuário atual:

```sh
cd ~/Download/
```

Por padrão, o arquivo é salvo como `l_openvino_toolkit_p_<version>.tgz`

3. Descompacte o arquivo `.tgz`:

```sh
tar -xvzf l_openvino_toolkit_p_<version>.tgz
```

Os arquivos são descompactados para a pasta `l_openvino_toolkit_p_<version>`.

4. Vá para o diretório `l_openvino_toolkit_p_<version>`:

```sh
cd l_openvino_toolkit_p_<version>
```

5. Instale o Intel® Distribution of OpenVINO™ Toolkit executando o seguinte script:

```sh
sudo ./install_GUI.sh
```

**Nota:** Este é o Assistente de instalação GUI, também há as instruções de linha de comando: `sudo ./install.sh`, mas é altamente recomendado usar a instalação GUI para evitar erros.

6. Siga as instruções na tela.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-01.png)

7. Se você selecionar as opções padrão, a tela de resumo da instalação GUI ficará assim:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-02.png)

- **Nota:**  Você também pode personalizar para alterar o diretório de instalação ou os componentes que deseja instalar:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-03.png)

Quando instalado como **root** o diretório de instalação padrão para o Intel Distribution of OpenVINO é `/opt/intel/openvino/`.

8. Uma tela de conclusão aparecerá quando os componentes principais tiverem sido instalados:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-04.png)

## Instalar Dependências Externas de Software

Essas dependências são necessárias para:

- Compilação otimizada pela Intel da biblioteca OpenCV

- Deep Learning Inference Engine

- Ferramentas Deep Learning Model Optimizer

1. Altere para o diretório `install_dependencies`:

```sh
cd /opt/intel/openvino/install_dependencies
```

2. Execute o script para baixar e instalar as dependências externas de software:

```sh
sudo -E ./install_openvino_dependencies.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/dependent-complete.png)

Isso depende da velocidade da internet, por favor seja paciente. As dependências externas de software estão instaladas!

## Definir as Variáveis de Ambiente

Você deve atualizar várias variáveis de ambiente antes de poder compilar e executar aplicações OpenVINO™. Execute o seguinte script para definir temporariamente suas variáveis de ambiente:

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

**Nota:** As variáveis de ambiente do OpenVINO são removidas quando você fecha o shell. Como opção, você pode definir permanentemente as variáveis de ambiente da seguinte forma:

1. Abra o arquivo `.bashrc` em `<user_directory>`.

```sh
nano /home/USERNAME/.bashrc
```

Substitua o seu nome de usuário por `USERNAME`.

2. Adicione esta linha ao final do arquivo:

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/source-environment.png)

3. Use **Ctrl + O** para salvar e **Ctrl + X** para sair.

4. Para testar sua alteração, abra um novo terminal. Você deverá ver `[setupvars.sh] OpenVINO environment initialized` no topo do terminal.

## Configurar o Model Optimizer

O Model Optimizer é uma ferramenta de linha de comando baseada em Python* para importar modelos treinados de estruturas populares de deep learning tais como Caffe*, TensorFlow*, Apache MXNet*, ONNX* e Kaldi*.

O Model Optimizer é um componente-chave do Intel Distribution of OpenVINO toolkit. Você não pode executar inferência no seu modelo treinado sem executar o modelo através do Model Optimizer. Quando você executa um modelo pré-treinado através do Model Optimizer, sua saída é uma Representação Intermediária (IR) da rede. A Representação Intermediária é um par de arquivos que descrevem todo o modelo:

- `.xml`: Descreve a topologia da rede

- `.bin`: Contém os dados binários de pesos e vieses

Para mais informações sobre o Model Optimizer, consulte o [Model Optimizer Developer Guide](https://docs.openvinotoolkit.org/latest/_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html).

### Etapas de Configuração do Model Optimizer

Você pode escolher configurar todos os frameworks suportados de uma vez **OU** configurar um framework por vez. Escolha a opção que melhor se adapta às suas necessidades. Se você vir mensagens de erro, certifique-se de ter instalado todas as dependências.

**OPÇÃO 1: Configurar todos os frameworks suportados ao mesmo tempo**

1. Vá para o diretório de pré-requisitos do Model Optimizer:

```sh
cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites
```

2. Execute o script para configurar o Model Optimizer para Caffe, TensorFlow, MXNet, Kaldi* e ONNX:

```sh
sudo ./install_prerequisites.sh
```

**OPÇÃO 2: Configurar cada framework separadamente**

Execute o script para o framework do seu modelo. Você pode executar mais de um script:

- Para **Caffe**:

```
sudo ./install_prerequisites_caffe.sh
```

- Para **TensorFlow**:

```
sudo ./install_prerequisites_tf.sh
```

- Para **MXNet**:

```
sudo ./install_prerequisites_mxnet.sh
```

- Para **ONNX**:

```
sudo ./install_prerequisites_onnx.sh
```

- Para **Kaldi**:

```
sudo ./install_prerequisites_kaldi.sh
```

Agora você está pronto para compilar e executar os exemplos!

## Execute o Script de Verificação para Verificar a Instalação

**Para verificar a instalação e compilar dois exemplos na CPU do ODYSSEY - X86J4105:**

1. Vá para o diretório de demonstração do Inference Engine:

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. Execute o **script de verificação de Classificação de Imagem:**

```sh
./demo_squeezenet_download_convert_run.sh
```

Este script de verificação baixa um modelo SqueezeNet, usa o Model Optimizer para converter o modelo para os arquivos de Representação Intermediária (IR) .bin e .xml. O Inference Engine requer essa conversão de modelo para que possa usar a IR como entrada e atingir desempenho máximo no hardware Intel.

Este script de verificação compila a [aplicação Image Classification Sample Async](https://docs.openvinotoolkit.org/latest/_inference_engine_samples_classification_sample_async_README.html) e a executa com a imagem `car.png` localizada no diretório de demonstração. Quando o script de verificação é concluído, você terá o rótulo e a confiabilidade para as 10 principais categorias:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-1.png)

Execute o **script de verificação do Pipeline de Inferência:**

```sh
./demo_security_barrier_camera.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

Este script baixa três IRs de modelos pré-treinados, compila a aplicação [Security Barrier Camera Demo](https://docs.openvinotoolkit.org/latest/_demos_security_barrier_camera_demo_README.html) e a executa com os modelos baixados e a imagem car_1.bmp do diretório de demonstração para mostrar um pipeline de inferência. O script de verificação usa reconhecimento de veículos no qual os atributos do veículo se baseiam uns nos outros para restringir a um atributo específico.

Para aprender sobre os scripts de verificação, veja o arquivo **README.txt** em `/opt/intel/openvino/deployment_tools/demo`.

Para uma descrição dos modelos pré-treinados de detecção e reconhecimento de objetos do Intel Distribution of OpenVINO™, veja [Overview of OpenVINO™ Toolkit Pre-Trained Models](https://docs.openvinotoolkit.org/latest/_models_intel_index.html).

Você concluiu todas as etapas necessárias de instalação, configuração e compilação neste guia para usar sua CPU para trabalhar com seus modelos treinados, sinta-se à vontade para explorar a poderosa ferramenta Intel OpenVINO para treinar seus modelos com o ODYSSEY - X86J4105!

## Recursos

- [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/)

- [Install Intel® Distribution of OpenVINO™ toolkit for Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
