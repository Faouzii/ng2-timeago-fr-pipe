# Ng2-timeago-fr-Pipe

A very simple Angular pipe for converting dates into a french time ago

| Time Range  | Pipe output |
| ------------- | ------------- |
| 0 - 30 seconds | à l'instant  |
| 30 - 59 seconds  | il y a X seconds  |
| 60 - 119 seconds  | il y a 1 minute  |
| 2 - 59 minutes  | il y a X minutes  |
| 60 minutes - 119 minutes  | il y a 1 heure  |
| 2 - 23 heures  | il y a X heures  |
| 24 heurs - 47 heures   | il y a 1 jour  |
| 2 jours - 6 jours   | il y a X jours  |
| 7 jours - 13 jours   | il y a 1 semaine  |
| 2 semaines - 3 semaines   | il y a X semaines  |
| 4 semaines - 7 semaines   | il y a 1 mois  |
| 2 mois - 11 mois   | il y a X mois  |
| 12 mois - 23 mois   | il y a 1 année |
| + 2 ans    | il y a X années |


## Installation

you can import this package to your angular project as the following :

    npm install ng2-timeago-fr-pipe --save

## Usage

You can use this pipe in your angular projet, as the following :

1- Import the pipe Ng2TimeagoFrPipe in the module where you want to use it :
    
    import { Ng2TimeagoFrPipe } from 'ng2-timeago-fr-pipe';
    
2- Add "Ng2TimeagoFrPipe" to your module declarations

    @NgModule({
	    imports: [... etc ...],
	    declarations: [..., Ng2TimeagoFrPipe, ... ]
    })

3- finally, in your component template you can simply do : 
   
	<p>{{myBirthDate | ng2TimeagoFr}}</p>

