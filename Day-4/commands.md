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
