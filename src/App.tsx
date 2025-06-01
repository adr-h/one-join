import { type ComponentProps } from 'react'
import { FullJoinLesson, InnerJoinLesson, OuterJoinLesson, SetupLesson } from './lessons';


type AppProps = ComponentProps<typeof SetupLesson> & ComponentProps<typeof InnerJoinLesson> &
  ComponentProps<typeof OuterJoinLesson> & ComponentProps<typeof FullJoinLesson>;

function App({ execQuery, resetDbState }: AppProps) {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen max-w-7xl p-5 mx-auto">
      <SetupLesson execQuery={execQuery} resetDbState={resetDbState} />
      <InnerJoinLesson  execQuery={execQuery} resetDbState={resetDbState} />
      <OuterJoinLesson execQuery={execQuery} resetDbState={resetDbState} />
      <FullJoinLesson execQuery={execQuery} resetDbState={resetDbState} />
    </div>
  )
}

export default App
