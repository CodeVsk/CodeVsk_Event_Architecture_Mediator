import DomainEvent from "./domain.event";

export default class TicketOpen implements DomainEvent {
  name: string = "OppenedTicket";

  constructor(
    readonly title: string,
    readonly description: string,
    readonly user_email: string
  ) {}
}
