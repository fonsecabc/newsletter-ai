# Newsletter AI Microservice

## **Application Overview**

Newsletter AI is an application that automatically generates newsletters using artificial intelligence to personalize the content based on user data and business information. The platform analyzes customer preferences, behaviors, and interests, creating relevant and targeted newsletters that help increase engagement and retention. With Newsletter AI, companies can optimize their marketing campaigns, save time, and offer more personalized and effective content to their customers.


## **Architecture Overview**

Our system is based on three important concepts: **Clean Architecture**, **Domain-Driven Design** (DDD), and **Object-Oriented Programming** (OOP). These concepts help us create an organized, flexible, and easy-to-maintain system.

### **Architecture Layers**

Our architecture is divided into **five distinct layers**, each with a specific role. These layers are:

1. **Domain Layer**: This is the deepest layer and contains the definitions of **use cases**, **entities**, **enums**, and **errors**. It defines the business rules for each service in the use cases.
2. **Application Layer**: Here, we implement the **services** that execute the use cases from the domain layer. We use **classes** that implement the **interfaces** defined in the domain layer. These services perform specific actions and return results as defined in the use cases.
3. **Infra Layer**: In this layer, we find the **repositories**, **adapters**, **validators**, and other elements that interact with external sources, such as APIs and modules. The **repositories** implement the contracts defined in the application layer.
4. **Presentation Layer**: Here, we define the **controllers** and **helpers** that handle interaction with the external world, such as user interfaces and APIs. The controllers prepare the requests and responses for the services in the application layer.
5. **Main Layer**: This is the outermost layer and contains **factories** that create instances of services, repositories, and other objects defined in the system. We also define specific configurations and adapters, such as adapters for HTTP services.

### **Communication Flow**

Each layer has a specific purpose and clear rules for communication:

- The **domain layer** can only import from itself. It defines the business rules and fundamental structures.
- The **application layer** can communicate with the **domain layer** and itself. It implements the services according to the rules defined in the domain layer.
- The **infrastructure layer** contains the **repositories** and other elements that interact with external resources. It implements the contracts defined in the application layer.
- The **presentation layer** deals with interaction with the external world, preparing requests and responses. It communicates with the **application layer**.
- The **main layer** contains factories that create instances of objects and define configurations. It is the entry point of the system and controls the initialization.

### **To run the project:**

1. Install the depencies using *npm install*
2. Setup env variables at .env
3. Run the mocks with using *npm run dev*
