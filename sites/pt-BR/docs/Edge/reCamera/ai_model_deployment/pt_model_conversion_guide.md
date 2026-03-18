---
description: Guia Completo do Workshop reCamera
title: Conversão de Modelo YOLO11n para reCamera
keywords:
  - Borda
  - reCamera
  - Conversão de Modelo
image: https://files.seeedstudio.com/wiki/reCamera/013.webp
slug: /model_conversion_guide
last_update:
  date: 10/28/2025
  author: Peter
createdAt: '2025-09-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/model_conversion_guide/
---

# Conversão de Modelo YOLO11n para reCamera: Guia Completo

## Índice

1. [Introdução](#introdução)
2. [Compreendendo as Restrições de Hardware](#compreendendo-as-restrições-de-hardware)
3. [Pré-requisitos](#pré-requisitos)
4. [Opções de Configuração de Provedor de Nuvem](#opções-de-configuração-de-provedor-de-nuvem)
5. [Processo de Conversão Passo a Passo](#processo-de-conversão-passo-a-passo)
6. [Problemas Comuns e Solução de Problemas](#problemas-comuns-e-solução-de-problemas)
7. [Implantação na reCamera](#implantação-na-recamera)
8. [Perguntas Frequentes](#perguntas-frequentes)

## Introdução

### Por Que a Conversão de Modelo é Necessária

Os dispositivos da série reCamera são câmeras de IA de borda alimentadas pelo chip Sophgo CV181x, que usa uma Unidade de Processamento Tensorial (TPU) especializada para inferência de aprendizado de máquina. Diferente de CPUs ou GPUs de uso geral, as TPUs exigem que os modelos estejam em um formato específico, otimizado para sua arquitetura.

**Principais Motivos para a Conversão:**

1. **Otimização de Hardware**: O chip CV181x usa quantização INT8 em vez de FP32, reduzindo o tamanho do modelo em ~75% e aumentando a velocidade de inferência em 4-8x
2. **Restrições de Memória**: Os dispositivos reCamera têm RAM limitada (256MB-512MB), exigindo modelos compactados
3. **Eficiência Energética**: Modelos otimizados para TPU consomem significativamente menos energia do que alternativas em CPU/GPU
4. **Desempenho em Tempo Real**: Dispositivos de borda precisam de tempos de inferência abaixo de 100ms para aplicações práticas

### Sobre o Hardware da reCamera

A família reCamera inclui várias variantes, todas construídas em torno do SoC Sophgo CV181x:

- **reCamera Default**: Modelo básico com sensor de 2MP, conectividade USB-C
- **reCamera Microscope**: Especializada para imagens em close com lentes intercambiáveis
- **reCamera HD POE**: Maior resolução com suporte a Power-over-Ethernet
- **reCamera Gimbal**: Gimbal motorizado com recursos de rastreamento de objetos

**Especificações Técnicas:**

- **Processador**: Sophgo CV181x (RISC-V + TPU)
- **Desempenho de IA**: 0,5 TOPS INT8
- **Memória**: 256MB DDR3
- **Armazenamento**: 16MB SPI Flash + microSD
- **Formatos Suportados**: Modelos CVI (formato proprietário da Sophgo)

### O Desafio da Conversão

Modelos YOLO11n são normalmente treinados em PyTorch e exportados para o formato ONNX. No entanto, o chip CV181x da reCamera não pode executar modelos ONNX diretamente. O processo de conversão envolve:

1. **Tradução da Arquitetura do Modelo**: Converter ONNX para MLIR (Multi-Level Intermediate Representation)
2. **Quantização**: Converter pesos FP32 para INT8 mantendo a precisão
3. **Otimização para Hardware**: Adaptar operações de camadas para aceleração em TPU
4. **Conversão de Formato**: Criar o formato final de modelo CVI

## Compreendendo as Restrições de Hardware

### Limitações de Memória

- **Limite de Tamanho do Modelo**: Tipicamente 8-16MB para implantação prática
- **Resolução de Entrada**: Geralmente 640x640 para YOLO11n para equilibrar precisão e desempenho
- **Tamanho de Lote (Batch Size)**: Limitado a 1 devido às restrições de memória

### Restrições de Processamento

- **Operações Suportadas**: Nem todas as operações ONNX têm equivalentes em TPU
- **Perda de Precisão**: A quantização INT8 pode reduzir a precisão em 1-3%
- **Velocidade de Inferência**: A meta é 10-30 FPS dependendo da complexidade do modelo

### Por Que Frameworks de ML Padrão Não Funcionam

- **TensorFlow/PyTorch**: Projetados para CPUs x86/ARM e GPUs NVIDIA
- **ONNX Runtime**: Não possui suporte de backend para CV181x
- **TensorRT**: Específico da NVIDIA, incompatível com hardware Sophgo

## Pré-requisitos

### Conhecimentos Necessários

- Operações básicas de linha de comando em Linux
- Entendimento de contêineres Docker
- Familiaridade com a arquitetura de modelos YOLO
- Conceitos básicos de redes para implantação em nuvem

### Softwares Necessários

- Docker Desktop (para desenvolvimento local)
- Cliente SSH (Terminal no macOS, PuTTY no Windows)
- Navegador web para gerenciamento do provedor de nuvem
- Editor de texto para arquivos de configuração

### Arquivos Necessários

- Modelo YOLO11n treinado em formato ONNX
- 100 imagens de calibração (representativas do seu conjunto de dados)
- 1 imagem de teste para validação

## Opções de Configuração de Provedor de Nuvem

Como o processo de conversão requer Linux e toolchains específicos, provedores de nuvem oferecem o ambiente mais confiável. Aqui estão guias de configuração para os principais provedores:

### Opção 1: DigitalOcean (Recomendado para Iniciantes)

**Vantagens**: Interface simples, preços previsíveis, boa documentação

**Etapas de Configuração:**

1. Crie uma conta DigitalOcean em [digitalocean.com](https://www.digitalocean.com)
2. Crie um novo Droplet com estas especificações:
   - **Imagem**: Ubuntu 22.04 LTS
   - **Plano**: Básico, 4GB RAM, 2 vCPUs (US$ 24/mês, pode ser excluído após o uso)
   - **Região**: Escolha a mais próxima da sua localização
   - **Autenticação**: Chave SSH (recomendado) ou Senha

3. **Conexão SSH:**

   ```bash
   ssh root@your_droplet_ip
   ```

4. **Instalar Dependências:**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**Custo Estimado**: US$ 0,50-2,00 para o processo de conversão (se excluído imediatamente após)

### Opção 2: AWS EC2

**Vantagens**: Plataforma de nuvem mais abrangente, nível gratuito disponível

**Etapas de Configuração:**

1. Crie uma conta AWS em [aws.amazon.com](https://aws.amazon.com)
2. Inicie uma instância EC2:
   - **AMI**: Ubuntu Server 22.04 LTS
   - **Tipo de Instância**: t3.medium (2 vCPU, 4GB RAM)
   - **Security Group**: Permitir SSH (porta 22) a partir do seu IP

3. **Conexão SSH:**

   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

4. **Instalar Dependências:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**Custo Estimado**: US$ 0,10-0,50 para o processo de conversão (preços t3.medium)

### Opção 3: Google Cloud Platform

**Vantagens**: Créditos gratuitos de US$ 300 para novos usuários, excelente desempenho

**Etapas de Configuração:**

1. Crie uma conta GCP em [cloud.google.com](https://cloud.google.com)
2. Crie uma instância Compute Engine:
   - **Tipo de Máquina**: e2-standard-2 (2 vCPU, 8GB RAM)
   - **Disco de Inicialização**: Ubuntu 22.04 LTS, 20GB
   - **Firewall**: Permitir tráfego HTTP/HTTPS

3. **SSH via Navegador** (terminal integrado) ou use o gcloud CLI

4. **Instalar Dependências:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```

**Custo Estimado**: Gratuito com créditos, caso contrário ~US$ 0,20-0,60 para conversão

### Opção 4: Microsoft Azure

**Vantagens**: Boa integração com o ecossistema Windows, descontos para estudantes

**Etapas de Configuração:**

1. Crie uma conta Azure em [azure.microsoft.com](https://azure.microsoft.com)
2. Crie uma Máquina Virtual:
   - **Imagem**: Ubuntu Server 22.04 LTS
   - **Tamanho**: Standard_B2s (2 vCPUs, 4GB RAM)
   - **Autenticação**: Chave pública SSH

3. **Conexão SSH:**

   ```bash
   ssh azureuser@your-vm-ip
   ```

4. **Instalar Dependências:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker azureuser
   ```

**Custo Estimado**: ~US$ 0,30-0,80 para o processo de conversão

### Opção 5: Alibaba Cloud

**Vantagens**: Forte presença na Ásia, preços competitivos

**Etapas de Configuração:**

1. Crie uma conta em [alibabacloud.com](https://www.alibabacloud.com)
2. Crie uma instância ECS:
   - **Imagem**: Ubuntu 22.04 64-bit
   - **Tipo de Instância**: ecs.t6-c1m2.large (2 vCPU, 4GB RAM)
   - **Security Group**: Permitir SSH (22/22)

3. **Conexão SSH:**

   ```bash
   ssh root@your-ecs-ip
   ```

4. **Instalar Dependências:**

   ```bash
   apt update && apt upgrade -y
   apt install -y docker.io git wget
   systemctl start docker
   systemctl enable docker
   ```

**Custo Estimado**: ~US$ 0,20-0,50 para o processo de conversão

### Opção 6: Tencent Cloud

**Vantagens**: Bom para usuários na China, preços acessíveis

**Etapas de Configuração:**

1. Crie uma conta em [intl.cloud.tencent.com](https://intl.cloud.tencent.com)
2. Crie uma instância CVM:
   - **Imagem**: Ubuntu Server 22.04 LTS 64-bit
   - **Modelo**: S5.MEDIUM4 (2 vCPU, 4GB RAM)
   - **Security Group**: Permitir SSH (porta 22)

3. **Conexão SSH:**

   ```bash
   ssh ubuntu@your-cvm-ip
   ```

4. **Instalar Dependências:**

   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io git wget
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker ubuntu
   ```

**Custo Estimado**: ~US$ 0,15-0,40 para o processo de conversão

## Processo de Conversão Passo a Passo

### Passo 1: Prepare Seu Ambiente

1. **Conecte-se à sua instância na nuvem via SSH**

2. **Configure o ambiente TPU-MLIR:**

   ```bash
   # Pull the official TPU-MLIR Docker image
   docker pull sophgo/tpuc_dev:v3.1

   # Create working directory
   mkdir ~/yolo_conversion && cd ~/yolo_conversion

   # Start Docker container
   docker run --privileged --name tpu_converter -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
   ```

3. **Instale as ferramentas TPU-MLIR dentro do contêiner:**

   ```bash
   pip install tpu_mlir[all]==1.7

   # Clone and build TPU-MLIR
   git clone -b v1.7 --depth 1 https://github.com/sophgo/tpu-mlir.git
   cd tpu-mlir
   source ./envsetup.sh
   ./build.sh
   ```

### Passo 2: Envie Seus Arquivos de Modelo

**A partir da sua máquina local, envie arquivos para a instância na nuvem:**

```bash
# Upload ONNX model
scp your_model.onnx user@your-cloud-ip:~/yolo_conversion/

# Upload calibration images (create zip first)
zip -r calibration_images.zip /path/to/calibration/images/
scp calibration_images.zip user@your-cloud-ip:~/yolo_conversion/

# Upload test image
scp test_image.jpg user@your-cloud-ip:~/yolo_conversion/
```

### Passo 3: Prepare a Estrutura de Diretórios

**Dentro da sua instância na nuvem:**

```bash
# Create required directory structure
mkdir -p model_yolo11n/{COCO2017,image,Workspace}

# Extract and organize files
unzip calibration_images.zip
mv calibration_images/* model_yolo11n/COCO2017/
mv test_image.jpg model_yolo11n/image/test.jpg
mv your_model.onnx model_yolo11n/Workspace/yolo11n.onnx

# Rename calibration images to expected format
cd model_yolo11n/COCO2017/
count=1
for file in *.jpg *.png *.jpeg; do
    if [ -f "$file" ]; then
        mv "$file" "Calibration${count}.jpg"
        ((count++))
        if [ $count -gt 100 ]; then break; fi
    fi
done
cd ../..
```

### Passo 4: Entrar no contêiner Docker e iniciar a conversão

```bash
# Copy model folder into Docker container
docker cp model_yolo11n tpu_converter:/workspace/tpu-mlir/

# Enter Docker container
docker exec -it tpu_converter /bin/bash

# Navigate to workspace
cd /workspace/tpu-mlir/model_yolo11n/Workspace
```

### Passo 5: Pipeline de conversão do modelo

**5.1: Downgrade da versão ONNX**

```bash
python /workspace/tpu-mlir/downgrade_onnx.py yolo11n.onnx yolo11n_v8.onnx
```

**5.2: Converter ONNX para MLIR**

```bash
model_transform \
--model_name yolo11n \
--model_def yolo11n_v8.onnx \
--input_shapes "[[1,3,640,640]]" \
--mean "0.0,0.0,0.0" \
--scale "0.0039216,0.0039216,0.0039216" \
--keep_aspect_ratio \
--pixel_format rgb \
--output_names "/model.23/cv2.0/cv2.0.2/Conv_output_0,/model.23/cv3.0/cv3.0.2/Conv_output_0,/model.23/cv2.1/cv2.1.2/Conv_output_0,/model.23/cv3.1/cv3.1.2/Conv_output_0,/model.23/cv2.2/cv2.2.2/Conv_output_0,/model.23/cv3.2/cv3.2.2/Conv_output_0" \
--test_input ../image/test.jpg \
--test_result yolo11n_top_outputs.npz \
--mlir yolo11n.mlir
```

**Explicações dos parâmetros:**

- **`--model_name`**: Identificador para o seu modelo no pipeline de conversão
  - *Finalidade*: Cria nomenclatura consistente ao longo de todo o processo
  - *Pode ser alterado*: Sim, use nomes descritivos como "traffic_detection" ou "person_counter"
  - *Efeito*: Apenas afeta a nomenclatura interna, sem impacto no desempenho

- **`--model_def`**: Caminho para o arquivo de modelo ONNX
  - *Finalidade*: Especifica qual modelo será convertido
  - *Pode ser alterado*: Sim, deve corresponder ao nome real do seu arquivo ONNX
  - *Efeito*: Modelos diferentes produzirão resultados diferentes

- **`--input_shapes`**: Define as dimensões do tensor de entrada `[batch, channels, height, width]`
  - *Finalidade*: Informa ao conversor o formato esperado da imagem de entrada
  - *Valor padrão*: `[[1,3,640,640]]` para YOLO11n
  - *Pode ser alterado*: ⚠️ **Atenção** - Deve corresponder à resolução usada no treinamento
  - *Efeitos das alterações*:
    - Menor (por exemplo, `320x320`): Inferência mais rápida, menor acurácia
    - Maior (por exemplo, `1280x1280`): Maior acurácia, muito mais lento, pode exceder os limites de memória
    - Proporção diferente: Vai distorcer as imagens, resultando em desempenho ruim

- **`--mean`**: Valores de média de normalização de pixel para os canais RGB
  - *Finalidade*: Centraliza os valores de pixel em torno de zero (pré-processamento padrão)
  - *Valor padrão*: `"0.0,0.0,0.0"` (sem subtração de média)
  - *Pode ser alterado*: Somente se o seu modelo tiver sido treinado com normalização diferente
  - *Alternativas comuns*:
    - ImageNet: `"123.675,116.28,103.53"` (se o modelo usar pré-processamento ImageNet)
    - Personalizado: Combine exatamente com o pré-processamento usado no treinamento

- **`--scale`**: Fatores de escala para normalização de pixel
  - *Finalidade*: Escala os valores de pixel do intervalo 0-255 para 0-1
  - *Valor padrão*: `"0.0039216,0.0039216,0.0039216"` (equivalente a 1/255)
  - *Pode ser alterado*: Somente se o seu modelo esperar intervalo de entrada diferente
  - *Efeitos das alterações*:
    - Valores de escala errados causarão falha completa do modelo
    - Deve corresponder exatamente ao que foi usado no treinamento do modelo

- **`--keep_aspect_ratio`**: Mantém as proporções da imagem durante o redimensionamento
  - *Finalidade*: Evita distorção da imagem, usando padding em vez de esticar
  - *Pode ser alterado*: Sim, use `--no_keep_aspect_ratio` para desativar
  - *Efeitos*:
    - Ativado (padrão): Melhor acurácia, padding preto nas imagens
    - Desativado: Um pouco mais rápido, mas as imagens podem ser distorcidas

- **`--pixel_format`**: Ordem dos canais de cor
  - *Finalidade*: Especifica se a entrada usa ordem de cor RGB ou BGR
  - *Valor padrão*: `rgb` para a maioria dos modelos modernos
  - *Pode ser alterado*: Sim, para `bgr` se o seu modelo esperar isso
  - *Efeitos da configuração errada*: As cores serão invertidas (vermelho aparece azul, etc.)

- **`--output_names`**: Especifica quais camadas do modelo usar como saídas
  - *Finalidade*: Informa ao conversor quais camadas contêm os resultados de detecção
  - *Padrão para YOLO11n*: As 6 camadas de saída exibidas (3 escalas × 2 cabeças cada)
  - *Pode ser alterado*: ⚠️ **Apenas para usuários avançados** - requer conhecimento profundo do modelo
  - *Efeitos*: Saídas erradas impedirão o funcionamento da detecção

- **`--test_input`**: Caminho para a imagem de validação
  - *Finalidade*: Testa a acurácia da conversão comparando resultados antes/depois
  - *Pode ser alterado*: Sim, use qualquer imagem representativa do seu conjunto de dados
  - *Recomendado*: Usar imagem semelhante ao cenário de implantação

- **`--test_result`**: Arquivo de saída para dados de validação
  - *Finalidade*: Armazena resultados de referência para comparação posterior
  - *Pode ser alterado*: Sim, qualquer nome de arquivo terminando em `.npz`
  - *Efeito*: Apenas afeta o nome do arquivo

- **`--mlir`**: Nome do arquivo MLIR de saída
  - *Finalidade*: Representação intermediária para a próxima etapa de conversão
  - *Pode ser alterado*: Sim, mas mantenha a extensão `.mlir`
  - *Efeito*: Apenas afeta o nome do arquivo

**5.3: Gerar tabela de calibração**

```bash
run_calibration \
yolo11n.mlir \
--dataset ../COCO2017 \
--input_num 100 \
-o yolo11n_calib_table
```

**Explicações dos parâmetros:**

- **`yolo11n.mlir`**: Modelo MLIR de entrada da etapa anterior
  - *Finalidade*: O arquivo de modelo que precisa de dados de calibração
  - *Pode ser alterado*: Deve corresponder ao nome do arquivo de saída da etapa 5.2
  - *Efeito*: Modelos diferentes produzirão tabelas de calibração diferentes

- **`--dataset`**: Caminho para o diretório de imagens de calibração
  - *Finalidade*: Fornece imagens representativas para analisar faixas de ativação
  - *Pode ser alterado*: Sim, mas deve conter imagens semelhantes ao cenário de implantação
  - *Requisitos*: As imagens devem estar em formato `.jpg`, `.png` ou `.bmp`
  - *Impacto na qualidade*: Imagens mais diversas e representativas = melhor calibração

- **`--input_num`**: Número de imagens de calibração a serem usadas
  - *Finalidade*: Determina quantas imagens são processadas para análise estatística
  - *Valor padrão*: `100` (bom equilíbrio entre acurácia e tempo de processamento)
  - *Pode ser alterado*: Sim, dentro de limites práticos
  - *Efeitos das alterações*:
    - **Menos imagens (25-50)**: Calibração mais rápida, quantização potencialmente menos precisa
    - **Mais imagens (200-500)**: Melhor acurácia de calibração, tempo de processamento muito maior
    - **Poucas demais (&lt;10)**: Quantização ruim, perda significativa de acurácia
    - **Muitas demais (>1000)**: Ganhos decrescentes, tempo de processamento muito longo

- **`-o` (arquivo de saída)**: Nome do arquivo da tabela de calibração
  - *Finalidade*: Armazena dados estatísticos sobre as ativações das camadas para quantização
  - *Pode ser alterado*: Sim, qualquer nome de arquivo (não é necessário extensão)
  - *Efeito*: Apenas afeta o nome do arquivo, o conteúdo é o mesmo

**O que acontece durante a calibração:**

1. **Análise estatística**: Cada imagem de calibração é processada pelo modelo
2. **Mapeamento de ativações**: A ferramenta registra a faixa de valores produzidos por cada camada
3. **Planejamento da quantização**: Determina como mapear valores FP32 para INT8 de forma eficiente
4. **Preservação da acurácia**: Encontra fatores de escala ideais para minimizar a perda de precisão

**Saída esperada**: Esse processo levará de 5 a 15 minutos e deverá mostrar um progresso como:

```
input_num = 100, ref = 100
real input_num = 100
activation_collect_and_calc_th for op: /model.23/cv3.2/cv3.2.2/Conv_output_0_Conv
[Progress bar showing completion]
auto tune end, run time: XXX seconds
```

**5.4: Compilar o modelo INT8 final**

```bash
model_deploy \
--mlir yolo11n.mlir \
--quantize INT8 \
--quant_input \
--processor cv181x \
--calibration_table yolo11n_calib_table \
--test_input ../image/test.jpg \
--test_reference yolo11n_top_outputs.npz \
--customization_format RGB_PACKED \
--fuse_preprocess \
--aligned_input \
--model yolo11n_sym_int8.cvimodel
```

**Explicações dos parâmetros:**

- **`--mlir`**: Arquivo de modelo MLIR de entrada
  - *Finalidade*: A representação do modelo a ser compilada para o TPU
  - *Pode ser alterado*: Deve corresponder à saída da etapa 5.2
  - *Efeito*: Arquivos MLIR diferentes produzirão modelos finais diferentes

- **`--quantize`**: Nível de precisão da quantização
  - *Finalidade*: Determina a precisão numérica para pesos e ativações do modelo
  - *Valor padrão*: `INT8` para reCamera (obrigatório para o TPU CV181x)
  - *Pode ser alterado*: Opções limitadas no CV181x
  - *Opções disponíveis*:
    - `INT8`: Obrigatório para reCamera, 4x menor, 4-8x mais rápido
    - `F16`: Maior precisão, tamanho maior, pode não caber na memória
    - `F32`: Precisão original, grande demais para implantação na reCamera

- **`--quant_input`**: Quantiza o pré-processamento de entrada
  - *Finalidade*: Move a escala/normalização da entrada para o TPU para maior eficiência
  - *Pode ser alterado*: Sim, omita esta flag para manter o processamento de entrada na CPU
  - *Efeitos*:
    - **Ativado** (recomendado): Inferência mais rápida, melhor utilização do TPU
    - **Desativado**: Um pouco mais lento, mas formatos de entrada mais flexíveis

- **`--processor`**: Especificação do hardware alvo
  - *Finalidade*: Otimiza a geração de código para a arquitetura específica do chip
  - *Valor padrão*: `cv181x` para todos os modelos reCamera
  - *Pode ser alterado*: ⚠️ **Nunca altere** - outros valores não funcionarão na reCamera
  - *Efeito*: Configuração incorreta de processador causará falha na implantação

- **`--calibration_table`**: Dados de referência de quantização
  - *Finalidade*: Fornece dados estatísticos para conversão INT8 ideal
  - *Pode ser alterado*: Deve corresponder ao nome de arquivo de saída da etapa 5.3
  - *Efeito*: Dados de calibração diferentes afetam a acurácia do modelo

- **`--test_input`**: Imagem de validação para teste de acurácia
  - *Finalidade*: Verifica a acurácia do modelo após a quantização
  - *Pode ser alterado*: Sim, deve representar um caso de uso típico
  - *Recomendação*: Use a mesma imagem da etapa 5.2 para consistência

- **`--test_reference`**: Saída de referência para comparação
  - *Finalidade*: Compara a saída do modelo quantizado com os resultados FP32 originais
  - *Pode ser alterado*: Deve corresponder ao nome do arquivo de saída da etapa 5.2
  - *Efeito*: Usado apenas para validação, não afeta o modelo final

- **`--customization_format`**: Otimização do layout dos dados de entrada
  - *Finalidade*: Otimiza o layout de memória para processamento no TPU
  - *Valor padrão*: `RGB_PACKED` para dados de imagem
  - *Pode ser alterado*: Apenas para usuários avançados
  - *Efeitos*:
    - `RGB_PACKED`: Otimizado para imagens RGB (recomendado)
    - `NCHW`: Formato padrão de tensor, pode ser mais lento

- **`--fuse_preprocess`**: Integra o pré-processamento ao modelo
  - *Purpose*: Combina redimensionamento/normalização de imagem com a inferência
  - *Can be changed*: Sim, omita a flag para lidar com o pré-processamento separadamente
  - *Effects*:
    - **Enabled** (recomendado): Implantação em uma única etapa, melhor desempenho
    - **Disabled**: Mais flexibilidade, mas requer pré-processamento externo

- **`--aligned_input`**: Otimização de alinhamento de memória
  - *Purpose*: Garante padrões ótimos de acesso à memória para o TPU
  - *Can be changed*: Sim, mas é recomendado manter para melhor desempenho
  - *Effects*:
    - **Enabled**: Melhor utilização da largura de banda de memória
    - **Disabled**: Pode ser ligeiramente mais lento

- **`--model`**: Nome de arquivo de saída para o modelo final convertido
  - *Purpose*: Cria o arquivo `.cvimodel` para implantação na reCamera
  - *Can be changed*: Sim, use nomes descritivos como `person_detection.cvimodel`
  - *Requirement*: Deve terminar com a extensão `.cvimodel`
  - *Effect*: Afeta apenas o nome do arquivo

**O que acontece durante a compilação:**

1. **Conversão de camadas**: Cada camada da rede neural é convertida em instruções para o TPU
2. **Otimização de memória**: Os pesos do modelo são organizados para acesso eficiente pelo TPU
3. **Aplicação de quantização**: Pesos FP32 são convertidos para INT8 usando dados de calibração
4. **Mapeamento de hardware**: As operações são mapeadas para unidades funcionais específicas do TPU
5. **Validação**: O modelo final é testado em comparação com as saídas de referência

**Saída esperada**: A conversão deve ser concluída com resultados de validação mostrando pontuações de similaridade >99%:

```
npz compare PASSED
230 compared
230 passed
min_similarity = (0.9999997615814209, 0.9999984392787142, 116.13544464111328)
```

**Expectativas de desempenho após a conversão:**

- **Tamanho do modelo**: 3-8MB (comparado a 20-40MB do ONNX original)
- **Velocidade de inferência**: 15-30 FPS na reCamera
- **Acurácia**: 97-99% do desempenho do modelo original
- **Uso de memória**: ~10-20MB de RAM durante a inferência

### Etapa 6: Fazer download do modelo convertido

**6.1: Sair do Docker e copiar o arquivo para o host**

```bash
# Exit Docker container
exit

# Copy converted model from container to host
docker cp tpu_converter:/workspace/tpu-mlir/model_yolo11n/Workspace/yolo11n_sym_int8.cvimodel ./

# Verify file exists and check size (should be 2-10MB)
ls -lh yolo11n_sym_int8.cvimodel
```

**6.2: Fazer download para sua máquina local**

```bash
# From your local machine
scp user@your-cloud-ip:~/yolo_conversion/yolo11n_sym_int8.cvimodel ~/Downloads/
```

### Etapa 7: Limpar recursos em nuvem

**Não se esqueça de encerrar sua instância em nuvem para evitar cobranças contínuas!**

- **DigitalOcean**: Destruir o Droplet no painel de controle
- **AWS**: Encerrar a instância EC2
- **GCP**: Excluir a instância do Compute Engine
- **Azure**: Excluir a Máquina Virtual
- **Alibaba/Tencent**: Liberar a instância ECS/CVM

## Problemas comuns e solução de problemas

### Problema 1: Erros "File not found" durante a conversão

**Sintomas**:

```
../image/test.jpg doesn't existed !!!
```

**Solução**:

```bash
# Check if file exists and has correct extension
ls -la ../image/
# If file has .img extension, rename it
mv ../image/test.img ../image/test.jpg
```

### Problema 2: "Directory not empty" ao mover arquivos

**Sintomas**:

```
mv: cannot move 'Download/model_yolo11n' to 'tpu-mlir/model_yolo11n': Directory not empty
```

**Solução**:

```bash
# Remove existing directory and replace
rm -rf tpu-mlir/model_yolo11n
mv Download/model_yolo11n tpu-mlir/
```

### Problema 3: Falha na calibração com "There is no inputs"

**Sintomas**:

```
RuntimeError: There is no inputs
```

**Solução**:

```bash
# Ensure calibration images are in correct format (.jpg, .png)
cd ../COCO2017/
for file in *.img; do
    mv "$file" "${file%.img}.jpg"
done
```

### Problema 4: Erros de permissão do Docker

**Sintomas**:

```
permission denied while trying to connect to the Docker daemon socket
```

**Solução**:

```bash
# Add user to docker group
sudo usermod -aG docker $USER
# Log out and log back in, or run:
newgrp docker
```

### Problema 5: Erros de falta de memória

**Sintomas**:

```
CUDA out of memory
```

**Solução**:

- Fazer upgrade para uma instância em nuvem maior (8GB+ de RAM)
- Reduzir o tamanho do batch nos comandos de conversão
- Usar menos imagens de calibração (mínimo 50)

### Problema 6: Falha na validação do modelo

**Sintomas**:

```
npz compare FAILED
```

**Solução**:

- Verificar se a imagem de teste é representativa dos dados de treinamento
- Verificar se o modelo ONNX é a versão correta
- Tentar uma imagem de teste diferente

### Problema 7: Problemas de conexão SSH

**Sintomas**:

```
Connection refused
ssh: connect to host [IP] port 22: Connection refused
```

**Solução**:

- Verificar se os grupos de segurança do provedor de nuvem permitem SSH (porta 22)
- Verificar se a instância está em execução
- Tentar uma chave SSH diferente ou autenticação por senha

## Implantação na reCamera

### Etapa 1: Conectar a reCamera

1. Conecte a reCamera ao seu computador via cabo USB-C
2. Acesse a interface web em `http://192.168.42.1`
3. Faça login com usuário: `root`, senha: `recamera.1`

### Etapa 2: Fazer upload do modelo

1. Navegue até a seção Workspace
2. Clique no nó do modelo no editor de fluxo
3. Clique no botão "Upload"
4. Selecione seu arquivo `.cvimodel`
5. Configure os parâmetros do modelo:
   - **Model Name**: `yolo11n_detection`
   - **Classes**: Insira os nomes das suas classes (separados por vírgula)
   - **Confidence Threshold**: 0.5 (ajuste conforme necessário)
   - **IoU Threshold**: 0.45

### Etapa 3: Implantar e testar

1. Clique no botão "Deploy"
2. Aguarde a mensagem "Successfully deployed"
3. Navegue até o Dashboard para visualização em tempo real
4. Ajuste os

## Perguntas Frequentes

### P: Quanto tempo leva o processo de conversão?

**R**: Normalmente entre 20 e 45 minutos, dependendo da complexidade do modelo e do desempenho da instância na nuvem. A etapa de calibração geralmente é a mais demorada.

### P: Posso usar uma versão diferente do YOLO?

**R**: Este guia é específico para **YOLO11n**. Outras versões (YOLOv8, YOLOv9) exigem nomes diferentes para as camadas de saída e podem apresentar problemas de compatibilidade.

### P: E se a precisão do meu modelo cair significativamente após a conversão?

**R**: Uma pequena perda de precisão (1–3%) é normal devido à quantização **INT8**. Se a perda for superior a **5%**, tente:

- Usar imagens de calibração mais representativas
- Aumentar o número de imagens de calibração para **200–500**
- Ajustar os limiares de confiança durante a implantação

### P: Posso converter modelos treinados em datasets personalizados?

**R**: Sim, mas certifique-se de que suas imagens de calibração sejam representativas do seu dataset personalizado. As **100 imagens de calibração** devem cobrir a variedade de cenários que seu modelo encontrará.

### P: Qual é o tamanho máximo de modelo suportado?

**R**: As limitações de memória do **reCamera** restringem o tamanho prático do modelo para aproximadamente **8–16MB**. O **YOLO11n** normalmente gera modelos entre **3–8MB** após a conversão.

### P: Preciso manter a instância na nuvem em execução?

**R**: Não. Você pode encerrar a instância imediatamente após baixar o modelo convertido. A conversão é um processo único.

### P: Posso converter vários modelos em lote?

**R**: Sim. Você pode manter o mesmo ambiente e converter vários modelos repetindo os **passos 5–6** com arquivos de modelo diferentes.

### P: E se eu encontrar um erro que não está coberto aqui?

**R**:

1. Verifique os logs do container Docker: `docker logs tpu_converter`
2. Confirme se o seu modelo **ONNX** carrega corretamente em um ambiente Python primeiro
3. Tente usar um modelo de teste mais simples para isolar o problema
4. Entre em contato com o suporte da **Seeed Studio** com as mensagens de erro específicas

### P: Existem alternativas ao uso de nuvem?

**R**: Sim, você pode:

- Usar **Docker Desktop** localmente no Mac/Windows (requer bastante RAM)
- Configurar **WSL2** no Windows com Docker
- Usar uma máquina Linux local ou uma VM

No entanto, a implantação em nuvem é recomendada por oferecer melhor confiabilidade e desempenho.

---

## Conclusão

Converter modelos **YOLO11n** para implantação no **reCamera** exige entender tanto as limitações do hardware quanto o **toolchain TPU-MLIR**. Embora o processo tenha várias etapas, seguir este guia deve resultar em um modelo convertido com sucesso e pronto para implantação em **Edge AI**.

A chave para o sucesso é:

1. **Preparação**: ter todos os arquivos no formato e estrutura corretos
2. **Ambiente**: usar um ambiente Linux configurado corretamente (nuvem recomendada)
3. **Paciência**: permitir tempo suficiente para as etapas de calibração e conversão
4. **Validação**: testar seu modelo convertido cuidadosamente antes da implantação

Para suporte adicional, consulte o [SeeedStudio ReCamera wiki](https://wiki.seeedstudio.com/recamera_getting_started/) ou a [documentação do TPU-MLIR](https://github.com/sophgo/tpu-mlir).


## Suporte Técnico & Discussão do Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a melhor possível. Disponibilizamos vários canais de comunicação para atender diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
