import { ErrorMap } from '../../../domain/entities'
import { UnknownError } from '../../../presentation/errors'
import { HandleErrorUsecase } from '../../../domain/usecases'

export async function handleErrorService({ err }: HandleErrorUsecase.Params): Promise<HandleErrorUsecase.Response> {
  const error = ErrorMap.get(err)

  if (error) return error

  console.log(err)
  return new UnknownError()
}