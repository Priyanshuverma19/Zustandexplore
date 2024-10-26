import { create } from 'zustand'
interface countStore{
   count:number;
   increment:()=>void;
   decrement:()=>void;
   reset:()=>void;


   
}

export const useCountStore = create<countStore>((set) => ({
  count: 3,
  increment:()=>set((state)=>({count:state.count-1})),
  decrement:()=>set((state)=> {
    return{ count:state.count > 0 ? state.count-1:0}
  }),
  reset:()=>set({count:0}),
 
}))
