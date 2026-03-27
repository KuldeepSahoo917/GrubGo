# GrubGo Static Website
This is a simple food ordering static website built with HTML, CSS, and JavaScript. 
The application is containerized using Docker and runs inside an Nginx container.

---

## Requirements
1. Docker
2. Git

---

### 1. Clone the repository
```
git clone https://github.com/KuldeepSahoo917/GrubGo.git
```
```
cd GrubGo
```

### 2. Build the app
```
docker build -t grubgo .
```

### 3. Run the app
```
docker run -itd -p 8081:80 grubgo
```
### 4. Check running containers
```
docker ps -a
```
---

## Access the Application

Open your browser and go to:
```
http://localhost:8081
```

If running on a server:
```
http://<server-ip>:8081
```

If someone asks how Docker Flask works, say this:

Flow:
```
User Browser → Port 8081 → Docker Container → Nginx Server → Website Files → Response → Browser 
```
