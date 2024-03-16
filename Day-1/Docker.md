## What is Docker ?

Docker is an open platform for developing, shipping, and running applications. Docker enables you to
separate your applications from your infrastructure so you can deliver software quickly. With Docker,
you can manage your infrastructure in the same ways you manage your applications.

- Docker release March 2013 by Solomon Hykes and Sebastian
- Docker is a platform as a service that uses OS-level virtualization
- Docker is an open-source centralized platform designed to create deploy and run applications
- Docker uses a container on the Host OS to run applications. It allows applications to use the same host computer rather than creating a whole Virtual OS.
- We can install Docker on any OS but Docker Engine runs natively on Linux distribution.
- Docker is written in the Go language.
- Docker is a tool that performs OS-level Virtualization, also known as centralization.

### Advanatage of Docker:

- No pre-allocation of RAM
- Continues Integration (CI) Efficiency -> Docker enables you to build a container image and
  use that same image across every step of the deployment process.
- Less cost
- It is light in weight
- It can re-use the image
- It can run on physical H/W, Virtual H/W, or on cloud.
- It took very little time to create a container.

### Disadvanatges of Docker:

- Docker is not a good solution for applications that require rich GUI
- Difficult to manage large amounts of containers
- Docker does not provide cross-platform compatibility means if an application is designed to
  run in a docker container on Windows, then it can`t run on Linux or vice-versa
- No solutions for Data recovery and backup
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

![](https://docs.docker.com/get-started/images/docker-architecture.webp)
