/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../components/Resend/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
console.log(resend, 'resend')

export default async (NextApiRequest, NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Mikyle <sales@northgraphicsupplies.com>',
    to: ['reyesmikyle17@gmail.com'],
    subject: 'Test',
    react: EmailTemplate({ firstName: 'Kyle' }),
  })

  if (error) {
    return NextApiResponse.json(error)
  }

  console.log(data, 'data')

  NextApiResponse.status(200).json(data)
}
