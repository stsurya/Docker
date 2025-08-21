## Describe the Docker storage options (volumes, bind mounts, tmpfs). When would you choose each in a production system?

In Docker, I would prefer volumes for persistent data because they are managed by Docker, portable, and allow easy backup and sharing between containers. Bind mounts are useful for development or when I need a container to access host-specific files, but they’re less portable. tmpfs mounts are ideal for temporary in-memory storage, like caching or sensitive secrets, where high speed and volatility are desired. Choosing the right storage depends on data persistence, performance, and portability requirement

## What is the difference between CMD and ENTRYPOINT in a Dockerfile? Provide a use case for each.

Here’s a clear, **interview-ready explanation** of CMD vs ENTRYPOINT in a Dockerfile:

---

### **1. CMD**

* **Purpose:** Specifies the **default command** to run when a container starts.
* **Can be overridden** at runtime by providing a command in `docker run`.
* **Syntax:**

```
CMD ["executable","param1","param2"]  # exec form (preferred)
CMD command param1 param2             # shell form
```

* **Use Case:**
  When you want a **default behavior** for the container, but allow it to be **overridden at runtime**.
  **Example:**

```
FROM ubuntu
CMD ["echo", "Hello, World!"]
```

* Running:

```
docker run myimage           # Prints "Hello, World!"
docker run myimage echo Bye  # Overrides CMD, prints "Bye"
```

---

### **2. ENTRYPOINT**

* **Purpose:** Sets a **fixed command** that **cannot easily be overridden**.
* Often combined with CMD to provide default arguments.
* **Syntax:**

```
ENTRYPOINT ["executable","param1"]
CMD ["param2","param3"]  # Optional default arguments
```

* **Use Case:**
  When you want the container to always **run a specific executable**, but optionally allow default arguments to be overridden.
  **Example:**

```
FROM ubuntu
ENTRYPOINT ["ping"]
CMD ["localhost"]
```

* Running:

```
docker run myimage           # Runs "ping localhost"
docker run myimage 8.8.8.8  # Overrides CMD, runs "ping 8.8.8.8"
```

---

### **Key Difference**

| Feature      | CMD                  | ENTRYPOINT                                                 |
| ------------ | -------------------- | ---------------------------------------------------------- |
| Purpose      | Default command      | Fixed command                                              |
| Overridable? | Yes, by `docker run` | Only arguments can be overridden (CMD can supply defaults) |
| Use Case     | Provide defaults     | Enforce the main executable                                |

---

💡 **Interview Tip:**

Think of ENTRYPOINT as **the “what to run”**, and CMD as **“with which default arguments”**. Using both together gives you flexible yet controlled behavior.