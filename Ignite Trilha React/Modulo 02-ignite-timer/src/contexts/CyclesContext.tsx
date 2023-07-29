import { ReactNode, createContext, useEffect, useReducer, useState } from 'react';
import { ActionTypes, Cycle, CyclesReduce } from '../Reduces/Cycles';
import { differenceInSeconds } from 'date-fns';

//Vamos criar uma inteface para sabermos os formatos do ciclo.


interface CreateCycleData{
    task: string;
    minutesAmount: number;
}

interface CycleContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    markCurrentCyclesAsFinished: () => void;
    amountSecondsPassed:number;
    setSecondsPassed: (seconds:number) => void;
    CreateNewCycle: (data:CreateCycleData) => void;
    interruptCurrentCycle:() => void;
  }

interface CycleContextProviderProps{
    children: ReactNode
}



export const CyclesContext = createContext({} as CycleContextType)

export function CyclesContextProvider({children}: CycleContextProviderProps){

  const [cyclesState, dispatch]= useReducer(CyclesReduce,{
    cycles: [],
    activeCycleId: null,
    }, (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@WellTime:cycles-state',
      );
      
      if (storedStateAsJSON){
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  )
  const {cycles, activeCycleId} = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() =>{
    
    if (activeCycle){
      return differenceInSeconds(new Date(), new Date(activeCycle.starData),
      )
    } 
    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@WellTime:cycles-state', stateJSON)
  }, [cyclesState])
  
  
  

    

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
      }

    
      
    function markCurrentCyclesAsFinished(){
      dispatch({
        type: ActionTypes.MARK_CURRENT_CYCLES_AS_FINISHED,
        payload:{
          activeCycleId,
        }
      })

      }
    
    //Criando a funcao para criar o novo ciclo e armazenar no Array Cycle.
    function CreateNewCycle(data:CreateCycleData) {
        const id = String(new Date().getTime())
    
        const newCycle: Cycle = {
        id,
        task: data.task,
        minutesAmount: data.minutesAmount,
        starData: new Date(),      
    }

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload:{
        newCycle,
      }
    })
    setAmountSecondsPassed(0)
  }

  //Funcao para interromper o ciclo
   function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload:{
        activeCycleId
      }
    })
 }

    return (
        <CyclesContext.Provider 
          value={{
            activeCycle, 
            activeCycleId, 
            markCurrentCyclesAsFinished, 
            amountSecondsPassed,
            setSecondsPassed,
            CreateNewCycle,
            interruptCurrentCycle,
            cycles
          }}
        >   
        {children}
        </CyclesContext.Provider>
    )
}