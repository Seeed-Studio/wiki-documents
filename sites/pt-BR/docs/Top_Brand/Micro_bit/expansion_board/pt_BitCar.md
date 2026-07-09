---
description: Micro_bit bitcar
title: BitCar
keywords:
  - Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bitcar
last_update:
  date: 12/29/2023
  author: Seraphina
createdAt: '2024-01-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Bitcar/
---

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113289-2b808a5b-f4e6-4205-ba05-f5ef6339f38d.png#align=left&display=inline&height=415&originHeight=415&originWidth=415&size=0&status=done&style=none&width=415) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/9.png)

## Introdução

BitCar é um projeto com o micro:bit que projeta um carro robô inteligente e programável para incentivar a aprendizagem STEAM das crianças. Após combinar programas do Microsoft MakeCode, o carro robô poderá realizar seguimento de linha, desviar de obstáculos e até empinar. O carro possui um alto‑falante próprio para tocar melodias e efeitos sonoros, 4 LEDs RGB coloridos na sua parte inferior e um sensor ultrassônico destacável na frente para evitar obstáculos no caminho.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113282-0a378b93-75f4-4f4a-a776-9d20a53ffc20.png#align=left&display=inline&height=554&originHeight=554&originWidth=923&size=0&status=done&style=none&width=923) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/10.png)

:::note
O micro:bit, o cabo USB e as baterias não estão incluídos no pacote. Você precisa prepará‑los separadamente. Para detalhes específicos sobre como montar o carro, consulte o Anexo 1 Instruções de Montagem do BitCar. Para detalhes sobre a cobertura e o chassi, consulte o Anexo 3 Cobertura & Chassi do BitCar.
:::

## Tutoriais

Aqui estão alguns tutoriais de exemplo para você aprender como usar este kit. Vamos começar!

### 1. Seguimento de Linha

#### 1.1 Implementação

Depois que o carro é ligado, ele pode dirigir ao longo da pista.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113288-c57403ca-ae55-473e-ae97-42c2b0c7ca78.png#align=left&display=inline&height=632&originHeight=632&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/11.png)

> Consulte o Anexo 2 Mapa do BitCar

#### 1.2 Escrever um Programa

Observe que você precisa adicionar uma extensão no MakeCode porque ele não tem blocos que controlem o carro. Siga as instruções abaixo para adicionar a extensão.

- Vamos primeiro ao MakeCode: [https://makecode.microbit.org/](https://makecode.microbit.org/)

- Etapa 1 Crie um novo projeto, o que levará você ao espaço de trabalho. Clique no ícone de engrenagem (para configuração).
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113277-c32373b0-93fd-4471-b79b-e1dfd4958188.png#align=left&display=inline&height=565&originHeight=565&originWidth=1152&size=0&status=done&style=none&width=1152) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/12.png)

- Etapa 2 Clique em “Extensions” na lista suspensa e então você entrará na página de extensões.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-225fdfab-20b1-4d31-bc32-1ae7adad3f6d.png#align=left&display=inline&height=723&originHeight=723&originWidth=945&size=0&status=done&style=none&width=945) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/13.png)

- Etapa 3 Copie e cole este link da extensão na caixa de pesquisa: [https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113278-4c8a39b6-2479-47c5-900f-a785f201815c.png#align=left&display=inline&height=448&originHeight=448&originWidth=992&size=0&status=done&style=none&width=992) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/14.png)

> Se aparecer um aviso dizendo que esta extensão não existe, feche o navegador e tente novamente.

- Etapa 4 Clique no ícone da extensão e volte para o espaço de trabalho.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113293-405a3a72-1457-4dbb-a230-84db87fe68d1.png#align=left&display=inline&height=505&originHeight=505&originWidth=1119&size=0&status=done&style=none&width=1119) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/15.png)

Depois de adicionar a extensão, podemos iniciar a tarefa.

Primeiro, adicione um bloco “forever”. Se a linha preta for detectada no lado esquerdo, o carro deve fazer uma pequena curva à esquerda para que ainda consiga seguir a pista. Nesse caso, definimos a velocidade do motor esquerdo como 3% e a velocidade do motor direito como 15%. Da mesma forma, se a linha preta for detectada no lado direito, o carro deve fazer uma pequena curva à direita. E definimos a velocidade do motor direito como 3% e a velocidade do motor esquerdo como 15%.

> Você pode ajustar a velocidade do motor conforme necessário.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113295-500e52b5-b3ff-4474-9e87-ed72c1329f1e.png#align=left&display=inline&height=556&originHeight=556&originWidth=1282&size=0&status=done&style=none&width=1282) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/16.png)

#### 1.3 Conectar um Dispositivo

Deslize o micro:bit para dentro do BitCar e tome cuidado para não invertê‑lo. Depois, conecte o micro:bit ao seu PC com um cabo USB. Verifique se o LED indicador no micro:bit acende ou não. Se não acender, você precisa conectar o cabo USB novamente.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113285-2552ad75-17d6-4f40-aa08-4223e9ccb65e.png#align=left&display=inline&height=543&originHeight=543&originWidth=642&size=0&status=done&style=none&width=642) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/17.png)

#### 1.4 Enviar um Programa

Os tutoriais anteriores já mostraram como baixar o programa que você escreveu. Você só precisa renomear seu programa, clicar no botão “Download” e enviá‑lo para o seu micro:bit.

#### 1.5 Executar um Programa

Ligue a chave no carro e veja se ele consegue funcionar normalmente.

### 2. Desvio de Obstáculos

#### 2.1 Implementação

Depois que o carro é ligado, ele pode dirigir ao longo da pista e parar assim que vir um obstáculo.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113304-c6853e11-bd23-455c-8ca9-ab9b897a9f74.png#align=left&display=inline&height=311&originHeight=311&originWidth=554&size=0&status=done&style=none&width=554) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/18.png)

#### 2.2 Escrever um Programa

Ainda usamos o mesmo método do Tutorial 1 para adicionar a extensão BitCar.<br />
Primeiro, adicione um bloco “Forever”. Se o sensor ultrassônico detectar um objeto a uma distância menor que 12, então defina a velocidade do motor esquerdo como 20% e a velocidade do motor direito como 0%. Em seguida, defina um tempo limite de 0,7 s.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113303-d80b5cc8-83ce-4109-bdbd-0c9244e69358.png#align=left&display=inline&height=474&originHeight=474&originWidth=1305&size=0&status=done&style=none&width=1305) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/19.png)

#### 2.3 Conectar um Dispositivo

Deslize o micro:bit para dentro do BitCar e tome cuidado para não invertê‑lo. Depois, conecte o micro:bit ao seu PC com um cabo USB. Verifique se o LED indicador no micro:bit acende ou não. Se não acender, você precisa conectar o cabo USB novamente. Retire o sensor ultrassônico e instale‑o no carro.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-308bd885-a798-4c30-9a7c-18c399ba6fce.png#align=left&display=inline&height=314&originHeight=314&originWidth=408&size=0&status=done&style=none&width=408) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/20.png)

Como instalar o sensor ultrassônico (consulte o manual do usuário no pacote):
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113361-abf193ef-4dc7-4d2e-916b-e6cefef00147.png#align=left&display=inline&height=500&originHeight=500&originWidth=1012&size=0&status=done&style=none&width=1012) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/21.png)

#### 2.4 Enviar um Programa

Nos tutoriais anteriores já foi apresentado como baixar seus programas. Você só precisa renomear seu programa, clicar no botão “Download” e enviá‑lo para o seu micro:bit.

#### 2.5 Executar um Programa

Ligue a chave no carro e veja se ele consegue funcionar normalmente.

### 3. Carro RC (Controlado por um micro:bit)

#### 3.1 Implementação

Depois que o carro é ligado, ele irá para a frente se o botão A no micro:bit for pressionado; e irá para trás se o botão B for pressionado.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113317-0bc5b339-1106-4562-839e-8ce42d2f8dd7.png#align=left&display=inline&height=539&originHeight=539&originWidth=944&size=0&status=done&style=none&width=944) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/22.png)

#### 3.2 Escrever um Programa

Ainda usamos o mesmo método do Tutorial 1 para adicionar a extensão BitCar.

- Programa do micro:bit<br />
Adicione um bloco “on start”. Conecte o bloco “radio set group” a ele. Arraste e solte o bloco “Forever”. Siga esta lógica de programa: se o botão A for pressionado, então o rádio enviará o número “1”; se o botão B for pressionado, então o rádio enviará o número “2”.

- Programa do BitCar<br />
Adicione um bloco “on start”. Conecte o bloco “radio set group” a ele. Siga esta lógica de programa: o rádio recebe um sinal “receivedNumber”. Se “receivedNumber” for igual a 1, então o carro irá para a frente a uma velocidade de 15%. Se “receivedNumber” for igual a 2, então o carro irá para trás a uma velocidade de 15%.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113345-98bd2a99-0f62-4ea6-adc8-6522c0cee2cb.png#align=left&display=inline&height=486&originHeight=486&originWidth=1213&size=0&status=done&style=none&width=1213) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/23.png)

Programa do Controlador micro:bit
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113327-1cb7faa3-45f1-440e-9192-7a1ca64bbf2e.png#align=left&display=inline&height=518&originHeight=518&originWidth=1283&size=0&status=done&style=none&width=1283) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/24.png)

Programa Receptor do BitCar

#### 3.3 Conectar um Dispositivo

Deslize o micro:bit para dentro do BitCar e tome cuidado para não invertê‑lo. Depois, conecte o micro:bit ao seu PC com um cabo USB. Verifique se o LED indicador no micro:bit acende ou não. Se não acender, você precisa conectar o cabo USB novamente.

:::note
Existem 2 grupos de programas, portanto você precisará de 2 micro:bits para este projeto. Use um micro:bit para conectar à alimentação e o outro para controlar o carro. Você também precisa escrever e baixar os programas separadamente para distinguir os dois micro:bits. Os micro:bits mencionados neste tutorial não estão incluídos no pacote.
:::

#### 3.4 Enviar um Programa

Você já foi apresentado a como baixar seus programas nos tutoriais anteriores. Você só precisa renomear seu programa, clicar no botão “Download” e enviá-lo para o seu micro:bit.

#### 3.5 Executar um Programa

Ligue a chave no carro e veja se ele consegue funcionar normalmente.

### 4. Carrinho RC (Controlado por um micro:bit e um BitPlayer)

#### 4.1 Implementação

Se o joystick for puxado para cima, o carro anda para frente; se o joystick for puxado para trás, o carro anda para trás; se o joystick for puxado para a esquerda, o carro vira à esquerda; se o joystick for puxado para a direita, o carro vira à direita; se o botão A for pressionado, o carro fica em pé; se o botão B for pressionado, o carro para.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113313-83bb83d6-af28-4ffa-87bc-26df831aef8a.png#align=left&display=inline&height=639&originHeight=639&originWidth=1083&size=0&status=done&style=none&width=1083) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/25.png)

#### 4.2 Escrever um Programa

Ainda usaremos o mesmo método do Tutorial 1 para adicionar a extensão BitCar.<br />
Extensão BitCar: [https://github.com/TinkerGen/pxt-BitCar](https://github.com/TinkerGen/pxt-BitCar)<br />
Extensão BitPlayer: [https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)

- Programa do BitPlayer<br />
  Adicione um bloco “on start”. Conecte o bloco “radio set group” a ele. Arraste e solte um bloco “Forever”. Comece a adicionar blocos sob esta lógica de programa: se o joystick for puxado para cima, o rádio enviará o número “1”; se o joystick for puxado para trás, o rádio enviará o número “2”; se o joystick for puxado para a esquerda, o rádio enviará o número “3”; se o joystick for puxado para a direita, o rádio enviará o número “4”; se o botão A for pressionado, o rádio enviará o número “5”; se o botão B for pressionado, o rádio enviará o número “6”.

- Programa do BitCar<br />
  Adicione um bloco “on start”. Conecte o bloco “radio set group” a ele. Se “receivedNumber” for igual a 1, o carro irá para frente a 15% de velocidade; se “receivedNumber” for igual a 2, o carro irá para trás a 15% de velocidade; se “receivedNumber” for igual a 3, a velocidade do motor direito será 20% e a do motor esquerdo será 0%, então o carro irá para frente novamente a 15% de velocidade; se “receivedNumber” for igual a 4, a velocidade do motor esquerdo será 20% e a do motor direito será 0%, então o carro irá para frente novamente a 15% de velocidade; se “receivedNumber” for igual a 5, o carro fará um ato de ficar em pé a 100% de velocidade; se “receivedNumber” for igual a 6, o carro irá parar.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113324-b23e7a3c-37cf-4616-9d5a-85078a7f7617.png#align=left&display=inline&height=780&originHeight=780&originWidth=857&size=0&status=done&style=none&width=857) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/26.png)

Programa do BitPlayer
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607657113335-24bb344c-3f6e-4af8-abb4-b6d80fe210cb.png#align=left&display=inline&height=851&originHeight=851&originWidth=902&size=0&status=done&style=none&width=902) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/27.png)

Programa do BitCar

#### 4.3 Conectar um Dispositivo

Deslize o micro:bit no BitCar e tome cuidado para não inverter a posição. Em seguida, conecte o micro:bit ao seu PC com um cabo USB. Verifique se o indicador de LED no micro:bit acende ou não. Se não acender, você precisa conectar o cabo USB novamente.
:::note
Existem 2 grupos de programas, portanto você precisará de 2 micro:bits para este projeto. Um micro:bit é para o BitPlayer; o outro é para o BitCar. Você também precisa escrever e baixar os programas separadamente para distinguir os dois micro:bits. Os micro:bits mencionados neste tutorial não estão incluídos no pacote.
:::

#### 4.4 Enviar um Programa

Você já foi apresentado a como baixar seus programas nos tutoriais anteriores. Você só precisa renomear seu programa, clicar no botão “Download” e enviá-lo para o seu micro:bit.

#### 4.5 Executar um Programa

Ligue o BitCar e o BitPlayer. Depois que eles se conectarem, observe como o programa está sendo executado.

### 5. Python

Além dos tutoriais acima, você também pode usar Python para controlar o BitCar. Abaixo está o programa de exemplo:

#### 5.1 Controle do Motor

Primeiro, iremos importar todos os módulos necessários do micro:bit.

1. Adicione seu código Python aqui. Por exemplo
2. from microbit import *

Em seguida, definimos uma função chamada movement(left,right), o valor de left e right é a velocidade (de -255 a 255) para cada motor.

```cpp
1. def movement(left, right):
2.     if left > 0:
3.         pin13.write_analog(0)
4.         pin14.write_analog(left)
5.     elif left < 0:
6.         pin13.write_analog(left)
7.         pin14.write_analog(0)
8.     if right > 0:
9.         pin15.write_analog(0)
10.         pin16.write_analog(right)
11.     elif right > 0:
12.         pin15.write_analog(right)
13.         pin16.write_analog(0)
```

Defina outra função chamada stop(), chamamos esta função para parar o BitCar.

``` cpp
1. def stop():
2.         pin13.write_analog(0)
3.         pin14.write_analog(0)
4.         pin15.write_analog(0)
5.         pin16.write_analog(0)
```

Com as funções que acabamos de definir acima, podemos controlar o BitCar da seguinte forma:

**Mover para frente em velocidade máxima:**<br />
movement(255, 255)

**Mover para trás em velocidade máxima:**<br />
movement(-255, -255)

**Girar no sentido horário:**<br />
movement(255, -255)

**Parar:** <br />
stop()

## Informações do Curso e Download de Aula de Exemplo

Você pode ver cursos relacionados ao micro:bit e ao BitCar no Make 2 Learn através deste endereço: [https://make2learn.tinkergen.com](https://make2learn.tinkergen.com/)

## IV Anexos

#### Anexo 1 Instruções de Montagem do BitCar：[Attachment 1 BitCar Assembly Instruction.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf?_lake_card=%7B%22uid%22%3A%221611139151730-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf%22%2C%22name%22%3A%22Attachment%201%20BitCar%20Assembly%20Instruction.pdf%22%2C%22size%22%3A818663%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22UXHlE%22%2C%22card%22%3A%22file%22%7D)

#### Anexo 2 Mapa do BitCar：[Attachment 2 BitCar Map.pdf](https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf?_lake_card=%7B%22uid%22%3A%221611139162975-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf%22%2C%22name%22%3A%22Attachment%202%20BitCar%20Map.pdf%22%2C%22size%22%3A753958%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22n0BjB%22%2C%22card%22%3A%22file%22%7D)

#### Anexo 3 Carcaça e Chassi do BitCar：[Attachment 3 BitCar Cover - Chassis.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip?_lake_card=%7B%22uid%22%3A%221611139172665-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip%22%2C%22name%22%3A%22Attachment%203%20BitCar%20Cover%20-%20Chassis.zip%22%2C%22size%22%3A367966%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22T1EXv%22%2C%22card%22%3A%22file%22%7D)

#### Anexo 4 Código-fonte：[Attachment 4 Source Code.zip](https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip?_lake_card=%7B%22uid%22%3A%221611139180453-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip%22%2C%22name%22%3A%22Attachment%204%20Source%20Code.zip%22%2C%22size%22%3A1535318%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%227lUfd%22%2C%22card%22%3A%22file%22%7D)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
