import TicketRepository from "@/domain/contracts/repositories/ticket-repository.interface";
import Ticket from "@/domain/entities/ticket";

export default class TicketRepositoryMemory implements TicketRepository {
  private tickets: Ticket[];
  static instance: TicketRepositoryMemory;

  private constructor() {
    this.tickets = [];
  }

  async create(ticket: Ticket): Promise<void> {
    await this.tickets.push(ticket);
  }

  static getInstance(): TicketRepositoryMemory {
    if (!TicketRepositoryMemory.instance) {
      TicketRepositoryMemory.instance = new TicketRepositoryMemory();
    }

    return TicketRepositoryMemory.instance;
  }
}
