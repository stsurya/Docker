# Docker Commands

Some of the most commonly used docker commands are

### docker images

Lists docker images on the host machine.

### docker build

Builds image from Dockerfile.

### docker run

Runs a Docker container.

There are many arguments which you can pass to this command for example,

`docker run -d` -> Run container in background and print container ID
`docker run -p` -> Port mapping. If two images with same port are running we can map them to the available host ports using -p in run command.

use `docker run --help` to look into more arguments.

### docker ps

Lists running containers on the host machine.

### docker ps -a -f status=exited

Command which will show only stopped containers. `-a` will show all the containers whereas `-f` will filter the output based on the specified condition.

### docker stop

Stops running container.

### docker start

Starts a stopped container.

### docker restart <container_ID>

This will restart the container.

### docker rm

Removes a stopped container.

### docker rm -f <Container_ID>

This will delete the container eventhough it's up and running.

### docker rmi

Removes an image from the host machine.

### docker pull

Downloads an image from the configured registry.

### docker push

Uploads an image to the configured registry.

### docker rename

Renaming an existing container. docker <old_container_name> <new_container_name>

### docker images -q

This command will dispaly all the ID's of images.

### How to remove multiple docker images in one command

docker rmi $(docker images -q)

### docker logs <container_ID>

To see the logs od container.

### docker exec

Run a command in a running container.

### docker network

Manage Docker networks such as creating and removing networks, and connecting containers to networks.

### docker network ls

to list all the network

### docker network inspect <network_ID>

To check or troubleshoot

### docker history <image_name>

This will show all the layers that has been created on this particular image

### docker system prune -f

Stopped containers

Unused networks

Dangling images (images not tagged and not referenced by any container)

Build cache


Got it 👍 You’re asking for **all Docker CLI commands along with their filters and a brief explanation**.
Since Docker has a large set of commands, I’ll break it into **categories** (Management, Images, Containers, Networks, Volumes, etc.), and list the **filters** available for each where applicable.

---

# 🐳 **Docker CLI Commands with Filters**

## 1. **Docker Info & System**

* `docker --version` → Show Docker version.
* `docker info` → Show system-wide info (storage driver, runtime, etc.).
* `docker system df` → Show disk usage.
* `docker system prune` → Remove unused data.

  * `--all` → remove all unused images.
  * `--volumes` → remove unused volumes.

---

## 2. **Docker Images**

* `docker images` → List images.
  **Filters** (`--filter` or `-f`):

  * `dangling=true` → only dangling images.
  * `label=<key>` → filter by label.
  * `reference=<name>` → match image name.
* `docker image ls` → Same as `docker images`.
* `docker image pull <name>` → Download image.
* `docker image push <name>` → Upload image.
* `docker image rm <id>` → Remove image.
* `docker image inspect <id>` → Detailed info.
* `docker image prune` → Remove unused images.

---

## 3. **Docker Containers**

* `docker ps` → List running containers.
  **Filters:**

  * `id=<id>` → filter by container ID.
  * `name=<name>` → filter by name.
  * `status=(created|running|paused|exited)`
  * `ancestor=<image>` → filter by parent image.
  * `before=<id>` / `since=<id>` → relative to another container.
  * `label=<key>` → filter by label.

* `docker ps -a` → List all containers.

* `docker create <image>` → Create container (stopped).

* `docker run <image>` → Run container.

  * `-d` → detached.
  * `-p 8080:80` → port mapping.
  * `-v host:container` → volume mount.
  * `--name <name>` → name container.

* `docker start <id>` → Start container.

* `docker stop <id>` → Stop container.

* `docker restart <id>` → Restart container.

* `docker rm <id>` → Remove container.

* `docker inspect <id>` → Detailed info.

* `docker logs <id>` → View logs.

* `docker exec -it <id> bash` → Run command inside container.

* `docker container prune` → Remove stopped containers.

* `docker top <id>` → Show processes in container.

* `docker stats` → Live resource usage.
  **Filters:**

  * `--filter id=<id>`
  * `--filter name=<name>`

---

## 4. **Docker Networks**

* `docker network ls` → List networks.
  **Filters:**

  * `driver=<driver>` → filter by driver.
  * `id=<id>`
  * `label=<key>`
  * `name=<name>`
  * `type=(builtin|custom)`

* `docker network create <name>` → Create network.

* `docker network inspect <name>` → Details.

* `docker network connect <net> <container>` → Attach container.

* `docker network disconnect <net> <container>` → Detach container.

* `docker network rm <name>` → Remove network.

* `docker network prune` → Remove unused networks.

---

## 5. **Docker Volumes**

* `docker volume ls` → List volumes.
  **Filters:**

  * `dangling=true` → unused volumes.
  * `driver=<driver>` → filter by driver.
  * `label=<key>`
  * `name=<name>`

* `docker volume create <name>` → Create volume.

* `docker volume inspect <name>` → Details.

* `docker volume rm <name>` → Remove.

* `docker volume prune` → Remove unused.

---

## 6. **Docker Build**

* `docker build -t <tag> .` → Build image from Dockerfile.

  * `--no-cache` → build without cache.
  * `--build-arg <key>=<value>` → pass build args.
* `docker history <image>` → Show layers.

---

## 7. **Docker Compose** (if installed)

* `docker compose up -d` → Start services.
* `docker compose down` → Stop and remove services.
* `docker compose ps` → List services.
* `docker compose logs` → View logs.

---

## 8. **Docker Events**

* `docker events` → Real-time events.
  **Filters:**

  * `container=<id>`
  * `event=<event>` (start, stop, die, etc.)
  * `image=<name>`
  * `label=<key>`
  * `type=(container|network|volume|image)`

---

## 9. **Docker Contexts**

* `docker context ls` → List contexts.

  * `--filter name=<name>`
* `docker context use <name>` → Switch context.

---

## 10. **Docker Registries**

* `docker login <registry>` → Authenticate.
* `docker logout <registry>` → Logout.
* `docker search <image>` → Search Docker Hub.
  **Filters:**

  * `is-official=true` → only official images.
  * `is-automated=true` → only automated builds.
  * `stars=<N>` → min stars.