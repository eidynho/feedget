import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "aa67b98c7c51e1",
    pass: "ff935fe80380a3"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <abacate@email.com>',
      to: 'Vinicius Eidy <zviniciuseidy2@gmail.com>',
      subject,
      html: body,
    })
  }
}