# NeoPay resreach tech-stack document:
## Target:
## Scoop:

### Moleculer Framework:
Molecular is a fast, modern and powerful microservices framework for Node.js it helps to you build efficient, reliable & scalable services. Molecular providers many freature for building and managing yourl microservies.

+ Sevices:
   - These are the core building blockss in Moleculer that hanlde te actual bisiness logic
   -    Each services can define one or more **actions** that contain the actual bissiness logic, and these actions can be called locally or remotely across the network
+ Actions:
    - These are method within servies that can be called remotely
    - An ation can be called by its name an can have input parameters and return values
+ Events:
   - These allow servies to comminicate asynchronously
   - This enables an **event-drivent architecture**, where services can communicate asynchronously with out directly invoking each other
+ Broker:
    - The **ServiceBroker** is the main component of Moleculer. it handlers services, calls actions, emits event and communications with remote nodes. You must create a **ServiceBorker** instance on every node.
    - It is responsible for routing request betweeen servifes, managing the life cycle of servies, and ensuring that services can discober and communicate with each other

    
### How moleculer Works:
+   Service Discovery: Moleculer services are registerd with a **broker**. The broker manages the discovery of services, meaning that servies can be located and invoked dynamically. When a servie starts. it register itself with teh borker, which allows other servies to discover it and call its actions
+ Action Invocation:       
    - To invoke an action, aservice calls another services's actions using the broker, and the borkers router the quest to the correct servies. The call can be synchronous or asynchronous, depeding on how it's set up.
    - The result of the actions is returned to the calling service. either directly or via a callback.
+ Event Handling:
    - Service can emit events to inform other servies abut important actions or state changes
    - This communicate is often **asynchronous**, meaning that servies are decopled and don't need to know about each other's internal details
+ Load balancing
    - When multiple instances of a service are running, MOleculer can automatically load-balance request among these instance, ensuring scalebility and reliabiity. It can use various strategies to balance the load
+ Fault Tolerance:
    - Moculer provider built-in **circuit breaker** and **retry** mechanisms, which allow servies to gracefully handle failures and retry operations when needed. improving fault tolerance in distributed systems.


### CQRS pattern
CQRS ( Command Query Responsibility Segregation ) stands for Command and Query Responsibility Segragation. a pattern that separates read and update operations for a data store. Implementing CQRS in your application can maximize its performance, scalebility, and security. The flexibilit created by migrating to CQRS allows a system to btter evole over time and prevents update commands causing merge conflicts at the domain level

 - Context and Problem:
    In traditional architecture, the same data model is used to query and update a databse, That's simple and works well for basic CRUD operations. In more complex aplication, however, this aproad can become unwieldy. For exmaple, on the read sie, the application may perform many ddifferent queries, returing data transfer objects ( DTOs) with different shapes. Object mapping can become complicated On the write side, the model may implement complex validation and bussiness logic. As a result, you can end up with overly complex model that does too much

- Solutions:
    + CQRS separates reads and write in to different models, using **commands** to update data, and **queries** to read data



### NATS
NATS (Neural Autonomic Transprot System) is simple and high performance open source data layer for cloud native applications,ioT
messageing, and microservices architectures

- Publish and subscribe to messages at milions of message per second. At least once delivery
- Support fan-in/out delivery patterns
- Request/reply
- Every major language is supported
- Persistence via JetSream
    + at most once delivery or **exactly once** delivery
    + work queues
    + sream porocessing
    + data replication
    + data deuplication
    + Higher order data strucstures
- Security:
    + TS
    + JWT-based zero trust security
- Custering
    + High availability
    + Fault tolerance
    + Auto-discovery
- Protocols supported:
    + TCP
    + MQTT
    + Websockets


### ELK
The ELK stack is an acronym used to descirbe a stack that compries three popular projeccts:  Elasticsreach, Logstash, and Kibana.
Often referred to as Elasticsearch, the ELK stack gives you the ability to aggregate logs from all your systems and application analyze these logs, an create visualizations for applications and infrastructure monitoring, faster troubleshooting, security analyics and more.
- Elasticsearch
    + Elasticsearch is distributed search and analytics engine built on Apache Lucene. Support for various langagues high performance and schema-free JSON documents makes Elasticsearch and ideal choice for various log analytics and search use cases
- Logstash:
    Logstash is a lightweith, open-souce, server-side data processing pipeline that allows you to collect data from various souces,
    transform it one the fly, and send it to your desired destination. It is most often used as data pipeline for Elasticsearch
- Kibana:
    Kibana is data visualization and exploration tool used for log and time-series analytics, application monitoring , and poerational
    intelligene use cases. it offers powerfull and easy-to-use features such as histograms. line graphs, pie charts heat maps, and built-in geospatila support
