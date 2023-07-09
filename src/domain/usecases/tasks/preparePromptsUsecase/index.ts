import { PrepareNewsletterPromptUsecase } from './prepareNewsletterPromptUsecase'
import { PrepareNewsSummaryPromptUsecase } from './prepareNewsSummaryPromptUsecase'
import { PreparePrioritizeNewsPromptUsecase } from './preparePrioritizeNewsPromptUsecase'

export type PreprarePromptsUsecase = {
  newsSummary: PrepareNewsSummaryPromptUsecase,
  newsletter: PrepareNewsletterPromptUsecase,
  prioritizeNews: PreparePrioritizeNewsPromptUsecase
}

export * from './prepareNewsletterPromptUsecase'
export * from './prepareNewsSummaryPromptUsecase'
export * from './preparePrioritizeNewsPromptUsecase'