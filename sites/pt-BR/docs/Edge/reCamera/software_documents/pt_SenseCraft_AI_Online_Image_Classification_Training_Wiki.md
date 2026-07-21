---
description: Este wiki demonstra como treinar um modelo de classificação para o que você deseja reconhecer.
title: treinar modelo de classificação com SenseCraft AI
keywords:
  - reCamera
  - Modelo de classificação
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /train_classification_model_online
last_update:
  date: 07/19/2026
  author: yylin
no_comments: false
createdAt: '2026-07-19'
updatedAt: '2026-07-20'
url: https://wiki.seeedstudio.com/pt-br/train_classification_model_online/
---

# Treine modelos de classificação de imagens online rapidamente com SenseCraft AI

SenseCraft AI oferece um conjunto de ferramentas baseadas em navegador para treinar modelos de classificação de imagens. Não há necessidade de configurar um ambiente local de deep learning ou escrever código de treinamento. Basta preparar imagens para diferentes categorias e você poderá concluir a coleta de dados, o treinamento do modelo, a pré-visualização de desempenho e a implantação em dispositivos online.

Entrada para treinamento online: [SenseCraft AI Online Training](https://sensecraft.seeed.cc/ai/training?trainTab=2)

## Visão geral de recursos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-5.png" /></div>

Com a ferramenta de treinamento online do SenseCraft AI, você pode:

- Usar a câmera do seu computador para capturar imagens de treinamento em tempo real.
- Criar várias categorias de classificação para seus alvos de reconhecimento.
- Importar conjuntos de dados existentes ou exportar seu conjunto de dados atual para backup.
- Treinar rapidamente modelos de classificação de imagens na nuvem.
- Usar modelos treinados com a reCamera.
- Pré-visualizar online os resultados de classificação do modelo.
- Visualizar e gerenciar modelos treinados na seção de modelos históricos.

Todo o processo pode ser resumido em:

1. Criar categorias de classificação.
2. Coletar amostras de imagens para cada categoria.
3. Selecionar o dispositivo alvo e iniciar o treinamento.
4. Pré-visualizar os efeitos de classificação usando a câmera.
5. Implantar o modelo na reCamera.

## Para que serve a classificação de imagens

Modelos de classificação de imagens são usados para determinar a qual categoria uma imagem inteira pertence. Por exemplo:

| Cenário de aplicação | Categorias de exemplo |
| --- | --- |
| Reconhecimento de clima | Ensolarado, Nublado, Chuvoso, Nebuloso |
| Classificação de objetos | Garrafa, Copo, Caixa |
| Inspeção de qualidade de produtos | Aprovado, Arranhado, Danificado |
| Reconhecimento de cena | Interno, Externo, Armazém, Escritório |
| Reconhecimento de gestos | OK, Joinha, Pare |
| Reconhecimento de status de dispositivo | Normal, Alerta, Offline |

> A classificação de imagens gera uma única categoria para a imagem inteira. Se você precisar localizar um ou mais alvos dentro do mesmo quadro e obter suas posições, deve usar o recurso "Image Object Detection".

## Preparação antes do uso

Antes de iniciar o treinamento, prepare:

- Uma conta que possa fazer login no SenseCraft AI.
- Um navegador moderno como Chrome ou Edge.
- Uma câmera de computador funcional ou imagens de classificação já organizadas.
- Pelo menos duas categorias para diferenciar.
- Se for necessária implantação, uma reCamera conectada ao SenseCraft AI.

Ao coletar amostras usando a câmera do navegador, você precisará permitir que a página da web acesse a câmera.

## Etapa 1: Acessar a página de treinamento online

1. Abra a [SenseCraft AI Online Training Page](https://sensecraft.seeed.cc/ai/training?trainTab=2).
2. Faça login na sua conta SenseCraft AI.
3. Navegue até a página "Models" na navegação superior e selecione "Training".
4. Escolha "Image Classification" como o tipo de treinamento.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-6.png" /></div>

A página é dividida principalmente em três áreas:

- **Coleta de dados de classificação**: criar categorias e adicionar amostras de treinamento.
- **Treinamento de modelo**: selecionar um dispositivo e iniciar o treinamento.
- **Implantação e pré-visualização**: testar ou implantar o modelo após o treinamento.

## Etapa 2: Criar categorias de classificação

O sistema fornece `Class 1` e `Class 2` por padrão. Recomenda-se renomeá-las para nomes de categorias de fácil compreensão. Usaremos `have person` e `no person` para demonstração aqui.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-7.png" /></div>

1. Clique no ícone de edição ao lado do nome da categoria.
2. Insira o nome da categoria, por exemplo, `have person`, `no person`.
3. Clique em "Add Category +" se precisar de mais categorias.
4. Use o menu de mais opções à direita de uma categoria para gerenciá-la ou excluí-la.

Recomendações para nomear categorias:

- Os nomes devem ser curtos, claros e não se sobrepor.
- Recomenda-se usar nomes do seu negócio real.
- Tente usar chinês ou inglês de forma consistente dentro do mesmo projeto.
- Não divida arbitrariamente em várias categorias amostras que pareçam muito semelhantes e tenham significados pouco claros.

## Etapa 3: Coletar amostras de treinamento

### Coletar via câmera

1. Selecione, à esquerda, a categoria à qual você deseja adicionar amostras.
2. No menu suspenso "Input Source" à direita, selecione `Webcam`.
3. Posicione o alvo em frente à câmera.
4. Pressione e segure o botão verde "Press and Hold to Record".
5. Repita a coleta a partir de diferentes ângulos, posições, distâncias e condições de iluminação.
6. Mude para a próxima categoria e repita o processo.

Ao coletar, evite manter exatamente o mesmo fundo e composição o tempo todo, pois o modelo pode aprender erroneamente características do fundo em vez do próprio alvo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-8.png" /></div>

### Importar conjunto de dados existente

Se você já preparou seus dados de treinamento, pode clicar em "Import Dataset" e fazer o upload de acordo com as instruções na tela.

Você pode optar por importar apenas uma categoria clicando nos três pontos ao lado dessa categoria e selecionando importar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-9.png" /></div>

Você também pode importar um conjunto de dados inteiro para um modelo. No entanto, antes de compactá-lo em um arquivo zip, você deve organizar os dados de cada categoria em pastas nomeadas de acordo com o `class_name` exigido e, em seguida, compactá-las em um único arquivo zip para importação. O sistema irá atribuí-las automaticamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-10.png" /></div>

Ao organizar os dados, é recomendável:

- Garantir que cada imagem represente apenas uma categoria clara.
- Excluir imagens borradas, severamente ocluídas ou rotuladas incorretamente.
- Buscar um número semelhante de amostras em cada categoria.
- Incluir variações que possam ocorrer no ambiente real de implantação.
- Evitar coletar amostras de treinamento a partir de quadros consecutivos do mesmo vídeo contínuo.

### Exportar ou limpar conjunto de dados

- Clique em "Export Dataset" para fazer backup dos dados atualmente coletados.
- Clique em "Clear" para remover amostras da tarefa de treinamento atual e recomeçar.

A operação de limpeza pode ser irreversível, portanto, recomenda-se exportar primeiro o conjunto de dados para backup.

## Como coletar dados de maior qualidade

O desempenho do modelo depende em grande parte dos dados de treinamento. Recomenda-se coletar amostras diversificadas para cada categoria, em vez de focar apenas na quantidade.

### Manter contagens de categorias relativamente equilibradas

Se uma categoria tiver um grande número de amostras enquanto outras tiverem apenas algumas, o modelo poderá tender a gerar mais a categoria com mais amostras.

### Cobrir ambientes reais de uso

As amostras devem idealmente cobrir:

- Diferentes condições de iluminação: dia, noite, contraluz, baixa luminosidade.
- Diferentes ângulos: frontal, lateral, de cima para baixo, de baixo para cima.
- Diferentes distâncias: close, média, longa distância.
- Diferentes posições: centro, bordas e cantos do quadro.
- Diferentes fundos: fundos simples e complexos.
- Diferentes estados: leve oclusão, variações de pose e diferenças de aparência.

### Adicionar amostras negativas ou categorias de fundo

Se seus cenários reais frequentemente incluírem situações em que "nada pertence a nenhuma categoria alvo", você pode adicionar uma categoria `Background`, `Other` ou "No Target" com base nas necessidades do seu negócio. Isso reduz a probabilidade de o modelo forçar a saída de uma categoria alvo em cenas sem alvo.

### Evitar vazamento de dados

As imagens usadas para teste devem ser diferentes das imagens de treinamento. Não julgue a eficácia do modelo apenas com base em imagens que já apareceram durante o treinamento.

## Etapa 4: Treinar o modelo

Após concluir a coleta de amostras, prossiga para "Step 2: Model Training".

1. Verifique se cada categoria possui amostras suficientes e válidas.
2. Selecione `reCamera` no menu suspenso de dispositivos.
3. Se necessário, expanda "Advanced Settings" para visualizar as opções de treinamento disponíveis na página atual.
4. Clique em "Start Training".
5. Aguarde a conclusão do treinamento. Não feche a página nem limpe os dados durante o treinamento.

O tempo de treinamento é influenciado por fatores como o número de categorias, a contagem de amostras, a configuração de treinamento e o status do servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-11.png" /></div>

> Para o primeiro uso, recomenda-se concluir um modelo de referência usando a configuração de treinamento padrão. Após confirmar que os dados e o processo estão corretos, ajuste as configurações avançadas com base no desempenho real.

## Etapa 5: Pré-visualizar e validar o modelo

Quando o treinamento for concluído, você poderá selecionar o modelo recém-gerado na área "Step 3: Deployment & Preview". O modelo também aparecerá em "Historical Models" na parte inferior da página.

Ao testar, recomenda-se:

1. Usar novas imagens que não fizeram parte do conjunto de treinamento ou o feed de câmera em tempo real.
2. Testar cada categoria individualmente.
3. Variar o ângulo, a distância, a posição do alvo e a iluminação ambiente.
4. Observar se a categoria prevista e a pontuação de confiança são estáveis.
5. Testar cenas sem alvos e aquelas que são facilmente confundidas.
6. Registrar amostras classificadas incorretamente e perdidas para a próxima rodada de treinamento.

Se o modelo tiver um bom desempenho nas amostras de treinamento, mas falhar em reconhecer corretamente com um fundo ou ângulo diferente, isso geralmente indica falta de diversidade de dados, em vez de simplesmente precisar de mais amostras semelhantes.

## Etapa 6: Implantar na reCamera

Após a conclusão do treinamento e validação por meio da visualização, você pode selecionar o modelo correspondente na área de implantação e seguir as instruções na tela para implantá-lo na reCamera.

Existem dois métodos de implantação para dispositivos reCamera; escolha aquele que melhor atenda às suas necessidades.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-12.png" /></div>

Antes de implantar, confirme:

- A reCamera está devidamente conectada à rede e online.
- O dispositivo está vinculado à sua conta SenseCraft AI atual.
- Você selecionou o modelo correto gerado a partir desta sessão de treinamento.
- A tarefa atual do dispositivo permite atualizações ou troca de modelo.

Após a implantação, o navegador será redirecionado para a interface correspondente do dispositivo, onde você poderá visualizar em tempo real o status de execução do modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Software_Documents/SenseCraft_AI_Online_Image_Classification_Training/image-4.png" /></div>

O método de implantação mostrado aqui é para um dispositivo reCamera conectado via cabo USB. Ele redirecionará automaticamente para o endereço IP padrão do dispositivo `192.168.42.1` para visualizar os resultados de detecção do modelo.

## Uso de modelos históricos

A seção "Historical Models" na parte inferior da página é usada para visualizar tarefas de treinamento concluídas anteriormente. Quando você precisar usar um modelo mais antigo, poderá expandir a lista de modelos históricos e selecionar o registro correspondente para visualização ou implantação.

Para facilitar o gerenciamento de vários resultados de treinamento, recomenda-se salvar o seguinte nos registros do seu projeto:

- Data do treinamento.
- Lista de categorias.
- Número de amostras por categoria.
- Versão do conjunto de dados.
- Principais configurações de treinamento.
- Resultados de teste.
- Dispositivo correspondente em que foi implantado.

## Perguntas frequentes

### O navegador não exibe o feed da câmera.

- Verifique se o navegador recebeu permissões para usar a câmera.
- Certifique-se de que a câmera não esteja sendo usada exclusivamente por outro aplicativo.
- Selecione novamente a câmera no menu suspenso de fonte de entrada.
- Atualize a página e autorize novamente.
- Tente usar a versão mais recente do Chrome ou Edge.

### O modelo sempre prevê a mesma categoria.

As causas comuns incluem amostras de categorias desbalanceadas, quantidade excessiva de dados para uma categoria, características pouco distintas para outras categorias ou a presença de um fundo fixo nas imagens de treinamento. Recomenda-se complementar as amostras das categorias sub-representadas e garantir condições de coleta comparáveis para todas as categorias.

### A precisão de treinamento é alta, mas o desempenho real é ruim.

Isso geralmente significa que os dados de treinamento são muito uniformes ou que as imagens de teste são muito semelhantes às imagens de treinamento. Você deve complementar com condições diversificadas do ambiente real de implantação, incluindo diferentes ângulos, distâncias, fundos e iluminação, e usar imagens totalmente novas para teste.

### Duas categorias são facilmente confundidas.

Verifique se as definições das categorias estão claras e concentre-se em complementar amostras que destaquem as diferenças entre as duas categorias. Além disso, remova imagens com rótulos incorretos, alvos pouco nítidos ou características de várias categorias.

### O modelo gera uma categoria mesmo quando não há alvo.

Modelos de classificação normalmente escolhem a categoria mais provável dentre as existentes. Você pode adicionar uma categoria "Background" ou "Other" e usar limiares de confiança no aplicativo para filtrar resultados não confiáveis.

### O modelo recém-treinado não pode ser encontrado.

- Confirme se a tarefa de treinamento foi concluída.
- Expanda "Historical Models" para verificar.
- Certifique-se de estar conectado com a conta que criou o modelo.
- Atualize a página e verifique novamente.

### Não é possível implantar na reCamera.

- Confirme se o dispositivo está online e vinculado à conta atual.
- Verifique a conexão de rede do dispositivo.
- Certifique-se de ter selecionado um modelo compatível com o dispositivo de destino.
- Evite implantar repetidamente enquanto o dispositivo estiver executando outras tarefas de atualização.
- Certifique-se de que o ambiente de operação do dispositivo reCamera esteja normal, ou seja, que a interface de configuração web possa ser usada corretamente.

## Processo de iteração recomendado

Um modelo de classificação confiável normalmente requer várias iterações:

1. Treine o primeiro modelo usando um conjunto de dados pequeno, porém balanceado.
2. Teste com novos cenários e registre os resultados incorretos.
3. Complete as categorias corretas com cenas representativas classificadas erroneamente.
4. Limpe rótulos incorretos e amostras excessivamente redundantes.
5. Treine novamente e realize testes comparativos sob as mesmas condições.
6. Implemente na reCamera quando o desempenho atender aos requisitos.
7. Colete continuamente amostras difíceis no ambiente real e atualize o modelo.

## Lista de verificação de boas práticas

Antes do treinamento:

- [ ] As definições das categorias estão claras e sem sobreposições óbvias.
- [ ] Cada categoria possui amostras de treinamento.
- [ ] As contagens de amostras para cada categoria estão aproximadamente balanceadas.
- [ ] As amostras cobrem diferentes ângulos, distâncias, fundos e iluminação.
- [ ] Imagens borradas e rótulos incorretos foram removidos.
- [ ] Categorias de fundo ou outras foram preparadas conforme necessário.
- [ ] Conjuntos de dados importantes foram exportados e copiados para backup.

Antes da implantação:

- [ ] Testado com novos cenários não usados no treinamento.
- [ ] Todas as categorias e cenários sem alvo foram testados.
- [ ] Categorias facilmente confundidas foram examinadas.
- [ ] A reCamera está conectada à rede e vinculada à conta atual.
- [ ] Modelo e dispositivo de destino foram confirmados corretamente.
- [ ] Uma validação secundária no ambiente real de instalação foi planejada.

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