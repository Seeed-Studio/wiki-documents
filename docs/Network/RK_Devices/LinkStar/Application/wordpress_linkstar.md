---
description: Streamlining Web Development, The Perfect Duo - Linkstar and WordPress
title: Streamlining Web Development, The Perfect Duo - Linkstar and WordPress
keywords:
  - LinkStar
  - Getting started
  - WordPress
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wordpress_linkstar 
last_update:
  date: 6/8/2023
  author: Kasun Thushara
---
# Streamlining Web Development The Perfect Duo - Linkstar and WordPress

Welcome to this informative wiki that will guide you through the installation process of WordPress using Docker and how to access the WordPress dashboard. Embrace the transformative power of Linkstar as you customize your local host website, captivating customers and driving sales. Prepare to experience unparalleled growth, efficiency, and technical prowess with the cutting-edge capabilities of Linkstar. Take the first step today towards unlocking unrivaled success.

## What is Docker ?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) is an open-source platform that enables developers to automate the deployment and management of applications within lightweight, isolated containers. Containers are self-contained units that package an application along with its dependencies, libraries, and configuration files, allowing it to run consistently across different environments. Docker simplifies the process of creating, distributing, and running applications, making it easier to develop and deploy software in a consistent and reproducible manner. With Docker, developers can encapsulate their applications and ensure that they run smoothly across different operating systems and infrastructure setups, making it an invaluable tool for building portable and scalable applications, streamlining development workflows, and enabling efficient collaboration among team members.

## What is Portainer ?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) is a powerful and intuitive open-source management interface designed specifically for Docker. With its user-friendly web-based GUI, Portainer simplifies the deployment and administration of Docker containers, images, networks, and volumes. It offers a visual representation of the container environment, allowing users to easily create, start, stop, and remove containers with just a few clicks. Monitoring resource usage, viewing logs, and accessing container terminals are made effortless within the Portainer interface. Additionally, Portainer supports role-based access control, providing granular control over user privileges. Whether you're a beginner or an experienced Docker user, Portainer is an invaluable tool that streamlines container management, making it accessible and efficient for everyone.

## What is WordPress ?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/wordpress.png" alt="pir" width="200" height="auto"/></p>

[WordPress](https://wordpress.com/) is a popular and widely-used open-source content management system (CMS) that powers millions of websites worldwide. It provides a user-friendly interface and a vast ecosystem of themes, plugins, and extensions that allow users to create and customize their websites with ease. With WordPress, you can easily publish and manage various types of content, including blog posts, pages, images, and multimedia. Its flexible and extensible nature makes it suitable for a wide range of websites, from simple blogs to complex e-commerce platforms. Whether you're a beginner or an experienced user, WordPress offers a robust and versatile platform for building and managing your online presence.

## Set up the Docker environment on the LinkStar OpenWRT router

By default, the Docker installation on LinkStar has a storage capacity of around 250MB, which may not be sufficient for installing images. Therefore, we need to allocate more space to Docker to accommodate our requirements. As same as [Plex media server WiKi](https://wiki.seeedstudio.com/plex_media_server/) you need to follow steps.If you have already done it, please skip this step.

**Note:** For that make sure to follow the [Set up the docker environment on the linkstar openwrt router](https://wiki.seeedstudio.com/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) before going through this guide.

## Install Portainer container

### Step 1: Open Putty and SSH to OpenWrt Terminal

To begin the installation process, open Putty and establish an SSH connection to the OpenWrt terminal. Enter the following details:

:::note

Username: root

Password: password

:::

### Step 2: Install Portainer

For that use this command.

```sh
docker pull portainer/portainer
```

Next type the following command in the terminal

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer1.PNG" alt="pir" width="600" height="auto"/></p>

 You will be able to observe the running container with the LuCi interface operating under Docker-Container.You can see the port number is 9000.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer2.PNG" alt="pir" width="600" height="auto"/></p>

### Step 3: Access to Portainer

Open your web browser and enter the following address: **192.168.100.1:9000**.

This will take you to the Portainer home page. To proceed, simply provide your desired username and password. Then click on create user button

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer3.PNG" alt="pir" width="600" height="auto"/></p>

## Install WordPress

### Step 1: Create custom template of wordpress image

On the Home page of Portainer, navigate to the "App Templates" section. Scroll down until you locate the WordPress template. Once you find it, click on "Copy as Custom" to create a customized configuration for your WordPress installation. This will allow you to tailor the settings and options according to your specific requirements.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer4.PNG" alt="pir" width="600" height="auto"/></p>

### Step 2: Modify the template

Upon clicking "Copy as Custom" for the WordPress template, you will be presented with a form that requires you to provide a title and description for your customized configuration. Fill in the respective fields with a suitable title and description that accurately represent the purpose and nature of your WordPress installation.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer5.PNG" alt="pir" width="600" height="auto"/></p>

Below, you will find the docker-compose.yml script for WordPress. This file plays a crucial role in defining and configuring the WordPress application within a Docker environment. It allows you to specify a range of parameters, including container images, environment variables, network settings, volume mappings, and service dependencies.

By defining the desired state of the application in the docker-compose.yml file, Docker can automatically create, start, and manage the interconnected containers. This ensures consistent and reproducible deployments across various environments. The docker-compose.yml script acts as a blueprint for orchestrating the containers and their configurations, enabling you to easily manage and scale complex applications with efficiency and ease.

**Under the Services >>db>>image change to :**

```sh
mysql/mysql-server:8.0
```

:::note

You can change other parameters like MYSQL_USER, MYSQL_PASSWORD etc. But I keep as it is

:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer8.PNG" alt="pir" width="600" height="auto"/></p>

Then you can find **Create custom template** under the page and Click it.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer9.PNG" alt="pir" width="600" height="auto"/></p>

Next you will redirect to page like this with your custom template name.And just one click on that.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer10.PNG" alt="pir" width="600" height="auto"/></p>

Next you will redirect to page like this and press on **Deploy the Stack**. Wait few minutes for the deployment.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer11.PNG" alt="pir" width="600" height="auto"/></p>

Next you will redirect to page like this. You can see your stack list. Click on your stack created.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer12.PNG" alt="pir" width="600" height="auto"/></p>

Now you can see two containers are running and wordpress port number is 49153.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer13.PNG" alt="pir" width="600" height="auto"/></p>

## Access to Wordpress

Next open your web browser and type Linkstar router and port adresss. i.e **192.168.100.1:49153**
You can see the starting page :)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer15.PNG" alt="pir" width="600" height="auto"/></p>

By pressing Continue button you can see a form to fill. After giving Titile, Username, password, email you can accees to the dash board.

Here is the dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/portainer16.PNG" alt="pir" width="600" height="auto"/></p>

Local web hosting on Linkstar offers a myriad of benefits for various businesses, including **cafes, pizza shops, institutes**, and more. By hosting their websites locally, these businesses can reduce queue times and enhance the overall customer experience. With a local host website, customers can **easily access menus, place orders, make reservations, or schedule appointments, all from the convenience of their own devices. This streamlined process saves time for both customers and staff, resulting in shorter wait times and increased efficiency**. Additionally, a local host website opens up opportunities for **effective advertising, allowing businesses to promote their latest offers, specials, or events directly to their target audience**. By leveraging the power of Linkstar, businesses can create a seamless and engaging online presence, effectively attracting customers and improving their overall satisfaction.

## Resources

- **[Web Page]** [Docker Offficial Documentation](https://docs.docker.com)

- **[Web Page]** [Docker Hub](https://hub.docker.com)

- **[Web Page]** [Portainer](https://www.portainer.io/)

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
