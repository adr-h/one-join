import { type ComponentProps } from 'react'
import { FullJoinLesson, InnerJoinLesson, LeftJoinLesson, Intro, RightJoinLesson, CrossJoinLesson } from './lessons';

type AppProps = ComponentProps<typeof Intro> & ComponentProps<typeof InnerJoinLesson> &
  ComponentProps<typeof LeftJoinLesson> & ComponentProps<typeof FullJoinLesson>;

function App({ execQuery, resetDbState }: AppProps) {
  // TODO: separate DB conns per lesson instead of a single shared one, to avoid cross pollution

  return (
    <div className="flex items-center justify-center flex-col min-h-screen max-w-7xl p-5 mx-auto gap-6">
      <Intro execQuery={execQuery} resetDbState={resetDbState} />
      <InnerJoinLesson execQuery={execQuery} resetDbState={resetDbState} />
      <LeftJoinLesson execQuery={execQuery} resetDbState={resetDbState} />
      <RightJoinLesson execQuery={execQuery} resetDbState={resetDbState} />
      <FullJoinLesson execQuery={execQuery} resetDbState={resetDbState} />
      <CrossJoinLesson execQuery={execQuery} resetDbState={resetDbState} />
      {/* <LateralJoinLesson execQuery={execQuery} resetDbState={resetDbState} /> */}
    </div>
  )
}

export default App
