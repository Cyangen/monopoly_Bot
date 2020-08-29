import { Component, OnInit } from '@angular/core';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  faDice = faDice;
  faMapMarkerAlt = faMapMarkerAlt;
  faCloud = faCloud;
  faArrowRight = faArrowRight;

  // todo: transform roadmap in service for optional proprieties (color)
  roadmap = [
    {
      id: '0',
      name: 'start',
      type: 'start',
      color: 'none'
    },
    {
      id: '1',
      name: 'vicolo corto',
      type: 'terrain',
      color: '#D93A97'
    },
    {
      id: '2',
      name: 'probabilità',
      type: 'event',
      color: 'none'
    },
    {
      id: '3',
      name: 'vicolo stretto',
      type: 'terrain',
      color: '#D93A97'
    },
    {
      id: '4',
      name: 'tassa patrimoniale',
      type: 'tax',
      color: 'none'
    },
    {
      id: '5',
      name: 'stazione sud',
      type: 'station',
      color: 'none'
    },
    {
      id: '6',
      name: 'bastioni gran sasso',
      type: 'terrain',
      color: '#ACDFFC'
    },
    {
      id: '7',
      name: 'imprevisti',
      type: 'event',
      color: 'none'
    },
    {
      id: '8',
      name: 'viale monte rosa',
      type: 'terrain',
      color: '#ACDFFC'
    },
    {
      id: '9',
      name: 'viale vesuvio',
      type: 'terrain',
      color: '#ACDFFC'
    },
    {
      id: '10',
      name: 'prigione',
      type: 'jail',
      color: 'none'
    },
    {
      id: '11',
      name: 'via accademia',
      type: 'terrain',
      color: '#F7941D'
    },
    {
      id: '12',
      name: 'società elettrica',
      type: 'company',
      color: 'none'
    },
    {
      id: '13',
      name: 'corso ateneo',
      type: 'terrain',
      color: '#F7941D'
    },
    {
      id: '14',
      name: 'piazza università',
      type: 'terrain',
      color: '#F7941D'
    },
    {
      id: '15',
      name: 'stazione ovest',
      type: 'station',
      color: 'none'
    },
    {
      id: '16',
      name: 'via verdi',
      type: 'terrain',
      color: '#965538'
    },
    {
      id: '17',
      name: 'probabilità',
      type: 'event',
      color: 'none'
    },
    {
      id: '18',
      name: 'corso raffaello',
      type: 'terrain',
      color: '#965538'
    },
    {
      id: '19',
      name: 'piazza dante',
      type: 'terrain',
      color: '#965538'
    },
    {
      id: '20',
      name: 'parcheggio',
      type: 'parking',
      color: 'none'
    },
    {
      id: '21',
      name: 'via marco polo',
      type: 'terrain',
      color: '#ED1A24'
    },
    {
      id: '22',
      name: 'imprevisti',
      type: 'event',
      color: 'none'
    },
    {
      id: '23',
      name: 'corso magellano',
      type: 'terrain',
      color: '#ED1A24'
    },
    {
      id: '24',
      name: 'largo colombo',
      type: 'terrain',
      color: '#ED1A24'
    },
    {
      id: '25',
      name: 'stazione nord',
      type: 'station',
      color: 'none'
    },
    {
      id: '26',
      name: 'viale costantino',
      type: 'terrain',
      color: '#FDF000'
    },
    {
      id: '27',
      name: 'viale traiano',
      type: 'terrain',
      color: '#FDF000'
    },
    {
      id: '28',
      name: 'società acqua potabile',
      type: 'company',
      color: 'none'
    },
    {
      id: '29',
      name: 'piazza giulio cesare',
      type: 'terrain',
      color: '#FDF000'
    },
    {
      id: '30',
      name: 'vai in prigione',
      type: 'jail',
      color: 'none'
    },
    {
      id: '31',
      name: 'via roma',
      type: 'terrain',
      color: '#1FB25A'
    },
    {
      id: '32',
      name: 'corso impero',
      type: 'terrain',
      color: '#1FB25A'
    },
    {
      id: '33',
      name: 'probabilità',
      type: 'event',
      color: 'none'
    },
    {
      id: '34',
      name: 'largo augusto',
      type: 'terrain',
      color: '#1FB25A'
    },
    {
      id: '35',
      name: 'stazione est',
      type: 'station',
      color: 'none'
    },
    {
      id: '36',
      name: 'imprevisti',
      type: 'event',
      color: 'none'
    },
    {
      id: '37',
      name: 'viale dei giardini',
      type: 'terrain',
      color: '#601C6E'
    },
    {
      id: '38',
      name: 'tassa di lusso',
      type: 'tax',
      color: 'none'
    },
    {
      id: '39',
      name: 'parco della vittoria',
      type: 'terrain',
      color: '#601C6E'
    }
  ];
  currentPosition = 0;
  revCounter = 0;
  rollDice: number;
  randomDecision: number;
  decisionModifier = 0;
  currentCell: { name: string, type: string, id: string, color: string };
  ownedTerrains: { name: string, type: string, id: string, color: string }[] = [];
  decisionStatus = '...';

  constructor() { }

  ngOnInit() {
  }

  onPlayTurn() {
    console.log('turn started!');
    this.rollDice = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
    // console.log('tiro i dadi, ed esce: ' + this.rollDice);
    this.currentPosition = this.currentPosition + this.rollDice;
    // console.log('adesso mi trovo in: ' + this.currentPosition);

    // check if go to jail
    if (this.currentPosition === 30) {
      console.log('oops! vado in prigione!');
      this.currentPosition = 10;
    }

    // contagiri
    if (this.currentPosition > 39) {
      this.currentPosition = this.currentPosition - 40;
      console.log('passo dal via!');
      this.revCounter = this.revCounter + 1;
    }

    this.currentCell = this.roadmap[this.currentPosition];
    // console.log('questa è la casella: ' + this.currentCell.name);

    // check if currentCell is a terrain
    if (this.currentCell.type === 'terrain') {
      this.randomDecision = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

      // counting terrains color
      if (this.ownedTerrains.length > 0) {
        const currentColor = this.currentCell.color;
        const count = this.ownedTerrains.filter((obj) => obj.color === currentColor).length;
        if (count === 1 ) {
          console.log('ho già un elemento di questo colore:  ' + currentColor );
          this.decisionModifier = 1;
        } else if (count === 2) {
          console.log('ho ben due elementi di questo colore:  ' + currentColor + ' sono molto propenso ad comprare!' );
          this.decisionModifier = 2;
        } else if (count === 3) {
          console.log('ho 3 elementi di questo colore:  ' + currentColor + 'costruisco case!');
        }
      }
      console.log('casual decision: ' + this.randomDecision + this.decisionModifier);
      // decision if buy a terrain
      if (this.randomDecision + this.decisionModifier >= 5) {
        console.log('I will buy: ' + this.currentCell.name);
        this.decisionStatus = 'I buy it!';
        if (!this.ownedTerrains.includes(this.currentCell)) {
          this.ownedTerrains.push(this.currentCell);
        } else {
          console.log(this.currentCell.name + ' è già in mio possesso!');
          this.decisionStatus = 'It is mine!';
        }
      } else {
        console.log('I will Pass');
        this.decisionStatus = 'I Pass!';
      }
    }
  }

  onRemoveContract(contractId) {
    return this.ownedTerrains.splice(contractId, 1);
  }

}
