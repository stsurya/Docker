## What is Container ?

A container is a lightweight, portable, and self-sufficient software package that includes an application and all its dependencies, ensuring consistent behavior across different environments. It isolates the application from the host system, providing a controlled environment with its own file system, libraries, and configuration files. Containers can run anywhere—on a developer's machine, a test server, or in production—without modification. They are managed using containerization platforms like Docker and orchestrated with tools like Kubernetes.

## Why are containers light weight ?

- **Shared OS:** Containers share the host OS system without actually needing the whole OS kernel instead of having their own. This means they don't need to include a full OS, which makes them smaller and faster
- Containers only package the application and its immediate dependencies, not the entire OS. This makes them much lighter compared to virtual machines (VMs), which include a full OS.
- **Quick Start-Up:** Because they are smaller and share the host OS, containers can start up and shut down very quickly, often in just a few seconds.

## What is Docker ?

Docker is an open platform for developing, shipping, and running applications. Docker enables you to
separate your applications from your infrastructure so you can deliver software quickly. With Docker,
you can manage your infrastructure in the same ways you manage your applications.

- Docker release March 2013 by Solomon Hykes and Sebastian.
- Docker is a platform as a service that uses OS-level virtualization.
- Docker is an open-source centralized platform designed to create deploy and run applications.
- Docker uses a container on the Host OS to run applications. It allows applications to use the same host computer rather than creating a whole Virtual OS.
- We can install Docker on any OS but Docker Engine runs natively on Linux distribution.
- Docker is written in the Go language.
- Docker is a tool that performs OS-level Virtualization, also known as centralization.

### Advanatage of Docker:

- No pre-allocation of RAM.
- Continues Integration (CI) Efficiency -> Docker enables you to build a container image and
  use that same image across every step of the deployment process.
- Less cost.
- It is light in weight.
- It can re-use the image.
- It can run on physical H/W, Virtual H/W, or on cloud.
- It took very little time to create a container.

### Disadvanatges of Docker:

- Docker is not a good solution for applications that require rich GUI.
- Difficult to manage large amounts of containers.
- Docker does not provide cross-platform compatibility means if an application is designed to
  run in a docker container on Windows, then it can`t run on Linux or vice-versa
- No solutions for Data recovery and backup.
- Docker is suitable when the development OS and testing OS are the same.

## Why to use Docker ?

- **Consistency:** Ensure applications run the same way in various environments.
- **Portability:** Easily move applications between different machines.
- **Efficiency:** Use resources more effectively with lightweight containers.
- **Isolation:** Run applications independently, avoiding conflicts.
- **Ease of Deployment:** Streamline deployment with standardized container images.
- **Scalability:** Scale applications easily using orchestration tools.
- **DevOps Integration:** Support for DevOps practices and CI/CD pipelines.
- **Community Support:** Large community and repository for sharing containerized
  applications.
- **Microservices Ready:** Ideal for microservices architecture, enabling modular
  development.
- **Version Control:** Versioned images for easy tracking and rollback.

## Architecture of Docker

![](./image.png)

## Docker Client:

- Docker users can interact with the docker daemon through a client (CLI).
- The Docker client uses CLI and Rest API to communicate with the Docker daemon.
- When a client runs any server command on the docker client terminal, the client terminal
  sends these docker commands to the docker daemon.
- The client can communicate with more than one daemon.

## Docker Daemon:

- Docker daemon runs on the Host OS.
- It is responsible for running container to manage docker services.
- Docker daemon can communicate with other daemon.

## Docker Hub/ Registry:

- The Docker registry manages and stores the docker images.
- There are two types of registries in the docker.
  Public registry: is also called docker hub.
  Private registry: it is used to share images within the enterprise.

## Docker Images:

Docker image is a lightweight, standalone package that contains all the necessary components (code,
runtime, libraries, and system tools) to run a software application. It serves as a blueprint for creating
Docker containers, providing consistency and portability across different environments. Images are
created using Dockerfiles, stored in registries like Docker Hub, and can be easily pulled, pushed, and
shared.
Or
Docker images are the read-only binary templates used to create a docker container.
Or
Single file with all dependencies and configuration required to run a program.

Ways to create a Images (Three ways):

1. Take images from Docker Hub.
2. Create image form Docker file.
3. Create image from existing docker container.

## What is container ?

- A container is a package that includes everything the application needs, such as code, libraries, and dependencies. It's easy to move from one environment to another environment as it's isloated, portable and standarized.
