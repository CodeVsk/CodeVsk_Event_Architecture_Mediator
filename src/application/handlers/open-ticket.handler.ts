import TicketRepository from "@/domain/contracts/repositories/ticket-repository.interface";
import Mediator from "@/infra/mediator/mediator";
import Handler from "./handler";
import TicketOpen from "@/domain/events/ticket-open.event";
import TicketNotify from "@/domain/events/ticket-notify.event";
import Ticket from "@/domain/entities/ticket";

export default class OpenTicketHandler implements Handler {
  eventName: string = "OppenedTicket";

  constructor(
    readonly ticketRepository: TicketRepository,
    readonly mediator: Mediator
  ) {}

  async handle(event: TicketOpen): Promise<void> {
    const ticket = Ticket.create(
      event.title,
      event.description,
      event.user_email
    );

    await this.ticketRepository.create(ticket);

    const ticketOppened = new TicketNotify(
      ticket.getId(),
      ticket.title,
      ticket.description,
      ticket.user_email,
      ticket.getTeamEmail()
    );

    this.mediator.notify(ticketOppened);
  }
}
