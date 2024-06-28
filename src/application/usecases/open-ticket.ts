import TicketOpen from "@/domain/events/ticket-open.event";
import Mediator from "@/infra/mediator/mediator";

export default class OpenTicket {
  constructor(readonly mediator: Mediator) {}

  async execute(input: Input): Promise<void> {
    const ticketOpen = new TicketOpen(
      input.title,
      input.description,
      input.user_email
    );
    this.mediator.notify(ticketOpen);
  }
}

type Input = {
  title: string;
  description: string;
  user_email: string;
};
