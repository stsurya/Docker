## Docker File Instructions

- **FROM <>:**

- Mostly This first instruction of any dockerfile which will create the base image for subsequent instructions.

- FROM can appear multiple times within a single Dockerfile to create multiple images or use one build stage as a dependency for another.

- **RUN <>:**

- This is basicually will execute the commands on the image that we used in the previous step.
- It'll create a new layer on top of the current image.
- The added layer is used in the next step in the Dockerfile.
  You can execute RUN in two formats:

**Shell**

RUN echo Hello World

**EXEC**

RUN ["/bin/sh", "-c", "echo hello"]

- **WORKDIR <>**

- The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile. If the WORKDIR doesn't exist, it will be created even if it's not used in any subsequent Dockerfile instruction.

- **USER <>**

- The USER instruction sets the user name (or UID) and optionally the user group (or GID) to use as the default user and group for the remainder of the current stage. The specified user is used for RUN instructions and at runtime, runs the relevant ENTRYPOINT and CMD commands.
- If the user is not existing you need to create by using RUN command.

- **SHELL <>**
  The SHELL instruction in a Dockerfile allows you to specify the shell used to run commands in your Dockerfile's RUN, CMD, and ENTRYPOINT instructions

- **ENV <>**
  This will allow you to set the environment variables

- **COPY <>**
  This is used to copy some code from source to destination

- **ADD <>**
  This Add command is used to copy files and also it can copy from remote lcoation to image

- **EXPOSE <>**
  If you want to open any port on the container, you need to expose the port.

- **CMD**
  Purpose: The CMD instruction provides default arguments for the container when it runs. It can be easily overridden at runtime using command-line arguments with docker run.

- **ENTRYPOINT**
  Purpose: The ENTRYPOINT instruction specifies a command that always runs when the container starts. It's not as easily overridden as CMD. You typically use ENTRYPOINT when you want to define a fixed behavior for your container.
