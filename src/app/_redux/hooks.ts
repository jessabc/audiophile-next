import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// https://redux-toolkit.js.org/tutorials/typescript
// import { useAppSelector, useAppDispatch } from 'app/hooks'
//   const count = useAppSelector((state) => state.counter.value)
//   const dispatch = useAppDispatch()