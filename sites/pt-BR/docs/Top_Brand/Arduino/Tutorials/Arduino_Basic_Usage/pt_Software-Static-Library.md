---
description: Uso de bibliotecas Arduino pré-compiladas
title: Uso de bibliotecas Arduino pré-compiladas
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-Static-Library
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Software-Static-Library/
---

<!-- # Arduino Tutorials - How to Use Static (Pre-compiled) Libraries in Arduino -->

Para melhorar o tempo de compilação de projetos grandes no Arduino, você pode usar um dos recursos mais recentes introduzidos na Arduino IDE (>=1.8.6), **bibliotecas estáticas (pré-compiladas)** para seus Sketches Arduino.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Banner.png"/></div>

**Por que usar bibliotecas pré-compiladas?**

- A biblioteca pré-compilada permite compartilhar as funções da biblioteca sem expor o código-fonte.

- A única limitação das bibliotecas pré-compiladas é que elas só são válidas para placas ou MCUs para as quais foram compiladas.

## Primeiros Passos

Vamos pegar uma biblioteca Arduino como exemplo e convertê-la em uma biblioteca pré-compilada. Aqui vou usar [**Seeed_Arduino_LIS3DHTR**](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) como biblioteca Arduino e [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como opção de placa.

**ETAPA 1. Configurações da biblioteca Arduino**

Navegue até o caminho raiz da biblioteca, abra o arquivo `library.properties`, adicione o seguinte e salve o arquivo.

```properties
dot_a_linkage=true
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/dot.png"/></div>

**ETAPA 2. Configuração da Arduino IDE**

Abra a Arduino IDE e navegue até **Settings**. Certifique-se de que "**Show verbose output during: compilation and upload**" esteja marcado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Arduino-IDE.png"/></div>

**ETAPA 3. Obtendo o local temporário de compilação e o flag de framework da placa**

Selecione **Wio Terminal** como placa. Compile qualquer sketch que tenha uma **diretiva #include para sua biblioteca**. Este pode ser apenas um sketch mínimo. No meu caso, é `#include<LIS3DHTR.h>`.

Após a compilação, verifique a janela de log de compilação e encontre o local da pasta temporária de compilação. Isso deve ser impresso no comando final da saída. Por exemplo, no meu caso o comando é:

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-size -A /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343/pre-compile.ino.elf
```

E então, o **caminho temporário de compilação** é:

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/buildpath.png"/></div>

Copie esse caminho, pois ele será usado depois. Outra coisa a notar é encontrar o flag **`-mcpu=`** para obter o flag de framework da placa compilado para a placa selecionada. No meu caso, o Wio Terminal é rotulado como:

```sh
-mcpu=cortex-m4
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/mcu.png"/></div>

**ETAPA 4. Copiar o arquivo `.a` para a pasta da biblioteca**

Navegue até a pasta do caminho temporário de compilação, depois para `libraries` -> `Seeed_Arduino_LIS3DHTR` e você deverá ver um arquivo `Seeed_Arduino_LIS3DHTR.a`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/a.png"/></div>

Copie o arquivo `Seeed_Arduino_LIS3DHTR.a` da pasta &#123;temporary build folder&#125;/libraries/&#123;library name&#125; para a subpasta **Arduino/libraries/&#123;library name&#125;/src/&#123;Board Framework Flag&#125;** da sua pasta de biblioteca. No meu caso, ele é colocado em **`src/cortex-m4`**.

Renomeie o arquivo `.a`, acrescentando "lib" no início do nome. No meu caso, ele se torna `libSeeed_Arduino_LIS3DHTR.a`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/library.png"/></div>

**ETAPA 5. Adicionando o flag de pré-compilação**

Agora, podemos voltar para o `library.properties`, remover `dot_a_linkage=true` e adicionar os seguintes flags:

```properties
precompiled=true
ldflags=-lSeeed_Arduino_LIS3DHTR
```

onde o `ldflags` é `-l+{library name}`.

:::note
    Observe que você não especifica a parte "lib" do nome do arquivo no flag.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/pre-compiled.png"/></div>

Agora, você pode remover os arquivos **`.cpp`** da pasta `src` da biblioteca e a Arduino IDE usará a biblioteca pré-compilada!

### Com Problemas?

Por alguns motivos, algumas placas podem exigir que o arquivo `.a` fique mais dentro da pasta `src`. Por exemplo, esse é o caso do Wio Terminal. Se você estiver tendo o mesmo problema, por favor siga adiante.

Analisando as informações do log de compilação, você verá um caminho que a IDE está procurando:

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/path.png"/></div>

```
/Users/ansonhe/Documents/Arduino/libraries/Seeed_Arduino_LIS3DHTR/src/cortex-m4/fpv4-sp-d16-hard" does not exist
```

Portanto, só é necessário colocar o arquivo `libSeeed_Arduino_LIS3DHTR.a` dentro de `fpv4-sp-d16-hard` em `cortex-m4`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/finalpath.png"/></div>

Agora, o Arduino irá localizar o caminho da biblioteca pré-compilada!

Aqui também fornecemos um exemplo que usa biblioteca estática [**aqui**](https://github.com/Seeed-Studio/Seeed_Arduino_MG126). Use-o também como referência.

## Recursos

- [Shared (dynamic) Libraries vs. Static Libraries —Differences in performance](https://medium.com/@nickteixeira/shared-dynamic-libraries-vs-static-libraries-differences-in-performance-2716f5b3c826#:~:text=Advantages%3A,is%20already%20present%20in%20memory)

## FAQ

- Uma coisa a notar é que esse recurso de biblioteca pré-compilada só oferece suporte à Arduino IDE >= **`1.8.6`**, portanto, atualize para a versão mais recente da Arduino IDE para evitar esse erro.

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
