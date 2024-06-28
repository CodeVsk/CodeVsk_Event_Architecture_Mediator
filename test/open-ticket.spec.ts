import MailMemory from "../src/infra/provider/mail.provider";
import Mediator from "../src/infra/mediator/mediator";
import NotifyTicketHandler from "../src/application/handlers/notify-ticket.handler";
import OpenTicket from "../src/application/usecases/open-ticket";
import OpenTicketHandler from "../src/application/handlers/open-ticket.handler";
import TicketRepositoryMemory from "../src/infra/repository/ticket.repository";

test("Devo criar um ticket e disparar um email ao usuário informando sua criação.", async () => {
  const mediator = new Mediator();
  const ticketRepository = TicketRepositoryMemory.getInstance();

  const input = {
    title: "Servidor instável",
    description: "O servidor de produção está instável cerca de 1 dia.",
    user_email: "client@enterprise.com",
  };

  const openTicketHandler = new OpenTicketHandler(ticketRepository, mediator);
  mediator.register(openTicketHandler);

  const mail = new MailMemory();
  const notifyTicketHandler = new NotifyTicketHandler(mail);
  mediator.register(notifyTicketHandler);

  const openTicket = new OpenTicket(mediator);
  await openTicket.execute(input);

  expect(mail.mails[0]).toBe(
    "From: no-reply@ti.com | To: client@enterprise.com | Title: Servidor instável | Message: O servidor de produção está instável cerca de 1 dia."
  );
});
