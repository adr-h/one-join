import type { ComponentProps } from "react";
import { SqlRunner } from "../components/SqlRunner";
import { INITIAL_MIGRATIONS_AND_SEEDS } from "../consts/sql";

type SetupLessonProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function SetupLesson({ execQuery, resetDbState }: SetupLessonProps) {

   return (
      <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
         <input type="checkbox" />
         <h1 className="collapse-title text-3xl font-bold underline">
            Intro
         </h1>
         <div className="collapse-content text-sm">
            <div>
               Blah blah blah. Maybe just explain the initial tables and their relationships. Maybe use mermaid charts
            </div>
            <SqlRunner
               resetDbState={resetDbState}
               execQuery={execQuery}
               initialValue={''}
            />
         </div>
      </div>
   )
}
