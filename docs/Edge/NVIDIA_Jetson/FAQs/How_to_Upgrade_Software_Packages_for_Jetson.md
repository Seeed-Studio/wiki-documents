---
description: This is a FAQ about Using OTA or incremental updates may lead to system instability and security risks, so it is recommended to perform full ROM updates to maintain system security and stability, avoiding partial updates.
title: Upgrade Software Packages for Jetson
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade_software_packages_for_jetson
last_update:
  date: 2/11/2025
  author: Youjiang
---

#### How can I upgrade software packages if you told me that I cannot execute apt upgrade? Will there be security risks if I don't upgrade the software?

A: First, it's important to understand that **OTA (Over the Air)/Incremental updates/partial updates** can potentially harm your OS, as they allow users to update only a subset of packages. This approach can lead to dependency mismatches, system instability, and missed security patches, ultimately increasing the risk of software failures or vulnerabilities. Additionally, managing partial upgrades often requires manual intervention, which can be error-prone. On the contrary, **full ROM/full updates** ensure that all packages and dependencies are updated together, maintaining system compatibility and stability. By applying security patches and bug fixes across the entire system, full upgrades help keep the system secure and consistent, reducing the likelihood of conflicts. While full upgrades may require more time, they are generally considered safer and more reliable in the long run. For our Jetson devices, we release JetPacks after NVIDIA releases theirs (the same applies for driver releases and assemble your own JetPack), which ensures a more stable and secure system compared to upgrading using apt. If you're concerned about outdated software and want to update specific packages, here are some options:

1. If you're sure that your software package doesn't depend on system packages, run "sudo apt-get install `<Your_Package>`" to upgrade the package.
2. For most open source software, download the source file and compile yourself.
3. Wait for new JetPack release.


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


