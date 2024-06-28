import Ticket from "@/domain/entities/ticket";

export default interface TicketRepository {
  create(ticket: Ticket): Promise<void>;
}
