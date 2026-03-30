---
description: Implementar Riva e Llama2 no reComputer
title: Ajuste fino com Llama-Factory
keywords:
  - reComputer
  - LLM
  - Chatbot
  - Ajuste fino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Finetune_LLM_on_Jetson
last_update:
  date: 07/03/2024
  author: Youjiang
createdAt: '2024-07-04'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Finetune_LLM_on_Jetson/
---


# LLM Local Personalizado: Ajuste Fino de LLM com Llama-Factory no Jetson


## Introdução

🚀Faça ajuste fino de LLM com Llama-Factory no Jetson! Agora você pode personalizar um LLM local privado para atender às suas necessidades. 

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factory fornece uma ferramenta de ajuste fino de modelos de linguagem grande extremamente conveniente, que suporta modelos de linguagem grandes comuns, conjuntos de dados e métodos de ajuste fino. Com essa plataforma, podemos facilmente personalizar modelos de linguagem grandes privados.

Neste wiki, vamos aprender como implementar o Llama-Factory no Nvidia Jetson e usar o Llama-Factory para treinar um modelo de linguagem grande que suporte perguntas e respostas em chinês.


## Pré-requisitos

- Dispositivo Jetson com mais de 16 GB de memória.
- Monitor, mouse, teclado e rede. (não obrigatório)

:::note
Já testamos a viabilidade deste wiki no reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) e no Kit de Desenvolvimento [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html).
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Primeiros Passos

### Conexão de Hardware

1. Conecte o cabo Ethernet ao reComputer (com Jetson).
2. Conecte o mouse, o teclado e o monitor ao reComputer.
3. Ligue o reComputer.

<!-- Need a GIF here! -->

### Instalar Jetson-Examples

:::note
O [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) da Seeed Studio oferece uma implantação perfeita, com um único comando, para executar modelos de visão computacional e IA Generativa na plataforma NVIDIA Jetson.
:::

Para instalar o pacote, abra o terminal no Jetson e execute:

```bash
pip3 install jetson-examples
sudo reboot
```

### Instalar e Executar Llama-Factory no Jetson

Implemente o `Llama-Factory` com o jetson-examples em uma única linha:

```bash
reComputer run llama-factory
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_llama_factory.png" />
</div>

Em seguida, podemos abrir um navegador web e acessar o endereço para abrir a WebUI:
```bash
# http://<jetson-ip>:7860
http://127.0.0.1:7860
```

### Iniciar o Treinamento

Aqui, usamos o conjunto de dados `alpaca_zh` para fazer o ajuste fino do modelo `Phi-1.5`, permitindo que ele tenha capacidades de conversação em chinês. Portanto, na interface web, configuramos apenas o `Model name` de treinamento e o `Dataset`, mantendo os outros parâmetros de treinamento como padrão. 

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

Por fim, clique no botão `start` para iniciar o treinamento.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::note
O processo de treinamento levará aproximadamente 18 horas.
:::

Após concluir o ajuste fino, você pode encontrar o modelo ajustado no diretório de salvamento.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### Testando o Modelo com Ajuste Fino


Por fim, podemos usar o Llama-Factory com o modelo ajustado para testar se ele de fato adquiriu capacidades de conversação em chinês. Os passos específicos são os seguintes.


**Passo 1.** Carregue o modelo ajustado pela Llama-Factory WebUI.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**Passo 2.** Digite um prompt em chinês na caixa de texto `Input`, clique no botão `Submit` e verifique o resultado de saída do modelo de linguagem grande na caixa de texto `Chatbot`.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

Pelos resultados do teste, podemos ver que o modelo ajustado já tem a capacidade de conversar com humanos em chinês. Se você quiser que seu modelo tenha capacidades mais avançadas, tente usar um conjunto de dados de ajuste fino mais diverso para treinar seu modelo!


### Demonstração

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="Finetune LLM by Llama-Factory on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Referências
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>