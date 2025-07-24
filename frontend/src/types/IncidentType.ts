
export type Incident = {
    id: number,
    type: string;
    tsStart: string;
    tsEnd: string;
    thumbnailUrl: string;
    resolved:boolean;
    cameraId:number;
};