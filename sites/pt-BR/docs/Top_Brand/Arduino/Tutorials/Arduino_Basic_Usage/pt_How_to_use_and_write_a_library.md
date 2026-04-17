---
description: Como usar e escrever uma biblioteca
title: Como usar e escrever uma biblioteca
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_to_use_and_write_a_library
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/How_to_use_and_write_a_library/
---

A popularidade do Arduino depende em grande parte de um grande número de bibliotecas excelentes e fáceis de usar. A Biblioteca do Arduino é criada a partir de classes C++ orientadas a objetos; você pode usá‑la facilmente sem conhecer os detalhes de implementação da Biblioteca.

Você pode encontrar a Biblioteca do Arduino no caminho: \arduino-1.0.5\libraries. E há um exemplo nela, que possui alguns demos para ajudar você a entender e usar a Biblioteca.
É muito fácil usar uma Biblioteca, aqui apresentamos como escrever uma Biblioteca.

Então vamos lá, vamos escrever aqui uma biblioteca de cálculo simples. Inclui a seguinte função:

```cpp
int sum(int a, int b);
int minus(int a, int b);
```

Sim, é muito simples, é óbvio que a primeira função retorna a soma de dois números, enquanto a segunda função retorna a subtração.
Primeiro, criamos uma pasta chamada Calc, que também é o nome da Biblioteca.
Depois criamos um arquivo Calc.h e o preenchemos:

```cpp
#ifndef __CALC_H__
#define __CALC_H__

class Calc{
public:
    int sum(int a, int b);                  // return sum
    int minus(int a, int b);                // return difference
};
#endif
```

```c++ title="Calc.cpp"
#include "Calc.h"

int Calc::sum(int a, int b)
{
    return (a+b);
}

int minus(int a, int b)
{
    return (a-b);
}
```

Para ajudar os usuários a entender o uso da Biblioteca, criamos uma pasta examples. E há um demo chamado cale_test, código a seguir:

```cpp
// demo of calc library
#include <Calc.h>

void setup()
{
    Serial.begin(9600);

    Serial.print("10+15 = ");
    Serial.println(calc.sum(10, 15));
    Serial.print("100-19 = ");
    Serial.println(calc.minus(100, 19));

    Serial.println("Calc Library test over!");
}

void loop()
{

}

```

Ao usar a IDE do Arduino, você verá que algumas funções de biblioteca serão exibidas em vermelho, enquanto outras não. Obviamente, fazer com que o nome da função e os nomes dos arquivos de cabeçalho, bem como algumas definições de macro, sejam exibidos em vermelho deixa o código com uma aparência mais bonita e facilita a verificação de erros.
Para nos ajudar a fazer com que esta biblioteca possa ser exibida em vermelho na IDE, é necessário adicionar um arquivo keyboards.txt na pasta Calc, keyboards.txt conforme a seguir:

```cpp
#######################################
# Syntax Coloring Map For Calc
#######################################

#######################################
# Datatypes (KEYWORD1)
#######################################
Calc	KEYWORD1
calc	KEYWORD1

#######################################
# Methods and Functions (KEYWORD2)
#######################################
sum	KEYWORD2
minus	KEYWORD2

#######################################
# Constants (LITERAL1)
#######################################
```


Como você pode ver, o nome da classe ou o nome do arquivo é escrito antes de KEYWORD1, o nome da função é escrito antes de KEYWORD2. Quanto a LITERAL1, é usado para destacar o nome da definição de macro, o que não está relacionado a esta biblioteca, então fica vazio. Observe que entre o nome e KEYWORD1 há apenas uma tabulação, sem espaços.
Assim, terminamos nossa Biblioteca Calc, e ela funciona bem. Se você quiser testar a biblioteca e não quiser se dar ao trabalho de digitar ou até mesmo de copiar, pode ir ao meu GitHub e baixá‑la: [https://github.com/loovee/Calc](https://github.com/loovee/Calc)

###   Recursos

[download pdf file](https://files.seeedstudio.com/wiki/How_to_use_and_write_a_library/res/How_to_use_and_write_a_library.pdf)

## Suporte Técnico e Discussão de Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
