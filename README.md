### Sample node.js hello world application packaged as a container with a Helm Chart

Try to deploy it to Kubernetes with this IBM Cloud DevOps toolchain: https://github.com/open-toolchain/simple-helm-toolchain fully preconfigured for you.


Note: The Helm chart was created using a 'helm create hello' command, then altered to pass an image pull secret (to enable later deployments from private image registries), i.e.  

- in [/chart/hello/templates/deployment.yaml](https://github.com/open-toolchain/hello-helm/blob/56ccf087e2d8fc18f7774f84f9400f02060736f2/chart/hello/templates/deployment.yaml#L18-L19):
```
imagePullSecrets:
- name: {{ .Values.image.pullSecret }}
```

- and corresponding addition in [/chart/hello/values/yaml](https://github.com/open-toolchain/hello-helm/blob/56ccf087e2d8fc18f7774f84f9400f02060736f2/chart/hello/values.yaml#L8) as a placeholder for receiving an actual pull secret during deployment automatically.
```
pullSecret: regsecret
```



# Course Management System

This project is a **Course Management System** built using **Node.js** and **Express.js**. The application provides functionality for managing users (students, teachers, and admins), courses, and enrollment processes with role-based authentication. It includes automated schedulers to manage course and semester updates.

---

## Features

### 1. **Role-Based Authentication**
   - **Admin**: Can create and view users.
   - **Teacher**: Can manage courses and students.
   - **Student**: Can view and enroll in courses.

### 2. **Course Management**
   - Teachers can view courses they manage and students enrolled in them.
   - Students can view and enroll in courses for their semester.
   - Admins have access to user creation and management views.

### 3. **Automated Tasks**
   - **Course Status Update**: Closes courses older than 10 days using a daily scheduler.
   - **Semester Update**: Updates students' semesters twice a year (January 1st and July 1st).

### 4. **Dynamic Views**
   - **Login Page**: A login screen for all users.
   - **Dashboard**: Displays a user's role-specific information.
   - **Course Enrollment**: Shows available courses for a student to enroll in.
   - **Course Management**: Allows teachers to accept/reject students in their courses.

### 5. **APIs and Middleware**
   - Role-based middleware for securing routes.
   - RESTful APIs for fetching and updating data.

---



