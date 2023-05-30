import { TrancheModel } from '../tranche/tranche-model';

export class FraisScolariteModel {
    id: string | undefined ;
    section: any;
    classe : any;
    matricule : any;
    date_paiement : any;
    frais_examen : any;
    frais_apee : any;
    statut : string='incomplet';
    dossierTranche : TrancheModel[] = [];
}
