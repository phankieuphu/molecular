"use strict";
import { ServiceBroker } from 'moleculer';



const broker = new ServiceBroker({
  logger: console
});


broker.createService({
  name: "test", 
  actions: {
    first(ctx) {
      return ctx.call("test.second", null,  {
        meta: {
              b : 10
            }
        })
    },
    second(ctx) {
      console.log(ctx.meta)
    }
  }
})

broker.call("test.first")

broker.start()
