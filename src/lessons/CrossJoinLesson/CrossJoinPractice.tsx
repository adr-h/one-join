import type { ComponentProps } from "react";
import { SqlRunner } from "../../components/SqlRunner";
import { CROSS_JOIN_QUERY } from "../../consts/sql";

type CrossJoinPracticeProps = Omit<
   ComponentProps<typeof SqlRunner>, 'initialValue'
>

export function CrossJoinPractice({ execQuery, resetDbState }: CrossJoinPracticeProps) {
   return (
      <>
         <SqlRunner execQuery={execQuery} initialValue={CROSS_JOIN_QUERY} resetDbState={resetDbState} />
      </>
   )
}








