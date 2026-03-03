---
description: A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office
title: A Guide to Integrating LinkStar, Grocy, and BookStack in Your Office
keywords:
  - LinkStar
  - Getting started
  - Bookstack
  - Grocy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /grocy-bookstack-linkstar
last_update:
  date: 6/26/2023
  author: Kasun Thushara
---
# Taking Control: Self-Hosted Solutions for Office Management with LinkStar, Grocy, and BookStack

The integration of Grocy and BookStack within a self-hosted office server powered by a LinkStar router offers a compelling solution for efficient and organized operations. With Grocy, businesses can effectively manage their groceries, shopping lists, and tasks, ensuring streamlined processes and reduced waste. On the other hand, BookStack provides a centralized documentation platform that promotes collaboration, knowledge sharing, and easy access to important information. By hosting both applications on the LinkStar router, businesses gain control over their data, enhance security, and eliminate the reliance on external services. This self-hosted setup empowers offices to optimize workflows, improve productivity, and create a well-structured and productive work environment. In this blog post, we will delve into the importance of integrating Grocy and BookStack within a LinkStar-powered office server, exploring the benefits and showcasing how this combination revolutionizes office management.

## What is Docker ?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/plex/docker.png" alt="pir" width="200" height="auto"/></p>

[Docker](https://docs.docker.com/) is an open-source platform that enables developers to automate the deployment and management of applications within lightweight, isolated containers. Containers are self-contained units that package an application along with its dependencies, libraries, and configuration files, allowing it to run consistently across different environments. Docker simplifies the process of creating, distributing, and running applications, making it easier to develop and deploy software in a consistent and reproducible manner. With Docker, developers can encapsulate their applications and ensure that they run smoothly across different operating systems and infrastructure setups, making it an invaluable tool for building portable and scalable applications, streamlining development workflows, and enabling efficient collaboration among team members.

## What is Portainer ?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/wordpress/pontainer-bg.png" alt="pir" width="200" height="auto"/></p>

[Portainer](https://www.portainer.io/) is a powerful and intuitive open-source management interface designed specifically for Docker. With its user-friendly web-based GUI, Portainer simplifies the deployment and administration of Docker containers, images, networks, and volumes. It offers a visual representation of the container environment, allowing users to easily create, start, stop, and remove containers with just a few clicks. Monitoring resource usage, viewing logs, and accessing container terminals are made effortless within the Portainer interface. Additionally, Portainer supports role-based access control, providing granular control over user privileges. Whether you're a beginner or an experienced Docker user, Portainer is an invaluable tool that streamlines container management, making it accessible and efficient for everyone.

## What is Bookstack?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstackicon.png" alt="pir" width="200" height="auto"/></p>

[BookStack](https://www.bookstackapp.com/) is a powerful and user-friendly open-source platform designed for creating and managing documentation and knowledge bases. With its intuitive interface, BookStack allows teams and organizations to efficiently organize and share information. It offers a hierarchical structure where content can be organized into books, chapters, and pages, enabling easy navigation and retrieval of information. BookStack supports rich text editing, allowing users to format and style their content effectively. It also offers features such as image embedding, version control, and collaboration tools, promoting seamless teamwork and efficient knowledge management. Whether for internal documentation, customer support, or educational purposes, BookStack is a versatile and widely used solution that streamlines the process of creating and maintaining comprehensive knowledge bases.

## What is Grocy?

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy_logo.svg" alt="pir" width="200" height="auto"/></p>

[Grocy](https://grocy.info/) is a self-hosted, open-source web application that helps users manage their groceries, household items, and tasks. It provides features for tracking food inventory, creating shopping lists, managing recipes, and keeping track of expiration dates.

## Set up the Docker environment on the LinkStar OpenWRT router

By default, the Docker installation on LinkStar has a storage capacity of around 250MB, which may not be sufficient for installing images. Therefore, we need to allocate more space to Docker to accommodate our requirements. As same as [Plex media server WiKi](https://wiki.seeedstudio.com/plex_media_server/) you need to follow steps.If you have already done it, please skip this step.

**Note:** For that make sure to follow the [Set up the docker environment on the linkstar openwrt router](https://wiki.seeedstudio.com/plex_media_server/#set-up-the-docker-environment-on-the-linkstar-openwrt-router) before going through this guide.

## Install Portainer container

This topic is discussed in the WordPress integration to Linkstar.  So you need to follow these steps if you are installing the Portainer for the first time. Here is the link for [installing Portainer container](https://wiki.seeedstudio.com/wordpress_linkstar/#install-portainer-container).

## Install BookStack

### Step 01: Create a new stack

In the context of application usage, a stack refers to a set of related services. Therefore, our first step is to establish a new stack. To do this, navigate to the sidebar and locate the **Stacks** option. Click on it and select **Add Stack** to proceed.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack1.PNG" alt="pir" width="600" height="auto"/></p>

### Step 02: Installing BookStack using web editor

In this step, you will need to provide a stack name and copy the following docker-compose format text to the web editor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack2.PNG" alt="pir" width="600" height="auto"/></p>

```sh
---
version: "2"
services:
  bookstack:
    image: lscr.io/linuxserver/bookstack
    container_name: bookstack
    environment:
      - APP_URL=http://192.168.100.1:6875
      - DB_HOST=bookstack_db
      - DB_PORT=3306
      - DB_USER=bookstack
      - DB_PASS=yourdbpass
      - DB_DATABASE=bookstackapp
    volumes:
      - ./bookstack_app_data:/config
    ports:
      - 6875:80
    restart: unless-stopped
    depends_on:
      - bookstack_db
  bookstack_db:
    image: lscr.io/linuxserver/mariadb
    container_name: bookstack_db
    environment:
      - MYSQL_ROOT_PASSWORD=yourdbpass
      - TZ=Asia/Colombo
      - MYSQL_DATABASE=bookstackapp
      - MYSQL_USER=bookstack
      - MYSQL_PASSWORD=yourdbpass
    volumes:
      - ./bookstack_db_data:/config
    restart: unless-stopped

```

The provided docker-compose file includes two distinct docker containers: one for the Bookstack application and another for the SQL database. This is the recommended method for installing Bookstack. However, there are a few crucial changes that need to be made before proceeding.

Firstly, replace "yourappurl" with the desired URL through which you intend to access the Bookstack application. Additionally, modify "yourdbpass" to a password of your preference. It's essential to ensure that the same password is used for both containers to maintain consistency.

Finally, remember to adjust the "TZ" variable to match your specific [Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

By making these necessary modifications, you can successfully configure the docker-compose file for your Bookstack installation.

Under the page you can found **Deploy Stack** button and click on it.

### Step 03: Access to BookStack

After the deploying process is done you can see a new stack is created. In our case, it is bookstack and click on it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack3.PNG" alt="pir" width="600" height="auto"/></p>

Then you can observe two containers are running, and the port number is 6875.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack4.PNG" alt="pir" width="600" height="auto"/></p>

Next open your web browser and type 192.168.100.1:6875. Then you will navigate to login page.

:::note

Email: admin@admin.com

Password: password

:::

Then you can access successfully to home page of BookStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/bookstack5.PNG" alt="pir" width="600" height="auto"/></p>

## Install Grocy

### Step 01: Create a new stack

Same as the first step of the installation of Bookstack, we need to create a new stack. So you can use the above guide line on how to create a new stack.

### Step 02: Installing Grocy using web editor

Same as the second step of installation of BookStack, you need to provide a stack name. Then copy and paste the following docker-compose text to the web editor.

```sh
---
version: "2.1"
services:
  grocy:
    image: lscr.io/linuxserver/grocy
    container_name: grocy
    environment:
      - TZ=Asia/Colombo
    volumes:
      - /grocy/config:/config
    ports:
      - 9283:80
    restart: unless-stopped

```

Under the page you can found **Deploy Stack** button and click on it.

### Step 03: Access to Grocy

 After the deploying process is done you can see a new stack is created. In our case, it is grocy and click on it.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy1.PNG" alt="pir" width="600" height="auto"/></p>

Then you can observe grocy container is running, and the port number is 9283.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy2.PNG" alt="pir" width="600" height="auto"/></p>

 Next open your web browser and type 192.168.100.1:9283. Then you will navigate to login page.

:::note

Username: admin

Password: admin

:::

Then you can access successfully to home page of BookStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LinkStar/grocy_bookstack/grocy3.PNG" alt="pir" width="600" height="auto"/></p>

## Resources

- **[Web Page]** [Docker Offficial Documentation](https://docs.docker.com)

- **[Web Page]** [Docker Hub](https://hub.docker.com)

- **[Web Page]** [Portainer](https://www.portainer.io/)

- **[Web Page]** [BookStack](https://www.bookstackapp.com/)

- **[Web Page]** [Grocy](https://grocy.info/)

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
