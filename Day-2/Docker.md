## Dockerfile

- A Dockerfile is indeed a text file containing a set of instructions. These instructions define how
  to build a Docker image step by step.
- Dockerfiles automate the process of creating Docker images, ensuring consistency and
  reproducibility in the deployment of applications.

### Steps for Dockerfile Usage:

1. Create a File Named Dockerfile.
2. Add Instructions in the Dockerfile.
3. Build a Dockerfile to Create an Image.
4. Run the Image to Create a Container.

The Dockerfile supports the following instructions:
| Instruction | Description |
| ----------- | ---------------------------------------------------------- |
| FROM | Create a new build stage from a base image. |
| RUN | Execute build commands. |
| MAINTAINER | Specify the author of an image. |
COPY Copy files and directories.
ADD Add local or remote files and directories.
EXPOSE Describe which ports your application is listening on.
WORKDIR Change working directory.
CMD Specify default commands.
ENTRYPOINTS Specify default executable.
ENV Set environment variables.
VOLUME Create volume mounts.
USER Set user and group ID.
LABEL Add metadata to an image.
ONBUILD Specify instructions for when the image is used in a build.
SHELL Set the default shell of an image.
ARG Use build-time variables.
HEALTHCHECK Check a container's health on startup.
STOPSIGNAL Specify the system call signal for exiting a container.
