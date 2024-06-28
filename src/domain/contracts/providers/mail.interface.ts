export default interface Mail {
  send(to: string, from: string, title: string, body: string): Promise<void>;
}
