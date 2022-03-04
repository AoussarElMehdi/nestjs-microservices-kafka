import { Transport, ClientProxyFactory } from "@nestjs/microservices";
import { Producer } from "kafkajs";

export const KafkaProducerProvider = {
  provide: "KafkaProducer",
  useFactory: (): Promise<Producer> => {
    const kafkaClient = ClientProxyFactory.create({
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        producer: {
          allowAutoTopicCreation: true,
        },
      },
    });

    return kafkaClient.connect();
  },
};