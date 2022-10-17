export class Habilidad {
    id?: number;
    nombreHab: string;
    porcentajeHab: number;

    constructor(nombreHab: string, porcentajeHab: number) {
        this.nombreHab = nombreHab;
        this.porcentajeHab = porcentajeHab;
    }
}
