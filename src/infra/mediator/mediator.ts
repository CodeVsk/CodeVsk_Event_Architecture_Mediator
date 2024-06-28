import Handler from "@/application/handlers/handler";
import DomainEvent from "@/domain/events/domain.event";

export default class Mediator {
  private handlers: Handler[] = [];

  register(handler: Handler): void {
    this.handlers.push(handler);
  }

  notify(event: DomainEvent): void {
    for (const handler of this.handlers) {
      if (event.name === handler.eventName) {
        handler.handle(event);
      }
    }
  }
}
