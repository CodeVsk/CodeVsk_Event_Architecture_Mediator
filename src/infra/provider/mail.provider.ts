import Mail from "@/domain/contracts/providers/mail.interface";

export default class MailMemory implements Mail {
  mails: Message[];

  constructor() {
    this.mails = [];
  }

  async send(
    to: string,
    from: string,
    title: string,
    body: string
  ): Promise<void> {
    this.mails.push({
      message: `From: ${from} | To: ${to} | Title: ${title} | Message: ${body}`,
    });
    console.log(this.mails[0]);
  }
}

type Message = {
  message: string;
};
