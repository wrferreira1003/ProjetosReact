import { produce } from 'immer'

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    starData: Date;
    interruptedDate?: Date;
    finasheDate?: Date;
  }

interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string | null;
}

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    MARK_CURRENT_CYCLES_AS_FINISHED = 'MARK_CURRENT_CYCLES_AS_FINISHED',
}

export function CyclesReduce(state: CyclesState, action:any) {

    if(action.type === ActionTypes.ADD_NEW_CYCLE){
    //   return {
    //     ...state, 
    //     cycles: [...state.cycles, action.payload.newCycle], //copiar todos os ciclos existente e alterar um novo ciclo no final.
    //     activeCycleId: action.payload.newCycle.id,
    //   }

    //Usando o immer que nos da uma forma mais simples de realizar alteração na variavel
    return produce(state, (draft) =>  {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id;
    })
    }

    if (action.type === ActionTypes.INTERRUPT_CURRENT_CYCLE){
      return {
        ...state,
        cycles: state.cycles.map((cycle) =>{
          if (cycle.id === state.activeCycleId){
            return { ...cycle, interruptedDate: new Date()}
          } else {
            return cycle
          }
          }),
        activeCycleId: null,
      }
    }

    if (action.type === ActionTypes.MARK_CURRENT_CYCLES_AS_FINISHED){
      return {
        ...state,
        cycles: state.cycles.map((cycle) =>{
          if (cycle.id === state.activeCycleId){
            return { ...cycle, finasheDate: new Date()}
          } else {
            return cycle
          }
          }),
        activeCycleId: null,
      }
    }

    return state

}
