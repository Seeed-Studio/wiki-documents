---
description: Guia abrangente de diagnóstico e solução de problemas dos motores do Reachy Mini usando o app Testbench para detectar e corrigir problemas de motor.
title: Diagnóstico e Solução de Problemas dos Motores
slug: /reachymini_troubleshooting_motors_diagnosis
keywords:
  - motors
  - diagnosis
  - troubleshooting
  - testbench
  - dynamixel
  - motor detection
  - reflashing
  - repair
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_troubleshooting_motors_diagnosis/
---

# Guia de diagnóstico e solução de problemas dos motores

Este documento fornece um guia para diagnosticar e solucionar problemas comuns relacionados aos motores do robô Reachy Mini.

## App Reachy Mini Testbench
Para ajudar a diagnosticar problemas de motor, desenvolvemos o [Reachy Mini Testbench app](https://huggingface.co/spaces/pollen-robotics/reachy_mini_testbench). Este app permite testar motores individualmente, verificar seu status e identificar problemas em potencial.
Você precisa instalar este app no robô antes de usá-lo. Se você tiver uma versão lite, será necessário executar o daemon sem autostart em um terminal e acessar o dashboard, como explicado abaixo:
<details>
<summary>Instruções para a versão Lite</summary>

- _Ambiente Virtual:_ Certifique-se de que está executando dentro do seu ambiente virtual (`.venv`, `reachy_mini_env`,...).
- _Atualização do SDK:_ Certifique-se de que você tem a versão mais recente.
    Com `pip`, execute:
    ```bash
    pip install -U reachy-mini
    ```
    Com `uv`, execute:
    ```bash
    uv pip install -U reachy-mini
    ```

- _Daemon:_ Execute o daemon `reachy-mini-daemon --no-autostart`
- _Acessar o Dashboard:_ Abra seu navegador e vá para `http://localhost:8000/`.
Lá, você pode encontrar o app Testbench na seção "Apps", instalá-lo e então executá-lo.


</details>

## Processo típico de solução de problemas dos motores
Se você tiver qualquer um dos seguintes sintomas, siga as etapas de diagnóstico abaixo.
- Motores piscando em vermelho e não respondendo/não se movendo.
- Sem erro, mas os motores não respondem aos comandos.
- Motores exibindo erros como "Overload Error"
- Motores ausentes: "No motor found on port", "Missing motor", etc.

### Diagnóstico
- Ligue o robô.
- Abra o app Reachy Mini Testbench.
- Faça uma varredura de motores clicando no botão "Scan Motors".

### Resultados possíveis

**1. Todos os motores são detectados:**
Então todos os motores estão fisicamente conectados e funcionando.

![All_motors_detected](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/all_motors_found.png)

Se você ainda tiver problemas, talvez eles não estejam na ordem correta ou com a configuração correta.
Clique em "Check all motors" para verificar se todas as configurações dos motores correspondem aos valores esperados.

![Check_all_motors](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/check_motor_configuration.png)

=> Se algo não estiver correto, o daemon irá regravar o firmware de todos os motores quando você o reiniciar.
Se tudo estiver correto, mas você ainda tiver problemas, consulte as verificações abaixo.

**Inversão de motores:** Se você obtiver "Motor hardware errors: ['Overload Error']" e LEDs piscando alguns segundos após ligar o robô **pela primeira vez** e tiver dois motores do braço apontando para cima.
É MUITO provável que haja motores colocados no slot incorreto, por exemplo, motor 1 no slot 2.

![Motors inversion symptom](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/motors_upward.png)

**Verifique a orientação do braço no horn do motor**:
Remova o motor com problema e, em seguida, coloque o braço apontando para cima como na imagem em anexo. Depois, verifique se você consegue ver as duas marcas de linha alinhadas como representado:

![Marks_aligned](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/marks_aligned.png)

Se não estiverem, remova os dois parafusos que prendem o braço e recoloque-o com as duas linhas coincidindo.


**Verifique o comprimento extra do cabo USB dentro da cabeça:**
Se ele for muito longo dentro da cabeça, pode haver folga insuficiente na parte de baixo e a cabeça não conseguirá se mover livremente.
Assim, os motores fazem muita força e podem ser danificados.

![usb_cable_length](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/usb_cable_length.jpg)

Deixe uma folga no cabo USB para permitir que a cabeça se mova livremente, até mesmo para sua posição de altura máxima.



**Um motor parece quebrado:**
Identificamos um problema que afeta um lote de produção limitado de robôs Reachy Mini, relacionado a um lote defeituoso de motores Dynamixel.

Na maioria dos casos relatados, o problema afeta o motor número 4 ou um com etiqueta de QC n°2544.

Se um dos seus motores **pisca em vermelho e parece incomumente difícil de mover quando desligado** [(vídeo de exemplo aqui)](https://drive.google.com/file/d/1UHTqUcb21aFThqlr2Qcx23VWqvj_y-ly/view?usp=sharing), e você tem 100% de certeza de que o motor estava no slot correto.

Provavelmente é um motor quebrado.

Primeiro, tente atualizar seu robô para a versão de software mais recente e depois reinicie-o. Isso irá regravar o firmware dos seus motores.
Se o problema persistir, entre em contato com o suporte.

**2. Alguns motores não são detectados:**.

![Some_motors_missing](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/missing_motors.png)

- Apenas um motor está ausente: Verifique a conexão física desse motor de acordo com as instruções de montagem.
Se você tiver 100% de certeza de que a conexão está correta, também pode ser um motor que não foi gravado corretamente. Consulte a seção **Flashing issue** abaixo.

- Se motores com IDs sucessivos estiverem ausentes (por exemplo, motores 1-2-3, ou 4-5-6, ou 17-18 estiverem ausentes), verifique as conexões físicas entre a placa de alimentação no pé e os motores 3 e 4. Se o problema ocorrer em 17-18, verifique a conexão entre o motor "R" e a placa PCB na cabeça.

- Se **dois motores estiverem ausentes** mas a conexão estiver correta, então talvez você tenha dois motores com o mesmo ID no seu kit. Três é muito improvável. Verifique a seção "Flashing issue" abaixo.

- Se **todos os motores estiverem ausentes**, verifique a conexão do motor central "F" (ID10). Este motor é o primeiro da cadeia e, se não for detectado, todos os motores seguintes também não serão detectados.
Este motor deve ser conectado ao pé com um cabo de 100 mm e à cabeça com um cabo de 300 mm. Certifique-se de que esses cabos estejam bem conectados em cada lado e não estejam danificados.

### Problema de flashing
Se um ou mais motores não forem detectados, isso pode ser devido a um problema de flashing que afeta os IDs ou a taxa de transmissão (baudrate) dos motores.

Para resolver isso, você precisará:
1. Clicar no botão "Scan all baudrates" no app Testbench.
Os motores devem ser detectados no baudrate 1000000.
Os IDs dos motores devem ser de 10 a 18 sem duplicados ou números ausentes.

2. Se houver um motor com baudrate e/ou ID incorretos, você precisará regravar o firmware dele com os parâmetros corretos.
Para isso, siga o procedimento de flashing abaixo:
- Na seção de reflash do motor, escolha o motor com o ID ou baudrate incorretos.
- Escolha o preset de como o motor deveria ser (por exemplo, motor 10 para a rotação da base).
- Clique em "Reflash motor".

![Reflash_motor](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reflash_motors.png)

3. Se você tiver vários motores ausentes e tiver certeza de que as conexões estão corretas, será necessário regravar o firmware de todos os motores com defeito/ausentes um por um, seguindo o mesmo procedimento acima, mas desconectando todos os outros motores com defeito para evitar conflitos de ID.
