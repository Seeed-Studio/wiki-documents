---
description: Uma biblioteca de serial prática
title: Uma biblioteca de serial prática
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /A_Handy_Serial_Library
last_update:
  date: 02/01/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/A_Handy_Serial_Library/
---

O Arduino não tem função de depuração, talvez esta seja a primeira impressão de alguns engenheiros de software. Na verdade, muitas vezes só usamos o Arduino para fazer algumas aplicações simples, mesmo sem depuração, e isso não importa. Se você quiser usar o Arduino para fazer alguma aplicação complexa, como reconhecimento facial, então talvez tenha que repensar se escolheu a plataforma errada.

No caso de algumas aplicações simples, podemos usar impressão serial para depurar, e o Arduino fornece uma função de impressão serial muito fácil de usar.

```cpp
void setup()
{
    Serial.begin(115200);

    Serial.println("hello world");
}

void loop()
{
    // add code here
}
```
Além disso, há Serial.print, Serial.write e assim por diante. Quando você estiver familiarizado com essas funções, verá que na verdade elas não são tão amigáveis, apenas dê uma olhada no código a seguir:

```cpp
void setup()
{
    Serial.begin(115200);

    Serial.print("a[");
    Serial.print(3);
    Serial.print("] = ");
    Serial.println(5);

}

void loop()
{
    // add code here
}
```

Para imprimir a[3]=5, isso pode ocupar 4 linhas de código, trabalhoso? Lembre-se das aulas de linguagem C, isso ocupa apenas uma linha de código:

```cpp
printf("a[%d] = %d", 3, 5);
```

Quanto a C++, uma linha também é suficiente:


```cpp
cout << "a[" << 3 << "] = " << 5 << endl;
```

Eu ficaria feliz se o Arduino tivesse funções como printf ou cout, é realmente conveniente. Felizmente, alguém escreveu essa biblioteca, você pode consultar [http://arduiniana.org/libraries/streaming/](http://arduiniana.org/libraries/streaming/)
Eu fiz algumas pequenas alterações nessa biblioteca, você pode baixá-la aqui: [https://github.com/loovee/Streaming](https://github.com/loovee/Streaming) , por que não experimentar?

##   Recursos

- [baixar arquivo pdf](https://files.seeedstudio.com/wiki/A_Handy_Serial_Library/res/A_handy_Serial_library.pdf)

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
