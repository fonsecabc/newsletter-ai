export const variables = {
  firebaseAdminSdk: process.env.CONFIG_FIREBASE_ADMIN_SDK ?? 'undefined',
  serpApiKey: process.env.SERP_API_KEY ?? 'undefined',
  openAIApiKey: process.env.OPENAI_API_KEY ?? 'undefined',
  aiFrequencyPenalty: process.env.AI_FREQUENCY_PENALTY ?? 'undefined',
  aiPresencePenalty: process.env.AI_PRESENCE_PENALTY ?? 'undefined',
  aiTemperature: process.env.AI_TEMPERATURE ?? 'undefined',
  aiModel: process.env.AI_MODEL ?? 'undefined',
  jwtSecret: process.env.JWT_SECRET ?? 'undefined',
}

export const testVariables = (): boolean => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined' && value !== '')
  })
}
