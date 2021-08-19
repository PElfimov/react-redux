import { RootState } from 'modules/lib/interfaces';

export const selectAppState = (store:RootState) => store.app
export const selectedJob = (store:RootState) => store.app.selectedJob

