---
description: Guia abrangente de diagnóstico e solução de problemas dos motores do Reachy Mini usando o aplicativo Testbench para detectar e corrigir falhas nos motores.
title: Diagnóstico e solução de problemas dos motores
slug: /reachymini_troubleshooting_motors_diagnosis
keywords:
  - motores
  - diagnóstico
  - solução de problemas
  - testbench
  - dynamixel
  - detecção de motor
  - regravação de firmware
  - reparo
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_troubleshooting_motors_diagnosis/
---

# Guia de diagnóstico e solução de problemas dos motores

Este documento fornece um guia para diagnosticar e solucionar problemas comuns relacionados aos motores do robô Reachy Mini.

## Aplicativo Reachy Mini Testbench
Para ajudar a diagnosticar problemas nos motores, desenvolvemos o [Reachy Mini Testbench app](https://huggingface.co/spaces/pollen-robotics/reachy_mini_testbench). Este aplicativo permite testar motores individualmente, verificar seu status e identificar possíveis problemas.

Você precisa instalar este aplicativo usando o Reachy Mini Control antes de utilizá-lo (consulte o [guia de instalação](https://huggingface.co/docs/reachy_mini/platforms/reachy_mini/usage#2-installation)).

![Reachy Mini Testbench app](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-testbench.png)

## Processo típico de solução de problemas dos motores
Se você tiver qualquer um dos seguintes sintomas, siga as etapas de diagnóstico abaixo.
- Motores piscando em vermelho e sem responder/mover.
- Sem erro, mas os motores não respondem aos comandos.
- Motores exibindo erros como "Overload Error"
- Motores ausentes: "No motor found on port", "Missing motor", etc.

### Diagnóstico
- Ligue o robô.
- Abra o aplicativo Reachy Mini Testbench.
- Faça uma varredura dos motores clicando no botão "Scan Motors".

### Possíveis resultados

**1. Todos os motores são detectados:**
Então todos os motores estão fisicamente conectados e funcionando.

![All_motors_detected](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/all_motors_found.png)

Se você ainda tiver problemas, talvez eles não estejam na ordem correta ou com a configuração correta.
Clique em "Check all motors" para verificar se todas as configurações dos motores correspondem aos valores esperados.

![Check_all_motors](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/check_motor_configuration.png)

=> Se algo não estiver correto, o daemon irá regravar o firmware de todos os motores quando você o reiniciar.
Se tudo estiver correto, mas você ainda tiver problemas, consulte as verificações abaixo.

**Inversão de motores:** Se você obtiver "Motor hardware errors: ['Overload Error']" e LEDs piscando alguns segundos após ligar o robô **pela primeira vez** e tiver dois motores do braço apontando para cima.
É MUITO provável que haja motores colocados no slot incorreto, por exemplo, motor 1 no slot 2.

![Motors inversion symptom](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/motors_upward.png)

**Verifique a orientação do braço no horn do motor**:
Remova o motor com problema, depois posicione o braço para cima como na imagem em anexo. Em seguida, verifique se você consegue ver as duas linhas de marcação alinhadas como representado:

![Marks_aligned](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/marks_aligned.png)

Se não estiverem, remova os dois parafusos que fixam o braço e recoloque-o com as duas linhas coincidindo.


**Verifique o comprimento extra do cabo USB dentro da cabeça:**
Se ele estiver muito longo dentro da cabeça, pode haver folga insuficiente na parte de baixo e a cabeça não conseguirá se mover livremente.
Assim, os motores fazem força demais e podem ser danificados.

![usb_cable_length](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/usb_cable_length.jpg)

Deixe uma folga no cabo USB para permitir que a cabeça se mova livremente, mesmo até sua posição de altura máxima.



**Um motor parece quebrado:**
Identificamos um problema que afeta um lote de produção limitado de robôs Reachy Mini, relacionado a um lote defeituoso de motores Dynamixel.

Na maioria dos casos relatados, o problema afeta o motor número 4 ou um com etiqueta de QC n°2544.

Se um dos seus motores **pisca em vermelho e parece incomumente difícil de mover quando está desligado** [(vídeo de exemplo aqui)](https://drive.google.com/file/d/1UHTqUcb21aFThqlr2Qcx23VWqvj_y-ly/view?usp=sharing), e você tem 100% de certeza de que o motor estava no slot correto.

Provavelmente é um motor quebrado.

Primeiro, tente atualizar seu robô para a versão mais recente do software e depois reinicie-o. Isso irá regravar o firmware dos seus motores.
Se o problema persistir, entre em contato com o suporte.

**2. Alguns motores não são detectados:**.

![Some_motors_missing](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/missing_motors.png)

- Apenas um motor está ausente: verifique a conexão física desse motor de acordo com as instruções de montagem.
Se você tiver 100% de certeza de que a conexão está correta, também pode ser um motor cujo firmware não foi gravado corretamente. Consulte a seção **Problema de regravação de firmware** abaixo.

- Se motores com IDs sucessivos estiverem ausentes (por exemplo, motores 1-2-3, ou 4-5-6, ou 17-18 estiverem ausentes), verifique as conexões físicas entre a placa de alimentação no pé e os motores 3 e 4. Se o problema ocorrer em 17-18, verifique a conexão entre o motor "R" e a placa PCB na cabeça.

- Se **dois motores estiverem ausentes**, mas a conexão estiver correta, então talvez você tenha dois motores com o mesmo ID no seu kit. Três é muito improvável. Consulte a seção "Problema de regravação de firmware" abaixo.

- Se **todos os motores estiverem ausentes**, verifique a conexão do motor central "F" (ID10). Este motor é o primeiro da cadeia e, se não for detectado, todos os motores seguintes também não serão detectados.
Este motor deve estar conectado ao pé com um cabo de 100 mm e à cabeça com um cabo de 300 mm. Certifique-se de que esses cabos estejam bem conectados em cada extremidade e não estejam danificados.

### Problema de regravação de firmware
Se um ou mais motores não forem detectados, isso pode ser devido a um problema de regravação de firmware que afeta os IDs dos motores ou o baudrate.

Para resolver isso, você precisará:
1. Clicar no botão "Scan all baudrates" no aplicativo Testbench.
Os motores devem ser detectados no baudrate 1000000.
Os IDs dos motores devem ir de 10 a 18, sem duplicatas ou números faltando.

2. Se houver um motor com baudrate e/ou ID incorreto, você precisará regravar o firmware dele com os parâmetros corretos.
Para fazer isso, siga o procedimento de regravação abaixo:
- Na seção de regravação de motor, escolha o motor com o ID ou baudrate incorreto.
- Escolha o preset do que o motor deveria ser (por exemplo, motor 10 para a rotação da base).
- Clique em "Reflash motor".

![Reflash_motor](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reflash_motors.png)

3. Se você tiver vários motores ausentes e tiver certeza de que as conexões estão corretas, será necessário regravar todos os motores com problema/ausentes um por um, seguindo o mesmo procedimento acima, mas desconectando todos os outros motores com problema para evitar conflitos de ID.