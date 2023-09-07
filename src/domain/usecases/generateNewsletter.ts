import { Newsletter } from '../entities'

export interface GenerateNewsletterUsecase {
  perform(params: GenerateNewsletterUsecase.Params): Promise<GenerateNewsletterUsecase.Response>
}

export namespace GenerateNewsletterUsecase {
  export type Params = {
    author: string
    greet: string
    theme: string
    days?: number
    tone: string
    businessType: string
    title: string
    bodyExample?: string
  }

  export type Response = Newsletter | Error
}
