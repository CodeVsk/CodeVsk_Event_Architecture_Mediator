import DomainEvent from "./domain.event";

export default class TicketNotify implements DomainEvent {
  name: string = "NotifyTicket";

  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly user_email: string,
    readonly team_email: string
  ) {}
}
