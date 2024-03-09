🐳 What is Docker?
Docker is a platform implementing containerization, allowing you to build container images, run them to create containers, and push these containers to registries like DockerHub.

LifeCycle of Docker:
🔨 docker build -> builds docker images from Dockerfile
▶️ docker run -> runs container from docker images
🚀 docker push -> push the container image to public/private registries to share the docker images

Terminologies in Docker:
i) Docker daemon: The Docker daemon, called dockerd, listens for requests and handles Docker stuff like images and containers. It's like the boss overseeing everything, making sure everything runs smoothly. It can even talk to other daemons.
ii) Docker client: The Docker client, simply called 'docker', is how most people control Docker. When you type commands like 'docker run', it tells the dockerd what to do, and it gets done. Think of it like your personal assistant for Docker tasks.
iii) Docker registries: A Docker registry is like a storage place for Docker images. Docker Hub is a popular one that anyone can access, and Docker usually looks there first. You can also set up your own private registry if you prefer. When you use commands like 'docker pull' or 'docker run', Docker fetches images from your chosen registry. And if you use 'docker push', your image gets uploaded there.
iv) Images: An image serves as a blueprint for Docker containers, containing instructions for their setup. In Docker, you can make your own images or use ones made by others. To create your own, you write a Dockerfile that outlines the steps. Each step in the Dockerfile adds a layer to the image. When you update the Dockerfile and rebuild, only the changed layers are updated.
This makes Docker images lightweight, small, and speedy compared to other virtualization methods.
