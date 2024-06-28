export default class Ticket {
  constructor(
    private ticket_id: string,
    readonly title: string,
    readonly description: string,
    readonly user_email: string,
    private team_email: string,
    private status: string
  ) {}

  static create(title: string, description: string, user_email: string) {
    const ticket_id = crypto.randomUUID();
    const team_email = "no-reply@ti.com";
    const status = "open";
    return new Ticket(
      ticket_id,
      title,
      description,
      user_email,
      team_email,
      status
    );
  }

  close() {
    this.status = "close";
  }

  getId(): string {
    return this.ticket_id;
  }

  getTeamEmail(): string {
    return this.team_email;
  }
}
