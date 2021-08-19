export interface RootState {
    api:any
    app:{
        selectedJob:string
    }
}

export interface Action {
type: string
payload:any
}

export interface Service {
    id:number,
    jobId: string,
    title:string
}