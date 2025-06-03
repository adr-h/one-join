export type Result<T> = {
   rows: Array<T>,
   fields: {
      name: keyof T & string;
      // dataTypeID: number;
   }[];
}

const _testValidResult: Result<{ age: number, job: string }> = {
   rows: [
      { age: 40, job: 'product manager' }
   ],
   fields: [
      { name: 'age' },
      { name: 'job' }
   ]
}
