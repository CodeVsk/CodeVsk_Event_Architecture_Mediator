import Mail from "@/domain/contracts/providers/mail.interface";
import Handler from "./handler";
import TicketNotify from "@/domain/events/ticket-notify.event";

export default class NotifyTicketHandler implements Handler {
  eventName: string = "NotifyTicket";

  constructor(readonly mail: Mail) {}

  async handle(event: TicketNotify): Promise<void> {
    this.mail.send(
      event.user_email,
      event.team_email,
      event.title,
      event.description
    );
  }
}
