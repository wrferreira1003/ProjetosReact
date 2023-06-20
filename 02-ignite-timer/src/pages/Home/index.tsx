import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import {
  HomeContainer,
  FormContainer,
  CountDownContainer,
  Separotor,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput
} from './styles'

export function Home() {

  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data:any) {
    console.log(data)
  }

const task = watch('task')
const isSubmitDisable = !task;



  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task"
            list="task-suggestions" 
            placeholder='De um nome para o seu projeto'
            {...register('task')}
            />

          <datalist id="task-suggestions" >
            <option value="Projeto 1"/>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
            <option value="Projeto 4"/>
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutesAmount" 
            placeholder='00'
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', {valueAsNumber:true})}
            />

          <span>Minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separotor>:</Separotor>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
