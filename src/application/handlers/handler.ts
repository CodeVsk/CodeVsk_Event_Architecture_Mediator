import DomainEvent from "@/domain/events/domain.event";

export default interface Handler {
  eventName: string;
  handle(event: DomainEvent): Promise<void>;
}
