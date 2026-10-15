---
description: Conjuntos de dados para Model Assistant
title: Datasets
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Tutorials_Datasets
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Tutorials_Datasets/
---

# Datasets

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) oferece suporte a uma variedade de conjuntos de dados. Você pode navegar e baixar diferentes conjuntos de dados na Internet ou anotar e criar seus próprios conjuntos de dados.

## Conjuntos de dados da Internet

### [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)

[SSCMA](https://github.com/Seeed-Studio/ModelAssistant) atualmente fornece os seguintes conjuntos de dados oficiais para treinamento e teste dos modelos correspondentes.

Certifique-se de estar no **Diretório Raiz do [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)** antes de executar o comando para baixar conjuntos de dados específicos. O comando baixará automaticamente os conjuntos de dados e os salvará em uma pasta chamada `datasets` no diretório atual e, por fim, os descompactará.

- [Download Custom Meter Datasets](https://files.seeedstudio.com/sscma/datasets/meter.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/meter.zip -P datasets && unzip datasets/meter.zip -d datasets
  ```

- [Download COCO_MASK Datasets](https://files.seeedstudio.com/sscma/datasets/coco_mask.zip):

  ```sh
  wget https://files.seeedstudio.com/sscma/datasets/coco_mask.zip -P datasets && unzip datasets/coco_mask.zip -d datasets
  ```

### Roboflow

[Roboflow](https://public.roboflow.com/) é uma plataforma gratuita de hospedagem para conjuntos de dados públicos de visão computacional, com suporte a formatos incluindo CreateML JSON, COCO JSON, Pascal VOC XML, YOLO e Tensorflow TFRecords, além de versões reduzidas e aprimoradas adicionais dos respectivos conjuntos de dados.

:::tip

Recomendamos fortemente procurar conjuntos de dados no Roboflow; você pode baixar centenas de diferentes conjuntos de dados do Roboflow gratuitamente para atender às suas necessidades específicas, bastando criar uma conta.

:::

Você pode encontrar alguns conjuntos de dados para [SSCMA](https://github.com/Seeed-Studio/ModelAssistant) no Roboflow abaixo:

| Dataset | Descrição |
| -- | -- |
| [Digital Meter Water](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-water/dataset/1) | Conjunto de dados de medidor de água digital |
| [Digital Meter Seg7](https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-seg7/dataset/1) | Conjunto de dados de medidor digital Seg7 |
| [Digit Seg7 Classification](https://universe.roboflow.com/seeed-studio-ovcjn/digit-seg7/1) | Conjunto de dados de classificação de dígitos Seg7 |

### Kaggle

[Kaggle](https://www.kaggle.com/) é uma plataforma de competições de modelagem e análise de dados. Empresas e pesquisadores podem publicar dados nela, e estatísticos e especialistas em mineração de dados podem competir para produzir os melhores modelos. O Kaggle também oferece milhares de conjuntos de dados, e você pode visitar [Kaggle datasets](https://www.kaggle.com/datasets) para escolher o mais adequado às suas necessidades.

## Conjuntos de dados personalizados

Criar um conjunto de dados personalizado geralmente envolve as seguintes etapas.

1. **Coletar Dados:** Coletar dados relacionados ao domínio do problema. Esses dados podem estar nos formatos texto, imagem, áudio ou vídeo.

2. **Organizar Dados:** Os dados coletados são limpos, [anotados](#dataset-annotation) e desduplicados para garantir precisão e consistência. Esta etapa é crucial para garantir a precisão do modelo treinado.

3. **Dividir o Conjunto de Dados:** O conjunto de dados organizado é dividido em conjunto de treinamento, conjunto de validação e conjunto de teste. Geralmente, utiliza-se uma proporção de 70%, 15% e 15% para dividir o conjunto de dados.

4. **Converter o Formato dos Dados:** Converter o conjunto de dados organizado para um formato que possa ser lido pelo modelo, como formato de texto, formato de imagem, etc.

5. **Carregar o Conjunto de Dados:** Carregar o conjunto de dados convertido no modelo para treinamento e teste. Ao carregar o conjunto de dados, é importante usar o carregador de dados apropriado e o tamanho de lote adequado.

6. **Aprimoramento de Dados (opcional, recomendado ser feito pelo [SSCMA](https://github.com/Seeed-Studio/ModelAssistant)):** Realizar aprimoramento de dados no conjunto de dados, como girar, espelhar, recortar, etc., para aumentar a diversidade e a quantidade de dados.

## Anotação de conjuntos de dados

Rotular um conjunto de dados é o processo de classificar ou rotular amostras em um conjunto de dados, o que geralmente requer intervenção manual.

O processo de rotulagem de um conjunto de dados é muito crítico e determina a qualidade do modelo treinado. A seguir estão alguns métodos e ferramentas comuns para rotular conjuntos de dados.

- **Anotação Manual:** Anotar o conjunto de dados manualmente, amostra por amostra, garante a precisão da anotação, mas é mais lento.

- **Anotação Semiautomática:** Aplicar os resultados da anotação manual a outros conjuntos de dados para reduzir o tempo de anotação, mas a precisão da anotação pode ser reduzida.

- **Anotação Automática:** Anotar dados automaticamente usando alguns modelos algorítmicos, como extração de palavras-chave, classificação de texto, etc. Embora possa melhorar a eficiência da anotação, a precisão também pode ser afetada.

Ferramentas de rotulagem de dados comumente usadas:

- [LabelImg](https://github.com/heartexlabs/labelImg): Uma ferramenta para rotulagem de imagens, com suporte a vários formatos de anotação, como PASCAL VOC, YOLO, etc.

- [Labelbox](https://labelbox.com/): Uma ferramenta de rotulagem online que suporta imagem, texto, vídeo e outros formatos, com vários modelos de anotação e modelos personalizados.

- [Doccano](https://github.com/doccano/doccano): Uma ferramenta de anotação de código aberto para classificação de texto e anotação de sequência, com suporte a vários formatos de anotação, como NER, POS, etc.

- [Annotator](https://github.com/openannotation/annotator): Uma ferramenta de anotação online leve que suporta imagem, texto, áudio e outros formatos.

- [VGG Image Annotator (VIA)](https://gitlab.com/vgg/via): Uma ferramenta de código aberto para anotação de imagens, com suporte a vários formatos de anotação, como PASCAL VOC, YOLO, etc.

- [COCO Annotator](https://github.com/jsbroks/coco-annotator): Uma ferramenta de anotação de imagem e vídeo baseada na web para tarefas de detecção de objetos, segmentação, anotação de pontos-chave e outras tarefas.

As ferramentas acima são alguns instrumentos comuns de anotação de dados; diferentes ferramentas são adequadas para diferentes tipos de conjuntos de dados e necessidades de anotação, e você pode escolher de acordo com as necessidades reais.
