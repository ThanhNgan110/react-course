export interface IVariable {
  id: number,
  name: string,
  odd: boolean
}

interface AppState {
  isLoading: boolean,
  showToast: boolean
}

interface MemberState {
  variables: IVariable[]
}

export interface IRootState {
  app: AppState,
  member: MemberState,
}