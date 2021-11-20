

export interface Plane {
    aircraft: string;
    inRepair: boolean
    eta?: string
}

const generateEta = () => {
    // Sample, fake data
    const totalMinutes = Math.round(Math.random() * 500) + 1;
    return `ETA: ${Math.floor(totalMinutes / 60)} hours and ${totalMinutes % 60} minutes`
}


export const planes: Plane[] = [{aircraft: "Airbus Industries A321-271NXWL", inRepair: true, eta: generateEta()},
    {aircraft: "Boeing B 767-316ERWL", inRepair: false},
    {aircraft: "COMAC ARJ-21-700", inRepair: true, eta: generateEta()}]



const Repairs = () => <div>
    Planes that are being repaired:
    <ol>
        {planes.map(plane => <li><strong>{plane.aircraft}</strong> {plane.inRepair ? plane.eta : "Ready"}</li>)}
    </ol>
</div>;

  
  export default Repairs;