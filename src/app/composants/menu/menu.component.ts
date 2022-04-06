import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public menuProperties : Array<Menu> =[
  {
    id:'1',
    titre:'Tableau de bord',
    icon:'fa-solid fa-chart-line',
    url:'',
    sousMenu:[
      {
        id:'11',
        titre:'vue d\'ensemble',
        icon:'fa-solid fa-chart-pie',
        url:'',
      },
      {
        id:'12',
        titre:'Statistiques',
        icon:'fa-solid fa-chart-column',
        url:'statistiques',
      }
    ]
  },
  {
    id:'2',
    titre:'Articles',
    icon:'fa-brands fa-product-hunt',
    url:'',
    sousMenu:[
      
      {
        id:'21',
        titre:'Articles',
        icon:'fa-brands fa-product-hunt',
        url:'articles',
      },
      
      {
        id:'22',
        titre:'Mouvement du stock',
        icon:'fa-solid fa-boxes-stacked',
        url:'',
      }

    ]
  },
  {
    id:'3',
    titre:'Clients',
    icon:'fa-solid fa-users',
    url:'',
    sousMenu:[
      
      {
        id:'31',
        titre:'Clients',
        icon:'fa-solid fa-users',
        url:'',
      },
      {
        id:'32',
        titre:'Commandes clients',
        icon:'fa-brands fa-first-order-alt',
        url:'',
      }
    ]
  },
  {
    id:'4',
    titre:'fournisseurs',
    icon:'fa-solid fa-user-tie',
    url:'',
    sousMenu:[
      
      {
        id:'41',
        titre:'fournisseurs',
        icon:'fa-solid fa-user-tie',
        url:'',
      },
      {
        id:'42',
        titre:'Commandes fournisseurs',
        icon:'fa-brands fa-first-order-alt',
        url:'',
      }
    ]
  },
  {
    id:'5',
    titre:'Parametrages',
    icon:'fa-solid fa-gears',
    url:'',
    sousMenu:[
      
      {
        id:'51',
        titre:'Catagories',
        icon:'fa-solid fa-table',
        url:'',
      },
      {
        id:'52',
        titre:'Utilisateurs',
        icon:'fa-solid fa-user-group',
        url:'',
      }
    ]
  }
];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?: string):void {
    this.router.navigate([url]);

  }

}
