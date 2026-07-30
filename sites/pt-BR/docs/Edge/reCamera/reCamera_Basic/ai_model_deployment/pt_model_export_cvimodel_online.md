---
description:  exportar modelo online
title:  exportar modelo online
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png
slug: /recamera_model_export_online
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: yylin
createdAt: '2026-07-19'
updatedAt: '2026-07-19'
url: https://wiki.seeedstudio.com/pt-br/Edge/reCamera/reCamera_Basic/ai_model_deployment/recamera_model_export_online/
---

# Converter e implantar um modelo de detecção YOLO personalizado na interface web da reCamera

A interface de gerenciamento web da reCamera fornece funcionalidade integrada de conversão de modelo baseada em nuvem. Após treinar ou ajustar um modelo de detecção YOLO, os usuários podem fazer upload e exportar diretamente o modelo ONNX sem precisar configurar localmente o TPU-MLIR, Docker ou outros ambientes de conversão de modelo.

Após o upload, o sistema converterá automaticamente o modelo ONNX em um que possa ser executado na reCamera. Formato `.cvimodel`. Após a conversão bem-sucedida do modelo, ele pode ser aplicado diretamente ao dispositivo atual, e os resultados de detecção em tempo real podem ser visualizados por meio da página Dashboard.

## Visão geral da função

As seguintes operações podem ser realizadas por meio da interface web da reCamera:

- Fazer upload do modelo YOLO Detect ONNX treinado ou ajustado;
- Usar os serviços em nuvem da Seeed para converter modelos automaticamente;
- Converter modelos ONNX para versões compatíveis com a reCamera. Formato `.cvimodel`;
- Baixar o arquivo de modelo convertido;
- Aplicar o modelo diretamente à reCamera atual;
- Visualizar em tempo real os resultados de detecção de alvos no Dashboard.

Todo o processo não exige que os usuários instalem uma toolchain de conversão de modelo localmente, o que o torna adequado para validar e implantar rapidamente modelos personalizados de detecção de objetos.

## Faixa de suporte

Este recurso é atualmente projetado principalmente para modelos de detecção de objetos da série YOLO (Detect).

Confirme antes de fazer o upload:

- O modelo foi exportado em formato ONNX;
- Os modelos ONNX usam dimensões de entrada fixas;
- O modelo pode ser executado normalmente no ambiente local do ONNX Runtime.

> Este recurso é usado principalmente para o modelo YOLO Detect. Modelos de classificação, segmentação de instâncias, estimativa de pose e detecção de caixas delimitadoras rotacionadas podem usar estruturas de saída diferentes e podem não ser implantados diretamente por meio do processo de conversão atual.

---

## Preparando o modelo ONNX

Primeiro, treine ou ajuste o modelo YOLO usando Ultralytics ou outro framework de treinamento e, em seguida, exporte o modelo em formato ONNX.

Tomando o Ultralytics YOLO como exemplo:

```bash
yolo export \
  model=runs/detect/train/weights/best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True
```

:::note
tpu-mlir suporta apenas a versão máxima de opset 17. Modelos ONNX com opset > 17 podem não conseguir concluir a conversão online.
:::

Após a exportação, você obterá um arquivo semelhante ao seguinte:

```text
best.onnx
```

Recomenda-se verificar o modelo ONNX antes de fazer o upload:

```bash
pip install model-inspect-tool

model-inspect 
```

Depois que o modelo passar na verificação ONNX, ele poderá ser enviado para a reCamera.

---

## Etapa 1: Abra a página de conversão de modelo

Acesse a interface de gerenciamento web da reCamera usando um navegador.

Encontre-a na área de gerenciamento de dispositivo à esquerda:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image.png" /></div>

Após entrar na página **Model Conversion**, você poderá ver os modelos que foram enviados ou convertidos.

Os modelos na página normalmente fornecem as seguintes operações:

- `Download`Baixar o modelo convertido;
- `Use`Definir o modelo como o modelo atualmente em uso;
- Botão Delete: Exclui o registro de modelo correspondente.

---

## Etapa 2: Enviar o modelo ONNX

Clique no botão **Upload Model** na página e, na janela de seleção de arquivo, selecione o modelo YOLO ONNX que você deseja converter.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-1.png" /></div>

Após selecionar o arquivo, clique em "Open" e o upload do modelo será iniciado.

---

## Etapa 3: Aguarde a conversão do modelo na nuvem.

Depois que o modelo for enviado, a reCamera chamará o serviço de conversão de modelo baseado em nuvem fornecido pela Seeed para converter o modelo ONNX em um formato que a reCamera possa executar. Formato `.cvimodel`.

Durante o processo de conversão, o cartão do modelo exibirá o progresso atual da conversão.

Durante a conversão, você poderá ver:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-2.png" /></div>

- Nome do modelo;
- Hora do upload;
- Progresso atual da conversão;
- Botão `Stop Model Conversion`.

Certifique-se de que a reCamera tenha uma conexão de rede estável até que a conversão do modelo seja concluída.

> O envio e a conversão de modelos exigem acesso a serviços em nuvem. Se o dispositivo não conseguir acessar a internet ou se a conexão de rede for instável, a conversão do modelo poderá falhar ou ficar travada em determinado ponto de progresso por um longo período.

---

## Etapa 4: Confirmar que a conversão do modelo foi concluída

Após a conversão bem-sucedida, um marcador verde de conclusão aparecerá no canto superior direito do modelo, juntamente com os seguintes botões:

```text
Download
Use
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-3.png" /></div>

Isso indica que a nuvem concluiu a conversão de ONNX para... `.cvimodel`.

### Baixar modelo

Clique em **Download** para baixar o modelo convertido para o seu computador local para salvamento.

O arquivo baixado pode ser usado para:

- Backup de modelo;
- Personalizar o aplicativo da reCamera;
- Nós de modelo do Node-RED;
- Programa de inferência em C/C++;
- Implantação offline posterior.

### Usando o modelo

Clicar em **Use** definirá este modelo como o modelo de inferência atualmente usado pelo aplicativo reCamera.

Após aplicar o modelo, o nome do modelo atual será sincronizado com o nó de modelo relevante ou com a página de visualização.

> Se vários modelos com o mesmo nome existirem na lista, você poderá determinar a versão que precisa ser usada com base na hora do upload. Para facilitar o gerenciamento, é recomendável usar nomes de arquivo com informações de versão antes de fazer o upload, como... `person_detect_v1.onnx`。

---

## Etapa 5: Implantar o fluxo atual do Node-RED

Após selecionar um modelo, você precisa implantar o fluxo atual do Node-RED para que a configuração do modelo entre oficialmente em vigor.

Clique no botão **Deploy** no canto superior direito da página.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-4.png" /></div>

Depois que a implantação for concluída, os nós da câmera, nós de modelo e a página Dashboard serão executados de acordo com a nova configuração.

> Clicar apenas em `Use` pode apenas atualizar a seleção do modelo. Para garantir que a troca de modelo tenha efeito total, é recomendável clicar novamente no botão Deploy após selecionar o modelo.

---

## Etapa 6: Abrir a página de visualização do Dashboard

Depois que a implantação for concluída, clique no botão **Dashboard** no canto superior direito da página.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/recamera-open-dashboard.png" /></div>

O navegador o levará então para a página de visualização do modelo e controle do dispositivo.

Na área Preview, você poderá ver:

- O nome do modelo atualmente em uso;
- Limite de IoU;
- Limite de confiança;
- Transmissão ao vivo da câmera;
- Caixa delimitadora de detecção de objetos;
- Nome da categoria de detecção;
- Nível de confiança da detecção.

Por exemplo, quando uma pessoa é detectada, a tela exibirá:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-5.png" /></div>

em que:

- `person` indica a categoria de detecção;
- `91` indica um nível de confiança de detecção de aproximadamente 91%.

---

## Perguntas frequentes

### O modelo permanece travado no processo de conversão por um longo período de tempo.

Verifique, por favor:

1. A reCamera consegue acessar a internet normalmente?
2. O arquivo ONNX foi enviado completamente?
3. O arquivo de modelo é muito grande?
4. O modelo ONNX pode ser carregado normalmente?

Como alternativa, você pode interromper a tarefa de conversão atual e enviar novamente.

### Falha na conversão do modelo

Causas comuns incluem:

- O modelo ONNX contém operadores que atualmente não são suportados;
- O modelo usa dimensões de entrada dinâmicas;
- A estrutura de saída do modelo foi personalizada.
- A versão ONNX exportada ou o Opset é incompatível;
- O arquivo de modelo está corrompido.

Recomenda-se reexportar o modelo e priorizar o uso de dimensões de entrada fixas:

```bash
yolo export \
  model=best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True \
  dynamic=False
```

### O resultado de visualização não mudou após clicar em Use.

Por favor, confirme:

1. O modelo teve o botão `Use` clicado;
2. O botão Deploy no canto superior direito foi clicado;
3. O Current Model exibido no Dashboard é o modelo desejado?
4. Os nós de modelo estão em execução?
5. O nó da câmera e o nó do modelo estão conectados corretamente?

Se necessário, o fluxo pode ser reimplantado ou a página do Dashboard pode ser atualizada.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
