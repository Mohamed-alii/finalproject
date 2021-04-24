import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../../food-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery;
  searchResults:Array<any>;
  noResults:boolean = true; // defines if there are results for the search query or not ( true => no results , false => there are results)


  constructor(private foodServiceService:FoodServiceService , private activatedRoute:ActivatedRoute) {


    this.searchQuery = this.activatedRoute.snapshot.paramMap.get('query');

      // there is a query so we send the request
      this.foodServiceService.getRecipesSearch(this.searchQuery).subscribe( (data) => {

        this.searchResults = data.results;
  
        // here we check if we get result from the search request or not
        if( this.searchResults.length != 0 ){
          // here we got the results
          this.noResults = false;
        }
  
        
      } )

    

   }

  ngOnInit(): void {
  }

}
