import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod';
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import { useContext } from 'react';
import * as zod from 'zod';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from './styles'
import { CyclesContext } from '../../contexts/CyclesContext';
import { FormProvider, useForm } from 'react-hook-form';


/* Validacao do formularios utilizando a biblioteca zod */
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
  .number()
  .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
  .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

/* Precisamos inferir no formularios, o zod tem uma integracao com o typescript que
podemos fazer a inferencia no utilizando a funcao de validacao */
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  const {CreateNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
          task: '',
          minutesAmount: 0,
        }
  })
  const { handleSubmit, watch, reset} = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData){
    CreateNewCycle(data)
    reset()
  }

  const task = watch('task')

//Verifico caso o campo seja diferente de task(Task monitora o que esta sendo digitado), caso entao
//seja vazio eu deixo o botao desabilitado.
 const isSubmitDisable = !task;

//Consigo trabalhar com os erros que coloquei no schema.
//console.log(formState.errors)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
              Interromper
          </StopCountdownButton>
        
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24} />
              Começar
          </StartCountdownButton>
        )}
  
      </form>
    </HomeContainer>
  )
}
