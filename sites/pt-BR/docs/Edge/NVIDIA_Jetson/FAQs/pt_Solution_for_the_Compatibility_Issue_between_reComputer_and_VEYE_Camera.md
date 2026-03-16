---
description: solução para o problema de compatibilidade entre reComputer e câmera VEYE
title: Solução para o Problema de Compatibilidade entre reComputer e Câmera VEYE
keywords:
  - reComputer
  - VEYE Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera
last_update:
  date: 08/01/2024
  author: Youjiang
createdAt: '2024-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera/
---

O problema foi rastreado até um problema de firmware no chip do hub USB.

Os passos específicos são os seguintes:

**ETAPA 1.** Use SSH para fazer login remoto no seu dispositivo Jetson, pois durante o processo de atualização é necessário que nenhum dispositivo externo esteja conectado à interface USB.

**ETAPA 2.** Encontre uma forma de copiar o [Camera Driver](https://files.seeedstudio.com/wiki/reComputer/Hard_ware/VEYE_Camera/vl822-fw.tar.bz2) para o sistema Jetson. Se estiver usando uma unidade USB para copiar, lembre-se de desconectar a unidade USB após a conclusão da cópia.

**ETAPA 3.** Siga as instruções abaixo para realizar a atualização.
```sh
$ tar -xjvf vl822-fw.tar.bz2
$ cd vl822-fw
```
Em seguida, siga o arquivo `readme.md` para instalar o firmware.

**ETAPA 4.** Desligue e aguarde 5 segundos antes de ligar novamente. Em seguida, execute o comando abaixo para confirmar a versão do firmware do hub USB.
```sh
$ ./run_2822_ver.sh
```

**ETAPA 5.** Parabéns, a atualização foi bem-sucedida. Agora você já deve conseguir usar o i2cdetect para detectar a câmera VEYE em 0x3b.





## Suporte Técnico

Não hesite em enviar problemas no nosso [fórum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>